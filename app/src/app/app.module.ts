import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { SafePipe } from './safe.pipe';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...appDeclarations, SafePipe],
  imports: [...appImportModules, NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [...appProviders],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
