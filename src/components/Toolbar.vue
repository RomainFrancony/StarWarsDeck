<template>
    <header>
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
                        })
                    });
                }, (e) => {
                    console.log(e);
                })
            }
        },
        mounted() {
            this.getRoutes();
        }
    }
</script>
