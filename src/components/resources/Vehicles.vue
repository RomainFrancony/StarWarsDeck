<template>
    <div class="vehicles">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ vehicles.name }}</h4>
                <p class="card__subtitle">{{ vehicles.manufacturer }}</p>
            </header>
            <p class="cardInfo">
                <span class="cardInfo__label">Model:</span>
                <span class="cardInfo__value">{{ vehicles.model }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Length:</span>
                <span class="cardInfo__value">{{ vehicles.length | humanReadableNumber }} meters</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Vehicle class:</span>
                <span class="cardInfo__value">{{ vehicles.vehicle_class }}</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Cost:</span>
                <span class="cardInfo__value">{{ vehicles.cost_in_credits | humanReadableNumber }} credits</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Cargo capacity:</span>
                <span class="cardInfo__value">{{ vehicles.cargo_capacity | humanReadableNumber }} kg</span>
            </p>
            <p class="cardInfo">
                <span class="cardInfo__label">Capacity:</span>
                <span class="cardInfo__value">{{ vehicles.crew | humanReadableNumber }} -
                    {{ (Number(vehicles.passengers) + Number(vehicles.crew)) | humanReadableNumber }} person(s)</span>
            </p>
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
