//append_imports_start

import * as sd_fSGlHyApcayt5tky from 'app/sd-services/connectToDB'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_fSGlHyApcayt5tky: sd_fSGlHyApcayt5tky.connectToDB) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
