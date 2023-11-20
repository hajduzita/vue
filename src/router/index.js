import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import ServiceListPage from '../views/ServiceListPage.vue';
import PageNotFoundPage from '../views/PageNotFoundPage.vue';
import { LOGIN_PATH, STATUS_PATH } from '../constants/routes.ts';
import {AuthenticationService} from '@/services/authentication.ts';

const authenticationService = new AuthenticationService();
const isUserLoggedIn = (to, from, next) => {
    return authenticationService.isAuthenticated() ? next() : next(LOGIN_PATH);
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: LOGIN_PATH,
            component: LoginPage
        },
        {
            path: STATUS_PATH,
            component: ServiceListPage,
            beforeEnter: isUserLoggedIn
        },
        {
            path: '/:catchAll(.*)',
            component: PageNotFoundPage
        }
    ]
})

export default router