// string[]型
const names1 = ["uhyo", "john", "taro"];

// as constを付与することで以下のように解釈される
// 1. 配列リテラルからタプル型になる
// 2. readonly["uhyo", "john", "taro"]型になる
// 3. wideningされない文字列リテラル型が与えられる(stringのように文字列なら問題ないような型注釈が幅広い状態ではない)
const nemes2 = ["uhyo", "john", "taro"] as const;

// lookup型とtypeofキーワードとas constを組み合わせてName型を作ることも可能
const names3 = ["uhyo", "john", "taro"] as const;
// type Name = "uhyo" | "john" | "taro"
// typeofキーワードにより「type Name = readonly ["uhyo", "john", "taro"]」になる
// lookup型により「type Name = "uhyo" | "john" | "taro"」になる（配列のキー番号を渡した値で型を作ることができる）
type Name = (typeof names3)[number];