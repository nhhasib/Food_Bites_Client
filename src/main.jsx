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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </HelmetProvider>
    </Authprovider>
  </React.StrictMode>,
)
