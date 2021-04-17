import { TasksState, taskAdapter } from '../models/app-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
   
export const tasksFeatureSelector = createFeatureSelector<TasksState>('tasks');

  // get the selectors
  const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = taskAdapter.getSelectors();
   
  //obtain an array of task ids
  export const selectTaskIds = createSelector(tasksFeatureSelector, selectIds);
   
  //obtain dictionary of task entities
  export const selectTaskEntities = createSelector(tasksFeatureSelector, selectEntities);
   
  //obtain an array of task entities
  export const selectAllTasks = createSelector(tasksFeatureSelector, selectAll);
   
  //obtain the total number of task entities in store
  export const selectTaskTotal = createSelector(tasksFeatureSelector, selectTotal);

   

  

  