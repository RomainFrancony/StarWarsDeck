<template>
    <div class="films">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ films.title }}</h4>
                <p class="card__subtitle">{{ films.release_date.replace(/-/g, '/') }}</p>
            </header>
            <p class="cardInfo">
                <span class="cardInfo__label">Director:</span>
                <span class="cardInfo__value">{{ films.director  }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Producer:</span>
                <span class="cardInfo__value">{{ films.producer  }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import {flipCard} from '@/utils/Animations';

    export default {
        name: 'Films',
        props: {
            films: {
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
