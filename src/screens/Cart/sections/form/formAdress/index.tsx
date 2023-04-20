import { MapPinLine } from "phosphor-react";
import { FormContainer, InputComplementContainer, InputNumber, InputNumbersContainer } from "./styles";
import { IFormData } from "../../..";

interface IFormAdress {
  onChangeFunction: (e: { target: HTMLInputElement }) => void;
  dataForm: IFormData;
  errors: string[];
}

function handleErrors(error: string[], field: string) {
  return error.some(error => error === field)
}

export function FormAdress({ onChangeFunction, dataForm, errors }: IFormAdress) {
  
  return (
    <FormContainer>
          <h4>Complete seu pedido</h4>
          <form>
            <header>
              <MapPinLine size={25} color="#C47F17" />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <InputNumber>
              <input 
                placeholder="CEP" 
                name="cep" 
                value={dataForm.cep} 
                onChange={(e) => onChangeFunction(e)} 
                className={`${handleErrors(errors, 'cep') && 'errorInput'}`} 
              />
            </InputNumber>

            <input 
              placeholder="Rua" 
              name="road" 
              value={dataForm.road} 
              onChange={(e) => onChangeFunction(e)} 
              className={`${handleErrors(errors, 'road') && 'errorInput'}`} 
            />
            
            <InputNumbersContainer>
              <InputNumber>
                <input 
                  placeholder="Número" 
                  name="number" 
                  value={dataForm.number} 
                  onChange={(e) => onChangeFunction(e)} 
                  className={`${handleErrors(errors, 'number') && 'errorInput'}`} 
                />
                <input 
                  placeholder="Bairro" 
                  name="neighborhood" 
                  value={dataForm.neighborhood} 
                  onChange={(e) => onChangeFunction(e)} 
                  className={`${handleErrors(errors, 'neighborhood') && 'errorInput'}`} 
                />
              </InputNumber>

              <InputComplementContainer>
                <input 
                  placeholder="Complemento" 
                  name="complement" 
                  value={dataForm.complement} 
                  onChange={(e) => onChangeFunction(e)} 
                  className={`${handleErrors(errors, 'complement') && 'errorInput'}`} 
                />

                <div>
                  <input 
                    placeholder="Cidade" 
                    name="city" 
                    value={dataForm.city} 
                    onChange={(e) => onChangeFunction(e)} 
                    className={`inputCity ${handleErrors(errors, 'city') && 'errorInput'}`} 
                  />
                  <input 
                    placeholder="UF" 
                    name="uf" 
                    value={dataForm.uf} 
                    onChange={(e) => onChangeFunction(e)} 
                    className={`${handleErrors(errors, 'uf') && 'errorInput'}`} 
                  />
                </div>
              </InputComplementContainer>
            </InputNumbersContainer>
          </form>
        </FormContainer>
  )
}