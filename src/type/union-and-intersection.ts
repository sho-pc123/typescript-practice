type Human255 = { name: string };
type Animal255 = { species: string }

function getName(human: Human255) {
  return human.name;
}

function getSpecies(animal: Animal255) {
  return animal.species
}

const mysteryFunc = Math.random() < 5 ? getName : getSpecies;

// 型がHuman255とAnimal255どちらの可能性もあるため、Human255 & Animal255型の値を渡さないとエラーになる
// mysteryFunc("satou");

const satou255: Human255 & Animal255 = {
  name: "ssatou",
  species: "human"
}

// こちらは正常に動く
const value = mysteryFunc(satou255);