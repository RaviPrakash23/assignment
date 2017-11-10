import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step01Component } from './step01/step01.component';
import { Step02Component } from './step02/step02.component';
import { Step03Component } from './step03/step03.component';
import { Step04Component } from './step04/step04.component';

export const router: Routes = [
    { path: '', redirectTo: 'step01', pathMatch: 'full' },
    { path: 'step01', component: Step01Component },
    { path: 'step02', component: Step02Component },
    { path: 'step03', component: Step03Component },
    { path: 'step04', component: Step04Component },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
