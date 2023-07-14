import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextareaComponent } from './components/textarea/textarea.component';
import { FromTableComponent } from './from-table.component';



@NgModule({
  declarations: [
    TextareaComponent,
    FromTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TextareaComponent,
    FromTableComponent
  ]
})
export class FromTableModule { }
