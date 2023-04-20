import { IRequest } from "../../screens/Cart";
import { ActionTypesRequest } from "./action";

export function requestReducer(state: IRequest, action: any) {
  switch(action.type) {
    case ActionTypesRequest.ON_ACTUALLY_FORM:
      console.log(action.payload.newForm)
    case ActionTypesRequest.ON_FINALLY_REQUEST:
      state.adress = action.payload.formAdress
      state.request = action.payload.cart

      console.log(state);
      
    default: 
      return state;
  }
}