import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './services/auth/auth.service';
import {TranslatePipe, TranslateService, TRANSLATION_PROVIDERS} from './services/translate';
import {AlbumComponent} from './components/album/album.component';
import {PhotoComponent} from './components/photo/photo.component';
import {CommentsComponent} from './components/comments/comments.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardLayoutComponent} from './shared/layouts/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    FooterComponent,
    TranslatePipe,
    AlbumComponent,
    PhotoComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [AuthService, TranslatePipe, TranslateService, TRANSLATION_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
