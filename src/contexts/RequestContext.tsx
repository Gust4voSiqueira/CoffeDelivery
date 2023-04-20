import { createContext, ReactNode, useReducer } from 'react'
import { IFormData } from '../ui/screens/Cart'
import { onFinallyRequest } from '../reducers/request/action'

import { IRequest, requestReducer } from '../reducers/request/reducer'
import { Product } from '../reducers/cart/reducer'

interface RequestContextType {
  request: IRequest
  handleConfirmRequest: (formAdress: IFormData, products: Product[]) => void
  isValidRequest: () => boolean
}

export const RequestContext = createContext({} as RequestContextType)

interface RequestContextProviderProps {
  children: ReactNode
}

export function RequestContextProvider({
  children,
}: RequestContextProviderProps) {
  const [request, dispatch] = useReducer(requestReducer, {
    adress: {
      cep: '',
      road: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      payment: 'NOTSELECTED',
    },
    request: [],
    isActiveRequest: false,
  })

  function handleConfirmRequest(formAdress: IFormData, products: Product[]) {
    dispatch(onFinallyRequest(formAdress, products))
  }

  function isValidRequest() {
    return (
      request.adress.payment !== 'NOTSELECTED' && request.request.length > 0
    )
  }

  return (
    <RequestContext.Provider
      value={{
        request,
        handleConfirmRequest,
        isValidRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  )
}
