import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
   name = signal('Angular');

   upperCase = signal(true);

   changeToggleCase(){
    if (this.upperCase() === true) {
      console.log(this.upperCase());
      this.upperCase.set(false);
      console.log(`Update: ${this.upperCase()}`);
    return;
    }
    this.upperCase.set(true);
   }

 }
