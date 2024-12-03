console.log(new Array(3));
const testArr = new Array(5).fill(1);
testArr[0] = 1;

const result = testArr.map((el, i, arr) => {
  if (i >= 1) {
    console.log(el, 'element');
    console.log(i, 'index');
    return arr[i - 1] + 1;
  }
  return el;
});

console.log(result);
console.log(testArr, 'testarr');
