import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test'
  },
  {
    path: '**',
    component: TestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
