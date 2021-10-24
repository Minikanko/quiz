

//액션타입
const CHECK_CORRECT = "score/CHECK_CORRECT";

//재실행 할것인가?
const IS_REPLAY = "play/IS_REPLAY";

const NEXT_PAGE = "page/next"

//액션 생성함수
export function check({answer}){
    return {
        type:CHECK_CORRECT,
        payload: {answer}
    }
}

export function  replay(){
    return {
        type: IS_REPLAY,
    }
}

export function next(){
    return {
        type:NEXT_PAGE
    }
}

//초기상태
const initialState = {
    score: 0,
    page: 0,
    quizs: [
        {
          q: "대한민국의 수도는?",
          img: "/city/korea.jpg",
          a: [
            {
              text: "서울",
              isCorrect: true,
            },
            {
              text: "인천",
              isCorrect: false,
            },
            {
              text: "부산",
              isCorrect: false,
            },
          ],
        },
        {
          q: "미국의 수도는?",
          img: "/city/us.jpg",
          a: [
            {
              text: "샌프란시스코",
              isCorrect: false,
            },
            {
              text: "워싱턴 D.C",
              isCorrect: true,
            },
            {
              text: "뉴욕",
              isCorrect: false,
            },
          ],
        },
        {
          q: "미국의 수도는?",
          img: "/city/us.jpg",
          a: [
            {
              text: "샌프란시스코",
              isCorrect: false,
            },
            {
              text: "워싱턴 D.C",
              isCorrect: true,
            },
            {
              text: "뉴욕",
              isCorrect: false,
            },
          ],
        },
        {
          q: "미국의 수도는?",
          img: "/city/us.jpg",
          a: [
            {
              text: "샌프란시스코",
              isCorrect: false,
            },
            {
              text: "워싱턴 D.C",
              isCorrect: true,
            },
            {
              text: "뉴욕",
              isCorrect: false,
            },
          ],
        },
        {
          q: "미국의 수도는?",
          img: "/city/us.jpg",
          a: [
            {
              text: "샌프란시스코",
              isCorrect: false,
            },
            {
              text: "워싱턴 D.C",
              isCorrect: true,
            },
            {
              text: "뉴욕",
              isCorrect: false,
            },
          ],
        },
        {
          q: "미국의 수도는?",
          img: "/city/us.jpg",
          a: [
            {
              text: "샌프란시스코",
              isCorrect: false,
            },
            {
              text: "워싱턴 D.C",
              isCorrect: true,
            },
            {
              text: "뉴욕",
              isCorrect: false,
            },
          ],
        },
        {
          q: "미국의 수도는?",
          img: "/city/us.jpg",
          a: [
            {
              text: "샌프란시스코",
              isCorrect: false,
            },
            {
              text: "워싱턴 D.C",
              isCorrect: true,
            },
            {
              text: "뉴욕",
              isCorrect: false,
            },
          ],
        },
        {
          q: "미국의 수도는?",
          img: "/city/us.jpg",
          a: [
            {
              text: "샌프란시스코",
              isCorrect: false,
            },
            {
              text: "워싱턴 D.C",
              isCorrect: true,
            },
            {
              text: "뉴욕",
              isCorrect: false,
            },
          ],
        },
      ],
}

export default function score (state=initialState, action) {
    switch (action.type) {
        case CHECK_CORRECT:
            return {
                ...state,
                score : state.quizs[state.page].a.forEach((list) => list.text === action.payload.answer? state.score++ : state.score),
            }

        case NEXT_PAGE:
            return {
                ...state,
                page: state.page+1,
            }
        case IS_REPLAY:
            return {
                ...state,
                page: 0,
                score: 0,
            }

        default:
            return state
    }
}