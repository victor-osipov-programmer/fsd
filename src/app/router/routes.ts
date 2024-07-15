import type { RouteRecordRaw } from 'vue-router'
import { HomePage } from '@/pages/home-page'
import { AboutPage } from '@/pages/about-page'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
]
