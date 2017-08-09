var unsortedInts = [ 4, 10, 5, 3, 2, 8, 0, 9, 7, 1, 6 ]

function insertionSort (ints) {
  for (var i = 1; i < ints.length; i++) {
    console.log(ints)
    var tmp = ints[i]
    for (var j = i - 1; j >= 0; j--) {
      if (tmp < ints[j]) {
        ints[j + 1] = ints[j]
        ints[j] = tmp
      } else {
        break
      }
    }
  }
  return ints
}

console.log(insertionSort(unsortedInts))
