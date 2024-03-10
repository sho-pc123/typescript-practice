// Tは{ readonly name: string; readonly age: number; }になる
type T = Readonly<{
  name: string;
  age: number;
}>;