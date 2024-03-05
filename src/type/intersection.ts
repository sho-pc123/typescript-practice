type Animal = {
  species: string;
  age: number;
}

type Human = Animal & {
  name: string;
}

// プリミティブな値にstringかつnumberである型は存在しないため「never」になる
type StrigAndNumber = string & number;

// string型のプロパティnameを持つオブジェクトでもある
const tama: Animal = {
  species: "dog",
  age: 5
}

const yamada: Human = {
  species: "human",
  age: 25,
  name: "yamada"
}