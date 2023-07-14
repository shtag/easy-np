import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FromTableComponent } from './pages/from-table/from-table.component';

const routes: Routes = [
  {
    path: '',
    component: FromTableComponent
  },
  {
    path: 'from-table',
    component: FromTableComponent
  },
  {
    path: 'admin',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
