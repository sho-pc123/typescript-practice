"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _User2_age;
class User2 {
    constructor(name, age, data) {
        _User2_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User2_age, age, "f");
        this.data = data;
    }
}
_User2_age = new WeakMap();
const sato = new User2("uhyo", 15, "追加データ");
