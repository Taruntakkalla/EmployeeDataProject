import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import  { employeeSote } from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
 
    <Provider store = {employeeSote}>
    <BrowserRouter>
      
        <App />
       </BrowserRouter>
     </Provider>

)
