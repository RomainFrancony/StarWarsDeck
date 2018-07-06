import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import { VueHammer } from 'vue2-hammer';
import CONST from '@/utils/Const';
import LazyImage from '@/components/LazyImage';
import '@/plugins/Filters';

Vue.use(VueResource);
Vue.http.options.root = CONST.apiUrl;
Vue.use(VueHammer);
Vue.component(LazyImage);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
});
