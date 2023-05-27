import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutsComponent } from './layouts/base-layouts/base-layouts.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

const routes: Routes = [
  {
    path:"",component: BaseLayoutsComponent ,children:[
      {path:"",component:ProductAddComponent },
      {path:"product/:id/edit",component:ProductEditComponent}

    ]
  },

  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
