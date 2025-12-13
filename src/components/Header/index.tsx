import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import type { RootState } from '../../store'
import type { CartItem } from '../../types'
import logo from '../../assets/logo.svg'
import headerVector from '../../assets/header_vector.png'
import * as S from './styles'

type HeaderProps = {
  type: 'home' | 'restaurant'
  restaurantName?: string
  restaurantType?: string
  backgroundImage?: string
}

const Header = ({ type, restaurantName, restaurantType, backgroundImage }: HeaderProps) => {
  const items = useAppSelector((state: RootState) => state.cart.items)
  const totalItems = items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0)

  if (type === 'home') {
    return (
      <S.HeaderHome style={{ backgroundImage: `url(${headerVector})` }}>
        <img src={logo} alt="efood" className="logo" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </S.HeaderHome>
    )
  }

  return (
    <>
      <S.HeaderBar style={{ backgroundImage: `url(${headerVector})` }}>
        <img src={logo} alt="efood" />
      </S.HeaderBar>
      <S.HeaderRestaurant style={{ backgroundImage: `url(${backgroundImage})` }}>
        <S.HeaderContent>
          <S.TopBar>
            <Link to="/">Restaurantes</Link>
            <span>{totalItems} produto(s) no carrinho</span>
          </S.TopBar>
          <S.RestaurantInfo>
            <h2>{restaurantType}</h2>
            <h1>{restaurantName}</h1>
          </S.RestaurantInfo>
        </S.HeaderContent>
      </S.HeaderRestaurant>
    </>
  )
}

export default Header
