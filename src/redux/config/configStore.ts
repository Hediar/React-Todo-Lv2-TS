// 중앙 데이터 관리소 store 설정
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // modules key: value
  todos,
});

// 리듀서를 가져와야 함

const store = createStore(rootReducer); // reducer의 묶음
// const store = configureStore({
//   reducer: {
//     todos: todos,
//   },
// })

export default store;
