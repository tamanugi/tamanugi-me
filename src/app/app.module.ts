import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillComponent } from './section/skill/skill.component';
import { ProfileComponent } from './section/profile/profile.component';
import { WorksComponent } from './section/works/works.component';
import { SnsComponent } from './section/sns/sns.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    ProfileComponent,
    WorksComponent,
    SnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
