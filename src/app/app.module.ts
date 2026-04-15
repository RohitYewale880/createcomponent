import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from 'src/shared/component/product/product.component';
import { TestComponent } from 'src/shared/component/test/test.component';
import { UserComponent } from 'src/shared/component/user/user.component';
import { PostComponent } from 'src/shared/component/post/post.component';
import { EventComponent } from 'src/shared/component/eventbindingkeyup/event.component';
import { Eventelementref } from 'src/shared/component/eventelementref/eventeleref.component';
import { ViewchildComponent } from 'src/shared/component/ViewChild/viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TestComponent,
    UserComponent,
    PostComponent,
    EventComponent,
    Eventelementref,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
