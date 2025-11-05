(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`@import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";:root{--gray-100: #f3f4f6;--gray-200: #e5e7eb;--gray-300: #d1d5db;--black: #1f2937;--white: #ffffff;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--black);--dd-color-body-bg: #f9fafb;--dd-color-primary: #00889d;--dd-color-on-primary: var(--white);--dd-color-secondary: #003e70;--dd-color-on-secondary: var(--white);--dd-color-content-bg: var(--white);--dd-color-content-border: var(--gray-100);--dd-color-card-bg: var(--white);--dd-color-card-border: var(--gray-100);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-200);--dd-color-button-text: var(--black);--dd-color-button-bg: var(--gray-200);--dd-color-button-bg-hover: var(--gray-300);--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--white);--dd-color-table-odd: #f7f7f7;--dd-color-table-even: #eeeeee;--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-200);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);line-height:1.5;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.dark{--gray-100: #1e1e1e;--gray-200: #2a2a2a;--gray-300: #3c3c3c;--black: #000000;--white: #fafafa;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--white);--dd-color-body-bg: #1f1b24;--dd-color-primary: #03dac6;--dd-color-on-primary: var(--black);--dd-color-secondary: #151c34;--dd-color-on-secondary: var(--white);--dd-color-content-bg: #121212;--dd-color-content-border: var(--gray-300);--dd-color-card-bg: var(--gray-100);--dd-color-card-border: var(--gray-300);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-300);--dd-color-button-text: var(--black);--dd-color-button-bg: #e0e0e0;--dd-color-button-bg-hover: #c8c8c8;--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--gray-300);--dd-color-table-odd: var(--gray-100);--dd-color-table-even: var(--gray-200);--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-300);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(255 255 255 / .06)}*,:before,:after{box-sizing:border-box}body{margin:0}button,select,input,label{font-family:var(--dd-font-family)}._container_wy793_1{display:flex;min-width:570px;font-family:var(--dd-font-family);color:var(--dd-color-text);background-color:var(--dd-color-body-bg)}._main_wy793_9{width:1280px;margin:0 auto;padding:1rem}._title_wy793_15{font-size:2em;line-height:1.1;margin:1.5rem 0 2rem;color:var(--dd-color-text)}._search_wy793_22{display:flex;flex-direction:row;flex-wrap:wrap;align-items:baseline;margin:2.5rem 0 1.5rem}._loader_wy793_30{margin-left:.75rem}._fetch_wy793_34{font-size:20px;position:absolute;top:30%;left:50%}._buttons_wy793_41{margin-left:auto;display:flex;justify-content:flex-end;gap:10px}._buttons_wy793_41 button{cursor:pointer;padding:12px 20px;font-size:.95rem;font-weight:700;color:var(--dd-color-button-text);background-color:var(--dd-color-button-bg);border:1px solid var(--dd-color-button-border);border-radius:.25rem;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._buttons_wy793_41 button:hover{background-color:var(--dd-color-button-bg-hover)}._buttons_wy793_41 button._active_wy793_62{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary);pointer-events:none}._buttons_wy793_41 button ._icon_wy793_67{margin-right:.5rem}._search_qqeb0_1{border-radius:.5rem;padding:12px;width:50%;font-size:.95rem;background-color:var(--dd-color-input-bg);border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow)}._search_qqeb0_1:focus{outline:1px solid var(--dd-color-primary)}._content_bbdxn_1{position:relative;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-content-border);border-radius:.5rem;padding:16px;box-shadow:var(--dd-shadow);min-height:834px}._count_bbdxn_11{font-size:.875rem;text-align:right;margin:5px 0 14px}._container_1yy9g_1{display:flex;flex-direction:column;row-gap:20px}._cards_1yy9g_7{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));justify-items:center;gap:20px}._card_lfenw_1{min-width:90%;padding:1rem;background-color:var(--dd-color-card-bg);border:1px solid var(--dd-color-card-border);border-radius:.75rem;box-shadow:var(--dd-shadow)}._card_lfenw_1 h3{color:var(--dd-color-primary);margin:1rem 0 1.5rem}._card_lfenw_1 ._dd-field-block_lfenw_13{padding:.5rem .75rem;font-size:.875rem;font-weight:400;border-radius:.5rem;background-color:var(--dd-color-card-block-bg);border:1px solid var(--dd-color-card-block-border);box-shadow:var(--dd-shadow);margin-bottom:.75rem}._card_lfenw_1 ._dd-field-block_lfenw_13 ._flex_lfenw_23{display:flex;gap:.5rem}._card_lfenw_1 ._dd-field-block_lfenw_13 ._flex_lfenw_23 ._field_lfenw_27{white-space:nowrap}._card_lfenw_1 ._dd-field-block_lfenw_13 ._flex_lfenw_23 ._text_lfenw_30{word-break:break-word;overflow-wrap:anywhere;display:inline-block}._terms_1cbzn_1{display:flex;flex-wrap:wrap;gap:4px}._terms_1cbzn_1 a{font-size:85%;font-weight:600;color:var(--dd-color-secondary);background-color:var(--dd-color-button-bg);border-radius:5px;padding:4px 8px;text-decoration:none;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out;word-break:break-word;overflow-wrap:anywhere;display:inline-block}._terms_1cbzn_1 a:hover{background-color:var(--dd-color-button-bg-hover)}._values_14176_1{margin:10px 0 4px;line-height:1.2;font-weight:400}._values_14176_1 ._flex_14176_6{display:flex}._values_14176_1 ._flex_14176_6 ._value_14176_1{font-family:monospace;min-width:4rem}._help-icon_12haz_1{margin-right:.5rem;color:var(--dd-color-primary);cursor:help}._help-tooltip_12haz_7{font-weight:400;max-width:190px;white-space:pre-wrap;background-color:var(--dd-color-tooltip-background)!important}._scroll_wasmp_1{cursor:pointer;position:absolute;right:-50px;bottom:8px;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:50%;padding:8px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._scroll_wasmp_1:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._notice_1mckp_1{height:35px;line-height:35px;margin:14px 0;font-size:.875rem;font-weight:600}._notice_1mckp_1 ._icon_1mckp_8{margin-right:.4rem;margin-left:.2rem;color:var(--dd-color-primary)}._options_t8263_1{display:flex;justify-content:space-between;margin:14px 0;font-size:1rem;font-weight:600}._options_t8263_1 select{height:35px;margin-left:10px;padding:0 30px 0 10px;font-size:.875rem;font-weight:600;border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow);appearance:none;-moz-appearance:none;-webkit-appearance:none;background-position:right 4px center;background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3e%3cpath%20fill='none'%20stroke='%23343a40'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m2%205%206%206%206-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-size:16px 12px}._options_t8263_1 select:focus{outline:1px solid var(--dd-color-primary)}._wrapper_7j5yf_1{position:relative}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._dropdown_7j5yf_11{opacity:1;visibility:visible;transform:translateY(0)}._picker_7j5yf_4{cursor:pointer;height:35px;width:170px;font-size:.875rem;font-weight:600;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:3px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._picker_7j5yf_4:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._picker_7j5yf_4:hover ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-text);margin-right:10px;transition:all .15s ease-in-out}._dropdown_7j5yf_11{position:absolute;right:0;top:40px;z-index:3;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_7j5yf_11 label{display:block}._dropdown_7j5yf_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}._table_8748a_1{height:700px!important}._table_8748a_1 table{font-size:.875rem;border-collapse:separate;border-spacing:0;line-height:1.2;font-weight:600;width:100%}._table_8748a_1 table thead{margin:0}._table_8748a_1 table thead th{color:var(--dd-color-on-secondary);background-color:var(--dd-color-secondary);padding:25px 20px 25px 15px;text-align:left;border:1px solid var(--dd-color-table-border);white-space:nowrap}._table_8748a_1 table tbody tr:nth-child(odd){background-color:var(--dd-color-table-odd)}._table_8748a_1 table tbody tr:nth-child(2n){background-color:var(--dd-color-table-even)}._table_8748a_1 table tbody td{padding:20px 15px}._wrapper_nbs3r_1{position:relative;display:inline}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5{color:var(--dd-color-button-bg-hover)}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._wrapper_nbs3r_1._open_nbs3r_5 ._dropdown_nbs3r_11{opacity:1;visibility:visible;transform:translateY(0)}._icon_nbs3r_5{cursor:pointer;margin-left:1rem;color:var(--dd-color-button-bg);transition:all .15s ease-in-out}._icon_nbs3r_5:hover{color:var(--dd-color-button-bg-hover)}._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._dropdown_nbs3r_11{position:absolute;right:0;top:30px;z-index:3;line-height:1.5;color:var(--dd-color-text);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_nbs3r_11 label{display:block}._dropdown_nbs3r_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}._error_21vtf_1{font-family:var(--dd-font-family);width:400px;margin:200px auto;text-align:center}._error_21vtf_1 p{margin:50px 0}._error_21vtf_1 ._error-button_21vtf_10{display:block;cursor:pointer;text-transform:uppercase;color:#fff;background:#00889d;margin:0 auto;padding:15px 35px;font-size:16px;letter-spacing:1.5px;box-shadow:var(--dd-shadow);border-width:0;border-radius:3px;transition:all .15s ease}._error_21vtf_1 ._error-button_21vtf_10:hover{filter:brightness(1.15)}._error_21vtf_1 ._error-button_21vtf_10 ._icon_21vtf_28{margin-right:12px}`)),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function yl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xu = { exports: {} }, Ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lm;
function Q0() {
  if (lm) return Ke;
  lm = 1;
  var n = Symbol.for("react.element"), o = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.iterator;
  function y(_) {
    return _ === null || typeof _ != "object" ? null : (_ = w && _[w] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var x = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, O = {};
  function T(_, z, G) {
    this.props = _, this.context = z, this.refs = O, this.updater = G || x;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(_, z) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, z, "setState");
  }, T.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function C() {
  }
  C.prototype = T.prototype;
  function R(_, z, G) {
    this.props = _, this.context = z, this.refs = O, this.updater = G || x;
  }
  var B = R.prototype = new C();
  B.constructor = R, I(B, T.prototype), B.isPureReactComponent = !0;
  var $ = Array.isArray, D = Object.prototype.hasOwnProperty, N = { current: null }, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, z, G) {
    var q, de = {}, ke = null, ge = null;
    if (z != null) for (q in z.ref !== void 0 && (ge = z.ref), z.key !== void 0 && (ke = "" + z.key), z) D.call(z, q) && !b.hasOwnProperty(q) && (de[q] = z[q]);
    var Ee = arguments.length - 2;
    if (Ee === 1) de.children = G;
    else if (1 < Ee) {
      for (var F = Array(Ee), oe = 0; oe < Ee; oe++) F[oe] = arguments[oe + 2];
      de.children = F;
    }
    if (_ && _.defaultProps) for (q in Ee = _.defaultProps, Ee) de[q] === void 0 && (de[q] = Ee[q]);
    return { $$typeof: n, type: _, key: ke, ref: ge, props: de, _owner: N.current };
  }
  function E(_, z) {
    return { $$typeof: n, type: _.type, key: z, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function L(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === n;
  }
  function V(_) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(G) {
      return z[G];
    });
  }
  var Q = /\/+/g;
  function ie(_, z) {
    return typeof _ == "object" && _ !== null && _.key != null ? V("" + _.key) : z.toString(36);
  }
  function K(_, z, G, q, de) {
    var ke = typeof _;
    (ke === "undefined" || ke === "boolean") && (_ = null);
    var ge = !1;
    if (_ === null) ge = !0;
    else switch (ke) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case n:
          case o:
            ge = !0;
        }
    }
    if (ge) return ge = _, de = de(ge), _ = q === "" ? "." + ie(ge, 0) : q, $(de) ? (G = "", _ != null && (G = _.replace(Q, "$&/") + "/"), K(de, z, G, "", function(oe) {
      return oe;
    })) : de != null && (L(de) && (de = E(de, G + (!de.key || ge && ge.key === de.key ? "" : ("" + de.key).replace(Q, "$&/") + "/") + _)), z.push(de)), 1;
    if (ge = 0, q = q === "" ? "." : q + ":", $(_)) for (var Ee = 0; Ee < _.length; Ee++) {
      ke = _[Ee];
      var F = q + ie(ke, Ee);
      ge += K(ke, z, G, F, de);
    }
    else if (F = y(_), typeof F == "function") for (_ = F.call(_), Ee = 0; !(ke = _.next()).done; ) ke = ke.value, F = q + ie(ke, Ee++), ge += K(ke, z, G, F, de);
    else if (ke === "object") throw z = String(_), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function fe(_, z, G) {
    if (_ == null) return _;
    var q = [], de = 0;
    return K(_, q, "", "", function(ke) {
      return z.call(G, ke, de++);
    }), q;
  }
  function we(_) {
    if (_._status === -1) {
      var z = _._result;
      z = z(), z.then(function(G) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = G);
      }, function(G) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = G);
      }), _._status === -1 && (_._status = 0, _._result = z);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var re = { current: null }, U = { transition: null }, Y = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: U, ReactCurrentOwner: N };
  return Ke.Children = { map: fe, forEach: function(_, z, G) {
    fe(_, function() {
      z.apply(this, arguments);
    }, G);
  }, count: function(_) {
    var z = 0;
    return fe(_, function() {
      z++;
    }), z;
  }, toArray: function(_) {
    return fe(_, function(z) {
      return z;
    }) || [];
  }, only: function(_) {
    if (!L(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Ke.Component = T, Ke.Fragment = l, Ke.Profiler = u, Ke.PureComponent = R, Ke.StrictMode = s, Ke.Suspense = g, Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, Ke.cloneElement = function(_, z, G) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var q = I({}, _.props), de = _.key, ke = _.ref, ge = _._owner;
    if (z != null) {
      if (z.ref !== void 0 && (ke = z.ref, ge = N.current), z.key !== void 0 && (de = "" + z.key), _.type && _.type.defaultProps) var Ee = _.type.defaultProps;
      for (F in z) D.call(z, F) && !b.hasOwnProperty(F) && (q[F] = z[F] === void 0 && Ee !== void 0 ? Ee[F] : z[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) q.children = G;
    else if (1 < F) {
      Ee = Array(F);
      for (var oe = 0; oe < F; oe++) Ee[oe] = arguments[oe + 2];
      q.children = Ee;
    }
    return { $$typeof: n, type: _.type, key: de, ref: ke, props: q, _owner: ge };
  }, Ke.createContext = function(_) {
    return _ = { $$typeof: d, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: c, _context: _ }, _.Consumer = _;
  }, Ke.createElement = S, Ke.createFactory = function(_) {
    var z = S.bind(null, _);
    return z.type = _, z;
  }, Ke.createRef = function() {
    return { current: null };
  }, Ke.forwardRef = function(_) {
    return { $$typeof: p, render: _ };
  }, Ke.isValidElement = L, Ke.lazy = function(_) {
    return { $$typeof: v, _payload: { _status: -1, _result: _ }, _init: we };
  }, Ke.memo = function(_, z) {
    return { $$typeof: h, type: _, compare: z === void 0 ? null : z };
  }, Ke.startTransition = function(_) {
    var z = U.transition;
    U.transition = {};
    try {
      _();
    } finally {
      U.transition = z;
    }
  }, Ke.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ke.useCallback = function(_, z) {
    return re.current.useCallback(_, z);
  }, Ke.useContext = function(_) {
    return re.current.useContext(_);
  }, Ke.useDebugValue = function() {
  }, Ke.useDeferredValue = function(_) {
    return re.current.useDeferredValue(_);
  }, Ke.useEffect = function(_, z) {
    return re.current.useEffect(_, z);
  }, Ke.useId = function() {
    return re.current.useId();
  }, Ke.useImperativeHandle = function(_, z, G) {
    return re.current.useImperativeHandle(_, z, G);
  }, Ke.useInsertionEffect = function(_, z) {
    return re.current.useInsertionEffect(_, z);
  }, Ke.useLayoutEffect = function(_, z) {
    return re.current.useLayoutEffect(_, z);
  }, Ke.useMemo = function(_, z) {
    return re.current.useMemo(_, z);
  }, Ke.useReducer = function(_, z, G) {
    return re.current.useReducer(_, z, G);
  }, Ke.useRef = function(_) {
    return re.current.useRef(_);
  }, Ke.useState = function(_) {
    return re.current.useState(_);
  }, Ke.useSyncExternalStore = function(_, z, G) {
    return re.current.useSyncExternalStore(_, z, G);
  }, Ke.useTransition = function() {
    return re.current.useTransition();
  }, Ke.version = "18.2.0", Ke;
}
var sm;
function Zc() {
  return sm || (sm = 1, Xu.exports = Q0()), Xu.exports;
}
var ee = Zc();
const ae = /* @__PURE__ */ yl(ee);
var Ns = {}, Zu = { exports: {} }, mn = {}, Ju = { exports: {} }, ec = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var am;
function G0() {
  return am || (am = 1, function(n) {
    function o(U, Y) {
      var _ = U.length;
      U.push(Y);
      e: for (; 0 < _; ) {
        var z = _ - 1 >>> 1, G = U[z];
        if (0 < u(G, Y)) U[z] = Y, U[_] = G, _ = z;
        else break e;
      }
    }
    function l(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var Y = U[0], _ = U.pop();
      if (_ !== Y) {
        U[0] = _;
        e: for (var z = 0, G = U.length, q = G >>> 1; z < q; ) {
          var de = 2 * (z + 1) - 1, ke = U[de], ge = de + 1, Ee = U[ge];
          if (0 > u(ke, _)) ge < G && 0 > u(Ee, ke) ? (U[z] = Ee, U[ge] = _, z = ge) : (U[z] = ke, U[de] = _, z = de);
          else if (ge < G && 0 > u(Ee, _)) U[z] = Ee, U[ge] = _, z = ge;
          else break e;
        }
      }
      return Y;
    }
    function u(U, Y) {
      var _ = U.sortIndex - Y.sortIndex;
      return _ !== 0 ? _ : U.id - Y.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, p = d.now();
      n.unstable_now = function() {
        return d.now() - p;
      };
    }
    var g = [], h = [], v = 1, w = null, y = 3, x = !1, I = !1, O = !1, T = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(U) {
      for (var Y = l(h); Y !== null; ) {
        if (Y.callback === null) s(h);
        else if (Y.startTime <= U) s(h), Y.sortIndex = Y.expirationTime, o(g, Y);
        else break;
        Y = l(h);
      }
    }
    function $(U) {
      if (O = !1, B(U), !I) if (l(g) !== null) I = !0, we(D);
      else {
        var Y = l(h);
        Y !== null && re($, Y.startTime - U);
      }
    }
    function D(U, Y) {
      I = !1, O && (O = !1, C(S), S = -1), x = !0;
      var _ = y;
      try {
        for (B(Y), w = l(g); w !== null && (!(w.expirationTime > Y) || U && !V()); ) {
          var z = w.callback;
          if (typeof z == "function") {
            w.callback = null, y = w.priorityLevel;
            var G = z(w.expirationTime <= Y);
            Y = n.unstable_now(), typeof G == "function" ? w.callback = G : w === l(g) && s(g), B(Y);
          } else s(g);
          w = l(g);
        }
        if (w !== null) var q = !0;
        else {
          var de = l(h);
          de !== null && re($, de.startTime - Y), q = !1;
        }
        return q;
      } finally {
        w = null, y = _, x = !1;
      }
    }
    var N = !1, b = null, S = -1, E = 5, L = -1;
    function V() {
      return !(n.unstable_now() - L < E);
    }
    function Q() {
      if (b !== null) {
        var U = n.unstable_now();
        L = U;
        var Y = !0;
        try {
          Y = b(!0, U);
        } finally {
          Y ? ie() : (N = !1, b = null);
        }
      } else N = !1;
    }
    var ie;
    if (typeof R == "function") ie = function() {
      R(Q);
    };
    else if (typeof MessageChannel < "u") {
      var K = new MessageChannel(), fe = K.port2;
      K.port1.onmessage = Q, ie = function() {
        fe.postMessage(null);
      };
    } else ie = function() {
      T(Q, 0);
    };
    function we(U) {
      b = U, N || (N = !0, ie());
    }
    function re(U, Y) {
      S = T(function() {
        U(n.unstable_now());
      }, Y);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, n.unstable_continueExecution = function() {
      I || x || (I = !0, we(D));
    }, n.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < U ? Math.floor(1e3 / U) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, n.unstable_getFirstCallbackNode = function() {
      return l(g);
    }, n.unstable_next = function(U) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = y;
      }
      var _ = y;
      y = Y;
      try {
        return U();
      } finally {
        y = _;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(U, Y) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var _ = y;
      y = U;
      try {
        return Y();
      } finally {
        y = _;
      }
    }, n.unstable_scheduleCallback = function(U, Y, _) {
      var z = n.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? z + _ : z) : _ = z, U) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = _ + G, U = { id: v++, callback: Y, priorityLevel: U, startTime: _, expirationTime: G, sortIndex: -1 }, _ > z ? (U.sortIndex = _, o(h, U), l(g) === null && U === l(h) && (O ? (C(S), S = -1) : O = !0, re($, _ - z))) : (U.sortIndex = G, o(g, U), I || x || (I = !0, we(D))), U;
    }, n.unstable_shouldYield = V, n.unstable_wrapCallback = function(U) {
      var Y = y;
      return function() {
        var _ = y;
        y = Y;
        try {
          return U.apply(this, arguments);
        } finally {
          y = _;
        }
      };
    };
  }(ec)), ec;
}
var um;
function q0() {
  return um || (um = 1, Ju.exports = G0()), Ju.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cm;
function X0() {
  if (cm) return mn;
  cm = 1;
  var n = Zc(), o = q0();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = /* @__PURE__ */ new Set(), u = {};
  function c(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, w = {};
  function y(e) {
    return g.call(w, e) ? !0 : g.call(v, e) ? !1 : h.test(e) ? w[e] = !0 : (v[e] = !0, !1);
  }
  function x(e, t, r, i) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function I(e, t, r, i) {
    if (t === null || typeof t > "u" || x(e, t, r, i)) return !0;
    if (i) return !1;
    if (r !== null) switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function O(e, t, r, i, a, f, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = m;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new O(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new O(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new O(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new O(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new O(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new O(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      C,
      R
    );
    T[t] = new O(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(C, R);
    T[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(C, R);
    T[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B(e, t, r, i) {
    var a = T.hasOwnProperty(t) ? T[t] : null;
    (a !== null ? a.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I(t, r, a, i) && (r = null), i || a === null ? y(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? !1 : "" : r : (t = a.attributeName, i = a.attributeNamespace, r === null ? e.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === !0 ? "" : "" + r, i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, D = Symbol.for("react.element"), N = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), V = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, z;
  function G(e) {
    if (z === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      z = t && t[1] || "";
    }
    return `
` + z + e;
  }
  var q = !1;
  function de(e, t) {
    if (!e || q) return "";
    q = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (W) {
          var i = W;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (W) {
          i = W;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (W) {
          i = W;
        }
        e();
      }
    } catch (W) {
      if (W && i && typeof W.stack == "string") {
        for (var a = W.stack.split(`
`), f = i.stack.split(`
`), m = a.length - 1, k = f.length - 1; 1 <= m && 0 <= k && a[m] !== f[k]; ) k--;
        for (; 1 <= m && 0 <= k; m--, k--) if (a[m] !== f[k]) {
          if (m !== 1 || k !== 1)
            do
              if (m--, k--, 0 > k || a[m] !== f[k]) {
                var P = `
` + a[m].replace(" at new ", " at ");
                return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
              }
            while (1 <= m && 0 <= k);
          break;
        }
      }
    } finally {
      q = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? G(e) : "";
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return G(e.type);
      case 16:
        return G("Lazy");
      case 13:
        return G("Suspense");
      case 19:
        return G("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case N:
        return "Portal";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case ie:
        return "Suspense";
      case K:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case V:
        return (e.displayName || "Context") + ".Consumer";
      case L:
        return (e._context.displayName || "Context") + ".Provider";
      case Q:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case fe:
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case we:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ee(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ge(t);
      case 8:
        return t === S ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function F(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function oe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xe(e) {
    var t = oe(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var a = r.get, f = r.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(m) {
        i = "" + m, f.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(m) {
        i = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function pe(e) {
    e._valueTracker || (e._valueTracker = xe(e));
  }
  function Ie(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), i = "";
    return e && (i = oe(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Be(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ue(e, t) {
    var r = t.checked;
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function Re(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    r = F(t.value != null ? t.value : r), e._wrapperState = { initialChecked: i, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ze(e, t) {
    t = t.checked, t != null && B(e, "checked", t, !1);
  }
  function Ve(e, t) {
    ze(e, t);
    var r = F(t.value), i = t.type;
    if (r != null) i === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? _e(e, t.type, r) : t.hasOwnProperty("defaultValue") && _e(e, t.type, F(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ne(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function _e(e, t, r) {
    (t !== "number" || Be(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Ge = Array.isArray;
  function St(e, t, r, i) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++) a = t.hasOwnProperty("$" + e[r].value), e[r].selected !== a && (e[r].selected = a), a && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + F(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          e[a].selected = !0, i && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Nt(e, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null) throw Error(l(92));
        if (Ge(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e._wrapperState = { initialValue: F(r) };
  }
  function tt(e, t) {
    var r = F(t.value), i = F(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), i != null && (e.defaultValue = "" + i);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Xe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var pt, Kt = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, i, a);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (pt = pt || document.createElement("div"), pt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function sn(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Et = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Et).forEach(function(e) {
    Tt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Et[t] = Et[e];
    });
  });
  function Lt(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Et.hasOwnProperty(e) && Et[e] ? ("" + t).trim() : t + "px";
  }
  function ut(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var i = r.indexOf("--") === 0, a = Lt(r, t[r], i);
      r === "float" && (r = "cssFloat"), i ? e.setProperty(r, a) : e[r] = a;
    }
  }
  var Lo = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function gr(e, t) {
    if (t) {
      if (Lo[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function qn(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vr = null;
  function Xn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Zn = null, gn = null, En = null;
  function ao(e) {
    if (e = Di(e)) {
      if (typeof Zn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Gl(t), Zn(e.stateNode, e.type, t));
    }
  }
  function Ot(e) {
    gn ? En ? En.push(e) : En = [e] : gn = e;
  }
  function en() {
    if (gn) {
      var e = gn, t = En;
      if (En = gn = null, ao(e), t) for (e = 0; e < t.length; e++) ao(t[e]);
    }
  }
  function Oe(e, t) {
    return e(t);
  }
  function Ye() {
  }
  var $t = !1;
  function Jn(e, t, r) {
    if ($t) return e(t, r);
    $t = !0;
    try {
      return Oe(e, t, r);
    } finally {
      $t = !1, (gn !== null || En !== null) && (Ye(), en());
    }
  }
  function ue(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = Gl(r);
    if (i === null) return null;
    r = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(l(231, t, typeof r));
    return r;
  }
  var Le = !1;
  if (p) try {
    var be = {};
    Object.defineProperty(be, "passive", { get: function() {
      Le = !0;
    } }), window.addEventListener("test", be, be), window.removeEventListener("test", be, be);
  } catch {
    Le = !1;
  }
  function Pt(e, t, r, i, a, f, m, k, P) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, W);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var It = !1, tn = null, nn = !1, bt = null, an = { onError: function(e) {
    It = !0, tn = e;
  } };
  function ct(e, t, r, i, a, f, m, k, P) {
    It = !1, tn = null, Pt.apply(an, arguments);
  }
  function Ar(e, t, r, i, a, f, m, k, P) {
    if (ct.apply(this, arguments), It) {
      if (It) {
        var W = tn;
        It = !1, tn = null;
      } else throw Error(l(198));
      nn || (nn = !0, bt = W);
    }
  }
  function yr(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Il(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gi(e) {
    if (yr(e) !== e) throw Error(l(188));
  }
  function Rl(e) {
    var t = e.alternate;
    if (!t) {
      if (t = yr(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var f = a.alternate;
      if (f === null) {
        if (i = a.return, i !== null) {
          r = i;
          continue;
        }
        break;
      }
      if (a.child === f.child) {
        for (f = a.child; f; ) {
          if (f === r) return gi(a), e;
          if (f === i) return gi(a), t;
          f = f.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== i.return) r = a, i = f;
      else {
        for (var m = !1, k = a.child; k; ) {
          if (k === r) {
            m = !0, r = a, i = f;
            break;
          }
          if (k === i) {
            m = !0, i = a, r = f;
            break;
          }
          k = k.sibling;
        }
        if (!m) {
          for (k = f.child; k; ) {
            if (k === r) {
              m = !0, r = f, i = a;
              break;
            }
            if (k === i) {
              m = !0, i = f, r = a;
              break;
            }
            k = k.sibling;
          }
          if (!m) throw Error(l(189));
        }
      }
      if (r.alternate !== i) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function vi(e) {
    return e = Rl(e), e !== null ? yi(e) : null;
  }
  function yi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = yi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wi = o.unstable_scheduleCallback, Je = o.unstable_cancelCallback, jn = o.unstable_shouldYield, xi = o.unstable_requestPaint, st = o.unstable_now, va = o.unstable_getCurrentPriorityLevel, uo = o.unstable_ImmediatePriority, Nf = o.unstable_UserBlockingPriority, Ol = o.unstable_NormalPriority, av = o.unstable_LowPriority, bf = o.unstable_IdlePriority, Pl = null, er = null;
  function uv(e) {
    if (er && typeof er.onCommitFiberRoot == "function") try {
      er.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Fn = Math.clz32 ? Math.clz32 : dv, cv = Math.log, fv = Math.LN2;
  function dv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cv(e) / fv | 0) | 0;
  }
  var Al = 64, Ll = 4194304;
  function Si(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zl(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0, a = e.suspendedLanes, f = e.pingedLanes, m = r & 268435455;
    if (m !== 0) {
      var k = m & ~a;
      k !== 0 ? i = Si(k) : (f &= m, f !== 0 && (i = Si(f)));
    } else m = r & ~a, m !== 0 ? i = Si(m) : f !== 0 && (i = Si(f));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, f = t & -t, a >= f || a === 16 && (f & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) r = 31 - Fn(t), a = 1 << r, i |= e[r], t &= ~a;
    return i;
  }
  function pv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mv(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
      var m = 31 - Fn(f), k = 1 << m, P = a[m];
      P === -1 ? ((k & r) === 0 || (k & i) !== 0) && (a[m] = pv(k, t)) : P <= t && (e.expiredLanes |= k), f &= ~k;
    }
  }
  function ya(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function jf() {
    var e = Al;
    return Al <<= 1, (Al & 4194240) === 0 && (Al = 64), e;
  }
  function wa(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function ki(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fn(t), e[t] = r;
  }
  function hv(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Fn(r), f = 1 << a;
      t[a] = 0, i[a] = -1, e[a] = -1, r &= ~f;
    }
  }
  function xa(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - Fn(r), a = 1 << i;
      a & t | e[i] & t && (e[i] |= t), r &= ~a;
    }
  }
  var rt = 0;
  function Ff(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Mf, Sa, Df, Hf, Bf, ka = !1, Nl = [], Lr = null, zr = null, Nr = null, _i = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), br = [], gv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Wf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lr = null;
        break;
      case "dragenter":
      case "dragleave":
        zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Nr = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ci.delete(t.pointerId);
    }
  }
  function Ei(e, t, r, i, a, f) {
    return e === null || e.nativeEvent !== f ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: i, nativeEvent: f, targetContainers: [a] }, t !== null && (t = Di(t), t !== null && Sa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function vv(e, t, r, i, a) {
    switch (t) {
      case "focusin":
        return Lr = Ei(Lr, e, t, r, i, a), !0;
      case "dragenter":
        return zr = Ei(zr, e, t, r, i, a), !0;
      case "mouseover":
        return Nr = Ei(Nr, e, t, r, i, a), !0;
      case "pointerover":
        var f = a.pointerId;
        return _i.set(f, Ei(_i.get(f) || null, e, t, r, i, a)), !0;
      case "gotpointercapture":
        return f = a.pointerId, Ci.set(f, Ei(Ci.get(f) || null, e, t, r, i, a)), !0;
    }
    return !1;
  }
  function Uf(e) {
    var t = co(e.target);
    if (t !== null) {
      var r = yr(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = Il(r), t !== null) {
            e.blockedOn = t, Bf(e.priority, function() {
              Df(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        vr = i, r.target.dispatchEvent(i), vr = null;
      } else return t = Di(r), t !== null && Sa(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function $f(e, t, r) {
    bl(e) && r.delete(t);
  }
  function yv() {
    ka = !1, Lr !== null && bl(Lr) && (Lr = null), zr !== null && bl(zr) && (zr = null), Nr !== null && bl(Nr) && (Nr = null), _i.forEach($f), Ci.forEach($f);
  }
  function Ti(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ka || (ka = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, yv)));
  }
  function Ii(e) {
    function t(a) {
      return Ti(a, e);
    }
    if (0 < Nl.length) {
      Ti(Nl[0], e);
      for (var r = 1; r < Nl.length; r++) {
        var i = Nl[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Lr !== null && Ti(Lr, e), zr !== null && Ti(zr, e), Nr !== null && Ti(Nr, e), _i.forEach(t), Ci.forEach(t), r = 0; r < br.length; r++) i = br[r], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < br.length && (r = br[0], r.blockedOn === null); ) Uf(r), r.blockedOn === null && br.shift();
  }
  var zo = $.ReactCurrentBatchConfig, jl = !0;
  function wv(e, t, r, i) {
    var a = rt, f = zo.transition;
    zo.transition = null;
    try {
      rt = 1, _a(e, t, r, i);
    } finally {
      rt = a, zo.transition = f;
    }
  }
  function xv(e, t, r, i) {
    var a = rt, f = zo.transition;
    zo.transition = null;
    try {
      rt = 4, _a(e, t, r, i);
    } finally {
      rt = a, zo.transition = f;
    }
  }
  function _a(e, t, r, i) {
    if (jl) {
      var a = Ca(e, t, r, i);
      if (a === null) Ba(e, t, i, Fl, r), Wf(e, i);
      else if (vv(a, e, t, r, i)) i.stopPropagation();
      else if (Wf(e, i), t & 4 && -1 < gv.indexOf(e)) {
        for (; a !== null; ) {
          var f = Di(a);
          if (f !== null && Mf(f), f = Ca(e, t, r, i), f === null && Ba(e, t, i, Fl, r), f === a) break;
          a = f;
        }
        a !== null && i.stopPropagation();
      } else Ba(e, t, i, null, r);
    }
  }
  var Fl = null;
  function Ca(e, t, r, i) {
    if (Fl = null, e = Xn(i), e = co(e), e !== null) if (t = yr(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = Il(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Fl = e, null;
  }
  function Vf(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (va()) {
          case uo:
            return 1;
          case Nf:
            return 4;
          case Ol:
          case av:
            return 16;
          case bf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jr = null, Ea = null, Ml = null;
  function Yf() {
    if (Ml) return Ml;
    var e, t = Ea, r = t.length, i, a = "value" in jr ? jr.value : jr.textContent, f = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++) ;
    var m = r - e;
    for (i = 1; i <= m && t[r - i] === a[f - i]; i++) ;
    return Ml = a.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Dl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Hl() {
    return !0;
  }
  function Kf() {
    return !1;
  }
  function vn(e) {
    function t(r, i, a, f, m) {
      this._reactName = r, this._targetInst = a, this.type = i, this.nativeEvent = f, this.target = m, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (r = e[k], this[k] = r ? r(f) : f[k]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Hl : Kf, this.isPropagationStopped = Kf, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Hl);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Hl);
    }, persist: function() {
    }, isPersistent: Hl }), t;
  }
  var No = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ta = vn(No), Ri = _({}, No, { view: 0, detail: 0 }), Sv = vn(Ri), Ia, Ra, Oi, Bl = _({}, Ri, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Oi && (Oi && e.type === "mousemove" ? (Ia = e.screenX - Oi.screenX, Ra = e.screenY - Oi.screenY) : Ra = Ia = 0, Oi = e), Ia);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ra;
  } }), Qf = vn(Bl), kv = _({}, Bl, { dataTransfer: 0 }), _v = vn(kv), Cv = _({}, Ri, { relatedTarget: 0 }), Oa = vn(Cv), Ev = _({}, No, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tv = vn(Ev), Iv = _({}, No, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Rv = vn(Iv), Ov = _({}, No, { data: 0 }), Gf = vn(Ov), Pv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Lv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lv[e]) ? !!t[e] : !1;
  }
  function Pa() {
    return zv;
  }
  var Nv = _({}, Ri, { key: function(e) {
    if (e.key) {
      var t = Pv[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Av[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pa, charCode: function(e) {
    return e.type === "keypress" ? Dl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), bv = vn(Nv), jv = _({}, Bl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qf = vn(jv), Fv = _({}, Ri, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pa }), Mv = vn(Fv), Dv = _({}, No, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hv = vn(Dv), Bv = _({}, Bl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wv = vn(Bv), Uv = [9, 13, 27, 32], Aa = p && "CompositionEvent" in window, Pi = null;
  p && "documentMode" in document && (Pi = document.documentMode);
  var $v = p && "TextEvent" in window && !Pi, Xf = p && (!Aa || Pi && 8 < Pi && 11 >= Pi), Zf = " ", Jf = !1;
  function ed(e, t) {
    switch (e) {
      case "keyup":
        return Uv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function td(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bo = !1;
  function Vv(e, t) {
    switch (e) {
      case "compositionend":
        return td(t);
      case "keypress":
        return t.which !== 32 ? null : (Jf = !0, Zf);
      case "textInput":
        return e = t.data, e === Zf && Jf ? null : e;
      default:
        return null;
    }
  }
  function Yv(e, t) {
    if (bo) return e === "compositionend" || !Aa && ed(e, t) ? (e = Yf(), Ml = Ea = jr = null, bo = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Xf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kv[e.type] : t === "textarea";
  }
  function rd(e, t, r, i) {
    Ot(i), t = Yl(t, "onChange"), 0 < t.length && (r = new Ta("onChange", "change", null, r, i), e.push({ event: r, listeners: t }));
  }
  var Ai = null, Li = null;
  function Qv(e) {
    Sd(e, 0);
  }
  function Wl(e) {
    var t = Ho(e);
    if (Ie(t)) return e;
  }
  function Gv(e, t) {
    if (e === "change") return t;
  }
  var od = !1;
  if (p) {
    var La;
    if (p) {
      var za = "oninput" in document;
      if (!za) {
        var id = document.createElement("div");
        id.setAttribute("oninput", "return;"), za = typeof id.oninput == "function";
      }
      La = za;
    } else La = !1;
    od = La && (!document.documentMode || 9 < document.documentMode);
  }
  function ld() {
    Ai && (Ai.detachEvent("onpropertychange", sd), Li = Ai = null);
  }
  function sd(e) {
    if (e.propertyName === "value" && Wl(Li)) {
      var t = [];
      rd(t, Li, e, Xn(e)), Jn(Qv, t);
    }
  }
  function qv(e, t, r) {
    e === "focusin" ? (ld(), Ai = t, Li = r, Ai.attachEvent("onpropertychange", sd)) : e === "focusout" && ld();
  }
  function Xv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wl(Li);
  }
  function Zv(e, t) {
    if (e === "click") return Wl(t);
  }
  function Jv(e, t) {
    if (e === "input" || e === "change") return Wl(t);
  }
  function e0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mn = typeof Object.is == "function" ? Object.is : e0;
  function zi(e, t) {
    if (Mn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var a = r[i];
      if (!g.call(t, a) || !Mn(e[a], t[a])) return !1;
    }
    return !0;
  }
  function ad(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ud(e, t) {
    var r = ad(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (i = e + r.textContent.length, e <= t && i >= t) return { node: r, offset: t - e };
        e = i;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = ad(r);
    }
  }
  function cd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function fd() {
    for (var e = window, t = Be(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Be(e.document);
    }
    return t;
  }
  function Na(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function t0(e) {
    var t = fd(), r = e.focusedElem, i = e.selectionRange;
    if (t !== r && r && r.ownerDocument && cd(r.ownerDocument.documentElement, r)) {
      if (i !== null && Na(r)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = r.textContent.length, f = Math.min(i.start, a);
          i = i.end === void 0 ? f : Math.min(i.end, a), !e.extend && f > i && (a = i, i = f, f = a), a = ud(r, f);
          var m = ud(
            r,
            i
          );
          a && m && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), f > i ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var n0 = p && "documentMode" in document && 11 >= document.documentMode, jo = null, ba = null, Ni = null, ja = !1;
  function dd(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ja || jo == null || jo !== Be(i) || (i = jo, "selectionStart" in i && Na(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Ni && zi(Ni, i) || (Ni = i, i = Yl(ba, "onSelect"), 0 < i.length && (t = new Ta("onSelect", "select", null, t, r), e.push({ event: t, listeners: i }), t.target = jo)));
  }
  function Ul(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var Fo = { animationend: Ul("Animation", "AnimationEnd"), animationiteration: Ul("Animation", "AnimationIteration"), animationstart: Ul("Animation", "AnimationStart"), transitionend: Ul("Transition", "TransitionEnd") }, Fa = {}, pd = {};
  p && (pd = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
  function $l(e) {
    if (Fa[e]) return Fa[e];
    if (!Fo[e]) return e;
    var t = Fo[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in pd) return Fa[e] = t[r];
    return e;
  }
  var md = $l("animationend"), hd = $l("animationiteration"), gd = $l("animationstart"), vd = $l("transitionend"), yd = /* @__PURE__ */ new Map(), wd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fr(e, t) {
    yd.set(e, t), c(t, [e]);
  }
  for (var Ma = 0; Ma < wd.length; Ma++) {
    var Da = wd[Ma], r0 = Da.toLowerCase(), o0 = Da[0].toUpperCase() + Da.slice(1);
    Fr(r0, "on" + o0);
  }
  Fr(md, "onAnimationEnd"), Fr(hd, "onAnimationIteration"), Fr(gd, "onAnimationStart"), Fr("dblclick", "onDoubleClick"), Fr("focusin", "onFocus"), Fr("focusout", "onBlur"), Fr(vd, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), i0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));
  function xd(e, t, r) {
    var i = e.type || "unknown-event";
    e.currentTarget = r, Ar(i, t, void 0, e), e.currentTarget = null;
  }
  function Sd(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], a = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t) for (var m = i.length - 1; 0 <= m; m--) {
          var k = i[m], P = k.instance, W = k.currentTarget;
          if (k = k.listener, P !== f && a.isPropagationStopped()) break e;
          xd(a, k, W), f = P;
        }
        else for (m = 0; m < i.length; m++) {
          if (k = i[m], P = k.instance, W = k.currentTarget, k = k.listener, P !== f && a.isPropagationStopped()) break e;
          xd(a, k, W), f = P;
        }
      }
    }
    if (nn) throw e = bt, nn = !1, bt = null, e;
  }
  function mt(e, t) {
    var r = t[Ka];
    r === void 0 && (r = t[Ka] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (kd(t, e, 2, !1), r.add(i));
  }
  function Ha(e, t, r) {
    var i = 0;
    t && (i |= 4), kd(r, e, i, t);
  }
  var Vl = "_reactListening" + Math.random().toString(36).slice(2);
  function ji(e) {
    if (!e[Vl]) {
      e[Vl] = !0, s.forEach(function(r) {
        r !== "selectionchange" && (i0.has(r) || Ha(r, !1, e), Ha(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vl] || (t[Vl] = !0, Ha("selectionchange", !1, t));
    }
  }
  function kd(e, t, r, i) {
    switch (Vf(t)) {
      case 1:
        var a = wv;
        break;
      case 4:
        a = xv;
        break;
      default:
        a = _a;
    }
    r = a.bind(null, t, r, e), a = void 0, !Le || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), i ? a !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: a }) : e.addEventListener(t, r, !0) : a !== void 0 ? e.addEventListener(t, r, { passive: a }) : e.addEventListener(t, r, !1);
  }
  function Ba(e, t, r, i, a) {
    var f = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var m = i.tag;
      if (m === 3 || m === 4) {
        var k = i.stateNode.containerInfo;
        if (k === a || k.nodeType === 8 && k.parentNode === a) break;
        if (m === 4) for (m = i.return; m !== null; ) {
          var P = m.tag;
          if ((P === 3 || P === 4) && (P = m.stateNode.containerInfo, P === a || P.nodeType === 8 && P.parentNode === a)) return;
          m = m.return;
        }
        for (; k !== null; ) {
          if (m = co(k), m === null) return;
          if (P = m.tag, P === 5 || P === 6) {
            i = f = m;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    Jn(function() {
      var W = f, Z = Xn(r), J = [];
      e: {
        var X = yd.get(e);
        if (X !== void 0) {
          var ce = Ta, ve = e;
          switch (e) {
            case "keypress":
              if (Dl(r) === 0) break e;
            case "keydown":
            case "keyup":
              ce = bv;
              break;
            case "focusin":
              ve = "focus", ce = Oa;
              break;
            case "focusout":
              ve = "blur", ce = Oa;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Oa;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = _v;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Mv;
              break;
            case md:
            case hd:
            case gd:
              ce = Tv;
              break;
            case vd:
              ce = Hv;
              break;
            case "scroll":
              ce = Sv;
              break;
            case "wheel":
              ce = Wv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Rv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = qf;
          }
          var ye = (t & 4) !== 0, At = !ye && e === "scroll", j = ye ? X !== null ? X + "Capture" : null : X;
          ye = [];
          for (var A = W, H; A !== null; ) {
            H = A;
            var le = H.stateNode;
            if (H.tag === 5 && le !== null && (H = le, j !== null && (le = ue(A, j), le != null && ye.push(Fi(A, le, H)))), At) break;
            A = A.return;
          }
          0 < ye.length && (X = new ce(X, ve, null, r, Z), J.push({ event: X, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (X = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", X && r !== vr && (ve = r.relatedTarget || r.fromElement) && (co(ve) || ve[wr])) break e;
          if ((ce || X) && (X = Z.window === Z ? Z : (X = Z.ownerDocument) ? X.defaultView || X.parentWindow : window, ce ? (ve = r.relatedTarget || r.toElement, ce = W, ve = ve ? co(ve) : null, ve !== null && (At = yr(ve), ve !== At || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (ce = null, ve = W), ce !== ve)) {
            if (ye = Qf, le = "onMouseLeave", j = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ye = qf, le = "onPointerLeave", j = "onPointerEnter", A = "pointer"), At = ce == null ? X : Ho(ce), H = ve == null ? X : Ho(ve), X = new ye(le, A + "leave", ce, r, Z), X.target = At, X.relatedTarget = H, le = null, co(Z) === W && (ye = new ye(j, A + "enter", ve, r, Z), ye.target = H, ye.relatedTarget = At, le = ye), At = le, ce && ve) t: {
              for (ye = ce, j = ve, A = 0, H = ye; H; H = Mo(H)) A++;
              for (H = 0, le = j; le; le = Mo(le)) H++;
              for (; 0 < A - H; ) ye = Mo(ye), A--;
              for (; 0 < H - A; ) j = Mo(j), H--;
              for (; A--; ) {
                if (ye === j || j !== null && ye === j.alternate) break t;
                ye = Mo(ye), j = Mo(j);
              }
              ye = null;
            }
            else ye = null;
            ce !== null && _d(J, X, ce, ye, !1), ve !== null && At !== null && _d(J, At, ve, ye, !0);
          }
        }
        e: {
          if (X = W ? Ho(W) : window, ce = X.nodeName && X.nodeName.toLowerCase(), ce === "select" || ce === "input" && X.type === "file") var Se = Gv;
          else if (nd(X)) if (od) Se = Jv;
          else {
            Se = Xv;
            var Pe = qv;
          }
          else (ce = X.nodeName) && ce.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (Se = Zv);
          if (Se && (Se = Se(e, W))) {
            rd(J, Se, r, Z);
            break e;
          }
          Pe && Pe(e, X, W), e === "focusout" && (Pe = X._wrapperState) && Pe.controlled && X.type === "number" && _e(X, "number", X.value);
        }
        switch (Pe = W ? Ho(W) : window, e) {
          case "focusin":
            (nd(Pe) || Pe.contentEditable === "true") && (jo = Pe, ba = W, Ni = null);
            break;
          case "focusout":
            Ni = ba = jo = null;
            break;
          case "mousedown":
            ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ja = !1, dd(J, r, Z);
            break;
          case "selectionchange":
            if (n0) break;
          case "keydown":
          case "keyup":
            dd(J, r, Z);
        }
        var Ae;
        if (Aa) e: {
          switch (e) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else bo ? ed(e, r) && (je = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (je = "onCompositionStart");
        je && (Xf && r.locale !== "ko" && (bo || je !== "onCompositionStart" ? je === "onCompositionEnd" && bo && (Ae = Yf()) : (jr = Z, Ea = "value" in jr ? jr.value : jr.textContent, bo = !0)), Pe = Yl(W, je), 0 < Pe.length && (je = new Gf(je, e, null, r, Z), J.push({ event: je, listeners: Pe }), Ae ? je.data = Ae : (Ae = td(r), Ae !== null && (je.data = Ae)))), (Ae = $v ? Vv(e, r) : Yv(e, r)) && (W = Yl(W, "onBeforeInput"), 0 < W.length && (Z = new Gf("onBeforeInput", "beforeinput", null, r, Z), J.push({ event: Z, listeners: W }), Z.data = Ae));
      }
      Sd(J, t);
    });
  }
  function Fi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Yl(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var a = e, f = a.stateNode;
      a.tag === 5 && f !== null && (a = f, f = ue(e, r), f != null && i.unshift(Fi(e, f, a)), f = ue(e, t), f != null && i.push(Fi(e, f, a))), e = e.return;
    }
    return i;
  }
  function Mo(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function _d(e, t, r, i, a) {
    for (var f = t._reactName, m = []; r !== null && r !== i; ) {
      var k = r, P = k.alternate, W = k.stateNode;
      if (P !== null && P === i) break;
      k.tag === 5 && W !== null && (k = W, a ? (P = ue(r, f), P != null && m.unshift(Fi(r, P, k))) : a || (P = ue(r, f), P != null && m.push(Fi(r, P, k)))), r = r.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var l0 = /\r\n?/g, s0 = /\u0000|\uFFFD/g;
  function Cd(e) {
    return (typeof e == "string" ? e : "" + e).replace(l0, `
`).replace(s0, "");
  }
  function Kl(e, t, r) {
    if (t = Cd(t), Cd(e) !== t && r) throw Error(l(425));
  }
  function Ql() {
  }
  var Wa = null, Ua = null;
  function $a(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Va = typeof setTimeout == "function" ? setTimeout : void 0, a0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ed = typeof Promise == "function" ? Promise : void 0, u0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ed < "u" ? function(e) {
    return Ed.resolve(null).then(e).catch(c0);
  } : Va;
  function c0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ya(e, t) {
    var r = t, i = 0;
    do {
      var a = r.nextSibling;
      if (e.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
        if (i === 0) {
          e.removeChild(a), Ii(t);
          return;
        }
        i--;
      } else r !== "$" && r !== "$?" && r !== "$!" || i++;
      r = a;
    } while (r);
    Ii(t);
  }
  function Mr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Td(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Do = Math.random().toString(36).slice(2), tr = "__reactFiber$" + Do, Mi = "__reactProps$" + Do, wr = "__reactContainer$" + Do, Ka = "__reactEvents$" + Do, f0 = "__reactListeners$" + Do, d0 = "__reactHandles$" + Do;
  function co(e) {
    var t = e[tr];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[wr] || r[tr]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Td(e); e !== null; ) {
          if (r = e[tr]) return r;
          e = Td(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Di(e) {
    return e = e[tr] || e[wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ho(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Gl(e) {
    return e[Mi] || null;
  }
  var Qa = [], Bo = -1;
  function Dr(e) {
    return { current: e };
  }
  function ht(e) {
    0 > Bo || (e.current = Qa[Bo], Qa[Bo] = null, Bo--);
  }
  function ft(e, t) {
    Bo++, Qa[Bo] = e.current, e.current = t;
  }
  var Hr = {}, Qt = Dr(Hr), un = Dr(!1), fo = Hr;
  function Wo(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Hr;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var a = {}, f;
    for (f in r) a[f] = t[f];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function cn(e) {
    return e = e.childContextTypes, e != null;
  }
  function ql() {
    ht(un), ht(Qt);
  }
  function Id(e, t, r) {
    if (Qt.current !== Hr) throw Error(l(168));
    ft(Qt, t), ft(un, r);
  }
  function Rd(e, t, r) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return r;
    i = i.getChildContext();
    for (var a in i) if (!(a in t)) throw Error(l(108, Ee(e) || "Unknown", a));
    return _({}, r, i);
  }
  function Xl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Hr, fo = Qt.current, ft(Qt, e), ft(un, un.current), !0;
  }
  function Od(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(l(169));
    r ? (e = Rd(e, t, fo), i.__reactInternalMemoizedMergedChildContext = e, ht(un), ht(Qt), ft(Qt, e)) : ht(un), ft(un, r);
  }
  var xr = null, Zl = !1, Ga = !1;
  function Pd(e) {
    xr === null ? xr = [e] : xr.push(e);
  }
  function p0(e) {
    Zl = !0, Pd(e);
  }
  function Br() {
    if (!Ga && xr !== null) {
      Ga = !0;
      var e = 0, t = rt;
      try {
        var r = xr;
        for (rt = 1; e < r.length; e++) {
          var i = r[e];
          do
            i = i(!0);
          while (i !== null);
        }
        xr = null, Zl = !1;
      } catch (a) {
        throw xr !== null && (xr = xr.slice(e + 1)), wi(uo, Br), a;
      } finally {
        rt = t, Ga = !1;
      }
    }
    return null;
  }
  var Uo = [], $o = 0, Jl = null, es = 0, Tn = [], In = 0, po = null, Sr = 1, kr = "";
  function mo(e, t) {
    Uo[$o++] = es, Uo[$o++] = Jl, Jl = e, es = t;
  }
  function Ad(e, t, r) {
    Tn[In++] = Sr, Tn[In++] = kr, Tn[In++] = po, po = e;
    var i = Sr;
    e = kr;
    var a = 32 - Fn(i) - 1;
    i &= ~(1 << a), r += 1;
    var f = 32 - Fn(t) + a;
    if (30 < f) {
      var m = a - a % 5;
      f = (i & (1 << m) - 1).toString(32), i >>= m, a -= m, Sr = 1 << 32 - Fn(t) + a | r << a | i, kr = f + e;
    } else Sr = 1 << f | r << a | i, kr = e;
  }
  function qa(e) {
    e.return !== null && (mo(e, 1), Ad(e, 1, 0));
  }
  function Xa(e) {
    for (; e === Jl; ) Jl = Uo[--$o], Uo[$o] = null, es = Uo[--$o], Uo[$o] = null;
    for (; e === po; ) po = Tn[--In], Tn[In] = null, kr = Tn[--In], Tn[In] = null, Sr = Tn[--In], Tn[In] = null;
  }
  var yn = null, wn = null, wt = !1, Dn = null;
  function Ld(e, t) {
    var r = An(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function zd(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, yn = e, wn = Mr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, yn = e, wn = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = po !== null ? { id: Sr, overflow: kr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = An(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, yn = e, wn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Za(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ja(e) {
    if (wt) {
      var t = wn;
      if (t) {
        var r = t;
        if (!zd(e, t)) {
          if (Za(e)) throw Error(l(418));
          t = Mr(r.nextSibling);
          var i = yn;
          t && zd(e, t) ? Ld(i, r) : (e.flags = e.flags & -4097 | 2, wt = !1, yn = e);
        }
      } else {
        if (Za(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, wt = !1, yn = e;
      }
    }
  }
  function Nd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    yn = e;
  }
  function ts(e) {
    if (e !== yn) return !1;
    if (!wt) return Nd(e), wt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps)), t && (t = wn)) {
      if (Za(e)) throw bd(), Error(l(418));
      for (; t; ) Ld(e, t), t = Mr(t.nextSibling);
    }
    if (Nd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                wn = Mr(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        wn = null;
      }
    } else wn = yn ? Mr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bd() {
    for (var e = wn; e; ) e = Mr(e.nextSibling);
  }
  function Vo() {
    wn = yn = null, wt = !1;
  }
  function eu(e) {
    Dn === null ? Dn = [e] : Dn.push(e);
  }
  var m0 = $.ReactCurrentBatchConfig;
  function Hn(e, t) {
    if (e && e.defaultProps) {
      t = _({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var ns = Dr(null), rs = null, Yo = null, tu = null;
  function nu() {
    tu = Yo = rs = null;
  }
  function ru(e) {
    var t = ns.current;
    ht(ns), e._currentValue = t;
  }
  function ou(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Ko(e, t) {
    rs = e, tu = Yo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (fn = !0), e.firstContext = null);
  }
  function Rn(e) {
    var t = e._currentValue;
    if (tu !== e) if (e = { context: e, memoizedValue: t, next: null }, Yo === null) {
      if (rs === null) throw Error(l(308));
      Yo = e, rs.dependencies = { lanes: 0, firstContext: e };
    } else Yo = Yo.next = e;
    return t;
  }
  var ho = null;
  function iu(e) {
    ho === null ? ho = [e] : ho.push(e);
  }
  function jd(e, t, r, i) {
    var a = t.interleaved;
    return a === null ? (r.next = r, iu(t)) : (r.next = a.next, a.next = r), t.interleaved = r, _r(e, i);
  }
  function _r(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var Wr = !1;
  function lu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Cr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ur(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ze & 2) !== 0) {
      var a = i.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), i.pending = t, _r(e, r);
    }
    return a = i.interleaved, a === null ? (t.next = t, iu(i)) : (t.next = a.next, a.next = t), i.interleaved = t, _r(e, r);
  }
  function os(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, xa(e, r);
    }
  }
  function Md(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, r === i)) {
      var a = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var m = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          f === null ? a = f = m : f = f.next = m, r = r.next;
        } while (r !== null);
        f === null ? a = f = t : f = f.next = t;
      } else a = f = t;
      r = { baseState: i.baseState, firstBaseUpdate: a, lastBaseUpdate: f, shared: i.shared, effects: i.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function is(e, t, r, i) {
    var a = e.updateQueue;
    Wr = !1;
    var f = a.firstBaseUpdate, m = a.lastBaseUpdate, k = a.shared.pending;
    if (k !== null) {
      a.shared.pending = null;
      var P = k, W = P.next;
      P.next = null, m === null ? f = W : m.next = W, m = P;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, k = Z.lastBaseUpdate, k !== m && (k === null ? Z.firstBaseUpdate = W : k.next = W, Z.lastBaseUpdate = P));
    }
    if (f !== null) {
      var J = a.baseState;
      m = 0, Z = W = P = null, k = f;
      do {
        var X = k.lane, ce = k.eventTime;
        if ((i & X) === X) {
          Z !== null && (Z = Z.next = {
            eventTime: ce,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ve = e, ye = k;
            switch (X = t, ce = r, ye.tag) {
              case 1:
                if (ve = ye.payload, typeof ve == "function") {
                  J = ve.call(ce, J, X);
                  break e;
                }
                J = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ye.payload, X = typeof ve == "function" ? ve.call(ce, J, X) : ve, X == null) break e;
                J = _({}, J, X);
                break e;
              case 2:
                Wr = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, X = a.effects, X === null ? a.effects = [k] : X.push(k));
        } else ce = { eventTime: ce, lane: X, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Z === null ? (W = Z = ce, P = J) : Z = Z.next = ce, m |= X;
        if (k = k.next, k === null) {
          if (k = a.shared.pending, k === null) break;
          X = k, k = X.next, X.next = null, a.lastBaseUpdate = X, a.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (P = J), a.baseState = P, a.firstBaseUpdate = W, a.lastBaseUpdate = Z, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          m |= a.lane, a = a.next;
        while (a !== t);
      } else f === null && (a.shared.lanes = 0);
      yo |= m, e.lanes = m, e.memoizedState = J;
    }
  }
  function Dd(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], a = i.callback;
      if (a !== null) {
        if (i.callback = null, i = r, typeof a != "function") throw Error(l(191, a));
        a.call(i);
      }
    }
  }
  var Hd = new n.Component().refs;
  function su(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : _({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ls = { isMounted: function(e) {
    return (e = e._reactInternals) ? yr(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var i = on(), a = Kr(e), f = Cr(i, a);
    f.payload = t, r != null && (f.callback = r), t = Ur(e, f, a), t !== null && (Un(t, e, a, i), os(t, e, a));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var i = on(), a = Kr(e), f = Cr(i, a);
    f.tag = 1, f.payload = t, r != null && (f.callback = r), t = Ur(e, f, a), t !== null && (Un(t, e, a, i), os(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = on(), i = Kr(e), a = Cr(r, i);
    a.tag = 2, t != null && (a.callback = t), t = Ur(e, a, i), t !== null && (Un(t, e, i, r), os(t, e, i));
  } };
  function Bd(e, t, r, i, a, f, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, f, m) : t.prototype && t.prototype.isPureReactComponent ? !zi(r, i) || !zi(a, f) : !0;
  }
  function Wd(e, t, r) {
    var i = !1, a = Hr, f = t.contextType;
    return typeof f == "object" && f !== null ? f = Rn(f) : (a = cn(t) ? fo : Qt.current, i = t.contextTypes, f = (i = i != null) ? Wo(e, a) : Hr), t = new t(r, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ls, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = f), t;
  }
  function Ud(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && ls.enqueueReplaceState(t, t.state, null);
  }
  function au(e, t, r, i) {
    var a = e.stateNode;
    a.props = r, a.state = e.memoizedState, a.refs = Hd, lu(e);
    var f = t.contextType;
    typeof f == "object" && f !== null ? a.context = Rn(f) : (f = cn(t) ? fo : Qt.current, a.context = Wo(e, f)), a.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (su(e, t, f, r), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ls.enqueueReplaceState(a, a.state, null), is(e, r, a, i), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Hi(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1) throw Error(l(309));
          var i = r.stateNode;
        }
        if (!i) throw Error(l(147, e));
        var a = i, f = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(m) {
          var k = a.refs;
          k === Hd && (k = a.refs = {}), m === null ? delete k[f] : k[f] = m;
        }, t._stringRef = f, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function ss(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function $d(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vd(e) {
    function t(j, A) {
      if (e) {
        var H = j.deletions;
        H === null ? (j.deletions = [A], j.flags |= 16) : H.push(A);
      }
    }
    function r(j, A) {
      if (!e) return null;
      for (; A !== null; ) t(j, A), A = A.sibling;
      return null;
    }
    function i(j, A) {
      for (j = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? j.set(A.key, A) : j.set(A.index, A), A = A.sibling;
      return j;
    }
    function a(j, A) {
      return j = Gr(j, A), j.index = 0, j.sibling = null, j;
    }
    function f(j, A, H) {
      return j.index = H, e ? (H = j.alternate, H !== null ? (H = H.index, H < A ? (j.flags |= 2, A) : H) : (j.flags |= 2, A)) : (j.flags |= 1048576, A);
    }
    function m(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function k(j, A, H, le) {
      return A === null || A.tag !== 6 ? (A = Vu(H, j.mode, le), A.return = j, A) : (A = a(A, H), A.return = j, A);
    }
    function P(j, A, H, le) {
      var Se = H.type;
      return Se === b ? Z(j, A, H.props.children, le, H.key) : A !== null && (A.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === we && $d(Se) === A.type) ? (le = a(A, H.props), le.ref = Hi(j, A, H), le.return = j, le) : (le = Ts(H.type, H.key, H.props, null, j.mode, le), le.ref = Hi(j, A, H), le.return = j, le);
    }
    function W(j, A, H, le) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== H.containerInfo || A.stateNode.implementation !== H.implementation ? (A = Yu(H, j.mode, le), A.return = j, A) : (A = a(A, H.children || []), A.return = j, A);
    }
    function Z(j, A, H, le, Se) {
      return A === null || A.tag !== 7 ? (A = ko(H, j.mode, le, Se), A.return = j, A) : (A = a(A, H), A.return = j, A);
    }
    function J(j, A, H) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = Vu("" + A, j.mode, H), A.return = j, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case D:
            return H = Ts(A.type, A.key, A.props, null, j.mode, H), H.ref = Hi(j, null, A), H.return = j, H;
          case N:
            return A = Yu(A, j.mode, H), A.return = j, A;
          case we:
            var le = A._init;
            return J(j, le(A._payload), H);
        }
        if (Ge(A) || Y(A)) return A = ko(A, j.mode, H, null), A.return = j, A;
        ss(j, A);
      }
      return null;
    }
    function X(j, A, H, le) {
      var Se = A !== null ? A.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return Se !== null ? null : k(j, A, "" + H, le);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case D:
            return H.key === Se ? P(j, A, H, le) : null;
          case N:
            return H.key === Se ? W(j, A, H, le) : null;
          case we:
            return Se = H._init, X(
              j,
              A,
              Se(H._payload),
              le
            );
        }
        if (Ge(H) || Y(H)) return Se !== null ? null : Z(j, A, H, le, null);
        ss(j, H);
      }
      return null;
    }
    function ce(j, A, H, le, Se) {
      if (typeof le == "string" && le !== "" || typeof le == "number") return j = j.get(H) || null, k(A, j, "" + le, Se);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case D:
            return j = j.get(le.key === null ? H : le.key) || null, P(A, j, le, Se);
          case N:
            return j = j.get(le.key === null ? H : le.key) || null, W(A, j, le, Se);
          case we:
            var Pe = le._init;
            return ce(j, A, H, Pe(le._payload), Se);
        }
        if (Ge(le) || Y(le)) return j = j.get(H) || null, Z(A, j, le, Se, null);
        ss(A, le);
      }
      return null;
    }
    function ve(j, A, H, le) {
      for (var Se = null, Pe = null, Ae = A, je = A = 0, Wt = null; Ae !== null && je < H.length; je++) {
        Ae.index > je ? (Wt = Ae, Ae = null) : Wt = Ae.sibling;
        var et = X(j, Ae, H[je], le);
        if (et === null) {
          Ae === null && (Ae = Wt);
          break;
        }
        e && Ae && et.alternate === null && t(j, Ae), A = f(et, A, je), Pe === null ? Se = et : Pe.sibling = et, Pe = et, Ae = Wt;
      }
      if (je === H.length) return r(j, Ae), wt && mo(j, je), Se;
      if (Ae === null) {
        for (; je < H.length; je++) Ae = J(j, H[je], le), Ae !== null && (A = f(Ae, A, je), Pe === null ? Se = Ae : Pe.sibling = Ae, Pe = Ae);
        return wt && mo(j, je), Se;
      }
      for (Ae = i(j, Ae); je < H.length; je++) Wt = ce(Ae, j, je, H[je], le), Wt !== null && (e && Wt.alternate !== null && Ae.delete(Wt.key === null ? je : Wt.key), A = f(Wt, A, je), Pe === null ? Se = Wt : Pe.sibling = Wt, Pe = Wt);
      return e && Ae.forEach(function(qr) {
        return t(j, qr);
      }), wt && mo(j, je), Se;
    }
    function ye(j, A, H, le) {
      var Se = Y(H);
      if (typeof Se != "function") throw Error(l(150));
      if (H = Se.call(H), H == null) throw Error(l(151));
      for (var Pe = Se = null, Ae = A, je = A = 0, Wt = null, et = H.next(); Ae !== null && !et.done; je++, et = H.next()) {
        Ae.index > je ? (Wt = Ae, Ae = null) : Wt = Ae.sibling;
        var qr = X(j, Ae, et.value, le);
        if (qr === null) {
          Ae === null && (Ae = Wt);
          break;
        }
        e && Ae && qr.alternate === null && t(j, Ae), A = f(qr, A, je), Pe === null ? Se = qr : Pe.sibling = qr, Pe = qr, Ae = Wt;
      }
      if (et.done) return r(
        j,
        Ae
      ), wt && mo(j, je), Se;
      if (Ae === null) {
        for (; !et.done; je++, et = H.next()) et = J(j, et.value, le), et !== null && (A = f(et, A, je), Pe === null ? Se = et : Pe.sibling = et, Pe = et);
        return wt && mo(j, je), Se;
      }
      for (Ae = i(j, Ae); !et.done; je++, et = H.next()) et = ce(Ae, j, je, et.value, le), et !== null && (e && et.alternate !== null && Ae.delete(et.key === null ? je : et.key), A = f(et, A, je), Pe === null ? Se = et : Pe.sibling = et, Pe = et);
      return e && Ae.forEach(function(K0) {
        return t(j, K0);
      }), wt && mo(j, je), Se;
    }
    function At(j, A, H, le) {
      if (typeof H == "object" && H !== null && H.type === b && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case D:
            e: {
              for (var Se = H.key, Pe = A; Pe !== null; ) {
                if (Pe.key === Se) {
                  if (Se = H.type, Se === b) {
                    if (Pe.tag === 7) {
                      r(j, Pe.sibling), A = a(Pe, H.props.children), A.return = j, j = A;
                      break e;
                    }
                  } else if (Pe.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === we && $d(Se) === Pe.type) {
                    r(j, Pe.sibling), A = a(Pe, H.props), A.ref = Hi(j, Pe, H), A.return = j, j = A;
                    break e;
                  }
                  r(j, Pe);
                  break;
                } else t(j, Pe);
                Pe = Pe.sibling;
              }
              H.type === b ? (A = ko(H.props.children, j.mode, le, H.key), A.return = j, j = A) : (le = Ts(H.type, H.key, H.props, null, j.mode, le), le.ref = Hi(j, A, H), le.return = j, j = le);
            }
            return m(j);
          case N:
            e: {
              for (Pe = H.key; A !== null; ) {
                if (A.key === Pe) if (A.tag === 4 && A.stateNode.containerInfo === H.containerInfo && A.stateNode.implementation === H.implementation) {
                  r(j, A.sibling), A = a(A, H.children || []), A.return = j, j = A;
                  break e;
                } else {
                  r(j, A);
                  break;
                }
                else t(j, A);
                A = A.sibling;
              }
              A = Yu(H, j.mode, le), A.return = j, j = A;
            }
            return m(j);
          case we:
            return Pe = H._init, At(j, A, Pe(H._payload), le);
        }
        if (Ge(H)) return ve(j, A, H, le);
        if (Y(H)) return ye(j, A, H, le);
        ss(j, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, A !== null && A.tag === 6 ? (r(j, A.sibling), A = a(A, H), A.return = j, j = A) : (r(j, A), A = Vu(H, j.mode, le), A.return = j, j = A), m(j)) : r(j, A);
    }
    return At;
  }
  var Qo = Vd(!0), Yd = Vd(!1), Bi = {}, nr = Dr(Bi), Wi = Dr(Bi), Ui = Dr(Bi);
  function go(e) {
    if (e === Bi) throw Error(l(174));
    return e;
  }
  function uu(e, t) {
    switch (ft(Ui, t), ft(Wi, e), ft(nr, Bi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lt(t, e);
    }
    ht(nr), ft(nr, t);
  }
  function Go() {
    ht(nr), ht(Wi), ht(Ui);
  }
  function Kd(e) {
    go(Ui.current);
    var t = go(nr.current), r = lt(t, e.type);
    t !== r && (ft(Wi, e), ft(nr, r));
  }
  function cu(e) {
    Wi.current === e && (ht(nr), ht(Wi));
  }
  var _t = Dr(0);
  function as(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var fu = [];
  function du() {
    for (var e = 0; e < fu.length; e++) fu[e]._workInProgressVersionPrimary = null;
    fu.length = 0;
  }
  var us = $.ReactCurrentDispatcher, pu = $.ReactCurrentBatchConfig, vo = 0, Ct = null, jt = null, Ht = null, cs = !1, $i = !1, Vi = 0, h0 = 0;
  function Gt() {
    throw Error(l(321));
  }
  function mu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Mn(e[r], t[r])) return !1;
    return !0;
  }
  function hu(e, t, r, i, a, f) {
    if (vo = f, Ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, us.current = e === null || e.memoizedState === null ? w0 : x0, e = r(i, a), $i) {
      f = 0;
      do {
        if ($i = !1, Vi = 0, 25 <= f) throw Error(l(301));
        f += 1, Ht = jt = null, t.updateQueue = null, us.current = S0, e = r(i, a);
      } while ($i);
    }
    if (us.current = ps, t = jt !== null && jt.next !== null, vo = 0, Ht = jt = Ct = null, cs = !1, t) throw Error(l(300));
    return e;
  }
  function gu() {
    var e = Vi !== 0;
    return Vi = 0, e;
  }
  function rr() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ht === null ? Ct.memoizedState = Ht = e : Ht = Ht.next = e, Ht;
  }
  function On() {
    if (jt === null) {
      var e = Ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = jt.next;
    var t = Ht === null ? Ct.memoizedState : Ht.next;
    if (t !== null) Ht = t, jt = e;
    else {
      if (e === null) throw Error(l(310));
      jt = e, e = { memoizedState: jt.memoizedState, baseState: jt.baseState, baseQueue: jt.baseQueue, queue: jt.queue, next: null }, Ht === null ? Ct.memoizedState = Ht = e : Ht = Ht.next = e;
    }
    return Ht;
  }
  function Yi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vu(e) {
    var t = On(), r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = jt, a = i.baseQueue, f = r.pending;
    if (f !== null) {
      if (a !== null) {
        var m = a.next;
        a.next = f.next, f.next = m;
      }
      i.baseQueue = a = f, r.pending = null;
    }
    if (a !== null) {
      f = a.next, i = i.baseState;
      var k = m = null, P = null, W = f;
      do {
        var Z = W.lane;
        if ((vo & Z) === Z) P !== null && (P = P.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), i = W.hasEagerState ? W.eagerState : e(i, W.action);
        else {
          var J = {
            lane: Z,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          P === null ? (k = P = J, m = i) : P = P.next = J, Ct.lanes |= Z, yo |= Z;
        }
        W = W.next;
      } while (W !== null && W !== f);
      P === null ? m = i : P.next = k, Mn(i, t.memoizedState) || (fn = !0), t.memoizedState = i, t.baseState = m, t.baseQueue = P, r.lastRenderedState = i;
    }
    if (e = r.interleaved, e !== null) {
      a = e;
      do
        f = a.lane, Ct.lanes |= f, yo |= f, a = a.next;
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function yu(e) {
    var t = On(), r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch, a = r.pending, f = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var m = a = a.next;
      do
        f = e(f, m.action), m = m.next;
      while (m !== a);
      Mn(f, t.memoizedState) || (fn = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), r.lastRenderedState = f;
    }
    return [f, i];
  }
  function Qd() {
  }
  function Gd(e, t) {
    var r = Ct, i = On(), a = t(), f = !Mn(i.memoizedState, a);
    if (f && (i.memoizedState = a, fn = !0), i = i.queue, wu(Zd.bind(null, r, i, e), [e]), i.getSnapshot !== t || f || Ht !== null && Ht.memoizedState.tag & 1) {
      if (r.flags |= 2048, Ki(9, Xd.bind(null, r, i, a, t), void 0, null), Bt === null) throw Error(l(349));
      (vo & 30) !== 0 || qd(r, t, a);
    }
    return a;
  }
  function qd(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ct.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function Xd(e, t, r, i) {
    t.value = r, t.getSnapshot = i, Jd(t) && ep(e);
  }
  function Zd(e, t, r) {
    return r(function() {
      Jd(t) && ep(e);
    });
  }
  function Jd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Mn(e, r);
    } catch {
      return !0;
    }
  }
  function ep(e) {
    var t = _r(e, 1);
    t !== null && Un(t, e, 1, -1);
  }
  function tp(e) {
    var t = rr();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: e }, t.queue = e, e = e.dispatch = y0.bind(null, Ct, e), [t.memoizedState, e];
  }
  function Ki(e, t, r, i) {
    return e = { tag: e, create: t, destroy: r, deps: i, next: null }, t = Ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ct.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function np() {
    return On().memoizedState;
  }
  function fs(e, t, r, i) {
    var a = rr();
    Ct.flags |= e, a.memoizedState = Ki(1 | t, r, void 0, i === void 0 ? null : i);
  }
  function ds(e, t, r, i) {
    var a = On();
    i = i === void 0 ? null : i;
    var f = void 0;
    if (jt !== null) {
      var m = jt.memoizedState;
      if (f = m.destroy, i !== null && mu(i, m.deps)) {
        a.memoizedState = Ki(t, r, f, i);
        return;
      }
    }
    Ct.flags |= e, a.memoizedState = Ki(1 | t, r, f, i);
  }
  function rp(e, t) {
    return fs(8390656, 8, e, t);
  }
  function wu(e, t) {
    return ds(2048, 8, e, t);
  }
  function op(e, t) {
    return ds(4, 2, e, t);
  }
  function ip(e, t) {
    return ds(4, 4, e, t);
  }
  function lp(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function sp(e, t, r) {
    return r = r != null ? r.concat([e]) : null, ds(4, 4, lp.bind(null, t, e), r);
  }
  function xu() {
  }
  function ap(e, t) {
    var r = On();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && mu(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function up(e, t) {
    var r = On();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && mu(t, i[1]) ? i[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function cp(e, t, r) {
    return (vo & 21) === 0 ? (e.baseState && (e.baseState = !1, fn = !0), e.memoizedState = r) : (Mn(r, t) || (r = jf(), Ct.lanes |= r, yo |= r, e.baseState = !0), t);
  }
  function g0(e, t) {
    var r = rt;
    rt = r !== 0 && 4 > r ? r : 4, e(!0);
    var i = pu.transition;
    pu.transition = {};
    try {
      e(!1), t();
    } finally {
      rt = r, pu.transition = i;
    }
  }
  function fp() {
    return On().memoizedState;
  }
  function v0(e, t, r) {
    var i = Kr(e);
    if (r = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null }, dp(e)) pp(t, r);
    else if (r = jd(e, t, r, i), r !== null) {
      var a = on();
      Un(r, e, i, a), mp(r, t, i);
    }
  }
  function y0(e, t, r) {
    var i = Kr(e), a = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (dp(e)) pp(t, a);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var m = t.lastRenderedState, k = f(m, r);
        if (a.hasEagerState = !0, a.eagerState = k, Mn(k, m)) {
          var P = t.interleaved;
          P === null ? (a.next = a, iu(t)) : (a.next = P.next, P.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      r = jd(e, t, a, i), r !== null && (a = on(), Un(r, e, i, a), mp(r, t, i));
    }
  }
  function dp(e) {
    var t = e.alternate;
    return e === Ct || t !== null && t === Ct;
  }
  function pp(e, t) {
    $i = cs = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function mp(e, t, r) {
    if ((r & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, xa(e, r);
    }
  }
  var ps = { readContext: Rn, useCallback: Gt, useContext: Gt, useEffect: Gt, useImperativeHandle: Gt, useInsertionEffect: Gt, useLayoutEffect: Gt, useMemo: Gt, useReducer: Gt, useRef: Gt, useState: Gt, useDebugValue: Gt, useDeferredValue: Gt, useTransition: Gt, useMutableSource: Gt, useSyncExternalStore: Gt, useId: Gt, unstable_isNewReconciler: !1 }, w0 = { readContext: Rn, useCallback: function(e, t) {
    return rr().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Rn, useEffect: rp, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, fs(
      4194308,
      4,
      lp.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return fs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return fs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = rr();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var i = rr();
    return t = r !== void 0 ? r(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = v0.bind(null, Ct, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = rr();
    return e = { current: e }, t.memoizedState = e;
  }, useState: tp, useDebugValue: xu, useDeferredValue: function(e) {
    return rr().memoizedState = e;
  }, useTransition: function() {
    var e = tp(!1), t = e[0];
    return e = g0.bind(null, e[1]), rr().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var i = Ct, a = rr();
    if (wt) {
      if (r === void 0) throw Error(l(407));
      r = r();
    } else {
      if (r = t(), Bt === null) throw Error(l(349));
      (vo & 30) !== 0 || qd(i, t, r);
    }
    a.memoizedState = r;
    var f = { value: r, getSnapshot: t };
    return a.queue = f, rp(Zd.bind(
      null,
      i,
      f,
      e
    ), [e]), i.flags |= 2048, Ki(9, Xd.bind(null, i, f, r, t), void 0, null), r;
  }, useId: function() {
    var e = rr(), t = Bt.identifierPrefix;
    if (wt) {
      var r = kr, i = Sr;
      r = (i & ~(1 << 32 - Fn(i) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Vi++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = h0++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, x0 = {
    readContext: Rn,
    useCallback: ap,
    useContext: Rn,
    useEffect: wu,
    useImperativeHandle: sp,
    useInsertionEffect: op,
    useLayoutEffect: ip,
    useMemo: up,
    useReducer: vu,
    useRef: np,
    useState: function() {
      return vu(Yi);
    },
    useDebugValue: xu,
    useDeferredValue: function(e) {
      var t = On();
      return cp(t, jt.memoizedState, e);
    },
    useTransition: function() {
      var e = vu(Yi)[0], t = On().memoizedState;
      return [e, t];
    },
    useMutableSource: Qd,
    useSyncExternalStore: Gd,
    useId: fp,
    unstable_isNewReconciler: !1
  }, S0 = { readContext: Rn, useCallback: ap, useContext: Rn, useEffect: wu, useImperativeHandle: sp, useInsertionEffect: op, useLayoutEffect: ip, useMemo: up, useReducer: yu, useRef: np, useState: function() {
    return yu(Yi);
  }, useDebugValue: xu, useDeferredValue: function(e) {
    var t = On();
    return jt === null ? t.memoizedState = e : cp(t, jt.memoizedState, e);
  }, useTransition: function() {
    var e = yu(Yi)[0], t = On().memoizedState;
    return [e, t];
  }, useMutableSource: Qd, useSyncExternalStore: Gd, useId: fp, unstable_isNewReconciler: !1 };
  function qo(e, t) {
    try {
      var r = "", i = t;
      do
        r += ke(i), i = i.return;
      while (i);
      var a = r;
    } catch (f) {
      a = `
Error generating stack: ` + f.message + `
` + f.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Su(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ku(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var k0 = typeof WeakMap == "function" ? WeakMap : Map;
  function hp(e, t, r) {
    r = Cr(-1, r), r.tag = 3, r.payload = { element: null };
    var i = t.value;
    return r.callback = function() {
      xs || (xs = !0, Fu = i), ku(e, t);
    }, r;
  }
  function gp(e, t, r) {
    r = Cr(-1, r), r.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var a = t.value;
      r.payload = function() {
        return i(a);
      }, r.callback = function() {
        ku(e, t);
      };
    }
    var f = e.stateNode;
    return f !== null && typeof f.componentDidCatch == "function" && (r.callback = function() {
      ku(e, t), typeof i != "function" && (Vr === null ? Vr = /* @__PURE__ */ new Set([this]) : Vr.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), r;
  }
  function vp(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new k0();
      var a = /* @__PURE__ */ new Set();
      i.set(t, a);
    } else a = i.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a));
    a.has(r) || (a.add(r), e = j0.bind(null, e, t, r), t.then(e, e));
  }
  function yp(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wp(e, t, r, i, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Cr(-1, 1), t.tag = 2, Ur(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var _0 = $.ReactCurrentOwner, fn = !1;
  function rn(e, t, r, i) {
    t.child = e === null ? Yd(t, null, r, i) : Qo(t, e.child, r, i);
  }
  function xp(e, t, r, i, a) {
    r = r.render;
    var f = t.ref;
    return Ko(t, a), i = hu(e, t, r, i, f, a), r = gu(), e !== null && !fn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Er(e, t, a)) : (wt && r && qa(t), t.flags |= 1, rn(e, t, i, a), t.child);
  }
  function Sp(e, t, r, i, a) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" && !$u(f) && f.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = f, kp(e, t, f, i, a)) : (e = Ts(r.type, null, i, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, (e.lanes & a) === 0) {
      var m = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : zi, r(m, i) && e.ref === t.ref) return Er(e, t, a);
    }
    return t.flags |= 1, e = Gr(f, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function kp(e, t, r, i, a) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (zi(f, i) && e.ref === t.ref) if (fn = !1, t.pendingProps = i = f, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (fn = !0);
      else return t.lanes = e.lanes, Er(e, t, a);
    }
    return _u(e, t, r, i, a);
  }
  function _p(e, t, r) {
    var i = t.pendingProps, a = i.children, f = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ft(Zo, xn), xn |= r;
    else {
      if ((r & 1073741824) === 0) return e = f !== null ? f.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ft(Zo, xn), xn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = f !== null ? f.baseLanes : r, ft(Zo, xn), xn |= i;
    }
    else f !== null ? (i = f.baseLanes | r, t.memoizedState = null) : i = r, ft(Zo, xn), xn |= i;
    return rn(e, t, a, r), t.child;
  }
  function Cp(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function _u(e, t, r, i, a) {
    var f = cn(r) ? fo : Qt.current;
    return f = Wo(t, f), Ko(t, a), r = hu(e, t, r, i, f, a), i = gu(), e !== null && !fn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Er(e, t, a)) : (wt && i && qa(t), t.flags |= 1, rn(e, t, r, a), t.child);
  }
  function Ep(e, t, r, i, a) {
    if (cn(r)) {
      var f = !0;
      Xl(t);
    } else f = !1;
    if (Ko(t, a), t.stateNode === null) hs(e, t), Wd(t, r, i), au(t, r, i, a), i = !0;
    else if (e === null) {
      var m = t.stateNode, k = t.memoizedProps;
      m.props = k;
      var P = m.context, W = r.contextType;
      typeof W == "object" && W !== null ? W = Rn(W) : (W = cn(r) ? fo : Qt.current, W = Wo(t, W));
      var Z = r.getDerivedStateFromProps, J = typeof Z == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      J || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (k !== i || P !== W) && Ud(t, m, i, W), Wr = !1;
      var X = t.memoizedState;
      m.state = X, is(t, i, m, a), P = t.memoizedState, k !== i || X !== P || un.current || Wr ? (typeof Z == "function" && (su(t, r, Z, i), P = t.memoizedState), (k = Wr || Bd(t, r, k, i, X, P, W)) ? (J || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = P), m.props = i, m.state = P, m.context = W, i = k) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      m = t.stateNode, Fd(e, t), k = t.memoizedProps, W = t.type === t.elementType ? k : Hn(t.type, k), m.props = W, J = t.pendingProps, X = m.context, P = r.contextType, typeof P == "object" && P !== null ? P = Rn(P) : (P = cn(r) ? fo : Qt.current, P = Wo(t, P));
      var ce = r.getDerivedStateFromProps;
      (Z = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (k !== J || X !== P) && Ud(t, m, i, P), Wr = !1, X = t.memoizedState, m.state = X, is(t, i, m, a);
      var ve = t.memoizedState;
      k !== J || X !== ve || un.current || Wr ? (typeof ce == "function" && (su(t, r, ce, i), ve = t.memoizedState), (W = Wr || Bd(t, r, W, i, X, ve, P) || !1) ? (Z || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(i, ve, P), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(i, ve, P)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), m.props = i, m.state = ve, m.context = P, i = W) : (typeof m.componentDidUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Cu(e, t, r, i, f, a);
  }
  function Cu(e, t, r, i, a, f) {
    Cp(e, t);
    var m = (t.flags & 128) !== 0;
    if (!i && !m) return a && Od(t, r, !1), Er(e, t, f);
    i = t.stateNode, _0.current = t;
    var k = m && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && m ? (t.child = Qo(t, e.child, null, f), t.child = Qo(t, null, k, f)) : rn(e, t, k, f), t.memoizedState = i.state, a && Od(t, r, !0), t.child;
  }
  function Tp(e) {
    var t = e.stateNode;
    t.pendingContext ? Id(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Id(e, t.context, !1), uu(e, t.containerInfo);
  }
  function Ip(e, t, r, i, a) {
    return Vo(), eu(a), t.flags |= 256, rn(e, t, r, i), t.child;
  }
  var Eu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Rp(e, t, r) {
    var i = t.pendingProps, a = _t.current, f = !1, m = (t.flags & 128) !== 0, k;
    if ((k = m) || (k = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), k ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ft(_t, a & 1), e === null)
      return Ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = i.children, e = i.fallback, f ? (i = t.mode, f = t.child, m = { mode: "hidden", children: m }, (i & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = m) : f = Is(m, i, 0, null), e = ko(e, i, r, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = Tu(r), t.memoizedState = Eu, e) : Iu(t, m));
    if (a = e.memoizedState, a !== null && (k = a.dehydrated, k !== null)) return C0(e, t, m, i, k, a, r);
    if (f) {
      f = i.fallback, m = t.mode, a = e.child, k = a.sibling;
      var P = { mode: "hidden", children: i.children };
      return (m & 1) === 0 && t.child !== a ? (i = t.child, i.childLanes = 0, i.pendingProps = P, t.deletions = null) : (i = Gr(a, P), i.subtreeFlags = a.subtreeFlags & 14680064), k !== null ? f = Gr(k, f) : (f = ko(f, m, r, null), f.flags |= 2), f.return = t, i.return = t, i.sibling = f, t.child = i, i = f, f = t.child, m = e.child.memoizedState, m = m === null ? Tu(r) : { baseLanes: m.baseLanes | r, cachePool: null, transitions: m.transitions }, f.memoizedState = m, f.childLanes = e.childLanes & ~r, t.memoizedState = Eu, i;
    }
    return f = e.child, e = f.sibling, i = Gr(f, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = r), i.return = t, i.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Iu(e, t) {
    return t = Is({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ms(e, t, r, i) {
    return i !== null && eu(i), Qo(t, e.child, null, r), e = Iu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function C0(e, t, r, i, a, f, m) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, i = Su(Error(l(422))), ms(e, t, m, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = i.fallback, a = t.mode, i = Is({ mode: "visible", children: i.children }, a, 0, null), f = ko(f, a, m, null), f.flags |= 2, i.return = t, f.return = t, i.sibling = f, t.child = i, (t.mode & 1) !== 0 && Qo(t, e.child, null, m), t.child.memoizedState = Tu(m), t.memoizedState = Eu, f);
    if ((t.mode & 1) === 0) return ms(e, t, m, null);
    if (a.data === "$!") {
      if (i = a.nextSibling && a.nextSibling.dataset, i) var k = i.dgst;
      return i = k, f = Error(l(419)), i = Su(f, i, void 0), ms(e, t, m, i);
    }
    if (k = (m & e.childLanes) !== 0, fn || k) {
      if (i = Bt, i !== null) {
        switch (m & -m) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (i.suspendedLanes | m)) !== 0 ? 0 : a, a !== 0 && a !== f.retryLane && (f.retryLane = a, _r(e, a), Un(i, e, a, -1));
      }
      return Uu(), i = Su(Error(l(421))), ms(e, t, m, i);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = F0.bind(null, e), a._reactRetry = t, null) : (e = f.treeContext, wn = Mr(a.nextSibling), yn = t, wt = !0, Dn = null, e !== null && (Tn[In++] = Sr, Tn[In++] = kr, Tn[In++] = po, Sr = e.id, kr = e.overflow, po = t), t = Iu(t, i.children), t.flags |= 4096, t);
  }
  function Op(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), ou(e.return, t, r);
  }
  function Ru(e, t, r, i, a) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: r, tailMode: a } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = r, f.tailMode = a);
  }
  function Pp(e, t, r) {
    var i = t.pendingProps, a = i.revealOrder, f = i.tail;
    if (rn(e, t, i.children, r), i = _t.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Op(e, r, t);
        else if (e.tag === 19) Op(e, r, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      i &= 1;
    }
    if (ft(_t, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (r = t.child, a = null; r !== null; ) e = r.alternate, e !== null && as(e) === null && (a = r), r = r.sibling;
        r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Ru(t, !1, a, r, f);
        break;
      case "backwards":
        for (r = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && as(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = r, r = a, a = e;
        }
        Ru(t, !0, r, null, f);
        break;
      case "together":
        Ru(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function hs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Er(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), yo |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = Gr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Gr(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function E0(e, t, r) {
    switch (t.tag) {
      case 3:
        Tp(t), Vo();
        break;
      case 5:
        Kd(t);
        break;
      case 1:
        cn(t.type) && Xl(t);
        break;
      case 4:
        uu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, a = t.memoizedProps.value;
        ft(ns, i._currentValue), i._currentValue = a;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (ft(_t, _t.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Rp(e, t, r) : (ft(_t, _t.current & 1), e = Er(e, t, r), e !== null ? e.sibling : null);
        ft(_t, _t.current & 1);
        break;
      case 19:
        if (i = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Pp(e, t, r);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ft(_t, _t.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, _p(e, t, r);
    }
    return Er(e, t, r);
  }
  var Ap, Ou, Lp, zp;
  Ap = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, Ou = function() {
  }, Lp = function(e, t, r, i) {
    var a = e.memoizedProps;
    if (a !== i) {
      e = t.stateNode, go(nr.current);
      var f = null;
      switch (r) {
        case "input":
          a = Ue(e, a), i = Ue(e, i), f = [];
          break;
        case "select":
          a = _({}, a, { value: void 0 }), i = _({}, i, { value: void 0 }), f = [];
          break;
        case "textarea":
          a = kt(e, a), i = kt(e, i), f = [];
          break;
        default:
          typeof a.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ql);
      }
      gr(r, i);
      var m;
      r = null;
      for (W in a) if (!i.hasOwnProperty(W) && a.hasOwnProperty(W) && a[W] != null) if (W === "style") {
        var k = a[W];
        for (m in k) k.hasOwnProperty(m) && (r || (r = {}), r[m] = "");
      } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (u.hasOwnProperty(W) ? f || (f = []) : (f = f || []).push(W, null));
      for (W in i) {
        var P = i[W];
        if (k = a != null ? a[W] : void 0, i.hasOwnProperty(W) && P !== k && (P != null || k != null)) if (W === "style") if (k) {
          for (m in k) !k.hasOwnProperty(m) || P && P.hasOwnProperty(m) || (r || (r = {}), r[m] = "");
          for (m in P) P.hasOwnProperty(m) && k[m] !== P[m] && (r || (r = {}), r[m] = P[m]);
        } else r || (f || (f = []), f.push(
          W,
          r
        )), r = P;
        else W === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, k = k ? k.__html : void 0, P != null && k !== P && (f = f || []).push(W, P)) : W === "children" ? typeof P != "string" && typeof P != "number" || (f = f || []).push(W, "" + P) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (u.hasOwnProperty(W) ? (P != null && W === "onScroll" && mt("scroll", e), f || k === P || (f = [])) : (f = f || []).push(W, P));
      }
      r && (f = f || []).push("style", r);
      var W = f;
      (t.updateQueue = W) && (t.flags |= 4);
    }
  }, zp = function(e, t, r, i) {
    r !== i && (t.flags |= 4);
  };
  function Qi(e, t) {
    if (!wt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var i = null; r !== null; ) r.alternate !== null && (i = r), r = r.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function qt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, i = 0;
    if (t) for (var a = e.child; a !== null; ) r |= a.lanes | a.childLanes, i |= a.subtreeFlags & 14680064, i |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) r |= a.lanes | a.childLanes, i |= a.subtreeFlags, i |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= i, e.childLanes = r, t;
  }
  function T0(e, t, r) {
    var i = t.pendingProps;
    switch (Xa(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(t), null;
      case 1:
        return cn(t.type) && ql(), qt(t), null;
      case 3:
        return i = t.stateNode, Go(), ht(un), ht(Qt), du(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (ts(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dn !== null && (Hu(Dn), Dn = null))), Ou(e, t), qt(t), null;
      case 5:
        cu(t);
        var a = go(Ui.current);
        if (r = t.type, e !== null && t.stateNode != null) Lp(e, t, r, i, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return qt(t), null;
          }
          if (e = go(nr.current), ts(t)) {
            i = t.stateNode, r = t.type;
            var f = t.memoizedProps;
            switch (i[tr] = t, i[Mi] = f, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                mt("cancel", i), mt("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                mt("load", i);
                break;
              case "video":
              case "audio":
                for (a = 0; a < bi.length; a++) mt(bi[a], i);
                break;
              case "source":
                mt("error", i);
                break;
              case "img":
              case "image":
              case "link":
                mt(
                  "error",
                  i
                ), mt("load", i);
                break;
              case "details":
                mt("toggle", i);
                break;
              case "input":
                Re(i, f), mt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!f.multiple }, mt("invalid", i);
                break;
              case "textarea":
                Nt(i, f), mt("invalid", i);
            }
            gr(r, f), a = null;
            for (var m in f) if (f.hasOwnProperty(m)) {
              var k = f[m];
              m === "children" ? typeof k == "string" ? i.textContent !== k && (f.suppressHydrationWarning !== !0 && Kl(i.textContent, k, e), a = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (f.suppressHydrationWarning !== !0 && Kl(
                i.textContent,
                k,
                e
              ), a = ["children", "" + k]) : u.hasOwnProperty(m) && k != null && m === "onScroll" && mt("scroll", i);
            }
            switch (r) {
              case "input":
                pe(i), Ne(i, f, !0);
                break;
              case "textarea":
                pe(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (i.onclick = Ql);
            }
            i = a, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            m = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = m.createElement(r, { is: i.is }) : (e = m.createElement(r), r === "select" && (m = e, i.multiple ? m.multiple = !0 : i.size && (m.size = i.size))) : e = m.createElementNS(e, r), e[tr] = t, e[Mi] = i, Ap(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = qn(r, i), r) {
                case "dialog":
                  mt("cancel", e), mt("close", e), a = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  mt("load", e), a = i;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < bi.length; a++) mt(bi[a], e);
                  a = i;
                  break;
                case "source":
                  mt("error", e), a = i;
                  break;
                case "img":
                case "image":
                case "link":
                  mt(
                    "error",
                    e
                  ), mt("load", e), a = i;
                  break;
                case "details":
                  mt("toggle", e), a = i;
                  break;
                case "input":
                  Re(e, i), a = Ue(e, i), mt("invalid", e);
                  break;
                case "option":
                  a = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, a = _({}, i, { value: void 0 }), mt("invalid", e);
                  break;
                case "textarea":
                  Nt(e, i), a = kt(e, i), mt("invalid", e);
                  break;
                default:
                  a = i;
              }
              gr(r, a), k = a;
              for (f in k) if (k.hasOwnProperty(f)) {
                var P = k[f];
                f === "style" ? ut(e, P) : f === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && Kt(e, P)) : f === "children" ? typeof P == "string" ? (r !== "textarea" || P !== "") && sn(e, P) : typeof P == "number" && sn(e, "" + P) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (u.hasOwnProperty(f) ? P != null && f === "onScroll" && mt("scroll", e) : P != null && B(e, f, P, m));
              }
              switch (r) {
                case "input":
                  pe(e), Ne(e, i, !1);
                  break;
                case "textarea":
                  pe(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + F(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, f = i.value, f != null ? St(e, !!i.multiple, f, !1) : i.defaultValue != null && St(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ql);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return qt(t), null;
      case 6:
        if (e && t.stateNode != null) zp(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166));
          if (r = go(Ui.current), go(nr.current), ts(t)) {
            if (i = t.stateNode, r = t.memoizedProps, i[tr] = t, (f = i.nodeValue !== r) && (e = yn, e !== null)) switch (e.tag) {
              case 3:
                Kl(i.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Kl(i.nodeValue, r, (e.mode & 1) !== 0);
            }
            f && (t.flags |= 4);
          } else i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i), i[tr] = t, t.stateNode = i;
        }
        return qt(t), null;
      case 13:
        if (ht(_t), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (wt && wn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) bd(), Vo(), t.flags |= 98560, f = !1;
          else if (f = ts(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(l(317));
              f[tr] = t;
            } else Vo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qt(t), f = !1;
          } else Dn !== null && (Hu(Dn), Dn = null), f = !0;
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (_t.current & 1) !== 0 ? Ft === 0 && (Ft = 3) : Uu())), t.updateQueue !== null && (t.flags |= 4), qt(t), null);
      case 4:
        return Go(), Ou(e, t), e === null && ji(t.stateNode.containerInfo), qt(t), null;
      case 10:
        return ru(t.type._context), qt(t), null;
      case 17:
        return cn(t.type) && ql(), qt(t), null;
      case 19:
        if (ht(_t), f = t.memoizedState, f === null) return qt(t), null;
        if (i = (t.flags & 128) !== 0, m = f.rendering, m === null) if (i) Qi(f, !1);
        else {
          if (Ft !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = as(e), m !== null) {
              for (t.flags |= 128, Qi(f, !1), i = m.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = r, r = t.child; r !== null; ) f = r, e = i, f.flags &= 14680066, m = f.alternate, m === null ? (f.childLanes = 0, f.lanes = e, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = m.childLanes, f.lanes = m.lanes, f.child = m.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = m.memoizedProps, f.memoizedState = m.memoizedState, f.updateQueue = m.updateQueue, f.type = m.type, e = m.dependencies, f.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return ft(_t, _t.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          f.tail !== null && st() > Jo && (t.flags |= 128, i = !0, Qi(f, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = as(m), e !== null) {
            if (t.flags |= 128, i = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Qi(f, !0), f.tail === null && f.tailMode === "hidden" && !m.alternate && !wt) return qt(t), null;
          } else 2 * st() - f.renderingStartTime > Jo && r !== 1073741824 && (t.flags |= 128, i = !0, Qi(f, !1), t.lanes = 4194304);
          f.isBackwards ? (m.sibling = t.child, t.child = m) : (r = f.last, r !== null ? r.sibling = m : t.child = m, f.last = m);
        }
        return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = st(), t.sibling = null, r = _t.current, ft(_t, i ? r & 1 | 2 : r & 1), t) : (qt(t), null);
      case 22:
      case 23:
        return Wu(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (xn & 1073741824) !== 0 && (qt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function I0(e, t) {
    switch (Xa(t), t.tag) {
      case 1:
        return cn(t.type) && ql(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Go(), ht(un), ht(Qt), du(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return cu(t), null;
      case 13:
        if (ht(_t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Vo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ht(_t), null;
      case 4:
        return Go(), null;
      case 10:
        return ru(t.type._context), null;
      case 22:
      case 23:
        return Wu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gs = !1, Xt = !1, R0 = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Xo(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (i) {
      Rt(e, t, i);
    }
    else r.current = null;
  }
  function Pu(e, t, r) {
    try {
      r();
    } catch (i) {
      Rt(e, t, i);
    }
  }
  var Np = !1;
  function O0(e, t) {
    if (Wa = jl, e = fd(), Na(e)) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var i = r.getSelection && r.getSelection();
        if (i && i.rangeCount !== 0) {
          r = i.anchorNode;
          var a = i.anchorOffset, f = i.focusNode;
          i = i.focusOffset;
          try {
            r.nodeType, f.nodeType;
          } catch {
            r = null;
            break e;
          }
          var m = 0, k = -1, P = -1, W = 0, Z = 0, J = e, X = null;
          t: for (; ; ) {
            for (var ce; J !== r || a !== 0 && J.nodeType !== 3 || (k = m + a), J !== f || i !== 0 && J.nodeType !== 3 || (P = m + i), J.nodeType === 3 && (m += J.nodeValue.length), (ce = J.firstChild) !== null; )
              X = J, J = ce;
            for (; ; ) {
              if (J === e) break t;
              if (X === r && ++W === a && (k = m), X === f && ++Z === i && (P = m), (ce = J.nextSibling) !== null) break;
              J = X, X = J.parentNode;
            }
            J = ce;
          }
          r = k === -1 || P === -1 ? null : { start: k, end: P };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ua = { focusedElem: e, selectionRange: r }, jl = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
    else for (; me !== null; ) {
      t = me;
      try {
        var ve = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var ye = ve.memoizedProps, At = ve.memoizedState, j = t.stateNode, A = j.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : Hn(t.type, ye), At);
              j.__reactInternalSnapshotBeforeUpdate = A;
            }
            break;
          case 3:
            var H = t.stateNode.containerInfo;
            H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (le) {
        Rt(t, t.return, le);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, me = e;
        break;
      }
      me = t.return;
    }
    return ve = Np, Np = !1, ve;
  }
  function Gi(e, t, r) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var a = i = i.next;
      do {
        if ((a.tag & e) === e) {
          var f = a.destroy;
          a.destroy = void 0, f !== void 0 && Pu(t, r, f);
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function vs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var r = t = t.next;
      do {
        if ((r.tag & e) === e) {
          var i = r.create;
          r.destroy = i();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Au(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function bp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, bp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[tr], delete t[Mi], delete t[Ka], delete t[f0], delete t[d0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function jp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Fp(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Ql));
    else if (i !== 4 && (e = e.child, e !== null)) for (Lu(e, t, r), e = e.sibling; e !== null; ) Lu(e, t, r), e = e.sibling;
  }
  function zu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (zu(e, t, r), e = e.sibling; e !== null; ) zu(e, t, r), e = e.sibling;
  }
  var Vt = null, Bn = !1;
  function $r(e, t, r) {
    for (r = r.child; r !== null; ) Mp(e, t, r), r = r.sibling;
  }
  function Mp(e, t, r) {
    if (er && typeof er.onCommitFiberUnmount == "function") try {
      er.onCommitFiberUnmount(Pl, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        Xt || Xo(r, t);
      case 6:
        var i = Vt, a = Bn;
        Vt = null, $r(e, t, r), Vt = i, Bn = a, Vt !== null && (Bn ? (e = Vt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Vt.removeChild(r.stateNode));
        break;
      case 18:
        Vt !== null && (Bn ? (e = Vt, r = r.stateNode, e.nodeType === 8 ? Ya(e.parentNode, r) : e.nodeType === 1 && Ya(e, r), Ii(e)) : Ya(Vt, r.stateNode));
        break;
      case 4:
        i = Vt, a = Bn, Vt = r.stateNode.containerInfo, Bn = !0, $r(e, t, r), Vt = i, Bn = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xt && (i = r.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          a = i = i.next;
          do {
            var f = a, m = f.destroy;
            f = f.tag, m !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Pu(r, t, m), a = a.next;
          } while (a !== i);
        }
        $r(e, t, r);
        break;
      case 1:
        if (!Xt && (Xo(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = r.memoizedProps, i.state = r.memoizedState, i.componentWillUnmount();
        } catch (k) {
          Rt(r, t, k);
        }
        $r(e, t, r);
        break;
      case 21:
        $r(e, t, r);
        break;
      case 22:
        r.mode & 1 ? (Xt = (i = Xt) || r.memoizedState !== null, $r(e, t, r), Xt = i) : $r(e, t, r);
        break;
      default:
        $r(e, t, r);
    }
  }
  function Dp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new R0()), t.forEach(function(i) {
        var a = M0.bind(null, e, i);
        r.has(i) || (r.add(i), i.then(a, a));
      });
    }
  }
  function Wn(e, t) {
    var r = t.deletions;
    if (r !== null) for (var i = 0; i < r.length; i++) {
      var a = r[i];
      try {
        var f = e, m = t, k = m;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Vt = k.stateNode, Bn = !1;
              break e;
            case 3:
              Vt = k.stateNode.containerInfo, Bn = !0;
              break e;
            case 4:
              Vt = k.stateNode.containerInfo, Bn = !0;
              break e;
          }
          k = k.return;
        }
        if (Vt === null) throw Error(l(160));
        Mp(f, m, a), Vt = null, Bn = !1;
        var P = a.alternate;
        P !== null && (P.return = null), a.return = null;
      } catch (W) {
        Rt(a, t, W);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hp(t, e), t = t.sibling;
  }
  function Hp(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Wn(t, e), or(e), i & 4) {
          try {
            Gi(3, e, e.return), vs(3, e);
          } catch (ye) {
            Rt(e, e.return, ye);
          }
          try {
            Gi(5, e, e.return);
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        break;
      case 1:
        Wn(t, e), or(e), i & 512 && r !== null && Xo(r, r.return);
        break;
      case 5:
        if (Wn(t, e), or(e), i & 512 && r !== null && Xo(r, r.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            sn(a, "");
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        if (i & 4 && (a = e.stateNode, a != null)) {
          var f = e.memoizedProps, m = r !== null ? r.memoizedProps : f, k = e.type, P = e.updateQueue;
          if (e.updateQueue = null, P !== null) try {
            k === "input" && f.type === "radio" && f.name != null && ze(a, f), qn(k, m);
            var W = qn(k, f);
            for (m = 0; m < P.length; m += 2) {
              var Z = P[m], J = P[m + 1];
              Z === "style" ? ut(a, J) : Z === "dangerouslySetInnerHTML" ? Kt(a, J) : Z === "children" ? sn(a, J) : B(a, Z, J, W);
            }
            switch (k) {
              case "input":
                Ve(a, f);
                break;
              case "textarea":
                tt(a, f);
                break;
              case "select":
                var X = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!f.multiple;
                var ce = f.value;
                ce != null ? St(a, !!f.multiple, ce, !1) : X !== !!f.multiple && (f.defaultValue != null ? St(
                  a,
                  !!f.multiple,
                  f.defaultValue,
                  !0
                ) : St(a, !!f.multiple, f.multiple ? [] : "", !1));
            }
            a[Mi] = f;
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (Wn(t, e), or(e), i & 4) {
          if (e.stateNode === null) throw Error(l(162));
          a = e.stateNode, f = e.memoizedProps;
          try {
            a.nodeValue = f;
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (Wn(t, e), or(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Ii(t.containerInfo);
        } catch (ye) {
          Rt(e, e.return, ye);
        }
        break;
      case 4:
        Wn(t, e), or(e);
        break;
      case 13:
        Wn(t, e), or(e), a = e.child, a.flags & 8192 && (f = a.memoizedState !== null, a.stateNode.isHidden = f, !f || a.alternate !== null && a.alternate.memoizedState !== null || (ju = st())), i & 4 && Dp(e);
        break;
      case 22:
        if (Z = r !== null && r.memoizedState !== null, e.mode & 1 ? (Xt = (W = Xt) || Z, Wn(t, e), Xt = W) : Wn(t, e), or(e), i & 8192) {
          if (W = e.memoizedState !== null, (e.stateNode.isHidden = W) && !Z && (e.mode & 1) !== 0) for (me = e, Z = e.child; Z !== null; ) {
            for (J = me = Z; me !== null; ) {
              switch (X = me, ce = X.child, X.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gi(4, X, X.return);
                  break;
                case 1:
                  Xo(X, X.return);
                  var ve = X.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = X, r = X.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ye) {
                      Rt(i, r, ye);
                    }
                  }
                  break;
                case 5:
                  Xo(X, X.return);
                  break;
                case 22:
                  if (X.memoizedState !== null) {
                    Up(J);
                    continue;
                  }
              }
              ce !== null ? (ce.return = X, me = ce) : Up(J);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, J = e; ; ) {
            if (J.tag === 5) {
              if (Z === null) {
                Z = J;
                try {
                  a = J.stateNode, W ? (f = a.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (k = J.stateNode, P = J.memoizedProps.style, m = P != null && P.hasOwnProperty("display") ? P.display : null, k.style.display = Lt("display", m));
                } catch (ye) {
                  Rt(e, e.return, ye);
                }
              }
            } else if (J.tag === 6) {
              if (Z === null) try {
                J.stateNode.nodeValue = W ? "" : J.memoizedProps;
              } catch (ye) {
                Rt(e, e.return, ye);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === e) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === e) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === e) break e;
              Z === J && (Z = null), J = J.return;
            }
            Z === J && (Z = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        Wn(t, e), or(e), i & 4 && Dp(e);
        break;
      case 21:
        break;
      default:
        Wn(
          t,
          e
        ), or(e);
    }
  }
  function or(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (jp(r)) {
              var i = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (i.tag) {
          case 5:
            var a = i.stateNode;
            i.flags & 32 && (sn(a, ""), i.flags &= -33);
            var f = Fp(e);
            zu(e, f, a);
            break;
          case 3:
          case 4:
            var m = i.stateNode.containerInfo, k = Fp(e);
            Lu(e, k, m);
            break;
          default:
            throw Error(l(161));
        }
      } catch (P) {
        Rt(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function P0(e, t, r) {
    me = e, Bp(e);
  }
  function Bp(e, t, r) {
    for (var i = (e.mode & 1) !== 0; me !== null; ) {
      var a = me, f = a.child;
      if (a.tag === 22 && i) {
        var m = a.memoizedState !== null || gs;
        if (!m) {
          var k = a.alternate, P = k !== null && k.memoizedState !== null || Xt;
          k = gs;
          var W = Xt;
          if (gs = m, (Xt = P) && !W) for (me = a; me !== null; ) m = me, P = m.child, m.tag === 22 && m.memoizedState !== null ? $p(a) : P !== null ? (P.return = m, me = P) : $p(a);
          for (; f !== null; ) me = f, Bp(f), f = f.sibling;
          me = a, gs = k, Xt = W;
        }
        Wp(e);
      } else (a.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = a, me = f) : Wp(e);
    }
  }
  function Wp(e) {
    for (; me !== null; ) {
      var t = me;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xt || vs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Xt) if (r === null) i.componentDidMount();
              else {
                var a = t.elementType === t.type ? r.memoizedProps : Hn(t.type, r.memoizedProps);
                i.componentDidUpdate(a, r.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var f = t.updateQueue;
              f !== null && Dd(t, f, i);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                Dd(t, m, r);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (r === null && t.flags & 4) {
                r = k;
                var P = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    P.autoFocus && r.focus();
                    break;
                  case "img":
                    P.src && (r.src = P.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var W = t.alternate;
                if (W !== null) {
                  var Z = W.memoizedState;
                  if (Z !== null) {
                    var J = Z.dehydrated;
                    J !== null && Ii(J);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(l(163));
          }
          Xt || t.flags & 512 && Au(t);
        } catch (X) {
          Rt(t, t.return, X);
        }
      }
      if (t === e) {
        me = null;
        break;
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, me = r;
        break;
      }
      me = t.return;
    }
  }
  function Up(e) {
    for (; me !== null; ) {
      var t = me;
      if (t === e) {
        me = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, me = r;
        break;
      }
      me = t.return;
    }
  }
  function $p(e) {
    for (; me !== null; ) {
      var t = me;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              vs(4, t);
            } catch (P) {
              Rt(t, r, P);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var a = t.return;
              try {
                i.componentDidMount();
              } catch (P) {
                Rt(t, a, P);
              }
            }
            var f = t.return;
            try {
              Au(t);
            } catch (P) {
              Rt(t, f, P);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Au(t);
            } catch (P) {
              Rt(t, m, P);
            }
        }
      } catch (P) {
        Rt(t, t.return, P);
      }
      if (t === e) {
        me = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, me = k;
        break;
      }
      me = t.return;
    }
  }
  var A0 = Math.ceil, ys = $.ReactCurrentDispatcher, Nu = $.ReactCurrentOwner, Pn = $.ReactCurrentBatchConfig, Ze = 0, Bt = null, zt = null, Yt = 0, xn = 0, Zo = Dr(0), Ft = 0, qi = null, yo = 0, ws = 0, bu = 0, Xi = null, dn = null, ju = 0, Jo = 1 / 0, Tr = null, xs = !1, Fu = null, Vr = null, Ss = !1, Yr = null, ks = 0, Zi = 0, Mu = null, _s = -1, Cs = 0;
  function on() {
    return (Ze & 6) !== 0 ? st() : _s !== -1 ? _s : _s = st();
  }
  function Kr(e) {
    return (e.mode & 1) === 0 ? 1 : (Ze & 2) !== 0 && Yt !== 0 ? Yt & -Yt : m0.transition !== null ? (Cs === 0 && (Cs = jf()), Cs) : (e = rt, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vf(e.type)), e);
  }
  function Un(e, t, r, i) {
    if (50 < Zi) throw Zi = 0, Mu = null, Error(l(185));
    ki(e, r, i), ((Ze & 2) === 0 || e !== Bt) && (e === Bt && ((Ze & 2) === 0 && (ws |= r), Ft === 4 && Qr(e, Yt)), pn(e, i), r === 1 && Ze === 0 && (t.mode & 1) === 0 && (Jo = st() + 500, Zl && Br()));
  }
  function pn(e, t) {
    var r = e.callbackNode;
    mv(e, t);
    var i = zl(e, e === Bt ? Yt : 0);
    if (i === 0) r !== null && Je(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (r != null && Je(r), t === 1) e.tag === 0 ? p0(Yp.bind(null, e)) : Pd(Yp.bind(null, e)), u0(function() {
        (Ze & 6) === 0 && Br();
      }), r = null;
      else {
        switch (Ff(i)) {
          case 1:
            r = uo;
            break;
          case 4:
            r = Nf;
            break;
          case 16:
            r = Ol;
            break;
          case 536870912:
            r = bf;
            break;
          default:
            r = Ol;
        }
        r = em(r, Vp.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function Vp(e, t) {
    if (_s = -1, Cs = 0, (Ze & 6) !== 0) throw Error(l(327));
    var r = e.callbackNode;
    if (ei() && e.callbackNode !== r) return null;
    var i = zl(e, e === Bt ? Yt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Es(e, i);
    else {
      t = i;
      var a = Ze;
      Ze |= 2;
      var f = Qp();
      (Bt !== e || Yt !== t) && (Tr = null, Jo = st() + 500, xo(e, t));
      do
        try {
          N0();
          break;
        } catch (k) {
          Kp(e, k);
        }
      while (!0);
      nu(), ys.current = f, Ze = a, zt !== null ? t = 0 : (Bt = null, Yt = 0, t = Ft);
    }
    if (t !== 0) {
      if (t === 2 && (a = ya(e), a !== 0 && (i = a, t = Du(e, a))), t === 1) throw r = qi, xo(e, 0), Qr(e, i), pn(e, st()), r;
      if (t === 6) Qr(e, i);
      else {
        if (a = e.current.alternate, (i & 30) === 0 && !L0(a) && (t = Es(e, i), t === 2 && (f = ya(e), f !== 0 && (i = f, t = Du(e, f))), t === 1)) throw r = qi, xo(e, 0), Qr(e, i), pn(e, st()), r;
        switch (e.finishedWork = a, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            So(e, dn, Tr);
            break;
          case 3:
            if (Qr(e, i), (i & 130023424) === i && (t = ju + 500 - st(), 10 < t)) {
              if (zl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & i) !== i) {
                on(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Va(So.bind(null, e, dn, Tr), t);
              break;
            }
            So(e, dn, Tr);
            break;
          case 4:
            if (Qr(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, a = -1; 0 < i; ) {
              var m = 31 - Fn(i);
              f = 1 << m, m = t[m], m > a && (a = m), i &= ~f;
            }
            if (i = a, i = st() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * A0(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Va(So.bind(null, e, dn, Tr), i);
              break;
            }
            So(e, dn, Tr);
            break;
          case 5:
            So(e, dn, Tr);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return pn(e, st()), e.callbackNode === r ? Vp.bind(null, e) : null;
  }
  function Du(e, t) {
    var r = Xi;
    return e.current.memoizedState.isDehydrated && (xo(e, t).flags |= 256), e = Es(e, t), e !== 2 && (t = dn, dn = r, t !== null && Hu(t)), e;
  }
  function Hu(e) {
    dn === null ? dn = e : dn.push.apply(dn, e);
  }
  function L0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var i = 0; i < r.length; i++) {
          var a = r[i], f = a.getSnapshot;
          a = a.value;
          try {
            if (!Mn(f(), a)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Qr(e, t) {
    for (t &= ~bu, t &= ~ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - Fn(t), i = 1 << r;
      e[r] = -1, t &= ~i;
    }
  }
  function Yp(e) {
    if ((Ze & 6) !== 0) throw Error(l(327));
    ei();
    var t = zl(e, 0);
    if ((t & 1) === 0) return pn(e, st()), null;
    var r = Es(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = ya(e);
      i !== 0 && (t = i, r = Du(e, i));
    }
    if (r === 1) throw r = qi, xo(e, 0), Qr(e, t), pn(e, st()), r;
    if (r === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, So(e, dn, Tr), pn(e, st()), null;
  }
  function Bu(e, t) {
    var r = Ze;
    Ze |= 1;
    try {
      return e(t);
    } finally {
      Ze = r, Ze === 0 && (Jo = st() + 500, Zl && Br());
    }
  }
  function wo(e) {
    Yr !== null && Yr.tag === 0 && (Ze & 6) === 0 && ei();
    var t = Ze;
    Ze |= 1;
    var r = Pn.transition, i = rt;
    try {
      if (Pn.transition = null, rt = 1, e) return e();
    } finally {
      rt = i, Pn.transition = r, Ze = t, (Ze & 6) === 0 && Br();
    }
  }
  function Wu() {
    xn = Zo.current, ht(Zo);
  }
  function xo(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, a0(r)), zt !== null) for (r = zt.return; r !== null; ) {
      var i = r;
      switch (Xa(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && ql();
          break;
        case 3:
          Go(), ht(un), ht(Qt), du();
          break;
        case 5:
          cu(i);
          break;
        case 4:
          Go();
          break;
        case 13:
          ht(_t);
          break;
        case 19:
          ht(_t);
          break;
        case 10:
          ru(i.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      r = r.return;
    }
    if (Bt = e, zt = e = Gr(e.current, null), Yt = xn = t, Ft = 0, qi = null, bu = ws = yo = 0, dn = Xi = null, ho !== null) {
      for (t = 0; t < ho.length; t++) if (r = ho[t], i = r.interleaved, i !== null) {
        r.interleaved = null;
        var a = i.next, f = r.pending;
        if (f !== null) {
          var m = f.next;
          f.next = a, i.next = m;
        }
        r.pending = i;
      }
      ho = null;
    }
    return e;
  }
  function Kp(e, t) {
    do {
      var r = zt;
      try {
        if (nu(), us.current = ps, cs) {
          for (var i = Ct.memoizedState; i !== null; ) {
            var a = i.queue;
            a !== null && (a.pending = null), i = i.next;
          }
          cs = !1;
        }
        if (vo = 0, Ht = jt = Ct = null, $i = !1, Vi = 0, Nu.current = null, r === null || r.return === null) {
          Ft = 1, qi = t, zt = null;
          break;
        }
        e: {
          var f = e, m = r.return, k = r, P = t;
          if (t = Yt, k.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var W = P, Z = k, J = Z.tag;
            if ((Z.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
              var X = Z.alternate;
              X ? (Z.updateQueue = X.updateQueue, Z.memoizedState = X.memoizedState, Z.lanes = X.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var ce = yp(m);
            if (ce !== null) {
              ce.flags &= -257, wp(ce, m, k, f, t), ce.mode & 1 && vp(f, W, t), t = ce, P = W;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(P), t.updateQueue = ye;
              } else ve.add(P);
              break e;
            } else {
              if ((t & 1) === 0) {
                vp(f, W, t), Uu();
                break e;
              }
              P = Error(l(426));
            }
          } else if (wt && k.mode & 1) {
            var At = yp(m);
            if (At !== null) {
              (At.flags & 65536) === 0 && (At.flags |= 256), wp(At, m, k, f, t), eu(qo(P, k));
              break e;
            }
          }
          f = P = qo(P, k), Ft !== 4 && (Ft = 2), Xi === null ? Xi = [f] : Xi.push(f), f = m;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536, t &= -t, f.lanes |= t;
                var j = hp(f, P, t);
                Md(f, j);
                break e;
              case 1:
                k = P;
                var A = f.type, H = f.stateNode;
                if ((f.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Vr === null || !Vr.has(H)))) {
                  f.flags |= 65536, t &= -t, f.lanes |= t;
                  var le = gp(f, k, t);
                  Md(f, le);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        qp(r);
      } catch (Se) {
        t = Se, zt === r && r !== null && (zt = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qp() {
    var e = ys.current;
    return ys.current = ps, e === null ? ps : e;
  }
  function Uu() {
    (Ft === 0 || Ft === 3 || Ft === 2) && (Ft = 4), Bt === null || (yo & 268435455) === 0 && (ws & 268435455) === 0 || Qr(Bt, Yt);
  }
  function Es(e, t) {
    var r = Ze;
    Ze |= 2;
    var i = Qp();
    (Bt !== e || Yt !== t) && (Tr = null, xo(e, t));
    do
      try {
        z0();
        break;
      } catch (a) {
        Kp(e, a);
      }
    while (!0);
    if (nu(), Ze = r, ys.current = i, zt !== null) throw Error(l(261));
    return Bt = null, Yt = 0, Ft;
  }
  function z0() {
    for (; zt !== null; ) Gp(zt);
  }
  function N0() {
    for (; zt !== null && !jn(); ) Gp(zt);
  }
  function Gp(e) {
    var t = Jp(e.alternate, e, xn);
    e.memoizedProps = e.pendingProps, t === null ? qp(e) : zt = t, Nu.current = null;
  }
  function qp(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = T0(r, t, xn), r !== null) {
          zt = r;
          return;
        }
      } else {
        if (r = I0(r, t), r !== null) {
          r.flags &= 32767, zt = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ft = 6, zt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        zt = t;
        return;
      }
      zt = t = e;
    } while (t !== null);
    Ft === 0 && (Ft = 5);
  }
  function So(e, t, r) {
    var i = rt, a = Pn.transition;
    try {
      Pn.transition = null, rt = 1, b0(e, t, r, i);
    } finally {
      Pn.transition = a, rt = i;
    }
    return null;
  }
  function b0(e, t, r, i) {
    do
      ei();
    while (Yr !== null);
    if ((Ze & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var f = r.lanes | r.childLanes;
    if (hv(e, f), e === Bt && (zt = Bt = null, Yt = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Ss || (Ss = !0, em(Ol, function() {
      return ei(), null;
    })), f = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || f) {
      f = Pn.transition, Pn.transition = null;
      var m = rt;
      rt = 1;
      var k = Ze;
      Ze |= 4, Nu.current = null, O0(e, r), Hp(r, e), t0(Ua), jl = !!Wa, Ua = Wa = null, e.current = r, P0(r), xi(), Ze = k, rt = m, Pn.transition = f;
    } else e.current = r;
    if (Ss && (Ss = !1, Yr = e, ks = a), f = e.pendingLanes, f === 0 && (Vr = null), uv(r.stateNode), pn(e, st()), t !== null) for (i = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], i(a.value, { componentStack: a.stack, digest: a.digest });
    if (xs) throw xs = !1, e = Fu, Fu = null, e;
    return (ks & 1) !== 0 && e.tag !== 0 && ei(), f = e.pendingLanes, (f & 1) !== 0 ? e === Mu ? Zi++ : (Zi = 0, Mu = e) : Zi = 0, Br(), null;
  }
  function ei() {
    if (Yr !== null) {
      var e = Ff(ks), t = Pn.transition, r = rt;
      try {
        if (Pn.transition = null, rt = 16 > e ? 16 : e, Yr === null) var i = !1;
        else {
          if (e = Yr, Yr = null, ks = 0, (Ze & 6) !== 0) throw Error(l(331));
          var a = Ze;
          for (Ze |= 4, me = e.current; me !== null; ) {
            var f = me, m = f.child;
            if ((me.flags & 16) !== 0) {
              var k = f.deletions;
              if (k !== null) {
                for (var P = 0; P < k.length; P++) {
                  var W = k[P];
                  for (me = W; me !== null; ) {
                    var Z = me;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gi(8, Z, f);
                    }
                    var J = Z.child;
                    if (J !== null) J.return = Z, me = J;
                    else for (; me !== null; ) {
                      Z = me;
                      var X = Z.sibling, ce = Z.return;
                      if (bp(Z), Z === W) {
                        me = null;
                        break;
                      }
                      if (X !== null) {
                        X.return = ce, me = X;
                        break;
                      }
                      me = ce;
                    }
                  }
                }
                var ve = f.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var At = ye.sibling;
                      ye.sibling = null, ye = At;
                    } while (ye !== null);
                  }
                }
                me = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && m !== null) m.return = f, me = m;
            else e: for (; me !== null; ) {
              if (f = me, (f.flags & 2048) !== 0) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Gi(9, f, f.return);
              }
              var j = f.sibling;
              if (j !== null) {
                j.return = f.return, me = j;
                break e;
              }
              me = f.return;
            }
          }
          var A = e.current;
          for (me = A; me !== null; ) {
            m = me;
            var H = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && H !== null) H.return = m, me = H;
            else e: for (m = A; me !== null; ) {
              if (k = me, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vs(9, k);
                }
              } catch (Se) {
                Rt(k, k.return, Se);
              }
              if (k === m) {
                me = null;
                break e;
              }
              var le = k.sibling;
              if (le !== null) {
                le.return = k.return, me = le;
                break e;
              }
              me = k.return;
            }
          }
          if (Ze = a, Br(), er && typeof er.onPostCommitFiberRoot == "function") try {
            er.onPostCommitFiberRoot(Pl, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        rt = r, Pn.transition = t;
      }
    }
    return !1;
  }
  function Xp(e, t, r) {
    t = qo(r, t), t = hp(e, t, 1), e = Ur(e, t, 1), t = on(), e !== null && (ki(e, 1, t), pn(e, t));
  }
  function Rt(e, t, r) {
    if (e.tag === 3) Xp(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Xp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Vr === null || !Vr.has(i))) {
          e = qo(r, e), e = gp(t, e, 1), t = Ur(t, e, 1), e = on(), t !== null && (ki(t, 1, e), pn(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function j0(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = on(), e.pingedLanes |= e.suspendedLanes & r, Bt === e && (Yt & r) === r && (Ft === 4 || Ft === 3 && (Yt & 130023424) === Yt && 500 > st() - ju ? xo(e, 0) : bu |= r), pn(e, t);
  }
  function Zp(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ll, Ll <<= 1, (Ll & 130023424) === 0 && (Ll = 4194304)));
    var r = on();
    e = _r(e, t), e !== null && (ki(e, t, r), pn(e, r));
  }
  function F0(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), Zp(e, r);
  }
  function M0(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    i !== null && i.delete(t), Zp(e, r);
  }
  var Jp;
  Jp = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || un.current) fn = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return fn = !1, E0(e, t, r);
      fn = (e.flags & 131072) !== 0;
    }
    else fn = !1, wt && (t.flags & 1048576) !== 0 && Ad(t, es, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        hs(e, t), e = t.pendingProps;
        var a = Wo(t, Qt.current);
        Ko(t, r), a = hu(null, t, i, e, a, r);
        var f = gu();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, cn(i) ? (f = !0, Xl(t)) : f = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, lu(t), a.updater = ls, t.stateNode = a, a._reactInternals = t, au(t, i, e, r), t = Cu(null, t, i, !0, f, r)) : (t.tag = 0, wt && f && qa(t), rn(null, t, a, r), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (hs(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = H0(i), e = Hn(i, e), a) {
            case 0:
              t = _u(null, t, i, e, r);
              break e;
            case 1:
              t = Ep(null, t, i, e, r);
              break e;
            case 11:
              t = xp(null, t, i, e, r);
              break e;
            case 14:
              t = Sp(null, t, i, Hn(i.type, e), r);
              break e;
          }
          throw Error(l(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Hn(i, a), _u(e, t, i, a, r);
      case 1:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Hn(i, a), Ep(e, t, i, a, r);
      case 3:
        e: {
          if (Tp(t), e === null) throw Error(l(387));
          i = t.pendingProps, f = t.memoizedState, a = f.element, Fd(e, t), is(t, i, null, r);
          var m = t.memoizedState;
          if (i = m.element, f.isDehydrated) if (f = { element: i, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            a = qo(Error(l(423)), t), t = Ip(e, t, i, r, a);
            break e;
          } else if (i !== a) {
            a = qo(Error(l(424)), t), t = Ip(e, t, i, r, a);
            break e;
          } else for (wn = Mr(t.stateNode.containerInfo.firstChild), yn = t, wt = !0, Dn = null, r = Yd(t, null, i, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Vo(), i === a) {
              t = Er(e, t, r);
              break e;
            }
            rn(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Kd(t), e === null && Ja(t), i = t.type, a = t.pendingProps, f = e !== null ? e.memoizedProps : null, m = a.children, $a(i, a) ? m = null : f !== null && $a(i, f) && (t.flags |= 32), Cp(e, t), rn(e, t, m, r), t.child;
      case 6:
        return e === null && Ja(t), null;
      case 13:
        return Rp(e, t, r);
      case 4:
        return uu(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Qo(t, null, i, r) : rn(e, t, i, r), t.child;
      case 11:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Hn(i, a), xp(e, t, i, a, r);
      case 7:
        return rn(e, t, t.pendingProps, r), t.child;
      case 8:
        return rn(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return rn(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (i = t.type._context, a = t.pendingProps, f = t.memoizedProps, m = a.value, ft(ns, i._currentValue), i._currentValue = m, f !== null) if (Mn(f.value, m)) {
            if (f.children === a.children && !un.current) {
              t = Er(e, t, r);
              break e;
            }
          } else for (f = t.child, f !== null && (f.return = t); f !== null; ) {
            var k = f.dependencies;
            if (k !== null) {
              m = f.child;
              for (var P = k.firstContext; P !== null; ) {
                if (P.context === i) {
                  if (f.tag === 1) {
                    P = Cr(-1, r & -r), P.tag = 2;
                    var W = f.updateQueue;
                    if (W !== null) {
                      W = W.shared;
                      var Z = W.pending;
                      Z === null ? P.next = P : (P.next = Z.next, Z.next = P), W.pending = P;
                    }
                  }
                  f.lanes |= r, P = f.alternate, P !== null && (P.lanes |= r), ou(
                    f.return,
                    r,
                    t
                  ), k.lanes |= r;
                  break;
                }
                P = P.next;
              }
            } else if (f.tag === 10) m = f.type === t.type ? null : f.child;
            else if (f.tag === 18) {
              if (m = f.return, m === null) throw Error(l(341));
              m.lanes |= r, k = m.alternate, k !== null && (k.lanes |= r), ou(m, r, t), m = f.sibling;
            } else m = f.child;
            if (m !== null) m.return = f;
            else for (m = f; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (f = m.sibling, f !== null) {
                f.return = m.return, m = f;
                break;
              }
              m = m.return;
            }
            f = m;
          }
          rn(e, t, a.children, r), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, i = t.pendingProps.children, Ko(t, r), a = Rn(a), i = i(a), t.flags |= 1, rn(e, t, i, r), t.child;
      case 14:
        return i = t.type, a = Hn(i, t.pendingProps), a = Hn(i.type, a), Sp(e, t, i, a, r);
      case 15:
        return kp(e, t, t.type, t.pendingProps, r);
      case 17:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Hn(i, a), hs(e, t), t.tag = 1, cn(i) ? (e = !0, Xl(t)) : e = !1, Ko(t, r), Wd(t, i, a), au(t, i, a, r), Cu(null, t, i, !0, e, r);
      case 19:
        return Pp(e, t, r);
      case 22:
        return _p(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function em(e, t) {
    return wi(e, t);
  }
  function D0(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function An(e, t, r, i) {
    return new D0(e, t, r, i);
  }
  function $u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function H0(e) {
    if (typeof e == "function") return $u(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Q) return 11;
      if (e === fe) return 14;
    }
    return 2;
  }
  function Gr(e, t) {
    var r = e.alternate;
    return r === null ? (r = An(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function Ts(e, t, r, i, a, f) {
    var m = 2;
    if (i = e, typeof e == "function") $u(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case b:
        return ko(r.children, a, f, t);
      case S:
        m = 8, a |= 8;
        break;
      case E:
        return e = An(12, r, t, a | 2), e.elementType = E, e.lanes = f, e;
      case ie:
        return e = An(13, r, t, a), e.elementType = ie, e.lanes = f, e;
      case K:
        return e = An(19, r, t, a), e.elementType = K, e.lanes = f, e;
      case re:
        return Is(r, a, f, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case L:
            m = 10;
            break e;
          case V:
            m = 9;
            break e;
          case Q:
            m = 11;
            break e;
          case fe:
            m = 14;
            break e;
          case we:
            m = 16, i = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = An(m, r, t, a), t.elementType = e, t.type = i, t.lanes = f, t;
  }
  function ko(e, t, r, i) {
    return e = An(7, e, i, t), e.lanes = r, e;
  }
  function Is(e, t, r, i) {
    return e = An(22, e, i, t), e.elementType = re, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function Vu(e, t, r) {
    return e = An(6, e, null, t), e.lanes = r, e;
  }
  function Yu(e, t, r) {
    return t = An(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function B0(e, t, r, i, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wa(0), this.expirationTimes = wa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wa(0), this.identifierPrefix = i, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Ku(e, t, r, i, a, f, m, k, P) {
    return e = new B0(e, t, r, k, P), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = An(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = { element: i, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lu(f), e;
  }
  function W0(e, t, r) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: N, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: r };
  }
  function tm(e) {
    if (!e) return Hr;
    e = e._reactInternals;
    e: {
      if (yr(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (cn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (cn(r)) return Rd(e, r, t);
    }
    return t;
  }
  function nm(e, t, r, i, a, f, m, k, P) {
    return e = Ku(r, i, !0, e, a, f, m, k, P), e.context = tm(null), r = e.current, i = on(), a = Kr(r), f = Cr(i, a), f.callback = t ?? null, Ur(r, f, a), e.current.lanes = a, ki(e, a, i), pn(e, i), e;
  }
  function Rs(e, t, r, i) {
    var a = t.current, f = on(), m = Kr(a);
    return r = tm(r), t.context === null ? t.context = r : t.pendingContext = r, t = Cr(f, m), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Ur(a, t, m), e !== null && (Un(e, a, m, f), os(e, a, m)), m;
  }
  function Os(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function rm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Qu(e, t) {
    rm(e, t), (e = e.alternate) && rm(e, t);
  }
  function U0() {
    return null;
  }
  var om = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Gu(e) {
    this._internalRoot = e;
  }
  Ps.prototype.render = Gu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    Rs(e, t, null, null);
  }, Ps.prototype.unmount = Gu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wo(function() {
        Rs(null, e, null, null);
      }), t[wr] = null;
    }
  };
  function Ps(e) {
    this._internalRoot = e;
  }
  Ps.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Hf();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < br.length && t !== 0 && t < br[r].priority; r++) ;
      br.splice(r, 0, e), r === 0 && Uf(e);
    }
  };
  function qu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function As(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function im() {
  }
  function $0(e, t, r, i, a) {
    if (a) {
      if (typeof i == "function") {
        var f = i;
        i = function() {
          var W = Os(m);
          f.call(W);
        };
      }
      var m = nm(t, i, e, 0, null, !1, !1, "", im);
      return e._reactRootContainer = m, e[wr] = m.current, ji(e.nodeType === 8 ? e.parentNode : e), wo(), m;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var W = Os(P);
        k.call(W);
      };
    }
    var P = Ku(e, 0, !1, null, null, !1, !1, "", im);
    return e._reactRootContainer = P, e[wr] = P.current, ji(e.nodeType === 8 ? e.parentNode : e), wo(function() {
      Rs(t, P, r, i);
    }), P;
  }
  function Ls(e, t, r, i, a) {
    var f = r._reactRootContainer;
    if (f) {
      var m = f;
      if (typeof a == "function") {
        var k = a;
        a = function() {
          var P = Os(m);
          k.call(P);
        };
      }
      Rs(t, m, e, a);
    } else m = $0(r, t, e, a, i);
    return Os(m);
  }
  Mf = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Si(t.pendingLanes);
          r !== 0 && (xa(t, r | 1), pn(t, st()), (Ze & 6) === 0 && (Jo = st() + 500, Br()));
        }
        break;
      case 13:
        wo(function() {
          var i = _r(e, 1);
          if (i !== null) {
            var a = on();
            Un(i, e, 1, a);
          }
        }), Qu(e, 1);
    }
  }, Sa = function(e) {
    if (e.tag === 13) {
      var t = _r(e, 134217728);
      if (t !== null) {
        var r = on();
        Un(t, e, 134217728, r);
      }
      Qu(e, 134217728);
    }
  }, Df = function(e) {
    if (e.tag === 13) {
      var t = Kr(e), r = _r(e, t);
      if (r !== null) {
        var i = on();
        Un(r, e, t, i);
      }
      Qu(e, t);
    }
  }, Hf = function() {
    return rt;
  }, Bf = function(e, t) {
    var r = rt;
    try {
      return rt = e, t();
    } finally {
      rt = r;
    }
  }, Zn = function(e, t, r) {
    switch (t) {
      case "input":
        if (Ve(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var i = r[t];
            if (i !== e && i.form === e.form) {
              var a = Gl(i);
              if (!a) throw Error(l(90));
              Ie(i), Ve(i, a);
            }
          }
        }
        break;
      case "textarea":
        tt(e, r);
        break;
      case "select":
        t = r.value, t != null && St(e, !!r.multiple, t, !1);
    }
  }, Oe = Bu, Ye = wo;
  var V0 = { usingClientEntryPoint: !1, Events: [Di, Ho, Gl, Ot, en, Bu] }, Ji = { findFiberByHostInstance: co, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Y0 = { bundleType: Ji.bundleType, version: Ji.version, rendererPackageName: Ji.rendererPackageName, rendererConfig: Ji.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = vi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ji.findFiberByHostInstance || U0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zs.isDisabled && zs.supportsFiber) try {
      Pl = zs.inject(Y0), er = zs;
    } catch {
    }
  }
  return mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V0, mn.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qu(t)) throw Error(l(200));
    return W0(e, t, null, r);
  }, mn.createRoot = function(e, t) {
    if (!qu(e)) throw Error(l(299));
    var r = !1, i = "", a = om;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ku(e, 1, !1, null, null, r, !1, i, a), e[wr] = t.current, ji(e.nodeType === 8 ? e.parentNode : e), new Gu(t);
  }, mn.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = vi(t), e = e === null ? null : e.stateNode, e;
  }, mn.flushSync = function(e) {
    return wo(e);
  }, mn.hydrate = function(e, t, r) {
    if (!As(t)) throw Error(l(200));
    return Ls(null, e, t, !0, r);
  }, mn.hydrateRoot = function(e, t, r) {
    if (!qu(e)) throw Error(l(405));
    var i = r != null && r.hydratedSources || null, a = !1, f = "", m = om;
    if (r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (m = r.onRecoverableError)), t = nm(t, null, e, 1, r ?? null, a, !1, f, m), e[wr] = t.current, ji(e), i) for (e = 0; e < i.length; e++) r = i[e], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(
      r,
      a
    );
    return new Ps(t);
  }, mn.render = function(e, t, r) {
    if (!As(t)) throw Error(l(200));
    return Ls(null, e, t, !1, r);
  }, mn.unmountComponentAtNode = function(e) {
    if (!As(e)) throw Error(l(40));
    return e._reactRootContainer ? (wo(function() {
      Ls(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wr] = null;
      });
    }), !0) : !1;
  }, mn.unstable_batchedUpdates = Bu, mn.unstable_renderSubtreeIntoContainer = function(e, t, r, i) {
    if (!As(r)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return Ls(e, t, r, !1, i);
  }, mn.version = "18.2.0-next-9e3b772b8-20220608", mn;
}
var fm;
function jh() {
  if (fm) return Zu.exports;
  fm = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), Zu.exports = X0(), Zu.exports;
}
var dm;
function Z0() {
  if (dm) return Ns;
  dm = 1;
  var n = jh();
  return Ns.createRoot = n.createRoot, Ns.hydrateRoot = n.hydrateRoot, Ns;
}
var J0 = Z0(), ey = Object.defineProperty, ty = (n, o, l) => o in n ? ey(n, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[o] = l, bs = (n, o, l) => ty(n, typeof o != "symbol" ? o + "" : o, l);
const ny = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, ry = {
  stringify: (n) => n.name,
  parse: (n, o, l) => {
    const s = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof s == "function" ? s.bind(l) : void 0;
  }
}, oy = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
}, iy = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, ly = {
  stringify: (n) => n,
  parse: (n) => n
}, tc = {
  string: ly,
  number: iy,
  boolean: ny,
  function: ry,
  json: oy
};
function sy(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (o, l, s) => `${l}-${s.toLowerCase()}`
  );
}
const js = Symbol.for("r2wc.render"), Fs = Symbol.for("r2wc.connected"), _o = Symbol.for("r2wc.context"), Ir = Symbol.for("r2wc.props");
function ay(n, o, l) {
  var s, u, c;
  o.props || (o.props = n.propTypes ? Object.keys(n.propTypes) : []), o.events || (o.events = []);
  const d = Array.isArray(o.props) ? o.props.slice() : Object.keys(o.props), p = Array.isArray(o.events) ? o.events.slice() : Object.keys(o.events), g = {}, h = {}, v = {}, w = {};
  for (const x of d) {
    g[x] = Array.isArray(o.props) ? "string" : o.props[x];
    const I = sy(x);
    v[x] = I, w[I] = x;
  }
  for (const x of p)
    h[x] = Array.isArray(o.events) ? {} : o.events[x];
  class y extends HTMLElement {
    constructor() {
      super(), bs(this, c, !0), bs(this, u), bs(this, s, {}), bs(this, "container"), o.shadow ? this.container = this.attachShadow({
        mode: o.shadow
      }) : this.container = this, this[Ir].container = this.container;
      for (const I of d) {
        const O = v[I], T = this.getAttribute(O), C = g[I], R = C ? tc[C] : null;
        R != null && R.parse && T && (this[Ir][I] = R.parse(T, O, this));
      }
      for (const I of p)
        this[Ir][I] = (O) => {
          const T = I.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(T, { detail: O, ...h[I] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(w);
    }
    connectedCallback() {
      this[Fs] = !0, this[js]();
    }
    disconnectedCallback() {
      this[Fs] = !1, this[_o] && l.unmount(this[_o]), delete this[_o];
    }
    attributeChangedCallback(I, O, T) {
      const C = w[I], R = g[C], B = R ? tc[R] : null;
      C in g && B != null && B.parse && T && (this[Ir][C] = B.parse(T, I, this), this[js]());
    }
    [(c = Fs, u = _o, s = Ir, js)]() {
      this[Fs] && (this[_o] ? l.update(this[_o], this[Ir]) : this[_o] = l.mount(
        this.container,
        n,
        this[Ir]
      ));
    }
  }
  for (const x of d) {
    const I = v[x], O = g[x];
    Object.defineProperty(y.prototype, x, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ir][x];
      },
      set(T) {
        this[Ir][x] = T;
        const C = O ? tc[O] : null;
        if (C != null && C.stringify) {
          const R = C.stringify(T, I, this);
          this.getAttribute(I) !== R && this.setAttribute(I, R);
        } else
          this[js]();
      }
    });
  }
  return y;
}
function uy(n, o, l) {
  const s = J0.createRoot(n), u = ae.createElement(o, l);
  return s.render(u), {
    root: s,
    ReactComponent: o
  };
}
function cy({ root: n, ReactComponent: o }, l) {
  const s = ae.createElement(o, l);
  n.render(s);
}
function fy({ root: n }) {
  n.unmount();
}
function dy(n, o = {}) {
  return ay(n, o, { mount: uy, update: cy, unmount: fy });
}
var nc = { exports: {} }, el = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pm;
function py() {
  if (pm) return el;
  pm = 1;
  var n = Zc(), o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, g, h) {
    var v, w = {}, y = null, x = null;
    h !== void 0 && (y = "" + h), g.key !== void 0 && (y = "" + g.key), g.ref !== void 0 && (x = g.ref);
    for (v in g) s.call(g, v) && !c.hasOwnProperty(v) && (w[v] = g[v]);
    if (p && p.defaultProps) for (v in g = p.defaultProps, g) w[v] === void 0 && (w[v] = g[v]);
    return { $$typeof: o, type: p, key: y, ref: x, props: w, _owner: u.current };
  }
  return el.Fragment = l, el.jsx = d, el.jsxs = d, el;
}
var mm;
function my() {
  return mm || (mm = 1, nc.exports = py()), nc.exports;
}
var M = my();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function hy(n, o, l) {
  return (o = vy(o)) in n ? Object.defineProperty(n, o, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[o] = l, n;
}
function hm(n, o) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    o && (s = s.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function ne(n) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {};
    o % 2 ? hm(Object(l), !0).forEach(function(s) {
      hy(n, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : hm(Object(l)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return n;
}
function gy(n, o) {
  if (typeof n != "object" || !n) return n;
  var l = n[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(n, o);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(n);
}
function vy(n) {
  var o = gy(n, "string");
  return typeof o == "symbol" ? o : o + "";
}
const gm = () => {
};
let Jc = {}, Fh = {}, Mh = null, Dh = {
  mark: gm,
  measure: gm
};
try {
  typeof window < "u" && (Jc = window), typeof document < "u" && (Fh = document), typeof MutationObserver < "u" && (Mh = MutationObserver), typeof performance < "u" && (Dh = performance);
} catch {
}
const {
  userAgent: vm = ""
} = Jc.navigator || {}, to = Jc, vt = Fh, ym = Mh, Ms = Dh;
to.document;
const Pr = !!vt.documentElement && !!vt.head && typeof vt.addEventListener == "function" && typeof vt.createElement == "function", Hh = ~vm.indexOf("MSIE") || ~vm.indexOf("Trident/");
var yy = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, wy = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Bh = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, xy = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Wh = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Jt = "classic", oa = "duotone", Sy = "sharp", ky = "sharp-duotone", Uh = [Jt, oa, Sy, ky], _y = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Cy = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Ey = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), Ty = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, Iy = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], wm = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ry = ["kit"], Oy = {
  kit: {
    "fa-kit": "fak"
  }
}, Py = ["fak", "fakd"], Ay = {
  kit: {
    fak: "fa-kit"
  }
}, xm = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ds = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ly = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], zy = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ny = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, by = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, jy = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, _c = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, Fy = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Cc = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ly, ...Fy], My = ["solid", "regular", "light", "thin", "duotone", "brands"], $h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Dy = $h.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Hy = [...Object.keys(jy), ...My, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ds.GROUP, Ds.SWAP_OPACITY, Ds.PRIMARY, Ds.SECONDARY].concat($h.map((n) => "".concat(n, "x"))).concat(Dy.map((n) => "w-".concat(n))), By = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const Rr = "___FONT_AWESOME___", Ec = 16, Vh = "fa", Yh = "svg-inline--fa", Io = "data-fa-i2svg", Tc = "data-fa-pseudo-element", Wy = "data-fa-pseudo-element-pending", ef = "data-prefix", tf = "data-icon", Sm = "fontawesome-i2svg", Uy = "async", $y = ["HTML", "HEAD", "STYLE", "SCRIPT"], Kh = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function wl(n) {
  return new Proxy(n, {
    get(o, l) {
      return l in o ? o[l] : o[Jt];
    }
  });
}
const Qh = ne({}, Bh);
Qh[Jt] = ne(ne(ne(ne({}, {
  "fa-duotone": "duotone"
}), Bh[Jt]), wm.kit), wm["kit-duotone"]);
const Vy = wl(Qh), Ic = ne({}, Ty);
Ic[Jt] = ne(ne(ne(ne({}, {
  duotone: "fad"
}), Ic[Jt]), xm.kit), xm["kit-duotone"]);
const km = wl(Ic), Rc = ne({}, _c);
Rc[Jt] = ne(ne({}, Rc[Jt]), Ay.kit);
const nf = wl(Rc), Oc = ne({}, by);
Oc[Jt] = ne(ne({}, Oc[Jt]), Oy.kit);
wl(Oc);
const Yy = yy, Gh = "fa-layers-text", Ky = wy, Qy = ne({}, _y);
wl(Qy);
const Gy = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], rc = xy, qy = [...Ry, ...Hy], il = to.FontAwesomeConfig || {};
function Xy(n) {
  var o = vt.querySelector("script[" + n + "]");
  if (o)
    return o.getAttribute(n);
}
function Zy(n) {
  return n === "" ? !0 : n === "false" ? !1 : n === "true" ? !0 : n;
}
vt && typeof vt.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((o) => {
  let [l, s] = o;
  const u = Zy(Xy(l));
  u != null && (il[s] = u);
});
const qh = {
  styleDefault: "solid",
  familyDefault: Jt,
  cssPrefix: Vh,
  replacementClass: Yh,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
il.familyPrefix && (il.cssPrefix = il.familyPrefix);
const si = ne(ne({}, qh), il);
si.autoReplaceSvg || (si.observeMutations = !1);
const Ce = {};
Object.keys(qh).forEach((n) => {
  Object.defineProperty(Ce, n, {
    enumerable: !0,
    set: function(o) {
      si[n] = o, ll.forEach((l) => l(Ce));
    },
    get: function() {
      return si[n];
    }
  });
});
Object.defineProperty(Ce, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    si.cssPrefix = n, ll.forEach((o) => o(Ce));
  },
  get: function() {
    return si.cssPrefix;
  }
});
to.FontAwesomeConfig = Ce;
const ll = [];
function Jy(n) {
  return ll.push(n), () => {
    ll.splice(ll.indexOf(n), 1);
  };
}
const Xr = Ec, sr = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function e1(n) {
  if (!n || !Pr)
    return;
  const o = vt.createElement("style");
  o.setAttribute("type", "text/css"), o.innerHTML = n;
  const l = vt.head.childNodes;
  let s = null;
  for (let u = l.length - 1; u > -1; u--) {
    const c = l[u], d = (c.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(d) > -1 && (s = c);
  }
  return vt.head.insertBefore(o, s), n;
}
const t1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ul() {
  let n = 12, o = "";
  for (; n-- > 0; )
    o += t1[Math.random() * 62 | 0];
  return o;
}
function fi(n) {
  const o = [];
  for (let l = (n || []).length >>> 0; l--; )
    o[l] = n[l];
  return o;
}
function rf(n) {
  return n.classList ? fi(n.classList) : (n.getAttribute("class") || "").split(" ").filter((o) => o);
}
function Xh(n) {
  return "".concat(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function n1(n) {
  return Object.keys(n || {}).reduce((o, l) => o + "".concat(l, '="').concat(Xh(n[l]), '" '), "").trim();
}
function ia(n) {
  return Object.keys(n || {}).reduce((o, l) => o + "".concat(l, ": ").concat(n[l].trim(), ";"), "");
}
function of(n) {
  return n.size !== sr.size || n.x !== sr.x || n.y !== sr.y || n.rotate !== sr.rotate || n.flipX || n.flipY;
}
function r1(n) {
  let {
    transform: o,
    containerWidth: l,
    iconWidth: s
  } = n;
  const u = {
    transform: "translate(".concat(l / 2, " 256)")
  }, c = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "), d = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "), p = "rotate(".concat(o.rotate, " 0 0)"), g = {
    transform: "".concat(c, " ").concat(d, " ").concat(p)
  }, h = {
    transform: "translate(".concat(s / 2 * -1, " -256)")
  };
  return {
    outer: u,
    inner: g,
    path: h
  };
}
function o1(n) {
  let {
    transform: o,
    width: l = Ec,
    height: s = Ec,
    startCentered: u = !1
  } = n, c = "";
  return u && Hh ? c += "translate(".concat(o.x / Xr - l / 2, "em, ").concat(o.y / Xr - s / 2, "em) ") : u ? c += "translate(calc(-50% + ".concat(o.x / Xr, "em), calc(-50% + ").concat(o.y / Xr, "em)) ") : c += "translate(".concat(o.x / Xr, "em, ").concat(o.y / Xr, "em) "), c += "scale(".concat(o.size / Xr * (o.flipX ? -1 : 1), ", ").concat(o.size / Xr * (o.flipY ? -1 : 1), ") "), c += "rotate(".concat(o.rotate, "deg) "), c;
}
var i1 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Zh() {
  const n = Vh, o = Yh, l = Ce.cssPrefix, s = Ce.replacementClass;
  let u = i1;
  if (l !== n || s !== o) {
    const c = new RegExp("\\.".concat(n, "\\-"), "g"), d = new RegExp("\\--".concat(n, "\\-"), "g"), p = new RegExp("\\.".concat(o), "g");
    u = u.replace(c, ".".concat(l, "-")).replace(d, "--".concat(l, "-")).replace(p, ".".concat(s));
  }
  return u;
}
let _m = !1;
function oc() {
  Ce.autoAddCss && !_m && (e1(Zh()), _m = !0);
}
var l1 = {
  mixout() {
    return {
      dom: {
        css: Zh,
        insertCss: oc
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        oc();
      },
      beforeI2svg() {
        oc();
      }
    };
  }
};
const Or = to || {};
Or[Rr] || (Or[Rr] = {});
Or[Rr].styles || (Or[Rr].styles = {});
Or[Rr].hooks || (Or[Rr].hooks = {});
Or[Rr].shims || (Or[Rr].shims = []);
var ar = Or[Rr];
const Jh = [], eg = function() {
  vt.removeEventListener("DOMContentLoaded", eg), Qs = 1, Jh.map((n) => n());
};
let Qs = !1;
Pr && (Qs = (vt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(vt.readyState), Qs || vt.addEventListener("DOMContentLoaded", eg));
function s1(n) {
  Pr && (Qs ? setTimeout(n, 0) : Jh.push(n));
}
function xl(n) {
  const {
    tag: o,
    attributes: l = {},
    children: s = []
  } = n;
  return typeof n == "string" ? Xh(n) : "<".concat(o, " ").concat(n1(l), ">").concat(s.map(xl).join(""), "</").concat(o, ">");
}
function Cm(n, o, l) {
  if (n && n[o] && n[o][l])
    return {
      prefix: o,
      iconName: l,
      icon: n[o][l]
    };
}
var ic = function(o, l, s, u) {
  var c = Object.keys(o), d = c.length, p = l, g, h, v;
  for (s === void 0 ? (g = 1, v = o[c[0]]) : (g = 0, v = s); g < d; g++)
    h = c[g], v = p(v, o[h], h, o);
  return v;
};
function a1(n) {
  const o = [];
  let l = 0;
  const s = n.length;
  for (; l < s; ) {
    const u = n.charCodeAt(l++);
    if (u >= 55296 && u <= 56319 && l < s) {
      const c = n.charCodeAt(l++);
      (c & 64512) == 56320 ? o.push(((u & 1023) << 10) + (c & 1023) + 65536) : (o.push(u), l--);
    } else
      o.push(u);
  }
  return o;
}
function Pc(n) {
  const o = a1(n);
  return o.length === 1 ? o[0].toString(16) : null;
}
function u1(n, o) {
  const l = n.length;
  let s = n.charCodeAt(o), u;
  return s >= 55296 && s <= 56319 && l > o + 1 && (u = n.charCodeAt(o + 1), u >= 56320 && u <= 57343) ? (s - 55296) * 1024 + u - 56320 + 65536 : s;
}
function Em(n) {
  return Object.keys(n).reduce((o, l) => {
    const s = n[l];
    return !!s.icon ? o[s.iconName] = s.icon : o[l] = s, o;
  }, {});
}
function Ac(n, o) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: s = !1
  } = l, u = Em(o);
  typeof ar.hooks.addPack == "function" && !s ? ar.hooks.addPack(n, Em(o)) : ar.styles[n] = ne(ne({}, ar.styles[n] || {}), u), n === "fas" && Ac("fa", o);
}
const {
  styles: cl,
  shims: c1
} = ar, tg = Object.keys(nf), f1 = tg.reduce((n, o) => (n[o] = Object.keys(nf[o]), n), {});
let lf = null, ng = {}, rg = {}, og = {}, ig = {}, lg = {};
function d1(n) {
  return ~qy.indexOf(n);
}
function p1(n, o) {
  const l = o.split("-"), s = l[0], u = l.slice(1).join("-");
  return s === n && u !== "" && !d1(u) ? u : null;
}
const sg = () => {
  const n = (s) => ic(cl, (u, c, d) => (u[d] = ic(c, s, {}), u), {});
  ng = n((s, u, c) => (u[3] && (s[u[3]] = c), u[2] && u[2].filter((p) => typeof p == "number").forEach((p) => {
    s[p.toString(16)] = c;
  }), s)), rg = n((s, u, c) => (s[c] = c, u[2] && u[2].filter((p) => typeof p == "string").forEach((p) => {
    s[p] = c;
  }), s)), lg = n((s, u, c) => {
    const d = u[2];
    return s[c] = c, d.forEach((p) => {
      s[p] = c;
    }), s;
  });
  const o = "far" in cl || Ce.autoFetchSvg, l = ic(c1, (s, u) => {
    const c = u[0];
    let d = u[1];
    const p = u[2];
    return d === "far" && !o && (d = "fas"), typeof c == "string" && (s.names[c] = {
      prefix: d,
      iconName: p
    }), typeof c == "number" && (s.unicodes[c.toString(16)] = {
      prefix: d,
      iconName: p
    }), s;
  }, {
    names: {},
    unicodes: {}
  });
  og = l.names, ig = l.unicodes, lf = la(Ce.styleDefault, {
    family: Ce.familyDefault
  });
};
Jy((n) => {
  lf = la(n.styleDefault, {
    family: Ce.familyDefault
  });
});
sg();
function sf(n, o) {
  return (ng[n] || {})[o];
}
function m1(n, o) {
  return (rg[n] || {})[o];
}
function Co(n, o) {
  return (lg[n] || {})[o];
}
function ag(n) {
  return og[n] || {
    prefix: null,
    iconName: null
  };
}
function h1(n) {
  const o = ig[n], l = sf("fas", n);
  return o || (l ? {
    prefix: "fas",
    iconName: l
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function no() {
  return lf;
}
const ug = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function g1(n) {
  let o = Jt;
  const l = tg.reduce((s, u) => (s[u] = "".concat(Ce.cssPrefix, "-").concat(u), s), {});
  return Uh.forEach((s) => {
    (n.includes(l[s]) || n.some((u) => f1[s].includes(u))) && (o = s);
  }), o;
}
function la(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: l = Jt
  } = o, s = Vy[l][n];
  if (l === oa && !n)
    return "fad";
  const u = km[l][n] || km[l][s], c = n in ar.styles ? n : null;
  return u || c || null;
}
function v1(n) {
  let o = [], l = null;
  return n.forEach((s) => {
    const u = p1(Ce.cssPrefix, s);
    u ? l = u : s && o.push(s);
  }), {
    iconName: l,
    rest: o
  };
}
function Tm(n) {
  return n.sort().filter((o, l, s) => s.indexOf(o) === l);
}
function sa(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: l = !1
  } = o;
  let s = null;
  const u = Cc.concat(zy), c = Tm(n.filter((w) => u.includes(w))), d = Tm(n.filter((w) => !Cc.includes(w))), p = c.filter((w) => (s = w, !Wh.includes(w))), [g = null] = p, h = g1(c), v = ne(ne({}, v1(d)), {}, {
    prefix: la(g, {
      family: h
    })
  });
  return ne(ne(ne({}, v), S1({
    values: n,
    family: h,
    styles: cl,
    config: Ce,
    canonical: v,
    givenPrefix: s
  })), y1(l, s, v));
}
function y1(n, o, l) {
  let {
    prefix: s,
    iconName: u
  } = l;
  if (n || !s || !u)
    return {
      prefix: s,
      iconName: u
    };
  const c = o === "fa" ? ag(u) : {}, d = Co(s, u);
  return u = c.iconName || d || u, s = c.prefix || s, s === "far" && !cl.far && cl.fas && !Ce.autoFetchSvg && (s = "fas"), {
    prefix: s,
    iconName: u
  };
}
const w1 = Uh.filter((n) => n !== Jt || n !== oa), x1 = Object.keys(_c).filter((n) => n !== Jt).map((n) => Object.keys(_c[n])).flat();
function S1(n) {
  const {
    values: o,
    family: l,
    canonical: s,
    givenPrefix: u = "",
    styles: c = {},
    config: d = {}
  } = n, p = l === oa, g = o.includes("fa-duotone") || o.includes("fad"), h = d.familyDefault === "duotone", v = s.prefix === "fad" || s.prefix === "fa-duotone";
  if (!p && (g || h || v) && (s.prefix = "fad"), (o.includes("fa-brands") || o.includes("fab")) && (s.prefix = "fab"), !s.prefix && w1.includes(l) && (Object.keys(c).find((y) => x1.includes(y)) || d.autoFetchSvg)) {
    const y = Ey.get(l).defaultShortPrefixId;
    s.prefix = y, s.iconName = Co(s.prefix, s.iconName) || s.iconName;
  }
  return (s.prefix === "fa" || u === "fa") && (s.prefix = no() || "fas"), s;
}
class k1 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
      l[s] = arguments[s];
    const u = l.reduce(this._pullDefinitions, {});
    Object.keys(u).forEach((c) => {
      this.definitions[c] = ne(ne({}, this.definitions[c] || {}), u[c]), Ac(c, u[c]);
      const d = nf[Jt][c];
      d && Ac(d, u[c]), sg();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(o, l) {
    const s = l.prefix && l.iconName && l.icon ? {
      0: l
    } : l;
    return Object.keys(s).map((u) => {
      const {
        prefix: c,
        iconName: d,
        icon: p
      } = s[u], g = p[2];
      o[c] || (o[c] = {}), g.length > 0 && g.forEach((h) => {
        typeof h == "string" && (o[c][h] = p);
      }), o[c][d] = p;
    }), o;
  }
}
let Im = [], ni = {};
const oi = {}, _1 = Object.keys(oi);
function C1(n, o) {
  let {
    mixoutsTo: l
  } = o;
  return Im = n, ni = {}, Object.keys(oi).forEach((s) => {
    _1.indexOf(s) === -1 && delete oi[s];
  }), Im.forEach((s) => {
    const u = s.mixout ? s.mixout() : {};
    if (Object.keys(u).forEach((c) => {
      typeof u[c] == "function" && (l[c] = u[c]), typeof u[c] == "object" && Object.keys(u[c]).forEach((d) => {
        l[c] || (l[c] = {}), l[c][d] = u[c][d];
      });
    }), s.hooks) {
      const c = s.hooks();
      Object.keys(c).forEach((d) => {
        ni[d] || (ni[d] = []), ni[d].push(c[d]);
      });
    }
    s.provides && s.provides(oi);
  }), l;
}
function Lc(n, o) {
  for (var l = arguments.length, s = new Array(l > 2 ? l - 2 : 0), u = 2; u < l; u++)
    s[u - 2] = arguments[u];
  return (ni[n] || []).forEach((d) => {
    o = d.apply(null, [o, ...s]);
  }), o;
}
function Ro(n) {
  for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
    l[s - 1] = arguments[s];
  (ni[n] || []).forEach((c) => {
    c.apply(null, l);
  });
}
function ro() {
  const n = arguments[0], o = Array.prototype.slice.call(arguments, 1);
  return oi[n] ? oi[n].apply(null, o) : void 0;
}
function zc(n) {
  n.prefix === "fa" && (n.prefix = "fas");
  let {
    iconName: o
  } = n;
  const l = n.prefix || no();
  if (o)
    return o = Co(l, o) || o, Cm(cg.definitions, l, o) || Cm(ar.styles, l, o);
}
const cg = new k1(), E1 = () => {
  Ce.autoReplaceSvg = !1, Ce.observeMutations = !1, Ro("noAuto");
}, T1 = {
  i2svg: function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Pr ? (Ro("beforeI2svg", n), ro("pseudoElements2svg", n), ro("i2svg", n)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: o
    } = n;
    Ce.autoReplaceSvg === !1 && (Ce.autoReplaceSvg = !0), Ce.observeMutations = !0, s1(() => {
      R1({
        autoReplaceSvgRoot: o
      }), Ro("watch", n);
    });
  }
}, I1 = {
  icon: (n) => {
    if (n === null)
      return null;
    if (typeof n == "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: Co(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      const o = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], l = la(n[0]);
      return {
        prefix: l,
        iconName: Co(l, o) || o
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(Ce.cssPrefix, "-")) > -1 || n.match(Yy))) {
      const o = sa(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: o.prefix || no(),
        iconName: Co(o.prefix, o.iconName) || o.iconName
      };
    }
    if (typeof n == "string") {
      const o = no();
      return {
        prefix: o,
        iconName: Co(o, n) || n
      };
    }
  }
}, Cn = {
  noAuto: E1,
  config: Ce,
  dom: T1,
  parse: I1,
  library: cg,
  findIconDefinition: zc,
  toHtml: xl
}, R1 = function() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: o = vt
  } = n;
  (Object.keys(ar.styles).length > 0 || Ce.autoFetchSvg) && Pr && Ce.autoReplaceSvg && Cn.dom.i2svg({
    node: o
  });
};
function aa(n, o) {
  return Object.defineProperty(n, "abstract", {
    get: o
  }), Object.defineProperty(n, "html", {
    get: function() {
      return n.abstract.map((l) => xl(l));
    }
  }), Object.defineProperty(n, "node", {
    get: function() {
      if (!Pr) return;
      const l = vt.createElement("div");
      return l.innerHTML = n.html, l.children;
    }
  }), n;
}
function O1(n) {
  let {
    children: o,
    main: l,
    mask: s,
    attributes: u,
    styles: c,
    transform: d
  } = n;
  if (of(d) && l.found && !s.found) {
    const {
      width: p,
      height: g
    } = l, h = {
      x: p / g / 2,
      y: 0.5
    };
    u.style = ia(ne(ne({}, c), {}, {
      "transform-origin": "".concat(h.x + d.x / 16, "em ").concat(h.y + d.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: u,
    children: o
  }];
}
function P1(n) {
  let {
    prefix: o,
    iconName: l,
    children: s,
    attributes: u,
    symbol: c
  } = n;
  const d = c === !0 ? "".concat(o, "-").concat(Ce.cssPrefix, "-").concat(l) : c;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: ne(ne({}, u), {}, {
        id: d
      }),
      children: s
    }]
  }];
}
function af(n) {
  const {
    icons: {
      main: o,
      mask: l
    },
    prefix: s,
    iconName: u,
    transform: c,
    symbol: d,
    title: p,
    maskId: g,
    titleId: h,
    extra: v,
    watchable: w = !1
  } = n, {
    width: y,
    height: x
  } = l.found ? l : o, I = Py.includes(s), O = [Ce.replacementClass, u ? "".concat(Ce.cssPrefix, "-").concat(u) : ""].filter((D) => v.classes.indexOf(D) === -1).filter((D) => D !== "" || !!D).concat(v.classes).join(" ");
  let T = {
    children: [],
    attributes: ne(ne({}, v.attributes), {}, {
      "data-prefix": s,
      "data-icon": u,
      class: O,
      role: v.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(x)
    })
  };
  const C = I && !~v.classes.indexOf("fa-fw") ? {
    width: "".concat(y / x * 16 * 0.0625, "em")
  } : {};
  w && (T.attributes[Io] = ""), p && (T.children.push({
    tag: "title",
    attributes: {
      id: T.attributes["aria-labelledby"] || "title-".concat(h || ul())
    },
    children: [p]
  }), delete T.attributes.title);
  const R = ne(ne({}, T), {}, {
    prefix: s,
    iconName: u,
    main: o,
    mask: l,
    maskId: g,
    transform: c,
    symbol: d,
    styles: ne(ne({}, C), v.styles)
  }), {
    children: B,
    attributes: $
  } = l.found && o.found ? ro("generateAbstractMask", R) || {
    children: [],
    attributes: {}
  } : ro("generateAbstractIcon", R) || {
    children: [],
    attributes: {}
  };
  return R.children = B, R.attributes = $, d ? P1(R) : O1(R);
}
function Rm(n) {
  const {
    content: o,
    width: l,
    height: s,
    transform: u,
    title: c,
    extra: d,
    watchable: p = !1
  } = n, g = ne(ne(ne({}, d.attributes), c ? {
    title: c
  } : {}), {}, {
    class: d.classes.join(" ")
  });
  p && (g[Io] = "");
  const h = ne({}, d.styles);
  of(u) && (h.transform = o1({
    transform: u,
    startCentered: !0,
    width: l,
    height: s
  }), h["-webkit-transform"] = h.transform);
  const v = ia(h);
  v.length > 0 && (g.style = v);
  const w = [];
  return w.push({
    tag: "span",
    attributes: g,
    children: [o]
  }), c && w.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [c]
  }), w;
}
function A1(n) {
  const {
    content: o,
    title: l,
    extra: s
  } = n, u = ne(ne(ne({}, s.attributes), l ? {
    title: l
  } : {}), {}, {
    class: s.classes.join(" ")
  }), c = ia(s.styles);
  c.length > 0 && (u.style = c);
  const d = [];
  return d.push({
    tag: "span",
    attributes: u,
    children: [o]
  }), l && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [l]
  }), d;
}
const {
  styles: lc
} = ar;
function Nc(n) {
  const o = n[0], l = n[1], [s] = n.slice(4);
  let u = null;
  return Array.isArray(s) ? u = {
    tag: "g",
    attributes: {
      class: "".concat(Ce.cssPrefix, "-").concat(rc.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Ce.cssPrefix, "-").concat(rc.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Ce.cssPrefix, "-").concat(rc.PRIMARY),
        fill: "currentColor",
        d: s[1]
      }
    }]
  } : u = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: s
    }
  }, {
    found: !0,
    width: o,
    height: l,
    icon: u
  };
}
const L1 = {
  found: !1,
  width: 512,
  height: 512
};
function z1(n, o) {
  !Kh && !Ce.showMissingIcons && n && console.error('Icon with name "'.concat(n, '" and prefix "').concat(o, '" is missing.'));
}
function bc(n, o) {
  let l = o;
  return o === "fa" && Ce.styleDefault !== null && (o = no()), new Promise((s, u) => {
    if (l === "fa") {
      const c = ag(n) || {};
      n = c.iconName || n, o = c.prefix || o;
    }
    if (n && o && lc[o] && lc[o][n]) {
      const c = lc[o][n];
      return s(Nc(c));
    }
    z1(n, o), s(ne(ne({}, L1), {}, {
      icon: Ce.showMissingIcons && n ? ro("missingIconAbstract") || {} : {}
    }));
  });
}
const Om = () => {
}, jc = Ce.measurePerformance && Ms && Ms.mark && Ms.measure ? Ms : {
  mark: Om,
  measure: Om
}, ol = 'FA "6.7.2"', N1 = (n) => (jc.mark("".concat(ol, " ").concat(n, " begins")), () => fg(n)), fg = (n) => {
  jc.mark("".concat(ol, " ").concat(n, " ends")), jc.measure("".concat(ol, " ").concat(n), "".concat(ol, " ").concat(n, " begins"), "".concat(ol, " ").concat(n, " ends"));
};
var uf = {
  begin: N1,
  end: fg
};
const Us = () => {
};
function Pm(n) {
  return typeof (n.getAttribute ? n.getAttribute(Io) : null) == "string";
}
function b1(n) {
  const o = n.getAttribute ? n.getAttribute(ef) : null, l = n.getAttribute ? n.getAttribute(tf) : null;
  return o && l;
}
function j1(n) {
  return n && n.classList && n.classList.contains && n.classList.contains(Ce.replacementClass);
}
function F1() {
  return Ce.autoReplaceSvg === !0 ? $s.replace : $s[Ce.autoReplaceSvg] || $s.replace;
}
function M1(n) {
  return vt.createElementNS("http://www.w3.org/2000/svg", n);
}
function D1(n) {
  return vt.createElement(n);
}
function dg(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: l = n.tag === "svg" ? M1 : D1
  } = o;
  if (typeof n == "string")
    return vt.createTextNode(n);
  const s = l(n.tag);
  return Object.keys(n.attributes || []).forEach(function(c) {
    s.setAttribute(c, n.attributes[c]);
  }), (n.children || []).forEach(function(c) {
    s.appendChild(dg(c, {
      ceFn: l
    }));
  }), s;
}
function H1(n) {
  let o = " ".concat(n.outerHTML, " ");
  return o = "".concat(o, "Font Awesome fontawesome.com "), o;
}
const $s = {
  replace: function(n) {
    const o = n[0];
    if (o.parentNode)
      if (n[1].forEach((l) => {
        o.parentNode.insertBefore(dg(l), o);
      }), o.getAttribute(Io) === null && Ce.keepOriginalSource) {
        let l = vt.createComment(H1(o));
        o.parentNode.replaceChild(l, o);
      } else
        o.remove();
  },
  nest: function(n) {
    const o = n[0], l = n[1];
    if (~rf(o).indexOf(Ce.replacementClass))
      return $s.replace(n);
    const s = new RegExp("".concat(Ce.cssPrefix, "-.*"));
    if (delete l[0].attributes.id, l[0].attributes.class) {
      const c = l[0].attributes.class.split(" ").reduce((d, p) => (p === Ce.replacementClass || p.match(s) ? d.toSvg.push(p) : d.toNode.push(p), d), {
        toNode: [],
        toSvg: []
      });
      l[0].attributes.class = c.toSvg.join(" "), c.toNode.length === 0 ? o.removeAttribute("class") : o.setAttribute("class", c.toNode.join(" "));
    }
    const u = l.map((c) => xl(c)).join(`
`);
    o.setAttribute(Io, ""), o.innerHTML = u;
  }
};
function Am(n) {
  n();
}
function pg(n, o) {
  const l = typeof o == "function" ? o : Us;
  if (n.length === 0)
    l();
  else {
    let s = Am;
    Ce.mutateApproach === Uy && (s = to.requestAnimationFrame || Am), s(() => {
      const u = F1(), c = uf.begin("mutate");
      n.map(u), c(), l();
    });
  }
}
let cf = !1;
function mg() {
  cf = !0;
}
function Fc() {
  cf = !1;
}
let Gs = null;
function Lm(n) {
  if (!ym || !Ce.observeMutations)
    return;
  const {
    treeCallback: o = Us,
    nodeCallback: l = Us,
    pseudoElementsCallback: s = Us,
    observeMutationsRoot: u = vt
  } = n;
  Gs = new ym((c) => {
    if (cf) return;
    const d = no();
    fi(c).forEach((p) => {
      if (p.type === "childList" && p.addedNodes.length > 0 && !Pm(p.addedNodes[0]) && (Ce.searchPseudoElements && s(p.target), o(p.target)), p.type === "attributes" && p.target.parentNode && Ce.searchPseudoElements && s(p.target.parentNode), p.type === "attributes" && Pm(p.target) && ~Gy.indexOf(p.attributeName))
        if (p.attributeName === "class" && b1(p.target)) {
          const {
            prefix: g,
            iconName: h
          } = sa(rf(p.target));
          p.target.setAttribute(ef, g || d), h && p.target.setAttribute(tf, h);
        } else j1(p.target) && l(p.target);
    });
  }), Pr && Gs.observe(u, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function B1() {
  Gs && Gs.disconnect();
}
function W1(n) {
  const o = n.getAttribute("style");
  let l = [];
  return o && (l = o.split(";").reduce((s, u) => {
    const c = u.split(":"), d = c[0], p = c.slice(1);
    return d && p.length > 0 && (s[d] = p.join(":").trim()), s;
  }, {})), l;
}
function U1(n) {
  const o = n.getAttribute("data-prefix"), l = n.getAttribute("data-icon"), s = n.innerText !== void 0 ? n.innerText.trim() : "";
  let u = sa(rf(n));
  return u.prefix || (u.prefix = no()), o && l && (u.prefix = o, u.iconName = l), u.iconName && u.prefix || (u.prefix && s.length > 0 && (u.iconName = m1(u.prefix, n.innerText) || sf(u.prefix, Pc(n.innerText))), !u.iconName && Ce.autoFetchSvg && n.firstChild && n.firstChild.nodeType === Node.TEXT_NODE && (u.iconName = n.firstChild.data)), u;
}
function $1(n) {
  const o = fi(n.attributes).reduce((u, c) => (u.name !== "class" && u.name !== "style" && (u[c.name] = c.value), u), {}), l = n.getAttribute("title"), s = n.getAttribute("data-fa-title-id");
  return Ce.autoA11y && (l ? o["aria-labelledby"] = "".concat(Ce.replacementClass, "-title-").concat(s || ul()) : (o["aria-hidden"] = "true", o.focusable = "false")), o;
}
function V1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: sr,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function zm(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: l,
    prefix: s,
    rest: u
  } = U1(n), c = $1(n), d = Lc("parseNodeAttributes", {}, n);
  let p = o.styleParser ? W1(n) : [];
  return ne({
    iconName: l,
    title: n.getAttribute("title"),
    titleId: n.getAttribute("data-fa-title-id"),
    prefix: s,
    transform: sr,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: u,
      styles: p,
      attributes: c
    }
  }, d);
}
const {
  styles: Y1
} = ar;
function hg(n) {
  const o = Ce.autoReplaceSvg === "nest" ? zm(n, {
    styleParser: !1
  }) : zm(n);
  return ~o.extra.classes.indexOf(Gh) ? ro("generateLayersText", n, o) : ro("generateSvgReplacementMutation", n, o);
}
function K1() {
  return [...Iy, ...Cc];
}
function Nm(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Pr) return Promise.resolve();
  const l = vt.documentElement.classList, s = (v) => l.add("".concat(Sm, "-").concat(v)), u = (v) => l.remove("".concat(Sm, "-").concat(v)), c = Ce.autoFetchSvg ? K1() : Wh.concat(Object.keys(Y1));
  c.includes("fa") || c.push("fa");
  const d = [".".concat(Gh, ":not([").concat(Io, "])")].concat(c.map((v) => ".".concat(v, ":not([").concat(Io, "])"))).join(", ");
  if (d.length === 0)
    return Promise.resolve();
  let p = [];
  try {
    p = fi(n.querySelectorAll(d));
  } catch {
  }
  if (p.length > 0)
    s("pending"), u("complete");
  else
    return Promise.resolve();
  const g = uf.begin("onTree"), h = p.reduce((v, w) => {
    try {
      const y = hg(w);
      y && v.push(y);
    } catch (y) {
      Kh || y.name === "MissingIcon" && console.error(y);
    }
    return v;
  }, []);
  return new Promise((v, w) => {
    Promise.all(h).then((y) => {
      pg(y, () => {
        s("active"), s("complete"), u("pending"), typeof o == "function" && o(), g(), v();
      });
    }).catch((y) => {
      g(), w(y);
    });
  });
}
function Q1(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  hg(n).then((l) => {
    l && pg([l], o);
  });
}
function G1(n) {
  return function(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = (o || {}).icon ? o : zc(o || {});
    let {
      mask: u
    } = l;
    return u && (u = (u || {}).icon ? u : zc(u || {})), n(s, ne(ne({}, l), {}, {
      mask: u
    }));
  };
}
const q1 = function(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: l = sr,
    symbol: s = !1,
    mask: u = null,
    maskId: c = null,
    title: d = null,
    titleId: p = null,
    classes: g = [],
    attributes: h = {},
    styles: v = {}
  } = o;
  if (!n) return;
  const {
    prefix: w,
    iconName: y,
    icon: x
  } = n;
  return aa(ne({
    type: "icon"
  }, n), () => (Ro("beforeDOMElementCreation", {
    iconDefinition: n,
    params: o
  }), Ce.autoA11y && (d ? h["aria-labelledby"] = "".concat(Ce.replacementClass, "-title-").concat(p || ul()) : (h["aria-hidden"] = "true", h.focusable = "false")), af({
    icons: {
      main: Nc(x),
      mask: u ? Nc(u.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: w,
    iconName: y,
    transform: ne(ne({}, sr), l),
    symbol: s,
    title: d,
    maskId: c,
    titleId: p,
    extra: {
      attributes: h,
      styles: v,
      classes: g
    }
  })));
};
var X1 = {
  mixout() {
    return {
      icon: G1(q1)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return n.treeCallback = Nm, n.nodeCallback = Q1, n;
      }
    };
  },
  provides(n) {
    n.i2svg = function(o) {
      const {
        node: l = vt,
        callback: s = () => {
        }
      } = o;
      return Nm(l, s);
    }, n.generateSvgReplacementMutation = function(o, l) {
      const {
        iconName: s,
        title: u,
        titleId: c,
        prefix: d,
        transform: p,
        symbol: g,
        mask: h,
        maskId: v,
        extra: w
      } = l;
      return new Promise((y, x) => {
        Promise.all([bc(s, d), h.iconName ? bc(h.iconName, h.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((I) => {
          let [O, T] = I;
          y([o, af({
            icons: {
              main: O,
              mask: T
            },
            prefix: d,
            iconName: s,
            transform: p,
            symbol: g,
            maskId: v,
            title: u,
            titleId: c,
            extra: w,
            watchable: !0
          })]);
        }).catch(x);
      });
    }, n.generateAbstractIcon = function(o) {
      let {
        children: l,
        attributes: s,
        main: u,
        transform: c,
        styles: d
      } = o;
      const p = ia(d);
      p.length > 0 && (s.style = p);
      let g;
      return of(c) && (g = ro("generateAbstractTransformGrouping", {
        main: u,
        transform: c,
        containerWidth: u.width,
        iconWidth: u.width
      })), l.push(g || u.icon), {
        children: l,
        attributes: s
      };
    };
  }
}, Z1 = {
  mixout() {
    return {
      layer(n) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: l = []
        } = o;
        return aa({
          type: "layer"
        }, () => {
          Ro("beforeDOMElementCreation", {
            assembler: n,
            params: o
          });
          let s = [];
          return n((u) => {
            Array.isArray(u) ? u.map((c) => {
              s = s.concat(c.abstract);
            }) : s = s.concat(u.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Ce.cssPrefix, "-layers"), ...l].join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, J1 = {
  mixout() {
    return {
      counter(n) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: l = null,
          classes: s = [],
          attributes: u = {},
          styles: c = {}
        } = o;
        return aa({
          type: "counter",
          content: n
        }, () => (Ro("beforeDOMElementCreation", {
          content: n,
          params: o
        }), A1({
          content: n.toString(),
          title: l,
          extra: {
            attributes: u,
            styles: c,
            classes: ["".concat(Ce.cssPrefix, "-layers-counter"), ...s]
          }
        })));
      }
    };
  }
}, ew = {
  mixout() {
    return {
      text(n) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: l = sr,
          title: s = null,
          classes: u = [],
          attributes: c = {},
          styles: d = {}
        } = o;
        return aa({
          type: "text",
          content: n
        }, () => (Ro("beforeDOMElementCreation", {
          content: n,
          params: o
        }), Rm({
          content: n,
          transform: ne(ne({}, sr), l),
          title: s,
          extra: {
            attributes: c,
            styles: d,
            classes: ["".concat(Ce.cssPrefix, "-layers-text"), ...u]
          }
        })));
      }
    };
  },
  provides(n) {
    n.generateLayersText = function(o, l) {
      const {
        title: s,
        transform: u,
        extra: c
      } = l;
      let d = null, p = null;
      if (Hh) {
        const g = parseInt(getComputedStyle(o).fontSize, 10), h = o.getBoundingClientRect();
        d = h.width / g, p = h.height / g;
      }
      return Ce.autoA11y && !s && (c.attributes["aria-hidden"] = "true"), Promise.resolve([o, Rm({
        content: o.innerHTML,
        width: d,
        height: p,
        transform: u,
        title: s,
        extra: c,
        watchable: !0
      })]);
    };
  }
};
const tw = new RegExp('"', "ug"), bm = [1105920, 1112319], jm = ne(ne(ne(ne({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Cy), By), Ny), Mc = Object.keys(jm).reduce((n, o) => (n[o.toLowerCase()] = jm[o], n), {}), nw = Object.keys(Mc).reduce((n, o) => {
  const l = Mc[o];
  return n[o] = l[900] || [...Object.entries(l)][0][1], n;
}, {});
function rw(n) {
  const o = n.replace(tw, ""), l = u1(o, 0), s = l >= bm[0] && l <= bm[1], u = o.length === 2 ? o[0] === o[1] : !1;
  return {
    value: Pc(u ? o[0] : o),
    isSecondary: s || u
  };
}
function ow(n, o) {
  const l = n.replace(/^['"]|['"]$/g, "").toLowerCase(), s = parseInt(o), u = isNaN(s) ? "normal" : s;
  return (Mc[l] || {})[u] || nw[l];
}
function Fm(n, o) {
  const l = "".concat(Wy).concat(o.replace(":", "-"));
  return new Promise((s, u) => {
    if (n.getAttribute(l) !== null)
      return s();
    const d = fi(n.children).filter((y) => y.getAttribute(Tc) === o)[0], p = to.getComputedStyle(n, o), g = p.getPropertyValue("font-family"), h = g.match(Ky), v = p.getPropertyValue("font-weight"), w = p.getPropertyValue("content");
    if (d && !h)
      return n.removeChild(d), s();
    if (h && w !== "none" && w !== "") {
      const y = p.getPropertyValue("content");
      let x = ow(g, v);
      const {
        value: I,
        isSecondary: O
      } = rw(y), T = h[0].startsWith("FontAwesome");
      let C = sf(x, I), R = C;
      if (T) {
        const B = h1(I);
        B.iconName && B.prefix && (C = B.iconName, x = B.prefix);
      }
      if (C && !O && (!d || d.getAttribute(ef) !== x || d.getAttribute(tf) !== R)) {
        n.setAttribute(l, R), d && n.removeChild(d);
        const B = V1(), {
          extra: $
        } = B;
        $.attributes[Tc] = o, bc(C, x).then((D) => {
          const N = af(ne(ne({}, B), {}, {
            icons: {
              main: D,
              mask: ug()
            },
            prefix: x,
            iconName: R,
            extra: $,
            watchable: !0
          })), b = vt.createElementNS("http://www.w3.org/2000/svg", "svg");
          o === "::before" ? n.insertBefore(b, n.firstChild) : n.appendChild(b), b.outerHTML = N.map((S) => xl(S)).join(`
`), n.removeAttribute(l), s();
        }).catch(u);
      } else
        s();
    } else
      s();
  });
}
function iw(n) {
  return Promise.all([Fm(n, "::before"), Fm(n, "::after")]);
}
function lw(n) {
  return n.parentNode !== document.head && !~$y.indexOf(n.tagName.toUpperCase()) && !n.getAttribute(Tc) && (!n.parentNode || n.parentNode.tagName !== "svg");
}
function Mm(n) {
  if (Pr)
    return new Promise((o, l) => {
      const s = fi(n.querySelectorAll("*")).filter(lw).map(iw), u = uf.begin("searchPseudoElements");
      mg(), Promise.all(s).then(() => {
        u(), Fc(), o();
      }).catch(() => {
        u(), Fc(), l();
      });
    });
}
var sw = {
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return n.pseudoElementsCallback = Mm, n;
      }
    };
  },
  provides(n) {
    n.pseudoElements2svg = function(o) {
      const {
        node: l = vt
      } = o;
      Ce.searchPseudoElements && Mm(l);
    };
  }
};
let Dm = !1;
var aw = {
  mixout() {
    return {
      dom: {
        unwatch() {
          mg(), Dm = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Lm(Lc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        B1();
      },
      watch(n) {
        const {
          observeMutationsRoot: o
        } = n;
        Dm ? Fc() : Lm(Lc("mutationObserverCallbacks", {
          observeMutationsRoot: o
        }));
      }
    };
  }
};
const Hm = (n) => {
  let o = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return n.toLowerCase().split(" ").reduce((l, s) => {
    const u = s.toLowerCase().split("-"), c = u[0];
    let d = u.slice(1).join("-");
    if (c && d === "h")
      return l.flipX = !0, l;
    if (c && d === "v")
      return l.flipY = !0, l;
    if (d = parseFloat(d), isNaN(d))
      return l;
    switch (c) {
      case "grow":
        l.size = l.size + d;
        break;
      case "shrink":
        l.size = l.size - d;
        break;
      case "left":
        l.x = l.x - d;
        break;
      case "right":
        l.x = l.x + d;
        break;
      case "up":
        l.y = l.y - d;
        break;
      case "down":
        l.y = l.y + d;
        break;
      case "rotate":
        l.rotate = l.rotate + d;
        break;
    }
    return l;
  }, o);
};
var uw = {
  mixout() {
    return {
      parse: {
        transform: (n) => Hm(n)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-transform");
        return l && (n.transform = Hm(l)), n;
      }
    };
  },
  provides(n) {
    n.generateAbstractTransformGrouping = function(o) {
      let {
        main: l,
        transform: s,
        containerWidth: u,
        iconWidth: c
      } = o;
      const d = {
        transform: "translate(".concat(u / 2, " 256)")
      }, p = "translate(".concat(s.x * 32, ", ").concat(s.y * 32, ") "), g = "scale(".concat(s.size / 16 * (s.flipX ? -1 : 1), ", ").concat(s.size / 16 * (s.flipY ? -1 : 1), ") "), h = "rotate(".concat(s.rotate, " 0 0)"), v = {
        transform: "".concat(p, " ").concat(g, " ").concat(h)
      }, w = {
        transform: "translate(".concat(c / 2 * -1, " -256)")
      }, y = {
        outer: d,
        inner: v,
        path: w
      };
      return {
        tag: "g",
        attributes: ne({}, y.outer),
        children: [{
          tag: "g",
          attributes: ne({}, y.inner),
          children: [{
            tag: l.icon.tag,
            children: l.icon.children,
            attributes: ne(ne({}, l.icon.attributes), y.path)
          }]
        }]
      };
    };
  }
};
const sc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Bm(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.attributes && (n.attributes.fill || o) && (n.attributes.fill = "black"), n;
}
function cw(n) {
  return n.tag === "g" ? n.children : [n];
}
var fw = {
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-mask"), s = l ? sa(l.split(" ").map((u) => u.trim())) : ug();
        return s.prefix || (s.prefix = no()), n.mask = s, n.maskId = o.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides(n) {
    n.generateAbstractMask = function(o) {
      let {
        children: l,
        attributes: s,
        main: u,
        mask: c,
        maskId: d,
        transform: p
      } = o;
      const {
        width: g,
        icon: h
      } = u, {
        width: v,
        icon: w
      } = c, y = r1({
        transform: p,
        containerWidth: v,
        iconWidth: g
      }), x = {
        tag: "rect",
        attributes: ne(ne({}, sc), {}, {
          fill: "white"
        })
      }, I = h.children ? {
        children: h.children.map(Bm)
      } : {}, O = {
        tag: "g",
        attributes: ne({}, y.inner),
        children: [Bm(ne({
          tag: h.tag,
          attributes: ne(ne({}, h.attributes), y.path)
        }, I))]
      }, T = {
        tag: "g",
        attributes: ne({}, y.outer),
        children: [O]
      }, C = "mask-".concat(d || ul()), R = "clip-".concat(d || ul()), B = {
        tag: "mask",
        attributes: ne(ne({}, sc), {}, {
          id: C,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [x, T]
      }, $ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: R
          },
          children: cw(w)
        }, B]
      };
      return l.push($, {
        tag: "rect",
        attributes: ne({
          fill: "currentColor",
          "clip-path": "url(#".concat(R, ")"),
          mask: "url(#".concat(C, ")")
        }, sc)
      }), {
        children: l,
        attributes: s
      };
    };
  }
}, dw = {
  provides(n) {
    let o = !1;
    to.matchMedia && (o = to.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      const l = [], s = {
        fill: "currentColor"
      }, u = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      l.push({
        tag: "path",
        attributes: ne(ne({}, s), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const c = ne(ne({}, u), {}, {
        attributeName: "opacity"
      }), d = {
        tag: "circle",
        attributes: ne(ne({}, s), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return o || d.children.push({
        tag: "animate",
        attributes: ne(ne({}, u), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: ne(ne({}, c), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), l.push(d), l.push({
        tag: "path",
        attributes: ne(ne({}, s), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: o ? [] : [{
          tag: "animate",
          attributes: ne(ne({}, c), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), o || l.push({
        tag: "path",
        attributes: ne(ne({}, s), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: ne(ne({}, c), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: l
      };
    };
  }
}, pw = {
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-symbol"), s = l === null ? !1 : l === "" ? !0 : l;
        return n.symbol = s, n;
      }
    };
  }
}, mw = [l1, X1, Z1, J1, ew, sw, aw, uw, fw, dw, pw];
C1(mw, {
  mixoutsTo: Cn
});
Cn.noAuto;
Cn.config;
Cn.library;
Cn.dom;
const Dc = Cn.parse;
Cn.findIconDefinition;
Cn.toHtml;
const hw = Cn.icon;
Cn.layer;
Cn.text;
Cn.counter;
var ac = { exports: {} }, uc, Wm;
function gw() {
  if (Wm) return uc;
  Wm = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return uc = n, uc;
}
var cc, Um;
function vw() {
  if (Um) return cc;
  Um = 1;
  var n = /* @__PURE__ */ gw();
  function o() {
  }
  function l() {
  }
  return l.resetWarningCache = o, cc = function() {
    function s(d, p, g, h, v, w) {
      if (w !== n) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    s.isRequired = s;
    function u() {
      return s;
    }
    var c = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: u,
      element: s,
      elementType: s,
      instanceOf: u,
      node: s,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: l,
      resetWarningCache: o
    };
    return c.PropTypes = c, c;
  }, cc;
}
var $m;
function yw() {
  return $m || ($m = 1, ac.exports = /* @__PURE__ */ vw()()), ac.exports;
}
var ww = /* @__PURE__ */ yw();
const Qe = /* @__PURE__ */ yl(ww);
function Vm(n, o) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    o && (s = s.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function ir(n) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Vm(Object(l), !0).forEach(function(s) {
      ri(n, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : Vm(Object(l)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return n;
}
function qs(n) {
  "@babel/helpers - typeof";
  return qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, qs(n);
}
function ri(n, o, l) {
  return o in n ? Object.defineProperty(n, o, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[o] = l, n;
}
function xw(n, o) {
  if (n == null) return {};
  var l = {}, s = Object.keys(n), u, c;
  for (c = 0; c < s.length; c++)
    u = s[c], !(o.indexOf(u) >= 0) && (l[u] = n[u]);
  return l;
}
function Sw(n, o) {
  if (n == null) return {};
  var l = xw(n, o), s, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      s = c[u], !(o.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (l[s] = n[s]);
  }
  return l;
}
function Hc(n) {
  return kw(n) || _w(n) || Cw(n) || Ew();
}
function kw(n) {
  if (Array.isArray(n)) return Bc(n);
}
function _w(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Cw(n, o) {
  if (n) {
    if (typeof n == "string") return Bc(n, o);
    var l = Object.prototype.toString.call(n).slice(8, -1);
    if (l === "Object" && n.constructor && (l = n.constructor.name), l === "Map" || l === "Set") return Array.from(n);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return Bc(n, o);
  }
}
function Bc(n, o) {
  (o == null || o > n.length) && (o = n.length);
  for (var l = 0, s = new Array(o); l < o; l++) s[l] = n[l];
  return s;
}
function Ew() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tw(n) {
  var o, l = n.beat, s = n.fade, u = n.beatFade, c = n.bounce, d = n.shake, p = n.flash, g = n.spin, h = n.spinPulse, v = n.spinReverse, w = n.pulse, y = n.fixedWidth, x = n.inverse, I = n.border, O = n.listItem, T = n.flip, C = n.size, R = n.rotation, B = n.pull, $ = (o = {
    "fa-beat": l,
    "fa-fade": s,
    "fa-beat-fade": u,
    "fa-bounce": c,
    "fa-shake": d,
    "fa-flash": p,
    "fa-spin": g,
    "fa-spin-reverse": v,
    "fa-spin-pulse": h,
    "fa-pulse": w,
    "fa-fw": y,
    "fa-inverse": x,
    "fa-border": I,
    "fa-li": O,
    "fa-flip": T === !0,
    "fa-flip-horizontal": T === "horizontal" || T === "both",
    "fa-flip-vertical": T === "vertical" || T === "both"
  }, ri(o, "fa-".concat(C), typeof C < "u" && C !== null), ri(o, "fa-rotate-".concat(R), typeof R < "u" && R !== null && R !== 0), ri(o, "fa-pull-".concat(B), typeof B < "u" && B !== null), ri(o, "fa-swap-opacity", n.swapOpacity), o);
  return Object.keys($).map(function(D) {
    return $[D] ? D : null;
  }).filter(function(D) {
    return D;
  });
}
function Iw(n) {
  return n = n - 0, n === n;
}
function gg(n) {
  return Iw(n) ? n : (n = n.replace(/[\-_\s]+(.)?/g, function(o, l) {
    return l ? l.toUpperCase() : "";
  }), n.substr(0, 1).toLowerCase() + n.substr(1));
}
var Rw = ["style"];
function Ow(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Pw(n) {
  return n.split(";").map(function(o) {
    return o.trim();
  }).filter(function(o) {
    return o;
  }).reduce(function(o, l) {
    var s = l.indexOf(":"), u = gg(l.slice(0, s)), c = l.slice(s + 1).trim();
    return u.startsWith("webkit") ? o[Ow(u)] = c : o[u] = c, o;
  }, {});
}
function vg(n, o) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof o == "string")
    return o;
  var s = (o.children || []).map(function(g) {
    return vg(n, g);
  }), u = Object.keys(o.attributes || {}).reduce(function(g, h) {
    var v = o.attributes[h];
    switch (h) {
      case "class":
        g.attrs.className = v, delete o.attributes.class;
        break;
      case "style":
        g.attrs.style = Pw(v);
        break;
      default:
        h.indexOf("aria-") === 0 || h.indexOf("data-") === 0 ? g.attrs[h.toLowerCase()] = v : g.attrs[gg(h)] = v;
    }
    return g;
  }, {
    attrs: {}
  }), c = l.style, d = c === void 0 ? {} : c, p = Sw(l, Rw);
  return u.attrs.style = ir(ir({}, u.attrs.style), d), n.apply(void 0, [o.tag, ir(ir({}, u.attrs), p)].concat(Hc(s)));
}
var yg = !1;
try {
  yg = !0;
} catch {
}
function Aw() {
  if (!yg && console && typeof console.error == "function") {
    var n;
    (n = console).error.apply(n, arguments);
  }
}
function Ym(n) {
  if (n && qs(n) === "object" && n.prefix && n.iconName && n.icon)
    return n;
  if (Dc.icon)
    return Dc.icon(n);
  if (n === null)
    return null;
  if (n && qs(n) === "object" && n.prefix && n.iconName)
    return n;
  if (Array.isArray(n) && n.length === 2)
    return {
      prefix: n[0],
      iconName: n[1]
    };
  if (typeof n == "string")
    return {
      prefix: "fas",
      iconName: n
    };
}
function fc(n, o) {
  return Array.isArray(o) && o.length > 0 || !Array.isArray(o) && o ? ri({}, n, o) : {};
}
var Km = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, zn = /* @__PURE__ */ ae.forwardRef(function(n, o) {
  var l = ir(ir({}, Km), n), s = l.icon, u = l.mask, c = l.symbol, d = l.className, p = l.title, g = l.titleId, h = l.maskId, v = Ym(s), w = fc("classes", [].concat(Hc(Tw(l)), Hc((d || "").split(" ")))), y = fc("transform", typeof l.transform == "string" ? Dc.transform(l.transform) : l.transform), x = fc("mask", Ym(u)), I = hw(v, ir(ir(ir(ir({}, w), y), x), {}, {
    symbol: c,
    title: p,
    titleId: g,
    maskId: h
  }));
  if (!I)
    return Aw("Could not find icon", v), null;
  var O = I.abstract, T = {
    ref: o
  };
  return Object.keys(l).forEach(function(C) {
    Km.hasOwnProperty(C) || (T[C] = l[C]);
  }), Lw(O[0], T);
});
zn.displayName = "FontAwesomeIcon";
zn.propTypes = {
  beat: Qe.bool,
  border: Qe.bool,
  beatFade: Qe.bool,
  bounce: Qe.bool,
  className: Qe.string,
  fade: Qe.bool,
  flash: Qe.bool,
  mask: Qe.oneOfType([Qe.object, Qe.array, Qe.string]),
  maskId: Qe.string,
  fixedWidth: Qe.bool,
  inverse: Qe.bool,
  flip: Qe.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Qe.oneOfType([Qe.object, Qe.array, Qe.string]),
  listItem: Qe.bool,
  pull: Qe.oneOf(["right", "left"]),
  pulse: Qe.bool,
  rotation: Qe.oneOf([0, 90, 180, 270]),
  shake: Qe.bool,
  size: Qe.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Qe.bool,
  spinPulse: Qe.bool,
  spinReverse: Qe.bool,
  symbol: Qe.oneOfType([Qe.bool, Qe.string]),
  title: Qe.string,
  titleId: Qe.string,
  transform: Qe.oneOfType([Qe.string, Qe.object]),
  swapOpacity: Qe.bool
};
var Lw = vg.bind(null, ae.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const zw = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Nw = {
  prefix: "fas",
  iconName: "list",
  icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]
}, bw = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, jw = {
  prefix: "fas",
  iconName: "table-columns",
  icon: [512, 512, ["columns"], "f0db", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 160 0 0-256L64 160zm384 0l-160 0 0 256 160 0 0-256z"]
}, Fw = {
  prefix: "fas",
  iconName: "filter",
  icon: [512, 512, [], "f0b0", "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]
}, Mw = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Dw = {
  prefix: "fas",
  iconName: "arrow-rotate-right",
  icon: [512, 512, [8635, "arrow-right-rotate", "arrow-rotate-forward", "redo"], "f01e", "M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]
}, Qm = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Hw = {
  prefix: "fas",
  iconName: "border-all",
  icon: [448, 512, [], "f84c", "M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
var Vs = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var Bw = Vs.exports, Gm;
function Ww() {
  return Gm || (Gm = 1, function(n, o) {
    ((l, s) => {
      n.exports = s();
    })(Bw, function l() {
      var s = typeof self < "u" ? self : typeof window < "u" ? window : s !== void 0 ? s : {}, u, c = !s.document && !!s.postMessage, d = s.IS_PAPA_WORKER || !1, p = {}, g = 0, h = {};
      function v(S) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(E) {
          var L = D(E);
          L.chunkSize = parseInt(L.chunkSize), E.step || E.chunk || (L.chunkSize = null), this._handle = new O(L), (this._handle.streamer = this)._config = L;
        }).call(this, S), this.parseChunk = function(E, L) {
          var V = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < V) {
            let ie = this._config.newline;
            ie || (Q = this._config.quoteChar || '"', ie = this._handle.guessLineEndings(E, Q)), E = [...E.split(ie).slice(V)].join(ie);
          }
          this.isFirstChunk && b(this._config.beforeFirstChunk) && (Q = this._config.beforeFirstChunk(E)) !== void 0 && (E = Q), this.isFirstChunk = !1, this._halted = !1;
          var V = this._partialLine + E, Q = (this._partialLine = "", this._handle.parse(V, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (E = Q.meta.cursor, V = (this._finished || (this._partialLine = V.substring(E - this._baseIndex), this._baseIndex = E), Q && Q.data && (this._rowCount += Q.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), d) s.postMessage({ results: Q, workerId: h.WORKER_ID, finished: V });
            else if (b(this._config.chunk) && !L) {
              if (this._config.chunk(Q, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = Q = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(Q.data), this._completeResults.errors = this._completeResults.errors.concat(Q.errors), this._completeResults.meta = Q.meta), this._completed || !V || !b(this._config.complete) || Q && Q.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), V || Q && Q.meta.paused || this._nextChunk(), Q;
          }
          this._halted = !0;
        }, this._sendError = function(E) {
          b(this._config.error) ? this._config.error(E) : d && this._config.error && s.postMessage({ workerId: h.WORKER_ID, error: E, finished: !1 });
        };
      }
      function w(S) {
        var E;
        (S = S || {}).chunkSize || (S.chunkSize = h.RemoteChunkSize), v.call(this, S), this._nextChunk = c ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(L) {
          this._input = L, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (E = new XMLHttpRequest(), this._config.withCredentials && (E.withCredentials = this._config.withCredentials), c || (E.onload = N(this._chunkLoaded, this), E.onerror = N(this._chunkError, this)), E.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !c), this._config.downloadRequestHeaders) {
              var L, V = this._config.downloadRequestHeaders;
              for (L in V) E.setRequestHeader(L, V[L]);
            }
            var Q;
            this._config.chunkSize && (Q = this._start + this._config.chunkSize - 1, E.setRequestHeader("Range", "bytes=" + this._start + "-" + Q));
            try {
              E.send(this._config.downloadRequestBody);
            } catch (ie) {
              this._chunkError(ie.message);
            }
            c && E.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          E.readyState === 4 && (E.status < 200 || 400 <= E.status ? this._chunkError() : (this._start += this._config.chunkSize || E.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((L) => (L = L.getResponseHeader("Content-Range")) !== null ? parseInt(L.substring(L.lastIndexOf("/") + 1)) : -1)(E), this.parseChunk(E.responseText)));
        }, this._chunkError = function(L) {
          L = E.statusText || L, this._sendError(new Error(L));
        };
      }
      function y(S) {
        (S = S || {}).chunkSize || (S.chunkSize = h.LocalChunkSize), v.call(this, S);
        var E, L, V = typeof FileReader < "u";
        this.stream = function(Q) {
          this._input = Q, L = Q.slice || Q.webkitSlice || Q.mozSlice, V ? ((E = new FileReader()).onload = N(this._chunkLoaded, this), E.onerror = N(this._chunkError, this)) : E = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var Q = this._input, ie = (this._config.chunkSize && (ie = Math.min(this._start + this._config.chunkSize, this._input.size), Q = L.call(Q, this._start, ie)), E.readAsText(Q, this._config.encoding));
          V || this._chunkLoaded({ target: { result: ie } });
        }, this._chunkLoaded = function(Q) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(Q.target.result);
        }, this._chunkError = function() {
          this._sendError(E.error);
        };
      }
      function x(S) {
        var E;
        v.call(this, S = S || {}), this.stream = function(L) {
          return E = L, this._nextChunk();
        }, this._nextChunk = function() {
          var L, V;
          if (!this._finished) return L = this._config.chunkSize, E = L ? (V = E.substring(0, L), E.substring(L)) : (V = E, ""), this._finished = !E, this.parseChunk(V);
        };
      }
      function I(S) {
        v.call(this, S = S || {});
        var E = [], L = !0, V = !1;
        this.pause = function() {
          v.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          v.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(Q) {
          this._input = Q, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          V && E.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), E.length ? this.parseChunk(E.shift()) : L = !0;
        }, this._streamData = N(function(Q) {
          try {
            E.push(typeof Q == "string" ? Q : Q.toString(this._config.encoding)), L && (L = !1, this._checkIsFinished(), this.parseChunk(E.shift()));
          } catch (ie) {
            this._streamError(ie);
          }
        }, this), this._streamError = N(function(Q) {
          this._streamCleanUp(), this._sendError(Q);
        }, this), this._streamEnd = N(function() {
          this._streamCleanUp(), V = !0, this._streamData("");
        }, this), this._streamCleanUp = N(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function O(S) {
        var E, L, V, Q, ie = Math.pow(2, 53), K = -ie, fe = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, we = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, re = this, U = 0, Y = 0, _ = !1, z = !1, G = [], q = { data: [], errors: [], meta: {} };
        function de(F) {
          return S.skipEmptyLines === "greedy" ? F.join("").trim() === "" : F.length === 1 && F[0].length === 0;
        }
        function ke() {
          if (q && V && (Ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + h.DefaultDelimiter + "'"), V = !1), S.skipEmptyLines && (q.data = q.data.filter(function(Ie) {
            return !de(Ie);
          })), ge()) {
            let Ie = function(Be, Ue) {
              b(S.transformHeader) && (Be = S.transformHeader(Be, Ue)), G.push(Be);
            };
            var pe = Ie;
            if (q) if (Array.isArray(q.data[0])) {
              for (var F = 0; ge() && F < q.data.length; F++) q.data[F].forEach(Ie);
              q.data.splice(0, 1);
            } else q.data.forEach(Ie);
          }
          function oe(Ie, Be) {
            for (var Ue = S.header ? {} : [], Re = 0; Re < Ie.length; Re++) {
              var ze = Re, Ve = Ie[Re], Ve = ((Ne, _e) => ((Ge) => (S.dynamicTypingFunction && S.dynamicTyping[Ge] === void 0 && (S.dynamicTyping[Ge] = S.dynamicTypingFunction(Ge)), (S.dynamicTyping[Ge] || S.dynamicTyping) === !0))(Ne) ? _e === "true" || _e === "TRUE" || _e !== "false" && _e !== "FALSE" && (((Ge) => {
                if (fe.test(Ge) && (Ge = parseFloat(Ge), K < Ge && Ge < ie))
                  return 1;
              })(_e) ? parseFloat(_e) : we.test(_e) ? new Date(_e) : _e === "" ? null : _e) : _e)(ze = S.header ? Re >= G.length ? "__parsed_extra" : G[Re] : ze, Ve = S.transform ? S.transform(Ve, ze) : Ve);
              ze === "__parsed_extra" ? (Ue[ze] = Ue[ze] || [], Ue[ze].push(Ve)) : Ue[ze] = Ve;
            }
            return S.header && (Re > G.length ? Ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + G.length + " fields but parsed " + Re, Y + Be) : Re < G.length && Ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + G.length + " fields but parsed " + Re, Y + Be)), Ue;
          }
          var xe;
          q && (S.header || S.dynamicTyping || S.transform) && (xe = 1, !q.data.length || Array.isArray(q.data[0]) ? (q.data = q.data.map(oe), xe = q.data.length) : q.data = oe(q.data, 0), S.header && q.meta && (q.meta.fields = G), Y += xe);
        }
        function ge() {
          return S.header && G.length === 0;
        }
        function Ee(F, oe, xe, pe) {
          F = { type: F, code: oe, message: xe }, pe !== void 0 && (F.row = pe), q.errors.push(F);
        }
        b(S.step) && (Q = S.step, S.step = function(F) {
          q = F, ge() ? ke() : (ke(), q.data.length !== 0 && (U += F.data.length, S.preview && U > S.preview ? L.abort() : (q.data = q.data[0], Q(q, re))));
        }), this.parse = function(F, oe, xe) {
          var pe = S.quoteChar || '"', pe = (S.newline || (S.newline = this.guessLineEndings(F, pe)), V = !1, S.delimiter ? b(S.delimiter) && (S.delimiter = S.delimiter(F), q.meta.delimiter = S.delimiter) : ((pe = ((Ie, Be, Ue, Re, ze) => {
            var Ve, Ne, _e, Ge;
            ze = ze || [",", "	", "|", ";", h.RECORD_SEP, h.UNIT_SEP];
            for (var St = 0; St < ze.length; St++) {
              for (var kt, Nt = ze[St], tt = 0, it = 0, Xe = 0, lt = (_e = void 0, new C({ comments: Re, delimiter: Nt, newline: Be, preview: 10 }).parse(Ie)), pt = 0; pt < lt.data.length; pt++) Ue && de(lt.data[pt]) ? Xe++ : (kt = lt.data[pt].length, it += kt, _e === void 0 ? _e = kt : 0 < kt && (tt += Math.abs(kt - _e), _e = kt));
              0 < lt.data.length && (it /= lt.data.length - Xe), (Ne === void 0 || tt <= Ne) && (Ge === void 0 || Ge < it) && 1.99 < it && (Ne = tt, Ve = Nt, Ge = it);
            }
            return { successful: !!(S.delimiter = Ve), bestDelimiter: Ve };
          })(F, S.newline, S.skipEmptyLines, S.comments, S.delimitersToGuess)).successful ? S.delimiter = pe.bestDelimiter : (V = !0, S.delimiter = h.DefaultDelimiter), q.meta.delimiter = S.delimiter), D(S));
          return S.preview && S.header && pe.preview++, E = F, L = new C(pe), q = L.parse(E, oe, xe), ke(), _ ? { meta: { paused: !0 } } : q || { meta: { paused: !1 } };
        }, this.paused = function() {
          return _;
        }, this.pause = function() {
          _ = !0, L.abort(), E = b(S.chunk) ? "" : E.substring(L.getCharIndex());
        }, this.resume = function() {
          re.streamer._halted ? (_ = !1, re.streamer.parseChunk(E, !0)) : setTimeout(re.resume, 3);
        }, this.aborted = function() {
          return z;
        }, this.abort = function() {
          z = !0, L.abort(), q.meta.aborted = !0, b(S.complete) && S.complete(q), E = "";
        }, this.guessLineEndings = function(Ie, pe) {
          Ie = Ie.substring(0, 1048576);
          var pe = new RegExp(T(pe) + "([^]*?)" + T(pe), "gm"), xe = (Ie = Ie.replace(pe, "")).split("\r"), pe = Ie.split(`
`), Ie = 1 < pe.length && pe[0].length < xe[0].length;
          if (xe.length === 1 || Ie) return `
`;
          for (var Be = 0, Ue = 0; Ue < xe.length; Ue++) xe[Ue][0] === `
` && Be++;
          return Be >= xe.length / 2 ? `\r
` : "\r";
        };
      }
      function T(S) {
        return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function C(S) {
        var E = (S = S || {}).delimiter, L = S.newline, V = S.comments, Q = S.step, ie = S.preview, K = S.fastMode, fe = null, we = !1, re = S.quoteChar == null ? '"' : S.quoteChar, U = re;
        if (S.escapeChar !== void 0 && (U = S.escapeChar), (typeof E != "string" || -1 < h.BAD_DELIMITERS.indexOf(E)) && (E = ","), V === E) throw new Error("Comment character same as delimiter");
        V === !0 ? V = "#" : (typeof V != "string" || -1 < h.BAD_DELIMITERS.indexOf(V)) && (V = !1), L !== `
` && L !== "\r" && L !== `\r
` && (L = `
`);
        var Y = 0, _ = !1;
        this.parse = function(z, G, q) {
          if (typeof z != "string") throw new Error("Input must be a string");
          var de = z.length, ke = E.length, ge = L.length, Ee = V.length, F = b(Q), oe = [], xe = [], pe = [], Ie = Y = 0;
          if (!z) return tt();
          if (K || K !== !1 && z.indexOf(re) === -1) {
            for (var Be = z.split(L), Ue = 0; Ue < Be.length; Ue++) {
              if (pe = Be[Ue], Y += pe.length, Ue !== Be.length - 1) Y += L.length;
              else if (q) return tt();
              if (!V || pe.substring(0, Ee) !== V) {
                if (F) {
                  if (oe = [], Ge(pe.split(E)), it(), _) return tt();
                } else Ge(pe.split(E));
                if (ie && ie <= Ue) return oe = oe.slice(0, ie), tt(!0);
              }
            }
            return tt();
          }
          for (var Re = z.indexOf(E, Y), ze = z.indexOf(L, Y), Ve = new RegExp(T(U) + T(re), "g"), Ne = z.indexOf(re, Y); ; ) if (z[Y] === re) for (Ne = Y, Y++; ; ) {
            if ((Ne = z.indexOf(re, Ne + 1)) === -1) return q || xe.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: oe.length, index: Y }), kt();
            if (Ne === de - 1) return kt(z.substring(Y, Ne).replace(Ve, re));
            if (re === U && z[Ne + 1] === U) Ne++;
            else if (re === U || Ne === 0 || z[Ne - 1] !== U) {
              Re !== -1 && Re < Ne + 1 && (Re = z.indexOf(E, Ne + 1));
              var _e = St((ze = ze !== -1 && ze < Ne + 1 ? z.indexOf(L, Ne + 1) : ze) === -1 ? Re : Math.min(Re, ze));
              if (z.substr(Ne + 1 + _e, ke) === E) {
                pe.push(z.substring(Y, Ne).replace(Ve, re)), z[Y = Ne + 1 + _e + ke] !== re && (Ne = z.indexOf(re, Y)), Re = z.indexOf(E, Y), ze = z.indexOf(L, Y);
                break;
              }
              if (_e = St(ze), z.substring(Ne + 1 + _e, Ne + 1 + _e + ge) === L) {
                if (pe.push(z.substring(Y, Ne).replace(Ve, re)), Nt(Ne + 1 + _e + ge), Re = z.indexOf(E, Y), Ne = z.indexOf(re, Y), F && (it(), _)) return tt();
                if (ie && oe.length >= ie) return tt(!0);
                break;
              }
              xe.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: oe.length, index: Y }), Ne++;
            }
          }
          else if (V && pe.length === 0 && z.substring(Y, Y + Ee) === V) {
            if (ze === -1) return tt();
            Y = ze + ge, ze = z.indexOf(L, Y), Re = z.indexOf(E, Y);
          } else if (Re !== -1 && (Re < ze || ze === -1)) pe.push(z.substring(Y, Re)), Y = Re + ke, Re = z.indexOf(E, Y);
          else {
            if (ze === -1) break;
            if (pe.push(z.substring(Y, ze)), Nt(ze + ge), F && (it(), _)) return tt();
            if (ie && oe.length >= ie) return tt(!0);
          }
          return kt();
          function Ge(Xe) {
            oe.push(Xe), Ie = Y;
          }
          function St(Xe) {
            var lt = 0;
            return lt = Xe !== -1 && (Xe = z.substring(Ne + 1, Xe)) && Xe.trim() === "" ? Xe.length : lt;
          }
          function kt(Xe) {
            return q || (Xe === void 0 && (Xe = z.substring(Y)), pe.push(Xe), Y = de, Ge(pe), F && it()), tt();
          }
          function Nt(Xe) {
            Y = Xe, Ge(pe), pe = [], ze = z.indexOf(L, Y);
          }
          function tt(Xe) {
            if (S.header && !G && oe.length && !we) {
              var lt = oe[0], pt = /* @__PURE__ */ Object.create(null), Kt = new Set(lt);
              let sn = !1;
              for (let Et = 0; Et < lt.length; Et++) {
                let Tt = lt[Et];
                if (pt[Tt = b(S.transformHeader) ? S.transformHeader(Tt, Et) : Tt]) {
                  let Lt, ut = pt[Tt];
                  for (; Lt = Tt + "_" + ut, ut++, Kt.has(Lt); ) ;
                  Kt.add(Lt), lt[Et] = Lt, pt[Tt]++, sn = !0, (fe = fe === null ? {} : fe)[Lt] = Tt;
                } else pt[Tt] = 1, lt[Et] = Tt;
                Kt.add(Tt);
              }
              sn && console.warn("Duplicate headers found and renamed."), we = !0;
            }
            return { data: oe, errors: xe, meta: { delimiter: E, linebreak: L, aborted: _, truncated: !!Xe, cursor: Ie + (G || 0), renamedHeaders: fe } };
          }
          function it() {
            Q(tt()), oe = [], xe = [];
          }
        }, this.abort = function() {
          _ = !0;
        }, this.getCharIndex = function() {
          return Y;
        };
      }
      function R(S) {
        var E = S.data, L = p[E.workerId], V = !1;
        if (E.error) L.userError(E.error, E.file);
        else if (E.results && E.results.data) {
          var Q = { abort: function() {
            V = !0, B(E.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: $, resume: $ };
          if (b(L.userStep)) {
            for (var ie = 0; ie < E.results.data.length && (L.userStep({ data: E.results.data[ie], errors: E.results.errors, meta: E.results.meta }, Q), !V); ie++) ;
            delete E.results;
          } else b(L.userChunk) && (L.userChunk(E.results, Q, E.file), delete E.results);
        }
        E.finished && !V && B(E.workerId, E.results);
      }
      function B(S, E) {
        var L = p[S];
        b(L.userComplete) && L.userComplete(E), L.terminate(), delete p[S];
      }
      function $() {
        throw new Error("Not implemented.");
      }
      function D(S) {
        if (typeof S != "object" || S === null) return S;
        var E, L = Array.isArray(S) ? [] : {};
        for (E in S) L[E] = D(S[E]);
        return L;
      }
      function N(S, E) {
        return function() {
          S.apply(E, arguments);
        };
      }
      function b(S) {
        return typeof S == "function";
      }
      return h.parse = function(S, E) {
        var L = (E = E || {}).dynamicTyping || !1;
        if (b(L) && (E.dynamicTypingFunction = L, L = {}), E.dynamicTyping = L, E.transform = !!b(E.transform) && E.transform, !E.worker || !h.WORKERS_SUPPORTED) return L = null, h.NODE_STREAM_INPUT, typeof S == "string" ? (S = ((V) => V.charCodeAt(0) !== 65279 ? V : V.slice(1))(S), L = new (E.download ? w : x)(E)) : S.readable === !0 && b(S.read) && b(S.on) ? L = new I(E) : (s.File && S instanceof File || S instanceof Object) && (L = new y(E)), L.stream(S);
        (L = (() => {
          var V;
          return !!h.WORKERS_SUPPORTED && (V = (() => {
            var Q = s.URL || s.webkitURL || null, ie = l.toString();
            return h.BLOB_URL || (h.BLOB_URL = Q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", ie, ")();"], { type: "text/javascript" })));
          })(), (V = new s.Worker(V)).onmessage = R, V.id = g++, p[V.id] = V);
        })()).userStep = E.step, L.userChunk = E.chunk, L.userComplete = E.complete, L.userError = E.error, E.step = b(E.step), E.chunk = b(E.chunk), E.complete = b(E.complete), E.error = b(E.error), delete E.worker, L.postMessage({ input: S, config: E, workerId: L.id });
      }, h.unparse = function(S, E) {
        var L = !1, V = !0, Q = ",", ie = `\r
`, K = '"', fe = K + K, we = !1, re = null, U = !1, Y = ((() => {
          if (typeof E == "object") {
            if (typeof E.delimiter != "string" || h.BAD_DELIMITERS.filter(function(G) {
              return E.delimiter.indexOf(G) !== -1;
            }).length || (Q = E.delimiter), typeof E.quotes != "boolean" && typeof E.quotes != "function" && !Array.isArray(E.quotes) || (L = E.quotes), typeof E.skipEmptyLines != "boolean" && typeof E.skipEmptyLines != "string" || (we = E.skipEmptyLines), typeof E.newline == "string" && (ie = E.newline), typeof E.quoteChar == "string" && (K = E.quoteChar), typeof E.header == "boolean" && (V = E.header), Array.isArray(E.columns)) {
              if (E.columns.length === 0) throw new Error("Option columns is empty");
              re = E.columns;
            }
            E.escapeChar !== void 0 && (fe = E.escapeChar + K), E.escapeFormulae instanceof RegExp ? U = E.escapeFormulae : typeof E.escapeFormulae == "boolean" && E.escapeFormulae && (U = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(T(K), "g"));
        if (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S)) {
          if (!S.length || Array.isArray(S[0])) return _(null, S, we);
          if (typeof S[0] == "object") return _(re || Object.keys(S[0]), S, we);
        } else if (typeof S == "object") return typeof S.data == "string" && (S.data = JSON.parse(S.data)), Array.isArray(S.data) && (S.fields || (S.fields = S.meta && S.meta.fields || re), S.fields || (S.fields = Array.isArray(S.data[0]) ? S.fields : typeof S.data[0] == "object" ? Object.keys(S.data[0]) : []), Array.isArray(S.data[0]) || typeof S.data[0] == "object" || (S.data = [S.data])), _(S.fields || [], S.data || [], we);
        throw new Error("Unable to serialize unrecognized input");
        function _(G, q, de) {
          var ke = "", ge = (typeof G == "string" && (G = JSON.parse(G)), typeof q == "string" && (q = JSON.parse(q)), Array.isArray(G) && 0 < G.length), Ee = !Array.isArray(q[0]);
          if (ge && V) {
            for (var F = 0; F < G.length; F++) 0 < F && (ke += Q), ke += z(G[F], F);
            0 < q.length && (ke += ie);
          }
          for (var oe = 0; oe < q.length; oe++) {
            var xe = (ge ? G : q[oe]).length, pe = !1, Ie = ge ? Object.keys(q[oe]).length === 0 : q[oe].length === 0;
            if (de && !ge && (pe = de === "greedy" ? q[oe].join("").trim() === "" : q[oe].length === 1 && q[oe][0].length === 0), de === "greedy" && ge) {
              for (var Be = [], Ue = 0; Ue < xe; Ue++) {
                var Re = Ee ? G[Ue] : Ue;
                Be.push(q[oe][Re]);
              }
              pe = Be.join("").trim() === "";
            }
            if (!pe) {
              for (var ze = 0; ze < xe; ze++) {
                0 < ze && !Ie && (ke += Q);
                var Ve = ge && Ee ? G[ze] : ze;
                ke += z(q[oe][Ve], ze);
              }
              oe < q.length - 1 && (!de || 0 < xe && !Ie) && (ke += ie);
            }
          }
          return ke;
        }
        function z(G, q) {
          var de, ke;
          return G == null ? "" : G.constructor === Date ? JSON.stringify(G).slice(1, 25) : (ke = !1, U && typeof G == "string" && U.test(G) && (G = "'" + G, ke = !0), de = G.toString().replace(Y, fe), (ke = ke || L === !0 || typeof L == "function" && L(G, q) || Array.isArray(L) && L[q] || ((ge, Ee) => {
            for (var F = 0; F < Ee.length; F++) if (-1 < ge.indexOf(Ee[F])) return !0;
            return !1;
          })(de, h.BAD_DELIMITERS) || -1 < de.indexOf(Q) || de.charAt(0) === " " || de.charAt(de.length - 1) === " ") ? K + de + K : de);
        }
      }, h.RECORD_SEP = "", h.UNIT_SEP = "", h.BYTE_ORDER_MARK = "\uFEFF", h.BAD_DELIMITERS = ["\r", `
`, '"', h.BYTE_ORDER_MARK], h.WORKERS_SUPPORTED = !c && !!s.Worker, h.NODE_STREAM_INPUT = 1, h.LocalChunkSize = 10485760, h.RemoteChunkSize = 5242880, h.DefaultDelimiter = ",", h.Parser = C, h.ParserHandle = O, h.NetworkStreamer = w, h.FileStreamer = y, h.StringStreamer = x, h.ReadableStreamStreamer = I, s.jQuery && ((u = s.jQuery).fn.parse = function(S) {
        var E = S.config || {}, L = [];
        return this.each(function(ie) {
          if (!(u(this).prop("tagName").toUpperCase() === "INPUT" && u(this).attr("type").toLowerCase() === "file" && s.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var K = 0; K < this.files.length; K++) L.push({ file: this.files[K], inputElem: this, instanceConfig: u.extend({}, E) });
        }), V(), this;
        function V() {
          if (L.length === 0) b(S.complete) && S.complete();
          else {
            var ie, K, fe, we, re = L[0];
            if (b(S.before)) {
              var U = S.before(re.file, re.inputElem);
              if (typeof U == "object") {
                if (U.action === "abort") return ie = "AbortError", K = re.file, fe = re.inputElem, we = U.reason, void (b(S.error) && S.error({ name: ie }, K, fe, we));
                if (U.action === "skip") return void Q();
                typeof U.config == "object" && (re.instanceConfig = u.extend(re.instanceConfig, U.config));
              } else if (U === "skip") return void Q();
            }
            var Y = re.instanceConfig.complete;
            re.instanceConfig.complete = function(_) {
              b(Y) && Y(_, re.file, re.inputElem), Q();
            }, h.parse(re.file, re.instanceConfig);
          }
        }
        function Q() {
          L.splice(0, 1), V();
        }
      }), d && (s.onmessage = function(S) {
        S = S.data, h.WORKER_ID === void 0 && S && (h.WORKER_ID = S.workerId), typeof S.input == "string" ? s.postMessage({ workerId: h.WORKER_ID, results: h.parse(S.input, S.config), finished: !0 }) : (s.File && S.input instanceof File || S.input instanceof Object) && (S = h.parse(S.input, S.config)) && s.postMessage({ workerId: h.WORKER_ID, results: S, finished: !0 });
      }), (w.prototype = Object.create(v.prototype)).constructor = w, (y.prototype = Object.create(v.prototype)).constructor = y, (x.prototype = Object.create(x.prototype)).constructor = x, (I.prototype = Object.create(v.prototype)).constructor = I, h;
    });
  }(Vs)), Vs.exports;
}
var Uw = Ww();
const $w = /* @__PURE__ */ yl(Uw), Vw = "_container_wy793_1", Yw = "_main_wy793_9", Kw = "_title_wy793_15", Qw = "_search_wy793_22", Gw = "_loader_wy793_30", qw = "_fetch_wy793_34", Xw = "_buttons_wy793_41", Zw = "_active_wy793_62", Jw = "_icon_wy793_67", $n = {
  container: Vw,
  main: Yw,
  title: Kw,
  search: Qw,
  loader: Gw,
  fetch: qw,
  buttons: Xw,
  active: Zw,
  icon: Jw
}, ex = "_search_qqeb0_1", tx = {
  search: ex
};
function nx({ changeHandler: n }) {
  return /* @__PURE__ */ M.jsx("input", { className: tx.search, name: "search", type: "text", autoComplete: "off", placeholder: "🔍  Search data elements...", onChange: n });
}
const rx = "_content_bbdxn_1", ox = "_count_bbdxn_11", qm = {
  content: rx,
  count: ox
};
var ix = jh();
const lx = /* @__PURE__ */ yl(ix), ua = 0, io = 1, di = 2, wg = 4;
function Xm(n) {
  return () => n;
}
function sx(n) {
  n();
}
function fl(n, o) {
  return (l) => n(o(l));
}
function Zm(n, o) {
  return () => n(o);
}
function ax(n, o) {
  return (l) => n(o, l);
}
function ff(n) {
  return n !== void 0;
}
function ux(...n) {
  return () => {
    n.map(sx);
  };
}
function pi() {
}
function ca(n, o) {
  return o(n), n;
}
function cx(n, o) {
  return o(n);
}
function yt(...n) {
  return n;
}
function ot(n, o) {
  return n(io, o);
}
function We(n, o) {
  n(ua, o);
}
function df(n) {
  n(di);
}
function Ut(n) {
  return n(wg);
}
function Te(n, o) {
  return ot(n, ax(o, ua));
}
function fr(n, o) {
  const l = n(io, (s) => {
    l(), o(s);
  });
  return l;
}
function Jm(n) {
  let o, l;
  return (s) => (u) => {
    o = u, l && clearTimeout(l), l = setTimeout(() => {
      s(o);
    }, n);
  };
}
function xg(n, o) {
  return n === o;
}
function gt(n = xg) {
  let o;
  return (l) => (s) => {
    n(o, s) || (o = s, l(s));
  };
}
function Fe(n) {
  return (o) => (l) => {
    n(l) && o(l);
  };
}
function he(n) {
  return (o) => fl(o, n);
}
function lr(n) {
  return (o) => () => {
    o(n);
  };
}
function te(n, ...o) {
  const l = fx(...o);
  return (s, u) => {
    switch (s) {
      case di:
        df(n);
        return;
      case io:
        return ot(n, l(u));
    }
  };
}
function ur(n, o) {
  return (l) => (s) => {
    l(o = n(o, s));
  };
}
function ai(n) {
  return (o) => (l) => {
    n > 0 ? n-- : o(l);
  };
}
function Zr(n) {
  let o = null, l;
  return (s) => (u) => {
    o = u, !l && (l = setTimeout(() => {
      l = void 0, s(o);
    }, n));
  };
}
function $e(...n) {
  const o = new Array(n.length);
  let l = 0, s = null;
  const u = Math.pow(2, n.length) - 1;
  return n.forEach((c, d) => {
    const p = Math.pow(2, d);
    ot(c, (g) => {
      const h = l;
      l = l | p, o[d] = g, h !== u && l === u && s && (s(), s = null);
    });
  }), (c) => (d) => {
    const p = () => {
      c([d].concat(o));
    };
    l === u ? p() : s = p;
  };
}
function fx(...n) {
  return (o) => n.reduceRight(cx, o);
}
function dx(n) {
  let o, l;
  const s = () => o == null ? void 0 : o();
  return function(u, c) {
    switch (u) {
      case io:
        return c ? l === c ? void 0 : (s(), l = c, o = ot(n, c), o) : (s(), pi);
      case di:
        s(), l = null;
        return;
    }
  };
}
function se(n) {
  let o = n;
  const l = qe();
  return (s, u) => {
    switch (s) {
      case ua:
        o = u;
        break;
      case io: {
        u(o);
        break;
      }
      case wg:
        return o;
    }
    return l(s, u);
  };
}
function Zt(n, o) {
  return ca(se(o), (l) => Te(n, l));
}
function qe() {
  const n = [];
  return (o, l) => {
    switch (o) {
      case ua:
        n.slice().forEach((s) => {
          s(l);
        });
        return;
      case di:
        n.splice(0, n.length);
        return;
      case io:
        return n.push(l), () => {
          const s = n.indexOf(l);
          s > -1 && n.splice(s, 1);
        };
    }
  };
}
function kn(n) {
  return ca(qe(), (o) => Te(n, o));
}
function nt(n, o = [], { singleton: l } = { singleton: !0 }) {
  return {
    constructor: n,
    dependencies: o,
    id: px(),
    singleton: l
  };
}
const px = () => Symbol();
function mx(n) {
  const o = /* @__PURE__ */ new Map(), l = ({ constructor: s, dependencies: u, id: c, singleton: d }) => {
    if (d && o.has(c))
      return o.get(c);
    const p = s(u.map((g) => l(g)));
    return d && o.set(c, p), p;
  };
  return l(n);
}
function Dt(...n) {
  const o = qe(), l = new Array(n.length);
  let s = 0;
  const u = Math.pow(2, n.length) - 1;
  return n.forEach((c, d) => {
    const p = Math.pow(2, d);
    ot(c, (g) => {
      l[d] = g, s = s | p, s === u && We(o, l);
    });
  }), function(c, d) {
    switch (c) {
      case di: {
        df(o);
        return;
      }
      case io:
        return s === u && d(l), ot(o, d);
    }
  };
}
function Me(n, o = xg) {
  return te(n, gt(o));
}
function eh(...n) {
  return function(o, l) {
    switch (o) {
      case di:
        return;
      case io:
        return ux(...n.map((s) => ot(s, l)));
    }
  };
}
var hn = /* @__PURE__ */ ((n) => (n[n.DEBUG = 0] = "DEBUG", n[n.INFO = 1] = "INFO", n[n.WARN = 2] = "WARN", n[n.ERROR = 3] = "ERROR", n))(hn || {});
const hx = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, gx = () => typeof globalThis > "u" ? window : globalThis, lo = nt(
  () => {
    const n = se(
      3
      /* ERROR */
    );
    return {
      log: se((o, l, s = 1) => {
        var u;
        const c = (u = gx().VIRTUOSO_LOG_LEVEL) != null ? u : Ut(n);
        s >= c && console[hx[s]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          o,
          l
        );
      }),
      logLevel: n
    };
  },
  [],
  { singleton: !0 }
);
function dr(n, o, l) {
  return pf(n, o, l).callbackRef;
}
function pf(n, o, l) {
  const s = ae.useRef(null);
  let u = (d) => {
  };
  const c = ae.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((d) => {
    const p = () => {
      const g = d[0].target;
      g.offsetParent !== null && n(g);
    };
    l ? p() : requestAnimationFrame(p);
  }) : null, [n, l]);
  return u = (d) => {
    d && o ? (c == null || c.observe(d), s.current = d) : (s.current && (c == null || c.unobserve(s.current)), s.current = null);
  }, { callbackRef: u, ref: s };
}
function Sg(n, o, l, s, u, c, d, p, g) {
  const h = ae.useCallback(
    (v) => {
      const w = vx(v.children, o, p ? "offsetWidth" : "offsetHeight", u);
      let y = v.parentElement;
      for (; !y.dataset.virtuosoScroller; )
        y = y.parentElement;
      const x = y.lastElementChild.dataset.viewportType === "window";
      let I;
      x && (I = y.ownerDocument.defaultView);
      const O = d ? p ? d.scrollLeft : d.scrollTop : x ? p ? I.scrollX || I.document.documentElement.scrollLeft : I.scrollY || I.document.documentElement.scrollTop : p ? y.scrollLeft : y.scrollTop, T = d ? p ? d.scrollWidth : d.scrollHeight : x ? p ? I.document.documentElement.scrollWidth : I.document.documentElement.scrollHeight : p ? y.scrollWidth : y.scrollHeight, C = d ? p ? d.offsetWidth : d.offsetHeight : x ? p ? I.innerWidth : I.innerHeight : p ? y.offsetWidth : y.offsetHeight;
      s({
        scrollHeight: T,
        scrollTop: Math.max(O, 0),
        viewportHeight: C
      }), c == null || c(
        p ? th("column-gap", getComputedStyle(v).columnGap, u) : th("row-gap", getComputedStyle(v).rowGap, u)
      ), w !== null && n(w);
    },
    [n, o, u, c, d, s, p]
  );
  return pf(h, l, g);
}
function vx(n, o, l, s) {
  const u = n.length;
  if (u === 0)
    return null;
  const c = [];
  for (let d = 0; d < u; d++) {
    const p = n.item(d);
    if (p.dataset.index === void 0)
      continue;
    const g = parseInt(p.dataset.index), h = parseFloat(p.dataset.knownSize), v = o(p, l);
    if (v === 0 && s("Zero-sized element, this should not happen", { child: p }, hn.ERROR), v === h)
      continue;
    const w = c[c.length - 1];
    c.length === 0 || w.size !== v || w.endIndex !== g - 1 ? c.push({ endIndex: g, size: v, startIndex: g }) : c[c.length - 1].endIndex++;
  }
  return c;
}
function th(n, o, l) {
  return o !== "normal" && !(o != null && o.endsWith("px")) && l(`${n} was not resolved to pixel value correctly`, o, hn.WARN), o === "normal" ? 0 : parseInt(o ?? "0", 10);
}
function mf(n, o, l) {
  const s = ae.useRef(null), u = ae.useCallback(
    (g) => {
      if (!(g != null && g.offsetParent))
        return;
      const h = g.getBoundingClientRect(), v = h.width;
      let w, y;
      if (o) {
        const x = o.getBoundingClientRect(), I = h.top - x.top;
        y = x.height - Math.max(0, I), w = I + o.scrollTop;
      } else {
        const x = d.current.ownerDocument.defaultView;
        y = x.innerHeight - Math.max(0, h.top), w = h.top + x.scrollY;
      }
      s.current = {
        offsetTop: w,
        visibleHeight: y,
        visibleWidth: v
      }, n(s.current);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, o]
  ), { callbackRef: c, ref: d } = pf(u, !0, l), p = ae.useCallback(() => {
    u(d.current);
  }, [u, d]);
  return ae.useEffect(() => {
    var g;
    if (o) {
      o.addEventListener("scroll", p);
      const h = new ResizeObserver(() => {
        requestAnimationFrame(p);
      });
      return h.observe(o), () => {
        o.removeEventListener("scroll", p), h.unobserve(o);
      };
    } else {
      const h = (g = d.current) == null ? void 0 : g.ownerDocument.defaultView;
      return h == null || h.addEventListener("scroll", p), h == null || h.addEventListener("resize", p), () => {
        h == null || h.removeEventListener("scroll", p), h == null || h.removeEventListener("resize", p);
      };
    }
  }, [p, o, d]), c;
}
const ln = nt(
  () => {
    const n = qe(), o = qe(), l = se(0), s = qe(), u = se(0), c = qe(), d = qe(), p = se(0), g = se(0), h = se(0), v = se(0), w = qe(), y = qe(), x = se(!1), I = se(!1), O = se(!1);
    return Te(
      te(
        n,
        he(({ scrollTop: T }) => T)
      ),
      o
    ), Te(
      te(
        n,
        he(({ scrollHeight: T }) => T)
      ),
      d
    ), Te(o, u), {
      deviation: l,
      fixedFooterHeight: h,
      fixedHeaderHeight: g,
      footerHeight: v,
      headerHeight: p,
      horizontalDirection: I,
      scrollBy: y,
      // input
      scrollContainerState: n,
      scrollHeight: d,
      scrollingInProgress: x,
      // signals
      scrollTo: w,
      scrollTop: o,
      skipAnimationFrameInResizeObserver: O,
      smoothScrollTargetReached: s,
      // state
      statefulScrollTop: u,
      viewportHeight: c
    };
  },
  [],
  { singleton: !0 }
), dl = { lvl: 0 };
function kg(n, o) {
  const l = n.length;
  if (l === 0)
    return [];
  let { index: s, value: u } = o(n[0]);
  const c = [];
  for (let d = 1; d < l; d++) {
    const { index: p, value: g } = o(n[d]);
    c.push({ end: p - 1, start: s, value: u }), s = p, u = g;
  }
  return c.push({ end: 1 / 0, start: s, value: u }), c;
}
function at(n) {
  return n === dl;
}
function pl(n, o) {
  if (!at(n))
    return o === n.k ? n.v : o < n.k ? pl(n.l, o) : pl(n.r, o);
}
function Yn(n, o, l = "k") {
  if (at(n))
    return [-1 / 0, void 0];
  if (Number(n[l]) === o)
    return [n.k, n.v];
  if (Number(n[l]) < o) {
    const s = Yn(n.r, o, l);
    return s[0] === -1 / 0 ? [n.k, n.v] : s;
  }
  return Yn(n.l, o, l);
}
function Sn(n, o, l) {
  return at(n) ? Eg(o, l, 1) : o === n.k ? Mt(n, { k: o, v: l }) : o < n.k ? nh(Mt(n, { l: Sn(n.l, o, l) })) : nh(Mt(n, { r: Sn(n.r, o, l) }));
}
function ii() {
  return dl;
}
function fa(n, o, l) {
  if (at(n))
    return [];
  const s = Yn(n, o)[0];
  return yx(Uc(n, s, l));
}
function Wc(n, o) {
  if (at(n)) return dl;
  const { k: l, l: s, r: u } = n;
  if (o === l) {
    if (at(s))
      return u;
    if (at(u))
      return s;
    {
      const [c, d] = Cg(s);
      return Ys(Mt(n, { k: c, l: _g(s), v: d }));
    }
  } else return o < l ? Ys(Mt(n, { l: Wc(s, o) })) : Ys(Mt(n, { r: Wc(u, o) }));
}
function Eo(n) {
  return at(n) ? [] : [...Eo(n.l), { k: n.k, v: n.v }, ...Eo(n.r)];
}
function Uc(n, o, l) {
  if (at(n))
    return [];
  const { k: s, l: u, r: c, v: d } = n;
  let p = [];
  return s > o && (p = p.concat(Uc(u, o, l))), s >= o && s <= l && p.push({ k: s, v: d }), s <= l && (p = p.concat(Uc(c, o, l))), p;
}
function Ys(n) {
  const { l: o, lvl: l, r: s } = n;
  if (s.lvl >= l - 1 && o.lvl >= l - 1)
    return n;
  if (l > s.lvl + 1) {
    if (dc(o))
      return Tg(Mt(n, { lvl: l - 1 }));
    if (!at(o) && !at(o.r))
      return Mt(o.r, {
        l: Mt(o, { r: o.r.l }),
        lvl: l,
        r: Mt(n, {
          l: o.r.r,
          lvl: l - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (dc(n))
      return $c(Mt(n, { lvl: l - 1 }));
    if (!at(s) && !at(s.l)) {
      const u = s.l, c = dc(u) ? s.lvl - 1 : s.lvl;
      return Mt(u, {
        l: Mt(n, {
          lvl: l - 1,
          r: u.l
        }),
        lvl: u.lvl + 1,
        r: $c(Mt(s, { l: u.r, lvl: c }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function Mt(n, o) {
  return Eg(
    o.k !== void 0 ? o.k : n.k,
    o.v !== void 0 ? o.v : n.v,
    o.lvl !== void 0 ? o.lvl : n.lvl,
    o.l !== void 0 ? o.l : n.l,
    o.r !== void 0 ? o.r : n.r
  );
}
function _g(n) {
  return at(n.r) ? n.l : Ys(Mt(n, { r: _g(n.r) }));
}
function dc(n) {
  return at(n) || n.lvl > n.r.lvl;
}
function Cg(n) {
  return at(n.r) ? [n.k, n.v] : Cg(n.r);
}
function Eg(n, o, l, s = dl, u = dl) {
  return { k: n, l: s, lvl: l, r: u, v: o };
}
function nh(n) {
  return $c(Tg(n));
}
function Tg(n) {
  const { l: o } = n;
  return !at(o) && o.lvl === n.lvl ? Mt(o, { r: Mt(n, { l: o.r }) }) : n;
}
function $c(n) {
  const { lvl: o, r: l } = n;
  return !at(l) && !at(l.r) && l.lvl === o && l.r.lvl === o ? Mt(l, { l: Mt(n, { r: l.l }), lvl: o + 1 }) : n;
}
function yx(n) {
  return kg(n, ({ k: o, v: l }) => ({ index: o, value: l }));
}
function Ig(n, o) {
  return !!(n && n.startIndex === o.startIndex && n.endIndex === o.endIndex);
}
function ml(n, o) {
  return !!(n && n[0] === o[0] && n[1] === o[1]);
}
const hf = nt(
  () => ({ recalcInProgress: se(!1) }),
  [],
  { singleton: !0 }
);
function Rg(n, o, l) {
  return n[Xs(n, o, l)];
}
function Xs(n, o, l, s = 0) {
  let u = n.length - 1;
  for (; s <= u; ) {
    const c = Math.floor((s + u) / 2), d = n[c], p = l(d, o);
    if (p === 0)
      return c;
    if (p === -1) {
      if (u - s < 2)
        return c - 1;
      u = c - 1;
    } else {
      if (u === s)
        return c;
      s = c + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${n.join(",")}, searched for ${o}`);
}
function wx(n, o, l, s) {
  const u = Xs(n, o, s), c = Xs(n, l, s, u);
  return n.slice(u, c + 1);
}
function Kn(n, o) {
  return Math.round(n.getBoundingClientRect()[o]);
}
function da(n) {
  return !at(n.groupOffsetTree);
}
function gf({ index: n }, o) {
  return o === n ? 0 : o < n ? -1 : 1;
}
function xx() {
  return {
    groupIndices: [],
    groupOffsetTree: ii(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: ii()
  };
}
function Sx(n, o) {
  let l = at(n) ? 0 : 1 / 0;
  for (const s of o) {
    const { endIndex: u, size: c, startIndex: d } = s;
    if (l = Math.min(l, d), at(n)) {
      n = Sn(n, 0, c);
      continue;
    }
    const p = fa(n, d - 1, u + 1);
    if (p.some(Rx(s)))
      continue;
    let g = !1, h = !1;
    for (const { end: v, start: w, value: y } of p)
      g ? (u >= w || c === y) && (n = Wc(n, w)) : (h = y !== c, g = !0), v > u && u >= w && y !== c && (n = Sn(n, u + 1, y));
    h && (n = Sn(n, d, c));
  }
  return [n, l];
}
function kx(n) {
  return typeof n.groupIndex < "u";
}
function _x({ offset: n }, o) {
  return o === n ? 0 : o < n ? -1 : 1;
}
function hl(n, o, l) {
  if (o.length === 0)
    return 0;
  const { index: s, offset: u, size: c } = Rg(o, n, gf), d = n - s, p = c * d + (d - 1) * l + u;
  return p > 0 ? p + l : p;
}
function Og(n, o) {
  if (!da(o))
    return n;
  let l = 0;
  for (; o.groupIndices[l] <= n + l; )
    l++;
  return n + l;
}
function Pg(n, o, l) {
  if (kx(n))
    return o.groupIndices[n.groupIndex] + 1;
  {
    const s = n.index === "LAST" ? l : n.index;
    let u = Og(s, o);
    return u = Math.max(0, u, Math.min(l, u)), u;
  }
}
function Cx(n, o, l, s = 0) {
  return s > 0 && (o = Math.max(o, Rg(n, s, gf).offset)), kg(wx(n, o, l, _x), Ix);
}
function Ex(n, [o, l, s, u]) {
  o.length > 0 && s("received item sizes", o, hn.DEBUG);
  const c = n.sizeTree;
  let d = c, p = 0;
  if (l.length > 0 && at(c) && o.length === 2) {
    const y = o[0].size, x = o[1].size;
    d = l.reduce((I, O) => Sn(Sn(I, O, y), O + 1, x), d);
  } else
    [d, p] = Sx(d, o);
  if (d === c)
    return n;
  const { lastIndex: g, lastOffset: h, lastSize: v, offsetTree: w } = Vc(n.offsetTree, p, d, u);
  return {
    groupIndices: l,
    groupOffsetTree: l.reduce((y, x) => Sn(y, x, hl(x, w, u)), ii()),
    lastIndex: g,
    lastOffset: h,
    lastSize: v,
    offsetTree: w,
    sizeTree: d
  };
}
function Tx(n) {
  return Eo(n).map(({ k: o, v: l }, s, u) => {
    const c = u[s + 1];
    return { endIndex: c ? c.k - 1 : 1 / 0, size: l, startIndex: o };
  });
}
function rh(n, o) {
  let l = 0, s = 0;
  for (; l < n; )
    l += o[s + 1] - o[s] - 1, s++;
  return s - (l === n ? 0 : 1);
}
function Vc(n, o, l, s) {
  let u = n, c = 0, d = 0, p = 0, g = 0;
  if (o !== 0) {
    g = Xs(u, o - 1, gf), p = u[g].offset;
    const h = Yn(l, o - 1);
    c = h[0], d = h[1], u.length && u[g].size === Yn(l, o)[1] && (g -= 1), u = u.slice(0, g + 1);
  } else
    u = [];
  for (const { start: h, value: v } of fa(l, o, 1 / 0)) {
    const w = h - c, y = w * d + p + w * s;
    u.push({
      index: h,
      offset: y,
      size: v
    }), c = h, p = y, d = v;
  }
  return {
    lastIndex: c,
    lastOffset: p,
    lastSize: d,
    offsetTree: u
  };
}
function Ix(n) {
  return { index: n.index, value: n };
}
function Rx(n) {
  const { endIndex: o, size: l, startIndex: s } = n;
  return (u) => u.start === s && (u.end === o || u.end === 1 / 0) && u.value === l;
}
const Ox = {
  offsetHeight: "height",
  offsetWidth: "width"
}, mr = nt(
  ([{ log: n }, { recalcInProgress: o }]) => {
    const l = qe(), s = qe(), u = Zt(s, 0), c = qe(), d = qe(), p = se(0), g = se([]), h = se(void 0), v = se(void 0), w = se((D, N) => Kn(D, Ox[N])), y = se(void 0), x = se(0), I = xx(), O = Zt(
      te(l, $e(g, n, x), ur(Ex, I), gt()),
      I
    ), T = Zt(
      te(
        g,
        gt(),
        ur((D, N) => ({ current: N, prev: D.current }), {
          current: [],
          prev: []
        }),
        he(({ prev: D }) => D)
      ),
      []
    );
    Te(
      te(
        g,
        Fe((D) => D.length > 0),
        $e(O, x),
        he(([D, N, b]) => {
          const S = D.reduce((E, L, V) => Sn(E, L, hl(L, N.offsetTree, b) || V), ii());
          return {
            ...N,
            groupIndices: D,
            groupOffsetTree: S
          };
        })
      ),
      O
    ), Te(
      te(
        s,
        $e(O),
        Fe(([D, { lastIndex: N }]) => D < N),
        he(([D, { lastIndex: N, lastSize: b }]) => [
          {
            endIndex: N,
            size: b,
            startIndex: D
          }
        ])
      ),
      l
    ), Te(h, v);
    const C = Zt(
      te(
        h,
        he((D) => D === void 0)
      ),
      !0
    );
    Te(
      te(
        v,
        Fe((D) => D !== void 0 && at(Ut(O).sizeTree)),
        he((D) => [{ endIndex: 0, size: D, startIndex: 0 }])
      ),
      l
    );
    const R = kn(
      te(
        l,
        $e(O),
        ur(
          ({ sizes: D }, [N, b]) => ({
            changed: b !== D,
            sizes: b
          }),
          { changed: !1, sizes: I }
        ),
        he((D) => D.changed)
      )
    );
    ot(
      te(
        p,
        ur(
          (D, N) => ({ diff: D.prev - N, prev: N }),
          { diff: 0, prev: 0 }
        ),
        he((D) => D.diff)
      ),
      (D) => {
        const { groupIndices: N } = Ut(O);
        if (D > 0)
          We(o, !0), We(c, D + rh(D, N));
        else if (D < 0) {
          const b = Ut(T);
          b.length > 0 && (D -= rh(-D, b)), We(d, D);
        }
      }
    ), ot(te(p, $e(n)), ([D, N]) => {
      D < 0 && N(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: p },
        hn.ERROR
      );
    });
    const B = kn(c);
    Te(
      te(
        c,
        $e(O),
        he(([D, N]) => {
          const b = N.groupIndices.length > 0, S = [], E = N.lastSize;
          if (b) {
            const L = pl(N.sizeTree, 0);
            let V = 0, Q = 0;
            for (; V < D; ) {
              const K = N.groupIndices[Q], fe = N.groupIndices.length === Q + 1 ? 1 / 0 : N.groupIndices[Q + 1] - K - 1;
              S.push({
                endIndex: K,
                size: L,
                startIndex: K
              }), S.push({
                endIndex: K + 1 + fe - 1,
                size: E,
                startIndex: K + 1
              }), Q++, V += fe + 1;
            }
            const ie = Eo(N.sizeTree);
            return V !== D && ie.shift(), ie.reduce(
              (K, { k: fe, v: we }) => {
                let re = K.ranges;
                return K.prevSize !== 0 && (re = [
                  ...K.ranges,
                  {
                    endIndex: fe + D - 1,
                    size: K.prevSize,
                    startIndex: K.prevIndex
                  }
                ]), {
                  prevIndex: fe + D,
                  prevSize: we,
                  ranges: re
                };
              },
              {
                prevIndex: D,
                prevSize: 0,
                ranges: S
              }
            ).ranges;
          }
          return Eo(N.sizeTree).reduce(
            (L, { k: V, v: Q }) => ({
              prevIndex: V + D,
              prevSize: Q,
              ranges: [...L.ranges, { endIndex: V + D - 1, size: L.prevSize, startIndex: L.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: E,
              ranges: []
            }
          ).ranges;
        })
      ),
      l
    );
    const $ = kn(
      te(
        d,
        $e(O, x),
        he(([D, { offsetTree: N }, b]) => {
          const S = -D;
          return hl(S, N, b);
        })
      )
    );
    return Te(
      te(
        d,
        $e(O, x),
        he(([D, N, b]) => {
          if (N.groupIndices.length > 0) {
            if (at(N.sizeTree))
              return N;
            let S = ii();
            const E = Ut(T);
            let L = 0, V = 0, Q = 0;
            for (; L < -D; ) {
              Q = E[V];
              const ie = E[V + 1] - Q - 1;
              V++, L += ie + 1;
            }
            if (S = Eo(N.sizeTree).reduce((ie, { k: K, v: fe }) => Sn(ie, Math.max(0, K + D), fe), S), L !== -D) {
              const ie = pl(N.sizeTree, Q);
              S = Sn(S, 0, ie);
              const K = Yn(N.sizeTree, -D + 1)[1];
              S = Sn(S, 1, K);
            }
            return {
              ...N,
              sizeTree: S,
              ...Vc(N.offsetTree, 0, S, b)
            };
          } else {
            const S = Eo(N.sizeTree).reduce((E, { k: L, v: V }) => Sn(E, Math.max(0, L + D), V), ii());
            return {
              ...N,
              sizeTree: S,
              ...Vc(N.offsetTree, 0, S, b)
            };
          }
        })
      ),
      O
    ), {
      beforeUnshiftWith: B,
      // input
      data: y,
      defaultItemSize: v,
      firstItemIndex: p,
      fixedItemSize: h,
      gap: x,
      groupIndices: g,
      itemSize: w,
      listRefresh: R,
      shiftWith: d,
      shiftWithOffset: $,
      sizeRanges: l,
      // output
      sizes: O,
      statefulTotalCount: u,
      totalCount: s,
      trackItemSizes: C,
      unshiftWith: c
    };
  },
  yt(lo, hf),
  { singleton: !0 }
);
function Px(n) {
  return n.reduce(
    (o, l) => (o.groupIndices.push(o.totalCount), o.totalCount += l + 1, o),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Ag = nt(
  ([{ groupIndices: n, sizes: o, totalCount: l }, { headerHeight: s, scrollTop: u }]) => {
    const c = qe(), d = qe(), p = kn(te(c, he(Px)));
    return Te(
      te(
        p,
        he((g) => g.totalCount)
      ),
      l
    ), Te(
      te(
        p,
        he((g) => g.groupIndices)
      ),
      n
    ), Te(
      te(
        Dt(u, o, s),
        Fe(([g, h]) => da(h)),
        he(([g, h, v]) => Yn(h.groupOffsetTree, Math.max(g - v, 0), "v")[0]),
        gt(),
        he((g) => [g])
      ),
      d
    ), { groupCounts: c, topItemsIndexes: d };
  },
  yt(mr, ln)
), so = nt(
  ([{ log: n }]) => {
    const o = se(!1), l = kn(
      te(
        o,
        Fe((s) => s),
        gt()
      )
    );
    return ot(o, (s) => {
      s && Ut(n)("props updated", {}, hn.DEBUG);
    }), { didMount: l, propsReady: o };
  },
  yt(lo),
  { singleton: !0 }
), Ax = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Lg(n) {
  const o = typeof n == "number" ? { index: n } : n;
  return o.align || (o.align = "start"), (!o.behavior || !Ax) && (o.behavior = "auto"), o.offset || (o.offset = 0), o;
}
const Sl = nt(
  ([
    { gap: n, listRefresh: o, sizes: l, totalCount: s },
    {
      fixedFooterHeight: u,
      fixedHeaderHeight: c,
      footerHeight: d,
      headerHeight: p,
      scrollingInProgress: g,
      scrollTo: h,
      smoothScrollTargetReached: v,
      viewportHeight: w
    },
    { log: y }
  ]) => {
    const x = qe(), I = qe(), O = se(0);
    let T = null, C = null, R = null;
    function B() {
      T && (T(), T = null), R && (R(), R = null), C && (clearTimeout(C), C = null), We(g, !1);
    }
    return Te(
      te(
        x,
        $e(l, w, s, O, p, d, y),
        $e(n, c, u),
        he(
          ([
            [$, D, N, b, S, E, L, V],
            Q,
            ie,
            K
          ]) => {
            const fe = Lg($), { align: we, behavior: re, offset: U } = fe, Y = b - 1, _ = Pg(fe, D, Y);
            let z = hl(_, D.offsetTree, Q) + E;
            we === "end" ? (z += ie + Yn(D.sizeTree, _)[1] - N + K, _ === Y && (z += L)) : we === "center" ? z += (ie + Yn(D.sizeTree, _)[1] - N + K) / 2 : z -= S, U && (z += U);
            const G = (q) => {
              B(), q ? (V("retrying to scroll to", { location: $ }, hn.DEBUG), We(x, $)) : (We(I, !0), V("list did not change, scroll successful", {}, hn.DEBUG));
            };
            if (B(), re === "smooth") {
              let q = !1;
              R = ot(o, (de) => {
                q = q || de;
              }), T = fr(v, () => {
                G(q);
              });
            } else
              T = fr(te(o, Lx(150)), G);
            return C = setTimeout(() => {
              B();
            }, 1200), We(g, !0), V("scrolling from index to", { behavior: re, index: _, top: z }, hn.DEBUG), { behavior: re, top: z };
          }
        )
      ),
      h
    ), {
      scrollTargetReached: I,
      scrollToIndex: x,
      topListHeight: O
    };
  },
  yt(mr, ln, lo),
  { singleton: !0 }
);
function Lx(n) {
  return (o) => {
    const l = setTimeout(() => {
      o(!1);
    }, n);
    return (s) => {
      s && (o(!0), clearTimeout(l));
    };
  };
}
function vf(n, o) {
  n == 0 ? o() : requestAnimationFrame(() => {
    vf(n - 1, o);
  });
}
function yf(n, o) {
  const l = o - 1;
  return typeof n == "number" ? n : n.index === "LAST" ? l : n.index;
}
const kl = nt(
  ([{ defaultItemSize: n, listRefresh: o, sizes: l }, { scrollTop: s }, { scrollTargetReached: u, scrollToIndex: c }, { didMount: d }]) => {
    const p = se(!0), g = se(0), h = se(!0);
    return Te(
      te(
        d,
        $e(g),
        Fe(([v, w]) => !!w),
        lr(!1)
      ),
      p
    ), Te(
      te(
        d,
        $e(g),
        Fe(([v, w]) => !!w),
        lr(!1)
      ),
      h
    ), ot(
      te(
        Dt(o, d),
        $e(p, l, n, h),
        Fe(([[, v], w, { sizeTree: y }, x, I]) => v && (!at(y) || ff(x)) && !w && !I),
        $e(g)
      ),
      ([, v]) => {
        fr(u, () => {
          We(h, !0);
        }), vf(4, () => {
          fr(s, () => {
            We(p, !0);
          }), We(c, v);
        });
      }
    ), {
      initialItemFinalLocationReached: h,
      initialTopMostItemIndex: g,
      scrolledToInitialItem: p
    };
  },
  yt(mr, ln, Sl, so),
  { singleton: !0 }
);
function zg(n, o) {
  return Math.abs(n - o) < 1.01;
}
const gl = "up", sl = "down", zx = "none", Nx = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, bx = 0, _l = nt(([{ footerHeight: n, headerHeight: o, scrollBy: l, scrollContainerState: s, scrollTop: u, viewportHeight: c }]) => {
  const d = se(!1), p = se(!0), g = qe(), h = qe(), v = se(4), w = se(bx), y = Zt(
    te(
      eh(te(Me(u), ai(1), lr(!0)), te(Me(u), ai(1), lr(!1), Jm(100))),
      gt()
    ),
    !1
  ), x = Zt(
    te(eh(te(l, lr(!0)), te(l, lr(!1), Jm(200))), gt()),
    !1
  );
  Te(
    te(
      Dt(Me(u), Me(w)),
      he(([R, B]) => R <= B),
      gt()
    ),
    p
  ), Te(te(p, Zr(50)), h);
  const I = kn(
    te(
      Dt(s, Me(c), Me(o), Me(n), Me(v)),
      ur((R, [{ scrollHeight: B, scrollTop: $ }, D, N, b, S]) => {
        const E = $ + D - B > -S, L = {
          scrollHeight: B,
          scrollTop: $,
          viewportHeight: D
        };
        if (E) {
          let Q, ie;
          return $ > R.state.scrollTop ? (Q = "SCROLLED_DOWN", ie = R.state.scrollTop - $) : (Q = "SIZE_DECREASED", ie = R.state.scrollTop - $ || R.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: Q,
            scrollTopDelta: ie,
            state: L
          };
        }
        let V;
        return L.scrollHeight > R.state.scrollHeight ? V = "SIZE_INCREASED" : D < R.state.viewportHeight ? V = "VIEWPORT_HEIGHT_DECREASING" : $ < R.state.scrollTop ? V = "SCROLLING_UPWARDS" : V = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: V,
          state: L
        };
      }, Nx),
      gt((R, B) => R && R.atBottom === B.atBottom)
    )
  ), O = Zt(
    te(
      s,
      ur(
        (R, { scrollHeight: B, scrollTop: $, viewportHeight: D }) => {
          if (zg(R.scrollHeight, B))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: B,
              scrollTop: $
            };
          {
            const N = B - ($ + D) < 1;
            return R.scrollTop !== $ && N ? {
              changed: !0,
              jump: R.scrollTop - $,
              scrollHeight: B,
              scrollTop: $
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: B,
              scrollTop: $
            };
          }
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      Fe((R) => R.changed),
      he((R) => R.jump)
    ),
    0
  );
  Te(
    te(
      I,
      he((R) => R.atBottom)
    ),
    d
  ), Te(te(d, Zr(50)), g);
  const T = se(sl);
  Te(
    te(
      s,
      he(({ scrollTop: R }) => R),
      gt(),
      ur(
        (R, B) => Ut(x) ? { direction: R.direction, prevScrollTop: B } : { direction: B < R.prevScrollTop ? gl : sl, prevScrollTop: B },
        { direction: sl, prevScrollTop: 0 }
      ),
      he((R) => R.direction)
    ),
    T
  ), Te(te(s, Zr(50), lr(zx)), T);
  const C = se(0);
  return Te(
    te(
      y,
      Fe((R) => !R),
      lr(0)
    ),
    C
  ), Te(
    te(
      u,
      Zr(100),
      $e(y),
      Fe(([R, B]) => !!B),
      ur(([R, B], [$]) => [B, $], [0, 0]),
      he(([R, B]) => B - R)
    ),
    C
  ), {
    atBottomState: I,
    atBottomStateChange: g,
    atBottomThreshold: v,
    atTopStateChange: h,
    atTopThreshold: w,
    isAtBottom: d,
    isAtTop: p,
    isScrolling: y,
    lastJumpDueToItemResize: O,
    scrollDirection: T,
    scrollVelocity: C
  };
}, yt(ln)), Zs = "top", Js = "bottom", oh = "none";
function ih(n, o, l) {
  return typeof n == "number" ? l === gl && o === Zs || l === sl && o === Js ? n : 0 : l === gl ? o === Zs ? n.main : n.reverse : o === Js ? n.main : n.reverse;
}
function lh(n, o) {
  var l;
  return typeof n == "number" ? n : (l = n[o]) != null ? l : 0;
}
const wf = nt(
  ([{ deviation: n, fixedHeaderHeight: o, headerHeight: l, scrollTop: s, viewportHeight: u }]) => {
    const c = qe(), d = se(0), p = se(0), g = se(0), h = Zt(
      te(
        Dt(
          Me(s),
          Me(u),
          Me(l),
          Me(c, ml),
          Me(g),
          Me(d),
          Me(o),
          Me(n),
          Me(p)
        ),
        he(
          ([
            v,
            w,
            y,
            [x, I],
            O,
            T,
            C,
            R,
            B
          ]) => {
            const $ = v - R, D = T + C, N = Math.max(y - $, 0);
            let b = oh;
            const S = lh(B, Zs), E = lh(B, Js);
            return x -= R, x += y + C, I += y + C, I -= R, x > v + D - S && (b = gl), I < v - N + w + E && (b = sl), b !== oh ? [
              Math.max($ - y - ih(O, Zs, b) - S, 0),
              $ - N - C + w + ih(O, Js, b) + E
            ] : null;
          }
        ),
        Fe((v) => v != null),
        gt(ml)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: p,
      // input
      listBoundary: c,
      overscan: g,
      topListHeight: d,
      // output
      visibleRange: h
    };
  },
  yt(ln),
  { singleton: !0 }
);
function jx(n, o, l) {
  if (da(o)) {
    const s = Og(n, o);
    return [
      { index: Yn(o.groupOffsetTree, s)[0], offset: 0, size: 0 },
      { data: l == null ? void 0 : l[0], index: s, offset: 0, size: 0 }
    ];
  }
  return [{ data: l == null ? void 0 : l[0], index: n, offset: 0, size: 0 }];
}
const pc = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Ks(n, o, l, s, u, c) {
  const { lastIndex: d, lastOffset: p, lastSize: g } = u;
  let h = 0, v = 0;
  if (n.length > 0) {
    h = n[0].offset;
    const O = n[n.length - 1];
    v = O.offset + O.size;
  }
  const w = l - d, y = p + w * g + (w - 1) * s, x = h, I = y - v;
  return {
    bottom: v,
    firstItemIndex: c,
    items: sh(n, u, c),
    offsetBottom: I,
    offsetTop: h,
    top: x,
    topItems: sh(o, u, c),
    topListHeight: o.reduce((O, T) => T.size + O, 0),
    totalCount: l
  };
}
function Ng(n, o, l, s, u, c) {
  let d = 0;
  if (l.groupIndices.length > 0)
    for (const v of l.groupIndices) {
      if (v - d >= n)
        break;
      d++;
    }
  const p = n + d, g = yf(o, p), h = Array.from({ length: p }).map((v, w) => ({
    data: c[w + g],
    index: w + g,
    offset: 0,
    size: 0
  }));
  return Ks(h, [], p, u, l, s);
}
function sh(n, o, l) {
  if (n.length === 0)
    return [];
  if (!da(o))
    return n.map((h) => ({ ...h, index: h.index + l, originalIndex: h.index }));
  const s = n[0].index, u = n[n.length - 1].index, c = [], d = fa(o.groupOffsetTree, s, u);
  let p, g = 0;
  for (const h of n) {
    (!p || p.end < h.index) && (p = d.shift(), g = o.groupIndices.indexOf(p.start));
    let v;
    h.index === p.start ? v = {
      index: g,
      type: "group"
    } : v = {
      groupIndex: g,
      index: h.index - (g + 1) + l
    }, c.push({
      ...v,
      data: h.data,
      offset: h.offset,
      originalIndex: h.index,
      size: h.size
    });
  }
  return c;
}
const Ao = nt(
  ([
    { data: n, firstItemIndex: o, gap: l, sizes: s, totalCount: u },
    c,
    { listBoundary: d, topListHeight: p, visibleRange: g },
    { initialTopMostItemIndex: h, scrolledToInitialItem: v },
    { topListHeight: w },
    y,
    { didMount: x },
    { recalcInProgress: I }
  ]) => {
    const O = se([]), T = se(0), C = qe();
    Te(c.topItemsIndexes, O);
    const R = Zt(
      te(
        Dt(
          x,
          I,
          Me(g, ml),
          Me(u),
          Me(s),
          Me(h),
          v,
          Me(O),
          Me(o),
          Me(l),
          n
        ),
        Fe(([N, b, , S, , , , , , , E]) => {
          const L = E && E.length !== S;
          return N && !b && !L;
        }),
        he(
          ([
            ,
            ,
            [N, b],
            S,
            E,
            L,
            V,
            Q,
            ie,
            K,
            fe
          ]) => {
            const we = E, { offsetTree: re, sizeTree: U } = we, Y = Ut(T);
            if (S === 0)
              return { ...pc, totalCount: S };
            if (N === 0 && b === 0)
              return Y === 0 ? { ...pc, totalCount: S } : Ng(Y, L, E, ie, K, fe || []);
            if (at(U))
              return Y > 0 ? null : Ks(
                jx(yf(L, S), we, fe),
                [],
                S,
                K,
                we,
                ie
              );
            const _ = [];
            if (Q.length > 0) {
              const ke = Q[0], ge = Q[Q.length - 1];
              let Ee = 0;
              for (const F of fa(U, ke, ge)) {
                const oe = F.value, xe = Math.max(F.start, ke), pe = Math.min(F.end, ge);
                for (let Ie = xe; Ie <= pe; Ie++)
                  _.push({ data: fe == null ? void 0 : fe[Ie], index: Ie, offset: Ee, size: oe }), Ee += oe;
              }
            }
            if (!V)
              return Ks([], _, S, K, we, ie);
            const z = Q.length > 0 ? Q[Q.length - 1] + 1 : 0, G = Cx(re, N, b, z);
            if (G.length === 0)
              return null;
            const q = S - 1, de = ca([], (ke) => {
              for (const ge of G) {
                const Ee = ge.value;
                let F = Ee.offset, oe = ge.start;
                const xe = Ee.size;
                if (Ee.offset < N) {
                  oe += Math.floor((N - Ee.offset + K) / (xe + K));
                  const Ie = oe - ge.start;
                  F += Ie * xe + Ie * K;
                }
                oe < z && (F += (z - oe) * xe, oe = z);
                const pe = Math.min(ge.end, q);
                for (let Ie = oe; Ie <= pe && !(F >= b); Ie++)
                  ke.push({ data: fe == null ? void 0 : fe[Ie], index: Ie, offset: F, size: xe }), F += xe + K;
              }
            });
            return Ks(de, _, S, K, we, ie);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        Fe((N) => N !== null),
        gt()
      ),
      pc
    );
    Te(
      te(
        n,
        Fe(ff),
        he((N) => N == null ? void 0 : N.length)
      ),
      u
    ), Te(
      te(
        R,
        he((N) => N.topListHeight)
      ),
      w
    ), Te(w, p), Te(
      te(
        R,
        he((N) => [N.top, N.bottom])
      ),
      d
    ), Te(
      te(
        R,
        he((N) => N.items)
      ),
      C
    );
    const B = kn(
      te(
        R,
        Fe(({ items: N }) => N.length > 0),
        $e(u, n),
        Fe(([{ items: N }, b]) => N[N.length - 1].originalIndex === b - 1),
        he(([, N, b]) => [N - 1, b]),
        gt(ml),
        he(([N]) => N)
      )
    ), $ = kn(
      te(
        R,
        Zr(200),
        Fe(({ items: N, topItems: b }) => N.length > 0 && N[0].originalIndex === b.length),
        he(({ items: N }) => N[0].index),
        gt()
      )
    ), D = kn(
      te(
        R,
        Fe(({ items: N }) => N.length > 0),
        he(({ items: N }) => {
          let b = 0, S = N.length - 1;
          for (; N[b].type === "group" && b < S; )
            b++;
          for (; N[S].type === "group" && S > b; )
            S--;
          return {
            endIndex: N[S].index,
            startIndex: N[b].index
          };
        }),
        gt(Ig)
      )
    );
    return { endReached: B, initialItemCount: T, itemsRendered: C, listState: R, rangeChanged: D, startReached: $, topItemsIndexes: O, ...y };
  },
  yt(
    mr,
    Ag,
    wf,
    kl,
    Sl,
    _l,
    so,
    hf
  ),
  { singleton: !0 }
), bg = nt(
  ([{ fixedFooterHeight: n, fixedHeaderHeight: o, footerHeight: l, headerHeight: s }, { listState: u }]) => {
    const c = qe(), d = Zt(
      te(
        Dt(l, n, s, o, u),
        he(([p, g, h, v, w]) => p + g + h + v + w.offsetBottom + w.bottom)
      ),
      0
    );
    return Te(Me(d), c), { totalListHeight: d, totalListHeightChanged: c };
  },
  yt(ln, Ao),
  { singleton: !0 }
), Fx = nt(
  ([{ viewportHeight: n }, { totalListHeight: o }]) => {
    const l = se(!1), s = Zt(
      te(
        Dt(l, n, o),
        Fe(([u]) => u),
        he(([, u, c]) => Math.max(0, u - c)),
        Zr(0),
        gt()
      ),
      0
    );
    return { alignToBottom: l, paddingTopAddition: s };
  },
  yt(ln, bg),
  { singleton: !0 }
);
function ah(n) {
  return n ? n === "smooth" ? "smooth" : "auto" : !1;
}
const Mx = (n, o) => typeof n == "function" ? ah(n(o)) : o && ah(n), Dx = nt(
  ([
    { listRefresh: n, totalCount: o, fixedItemSize: l },
    { atBottomState: s, isAtBottom: u },
    { scrollToIndex: c },
    { scrolledToInitialItem: d },
    { didMount: p, propsReady: g },
    { log: h },
    { scrollingInProgress: v }
  ]) => {
    const w = se(!1), y = qe();
    let x = null;
    function I(T) {
      We(c, {
        align: "end",
        behavior: T,
        index: "LAST"
      });
    }
    ot(
      te(
        Dt(te(Me(o), ai(1)), p),
        $e(Me(w), u, d, v),
        he(([[T, C], R, B, $, D]) => {
          let N = C && $, b = "auto";
          return N && (b = Mx(R, B || D), N = N && !!b), { followOutputBehavior: b, shouldFollow: N, totalCount: T };
        }),
        Fe(({ shouldFollow: T }) => T)
      ),
      ({ followOutputBehavior: T, totalCount: C }) => {
        x && (x(), x = null), Ut(l) ? requestAnimationFrame(() => {
          Ut(h)("following output to ", { totalCount: C }, hn.DEBUG), I(T);
        }) : x = fr(n, () => {
          Ut(h)("following output to ", { totalCount: C }, hn.DEBUG), I(T), x = null;
        });
      }
    );
    function O(T) {
      const C = fr(s, (R) => {
        T && !R.atBottom && R.notAtBottomBecause === "SIZE_INCREASED" && !x && (Ut(h)("scrolling to bottom due to increased size", {}, hn.DEBUG), I("auto"));
      });
      setTimeout(C, 100);
    }
    return ot(
      te(
        Dt(Me(w), o, g),
        Fe(([T, , C]) => T && C),
        ur(
          ({ value: T }, [, C]) => ({ refreshed: T === C, value: C }),
          { refreshed: !1, value: 0 }
        ),
        Fe(({ refreshed: T }) => T),
        $e(w, o)
      ),
      ([, T]) => {
        Ut(d) && O(T !== !1);
      }
    ), ot(y, () => {
      O(Ut(w) !== !1);
    }), ot(Dt(Me(w), s), ([T, C]) => {
      T && !C.atBottom && C.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && I("auto");
    }), { autoscrollToBottom: y, followOutput: w };
  },
  yt(mr, _l, Sl, kl, so, lo, ln)
), Hx = nt(
  ([{ data: n, firstItemIndex: o, gap: l, sizes: s }, { initialTopMostItemIndex: u }, { initialItemCount: c, listState: d }, { didMount: p }]) => (Te(
    te(
      p,
      $e(c),
      Fe(([, g]) => g !== 0),
      $e(u, s, o, l, n),
      he(([[, g], h, v, w, y, x = []]) => Ng(g, h, v, w, y, x))
    ),
    d
  ), {}),
  yt(mr, kl, Ao, so),
  { singleton: !0 }
), Bx = nt(
  ([{ didMount: n }, { scrollTo: o }, { listState: l }]) => {
    const s = se(0);
    return ot(
      te(
        n,
        $e(s),
        Fe(([, u]) => u !== 0),
        he(([, u]) => ({ top: u }))
      ),
      (u) => {
        fr(
          te(
            l,
            ai(1),
            Fe((c) => c.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              We(o, u);
            });
          }
        );
      }
    ), {
      initialScrollTop: s
    };
  },
  yt(so, ln, Ao),
  { singleton: !0 }
), Wx = ({
  itemBottom: n,
  itemTop: o,
  locationParams: { align: l, behavior: s, ...u },
  viewportBottom: c,
  viewportTop: d
}) => o < d ? { ...u, align: l ?? "start", behavior: s } : n > c ? { ...u, align: l ?? "end", behavior: s } : null, Ux = nt(
  ([
    { gap: n, sizes: o, totalCount: l },
    { fixedFooterHeight: s, fixedHeaderHeight: u, headerHeight: c, scrollingInProgress: d, scrollTop: p, viewportHeight: g },
    { scrollToIndex: h }
  ]) => {
    const v = qe();
    return Te(
      te(
        v,
        $e(o, g, l, c, u, s, p),
        $e(n),
        he(([[w, y, x, I, O, T, C, R], B]) => {
          const { align: $, behavior: D, calculateViewLocation: N = Wx, done: b, ...S } = w, E = Pg(w, y, I - 1), L = hl(E, y.offsetTree, B) + O + T, V = L + Yn(y.sizeTree, E)[1], Q = R + T, ie = R + x - C, K = N({
            itemBottom: V,
            itemTop: L,
            locationParams: { align: $, behavior: D, ...S },
            viewportBottom: ie,
            viewportTop: Q
          });
          return K ? b && fr(
            te(
              d,
              Fe((fe) => !fe),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              ai(Ut(d) ? 1 : 2)
            ),
            b
          ) : b && b(), K;
        }),
        Fe((w) => w !== null)
      ),
      h
    ), {
      scrollIntoView: v
    };
  },
  yt(mr, ln, Sl, Ao, lo),
  { singleton: !0 }
), jg = nt(
  ([{ scrollVelocity: n }]) => {
    const o = se(!1), l = qe(), s = se(!1);
    return Te(
      te(
        n,
        $e(s, o, l),
        Fe(([u, c]) => !!c),
        he(([u, c, d, p]) => {
          const { enter: g, exit: h } = c;
          if (d) {
            if (h(u, p))
              return !1;
          } else if (g(u, p))
            return !0;
          return d;
        }),
        gt()
      ),
      o
    ), ot(
      te(Dt(o, n, l), $e(s)),
      ([[u, c, d], p]) => {
        u && p && p.change && p.change(c, d);
      }
    ), { isSeeking: o, scrollSeekConfiguration: s, scrollSeekRangeChanged: l, scrollVelocity: n };
  },
  yt(_l),
  { singleton: !0 }
), xf = nt(([{ scrollContainerState: n, scrollTo: o }]) => {
  const l = qe(), s = qe(), u = qe(), c = se(!1), d = se(void 0);
  return Te(
    te(
      Dt(l, s),
      he(([{ scrollHeight: p, scrollTop: g, viewportHeight: h }, { offsetTop: v }]) => ({
        scrollHeight: p,
        scrollTop: Math.max(0, g - v),
        viewportHeight: h
      }))
    ),
    n
  ), Te(
    te(
      o,
      $e(s),
      he(([p, { offsetTop: g }]) => ({
        ...p,
        top: p.top + g
      }))
    ),
    u
  ), {
    customScrollParent: d,
    // config
    useWindowScroll: c,
    // input
    windowScrollContainerState: l,
    // signals
    windowScrollTo: u,
    windowViewportRect: s
  };
}, yt(ln)), $x = nt(
  ([
    { sizeRanges: n, sizes: o },
    { headerHeight: l, scrollTop: s },
    { initialTopMostItemIndex: u },
    { didMount: c },
    { useWindowScroll: d, windowScrollContainerState: p, windowViewportRect: g }
  ]) => {
    const h = qe(), v = se(void 0), w = se(null), y = se(null);
    return Te(p, w), Te(g, y), ot(
      te(
        h,
        $e(o, s, d, w, y, l)
      ),
      ([x, I, O, T, C, R, B]) => {
        const $ = Tx(I.sizeTree);
        T && C !== null && R !== null && (O = C.scrollTop - R.offsetTop), O -= B, x({ ranges: $, scrollTop: O });
      }
    ), Te(te(v, Fe(ff), he(Vx)), u), Te(
      te(
        c,
        $e(v),
        Fe(([, x]) => x !== void 0),
        gt(),
        he(([, x]) => x.ranges)
      ),
      n
    ), {
      getState: h,
      restoreStateFrom: v
    };
  },
  yt(mr, ln, kl, so, xf)
);
function Vx(n) {
  return { align: "start", index: 0, offset: n.scrollTop };
}
const Yx = nt(([{ topItemsIndexes: n }]) => {
  const o = se(0);
  return Te(
    te(
      o,
      Fe((l) => l >= 0),
      he((l) => Array.from({ length: l }).map((s, u) => u))
    ),
    n
  ), { topItemCount: o };
}, yt(Ao));
function Fg(n) {
  let o = !1, l;
  return () => (o || (o = !0, l = n()), l);
}
const Kx = Fg(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Qx = nt(
  ([
    { deviation: n, scrollBy: o, scrollingInProgress: l, scrollTop: s },
    { isAtBottom: u, isScrolling: c, lastJumpDueToItemResize: d, scrollDirection: p },
    { listState: g },
    { beforeUnshiftWith: h, gap: v, shiftWithOffset: w, sizes: y },
    { log: x },
    { recalcInProgress: I }
  ]) => {
    const O = kn(
      te(
        g,
        $e(d),
        ur(
          ([, C, R, B], [{ bottom: $, items: D, offsetBottom: N, totalCount: b }, S]) => {
            const E = $ + N;
            let L = 0;
            return R === b && C.length > 0 && D.length > 0 && (D[0].originalIndex === 0 && C[0].originalIndex === 0 || (L = E - B, L !== 0 && (L += S))), [L, D, b, E];
          },
          [0, [], 0, 0]
        ),
        Fe(([C]) => C !== 0),
        $e(s, p, l, u, x, I),
        Fe(([, C, R, B, , , $]) => !$ && !B && C !== 0 && R === gl),
        he(([[C], , , , , R]) => (R("Upward scrolling compensation", { amount: C }, hn.DEBUG), C))
      )
    );
    function T(C) {
      C > 0 ? (We(o, { behavior: "auto", top: -C }), We(n, 0)) : (We(n, 0), We(o, { behavior: "auto", top: -C }));
    }
    return ot(te(O, $e(n, c)), ([C, R, B]) => {
      B && Kx() ? We(n, R - C) : T(-C);
    }), ot(
      te(
        Dt(Zt(c, !1), n, I),
        Fe(([C, R, B]) => !C && !B && R !== 0),
        he(([C, R]) => R),
        Zr(1)
      ),
      T
    ), Te(
      te(
        w,
        he((C) => ({ top: -C }))
      ),
      o
    ), ot(
      te(
        h,
        $e(y, v),
        he(([C, { groupIndices: R, lastSize: B, sizeTree: $ }, D]) => {
          function N(b) {
            return b * (B + D);
          }
          if (R.length === 0)
            return N(C);
          {
            let b = 0;
            const S = pl($, 0);
            let E = 0, L = 0;
            for (; E < C; ) {
              E++, b += S;
              let V = R.length === L + 1 ? 1 / 0 : R[L + 1] - R[L] - 1;
              E + V > C && (b -= S, V = C - E + 1), E += V, b += N(V), L++;
            }
            return b;
          }
        })
      ),
      (C) => {
        We(n, C), requestAnimationFrame(() => {
          We(o, { top: C }), requestAnimationFrame(() => {
            We(n, 0), We(I, !1);
          });
        });
      }
    ), { deviation: n };
  },
  yt(ln, _l, Ao, mr, lo, hf)
), Gx = nt(
  ([
    n,
    o,
    l,
    s,
    u,
    c,
    d,
    p,
    g,
    h
  ]) => ({
    ...n,
    ...o,
    ...l,
    ...s,
    ...u,
    ...c,
    ...d,
    ...p,
    ...g,
    ...h
  }),
  yt(
    wf,
    Hx,
    so,
    jg,
    bg,
    Bx,
    Fx,
    xf,
    Ux,
    lo
  )
), Mg = nt(
  ([
    {
      data: n,
      defaultItemSize: o,
      firstItemIndex: l,
      fixedItemSize: s,
      gap: u,
      groupIndices: c,
      itemSize: d,
      sizeRanges: p,
      sizes: g,
      statefulTotalCount: h,
      totalCount: v,
      trackItemSizes: w
    },
    { initialItemFinalLocationReached: y, initialTopMostItemIndex: x, scrolledToInitialItem: I },
    O,
    T,
    C,
    { listState: R, topItemsIndexes: B, ...$ },
    { scrollToIndex: D },
    N,
    { topItemCount: b },
    { groupCounts: S },
    E
  ]) => (Te($.rangeChanged, E.scrollSeekRangeChanged), Te(
    te(
      E.windowViewportRect,
      he((L) => L.visibleHeight)
    ),
    O.viewportHeight
  ), {
    data: n,
    defaultItemHeight: o,
    firstItemIndex: l,
    fixedItemHeight: s,
    gap: u,
    groupCounts: S,
    initialItemFinalLocationReached: y,
    initialTopMostItemIndex: x,
    scrolledToInitialItem: I,
    sizeRanges: p,
    topItemCount: b,
    topItemsIndexes: B,
    // input
    totalCount: v,
    ...C,
    groupIndices: c,
    itemSize: d,
    listState: R,
    scrollToIndex: D,
    // output
    statefulTotalCount: h,
    trackItemSizes: w,
    // exported from stateFlagsSystem
    ...$,
    // the bag of IO from featureGroup1System
    ...E,
    ...O,
    sizes: g,
    ...T
  }),
  yt(
    mr,
    kl,
    ln,
    $x,
    Dx,
    Ao,
    Sl,
    Qx,
    Yx,
    Ag,
    Gx
  )
);
function qx(n, o) {
  const l = {}, s = {};
  let u = 0;
  const c = n.length;
  for (; u < c; )
    s[n[u]] = 1, u += 1;
  for (const d in o)
    Object.hasOwn(s, d) || (l[d] = o[d]);
  return l;
}
const Hs = typeof document < "u" ? ae.useLayoutEffect : ae.useEffect;
function Sf(n, o, l) {
  const s = Object.keys(o.required || {}), u = Object.keys(o.optional || {}), c = Object.keys(o.methods || {}), d = Object.keys(o.events || {}), p = ae.createContext({});
  function g(T, C) {
    T.propsReady && We(T.propsReady, !1);
    for (const R of s) {
      const B = T[o.required[R]];
      We(B, C[R]);
    }
    for (const R of u)
      if (R in C) {
        const B = T[o.optional[R]];
        We(B, C[R]);
      }
    T.propsReady && We(T.propsReady, !0);
  }
  function h(T) {
    return c.reduce((C, R) => (C[R] = (B) => {
      const $ = T[o.methods[R]];
      We($, B);
    }, C), {});
  }
  function v(T) {
    return d.reduce((C, R) => (C[R] = dx(T[o.events[R]]), C), {});
  }
  const w = ae.forwardRef((T, C) => {
    const { children: R, ...B } = T, [$] = ae.useState(() => ca(mx(n), (b) => {
      g(b, B);
    })), [D] = ae.useState(Zm(v, $));
    Hs(() => {
      for (const b of d)
        b in B && ot(D[b], B[b]);
      return () => {
        Object.values(D).map(df);
      };
    }, [B, D, $]), Hs(() => {
      g($, B);
    }), ae.useImperativeHandle(C, Xm(h($)));
    const N = l;
    return /* @__PURE__ */ M.jsx(p.Provider, { value: $, children: l ? /* @__PURE__ */ M.jsx(N, { ...qx([...s, ...u, ...d], B), children: R }) : R });
  }), y = (T) => {
    const C = ae.useContext(p);
    return ae.useCallback(
      (R) => {
        We(C[T], R);
      },
      [C, T]
    );
  }, x = (T) => {
    const C = ae.useContext(p)[T], R = ae.useCallback(
      (B) => ot(C, B),
      [C]
    );
    return ae.useSyncExternalStore(
      R,
      () => Ut(C),
      () => Ut(C)
    );
  }, I = (T) => {
    const C = ae.useContext(p)[T], [R, B] = ae.useState(Zm(Ut, C));
    return Hs(
      () => ot(C, ($) => {
        $ !== R && B(Xm($));
      }),
      [C, R]
    ), R;
  }, O = ae.version.startsWith("18") ? x : I;
  return {
    Component: w,
    useEmitter: (T, C) => {
      const R = ae.useContext(p)[T];
      Hs(() => ot(R, C), [C, R]);
    },
    useEmitterValue: O,
    usePublisher: y
  };
}
const pa = ae.createContext(void 0), Dg = ae.createContext(void 0), Hg = typeof document < "u" ? ae.useLayoutEffect : ae.useEffect;
function mc(n) {
  return "self" in n;
}
function Xx(n) {
  return "body" in n;
}
function Bg(n, o, l, s = pi, u, c) {
  const d = ae.useRef(null), p = ae.useRef(null), g = ae.useRef(null), h = ae.useCallback(
    (y) => {
      let x, I, O;
      const T = y.target;
      if (Xx(T) || mc(T)) {
        const R = mc(T) ? T : T.defaultView;
        O = c ? R.scrollX : R.scrollY, x = c ? R.document.documentElement.scrollWidth : R.document.documentElement.scrollHeight, I = c ? R.innerWidth : R.innerHeight;
      } else
        O = c ? T.scrollLeft : T.scrollTop, x = c ? T.scrollWidth : T.scrollHeight, I = c ? T.offsetWidth : T.offsetHeight;
      const C = () => {
        n({
          scrollHeight: x,
          scrollTop: Math.max(O, 0),
          viewportHeight: I
        });
      };
      y.suppressFlushSync ? C() : lx.flushSync(C), p.current !== null && (O === p.current || O <= 0 || O === x - I) && (p.current = null, o(!0), g.current && (clearTimeout(g.current), g.current = null));
    },
    [n, o, c]
  );
  ae.useEffect(() => {
    const y = u || d.current;
    return s(u || d.current), h({ suppressFlushSync: !0, target: y }), y.addEventListener("scroll", h, { passive: !0 }), () => {
      s(null), y.removeEventListener("scroll", h);
    };
  }, [d, h, l, s, u]);
  function v(y) {
    const x = d.current;
    if (!x || (c ? "offsetWidth" in x && x.offsetWidth === 0 : "offsetHeight" in x && x.offsetHeight === 0))
      return;
    const I = y.behavior === "smooth";
    let O, T, C;
    mc(x) ? (T = Math.max(
      Kn(x.document.documentElement, c ? "width" : "height"),
      c ? x.document.documentElement.scrollWidth : x.document.documentElement.scrollHeight
    ), O = c ? x.innerWidth : x.innerHeight, C = c ? window.scrollX : window.scrollY) : (T = x[c ? "scrollWidth" : "scrollHeight"], O = Kn(x, c ? "width" : "height"), C = x[c ? "scrollLeft" : "scrollTop"]);
    const R = T - O;
    if (y.top = Math.ceil(Math.max(Math.min(R, y.top), 0)), zg(O, T) || y.top === C) {
      n({ scrollHeight: T, scrollTop: C, viewportHeight: O }), I && o(!0);
      return;
    }
    I ? (p.current = y.top, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
      g.current = null, p.current = null, o(!0);
    }, 1e3)) : p.current = null, c && (y = { behavior: y.behavior, left: y.top }), x.scrollTo(y);
  }
  function w(y) {
    c && (y = { behavior: y.behavior, left: y.top }), d.current.scrollBy(y);
  }
  return { scrollByCallback: w, scrollerRef: d, scrollToCallback: v };
}
const hc = "-webkit-sticky", uh = "sticky", kf = Fg(() => {
  if (typeof document > "u")
    return uh;
  const n = document.createElement("div");
  return n.style.position = hc, n.style.position === hc ? hc : uh;
});
function _f(n) {
  return n;
}
const Zx = /* @__PURE__ */ nt(() => {
  const n = se((g) => `Item ${g}`), o = se(null), l = se((g) => `Group ${g}`), s = se({}), u = se(_f), c = se("div"), d = se(pi), p = (g, h = null) => Zt(
    te(
      s,
      he((v) => v[g]),
      gt()
    ),
    h
  );
  return {
    components: s,
    computeItemKey: u,
    context: o,
    EmptyPlaceholder: p("EmptyPlaceholder"),
    FooterComponent: p("Footer"),
    GroupComponent: p("Group", "div"),
    groupContent: l,
    HeaderComponent: p("Header"),
    HeaderFooterTag: c,
    ItemComponent: p("Item", "div"),
    itemContent: n,
    ListComponent: p("List", "div"),
    ScrollerComponent: p("Scroller", "div"),
    scrollerRef: d,
    ScrollSeekPlaceholder: p("ScrollSeekPlaceholder"),
    TopItemListComponent: p("TopItemList")
  };
}), Jx = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(Mg, Zx)
), eS = ({ height: n }) => /* @__PURE__ */ M.jsx("div", { style: { height: n } }), tS = { overflowAnchor: "none", position: kf(), zIndex: 1 }, Wg = { overflowAnchor: "none" }, nS = { ...Wg, display: "inline-block", height: "100%" }, ch = /* @__PURE__ */ ae.memo(function({ showTopList: n = !1 }) {
  const o = De("listState"), l = Nn("sizeRanges"), s = De("useWindowScroll"), u = De("customScrollParent"), c = Nn("windowScrollContainerState"), d = Nn("scrollContainerState"), p = u || s ? c : d, g = De("itemContent"), h = De("context"), v = De("groupContent"), w = De("trackItemSizes"), y = De("itemSize"), x = De("log"), I = Nn("gap"), O = De("horizontalDirection"), { callbackRef: T } = Sg(
    l,
    y,
    w,
    n ? pi : p,
    x,
    I,
    u,
    O,
    De("skipAnimationFrameInResizeObserver")
  ), [C, R] = ae.useState(0);
  Tf("deviation", (K) => {
    C !== K && R(K);
  });
  const B = De("EmptyPlaceholder"), $ = De("ScrollSeekPlaceholder") || eS, D = De("ListComponent"), N = De("ItemComponent"), b = De("GroupComponent"), S = De("computeItemKey"), E = De("isSeeking"), L = De("groupIndices").length > 0, V = De("alignToBottom"), Q = De("initialItemFinalLocationReached"), ie = n ? {} : {
    boxSizing: "border-box",
    ...O ? {
      display: "inline-block",
      height: "100%",
      marginLeft: C !== 0 ? C : V ? "auto" : 0,
      paddingLeft: o.offsetTop,
      paddingRight: o.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: C !== 0 ? C : V ? "auto" : 0,
      paddingBottom: o.offsetBottom,
      paddingTop: o.offsetTop
    },
    ...Q ? {} : { visibility: "hidden" }
  };
  return !n && o.totalCount === 0 && B ? /* @__PURE__ */ M.jsx(B, { ...dt(B, h) }) : /* @__PURE__ */ M.jsx(
    D,
    {
      ...dt(D, h),
      "data-testid": n ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: T,
      style: ie,
      children: (n ? o.topItems : o.items).map((K) => {
        const fe = K.originalIndex, we = S(fe + o.firstItemIndex, K.data, h);
        return E ? /* @__PURE__ */ ee.createElement(
          $,
          {
            ...dt($, h),
            height: K.size,
            index: K.index,
            key: we,
            type: K.type || "item",
            ...K.type === "group" ? {} : { groupIndex: K.groupIndex }
          }
        ) : K.type === "group" ? /* @__PURE__ */ ee.createElement(
          b,
          {
            ...dt(b, h),
            "data-index": fe,
            "data-item-index": K.index,
            "data-known-size": K.size,
            key: we,
            style: tS
          },
          v(K.index, h)
        ) : /* @__PURE__ */ ee.createElement(
          N,
          {
            ...dt(N, h),
            ...Ug(N, K.data),
            "data-index": fe,
            "data-item-group-index": K.groupIndex,
            "data-item-index": K.index,
            "data-known-size": K.size,
            key: we,
            style: O ? nS : Wg
          },
          L ? g(K.index, K.groupIndex, K.data, h) : g(K.index, K.data, h)
        );
      })
    }
  );
}), rS = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, oS = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, mi = (n) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...n ? { display: "flex", flexDirection: "column" } : {}
}), iS = {
  position: kf(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function dt(n, o) {
  if (typeof n != "string")
    return { context: o };
}
function Ug(n, o) {
  return { item: typeof n == "string" ? void 0 : o };
}
const lS = /* @__PURE__ */ ae.memo(function() {
  const n = De("HeaderComponent"), o = Nn("headerHeight"), l = De("HeaderFooterTag"), s = dr(
    ae.useMemo(
      () => (c) => {
        o(Kn(c, "height"));
      },
      [o]
    ),
    !0,
    De("skipAnimationFrameInResizeObserver")
  ), u = De("context");
  return n ? /* @__PURE__ */ M.jsx(l, { ref: s, children: /* @__PURE__ */ M.jsx(n, { ...dt(n, u) }) }) : null;
}), sS = /* @__PURE__ */ ae.memo(function() {
  const n = De("FooterComponent"), o = Nn("footerHeight"), l = De("HeaderFooterTag"), s = dr(
    ae.useMemo(
      () => (c) => {
        o(Kn(c, "height"));
      },
      [o]
    ),
    !0,
    De("skipAnimationFrameInResizeObserver")
  ), u = De("context");
  return n ? /* @__PURE__ */ M.jsx(l, { ref: s, children: /* @__PURE__ */ M.jsx(n, { ...dt(n, u) }) }) : null;
});
function Cf({ useEmitter: n, useEmitterValue: o, usePublisher: l }) {
  return ae.memo(function({ children: s, style: u, ...c }) {
    const d = l("scrollContainerState"), p = o("ScrollerComponent"), g = l("smoothScrollTargetReached"), h = o("scrollerRef"), v = o("context"), w = o("horizontalDirection") || !1, { scrollByCallback: y, scrollerRef: x, scrollToCallback: I } = Bg(
      d,
      g,
      p,
      h,
      void 0,
      w
    );
    return n("scrollTo", I), n("scrollBy", y), /* @__PURE__ */ M.jsx(
      p,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: x,
        style: { ...w ? oS : rS, ...u },
        tabIndex: 0,
        ...c,
        ...dt(p, v),
        children: s
      }
    );
  });
}
function Ef({ useEmitter: n, useEmitterValue: o, usePublisher: l }) {
  return ae.memo(function({ children: s, style: u, ...c }) {
    const d = l("windowScrollContainerState"), p = o("ScrollerComponent"), g = l("smoothScrollTargetReached"), h = o("totalListHeight"), v = o("deviation"), w = o("customScrollParent"), y = o("context"), x = ae.useRef(null), I = o("scrollerRef"), { scrollByCallback: O, scrollerRef: T, scrollToCallback: C } = Bg(
      d,
      g,
      p,
      I,
      w
    );
    return Hg(() => {
      var R;
      return T.current = w || ((R = x.current) == null ? void 0 : R.ownerDocument.defaultView), () => {
        T.current = null;
      };
    }, [T, w]), n("windowScrollTo", C), n("scrollBy", O), /* @__PURE__ */ M.jsx(
      p,
      {
        ref: x,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...u, ...h !== 0 ? { height: h + v } : {} },
        ...c,
        ...dt(p, y),
        children: s
      }
    );
  });
}
const aS = ({ children: n }) => {
  const o = ae.useContext(pa), l = Nn("viewportHeight"), s = Nn("fixedItemHeight"), u = De("alignToBottom"), c = De("horizontalDirection"), d = ae.useMemo(
    () => fl(l, (g) => Kn(g, c ? "width" : "height")),
    [l, c]
  ), p = dr(d, !0, De("skipAnimationFrameInResizeObserver"));
  return ae.useEffect(() => {
    o && (l(o.viewportHeight), s(o.itemHeight));
  }, [o, l, s]), /* @__PURE__ */ M.jsx("div", { "data-viewport-type": "element", ref: p, style: mi(u), children: n });
}, uS = ({ children: n }) => {
  const o = ae.useContext(pa), l = Nn("windowViewportRect"), s = Nn("fixedItemHeight"), u = De("customScrollParent"), c = mf(
    l,
    u,
    De("skipAnimationFrameInResizeObserver")
  ), d = De("alignToBottom");
  return ae.useEffect(() => {
    o && (s(o.itemHeight), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: 100 }));
  }, [o, l, s]), /* @__PURE__ */ M.jsx("div", { "data-viewport-type": "window", ref: c, style: mi(d), children: n });
}, cS = ({ children: n }) => {
  const o = De("TopItemListComponent") || "div", l = De("headerHeight"), s = { ...iS, marginTop: `${l}px` }, u = De("context");
  return /* @__PURE__ */ M.jsx(o, { style: s, ...dt(o, u), children: n });
}, fS = /* @__PURE__ */ ae.memo(function(n) {
  const o = De("useWindowScroll"), l = De("topItemsIndexes").length > 0, s = De("customScrollParent"), u = De("context"), c = s || o ? mS : pS, d = s || o ? uS : aS;
  return /* @__PURE__ */ M.jsxs(c, { ...n, ...dt(c, u), children: [
    l && /* @__PURE__ */ M.jsx(cS, { children: /* @__PURE__ */ M.jsx(ch, { showTopList: !0 }) }),
    /* @__PURE__ */ M.jsxs(d, { children: [
      /* @__PURE__ */ M.jsx(lS, {}),
      /* @__PURE__ */ M.jsx(ch, {}),
      /* @__PURE__ */ M.jsx(sS, {})
    ] })
  ] });
}), {
  Component: dS,
  useEmitter: Tf,
  useEmitterValue: De,
  usePublisher: Nn
} = /* @__PURE__ */ Sf(
  Jx,
  {
    required: {},
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      itemContent: "itemContent",
      groupContent: "groupContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      totalCount: "totalCount",
      groupCounts: "groupCounts",
      topItemCount: "topItemCount",
      firstItemIndex: "firstItemIndex",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "HeaderFooterTag",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      horizontalDirection: "horizontalDirection",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  fS
), pS = /* @__PURE__ */ Cf({ useEmitter: Tf, useEmitterValue: De, usePublisher: Nn }), mS = /* @__PURE__ */ Ef({ useEmitter: Tf, useEmitterValue: De, usePublisher: Nn }), hS = dS, gS = /* @__PURE__ */ nt(() => {
  const n = se((h) => /* @__PURE__ */ M.jsxs("td", { children: [
    "Item $",
    h
  ] })), o = se(null), l = se((h) => /* @__PURE__ */ M.jsxs("td", { colSpan: 1e3, children: [
    "Group ",
    h
  ] })), s = se(null), u = se(null), c = se({}), d = se(_f), p = se(pi), g = (h, v = null) => Zt(
    te(
      c,
      he((w) => w[h]),
      gt()
    ),
    v
  );
  return {
    components: c,
    computeItemKey: d,
    context: o,
    EmptyPlaceholder: g("EmptyPlaceholder"),
    FillerRow: g("FillerRow"),
    fixedFooterContent: u,
    fixedHeaderContent: s,
    itemContent: n,
    groupContent: l,
    ScrollerComponent: g("Scroller", "div"),
    scrollerRef: p,
    ScrollSeekPlaceholder: g("ScrollSeekPlaceholder"),
    TableBodyComponent: g("TableBody", "tbody"),
    TableComponent: g("Table", "table"),
    TableFooterComponent: g("TableFoot", "tfoot"),
    TableHeadComponent: g("TableHead", "thead"),
    TableRowComponent: g("TableRow", "tr"),
    GroupComponent: g("Group", "tr")
  };
}), vS = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(Mg, gS)
), yS = ({ height: n }) => /* @__PURE__ */ M.jsx("tr", { children: /* @__PURE__ */ M.jsx("td", { style: { height: n } }) }), wS = ({ height: n }) => /* @__PURE__ */ M.jsx("tr", { children: /* @__PURE__ */ M.jsx("td", { style: { border: 0, height: n, padding: 0 } }) }), xS = { overflowAnchor: "none" }, fh = { position: kf(), zIndex: 2, overflowAnchor: "none" }, dh = /* @__PURE__ */ ae.memo(function({ showTopList: n = !1 }) {
  const o = He("listState"), l = He("computeItemKey"), s = He("firstItemIndex"), u = He("context"), c = He("isSeeking"), d = He("fixedHeaderHeight"), p = He("groupIndices").length > 0, g = He("itemContent"), h = He("groupContent"), v = He("ScrollSeekPlaceholder") || yS, w = He("GroupComponent"), y = He("TableRowComponent"), x = (n ? o.topItems : []).reduce((O, T, C) => (C === 0 ? O.push(T.size) : O.push(O[C - 1] + T.size), O), []), I = (n ? o.topItems : o.items).map((O) => {
    const T = O.originalIndex, C = l(T + s, O.data, u), R = n ? T === 0 ? 0 : x[T - 1] : 0;
    return c ? /* @__PURE__ */ ee.createElement(
      v,
      {
        ...dt(v, u),
        height: O.size,
        index: O.index,
        key: C,
        type: O.type || "item"
      }
    ) : O.type === "group" ? /* @__PURE__ */ ee.createElement(
      w,
      {
        ...dt(w, u),
        "data-index": T,
        "data-item-index": O.index,
        "data-known-size": O.size,
        key: C,
        style: {
          ...fh,
          top: d
        }
      },
      h(O.index, u)
    ) : /* @__PURE__ */ ee.createElement(
      y,
      {
        ...dt(y, u),
        ...Ug(y, O.data),
        "data-index": T,
        "data-item-index": O.index,
        "data-known-size": O.size,
        "data-item-group-index": O.groupIndex,
        key: C,
        style: n ? { ...fh, top: d + R } : xS
      },
      p ? g(O.index, O.groupIndex, O.data, u) : g(O.index, O.data, u)
    );
  });
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: I });
}), SS = /* @__PURE__ */ ae.memo(function() {
  const n = He("listState"), o = He("topItemsIndexes").length > 0, l = Vn("sizeRanges"), s = He("useWindowScroll"), u = He("customScrollParent"), c = Vn("windowScrollContainerState"), d = Vn("scrollContainerState"), p = u || s ? c : d, g = He("trackItemSizes"), h = He("itemSize"), v = He("log"), { callbackRef: w, ref: y } = Sg(
    l,
    h,
    g,
    p,
    v,
    void 0,
    u,
    !1,
    He("skipAnimationFrameInResizeObserver")
  ), [x, I] = ae.useState(0);
  If("deviation", (L) => {
    x !== L && (y.current.style.marginTop = `${L}px`, I(L));
  });
  const O = He("EmptyPlaceholder"), T = He("FillerRow") || wS, C = He("TableBodyComponent"), R = He("paddingTopAddition"), B = He("statefulTotalCount"), $ = He("context");
  if (B === 0 && O)
    return /* @__PURE__ */ M.jsx(O, { ...dt(O, $) });
  const D = (o ? n.topItems : []).reduce((L, V) => L + V.size, 0), N = n.offsetTop + R + x - D, b = n.offsetBottom, S = N > 0 ? /* @__PURE__ */ M.jsx(T, { context: $, height: N }, "padding-top") : null, E = b > 0 ? /* @__PURE__ */ M.jsx(T, { context: $, height: b }, "padding-bottom") : null;
  return /* @__PURE__ */ M.jsxs(C, { "data-testid": "virtuoso-item-list", ref: w, ...dt(C, $), children: [
    S,
    o && /* @__PURE__ */ M.jsx(dh, { showTopList: !0 }),
    /* @__PURE__ */ M.jsx(dh, {}),
    E
  ] });
}), kS = ({ children: n }) => {
  const o = ae.useContext(pa), l = Vn("viewportHeight"), s = Vn("fixedItemHeight"), u = dr(
    ae.useMemo(() => fl(l, (c) => Kn(c, "height")), [l]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  );
  return ae.useEffect(() => {
    o && (l(o.viewportHeight), s(o.itemHeight));
  }, [o, l, s]), /* @__PURE__ */ M.jsx("div", { "data-viewport-type": "element", ref: u, style: mi(!1), children: n });
}, _S = ({ children: n }) => {
  const o = ae.useContext(pa), l = Vn("windowViewportRect"), s = Vn("fixedItemHeight"), u = He("customScrollParent"), c = mf(
    l,
    u,
    He("skipAnimationFrameInResizeObserver")
  );
  return ae.useEffect(() => {
    o && (s(o.itemHeight), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: 100 }));
  }, [o, l, s]), /* @__PURE__ */ M.jsx("div", { "data-viewport-type": "window", ref: c, style: mi(!1), children: n });
}, CS = /* @__PURE__ */ ae.memo(function(n) {
  const o = He("useWindowScroll"), l = He("customScrollParent"), s = Vn("fixedHeaderHeight"), u = Vn("fixedFooterHeight"), c = He("fixedHeaderContent"), d = He("fixedFooterContent"), p = He("context"), g = dr(
    ae.useMemo(() => fl(s, (C) => Kn(C, "height")), [s]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  ), h = dr(
    ae.useMemo(() => fl(u, (C) => Kn(C, "height")), [u]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  ), v = l || o ? IS : TS, w = l || o ? _S : kS, y = He("TableComponent"), x = He("TableHeadComponent"), I = He("TableFooterComponent"), O = c ? /* @__PURE__ */ M.jsx(
    x,
    {
      ref: g,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...dt(x, p),
      children: c()
    },
    "TableHead"
  ) : null, T = d ? /* @__PURE__ */ M.jsx(
    I,
    {
      ref: h,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...dt(I, p),
      children: d()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ M.jsx(v, { ...n, ...dt(v, p), children: /* @__PURE__ */ M.jsx(w, { children: /* @__PURE__ */ M.jsxs(y, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...dt(y, p), children: [
    O,
    /* @__PURE__ */ M.jsx(SS, {}, "TableBody"),
    T
  ] }) }) });
}), {
  Component: ES,
  useEmitter: If,
  useEmitterValue: He,
  usePublisher: Vn
} = /* @__PURE__ */ Sf(
  vS,
  {
    required: {},
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      firstItemIndex: "firstItemIndex",
      itemContent: "itemContent",
      groupContent: "groupContent",
      fixedHeaderContent: "fixedHeaderContent",
      fixedFooterContent: "fixedFooterContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      totalCount: "totalCount",
      topItemCount: "topItemCount",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      groupCounts: "groupCounts",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  CS
), TS = /* @__PURE__ */ Cf({ useEmitter: If, useEmitterValue: He, usePublisher: Vn }), IS = /* @__PURE__ */ Ef({ useEmitter: If, useEmitterValue: He, usePublisher: Vn }), RS = ES, ph = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, OS = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: mh, floor: ea, max: al, min: gc, round: hh } = Math;
function gh(n, o, l) {
  return Array.from({ length: o - n + 1 }).map((s, u) => ({ data: l === null ? null : l[u + n], index: u + n }));
}
function PS(n) {
  return {
    ...OS,
    items: n
  };
}
function Bs(n, o) {
  return n && n.width === o.width && n.height === o.height;
}
function AS(n, o) {
  return n && n.column === o.column && n.row === o.row;
}
const LS = /* @__PURE__ */ nt(
  ([
    { increaseViewportBy: n, listBoundary: o, overscan: l, visibleRange: s },
    { footerHeight: u, headerHeight: c, scrollBy: d, scrollContainerState: p, scrollTo: g, scrollTop: h, smoothScrollTargetReached: v, viewportHeight: w },
    y,
    x,
    { didMount: I, propsReady: O },
    { customScrollParent: T, useWindowScroll: C, windowScrollContainerState: R, windowScrollTo: B, windowViewportRect: $ },
    D
  ]) => {
    const N = se(0), b = se(0), S = se(ph), E = se({ height: 0, width: 0 }), L = se({ height: 0, width: 0 }), V = qe(), Q = qe(), ie = se(0), K = se(null), fe = se({ column: 0, row: 0 }), we = qe(), re = qe(), U = se(!1), Y = se(0), _ = se(!0), z = se(!1), G = se(!1);
    ot(
      te(
        I,
        $e(Y),
        Fe(([F, oe]) => !!oe)
      ),
      () => {
        We(_, !1);
      }
    ), ot(
      te(
        Dt(I, _, L, E, Y, z),
        Fe(([F, oe, xe, pe, , Ie]) => F && !oe && xe.height !== 0 && pe.height !== 0 && !Ie)
      ),
      ([, , , , F]) => {
        We(z, !0), vf(1, () => {
          We(V, F);
        }), fr(te(h), () => {
          We(o, [0, 0]), We(_, !0);
        });
      }
    ), Te(
      te(
        re,
        Fe((F) => F != null && F.scrollTop > 0),
        lr(0)
      ),
      b
    ), ot(
      te(
        I,
        $e(re),
        Fe(([, F]) => F != null)
      ),
      ([, F]) => {
        F && (We(E, F.viewport), We(L, F.item), We(fe, F.gap), F.scrollTop > 0 && (We(U, !0), fr(te(h, ai(1)), (oe) => {
          We(U, !1);
        }), We(g, { top: F.scrollTop })));
      }
    ), Te(
      te(
        E,
        he(({ height: F }) => F)
      ),
      w
    ), Te(
      te(
        Dt(
          Me(E, Bs),
          Me(L, Bs),
          Me(fe, (F, oe) => F && F.column === oe.column && F.row === oe.row),
          Me(h)
        ),
        he(([F, oe, xe, pe]) => ({
          gap: xe,
          item: oe,
          scrollTop: pe,
          viewport: F
        }))
      ),
      we
    ), Te(
      te(
        Dt(
          Me(N),
          s,
          Me(fe, AS),
          Me(L, Bs),
          Me(E, Bs),
          Me(K),
          Me(b),
          Me(U),
          Me(_),
          Me(Y)
        ),
        Fe(([, , , , , , , F]) => !F),
        he(
          ([
            F,
            [oe, xe],
            pe,
            Ie,
            Be,
            Ue,
            Re,
            ,
            ze,
            Ve
          ]) => {
            const { column: Ne, row: _e } = pe, { height: Ge, width: St } = Ie, { width: kt } = Be;
            if (Re === 0 && (F === 0 || kt === 0))
              return ph;
            if (St === 0) {
              const Et = yf(Ve, F), Tt = Et + Math.max(Re - 1, 0);
              return PS(gh(Et, Tt, Ue));
            }
            const Nt = $g(kt, St, Ne);
            let tt, it;
            ze ? oe === 0 && xe === 0 && Re > 0 ? (tt = 0, it = Re - 1) : (tt = Nt * ea((oe + _e) / (Ge + _e)), it = Nt * mh((xe + _e) / (Ge + _e)) - 1, it = gc(F - 1, al(it, Nt - 1)), tt = gc(it, al(0, tt))) : (tt = 0, it = -1);
            const Xe = gh(tt, it, Ue), { bottom: lt, top: pt } = vh(Be, pe, Ie, Xe), Kt = mh(F / Nt), sn = Kt * Ge + (Kt - 1) * _e - lt;
            return { bottom: lt, itemHeight: Ge, items: Xe, itemWidth: St, offsetBottom: sn, offsetTop: pt, top: pt };
          }
        )
      ),
      S
    ), Te(
      te(
        K,
        Fe((F) => F !== null),
        he((F) => F.length)
      ),
      N
    ), Te(
      te(
        Dt(E, L, S, fe),
        Fe(([F, oe, { items: xe }]) => xe.length > 0 && oe.height !== 0 && F.height !== 0),
        he(([F, oe, { items: xe }, pe]) => {
          const { bottom: Ie, top: Be } = vh(F, pe, oe, xe);
          return [Be, Ie];
        }),
        gt(ml)
      ),
      o
    );
    const q = se(!1);
    Te(
      te(
        h,
        $e(q),
        he(([F, oe]) => oe || F !== 0)
      ),
      q
    );
    const de = kn(
      te(
        Dt(S, N),
        Fe(([{ items: F }]) => F.length > 0),
        $e(q),
        Fe(([[F, oe], xe]) => {
          const pe = F.items[F.items.length - 1].index === oe - 1;
          return (xe || F.bottom > 0 && F.itemHeight > 0 && F.offsetBottom === 0 && F.items.length === oe) && pe;
        }),
        he(([[, F]]) => F - 1),
        gt()
      )
    ), ke = kn(
      te(
        Me(S),
        Fe(({ items: F }) => F.length > 0 && F[0].index === 0),
        lr(0),
        gt()
      )
    ), ge = kn(
      te(
        Me(S),
        $e(U),
        Fe(([{ items: F }, oe]) => F.length > 0 && !oe),
        he(([{ items: F }]) => ({
          endIndex: F[F.length - 1].index,
          startIndex: F[0].index
        })),
        gt(Ig),
        Zr(0)
      )
    );
    Te(ge, x.scrollSeekRangeChanged), Te(
      te(
        V,
        $e(E, L, N, fe),
        he(([F, oe, xe, pe, Ie]) => {
          const Be = Lg(F), { align: Ue, behavior: Re, offset: ze } = Be;
          let Ve = Be.index;
          Ve === "LAST" && (Ve = pe - 1), Ve = al(0, Ve, gc(pe - 1, Ve));
          let Ne = Yc(oe, Ie, xe, Ve);
          return Ue === "end" ? Ne = hh(Ne - oe.height + xe.height) : Ue === "center" && (Ne = hh(Ne - oe.height / 2 + xe.height / 2)), ze && (Ne += ze), { behavior: Re, top: Ne };
        })
      ),
      g
    );
    const Ee = Zt(
      te(
        S,
        he((F) => F.offsetBottom + F.bottom)
      ),
      0
    );
    return Te(
      te(
        $,
        he((F) => ({ height: F.visibleHeight, width: F.visibleWidth }))
      ),
      E
    ), {
      customScrollParent: T,
      // input
      data: K,
      deviation: ie,
      footerHeight: u,
      gap: fe,
      headerHeight: c,
      increaseViewportBy: n,
      initialItemCount: b,
      itemDimensions: L,
      overscan: l,
      restoreStateFrom: re,
      scrollBy: d,
      scrollContainerState: p,
      scrollHeight: Q,
      scrollTo: g,
      scrollToIndex: V,
      scrollTop: h,
      smoothScrollTargetReached: v,
      totalCount: N,
      useWindowScroll: C,
      viewportDimensions: E,
      windowScrollContainerState: R,
      windowScrollTo: B,
      windowViewportRect: $,
      ...x,
      // output
      gridState: S,
      horizontalDirection: G,
      initialTopMostItemIndex: Y,
      totalListHeight: Ee,
      ...y,
      endReached: de,
      propsReady: O,
      rangeChanged: ge,
      startReached: ke,
      stateChanged: we,
      stateRestoreInProgress: U,
      ...D
    };
  },
  yt(wf, ln, _l, jg, so, xf, lo)
);
function $g(n, o, l) {
  return al(1, ea((n + l) / (ea(o) + l)));
}
function vh(n, o, l, s) {
  const { height: u } = l;
  if (u === void 0 || s.length === 0)
    return { bottom: 0, top: 0 };
  const c = Yc(n, o, l, s[0].index);
  return { bottom: Yc(n, o, l, s[s.length - 1].index) + u, top: c };
}
function Yc(n, o, l, s) {
  const u = $g(n.width, l.width, o.column), c = ea(s / u), d = c * l.height + al(0, c - 1) * o.row;
  return d > 0 ? d + o.row : d;
}
const zS = /* @__PURE__ */ nt(() => {
  const n = se((w) => `Item ${w}`), o = se({}), l = se(null), s = se("virtuoso-grid-item"), u = se("virtuoso-grid-list"), c = se(_f), d = se("div"), p = se(pi), g = (w, y = null) => Zt(
    te(
      o,
      he((x) => x[w]),
      gt()
    ),
    y
  ), h = se(!1), v = se(!1);
  return Te(Me(v), h), {
    components: o,
    computeItemKey: c,
    context: l,
    FooterComponent: g("Footer"),
    HeaderComponent: g("Header"),
    headerFooterTag: d,
    itemClassName: s,
    ItemComponent: g("Item", "div"),
    itemContent: n,
    listClassName: u,
    ListComponent: g("List", "div"),
    readyStateChanged: h,
    reportReadyState: v,
    ScrollerComponent: g("Scroller", "div"),
    scrollerRef: p,
    ScrollSeekPlaceholder: g("ScrollSeekPlaceholder", "div")
  };
}), NS = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(LS, zS)
), bS = /* @__PURE__ */ ae.memo(function() {
  const n = xt("gridState"), o = xt("listClassName"), l = xt("itemClassName"), s = xt("itemContent"), u = xt("computeItemKey"), c = xt("isSeeking"), d = bn("scrollHeight"), p = xt("ItemComponent"), g = xt("ListComponent"), h = xt("ScrollSeekPlaceholder"), v = xt("context"), w = bn("itemDimensions"), y = bn("gap"), x = xt("log"), I = xt("stateRestoreInProgress"), O = bn("reportReadyState"), T = dr(
    ae.useMemo(
      () => (C) => {
        const R = C.parentElement.parentElement.scrollHeight;
        d(R);
        const B = C.firstChild;
        if (B) {
          const { height: $, width: D } = B.getBoundingClientRect();
          w({ height: $, width: D });
        }
        y({
          column: yh("column-gap", getComputedStyle(C).columnGap, x),
          row: yh("row-gap", getComputedStyle(C).rowGap, x)
        });
      },
      [d, w, y, x]
    ),
    !0,
    !1
  );
  return Hg(() => {
    n.itemHeight > 0 && n.itemWidth > 0 && O(!0);
  }, [n]), I ? null : /* @__PURE__ */ M.jsx(
    g,
    {
      className: o,
      ref: T,
      ...dt(g, v),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: n.offsetBottom, paddingTop: n.offsetTop },
      children: n.items.map((C) => {
        const R = u(C.index, C.data, v);
        return c ? /* @__PURE__ */ M.jsx(
          h,
          {
            ...dt(h, v),
            height: n.itemHeight,
            index: C.index,
            width: n.itemWidth
          },
          R
        ) : /* @__PURE__ */ ee.createElement(
          p,
          {
            ...dt(p, v),
            className: l,
            "data-index": C.index,
            key: R
          },
          s(C.index, C.data, v)
        );
      })
    }
  );
}), jS = ae.memo(function() {
  const n = xt("HeaderComponent"), o = bn("headerHeight"), l = xt("headerFooterTag"), s = dr(
    ae.useMemo(
      () => (c) => {
        o(Kn(c, "height"));
      },
      [o]
    ),
    !0,
    !1
  ), u = xt("context");
  return n ? /* @__PURE__ */ M.jsx(l, { ref: s, children: /* @__PURE__ */ M.jsx(n, { ...dt(n, u) }) }) : null;
}), FS = ae.memo(function() {
  const n = xt("FooterComponent"), o = bn("footerHeight"), l = xt("headerFooterTag"), s = dr(
    ae.useMemo(
      () => (c) => {
        o(Kn(c, "height"));
      },
      [o]
    ),
    !0,
    !1
  ), u = xt("context");
  return n ? /* @__PURE__ */ M.jsx(l, { ref: s, children: /* @__PURE__ */ M.jsx(n, { ...dt(n, u) }) }) : null;
}), MS = ({ children: n }) => {
  const o = ae.useContext(Dg), l = bn("itemDimensions"), s = bn("viewportDimensions"), u = dr(
    ae.useMemo(
      () => (c) => {
        s(c.getBoundingClientRect());
      },
      [s]
    ),
    !0,
    !1
  );
  return ae.useEffect(() => {
    o && (s({ height: o.viewportHeight, width: o.viewportWidth }), l({ height: o.itemHeight, width: o.itemWidth }));
  }, [o, s, l]), /* @__PURE__ */ M.jsx("div", { ref: u, style: mi(!1), children: n });
}, DS = ({ children: n }) => {
  const o = ae.useContext(Dg), l = bn("windowViewportRect"), s = bn("itemDimensions"), u = xt("customScrollParent"), c = mf(l, u, !1);
  return ae.useEffect(() => {
    o && (s({ height: o.itemHeight, width: o.itemWidth }), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: o.viewportWidth }));
  }, [o, l, s]), /* @__PURE__ */ M.jsx("div", { ref: c, style: mi(!1), children: n });
}, HS = /* @__PURE__ */ ae.memo(function({ ...n }) {
  const o = xt("useWindowScroll"), l = xt("customScrollParent"), s = l || o ? WS : BS, u = l || o ? DS : MS, c = xt("context");
  return /* @__PURE__ */ M.jsx(s, { ...n, ...dt(s, c), children: /* @__PURE__ */ M.jsxs(u, { children: [
    /* @__PURE__ */ M.jsx(jS, {}),
    /* @__PURE__ */ M.jsx(bS, {}),
    /* @__PURE__ */ M.jsx(FS, {})
  ] }) });
}), {
  useEmitter: Vg,
  useEmitterValue: xt,
  usePublisher: bn
} = /* @__PURE__ */ Sf(
  NS,
  {
    optional: {
      context: "context",
      totalCount: "totalCount",
      overscan: "overscan",
      itemContent: "itemContent",
      components: "components",
      computeItemKey: "computeItemKey",
      data: "data",
      initialItemCount: "initialItemCount",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      listClassName: "listClassName",
      itemClassName: "itemClassName",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      restoreStateFrom: "restoreStateFrom",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      increaseViewportBy: "increaseViewportBy"
    },
    methods: {
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      scrollToIndex: "scrollToIndex"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      stateChanged: "stateChanged",
      readyStateChanged: "readyStateChanged"
    }
  },
  HS
), BS = /* @__PURE__ */ Cf({ useEmitter: Vg, useEmitterValue: xt, usePublisher: bn }), WS = /* @__PURE__ */ Ef({ useEmitter: Vg, useEmitterValue: xt, usePublisher: bn });
function yh(n, o, l) {
  return o !== "normal" && !(o != null && o.endsWith("px")) && l(`${n} was not resolved to pixel value correctly`, o, hn.WARN), o === "normal" ? 0 : parseInt(o ?? "0", 10);
}
function US() {
  const n = ee.useRef(null), [o, l] = ee.useState(1120);
  return ee.useEffect(() => {
    const s = n.current;
    if (!s) return;
    const u = new ResizeObserver(([c]) => {
      c.contentRect.width && l(c.contentRect.width);
    });
    return u.observe(s), () => u.disconnect();
  }, []), [n, o];
}
const $S = "_container_1yy9g_1", VS = "_cards_1yy9g_7", wh = {
  container: $S,
  cards: VS
}, YS = "_card_lfenw_1", KS = "_flex_lfenw_23", QS = "_field_lfenw_27", GS = "_text_lfenw_30", tl = {
  card: YS,
  "dd-field-block": "_dd-field-block_lfenw_13",
  flex: KS,
  field: QS,
  text: GS
}, qS = "_terms_1cbzn_1", vc = {
  terms: qS
};
function eo({ text: n, searchTerm: o }) {
  let l;
  return o && n && typeof n == "string" && n.toLowerCase().includes(o.toLowerCase()) && (l = n.split(new RegExp(`(${o.replace(/[\\^$.*+?()[\]{}|/]/g, "\\$&")})`, "gi")).map((u, c) => u.toLowerCase() === o.toLowerCase() ? /* @__PURE__ */ M.jsx("mark", { children: u }, c) : /* @__PURE__ */ M.jsx("span", { children: u }, c))), /* @__PURE__ */ M.jsx(M.Fragment, { children: l ?? n });
}
function Yg({ terms: n, searchTerm: o }) {
  if (!n) return /* @__PURE__ */ M.jsx(M.Fragment, {});
  const l = (p) => p.trim().split(/\s+/), s = (p) => /^[A-Z]+:[A-Za-z0-9_]+$/.test(p), u = (p) => /^https?:\/\/\S+/.test(p), c = (p, g) => {
    if (s(p)) {
      const [h, v] = p.split(":"), w = encodeURIComponent(h === "NCIT" ? `http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#${v}` : `http://purl.obolibrary.org/obo/${h}_${v}`), y = `https://bioportal.bioontology.org/ontologies/${h}/?p=classes&conceptid=${w}`;
      return /* @__PURE__ */ M.jsx("a", { href: y, target: "_blank", rel: "noopener noreferrer", className: vc.link, children: /* @__PURE__ */ M.jsx(eo, { text: p, searchTerm: o }) }, g);
    }
    return u(p) ? /* @__PURE__ */ M.jsx("a", { href: p, target: "_blank", rel: "noopener noreferrer", className: vc.link, children: /* @__PURE__ */ M.jsx(eo, { text: p, searchTerm: o }) }, g) : /* @__PURE__ */ M.jsx("span", { children: /* @__PURE__ */ M.jsx(eo, { text: p, searchTerm: o }) }, g);
  }, d = l(n);
  return /* @__PURE__ */ M.jsx("span", { className: vc.terms, children: d.map(c) });
}
const XS = "_values_14176_1", ZS = "_flex_14176_6", JS = "_value_14176_1", yc = {
  values: XS,
  flex: ZS,
  value: JS
};
function Kg({ values: n, searchTerm: o }) {
  const l = n.split("|").map((s, u) => {
    const c = s.split("=");
    return /* @__PURE__ */ M.jsxs("div", { className: yc.flex, children: [
      /* @__PURE__ */ M.jsx("span", { className: yc.value, children: /* @__PURE__ */ M.jsx(eo, { text: c[0].trim().replace(/"/g, ""), searchTerm: o }) }),
      /* @__PURE__ */ M.jsx("span", { children: /* @__PURE__ */ M.jsx(eo, { text: c[1].trim().replace(/\[|\]/g, ""), searchTerm: o }) })
    ] }, u);
  });
  return /* @__PURE__ */ M.jsx("div", { className: yc.values, children: l });
}
const ui = Math.min, To = Math.max, ta = Math.round, Ws = Math.floor, cr = (n) => ({
  x: n,
  y: n
}), e2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, t2 = {
  start: "end",
  end: "start"
};
function Kc(n, o, l) {
  return To(n, ui(o, l));
}
function Cl(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Oo(n) {
  return n.split("-")[0];
}
function El(n) {
  return n.split("-")[1];
}
function Qg(n) {
  return n === "x" ? "y" : "x";
}
function Rf(n) {
  return n === "y" ? "height" : "width";
}
function Jr(n) {
  return ["top", "bottom"].includes(Oo(n)) ? "y" : "x";
}
function Of(n) {
  return Qg(Jr(n));
}
function n2(n, o, l) {
  l === void 0 && (l = !1);
  const s = El(n), u = Of(n), c = Rf(u);
  let d = u === "x" ? s === (l ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return o.reference[c] > o.floating[c] && (d = na(d)), [d, na(d)];
}
function r2(n) {
  const o = na(n);
  return [Qc(n), o, Qc(o)];
}
function Qc(n) {
  return n.replace(/start|end/g, (o) => t2[o]);
}
function o2(n, o, l) {
  const s = ["left", "right"], u = ["right", "left"], c = ["top", "bottom"], d = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return l ? o ? u : s : o ? s : u;
    case "left":
    case "right":
      return o ? c : d;
    default:
      return [];
  }
}
function i2(n, o, l, s) {
  const u = El(n);
  let c = o2(Oo(n), l === "start", s);
  return u && (c = c.map((d) => d + "-" + u), o && (c = c.concat(c.map(Qc)))), c;
}
function na(n) {
  return n.replace(/left|right|bottom|top/g, (o) => e2[o]);
}
function l2(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Gg(n) {
  return typeof n != "number" ? l2(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function ra(n) {
  const {
    x: o,
    y: l,
    width: s,
    height: u
  } = n;
  return {
    width: s,
    height: u,
    top: l,
    left: o,
    right: o + s,
    bottom: l + u,
    x: o,
    y: l
  };
}
function xh(n, o, l) {
  let {
    reference: s,
    floating: u
  } = n;
  const c = Jr(o), d = Of(o), p = Rf(d), g = Oo(o), h = c === "y", v = s.x + s.width / 2 - u.width / 2, w = s.y + s.height / 2 - u.height / 2, y = s[p] / 2 - u[p] / 2;
  let x;
  switch (g) {
    case "top":
      x = {
        x: v,
        y: s.y - u.height
      };
      break;
    case "bottom":
      x = {
        x: v,
        y: s.y + s.height
      };
      break;
    case "right":
      x = {
        x: s.x + s.width,
        y: w
      };
      break;
    case "left":
      x = {
        x: s.x - u.width,
        y: w
      };
      break;
    default:
      x = {
        x: s.x,
        y: s.y
      };
  }
  switch (El(o)) {
    case "start":
      x[d] -= y * (l && h ? -1 : 1);
      break;
    case "end":
      x[d] += y * (l && h ? -1 : 1);
      break;
  }
  return x;
}
const s2 = async (n, o, l) => {
  const {
    placement: s = "bottom",
    strategy: u = "absolute",
    middleware: c = [],
    platform: d
  } = l, p = c.filter(Boolean), g = await (d.isRTL == null ? void 0 : d.isRTL(o));
  let h = await d.getElementRects({
    reference: n,
    floating: o,
    strategy: u
  }), {
    x: v,
    y: w
  } = xh(h, s, g), y = s, x = {}, I = 0;
  for (let O = 0; O < p.length; O++) {
    const {
      name: T,
      fn: C
    } = p[O], {
      x: R,
      y: B,
      data: $,
      reset: D
    } = await C({
      x: v,
      y: w,
      initialPlacement: s,
      placement: y,
      strategy: u,
      middlewareData: x,
      rects: h,
      platform: d,
      elements: {
        reference: n,
        floating: o
      }
    });
    v = R ?? v, w = B ?? w, x = {
      ...x,
      [T]: {
        ...x[T],
        ...$
      }
    }, D && I <= 50 && (I++, typeof D == "object" && (D.placement && (y = D.placement), D.rects && (h = D.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: o,
      strategy: u
    }) : D.rects), {
      x: v,
      y: w
    } = xh(h, y, g)), O = -1);
  }
  return {
    x: v,
    y: w,
    placement: y,
    strategy: u,
    middlewareData: x
  };
};
async function qg(n, o) {
  var l;
  o === void 0 && (o = {});
  const {
    x: s,
    y: u,
    platform: c,
    rects: d,
    elements: p,
    strategy: g
  } = n, {
    boundary: h = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: w = "floating",
    altBoundary: y = !1,
    padding: x = 0
  } = Cl(o, n), I = Gg(x), T = p[y ? w === "floating" ? "reference" : "floating" : w], C = ra(await c.getClippingRect({
    element: (l = await (c.isElement == null ? void 0 : c.isElement(T))) == null || l ? T : T.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(p.floating)),
    boundary: h,
    rootBoundary: v,
    strategy: g
  })), R = w === "floating" ? {
    x: s,
    y: u,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, B = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(p.floating)), $ = await (c.isElement == null ? void 0 : c.isElement(B)) ? await (c.getScale == null ? void 0 : c.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = ra(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: R,
    offsetParent: B,
    strategy: g
  }) : R);
  return {
    top: (C.top - D.top + I.top) / $.y,
    bottom: (D.bottom - C.bottom + I.bottom) / $.y,
    left: (C.left - D.left + I.left) / $.x,
    right: (D.right - C.right + I.right) / $.x
  };
}
const a2 = (n) => ({
  name: "arrow",
  options: n,
  async fn(o) {
    const {
      x: l,
      y: s,
      placement: u,
      rects: c,
      platform: d,
      elements: p,
      middlewareData: g
    } = o, {
      element: h,
      padding: v = 0
    } = Cl(n, o) || {};
    if (h == null)
      return {};
    const w = Gg(v), y = {
      x: l,
      y: s
    }, x = Of(u), I = Rf(x), O = await d.getDimensions(h), T = x === "y", C = T ? "top" : "left", R = T ? "bottom" : "right", B = T ? "clientHeight" : "clientWidth", $ = c.reference[I] + c.reference[x] - y[x] - c.floating[I], D = y[x] - c.reference[x], N = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let b = N ? N[B] : 0;
    (!b || !await (d.isElement == null ? void 0 : d.isElement(N))) && (b = p.floating[B] || c.floating[I]);
    const S = $ / 2 - D / 2, E = b / 2 - O[I] / 2 - 1, L = ui(w[C], E), V = ui(w[R], E), Q = L, ie = b - O[I] - V, K = b / 2 - O[I] / 2 + S, fe = Kc(Q, K, ie), we = !g.arrow && El(u) != null && K !== fe && c.reference[I] / 2 - (K < Q ? L : V) - O[I] / 2 < 0, re = we ? K < Q ? K - Q : K - ie : 0;
    return {
      [x]: y[x] + re,
      data: {
        [x]: fe,
        centerOffset: K - fe - re,
        ...we && {
          alignmentOffset: re
        }
      },
      reset: we
    };
  }
}), u2 = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(o) {
      var l, s;
      const {
        placement: u,
        middlewareData: c,
        rects: d,
        initialPlacement: p,
        platform: g,
        elements: h
      } = o, {
        mainAxis: v = !0,
        crossAxis: w = !0,
        fallbackPlacements: y,
        fallbackStrategy: x = "bestFit",
        fallbackAxisSideDirection: I = "none",
        flipAlignment: O = !0,
        ...T
      } = Cl(n, o);
      if ((l = c.arrow) != null && l.alignmentOffset)
        return {};
      const C = Oo(u), R = Jr(p), B = Oo(p) === p, $ = await (g.isRTL == null ? void 0 : g.isRTL(h.floating)), D = y || (B || !O ? [na(p)] : r2(p)), N = I !== "none";
      !y && N && D.push(...i2(p, O, I, $));
      const b = [p, ...D], S = await qg(o, T), E = [];
      let L = ((s = c.flip) == null ? void 0 : s.overflows) || [];
      if (v && E.push(S[C]), w) {
        const K = n2(u, d, $);
        E.push(S[K[0]], S[K[1]]);
      }
      if (L = [...L, {
        placement: u,
        overflows: E
      }], !E.every((K) => K <= 0)) {
        var V, Q;
        const K = (((V = c.flip) == null ? void 0 : V.index) || 0) + 1, fe = b[K];
        if (fe && (!(w === "alignment" ? R !== Jr(fe) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((U) => U.overflows[0] > 0 && Jr(U.placement) === R)))
          return {
            data: {
              index: K,
              overflows: L
            },
            reset: {
              placement: fe
            }
          };
        let we = (Q = L.filter((re) => re.overflows[0] <= 0).sort((re, U) => re.overflows[1] - U.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!we)
          switch (x) {
            case "bestFit": {
              var ie;
              const re = (ie = L.filter((U) => {
                if (N) {
                  const Y = Jr(U.placement);
                  return Y === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((Y) => Y > 0).reduce((Y, _) => Y + _, 0)]).sort((U, Y) => U[1] - Y[1])[0]) == null ? void 0 : ie[0];
              re && (we = re);
              break;
            }
            case "initialPlacement":
              we = p;
              break;
          }
        if (u !== we)
          return {
            reset: {
              placement: we
            }
          };
      }
      return {};
    }
  };
};
async function c2(n, o) {
  const {
    placement: l,
    platform: s,
    elements: u
  } = n, c = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), d = Oo(l), p = El(l), g = Jr(l) === "y", h = ["left", "top"].includes(d) ? -1 : 1, v = c && g ? -1 : 1, w = Cl(o, n);
  let {
    mainAxis: y,
    crossAxis: x,
    alignmentAxis: I
  } = typeof w == "number" ? {
    mainAxis: w,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: w.mainAxis || 0,
    crossAxis: w.crossAxis || 0,
    alignmentAxis: w.alignmentAxis
  };
  return p && typeof I == "number" && (x = p === "end" ? I * -1 : I), g ? {
    x: x * v,
    y: y * h
  } : {
    x: y * h,
    y: x * v
  };
}
const f2 = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(o) {
      var l, s;
      const {
        x: u,
        y: c,
        placement: d,
        middlewareData: p
      } = o, g = await c2(o, n);
      return d === ((l = p.offset) == null ? void 0 : l.placement) && (s = p.arrow) != null && s.alignmentOffset ? {} : {
        x: u + g.x,
        y: c + g.y,
        data: {
          ...g,
          placement: d
        }
      };
    }
  };
}, d2 = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(o) {
      const {
        x: l,
        y: s,
        placement: u
      } = o, {
        mainAxis: c = !0,
        crossAxis: d = !1,
        limiter: p = {
          fn: (T) => {
            let {
              x: C,
              y: R
            } = T;
            return {
              x: C,
              y: R
            };
          }
        },
        ...g
      } = Cl(n, o), h = {
        x: l,
        y: s
      }, v = await qg(o, g), w = Jr(Oo(u)), y = Qg(w);
      let x = h[y], I = h[w];
      if (c) {
        const T = y === "y" ? "top" : "left", C = y === "y" ? "bottom" : "right", R = x + v[T], B = x - v[C];
        x = Kc(R, x, B);
      }
      if (d) {
        const T = w === "y" ? "top" : "left", C = w === "y" ? "bottom" : "right", R = I + v[T], B = I - v[C];
        I = Kc(R, I, B);
      }
      const O = p.fn({
        ...o,
        [y]: x,
        [w]: I
      });
      return {
        ...O,
        data: {
          x: O.x - l,
          y: O.y - s,
          enabled: {
            [y]: c,
            [w]: d
          }
        }
      };
    }
  };
};
function ma() {
  return typeof window < "u";
}
function hi(n) {
  return Xg(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function _n(n) {
  var o;
  return (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function hr(n) {
  var o;
  return (o = (Xg(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : o.documentElement;
}
function Xg(n) {
  return ma() ? n instanceof Node || n instanceof _n(n).Node : !1;
}
function Qn(n) {
  return ma() ? n instanceof Element || n instanceof _n(n).Element : !1;
}
function pr(n) {
  return ma() ? n instanceof HTMLElement || n instanceof _n(n).HTMLElement : !1;
}
function Sh(n) {
  return !ma() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof _n(n).ShadowRoot;
}
function Tl(n) {
  const {
    overflow: o,
    overflowX: l,
    overflowY: s,
    display: u
  } = Gn(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + s + l) && !["inline", "contents"].includes(u);
}
function p2(n) {
  return ["table", "td", "th"].includes(hi(n));
}
function ha(n) {
  return [":popover-open", ":modal"].some((o) => {
    try {
      return n.matches(o);
    } catch {
      return !1;
    }
  });
}
function Pf(n) {
  const o = Af(), l = Qn(n) ? Gn(n) : n;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((s) => l[s] ? l[s] !== "none" : !1) || (l.containerType ? l.containerType !== "normal" : !1) || !o && (l.backdropFilter ? l.backdropFilter !== "none" : !1) || !o && (l.filter ? l.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((s) => (l.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (l.contain || "").includes(s));
}
function m2(n) {
  let o = oo(n);
  for (; pr(o) && !ci(o); ) {
    if (Pf(o))
      return o;
    if (ha(o))
      return null;
    o = oo(o);
  }
  return null;
}
function Af() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ci(n) {
  return ["html", "body", "#document"].includes(hi(n));
}
function Gn(n) {
  return _n(n).getComputedStyle(n);
}
function ga(n) {
  return Qn(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function oo(n) {
  if (hi(n) === "html")
    return n;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    Sh(n) && n.host || // Fallback.
    hr(n)
  );
  return Sh(o) ? o.host : o;
}
function Zg(n) {
  const o = oo(n);
  return ci(o) ? n.ownerDocument ? n.ownerDocument.body : n.body : pr(o) && Tl(o) ? o : Zg(o);
}
function vl(n, o, l) {
  var s;
  o === void 0 && (o = []), l === void 0 && (l = !0);
  const u = Zg(n), c = u === ((s = n.ownerDocument) == null ? void 0 : s.body), d = _n(u);
  if (c) {
    const p = Gc(d);
    return o.concat(d, d.visualViewport || [], Tl(u) ? u : [], p && l ? vl(p) : []);
  }
  return o.concat(u, vl(u, [], l));
}
function Gc(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Jg(n) {
  const o = Gn(n);
  let l = parseFloat(o.width) || 0, s = parseFloat(o.height) || 0;
  const u = pr(n), c = u ? n.offsetWidth : l, d = u ? n.offsetHeight : s, p = ta(l) !== c || ta(s) !== d;
  return p && (l = c, s = d), {
    width: l,
    height: s,
    $: p
  };
}
function Lf(n) {
  return Qn(n) ? n : n.contextElement;
}
function li(n) {
  const o = Lf(n);
  if (!pr(o))
    return cr(1);
  const l = o.getBoundingClientRect(), {
    width: s,
    height: u,
    $: c
  } = Jg(o);
  let d = (c ? ta(l.width) : l.width) / s, p = (c ? ta(l.height) : l.height) / u;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const h2 = /* @__PURE__ */ cr(0);
function ev(n) {
  const o = _n(n);
  return !Af() || !o.visualViewport ? h2 : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function g2(n, o, l) {
  return o === void 0 && (o = !1), !l || o && l !== _n(n) ? !1 : o;
}
function Po(n, o, l, s) {
  o === void 0 && (o = !1), l === void 0 && (l = !1);
  const u = n.getBoundingClientRect(), c = Lf(n);
  let d = cr(1);
  o && (s ? Qn(s) && (d = li(s)) : d = li(n));
  const p = g2(c, l, s) ? ev(c) : cr(0);
  let g = (u.left + p.x) / d.x, h = (u.top + p.y) / d.y, v = u.width / d.x, w = u.height / d.y;
  if (c) {
    const y = _n(c), x = s && Qn(s) ? _n(s) : s;
    let I = y, O = Gc(I);
    for (; O && s && x !== I; ) {
      const T = li(O), C = O.getBoundingClientRect(), R = Gn(O), B = C.left + (O.clientLeft + parseFloat(R.paddingLeft)) * T.x, $ = C.top + (O.clientTop + parseFloat(R.paddingTop)) * T.y;
      g *= T.x, h *= T.y, v *= T.x, w *= T.y, g += B, h += $, I = _n(O), O = Gc(I);
    }
  }
  return ra({
    width: v,
    height: w,
    x: g,
    y: h
  });
}
function zf(n, o) {
  const l = ga(n).scrollLeft;
  return o ? o.left + l : Po(hr(n)).left + l;
}
function tv(n, o, l) {
  l === void 0 && (l = !1);
  const s = n.getBoundingClientRect(), u = s.left + o.scrollLeft - (l ? 0 : (
    // RTL <body> scrollbar.
    zf(n, s)
  )), c = s.top + o.scrollTop;
  return {
    x: u,
    y: c
  };
}
function v2(n) {
  let {
    elements: o,
    rect: l,
    offsetParent: s,
    strategy: u
  } = n;
  const c = u === "fixed", d = hr(s), p = o ? ha(o.floating) : !1;
  if (s === d || p && c)
    return l;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = cr(1);
  const v = cr(0), w = pr(s);
  if ((w || !w && !c) && ((hi(s) !== "body" || Tl(d)) && (g = ga(s)), pr(s))) {
    const x = Po(s);
    h = li(s), v.x = x.x + s.clientLeft, v.y = x.y + s.clientTop;
  }
  const y = d && !w && !c ? tv(d, g, !0) : cr(0);
  return {
    width: l.width * h.x,
    height: l.height * h.y,
    x: l.x * h.x - g.scrollLeft * h.x + v.x + y.x,
    y: l.y * h.y - g.scrollTop * h.y + v.y + y.y
  };
}
function y2(n) {
  return Array.from(n.getClientRects());
}
function w2(n) {
  const o = hr(n), l = ga(n), s = n.ownerDocument.body, u = To(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), c = To(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
  let d = -l.scrollLeft + zf(n);
  const p = -l.scrollTop;
  return Gn(s).direction === "rtl" && (d += To(o.clientWidth, s.clientWidth) - u), {
    width: u,
    height: c,
    x: d,
    y: p
  };
}
function x2(n, o) {
  const l = _n(n), s = hr(n), u = l.visualViewport;
  let c = s.clientWidth, d = s.clientHeight, p = 0, g = 0;
  if (u) {
    c = u.width, d = u.height;
    const h = Af();
    (!h || h && o === "fixed") && (p = u.offsetLeft, g = u.offsetTop);
  }
  return {
    width: c,
    height: d,
    x: p,
    y: g
  };
}
function S2(n, o) {
  const l = Po(n, !0, o === "fixed"), s = l.top + n.clientTop, u = l.left + n.clientLeft, c = pr(n) ? li(n) : cr(1), d = n.clientWidth * c.x, p = n.clientHeight * c.y, g = u * c.x, h = s * c.y;
  return {
    width: d,
    height: p,
    x: g,
    y: h
  };
}
function kh(n, o, l) {
  let s;
  if (o === "viewport")
    s = x2(n, l);
  else if (o === "document")
    s = w2(hr(n));
  else if (Qn(o))
    s = S2(o, l);
  else {
    const u = ev(n);
    s = {
      x: o.x - u.x,
      y: o.y - u.y,
      width: o.width,
      height: o.height
    };
  }
  return ra(s);
}
function nv(n, o) {
  const l = oo(n);
  return l === o || !Qn(l) || ci(l) ? !1 : Gn(l).position === "fixed" || nv(l, o);
}
function k2(n, o) {
  const l = o.get(n);
  if (l)
    return l;
  let s = vl(n, [], !1).filter((p) => Qn(p) && hi(p) !== "body"), u = null;
  const c = Gn(n).position === "fixed";
  let d = c ? oo(n) : n;
  for (; Qn(d) && !ci(d); ) {
    const p = Gn(d), g = Pf(d);
    !g && p.position === "fixed" && (u = null), (c ? !g && !u : !g && p.position === "static" && !!u && ["absolute", "fixed"].includes(u.position) || Tl(d) && !g && nv(n, d)) ? s = s.filter((v) => v !== d) : u = p, d = oo(d);
  }
  return o.set(n, s), s;
}
function _2(n) {
  let {
    element: o,
    boundary: l,
    rootBoundary: s,
    strategy: u
  } = n;
  const d = [...l === "clippingAncestors" ? ha(o) ? [] : k2(o, this._c) : [].concat(l), s], p = d[0], g = d.reduce((h, v) => {
    const w = kh(o, v, u);
    return h.top = To(w.top, h.top), h.right = ui(w.right, h.right), h.bottom = ui(w.bottom, h.bottom), h.left = To(w.left, h.left), h;
  }, kh(o, p, u));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function C2(n) {
  const {
    width: o,
    height: l
  } = Jg(n);
  return {
    width: o,
    height: l
  };
}
function E2(n, o, l) {
  const s = pr(o), u = hr(o), c = l === "fixed", d = Po(n, !0, c, o);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = cr(0);
  function h() {
    g.x = zf(u);
  }
  if (s || !s && !c)
    if ((hi(o) !== "body" || Tl(u)) && (p = ga(o)), s) {
      const x = Po(o, !0, c, o);
      g.x = x.x + o.clientLeft, g.y = x.y + o.clientTop;
    } else u && h();
  c && !s && u && h();
  const v = u && !s && !c ? tv(u, p) : cr(0), w = d.left + p.scrollLeft - g.x - v.x, y = d.top + p.scrollTop - g.y - v.y;
  return {
    x: w,
    y,
    width: d.width,
    height: d.height
  };
}
function wc(n) {
  return Gn(n).position === "static";
}
function _h(n, o) {
  if (!pr(n) || Gn(n).position === "fixed")
    return null;
  if (o)
    return o(n);
  let l = n.offsetParent;
  return hr(n) === l && (l = l.ownerDocument.body), l;
}
function rv(n, o) {
  const l = _n(n);
  if (ha(n))
    return l;
  if (!pr(n)) {
    let u = oo(n);
    for (; u && !ci(u); ) {
      if (Qn(u) && !wc(u))
        return u;
      u = oo(u);
    }
    return l;
  }
  let s = _h(n, o);
  for (; s && p2(s) && wc(s); )
    s = _h(s, o);
  return s && ci(s) && wc(s) && !Pf(s) ? l : s || m2(n) || l;
}
const T2 = async function(n) {
  const o = this.getOffsetParent || rv, l = this.getDimensions, s = await l(n.floating);
  return {
    reference: E2(n.reference, await o(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function I2(n) {
  return Gn(n).direction === "rtl";
}
const R2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: v2,
  getDocumentElement: hr,
  getClippingRect: _2,
  getOffsetParent: rv,
  getElementRects: T2,
  getClientRects: y2,
  getDimensions: C2,
  getScale: li,
  isElement: Qn,
  isRTL: I2
};
function ov(n, o) {
  return n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height;
}
function O2(n, o) {
  let l = null, s;
  const u = hr(n);
  function c() {
    var p;
    clearTimeout(s), (p = l) == null || p.disconnect(), l = null;
  }
  function d(p, g) {
    p === void 0 && (p = !1), g === void 0 && (g = 1), c();
    const h = n.getBoundingClientRect(), {
      left: v,
      top: w,
      width: y,
      height: x
    } = h;
    if (p || o(), !y || !x)
      return;
    const I = Ws(w), O = Ws(u.clientWidth - (v + y)), T = Ws(u.clientHeight - (w + x)), C = Ws(v), B = {
      rootMargin: -I + "px " + -O + "px " + -T + "px " + -C + "px",
      threshold: To(0, ui(1, g)) || 1
    };
    let $ = !0;
    function D(N) {
      const b = N[0].intersectionRatio;
      if (b !== g) {
        if (!$)
          return d();
        b ? d(!1, b) : s = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      b === 1 && !ov(h, n.getBoundingClientRect()) && d(), $ = !1;
    }
    try {
      l = new IntersectionObserver(D, {
        ...B,
        // Handle <iframe>s
        root: u.ownerDocument
      });
    } catch {
      l = new IntersectionObserver(D, B);
    }
    l.observe(n);
  }
  return d(!0), c;
}
function P2(n, o, l, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: u = !0,
    ancestorResize: c = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = s, h = Lf(n), v = u || c ? [...h ? vl(h) : [], ...vl(o)] : [];
  v.forEach((C) => {
    u && C.addEventListener("scroll", l, {
      passive: !0
    }), c && C.addEventListener("resize", l);
  });
  const w = h && p ? O2(h, l) : null;
  let y = -1, x = null;
  d && (x = new ResizeObserver((C) => {
    let [R] = C;
    R && R.target === h && x && (x.unobserve(o), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var B;
      (B = x) == null || B.observe(o);
    })), l();
  }), h && !g && x.observe(h), x.observe(o));
  let I, O = g ? Po(n) : null;
  g && T();
  function T() {
    const C = Po(n);
    O && !ov(O, C) && l(), O = C, I = requestAnimationFrame(T);
  }
  return l(), () => {
    var C;
    v.forEach((R) => {
      u && R.removeEventListener("scroll", l), c && R.removeEventListener("resize", l);
    }), w == null || w(), (C = x) == null || C.disconnect(), x = null, g && cancelAnimationFrame(I);
  };
}
const A2 = f2, L2 = d2, z2 = u2, N2 = a2, Ch = (n, o, l) => {
  const s = /* @__PURE__ */ new Map(), u = {
    platform: R2,
    ...l
  }, c = {
    ...u.platform,
    _c: s
  };
  return s2(n, o, {
    ...u,
    platform: c
  });
};
var xc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Eh;
function b2() {
  return Eh || (Eh = 1, function(n) {
    (function() {
      var o = {}.hasOwnProperty;
      function l() {
        for (var c = "", d = 0; d < arguments.length; d++) {
          var p = arguments[d];
          p && (c = u(c, s(p)));
        }
        return c;
      }
      function s(c) {
        if (typeof c == "string" || typeof c == "number")
          return c;
        if (typeof c != "object")
          return "";
        if (Array.isArray(c))
          return l.apply(null, c);
        if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
          return c.toString();
        var d = "";
        for (var p in c)
          o.call(c, p) && c[p] && (d = u(d, p));
        return d;
      }
      function u(c, d) {
        return d ? c ? c + " " + d : c + d : c;
      }
      n.exports ? (l.default = l, n.exports = l) : window.classNames = l;
    })();
  }(xc)), xc.exports;
}
var j2 = b2();
const qc = /* @__PURE__ */ yl(j2);
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const F2 = "react-tooltip-core-styles", M2 = "react-tooltip-base-styles", Th = { core: !1, base: !1 };
function Ih({ css: n, id: o = M2, type: l = "base", ref: s }) {
  var u, c;
  if (!n || typeof document > "u" || Th[l] || l === "core" && typeof process < "u" && (!((u = process == null ? void 0 : process.env) === null || u === void 0) && u.REACT_TOOLTIP_DISABLE_CORE_STYLES) || l !== "base" && typeof process < "u" && (!((c = process == null ? void 0 : process.env) === null || c === void 0) && c.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  l === "core" && (o = F2), s || (s = {});
  const { insertAt: d } = s;
  if (document.getElementById(o)) return;
  const p = document.head || document.getElementsByTagName("head")[0], g = document.createElement("style");
  g.id = o, g.type = "text/css", d === "top" && p.firstChild ? p.insertBefore(g, p.firstChild) : p.appendChild(g), g.styleSheet ? g.styleSheet.cssText = n : g.appendChild(document.createTextNode(n)), Th[l] = !0;
}
const Rh = async ({ elementReference: n = null, tooltipReference: o = null, tooltipArrowReference: l = null, place: s = "top", offset: u = 10, strategy: c = "absolute", middlewares: d = [A2(Number(u)), z2({ fallbackAxisSideDirection: "start" }), L2({ padding: 5 })], border: p }) => {
  if (!n) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: s };
  if (o === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: s };
  const g = d;
  return l ? (g.push(N2({ element: l, padding: 5 })), Ch(n, o, { placement: s, strategy: c, middleware: g }).then(({ x: h, y: v, placement: w, middlewareData: y }) => {
    var x, I;
    const O = { left: `${h}px`, top: `${v}px`, border: p }, { x: T, y: C } = (x = y.arrow) !== null && x !== void 0 ? x : { x: 0, y: 0 }, R = (I = { top: "bottom", right: "left", bottom: "top", left: "right" }[w.split("-")[0]]) !== null && I !== void 0 ? I : "bottom", B = p && { borderBottom: p, borderRight: p };
    let $ = 0;
    if (p) {
      const D = `${p}`.match(/(\d+)px/);
      $ = D != null && D[1] ? Number(D[1]) : 1;
    }
    return { tooltipStyles: O, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: C != null ? `${C}px` : "", right: "", bottom: "", ...B, [R]: `-${4 + $}px` }, place: w };
  })) : Ch(n, o, { placement: "bottom", strategy: c, middleware: g }).then(({ x: h, y: v, placement: w }) => ({ tooltipStyles: { left: `${h}px`, top: `${v}px` }, tooltipArrowStyles: {}, place: w }));
}, Oh = (n, o) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(n, o), Ph = (n, o, l) => {
  let s = null;
  const u = function(...c) {
    const d = () => {
      s = null;
    };
    !s && (n.apply(this, c), s = setTimeout(d, o));
  };
  return u.cancel = () => {
    s && (clearTimeout(s), s = null);
  }, u;
}, Ah = (n) => n !== null && !Array.isArray(n) && typeof n == "object", Xc = (n, o) => {
  if (n === o) return !0;
  if (Array.isArray(n) && Array.isArray(o)) return n.length === o.length && n.every((u, c) => Xc(u, o[c]));
  if (Array.isArray(n) !== Array.isArray(o)) return !1;
  if (!Ah(n) || !Ah(o)) return n === o;
  const l = Object.keys(n), s = Object.keys(o);
  return l.length === s.length && l.every((u) => Xc(n[u], o[u]));
}, D2 = (n) => {
  if (!(n instanceof HTMLElement || n instanceof SVGElement)) return !1;
  const o = getComputedStyle(n);
  return ["overflow", "overflow-x", "overflow-y"].some((l) => {
    const s = o.getPropertyValue(l);
    return s === "auto" || s === "scroll";
  });
}, Lh = (n) => {
  if (!n) return null;
  let o = n.parentElement;
  for (; o; ) {
    if (D2(o)) return o;
    o = o.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, H2 = typeof window < "u" ? ee.useLayoutEffect : ee.useEffect, Ln = (n) => {
  n.current && (clearTimeout(n.current), n.current = null);
}, B2 = "DEFAULT_TOOLTIP_ID", W2 = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, U2 = ee.createContext({ getTooltipData: () => W2 });
function iv(n = B2) {
  return ee.useContext(U2).getTooltipData(n);
}
var ti = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Sc = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const $2 = ({ forwardRef: n, id: o, className: l, classNameArrow: s, variant: u = "dark", anchorId: c, anchorSelect: d, place: p = "top", offset: g = 10, events: h = ["hover"], openOnClick: v = !1, positionStrategy: w = "absolute", middlewares: y, wrapper: x, delayShow: I = 0, delayHide: O = 0, float: T = !1, hidden: C = !1, noArrow: R = !1, clickable: B = !1, closeOnEsc: $ = !1, closeOnScroll: D = !1, closeOnResize: N = !1, openEvents: b, closeEvents: S, globalCloseEvents: E, imperativeModeOnly: L, style: V, position: Q, afterShow: ie, afterHide: K, disableTooltip: fe, content: we, contentWrapperRef: re, isOpen: U, defaultIsOpen: Y = !1, setIsOpen: _, activeAnchor: z, setActiveAnchor: G, border: q, opacity: de, arrowColor: ke, role: ge = "tooltip" }) => {
  var Ee;
  const F = ee.useRef(null), oe = ee.useRef(null), xe = ee.useRef(null), pe = ee.useRef(null), Ie = ee.useRef(null), [Be, Ue] = ee.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: p }), [Re, ze] = ee.useState(!1), [Ve, Ne] = ee.useState(!1), [_e, Ge] = ee.useState(null), St = ee.useRef(!1), kt = ee.useRef(null), { anchorRefs: Nt, setActiveAnchor: tt } = iv(o), it = ee.useRef(!1), [Xe, lt] = ee.useState([]), pt = ee.useRef(!1), Kt = v || h.includes("click"), sn = Kt || (b == null ? void 0 : b.click) || (b == null ? void 0 : b.dblclick) || (b == null ? void 0 : b.mousedown), Et = b ? { ...b } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !b && Kt && Object.assign(Et, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const Tt = S ? { ...S } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !S && Kt && Object.assign(Tt, { mouseleave: !1, blur: !1, mouseout: !1 });
  const Lt = E ? { ...E } : { escape: $ || !1, scroll: D || !1, resize: N || !1, clickOutsideAnchor: sn || !1 };
  L && (Object.assign(Et, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Tt, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(Lt, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), H2(() => (pt.current = !0, () => {
    pt.current = !1;
  }), []);
  const ut = (ue) => {
    pt.current && (ue && Ne(!0), setTimeout(() => {
      pt.current && (_ == null || _(ue), U === void 0 && ze(ue));
    }, 10));
  };
  ee.useEffect(() => {
    if (U === void 0) return () => null;
    U && Ne(!0);
    const ue = setTimeout(() => {
      ze(U);
    }, 10);
    return () => {
      clearTimeout(ue);
    };
  }, [U]), ee.useEffect(() => {
    if (Re !== St.current) if (Ln(Ie), St.current = Re, Re) ie == null || ie();
    else {
      const ue = ((Le) => {
        const be = Le.match(/^([\d.]+)(ms|s)$/);
        if (!be) return 0;
        const [, Pt, It] = be;
        return Number(Pt) * (It === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      Ie.current = setTimeout(() => {
        Ne(!1), Ge(null), K == null || K();
      }, ue + 25);
    }
  }, [Re]);
  const Lo = (ue) => {
    Ue((Le) => Xc(Le, ue) ? Le : ue);
  }, gr = (ue = I) => {
    Ln(xe), Ve ? ut(!0) : xe.current = setTimeout(() => {
      ut(!0);
    }, ue);
  }, qn = (ue = O) => {
    Ln(pe), pe.current = setTimeout(() => {
      it.current || ut(!1);
    }, ue);
  }, vr = (ue) => {
    var Le;
    if (!ue) return;
    const be = (Le = ue.currentTarget) !== null && Le !== void 0 ? Le : ue.target;
    if (!(be != null && be.isConnected)) return G(null), void tt({ current: null });
    I ? gr() : ut(!0), G(be), tt({ current: be }), Ln(pe);
  }, Xn = () => {
    B ? qn(O || 100) : O ? qn() : ut(!1), Ln(xe);
  }, Zn = ({ x: ue, y: Le }) => {
    var be;
    const Pt = { getBoundingClientRect: () => ({ x: ue, y: Le, width: 0, height: 0, top: Le, left: ue, right: ue, bottom: Le }) };
    Rh({ place: (be = _e == null ? void 0 : _e.place) !== null && be !== void 0 ? be : p, offset: g, elementReference: Pt, tooltipReference: F.current, tooltipArrowReference: oe.current, strategy: w, middlewares: y, border: q }).then((It) => {
      Lo(It);
    });
  }, gn = (ue) => {
    if (!ue) return;
    const Le = ue, be = { x: Le.clientX, y: Le.clientY };
    Zn(be), kt.current = be;
  }, En = (ue) => {
    var Le;
    if (!Re) return;
    const be = ue.target;
    be.isConnected && (!((Le = F.current) === null || Le === void 0) && Le.contains(be) || [document.querySelector(`[id='${c}']`), ...Xe].some((Pt) => Pt == null ? void 0 : Pt.contains(be)) || (ut(!1), Ln(xe)));
  }, ao = Ph(vr, 50), Ot = Ph(Xn, 50), en = (ue) => {
    Ot.cancel(), ao(ue);
  }, Oe = () => {
    ao.cancel(), Ot();
  }, Ye = ee.useCallback(() => {
    var ue, Le;
    const be = (ue = _e == null ? void 0 : _e.position) !== null && ue !== void 0 ? ue : Q;
    be ? Zn(be) : T ? kt.current && Zn(kt.current) : z != null && z.isConnected && Rh({ place: (Le = _e == null ? void 0 : _e.place) !== null && Le !== void 0 ? Le : p, offset: g, elementReference: z, tooltipReference: F.current, tooltipArrowReference: oe.current, strategy: w, middlewares: y, border: q }).then((Pt) => {
      pt.current && Lo(Pt);
    });
  }, [Re, z, we, V, p, _e == null ? void 0 : _e.place, g, w, Q, _e == null ? void 0 : _e.position, T]);
  ee.useEffect(() => {
    var ue, Le;
    const be = new Set(Nt);
    Xe.forEach((Je) => {
      fe != null && fe(Je) || be.add({ current: Je });
    });
    const Pt = document.querySelector(`[id='${c}']`);
    Pt && !(fe != null && fe(Pt)) && be.add({ current: Pt });
    const It = () => {
      ut(!1);
    }, tn = Lh(z), nn = Lh(F.current);
    Lt.scroll && (window.addEventListener("scroll", It), tn == null || tn.addEventListener("scroll", It), nn == null || nn.addEventListener("scroll", It));
    let bt = null;
    Lt.resize ? window.addEventListener("resize", It) : z && F.current && (bt = P2(z, F.current, Ye, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const an = (Je) => {
      Je.key === "Escape" && ut(!1);
    };
    Lt.escape && window.addEventListener("keydown", an), Lt.clickOutsideAnchor && window.addEventListener("click", En);
    const ct = [], Ar = (Je) => !!(Je != null && Je.target && (z != null && z.contains(Je.target))), yr = (Je) => {
      Re && Ar(Je) || vr(Je);
    }, Il = (Je) => {
      Re && Ar(Je) && Xn();
    }, gi = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], Rl = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Et).forEach(([Je, jn]) => {
      jn && (gi.includes(Je) ? ct.push({ event: Je, listener: en }) : Rl.includes(Je) && ct.push({ event: Je, listener: yr }));
    }), Object.entries(Tt).forEach(([Je, jn]) => {
      jn && (gi.includes(Je) ? ct.push({ event: Je, listener: Oe }) : Rl.includes(Je) && ct.push({ event: Je, listener: Il }));
    }), T && ct.push({ event: "pointermove", listener: gn });
    const vi = () => {
      it.current = !0;
    }, yi = () => {
      it.current = !1, Xn();
    }, wi = B && (Tt.mouseout || Tt.mouseleave);
    return wi && ((ue = F.current) === null || ue === void 0 || ue.addEventListener("mouseover", vi), (Le = F.current) === null || Le === void 0 || Le.addEventListener("mouseout", yi)), ct.forEach(({ event: Je, listener: jn }) => {
      be.forEach((xi) => {
        var st;
        (st = xi.current) === null || st === void 0 || st.addEventListener(Je, jn);
      });
    }), () => {
      var Je, jn;
      Lt.scroll && (window.removeEventListener("scroll", It), tn == null || tn.removeEventListener("scroll", It), nn == null || nn.removeEventListener("scroll", It)), Lt.resize ? window.removeEventListener("resize", It) : bt == null || bt(), Lt.clickOutsideAnchor && window.removeEventListener("click", En), Lt.escape && window.removeEventListener("keydown", an), wi && ((Je = F.current) === null || Je === void 0 || Je.removeEventListener("mouseover", vi), (jn = F.current) === null || jn === void 0 || jn.removeEventListener("mouseout", yi)), ct.forEach(({ event: xi, listener: st }) => {
        be.forEach((va) => {
          var uo;
          (uo = va.current) === null || uo === void 0 || uo.removeEventListener(xi, st);
        });
      });
    };
  }, [z, Ye, Ve, Nt, Xe, b, S, E, Kt, I, O]), ee.useEffect(() => {
    var ue, Le;
    let be = (Le = (ue = _e == null ? void 0 : _e.anchorSelect) !== null && ue !== void 0 ? ue : d) !== null && Le !== void 0 ? Le : "";
    !be && o && (be = `[data-tooltip-id='${o.replace(/'/g, "\\'")}']`);
    const Pt = new MutationObserver((It) => {
      const tn = [], nn = [];
      It.forEach((bt) => {
        if (bt.type === "attributes" && bt.attributeName === "data-tooltip-id" && (bt.target.getAttribute("data-tooltip-id") === o ? tn.push(bt.target) : bt.oldValue === o && nn.push(bt.target)), bt.type === "childList") {
          if (z) {
            const an = [...bt.removedNodes].filter((ct) => ct.nodeType === 1);
            if (be) try {
              nn.push(...an.filter((ct) => ct.matches(be))), nn.push(...an.flatMap((ct) => [...ct.querySelectorAll(be)]));
            } catch {
            }
            an.some((ct) => {
              var Ar;
              return !!(!((Ar = ct == null ? void 0 : ct.contains) === null || Ar === void 0) && Ar.call(ct, z)) && (Ne(!1), ut(!1), G(null), Ln(xe), Ln(pe), !0);
            });
          }
          if (be) try {
            const an = [...bt.addedNodes].filter((ct) => ct.nodeType === 1);
            tn.push(...an.filter((ct) => ct.matches(be))), tn.push(...an.flatMap((ct) => [...ct.querySelectorAll(be)]));
          } catch {
          }
        }
      }), (tn.length || nn.length) && lt((bt) => [...bt.filter((an) => !nn.includes(an)), ...tn]);
    });
    return Pt.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      Pt.disconnect();
    };
  }, [o, d, _e == null ? void 0 : _e.anchorSelect, z]), ee.useEffect(() => {
    Ye();
  }, [Ye]), ee.useEffect(() => {
    if (!(re != null && re.current)) return () => null;
    const ue = new ResizeObserver(() => {
      setTimeout(() => Ye());
    });
    return ue.observe(re.current), () => {
      ue.disconnect();
    };
  }, [we, re == null ? void 0 : re.current]), ee.useEffect(() => {
    var ue;
    const Le = document.querySelector(`[id='${c}']`), be = [...Xe, Le];
    z && be.includes(z) || G((ue = Xe[0]) !== null && ue !== void 0 ? ue : Le);
  }, [c, Xe, z]), ee.useEffect(() => (Y && ut(!0), () => {
    Ln(xe), Ln(pe);
  }), []), ee.useEffect(() => {
    var ue;
    let Le = (ue = _e == null ? void 0 : _e.anchorSelect) !== null && ue !== void 0 ? ue : d;
    if (!Le && o && (Le = `[data-tooltip-id='${o.replace(/'/g, "\\'")}']`), Le) try {
      const be = Array.from(document.querySelectorAll(Le));
      lt(be);
    } catch {
      lt([]);
    }
  }, [o, d, _e == null ? void 0 : _e.anchorSelect]), ee.useEffect(() => {
    xe.current && (Ln(xe), gr(I));
  }, [I]);
  const $t = (Ee = _e == null ? void 0 : _e.content) !== null && Ee !== void 0 ? Ee : we, Jn = Re && Object.keys(Be.tooltipStyles).length > 0;
  return ee.useImperativeHandle(n, () => ({ open: (ue) => {
    if (ue != null && ue.anchorSelect) try {
      document.querySelector(ue.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${ue.anchorSelect}" is not a valid CSS selector`);
    }
    Ge(ue ?? null), ue != null && ue.delay ? gr(ue.delay) : ut(!0);
  }, close: (ue) => {
    ue != null && ue.delay ? qn(ue.delay) : ut(!1);
  }, activeAnchor: z, place: Be.place, isOpen: !!(Ve && !C && $t && Jn) })), Ve && !C && $t ? ae.createElement(x, { id: o, role: ge, className: qc("react-tooltip", ti.tooltip, Sc.tooltip, Sc[u], l, `react-tooltip__place-${Be.place}`, ti[Jn ? "show" : "closing"], Jn ? "react-tooltip__show" : "react-tooltip__closing", w === "fixed" && ti.fixed, B && ti.clickable), onTransitionEnd: (ue) => {
    Ln(Ie), Re || ue.propertyName !== "opacity" || (Ne(!1), Ge(null), K == null || K());
  }, style: { ...V, ...Be.tooltipStyles, opacity: de !== void 0 && Jn ? de : void 0 }, ref: F }, $t, ae.createElement(x, { className: qc("react-tooltip-arrow", ti.arrow, Sc.arrow, s, R && ti.noArrow), style: { ...Be.tooltipArrowStyles, background: ke ? `linear-gradient(to right bottom, transparent 50%, ${ke} 50%)` : void 0 }, ref: oe })) : null;
}, V2 = ({ content: n }) => ae.createElement("span", { dangerouslySetInnerHTML: { __html: n } }), Y2 = ae.forwardRef(({ id: n, anchorId: o, anchorSelect: l, content: s, html: u, render: c, className: d, classNameArrow: p, variant: g = "dark", place: h = "top", offset: v = 10, wrapper: w = "div", children: y = null, events: x = ["hover"], openOnClick: I = !1, positionStrategy: O = "absolute", middlewares: T, delayShow: C = 0, delayHide: R = 0, float: B = !1, hidden: $ = !1, noArrow: D = !1, clickable: N = !1, closeOnEsc: b = !1, closeOnScroll: S = !1, closeOnResize: E = !1, openEvents: L, closeEvents: V, globalCloseEvents: Q, imperativeModeOnly: ie = !1, style: K, position: fe, isOpen: we, defaultIsOpen: re = !1, disableStyleInjection: U = !1, border: Y, opacity: _, arrowColor: z, setIsOpen: G, afterShow: q, afterHide: de, disableTooltip: ke, role: ge = "tooltip" }, Ee) => {
  const [F, oe] = ee.useState(s), [xe, pe] = ee.useState(u), [Ie, Be] = ee.useState(h), [Ue, Re] = ee.useState(g), [ze, Ve] = ee.useState(v), [Ne, _e] = ee.useState(C), [Ge, St] = ee.useState(R), [kt, Nt] = ee.useState(B), [tt, it] = ee.useState($), [Xe, lt] = ee.useState(w), [pt, Kt] = ee.useState(x), [sn, Et] = ee.useState(O), [Tt, Lt] = ee.useState(null), [ut, Lo] = ee.useState(null), gr = ee.useRef(U), { anchorRefs: qn, activeAnchor: vr } = iv(n), Xn = (Ot) => Ot == null ? void 0 : Ot.getAttributeNames().reduce((en, Oe) => {
    var Ye;
    return Oe.startsWith("data-tooltip-") && (en[Oe.replace(/^data-tooltip-/, "")] = (Ye = Ot == null ? void 0 : Ot.getAttribute(Oe)) !== null && Ye !== void 0 ? Ye : null), en;
  }, {}), Zn = (Ot) => {
    const en = { place: (Oe) => {
      var Ye;
      Be((Ye = Oe) !== null && Ye !== void 0 ? Ye : h);
    }, content: (Oe) => {
      oe(Oe ?? s);
    }, html: (Oe) => {
      pe(Oe ?? u);
    }, variant: (Oe) => {
      var Ye;
      Re((Ye = Oe) !== null && Ye !== void 0 ? Ye : g);
    }, offset: (Oe) => {
      Ve(Oe === null ? v : Number(Oe));
    }, wrapper: (Oe) => {
      var Ye;
      lt((Ye = Oe) !== null && Ye !== void 0 ? Ye : w);
    }, events: (Oe) => {
      const Ye = Oe == null ? void 0 : Oe.split(" ");
      Kt(Ye ?? x);
    }, "position-strategy": (Oe) => {
      var Ye;
      Et((Ye = Oe) !== null && Ye !== void 0 ? Ye : O);
    }, "delay-show": (Oe) => {
      _e(Oe === null ? C : Number(Oe));
    }, "delay-hide": (Oe) => {
      St(Oe === null ? R : Number(Oe));
    }, float: (Oe) => {
      Nt(Oe === null ? B : Oe === "true");
    }, hidden: (Oe) => {
      it(Oe === null ? $ : Oe === "true");
    }, "class-name": (Oe) => {
      Lt(Oe);
    } };
    Object.values(en).forEach((Oe) => Oe(null)), Object.entries(Ot).forEach(([Oe, Ye]) => {
      var $t;
      ($t = en[Oe]) === null || $t === void 0 || $t.call(en, Ye);
    });
  };
  ee.useEffect(() => {
    oe(s);
  }, [s]), ee.useEffect(() => {
    pe(u);
  }, [u]), ee.useEffect(() => {
    Be(h);
  }, [h]), ee.useEffect(() => {
    Re(g);
  }, [g]), ee.useEffect(() => {
    Ve(v);
  }, [v]), ee.useEffect(() => {
    _e(C);
  }, [C]), ee.useEffect(() => {
    St(R);
  }, [R]), ee.useEffect(() => {
    Nt(B);
  }, [B]), ee.useEffect(() => {
    it($);
  }, [$]), ee.useEffect(() => {
    Et(O);
  }, [O]), ee.useEffect(() => {
    gr.current !== U && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [U]), ee.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: U === "core", disableBase: U } }));
  }, []), ee.useEffect(() => {
    var Ot;
    const en = new Set(qn);
    let Oe = l;
    if (!Oe && n && (Oe = `[data-tooltip-id='${n.replace(/'/g, "\\'")}']`), Oe) try {
      document.querySelectorAll(Oe).forEach((Le) => {
        en.add({ current: Le });
      });
    } catch {
      console.warn(`[react-tooltip] "${Oe}" is not a valid CSS selector`);
    }
    const Ye = document.querySelector(`[id='${o}']`);
    if (Ye && en.add({ current: Ye }), !en.size) return () => null;
    const $t = (Ot = ut ?? Ye) !== null && Ot !== void 0 ? Ot : vr.current, Jn = new MutationObserver((Le) => {
      Le.forEach((be) => {
        var Pt;
        if (!$t || be.type !== "attributes" || !(!((Pt = be.attributeName) === null || Pt === void 0) && Pt.startsWith("data-tooltip-"))) return;
        const It = Xn($t);
        Zn(It);
      });
    }), ue = { attributes: !0, childList: !1, subtree: !1 };
    if ($t) {
      const Le = Xn($t);
      Zn(Le), Jn.observe($t, ue);
    }
    return () => {
      Jn.disconnect();
    };
  }, [qn, vr, ut, o, l]), ee.useEffect(() => {
    K != null && K.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), Y && !Oh("border", `${Y}`) && console.warn(`[react-tooltip] "${Y}" is not a valid \`border\`.`), K != null && K.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), _ && !Oh("opacity", `${_}`) && console.warn(`[react-tooltip] "${_}" is not a valid \`opacity\`.`);
  }, []);
  let gn = y;
  const En = ee.useRef(null);
  if (c) {
    const Ot = c({ content: (ut == null ? void 0 : ut.getAttribute("data-tooltip-content")) || F || null, activeAnchor: ut });
    gn = Ot ? ae.createElement("div", { ref: En, className: "react-tooltip-content-wrapper" }, Ot) : null;
  } else F && (gn = F);
  xe && (gn = ae.createElement(V2, { content: xe }));
  const ao = { forwardRef: Ee, id: n, anchorId: o, anchorSelect: l, className: qc(d, Tt), classNameArrow: p, content: gn, contentWrapperRef: En, place: Ie, variant: Ue, offset: ze, wrapper: Xe, events: pt, openOnClick: I, positionStrategy: sn, middlewares: T, delayShow: Ne, delayHide: Ge, float: kt, hidden: tt, noArrow: D, clickable: N, closeOnEsc: b, closeOnScroll: S, closeOnResize: E, openEvents: L, closeEvents: V, globalCloseEvents: Q, imperativeModeOnly: ie, style: K, position: fe, isOpen: we, defaultIsOpen: re, border: Y, opacity: _, arrowColor: z, setIsOpen: G, afterShow: q, afterHide: de, disableTooltip: ke, activeAnchor: ut, setActiveAnchor: (Ot) => Lo(Ot), role: ge };
  return ae.createElement($2, { ...ao });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (n) => {
  n.detail.disableCore || Ih({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), n.detail.disableBase || Ih({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const zh = {
  "help-icon": "_help-icon_12haz_1",
  "help-tooltip": "_help-tooltip_12haz_7"
}, K2 = {
  Id: "Unique identifier for the datafile field",
  Label: "Specifies a presentation label for the datafile field being described",
  Description: "Detailed explanation or definition of what the field captures",
  Section: "Specifies a section, or group name, for each entry",
  Cardinality: "Indicates if the field accepts one or multiple values",
  Terms: "Ontology terms that describe the field",
  Datatype: "Expected data type (e.g., string, integer, date)",
  Pattern: "Regex pattern values must match",
  Unit: "Units for values that represent quantities",
  Enumeration: "List of allowed values and meanings",
  MissingValueCodes: "Reasons for missing values",
  Notes: "Free-text field for additional comments",
  Provenance: "Provenance source",
  SeeAlso: "URL to additional documentation"
};
function lv({ id: n, field: o }) {
  const l = K2[o];
  return l ? /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx(zn, { icon: Mw, className: zh["help-icon"], "data-tooltip-place": "top", "data-tooltip-position-strategy": "fixed", "data-tooltip-id": "help-tooltip-" + n + "-" + o, "data-tooltip-content": l }),
    /* @__PURE__ */ M.jsx(Y2, { id: "help-tooltip-" + n + "-" + o, className: zh["help-tooltip"], opacity: 1 })
  ] }) : null;
}
function Q2({ variable: n, searchTerm: o, allFields: l }) {
  const s = l.filter((u) => u !== "Id").map((u, c) => {
    if (n[u] === "" || n[u] === void 0) return;
    const d = ["Enumeration", "MissingValueCodes"].includes(u);
    let p = /* @__PURE__ */ M.jsx("span", { className: tl.text, children: /* @__PURE__ */ M.jsx(eo, { text: n[u], searchTerm: o }) });
    return u === "Terms" && (p = /* @__PURE__ */ M.jsx(Yg, { terms: n[u], searchTerm: o })), /* @__PURE__ */ M.jsxs("div", { className: tl["dd-field-block"], children: [
      /* @__PURE__ */ M.jsxs("div", { className: tl.flex, children: [
        /* @__PURE__ */ M.jsxs("span", { className: tl.field, children: [
          /* @__PURE__ */ M.jsx(lv, { id: n.Id, field: u }),
          /* @__PURE__ */ M.jsxs("strong", { children: [
            u,
            ":"
          ] })
        ] }),
        !d && p
      ] }),
      d && /* @__PURE__ */ M.jsx(Kg, { values: n[u], searchTerm: o })
    ] }, c);
  });
  return /* @__PURE__ */ M.jsxs("div", { className: tl.card, children: [
    /* @__PURE__ */ M.jsx("h3", { children: /* @__PURE__ */ M.jsx(eo, { text: n.Id, searchTerm: o }) }),
    s
  ] });
}
const G2 = "_scroll_wasmp_1", q2 = {
  scroll: G2
};
function sv({ scrollRef: n }) {
  return /* @__PURE__ */ M.jsx(zn, { icon: bw, className: q2.scroll, onClick: () => {
    var o;
    return (o = n.current) == null ? void 0 : o.scrollToIndex({ index: 0, behavior: "smooth" });
  } });
}
function X2({ activeView: n, variables: o, searchTerm: l, allFields: s }) {
  const u = ee.useRef(null), [c, d] = ee.useState(!1), [p, g] = US(), h = g < 1120 ? 2 : 3, v = Math.ceil(o.length / h);
  return /* @__PURE__ */ M.jsxs("div", { ref: p, style: { display: n === "list" ? "block" : "none" }, children: [
    /* @__PURE__ */ M.jsx(
      hS,
      {
        ref: u,
        style: { height: 750 },
        totalCount: v,
        itemContent: (w) => {
          const y = o.slice(
            w * h,
            (w + 1) * h
          );
          return /* @__PURE__ */ M.jsx("div", { className: wh.cards, children: y.map((x, I) => /* @__PURE__ */ M.jsx(Q2, { variable: x, searchTerm: l, allFields: s }, I)) });
        },
        atTopStateChange: (w) => d(!w),
        components: {
          List: ee.forwardRef((w, y) => /* @__PURE__ */ M.jsx("div", { ref: y, ...w, className: wh.container }))
        }
      }
    ),
    c && /* @__PURE__ */ M.jsx(sv, { scrollRef: u })
  ] });
}
const Z2 = "_notice_1mckp_1", J2 = "_icon_1mckp_8", Nh = {
  notice: Z2,
  icon: J2
}, ek = "_options_t8263_1", tk = {
  options: ek
}, nk = "_wrapper_7j5yf_1", rk = "_open_7j5yf_4", ok = "_picker_7j5yf_4", ik = "_icon_7j5yf_8", lk = "_dropdown_7j5yf_11", nl = {
  wrapper: nk,
  open: rk,
  picker: ok,
  icon: ik,
  dropdown: lk
};
function sk({ checkedColumns: n, setCheckedColumns: o, allFields: l }) {
  const [s, u] = ee.useState(!1), c = ee.useRef(null);
  return ee.useEffect(() => {
    const d = (p) => {
      var g;
      (g = c.current) != null && g.contains(p.target) || u(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }), /* @__PURE__ */ M.jsxs("div", { className: `${nl.wrapper} ${s ? nl.open : ""}`, ref: c, children: [
    /* @__PURE__ */ M.jsxs("button", { className: nl.picker, onClick: () => u(!s), children: [
      /* @__PURE__ */ M.jsx(zn, { icon: jw, className: nl.icon }),
      "Manage Columns"
    ] }),
    /* @__PURE__ */ M.jsx("div", { className: nl.dropdown, children: l.map((d, p) => /* @__PURE__ */ M.jsxs("label", { children: [
      /* @__PURE__ */ M.jsx("input", { type: "checkbox", checked: n.includes(d), disabled: d === "Id", value: d, onChange: (g) => g.target.checked ? o((h) => [...h, g.target.value]) : o((h) => h.filter((v) => v !== g.target.value)) }),
      d
    ] }, p)) })
  ] });
}
function ak({ sortField: n, setSortField: o, sortDirection: l, setSortDirection: s, checkedColumns: u, setCheckedColumns: c, sortableColumns: d, allFields: p }) {
  return /* @__PURE__ */ M.jsxs("div", { className: tk.options, children: [
    /* @__PURE__ */ M.jsxs("div", { children: [
      "Sort by:",
      /* @__PURE__ */ M.jsx("select", { onChange: (g) => o(g.target.value), value: n, children: d.map((g, h) => /* @__PURE__ */ M.jsx("option", { value: g, children: g }, h)) }),
      /* @__PURE__ */ M.jsxs("select", { onChange: (g) => s(g.target.value), value: l, children: [
        /* @__PURE__ */ M.jsx("option", { value: "Ascending", children: "Ascending" }),
        /* @__PURE__ */ M.jsx("option", { value: "Descending", children: "Descending" })
      ] })
    ] }),
    /* @__PURE__ */ M.jsx(sk, { checkedColumns: u, setCheckedColumns: c, allFields: p })
  ] });
}
const uk = "_table_8748a_1", ck = {
  table: uk
}, fk = "_wrapper_nbs3r_1", dk = "_open_nbs3r_5", pk = "_icon_nbs3r_5", mk = "_active_nbs3r_8", hk = "_dropdown_nbs3r_11", rl = {
  wrapper: fk,
  open: dk,
  icon: pk,
  active: mk,
  dropdown: hk
};
function gk({ field: n, filters: o, setFilters: l, allValues: s, filteredValues: u }) {
  const [c, d] = ee.useState(!1), p = ee.useRef(null);
  return ee.useEffect(() => {
    const g = (h) => {
      var v;
      (v = p.current) != null && v.contains(h.target) || d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }), /* @__PURE__ */ M.jsxs("div", { className: `${rl.wrapper} ${c ? rl.open : ""}`, ref: p, children: [
    /* @__PURE__ */ M.jsx(zn, { icon: Fw, className: `${rl.icon} ${o[n].length > 0 ? rl.active : ""}`, onClick: () => d(!c) }),
    /* @__PURE__ */ M.jsx("div", { className: rl.dropdown, children: s[n].map((g, h) => /* @__PURE__ */ M.jsxs("label", { children: [
      /* @__PURE__ */ M.jsx("input", { type: "checkbox", checked: o[n].includes(g), disabled: !u[n].includes(g), value: g, onChange: (v) => v.target.checked ? l((w) => ({ ...w, [n]: [...w[n], v.target.value] })) : l((w) => ({ ...w, [n]: w[n].filter((y) => y !== v.target.value) })) }),
      g
    ] }, h)) })
  ] });
}
function vk({ valid: n, variables: o, searchTerm: l, checkedColumns: s, filters: u, setFilters: c, allValues: d, filteredValues: p, tableRef: g, setShowScrollTop: h }) {
  const v = {
    Id: 200,
    Section: 120,
    Label: 200,
    Datatype: void 0,
    Terms: 140,
    Cardinality: void 0,
    Pattern: void 0,
    Unit: void 0,
    Description: void 0,
    Enumeration: 300,
    MissingValueCodes: 350,
    Notes: void 0,
    Provenance: void 0,
    SeeAlso: void 0
  }, w = n ? Object.keys(v).filter((I) => s.includes(I)) : [...new Set(o.flatMap((I) => Object.keys(I)))], y = w.map((I, O) => /* @__PURE__ */ M.jsxs("th", { style: v[I] !== void 0 ? { minWidth: v[I] } : void 0, children: [
    /* @__PURE__ */ M.jsx(lv, { id: "table", field: I }),
    I,
    Object.keys(u).includes(I) && /* @__PURE__ */ M.jsx(gk, { field: I, filters: u, setFilters: c, allValues: d, filteredValues: p })
  ] }, O)), x = o.map((I) => w.map((O, T) => {
    let C = /* @__PURE__ */ M.jsx(eo, { text: I[O], searchTerm: l });
    return O === "Terms" ? C = /* @__PURE__ */ M.jsx(Yg, { terms: I[O], searchTerm: l }) : ["Enumeration", "MissingValueCodes"].includes(O) && (C = I[O] === "" || I[O] === void 0 ? /* @__PURE__ */ M.jsx(M.Fragment, { children: I[O] }) : /* @__PURE__ */ M.jsx(Kg, { values: I[O], searchTerm: l })), /* @__PURE__ */ M.jsx("td", { children: C }, T);
  }));
  return /* @__PURE__ */ M.jsx(
    RS,
    {
      ref: g,
      className: ck.table,
      totalCount: x.length,
      itemContent: (I) => x[I],
      fixedHeaderContent: () => /* @__PURE__ */ M.jsx("tr", { children: y }),
      atTopStateChange: (I) => h(!I)
    }
  );
}
function yk(n) {
  if (!(n != null && n.length)) return { rows: n, columns: [] };
  const l = Array.from(
    n.reduce((u, c) => (Object.keys(c || {}).forEach((d) => u.add(d)), u), /* @__PURE__ */ new Set())
  ).filter(
    (u) => n.some((c) => {
      const d = c == null ? void 0 : c[u];
      return d != null && String(d).trim() !== "";
    })
  );
  return { rows: n.map((u) => {
    const c = {};
    for (const d of l) c[d] = (u == null ? void 0 : u[d]) ?? "";
    return c;
  }), columns: l };
}
function wk({
  valid: n,
  activeView: o,
  variables: l,
  allValues: s,
  filteredValues: u,
  searchTerm: c,
  filters: d,
  setFilters: p,
  allFields: g
}) {
  const [h, v] = ee.useState(!1), [w, y] = ee.useState(
    ["Id", "Section", "Label", "Datatype", "Cardinality", "Enumeration", "MissingValueCodes"].filter((N) => g.includes(N))
  ), [x, I] = ee.useState("Id"), [O, T] = ee.useState("Ascending"), C = ee.useMemo(() => n ? [...l].sort(
    (b, S) => O === "Ascending" ? (b[x] ?? "").localeCompare(S[x] ?? "") : (S[x] ?? "").localeCompare(b[x] ?? "")
  ) : l, [n, l, x, O]), R = ee.useRef(null), B = ["Id", "Section", "Label", "Datatype", "Cardinality"].filter((N) => g.includes(N)), { rows: $, columns: D } = ee.useMemo(() => n ? { rows: C, columns: [] } : yk(C), [n, C]);
  return ee.useEffect(() => {
    !n && D.length && y(D);
  }, [n, D]), /* @__PURE__ */ M.jsxs("div", { style: { display: o === "table" || !n ? "block" : "none" }, children: [
    n && B.length > 0 && /* @__PURE__ */ M.jsx(
      ak,
      {
        sortField: x,
        setSortField: I,
        sortDirection: O,
        setSortDirection: T,
        checkedColumns: w,
        setCheckedColumns: y,
        sortableColumns: B,
        allFields: g
      }
    ),
    !n && /* @__PURE__ */ M.jsxs("div", { className: Nh.notice, children: [
      /* @__PURE__ */ M.jsx(zn, { icon: zw, className: Nh.icon }),
      "Limited view: Unsupported data format. Please ensure data follows",
      " ",
      /* @__PURE__ */ M.jsx(
        "a",
        {
          target: "_blank",
          rel: "noreferrer",
          href: "https://github.com/bmir-radx/radx-data-dictionary-specification/blob/main/radx-data-dictionary-specification.md",
          children: "these specifications"
        }
      ),
      "."
    ] }),
    /* @__PURE__ */ M.jsx(
      vk,
      {
        valid: n,
        variables: n ? C : $,
        searchTerm: c,
        checkedColumns: w,
        filters: d,
        setFilters: p,
        allValues: s,
        filteredValues: u,
        tableRef: R,
        setShowScrollTop: v
      }
    ),
    h && /* @__PURE__ */ M.jsx(sv, { scrollRef: R })
  ] });
}
function xk({ valid: n, activeView: o, variables: l, searchTerm: s, allFields: u }) {
  const c = ["Section", "Datatype", "Cardinality", "Unit"].filter((y) => u.includes(y)), [d, p] = ee.useState(c.reduce((y, x) => (y[x] = [], y), {})), g = c.reduce((y, x) => (y[x] = [...new Set(l.map((I) => I[x]).filter((I) => I.trim() !== ""))].sort(), y), {}), h = l.filter((y) => {
    for (const x in y)
      if (typeof y[x] == "string" && y[x].toLowerCase().includes(s.toLowerCase())) return !0;
  }), v = c.reduce((y, x) => (y[x] = [...new Set(h.map((I) => I[x]).filter((I) => I.trim() !== ""))], y), {}), w = c.reduce((y, x) => {
    const I = d[x].filter((O) => v[x].includes(O));
    return I.length === 0 ? y : y.filter((O) => I.includes(O[x]));
  }, h);
  return /* @__PURE__ */ M.jsxs("div", { className: qm.content, children: [
    /* @__PURE__ */ M.jsxs("p", { className: qm.count, children: [
      (!n || o === "table") && Object.values(d).some((y) => y.length > 0) ? `${w.length} of ` : "",
      h.length,
      " Result(s)"
    ] }),
    n && /* @__PURE__ */ M.jsx(X2, { activeView: o, variables: h, searchTerm: s, allFields: u }),
    /* @__PURE__ */ M.jsx(wk, { valid: n, activeView: o, variables: w, allValues: g, filteredValues: v, searchTerm: s, filters: d, setFilters: p, allFields: u })
  ] });
}
const Sk = "_error_21vtf_1", kk = "_icon_21vtf_28", kc = {
  error: Sk,
  "error-button": "_error-button_21vtf_10",
  icon: kk
};
function bh({ message: n }) {
  return /* @__PURE__ */ M.jsxs("div", { className: kc.error, children: [
    /* @__PURE__ */ M.jsx("h2", { children: "Hmm..." }),
    /* @__PURE__ */ M.jsx("p", { children: n }),
    /* @__PURE__ */ M.jsxs("button", { className: kc["error-button"], onClick: () => window.location.reload(), children: [
      /* @__PURE__ */ M.jsx(zn, { icon: Dw, className: kc.icon }),
      "Reload"
    ] })
  ] });
}
function _k({ data: n = "", theme: o = "light", initialView: l = "list", showSearch: s = !0, heading: u = "Data Dictionary Viewer" }) {
  const [c, d] = ee.useState(l), [p, g] = ee.useState(""), [h, v] = ee.useState([]), [w, y] = ee.useState(!0), [x, I] = ee.useState(!1), [O, T] = ee.useTransition(), C = (N) => {
    T(() => g(N.target.value));
  }, R = (N) => {
    $w.parse(N, {
      header: !0,
      skipEmptyLines: !0,
      complete: (b) => {
        v(b.data), y(!1);
      }
    });
  }, B = (N) => {
    N.toLowerCase().endsWith(".csv") ? fetch(N).then((b) => {
      if (b.ok) return b.text();
      throw new Error("Request failed!");
    }).then((b) => R(b)).catch(() => {
      y(!1), I(!0);
    }) : N.toLowerCase().includes("radxdatahub") ? fetch(N).then((b) => {
      if (b.ok) return b.json();
      throw new Error("Request failed!");
    }).then((b) => R(b.data)).catch(() => {
      y(!1), I(!0);
    }) : R(N);
  };
  if (ee.useEffect(() => {
    B(n);
  }, [n]), w)
    return /* @__PURE__ */ M.jsx(zn, { icon: Qm, spin: !0, className: $n.fetch });
  if (x)
    return /* @__PURE__ */ M.jsx(bh, { message: "Unable to fetch data." });
  if (h.length === 0)
    return /* @__PURE__ */ M.jsx(bh, { message: "No data provided." });
  const $ = ["Id", "Section", "Label", "Datatype", "Terms", "Cardinality", "Pattern", "Unit", "Description", "Enumeration", "MissingValueCodes", "Notes", "Provenance", "SeeAlso"].filter((N) => Object.keys(h[0]).includes(N)), D = !($.length === 0 || !$.includes("Id"));
  return /* @__PURE__ */ M.jsx("div", { className: `${$n.container} ${o}`, children: /* @__PURE__ */ M.jsxs("div", { className: $n.main, children: [
    u && /* @__PURE__ */ M.jsx("h1", { className: $n.title, children: u }),
    /* @__PURE__ */ M.jsxs("div", { className: $n.search, children: [
      s && /* @__PURE__ */ M.jsx(nx, { changeHandler: C }),
      O && /* @__PURE__ */ M.jsx(zn, { icon: Qm, spin: !0, className: $n.loader }),
      D && /* @__PURE__ */ M.jsxs("div", { className: $n.buttons, children: [
        /* @__PURE__ */ M.jsxs(
          "button",
          {
            className: c === "list" ? $n.active : "",
            onClick: () => d("list"),
            children: [
              /* @__PURE__ */ M.jsx(zn, { icon: Nw, className: $n.icon }),
              "List"
            ]
          }
        ),
        /* @__PURE__ */ M.jsxs(
          "button",
          {
            className: c === "table" ? $n.active : "",
            onClick: () => d("table"),
            children: [
              /* @__PURE__ */ M.jsx(zn, { icon: Hw, className: $n.icon }),
              "Table"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ M.jsx(xk, { valid: D, activeView: c, variables: h, searchTerm: p, allFields: $ })
  ] }) });
}
customElements.define(
  "data-dictionary-viewer",
  dy(_k, {
    props: {
      theme: "string",
      data: "string",
      initialView: "string",
      showSearch: "boolean",
      heading: "string"
    }
  })
);
//# sourceMappingURL=data-dictionary-viewer.js.map
