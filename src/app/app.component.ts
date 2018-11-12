import { Component, ViewChild, ElementRef } from '@angular/core';
import { ProfileComponent } from './section/profile/profile.component';
import { SkillComponent } from './section/skill/skill.component';
import { WorksComponent } from './section/works/works.component';
import { SnsComponent } from './section/sns/sns.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'tamanugi-me';

  @ViewChild('menuWrapper') menuWrapper: ElementRef;
  @ViewChild('profileComp') profileComp: ProfileComponent;
  @ViewChild('skillComp') skillComp: SkillComponent;
  @ViewChild('worksComp') worksComp: WorksComponent;
  @ViewChild('snsComp') snsComp: SnsComponent;

  scroll(el: ElementRef) {
    const targetTop = el.nativeElement.offsetTop - this.menuWrapper.nativeElement.clientHeight - 5
    window.scroll({top: targetTop, behavior: 'smooth'})
  }
}
