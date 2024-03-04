function map(array: number[], callback: (value: number) => number): number[] {
  const result: number[] = []
  for(const element of array) {
    result.push(callback(element));
  }
  return result;
}

// ジェネリクスを使用する場合
// 呼び出しごとに変化する型でジェネリクスの型を決定する
function map2<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = []
  for(const element of array) {
    result.push(callback(element));
  }
  return result;
}