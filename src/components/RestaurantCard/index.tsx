import { Link } from 'react-router-dom'
import type { Restaurant } from '../../types'
import * as S from './styles'
import estrela from '../../assets/estrela.svg'

type RestaurantCardProps = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <S.Card>
      <S.CardImage src={restaurant.capa} alt={restaurant.titulo} />
      <S.Tags>
        {restaurant.destacado && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{restaurant.tipo}</S.Tag>
      </S.Tags>
      <S.CardContent>
        <S.CardHeader>
          <h3>{restaurant.titulo}</h3>
          <div>
            <span>{restaurant.avaliacao}</span>
            <img src={estrela} alt="Estrela" />
          </div>
        </S.CardHeader>
        <S.Description>{restaurant.descricao}</S.Description>
        <Link to={`/perfil/${restaurant.id}`}>
          <S.Button>Saiba mais</S.Button>
        </Link>
      </S.CardContent>
    </S.Card>
  )
}

export default RestaurantCard
