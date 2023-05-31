import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './components/routes/Routes.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import Authprovider from './components/pages/AuthProvider/Authprovider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </Authprovider>
  </React.StrictMode>,
)
