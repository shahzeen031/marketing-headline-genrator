import React from "react"
import { Redirect } from "react-router-dom"

// Pages Component
import Chat from "../pages/Chat/Chat"



// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"



// Dashboard
import Dashboard from "../pages/Dashboard/index"



import CryptoIcoLanding from "../pages/Crypto/CryptoIcoLanding/index"




const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  



  //chat
  { path: "/chat", component: Chat },



  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  { path: "/", exact: true,  component: CryptoIcoLanding },
]

export { authProtectedRoutes, publicRoutes }
