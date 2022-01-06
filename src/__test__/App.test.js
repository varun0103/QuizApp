import React from "react";
import { shallow } from "enzyme";
import Question from "../App";
import QuestionPage from "../App";
import FinalPage from "../App";
import { mount } from "enzyme";
// import Question from "../components/Question";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import "../setupTests";

it("shows a question component", () => {
  let wrapped = shallow(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  expect(wrapped.find(Question).length).toEqual(1);
});

it("shows a questionPage component", () => {
  let wrapped = shallow(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  expect(wrapped.find(QuestionPage).length).toEqual(1);
});

it("shows a FinalPage component", () => {
  let wrapped = shallow(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  expect(wrapped.find(FinalPage).length).toEqual(1);
});
