import Rotas from "./routes";
import { GlobalStyle } from "./styles";
import { RestaurantProvider } from "./contexts/RestaurantContext";

function App() {
	return (
		<RestaurantProvider>
			<GlobalStyle />
			<Rotas />
		</RestaurantProvider>
	);
}

export default App;
