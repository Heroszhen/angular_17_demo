import { Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { RoutingComponent } from './routing/routing.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';

import { AboutComponent } from './component/about/about.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { UserComponent } from './form/user/user.component';


export const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'routage', loadComponent: () => import('./routing/routing.component').then(m => m.RoutingComponent)},
    {path: 'routage/:id', loadComponent: () => import('./routing/routing.component').then(m => m.RoutingComponent)},
    {path: 'cycle-de-vie', component: LifecycleComponent},
    {path: 'directive', component: DirectiveComponent},
    {path: 'pipe', component: PipeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'compte', component: UserComponent},
    
    {path: '**', component: NotfoundComponent},
];
