import { ActionTypes } from "./actions";
import { produce } from 'immer'

export interface Product {
  id: number,
  image: string,
  name:  string,
  description: string,
  categories: string[],
  price: number,
}

interface CartState {
  products: Product[],
  totalValue: number
}

export function cartReducer(state: CartState, action: any) {
  switch(action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        draft.products.push(action.payload.newProduct)
      })
    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        state.products = state.products.filter(product => product.id !== action.payload.idProduct)
      })
    default:
      return state
  }
}