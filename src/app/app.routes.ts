import { Routes } from '@angular/router';
import { UserloginComponent } from './appmodules/auth/userlogin/userlogin.component';
import { UserregistorComponent } from './appmodules/auth/userregistor/userregistor.component';

export const routes: Routes = [
    {
        path:'',
        component:UserloginComponent
    },
    {
        path:'registor',
        component:UserregistorComponent
    }
];
