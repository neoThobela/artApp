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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialogeArtInfoComponent } from './dialogeArtInfo.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-artwork',
  templateUrl: './artwork.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class artworkComponent {
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
      this.sd_105CJjDX91lOcCqr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_105CJjDX91lOcCqr(bh) {
    try {
      bh = this.sd_ey1AEYbLHYwIcMTh(bh);
      //appendnew_next_sd_105CJjDX91lOcCqr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_105CJjDX91lOcCqr');
    }
  }

  showArtInfo(art: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { art: art };
      bh.local = {};
      bh = this.sd_WpUVUEIFtxhJAtT9(bh);
      //appendnew_next_showArtInfo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aXitHtfyJQGCUNrC');
    }
  }

  //appendnew_flow_artworkComponent_start

  sd_ey1AEYbLHYwIcMTh(bh) {
    try {
      this.page.arr = undefined;
      bh = this.sd_Hc5AvG3dGmxNEmWP(bh);
      //appendnew_next_sd_ey1AEYbLHYwIcMTh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ey1AEYbLHYwIcMTh');
    }
  }

  sd_Hc5AvG3dGmxNEmWP(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);
      this.page.arr = connectToDBInstance['allArtists'];
      bh = this.sd_w36c2SeTfcyhcV3k(bh);
      //appendnew_next_sd_Hc5AvG3dGmxNEmWP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hc5AvG3dGmxNEmWP');
    }
  }

  sd_w36c2SeTfcyhcV3k(bh) {
    try {
      const page = this.page;
      console.log(page.arr);
      //appendnew_next_sd_w36c2SeTfcyhcV3k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w36c2SeTfcyhcV3k');
    }
  }

  sd_WpUVUEIFtxhJAtT9(bh) {
    try {
      const dialogeArtInfoDialog = this.__page_injector__.get(MatDialog);
      const dialogeArtInfoDialogRef = dialogeArtInfoDialog.open(
        dialogeArtInfoComponent,
        { data: bh.input.art }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WpUVUEIFtxhJAtT9');
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
  //appendnew_flow_artworkComponent_Catch
}
