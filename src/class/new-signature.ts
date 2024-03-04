class User3 {
  name: string = "";
  age: number = 0;
}

type MyUserConstructor = new() => User;
type MyUserConstructor2 = {
  new(): User;
}


// UserはMyUserConstructor型を持つ
const MyUser: MyUserConstructor = User3;
// Userクラスのインスタンス化
const u = new MyUser();
