import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { store } from './store/configureStore.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer bodyClassName='font-primary text-sm'></ToastContainer>
    </BrowserRouter>
  </Provider>
)
