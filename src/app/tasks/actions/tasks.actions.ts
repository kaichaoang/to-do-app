
import { createAction, props } from '@ngrx/store';
import { TaskInterface } from '../models/task.interface';
import { Update } from '@ngrx/entity';

// load all tasks, mainly used for init() call
export const loadTasks = createAction('[Tasks] Load Tasks', props<{ tasks: TaskInterface[] }>());

// add a new task
export const addTask = createAction('[Tasks] Add Task', props<{ task: TaskInterface }>());

// edits a single task with the new TaskInterface object
export const editTask = createAction('[Tasks] Edit Task', props<{ edit: Update<TaskInterface> }>());

// removes a single task with the given id
export const removeTask = createAction('[Tasks] Delete Task', props<{ id: number }>());

// marks all tasks as completed
export const completeAllTasks = createAction('[Tasks] Completes All Task', props<{ updates: Update<TaskInterface>[] }>());

// clear all tasks at once
export const clearTasks = createAction('[Tasks] Clear Tasks');
