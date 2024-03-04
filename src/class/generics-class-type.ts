class User2<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }
}

const sato: User2<string> = new User2("uhyo", 15, "追加データ");