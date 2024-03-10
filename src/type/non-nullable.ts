type Union3 = "hoge" | 1 | null | undefined;
// Wは、"hoge" | 1
type W = NonNullable<Union3>