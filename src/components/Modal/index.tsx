import type { FC } from "react";
import { ModalOverlay, ModalContent } from "./styles";
import type { Dish } from "../../types/api";

type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
	title: string;
	description: string;
	imageUrl: string;
	dish: Dish;
	onAdd: (dish: Dish) => void;
};

const Modal: FC<ModalProps> = ({
	isVisible,
	onClose,
	title,
	description,
	imageUrl,
	dish,
	onAdd,
}) => {
	if (!isVisible) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
				<img src={imageUrl} alt={title} />
				<div className="content-wrapper">
					<h3>{title}</h3>
					<p>{description}</p>
					<button
						type="button"
						onClick={() => {
							onAdd(dish);
							onClose();
						}}
					>
						Adicionar ao carrinho - R$ {dish.preco.toFixed(2)}
					</button>
				</div>
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;
