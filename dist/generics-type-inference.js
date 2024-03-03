"use strict";
function repeat(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
// resultはstring[]型になる（repeatを使う側で<T> = <string>だと引数から型推論してくれる）
const result = repeat("a", 5);
