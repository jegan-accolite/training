import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './providers/route-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [RouteGuardService] },
  { path: 'search', component: SearchComponent, canActivate: [RouteGuardService]  },
  { path: 'cart', component: CartComponent, canActivate: [RouteGuardService]  },
  { path: 'orders', component: OrdersComponent, canActivate: [RouteGuardService]  },
  { path: 'book/:title', component: BookComponent, canActivate: [RouteGuardService]  },
  { path: 'login', component: LoginComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
