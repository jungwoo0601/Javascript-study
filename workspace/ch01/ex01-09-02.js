/* 
대입 연산자 +=을 활용하여 1부터 10까지의 모든 수의 합계를 출력하시오.

출력결과:
55
*/

var sum = 0;

sum += 1; // sum = sum + 1 = 0 + 1 = 1
sum += 2; // sum = sum + 2 = 1 + 2 = 3
sum += 3; // sum = sum + 3 = 3 + 3 = 6
sum += 4; // sum = sum + 4 = 6 + 4 = 10
sum += 5; // sum = sum + 5 = 10 + 5 = 15
sum += 6; // sum = sum + 6 = 15 + 6 = 21
sum += 7; // sum = sum + 7 = 21 + 7 = 28
sum += 8; // sum = sum + 7 = 21 + 7 = 28
sum += 9; // sum = sum + 7 = 21 + 7 = 28
sum += 10; // sum = sum + 7 = 21 + 7 = 28

console.log(sum);
