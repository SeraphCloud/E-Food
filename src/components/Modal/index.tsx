import type { FC } from "react";
import { ModalOverlay, ModalContent } from "./styles";

type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
	title: string;
	description: string;
	imageUrl: string;
};

const Modal: FC<ModalProps> = ({
	isVisible,
	onClose,
	title,
	description,
	imageUrl,
}) => {
	if (!isVisible) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
				<img src={imageUrl} alt={title} />
				<div className="content-wrapper">
					<h3>{title}</h3>
					<p>{description}</p>
					<button type="button" onClick={onClose}>
						Adicionar ao carrinho - R$60,00
					</button>
				</div>
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;
