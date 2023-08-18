import { Component } from '@angular/core';

@Component({
  selector: 'app-pip-data-format',
  templateUrl: './pip-data-format.component.html',
  styleUrls: ['./pip-data-format.component.css']
})
export class PipDataFormatComponent {
  myName = "Miura Isuzu";
  myNumber = 2099.89;
  myDate = new Date();
  data: any = 
  {
    name: "Miura Isuzu",
    age: 18
  };

}
