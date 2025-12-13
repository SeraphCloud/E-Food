import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, MenuItem } from '../types'

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<MenuItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.items = state.items.filter(i => i.id !== action.payload)
        }
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, decreaseQuantity, toggleCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
