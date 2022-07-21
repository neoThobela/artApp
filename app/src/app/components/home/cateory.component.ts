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
import { connectToDB } from 'app/sd-services/connectToDB'; //_splitter_
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

  //appendnew_flow_cateoryComponent_start

  sd_1haIXsXHricLW2nS(bh) {
    try {
      this.page.artType = undefined;
      this.page.arr = [];
      bh = this.sd_gqIXgBLg1NFYlFaB(bh);
      //appendnew_next_sd_1haIXsXHricLW2nS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1haIXsXHricLW2nS');
    }
  }

  sd_gqIXgBLg1NFYlFaB(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);
      this.page.arr = connectToDBInstance['artistsByCategory'];
      bh = this.sd_C9ci01m0fDGhTWZM(bh);
      //appendnew_next_sd_gqIXgBLg1NFYlFaB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gqIXgBLg1NFYlFaB');
    }
  }

  sd_C9ci01m0fDGhTWZM(bh) {
    try {
      const page = this.page;
      console.log(page.arr);
      //appendnew_next_sd_C9ci01m0fDGhTWZM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C9ci01m0fDGhTWZM');
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
