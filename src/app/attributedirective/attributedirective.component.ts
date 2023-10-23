import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  templateUrl: './attributedirective.component.html',
  styleUrls: ['./attributedirective.component.css']
})
export class AttributedirectiveComponent {
  color:string='blue';
  size:number=3;
  issuccess:boolean=true;
}
