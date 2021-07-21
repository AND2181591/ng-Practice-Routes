import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatDividerModule, 
    MatCardModule
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatDividerModule, 
    MatCardModule
  ]
})
export class MaterialModule { }
