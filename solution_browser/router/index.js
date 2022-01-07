import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Einfuehrung from "../views/Einfuehrung.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Einfuehrung',
        name: 'Einfuehrung',
        component: Einfuehrung
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

