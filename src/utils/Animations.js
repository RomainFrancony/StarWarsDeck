import {TimelineMax} from 'gsap';

export const flipCard = (el) => {
    return new Promise(resolve => {
        const timeline = new TimelineMax({
            onComplete: () => {
                resolve();
            },
        });
        timeline.to(el,1.6, {
            transform: '0deg',
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
