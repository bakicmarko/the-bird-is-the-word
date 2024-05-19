import { createApp, onMounted, ref, provide } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

const app = createApp({
  render() {
    return <App />
  },
})

app.use(store)
app.use(router)

app.mount('#app')
