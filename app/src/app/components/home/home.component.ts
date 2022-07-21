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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_mZXO4ZdTUbhGHV9w(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mZXO4ZdTUbhGHV9w(bh) {
    try {
      bh = this.sd_UZEj1ChhDxSM2kF0(bh);
      //appendnew_next_sd_mZXO4ZdTUbhGHV9w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mZXO4ZdTUbhGHV9w');
    }
  }

  getArtsits(searchAll = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { searchAll: searchAll };
      bh.local = {};
      bh = this.sd_3db5doONxKJO4xwW(bh);
      //appendnew_next_getArtsits
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uLXJNBQ5d1MFajFA');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_UZEj1ChhDxSM2kF0(bh) {
    try {
      //appendnew_next_sd_UZEj1ChhDxSM2kF0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UZEj1ChhDxSM2kF0');
    }
  }

  async sd_3db5doONxKJO4xwW(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getAllArtists(
        bh.input.searchAll
      );

      bh = this.sd_6QFUuOFiTw72AMAC(bh);
      //appendnew_next_sd_3db5doONxKJO4xwW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3db5doONxKJO4xwW');
    }
  }

  sd_6QFUuOFiTw72AMAC(bh) {
    try {
      const page = this.page;
      console.log('response', page);
      bh = this.sd_1S59GCj3MXydRn15(bh);
      //appendnew_next_sd_6QFUuOFiTw72AMAC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6QFUuOFiTw72AMAC');
    }
  }

  async sd_1S59GCj3MXydRn15(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/artwork');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_1S59GCj3MXydRn15
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1S59GCj3MXydRn15');
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
  //appendnew_flow_homeComponent_Catch
}
