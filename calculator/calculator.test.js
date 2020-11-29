import { add, subtract, multiply, divide } from './calculator'

test("to be added", () => {
    expect(add(4, 5)).toBe(9)
})

test("to be subtracted", () => {
    expect(subtract(9, 4)).toBe(5)
})

test("to be multiplied", () => {
    expect(multiply(4, 5)).toBe(20)
})

test("to be divided", () => {
    expect(divide(20, 4)).toBeCloseTo(5)
})