// xRepeat型が(arg: number) => stringであると自動的に判定されるため、xRepeatに型注釈は不要
const xRepeat = (arg: number): string => "x".repeat(arg);

// 逆方向の型推論により、式の型が先にわかるため、変数への型注釈のみでよい
type G = (arg: number) => string;
const yRepeat: G = (num) => "y".repeat(num)

