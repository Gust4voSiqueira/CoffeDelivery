import { ActionTypes } from "./actions";
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

interface CartState {
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
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        if(!state.products.includes(action.payload.newProduct))  {
          draft.products.push(action.payload.newProduct)

          draft.totalValue = actualityTotalValue(draft.products)
        }
      })
    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        draft.products = state.products.filter(product => product.id !== action.payload.idProduct)
        draft.totalValue = actualityTotalValue(draft.products)
      })
    case ActionTypes.ALTER_QUANTITIE:
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