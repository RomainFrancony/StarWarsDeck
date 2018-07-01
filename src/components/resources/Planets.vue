<template>
    <div class="planets">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ planets.name }}</h4>
                <p class="card__subtitle">{{ planets.terrain }}</p>
            </header>

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
        },
        mounted() {
            flipCard(this.$refs.card);
        },
    };
</script>