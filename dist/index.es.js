var Ts = Object.defineProperty;
var Fs = (e, t, n) => t in e ? Ts(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ke = (e, t, n) => Fs(e, typeof t != "symbol" ? t + "" : t, n);
import { options as Ce, Component as wt, createElement as V, Fragment as ve, toChildArray as ut, createRef as An, createContext as pe, cloneElement as Os, render as En, hydrate as Is } from "preact";
var Ms = 0;
function y(e, t, n, r, o, i) {
  t || (t = {});
  var l, s, a = t;
  if ("ref" in a) for (s in a = {}, t) s == "ref" ? l = t[s] : a[s] = t[s];
  var u = { type: e, props: a, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ms, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) a[s] === void 0 && (a[s] = l[s]);
  return Ce.vnode && Ce.vnode(u), u;
}
var rt, ce, er, _o, Pt = 0, xi = [], he = Ce, xo = he.__b, Co = he.__r, So = he.diffed, Eo = he.__c, Ro = he.unmount, $o = he.__;
function Ct(e, t) {
  he.__h && he.__h(ce, e, Pt || t), Pt = 0;
  var n = ce.__H || (ce.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function j(e) {
  return Pt = 1, ot(Ci, e);
}
function ot(e, t, n) {
  var r = Ct(rt++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ci(void 0, t), function(s) {
    var a = r.__N ? r.__N[0] : r.__[0], u = r.t(a, s);
    a !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = ce, !ce.u)) {
    var o = function(s, a, u) {
      if (!r.__c.__H) return !0;
      var c = r.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (c.every(function(f) {
        return !f.__N;
      })) return !i || i.call(this, s, a, u);
      var p = r.__c.props !== s;
      return c.forEach(function(f) {
        if (f.__N) {
          var d = f.__[0];
          f.__ = f.__N, f.__N = void 0, d !== f.__[0] && (p = !0);
        }
      }), i && i.call(this, s, a, u) || p;
    };
    ce.u = !0;
    var i = ce.shouldComponentUpdate, l = ce.componentWillUpdate;
    ce.componentWillUpdate = function(s, a, u) {
      if (this.__e) {
        var c = i;
        i = void 0, o(s, a, u), i = c;
      }
      l && l.call(this, s, a, u);
    }, ce.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function oe(e, t) {
  var n = Ct(rt++, 3);
  !he.__s && Kr(n.__H, t) && (n.__ = e, n.i = t, ce.__H.__h.push(n));
}
function Ze(e, t) {
  var n = Ct(rt++, 4);
  !he.__s && Kr(n.__H, t) && (n.__ = e, n.i = t, ce.__h.push(n));
}
function H(e) {
  return Pt = 5, U(function() {
    return { current: e };
  }, []);
}
function Wr(e, t, n) {
  Pt = 6, Ze(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function U(e, t) {
  var n = Ct(rt++, 7);
  return Kr(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function le(e, t) {
  return Pt = 8, U(function() {
    return e;
  }, t);
}
function ue(e) {
  var t = ce.context[e.__c], n = Ct(rt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ce)), t.props.value) : e.__;
}
function qr(e, t) {
  he.useDebugValue && he.useDebugValue(t ? t(e) : e);
}
function Ps(e) {
  var t = Ct(rt++, 10), n = j();
  return t.__ = e, ce.componentDidCatch || (ce.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Ve() {
  var e = Ct(rt++, 11);
  if (!e.__) {
    for (var t = ce.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function As() {
  for (var e; e = xi.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(xn), e.__H.__h.forEach(_r), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], he.__e(t, e.__v);
  }
}
he.__b = function(e) {
  ce = null, xo && xo(e);
}, he.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), $o && $o(e, t);
}, he.__r = function(e) {
  Co && Co(e), rt = 0;
  var t = (ce = e.__c).__H;
  t && (er === ce ? (t.__h = [], ce.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(xn), t.__h.forEach(_r), t.__h = [], rt = 0)), er = ce;
}, he.diffed = function(e) {
  So && So(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (xi.push(t) !== 1 && _o === he.requestAnimationFrame || ((_o = he.requestAnimationFrame) || ks)(As)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), er = ce = null;
}, he.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(xn), n.__h = n.__h.filter(function(r) {
        return !r.__ || _r(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], he.__e(r, n.__v);
    }
  }), Eo && Eo(e, t);
}, he.unmount = function(e) {
  Ro && Ro(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      xn(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && he.__e(t, n.__v));
};
var To = typeof requestAnimationFrame == "function";
function ks(e) {
  var t, n = function() {
    clearTimeout(r), To && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  To && (t = requestAnimationFrame(n));
}
function xn(e) {
  var t = ce, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ce = t;
}
function _r(e) {
  var t = ce;
  e.__c = e.__(), ce = t;
}
function Kr(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Si(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function xr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function kn(e, t) {
  var n = t(), r = j({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ze(function() {
    o.__ = n, o.u = t, tr(o) && i({ t: o });
  }, [e, n, t]), oe(function() {
    return tr(o) && i({ t: o }), e(function() {
      tr(o) && i({ t: o });
    });
  }, [e]), n;
}
function tr(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Yr(e) {
  e();
}
function Xr(e) {
  return e;
}
function Zr() {
  return [!1, Yr];
}
var Qr = Ze;
function Rn(e, t) {
  this.props = e, this.context = t;
}
function Ei(e, t) {
  function n(o) {
    var i = this.props.ref, l = i == o.ref;
    return !l && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !l : xr(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, V(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Rn.prototype = new wt()).isPureReactComponent = !0, Rn.prototype.shouldComponentUpdate = function(e, t) {
  return xr(this.props, e) || xr(this.state, t);
};
var Fo = Ce.__b;
Ce.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Fo && Fo(e);
};
var Ns = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ge(e) {
  function t(n) {
    var r = Si({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Ns, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Oo = function(e, t) {
  return e == null ? null : ut(ut(e).map(t));
}, Ri = { map: Oo, forEach: Oo, count: function(e) {
  return e ? ut(e).length : 0;
}, only: function(e) {
  var t = ut(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ut }, Ls = Ce.__e;
Ce.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Ls(e, t, n, r);
};
var Io = Ce.unmount;
function $i(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Si({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return $i(r, t, n);
  })), e;
}
function Ti(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ti(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Yt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Fi(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Oi(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(l) {
      n = l.default || l;
    }, function(l) {
      r = l;
    }), r) throw r;
    if (!n) throw t;
    return V(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ot() {
  this.i = null, this.l = null;
}
Ce.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Io && Io(e);
}, (Yt.prototype = new wt()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Fi(r.__v), i = !1, l = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = l;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Ti(a, a.__c.__P, a.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
}, Yt.prototype.componentWillUnmount = function() {
  this.o = [];
}, Yt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = $i(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && V(ve, null, e.fallback);
  return o && (o.__u &= -33), [V(ve, null, t.__a ? null : e.children), o];
};
var Mo = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Ds(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Vs(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    En(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), En(V(Ds, { context: t.context }, e.__v), t.v);
}
function Nn(e, t) {
  var n = V(Vs, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Ot.prototype = new wt()).__a = function(e) {
  var t = this, n = Fi(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Mo(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ot.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ut(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Ot.prototype.componentDidUpdate = Ot.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Mo(e, n, t);
  });
};
var Ii = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Hs = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, zs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Bs = /[A-Z0-9]/g, js = typeof document < "u", Gs = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Mi(e, t, n) {
  return t.__k == null && (t.textContent = ""), En(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Pi(e, t, n) {
  return Is(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
wt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(wt.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Po = Ce.event;
function Us() {
}
function Ws() {
  return this.cancelBubble;
}
function qs() {
  return this.defaultPrevented;
}
Ce.event = function(e) {
  return Po && (e = Po(e)), e.persist = Us, e.isPropagationStopped = Ws, e.isDefaultPrevented = qs, e.nativeEvent = e;
};
var Jr, Ks = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ao = Ce.vnode;
Ce.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var l in n) {
      var s = n[l];
      if (!(l === "value" && "defaultValue" in n && s == null || js && l === "children" && r === "noscript" || l === "class" || l === "className")) {
        var a = l.toLowerCase();
        l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Gs(n.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : zs.test(l) && (l = a) : a = l = "oninput" : i && Hs.test(l) ? l = l.replace(Bs, "-$&").toLowerCase() : s === null && (s = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ut(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ut(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Ks)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Ii, Ao && Ao(e);
};
var ko = Ce.__r;
Ce.__r = function(e) {
  ko && ko(e), Jr = e.__c;
};
var No = Ce.diffed;
Ce.diffed = function(e) {
  No && No(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Jr = null;
};
var Ai = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Jr.__n[e.__c].props.value;
}, useCallback: le, useContext: ue, useDebugValue: qr, useDeferredValue: Xr, useEffect: oe, useId: Ve, useImperativeHandle: Wr, useInsertionEffect: Qr, useLayoutEffect: Ze, useMemo: U, useReducer: ot, useRef: H, useState: j, useSyncExternalStore: kn, useTransition: Zr } } }, Ys = "18.3.1";
function ki(e) {
  return V.bind(null, e);
}
function Lt(e) {
  return !!e && e.$$typeof === Ii;
}
function Ni(e) {
  return Lt(e) && e.type === ve;
}
function Li(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function eo(e) {
  return Lt(e) ? Os.apply(null, arguments) : e;
}
function Di(e) {
  return !!e.__k && (En(null, e), !0);
}
function Vi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Hi = function(e, t) {
  return e(t);
}, Ne = function(e, t) {
  return e(t);
}, zi = ve, Bi = Lt, N = { useState: j, useId: Ve, useReducer: ot, useEffect: oe, useLayoutEffect: Ze, useInsertionEffect: Qr, useTransition: Zr, useDeferredValue: Xr, useSyncExternalStore: kn, startTransition: Yr, useRef: H, useImperativeHandle: Wr, useMemo: U, useCallback: le, useContext: ue, useDebugValue: qr, version: "18.3.1", Children: Ri, render: Mi, hydrate: Pi, unmountComponentAtNode: Di, createPortal: Nn, createElement: V, createContext: pe, createFactory: ki, cloneElement: eo, createRef: An, Fragment: ve, isValidElement: Lt, isElement: Bi, isFragment: Ni, isMemo: Li, findDOMNode: Vi, Component: wt, PureComponent: Rn, memo: Ei, forwardRef: ge, flushSync: Ne, unstable_batchedUpdates: Hi, StrictMode: zi, Suspense: Yt, SuspenseList: Ot, lazy: Oi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ai };
const Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Ri,
  Component: wt,
  Fragment: ve,
  PureComponent: Rn,
  StrictMode: zi,
  Suspense: Yt,
  SuspenseList: Ot,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ai,
  cloneElement: eo,
  createContext: pe,
  createElement: V,
  createFactory: ki,
  createPortal: Nn,
  createRef: An,
  default: N,
  findDOMNode: Vi,
  flushSync: Ne,
  forwardRef: ge,
  hydrate: Pi,
  isElement: Bi,
  isFragment: Ni,
  isMemo: Li,
  isValidElement: Lt,
  lazy: Oi,
  memo: Ei,
  render: Mi,
  startTransition: Yr,
  unmountComponentAtNode: Di,
  unstable_batchedUpdates: Hi,
  useCallback: le,
  useContext: ue,
  useDebugValue: qr,
  useDeferredValue: Xr,
  useEffect: oe,
  useErrorBoundary: Ps,
  useId: Ve,
  useImperativeHandle: Wr,
  useInsertionEffect: Qr,
  useLayoutEffect: Ze,
  useMemo: U,
  useReducer: ot,
  useRef: H,
  useState: j,
  useSyncExternalStore: kn,
  useTransition: Zr,
  version: Ys
}, Symbol.toStringTag, { value: "Module" }));
function ji(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ji(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Xs() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ji(e)) && (r && (r += " "), r += t);
  return r;
}
const Lo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Do = Xs, Dt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Do(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, l = Object.keys(o).map((u) => {
    const c = n == null ? void 0 : n[u], p = i == null ? void 0 : i[u];
    if (c === null) return null;
    const f = Lo(c) || Lo(p);
    return o[u][f];
  }), s = n && Object.entries(n).reduce((u, c) => {
    let [p, f] = c;
    return f === void 0 || (u[p] = f), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: p, className: f, ...d } = c;
    return Object.entries(d).every((g) => {
      let [m, v] = g;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...s
      }[m]) : {
        ...i,
        ...s
      }[m] === v;
    }) ? [
      ...u,
      p,
      f
    ] : u;
  }, []);
  return Do(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Zs = Dt("text-center inline-block font-semibold", {
  variants: {
    variant: {
      primary: "shadow-xs bg-csv-importer-primary text-white",
      secondary: "bg-white text-csv-importer-primary ring-1 shadow-xs ring-bg-csv-importer-primary ring-inset",
      tertiary: "bg-white text-gray-900 ring-1 shadow-xs ring-csv-importer-tertiary ring-inset",
      success: "shadow-xs bg-csv-importer-success text-white",
      danger: "shadow-xs bg-csv-importer-danger text-white",
      warning: "shadow-xs bg-csv-importer-warning text-white"
    },
    size: {
      xs: "px-2 py-1 rounded-sm text-xs",
      sm: "px-2 py-1 rounded-sm text-sm",
      md: "px-2.5 py-1.5 rounded-md text-sm",
      lg: "px-3 py-2 rounded-md text-sm",
      xl: "px-3.5 py-2.5 rounded-md text-sm"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
      false: "cursor-pointer"
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      disabled: !1,
      className: "hover:bg-csv-importer-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-primary"
    },
    {
      variant: "secondary",
      disabled: !1,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-secondary"
    },
    {
      variant: "tertiary",
      disabled: !1,
      className: "hover:bg-csv-importer-tertiary-light"
    },
    {
      variant: "success",
      disabled: !1,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-success"
    },
    {
      variant: "danger",
      disabled: !1,
      className: "hover:bg-csv-importer-danger-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-danger"
    },
    {
      variant: "warning",
      disabled: !1,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:opacity-80"
    }
  ],
  defaultVariants: {
    size: "lg",
    variant: "primary",
    disabled: !1
  }
});
function Ke({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  size: o
}) {
  const i = Zs({ variant: t, disabled: n, size: o });
  return /* @__PURE__ */ y("div", { className: i, onClick: r, children: e });
}
const Qs = ge(
  ({ children: e, ...t }, n) => {
    const r = {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      padding: "10px",
      borderRadius: "5px",
      cursor: t.onClick ? "pointer" : "default"
    };
    return /* @__PURE__ */ y("div", { ref: n, style: r, ...t, children: e });
  }
);
function Vo({ id: e, checked: t, setChecked: n, label: r }) {
  return /* @__PURE__ */ y("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ y("div", { className: "flex h-6 shrink-0 items-center", children: /* @__PURE__ */ y("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ y(
        "input",
        {
          checked: t,
          onChange: (o) => n(o.target.checked),
          id: e,
          type: "checkbox",
          className: "checked:border-csv-importer-primary checked:bg-csv-importer-primary indeterminate:border-csv-importer-primary indeterminate:bg-csv-importer-primary focus-visible:outline-csv-importer-csv-importer-primary col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ y(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",
          children: [
            /* @__PURE__ */ y(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ y(
              "path",
              {
                d: "M3 7H11",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-indeterminate:opacity-100"
              }
            )
          ]
        }
      )
    ] }) }),
    r && /* @__PURE__ */ y("div", { className: "text-sm/6", children: /* @__PURE__ */ y("label", { htmlFor: e, className: "font-medium text-gray-900", children: r }) })
  ] });
}
const Gi = typeof document < "u" ? N.useLayoutEffect : () => {
};
function Js(e) {
  const t = H(null);
  return Gi(() => {
    t.current = e;
  }, [
    e
  ]), le((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const an = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, mt = (e) => e && "window" in e && e.window === e ? e : an(e).defaultView || window;
function ea(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function ta(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ui(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const na = Ui(function() {
  return ta(/^Mac/i);
}), ra = Ui(function() {
  return ea(/Android/i);
});
function oa(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : ra() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class ia {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function Wi(e) {
  let t = H({
    isFocused: !1,
    observer: null
  });
  Gi(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Js((r) => {
    e == null || e(r);
  });
  return le((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        t.current.isFocused = !1, o.disabled && n(new ia("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let s = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function la(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = le((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = Wi(i), s = le((a) => {
    const u = an(a.target);
    a.target === a.currentTarget && u.activeElement === a.target && (n && n(a), o && o(!0), l(a));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
let un = null, Sr = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Map(), yt = !1, Er = !1;
const sa = {
  Tab: !0,
  Escape: !0
};
function to(e, t) {
  for (let n of Sr) n(e, t);
}
function aa(e) {
  return !(e.metaKey || !na() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $n(e) {
  yt = !0, aa(e) && (un = "keyboard", to("keyboard", e));
}
function He(e) {
  un = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (yt = !0, to("pointer", e));
}
function qi(e) {
  oa(e) && (yt = !0, un = "virtual");
}
function Ki(e) {
  e.target === window || e.target === document || (!yt && !Er && (un = "virtual", to("virtual", e)), yt = !1, Er = !1);
}
function Yi() {
  yt = !1, Er = !0;
}
function Rr(e) {
  if (typeof window > "u" || Xt.get(mt(e))) return;
  const t = mt(e), n = an(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    yt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", $n, !0), n.addEventListener("keyup", $n, !0), n.addEventListener("click", qi, !0), t.addEventListener("focus", Ki, !0), t.addEventListener("blur", Yi, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", He, !0), n.addEventListener("pointermove", He, !0), n.addEventListener("pointerup", He, !0)) : (n.addEventListener("mousedown", He, !0), n.addEventListener("mousemove", He, !0), n.addEventListener("mouseup", He, !0)), t.addEventListener("beforeunload", () => {
    Xi(e);
  }, {
    once: !0
  }), Xt.set(t, {
    focus: r
  });
}
const Xi = (e, t) => {
  const n = mt(e), r = an(e);
  t && r.removeEventListener("DOMContentLoaded", t), Xt.has(n) && (n.HTMLElement.prototype.focus = Xt.get(n).focus, r.removeEventListener("keydown", $n, !0), r.removeEventListener("keyup", $n, !0), r.removeEventListener("click", qi, !0), n.removeEventListener("focus", Ki, !0), n.removeEventListener("blur", Yi, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", He, !0), r.removeEventListener("pointermove", He, !0), r.removeEventListener("pointerup", He, !0)) : (r.removeEventListener("mousedown", He, !0), r.removeEventListener("mousemove", He, !0), r.removeEventListener("mouseup", He, !0)), Xt.delete(n));
};
function ua(e) {
  const t = an(e);
  let n;
  return t.readyState !== "loading" ? Rr(e) : (n = () => {
    Rr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Xi(e, n);
}
typeof document < "u" && ua();
function Zi() {
  return un !== "pointer";
}
const ca = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function da(e, t, n) {
  var r;
  const o = typeof window < "u" ? mt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? mt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? mt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? mt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !ca.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof s && !sa[n.key]);
}
function fa(e, t, n) {
  Rr(), oe(() => {
    let r = (o, i) => {
      da(!!(n != null && n.isTextInput), o, i) && e(Zi());
    };
    return Sr.add(r), () => {
      Sr.delete(r);
    };
  }, t);
}
function pa(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = H({
    isFocusWithin: !1
  }), l = le((u) => {
    i.current.isFocusWithin && !u.currentTarget.contains(u.relatedTarget) && (i.current.isFocusWithin = !1, n && n(u), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = Wi(l), a = le((u) => {
    !i.current.isFocusWithin && document.activeElement === u.target && (r && r(u), o && o(!0), i.current.isFocusWithin = !0, s(u));
  }, [
    r,
    o,
    s
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: a,
      onBlur: l
    }
  };
}
let Tn = !1, nr = 0;
function $r() {
  Tn = !0, setTimeout(() => {
    Tn = !1;
  }, 50);
}
function Ho(e) {
  e.pointerType === "touch" && $r();
}
function ga() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Ho) : document.addEventListener("touchend", $r), nr++, () => {
      nr--, !(nr > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Ho) : document.removeEventListener("touchend", $r));
    };
}
function Qi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = j(!1), s = H({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  oe(ga, []);
  let { hoverProps: a, triggerHoverEnd: u } = U(() => {
    let c = (d, g) => {
      if (s.pointerType = g, o || g === "touch" || s.isHovered || !d.currentTarget.contains(d.target)) return;
      s.isHovered = !0;
      let m = d.currentTarget;
      s.target = m, t && t({
        type: "hoverstart",
        target: m,
        pointerType: g
      }), n && n(!0), l(!0);
    }, p = (d, g) => {
      if (s.pointerType = "", s.target = null, g === "touch" || !s.isHovered) return;
      s.isHovered = !1;
      let m = d.currentTarget;
      r && r({
        type: "hoverend",
        target: m,
        pointerType: g
      }), n && n(!1), l(!1);
    }, f = {};
    return typeof PointerEvent < "u" ? (f.onPointerEnter = (d) => {
      Tn && d.pointerType === "mouse" || c(d, d.pointerType);
    }, f.onPointerLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && p(d, d.pointerType);
    }) : (f.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, f.onMouseEnter = (d) => {
      !s.ignoreEmulatedMouseEvents && !Tn && c(d, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, f.onMouseLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && p(d, "mouse");
    }), {
      hoverProps: f,
      triggerHoverEnd: p
    };
  }, [
    t,
    n,
    r,
    o,
    s
  ]);
  return oe(() => {
    o && u({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: a,
    isHovered: i
  };
}
function Ji(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = H({
    isFocused: !1,
    isFocusVisible: t || Zi()
  }), [i, l] = j(!1), [s, a] = j(() => o.current.isFocused && o.current.isFocusVisible), u = le(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = le((d) => {
    o.current.isFocused = d, l(d), u();
  }, [
    u
  ]);
  fa((d) => {
    o.current.isFocusVisible = d, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = la({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: f } = pa({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? f : p
  };
}
var ma = Object.defineProperty, ha = (e, t, n) => t in e ? ma(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rr = (e, t, n) => (ha(e, typeof t != "symbol" ? t + "" : t, n), n);
let va = class {
  constructor() {
    rr(this, "current", this.detect()), rr(this, "handoffState", "pending"), rr(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, vt = new va();
function Vt(e) {
  return vt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Ln(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ye() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Ln(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = Ye();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function St() {
  let [e] = j(Ye);
  return oe(() => () => e.dispose(), [e]), e;
}
let ae = (e, t) => {
  vt.isServer ? oe(e, t) : Ze(e, t);
};
function pt(e) {
  let t = H(e);
  return ae(() => {
    t.current = e;
  }, [e]), t;
}
let z = function(e) {
  let t = pt(e);
  return N.useCallback((...n) => t.current(...n), [t]);
};
function wa(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function ya(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function ba({ disabled: e = !1 } = {}) {
  let t = H(null), [n, r] = j(!1), o = St(), i = z(() => {
    t.current = null, r(!1), o.dispose();
  }), l = z((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = Vt(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (u) => {
          if (t.current) {
            let c = wa(u);
            r(ya(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let _a = pe(void 0);
function no() {
  return ue(_a);
}
function Tr(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Pe(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Pe), r;
}
var At = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(At || {}), st = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(st || {});
function xe() {
  let e = Ca();
  return le((t) => xa({ mergeRefs: e, ...t }), [e]);
}
function xa({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? Sa;
  let a = el(t, e);
  if (i) return vn(a, n, r, l, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...p } = a;
    if (c) return vn(p, n, r, l, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...p } = a;
    return Pe(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return vn({ ...p, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return vn(a, n, r, l, s);
}
function vn(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = or(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let p = {};
  if (t) {
    let f = !1, d = [];
    for (let [g, m] of Object.entries(t)) typeof m == "boolean" && (f = !0), m === !0 && d.push(g.replace(/([A-Z])/g, (v) => `-${v.toLowerCase()}`));
    if (f) {
      p["data-headlessui-state"] = d.join(" ");
      for (let g of d) p[`data-${g}`] = "";
    }
  }
  if (i === ve && (Object.keys(lt(a)).length > 0 || Object.keys(lt(p)).length > 0)) if (!Lt(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(lt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(lt(a)).concat(Object.keys(lt(p))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = c.props, d = f == null ? void 0 : f.className, g = typeof d == "function" ? (...b) => Tr(d(...b), a.className) : Tr(d, a.className), m = g ? { className: g } : {}, v = el(c.props, lt(or(a, ["ref"])));
    for (let b in p) b in v && delete p[b];
    return eo(c, Object.assign({}, v, p, u, { ref: o(Ea(c), u.ref) }, m));
  }
  return V(i, Object.assign({}, or(a, ["ref"]), i !== ve && u, i !== ve && p), c);
}
function Ca() {
  let e = H([]), t = le((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function Sa(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function el(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let l = n[r];
    for (let s of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      s(o, ...i);
    }
  } });
  return t;
}
function ro(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let l of i) l == null || l(...o);
  } });
  return t;
}
function be(e) {
  var t;
  return Object.assign(ge(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function lt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function or(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Ea(e) {
  return N.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Ra(e, t, n) {
  let [r, o] = j(n), i = e !== void 0, l = H(i), s = H(!1), a = H(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !a.current && (a.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, z((u) => (i || o(u), t == null ? void 0 : t(u)))];
}
function $a(e) {
  let [t] = j(e);
  return t;
}
function tl(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) rl(n, nl(t, r), o);
  return n;
}
function nl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function rl(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) rl(e, nl(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : tl(n, t, e);
}
let Ta = "span";
var kt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(kt || {});
function Fa(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Ta, name: "Hidden" });
}
let en = be(Fa), Oa = pe(null);
function Ia({ children: e }) {
  let t = ue(Oa);
  if (!t) return N.createElement(N.Fragment, null, e);
  let { target: n } = t;
  return n ? Nn(N.createElement(N.Fragment, null, e), n) : null;
}
function Ma({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = j(null), s = St();
  return oe(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), N.createElement(Ia, null, N.createElement(Pa, { setForm: l, formId: t }), tl(e).map(([a, u]) => N.createElement(en, { features: kt.Hidden, ...lt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function Pa({ setForm: e, formId: t }) {
  return oe(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : N.createElement(en, { features: kt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let Aa = pe(void 0);
function ol() {
  return ue(Aa);
}
function ka(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Na(n) ? !1 : r;
}
function Na(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let il = Symbol();
function La(e, t = !0) {
  return Object.assign(e, { [il]: t });
}
function Ie(...e) {
  let t = H(e);
  oe(() => {
    t.current = e;
  }, [e]);
  let n = z((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[il])) ? void 0 : n;
}
let Dn = pe(null);
Dn.displayName = "DescriptionContext";
function ll() {
  let e = ue(Dn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ll), t;
  }
  return e;
}
function Da() {
  var e, t;
  return (t = (e = ue(Dn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function Va() {
  let [e, t] = j([]);
  return [e.length > 0 ? e.join(" ") : void 0, U(() => function(n) {
    let r = z((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = U(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return N.createElement(Dn.Provider, { value: o }, n.children);
  }, [t])];
}
let Ha = "p";
function za(e, t) {
  let n = Ve(), r = no(), { id: o = `headlessui-description-${n}`, ...i } = e, l = ll(), s = Ie(t);
  ae(() => l.register(o), [o, l.register]);
  let a = r || !1, u = U(() => ({ ...l.slot, disabled: a }), [l.slot, a]), c = { ref: s, ...l.props, id: o };
  return xe()({ ourProps: c, theirProps: i, slot: u, defaultTag: Ha, name: l.name || "Description" });
}
let Ba = be(za), ja = Object.assign(Ba, {});
var $e = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))($e || {});
let Vn = pe(null);
Vn.displayName = "LabelContext";
function sl() {
  let e = ue(Vn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, sl), t;
  }
  return e;
}
function Hn(e) {
  var t, n, r;
  let o = (n = (t = ue(Vn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Ga({ inherit: e = !1 } = {}) {
  let t = Hn(), [n, r] = j([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, U(() => function(i) {
    let l = z((a) => (r((u) => [...u, a]), () => r((u) => {
      let c = u.slice(), p = c.indexOf(a);
      return p !== -1 && c.splice(p, 1), c;
    }))), s = U(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return N.createElement(Vn.Provider, { value: s }, i.children);
  }, [r])];
}
let Ua = "label";
function Wa(e, t) {
  var n;
  let r = Ve(), o = sl(), i = ol(), l = no(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...c } = e, p = Ie(t);
  ae(() => o.register(s), [s, o.register]);
  let f = z((v) => {
    let b = v.currentTarget;
    if (b instanceof HTMLLabelElement && v.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(v), b instanceof HTMLLabelElement) {
      let C = document.getElementById(b.htmlFor);
      if (C) {
        let x = C.getAttribute("disabled");
        if (x === "true" || x === "") return;
        let R = C.getAttribute("aria-disabled");
        if (R === "true" || R === "") return;
        (C instanceof HTMLInputElement && (C.type === "radio" || C.type === "checkbox") || C.role === "radio" || C.role === "checkbox" || C.role === "switch") && C.click(), C.focus({ preventScroll: !0 });
      }
    }
  }), d = l || !1, g = U(() => ({ ...o.slot, disabled: d }), [o.slot, d]), m = { ref: p, ...o.props, id: s, htmlFor: a, onClick: f };
  return u && ("onClick" in m && (delete m.htmlFor, delete m.onClick), "onClick" in c && delete c.onClick), xe()({ ourProps: m, theirProps: c, slot: g, defaultTag: a ? Ua : "div", name: o.name || "Label" });
}
let qa = be(Wa), Ka = Object.assign(qa, {}), Ya = pe(() => {
});
function Xa({ value: e, children: t }) {
  return N.createElement(Ya.Provider, { value: e }, t);
}
function Ft(e, t, n) {
  let r = n.initialDeps ?? [], o;
  return () => {
    var i, l, s, a;
    let u;
    n.key && ((i = n.debug) != null && i.call(n)) && (u = Date.now());
    const c = e();
    if (!(c.length !== r.length || c.some((d, g) => r[g] !== d)))
      return o;
    r = c;
    let f;
    if (n.key && ((l = n.debug) != null && l.call(n)) && (f = Date.now()), o = t(...c), n.key && ((s = n.debug) != null && s.call(n))) {
      const d = Math.round((Date.now() - u) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, m = g / 16, v = (b, C) => {
        for (b = String(b); b.length < C; )
          b = " " + b;
        return b;
      };
      console.info(
        `%c⏱ ${v(g, 5)} /${v(d, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (a = n == null ? void 0 : n.onChange) == null || a.call(n, o), o;
  };
}
function ir(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Za = (e, t) => Math.abs(e - t) < 1, Qa = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
}, Ja = (e) => e, eu = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, tu = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const o = (l) => {
    const { width: s, height: a } = l;
    t({ width: Math.round(s), height: Math.round(a) });
  };
  if (o(n.getBoundingClientRect()), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((l) => {
    const s = () => {
      const a = l[0];
      if (a != null && a.borderBoxSize) {
        const u = a.borderBoxSize[0];
        if (u) {
          o({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      o(n.getBoundingClientRect());
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, zo = {
  passive: !0
}, Bo = typeof window > "u" ? !0 : "onscrollend" in window, nu = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && Bo ? () => {
  } : Qa(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (c) => () => {
    const { horizontal: p, isRtl: f } = e.options;
    o = p ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, i(), t(o, c);
  }, s = l(!0), a = l(!1);
  a(), n.addEventListener("scroll", s, zo);
  const u = e.options.useScrollendEvent && Bo;
  return u && n.addEventListener("scrollend", a, zo), () => {
    n.removeEventListener("scroll", s), u && n.removeEventListener("scrollend", a);
  };
}, ru = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[n.options.horizontal ? "width" : "height"]
  );
}, ou = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var o, i;
  const l = e + t;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, {
    [r.options.horizontal ? "left" : "top"]: l,
    behavior: n
  });
};
class iu {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((i) => {
          const l = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), n = null;
        },
        observe: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, o]) => {
        typeof o > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Ja,
        rangeExtractor: eu,
        onChange: () => {
        },
        measureElement: ru,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !0,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = Ft(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let l = r - 1; l >= 0; l--) {
        const s = n[l];
        if (o.has(s.lane))
          continue;
        const a = i.get(
          s.lane
        );
        if (a == null || s.end > a.end ? i.set(s.lane, s) : s.end < a.end && o.set(s.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((l, s) => l.end === s.end ? l.index - s.index : l.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = Ft(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, o, i, l) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: i,
        enabled: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ft(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: l }, s) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const a = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, a);
        for (let c = a; c < n; c++) {
          const p = i(c), f = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), d = f ? f.end + this.options.gap : r + o, g = s.get(p), m = typeof g == "number" ? g : this.options.estimateSize(c), v = d + m, b = f ? f.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: d,
            size: m,
            end: v,
            key: p,
            lane: b
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ft(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (n, r, o) => this.range = n.length > 0 && r > 0 ? lu({
        measurements: n,
        outerSize: r,
        scrollOffset: o
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ft(
      () => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, o, i, l) => i === null || l === null ? [] : n({
        startIndex: i,
        endIndex: l,
        overscan: r,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, o = n.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const o = this.indexFromElement(n), i = this.measurementsCache[o];
      if (!i)
        return;
      const l = i.key, s = this.elementsCache.get(l);
      s !== n && (s && this.observer.unobserve(s), this.observer.observe(n), this.elementsCache.set(l, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, l = r - i;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, l, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Ft(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let i = 0, l = n.length; i < l; i++) {
          const s = n[i], a = r[s];
          o.push(a);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return ir(
          r[al(
            0,
            r.length - 1,
            (o) => ir(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r) => {
      const o = this.getSize(), i = this.getScrollOffset();
      r === "auto" && n >= i + o && (r = "end"), r === "end" && (n -= o);
      const l = this.options.horizontal ? "scrollWidth" : "scrollHeight", a = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[l] : this.scrollElement[l] : 0) - o;
      return Math.max(Math.min(a, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.getSize(), l = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= l + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= l + this.options.scrollPaddingStart)
          r = "start";
        else
          return [l, r];
      const s = o.start - this.options.scrollPaddingStart + (o.size - i) / 2;
      switch (r) {
        case "center":
          return [this.getOffsetForAlignment(s, r), r];
        case "end":
          return [
            this.getOffsetForAlignment(
              o.end + this.options.scrollPaddingEnd,
              r
            ),
            r
          ];
        default:
          return [
            this.getOffsetForAlignment(
              o.start - this.options.scrollPaddingStart,
              r
            ),
            r
          ];
      }
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
      n = Math.max(0, Math.min(n, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const i = this.getOffsetForIndex(n, r);
      if (!i) return;
      const [l, s] = i;
      this._scrollToOffset(l, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(n)
        )) {
          const [u] = ir(
            this.getOffsetForIndex(n, s)
          );
          Za(u, this.getScrollOffset()) || this.scrollToIndex(n, { align: s, behavior: o });
        } else
          this.scrollToIndex(n, { align: s, behavior: o });
      }));
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let o;
      return r.length === 0 ? o = this.options.paddingStart : o = this.options.lanes === 1 ? ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0 : Math.max(
        ...r.slice(-this.options.lanes).map((i) => i.end)
      ), Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(n, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const al = (e, t, n, r) => {
  for (; e <= t; ) {
    const o = (e + t) / 2 | 0, i = n(o);
    if (i < r)
      e = o + 1;
    else if (i > r)
      t = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function lu({
  measurements: e,
  outerSize: t,
  scrollOffset: n
}) {
  const r = e.length - 1, i = al(0, r, (s) => e[s].start, n);
  let l = i;
  for (; l < r && e[l].end < n + t; )
    l++;
  return { startIndex: i, endIndex: l };
}
const jo = typeof document < "u" ? Ze : oe;
function su(e) {
  const t = ot(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var l;
      i ? Ne(t) : t(), (l = e.onChange) == null || l.call(e, o, i);
    }
  }, [r] = j(
    () => new iu(n)
  );
  return r.setOptions(n), jo(() => r._didMount(), []), jo(() => r._willUpdate()), r;
}
function au(e) {
  return su({
    observeElementRect: tu,
    observeElementOffset: nu,
    scrollToFn: ou,
    ...e
  });
}
function uu(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function cu(e = uu) {
  return le((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function du(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Go(e, t = !1) {
  let [n, r] = ot(() => ({}), {}), o = U(() => du(e), [e, n]);
  return ae(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let fu = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function ul(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let l = t[o].call(n, ...i);
    l && (n = l, r.forEach((s) => s()));
  } };
}
function cl(e) {
  return kn(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let pu = new fu(() => ul(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Ht(e, t) {
  let n = pu.get(t), r = Ve(), o = cl(n);
  if (ae(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let Fr = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map();
function Uo(e) {
  var t;
  let n = (t = Zt.get(e)) != null ? t : 0;
  return Zt.set(e, n + 1), n !== 0 ? () => Wo(e) : (Fr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Wo(e));
}
function Wo(e) {
  var t;
  let n = (t = Zt.get(e)) != null ? t : 1;
  if (n === 1 ? Zt.delete(e) : Zt.set(e, n - 1), n !== 1) return;
  let r = Fr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Fr.delete(e));
}
function dl(e, { allowed: t, disallowed: n } = {}) {
  let r = Ht(e, "inert-others");
  ae(() => {
    var o, i;
    if (!r) return;
    let l = Ye();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(Uo(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let u = Vt(a);
      if (!u) continue;
      let c = a.parentElement;
      for (; c && c !== u.body; ) {
        for (let p of c.children) s.some((f) => p.contains(f)) || l.add(Uo(p));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function fl(e, t, n) {
  let r = pt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  oe(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Ye();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let Fn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), gu = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var tt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(tt || {}), Or = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Or || {}), mu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(mu || {});
function hu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Fn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function vu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(gu)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var pl = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(pl || {});
function wu(e, t = 0) {
  var n;
  return e === ((n = Vt(e)) == null ? void 0 : n.body) ? !1 : Pe(t, { 0() {
    return e.matches(Fn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Fn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var yu = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(yu || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function nt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let bu = ["textarea", "input"].join(",");
function _u(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, bu)) != null ? n : !1;
}
function gl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Qt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? gl(e) : e : t & 64 ? vu(e) : hu(e);
  o.length > 0 && l.length > 1 && (l = l.filter((d) => !o.some((g) => g != null && "current" in g ? (g == null ? void 0 : g.current) === d : g === d))), r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, p = l.length, f;
  do {
    if (c >= p || c + p <= 0) return 0;
    let d = a + c;
    if (t & 16) d = (d + p) % p;
    else {
      if (d < 0) return 3;
      if (d >= p) return 1;
    }
    f = l[d], f == null || f.focus(u), c += s;
  } while (f !== i.activeElement);
  return t & 6 && _u(f) && f.select(), 2;
}
function ml() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function xu() {
  return /Android/gi.test(window.navigator.userAgent);
}
function hl() {
  return ml() || xu();
}
function Wt(e, t, n, r) {
  let o = pt(n);
  oe(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function vl(e, t, n, r) {
  let o = pt(n);
  oe(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const qo = 30;
function wl(e, t, n) {
  let r = Ht(e, "outside-click"), o = pt(n), i = le(function(a, u) {
    if (a.defaultPrevented) return;
    let c = u(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let p = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let f of p) if (f !== null && (f.contains(c) || a.composed && a.composedPath().includes(f))) return;
    return !wu(c, pl.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), l = H(null);
  Wt(r, "pointerdown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Wt(r, "mousedown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Wt(r, "click", (a) => {
    hl() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = H({ x: 0, y: 0 });
  Wt(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), Wt(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= qo || Math.abs(u.y - s.current.y) >= qo)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), vl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Et(...e) {
  return U(() => Vt(...e), [...e]);
}
function oo(e, t, n, r) {
  let o = pt(n);
  oe(() => {
    e = e ?? window;
    function i(l) {
      o.current(l);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function yl(e) {
  let t = H({ value: "", selectionStart: null, selectionEnd: null });
  return oo(e, "blur", (n) => {
    let r = n.target;
    r instanceof HTMLInputElement && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), z(() => {
    if (document.activeElement !== e && e instanceof HTMLInputElement && e.isConnected) {
      if (e.focus({ preventScroll: !0 }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
      else {
        let { selectionStart: n, selectionEnd: r } = t.current;
        n !== null && r !== null && e.setSelectionRange(n, r);
      }
      t.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Cu(e, t) {
  return U(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function Su() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - o);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function Eu() {
  return ml() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Ye();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let a = s.target.closest("a");
          if (!a) return;
          let { hash: u } = new URL(a.href), c = e.querySelector(u);
          c && !r(c) && (l = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let a = s.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let a = s.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let a = (s = window.scrollY) != null ? s : window.pageYOffset;
        i !== a && window.scrollTo(0, i), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function Ru() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function $u(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let ht = ul(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Ye(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: $u(n) }, o = [Eu(), Su(), Ru()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ht.subscribe(() => {
  let e = ht.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && ht.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ht.dispatch("TEARDOWN", n);
  }
});
function Tu(e, t, n = () => ({ containers: [] })) {
  let r = cl(ht), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return ae(() => {
    if (!(!t || !e)) return ht.dispatch("PUSH", t, n), () => ht.dispatch("POP", t, n);
  }, [e, t]), i;
}
function bl(e, t, n = () => [document.body]) {
  let r = Ht(e, "scroll-lock");
  Tu(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Ko(e) {
  return [e.screenX, e.screenY];
}
function Fu() {
  let e = H([-1, -1]);
  return { wasMoved(t) {
    let n = Ko(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Ko(t);
  } };
}
function Ou(e = 0) {
  let [t, n] = j(e), r = le((a) => n(a), [t]), o = le((a) => n((u) => u | a), [t]), i = le((a) => (t & a) === a, [t]), l = le((a) => n((u) => u & ~a), [n]), s = le((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var Yo, Xo;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Yo = process == null ? void 0 : process.env) == null ? void 0 : Yo.NODE_ENV) === "test" && typeof ((Xo = Element == null ? void 0 : Element.prototype) == null ? void 0 : Xo.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Iu = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Iu || {});
function _l(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function xl(e, t, n, r) {
  let [o, i] = j(n), { hasFlag: l, addFlag: s, removeFlag: a } = Ou(e && o ? 3 : 0), u = H(!1), c = H(!1), p = St();
  return ae(() => {
    var f;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (f = r == null ? void 0 : r.start) == null || f.call(r, n), Mu(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (s(3), a(4)) : (s(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
      }, done() {
        var d;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, a(7), n || i(!1), (d = r == null ? void 0 : r.end) == null || d.call(r, n));
      } });
    }
  }, [e, n, t, p]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Mu(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Ye();
  return Au(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(Pu(e, r));
    });
  }), i.dispose;
}
function Pu(e, t) {
  var n, r;
  let o = Ye();
  if (!e) return o.dispose;
  let i = !1;
  o.add(() => {
    i = !0;
  });
  let l = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((s) => s instanceof CSSTransition)) != null ? r : [];
  return l.length === 0 ? (t(), o.dispose) : (Promise.allSettled(l.map((s) => s.finished)).then(() => {
    i || t();
  }), o.dispose);
}
function Au(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function ku(e, { container: t, accept: n, walk: r }) {
  let o = H(n), i = H(r);
  oe(() => {
    o.current = n, i.current = r;
  }, [n, r]), ae(() => {
    if (!t || !e) return;
    let l = Vt(t);
    if (!l) return;
    let s = o.current, a = i.current, u = Object.assign((p) => s(p), { acceptNode: s }), c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, i]);
}
function tn(e, t) {
  let n = H([]), r = z(e);
  oe(() => {
    let o = [...n.current];
    for (let [i, l] of t.entries()) if (n.current[i] !== l) {
      let s = r(t, o);
      return n.current = t, s;
    }
  }, [r, ...t]);
}
function zn() {
  return typeof window < "u";
}
function zt(e) {
  return Cl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qe(e) {
  var t;
  return (t = (Cl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cl(e) {
  return zn() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function Fe(e) {
  return zn() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Xe(e) {
  return zn() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function Zo(e) {
  return !zn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function cn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Be(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Nu(e) {
  return ["table", "td", "th"].includes(zt(e));
}
function Bn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function io(e) {
  const t = lo(), n = Fe(e) ? Be(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Lu(e) {
  let t = ct(e);
  for (; Xe(t) && !Nt(t); ) {
    if (io(t))
      return t;
    if (Bn(t))
      return null;
    t = ct(t);
  }
  return null;
}
function lo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nt(e) {
  return ["html", "body", "#document"].includes(zt(e));
}
function Be(e) {
  return Le(e).getComputedStyle(e);
}
function jn(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ct(e) {
  if (zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zo(e) && e.host || // Fallback.
    Qe(e)
  );
  return Zo(t) ? t.host : t;
}
function Sl(e) {
  const t = ct(e);
  return Nt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xe(t) && cn(t) ? t : Sl(t);
}
function nn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Sl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Le(o);
  if (i) {
    const s = Ir(l);
    return t.concat(l, l.visualViewport || [], cn(o) ? o : [], s && n ? nn(s) : []);
  }
  return t.concat(o, nn(o, [], n));
}
function Ir(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Du() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const bt = Math.min, Te = Math.max, rn = Math.round, wn = Math.floor, qe = (e) => ({
  x: e,
  y: e
}), Vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hu = {
  start: "end",
  end: "start"
};
function Qo(e, t, n) {
  return Te(e, bt(t, n));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dt(e) {
  return e.split("-")[0];
}
function dn(e) {
  return e.split("-")[1];
}
function El(e) {
  return e === "x" ? "y" : "x";
}
function Rl(e) {
  return e === "y" ? "height" : "width";
}
function _t(e) {
  return ["top", "bottom"].includes(dt(e)) ? "y" : "x";
}
function $l(e) {
  return El(_t(e));
}
function zu(e, t, n) {
  n === void 0 && (n = !1);
  const r = dn(e), o = $l(e), i = Rl(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = On(l)), [l, On(l)];
}
function Bu(e) {
  const t = On(e);
  return [Mr(e), t, Mr(t)];
}
function Mr(e) {
  return e.replace(/start|end/g, (t) => Hu[t]);
}
function ju(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Gu(e, t, n, r) {
  const o = dn(e);
  let i = ju(dt(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Mr)))), i;
}
function On(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vu[t]);
}
function Uu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Wu(e) {
  return typeof e != "number" ? Uu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function In(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Jo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = _t(t), l = $l(t), s = Rl(l), a = dt(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (dn(t)) {
    case "start":
      d[l] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      d[l] += f * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const qu = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: p
  } = Jo(u, r, a), f = r, d = {}, g = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: v,
      fn: b
    } = s[m], {
      x: C,
      y: x,
      data: R,
      reset: T
    } = await b({
      x: c,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = C ?? c, p = x ?? p, d = {
      ...d,
      [v]: {
        ...d[v],
        ...R
      }
    }, T && g <= 50 && (g++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (u = T.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: c,
      y: p
    } = Jo(u, f, a)), m = -1);
  }
  return {
    x: c,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: d
  };
};
async function Gn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: d = 0
  } = Bt(t, e), g = Wu(d), v = s[f ? p === "floating" ? "reference" : "floating" : p], b = In(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), C = p === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), R = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = In(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: x,
    strategy: a
  }) : C);
  return {
    top: (b.top - T.top + g.top) / R.y,
    bottom: (T.bottom - b.bottom + g.bottom) / R.y,
    left: (b.left - T.left + g.left) / R.x,
    right: (T.right - b.right + g.right) / R.x
  };
}
const Ku = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...v
      } = Bt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = dt(o), C = _t(s), x = dt(s) === s, R = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), T = f || (x || !m ? [On(s)] : Bu(s)), M = g !== "none";
      !f && M && T.push(...Gu(s, m, g, R));
      const $ = [s, ...T], w = await Gn(t, v), h = [];
      let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && h.push(w[b]), p) {
        const P = zu(o, l, R);
        h.push(w[P[0]], w[P[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: h
      }], !h.every((P) => P <= 0)) {
        var E, F;
        const P = (((E = i.flip) == null ? void 0 : E.index) || 0) + 1, W = $[P];
        if (W)
          return {
            data: {
              index: P,
              overflows: _
            },
            reset: {
              placement: W
            }
          };
        let K = (F = _.filter((O) => O.overflows[0] <= 0).sort((O, k) => O.overflows[1] - k.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!K)
          switch (d) {
            case "bestFit": {
              var A;
              const O = (A = _.filter((k) => {
                if (M) {
                  const I = _t(k.placement);
                  return I === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((I) => I > 0).reduce((I, te) => I + te, 0)]).sort((k, I) => k[1] - I[1])[0]) == null ? void 0 : A[0];
              O && (K = O);
              break;
            }
            case "initialPlacement":
              K = s;
              break;
          }
        if (o !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
async function Yu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = dt(n), s = dn(n), a = _t(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, p = Bt(t, e);
  let {
    mainAxis: f,
    crossAxis: d,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof g == "number" && (d = s === "end" ? g * -1 : g), a ? {
    x: d * c,
    y: f * u
  } : {
    x: f * u,
    y: d * c
  };
}
const Xu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: l,
        middlewareData: s
      } = t, a = await Yu(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, Zu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: b,
              y: C
            } = v;
            return {
              x: b,
              y: C
            };
          }
        },
        ...a
      } = Bt(e, t), u = {
        x: n,
        y: r
      }, c = await Gn(t, a), p = _t(dt(o)), f = El(p);
      let d = u[f], g = u[p];
      if (i) {
        const v = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", C = d + c[v], x = d - c[b];
        d = Qo(C, d, x);
      }
      if (l) {
        const v = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", C = g + c[v], x = g - c[b];
        g = Qo(C, g, x);
      }
      const m = s.fn({
        ...t,
        [f]: d,
        [p]: g
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [f]: i,
            [p]: l
          }
        }
      };
    }
  };
}, Qu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: l,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...u
      } = Bt(e, t), c = await Gn(t, u), p = dt(o), f = dn(o), d = _t(o) === "y", {
        width: g,
        height: m
      } = i.floating;
      let v, b;
      p === "top" || p === "bottom" ? (v = p, b = f === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, v = f === "end" ? "top" : "bottom");
      const C = m - c.top - c.bottom, x = g - c.left - c.right, R = bt(m - c[v], C), T = bt(g - c[b], x), M = !t.middlewareData.shift;
      let $ = R, w = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = x), (r = t.middlewareData.shift) != null && r.enabled.y && ($ = C), M && !f) {
        const _ = Te(c.left, 0), E = Te(c.right, 0), F = Te(c.top, 0), A = Te(c.bottom, 0);
        d ? w = g - 2 * (_ !== 0 || E !== 0 ? _ + E : Te(c.left, c.right)) : $ = m - 2 * (F !== 0 || A !== 0 ? F + A : Te(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: w,
        availableHeight: $
      });
      const h = await l.getDimensions(s.floating);
      return g !== h.width || m !== h.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Tl(e) {
  const t = Be(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Xe(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = rn(n) !== i || rn(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function so(e) {
  return Fe(e) ? e : e.contextElement;
}
function Mt(e) {
  const t = so(e);
  if (!Xe(t))
    return qe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Tl(t);
  let l = (i ? rn(n.width) : n.width) / r, s = (i ? rn(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Ju = /* @__PURE__ */ qe(0);
function Fl(e) {
  const t = Le(e);
  return !lo() || !t.visualViewport ? Ju : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ec(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function xt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = so(e);
  let l = qe(1);
  t && (r ? Fe(r) && (l = Mt(r)) : l = Mt(e));
  const s = ec(i, n, r) ? Fl(i) : qe(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, c = o.width / l.x, p = o.height / l.y;
  if (i) {
    const f = Le(i), d = r && Fe(r) ? Le(r) : r;
    let g = f, m = Ir(g);
    for (; m && r && d !== g; ) {
      const v = Mt(m), b = m.getBoundingClientRect(), C = Be(m), x = b.left + (m.clientLeft + parseFloat(C.paddingLeft)) * v.x, R = b.top + (m.clientTop + parseFloat(C.paddingTop)) * v.y;
      a *= v.x, u *= v.y, c *= v.x, p *= v.y, a += x, u += R, g = Le(m), m = Ir(g);
    }
  }
  return In({
    width: c,
    height: p,
    x: a,
    y: u
  });
}
function ao(e, t) {
  const n = jn(e).scrollLeft;
  return t ? t.left + n : xt(Qe(e)).left + n;
}
function Ol(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ao(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function tc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = Qe(r), s = t ? Bn(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = qe(1);
  const c = qe(0), p = Xe(r);
  if ((p || !p && !i) && ((zt(r) !== "body" || cn(l)) && (a = jn(r)), Xe(r))) {
    const d = xt(r);
    u = Mt(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  const f = l && !p && !i ? Ol(l, a, !0) : qe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + f.y
  };
}
function nc(e) {
  return Array.from(e.getClientRects());
}
function rc(e) {
  const t = Qe(e), n = jn(e), r = e.ownerDocument.body, o = Te(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Te(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + ao(e);
  const s = -n.scrollTop;
  return Be(r).direction === "rtl" && (l += Te(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function oc(e, t) {
  const n = Le(e), r = Qe(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = lo();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function ic(e, t) {
  const n = xt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Xe(e) ? Mt(e) : qe(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function ei(e, t, n) {
  let r;
  if (t === "viewport")
    r = oc(e, n);
  else if (t === "document")
    r = rc(Qe(e));
  else if (Fe(t))
    r = ic(t, n);
  else {
    const o = Fl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return In(r);
}
function Il(e, t) {
  const n = ct(e);
  return n === t || !Fe(n) || Nt(n) ? !1 : Be(n).position === "fixed" || Il(n, t);
}
function lc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = nn(e, [], !1).filter((s) => Fe(s) && zt(s) !== "body"), o = null;
  const i = Be(e).position === "fixed";
  let l = i ? ct(e) : e;
  for (; Fe(l) && !Nt(l); ) {
    const s = Be(l), a = io(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || cn(l) && !a && Il(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = ct(l);
  }
  return t.set(e, r), r;
}
function sc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? Bn(t) ? [] : lc(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const p = ei(t, c, o);
    return u.top = Te(p.top, u.top), u.right = bt(p.right, u.right), u.bottom = bt(p.bottom, u.bottom), u.left = Te(p.left, u.left), u;
  }, ei(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ac(e) {
  const {
    width: t,
    height: n
  } = Tl(e);
  return {
    width: t,
    height: n
  };
}
function uc(e, t, n) {
  const r = Xe(t), o = Qe(t), i = n === "fixed", l = xt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = qe(0);
  if (r || !r && !i)
    if ((zt(t) !== "body" || cn(o)) && (s = jn(t)), r) {
      const f = xt(t, !0, i, t);
      a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
    } else o && (a.x = ao(o));
  const u = o && !r && !i ? Ol(o, s) : qe(0), c = l.left + s.scrollLeft - a.x - u.x, p = l.top + s.scrollTop - a.y - u.y;
  return {
    x: c,
    y: p,
    width: l.width,
    height: l.height
  };
}
function lr(e) {
  return Be(e).position === "static";
}
function ti(e, t) {
  if (!Xe(e) || Be(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Qe(e) === n && (n = n.ownerDocument.body), n;
}
function Ml(e, t) {
  const n = Le(e);
  if (Bn(e))
    return n;
  if (!Xe(e)) {
    let o = ct(e);
    for (; o && !Nt(o); ) {
      if (Fe(o) && !lr(o))
        return o;
      o = ct(o);
    }
    return n;
  }
  let r = ti(e, t);
  for (; r && Nu(r) && lr(r); )
    r = ti(r, t);
  return r && Nt(r) && lr(r) && !io(r) ? n : r || Lu(e) || n;
}
const cc = async function(e) {
  const t = this.getOffsetParent || Ml, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: uc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function dc(e) {
  return Be(e).direction === "rtl";
}
const fc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tc,
  getDocumentElement: Qe,
  getClippingRect: sc,
  getOffsetParent: Ml,
  getElementRects: cc,
  getClientRects: nc,
  getDimensions: ac,
  getScale: Mt,
  isElement: Fe,
  isRTL: dc
};
function Pl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pc(e, t) {
  let n = null, r;
  const o = Qe(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: f,
      height: d
    } = u;
    if (s || t(), !f || !d)
      return;
    const g = wn(p), m = wn(o.clientWidth - (c + f)), v = wn(o.clientHeight - (p + d)), b = wn(c), x = {
      rootMargin: -g + "px " + -m + "px " + -v + "px " + -b + "px",
      threshold: Te(0, bt(1, a)) || 1
    };
    let R = !0;
    function T(M) {
      const $ = M[0].intersectionRatio;
      if ($ !== a) {
        if (!R)
          return l();
        $ ? l(!1, $) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      $ === 1 && !Pl(u, e.getBoundingClientRect()) && l(), R = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, x);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function gc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = so(e), c = o || i ? [...u ? nn(u) : [], ...nn(t)] : [];
  c.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const p = u && s ? pc(u, n) : null;
  let f = -1, d = null;
  l && (d = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === u && d && (d.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = d) == null || x.observe(t);
    })), n();
  }), u && !a && d.observe(u), d.observe(t));
  let g, m = a ? xt(e) : null;
  a && v();
  function v() {
    const b = xt(e);
    m && !Pl(m, b) && n(), m = b, g = requestAnimationFrame(v);
  }
  return n(), () => {
    var b;
    c.forEach((C) => {
      o && C.removeEventListener("scroll", n), i && C.removeEventListener("resize", n);
    }), p == null || p(), (b = d) == null || b.disconnect(), d = null, a && cancelAnimationFrame(g);
  };
}
const sr = Gn, mc = Xu, hc = Zu, vc = Ku, wc = Qu, yc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: fc,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return qu(e, t, {
    ...o,
    platform: i
  });
};
var Cn = typeof document < "u" ? Ze : oe;
function Mn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Mn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Mn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Al(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ni(e, t) {
  const n = Al(e);
  return Math.round(t * n) / n;
}
function ar(e) {
  const t = H(e);
  return Cn(() => {
    t.current = e;
  }), t;
}
function bc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: u
  } = e, [c, p] = j({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, d] = j(r);
  Mn(f, r) || d(r);
  const [g, m] = j(null), [v, b] = j(null), C = le((k) => {
    k !== M.current && (M.current = k, m(k));
  }, []), x = le((k) => {
    k !== $.current && ($.current = k, b(k));
  }, []), R = i || g, T = l || v, M = H(null), $ = H(null), w = H(c), h = a != null, _ = ar(a), E = ar(o), F = ar(u), A = le(() => {
    if (!M.current || !$.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: f
    };
    E.current && (k.platform = E.current), yc(M.current, $.current, k).then((I) => {
      const te = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      P.current && !Mn(w.current, te) && (w.current = te, Ne(() => {
        p(te);
      }));
    });
  }, [f, t, n, E, F]);
  Cn(() => {
    u === !1 && w.current.isPositioned && (w.current.isPositioned = !1, p((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [u]);
  const P = H(!1);
  Cn(() => (P.current = !0, () => {
    P.current = !1;
  }), []), Cn(() => {
    if (R && (M.current = R), T && ($.current = T), R && T) {
      if (_.current)
        return _.current(R, T, A);
      A();
    }
  }, [R, T, A, _, h]);
  const W = U(() => ({
    reference: M,
    floating: $,
    setReference: C,
    setFloating: x
  }), [C, x]), K = U(() => ({
    reference: R,
    floating: T
  }), [R, T]), O = U(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!K.floating)
      return k;
    const I = ni(K.floating, c.x), te = ni(K.floating, c.y);
    return s ? {
      ...k,
      transform: "translate(" + I + "px, " + te + "px)",
      ...Al(K.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: te
    };
  }, [n, s, K.floating, c.x, c.y]);
  return U(() => ({
    ...c,
    update: A,
    refs: W,
    elements: K,
    floatingStyles: O
  }), [c, A, W, K, O]);
}
const kl = (e, t) => ({
  ...mc(e),
  options: [e, t]
}), _c = (e, t) => ({
  ...hc(e),
  options: [e, t]
}), xc = (e, t) => ({
  ...vc(e),
  options: [e, t]
}), Cc = (e, t) => ({
  ...wc(e),
  options: [e, t]
}), Nl = {
  ...Cr
}, Sc = Nl.useInsertionEffect, Ec = Sc || ((e) => e());
function Ll(e) {
  const t = H(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Ec(() => {
    t.current = e;
  }), le(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Pr = typeof document < "u" ? Ze : oe;
let ri = !1, Rc = 0;
const oi = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Rc++
);
function $c() {
  const [e, t] = j(() => ri ? oi() : void 0);
  return Pr(() => {
    e == null && t(oi());
  }, []), oe(() => {
    ri = !0;
  }, []), e;
}
const Tc = Nl.useId, Fc = Tc || $c;
let on;
process.env.NODE_ENV !== "production" && (on = /* @__PURE__ */ new Set());
function Oc() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = on) != null && e.has(o))) {
    var i;
    (i = on) == null || i.add(o), console.warn(o);
  }
}
function Ic() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = on) != null && e.has(o))) {
    var i;
    (i = on) == null || i.add(o), console.error(o);
  }
}
function Mc() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const Pc = /* @__PURE__ */ pe(null), Ac = /* @__PURE__ */ pe(null), kc = () => {
  var e;
  return ((e = ue(Pc)) == null ? void 0 : e.id) || null;
}, Nc = () => ue(Ac), Lc = "data-floating-ui-focusable";
function Dc(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Fc(), i = H({}), [l] = j(() => Mc()), s = kc() != null;
  if (process.env.NODE_ENV !== "production") {
    const d = r.reference;
    d && !Fe(d) && Ic("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, u] = j(r.reference), c = Ll((d, g, m) => {
    i.current.openEvent = d ? g : void 0, l.emit("openchange", {
      open: d,
      event: g,
      reason: m,
      nested: s
    }), n == null || n(d, g, m);
  }), p = U(() => ({
    setPositionReference: u
  }), []), f = U(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return U(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: f,
    events: l,
    floatingId: o,
    refs: p
  }), [t, c, f, l, o, p]);
}
function Vc(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Dc({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = j(null), [s, a] = j(null), c = (o == null ? void 0 : o.domReference) || i, p = H(null), f = Nc();
  Pr(() => {
    c && (p.current = c);
  }, [c]);
  const d = bc({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), g = le((x) => {
    const R = Fe(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    a(R), d.refs.setReference(R);
  }, [d.refs]), m = le((x) => {
    (Fe(x) || x === null) && (p.current = x, l(x)), (Fe(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !Fe(x)) && d.refs.setReference(x);
  }, [d.refs]), v = U(() => ({
    ...d.refs,
    setReference: m,
    setPositionReference: g,
    domReference: p
  }), [d.refs, m, g]), b = U(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), C = U(() => ({
    ...d,
    ...r,
    refs: v,
    elements: b,
    nodeId: t
  }), [d, v, b, t, r]);
  return Pr(() => {
    r.dataRef.current.floatingContext = C;
    const x = f == null ? void 0 : f.nodesRef.current.find((R) => R.id === t);
    x && (x.context = C);
  }), U(() => ({
    ...d,
    context: C,
    refs: v,
    elements: b
  }), [d, v, b, C]);
}
const ii = "active", li = "selected";
function ur(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [ii]: l,
      [li]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Lc]: ""
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [u, c] = a;
      if (!(o && [ii, li].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var p;
            (p = r.get(u)) == null || p.push(c), l[u] = function() {
              for (var f, d = arguments.length, g = new Array(d), m = 0; m < d; m++)
                g[m] = arguments[m];
              return (f = r.get(u)) == null ? void 0 : f.map((v) => v(...g)).find((v) => v !== void 0);
            };
          }
        } else
          l[u] = c;
    }), l), {})
  };
}
function Hc(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = le(
    (s) => ur(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = le(
    (s) => ur(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = le(
    (s) => ur(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return U(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
function si(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const zc = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: l = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: u,
      ...c
    } = Bt(e, t), {
      rects: p,
      elements: {
        floating: f
      }
    } = t, d = n.current[l], g = (u == null ? void 0 : u.current) || f, m = f.clientTop || g.clientTop, v = f.clientTop !== 0, b = g.clientTop !== 0, C = f === g;
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || Oc('`placement` side must be "bottom" when using the `inner`', "middleware.")), !d)
      return {};
    const x = {
      ...t,
      ...await kl(-d.offsetTop - f.clientTop - p.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, R = await sr(si(x, g.scrollHeight + m + f.clientTop), c), T = await sr(x, {
      ...c,
      elementContext: "reference"
    }), M = Te(0, R.top), $ = x.y + M, _ = (g.scrollHeight > g.clientHeight ? (E) => E : rn)(Te(0, g.scrollHeight + (v && C || b ? m * 2 : 0) - M - Te(0, R.bottom)));
    if (g.style.maxHeight = _ + "px", g.scrollTop = M, o) {
      const E = g.offsetHeight < d.offsetHeight * bt(s, n.current.length) - 1 || T.top >= -a || T.bottom >= -a;
      Ne(() => o(E));
    }
    return r && (r.current = await sr(si({
      ...x,
      y: $
    }, g.offsetHeight + m + f.clientTop), c)), {
      y: $
    };
  }
});
function Bc(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = Ll(s), u = H(!1), c = H(null), p = H(null);
  oe(() => {
    if (!o) return;
    function d(m) {
      if (m.ctrlKey || !g || i.current == null)
        return;
      const v = m.deltaY, b = i.current.top >= -0.5, C = i.current.bottom >= -0.5, x = g.scrollHeight - g.clientHeight, R = v < 0 ? -1 : 1, T = v < 0 ? "max" : "min";
      g.scrollHeight <= g.clientHeight || (!b && v > 0 || !C && v < 0 ? (m.preventDefault(), Ne(() => {
        a((M) => M + Math[T](v, x * R));
      })) : /firefox/i.test(Du()) && (g.scrollTop += v));
    }
    const g = (l == null ? void 0 : l.current) || r.floating;
    if (n && g)
      return g.addEventListener("wheel", d), requestAnimationFrame(() => {
        c.current = g.scrollTop, i.current != null && (p.current = {
          ...i.current
        });
      }), () => {
        c.current = null, p.current = null, g.removeEventListener("wheel", d);
      };
  }, [o, n, r.floating, i, l, a]);
  const f = U(() => ({
    onKeyDown() {
      u.current = !0;
    },
    onWheel() {
      u.current = !1;
    },
    onPointerMove() {
      u.current = !1;
    },
    onScroll() {
      const d = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !d || !u.current)) {
        if (c.current !== null) {
          const g = d.scrollTop - c.current;
          (i.current.bottom < -0.5 && g < -1 || i.current.top < -0.5 && g > 1) && Ne(() => a((m) => m + g));
        }
        requestAnimationFrame(() => {
          c.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return U(() => o ? {
    floating: f
  } : {}, [o, f]);
}
let fn = pe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
fn.displayName = "FloatingContext";
let uo = pe(null);
uo.displayName = "PlacementContext";
function jc(e) {
  return U(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Gc() {
  return ue(fn).setReference;
}
function Uc() {
  let { getFloatingProps: e, slot: t } = ue(fn);
  return le((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Wc(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = ue(uo), n = U(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  ae(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = ue(fn);
  return U(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let ai = 4;
function qc({ children: e, enabled: t = !0 }) {
  let [n, r] = j(null), [o, i] = j(0), l = H(null), [s, a] = j(null);
  Kc(s);
  let u = t && n !== null && s !== null, { to: c = "bottom", gap: p = 0, offset: f = 0, padding: d = 0, inner: g } = Yc(n, s), [m, v = "center"] = c.split(" ");
  ae(() => {
    u && i(0);
  }, [u]);
  let { refs: b, floatingStyles: C, context: x } = Vc({ open: u, placement: m === "selection" ? v === "center" ? "bottom" : `bottom-${v}` : v === "center" ? `${m}` : `${m}-${v}`, strategy: "absolute", transform: !1, middleware: [kl({ mainAxis: m === "selection" ? 0 : p, crossAxis: f }), _c({ padding: d }), m !== "selection" && xc({ padding: d }), m === "selection" && g ? zc({ ...g, padding: d, overflowRef: l, offset: o, minItemsVisible: ai, referenceOverflowThreshold: d, onFallbackChange(E) {
    var F, A;
    if (!E) return;
    let P = x.elements.floating;
    if (!P) return;
    let W = parseFloat(getComputedStyle(P).scrollPaddingBottom) || 0, K = Math.min(ai, P.childElementCount), O = 0, k = 0;
    for (let I of (A = (F = x.elements.floating) == null ? void 0 : F.childNodes) != null ? A : []) if (I instanceof HTMLElement) {
      let te = I.offsetTop, L = te + I.clientHeight + W, B = P.scrollTop, S = B + P.clientHeight;
      if (te >= B && L <= S) K--;
      else {
        k = Math.max(0, Math.min(L, S) - Math.max(te, B)), O = I.clientHeight;
        break;
      }
    }
    K >= 1 && i((I) => {
      let te = O * K - k + W;
      return I >= te ? I : te;
    });
  } }) : null, Cc({ padding: d, apply({ availableWidth: E, availableHeight: F, elements: A }) {
    Object.assign(A.floating.style, { overflow: "auto", maxWidth: `${E}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${F}px)` });
  } })].filter(Boolean), whileElementsMounted: gc }), [R = m, T = v] = x.placement.split("-");
  m === "selection" && (R = "selection");
  let M = U(() => ({ anchor: [R, T].filter(Boolean).join(" ") }), [R, T]), $ = Bc(x, { overflowRef: l, onChange: i }), { getReferenceProps: w, getFloatingProps: h } = Hc([$]), _ = z((E) => {
    a(E), b.setFloating(E);
  });
  return V(uo.Provider, { value: r }, V(fn.Provider, { value: { setFloating: _, setReference: b.setReference, styles: C, getReferenceProps: w, getFloatingProps: h, slot: M } }, e));
}
function Kc(e) {
  ae(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function Yc(e, t) {
  var n, r, o;
  let i = cr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = cr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = cr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function cr(e, t, n = void 0) {
  let r = St(), o = z((a, u) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!u) return [n, null];
      let c = ui(a, u);
      return [c, (p) => {
        let f = Dl(a);
        {
          let d = f.map((g) => window.getComputedStyle(u).getPropertyValue(g));
          r.requestAnimationFrame(function g() {
            r.nextFrame(g);
            let m = !1;
            for (let [b, C] of f.entries()) {
              let x = window.getComputedStyle(u).getPropertyValue(C);
              if (d[b] !== x) {
                d[b] = x, m = !0;
                break;
              }
            }
            if (!m) return;
            let v = ui(a, u);
            c !== v && (p(v), c = v);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = U(() => o(e, t)[0], [e, t]), [l = i, s] = j();
  return ae(() => {
    let [a, u] = o(e, t);
    if (s(a), !!u) return u(s);
  }, [e, t]), l;
}
function Dl(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Dl(o)] : [r];
  }
  return [];
}
function ui(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function Xc({ children: e, freeze: t }) {
  let n = Ar(t, e);
  return N.createElement(N.Fragment, null, n);
}
function Ar(e, t) {
  let [n, r] = j(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Un = pe(null);
Un.displayName = "OpenClosedContext";
var Oe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Oe || {});
function pn() {
  return ue(Un);
}
function Vl({ value: e, children: t }) {
  return N.createElement(Un.Provider, { value: e }, t);
}
function Zc({ children: e }) {
  return N.createElement(Un.Provider, { value: null }, e);
}
function Qc(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let We = [];
Qc(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || We[0] === t.target) return;
    let n = t.target;
    n = n.closest(Fn), We.unshift(n ?? t.target), We = We.filter((r) => r != null && r.isConnected), We.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Jc(e) {
  throw new Error("Unexpected object: " + e);
}
var ye = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ye || {});
function ci(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let i = o - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      Jc(e);
  }
}
var co = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(co || {});
function Hl(e) {
  let t = z(e), n = H(!1);
  oe(() => (n.current = !1, () => {
    n.current = !0, Ln(() => {
      n.current && t();
    });
  }), [t]);
}
function ed() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Cr ? ((t) => t.useSyncExternalStore)(Cr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function gn() {
  let e = ed(), [t, n] = j(vt.isHandoffComplete);
  return t && vt.isHandoffComplete === !1 && n(!1), oe(() => {
    t !== !0 && n(!0);
  }, [t]), oe(() => vt.handoff(), []), e ? !1 : t;
}
let zl = pe(!1);
function td() {
  return ue(zl);
}
function di(e) {
  return N.createElement(zl.Provider, { value: e.force }, e.children);
}
function nd(e) {
  let t = td(), n = ue(jl), r = Et(e), [o, i] = j(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (vt.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return oe(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), oe(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let Bl = ve, rd = be(function(e, t) {
  let n = e, r = H(null), o = Ie(La((p) => {
    r.current = p;
  }), t), i = Et(r), l = nd(r), [s] = j(() => {
    var p;
    return vt.isServer ? null : (p = i == null ? void 0 : i.createElement("div")) != null ? p : null;
  }), a = ue(kr), u = gn();
  ae(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), ae(() => {
    if (s && a) return a.register(s);
  }, [a, s]), Hl(() => {
    var p;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((p = l.parentElement) == null || p.removeChild(l)));
  });
  let c = xe();
  return u ? !l || !s ? null : Nn(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Bl, name: "Portal" }), s) : null;
});
function od(e, t) {
  let n = Ie(t), { enabled: r = !0, ...o } = e, i = xe();
  return r ? N.createElement(rd, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Bl, name: "Portal" });
}
let id = ve, jl = pe(null);
function ld(e, t) {
  let { target: n, ...r } = e, o = { ref: Ie(t) }, i = xe();
  return N.createElement(jl.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: id, name: "Popover.Group" }));
}
let kr = pe(null);
function sd() {
  let e = ue(kr), t = H([]), n = z((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = z((i) => {
    let l = t.current.indexOf(i);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
  }), o = U(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, U(() => function({ children: i }) {
    return N.createElement(kr.Provider, { value: o }, i);
  }, [o])];
}
let ad = be(od), Gl = be(ld), Ul = Object.assign(ad, { Group: Gl });
var ud = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ud || {}), cd = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(cd || {}), dd = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(dd || {}), fd = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(fd || {});
function dr(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((l, s) => l.dataRef.current.order - s.dataRef.current.order) : gl(r, (l) => l.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let pd = { 1(e) {
  var t;
  return (t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1, isTyping: !1, activationTrigger: 2, __demoMode: !1 };
}, 0(e) {
  var t, n;
  if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
  if ((n = e.dataRef.current) != null && n.value) {
    let r = e.dataRef.current.calculateIndex(e.dataRef.current.value);
    if (r !== -1) return { ...e, activeOptionIndex: r, comboboxState: 0, __demoMode: !1 };
  }
  return { ...e, comboboxState: 0, __demoMode: !1 };
}, 3(e, t) {
  return e.isTyping === t.isTyping ? e : { ...e, isTyping: t.isTyping };
}, 2(e, t) {
  var n, r, o, i;
  if ((n = e.dataRef.current) != null && n.disabled || e.optionsElement && !((r = e.dataRef.current) != null && r.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
  if (e.virtual) {
    let { options: u, disabled: c } = e.virtual, p = t.focus === ye.Specific ? t.idx : ci(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var d, g;
      return (g = (d = e.activeOptionIndex) != null ? d : u.findIndex((m) => !c(m))) != null ? g : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), f = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === p && e.activationTrigger === f ? e : { ...e, activeOptionIndex: p, activationTrigger: f, isTyping: !1, __demoMode: !1 };
  }
  let l = dr(e);
  if (l.activeOptionIndex === null) {
    let u = l.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (l.activeOptionIndex = u);
  }
  let s = t.focus === ye.Specific ? t.idx : ci(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === s && e.activationTrigger === a ? e : { ...e, ...l, isTyping: !1, activeOptionIndex: s, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, l = dr(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(i));
  let s = { ...e, ...l, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = dr(e, (o) => {
    let i = o.findIndex((l) => l.id === t.id);
    return i !== -1 && o.splice(i, 1), o;
  });
  return { ...e, ...r, activationTrigger: 2 };
}, 6: (e, t) => e.activationTrigger === t.trigger ? e : { ...e, activationTrigger: t.trigger }, 7: (e, t) => {
  var n, r;
  if (e.virtual === null) return { ...e, virtual: { options: t.options, disabled: (n = t.disabled) != null ? n : () => !1 } };
  if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e;
  let o = e.activeOptionIndex;
  if (e.activeOptionIndex !== null) {
    let i = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
    i !== -1 ? o = i : o = null;
  }
  return { ...e, activeOptionIndex: o, virtual: { options: t.options, disabled: (r = t.disabled) != null ? r : () => !1 } };
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, fo = pe(null);
fo.displayName = "ComboboxActionsContext";
function mn(e) {
  let t = ue(fo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, mn), n;
  }
  return t;
}
let Wl = pe(null);
function gd(e) {
  let t = jt("VirtualProvider"), { options: n } = t.virtual, [r, o] = U(() => {
    let u = t.optionsElement;
    if (!u) return [0, 0];
    let c = window.getComputedStyle(u);
    return [parseFloat(c.paddingBlockStart || c.paddingTop), parseFloat(c.paddingBlockEnd || c.paddingBottom)];
  }, [t.optionsElement]), i = au({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [l, s] = j(0);
  ae(() => {
    s((u) => u + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : N.createElement(Wl.Provider, { value: i }, N.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var c;
    return N.createElement(ve, { key: u.key }, N.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }), { key: `${l}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let ln = pe(null);
ln.displayName = "ComboboxDataContext";
function jt(e) {
  let t = ue(ln);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, jt), n;
  }
  return t;
}
function md(e, t) {
  return Pe(t.type, pd, e, t);
}
let hd = ve;
function vd(e, t) {
  var n, r;
  let o = no(), { value: i, defaultValue: l, onChange: s, form: a, name: u, by: c, disabled: p = o || !1, onClose: f, __demoMode: d = !1, multiple: g = !1, immediate: m = !1, virtual: v = null, nullable: b, ...C } = e, x = $a(l), [R = g ? [] : void 0, T] = Ra(i, s, x), [M, $] = ot(md, { dataRef: An(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: v ? { options: v.options, disabled: (n = v.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), w = H(!1), h = H({ static: !1, hold: !1 }), _ = cu(c), E = z((D) => v ? c === null ? v.options.indexOf(D) : v.options.findIndex((q) => _(q, D)) : M.options.findIndex((q) => _(q.dataRef.current.value, D))), F = le((D) => Pe(P.mode, { 1: () => R.some((q) => _(q, D)), 0: () => _(R, D) }), [R]), A = z((D) => M.activeOptionIndex === E(D)), P = U(() => ({ ...M, immediate: m, optionsPropsRef: h, value: R, defaultValue: x, disabled: p, mode: g ? 1 : 0, virtual: v ? M.virtual : null, get activeOptionIndex() {
    if (w.current && M.activeOptionIndex === null && (v ? v.options.length > 0 : M.options.length > 0)) {
      if (v) {
        let q = v.options.findIndex((Q) => {
          var Se, ne;
          return !((ne = (Se = v.disabled) == null ? void 0 : Se.call(v, Q)) != null && ne);
        });
        if (q !== -1) return q;
      }
      let D = M.options.findIndex((q) => !q.dataRef.current.disabled);
      if (D !== -1) return D;
    }
    return M.activeOptionIndex;
  }, calculateIndex: E, compare: _, isSelected: F, isActive: A }), [R, x, p, g, d, M, v]);
  ae(() => {
    var D;
    v && $({ type: 7, options: v.options, disabled: (D = v.disabled) != null ? D : null });
  }, [v, v == null ? void 0 : v.options, v == null ? void 0 : v.disabled]), ae(() => {
    M.dataRef.current = P;
  }, [P]);
  let W = P.comboboxState === 0;
  wl(W, [P.buttonElement, P.inputElement, P.optionsElement], () => G.closeCombobox());
  let K = U(() => {
    var D, q, Q;
    return { open: P.comboboxState === 0, disabled: p, activeIndex: P.activeOptionIndex, activeOption: P.activeOptionIndex === null ? null : P.virtual ? P.virtual.options[(D = P.activeOptionIndex) != null ? D : 0] : (Q = (q = P.options[P.activeOptionIndex]) == null ? void 0 : q.dataRef.current.value) != null ? Q : null, value: R };
  }, [P, p, R]), O = z(() => {
    if (P.activeOptionIndex !== null) {
      if (G.setIsTyping(!1), P.virtual) S(P.virtual.options[P.activeOptionIndex]);
      else {
        let { dataRef: D } = P.options[P.activeOptionIndex];
        S(D.current.value);
      }
      G.goToOption(ye.Specific, P.activeOptionIndex);
    }
  }), k = z(() => {
    $({ type: 0 }), w.current = !0;
  }), I = z(() => {
    $({ type: 1 }), w.current = !1, f == null || f();
  }), te = z((D) => {
    $({ type: 3, isTyping: D });
  }), L = z((D, q, Q) => (w.current = !1, D === ye.Specific ? $({ type: 2, focus: ye.Specific, idx: q, trigger: Q }) : $({ type: 2, focus: D, trigger: Q }))), B = z((D, q) => ($({ type: 4, payload: { id: D, dataRef: q } }), () => {
    P.isActive(q.current.value) && (w.current = !0), $({ type: 5, id: D });
  })), S = z((D) => Pe(P.mode, { 0() {
    return T == null ? void 0 : T(D);
  }, 1() {
    let q = P.value.slice(), Q = q.findIndex((Se) => _(Se, D));
    return Q === -1 ? q.push(D) : q.splice(Q, 1), T == null ? void 0 : T(q);
  } })), ie = z((D) => {
    $({ type: 6, trigger: D });
  }), ee = z((D) => {
    $({ type: 8, element: D });
  }), se = z((D) => {
    $({ type: 9, element: D });
  }), re = z((D) => {
    $({ type: 10, element: D });
  }), G = U(() => ({ onChange: S, registerOption: B, goToOption: L, setIsTyping: te, closeCombobox: I, openCombobox: k, setActivationTrigger: ie, selectActiveOption: O, setInputElement: ee, setButtonElement: se, setOptionsElement: re }), []), [J, de] = Ga(), Z = t === null ? {} : { ref: t }, fe = le(() => {
    if (x !== void 0) return T == null ? void 0 : T(x);
  }, [T, x]), we = xe();
  return N.createElement(de, { value: J, props: { htmlFor: (r = P.inputElement) == null ? void 0 : r.id }, slot: { open: P.comboboxState === 0, disabled: p } }, N.createElement(qc, null, N.createElement(fo.Provider, { value: G }, N.createElement(ln.Provider, { value: P }, N.createElement(Vl, { value: Pe(P.comboboxState, { 0: Oe.Open, 1: Oe.Closed }) }, u != null && N.createElement(Ma, { disabled: p, data: R != null ? { [u]: R } : {}, form: a, onReset: fe }), we({ ourProps: Z, theirProps: C, slot: K, defaultTag: hd, name: "Combobox" }))))));
}
let wd = "input";
function yd(e, t) {
  var n, r, o, i, l;
  let s = jt("Combobox.Input"), a = mn("Combobox.Input"), u = Ve(), c = ol(), { id: p = c || `headlessui-combobox-input-${u}`, onChange: f, displayValue: d, disabled: g = s.disabled || !1, autoFocus: m = !1, type: v = "text", ...b } = e, C = H(null), x = Ie(C, t, Gc(), a.setInputElement), R = Et(s.inputElement), T = St(), M = z(() => {
    a.onChange(null), s.optionsElement && (s.optionsElement.scrollTop = 0), a.goToOption(ye.Nothing);
  }), $ = U(() => {
    var S;
    return typeof d == "function" && s.value !== void 0 ? (S = d(s.value)) != null ? S : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, d]);
  tn(([S, ie], [ee, se]) => {
    if (s.isTyping) return;
    let re = C.current;
    re && ((se === 0 && ie === 1 || S !== ee) && (re.value = S), requestAnimationFrame(() => {
      if (s.isTyping || !re || (R == null ? void 0 : R.activeElement) !== re) return;
      let { selectionStart: G, selectionEnd: J } = re;
      Math.abs((J ?? 0) - (G ?? 0)) === 0 && G === 0 && re.setSelectionRange(re.value.length, re.value.length);
    }));
  }, [$, s.comboboxState, R, s.isTyping]), tn(([S], [ie]) => {
    if (S === 0 && ie === 1) {
      if (s.isTyping) return;
      let ee = C.current;
      if (!ee) return;
      let se = ee.value, { selectionStart: re, selectionEnd: G, selectionDirection: J } = ee;
      ee.value = "", ee.value = se, J !== null ? ee.setSelectionRange(re, G, J) : ee.setSelectionRange(re, G);
    }
  }, [s.comboboxState]);
  let w = H(!1), h = z(() => {
    w.current = !0;
  }), _ = z(() => {
    T.nextFrame(() => {
      w.current = !1;
    });
  }), E = z((S) => {
    switch (a.setIsTyping(!0), S.key) {
      case $e.Enter:
        if (s.comboboxState !== 0 || w.current) return;
        if (S.preventDefault(), S.stopPropagation(), s.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), s.mode === 0 && a.closeCombobox();
        break;
      case $e.ArrowDown:
        return S.preventDefault(), S.stopPropagation(), Pe(s.comboboxState, { 0: () => a.goToOption(ye.Next), 1: () => a.openCombobox() });
      case $e.ArrowUp:
        return S.preventDefault(), S.stopPropagation(), Pe(s.comboboxState, { 0: () => a.goToOption(ye.Previous), 1: () => {
          Ne(() => a.openCombobox()), s.value || a.goToOption(ye.Last);
        } });
      case $e.Home:
        if (S.shiftKey) break;
        return S.preventDefault(), S.stopPropagation(), a.goToOption(ye.First);
      case $e.PageUp:
        return S.preventDefault(), S.stopPropagation(), a.goToOption(ye.First);
      case $e.End:
        if (S.shiftKey) break;
        return S.preventDefault(), S.stopPropagation(), a.goToOption(ye.Last);
      case $e.PageDown:
        return S.preventDefault(), S.stopPropagation(), a.goToOption(ye.Last);
      case $e.Escape:
        return s.comboboxState !== 0 ? void 0 : (S.preventDefault(), s.optionsElement && !s.optionsPropsRef.current.static && S.stopPropagation(), s.mode === 0 && s.value === null && M(), a.closeCombobox());
      case $e.Tab:
        if (s.comboboxState !== 0) return;
        s.mode === 0 && s.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), F = z((S) => {
    f == null || f(S), s.mode === 0 && S.target.value === "" && M(), a.openCombobox();
  }), A = z((S) => {
    var ie, ee, se;
    let re = (ie = S.relatedTarget) != null ? ie : We.find((G) => G !== S.currentTarget);
    if (!((ee = s.optionsElement) != null && ee.contains(re)) && !((se = s.buttonElement) != null && se.contains(re)) && s.comboboxState === 0) return S.preventDefault(), s.mode === 0 && s.value === null && M(), a.closeCombobox();
  }), P = z((S) => {
    var ie, ee, se;
    let re = (ie = S.relatedTarget) != null ? ie : We.find((G) => G !== S.currentTarget);
    (ee = s.buttonElement) != null && ee.contains(re) || (se = s.optionsElement) != null && se.contains(re) || s.disabled || s.immediate && s.comboboxState !== 0 && T.microTask(() => {
      Ne(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), W = Hn(), K = Da(), { isFocused: O, focusProps: k } = Ji({ autoFocus: m }), { isHovered: I, hoverProps: te } = Qi({ isDisabled: g }), L = U(() => ({ open: s.comboboxState === 0, disabled: g, hover: I, focus: O, autofocus: m }), [s, I, O, m, g]), B = ro({ ref: x, id: p, role: "combobox", type: v, "aria-controls": (n = s.optionsElement) == null ? void 0 : n.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find((S) => !S.dataRef.current.disabled && s.compare(S.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (o = s.options[s.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": W, "aria-describedby": K, "aria-autocomplete": "list", defaultValue: (l = (i = e.defaultValue) != null ? i : s.defaultValue !== void 0 ? d == null ? void 0 : d(s.defaultValue) : null) != null ? l : s.defaultValue, disabled: g || void 0, autoFocus: m, onCompositionStart: h, onCompositionEnd: _, onKeyDown: E, onChange: F, onFocus: P, onBlur: A }, k, te);
  return xe()({ ourProps: B, theirProps: b, slot: L, defaultTag: wd, name: "Combobox.Input" });
}
let bd = "button";
function _d(e, t) {
  var n;
  let r = jt("Combobox.Button"), o = mn("Combobox.Button"), i = Ie(t, o.setButtonElement), l = Ve(), { id: s = `headlessui-combobox-button-${l}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...c } = e, p = yl(r.inputElement), f = z(($) => {
    switch ($.key) {
      case $e.Space:
      case $e.Enter:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && Ne(() => o.openCombobox()), p();
        return;
      case $e.ArrowDown:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && (Ne(() => o.openCombobox()), r.value || o.goToOption(ye.First)), p();
        return;
      case $e.ArrowUp:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && (Ne(() => o.openCombobox()), r.value || o.goToOption(ye.Last)), p();
        return;
      case $e.Escape:
        if (r.comboboxState !== 0) return;
        $.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && $.stopPropagation(), Ne(() => o.closeCombobox()), p();
        return;
      default:
        return;
    }
  }), d = z(($) => {
    $.preventDefault(), !ka($.currentTarget) && ($.button === co.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), p());
  }), g = Hn([s]), { isFocusVisible: m, focusProps: v } = Ji({ autoFocus: u }), { isHovered: b, hoverProps: C } = Qi({ isDisabled: a }), { pressed: x, pressProps: R } = ba({ disabled: a }), T = U(() => ({ open: r.comboboxState === 0, active: x || r.comboboxState === 0, disabled: a, value: r.value, hover: b, focus: m }), [r, b, m, x, a]), M = ro({ ref: i, id: s, type: Cu(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": g, disabled: a || void 0, autoFocus: u, onMouseDown: d, onKeyDown: f }, v, C, R);
  return xe()({ ourProps: M, theirProps: c, slot: T, defaultTag: bd, name: "Combobox.Button" });
}
let xd = "div", Cd = At.RenderStrategy | At.Static;
function Sd(e, t) {
  var n, r, o;
  let i = Ve(), { id: l = `headlessui-combobox-options-${i}`, hold: s = !1, anchor: a, portal: u = !1, modal: c = !0, transition: p = !1, ...f } = e, d = jt("Combobox.Options"), g = mn("Combobox.Options"), m = jc(a);
  m && (u = !0);
  let [v, b] = Wc(m), [C, x] = j(null), R = Uc(), T = Ie(t, m ? v : null, g.setOptionsElement, x), M = Et(d.optionsElement), $ = pn(), [w, h] = xl(p, C, $ !== null ? ($ & Oe.Open) === Oe.Open : d.comboboxState === 0);
  fl(w, d.inputElement, g.closeCombobox);
  let _ = d.__demoMode ? !1 : c && d.comboboxState === 0;
  bl(_, M);
  let E = d.__demoMode ? !1 : c && d.comboboxState === 0;
  dl(E, { allowed: le(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), ae(() => {
    var B;
    d.optionsPropsRef.current.static = (B = e.static) != null ? B : !1;
  }, [d.optionsPropsRef, e.static]), ae(() => {
    d.optionsPropsRef.current.hold = s;
  }, [d.optionsPropsRef, s]), ku(d.comboboxState === 0, { container: d.optionsElement, accept(B) {
    return B.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : B.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(B) {
    B.setAttribute("role", "none");
  } });
  let F = Hn([(n = d.buttonElement) == null ? void 0 : n.id]), A = U(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), P = z(() => {
    g.setActivationTrigger(0);
  }), W = z((B) => {
    B.preventDefault(), g.setActivationTrigger(0);
  }), K = ro(m ? R() : {}, { "aria-labelledby": F, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: l, ref: T, style: { ...f.style, ...b, "--input-width": Go(d.inputElement, !0).width, "--button-width": Go(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : P, onMouseDown: W, ..._l(h) }), O = w && d.comboboxState === 1, k = Ar(O, (r = d.virtual) == null ? void 0 : r.options), I = Ar(O, d.value), te = z((B) => d.compare(I, B));
  if (d.virtual) {
    if (k === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(f, { children: N.createElement(ln.Provider, { value: k !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: k } } : d }, N.createElement(gd, { slot: A }, f.children)) });
  }
  let L = xe();
  return N.createElement(Ul, { enabled: u ? e.static || w : !1 }, N.createElement(ln.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: te } }, L({ ourProps: K, theirProps: { ...f, children: N.createElement(Xc, { freeze: O }, typeof f.children == "function" ? (o = f.children) == null ? void 0 : o.call(f, A) : f.children) }, slot: A, defaultTag: xd, features: Cd, visible: w, name: "Combobox.Options" })));
}
let Ed = "div";
function Rd(e, t) {
  var n, r, o, i;
  let l = jt("Combobox.Option"), s = mn("Combobox.Option"), a = Ve(), { id: u = `headlessui-combobox-option-${a}`, value: c, disabled: p = (o = (r = (n = l.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null ? o : !1, order: f = null, ...d } = e, g = yl(l.inputElement), m = l.virtual ? l.activeOptionIndex === l.calculateIndex(c) : l.activeOptionIndex === null ? !1 : ((i = l.options[l.activeOptionIndex]) == null ? void 0 : i.id) === u, v = l.isSelected(c), b = H(null), C = pt({ disabled: p, value: c, domRef: b, order: f }), x = ue(Wl), R = Ie(t, b, x ? x.measureElement : null), T = z(() => {
    s.setIsTyping(!1), s.onChange(c);
  });
  ae(() => s.registerOption(u, C), [C, u]);
  let M = H(!(l.virtual || l.__demoMode));
  ae(() => {
    if (!l.virtual && !l.__demoMode) return Ye().requestAnimationFrame(() => {
      M.current = !0;
    });
  }, [l.virtual, l.__demoMode]), ae(() => {
    if (M.current && l.comboboxState === 0 && m && l.activationTrigger !== 0) return Ye().requestAnimationFrame(() => {
      var W, K;
      (K = (W = b.current) == null ? void 0 : W.scrollIntoView) == null || K.call(W, { block: "nearest" });
    });
  }, [b, m, l.comboboxState, l.activationTrigger, l.activeOptionIndex]);
  let $ = z((W) => {
    W.preventDefault(), W.button === co.Left && (p || (T(), hl() || requestAnimationFrame(() => g()), l.mode === 0 && s.closeCombobox()));
  }), w = z(() => {
    if (p) return s.goToOption(ye.Nothing);
    let W = l.calculateIndex(c);
    s.goToOption(ye.Specific, W);
  }), h = Fu(), _ = z((W) => h.update(W)), E = z((W) => {
    if (!h.wasMoved(W) || p || m) return;
    let K = l.calculateIndex(c);
    s.goToOption(ye.Specific, K, 0);
  }), F = z((W) => {
    h.wasMoved(W) && (p || m && (l.optionsPropsRef.current.hold || s.goToOption(ye.Nothing)));
  }), A = U(() => ({ active: m, focus: m, selected: v, disabled: p }), [m, v, p]), P = { id: u, ref: R, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": v, disabled: void 0, onMouseDown: $, onFocus: w, onPointerEnter: _, onMouseEnter: _, onPointerMove: E, onMouseMove: E, onPointerLeave: F, onMouseLeave: F };
  return xe()({ ourProps: P, theirProps: d, slot: A, defaultTag: Ed, name: "Combobox.Option" });
}
let $d = be(vd), Nr = be(_d), ql = be(yd), Td = Ka, Kl = be(Sd), Lr = be(Rd), Fd = Object.assign($d, { Input: ql, Button: Nr, Label: Td, Options: Kl, Option: Lr });
function Od(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Ht(e, "escape");
  oo(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === $e.Escape && n(o));
  });
}
function Id() {
  var e;
  let [t] = j(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = j((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return ae(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function Md({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Et(n), o = z(() => {
    var i, l;
    let s = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? s.push(a) : "current" in a && a.current instanceof HTMLElement && s.push(a.current));
    if (t != null && t.current) for (let a of t.current) s.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((l = n == null ? void 0 : n.getRootNode()) == null ? void 0 : l.host)) || s.some((u) => a.contains(u)) || s.push(a));
    return s;
  });
  return { resolveContainers: o, contains: z((i) => o().some((l) => l.contains(i))) };
}
let Yl = pe(null);
function fi({ children: e, node: t }) {
  let [n, r] = j(null), o = Xl(t ?? n);
  return N.createElement(Yl.Provider, { value: o }, e, o === null && N.createElement(en, { features: kt.Hidden, ref: (i) => {
    var l, s;
    if (i) {
      for (let a of (s = (l = Vt(i)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? s : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function Xl(e = null) {
  var t;
  return (t = ue(Yl)) != null ? t : e;
}
function po() {
  let e = H(!1);
  return ae(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Kt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Kt || {});
function Pd() {
  let e = H(0);
  return vl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Zl(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Ad = "div";
var gt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(gt || {});
function kd(e, t) {
  let n = H(null), r = Ie(n, t), { initialFocus: o, initialFocusFallback: i, containers: l, features: s = 15, ...a } = e;
  gn() || (s = 0);
  let u = Et(n);
  Vd(s, { ownerDocument: u });
  let c = Hd(s, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  zd(s, { ownerDocument: u, container: n, containers: l, previousActiveElement: c });
  let p = Pd(), f = z((C) => {
    let x = n.current;
    x && ((R) => R())(() => {
      Pe(p.current, { [Kt.Forwards]: () => {
        Qt(x, tt.First, { skipElements: [C.relatedTarget, i] });
      }, [Kt.Backwards]: () => {
        Qt(x, tt.Last, { skipElements: [C.relatedTarget, i] });
      } });
    });
  }), d = Ht(!!(s & 2), "focus-trap#tab-lock"), g = St(), m = H(!1), v = { ref: r, onKeyDown(C) {
    C.key == "Tab" && (m.current = !0, g.requestAnimationFrame(() => {
      m.current = !1;
    }));
  }, onBlur(C) {
    if (!(s & 4)) return;
    let x = Zl(l);
    n.current instanceof HTMLElement && x.add(n.current);
    let R = C.relatedTarget;
    R instanceof HTMLElement && R.dataset.headlessuiFocusGuard !== "true" && (Ql(x, R) || (m.current ? Qt(n.current, Pe(p.current, { [Kt.Forwards]: () => tt.Next, [Kt.Backwards]: () => tt.Previous }) | tt.WrapAround, { relativeTo: C.target }) : C.target instanceof HTMLElement && nt(C.target)));
  } }, b = xe();
  return N.createElement(N.Fragment, null, d && N.createElement(en, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: kt.Focusable }), b({ ourProps: v, theirProps: a, defaultTag: Ad, name: "FocusTrap" }), d && N.createElement(en, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: kt.Focusable }));
}
let Nd = be(kd), Ld = Object.assign(Nd, { features: gt });
function Dd(e = !0) {
  let t = H(We.slice());
  return tn(([n], [r]) => {
    r === !0 && n === !1 && Ln(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = We.slice());
  }, [e, We, t]), z(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Vd(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Dd(n);
  tn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && nt(r());
  }, [n]), Hl(() => {
    n && nt(r());
  });
}
function Hd(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = H(null), l = Ht(!!(e & 1), "focus-trap#initial-focus"), s = po();
  return tn(() => {
    if (e === 0) return;
    if (!l) {
      o != null && o.current && nt(o.current);
      return;
    }
    let a = n.current;
    a && Ln(() => {
      if (!s.current) return;
      let u = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === u) {
          i.current = u;
          return;
        }
      } else if (a.contains(u)) {
        i.current = u;
        return;
      }
      if (r != null && r.current) nt(r.current);
      else {
        if (e & 16) {
          if (Qt(a, tt.First | tt.AutoFocus) !== Or.Error) return;
        } else if (Qt(a, tt.First) !== Or.Error) return;
        if (o != null && o.current && (nt(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), i;
}
function zd(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = po(), l = !!(e & 4);
  oo(t == null ? void 0 : t.defaultView, "focus", (s) => {
    if (!l || !i.current) return;
    let a = Zl(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let u = o.current;
    if (!u) return;
    let c = s.target;
    c && c instanceof HTMLElement ? Ql(a, c) ? (o.current = c, nt(c)) : (s.preventDefault(), s.stopPropagation(), nt(u)) : nt(o.current);
  }, !0);
}
function Ql(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Jl(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : ts) !== ve || N.Children.count(e.children) === 1;
}
let Wn = pe(null);
Wn.displayName = "TransitionContext";
var Bd = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Bd || {});
function jd() {
  let e = ue(Wn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Gd() {
  let e = ue(qn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let qn = pe(null);
qn.displayName = "NestingContext";
function Kn(e) {
  return "children" in e ? Kn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function es(e, t) {
  let n = pt(e), r = H([]), o = po(), i = St(), l = z((d, g = st.Hidden) => {
    let m = r.current.findIndex(({ el: v }) => v === d);
    m !== -1 && (Pe(g, { [st.Unmount]() {
      r.current.splice(m, 1);
    }, [st.Hidden]() {
      r.current[m].state = "hidden";
    } }), i.microTask(() => {
      var v;
      !Kn(r) && o.current && ((v = n.current) == null || v.call(n));
    }));
  }), s = z((d) => {
    let g = r.current.find(({ el: m }) => m === d);
    return g ? g.state !== "visible" && (g.state = "visible") : r.current.push({ el: d, state: "visible" }), () => l(d, st.Unmount);
  }), a = H([]), u = H(Promise.resolve()), c = H({ enter: [], leave: [] }), p = z((d, g, m) => {
    a.current.splice(0), t && (t.chains.current[g] = t.chains.current[g].filter(([v]) => v !== d)), t == null || t.chains.current[g].push([d, new Promise((v) => {
      a.current.push(v);
    })]), t == null || t.chains.current[g].push([d, new Promise((v) => {
      Promise.all(c.current[g].map(([b, C]) => C)).then(() => v());
    })]), g === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => m(g)) : m(g);
  }), f = z((d, g, m) => {
    Promise.all(c.current[g].splice(0).map(([v, b]) => b)).then(() => {
      var v;
      (v = a.current.shift()) == null || v();
    }).then(() => m(g));
  });
  return U(() => ({ children: r, register: s, unregister: l, onStart: p, onStop: f, wait: u, chains: c }), [s, l, r, p, f, c, u]);
}
let ts = ve, ns = At.RenderStrategy;
function Ud(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: u, enterFrom: c, enterTo: p, entered: f, leave: d, leaveFrom: g, leaveTo: m, ...v } = e, [b, C] = j(null), x = H(null), R = Jl(e), T = Ie(...R ? [x, t, C] : t === null ? [] : [t]), M = (n = v.unmount) == null || n ? st.Unmount : st.Hidden, { show: $, appear: w, initial: h } = jd(), [_, E] = j($ ? "visible" : "hidden"), F = Gd(), { register: A, unregister: P } = F;
  ae(() => A(x), [A, x]), ae(() => {
    if (M === st.Hidden && x.current) {
      if ($ && _ !== "visible") {
        E("visible");
        return;
      }
      return Pe(_, { hidden: () => P(x), visible: () => A(x) });
    }
  }, [_, x, A, P, $, M]);
  let W = gn();
  ae(() => {
    if (R && W && _ === "visible" && x.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [x, _, W, R]);
  let K = h && !w, O = w && $ && h, k = H(!1), I = es(() => {
    k.current || (E("hidden"), P(x));
  }, F), te = z((re) => {
    k.current = !0;
    let G = re ? "enter" : "leave";
    I.onStart(x, G, (J) => {
      J === "enter" ? i == null || i() : J === "leave" && (s == null || s());
    });
  }), L = z((re) => {
    let G = re ? "enter" : "leave";
    k.current = !1, I.onStop(x, G, (J) => {
      J === "enter" ? l == null || l() : J === "leave" && (a == null || a());
    }), G === "leave" && !Kn(I) && (E("hidden"), P(x));
  });
  oe(() => {
    R && o || (te($), L($));
  }, [$, R, o]);
  let B = !(!o || !R || !W || K), [, S] = xl(B, b, $, { start: te, end: L }), ie = lt({ ref: T, className: ((r = Tr(v.className, O && u, O && c, S.enter && u, S.enter && S.closed && c, S.enter && !S.closed && p, S.leave && d, S.leave && !S.closed && g, S.leave && S.closed && m, !S.transition && $ && f)) == null ? void 0 : r.trim()) || void 0, ..._l(S) }), ee = 0;
  _ === "visible" && (ee |= Oe.Open), _ === "hidden" && (ee |= Oe.Closed), S.enter && (ee |= Oe.Opening), S.leave && (ee |= Oe.Closing);
  let se = xe();
  return N.createElement(qn.Provider, { value: I }, N.createElement(Vl, { value: ee }, se({ ourProps: ie, theirProps: v, defaultTag: ts, features: ns, visible: _ === "visible", name: "Transition.Child" })));
}
function Wd(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = H(null), s = Jl(e), a = Ie(...s ? [l, t] : t === null ? [] : [t]);
  gn();
  let u = pn();
  if (n === void 0 && u !== null && (n = (u & Oe.Open) === Oe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, p] = j(n ? "visible" : "hidden"), f = es(() => {
    n || p("hidden");
  }), [d, g] = j(!0), m = H([n]);
  ae(() => {
    d !== !1 && m.current[m.current.length - 1] !== n && (m.current.push(n), g(!1));
  }, [m, n]);
  let v = U(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  ae(() => {
    n ? p("visible") : !Kn(f) && l.current !== null && p("hidden");
  }, [n, f]);
  let b = { unmount: o }, C = z(() => {
    var T;
    d && g(!1), (T = e.beforeEnter) == null || T.call(e);
  }), x = z(() => {
    var T;
    d && g(!1), (T = e.beforeLeave) == null || T.call(e);
  }), R = xe();
  return N.createElement(qn.Provider, { value: f }, N.createElement(Wn.Provider, { value: v }, R({ ourProps: { ...b, as: ve, children: N.createElement(rs, { ref: a, ...b, ...i, beforeEnter: C, beforeLeave: x }) }, theirProps: {}, defaultTag: ve, features: ns, visible: c === "visible", name: "Transition" })));
}
function qd(e, t) {
  let n = ue(Wn) !== null, r = pn() !== null;
  return N.createElement(N.Fragment, null, !n && r ? N.createElement(Dr, { ref: t, ...e }) : N.createElement(rs, { ref: t, ...e }));
}
let Dr = be(Wd), rs = be(Ud), go = be(qd), Kd = Object.assign(Dr, { Child: go, Root: Dr });
var Yd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Yd || {}), Xd = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Xd || {});
let Zd = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, mo = pe(null);
mo.displayName = "DialogContext";
function Yn(e) {
  let t = ue(mo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Yn), n;
  }
  return t;
}
function Qd(e, t) {
  return Pe(t.type, Zd, e, t);
}
let pi = be(function(e, t) {
  let n = Ve(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: l, role: s = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: c = !1, ...p } = e, f = H(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (f.current || (f.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = pn();
  o === void 0 && d !== null && (o = (d & Oe.Open) === Oe.Open);
  let g = H(null), m = Ie(g, t), v = Et(g), b = o ? 0 : 1, [C, x] = ot(Qd, { titleId: null, descriptionId: null, panelRef: An() }), R = z(() => i(!1)), T = z((L) => x({ type: 0, id: L })), M = gn() ? b === 0 : !1, [$, w] = sd(), h = { get current() {
    var L;
    return (L = C.panelRef.current) != null ? L : g.current;
  } }, _ = Xl(), { resolveContainers: E } = Md({ mainTreeNode: _, portals: $, defaultContainers: [h] }), F = d !== null ? (d & Oe.Closing) === Oe.Closing : !1;
  dl(u || F ? !1 : M, { allowed: z(() => {
    var L, B;
    return [(B = (L = g.current) == null ? void 0 : L.closest("[data-headlessui-portal]")) != null ? B : null];
  }), disallowed: z(() => {
    var L;
    return [(L = _ == null ? void 0 : _.closest("body > *:not(#headlessui-portal-root)")) != null ? L : null];
  }) }), wl(M, E, (L) => {
    L.preventDefault(), R();
  }), Od(M, v == null ? void 0 : v.defaultView, (L) => {
    L.preventDefault(), L.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), R();
  }), bl(u || F ? !1 : M, v, E), fl(M, g, R);
  let [A, P] = Va(), W = U(() => [{ dialogState: b, close: R, setTitleId: T, unmount: c }, C], [b, C, R, T, c]), K = U(() => ({ open: b === 0 }), [b]), O = { ref: m, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : b === 0 ? !0 : void 0, "aria-labelledby": C.titleId, "aria-describedby": A, unmount: c }, k = !Id(), I = gt.None;
  M && !u && (I |= gt.RestoreFocus, I |= gt.TabLock, a && (I |= gt.AutoFocus), k && (I |= gt.InitialFocus));
  let te = xe();
  return N.createElement(Zc, null, N.createElement(di, { force: !0 }, N.createElement(Ul, null, N.createElement(mo.Provider, { value: W }, N.createElement(Gl, { target: g }, N.createElement(di, { force: !1 }, N.createElement(P, { slot: K }, N.createElement(w, null, N.createElement(Ld, { initialFocus: l, initialFocusFallback: g, containers: E, features: I }, N.createElement(Xa, { value: R }, te({ ourProps: O, theirProps: p, slot: K, defaultTag: Jd, features: ef, visible: b === 0, name: "Dialog" })))))))))));
}), Jd = "div", ef = At.RenderStrategy | At.Static;
function tf(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = pn(), l = e.hasOwnProperty("open") || i !== null, s = e.hasOwnProperty("onClose");
  if (!l && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? N.createElement(fi, null, N.createElement(Kd, { show: r, transition: n, unmount: o.unmount }, N.createElement(pi, { ref: t, ...o }))) : N.createElement(fi, null, N.createElement(pi, { ref: t, open: r, ...o }));
}
let nf = "div";
function rf(e, t) {
  let n = Ve(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: l, unmount: s }, a] = Yn("Dialog.Panel"), u = Ie(t, a.panelRef), c = U(() => ({ open: l === 0 }), [l]), p = z((v) => {
    v.stopPropagation();
  }), f = { ref: u, id: r, onClick: p }, d = o ? go : ve, g = o ? { unmount: s } : {}, m = xe();
  return N.createElement(d, { ...g }, m({ ourProps: f, theirProps: i, slot: c, defaultTag: nf, name: "Dialog.Panel" }));
}
let of = "div";
function lf(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = Yn("Dialog.Backdrop"), l = U(() => ({ open: o === 0 }), [o]), s = { ref: t, "aria-hidden": !0 }, a = n ? go : ve, u = n ? { unmount: i } : {}, c = xe();
  return N.createElement(a, { ...u }, c({ ourProps: s, theirProps: r, slot: l, defaultTag: of, name: "Dialog.Backdrop" }));
}
let sf = "h2";
function af(e, t) {
  let n = Ve(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: l }] = Yn("Dialog.Title"), s = Ie(t);
  oe(() => (l(r), () => l(null)), [r, l]);
  let a = U(() => ({ open: i === 0 }), [i]), u = { ref: s, id: r };
  return xe()({ ourProps: u, theirProps: o, slot: a, defaultTag: sf, name: "Dialog.Title" });
}
let uf = be(tf), os = be(rf), cf = be(lf), is = be(af), df = Object.assign(uf, { Panel: os, Title: is, Description: ja });
function ff({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const pf = /* @__PURE__ */ ge(ff);
function gf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const mf = /* @__PURE__ */ ge(gf);
function hf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
  }));
}
const vf = /* @__PURE__ */ ge(hf);
function wf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const yf = /* @__PURE__ */ ge(wf);
function bf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const _f = /* @__PURE__ */ ge(bf);
function xf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  }));
}
const Cf = /* @__PURE__ */ ge(xf);
function Sf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Ef = /* @__PURE__ */ ge(Sf);
function Rf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const $f = /* @__PURE__ */ ge(Rf);
function Tf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const ls = /* @__PURE__ */ ge(Tf);
function Ff({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const Of = /* @__PURE__ */ ge(Ff);
function If({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const Mf = /* @__PURE__ */ ge(If);
function Pf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const ss = /* @__PURE__ */ ge(Pf), Af = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options" } }, kf = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, uploader: { dragAndDrop: "Drag and drop your file here", fileSizeLimit: "Limit {{limit}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, Nf = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", mappingsNotValidTooltip: "Please set all required mappings", incomingColumn: "Incoming column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}" }, Lf = { validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, Df = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, Vf = {
  components: Af,
  importer: kf,
  mapper: Nf,
  sheet: Lf,
  validators: Df
}, Hf = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options" } }, zf = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, uploader: { dragAndDrop: "Glissez et déposez votre fichier ici", fileSizeLimit: "Limite {{limit}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, Bf = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", mappingsNotValidTooltip: "Veuillez définir toutes les mappings requis", incomingColumn: "Colonne entrante", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}" }, jf = { validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Gf = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, Uf = {
  components: Hf,
  importer: zf,
  mapper: Bf,
  sheet: jf,
  validators: Gf
}, Wf = {
  en: Vf,
  fr: Uf
}, qf = "en";
function gi(e, t) {
  const n = t.split(".");
  let r = Wf[e];
  for (const o of n)
    if (r && typeof r == "object")
      r = r[o];
    else
      return t;
  return typeof r == "string" ? r : t;
}
function Kf(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Yf(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ y("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    if (o) {
      const i = o[1];
      return t[i] ?? `{${i}}`;
    }
    return r;
  }) });
}
const as = pe(
  {}
);
function Xf({
  children: e,
  selectedLocale: t
}) {
  const n = t ?? qf;
  function r(i, l = {}) {
    const s = gi(n, i);
    return Kf(s, l);
  }
  function o(i, l = {}) {
    const s = gi(n, i);
    return Yf(s, l);
  }
  return /* @__PURE__ */ y(as.Provider, { value: { t: r, tHtml: o }, children: e });
}
function Ae() {
  return ue(as);
}
function Vr({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: l,
  variant: s = "default"
}) {
  const { t: a } = Ae(), u = {
    danger: {
      icon: /* @__PURE__ */ y(
        Ef,
        {
          className: "text-csv-importer-danger size-6",
          "aria-hidden": "true"
        }
      ),
      btnVariant: "danger",
      bgColor: "bg-csv-importer-danger-extra-light"
    },
    default: {
      btnVariant: "primary"
    }
  }, { icon: c, btnVariant: p, bgColor: f } = u[s];
  return /* @__PURE__ */ y(df, { open: e, onClose: t, className: "relative z-10", children: [
    /* @__PURE__ */ y(
      cf,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ y("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ y("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ y(
      os,
      {
        transition: !0,
        className: "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ y("div", { className: "sm:flex sm:items-start", children: [
            c && /* @__PURE__ */ y(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${f} sm:mx-0 sm:size-10`,
                children: c
              }
            ),
            /* @__PURE__ */ y("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ y(
                is,
                {
                  as: "h3",
                  className: "text-base font-semibold text-gray-900",
                  children: n
                }
              ),
              r && /* @__PURE__ */ y("div", { className: "mt-2", children: /* @__PURE__ */ y("p", { className: "text-sm text-gray-500", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ y("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ y("div", { className: "sm:ml-3 sm:w-auto", children: /* @__PURE__ */ y(
              Ke,
              {
                variant: p,
                onClick: () => {
                  l(), t(!1);
                },
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ y("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ y(
              Ke,
              {
                variant: "tertiary",
                "data-autofocus": !0,
                onClick: () => t(!1),
                children: i ?? a("components.confirmationModal.cancel")
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
const Zf = ge(function({ children: t }, n) {
  return /* @__PURE__ */ y(
    "div",
    {
      ref: n,
      className: "csv-importer",
      style: {
        animation: "none",
        animationDelay: "0",
        animationDirection: "normal",
        animationDuration: "0",
        animationFillMode: "none",
        animationIterationCount: "1",
        animationName: "none",
        animationPlayState: "running",
        animationTimingFunction: "ease",
        backfaceVisibility: "visible",
        background: "0",
        backgroundAttachment: "scroll",
        backgroundClip: "border-box",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backgroundOrigin: "padding-box",
        backgroundPosition: "0 0",
        backgroundPositionX: "0",
        backgroundPositionY: "0",
        backgroundRepeat: "repeat",
        backgroundSize: "auto auto",
        border: "0",
        borderStyle: "none",
        borderWidth: "medium",
        borderColor: "inherit",
        borderBottom: "0",
        borderBottomColor: "inherit",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
        borderBottomStyle: "none",
        borderBottomWidth: "medium",
        borderCollapse: "separate",
        borderImage: "none",
        borderLeft: "0",
        borderLeftColor: "inherit",
        borderLeftStyle: "none",
        borderLeftWidth: "medium",
        borderRadius: "0",
        borderRight: "0",
        borderRightColor: "inherit",
        borderRightStyle: "none",
        borderRightWidth: "medium",
        borderSpacing: "0",
        borderTop: "0",
        borderTopColor: "inherit",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        borderTopStyle: "none",
        borderTopWidth: "medium",
        bottom: "auto",
        boxShadow: "none",
        boxSizing: "content-box",
        captionSide: "top",
        clear: "none",
        clip: "auto",
        color: "inherit",
        columns: "auto",
        columnCount: "auto",
        columnFill: "balance",
        columnGap: "normal",
        columnRule: "medium none currentColor",
        columnRuleColor: "currentColor",
        columnRuleStyle: "none",
        columnRuleWidth: "none",
        columnSpan: "inherit",
        columnWidth: "auto",
        content: "normal",
        counterIncrement: "none",
        counterReset: "none",
        cursor: "auto",
        direction: "ltr",
        display: "inline",
        emptyCells: "show",
        float: "none",
        font: "normal",
        fontFamily: "inherit",
        fontSize: "16px !important",
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        height: "auto",
        hyphens: "none",
        left: "auto",
        letterSpacing: "normal",
        lineHeight: "normal",
        listStyle: "none",
        listStyleImage: "none",
        listStylePosition: "outside",
        listStyleType: "disc",
        margin: "0",
        marginBottom: "0",
        marginLeft: "0",
        marginRight: "0",
        marginTop: "0",
        maxHeight: "none",
        maxWidth: "none",
        minHeight: "0",
        minWidth: "0",
        opacity: "1",
        orphans: "inherit",
        outline: "0",
        outlineColor: "invert",
        outlineStyle: "none",
        outlineWidth: "medium",
        overflow: "visible",
        overflowX: "visible",
        overflowY: "visible",
        padding: "0",
        paddingBottom: "0",
        paddingLeft: "0",
        paddingRight: "0",
        paddingTop: "0",
        pageBreakAfter: "auto",
        pageBreakBefore: "auto",
        pageBreakInside: "auto",
        perspective: "none",
        perspectiveOrigin: "50% 50%",
        position: "static",
        right: "auto",
        tabSize: "8",
        tableLayout: "auto",
        textAlign: "inherit",
        textAlignLast: "auto",
        textDecoration: "none",
        textDecorationColor: "inherit",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textIndent: "0",
        textShadow: "none",
        textTransform: "none",
        top: "auto",
        transform: "none",
        transformStyle: "flat",
        transition: "none",
        transitionDelay: "0s",
        transitionDuration: "0s",
        transitionProperty: "none",
        transitionTimingFunction: "ease",
        unicodeBidi: "normal",
        verticalAlign: "baseline",
        visibility: "visible",
        whiteSpace: "normal",
        widows: "inherit",
        width: "auto",
        wordSpacing: "normal",
        zIndex: "auto"
      },
      children: t
    }
  );
});
function Qf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Jf = /* @__PURE__ */ ge(Qf);
function ep({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const tp = /* @__PURE__ */ ge(ep);
function np({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const rp = /* @__PURE__ */ ge(np);
function op({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const ip = /* @__PURE__ */ ge(op);
function lp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const us = /* @__PURE__ */ ge(lp), cs = ge(
  ({
    value: e,
    onBlur: t,
    onChange: n,
    placeholder: r,
    iconBuilder: o,
    classes: i,
    clearable: l,
    type: s = "text"
  }, a) => {
    const u = l && e != null && e !== "";
    function c(p) {
      const f = p.target, d = s === "number" ? f == null ? void 0 : f.valueAsNumber : f == null ? void 0 : f.value;
      return (typeof d == "number" && isNaN(d) ? "" : d) ?? "";
    }
    return /* @__PURE__ */ y("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ y(
        "input",
        {
          ref: a,
          type: s,
          inputMode: s === "number" ? "numeric" : "text",
          placeholder: r,
          value: e,
          onChange: (p) => n == null ? void 0 : n(c(p)),
          className: `${i} ${o != null ? "pl-10" : ""} ${l ? "pr-10" : ""} focus:outline-csv-importer-primary col-start-1 row-start-1 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`,
          onBlur: (p) => t == null ? void 0 : t(c(p))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
      }),
      u && /* @__PURE__ */ y(
        "span",
        {
          onClick: (p) => {
            p.stopPropagation(), n == null || n("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ y(
            us,
            {
              className: "h-5 w-5 text-gray-500 hover:text-gray-700",
              "aria-hidden": "true"
            }
          )
        }
      )
    ] });
  }
);
function sn({
  value: e,
  options: t,
  onChange: n,
  multiple: r = !1,
  compareFunction: o = (c, p) => c === p,
  clearable: i = !1,
  searchable: l = !1,
  placeholder: s,
  classes: a,
  displayPlaceholderWhenSelected: u = !1
}) {
  const { t: c } = Ae(), [p, f] = j(""), d = (h) => r && Array.isArray(e) ? e.some((_) => o(_, h)) : o(e, h), g = (h) => {
    if (f(""), r) {
      const _ = Array.isArray(h) ? h : [h];
      n(_);
    } else
      n(h);
  }, m = () => {
    f(""), n(r ? [] : null);
  }, v = t.filter((h) => d(h.value)), b = v.map((h) => h.label).join(", "), C = p && l ? t.filter(
    (h) => String(h.label).toLowerCase().includes(p.toLowerCase())
  ) : t, x = s ?? c("components.select.optionPlaceholder"), R = () => l ? b : v.length > 0 ? u ? `${x}: ${b}` : b : "", M = C.some((h) => h.group) ? Object.entries(
    C.reduce(
      (h, _) => {
        const E = _.group || "ungrouped";
        return h[E] = h[E] || [], h[E].push(_), h;
      },
      {}
    )
  ).map(([h, _]) => ({
    label: h,
    items: _
  })) : [{ label: null, items: C }], $ = M.every(({ items: h }) => h.length === 0), w = i && v.length > 0;
  return /* @__PURE__ */ y(Fd, { value: e, onChange: g, multiple: r, children: /* @__PURE__ */ y("div", { className: "relative", children: [
    /* @__PURE__ */ y(Nr, { className: "w-full", children: /* @__PURE__ */ y(
      ql,
      {
        className: `${a} focus:outline-csv-importer-primary block w-full cursor-pointer truncate rounded-md bg-white py-1.5 focus:cursor-text ${w ? "pr-12" : "pr-2"} pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm`,
        displayValue: R,
        onChange: (h) => l && f(h.target.value),
        placeholder: x,
        readOnly: !l
      }
    ) }),
    w && /* @__PURE__ */ y(
      "span",
      {
        onClick: (h) => {
          h.stopPropagation(), m();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ y(
          us,
          {
            className: "h-5 w-5 text-gray-500 hover:text-gray-700",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ y(Nr, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ y(
      rp,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      }
    ) }),
    /* @__PURE__ */ y(
      Kl,
      {
        anchor: "bottom",
        transition: !0,
        className: "absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm",
        children: [
          $ && /* @__PURE__ */ y(
            Lr,
            {
              disabled: !0,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-2 pr-9 pl-3 text-gray-400 select-none",
              children: /* @__PURE__ */ y("span", { className: "block truncate font-normal", children: c("components.select.noOptions") })
            },
            "no-options"
          ),
          M.map(({ label: h, items: _ }) => /* @__PURE__ */ y("div", { children: [
            h && /* @__PURE__ */ y("div", { className: "py-2 pr-9 pl-3 text-gray-400 uppercase", children: h }),
            _.map((E) => /* @__PURE__ */ y(
              Lr,
              {
                value: E.value,
                className: "group data-focus:bg-csv-importer-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden",
                children: [
                  E.icon,
                  /* @__PURE__ */ y("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: E.label }),
                  d(E.value) && /* @__PURE__ */ y("span", { className: "text-csv-importer-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white", children: /* @__PURE__ */ y(Jf, { "aria-hidden": "true", className: "h-5 w-5" }) })
                ]
              },
              E.value
            ))
          ] }, h || "all"))
        ]
      }
    )
  ] }) });
}
function sp({ tabs: e, activeTab: t, onTabChange: n }) {
  return /* @__PURE__ */ y("div", { children: [
    /* @__PURE__ */ y("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ y(
      sn,
      {
        options: e,
        value: t,
        onChange: (r) => n(r)
      }
    ) }),
    /* @__PURE__ */ y("div", { className: "hidden sm:block", children: /* @__PURE__ */ y("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ y("nav", { "aria-label": "Tabs", className: "-mb-px flex space-x-8", children: e.map((r) => /* @__PURE__ */ y(
      "button",
      {
        "aria-current": r.value === t ? "page" : void 0,
        onClick: () => n(r.value),
        className: ` ${r.value === t ? "border-csv-importer-primary text-csv-importer-primary" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} flex cursor-pointer items-center border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`,
        children: [
          r.icon,
          r.label
        ]
      },
      r.label
    )) }) }) })
  ] });
}
const ap = Dt(
  "bg-gray-50 text-gray-900 absolute outline top-full w-full whitespace-normal z-5 mb-2 hidden px-2 py-4 text-xs group-focus-within:block group-hover:block",
  {
    variants: {
      variant: {
        error: "outline-csv-importer-danger",
        info: "outline-gray-500"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), up = Dt("group relative h-full w-full", {
  variants: {
    variant: {
      error: "focus-within:outline-csv-importer-danger hover:outline-csv-importer-danger",
      info: "focus-within:outline-gray-500 hover:outline-gray-500"
    },
    withOutline: {
      true: "focus-within:outline hover:outline hover:z-5 focus-within:z-5",
      false: ""
    }
  },
  defaultVariants: {
    variant: "info",
    withOutline: !1
  }
});
function cp({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = ap({ variant: e }), o = up({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ y("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ y("span", { className: r, children: n })
  ] });
}
const dp = Dt(
  "relative inline-flex cursor-pointer items-center px-3 py-2 text-sm font-semibold ring-gray-300 ring-1 ring-inset focus:z-10",
  {
    variants: {
      active: {
        true: "",
        false: "bg-white hover:bg-gray-50"
      },
      variant: {
        default: "",
        danger: "text-csv-importer-danger"
      },
      location: {
        left: "rounded-l-md",
        center: "-ml-px",
        right: "rounded-r-md -ml-px "
      }
    },
    compoundVariants: [
      {
        active: !0,
        variant: "default",
        className: "bg-gray-900 text-white"
      },
      {
        active: !0,
        variant: "danger",
        className: "bg-csv-importer-danger text-white"
      },
      {
        active: !1,
        variant: "default",
        className: "text-gray-900"
      },
      {
        active: !1,
        variant: "danger",
        className: "text-csv-importer-danger"
      }
    ]
  }
);
function fp({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ y("span", { className: "isolate inline-flex rounded-md shadow-xs", children: t.map((n, r) => /* @__PURE__ */ y(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      className: dp({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const pp = Dt(
  "absolute top-full left-1/2 z-20 hidden w-max -translate-x-1/2 translate-y-3 transform rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-lg ",
  {
    variants: {
      hidden: {
        true: "hidden",
        false: "group-focus-within:block group-hover:block"
      }
    }
  }
);
function It({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r = !1
}) {
  const o = pp({ hidden: r });
  return /* @__PURE__ */ y("div", { className: `${n} group relative`, children: [
    t,
    /* @__PURE__ */ y("div", { className: o, children: [
      e,
      /* @__PURE__ */ y("div", { className: "absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900" })
    ] })
  ] });
}
const gp = Dt("inline-flex items-center rounded-md px-1.5 py-0.5", {
  variants: {
    variant: {
      primary: "bg-csv-importer-primary-extra-light text-xs font-medium"
    },
    defaultVariants: {
      variant: "primary"
    }
  }
});
function ds({ children: e, variant: t }) {
  const n = gp({ variant: t });
  return /* @__PURE__ */ y("div", { className: n, children: e });
}
const mp = 100, fs = 5, fr = ["text/csv"], mi = ",", hp = 500;
function vp({ setFile: e }) {
  const { t, tHtml: n } = Ae(), r = H(null), o = (l) => {
    var a;
    const s = l.target;
    if ((a = s.files) != null && a.length) {
      const u = s.files[0];
      fr.includes(u.type) && e(u);
    }
  };
  return /* @__PURE__ */ y(
    Qs,
    {
      onClick: () => {
        var l;
        return (l = r.current) == null ? void 0 : l.click();
      },
      onDragOver: (l) => l.preventDefault(),
      onDrop: (l) => {
        var s;
        if (l.preventDefault(), (s = l.dataTransfer) != null && s.files.length) {
          const a = l.dataTransfer.files[0];
          fr.includes(a.type) && e(a);
        }
      },
      children: [
        /* @__PURE__ */ y("div", { className: "p-7.5", children: /* @__PURE__ */ y("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ y(_f, { className: "text-csv-importer-primary mb-3 h-12 w-12" }),
          /* @__PURE__ */ y("p", { className: "mb-3", children: t("importer.uploader.dragAndDrop") }),
          /* @__PURE__ */ y("div", { className: "text-sm text-gray-500", children: [
            n("importer.uploader.fileSizeLimit", {
              limit: /* @__PURE__ */ y("b", { children: "20MB" })
            }),
            " ",
            "• CSV"
          ] }),
          /* @__PURE__ */ y("div", { className: "mt-3", children: /* @__PURE__ */ y(Ke, { children: t("importer.uploader.browseFiles") }) })
        ] }) }),
        /* @__PURE__ */ y(
          "input",
          {
            ref: r,
            type: "file",
            accept: fr.join(","),
            style: { display: "none" },
            onChange: o
          }
        )
      ]
    }
  );
}
function ps(e, t) {
  return e.indexOf(t) !== -1;
}
function gs(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function ms(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
class Rt {
  constructor(t) {
    ke(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class wp extends Rt {
  constructor(n) {
    super(n);
    ke(this, "key");
    ke(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
function yp(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class Xn extends Rt {
  constructor(n) {
    super(n);
    ke(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(yp(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test(n == null ? void 0 : n.toString()))
      return this.definition.error || "validators.regex";
  }
}
class bp extends Xn {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "email"
    });
  }
}
class _p extends Rt {
  constructor(n) {
    super(n);
    ke(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (!this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class xp extends Rt {
  isValid(t) {
    if (!(!isNaN(t) && t !== null && t !== void 0))
      return this.definition.error || "validators.integer";
  }
}
class Cp extends Rt {
  constructor(n) {
    super(n);
    ke(this, "delimiter");
    ke(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    if ((n == null ? void 0 : n.toString().split(this.delimiter)).some((o) => !this.values.includes(o.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class Sp extends Xn {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "phone_number"
    });
  }
}
class Ep extends Xn {
  constructor() {
    super({
      regex: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      validate: "postal_code"
    });
  }
}
class Rp extends Rt {
  isValid(t) {
    if (!t)
      return this.definition.error || "validators.required";
  }
}
class $p extends Rt {
  constructor(n) {
    super(n);
    ke(this, "seen");
    this.seen = {};
  }
  isValid(n) {
    if (n in this.seen)
      return this.definition.error || "validators.unique";
    this.seen[n] = !0;
  }
}
function Tp(e) {
  const t = {
    regex_matches: Xn,
    required: Rp,
    unique: $p,
    includes: _p,
    multi_includes: Cp,
    is_integer: xp,
    postal_code: Ep,
    phone_number: Sp,
    email: bp,
    custom: wp
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
const Fp = (e) => e == null, Op = (e) => e.rows.filter((t) => Object.keys(t).length > 0), Ip = (e) => Fp(e) || e === "", hi = (e) => [...new Set(e)];
function Pn(e) {
  return e == null ? null : e.toString().toLowerCase().replace("_", "").replace(" ", "");
}
function hs(e, t) {
  var o, i, l;
  const n = e.typeArguments, r = t.find(
    (s) => s.sheetId === n.sheetId
  );
  return ((l = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((s) => s[n.sheetColumnId])) == null ? void 0 : i.filter((s) => !Ip(s))) == null ? void 0 : l.filter((s, a, u) => u.indexOf(s) === a)) ?? [];
}
function Mp(e, t) {
  const n = e.columns.map((a) => a.id).join(mi), r = t.map(
    (a) => e.columns.map((u) => a[u.id]).join(mi)
  ), o = [n, ...r].join(`
`), i = new Blob([o], { type: "text/csv" }), l = URL.createObjectURL(i), s = document.createElement("a");
  s.href = l, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(l);
}
function vs(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function Pp(e, t, n, r, o, i, l) {
  return U(() => {
    let a = e.rows;
    switch (n) {
      case "errors":
        a = e.rows.filter(
          (u, c) => r.some((p) => p.rowIndex === c)
        );
        break;
      case "valid":
        a = e.rows.filter(
          (u, c) => !r.some((p) => p.rowIndex === c)
        );
        break;
      case "all":
      default:
        a = e.rows;
    }
    return o != null && (a = a.filter((u) => {
      const c = vs(t, i.id, u);
      return r.find(
        (f) => f.rowIndex === c && f.columnId === o
      ) != null;
    })), l.trim() !== "" && (a = a.filter(
      (u) => Object.values(u).some(
        (c) => {
          var p;
          return (p = Pn(c)) == null ? void 0 : p.includes(Pn(l));
        }
      )
    )), a;
  }, [
    e,
    n,
    r,
    o,
    i.id,
    t,
    l
  ]);
}
function Zn(e) {
  return e.validators && e.validators.length > 0 ? !!e.validators.find(
    (n) => n.validate === "required"
  ) : !1;
}
function Ap(e, t) {
  const n = [];
  if (e.type === "enum" && n.push({
    values: e.typeArguments.values.map((r) => r.value),
    validate: "includes"
  }), e.type === "reference") {
    const r = hs(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  return n;
}
function kp(e, t, n) {
  const r = [], o = gs(e.columns, (i, l) => {
    l[i.id] = [], [
      ...i.validators ?? [],
      ...Ap(i, n)
    ].forEach((a) => {
      l[i.id].push(
        Tp(a)
      );
    });
  });
  return e.columns.forEach((i) => {
    t.rows.forEach((l, s) => {
      if (!ms(l) || !(i.id in l) && !Zn(i))
        return;
      const a = l[i.id];
      o[i.id].forEach((c) => {
        const p = c.isValid(a, l);
        p != null && r.push({
          sheetId: e.id,
          columnId: i.id,
          rowIndex: s,
          message: p
        });
      });
    });
  }), r;
}
function pr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = kp(r, o, t);
      n.push(...i);
    }
  }), n;
}
function Np(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function Lp(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (i.type === "reference")
        return !1;
      const l = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Pn(a)), s = Pn(r);
      return l.includes(s);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const Dp = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = Lp(r, t);
    n.push(...o);
  }), Np(n);
};
function Vp(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Hp(e, t) {
  const n = zp(e, t), r = Bp(n);
  return jp(r);
}
function zp(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, fs);
}
function Bp(e) {
  return [
    ...e,
    ...Array(fs - e.length).fill("")
  ];
}
function jp(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > hp && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function Gp(e, t) {
  const { t: n } = Ae();
  return e.flatMap(
    (o) => o.columns.filter((i) => i.type !== "reference").map((i) => ({
      label: `${i.label}${Zn(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (l) => l.sheetId === o.id && l.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => Up(o, i, n("mapper.unused")));
}
function Up(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function Wp(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (Zn(r) && r.type !== "reference" && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function qp({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = Ae();
  return t && /* @__PURE__ */ y("div", { className: "m-4 rounded-sm border border-gray-300 bg-white px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ y("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ y("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ y("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ y("table", { className: "min-w-full divide-y divide-gray-300", children: [
    /* @__PURE__ */ y("thead", { children: /* @__PURE__ */ y("tr", { children: /* @__PURE__ */ y(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ y(ds, { variant: "primary", children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ y("tbody", { className: "divide-y divide-gray-300", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ y("tr", { children: /* @__PURE__ */ y("td", { className: "h-12 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: o || i === 0 && /* @__PURE__ */ y("span", { className: "text-gray-500 italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function Kp({
  csvHeader: e,
  setMapping: t,
  currentMapping: n,
  mappingSelectionOptions: r,
  onMouseEnter: o
}) {
  var l;
  const i = n == null ? null : ((l = r.find(
    (s) => s.value.sheetId === n.sheetId && s.value.sheetColumnId === n.sheetColumnId
  )) == null ? void 0 : l.value) ?? null;
  return /* @__PURE__ */ y(
    "div",
    {
      className: "hover:bg-csv-importer-tertiary-light rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ y("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ y("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(ds, { variant: "primary", children: e.slice(0, 30) }) }),
          /* @__PURE__ */ y("div", { className: "mx-5", children: /* @__PURE__ */ y(mf, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ y("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ y(
          sn,
          {
            searchable: !0,
            clearable: !0,
            compareFunction: (s, a) => s == null || a == null ? !1 : s.sheetColumnId === a.sheetColumnId && s.sheetId === a.sheetId,
            value: i,
            options: r,
            onChange: (s) => t(s)
          }
        ) })
      ] })
    }
  );
}
function Yp({
  parsed: e,
  sheetDefinitions: t,
  currentMapping: n,
  onMappingsChanged: r,
  onMappingsSet: o,
  onBack: i
}) {
  const { t: l } = Ae(), [s, a] = j(null), u = e.data, c = e.meta.fields, p = Gp(
    t,
    n
  ), f = Wp(
    t,
    n
  ), d = U(() => s ? Hp(u, s) : [], [s, u]);
  return /* @__PURE__ */ y("div", { children: [
    /* @__PURE__ */ y("div", { className: "text-2xl", children: "Review and confirm each mapping" }),
    /* @__PURE__ */ y("div", { className: "flex justify-between space-x-5", children: [
      /* @__PURE__ */ y("div", { className: "flex-2", children: [
        /* @__PURE__ */ y("div", { className: "text-sm my-5 flex font-light uppercase", children: [
          /* @__PURE__ */ y("div", { className: "flex-1", children: l("mapper.incomingColumn") }),
          /* @__PURE__ */ y("div", { className: "flex-1", children: l("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ y("div", { className: "max-h-[70vh] overflow-y-auto", children: c.map((g, m) => {
          const v = n.find(
            (b) => b.csvColumnName === g
          ) ?? null;
          return /* @__PURE__ */ y(
            Kp,
            {
              csvHeader: g,
              currentMapping: v,
              setMapping: (b) => {
                const C = Vp(
                  n,
                  g,
                  b
                );
                r(C);
              },
              mappingSelectionOptions: p,
              onMouseEnter: () => {
                a(g);
              }
            },
            m
          );
        }) })
      ] }),
      /* @__PURE__ */ y("div", { className: "flex-1 bg-gray-50", children: /* @__PURE__ */ y(
        qp,
        {
          examples: d,
          csvHeader: s ?? ""
        }
      ) })
    ] }),
    /* @__PURE__ */ y("div", { className: "my-5 flex justify-between", children: [
      /* @__PURE__ */ y(Ke, { variant: "secondary", outline: !0, onClick: i, children: l("mapper.back") }),
      /* @__PURE__ */ y(
        It,
        {
          tooltipText: l("mapper.mappingsNotValidTooltip"),
          hidden: f,
          children: /* @__PURE__ */ y(Ke, { onClick: o, disabled: !f, children: l("mapper.confirm") })
        }
      )
    ] })
  ] });
}
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Xp() {
  return {
    accessor: (e, t) => typeof e == "function" ? {
      ...t,
      accessorFn: e
    } : {
      ...t,
      accessorKey: e
    },
    display: (e) => e,
    group: (e) => e
  };
}
function at(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function De(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: at(n, r[e])
    }));
  };
}
function Qn(e) {
  return e instanceof Function;
}
function Zp(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Qp(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const l = t(i);
      l != null && l.length && r(l);
    });
  };
  return r(e), n;
}
function Y(e, t, n) {
  let r = [], o;
  return (i) => {
    let l;
    n.key && n.debug && (l = Date.now());
    const s = e(i);
    if (!(s.length !== r.length || s.some((c, p) => r[p] !== c)))
      return o;
    r = s;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const c = Math.round((Date.now() - l) * 100) / 100, p = Math.round((Date.now() - u) * 100) / 100, f = p / 16, d = (g, m) => {
        for (g = String(g); g.length < m; )
          g = " " + g;
        return g;
      };
      console.info(`%c⏱ ${d(p, 5)} /${d(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function X(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function Jp(e, t, n, r) {
  const o = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: Y(() => [e, n, t, i], (l, s, a, u) => ({
      table: l,
      column: s,
      row: a,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), X(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, n, t, e);
  }, {}), i;
}
function eg(e, t, n, r) {
  var o, i;
  const s = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = s.accessorKey;
  let u = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, c;
  if (s.accessorFn ? c = s.accessorFn : a && (a.includes(".") ? c = (f) => {
    let d = f;
    for (const m of a.split(".")) {
      var g;
      d = (g = d) == null ? void 0 : g[m], process.env.NODE_ENV !== "production" && d === void 0 && console.warn(`"${m}" in deeply nested key "${a}" returned undefined.`);
    }
    return d;
  } : c = (f) => f[s.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(s.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: Y(() => [!0], () => {
      var f;
      return [p, ...(f = p.columns) == null ? void 0 : f.flatMap((d) => d.getFlatColumns())];
    }, X(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: Y(() => [e._getOrderColumnsFn()], (f) => {
      var d;
      if ((d = p.columns) != null && d.length) {
        let g = p.columns.flatMap((m) => m.getLeafColumns());
        return f(g);
      }
      return [p];
    }, X(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(p, e);
  return p;
}
const Re = "debugHeaders";
function vi(e, t, n) {
  var r;
  let i = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [], s = (a) => {
        a.subHeaders && a.subHeaders.length && a.subHeaders.map(s), l.push(a);
      };
      return s(i), l;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const tg = {
  createTable: (e) => {
    e.getHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, l;
      const s = (i = r == null ? void 0 : r.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? l : [], u = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return yn(t, [...s, ...u, ...a], e);
    }, X(e.options, Re, "getHeaderGroups")), e.getCenterHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), yn(t, n, e, "center")), X(e.options, Re, "getCenterHeaderGroups")), e.getLeftHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return yn(t, i, e, "left");
    }, X(e.options, Re, "getLeftHeaderGroups")), e.getRightHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return yn(t, i, e, "right");
    }, X(e.options, Re, "getRightHeaderGroups")), e.getFooterGroups = Y(() => [e.getHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re, "getFooterGroups")), e.getLeftFooterGroups = Y(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re, "getLeftFooterGroups")), e.getCenterFooterGroups = Y(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re, "getCenterFooterGroups")), e.getRightFooterGroups = Y(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re, "getRightFooterGroups")), e.getFlatHeaders = Y(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re, "getFlatHeaders")), e.getLeftFlatHeaders = Y(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re, "getLeftFlatHeaders")), e.getCenterFlatHeaders = Y(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re, "getCenterFlatHeaders")), e.getRightFlatHeaders = Y(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re, "getRightFlatHeaders")), e.getCenterLeafHeaders = Y(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Re, "getCenterLeafHeaders")), e.getLeftLeafHeaders = Y(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Re, "getLeftLeafHeaders")), e.getRightLeafHeaders = Y(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Re, "getRightLeafHeaders")), e.getLeafHeaders = Y(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, l, s, a, u;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []].map((c) => c.getLeafHeaders()).flat();
    }, X(e.options, Re, "getLeafHeaders"));
  }
};
function yn(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(f, d) {
    d === void 0 && (d = 1), l = Math.max(l, d), f.filter((g) => g.getIsVisible()).forEach((g) => {
      var m;
      (m = g.columns) != null && m.length && s(g.columns, d + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const u = (f, d) => {
    const g = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, m = [];
    f.forEach((v) => {
      const b = [...m].reverse()[0], C = v.column.depth === g.depth;
      let x, R = !1;
      if (C && v.column.parent ? x = v.column.parent : (x = v.column, R = !0), b && (b == null ? void 0 : b.column) === x)
        b.subHeaders.push(v);
      else {
        const T = vi(n, x, {
          id: [r, d, x.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: R,
          placeholderId: R ? `${m.filter((M) => M.column === x).length}` : void 0,
          depth: d,
          index: m.length
        });
        T.subHeaders.push(v), m.push(T);
      }
      g.headers.push(v), v.headerGroup = g;
    }), a.push(g), d > 0 && u(m, d - 1);
  }, c = t.map((f, d) => vi(n, f, {
    depth: l,
    index: d
  }));
  u(c, l - 1), a.reverse();
  const p = (f) => f.filter((g) => g.column.getIsVisible()).map((g) => {
    let m = 0, v = 0, b = [0];
    g.subHeaders && g.subHeaders.length ? (b = [], p(g.subHeaders).forEach((x) => {
      let {
        colSpan: R,
        rowSpan: T
      } = x;
      m += R, b.push(T);
    })) : m = 1;
    const C = Math.min(...b);
    return v = v + C, g.colSpan = m, g.rowSpan = v, {
      colSpan: m,
      rowSpan: v
    };
  });
  return p((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const ng = (e, t, n, r, o, i, l) => {
  let s = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: l,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (a) => {
      if (s._valuesCache.hasOwnProperty(a))
        return s._valuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return s._valuesCache[a] = u.accessorFn(s.original, r), s._valuesCache[a];
    },
    getUniqueValues: (a) => {
      if (s._uniqueValuesCache.hasOwnProperty(a))
        return s._uniqueValuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (s._uniqueValuesCache[a] = u.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[a]) : (s._uniqueValuesCache[a] = [s.getValue(a)], s._uniqueValuesCache[a]);
    },
    renderValue: (a) => {
      var u;
      return (u = s.getValue(a)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Qp(s.subRows, (a) => a.subRows),
    getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
    getParentRows: () => {
      let a = [], u = s;
      for (; ; ) {
        const c = u.getParentRow();
        if (!c) break;
        a.push(c), u = c;
      }
      return a.reverse();
    },
    getAllCells: Y(() => [e.getAllLeafColumns()], (a) => a.map((u) => Jp(e, s, u, u.id)), X(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: Y(() => [s.getAllCells()], (a) => a.reduce((u, c) => (u[c.column.id] = c, u), {}), X(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, rg = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ws = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
ws.autoRemove = (e) => ze(e);
const ys = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
ys.autoRemove = (e) => ze(e);
const bs = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
bs.autoRemove = (e) => ze(e);
const _s = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
_s.autoRemove = (e) => ze(e);
const xs = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
xs.autoRemove = (e) => ze(e) || !(e != null && e.length);
const Cs = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Cs.autoRemove = (e) => ze(e) || !(e != null && e.length);
const Ss = (e, t, n) => e.getValue(t) === n;
Ss.autoRemove = (e) => ze(e);
const Es = (e, t, n) => e.getValue(t) == n;
Es.autoRemove = (e) => ze(e);
const ho = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
ho.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
ho.autoRemove = (e) => ze(e) || ze(e[0]) && ze(e[1]);
const et = {
  includesString: ws,
  includesStringSensitive: ys,
  equalsString: bs,
  arrIncludes: _s,
  arrIncludesAll: xs,
  arrIncludesSome: Cs,
  equals: Ss,
  weakEquals: Es,
  inNumberRange: ho
};
function ze(e) {
  return e == null || e === "";
}
const og = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: De("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? et.includesString : typeof r == "number" ? et.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? et.equals : Array.isArray(r) ? et.arrIncludes : et.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Qn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : et[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, r, o;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((r = t.options.enableColumnFilters) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, r;
      return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((r) => {
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((c) => c.id === e.id), l = at(n, i ? i.value : void 0);
        if (wi(o, l, e)) {
          var s;
          return (s = r == null ? void 0 : r.filter((c) => c.id !== e.id)) != null ? s : [];
        }
        const a = {
          id: e.id,
          value: l
        };
        if (i) {
          var u;
          return (u = r == null ? void 0 : r.map((c) => c.id === e.id ? a : c)) != null ? u : [];
        }
        return r != null && r.length ? [...r, a] : [a];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), r = (o) => {
        var i;
        return (i = at(t, o)) == null ? void 0 : i.filter((l) => {
          const s = n.find((a) => a.id === l.id);
          if (s) {
            const a = s.getFilterFn();
            if (wi(a, l.value, s))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (t) => {
      var n, r;
      e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function wi(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const ig = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), lg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, sg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, ag = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, ug = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, cg = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Zp(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, dg = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), fg = (e, t) => new Set(t.map((n) => n.getValue(e))).size, pg = (e, t) => t.length, gr = {
  sum: ig,
  min: lg,
  max: sg,
  extent: ag,
  mean: ug,
  median: cg,
  unique: dg,
  uniqueCount: fg,
  count: pg
}, gg = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: De("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, r;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((r = t.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      if (typeof r == "number")
        return gr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return gr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Qn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : gr[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, r;
      e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const r = t.getColumn(n);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, r) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
    };
  }
};
function mg(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const hg = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: De("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = Y((n) => [Jt(t, n)], (n) => n.findIndex((r) => r.id === e.id), X(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = Jt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = Jt(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = Y(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const l = [...t], s = [...o];
        for (; s.length && l.length; ) {
          const a = l.shift(), u = s.findIndex((c) => c.id === a);
          u > -1 && i.push(s.splice(u, 1)[0]);
        }
        i = [...i, ...s];
      }
      return mg(i, n, r);
    }, X(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, mr = () => ({
  left: [],
  right: []
}), vg = {
  getInitialState: (e) => ({
    columnPinning: mr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: De("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, l;
        if (n === "right") {
          var s, a;
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((p) => !(r != null && r.includes(p))), ...r]
          };
        }
        if (n === "left") {
          var u, c;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((c = o == null ? void 0 : o.right) != null ? c : []).filter((p) => !(r != null && r.includes(p)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((p) => !(r != null && r.includes(p))),
          right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((p) => !(r != null && r.includes(p)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, l;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (l = t.options.enableColumnPinning) != null ? l : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((s) => s.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
      return i ? "left" : l ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((l) => !i.includes(l.column.id));
    }, X(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), X(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), X(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? mr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : mr());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, X(e.options, "debugColumns", "getCenterLeafColumns"));
  }
}, bn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, hr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), wg = {
  getDefaultColumnDef: () => bn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: hr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: De("columnSizing", e),
    onColumnSizingInfoChange: De("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : bn.minSize, (r = i ?? e.columnDef.size) != null ? r : bn.size), (o = e.columnDef.maxSize) != null ? o : bn.maxSize);
    }, e.getStart = Y((n) => [n, Jt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns", "getStart")), e.getAfter = Y((n) => [n, Jt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: r,
          ...o
        } = n;
        return o;
      });
    }, e.getCanResize = () => {
      var n, r;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((r = t.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var i;
          n += (i = o.column.getSize()) != null ? i : 0;
        }
      };
      return r(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (i) => {
        if (!r || !o || (i.persist == null || i.persist(), vr(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], a = vr(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (b, C) => {
          typeof C == "number" && (t.setColumnSizingInfo((x) => {
            var R, T;
            const M = t.options.columnResizeDirection === "rtl" ? -1 : 1, $ = (C - ((R = x == null ? void 0 : x.startOffset) != null ? R : 0)) * M, w = Math.max($ / ((T = x == null ? void 0 : x.startSize) != null ? T : 0), -0.999999);
            return x.columnSizingStart.forEach((h) => {
              let [_, E] = h;
              u[_] = Math.round(Math.max(E + E * w, 0) * 100) / 100;
            }), {
              ...x,
              deltaOffset: $,
              deltaPercentage: w
            };
          }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((x) => ({
            ...x,
            ...u
          })));
        }, p = (b) => c("move", b), f = (b) => {
          c("end", b), t.setColumnSizingInfo((C) => ({
            ...C,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, d = n || typeof document < "u" ? document : null, g = {
          moveHandler: (b) => p(b.clientX),
          upHandler: (b) => {
            d == null || d.removeEventListener("mousemove", g.moveHandler), d == null || d.removeEventListener("mouseup", g.upHandler), f(b.clientX);
          }
        }, m = {
          moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), p(b.touches[0].clientX), !1),
          upHandler: (b) => {
            var C;
            d == null || d.removeEventListener("touchmove", m.moveHandler), d == null || d.removeEventListener("touchend", m.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), f((C = b.touches[0]) == null ? void 0 : C.clientX);
          }
        }, v = yg() ? {
          passive: !1
        } : !1;
        vr(i) ? (d == null || d.addEventListener("touchmove", m.moveHandler, v), d == null || d.addEventListener("touchend", m.upHandler, v)) : (d == null || d.addEventListener("mousemove", g.moveHandler, v), d == null || d.addEventListener("mouseup", g.upHandler, v)), t.setColumnSizingInfo((b) => ({
          ...b,
          startOffset: a,
          startSize: l,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: s,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? hr() : (n = e.initialState.columnSizingInfo) != null ? n : hr());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    };
  }
};
let _n = null;
function yg() {
  if (typeof _n == "boolean") return _n;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return _n = e, _n;
}
function vr(e) {
  return e.type === "touchstart";
}
const bg = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: De("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((r) => ({
        ...r,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, r;
      const o = e.columns;
      return (n = o.length ? o.some((i) => i.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = Y(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), X(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = Y(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], X(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => Y(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), X(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({
        ...o,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function Jt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const _g = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, xg = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: De("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => et.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return Qn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : et[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Cg = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: De("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, i;
      e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const l = i.split(".");
        r = Math.max(r, l.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let l = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((s) => {
          l[s] = !0;
        }) : l = r, n = (o = n) != null ? o : !i, !i && n)
          return {
            ...l,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: s,
            ...a
          } = l;
          return a;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var n;
      const r = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var n, r, o;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, r = e;
      for (; n && r.parentId; )
        r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, Hr = 0, zr = 10, wr = () => ({
  pageIndex: Hr,
  pageSize: zr
}), Sg = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...wr(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: De("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (i) => at(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? wr() : (o = e.initialState.pagination) != null ? o : wr());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = at(r, o.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Hr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Hr);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? zr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : zr);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, at(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
        return {
          ...o,
          pageIndex: s,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let l = at(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...o,
        pageCount: l
      };
    }), e.getPageOptions = Y(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, l) => l)), o;
    }, X(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, yr = () => ({
  top: [],
  bottom: []
}), Eg = {
  getInitialState: (e) => ({
    rowPinning: yr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: De("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], l = o ? e.getParentRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], s = /* @__PURE__ */ new Set([...l, e.id, ...i]);
      t.setRowPinning((a) => {
        var u, c;
        if (n === "bottom") {
          var p, f;
          return {
            top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((m) => !(s != null && s.has(m))),
            bottom: [...((f = a == null ? void 0 : a.bottom) != null ? f : []).filter((m) => !(s != null && s.has(m))), ...Array.from(s)]
          };
        }
        if (n === "top") {
          var d, g;
          return {
            top: [...((d = a == null ? void 0 : a.top) != null ? d : []).filter((m) => !(s != null && s.has(m))), ...Array.from(s)],
            bottom: ((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((m) => !(s != null && s.has(m)))
          };
        }
        return {
          top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter((m) => !(s != null && s.has(m))),
          bottom: ((c = a == null ? void 0 : a.bottom) != null ? c : []).filter((m) => !(s != null && s.has(m)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = t.options;
      return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: r,
        bottom: o
      } = t.getState().rowPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
      return i ? "top" : l ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((l) => {
        let {
          id: s
        } = l;
        return s;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? yr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : yr());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, i;
        return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((l) => {
          const s = e.getRow(l, !0);
          return s.getIsAllParentsExpanded() ? s : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((l) => t.find((s) => s.id === l))
      )).filter(Boolean).map((l) => ({
        ...l,
        position: r
      }));
    }, e.getTopRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), X(e.options, "debugRows", "getTopRows")), e.getBottomRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), X(e.options, "debugRows", "getBottomRows")), e.getCenterRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, X(e.options, "debugRows", "getCenterRows"));
  }
}, Rg = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: De("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const r = {
          ...n
        }, o = e.getPreGroupedRowModel().flatRows;
        return t ? o.forEach((i) => {
          i.getCanSelect() && (r[i.id] = !0);
        }) : o.forEach((i) => {
          delete r[i.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        Br(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Y(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? br(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = Y(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? br(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = Y(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? br(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let r = !!(t.length && Object.keys(n).length);
      return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let r = !!t.length;
      return r && t.some((o) => !n[o.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, r) => {
      const o = e.getIsSelected();
      t.setRowSelection((i) => {
        var l;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return i;
        const s = {
          ...i
        };
        return Br(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return vo(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return jr(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return jr(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (r) => {
        var o;
        n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, Br = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, !0);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => Br(e, s.id, n, r, o));
};
function br(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var u;
      const c = vo(a, n);
      if (c && (r.push(a), o[a.id] = a), (u = a.subRows) != null && u.length && (a = {
        ...a,
        subRows: i(a.subRows)
      }), c)
        return a;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function vo(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function jr(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (vo(l, t) ? i = !0 : o = !1), l.subRows && l.subRows.length)) {
      const s = jr(l, t);
      s === "all" ? i = !0 : (s === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Gr = /([0-9]+)/gm, $g = (e, t, n) => Rs(ft(e.getValue(n)).toLowerCase(), ft(t.getValue(n)).toLowerCase()), Tg = (e, t, n) => Rs(ft(e.getValue(n)), ft(t.getValue(n))), Fg = (e, t, n) => wo(ft(e.getValue(n)).toLowerCase(), ft(t.getValue(n)).toLowerCase()), Og = (e, t, n) => wo(ft(e.getValue(n)), ft(t.getValue(n))), Ig = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Mg = (e, t, n) => wo(e.getValue(n), t.getValue(n));
function wo(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function ft(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Rs(e, t) {
  const n = e.split(Gr).filter(Boolean), r = t.split(Gr).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), l = parseInt(o, 10), s = parseInt(i, 10), a = [l, s].sort();
    if (isNaN(a[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(a[1]))
      return isNaN(l) ? -1 : 1;
    if (l > s)
      return 1;
    if (s > l)
      return -1;
  }
  return n.length - r.length;
}
const qt = {
  alphanumeric: $g,
  alphanumericCaseSensitive: Tg,
  text: Fg,
  textCaseSensitive: Og,
  datetime: Ig,
  basic: Mg
}, Pg = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: De("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return qt.datetime;
        if (typeof i == "string" && (r = !0, i.split(Gr).length > 1))
          return qt.alphanumeric;
      }
      return r ? qt.text : qt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Qn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : qt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((l) => {
        const s = l == null ? void 0 : l.find((d) => d.id === e.id), a = l == null ? void 0 : l.findIndex((d) => d.id === e.id);
        let u = [], c, p = i ? n : o === "desc";
        if (l != null && l.length && e.getCanMultiSort() && r ? s ? c = "toggle" : c = "add" : l != null && l.length && a !== l.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (i || o || (c = "remove")), c === "add") {
          var f;
          u = [...l, {
            id: e.id,
            desc: p
          }], u.splice(0, u.length - ((f = t.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = l.map((d) => d.id === e.id ? {
          ...d,
          desc: p
        } : d) : c === "remove" ? u = l.filter((d) => d.id !== e.id) : u = [{
          id: e.id,
          desc: p
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const i = e.getFirstSortDir(), l = e.getIsSorted();
      return l ? l !== i && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : l === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var n, r;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((r = t.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, r;
      return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, r;
      return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (r) => {
        n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, r;
      e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Ag = [
  tg,
  bg,
  hg,
  vg,
  rg,
  og,
  _g,
  //depends on ColumnFaceting
  xg,
  //depends on ColumnFiltering
  Pg,
  gg,
  //depends on RowSorting
  Cg,
  Sg,
  Eg,
  Rg,
  wg
];
function kg(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Ag, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((f, d) => Object.assign(f, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(o)), {}), l = (f) => o.options.mergeOptions ? o.options.mergeOptions(i, f) : {
    ...i,
    ...f
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((f) => {
    var d;
    a = (d = f.getInitialState == null ? void 0 : f.getInitialState(a)) != null ? d : a;
  });
  const u = [];
  let c = !1;
  const p = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: a,
    _queue: (f) => {
      u.push(f), c || (c = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        c = !1;
      }).catch((d) => setTimeout(() => {
        throw d;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (f) => {
      const d = at(f, o.options);
      o.options = l(d);
    },
    getState: () => o.options.state,
    setState: (f) => {
      o.options.onStateChange == null || o.options.onStateChange(f);
    },
    _getRowId: (f, d, g) => {
      var m;
      return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(f, d, g)) != null ? m : `${g ? [g.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, d) => {
      let g = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[f];
      if (!g && (g = o.getCoreRowModel().rowsById[f], !g))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return g;
    },
    _getDefaultColumnDef: Y(() => [o.options.defaultColumn], (f) => {
      var d;
      return f = (d = f) != null ? d : {}, {
        header: (g) => {
          const m = g.header.column.columnDef;
          return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (g) => {
          var m, v;
          return (m = (v = g.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? m : null;
        },
        ...o._features.reduce((g, m) => Object.assign(g, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
        ...f
      };
    }, X(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: Y(() => [o._getColumnDefs()], (f) => {
      const d = function(g, m, v) {
        return v === void 0 && (v = 0), g.map((b) => {
          const C = eg(o, b, v, m), x = b;
          return C.columns = x.columns ? d(x.columns, C, v + 1) : [], C;
        });
      };
      return d(f);
    }, X(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: Y(() => [o.getAllColumns()], (f) => f.flatMap((d) => d.getFlatColumns()), X(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: Y(() => [o.getAllFlatColumns()], (f) => f.reduce((d, g) => (d[g.id] = g, d), {}), X(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: Y(() => [o.getAllColumns(), o._getOrderColumnsFn()], (f, d) => {
      let g = f.flatMap((m) => m.getLeafColumns());
      return d(g);
    }, X(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const d = o._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !d && console.error(`[Table] Column with id '${f}' does not exist.`), d;
    }
  };
  Object.assign(o, p);
  for (let f = 0; f < o._features.length; f++) {
    const d = o._features[f];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function Ng() {
  return (e) => Y(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let u = 0; u < o.length; u++) {
        const c = ng(e, e._getRowId(o[u], u, l), o[u], u, i, void 0, l == null ? void 0 : l.id);
        if (n.flatRows.push(c), n.rowsById[c.id] = c, s.push(c), e.options.getSubRows) {
          var a;
          c.originalSubRows = e.options.getSubRows(o[u], u), (a = c.originalSubRows) != null && a.length && (c.subRows = r(c.originalSubRows, i + 1, c));
        }
      }
      return s;
    };
    return n.rows = r(t), n;
  }, X(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Lg() {
  return (e) => Y(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], i = r.filter((a) => {
      var u;
      return (u = e.getColumn(a.id)) == null ? void 0 : u.getCanSort();
    }), l = {};
    i.forEach((a) => {
      const u = e.getColumn(a.id);
      u && (l[a.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const s = (a) => {
      const u = a.map((c) => ({
        ...c
      }));
      return u.sort((c, p) => {
        for (let d = 0; d < i.length; d += 1) {
          var f;
          const g = i[d], m = l[g.id], v = m.sortUndefined, b = (f = g == null ? void 0 : g.desc) != null ? f : !1;
          let C = 0;
          if (v) {
            const x = c.getValue(g.id), R = p.getValue(g.id), T = x === void 0, M = R === void 0;
            if (T || M) {
              if (v === "first") return T ? -1 : 1;
              if (v === "last") return T ? 1 : -1;
              C = T && M ? 0 : T ? v : -v;
            }
          }
          if (C === 0 && (C = m.sortingFn(c, p, g.id)), C !== 0)
            return b && (C *= -1), m.invertSorting && (C *= -1), C;
        }
        return c.index - p.index;
      }), u.forEach((c) => {
        var p;
        o.push(c), (p = c.subRows) != null && p.length && (c.subRows = s(c.subRows));
      }), u;
    };
    return {
      rows: s(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, X(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Dg(e, t) {
  return e ? Vg(e) ? /* @__PURE__ */ V(e, t) : e : null;
}
function Vg(e) {
  return Hg(e) || typeof e == "function" || zg(e);
}
function Hg(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function zg(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Bg(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = j(() => ({
    current: kg(t)
  })), [r, o] = j(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (l) => {
      o(l), e.onStateChange == null || e.onStateChange(l);
    }
  })), n.current;
}
function jg({
  columnDefinition: e,
  value: t,
  onUpdated: n,
  allData: r,
  clearRowsSelection: o,
  errorsText: i
}) {
  var v;
  const { t: l } = Ae(), [s, a] = j(!1), u = H(null);
  oe(() => {
    s && (o(), u.current && u.current.focus());
  }, [s]);
  const c = e.type === "enum" ? ((v = e.typeArguments.values.find((b) => b.value === t)) == null ? void 0 : v.label) ?? t : t, f = c == null || typeof c == "string" && c.trim() === "" ? " " : c, d = e.isReadOnly, g = i ? "bg-csv-importer-danger-extra-light" : d ? "bg-gray-100" : "";
  if (!s)
    return /* @__PURE__ */ y(
      cp,
      {
        variant: i ? "error" : "info",
        tooltipText: i || (d ? l("sheet.readOnly") : ""),
        children: /* @__PURE__ */ y(
          "div",
          {
            onClick: (b) => !d && b.detail > 1 && a(!0),
            className: `h-full w-full py-4 pr-3 pl-4 ${g}`,
            children: f
          }
        )
      }
    );
  function m(b) {
    a(!1), e.type === "number" && b !== "" && !isNaN(Number(b)) ? n(Number(b)) : n(b ?? "");
  }
  if (e.type === "reference") {
    const C = hs(
      e,
      r
    ).map((x) => ({
      label: x,
      value: x
    }));
    return /* @__PURE__ */ y(
      sn,
      {
        options: C,
        value: t,
        onChange: (x) => m(x ?? "")
      }
    );
  }
  if (e.type === "enum") {
    const C = e.typeArguments.values;
    return /* @__PURE__ */ y(
      sn,
      {
        options: C,
        value: t,
        onChange: (x) => m(x ?? "")
      }
    );
  }
  return /* @__PURE__ */ y(
    cs,
    {
      type: e.type === "number" ? "number" : "text",
      classes: "block w-full",
      value: t,
      onBlur: m,
      ref: u
    }
  );
}
function Gg({
  table: e,
  sheetDefinition: t,
  visibleData: n,
  allData: r,
  sheetValidationErrors: o,
  onCellValueChanged: i,
  selectedRows: l,
  setSelectedRows: s
}) {
  const { t: a } = Ae();
  function u(m, v) {
    return o.filter(
      (b) => b.columnId === m && b.rowIndex === v
    );
  }
  const c = l.length === n.length && n.length > 0;
  function p() {
    s(c ? [] : n);
  }
  function f(m) {
    l.includes(m) ? s(l.filter((v) => v !== m)) : s([...l, m]);
  }
  const d = "bg-gray-100 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 whitespace-nowrap border-y border-gray-300", g = "text-sm font-medium whitespace-nowrap text-gray-900 border-b border-gray-300";
  return /* @__PURE__ */ y("div", { className: "max-h-[80vh] overflow-auto", children: /* @__PURE__ */ y("table", { className: "min-w-full border-separate border-spacing-0", children: [
    /* @__PURE__ */ y("thead", { className: "sticky top-0 z-10 bg-gray-100", children: e.getHeaderGroups().map((m) => /* @__PURE__ */ y("tr", { children: [
      /* @__PURE__ */ y("th", { className: `${d} sticky left-0 z-20`, children: /* @__PURE__ */ y(
        Vo,
        {
          id: `Select all checkbox for ${t.id}`,
          checked: c,
          setChecked: p
        }
      ) }),
      m.headers.map((v) => /* @__PURE__ */ y("th", { className: `z-10 min-w-48 ${d}`, children: /* @__PURE__ */ y(
        "div",
        {
          className: `flex ${v.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
          onClick: v.column.getToggleSortingHandler(),
          children: [
            v.isPlaceholder ? null : Dg(
              v.column.columnDef.header,
              v.getContext()
            ),
            /* @__PURE__ */ y("span", { className: "ml-2 flex-none rounded-sm bg-gray-500 text-gray-200", children: {
              asc: /* @__PURE__ */ y(
                ip,
                {
                  "aria-hidden": "true",
                  className: "size-5"
                }
              ),
              desc: /* @__PURE__ */ y(
                tp,
                {
                  "aria-hidden": "true",
                  className: "size-5"
                }
              )
            }[v.column.getIsSorted()] ?? null })
          ]
        }
      ) }, v.id))
    ] }, m.id)) }),
    /* @__PURE__ */ y("tbody", { className: "divide-y divide-gray-200", children: e.getRowModel().rows.map((m) => /* @__PURE__ */ y("tr", { children: [
      /* @__PURE__ */ y(
        "td",
        {
          className: `bg-gray-100 ${g} sticky left-0 z-5 py-3.5 pr-3 pl-4`,
          children: /* @__PURE__ */ y(
            Vo,
            {
              id: `Selection checkbox for ${t.id} ${m.id}`,
              checked: l.includes(m.original),
              setChecked: () => f(m.original),
              label: `${Number(m.id) + 1}`
            }
          )
        }
      ),
      m.getVisibleCells().map((v, b) => {
        const C = t.columns[b].id, x = vs(
          r,
          t.id,
          m.original
        ), R = u(C, x).map((T) => a(T.message)).join(", ");
        return /* @__PURE__ */ y("td", { className: g, children: /* @__PURE__ */ y(
          jg,
          {
            columnDefinition: t.columns.find((T) => T.id === C),
            allData: r,
            value: v.getValue(),
            onUpdated: (T) => i(x, C, T),
            clearRowsSelection: () => s([]),
            errorsText: R
          }
        ) }, v.id);
      })
    ] }, m.id)) })
  ] }) });
}
function Ug({ column: e }) {
  const { t } = Ae();
  return /* @__PURE__ */ y(
    "div",
    {
      className: "flex items-center",
      title: e.isReadOnly ? t("sheet.readOnly") : void 0,
      children: [
        e.isReadOnly && /* @__PURE__ */ y("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ y(ss, { className: "absolute top-0 left-0 h-5 w-5 text-gray-400" }),
          /* @__PURE__ */ y(ls, { className: "absolute top-0 left-0 h-5 w-5 text-gray-500" })
        ] }),
        e.label,
        " ",
        Zn(e) && "*"
      ]
    }
  );
}
function Wg({
  sheetDefinition: e,
  rowData: t,
  selectedRows: n,
  setSelectedRows: r,
  viewMode: o,
  setViewMode: i,
  searchPhrase: l,
  setSearchPhrase: s,
  errorColumnFilter: a,
  setErrorColumnFilter: u,
  removeRows: c,
  addEmptyRow: p,
  sheetValidationErrors: f,
  rowValidationSummary: d,
  resetState: g
}) {
  const { t: m } = Ae(), [v, b] = j(!1), [C, x] = j(!1), R = "pointer-events-none cursor-not-allowed opacity-50";
  function T(h) {
    const _ = e.columns.find(
      (F) => F.id === h
    ), E = hi(
      f.filter((F) => F.columnId === h).map((F) => F.rowIndex)
    ).length;
    return {
      label: `${(_ == null ? void 0 : _.label) || h} (${E})`,
      value: h
    };
  }
  const M = hi(
    f.map((h) => h.columnId)
  ).map((h) => T(h));
  a != null && M.find((h) => h.value === a) == null && M.push(T(a));
  const $ = [
    {
      value: "all",
      label: m("sheet.all") + ` (${d.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: m("sheet.valid") + ` (${d.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: m("sheet.invalid") + ` (${d.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function w() {
    c({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ y("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ y("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(fp, { activeButton: o, buttons: $ }) }),
      /* @__PURE__ */ y(
        cs,
        {
          clearable: !0,
          value: l,
          onChange: (h) => s(h),
          placeholder: m("sheet.search"),
          iconBuilder: (h) => /* @__PURE__ */ y($f, { ...h })
        }
      ),
      /* @__PURE__ */ y(
        It,
        {
          tooltipText: m(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ y(
            Mf,
            {
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : R}`,
              onClick: () => b(!0)
            }
          )
        }
      ),
      /* @__PURE__ */ y(It, { tooltipText: m("sheet.addRowsTooltip"), children: /* @__PURE__ */ y(Of, { className: "h-6 w-6 cursor-pointer", onClick: p }) }),
      /* @__PURE__ */ y(It, { tooltipText: m("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ y(
        pf,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : R}`,
          onClick: () => Mp(e, t)
        }
      ) }),
      /* @__PURE__ */ y(
        sn,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: m("sheet.filterByError"),
          classes: "min-w-48",
          options: M,
          value: a,
          onChange: (h) => u(h)
        }
      ),
      /* @__PURE__ */ y(
        Vr,
        {
          open: v,
          setOpen: b,
          onConfirm: w,
          title: m("sheet.removeConfirmationModalTitle"),
          confirmationText: m("sheet.removeConfirmationModalConfirmationText"),
          subTitle: m("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ y(It, { className: "ml-5", tooltipText: m("sheet.resetTooltip"), children: /* @__PURE__ */ y(
      ss,
      {
        className: "h-6 w-6 cursor-pointer",
        onClick: () => x(!0)
      }
    ) }),
    /* @__PURE__ */ y(
      Vr,
      {
        open: C,
        setOpen: x,
        onConfirm: g,
        title: m("sheet.resetConfirmationModalTitle"),
        confirmationText: m("sheet.resetConfirmationModalConfirmationText"),
        subTitle: m("sheet.resetConfirmationModalSubTitle"),
        variant: "danger"
      }
    )
  ] });
}
const qg = Xp();
function Kg({
  sheetDefinition: e,
  data: t,
  allData: n,
  sheetValidationErrors: r,
  setRowData: o,
  removeRows: i,
  addEmptyRow: l,
  resetState: s
}) {
  const [a, u] = j([]), [c, p] = j("all"), [f, d] = j(""), [g, m] = j(
    null
  );
  oe(() => {
    u([]), p("all");
  }, [e]);
  const v = Pp(
    t,
    n,
    c,
    r,
    g,
    e,
    f
  ), b = U(() => {
    const T = t.rows, M = T.filter(
      (w, h) => !r.some((_) => _.rowIndex === h)
    ), $ = T.filter(
      (w, h) => r.some((_) => _.rowIndex === h)
    );
    return {
      all: T.length,
      valid: M.length,
      errors: $.length
    };
  }, [t, r]), C = U(
    () => e.columns.map(
      (T) => qg.accessor(T.id, {
        header: () => /* @__PURE__ */ y(Ug, { column: T }),
        sortUndefined: "last",
        sortingFn: "auto"
      })
    ),
    [e]
  ), x = Bg({
    data: v,
    columns: C,
    getCoreRowModel: Ng(),
    getSortedRowModel: Lg()
  });
  function R(T, M, $) {
    const w = { ...t.rows[T] };
    w[M] = $, o({
      sheetId: e.id,
      value: w,
      rowIndex: T
    });
  }
  return /* @__PURE__ */ y("div", { children: [
    /* @__PURE__ */ y(
      Wg,
      {
        sheetDefinition: e,
        rowData: v,
        selectedRows: a,
        setSelectedRows: u,
        viewMode: c,
        setViewMode: p,
        searchPhrase: f,
        setSearchPhrase: d,
        errorColumnFilter: g,
        setErrorColumnFilter: m,
        removeRows: i,
        addEmptyRow: l,
        sheetValidationErrors: r,
        rowValidationSummary: b,
        resetState: s
      }
    ),
    /* @__PURE__ */ y(
      Gg,
      {
        table: x,
        sheetDefinition: e,
        visibleData: v,
        allData: n,
        sheetValidationErrors: r,
        onCellValueChanged: R,
        selectedRows: a,
        setSelectedRows: u
      }
    )
  ] });
}
function Yg({
  progress: e,
  pending: t
}) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, l] = j(!1);
  return oe(() => {
    if (e === 0) {
      const s = setTimeout(() => {
        l(!0);
      }, 3e3);
      return () => clearTimeout(s);
    }
  }, [e]), i ? /* @__PURE__ */ y("div", { className: "flex justify-center", children: /* @__PURE__ */ y(
    "div",
    {
      className: `border-csv-importer-success h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ y("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ y(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: 40,
        fill: "transparent",
        className: "text-gray-200",
        strokeWidth: "10",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ y(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: 40,
        fill: "transparent",
        strokeWidth: "10",
        strokeDasharray: r,
        strokeDashoffset: o,
        className: "stroke-csv-importer-success transition-[stroke-dashoffset] duration-500"
      }
    )
  ] });
}
function Xg() {
  return /* @__PURE__ */ y(yf, { className: "text-csv-importer-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Zg({ progress: e, pending: t, resetState: n }) {
  const { t: r } = Ae();
  return /* @__PURE__ */ y("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ y("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ y(Yg, { progress: e, pending: t }),
      t && /* @__PURE__ */ y("div", { children: [
        /* @__PURE__ */ y("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ y("b", { className: "text-lg", children: [
          e,
          "%"
        ] }) }),
        /* @__PURE__ */ y("h2", { className: "text-2xl", children: r("importer.loader.uploading") })
      ] }),
      !t && /* @__PURE__ */ y(Xg, {})
    ] }),
    !t && /* @__PURE__ */ y("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ y("h2", { className: "text-2xl", children: r("importer.loader.success") }),
      /* @__PURE__ */ y("div", { className: "h-5" }),
      /* @__PURE__ */ y(Ke, { variant: "secondary", onClick: n, children: r("sheet.reset") })
    ] })
  ] });
}
function Qg({ onRetry: e, onBackToPreview: t }) {
  const { t: n } = Ae();
  return /* @__PURE__ */ y("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ y("div", { className: "relative mx-auto h-24 w-24", children: /* @__PURE__ */ y(Cf, { className: "text-csv-importer-danger" }) }),
    /* @__PURE__ */ y("p", { className: "mb-8 text-2xl", children: n("importer.loader.failed") }),
    /* @__PURE__ */ y(Ke, { onClick: e, variant: "primary", children: /* @__PURE__ */ y("div", { className: "flex items-center", children: [
      /* @__PURE__ */ y(vf, { className: "mr-3 h-4 w-4" }),
      n("importer.loader.retry")
    ] }) }),
    /* @__PURE__ */ y("div", { className: "mt-3" }),
    /* @__PURE__ */ y(Ke, { onClick: t, variant: "tertiary", children: /* @__PURE__ */ y("div", { className: "flex items-center", children: [
      /* @__PURE__ */ y(ls, { className: "mr-3 h-4 w-4" }),
      n("importer.loader.backToPreview")
    ] }) })
  ] });
}
function Jg({
  progress: e,
  mode: t,
  onRetry: n,
  onBackToPreview: r,
  resetState: o
}) {
  const i = t === "failed", l = t === "submit";
  return i ? /* @__PURE__ */ y(Qg, { onRetry: n, onBackToPreview: r }) : /* @__PURE__ */ y(Zg, { progress: e, pending: l, resetState: o });
}
async function yi(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
class hn {
  constructor(t) {
    ke(this, "definition");
    this.definition = t;
  }
  transform(t) {
    const n = this.parse(t);
    return n || t;
  }
  parse(t) {
    throw new Error("Not Implemented");
  }
}
class em extends hn {
  constructor(n) {
    super(n);
    ke(this, "key");
    ke(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class tm extends hn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class nm extends hn {
  parse(t) {
    if (typeof t == "string" && ps(t, "-"))
      return t.split("-")[0];
  }
}
const bi = [
  ["Arizona", "AZ"],
  ["Alabama", "AL"],
  ["Alaska", "AK"],
  ["Arkansas", "AR"],
  ["California", "CA"],
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Delaware", "DE"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Hawaii", "HI"],
  ["Idaho", "ID"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Iowa", "IA"],
  ["Kansas", "KS"],
  ["Kentucky", "KY"],
  ["Louisiana", "LA"],
  ["Maine", "ME"],
  ["Maryland", "MD"],
  ["Massachusetts", "MA"],
  ["Michigan", "MI"],
  ["Minnesota", "MN"],
  ["Mississippi", "MS"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Nevada", "NV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["North Carolina", "NC"],
  ["North Dakota", "ND"],
  ["Ohio", "OH"],
  ["Oklahoma", "OK"],
  ["Oregon", "OR"],
  ["Pennsylvania", "PA"],
  ["Rhode Island", "RI"],
  ["South Carolina", "SC"],
  ["South Dakota", "SD"],
  ["Tennessee", "TN"],
  ["Texas", "TX"],
  ["Utah", "UT"],
  ["Vermont", "VT"],
  ["Virginia", "VA"],
  ["Washington", "WA"],
  ["West Virginia", "WV"],
  ["Wisconsin", "WI"],
  ["Wyoming", "WY"]
];
class rm extends hn {
  parse(t) {
    const n = bi.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && ps(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return bi[r][1];
    }
  }
}
class om extends hn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function im(e) {
  const t = {
    phone_number: tm,
    postal_code: nm,
    state_code: rm,
    strip: om,
    custom: em
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function lm(e, t) {
  const n = gs(
    e.columns,
    (r, o) => {
      o[r.id] = new sm(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          im(i)
        );
      });
    }
  );
  return e.columns.forEach((r) => {
    const o = r.id, i = n[o];
    t.rows.forEach((l) => {
      ms(l) && o in l && (l[o] = i.transform(l[o]));
    });
  }), t.rows;
}
function Ur(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = lm(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class sm {
  // Series of transformations
  constructor(t = []) {
    ke(this, "steps");
    this.steps = t;
  }
  push(t) {
    this.steps.push(t);
  }
  transform(t) {
    let n = t;
    return this.steps.forEach((r) => {
      n = r.transform(n);
    }), n;
  }
}
function $s(e) {
  return {
    sheetDefinitions: e,
    currentSheetId: e[0].id,
    mode: "upload",
    validationErrors: [],
    sheetData: e.map((t) => ({
      sheetId: t.id,
      rows: []
    })),
    importProgress: 0
  };
}
const am = (e, t) => {
  switch (t.type) {
    case "ENTER_DATA_MANUALLY": {
      const n = e.sheetDefinitions.map((r) => ({
        sheetId: r.id,
        rows: Array.from(
          { length: t.payload.amountOfEmptyRowsToAdd },
          () => ({})
        )
      }));
      return { ...e, mode: "preview", sheetData: n };
    }
    case "FILE_PARSED":
      return { ...e, parsedFile: t.payload.parsed, mode: "mapping" };
    case "UPLOAD":
      return { ...e, mode: "upload" };
    case "COLUMN_MAPPING_CHANGED":
      return {
        ...e,
        columnMappings: t.payload.mappings
      };
    case "DATA_MAPPED":
      return {
        ...e,
        sheetData: Ur(
          e.sheetDefinitions,
          t.payload.mappedData
        ),
        mode: "preview",
        validationErrors: pr(
          e.sheetDefinitions,
          t.payload.mappedData
        )
      };
    case "CELL_CHANGED": {
      const r = e.sheetData.map((o) => {
        if (o.sheetId === t.payload.sheetId) {
          const i = [...o.rows];
          return i[t.payload.rowIndex] = t.payload.value, { ...o, rows: i };
        } else
          return o;
      });
      return {
        ...e,
        sheetData: Ur(e.sheetDefinitions, r),
        validationErrors: pr(e.sheetDefinitions, r)
      };
    }
    case "REMOVE_ROWS": {
      const n = e.sheetData.map((r) => r.sheetId === t.payload.sheetId ? {
        ...r,
        rows: r.rows.filter(
          (o) => !t.payload.rows.includes(o)
        )
      } : r);
      return {
        ...e,
        sheetData: n,
        validationErrors: pr(e.sheetDefinitions, n)
      };
    }
    case "ADD_EMPTY_ROW": {
      const n = e.sheetData.map((r) => r.sheetId !== e.currentSheetId ? r : {
        ...r,
        rows: [...r.rows, {}]
      });
      return { ...e, sheetData: n };
    }
    case "SHEET_CHANGED":
      return { ...e, currentSheetId: t.payload.sheetId };
    case "SUBMIT":
      return { ...e, mode: "submit" };
    case "PROGRESS":
      return { ...e, importProgress: t.payload.progress };
    case "COMPLETED":
      return { ...e, mode: "completed" };
    case "FAILED":
      return { ...e, mode: "failed" };
    case "PREVIEW":
      return { ...e, mode: "preview" };
    case "MAPPING":
      return { ...e, mode: "mapping" };
    case "RESET":
      return $s(e.sheetDefinitions);
    default:
      return e;
  }
}, um = ({
  theme: e,
  children: t
}) => (oe(() => {
  e && document.documentElement.setAttribute("csv-importer-data-theme", e);
}, [e]), /* @__PURE__ */ y(ve, { children: t }));
function cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var dm = Sn.exports, _i;
function fm() {
  return _i || (_i = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(dm, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, l = r.IS_PAPA_WORKER || !1, s = {}, a = 0, u = {};
      function c(w) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(h) {
          var _ = T(h);
          _.chunkSize = parseInt(_.chunkSize), h.step || h.chunk || (_.chunkSize = null), this._handle = new m(_), (this._handle.streamer = this)._config = _;
        }).call(this, w), this.parseChunk = function(h, _) {
          var E = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < E) {
            let A = this._config.newline;
            A || (F = this._config.quoteChar || '"', A = this._handle.guessLineEndings(h, F)), h = [...h.split(A).slice(E)].join(A);
          }
          this.isFirstChunk && $(this._config.beforeFirstChunk) && (F = this._config.beforeFirstChunk(h)) !== void 0 && (h = F), this.isFirstChunk = !1, this._halted = !1;
          var E = this._partialLine + h, F = (this._partialLine = "", this._handle.parse(E, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (h = F.meta.cursor, E = (this._finished || (this._partialLine = E.substring(h - this._baseIndex), this._baseIndex = h), F && F.data && (this._rowCount += F.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), l) r.postMessage({ results: F, workerId: u.WORKER_ID, finished: E });
            else if ($(this._config.chunk) && !_) {
              if (this._config.chunk(F, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = F = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(F.data), this._completeResults.errors = this._completeResults.errors.concat(F.errors), this._completeResults.meta = F.meta), this._completed || !E || !$(this._config.complete) || F && F.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), E || F && F.meta.paused || this._nextChunk(), F;
          }
          this._halted = !0;
        }, this._sendError = function(h) {
          $(this._config.error) ? this._config.error(h) : l && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: h, finished: !1 });
        };
      }
      function p(w) {
        var h;
        (w = w || {}).chunkSize || (w.chunkSize = u.RemoteChunkSize), c.call(this, w), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(_) {
          this._input = _, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (h = new XMLHttpRequest(), this._config.withCredentials && (h.withCredentials = this._config.withCredentials), i || (h.onload = M(this._chunkLoaded, this), h.onerror = M(this._chunkError, this)), h.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var _, E = this._config.downloadRequestHeaders;
              for (_ in E) h.setRequestHeader(_, E[_]);
            }
            var F;
            this._config.chunkSize && (F = this._start + this._config.chunkSize - 1, h.setRequestHeader("Range", "bytes=" + this._start + "-" + F));
            try {
              h.send(this._config.downloadRequestBody);
            } catch (A) {
              this._chunkError(A.message);
            }
            i && h.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          h.readyState === 4 && (h.status < 200 || 400 <= h.status ? this._chunkError() : (this._start += this._config.chunkSize || h.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((_) => (_ = _.getResponseHeader("Content-Range")) !== null ? parseInt(_.substring(_.lastIndexOf("/") + 1)) : -1)(h), this.parseChunk(h.responseText)));
        }, this._chunkError = function(_) {
          _ = h.statusText || _, this._sendError(new Error(_));
        };
      }
      function f(w) {
        (w = w || {}).chunkSize || (w.chunkSize = u.LocalChunkSize), c.call(this, w);
        var h, _, E = typeof FileReader < "u";
        this.stream = function(F) {
          this._input = F, _ = F.slice || F.webkitSlice || F.mozSlice, E ? ((h = new FileReader()).onload = M(this._chunkLoaded, this), h.onerror = M(this._chunkError, this)) : h = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var F = this._input, A = (this._config.chunkSize && (A = Math.min(this._start + this._config.chunkSize, this._input.size), F = _.call(F, this._start, A)), h.readAsText(F, this._config.encoding));
          E || this._chunkLoaded({ target: { result: A } });
        }, this._chunkLoaded = function(F) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(F.target.result);
        }, this._chunkError = function() {
          this._sendError(h.error);
        };
      }
      function d(w) {
        var h;
        c.call(this, w = w || {}), this.stream = function(_) {
          return h = _, this._nextChunk();
        }, this._nextChunk = function() {
          var _, E;
          if (!this._finished) return _ = this._config.chunkSize, h = _ ? (E = h.substring(0, _), h.substring(_)) : (E = h, ""), this._finished = !h, this.parseChunk(E);
        };
      }
      function g(w) {
        c.call(this, w = w || {});
        var h = [], _ = !0, E = !1;
        this.pause = function() {
          c.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          c.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(F) {
          this._input = F, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          E && h.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), h.length ? this.parseChunk(h.shift()) : _ = !0;
        }, this._streamData = M(function(F) {
          try {
            h.push(typeof F == "string" ? F : F.toString(this._config.encoding)), _ && (_ = !1, this._checkIsFinished(), this.parseChunk(h.shift()));
          } catch (A) {
            this._streamError(A);
          }
        }, this), this._streamError = M(function(F) {
          this._streamCleanUp(), this._sendError(F);
        }, this), this._streamEnd = M(function() {
          this._streamCleanUp(), E = !0, this._streamData("");
        }, this), this._streamCleanUp = M(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function m(w) {
        var h, _, E, F, A = Math.pow(2, 53), P = -A, W = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, K = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, O = this, k = 0, I = 0, te = !1, L = !1, B = [], S = { data: [], errors: [], meta: {} };
        function ie(G) {
          return w.skipEmptyLines === "greedy" ? G.join("").trim() === "" : G.length === 1 && G[0].length === 0;
        }
        function ee() {
          if (S && E && (re("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), E = !1), w.skipEmptyLines && (S.data = S.data.filter(function(Z) {
            return !ie(Z);
          })), se()) {
            let Z = function(fe, we) {
              $(w.transformHeader) && (fe = w.transformHeader(fe, we)), B.push(fe);
            };
            if (S) if (Array.isArray(S.data[0])) {
              for (var G = 0; se() && G < S.data.length; G++) S.data[G].forEach(Z);
              S.data.splice(0, 1);
            } else S.data.forEach(Z);
          }
          function J(Z, fe) {
            for (var we = w.header ? {} : [], D = 0; D < Z.length; D++) {
              var q = D, Q = Z[D], Q = ((Se, ne) => ((me) => (w.dynamicTypingFunction && w.dynamicTyping[me] === void 0 && (w.dynamicTyping[me] = w.dynamicTypingFunction(me)), (w.dynamicTyping[me] || w.dynamicTyping) === !0))(Se) ? ne === "true" || ne === "TRUE" || ne !== "false" && ne !== "FALSE" && (((me) => {
                if (W.test(me) && (me = parseFloat(me), P < me && me < A))
                  return 1;
              })(ne) ? parseFloat(ne) : K.test(ne) ? new Date(ne) : ne === "" ? null : ne) : ne)(q = w.header ? D >= B.length ? "__parsed_extra" : B[D] : q, Q = w.transform ? w.transform(Q, q) : Q);
              q === "__parsed_extra" ? (we[q] = we[q] || [], we[q].push(Q)) : we[q] = Q;
            }
            return w.header && (D > B.length ? re("FieldMismatch", "TooManyFields", "Too many fields: expected " + B.length + " fields but parsed " + D, I + fe) : D < B.length && re("FieldMismatch", "TooFewFields", "Too few fields: expected " + B.length + " fields but parsed " + D, I + fe)), we;
          }
          var de;
          S && (w.header || w.dynamicTyping || w.transform) && (de = 1, !S.data.length || Array.isArray(S.data[0]) ? (S.data = S.data.map(J), de = S.data.length) : S.data = J(S.data, 0), w.header && S.meta && (S.meta.fields = B), I += de);
        }
        function se() {
          return w.header && B.length === 0;
        }
        function re(G, J, de, Z) {
          G = { type: G, code: J, message: de }, Z !== void 0 && (G.row = Z), S.errors.push(G);
        }
        $(w.step) && (F = w.step, w.step = function(G) {
          S = G, se() ? ee() : (ee(), S.data.length !== 0 && (k += G.data.length, w.preview && k > w.preview ? _.abort() : (S.data = S.data[0], F(S, O))));
        }), this.parse = function(G, J, de) {
          var Z = w.quoteChar || '"', Z = (w.newline || (w.newline = this.guessLineEndings(G, Z)), E = !1, w.delimiter ? $(w.delimiter) && (w.delimiter = w.delimiter(G), S.meta.delimiter = w.delimiter) : ((Z = ((fe, we, D, q, Q) => {
            var Se, ne, me, it;
            Q = Q || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var $t = 0; $t < Q.length; $t++) {
              for (var je, Gt = Q[$t], Ee = 0, Ge = 0, _e = 0, Me = (me = void 0, new b({ comments: q, delimiter: Gt, newline: we, preview: 10 }).parse(fe)), Je = 0; Je < Me.data.length; Je++) D && ie(Me.data[Je]) ? _e++ : (je = Me.data[Je].length, Ge += je, me === void 0 ? me = je : 0 < je && (Ee += Math.abs(je - me), me = je));
              0 < Me.data.length && (Ge /= Me.data.length - _e), (ne === void 0 || Ee <= ne) && (it === void 0 || it < Ge) && 1.99 < Ge && (ne = Ee, Se = Gt, it = Ge);
            }
            return { successful: !!(w.delimiter = Se), bestDelimiter: Se };
          })(G, w.newline, w.skipEmptyLines, w.comments, w.delimitersToGuess)).successful ? w.delimiter = Z.bestDelimiter : (E = !0, w.delimiter = u.DefaultDelimiter), S.meta.delimiter = w.delimiter), T(w));
          return w.preview && w.header && Z.preview++, h = G, _ = new b(Z), S = _.parse(h, J, de), ee(), te ? { meta: { paused: !0 } } : S || { meta: { paused: !1 } };
        }, this.paused = function() {
          return te;
        }, this.pause = function() {
          te = !0, _.abort(), h = $(w.chunk) ? "" : h.substring(_.getCharIndex());
        }, this.resume = function() {
          O.streamer._halted ? (te = !1, O.streamer.parseChunk(h, !0)) : setTimeout(O.resume, 3);
        }, this.aborted = function() {
          return L;
        }, this.abort = function() {
          L = !0, _.abort(), S.meta.aborted = !0, $(w.complete) && w.complete(S), h = "";
        }, this.guessLineEndings = function(fe, Z) {
          fe = fe.substring(0, 1048576);
          var Z = new RegExp(v(Z) + "([^]*?)" + v(Z), "gm"), de = (fe = fe.replace(Z, "")).split("\r"), Z = fe.split(`
`), fe = 1 < Z.length && Z[0].length < de[0].length;
          if (de.length === 1 || fe) return `
`;
          for (var we = 0, D = 0; D < de.length; D++) de[D][0] === `
` && we++;
          return we >= de.length / 2 ? `\r
` : "\r";
        };
      }
      function v(w) {
        return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function b(w) {
        var h = (w = w || {}).delimiter, _ = w.newline, E = w.comments, F = w.step, A = w.preview, P = w.fastMode, W = null, K = !1, O = w.quoteChar == null ? '"' : w.quoteChar, k = O;
        if (w.escapeChar !== void 0 && (k = w.escapeChar), (typeof h != "string" || -1 < u.BAD_DELIMITERS.indexOf(h)) && (h = ","), E === h) throw new Error("Comment character same as delimiter");
        E === !0 ? E = "#" : (typeof E != "string" || -1 < u.BAD_DELIMITERS.indexOf(E)) && (E = !1), _ !== `
` && _ !== "\r" && _ !== `\r
` && (_ = `
`);
        var I = 0, te = !1;
        this.parse = function(L, B, S) {
          if (typeof L != "string") throw new Error("Input must be a string");
          var ie = L.length, ee = h.length, se = _.length, re = E.length, G = $(F), J = [], de = [], Z = [], fe = I = 0;
          if (!L) return Ee();
          if (P || P !== !1 && L.indexOf(O) === -1) {
            for (var we = L.split(_), D = 0; D < we.length; D++) {
              if (Z = we[D], I += Z.length, D !== we.length - 1) I += _.length;
              else if (S) return Ee();
              if (!E || Z.substring(0, re) !== E) {
                if (G) {
                  if (J = [], it(Z.split(h)), Ge(), te) return Ee();
                } else it(Z.split(h));
                if (A && A <= D) return J = J.slice(0, A), Ee(!0);
              }
            }
            return Ee();
          }
          for (var q = L.indexOf(h, I), Q = L.indexOf(_, I), Se = new RegExp(v(k) + v(O), "g"), ne = L.indexOf(O, I); ; ) if (L[I] === O) for (ne = I, I++; ; ) {
            if ((ne = L.indexOf(O, ne + 1)) === -1) return S || de.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: J.length, index: I }), je();
            if (ne === ie - 1) return je(L.substring(I, ne).replace(Se, O));
            if (O === k && L[ne + 1] === k) ne++;
            else if (O === k || ne === 0 || L[ne - 1] !== k) {
              q !== -1 && q < ne + 1 && (q = L.indexOf(h, ne + 1));
              var me = $t((Q = Q !== -1 && Q < ne + 1 ? L.indexOf(_, ne + 1) : Q) === -1 ? q : Math.min(q, Q));
              if (L.substr(ne + 1 + me, ee) === h) {
                Z.push(L.substring(I, ne).replace(Se, O)), L[I = ne + 1 + me + ee] !== O && (ne = L.indexOf(O, I)), q = L.indexOf(h, I), Q = L.indexOf(_, I);
                break;
              }
              if (me = $t(Q), L.substring(ne + 1 + me, ne + 1 + me + se) === _) {
                if (Z.push(L.substring(I, ne).replace(Se, O)), Gt(ne + 1 + me + se), q = L.indexOf(h, I), ne = L.indexOf(O, I), G && (Ge(), te)) return Ee();
                if (A && J.length >= A) return Ee(!0);
                break;
              }
              de.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: J.length, index: I }), ne++;
            }
          }
          else if (E && Z.length === 0 && L.substring(I, I + re) === E) {
            if (Q === -1) return Ee();
            I = Q + se, Q = L.indexOf(_, I), q = L.indexOf(h, I);
          } else if (q !== -1 && (q < Q || Q === -1)) Z.push(L.substring(I, q)), I = q + ee, q = L.indexOf(h, I);
          else {
            if (Q === -1) break;
            if (Z.push(L.substring(I, Q)), Gt(Q + se), G && (Ge(), te)) return Ee();
            if (A && J.length >= A) return Ee(!0);
          }
          return je();
          function it(_e) {
            J.push(_e), fe = I;
          }
          function $t(_e) {
            var Me = 0;
            return Me = _e !== -1 && (_e = L.substring(ne + 1, _e)) && _e.trim() === "" ? _e.length : Me;
          }
          function je(_e) {
            return S || (_e === void 0 && (_e = L.substring(I)), Z.push(_e), I = ie, it(Z), G && Ge()), Ee();
          }
          function Gt(_e) {
            I = _e, it(Z), Z = [], Q = L.indexOf(_, I);
          }
          function Ee(_e) {
            if (w.header && !B && J.length && !K) {
              var Me = J[0], Je = {}, Jn = new Set(Me);
              let yo = !1;
              for (let Tt = 0; Tt < Me.length; Tt++) {
                let Ue = Me[Tt];
                if (Je[Ue = $(w.transformHeader) ? w.transformHeader(Ue, Tt) : Ue]) {
                  let Ut, bo = Je[Ue];
                  for (; Ut = Ue + "_" + bo, bo++, Jn.has(Ut); ) ;
                  Jn.add(Ut), Me[Tt] = Ut, Je[Ue]++, yo = !0, (W = W === null ? {} : W)[Ut] = Ue;
                } else Je[Ue] = 1, Me[Tt] = Ue;
                Jn.add(Ue);
              }
              yo && console.warn("Duplicate headers found and renamed."), K = !0;
            }
            return { data: J, errors: de, meta: { delimiter: h, linebreak: _, aborted: te, truncated: !!_e, cursor: fe + (B || 0), renamedHeaders: W } };
          }
          function Ge() {
            F(Ee()), J = [], de = [];
          }
        }, this.abort = function() {
          te = !0;
        }, this.getCharIndex = function() {
          return I;
        };
      }
      function C(w) {
        var h = w.data, _ = s[h.workerId], E = !1;
        if (h.error) _.userError(h.error, h.file);
        else if (h.results && h.results.data) {
          var F = { abort: function() {
            E = !0, x(h.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: R, resume: R };
          if ($(_.userStep)) {
            for (var A = 0; A < h.results.data.length && (_.userStep({ data: h.results.data[A], errors: h.results.errors, meta: h.results.meta }, F), !E); A++) ;
            delete h.results;
          } else $(_.userChunk) && (_.userChunk(h.results, F, h.file), delete h.results);
        }
        h.finished && !E && x(h.workerId, h.results);
      }
      function x(w, h) {
        var _ = s[w];
        $(_.userComplete) && _.userComplete(h), _.terminate(), delete s[w];
      }
      function R() {
        throw new Error("Not implemented.");
      }
      function T(w) {
        if (typeof w != "object" || w === null) return w;
        var h, _ = Array.isArray(w) ? [] : {};
        for (h in w) _[h] = T(w[h]);
        return _;
      }
      function M(w, h) {
        return function() {
          w.apply(h, arguments);
        };
      }
      function $(w) {
        return typeof w == "function";
      }
      return u.parse = function(w, h) {
        var _ = (h = h || {}).dynamicTyping || !1;
        if ($(_) && (h.dynamicTypingFunction = _, _ = {}), h.dynamicTyping = _, h.transform = !!$(h.transform) && h.transform, !h.worker || !u.WORKERS_SUPPORTED) return _ = null, u.NODE_STREAM_INPUT, typeof w == "string" ? (w = ((E) => E.charCodeAt(0) !== 65279 ? E : E.slice(1))(w), _ = new (h.download ? p : d)(h)) : w.readable === !0 && $(w.read) && $(w.on) ? _ = new g(h) : (r.File && w instanceof File || w instanceof Object) && (_ = new f(h)), _.stream(w);
        (_ = (() => {
          var E;
          return !!u.WORKERS_SUPPORTED && (E = (() => {
            var F = r.URL || r.webkitURL || null, A = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", A, ")();"], { type: "text/javascript" })));
          })(), (E = new r.Worker(E)).onmessage = C, E.id = a++, s[E.id] = E);
        })()).userStep = h.step, _.userChunk = h.chunk, _.userComplete = h.complete, _.userError = h.error, h.step = $(h.step), h.chunk = $(h.chunk), h.complete = $(h.complete), h.error = $(h.error), delete h.worker, _.postMessage({ input: w, config: h, workerId: _.id });
      }, u.unparse = function(w, h) {
        var _ = !1, E = !0, F = ",", A = `\r
`, P = '"', W = P + P, K = !1, O = null, k = !1, I = ((() => {
          if (typeof h == "object") {
            if (typeof h.delimiter != "string" || u.BAD_DELIMITERS.filter(function(B) {
              return h.delimiter.indexOf(B) !== -1;
            }).length || (F = h.delimiter), typeof h.quotes != "boolean" && typeof h.quotes != "function" && !Array.isArray(h.quotes) || (_ = h.quotes), typeof h.skipEmptyLines != "boolean" && typeof h.skipEmptyLines != "string" || (K = h.skipEmptyLines), typeof h.newline == "string" && (A = h.newline), typeof h.quoteChar == "string" && (P = h.quoteChar), typeof h.header == "boolean" && (E = h.header), Array.isArray(h.columns)) {
              if (h.columns.length === 0) throw new Error("Option columns is empty");
              O = h.columns;
            }
            h.escapeChar !== void 0 && (W = h.escapeChar + P), h.escapeFormulae instanceof RegExp ? k = h.escapeFormulae : typeof h.escapeFormulae == "boolean" && h.escapeFormulae && (k = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(v(P), "g"));
        if (typeof w == "string" && (w = JSON.parse(w)), Array.isArray(w)) {
          if (!w.length || Array.isArray(w[0])) return te(null, w, K);
          if (typeof w[0] == "object") return te(O || Object.keys(w[0]), w, K);
        } else if (typeof w == "object") return typeof w.data == "string" && (w.data = JSON.parse(w.data)), Array.isArray(w.data) && (w.fields || (w.fields = w.meta && w.meta.fields || O), w.fields || (w.fields = Array.isArray(w.data[0]) ? w.fields : typeof w.data[0] == "object" ? Object.keys(w.data[0]) : []), Array.isArray(w.data[0]) || typeof w.data[0] == "object" || (w.data = [w.data])), te(w.fields || [], w.data || [], K);
        throw new Error("Unable to serialize unrecognized input");
        function te(B, S, ie) {
          var ee = "", se = (typeof B == "string" && (B = JSON.parse(B)), typeof S == "string" && (S = JSON.parse(S)), Array.isArray(B) && 0 < B.length), re = !Array.isArray(S[0]);
          if (se && E) {
            for (var G = 0; G < B.length; G++) 0 < G && (ee += F), ee += L(B[G], G);
            0 < S.length && (ee += A);
          }
          for (var J = 0; J < S.length; J++) {
            var de = (se ? B : S[J]).length, Z = !1, fe = se ? Object.keys(S[J]).length === 0 : S[J].length === 0;
            if (ie && !se && (Z = ie === "greedy" ? S[J].join("").trim() === "" : S[J].length === 1 && S[J][0].length === 0), ie === "greedy" && se) {
              for (var we = [], D = 0; D < de; D++) {
                var q = re ? B[D] : D;
                we.push(S[J][q]);
              }
              Z = we.join("").trim() === "";
            }
            if (!Z) {
              for (var Q = 0; Q < de; Q++) {
                0 < Q && !fe && (ee += F);
                var Se = se && re ? B[Q] : Q;
                ee += L(S[J][Se], Q);
              }
              J < S.length - 1 && (!ie || 0 < de && !fe) && (ee += A);
            }
          }
          return ee;
        }
        function L(B, S) {
          var ie, ee;
          return B == null ? "" : B.constructor === Date ? JSON.stringify(B).slice(1, 25) : (ee = !1, k && typeof B == "string" && k.test(B) && (B = "'" + B, ee = !0), ie = B.toString().replace(I, W), (ee = ee || _ === !0 || typeof _ == "function" && _(B, S) || Array.isArray(_) && _[S] || ((se, re) => {
            for (var G = 0; G < re.length; G++) if (-1 < se.indexOf(re[G])) return !0;
            return !1;
          })(ie, u.BAD_DELIMITERS) || -1 < ie.indexOf(F) || ie.charAt(0) === " " || ie.charAt(ie.length - 1) === " ") ? P + ie + P : ie);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = b, u.ParserHandle = m, u.NetworkStreamer = p, u.FileStreamer = f, u.StringStreamer = d, u.ReadableStreamStreamer = g, r.jQuery && ((o = r.jQuery).fn.parse = function(w) {
        var h = w.config || {}, _ = [];
        return this.each(function(A) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var P = 0; P < this.files.length; P++) _.push({ file: this.files[P], inputElem: this, instanceConfig: o.extend({}, h) });
        }), E(), this;
        function E() {
          if (_.length === 0) $(w.complete) && w.complete();
          else {
            var A, P, W, K, O = _[0];
            if ($(w.before)) {
              var k = w.before(O.file, O.inputElem);
              if (typeof k == "object") {
                if (k.action === "abort") return A = "AbortError", P = O.file, W = O.inputElem, K = k.reason, void ($(w.error) && w.error({ name: A }, P, W, K));
                if (k.action === "skip") return void F();
                typeof k.config == "object" && (O.instanceConfig = o.extend(O.instanceConfig, k.config));
              } else if (k === "skip") return void F();
            }
            var I = O.instanceConfig.complete;
            O.instanceConfig.complete = function(te) {
              $(I) && I(te, O.file, O.inputElem), F();
            }, u.parse(O.file, O.instanceConfig);
          }
        }
        function F() {
          _.splice(0, 1), E();
        }
      }), l && (r.onmessage = function(w) {
        w = w.data, u.WORKER_ID === void 0 && w && (u.WORKER_ID = w.workerId), typeof w.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(w.input, w.config), finished: !0 }) : (r.File && w.input instanceof File || w.input instanceof Object) && (w = u.parse(w.input, w.config)) && r.postMessage({ workerId: u.WORKER_ID, results: w, finished: !0 });
      }), (p.prototype = Object.create(c.prototype)).constructor = p, (f.prototype = Object.create(c.prototype)).constructor = f, (d.prototype = Object.create(d.prototype)).constructor = d, (g.prototype = Object.create(c.prototype)).constructor = g, u;
    });
  }(Sn)), Sn.exports;
}
var pm = fm();
const gm = /* @__PURE__ */ cm(pm);
function mm({
  file: e,
  onCompleted: t
}) {
  gm.parse(e, {
    skipEmptyLines: !0,
    header: !0,
    complete: t
  });
}
function hm(e, t) {
  return t.map((n) => {
    const r = e.find(
      (i) => i.id === n.sheetId
    );
    if (r == null)
      return n;
    const o = n.rows.map((i, l) => {
      const s = { ...i };
      return r.columns.filter((a) => a.type === "reference").forEach((a) => {
        const u = t.find(
          (c) => c.sheetId === a.typeArguments.sheetId
        );
        if (u != null) {
          const p = u.rows.map(
            (f) => f[a.typeArguments.sheetColumnId]
          )[l];
          s[a.id] = p;
        }
      }), s;
    });
    return {
      ...n,
      rows: o
    };
  });
}
function vm(e, t, n) {
  const r = n.data, o = e.map((i) => {
    const l = [], s = t.filter(
      (a) => a.sheetId === i.id
    );
    return r.map((a) => {
      const u = {};
      i.columns.forEach((c) => {
        const p = s.find(
          (f) => f.sheetColumnId === c.id
        );
        p != null && (u[p.sheetColumnId] = a[p.csvColumnName]);
      }), l.push(u);
    }), {
      sheetId: i.id,
      rows: l
    };
  });
  return hm(e, o);
}
function wm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ V("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ V("title", {
    id: t
  }, e) : null, /* @__PURE__ */ V("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const ym = /* @__PURE__ */ ge(wm);
function bm({
  sheetDefinitions: e,
  activeSheetId: t,
  onSheetChange: n,
  validationErrors: r
}) {
  return /* @__PURE__ */ y(
    sp,
    {
      tabs: e.map((o) => ({
        label: o.label,
        value: o.id,
        icon: r.some((i) => i.sheetId === o.id) ? /* @__PURE__ */ y(ym, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: t,
      onTabChange: n
    }
  );
}
function _m({ onBackToMapping: e }) {
  const { t } = Ae(), [n, r] = j(!1);
  return /* @__PURE__ */ y(ve, { children: [
    /* @__PURE__ */ y(
      Ke,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ y(
      Vr,
      {
        variant: "danger",
        onConfirm: e,
        open: n,
        setOpen: r,
        title: t("importer.backToMappingConfirmation.title"),
        subTitle: t("importer.backToMappingConfirmation.subTitle"),
        confirmationText: t(
          "importer.backToMappingConfirmation.confirmationText"
        ),
        cancelText: t("importer.backToMappingConfirmation.cancelText")
      }
    )
  ] });
}
function xm({
  theme: e,
  onComplete: t,
  allowManualDataEntry: n,
  sheets: r,
  onDataColumnsMapped: o,
  preventUploadOnValidationErrors: i
}) {
  const { t: l } = Ae(), s = H(!0), a = H(null), [
    {
      mode: u,
      currentSheetId: c,
      sheetData: p,
      columnMappings: f,
      parsedFile: d,
      validationErrors: g,
      importProgress: m
    },
    v
  ] = ot(am, $s(r));
  oe(() => {
    var O;
    if (s.current) {
      s.current = !1;
      return;
    }
    (O = a.current) == null || O.scrollIntoView({ behavior: "smooth" });
  }, [u]);
  const b = p.find(
    (O) => O.sheetId === c
  ), C = r.find(
    (O) => O.id === c
  ), R = (typeof i == "function" ? (i == null ? void 0 : i(g)) ?? !1 : i ?? !1) && g.length > 0;
  function T(O) {
    mm({
      file: O,
      onCompleted: (k) => {
        v({ type: "FILE_PARSED", payload: { parsed: k } }), v({
          type: "COLUMN_MAPPING_CHANGED",
          payload: {
            mappings: Dp(
              r,
              k.meta.fields
              // TODO THIS BRANCH: Check why it can be undefined
            )
          }
        });
      }
    });
  }
  function M() {
    v({
      type: "ENTER_DATA_MANUALLY",
      payload: {
        amountOfEmptyRowsToAdd: mp
      }
    });
  }
  function $(O) {
    v({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: O }
    });
  }
  async function w() {
    const O = vm(r, f ?? [], d), k = o != null ? await o(O) : O;
    v({ type: "DATA_MAPPED", payload: { mappedData: k } });
  }
  function h(O) {
    v({ type: "CELL_CHANGED", payload: O });
  }
  function _(O) {
    v({ type: "REMOVE_ROWS", payload: O });
  }
  function E() {
    v({ type: "ADD_EMPTY_ROW" });
  }
  function F() {
    v({ type: "RESET" });
  }
  async function A() {
    v({ type: "PROGRESS", payload: { progress: 0 } }), v({ type: "SUBMIT" });
    try {
      const O = Ur(
        r,
        p.map((k) => ({ ...k, rows: Op(k) }))
      );
      await t(O, (k) => {
        v({ type: "PROGRESS", payload: { progress: k } });
      });
    } catch {
      v({ type: "FAILED" });
      return;
    }
    await yi(400), v({ type: "PROGRESS", payload: { progress: 100 } }), await yi(200), v({ type: "COMPLETED" });
  }
  function P() {
    v({ type: "PREVIEW" });
  }
  function W() {
    v({ type: "UPLOAD" });
  }
  function K() {
    v({ type: "MAPPING" });
  }
  return /* @__PURE__ */ y(um, { theme: e, children: /* @__PURE__ */ y(Zf, { ref: a, children: [
    u === "upload" && /* @__PURE__ */ y("div", { className: "mt-5", children: [
      /* @__PURE__ */ y(vp, { setFile: T }),
      n && /* @__PURE__ */ y("div", { className: "mt-10 mb-2.5", children: /* @__PURE__ */ y(
        "p",
        {
          onClick: M,
          className: "text-csv-importer-primary hover:text-csv-importer-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none",
          children: l("importer.uploader.enterManually")
        }
      ) })
    ] }),
    u === "mapping" && /* @__PURE__ */ y(
      Yp,
      {
        parsed: d,
        sheetDefinitions: r,
        currentMapping: f ?? [],
        onMappingsChanged: $,
        onMappingsSet: w,
        onBack: W
      }
    ),
    u === "preview" && /* @__PURE__ */ y(ve, { children: [
      /* @__PURE__ */ y(
        bm,
        {
          activeSheetId: c,
          sheetDefinitions: r,
          onSheetChange: (O) => v({ type: "SHEET_CHANGED", payload: { sheetId: O } }),
          validationErrors: g
        }
      ),
      /* @__PURE__ */ y(
        Kg,
        {
          data: b,
          allData: p,
          sheetDefinition: C,
          sheetValidationErrors: g.filter(
            (O) => O.sheetId === (C == null ? void 0 : C.id)
          ),
          setRowData: h,
          removeRows: _,
          addEmptyRow: E,
          resetState: F
        }
      ),
      b.rows.length > 0 && /* @__PURE__ */ y("div", { className: "my-5 flex justify-between", children: [
        /* @__PURE__ */ y("div", { children: f != null && /* @__PURE__ */ y(_m, { onBackToMapping: K }) }),
        /* @__PURE__ */ y(
          It,
          {
            tooltipText: l("importer.uploadBlocked"),
            hidden: !R,
            children: /* @__PURE__ */ y(Ke, { onClick: A, disabled: R, children: l("importer.upload") })
          }
        )
      ] })
    ] }),
    (u === "submit" || u === "failed" || u === "completed") && /* @__PURE__ */ y(
      Jg,
      {
        mode: u,
        progress: m,
        onRetry: A,
        onBackToPreview: P,
        resetState: F
      }
    )
  ] }) });
}
function $m(e) {
  return /* @__PURE__ */ y(Xf, { selectedLocale: e.locale, children: /* @__PURE__ */ y(xm, { ...e }) });
}
export {
  $m as default
};
