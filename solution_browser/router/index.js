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
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Einfuehrung',
        name: 'Einfuehrung',
        component: Einfuehrung
    },
    {
        path: '/CSS1',
        name: 'CSS1',
        component: CSS1
    },
    {
        path: '/CSS2',
        name: 'CSS2',
        component: CSS2
    },
    {
        path: '/JavaScript',
        name: 'JavaScript',
        component: JavaScript
    },
    {
        path: '/DOM',
        name: 'DOM',
        component: DOM
    },
    {
        path: '/ECMAScript',
        name: 'ECMAScript',
        component: ECMAScript
    },
    {
        path: '/Functional',
        name: 'Functional',
        component: Functional
    },
    {
        path: '/Async',
        name: 'Async',
        component: Async
    },
    {
        path: '/SVG',
        name: 'SVG',
        component: SVG
    },
    {
        path: '/TypeScript',
        name: 'TypeScript',
        component: TypeScript
    },
    {
        path: '/Vue',
        name: 'Vue',
        component: Vue
    },
    {
        path: '/PHP',
        name: 'PHP',
        component: PHP
    },
    {
        path: '/Security',
        name: 'Security',
        component: Security
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

