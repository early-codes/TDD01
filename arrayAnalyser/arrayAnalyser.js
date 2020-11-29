
const arrayMax = (array) => {
    return (Math.max(...array))
}

const arrayMin = (array) => {
    return (Math.min(...array))
}

const arrayLength = (array) => {
    return (array.length)
}

const arrayAverage = (array) => {
    return ((array.reduce((sum, num) => sum + num)) / array.length)
}

export { arrayMax, arrayMin, arrayAverage, arrayLength }