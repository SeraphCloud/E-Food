import { PresentationContainer, PresentationInner } from "./styles";
import type { Restaurant } from "../../types/api";

interface PresentationProps {
	restaurant?: Restaurant | null;
}

const Presentation = ({ restaurant }: PresentationProps) => {
	return (
		<PresentationContainer $backgroundImage={restaurant?.capa || ""}>
			<PresentationInner>
				<h3>{restaurant?.tipo || "Tipo não disponível"}</h3>
				<h2>{restaurant?.titulo || "Restaurante não encontrado"}</h2>
			</PresentationInner>
		</PresentationContainer>
	);
};

export default Presentation;
