import {TimelineMax, TweenMax} from 'gsap';

export const flipCard = (el, rotation) => {
    return new Promise(resolve => {
        TweenMax.killTweensOf(el);
        const timeline = new TimelineMax({
            onComplete: () => {
                resolve();
            },
        });
        timeline.to(el,1.6, {
            rotationY: rotation,
            ease: Power4.easeOut,
        });
        timeline.to(el, 0.8, {
            scale: 1.1,
        },'-=1.6');
        timeline.to(el, 0.8, {
            scale: 1.0,
        },'-=1.2');
    })
};
