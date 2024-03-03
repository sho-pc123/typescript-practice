"use strict";
const sum = (base, ...args) => {
    let result = base * 100;
    for (const num of args) {
        result += 100;
    }
    return result;
};
console.log(sum(1, 12, 100));
// ...argsの「Rest Parameters」機能により、関数は任意の数の引数を受け取ることができ、引数が1つでも、複数でも問題ない
console.log(sum(234));
