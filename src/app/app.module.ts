import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { TypographyComponent } from './components/typography/typography.component';
import { HeaderSmallComponent } from './components/header-small/header-small.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeaderComponent,
    IconCardComponent,
    TypographyComponent,
    HeaderSmallComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimplebarAngularModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
