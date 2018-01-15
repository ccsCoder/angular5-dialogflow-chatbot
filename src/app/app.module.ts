import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageFormComponent } from './message-form/message-form.component';

import { DialogFlowService} from './dialog-flow.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    MessageListComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [DialogFlowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
