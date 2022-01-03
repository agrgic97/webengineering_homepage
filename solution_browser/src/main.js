import { createApp } from 'vue'
import App from './App.vue'

import store from '../store/store'
import router from "../router"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"

library.add(faBars)
library.add(faTimes)
library.add(faHome)

const app = createApp(App)

app.use(store)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

