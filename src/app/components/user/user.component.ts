import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userDetails: UserdetailsService, private route: Router) { }

  userData:any;
  ngOnInit(): void {
    this.userDetails.getData().subscribe(
      res=> this.userData=res
      
    );
    
  }

  OnClick(){
    this.route.navigate(['edituser']);
  }


}
