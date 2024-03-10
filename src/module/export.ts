const name318 = "uhyo";
const age = 26;

// asでimportする側で使用する変数名を変更することができる
export { name318 as uhyoName, age };

// 逆にimportする側で変数名を変更することができる
import { uhyoName, age as uhyoAge };
