import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import { restaurants } from '../../data/restaurants'
import * as S from './styles'

const Home = () => {
  return (
    <>
      <Header type="home" />
      <S.Container>
        <S.RestaurantList>
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </S.RestaurantList>
      </S.Container>
      <Footer />
    </>
  )
}

export default Home
