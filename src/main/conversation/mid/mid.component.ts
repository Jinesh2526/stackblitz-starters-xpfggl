import { Component, OnInit } from '@angular/core';
import { TextmessageComponent } from './textmessage/textmessage.component';

@Component({
  standalone:true,
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.css'],
  imports:[TextmessageComponent]
})
export class MidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}