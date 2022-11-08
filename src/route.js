import React from "react";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Navigate,
  } from "react-router-dom";import About from "./components/About";
import Home from "./components/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }, 
    {
      path: "/about",
      element: <About />,
    }, 

]);


  
function Router() {

      return <RouterProvider router={router} />;
    }
export default Router;
