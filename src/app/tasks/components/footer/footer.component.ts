import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { TasksState } from "../../models/app-state.model";
import * as taskSelector from '../../selectors/tasks.selectors';

@Component({
    selector: 'app-tasks-footer',
    templateUrl: './footer.component.html',

})

export class FooterComponent {
    noTasksClass$: Observable<boolean>;
    activeCount$: Observable<number>;
    itemsLeftText$: Observable<string>;

    constructor(private store: Store<TasksState>) {       
        this.noTasksClass$ = this.store.select(taskSelector.selectAllTasks).pipe(
            map(tasks => tasks.length === 0)
        );

        this.activeCount$ = this.store.select(taskSelector.selectAllTasks).pipe(
            map(tasks => tasks.filter(task => !task.isCompleted).length)
        );

        this.itemsLeftText$ = this.activeCount$.pipe(
            map(activeCount => `item${activeCount > 1 ? 's' : ''} left`)
        )
    }

}