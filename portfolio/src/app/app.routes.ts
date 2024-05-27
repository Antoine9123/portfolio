import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WebProjectsComponent } from './pages/web-projects/web-projects.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'webprojects', component: WebProjectsComponent
    }
];
