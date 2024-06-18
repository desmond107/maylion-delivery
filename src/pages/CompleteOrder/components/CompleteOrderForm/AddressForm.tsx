import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <div className="row">
        <Input
          placeholder="Zip code"
          type="number"
          className="cep"
          {...register('Zip code')}
          error={errors.cep?.message}
        />
      </div>
      <div className="row">
        <Input
          placeholder="road"
          className="street"
          {...register('street')}
          error={errors.street?.message}
        />
      </div>
      <div className="row">
        <Input
          type="number"
          placeholder="Number"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complement"
          className="complement"
          {...register('complement')}
          error={errors.complement?.message}
          rightText="Optional"
        />
      </div>
      <div className="row">
        <Input
          placeholder="Neighborhood"
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          placeholder="City"
          className="city"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder="UF"
          className="uf"
          {...register('uf')}
          error={errors.uf?.message}
        />
      </div>
    </AddressFormContainer>
  )
}
