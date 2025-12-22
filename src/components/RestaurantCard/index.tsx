import estrela from "../../assets/estrela.svg";
import { Button, CardWrapper, Infos, Tag, TitleWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

type Props = {
	id: number;
	titulo: string;
	destaque?: boolean;
	tipo: string;
	avaliacao: number;
	descricao: string;
	capa: string;
	onClick: (id: number) => void;
};

const RestaurantCard = ({
	id,
	titulo,
	destaque,
	tipo,
	avaliacao,
	descricao,
	capa,
	onClick,
}: Props) => {
	const navigate = useNavigate();

	const handleClick = () => {
		onClick(id);
		navigate("/perfil");
	};

	return (
		<CardWrapper>
			<img src={capa} alt={titulo} />
			<Infos>
				{destaque && <Tag>Destaque da semana</Tag>}
				<Tag>{tipo}</Tag>
			</Infos>
			<div className="container">
				<TitleWrapper>
					<h2>{titulo}</h2>
					<span>
						{avaliacao}
						<img src={estrela} alt="estrela" />
					</span>
				</TitleWrapper>
				<p>{descricao}</p>
			</div>
			<Button type="button" onClick={handleClick}>
				Saiba Mais
			</Button>
		</CardWrapper>
	);
};

export default RestaurantCard;
