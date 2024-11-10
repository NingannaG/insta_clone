import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profilepage from './Pages/Profile';
import MessageContainer from './Pages/MessageContainer';
import MessageBady from './Components/MessageBady';
import Search from './Pages/Search';
import Notification from './Pages/Notification';
import Create from './Pages/Create';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/signup',
    element: <Signup />
  }, {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element:
      <>
        <Profilepage />
      </>
  },
  {
    path: '/message',
    element:
      <>
        <MessageContainer />
      </>
  },
  // {
  //   path: '/message',
  //   element:
  //     <>
  //       <MessageBady/>
  //     </>
  // },
  // {
  //   path: '/search',
  //   element:
  //     <>
  //       <Search/>
  //     </>
  // },
  {
    path: '/notifiction',
    element:
      <>
        <Notification/>
      </>
  },
  {
    path: '/create',
    element:
      <>
        <Create/>
      </>
  }
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
