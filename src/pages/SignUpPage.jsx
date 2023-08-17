/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import LayoutAuthentication from '../layout/LayoutAuthentication'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Label } from '../components/label'
import { Input } from '../components/input'
import { IconGoogle } from '../components/icon'
import { Field } from '../components/field'
import { Checkbox } from '../components/checkbox'
import { Button } from '../components/button'

const schema = yup.object({
  fullname: yup.string().required('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('This field is required')
    .min(8, 'Password must be 8 character')
})
const SignUpPage = () => {
  const [acceptTerm, setAcceptTerm] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })
  console.log('SignUpPage ~ errors', errors)

  const handleSignUpForm = (values) => {
    console.log('handleSignUpForm ~ values', values)
  }
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm)
  }
  console.log('SignUpPage ~ acceptTerm', acceptTerm)

  return (
    <LayoutAuthentication heading='Sign up'>
      <p
        className='text-xs text-center lg:text-sm font-normal text-text3 lg:mb-8
      mb-6'
      >
        Already have an account?{' '}
        <Link to='/sign-in' className='text-primary font-medium underline'>
          Sign in
        </Link>
      </p>
      <button className='flex items-center justify-center gap-x-3 w-full py-4 border border-strock  dark:border-darkStroke rounded-xl text-text2 text-base font-semibold mb-5 dark:text-white'>
        <IconGoogle />
        <span>Sign up with google</span>
      </button>
      <p className='text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2 dark:text-white'>
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUpForm)} autoComplete='off'>
        <Field>
          <Label htmlFor='fullname'>Full Name *</Label>
          <Input
            name='fullname'
            placeholder='Enter your fullname'
            error={errors.fullname?.message}
            control={control}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor='email'>Email *</Label>
          <Input
            type='email'
            name='email'
            placeholder='example@gmail.com'
            error={errors.email?.message}
            control={control}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor='password'>Password *</Label>
          <Input
            type='password'
            name='password'
            placeholder='Create a password'
            error={errors.password?.message}
            control={control}
          ></Input>
        </Field>

        <div className='flex items-center gap-x-5 mb-5'>
          <Checkbox name='term' checked={acceptTerm} onClick={handleToggleTerm}>
            <p className='flex-1 text-xs lg:text-sm text-text2 dark:text-text3'>
              I agree to the{' '}
              <span className='text-secondary underline dark:no-underline'>
                Tearms of Use
              </span>{' '}
              and have read and understand the{' '}
              <span className='text-secondary underline dark:no-underline'>
                Privacy policy.
              </span>
            </p>
          </Checkbox>
        </div>

        <Button className='bg-primary w-full' type='submit'>
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  )
}

export default SignUpPage
