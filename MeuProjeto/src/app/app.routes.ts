import { Routes } from "@angular/router"
import { HomeComponent } from './navegacao/home/home.component'
import { ContatoComponent } from './institucional/contato/contato.component'
import { SobreComponent } from './institucional/sobre/sobre.component'
import { DatabindingComponent } from './demos/databinding/databinding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DatabindingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent },
    { path: 'carrinho/:id', component: ListaProdutoComponent }
];