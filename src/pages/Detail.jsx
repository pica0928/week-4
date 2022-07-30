import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";
// 새로운 모듈들을 좀 짚고 가볼까요?

// 드디어 새로운 Hook 함수가 나왔네요! react의 상태 관리는 크게 useState와 함께 useEffect를 이용해서 진행합니다.
// useEffect가 뭔지 설명드리자면, 지정한 대상에 변화가 생긴다면 useEffect 안의 내용을 실행시켜줄 것이라는 겁니다.
// 물론 지정한 대상에 변화가 없다면 useEffect는 일어나지 않습니다. 심지어 지정한 대상을 쓰지 않아도 useEffect는 사용가능합니다.
// useEffect는 페이지가 렌더링될 때 최초로 useEffect 안의 내용들을 페이지에 적용합니다.
// 그 다음에는 useEffect에서 지정한 대상에 변화가 생길 때에만 useEffect가 다시 실행됩니다.
// 이건 당장 와닿지 않아요. 아래의 내용에서 이따 다뤄보도록 할게요.

// useDispatch와 useSelector이 있네요. 이젠 다들 아시죠? 창구와 조회.
// react-redux, 그리고 후에 공부하실 redux toolkit에서도 이 모듈은 자주 사용됩니다. 꼭 참고하세요.

// 다음, react-router-dom을 통해서 useNavigate와 useParams을 사용합니다.
// useNavigate는 다른 페이지로 넘겨주기 위해 사용되는 모듈이고요,

// useParams는 주소창의 파라미터를 가져오겠다는 거에요. 자, 아래의 내용을 볼게요.
// 'https://m.blog.naver.com/tmondev/221145172930'라는 주소에서 tmondev는 path입니다.
// 이 내용을 들어가기 위해 진입하는 경로에요. 그리고 그 경로는 일반적으로 동일한 양식을 유지하고 있죠.
// 근데 거기서 이제 다른 내용만 나오게 하려면 어떻게 할까요? 우리는 보통 이런 블로그 글들은 파라미터를
// 다양하게 줘서 글을 분산시키고 있어요. 그 파라미터가 여기선 path의 뒷부분인 '221145172930'입니다.
// parameter는 여러개를 줄 수 있어요. 하지만 여기서는 저정도만 알면 됩니다.

// 마지막으로 getTodoByID는 역시 todos.js에서 가져올 action creator네요. 네. 창구에 가서 요청 또는 뭔가를 할 행동이죠.

//이제 Detail Component를 봅시다. 자, 힘내봅시다!
const Detail = () => {
  const dispatch = useDispatch();
  // 자, 이제 세 번째 보네요. 이번에도 useDispatch를 통해 은행 창구 열어주고요.
  const todo = useSelector((state) => state.todos.todo);
  // 그 다음 useSelector를 통해 state에서 특정한 값을 조회해서 가져오려고 해요. 이번엔 todo라는 친구를 가져오네요.
  const { id } = useParams();
  // useParams()를 통해 파라미터를 가져오겠다는 건데 그걸 id라는 변수에 넣어주겠다는 내용이에요.
  const navigate = useNavigate();
  // 그리고 변수 navigate에 useNavigate() 모듈을 설치해 적용하겠다고 선언했습니다.
  // 여기까지 따라오시는데는 문제가 없으시다고 믿고 있습니다.

  // 이제부터 조금 어려워요. 새로 알게되는 내용이니까.
  // 저는 라이프사이클이니 뭐니 그런 걸 말씀드리지 않습니다. 중요한 내용이긴 하죠.
  // 하지만 함수형 컴포넌트를 익히고 현재 당장 우리가 알아야 할 내용에 그걸 지금 배우는 건 혼란만 주는 거 같아요.
  // 그걸 배제하고 그냥 아래의 useEffect가 어떻게 돌아가는지 하나하나 짚으면서 갈게요.

  useEffect(() => {
    // 저는 useEffect를 사용하기로 했습니다.
    // 그럼 이제 페이지는 최초로 이 페이지를 읽어올 때 useEffect 속 내용을 반드시 한 번은 실행시켜줘요.
    // 여기서 그 내용은 무엇이냐.
    dispatch(getTodoByID(id));
    // dispatch가 나왔네요. 창구에서 Todo 정보를 조회하기 위해서 id값을 payload로 보내서 받아오려고 하네요.
    // 이 내용이 최초에 한번 페이지가 열릴 때 렌더링될 내용이에요.
    // 그리고 아까 말씀드리다시피 지정된 사항의 값이 변경될 때마다 이 내용이 또 진행될 수가 있어요. 
  }, [dispatch, id])
  // 지정된 사항들은 바로 여기에 있는 dispatch와 id입니다.
  // 각 사항에 변화가 발생할 경우, useEffect가 다시 실행됩니다. 그럼 아까전 조회하는 걸 다시 또 하게 되는 거겠죠?
  // useEffect는 이런 식으로 쓰입니다. 와닿지 않죠? 몇 가지 예제를 당분간 드릴테니, 그거를 보시면서 익숙해져봅시다.

  //자, 그럼 새로운 내용도 배웠고 남은건 이제 html 구성을 보는 것 뿐이네요! 조금만 더 힘내봅시다!

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            {/* 여기서 ID 값을 받아와 보여주게 하네요. */}
            <div>ID :{todo.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
            {/* StButton Styled-Components를 여기서도 쓰네요! */}
            {/* borderColor는 아까 보시다시피 아래의 컴포넌트 변수에서 체크하시면 될 거 같아요. */}
            {/* 그리고 onClick를 할 경우 navigate를 실행시켜줍니다. 안에 있는 경로, path로 useNavigate()를 통해 */}
            {/* 보내주게 되는데요, 저기서 저 버튼을 누르면 이제 경로가 '/'이니, 메인화면, 즉 index.html로 돌아가게 됩니다. */}
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
          {/* 그리고 이렇게 todo를 통해 받아온 값을 title과 body에도 적용! */}
        </div>
      </StDialog>
    </StContainer>
  );
};
// 이렇게 Detail page를 또 살펴봤습니다.
// 처음 보는 내용들이 많아서 많이들 이해하는데 힘드셨을거라고 생각합니다.
// 그래도 다 같이 이 문서를 보신 만큼, 이 문서의 내용이 최대한 이해가 갔으면 좋겠다고 생각합니다.
// 말로서 설명을 드렸는데, 이게 열심히 준비하긴 했지만... 부족한 부분이 많을 수 있어요.
// 그건 저나 잘하시는 분들에게 문의를 주셔서 왜 이게 이렇게 되는지를 물어봐주시면 알려드릴테니
// 부담없이 물어봐주세요.
// 안내는 여기까지 하겠습니다. 감사합니다.

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
