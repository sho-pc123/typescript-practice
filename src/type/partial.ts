// Tは{ name?: string | undefined; age?: number | undefined; }になる
type U = Partial<{
  name: string;
  age: number;
}>