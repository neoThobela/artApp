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
import { connectToDB } from 'app/sd-services/connectToDB'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-postEvents',
  templateUrl: './postEvents.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class postEventsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_pV5fnWrj0wwVNbks(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_pV5fnWrj0wwVNbks(bh) {
    try {
      bh = this.sd_addLD964bF0eZ07s(bh);
      //appendnew_next_sd_pV5fnWrj0wwVNbks
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pV5fnWrj0wwVNbks');
    }
  }

  postEvent(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_73JiYz1jsPrvUqLl(bh);
      //appendnew_next_postEvent
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_84JUKEACobhcoepO');
    }
  }

  //appendnew_flow_postEventsComponent_start

  sd_addLD964bF0eZ07s(bh) {
    try {
      this.page.minDate = new Date();
      //appendnew_next_sd_addLD964bF0eZ07s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_addLD964bF0eZ07s');
    }
  }

  sd_73JiYz1jsPrvUqLl(bh) {
    try {
      const page = this.page;
      let vUrlId = page.dm.event.videoUrl.split('=').pop()
        ? page.dm.event.videoUrl.split('=').pop()
        : page.dm.event.videoUrl.split('/').pop();
      page.dm.event.videoUrl = vUrlId;

      bh = this.sd_KM4HXUKjDJyot8PW(bh);
      //appendnew_next_sd_73JiYz1jsPrvUqLl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_73JiYz1jsPrvUqLl');
    }
  }

  async sd_KM4HXUKjDJyot8PW(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.pOSTEvents(
        this.page.dm.event
      );

      //appendnew_next_sd_KM4HXUKjDJyot8PW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KM4HXUKjDJyot8PW');
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
  //appendnew_flow_postEventsComponent_Catch
}
