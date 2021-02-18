import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainPageComponent, canActivate: [/*AuthenticatedGuard*/] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
