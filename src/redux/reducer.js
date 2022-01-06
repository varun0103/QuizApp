import * as types from "./actionType";

const initialState = {
  questions: [],
  question: {},
  loading: true,
  status: [],
  isAnswered: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_ANS:
      return {
        ...state,
        isAnswered: [...state.isAnswered, action.payload],
        loading: false,
      };
    case types.GET_ANS:
      return {
        ...state,
        status: [...state.status, action.payload],
        loading: false,
      };
    case types.GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case types.GET_QUESTIONS_DATA:
      return {
        ...state,
        question: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default questionReducer;
