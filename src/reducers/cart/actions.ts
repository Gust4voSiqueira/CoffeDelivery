import { Product } from './reducer'

export enum ActionTypesCart {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  ALTER_QUANTITIE = 'ALTER_QUANTITIE'
}

export function addNewProduct(newProduct: Product) {
  return {
    type: ActionTypesCart.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function removeProduct(idProduct: number) {
  return {
    type: ActionTypesCart.REMOVE_PRODUCT,
    payload: {
      idProduct,
    },
  }
}

export function alterQuantitie(idProduct: number, quantitie: number) {
  return {
    type: ActionTypesCart.ALTER_QUANTITIE,
    payload: {
      idProduct,
      quantitie
    }
  }
}

