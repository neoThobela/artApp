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
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog'; //_splitter_
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
      bh = this.sd_yJKnIXkjEABpguFr(bh);
      //appendnew_next_sd_rJR1L9BGisavMuGt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rJR1L9BGisavMuGt');
    }
  }

  back(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Mf6byvq1LjnC6Sok(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uAMCRnCUFzmwVIsn');
    }
  }

  //appendnew_flow_dialogeArtInfoComponent_start

  sd_yz7SH8jM6r0Bf8HV(bh) {
    try {
      this.page.data = undefined;
      bh = this.sd_4hcGUYz8iOIaRB26(bh);
      //appendnew_next_sd_yz7SH8jM6r0Bf8HV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yz7SH8jM6r0Bf8HV');
    }
  }

  sd_4hcGUYz8iOIaRB26(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_Ry5Sr4zqJsYNOtns(bh);
      //appendnew_next_sd_4hcGUYz8iOIaRB26
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4hcGUYz8iOIaRB26');
    }
  }

  sd_Ry5Sr4zqJsYNOtns(bh) {
    try {
      const page = this.page;
      console.log(page.data.artwork);
      //appendnew_next_sd_Ry5Sr4zqJsYNOtns
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ry5Sr4zqJsYNOtns');
    }
  }

  sd_yJKnIXkjEABpguFr(bh) {
    try {
      this.page.dialogRef = this.__page_injector__.get(MatDialogRef);
      //appendnew_next_sd_yJKnIXkjEABpguFr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yJKnIXkjEABpguFr');
    }
  }

  sd_Mf6byvq1LjnC6Sok(bh) {
    try {
      const page = this.page;
      page.dialogRef.close();
      //appendnew_next_sd_Mf6byvq1LjnC6Sok
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mf6byvq1LjnC6Sok');
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
