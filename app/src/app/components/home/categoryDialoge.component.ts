/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-categoryDialoge',
  templateUrl: './categoryDialoge.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class categoryDialogeComponent {
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
      this.sd_NKajlHI6jF2FthD6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_NKajlHI6jF2FthD6(bh) {
    try {
      bh = this.sd_VOgMjAEDLsD0xTT8(bh);
      //appendnew_next_sd_NKajlHI6jF2FthD6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NKajlHI6jF2FthD6');
    }
  }

  //appendnew_flow_categoryDialogeComponent_start

  sd_VOgMjAEDLsD0xTT8(bh) {
    try {
      this.page.data = undefined;
      bh = this.sd_6mTReCSQRoCHzWhH(bh);
      //appendnew_next_sd_VOgMjAEDLsD0xTT8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VOgMjAEDLsD0xTT8');
    }
  }

  sd_6mTReCSQRoCHzWhH(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_srm80xZh5FRCtZ0y(bh);
      //appendnew_next_sd_6mTReCSQRoCHzWhH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6mTReCSQRoCHzWhH');
    }
  }

  sd_srm80xZh5FRCtZ0y(bh) {
    try {
      const page = this.page;
      console.log(page.data.artwork);
      //appendnew_next_sd_srm80xZh5FRCtZ0y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srm80xZh5FRCtZ0y');
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
  //appendnew_flow_categoryDialogeComponent_Catch
}
