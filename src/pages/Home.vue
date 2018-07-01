<template>
    <section class="home">
        <div class="home__logo" v-html="require('@/assets/images/star_wars_logo.svg')"></div>
        <h1 class="home__title">Star Wars Deck</h1>
    </section>
</template>

<script>
    export default {
        name: 'Home'
    };
</script>

<style lang="scss">
    .home {
        height: 100%;
        padding-top: 52px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .home__title {
        font-size: 36px;
        font-weight: 900;
        color: $color-dark;
    }

    .home__logo {
        margin-top: 80px;
        width: 200px;
        * {
            fill: $color-dark;
        }
    }
</style>