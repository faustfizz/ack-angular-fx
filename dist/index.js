// Much of the repetition and "ugliness" of this file is from trying to accomediate AoT
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
//import "web-animations-js"
//import { setDocument } from "web-animations-js"
var core_1 = require("@angular/core");
var fade_1 = require("./animations/fade");
var bounce_1 = require("./animations/bounce");
var rotate_1 = require("./animations/rotate");
var slide_1 = require("./animations/slide");
var zoom_1 = require("./animations/zoom");
/*import { setDocument } from "./web-animations.min"

export function browserSupport(){
  return setDocument(document)
}*/
exports.effects = ['fade', 'bounce', 'rotate', 'slide', 'zoom'];
exports.delayArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000];
exports.menu = {
    absoluteSwap: { duration: 500 },
    absoluteSwap100: { duration: 100 }, absoluteSwap200: { duration: 200 },
    absoluteSwap300: { duration: 300 }, absoluteSwap400: { duration: 400 },
    absoluteSwap500: { duration: 500 }, absoluteSwap600: { duration: 600 },
    absoluteSwap700: { duration: 700 }, absoluteSwap800: { duration: 800 },
    absoluteSwap900: { duration: 900 }, absoluteSwap1000: { duration: 1000 },
    absoluteSwap2000: { duration: 2000 }, absoluteSwap2500: { duration: 2500 },
    "100": { duration: 100 }, "200": { duration: 200 }, "300": { duration: 300 },
    "400": { duration: 400 }, "500": { duration: 500 }, "600": { duration: 600 },
    "700": { duration: 700 }, "800": { duration: 800 }, "900": { duration: 900 },
    "1000": { duration: 1000 }, "1500": { duration: 1500 }, "2000": { duration: 2000 }
};
exports.animateDefaults = {
    duration: 500,
    delay: 0,
    easing: 'linear',
    stagger: 0,
    name: 'animate',
    igniter: '*',
    whileStyle: {},
    effects: exports.effects
};
function animateFactory(duration, delay, easing, stagger, name) {
    return animateConfig(name, {
        duration: duration,
        delay: delay,
        easing: easing,
        stagger: stagger,
        name: name
    });
}
exports.animateFactory = animateFactory;
function defaultConfig(config) {
    return __assign({}, exports.animateDefaults, config);
}
exports.defaultConfig = defaultConfig;
function checkStagger(config) {
    return (!config.stagger || console.log('ack-angular-fx does not support stagger as of this release')) && config;
}
exports.checkStagger = checkStagger;
function animateConfig(name, config) {
    return animateFixedConfig(name, defaultConfig(config));
    //return animateFixedConfig( checkStagger( defaultConfig(config) ) )
}
exports.animateConfig = animateConfig;
function animateFixedConfig(name, config) {
    return createTriggerBy(name, config, getConfigTiming(config));
}
exports.animateFixedConfig = animateFixedConfig;
function getConfigTiming(config) {
    return [
        config.duration + 'ms',
        config.delay + 'ms',
        config.easing
    ].join(' ');
}
exports.getConfigTiming = getConfigTiming;
function createTriggerBy(name, config, timing) {
    return core_1.trigger(name, pushEffectsByConfig([], timing, config));
}
exports.createTriggerBy = createTriggerBy;
function pushEffectsByConfig(array, timing, config) {
    return ((config.effects.indexOf('fade') >= 0 && array.push.apply(array, fade_1.fade(timing, config)) && 0) ||
        (config.effects.indexOf('bounce') >= 0 && array.push.apply(array, bounce_1.bounce(timing, config)) && 0) ||
        (config.effects.indexOf('rotate') >= 0 && array.push.apply(array, rotate_1.rotate(timing, config)) && 0) ||
        (config.effects.indexOf('slide') >= 0 && array.push.apply(array, slide_1.slide(timing, config)) && 0) ||
        (config.effects.indexOf('zoom') >= 0 && array.push.apply(array, zoom_1.zoom(timing, config)) && 0)) || array;
}
exports.pushEffectsByConfig = pushEffectsByConfig;
function upgradeComponent(component, animations) {
    var annots = Reflect.getMetadata("annotations", component);
    annots[0].animations = annots[0].animations || [];
    annots[0].animations.push.apply(annots[0].animations, animations || getFxArray());
}
exports.upgradeComponent = upgradeComponent;
function selectFx(args, effectList) {
    var array = [];
    args.forEach(function (v) {
        return array.push(processSelect(v, exports.menu[v], effectList));
    });
    return array;
}
exports.selectFx = selectFx;
exports.absSwap = {
    easing: 'linear', name: 'absoluteSwap', igniter: 'void',
    whileStyle: {
        position: 'absolute', width: '100%', 'overflow': 'hidden'
    }
};
/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/
function getFxArray() {
    return [
        processSelect("absoluteSwap100", exports.menu["absoluteSwap100"]),
        processSelect("absoluteSwap200", exports.menu["absoluteSwap200"]),
        processSelect("absoluteSwap300", exports.menu["absoluteSwap300"]),
        processSelect("absoluteSwap400", exports.menu["absoluteSwap400"]),
        processSelect("absoluteSwap500", exports.menu["absoluteSwap500"]),
        processSelect("absoluteSwap600", exports.menu["absoluteSwap600"]),
        processSelect("absoluteSwap700", exports.menu["absoluteSwap700"]),
        processSelect("absoluteSwap800", exports.menu["absoluteSwap800"]),
        processSelect("absoluteSwap900", exports.menu["absoluteSwap900"]),
        processSelect("absoluteSwap1000", exports.menu["absoluteSwap1000"]),
        processSelect("absoluteSwap1500", exports.menu["absoluteSwap1500"]),
        processSelect("absoluteSwap2000", exports.menu["absoluteSwap2000"]),
        processSelect("100", exports.menu["100"]),
        processSelect("200", exports.menu["200"]),
        processSelect("300", exports.menu["300"]),
        processSelect("400", exports.menu["400"]),
        processSelect("500", exports.menu["500"]),
        processSelect("600", exports.menu["600"]),
        processSelect("700", exports.menu["700"]),
        processSelect("800", exports.menu["800"]),
        processSelect("900", exports.menu["900"]),
        processSelect("1000", exports.menu["1000"]),
        processSelect("1500", exports.menu["1500"]),
        processSelect("2000", exports.menu["2000"])
    ];
}
exports.getFxArray = getFxArray;
exports.absSwapClone = { name: null, duration: null, whileStyle: null };
function processSelect(name, config, effectArray) {
    return animateConfig(name, { duration: config.duration, name: name, effects: effectArray || exports.effects });
}
exports.processSelect = processSelect;
function upgradeComponents(array, animations) {
    for (var x = array.length - 1; x >= 0; --x) {
        upgradeComponent(array[x], animations);
    }
}
exports.upgradeComponents = upgradeComponents;
//# sourceMappingURL=index.js.map