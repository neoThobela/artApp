import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/home/login.component';
//CORE_REFERENCE_IMPORT-categoryDialogeComponent
import { categoryDialogeComponent } from '../components/home/categoryDialoge.component';
//CORE_REFERENCE_IMPORT-dialogeArtInfoComponent
import { dialogeArtInfoComponent } from '../components/home/dialogeArtInfo.component';
//CORE_REFERENCE_IMPORT-artworkComponent
import { artworkComponent } from '../components/home/artwork.component';
//CORE_REFERENCE_IMPORT-artistsComponent
import { artistsComponent } from '../components/home/artists.component';
//CORE_REFERENCE_IMPORT-cateoryComponent
import { cateoryComponent } from '../components/home/cateory.component';
//CORE_REFERENCE_IMPORT-aboutUsComponent
import { aboutUsComponent } from '../components/home/aboutUs.component';
//CORE_REFERENCE_IMPORT-displaypaeComponent
import { displaypaeComponent } from '../components/home/displaypae.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-categoryDialogeComponent
  categoryDialogeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogeArtInfoComponent
  dialogeArtInfoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-artworkComponent
  artworkComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-artistsComponent
  artistsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cateoryComponent
  cateoryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-aboutUsComponent
  aboutUsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-displaypaeComponent
  displaypaeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: homeComponent,
    children: [
      { path: 'display', component: displaypaeComponent },
      { path: 'category/:searchString', component: cateoryComponent },
      { path: 'about', component: aboutUsComponent },
      { path: 'artwork', component: artworkComponent },
    ],
  },
  { path: 'login', component: loginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
