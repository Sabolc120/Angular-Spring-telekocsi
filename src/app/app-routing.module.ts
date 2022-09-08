import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarBookComponent } from './car-book/car-book.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "introduction", component: IntroductionComponent },
  {path: "register", component: RegisterComponent},
  {path: "carBook", component: CarBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
