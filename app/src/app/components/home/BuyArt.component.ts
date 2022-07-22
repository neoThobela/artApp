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
  selector: 'bh-BuyArt',
  templateUrl: './BuyArt.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class BuyArtComponent {
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
      this.sd_nYBQkBDzzFvSJJTV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nYBQkBDzzFvSJJTV(bh) {
    try {
      bh = this.sd_JXfOKp464hTUFT5r(bh);
      //appendnew_next_sd_nYBQkBDzzFvSJJTV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nYBQkBDzzFvSJJTV');
    }
  }

  sd_mh9z0aKQWiNSYSgt(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_sd_mh9z0aKQWiNSYSgt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mh9z0aKQWiNSYSgt');
    }
  }

  //appendnew_flow_BuyArtComponent_start

  sd_JXfOKp464hTUFT5r(bh) {
    try {
      this.page.arr = undefined;
      bh = this.sd_Iqquz0kdr9JTCP5p(bh);
      //appendnew_next_sd_JXfOKp464hTUFT5r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JXfOKp464hTUFT5r');
    }
  }

  async sd_Iqquz0kdr9JTCP5p(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getAllArtists(
        this.page.arr
      );
      this.page.arr = outputVariables.local.client_result;

      bh = this.sd_B6pqESpYkuC2qYWg(bh);
      //appendnew_next_sd_Iqquz0kdr9JTCP5p
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Iqquz0kdr9JTCP5p');
    }
  }

  sd_B6pqESpYkuC2qYWg(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);
      this.page.arr = connectToDBInstance['allArtists'];
      this.sd_zfqxYvTEhLOOCSzF(bh);
      //appendnew_next_sd_B6pqESpYkuC2qYWg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B6pqESpYkuC2qYWg');
    }
  }

  sd_zfqxYvTEhLOOCSzF(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.arr);
      //appendnew_next_sd_zfqxYvTEhLOOCSzF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zfqxYvTEhLOOCSzF');
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
  //appendnew_flow_BuyArtComponent_Catch
}
