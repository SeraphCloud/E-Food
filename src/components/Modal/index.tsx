import React, { useState } from "react";
import type { FC } from "react";
import { ModalOverlay, ModalContent } from "./styles";
import { formatBRL } from "../../utils/format";
import type { Dish } from "../../types/api";

type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
	title: string;
	description: string;
	imageUrl: string;
	dish: Dish;
	onAdd: (dish: Dish) => void | Promise<void>;
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
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	if (!isVisible) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
				<img src={imageUrl} alt={title} />
				<div className="content-wrapper">
					<h3>{title}</h3>
					<p>{description}</p>
					{error && <p className="error">{error}</p>}
					<button
						type="button"
						onClick={async () => {
							setIsLoading(true);
							setError(null);
							try {
								await onAdd(dish);
								onClose();
							} catch {
								setError("Failed to add item to cart");
							} finally {
								setIsLoading(false);
							}
						}}
						disabled={isLoading}
					>
						{isLoading
							? "Adding..."
							: `Adicionar ao carrinho - ${formatBRL(dish.preco)}`}
					</button>
				</div>
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;
