import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setHttpDefaults from './services/http-defaults'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
setHttpDefaults()
