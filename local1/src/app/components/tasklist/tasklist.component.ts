import { Component, OnInit } from '@angular/core';
import {  TaskService} from "../../service/task.service";
import {  Task} from "../../models/task";
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
tasks:Task[];
  constructor(public taskservice:TaskService) { }

  ngOnInit(): void {
    this.tasks=this.taskservice.gettask();
  }
  deletetask(task:Task){
   if(confirm('are you sure for delete')){
    this.taskservice.deletetask(task);
   }
  }

}
