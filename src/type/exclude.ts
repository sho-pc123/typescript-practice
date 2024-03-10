type Union2 = "hoge" | "hogehoge" | 1 | 2 | 3;
// Tは、1 | 2 | 3
type T = Exclude<Union2, string>;