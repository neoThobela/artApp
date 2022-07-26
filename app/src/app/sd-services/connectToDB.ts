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
  public user: any;

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
          local: {
            client_result: bh.local.client_result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wWLt0L5xLxnb37WB');
    }
  }

  async pOST(myForm: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          myForm: myForm,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_cczUAnqg4OdVfJtA(bh);
      //appendnew_next_pOST
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oAQQhRBBg9AKWjcy');
    }
  }

  async loginClient(username = '', password = '', ...others) {
    try {
      var bh: any = {
        input: {
          username: username,
          password: password,
        },
        local: {
          client_result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_0peb57TbAKwOzshu(bh);
      //appendnew_next_loginClient
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
      return await this.errorHandler(bh, e, 'sd_rQbk3urIJnE5Xf9w');
    }
  }

  async pOSTEvents(event: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          event: event,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_iUhwqoRvNlDPSZgg(bh);
      //appendnew_next_pOSTEvents
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FpiNuNXNrYr17VXo');
    }
  }

  async getAllEvents(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          events: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_IjRs44KcSZQO3Yar(bh);
      //appendnew_next_getAllEvents
      return (
        // formatting output variables
        {
          input: {},
          local: {
            events: bh.local.events,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GyvxnvddVjOUkUGY');
    }
  }

  async rateArt(art: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          art: art,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_NoVIpWsl1u7TGCKR(bh);
      //appendnew_next_rateArt
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VX0XWlym1mvEim7t');
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

  async sd_cczUAnqg4OdVfJtA(bh) {
    try {
      console.log('client', bh);
      bh.local.url = 'http://localhost:8081/api/post-data';
      bh = await this.sd_PbCehRYeSVMecPyY(bh);
      //appendnew_next_sd_cczUAnqg4OdVfJtA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cczUAnqg4OdVfJtA');
    }
  }

  async sd_PbCehRYeSVMecPyY(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.myForm,
      };
      bh.local.client_result = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = await this.sd_p0csbj6fGBQhAYTR(bh);
      //appendnew_next_sd_PbCehRYeSVMecPyY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PbCehRYeSVMecPyY');
    }
  }

  async sd_p0csbj6fGBQhAYTR(bh) {
    try {
      this.allArtists = bh.local.client_result;
      //appendnew_next_sd_p0csbj6fGBQhAYTR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p0csbj6fGBQhAYTR');
    }
  }

  async sd_0peb57TbAKwOzshu(bh) {
    try {
      console.log('client', bh);
      bh.local.url =
        'http://localhost:8081/api/login/' +
        bh.input.username +
        '&' +
        bh.input.password;
      bh = await this.sd_f4tGHJ2G2hOSqDhK(bh);
      //appendnew_next_sd_0peb57TbAKwOzshu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0peb57TbAKwOzshu');
    }
  }

  async sd_f4tGHJ2G2hOSqDhK(bh) {
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
      bh = await this.sd_OF6928yxaXIWIFe3(bh);
      //appendnew_next_sd_f4tGHJ2G2hOSqDhK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f4tGHJ2G2hOSqDhK');
    }
  }

  async sd_OF6928yxaXIWIFe3(bh) {
    try {
      this.user = bh.local.client_result;
      bh = await this.sd_f6EKoS2JyNgVXK7r(bh);
      //appendnew_next_sd_OF6928yxaXIWIFe3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OF6928yxaXIWIFe3');
    }
  }

  async sd_f6EKoS2JyNgVXK7r(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/display');
      await this.router.navigate(
        [this.sdService.formatPathWithParams(path, undefined)],
        {
          queryParams: Object.assign(qprm, ''),
        }
      );
      //appendnew_next_sd_f6EKoS2JyNgVXK7r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f6EKoS2JyNgVXK7r');
    }
  }

  async sd_iUhwqoRvNlDPSZgg(bh) {
    try {
      console.log('client', bh);
      bh.local.url = 'http://localhost:8081/api/post-event';
      bh.input.body = bh.input.event;
      bh = await this.sd_mJcsAhYzEN47ipDh(bh);
      //appendnew_next_sd_iUhwqoRvNlDPSZgg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iUhwqoRvNlDPSZgg');
    }
  }

  async sd_mJcsAhYzEN47ipDh(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_9ToCEl7SWZg2kmwp(bh);
      //appendnew_next_sd_mJcsAhYzEN47ipDh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mJcsAhYzEN47ipDh');
    }
  }

  async sd_9ToCEl7SWZg2kmwp(bh) {
    try {
      this.matSnackBar.open(bh.local.result.message, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_9ToCEl7SWZg2kmwp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9ToCEl7SWZg2kmwp');
    }
  }

  async sd_IjRs44KcSZQO3Yar(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/get-all-events';
      bh = await this.sd_ZAYbXAnkrEdZ9V94(bh);
      //appendnew_next_sd_IjRs44KcSZQO3Yar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IjRs44KcSZQO3Yar');
    }
  }

  async sd_ZAYbXAnkrEdZ9V94(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.events = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_ZAYbXAnkrEdZ9V94
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZAYbXAnkrEdZ9V94');
    }
  }

  async sd_NoVIpWsl1u7TGCKR(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/rate-art';
      bh.input.body = bh.input.art;
      bh = await this.sd_20A0rHCTdiBjKXqb(bh);
      //appendnew_next_sd_NoVIpWsl1u7TGCKR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NoVIpWsl1u7TGCKR');
    }
  }

  async sd_20A0rHCTdiBjKXqb(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_20A0rHCTdiBjKXqb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_20A0rHCTdiBjKXqb');
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
