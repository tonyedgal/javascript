const searchIndex = (numbers, target) => {
  let tar
  numbers
    .sort((a, b) => a - b)
    .forEach((num, index) => {
      if (target === num) {
        tar = numbers.indexOf(target)
      } else if (target !== num) {
        let newNumbers = numbers.concat(target)
        newNumbers.sort((a, b) => a - b)
        tar = newNumbers.indexOf(target)
      }
    })
  return tar
}
