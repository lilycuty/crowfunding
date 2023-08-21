/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'

const CampaignSupport = () => {
  const { control } = useForm()
  return (
    <div>
      <h2 className='text-lg font-semibold mb-5'>Support</h2>
      <div className='w-full bg-white shadow-1 py-7 px-6 flex flex-col rounded-xl'>
        <p className='text-xl mb-8 text-text3 text-center'>
          Pledge without reward
        </p>
        <Input
          placeholder='$10'
          control={control}
          name='Pledge'
          className='text-lg font-medium py-2 px-5 border border-strock w-full rounded-md mb-5'
        ></Input>
        <div className='bg-grayf3 p-5 rounded-xl mb-5'>
          <p className='text-sm text-text2 font-semibold mb-5'>
            Back it because you believe in it.
          </p>
          <p className='text-text3 text-sm'>
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button type='button' kind='secondary'>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default CampaignSupport
