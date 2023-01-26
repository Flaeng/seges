import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnderlineDirective } from './directives/underline.directive';
import { NavnOgKodePipe } from './pipes/navn-og-kode.pipe';
import { TakePipe } from './pipes/take.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KommuneListComponent } from './pages/kommune-list/kommune-list.component';
import { KommuneDetailsComponent } from './pages/kommune-details/kommune-details.component';
import { SharedModule } from 'projects/shared/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UnderlineDirective,
    NavnOgKodePipe,
    TakePipe,
    FilterPipe,
    DashboardComponent,
    KommuneListComponent,
    KommuneDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
