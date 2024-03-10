type Animal274 = {
  tag: "animal";
  species: string;
}

type Human274 = {
  tag: "human";
  name: string;
}

type User275 = Animal274 | Human274

function getUserNmae(user: User275) {
  if(user.tag === "human") {
    // Human274型に絞り込まれているためnameプロパティを出力仕様としてもエラー表示されない
    return user.name;
  } else {
    return "名無し"
  }
}

const tama275: User275 = {
  tag: "animal",
  species: "cat"
}

const uhyo: User275 = {
  tag: "human",
  name: "uhyo"
}

// 名無しと表示される
console.log(getUserNmae(tama275));
// uhyoと表示される
console.log(getUserNmae(uhyo));