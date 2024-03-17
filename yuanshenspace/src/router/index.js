import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import Registerview from '../views/RegisterView.vue'
import UserlistView from '../views/UserlistView.vue'
import UserProfileView from '../views/UserProfile.vue'
const routes = [
    {
        path: '/myspace/',
        name: "home",
        component: HomeView
    },
    {
        path: '/myspace/login/',
        name: "login_index",
        component: LoginView
    },
    {
        path: '/myspace/register/',
        name: "register_index",
        component: Registerview
    },
    {
        path: '/myspace/404/',
        name: "404",
        component: NotFound
    },
    {
        path: '/myspace/userlist',
        name: "userlist_index",
        component: UserlistView
    },
    {
        path: '/myspace/userprofile/:userId/',
        name: "userprofile",
        component: UserProfileView
    },
    {
        path: '/myspace/:catchAll(.*)',
        redirect: "/myspace/404/"
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
