"use strict";
const repeat = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
// HasNameAndAgeは、{ name: string }の部分型のため問題ない
console.log(repeat({
    name: "satou",
    age: 26
}, 3));
// stringという型だと{ name: string; }の部分型ではないためコンパイルエラーになる
console.log(repeat("satou", 3));
