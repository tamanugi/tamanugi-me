import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sns',
  templateUrl: './sns.component.pug',
  styleUrls: ['./sns.component.styl']
})
export class SnsComponent implements OnInit {

  @ViewChild('header') header: ElementRef

  constructor() { }

  ngOnInit() {
  }

}
