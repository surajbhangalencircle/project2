import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
// @ViewChild('.strikethrough') strikethrough:ElementRef;
export class EdituserComponent implements OnInit, AfterViewInit{

 
  constructor(private userDetails: UserdetailsService) { }
  

  users:any;
  // status: boolean= false;
  // checkboxValue:boolean;
  
  ngOnInit(): void {
    this.userDetails.getToDos().subscribe(                    
      res=> this.users= res
    )

  }

  ngAfterViewInit(): void {
    
  }

  
  AddUser(){
    var title = (<HTMLInputElement>document.getElementById('inputTodo')).value;
    this.userDetails.addNewtodos(title)
    .subscribe(
      data =>
        this.users.push(data)
    )
    // localStorage.setItem("id", "i")
  }

  changeStatus($event:any){
    const id= $event.target.value;
    const isChecked= $event.target.checked;
    console.log(id, isChecked);
    console.log(this.users)
  }
 

    

    // newFunction()
    // {
    //   if(!checkboxValue)
    //   {
    //     this.users.completed = " days";

    //     this.users["completed"].PTOCarry = this.users["completed"].PTOCarry / 8;
    //   }
    //   else
    //   {
    //     this.users.completed = " hours";
    //     //actually this else part shouldn't be needed
    //   }
    // }

  

  // changeStatus(event:any) {
  //   var completed ;
  //   if (event.target.checked) {
  //     for(let i = 0; i < this.users.length; i++) {
  //       if(this.users[i].id == event.id){
  //         this.users[i].completed = true;
  //         completed = true;
  //       }
  //     }
  //   }
  //   else {
  //     for(let i = 0; i < this.users.length; i++) {

  //       if(this.users[i].id == event.id)
  //       {
  //         this.users[i].completed = false;
  //         completed = false;
  //       }
  //     }
  //   }

  //   this.userDetails.updateTodo(event)
  //   .subscribe(
  //     data => data)    
  // }
}
