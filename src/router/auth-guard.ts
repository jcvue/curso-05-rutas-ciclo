import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const isAuthenticatedGuard = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
): Promise<boolean> => {
    return new Promise<boolean>(() => {
        const rand = Math.random() * 100;
        rand >= 30 ? next() : next({ name: '401' });
    });
};
