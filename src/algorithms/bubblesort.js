/* Bubble sort */

var unsortedInts = [ 4, 10, 5, 3, 2, 8, 0, 9, 7, 1, 6 ]

function bubbleSort (array) {
  let ret = [...array]
  let length = ret.length

  for (let i = 0; i < length - 1; i++) {
    let swapCount = 0
    for (let j = 0; j < length; j++) {
      if (ret[ j ] > ret[ j + 1 ]) {
        let tmp = ret[j]
        ret[ j ] = ret[ j + 1 ]
        ret[ j + 1 ] = tmp
        swapCount += 1
      }
    }
    if (swapCount === 0) {
      break
    }
  }

  return ret
}

console.log(unsortedInts)
console.log(bubbleSort(unsortedInts))
