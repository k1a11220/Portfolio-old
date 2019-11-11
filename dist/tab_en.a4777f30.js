// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/tab_en.js":[function(require,module,exports) {
var MODAL_TITLE = document.querySelector(".modal_title");
var MODAL_INFO = document.querySelector(".modal_info");
var MODAL_IMG_1 = document.querySelector("#modal_img_1");
var MODAL_IMG_2 = document.querySelector("#modal_img_2");
var MODAL_IMG_3 = document.querySelector("#modal_img_3");
var MODAL_1 = document.querySelector("#works_1");
var MODAL_2 = document.querySelector("#works_2");
var MODAL_3 = document.querySelector("#works_3");
var MODAL_4 = document.querySelector("#works_4");
var MODAL_5 = document.querySelector("#works_5");
var MODAL_6 = document.querySelector("#works_6");
var OTHER_MODAL_1 = document.querySelector("#other_1");
var OTHER_MODAL_2 = document.querySelector("#other_2");
var OTHER_MODAL_3 = document.querySelector("#other_3");
var OTHER_MODAL_4 = document.querySelector("#other_4");
var OTHER_MODAL_5 = document.querySelector("#other_5");

function ChangeModal() {
  MODAL_1.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = WORKS_1.title;
    MODAL_INFO.innerHTML = WORKS_1.info;
    MODAL_IMG_1.src = WORKS_1.cover;
    MODAL_IMG_2.src = WORKS_1.cover_2;
    MODAL_IMG_3.src = WORKS_1.cover_3;
  });
  MODAL_2.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = WORKS_2.title;
    MODAL_INFO.innerHTML = WORKS_2.info;
    MODAL_IMG_1.src = WORKS_2.cover;
    MODAL_IMG_2.src = WORKS_2.cover_2;
    MODAL_IMG_3.src = WORKS_2.cover_3;
  });
  MODAL_3.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = WORKS_3.title;
    MODAL_INFO.innerHTML = WORKS_3.info;
    MODAL_IMG_1.src = WORKS_3.cover;
    MODAL_IMG_2.src = WORKS_3.cover_2;
    MODAL_IMG_3.src = WORKS_3.cover_3;
  });
  MODAL_4.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = WORKS_4.title;
    MODAL_INFO.innerHTML = WORKS_4.info;
    MODAL_IMG_1.src = WORKS_4.cover;
    MODAL_IMG_2.src = WORKS_4.cover_2;
    MODAL_IMG_3.src = WORKS_4.cover_3;
  });
  MODAL_5.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = WORKS_5.title;
    MODAL_INFO.innerHTML = WORKS_5.info;
    MODAL_IMG_1.src = WORKS_5.cover;
    MODAL_IMG_2.src = WORKS_5.cover_2;
    MODAL_IMG_3.src = WORKS_5.cover_3;
  });
  MODAL_6.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = WORKS_6.title;
    MODAL_INFO.innerHTML = WORKS_6.info;
    MODAL_IMG_1.src = WORKS_6.cover;
    MODAL_IMG_2.src = WORKS_6.cover_2;
    MODAL_IMG_3.src = WORKS_6.cover_3;
  });
  OTHER_MODAL_1.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = OTHER_1.title;
    MODAL_INFO.innerHTML = OTHER_1.info;
    MODAL_IMG_1.src = OTHER_1.cover;
    MODAL_IMG_2.src = OTHER_1.cover_2;
    MODAL_IMG_3.src = OTHER_1.cover_3;
  });
  OTHER_MODAL_2.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = OTHER_2.title;
    MODAL_INFO.innerHTML = OTHER_2.info;
    MODAL_IMG_1.src = OTHER_2.cover;
    MODAL_IMG_2.src = OTHER_2.cover_2;
    MODAL_IMG_3.src = OTHER_2.cover_3;
  });
  OTHER_MODAL_3.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = OTHER_3.title;
    MODAL_INFO.innerHTML = OTHER_3.info;
    MODAL_IMG_1.src = OTHER_3.cover;
    MODAL_IMG_2.src = OTHER_3.cover_2;
    MODAL_IMG_3.src = OTHER_3.cover_3;
  });
  OTHER_MODAL_4.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = OTHER_4.title;
    MODAL_INFO.innerHTML = OTHER_4.info;
    MODAL_IMG_1.src = OTHER_4.cover;
    MODAL_IMG_2.src = OTHER_4.cover_2;
    MODAL_IMG_3.src = OTHER_4.cover_3;
  });
  OTHER_MODAL_5.addEventListener("click", function () {
    MODAL_TITLE.innerHTML = OTHER_5.title;
    MODAL_INFO.innerHTML = OTHER_5.info;
    MODAL_IMG_1.src = OTHER_5.cover;
    MODAL_IMG_2.src = OTHER_5.cover_2;
    MODAL_IMG_3.src = OTHER_5.cover_3;
  });
}
/*모달 내용*/


