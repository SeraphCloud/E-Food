import { RestaurantProvider } from "./contexts/RestaurantContext";
import Rotas from "./routes";
import { GlobalStyle } from "./styles";

function App() {
	return (
		<RestaurantProvider>
			<GlobalStyle />
			<Rotas />
		</RestaurantProvider>
	);
}

export default App;
