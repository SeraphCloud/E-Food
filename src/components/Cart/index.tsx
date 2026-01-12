import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../../store/reducers/cart";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import lixeira from "../../assets/lixeira.svg";
import { formatBRL } from "../../utils/format";
import type { RootReducer } from "../../store";
import type { Dish, DeliveryData, CheckoutPayload } from "../../types/api";
import { useCheckoutMutation } from "../../services/api";
import {
	Button,
	CartContainer,
	CartInfos,
	CartItemStyled,
	Delete,
	Overlay,
	Sidebar,
	InputGroup,
	Row,
	Label,
	Input,
	Textarea,
	ConfirmationContainer,
} from "./styles";

const applyMask = (value: string, mask: string): string => {
	let result = "";
	let valueIndex = 0;

	for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
		const maskChar = mask[i];
		const valueChar = value[valueIndex];

		if (maskChar === "9") {
			if (/\d/.test(valueChar)) {
				result += valueChar;
				valueIndex++;
			}
		} else {
			result += maskChar;
			if (valueChar === maskChar) {
				valueIndex++;
			}
		}
	}

	return result;
};

type MaskedInputProps = {
	name: string;
	mask: string;
	placeholder?: string;
	className?: string;
};

const MaskedInput = ({
	name,
	mask,
	placeholder,
	className,
}: MaskedInputProps) => {
	const [field, , helpers] = useField(name);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const maskedValue = applyMask(e.target.value, mask);
		helpers.setValue(maskedValue);
	};

	return (
		<Input
			{...field}
			type="text"
			placeholder={placeholder}
			className={className}
			onChange={handleChange}
			value={field.value || ""}
		/>
	);
};

type CartItemProps = {
	dish: Dish;
	quantity: number;
	onIncrement: () => void;
	onDecrement: () => void;
	onRemove: () => void;
};

const CartItem = ({
	dish,
	quantity,
	onIncrement,
	onDecrement,
	onRemove,
}: CartItemProps) => (
	<CartItemStyled>
		<img src={dish.foto} alt={dish.nome} />
		<div>
			<h3>{dish.nome}</h3>
			<p>{formatBRL(dish.preco)}</p>
			<div className="quantity-controls">
				<button type="button" className="quantity-btn" onClick={onDecrement}>
					<RiSubtractFill />
				</button>
				<span className="quantity">{quantity}</span>
				<button type="button" className="quantity-btn" onClick={onIncrement}>
					<RiAddFill />
				</button>
			</div>
		</div>
		<Delete onClick={onRemove}>
			<img src={lixeira} alt="Remove item" />
		</Delete>
	</CartItemStyled>
);

type CartProps = {
	onClose: () => void;
};

type Step = "cart" | "delivery" | "payment" | "confirmation";

const deliverySchema = Yup.object().shape({
	receiver: Yup.string().required("Campo obrigatório"),
	address: Yup.object().shape({
		description: Yup.string().required("Campo obrigatório"),
		city: Yup.string().required("Campo obrigatório"),
		zipCode: Yup.string().required("Campo obrigatório"),
		number: Yup.number()
			.required("Campo obrigatório")
			.positive("Deve ser positivo"),
		complement: Yup.string(),
	}),
});

const paymentSchema = Yup.object().shape({
	name: Yup.string().required("Campo obrigatório"),
	number: Yup.string()
		.required("Campo obrigatório")
		.matches(
			/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
			"Número do cartão deve ter 16 dígitos",
		),
	code: Yup.string()
		.required("Campo obrigatório")
		.matches(/^\d{3}$/, "CVV deve ter 3 dígitos"),
	expires: Yup.object().shape({
		month: Yup.string()
			.required("Campo obrigatório")
			.matches(/^\d{2}$/, "Mês deve ter 2 dígitos"),
		year: Yup.string()
			.required("Campo obrigatório")
			.matches(/^\d{4}$/, "Ano deve ter 4 dígitos"),
	}),
});

