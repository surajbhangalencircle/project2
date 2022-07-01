import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
// @ViewChild('.strikethrough') strikethrough:ElementRef;
export class EdituserComponent implements OnInit, AfterViewInit {


  constructor(private userDetails: UserdetailsService) { }


  users: any;
  isComplete: boolean = false;

  // status: boolean= false;
  // checkboxValue:boolean;

  ngOnInit(): void {
    this.userDetails.getToDos().subscribe(
      res => this.users = res
    );
  }

  ngAfterViewInit(): void {
  }

  AddUser() {
    var title = (<HTMLInputElement>document.getElementById('inputTodo')).value;
    var id = (<HTMLInputElement>document.getElementById('status')).value;
    
    this.userDetails.addNewtodos(title)
      .subscribe(
        data => console.log(data))
        this.users.push({title: title, completed: id}
      );
    // console.log(this.users)
     this.saveUser();
  }

  // changeStatus($event:any){
  //   const id= $event.target.value;
  //   const isChecked= $event.target.checked;
  //   console.log(id, isChecked);

  // }

  saveUser(){
    this.userDetails.saveTodo(this.users)
  }
  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
