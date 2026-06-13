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
import PlantDetails from './Pages/PlantDetails';
import PrivateRoute from './Components/Contexts/PrivateRoute';
import Loading from './Components/Loading';
import UpdatePlant from './Pages/UpdatePlant';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://plant-heaven-server-production.up.railway.app/plants'),
        Component: Home
      },
      {
        path: "all-plants",
        // loader: () => fetch('https://plant-heaven-server-production.up.railway.app/plants'),
        Component: AllPlants

      },
      {
        path: "my-plants",
        element: <PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "add-plants",
        element: <PrivateRoute>
          <AddPlants></AddPlants>
        </PrivateRoute>

      },
      {
        path: "plant-details/:id",
        loader: ({ params }) => fetch(`https://plant-heaven-server-production.up.railway.app/plant/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute>
          <PlantDetails></PlantDetails>
        </PrivateRoute>
      },
      {
        path: "plant-update/:id",
        loader: ({ params }) => fetch(`https://plant-heaven-server-production.up.railway.app/plant/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute>
          <UpdatePlant></UpdatePlant>
        </PrivateRoute>
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