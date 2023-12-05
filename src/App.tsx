import { Routes, Route } from 'react-router-dom'


import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Providers } from './contexts/Providers'
import { MainLayout } from './layouts/MainLayout'
import { GlobalStyle } from './styles/globals.styles'

function App () {
  return (
    <Providers>
      <MainLayout>
        <GlobalStyle/>
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


