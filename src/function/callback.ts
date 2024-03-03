type User = {
  name: string;
  age: number;
}

const users: User[] = [
  {
    name: "satou",
    age: 25
  },
  {
    name: "kawakami",
    age: 30
  }
]

// 名前だけを抽出した配列
const names: string[] = users.map((u: User) => u.name);
// 20歳以上のユーザーだけの配列
const adultUsers = users.filter((user: User) => user.age >= 20);
// すべてのユーザーが20歳以上ならtrue
const allAdult = users.every((user: User) => user.age >= 20);
// 60歳以上のユーザーが1任でもいればtrue
const seniourExist = users.some((user: User) => user.age >= 60);
// 名前がsatouで始まるユーザーを探して返す
const satou = users.find((user: User) => user.name.startsWith("satou"));
