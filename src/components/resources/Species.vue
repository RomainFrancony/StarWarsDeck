<template>
    <div class="species">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ species.name }}</h4>
            </header>
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
        mounted() {
            if (this.flipOnMounted) {
                flipCard(this.$refs.card, 0);
            }
        },
    };
</script>
