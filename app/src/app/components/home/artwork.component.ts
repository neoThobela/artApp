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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialogeArtInfoComponent } from './dialogeArtInfo.component'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
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

  rateArt(
    rate: any = undefined,
    ind = 0,
    itemIndex: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { rate: rate, ind: ind, itemIndex: itemIndex };
      bh.local = {};
      bh = this.sd_Ro6iepRQlEkBUWUI(bh);
      //appendnew_next_rateArt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BHXpZj2BAXx4uWLf');
    }
  }

  filterArtsits(searchString = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { searchString: searchString };
      bh.local = {};
      bh = this.sd_RYcYabq2sHvyeHHt(bh);
      //appendnew_next_filterArtsits
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TrFvdOsVETlLPaSC');
    }
  }

  //appendnew_flow_artworkComponent_start

  sd_ey1AEYbLHYwIcMTh(bh) {
    try {
      this.page.arr = [];
      this.page.allArtists = [];
      this.page.data = [];
      bh = this.sd_jMresiAMJWqmOT81(bh);
      //appendnew_next_sd_ey1AEYbLHYwIcMTh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ey1AEYbLHYwIcMTh');
    }
  }

  async sd_jMresiAMJWqmOT81(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getAllArtists(
        bh.input.searchAll
      );
      this.page.arr = outputVariables.local.client_result;

      bh = this.sd_ZKmbjNwZZBl0od59(bh);
      //appendnew_next_sd_jMresiAMJWqmOT81
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jMresiAMJWqmOT81');
    }
  }

  sd_ZKmbjNwZZBl0od59(bh) {
    try {
      const page = this.page;
      page.arr.forEach((item) => page.data.push(item));
      //appendnew_next_sd_ZKmbjNwZZBl0od59
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZKmbjNwZZBl0od59');
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

  sd_Ro6iepRQlEkBUWUI(bh) {
    try {
      const page = this.page; // reset the rates

      for (let i = 0; i < page.arr[bh.input.itemIndex]['rate'].length; i++) {
        page.arr[bh.input.itemIndex]['rate'][i]['rate'] = false;
        page.arr[bh.input.itemIndex]['rate'][i]['icon'] = 'star_border';
      }

      for (let i = 0; i < bh.input.ind + 1; i++) {
        page.arr[bh.input.itemIndex]['rate'][i]['rate'] = true;
        page.arr[bh.input.itemIndex]['rate'][i]['icon'] = 'star';
      }

      // Update rates
      bh = this.sd_tdqn0ZcKdPBQ6dtc(bh);
      //appendnew_next_sd_Ro6iepRQlEkBUWUI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ro6iepRQlEkBUWUI');
    }
  }

  async sd_tdqn0ZcKdPBQ6dtc(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.rateArt(
        this.page.arr[bh.input.itemIndex]
      );

      //appendnew_next_sd_tdqn0ZcKdPBQ6dtc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tdqn0ZcKdPBQ6dtc');
    }
  }

  sd_RYcYabq2sHvyeHHt(bh) {
    try {
      const page = this.page;
      page.arr = page.data.filter((item) =>
        item.artistName.includes(bh.input.searchString)
      );
      //appendnew_next_sd_RYcYabq2sHvyeHHt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RYcYabq2sHvyeHHt');
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
