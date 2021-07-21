import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes: Routes = [
    { path: 'pageFour', 
      loadChildren: () => 
        import('./page-four/page-four.module').then(m => m.PageFourModule) }, 
    { path: 'pageThree', 
      loadChildren: () => 
        import('./page-three/page-three.module').then(m => m.PageThreeModule) }, 
    { path: 'pageTwo', 
      loadChildren: () => 
        import('./page-two/page-two.module').then(m => m.PageTwoModule) }, 
    { path: 'pageOne', 
      loadChildren: () => 
        import('./page-one/page-one.module').then(m => m.PageOneModule) }, 
    { path: 'home', component: HomeComponent }, 
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule {}