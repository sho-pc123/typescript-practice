export const name = "uhyo";
export const age = 26;
import * as uhyo from "./export";
// importした値をuhyoという変数に格納するため.記法でアクセスすることが可能になる
// "uhyoと表示される"
console.log(uhyo.name);
// "26"と表示される
console.log(uhyo.age);
