var ArrayNoah = /** @class */ (function () {
    function ArrayNoah() {
        this.memory = new Map();
    }
    Object.defineProperty(ArrayNoah.prototype, "length", {
        get: function () {
            return this.memory.size;
        },
        enumerable: false,
        configurable: true
    });
    ArrayNoah.prototype.push = function (a) {
        this.memory.set(this.memory.size, a);
    };
    ArrayNoah.prototype.pop = function () {
        var a = this.memory.get(this.memory.size - 1);
        this.memory.delete(this.memory.size - 1);
        return a;
    };
    ArrayNoah.prototype.shift = function () {
        var newMemory = new Map();
        var a = this.memory.get(0);
        this.memory.delete(0);
        for (var _i = 0, _a = this.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            newMemory.set(newMemory.size, value);
        }
        this.memory = newMemory;
        return a;
    };
    ArrayNoah.prototype.unshift = function (a) {
        var b = new ArrayNoah;
        b.memory.set(0, a);
        for (var _i = 0, _a = this.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            b.memory.set(b.memory.size, value);
        }
        this.memory = b.memory;
    };
    ArrayNoah.prototype.indexOf = function (a) {
        for (var _i = 0, _a = this.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value === a) {
                return key;
            }
        }
        return -1;
    };
    ArrayNoah.prototype.includes = function (a) {
        for (var _i = 0, _a = this.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value === a) {
                return true;
            }
        }
        return false;
    };
    ArrayNoah.prototype.concat = function (a) {
        for (var _i = 0, _a = a.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            this.memory.set(this.memory.size, value);
        }
    };
    ArrayNoah.prototype.filter = function (callback) {
        var a = new ArrayNoah();
        for (var _i = 0, _a = this.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (callback(value)) {
                a.memory.set(a.memory.size, value);
            }
        }
        return a;
    };
    ArrayNoah.prototype.find = function (callback) {
        for (var _i = 0, _a = this.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (callback(value)) {
                return value;
            }
        }
        return undefined;
    };
    ArrayNoah.prototype.findIndex = function (callback) {
        for (var _i = 0, _a = this.memory; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (callback(value)) {
                return key;
            }
        }
        return undefined;
    };
    return ArrayNoah;
}());
