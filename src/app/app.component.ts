import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities = ['New York', 'Gardey', 'Tandil', "Blue York City"];
  inputCity : string = "";

  add(city:string) {
    this.cities.push(city);
  }

  delete() {
    this.cities.pop();
  }
}
