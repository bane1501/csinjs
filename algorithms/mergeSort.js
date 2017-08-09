var unsortedInts = [ 4, 10, 5, 3, 2, 8, 0, 9, 7, 1, 6 ]

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  }

  var middle = parseInt(arr.length / 2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle, arr.length)

  return merge(mergeSort(left), mergeSort(right))

  function merge (left, right) {
    var result = []
    var l, r
    for (l = 0, r = 0; l < left.length && r < right.length;) {
      if (left[l] < right[r]) {
        result.push(left[l++])
      } else {
        result.push(right[r++])
      }
    }

    while (l < left.length) {
      result.push(left[l++])
    }

    while (r < right.length) {
      result.push(right[r++])
    }

    return result
  }
}

console.log(mergeSort(unsortedInts))
