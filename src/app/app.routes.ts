import { Routes } from '@angular/router';
import { Layout } from './shared/layout/layout';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },

    {
        path: "",
        component: Layout,
        children: [
            { path: "home", component: Home }
        ]
    }
];
