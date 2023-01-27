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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FindAdresseComponent } from './pages/find-adresse/find-adresse.component';
import { RegionComponent } from './pages/find-adresse/region/region.component';
import { KommuneComponent } from './pages/find-adresse/kommune/kommune.component';
import { KommuneCrudComponent } from './pages/kommune-crud/kommune-crud.component';
import { KommuneFormComponent } from './components/forms/kommune-form/kommune-form.component';
import { PrefixWithZeroDirective } from './directives/prefix-with-zero.directive';
import { ClonePipe } from './pipes/clone.pipe';
import { RegionFormComponent } from './components/forms/region-form/region-form.component';
import { RegionCrudComponent } from './pages/region-crud/region-crud.component';

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
    KommuneDetailsComponent,
    FindAdresseComponent,
    RegionComponent,
    KommuneComponent,
    KommuneCrudComponent,
    KommuneFormComponent,
    PrefixWithZeroDirective,
    ClonePipe,
    RegionFormComponent,
    RegionCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
