export function shuffle(arr: any): Array<string> {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;
  const newArray = arr.slice();

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
};

export function spliteArray(arrayToSplite: any, quantitySize: number): Array<string> {
  const results = [];

  while (arrayToSplite.length) {
    results.push(arrayToSplite.splice(0, quantitySize));
  }

  return results;
}
