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
const names: string[] = users.map((u: User): string => u.name);
// 20歳以上のユーザーだけの配列
const adultUsers: User[] = users.filter((user: User): boolean => user.age >= 20);
// すべてのユーザーが20歳以上ならtrue
const allAdult: boolean = users.every((user: User):boolean => user.age >= 20);
// 60歳以上のユーザーが1任でもいればtrue
const seniourExist: boolean = users.some((user: User): boolean => user.age >= 60);
// 名前がsatouで始まるユーザーを探して返す
const satou: User | undefined = users.find((user: User): boolean => user.name.startsWith("satou"));
