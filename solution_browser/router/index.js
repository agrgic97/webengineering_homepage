// https://router.vuejs.org/guide/

import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Einfuehrung from "../views/Einfuehrung.vue"
import CSS1 from "../views/CSS1.vue"
import CSS2 from "../views/CSS2.vue"
import JavaScript from "../views/JavaScript.vue"
import DOM from "../views/DOM.vue"
import ECMAScript from "../views/ECMAScript.vue"
import Functional from "../views/Functional.vue"
import Async from "../views/Async.vue"
import SVG from "../views/SVG.vue"
import TypeScript from "../views/TypeScript.vue"
import Vue from "../views/Vue.vue"
import PHP from "../views/PHP.vue"
import Security from "../views/Security.vue"

const routes = [
    {
        path: '/~agrgic2s/',
        name: 'Home',
        component: Home
    },
    {
        path: '/~agrgic2s/Einfuehrung',
        name: 'Einfuehrung',
        component: Einfuehrung
    },
    {
        path: '/~agrgic2s/CSS1',
        name: 'CSS1',
        component: CSS1
    },
    {
        path: '/~agrgic2s/CSS2',
        name: 'CSS2',
        component: CSS2
    },
    {
        path: '/~agrgic2s/JavaScript',
        name: 'JavaScript',
        component: JavaScript
    },
    {
        path: '/~agrgic2s/DOM',
        name: 'DOM',
        component: DOM
    },
    {
        path: '/~agrgic2s/ECMAScript',
        name: 'ECMAScript',
        component: ECMAScript
    },
    {
        path: '/~agrgic2s/Functional',
        name: 'Functional',
        component: Functional
    },
    {
        path: '/~agrgic2s/Async',
        name: 'Async',
        component: Async
    },
    {
        path: '/~agrgic2s/SVG',
        name: 'SVG',
        component: SVG
    },
    {
        path: '/~agrgic2s/TypeScript',
        name: 'TypeScript',
        component: TypeScript
    },
    {
        path: '/~agrgic2s/Vue',
        name: 'Vue',
        component: Vue
    },
    {
        path: '/~agrgic2s/PHP',
        name: 'PHP',
        component: PHP
    },
    {
        path: '/~agrgic2s/Security',
        name: 'Security',
        component: Security
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

