import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";
import PerfilHeader from "../../components/PerfilHeader";
import Presentation from "../../components/Presentation";

const Perfil = () => {
	return (
		<>
			<PerfilHeader />
			<Presentation />
			<FoodList />
			<Footer />
		</>
	);
};

export default Perfil;
