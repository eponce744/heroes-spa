import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DcPage } from '../heroes/pages/DCPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { Navbar } from '../ui/components/Navbar'
import { HeroesRoutes } from '../heroes/router/HeroesRoutes'


export const AppRouter = () => {
  return (
    <>

        <Routes>
            <Route path="login" element={<LoginPage />} />

            <Route path="/*" element={<HeroesRoutes />} />
        </Routes>
    </>
  )
}
