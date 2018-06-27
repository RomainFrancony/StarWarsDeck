<template>
    <div id="app">
        <toolbar/>
        <main>
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
