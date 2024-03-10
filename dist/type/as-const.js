"use strict";
// string[]型
const names1 = ["uhyo", "john", "taro"];
// as constを付与することで以下のように解釈される
// 1. 配列リテラルからタプル型になる
// 2. readonly["uhyo", "john", "taro"]型になる
// 3. wideningされない文字列リテラル型が与えられる(stringのように文字列なら問題ないような型注釈が幅広い状態ではない)
const nemes2 = ["uhyo", "john", "taro"];
// lookup型とtypeofキーワードとas constを組み合わせてName型を作ることも可能
const names3 = ["uhyo", "john", "taro"];
