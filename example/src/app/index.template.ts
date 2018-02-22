export const string = "<h2>All Supported Animations</h2><div style=\"text-align:center;padding:1em;font-size:0.75em;line-height:0;\"><a (click)=\"onToggleInAll()\" style=\"cursor:pointer;\">toggle all</a></div><div class=\"wrap\" [@childStag]=\"fxCount\"><div class=\"demo-wrap\" (click)=\"allFx.fadeIn = !allFx.fadeIn\"><div class=\"demo-item\" *ngIf=\"allFx.fadeIn && fxCount\" [@fadeIn]=\"{value:allFx.fadeIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#d91b39'}\" style=\"text-align:center;\">fadeIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInDown = !allFx.fadeInDown\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInDown && fxCount\" [@fadeInDown]=\"{value:allFx.fadeInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#2fb60c'}\" style=\"text-align:center;\">fadeInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInLeft = !allFx.fadeInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInLeft && fxCount\" [@fadeInLeft]=\"{value:allFx.fadeInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#7dae47'}\" style=\"text-align:center;\">fadeInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInRight = !allFx.fadeInRight\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInRight && fxCount\" [@fadeInRight]=\"{value:allFx.fadeInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#fb84a3'}\" style=\"text-align:center;\">fadeInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInUp = !allFx.fadeInUp\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInUp && fxCount\" [@fadeInUp]=\"{value:allFx.fadeInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f31fe4'}\" style=\"text-align:center;\">fadeInUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceIn = !allFx.bounceIn\"><div class=\"demo-item\" *ngIf=\"allFx.bounceIn && fxCount\" [@bounceIn]=\"{value:allFx.bounceIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#601078'}\" style=\"text-align:center;\">bounceIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInDown = !allFx.bounceInDown\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInDown && fxCount\" [@bounceInDown]=\"{value:allFx.bounceInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#7aa641'}\" style=\"text-align:center;\">bounceInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInLeft = !allFx.bounceInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInLeft && fxCount\" [@bounceInLeft]=\"{value:allFx.bounceInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#71ac2c'}\" style=\"text-align:center;\">bounceInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInRight = !allFx.bounceInRight\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInRight && fxCount\" [@bounceInRight]=\"{value:allFx.bounceInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#396eea'}\" style=\"text-align:center;\">bounceInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInUp = !allFx.bounceInUp\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInUp && fxCount\" [@bounceInUp]=\"{value:allFx.bounceInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f81607'}\" style=\"text-align:center;\">bounceInUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateIn = !allFx.rotateIn\"><div class=\"demo-item\" *ngIf=\"allFx.rotateIn && fxCount\" [@rotateIn]=\"{value:allFx.rotateIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#4c8fe8'}\" style=\"text-align:center;\">rotateIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInDownLeft = !allFx.rotateInDownLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInDownLeft && fxCount\" [@rotateInDownLeft]=\"{value:allFx.rotateInDownLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#617a5d'}\" style=\"text-align:center;\">rotateInDownLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInDownRight = !allFx.rotateInDownRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInDownRight && fxCount\" [@rotateInDownRight]=\"{value:allFx.rotateInDownRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#b96c0a'}\" style=\"text-align:center;\">rotateInDownRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInUpLeft = !allFx.rotateInUpLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInUpLeft && fxCount\" [@rotateInUpLeft]=\"{value:allFx.rotateInUpLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#675589'}\" style=\"text-align:center;\">rotateInUpLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInUpRight = !allFx.rotateInUpRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInUpRight && fxCount\" [@rotateInUpRight]=\"{value:allFx.rotateInUpRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#8e6f5b'}\" style=\"text-align:center;\">rotateInUpRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInUp = !allFx.slideInUp\"><div class=\"demo-item\" *ngIf=\"allFx.slideInUp && fxCount\" [@slideInUp]=\"{value:allFx.slideInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#6bf681'}\" style=\"text-align:center;\">slideInUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInDown = !allFx.slideInDown\"><div class=\"demo-item\" *ngIf=\"allFx.slideInDown && fxCount\" [@slideInDown]=\"{value:allFx.slideInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#bcef93'}\" style=\"text-align:center;\">slideInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInLeft = !allFx.slideInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.slideInLeft && fxCount\" [@slideInLeft]=\"{value:allFx.slideInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#d28f3a'}\" style=\"text-align:center;\">slideInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInRight = !allFx.slideInRight\"><div class=\"demo-item\" *ngIf=\"allFx.slideInRight && fxCount\" [@slideInRight]=\"{value:allFx.slideInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#7f7cd4'}\" style=\"text-align:center;\">slideInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomIn = !allFx.zoomIn\"><div class=\"demo-item\" *ngIf=\"allFx.zoomIn && fxCount\" [@zoomIn]=\"{value:allFx.zoomIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#75daf0'}\" style=\"text-align:center;\">zoomIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInDown = !allFx.zoomInDown\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInDown && fxCount\" [@zoomInDown]=\"{value:allFx.zoomInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#873d4c'}\" style=\"text-align:center;\">zoomInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInLeft = !allFx.zoomInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInLeft && fxCount\" [@zoomInLeft]=\"{value:allFx.zoomInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#838ef4'}\" style=\"text-align:center;\">zoomInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInRight = !allFx.zoomInRight\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInRight && fxCount\" [@zoomInRight]=\"{value:allFx.zoomInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#24d691'}\" style=\"text-align:center;\">zoomInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInUp = !allFx.zoomInUp\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInUp && fxCount\" [@zoomInUp]=\"{value:allFx.zoomInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f09853'}\" style=\"text-align:center;\">zoomInUp</div></div></div><div style=\"background-color:#CCC;padding:.5em;text-align:center;\">Change above fx speed:&nbsp;<input [(ngModel)]=\"fxTime\"/></div>"