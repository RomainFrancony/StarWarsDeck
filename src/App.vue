<template>
    <div id="app">
        <toolbar/>
        <main class="app__content">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar';

    export default {
        name: 'app',
        components: {Toolbar}
    };
</script>

<style src="@/styles/style.scss" lang="scss"></style>
<style lang="scss">

    #app, .app__content {
        height: 100%;
    }

    .app__content {
        padding-top: 52px;
        box-sizing: border-box;
    }
</style>
