const a0_0x3b26d6=a0_0x1997;(function(_0x149ca6,_0x4dfb2f){const _0x5a09b6=a0_0x1997,_0x3f7acc=_0x149ca6();while(!![]){try{const _0x232a7e=parseInt(_0x5a09b6(0x7c))/0x1+parseInt(_0x5a09b6(0x74))/0x2+-parseInt(_0x5a09b6(0x89))/0x3*(parseInt(_0x5a09b6(0x7d))/0x4)+parseInt(_0x5a09b6(0x6c))/0x5*(-parseInt(_0x5a09b6(0x8c))/0x6)+-parseInt(_0x5a09b6(0x88))/0x7*(-parseInt(_0x5a09b6(0x70))/0x8)+parseInt(_0x5a09b6(0x76))/0x9+-parseInt(_0x5a09b6(0x8b))/0xa;if(_0x232a7e===_0x4dfb2f)break;else _0x3f7acc['push'](_0x3f7acc['shift']());}catch(_0x578b0f){_0x3f7acc['push'](_0x3f7acc['shift']());}}}(a0_0x4804,0x282f6));import a0_0x38ff16 from'express';import a0_0x5c2767 from'mongoose';import a0_0x830d37 from'cors';function a0_0x1997(_0x544260,_0x3c0a4b){const _0x4804e9=a0_0x4804();return a0_0x1997=function(_0x19973e,_0xa9b83c){_0x19973e=_0x19973e-0x6c;let _0x13e0fc=_0x4804e9[_0x19973e];return _0x13e0fc;},a0_0x1997(_0x544260,_0x3c0a4b);}const validator=require(a0_0x3b26d6(0x6d))[a0_0x3b26d6(0x8e)]({'passError':!![]});import a0_0x377477 from'./controllers/tasks';import a0_0x5d47e3 from'./controllers/users';import a0_0x3d1c77 from'./schemas/task';import a0_0x4fbe6e from'./schemas/user';import'dotenv/config';import a0_0x59b3d6 from'./middlewares/auth';const app=a0_0x38ff16();function a0_0x4804(){const _0x29de2a=['body','user','5antrML','express-joi-validation','status','get','408fyDBSu','/tasks/:task_id/todo','use','create','526120LLyVML','log','2847609WjpmEd','error','/tasks/:task_id/done','post','exports','/tasks/:task_id','158509SxTrZR','4596KGUuDd','done','MONGO_URI','Api\x20do\x20Mark85\x20online\x20na\x20porta:\x20','/tasks','type','auth','task_id','json','params','delete','23170NudGjl','705oFCRTl','/users','4686310UpRzdZ','21216IVAvRq','task','createValidator','isJoi','listen'];a0_0x4804=function(){return _0x29de2a;};return a0_0x4804();}app['use'](a0_0x830d37({'origins':['*'],'methods':['*'],'allowedHeaders':['*']})),app[a0_0x3b26d6(0x72)](a0_0x38ff16[a0_0x3b26d6(0x85)]()),app[a0_0x3b26d6(0x72)](a0_0x38ff16['urlencoded']({'extended':!![]})),a0_0x5c2767['connect'](process['env'][a0_0x3b26d6(0x7f)],{'useNewUrlParser':!![],'useUnifiedTopology':!![]}),app[a0_0x3b26d6(0x79)](a0_0x3b26d6(0x8a),validator[a0_0x3b26d6(0x91)](a0_0x4fbe6e[a0_0x3b26d6(0x92)]),a0_0x5d47e3[a0_0x3b26d6(0x73)]),app['post']('/sessions',validator[a0_0x3b26d6(0x91)](a0_0x4fbe6e['auth']),a0_0x5d47e3[a0_0x3b26d6(0x83)]),app[a0_0x3b26d6(0x72)](a0_0x59b3d6),app[a0_0x3b26d6(0x6f)]('/tasks',a0_0x377477['list']),app[a0_0x3b26d6(0x6f)](a0_0x3b26d6(0x7b),validator['params'](a0_0x3d1c77[a0_0x3b26d6(0x84)]),a0_0x377477[a0_0x3b26d6(0x6f)]),app[a0_0x3b26d6(0x87)](a0_0x3b26d6(0x7b),validator[a0_0x3b26d6(0x86)](a0_0x3d1c77[a0_0x3b26d6(0x84)]),a0_0x377477['remove']),app['post'](a0_0x3b26d6(0x81),validator[a0_0x3b26d6(0x91)](a0_0x3d1c77[a0_0x3b26d6(0x8d)]),a0_0x377477[a0_0x3b26d6(0x73)]),app['put'](a0_0x3b26d6(0x78),validator['params'](a0_0x3d1c77[a0_0x3b26d6(0x84)]),a0_0x377477[a0_0x3b26d6(0x7e)]),app['put'](a0_0x3b26d6(0x71),validator[a0_0x3b26d6(0x86)](a0_0x3d1c77[a0_0x3b26d6(0x84)]),a0_0x377477['todo']);const port=0xd05;app[a0_0x3b26d6(0x72)]((_0x4d1aeb,_0xecaaed,_0x5579ff,_0x53e1a2)=>{const _0x598096=a0_0x3b26d6;if(_0x4d1aeb&&_0x4d1aeb[_0x598096(0x77)]&&_0x4d1aeb['error'][_0x598096(0x8f)])_0x5579ff[_0x598096(0x6e)](0x190)[_0x598096(0x85)]({'type':_0x4d1aeb[_0x598096(0x82)],'message':_0x4d1aeb[_0x598096(0x77)]['toString']()});else _0x4d1aeb?_0x5579ff['status'](0x190)[_0x598096(0x85)]({'type':_0x4d1aeb[_0x598096(0x82)]}):_0x53e1a2(_0x4d1aeb);}),app[a0_0x3b26d6(0x90)](port,()=>{const _0x2d9738=a0_0x3b26d6;console[_0x2d9738(0x75)](_0x2d9738(0x80)+port);}),module[a0_0x3b26d6(0x7a)]=app;