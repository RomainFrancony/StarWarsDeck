<template>
    <header class="header">
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__listItem" v-for="route in routes">
                    <router-link :to="{path: route.path}">{{ route.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import CONST from '@/utils/Const';

    export default {
        name: 'toolbar',
        data() {
            return {
                routes: [],
            };
        },
        methods: {
            getRoutes() {
                this.$http.get('').then((response) => {
                    Object.keys(response.data).forEach((x) => {
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
    header.header {
        background-color: $color-white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        padding: 10px 20px;
    }

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
        padding: 6px 0 ;
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
</style>
