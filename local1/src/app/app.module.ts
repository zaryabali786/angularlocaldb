import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskComponent } from './components/task/task.component';
import { TaskformComponent } from './components/taskform/taskform.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskService } from "./service/task.service";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskComponent,
    TaskformComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
