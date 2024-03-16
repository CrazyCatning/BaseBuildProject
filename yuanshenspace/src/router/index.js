import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import Registerview from '../views/RegisterView.vue'
import UserlistView from '../views/UserlistView.vue'
import UserProfileView from '../views/UserProfile.vue'
const routes = [
    {
        path: '/',
        name: "home",
        component: HomeView
    },
    {
        path: '/home',
        name: "home",
        component: HomeView
    },
    {
        path: '/login',
        name: "login_index",
        component: LoginView
    },
    {
        path: '/register',
        name: "register_index",
        component: Registerview
    },{
        path: '/404',
        name: "404",
        component: NotFound
    },
    {
        path: '/userlist',
        name: "userlist_index",
        component: UserlistView
    },
    {
        path: '/userprofile',
        name: "userprofile",
        component: UserProfileView
    },
    {
        path: '/:catchAll(.*)',
        redirect: "/404/"
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
