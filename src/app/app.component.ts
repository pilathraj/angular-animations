import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<h1>Angular Animations</h1>
  <button (click)="toggleLight()">Toggle Lighting</button>
  <div [@lightOnOff]="roomState" class="room"></div>`,
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('lightOnOff',[
      state('on', style(
      {backgroundColor:'#fff'}
      )),
      state('off', style(
      {backgroundColor:'#000'}
      )),
      transition('on => off', [animate('2ms')]),
      transition('off => on', [animate('2ms')]),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  roomState: string;
  constructor(){
    this.roomState = 'on';
  }
  
  toggleLight(){
    this.roomState = this.roomState === "on"? 'off': 'on';    
  }
}
