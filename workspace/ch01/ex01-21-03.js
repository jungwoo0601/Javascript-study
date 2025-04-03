/*
for문을 이용하여 구구단 작성

출력예시시
3 * 1 = 3
3 * 2 = 6
...
3 * 9 = 27
*/

const dan = 3;

for (let i = 1; i <= 9; i++) {
  console.log(dan + " x " + i + " = " + dan * i);
  console.log(`${dan} x ${i} = ${dan * i}`);
}

/*
2단부터 9단까지 출력

출력 예시:
2 * 1 = 2
2 * 2 = 4
...
2 * 9 = 18

3 x 1 = 3
...
3 x 9 = 27

4 x 1 = 4
...
9 x 9 = 81
*/

for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
  console.log();
}

/*
단끼리 같은줄로 출력
*/

for (let i = 1; i <= 9; i++) {
  let gugu = "";
  for (let dan = 2; dan <= 9; dan++) {
    gugu += `${dan} x ${i} = ${dan * i}`.padEnd(12);
  }
  console.log(gugu);
}
