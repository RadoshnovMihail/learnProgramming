function findDifference(a, b) {
    return Math.abs(a.reduce((acc, val) => acc * val) - b.reduce((acc, val) => acc * val))
  }

  console.log(findDifference([3, 2, 5], [1, 4, 4]))