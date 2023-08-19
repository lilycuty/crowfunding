/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import LayoutAuthentication from 'src/layout/LayoutAuthentication'
import ErrorComponent from 'src/components/common/ErrorComponent'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { withErrorBoundary } from 'react-error-boundary'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Label } from 'components/label'
import { InputTogglePassword } from 'components/input'
import { Input } from 'components/input'
import { Field } from 'components/field'
import { ButtonGoggle } from 'src/components/button'
import { Button } from 'components/button'

const schema = yup.object({
  email: yup
    .string()
    .required('This field is required')
    .email('Invalid email address'),
  password: yup.string().required('This field is required')
})

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const handleSignIn = (values) => {
    console.log('handleSignUpForm ~ values', values)
  }

  return (
    <LayoutAuthentication heading='Welcome Back!'>
      <p
        className='text-xs text-center lg:text-sm font-normal text-text3 lg:mb-8
      mb-6'
      >
        Dont have an account?{' '}
        <Link to='/sign-up' className='text-primary font-medium underline'>
          Sign up?
        </Link>
      </p>

      <ButtonGoggle>Sign in with google</ButtonGoggle>

      <form onSubmit={handleSubmit(handleSignIn)} autoComplete='off'>
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
          <InputTogglePassword
            name='password'
            placeholder='Enter password'
            error={errors.password?.message}
            control={control}
          ></InputTogglePassword>
        </Field>

        <Field>
          <div className='text-right cursor-pointer'>
            <span className='inline-block text-primary text-sm font-medium'>
              Forgot password
            </span>
          </div>
        </Field>

        <Button className='w-full' kind='primary' type='submit'>
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  )
}

export default withErrorBoundary(SignInPage, {
  FallbackComponent: ErrorComponent
})
