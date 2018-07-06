<template>
    <div class="toolbar" :class="{'toolbar--open' : drawerOpen}" @click="drawerOpen = false">
        <button aria-label="Menu" class="hamburger" @click.stop="drawerOpen = !drawerOpen">
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <header class="header">
            <div class="header__logo" v-html="require('@/assets/images/star_wars_logo.svg')"></div>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__listItem" v-for="route in routes"
                        :class="{ 'nav__listItem--selected': route.path === $route.fullPath }">
                        <router-link :to="{path: route.path}">{{ route.name }}</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    import CONST from '@/utils/Const';

    export default {
        name: 'toolbar',
        data() {
            return {
                routes: [],
                drawerOpen: false,
            };
        },
        methods: {
            getRoutes() {
                this.$http.get('').then((response) => {
                    Object.keys(response.data).sort((a,b) => a > b).forEach((x) => {
                        this.routes.push({
                            name: x,
                            path: `/${response.data[x].replace(CONST.apiUrl, '')}`,
                        });
                    });
                }, (e) => {
                    console.log(e);
                });
            }
        },
        mounted() {
            this.getRoutes();
        }
    };
</script>

<style lang="scss">
    .toolbar {
        position: fixed;
        z-index: 42;
        left: 0;
        right: 0;
        min-height: 32px;
        transition: background-color 0.2s ease-out;
        pointer-events: none;

        &.toolbar--open {
            background-color: rgba(0,0,0,0.2);
            pointer-events: all;

            header.header {
                transform: translateX(0);
            }
        }
    }


    // Header
    header.header {
        display: flex;
        align-items: center;
        pointer-events: all;
        background-color: $color-white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        padding: 10px 20px;
    }

    // Logo
    .header__logo {
        line-height: 0;
        width: 50px;
        margin-right: 25px;

        * {
            fill: $color-dark;
        }
    }

    // Nav
    .nav__list {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .nav__listItem {
        position: relative;
        color: $color-dark;
        margin: 0 18px;
        padding: 6px 0;
        font-size: 14px;
        font-family: "Brandon Grotesque", sans-serif;
        text-transform: uppercase;

        &:hover {
            font-weight: 700;
        }

        &.nav__listItem--selected {
            font-weight: 700;

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 4px;
                background-color: $color-gold;
            }
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }

    // Hamburger
    .hamburger {
        pointer-events: all;
        position: fixed;
        top: 20px;
        left: 20px;
        width: 16px;
        height: 12px;
        display: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        background: transparent;
        border: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;

        div {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
        }

        span {
            background-color: $color-dark;
            width: 100%;
            height: 2px;
        }
    }


    // Responsive
    @media screen and(max-width: 768px) {
        // Hamburger
        .hamburger {
            display: block;
        }

        .toolbar {
            height: 100%;
        }

        // Logo
        .header__logo {
            width: 120px;
            margin: 0 auto 30px;
        }

        // Header
        header.header {
            display: block;
            padding-top: 25px;
            height: 100%;
            width: 200px;
            transition: transform 0.2s ease-out;
            transform: translateX(-108%);
        }

        // Nav
        .nav__list {
            flex-direction: column;
            align-items: flex-start;
        }

        .nav__listItem {
            font-size: 16px;
            margin: 3px;
            padding-bottom: 1px;
        }
    }
</style>
