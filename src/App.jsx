import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'))

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
