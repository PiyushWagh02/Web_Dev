import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
     
      </Route>
  )
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
