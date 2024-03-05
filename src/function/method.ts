const obj2 = {
  // メソッド記法
  double(num: number): number {
    return num * 2;
  },

  // 通常の記法 + アロー関数
  double2: (num: number): number => {
    return num * 2;
  }
}

