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
  selector: 'bh-dialogeArtInfo',
  templateUrl: './dialogeArtInfo.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialogeArtInfoComponent {
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
      this.sd_rJR1L9BGisavMuGt(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_rJR1L9BGisavMuGt(bh) {
    try {
      bh = this.sd_yz7SH8jM6r0Bf8HV(bh);
      //appendnew_next_sd_rJR1L9BGisavMuGt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rJR1L9BGisavMuGt');
    }
  }

  //appendnew_flow_dialogeArtInfoComponent_start

  sd_yz7SH8jM6r0Bf8HV(bh) {
    try {
      bh = this.sd_XErNj0lzs4R1xEvQ(bh);
      //appendnew_next_sd_yz7SH8jM6r0Bf8HV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yz7SH8jM6r0Bf8HV');
    }
  }

  sd_XErNj0lzs4R1xEvQ(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);
      this.page.arr = connectToDBInstance['allArtists'];
      bh = this.sd_Ry5Sr4zqJsYNOtns(bh);
      //appendnew_next_sd_XErNj0lzs4R1xEvQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XErNj0lzs4R1xEvQ');
    }
  }

  sd_Ry5Sr4zqJsYNOtns(bh) {
    try {
      const page = this.page;
      console.log(page.arr);
      //appendnew_next_sd_Ry5Sr4zqJsYNOtns
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ry5Sr4zqJsYNOtns');
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
  //appendnew_flow_dialogeArtInfoComponent_Catch
}
