import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Providers } from './contexts/Providers'
import { MainLayout } from './layouts/MainLayout'

function App () {
  return (
    <Providers>
      <CssBaseline/>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
          <Route/>
        </Routes>
      </MainLayout>
    </Providers>
  )
}

export default App


