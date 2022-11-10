import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Routes,
  HashRouter,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Webinar from "./components/Webinar";
import Pricing from "./components/Pricing";
import ThankYou from "./components/ThankYou";
// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/:page",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/services",
//     element: <Services />,
//   },
//   {
//     path: "/Webinar",
//     element: <Webinar />,
//   },
//   {
//     path: "/Pricing",
//     element: <Pricing />,
//   },
//   {
//     path: "/ThankYou",
//     element: <ThankYou />,
//   },

// ]);

// function Router() {
//   return(

//     <HashRouter>

//    <RouterProvider router={router} />
//   </HashRouter>
//     )
// }
// export default Router;

function Router() {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Webinar" element={<Webinar />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    
    </div>
  );
}
export default Router;
