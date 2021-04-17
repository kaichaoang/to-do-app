import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from "@angular/core";
import { Store } from "@ngrx/store";
import { TasksState } from "../../models/app-state.model";
import { TaskInterface } from "../../models/task.interface";
import * as TaskActions from '../../actions/tasks.actions';
import { Update } from '@ngrx/entity';


@Component({
    selector: 'app-tasks-task',
    templateUrl: './task.component.html',

})

export class TaskComponent implements OnInit, OnChanges {
    //rxjs style
    @Input('task') taskProps: TaskInterface
    @Input('isEditing') isEditingProps: boolean;
    @Output('setEditingId') setEditingIdEvent: EventEmitter<number | null> = new EventEmitter();

    constructor(private store: Store<TasksState>) {}

    editingText: string = '';
    @ViewChild('textInput') textInput: ElementRef;

    ngOnInit(): void {
        this.editingText = this.taskProps.text;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.isEditingProps.currentValue) {
            setTimeout(() => {
            this.textInput.nativeElement.focus();
            }, 0);
        }
    }

    setTaskInEditMode(): void {
        this.setEditingIdEvent.emit(
            this.taskProps.id
        )
    }

    removeTask(): void {
        this.store.dispatch(TaskActions.removeTask({id: this.taskProps.id}));
    }

    toggleCompletion(): void {
        const completedTask: Update<TaskInterface> = {
            id: this.taskProps.id,
            changes: { isCompleted: !this.taskProps.isCompleted }
          }
          this.store.dispatch(TaskActions.editTask({edit: completedTask}));
    }

    editText(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.editingText = value;
    }

    //handle task editting
    editTask(): void{
        if (this.editingText != '') {
            const editedTask: Update<TaskInterface> = {
              id: this.taskProps.id,
              changes: { text: this.editingText, isEditing: false }
            }
            this.store.dispatch(TaskActions.editTask({edit: editedTask}));
            this.editingText = '';
        }
        this.setEditingIdEvent.emit(null);
    }
}