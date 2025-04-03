import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'
import App from './App.jsx'
import Home from './pages/homePage/Home.jsx'
import List from './pages/listPage/List.jsx'
import Single from './pages/singlePage/Single.jsx'
import Login from './pages/loginPage/Login.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
    <Route index={true} path='/' element= {<Home/>}/>
    <Route path='/list' element={<List/>}/>
    <Route path='/single' element={<List/>}/>
    <Route path='/login' element={<List/>}/>

    </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
