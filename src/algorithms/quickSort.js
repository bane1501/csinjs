var unsortedInts = [ 4, 10, 5, 3, 2, 8, 0, 9, 7, 1, 6 ]

function quickSort (ints) {
  if (ints.length <= 1) {
    return ints
  }

  const pivot = ints[ints.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < ints.length - 1; i++) {
    if (ints[i] < pivot) {
      left.push(ints[i])
    } else {
      right.push(ints[i])
    }
  }
  return [ ...quickSort(left), pivot, ...quickSort(right) ]
}

console.log(quickSort(unsortedInts))
