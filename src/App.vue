<template>
    <div id="app">
        <toolbar/>
        <main class="app__content">
            <transition :name="transitionName">
            <router-view :key="$route.fullPath"></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar';

    export default {
        name: 'app',
        components: {Toolbar},
        data() {
            return {
                transitionName: '',
            };
        },
        watch: {
            '$route' (to, from) {
                this.transitionName = to.params.resource < from.params.resource ? 'slideUp' : 'slideDown';
            },
        }
    };
</script>

<style lang="scss">
    @import '~@/styles/style.scss';

    #app, .app__content {
        height: 100%;
    }

    .app__content {
        position: relative;
        box-sizing: border-box;
    }
</style>
