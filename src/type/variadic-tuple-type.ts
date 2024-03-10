type NumberAndStrings = [number, ...string[]];

// 下記はOK
const arr1: NumberAndStrings = [25, "uhyo", "hyo"];
// 最初の要素がnumberでそれ以降は任意個のstringのため
const arr2: NumberAndStrings = [25];

// 下記はコンパイルエラー
const arr3: NumberAndStrings = ["uhyo", "hyo"];
const arr4: NumberAndStrings = [25, 26, 27];
const arr5: NumberAndStrings = [];

// ...配列型は、タプル型の中で1度しか使えない
type NumberAndStrings2 = [...number[], number, ...string[]];