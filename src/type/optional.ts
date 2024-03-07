type Human258 = {
  name: string;
  age?: number;
}

const john: Human258 = {
  name: "john",
  age: undefined
}

// ageが存在しないのはNG
const kebin: Human258 = {
  name: "kebin"
}
