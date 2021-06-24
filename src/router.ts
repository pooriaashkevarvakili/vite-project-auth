import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=>import('./components/Home.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=>import('./components/Login.vue'),
    },
    {
        path:'/new',
        name:"New",
        component:()=>import('./components/New.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router



