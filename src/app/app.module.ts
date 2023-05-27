import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { BaseLayoutsComponent } from './layouts/base-layouts/base-layouts.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdminComponent } from './pages/admin/admin.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
// decorators typescript
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminLayoutsComponent,
    BaseLayoutsComponent,
    AboutPageComponent,
    AdminComponent,
    AdminProductComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomePageComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
