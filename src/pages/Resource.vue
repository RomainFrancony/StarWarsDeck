<template>
    <section class="resource">
        <div class="card" v-if="loading"></div>
        <slider v-else :slides="resourceResults" @Slider:Slide="onSlide">
            <template slot-scope="slide">
                <component :is="$route.params.resource"
                           :people="slide.slide"
                           :planets="slide.slide"
                           :vehicles="slide.slide"
                           :starships="slide.slide"
                           :species="slide.slide"
                           :films="slide.slide"
                           :flipOnMounted="resourceResults.findIndex(x => x === slide.slide) === 0"
                />
            </template>
        </slider>
    </section>
</template>

<script>
    import {flipCard} from '@/utils/Animations';
    import People from '@/components/resources/People';
    import Planets from '@/components/resources/Planets';
    import Vehicles from '@/components/resources/Vehicles';
    import Starships from '@/components/resources/Starships';
    import Films from '@/components/resources/Films';
    import Species from '@/components/resources/Species';
    import Slider from '@/components/Slider';

    export default {
        name: 'resource',
        components: {
            Slider,
            People,
            Planets,
            Vehicles,
            Starships,
            Species,
            Films,
        },
        data() {
            return {
                loading: true,
                next: '',
                prev: '',
                resourceResults: [],
            };
        },
        methods: {
            getResourceResults() {
                this.$http.get(`${this.$route.params.resource}`).then((response) => {
                    this.resourceResults = response.data.results;

                    // Sort films
                    if (this.$route.params.resource === 'films') {
                        this.resourceResults.sort((a, b) => a.episode_id > b.episode_id);
                    }
                    this.next = response.data.next || '';
                    this.prev = response.data.previous || '';
                    this.loading = false;
                }, (e) => {
                    console.log(e);
                });
            },
            onSlide(slides, delta, oldSlide, newSlide) {
                flipCard(newSlide.querySelector('.card'), 0);
                flipCard(oldSlide.querySelector('.card'), 180);
            },
        },
        beforeRouteUpdate(to, from, next) {
            next();
            this.loading = true;
            this.getResourceResults();
        },
        mounted() {
            this.getResourceResults();
        },
    };
</script>

<style lang="scss">
    .resource {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        transition: all 0.3s ease-out;
        width: 100%;
    }

    .people, .planets, .starships, .vehicles, .species, .films {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
