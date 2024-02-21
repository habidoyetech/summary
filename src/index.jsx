import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login';
import App from './App';
import Dashboard from './pages/Dashboard';
import AddSummary from './pages/AddSummary';
import { AuthProvider } from './context/AuthContext';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>

  },
  {
    path: "/dashboard/add-summary",
    element: <AddSummary/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>      
  </React.StrictMode>
);


