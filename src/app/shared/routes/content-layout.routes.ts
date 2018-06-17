import { Routes, RouterModule } from '@angular/router';
export const CONTENT_ROUTES: Routes = [
     {
        path: 'pages',
        loadChildren: './pages/content-pages/content-pages.module#ContentPagesModule'
    }
];
