type Fruit = "apple" | "orange";

// FruitNumberは{ apple: number; orange: number }型になる
type FruitNumber = {
  [P in Fruit]: number
}

const numbers: FruitNumber = {
  apple: 3,
  orange: 8
}