// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"js/rellax.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (h, g) {
  "function" === typeof define && define.amd ? define([], g) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = g() : h.Rellax = g();
})(typeof window !== "undefined" ? window : global, function () {
  var h = function h(g, n) {
    var a = Object.create(h.prototype),
        k = 0,
        p = 0,
        l = 0,
        q = 0,
        e = [],
        r = !0,
        z = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) {
      setTimeout(a, 1E3 / 60);
    },
        A = window.transformProp || function () {
      var a = document.createElement("div");

      if (null === a.style.transform) {
        var b = ["Webkit", "Moz", "ms"],
            d;

        for (d in b) {
          if (void 0 !== a.style[b[d] + "Transform"]) return b[d] + "Transform";
        }
      }

      return "transform";
    }();

    a.options = {
      speed: -2,
      center: !1,
      wrapper: null,
      round: !0,
      vertical: !0,
      horizontal: !1,
      callback: function callback() {}
    };
    n && Object.keys(n).forEach(function (c) {
      a.options[c] = n[c];
    });
    g || (g = ".rellax");
    var m = "string" === typeof g ? document.querySelectorAll(g) : [g];
    if (0 < m.length) a.elems = m;else throw Error("The elements you're trying to select don't exist.");
    if (a.options.wrapper && !a.options.wrapper.nodeType) if (m = document.querySelector(a.options.wrapper)) a.options.wrapper = m;else throw Error("The wrapper you're trying to use don't exist.");

    var u = function u() {
      for (var c = 0; c < e.length; c++) {
        a.elems[c].style.cssText = e[c].style;
      }

      e = [];
      p = window.innerHeight;
      q = window.innerWidth;
      v();

      for (c = 0; c < a.elems.length; c++) {
        var b = a.elems[c],
            d = b.getAttribute("data-rellax-percentage"),
            t = b.getAttribute("data-rellax-speed"),
            g = b.getAttribute("data-rellax-zindex") || 0,
            h = a.options.wrapper ? a.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            f = a.options.vertical ? d || a.options.center ? h : 0 : 0,
            k = a.options.horizontal ? d || a.options.center ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
        h = f + b.getBoundingClientRect().top;
        var l = b.clientHeight || b.offsetHeight || b.scrollHeight,
            m = k + b.getBoundingClientRect().left,
            n = b.clientWidth || b.offsetWidth || b.scrollWidth;
        f = d ? d : (f - h + p) / (l + p);
        d = d ? d : (k - m + q) / (n + q);
        a.options.center && (f = d = .5);
        t = t ? t : a.options.speed;
        d = w(d, f, t);
        b = b.style.cssText;
        f = "";
        0 <= b.indexOf("transform") && (f = b.indexOf("transform"), f = b.slice(f), f = (k = f.indexOf(";")) ? " " + f.slice(11, k).replace(/\s/g, "") : " " + f.slice(11).replace(/\s/g, ""));
        e.push({
          baseX: d.x,
          baseY: d.y,
          top: h,
          left: m,
          height: l,
          width: n,
          speed: t,
          style: b,
          transform: f,
          zindex: g
        });
      }

      r && (window.addEventListener("resize", u), r = !1);
      x();
    },
        v = function v() {
      var c = k,
          b = l;
      k = a.options.wrapper ? a.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
      l = a.options.wrapper ? a.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
      return c != k && a.options.vertical || b != l && a.options.horizontal ? !0 : !1;
    },
        w = function w(c, b, d) {
      var e = {};
      c = 100 * d * (1 - c);
      b = 100 * d * (1 - b);
      e.x = a.options.round ? Math.round(c) : Math.round(100 * c) / 100;
      e.y = a.options.round ? Math.round(b) : Math.round(100 * b) / 100;
      return e;
    },
        y = function y() {
      v() && !1 === r && x();
      z(y);
    },
        x = function x() {
      for (var c, b = 0; b < a.elems.length; b++) {
        c = w((l - e[b].left + q) / (e[b].width + q), (k - e[b].top + p) / (e[b].height + p), e[b].speed);
        var d = c.y - e[b].baseY,
            g = c.x - e[b].baseX;
        a.elems[b].style[A] = "translate3d(" + (a.options.horizontal ? g : "0") + "px," + (a.options.vertical ? d : "0") + "px," + e[b].zindex + "px) " + e[b].transform;
      }

      a.options.callback(c);
    };

    a.destroy = function () {
      for (var c = 0; c < a.elems.length; c++) {
        a.elems[c].style.cssText = e[c].style;
      }

      r || (window.removeEventListener("resize", u), r = !0);
    };

    u();
    y();
    a.refresh = u;
    return a;
  };

  return h;
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54668" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/rellax.min.js"], null)
//# sourceMappingURL=/rellax.min.49259c7a.map