import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantsList";
import { useRestaurantContext } from "../../contexts/RestaurantContext";

const Home = () => {
	const { setSelectedRestaurantId } = useRestaurantContext();

	const handleRestaurantClick = (id: number) => {
		setSelectedRestaurantId(id);
	};

	return (
		<>
			<Header />
			<RestaurantList onRestaurantClick={handleRestaurantClick} />
			<Footer />
		</>
	);
};

export default Home;
