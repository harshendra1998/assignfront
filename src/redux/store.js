import { createStore, combineReducers } from 'redux';

const myStore = (
  state = { data: 0 },
  action
) => {
  switch (action.type) {
    case "ADD":
      return { ...store ,data: state.data + 1 };
    case "REMOVE":
      return { ...store ,data: state.data - 1 };
    default:
      return state;
  }
}

export const store = createStore(
  myStore,
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);