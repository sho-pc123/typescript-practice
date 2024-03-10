type Union = "uhyo" | "hyo" | 1 | 2 | 3;

// Tは、"uhyo" | "hyo"
type T = Extract<Union, "string">