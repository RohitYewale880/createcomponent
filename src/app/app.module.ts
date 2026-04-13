import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from 'src/shared/component/product/product.component';
import { TestComponent } from 'src/shared/component/test/test.component';
import { UserComponent } from 'src/shared/component/user/user.component';
import { PostComponent } from 'src/shared/component/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TestComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
