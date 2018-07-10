import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent,
        MainComponent,
        BlogComponent,
        CoverComponent,
        CatalogoComponent } from './pages.index';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
    { path: 'index', component: CoverComponent, data: {page : 'cover'}  },
    { path: 'shop', component: CatalogoComponent, data: {page : 'shop'}  },
    { path: 'blog', component: CatalogoComponent, data: {page : 'blog'}  },
    { path: 'blog/:id', component: BlogComponent, data: {page : 'blogDetail'}  },
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
