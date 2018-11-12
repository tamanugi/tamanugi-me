import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.pug',
  styleUrls: ['./skill.component.styl']
})
export class SkillComponent implements OnInit {

  @ViewChild('header') header: ElementRef

  constructor() { }

  ngOnInit() {
  }

}
