var ia = Object.defineProperty;
var la = (e, t, n) => t in e ? ia(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ae = (e, t, n) => la(e, typeof t != "symbol" ? t + "" : t, n);
var gn, re, Bi, ht, Do, ji, Or, Ui, io, Ir, Mr, Wi, on = {}, Gi = [], sa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Bn = Array.isArray;
function rt(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function lo(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, l = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : l[i] = t[i];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? gn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) l[i] === void 0 && (l[i] = e.defaultProps[i]);
  return Qt(e, l, r, o, null);
}
function Qt(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Bi, __i: -1, __u: 0 };
  return o == null && re.vnode != null && re.vnode(i), i;
}
function jn() {
  return { current: null };
}
function fe(e) {
  return e.children;
}
function ze(e, t) {
  this.props = e, this.context = t;
}
function At(e, t) {
  if (t == null) return e.__ ? At(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? At(e) : null;
}
function qi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return qi(e);
  }
}
function Pr(e) {
  (!e.__d && (e.__d = !0) && ht.push(e) && !Pn.__r++ || Do !== re.debounceRendering) && ((Do = re.debounceRendering) || ji)(Pn);
}
function Pn() {
  var e, t, n, r, o, i, l, s;
  for (ht.sort(Or); e = ht.shift(); ) e.__d && (t = ht.length, r = void 0, i = (o = (n = e).__v).__e, l = [], s = [], n.__P && ((r = rt({}, o)).__v = o.__v + 1, re.vnode && re.vnode(r), so(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, l, i ?? At(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, Xi(l, r, s), r.__e != i && qi(r)), ht.length > t && ht.sort(Or));
  Pn.__r = 0;
}
function Ki(e, t, n, r, o, i, l, s, a, u, d) {
  var f, p, c, g, m, h, y = r && r.__k || Gi, x = t.length;
  for (a = aa(n, t, y, a, x), f = 0; f < x; f++) (c = n.__k[f]) != null && (p = c.__i === -1 ? on : y[c.__i] || on, c.__i = f, h = so(e, c, p, o, i, l, s, a, u, d), g = c.__e, c.ref && p.ref != c.ref && (p.ref && ao(p.ref, null, c), d.push(c.ref, c.__c || g, c)), m == null && g != null && (m = g), 4 & c.__u || p.__k === c.__k ? a = Yi(c, a, e) : typeof c.type == "function" && h !== void 0 ? a = h : g && (a = g.nextSibling), c.__u &= -7);
  return n.__e = m, a;
}
function aa(e, t, n, r, o) {
  var i, l, s, a, u, d = n.length, f = d, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (l = t[i]) != null && typeof l != "boolean" && typeof l != "function" ? (a = i + p, (l = e.__k[i] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? Qt(null, l, null, null, null) : Bn(l) ? Qt(fe, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? Qt(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, s = null, (u = l.__i = ua(l, n, a, f)) !== -1 && (f--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v === null ? (u == -1 && p--, typeof l.type != "function" && (l.__u |= 4)) : u != a && (u == a - 1 ? p-- : u == a + 1 ? p++ : (u > a ? p-- : p++, l.__u |= 4))) : e.__k[i] = null;
  if (f) for (i = 0; i < d; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = At(s)), Zi(s, s));
  return r;
}
function Yi(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Yi(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = At(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ot(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Bn(e) ? e.some(function(n) {
    ot(n, t);
  }) : t.push(e)), t;
}
function ua(e, t, n, r) {
  var o, i, l = e.key, s = e.type, a = t[n];
  if (a === null || a && l == a.key && s === a.type && (2 & a.__u) == 0) return n;
  if (r > (a != null && (2 & a.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((a = t[o]) && (2 & a.__u) == 0 && l == a.key && s === a.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((a = t[i]) && (2 & a.__u) == 0 && l == a.key && s === a.type) return i;
      i++;
    }
  }
  return -1;
}
function Vo(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || sa.test(t) ? n : n + "px";
}
function Sn(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Vo(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || Vo(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Ui, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = io, e.addEventListener(t, i ? Mr : Ir, i)) : e.removeEventListener(t, i ? Mr : Ir, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Ho(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = io++;
      else if (t.t < n.u) return;
      return n(re.event ? re.event(t) : t);
    }
  };
}
function so(e, t, n, r, o, i, l, s, a, u) {
  var d, f, p, c, g, m, h, y, x, C, E, T, O, $, _, v, b, S = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (a = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = re.__b) && d(t);
  e: if (typeof S == "function") try {
    if (y = t.props, x = "prototype" in S && S.prototype.render, C = (d = S.contextType) && r[d.__c], E = d ? C ? C.props.value : d.__ : r, n.__c ? h = (f = t.__c = n.__c).__ = f.__E : (x ? t.__c = f = new S(y, E) : (t.__c = f = new ze(y, E), f.constructor = S, f.render = da), C && C.sub(f), f.props = y, f.state || (f.state = {}), f.context = E, f.__n = r, p = f.__d = !0, f.__h = [], f._sb = []), x && f.__s == null && (f.__s = f.state), x && S.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = rt({}, f.__s)), rt(f.__s, S.getDerivedStateFromProps(y, f.__s))), c = f.props, g = f.state, f.__v = t, p) x && S.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), x && f.componentDidMount != null && f.__h.push(f.componentDidMount);
    else {
      if (x && S.getDerivedStateFromProps == null && y !== c && f.componentWillReceiveProps != null && f.componentWillReceiveProps(y, E), !f.__e && (f.shouldComponentUpdate != null && f.shouldComponentUpdate(y, f.__s, E) === !1 || t.__v == n.__v)) {
        for (t.__v != n.__v && (f.props = y, f.state = f.__s, f.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(F) {
          F && (F.__ = t);
        }), T = 0; T < f._sb.length; T++) f.__h.push(f._sb[T]);
        f._sb = [], f.__h.length && l.push(f);
        break e;
      }
      f.componentWillUpdate != null && f.componentWillUpdate(y, f.__s, E), x && f.componentDidUpdate != null && f.__h.push(function() {
        f.componentDidUpdate(c, g, m);
      });
    }
    if (f.context = E, f.props = y, f.__P = e, f.__e = !1, O = re.__r, $ = 0, x) {
      for (f.state = f.__s, f.__d = !1, O && O(t), d = f.render(f.props, f.state, f.context), _ = 0; _ < f._sb.length; _++) f.__h.push(f._sb[_]);
      f._sb = [];
    } else do
      f.__d = !1, O && O(t), d = f.render(f.props, f.state, f.context), f.state = f.__s;
    while (f.__d && ++$ < 25);
    f.state = f.__s, f.getChildContext != null && (r = rt(rt({}, r), f.getChildContext())), x && !p && f.getSnapshotBeforeUpdate != null && (m = f.getSnapshotBeforeUpdate(c, g)), s = Ki(e, Bn(v = d != null && d.type === fe && d.key == null ? d.props.children : d) ? v : [v], t, n, r, o, i, l, s, a, u), f.base = t.__e, t.__u &= -161, f.__h.length && l.push(f), h && (f.__E = f.__ = null);
  } catch (F) {
    if (t.__v = null, a || i != null) if (F.then) {
      for (t.__u |= a ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else for (b = i.length; b--; ) lo(i[b]);
    else t.__e = n.__e, t.__k = n.__k;
    re.__e(F, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = ca(n.__e, t, n, r, o, i, l, a, u);
  return (d = re.diffed) && d(t), 128 & t.__u ? void 0 : s;
}
function Xi(e, t, n) {
  for (var r = 0; r < n.length; r++) ao(n[r], n[++r], n[++r]);
  re.__c && re.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      re.__e(i, o.__v);
    }
  });
}
function ca(e, t, n, r, o, i, l, s, a) {
  var u, d, f, p, c, g, m, h = n.props, y = t.props, x = t.type;
  if (x == "svg" ? o = "http://www.w3.org/2000/svg" : x == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((c = i[u]) && "setAttribute" in c == !!x && (x ? c.localName == x : c.nodeType == 3)) {
      e = c, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (x == null) return document.createTextNode(y);
    e = document.createElementNS(o, x, y.is && y), s && (re.__m && re.__m(t, i), s = !1), i = null;
  }
  if (x === null) h === y || s && e.data === y || (e.data = y);
  else {
    if (i = i && gn.call(e.childNodes), h = n.props || on, !s && i != null) for (h = {}, u = 0; u < e.attributes.length; u++) h[(c = e.attributes[u]).name] = c.value;
    for (u in h) if (c = h[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") f = c;
      else if (!(u in y)) {
        if (u == "value" && "defaultValue" in y || u == "checked" && "defaultChecked" in y) continue;
        Sn(e, u, null, c, o);
      }
    }
    for (u in y) c = y[u], u == "children" ? p = c : u == "dangerouslySetInnerHTML" ? d = c : u == "value" ? g = c : u == "checked" ? m = c : s && typeof c != "function" || h[u] === c || Sn(e, u, c, h[u], o);
    if (d) s || f && (d.__html === f.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (f && (e.innerHTML = ""), Ki(e, Bn(p) ? p : [p], t, n, r, x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, l, i ? i[0] : n.__k && At(n, 0), s, a), i != null) for (u = i.length; u--; ) lo(i[u]);
    s || (u = "value", x == "progress" && g == null ? e.removeAttribute("value") : g !== void 0 && (g !== e[u] || x == "progress" && !g || x == "option" && g !== h[u]) && Sn(e, u, g, h[u], o), u = "checked", m !== void 0 && m !== e[u] && Sn(e, u, m, h[u], o));
  }
  return e;
}
function ao(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    re.__e(o, n);
  }
}
function Zi(e, t, n) {
  var r, o;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ao(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      re.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Zi(r[o], t, n || typeof e.type != "function");
  n || lo(e.__e), e.__c = e.__ = e.__e = void 0;
}
function da(e, t, n) {
  return this.constructor(e, n);
}
function ln(e, t, n) {
  var r, o, i, l;
  t == document && (t = document.documentElement), re.__ && re.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], l = [], so(t, e = (!r && n || t).__k = D(fe, null, [e]), o || on, on, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? gn.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, l), Xi(i, e, l);
}
function Qi(e, t) {
  ln(e, t, Qi);
}
function fa(e, t, n) {
  var r, o, i, l, s = rt({}, e.props);
  for (i in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && l !== void 0 ? l[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? gn.call(arguments, 2) : n), Qt(e.type, s, r || e.key, o || e.ref, null);
}
function me(e, t) {
  var n = { __c: t = "__cC" + Wi++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && o.forEach(function(s) {
        s.__e = !0, Pr(s);
      });
    }, this.sub = function(l) {
      o.add(l);
      var s = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        o && o.delete(l), s && s.call(l);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
gn = Gi.slice, re = { __e: function(e, t, n, r) {
  for (var o, i, l; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), l = o.__d), l) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, Bi = 0, ze.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rt({}, this.state), typeof e == "function" && (e = e(rt({}, n), this.props)), e && rt(n, e), e != null && this.__v && (t && this._sb.push(t), Pr(this));
}, ze.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pr(this));
}, ze.prototype.render = fe, ht = [], ji = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Or = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Pn.__r = 0, Ui = /(PointerCapture)$|Capture$/i, io = 0, Ir = Ho(!1), Mr = Ho(!0), Wi = 0;
var pa = 0;
function w(e, t, n, r, o, i) {
  t || (t = {});
  var l, s, a = t;
  if ("ref" in a) for (s in a = {}, t) s == "ref" ? l = t[s] : a[s] = t[s];
  var u = { type: e, props: a, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --pa, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) a[s] === void 0 && (a[s] = l[s]);
  return re.vnode && re.vnode(u), u;
}
var lt, de, ur, zo, Lt = 0, Ji = [], _e = re, Bo = _e.__b, jo = _e.__r, Uo = _e.diffed, Wo = _e.__c, Go = _e.unmount, qo = _e.__;
function Et(e, t) {
  _e.__h && _e.__h(de, e, Lt || t), Lt = 0;
  var n = de.__H || (de.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function j(e) {
  return Lt = 1, st(el, e);
}
function st(e, t, n) {
  var r = Et(lt++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : el(void 0, t), function(s) {
    var a = r.__N ? r.__N[0] : r.__[0], u = r.t(a, s);
    a !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = de, !de.u)) {
    var o = function(s, a, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (d.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, s, a, u);
      var f = r.__c.props !== s;
      return d.forEach(function(p) {
        if (p.__N) {
          var c = p.__[0];
          p.__ = p.__N, p.__N = void 0, c !== p.__[0] && (f = !0);
        }
      }), i && i.call(this, s, a, u) || f;
    };
    de.u = !0;
    var i = de.shouldComponentUpdate, l = de.componentWillUpdate;
    de.componentWillUpdate = function(s, a, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(s, a, u), i = d;
      }
      l && l.call(this, s, a, u);
    }, de.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ie(e, t) {
  var n = Et(lt++, 3);
  !_e.__s && fo(n.__H, t) && (n.__ = e, n.i = t, de.__H.__h.push(n));
}
function Qe(e, t) {
  var n = Et(lt++, 4);
  !_e.__s && fo(n.__H, t) && (n.__ = e, n.i = t, de.__h.push(n));
}
function H(e) {
  return Lt = 5, W(function() {
    return { current: e };
  }, []);
}
function uo(e, t, n) {
  Lt = 6, Qe(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function W(e, t) {
  var n = Et(lt++, 7);
  return fo(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function se(e, t) {
  return Lt = 8, W(function() {
    return e;
  }, t);
}
function ce(e) {
  var t = de.context[e.__c], n = Et(lt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(de)), t.props.value) : e.__;
}
function co(e, t) {
  _e.useDebugValue && _e.useDebugValue(t ? t(e) : e);
}
function ga(e) {
  var t = Et(lt++, 10), n = j();
  return t.__ = e, de.componentDidCatch || (de.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Ve() {
  var e = Et(lt++, 11);
  if (!e.__) {
    for (var t = de.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function ma() {
  for (var e; e = Ji.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(On), e.__H.__h.forEach(kr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], _e.__e(t, e.__v);
  }
}
_e.__b = function(e) {
  de = null, Bo && Bo(e);
}, _e.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), qo && qo(e, t);
}, _e.__r = function(e) {
  jo && jo(e), lt = 0;
  var t = (de = e.__c).__H;
  t && (ur === de ? (t.__h = [], de.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(On), t.__h.forEach(kr), t.__h = [], lt = 0)), ur = de;
}, _e.diffed = function(e) {
  Uo && Uo(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ji.push(t) !== 1 && zo === _e.requestAnimationFrame || ((zo = _e.requestAnimationFrame) || ha)(ma)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), ur = de = null;
}, _e.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(On), n.__h = n.__h.filter(function(r) {
        return !r.__ || kr(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], _e.__e(r, n.__v);
    }
  }), Wo && Wo(e, t);
}, _e.unmount = function(e) {
  Go && Go(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      On(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && _e.__e(t, n.__v));
};
var Ko = typeof requestAnimationFrame == "function";
function ha(e) {
  var t, n = function() {
    clearTimeout(r), Ko && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Ko && (t = requestAnimationFrame(n));
}
function On(e) {
  var t = de, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), de = t;
}
function kr(e) {
  var t = de;
  e.__c = e.__(), de = t;
}
function fo(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function el(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function tl(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ar(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Un(e, t) {
  var n = t(), r = j({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Qe(function() {
    o.__ = n, o.u = t, cr(o) && i({ t: o });
  }, [e, n, t]), ie(function() {
    return cr(o) && i({ t: o }), e(function() {
      cr(o) && i({ t: o });
    });
  }, [e]), n;
}
function cr(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function po(e) {
  e();
}
function go(e) {
  return e;
}
function mo() {
  return [!1, po];
}
var ho = Qe;
function kn(e, t) {
  this.props = e, this.context = t;
}
function nl(e, t) {
  function n(o) {
    var i = this.props.ref, l = i == o.ref;
    return !l && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !l : Ar(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(kn.prototype = new ze()).isPureReactComponent = !0, kn.prototype.shouldComponentUpdate = function(e, t) {
  return Ar(this.props, e) || Ar(this.state, t);
};
var Yo = re.__b;
re.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Yo && Yo(e);
};
var va = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function he(e) {
  function t(n) {
    var r = tl({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = va, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Xo = function(e, t) {
  return e == null ? null : ot(ot(e).map(t));
}, rl = { map: Xo, forEach: Xo, count: function(e) {
  return e ? ot(e).length : 0;
}, only: function(e) {
  var t = ot(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ot }, _a = re.__e;
re.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  _a(e, t, n, r);
};
var Zo = re.unmount;
function ol(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = tl({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return ol(r, t, n);
  })), e;
}
function il(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return il(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Jt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function ll(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function sl(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(l) {
      n = l.default || l;
    }, function(l) {
      r = l;
    }), r) throw r;
    if (!n) throw t;
    return D(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Mt() {
  this.i = null, this.l = null;
}
re.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Zo && Zo(e);
}, (Jt.prototype = new ze()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = ll(r.__v), i = !1, l = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = l;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = il(a, a.__c.__P, a.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
}, Jt.prototype.componentWillUnmount = function() {
  this.o = [];
}, Jt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = ol(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(fe, null, e.fallback);
  return o && (o.__u &= -33), [D(fe, null, t.__a ? null : e.children), o];
};
var Qo = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function wa(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function ya(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    ln(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), ln(D(wa, { context: t.context }, e.__v), t.v);
}
function Wn(e, t) {
  var n = D(ya, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Mt.prototype = new ze()).__a = function(e) {
  var t = this, n = ll(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Qo(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Mt.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ot(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Mt.prototype.componentDidUpdate = Mt.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Qo(e, n, t);
  });
};
var al = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ba = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, xa = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ca = /[A-Z0-9]/g, Sa = typeof document < "u", Ea = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ul(e, t, n) {
  return t.__k == null && (t.textContent = ""), ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function cl(e, t, n) {
  return Qi(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
ze.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(ze.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Jo = re.event;
function Ra() {
}
function $a() {
  return this.cancelBubble;
}
function Ta() {
  return this.defaultPrevented;
}
re.event = function(e) {
  return Jo && (e = Jo(e)), e.persist = Ra, e.isPropagationStopped = $a, e.isDefaultPrevented = Ta, e.nativeEvent = e;
};
var vo, Fa = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, ei = re.vnode;
re.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var l in n) {
      var s = n[l];
      if (!(l === "value" && "defaultValue" in n && s == null || Sa && l === "children" && r === "noscript" || l === "class" || l === "className")) {
        var a = l.toLowerCase();
        l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Ea(n.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : xa.test(l) && (l = a) : a = l = "oninput" : i && ba.test(l) ? l = l.replace(Ca, "-$&").toLowerCase() : s === null && (s = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ot(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ot(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Fa)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = al, ei && ei(e);
};
var ti = re.__r;
re.__r = function(e) {
  ti && ti(e), vo = e.__c;
};
var ni = re.diffed;
re.diffed = function(e) {
  ni && ni(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), vo = null;
};
var dl = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return vo.__n[e.__c].props.value;
}, useCallback: se, useContext: ce, useDebugValue: co, useDeferredValue: go, useEffect: ie, useId: Ve, useImperativeHandle: uo, useInsertionEffect: ho, useLayoutEffect: Qe, useMemo: W, useReducer: st, useRef: H, useState: j, useSyncExternalStore: Un, useTransition: mo } } }, Oa = "18.3.1";
function fl(e) {
  return D.bind(null, e);
}
function Ht(e) {
  return !!e && e.$$typeof === al;
}
function pl(e) {
  return Ht(e) && e.type === fe;
}
function gl(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function _o(e) {
  return Ht(e) ? fa.apply(null, arguments) : e;
}
function ml(e) {
  return !!e.__k && (ln(null, e), !0);
}
function hl(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var vl = function(e, t) {
  return e(t);
}, Le = function(e, t) {
  return e(t);
}, _l = fe, wl = Ht, L = { useState: j, useId: Ve, useReducer: st, useEffect: ie, useLayoutEffect: Qe, useInsertionEffect: ho, useTransition: mo, useDeferredValue: go, useSyncExternalStore: Un, startTransition: po, useRef: H, useImperativeHandle: uo, useMemo: W, useCallback: se, useContext: ce, useDebugValue: co, version: "18.3.1", Children: rl, render: ul, hydrate: cl, unmountComponentAtNode: ml, createPortal: Wn, createElement: D, createContext: me, createFactory: fl, cloneElement: _o, createRef: jn, Fragment: fe, isValidElement: Ht, isElement: wl, isFragment: pl, isMemo: gl, findDOMNode: hl, Component: ze, PureComponent: kn, memo: nl, forwardRef: he, flushSync: Le, unstable_batchedUpdates: vl, StrictMode: _l, Suspense: Jt, SuspenseList: Mt, lazy: sl, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: dl };
const Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: rl,
  Component: ze,
  Fragment: fe,
  PureComponent: kn,
  StrictMode: _l,
  Suspense: Jt,
  SuspenseList: Mt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: dl,
  cloneElement: _o,
  createContext: me,
  createElement: D,
  createFactory: fl,
  createPortal: Wn,
  createRef: jn,
  default: L,
  findDOMNode: hl,
  flushSync: Le,
  forwardRef: he,
  hydrate: cl,
  isElement: wl,
  isFragment: pl,
  isMemo: gl,
  isValidElement: Ht,
  lazy: sl,
  memo: nl,
  render: ul,
  startTransition: po,
  unmountComponentAtNode: ml,
  unstable_batchedUpdates: vl,
  useCallback: se,
  useContext: ce,
  useDebugValue: co,
  useDeferredValue: go,
  useEffect: ie,
  useErrorBoundary: ga,
  useId: Ve,
  useImperativeHandle: uo,
  useInsertionEffect: ho,
  useLayoutEffect: Qe,
  useMemo: W,
  useReducer: st,
  useRef: H,
  useState: j,
  useSyncExternalStore: Un,
  useTransition: mo,
  version: Oa
}, Symbol.toStringTag, { value: "Module" }));
function yl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = yl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ia() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = yl(e)) && (r && (r += " "), r += t);
  return r;
}
const ri = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, oi = Ia, zt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return oi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, l = Object.keys(o).map((u) => {
    const d = n == null ? void 0 : n[u], f = i == null ? void 0 : i[u];
    if (d === null) return null;
    const p = ri(d) || ri(f);
    return o[u][p];
  }), s = n && Object.entries(n).reduce((u, d) => {
    let [f, p] = d;
    return p === void 0 || (u[f] = p), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: f, className: p, ...c } = d;
    return Object.entries(c).every((g) => {
      let [m, h] = g;
      return Array.isArray(h) ? h.includes({
        ...i,
        ...s
      }[m]) : {
        ...i,
        ...s
      }[m] === h;
    }) ? [
      ...u,
      f,
      p
    ] : u;
  }, []);
  return oi(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Ma = zt("text-center inline-block font-semibold", {
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
function Ye({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  size: o
}) {
  const i = Ma({ variant: t, disabled: n, size: o });
  return /* @__PURE__ */ w("div", { className: i, onClick: r, children: e });
}
const Pa = he(
  ({ children: e, ...t }, n) => {
    const r = {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      padding: "10px",
      borderRadius: "5px",
      cursor: t.onClick ? "pointer" : "default"
    };
    return /* @__PURE__ */ w("div", { ref: n, style: r, ...t, children: e });
  }
);
function ii({ id: e, checked: t, setChecked: n, label: r }) {
  return /* @__PURE__ */ w("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ w("div", { className: "flex h-6 shrink-0 items-center", children: /* @__PURE__ */ w("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ w(
        "input",
        {
          checked: t,
          onChange: (o) => n(o.target.checked),
          id: e,
          type: "checkbox",
          className: "checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline-primary col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ w(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",
          children: [
            /* @__PURE__ */ w(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ w(
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
    r && /* @__PURE__ */ w("div", { className: "text-sm/6", children: /* @__PURE__ */ w("label", { htmlFor: e, className: "font-medium text-gray-900", children: r }) })
  ] });
}
const bl = typeof document < "u" ? L.useLayoutEffect : () => {
};
function ka(e) {
  const t = H(null);
  return bl(() => {
    t.current = e;
  }, [
    e
  ]), se((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const mn = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, _t = (e) => e && "window" in e && e.window === e ? e : mn(e).defaultView || window;
function Aa(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function La(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function xl(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Na = xl(function() {
  return La(/^Mac/i);
}), Da = xl(function() {
  return Aa(/Android/i);
});
function Va(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Da() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class Ha {
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
function Cl(e) {
  let t = H({
    isFocused: !1,
    observer: null
  });
  bl(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = ka((r) => {
    e == null || e(r);
  });
  return se((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        t.current.isFocused = !1, o.disabled && n(new Ha("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
function za(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = se((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = Cl(i), s = se((a) => {
    const u = mn(a.target);
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
let hn = null, Nr = /* @__PURE__ */ new Set(), en = /* @__PURE__ */ new Map(), bt = !1, Dr = !1;
const Ba = {
  Tab: !0,
  Escape: !0
};
function wo(e, t) {
  for (let n of Nr) n(e, t);
}
function ja(e) {
  return !(e.metaKey || !Na() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function An(e) {
  bt = !0, ja(e) && (hn = "keyboard", wo("keyboard", e));
}
function He(e) {
  hn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (bt = !0, wo("pointer", e));
}
function Sl(e) {
  Va(e) && (bt = !0, hn = "virtual");
}
function El(e) {
  e.target === window || e.target === document || (!bt && !Dr && (hn = "virtual", wo("virtual", e)), bt = !1, Dr = !1);
}
function Rl() {
  bt = !1, Dr = !0;
}
function Vr(e) {
  if (typeof window > "u" || en.get(_t(e))) return;
  const t = _t(e), n = mn(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    bt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", An, !0), n.addEventListener("keyup", An, !0), n.addEventListener("click", Sl, !0), t.addEventListener("focus", El, !0), t.addEventListener("blur", Rl, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", He, !0), n.addEventListener("pointermove", He, !0), n.addEventListener("pointerup", He, !0)) : (n.addEventListener("mousedown", He, !0), n.addEventListener("mousemove", He, !0), n.addEventListener("mouseup", He, !0)), t.addEventListener("beforeunload", () => {
    $l(e);
  }, {
    once: !0
  }), en.set(t, {
    focus: r
  });
}
const $l = (e, t) => {
  const n = _t(e), r = mn(e);
  t && r.removeEventListener("DOMContentLoaded", t), en.has(n) && (n.HTMLElement.prototype.focus = en.get(n).focus, r.removeEventListener("keydown", An, !0), r.removeEventListener("keyup", An, !0), r.removeEventListener("click", Sl, !0), n.removeEventListener("focus", El, !0), n.removeEventListener("blur", Rl, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", He, !0), r.removeEventListener("pointermove", He, !0), r.removeEventListener("pointerup", He, !0)) : (r.removeEventListener("mousedown", He, !0), r.removeEventListener("mousemove", He, !0), r.removeEventListener("mouseup", He, !0)), en.delete(n));
};
function Ua(e) {
  const t = mn(e);
  let n;
  return t.readyState !== "loading" ? Vr(e) : (n = () => {
    Vr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => $l(e, n);
}
typeof document < "u" && Ua();
function Tl() {
  return hn !== "pointer";
}
const Wa = /* @__PURE__ */ new Set([
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
function Ga(e, t, n) {
  var r;
  const o = typeof window < "u" ? _t(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? _t(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? _t(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? _t(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !Wa.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof s && !Ba[n.key]);
}
function qa(e, t, n) {
  Vr(), ie(() => {
    let r = (o, i) => {
      Ga(!!(n != null && n.isTextInput), o, i) && e(Tl());
    };
    return Nr.add(r), () => {
      Nr.delete(r);
    };
  }, t);
}
function Ka(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = H({
    isFocusWithin: !1
  }), l = se((u) => {
    i.current.isFocusWithin && !u.currentTarget.contains(u.relatedTarget) && (i.current.isFocusWithin = !1, n && n(u), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = Cl(l), a = se((u) => {
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
let Ln = !1, dr = 0;
function Hr() {
  Ln = !0, setTimeout(() => {
    Ln = !1;
  }, 50);
}
function li(e) {
  e.pointerType === "touch" && Hr();
}
function Ya() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", li) : document.addEventListener("touchend", Hr), dr++, () => {
      dr--, !(dr > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", li) : document.removeEventListener("touchend", Hr));
    };
}
function Fl(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = j(!1), s = H({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ie(Ya, []);
  let { hoverProps: a, triggerHoverEnd: u } = W(() => {
    let d = (c, g) => {
      if (s.pointerType = g, o || g === "touch" || s.isHovered || !c.currentTarget.contains(c.target)) return;
      s.isHovered = !0;
      let m = c.currentTarget;
      s.target = m, t && t({
        type: "hoverstart",
        target: m,
        pointerType: g
      }), n && n(!0), l(!0);
    }, f = (c, g) => {
      if (s.pointerType = "", s.target = null, g === "touch" || !s.isHovered) return;
      s.isHovered = !1;
      let m = c.currentTarget;
      r && r({
        type: "hoverend",
        target: m,
        pointerType: g
      }), n && n(!1), l(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (c) => {
      Ln && c.pointerType === "mouse" || d(c, c.pointerType);
    }, p.onPointerLeave = (c) => {
      !o && c.currentTarget.contains(c.target) && f(c, c.pointerType);
    }) : (p.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (c) => {
      !s.ignoreEmulatedMouseEvents && !Ln && d(c, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (c) => {
      !o && c.currentTarget.contains(c.target) && f(c, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: f
    };
  }, [
    t,
    n,
    r,
    o,
    s
  ]);
  return ie(() => {
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
function Ol(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = H({
    isFocused: !1,
    isFocusVisible: t || Tl()
  }), [i, l] = j(!1), [s, a] = j(() => o.current.isFocused && o.current.isFocusVisible), u = se(() => a(o.current.isFocused && o.current.isFocusVisible), []), d = se((c) => {
    o.current.isFocused = c, l(c), u();
  }, [
    u
  ]);
  qa((c) => {
    o.current.isFocusVisible = c, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = za({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: p } = Ka({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? p : f
  };
}
var Xa = Object.defineProperty, Za = (e, t, n) => t in e ? Xa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fr = (e, t, n) => (Za(e, typeof t != "symbol" ? t + "" : t, n), n);
let Qa = class {
  constructor() {
    fr(this, "current", this.detect()), fr(this, "handoffState", "pending"), fr(this, "currentId", 0);
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
}, yt = new Qa();
function Bt(e) {
  return yt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Gn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Xe() {
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
    return Gn(() => {
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
    let r = Xe();
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
function Rt() {
  let [e] = j(Xe);
  return ie(() => () => e.dispose(), [e]), e;
}
let ue = (e, t) => {
  yt.isServer ? ie(e, t) : Qe(e, t);
};
function mt(e) {
  let t = H(e);
  return ue(() => {
    t.current = e;
  }, [e]), t;
}
let z = function(e) {
  let t = mt(e);
  return L.useCallback((...n) => t.current(...n), [t]);
};
function Ja(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function eu(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function tu({ disabled: e = !1 } = {}) {
  let t = H(null), [n, r] = j(!1), o = Rt(), i = z(() => {
    t.current = null, r(!1), o.dispose();
  }), l = z((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = Bt(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (u) => {
          if (t.current) {
            let d = Ja(u);
            r(eu(d, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let nu = me(void 0);
function yo() {
  return ce(nu);
}
function zr(...e) {
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
var Nt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Nt || {}), ct = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ct || {});
function Ce() {
  let e = ou();
  return se((t) => ru({ mergeRefs: e, ...t }), [e]);
}
function ru({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? iu;
  let a = Il(t, e);
  if (i) return En(a, n, r, l, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: d = !1, ...f } = a;
    if (d) return En(f, n, r, l, s);
  }
  if (u & 1) {
    let { unmount: d = !0, ...f } = a;
    return Pe(d ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return En({ ...f, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return En(a, n, r, l, s);
}
function En(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = pr(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, d = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let p = !1, c = [];
    for (let [g, m] of Object.entries(t)) typeof m == "boolean" && (p = !0), m === !0 && c.push(g.replace(/([A-Z])/g, (h) => `-${h.toLowerCase()}`));
    if (p) {
      f["data-headlessui-state"] = c.join(" ");
      for (let g of c) f[`data-${g}`] = "";
    }
  }
  if (i === fe && (Object.keys(ut(a)).length > 0 || Object.keys(ut(f)).length > 0)) if (!Ht(d) || Array.isArray(d) && d.length > 1) {
    if (Object.keys(ut(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ut(a)).concat(Object.keys(ut(f))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = d.props, c = p == null ? void 0 : p.className, g = typeof c == "function" ? (...y) => zr(c(...y), a.className) : zr(c, a.className), m = g ? { className: g } : {}, h = Il(d.props, ut(pr(a, ["ref"])));
    for (let y in f) y in h && delete f[y];
    return _o(d, Object.assign({}, h, f, u, { ref: o(lu(d), u.ref) }, m));
  }
  return D(i, Object.assign({}, pr(a, ["ref"]), i !== fe && u, i !== fe && f), d);
}
function ou() {
  let e = H([]), t = se((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function iu(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Il(...e) {
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
function bo(...e) {
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
  return Object.assign(he(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ut(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function pr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function lu(e) {
  return L.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function su(e, t, n) {
  let [r, o] = j(n), i = e !== void 0, l = H(i), s = H(!1), a = H(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !a.current && (a.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, z((u) => (i || o(u), t == null ? void 0 : t(u)))];
}
function au(e) {
  let [t] = j(e);
  return t;
}
function Ml(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) kl(n, Pl(t, r), o);
  return n;
}
function Pl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function kl(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) kl(e, Pl(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Ml(n, t, e);
}
let uu = "span";
var Dt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Dt || {});
function cu(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Ce()({ ourProps: i, theirProps: o, slot: {}, defaultTag: uu, name: "Hidden" });
}
let sn = be(cu), du = me(null);
function fu({ children: e }) {
  let t = ce(du);
  if (!t) return L.createElement(L.Fragment, null, e);
  let { target: n } = t;
  return n ? Wn(L.createElement(L.Fragment, null, e), n) : null;
}
function pu({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = j(null), s = Rt();
  return ie(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), L.createElement(fu, null, L.createElement(gu, { setForm: l, formId: t }), Ml(e).map(([a, u]) => L.createElement(sn, { features: Dt.Hidden, ...ut({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function gu({ setForm: e, formId: t }) {
  return ie(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : L.createElement(sn, { features: Dt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let mu = me(void 0);
function Al() {
  return ce(mu);
}
function hu(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && vu(n) ? !1 : r;
}
function vu(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Ll = Symbol();
function _u(e, t = !0) {
  return Object.assign(e, { [Ll]: t });
}
function Ie(...e) {
  let t = H(e);
  ie(() => {
    t.current = e;
  }, [e]);
  let n = z((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Ll])) ? void 0 : n;
}
let qn = me(null);
qn.displayName = "DescriptionContext";
function Nl() {
  let e = ce(qn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Nl), t;
  }
  return e;
}
function wu() {
  var e, t;
  return (t = (e = ce(qn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function yu() {
  let [e, t] = j([]);
  return [e.length > 0 ? e.join(" ") : void 0, W(() => function(n) {
    let r = z((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = W(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return L.createElement(qn.Provider, { value: o }, n.children);
  }, [t])];
}
let bu = "p";
function xu(e, t) {
  let n = Ve(), r = yo(), { id: o = `headlessui-description-${n}`, ...i } = e, l = Nl(), s = Ie(t);
  ue(() => l.register(o), [o, l.register]);
  let a = r || !1, u = W(() => ({ ...l.slot, disabled: a }), [l.slot, a]), d = { ref: s, ...l.props, id: o };
  return Ce()({ ourProps: d, theirProps: i, slot: u, defaultTag: bu, name: l.name || "Description" });
}
let Cu = be(xu), Su = Object.assign(Cu, {});
var $e = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))($e || {});
let Kn = me(null);
Kn.displayName = "LabelContext";
function Dl() {
  let e = ce(Kn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Dl), t;
  }
  return e;
}
function Yn(e) {
  var t, n, r;
  let o = (n = (t = ce(Kn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Eu({ inherit: e = !1 } = {}) {
  let t = Yn(), [n, r] = j([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, W(() => function(i) {
    let l = z((a) => (r((u) => [...u, a]), () => r((u) => {
      let d = u.slice(), f = d.indexOf(a);
      return f !== -1 && d.splice(f, 1), d;
    }))), s = W(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return L.createElement(Kn.Provider, { value: s }, i.children);
  }, [r])];
}
let Ru = "label";
function $u(e, t) {
  var n;
  let r = Ve(), o = Dl(), i = Al(), l = yo(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...d } = e, f = Ie(t);
  ue(() => o.register(s), [s, o.register]);
  let p = z((h) => {
    let y = h.currentTarget;
    if (y instanceof HTMLLabelElement && h.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(h), y instanceof HTMLLabelElement) {
      let x = document.getElementById(y.htmlFor);
      if (x) {
        let C = x.getAttribute("disabled");
        if (C === "true" || C === "") return;
        let E = x.getAttribute("aria-disabled");
        if (E === "true" || E === "") return;
        (x instanceof HTMLInputElement && (x.type === "radio" || x.type === "checkbox") || x.role === "radio" || x.role === "checkbox" || x.role === "switch") && x.click(), x.focus({ preventScroll: !0 });
      }
    }
  }), c = l || !1, g = W(() => ({ ...o.slot, disabled: c }), [o.slot, c]), m = { ref: f, ...o.props, id: s, htmlFor: a, onClick: p };
  return u && ("onClick" in m && (delete m.htmlFor, delete m.onClick), "onClick" in d && delete d.onClick), Ce()({ ourProps: m, theirProps: d, slot: g, defaultTag: a ? Ru : "div", name: o.name || "Label" });
}
let Tu = be($u), Fu = Object.assign(Tu, {}), Ou = me(() => {
});
function Iu({ value: e, children: t }) {
  return L.createElement(Ou.Provider, { value: e }, t);
}
function It(e, t, n) {
  let r = n.initialDeps ?? [], o;
  return () => {
    var i, l, s, a;
    let u;
    n.key && ((i = n.debug) != null && i.call(n)) && (u = Date.now());
    const d = e();
    if (!(d.length !== r.length || d.some((c, g) => r[g] !== c)))
      return o;
    r = d;
    let p;
    if (n.key && ((l = n.debug) != null && l.call(n)) && (p = Date.now()), o = t(...d), n.key && ((s = n.debug) != null && s.call(n))) {
      const c = Math.round((Date.now() - u) * 100) / 100, g = Math.round((Date.now() - p) * 100) / 100, m = g / 16, h = (y, x) => {
        for (y = String(y); y.length < x; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${h(g, 5)} /${h(c, 5)} ms`,
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
function gr(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Mu = (e, t) => Math.abs(e - t) < 1, Pu = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
}, ku = (e) => e, Au = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Lu = (e, t) => {
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
}, si = {
  passive: !0
}, ai = typeof window > "u" ? !0 : "onscrollend" in window, Nu = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && ai ? () => {
  } : Pu(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (d) => () => {
    const { horizontal: f, isRtl: p } = e.options;
    o = f ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, i(), t(o, d);
  }, s = l(!0), a = l(!1);
  a(), n.addEventListener("scroll", s, si);
  const u = e.options.useScrollendEvent && ai;
  return u && n.addEventListener("scrollend", a, si), () => {
    n.removeEventListener("scroll", s), u && n.removeEventListener("scrollend", a);
  };
}, Du = (e, t, n) => {
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
}, Vu = (e, {
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
class Hu {
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
        getItemKey: ku,
        rangeExtractor: Au,
        onChange: () => {
        },
        measureElement: Du,
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
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const a = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, a);
        for (let d = a; d < n; d++) {
          const f = i(d), p = this.options.lanes === 1 ? u[d - 1] : this.getFurthestMeasurement(u, d), c = p ? p.end + this.options.gap : r + o, g = s.get(f), m = typeof g == "number" ? g : this.options.estimateSize(d), h = c + m, y = p ? p.lane : d % this.options.lanes;
          u[d] = {
            index: d,
            start: c,
            size: m,
            end: h,
            key: f,
            lane: y
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = It(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (n, r, o) => this.range = n.length > 0 && r > 0 ? zu({
        measurements: n,
        outerSize: r,
        scrollOffset: o
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
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
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return gr(
          r[Vl(
            0,
            r.length - 1,
            (o) => gr(r[o]).start,
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
          const [u] = gr(
            this.getOffsetForIndex(n, s)
          );
          Mu(u, this.getScrollOffset()) || this.scrollToIndex(n, { align: s, behavior: o });
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
const Vl = (e, t, n, r) => {
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
function zu({
  measurements: e,
  outerSize: t,
  scrollOffset: n
}) {
  const r = e.length - 1, i = Vl(0, r, (s) => e[s].start, n);
  let l = i;
  for (; l < r && e[l].end < n + t; )
    l++;
  return { startIndex: i, endIndex: l };
}
const ui = typeof document < "u" ? Qe : ie;
function Bu(e) {
  const t = st(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var l;
      i ? Le(t) : t(), (l = e.onChange) == null || l.call(e, o, i);
    }
  }, [r] = j(
    () => new Hu(n)
  );
  return r.setOptions(n), ui(() => r._didMount(), []), ui(() => r._willUpdate()), r;
}
function ju(e) {
  return Bu({
    observeElementRect: Lu,
    observeElementOffset: Nu,
    scrollToFn: Vu,
    ...e
  });
}
function Uu(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Wu(e = Uu) {
  return se((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Gu(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function ci(e, t = !1) {
  let [n, r] = st(() => ({}), {}), o = W(() => Gu(e), [e, n]);
  return ue(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let qu = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function Hl(e, t) {
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
function zl(e) {
  return Un(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Ku = new qu(() => Hl(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function jt(e, t) {
  let n = Ku.get(t), r = Ve(), o = zl(n);
  if (ue(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let Br = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new Map();
function di(e) {
  var t;
  let n = (t = tn.get(e)) != null ? t : 0;
  return tn.set(e, n + 1), n !== 0 ? () => fi(e) : (Br.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => fi(e));
}
function fi(e) {
  var t;
  let n = (t = tn.get(e)) != null ? t : 1;
  if (n === 1 ? tn.delete(e) : tn.set(e, n - 1), n !== 1) return;
  let r = Br.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Br.delete(e));
}
function Bl(e, { allowed: t, disallowed: n } = {}) {
  let r = jt(e, "inert-others");
  ue(() => {
    var o, i;
    if (!r) return;
    let l = Xe();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(di(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let u = Bt(a);
      if (!u) continue;
      let d = a.parentElement;
      for (; d && d !== u.body; ) {
        for (let f of d.children) s.some((p) => f.contains(p)) || l.add(di(f));
        d = d.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function jl(e, t, n) {
  let r = mt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  ie(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Xe();
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
let Nn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Yu = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var nt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(nt || {}), jr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(jr || {}), Xu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Xu || {});
function Zu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Nn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Qu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Yu)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ul = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ul || {});
function Ju(e, t = 0) {
  var n;
  return e === ((n = Bt(e)) == null ? void 0 : n.body) ? !1 : Pe(t, { 0() {
    return e.matches(Nn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Nn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var ec = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ec || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function it(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let tc = ["textarea", "input"].join(",");
function nc(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, tc)) != null ? n : !1;
}
function Wl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function nn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? Wl(e) : e : t & 64 ? Qu(e) : Zu(e);
  o.length > 0 && l.length > 1 && (l = l.filter((c) => !o.some((g) => g != null && "current" in g ? (g == null ? void 0 : g.current) === c : g === c))), r = r ?? i.activeElement;
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
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, p;
  do {
    if (d >= f || d + f <= 0) return 0;
    let c = a + d;
    if (t & 16) c = (c + f) % f;
    else {
      if (c < 0) return 3;
      if (c >= f) return 1;
    }
    p = l[c], p == null || p.focus(u), d += s;
  } while (p !== i.activeElement);
  return t & 6 && nc(p) && p.select(), 2;
}
function Gl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function rc() {
  return /Android/gi.test(window.navigator.userAgent);
}
function ql() {
  return Gl() || rc();
}
function Yt(e, t, n, r) {
  let o = mt(n);
  ie(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Kl(e, t, n, r) {
  let o = mt(n);
  ie(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const pi = 30;
function Yl(e, t, n) {
  let r = jt(e, "outside-click"), o = mt(n), i = se(function(a, u) {
    if (a.defaultPrevented) return;
    let d = u(a);
    if (d === null || !d.getRootNode().contains(d) || !d.isConnected) return;
    let f = function p(c) {
      return typeof c == "function" ? p(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(t);
    for (let p of f) if (p !== null && (p.contains(d) || a.composed && a.composedPath().includes(p))) return;
    return !Ju(d, Ul.Loose) && d.tabIndex !== -1 && a.preventDefault(), o.current(a, d);
  }, [o, t]), l = H(null);
  Yt(r, "pointerdown", (a) => {
    var u, d;
    l.current = ((d = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : d[0]) || a.target;
  }, !0), Yt(r, "mousedown", (a) => {
    var u, d;
    l.current = ((d = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : d[0]) || a.target;
  }, !0), Yt(r, "click", (a) => {
    ql() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = H({ x: 0, y: 0 });
  Yt(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), Yt(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= pi || Math.abs(u.y - s.current.y) >= pi)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), Kl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function $t(...e) {
  return W(() => Bt(...e), [...e]);
}
function xo(e, t, n, r) {
  let o = mt(n);
  ie(() => {
    e = e ?? window;
    function i(l) {
      o.current(l);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Xl(e) {
  let t = H({ value: "", selectionStart: null, selectionEnd: null });
  return xo(e, "blur", (n) => {
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
function oc(e, t) {
  return W(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function ic() {
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
function lc() {
  return Gl() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Xe();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let a = s.target.closest("a");
          if (!a) return;
          let { hash: u } = new URL(a.href), d = e.querySelector(u);
          d && !r(d) && (l = d);
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
function sc() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function ac(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let wt = Hl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Xe(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: ac(n) }, o = [lc(), ic(), sc()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
wt.subscribe(() => {
  let e = wt.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && wt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && wt.dispatch("TEARDOWN", n);
  }
});
function uc(e, t, n = () => ({ containers: [] })) {
  let r = zl(wt), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return ue(() => {
    if (!(!t || !e)) return wt.dispatch("PUSH", t, n), () => wt.dispatch("POP", t, n);
  }, [e, t]), i;
}
function Zl(e, t, n = () => [document.body]) {
  let r = jt(e, "scroll-lock");
  uc(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function gi(e) {
  return [e.screenX, e.screenY];
}
function cc() {
  let e = H([-1, -1]);
  return { wasMoved(t) {
    let n = gi(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = gi(t);
  } };
}
function dc(e = 0) {
  let [t, n] = j(e), r = se((a) => n(a), [t]), o = se((a) => n((u) => u | a), [t]), i = se((a) => (t & a) === a, [t]), l = se((a) => n((u) => u & ~a), [n]), s = se((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var mi, hi;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((mi = process == null ? void 0 : process.env) == null ? void 0 : mi.NODE_ENV) === "test" && typeof ((hi = Element == null ? void 0 : Element.prototype) == null ? void 0 : hi.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var fc = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(fc || {});
function Ql(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function Jl(e, t, n, r) {
  let [o, i] = j(n), { hasFlag: l, addFlag: s, removeFlag: a } = dc(e && o ? 3 : 0), u = H(!1), d = H(!1), f = Rt();
  return ue(() => {
    var p;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (p = r == null ? void 0 : r.start) == null || p.call(r, n), pc(t, { inFlight: u, prepare() {
        d.current ? d.current = !1 : d.current = u.current, u.current = !0, !d.current && (n ? (s(3), a(4)) : (s(4), a(2)));
      }, run() {
        d.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
      }, done() {
        var c;
        d.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, a(7), n || i(!1), (c = r == null ? void 0 : r.end) == null || c.call(r, n));
      } });
    }
  }, [e, n, t, f]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function pc(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Xe();
  return mc(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(gc(e, r));
    });
  }), i.dispose;
}
function gc(e, t) {
  var n, r;
  let o = Xe();
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
function mc(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function hc(e, { container: t, accept: n, walk: r }) {
  let o = H(n), i = H(r);
  ie(() => {
    o.current = n, i.current = r;
  }, [n, r]), ue(() => {
    if (!t || !e) return;
    let l = Bt(t);
    if (!l) return;
    let s = o.current, a = i.current, u = Object.assign((f) => s(f), { acceptNode: s }), d = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; d.nextNode(); ) a(d.currentNode);
  }, [t, e, o, i]);
}
function an(e, t) {
  let n = H([]), r = z(e);
  ie(() => {
    let o = [...n.current];
    for (let [i, l] of t.entries()) if (n.current[i] !== l) {
      let s = r(t, o);
      return n.current = t, s;
    }
  }, [r, ...t]);
}
function Xn() {
  return typeof window < "u";
}
function Ut(e) {
  return es(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Je(e) {
  var t;
  return (t = (es(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function es(e) {
  return Xn() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function Fe(e) {
  return Xn() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function Ze(e) {
  return Xn() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function vi(e) {
  return !Xn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function vn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function vc(e) {
  return ["table", "td", "th"].includes(Ut(e));
}
function Zn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Co(e) {
  const t = So(), n = Fe(e) ? je(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function _c(e) {
  let t = ft(e);
  for (; Ze(t) && !Vt(t); ) {
    if (Co(t))
      return t;
    if (Zn(t))
      return null;
    t = ft(t);
  }
  return null;
}
function So() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vt(e) {
  return ["html", "body", "#document"].includes(Ut(e));
}
function je(e) {
  return Ne(e).getComputedStyle(e);
}
function Qn(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Ut(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    vi(e) && e.host || // Fallback.
    Je(e)
  );
  return vi(t) ? t.host : t;
}
function ts(e) {
  const t = ft(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ze(t) && vn(t) ? t : ts(t);
}
function un(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ts(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Ne(o);
  if (i) {
    const s = Ur(l);
    return t.concat(l, l.visualViewport || [], vn(o) ? o : [], s && n ? un(s) : []);
  }
  return t.concat(o, un(o, [], n));
}
function Ur(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wc() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const xt = Math.min, Te = Math.max, cn = Math.round, Rn = Math.floor, Ke = (e) => ({
  x: e,
  y: e
}), yc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bc = {
  start: "end",
  end: "start"
};
function _i(e, t, n) {
  return Te(e, xt(t, n));
}
function Wt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pt(e) {
  return e.split("-")[0];
}
function _n(e) {
  return e.split("-")[1];
}
function ns(e) {
  return e === "x" ? "y" : "x";
}
function rs(e) {
  return e === "y" ? "height" : "width";
}
function Ct(e) {
  return ["top", "bottom"].includes(pt(e)) ? "y" : "x";
}
function os(e) {
  return ns(Ct(e));
}
function xc(e, t, n) {
  n === void 0 && (n = !1);
  const r = _n(e), o = os(e), i = rs(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Dn(l)), [l, Dn(l)];
}
function Cc(e) {
  const t = Dn(e);
  return [Wr(e), t, Wr(t)];
}
function Wr(e) {
  return e.replace(/start|end/g, (t) => bc[t]);
}
function Sc(e, t, n) {
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
function Ec(e, t, n, r) {
  const o = _n(e);
  let i = Sc(pt(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Wr)))), i;
}
function Dn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yc[t]);
}
function Rc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $c(e) {
  return typeof e != "number" ? Rc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Vn(e) {
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
function wi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ct(t), l = os(t), s = rs(l), a = pt(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let c;
  switch (a) {
    case "top":
      c = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      c = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      c = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      c = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      c = {
        x: r.x,
        y: r.y
      };
  }
  switch (_n(t)) {
    case "start":
      c[l] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      c[l] += p * (n && u ? -1 : 1);
      break;
  }
  return c;
}
const Tc = async (e, t, n) => {
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
    x: d,
    y: f
  } = wi(u, r, a), p = r, c = {}, g = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: h,
      fn: y
    } = s[m], {
      x,
      y: C,
      data: E,
      reset: T
    } = await y({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: c,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, f = C ?? f, c = {
      ...c,
      [h]: {
        ...c[h],
        ...E
      }
    }, T && g <= 50 && (g++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (u = T.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: d,
      y: f
    } = wi(u, p, a)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: c
  };
};
async function Jn(e, t) {
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
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: c = 0
  } = Wt(t, e), g = $c(c), h = s[p ? f === "floating" ? "reference" : "floating" : f], y = Vn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: a
  })), x = f === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), E = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Vn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: C,
    strategy: a
  }) : x);
  return {
    top: (y.top - T.top + g.top) / E.y,
    bottom: (T.bottom - y.bottom + g.bottom) / E.y,
    left: (y.left - T.left + g.left) / E.x,
    right: (T.right - y.right + g.right) / E.x
  };
}
const Fc = function(e) {
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
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: c = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...h
      } = Wt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = pt(o), x = Ct(s), C = pt(s) === s, E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), T = p || (C || !m ? [Dn(s)] : Cc(s)), O = g !== "none";
      !p && O && T.push(...Ec(s, m, g, E));
      const $ = [s, ...T], _ = await Jn(t, h), v = [];
      let b = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && v.push(_[y]), f) {
        const P = xc(o, l, E);
        v.push(_[P[0]], _[P[1]]);
      }
      if (b = [...b, {
        placement: o,
        overflows: v
      }], !v.every((P) => P <= 0)) {
        var S, F;
        const P = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, G = $[P];
        if (G)
          return {
            data: {
              index: P,
              overflows: b
            },
            reset: {
              placement: G
            }
          };
        let K = (F = b.filter((I) => I.overflows[0] <= 0).sort((I, A) => I.overflows[1] - A.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!K)
          switch (c) {
            case "bestFit": {
              var k;
              const I = (k = b.filter((A) => {
                if (O) {
                  const M = Ct(A.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((M) => M > 0).reduce((M, te) => M + te, 0)]).sort((A, M) => A[1] - M[1])[0]) == null ? void 0 : k[0];
              I && (K = I);
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
async function Oc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = pt(n), s = _n(n), a = Ct(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, d = i && a ? -1 : 1, f = Wt(t, e);
  let {
    mainAxis: p,
    crossAxis: c,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof g == "number" && (c = s === "end" ? g * -1 : g), a ? {
    x: c * d,
    y: p * u
  } : {
    x: p * u,
    y: c * d
  };
}
const Ic = function(e) {
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
      } = t, a = await Oc(t, e);
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
}, Mc = function(e) {
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
          fn: (h) => {
            let {
              x: y,
              y: x
            } = h;
            return {
              x: y,
              y: x
            };
          }
        },
        ...a
      } = Wt(e, t), u = {
        x: n,
        y: r
      }, d = await Jn(t, a), f = Ct(pt(o)), p = ns(f);
      let c = u[p], g = u[f];
      if (i) {
        const h = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", x = c + d[h], C = c - d[y];
        c = _i(x, c, C);
      }
      if (l) {
        const h = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", x = g + d[h], C = g - d[y];
        g = _i(x, g, C);
      }
      const m = s.fn({
        ...t,
        [p]: c,
        [f]: g
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [p]: i,
            [f]: l
          }
        }
      };
    }
  };
}, Pc = function(e) {
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
      } = Wt(e, t), d = await Jn(t, u), f = pt(o), p = _n(o), c = Ct(o) === "y", {
        width: g,
        height: m
      } = i.floating;
      let h, y;
      f === "top" || f === "bottom" ? (h = f, y = p === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, h = p === "end" ? "top" : "bottom");
      const x = m - d.top - d.bottom, C = g - d.left - d.right, E = xt(m - d[h], x), T = xt(g - d[y], C), O = !t.middlewareData.shift;
      let $ = E, _ = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = C), (r = t.middlewareData.shift) != null && r.enabled.y && ($ = x), O && !p) {
        const b = Te(d.left, 0), S = Te(d.right, 0), F = Te(d.top, 0), k = Te(d.bottom, 0);
        c ? _ = g - 2 * (b !== 0 || S !== 0 ? b + S : Te(d.left, d.right)) : $ = m - 2 * (F !== 0 || k !== 0 ? F + k : Te(d.top, d.bottom));
      }
      await a({
        ...t,
        availableWidth: _,
        availableHeight: $
      });
      const v = await l.getDimensions(s.floating);
      return g !== v.width || m !== v.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function is(e) {
  const t = je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ze(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = cn(n) !== i || cn(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function Eo(e) {
  return Fe(e) ? e : e.contextElement;
}
function kt(e) {
  const t = Eo(e);
  if (!Ze(t))
    return Ke(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = is(t);
  let l = (i ? cn(n.width) : n.width) / r, s = (i ? cn(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const kc = /* @__PURE__ */ Ke(0);
function ls(e) {
  const t = Ne(e);
  return !So() || !t.visualViewport ? kc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ac(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ne(e) ? !1 : t;
}
function St(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Eo(e);
  let l = Ke(1);
  t && (r ? Fe(r) && (l = kt(r)) : l = kt(e));
  const s = Ac(i, n, r) ? ls(i) : Ke(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, d = o.width / l.x, f = o.height / l.y;
  if (i) {
    const p = Ne(i), c = r && Fe(r) ? Ne(r) : r;
    let g = p, m = Ur(g);
    for (; m && r && c !== g; ) {
      const h = kt(m), y = m.getBoundingClientRect(), x = je(m), C = y.left + (m.clientLeft + parseFloat(x.paddingLeft)) * h.x, E = y.top + (m.clientTop + parseFloat(x.paddingTop)) * h.y;
      a *= h.x, u *= h.y, d *= h.x, f *= h.y, a += C, u += E, g = Ne(m), m = Ur(g);
    }
  }
  return Vn({
    width: d,
    height: f,
    x: a,
    y: u
  });
}
function Ro(e, t) {
  const n = Qn(e).scrollLeft;
  return t ? t.left + n : St(Je(e)).left + n;
}
function ss(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ro(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Lc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = Je(r), s = t ? Zn(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ke(1);
  const d = Ke(0), f = Ze(r);
  if ((f || !f && !i) && ((Ut(r) !== "body" || vn(l)) && (a = Qn(r)), Ze(r))) {
    const c = St(r);
    u = kt(r), d.x = c.x + r.clientLeft, d.y = c.y + r.clientTop;
  }
  const p = l && !f && !i ? ss(l, a, !0) : Ke(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y + p.y
  };
}
function Nc(e) {
  return Array.from(e.getClientRects());
}
function Dc(e) {
  const t = Je(e), n = Qn(e), r = e.ownerDocument.body, o = Te(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Te(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Ro(e);
  const s = -n.scrollTop;
  return je(r).direction === "rtl" && (l += Te(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Vc(e, t) {
  const n = Ne(e), r = Je(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = So();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Hc(e, t) {
  const n = St(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ze(e) ? kt(e) : Ke(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function yi(e, t, n) {
  let r;
  if (t === "viewport")
    r = Vc(e, n);
  else if (t === "document")
    r = Dc(Je(e));
  else if (Fe(t))
    r = Hc(t, n);
  else {
    const o = ls(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Vn(r);
}
function as(e, t) {
  const n = ft(e);
  return n === t || !Fe(n) || Vt(n) ? !1 : je(n).position === "fixed" || as(n, t);
}
function zc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = un(e, [], !1).filter((s) => Fe(s) && Ut(s) !== "body"), o = null;
  const i = je(e).position === "fixed";
  let l = i ? ft(e) : e;
  for (; Fe(l) && !Vt(l); ) {
    const s = je(l), a = Co(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || vn(l) && !a && as(e, l)) ? r = r.filter((d) => d !== l) : o = s, l = ft(l);
  }
  return t.set(e, r), r;
}
function Bc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? Zn(t) ? [] : zc(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, d) => {
    const f = yi(t, d, o);
    return u.top = Te(f.top, u.top), u.right = xt(f.right, u.right), u.bottom = xt(f.bottom, u.bottom), u.left = Te(f.left, u.left), u;
  }, yi(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function jc(e) {
  const {
    width: t,
    height: n
  } = is(e);
  return {
    width: t,
    height: n
  };
}
function Uc(e, t, n) {
  const r = Ze(t), o = Je(t), i = n === "fixed", l = St(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Ke(0);
  if (r || !r && !i)
    if ((Ut(t) !== "body" || vn(o)) && (s = Qn(t)), r) {
      const p = St(t, !0, i, t);
      a.x = p.x + t.clientLeft, a.y = p.y + t.clientTop;
    } else o && (a.x = Ro(o));
  const u = o && !r && !i ? ss(o, s) : Ke(0), d = l.left + s.scrollLeft - a.x - u.x, f = l.top + s.scrollTop - a.y - u.y;
  return {
    x: d,
    y: f,
    width: l.width,
    height: l.height
  };
}
function mr(e) {
  return je(e).position === "static";
}
function bi(e, t) {
  if (!Ze(e) || je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Je(e) === n && (n = n.ownerDocument.body), n;
}
function us(e, t) {
  const n = Ne(e);
  if (Zn(e))
    return n;
  if (!Ze(e)) {
    let o = ft(e);
    for (; o && !Vt(o); ) {
      if (Fe(o) && !mr(o))
        return o;
      o = ft(o);
    }
    return n;
  }
  let r = bi(e, t);
  for (; r && vc(r) && mr(r); )
    r = bi(r, t);
  return r && Vt(r) && mr(r) && !Co(r) ? n : r || _c(e) || n;
}
const Wc = async function(e) {
  const t = this.getOffsetParent || us, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Uc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Gc(e) {
  return je(e).direction === "rtl";
}
const qc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lc,
  getDocumentElement: Je,
  getClippingRect: Bc,
  getOffsetParent: us,
  getElementRects: Wc,
  getClientRects: Nc,
  getDimensions: jc,
  getScale: kt,
  isElement: Fe,
  isRTL: Gc
};
function cs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Kc(e, t) {
  let n = null, r;
  const o = Je(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: p,
      height: c
    } = u;
    if (s || t(), !p || !c)
      return;
    const g = Rn(f), m = Rn(o.clientWidth - (d + p)), h = Rn(o.clientHeight - (f + c)), y = Rn(d), C = {
      rootMargin: -g + "px " + -m + "px " + -h + "px " + -y + "px",
      threshold: Te(0, xt(1, a)) || 1
    };
    let E = !0;
    function T(O) {
      const $ = O[0].intersectionRatio;
      if ($ !== a) {
        if (!E)
          return l();
        $ ? l(!1, $) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      $ === 1 && !cs(u, e.getBoundingClientRect()) && l(), E = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, C);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Yc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = Eo(e), d = o || i ? [...u ? un(u) : [], ...un(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), i && y.addEventListener("resize", n);
  });
  const f = u && s ? Kc(u, n) : null;
  let p = -1, c = null;
  l && (c = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === u && c && (c.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = c) == null || C.observe(t);
    })), n();
  }), u && !a && c.observe(u), c.observe(t));
  let g, m = a ? St(e) : null;
  a && h();
  function h() {
    const y = St(e);
    m && !cs(m, y) && n(), m = y, g = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), f == null || f(), (y = c) == null || y.disconnect(), c = null, a && cancelAnimationFrame(g);
  };
}
const hr = Jn, Xc = Ic, Zc = Mc, Qc = Fc, Jc = Pc, ed = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: qc,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Tc(e, t, {
    ...o,
    platform: i
  });
};
var In = typeof document < "u" ? Qe : ie;
function Hn(e, t) {
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
        if (!Hn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Hn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ds(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xi(e, t) {
  const n = ds(e);
  return Math.round(t * n) / n;
}
function vr(e) {
  const t = H(e);
  return In(() => {
    t.current = e;
  }), t;
}
function td(e) {
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
  } = e, [d, f] = j({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, c] = j(r);
  Hn(p, r) || c(r);
  const [g, m] = j(null), [h, y] = j(null), x = se((A) => {
    A !== O.current && (O.current = A, m(A));
  }, []), C = se((A) => {
    A !== $.current && ($.current = A, y(A));
  }, []), E = i || g, T = l || h, O = H(null), $ = H(null), _ = H(d), v = a != null, b = vr(a), S = vr(o), F = vr(u), k = se(() => {
    if (!O.current || !$.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: p
    };
    S.current && (A.platform = S.current), ed(O.current, $.current, A).then((M) => {
      const te = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      P.current && !Hn(_.current, te) && (_.current = te, Le(() => {
        f(te);
      }));
    });
  }, [p, t, n, S, F]);
  In(() => {
    u === !1 && _.current.isPositioned && (_.current.isPositioned = !1, f((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [u]);
  const P = H(!1);
  In(() => (P.current = !0, () => {
    P.current = !1;
  }), []), In(() => {
    if (E && (O.current = E), T && ($.current = T), E && T) {
      if (b.current)
        return b.current(E, T, k);
      k();
    }
  }, [E, T, k, b, v]);
  const G = W(() => ({
    reference: O,
    floating: $,
    setReference: x,
    setFloating: C
  }), [x, C]), K = W(() => ({
    reference: E,
    floating: T
  }), [E, T]), I = W(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!K.floating)
      return A;
    const M = xi(K.floating, d.x), te = xi(K.floating, d.y);
    return s ? {
      ...A,
      transform: "translate(" + M + "px, " + te + "px)",
      ...ds(K.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: te
    };
  }, [n, s, K.floating, d.x, d.y]);
  return W(() => ({
    ...d,
    update: k,
    refs: G,
    elements: K,
    floatingStyles: I
  }), [d, k, G, K, I]);
}
const fs = (e, t) => ({
  ...Xc(e),
  options: [e, t]
}), nd = (e, t) => ({
  ...Zc(e),
  options: [e, t]
}), rd = (e, t) => ({
  ...Qc(e),
  options: [e, t]
}), od = (e, t) => ({
  ...Jc(e),
  options: [e, t]
}), ps = {
  ...Lr
}, id = ps.useInsertionEffect, ld = id || ((e) => e());
function gs(e) {
  const t = H(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return ld(() => {
    t.current = e;
  }), se(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Gr = typeof document < "u" ? Qe : ie;
let Ci = !1, sd = 0;
const Si = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + sd++
);
function ad() {
  const [e, t] = j(() => Ci ? Si() : void 0);
  return Gr(() => {
    e == null && t(Si());
  }, []), ie(() => {
    Ci = !0;
  }, []), e;
}
const ud = ps.useId, cd = ud || ad;
let dn;
process.env.NODE_ENV !== "production" && (dn = /* @__PURE__ */ new Set());
function dd() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = dn) != null && e.has(o))) {
    var i;
    (i = dn) == null || i.add(o), console.warn(o);
  }
}
function fd() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = dn) != null && e.has(o))) {
    var i;
    (i = dn) == null || i.add(o), console.error(o);
  }
}
function pd() {
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
const gd = /* @__PURE__ */ me(null), md = /* @__PURE__ */ me(null), hd = () => {
  var e;
  return ((e = ce(gd)) == null ? void 0 : e.id) || null;
}, vd = () => ce(md), _d = "data-floating-ui-focusable";
function wd(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = cd(), i = H({}), [l] = j(() => pd()), s = hd() != null;
  if (process.env.NODE_ENV !== "production") {
    const c = r.reference;
    c && !Fe(c) && fd("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, u] = j(r.reference), d = gs((c, g, m) => {
    i.current.openEvent = c ? g : void 0, l.emit("openchange", {
      open: c,
      event: g,
      reason: m,
      nested: s
    }), n == null || n(c, g, m);
  }), f = W(() => ({
    setPositionReference: u
  }), []), p = W(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return W(() => ({
    dataRef: i,
    open: t,
    onOpenChange: d,
    elements: p,
    events: l,
    floatingId: o,
    refs: f
  }), [t, d, p, l, o, f]);
}
function yd(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = wd({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = j(null), [s, a] = j(null), d = (o == null ? void 0 : o.domReference) || i, f = H(null), p = vd();
  Gr(() => {
    d && (f.current = d);
  }, [d]);
  const c = td({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), g = se((C) => {
    const E = Fe(C) ? {
      getBoundingClientRect: () => C.getBoundingClientRect(),
      contextElement: C
    } : C;
    a(E), c.refs.setReference(E);
  }, [c.refs]), m = se((C) => {
    (Fe(C) || C === null) && (f.current = C, l(C)), (Fe(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    C !== null && !Fe(C)) && c.refs.setReference(C);
  }, [c.refs]), h = W(() => ({
    ...c.refs,
    setReference: m,
    setPositionReference: g,
    domReference: f
  }), [c.refs, m, g]), y = W(() => ({
    ...c.elements,
    domReference: d
  }), [c.elements, d]), x = W(() => ({
    ...c,
    ...r,
    refs: h,
    elements: y,
    nodeId: t
  }), [c, h, y, t, r]);
  return Gr(() => {
    r.dataRef.current.floatingContext = x;
    const C = p == null ? void 0 : p.nodesRef.current.find((E) => E.id === t);
    C && (C.context = x);
  }), W(() => ({
    ...c,
    context: x,
    refs: h,
    elements: y
  }), [c, h, y, x]);
}
const Ei = "active", Ri = "selected";
function _r(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Ei]: l,
      [Ri]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [_d]: ""
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [u, d] = a;
      if (!(o && [Ei, Ri].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof d == "function") {
            var f;
            (f = r.get(u)) == null || f.push(d), l[u] = function() {
              for (var p, c = arguments.length, g = new Array(c), m = 0; m < c; m++)
                g[m] = arguments[m];
              return (p = r.get(u)) == null ? void 0 : p.map((h) => h(...g)).find((h) => h !== void 0);
            };
          }
        } else
          l[u] = d;
    }), l), {})
  };
}
function bd(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = se(
    (s) => _r(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = se(
    (s) => _r(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = se(
    (s) => _r(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return W(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
function $i(e, t) {
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
const xd = (e) => ({
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
      ...d
    } = Wt(e, t), {
      rects: f,
      elements: {
        floating: p
      }
    } = t, c = n.current[l], g = (u == null ? void 0 : u.current) || p, m = p.clientTop || g.clientTop, h = p.clientTop !== 0, y = g.clientTop !== 0, x = p === g;
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || dd('`placement` side must be "bottom" when using the `inner`', "middleware.")), !c)
      return {};
    const C = {
      ...t,
      ...await fs(-c.offsetTop - p.clientTop - f.reference.height / 2 - c.offsetHeight / 2 - i).fn(t)
    }, E = await hr($i(C, g.scrollHeight + m + p.clientTop), d), T = await hr(C, {
      ...d,
      elementContext: "reference"
    }), O = Te(0, E.top), $ = C.y + O, b = (g.scrollHeight > g.clientHeight ? (S) => S : cn)(Te(0, g.scrollHeight + (h && x || y ? m * 2 : 0) - O - Te(0, E.bottom)));
    if (g.style.maxHeight = b + "px", g.scrollTop = O, o) {
      const S = g.offsetHeight < c.offsetHeight * xt(s, n.current.length) - 1 || T.top >= -a || T.bottom >= -a;
      Le(() => o(S));
    }
    return r && (r.current = await hr($i({
      ...C,
      y: $
    }, g.offsetHeight + m + p.clientTop), d)), {
      y: $
    };
  }
});
function Cd(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = gs(s), u = H(!1), d = H(null), f = H(null);
  ie(() => {
    if (!o) return;
    function c(m) {
      if (m.ctrlKey || !g || i.current == null)
        return;
      const h = m.deltaY, y = i.current.top >= -0.5, x = i.current.bottom >= -0.5, C = g.scrollHeight - g.clientHeight, E = h < 0 ? -1 : 1, T = h < 0 ? "max" : "min";
      g.scrollHeight <= g.clientHeight || (!y && h > 0 || !x && h < 0 ? (m.preventDefault(), Le(() => {
        a((O) => O + Math[T](h, C * E));
      })) : /firefox/i.test(wc()) && (g.scrollTop += h));
    }
    const g = (l == null ? void 0 : l.current) || r.floating;
    if (n && g)
      return g.addEventListener("wheel", c), requestAnimationFrame(() => {
        d.current = g.scrollTop, i.current != null && (f.current = {
          ...i.current
        });
      }), () => {
        d.current = null, f.current = null, g.removeEventListener("wheel", c);
      };
  }, [o, n, r.floating, i, l, a]);
  const p = W(() => ({
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
      const c = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !c || !u.current)) {
        if (d.current !== null) {
          const g = c.scrollTop - d.current;
          (i.current.bottom < -0.5 && g < -1 || i.current.top < -0.5 && g > 1) && Le(() => a((m) => m + g));
        }
        requestAnimationFrame(() => {
          d.current = c.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return W(() => o ? {
    floating: p
  } : {}, [o, p]);
}
let wn = me({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
wn.displayName = "FloatingContext";
let $o = me(null);
$o.displayName = "PlacementContext";
function Sd(e) {
  return W(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Ed() {
  return ce(wn).setReference;
}
function Rd() {
  let { getFloatingProps: e, slot: t } = ce(wn);
  return se((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function $d(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = ce($o), n = W(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  ue(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = ce(wn);
  return W(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Ti = 4;
function Td({ children: e, enabled: t = !0 }) {
  let [n, r] = j(null), [o, i] = j(0), l = H(null), [s, a] = j(null);
  Fd(s);
  let u = t && n !== null && s !== null, { to: d = "bottom", gap: f = 0, offset: p = 0, padding: c = 0, inner: g } = Od(n, s), [m, h = "center"] = d.split(" ");
  ue(() => {
    u && i(0);
  }, [u]);
  let { refs: y, floatingStyles: x, context: C } = yd({ open: u, placement: m === "selection" ? h === "center" ? "bottom" : `bottom-${h}` : h === "center" ? `${m}` : `${m}-${h}`, strategy: "absolute", transform: !1, middleware: [fs({ mainAxis: m === "selection" ? 0 : f, crossAxis: p }), nd({ padding: c }), m !== "selection" && rd({ padding: c }), m === "selection" && g ? xd({ ...g, padding: c, overflowRef: l, offset: o, minItemsVisible: Ti, referenceOverflowThreshold: c, onFallbackChange(S) {
    var F, k;
    if (!S) return;
    let P = C.elements.floating;
    if (!P) return;
    let G = parseFloat(getComputedStyle(P).scrollPaddingBottom) || 0, K = Math.min(Ti, P.childElementCount), I = 0, A = 0;
    for (let M of (k = (F = C.elements.floating) == null ? void 0 : F.childNodes) != null ? k : []) if (M instanceof HTMLElement) {
      let te = M.offsetTop, N = te + M.clientHeight + G, B = P.scrollTop, R = B + P.clientHeight;
      if (te >= B && N <= R) K--;
      else {
        A = Math.max(0, Math.min(N, R) - Math.max(te, B)), I = M.clientHeight;
        break;
      }
    }
    K >= 1 && i((M) => {
      let te = I * K - A + G;
      return M >= te ? M : te;
    });
  } }) : null, od({ padding: c, apply({ availableWidth: S, availableHeight: F, elements: k }) {
    Object.assign(k.floating.style, { overflow: "auto", maxWidth: `${S}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${F}px)` });
  } })].filter(Boolean), whileElementsMounted: Yc }), [E = m, T = h] = C.placement.split("-");
  m === "selection" && (E = "selection");
  let O = W(() => ({ anchor: [E, T].filter(Boolean).join(" ") }), [E, T]), $ = Cd(C, { overflowRef: l, onChange: i }), { getReferenceProps: _, getFloatingProps: v } = bd([$]), b = z((S) => {
    a(S), y.setFloating(S);
  });
  return D($o.Provider, { value: r }, D(wn.Provider, { value: { setFloating: b, setReference: y.setReference, styles: x, getReferenceProps: _, getFloatingProps: v, slot: O } }, e));
}
function Fd(e) {
  ue(() => {
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
function Od(e, t) {
  var n, r, o;
  let i = wr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = wr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = wr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function wr(e, t, n = void 0) {
  let r = Rt(), o = z((a, u) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!u) return [n, null];
      let d = Fi(a, u);
      return [d, (f) => {
        let p = ms(a);
        {
          let c = p.map((g) => window.getComputedStyle(u).getPropertyValue(g));
          r.requestAnimationFrame(function g() {
            r.nextFrame(g);
            let m = !1;
            for (let [y, x] of p.entries()) {
              let C = window.getComputedStyle(u).getPropertyValue(x);
              if (c[y] !== C) {
                c[y] = C, m = !0;
                break;
              }
            }
            if (!m) return;
            let h = Fi(a, u);
            d !== h && (f(h), d = h);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = W(() => o(e, t)[0], [e, t]), [l = i, s] = j();
  return ue(() => {
    let [a, u] = o(e, t);
    if (s(a), !!u) return u(s);
  }, [e, t]), l;
}
function ms(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...ms(o)] : [r];
  }
  return [];
}
function Fi(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function Id({ children: e, freeze: t }) {
  let n = qr(t, e);
  return L.createElement(L.Fragment, null, n);
}
function qr(e, t) {
  let [n, r] = j(t);
  return !e && n !== t && r(t), e ? n : t;
}
let er = me(null);
er.displayName = "OpenClosedContext";
var Oe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Oe || {});
function yn() {
  return ce(er);
}
function hs({ value: e, children: t }) {
  return L.createElement(er.Provider, { value: e }, t);
}
function Md({ children: e }) {
  return L.createElement(er.Provider, { value: null }, e);
}
function Pd(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let qe = [];
Pd(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || qe[0] === t.target) return;
    let n = t.target;
    n = n.closest(Nn), qe.unshift(n ?? t.target), qe = qe.filter((r) => r != null && r.isConnected), qe.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function kd(e) {
  throw new Error("Unexpected object: " + e);
}
var ye = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ye || {});
function Oi(e, t) {
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
      kd(e);
  }
}
var To = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(To || {});
function vs(e) {
  let t = z(e), n = H(!1);
  ie(() => (n.current = !1, () => {
    n.current = !0, Gn(() => {
      n.current && t();
    });
  }), [t]);
}
function Ad() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Lr ? ((t) => t.useSyncExternalStore)(Lr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function bn() {
  let e = Ad(), [t, n] = j(yt.isHandoffComplete);
  return t && yt.isHandoffComplete === !1 && n(!1), ie(() => {
    t !== !0 && n(!0);
  }, [t]), ie(() => yt.handoff(), []), e ? !1 : t;
}
let _s = me(!1);
function Ld() {
  return ce(_s);
}
function Ii(e) {
  return L.createElement(_s.Provider, { value: e.force }, e.children);
}
function Nd(e) {
  let t = Ld(), n = ce(ys), r = $t(e), [o, i] = j(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (yt.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return ie(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), ie(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let ws = fe, Dd = be(function(e, t) {
  let n = e, r = H(null), o = Ie(_u((f) => {
    r.current = f;
  }), t), i = $t(r), l = Nd(r), [s] = j(() => {
    var f;
    return yt.isServer ? null : (f = i == null ? void 0 : i.createElement("div")) != null ? f : null;
  }), a = ce(Kr), u = bn();
  ue(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), ue(() => {
    if (s && a) return a.register(s);
  }, [a, s]), vs(() => {
    var f;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((f = l.parentElement) == null || f.removeChild(l)));
  });
  let d = Ce();
  return u ? !l || !s ? null : Wn(d({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: ws, name: "Portal" }), s) : null;
});
function Vd(e, t) {
  let n = Ie(t), { enabled: r = !0, ...o } = e, i = Ce();
  return r ? L.createElement(Dd, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: ws, name: "Portal" });
}
let Hd = fe, ys = me(null);
function zd(e, t) {
  let { target: n, ...r } = e, o = { ref: Ie(t) }, i = Ce();
  return L.createElement(ys.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Hd, name: "Popover.Group" }));
}
let Kr = me(null);
function Bd() {
  let e = ce(Kr), t = H([]), n = z((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = z((i) => {
    let l = t.current.indexOf(i);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
  }), o = W(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, W(() => function({ children: i }) {
    return L.createElement(Kr.Provider, { value: o }, i);
  }, [o])];
}
let jd = be(Vd), bs = be(zd), xs = Object.assign(jd, { Group: bs });
var Ud = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ud || {}), Wd = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Wd || {}), Gd = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Gd || {}), qd = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(qd || {});
function yr(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((l, s) => l.dataRef.current.order - s.dataRef.current.order) : Wl(r, (l) => l.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let Kd = { 1(e) {
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
    let { options: u, disabled: d } = e.virtual, f = t.focus === ye.Specific ? t.idx : Oi(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var c, g;
      return (g = (c = e.activeOptionIndex) != null ? c : u.findIndex((m) => !d(m))) != null ? g : null;
    }, resolveDisabled: d, resolveId() {
      throw new Error("Function not implemented.");
    } }), p = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === f && e.activationTrigger === p ? e : { ...e, activeOptionIndex: f, activationTrigger: p, isTyping: !1, __demoMode: !1 };
  }
  let l = yr(e);
  if (l.activeOptionIndex === null) {
    let u = l.options.findIndex((d) => !d.dataRef.current.disabled);
    u !== -1 && (l.activeOptionIndex = u);
  }
  let s = t.focus === ye.Specific ? t.idx : Oi(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === s && e.activationTrigger === a ? e : { ...e, ...l, isTyping: !1, activeOptionIndex: s, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, l = yr(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(i));
  let s = { ...e, ...l, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = yr(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, Fo = me(null);
Fo.displayName = "ComboboxActionsContext";
function xn(e) {
  let t = ce(Fo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, xn), n;
  }
  return t;
}
let Cs = me(null);
function Yd(e) {
  let t = Gt("VirtualProvider"), { options: n } = t.virtual, [r, o] = W(() => {
    let u = t.optionsElement;
    if (!u) return [0, 0];
    let d = window.getComputedStyle(u);
    return [parseFloat(d.paddingBlockStart || d.paddingTop), parseFloat(d.paddingBlockEnd || d.paddingBottom)];
  }, [t.optionsElement]), i = ju({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [l, s] = j(0);
  ue(() => {
    s((u) => u + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : L.createElement(Cs.Provider, { value: i }, L.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var d;
    return L.createElement(fe, { key: u.key }, L.cloneElement((d = e.children) == null ? void 0 : d.call(e, { ...e.slot, option: n[u.index] }), { key: `${l}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let fn = me(null);
fn.displayName = "ComboboxDataContext";
function Gt(e) {
  let t = ce(fn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Gt), n;
  }
  return t;
}
function Xd(e, t) {
  return Pe(t.type, Kd, e, t);
}
let Zd = fe;
function Qd(e, t) {
  var n, r;
  let o = yo(), { value: i, defaultValue: l, onChange: s, form: a, name: u, by: d, disabled: f = o || !1, onClose: p, __demoMode: c = !1, multiple: g = !1, immediate: m = !1, virtual: h = null, nullable: y, ...x } = e, C = au(l), [E = g ? [] : void 0, T] = su(i, s, C), [O, $] = st(Xd, { dataRef: jn(), comboboxState: c ? 0 : 1, isTyping: !1, options: [], virtual: h ? { options: h.options, disabled: (n = h.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: c }), _ = H(!1), v = H({ static: !1, hold: !1 }), b = Wu(d), S = z((V) => h ? d === null ? h.options.indexOf(V) : h.options.findIndex((q) => b(q, V)) : O.options.findIndex((q) => b(q.dataRef.current.value, V))), F = se((V) => Pe(P.mode, { 1: () => E.some((q) => b(q, V)), 0: () => b(E, V) }), [E]), k = z((V) => O.activeOptionIndex === S(V)), P = W(() => ({ ...O, immediate: m, optionsPropsRef: v, value: E, defaultValue: C, disabled: f, mode: g ? 1 : 0, virtual: h ? O.virtual : null, get activeOptionIndex() {
    if (_.current && O.activeOptionIndex === null && (h ? h.options.length > 0 : O.options.length > 0)) {
      if (h) {
        let q = h.options.findIndex((Q) => {
          var Se, ne;
          return !((ne = (Se = h.disabled) == null ? void 0 : Se.call(h, Q)) != null && ne);
        });
        if (q !== -1) return q;
      }
      let V = O.options.findIndex((q) => !q.dataRef.current.disabled);
      if (V !== -1) return V;
    }
    return O.activeOptionIndex;
  }, calculateIndex: S, compare: b, isSelected: F, isActive: k }), [E, C, f, g, c, O, h]);
  ue(() => {
    var V;
    h && $({ type: 7, options: h.options, disabled: (V = h.disabled) != null ? V : null });
  }, [h, h == null ? void 0 : h.options, h == null ? void 0 : h.disabled]), ue(() => {
    O.dataRef.current = P;
  }, [P]);
  let G = P.comboboxState === 0;
  Yl(G, [P.buttonElement, P.inputElement, P.optionsElement], () => U.closeCombobox());
  let K = W(() => {
    var V, q, Q;
    return { open: P.comboboxState === 0, disabled: f, activeIndex: P.activeOptionIndex, activeOption: P.activeOptionIndex === null ? null : P.virtual ? P.virtual.options[(V = P.activeOptionIndex) != null ? V : 0] : (Q = (q = P.options[P.activeOptionIndex]) == null ? void 0 : q.dataRef.current.value) != null ? Q : null, value: E };
  }, [P, f, E]), I = z(() => {
    if (P.activeOptionIndex !== null) {
      if (U.setIsTyping(!1), P.virtual) R(P.virtual.options[P.activeOptionIndex]);
      else {
        let { dataRef: V } = P.options[P.activeOptionIndex];
        R(V.current.value);
      }
      U.goToOption(ye.Specific, P.activeOptionIndex);
    }
  }), A = z(() => {
    $({ type: 0 }), _.current = !0;
  }), M = z(() => {
    $({ type: 1 }), _.current = !1, p == null || p();
  }), te = z((V) => {
    $({ type: 3, isTyping: V });
  }), N = z((V, q, Q) => (_.current = !1, V === ye.Specific ? $({ type: 2, focus: ye.Specific, idx: q, trigger: Q }) : $({ type: 2, focus: V, trigger: Q }))), B = z((V, q) => ($({ type: 4, payload: { id: V, dataRef: q } }), () => {
    P.isActive(q.current.value) && (_.current = !0), $({ type: 5, id: V });
  })), R = z((V) => Pe(P.mode, { 0() {
    return T == null ? void 0 : T(V);
  }, 1() {
    let q = P.value.slice(), Q = q.findIndex((Se) => b(Se, V));
    return Q === -1 ? q.push(V) : q.splice(Q, 1), T == null ? void 0 : T(q);
  } })), le = z((V) => {
    $({ type: 6, trigger: V });
  }), ee = z((V) => {
    $({ type: 8, element: V });
  }), ae = z((V) => {
    $({ type: 9, element: V });
  }), oe = z((V) => {
    $({ type: 10, element: V });
  }), U = W(() => ({ onChange: R, registerOption: B, goToOption: N, setIsTyping: te, closeCombobox: M, openCombobox: A, setActivationTrigger: le, selectActiveOption: I, setInputElement: ee, setButtonElement: ae, setOptionsElement: oe }), []), [J, pe] = Eu(), Z = t === null ? {} : { ref: t }, ge = se(() => {
    if (C !== void 0) return T == null ? void 0 : T(C);
  }, [T, C]), we = Ce();
  return L.createElement(pe, { value: J, props: { htmlFor: (r = P.inputElement) == null ? void 0 : r.id }, slot: { open: P.comboboxState === 0, disabled: f } }, L.createElement(Td, null, L.createElement(Fo.Provider, { value: U }, L.createElement(fn.Provider, { value: P }, L.createElement(hs, { value: Pe(P.comboboxState, { 0: Oe.Open, 1: Oe.Closed }) }, u != null && L.createElement(pu, { disabled: f, data: E != null ? { [u]: E } : {}, form: a, onReset: ge }), we({ ourProps: Z, theirProps: x, slot: K, defaultTag: Zd, name: "Combobox" }))))));
}
let Jd = "input";
function ef(e, t) {
  var n, r, o, i, l;
  let s = Gt("Combobox.Input"), a = xn("Combobox.Input"), u = Ve(), d = Al(), { id: f = d || `headlessui-combobox-input-${u}`, onChange: p, displayValue: c, disabled: g = s.disabled || !1, autoFocus: m = !1, type: h = "text", ...y } = e, x = H(null), C = Ie(x, t, Ed(), a.setInputElement), E = $t(s.inputElement), T = Rt(), O = z(() => {
    a.onChange(null), s.optionsElement && (s.optionsElement.scrollTop = 0), a.goToOption(ye.Nothing);
  }), $ = W(() => {
    var R;
    return typeof c == "function" && s.value !== void 0 ? (R = c(s.value)) != null ? R : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, c]);
  an(([R, le], [ee, ae]) => {
    if (s.isTyping) return;
    let oe = x.current;
    oe && ((ae === 0 && le === 1 || R !== ee) && (oe.value = R), requestAnimationFrame(() => {
      if (s.isTyping || !oe || (E == null ? void 0 : E.activeElement) !== oe) return;
      let { selectionStart: U, selectionEnd: J } = oe;
      Math.abs((J ?? 0) - (U ?? 0)) === 0 && U === 0 && oe.setSelectionRange(oe.value.length, oe.value.length);
    }));
  }, [$, s.comboboxState, E, s.isTyping]), an(([R], [le]) => {
    if (R === 0 && le === 1) {
      if (s.isTyping) return;
      let ee = x.current;
      if (!ee) return;
      let ae = ee.value, { selectionStart: oe, selectionEnd: U, selectionDirection: J } = ee;
      ee.value = "", ee.value = ae, J !== null ? ee.setSelectionRange(oe, U, J) : ee.setSelectionRange(oe, U);
    }
  }, [s.comboboxState]);
  let _ = H(!1), v = z(() => {
    _.current = !0;
  }), b = z(() => {
    T.nextFrame(() => {
      _.current = !1;
    });
  }), S = z((R) => {
    switch (a.setIsTyping(!0), R.key) {
      case $e.Enter:
        if (s.comboboxState !== 0 || _.current) return;
        if (R.preventDefault(), R.stopPropagation(), s.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), s.mode === 0 && a.closeCombobox();
        break;
      case $e.ArrowDown:
        return R.preventDefault(), R.stopPropagation(), Pe(s.comboboxState, { 0: () => a.goToOption(ye.Next), 1: () => a.openCombobox() });
      case $e.ArrowUp:
        return R.preventDefault(), R.stopPropagation(), Pe(s.comboboxState, { 0: () => a.goToOption(ye.Previous), 1: () => {
          Le(() => a.openCombobox()), s.value || a.goToOption(ye.Last);
        } });
      case $e.Home:
        if (R.shiftKey) break;
        return R.preventDefault(), R.stopPropagation(), a.goToOption(ye.First);
      case $e.PageUp:
        return R.preventDefault(), R.stopPropagation(), a.goToOption(ye.First);
      case $e.End:
        if (R.shiftKey) break;
        return R.preventDefault(), R.stopPropagation(), a.goToOption(ye.Last);
      case $e.PageDown:
        return R.preventDefault(), R.stopPropagation(), a.goToOption(ye.Last);
      case $e.Escape:
        return s.comboboxState !== 0 ? void 0 : (R.preventDefault(), s.optionsElement && !s.optionsPropsRef.current.static && R.stopPropagation(), s.mode === 0 && s.value === null && O(), a.closeCombobox());
      case $e.Tab:
        if (s.comboboxState !== 0) return;
        s.mode === 0 && s.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), F = z((R) => {
    p == null || p(R), s.mode === 0 && R.target.value === "" && O(), a.openCombobox();
  }), k = z((R) => {
    var le, ee, ae;
    let oe = (le = R.relatedTarget) != null ? le : qe.find((U) => U !== R.currentTarget);
    if (!((ee = s.optionsElement) != null && ee.contains(oe)) && !((ae = s.buttonElement) != null && ae.contains(oe)) && s.comboboxState === 0) return R.preventDefault(), s.mode === 0 && s.value === null && O(), a.closeCombobox();
  }), P = z((R) => {
    var le, ee, ae;
    let oe = (le = R.relatedTarget) != null ? le : qe.find((U) => U !== R.currentTarget);
    (ee = s.buttonElement) != null && ee.contains(oe) || (ae = s.optionsElement) != null && ae.contains(oe) || s.disabled || s.immediate && s.comboboxState !== 0 && T.microTask(() => {
      Le(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), G = Yn(), K = wu(), { isFocused: I, focusProps: A } = Ol({ autoFocus: m }), { isHovered: M, hoverProps: te } = Fl({ isDisabled: g }), N = W(() => ({ open: s.comboboxState === 0, disabled: g, hover: M, focus: I, autofocus: m }), [s, M, I, m, g]), B = bo({ ref: C, id: f, role: "combobox", type: h, "aria-controls": (n = s.optionsElement) == null ? void 0 : n.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find((R) => !R.dataRef.current.disabled && s.compare(R.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (o = s.options[s.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": G, "aria-describedby": K, "aria-autocomplete": "list", defaultValue: (l = (i = e.defaultValue) != null ? i : s.defaultValue !== void 0 ? c == null ? void 0 : c(s.defaultValue) : null) != null ? l : s.defaultValue, disabled: g || void 0, autoFocus: m, onCompositionStart: v, onCompositionEnd: b, onKeyDown: S, onChange: F, onFocus: P, onBlur: k }, A, te);
  return Ce()({ ourProps: B, theirProps: y, slot: N, defaultTag: Jd, name: "Combobox.Input" });
}
let tf = "button";
function nf(e, t) {
  var n;
  let r = Gt("Combobox.Button"), o = xn("Combobox.Button"), i = Ie(t, o.setButtonElement), l = Ve(), { id: s = `headlessui-combobox-button-${l}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...d } = e, f = Xl(r.inputElement), p = z(($) => {
    switch ($.key) {
      case $e.Space:
      case $e.Enter:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && Le(() => o.openCombobox()), f();
        return;
      case $e.ArrowDown:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && (Le(() => o.openCombobox()), r.value || o.goToOption(ye.First)), f();
        return;
      case $e.ArrowUp:
        $.preventDefault(), $.stopPropagation(), r.comboboxState === 1 && (Le(() => o.openCombobox()), r.value || o.goToOption(ye.Last)), f();
        return;
      case $e.Escape:
        if (r.comboboxState !== 0) return;
        $.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && $.stopPropagation(), Le(() => o.closeCombobox()), f();
        return;
      default:
        return;
    }
  }), c = z(($) => {
    $.preventDefault(), !hu($.currentTarget) && ($.button === To.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), f());
  }), g = Yn([s]), { isFocusVisible: m, focusProps: h } = Ol({ autoFocus: u }), { isHovered: y, hoverProps: x } = Fl({ isDisabled: a }), { pressed: C, pressProps: E } = tu({ disabled: a }), T = W(() => ({ open: r.comboboxState === 0, active: C || r.comboboxState === 0, disabled: a, value: r.value, hover: y, focus: m }), [r, y, m, C, a]), O = bo({ ref: i, id: s, type: oc(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": g, disabled: a || void 0, autoFocus: u, onMouseDown: c, onKeyDown: p }, h, x, E);
  return Ce()({ ourProps: O, theirProps: d, slot: T, defaultTag: tf, name: "Combobox.Button" });
}
let rf = "div", of = Nt.RenderStrategy | Nt.Static;
function lf(e, t) {
  var n, r, o;
  let i = Ve(), { id: l = `headlessui-combobox-options-${i}`, hold: s = !1, anchor: a, portal: u = !1, modal: d = !0, transition: f = !1, ...p } = e, c = Gt("Combobox.Options"), g = xn("Combobox.Options"), m = Sd(a);
  m && (u = !0);
  let [h, y] = $d(m), [x, C] = j(null), E = Rd(), T = Ie(t, m ? h : null, g.setOptionsElement, C), O = $t(c.optionsElement), $ = yn(), [_, v] = Jl(f, x, $ !== null ? ($ & Oe.Open) === Oe.Open : c.comboboxState === 0);
  jl(_, c.inputElement, g.closeCombobox);
  let b = c.__demoMode ? !1 : d && c.comboboxState === 0;
  Zl(b, O);
  let S = c.__demoMode ? !1 : d && c.comboboxState === 0;
  Bl(S, { allowed: se(() => [c.inputElement, c.buttonElement, c.optionsElement], [c.inputElement, c.buttonElement, c.optionsElement]) }), ue(() => {
    var B;
    c.optionsPropsRef.current.static = (B = e.static) != null ? B : !1;
  }, [c.optionsPropsRef, e.static]), ue(() => {
    c.optionsPropsRef.current.hold = s;
  }, [c.optionsPropsRef, s]), hc(c.comboboxState === 0, { container: c.optionsElement, accept(B) {
    return B.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : B.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(B) {
    B.setAttribute("role", "none");
  } });
  let F = Yn([(n = c.buttonElement) == null ? void 0 : n.id]), k = W(() => ({ open: c.comboboxState === 0, option: void 0 }), [c.comboboxState]), P = z(() => {
    g.setActivationTrigger(0);
  }), G = z((B) => {
    B.preventDefault(), g.setActivationTrigger(0);
  }), K = bo(m ? E() : {}, { "aria-labelledby": F, role: "listbox", "aria-multiselectable": c.mode === 1 ? !0 : void 0, id: l, ref: T, style: { ...p.style, ...y, "--input-width": ci(c.inputElement, !0).width, "--button-width": ci(c.buttonElement, !0).width }, onWheel: c.activationTrigger === 0 ? void 0 : P, onMouseDown: G, ...Ql(v) }), I = _ && c.comboboxState === 1, A = qr(I, (r = c.virtual) == null ? void 0 : r.options), M = qr(I, c.value), te = z((B) => c.compare(M, B));
  if (c.virtual) {
    if (A === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(p, { children: L.createElement(fn.Provider, { value: A !== c.virtual.options ? { ...c, virtual: { ...c.virtual, options: A } } : c }, L.createElement(Yd, { slot: k }, p.children)) });
  }
  let N = Ce();
  return L.createElement(xs, { enabled: u ? e.static || _ : !1 }, L.createElement(fn.Provider, { value: c.mode === 1 ? c : { ...c, isSelected: te } }, N({ ourProps: K, theirProps: { ...p, children: L.createElement(Id, { freeze: I }, typeof p.children == "function" ? (o = p.children) == null ? void 0 : o.call(p, k) : p.children) }, slot: k, defaultTag: rf, features: of, visible: _, name: "Combobox.Options" })));
}
let sf = "div";
function af(e, t) {
  var n, r, o, i;
  let l = Gt("Combobox.Option"), s = xn("Combobox.Option"), a = Ve(), { id: u = `headlessui-combobox-option-${a}`, value: d, disabled: f = (o = (r = (n = l.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, d)) != null ? o : !1, order: p = null, ...c } = e, g = Xl(l.inputElement), m = l.virtual ? l.activeOptionIndex === l.calculateIndex(d) : l.activeOptionIndex === null ? !1 : ((i = l.options[l.activeOptionIndex]) == null ? void 0 : i.id) === u, h = l.isSelected(d), y = H(null), x = mt({ disabled: f, value: d, domRef: y, order: p }), C = ce(Cs), E = Ie(t, y, C ? C.measureElement : null), T = z(() => {
    s.setIsTyping(!1), s.onChange(d);
  });
  ue(() => s.registerOption(u, x), [x, u]);
  let O = H(!(l.virtual || l.__demoMode));
  ue(() => {
    if (!l.virtual && !l.__demoMode) return Xe().requestAnimationFrame(() => {
      O.current = !0;
    });
  }, [l.virtual, l.__demoMode]), ue(() => {
    if (O.current && l.comboboxState === 0 && m && l.activationTrigger !== 0) return Xe().requestAnimationFrame(() => {
      var G, K;
      (K = (G = y.current) == null ? void 0 : G.scrollIntoView) == null || K.call(G, { block: "nearest" });
    });
  }, [y, m, l.comboboxState, l.activationTrigger, l.activeOptionIndex]);
  let $ = z((G) => {
    G.preventDefault(), G.button === To.Left && (f || (T(), ql() || requestAnimationFrame(() => g()), l.mode === 0 && s.closeCombobox()));
  }), _ = z(() => {
    if (f) return s.goToOption(ye.Nothing);
    let G = l.calculateIndex(d);
    s.goToOption(ye.Specific, G);
  }), v = cc(), b = z((G) => v.update(G)), S = z((G) => {
    if (!v.wasMoved(G) || f || m) return;
    let K = l.calculateIndex(d);
    s.goToOption(ye.Specific, K, 0);
  }), F = z((G) => {
    v.wasMoved(G) && (f || m && (l.optionsPropsRef.current.hold || s.goToOption(ye.Nothing)));
  }), k = W(() => ({ active: m, focus: m, selected: h, disabled: f }), [m, h, f]), P = { id: u, ref: E, role: "option", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, "aria-selected": h, disabled: void 0, onMouseDown: $, onFocus: _, onPointerEnter: b, onMouseEnter: b, onPointerMove: S, onMouseMove: S, onPointerLeave: F, onMouseLeave: F };
  return Ce()({ ourProps: P, theirProps: c, slot: k, defaultTag: sf, name: "Combobox.Option" });
}
let uf = be(Qd), Yr = be(nf), Ss = be(ef), cf = Fu, Es = be(lf), Xr = be(af), df = Object.assign(uf, { Input: Ss, Button: Yr, Label: cf, Options: Es, Option: Xr });
function ff(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = jt(e, "escape");
  xo(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === $e.Escape && n(o));
  });
}
function pf() {
  var e;
  let [t] = j(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = j((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return ue(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function gf({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = $t(n), o = z(() => {
    var i, l;
    let s = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? s.push(a) : "current" in a && a.current instanceof HTMLElement && s.push(a.current));
    if (t != null && t.current) for (let a of t.current) s.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((l = n == null ? void 0 : n.getRootNode()) == null ? void 0 : l.host)) || s.some((u) => a.contains(u)) || s.push(a));
    return s;
  });
  return { resolveContainers: o, contains: z((i) => o().some((l) => l.contains(i))) };
}
let Rs = me(null);
function Mi({ children: e, node: t }) {
  let [n, r] = j(null), o = $s(t ?? n);
  return L.createElement(Rs.Provider, { value: o }, e, o === null && L.createElement(sn, { features: Dt.Hidden, ref: (i) => {
    var l, s;
    if (i) {
      for (let a of (s = (l = Bt(i)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? s : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function $s(e = null) {
  var t;
  return (t = ce(Rs)) != null ? t : e;
}
function Oo() {
  let e = H(!1);
  return ue(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Zt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Zt || {});
function mf() {
  let e = H(0);
  return Kl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Ts(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let hf = "div";
var vt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(vt || {});
function vf(e, t) {
  let n = H(null), r = Ie(n, t), { initialFocus: o, initialFocusFallback: i, containers: l, features: s = 15, ...a } = e;
  bn() || (s = 0);
  let u = $t(n);
  bf(s, { ownerDocument: u });
  let d = xf(s, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  Cf(s, { ownerDocument: u, container: n, containers: l, previousActiveElement: d });
  let f = mf(), p = z((x) => {
    let C = n.current;
    C && ((E) => E())(() => {
      Pe(f.current, { [Zt.Forwards]: () => {
        nn(C, nt.First, { skipElements: [x.relatedTarget, i] });
      }, [Zt.Backwards]: () => {
        nn(C, nt.Last, { skipElements: [x.relatedTarget, i] });
      } });
    });
  }), c = jt(!!(s & 2), "focus-trap#tab-lock"), g = Rt(), m = H(!1), h = { ref: r, onKeyDown(x) {
    x.key == "Tab" && (m.current = !0, g.requestAnimationFrame(() => {
      m.current = !1;
    }));
  }, onBlur(x) {
    if (!(s & 4)) return;
    let C = Ts(l);
    n.current instanceof HTMLElement && C.add(n.current);
    let E = x.relatedTarget;
    E instanceof HTMLElement && E.dataset.headlessuiFocusGuard !== "true" && (Fs(C, E) || (m.current ? nn(n.current, Pe(f.current, { [Zt.Forwards]: () => nt.Next, [Zt.Backwards]: () => nt.Previous }) | nt.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && it(x.target)));
  } }, y = Ce();
  return L.createElement(L.Fragment, null, c && L.createElement(sn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Dt.Focusable }), y({ ourProps: h, theirProps: a, defaultTag: hf, name: "FocusTrap" }), c && L.createElement(sn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Dt.Focusable }));
}
let _f = be(vf), wf = Object.assign(_f, { features: vt });
function yf(e = !0) {
  let t = H(qe.slice());
  return an(([n], [r]) => {
    r === !0 && n === !1 && Gn(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = qe.slice());
  }, [e, qe, t]), z(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function bf(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = yf(n);
  an(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && it(r());
  }, [n]), vs(() => {
    n && it(r());
  });
}
function xf(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = H(null), l = jt(!!(e & 1), "focus-trap#initial-focus"), s = Oo();
  return an(() => {
    if (e === 0) return;
    if (!l) {
      o != null && o.current && it(o.current);
      return;
    }
    let a = n.current;
    a && Gn(() => {
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
      if (r != null && r.current) it(r.current);
      else {
        if (e & 16) {
          if (nn(a, nt.First | nt.AutoFocus) !== jr.Error) return;
        } else if (nn(a, nt.First) !== jr.Error) return;
        if (o != null && o.current && (it(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), i;
}
function Cf(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = Oo(), l = !!(e & 4);
  xo(t == null ? void 0 : t.defaultView, "focus", (s) => {
    if (!l || !i.current) return;
    let a = Ts(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let u = o.current;
    if (!u) return;
    let d = s.target;
    d && d instanceof HTMLElement ? Fs(a, d) ? (o.current = d, it(d)) : (s.preventDefault(), s.stopPropagation(), it(u)) : it(o.current);
  }, !0);
}
function Fs(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Os(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Ms) !== fe || L.Children.count(e.children) === 1;
}
let tr = me(null);
tr.displayName = "TransitionContext";
var Sf = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Sf || {});
function Ef() {
  let e = ce(tr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Rf() {
  let e = ce(nr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let nr = me(null);
nr.displayName = "NestingContext";
function rr(e) {
  return "children" in e ? rr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Is(e, t) {
  let n = mt(e), r = H([]), o = Oo(), i = Rt(), l = z((c, g = ct.Hidden) => {
    let m = r.current.findIndex(({ el: h }) => h === c);
    m !== -1 && (Pe(g, { [ct.Unmount]() {
      r.current.splice(m, 1);
    }, [ct.Hidden]() {
      r.current[m].state = "hidden";
    } }), i.microTask(() => {
      var h;
      !rr(r) && o.current && ((h = n.current) == null || h.call(n));
    }));
  }), s = z((c) => {
    let g = r.current.find(({ el: m }) => m === c);
    return g ? g.state !== "visible" && (g.state = "visible") : r.current.push({ el: c, state: "visible" }), () => l(c, ct.Unmount);
  }), a = H([]), u = H(Promise.resolve()), d = H({ enter: [], leave: [] }), f = z((c, g, m) => {
    a.current.splice(0), t && (t.chains.current[g] = t.chains.current[g].filter(([h]) => h !== c)), t == null || t.chains.current[g].push([c, new Promise((h) => {
      a.current.push(h);
    })]), t == null || t.chains.current[g].push([c, new Promise((h) => {
      Promise.all(d.current[g].map(([y, x]) => x)).then(() => h());
    })]), g === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => m(g)) : m(g);
  }), p = z((c, g, m) => {
    Promise.all(d.current[g].splice(0).map(([h, y]) => y)).then(() => {
      var h;
      (h = a.current.shift()) == null || h();
    }).then(() => m(g));
  });
  return W(() => ({ children: r, register: s, unregister: l, onStart: f, onStop: p, wait: u, chains: d }), [s, l, r, f, p, d, u]);
}
let Ms = fe, Ps = Nt.RenderStrategy;
function $f(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: u, enterFrom: d, enterTo: f, entered: p, leave: c, leaveFrom: g, leaveTo: m, ...h } = e, [y, x] = j(null), C = H(null), E = Os(e), T = Ie(...E ? [C, t, x] : t === null ? [] : [t]), O = (n = h.unmount) == null || n ? ct.Unmount : ct.Hidden, { show: $, appear: _, initial: v } = Ef(), [b, S] = j($ ? "visible" : "hidden"), F = Rf(), { register: k, unregister: P } = F;
  ue(() => k(C), [k, C]), ue(() => {
    if (O === ct.Hidden && C.current) {
      if ($ && b !== "visible") {
        S("visible");
        return;
      }
      return Pe(b, { hidden: () => P(C), visible: () => k(C) });
    }
  }, [b, C, k, P, $, O]);
  let G = bn();
  ue(() => {
    if (E && G && b === "visible" && C.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [C, b, G, E]);
  let K = v && !_, I = _ && $ && v, A = H(!1), M = Is(() => {
    A.current || (S("hidden"), P(C));
  }, F), te = z((oe) => {
    A.current = !0;
    let U = oe ? "enter" : "leave";
    M.onStart(C, U, (J) => {
      J === "enter" ? i == null || i() : J === "leave" && (s == null || s());
    });
  }), N = z((oe) => {
    let U = oe ? "enter" : "leave";
    A.current = !1, M.onStop(C, U, (J) => {
      J === "enter" ? l == null || l() : J === "leave" && (a == null || a());
    }), U === "leave" && !rr(M) && (S("hidden"), P(C));
  });
  ie(() => {
    E && o || (te($), N($));
  }, [$, E, o]);
  let B = !(!o || !E || !G || K), [, R] = Jl(B, y, $, { start: te, end: N }), le = ut({ ref: T, className: ((r = zr(h.className, I && u, I && d, R.enter && u, R.enter && R.closed && d, R.enter && !R.closed && f, R.leave && c, R.leave && !R.closed && g, R.leave && R.closed && m, !R.transition && $ && p)) == null ? void 0 : r.trim()) || void 0, ...Ql(R) }), ee = 0;
  b === "visible" && (ee |= Oe.Open), b === "hidden" && (ee |= Oe.Closed), R.enter && (ee |= Oe.Opening), R.leave && (ee |= Oe.Closing);
  let ae = Ce();
  return L.createElement(nr.Provider, { value: M }, L.createElement(hs, { value: ee }, ae({ ourProps: le, theirProps: h, defaultTag: Ms, features: Ps, visible: b === "visible", name: "Transition.Child" })));
}
function Tf(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = H(null), s = Os(e), a = Ie(...s ? [l, t] : t === null ? [] : [t]);
  bn();
  let u = yn();
  if (n === void 0 && u !== null && (n = (u & Oe.Open) === Oe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [d, f] = j(n ? "visible" : "hidden"), p = Is(() => {
    n || f("hidden");
  }), [c, g] = j(!0), m = H([n]);
  ue(() => {
    c !== !1 && m.current[m.current.length - 1] !== n && (m.current.push(n), g(!1));
  }, [m, n]);
  let h = W(() => ({ show: n, appear: r, initial: c }), [n, r, c]);
  ue(() => {
    n ? f("visible") : !rr(p) && l.current !== null && f("hidden");
  }, [n, p]);
  let y = { unmount: o }, x = z(() => {
    var T;
    c && g(!1), (T = e.beforeEnter) == null || T.call(e);
  }), C = z(() => {
    var T;
    c && g(!1), (T = e.beforeLeave) == null || T.call(e);
  }), E = Ce();
  return L.createElement(nr.Provider, { value: p }, L.createElement(tr.Provider, { value: h }, E({ ourProps: { ...y, as: fe, children: L.createElement(ks, { ref: a, ...y, ...i, beforeEnter: x, beforeLeave: C }) }, theirProps: {}, defaultTag: fe, features: Ps, visible: d === "visible", name: "Transition" })));
}
function Ff(e, t) {
  let n = ce(tr) !== null, r = yn() !== null;
  return L.createElement(L.Fragment, null, !n && r ? L.createElement(Zr, { ref: t, ...e }) : L.createElement(ks, { ref: t, ...e }));
}
let Zr = be(Tf), ks = be($f), Io = be(Ff), Of = Object.assign(Zr, { Child: Io, Root: Zr });
var If = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(If || {}), Mf = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Mf || {});
let Pf = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Mo = me(null);
Mo.displayName = "DialogContext";
function or(e) {
  let t = ce(Mo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, or), n;
  }
  return t;
}
function kf(e, t) {
  return Pe(t.type, Pf, e, t);
}
let Pi = be(function(e, t) {
  let n = Ve(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: l, role: s = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: d = !1, ...f } = e, p = H(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (p.current || (p.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let c = yn();
  o === void 0 && c !== null && (o = (c & Oe.Open) === Oe.Open);
  let g = H(null), m = Ie(g, t), h = $t(g), y = o ? 0 : 1, [x, C] = st(kf, { titleId: null, descriptionId: null, panelRef: jn() }), E = z(() => i(!1)), T = z((N) => C({ type: 0, id: N })), O = bn() ? y === 0 : !1, [$, _] = Bd(), v = { get current() {
    var N;
    return (N = x.panelRef.current) != null ? N : g.current;
  } }, b = $s(), { resolveContainers: S } = gf({ mainTreeNode: b, portals: $, defaultContainers: [v] }), F = c !== null ? (c & Oe.Closing) === Oe.Closing : !1;
  Bl(u || F ? !1 : O, { allowed: z(() => {
    var N, B;
    return [(B = (N = g.current) == null ? void 0 : N.closest("[data-headlessui-portal]")) != null ? B : null];
  }), disallowed: z(() => {
    var N;
    return [(N = b == null ? void 0 : b.closest("body > *:not(#headlessui-portal-root)")) != null ? N : null];
  }) }), Yl(O, S, (N) => {
    N.preventDefault(), E();
  }), ff(O, h == null ? void 0 : h.defaultView, (N) => {
    N.preventDefault(), N.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), E();
  }), Zl(u || F ? !1 : O, h, S), jl(O, g, E);
  let [k, P] = yu(), G = W(() => [{ dialogState: y, close: E, setTitleId: T, unmount: d }, x], [y, x, E, T, d]), K = W(() => ({ open: y === 0 }), [y]), I = { ref: m, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : y === 0 ? !0 : void 0, "aria-labelledby": x.titleId, "aria-describedby": k, unmount: d }, A = !pf(), M = vt.None;
  O && !u && (M |= vt.RestoreFocus, M |= vt.TabLock, a && (M |= vt.AutoFocus), A && (M |= vt.InitialFocus));
  let te = Ce();
  return L.createElement(Md, null, L.createElement(Ii, { force: !0 }, L.createElement(xs, null, L.createElement(Mo.Provider, { value: G }, L.createElement(bs, { target: g }, L.createElement(Ii, { force: !1 }, L.createElement(P, { slot: K }, L.createElement(_, null, L.createElement(wf, { initialFocus: l, initialFocusFallback: g, containers: S, features: M }, L.createElement(Iu, { value: E }, te({ ourProps: I, theirProps: f, slot: K, defaultTag: Af, features: Lf, visible: y === 0, name: "Dialog" })))))))))));
}), Af = "div", Lf = Nt.RenderStrategy | Nt.Static;
function Nf(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = yn(), l = e.hasOwnProperty("open") || i !== null, s = e.hasOwnProperty("onClose");
  if (!l && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? L.createElement(Mi, null, L.createElement(Of, { show: r, transition: n, unmount: o.unmount }, L.createElement(Pi, { ref: t, ...o }))) : L.createElement(Mi, null, L.createElement(Pi, { ref: t, open: r, ...o }));
}
let Df = "div";
function Vf(e, t) {
  let n = Ve(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: l, unmount: s }, a] = or("Dialog.Panel"), u = Ie(t, a.panelRef), d = W(() => ({ open: l === 0 }), [l]), f = z((h) => {
    h.stopPropagation();
  }), p = { ref: u, id: r, onClick: f }, c = o ? Io : fe, g = o ? { unmount: s } : {}, m = Ce();
  return L.createElement(c, { ...g }, m({ ourProps: p, theirProps: i, slot: d, defaultTag: Df, name: "Dialog.Panel" }));
}
let Hf = "div";
function zf(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = or("Dialog.Backdrop"), l = W(() => ({ open: o === 0 }), [o]), s = { ref: t, "aria-hidden": !0 }, a = n ? Io : fe, u = n ? { unmount: i } : {}, d = Ce();
  return L.createElement(a, { ...u }, d({ ourProps: s, theirProps: r, slot: l, defaultTag: Hf, name: "Dialog.Backdrop" }));
}
let Bf = "h2";
function jf(e, t) {
  let n = Ve(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: l }] = or("Dialog.Title"), s = Ie(t);
  ie(() => (l(r), () => l(null)), [r, l]);
  let a = W(() => ({ open: i === 0 }), [i]), u = { ref: s, id: r };
  return Ce()({ ourProps: u, theirProps: o, slot: a, defaultTag: Bf, name: "Dialog.Title" });
}
let Uf = be(Nf), As = be(Vf), Wf = be(zf), Ls = be(jf), Gf = Object.assign(Uf, { Panel: As, Title: Ls, Description: Su });
function qf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const Kf = /* @__PURE__ */ he(qf);
function Yf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Xf = /* @__PURE__ */ he(Yf);
function Zf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
  }));
}
const Qf = /* @__PURE__ */ he(Zf);
function Jf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const ep = /* @__PURE__ */ he(Jf);
function tp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const np = /* @__PURE__ */ he(tp);
function rp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  }));
}
const op = /* @__PURE__ */ he(rp);
function ip({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const lp = /* @__PURE__ */ he(ip);
function sp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ap = /* @__PURE__ */ he(sp);
function up({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const Ns = /* @__PURE__ */ he(up);
function cp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const dp = /* @__PURE__ */ he(cp);
function fp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const pp = /* @__PURE__ */ he(fp);
function gp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const Ds = /* @__PURE__ */ he(gp), mp = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options" } }, hp = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, uploader: { dragAndDrop: "Drag and drop your file here", fileSizeLimit: "Limit {{limit}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, vp = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", mappingsNotValidTooltip: "Please set all required mappings", incomingColumn: "Incoming column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}" }, _p = { validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, wp = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, yp = {
  components: mp,
  importer: hp,
  mapper: vp,
  sheet: _p,
  validators: wp
}, bp = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options" } }, xp = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, uploader: { dragAndDrop: "Glissez et déposez votre fichier ici", fileSizeLimit: "Limite {{limit}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, Cp = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", mappingsNotValidTooltip: "Veuillez définir toutes les mappings requis", incomingColumn: "Colonne entrante", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}" }, Sp = { validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Ep = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, Rp = {
  components: bp,
  importer: xp,
  mapper: Cp,
  sheet: Sp,
  validators: Ep
}, $p = {
  en: yp,
  fr: Rp
}, Tp = "en";
function ki(e, t) {
  const n = t.split(".");
  let r = $p[e];
  for (const o of n)
    if (r && typeof r == "object")
      r = r[o];
    else
      return t;
  return typeof r == "string" ? r : t;
}
function Fp(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Op(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ w("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    if (o) {
      const i = o[1];
      return t[i] ?? `{${i}}`;
    }
    return r;
  }) });
}
const Vs = me(
  {}
);
function Ip({
  children: e,
  selectedLocale: t
}) {
  const n = t ?? Tp;
  function r(i, l = {}) {
    const s = ki(n, i);
    return Fp(s, l);
  }
  function o(i, l = {}) {
    const s = ki(n, i);
    return Op(s, l);
  }
  return /* @__PURE__ */ w(Vs.Provider, { value: { t: r, tHtml: o }, children: e });
}
function ke() {
  return ce(Vs);
}
function Qr({
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
      icon: /* @__PURE__ */ w(
        lp,
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
  }, { icon: d, btnVariant: f, bgColor: p } = u[s];
  return /* @__PURE__ */ w(Gf, { open: e, onClose: t, className: "relative z-10", children: [
    /* @__PURE__ */ w(
      Wf,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ w("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ w("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ w(
      As,
      {
        transition: !0,
        className: "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ w("div", { className: "sm:flex sm:items-start", children: [
            d && /* @__PURE__ */ w(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${p} sm:mx-0 sm:size-10`,
                children: d
              }
            ),
            /* @__PURE__ */ w("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ w(
                Ls,
                {
                  as: "h3",
                  className: "text-base font-semibold text-gray-900",
                  children: n
                }
              ),
              r && /* @__PURE__ */ w("div", { className: "mt-2", children: /* @__PURE__ */ w("p", { className: "text-sm text-gray-500", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ w("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ w("div", { className: "sm:ml-3 sm:w-auto", children: /* @__PURE__ */ w(
              Ye,
              {
                variant: f,
                onClick: () => {
                  l(), t(!1);
                },
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ w("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ w(
              Ye,
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
const Mp = he(function({ children: t }, n) {
  return /* @__PURE__ */ w(
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
function Pp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const kp = /* @__PURE__ */ he(Pp);
function Ap({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const Lp = /* @__PURE__ */ he(Ap);
function Np({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const Dp = /* @__PURE__ */ he(Np);
function Vp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const Hp = /* @__PURE__ */ he(Vp);
function zp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const Hs = /* @__PURE__ */ he(zp), zs = he(
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
    function d(f) {
      const p = f.target, c = s === "number" ? p == null ? void 0 : p.valueAsNumber : p == null ? void 0 : p.value;
      return (typeof c == "number" && isNaN(c) ? "" : c) ?? "";
    }
    return /* @__PURE__ */ w("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ w(
        "input",
        {
          ref: a,
          type: s,
          inputMode: s === "number" ? "numeric" : "text",
          placeholder: r,
          value: e,
          onChange: (f) => n == null ? void 0 : n(d(f)),
          className: `${i} ${o != null ? "pl-10" : ""} ${l ? "pr-10" : ""} focus:outline-primary col-start-1 row-start-1 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`,
          onBlur: (f) => t == null ? void 0 : t(d(f))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
      }),
      u && /* @__PURE__ */ w(
        "span",
        {
          onClick: (f) => {
            f.stopPropagation(), n == null || n("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ w(
            Hs,
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
function pn({
  value: e,
  options: t,
  onChange: n,
  multiple: r = !1,
  compareFunction: o = (d, f) => d === f,
  clearable: i = !1,
  searchable: l = !1,
  placeholder: s,
  classes: a,
  displayPlaceholderWhenSelected: u = !1
}) {
  const { t: d } = ke(), [f, p] = j(""), c = (v) => r && Array.isArray(e) ? e.some((b) => o(b, v)) : o(e, v), g = (v) => {
    if (p(""), r) {
      const b = Array.isArray(v) ? v : [v];
      n(b);
    } else
      n(v);
  }, m = () => {
    p(""), n(r ? [] : null);
  }, h = t.filter((v) => c(v.value)), y = h.map((v) => v.label).join(", "), x = f && l ? t.filter(
    (v) => String(v.label).toLowerCase().includes(f.toLowerCase())
  ) : t, C = s ?? d("components.select.optionPlaceholder"), E = () => l ? y : h.length > 0 ? u ? `${C}: ${y}` : y : "", O = x.some((v) => v.group) ? Object.entries(
    x.reduce(
      (v, b) => {
        const S = b.group || "ungrouped";
        return v[S] = v[S] || [], v[S].push(b), v;
      },
      {}
    )
  ).map(([v, b]) => ({
    label: v,
    items: b
  })) : [{ label: null, items: x }], $ = O.every(({ items: v }) => v.length === 0), _ = i && h.length > 0;
  return /* @__PURE__ */ w(df, { value: e, onChange: g, multiple: r, children: /* @__PURE__ */ w("div", { className: "relative", children: [
    /* @__PURE__ */ w(Yr, { className: "w-full", children: /* @__PURE__ */ w(
      Ss,
      {
        className: `${a} focus:outline-primary block w-full cursor-pointer truncate rounded-md bg-white py-1.5 focus:cursor-text ${_ ? "pr-12" : "pr-2"} pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm`,
        displayValue: E,
        onChange: (v) => l && p(v.target.value),
        placeholder: C,
        readOnly: !l
      }
    ) }),
    _ && /* @__PURE__ */ w(
      "span",
      {
        onClick: (v) => {
          v.stopPropagation(), m();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ w(
          Hs,
          {
            className: "h-5 w-5 text-gray-500 hover:text-gray-700",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ w(Yr, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ w(
      Dp,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      }
    ) }),
    /* @__PURE__ */ w(
      Es,
      {
        anchor: "bottom",
        transition: !0,
        className: "absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm",
        children: [
          $ && /* @__PURE__ */ w(
            Xr,
            {
              disabled: !0,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-2 pr-9 pl-3 text-gray-400 select-none",
              children: /* @__PURE__ */ w("span", { className: "block truncate font-normal", children: d("components.select.noOptions") })
            },
            "no-options"
          ),
          O.map(({ label: v, items: b }) => /* @__PURE__ */ w("div", { children: [
            v && /* @__PURE__ */ w("div", { className: "py-2 pr-9 pl-3 text-gray-400 uppercase", children: v }),
            b.map((S) => /* @__PURE__ */ w(
              Xr,
              {
                value: S.value,
                className: "group data-focus:bg-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden",
                children: [
                  S.icon,
                  /* @__PURE__ */ w("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: S.label }),
                  c(S.value) && /* @__PURE__ */ w("span", { className: "text-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white", children: /* @__PURE__ */ w(kp, { "aria-hidden": "true", className: "h-5 w-5" }) })
                ]
              },
              S.value
            ))
          ] }, v || "all"))
        ]
      }
    )
  ] }) });
}
function Bp({ tabs: e, activeTab: t, onTabChange: n }) {
  return /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ w("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ w(
      pn,
      {
        options: e,
        value: t,
        onChange: (r) => n(r)
      }
    ) }),
    /* @__PURE__ */ w("div", { className: "hidden sm:block", children: /* @__PURE__ */ w("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ w("nav", { "aria-label": "Tabs", className: "-mb-px flex space-x-8", children: e.map((r) => /* @__PURE__ */ w(
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
const jp = zt(
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
), Up = zt("group relative h-full w-full", {
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
function Wp({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = jp({ variant: e }), o = Up({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ w("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ w("span", { className: r, children: n })
  ] });
}
const Gp = zt(
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
function qp({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ w("span", { className: "isolate inline-flex rounded-md shadow-xs", children: t.map((n, r) => /* @__PURE__ */ w(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      className: Gp({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const Kp = zt(
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
function Pt({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r = !1
}) {
  const o = Kp({ hidden: r });
  return /* @__PURE__ */ w("div", { className: `${n} group relative`, children: [
    t,
    /* @__PURE__ */ w("div", { className: o, children: [
      e,
      /* @__PURE__ */ w("div", { className: "absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900" })
    ] })
  ] });
}
const Yp = zt("inline-flex items-center rounded-md px-1.5 py-0.5", {
  variants: {
    variant: {
      primary: "bg-primary-extra-light text-xs font-medium"
    },
    defaultVariants: {
      variant: "primary"
    }
  }
});
function Bs({ children: e, variant: t }) {
  const n = Yp({ variant: t });
  return /* @__PURE__ */ w("div", { className: n, children: e });
}
const Xp = 100, js = 5, br = ["text/csv"], Ai = ",", Zp = 500;
function Qp({ setFile: e }) {
  const { t, tHtml: n } = ke(), r = H(null), o = (l) => {
    var a;
    const s = l.target;
    if ((a = s.files) != null && a.length) {
      const u = s.files[0];
      br.includes(u.type) && e(u);
    }
  };
  return /* @__PURE__ */ w(
    Pa,
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
          br.includes(a.type) && e(a);
        }
      },
      children: [
        /* @__PURE__ */ w("div", { className: "p-7.5", children: /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ w(np, { className: "text-primary mb-3 h-12 w-12" }),
          /* @__PURE__ */ w("p", { className: "mb-3", children: t("importer.uploader.dragAndDrop") }),
          /* @__PURE__ */ w("div", { className: "text-sm text-gray-500", children: [
            n("importer.uploader.fileSizeLimit", {
              limit: /* @__PURE__ */ w("b", { children: "20MB" })
            }),
            " ",
            "• CSV"
          ] }),
          /* @__PURE__ */ w("div", { className: "mt-3", children: /* @__PURE__ */ w(Ye, { children: t("importer.uploader.browseFiles") }) })
        ] }) }),
        /* @__PURE__ */ w(
          "input",
          {
            ref: r,
            type: "file",
            accept: br.join(","),
            style: { display: "none" },
            onChange: o
          }
        )
      ]
    }
  );
}
function Us(e, t) {
  return e.indexOf(t) !== -1;
}
function Ws(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function Gs(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
class Tt {
  constructor(t) {
    Ae(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class Jp extends Tt {
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
function eg(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class ir extends Tt {
  constructor(n) {
    super(n);
    Ae(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(eg(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test(n == null ? void 0 : n.toString()))
      return this.definition.error || "validators.regex";
  }
}
class tg extends ir {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "email"
    });
  }
}
class ng extends Tt {
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
class rg extends Tt {
  isValid(t) {
    if (!(!isNaN(t) && t !== null && t !== void 0))
      return this.definition.error || "validators.integer";
  }
}
class og extends Tt {
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
class ig extends ir {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "phone_number"
    });
  }
}
class lg extends ir {
  constructor() {
    super({
      regex: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      validate: "postal_code"
    });
  }
}
class sg extends Tt {
  isValid(t) {
    if (!t)
      return this.definition.error || "validators.required";
  }
}
class ag extends Tt {
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
function ug(e) {
  const t = {
    regex_matches: ir,
    required: sg,
    unique: ag,
    includes: ng,
    multi_includes: og,
    is_integer: rg,
    postal_code: lg,
    phone_number: ig,
    email: tg,
    custom: Jp
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
const cg = (e) => e == null, dg = (e) => e.rows.filter((t) => Object.keys(t).length > 0), fg = (e) => cg(e) || e === "", Li = (e) => [...new Set(e)];
function zn(e) {
  return e == null ? null : e.toString().toLowerCase().replace("_", "").replace(" ", "");
}
function qs(e, t) {
  var o, i, l;
  const n = e.typeArguments, r = t.find(
    (s) => s.sheetId === n.sheetId
  );
  return ((l = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((s) => s[n.sheetColumnId])) == null ? void 0 : i.filter((s) => !fg(s))) == null ? void 0 : l.filter((s, a, u) => u.indexOf(s) === a)) ?? [];
}
function pg(e, t) {
  const n = e.columns.map((a) => a.id).join(Ai), r = t.map(
    (a) => e.columns.map((u) => a[u.id]).join(Ai)
  ), o = [n, ...r].join(`
`), i = new Blob([o], { type: "text/csv" }), l = URL.createObjectURL(i), s = document.createElement("a");
  s.href = l, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(l);
}
function Ks(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function gg(e, t, n, r, o, i, l) {
  return W(() => {
    let a = e.rows;
    switch (n) {
      case "errors":
        a = e.rows.filter(
          (u, d) => r.some((f) => f.rowIndex === d)
        );
        break;
      case "valid":
        a = e.rows.filter(
          (u, d) => !r.some((f) => f.rowIndex === d)
        );
        break;
      case "all":
      default:
        a = e.rows;
    }
    return o != null && (a = a.filter((u) => {
      const d = Ks(t, i.id, u);
      return r.find(
        (p) => p.rowIndex === d && p.columnId === o
      ) != null;
    })), l.trim() !== "" && (a = a.filter(
      (u) => Object.values(u).some(
        (d) => {
          var f;
          return (f = zn(d)) == null ? void 0 : f.includes(zn(l));
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
function lr(e) {
  return e.validators && e.validators.length > 0 ? !!e.validators.find(
    (n) => n.validate === "required"
  ) : !1;
}
function mg(e, t) {
  const n = [];
  if (e.type === "enum" && n.push({
    values: e.typeArguments.values.map((r) => r.value),
    validate: "includes"
  }), e.type === "reference") {
    const r = qs(
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
function hg(e, t, n) {
  const r = [], o = Ws(e.columns, (i, l) => {
    l[i.id] = [], [
      ...i.validators ?? [],
      ...mg(i, n)
    ].forEach((a) => {
      l[i.id].push(
        ug(a)
      );
    });
  });
  return e.columns.forEach((i) => {
    t.rows.forEach((l, s) => {
      if (!Gs(l) || !(i.id in l) && !lr(i))
        return;
      const a = l[i.id];
      o[i.id].forEach((d) => {
        const f = d.isValid(a, l);
        f != null && r.push({
          sheetId: e.id,
          columnId: i.id,
          rowIndex: s,
          message: f
        });
      });
    });
  }), r;
}
function xr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = hg(r, o, t);
      n.push(...i);
    }
  }), n;
}
function vg(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function _g(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (i.type === "reference")
        return !1;
      const l = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => zn(a)), s = zn(r);
      return l.includes(s);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const wg = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = _g(r, t);
    n.push(...o);
  }), vg(n);
};
function yg(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function bg(e, t) {
  const n = xg(e, t), r = Cg(n);
  return Sg(r);
}
function xg(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, js);
}
function Cg(e) {
  return [
    ...e,
    ...Array(js - e.length).fill("")
  ];
}
function Sg(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > Zp && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function Eg(e, t) {
  const { t: n } = ke();
  return e.flatMap(
    (o) => o.columns.filter((i) => i.type !== "reference").map((i) => ({
      label: `${i.label}${lr(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (l) => l.sheetId === o.id && l.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => Rg(o, i, n("mapper.unused")));
}
function Rg(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function $g(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (lr(r) && r.type !== "reference" && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function Tg({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = ke();
  return t && /* @__PURE__ */ w("div", { className: "m-4 rounded-sm border border-gray-300 bg-white px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ w("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ w("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ w("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ w("table", { className: "min-w-full divide-y divide-gray-300", children: [
    /* @__PURE__ */ w("thead", { children: /* @__PURE__ */ w("tr", { children: /* @__PURE__ */ w(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ w(Bs, { variant: "primary", children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ w("tbody", { className: "divide-y divide-gray-300", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ w("tr", { children: /* @__PURE__ */ w("td", { className: "h-12 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: o || i === 0 && /* @__PURE__ */ w("span", { className: "text-gray-500 italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function Fg({
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
  return /* @__PURE__ */ w(
    "div",
    {
      className: "hover:bg-tertiary-light rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ w("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ w("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ w("div", { children: /* @__PURE__ */ w(Bs, { variant: "primary", children: e.slice(0, 30) }) }),
          /* @__PURE__ */ w("div", { className: "mx-5", children: /* @__PURE__ */ w(Xf, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ w("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ w(
          pn,
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
function Og({
  parsed: e,
  sheetDefinitions: t,
  currentMapping: n,
  onMappingsChanged: r,
  onMappingsSet: o,
  onBack: i
}) {
  const { t: l } = ke(), [s, a] = j(null), u = e.data, d = e.meta.fields, f = Eg(
    t,
    n
  ), p = $g(
    t,
    n
  ), c = W(() => s ? bg(u, s) : [], [s, u]);
  return /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ w("div", { className: "text-2xl", children: "Review and confirm each mapping" }),
    /* @__PURE__ */ w("div", { className: "flex justify-between space-x-5", children: [
      /* @__PURE__ */ w("div", { className: "flex-2", children: [
        /* @__PURE__ */ w("div", { className: "text-sm my-5 flex font-light uppercase", children: [
          /* @__PURE__ */ w("div", { className: "flex-1", children: l("mapper.incomingColumn") }),
          /* @__PURE__ */ w("div", { className: "flex-1", children: l("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ w("div", { className: "max-h-[70vh] overflow-y-auto", children: d.map((g, m) => {
          const h = n.find(
            (y) => y.csvColumnName === g
          ) ?? null;
          return /* @__PURE__ */ w(
            Fg,
            {
              csvHeader: g,
              currentMapping: h,
              setMapping: (y) => {
                const x = yg(
                  n,
                  g,
                  y
                );
                r(x);
              },
              mappingSelectionOptions: f,
              onMouseEnter: () => {
                a(g);
              }
            },
            m
          );
        }) })
      ] }),
      /* @__PURE__ */ w("div", { className: "flex-1 bg-gray-50", children: /* @__PURE__ */ w(
        Tg,
        {
          examples: c,
          csvHeader: s ?? ""
        }
      ) })
    ] }),
    /* @__PURE__ */ w("div", { className: "my-5 flex justify-between", children: [
      /* @__PURE__ */ w(Ye, { variant: "secondary", outline: !0, onClick: i, children: l("mapper.back") }),
      /* @__PURE__ */ w(
        Pt,
        {
          tooltipText: l("mapper.mappingsNotValidTooltip"),
          hidden: p,
          children: /* @__PURE__ */ w(Ye, { onClick: o, disabled: !p, children: l("mapper.confirm") })
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
function Ig() {
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
function dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function De(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: dt(n, r[e])
    }));
  };
}
function sr(e) {
  return e instanceof Function;
}
function Mg(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Pg(e, t) {
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
    if (!(s.length !== r.length || s.some((d, f) => r[f] !== d)))
      return o;
    r = s;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - l) * 100) / 100, f = Math.round((Date.now() - u) * 100) / 100, p = f / 16, c = (g, m) => {
        for (g = String(g); g.length < m; )
          g = " " + g;
        return g;
      };
      console.info(`%c⏱ ${c(f, 5)} /${c(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
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
function kg(e, t, n, r) {
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
function Ag(e, t, n, r) {
  var o, i;
  const s = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = s.accessorKey;
  let u = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, d;
  if (s.accessorFn ? d = s.accessorFn : a && (a.includes(".") ? d = (p) => {
    let c = p;
    for (const m of a.split(".")) {
      var g;
      c = (g = c) == null ? void 0 : g[m], process.env.NODE_ENV !== "production" && c === void 0 && console.warn(`"${m}" in deeply nested key "${a}" returned undefined.`);
    }
    return c;
  } : d = (p) => p[s.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(s.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let f = {
    id: `${String(u)}`,
    accessorFn: d,
    parent: r,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: Y(() => [!0], () => {
      var p;
      return [f, ...(p = f.columns) == null ? void 0 : p.flatMap((c) => c.getFlatColumns())];
    }, X(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: Y(() => [e._getOrderColumnsFn()], (p) => {
      var c;
      if ((c = f.columns) != null && c.length) {
        let g = f.columns.flatMap((m) => m.getLeafColumns());
        return p(g);
      }
      return [f];
    }, X(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(f, e);
  return f;
}
const Re = "debugHeaders";
function Ni(e, t, n) {
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
const Lg = {
  createTable: (e) => {
    e.getHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, l;
      const s = (i = r == null ? void 0 : r.map((f) => n.find((p) => p.id === f)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((f) => n.find((p) => p.id === f)).filter(Boolean)) != null ? l : [], u = n.filter((f) => !(r != null && r.includes(f.id)) && !(o != null && o.includes(f.id)));
      return $n(t, [...s, ...u, ...a], e);
    }, X(e.options, Re, "getHeaderGroups")), e.getCenterHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), $n(t, n, e, "center")), X(e.options, Re, "getCenterHeaderGroups")), e.getLeftHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return $n(t, i, e, "left");
    }, X(e.options, Re, "getLeftHeaderGroups")), e.getRightHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return $n(t, i, e, "right");
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
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []].map((d) => d.getLeafHeaders()).flat();
    }, X(e.options, Re, "getLeafHeaders"));
  }
};
function $n(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(p, c) {
    c === void 0 && (c = 1), l = Math.max(l, c), p.filter((g) => g.getIsVisible()).forEach((g) => {
      var m;
      (m = g.columns) != null && m.length && s(g.columns, c + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const u = (p, c) => {
    const g = {
      depth: c,
      id: [r, `${c}`].filter(Boolean).join("_"),
      headers: []
    }, m = [];
    p.forEach((h) => {
      const y = [...m].reverse()[0], x = h.column.depth === g.depth;
      let C, E = !1;
      if (x && h.column.parent ? C = h.column.parent : (C = h.column, E = !0), y && (y == null ? void 0 : y.column) === C)
        y.subHeaders.push(h);
      else {
        const T = Ni(n, C, {
          id: [r, c, C.id, h == null ? void 0 : h.id].filter(Boolean).join("_"),
          isPlaceholder: E,
          placeholderId: E ? `${m.filter((O) => O.column === C).length}` : void 0,
          depth: c,
          index: m.length
        });
        T.subHeaders.push(h), m.push(T);
      }
      g.headers.push(h), h.headerGroup = g;
    }), a.push(g), c > 0 && u(m, c - 1);
  }, d = t.map((p, c) => Ni(n, p, {
    depth: l,
    index: c
  }));
  u(d, l - 1), a.reverse();
  const f = (p) => p.filter((g) => g.column.getIsVisible()).map((g) => {
    let m = 0, h = 0, y = [0];
    g.subHeaders && g.subHeaders.length ? (y = [], f(g.subHeaders).forEach((C) => {
      let {
        colSpan: E,
        rowSpan: T
      } = C;
      m += E, y.push(T);
    })) : m = 1;
    const x = Math.min(...y);
    return h = h + x, g.colSpan = m, g.rowSpan = h, {
      colSpan: m,
      rowSpan: h
    };
  });
  return f((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const Ng = (e, t, n, r, o, i, l) => {
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
    getLeafRows: () => Pg(s.subRows, (a) => a.subRows),
    getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
    getParentRows: () => {
      let a = [], u = s;
      for (; ; ) {
        const d = u.getParentRow();
        if (!d) break;
        a.push(d), u = d;
      }
      return a.reverse();
    },
    getAllCells: Y(() => [e.getAllLeafColumns()], (a) => a.map((u) => kg(e, s, u, u.id)), X(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: Y(() => [s.getAllCells()], (a) => a.reduce((u, d) => (u[d.column.id] = d, u), {}), X(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, Dg = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Ys = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Ys.autoRemove = (e) => Be(e);
const Xs = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Xs.autoRemove = (e) => Be(e);
const Zs = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Zs.autoRemove = (e) => Be(e);
const Qs = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Qs.autoRemove = (e) => Be(e);
const Js = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Js.autoRemove = (e) => Be(e) || !(e != null && e.length);
const ea = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
ea.autoRemove = (e) => Be(e) || !(e != null && e.length);
const ta = (e, t, n) => e.getValue(t) === n;
ta.autoRemove = (e) => Be(e);
const na = (e, t, n) => e.getValue(t) == n;
na.autoRemove = (e) => Be(e);
const Po = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Po.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
Po.autoRemove = (e) => Be(e) || Be(e[0]) && Be(e[1]);
const tt = {
  includesString: Ys,
  includesStringSensitive: Xs,
  equalsString: Zs,
  arrIncludes: Qs,
  arrIncludesAll: Js,
  arrIncludesSome: ea,
  equals: ta,
  weakEquals: na,
  inNumberRange: Po
};
function Be(e) {
  return e == null || e === "";
}
const Vg = {
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
      return typeof r == "string" ? tt.includesString : typeof r == "number" ? tt.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? tt.equals : Array.isArray(r) ? tt.arrIncludes : tt.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return sr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : tt[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((d) => d.id === e.id), l = dt(n, i ? i.value : void 0);
        if (Di(o, l, e)) {
          var s;
          return (s = r == null ? void 0 : r.filter((d) => d.id !== e.id)) != null ? s : [];
        }
        const a = {
          id: e.id,
          value: l
        };
        if (i) {
          var u;
          return (u = r == null ? void 0 : r.map((d) => d.id === e.id ? a : d)) != null ? u : [];
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
        return (i = dt(t, o)) == null ? void 0 : i.filter((l) => {
          const s = n.find((a) => a.id === l.id);
          if (s) {
            const a = s.getFilterFn();
            if (Di(a, l.value, s))
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
function Di(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Hg = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), zg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Bg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, jg = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, Ug = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Wg = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Mg(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Gg = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), qg = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Kg = (e, t) => t.length, Cr = {
  sum: Hg,
  min: zg,
  max: Bg,
  extent: jg,
  mean: Ug,
  median: Wg,
  unique: Gg,
  uniqueCount: qg,
  count: Kg
}, Yg = {
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
        return Cr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Cr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return sr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : Cr[e.columnDef.aggregationFn];
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
function Xg(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const Zg = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: De("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = Y((n) => [rn(t, n)], (n) => n.findIndex((r) => r.id === e.id), X(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = rn(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = rn(t, n);
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
          const a = l.shift(), u = s.findIndex((d) => d.id === a);
          u > -1 && i.push(s.splice(u, 1)[0]);
        }
        i = [...i, ...s];
      }
      return Xg(i, n, r);
    }, X(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Sr = () => ({
  left: [],
  right: []
}), Qg = {
  getInitialState: (e) => ({
    columnPinning: Sr(),
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
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((f) => !(r != null && r.includes(f))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((f) => !(r != null && r.includes(f))), ...r]
          };
        }
        if (n === "left") {
          var u, d;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((f) => !(r != null && r.includes(f))), ...r],
            right: ((d = o == null ? void 0 : o.right) != null ? d : []).filter((f) => !(r != null && r.includes(f)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((f) => !(r != null && r.includes(f))),
          right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((f) => !(r != null && r.includes(f)))
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
      return e.setColumnPinning(t ? Sr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Sr());
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
}, Tn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Er = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Jg = {
  getDefaultColumnDef: () => Tn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Er(),
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Tn.minSize, (r = i ?? e.columnDef.size) != null ? r : Tn.size), (o = e.columnDef.maxSize) != null ? o : Tn.maxSize);
    }, e.getStart = Y((n) => [n, rn(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns", "getStart")), e.getAfter = Y((n) => [n, rn(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), Rr(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((y) => [y.column.id, y.column.getSize()]) : [[r.id, r.getSize()]], a = Rr(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, d = (y, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((C) => {
            var E, T;
            const O = t.options.columnResizeDirection === "rtl" ? -1 : 1, $ = (x - ((E = C == null ? void 0 : C.startOffset) != null ? E : 0)) * O, _ = Math.max($ / ((T = C == null ? void 0 : C.startSize) != null ? T : 0), -0.999999);
            return C.columnSizingStart.forEach((v) => {
              let [b, S] = v;
              u[b] = Math.round(Math.max(S + S * _, 0) * 100) / 100;
            }), {
              ...C,
              deltaOffset: $,
              deltaPercentage: _
            };
          }), (t.options.columnResizeMode === "onChange" || y === "end") && t.setColumnSizing((C) => ({
            ...C,
            ...u
          })));
        }, f = (y) => d("move", y), p = (y) => {
          d("end", y), t.setColumnSizingInfo((x) => ({
            ...x,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, c = n || typeof document < "u" ? document : null, g = {
          moveHandler: (y) => f(y.clientX),
          upHandler: (y) => {
            c == null || c.removeEventListener("mousemove", g.moveHandler), c == null || c.removeEventListener("mouseup", g.upHandler), p(y.clientX);
          }
        }, m = {
          moveHandler: (y) => (y.cancelable && (y.preventDefault(), y.stopPropagation()), f(y.touches[0].clientX), !1),
          upHandler: (y) => {
            var x;
            c == null || c.removeEventListener("touchmove", m.moveHandler), c == null || c.removeEventListener("touchend", m.upHandler), y.cancelable && (y.preventDefault(), y.stopPropagation()), p((x = y.touches[0]) == null ? void 0 : x.clientX);
          }
        }, h = em() ? {
          passive: !1
        } : !1;
        Rr(i) ? (c == null || c.addEventListener("touchmove", m.moveHandler, h), c == null || c.addEventListener("touchend", m.upHandler, h)) : (c == null || c.addEventListener("mousemove", g.moveHandler, h), c == null || c.addEventListener("mouseup", g.upHandler, h)), t.setColumnSizingInfo((y) => ({
          ...y,
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
      e.setColumnSizingInfo(t ? Er() : (n = e.initialState.columnSizingInfo) != null ? n : Er());
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
let Fn = null;
function em() {
  if (typeof Fn == "boolean") return Fn;
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
  return Fn = e, Fn;
}
function Rr(e) {
  return e.type === "touchstart";
}
const tm = {
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
function rn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const nm = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, rm = {
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
    e.getGlobalAutoFilterFn = () => tt.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return sr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : tt[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, om = {
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
}, Jr = 0, eo = 10, $r = () => ({
  pageIndex: Jr,
  pageSize: eo
}), im = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...$r(),
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
      const o = (i) => dt(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? $r() : (o = e.initialState.pagination) != null ? o : $r());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = dt(r, o.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Jr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Jr);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? eo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : eo);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, dt(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
        return {
          ...o,
          pageIndex: s,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let l = dt(r, (i = e.options.pageCount) != null ? i : -1);
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
}, Tr = () => ({
  top: [],
  bottom: []
}), lm = {
  getInitialState: (e) => ({
    rowPinning: Tr(),
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
        var u, d;
        if (n === "bottom") {
          var f, p;
          return {
            top: ((f = a == null ? void 0 : a.top) != null ? f : []).filter((m) => !(s != null && s.has(m))),
            bottom: [...((p = a == null ? void 0 : a.bottom) != null ? p : []).filter((m) => !(s != null && s.has(m))), ...Array.from(s)]
          };
        }
        if (n === "top") {
          var c, g;
          return {
            top: [...((c = a == null ? void 0 : a.top) != null ? c : []).filter((m) => !(s != null && s.has(m))), ...Array.from(s)],
            bottom: ((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((m) => !(s != null && s.has(m)))
          };
        }
        return {
          top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter((m) => !(s != null && s.has(m))),
          bottom: ((d = a == null ? void 0 : a.bottom) != null ? d : []).filter((m) => !(s != null && s.has(m)))
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
      return e.setRowPinning(t ? Tr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Tr());
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
}, sm = {
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
        to(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Y(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Fr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = Y(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Fr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = Y(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Fr(e, n) : {
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
        return to(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ko(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return no(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return no(e, n) === "all";
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
}, to = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, !0);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => to(e, s.id, n, r, o));
};
function Fr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var u;
      const d = ko(a, n);
      if (d && (r.push(a), o[a.id] = a), (u = a.subRows) != null && u.length && (a = {
        ...a,
        subRows: i(a.subRows)
      }), d)
        return a;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function ko(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function no(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (ko(l, t) ? i = !0 : o = !1), l.subRows && l.subRows.length)) {
      const s = no(l, t);
      s === "all" ? i = !0 : (s === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const ro = /([0-9]+)/gm, am = (e, t, n) => ra(gt(e.getValue(n)).toLowerCase(), gt(t.getValue(n)).toLowerCase()), um = (e, t, n) => ra(gt(e.getValue(n)), gt(t.getValue(n))), cm = (e, t, n) => Ao(gt(e.getValue(n)).toLowerCase(), gt(t.getValue(n)).toLowerCase()), dm = (e, t, n) => Ao(gt(e.getValue(n)), gt(t.getValue(n))), fm = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, pm = (e, t, n) => Ao(e.getValue(n), t.getValue(n));
function Ao(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function gt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ra(e, t) {
  const n = e.split(ro).filter(Boolean), r = t.split(ro).filter(Boolean);
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
const Xt = {
  alphanumeric: am,
  alphanumericCaseSensitive: um,
  text: cm,
  textCaseSensitive: dm,
  datetime: fm,
  basic: pm
}, gm = {
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
          return Xt.datetime;
        if (typeof i == "string" && (r = !0, i.split(ro).length > 1))
          return Xt.alphanumeric;
      }
      return r ? Xt.text : Xt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return sr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Xt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((l) => {
        const s = l == null ? void 0 : l.find((c) => c.id === e.id), a = l == null ? void 0 : l.findIndex((c) => c.id === e.id);
        let u = [], d, f = i ? n : o === "desc";
        if (l != null && l.length && e.getCanMultiSort() && r ? s ? d = "toggle" : d = "add" : l != null && l.length && a !== l.length - 1 ? d = "replace" : s ? d = "toggle" : d = "replace", d === "toggle" && (i || o || (d = "remove")), d === "add") {
          var p;
          u = [...l, {
            id: e.id,
            desc: f
          }], u.splice(0, u.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else d === "toggle" ? u = l.map((c) => c.id === e.id ? {
          ...c,
          desc: f
        } : c) : d === "remove" ? u = l.filter((c) => c.id !== e.id) : u = [{
          id: e.id,
          desc: f
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
}, mm = [
  Lg,
  tm,
  Zg,
  Qg,
  Dg,
  Vg,
  nm,
  //depends on ColumnFaceting
  rm,
  //depends on ColumnFiltering
  gm,
  Yg,
  //depends on RowSorting
  om,
  im,
  lm,
  sm,
  Jg
];
function hm(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...mm, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((p, c) => Object.assign(p, c.getDefaultOptions == null ? void 0 : c.getDefaultOptions(o)), {}), l = (p) => o.options.mergeOptions ? o.options.mergeOptions(i, p) : {
    ...i,
    ...p
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((p) => {
    var c;
    a = (c = p.getInitialState == null ? void 0 : p.getInitialState(a)) != null ? c : a;
  });
  const u = [];
  let d = !1;
  const f = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: a,
    _queue: (p) => {
      u.push(p), d || (d = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        d = !1;
      }).catch((c) => setTimeout(() => {
        throw c;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (p) => {
      const c = dt(p, o.options);
      o.options = l(c);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, c, g) => {
      var m;
      return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(p, c, g)) != null ? m : `${g ? [g.id, c].join(".") : c}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, c) => {
      let g = (c ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
      if (!g && (g = o.getCoreRowModel().rowsById[p], !g))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${p}`) : new Error();
      return g;
    },
    _getDefaultColumnDef: Y(() => [o.options.defaultColumn], (p) => {
      var c;
      return p = (c = p) != null ? c : {}, {
        header: (g) => {
          const m = g.header.column.columnDef;
          return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (g) => {
          var m, h;
          return (m = (h = g.renderValue()) == null || h.toString == null ? void 0 : h.toString()) != null ? m : null;
        },
        ...o._features.reduce((g, m) => Object.assign(g, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
        ...p
      };
    }, X(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: Y(() => [o._getColumnDefs()], (p) => {
      const c = function(g, m, h) {
        return h === void 0 && (h = 0), g.map((y) => {
          const x = Ag(o, y, h, m), C = y;
          return x.columns = C.columns ? c(C.columns, x, h + 1) : [], x;
        });
      };
      return c(p);
    }, X(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: Y(() => [o.getAllColumns()], (p) => p.flatMap((c) => c.getFlatColumns()), X(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: Y(() => [o.getAllFlatColumns()], (p) => p.reduce((c, g) => (c[g.id] = g, c), {}), X(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: Y(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, c) => {
      let g = p.flatMap((m) => m.getLeafColumns());
      return c(g);
    }, X(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (p) => {
      const c = o._getAllFlatColumnsById()[p];
      return process.env.NODE_ENV !== "production" && !c && console.error(`[Table] Column with id '${p}' does not exist.`), c;
    }
  };
  Object.assign(o, f);
  for (let p = 0; p < o._features.length; p++) {
    const c = o._features[p];
    c == null || c.createTable == null || c.createTable(o);
  }
  return o;
}
function vm() {
  return (e) => Y(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let u = 0; u < o.length; u++) {
        const d = Ng(e, e._getRowId(o[u], u, l), o[u], u, i, void 0, l == null ? void 0 : l.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, s.push(d), e.options.getSubRows) {
          var a;
          d.originalSubRows = e.options.getSubRows(o[u], u), (a = d.originalSubRows) != null && a.length && (d.subRows = r(d.originalSubRows, i + 1, d));
        }
      }
      return s;
    };
    return n.rows = r(t), n;
  }, X(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function _m() {
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
      const u = a.map((d) => ({
        ...d
      }));
      return u.sort((d, f) => {
        for (let c = 0; c < i.length; c += 1) {
          var p;
          const g = i[c], m = l[g.id], h = m.sortUndefined, y = (p = g == null ? void 0 : g.desc) != null ? p : !1;
          let x = 0;
          if (h) {
            const C = d.getValue(g.id), E = f.getValue(g.id), T = C === void 0, O = E === void 0;
            if (T || O) {
              if (h === "first") return T ? -1 : 1;
              if (h === "last") return T ? 1 : -1;
              x = T && O ? 0 : T ? h : -h;
            }
          }
          if (x === 0 && (x = m.sortingFn(d, f, g.id)), x !== 0)
            return y && (x *= -1), m.invertSorting && (x *= -1), x;
        }
        return d.index - f.index;
      }), u.forEach((d) => {
        var f;
        o.push(d), (f = d.subRows) != null && f.length && (d.subRows = s(d.subRows));
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
function wm(e, t) {
  return e ? ym(e) ? /* @__PURE__ */ D(e, t) : e : null;
}
function ym(e) {
  return bm(e) || typeof e == "function" || xm(e);
}
function bm(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function xm(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Cm(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = j(() => ({
    current: hm(t)
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
function Sm({
  columnDefinition: e,
  value: t,
  onUpdated: n,
  allData: r,
  clearRowsSelection: o,
  errorsText: i
}) {
  var h;
  const { t: l } = ke(), [s, a] = j(!1), u = H(null);
  ie(() => {
    s && (o(), u.current && u.current.focus());
  }, [s]);
  const d = e.type === "enum" ? ((h = e.typeArguments.values.find((y) => y.value === t)) == null ? void 0 : h.label) ?? t : t, p = d == null || typeof d == "string" && d.trim() === "" ? " " : d, c = e.isReadOnly, g = i ? "bg-danger-extra-light" : c ? "bg-gray-100" : "";
  if (!s)
    return /* @__PURE__ */ w(
      Wp,
      {
        variant: i ? "error" : "info",
        tooltipText: i || (c ? l("sheet.readOnly") : ""),
        children: /* @__PURE__ */ w(
          "div",
          {
            onClick: (y) => !c && y.detail > 1 && a(!0),
            className: `h-full w-full py-4 pr-3 pl-4 ${g}`,
            children: p
          }
        )
      }
    );
  function m(y) {
    a(!1), e.type === "number" && y !== "" && !isNaN(Number(y)) ? n(Number(y)) : n(y ?? "");
  }
  if (e.type === "reference") {
    const x = qs(
      e,
      r
    ).map((C) => ({
      label: C,
      value: C
    }));
    return /* @__PURE__ */ w(
      pn,
      {
        options: x,
        value: t,
        onChange: (C) => m(C ?? "")
      }
    );
  }
  if (e.type === "enum") {
    const x = e.typeArguments.values;
    return /* @__PURE__ */ w(
      pn,
      {
        options: x,
        value: t,
        onChange: (C) => m(C ?? "")
      }
    );
  }
  return /* @__PURE__ */ w(
    zs,
    {
      type: e.type === "number" ? "number" : "text",
      classes: "block w-full",
      value: t,
      onBlur: m,
      ref: u
    }
  );
}
function Em({
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
  function u(m, h) {
    return o.filter(
      (y) => y.columnId === m && y.rowIndex === h
    );
  }
  const d = l.length === n.length && n.length > 0;
  function f() {
    s(d ? [] : n);
  }
  function p(m) {
    l.includes(m) ? s(l.filter((h) => h !== m)) : s([...l, m]);
  }
  const c = "bg-gray-100 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 whitespace-nowrap border-y border-gray-300", g = "text-sm font-medium whitespace-nowrap text-gray-900 border-b border-gray-300";
  return /* @__PURE__ */ w("div", { className: "max-h-[80vh] overflow-auto", children: /* @__PURE__ */ w("table", { className: "min-w-full border-separate border-spacing-0", children: [
    /* @__PURE__ */ w("thead", { className: "sticky top-0 z-10 bg-gray-100", children: e.getHeaderGroups().map((m) => /* @__PURE__ */ w("tr", { children: [
      /* @__PURE__ */ w("th", { className: `${c} sticky left-0 z-20`, children: /* @__PURE__ */ w(
        ii,
        {
          id: `Select all checkbox for ${t.id}`,
          checked: d,
          setChecked: f
        }
      ) }),
      m.headers.map((h) => /* @__PURE__ */ w("th", { className: `z-10 min-w-48 ${c}`, children: /* @__PURE__ */ w(
        "div",
        {
          className: `flex ${h.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
          onClick: h.column.getToggleSortingHandler(),
          children: [
            h.isPlaceholder ? null : wm(
              h.column.columnDef.header,
              h.getContext()
            ),
            /* @__PURE__ */ w("span", { className: "ml-2 flex-none rounded-sm bg-gray-500 text-gray-200", children: {
              asc: /* @__PURE__ */ w(
                Hp,
                {
                  "aria-hidden": "true",
                  className: "size-5"
                }
              ),
              desc: /* @__PURE__ */ w(
                Lp,
                {
                  "aria-hidden": "true",
                  className: "size-5"
                }
              )
            }[h.column.getIsSorted()] ?? null })
          ]
        }
      ) }, h.id))
    ] }, m.id)) }),
    /* @__PURE__ */ w("tbody", { className: "divide-y divide-gray-200", children: e.getRowModel().rows.map((m) => /* @__PURE__ */ w("tr", { children: [
      /* @__PURE__ */ w(
        "td",
        {
          className: `bg-gray-100 ${g} sticky left-0 z-5 py-3.5 pr-3 pl-4`,
          children: /* @__PURE__ */ w(
            ii,
            {
              id: `Selection checkbox for ${t.id} ${m.id}`,
              checked: l.includes(m.original),
              setChecked: () => p(m.original),
              label: `${Number(m.id) + 1}`
            }
          )
        }
      ),
      m.getVisibleCells().map((h, y) => {
        const x = t.columns[y].id, C = Ks(
          r,
          t.id,
          m.original
        ), E = u(x, C).map((T) => a(T.message)).join(", ");
        return /* @__PURE__ */ w("td", { className: g, children: /* @__PURE__ */ w(
          Sm,
          {
            columnDefinition: t.columns.find((T) => T.id === x),
            allData: r,
            value: h.getValue(),
            onUpdated: (T) => i(C, x, T),
            clearRowsSelection: () => s([]),
            errorsText: E
          }
        ) }, h.id);
      })
    ] }, m.id)) })
  ] }) });
}
function Rm({ column: e }) {
  const { t } = ke();
  return /* @__PURE__ */ w(
    "div",
    {
      className: "flex items-center",
      title: e.isReadOnly ? t("sheet.readOnly") : void 0,
      children: [
        e.isReadOnly && /* @__PURE__ */ w("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ w(Ds, { className: "absolute top-0 left-0 h-5 w-5 text-gray-400" }),
          /* @__PURE__ */ w(Ns, { className: "absolute top-0 left-0 h-5 w-5 text-gray-500" })
        ] }),
        e.label,
        " ",
        lr(e) && "*"
      ]
    }
  );
}
function $m({
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
  removeRows: d,
  addEmptyRow: f,
  sheetValidationErrors: p,
  rowValidationSummary: c,
  resetState: g
}) {
  const { t: m } = ke(), [h, y] = j(!1), [x, C] = j(!1), E = "pointer-events-none cursor-not-allowed opacity-50";
  function T(v) {
    const b = e.columns.find(
      (F) => F.id === v
    ), S = Li(
      p.filter((F) => F.columnId === v).map((F) => F.rowIndex)
    ).length;
    return {
      label: `${(b == null ? void 0 : b.label) || v} (${S})`,
      value: v
    };
  }
  const O = Li(
    p.map((v) => v.columnId)
  ).map((v) => T(v));
  a != null && O.find((v) => v.value === a) == null && O.push(T(a));
  const $ = [
    {
      value: "all",
      label: m("sheet.all") + ` (${c.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: m("sheet.valid") + ` (${c.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: m("sheet.invalid") + ` (${c.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function _() {
    d({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ w("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ w("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ w("div", { children: /* @__PURE__ */ w(qp, { activeButton: o, buttons: $ }) }),
      /* @__PURE__ */ w(
        zs,
        {
          clearable: !0,
          value: l,
          onChange: (v) => s(v),
          placeholder: m("sheet.search"),
          iconBuilder: (v) => /* @__PURE__ */ w(ap, { ...v })
        }
      ),
      /* @__PURE__ */ w(
        Pt,
        {
          tooltipText: m(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ w(
            pp,
            {
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : E}`,
              onClick: () => y(!0)
            }
          )
        }
      ),
      /* @__PURE__ */ w(Pt, { tooltipText: m("sheet.addRowsTooltip"), children: /* @__PURE__ */ w(dp, { className: "h-6 w-6 cursor-pointer", onClick: f }) }),
      /* @__PURE__ */ w(Pt, { tooltipText: m("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ w(
        Kf,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : E}`,
          onClick: () => pg(e, t)
        }
      ) }),
      /* @__PURE__ */ w(
        pn,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: m("sheet.filterByError"),
          classes: "min-w-48",
          options: O,
          value: a,
          onChange: (v) => u(v)
        }
      ),
      /* @__PURE__ */ w(
        Qr,
        {
          open: h,
          setOpen: y,
          onConfirm: _,
          title: m("sheet.removeConfirmationModalTitle"),
          confirmationText: m("sheet.removeConfirmationModalConfirmationText"),
          subTitle: m("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ w(Pt, { className: "ml-5", tooltipText: m("sheet.resetTooltip"), children: /* @__PURE__ */ w(
      Ds,
      {
        className: "h-6 w-6 cursor-pointer",
        onClick: () => C(!0)
      }
    ) }),
    /* @__PURE__ */ w(
      Qr,
      {
        open: x,
        setOpen: C,
        onConfirm: g,
        title: m("sheet.resetConfirmationModalTitle"),
        confirmationText: m("sheet.resetConfirmationModalConfirmationText"),
        subTitle: m("sheet.resetConfirmationModalSubTitle"),
        variant: "danger"
      }
    )
  ] });
}
const Tm = Ig();
function Fm({
  sheetDefinition: e,
  data: t,
  allData: n,
  sheetValidationErrors: r,
  setRowData: o,
  removeRows: i,
  addEmptyRow: l,
  resetState: s
}) {
  const [a, u] = j([]), [d, f] = j("all"), [p, c] = j(""), [g, m] = j(
    null
  );
  ie(() => {
    u([]), f("all");
  }, [e]);
  const h = gg(
    t,
    n,
    d,
    r,
    g,
    e,
    p
  ), y = W(() => {
    const T = t.rows, O = T.filter(
      (_, v) => !r.some((b) => b.rowIndex === v)
    ), $ = T.filter(
      (_, v) => r.some((b) => b.rowIndex === v)
    );
    return {
      all: T.length,
      valid: O.length,
      errors: $.length
    };
  }, [t, r]), x = W(
    () => e.columns.map(
      (T) => Tm.accessor(T.id, {
        header: () => /* @__PURE__ */ w(Rm, { column: T }),
        sortUndefined: "last",
        sortingFn: "auto"
      })
    ),
    [e]
  ), C = Cm({
    data: h,
    columns: x,
    getCoreRowModel: vm(),
    getSortedRowModel: _m()
  });
  function E(T, O, $) {
    const _ = { ...t.rows[T] };
    _[O] = $, o({
      sheetId: e.id,
      value: _,
      rowIndex: T
    });
  }
  return /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ w(
      $m,
      {
        sheetDefinition: e,
        rowData: h,
        selectedRows: a,
        setSelectedRows: u,
        viewMode: d,
        setViewMode: f,
        searchPhrase: p,
        setSearchPhrase: c,
        errorColumnFilter: g,
        setErrorColumnFilter: m,
        removeRows: i,
        addEmptyRow: l,
        sheetValidationErrors: r,
        rowValidationSummary: y,
        resetState: s
      }
    ),
    /* @__PURE__ */ w(
      Em,
      {
        table: C,
        sheetDefinition: e,
        visibleData: h,
        allData: n,
        sheetValidationErrors: r,
        onCellValueChanged: E,
        selectedRows: a,
        setSelectedRows: u
      }
    )
  ] });
}
function Om({
  progress: e,
  pending: t
}) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, l] = j(!1);
  return ie(() => {
    if (e === 0) {
      const s = setTimeout(() => {
        l(!0);
      }, 3e3);
      return () => clearTimeout(s);
    }
  }, [e]), i ? /* @__PURE__ */ w("div", { className: "flex justify-center", children: /* @__PURE__ */ w(
    "div",
    {
      className: `border-success h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ w("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ w(
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
    /* @__PURE__ */ w(
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
function Im() {
  return /* @__PURE__ */ w(ep, { className: "text-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Mm({ progress: e, pending: t, resetState: n }) {
  const { t: r } = ke();
  return /* @__PURE__ */ w("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ w("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ w(Om, { progress: e, pending: t }),
      t && /* @__PURE__ */ w("div", { children: [
        /* @__PURE__ */ w("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ w("b", { className: "text-lg", children: [
          e,
          "%"
        ] }) }),
        /* @__PURE__ */ w("h2", { className: "text-2xl", children: r("importer.loader.uploading") })
      ] }),
      !t && /* @__PURE__ */ w(Im, {})
    ] }),
    !t && /* @__PURE__ */ w("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ w("h2", { className: "text-2xl", children: r("importer.loader.success") }),
      /* @__PURE__ */ w("div", { className: "h-5" }),
      /* @__PURE__ */ w(Ye, { variant: "secondary", onClick: n, children: r("sheet.reset") })
    ] })
  ] });
}
function Pm({ onRetry: e, onBackToPreview: t }) {
  const { t: n } = ke();
  return /* @__PURE__ */ w("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ w("div", { className: "relative mx-auto h-24 w-24", children: /* @__PURE__ */ w(op, { className: "text-danger" }) }),
    /* @__PURE__ */ w("p", { className: "mb-8 text-2xl", children: n("importer.loader.failed") }),
    /* @__PURE__ */ w(Ye, { onClick: e, variant: "primary", children: /* @__PURE__ */ w("div", { className: "flex items-center", children: [
      /* @__PURE__ */ w(Qf, { className: "mr-3 h-4 w-4" }),
      n("importer.loader.retry")
    ] }) }),
    /* @__PURE__ */ w("div", { className: "mt-3" }),
    /* @__PURE__ */ w(Ye, { onClick: t, variant: "tertiary", children: /* @__PURE__ */ w("div", { className: "flex items-center", children: [
      /* @__PURE__ */ w(Ns, { className: "mr-3 h-4 w-4" }),
      n("importer.loader.backToPreview")
    ] }) })
  ] });
}
function km({
  progress: e,
  mode: t,
  onRetry: n,
  onBackToPreview: r,
  resetState: o
}) {
  const i = t === "failed", l = t === "submit";
  return i ? /* @__PURE__ */ w(Pm, { onRetry: n, onBackToPreview: r }) : /* @__PURE__ */ w(Mm, { progress: e, pending: l, resetState: o });
}
async function Vi(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
class Cn {
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
class Am extends Cn {
  constructor(n) {
    super(n);
    Ae(this, "key");
    Ae(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class Lm extends Cn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class Nm extends Cn {
  parse(t) {
    if (typeof t == "string" && Us(t, "-"))
      return t.split("-")[0];
  }
}
const Hi = [
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
class Dm extends Cn {
  parse(t) {
    const n = Hi.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Us(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return Hi[r][1];
    }
  }
}
class Vm extends Cn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function Hm(e) {
  const t = {
    phone_number: Lm,
    postal_code: Nm,
    state_code: Dm,
    strip: Vm,
    custom: Am
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function zm(e, t) {
  const n = Ws(
    e.columns,
    (r, o) => {
      o[r.id] = new Bm(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          Hm(i)
        );
      });
    }
  );
  return e.columns.forEach((r) => {
    const o = r.id, i = n[o];
    t.rows.forEach((l) => {
      Gs(l) && o in l && (l[o] = i.transform(l[o]));
    });
  }), t.rows;
}
function oo(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = zm(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class Bm {
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
function oa(e) {
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
const jm = (e, t) => {
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
        sheetData: oo(
          e.sheetDefinitions,
          t.payload.mappedData
        ),
        mode: "preview",
        validationErrors: xr(
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
        sheetData: oo(e.sheetDefinitions, r),
        validationErrors: xr(e.sheetDefinitions, r)
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
        validationErrors: xr(e.sheetDefinitions, n)
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
      return oa(e.sheetDefinitions);
    default:
      return e;
  }
}, Um = ({
  theme: e,
  children: t
}) => (ie(() => {
  e && document.documentElement.setAttribute("csv-importer-data-theme", e);
}, [e]), /* @__PURE__ */ w(fe, { children: t }));
function Wm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Gm = Mn.exports, zi;
function qm() {
  return zi || (zi = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Gm, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, l = r.IS_PAPA_WORKER || !1, s = {}, a = 0, u = {};
      function d(_) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(v) {
          var b = T(v);
          b.chunkSize = parseInt(b.chunkSize), v.step || v.chunk || (b.chunkSize = null), this._handle = new m(b), (this._handle.streamer = this)._config = b;
        }).call(this, _), this.parseChunk = function(v, b) {
          var S = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < S) {
            let k = this._config.newline;
            k || (F = this._config.quoteChar || '"', k = this._handle.guessLineEndings(v, F)), v = [...v.split(k).slice(S)].join(k);
          }
          this.isFirstChunk && $(this._config.beforeFirstChunk) && (F = this._config.beforeFirstChunk(v)) !== void 0 && (v = F), this.isFirstChunk = !1, this._halted = !1;
          var S = this._partialLine + v, F = (this._partialLine = "", this._handle.parse(S, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (v = F.meta.cursor, S = (this._finished || (this._partialLine = S.substring(v - this._baseIndex), this._baseIndex = v), F && F.data && (this._rowCount += F.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), l) r.postMessage({ results: F, workerId: u.WORKER_ID, finished: S });
            else if ($(this._config.chunk) && !b) {
              if (this._config.chunk(F, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = F = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(F.data), this._completeResults.errors = this._completeResults.errors.concat(F.errors), this._completeResults.meta = F.meta), this._completed || !S || !$(this._config.complete) || F && F.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), S || F && F.meta.paused || this._nextChunk(), F;
          }
          this._halted = !0;
        }, this._sendError = function(v) {
          $(this._config.error) ? this._config.error(v) : l && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: v, finished: !1 });
        };
      }
      function f(_) {
        var v;
        (_ = _ || {}).chunkSize || (_.chunkSize = u.RemoteChunkSize), d.call(this, _), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(b) {
          this._input = b, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (v = new XMLHttpRequest(), this._config.withCredentials && (v.withCredentials = this._config.withCredentials), i || (v.onload = O(this._chunkLoaded, this), v.onerror = O(this._chunkError, this)), v.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var b, S = this._config.downloadRequestHeaders;
              for (b in S) v.setRequestHeader(b, S[b]);
            }
            var F;
            this._config.chunkSize && (F = this._start + this._config.chunkSize - 1, v.setRequestHeader("Range", "bytes=" + this._start + "-" + F));
            try {
              v.send(this._config.downloadRequestBody);
            } catch (k) {
              this._chunkError(k.message);
            }
            i && v.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          v.readyState === 4 && (v.status < 200 || 400 <= v.status ? this._chunkError() : (this._start += this._config.chunkSize || v.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((b) => (b = b.getResponseHeader("Content-Range")) !== null ? parseInt(b.substring(b.lastIndexOf("/") + 1)) : -1)(v), this.parseChunk(v.responseText)));
        }, this._chunkError = function(b) {
          b = v.statusText || b, this._sendError(new Error(b));
        };
      }
      function p(_) {
        (_ = _ || {}).chunkSize || (_.chunkSize = u.LocalChunkSize), d.call(this, _);
        var v, b, S = typeof FileReader < "u";
        this.stream = function(F) {
          this._input = F, b = F.slice || F.webkitSlice || F.mozSlice, S ? ((v = new FileReader()).onload = O(this._chunkLoaded, this), v.onerror = O(this._chunkError, this)) : v = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var F = this._input, k = (this._config.chunkSize && (k = Math.min(this._start + this._config.chunkSize, this._input.size), F = b.call(F, this._start, k)), v.readAsText(F, this._config.encoding));
          S || this._chunkLoaded({ target: { result: k } });
        }, this._chunkLoaded = function(F) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(F.target.result);
        }, this._chunkError = function() {
          this._sendError(v.error);
        };
      }
      function c(_) {
        var v;
        d.call(this, _ = _ || {}), this.stream = function(b) {
          return v = b, this._nextChunk();
        }, this._nextChunk = function() {
          var b, S;
          if (!this._finished) return b = this._config.chunkSize, v = b ? (S = v.substring(0, b), v.substring(b)) : (S = v, ""), this._finished = !v, this.parseChunk(S);
        };
      }
      function g(_) {
        d.call(this, _ = _ || {});
        var v = [], b = !0, S = !1;
        this.pause = function() {
          d.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          d.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(F) {
          this._input = F, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          S && v.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), v.length ? this.parseChunk(v.shift()) : b = !0;
        }, this._streamData = O(function(F) {
          try {
            v.push(typeof F == "string" ? F : F.toString(this._config.encoding)), b && (b = !1, this._checkIsFinished(), this.parseChunk(v.shift()));
          } catch (k) {
            this._streamError(k);
          }
        }, this), this._streamError = O(function(F) {
          this._streamCleanUp(), this._sendError(F);
        }, this), this._streamEnd = O(function() {
          this._streamCleanUp(), S = !0, this._streamData("");
        }, this), this._streamCleanUp = O(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function m(_) {
        var v, b, S, F, k = Math.pow(2, 53), P = -k, G = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, K = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, I = this, A = 0, M = 0, te = !1, N = !1, B = [], R = { data: [], errors: [], meta: {} };
        function le(U) {
          return _.skipEmptyLines === "greedy" ? U.join("").trim() === "" : U.length === 1 && U[0].length === 0;
        }
        function ee() {
          if (R && S && (oe("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), S = !1), _.skipEmptyLines && (R.data = R.data.filter(function(Z) {
            return !le(Z);
          })), ae()) {
            let Z = function(ge, we) {
              $(_.transformHeader) && (ge = _.transformHeader(ge, we)), B.push(ge);
            };
            if (R) if (Array.isArray(R.data[0])) {
              for (var U = 0; ae() && U < R.data.length; U++) R.data[U].forEach(Z);
              R.data.splice(0, 1);
            } else R.data.forEach(Z);
          }
          function J(Z, ge) {
            for (var we = _.header ? {} : [], V = 0; V < Z.length; V++) {
              var q = V, Q = Z[V], Q = ((Se, ne) => ((ve) => (_.dynamicTypingFunction && _.dynamicTyping[ve] === void 0 && (_.dynamicTyping[ve] = _.dynamicTypingFunction(ve)), (_.dynamicTyping[ve] || _.dynamicTyping) === !0))(Se) ? ne === "true" || ne === "TRUE" || ne !== "false" && ne !== "FALSE" && (((ve) => {
                if (G.test(ve) && (ve = parseFloat(ve), P < ve && ve < k))
                  return 1;
              })(ne) ? parseFloat(ne) : K.test(ne) ? new Date(ne) : ne === "" ? null : ne) : ne)(q = _.header ? V >= B.length ? "__parsed_extra" : B[V] : q, Q = _.transform ? _.transform(Q, q) : Q);
              q === "__parsed_extra" ? (we[q] = we[q] || [], we[q].push(Q)) : we[q] = Q;
            }
            return _.header && (V > B.length ? oe("FieldMismatch", "TooManyFields", "Too many fields: expected " + B.length + " fields but parsed " + V, M + ge) : V < B.length && oe("FieldMismatch", "TooFewFields", "Too few fields: expected " + B.length + " fields but parsed " + V, M + ge)), we;
          }
          var pe;
          R && (_.header || _.dynamicTyping || _.transform) && (pe = 1, !R.data.length || Array.isArray(R.data[0]) ? (R.data = R.data.map(J), pe = R.data.length) : R.data = J(R.data, 0), _.header && R.meta && (R.meta.fields = B), M += pe);
        }
        function ae() {
          return _.header && B.length === 0;
        }
        function oe(U, J, pe, Z) {
          U = { type: U, code: J, message: pe }, Z !== void 0 && (U.row = Z), R.errors.push(U);
        }
        $(_.step) && (F = _.step, _.step = function(U) {
          R = U, ae() ? ee() : (ee(), R.data.length !== 0 && (A += U.data.length, _.preview && A > _.preview ? b.abort() : (R.data = R.data[0], F(R, I))));
        }), this.parse = function(U, J, pe) {
          var Z = _.quoteChar || '"', Z = (_.newline || (_.newline = this.guessLineEndings(U, Z)), S = !1, _.delimiter ? $(_.delimiter) && (_.delimiter = _.delimiter(U), R.meta.delimiter = _.delimiter) : ((Z = ((ge, we, V, q, Q) => {
            var Se, ne, ve, at;
            Q = Q || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Ft = 0; Ft < Q.length; Ft++) {
              for (var Ue, qt = Q[Ft], Ee = 0, We = 0, xe = 0, Me = (ve = void 0, new y({ comments: q, delimiter: qt, newline: we, preview: 10 }).parse(ge)), et = 0; et < Me.data.length; et++) V && le(Me.data[et]) ? xe++ : (Ue = Me.data[et].length, We += Ue, ve === void 0 ? ve = Ue : 0 < Ue && (Ee += Math.abs(Ue - ve), ve = Ue));
              0 < Me.data.length && (We /= Me.data.length - xe), (ne === void 0 || Ee <= ne) && (at === void 0 || at < We) && 1.99 < We && (ne = Ee, Se = qt, at = We);
            }
            return { successful: !!(_.delimiter = Se), bestDelimiter: Se };
          })(U, _.newline, _.skipEmptyLines, _.comments, _.delimitersToGuess)).successful ? _.delimiter = Z.bestDelimiter : (S = !0, _.delimiter = u.DefaultDelimiter), R.meta.delimiter = _.delimiter), T(_));
          return _.preview && _.header && Z.preview++, v = U, b = new y(Z), R = b.parse(v, J, pe), ee(), te ? { meta: { paused: !0 } } : R || { meta: { paused: !1 } };
        }, this.paused = function() {
          return te;
        }, this.pause = function() {
          te = !0, b.abort(), v = $(_.chunk) ? "" : v.substring(b.getCharIndex());
        }, this.resume = function() {
          I.streamer._halted ? (te = !1, I.streamer.parseChunk(v, !0)) : setTimeout(I.resume, 3);
        }, this.aborted = function() {
          return N;
        }, this.abort = function() {
          N = !0, b.abort(), R.meta.aborted = !0, $(_.complete) && _.complete(R), v = "";
        }, this.guessLineEndings = function(ge, Z) {
          ge = ge.substring(0, 1048576);
          var Z = new RegExp(h(Z) + "([^]*?)" + h(Z), "gm"), pe = (ge = ge.replace(Z, "")).split("\r"), Z = ge.split(`
`), ge = 1 < Z.length && Z[0].length < pe[0].length;
          if (pe.length === 1 || ge) return `
`;
          for (var we = 0, V = 0; V < pe.length; V++) pe[V][0] === `
` && we++;
          return we >= pe.length / 2 ? `\r
` : "\r";
        };
      }
      function h(_) {
        return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function y(_) {
        var v = (_ = _ || {}).delimiter, b = _.newline, S = _.comments, F = _.step, k = _.preview, P = _.fastMode, G = null, K = !1, I = _.quoteChar == null ? '"' : _.quoteChar, A = I;
        if (_.escapeChar !== void 0 && (A = _.escapeChar), (typeof v != "string" || -1 < u.BAD_DELIMITERS.indexOf(v)) && (v = ","), S === v) throw new Error("Comment character same as delimiter");
        S === !0 ? S = "#" : (typeof S != "string" || -1 < u.BAD_DELIMITERS.indexOf(S)) && (S = !1), b !== `
` && b !== "\r" && b !== `\r
` && (b = `
`);
        var M = 0, te = !1;
        this.parse = function(N, B, R) {
          if (typeof N != "string") throw new Error("Input must be a string");
          var le = N.length, ee = v.length, ae = b.length, oe = S.length, U = $(F), J = [], pe = [], Z = [], ge = M = 0;
          if (!N) return Ee();
          if (P || P !== !1 && N.indexOf(I) === -1) {
            for (var we = N.split(b), V = 0; V < we.length; V++) {
              if (Z = we[V], M += Z.length, V !== we.length - 1) M += b.length;
              else if (R) return Ee();
              if (!S || Z.substring(0, oe) !== S) {
                if (U) {
                  if (J = [], at(Z.split(v)), We(), te) return Ee();
                } else at(Z.split(v));
                if (k && k <= V) return J = J.slice(0, k), Ee(!0);
              }
            }
            return Ee();
          }
          for (var q = N.indexOf(v, M), Q = N.indexOf(b, M), Se = new RegExp(h(A) + h(I), "g"), ne = N.indexOf(I, M); ; ) if (N[M] === I) for (ne = M, M++; ; ) {
            if ((ne = N.indexOf(I, ne + 1)) === -1) return R || pe.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: J.length, index: M }), Ue();
            if (ne === le - 1) return Ue(N.substring(M, ne).replace(Se, I));
            if (I === A && N[ne + 1] === A) ne++;
            else if (I === A || ne === 0 || N[ne - 1] !== A) {
              q !== -1 && q < ne + 1 && (q = N.indexOf(v, ne + 1));
              var ve = Ft((Q = Q !== -1 && Q < ne + 1 ? N.indexOf(b, ne + 1) : Q) === -1 ? q : Math.min(q, Q));
              if (N.substr(ne + 1 + ve, ee) === v) {
                Z.push(N.substring(M, ne).replace(Se, I)), N[M = ne + 1 + ve + ee] !== I && (ne = N.indexOf(I, M)), q = N.indexOf(v, M), Q = N.indexOf(b, M);
                break;
              }
              if (ve = Ft(Q), N.substring(ne + 1 + ve, ne + 1 + ve + ae) === b) {
                if (Z.push(N.substring(M, ne).replace(Se, I)), qt(ne + 1 + ve + ae), q = N.indexOf(v, M), ne = N.indexOf(I, M), U && (We(), te)) return Ee();
                if (k && J.length >= k) return Ee(!0);
                break;
              }
              pe.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: J.length, index: M }), ne++;
            }
          }
          else if (S && Z.length === 0 && N.substring(M, M + oe) === S) {
            if (Q === -1) return Ee();
            M = Q + ae, Q = N.indexOf(b, M), q = N.indexOf(v, M);
          } else if (q !== -1 && (q < Q || Q === -1)) Z.push(N.substring(M, q)), M = q + ee, q = N.indexOf(v, M);
          else {
            if (Q === -1) break;
            if (Z.push(N.substring(M, Q)), qt(Q + ae), U && (We(), te)) return Ee();
            if (k && J.length >= k) return Ee(!0);
          }
          return Ue();
          function at(xe) {
            J.push(xe), ge = M;
          }
          function Ft(xe) {
            var Me = 0;
            return Me = xe !== -1 && (xe = N.substring(ne + 1, xe)) && xe.trim() === "" ? xe.length : Me;
          }
          function Ue(xe) {
            return R || (xe === void 0 && (xe = N.substring(M)), Z.push(xe), M = le, at(Z), U && We()), Ee();
          }
          function qt(xe) {
            M = xe, at(Z), Z = [], Q = N.indexOf(b, M);
          }
          function Ee(xe) {
            if (_.header && !B && J.length && !K) {
              var Me = J[0], et = {}, ar = new Set(Me);
              let Lo = !1;
              for (let Ot = 0; Ot < Me.length; Ot++) {
                let Ge = Me[Ot];
                if (et[Ge = $(_.transformHeader) ? _.transformHeader(Ge, Ot) : Ge]) {
                  let Kt, No = et[Ge];
                  for (; Kt = Ge + "_" + No, No++, ar.has(Kt); ) ;
                  ar.add(Kt), Me[Ot] = Kt, et[Ge]++, Lo = !0, (G = G === null ? {} : G)[Kt] = Ge;
                } else et[Ge] = 1, Me[Ot] = Ge;
                ar.add(Ge);
              }
              Lo && console.warn("Duplicate headers found and renamed."), K = !0;
            }
            return { data: J, errors: pe, meta: { delimiter: v, linebreak: b, aborted: te, truncated: !!xe, cursor: ge + (B || 0), renamedHeaders: G } };
          }
          function We() {
            F(Ee()), J = [], pe = [];
          }
        }, this.abort = function() {
          te = !0;
        }, this.getCharIndex = function() {
          return M;
        };
      }
      function x(_) {
        var v = _.data, b = s[v.workerId], S = !1;
        if (v.error) b.userError(v.error, v.file);
        else if (v.results && v.results.data) {
          var F = { abort: function() {
            S = !0, C(v.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: E, resume: E };
          if ($(b.userStep)) {
            for (var k = 0; k < v.results.data.length && (b.userStep({ data: v.results.data[k], errors: v.results.errors, meta: v.results.meta }, F), !S); k++) ;
            delete v.results;
          } else $(b.userChunk) && (b.userChunk(v.results, F, v.file), delete v.results);
        }
        v.finished && !S && C(v.workerId, v.results);
      }
      function C(_, v) {
        var b = s[_];
        $(b.userComplete) && b.userComplete(v), b.terminate(), delete s[_];
      }
      function E() {
        throw new Error("Not implemented.");
      }
      function T(_) {
        if (typeof _ != "object" || _ === null) return _;
        var v, b = Array.isArray(_) ? [] : {};
        for (v in _) b[v] = T(_[v]);
        return b;
      }
      function O(_, v) {
        return function() {
          _.apply(v, arguments);
        };
      }
      function $(_) {
        return typeof _ == "function";
      }
      return u.parse = function(_, v) {
        var b = (v = v || {}).dynamicTyping || !1;
        if ($(b) && (v.dynamicTypingFunction = b, b = {}), v.dynamicTyping = b, v.transform = !!$(v.transform) && v.transform, !v.worker || !u.WORKERS_SUPPORTED) return b = null, u.NODE_STREAM_INPUT, typeof _ == "string" ? (_ = ((S) => S.charCodeAt(0) !== 65279 ? S : S.slice(1))(_), b = new (v.download ? f : c)(v)) : _.readable === !0 && $(_.read) && $(_.on) ? b = new g(v) : (r.File && _ instanceof File || _ instanceof Object) && (b = new p(v)), b.stream(_);
        (b = (() => {
          var S;
          return !!u.WORKERS_SUPPORTED && (S = (() => {
            var F = r.URL || r.webkitURL || null, k = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", k, ")();"], { type: "text/javascript" })));
          })(), (S = new r.Worker(S)).onmessage = x, S.id = a++, s[S.id] = S);
        })()).userStep = v.step, b.userChunk = v.chunk, b.userComplete = v.complete, b.userError = v.error, v.step = $(v.step), v.chunk = $(v.chunk), v.complete = $(v.complete), v.error = $(v.error), delete v.worker, b.postMessage({ input: _, config: v, workerId: b.id });
      }, u.unparse = function(_, v) {
        var b = !1, S = !0, F = ",", k = `\r
`, P = '"', G = P + P, K = !1, I = null, A = !1, M = ((() => {
          if (typeof v == "object") {
            if (typeof v.delimiter != "string" || u.BAD_DELIMITERS.filter(function(B) {
              return v.delimiter.indexOf(B) !== -1;
            }).length || (F = v.delimiter), typeof v.quotes != "boolean" && typeof v.quotes != "function" && !Array.isArray(v.quotes) || (b = v.quotes), typeof v.skipEmptyLines != "boolean" && typeof v.skipEmptyLines != "string" || (K = v.skipEmptyLines), typeof v.newline == "string" && (k = v.newline), typeof v.quoteChar == "string" && (P = v.quoteChar), typeof v.header == "boolean" && (S = v.header), Array.isArray(v.columns)) {
              if (v.columns.length === 0) throw new Error("Option columns is empty");
              I = v.columns;
            }
            v.escapeChar !== void 0 && (G = v.escapeChar + P), v.escapeFormulae instanceof RegExp ? A = v.escapeFormulae : typeof v.escapeFormulae == "boolean" && v.escapeFormulae && (A = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(h(P), "g"));
        if (typeof _ == "string" && (_ = JSON.parse(_)), Array.isArray(_)) {
          if (!_.length || Array.isArray(_[0])) return te(null, _, K);
          if (typeof _[0] == "object") return te(I || Object.keys(_[0]), _, K);
        } else if (typeof _ == "object") return typeof _.data == "string" && (_.data = JSON.parse(_.data)), Array.isArray(_.data) && (_.fields || (_.fields = _.meta && _.meta.fields || I), _.fields || (_.fields = Array.isArray(_.data[0]) ? _.fields : typeof _.data[0] == "object" ? Object.keys(_.data[0]) : []), Array.isArray(_.data[0]) || typeof _.data[0] == "object" || (_.data = [_.data])), te(_.fields || [], _.data || [], K);
        throw new Error("Unable to serialize unrecognized input");
        function te(B, R, le) {
          var ee = "", ae = (typeof B == "string" && (B = JSON.parse(B)), typeof R == "string" && (R = JSON.parse(R)), Array.isArray(B) && 0 < B.length), oe = !Array.isArray(R[0]);
          if (ae && S) {
            for (var U = 0; U < B.length; U++) 0 < U && (ee += F), ee += N(B[U], U);
            0 < R.length && (ee += k);
          }
          for (var J = 0; J < R.length; J++) {
            var pe = (ae ? B : R[J]).length, Z = !1, ge = ae ? Object.keys(R[J]).length === 0 : R[J].length === 0;
            if (le && !ae && (Z = le === "greedy" ? R[J].join("").trim() === "" : R[J].length === 1 && R[J][0].length === 0), le === "greedy" && ae) {
              for (var we = [], V = 0; V < pe; V++) {
                var q = oe ? B[V] : V;
                we.push(R[J][q]);
              }
              Z = we.join("").trim() === "";
            }
            if (!Z) {
              for (var Q = 0; Q < pe; Q++) {
                0 < Q && !ge && (ee += F);
                var Se = ae && oe ? B[Q] : Q;
                ee += N(R[J][Se], Q);
              }
              J < R.length - 1 && (!le || 0 < pe && !ge) && (ee += k);
            }
          }
          return ee;
        }
        function N(B, R) {
          var le, ee;
          return B == null ? "" : B.constructor === Date ? JSON.stringify(B).slice(1, 25) : (ee = !1, A && typeof B == "string" && A.test(B) && (B = "'" + B, ee = !0), le = B.toString().replace(M, G), (ee = ee || b === !0 || typeof b == "function" && b(B, R) || Array.isArray(b) && b[R] || ((ae, oe) => {
            for (var U = 0; U < oe.length; U++) if (-1 < ae.indexOf(oe[U])) return !0;
            return !1;
          })(le, u.BAD_DELIMITERS) || -1 < le.indexOf(F) || le.charAt(0) === " " || le.charAt(le.length - 1) === " ") ? P + le + P : le);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = y, u.ParserHandle = m, u.NetworkStreamer = f, u.FileStreamer = p, u.StringStreamer = c, u.ReadableStreamStreamer = g, r.jQuery && ((o = r.jQuery).fn.parse = function(_) {
        var v = _.config || {}, b = [];
        return this.each(function(k) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var P = 0; P < this.files.length; P++) b.push({ file: this.files[P], inputElem: this, instanceConfig: o.extend({}, v) });
        }), S(), this;
        function S() {
          if (b.length === 0) $(_.complete) && _.complete();
          else {
            var k, P, G, K, I = b[0];
            if ($(_.before)) {
              var A = _.before(I.file, I.inputElem);
              if (typeof A == "object") {
                if (A.action === "abort") return k = "AbortError", P = I.file, G = I.inputElem, K = A.reason, void ($(_.error) && _.error({ name: k }, P, G, K));
                if (A.action === "skip") return void F();
                typeof A.config == "object" && (I.instanceConfig = o.extend(I.instanceConfig, A.config));
              } else if (A === "skip") return void F();
            }
            var M = I.instanceConfig.complete;
            I.instanceConfig.complete = function(te) {
              $(M) && M(te, I.file, I.inputElem), F();
            }, u.parse(I.file, I.instanceConfig);
          }
        }
        function F() {
          b.splice(0, 1), S();
        }
      }), l && (r.onmessage = function(_) {
        _ = _.data, u.WORKER_ID === void 0 && _ && (u.WORKER_ID = _.workerId), typeof _.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(_.input, _.config), finished: !0 }) : (r.File && _.input instanceof File || _.input instanceof Object) && (_ = u.parse(_.input, _.config)) && r.postMessage({ workerId: u.WORKER_ID, results: _, finished: !0 });
      }), (f.prototype = Object.create(d.prototype)).constructor = f, (p.prototype = Object.create(d.prototype)).constructor = p, (c.prototype = Object.create(c.prototype)).constructor = c, (g.prototype = Object.create(d.prototype)).constructor = g, u;
    });
  }(Mn)), Mn.exports;
}
var Km = qm();
const Ym = /* @__PURE__ */ Wm(Km);
function Xm({
  file: e,
  onCompleted: t
}) {
  Ym.parse(e, {
    skipEmptyLines: !0,
    header: !0,
    complete: t
  });
}
function Zm(e, t) {
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
          (d) => d.sheetId === a.typeArguments.sheetId
        );
        if (u != null) {
          const f = u.rows.map(
            (p) => p[a.typeArguments.sheetColumnId]
          )[l];
          s[a.id] = f;
        }
      }), s;
    });
    return {
      ...n,
      rows: o
    };
  });
}
function Qm(e, t, n) {
  const r = n.data, o = e.map((i) => {
    const l = [], s = t.filter(
      (a) => a.sheetId === i.id
    );
    return r.map((a) => {
      const u = {};
      i.columns.forEach((d) => {
        const f = s.find(
          (p) => p.sheetColumnId === d.id
        );
        f != null && (u[f.sheetColumnId] = a[f.csvColumnName]);
      }), l.push(u);
    }), {
      sheetId: i.id,
      rows: l
    };
  });
  return Zm(e, o);
}
function Jm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ D("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ D("title", {
    id: t
  }, e) : null, /* @__PURE__ */ D("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const eh = /* @__PURE__ */ he(Jm);
function th({
  sheetDefinitions: e,
  activeSheetId: t,
  onSheetChange: n,
  validationErrors: r
}) {
  return /* @__PURE__ */ w(
    Bp,
    {
      tabs: e.map((o) => ({
        label: o.label,
        value: o.id,
        icon: r.some((i) => i.sheetId === o.id) ? /* @__PURE__ */ w(eh, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: t,
      onTabChange: n
    }
  );
}
function nh({ onBackToMapping: e }) {
  const { t } = ke(), [n, r] = j(!1);
  return /* @__PURE__ */ w(fe, { children: [
    /* @__PURE__ */ w(
      Ye,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ w(
      Qr,
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
function rh({
  theme: e,
  onComplete: t,
  allowManualDataEntry: n,
  sheets: r,
  onDataColumnsMapped: o,
  preventUploadOnValidationErrors: i
}) {
  const { t: l } = ke(), s = H(!0), a = H(null), [
    {
      mode: u,
      currentSheetId: d,
      sheetData: f,
      columnMappings: p,
      parsedFile: c,
      validationErrors: g,
      importProgress: m
    },
    h
  ] = st(jm, oa(r));
  ie(() => {
    var I;
    if (s.current) {
      s.current = !1;
      return;
    }
    (I = a.current) == null || I.scrollIntoView({ behavior: "smooth" });
  }, [u]);
  const y = f.find(
    (I) => I.sheetId === d
  ), x = r.find(
    (I) => I.id === d
  ), E = (typeof i == "function" ? (i == null ? void 0 : i(g)) ?? !1 : i ?? !1) && g.length > 0;
  function T(I) {
    Xm({
      file: I,
      onCompleted: (A) => {
        h({ type: "FILE_PARSED", payload: { parsed: A } }), h({
          type: "COLUMN_MAPPING_CHANGED",
          payload: {
            mappings: wg(
              r,
              A.meta.fields
              // TODO THIS BRANCH: Check why it can be undefined
            )
          }
        });
      }
    });
  }
  function O() {
    h({
      type: "ENTER_DATA_MANUALLY",
      payload: {
        amountOfEmptyRowsToAdd: Xp
      }
    });
  }
  function $(I) {
    h({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: I }
    });
  }
  async function _() {
    const I = Qm(r, p ?? [], c), A = o != null ? await o(I) : I;
    h({ type: "DATA_MAPPED", payload: { mappedData: A } });
  }
  function v(I) {
    h({ type: "CELL_CHANGED", payload: I });
  }
  function b(I) {
    h({ type: "REMOVE_ROWS", payload: I });
  }
  function S() {
    h({ type: "ADD_EMPTY_ROW" });
  }
  function F() {
    h({ type: "RESET" });
  }
  async function k() {
    h({ type: "PROGRESS", payload: { progress: 0 } }), h({ type: "SUBMIT" });
    try {
      const I = oo(
        r,
        f.map((A) => ({ ...A, rows: dg(A) }))
      );
      await t(I, (A) => {
        h({ type: "PROGRESS", payload: { progress: A } });
      });
    } catch {
      h({ type: "FAILED" });
      return;
    }
    await Vi(400), h({ type: "PROGRESS", payload: { progress: 100 } }), await Vi(200), h({ type: "COMPLETED" });
  }
  function P() {
    h({ type: "PREVIEW" });
  }
  function G() {
    h({ type: "UPLOAD" });
  }
  function K() {
    h({ type: "MAPPING" });
  }
  return /* @__PURE__ */ w(Um, { theme: e, children: /* @__PURE__ */ w(Mp, { ref: a, children: [
    u === "upload" && /* @__PURE__ */ w("div", { className: "mt-5", children: [
      /* @__PURE__ */ w(Qp, { setFile: T }),
      n && /* @__PURE__ */ w("div", { className: "mt-10 mb-2.5", children: /* @__PURE__ */ w(
        "p",
        {
          onClick: O,
          className: "text-primary hover:text-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none",
          children: l("importer.uploader.enterManually")
        }
      ) })
    ] }),
    u === "mapping" && /* @__PURE__ */ w(
      Og,
      {
        parsed: c,
        sheetDefinitions: r,
        currentMapping: p ?? [],
        onMappingsChanged: $,
        onMappingsSet: _,
        onBack: G
      }
    ),
    u === "preview" && /* @__PURE__ */ w(fe, { children: [
      /* @__PURE__ */ w(
        th,
        {
          activeSheetId: d,
          sheetDefinitions: r,
          onSheetChange: (I) => h({ type: "SHEET_CHANGED", payload: { sheetId: I } }),
          validationErrors: g
        }
      ),
      /* @__PURE__ */ w(
        Fm,
        {
          data: y,
          allData: f,
          sheetDefinition: x,
          sheetValidationErrors: g.filter(
            (I) => I.sheetId === (x == null ? void 0 : x.id)
          ),
          setRowData: v,
          removeRows: b,
          addEmptyRow: S,
          resetState: F
        }
      ),
      y.rows.length > 0 && /* @__PURE__ */ w("div", { className: "my-5 flex justify-between", children: [
        /* @__PURE__ */ w("div", { children: p != null && /* @__PURE__ */ w(nh, { onBackToMapping: K }) }),
        /* @__PURE__ */ w(
          Pt,
          {
            tooltipText: l("importer.uploadBlocked"),
            hidden: !E,
            children: /* @__PURE__ */ w(Ye, { onClick: k, disabled: E, children: l("importer.upload") })
          }
        )
      ] })
    ] }),
    (u === "submit" || u === "failed" || u === "completed") && /* @__PURE__ */ w(
      km,
      {
        mode: u,
        progress: m,
        onRetry: k,
        onBackToPreview: P,
        resetState: F
      }
    )
  ] }) });
}
function sh(e) {
  return /* @__PURE__ */ w(Ip, { selectedLocale: e.locale, children: /* @__PURE__ */ w(rh, { ...e }) });
}
export {
  sh as default
};
