import { CommonModule } from '@angular/common';
import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksService } from './components/services/tasks.service';
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './reducers/tasks.reducer';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        component: TasksComponent,
    }
];

@NgModule({
    //each new component need to be added here
    declarations: [TasksComponent, HeaderComponent, MainComponent, TaskComponent, FooterComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        StoreModule.forRoot({
            tasks: TaskReducer,
          }),
    ],
    providers: [TasksService],

})
export class TaskModule{}