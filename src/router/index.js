import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login'),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import('../views/SignUp'),
  },
  {
    path: "/singup_accout",
    name: "SignUpAccountInfo",
    component:() => import('../views/SignUpAccountInfo'),
  },
  {
    path: "/singup_personal",
    name: "SignUpPersonalInfo",
    component:() => import('../views/SignUpPersonalInfo'),
  },
  {
    path: "/singup_check",
    name: "SignUpCheck",
    component:() => import('../views/SignUpCheckInfo'),
  },
  {
    path: "/singup_finished",
    name: "SignUpFinished",
    component:() => import('../views/SignUpFinished'),
  },
  {
    path: "/signup_policy",
    name: "Policy",
    component:() => import('../views/Policy'),
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: () => import('../views/ForgetPassword'),
  },
  {
    path: "/user",
    name: "User",
    component: () => import('../views/User'),
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    component: () => import('../views/ResetPassword'),
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;
