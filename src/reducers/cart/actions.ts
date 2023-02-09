import { Product } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVEPRODUCT'
}

export function addNewProduct(newProduct: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function removeProduct(idProduct: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
  }
}
