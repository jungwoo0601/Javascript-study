// 인터페이스 다중 상속

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 목록 조회시 사용
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }
})();
