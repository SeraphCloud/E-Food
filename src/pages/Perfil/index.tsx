import { useState } from "react";
import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";
import PerfilHeader from "../../components/PerfilHeader";
import Presentation from "../../components/Presentation";
import Modal from "../../components/Modal";
import { PageContainer } from "./styles";
import { useRestaurantContext } from "../../contexts/RestaurantContext";
import useRestaurant from "../../hooks/useRestaurant";
import type { Dish } from "../../types/api";
import Cart from "../../components/Cart";

const Perfil = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

	const { selectedRestaurantId } = useRestaurantContext();
	const { restaurant, dishes, loading, error } =
		useRestaurant(selectedRestaurantId);

	const openModal = (dish: Dish) => {
		setSelectedDish(dish);
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
		setSelectedDish(null);
	};

	if (loading) {
		return (
			<PageContainer $isModalVisible={isModalVisible}>
				<PerfilHeader />
				<Presentation />
				<div style={{ textAlign: "center", padding: "40px" }}>
					<p>Carregando restaurante...</p>
				</div>
				<Footer />
			</PageContainer>
		);
	}

	if (error || !restaurant) {
		return (
			<PageContainer $isModalVisible={isModalVisible}>
				<PerfilHeader />
				<Presentation />
				<div style={{ textAlign: "center", padding: "40px" }}>
					<h3>Erro ao carregar restaurante</h3>
					<p>{error || "Restaurante não encontrado"}</p>
				</div>
				<Footer />
			</PageContainer>
		);
	}

	return (
		<>
			<PageContainer $isModalVisible={isModalVisible}>
				<PerfilHeader />
				<Presentation restaurant={restaurant} />
				<FoodList dishes={dishes} onMaisDetalhes={openModal} />
				<Footer />
			</PageContainer>
			{selectedDish && (
				<Modal
					isVisible={isModalVisible}
					onClose={closeModal}
					title={selectedDish.nome}
					description={selectedDish.descricao}
					imageUrl={selectedDish.foto}
				/>
			)}
			<Cart />
		</>
	);
};

export default Perfil;
