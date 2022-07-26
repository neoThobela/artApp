let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class connectToDB {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'connectToDB';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new connectToDB(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_connectToDB_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: connectToDB');

    //appendnew_flow_connectToDB_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: connectToDB');

    if (!this.swaggerDocument['paths']['/get-all-artist']) {
      this.swaggerDocument['paths']['/get-all-artist'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/get-all-artist']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/get-all-artist`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_w1zZseXALO8ATi9T(bh);
          //appendnew_next_sd_XEeiVlDrWmnibRSK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XEeiVlDrWmnibRSK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/get-cat/{category}']) {
      this.swaggerDocument['paths']['/get-cat/{category}'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/get-cat/{category}']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/get-cat/:category`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_uK1kbDE8VtMkiYKl(bh);
          //appendnew_next_sd_jx5ceOQrg70zRwXv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jx5ceOQrg70zRwXv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/post-data']) {
      this.swaggerDocument['paths']['/post-data'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/post-data']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/post-data`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_FVeqRu0aHGUzYyFi(bh);
          //appendnew_next_sd_ZXPigPLCF9YMY4jn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZXPigPLCF9YMY4jn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/{username}/&/{password}']) {
      this.swaggerDocument['paths']['/login/{username}/&/{password}'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login/{username}/&/{password}']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/:username&:password`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_aWiSNemwlZQarBhS(bh);
          //appendnew_next_sd_j3S7H1eWawp80Kgc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_j3S7H1eWawp80Kgc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/post-event']) {
      this.swaggerDocument['paths']['/post-event'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/post-event']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/post-event`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_hXHK2Db7tJ6GXtKN(bh);
          //appendnew_next_sd_RIu7KdT0DUAcv9Lc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RIu7KdT0DUAcv9Lc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/get-all-events']) {
      this.swaggerDocument['paths']['/get-all-events'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/get-all-events']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/get-all-events`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_To3WuMqiEOJZykoT(bh);
          //appendnew_next_sd_xC3GJhXbeWykYMLN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xC3GJhXbeWykYMLN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/rate-art']) {
      this.swaggerDocument['paths']['/rate-art'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/rate-art']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/rate-art`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_tuJvqbryFSjphjWH(bh);
          //appendnew_next_sd_ADuicT24eyMEiDQL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ADuicT24eyMEiDQL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_connectToDB_HttpIn
  }
  //   service flows_connectToDB

  //appendnew_flow_connectToDB_start

  async sd_w1zZseXALO8ATi9T(bh) {
    try {
      bh.local.collection = 'art';
      bh.local.query = {};
      bh.local.result = {};
      bh = await this.sd_nnPtRTfPszlGfGdq(bh);
      //appendnew_next_sd_w1zZseXALO8ATi9T
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w1zZseXALO8ATi9T');
    }
  }

  async sd_nnPtRTfPszlGfGdq(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_JoUpTYPvdvSvR3fO',
        bh.local.collection,
        bh.local.query,
        {}
      );
      await this.sd_305srgDOKCI181Ds(bh);
      //appendnew_next_sd_nnPtRTfPszlGfGdq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nnPtRTfPszlGfGdq');
    }
  }

  async sd_305srgDOKCI181Ds(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_305srgDOKCI181Ds');
    }
  }

  async sd_uK1kbDE8VtMkiYKl(bh) {
    try {
      bh.local.collection = 'art';
      bh.local.query = {
        cateory: bh.input.params.category,
      };
      bh.local.result = {};

      console.log(bh.local);
      bh = await this.sd_2Nc2Ry3c4qtmI6ke(bh);
      //appendnew_next_sd_uK1kbDE8VtMkiYKl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uK1kbDE8VtMkiYKl');
    }
  }

  async sd_2Nc2Ry3c4qtmI6ke(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_JoUpTYPvdvSvR3fO',
        bh.local.collection,
        bh.local.query,
        {}
      );
      await this.sd_SZBwnyLSBmuuUZdj(bh);
      //appendnew_next_sd_2Nc2Ry3c4qtmI6ke
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2Nc2Ry3c4qtmI6ke');
    }
  }

  async sd_SZBwnyLSBmuuUZdj(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SZBwnyLSBmuuUZdj');
    }
  }

  async sd_FVeqRu0aHGUzYyFi(bh) {
    try {
      bh.local.collection = 'art';
      bh.query = { artistName: bh.input.body['artistName'] };
      bh = await this.sd_YQ0JehCQtdiRoWWp(bh);
      //appendnew_next_sd_FVeqRu0aHGUzYyFi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FVeqRu0aHGUzYyFi');
    }
  }

  async sd_YQ0JehCQtdiRoWWp(bh) {
    try {
      bh.foundArt = await MongoPersistance.getInstance().find(
        'sd_JoUpTYPvdvSvR3fO',
        bh.local.collection,
        bh.query,
        {}
      );
      bh = await this.sd_nl5KmrRgbUiopKTr(bh);
      //appendnew_next_sd_YQ0JehCQtdiRoWWp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YQ0JehCQtdiRoWWp');
    }
  }

  async sd_nl5KmrRgbUiopKTr(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['lt'](
          bh.foundArt.length,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_WbYmWaO5V1gfjbzC(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_8jcrbzHTvbUD4Iv8(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nl5KmrRgbUiopKTr');
    }
  }

  async sd_WbYmWaO5V1gfjbzC(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_JoUpTYPvdvSvR3fO',
        bh.local.collection,
        bh.input.body,
        {}
      );
      await this.sd_cc82ZEi7yQrOM1cD(bh);
      //appendnew_next_sd_WbYmWaO5V1gfjbzC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WbYmWaO5V1gfjbzC');
    }
  }

  async sd_cc82ZEi7yQrOM1cD(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cc82ZEi7yQrOM1cD');
    }
  }

  async sd_8jcrbzHTvbUD4Iv8(bh) {
    try {
      bh.web.res.status(300).send({ message: 'Artist Name already exists' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8jcrbzHTvbUD4Iv8');
    }
  }

  async sd_aWiSNemwlZQarBhS(bh) {
    try {
      bh.local.collection = 'users';
      bh.local.query = {
        email: bh.input.params.username,
        password: bh.input.params.password,
      };
      bh.local.result = {};

      console.log(bh.local);
      bh = await this.sd_6uRSnbVoa5QXP5Pj(bh);
      //appendnew_next_sd_aWiSNemwlZQarBhS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aWiSNemwlZQarBhS');
    }
  }

  async sd_6uRSnbVoa5QXP5Pj(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_JoUpTYPvdvSvR3fO',
        bh.local.collection,
        bh.local.query,
        {}
      );
      await this.sd_WnZ5ucnbtn154Zgs(bh);
      //appendnew_next_sd_6uRSnbVoa5QXP5Pj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6uRSnbVoa5QXP5Pj');
    }
  }

  async sd_WnZ5ucnbtn154Zgs(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WnZ5ucnbtn154Zgs');
    }
  }

  async sd_hXHK2Db7tJ6GXtKN(bh) {
    try {
      bh.collection = 'events';
      bh = await this.sd_NIEykNI3wF92btgK(bh);
      //appendnew_next_sd_hXHK2Db7tJ6GXtKN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hXHK2Db7tJ6GXtKN');
    }
  }

  async sd_NIEykNI3wF92btgK(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_JoUpTYPvdvSvR3fO',
        bh.collection,
        bh.input.body,
        {}
      );
      await this.sd_fESMRU3GGcyH3Cke(bh);
      //appendnew_next_sd_NIEykNI3wF92btgK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NIEykNI3wF92btgK');
    }
  }

  async sd_fESMRU3GGcyH3Cke(bh) {
    try {
      bh.web.res.status(200).send({ message: 'Event added successfully' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fESMRU3GGcyH3Cke');
    }
  }

  async sd_To3WuMqiEOJZykoT(bh) {
    try {
      bh.local.collection = 'events';
      bh = await this.sd_eOFPLs3ByRXPRKBf(bh);
      //appendnew_next_sd_To3WuMqiEOJZykoT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_To3WuMqiEOJZykoT');
    }
  }

  async sd_eOFPLs3ByRXPRKBf(bh) {
    try {
      bh.local.events = await MongoPersistance.getInstance().find(
        'sd_JoUpTYPvdvSvR3fO',
        bh.local.collection,
        bh.local.query,
        {}
      );
      await this.sd_SQvf7qqQxfO8IUPA(bh);
      //appendnew_next_sd_eOFPLs3ByRXPRKBf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eOFPLs3ByRXPRKBf');
    }
  }

  async sd_SQvf7qqQxfO8IUPA(bh) {
    try {
      bh.web.res.status(200).send(bh.local.events);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SQvf7qqQxfO8IUPA');
    }
  }

  async sd_tuJvqbryFSjphjWH(bh) {
    try {
      bh.collection = 'art';
      bh.filter = { artistName: bh.input.body['artistName'] };

      delete bh.input.body['_id'];
      bh.input.body = { $set: { rate: bh.input.body['rate'] } };
      bh = await this.sd_CwAjNTeGI2m4JTDU(bh);
      //appendnew_next_sd_tuJvqbryFSjphjWH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tuJvqbryFSjphjWH');
    }
  }

  async sd_CwAjNTeGI2m4JTDU(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_JoUpTYPvdvSvR3fO',
        bh.collection,
        bh.filter,
        bh.input.body,
        {}
      );
      await this.sd_3QItPJRZqLlVUREG(bh);
      //appendnew_next_sd_CwAjNTeGI2m4JTDU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CwAjNTeGI2m4JTDU');
    }
  }

  async sd_3QItPJRZqLlVUREG(bh) {
    try {
      bh.web.res.status(200).send({ message: 'Art updated successfully' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3QItPJRZqLlVUREG');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_connectToDB_Catch
}
