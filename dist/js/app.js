function Sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qu = { exports: {} }, al = {}, bu = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr = Symbol.for("react.element"), kc = Symbol.for("react.portal"), xc = Symbol.for("react.fragment"), jc = Symbol.for("react.strict_mode"), Ec = Symbol.for("react.profiler"), Nc = Symbol.for("react.provider"), Cc = Symbol.for("react.context"), _c = Symbol.for("react.forward_ref"), Tc = Symbol.for("react.suspense"), Pc = Symbol.for("react.memo"), zc = Symbol.for("react.lazy"), Vi = Symbol.iterator;
function Lc(e) {
  return e === null || typeof e != "object" ? null : (e = Vi && e[Vi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var es = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ts = Object.assign, ns = {};
function mn(e, t, n) {
  this.props = e, this.context = t, this.refs = ns, this.updater = n || es;
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rs() {
}
rs.prototype = mn.prototype;
function Ko(e, t, n) {
  this.props = e, this.context = t, this.refs = ns, this.updater = n || es;
}
var Yo = Ko.prototype = new rs();
Yo.constructor = Ko;
ts(Yo, mn.prototype);
Yo.isPureReactComponent = !0;
var Hi = Array.isArray, ls = Object.prototype.hasOwnProperty, Go = { current: null }, os = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ls.call(t, r) && !os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: rr, type: e, key: o, ref: i, props: l, _owner: Go.current };
}
function Rc(e, t) {
  return { $$typeof: rr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Xo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rr;
}
function Dc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Wi = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dc("" + e.key) : t.toString(36);
}
function _r(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case rr:
        case kc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Nl(i, 0) : r, Hi(l) ? (n = "", e != null && (n = e.replace(Wi, "$&/") + "/"), _r(l, t, n, "", function(d) {
    return d;
  })) : l != null && (Xo(l) && (l = Rc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Wi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Hi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Nl(o, u);
    i += _r(o, t, n, s, l);
  }
  else if (s = Lc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Nl(o, u++), i += _r(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return _r(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Oc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null }, Tr = { transition: null }, Mc = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: Go };
function us() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Xo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = mn;
O.Fragment = xc;
O.Profiler = Ec;
O.PureComponent = Ko;
O.StrictMode = jc;
O.Suspense = Tc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mc;
O.act = us;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ts({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Go.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ls.call(t, s) && !os.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: rr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function(e) {
  return e = { $$typeof: Cc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Nc, _context: e }, e.Consumer = e;
};
O.createElement = is;
O.createFactory = function(e) {
  var t = is.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: _c, render: e };
};
O.isValidElement = Xo;
O.lazy = function(e) {
  return { $$typeof: zc, _payload: { _status: -1, _result: e }, _init: Oc };
};
O.memo = function(e, t) {
  return { $$typeof: Pc, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = t;
  }
};
O.unstable_act = us;
O.useCallback = function(e, t) {
  return pe.current.useCallback(e, t);
};
O.useContext = function(e) {
  return pe.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return pe.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return pe.current.useEffect(e, t);
};
O.useId = function() {
  return pe.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return pe.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return pe.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return pe.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return pe.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return pe.current.useRef(e);
};
O.useState = function(e) {
  return pe.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return pe.current.useTransition();
};
O.version = "18.3.1";
bu.exports = O;
var V = bu.exports;
const Ic = /* @__PURE__ */ Sc(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fc = V, $c = Symbol.for("react.element"), Uc = Symbol.for("react.fragment"), Ac = Object.prototype.hasOwnProperty, Bc = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Ac.call(t, r) && !Vc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: $c, type: e, key: o, ref: i, props: l, _owner: Bc.current };
}
al.Fragment = Uc;
al.jsx = ss;
al.jsxs = ss;
qu.exports = al;
var a = qu.exports, as = { exports: {} }, Ce = {}, cs = { exports: {} }, ds = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(j, k) {
    var z = j.length;
    j.push(k);
    e: for (; 0 < z; ) {
      var K = z - 1 >>> 1, U = j[K];
      if (0 < l(U, k)) j[K] = k, j[z] = U, z = K;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var k = j[0], z = j.pop();
    if (z !== k) {
      j[0] = z;
      e: for (var K = 0, U = j.length, At = U >>> 1; K < At; ) {
        var Be = 2 * (K + 1) - 1, Ye = j[Be], A = Be + 1, he = j[A];
        if (0 > l(Ye, z)) A < U && 0 > l(he, Ye) ? (j[K] = he, j[A] = z, K = A) : (j[K] = Ye, j[Be] = z, K = Be);
        else if (A < U && 0 > l(he, z)) j[K] = he, j[A] = z, K = A;
        else break e;
      }
    }
    return k;
  }
  function l(j, k) {
    var z = j.sortIndex - k.sortIndex;
    return z !== 0 ? z : j.id - k.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], d = [], v = 1, h = null, m = 3, g = !1, S = !1, x = !1, M = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var k = n(d); k !== null; ) {
      if (k.callback === null) r(d);
      else if (k.startTime <= j) r(d), k.sortIndex = k.expirationTime, t(s, k);
      else break;
      k = n(d);
    }
  }
  function y(j) {
    if (x = !1, p(j), !S) if (n(s) !== null) S = !0, lt(E);
    else {
      var k = n(d);
      k !== null && Ut(y, k.startTime - j);
    }
  }
  function E(j, k) {
    S = !1, x && (x = !1, f(P), P = -1), g = !0;
    var z = m;
    try {
      for (p(k), h = n(s); h !== null && (!(h.expirationTime > k) || j && !ke()); ) {
        var K = h.callback;
        if (typeof K == "function") {
          h.callback = null, m = h.priorityLevel;
          var U = K(h.expirationTime <= k);
          k = e.unstable_now(), typeof U == "function" ? h.callback = U : h === n(s) && r(s), p(k);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var At = !0;
      else {
        var Be = n(d);
        Be !== null && Ut(y, Be.startTime - k), At = !1;
      }
      return At;
    } finally {
      h = null, m = z, g = !1;
    }
  }
  var _ = !1, T = null, P = -1, Q = 5, R = -1;
  function ke() {
    return !(e.unstable_now() - R < Q);
  }
  function C() {
    if (T !== null) {
      var j = e.unstable_now();
      R = j;
      var k = !0;
      try {
        k = T(!0, j);
      } finally {
        k ? D() : (_ = !1, T = null);
      }
    } else _ = !1;
  }
  var D;
  if (typeof c == "function") D = function() {
    c(C);
  };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), b = L.port2;
    L.port1.onmessage = C, D = function() {
      b.postMessage(null);
    };
  } else D = function() {
    M(C, 0);
  };
  function lt(j) {
    T = j, _ || (_ = !0, D());
  }
  function Ut(j, k) {
    P = M(function() {
      j(e.unstable_now());
    }, k);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    S || g || (S = !0, lt(E));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(j) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var k = 3;
        break;
      default:
        k = m;
    }
    var z = m;
    m = k;
    try {
      return j();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, k) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var z = m;
    m = j;
    try {
      return k();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(j, k, z) {
    var K = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? K + z : K) : z = K, j) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = z + U, j = { id: v++, callback: k, priorityLevel: j, startTime: z, expirationTime: U, sortIndex: -1 }, z > K ? (j.sortIndex = z, t(d, j), n(s) === null && j === n(d) && (x ? (f(P), P = -1) : x = !0, Ut(y, z - K))) : (j.sortIndex = U, t(s, j), S || g || (S = !0, lt(E))), j;
  }, e.unstable_shouldYield = ke, e.unstable_wrapCallback = function(j) {
    var k = m;
    return function() {
      var z = m;
      m = k;
      try {
        return j.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(ds);
cs.exports = ds;
var Hc = cs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc = V, Ne = Hc;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fs = /* @__PURE__ */ new Set(), An = {};
function Ft(e, t) {
  un(e, t), un(e + "Capture", t);
}
function un(e, t) {
  for (An[e] = t, e = 0; e < t.length; e++) fs.add(t[e]);
}
var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, Qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qi = {}, Ki = {};
function Kc(e) {
  return ql.call(Ki, e) ? !0 : ql.call(Qi, e) ? !1 : Qc.test(e) ? Ki[e] = !0 : (Qi[e] = !0, !1);
}
function Yc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gc(e, t, n, r) {
  if (t === null || typeof t > "u" || Yc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
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
function me(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ie[e] = new me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ie[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ie[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ie[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ie[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ie[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ie[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function Jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Zo,
    Jo
  );
  ie[t] = new me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Zo, Jo);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Zo, Jo);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qo(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gc(t, n, l, r) && (n = null), r || l === null ? Kc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Ht = Symbol.for("react.fragment"), bo = Symbol.for("react.strict_mode"), bl = Symbol.for("react.profiler"), ps = Symbol.for("react.provider"), ms = Symbol.for("react.context"), ei = Symbol.for("react.forward_ref"), eo = Symbol.for("react.suspense"), to = Symbol.for("react.suspense_list"), ti = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), hs = Symbol.for("react.offscreen"), Yi = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : (e = Yi && e[Yi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var X = Object.assign, Cl;
function Cn(e) {
  if (Cl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Cl = t && t[1] || "";
  }
  return `
` + Cl + e;
}
var _l = !1;
function Tl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (d) {
        var r = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        r = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    _l = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function Xc(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Tl(e.type, !1), e;
    case 11:
      return e = Tl(e.type.render, !1), e;
    case 1:
      return e = Tl(e.type, !0), e;
    default:
      return "";
  }
}
function no(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ht:
      return "Fragment";
    case Vt:
      return "Portal";
    case bl:
      return "Profiler";
    case bo:
      return "StrictMode";
    case eo:
      return "Suspense";
    case to:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ms:
      return (e.displayName || "Context") + ".Consumer";
    case ps:
      return (e._context.displayName || "Context") + ".Provider";
    case ei:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ti:
      return t = e.displayName || null, t !== null ? t : no(e.type) || "Memo";
    case it:
      t = e._payload, e = e._init;
      try {
        return no(e(t));
      } catch {
      }
  }
  return null;
}
function Zc(e) {
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
      return no(t);
    case 8:
      return t === bo ? "StrictMode" : "Mode";
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
function St(e) {
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
function vs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Jc(e) {
  var t = vs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = Jc(e));
}
function ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ur(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ro(e, t) {
  var n = t.checked;
  return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Gi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = St(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gs(e, t) {
  t = t.checked, t != null && qo(e, "checked", t, !1);
}
function lo(e, t) {
  gs(e, t);
  var n = St(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oo(e, t.type, n) : t.hasOwnProperty("defaultValue") && oo(e, t.type, St(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function oo(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function en(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function io(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Zi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: St(n) };
}
function ws(e, t) {
  var n = St(t.value), r = St(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ji(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ss(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ss(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var dr, ks = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (dr = dr || document.createElement("div"), dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
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
}, qc = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function(e) {
  qc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e];
  });
});
function xs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px";
}
function js(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = xs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var bc = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function so(e, t) {
  if (t) {
    if (bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function ao(e, t) {
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
var co = null;
function ni(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fo = null, tn = null, nn = null;
function qi(e) {
  if (e = ir(e)) {
    if (typeof fo != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = ml(t), fo(e.stateNode, e.type, t));
  }
}
function Es(e) {
  tn ? nn ? nn.push(e) : nn = [e] : tn = e;
}
function Ns() {
  if (tn) {
    var e = tn, t = nn;
    if (nn = tn = null, qi(e), t) for (e = 0; e < t.length; e++) qi(t[e]);
  }
}
function Cs(e, t) {
  return e(t);
}
function _s() {
}
var Pl = !1;
function Ts(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return Cs(e, t, n);
  } finally {
    Pl = !1, (tn !== null || nn !== null) && (_s(), Ns());
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ml(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var po = !1;
if (be) try {
  var wn = {};
  Object.defineProperty(wn, "passive", { get: function() {
    po = !0;
  } }), window.addEventListener("test", wn, wn), window.removeEventListener("test", wn, wn);
} catch {
  po = !1;
}
function ed(e, t, n, r, l, o, i, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var Ln = !1, Ar = null, Br = !1, mo = null, td = { onError: function(e) {
  Ln = !0, Ar = e;
} };
function nd(e, t, n, r, l, o, i, u, s) {
  Ln = !1, Ar = null, ed.apply(td, arguments);
}
function rd(e, t, n, r, l, o, i, u, s) {
  if (nd.apply(this, arguments), Ln) {
    if (Ln) {
      var d = Ar;
      Ln = !1, Ar = null;
    } else throw Error(w(198));
    Br || (Br = !0, mo = d);
  }
}
function $t(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ps(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bi(e) {
  if ($t(e) !== e) throw Error(w(188));
}
function ld(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $t(e), t === null) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return bi(l), e;
        if (o === r) return bi(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function zs(e) {
  return e = ld(e), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ls(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rs = Ne.unstable_scheduleCallback, eu = Ne.unstable_cancelCallback, od = Ne.unstable_shouldYield, id = Ne.unstable_requestPaint, J = Ne.unstable_now, ud = Ne.unstable_getCurrentPriorityLevel, ri = Ne.unstable_ImmediatePriority, Ds = Ne.unstable_UserBlockingPriority, Vr = Ne.unstable_NormalPriority, sd = Ne.unstable_LowPriority, Os = Ne.unstable_IdlePriority, cl = null, Qe = null;
function ad(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
    Qe.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var $e = Math.clz32 ? Math.clz32 : fd, cd = Math.log, dd = Math.LN2;
function fd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (cd(e) / dd | 0) | 0;
}
var fr = 64, pr = 4194304;
function Tn(e) {
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
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Tn(u) : (o &= i, o !== 0 && (r = Tn(o)));
  } else i = n & ~l, i !== 0 ? r = Tn(i) : o !== 0 && (r = Tn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - $e(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function pd(e, t) {
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
function md(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - $e(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = pd(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ho(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ms() {
  var e = fr;
  return fr <<= 1, !(fr & 4194240) && (fr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function lr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $e(t), e[t] = n;
}
function hd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - $e(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function li(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var F = 0;
function Is(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fs, oi, $s, Us, As, vo = !1, mr = [], ft = null, pt = null, mt = null, Hn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), st = [], vd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Hn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ir(t), t !== null && oi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function yd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = Sn(ft, e, t, n, r, l), !0;
    case "dragenter":
      return pt = Sn(pt, e, t, n, r, l), !0;
    case "mouseover":
      return mt = Sn(mt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Hn.set(o, Sn(Hn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Wn.set(o, Sn(Wn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Bs(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ps(n), t !== null) {
          e.blockedOn = t, As(e.priority, function() {
            $s(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      co = r, n.target.dispatchEvent(r), co = null;
    } else return t = ir(n), t !== null && oi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function nu(e, t, n) {
  Pr(e) && n.delete(t);
}
function gd() {
  vo = !1, ft !== null && Pr(ft) && (ft = null), pt !== null && Pr(pt) && (pt = null), mt !== null && Pr(mt) && (mt = null), Hn.forEach(nu), Wn.forEach(nu);
}
function kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, gd)));
}
function Qn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < mr.length) {
    kn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && kn(ft, e), pt !== null && kn(pt, e), mt !== null && kn(mt, e), Hn.forEach(t), Wn.forEach(t), n = 0; n < st.length; n++) r = st[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < st.length && (n = st[0], n.blockedOn === null); ) Bs(n), n.blockedOn === null && st.shift();
}
var rn = rt.ReactCurrentBatchConfig, Wr = !0;
function wd(e, t, n, r) {
  var l = F, o = rn.transition;
  rn.transition = null;
  try {
    F = 1, ii(e, t, n, r);
  } finally {
    F = l, rn.transition = o;
  }
}
function Sd(e, t, n, r) {
  var l = F, o = rn.transition;
  rn.transition = null;
  try {
    F = 4, ii(e, t, n, r);
  } finally {
    F = l, rn.transition = o;
  }
}
function ii(e, t, n, r) {
  if (Wr) {
    var l = yo(e, t, n, r);
    if (l === null) Al(e, t, r, Qr, n), tu(e, r);
    else if (yd(l, e, t, n, r)) r.stopPropagation();
    else if (tu(e, r), t & 4 && -1 < vd.indexOf(e)) {
      for (; l !== null; ) {
        var o = ir(l);
        if (o !== null && Fs(o), o = yo(e, t, n, r), o === null && Al(e, t, r, Qr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Al(e, t, r, null, n);
  }
}
var Qr = null;
function yo(e, t, n, r) {
  if (Qr = null, e = ni(r), e = _t(e), e !== null) if (t = $t(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ps(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Qr = e, null;
}
function Vs(e) {
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
      switch (ud()) {
        case ri:
          return 1;
        case Ds:
          return 4;
        case Vr:
        case sd:
          return 16;
        case Os:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null, ui = null, zr = null;
function Hs() {
  if (zr) return zr;
  var e, t = ui, n = t.length, r, l = "value" in ct ? ct.value : ct.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return zr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Lr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hr() {
  return !0;
}
function ru() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hr : ru, this.isPropagationStopped = ru, this;
  }
  return X(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr);
  }, persist: function() {
  }, isPersistent: hr }), t;
}
var hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, si = _e(hn), or = X({}, hn, { view: 0, detail: 0 }), kd = _e(or), Ll, Rl, xn, dl = X({}, or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ai, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Ll = e.screenX - xn.screenX, Rl = e.screenY - xn.screenY) : Rl = Ll = 0, xn = e), Ll);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Rl;
} }), lu = _e(dl), xd = X({}, dl, { dataTransfer: 0 }), jd = _e(xd), Ed = X({}, or, { relatedTarget: 0 }), Dl = _e(Ed), Nd = X({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cd = _e(Nd), _d = X({}, hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Td = _e(_d), Pd = X({}, hn, { data: 0 }), ou = _e(Pd), zd = {
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
}, Ld = {
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
}, Rd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Dd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rd[e]) ? !!t[e] : !1;
}
function ai() {
  return Dd;
}
var Od = X({}, or, { key: function(e) {
  if (e.key) {
    var t = zd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ld[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ai, charCode: function(e) {
  return e.type === "keypress" ? Lr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Md = _e(Od), Id = X({}, dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), iu = _e(Id), Fd = X({}, or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ai }), $d = _e(Fd), Ud = X({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ad = _e(Ud), Bd = X({}, dl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Vd = _e(Bd), Hd = [9, 13, 27, 32], ci = be && "CompositionEvent" in window, Rn = null;
be && "documentMode" in document && (Rn = document.documentMode);
var Wd = be && "TextEvent" in window && !Rn, Ws = be && (!ci || Rn && 8 < Rn && 11 >= Rn), uu = " ", su = !1;
function Qs(e, t) {
  switch (e) {
    case "keyup":
      return Hd.indexOf(t.keyCode) !== -1;
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
function Ks(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Wt = !1;
function Qd(e, t) {
  switch (e) {
    case "compositionend":
      return Ks(t);
    case "keypress":
      return t.which !== 32 ? null : (su = !0, uu);
    case "textInput":
      return e = t.data, e === uu && su ? null : e;
    default:
      return null;
  }
}
function Kd(e, t) {
  if (Wt) return e === "compositionend" || !ci && Qs(e, t) ? (e = Hs(), zr = ui = ct = null, Wt = !1, e) : null;
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
      return Ws && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yd[e.type] : t === "textarea";
}
function Ys(e, t, n, r) {
  Es(r), t = Kr(t, "onChange"), 0 < t.length && (n = new si("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Dn = null, Kn = null;
function Gd(e) {
  la(e, 0);
}
function fl(e) {
  var t = Yt(e);
  if (ys(t)) return e;
}
function Xd(e, t) {
  if (e === "change") return t;
}
var Gs = !1;
if (be) {
  var Ol;
  if (be) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"), Ml = typeof cu.oninput == "function";
    }
    Ol = Ml;
  } else Ol = !1;
  Gs = Ol && (!document.documentMode || 9 < document.documentMode);
}
function du() {
  Dn && (Dn.detachEvent("onpropertychange", Xs), Kn = Dn = null);
}
function Xs(e) {
  if (e.propertyName === "value" && fl(Kn)) {
    var t = [];
    Ys(t, Kn, e, ni(e)), Ts(Gd, t);
  }
}
function Zd(e, t, n) {
  e === "focusin" ? (du(), Dn = t, Kn = n, Dn.attachEvent("onpropertychange", Xs)) : e === "focusout" && du();
}
function Jd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(Kn);
}
function qd(e, t) {
  if (e === "click") return fl(t);
}
function bd(e, t) {
  if (e === "input" || e === "change") return fl(t);
}
function ef(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ae = typeof Object.is == "function" ? Object.is : ef;
function Yn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ql.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, t) {
  var n = fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fu(n);
  }
}
function Zs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Js() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document);
  }
  return t;
}
function di(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function tf(e) {
  var t = Js(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zs(n.ownerDocument.documentElement, n)) {
    if (r !== null && di(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = pu(n, o);
        var i = pu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var nf = be && "documentMode" in document && 11 >= document.documentMode, Qt = null, go = null, On = null, wo = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wo || Qt == null || Qt !== Ur(r) || (r = Qt, "selectionStart" in r && di(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), On && Yn(On, r) || (On = r, r = Kr(go, "onSelect"), 0 < r.length && (t = new si("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qt)));
}
function vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kt = { animationend: vr("Animation", "AnimationEnd"), animationiteration: vr("Animation", "AnimationIteration"), animationstart: vr("Animation", "AnimationStart"), transitionend: vr("Transition", "TransitionEnd") }, Il = {}, qs = {};
be && (qs = document.createElement("div").style, "AnimationEvent" in window || (delete Kt.animationend.animation, delete Kt.animationiteration.animation, delete Kt.animationstart.animation), "TransitionEvent" in window || delete Kt.transitionend.transition);
function pl(e) {
  if (Il[e]) return Il[e];
  if (!Kt[e]) return e;
  var t = Kt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qs) return Il[e] = t[n];
  return e;
}
var bs = pl("animationend"), ea = pl("animationiteration"), ta = pl("animationstart"), na = pl("transitionend"), ra = /* @__PURE__ */ new Map(), hu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xt(e, t) {
  ra.set(e, t), Ft(t, [e]);
}
for (var Fl = 0; Fl < hu.length; Fl++) {
  var $l = hu[Fl], rf = $l.toLowerCase(), lf = $l[0].toUpperCase() + $l.slice(1);
  xt(rf, "on" + lf);
}
xt(bs, "onAnimationEnd");
xt(ea, "onAnimationIteration");
xt(ta, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(na, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
Ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), of = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function vu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, rd(r, t, void 0, e), e.currentTarget = null;
}
function la(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, d = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        vu(l, u, d), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, d = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        vu(l, u, d), o = s;
      }
    }
  }
  if (Br) throw e = mo, Br = !1, mo = null, e;
}
function B(e, t) {
  var n = t[Eo];
  n === void 0 && (n = t[Eo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (oa(t, e, 2, !1), n.add(r));
}
function Ul(e, t, n) {
  var r = 0;
  t && (r |= 4), oa(n, e, r, t);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[yr]) {
    e[yr] = !0, fs.forEach(function(n) {
      n !== "selectionchange" && (of.has(n) || Ul(n, !1, e), Ul(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || (t[yr] = !0, Ul("selectionchange", !1, t));
  }
}
function oa(e, t, n, r) {
  switch (Vs(t)) {
    case 1:
      var l = wd;
      break;
    case 4:
      l = Sd;
      break;
    default:
      l = ii;
  }
  n = l.bind(null, t, n, e), l = void 0, !po || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Al(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = _t(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ts(function() {
    var d = o, v = ni(n), h = [];
    e: {
      var m = ra.get(e);
      if (m !== void 0) {
        var g = si, S = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Md;
            break;
          case "focusin":
            S = "focus", g = Dl;
            break;
          case "focusout":
            S = "blur", g = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = jd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = $d;
            break;
          case bs:
          case ea:
          case ta:
            g = Cd;
            break;
          case na:
            g = Ad;
            break;
          case "scroll":
            g = kd;
            break;
          case "wheel":
            g = Vd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Td;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = iu;
        }
        var x = (t & 4) !== 0, M = !x && e === "scroll", f = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, f !== null && (y = Vn(c, f), y != null && x.push(Xn(c, y, p)))), M) break;
          c = c.return;
        }
        0 < x.length && (m = new g(m, S, null, n, v), h.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== co && (S = n.relatedTarget || n.fromElement) && (_t(S) || S[et])) break e;
        if ((g || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (S = n.relatedTarget || n.toElement, g = d, S = S ? _t(S) : null, S !== null && (M = $t(S), S !== M || S.tag !== 5 && S.tag !== 6) && (S = null)) : (g = null, S = d), g !== S)) {
          if (x = lu, y = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = iu, y = "onPointerLeave", f = "onPointerEnter", c = "pointer"), M = g == null ? m : Yt(g), p = S == null ? m : Yt(S), m = new x(y, c + "leave", g, n, v), m.target = M, m.relatedTarget = p, y = null, _t(v) === d && (x = new x(f, c + "enter", S, n, v), x.target = p, x.relatedTarget = M, y = x), M = y, g && S) t: {
            for (x = g, f = S, c = 0, p = x; p; p = Bt(p)) c++;
            for (p = 0, y = f; y; y = Bt(y)) p++;
            for (; 0 < c - p; ) x = Bt(x), c--;
            for (; 0 < p - c; ) f = Bt(f), p--;
            for (; c--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Bt(x), f = Bt(f);
            }
            x = null;
          }
          else x = null;
          g !== null && yu(h, m, g, x, !1), S !== null && M !== null && yu(h, M, S, x, !0);
        }
      }
      e: {
        if (m = d ? Yt(d) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var E = Xd;
        else if (au(m)) if (Gs) E = bd;
        else {
          E = Jd;
          var _ = Zd;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = qd);
        if (E && (E = E(e, d))) {
          Ys(h, E, n, v);
          break e;
        }
        _ && _(e, m, d), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && oo(m, "number", m.value);
      }
      switch (_ = d ? Yt(d) : window, e) {
        case "focusin":
          (au(_) || _.contentEditable === "true") && (Qt = _, go = d, On = null);
          break;
        case "focusout":
          On = go = Qt = null;
          break;
        case "mousedown":
          wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wo = !1, mu(h, n, v);
          break;
        case "selectionchange":
          if (nf) break;
        case "keydown":
        case "keyup":
          mu(h, n, v);
      }
      var T;
      if (ci) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Wt ? Qs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ws && n.locale !== "ko" && (Wt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Wt && (T = Hs()) : (ct = v, ui = "value" in ct ? ct.value : ct.textContent, Wt = !0)), _ = Kr(d, P), 0 < _.length && (P = new ou(P, e, null, n, v), h.push({ event: P, listeners: _ }), T ? P.data = T : (T = Ks(n), T !== null && (P.data = T)))), (T = Wd ? Qd(e, n) : Kd(e, n)) && (d = Kr(d, "onBeforeInput"), 0 < d.length && (v = new ou("onBeforeInput", "beforeinput", null, n, v), h.push({ event: v, listeners: d }), v.data = T));
    }
    la(h, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Vn(e, n), o != null && r.unshift(Xn(e, o, l)), o = Vn(e, t), o != null && r.push(Xn(e, o, l))), e = e.return;
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && d !== null && (u = d, l ? (s = Vn(n, o), s != null && i.unshift(Xn(n, s, u))) : l || (s = Vn(n, o), s != null && i.push(Xn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var uf = /\r\n?/g, sf = /\u0000|\uFFFD/g;
function gu(e) {
  return (typeof e == "string" ? e : "" + e).replace(uf, `
`).replace(sf, "");
}
function gr(e, t, n) {
  if (t = gu(t), gu(e) !== t && n) throw Error(w(425));
}
function Yr() {
}
var So = null, ko = null;
function xo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var jo = typeof setTimeout == "function" ? setTimeout : void 0, af = typeof clearTimeout == "function" ? clearTimeout : void 0, wu = typeof Promise == "function" ? Promise : void 0, cf = typeof queueMicrotask == "function" ? queueMicrotask : typeof wu < "u" ? function(e) {
  return wu.resolve(null).then(e).catch(df);
} : jo;
function df(e) {
  setTimeout(function() {
    throw e;
  });
}
function Bl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Qn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Qn(t);
}
function ht(e) {
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
function Su(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vn = Math.random().toString(36).slice(2), We = "__reactFiber$" + vn, Zn = "__reactProps$" + vn, et = "__reactContainer$" + vn, Eo = "__reactEvents$" + vn, ff = "__reactListeners$" + vn, pf = "__reactHandles$" + vn;
function _t(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[et] || n[We]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Su(e); e !== null; ) {
        if (n = e[We]) return n;
        e = Su(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ir(e) {
  return e = e[We] || e[et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function ml(e) {
  return e[Zn] || null;
}
var No = [], Gt = -1;
function jt(e) {
  return { current: e };
}
function H(e) {
  0 > Gt || (e.current = No[Gt], No[Gt] = null, Gt--);
}
function $(e, t) {
  Gt++, No[Gt] = e.current, e.current = t;
}
var kt = {}, ce = jt(kt), ge = jt(!1), Rt = kt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function we(e) {
  return e = e.childContextTypes, e != null;
}
function Gr() {
  H(ge), H(ce);
}
function ku(e, t, n) {
  if (ce.current !== kt) throw Error(w(168));
  $(ce, t), $(ge, n);
}
function ia(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Zc(e) || "Unknown", l));
  return X({}, n, r);
}
function Xr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt, Rt = ce.current, $(ce, e), $(ge, ge.current), !0;
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = ia(e, t, Rt), r.__reactInternalMemoizedMergedChildContext = e, H(ge), H(ce), $(ce, e)) : H(ge), $(ge, n);
}
var Xe = null, hl = !1, Vl = !1;
function ua(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function mf(e) {
  hl = !0, ua(e);
}
function Et() {
  if (!Vl && Xe !== null) {
    Vl = !0;
    var e = 0, t = F;
    try {
      var n = Xe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, hl = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), Rs(ri, Et), l;
    } finally {
      F = t, Vl = !1;
    }
  }
  return null;
}
var Xt = [], Zt = 0, Zr = null, Jr = 0, Te = [], Pe = 0, Dt = null, Ze = 1, Je = "";
function Nt(e, t) {
  Xt[Zt++] = Jr, Xt[Zt++] = Zr, Zr = e, Jr = t;
}
function sa(e, t, n) {
  Te[Pe++] = Ze, Te[Pe++] = Je, Te[Pe++] = Dt, Dt = e;
  var r = Ze;
  e = Je;
  var l = 32 - $e(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - $e(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ze = 1 << 32 - $e(t) + l | n << l | r, Je = o + e;
  } else Ze = 1 << o | n << l | r, Je = e;
}
function fi(e) {
  e.return !== null && (Nt(e, 1), sa(e, 1, 0));
}
function pi(e) {
  for (; e === Zr; ) Zr = Xt[--Zt], Xt[Zt] = null, Jr = Xt[--Zt], Xt[Zt] = null;
  for (; e === Dt; ) Dt = Te[--Pe], Te[Pe] = null, Je = Te[--Pe], Te[Pe] = null, Ze = Te[--Pe], Te[Pe] = null;
}
var Ee = null, je = null, W = !1, Fe = null;
function aa(e, t) {
  var n = ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ee = e, je = ht(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ee = e, je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dt !== null ? { id: Ze, overflow: Je } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ee = e, je = null, !0) : !1;
    default:
      return !1;
  }
}
function Co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _o(e) {
  if (W) {
    var t = je;
    if (t) {
      var n = t;
      if (!ju(e, t)) {
        if (Co(e)) throw Error(w(418));
        t = ht(n.nextSibling);
        var r = Ee;
        t && ju(e, t) ? aa(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Ee = e);
      }
    } else {
      if (Co(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, W = !1, Ee = e;
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ee = e;
}
function wr(e) {
  if (e !== Ee) return !1;
  if (!W) return Eu(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps)), t && (t = je)) {
    if (Co(e)) throw ca(), Error(w(418));
    for (; t; ) aa(e, t), t = ht(t.nextSibling);
  }
  if (Eu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = ht(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Ee ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function ca() {
  for (var e = je; e; ) e = ht(e.nextSibling);
}
function an() {
  je = Ee = null, W = !1;
}
function mi(e) {
  Fe === null ? Fe = [e] : Fe.push(e);
}
var hf = rt.ReactCurrentBatchConfig;
function jn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Sr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function da(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = wt(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, y) {
    return c === null || c.tag !== 6 ? (c = Xl(p, f.mode, y), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function s(f, c, p, y) {
    var E = p.type;
    return E === Ht ? v(f, c, p.props.children, y, p.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === it && Nu(E) === c.type) ? (y = l(c, p.props), y.ref = jn(f, c, p), y.return = f, y) : (y = $r(p.type, p.key, p.props, null, f.mode, y), y.ref = jn(f, c, p), y.return = f, y);
  }
  function d(f, c, p, y) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Zl(p, f.mode, y), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c);
  }
  function v(f, c, p, y, E) {
    return c === null || c.tag !== 7 ? (c = Lt(p, f.mode, y, E), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function h(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Xl("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ar:
          return p = $r(c.type, c.key, c.props, null, f.mode, p), p.ref = jn(f, null, c), p.return = f, p;
        case Vt:
          return c = Zl(c, f.mode, p), c.return = f, c;
        case it:
          var y = c._init;
          return h(f, y(c._payload), p);
      }
      if (_n(c) || gn(c)) return c = Lt(c, f.mode, p, null), c.return = f, c;
      Sr(f, c);
    }
    return null;
  }
  function m(f, c, p, y) {
    var E = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : u(f, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ar:
          return p.key === E ? s(f, c, p, y) : null;
        case Vt:
          return p.key === E ? d(f, c, p, y) : null;
        case it:
          return E = p._init, m(
            f,
            c,
            E(p._payload),
            y
          );
      }
      if (_n(p) || gn(p)) return E !== null ? null : v(f, c, p, y, null);
      Sr(f, p);
    }
    return null;
  }
  function g(f, c, p, y, E) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(p) || null, u(c, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ar:
          return f = f.get(y.key === null ? p : y.key) || null, s(c, f, y, E);
        case Vt:
          return f = f.get(y.key === null ? p : y.key) || null, d(c, f, y, E);
        case it:
          var _ = y._init;
          return g(f, c, p, _(y._payload), E);
      }
      if (_n(y) || gn(y)) return f = f.get(p) || null, v(c, f, y, E, null);
      Sr(c, y);
    }
    return null;
  }
  function S(f, c, p, y) {
    for (var E = null, _ = null, T = c, P = c = 0, Q = null; T !== null && P < p.length; P++) {
      T.index > P ? (Q = T, T = null) : Q = T.sibling;
      var R = m(f, T, p[P], y);
      if (R === null) {
        T === null && (T = Q);
        break;
      }
      e && T && R.alternate === null && t(f, T), c = o(R, c, P), _ === null ? E = R : _.sibling = R, _ = R, T = Q;
    }
    if (P === p.length) return n(f, T), W && Nt(f, P), E;
    if (T === null) {
      for (; P < p.length; P++) T = h(f, p[P], y), T !== null && (c = o(T, c, P), _ === null ? E = T : _.sibling = T, _ = T);
      return W && Nt(f, P), E;
    }
    for (T = r(f, T); P < p.length; P++) Q = g(T, f, P, p[P], y), Q !== null && (e && Q.alternate !== null && T.delete(Q.key === null ? P : Q.key), c = o(Q, c, P), _ === null ? E = Q : _.sibling = Q, _ = Q);
    return e && T.forEach(function(ke) {
      return t(f, ke);
    }), W && Nt(f, P), E;
  }
  function x(f, c, p, y) {
    var E = gn(p);
    if (typeof E != "function") throw Error(w(150));
    if (p = E.call(p), p == null) throw Error(w(151));
    for (var _ = E = null, T = c, P = c = 0, Q = null, R = p.next(); T !== null && !R.done; P++, R = p.next()) {
      T.index > P ? (Q = T, T = null) : Q = T.sibling;
      var ke = m(f, T, R.value, y);
      if (ke === null) {
        T === null && (T = Q);
        break;
      }
      e && T && ke.alternate === null && t(f, T), c = o(ke, c, P), _ === null ? E = ke : _.sibling = ke, _ = ke, T = Q;
    }
    if (R.done) return n(
      f,
      T
    ), W && Nt(f, P), E;
    if (T === null) {
      for (; !R.done; P++, R = p.next()) R = h(f, R.value, y), R !== null && (c = o(R, c, P), _ === null ? E = R : _.sibling = R, _ = R);
      return W && Nt(f, P), E;
    }
    for (T = r(f, T); !R.done; P++, R = p.next()) R = g(T, f, P, R.value, y), R !== null && (e && R.alternate !== null && T.delete(R.key === null ? P : R.key), c = o(R, c, P), _ === null ? E = R : _.sibling = R, _ = R);
    return e && T.forEach(function(C) {
      return t(f, C);
    }), W && Nt(f, P), E;
  }
  function M(f, c, p, y) {
    if (typeof p == "object" && p !== null && p.type === Ht && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ar:
          e: {
            for (var E = p.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (E = p.type, E === Ht) {
                  if (_.tag === 7) {
                    n(f, _.sibling), c = l(_, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === it && Nu(E) === _.type) {
                  n(f, _.sibling), c = l(_, p.props), c.ref = jn(f, _, p), c.return = f, f = c;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            p.type === Ht ? (c = Lt(p.props.children, f.mode, y, p.key), c.return = f, f = c) : (y = $r(p.type, p.key, p.props, null, f.mode, y), y.ref = jn(f, c, p), y.return = f, f = y);
          }
          return i(f);
        case Vt:
          e: {
            for (_ = p.key; c !== null; ) {
              if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = Zl(p, f.mode, y), c.return = f, f = c;
          }
          return i(f);
        case it:
          return _ = p._init, M(f, c, _(p._payload), y);
      }
      if (_n(p)) return S(f, c, p, y);
      if (gn(p)) return x(f, c, p, y);
      Sr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Xl(p, f.mode, y), c.return = f, f = c), i(f)) : n(f, c);
  }
  return M;
}
var cn = da(!0), fa = da(!1), qr = jt(null), br = null, Jt = null, hi = null;
function vi() {
  hi = Jt = br = null;
}
function yi(e) {
  var t = qr.current;
  H(qr), e._currentValue = t;
}
function To(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ln(e, t) {
  br = e, hi = Jt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ye = !0), e.firstContext = null);
}
function Re(e) {
  var t = e._currentValue;
  if (hi !== e) if (e = { context: e, memoizedValue: t, next: null }, Jt === null) {
    if (br === null) throw Error(w(308));
    Jt = e, br.dependencies = { lanes: 0, firstContext: e };
  } else Jt = Jt.next = e;
  return t;
}
var Tt = null;
function gi(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function pa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, gi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, tt(e, r);
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function wi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ma(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, tt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, gi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, tt(e, n);
}
function Rr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, li(e, n);
  }
}
function Cu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function el(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, d = s.next;
    s.next = null, i === null ? o = d : i.next = d, i = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== i && (u === null ? v.firstBaseUpdate = d : u.next = d, v.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, v = d = s = null, u = o;
    do {
      var m = u.lane, g = u.eventTime;
      if ((r & m) === m) {
        v !== null && (v = v.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, x = u;
          switch (m = t, g = n, x.tag) {
            case 1:
              if (S = x.payload, typeof S == "function") {
                h = S.call(g, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = x.payload, m = typeof S == "function" ? S.call(g, h, m) : S, m == null) break e;
              h = X({}, h, m);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (d = v = g, s = h) : v = v.next = g, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = h), l.baseState = s, l.firstBaseUpdate = d, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Mt |= i, e.lanes = i, e.memoizedState = h;
  }
}
function _u(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var ur = {}, Ke = jt(ur), Jn = jt(ur), qn = jt(ur);
function Pt(e) {
  if (e === ur) throw Error(w(174));
  return e;
}
function Si(e, t) {
  switch ($(qn, t), $(Jn, e), $(Ke, ur), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uo(t, e);
  }
  H(Ke), $(Ke, t);
}
function dn() {
  H(Ke), H(Jn), H(qn);
}
function ha(e) {
  Pt(qn.current);
  var t = Pt(Ke.current), n = uo(t, e.type);
  t !== n && ($(Jn, e), $(Ke, n));
}
function ki(e) {
  Jn.current === e && (H(Ke), H(Jn));
}
var Y = jt(0);
function tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var Hl = [];
function xi() {
  for (var e = 0; e < Hl.length; e++) Hl[e]._workInProgressVersionPrimary = null;
  Hl.length = 0;
}
var Dr = rt.ReactCurrentDispatcher, Wl = rt.ReactCurrentBatchConfig, Ot = 0, G = null, ee = null, ne = null, nl = !1, Mn = !1, bn = 0, vf = 0;
function ue() {
  throw Error(w(321));
}
function ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Ei(e, t, n, r, l, o) {
  if (Ot = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dr.current = e === null || e.memoizedState === null ? Sf : kf, e = n(r, l), Mn) {
    o = 0;
    do {
      if (Mn = !1, bn = 0, 25 <= o) throw Error(w(301));
      o += 1, ne = ee = null, t.updateQueue = null, Dr.current = xf, e = n(r, l);
    } while (Mn);
  }
  if (Dr.current = rl, t = ee !== null && ee.next !== null, Ot = 0, ne = ee = G = null, nl = !1, t) throw Error(w(300));
  return e;
}
function Ni() {
  var e = bn !== 0;
  return bn = 0, e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ne === null ? G.memoizedState = ne = e : ne = ne.next = e, ne;
}
function De() {
  if (ee === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ne === null ? G.memoizedState : ne.next;
  if (t !== null) ne = t, ee = e;
  else {
    if (e === null) throw Error(w(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, ne === null ? G.memoizedState = ne = e : ne = ne.next = e;
  }
  return ne;
}
function er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ql(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = ee, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, d = o;
    do {
      var v = d.lane;
      if ((Ot & v) === v) s !== null && (s = s.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var h = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, G.lanes |= v, Mt |= v;
      }
      d = d.next;
    } while (d !== null && d !== o);
    s === null ? i = r : s.next = u, Ae(r, t.memoizedState) || (ye = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, G.lanes |= o, Mt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Kl(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ae(o, t.memoizedState) || (ye = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function va() {
}
function ya(e, t) {
  var n = G, r = De(), l = t(), o = !Ae(r.memoizedState, l);
  if (o && (r.memoizedState = l, ye = !0), r = r.queue, Ci(Sa.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, tr(9, wa.bind(null, n, r, l, t), void 0, null), re === null) throw Error(w(349));
    Ot & 30 || ga(n, t, l);
  }
  return l;
}
function ga(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ka(t) && xa(e);
}
function Sa(e, t, n) {
  return n(function() {
    ka(t) && xa(e);
  });
}
function ka(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function xa(e) {
  var t = tt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Tu(e) {
  var t = He();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: er, lastRenderedState: e }, t.queue = e, e = e.dispatch = wf.bind(null, G, e), [t.memoizedState, e];
}
function tr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ja() {
  return De().memoizedState;
}
function Or(e, t, n, r) {
  var l = He();
  G.flags |= e, l.memoizedState = tr(1 | t, n, void 0, r === void 0 ? null : r);
}
function vl(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (o = i.destroy, r !== null && ji(r, i.deps)) {
      l.memoizedState = tr(t, n, o, r);
      return;
    }
  }
  G.flags |= e, l.memoizedState = tr(1 | t, n, o, r);
}
function Pu(e, t) {
  return Or(8390656, 8, e, t);
}
function Ci(e, t) {
  return vl(2048, 8, e, t);
}
function Ea(e, t) {
  return vl(4, 2, e, t);
}
function Na(e, t) {
  return vl(4, 4, e, t);
}
function Ca(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function _a(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vl(4, 4, Ca.bind(null, t, e), n);
}
function _i() {
}
function Ta(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pa(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function za(e, t, n) {
  return Ot & 21 ? (Ae(n, t) || (n = Ms(), G.lanes |= n, Mt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = n);
}
function yf(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, Wl.transition = r;
  }
}
function La() {
  return De().memoizedState;
}
function gf(e, t, n) {
  var r = gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ra(e)) Da(t, n);
  else if (n = pa(e, t, n, r), n !== null) {
    var l = fe();
    Ue(n, e, r, l), Oa(n, t, r);
  }
}
function wf(e, t, n) {
  var r = gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ra(e)) Da(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ae(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, gi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = pa(e, t, l, r), n !== null && (l = fe(), Ue(n, e, r, l), Oa(n, t, r));
  }
}
function Ra(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function Da(e, t) {
  Mn = nl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Oa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, li(e, n);
  }
}
var rl = { readContext: Re, useCallback: ue, useContext: ue, useEffect: ue, useImperativeHandle: ue, useInsertionEffect: ue, useLayoutEffect: ue, useMemo: ue, useReducer: ue, useRef: ue, useState: ue, useDebugValue: ue, useDeferredValue: ue, useTransition: ue, useMutableSource: ue, useSyncExternalStore: ue, useId: ue, unstable_isNewReconciler: !1 }, Sf = { readContext: Re, useCallback: function(e, t) {
  return He().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Re, useEffect: Pu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Or(
    4194308,
    4,
    Ca.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Or(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Or(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = He();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = He();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = gf.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = He();
  return e = { current: e }, t.memoizedState = e;
}, useState: Tu, useDebugValue: _i, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Tu(!1), t = e[0];
  return e = yf.bind(null, e[1]), He().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, l = He();
  if (W) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), re === null) throw Error(w(349));
    Ot & 30 || ga(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Pu(Sa.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, tr(9, wa.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = He(), t = re.identifierPrefix;
  if (W) {
    var n = Je, r = Ze;
    n = (r & ~(1 << 32 - $e(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = bn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = vf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, kf = {
  readContext: Re,
  useCallback: Ta,
  useContext: Re,
  useEffect: Ci,
  useImperativeHandle: _a,
  useInsertionEffect: Ea,
  useLayoutEffect: Na,
  useMemo: Pa,
  useReducer: Ql,
  useRef: ja,
  useState: function() {
    return Ql(er);
  },
  useDebugValue: _i,
  useDeferredValue: function(e) {
    var t = De();
    return za(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = Ql(er)[0], t = De().memoizedState;
    return [e, t];
  },
  useMutableSource: va,
  useSyncExternalStore: ya,
  useId: La,
  unstable_isNewReconciler: !1
}, xf = { readContext: Re, useCallback: Ta, useContext: Re, useEffect: Ci, useImperativeHandle: _a, useInsertionEffect: Ea, useLayoutEffect: Na, useMemo: Pa, useReducer: Kl, useRef: ja, useState: function() {
  return Kl(er);
}, useDebugValue: _i, useDeferredValue: function(e) {
  var t = De();
  return ee === null ? t.memoizedState = e : za(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = Kl(er)[0], t = De().memoizedState;
  return [e, t];
}, useMutableSource: va, useSyncExternalStore: ya, useId: La, unstable_isNewReconciler: !1 };
function Me(e, t) {
  if (e && e.defaultProps) {
    t = X({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Po(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yl = { isMounted: function(e) {
  return (e = e._reactInternals) ? $t(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), l = gt(e), o = qe(r, l);
  o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Ue(t, e, l, r), Rr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), l = gt(e), o = qe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Ue(t, e, l, r), Rr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = fe(), r = gt(e), l = qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = vt(e, l, r), t !== null && (Ue(t, e, r, n), Rr(t, e, r));
} };
function zu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, o) : !0;
}
function Ma(e, t, n) {
  var r = !1, l = kt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Re(o) : (l = we(t) ? Rt : ce.current, r = t.contextTypes, o = (r = r != null) ? sn(e, l) : kt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = yl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Lu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yl.enqueueReplaceState(t, t.state, null);
}
function zo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, wi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Re(o) : (o = we(t) ? Rt : ce.current, l.context = sn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Po(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && yl.enqueueReplaceState(l, l.state, null), el(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var jf = typeof WeakMap == "function" ? WeakMap : Map;
function Ia(e, t, n) {
  n = qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ol || (ol = !0, Bo = r), Lo(e, t);
  }, n;
}
function Fa(e, t, n) {
  n = qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Lo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Lo(e, t), typeof r != "function" && (yt === null ? yt = /* @__PURE__ */ new Set([this]) : yt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ru(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ff.bind(null, e, t, n), t.then(e, e));
}
function Du(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qe(-1, 1), t.tag = 2, vt(n, t, 1))), n.lanes |= 1), e);
}
var Ef = rt.ReactCurrentOwner, ye = !1;
function de(e, t, n, r) {
  t.child = e === null ? fa(t, null, n, r) : cn(t, e.child, n, r);
}
function Mu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return ln(t, l), r = Ei(e, t, n, r, o, l), n = Ni(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && n && fi(t), t.flags |= 1, de(e, t, r, l), t.child);
}
function Iu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Mi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, $a(e, t, o, r, l)) : (e = $r(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yn, n(i, r) && e.ref === t.ref) return nt(e, t, l);
  }
  return t.flags |= 1, e = wt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function $a(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref) if (ye = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ye = !0);
    else return t.lanes = e.lanes, nt(e, t, l);
  }
  return Ro(e, t, n, r, l);
}
function Ua(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(bt, xe), xe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $(bt, xe), xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, $(bt, xe), xe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(bt, xe), xe |= r;
  return de(e, t, l, n), t.child;
}
function Aa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ro(e, t, n, r, l) {
  var o = we(n) ? Rt : ce.current;
  return o = sn(t, o), ln(t, l), n = Ei(e, t, n, r, o, l), r = Ni(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && r && fi(t), t.flags |= 1, de(e, t, n, l), t.child);
}
function Fu(e, t, n, r, l) {
  if (we(n)) {
    var o = !0;
    Xr(t);
  } else o = !1;
  if (ln(t, l), t.stateNode === null) Mr(e, t), Ma(t, n, r), zo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Re(d) : (d = we(n) ? Rt : ce.current, d = sn(t, d));
    var v = n.getDerivedStateFromProps, h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== d) && Lu(t, i, r, d), ut = !1;
    var m = t.memoizedState;
    i.state = m, el(t, r, i, l), s = t.memoizedState, u !== r || m !== s || ge.current || ut ? (typeof v == "function" && (Po(t, n, v, r), s = t.memoizedState), (u = ut || zu(t, n, u, r, m, s, d)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = d, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, ma(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Me(t.type, u), i.props = d, h = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Re(s) : (s = we(n) ? Rt : ce.current, s = sn(t, s));
    var g = n.getDerivedStateFromProps;
    (v = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Lu(t, i, r, s), ut = !1, m = t.memoizedState, i.state = m, el(t, r, i, l);
    var S = t.memoizedState;
    u !== h || m !== S || ge.current || ut ? (typeof g == "function" && (Po(t, n, g, r), S = t.memoizedState), (d = ut || zu(t, n, d, r, m, S, s) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = s, r = d) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Do(e, t, n, r, o, l);
}
function Do(e, t, n, r, l, o) {
  Aa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && xu(t, n, !1), nt(e, t, o);
  r = t.stateNode, Ef.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = cn(t, e.child, null, o), t.child = cn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && xu(t, n, !0), t.child;
}
function Ba(e) {
  var t = e.stateNode;
  t.pendingContext ? ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ku(e, t.context, !1), Si(e, t.containerInfo);
}
function $u(e, t, n, r, l) {
  return an(), mi(l), t.flags |= 256, de(e, t, n, r), t.child;
}
var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Va(e, t, n) {
  var r = t.pendingProps, l = Y.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(Y, l & 1), e === null)
    return _o(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Sl(i, r, 0, null), e = Lt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Mo(n), t.memoizedState = Oo, e) : Ti(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Nf(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = wt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = wt(u, o) : (o = Lt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Mo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Oo, r;
  }
  return o = e.child, e = o.sibling, r = wt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ti(e, t) {
  return t = Sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function kr(e, t, n, r) {
  return r !== null && mi(r), cn(t, e.child, null, n), e = Ti(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Nf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Yl(Error(w(422))), kr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), o = Lt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && cn(t, e.child, null, i), t.child.memoizedState = Mo(i), t.memoizedState = Oo, o);
  if (!(t.mode & 1)) return kr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(w(419)), r = Yl(o, r, void 0), kr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ye || u) {
    if (r = re, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, tt(e, l), Ue(r, e, l, -1));
    }
    return Oi(), r = Yl(Error(w(421))), kr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $f.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, je = ht(l.nextSibling), Ee = t, W = !0, Fe = null, e !== null && (Te[Pe++] = Ze, Te[Pe++] = Je, Te[Pe++] = Dt, Ze = e.id, Je = e.overflow, Dt = t), t = Ti(t, r.children), t.flags |= 4096, t);
}
function Uu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), To(e.return, t, n);
}
function Gl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Ha(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (de(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Uu(e, n, t);
      else if (e.tag === 19) Uu(e, n, t);
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
    r &= 1;
  }
  if ($(Y, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && tl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Gl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && tl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Gl(t, !0, n, null, o);
      break;
    case "together":
      Gl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Mr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Mt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = wt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Cf(e, t, n) {
  switch (t.tag) {
    case 3:
      Ba(t), an();
      break;
    case 5:
      ha(t);
      break;
    case 1:
      we(t.type) && Xr(t);
      break;
    case 4:
      Si(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      $(qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Va(e, t, n) : ($(Y, Y.current & 1), e = nt(e, t, n), e !== null ? e.sibling : null);
      $(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ha(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(Y, Y.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ua(e, t, n);
  }
  return nt(e, t, n);
}
var Wa, Io, Qa, Ka;
Wa = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Io = function() {
};
Qa = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Pt(Ke.current);
    var o = null;
    switch (n) {
      case "input":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      case "select":
        l = X({}, l, { value: void 0 }), r = X({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = io(e, l), r = io(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
    }
    so(n, r);
    var i;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var u = l[d];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (An.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = s;
      else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (An.hasOwnProperty(d) ? (s != null && d === "onScroll" && B("scroll", e), o || u === s || (o = [])) : (o = o || []).push(d, s));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ka = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!W) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function _f(e, t, n) {
  var r = t.pendingProps;
  switch (pi(t), t.tag) {
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
      return se(t), null;
    case 1:
      return we(t.type) && Gr(), se(t), null;
    case 3:
      return r = t.stateNode, dn(), H(ge), H(ce), xi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fe !== null && (Wo(Fe), Fe = null))), Io(e, t), se(t), null;
    case 5:
      ki(t);
      var l = Pt(qn.current);
      if (n = t.type, e !== null && t.stateNode != null) Qa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return se(t), null;
        }
        if (e = Pt(Ke.current), wr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[We] = t, r[Zn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pn.length; l++) B(Pn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Gi(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              Zi(r, o), B("invalid", r);
          }
          so(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && gr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : An.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              cr(r), Xi(r, o, !0);
              break;
            case "textarea":
              cr(r), Ji(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ss(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[We] = t, e[Zn] = r, Wa(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ao(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pn.length; l++) B(Pn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                Gi(e, r), l = ro(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = X({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Zi(e, r), l = io(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            so(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? js(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ks(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Bn(e, s) : typeof s == "number" && Bn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (An.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && qo(e, o, s, i));
            }
            switch (n) {
              case "input":
                cr(e), Xi(e, r, !1);
                break;
              case "textarea":
                cr(e), Ji(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? en(e, !!r.multiple, o, !1) : r.defaultValue != null && en(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) Ka(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Pt(qn.current), Pt(Ke.current), wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[We] = t, (o = r.nodeValue !== n) && (e = Ee, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[We] = t, t.stateNode = r;
      }
      return se(t), null;
    case 13:
      if (H(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && je !== null && t.mode & 1 && !(t.flags & 128)) ca(), an(), t.flags |= 98560, o = !1;
        else if (o = wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(w(317));
            o[We] = t;
          } else an(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          se(t), o = !1;
        } else Fe !== null && (Wo(Fe), Fe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? te === 0 && (te = 3) : Oi())), t.updateQueue !== null && (t.flags |= 4), se(t), null);
    case 4:
      return dn(), Io(e, t), e === null && Gn(t.stateNode.containerInfo), se(t), null;
    case 10:
      return yi(t.type._context), se(t), null;
    case 17:
      return we(t.type) && Gr(), se(t), null;
    case 19:
      if (H(Y), o = t.memoizedState, o === null) return se(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) En(o, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = tl(e), i !== null) {
            for (t.flags |= 128, En(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return $(Y, Y.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > pn && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = tl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), En(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return se(t), null;
        } else 2 * J() - o.renderingStartTime > pn && n !== 1073741824 && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = Y.current, $(Y, r ? n & 1 | 2 : n & 1), t) : (se(t), null);
    case 22:
    case 23:
      return Di(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? xe & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Tf(e, t) {
  switch (pi(t), t.tag) {
    case 1:
      return we(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return dn(), H(ge), H(ce), xi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ki(t), null;
    case 13:
      if (H(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        an();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Y), null;
    case 4:
      return dn(), null;
    case 10:
      return yi(t.type._context), null;
    case 22:
    case 23:
      return Di(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1, ae = !1, Pf = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function qt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Z(e, t, r);
  }
  else n.current = null;
}
function Fo(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Au = !1;
function zf(e, t) {
  if (So = Wr, e = Js(), di(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, d = 0, v = 0, h = e, m = null;
        t: for (; ; ) {
          for (var g; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null; )
            m = h, h = g;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++d === l && (u = i), m === o && ++v === r && (s = i), (g = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = g;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ko = { focusedElem: e, selectionRange: n }, Wr = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var x = S.memoizedProps, M = S.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Me(t.type, x), M);
            f.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(w(163));
      }
    } catch (y) {
      Z(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return S = Au, Au = !1, S;
}
function In(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Fo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function gl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $o(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Ya(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ya(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[We], delete t[Zn], delete t[Eo], delete t[ff], delete t[pf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ga(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ga(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Uo(e, t, n), e = e.sibling; e !== null; ) Uo(e, t, n), e = e.sibling;
}
function Ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ao(e, t, n), e = e.sibling; e !== null; ) Ao(e, t, n), e = e.sibling;
}
var le = null, Ie = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) Xa(e, t, n), n = n.sibling;
}
function Xa(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
    Qe.onCommitFiberUnmount(cl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ae || qt(n, t);
    case 6:
      var r = le, l = Ie;
      le = null, ot(e, t, n), le = r, Ie = l, le !== null && (Ie ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (Ie ? (e = le, n = n.stateNode, e.nodeType === 8 ? Bl(e.parentNode, n) : e.nodeType === 1 && Bl(e, n), Qn(e)) : Bl(le, n.stateNode));
      break;
    case 4:
      r = le, l = Ie, le = n.stateNode.containerInfo, Ie = !0, ot(e, t, n), le = r, Ie = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Fo(n, t, i), l = l.next;
        } while (l !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (!ae && (qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Z(n, t, u);
      }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ae = (r = ae) || n.memoizedState !== null, ot(e, t, n), ae = r) : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function Vu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Pf()), t.forEach(function(r) {
      var l = Uf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            le = u.stateNode, Ie = !1;
            break e;
          case 3:
            le = u.stateNode.containerInfo, Ie = !0;
            break e;
          case 4:
            le = u.stateNode.containerInfo, Ie = !0;
            break e;
        }
        u = u.return;
      }
      if (le === null) throw Error(w(160));
      Xa(o, i, l), le = null, Ie = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (d) {
      Z(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Za(t, e), t = t.sibling;
}
function Za(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Oe(t, e), Ve(e), r & 4) {
        try {
          In(3, e, e.return), gl(3, e);
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          In(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      Oe(t, e), Ve(e), r & 512 && n !== null && qt(n, n.return);
      break;
    case 5:
      if (Oe(t, e), Ve(e), r & 512 && n !== null && qt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && gs(l, o), ao(u, i);
          var d = ao(u, o);
          for (i = 0; i < s.length; i += 2) {
            var v = s[i], h = s[i + 1];
            v === "style" ? js(l, h) : v === "dangerouslySetInnerHTML" ? ks(l, h) : v === "children" ? Bn(l, h) : qo(l, v, h, d);
          }
          switch (u) {
            case "input":
              lo(l, o);
              break;
            case "textarea":
              ws(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? en(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? en(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : en(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Zn] = o;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Oe(t, e), Ve(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Oe(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Qn(t.containerInfo);
      } catch (x) {
        Z(e, e.return, x);
      }
      break;
    case 4:
      Oe(t, e), Ve(e);
      break;
    case 13:
      Oe(t, e), Ve(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Li = J())), r & 4 && Vu(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (ae = (d = ae) || v, Oe(t, e), ae = d) : Oe(t, e), Ve(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1) for (N = e, v = e.child; v !== null; ) {
          for (h = N = v; N !== null; ) {
            switch (m = N, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                In(4, m, m.return);
                break;
              case 1:
                qt(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (x) {
                    Z(r, n, x);
                  }
                }
                break;
              case 5:
                qt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Wu(h);
                  continue;
                }
            }
            g !== null ? (g.return = m, N = g) : Wu(h);
          }
          v = v.sibling;
        }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                l = h.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = xs("display", i));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (v === null) try {
              h.stateNode.nodeValue = d ? "" : h.memoizedProps;
            } catch (x) {
              Z(e, e.return, x);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), h = h.return;
          }
          v === h && (v = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Oe(t, e), Ve(e), r & 4 && Vu(e);
      break;
    case 21:
      break;
    default:
      Oe(
        t,
        e
      ), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ga(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ""), r.flags &= -33);
          var o = Bu(e);
          Ao(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Bu(e);
          Uo(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lf(e, t, n) {
  N = e, Ja(e);
}
function Ja(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ae;
        u = xr;
        var d = ae;
        if (xr = i, (ae = s) && !d) for (N = l; N !== null; ) i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? Qu(l) : s !== null ? (s.return = i, N = s) : Qu(l);
        for (; o !== null; ) N = o, Ja(o), o = o.sibling;
        N = l, xr = u, ae = d;
      }
      Hu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : Hu(e);
  }
}
function Hu(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ae || gl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ae) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && _u(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              _u(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
              var d = t.alternate;
              if (d !== null) {
                var v = d.memoizedState;
                if (v !== null) {
                  var h = v.dehydrated;
                  h !== null && Qn(h);
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
            throw Error(w(163));
        }
        ae || t.flags & 512 && $o(t);
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Wu(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Qu(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var o = t.return;
          try {
            $o(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            $o(t);
          } catch (s) {
            Z(t, i, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var Rf = Math.ceil, ll = rt.ReactCurrentDispatcher, Pi = rt.ReactCurrentOwner, Le = rt.ReactCurrentBatchConfig, I = 0, re = null, q = null, oe = 0, xe = 0, bt = jt(0), te = 0, nr = null, Mt = 0, wl = 0, zi = 0, Fn = null, ve = null, Li = 0, pn = 1 / 0, Ge = null, ol = !1, Bo = null, yt = null, jr = !1, dt = null, il = 0, $n = 0, Vo = null, Ir = -1, Fr = 0;
function fe() {
  return I & 6 ? J() : Ir !== -1 ? Ir : Ir = J();
}
function gt(e) {
  return e.mode & 1 ? I & 2 && oe !== 0 ? oe & -oe : hf.transition !== null ? (Fr === 0 && (Fr = Ms()), Fr) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e) : 1;
}
function Ue(e, t, n, r) {
  if (50 < $n) throw $n = 0, Vo = null, Error(w(185));
  lr(e, n, r), (!(I & 2) || e !== re) && (e === re && (!(I & 2) && (wl |= n), te === 4 && at(e, oe)), Se(e, r), n === 1 && I === 0 && !(t.mode & 1) && (pn = J() + 500, hl && Et()));
}
function Se(e, t) {
  var n = e.callbackNode;
  md(e, t);
  var r = Hr(e, e === re ? oe : 0);
  if (r === 0) n !== null && eu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && eu(n), t === 1) e.tag === 0 ? mf(Ku.bind(null, e)) : ua(Ku.bind(null, e)), cf(function() {
      !(I & 6) && Et();
    }), n = null;
    else {
      switch (Is(r)) {
        case 1:
          n = ri;
          break;
        case 4:
          n = Ds;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = Os;
          break;
        default:
          n = Vr;
      }
      n = oc(n, qa.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qa(e, t) {
  if (Ir = -1, Fr = 0, I & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = Hr(e, e === re ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = ec();
    (re !== e || oe !== t) && (Ge = null, pn = J() + 500, zt(e, t));
    do
      try {
        Mf();
        break;
      } catch (u) {
        ba(e, u);
      }
    while (!0);
    vi(), ll.current = o, I = l, q !== null ? t = 0 : (re = null, oe = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (l = ho(e), l !== 0 && (r = l, t = Ho(e, l))), t === 1) throw n = nr, zt(e, 0), at(e, r), Se(e, J()), n;
    if (t === 6) at(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Df(l) && (t = ul(e, r), t === 2 && (o = ho(e), o !== 0 && (r = o, t = Ho(e, o))), t === 1)) throw n = nr, zt(e, 0), at(e, r), Se(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Ct(e, ve, Ge);
          break;
        case 3:
          if (at(e, r), (r & 130023424) === r && (t = Li + 500 - J(), 10 < t)) {
            if (Hr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = jo(Ct.bind(null, e, ve, Ge), t);
            break;
          }
          Ct(e, ve, Ge);
          break;
        case 4:
          if (at(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - $e(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = jo(Ct.bind(null, e, ve, Ge), r);
            break;
          }
          Ct(e, ve, Ge);
          break;
        case 5:
          Ct(e, ve, Ge);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Ho(e, t) {
  var n = Fn;
  return e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256), e = ul(e, t), e !== 2 && (t = ve, ve = n, t !== null && Wo(t)), e;
}
function Wo(e) {
  ve === null ? ve = e : ve.push.apply(ve, e);
}
function Df(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ae(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
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
function at(e, t) {
  for (t &= ~zi, t &= ~wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $e(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ku(e) {
  if (I & 6) throw Error(w(327));
  on();
  var t = Hr(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ho(e);
    r !== 0 && (t = r, n = Ho(e, r));
  }
  if (n === 1) throw n = nr, zt(e, 0), at(e, t), Se(e, J()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, ve, Ge), Se(e, J()), null;
}
function Ri(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (pn = J() + 500, hl && Et());
  }
}
function It(e) {
  dt !== null && dt.tag === 0 && !(I & 6) && on();
  var t = I;
  I |= 1;
  var n = Le.transition, r = F;
  try {
    if (Le.transition = null, F = 1, e) return e();
  } finally {
    F = r, Le.transition = n, I = t, !(I & 6) && Et();
  }
}
function Di() {
  xe = bt.current, H(bt);
}
function zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, af(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (pi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Gr();
        break;
      case 3:
        dn(), H(ge), H(ce), xi();
        break;
      case 5:
        ki(r);
        break;
      case 4:
        dn();
        break;
      case 13:
        H(Y);
        break;
      case 19:
        H(Y);
        break;
      case 10:
        yi(r.type._context);
        break;
      case 22:
      case 23:
        Di();
    }
    n = n.return;
  }
  if (re = e, q = e = wt(e.current, null), oe = xe = t, te = 0, nr = null, zi = wl = Mt = 0, ve = Fn = null, Tt !== null) {
    for (t = 0; t < Tt.length; t++) if (n = Tt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Tt = null;
  }
  return e;
}
function ba(e, t) {
  do {
    var n = q;
    try {
      if (vi(), Dr.current = rl, nl) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        nl = !1;
      }
      if (Ot = 0, ne = ee = G = null, Mn = !1, bn = 0, Pi.current = null, n === null || n.return === null) {
        te = 1, nr = t, q = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = oe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var d = s, v = u, h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var g = Du(i);
          if (g !== null) {
            g.flags &= -257, Ou(g, i, u, o, t), g.mode & 1 && Ru(o, d, t), t = g, s = d;
            var S = t.updateQueue;
            if (S === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(s), t.updateQueue = x;
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ru(o, d, t), Oi();
              break e;
            }
            s = Error(w(426));
          }
        } else if (W && u.mode & 1) {
          var M = Du(i);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Ou(M, i, u, o, t), mi(fn(s, u));
            break e;
          }
        }
        o = s = fn(s, u), te !== 4 && (te = 2), Fn === null ? Fn = [o] : Fn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Ia(o, s, t);
              Cu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (yt === null || !yt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = Fa(o, u, t);
                Cu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nc(n);
    } catch (E) {
      t = E, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ec() {
  var e = ll.current;
  return ll.current = rl, e === null ? rl : e;
}
function Oi() {
  (te === 0 || te === 3 || te === 2) && (te = 4), re === null || !(Mt & 268435455) && !(wl & 268435455) || at(re, oe);
}
function ul(e, t) {
  var n = I;
  I |= 2;
  var r = ec();
  (re !== e || oe !== t) && (Ge = null, zt(e, t));
  do
    try {
      Of();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (!0);
  if (vi(), I = n, ll.current = r, q !== null) throw Error(w(261));
  return re = null, oe = 0, te;
}
function Of() {
  for (; q !== null; ) tc(q);
}
function Mf() {
  for (; q !== null && !od(); ) tc(q);
}
function tc(e) {
  var t = lc(e.alternate, e, xe);
  e.memoizedProps = e.pendingProps, t === null ? nc(e) : q = t, Pi.current = null;
}
function nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Tf(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, q = null;
        return;
      }
    } else if (n = _f(n, t, xe), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Ct(e, t, n) {
  var r = F, l = Le.transition;
  try {
    Le.transition = null, F = 1, If(e, t, n, r);
  } finally {
    Le.transition = l, F = r;
  }
  return null;
}
function If(e, t, n, r) {
  do
    on();
  while (dt !== null);
  if (I & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (hd(e, o), e === re && (q = re = null, oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jr || (jr = !0, oc(Vr, function() {
    return on(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Le.transition, Le.transition = null;
    var i = F;
    F = 1;
    var u = I;
    I |= 4, Pi.current = null, zf(e, n), Za(n, e), tf(ko), Wr = !!So, ko = So = null, e.current = n, Lf(n), id(), I = u, F = i, Le.transition = o;
  } else e.current = n;
  if (jr && (jr = !1, dt = e, il = l), o = e.pendingLanes, o === 0 && (yt = null), ad(n.stateNode), Se(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ol) throw ol = !1, e = Bo, Bo = null, e;
  return il & 1 && e.tag !== 0 && on(), o = e.pendingLanes, o & 1 ? e === Vo ? $n++ : ($n = 0, Vo = e) : $n = 0, Et(), null;
}
function on() {
  if (dt !== null) {
    var e = Is(il), t = Le.transition, n = F;
    try {
      if (Le.transition = null, F = 16 > e ? 16 : e, dt === null) var r = !1;
      else {
        if (e = dt, dt = null, il = 0, I & 6) throw Error(w(331));
        var l = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var o = N, i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (N = d; N !== null; ) {
                  var v = N;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, v, o);
                  }
                  var h = v.child;
                  if (h !== null) h.return = v, N = h;
                  else for (; N !== null; ) {
                    v = N;
                    var m = v.sibling, g = v.return;
                    if (Ya(v), v === d) {
                      N = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, N = m;
                      break;
                    }
                    N = g;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var M = x.sibling;
                    x.sibling = null, x = M;
                  } while (x !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, N = i;
          else e: for (; N !== null; ) {
            if (o = N, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                In(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, N = f;
              break e;
            }
            N = o.return;
          }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, N = p;
          else e: for (i = c; N !== null; ) {
            if (u = N, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  gl(9, u);
              }
            } catch (E) {
              Z(u, u.return, E);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, N = y;
              break e;
            }
            N = u.return;
          }
        }
        if (I = l, Et(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
          Qe.onPostCommitFiberRoot(cl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      F = n, Le.transition = t;
    }
  }
  return !1;
}
function Yu(e, t, n) {
  t = fn(n, t), t = Ia(e, t, 1), e = vt(e, t, 1), t = fe(), e !== null && (lr(e, 1, t), Se(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Yu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Yu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yt === null || !yt.has(r))) {
        e = fn(n, e), e = Fa(t, e, 1), t = vt(t, e, 1), e = fe(), t !== null && (lr(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ff(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (oe & n) === n && (te === 4 || te === 3 && (oe & 130023424) === oe && 500 > J() - Li ? zt(e, 0) : zi |= n), Se(e, t);
}
function rc(e, t) {
  t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
  var n = fe();
  e = tt(e, t), e !== null && (lr(e, t, n), Se(e, n));
}
function $f(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rc(e, n);
}
function Uf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), rc(e, n);
}
var lc;
lc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ge.current) ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ye = !1, Cf(e, t, n);
    ye = !!(e.flags & 131072);
  }
  else ye = !1, W && t.flags & 1048576 && sa(t, Jr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Mr(e, t), e = t.pendingProps;
      var l = sn(t, ce.current);
      ln(t, n), l = Ei(null, t, r, e, l, n);
      var o = Ni();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (o = !0, Xr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, wi(t), l.updater = yl, t.stateNode = l, l._reactInternals = t, zo(t, r, e, n), t = Do(null, t, r, !0, o, n)) : (t.tag = 0, W && o && fi(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Mr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Bf(r), e = Me(r, e), l) {
          case 0:
            t = Ro(null, t, r, e, n);
            break e;
          case 1:
            t = Fu(null, t, r, e, n);
            break e;
          case 11:
            t = Mu(null, t, r, e, n);
            break e;
          case 14:
            t = Iu(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(w(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Ro(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Fu(e, t, r, l, n);
    case 3:
      e: {
        if (Ba(t), e === null) throw Error(w(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, ma(e, t), el(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = fn(Error(w(423)), t), t = $u(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = fn(Error(w(424)), t), t = $u(e, t, r, n, l);
          break e;
        } else for (je = ht(t.stateNode.containerInfo.firstChild), Ee = t, W = !0, Fe = null, n = fa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (an(), r === l) {
            t = nt(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ha(t), e === null && _o(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, xo(r, l) ? i = null : o !== null && xo(r, o) && (t.flags |= 32), Aa(e, t), de(e, t, i, n), t.child;
    case 6:
      return e === null && _o(t), null;
    case 13:
      return Va(e, t, n);
    case 4:
      return Si(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = cn(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Mu(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(qr, r._currentValue), r._currentValue = i, o !== null) if (Ae(o.value, i)) {
          if (o.children === l.children && !ge.current) {
            t = nt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = qe(-1, n & -n), s.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var v = d.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), d.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), To(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(w(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), To(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        de(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, ln(t, n), l = Re(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Me(r, t.pendingProps), l = Me(r.type, l), Iu(e, t, r, l, n);
    case 15:
      return $a(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Mr(e, t), t.tag = 1, we(r) ? (e = !0, Xr(t)) : e = !1, ln(t, n), Ma(t, r, l), zo(t, r, l, n), Do(null, t, r, !0, e, n);
    case 19:
      return Ha(e, t, n);
    case 22:
      return Ua(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function oc(e, t) {
  return Rs(e, t);
}
function Af(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, t, n, r) {
  return new Af(e, t, n, r);
}
function Mi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Bf(e) {
  if (typeof e == "function") return Mi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ei) return 11;
    if (e === ti) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $r(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Mi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Ht:
      return Lt(n.children, l, o, t);
    case bo:
      i = 8, l |= 8;
      break;
    case bl:
      return e = ze(12, n, t, l | 2), e.elementType = bl, e.lanes = o, e;
    case eo:
      return e = ze(13, n, t, l), e.elementType = eo, e.lanes = o, e;
    case to:
      return e = ze(19, n, t, l), e.elementType = to, e.lanes = o, e;
    case hs:
      return Sl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ps:
          i = 10;
          break e;
        case ms:
          i = 9;
          break e;
        case ei:
          i = 11;
          break e;
        case ti:
          i = 14;
          break e;
        case it:
          i = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = ze(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Lt(e, t, n, r) {
  return e = ze(7, e, r, t), e.lanes = n, e;
}
function Sl(e, t, n, r) {
  return e = ze(22, e, r, t), e.elementType = hs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Xl(e, t, n) {
  return e = ze(6, e, null, t), e.lanes = n, e;
}
function Zl(e, t, n) {
  return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Vf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ii(e, t, n, r, l, o, i, u, s) {
  return e = new Vf(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ze(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wi(o), e;
}
function Hf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ic(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return ia(e, n, t);
  }
  return t;
}
function uc(e, t, n, r, l, o, i, u, s) {
  return e = Ii(n, r, !0, e, l, o, i, u, s), e.context = ic(null), n = e.current, r = fe(), l = gt(n), o = qe(r, l), o.callback = t ?? null, vt(n, o, l), e.current.lanes = l, lr(e, l, r), Se(e, r), e;
}
function kl(e, t, n, r) {
  var l = t.current, o = fe(), i = gt(l);
  return n = ic(n), t.context === null ? t.context = n : t.pendingContext = n, t = qe(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = vt(l, t, i), e !== null && (Ue(e, l, i, o), Rr(e, l, i)), i;
}
function sl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fi(e, t) {
  Gu(e, t), (e = e.alternate) && Gu(e, t);
}
function Wf() {
  return null;
}
var sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $i(e) {
  this._internalRoot = e;
}
xl.prototype.render = $i.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  kl(e, t, null, null);
};
xl.prototype.unmount = $i.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function() {
      kl(null, e, null, null);
    }), t[et] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Us();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++) ;
    st.splice(n, 0, e), n === 0 && Bs(e);
  }
};
function Ui(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function jl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Xu() {
}
function Qf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = sl(i);
        o.call(d);
      };
    }
    var i = uc(t, r, e, 0, null, !1, !1, "", Xu);
    return e._reactRootContainer = i, e[et] = i.current, Gn(e.nodeType === 8 ? e.parentNode : e), It(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = sl(s);
      u.call(d);
    };
  }
  var s = Ii(e, 0, !1, null, null, !1, !1, "", Xu);
  return e._reactRootContainer = s, e[et] = s.current, Gn(e.nodeType === 8 ? e.parentNode : e), It(function() {
    kl(t, s, n, r);
  }), s;
}
function El(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = sl(i);
        u.call(s);
      };
    }
    kl(t, i, e, l);
  } else i = Qf(n, t, e, l, r);
  return sl(i);
}
Fs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tn(t.pendingLanes);
        n !== 0 && (li(t, n | 1), Se(t, J()), !(I & 6) && (pn = J() + 500, Et()));
      }
      break;
    case 13:
      It(function() {
        var r = tt(e, 1);
        if (r !== null) {
          var l = fe();
          Ue(r, e, 1, l);
        }
      }), Fi(e, 1);
  }
};
oi = function(e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ue(t, e, 134217728, n);
    }
    Fi(e, 134217728);
  }
};
$s = function(e) {
  if (e.tag === 13) {
    var t = gt(e), n = tt(e, t);
    if (n !== null) {
      var r = fe();
      Ue(n, e, t, r);
    }
    Fi(e, t);
  }
};
Us = function() {
  return F;
};
As = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
fo = function(e, t, n) {
  switch (t) {
    case "input":
      if (lo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ml(r);
            if (!l) throw Error(w(90));
            ys(r), lo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ws(e, n);
      break;
    case "select":
      t = n.value, t != null && en(e, !!n.multiple, t, !1);
  }
};
Cs = Ri;
_s = It;
var Kf = { usingClientEntryPoint: !1, Events: [ir, Yt, ml, Es, Ns, Ri] }, Nn = { findFiberByHostInstance: _t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Yf = { bundleType: Nn.bundleType, version: Nn.version, rendererPackageName: Nn.rendererPackageName, rendererConfig: Nn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = zs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Nn.findFiberByHostInstance || Wf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    cl = Er.inject(Yf), Qe = Er;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kf;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ui(t)) throw Error(w(200));
  return Hf(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!Ui(e)) throw Error(w(299));
  var n = !1, r = "", l = sc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ii(e, 1, !1, null, null, n, !1, r, l), e[et] = t.current, Gn(e.nodeType === 8 ? e.parentNode : e), new $i(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = zs(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return It(e);
};
Ce.hydrate = function(e, t, n) {
  if (!jl(t)) throw Error(w(200));
  return El(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!Ui(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = sc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = uc(t, null, e, 1, n ?? null, l, !1, o, i), e[et] = t.current, Gn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new xl(t);
};
Ce.render = function(e, t, n) {
  if (!jl(t)) throw Error(w(200));
  return El(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!jl(e)) throw Error(w(40));
  return e._reactRootContainer ? (It(function() {
    El(null, null, e, !1, function() {
      e._reactRootContainer = null, e[et] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Ri;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!jl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return El(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function ac() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), as.exports = Ce;
var cc = as.exports, dc, Zu = cc;
dc = Zu.createRoot, Zu.hydrateRoot;
const Qo = { High: 0, Medium: 1, Low: 2 };
function fc(e) {
  if (e === null) return [];
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error("Planner data is not valid JSON.");
  }
  if (!Array.isArray(t))
    throw new Error("Planner data must be a list of tasks.");
  return t.map((n, r) => {
    if (!n || typeof n.id != "string" || typeof n.title != "string" || typeof n.subject != "string")
      throw new Error(`Planner task ${r + 1} is missing required fields.`);
    return {
      ...n,
      due: typeof n.due == "string" ? n.due : "",
      time: typeof n.time == "string" ? n.time : "",
      priority: Object.hasOwn(Qo, n.priority) ? n.priority : "Medium",
      notes: typeof n.notes == "string" ? n.notes : "",
      done: n.done === !0
    };
  });
}
function Gf(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error("Backup file is not valid JSON.");
  }
  if (!t || t.version !== 1 || !Array.isArray(t.tasks))
    throw new Error("Choose a valid StudySprout backup file.");
  const n = fc(JSON.stringify(t.tasks)), r = /* @__PURE__ */ new Set();
  for (const [l, o] of n.entries()) {
    if (!o.title.trim() || !o.subject.trim())
      throw new Error(`Backup task ${l + 1} needs a title and subject.`);
    if (r.has(o.id))
      throw new Error("Backup contains duplicate task IDs.");
    r.add(o.id);
  }
  return n;
}
function pc(e = /* @__PURE__ */ new Date()) {
  return [
    e.getFullYear(),
    String(e.getMonth() + 1).padStart(2, "0"),
    String(e.getDate()).padStart(2, "0")
  ].join("-");
}
function Ai(e, t = pc(), n = (/* @__PURE__ */ new Date()).toTimeString().slice(0, 5)) {
  return !e.done && !!e.due && (e.due < t || e.due === t && !!e.time && e.time < n);
}
function mc(e, t) {
  const n = t.query.trim().toLocaleLowerCase();
  return e.filter((l) => {
    const o = !n || `${l.title} ${l.subject} ${l.notes}`.toLocaleLowerCase().includes(n), i = t.subject === "All" || l.subject === t.subject, u = t.status === "All" || t.status === "Pending" && !l.done || t.status === "Done" && l.done || t.status === "Overdue" && Ai(l);
    return o && i && u;
  }).sort((l, o) => t.sort === "priority" ? Qo[l.priority] - Qo[o.priority] || (l.due || "9999").localeCompare(o.due || "9999") || (l.time || "").localeCompare(o.time || "") : (l.due || "9999").localeCompare(o.due || "9999") || (l.time || "").localeCompare(o.time || ""));
}
function Xf(e, t = pc()) {
  const n = e.filter((i) => i.done).length, r = e.filter((i) => Ai(i, t)).length, l = e.length ? Math.round(n / e.length * 100) : 0, o = [...new Set(e.map((i) => i.subject))].sort((i, u) => i.localeCompare(u)).map((i) => {
    const u = e.filter((d) => d.subject === i), s = u.filter((d) => d.done).length;
    return {
      subject: i,
      total: u.length,
      completed: s,
      progress: Math.round(s / u.length * 100)
    };
  });
  return {
    total: e.length,
    completed: n,
    pending: e.length - n,
    overdue: r,
    progress: l,
    bySubject: o
  };
}
function Zf(e) {
  if (!e) return "No due date";
  const t = /* @__PURE__ */ new Date(`${e}T00:00:00`);
  return Number.isNaN(t.getTime()) ? "Date unavailable" : new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" }).format(t);
}
function hc({ task: e, onToggle: t, onEdit: n, onDelete: r, readOnly: l = !1 }) {
  const o = Ai(e);
  return /* @__PURE__ */ a.jsxs("li", { className: `task-item ${e.done ? "is-done" : ""}`, children: [
    l ? /* @__PURE__ */ a.jsx("span", { className: `task-check ${e.done ? "checked" : ""}`, "aria-hidden": "true", children: e.done ? "✓" : "" }) : /* @__PURE__ */ a.jsx(
      "button",
      {
        className: `task-check ${e.done ? "checked" : ""}`,
        type: "button",
        "aria-label": e.done ? `Mark ${e.title} pending` : `Mark ${e.title} complete`,
        "aria-pressed": e.done,
        onClick: t,
        children: e.done ? "✓" : ""
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "task-content", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "task-title-row", children: [
        /* @__PURE__ */ a.jsx("h3", { children: e.title }),
        /* @__PURE__ */ a.jsx("span", { className: `priority-badge priority-${e.priority.toLowerCase()}`, children: e.priority })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "task-meta", children: [
        /* @__PURE__ */ a.jsx("span", { children: e.subject }),
        /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "·" }),
        /* @__PURE__ */ a.jsxs("span", { className: o ? "text-danger" : "", children: [
          o ? "Overdue · " : "",
          Zf(e.due),
          e.time && ` · ${e.time}`
        ] })
      ] }),
      e.notes && /* @__PURE__ */ a.jsx("p", { className: "task-notes", children: e.notes })
    ] }),
    !l && /* @__PURE__ */ a.jsxs("div", { className: "task-actions", children: [
      /* @__PURE__ */ a.jsx("button", { className: "btn btn-sm btn-light", type: "button", onClick: n, "aria-label": `Edit ${e.title}`, children: "Edit" }),
      /* @__PURE__ */ a.jsx("button", { className: "btn btn-sm btn-light text-danger", type: "button", onClick: r, "aria-label": `Delete ${e.title}`, children: "Delete" })
    ] })
  ] });
}
function Jf({ tasks: e, summary: t, dueSoon: n }) {
  const r = mc(e.filter((l) => !l.done), {
    query: "",
    subject: "All",
    status: "All",
    sort: "due"
  }).slice(0, 4);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("h1", { className: "visually-hidden", children: "Study progress" }),
    /* @__PURE__ */ a.jsxs("section", { className: "stats-grid", "aria-label": "Task summary", children: [
      /* @__PURE__ */ a.jsx(Nr, { label: "Total tasks", value: t.total, tone: "indigo" }),
      /* @__PURE__ */ a.jsx(Nr, { label: "Completed", value: t.completed, tone: "green" }),
      /* @__PURE__ */ a.jsx(Nr, { label: "Due soon", value: n, tone: "amber" }),
      /* @__PURE__ */ a.jsx(Nr, { label: "Overdue", value: t.overdue, tone: "red" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "dashboard-grid", children: [
      /* @__PURE__ */ a.jsxs("section", { className: "dashboard-panel", "aria-labelledby": "up-next-title", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "panel-heading", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "STAY ON TRACK" }),
            /* @__PURE__ */ a.jsx("h2", { id: "up-next-title", children: "Up next" })
          ] }),
          /* @__PURE__ */ a.jsxs("a", { href: "#/planner", children: [
            "All tasks ",
            /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "→" })
          ] })
        ] }),
        r.length ? /* @__PURE__ */ a.jsx("ul", { className: "task-list compact-list", children: r.map((l) => /* @__PURE__ */ a.jsx(
          hc,
          {
            task: l,
            readOnly: !0
          },
          l.id
        )) }) : /* @__PURE__ */ a.jsxs("div", { className: "empty-state compact-empty", children: [
          /* @__PURE__ */ a.jsx("h3", { children: "You’re all caught up." }),
          /* @__PURE__ */ a.jsx("p", { children: "Add a task whenever something new is due." })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "dashboard-panel", "aria-labelledby": "progress-title", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "panel-heading", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "CONSISTENCY COUNTS" }),
            /* @__PURE__ */ a.jsx("h2", { id: "progress-title", children: "Overall progress" })
          ] }),
          /* @__PURE__ */ a.jsxs("span", { className: "progress-percent", children: [
            t.progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "progress dashboard-progress",
            role: "progressbar",
            "aria-label": "Overall completed tasks",
            "aria-valuenow": t.progress,
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            children: /* @__PURE__ */ a.jsx("div", { className: "progress-bar", style: { width: `${t.progress}%` } })
          }
        ),
        /* @__PURE__ */ a.jsxs("p", { className: "progress-caption", children: [
          t.completed,
          " of ",
          t.total,
          " tasks completed"
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "subject-progress-list", children: t.bySubject.length ? t.bySubject.map((l) => /* @__PURE__ */ a.jsxs("div", { className: "subject-progress", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "subject-progress-label", children: [
            /* @__PURE__ */ a.jsx("span", { children: l.subject }),
            /* @__PURE__ */ a.jsxs("span", { children: [
              l.completed,
              "/",
              l.total
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "progress subject-progress-bar", role: "progressbar", "aria-label": `${l.subject} progress`, "aria-valuenow": l.progress, "aria-valuemin": "0", "aria-valuemax": "100", children: /* @__PURE__ */ a.jsx("div", { className: "progress-bar", style: { width: `${l.progress}%` } }) })
        ] }, l.subject)) : /* @__PURE__ */ a.jsx("p", { className: "muted-copy", children: "Subject progress will show here after you add tasks." }) })
      ] })
    ] })
  ] });
}
function Nr({ label: e, value: t, tone: n }) {
  return /* @__PURE__ */ a.jsxs("article", { className: `stat-card stat-${n}`, children: [
    /* @__PURE__ */ a.jsx("p", { children: e }),
    /* @__PURE__ */ a.jsx("strong", { children: t })
  ] });
}
function qf() {
  const e = V.useRef(null);
  return V.useEffect(() => {
    const t = e.current, n = window.matchMedia("(prefers-reduced-motion: reduce)");
    function r() {
      n.matches ? (t.pause(), t.currentTime = 0) : t.play().catch(() => {
      });
    }
    return r(), n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "study-journey", children: [
    /* @__PURE__ */ a.jsx("div", { className: "journey-stage", "aria-hidden": "true", children: /* @__PURE__ */ a.jsx(
      "video",
      {
        ref: e,
        src: "media/wind-animation.mp4",
        poster: "media/wind-animation.webp",
        muted: !0,
        loop: !0,
        playsInline: !0,
        preload: "auto"
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: "journey-chapters", tabIndex: 0, "aria-label": "StudySprout homepage", children: [
      /* @__PURE__ */ a.jsxs("section", { className: "journey-chapter journey-intro", "aria-labelledby": "journey-title", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "journey-copy", children: [
          /* @__PURE__ */ a.jsx("h1", { id: "journey-title", children: "StudySprout" }),
          /* @__PURE__ */ a.jsx("p", { children: "Turn your notes into reviewers, flashcards, and practice quizzes. Find a clear next step for every study session." }),
          /* @__PURE__ */ a.jsxs("a", { href: "#/study", className: "journey-button", children: [
            "Start studying ",
            /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "↗" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "journey-scroll-cue", "aria-hidden": "true", children: "Scroll to explore ↓" })
      ] }),
      /* @__PURE__ */ a.jsx("section", { className: "journey-chapter journey-planning", "aria-labelledby": "journey-plan", children: /* @__PURE__ */ a.jsxs("div", { className: "journey-copy", children: [
        /* @__PURE__ */ a.jsxs("h2", { id: "journey-plan", children: [
          "Make room",
          /* @__PURE__ */ a.jsx("br", {}),
          "to focus."
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: "Keep assignments, exams, and readings together. Sort by deadline or priority to find what needs your attention first." }),
        /* @__PURE__ */ a.jsx("a", { href: "#/planner", children: "Open your planner" })
      ] }) }),
      /* @__PURE__ */ a.jsx("section", { className: "journey-chapter journey-progress", "aria-labelledby": "journey-about", children: /* @__PURE__ */ a.jsxs("div", { className: "journey-copy", children: [
        /* @__PURE__ */ a.jsxs("h2", { id: "journey-about", children: [
          "About",
          /* @__PURE__ */ a.jsx("br", {}),
          "StudySprout."
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: "StudySprout helps students understand lessons, practice what they learn, and organize their workload." }),
        /* @__PURE__ */ a.jsx("p", { children: "Create AI reviewers, explanations, flashcards, quizzes, and summaries from a topic or your notes. Use the planner to track deadlines and the dashboard to see your progress." }),
        /* @__PURE__ */ a.jsx("a", { href: "#/study", children: "Explore AI study tools" })
      ] }) })
    ] })
  ] });
}
const bf = [
  { href: "#/", label: "Home", route: "/" },
  { href: "#/study", label: "AI study tools", route: "/study" },
  { href: "#/planner", label: "Planner", route: "/planner" },
  { href: "#/dashboard", label: "Dashboard", route: "/dashboard" }
];
function ep({ currentRoute: e }) {
  const [t, n] = V.useState(!1);
  return /* @__PURE__ */ a.jsx("header", { className: "site-header", children: /* @__PURE__ */ a.jsxs("nav", { className: "container navbar navbar-expand-md", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ a.jsxs("a", { className: "navbar-brand brand-mark", href: "#/", "aria-label": "StudySprout home", children: [
      /* @__PURE__ */ a.jsx("span", { className: "brand-icon", "aria-hidden": "true", children: "S" }),
      "StudySprout"
    ] }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "navbar-toggler",
        type: "button",
        "aria-controls": "main-navigation",
        "aria-expanded": t,
        "aria-label": "Toggle navigation",
        onClick: () => n((r) => !r),
        children: /* @__PURE__ */ a.jsx("span", { className: "navbar-toggler-icon" })
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: `collapse navbar-collapse${t ? " show" : ""}`, id: "main-navigation", children: /* @__PURE__ */ a.jsxs("ul", { className: "navbar-nav ms-auto", children: [
      bf.map((r) => /* @__PURE__ */ a.jsx("li", { className: "nav-item", children: /* @__PURE__ */ a.jsx(
        "a",
        {
          className: `nav-link ${e === r.route ? "active" : ""}`,
          href: r.href,
          "aria-current": e === r.route ? "page" : void 0,
          onClick: () => n(!1),
          children: r.label
        }
      ) }, r.route)),
      window.studySproutAccount ? /* @__PURE__ */ a.jsx("li", { className: "nav-item", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "nav-link", onClick: () => window.dispatchEvent(new CustomEvent("studysprout-auth", { detail: "signout" })), children: "Sign out" }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("li", { className: "nav-item", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "nav-link", onClick: () => {
          n(!1), window.dispatchEvent(new CustomEvent("studysprout-auth", { detail: "signin" }));
        }, children: "Log in" }) }),
        /* @__PURE__ */ a.jsx("li", { className: "nav-item", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "nav-link", onClick: () => {
          n(!1), window.dispatchEvent(new CustomEvent("studysprout-auth", { detail: "signup" }));
        }, children: "Create account" }) })
      ] })
    ] }) })
  ] }) });
}
const Cr = {
  title: "",
  subject: "",
  due: "",
  time: "",
  priority: "Medium",
  notes: ""
};
function tp({ task: e, subjects: t, disabled: n, onSubmit: r, onCancel: l }) {
  const [o, i] = V.useState(Cr), [u, s] = V.useState("");
  V.useEffect(() => {
    i(e ? { ...Cr, ...e } : Cr);
  }, [e]);
  function d(h) {
    const { name: m, value: g } = h.target;
    i((S) => ({ ...S, [m]: g })), s("");
  }
  function v(h) {
    h.preventDefault();
    const m = h.currentTarget;
    if (o.title.trim().length < 3 || !o.subject.trim()) {
      s(
        o.title.trim().length < 3 ? "Title must be at least 3 characters." : "Subject is required."
      );
      return;
    }
    if (!m.reportValidity()) return;
    r({
      ...o,
      title: o.title.trim(),
      subject: o.subject.trim(),
      notes: o.notes.trim()
    }) && !e && i(Cr);
  }
  return /* @__PURE__ */ a.jsx("form", { className: "task-form card", onSubmit: v, children: /* @__PURE__ */ a.jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "form-heading", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "TASK DETAILS" }),
        /* @__PURE__ */ a.jsx("h2", { children: e ? "Edit task" : "Add a task" })
      ] }),
      e && /* @__PURE__ */ a.jsx("button", { className: "btn btn-sm btn-link", type: "button", onClick: l, children: "Cancel" })
    ] }),
    u && /* @__PURE__ */ a.jsx("p", { className: "form-error", role: "alert", children: u }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ a.jsx("label", { className: "form-label", htmlFor: "task-title", children: "Title" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          id: "task-title",
          className: "form-control",
          name: "title",
          value: o.title,
          onChange: d,
          placeholder: "e.g. Chapter 4 reading",
          minLength: 3,
          maxLength: 100,
          required: !0,
          disabled: n
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ a.jsx("label", { className: "form-label", htmlFor: "task-subject", children: "Subject" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          id: "task-subject",
          className: "form-control",
          name: "subject",
          value: o.subject,
          onChange: d,
          placeholder: "e.g. Biology",
          list: "subject-options",
          maxLength: 60,
          required: !0,
          disabled: n
        }
      ),
      /* @__PURE__ */ a.jsx("datalist", { id: "subject-options", children: t.map((h) => /* @__PURE__ */ a.jsx("option", { value: h }, h)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "row g-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "col-7", children: [
        /* @__PURE__ */ a.jsx("label", { className: "form-label", htmlFor: "task-due", children: "Due date" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            id: "task-due",
            className: "form-control",
            name: "due",
            type: "date",
            value: o.due,
            onChange: d,
            required: !0,
            disabled: n
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-5", children: [
        /* @__PURE__ */ a.jsxs("label", { className: "form-label", htmlFor: "task-time", children: [
          "Time ",
          /* @__PURE__ */ a.jsx("span", { className: "optional-label", children: "optional" })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            id: "task-time",
            className: "form-control",
            name: "time",
            type: "time",
            value: o.time,
            onChange: d,
            disabled: n
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-3 mb-3", children: [
      /* @__PURE__ */ a.jsx("label", { className: "form-label", htmlFor: "task-priority", children: "Priority" }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          id: "task-priority",
          className: "form-select",
          name: "priority",
          value: o.priority,
          onChange: d,
          disabled: n,
          children: [
            /* @__PURE__ */ a.jsx("option", { children: "High" }),
            /* @__PURE__ */ a.jsx("option", { children: "Medium" }),
            /* @__PURE__ */ a.jsx("option", { children: "Low" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "form-label", htmlFor: "task-notes", children: [
        "Notes ",
        /* @__PURE__ */ a.jsx("span", { className: "optional-label", children: "optional" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          id: "task-notes",
          className: "form-control",
          name: "notes",
          rows: "3",
          value: o.notes,
          onChange: d,
          maxLength: 500,
          placeholder: "Add a helpful reminder",
          disabled: n
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("button", { className: "btn btn-primary w-100", type: "submit", disabled: n, children: e ? "Save changes" : "Add task" })
  ] }) });
}
function np({ tasks: e, allTaskCount: t, onToggle: n, onEdit: r, onDelete: l }) {
  return e.length ? /* @__PURE__ */ a.jsx("ul", { className: "task-list", children: e.map((o) => /* @__PURE__ */ a.jsx(
    hc,
    {
      task: o,
      onToggle: () => n(o),
      onEdit: () => r(o),
      onDelete: () => l(o)
    },
    o.id
  )) }) : /* @__PURE__ */ a.jsxs("div", { className: "empty-state", role: "status", children: [
    /* @__PURE__ */ a.jsx("span", { className: "empty-icon", "aria-hidden": "true", children: "✓" }),
    /* @__PURE__ */ a.jsx("h3", { children: t ? "No tasks match these filters." : "Nothing on your list yet." }),
    /* @__PURE__ */ a.jsx("p", { children: t ? "Try changing your search or filters." : "Add a task to start shaping your study plan." })
  ] });
}
const Jl = {
  reviewer: "Study reviewer",
  explanation: "Explanation",
  flashcards: "Flashcards",
  quiz: "Practice quiz",
  summary: "Summary"
};
function rp() {
  const [e, t] = V.useState(null), [n, r] = V.useState(""), [l, o] = V.useState(!1);
  async function i(u) {
    if (u.preventDefault(), l) return;
    const { mode: s, source: d } = Object.fromEntries(new FormData(u.currentTarget));
    o(!0), t(null), r("");
    try {
      const v = await fetch("/api/study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: s, source: d })
      }), h = await v.json().catch(() => null);
      if (!v.ok || !Array.isArray(h == null ? void 0 : h.sections))
        throw new Error((h == null ? void 0 : h.error) || "The study API is unavailable. For local testing, use Vercel Dev.");
      t({ mode: s, sections: h.sections });
    } catch (v) {
      r(v.message);
    } finally {
      o(!1);
    }
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "mx-auto py-4", style: { maxWidth: "48rem" }, children: [
    /* @__PURE__ */ a.jsx("h1", { children: "AI study tools" }),
    /* @__PURE__ */ a.jsx("p", { children: "Turn a topic or your notes into study material." }),
    /* @__PURE__ */ a.jsx("form", { onSubmit: i, children: /* @__PURE__ */ a.jsxs("fieldset", { disabled: l, children: [
      /* @__PURE__ */ a.jsx("label", { className: "form-label", htmlFor: "study-mode", children: "Study format" }),
      /* @__PURE__ */ a.jsx("select", { id: "study-mode", name: "mode", className: "form-select mb-3", children: Object.entries(Jl).map(([u, s]) => /* @__PURE__ */ a.jsx("option", { value: u, children: s }, u)) }),
      /* @__PURE__ */ a.jsx("label", { className: "form-label", htmlFor: "study-source", children: "Topic or notes" }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          id: "study-source",
          name: "source",
          className: "form-control mb-2",
          rows: 7,
          maxLength: 8e3,
          required: !0,
          "aria-describedby": "study-privacy"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { id: "study-privacy", className: "small", children: "Your text is sent to Google Gemini. Leave out personal or confidential information." }),
      /* @__PURE__ */ a.jsx("button", { className: "btn btn-primary", type: "submit", children: "Generate study material" })
    ] }) }),
    /* @__PURE__ */ a.jsx("p", { role: "status", className: "mt-3", children: l ? "Generating…" : e ? "Study material ready." : "" }),
    n && /* @__PURE__ */ a.jsx("p", { role: "alert", children: n }),
    e && /* @__PURE__ */ a.jsxs("section", { "aria-label": Jl[e.mode], children: [
      /* @__PURE__ */ a.jsx("h2", { children: Jl[e.mode] }),
      e.sections.map(
        ({ heading: u, text: s }, d) => e.mode === "flashcards" || e.mode === "quiz" ? /* @__PURE__ */ a.jsxs("details", { className: "border rounded p-3 mb-2", children: [
          /* @__PURE__ */ a.jsx("summary", { children: u }),
          /* @__PURE__ */ a.jsx("p", { className: "mt-2 mb-0", style: { whiteSpace: "pre-wrap" }, children: s })
        ] }, d) : /* @__PURE__ */ a.jsxs("article", { className: "border rounded p-3 mb-2", children: [
          /* @__PURE__ */ a.jsx("h3", { className: "h5", children: u }),
          /* @__PURE__ */ a.jsx("p", { className: "mb-0", style: { whiteSpace: "pre-wrap" }, children: s })
        ] }, d)
      )
    ] })
  ] });
}
function lp({
  tasks: e,
  visibleTaskCount: t,
  subjects: n,
  filters: r,
  disabled: l,
  onChange: o,
  onClearFilters: i,
  onExport: u,
  onExportImage: s,
  onImport: d
}) {
  const v = V.useRef(null), h = r.query.trim() || r.subject !== "All" || r.status !== "All" || r.sort !== "due";
  function m(g) {
    const { name: S, value: x } = g.target;
    o((M) => ({ ...M, [S]: x }));
  }
  return /* @__PURE__ */ a.jsxs("div", { className: "task-toolbar", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "task-toolbar-heading", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("p", { className: "eyebrow", children: "YOUR WORKLOAD" }),
        /* @__PURE__ */ a.jsxs("h2", { children: [
          "Tasks ",
          /* @__PURE__ */ a.jsx("span", { className: "task-count", children: t }),
          t !== e.length && /* @__PURE__ */ a.jsxs("span", { className: "task-count-context", children: [
            "of ",
            e.length
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "task-toolbar-actions", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            ref: v,
            className: "import-backup-input",
            type: "file",
            accept: ".json,application/json",
            "aria-label": "Choose a StudySprout backup file",
            onChange: d
          }
        ),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "btn btn-sm btn-outline-secondary export-button",
            type: "button",
            onClick: () => {
              var g;
              return (g = v.current) == null ? void 0 : g.click();
            },
            disabled: l,
            children: "Restore backup"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "btn btn-sm btn-outline-secondary export-button",
            type: "button",
            onClick: u,
            disabled: !e.length,
            children: "Export backup"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "btn btn-sm btn-outline-secondary export-button",
            type: "button",
            onClick: s,
            disabled: !t,
            children: "Export image"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "row g-2", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "col-12", children: [
        /* @__PURE__ */ a.jsx("label", { className: "visually-hidden", htmlFor: "task-search", children: "Search tasks" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            id: "task-search",
            className: "form-control",
            type: "search",
            name: "query",
            value: r.query,
            onChange: m,
            placeholder: "Search title, subject, or notes..."
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-6 col-lg-4", children: [
        /* @__PURE__ */ a.jsx("label", { className: "visually-hidden", htmlFor: "subject-filter", children: "Filter by subject" }),
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            id: "subject-filter",
            className: "form-select",
            name: "subject",
            value: r.subject,
            onChange: m,
            children: [
              /* @__PURE__ */ a.jsx("option", { children: "All" }),
              n.map((g) => /* @__PURE__ */ a.jsx("option", { children: g }, g))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-6 col-lg-4", children: [
        /* @__PURE__ */ a.jsx("label", { className: "visually-hidden", htmlFor: "status-filter", children: "Filter by status" }),
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            id: "status-filter",
            className: "form-select",
            name: "status",
            value: r.status,
            onChange: m,
            children: [
              /* @__PURE__ */ a.jsx("option", { children: "All" }),
              /* @__PURE__ */ a.jsx("option", { children: "Pending" }),
              /* @__PURE__ */ a.jsx("option", { children: "Done" }),
              /* @__PURE__ */ a.jsx("option", { children: "Overdue" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-12 col-lg-4", children: [
        /* @__PURE__ */ a.jsx("label", { className: "visually-hidden", htmlFor: "task-sort", children: "Sort tasks" }),
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            id: "task-sort",
            className: "form-select",
            name: "sort",
            value: r.sort,
            onChange: m,
            children: [
              /* @__PURE__ */ a.jsx("option", { value: "due", children: "Sort: Due date" }),
              /* @__PURE__ */ a.jsx("option", { value: "priority", children: "Sort: Priority" })
            ]
          }
        )
      ] }),
      h && /* @__PURE__ */ a.jsx("div", { className: "col-12", children: /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "btn btn-sm btn-link clear-filters",
          type: "button",
          onClick: i,
          children: "Reset view"
        }
      ) })
    ] })
  ] });
}
const vc = "sp-tasks", op = [
  {
    title: "Review lecture notes",
    subject: "Biology",
    due: Un(1),
    time: "",
    priority: "High",
    notes: "Focus on the cell structure chapter."
  },
  {
    title: "Prepare calculus problem set",
    subject: "Mathematics",
    due: Un(3),
    time: "",
    priority: "Medium",
    notes: ""
  },
  {
    title: "Read assigned history chapter",
    subject: "History",
    due: Un(-1),
    time: "",
    priority: "Low",
    notes: "",
    done: !0
  }
].map((e) => ({ ...e, id: crypto.randomUUID(), done: e.done ?? !1 }));
function Un(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setDate(t.getDate() + e), [
    t.getFullYear(),
    String(t.getMonth() + 1).padStart(2, "0"),
    String(t.getDate()).padStart(2, "0")
  ].join("-");
}
function ip(e, t, n) {
  const r = [];
  let l = "";
  for (const o of t.split(/\s+/).filter(Boolean)) {
    let i = "";
    for (const s of o)
      i && e.measureText(i + s).width > n ? (l && (r.push(l), l = ""), r.push(i), i = s) : i += s;
    if (!i) continue;
    const u = l ? `${l} ${i}` : i;
    l && e.measureText(u).width > n ? (r.push(l), l = i) : l = u;
  }
  return l && r.push(l), r.length ? r : ["Untitled task"];
}
function up(e) {
  if (!e.due) return "No due date";
  const t = /* @__PURE__ */ new Date(`${e.due}T00:00:00`);
  if (Number.isNaN(t.getTime())) return "Date unavailable";
  const n = new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(t);
  return e.time ? `${n} at ${e.time}` : n;
}
function sp() {
  try {
    return { tasks: fc(window.localStorage.getItem(vc)), error: "" };
  } catch (e) {
    return {
      tasks: [],
      error: e instanceof Error ? e.message : "Saved planner data could not be read."
    };
  }
}
function Ju() {
  const e = window.location.hash.replace(/^#/, "");
  return e === "/planner" || e === "/dashboard" || e === "/study" ? e : "/";
}
function ap() {
  const e = V.useMemo(sp, []), [t, n] = V.useState(e.tasks), [r, l] = V.useState(e.error), [o, i] = V.useState(Ju), [u, s] = V.useState(
    () => document.documentElement.dataset.theme || "light"
  ), [d, v] = V.useState(""), [h, m] = V.useState({
    query: "",
    subject: "All",
    status: "All",
    sort: "due"
  }), [g, S] = V.useState(null);
  V.useEffect(() => {
    let C;
    function D() {
      C == null || C.skipTransition();
      const L = () => {
        cc.flushSync(() => i(Ju())), window.scrollTo({ top: 0, behavior: "instant" });
      };
      if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        C = document.startViewTransition(L);
        return;
      }
      L();
    }
    return window.addEventListener("hashchange", D), () => {
      window.removeEventListener("hashchange", D), C == null || C.skipTransition();
    };
  }, []);
  const x = V.useMemo(
    () => [...new Set(t.map((C) => C.subject))].sort((C, D) => C.localeCompare(D)),
    [t]
  ), M = V.useMemo(
    () => mc(t, h),
    [t, h]
  ), f = V.useMemo(() => Xf(t), [t]);
  function c(C, D) {
    if (r)
      return v("Planner changes are disabled because saved data could not be read."), !1;
    try {
      return window.localStorage.setItem(vc, JSON.stringify(C)), n(C), v(D), !0;
    } catch (L) {
      return v(
        L instanceof Error ? `Planner changes could not be saved: ${L.message}` : "Planner changes could not be saved. Check browser storage and try again."
      ), !1;
    }
  }
  function p(C) {
    if (g) {
      const D = t.map(
        (L) => L.id === g.id ? { ...L, ...C } : L
      );
      return c(D, "Task updated.") ? (S(null), !0) : !1;
    }
    return c(
      [{ ...C, id: crypto.randomUUID(), done: !1 }, ...t],
      "Task added."
    );
  }
  function y(C) {
    c(
      t.map(
        (D) => D.id === C.id ? { ...D, done: !D.done } : D
      ),
      C.done ? "Task marked as pending." : "Task completed."
    );
  }
  function E(C) {
    window.confirm(`Delete "${C.title}"? This cannot be undone.`) && (c(
      t.filter((D) => D.id !== C.id),
      "Task deleted."
    ), (g == null ? void 0 : g.id) === C.id && S(null));
  }
  function _() {
    const C = [...op, ...t];
    c(C, "Sample tasks added to your planner.") && (window.location.hash = "/planner");
  }
  function T() {
    const C = u === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = C, document.querySelector('meta[name="theme-color"]').content = C === "dark" ? "#111827" : "#f7f8fc", s(C);
    try {
      window.localStorage.setItem("sp-theme", C);
    } catch (D) {
      v(
        D instanceof Error ? `Theme changed, but your preference could not be saved: ${D.message}` : "Theme changed, but your preference could not be saved."
      );
    }
  }
  function P() {
    try {
      const C = {
        version: 1,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        tasks: t
      }, D = new Blob([JSON.stringify(C, null, 2)], {
        type: "application/json"
      }), L = document.createElement("a"), b = URL.createObjectURL(D);
      try {
        L.href = b, L.download = `studysprout-backup-${Un(0)}.json`, document.body.appendChild(L), L.click(), v("Your task backup was downloaded.");
      } finally {
        L.remove(), window.setTimeout(() => URL.revokeObjectURL(b), 1e3);
      }
    } catch (C) {
      v(
        C instanceof Error ? `Task backup could not be downloaded: ${C.message}` : "Task backup could not be downloaded."
      );
    }
  }
  async function Q(C) {
    var L;
    const D = (L = C.currentTarget.files) == null ? void 0 : L[0];
    if (C.currentTarget.value = "", !!D)
      try {
        const b = Gf(await D.text());
        if (!window.confirm(
          `Replace your ${t.length} current tasks with ${b.length} tasks from this backup?`
        )) return;
        c(b, "Your planner was restored from backup.") && S(null);
      } catch (b) {
        v(
          b instanceof Error ? `Backup could not be restored: ${b.message}` : "Backup could not be restored. Choose a valid StudySprout backup."
        );
      }
  }
  async function R() {
    if (M.length)
      try {
        const C = document.createElement("canvas");
        C.width = 1200;
        const D = C.getContext("2d");
        if (!D)
          throw new Error("Canvas image export is not supported by this browser.");
        const L = 64, b = C.width - L * 2;
        D.font = "600 25px Inter, ui-sans-serif, system-ui, sans-serif";
        const lt = M.map((A) => {
          const he = ip(
            D,
            A.title.trim() || "Untitled task",
            b - 52
          );
          return {
            task: A,
            titleLines: he,
            height: 120 + Math.max(0, he.length - 1) * 30
          };
        }), Ut = 14, j = 184;
        C.height = L * 2 + j + lt.reduce((A, he) => A + he.height, 0) + Ut * Math.max(0, lt.length - 1);
        const k = C.getContext("2d");
        if (!k)
          throw new Error("Canvas image export is not supported by this browser.");
        k.fillStyle = "#f6f7fb", k.fillRect(0, 0, C.width, C.height), k.fillStyle = "#202940", k.font = "700 40px Inter, ui-sans-serif, system-ui, sans-serif", k.fillText("StudySprout", L, L + 42), k.fillStyle = "#697386", k.font = "400 17px Inter, ui-sans-serif, system-ui, sans-serif";
        const z = new Intl.DateTimeFormat(void 0, {
          dateStyle: "long"
        }).format(/* @__PURE__ */ new Date()), K = M.filter((A) => A.done).length;
        k.fillText(
          `${M.length} tasks · ${K} completed · ${z}`,
          L,
          L + 76
        ), k.fillStyle = "#dfe2ee", k.fillRect(L, L + 105, b, 1);
        let U = L + j;
        for (const { task: A, titleLines: he, height: yn } of lt) {
          k.beginPath(), k.roundRect(L, U, b, yn, 14), k.fillStyle = "#ffffff", k.fill(), k.strokeStyle = "#e5e8f0", k.lineWidth = 1, k.stroke(), k.fillStyle = A.done ? "#288363" : "#5147db", k.font = "700 12px Inter, ui-sans-serif, system-ui, sans-serif", k.fillText(A.done ? "COMPLETED" : "TO DO", L + 26, U + 29), k.textAlign = "right", k.fillStyle = A.priority === "High" ? "#bd4d43" : A.priority === "Low" ? "#6f7a8a" : "#9b701e", k.fillText(`${A.priority} priority`, L + b - 26, U + 29), k.textAlign = "left", k.fillStyle = A.done ? "#747d8d" : "#273149", k.font = "600 25px Inter, ui-sans-serif, system-ui, sans-serif", he.forEach((gc, wc) => {
            k.fillText(gc, L + 26, U + 66 + wc * 30);
          });
          const Bi = U + 66 + he.length * 30;
          k.fillStyle = "#697386", k.font = "400 15px Inter, ui-sans-serif, system-ui, sans-serif", k.fillText(A.subject || "General", L + 26, Bi, 560), k.textAlign = "right", k.fillText(`Due ${up(A)}`, L + b - 26, Bi), k.textAlign = "left", U += yn + Ut;
        }
        const At = await new Promise((A, he) => {
          C.toBlob((yn) => {
            yn ? A(yn) : he(new Error("The browser could not create the task image."));
          }, "image/png");
        }), Be = URL.createObjectURL(At), Ye = document.createElement("a");
        try {
          Ye.href = Be, Ye.download = `studysprout-tasks-${Un(0)}.png`, document.body.appendChild(Ye), Ye.click(), v("Your task list image was downloaded.");
        } finally {
          Ye.remove(), window.setTimeout(() => URL.revokeObjectURL(Be), 1e3);
        }
      } catch (C) {
        v(
          C instanceof Error ? `Task image could not be downloaded: ${C.message}` : "Task image could not be downloaded."
        );
      }
  }
  const ke = t.filter((C) => {
    const D = /* @__PURE__ */ new Date(), L = /* @__PURE__ */ new Date(`${C.due}T00:00:00`), b = Math.floor((L - new Date(D.getFullYear(), D.getMonth(), D.getDate())) / 864e5);
    return !C.done && b >= 0 && b <= 3;
  }).length;
  return /* @__PURE__ */ a.jsxs("div", { className: o === "/" ? "app-shell journey-home" : "app-shell", children: [
    /* @__PURE__ */ a.jsx(
      ep,
      {
        currentRoute: o,
        theme: u,
        onThemeChange: T
      }
    ),
    /* @__PURE__ */ a.jsxs("main", { className: "container app-main", children: [
      r && /* @__PURE__ */ a.jsxs("div", { className: "alert alert-danger", role: "alert", children: [
        "Saved planner data could not be loaded. ",
        r,
        " Existing data has not been changed; refresh after resolving the browser storage issue."
      ] }),
      d && /* @__PURE__ */ a.jsxs("div", { className: "alert alert-info feedback-alert", role: "status", "aria-live": "polite", children: [
        d,
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "btn-close",
            "aria-label": "Dismiss message",
            onClick: () => v("")
          }
        )
      ] }),
      o === "/" && /* @__PURE__ */ a.jsx(qf, { onLoadSamples: _, hasTasks: t.length > 0 }),
      o === "/study" && /* @__PURE__ */ a.jsx(rp, {}),
      o === "/dashboard" && /* @__PURE__ */ a.jsx(Jf, { tasks: t, summary: f, dueSoon: ke }),
      o === "/planner" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("h1", { className: "visually-hidden", children: "Study planner" }),
        /* @__PURE__ */ a.jsxs("div", { className: "planner-grid", children: [
          /* @__PURE__ */ a.jsx(
            tp,
            {
              task: g,
              subjects: x,
              disabled: !!r,
              onSubmit: p,
              onCancel: () => S(null)
            }
          ),
          /* @__PURE__ */ a.jsxs("section", { className: "task-panel", "aria-label": "Study tasks", children: [
            /* @__PURE__ */ a.jsx(
              lp,
              {
                tasks: t,
                visibleTaskCount: M.length,
                subjects: x,
                filters: h,
                disabled: !!r,
                onChange: m,
                onClearFilters: () => m({
                  query: "",
                  subject: "All",
                  status: "All",
                  sort: "due"
                }),
                onExport: P,
                onExportImage: R,
                onImport: Q
              }
            ),
            /* @__PURE__ */ a.jsx(
              np,
              {
                tasks: M,
                allTaskCount: t.length,
                onToggle: y,
                onEdit: (C) => {
                  S(C), window.scrollTo({ top: 0, behavior: "smooth" });
                },
                onDelete: E
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("footer", { className: "app-footer", children: /* @__PURE__ */ a.jsxs("div", { className: "container", children: [
      "StudySprout",
      /* @__PURE__ */ a.jsx("span", { className: "footer-note", children: "Your planner is saved in this browser." })
    ] }) })
  ] });
}
const yc = document.getElementById("root");
if (!yc)
  throw new Error("StudySprout could not find its root element.");
dc(yc).render(
  /* @__PURE__ */ a.jsx(Ic.StrictMode, { children: /* @__PURE__ */ a.jsx(ap, {}) })
);
