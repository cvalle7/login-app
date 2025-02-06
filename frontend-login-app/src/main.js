import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faGoogle)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');