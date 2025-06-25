import React from 'react'
import Overview from './pages/OverviewPage'
import { Route,Routes } from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import CreateTestPage from "./pages/CreateTestPage";
import Sidebar from "./components/common/Sidebar";
import Sigin from './components/login_pages/sigin'

function admindash() {
  return (
    
        <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>
    <Sidebar />
    <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/createtest' element={<CreateTestPage />} />
        <Route path='/sigin' element={<Sigin/>} />
    </Routes>
    </div>
  )
}

export default admindash