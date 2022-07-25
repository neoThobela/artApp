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
import { NgxStarRatingModule } from 'ngx-star-rating'; //_splitter_
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-artists',
  templateUrl: './artists.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class artistsComponent {
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
      this.sd_2SVflhMtizgk2h0N(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2SVflhMtizgk2h0N(bh) {
    try {
      bh = this.sd_7vgsKxSAvkQpW2r2(bh);
      //appendnew_next_sd_2SVflhMtizgk2h0N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2SVflhMtizgk2h0N');
    }
  }

  //appendnew_flow_artistsComponent_start

  sd_7vgsKxSAvkQpW2r2(bh) {
    try {
      this.page.rating3 = undefined;
      this.page.form = undefined;
      this.page.rating = undefined;
      bh = this.sd_ygiJ8NbRnUCRXOXN(bh);
      //appendnew_next_sd_7vgsKxSAvkQpW2r2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7vgsKxSAvkQpW2r2');
    }
  }

  sd_ygiJ8NbRnUCRXOXN(bh) {
    try {
      bh = this.sd_fHCzXenQL5WRE6SA(bh);
      //appendnew_next_sd_ygiJ8NbRnUCRXOXN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ygiJ8NbRnUCRXOXN');
    }
  }

  sd_fHCzXenQL5WRE6SA(bh) {
    try {
      bh = this.sd_GTUERVfTdX34Gy3I(bh);
      //appendnew_next_sd_fHCzXenQL5WRE6SA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fHCzXenQL5WRE6SA');
    }
  }

  sd_GTUERVfTdX34Gy3I(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_CmbqSJ43WDrRO0hX(bh);
      //appendnew_next_sd_GTUERVfTdX34Gy3I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GTUERVfTdX34Gy3I');
    }
  }

  sd_CmbqSJ43WDrRO0hX(bh) {
    try {
      const page = this.page;
      page.rating3 = 0;
      page.form = page.fb.group({
        rating: ['', Validators.required],
      });

      //appendnew_next_sd_CmbqSJ43WDrRO0hX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CmbqSJ43WDrRO0hX');
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
  //appendnew_flow_artistsComponent_Catch
}
