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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-post',
  templateUrl: './post.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class postComponent {
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
      this.sd_dDWw9cjIMk7RAj4q(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dDWw9cjIMk7RAj4q(bh) {
    try {
      bh = this.sd_OpK5EI2dXbwFk7y0(bh);
      //appendnew_next_sd_dDWw9cjIMk7RAj4q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dDWw9cjIMk7RAj4q');
    }
  }

  post(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_KL728UlUCYDePWAJ(bh);
      //appendnew_next_post
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lj1yzI90YKIbQI6q');
    }
  }

  //appendnew_flow_postComponent_start

  sd_OpK5EI2dXbwFk7y0(bh) {
    try {
      this.page.post = undefined;
      bh = this.sd_lweZzvu9TlSFT87P(bh);
      //appendnew_next_sd_OpK5EI2dXbwFk7y0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OpK5EI2dXbwFk7y0');
    }
  }

  sd_lweZzvu9TlSFT87P(bh) {
    try {
      const page = this.page;
      page.post = {
        title: '',
        artistName: '',
        cateory: '',
        artwork: '',
        year: '',
        info: '',
        price: '',
      };
      //appendnew_next_sd_lweZzvu9TlSFT87P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lweZzvu9TlSFT87P');
    }
  }

  sd_KL728UlUCYDePWAJ(bh) {
    try {
      const page = this.page;
      bh.input.body = bh.input.form;
      bh.input.body['rate'] = [
        { rate: false, icon: 'star_border' },
        { rate: false, icon: 'star_border' },
        { rate: false, icon: 'star_border' },
        { rate: false, icon: 'star_border' },
        { rate: false, icon: 'star_border' },
      ];
      bh = this.sd_qB8wM26sw8xQjFBA(bh);
      //appendnew_next_sd_KL728UlUCYDePWAJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KL728UlUCYDePWAJ');
    }
  }

  async sd_qB8wM26sw8xQjFBA(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.pOST(bh.input.body);

      bh = this.sd_HLGoAjLF1F6IUVQd(bh);
      //appendnew_next_sd_qB8wM26sw8xQjFBA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qB8wM26sw8xQjFBA');
    }
  }

  sd_HLGoAjLF1F6IUVQd(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('POST SENT', '', {
        duration: 5000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_cfegCfAqTLnua4ON(bh);
      //appendnew_next_sd_HLGoAjLF1F6IUVQd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HLGoAjLF1F6IUVQd');
    }
  }

  async sd_cfegCfAqTLnua4ON(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/artwork');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_cfegCfAqTLnua4ON
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cfegCfAqTLnua4ON');
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
  //appendnew_flow_postComponent_Catch
}
