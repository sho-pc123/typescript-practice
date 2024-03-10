"use strict";
// 下記はOK
const arr1 = [25, "uhyo", "hyo"];
// 最初の要素がnumberでそれ以降は任意個のstringのため
const arr2 = [25];
// 下記はコンパイルエラー
const arr3 = ["uhyo", "hyo"];
const arr4 = [25, 26, 27];
const arr5 = [];
