<template>
    <div class="starships">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ starships.name }}</h4>
                <p class="card__subtitle">{{ starships.manufacturer }}</p>
            </header>
            <p class="cardInfo">
                <span class="cardInfo__label">Model:</span>
                <span class="cardInfo__value">{{ starships.model }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Length:</span>
                <span class="cardInfo__value">{{ starships.length | humanReadableNumber }} meters</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Starship class:</span>
                <span class="cardInfo__value">{{ starships.starship_class }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Cost:</span>
                <span class="cardInfo__value">{{ starships.cost_in_credits | humanReadableNumber }}
                    <span class="credit" v-html="require('@/assets/images/icons/ic_credit.svg')"></span></span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Cargo capacity:</span>
                <span class="cardInfo__value">{{ starships.cargo_capacity | humanReadableNumber }} kg</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Capacity:</span>
                <span class="cardInfo__value">{{ starships.crew | humanReadableNumber }} -
                    {{ (Number(starships.passengers) + Number(starships.crew)) | humanReadableNumber }} person(s)</span>
            </p>
        </div>
    </div>
</template>

<script>
    import {flipCard} from '@/utils/Animations';

    export default {
        name: 'starships',
        props: {
            starships: {
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
