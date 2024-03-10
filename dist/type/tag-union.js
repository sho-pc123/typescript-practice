"use strict";
function showNumberIfExists(obj) {
    if (obj.tag === "some") {
        console.log(obj.value);
    }
}
const four = {
    tag: "some",
    value: 4
};
const nothing = {
    tag: "none"
};
// 4が表示
showNumberIfExists(four);
// 何も表示されない
showNumberIfExists(nothing);
