
import { createAction, props } from '@ngrx/store';
import { TaskInterface } from '../models/task.interface';
import { Update } from '@ngrx/entity';

// load all tasks
export const loadTasks = createAction('[Tasks] Load Tasks', props<{ tasks: TaskInterface[] }>());

// add single task
export const addTask = createAction('[Tasks] Add Task', props<{ task: TaskInterface }>());

// edit single task
export const editTask = createAction('[Tasks] Edit Task', props<{ edit: Update<TaskInterface> }>());

// remove single task
export const removeTask = createAction('[Tasks] Delete Task', props<{ id: number }>());

// checks all tasks
export const completeAllTasks = createAction('[Tasks] Completes All Task', props<{ updates: Update<TaskInterface>[] }>());

// clear all tasks
export const clearTasks = createAction('[Tasks] Clear Tasks');
