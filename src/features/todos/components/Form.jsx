import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../../../redux/modules/todos.js";
// 여기서 사용할 것들은 다 가져오겠다.. 라는 내용들인데, 우리가 알아야 될 것들을 몇 개 집어봅시다.
// useDispatch는 reducer로 데이터를 전달해주기 위한 모듈입니다. 은행으로 따지면 '창구'인거죠.
// 그리고 react-in-generator는 처음보네요. 아마 id를 생성해주기 위한 패키지인 거 같아요.
// addTodo가 궁금하시다면 todos.js를 봐주세요. addTodo 내용이 뭔지 소개했습니다.

const Form = () => {
  const id = nextId();
  // react-id-generator의 모듈을 이용해 우리는 새로운 id를 발급해주려고 합니다.

  const dispatch = useDispatch();
  // 그리고 dispatch라는 변수를 이용해 useDispatch 모듈을 사용할 수 있도록 설정했어요.

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  // 이건 이제 익숙하실까요?
  // 복습할겸 짚고 갑시다. useState는 'reduce'와 비슷합니다. 하지만 이래도 아직 감을 못 잡으신 분들을 위해서.
  // useState는 현재의 값에 갱신 요청이 들어오면, 갱신된 값으로 변경시켜주는 React의 특별한 함수에요. 우리는 이걸 react Hook이라고 부릅니다.
  // useState는 다음과 같이 정의합니다. [현재값, 갱신 함수] = useState(초기값)
  // useState를 사용할 때 내가 최초로 받아오고 싶은 값이 있다면 초기값을 설정해주세요.
  // 그러면 현재값의 최초는 초기값이 됩니다. 이후 갱신 함수를 통해서 값을 변경해주면 그값이 이제 현재값에 덮어쓰기되는 구조에요.
  // 여기까지 이해가 갔다면, 좀 더 아래를 내려가봅시다.


  // [★★] 이 구간은 아래에 [★]이 표시된 구간을 먼저 읽고 와주시길 바랍니다.
  // 자, 우선 onChangeHandler부터 살펴봅시다.
  // 여기서 우리는 인자를 event로 받아왔는데, 여기서 말하는 event란 이 onChangeHandler를 일으킨 주체를 가리켜요.
  // 만약 지금 입력하는 값이 title이다 하면 title을 받아오는 input, body다 하면 body를 받아오는 input을 받아옵니다.
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // 그럼 이제 이건 뭘까요? 하는데 구조 할당 구문이에요. 죄송하지만 저도 이 부분은 약해서 잘 이해는 못하고 있어요.
    // 그치만 그래도 저기서 말하는게 어떤 의미인지는 이해가 가도록 해드리겠습니다.
    // 우리는 이 이벤트를 일으킨 주체를 명확하게 하고 싶습니다. 그래서 목적, 목표인 target을 붙여 어떤 녀석인지를
    // 확실하게 고정시키려고 해요.

    // 근데 이 타겟이 된 input에는 수많은 속성값들이 있어요, 그쵸?
    // 거기서 우리는 input의 name 속성의 값과 value 속성의 값을 가져오려고 합니다.
    // 즉, 'event.target.name'과 'event.target.value' 정보를 받아오려는 거에요.
    // 이 내용까지 짚어갔다면 아래를 내려갑시다. 
    setTodo({ ...todo, [name]: value });
    // 그래서 setTodo 함수를 만나게 됐네요. 근데 setTodo의 이 내용 되게 익숙하지 않나요?
    // 아까 비슷한 예제를 살펴봤죠? 잠시 되짚어볼까요?

    // bucket = {id: 3, name:"coffee", taste:"쓴맛"}
    // setbucket({...bucket, name:"milk tea", taste:"담백한 맛"})
    // setbucket 내용을 봅시다. {...bucket, name:"milk tea", taste:"담백한 맛"} 잘 보면 안에 전개구문이 있죠? 그러면 풀어봅시다.
    // {id: 3, name:"coffee", taste:"쓴맛", name:"milk tea", taste:"담백한 맛"}이 되겠죠?
    // 자, 근데 name과 taste가 똑같은 게 있어요, 이 경우 어떻게 될까요?
    // 순서상 뒤에 있는게 나중에 들어온 거니 앞에 같은 key가 있다면 그 내용을 덮어씌우게 됩니다. 그럼 아래를 볼까요?
    // {id:3, name:"milk tea", taste:"쓴맛", taste:"담백한 맛"}
    // {id:3, name:"milk tea", taste:"담백한 맛"}이 됩니다.
    // 이처럼 전개구문 안에서 같은 key가 있다면 해당 key의 내용은 덮어 씌워진다고 생각해주세요. OK?
    
    // 이 내용이 지금 위에서 적용되고 있는 거에요.
    // 그리고 그렇게 만들어진 값이 이제 Todo로 보내져 현재 값으로 변경되는 겁니다. 이해가 되셨나요?
    // 저번주에 여기서 많이 헤메신 분들이 많으셨어요. 이쪽에 관한 질문은 이해가 안되시면 곤란합니다.
    // 나중에라도 편하게 질문해주세요.
  };


  // [★★★] 여기는 [★★] 구간까지 보시고 읽어주셔야 합니다.
  // 자 여기까지 오시느라 고생하셨습니다. 여러분들은 이제 이 페이지의 코드 읽기의 마지막에 오셨습니다.
  // 여기까지 오셨다면 다른 걸 이해하는 게 쉬울 겁니다.
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // react 반드시 form에서 일어나는 이벤트는 기초 동작인 새로고침이 일어나게 됩니다.
    // react 공식문서에서는 이럴 경우를 대비해 위의 함수를 반드시 사용하라고 합니다. 꼭, 써주시길 바랍니다.
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    // trim()은 문자열의 양 끝 공백을 제거하는 메소드입니다.
    // 해당 메소드를 쓰는 이유는 그래서 공백을 제거해서 나온 내용이 빈 값인지, 즉 입력한 값이 없는지를
    // 확인하기 위해서 사용합니다. (저는.. 왜 이렇게까지 쓰는지는 잘 모르겠어요..)
    // 아무튼 있다면 return을 통해 다음 내용이 동작되지 않도록 함수를 끝내버립니다.
    
    dispatch(addTodo({ ...todo, id }));
    // dispatch는 앞서 언급드리다시피 은행에서 무언가를 하기 위해 거치는 창구라고 말씀드렸습니다.
    // 우리는 dispatch를 통해 addTodo라는 action creator를 통해 dispatch의 창구에 안에 있는 내용물을 접수하려고 합니다.
    // 이렇게 보내주면 todos.js에서 action과 관련한 처리를 진행하게 됩니다.

    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
    // setTodo()를 통해서 초기값으로 되돌리고, 입력한 값을 빈 값으로 되돌려 초기화 시켜줍니다.
    // 여기까지 했으면 Form.jsx의 내용을 다 읽어봤습니다. 이제 다른 코드를 읽어봅시다.
  };


  // [★] 여기를 먼저 읽고 [★★]를 읽어주세요.
  // 자, 여기 아래에는 수많은 Component들이 있습니다. styled component에 관해서는 다른 쪽에서 간략하게 설명해드렸으니,
  // 대충 어떤 생김새구나~ 라는 것만 알아주시면 좋을 것 같습니다.
  // 지금 우리는 컴포넌트들의 내용을 읽으면서 onSubmit이나 onChange에 어떠한 함수가 있다는 것을 볼 수 있습니다.
  // 그 함수의 내용들은 위에 해당하고 있어요. 그러니 우선 이 컴포넌트들이 어떤 구성을 가지고 있는지 대략적으로 아래의
  // component 변수들을 체크하시고 다 이해가 되신다면 ★★로 올라가봅시다.
  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
