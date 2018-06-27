import Vuex from 'vuex';
import Vue from 'vue';
import Resource from '@/store/modules/Resources.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Resource,
    }
});