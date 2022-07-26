/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { connectToDB } from 'app/sd-services/connectToDB'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { categoryDialogeComponent } from './categoryDialoge.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-cateory',
  templateUrl: './cateory.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class cateoryComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_aZo2RKbC8mwxlyOG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_aZo2RKbC8mwxlyOG(bh) {
    try {
      bh = this.sd_1haIXsXHricLW2nS(bh);
      //appendnew_next_sd_aZo2RKbC8mwxlyOG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aZo2RKbC8mwxlyOG');
    }
  }

  showArt(art: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { art: art };
      bh.local = {};
      bh = this.sd_3X3YKdDNXBvobAZ0(bh);
      //appendnew_next_showArt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EOY9Dr49d561BDCF');
    }
  }

  //appendnew_flow_cateoryComponent_start

  sd_1haIXsXHricLW2nS(bh) {
    try {
      this.page.artType = undefined;
      this.page.arr = undefined;
      this.page.category = undefined;
      bh = this.sd_qrrQV9S1IpyGvWQh(bh);
      //appendnew_next_sd_1haIXsXHricLW2nS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1haIXsXHricLW2nS');
    }
  }

  sd_qrrQV9S1IpyGvWQh(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_DQeKgrRV6yNKx4ti(bh);
      //appendnew_next_sd_qrrQV9S1IpyGvWQh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qrrQV9S1IpyGvWQh');
    }
  }

  sd_DQeKgrRV6yNKx4ti(bh) {
    try {
      const page = this.page;
      page.category = page.router.url
        .substring(page.router.url.lastIndexOf('/') + 1)
        .replace('%20', ' ');
      console.log(page.category);
      bh = this.sd_eZ8WIpK7w10hgVTX(bh);
      //appendnew_next_sd_DQeKgrRV6yNKx4ti
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DQeKgrRV6yNKx4ti');
    }
  }

  sd_eZ8WIpK7w10hgVTX(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);
      this.page.category = connectToDBInstance['artistsByCategory'];
      //appendnew_next_sd_eZ8WIpK7w10hgVTX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eZ8WIpK7w10hgVTX');
    }
  }

  sd_3X3YKdDNXBvobAZ0(bh) {
    try {
      const categoryDialogeDialog = this.__page_injector__.get(MatDialog);
      const categoryDialogeDialogRef = categoryDialogeDialog.open(
        categoryDialogeComponent,
        { data: bh.input.art }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3X3YKdDNXBvobAZ0');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_cateoryComponent_Catch
}
