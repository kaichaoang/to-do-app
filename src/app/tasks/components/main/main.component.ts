import { Component } from "@angular/core";
import { TaskInterface } from "../../models/task.interface";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { TasksState } from "../../models/app-state.model";
import { Update } from '@ngrx/entity';
import { TasksStorageService } from '../services/tasks-storage.service';

import * as taskSelector from '../../selectors/tasks.selectors';
import * as TaskActions from '../../actions/tasks.actions';

@Component({
    selector: 'app-tasks-main',
    templateUrl: './main.component.html'
})

//Component displaying all of the current tasks
export class MainComponent {
    visibleTasks: Observable<TaskInterface[]>;
    isAllTasksSelected$: Observable<boolean>;
    editingId: string | null = null;

    constructor(private store: Store<TasksState>, private syncStorage: TasksStorageService) {

        //checks if every task is completed
        this.isAllTasksSelected$ = this.store.select(taskSelector.selectAllTasks).pipe(
            map((tasks => tasks.every(task => task.isCompleted)))
        );
        
        this.visibleTasks = this.store.select(taskSelector.selectAllTasks);

        //initialises storage syncing
        this.syncStorage.init();
    }

    setEditingId(editingId: string | null): void {
        this.editingId = editingId;
    }

    //function to mark all tasks as completed at once
    checkAllTasks(isCompleted: boolean): void {
        const updatedTasks: Update<TaskInterface>[] = [];

        var taskIds: string[] | number[];

        this.store.select(taskSelector.selectTaskIds).subscribe(x => taskIds = x);
    
        taskIds.forEach(task_id => {
            var editedTask: Update<TaskInterface> = {
                id: task_id,
                changes: { isCompleted: isCompleted }
            }
                updatedTasks.push(editedTask);
            }
        );
        this.store.dispatch(TaskActions.completeAllTasks({updates: updatedTasks}));
    }
}