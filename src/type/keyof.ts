type Human280 = {
  name: string;
  age: number;
}

// オブジェクトのプロパティ名の型を得る機能
type Humankeys = keyof Human280;

let key: Humankeys = "name";
key = "age";

// name or ageのリテラル型になるため、コンパイルエラーになる
key = "hoge";