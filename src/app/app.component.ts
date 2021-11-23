import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1:number = 5;
  n2:number =2;
  picName:string ="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"; 

  hi(name:string){
    alert("Hi " + name)
  }
}

