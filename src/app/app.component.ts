import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'tamanugi-me';

  scroll(el) {
    el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
