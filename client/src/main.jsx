import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { store, persistor } from "./Redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
