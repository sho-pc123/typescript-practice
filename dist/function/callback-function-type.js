"use strict";
function map(array, callback) {
    const result = [];
    for (const element of array) {
        result.push(callback(element));
    }
    return result;
}
// ジェネリクスを使用する場合
// 呼び出しごとに変化する型でジェネリクスの型を決定する
function map2(array, callback) {
    const result = [];
    for (const element of array) {
        result.push(callback(element));
    }
    return result;
}
