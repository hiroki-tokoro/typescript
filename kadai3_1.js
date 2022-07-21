var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** 走る */
function Runnable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.run = function () {
            console.log('Running!');
        };
        return class_1;
    }(Base));
}
/** 鳴く */
function Cryable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.cry = function () {
            console.log('Cring!');
        };
        return class_2;
    }(Base));
}
/** 飛ぶ */
function Flyable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_3, _super);
        function class_3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_3.prototype.fly = function () {
            console.log('Flying!');
        };
        return class_3;
    }(Base));
}
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var runnableAnimal = Runnable(Animal);
var cryableAnimal = Cryable(Animal);
var flyableAnimal = Flyable(Animal);
var runnableCryableAnimal = Runnable(Cryable(Animal));
var runnableFlyableAnimal = Runnable(Flyable(Animal));
var cryableFlyableAnimal = Cryable(Flyable(Animal));
var dog = new runnableCryableAnimal();
console.log('-----dog-----');
dog.run();
dog.cry();
var bird = new cryableFlyableAnimal();
console.log('-----bird-----');
bird.cry();
bird.fly();
