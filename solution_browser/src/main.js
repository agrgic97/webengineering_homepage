import { createApp } from 'vue'
import App from './App.vue'

import store from '../store/store'
import router from "../router"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// https://github.com/elisiondesign/vue-code-highlight
import VueCodeHighlight from "vue-code-highlight"


library.add(faBars)
library.add(faTimes)
library.add(faHome)
library.add(faAngleUp)
library.add(faGithub)

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueCodeHighlight)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

