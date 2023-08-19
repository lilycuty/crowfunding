/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form'
import { Label } from 'src/components/label'
import { Input } from 'src/components/input'
import { Field, FieldRow } from 'src/components/field'

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm()
  return (
    <div className='bg-white rounded-xl py-10 px-[66px]'>
      <div className='text-center'>
        <h1 className='py-4 px-[60px] bg-text4 bg-opacity-10 rounded-xl font-bold text-[25px] inline-block mb-10'>
          Start a Campaign🚀
        </h1>
        <form>
          <FieldRow>
            <Field>
              <Label htmlFor='title'>Campaign Title *</Label>
              <Input
                control={control}
                placeholder='Write a titel'
                name='title'
              ></Input>
            </Field>
            <Field>
              <Label htmlFor='title'>Select a category *</Label>
              {/* Dropdown */}
            </Field>
          </FieldRow>
        </form>
      </div>
    </div>
  )
}

export default CampaignAddNew
