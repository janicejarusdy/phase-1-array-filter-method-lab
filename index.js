// Code your solution here
const findMatching = (arr, str) => {
    const newString = str.toLowerCase()
    const newArr = arr.map(string => string.toLowerCase())
    return newArr.filter(newString)
}

const fuzzyMatch = (arr, letters) => {
    return arr.filter((name, letters) => {
        letters ===  name.slice(0, letters.length)
    })
}

const matchName = (driver, string) => {
    const {name} = driver
    return driver.filter(
        name === string
    )
        
}