import { PARAMS } from "./settings";

export const blank = function () {};
// init: function () {
//   var f = function (data) {
//     if (!PARAMS.DOMAIN) PARAMS.DOMAIN = data.DOMAIN;
//     if (!PARAMS.PATH) PARAMS.PATH = data.PATH;
//     if (!PARAMS.LANG) PARAMS.LANG = data.LANG;
//     if (!PARAMS.PLACEMENT) PARAMS.PLACEMENT = data.PLACEMENT;

//     PARAMS.PROTOCOL = data.PROTOCOL;
//     PARAMS.DOMAIN = PARAMS.DOMAIN.replace(/\:(80|443)$/, "");

//     if (!!data.AUTH_ID) {
//       PARAMS.AUTH_ID = data.AUTH_ID;
//       PARAMS.REFRESH_ID = data.REFRESH_ID;
//       PARAMS.AUTH_EXPIRES = new Date().valueOf() + data.AUTH_EXPIRES * 1000;
//       PARAMS.IS_ADMIN = !!data.IS_ADMIN;
//       PARAMS.MEMBER_ID = data.MEMBER_ID || "";
//     }

//     if (!PARAMS.USER_OPTIONS) PARAMS.USER_OPTIONS = data.USER_OPTIONS;

//     if (!PARAMS.APP_OPTIONS) PARAMS.APP_OPTIONS = data.APP_OPTIONS;

//     if (!PARAMS.PLACEMENT_OPTIONS)
//       PARAMS.PLACEMENT_OPTIONS = data.PLACEMENT_OPTIONS;

//     isInit = true;

//     var doInit = function () {
//       BX24.init = function (fn) {
//         util.defer(fn).call(document);
//       };

//       if (!data.INSTALL) {
//         BX24.installFinish = util.blank;
//       }

//       var fn,
//         i = 0;
//       while (initList && (fn = initList[i++])) {
//         BX24.init(fn);
//       }
//     };

//     if (!!data.FIRST_RUN && installList.length > 0) {
//       util.install(doInit);
//     } else {
//       doInit();
//     }
//   };

//   if (!PARAMS.DOMAIN || !PARAMS.LANG || !PARAMS.AUTH_ID) {
//     sendMessage("getInitData", f);
//   } else {
//     f(PARAMS);
//   }

//   util.init = util.blank;
// },

// install: function (cb) {
//   var installer = null,
//     installFinish = function () {
//       util.install(cb);
//     };

//   installer = installList.shift();
//   if (!!installer) {
//     if (util.type.isFunction(installer)) {
//       try {
//         BX24.installFinish = installFinish;
//         installer.call(document); // no defer!
//       } catch (e) {
//         alert("Installation failed!");
//         console.log(e);
//       }
//     } else {
//       BX24.loadScript(installer, function () {
//         BX24.installFinish = installFinish;
//       });
//     }
//   } else {
//     BX24.installFinish = util.install = util.blank;
//     sendMessage("setInstall", { install: true });

//     util.defer(cb).call(document);
//   }
// },

// ready: function () {
//   if (document.readyState === "complete") {
//     return util.runReady();
//   }

//   var __readyHandler;
//   if (document.addEventListener) {
//     __readyHandler = function () {
//       document.removeEventListener("DOMContentLoaded", __readyHandler, false);
//       util.runReady();
//     };
//     document.addEventListener("DOMContentLoaded", __readyHandler, false);
//     window.addEventListener("load", util.runReady, false);
//   } else if (document.attachEvent) {
//     __readyHandler = function () {
//       if (document.readyState === "complete") {
//         document.detachEvent("onreadystatechange", __readyHandler);
//         util.runReady();
//       }
//     };
//     document.attachEvent("onreadystatechange", __readyHandler);
//     window.attachEvent("onload", util.runReady);
//   }

//   util.ready = util.blank;

//   return null;
// },

// runReady: function () {
//   if (!isReady) {
//     if (!document.body) return setTimeout(util.runReady, 15);

//     isReady = true;

