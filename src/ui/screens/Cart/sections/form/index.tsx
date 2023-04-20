import { FormAdress } from './formAdress'
import { FormPayment } from './FormPayment'
import { IFormData, paymentType } from '../..'

interface IForm {
  formData: IFormData
  onChangeForm: (e: { target: HTMLInputElement }) => void
  onChangePayment: (newPayment: paymentType) => void
  errors: string[]
}

export function Form({
  formData,
  onChangeForm,
  onChangePayment,
  errors,
}: IForm) {
  return (
    <div>
      <FormAdress
        onChangeFunction={onChangeForm}
        dataForm={formData}
        errors={errors}
      />
      <FormPayment
        onChangeFunction={onChangePayment}
        dataForm={formData}
        errors={errors}
      />
    </div>
  )
}
