type Option2<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none"
}

// 返り値が{ tag: "some", value: T }であることを明示できる
function isSome<T>(obj: Option2<T>): obj is { tag: "some", value: T } {
  return obj.tag === "some";
}

function showNumberIfExists(obj: Option2<number>) {
  if(isSome(obj)) {
    console.log(obj.value);
  }
}

const four2: Option2<number> = {
  tag: "some",
  value: 4
};

const nothing2: Option2<number> = {
  tag: "none"
};
