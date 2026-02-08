import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menus } from './pages/menus/menus';
import { Menudetail } from './pages/menu-detail/menu-detail';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Reservas } from './pages/reservas/reservas';
import { Pedidos } from './pages/pedidos/pedidos';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'landing', component: Home },
    { path: 'menus', component: Menus },
    { path: 'menu-detail', component: Menudetail },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'reservas', component: Reservas },
    { path: 'pedidos', component: Pedidos },
];
