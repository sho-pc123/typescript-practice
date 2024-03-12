// 1. get3を呼び出します
// 2. get3が呼び出されました
// 3. get3を呼び出しました
// 4. num is 3
// p.thenのコールバック関数実行は非同期的に行われるため、同期的（上から下にたどる）実行には割り込めず、同期実行が終わったタイミングで出力される
async function get3(): Promise<number> {
  console.log("get3が呼び出されました");
  return 3;
}

console.log("get3を呼び出します");
const p = get3();
p.then((num) => {
  console.log(`num is ${num}`);
})
console.log("get3を呼び出しました")