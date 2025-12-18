import estrela from "../../assets/estrela.svg";
import { Button, CardWrapper, Infos, Tag, TitleWrapper } from "./styles";

type Props = {
	titulo: string;
	destaque?: boolean;
	tipo: string;
	avaliacao: number;
	descricao: string;
	capa: string;
};

const RestaurantCard = ({
	titulo,
	destaque,
	tipo,
	avaliacao,
	descricao,
	capa,
}: Props) => {
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
			<Button to={"/perfil"} type="button">
				Saiba Mais
			</Button>
		</CardWrapper>
	);
};

export default RestaurantCard;
