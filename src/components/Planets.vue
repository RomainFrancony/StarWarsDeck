<template>
    <div>
        <p>{{ planets.name }}</p>
    </div>
</template>

<script>
    export default {
        name: 'planets',
        props: {
            planets: {
                required: true,
                type: Object,
            },
        },
    };
</script>