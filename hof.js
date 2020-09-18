const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// console.log(numbers)
// let each = numbers.forEach((item, index) => {
//   console.log("Item:", item, "Index", index)
// })

// console.log(each)

// console.log('-------------')

const names = ['Steve', 'Misha', 'Shay', 'Janice']

// names.forEach((name) => {
//   console.log(name)
// })

// let anon = (name) => {
//   console.log(name)
// }

// let loop = (item, index) => {
//   console.log("item:",item, "Index:", index)
// }

// names.forEach(loop)

// Map

const newNames = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(`${arr[i]} new name`)
  }
  return result
}
// console.log(newNames(names))


let otherNames = names.map(name => `${name} new name`)

// console.log(otherNames)

let doubleNum = numbers.map((num, index) => {
  // console.log(index)
  return num * 2
}) 

// console.log(doubleNum)

let nameLength = names.map((name) => {
  return name.length
})

// console.log(nameLength)

// Filter

let longFilterName = arr => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 5) {
      result.push(arr[i])
    }
  }
  return result
} 

// console.log(longFilterName(names))

let filterNames = names.filter(name => name.length === 5)

// console.log(filterNames)


let aboveTwo = numbers.filter(num => num > 2)

// console.log(aboveTwo)

// Reduce

const longSum = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

// console.log(longSum(numbers))

// console.log(numbers)
const sum = numbers.reduce((acc, value, index) => {
  // console.log('Acc:', acc, 'Value:', value, 'Index:', index)
  return acc + value
}, 1)

// console.log(sum)


const fruits = ['banana', 'apple', 'kiwi', 'pear', 'banana', 'banana', 'kiwi']

let fruitCount = fruits.reduce((acc, value) => {
  if (value in acc) {
    acc[value]++
  } else {
    acc[value] = 1
  }
  return acc
}, {})

// console.log(fruitCount)

let nestedArr = [[1, 2], [3, 4], [5, 6]]

let newArr = nestedArr.reduce((acc, item) => {
  return acc.concat(item)
}, [])

// console.log(newArr)

const nums = [1, 2, 3, 4, 5]

const combo = nums.map(num => {
  return num * 11
}).filter(num => {
  return  num % 2 === 0
}).reduce((acc, value) => {
   return acc + value
 })

console.log(combo)