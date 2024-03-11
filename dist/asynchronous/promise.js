import { readFile } from "fs/promises";
// pはPromise<string>型（基本の型はPromise<T>）
// つまり、非同期処理を行うreadfile関数はPromiseオブジェクトを返す
const p = readFile("foo.txt", "utf-8");
// 返されたPromiseオブジェクトにthenメソッドを使ってコールバック関数を渡す
p.then((data) => {
    console.log(data);
});
