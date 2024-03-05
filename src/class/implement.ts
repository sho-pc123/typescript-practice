type HasName2 = {
  name: string;
}

// 部分型の型チェック
class User4 implements HasName2 {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}