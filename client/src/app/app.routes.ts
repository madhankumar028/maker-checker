import { AuthGuard } from './app.guard';
import { StoryVideoComponent } from './videos/videos.component';
import { Routes } from "@angular/router";
import { StoryLoginComponent } from "./authentication/login/login.component";
import { StoryRegisterComponent } from "./authentication/register/register.component";
import { StoryCreateVideosComponent } from './videos/create-videos/create-videos.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: StoryLoginComponent,
    },
    {
        path: 'register',
        component: StoryRegisterComponent,
    },
    {
        path: 'home',
        component: StoryVideoComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'upload-videos',
                component: StoryCreateVideosComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];
