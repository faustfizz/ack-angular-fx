"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FxTracker = (function () {
    function FxTracker() {
        this.historyChange = new core_1.EventEmitter();
        this.indexChange = new core_1.EventEmitter();
    }
    FxTracker.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.loaded = true;
        }, 0);
    };
    FxTracker.prototype.ngOnChanges = function (changes) {
        if (changes.activatedRoute && changes.activatedRoute.currentValue) {
            this.produceByRoute(changes.activatedRoute.currentValue);
        }
        else if (changes.value) {
            this.produceFxId(changes.value.currentValue);
        }
    };
    FxTracker.prototype.produceByRoute = function (activatedRoute) {
        var path = this.getRoutePath(activatedRoute);
        this.produceFxId(path);
        this.value = path;
    };
    FxTracker.prototype.produceFxId = function (value) {
        this.history = this.history || [];
        if (this.orderArray) {
            this.id = this.produceOrderFxId(value);
        }
        else {
            this.index = this.index == null ? 0 : this.index;
            var histLen = this.history.length;
            var isBack = histLen && this.history[this.index - 1] == value;
            var isForward = histLen && this.history[this.index + 1] == value;
            if (isBack) {
                this.indexChange.emit(--this.index);
                this.id = this.id === 0 ? false : 0;
                return this.id;
            }
            this.id = this.id === 1 ? true : 1;
            if (isForward) {
                this.indexChange.emit(++this.index);
                return this.id;
            }
            this.index = this.history.length;
        }
        this.history.push(value);
        this.indexChange.emit(this.index);
        this.history.splice(25, this.history.length);
        this.historyChange.emit(this.history);
        return this.id;
    };
    FxTracker.prototype.produceOrderFxId = function (value) {
        var oldIndex = 0;
        var newIndex = 0;
        var oldValue = this.history[this.history.length - 1];
        this.orderArray.forEach(function (item, index) {
            if (value === item) {
                newIndex = index;
            }
            if (oldValue === item) {
                oldIndex = index;
            }
        });
        this.index = newIndex;
        if (newIndex > oldIndex) {
            return this.id = this.id === 0 ? false : 0;
        }
        return this.id = this.id === 1 ? true : 1;
    };
    FxTracker.prototype.getRoutePath = function (activatedRoute) {
        var target = activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.routeConfig.path;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FxTracker.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FxTracker.prototype, "activatedRoute", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FxTracker.prototype, "orderArray", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FxTracker.prototype, "history", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FxTracker.prototype, "historyChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FxTracker.prototype, "index", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FxTracker.prototype, "indexChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FxTracker.prototype, "id", void 0);
    FxTracker = __decorate([
        core_1.Directive({
            selector: "fx-tracker",
            exportAs: "FxTracker"
        })
    ], FxTracker);
    return FxTracker;
}());
exports.FxTracker = FxTracker;
