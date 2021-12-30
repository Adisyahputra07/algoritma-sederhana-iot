let x = [3, 4, 1, 6, 2, 8];
let y = [2, 7, 6, 4, 1, 1];

let xy = x.concat(y);

const result = xy.filter((item, idx) => {
  return xy.indexOf(item) == idx;
});

let resultFinal = result.sort().toString();

console.log(resultFinal);
