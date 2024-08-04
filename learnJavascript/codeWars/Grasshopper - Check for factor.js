function checkForFactor (base, factor) {
    return Number.isInteger(base / factor); 
  }

  console.log(checkForFactor(10,2))
  console.log(checkForFactor(63,7))
  console.log(checkForFactor(9,2))
  console.log(checkForFactor(653,7))