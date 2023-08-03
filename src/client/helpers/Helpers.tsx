export function shuffle(arr: any): Array<string> {
  let currentIndex = arr.length
  let temporaryValue
  let randomIndex
  const newArray = arr.slice()

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }

  return newArray
}

export function spliceArray(
  arrayToSplice: any,
  quantitySize: number,
): Array<string> {
  const results = []

  while (arrayToSplice.length) {
    results.push(arrayToSplice.splice(0, quantitySize))
  }

  return results
}
