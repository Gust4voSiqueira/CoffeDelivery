import { createContext, ReactNode, useContext, useReducer } from "react";
import { IFormData, IRequest } from "../screens/Cart";
import { onFinallyRequest } from "../reducers/request/action";

import { requestReducer } from '../reducers/request/reducer'
import { Product } from "../reducers/cart/reducer";

interface RequestContextType {
  request: IRequest;
  handleConfirmRequest: (formAdress: IFormData, products: Product[]) => void
}

export const RequestContext = createContext({} as RequestContextType)

interface RequestContextProviderProps {
  children: ReactNode
}

export function RequestContextProvider({
  children,
}: RequestContextProviderProps) {
  const [request, dispatch] = useReducer(
    requestReducer,
    {
      adress: { cep: "",  road: "", number: "", complement: "", neighborhood: "", city: "", uf: "", payment: 'NOTSELECTED' },
      request: [],
    }
  )

  function handleConfirmRequest(formAdress: IFormData, products: Product[]) {
    dispatch(onFinallyRequest(formAdress, products))
  }

  return (
    <RequestContext.Provider
      value={{
        request,
        handleConfirmRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  )
}