import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import {HeroesApp} from './HeroesApp'

import './style.css'


createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <BrowserRouter>
        <HeroesApp></HeroesApp>
      </BrowserRouter>
    </StrictMode>,
  
  
)
