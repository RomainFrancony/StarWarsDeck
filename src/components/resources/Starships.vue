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
                <span class="cardInfo__value">{{ starships.length }} meters</span>
            </p>

            <p class="cardInfo">
                <span class="cardInfo__label">Cost:</span>
                <span class="cardInfo__value">{{ starships.cost_in_credits }} credits</span>
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
        },
        mounted() {
            flipCard(this.$refs.card);
        },
    };
</script>
