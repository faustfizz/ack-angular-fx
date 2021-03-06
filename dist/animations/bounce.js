"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("@angular/animations");
const helper_1 = require("./helper");
const fxInStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
    animations_1.style({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
    animations_1.style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
];
const fxOutStyles = [
    animations_1.style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
];
const inUpStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
    animations_1.style({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
const outUpStyles = [
    animations_1.style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1 })
];
const inDownStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }),
    animations_1.style({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
const outDownStyles = [
    animations_1.style({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1 })
];
const inLeftStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }),
    animations_1.style({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
const outLeftStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1 })
];
const inRightStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
    animations_1.style({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
const outRightStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1 })
];
const inFxKids = animations_1.trigger('bounceInOutKids', [helper_1.childInOutTransition(fxInStyles, fxOutStyles)]);
const inUpKids = animations_1.trigger('bounceInOutUpKids', helper_1.childInOutTransitions(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
const inDownKids = animations_1.trigger('bounceInOutDownKids', helper_1.childInOutTransitions(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
const inLeftKids = animations_1.trigger('bounceInOutLeftKids', helper_1.childInOutTransitions(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles));
const inRightKids = animations_1.trigger('bounceInOutRightKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    animations_1.trigger('bounceIn', [helper_1.inTransition(fxInStyles)]),
    animations_1.trigger('bounceOut', [helper_1.outTransition(fxOutStyles)]),
    animations_1.trigger('bounceInOut', helper_1.inOutTransitions(fxInStyles, fxOutStyles)),
    animations_1.trigger('bounceInUp', [helper_1.inTransition(inUpStyles)]),
    animations_1.trigger('bounceOutUp', [helper_1.outTransition(outUpStyles)]),
    animations_1.trigger('bounceInOutUp', helper_1.inOutTransitions(inUpStyles, outUpStyles)),
    animations_1.trigger('bounceInDown', [helper_1.inTransition(inDownStyles)]),
    animations_1.trigger('bounceOutDown', [helper_1.outTransition(outDownStyles)]),
    animations_1.trigger('bounceInOutDown', helper_1.inOutTransitions(inDownStyles, outDownStyles)),
    animations_1.trigger('bounceInLeft', [helper_1.inTransition(inLeftStyles)]),
    animations_1.trigger('bounceOutLeft', [helper_1.outTransition(outLeftStyles)]),
    animations_1.trigger('bounceInOutLeft', helper_1.inOutTransitions(inLeftStyles, outLeftStyles)),
    animations_1.trigger('bounceInRight', [helper_1.inTransition(inRightStyles)]),
    animations_1.trigger('bounceOutRight', [helper_1.outTransition(outRightStyles)]),
    animations_1.trigger('bounceInOutRight', helper_1.inOutTransitions(inRightStyles, outRightStyles)),
    inFxKids, inUpKids, inDownKids, inLeftKids, inRightKids
];
function bounce(timing, options) {
    return bounceOptions(helper_1.combo(timing, options));
}
exports.bounce = bounce;
function bounceOptions(options) {
    return [
        animations_1.state('bounceOut', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutDown', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutUp', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(options.options.igniter + ' => bounceIn', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceIn => void, ' + options.options.igniter + ' => bounceOut', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }, options.options),
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInDown => void, ' + options.options.igniter + ' => bounceOutDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInLeft => void, ' + options.options.igniter + ' => bounceOutRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInRight => void, ' + options.options.igniter + ' => bounceOutLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInUp => void, ' + options.options.igniter + ' => bounceOutUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.bounceOptions = bounceOptions;
;