const Cart = ({ onClose }: CartProps) => {
	const [step, setStep] = useState<Step>("cart");
	const [deliveryData, setDeliveryData] = useState<DeliveryData>({
		receiver: "",
		address: {
			description: "",
			city: "",
			zipCode: "",
			number: 0,
			complement: "",
		},
	});
	const [paymentData, setPaymentData] = useState({
		name: "",
		number: "",
		code: "",
		expires: {
			month: "",
			year: "",
		},
	});

	const getInitialPaymentValues = () => ({
		name: paymentData.name || "",
		number: paymentData.number || "",
		code: paymentData.code || "",
		expires: {
			month: paymentData.expires.month || "",
			year: paymentData.expires.year || "",
		},
	});
	const [orderId, setOrderId] = useState<string>("");

	const items = useSelector((state: RootReducer) => state.cart.items);
	const dispatch = useDispatch();
	const [checkout, { isLoading }] = useCheckoutMutation();

	const total = items.reduce(
		(sum, item) => sum + item.dish.preco * item.quantity,
		0,
	);

	const handleContinueToDelivery = () => {
		setStep("delivery");
	};

	const handleBackToCart = () => {
		setStep("cart");
	};

	const renderCart = () => (
		<>
			<ul>
				{items.map((item) => (
					<CartItem
						key={item.dish.id}
						dish={item.dish}
						quantity={item.quantity}
						onIncrement={() => dispatch(increment(item.dish.id))}
						onDecrement={() => dispatch(decrement(item.dish.id))}
						onRemove={() => dispatch(removeItem(item.dish.id))}
					/>
				))}
			</ul>
			<CartInfos>
				<h4>Valor total</h4>
				<p>{formatBRL(total)}</p>
			</CartInfos>
			<Button onClick={handleContinueToDelivery}>
				Continuar com a entrega
			</Button>
		</>
	);

	const renderDelivery = () => (
		<Formik
			key="delivery"
			initialValues={deliveryData}
			validationSchema={deliverySchema}
			onSubmit={(values) => {
				setDeliveryData(values);
				setStep("payment");
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<h3 style={{ color: "#FFEBD9", marginBottom: "16px" }}>Entrega</h3>
					<InputGroup>
						<Label>Quem irá receber</Label>
						<Field
							as={Input}
							type="text"
							name="receiver"
							className={errors.receiver && touched.receiver ? "error" : ""}
						/>
						<ErrorMessage name="receiver">
							{(msg) => (
								<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
							)}
						</ErrorMessage>
					</InputGroup>
					<InputGroup>
						<Label>Endereço</Label>
						<Field
							as={Input}
							type="text"
							name="address.description"
							className={
								errors.address?.description && touched.address?.description
									? "error"
									: ""
							}
						/>
						<ErrorMessage name="address.description">
							{(msg) => (
								<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
							)}
						</ErrorMessage>
					</InputGroup>
					<InputGroup>
						<Label>Cidade</Label>
						<Field
							as={Input}
							type="text"
							name="address.city"
							className={
								errors.address?.city && touched.address?.city ? "error" : ""
							}
						/>
						<ErrorMessage name="address.city">
							{(msg) => (
								<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
							)}
						</ErrorMessage>
					</InputGroup>
					<Row>
						<InputGroup style={{ flex: 3 }}>
							<Label>CEP</Label>
							<MaskedInput
								name="address.zipCode"
								mask="99999-999"
								placeholder="00000-000"
								className={
									errors.address?.zipCode && touched.address?.zipCode
										? "error"
										: ""
								}
							/>
							<ErrorMessage name="address.zipCode">
								{(msg) => (
									<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
								)}
							</ErrorMessage>
						</InputGroup>
						<InputGroup style={{ flex: 2 }}>
							<Label>Número</Label>
							<Field
								as={Input}
								type="number"
								name="address.number"
								className={
									errors.address?.number && touched.address?.number
										? "error"
										: ""
								}
							/>
							<ErrorMessage name="address.number">
								{(msg) => (
									<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
								)}
							</ErrorMessage>
						</InputGroup>
					</Row>
					<InputGroup>
						<Label>Complemento (opcional)</Label>
						<Field as={Textarea} name="address.complement" />
					</InputGroup>
					<Button type="submit">Continuar com o pagamento</Button>
					<Button
						type="button"
						onClick={handleBackToCart}
						style={{
							marginTop: "8px",
							backgroundColor: "#FFEBD9",
							color: "#E66767",
						}}
					>
						Voltar para o carrinho
					</Button>
				</Form>
			)}
		</Formik>
	);

	const renderPayment = () => (
		<Formik
			key="payment"
			initialValues={getInitialPaymentValues()}
			validationSchema={paymentSchema}
			onSubmit={async (values, { setSubmitting }) => {
				setPaymentData(values);
				const payload: CheckoutPayload = {
					products: items.map((item) => ({
						id: item.dish.id,
						price: item.dish.preco,
					})),
					delivery: deliveryData,
					payment: {
						card: {
							name: values.name,
							number: values.number.replace(/\s/g, ""), // Remove spaces for API
							code: Number(values.code),
							expires: {
								month: Number(values.expires.month),
								year: Number(values.expires.year),
							},
						},
					},
				};

				console.log("Payload being sent to API:", payload);

				try {
					const result = await checkout(payload).unwrap();
					console.log("API response:", result);

					// Generate a local order ID since the API returns the payload, not an order ID
					const generatedOrderId = `PED${Math.floor(Math.random() * 1000000)}`;
					setOrderId(generatedOrderId);

					console.log("Generated Order ID:", generatedOrderId);
					console.log("Changing step to confirmation");
					setStep("confirmation");
					console.log("Step changed successfully");
				} catch (error) {
					console.error("API error:", error);
					const errorMessage =
						(error as { data?: { message?: string }; message?: string })?.data
							?.message ||
						(error as { data?: { message?: string }; message?: string })
							?.message ||
						"Erro desconhecido";
					alert(`Erro ao finalizar pedido: ${errorMessage}`);
				} finally {
					setSubmitting(false);
				}
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<h3 style={{ color: "#FFEBD9", marginBottom: "16px" }}>
						Pagamento - Valor a pagar {formatBRL(total)}
					</h3>
					<InputGroup>
						<Label>Nome no cartão</Label>
						<Field
							as={Input}
							type="text"
							name="name"
							className={errors.name && touched.name ? "error" : ""}
						/>
						<ErrorMessage name="name">
							{(msg) => (
								<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
							)}
						</ErrorMessage>
					</InputGroup>
					<Row>
						<InputGroup style={{ flex: 3 }}>
							<Label>Número do cartão</Label>
							<MaskedInput
								name="number"
								mask="9999 9999 9999 9999"
								placeholder="0000 0000 0000 0000"
								className={errors.number && touched.number ? "error" : ""}
							/>
							<ErrorMessage name="number">
								{(msg) => (
									<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
								)}
							</ErrorMessage>
						</InputGroup>
						<InputGroup style={{ flex: 2 }}>
							<Label>CVV</Label>
							<MaskedInput
								name="code"
								mask="999"
								placeholder="000"
								className={errors.code && touched.code ? "error" : ""}
							/>
							<ErrorMessage name="code">
								{(msg) => (
									<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
								)}
							</ErrorMessage>
						</InputGroup>
					</Row>
					<Row>
						<InputGroup style={{ flex: 1 }}>
							<Label>Mês de vencimento</Label>
							<MaskedInput
								name="expires.month"
								mask="99"
								placeholder="MM"
								className={
									errors.expires?.month && touched.expires?.month ? "error" : ""
								}
							/>
							<ErrorMessage name="expires.month">
								{(msg) => (
									<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
								)}
							</ErrorMessage>
						</InputGroup>
						<InputGroup style={{ flex: 1 }}>
							<Label>Ano de vencimento</Label>
							<MaskedInput
								name="expires.year"
								mask="9999"
								placeholder="YYYY"
								className={
									errors.expires?.year && touched.expires?.year ? "error" : ""
								}
							/>
							<ErrorMessage name="expires.year">
								{(msg) => (
									<div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
								)}
							</ErrorMessage>
						</InputGroup>
					</Row>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? "Finalizando..." : "Finalizar pagamento"}
					</Button>
					<Button
						type="button"
						onClick={() => setStep("delivery")}
						style={{
							marginTop: "8px",
							backgroundColor: "#FFEBD9",
							color: "#E66767",
						}}
					>
						Voltar para edição de endereço
					</Button>
				</Form>
			)}
		</Formik>
	);

	const renderConfirmation = () => (
		<ConfirmationContainer>
			<h3>Pedido realizado - {orderId}</h3>
			<p>
				Estamos felizes em informar que seu pedido já está em processo de
				preparação e, em breve, será entregue no endereço fornecido.
			</p>
			<p>
				Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
				realizar cobranças extras.
			</p>
			<p>
				Lembre-se da importância de higienizar as mãos após o recebimento do
				pedido, garantindo assim sua segurança e bem-estar durante a refeição.
			</p>
			<p>
				Esperamos que desfrute de uma deliciosa e agradável experiência
				gastronômica. Bom apetite!
			</p>
			<Button onClick={onClose} style={{ marginTop: "16px" }}>
				Concluir
			</Button>
		</ConfirmationContainer>
	);

	const renderContent = () => {
		switch (step) {
			case "cart":
				return renderCart();
			case "delivery":
				return renderDelivery();
			case "payment":
				return renderPayment();
			case "confirmation":
				return renderConfirmation();
			default:
				return renderCart();
		}
	};

	return (
		<CartContainer>
			<Overlay onClick={onClose} />
			<Sidebar onClick={(e: React.MouseEvent) => e.stopPropagation()}>
				{renderContent()}
			</Sidebar>
		</CartContainer>
	);
};

export default Cart;
