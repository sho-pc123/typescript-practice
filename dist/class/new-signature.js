"use strict";
class User3 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
// UserはMyUserConstructor型を持つ
const MyUser = User3;
// Userクラスのインスタンス化
const u = new MyUser();
