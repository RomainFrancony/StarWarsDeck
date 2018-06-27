<template>
    <section>
        <p v-if="loading">Loading</p>
        <slider v-else :slides="resourceResults">
            <template slot-scope="slide">
                <component :is="$route.params.resource"
                           :people="slide.slide"
                           :planets="slide.slide"
                           :vehicles="slide.slide"
                           :starships="slide.slide"
                />
            </template>
        </slider>
    </section>
</template>

<script>
    import People from '@/components/People';
    import Planets from '@/components/Planets';
    import Vehicles from '@/components/Vehicles';
    import Starships from '@/components/Starships';
    import Slider from '@/components/Slider';

    export default {
        name: 'resource',
        components: {
            Slider,
            People,
            Planets,
            Vehicles,
            Starships,
        },
        data () {
            return {
                loading: true,
                next: '',
                prev: '',
                resourceResults: [],
            }
        },
        methods: {
            getResourceResults() {
                this.$http.get(`${this.$route.params.resource}`).then((response) => {
                    this.resourceResults = response.data.results;
                    this.next = response.data.next || '';
                    this.prev = response.data.previous || '';
                    this.loading = false;
                }, (e) => {
                    console.log(e);
                })
            },
        },
        beforeRouteUpdate (to, from, next) {
            next();
            this.loading = true;
            this.getResourceResults();
        },
        mounted() {
            this.getResourceResults();
        },
    }
</script>
