import Vue from 'vue';
import Router from 'vue-router';
import Resource from '@/pages/Resource';
import Home from '@/pages/Home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/:resource',
            name: 'Resource',
            component: Resource
        }
    ]
});
