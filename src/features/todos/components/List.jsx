import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../../redux/modules/todos.js";
import { Link } from "react-router-dom";

// useDispatch = 아까 봤죠? 비유를 하자면 은행 창구를 세우겠다는 거에요.
// useSelector = 이건 State의 값을 받아오거나 보내주기 위해 사용하는 기능. 비유하자면 통장 조회하겠다는 거에요.
// deleteTodo와 toggleStatusTodo는 todos.js 파일을 열어보면 알 수 있어요. action creator를 가져오겠다는거에요.
// action creator는 뭐다? 은행에서 진행할 행동이라고 말씀드렸어.
// 마지막으로 Link는 ract-router-dom인데 쉽게 말해 html의 a 태그, 즉 페이지 이동을 관리하는 모듈이에요.
// 이쪽 내용은 여기까지 짚고. 우선 List Component를 봅시다.

const List = () => {
  const dispatch = useDispatch();
  // 이번에도 useDispatch() 함수를 변수 dispatch에 연결해줌으로서 창구를 개방했어요.
  const todos = useSelector((state) => state.todos.todos);
  // useSelector는 아까 말씀드리다시피 통장을 조회하는 거라고 했어요.
  // 자, 우리는 useSelector를 통해 getState, 즉 state의 값을 가져올 거구요, 거기서도 todos.
  // 기억 안나시죠? id, title, body, isDone을 관리하던 배열을 떠올려보세요. 그걸 가져오려고 해요.
  // 그걸 변수 todos에 저장하는 겁니다.
  // 자 여기까지 이해가 됐다면, 이전이라면 return 부분부터 볼텐데, 지금의 여러분은 아래의 내용을 알 수 있어요.
  // 아까의 addTodo를 생각해봅시다.

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  // onDeleteTodo는 dispatch를 통해 deleteTodo라는 행동을 창구에서 진행하려고 해요.
  // 근데 거기서 payload로서 가져갈 값은 id라고 하네요.

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };
  // onToggleStatusTodo도 dispatch를 통해 onToggleStatusTodo라는 행동을 창구에서 진행하려고 해요.
  // 여기서도 payload로서 가져갈 값은 id라고 하네요.
  // 자, 이 내용을 그럼 todos.js에서 보고 옵시다.
  // 여기까지 이해가 됐다면, 여러분들은 Redux, 그리고 React-Redux도 다 충분히 이해하신 겁니다.
  // 나머지는 본인이 제대로 이해를 했는지, Redux 강의 영상을 제공해드릴테니 그걸 보고 이해가 가시는지 확인해보십시오.


  // 그럼 마지막으로 아래의 return을 볼까요?
  // Styled-Components 이야기는 이제 그만할게요. 이게 뭔지 다들 아실거니까.
  // 코드는 아래에 있을테니 어떤 컴포넌트가 어떤 요소이고 css 속성은 뭘 가지고 있는지 확인해주세요.
  // 여기서부터는 중요한 코드 내용들을 다루겠습니다. 
  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {/* todos는 아시다시피 현재 useSelector을 통해 state의 todos, 배열의 정보를 받아오고 있어요.
        우리는 이 값을 통해서 map 함수를 통해 리스트를 나열해보려고 해요.
        근데 map 함수를 쓰면 중요한 점은 리액트에서는 li 요소나 map 등을 이용해 생성된 컴포넌트 또는 태그 등에
        반드시 렌더링에서 문제가 생기지 않게 key 값을 부여해달라고 하고 있습니다.
        key 값을 부여하지 않으면 똑같은 요소라도 전체를 렌더링하기 때문인데요,
        key를 부여하면 key값만 비교해서 추가, 수정, 삭제된 부분들만 수정하기 때문에 렌더링의 부담이 덜해집니다. */}

        {/* 이제부터 한줄씩 풀어가볼게요. */}
        {todos.map((todo) => {
          // todos, 배열을 map을 활용하여 카드를 하나 만들어내려고 해요. 여기서의 todo, 인자는 배열의 각 요소들을 나타냅니다.
          if (!todo.isDone) {
            // 만약 배열 속 todo, 요소니까 어떤 객체겠지요. 객체의 isDone값이 !isDone이니 false일 때군요. ! = 반대를 나타냅니다.
            return (
              // 자 이제 아래의 값들에 각 요소들을 맞춰 넣습니다. 이전 과제의 카드와 같지만 한가지 다른 점부터 짚고 갑시다.
              <StTodoContainer key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  {/* 이전 과제의 카드와 다른 점은 바로 상세보기 내용이 생겼다는 것입니다. */}
                  {/* 이 내용을 통해서 key값을 우리는 설정할 수 있고요, todo.id를 통해서 각 페이지의 연결 주소를 설정했습니다.*/}
                  {/* 그리고 key값, 위의 법칙에 따라 당연히 부여해야겠죠. todo.id를 키값으로 부여했습니다. */}
                  <div>상세보기</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                  {/* todo.title과 todo.body 값을 여기다 넣습니다. 이건 넘어갈게요. */}
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                    {/* StButton들의 함수들을 보세요. 위에서 봤던 함수들이 있죠? 여러분은 이제 이 내용을 이해할 수 있습니다. */}
                    {/* 자, 단 콜백함수로 표현한 것은, 이건 동작을 진행했을 때 바로 실행되는 게 아니라 동작이 받았음을 인지하고 */}
                    {/* 그걸 알고 실행해야하는 거잖아요? 그냥 받았다고 실행되지 않고 어떠한 행위로 인해 그에 따라 동작시키기 위해서 */}
                    {/* 콜백함수를 사용했습니다. 보통 이렇게 쓰는게 문제사항을 줄일 수 있어서 안전해요. (예외는 있긴 합니다) */}
                    {/* borderColor는 Prop입니다. Stbutton의 Component 코드를 확인해보세요. */}
                    {/* 마지막으로 todo.isDone?은  삼항 조건 연산자이며, 조건 ? 참 : 거짓 을 나타냅니다. */}
                    {/* 앞의 조건에 따라 글자를 취소로 나오게 할지, 완료로 나오게 할지를 고민하는거에요. 참고하시길 바라요. */}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
            // 여기에 null이 들어가는 내용은 조건에 해당하는 친구들만 working에 넣으려고 해서에요.
            // 조건에 해당하지 않는, 즉 isDone === true인 친구들은 여기에 넣을 필요가 없겠죠?
            // 그 조건은 아래에서 넣어주게 될거에요.
          }
        })}
      </StListWrapper>
      {/* 여기서부터의 코드는 위와 돌일하되, isDone의 조건만 다를 뿐입니다! */}
      {/* 사실상 위와 똑같아요, 여러분. 쉽게 와닿으셨으면 좋겠네요. 아래는 어떻게 구성되는지 혼자서 직접 살펴봅시다. */}
      {/* 이제 이번 과제의 추가 페이지이자 마지막으로 살펴볼 Detail을 마지막으로 보고 넘어갑시다. */}
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
