<template>
    <div>
        <p>{{ people.name }}</p>
        <!--<p>{{ people.birth_year }}</p>
        <p>{{ people.eye_color }}</p>
        <p>{{ people.gender }}</p>
        <p>{{ people.hair_color }}</p>
        <p>{{ people.height }}</p>
        <p>{{ people.homeworld }}</p>
        <p>{{ people.mass }}</p>
        <p>{{ people.skin_color }}</p>
        <p>{{ people.species }}</p>
        <p>{{ people.starships }}</p>
        <p>{{ people.vehicles }}</p>-->
    </div>
</template>

<script>
    export default {
        name: 'people',
        props: {
            people: {
                required: true,
                type: Object,
            },
        },
    };
</script>