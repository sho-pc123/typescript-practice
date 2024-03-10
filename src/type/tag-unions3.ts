type Option313<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";
}

function doubleOption(obj: Option313<number>) {
  return mapOption(obj, x => x * 2);
}

function mapOption<T, U>(obj: Option313<T>, callback: (value: T) => U): Option313<U>{
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value)
      };
    case "none":
      return {
        tag: "none"
      }
  }
}

const four313: Option313<number> = {
  tag: "some",
  value: 4
};

const nothing313: Option313<number> = {
  tag: "none"
}