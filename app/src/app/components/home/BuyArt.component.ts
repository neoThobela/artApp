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

  getArtsits(searchAll = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { searchAll: searchAll };
      bh.local = {};
      bh = this.sd_G2OqLOz6rkD7FiTH(bh);
      //appendnew_next_getArtsits
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qYHiJ2TeKEPRvMxY');
    }
  }

  //appendnew_flow_BuyArtComponent_start

  sd_JXfOKp464hTUFT5r(bh) {
    try {
      this.page.arr = undefined;
      bh = this.sd_x6qamXtSNaIZ8F8O(bh);
      //appendnew_next_sd_JXfOKp464hTUFT5r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JXfOKp464hTUFT5r');
    }
  }

  async sd_x6qamXtSNaIZ8F8O(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getAllArtists(
        bh.input.allArtists
      );

      bh = this.sd_MOUlx228dYTFByIT(bh);
      //appendnew_next_sd_x6qamXtSNaIZ8F8O
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x6qamXtSNaIZ8F8O');
    }
  }

  sd_MOUlx228dYTFByIT(bh) {
    try {
      const page = this.page;
      console.log(bh.input.artist);
      //appendnew_next_sd_MOUlx228dYTFByIT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MOUlx228dYTFByIT');
    }
  }

  async sd_G2OqLOz6rkD7FiTH(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getAllArtists(
        bh.input.allArtists
      );

      bh = this.sd_PtQkN9RVDhoZH3Gr(bh);
      //appendnew_next_sd_G2OqLOz6rkD7FiTH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G2OqLOz6rkD7FiTH');
    }
  }

  sd_PtQkN9RVDhoZH3Gr(bh) {
    try {
      const page = this.page;
      console.log('response', page);
      bh = this.sd_sTtuO54QVO0ZyV6l(bh);
      //appendnew_next_sd_PtQkN9RVDhoZH3Gr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PtQkN9RVDhoZH3Gr');
    }
  }

  async sd_sTtuO54QVO0ZyV6l(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/artwork');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_sTtuO54QVO0ZyV6l
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sTtuO54QVO0ZyV6l');
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
