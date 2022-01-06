import * as types from "./actionType";
import axios from "axios";
// import { type } from "@testing-library/user-event/dist/type";

const getQuestions = (questions) => ({
  type: types.GET_QUESTIONS,
  payload: questions,
});

const getData = (question) => ({
  type: types.GET_QUESTIONS_DATA,
  payload: question,
});

export const getAns = (id, status) => ({
  type: types.GET_ANS,
  payload: { status: status, id: id },
});
export const isAns = (id, isAns) => ({
  type: types.IS_ANS,
  payload: { id: id, isAns: isAns },
});

export const loadQuestions = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        // console.log(resp.data);
        dispatch(getQuestions(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadQuestionData = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        // console.log(resp.data);
        dispatch(getData(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
