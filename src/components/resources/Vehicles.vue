<template>
    <div class="vehicles">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ vehicles.name }}</h4>
                <p class="card__subtitle">{{ vehicles.manufacturer }}</p>
            </header>
        </div>
    </div>
</template>

<script>
    import {flipCard} from '@/utils/Animations';

    export default {
        name: 'Vehicles',
        props: {
            vehicles: {
                required: true,
                type: Object,
            },
        },
        mounted() {
            flipCard(this.$refs.card);
        },
    };
</script>
