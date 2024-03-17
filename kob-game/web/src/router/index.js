import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound.vue'
import PkindexView from '../views/pk/PkIndexView.vue'
import RanklistView from '../views/ranklist/RanklistView.vue'
import RecordView from '../views/record/RecordView.vue'
import UserBotInfo from '../views/user/bot/UserBotView.vue'

const routes = [
    {
        path: '/',
        name: 'pk_index',
        component: PkindexView
    },
    {
        path: '/pk/',
        name: 'pk_index',
        component: PkindexView
    },
    {
        path: '/404/',
        name: '404',
        component: NotFound
    },
    {
        path: '/ranklist/',
        name: 'ranklist_index',
        component: RanklistView
    },
    {
        path: '/record/',
        name: 'record_index',
        component: RecordView
    },

    {
        path: '/user/bot/',
        name: 'user_bot_index',
        component: UserBotInfo
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
