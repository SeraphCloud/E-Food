import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/reducers/cart";
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
	onRemove: () => void;
};

const CartItem = ({ dish, quantity, onRemove }: CartItemProps) => (
	<CartItemStyled>
		<img src={dish.foto} alt={dish.nome} />
		<div>
			<h3>{dish.nome}</h3>
			<p>{formatBRL(dish.preco)}</p>
			<span>{quantity}x</span>
		</div>
		<Delete onClick={onRemove} src={lixeira} alt="excluir" />
	</CartItemStyled>
);

type CartProps = {
	onClose: () => void;
};

const Cart = ({ onClose }: CartProps) => {
	const items = useSelector((state: RootReducer) => state.cart.items);
	const dispatch = useDispatch();

	const total = items.reduce(
		(sum, item) => sum + item.dish.preco * item.quantity,
		0,
	);

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
							onRemove={() => dispatch(remove(item.dish.id))}
						/>
					))}
				</ul>
				<CartInfos>
					<h4>Valor total</h4>
					<p>{formatBRL(total)}</p>
				</CartInfos>
				<Button>Continuar com a entrega</Button>
			</Sidebar>
		</CartContainer>
	);
};

export default Cart;
