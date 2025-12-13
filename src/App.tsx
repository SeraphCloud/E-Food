import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/GlobalStyles'
import AppRoutes from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
