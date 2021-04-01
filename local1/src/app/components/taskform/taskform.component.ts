import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service'
@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  constructor(public taskservice :TaskService) { }

  ngOnInit(): void {
  }
  addtask(newtitle:HTMLInputElement,newdescription:HTMLInputElement){
   this.taskservice.addtask({
     title:newtitle.value,
      description:newdescription.value,
      hide:true
   });             
   console.log(this.taskservice.gettask());
   return false;
  }

}
