// Sは、{ age: number; }
type S = Pick<{
  name: string;
  age: number;
}, "age">;