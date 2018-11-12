import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.pug',
  styleUrls: ['./profile.component.styl']
})
export class ProfileComponent implements OnInit {

  @ViewChild('header') header: ElementRef

  constructor() { }

  ngOnInit() {
  }

}
