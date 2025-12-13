import { useParams, Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import MenuCard from '../../components/MenuCard'
import Footer from '../../components/Footer'
import { restaurants } from '../../data/restaurants'
import * as S from './styles'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const restaurant = restaurants.find(r => r.id === Number(id))

  if (!restaurant) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Header
        type="restaurant"
        restaurantName={restaurant.titulo}
        restaurantType={restaurant.tipo}
        backgroundImage={restaurant.capa}
      />
      <S.Container>
        <S.MenuList>
          {restaurant.cardapio.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </S.MenuList>
      </S.Container>
      <Footer />
    </>
  )
}

export default Perfil
