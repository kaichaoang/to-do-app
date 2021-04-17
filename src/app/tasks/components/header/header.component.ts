import { Component, Input } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { Store } from '@ngrx/store';
import { TaskInterface } from "../../models/task.interface";
import { TasksState } from "../../models/app-state.model";
import * as TaskActions from '../../actions/tasks.actions';

@Component({
    selector: 'app-tasks-header',
    templateUrl: './header.component.html',
    
})

//Component for the header, used for input when adding a new task
export class HeaderComponent {
    @Input() newTaskDescription: string

    constructor(private store: Store<TasksState>) {}

    //add a new task with default isEditing, isCompleted and image_url
    addTask(): void {
        if (this.newTaskDescription != '') {
            const task: TaskInterface = {
              id: uuid(),
              text: this.newTaskDescription,
              isEditing: false,
              isCompleted: false,
              image_url: ''
            };
            this.store.dispatch(TaskActions.addTask({task: task}));
            //a way to reset task description
            this.newTaskDescription = '';
          }
    }

}
