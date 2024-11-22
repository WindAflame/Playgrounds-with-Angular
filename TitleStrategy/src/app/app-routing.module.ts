import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    title: "Welcome - TitleStrategy",
  },
  {
    path: 'home',
    component: HomeComponent,
    title: "Home - TitleStrategy",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
