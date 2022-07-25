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
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-events',
  templateUrl: './events.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class eventsComponent {
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
      this.sd_t7JqvqYBQ1jY3ouY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_t7JqvqYBQ1jY3ouY(bh) {
    try {
      bh = this.sd_H5PnXfZdEzINvowk(bh);
      //appendnew_next_sd_t7JqvqYBQ1jY3ouY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t7JqvqYBQ1jY3ouY');
    }
  }

  showLocation(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_b0Ii2eB72AZKfp5C(bh);
      //appendnew_next_showLocation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1cLZuSQX2AjzHqEG');
    }
  }

  //appendnew_flow_eventsComponent_start

  sd_H5PnXfZdEzINvowk(bh) {
    try {
      this.page.address = {};
      this.page.mapURL = undefined;
      this.page.events = [];
      bh = this.sd_T8PQs0cdECEDNWeE(bh);
      //appendnew_next_sd_H5PnXfZdEzINvowk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H5PnXfZdEzINvowk');
    }
  }

  sd_T8PQs0cdECEDNWeE(bh) {
    try {
      let outputVariables = this.showLocation();

      bh = this.getEvents(bh);
      //appendnew_next_sd_T8PQs0cdECEDNWeE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T8PQs0cdECEDNWeE');
    }
  }

  async getEvents(bh) {
    try {
      const connectToDBInstance: connectToDB =
        this.__page_injector__.get(connectToDB);

      let outputVariables = await connectToDBInstance.getAllEvents();
      this.page.events = outputVariables.local.events;

      bh = this.sd_7clM157FlVIvV0nY(bh);
      //appendnew_next_getEvents
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V8fmy2oQGNI3ctBJ');
    }
  }

  sd_7clM157FlVIvV0nY(bh) {
    try {
      this.page.dom = this.__page_injector__.get(DomSanitizer);
      bh = this.sd_ugNriIHmhQooU2wC(bh);
      //appendnew_next_sd_7clM157FlVIvV0nY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7clM157FlVIvV0nY');
    }
  }

  sd_ugNriIHmhQooU2wC(bh) {
    try {
      const page = this.page; // page.events.forEach(item => item['videoUrl'] = `https://www.youtube.com/embed/PuDB4KwGhHA/${item['video' ]}`)
      page.events.forEach(
        (item) =>
          (item['videoUrl'] = page.dom.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/PuDB4KwGhHA/${item['video']}`
          ))
      );
      //appendnew_next_sd_ugNriIHmhQooU2wC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ugNriIHmhQooU2wC');
    }
  }

  sd_b0Ii2eB72AZKfp5C(bh) {
    try {
      const page = this.page; // page.address = {
      //     street: "Brookline",
      //     num: "123",
      //     city: "NewYork"
      //   };
      //   page.mapsURL = `https://maps.google.com/maps?q=${page.address.street}%20${page.address.num}%20%${page.address.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;

      //appendnew_next_sd_b0Ii2eB72AZKfp5C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b0Ii2eB72AZKfp5C');
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
  //appendnew_flow_eventsComponent_Catch
}
