import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login';
import App from './App';
import Dashboard from './pages/Dashboard';
import AddSummary from './pages/AddSummary';
import { AuthProvider } from './context/AuthContext';
import ContractTenderedForApproval from './pages/ContractTenderedForApproval';



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
    path: "/add-summary",
    element: <AddSummary/>
  },
  {
    path: "/:summaryId/contract-tendered-for-approval",
    element: <ContractTenderedForApproval/>
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


