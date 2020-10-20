import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesVisualizarPageRoutingModule } from './clientes-visualizar-routing.module';

import { ClientesVisualizarPage } from './clientes-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientesVisualizarPageRoutingModule
  ],
  declarations: [ClientesVisualizarPage]
})
export class ClientesVisualizarPageModule {}