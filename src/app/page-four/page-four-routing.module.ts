import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFourComponent } from './card-four/card-four.component';
import { CardOneComponent } from './card-one/card-one.component';

import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { PageFourComponent } from './page-four/page-four.component';

const routes: Routes = [
  { path: '', 
    component: PageFourComponent, 
    children: [
      { path: 'cardFour', component: CardFourComponent }, 
      { path: 'cardThree', component: CardThreeComponent }, 
      { path: 'cardTwo', component: CardTwoComponent }, 
      { path: 'cardOne', component: CardOneComponent }, 
      { path: '', component: CardPlaceholderComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFourRoutingModule { }
