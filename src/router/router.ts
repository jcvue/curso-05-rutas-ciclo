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
        path: '/dbz',
        name: 'dbz',
        component: () =>
            import(/* webpackChunkName: "DbzLayout" */ '@/modules/dbz/layouts/DbzLayout.vue'),
        children: [
            {
                path: 'character',
                name: 'dbz-characters',
                component: () =>
                    import(
                        /* webpackChunkName: "CharacterPage" */ '@/modules/dbz/pages/CharacterPage.vue'
                    ),
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () =>
                    import(/* webpackChunkName: "AboutPage" */ '@/modules/dbz/pages/AboutPage.vue'),
            },
            {
                path: '',
                redirect: { name: 'dbz-character' },
            },
        ],
    },
    {
        path: '/401',
        name: '401',
        component: () =>
            import(/* webpackChunkName: "401Page" */ '@/modules/shared/pages/UnauthorizedPage.vue'),
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

// Guard global síncrono
// router.beforeEach((to, from, next) => {
//     if (to.fullPath === '/401') return next();
//     const rand = Math.random() * 100;
//     rand >= 30 ? next() : next({ name: '401' });
// });

// Guard global asíncrono
const canAccess = () => {
    return new Promise((resolve) => {
        const rand = Math.random() * 100;
        rand >= 30 ? resolve(true) : resolve(true);
    });
};

router.beforeEach(async (to, from, next) => {
    if (to.fullPath === '/401') return next();
    const authorized = await canAccess();
    authorized ? next() : next({ name: '401' });
});

export default router;
