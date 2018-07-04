<template>
    <div class="species">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ species.name }}</h4>
                <p class="card__subtitle">{{ species.classification | capitalize }}</p>
            </header>
            <p class="cardInfo">
                <span class="cardInfo__label">Designation:</span>
                <span class="cardInfo__value">{{ species.designation }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Language:</span>
                <span class="cardInfo__value">{{ species.language }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Homeworld:</span>
                <transition name="fade" mode="out-in">
                    <span key="value" class="cardInfo__value" v-if="homeworldName">{{ homeworldName }}</span>
                    <span key="loader" class="cardInfo__value cardInfo__value--loading" v-else></span>
                </transition>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Average height:</span>
                <span class="cardInfo__value">{{ species.average_height | humanReadableNumber }} cm</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Average lifespan:</span>
                <span class="cardInfo__value">{{ species.average_lifespan | humanReadableNumber }} years</span>
            </p>
        </div>
    </div>
</template>

<script>
    import {flipCard} from '@/utils/Animations';

    export default {
        name: 'Species',
        props: {
            species: {
                required: true,
                type: Object,
            },
            flipOnMounted: {
                required: false,
                default: false,
                type: Boolean,
            },
        },
        data() {
            return {
                homeworld: null,
            };
        },
        computed: {
            homeworldName() {
                return this.homeworld ? this.homeworld.name : '';
            },
        },
        methods: {
            getHomeworld() {
                this.$http.get(this.species.homeworld).then((response) => {
                    this.homeworld = response.data;
                });
            },
        },
        mounted() {
            this.getHomeworld();
            if (this.flipOnMounted) {
                flipCard(this.$refs.card, 0);
            }
        },
    };
</script>
