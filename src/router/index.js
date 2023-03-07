import { createRouter, createWebHistory} from "vue-router";
import Dashboard from '../views/pages/dashboard/Index.vue'
import IndexPublic from '../views/pages/users/public/Index.vue'
import IndexAdmin from '../views/pages/users/admins/index.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/user/public',
        name: 'user.public',
        component: IndexPublic
    },
    {
        path: '/user/admin',
        name: 'user.admin',
        component: IndexAdmin
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;