import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CurrencyPipe,UpperCasePipe,LowerCasePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

a= "kumar";
b:string = "ravi shigh";
age:number = 60;
names:string[] = ["kumar","ravi","singh","mohan","ramu"];

c=50;
msg = ()=>{
  alert("welcome to angular cli"+this.c);
  this.xyz();
}

xyz = ()=>{
  alert("this is second mesg");
}


mytext : string = "Pipes are a special operator in Angular template expressions that allows you to transform data declaratively in your template. Pipes let you declare a transformation function once and then use that transformation across multiple templates. Angular pipes use the vertical bar character"






}
