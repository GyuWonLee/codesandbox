const arr = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" }
];

let number = 3;

const idx = arr.findIndex((elm) => {
  return elm.color === "blue";
});

//console.log(idx);
console.log(arr[idx]); // index 접근 배열의 요소 직접 접근
// find를 사용해야하는 게 더 낫다.
