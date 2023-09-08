import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';



@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Exportamos aquellas clases (componentes/pipes, services, etc) que queremos que sean accesibles desde fuera del módulo
    BasicListComponent
  ]
})
export class ListsModule { }
