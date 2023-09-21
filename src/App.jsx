import { Fragment } from 'react'
import { useEffect } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { authRefreshToken, authUpdateUser } from './store/auth/auth-slice'
import { getToken, logOut } from './utils/auth'

Modal.setAppElement('#root')
Modal.defaultStyles = {}

const App = () => {
  const { user } = useSelector((state) => state.auth)
  console.log('App ~ user', user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken()
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token
        })
      )
    } else {
      const { refresh_token } = getToken()
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token))
      } else {
        dispatch(authUpdateUser({}))
        logOut()
      }
    }
  }, [user, dispatch])
  return (
    <Fragment>
      {/* <Suspense>
        <Routes>
          <Route element={<LayoutDashboard></LayoutDashboard>}>
            <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
            <Route
              path='/unauthorize'
              element={<UnauthorizePage></UnauthorizePage>}
            ></Route>
            <Route
              path='/campaign'
              element={<CampaignPage></CampaignPage>}
            ></Route>
            <Route
              element={
                <RequiredAuthPage
                  allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}
                ></RequiredAuthPage>
              }
            >
              <Route
                path='/start-campaign'
                element={<StartCampaignPage></StartCampaignPage>}
              ></Route>
            </Route>
            <Route
              path='/campaign/:slug'
              element={<CampaignView></CampaignView>}
            ></Route>
          </Route>
          <Route element={<LayoutPayment></LayoutPayment>}>
            <Route
              path='/checkout'
              element={<CheckoutPage></CheckoutPage>}
            ></Route>
            <Route
              path='/shipping-address'
              element={<ShippingPage></ShippingPage>}
            ></Route>
          </Route>
          <Route path='/register' element={<SignUpPage></SignUpPage>}></Route>
          <Route path='/login' element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </Suspense> */}
    </Fragment>
  )
}

export default App
