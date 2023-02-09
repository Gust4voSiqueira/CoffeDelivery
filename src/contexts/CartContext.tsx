import { createContext, ReactNode, useReducer, useState } from "react";
import { Products } from "../database/Products";
import { addNewProduct, removeProduct } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

interface Product {
  id: number,
  image: string,
  name:  string,
  description: string,
  categories: string[],
  price: number,
  quantitie: number
}

interface CartContextType {
  handleAddToCart: (id: number, quantitie: number) => void,
  // handleAlterQuantitie: (idProduct: number, quantitie: number) => void,
  handleRemoveCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({
  children,
}: CartContextProviderProps) {
  // const [cart, setCart] = useState<Product[]>([])
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
      totalValue: 0
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffe-delivery:cart-state-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }
    }
  )

  function handleAddToCart(id: number, quantitie: number) {
    const productCart = Products.filter(product => product.id === id)
    const newProduct = {...productCart[0], quantitie}
    dispatch(addNewProduct(newProduct))
  }

  // function handleAlterQuantitie(idProduct: number, quantitie: number) {
  //   const productCart = Products.filter(product => product.id === idProduct) 
  //   console.log(quantitie);
       

  //   if(quantitie > 0 && !cart.includes({...productCart[0], quantitie}))  {
  //     const newProduct = {...productCart[0], quantitie}

  //     setCart(value => {
  //       return [...value.filter(product => product.id !== idProduct), newProduct]
  //     })
  //   }
  // }

  function handleRemoveCart(id: number) {
    dispatch(removeProduct(id))
  }

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleRemoveCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}