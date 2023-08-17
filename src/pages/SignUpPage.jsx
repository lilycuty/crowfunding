/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import LayoutAuthentication from '../layout/LayoutAuthentication'
import { IconGoogle } from '../components/icon'
import { Field } from '../components/field'
import { Label } from '../components/label'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { Checkbox } from '../components/checkbox'

const SignUpPage = () => {
  const [acceptTerm, setAcceptTerm] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting }
  } = useForm({
    mode: 'onChange'
  })

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
      <button className='flex items-center justify-center gap-x-3 w-full py-4 border border-strock rounded-xl text-text2 text-base font-semibold mb-5'>
        <IconGoogle />
        <span>Sign up with google</span>
      </button>
      <p className='text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2'>
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUpForm)}>
        <Field>
          <Label htmlFor='fullname'>Full Name *</Label>
          <Input
            name='fullname'
            placeholder='Enter your fullname'
            control={control}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor='email'>Email *</Label>
          <Input
            type='email'
            name='email'
            placeholder='example@gmail.com'
            control={control}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor='password'>Password *</Label>
          <Input
            type='password'
            name='password'
            placeholder='Create a password'
            control={control}
          ></Input>
        </Field>

        <div className='flex items-center gap-x-5 mb-5'>
          <Checkbox name='term' checked={acceptTerm} onClick={handleToggleTerm}>
            I agree to the{' '}
            <span className='text-secondary underline'>Tearms of Use</span> and
            have read and understand the{' '}
            <span className='text-secondary underline'>Privacy policy.</span>
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
