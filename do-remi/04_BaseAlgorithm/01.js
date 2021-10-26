// 입력 예제를 풍부하게 만들어서 while문으로 입력을 받아보세요.
const input = require('fs').readFileSync('./dev_01').toString().split('\n');

const solution = num => {
  let howManyStar = 0;
  let result = '';
  for (let i = 0; i < num; i++) {
    howManyStar++;
    for (let j = 0; j < num - howManyStar; j++) result += ' ';
    for (let j = num - howManyStar; j < num; j++) result += '*';
    result += '\n';
  }
  return result;
};

input.forEach(elem => console.log(solution(elem)));
