<template>
    <div class="films">
        <div class="card" ref="card">
            <div class="card__border"></div>
            <header class="card__header">
                <h4 class="card__title">{{ films.name }}</h4>
            </header>
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
        },
        mounted() {
            flipCard(this.$refs.card);
        },
    };
</script>