var WORKS_1 = {
  title: "fromis_9's lightstick Design",
  info: "I got inspiration by fromis_9's first single album 'Fun Factory'. It means nine-side figure make one flame like Flame Torch.",
  cover: "./media/works_1.png",
  cover_2: "./media/works_1-1.png",
  cover_3: "./media/works_1-2.png"
};
var WORKS_2 = {
  title: "Smartphone case for blind",
  info: "To facilitate the use of smartphones by people with visual impairments. Design to touch errors are minimized and keyboards are designed to be used upside down.",
  cover: "./media/works_2.png",
  cover_2: "./media/works_2-1.png",
  cover_3: "./media/works_2-2.png"
};
var WORKS_3 = {
  title: "Design mirr One",
  info: "mirr One, a smart mirror. Using mirr.OS, it helps you manage your schedule for modern people in need of scheduling. It also dramatically reduced unit prices, making it more accessible to consumers.",
  cover: "./media/works_3.png",
  cover_2: "./media/works_3-1.png",
  cover_3: "./media/works_3-2.png"
};
var WORKS_4 = {
  title: "Drawing mold design",
  info: "The drawing mold was designed to produce cup-shaped products. The design period was designed for about two weeks considering the thickness of the material, etc.",
  cover: "./media/works_4.png",
  cover_2: "./media/works_4-1.png",
  cover_3: "./media/works_4-2.png"
};
var WORKS_5 = {
  title: "Blanking mold design",
  info: "The mold was designed for blanking and piercing. And this project was actually produced using acrylic as MCT.",
  cover: "./media/works_5.png",
  cover_2: "./media/works_5-1.jpg",
  cover_3: "./media/works_5-2.jpg"
};
var WORKS_6 = {
  title: "Finedust mask design",
  info: "This project is designed to allow users to use high-performance masks without external power supply by applying abdominal breathing.",
  cover: "./media/works_6.png",
  cover_2: "./media/works_6-1.png",
  cover_3: "./media/works_6-2.png"
};
var OTHER_1 = {
  title: "남북 공동선언 1주년 판문점 취재",
  info: "남북 공동선언 1주년 기념행사 취재입니다. '우리가 가야 할 그 길' 이라는 제목으로 특집기사를 작성했습니다.",
  cover: "./media/other_1.png",
  cover_2: "",
  cover_3: ""
};
var OTHER_2 = {
  title: "mirr One UI design",
  info: "Iot S/W co-developed with German development team Glancr. We are developing user-friendly UI, AI assistant and stylus calendar functions to enable smooth use in Korea.",
  cover: "./media/other_2.png",
  cover_2: "",
  cover_3: ""
};
var OTHER_3 = {
  title: "mirr.OS translation",
  info: "To make the mirr.OS of Glancr comfortable for Korean users. Translation work and api modification etc.",
  cover: "./media/other_3.png",
  cover_2: "",
  cover_3: ""
};
var OTHER_4 = {
  title: "May KING class",
  info: "STUDIO's social contribution project. Design was relatively difficult for non-engineers to reach. So May KING provides students with free design class. Currently, I am enrolled in Gyeonggi Dream School program, and I am currently in charge of operation and design.",
  cover: "./media/other_4.jpg",
  cover_2: "./media/other_4-1.jpg",
  cover_3: "./media/other_4-2.jpg"
};
var OTHER_5 = {
  title: "STUDIO",
  info: "STUDIO is a team created to establish social enterprises with the aim of solving specific social problems. The recent Fourth Industrial Revolution. We decided to add our little strength to those who would not be able to adapt to the new trend of the Fourth Industrial Revolution. So we started STUDIO, a team that was able to balance the world based on the revenue from selling products.",
  cover: "./media/works_5.png",
  cover_2: "",
  cover_3: ""
};
ChangeModal();
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
<<<<<<< HEAD
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60726" + '/');
=======
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60701" + '/');
>>>>>>> 2744b5d1d5f0987599c28e9d35139bef2d58d487

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/tab_en.js"], null)
//# sourceMappingURL=/tab_en.a4777f30.js.map