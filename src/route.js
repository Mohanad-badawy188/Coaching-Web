import React from "react";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Navigate,
  } from "react-router-dom";
  import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }, 
    {
      path: "/about",
      element: <About />,
    }, 
    {
      path: "/contact",
      element: <Contact />,
    }, 
    {
      path: "/services",
      element: <Services />,
    }, 

]);


  
function Router() {

      return <RouterProvider router={router} />;
    }
export default Router;
