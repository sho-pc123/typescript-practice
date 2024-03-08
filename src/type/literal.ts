

// 文字列のリテラル型
const foo: "foo" = "foo";

// 型推論により、省略することも可能
const piyo = "piyo"

// "bar"という型になるため、文字列でも型エラーになる
type BarDtring = "bar"
const bar: BarDtring = "foo"


// 数値のリテラル型
const one: 1 = 1;
// 真偽値のリテラル型
const t: true = true;
// BigIntのリテラル型
const three: 3n = 3n