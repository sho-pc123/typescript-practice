"use strict";
function getName(human) {
    return human.name;
}
function getSpecies(animal) {
    return animal.species;
}
const mysteryFunc = Math.random() < 5 ? getName : getSpecies;
// 型がHuman255とAnimal255どちらの可能性もあるため、Human255 & Animal255型の値を渡さないとエラーになる
// mysteryFunc("satou");
const satou255 = {
    name: "ssatou",
    species: "human"
};
// こちらは正常に動く
const value = mysteryFunc(satou255);
