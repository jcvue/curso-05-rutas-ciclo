import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () =>
            import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue'),
    },
    {
        path: '/id',
        name: 'pokemon',
        component: () =>
            import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () =>
            import(
                /* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NotFoundPage.vue'
            ),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
