import { createRouter, createWebHashHistory } from "vue-router"
import DocumentSignPage from "@/pages/DocumentSignPage"

const routes = [
    {
        path: '/',
        component: DocumentSignPage
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;