import { IFormData } from '../../ui/screens/Cart'
import { Product } from '../cart/reducer'
import { ActionTypesRequest } from './action'

export interface IRequest {
  adress: IFormData
  request: Product[]
  isActiveRequest: boolean
}

export function requestReducer(state: IRequest, action: any) {
  switch (action.type) {
    case ActionTypesRequest.ON_FINALLY_REQUEST:
      state.adress = action.payload.formAdress
      state.request = action.payload.cart
      break
    default:
      return state
  }
}
