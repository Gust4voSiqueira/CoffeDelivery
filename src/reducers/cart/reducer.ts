import { ActionTypesCart } from "./actions";
import { produce } from 'immer'

export interface Product {
  id: number,
  image: string,
  name:  string,
  description: string,
  categories: string[],
  price: number,
  quantitie: number
}

export interface CartState {
  products: Product[],
  totalValue: number
}

export function cartReducer(state: CartState, action: any) {
  function actualityTotalValue(products: Product[]) {
    return products.length && products.map(product => product.price * product.quantitie).reduce((total, accumulator) => {
      return total += accumulator
    })
  }

  switch(action.type) {
    case ActionTypesCart.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        const isQuantitie = action.payload.newProduct.quantitie > 0
        const isExistsProductCart = state.products.some(state => state.id === action.payload.newProduct.id)

        if(!isExistsProductCart && isQuantitie)  {
          draft.totalValue = actualityTotalValue(draft.products)
          draft.products.push(action.payload.newProduct)
        }
      })
    case ActionTypesCart.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        draft.products = state.products.filter(product => product.id !== action.payload.idProduct)
        draft.totalValue = actualityTotalValue(draft.products)
      })
    case ActionTypesCart.ALTER_QUANTITIE:
      return produce(state, (draft) => {
        const { idProduct, quantitie } = action.payload
        const productCart = state.products.filter(product => product.id === idProduct) 
        
        if(quantitie > 0 && productCart.length)  {
          const newProduct = {...productCart[0], quantitie}
          const newProducts = [...state.products.filter(product => product.id !== idProduct), newProduct]          
          
          draft.products = newProducts   
          draft.totalValue = actualityTotalValue(draft.products)
        }
      })
    default:
      return state
  }
}