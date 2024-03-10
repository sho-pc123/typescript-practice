"use strict";
function doubleOption(obj) {
    return mapOption(obj, x => x * 2);
}
function mapOption(obj, callback) {
    switch (obj.tag) {
        case "some":
            return {
                tag: "some",
                value: callback(obj.value)
            };
        case "none":
            return {
                tag: "none"
            };
    }
}
const four313 = {
    tag: "some",
    value: 4
};
const nothing313 = {
    tag: "none"
};
doubleOption(four313);
doubleOption(nothing313);
