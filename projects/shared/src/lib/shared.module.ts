import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';



@NgModule({
  declarations: [
    SharedComponent,
    WelcomeMessageComponent
  ],
  imports: [
  ],
  exports: [
    SharedComponent,
    WelcomeMessageComponent
  ]
})
export class SharedModule { }
