// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
// 위의 내용이 이상하죠? 이건 Store에서 reducer로 보내줄 때,
// 지금 우리가 보내주려고 하는 게 어떤 행위인지를 알려주기 위해서 나타내는 action type이라고 합니다.
// 여러분, 은행을 가면 여러분들이 할 수 있는 것들이 뭐가 있죠?
// 예금, 출금, 통장 정리, 보험 가입, 환전, 투자 상담 등 다양하게 있지 않던가요?
// 이 action type은 마치 여러분들이 은행에 가서 어떠한 행동을 할지를 나타내는 거라고 봐주시면 되겠습니다.

// 그리고 이 action creator는 여러분들이 어떠한 행동을 할 때, 기본적으로 갖춰야할 '양식'이라고 생각해주시면
// 되겠습니다.
// action creator에는 두 가지의 정보가 담겨있습니다. 여러분들이 이제 진행하시게 되는 '행동'이 담겨 있고요,
// 그다음 payload라고 reducer에 전달해줄 내용이 담겨 있습니다. 나는 얼마 입금할거야~ 얼마 출금할거야~ 같은 내용이
// 저 payload에 담겨있다고 봐주시면 됩니다.


// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// 자, state는 상황에 따라 다르겠지만 우리가 통장을 만들었을 때, 기본적으로 이 통장이 제대로 작동하는지
// 1원이 자동으로 들어가는 체험을 해본 적이 있을 겁니다. 그렇지 않나요?
// 그것은 어쩌면 통장의 '초기값' 아니겠어요?
// state에도 그렇습니다. 만약 만드는 사람이 원한다면 그 초기값을 설정할 수도 있습니다.
// 아래의 변수, initialState는 state에 초기값을 주기 위한 객체라고 봐주시면 좋을 것 같네요.

// 변수를 봅시다. 보니까 두 개의 내용이 있습니다. 나중에 Detail이나 Form에서 보게 될텐데, 두 개의 이름을 헷갈리지 않도록 잘 기억해둡시다.
// 여기서의 todos는 배열입니다. 여러분들이 투두리스트 목록에서 보게 될 애들이 다 저기에 저장이 됩니다.
// 그리고 todo는 단일이죠? 네, 여기서의 todo는 일종의 todos에 넣기 위한 '양식'이라고 생각해주면 좋을 거 같네요~

// initial state
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

// 변수 todos를 선언합니다. state의 정보를 initialState 초기값으로 선언하고, action을 받아오기로 했습니다.
// 이제 여러분들의 정보는 계속해서 state에 저장된다고 보시면 좋을 것 같습니다.

