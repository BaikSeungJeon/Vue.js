/* eslint-disable no-unused-vars */
import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/Home'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import Register from '../views/Register'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;