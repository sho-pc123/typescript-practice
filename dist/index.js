"use strict";
const sum = (base, ...args) => {
    let result = base * 100;
    for (const num of args) {
        result += 100;
    }
    return result;
};
console.log(sum(1, 12, 100));
console.log(sum(234));
