import { createContext, ReactNode, useContext, useReducer } from "react";
import { IFormData, IRequest } from "../screens/Cart";
import { onActuallyFormAction, onFinallyRequest } from "../reducers/request/action";

import { requestReducer } from '../reducers/request/reducer'
import { CartContext } from "./CartContext";
import { Product } from "../reducers/cart/reducer";

interface RequestContextType {
  request: IRequest;
  onActuallyForm: (newForm: IFormData) => void;
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

  function onActuallyForm(newForm: IFormData) {
    dispatch(onActuallyFormAction(newForm))
  }

  return (
    <RequestContext.Provider
      value={{
        request,
        handleConfirmRequest,
        onActuallyForm
      }}
    >
      {children}
    </RequestContext.Provider>
  )
}