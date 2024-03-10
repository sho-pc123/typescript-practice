"use strict";
// 返り値が{ tag: "some", value: T }であることを明示できる
function isSome(obj) {
    return obj.tag === "some";
}
function showNumberIfExists(obj) {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}
const four2 = {
    tag: "some",
    value: 4
};
const nothing2 = {
    tag: "none"
};
