/*
Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that repeatedly steps through the list to be sorted,
compares each pair of adjacent items and swaps them if they are in
the wrong order. The pass through the list is repeated until no swaps
are needed, which indicates that the list is sorted. The algorithm,
which is a comparison sort, is named for the way smaller or larger
elements "bubble" to the top of the list. Although the algorithm is
simple, it is too slow and impractical for most problems even when compared
to insertion sort.[2] It can be practical if the input is usually in sorted
order but may occasionally have some out-of-order elements nearly in
position. ( https://en.wikipedia.org/wiki/Bubble_sort )
*/

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
