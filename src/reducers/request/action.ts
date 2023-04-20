import { IFormData } from "../../screens/Cart";
import { Product } from "../cart/reducer";

export enum ActionTypesRequest {
  ON_ACTUALLY_FORM = 'ON_ACTUALLY_FORM',
  ON_FINALLY_REQUEST = 'ON_FINALLY_REQUEST',
}

export function onActuallyFormAction(newForm: IFormData) {
  return {
    type: ActionTypesRequest.ON_ACTUALLY_FORM,
    payload: {
      newForm
    },
  }
}

export function onFinallyRequest(formAdress: IFormData, cart: Product[]) {
  return {
    type: ActionTypesRequest.ON_ACTUALLY_FORM,
    payload: {
      formAdress,
      cart
    },
  }
}