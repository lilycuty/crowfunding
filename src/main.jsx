/* eslint-disable react-refresh/only-export-components */
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { store } from './store/configureStore.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import './index.scss'
import { permissions } from './constants/permissions.js'
import { Suspense } from 'react'
const UnauthorizePage = React.lazy(() => import('./pages/UnauthorizePage'))
const StartCampaignPage = React.lazy(() => import('./pages/StartCampaignPage'))
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'))
const SignInPage = React.lazy(() => import('./pages/SignInPage'))
const ShippingPage = React.lazy(() => import('./pages/ShippingPage'))
const RequiredAuthPage = React.lazy(() => import('./pages/RequiredAuthPage'))
const LayoutPayment = React.lazy(() => import('./layout/LayoutPayment'))
const LayoutDashboard = React.lazy(() => import('./layout/LayoutDashboard'))
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'))
const CampaignView = React.lazy(() => import('./modules/campaign/CampaignView'))
const CampaignPage = React.lazy(() => import('./pages/CampaignPage'))

const router = createBrowserRouter([
  {
    element: <LayoutDashboard />,
    children: [
      {
        path: '/',
        element: <DashboardPage />
      },
      {
        path: '/campaign',
        element: <CampaignPage />
      },
      {
        path: '/unauthorize',
        element: <UnauthorizePage />
      },
      {
        element: (
          <RequiredAuthPage
            allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}
          />
        ),
        children: [
          {
            path: '/start-campaign',
            element: <StartCampaignPage />
          }
        ]
      },
      {
        path: '/campaign/:slug',
        element: <CampaignView />
      }
    ]
  },
  {
    element: <LayoutPayment />,
    children: [
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
      {
        path: '/shipping-address',
        element: <ShippingPage />
      }
    ]
  },
  {
    path: '/register',
    element: <SignUpPage></SignUpPage>
  },
  {
    path: '/login',
    element: <SignInPage></SignInPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Suspense>
    <ToastContainer bodyClassName='font-primary text-sm'></ToastContainer>
  </Provider>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//       <ToastContainer bodyClassName='font-primary text-sm'></ToastContainer>
//     </BrowserRouter>
//   </Provider>
// )
