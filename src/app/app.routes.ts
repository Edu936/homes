import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "",
        title: "Home Page",
        component: HomeComponent,
    },
    {
        path: "details/:id",
        title: "Details Page",
        component: DetailsComponent,
    },
];
