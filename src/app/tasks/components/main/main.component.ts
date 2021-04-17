import { Component } from "@angular/core";
import { TaskInterface } from "../../models/task.interface";
import { BehaviorSubject, Observable } from "rxjs";

import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { TasksState } from "../../models/app-state.model";
import * as taskSelector from '../../selectors/tasks.selectors';
import * as TaskActions from '../../actions/tasks.actions';
import { Update } from '@ngrx/entity';

@Component({
    selector: 'app-tasks-main',
    templateUrl: './main.component.html'
})

export class MainComponent {
    visibleTasks: Observable<TaskInterface[]>;
    isAllTasksSelected$: Observable<boolean>;
    editingId: string | null = null;
    tasks$: BehaviorSubject<TaskInterface>;

    constructor(private store: Store<TasksState>) {

        //checks if every task is completed
        this.isAllTasksSelected$ = this.store.select(taskSelector.selectAllTasks).pipe(
            map((tasks => tasks.every(task => task.isCompleted)))
        );
        
        this.visibleTasks = this.store.select(taskSelector.selectAllTasks);
    }

    setEditingId(editingId: string | null): void {
        this.editingId = editingId;
    }

    checkAllTasks(isCompleted: boolean): void {
        const updatedTasks: Update<TaskInterface>[] = [];

        var taskIds: string[] | number[];

        this.store.select(taskSelector.selectTaskIds).subscribe(x => taskIds = x);
    
        taskIds.forEach(task_id => {
        var editedTask: Update<TaskInterface> = {
            id: task_id,
            changes: { isCompleted: isCompleted }
        }
        updatedTasks.push(editedTask)
        }
        );
        this.store.dispatch(TaskActions.completeAllTasks({updates: updatedTasks}));
        
    }
}