// 型引数
type User<N> = {
  neme: N;
}

// 型引数を持つ関数（ジェネリック関数）
function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for(let i = 0; i < length; i++){
    result.push(element);
  }
  return result;
}
console.log(repeat<string>("a", 5));
console.log(repeat<number>(123, 2));