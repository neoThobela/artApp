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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_Sx4QeTC3FvDYe9AY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Sx4QeTC3FvDYe9AY(bh) {
    try {
      bh = this.sd_Z2MZrMm1ovV7oywr(bh);
      //appendnew_next_sd_Sx4QeTC3FvDYe9AY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sx4QeTC3FvDYe9AY');
    }
  }

  login(username = '', password = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { username: username, password: password };
      bh.local = {};
      bh = this.sd_sdsoQ8zMH4O1lBJ0(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Aiu5wMRvcTTnJy8');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_Z2MZrMm1ovV7oywr(bh) {
    try {
      //appendnew_next_sd_Z2MZrMm1ovV7oywr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z2MZrMm1ovV7oywr');
    }
  }

  sd_sdsoQ8zMH4O1lBJ0(bh) {
    try {
      bh = this.sd_700r9Sqgy8A1I9YG(bh);
      //appendnew_next_sd_sdsoQ8zMH4O1lBJ0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sdsoQ8zMH4O1lBJ0');
    }
  }

  async sd_700r9Sqgy8A1I9YG(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.loginClient(
        bh.input.username,
        bh.input.password
      );

      //appendnew_next_sd_700r9Sqgy8A1I9YG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_700r9Sqgy8A1I9YG');
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
  //appendnew_flow_loginComponent_Catch
}
