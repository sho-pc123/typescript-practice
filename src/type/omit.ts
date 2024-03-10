// Vは、{ name: string; }
type V = Omit<{
  name: string;
  age: number;
}, "age">