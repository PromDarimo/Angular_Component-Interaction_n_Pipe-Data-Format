import { Component,EventEmitter,Input, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  //parent data to child page 
  @Input() parentData : string = "";
  @Input() ageData!: number;
  //parentData is attribute from parent page use property binding

  //custome event from child to parent
  @Output() myChildEvent = new EventEmitter();
  //myChildEvent declare by developer

  @Output() myItemData = new EventEmitter();
  name = "Blade Runner";
  item_name: any;

  sendDataToParent(){
    this.myChildEvent.emit(this.name);
    //send data(name) by event(method emit)  
  }
  sendDataInput(data : any){
    this.myItemData.emit(data);
  }
}
