import { Routes } from "@angular/router"
import { HomeComponent } from './navegacao/home/home.component'
import { ContatoComponent } from './institucional/contato/contato.component'
import { SobreComponent } from './institucional/sobre/sobre.component'
import { DatabindingComponent } from './demos/databinding/databinding.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DatabindingComponent }
];