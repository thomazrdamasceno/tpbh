import { UrlMatcher, Data, ResolveData, Routes, LoadChildren, RunGuardsAndResolvers } from '@angular/router';
import { Type } from '@angular/core';

export class AppRouteInterface {

    link?: string;
    title?: string;
    icon?: string;
    path?: string;
    pathMatch?: string;
    matcher?: UrlMatcher;
    component?: Type<any>;
    redirectTo?: string;
    outlet?: string;
    canActivate?: any[];
    canActivateChild?: any[];
    canDeactivate?: any[];
    canLoad?: any[];
    data?: Data;
    resolve?: ResolveData;
    children?: Routes;
    loadChildren?: LoadChildren;
    runGuardsAndResolvers?: RunGuardsAndResolvers;


}

export declare type AppRoutes = AppRouteInterface[];
