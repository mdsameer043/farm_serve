import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ServicePage from './pages/service_page';
import ScheduleService from './pages/schedule_service'
import {Signin} from './pages/signin';
import Signup from './pages/signup';
import ProfilePage from './pages/profile_page';
import EditProfilePage from './pages/edit_profile_page';
import ContactPage from './pages/contact_page';
import reportWebVitals from './reportWebVitals';
import OrdersPage from './pages/orders_page';

import { createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/servicePage',
    element:<ServicePage/>,
  },
  {
    path:'/seheduleService',
    element:<ScheduleService/>,
  },
  {
    path:'/signin',
    element: <Signin/>,
  },
  {
    path:'/signup',
    element: <Signup/>,
  },
  {
    path:'/profilePage',
    element: <ProfilePage/>,
  },
  {
    path:'/editprofilePage',
    element: <EditProfilePage/>,
  },
  {
    path:'/contactPage',
    element: <ContactPage/>,
  },
  {
    path:'/ordersPage',
    element: <OrdersPage/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