//     BX24.ready = function (handler) {
//       if (util.type.isFunction(handler)) {
//         util.defer(handler).call(document);
//       }
//     };

//     if (readyList && readyList.length > 0) {
//       var fn,
//         i = 0;
//       while (readyList && (fn = readyList[i++])) {
//         BX24.ready(fn);
//       }

//       readyList = null;
//     }
//   }

//   return null;
// },

// delegate: function (func, thisObject) {
//   if (!func || !thisObject) return func;

//   return function () {
//     var cur = proxyContext;
//     proxyContext = this;
//     var res = func.apply(thisObject, arguments);
//     proxyContext = cur;
//     return res;
//   };
// },

// initObjectProxy: function (thisObject) {
//   if (typeof thisObject["__proxy_id_" + proxySalt] == "undefined") {
//     thisObject["__proxy_id_" + proxySalt] = proxyList.length;
//     proxyList[thisObject["__proxy_id_" + proxySalt]] = {};
//   }
// },

// defer: function (fn, t) {
//   return function () {
//     var arg = arguments;
//     setTimeout(function () {
//       fn.apply(this, arg);
//     }, t || 10);
//   };
// },

export const split = function (s, ss) {
  var r = s.split(ss);
  return [r[0], r.slice(1).join(ss)];
}

// clone: function (obj, bCopyObj) {
//   var _obj, i, l;
//   if (bCopyObj !== false) bCopyObj = true;

//   if (obj === null) return null;

//   if (util.type.isDomNode(obj)) {
//     _obj = obj.cloneNode(bCopyObj);
//   } else if (typeof obj == "object") {
//     if (util.type.isArray(obj)) {
//       _obj = [];
//       for (i = 0, l = obj.length; i < l; i++) {
//         if (typeof obj[i] == "object" && bCopyObj)
//           _obj[i] = util.clone(obj[i], bCopyObj);
//         else _obj[i] = obj[i];
//       }
//     } else {
//       _obj = {};
//       if (obj.constructor) {
//         if (obj.constructor === Date) _obj = new Date(obj);
//         else _obj = new obj.constructor();
//       }

//       for (i in obj) {
//         if (typeof obj[i] == "object" && bCopyObj)
//           _obj[i] = util.clone(obj[i], bCopyObj);
//         else _obj[i] = obj[i];
//       }
//     }
//   } else {
//     _obj = obj;
//   }

//   return _obj;
// },

const charsList = '0123456789abcdefghijklmnopqrstuvwxyz';
export const uniqid = function () {
  var s = "";
  for (var i = 0; i < 32; i++)
    s += charsList[Math.round(Math.random() * (charsList.length - 1))];
  return s;
}

// datatype utility
export const type = {
  isString: function (item) {
    return item === ""
      ? true
      : item
      ? typeof item == "string" || item instanceof String
      : false;
  },
  isNotEmptyString: function (item) {
    return type.isString(item) ? item.length > 0 : false;
  },
  isBoolean: function (item) {
    return item === true || item === false;
  },
  isNumber: function (item) {
    return item === 0
      ? true
      : item
      ? typeof item == "number" || item instanceof Number
      : false;
  },
  isFunction: function (item) {
    return item === null
      ? false
      : typeof item == "function" || item instanceof Function;
  },
  isElementNode: function (item) {
    return (
      item &&
      typeof item == "object" &&
      "nodeType" in item &&
      item.nodeType == 1 &&
      item.tagName &&
      item.tagName.toUpperCase() != "SCRIPT" &&
      item.tagName.toUpperCase() != "STYLE" &&
      item.tagName.toUpperCase() != "LINK"
    );
  },
  isDomNode: function (item) {
    return item && typeof item == "object" && "nodeType" in item;
  },
  isObject: function (item) {
    return item && (typeof item == "object" || item instanceof Object)
      ? true
      : false;
  },
  isArray: function (item) {
    return item && Object.prototype.toString.call(item) == "[object Array]";
  },
  isDate: function (item) {
    return item && Object.prototype.toString.call(item) == "[object Date]";
  },
};
