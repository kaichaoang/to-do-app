import { CommonModule } from '@angular/common';
import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksStorageService } from './services/tasks-storage.service';
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './reducers/tasks.reducer';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox'


const MaterialComponents = [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule
];

  
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
        MaterialComponents
    ],
    providers: [TasksStorageService],

})
export class TaskModule{}