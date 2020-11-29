import { arrayMax, arrayMin, arrayAverage, arrayLength } from './arrayAnalyser'

const testArray = [1, 11, 111, 1111, 11111, 111111]

test("find max", () => {
    expect(arrayMax(testArray)).toBe(111111)
})

test("find min", () => {
    expect(arrayMin(testArray)).toBe(1)
})

test("find length", () => {
    expect(arrayLength(testArray)).toBe(6)
})

test("find average", () => {
    expect(arrayAverage(testArray)).toBeCloseTo(20576)
})