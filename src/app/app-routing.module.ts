import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from './components/edituser/edituser.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', redirectTo:'user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'edituser', component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
