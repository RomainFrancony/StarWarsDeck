<template>
    <div class="lazyImage">
        <img class="lazyImage__image"
             :class="{ 'lazyImage__image--loaded': loaded }"
             :src="src"
             :alt="alt"
             onload="onLoad"
        >
    </div>
</template>

<script>
    export default {
        name: 'people',
        props: {
            src: {
                required: true,
                type: String,
            },
            alt: {
                required: false,
                type: String,
            },
        },
        data() {
            return {
                loaded: false,
            };
        },
        methods: {
            onLoad() {
                this.loaded = true;
                this.$emit('LazyImage:OnLoad');
            },
        },
    };
</script>