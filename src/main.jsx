import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cardProductsLoader';
import Checkout from './components/Checkout/Checkout';
import HomePage from './components/Home/HomePage';
import Signup from './components/SignUp/Signup';
import AuthProvider from './components/providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
