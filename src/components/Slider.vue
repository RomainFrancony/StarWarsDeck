<template>
    <div class="slider">
        <ul class="slider__list"
            v-hammer:pan.horizontal="onPan"
            v-hammer:panstart="() => { trackingPan = true }"
            ref="slides">
            <li class="slider__slide" v-for="(slide, index) of slides" :key="index" ref="slide">
                <slot :slide="slide">
                    <lazy-image :src="slide"></lazy-image>
                </slot>
            </li>
        </ul>
    </div>
</template>

<script>
    import {TweenMax, TimelineMax} from 'gsap';
    import LazyImage from './LazyImage';


    export default {
        name: 'slider',
        components: {
            LazyImage
        },
        props: {
            slides: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                currentXTranslated: 0,
                selectedIndex: 0,
                trackingPan: true,
            };
        },
        computed: {
            currentSlide() {
                return this.$refs.slide[this.selectedIndex];
            }
        },
        methods: {
            /*
             * Getters
             */
            getSlidesElements() {
                return this.$refs.slide;
            },
            getSlidesContainerElement() {
                return this.$refs.slides;
            },
            getCurrentSlideIndex() {
              return this.selectedIndex;
            },

            /*
             * Interaction
             */
            onPan(e) {
                if (!this.trackingPan) {
                    return;
                }

                if (e.eventType === 8) {
                    this.animateBackToCurrent();
                    return;
                }

                const direction = e.deltaX < 0 ? 1 : -1;
                const isAtEndOfSlide = this.selectedIndex + direction < 0 || this.selectedIndex + direction > this.slides.length - 1;
                const currentSlideWidth = this.$refs.slide[this.selectedIndex].offsetWidth;

                // Movement
                if (!e.isFinal) {

                    // Panning too much on slide at ends -> slide back to current
                    if (isAtEndOfSlide && Math.abs(e.deltaX) > currentSlideWidth / 2) {
                        this.trackingPan = false;
                        this.animateBackToCurrent();
                        return;
                    }


                    // Panning too much on inner slides -> slide to next/prev
                    if (Math.abs(e.deltaX) > currentSlideWidth * 0.75) {
                        this.trackingPan = false;
                        this.animateSlide(direction);
                        return;
                    }

                    this.animatePan(e.deltaX - this.currentXTranslated);
                    return;
                }


                // Final event check if use has panned enough or a big velocity
                if (Math.abs(e.overallVelocityX) >= 0.45 || Math.abs(e.deltaX) > currentSlideWidth / 2) {
                    // End of slides
                    if (isAtEndOfSlide) {
                        this.animateBackToCurrent();
                        return;
                    }

                    this.animateSlide(direction);
                    return;
                }


                this.animateBackToCurrent();
            },


            /**
             * Animation
             */
            animatePan(delta) {
                this.$emit('Slider:Pan', this.$refs.slides, delta, this.currentSlide);

                // Default animation
                TweenMax.set(this.$refs.slides, {
                    x: delta,
                });
            },
            animateBackToCurrent() {
                this.$emit('Slider:BackToCurrent', this.$refs.slides, this.currentXTranslated, this.currentSlide);

                // Default animation
                TweenMax.to(this.$refs.slides, 0.7, {
                    x: -this.currentXTranslated,
                    ease: Power3.easeOut,
                });
            },
            animateSlide(direction) {
                this.currentXTranslated += this.$refs.slide[this.selectedIndex].offsetWidth * direction;
                const oldSlide = this.currentSlide;
                this.selectedIndex += direction;
                const newSlide = this.currentSlide;

                this.$emit('Slider:Slide', this.$refs.slides, this.currentXTranslated, oldSlide, newSlide);

                // Default animation
                TweenMax.to(this.$refs.slides, 0.4, {
                    x: -this.currentXTranslated,
                    ease: Power3.easeOut,
                });
            }
        }
    };
</script>

<style lang="scss">
    .slider {
        overflow: hidden;
        width: 100%;
        height: 100%;
        will-change: opacity;
    }

    .slider__list {
        display: flex;
        width: 100%;
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .slider__slide {
        max-width: 100%;
        width: 100%;
        flex-basis: 100%;
        height: 100%;
        flex-shrink: 0;
    }
</style>