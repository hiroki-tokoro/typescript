/*--------------------------------------------------------*/
var userName = /** @class */ (function () {
    function userName(_name) {
        this.name = _name;
    }
    userName.prototype.getName = function () {
        return this.name;
    };
    return userName;
}());
var user = new userName('John');
user.getName();
console.log(user.name);
/*--------------------------------------------------------*/
