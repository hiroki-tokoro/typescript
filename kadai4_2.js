/**
 * 長方形
 */
var Rectangle = /** @class */ (function () {
    /**
     * @param {number} height 横の辺
     * @param {number} width 縦の辺
     */
    function Rectangle(height, width) {
        var _this = this;
        this.height = height;
        this.width = width;
        this.getArea = function () { return _this.height * _this.width; };
    }
    return Rectangle;
}());
/**
 * 円
 */
var Circle = /** @class */ (function () {
    /**
     * @param {number} radius 半径
     */
    function Circle(radius) {
        var _this = this;
        this.radius = radius;
        this.getArea = function () { return Math.pow(_this.radius, 2) * Math.PI; };
    }
    return Circle;
}());
/**
 * 図形を格納するコンテナ
 * @template T 図形の型
 */
var Container = /** @class */ (function () {
    function Container() {
        this.shapes = [];
    }
    /**
     * @param {T} shape 図形
     */
    Container.prototype.push = function (shape) {
        this.shapes.push(shape);
    };
    /**
     * 最後にpushした要素を取得します。
     * @returns {T | undefined} 先頭の要素。空の場合はundefined。
     */
    Container.prototype.pop = function () {
        return this.shapes.pop();
    };
    return Container;
}());
var c1 = new Container();
c1.push(new Rectangle(1, 1));
console.log('Rectangle', c1);
//c1.push(new Circle(1)); // コンパイルエラー
var c2 = new Container();
c2.push(new Circle(1));
console.log('Circle', c2);
