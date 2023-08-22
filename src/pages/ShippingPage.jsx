import Payment from 'src/modules/payment/Payment'
import ContributionSummury from 'src/modules/payment/ContributionSummury'
import { useForm } from 'react-hook-form'
import { Label } from 'src/components/label'
import { Input } from 'src/components/input'
import { Field, FieldRow } from 'src/components/field'
import { Dropdown } from 'src/components/dropdown'
import { Checkbox } from 'src/components/checkbox'

const ShippingPage = () => {
  const { control } = useForm()
  return (
    <div className='flex items-start w-full gap-x-[74px]'>
      <div className='flex-1'>
        <h2 className='font-bold text-[30px] leading-normal mb-10'>
          Shipping Address
        </h2>
        <FieldRow>
          <Field>
            <Label>First Name *</Label>
            <Input
              control={control}
              name='first_name'
              placeholder='John'
            ></Input>
          </Field>
          <Field>
            <Label>Last Name *</Label>
            <Input control={control} name='last_name' placeholder='Doe'></Input>
          </Field>
        </FieldRow>
        <Field>
          <Label>Country *</Label>
          <Dropdown>
            <Dropdown.Select placeholder='Select country'></Dropdown.Select>
            <Dropdown.List></Dropdown.List>
          </Dropdown>
        </Field>
        <FieldRow>
          <Field>
            <Label>Street Address *</Label>
            <Input control={control} name='address' placeholder='John'></Input>
          </Field>
          <Field>
            <Label>City *</Label>
            <Input control={control} name='city' placeholder='Doe'></Input>
          </Field>
        </FieldRow>
        <FieldRow>
          <Field>
            <Label>Postal Code *</Label>
            <Input control={control} name='code' placeholder='123456'></Input>
          </Field>
          <Field>
            <Label>Phone Number *</Label>
            <Input
              control={control}
              name='phone'
              placeholder='+123 456 789'
            ></Input>
          </Field>
        </FieldRow>
        <div className='flex items-center gap-x-5 mb-11'>
          <Checkbox>Remember this address for next time use</Checkbox>
        </div>
        <h2 className='font-bold text-[30px] leading-normal mb-10'>Payment</h2>
        <Payment></Payment>
      </div>
      <div className='flex-1 max-w-[462px] ml-auto'>
        <ContributionSummury></ContributionSummury>
      </div>
    </div>
  )
}

export default ShippingPage
