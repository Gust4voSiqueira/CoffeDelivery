import { IRequest } from "../../screens/Cart";
import { ActionTypesRequest } from "./action";

export function requestReducer(state: IRequest, action: any) {
  switch(action.type) {
    case ActionTypesRequest.ON_FINALLY_REQUEST:
      state.adress = action.payload.formAdress
      state.request = action.payload.cart
    default: 
      return state;
  }
}