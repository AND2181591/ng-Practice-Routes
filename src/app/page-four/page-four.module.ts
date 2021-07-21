import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFourRoutingModule } from './page-four-routing.module';

import { PageFourComponent } from './page-four/page-four.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { CardFourComponent } from './card-four/card-four.component';
import { MaterialModule } from '../material.module';
import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';


@NgModule({
  declarations: [
    PageFourComponent,
    CardOneComponent,
    CardTwoComponent, 
    CardThreeComponent, 
    CardFourComponent, 
    CardPlaceholderComponent
  ],
  imports: [
    CommonModule,
    PageFourRoutingModule, 
    MaterialModule
  ]
})
export class PageFourModule { }
