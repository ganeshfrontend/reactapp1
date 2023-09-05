import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Courses from './Courses';
import Aboutus from './Aboutus';
import Country from './Countries';
import Details from './Details'
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Router from './Countries';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/Courses",
            element:<Courses></Courses>,
          },
          {
            path: "/Aboutus",
            element:<Aboutus></Aboutus>,
          },
          {
            path: "/Countries",
            element:<Country></Country>,
            children:[
                {
                path: "/Countries/details/:cname",
                element:<Details></Details>,
            }
            ]
          },

       ]
    },

  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
