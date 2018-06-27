<template>
    <p>{{ starships.name }}</p>
</template>

<script>
    export default {
        name: 'tarships',
        props: {
            starships: {
                required: true,
                type: Object,
            },
        },
    };
</script>
