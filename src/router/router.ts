import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/modules/pokemon/pages/ListPage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/modules/pokemon/pages/AboutPage.vue'),
    },
    {
        path: '/id',
        name: 'pokemon',
        component: () => import('@/modules/pokemon/pages/PokemonPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/modules/shared/pages/NotFoundPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
