import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'))
const SignInPage = React.lazy(() => import('./pages/SignInPage'))
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
