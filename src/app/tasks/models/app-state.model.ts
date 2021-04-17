import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TaskInterface } from './task.interface';

export interface TasksState extends EntityState<TaskInterface> {
    // additional entities state properties
}

// create entity state adapter for tasks
export const taskAdapter: EntityAdapter<TaskInterface> = createEntityAdapter<TaskInterface>();

const tasksDefaultState: TasksState = {
    ids: [],
    entities: {},
};

export const initialState: TasksState = taskAdapter.getInitialState(
    tasksDefaultState
);