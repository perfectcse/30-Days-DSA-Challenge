// Approach 2 whhite  poninter / Two Poniter 
function Hero(numbers) {
  let nonZeroIndex = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      numbers[nonZeroIndex] = numbers[i];
      nonZeroIndex++;
    }
  }

  while (nonZeroIndex < numbers.length) {
    numbers[nonZeroIndex] = 0;
    nonZeroIndex++;
  }

  return numbers;
}

console.log(Hero([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]