import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { PartsTemplateComponent } from './components/pages/parts-template/parts-template.component';
import { VINComponent } from './components/pages/vin/vin.component';
import { AccountComponent } from './components/pages/account/account.component';
import { PassThrough } from 'stream';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { VinAdminComponent } from './components/pages/vin-admin/vin-admin.component';
import { BrakesComponent } from './components/pages/brakes/brakes.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'parts-template',
                component: PartsTemplateComponent
            },
            {
                path: 'vin',
                component: VINComponent
            },
            {
                path: 'account',
                component: AccountComponent
            },
            {
                path: 'password-reset',
                component: PasswordResetComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'vin-admin',
                component: VinAdminComponent
            },
            {
                path: 'brakes',
                component: BrakesComponent
            }
        ]
    }
];
