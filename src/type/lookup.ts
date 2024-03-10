type Human279 = {
  type: "human";
  name: string;
  age: number;
}

// 第二引数がlookup型
function setAge(human: Human279, age: Human279["age"]) {
  return {
    ...human,
    age
  };
}

const uhyo279: Human279 = {
  type: "human",
  name: "uhyo",
  age: 26
};

const uhyo2 = setAge(uhyo279, 27);

// { "type": "human", "name": "uhyo", "age": 27 } と表示される
console.log(uhyo2);