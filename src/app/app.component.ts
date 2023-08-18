import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = "Miura Isuzu";
  age : number = 18;
  title = 'Component_Interaction';
  dataFromChild = "";
  dataFromInput = "";
  //function recieve data from child component
  receiveFromChild(a : any){
    this.dataFromChild = a;
  }

  receiveItem(d : any){
    this.dataFromInput = d;
  }
}
