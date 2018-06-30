<template>
    <div class="people">
        <div class="card" ref="card">
            <header class="card__header">
                <h4 class="card__title">{{ people.name }}</h4>
                <p class="card__subtitle">{{ people.birth_year }}</p>
            </header>

            <p class="cardInfo">
                <span class="cardInfo__label">Height:</span>
                <span class="cardInfo__value">{{ people.height }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Mass:</span>
                <span class="cardInfo__value">{{ people.mass }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Skin Color:</span>
                <span class="cardInfo__value">{{ people.skin_color }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Species:</span>
                <transition name="fade" mode="out-in">
                    <span key="value" class="cardInfo__value" v-if="readableSpecies">{{ readableSpecies }}</span>
                    <span key="loader" class="cardInfo__value cardInfo__value--loading" v-else></span>
                </transition>
            </p>

            <p class="cardInfo">
                <span class="cardInfo__label">Homeworld:</span>
                <transition name="fade" mode="out-in">
                    <span key="value" class="cardInfo__value" v-if="homeworldName">{{ homeworldName }}</span>
                    <span key="loader" class="cardInfo__value cardInfo__value--loading" v-else></span>
                </transition>
            </p>
        </div>
        <!--<p>{{ people.birth_year }}</p>
        <p>{{ people.eye_color }}</p>
        <p>{{ people.gender }}</p>
        <p>{{ people.hair_color }}</p>
        <p>{{ people.height }}</p>
        <p>{{ people.homeworld }}</p>
        <p>{{ people.mass }}</p>
        <p>{{ people.skin_color }}</p>
        <p>{{ people.species }}</p>
        <p>{{ people.starships }}</p>
        <p>{{ people.vehicles }}</p>-->
    </div>
</template>

<script>
    import {TimelineMax} from 'gsap';

    export default {
        name: 'people',
        props: {
            people: {
                required: true,
                type: Object,
            },
        },
        data() {
            return {
                species: [],
                homeworld: null,
            };
        },
        computed: {
            readableSpecies() {
                if (this.species.length < this.people.species.length) {
                    return '';
                }

                let str = '';
                this.species.forEach((specie, index) => {
                    str += specie.name;

                    if (index < this.species.length - 1) {
                        str += ', ';
                    }
                });

                return str;
            },
            homeworldName() {
                return this.homeworld ? this.homeworld.name : '';
            },
        },
        methods: {
            getSpecies() {
                this.people.species.forEach((specie) => {
                    this.$http.get(specie).then((response) => {
                        this.species.push(response.data);
                    });
                });
            },
            getHomeworld() {
                this.$http.get(this.people.homeworld).then((response) => {
                    this.homeworld = response.data;
                });
            }
        },
        mounted() {
            const timeline = new TimelineMax();

            this.getSpecies();
            this.getHomeworld();
            timeline.to(this.$refs.card,1.6, {
                transform: '0deg',
                ease: Power4.easeOut,
            });

            timeline.to(this.$refs.card, 0.8, {
                scale: 1.1,
            },'-=1.6');
            timeline.to(this.$refs.card, 0.8, {
                scale: 1.0,
            },'-=1.2');
        }
    };
</script>

<style lang="scss">
    .people {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px;
    }
</style>
