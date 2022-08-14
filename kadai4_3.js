/**
 * 単純なファクトリー
 */
var Factory = /** @class */ (function () {
    /**
     * @param {string} name 生成時に設定する名称
     */
    function Factory(name) {
        this.name = name;
    }
    /**
     * 引数に渡された型のインスタンスを生成します。
     *
     * @template 生成する型
     * @param type
     * @returns 型パラメータのインスタンス
     */
    Factory.prototype.getInstance = function (type) {
        return new type(this.name);
    };
    return Factory;
}());
var factory = new Factory('test');
console.log(factory.getInstance(TypeA).name);
