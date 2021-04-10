import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clsBG = "backColor";
  clsExp = false;
  animals = ["dog", "cat", "elephant"];

  isActive = false;

  dt = Date.now();

  title = 'E-Library';
  name: String = "Mr. Khun";

  imgSrc = "./assets/aa.jpg";

  data = 0;

  getValue() {
    return 5;
  }

  onClick(item: number){
    item = this.data + item;
    this.data++;
    console.log(item);
  }

  textInput(input: String) {
    console.log(input);
    this.isActive = !this.isActive;
  }

  onTestEvent(value: String){
    this.name = value;
  }
}
