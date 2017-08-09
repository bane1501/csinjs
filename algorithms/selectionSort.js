var unsortedInts = [ 4, 10, 5, 3, 2, 8, 0, 9, 7, 1, 6 ]

function selectionSort (ints) {
  for (let i = 0; i < ints.length; i++) {
    let min = i
    for (let j = i; j < ints.length; j++) {
      if (ints[j] < ints[min]) {
        min = j
      }
    }
    if (i !== min) {
      let tmp = ints[min]
      ints[min] = ints[i]
      ints[i] = tmp
    }
  }
  return ints
}

console.log(unsortedInts)
console.log(selectionSort(unsortedInts))
