import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import India from './pages/India.jsx';
import Sports from './pages/Sports.jsx'
import Business from './pages/Business.jsx'
import Login from './pages/Loging.jsx'
import World from './pages/World.jsx'
import Admin from './admin/Admin.jsx'
import NewsAll from './admin/pages/NewsAll.jsx'
import Category from './admin/pages/Category.jsx'
import Layout from './components/Layout.jsx'
import Layout2 from './admin/components/Layout.jsx'
import AddNews from './admin/pages/AddNews.jsx'
import AddCategory from './admin/pages/AddCategory.jsx'
import UpdateNews from './admin/pages/UpdateNews.jsx'
import NewsDetail from './pages/NewsDetail.jsx'
import ProtectedRoute from './admin/components/ProtectedRoute.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<App />} />
          <Route path='/india' element={<India />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/world' element={<World />} />
          <Route path='/business' element={<Business />} />
          <Route path='/news/:id' element={<NewsDetail />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path="/admin" element={<ProtectedRoute><Layout2 /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="category" element={<ProtectedRoute><Category /></ProtectedRoute>} />
          <Route path="news" element={<ProtectedRoute><NewsAll /></ProtectedRoute>} />
          <Route path="addNews" element={<ProtectedRoute><AddNews /></ProtectedRoute>} />
          <Route path="addCategory" element={<ProtectedRoute><AddCategory /></ProtectedRoute>} />
          <Route path="news/:id" element={<ProtectedRoute><UpdateNews /></ProtectedRoute>} />
          </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
