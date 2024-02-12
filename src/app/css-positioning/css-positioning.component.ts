import { Component } from '@angular/core';
import {PositionTestComponent} from "./position-test/position-test.component";

@Component({
  selector: 'app-css-positioning',
  templateUrl: './css-positioning.component.html',
  styles: [],
  imports: [
    PositionTestComponent
  ],
  standalone: true
})
export class CssPositioningComponent {

}
