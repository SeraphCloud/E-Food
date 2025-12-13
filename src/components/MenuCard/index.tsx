import { addToCart } from '../../store/cartSlice'
import { useAppDispatch } from '../../store/hooks'
import type { MenuItem } from '../../types'
import * as S from './styles'

type MenuCardProps = {
  item: MenuItem
}

const MenuCard = ({ item }: MenuCardProps) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(item))
  }

  return (
    <S.Card>
      <S.CardImage src={item.foto} alt={item.nome} />
      <S.Title>{item.nome}</S.Title>
      <S.Description>{item.descricao}</S.Description>
      <S.Button onClick={handleAddToCart}>Adicionar ao carrinho</S.Button>
    </S.Card>
  )
}

export default MenuCard
