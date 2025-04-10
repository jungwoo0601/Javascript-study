/*
제목: 합
설명: 1부터 N까지의 합을 구하는 문제. 물론 반복문 없이 풀 수도 있습니다.
제출: https://www.acmicpc.net/submit/8393

문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

예제 입력 1
3

예제 출력 1
6
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const n = data[0][0];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
}
main();

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 한 건의 데이터를 읽어서 반환한다.
 * @returns {string|number} 읽은 데이터(숫자일 경우 number로 형변환)
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim();
  const result = isNaN(fileData) ? fileData : Number(fileData);
  return result;
}
