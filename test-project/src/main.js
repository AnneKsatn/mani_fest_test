import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from '@/router/router'
import store from "@/store";

const app = createApp(App)
app.use(router)
app.use(store)

components.forEach(component => {
    console.log(component)
    app.component(component.name, component)
})

app.mount('#app')
