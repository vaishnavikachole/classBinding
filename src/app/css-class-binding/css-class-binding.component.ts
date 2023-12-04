import { Component } from '@angular/core';

@Component({
  selector: 'app-css-class-binding',
  templateUrl: './css-class-binding.component.html',
  styleUrls: ['./css-class-binding.component.css']
})
export class CssClassBindingComponent {
  
  multiCssClasses : string = 'colorChange bgColor';
  CssChange  : boolean = true;
}
