let numbers = [0, 1, 3, 2, 10, 30, 20];

// console.log(chars);

const compare = (a, b) => {
  // 1. 같다
  // 2. 크다
  // 3. 작다

  if (a > b) {
    // 크다
    return 1;
  }

  if (a < b) {
    // 작다
    return -1;
  }

  return 0;
};

numbers.sort(compare);
console.log(numbers);
