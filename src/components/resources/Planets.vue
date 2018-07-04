<template>
    <div class="planets">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ planets.name }}</h4>
            </header>
            <p class="cardInfo">
                <span class="cardInfo__label">Diameter:</span>
                <span class="cardInfo__value">{{ planets.diameter | humanReadableNumber }} km</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Orbital period:</span>
                <span class="cardInfo__value">{{ planets.orbital_period | humanReadableNumber }} days</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Gravity:</span>
                <span class="cardInfo__value">{{ planets.gravity }} G</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Climate:</span>
                <span class="cardInfo__value">{{ planets.climate }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Terrain:</span>
                <span class="cardInfo__value">{{ planets.terrain }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Population:</span>
                <span class="cardInfo__value">{{ planets.population | humanReadableNumber }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import {flipCard} from '@/utils/Animations';

    export default {
        name: 'planets',
        props: {
            planets: {
                required: true,
                type: Object,
            },
            flipOnMounted: {
                required: false,
                default: false,
                type: Boolean,
            },
        },
        mounted() {
            if (this.flipOnMounted) {
                flipCard(this.$refs.card, 0);
            }
        },
    };
</script>