import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  templateUrl: './structuraldirective.component.html',
  styleUrls: ['./structuraldirective.component.css']
})
export class StructuraldirectiveComponent {

  show:boolean=true;
  show1:boolean=false;
  dontshow:boolean=true;
 choose:string='A';

 Detail=[
  {name:'Harsha',behaviour:'strategist'},
  {name:'Trishna',behaviour:'analyzer'}
 ]



}
