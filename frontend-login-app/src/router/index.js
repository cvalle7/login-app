import LoginView from "@/views/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;