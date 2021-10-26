// 입력 예제를 풍부하게 만들어서 while문으로 입력을 받아보세요.
const input = require('fs')
  .readFileSync('./dev_03')
  .toString()
  .split(require('os').EOL);

const solution = str => {
  let left = 0;
  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') left++;
    if (str[i] === ')') left > 0 ? left-- : (result = false);
    if (!result) break;
  }
  if (left > 0) result = false;

  return result;
};
input.forEach(elem => console.log(solution(elem)));
