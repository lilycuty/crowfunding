/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import useToggleValue from 'src/hooks/useToggleValue'
import LayoutAuthentication from 'src/layout/LayoutAuthentication'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Label } from 'components/label'
import { InputTogglePassword } from 'components/input'
import { Input } from 'components/input'
import { Field } from 'components/field'
import { Checkbox } from 'components/checkbox'
import { ButtonGoggle } from 'src/components/button'
import { Button } from 'components/button'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from 'src/components/common/ErrorComponent'
import { useDispatch } from 'react-redux'
import { authRegister } from 'src/store/auth/auth-slice'

const schema = yup.object({
  name: yup.string().required('This field is required'),
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
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue(false)
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })
  const dispatch = useDispatch()
  const handleSignUpForm = (values) => {
    try {
      console.log('handleSignUpForm ~ values', values)
      dispatch(authRegister({ ...values, permissions: [] }))
      reset({})
    } catch (error) {
      console.log('handleSignUpForm ~ error', error)
    }
  }

  return (
    <LayoutAuthentication heading='Sign Up'>
      <p
        className='text-xs text-center lg:text-sm font-normal text-text3 lg:mb-8
      mb-6'
      >
        Already have an account?{' '}
        <Link to='/login' className='text-primary font-medium underline'>
          Sign in
        </Link>
      </p>
      <ButtonGoggle>Sign up with google</ButtonGoggle>
      <p className='text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2 dark:text-white'>
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUpForm)} autoComplete='off'>
        <Field>
          <Label htmlFor='name'>Full Name *</Label>
          <Input
            name='name'
            placeholder='Enter your fullname'
            error={errors.name?.message}
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
          <InputTogglePassword
            name='password'
            placeholder='Create a password'
            error={errors.password?.message}
            control={control}
          ></InputTogglePassword>
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

        <Button className='w-full' kind='primary' type='submit'>
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  )
}

export default withErrorBoundary(SignUpPage, {
  FallbackComponent: ErrorComponent
})
