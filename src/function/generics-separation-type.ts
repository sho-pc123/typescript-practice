type Func = <T>(element: T, length: number) => T[];

const repeate: Func = (element, length) => {
  const result = [];
  for(let i = 0; i < length; i++){
    result.push(element);
  }
  return result;
}