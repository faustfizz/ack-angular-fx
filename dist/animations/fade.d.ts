import { AnimationTransitionMetadata, AnimationTriggerMetadata, AnimationStateMetadata } from '@angular/animations';
import { fxConfig } from "../index";
export declare function triggers(config?: fxConfig): AnimationTriggerMetadata[];
export declare function states(config: fxConfig): (AnimationStateMetadata | AnimationTransitionMetadata)[];
