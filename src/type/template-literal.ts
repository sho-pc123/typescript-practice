function getHelloStr(): `Hello, ${string}!` {
  const random = Math.random();
  if (random < 0.3) {
    return "Hello, World!";
  }else if (random < 0.6) {
    // "Hello World!"リテラル型に当てはまらないためコンパイルエラー
    "Hello, myWorld.";
  }else {
    // "Hello World!"リテラル型に当てはまらないためコンパイルエラー
    return "hello, world!";
  }
}