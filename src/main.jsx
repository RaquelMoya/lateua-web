import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { App } from './views/App'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import './styles.css'
import { Login } from './views/Login'
import { About } from './views/About'
import { NotFound } from './views/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="*" element= {<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
