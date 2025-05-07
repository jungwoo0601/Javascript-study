// 에러 핸들링 - Error 객체

(() => {
  function f1() {
    const err = new Error("에러 발생");
    console.log(err.name); // Error
    console.log(err.message); // 에러 발생
    console.log(err.stack); // 콜 스택 정보 출력
  }

  function f2() {
    f1();
  }

  f2();
})();
