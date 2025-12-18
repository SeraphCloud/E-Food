import RestaurantCard from "../RestaurantCard";
import { ListContainer } from "./styles";
import imagemHioki from "../../assets/hioki_sushi.png";

const RestaurantList = () => (
	<ListContainer>
		<ul>
			<li>
				<RestaurantCard
					titulo="Hioki Sushi"
					tipo="Japonesa"
					avaliacao={4.8}
					descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
					capa={imagemHioki}
					destaque={true}
				/>
			</li>
			<li>
				<RestaurantCard
					titulo="Hioki Sushi"
					tipo="Japonesa"
					avaliacao={4.8}
					descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
					capa={imagemHioki}
				/>
			</li>
			<li>
				<RestaurantCard
					titulo="Hioki Sushi"
					tipo="Japonesa"
					avaliacao={4.8}
					descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
					capa={imagemHioki}
				/>
			</li>
			<li>
				<RestaurantCard
					titulo="Hioki Sushi"
					tipo="Japonesa"
					avaliacao={4.8}
					descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
					capa={imagemHioki}
				/>
			</li>
			<li>
				<RestaurantCard
					titulo="Hioki Sushi"
					tipo="Japonesa"
					avaliacao={4.8}
					descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
					capa={imagemHioki}
				/>
			</li>
			<li>
				<RestaurantCard
					titulo="Hioki Sushi"
					tipo="Japonesa"
					avaliacao={4.8}
					descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
					capa={imagemHioki}
				/>
			</li>
		</ul>
	</ListContainer>
);

export default RestaurantList;
