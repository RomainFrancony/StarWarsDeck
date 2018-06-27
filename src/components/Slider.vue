<template>
    <div class="slider" v-hammer:pan.horizontal="onPan"
         v-hammer:panstart="() => {this.trackingPan = true}">
        <ul class="slider__list" ref="slides">
            <li class="slider__slide" v-for="slide in slides" ref="slide">
                <slot v-bind:slide="slide">
                    <lazy-image :src="slide"/>
                </slot>
            </li>
        </ul>
    </div>
</template>

<script>
    import {TweenMax} from 'gsap';

    export default {
        name: 'slider',
        props: {
            slides: {
                type: Array,
            },
        },
        data() {
            return {
                trackingPan: true,
                currentIndex: 0,
                currentXTranslated: 0,
            };
        },
        methods: {
            onPan(e) {
                if (!this.trackingPan) {
                    return;
                }

                if (e.evenType === 8) {
                    this.animateBackToCurrent();
                    return;
                }

                const direction = e.deltaX > 0 ? -1 : 1;
                const isAtEndOfSlides = direction === -1 ?
                    this.currentIndex === 0 :
                    this.currentIndex === this.slides.length - 1;
                const slide = this.$refs.slide[this.currentIndex];
                const slideWidth = slide.offsetWidth;
                const isPanValidForSlide = Math.abs(e.velocityX) > 0.5 && Math.abs(e.deltaX) > slideWidth * 0.3;

                if (!e.isFinal) {

                    // Can't pan more than 25% of slide if it doesn't have next/prev slide
                    if (isAtEndOfSlides && Math.abs(e.deltaX) > slideWidth * 0.25) {
                        this.trackingPan = false;
                        this.animateBackToCurrent();
                        return;
                    }

                    // Pan more than 75% of the with, slide to nex/prev
                    if (Math.abs(e.deltaX) > slideWidth * 0.75) {
                        this.trackingPan = false;
                        this.animateToSlide(direction);
                        return;
                    }

                    // Move the slide
                    this.animatePan(e.deltaX);
                    return;
                }


                // Has pan enough
                if (isPanValidForSlide) {
                    if (isAtEndOfSlides) {
                        this.animateBackToCurrent();
                        return;
                    }

                    this.animateToSlide(direction);
                    return;
                }

                // Back to current slide
                this.animateBackToCurrent();
            },
            animateBackToCurrent() {
                TweenMax.to(this.$refs.slides, 0.8, {
                    x: 0,
                    ease: Quint.easeOut,
                });
            },
            animateToSlide(direction) {
                const x = this.$refs.slides.offsetWidth * (this.currentIndex + direction) + this.currentXTranslated;

                TweenMax.to(this.$refs.slides, 0.6, {
                    x: -x,
                    ease: Quint.easeOut,
                    onUpdate: () => {
                        this.currentXTranslated = this.$refs.slides._gsTransform.x;
                    },
                    onComplete: () => {
                        this.currentIndex += direction;
                    },
                });

            },
            animatePan(delta) {
                TweenMax.set(this.$refs.slides, {
                    x: this.currentXTranslated + delta,
                });
            }
        }
    };
</script>

<style lang="scss">
    .slider {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .slider__list {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .slider__slide {
        height: 100%;
        flex-basis: 100%;
        flex-shrink: 0;
        width: 100%;
        background-color: #333333;
    }
</style>