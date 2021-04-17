import * as TaskActions from '../actions/tasks.actions';
import { taskAdapter, TasksState, initialState } from '../models/app-state.model';
import { Action, createReducer, on } from '@ngrx/store';


  const reducer = createReducer(
    initialState,
    on(TaskActions.addTask, (state, { task }) => {
      return taskAdapter.addOne(task, state)
    }),
    on(TaskActions.editTask, (state, { edit }) => {
      return taskAdapter.updateOne(edit, state);
    }),
    on(TaskActions.removeTask, (state, { id }) => {
      return taskAdapter.removeOne(id, state);
    }),
    on(TaskActions.loadTasks, (state, { tasks }) => {
      return taskAdapter.setAll(tasks, state);
    }),
    on(TaskActions.completeAllTasks, (state, { updates }) => {
      return taskAdapter.updateMany(updates, state);
    }),
    on(TaskActions.clearTasks, state => {
      return taskAdapter.removeAll({ ...state, selectedTaskId: null });
    })
);

export function TaskReducer(state: TasksState, action: Action) {
  return reducer(state, action);
}
