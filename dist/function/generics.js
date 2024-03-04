"use strict";
// 型引数を持つ関数（ジェネリック関数）
function repeat(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat("a", 5));
console.log(repeat(123, 2));