const todos = (state = initialState, action) => {
  switch (action.type) {
    // action의 type이 어떤 종류냐에 따라 아래의 경우를 적용하겠다는 내용입니다. switch case 구문 매우 유용하니 봐둡시다.
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    // TODO를 추가할 경우. 즉 입금이죠? 그러면 todos는 기존 state의 정보를 받아와서 새로운 todos의 정보를 넣어주겠다고 하는 겁니다.
    // 근데 이렇게 보면 뭔지 몰라요. 헷갈려요, 그쵸? 그러니 아래와 같이 풀어 써봅시다. 예시도 조금 추가하고.
    // 위의 내용은 아래와 같아요. 많이 기니까 참고하세요.
    // 먼저 ...state =  todos: [{id: "1", title: "리액트", body: "리액트를 배워봅시다", isDone: false}], todo: {id: "0", title: "", body:"", isDone:false},
    // 그 다음 이어 나오는 내용이.. todos: {id: "1", title: "리액트", body: "리액트를 배워봅시다", isDone: false}, {id: "2", title: "제대로 배우기", body:"확실히 알기", isDone:false}

    // ... = 전개 구문인데, 안에 있는 내용물을 다 꺼내어 보여주겠다라는 겁니다. 즉, []가 있다면 []를 벗기고 {}가 있다면 {}를 벗기는 거죠.
    // 위의 내용은 그 전개 구문을 쉽게 알기 위해 괄호를 벗긴 상태입니다. 하지만 내용이 길어서 알기 어렵죠? 글로 설명하려니 어렵네요..

    // 자, 첫 내용을 다시 보면 ...state, todos: [...state.todos, action.payload] 라고 적혀있습니다.
    // 우리는 지금 ...을 보고 괄호를 다 연 상태에요. 그러면 안에 있는 내용물을 교체할 수가 있는 상태라는 거죠, 맞나요?
    // 뚜껑을 닫으면 내용물을 교체할 수 있나요? 아니죠? 뚜껑이 열려야만 비로소 우리는 안의 내용물을 교체할 수가 있어요.

    // 이제 우린 기존의 state에 있는 todos와 새로 만든 todos를 비교해서 넣어줄 겁니다. 그럼 기존에 있던 내용과 동일한 건 놔두고
    // 새로운 거만 추가해서 갱신해주면 되겠죠?
    // 기존 거에 내용물도 바뀌는 건 어떻하냐구요? 흠.. 그건 실험해봅시다. 그거까지 알려드릴 시간이 많진 않아요.^^;0
    // 아무튼 위의 내용은 그렇습니다, 저렇게 내용물이 추가가 된다는 것을 알면 됩니다.

    // 근데 전개 구문을 썼다고 해서 다 내용이 추가되는 건 아니에요, 여러분.
    // 예를 들어 아래를 봅시다.
    // bucket = {id: 3, name:"coffee", taste:"쓴맛"}
    // setbucket({...bucket, name"milk tea", taset:"담백한 맛"})
    // setbucket 내용을 봅시다. {...bucket, name"milk tea", taste:"담백한 맛"} 잘 보면 안에 전개구문이 있죠? 그러면 풀어봅시다.
    // {id: 3, name:"coffee", taste:"쓴맛", name"milk tea", taste:"담백한 맛"}이 되겠죠?
    // 자, 근데 name과 taste가 똑같은 게 있어요, 이 경우 어떻게 될까요?
    // 순서상 뒤에 있는게 나중에 들어온 거니 앞에 같은 key가 있다면 그 내용을 덮어씌우게 됩니다. 그럼 아래를 볼까요?
    // {id:3, name:"milk tea", taste:"쓴맛", taste:"담백한 맛"}
    // {id:3, name:"milk tea", taste:"담백한 맛"}이 됩니다.
    // 이처럼 전개구문 안에서 같은 key가 있다면 해당 key의 내용은 덮어 씌워진다고 생각해주세요. OK?
    // 단, 같은 객체일 때나 같은 배열일 때에만 가능하다는 점. 잊지 말아주세요!
    // 전개한 객체와 새로운 배열 또는 전개한 배열과 새로운 객체! 타입이 다르므로 같은 내용이 있더라도 덮어쓰기가 안됩니다! 

    // 이 흐름이 이해가 갔다면 아래의 내용들은 이제부터 쉬워집니다.

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      // 위의 내용대로 똑같이 state을 전개해주고, 그 안에 todos라는 내용에서 우리는 filter를 적용할 겁니다.
      // 여기서 받아오는 payload의 내용은 삭제할 카드의 'id'라는 거에요.
      // 지금 todos는 아시다시피 filter를 이용해 새로운 배열을 만들어내는거죠?
      // 그 내용은 payload를 통해 받아온 id와 일치하지 않는 배열을 만들어내서 해당 카드를 없애려고 하는 겁니다.

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

      // 다음은 토글이네요. 역시 위와 똑같아요. 여기도 새로운 배열을 만들어내기 위해 map을 썼네요.
      // 여기에 있는 todo는 initialState의 todo와 달라요!! 그냥 element, parameter의 이름으로서의 todo입니다!
      // 여기 네이밍이 좀 사람 헷갈리게 지어놨더라구요, 여러분들은 이렇게 지으시면 안됩니다!
      // 자, 그래서 위와 똑같이 id를 체크를 하는 건데, 여기서의 내용은 [완료], [취소] 버튼을 눌렀을 때 카드 목록을
      // 다르게 하고 싶어하는 내용이에요.
      // 그렇기 때문에 우리가 바꾸자하는 카드의 목록이 있다! 하면 isDone의 값을 바꿔주고
      // 아닌 건 그냥 값을 받아오는 식으로 넘기는 겁니다. 이해가 가셨나요?
      // 자, 마지막 아래를 볼게요. 

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;

    // 자 마지막으로 ID의 정보를 가져오고 싶어하는 것 같아요. 아마, 제 생각에 상세 정보 페이지 등에서 쓰려는 것 같네요.
    // 우선 내용을 계속 풀어보자면 위와 동일하게 역시 이번에도 전개 구문을 이용하되, 여기서는 해당 조건에 만족하는 내용을
    // 찾는 find 메소드가 이용됐습니다. 해당 조건을 만족한다면 true로 반환하게 되겠네요.
  }
};

export default todos;


// 여기까지가 todos.jsx 내용이었습니다. 되게 정신이 없었죠?
// 다시 문서의 흐름을 정리하자면
// configStore.js는 말 그대로 은행입니다. 어쩌면 은행의 외관이라고 보는게 좋을 거 같아요.
// 그리고 우리가 지금 본 todos.js는 은행의 내부입니다. 은행에서 어떤 일들을 하고 있는지를 알수 있는거죠.
// 그렇게 개념을 잡고 가시면 이해가 편하실 겁니다.