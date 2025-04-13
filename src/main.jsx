import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';
import AuthProviders from './Providers/AuthProviders';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
)
