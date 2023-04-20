import { IFormData } from "../../screens/Cart";
import { Product } from "../cart/reducer";

export enum ActionTypesRequest {
  ON_FINALLY_REQUEST = 'ON_FINALLY_REQUEST',
}

export function onFinallyRequest(formAdress: IFormData, cart: Product[]) {
  return {
    type: ActionTypesRequest.ON_FINALLY_REQUEST,
    payload: {
      formAdress,
      cart
    },
  }
}