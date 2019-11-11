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
})({"dist/lumenbox.min.js":[function(require,module,exports) {
var define;
!function (u, c) {
  "use strict";

  function n(t) {
    this.gallery = [], this.currentImageIndex = void 0, this.init(), this.options = Object.assign({}, this.constructor.defaults), this.option(t);
  }

  "undefined" != typeof module && void 0 !== module.exports ? module.exports = n : "function" == typeof define && define.amd ? define([], function () {
    return n;
  }) : u.Lumenbox = n, n.easing = {
    linear: function linear(t) {
      return t;
    },
    quadratic: function quadratic(t) {
      return Math.pow(t, 2);
    },
    swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    },
    circ: function circ(t) {
      return 1 - Math.sin(Math.acos(t));
    },
    back: function back(t, e) {
      return Math.pow(t, 2) * ((e + 1) * t - e);
    },
    bounce: function bounce(t) {
      for (var e = 0, n = 1;; e += n, n /= 2) {
        if ((7 - 4 * e) / 11 <= t) return -Math.pow((11 - 6 * e - 11 * t) / 4, 2) + Math.pow(n, 2);
      }
    },
    elastic: function elastic(t, e) {
      return Math.pow(2, 10 * (t - 1)) * Math.cos(20 * Math.PI * e / 3 * t);
    }
  }, n.prototype.effects = {
    animate: function animate(n) {
      var i = new Date();
      n.before && n.before();
      var o = setInterval(function () {
        var t = (new Date() - i) / n.duration;
        1 < t && (t = 1), n.progress = t;
        var e = n.delta(t);
        n.step(e), 1 === t && (clearInterval(o), n.complete && n.complete());
      }, n.delay || 10);
    },
    fadeOut: function fadeOut(e, t) {
      this.animate({
        before: t.before,
        duration: t.duration,
        delta: function delta(t) {
          return t = this.progress, n.easing.swing(t);
        },
        complete: t.complete,
        step: function step(t) {
          e.style.opacity = 1 - t;
        }
      });
    },
    fadeIn: function fadeIn(e, t) {
      this.animate({
        before: t.before,
        duration: t.duration,
        delta: function delta(t) {
          return t = this.progress, n.easing.swing(t);
        },
        complete: t.complete,
        step: function step(t) {
          e.style.opacity = 0 + t;
        }
      });
    }
  }, n.defaults = {
    countLabel: "%current of %total",
    fitInViewport: !0,
    showCounter: !1,
    infiniteNavigation: !1,
    enableKeyboardNavigation: !1,
    transitionDuration: 500,
    backDropClose: !0
  }, n.prototype.option = function (t) {
    this.options = Object.assign(this.options, t);
  }, n.prototype.imageCountLabel = function (t, e) {
    return this.options.countLabel.replace(/%current/g, t).replace(/%total/g, e);
  }, n.prototype.init = function () {
    var t = this;
    c.addEventListener("DOMContentLoaded", function () {
      t.enable(), t.build();
    }, !1);
  }, n.prototype.build = function () {
    if (!c.getElementById("lumenbox")) {
      var e = this;
      c.body.insertAdjacentHTML("beforeEnd", '<div id="lumenbox-overlay" class="lumenbox-overlay"></div><div id="lumenbox" class="lumenbox">\t<div class="lumenbox-container">    <img src="" alt="" id="lumenbox-img"/>    <div class="lumenbox-info">      <span id="lumenbox-caption"></span>      <span id="lumenbox-counter"></span>    </div>    <div id="lumenbox-navigation">      <span class="lumenbox-control lumenbox-prev" id="lumenbox-prev"></span>      <span class="lumenbox-control lumenbox-next" id="lumenbox-next"></span>    </div>  </div>\t<div id="lumenbox-close">\t\t<span>×</span>\t</div></div>'), this.backDrop = c.getElementById("lumenbox-overlay"), this.lumenbox = c.getElementById("lumenbox"), this.closeButton = c.getElementById("lumenbox-close"), this.prevButton = c.getElementById("lumenbox-prev"), this.nextButton = c.getElementById("lumenbox-next"), this.caption = c.getElementById("lumenbox-caption"), this.counter = c.getElementById("lumenbox-counter"), this.options.backDropClose && this.backDrop.addEventListener("click", function () {
        return e.finish(), !1;
      }), this.closeButton.addEventListener("click", function () {
        return e.finish(), !1;
      }), this.prevButton.addEventListener("click", function () {
        0 === e.currentImageIndex ? e.changeImage(e.gallery.length - 1) : e.changeImage(e.currentImageIndex - 1);
      }), this.nextButton.addEventListener("click", function () {
        e.currentImageIndex === e.gallery.length - 1 ? e.changeImage(0) : e.changeImage(e.currentImageIndex + 1);
      }), u.addEventListener("keydown", function (t) {
        if ("Escape" === t.key || "Esc" === t.key || 27 === t.keyCode) return e.finish(), !1;

        if (e.options.enableKeyboardNavigation) {
          if ("ArrowRight" === t.key || 39 === t.keyCode) return e.options.infiniteNavigation ? e.currentImageIndex === e.gallery.length - 1 ? e.changeImage(0) : e.changeImage(e.currentImageIndex + 1) : e.currentImageIndex !== e.gallery.length - 1 && e.changeImage(e.currentImageIndex + 1), !1;
          if ("ArrowLeft" === t.key || 37 === t.keyCode) return e.options.infiniteNavigation ? e.currentImageIndex ? e.changeImage(e.currentImageIndex - 1) : e.changeImage(e.gallery.length - 1) : e.currentImageIndex && e.changeImage(e.currentImageIndex - 1), !1;
        }
      }), this.options.fitInViewport && u.addEventListener("resize", e.resize);
    }
  }, n.prototype.enable = function () {
    var e = this;
    c.querySelectorAll("a[rel^=lumenbox], area[rel^=lumenbox], a[data-lumenbox], area[data-lumenbox]").forEach(function (t) {
      t.addEventListener("click", function () {
        return event.preventDefault(), e.start(event.currentTarget), !1;
      });
    });
  }, n.prototype.start = function (t) {
    var e = this;
    this.gallery = [];
    var n = 0;
    var i,
        o,
        a = t.getAttribute("data-lumenbox");

    if (a) {
      i = c.querySelectorAll('[data-lumenbox="' + a + '"]');

      for (var r = 0; r < i.length; r = ++r) {
        o = {
          src: i[r].getAttribute("href"),
          title: i[r].getAttribute("title") || i[r].dataset.title
        }, e.gallery.push({
          src: o.src,
          title: o.title
        }), i[r] === t && (n = r);
      }
    }

    this.effects.fadeIn(this.backDrop, {
      before: function before() {
        e.backDrop.style.display = "block";
      },
      duration: this.options.transitionDuration
    }), this.effects.fadeIn(this.lumenbox, {
      before: function before() {
        e.lumenbox.style.display = "block";
      },
      duration: this.options.transitionDuration
    }), this.changeImage(n);
  }, n.prototype.resize = function () {
    var t,
        e,
        n,
        i,
        o = c.getElementById("lumenbox-img");
    i = Math.max(c.documentElement.clientWidth, u.innerWidth || 0) - 130 - 40, n = Math.max(c.documentElement.clientHeight, u.innerHeight || 0) - 55 - 40, o.width / i > o.height / n ? (e = i, t = parseInt(o.height / (o.width / e), 10)) : (t = n, e = parseInt(o.width / (o.height / t), 10)), o.width = e, o.height = t;
  }, n.prototype.changeImage = function (o) {
    var a = this,
        r = this.gallery[o].src,
        s = (r.split(".").slice(-1)[0], c.getElementById("lumenbox-img")),
        l = new Image();
    l.onload = function () {
      var t, e, n, i;
      s.setAttribute("alt", a.gallery[o].alt), s.setAttribute("src", r), a.options.fitInViewport && (i = Math.max(c.documentElement.clientWidth, u.innerWidth || 0) - 130 - 40, n = Math.max(c.documentElement.clientHeight, u.innerHeight || 0) - 55 - 40, (l.width > i || l.height > n) && (l.width / i > l.height / n ? (e = i, t = parseInt(l.height / (l.width / e), 10)) : (t = n, e = parseInt(l.width / (l.height / t), 10)), s.width = e, s.height = t));
    }, l.src = this.gallery[o].src, this.currentImageIndex = o, this.updateInfo(), this.updateNavigation();
  }, n.prototype.updateInfo = function () {
    this.gallery[this.currentImageIndex].title && (this.caption.innerText = this.gallery[this.currentImageIndex].title), 1 < this.gallery.length && this.options.showCounter ? (this.counter.innerText = this.imageCountLabel(this.currentImageIndex + 1, this.gallery.length), this.counter.style.display = "block") : this.counter.style.display = "none";
  }, n.prototype.updateNavigation = function () {
    this.prevButton.style.display = "none", this.nextButton.style.display = "none", 1 < this.gallery.length && (this.options.infiniteNavigation ? (this.prevButton.style.display = "block", this.nextButton.style.display = "block") : (0 < this.currentImageIndex && (this.prevButton.style.display = "block"), this.currentImageIndex < this.gallery.length - 1 && (this.nextButton.style.display = "block")));
  }, n.prototype.finish = function () {
    var t = this;
    this.effects.fadeOut(this.backDrop, {
      duration: this.options.transitionDuration,
      complete: function complete() {
        t.backDrop.style.display = "none";
      }
    }), this.effects.fadeOut(this.lumenbox, {
      duration: this.options.transitionDuration,
      complete: function complete() {
        t.lumenbox.style.display = "none";
      }
    });
  };
}(window, document);
},{}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54720" + '/');

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
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/lumenbox.min.js"], null)
//# sourceMappingURL=/lumenbox.min.1284d154.js.map