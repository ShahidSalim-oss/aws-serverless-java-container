import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { MySingleComponent } from './my-single/my-single.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'my-single',
    component: MySingleComponent,
    data: {
      title: 'Single Data'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'shops',
        children: [
          {
            path: '',
            component: P404Component,
            data: {
              title: 'Page 404'
            }
          },
          {
            path: ':shopId/smart',
            loadChildren: () => import('./views/smart-categories/list/list.module').then(m => m.ListModule),
            pathMatch: 'full'
          },
          {
            path: ':shopId/smart/:id',
            loadChildren: () => import('./views/smart-categories/edit/edit.module').then(m => m.EditModule),
            pathMatch: 'full'
          },
          {
            path: ':shopId/users',
            loadChildren: () => import('./views/user/list/list.module').then(m => m.ListModule),
            pathMatch: 'full'
          },
          {
            path: ':shopId/users/:id',
            loadChildren: () => import('./views/user/view/view.module').then(m => m.ViewModule),
            pathMatch: 'full'
          },
          {
            path: ':shopId/items',
            loadChildren: () => import('./views/item/list/list.module').then(m => m.ListModule),
            pathMatch: 'full'
          },
          {
            path: ':shopId/items/:id',
            loadChildren: () => import('./views/item/view/view.module').then(m => m.ViewModule),
            pathMatch: 'full'
          },
          {
            path: ':shopId/events',
            loadChildren: () => import('./views/event/list/list.module').then(m => m.ListModule),
            pathMatch: 'full'
          },
          {
            path: ':shopId/events/:id',
            loadChildren: () => import('./views/event/view/view.module').then(m => m.ViewModule),
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
