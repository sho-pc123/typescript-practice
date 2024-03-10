// 引数によって、帰り値の型が異なる場合はジェネリクスを使う
// T[K]を返り値にする条件としてKがTのキー名であることを明示しないといけないため「keyof T」を記載する
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type Human283 = {
  name: string;
  age: number;
}

const uhyo283: Human283 = {
  name: "uhyo283",
  age: 27
}

// uhyo283はstring型
// 返り値は、uhyo283
const uhyo283Nmae = get(uhyo283, "name");
// uhyo283Ageはnumber型
// 返り値は27
const uhyo283Age = get(uhyo283, "age");