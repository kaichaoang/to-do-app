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

//Component displaying each individual task
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

    //A way to focus on text during editting mode
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

    //toggles the completion of a task
    toggleCompletion(): void {
        const completedTask: Update<TaskInterface> = {
            id: this.taskProps.id,
            changes: { isCompleted: !this.taskProps.isCompleted }
          }
          this.store.dispatch(TaskActions.editTask({edit: completedTask}));
    }

    //capture only the final editted text
    editText(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.editingText = value;
    }

    //handle task editing, rollback to original state if given text is empty
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

    //add or edit a given image, converts to url
    editImageUrl(event): void {
        if(event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e: any) => {
                const taskWithImage: Update<TaskInterface> = {
                  id: this.taskProps.id,
                  changes: { image_url: e.target.result }
                }
                this.store.dispatch(TaskActions.editTask({edit: taskWithImage}));
            }
        }
    }
}