import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.pug',
  styleUrls: ['./works.component.styl']
})
export class WorksComponent implements OnInit {

  @ViewChild('header') header: ElementRef

  constructor() { }

  ngOnInit() {
  }

}
