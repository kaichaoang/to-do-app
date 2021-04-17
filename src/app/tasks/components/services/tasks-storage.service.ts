import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {filter} from 'rxjs/operators';

import { TasksState } from '../../models/app-state.model';
import { tasksFeatureSelector } from '../../selectors/tasks.selectors';
import * as TaskActions from '../../actions/tasks.actions';

export const TASKS_LOCAL_STORAGE_KEY = 'task-key';

@Injectable({
  providedIn: 'root'
})

export class TasksStorageService {
  private isInitialized = false;

  constructor(private store: Store<TasksState>) { }

  init() {
    if (this.isInitialized) {
      return;
    }

    this.isInitialized = true;

    // loading of task entities from user local storage
    this.loadFromStorage();

    // saving into local storage
    this.store.pipe(
      select(tasksFeatureSelector),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(state));
    });

    // load tasks from local storage, when storage changes
    window.addEventListener('storage', () => this.loadFromStorage());
  }

 //load entities from local storage, if exists
  private loadFromStorage() {
    const storageState = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);

    if (storageState) {
      const taskEntities = JSON.parse(storageState)["entities"];

      const isEmpty = (object: Object) => {
        for (var i in object) {
          return false;
        }
        return true;
      }

      if(!isEmpty(taskEntities)) {
          this.store.dispatch(TaskActions.loadTasks({
              tasks: JSON.parse(JSON.stringify(Object.values(taskEntities)))
          }));
      }
    }
  }
  
}