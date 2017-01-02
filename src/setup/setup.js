var lib = require('./toImport');

function Setup(message) {
    this._message = message;
    this._age = 1;
}

Setup.prototype.getMessage = function () {
    return this._message;
};

Setup.prototype.changeMessage = function (newMessage) {
    this._message = newMessage;
};

Setup.prototype.addYear = function () {
    this._age = lib.addOne(this._age);
};

Setup.prototype.getAge = function () {
    return this._age;
};

module.exports = Setup;