<template>
    <p>{{ vehicles.name}}</p>
</template>

<script>
    export default {
        name: 'Vehicles',
        props: {
            vehicles: {
                people: {
                    required: true,
                    type: Object,
                },
            },
        },
    };
</script>
