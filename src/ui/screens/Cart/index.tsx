import { useContext, useState } from 'react'
import { CartSection } from './sections/cart'
import { Form } from './sections/form'
import { CartContainer } from './styles'
import { RequestContext } from '../../../contexts/RequestContext'
import { CartContext } from '../../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export type paymentType = 'DEBIT' | 'CREDIT' | 'MONEY' | 'NOTSELECTED'

export interface IFormData {
  cep: string
  road: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
  payment: paymentType
}

const validateFunction = (dataForm: IFormData) => {
  return {
    cep: dataForm.cep.length === 8,
    road: dataForm.road.length >= 5 && dataForm.road.length <= 30,
    number: dataForm.number.length > 0 && dataForm.number.length <= 30,
    complement: dataForm.complement.length <= 30,
    neighborhood:
      dataForm.neighborhood.length >= 3 && dataForm.neighborhood.length <= 30,
    city: dataForm.city.length >= 2 && dataForm.city.length <= 30,
    uf: dataForm.uf.length >= 2 && dataForm.uf.length <= 3,
    payment: dataForm.payment !== 'NOTSELECTED',
  }
}

export function Cart() {
  const [dataForm, setDataForm] = useState<IFormData>({
    cep: '',
    road: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
    payment: 'NOTSELECTED',
  })
  const [errors, setErrors] = useState<string[]>([])
  const { handleConfirmRequest } = useContext(RequestContext)
  const { products } = useContext(CartContext)
  const navigate = useNavigate()

  function onChangePayment(newPayment: paymentType) {
    setDataForm({ ...dataForm, payment: newPayment })
  }

  function onChange(e: { target: HTMLInputElement }) {
    const { name, value } = e.target

    setDataForm({ ...dataForm, [name]: value })
  }

  function onFinallyRequest() {
    const validateForm = validateFunction(dataForm)
    let isValid = true
    setErrors([])

    for (const property in validateForm) {
      if (!validateForm[property]) {
        setErrors((state) => [...state, property])
        isValid = false
      }
    }

    if (isValid) {
      handleConfirmRequest(dataForm, products)
      navigate('/success')
    }
  }

  return (
    <>
      <CartContainer>
        <Form
          formData={dataForm}
          onChangePayment={onChangePayment}
          onChangeForm={onChange}
          errors={errors}
        />
        <CartSection onConfirmRequest={onFinallyRequest} />
      </CartContainer>
    </>
  )
}
