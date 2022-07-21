/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class connectToDB {
  public artistsByCategory: any;
  public allArtists: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_connectToDB

  async getCategory(category = '', ...others) {
    try {
      var bh: any = {
        input: {
          category: category,
        },
        local: {
          client_result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_bmya1kh9KTqdey9i(bh);
      //appendnew_next_getCategory
      return (
        // formatting output variables
        {
          input: {},
          local: {
            client_result: bh.local.client_result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yAnCQFNnDv9epwv0');
    }
  }

  async getAllArtists(artist: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          artist: artist,
        },
        local: {
          client_result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_adRrqUGfQF3vHhJq(bh);
      //appendnew_next_getAllArtists
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wWLt0L5xLxnb37WB');
    }
  }

  //appendnew_flow_connectToDB_start

  async sd_bmya1kh9KTqdey9i(bh) {
    try {
      console.log('client', bh);
      bh.local.url = 'http://localhost:8081/api/get-cat/' + bh.input.category;
      bh = await this.sd_LAk8ELSW9719prT1(bh);
      //appendnew_next_sd_bmya1kh9KTqdey9i
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bmya1kh9KTqdey9i');
    }
  }

  async sd_LAk8ELSW9719prT1(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.client_result = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = await this.sd_24okF4nCWjeKVuZt(bh);
      //appendnew_next_sd_LAk8ELSW9719prT1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LAk8ELSW9719prT1');
    }
  }

  async sd_24okF4nCWjeKVuZt(bh) {
    try {
      this.artistsByCategory = bh.local.client_result;
      //appendnew_next_sd_24okF4nCWjeKVuZt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_24okF4nCWjeKVuZt');
    }
  }

  async sd_adRrqUGfQF3vHhJq(bh) {
    try {
      console.log('client', bh);
      bh.local.url = 'http://localhost:8081/api/get-all-artist';
      bh = await this.sd_Z4NxSGEOg73XGxlQ(bh);
      //appendnew_next_sd_adRrqUGfQF3vHhJq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_adRrqUGfQF3vHhJq');
    }
  }

  async sd_Z4NxSGEOg73XGxlQ(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.client_result = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = await this.sd_WxzPmmFjxxRk5xHv(bh);
      //appendnew_next_sd_Z4NxSGEOg73XGxlQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z4NxSGEOg73XGxlQ');
    }
  }

  async sd_WxzPmmFjxxRk5xHv(bh) {
    try {
      this.allArtists = bh.local.client_result;
      //appendnew_next_sd_WxzPmmFjxxRk5xHv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WxzPmmFjxxRk5xHv');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_connectToDB_Catch
}
