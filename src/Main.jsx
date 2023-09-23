import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/style/style.css'
// import App from './App'
import Header from './components/Header'
import Billboard from './components/Billboard'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Billboard/>
  </React.StrictMode>,
)
