import { connect } from "react-redux";

import { TodoItemList } from "./components/TodoItemList";
import { NewTodoItem } from "./components/NewTodoItem";
import { addTask } from "./actions";

export const ConnectedTodoItemList = connect(state => state)(TodoItemList);

export const ConnectedNewTodoItem = connect(
  state => state,
  dispatch => ({ addTask: title => dispatch(addTask(title)) })
)(NewTodoItem);
