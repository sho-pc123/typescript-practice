"use strict";
function getUserNmae(user) {
    if (user.tag === "human") {
        // Human274型に絞り込まれているためnameプロパティを出力仕様としてもエラー表示されない
        return user.name;
    }
    else {
        return "名無し";
    }
}
const tama275 = {
    tag: "animal",
    species: "cat"
};
const uhyo = {
    tag: "human",
    name: "uhyo"
};
// 名無しと表示される
console.log(getUserNmae(tama275));
// uhyoと表示される
console.log(getUserNmae(uhyo));
