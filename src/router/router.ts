import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/pokemon',
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () =>
            import(
                /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout.vue'
            ),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () =>
                    import(
                        /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue'
                    ),
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () =>
                    import(
                        /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue'
                    ),
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () =>
                    import(
                        /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'
                    ),
                props: (route) => {
                    return {
                        id: Number(route.params.id) || 1,
                    };
                },
            },
            {
                path: '',
                redirect: { name: 'pokemon-home' },
            },
        ],
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
