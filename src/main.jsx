import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLayout from './Layouts/HomeLayout';
import Home from './Pages/Home';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AllPlants from './Pages/AllPlants';
import MyPlants from './Pages/MyPlants';
import AddPlants from './Pages/AddPlants';
import AuthLayout from './Layouts/AuthLayout';
import SignUp from './Pages/AuthPages/SignUp';
import LogIn from './Pages/AuthPages/LogIn';
import AuthProvider from './Components/Contexts/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        // loader: ()=> fetch('http://localhost:3000/plants'),
        Component: Home
      },
      {
        path: "all-plants",
        loader: ()=> fetch('http://localhost:3000/plants'),
        Component: AllPlants

      },
      {
        path: "my-plants",
        Component: MyPlants
      },
      {
        path: "add-plants",
        Component: AddPlants
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [

      {
        path: "sign-up",
        Component: SignUp
      },
      {
        path: "log-in",
        Component: LogIn
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)