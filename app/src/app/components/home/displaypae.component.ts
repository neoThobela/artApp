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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-displaypae',
  templateUrl: './displaypae.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class displaypaeComponent {
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
      this.sd_RKoFE1xyxOHPHjVP(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RKoFE1xyxOHPHjVP(bh) {
    try {
      bh = this.sd_z9wGYVVpDzrC0kyZ(bh);
      //appendnew_next_sd_RKoFE1xyxOHPHjVP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RKoFE1xyxOHPHjVP');
    }
  }

  findCategory(textToSearch = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { textToSearch: textToSearch };
      bh.local = {};
      bh = this.sd_vRlAVbVTlEP443fJ(bh);
      this.sd_ftI3WIVpckrDOqbn(bh);
      //appendnew_next_findCategory
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jii6SjVAtzvgiPym');
    }
  }

  getArtsits(searchAll = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { searchAll: searchAll };
      bh.local = {};
      bh = this.sd_oHjBpUwDqpb8cnYe(bh);
      //appendnew_next_getArtsits
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gvav1Gt6vl9XDD1s');
    }
  }

  //appendnew_flow_displaypaeComponent_start

  sd_z9wGYVVpDzrC0kyZ(bh) {
    try {
      this.page.option = undefined;
      this.page.data = {};
      this.page.chosen = undefined;
      bh = this.sd_29RWlEm8s11shTfl(bh);
      //appendnew_next_sd_z9wGYVVpDzrC0kyZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z9wGYVVpDzrC0kyZ');
    }
  }

  sd_29RWlEm8s11shTfl(bh) {
    try {
      const page = this.page;
      page.option = [
        'Oil Painting',
        'Contemporary',
        'Urban Art',
        'Sculpture',
        'Photoraphy',
      ];
      //appendnew_next_sd_29RWlEm8s11shTfl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_29RWlEm8s11shTfl');
    }
  }

  async sd_vRlAVbVTlEP443fJ(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getCategory(
        this.page.chosen
      );
      bh.input.artistsByCategory = outputVariables.local.client_result;

      bh = this.sd_SSYkbQIk6gYHuRYU(bh);
      this.sd_ftI3WIVpckrDOqbn(bh);
      //appendnew_next_sd_vRlAVbVTlEP443fJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vRlAVbVTlEP443fJ');
    }
  }

  async sd_SSYkbQIk6gYHuRYU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/category');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_SSYkbQIk6gYHuRYU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SSYkbQIk6gYHuRYU');
    }
  }

  sd_ftI3WIVpckrDOqbn(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh);
      //appendnew_next_sd_ftI3WIVpckrDOqbn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ftI3WIVpckrDOqbn');
    }
  }

  async sd_oHjBpUwDqpb8cnYe(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getAllArtists(
        bh.input.searchAll
      );

      bh = this.sd_XswfYwdTbtXTb1jR(bh);
      //appendnew_next_sd_oHjBpUwDqpb8cnYe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oHjBpUwDqpb8cnYe');
    }
  }

  sd_XswfYwdTbtXTb1jR(bh) {
    try {
      const page = this.page;
      console.log('response', page);
      bh = this.sd_ZAG28HL0hfZp3dP2(bh);
      //appendnew_next_sd_XswfYwdTbtXTb1jR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XswfYwdTbtXTb1jR');
    }
  }

  async sd_ZAG28HL0hfZp3dP2(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/artwork');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_ZAG28HL0hfZp3dP2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZAG28HL0hfZp3dP2');
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
  //appendnew_flow_displaypaeComponent_Catch
}
