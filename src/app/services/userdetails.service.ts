import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private httpClient: HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/";
  toDosUrl= "https://jsonplaceholder.typicode.com/todos?userId=1"

  getData():Observable<any>{
    let endpoint = "users"
    return this.httpClient.get(this.url + endpoint);
  }

  getToDos():Observable<any>{
    return this.httpClient.get(this.toDosUrl);
  }

  addNewtodos(title:any):Observable<any>{
    return this.httpClient.post(this.toDosUrl, title)

  }

  updateTodo(status:any){
    return this.httpClient.patch(this.toDosUrl,status)

  }

}
