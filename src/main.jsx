import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Dashboard from './Pages/Dashboard/DashboardAdmin.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import DashboardAdmin from './Pages/Dashboard/DashboardAdmin.jsx';
import Students from './Pages/Students/Students.jsx';
import Teachers from './Pages/Teachers/Teachers.jsx';
import SalaryDoners from './Pages/SalaryDoners/SalaryDoners.jsx';
import Founder from './Pages/Founder/Founder.jsx';
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Dashboard/>,
    children: [
      
      {
        path: '/admin/dashboard',
        element: <DashboardAdmin/>
      },
      {
        path: '/admin/students',
        element: <Students/>
      },
      {
        path: '/admin/teachers',
        element: <Teachers/>
      },
      {
        path: '/admin/salary-donors',
        element: <SalaryDoners/>
      },
      {
        path: '/admin/founder-list',
        element: <Founder/>
      },

    ]
  },
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
