import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent,
        MainComponent,
        CatalogoComponent } from './pages.index';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
    { path: 'index', component: CatalogoComponent, data: {page : 'index'}  },
    { path: 'blog', component: CatalogoComponent, data: {page : 'blog'}  },
    { path: 'about', component: AboutComponent, data: {page : 'about'}  },
    { path: '', redirectTo: '/index', pathMatch: 'full'}
],
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
