const arr = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" }
];

let number = 3;

const element = arr.find((elm) => {
  return elm.color === "blue";
});

//console.log(idx);
console.log(element);

// find는 만족하는 요소 자체를 반환
// findindex를 그냥 인덱스를 반환하는 그 차이가 있다.
