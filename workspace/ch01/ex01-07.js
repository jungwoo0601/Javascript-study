/*
기본 데이터 타입 - BigInt
*/

var maxNum = Number.MAX_VALUE; //number로 표현 가능한 최대수
var maxSafeNum = Number.MAX_SAFE_INTEGER; //안전한 정수의 최대값

console.log(maxNum, maxSafeNum);
console.log(
  maxSafeNum - 1,
  maxSafeNum,
  maxSafeNum + 1,
  maxSafeNum + 2,
  maxSafeNum + 3
);

//BigInt는 숫자 뒤에 n을 붙여서 사용한다.
//BigInt는 정수만 표현할 수 있다.
var b1 = 12345n;

console.log(
  maxSafeNum - 1,
  maxSafeNum,
  maxSafeNum + 1,
  maxSafeNum + 2,
  maxSafeNum + 3
);
