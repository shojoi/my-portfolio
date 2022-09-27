import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Components from './components/index';
import ErrorPage from './components/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const { Home, About, SinglePost, Post, Project } = Components;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post/:slug",
    element: <SinglePost />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
