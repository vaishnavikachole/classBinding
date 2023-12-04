import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssClassBindingComponent } from './css-class-binding/css-class-binding.component';

const routes: Routes = [
  {path:'css-class-binding',component:CssClassBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
