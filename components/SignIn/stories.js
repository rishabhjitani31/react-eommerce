import { storiesOf } from '@storybook/react'
import SignIn from './index'

const stories = storiesOf('Sign In', module)

stories.add('Basic Page', () => (
  <SignIn
    signInText='Sign in'
    forgotPasswordText='Forgot password?'
    createAccountText='Create an account'
  />
))
