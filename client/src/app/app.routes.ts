import { Routes } from "@angular/router";
import { StoryLoginComponent } from "./authentication/login/login.component";
import { StoryRegisterComponent } from "./authentication/register/register.component";

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: StoryLoginComponent
    },
    {
        path: 'register',
        component: StoryRegisterComponent
    }
];
