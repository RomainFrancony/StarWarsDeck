import Vue from 'vue';
import Router from 'vue-router';
import Resource from '@/pages/Resource';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/:resource',
            name: 'Resource',
            component: Resource
        }
    ]
});
