const repeat = <T extends {
  name: string;
}>(element: T, length: number): T[] => {
  const result: T[] = [];
    for(let i = 0; i < length; i++){
      result.push(element);
    }
    return result;
}

type HasNameAndAge = {
  neme: string;
  age: number;
}

// HasNameAndAgeは、{ name: string }の部分型のため問題ない
console.log(repeat<HasNameAndAge>(
{
  name: "satou",
  age: 26
},3));

// stringという型だと{ name: string; }の部分型ではないためコンパイルエラーになる
console.log(repeat<string>("satou", 3));