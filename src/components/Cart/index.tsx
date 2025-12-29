import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../../store/reducers/cart";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import lixeira from "../../assets/lixeira.svg";
import { formatBRL } from "../../utils/format";
import type { RootReducer } from "../../store";
import type { Dish } from "../../types/api";
import {
	Button,
	CartContainer,
	CartInfos,
	CartItemStyled,
	Delete,
	Overlay,
	Sidebar,
} from "./styles";

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
	onContinueToDelivery?: () => void;
};

const Cart = ({ onClose, onContinueToDelivery }: CartProps) => {
	const items = useSelector((state: RootReducer) => state.cart.items);
	const dispatch = useDispatch();

	const total = items.reduce(
		(sum, item) => sum + item.dish.preco * item.quantity,
		0,
	);

	const handleContinueToDelivery = () => {
		if (onContinueToDelivery) {
			onContinueToDelivery();
		} else {
			alert("Delivery ainda não implementado.");
			onClose();
		}
	};

	return (
		<CartContainer>
			<Overlay onClick={onClose} />
			<Sidebar onClick={(e: React.MouseEvent) => e.stopPropagation()}>
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
			</Sidebar>
		</CartContainer>
	);
};

export default Cart;
