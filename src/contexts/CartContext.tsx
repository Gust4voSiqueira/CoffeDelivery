import { createContext, ReactNode, useReducer } from 'react'
import { Products } from '../database/Products'
import {
  addNewProduct,
  alterQuantitie,
  removeProduct,
} from '../reducers/cart/actions'
import { cartReducer, Product } from '../reducers/cart/reducer'

interface CartContextType {
  products: Product[]
  totalValue: number
  handleAddToCart: (id: number, quantitie: number) => void
  handleAlterQuantitie: (idProduct: number, quantitie: number) => void
  handleRemoveCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
      totalValue: 0,
    },
    () => {
      return {
        products: [],
        totalValue: 0,
      }
    },
  )
  const { products, totalValue } = cartState

  function handleAddToCart(id: number, quantitie: number) {
    const productCart = Products.filter((product) => product.id === id)
    const newProduct = { ...productCart[0], quantitie }
    dispatch(addNewProduct(newProduct))
  }

  function handleRemoveCart(id: number) {
    dispatch(removeProduct(id))
  }

  function handleAlterQuantitie(idProduct: number, quantitie: number) {
    dispatch(alterQuantitie(idProduct, quantitie))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        totalValue,
        handleAddToCart,
        handleRemoveCart,
        handleAlterQuantitie,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
