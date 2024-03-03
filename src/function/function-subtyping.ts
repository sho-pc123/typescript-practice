// HasNameAndAgeがHasNameの部分型（HasNameAndAgeをHasNameの代わりに使うことができる）
type HasName = {
  name: string;
}

type HasNameAndAge = {
  name: string;
  age: number;
}

// アロー関数で直接オブジェクトを返す場合、オブジェクトリテラルの前後に括弧（()）を置く必要がある
// アロー関数の本体が開始する{がオブジェクトリテラルの開始として解釈されず、代わりに関数のブロック本体の開始として解釈されるため
const fromAge = (age: number): HasNameAndAge => ({
  name: "satou",
  age
});

// (age: number)型を変数fに代入する（ageプロパティの型を指定していないため、代入できる）
const f: (age: number) => HasName = fromAge;
const obj: HasName = f(100);