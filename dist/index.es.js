var Ts = Object.defineProperty;
var Is = (e, t, n) => t in e ? Ts(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ae = (e, t, n) => Is(e, typeof t != "symbol" ? t + "" : t, n);
import { options as Ce, Component as wt, createElement as H, Fragment as ve, toChildArray as ut, createRef as Pn, createContext as pe, cloneElement as Fs, render as Sn, hydrate as Os } from "preact";
var Ms = 0;
function y(e, t, n, r, o, i) {
  t || (t = {});
  var l, s, a = t;
  if ("ref" in a) for (s in a = {}, t) s == "ref" ? l = t[s] : a[s] = t[s];
  var u = { type: e, props: a, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ms, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) a[s] === void 0 && (a[s] = l[s]);
  return Ce.vnode && Ce.vnode(u), u;
}
var rt, ce, Jn, bo, Pt = 0, xi = [], he = Ce, _o = he.__b, xo = he.__r, Co = he.diffed, So = he.__c, Eo = he.unmount, Ro = he.__;
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
  !he.__s && qr(n.__H, t) && (n.__ = e, n.i = t, ce.__H.__h.push(n));
}
function Ze(e, t) {
  var n = Ct(rt++, 4);
  !he.__s && qr(n.__H, t) && (n.__ = e, n.i = t, ce.__h.push(n));
}
function V(e) {
  return Pt = 5, W(function() {
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
function W(e, t) {
  var n = Ct(rt++, 7);
  return qr(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function le(e, t) {
  return Pt = 8, W(function() {
    return e;
  }, t);
}
function ue(e) {
  var t = ce.context[e.__c], n = Ct(rt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ce)), t.props.value) : e.__;
}
function Gr(e, t) {
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
function He() {
  var e = Ct(rt++, 11);
  if (!e.__) {
    for (var t = ce.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function ks() {
  for (var e; e = xi.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(_n), e.__H.__h.forEach(br), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], he.__e(t, e.__v);
  }
}
he.__b = function(e) {
  ce = null, _o && _o(e);
}, he.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ro && Ro(e, t);
}, he.__r = function(e) {
  xo && xo(e), rt = 0;
  var t = (ce = e.__c).__H;
  t && (Jn === ce ? (t.__h = [], ce.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(_n), t.__h.forEach(br), t.__h = [], rt = 0)), Jn = ce;
}, he.diffed = function(e) {
  Co && Co(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (xi.push(t) !== 1 && bo === he.requestAnimationFrame || ((bo = he.requestAnimationFrame) || As)(ks)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), Jn = ce = null;
}, he.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(_n), n.__h = n.__h.filter(function(r) {
        return !r.__ || br(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], he.__e(r, n.__v);
    }
  }), So && So(e, t);
}, he.unmount = function(e) {
  Eo && Eo(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      _n(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && he.__e(t, n.__v));
};
var $o = typeof requestAnimationFrame == "function";
function As(e) {
  var t, n = function() {
    clearTimeout(r), $o && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  $o && (t = requestAnimationFrame(n));
}
function _n(e) {
  var t = ce, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ce = t;
}
function br(e) {
  var t = ce;
  e.__c = e.__(), ce = t;
}
function qr(e, t) {
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
function _r(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function kn(e, t) {
  var n = t(), r = j({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ze(function() {
    o.__ = n, o.u = t, er(o) && i({ t: o });
  }, [e, n, t]), oe(function() {
    return er(o) && i({ t: o }), e(function() {
      er(o) && i({ t: o });
    });
  }, [e]), n;
}
function er(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Kr(e) {
  e();
}
function Yr(e) {
  return e;
}
function Xr() {
  return [!1, Kr];
}
var Zr = Ze;
function En(e, t) {
  this.props = e, this.context = t;
}
function Ei(e, t) {
  function n(o) {
    var i = this.props.ref, l = i == o.ref;
    return !l && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !l : _r(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, H(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(En.prototype = new wt()).isPureReactComponent = !0, En.prototype.shouldComponentUpdate = function(e, t) {
  return _r(this.props, e) || _r(this.state, t);
};
var To = Ce.__b;
Ce.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), To && To(e);
};
var Ls = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ge(e) {
  function t(n) {
    var r = Si({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Ls, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Io = function(e, t) {
  return e == null ? null : ut(ut(e).map(t));
}, Ri = { map: Io, forEach: Io, count: function(e) {
  return e ? ut(e).length : 0;
}, only: function(e) {
  var t = ut(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ut }, Ns = Ce.__e;
Ce.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Ns(e, t, n, r);
};
var Fo = Ce.unmount;
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
function Ii(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Fi(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(l) {
      n = l.default || l;
    }, function(l) {
      r = l;
    }), r) throw r;
    if (!n) throw t;
    return H(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ft() {
  this.i = null, this.l = null;
}
Ce.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Fo && Fo(e);
}, (Yt.prototype = new wt()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Ii(r.__v), i = !1, l = function() {
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
  var o = t.__a && H(ve, null, e.fallback);
  return o && (o.__u &= -33), [H(ve, null, t.__a ? null : e.children), o];
};
var Oo = function(e, t, n) {
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
function Hs(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    Sn(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), Sn(H(Ds, { context: t.context }, e.__v), t.v);
}
function An(e, t) {
  var n = H(Hs, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Ft.prototype = new wt()).__a = function(e) {
  var t = this, n = Ii(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Oo(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ft.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ut(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Ft.prototype.componentDidUpdate = Ft.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Oo(e, n, t);
  });
};
var Oi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Vs = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, zs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Bs = /[A-Z0-9]/g, js = typeof document < "u", Us = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Mi(e, t, n) {
  return t.__k == null && (t.textContent = ""), Sn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Pi(e, t, n) {
  return Os(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
wt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(wt.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Mo = Ce.event;
function Ws() {
}
function Gs() {
  return this.cancelBubble;
}
function qs() {
  return this.defaultPrevented;
}
Ce.event = function(e) {
  return Mo && (e = Mo(e)), e.persist = Ws, e.isPropagationStopped = Gs, e.isDefaultPrevented = qs, e.nativeEvent = e;
};
var Qr, Ks = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Po = Ce.vnode;
Ce.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var l in n) {
      var s = n[l];
      if (!(l === "value" && "defaultValue" in n && s == null || js && l === "children" && r === "noscript" || l === "class" || l === "className")) {
        var a = l.toLowerCase();
        l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Us(n.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : zs.test(l) && (l = a) : a = l = "oninput" : i && Vs.test(l) ? l = l.replace(Bs, "-$&").toLowerCase() : s === null && (s = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ut(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ut(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Ks)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Oi, Po && Po(e);
};
var ko = Ce.__r;
Ce.__r = function(e) {
  ko && ko(e), Qr = e.__c;
};
var Ao = Ce.diffed;
Ce.diffed = function(e) {
  Ao && Ao(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Qr = null;
};
var ki = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Qr.__n[e.__c].props.value;
}, useCallback: le, useContext: ue, useDebugValue: Gr, useDeferredValue: Yr, useEffect: oe, useId: He, useImperativeHandle: Wr, useInsertionEffect: Zr, useLayoutEffect: Ze, useMemo: W, useReducer: ot, useRef: V, useState: j, useSyncExternalStore: kn, useTransition: Xr } } }, Ys = "18.3.1";
function Ai(e) {
  return H.bind(null, e);
}
function Nt(e) {
  return !!e && e.$$typeof === Oi;
}
function Li(e) {
  return Nt(e) && e.type === ve;
}
function Ni(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function Jr(e) {
  return Nt(e) ? Fs.apply(null, arguments) : e;
}
function Di(e) {
  return !!e.__k && (Sn(null, e), !0);
}
function Hi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Vi = function(e, t) {
  return e(t);
}, Le = function(e, t) {
  return e(t);
}, zi = ve, Bi = Nt, L = { useState: j, useId: He, useReducer: ot, useEffect: oe, useLayoutEffect: Ze, useInsertionEffect: Zr, useTransition: Xr, useDeferredValue: Yr, useSyncExternalStore: kn, startTransition: Kr, useRef: V, useImperativeHandle: Wr, useMemo: W, useCallback: le, useContext: ue, useDebugValue: Gr, version: "18.3.1", Children: Ri, render: Mi, hydrate: Pi, unmountComponentAtNode: Di, createPortal: An, createElement: H, createContext: pe, createFactory: Ai, cloneElement: Jr, createRef: Pn, Fragment: ve, isValidElement: Nt, isElement: Bi, isFragment: Li, isMemo: Ni, findDOMNode: Hi, Component: wt, PureComponent: En, memo: Ei, forwardRef: ge, flushSync: Le, unstable_batchedUpdates: Vi, StrictMode: zi, Suspense: Yt, SuspenseList: Ft, lazy: Fi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ki };
const xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Ri,
  Component: wt,
  Fragment: ve,
  PureComponent: En,
  StrictMode: zi,
  Suspense: Yt,
  SuspenseList: Ft,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ki,
  cloneElement: Jr,
  createContext: pe,
  createElement: H,
  createFactory: Ai,
  createPortal: An,
  createRef: Pn,
  default: L,
  findDOMNode: Hi,
  flushSync: Le,
  forwardRef: ge,
  hydrate: Pi,
  isElement: Bi,
  isFragment: Li,
  isMemo: Ni,
  isValidElement: Nt,
  lazy: Fi,
  memo: Ei,
  render: Mi,
  startTransition: Kr,
  unmountComponentAtNode: Di,
  unstable_batchedUpdates: Vi,
  useCallback: le,
  useContext: ue,
  useDebugValue: Gr,
  useDeferredValue: Yr,
  useEffect: oe,
  useErrorBoundary: Ps,
  useId: He,
  useImperativeHandle: Wr,
  useInsertionEffect: Zr,
  useLayoutEffect: Ze,
  useMemo: W,
  useReducer: ot,
  useRef: V,
  useState: j,
  useSyncExternalStore: kn,
  useTransition: Xr,
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
const Lo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, No = Xs, Dt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return No(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
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
  return No(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Zs = Dt("text-center inline-block font-semibold", {
  variants: {
    variant: {
      primary: "shadow-xs bg-primary text-white",
      secondary: "bg-white text-primary ring-1 shadow-xs ring-bg-primary ring-inset",
      tertiary: "bg-white text-gray-900 ring-1 shadow-xs ring-tertiary ring-inset",
      success: "shadow-xs bg-success text-white",
      danger: "shadow-xs bg-danger text-white",
      warning: "shadow-xs bg-warning text-white"
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
      className: "hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    },
    {
      variant: "secondary",
      disabled: !1,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    },
    {
      variant: "tertiary",
      disabled: !1,
      className: "hover:bg-tertiary-light"
    },
    {
      variant: "success",
      disabled: !1,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
    },
    {
      variant: "danger",
      disabled: !1,
      className: "hover:bg-danger-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
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
function Do({ id: e, checked: t, setChecked: n, label: r }) {
  return /* @__PURE__ */ y("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ y("div", { className: "flex h-6 shrink-0 items-center", children: /* @__PURE__ */ y("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ y(
        "input",
        {
          checked: t,
          onChange: (o) => n(o.target.checked),
          id: e,
          type: "checkbox",
          className: "checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline-primary col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
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
const Ui = typeof document < "u" ? L.useLayoutEffect : () => {
};
function Js(e) {
  const t = V(null);
  return Ui(() => {
    t.current = e;
  }, [
    e
  ]), le((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const sn = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, mt = (e) => e && "window" in e && e.window === e ? e : sn(e).defaultView || window;
function ea(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function ta(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Wi(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const na = Wi(function() {
  return ta(/^Mac/i);
}), ra = Wi(function() {
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
function Gi(e) {
  let t = V({
    isFocused: !1,
    observer: null
  });
  Ui(() => {
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
  ]), l = Gi(i), s = le((a) => {
    const u = sn(a.target);
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
let an = null, Cr = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Map(), yt = !1, Sr = !1;
const sa = {
  Tab: !0,
  Escape: !0
};
function eo(e, t) {
  for (let n of Cr) n(e, t);
}
function aa(e) {
  return !(e.metaKey || !na() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Rn(e) {
  yt = !0, aa(e) && (an = "keyboard", eo("keyboard", e));
}
function Ve(e) {
  an = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (yt = !0, eo("pointer", e));
}
function qi(e) {
  oa(e) && (yt = !0, an = "virtual");
}
function Ki(e) {
  e.target === window || e.target === document || (!yt && !Sr && (an = "virtual", eo("virtual", e)), yt = !1, Sr = !1);
}
function Yi() {
  yt = !1, Sr = !0;
}
function Er(e) {
  if (typeof window > "u" || Xt.get(mt(e))) return;
  const t = mt(e), n = sn(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    yt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Rn, !0), n.addEventListener("keyup", Rn, !0), n.addEventListener("click", qi, !0), t.addEventListener("focus", Ki, !0), t.addEventListener("blur", Yi, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", Ve, !0), n.addEventListener("pointermove", Ve, !0), n.addEventListener("pointerup", Ve, !0)) : (n.addEventListener("mousedown", Ve, !0), n.addEventListener("mousemove", Ve, !0), n.addEventListener("mouseup", Ve, !0)), t.addEventListener("beforeunload", () => {
    Xi(e);
  }, {
    once: !0
  }), Xt.set(t, {
    focus: r
  });
}
const Xi = (e, t) => {
  const n = mt(e), r = sn(e);
  t && r.removeEventListener("DOMContentLoaded", t), Xt.has(n) && (n.HTMLElement.prototype.focus = Xt.get(n).focus, r.removeEventListener("keydown", Rn, !0), r.removeEventListener("keyup", Rn, !0), r.removeEventListener("click", qi, !0), n.removeEventListener("focus", Ki, !0), n.removeEventListener("blur", Yi, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Ve, !0), r.removeEventListener("pointermove", Ve, !0), r.removeEventListener("pointerup", Ve, !0)) : (r.removeEventListener("mousedown", Ve, !0), r.removeEventListener("mousemove", Ve, !0), r.removeEventListener("mouseup", Ve, !0)), Xt.delete(n));
};
function ua(e) {
  const t = sn(e);
  let n;
  return t.readyState !== "loading" ? Er(e) : (n = () => {
    Er(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Xi(e, n);
}
typeof document < "u" && ua();
function Zi() {
  return an !== "pointer";
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
  Er(), oe(() => {
    let r = (o, i) => {
      da(!!(n != null && n.isTextInput), o, i) && e(Zi());
    };
    return Cr.add(r), () => {
      Cr.delete(r);
    };
  }, t);
}
function pa(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = V({
    isFocusWithin: !1
  }), l = le((u) => {
    i.current.isFocusWithin && !u.currentTarget.contains(u.relatedTarget) && (i.current.isFocusWithin = !1, n && n(u), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = Gi(l), a = le((u) => {
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
let $n = !1, tr = 0;
function Rr() {
  $n = !0, setTimeout(() => {
    $n = !1;
  }, 50);
}
function Ho(e) {
  e.pointerType === "touch" && Rr();
}
function ga() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Ho) : document.addEventListener("touchend", Rr), tr++, () => {
      tr--, !(tr > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Ho) : document.removeEventListener("touchend", Rr));
    };
}
function Qi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = j(!1), s = V({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  oe(ga, []);
  let { hoverProps: a, triggerHoverEnd: u } = W(() => {
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
      $n && d.pointerType === "mouse" || c(d, d.pointerType);
    }, f.onPointerLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && p(d, d.pointerType);
    }) : (f.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, f.onMouseEnter = (d) => {
      !s.ignoreEmulatedMouseEvents && !$n && c(d, "mouse"), s.ignoreEmulatedMouseEvents = !1;
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
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = V({
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
var ma = Object.defineProperty, ha = (e, t, n) => t in e ? ma(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nr = (e, t, n) => (ha(e, typeof t != "symbol" ? t + "" : t, n), n);
let va = class {
  constructor() {
    nr(this, "current", this.detect()), nr(this, "handoffState", "pending"), nr(this, "currentId", 0);
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
function Ht(e) {
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
  let t = V(e);
  return ae(() => {
    t.current = e;
  }, [e]), t;
}
let z = function(e) {
  let t = pt(e);
  return L.useCallback((...n) => t.current(...n), [t]);
};
function wa(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function ya(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function ba({ disabled: e = !1 } = {}) {
  let t = V(null), [n, r] = j(!1), o = St(), i = z(() => {
    t.current = null, r(!1), o.dispose();
  }), l = z((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = Ht(s.currentTarget);
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
function to() {
  return ue(_a);
}
function $r(...e) {
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
var kt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(kt || {}), st = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(st || {});
function xe() {
  let e = Ca();
  return le((t) => xa({ mergeRefs: e, ...t }), [e]);
}
function xa({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? Sa;
  let a = el(t, e);
  if (i) return hn(a, n, r, l, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...p } = a;
    if (c) return hn(p, n, r, l, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...p } = a;
    return Pe(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return hn({ ...p, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return hn(a, n, r, l, s);
}
function hn(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = rr(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
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
  if (i === ve && (Object.keys(lt(a)).length > 0 || Object.keys(lt(p)).length > 0)) if (!Nt(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(lt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(lt(a)).concat(Object.keys(lt(p))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = c.props, d = f == null ? void 0 : f.className, g = typeof d == "function" ? (...b) => $r(d(...b), a.className) : $r(d, a.className), m = g ? { className: g } : {}, v = el(c.props, lt(rr(a, ["ref"])));
    for (let b in p) b in v && delete p[b];
    return Jr(c, Object.assign({}, v, p, u, { ref: o(Ea(c), u.ref) }, m));
  }
  return H(i, Object.assign({}, rr(a, ["ref"]), i !== ve && u, i !== ve && p), c);
}
function Ca() {
  let e = V([]), t = le((n) => {
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
function no(...e) {
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
function rr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Ea(e) {
  return L.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Ra(e, t, n) {
  let [r, o] = j(n), i = e !== void 0, l = V(i), s = V(!1), a = V(!1);
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
var At = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(At || {});
function Ia(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Ta, name: "Hidden" });
}
let en = be(Ia), Fa = pe(null);
function Oa({ children: e }) {
  let t = ue(Fa);
  if (!t) return L.createElement(L.Fragment, null, e);
  let { target: n } = t;
  return n ? An(L.createElement(L.Fragment, null, e), n) : null;
}
function Ma({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = j(null), s = St();
  return oe(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), L.createElement(Oa, null, L.createElement(Pa, { setForm: l, formId: t }), tl(e).map(([a, u]) => L.createElement(en, { features: At.Hidden, ...lt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function Pa({ setForm: e, formId: t }) {
  return oe(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : L.createElement(en, { features: At.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let ka = pe(void 0);
function ol() {
  return ue(ka);
}
function Aa(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && La(n) ? !1 : r;
}
function La(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let il = Symbol();
function Na(e, t = !0) {
  return Object.assign(e, { [il]: t });
}
function Oe(...e) {
  let t = V(e);
  oe(() => {
    t.current = e;
  }, [e]);
  let n = z((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[il])) ? void 0 : n;
}
let Nn = pe(null);
Nn.displayName = "DescriptionContext";
function ll() {
  let e = ue(Nn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ll), t;
  }
  return e;
}
function Da() {
  var e, t;
  return (t = (e = ue(Nn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function Ha() {
  let [e, t] = j([]);
  return [e.length > 0 ? e.join(" ") : void 0, W(() => function(n) {
    let r = z((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = W(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return L.createElement(Nn.Provider, { value: o }, n.children);
  }, [t])];
}
let Va = "p";
function za(e, t) {
  let n = He(), r = to(), { id: o = `headlessui-description-${n}`, ...i } = e, l = ll(), s = Oe(t);
  ae(() => l.register(o), [o, l.register]);
  let a = r || !1, u = W(() => ({ ...l.slot, disabled: a }), [l.slot, a]), c = { ref: s, ...l.props, id: o };
  return xe()({ ourProps: c, theirProps: i, slot: u, defaultTag: Va, name: l.name || "Description" });
}
let Ba = be(za), ja = Object.assign(Ba, {});
var $e = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))($e || {});
let Dn = pe(null);
Dn.displayName = "LabelContext";
function sl() {
  let e = ue(Dn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, sl), t;
  }
  return e;
}
function Hn(e) {
  var t, n, r;
  let o = (n = (t = ue(Dn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Ua({ inherit: e = !1 } = {}) {
  let t = Hn(), [n, r] = j([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, W(() => function(i) {
    let l = z((a) => (r((u) => [...u, a]), () => r((u) => {
      let c = u.slice(), p = c.indexOf(a);
      return p !== -1 && c.splice(p, 1), c;
    }))), s = W(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return L.createElement(Dn.Provider, { value: s }, i.children);
  }, [r])];
}
let Wa = "label";
function Ga(e, t) {
  var n;
  let r = He(), o = sl(), i = ol(), l = to(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...c } = e, p = Oe(t);
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
  }), d = l || !1, g = W(() => ({ ...o.slot, disabled: d }), [o.slot, d]), m = { ref: p, ...o.props, id: s, htmlFor: a, onClick: f };
  return u && ("onClick" in m && (delete m.htmlFor, delete m.onClick), "onClick" in c && delete c.onClick), xe()({ ourProps: m, theirProps: c, slot: g, defaultTag: a ? Wa : "div", name: o.name || "Label" });
}
let qa = be(Ga), Ka = Object.assign(qa, {}), Ya = pe(() => {
});
function Xa({ value: e, children: t }) {
  return L.createElement(Ya.Provider, { value: e }, t);
}
function It(e, t, n) {
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
function or(e, t) {
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
}, Vo = {
  passive: !0
}, zo = typeof window > "u" ? !0 : "onscrollend" in window, nu = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && zo ? () => {
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
  a(), n.addEventListener("scroll", s, Vo);
  const u = e.options.useScrollendEvent && zo;
  return u && n.addEventListener("scrollend", a, Vo), () => {
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
    }, this.maybeNotify = It(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: !1,
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
    }, this.getMeasurementOptions = It(
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
    ), this.getMeasurements = It(
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
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = It(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (n, r, o) => this.range = n.length > 0 && r > 0 ? lu({
        measurements: n,
        outerSize: r,
        scrollOffset: o
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = It(
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
        key: !1,
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
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, l, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = It(
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
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return or(
          r[al(
            0,
            r.length - 1,
            (o) => or(r[o]).start,
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
          const [u] = or(
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
const Bo = typeof document < "u" ? Ze : oe;
function su(e) {
  const t = ot(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var l;
      i ? Le(t) : t(), (l = e.onChange) == null || l.call(e, o, i);
    }
  }, [r] = j(
    () => new iu(n)
  );
  return r.setOptions(n), Bo(() => r._didMount(), []), Bo(() => r._willUpdate()), r;
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
function jo(e, t = !1) {
  let [n, r] = ot(() => ({}), {}), o = W(() => du(e), [e, n]);
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
function Vt(e, t) {
  let n = pu.get(t), r = He(), o = cl(n);
  if (ae(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let Tr = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map();
function Uo(e) {
  var t;
  let n = (t = Zt.get(e)) != null ? t : 0;
  return Zt.set(e, n + 1), n !== 0 ? () => Wo(e) : (Tr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Wo(e));
}
function Wo(e) {
  var t;
  let n = (t = Zt.get(e)) != null ? t : 1;
  if (n === 1 ? Zt.delete(e) : Zt.set(e, n - 1), n !== 1) return;
  let r = Tr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Tr.delete(e));
}
function dl(e, { allowed: t, disallowed: n } = {}) {
  let r = Vt(e, "inert-others");
  ae(() => {
    var o, i;
    if (!r) return;
    let l = Ye();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(Uo(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let u = Ht(a);
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
let Tn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), gu = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var tt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(tt || {}), Ir = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ir || {}), mu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(mu || {});
function hu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Tn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function vu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(gu)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var pl = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(pl || {});
function wu(e, t = 0) {
  var n;
  return e === ((n = Ht(e)) == null ? void 0 : n.body) ? !1 : Pe(t, { 0() {
    return e.matches(Tn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Tn)) return !0;
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
function Gt(e, t, n, r) {
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
const Go = 30;
function wl(e, t, n) {
  let r = Vt(e, "outside-click"), o = pt(n), i = le(function(a, u) {
    if (a.defaultPrevented) return;
    let c = u(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let p = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let f of p) if (f !== null && (f.contains(c) || a.composed && a.composedPath().includes(f))) return;
    return !wu(c, pl.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), l = V(null);
  Gt(r, "pointerdown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Gt(r, "mousedown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Gt(r, "click", (a) => {
    hl() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = V({ x: 0, y: 0 });
  Gt(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), Gt(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= Go || Math.abs(u.y - s.current.y) >= Go)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), vl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Et(...e) {
  return W(() => Ht(...e), [...e]);
}
function ro(e, t, n, r) {
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
  let t = V({ value: "", selectionStart: null, selectionEnd: null });
  return ro(e, "blur", (n) => {
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
  return W(() => {
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
  let r = Vt(e, "scroll-lock");
  Tu(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function qo(e) {
  return [e.screenX, e.screenY];
}
function Iu() {
  let e = V([-1, -1]);
  return { wasMoved(t) {
    let n = qo(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = qo(t);
  } };
}
function Fu(e = 0) {
  let [t, n] = j(e), r = le((a) => n(a), [t]), o = le((a) => n((u) => u | a), [t]), i = le((a) => (t & a) === a, [t]), l = le((a) => n((u) => u & ~a), [n]), s = le((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var Ko = {}, Ou = {}, Yo, Xo;
typeof Ko < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Yo = Ko == null ? void 0 : Ou) == null ? void 0 : Yo.NODE_ENV) === "test" && typeof ((Xo = Element == null ? void 0 : Element.prototype) == null ? void 0 : Xo.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Mu = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Mu || {});
function _l(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function xl(e, t, n, r) {
  let [o, i] = j(n), { hasFlag: l, addFlag: s, removeFlag: a } = Fu(e && o ? 3 : 0), u = V(!1), c = V(!1), p = St();
  return ae(() => {
    var f;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (f = r == null ? void 0 : r.start) == null || f.call(r, n), Pu(t, { inFlight: u, prepare() {
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
function Pu(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Ye();
  return Au(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(ku(e, r));
    });
  }), i.dispose;
}
function ku(e, t) {
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
function Lu(e, { container: t, accept: n, walk: r }) {
  let o = V(n), i = V(r);
  oe(() => {
    o.current = n, i.current = r;
  }, [n, r]), ae(() => {
    if (!t || !e) return;
    let l = Ht(t);
    if (!l) return;
    let s = o.current, a = i.current, u = Object.assign((p) => s(p), { acceptNode: s }), c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, i]);
}
function tn(e, t) {
  let n = V([]), r = z(e);
  oe(() => {
    let o = [...n.current];
    for (let [i, l] of t.entries()) if (n.current[i] !== l) {
      let s = r(t, o);
      return n.current = t, s;
    }
  }, [r, ...t]);
}
function Vn() {
  return typeof window < "u";
}
function zt(e) {
  return Cl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qe(e) {
  var t;
  return (t = (Cl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cl(e) {
  return Vn() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function Ie(e) {
  return Vn() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function Xe(e) {
  return Vn() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function Zo(e) {
  return !Vn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function un(e) {
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
function zn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function oo(e) {
  const t = io(), n = Ie(e) ? Be(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Du(e) {
  let t = ct(e);
  for (; Xe(t) && !Lt(t); ) {
    if (oo(t))
      return t;
    if (zn(t))
      return null;
    t = ct(t);
  }
  return null;
}
function io() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Lt(e) {
  return ["html", "body", "#document"].includes(zt(e));
}
function Be(e) {
  return Ne(e).getComputedStyle(e);
}
function Bn(e) {
  return Ie(e) ? {
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
  return Lt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xe(t) && un(t) ? t : Sl(t);
}
function nn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Sl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Ne(o);
  if (i) {
    const s = Fr(l);
    return t.concat(l, l.visualViewport || [], un(o) ? o : [], s && n ? nn(s) : []);
  }
  return t.concat(o, nn(o, [], n));
}
function Fr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hu() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const bt = Math.min, Te = Math.max, rn = Math.round, vn = Math.floor, qe = (e) => ({
  x: e,
  y: e
}), Vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zu = {
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
function cn(e) {
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
function Bu(e, t, n) {
  n === void 0 && (n = !1);
  const r = cn(e), o = $l(e), i = Rl(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = In(l)), [l, In(l)];
}
function ju(e) {
  const t = In(e);
  return [Or(e), t, Or(t)];
}
function Or(e) {
  return e.replace(/start|end/g, (t) => zu[t]);
}
function Uu(e, t, n) {
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
function Wu(e, t, n, r) {
  const o = cn(e);
  let i = Uu(dt(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Or)))), i;
}
function In(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vu[t]);
}
function Gu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function qu(e) {
  return typeof e != "number" ? Gu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Fn(e) {
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
  switch (cn(t)) {
    case "start":
      d[l] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      d[l] += f * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const Ku = async (e, t, n) => {
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
async function jn(e, t) {
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
  } = Bt(t, e), g = qu(d), v = s[f ? p === "floating" ? "reference" : "floating" : p], b = Fn(await i.getClippingRect({
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
  }, T = Fn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Yu = function(e) {
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
      const b = dt(o), C = _t(s), x = dt(s) === s, R = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), T = f || (x || !m ? [In(s)] : ju(s)), M = g !== "none";
      !f && M && T.push(...Wu(s, m, g, R));
      const $ = [s, ...T], w = await jn(t, v), h = [];
      let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && h.push(w[b]), p) {
        const P = Bu(o, l, R);
        h.push(w[P[0]], w[P[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: h
      }], !h.every((P) => P <= 0)) {
        var E, I;
        const P = (((E = i.flip) == null ? void 0 : E.index) || 0) + 1, G = $[P];
        if (G)
          return {
            data: {
              index: P,
              overflows: _
            },
            reset: {
              placement: G
            }
          };
        let K = (I = _.filter((F) => F.overflows[0] <= 0).sort((F, A) => F.overflows[1] - A.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!K)
          switch (d) {
            case "bestFit": {
              var k;
              const F = (k = _.filter((A) => {
                if (M) {
                  const O = _t(A.placement);
                  return O === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((O) => O > 0).reduce((O, te) => O + te, 0)]).sort((A, O) => A[1] - O[1])[0]) == null ? void 0 : k[0];
              F && (K = F);
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
async function Xu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = dt(n), s = cn(n), a = _t(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, p = Bt(t, e);
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
const Zu = function(e) {
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
      } = t, a = await Xu(t, e);
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
}, Qu = function(e) {
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
      }, c = await jn(t, a), p = _t(dt(o)), f = El(p);
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
}, Ju = function(e) {
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
      } = Bt(e, t), c = await jn(t, u), p = dt(o), f = cn(o), d = _t(o) === "y", {
        width: g,
        height: m
      } = i.floating;
      let v, b;
      p === "top" || p === "bottom" ? (v = p, b = f === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, v = f === "end" ? "top" : "bottom");
      const C = m - c.top - c.bottom, x = g - c.left - c.right, R = bt(m - c[v], C), T = bt(g - c[b], x), M = !t.middlewareData.shift;
      let $ = R, w = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = x), (r = t.middlewareData.shift) != null && r.enabled.y && ($ = C), M && !f) {
        const _ = Te(c.left, 0), E = Te(c.right, 0), I = Te(c.top, 0), k = Te(c.bottom, 0);
        d ? w = g - 2 * (_ !== 0 || E !== 0 ? _ + E : Te(c.left, c.right)) : $ = m - 2 * (I !== 0 || k !== 0 ? I + k : Te(c.top, c.bottom));
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
function lo(e) {
  return Ie(e) ? e : e.contextElement;
}
function Mt(e) {
  const t = lo(e);
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
const ec = /* @__PURE__ */ qe(0);
function Il(e) {
  const t = Ne(e);
  return !io() || !t.visualViewport ? ec : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function tc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ne(e) ? !1 : t;
}
function xt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = lo(e);
  let l = qe(1);
  t && (r ? Ie(r) && (l = Mt(r)) : l = Mt(e));
  const s = tc(i, n, r) ? Il(i) : qe(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, c = o.width / l.x, p = o.height / l.y;
  if (i) {
    const f = Ne(i), d = r && Ie(r) ? Ne(r) : r;
    let g = f, m = Fr(g);
    for (; m && r && d !== g; ) {
      const v = Mt(m), b = m.getBoundingClientRect(), C = Be(m), x = b.left + (m.clientLeft + parseFloat(C.paddingLeft)) * v.x, R = b.top + (m.clientTop + parseFloat(C.paddingTop)) * v.y;
      a *= v.x, u *= v.y, c *= v.x, p *= v.y, a += x, u += R, g = Ne(m), m = Fr(g);
    }
  }
  return Fn({
    width: c,
    height: p,
    x: a,
    y: u
  });
}
function so(e, t) {
  const n = Bn(e).scrollLeft;
  return t ? t.left + n : xt(Qe(e)).left + n;
}
function Fl(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    so(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function nc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = Qe(r), s = t ? zn(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = qe(1);
  const c = qe(0), p = Xe(r);
  if ((p || !p && !i) && ((zt(r) !== "body" || un(l)) && (a = Bn(r)), Xe(r))) {
    const d = xt(r);
    u = Mt(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  const f = l && !p && !i ? Fl(l, a, !0) : qe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + f.y
  };
}
function rc(e) {
  return Array.from(e.getClientRects());
}
function oc(e) {
  const t = Qe(e), n = Bn(e), r = e.ownerDocument.body, o = Te(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Te(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + so(e);
  const s = -n.scrollTop;
  return Be(r).direction === "rtl" && (l += Te(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function ic(e, t) {
  const n = Ne(e), r = Qe(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = io();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function lc(e, t) {
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
    r = ic(e, n);
  else if (t === "document")
    r = oc(Qe(e));
  else if (Ie(t))
    r = lc(t, n);
  else {
    const o = Il(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Fn(r);
}
function Ol(e, t) {
  const n = ct(e);
  return n === t || !Ie(n) || Lt(n) ? !1 : Be(n).position === "fixed" || Ol(n, t);
}
function sc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = nn(e, [], !1).filter((s) => Ie(s) && zt(s) !== "body"), o = null;
  const i = Be(e).position === "fixed";
  let l = i ? ct(e) : e;
  for (; Ie(l) && !Lt(l); ) {
    const s = Be(l), a = oo(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || un(l) && !a && Ol(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = ct(l);
  }
  return t.set(e, r), r;
}
function ac(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? zn(t) ? [] : sc(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
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
function uc(e) {
  const {
    width: t,
    height: n
  } = Tl(e);
  return {
    width: t,
    height: n
  };
}
function cc(e, t, n) {
  const r = Xe(t), o = Qe(t), i = n === "fixed", l = xt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = qe(0);
  if (r || !r && !i)
    if ((zt(t) !== "body" || un(o)) && (s = Bn(t)), r) {
      const f = xt(t, !0, i, t);
      a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
    } else o && (a.x = so(o));
  const u = o && !r && !i ? Fl(o, s) : qe(0), c = l.left + s.scrollLeft - a.x - u.x, p = l.top + s.scrollTop - a.y - u.y;
  return {
    x: c,
    y: p,
    width: l.width,
    height: l.height
  };
}
function ir(e) {
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
  const n = Ne(e);
  if (zn(e))
    return n;
  if (!Xe(e)) {
    let o = ct(e);
    for (; o && !Lt(o); ) {
      if (Ie(o) && !ir(o))
        return o;
      o = ct(o);
    }
    return n;
  }
  let r = ti(e, t);
  for (; r && Nu(r) && ir(r); )
    r = ti(r, t);
  return r && Lt(r) && ir(r) && !oo(r) ? n : r || Du(e) || n;
}
const dc = async function(e) {
  const t = this.getOffsetParent || Ml, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: cc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function fc(e) {
  return Be(e).direction === "rtl";
}
const pc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nc,
  getDocumentElement: Qe,
  getClippingRect: ac,
  getOffsetParent: Ml,
  getElementRects: dc,
  getClientRects: rc,
  getDimensions: uc,
  getScale: Mt,
  isElement: Ie,
  isRTL: fc
};
function Pl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gc(e, t) {
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
    const g = vn(p), m = vn(o.clientWidth - (c + f)), v = vn(o.clientHeight - (p + d)), b = vn(c), x = {
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
function mc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = lo(e), c = o || i ? [...u ? nn(u) : [], ...nn(t)] : [];
  c.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const p = u && s ? gc(u, n) : null;
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
const lr = jn, hc = Zu, vc = Qu, wc = Yu, yc = Ju, bc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: pc,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Ku(e, t, {
    ...o,
    platform: i
  });
};
var xn = typeof document < "u" ? Ze : oe;
function On(e, t) {
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
        if (!On(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !On(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function kl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ni(e, t) {
  const n = kl(e);
  return Math.round(t * n) / n;
}
function sr(e) {
  const t = V(e);
  return xn(() => {
    t.current = e;
  }), t;
}
function _c(e) {
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
  On(f, r) || d(r);
  const [g, m] = j(null), [v, b] = j(null), C = le((A) => {
    A !== M.current && (M.current = A, m(A));
  }, []), x = le((A) => {
    A !== $.current && ($.current = A, b(A));
  }, []), R = i || g, T = l || v, M = V(null), $ = V(null), w = V(c), h = a != null, _ = sr(a), E = sr(o), I = sr(u), k = le(() => {
    if (!M.current || !$.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: f
    };
    E.current && (A.platform = E.current), bc(M.current, $.current, A).then((O) => {
      const te = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      P.current && !On(w.current, te) && (w.current = te, Le(() => {
        p(te);
      }));
    });
  }, [f, t, n, E, I]);
  xn(() => {
    u === !1 && w.current.isPositioned && (w.current.isPositioned = !1, p((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [u]);
  const P = V(!1);
  xn(() => (P.current = !0, () => {
    P.current = !1;
  }), []), xn(() => {
    if (R && (M.current = R), T && ($.current = T), R && T) {
      if (_.current)
        return _.current(R, T, k);
      k();
    }
  }, [R, T, k, _, h]);
  const G = W(() => ({
    reference: M,
    floating: $,
    setReference: C,
    setFloating: x
  }), [C, x]), K = W(() => ({
    reference: R,
    floating: T
  }), [R, T]), F = W(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!K.floating)
      return A;
    const O = ni(K.floating, c.x), te = ni(K.floating, c.y);
    return s ? {
      ...A,
      transform: "translate(" + O + "px, " + te + "px)",
      ...kl(K.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: te
    };
  }, [n, s, K.floating, c.x, c.y]);
  return W(() => ({
    ...c,
    update: k,
    refs: G,
    elements: K,
    floatingStyles: F
  }), [c, k, G, K, F]);
}
const Al = (e, t) => ({
  ...hc(e),
  options: [e, t]
}), xc = (e, t) => ({
  ...vc(e),
  options: [e, t]
}), Cc = (e, t) => ({
  ...wc(e),
  options: [e, t]
}), Sc = (e, t) => ({
  ...yc(e),
  options: [e, t]
}), Ll = {
  ...xr
}, Ec = Ll.useInsertionEffect, Rc = Ec || ((e) => e());
function Nl(e) {
  const t = V(() => {
  });
  return Rc(() => {
    t.current = e;
  }), le(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Mr = typeof document < "u" ? Ze : oe;
let ri = !1, $c = 0;
const oi = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + $c++
);
function Tc() {
  const [e, t] = j(() => ri ? oi() : void 0);
  return Mr(() => {
    e == null && t(oi());
  }, []), oe(() => {
    ri = !0;
  }, []), e;
}
const Ic = Ll.useId, Fc = Ic || Tc;
function Oc() {
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
const Mc = /* @__PURE__ */ pe(null), Pc = /* @__PURE__ */ pe(null), kc = () => {
  var e;
  return ((e = ue(Mc)) == null ? void 0 : e.id) || null;
}, Ac = () => ue(Pc), Lc = "data-floating-ui-focusable";
function Nc(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Fc(), i = V({}), [l] = j(() => Oc()), s = kc() != null, [a, u] = j(r.reference), c = Nl((d, g, m) => {
    i.current.openEvent = d ? g : void 0, l.emit("openchange", {
      open: d,
      event: g,
      reason: m,
      nested: s
    }), n == null || n(d, g, m);
  }), p = W(() => ({
    setPositionReference: u
  }), []), f = W(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return W(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: f,
    events: l,
    floatingId: o,
    refs: p
  }), [t, c, f, l, o, p]);
}
function Dc(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Nc({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = j(null), [s, a] = j(null), c = (o == null ? void 0 : o.domReference) || i, p = V(null), f = Ac();
  Mr(() => {
    c && (p.current = c);
  }, [c]);
  const d = _c({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), g = le((x) => {
    const R = Ie(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    a(R), d.refs.setReference(R);
  }, [d.refs]), m = le((x) => {
    (Ie(x) || x === null) && (p.current = x, l(x)), (Ie(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !Ie(x)) && d.refs.setReference(x);
  }, [d.refs]), v = W(() => ({
    ...d.refs,
    setReference: m,
    setPositionReference: g,
    domReference: p
  }), [d.refs, m, g]), b = W(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), C = W(() => ({
    ...d,
    ...r,
    refs: v,
    elements: b,
    nodeId: t
  }), [d, v, b, t, r]);
  return Mr(() => {
    r.dataRef.current.floatingContext = C;
    const x = f == null ? void 0 : f.nodesRef.current.find((R) => R.id === t);
    x && (x.context = C);
  }), W(() => ({
    ...d,
    context: C,
    refs: v,
    elements: b
  }), [d, v, b, C]);
}
const ii = "active", li = "selected";
function ar(e, t, n) {
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
    (s) => ar(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = le(
    (s) => ar(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = le(
    (s) => ar(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return W(() => ({
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
const Vc = (e) => ({
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
    if (!d)
      return {};
    const x = {
      ...t,
      ...await Al(-d.offsetTop - f.clientTop - p.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, R = await lr(si(x, g.scrollHeight + m + f.clientTop), c), T = await lr(x, {
      ...c,
      elementContext: "reference"
    }), M = Te(0, R.top), $ = x.y + M, _ = (g.scrollHeight > g.clientHeight ? (E) => E : rn)(Te(0, g.scrollHeight + (v && C || b ? m * 2 : 0) - M - Te(0, R.bottom)));
    if (g.style.maxHeight = _ + "px", g.scrollTop = M, o) {
      const E = g.offsetHeight < d.offsetHeight * bt(s, n.current.length) - 1 || T.top >= -a || T.bottom >= -a;
      Le(() => o(E));
    }
    return r && (r.current = await lr(si({
      ...x,
      y: $
    }, g.offsetHeight + m + f.clientTop), c)), {
      y: $
    };
  }
});
function zc(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = Nl(s), u = V(!1), c = V(null), p = V(null);
  oe(() => {
    if (!o) return;
    function d(m) {
      if (m.ctrlKey || !g || i.current == null)
        return;
      const v = m.deltaY, b = i.current.top >= -0.5, C = i.current.bottom >= -0.5, x = g.scrollHeight - g.clientHeight, R = v < 0 ? -1 : 1, T = v < 0 ? "max" : "min";
      g.scrollHeight <= g.clientHeight || (!b && v > 0 || !C && v < 0 ? (m.preventDefault(), Le(() => {
        a((M) => M + Math[T](v, x * R));
      })) : /firefox/i.test(Hu()) && (g.scrollTop += v));
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
  const f = W(() => ({
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
          (i.current.bottom < -0.5 && g < -1 || i.current.top < -0.5 && g > 1) && Le(() => a((m) => m + g));
        }
        requestAnimationFrame(() => {
          c.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return W(() => o ? {
    floating: f
  } : {}, [o, f]);
}
let dn = pe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
dn.displayName = "FloatingContext";
let ao = pe(null);
ao.displayName = "PlacementContext";
function Bc(e) {
  return W(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function jc() {
  return ue(dn).setReference;
}
function Uc() {
  let { getFloatingProps: e, slot: t } = ue(dn);
  return le((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Wc(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = ue(ao), n = W(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  ae(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = ue(dn);
  return W(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let ai = 4;
function Gc({ children: e, enabled: t = !0 }) {
  let [n, r] = j(null), [o, i] = j(0), l = V(null), [s, a] = j(null);
  qc(s);
  let u = t && n !== null && s !== null, { to: c = "bottom", gap: p = 0, offset: f = 0, padding: d = 0, inner: g } = Kc(n, s), [m, v = "center"] = c.split(" ");
  ae(() => {
    u && i(0);
  }, [u]);
  let { refs: b, floatingStyles: C, context: x } = Dc({ open: u, placement: m === "selection" ? v === "center" ? "bottom" : `bottom-${v}` : v === "center" ? `${m}` : `${m}-${v}`, strategy: "absolute", transform: !1, middleware: [Al({ mainAxis: m === "selection" ? 0 : p, crossAxis: f }), xc({ padding: d }), m !== "selection" && Cc({ padding: d }), m === "selection" && g ? Vc({ ...g, padding: d, overflowRef: l, offset: o, minItemsVisible: ai, referenceOverflowThreshold: d, onFallbackChange(E) {
    var I, k;
    if (!E) return;
    let P = x.elements.floating;
    if (!P) return;
    let G = parseFloat(getComputedStyle(P).scrollPaddingBottom) || 0, K = Math.min(ai, P.childElementCount), F = 0, A = 0;
    for (let O of (k = (I = x.elements.floating) == null ? void 0 : I.childNodes) != null ? k : []) if (O instanceof HTMLElement) {
      let te = O.offsetTop, N = te + O.clientHeight + G, B = P.scrollTop, S = B + P.clientHeight;
      if (te >= B && N <= S) K--;
      else {
        A = Math.max(0, Math.min(N, S) - Math.max(te, B)), F = O.clientHeight;
        break;
      }
    }
    K >= 1 && i((O) => {
      let te = F * K - A + G;
      return O >= te ? O : te;
    });
  } }) : null, Sc({ padding: d, apply({ availableWidth: E, availableHeight: I, elements: k }) {
    Object.assign(k.floating.style, { overflow: "auto", maxWidth: `${E}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${I}px)` });
  } })].filter(Boolean), whileElementsMounted: mc }), [R = m, T = v] = x.placement.split("-");
  m === "selection" && (R = "selection");
  let M = W(() => ({ anchor: [R, T].filter(Boolean).join(" ") }), [R, T]), $ = zc(x, { overflowRef: l, onChange: i }), { getReferenceProps: w, getFloatingProps: h } = Hc([$]), _ = z((E) => {
    a(E), b.setFloating(E);
  });
  return H(ao.Provider, { value: r }, H(dn.Provider, { value: { setFloating: _, setReference: b.setReference, styles: C, getReferenceProps: w, getFloatingProps: h, slot: M } }, e));
}
function qc(e) {
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
function Kc(e, t) {
  var n, r, o;
  let i = ur((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = ur((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = ur((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function ur(e, t, n = void 0) {
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
  }), i = W(() => o(e, t)[0], [e, t]), [l = i, s] = j();
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
function Yc({ children: e, freeze: t }) {
  let n = Pr(t, e);
  return L.createElement(L.Fragment, null, n);
}
function Pr(e, t) {
  let [n, r] = j(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Un = pe(null);
Un.displayName = "OpenClosedContext";
var Fe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Fe || {});
function fn() {
  return ue(Un);
}
function Hl({ value: e, children: t }) {
  return L.createElement(Un.Provider, { value: e }, t);
}
function Xc({ children: e }) {
  return L.createElement(Un.Provider, { value: null }, e);
}
function Zc(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ge = [];
Zc(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ge[0] === t.target) return;
    let n = t.target;
    n = n.closest(Tn), Ge.unshift(n ?? t.target), Ge = Ge.filter((r) => r != null && r.isConnected), Ge.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Qc(e) {
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
      Qc(e);
  }
}
var uo = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(uo || {});
function Vl(e) {
  let t = z(e), n = V(!1);
  oe(() => (n.current = !1, () => {
    n.current = !0, Ln(() => {
      n.current && t();
    });
  }), [t]);
}
function Jc() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in xr ? ((t) => t.useSyncExternalStore)(xr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function pn() {
  let e = Jc(), [t, n] = j(vt.isHandoffComplete);
  return t && vt.isHandoffComplete === !1 && n(!1), oe(() => {
    t !== !0 && n(!0);
  }, [t]), oe(() => vt.handoff(), []), e ? !1 : t;
}
let zl = pe(!1);
function ed() {
  return ue(zl);
}
function di(e) {
  return L.createElement(zl.Provider, { value: e.force }, e.children);
}
function td(e) {
  let t = ed(), n = ue(jl), r = Et(e), [o, i] = j(() => {
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
let Bl = ve, nd = be(function(e, t) {
  let n = e, r = V(null), o = Oe(Na((p) => {
    r.current = p;
  }), t), i = Et(r), l = td(r), [s] = j(() => {
    var p;
    return vt.isServer ? null : (p = i == null ? void 0 : i.createElement("div")) != null ? p : null;
  }), a = ue(kr), u = pn();
  ae(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), ae(() => {
    if (s && a) return a.register(s);
  }, [a, s]), Vl(() => {
    var p;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((p = l.parentElement) == null || p.removeChild(l)));
  });
  let c = xe();
  return u ? !l || !s ? null : An(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Bl, name: "Portal" }), s) : null;
});
function rd(e, t) {
  let n = Oe(t), { enabled: r = !0, ...o } = e, i = xe();
  return r ? L.createElement(nd, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Bl, name: "Portal" });
}
let od = ve, jl = pe(null);
function id(e, t) {
  let { target: n, ...r } = e, o = { ref: Oe(t) }, i = xe();
  return L.createElement(jl.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: od, name: "Popover.Group" }));
}
let kr = pe(null);
function ld() {
  let e = ue(kr), t = V([]), n = z((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = z((i) => {
    let l = t.current.indexOf(i);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
  }), o = W(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, W(() => function({ children: i }) {
    return L.createElement(kr.Provider, { value: o }, i);
  }, [o])];
}
let sd = be(rd), Ul = be(id), Wl = Object.assign(sd, { Group: Ul });
var ad = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ad || {}), ud = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(ud || {}), cd = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(cd || {}), dd = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(dd || {});
function cr(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((l, s) => l.dataRef.current.order - s.dataRef.current.order) : gl(r, (l) => l.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let fd = { 1(e) {
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
  let l = cr(e);
  if (l.activeOptionIndex === null) {
    let u = l.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (l.activeOptionIndex = u);
  }
  let s = t.focus === ye.Specific ? t.idx : ci(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === s && e.activationTrigger === a ? e : { ...e, ...l, isTyping: !1, activeOptionIndex: s, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, l = cr(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(i));
  let s = { ...e, ...l, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = cr(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, co = pe(null);
co.displayName = "ComboboxActionsContext";
function gn(e) {
  let t = ue(co);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, gn), n;
  }
  return t;
}
let Gl = pe(null);
function pd(e) {
  let t = jt("VirtualProvider"), { options: n } = t.virtual, [r, o] = W(() => {
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
  return a.length === 0 ? null : L.createElement(Gl.Provider, { value: i }, L.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var c;
    return L.createElement(ve, { key: u.key }, L.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }), { key: `${l}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let on = pe(null);
on.displayName = "ComboboxDataContext";
function jt(e) {
  let t = ue(on);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, jt), n;
  }
  return t;
}
function gd(e, t) {
  return Pe(t.type, fd, e, t);
}
let md = ve;
function hd(e, t) {
  var n, r;
  let o = to(), { value: i, defaultValue: l, onChange: s, form: a, name: u, by: c, disabled: p = o || !1, onClose: f, __demoMode: d = !1, multiple: g = !1, immediate: m = !1, virtual: v = null, nullable: b, ...C } = e, x = $a(l), [R = g ? [] : void 0, T] = Ra(i, s, x), [M, $] = ot(gd, { dataRef: Pn(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: v ? { options: v.options, disabled: (n = v.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), w = V(!1), h = V({ static: !1, hold: !1 }), _ = cu(c), E = z((D) => v ? c === null ? v.options.indexOf(D) : v.options.findIndex((q) => _(q, D)) : M.options.findIndex((q) => _(q.dataRef.current.value, D))), I = le((D) => Pe(P.mode, { 1: () => R.some((q) => _(q, D)), 0: () => _(R, D) }), [R]), k = z((D) => M.activeOptionIndex === E(D)), P = W(() => ({ ...M, immediate: m, optionsPropsRef: h, value: R, defaultValue: x, disabled: p, mode: g ? 1 : 0, virtual: v ? M.virtual : null, get activeOptionIndex() {
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
  }, calculateIndex: E, compare: _, isSelected: I, isActive: k }), [R, x, p, g, d, M, v]);
  ae(() => {
    var D;
    v && $({ type: 7, options: v.options, disabled: (D = v.disabled) != null ? D : null });
  }, [v, v == null ? void 0 : v.options, v == null ? void 0 : v.disabled]), ae(() => {
    M.dataRef.current = P;
  }, [P]);
  let G = P.comboboxState === 0;
  wl(G, [P.buttonElement, P.inputElement, P.optionsElement], () => U.closeCombobox());
  let K = W(() => {
    var D, q, Q;
    return { open: P.comboboxState === 0, disabled: p, activeIndex: P.activeOptionIndex, activeOption: P.activeOptionIndex === null ? null : P.virtual ? P.virtual.options[(D = P.activeOptionIndex) != null ? D : 0] : (Q = (q = P.options[P.activeOptionIndex]) == null ? void 0 : q.dataRef.current.value) != null ? Q : null, value: R };
  }, [P, p, R]), F = z(() => {
    if (P.activeOptionIndex !== null) {
      if (U.setIsTyping(!1), P.virtual) S(P.virtual.options[P.activeOptionIndex]);
      else {
        let { dataRef: D } = P.options[P.activeOptionIndex];
        S(D.current.value);
      }
      U.goToOption(ye.Specific, P.activeOptionIndex);
    }
  }), A = z(() => {
    $({ type: 0 }), w.current = !0;
  }), O = z(() => {
    $({ type: 1 }), w.current = !1, f == null || f();
  }), te = z((D) => {
    $({ type: 3, isTyping: D });
  }), N = z((D, q, Q) => (w.current = !1, D === ye.Specific ? $({ type: 2, focus: ye.Specific, idx: q, trigger: Q }) : $({ type: 2, focus: D, trigger: Q }))), B = z((D, q) => ($({ type: 4, payload: { id: D, dataRef: q } }), () => {
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
  }), U = W(() => ({ onChange: S, registerOption: B, goToOption: N, setIsTyping: te, closeCombobox: O, openCombobox: A, setActivationTrigger: ie, selectActiveOption: F, setInputElement: ee, setButtonElement: se, setOptionsElement: re }), []), [J, de] = Ua(), Z = t === null ? {} : { ref: t }, fe = le(() => {
    if (x !== void 0) return T == null ? void 0 : T(x);
  }, [T, x]), we = xe();
  return L.createElement(de, { value: J, props: { htmlFor: (r = P.inputElement) == null ? void 0 : r.id }, slot: { open: P.comboboxState === 0, disabled: p } }, L.createElement(Gc, null, L.createElement(co.Provider, { value: U }, L.createElement(on.Provider, { value: P }, L.createElement(Hl, { value: Pe(P.comboboxState, { 0: Fe.Open, 1: Fe.Closed }) }, u != null && L.createElement(Ma, { disabled: p, data: R != null ? { [u]: R } : {}, form: a, onReset: fe }), we({ ourProps: Z, theirProps: C, slot: K, defaultTag: md, name: "Combobox" }))))));
}
let vd = "input";
function wd(e, t) {
  var n, r, o, i, l;
  let s = jt("Combobox.Input"), a = gn("Combobox.Input"), u = He(), c = ol(), { id: p = c || `headlessui-combobox-input-${u}`, onChange: f, displayValue: d, disabled: g = s.disabled || !1, autoFocus: m = !1, type: v = "text", ...b } = e, C = V(null), x = Oe(C, t, jc(), a.setInputElement), R = Et(s.inputElement), T = St(), M = z(() => {
    a.onChange(null), s.optionsElement && (s.optionsElement.scrollTop = 0), a.goToOption(ye.Nothing);
  }), $ = W(() => {
    var S;
    return typeof d == "function" && s.value !== void 0 ? (S = d(s.value)) != null ? S : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, d]);
  tn(([S, ie], [ee, se]) => {
    if (s.isTyping) return;
    let re = C.current;
    re && ((se === 0 && ie === 1 || S !== ee) && (re.value = S), requestAnimationFrame(() => {
      if (s.isTyping || !re || (R == null ? void 0 : R.activeElement) !== re) return;
      let { selectionStart: U, selectionEnd: J } = re;
      Math.abs((J ?? 0) - (U ?? 0)) === 0 && U === 0 && re.setSelectionRange(re.value.length, re.value.length);
    }));
  }, [$, s.comboboxState, R, s.isTyping]), tn(([S], [ie]) => {
    if (S === 0 && ie === 1) {
      if (s.isTyping) return;
      let ee = C.current;
      if (!ee) return;
      let se = ee.value, { selectionStart: re, selectionEnd: U, selectionDirection: J } = ee;
      ee.value = "", ee.value = se, J !== null ? ee.setSelectionRange(re, U, J) : ee.setSelectionRange(re, U);
    }
  }, [s.comboboxState]);
  let w = V(!1), h = z(() => {
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
          Le(() => a.openCombobox()), s.value || a.goToOption(ye.Last);
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
  }), I = z((S) => {
    f == null || f(S), s.mode === 0 && S.target.value === "" && M(), a.openCombobox();
  }), k = z((S) => {
    var ie, ee, se;
    let re = (ie = S.relatedTarget) != null ? ie : Ge.find((U) => U !== S.currentTarget);
    if (!((ee = s.optionsElement) != null && ee.contains(re)) && !((se = s.buttonElement) != null && se.contains(re)) && s.comboboxState === 0) return S.preventDefault(), s.mode === 0 && s.value === null && M(), a.closeCombobox();
  }), P = z((S) => {
    var ie, ee, se;
    let re = (ie = S.relatedTarget) != null ? ie : Ge.find((U) => U !== S.currentTarget);
    (ee = s.buttonElement) != null && ee.contains(re) || (se = s.optionsElement) != null && se.contains(re) || s.disabled || s.immediate && s.comboboxState !== 0 && T.microTask(() => {
      Le(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), G = Hn(), K = Da(), { isFocused: F, focusProps: A } = Ji({ autoFocus: m }), { isHovered: O, hoverProps: te } = Qi({ isDisabled: g }), N = W(() => ({ open: s.comboboxState === 0, disabled: g, hover: O, focus: F, autofocus: m }), [s, O, F, m, g]), B = no({ ref: x, id: p, role: "combobox", type: v, "aria-controls": (n = s.optionsElement) == null ? void 0 : n.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find((S) => !S.dataRef.current.disabled && s.compare(S.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (o = s.options[s.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": G, "aria-describedby": K, "aria-autocomplete": "list", defaultValue: (l = (i = e.defaultValue) != null ? i : s.defaultValue !== void 0 ? d == null ? void 0 : d(s.defaultValue) : null) != null ? l : s.defaultValue, disabled: g || void 0, autoFocus: m, onCompositionStart: h, onCompositionEnd: _, onKeyDown: E, onChange: I, onFocus: P, onBlur: k }, A, te);
  return xe()({ ourProps: B, theirProps: b, slot: N, defaultTag: vd, name: "Combobox.Input" });
}
let yd = "button";
function bd(e, t) {
  var n;
  let r = jt("Combobox.Button"), o = gn("Combobox.Button"), i = Oe(t, o.setButtonElement), l = He(), { id: s = `headlessui-combobox-button-${l}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...c } = e, p = yl(r.inputElement), f = z(($) => {
    switch ($.key) {
      case $e.Space:
      case $e.Enter:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && Le(() => o.openCombobox()), p();
        return;
      case $e.ArrowDown:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && (Le(() => o.openCombobox()), r.value || o.goToOption(ye.First)), p();
        return;
      case $e.ArrowUp:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && (Le(() => o.openCombobox()), r.value || o.goToOption(ye.Last)), p();
        return;
      case $e.Escape:
        if (r.comboboxState !== 0) return;
        $.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && $.stopPropagation(), Le(() => o.closeCombobox()), p();
        return;
      default:
        return;
    }
  }), d = z(($) => {
    $.preventDefault(), !Aa($.currentTarget) && ($.button === uo.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), p());
  }), g = Hn([s]), { isFocusVisible: m, focusProps: v } = Ji({ autoFocus: u }), { isHovered: b, hoverProps: C } = Qi({ isDisabled: a }), { pressed: x, pressProps: R } = ba({ disabled: a }), T = W(() => ({ open: r.comboboxState === 0, active: x || r.comboboxState === 0, disabled: a, value: r.value, hover: b, focus: m }), [r, b, m, x, a]), M = no({ ref: i, id: s, type: Cu(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": g, disabled: a || void 0, autoFocus: u, onMouseDown: d, onKeyDown: f }, v, C, R);
  return xe()({ ourProps: M, theirProps: c, slot: T, defaultTag: yd, name: "Combobox.Button" });
}
let _d = "div", xd = kt.RenderStrategy | kt.Static;
function Cd(e, t) {
  var n, r, o;
  let i = He(), { id: l = `headlessui-combobox-options-${i}`, hold: s = !1, anchor: a, portal: u = !1, modal: c = !0, transition: p = !1, ...f } = e, d = jt("Combobox.Options"), g = gn("Combobox.Options"), m = Bc(a);
  m && (u = !0);
  let [v, b] = Wc(m), [C, x] = j(null), R = Uc(), T = Oe(t, m ? v : null, g.setOptionsElement, x), M = Et(d.optionsElement), $ = fn(), [w, h] = xl(p, C, $ !== null ? ($ & Fe.Open) === Fe.Open : d.comboboxState === 0);
  fl(w, d.inputElement, g.closeCombobox);
  let _ = d.__demoMode ? !1 : c && d.comboboxState === 0;
  bl(_, M);
  let E = d.__demoMode ? !1 : c && d.comboboxState === 0;
  dl(E, { allowed: le(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), ae(() => {
    var B;
    d.optionsPropsRef.current.static = (B = e.static) != null ? B : !1;
  }, [d.optionsPropsRef, e.static]), ae(() => {
    d.optionsPropsRef.current.hold = s;
  }, [d.optionsPropsRef, s]), Lu(d.comboboxState === 0, { container: d.optionsElement, accept(B) {
    return B.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : B.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(B) {
    B.setAttribute("role", "none");
  } });
  let I = Hn([(n = d.buttonElement) == null ? void 0 : n.id]), k = W(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), P = z(() => {
    g.setActivationTrigger(0);
  }), G = z((B) => {
    B.preventDefault(), g.setActivationTrigger(0);
  }), K = no(m ? R() : {}, { "aria-labelledby": I, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: l, ref: T, style: { ...f.style, ...b, "--input-width": jo(d.inputElement, !0).width, "--button-width": jo(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : P, onMouseDown: G, ..._l(h) }), F = w && d.comboboxState === 1, A = Pr(F, (r = d.virtual) == null ? void 0 : r.options), O = Pr(F, d.value), te = z((B) => d.compare(O, B));
  if (d.virtual) {
    if (A === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(f, { children: L.createElement(on.Provider, { value: A !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: A } } : d }, L.createElement(pd, { slot: k }, f.children)) });
  }
  let N = xe();
  return L.createElement(Wl, { enabled: u ? e.static || w : !1 }, L.createElement(on.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: te } }, N({ ourProps: K, theirProps: { ...f, children: L.createElement(Yc, { freeze: F }, typeof f.children == "function" ? (o = f.children) == null ? void 0 : o.call(f, k) : f.children) }, slot: k, defaultTag: _d, features: xd, visible: w, name: "Combobox.Options" })));
}
let Sd = "div";
function Ed(e, t) {
  var n, r, o, i;
  let l = jt("Combobox.Option"), s = gn("Combobox.Option"), a = He(), { id: u = `headlessui-combobox-option-${a}`, value: c, disabled: p = (o = (r = (n = l.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null ? o : !1, order: f = null, ...d } = e, g = yl(l.inputElement), m = l.virtual ? l.activeOptionIndex === l.calculateIndex(c) : l.activeOptionIndex === null ? !1 : ((i = l.options[l.activeOptionIndex]) == null ? void 0 : i.id) === u, v = l.isSelected(c), b = V(null), C = pt({ disabled: p, value: c, domRef: b, order: f }), x = ue(Gl), R = Oe(t, b, x ? x.measureElement : null), T = z(() => {
    s.setIsTyping(!1), s.onChange(c);
  });
  ae(() => s.registerOption(u, C), [C, u]);
  let M = V(!(l.virtual || l.__demoMode));
  ae(() => {
    if (!l.virtual && !l.__demoMode) return Ye().requestAnimationFrame(() => {
      M.current = !0;
    });
  }, [l.virtual, l.__demoMode]), ae(() => {
    if (M.current && l.comboboxState === 0 && m && l.activationTrigger !== 0) return Ye().requestAnimationFrame(() => {
      var G, K;
      (K = (G = b.current) == null ? void 0 : G.scrollIntoView) == null || K.call(G, { block: "nearest" });
    });
  }, [b, m, l.comboboxState, l.activationTrigger, l.activeOptionIndex]);
  let $ = z((G) => {
    G.preventDefault(), G.button === uo.Left && (p || (T(), hl() || requestAnimationFrame(() => g()), l.mode === 0 && s.closeCombobox()));
  }), w = z(() => {
    if (p) return s.goToOption(ye.Nothing);
    let G = l.calculateIndex(c);
    s.goToOption(ye.Specific, G);
  }), h = Iu(), _ = z((G) => h.update(G)), E = z((G) => {
    if (!h.wasMoved(G) || p || m) return;
    let K = l.calculateIndex(c);
    s.goToOption(ye.Specific, K, 0);
  }), I = z((G) => {
    h.wasMoved(G) && (p || m && (l.optionsPropsRef.current.hold || s.goToOption(ye.Nothing)));
  }), k = W(() => ({ active: m, focus: m, selected: v, disabled: p }), [m, v, p]), P = { id: u, ref: R, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": v, disabled: void 0, onMouseDown: $, onFocus: w, onPointerEnter: _, onMouseEnter: _, onPointerMove: E, onMouseMove: E, onPointerLeave: I, onMouseLeave: I };
  return xe()({ ourProps: P, theirProps: d, slot: k, defaultTag: Sd, name: "Combobox.Option" });
}
let Rd = be(hd), Ar = be(bd), ql = be(wd), $d = Ka, Kl = be(Cd), Lr = be(Ed), Td = Object.assign(Rd, { Input: ql, Button: Ar, Label: $d, Options: Kl, Option: Lr });
function Id(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Vt(e, "escape");
  ro(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === $e.Escape && n(o));
  });
}
function Fd() {
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
function Od({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
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
  return L.createElement(Yl.Provider, { value: o }, e, o === null && L.createElement(en, { features: At.Hidden, ref: (i) => {
    var l, s;
    if (i) {
      for (let a of (s = (l = Ht(i)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? s : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
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
function fo() {
  let e = V(!1);
  return ae(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Kt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Kt || {});
function Md() {
  let e = V(0);
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
let Pd = "div";
var gt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(gt || {});
function kd(e, t) {
  let n = V(null), r = Oe(n, t), { initialFocus: o, initialFocusFallback: i, containers: l, features: s = 15, ...a } = e;
  pn() || (s = 0);
  let u = Et(n);
  Dd(s, { ownerDocument: u });
  let c = Hd(s, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  Vd(s, { ownerDocument: u, container: n, containers: l, previousActiveElement: c });
  let p = Md(), f = z((C) => {
    let x = n.current;
    x && ((R) => R())(() => {
      Pe(p.current, { [Kt.Forwards]: () => {
        Qt(x, tt.First, { skipElements: [C.relatedTarget, i] });
      }, [Kt.Backwards]: () => {
        Qt(x, tt.Last, { skipElements: [C.relatedTarget, i] });
      } });
    });
  }), d = Vt(!!(s & 2), "focus-trap#tab-lock"), g = St(), m = V(!1), v = { ref: r, onKeyDown(C) {
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
  return L.createElement(L.Fragment, null, d && L.createElement(en, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: At.Focusable }), b({ ourProps: v, theirProps: a, defaultTag: Pd, name: "FocusTrap" }), d && L.createElement(en, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: At.Focusable }));
}
let Ad = be(kd), Ld = Object.assign(Ad, { features: gt });
function Nd(e = !0) {
  let t = V(Ge.slice());
  return tn(([n], [r]) => {
    r === !0 && n === !1 && Ln(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Ge.slice());
  }, [e, Ge, t]), z(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Dd(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Nd(n);
  tn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && nt(r());
  }, [n]), Vl(() => {
    n && nt(r());
  });
}
function Hd(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = V(null), l = Vt(!!(e & 1), "focus-trap#initial-focus"), s = fo();
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
          if (Qt(a, tt.First | tt.AutoFocus) !== Ir.Error) return;
        } else if (Qt(a, tt.First) !== Ir.Error) return;
        if (o != null && o.current && (nt(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), i;
}
function Vd(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = fo(), l = !!(e & 4);
  ro(t == null ? void 0 : t.defaultView, "focus", (s) => {
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
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : ts) !== ve || L.Children.count(e.children) === 1;
}
let Wn = pe(null);
Wn.displayName = "TransitionContext";
var zd = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(zd || {});
function Bd() {
  let e = ue(Wn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function jd() {
  let e = ue(Gn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Gn = pe(null);
Gn.displayName = "NestingContext";
function qn(e) {
  return "children" in e ? qn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function es(e, t) {
  let n = pt(e), r = V([]), o = fo(), i = St(), l = z((d, g = st.Hidden) => {
    let m = r.current.findIndex(({ el: v }) => v === d);
    m !== -1 && (Pe(g, { [st.Unmount]() {
      r.current.splice(m, 1);
    }, [st.Hidden]() {
      r.current[m].state = "hidden";
    } }), i.microTask(() => {
      var v;
      !qn(r) && o.current && ((v = n.current) == null || v.call(n));
    }));
  }), s = z((d) => {
    let g = r.current.find(({ el: m }) => m === d);
    return g ? g.state !== "visible" && (g.state = "visible") : r.current.push({ el: d, state: "visible" }), () => l(d, st.Unmount);
  }), a = V([]), u = V(Promise.resolve()), c = V({ enter: [], leave: [] }), p = z((d, g, m) => {
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
  return W(() => ({ children: r, register: s, unregister: l, onStart: p, onStop: f, wait: u, chains: c }), [s, l, r, p, f, c, u]);
}
let ts = ve, ns = kt.RenderStrategy;
function Ud(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: u, enterFrom: c, enterTo: p, entered: f, leave: d, leaveFrom: g, leaveTo: m, ...v } = e, [b, C] = j(null), x = V(null), R = Jl(e), T = Oe(...R ? [x, t, C] : t === null ? [] : [t]), M = (n = v.unmount) == null || n ? st.Unmount : st.Hidden, { show: $, appear: w, initial: h } = Bd(), [_, E] = j($ ? "visible" : "hidden"), I = jd(), { register: k, unregister: P } = I;
  ae(() => k(x), [k, x]), ae(() => {
    if (M === st.Hidden && x.current) {
      if ($ && _ !== "visible") {
        E("visible");
        return;
      }
      return Pe(_, { hidden: () => P(x), visible: () => k(x) });
    }
  }, [_, x, k, P, $, M]);
  let G = pn();
  ae(() => {
    if (R && G && _ === "visible" && x.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [x, _, G, R]);
  let K = h && !w, F = w && $ && h, A = V(!1), O = es(() => {
    A.current || (E("hidden"), P(x));
  }, I), te = z((re) => {
    A.current = !0;
    let U = re ? "enter" : "leave";
    O.onStart(x, U, (J) => {
      J === "enter" ? i == null || i() : J === "leave" && (s == null || s());
    });
  }), N = z((re) => {
    let U = re ? "enter" : "leave";
    A.current = !1, O.onStop(x, U, (J) => {
      J === "enter" ? l == null || l() : J === "leave" && (a == null || a());
    }), U === "leave" && !qn(O) && (E("hidden"), P(x));
  });
  oe(() => {
    R && o || (te($), N($));
  }, [$, R, o]);
  let B = !(!o || !R || !G || K), [, S] = xl(B, b, $, { start: te, end: N }), ie = lt({ ref: T, className: ((r = $r(v.className, F && u, F && c, S.enter && u, S.enter && S.closed && c, S.enter && !S.closed && p, S.leave && d, S.leave && !S.closed && g, S.leave && S.closed && m, !S.transition && $ && f)) == null ? void 0 : r.trim()) || void 0, ..._l(S) }), ee = 0;
  _ === "visible" && (ee |= Fe.Open), _ === "hidden" && (ee |= Fe.Closed), S.enter && (ee |= Fe.Opening), S.leave && (ee |= Fe.Closing);
  let se = xe();
  return L.createElement(Gn.Provider, { value: O }, L.createElement(Hl, { value: ee }, se({ ourProps: ie, theirProps: v, defaultTag: ts, features: ns, visible: _ === "visible", name: "Transition.Child" })));
}
function Wd(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = V(null), s = Jl(e), a = Oe(...s ? [l, t] : t === null ? [] : [t]);
  pn();
  let u = fn();
  if (n === void 0 && u !== null && (n = (u & Fe.Open) === Fe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, p] = j(n ? "visible" : "hidden"), f = es(() => {
    n || p("hidden");
  }), [d, g] = j(!0), m = V([n]);
  ae(() => {
    d !== !1 && m.current[m.current.length - 1] !== n && (m.current.push(n), g(!1));
  }, [m, n]);
  let v = W(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  ae(() => {
    n ? p("visible") : !qn(f) && l.current !== null && p("hidden");
  }, [n, f]);
  let b = { unmount: o }, C = z(() => {
    var T;
    d && g(!1), (T = e.beforeEnter) == null || T.call(e);
  }), x = z(() => {
    var T;
    d && g(!1), (T = e.beforeLeave) == null || T.call(e);
  }), R = xe();
  return L.createElement(Gn.Provider, { value: f }, L.createElement(Wn.Provider, { value: v }, R({ ourProps: { ...b, as: ve, children: L.createElement(rs, { ref: a, ...b, ...i, beforeEnter: C, beforeLeave: x }) }, theirProps: {}, defaultTag: ve, features: ns, visible: c === "visible", name: "Transition" })));
}
function Gd(e, t) {
  let n = ue(Wn) !== null, r = fn() !== null;
  return L.createElement(L.Fragment, null, !n && r ? L.createElement(Nr, { ref: t, ...e }) : L.createElement(rs, { ref: t, ...e }));
}
let Nr = be(Wd), rs = be(Ud), po = be(Gd), qd = Object.assign(Nr, { Child: po, Root: Nr });
var Kd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kd || {}), Yd = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Yd || {});
let Xd = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, go = pe(null);
go.displayName = "DialogContext";
function Kn(e) {
  let t = ue(go);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Kn), n;
  }
  return t;
}
function Zd(e, t) {
  return Pe(t.type, Xd, e, t);
}
let pi = be(function(e, t) {
  let n = He(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: l, role: s = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: c = !1, ...p } = e, f = V(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (f.current || (f.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = fn();
  o === void 0 && d !== null && (o = (d & Fe.Open) === Fe.Open);
  let g = V(null), m = Oe(g, t), v = Et(g), b = o ? 0 : 1, [C, x] = ot(Zd, { titleId: null, descriptionId: null, panelRef: Pn() }), R = z(() => i(!1)), T = z((N) => x({ type: 0, id: N })), M = pn() ? b === 0 : !1, [$, w] = ld(), h = { get current() {
    var N;
    return (N = C.panelRef.current) != null ? N : g.current;
  } }, _ = Xl(), { resolveContainers: E } = Od({ mainTreeNode: _, portals: $, defaultContainers: [h] }), I = d !== null ? (d & Fe.Closing) === Fe.Closing : !1;
  dl(u || I ? !1 : M, { allowed: z(() => {
    var N, B;
    return [(B = (N = g.current) == null ? void 0 : N.closest("[data-headlessui-portal]")) != null ? B : null];
  }), disallowed: z(() => {
    var N;
    return [(N = _ == null ? void 0 : _.closest("body > *:not(#headlessui-portal-root)")) != null ? N : null];
  }) }), wl(M, E, (N) => {
    N.preventDefault(), R();
  }), Id(M, v == null ? void 0 : v.defaultView, (N) => {
    N.preventDefault(), N.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), R();
  }), bl(u || I ? !1 : M, v, E), fl(M, g, R);
  let [k, P] = Ha(), G = W(() => [{ dialogState: b, close: R, setTitleId: T, unmount: c }, C], [b, C, R, T, c]), K = W(() => ({ open: b === 0 }), [b]), F = { ref: m, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : b === 0 ? !0 : void 0, "aria-labelledby": C.titleId, "aria-describedby": k, unmount: c }, A = !Fd(), O = gt.None;
  M && !u && (O |= gt.RestoreFocus, O |= gt.TabLock, a && (O |= gt.AutoFocus), A && (O |= gt.InitialFocus));
  let te = xe();
  return L.createElement(Xc, null, L.createElement(di, { force: !0 }, L.createElement(Wl, null, L.createElement(go.Provider, { value: G }, L.createElement(Ul, { target: g }, L.createElement(di, { force: !1 }, L.createElement(P, { slot: K }, L.createElement(w, null, L.createElement(Ld, { initialFocus: l, initialFocusFallback: g, containers: E, features: O }, L.createElement(Xa, { value: R }, te({ ourProps: F, theirProps: p, slot: K, defaultTag: Qd, features: Jd, visible: b === 0, name: "Dialog" })))))))))));
}), Qd = "div", Jd = kt.RenderStrategy | kt.Static;
function ef(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = fn(), l = e.hasOwnProperty("open") || i !== null, s = e.hasOwnProperty("onClose");
  if (!l && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? L.createElement(fi, null, L.createElement(qd, { show: r, transition: n, unmount: o.unmount }, L.createElement(pi, { ref: t, ...o }))) : L.createElement(fi, null, L.createElement(pi, { ref: t, open: r, ...o }));
}
let tf = "div";
function nf(e, t) {
  let n = He(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: l, unmount: s }, a] = Kn("Dialog.Panel"), u = Oe(t, a.panelRef), c = W(() => ({ open: l === 0 }), [l]), p = z((v) => {
    v.stopPropagation();
  }), f = { ref: u, id: r, onClick: p }, d = o ? po : ve, g = o ? { unmount: s } : {}, m = xe();
  return L.createElement(d, { ...g }, m({ ourProps: f, theirProps: i, slot: c, defaultTag: tf, name: "Dialog.Panel" }));
}
let rf = "div";
function of(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = Kn("Dialog.Backdrop"), l = W(() => ({ open: o === 0 }), [o]), s = { ref: t, "aria-hidden": !0 }, a = n ? po : ve, u = n ? { unmount: i } : {}, c = xe();
  return L.createElement(a, { ...u }, c({ ourProps: s, theirProps: r, slot: l, defaultTag: rf, name: "Dialog.Backdrop" }));
}
let lf = "h2";
function sf(e, t) {
  let n = He(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: l }] = Kn("Dialog.Title"), s = Oe(t);
  oe(() => (l(r), () => l(null)), [r, l]);
  let a = W(() => ({ open: i === 0 }), [i]), u = { ref: s, id: r };
  return xe()({ ourProps: u, theirProps: o, slot: a, defaultTag: lf, name: "Dialog.Title" });
}
let af = be(ef), os = be(nf), uf = be(of), is = be(sf), cf = Object.assign(af, { Panel: os, Title: is, Description: ja });
function df({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const ff = /* @__PURE__ */ ge(df);
function pf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const gf = /* @__PURE__ */ ge(pf);
function mf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
  }));
}
const hf = /* @__PURE__ */ ge(mf);
function vf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const wf = /* @__PURE__ */ ge(vf);
function yf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const bf = /* @__PURE__ */ ge(yf);
function _f({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  }));
}
const xf = /* @__PURE__ */ ge(_f);
function Cf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Sf = /* @__PURE__ */ ge(Cf);
function Ef({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const Rf = /* @__PURE__ */ ge(Ef);
function $f({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const ls = /* @__PURE__ */ ge($f);
function Tf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const If = /* @__PURE__ */ ge(Tf);
function Ff({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const Of = /* @__PURE__ */ ge(Ff);
function Mf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const ss = /* @__PURE__ */ ge(Mf), Pf = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options" } }, kf = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, uploader: { dragAndDrop: "Drag and drop your file here", fileSizeLimit: "Limit {{limit}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, Af = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", mappingsNotValidTooltip: "Please set all required mappings", incomingColumn: "Incoming column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}" }, Lf = { validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, Nf = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, Df = {
  components: Pf,
  importer: kf,
  mapper: Af,
  sheet: Lf,
  validators: Nf
}, Hf = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options" } }, Vf = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, uploader: { dragAndDrop: "Glissez et déposez votre fichier ici", fileSizeLimit: "Limite {{limit}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, zf = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", mappingsNotValidTooltip: "Veuillez définir toutes les mappings requis", incomingColumn: "Colonne entrante", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}" }, Bf = { validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, jf = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, Uf = {
  components: Hf,
  importer: Vf,
  mapper: zf,
  sheet: Bf,
  validators: jf
}, Wf = {
  en: Df,
  fr: Uf
}, Gf = "en";
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
function qf(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Kf(e, t) {
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
function Yf({
  children: e,
  selectedLocale: t
}) {
  const n = t ?? Gf;
  function r(i, l = {}) {
    const s = gi(n, i);
    return qf(s, l);
  }
  function o(i, l = {}) {
    const s = gi(n, i);
    return Kf(s, l);
  }
  return /* @__PURE__ */ y(as.Provider, { value: { t: r, tHtml: o }, children: e });
}
function ke() {
  return ue(as);
}
function Dr({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: l,
  variant: s = "default"
}) {
  const { t: a } = ke(), u = {
    danger: {
      icon: /* @__PURE__ */ y(
        Sf,
        {
          className: "text-danger size-6",
          "aria-hidden": "true"
        }
      ),
      btnVariant: "danger",
      bgColor: "bg-danger-extra-light"
    },
    default: {
      btnVariant: "primary"
    }
  }, { icon: c, btnVariant: p, bgColor: f } = u[s];
  return /* @__PURE__ */ y(cf, { open: e, onClose: t, className: "relative z-10", children: [
    /* @__PURE__ */ y(
      uf,
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
const Xf = ge(function({ children: t }, n) {
  return /* @__PURE__ */ y(
    "div",
    {
      ref: n,
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
function Zf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Qf = /* @__PURE__ */ ge(Zf);
function Jf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ep = /* @__PURE__ */ ge(Jf);
function tp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const np = /* @__PURE__ */ ge(tp);
function rp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const op = /* @__PURE__ */ ge(rp);
function ip({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const us = /* @__PURE__ */ ge(ip), cs = ge(
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
          className: `${i} ${o != null ? "pl-10" : ""} ${l ? "pr-10" : ""} focus:outline-primary col-start-1 row-start-1 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`,
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
function ln({
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
  const { t: c } = ke(), [p, f] = j(""), d = (h) => r && Array.isArray(e) ? e.some((_) => o(_, h)) : o(e, h), g = (h) => {
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
  return /* @__PURE__ */ y(Td, { value: e, onChange: g, multiple: r, children: /* @__PURE__ */ y("div", { className: "relative", children: [
    /* @__PURE__ */ y(Ar, { className: "w-full", children: /* @__PURE__ */ y(
      ql,
      {
        className: `${a} focus:outline-primary block w-full cursor-pointer truncate rounded-md bg-white py-1.5 focus:cursor-text ${w ? "pr-12" : "pr-2"} pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm`,
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
    /* @__PURE__ */ y(Ar, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ y(
      np,
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
                className: "group data-focus:bg-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden",
                children: [
                  E.icon,
                  /* @__PURE__ */ y("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: E.label }),
                  d(E.value) && /* @__PURE__ */ y("span", { className: "text-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white", children: /* @__PURE__ */ y(Qf, { "aria-hidden": "true", className: "h-5 w-5" }) })
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
function lp({ tabs: e, activeTab: t, onTabChange: n }) {
  return /* @__PURE__ */ y("div", { children: [
    /* @__PURE__ */ y("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ y(
      ln,
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
        className: ` ${r.value === t ? "border-primary text-primary" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} flex cursor-pointer items-center border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`,
        children: [
          r.icon,
          r.label
        ]
      },
      r.label
    )) }) }) })
  ] });
}
const sp = Dt(
  "bg-gray-50 text-gray-900 absolute outline top-full w-full whitespace-normal z-5 mb-2 hidden px-2 py-4 text-xs group-focus-within:block group-hover:block",
  {
    variants: {
      variant: {
        error: "outline-danger",
        info: "outline-gray-500"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), ap = Dt("group relative h-full w-full", {
  variants: {
    variant: {
      error: "focus-within:outline-danger hover:outline-danger",
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
function up({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = sp({ variant: e }), o = ap({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ y("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ y("span", { className: r, children: n })
  ] });
}
const cp = Dt(
  "relative inline-flex cursor-pointer items-center px-3 py-2 text-sm font-semibold ring-gray-300 ring-1 ring-inset focus:z-10",
  {
    variants: {
      active: {
        true: "",
        false: "bg-white hover:bg-gray-50"
      },
      variant: {
        default: "",
        danger: "text-danger"
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
        className: "bg-danger text-white"
      },
      {
        active: !1,
        variant: "default",
        className: "text-gray-900"
      },
      {
        active: !1,
        variant: "danger",
        className: "text-danger"
      }
    ]
  }
);
function dp({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ y("span", { className: "isolate inline-flex rounded-md shadow-xs", children: t.map((n, r) => /* @__PURE__ */ y(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      className: cp({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const fp = Dt(
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
function Ot({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r = !1
}) {
  const o = fp({ hidden: r });
  return /* @__PURE__ */ y("div", { className: `${n} group relative`, children: [
    t,
    /* @__PURE__ */ y("div", { className: o, children: [
      e,
      /* @__PURE__ */ y("div", { className: "absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900" })
    ] })
  ] });
}
const pp = Dt("inline-flex items-center rounded-md px-1.5 py-0.5", {
  variants: {
    variant: {
      primary: "bg-primary-extra-light text-xs font-medium"
    },
    defaultVariants: {
      variant: "primary"
    }
  }
});
function ds({ children: e, variant: t }) {
  const n = pp({ variant: t });
  return /* @__PURE__ */ y("div", { className: n, children: e });
}
const gp = 100, fs = 5, dr = ["text/csv"], mi = ",", mp = 500;
function hp({ setFile: e }) {
  const { t, tHtml: n } = ke(), r = V(null), o = (l) => {
    var a;
    const s = l.target;
    if ((a = s.files) != null && a.length) {
      const u = s.files[0];
      dr.includes(u.type) && e(u);
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
          dr.includes(a.type) && e(a);
        }
      },
      children: [
        /* @__PURE__ */ y("div", { className: "p-7.5", children: /* @__PURE__ */ y("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ y(bf, { className: "text-primary mb-3 h-12 w-12" }),
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
            accept: dr.join(","),
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
    Ae(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class vp extends Rt {
  constructor(n) {
    super(n);
    Ae(this, "key");
    Ae(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
function wp(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class Yn extends Rt {
  constructor(n) {
    super(n);
    Ae(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(wp(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test(n == null ? void 0 : n.toString()))
      return this.definition.error || "validators.regex";
  }
}
class yp extends Yn {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "email"
    });
  }
}
class bp extends Rt {
  constructor(n) {
    super(n);
    Ae(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (!this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class _p extends Rt {
  isValid(t) {
    if (!(!isNaN(t) && t !== null && t !== void 0))
      return this.definition.error || "validators.integer";
  }
}
class xp extends Rt {
  constructor(n) {
    super(n);
    Ae(this, "delimiter");
    Ae(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    if ((n == null ? void 0 : n.toString().split(this.delimiter)).some((o) => !this.values.includes(o.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class Cp extends Yn {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "phone_number"
    });
  }
}
class Sp extends Yn {
  constructor() {
    super({
      regex: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      validate: "postal_code"
    });
  }
}
class Ep extends Rt {
  isValid(t) {
    if (!t)
      return this.definition.error || "validators.required";
  }
}
class Rp extends Rt {
  constructor(n) {
    super(n);
    Ae(this, "seen");
    this.seen = {};
  }
  isValid(n) {
    if (n in this.seen)
      return this.definition.error || "validators.unique";
    this.seen[n] = !0;
  }
}
function $p(e) {
  const t = {
    regex_matches: Yn,
    required: Ep,
    unique: Rp,
    includes: bp,
    multi_includes: xp,
    is_integer: _p,
    postal_code: Sp,
    phone_number: Cp,
    email: yp,
    custom: vp
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
const Tp = (e) => e == null, Ip = (e) => e.rows.filter((t) => Object.keys(t).length > 0), Fp = (e) => Tp(e) || e === "", hi = (e) => [...new Set(e)];
function Mn(e) {
  return e == null ? null : e.toString().toLowerCase().replace("_", "").replace(" ", "");
}
function hs(e, t) {
  var o, i, l;
  const n = e.typeArguments, r = t.find(
    (s) => s.sheetId === n.sheetId
  );
  return ((l = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((s) => s[n.sheetColumnId])) == null ? void 0 : i.filter((s) => !Fp(s))) == null ? void 0 : l.filter((s, a, u) => u.indexOf(s) === a)) ?? [];
}
function Op(e, t) {
  const n = e.columns.map((a) => a.id).join(mi), r = t.map(
    (a) => e.columns.map((u) => a[u.id]).join(mi)
  ), o = [n, ...r].join(`
`), i = new Blob([o], { type: "text/csv" }), l = URL.createObjectURL(i), s = document.createElement("a");
  s.href = l, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(l);
}
function vs(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function Mp(e, t, n, r, o, i, l) {
  return W(() => {
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
          return (p = Mn(c)) == null ? void 0 : p.includes(Mn(l));
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
function Xn(e) {
  return e.validators && e.validators.length > 0 ? !!e.validators.find(
    (n) => n.validate === "required"
  ) : !1;
}
function Pp(e, t) {
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
      ...Pp(i, n)
    ].forEach((a) => {
      l[i.id].push(
        $p(a)
      );
    });
  });
  return e.columns.forEach((i) => {
    t.rows.forEach((l, s) => {
      if (!ms(l) || !(i.id in l) && !Xn(i))
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
function fr(e, t) {
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
function Ap(e) {
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
      ].map((a) => Mn(a)), s = Mn(r);
      return l.includes(s);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const Np = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = Lp(r, t);
    n.push(...o);
  }), Ap(n);
};
function Dp(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Hp(e, t) {
  const n = Vp(e, t), r = zp(n);
  return Bp(r);
}
function Vp(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, fs);
}
function zp(e) {
  return [
    ...e,
    ...Array(fs - e.length).fill("")
  ];
}
function Bp(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > mp && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function jp(e, t) {
  const { t: n } = ke();
  return e.flatMap(
    (o) => o.columns.filter((i) => i.type !== "reference").map((i) => ({
      label: `${i.label}${Xn(i) ? " *" : ""}`,
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
      if (Xn(r) && r.type !== "reference" && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function Gp({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = ke();
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
function qp({
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
      className: "hover:bg-tertiary-light rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ y("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ y("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(ds, { variant: "primary", children: e.slice(0, 30) }) }),
          /* @__PURE__ */ y("div", { className: "mx-5", children: /* @__PURE__ */ y(gf, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ y("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ y(
          ln,
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
function Kp({
  parsed: e,
  sheetDefinitions: t,
  currentMapping: n,
  onMappingsChanged: r,
  onMappingsSet: o,
  onBack: i
}) {
  const { t: l } = ke(), [s, a] = j(null), u = e.data, c = e.meta.fields, p = jp(
    t,
    n
  ), f = Wp(
    t,
    n
  ), d = W(() => s ? Hp(u, s) : [], [s, u]);
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
            qp,
            {
              csvHeader: g,
              currentMapping: v,
              setMapping: (b) => {
                const C = Dp(
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
        Gp,
        {
          examples: d,
          csvHeader: s ?? ""
        }
      ) })
    ] }),
    /* @__PURE__ */ y("div", { className: "my-5 flex justify-between", children: [
      /* @__PURE__ */ y(Ke, { variant: "secondary", outline: !0, onClick: i, children: l("mapper.back") }),
      /* @__PURE__ */ y(
        Ot,
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
function Yp() {
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
function Zn(e) {
  return e instanceof Function;
}
function Xp(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Zp(e, t) {
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
    key: !1,
    onChange: r
  };
}
function Qp(e, t, n, r) {
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
    }), X(e.options, "debugCells"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, n, t, e);
  }, {}), i;
}
function Jp(e, t, n, r) {
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
      d = (g = d) == null ? void 0 : g[m];
    }
    return d;
  } : c = (f) => f[s.accessorKey]), !u)
    throw new Error();
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
    }, X(e.options, "debugColumns")),
    getLeafColumns: Y(() => [e._getOrderColumnsFn()], (f) => {
      var d;
      if ((d = p.columns) != null && d.length) {
        let g = p.columns.flatMap((m) => m.getLeafColumns());
        return f(g);
      }
      return [p];
    }, X(e.options, "debugColumns"))
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
const eg = {
  createTable: (e) => {
    e.getHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, l;
      const s = (i = r == null ? void 0 : r.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? l : [], u = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return wn(t, [...s, ...u, ...a], e);
    }, X(e.options, Re)), e.getCenterHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), wn(t, n, e, "center")), X(e.options, Re)), e.getLeftHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return wn(t, i, e, "left");
    }, X(e.options, Re)), e.getRightHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return wn(t, i, e, "right");
    }, X(e.options, Re)), e.getFooterGroups = Y(() => [e.getHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re)), e.getLeftFooterGroups = Y(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re)), e.getCenterFooterGroups = Y(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re)), e.getRightFooterGroups = Y(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), X(e.options, Re)), e.getFlatHeaders = Y(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re)), e.getLeftFlatHeaders = Y(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re)), e.getCenterFlatHeaders = Y(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re)), e.getRightFlatHeaders = Y(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Re)), e.getCenterLeafHeaders = Y(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Re)), e.getLeftLeafHeaders = Y(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Re)), e.getRightLeafHeaders = Y(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Re)), e.getLeafHeaders = Y(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, l, s, a, u;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []].map((c) => c.getLeafHeaders()).flat();
    }, X(e.options, Re));
  }
};
function wn(e, t, n, r) {
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
const tg = (e, t, n, r, o, i, l) => {
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
    getLeafRows: () => Zp(s.subRows, (a) => a.subRows),
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
    getAllCells: Y(() => [e.getAllLeafColumns()], (a) => a.map((u) => Qp(e, s, u, u.id)), X(e.options, "debugRows")),
    _getAllCellsByColumnId: Y(() => [s.getAllCells()], (a) => a.reduce((u, c) => (u[c.column.id] = c, u), {}), X(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, ng = {
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
const mo = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
mo.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
mo.autoRemove = (e) => ze(e) || ze(e[0]) && ze(e[1]);
const et = {
  includesString: ws,
  includesStringSensitive: ys,
  equalsString: bs,
  arrIncludes: _s,
  arrIncludesAll: xs,
  arrIncludesSome: Cs,
  equals: Ss,
  weakEquals: Es,
  inNumberRange: mo
};
function ze(e) {
  return e == null || e === "";
}
const rg = {
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
      return Zn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
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
const og = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), ig = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, lg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, sg = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, ag = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, ug = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Xp(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, cg = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), dg = (e, t) => new Set(t.map((n) => n.getValue(e))).size, fg = (e, t) => t.length, pr = {
  sum: og,
  min: ig,
  max: lg,
  extent: sg,
  mean: ag,
  median: ug,
  unique: cg,
  uniqueCount: dg,
  count: fg
}, pg = {
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
        return pr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return pr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Zn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : pr[e.columnDef.aggregationFn];
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
function gg(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const mg = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: De("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = Y((n) => [Jt(t, n)], (n) => n.findIndex((r) => r.id === e.id), X(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
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
      return gg(i, n, r);
    }, X(e.options, "debugTable"));
  }
}, gr = () => ({
  left: [],
  right: []
}), hg = {
  getInitialState: (e) => ({
    columnPinning: gr(),
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
    }, X(t.options, "debugRows")), e.getLeftVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), X(t.options, "debugRows")), e.getRightVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), X(t.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? gr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : gr());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns")), e.getRightLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns")), e.getCenterLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, X(e.options, "debugColumns"));
  }
}, yn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, mr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), vg = {
  getDefaultColumnDef: () => yn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: mr(),
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : yn.minSize, (r = i ?? e.columnDef.size) != null ? r : yn.size), (o = e.columnDef.maxSize) != null ? o : yn.maxSize);
    }, e.getStart = Y((n) => [n, Jt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.getAfter = Y((n) => [n, Jt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), hr(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], a = hr(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (b, C) => {
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
        }, v = wg() ? {
          passive: !1
        } : !1;
        hr(i) ? (d == null || d.addEventListener("touchmove", m.moveHandler, v), d == null || d.addEventListener("touchend", m.upHandler, v)) : (d == null || d.addEventListener("mousemove", g.moveHandler, v), d == null || d.addEventListener("mouseup", g.upHandler, v)), t.setColumnSizingInfo((b) => ({
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
      e.setColumnSizingInfo(t ? mr() : (n = e.initialState.columnSizingInfo) != null ? n : mr());
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
let bn = null;
function wg() {
  if (typeof bn == "boolean") return bn;
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
  return bn = e, bn;
}
function hr(e) {
  return e.type === "touchstart";
}
const yg = {
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
    e._getAllVisibleCells = Y(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), X(t.options, "debugRows")), e.getVisibleCells = Y(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], X(t.options, "debugRows"));
  },
  createTable: (e) => {
    const t = (n, r) => Y(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), X(e.options, "debugColumns"));
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
const bg = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, _g = {
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
      return Zn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : et[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, xg = {
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
}, Hr = 0, Vr = 10, vr = () => ({
  pageIndex: Hr,
  pageSize: Vr
}), Cg = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...vr(),
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
      e.setPagination(r ? vr() : (o = e.initialState.pagination) != null ? o : vr());
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
      e.setPageSize(r ? Vr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Vr);
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
    }, X(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, wr = () => ({
  top: [],
  bottom: []
}), Sg = {
  getInitialState: (e) => ({
    rowPinning: wr(),
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
      return e.setRowPinning(t ? wr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : wr());
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
    }, e.getTopRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), X(e.options, "debugRows")), e.getBottomRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), X(e.options, "debugRows")), e.getCenterRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, X(e.options, "debugRows"));
  }
}, Eg = {
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
        zr(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Y(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? yr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getFilteredSelectedRowModel = Y(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? yr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getGroupedSelectedRowModel = Y(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? yr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
        return zr(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ho(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Br(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Br(e, n) === "all";
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
}, zr = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, !0);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => zr(e, s.id, n, r, o));
};
function yr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var u;
      const c = ho(a, n);
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
function ho(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Br(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (ho(l, t) ? i = !0 : o = !1), l.subRows && l.subRows.length)) {
      const s = Br(l, t);
      s === "all" ? i = !0 : (s === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const jr = /([0-9]+)/gm, Rg = (e, t, n) => Rs(ft(e.getValue(n)).toLowerCase(), ft(t.getValue(n)).toLowerCase()), $g = (e, t, n) => Rs(ft(e.getValue(n)), ft(t.getValue(n))), Tg = (e, t, n) => vo(ft(e.getValue(n)).toLowerCase(), ft(t.getValue(n)).toLowerCase()), Ig = (e, t, n) => vo(ft(e.getValue(n)), ft(t.getValue(n))), Fg = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Og = (e, t, n) => vo(e.getValue(n), t.getValue(n));
function vo(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function ft(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Rs(e, t) {
  const n = e.split(jr).filter(Boolean), r = t.split(jr).filter(Boolean);
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
  alphanumeric: Rg,
  alphanumericCaseSensitive: $g,
  text: Tg,
  textCaseSensitive: Ig,
  datetime: Fg,
  basic: Og
}, Mg = {
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
        if (typeof i == "string" && (r = !0, i.split(jr).length > 1))
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
      return Zn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : qt[e.columnDef.sortingFn];
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
}, Pg = [
  eg,
  yg,
  mg,
  hg,
  ng,
  rg,
  bg,
  //depends on ColumnFaceting
  _g,
  //depends on ColumnFiltering
  Mg,
  pg,
  //depends on RowSorting
  xg,
  Cg,
  Sg,
  Eg,
  vg
];
function kg(e) {
  var t, n;
  const r = [...Pg, ...(t = e._features) != null ? t : []];
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
        throw new Error();
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
    }, X(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: Y(() => [o._getColumnDefs()], (f) => {
      const d = function(g, m, v) {
        return v === void 0 && (v = 0), g.map((b) => {
          const C = Jp(o, b, v, m), x = b;
          return C.columns = x.columns ? d(x.columns, C, v + 1) : [], C;
        });
      };
      return d(f);
    }, X(e, "debugColumns")),
    getAllFlatColumns: Y(() => [o.getAllColumns()], (f) => f.flatMap((d) => d.getFlatColumns()), X(e, "debugColumns")),
    _getAllFlatColumnsById: Y(() => [o.getAllFlatColumns()], (f) => f.reduce((d, g) => (d[g.id] = g, d), {}), X(e, "debugColumns")),
    getAllLeafColumns: Y(() => [o.getAllColumns(), o._getOrderColumnsFn()], (f, d) => {
      let g = f.flatMap((m) => m.getLeafColumns());
      return d(g);
    }, X(e, "debugColumns")),
    getColumn: (f) => o._getAllFlatColumnsById()[f]
  };
  Object.assign(o, p);
  for (let f = 0; f < o._features.length; f++) {
    const d = o._features[f];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function Ag() {
  return (e) => Y(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let u = 0; u < o.length; u++) {
        const c = tg(e, e._getRowId(o[u], u, l), o[u], u, i, void 0, l == null ? void 0 : l.id);
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
function Ng(e, t) {
  return e ? Dg(e) ? /* @__PURE__ */ H(e, t) : e : null;
}
function Dg(e) {
  return Hg(e) || typeof e == "function" || Vg(e);
}
function Hg(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Vg(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function zg(e) {
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
function Bg({
  columnDefinition: e,
  value: t,
  onUpdated: n,
  allData: r,
  clearRowsSelection: o,
  errorsText: i
}) {
  var v;
  const { t: l } = ke(), [s, a] = j(!1), u = V(null);
  oe(() => {
    s && (o(), u.current && u.current.focus());
  }, [s]);
  const c = e.type === "enum" ? ((v = e.typeArguments.values.find((b) => b.value === t)) == null ? void 0 : v.label) ?? t : t, f = c == null || typeof c == "string" && c.trim() === "" ? " " : c, d = e.isReadOnly, g = i ? "bg-danger-extra-light" : d ? "bg-gray-100" : "";
  if (!s)
    return /* @__PURE__ */ y(
      up,
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
      ln,
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
      ln,
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
function jg({
  table: e,
  sheetDefinition: t,
  visibleData: n,
  allData: r,
  sheetValidationErrors: o,
  onCellValueChanged: i,
  selectedRows: l,
  setSelectedRows: s
}) {
  const { t: a } = ke();
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
        Do,
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
            v.isPlaceholder ? null : Ng(
              v.column.columnDef.header,
              v.getContext()
            ),
            /* @__PURE__ */ y("span", { className: "ml-2 flex-none rounded-sm bg-gray-500 text-gray-200", children: {
              asc: /* @__PURE__ */ y(
                op,
                {
                  "aria-hidden": "true",
                  className: "size-5"
                }
              ),
              desc: /* @__PURE__ */ y(
                ep,
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
            Do,
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
          Bg,
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
  const { t } = ke();
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
        Xn(e) && "*"
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
  const { t: m } = ke(), [v, b] = j(!1), [C, x] = j(!1), R = "pointer-events-none cursor-not-allowed opacity-50";
  function T(h) {
    const _ = e.columns.find(
      (I) => I.id === h
    ), E = hi(
      f.filter((I) => I.columnId === h).map((I) => I.rowIndex)
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
      /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y(dp, { activeButton: o, buttons: $ }) }),
      /* @__PURE__ */ y(
        cs,
        {
          clearable: !0,
          value: l,
          onChange: (h) => s(h),
          placeholder: m("sheet.search"),
          iconBuilder: (h) => /* @__PURE__ */ y(Rf, { ...h })
        }
      ),
      /* @__PURE__ */ y(
        Ot,
        {
          tooltipText: m(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ y(
            Of,
            {
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : R}`,
              onClick: () => b(!0)
            }
          )
        }
      ),
      /* @__PURE__ */ y(Ot, { tooltipText: m("sheet.addRowsTooltip"), children: /* @__PURE__ */ y(If, { className: "h-6 w-6 cursor-pointer", onClick: p }) }),
      /* @__PURE__ */ y(Ot, { tooltipText: m("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ y(
        ff,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : R}`,
          onClick: () => Op(e, t)
        }
      ) }),
      /* @__PURE__ */ y(
        ln,
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
        Dr,
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
    /* @__PURE__ */ y(Ot, { className: "ml-5", tooltipText: m("sheet.resetTooltip"), children: /* @__PURE__ */ y(
      ss,
      {
        className: "h-6 w-6 cursor-pointer",
        onClick: () => x(!0)
      }
    ) }),
    /* @__PURE__ */ y(
      Dr,
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
const Gg = Yp();
function qg({
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
  const v = Mp(
    t,
    n,
    c,
    r,
    g,
    e,
    f
  ), b = W(() => {
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
  }, [t, r]), C = W(
    () => e.columns.map(
      (T) => Gg.accessor(T.id, {
        header: () => /* @__PURE__ */ y(Ug, { column: T }),
        sortUndefined: "last",
        sortingFn: "auto"
      })
    ),
    [e]
  ), x = zg({
    data: v,
    columns: C,
    getCoreRowModel: Ag(),
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
      jg,
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
function Kg({
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
      className: `border-success h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
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
        className: "stroke-success transition-[stroke-dashoffset] duration-500"
      }
    )
  ] });
}
function Yg() {
  return /* @__PURE__ */ y(wf, { className: "text-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Xg({ progress: e, pending: t, resetState: n }) {
  const { t: r } = ke();
  return /* @__PURE__ */ y("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ y("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ y(Kg, { progress: e, pending: t }),
      t && /* @__PURE__ */ y("div", { children: [
        /* @__PURE__ */ y("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ y("b", { className: "text-lg", children: [
          e,
          "%"
        ] }) }),
        /* @__PURE__ */ y("h2", { className: "text-2xl", children: r("importer.loader.uploading") })
      ] }),
      !t && /* @__PURE__ */ y(Yg, {})
    ] }),
    !t && /* @__PURE__ */ y("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ y("h2", { className: "text-2xl", children: r("importer.loader.success") }),
      /* @__PURE__ */ y("div", { className: "h-5" }),
      /* @__PURE__ */ y(Ke, { variant: "secondary", onClick: n, children: r("sheet.reset") })
    ] })
  ] });
}
function Zg({ onRetry: e, onBackToPreview: t }) {
  const { t: n } = ke();
  return /* @__PURE__ */ y("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ y("div", { className: "relative mx-auto h-24 w-24", children: /* @__PURE__ */ y(xf, { className: "text-danger" }) }),
    /* @__PURE__ */ y("p", { className: "mb-8 text-2xl", children: n("importer.loader.failed") }),
    /* @__PURE__ */ y(Ke, { onClick: e, variant: "primary", children: /* @__PURE__ */ y("div", { className: "flex items-center", children: [
      /* @__PURE__ */ y(hf, { className: "mr-3 h-4 w-4" }),
      n("importer.loader.retry")
    ] }) }),
    /* @__PURE__ */ y("div", { className: "mt-3" }),
    /* @__PURE__ */ y(Ke, { onClick: t, variant: "tertiary", children: /* @__PURE__ */ y("div", { className: "flex items-center", children: [
      /* @__PURE__ */ y(ls, { className: "mr-3 h-4 w-4" }),
      n("importer.loader.backToPreview")
    ] }) })
  ] });
}
function Qg({
  progress: e,
  mode: t,
  onRetry: n,
  onBackToPreview: r,
  resetState: o
}) {
  const i = t === "failed", l = t === "submit";
  return i ? /* @__PURE__ */ y(Zg, { onRetry: n, onBackToPreview: r }) : /* @__PURE__ */ y(Xg, { progress: e, pending: l, resetState: o });
}
async function yi(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
class mn {
  constructor(t) {
    Ae(this, "definition");
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
class Jg extends mn {
  constructor(n) {
    super(n);
    Ae(this, "key");
    Ae(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class em extends mn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class tm extends mn {
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
class nm extends mn {
  parse(t) {
    const n = bi.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && ps(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return bi[r][1];
    }
  }
}
class rm extends mn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function om(e) {
  const t = {
    phone_number: em,
    postal_code: tm,
    state_code: nm,
    strip: rm,
    custom: Jg
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function im(e, t) {
  const n = gs(
    e.columns,
    (r, o) => {
      o[r.id] = new lm(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          om(i)
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
      const i = im(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class lm {
  // Series of transformations
  constructor(t = []) {
    Ae(this, "steps");
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
const sm = (e, t) => {
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
        validationErrors: fr(
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
        validationErrors: fr(e.sheetDefinitions, r)
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
        validationErrors: fr(e.sheetDefinitions, n)
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
}, am = ({
  theme: e,
  children: t
}) => (oe(() => {
  e && document.documentElement.setAttribute("csv-importer-data-theme", e);
}, [e]), /* @__PURE__ */ y(ve, { children: t }));
function um(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var cm = Cn.exports, _i;
function dm() {
  return _i || (_i = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(cm, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, l = r.IS_PAPA_WORKER || !1, s = {}, a = 0, u = {};
      function c(w) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(h) {
          var _ = T(h);
          _.chunkSize = parseInt(_.chunkSize), h.step || h.chunk || (_.chunkSize = null), this._handle = new m(_), (this._handle.streamer = this)._config = _;
        }).call(this, w), this.parseChunk = function(h, _) {
          var E = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < E) {
            let k = this._config.newline;
            k || (I = this._config.quoteChar || '"', k = this._handle.guessLineEndings(h, I)), h = [...h.split(k).slice(E)].join(k);
          }
          this.isFirstChunk && $(this._config.beforeFirstChunk) && (I = this._config.beforeFirstChunk(h)) !== void 0 && (h = I), this.isFirstChunk = !1, this._halted = !1;
          var E = this._partialLine + h, I = (this._partialLine = "", this._handle.parse(E, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (h = I.meta.cursor, E = (this._finished || (this._partialLine = E.substring(h - this._baseIndex), this._baseIndex = h), I && I.data && (this._rowCount += I.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), l) r.postMessage({ results: I, workerId: u.WORKER_ID, finished: E });
            else if ($(this._config.chunk) && !_) {
              if (this._config.chunk(I, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = I = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(I.data), this._completeResults.errors = this._completeResults.errors.concat(I.errors), this._completeResults.meta = I.meta), this._completed || !E || !$(this._config.complete) || I && I.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), E || I && I.meta.paused || this._nextChunk(), I;
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
            var I;
            this._config.chunkSize && (I = this._start + this._config.chunkSize - 1, h.setRequestHeader("Range", "bytes=" + this._start + "-" + I));
            try {
              h.send(this._config.downloadRequestBody);
            } catch (k) {
              this._chunkError(k.message);
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
        this.stream = function(I) {
          this._input = I, _ = I.slice || I.webkitSlice || I.mozSlice, E ? ((h = new FileReader()).onload = M(this._chunkLoaded, this), h.onerror = M(this._chunkError, this)) : h = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var I = this._input, k = (this._config.chunkSize && (k = Math.min(this._start + this._config.chunkSize, this._input.size), I = _.call(I, this._start, k)), h.readAsText(I, this._config.encoding));
          E || this._chunkLoaded({ target: { result: k } });
        }, this._chunkLoaded = function(I) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(I.target.result);
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
        }, this.stream = function(I) {
          this._input = I, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          E && h.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), h.length ? this.parseChunk(h.shift()) : _ = !0;
        }, this._streamData = M(function(I) {
          try {
            h.push(typeof I == "string" ? I : I.toString(this._config.encoding)), _ && (_ = !1, this._checkIsFinished(), this.parseChunk(h.shift()));
          } catch (k) {
            this._streamError(k);
          }
        }, this), this._streamError = M(function(I) {
          this._streamCleanUp(), this._sendError(I);
        }, this), this._streamEnd = M(function() {
          this._streamCleanUp(), E = !0, this._streamData("");
        }, this), this._streamCleanUp = M(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function m(w) {
        var h, _, E, I, k = Math.pow(2, 53), P = -k, G = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, K = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, F = this, A = 0, O = 0, te = !1, N = !1, B = [], S = { data: [], errors: [], meta: {} };
        function ie(U) {
          return w.skipEmptyLines === "greedy" ? U.join("").trim() === "" : U.length === 1 && U[0].length === 0;
        }
        function ee() {
          if (S && E && (re("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), E = !1), w.skipEmptyLines && (S.data = S.data.filter(function(Z) {
            return !ie(Z);
          })), se()) {
            let Z = function(fe, we) {
              $(w.transformHeader) && (fe = w.transformHeader(fe, we)), B.push(fe);
            };
            if (S) if (Array.isArray(S.data[0])) {
              for (var U = 0; se() && U < S.data.length; U++) S.data[U].forEach(Z);
              S.data.splice(0, 1);
            } else S.data.forEach(Z);
          }
          function J(Z, fe) {
            for (var we = w.header ? {} : [], D = 0; D < Z.length; D++) {
              var q = D, Q = Z[D], Q = ((Se, ne) => ((me) => (w.dynamicTypingFunction && w.dynamicTyping[me] === void 0 && (w.dynamicTyping[me] = w.dynamicTypingFunction(me)), (w.dynamicTyping[me] || w.dynamicTyping) === !0))(Se) ? ne === "true" || ne === "TRUE" || ne !== "false" && ne !== "FALSE" && (((me) => {
                if (G.test(me) && (me = parseFloat(me), P < me && me < k))
                  return 1;
              })(ne) ? parseFloat(ne) : K.test(ne) ? new Date(ne) : ne === "" ? null : ne) : ne)(q = w.header ? D >= B.length ? "__parsed_extra" : B[D] : q, Q = w.transform ? w.transform(Q, q) : Q);
              q === "__parsed_extra" ? (we[q] = we[q] || [], we[q].push(Q)) : we[q] = Q;
            }
            return w.header && (D > B.length ? re("FieldMismatch", "TooManyFields", "Too many fields: expected " + B.length + " fields but parsed " + D, O + fe) : D < B.length && re("FieldMismatch", "TooFewFields", "Too few fields: expected " + B.length + " fields but parsed " + D, O + fe)), we;
          }
          var de;
          S && (w.header || w.dynamicTyping || w.transform) && (de = 1, !S.data.length || Array.isArray(S.data[0]) ? (S.data = S.data.map(J), de = S.data.length) : S.data = J(S.data, 0), w.header && S.meta && (S.meta.fields = B), O += de);
        }
        function se() {
          return w.header && B.length === 0;
        }
        function re(U, J, de, Z) {
          U = { type: U, code: J, message: de }, Z !== void 0 && (U.row = Z), S.errors.push(U);
        }
        $(w.step) && (I = w.step, w.step = function(U) {
          S = U, se() ? ee() : (ee(), S.data.length !== 0 && (A += U.data.length, w.preview && A > w.preview ? _.abort() : (S.data = S.data[0], I(S, F))));
        }), this.parse = function(U, J, de) {
          var Z = w.quoteChar || '"', Z = (w.newline || (w.newline = this.guessLineEndings(U, Z)), E = !1, w.delimiter ? $(w.delimiter) && (w.delimiter = w.delimiter(U), S.meta.delimiter = w.delimiter) : ((Z = ((fe, we, D, q, Q) => {
            var Se, ne, me, it;
            Q = Q || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var $t = 0; $t < Q.length; $t++) {
              for (var je, Ut = Q[$t], Ee = 0, Ue = 0, _e = 0, Me = (me = void 0, new b({ comments: q, delimiter: Ut, newline: we, preview: 10 }).parse(fe)), Je = 0; Je < Me.data.length; Je++) D && ie(Me.data[Je]) ? _e++ : (je = Me.data[Je].length, Ue += je, me === void 0 ? me = je : 0 < je && (Ee += Math.abs(je - me), me = je));
              0 < Me.data.length && (Ue /= Me.data.length - _e), (ne === void 0 || Ee <= ne) && (it === void 0 || it < Ue) && 1.99 < Ue && (ne = Ee, Se = Ut, it = Ue);
            }
            return { successful: !!(w.delimiter = Se), bestDelimiter: Se };
          })(U, w.newline, w.skipEmptyLines, w.comments, w.delimitersToGuess)).successful ? w.delimiter = Z.bestDelimiter : (E = !0, w.delimiter = u.DefaultDelimiter), S.meta.delimiter = w.delimiter), T(w));
          return w.preview && w.header && Z.preview++, h = U, _ = new b(Z), S = _.parse(h, J, de), ee(), te ? { meta: { paused: !0 } } : S || { meta: { paused: !1 } };
        }, this.paused = function() {
          return te;
        }, this.pause = function() {
          te = !0, _.abort(), h = $(w.chunk) ? "" : h.substring(_.getCharIndex());
        }, this.resume = function() {
          F.streamer._halted ? (te = !1, F.streamer.parseChunk(h, !0)) : setTimeout(F.resume, 3);
        }, this.aborted = function() {
          return N;
        }, this.abort = function() {
          N = !0, _.abort(), S.meta.aborted = !0, $(w.complete) && w.complete(S), h = "";
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
        var h = (w = w || {}).delimiter, _ = w.newline, E = w.comments, I = w.step, k = w.preview, P = w.fastMode, G = null, K = !1, F = w.quoteChar == null ? '"' : w.quoteChar, A = F;
        if (w.escapeChar !== void 0 && (A = w.escapeChar), (typeof h != "string" || -1 < u.BAD_DELIMITERS.indexOf(h)) && (h = ","), E === h) throw new Error("Comment character same as delimiter");
        E === !0 ? E = "#" : (typeof E != "string" || -1 < u.BAD_DELIMITERS.indexOf(E)) && (E = !1), _ !== `
` && _ !== "\r" && _ !== `\r
` && (_ = `
`);
        var O = 0, te = !1;
        this.parse = function(N, B, S) {
          if (typeof N != "string") throw new Error("Input must be a string");
          var ie = N.length, ee = h.length, se = _.length, re = E.length, U = $(I), J = [], de = [], Z = [], fe = O = 0;
          if (!N) return Ee();
          if (P || P !== !1 && N.indexOf(F) === -1) {
            for (var we = N.split(_), D = 0; D < we.length; D++) {
              if (Z = we[D], O += Z.length, D !== we.length - 1) O += _.length;
              else if (S) return Ee();
              if (!E || Z.substring(0, re) !== E) {
                if (U) {
                  if (J = [], it(Z.split(h)), Ue(), te) return Ee();
                } else it(Z.split(h));
                if (k && k <= D) return J = J.slice(0, k), Ee(!0);
              }
            }
            return Ee();
          }
          for (var q = N.indexOf(h, O), Q = N.indexOf(_, O), Se = new RegExp(v(A) + v(F), "g"), ne = N.indexOf(F, O); ; ) if (N[O] === F) for (ne = O, O++; ; ) {
            if ((ne = N.indexOf(F, ne + 1)) === -1) return S || de.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: J.length, index: O }), je();
            if (ne === ie - 1) return je(N.substring(O, ne).replace(Se, F));
            if (F === A && N[ne + 1] === A) ne++;
            else if (F === A || ne === 0 || N[ne - 1] !== A) {
              q !== -1 && q < ne + 1 && (q = N.indexOf(h, ne + 1));
              var me = $t((Q = Q !== -1 && Q < ne + 1 ? N.indexOf(_, ne + 1) : Q) === -1 ? q : Math.min(q, Q));
              if (N.substr(ne + 1 + me, ee) === h) {
                Z.push(N.substring(O, ne).replace(Se, F)), N[O = ne + 1 + me + ee] !== F && (ne = N.indexOf(F, O)), q = N.indexOf(h, O), Q = N.indexOf(_, O);
                break;
              }
              if (me = $t(Q), N.substring(ne + 1 + me, ne + 1 + me + se) === _) {
                if (Z.push(N.substring(O, ne).replace(Se, F)), Ut(ne + 1 + me + se), q = N.indexOf(h, O), ne = N.indexOf(F, O), U && (Ue(), te)) return Ee();
                if (k && J.length >= k) return Ee(!0);
                break;
              }
              de.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: J.length, index: O }), ne++;
            }
          }
          else if (E && Z.length === 0 && N.substring(O, O + re) === E) {
            if (Q === -1) return Ee();
            O = Q + se, Q = N.indexOf(_, O), q = N.indexOf(h, O);
          } else if (q !== -1 && (q < Q || Q === -1)) Z.push(N.substring(O, q)), O = q + ee, q = N.indexOf(h, O);
          else {
            if (Q === -1) break;
            if (Z.push(N.substring(O, Q)), Ut(Q + se), U && (Ue(), te)) return Ee();
            if (k && J.length >= k) return Ee(!0);
          }
          return je();
          function it(_e) {
            J.push(_e), fe = O;
          }
          function $t(_e) {
            var Me = 0;
            return Me = _e !== -1 && (_e = N.substring(ne + 1, _e)) && _e.trim() === "" ? _e.length : Me;
          }
          function je(_e) {
            return S || (_e === void 0 && (_e = N.substring(O)), Z.push(_e), O = ie, it(Z), U && Ue()), Ee();
          }
          function Ut(_e) {
            O = _e, it(Z), Z = [], Q = N.indexOf(_, O);
          }
          function Ee(_e) {
            if (w.header && !B && J.length && !K) {
              var Me = J[0], Je = {}, Qn = new Set(Me);
              let wo = !1;
              for (let Tt = 0; Tt < Me.length; Tt++) {
                let We = Me[Tt];
                if (Je[We = $(w.transformHeader) ? w.transformHeader(We, Tt) : We]) {
                  let Wt, yo = Je[We];
                  for (; Wt = We + "_" + yo, yo++, Qn.has(Wt); ) ;
                  Qn.add(Wt), Me[Tt] = Wt, Je[We]++, wo = !0, (G = G === null ? {} : G)[Wt] = We;
                } else Je[We] = 1, Me[Tt] = We;
                Qn.add(We);
              }
              wo && console.warn("Duplicate headers found and renamed."), K = !0;
            }
            return { data: J, errors: de, meta: { delimiter: h, linebreak: _, aborted: te, truncated: !!_e, cursor: fe + (B || 0), renamedHeaders: G } };
          }
          function Ue() {
            I(Ee()), J = [], de = [];
          }
        }, this.abort = function() {
          te = !0;
        }, this.getCharIndex = function() {
          return O;
        };
      }
      function C(w) {
        var h = w.data, _ = s[h.workerId], E = !1;
        if (h.error) _.userError(h.error, h.file);
        else if (h.results && h.results.data) {
          var I = { abort: function() {
            E = !0, x(h.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: R, resume: R };
          if ($(_.userStep)) {
            for (var k = 0; k < h.results.data.length && (_.userStep({ data: h.results.data[k], errors: h.results.errors, meta: h.results.meta }, I), !E); k++) ;
            delete h.results;
          } else $(_.userChunk) && (_.userChunk(h.results, I, h.file), delete h.results);
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
            var I = r.URL || r.webkitURL || null, k = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = I.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", k, ")();"], { type: "text/javascript" })));
          })(), (E = new r.Worker(E)).onmessage = C, E.id = a++, s[E.id] = E);
        })()).userStep = h.step, _.userChunk = h.chunk, _.userComplete = h.complete, _.userError = h.error, h.step = $(h.step), h.chunk = $(h.chunk), h.complete = $(h.complete), h.error = $(h.error), delete h.worker, _.postMessage({ input: w, config: h, workerId: _.id });
      }, u.unparse = function(w, h) {
        var _ = !1, E = !0, I = ",", k = `\r
`, P = '"', G = P + P, K = !1, F = null, A = !1, O = ((() => {
          if (typeof h == "object") {
            if (typeof h.delimiter != "string" || u.BAD_DELIMITERS.filter(function(B) {
              return h.delimiter.indexOf(B) !== -1;
            }).length || (I = h.delimiter), typeof h.quotes != "boolean" && typeof h.quotes != "function" && !Array.isArray(h.quotes) || (_ = h.quotes), typeof h.skipEmptyLines != "boolean" && typeof h.skipEmptyLines != "string" || (K = h.skipEmptyLines), typeof h.newline == "string" && (k = h.newline), typeof h.quoteChar == "string" && (P = h.quoteChar), typeof h.header == "boolean" && (E = h.header), Array.isArray(h.columns)) {
              if (h.columns.length === 0) throw new Error("Option columns is empty");
              F = h.columns;
            }
            h.escapeChar !== void 0 && (G = h.escapeChar + P), h.escapeFormulae instanceof RegExp ? A = h.escapeFormulae : typeof h.escapeFormulae == "boolean" && h.escapeFormulae && (A = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(v(P), "g"));
        if (typeof w == "string" && (w = JSON.parse(w)), Array.isArray(w)) {
          if (!w.length || Array.isArray(w[0])) return te(null, w, K);
          if (typeof w[0] == "object") return te(F || Object.keys(w[0]), w, K);
        } else if (typeof w == "object") return typeof w.data == "string" && (w.data = JSON.parse(w.data)), Array.isArray(w.data) && (w.fields || (w.fields = w.meta && w.meta.fields || F), w.fields || (w.fields = Array.isArray(w.data[0]) ? w.fields : typeof w.data[0] == "object" ? Object.keys(w.data[0]) : []), Array.isArray(w.data[0]) || typeof w.data[0] == "object" || (w.data = [w.data])), te(w.fields || [], w.data || [], K);
        throw new Error("Unable to serialize unrecognized input");
        function te(B, S, ie) {
          var ee = "", se = (typeof B == "string" && (B = JSON.parse(B)), typeof S == "string" && (S = JSON.parse(S)), Array.isArray(B) && 0 < B.length), re = !Array.isArray(S[0]);
          if (se && E) {
            for (var U = 0; U < B.length; U++) 0 < U && (ee += I), ee += N(B[U], U);
            0 < S.length && (ee += k);
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
                0 < Q && !fe && (ee += I);
                var Se = se && re ? B[Q] : Q;
                ee += N(S[J][Se], Q);
              }
              J < S.length - 1 && (!ie || 0 < de && !fe) && (ee += k);
            }
          }
          return ee;
        }
        function N(B, S) {
          var ie, ee;
          return B == null ? "" : B.constructor === Date ? JSON.stringify(B).slice(1, 25) : (ee = !1, A && typeof B == "string" && A.test(B) && (B = "'" + B, ee = !0), ie = B.toString().replace(O, G), (ee = ee || _ === !0 || typeof _ == "function" && _(B, S) || Array.isArray(_) && _[S] || ((se, re) => {
            for (var U = 0; U < re.length; U++) if (-1 < se.indexOf(re[U])) return !0;
            return !1;
          })(ie, u.BAD_DELIMITERS) || -1 < ie.indexOf(I) || ie.charAt(0) === " " || ie.charAt(ie.length - 1) === " ") ? P + ie + P : ie);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = b, u.ParserHandle = m, u.NetworkStreamer = p, u.FileStreamer = f, u.StringStreamer = d, u.ReadableStreamStreamer = g, r.jQuery && ((o = r.jQuery).fn.parse = function(w) {
        var h = w.config || {}, _ = [];
        return this.each(function(k) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var P = 0; P < this.files.length; P++) _.push({ file: this.files[P], inputElem: this, instanceConfig: o.extend({}, h) });
        }), E(), this;
        function E() {
          if (_.length === 0) $(w.complete) && w.complete();
          else {
            var k, P, G, K, F = _[0];
            if ($(w.before)) {
              var A = w.before(F.file, F.inputElem);
              if (typeof A == "object") {
                if (A.action === "abort") return k = "AbortError", P = F.file, G = F.inputElem, K = A.reason, void ($(w.error) && w.error({ name: k }, P, G, K));
                if (A.action === "skip") return void I();
                typeof A.config == "object" && (F.instanceConfig = o.extend(F.instanceConfig, A.config));
              } else if (A === "skip") return void I();
            }
            var O = F.instanceConfig.complete;
            F.instanceConfig.complete = function(te) {
              $(O) && O(te, F.file, F.inputElem), I();
            }, u.parse(F.file, F.instanceConfig);
          }
        }
        function I() {
          _.splice(0, 1), E();
        }
      }), l && (r.onmessage = function(w) {
        w = w.data, u.WORKER_ID === void 0 && w && (u.WORKER_ID = w.workerId), typeof w.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(w.input, w.config), finished: !0 }) : (r.File && w.input instanceof File || w.input instanceof Object) && (w = u.parse(w.input, w.config)) && r.postMessage({ workerId: u.WORKER_ID, results: w, finished: !0 });
      }), (p.prototype = Object.create(c.prototype)).constructor = p, (f.prototype = Object.create(c.prototype)).constructor = f, (d.prototype = Object.create(d.prototype)).constructor = d, (g.prototype = Object.create(c.prototype)).constructor = g, u;
    });
  }(Cn)), Cn.exports;
}
var fm = dm();
const pm = /* @__PURE__ */ um(fm);
function gm({
  file: e,
  onCompleted: t
}) {
  pm.parse(e, {
    skipEmptyLines: !0,
    header: !0,
    complete: t
  });
}
function mm(e, t) {
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
function hm(e, t) {
  if (t.type === "enum") {
    const n = t.typeArguments.values.find(
      (r) => r.label === e
    );
    if (n != null)
      return n.value;
  }
  return e;
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
        p != null && (u[p.sheetColumnId] = hm(
          a[p.csvColumnName],
          c
        ));
      }), l.push(u);
    }), {
      sheetId: i.id,
      rows: l
    };
  });
  return mm(e, o);
}
function wm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ H("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ H("title", {
    id: t
  }, e) : null, /* @__PURE__ */ H("path", {
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
    lp,
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
  const { t } = ke(), [n, r] = j(!1);
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
      Dr,
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
  const { t: l } = ke(), s = V(!0), a = V(null), [
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
  ] = ot(sm, $s(r));
  oe(() => {
    var F;
    if (s.current) {
      s.current = !1;
      return;
    }
    (F = a.current) == null || F.scrollIntoView({ behavior: "smooth" });
  }, [u]);
  const b = p.find(
    (F) => F.sheetId === c
  ), C = r.find(
    (F) => F.id === c
  ), R = (typeof i == "function" ? (i == null ? void 0 : i(g)) ?? !1 : i ?? !1) && g.length > 0;
  function T(F) {
    gm({
      file: F,
      onCompleted: (A) => {
        v({ type: "FILE_PARSED", payload: { parsed: A } }), v({
          type: "COLUMN_MAPPING_CHANGED",
          payload: {
            mappings: Np(
              r,
              A.meta.fields
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
        amountOfEmptyRowsToAdd: gp
      }
    });
  }
  function $(F) {
    v({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: F }
    });
  }
  async function w() {
    const F = vm(r, f ?? [], d), A = o != null ? await o(F) : F;
    v({ type: "DATA_MAPPED", payload: { mappedData: A } });
  }
  function h(F) {
    v({ type: "CELL_CHANGED", payload: F });
  }
  function _(F) {
    v({ type: "REMOVE_ROWS", payload: F });
  }
  function E() {
    v({ type: "ADD_EMPTY_ROW" });
  }
  function I() {
    v({ type: "RESET" });
  }
  async function k() {
    v({ type: "PROGRESS", payload: { progress: 0 } }), v({ type: "SUBMIT" });
    try {
      const F = Ur(
        r,
        p.map((A) => ({ ...A, rows: Ip(A) }))
      );
      await t(F, (A) => {
        v({ type: "PROGRESS", payload: { progress: A } });
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
  function G() {
    v({ type: "UPLOAD" });
  }
  function K() {
    v({ type: "MAPPING" });
  }
  return /* @__PURE__ */ y(am, { theme: e, children: /* @__PURE__ */ y(Xf, { ref: a, children: [
    u === "upload" && /* @__PURE__ */ y("div", { className: "mt-5", children: [
      /* @__PURE__ */ y(hp, { setFile: T }),
      n && /* @__PURE__ */ y("div", { className: "mt-10 mb-2.5", children: /* @__PURE__ */ y(
        "p",
        {
          onClick: M,
          className: "text-primary hover:text-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none",
          children: l("importer.uploader.enterManually")
        }
      ) })
    ] }),
    u === "mapping" && /* @__PURE__ */ y(
      Kp,
      {
        parsed: d,
        sheetDefinitions: r,
        currentMapping: f ?? [],
        onMappingsChanged: $,
        onMappingsSet: w,
        onBack: G
      }
    ),
    u === "preview" && /* @__PURE__ */ y(ve, { children: [
      /* @__PURE__ */ y(
        bm,
        {
          activeSheetId: c,
          sheetDefinitions: r,
          onSheetChange: (F) => v({ type: "SHEET_CHANGED", payload: { sheetId: F } }),
          validationErrors: g
        }
      ),
      /* @__PURE__ */ y(
        qg,
        {
          data: b,
          allData: p,
          sheetDefinition: C,
          sheetValidationErrors: g.filter(
            (F) => F.sheetId === (C == null ? void 0 : C.id)
          ),
          setRowData: h,
          removeRows: _,
          addEmptyRow: E,
          resetState: I
        }
      ),
      b.rows.length > 0 && /* @__PURE__ */ y("div", { className: "my-5 flex justify-between", children: [
        /* @__PURE__ */ y("div", { children: f != null && /* @__PURE__ */ y(_m, { onBackToMapping: K }) }),
        /* @__PURE__ */ y(
          Ot,
          {
            tooltipText: l("importer.uploadBlocked"),
            hidden: !R,
            children: /* @__PURE__ */ y(Ke, { onClick: k, disabled: R, children: l("importer.upload") })
          }
        )
      ] })
    ] }),
    (u === "submit" || u === "failed" || u === "completed") && /* @__PURE__ */ y(
      Qg,
      {
        mode: u,
        progress: m,
        onRetry: k,
        onBackToPreview: P,
        resetState: I
      }
    )
  ] }) });
}
function $m(e) {
  return /* @__PURE__ */ y(Yf, { selectedLocale: e.locale, children: /* @__PURE__ */ y(xm, { ...e }) });
}
export {
  $m as default
};
