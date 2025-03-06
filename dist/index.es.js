var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var n$4, l$7, u$c, i$7, r$6, o$7, e$7, f$e, c$7, s$7, a$c, h$4, p$4 = {}, v$2 = [], y$6 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d$5 = Array.isArray;
function w$7(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function _$4(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function g$3(l2, u2, t2) {
  var i2, r2, o3, e2 = {};
  for (o3 in u2) "key" == o3 ? i2 = u2[o3] : "ref" == o3 ? r2 = u2[o3] : e2[o3] = u2[o3];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n$4.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o3 in l2.defaultProps) void 0 === e2[o3] && (e2[o3] = l2.defaultProps[o3]);
  return m$6(l2, e2, i2, r2, null);
}
function m$6(n2, t2, i2, r2, o3) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u$c : o3, __i: -1, __u: 0 };
  return null == o3 && null != l$7.vnode && l$7.vnode(e2), e2;
}
function b$4() {
  return { current: null };
}
function k$3(n2) {
  return n2.children;
}
function x$5(n2, l2) {
  this.props = n2, this.context = l2;
}
function C$7(n2, l2) {
  if (null == l2) return n2.__ ? C$7(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? C$7(n2) : null;
}
function S$3(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return S$3(n2);
  }
}
function M$4(n2) {
  (!n2.__d && (n2.__d = true) && i$7.push(n2) && !P$6.__r++ || r$6 !== l$7.debounceRendering) && ((r$6 = l$7.debounceRendering) || o$7)(P$6);
}
function P$6() {
  var n2, u2, t2, r2, o3, f2, c2, s2;
  for (i$7.sort(e$7); n2 = i$7.shift(); ) n2.__d && (u2 = i$7.length, r2 = void 0, f2 = (o3 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((r2 = w$7({}, o3)).__v = o3.__v + 1, l$7.vnode && l$7.vnode(r2), j$5(t2.__P, r2, o3, t2.__n, t2.__P.namespaceURI, 32 & o3.__u ? [f2] : null, c2, null == f2 ? C$7(o3) : f2, !!(32 & o3.__u), s2), r2.__v = o3.__v, r2.__.__k[r2.__i] = r2, z$2(c2, r2, s2), r2.__e != f2 && S$3(r2)), i$7.length > u2 && i$7.sort(e$7));
  P$6.__r = 0;
}
function $$3(n2, l2, u2, t2, i2, r2, o3, e2, f2, c2, s2) {
  var a3, h2, y2, d2, w2, _2, g2 = t2 && t2.__k || v$2, m2 = l2.length;
  for (f2 = I$5(u2, l2, g2, f2, m2), a3 = 0; a3 < m2; a3++) null != (y2 = u2.__k[a3]) && (h2 = -1 === y2.__i ? p$4 : g2[y2.__i] || p$4, y2.__i = a3, _2 = j$5(n2, y2, h2, i2, r2, o3, e2, f2, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && V$3(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 4 & y2.__u || h2.__k === y2.__k ? f2 = A$4(y2, f2, n2) : "function" == typeof y2.type && void 0 !== _2 ? f2 = _2 : d2 && (f2 = d2.nextSibling), y2.__u &= -7);
  return u2.__e = w2, f2;
}
function I$5(n2, l2, u2, t2, i2) {
  var r2, o3, e2, f2, c2, s2 = u2.length, a3 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o3 = l2[r2]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f2 = r2 + h2, (o3 = n2.__k[r2] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m$6(null, o3, null, null, null) : d$5(o3) ? m$6(k$3, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? m$6(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e2 = null, -1 !== (c2 = o3.__i = L$3(o3, u2, f2, a3)) && (a3--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null === e2.__v ? (-1 == c2 && h2--, "function" != typeof o3.type && (o3.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o3.__u |= 4))) : n2.__k[r2] = null;
  if (a3) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = C$7(e2)), q$3(e2, e2));
  return t2;
}
function A$4(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = A$4(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = C$7(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function H$5(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (d$5(n2) ? n2.some(function(n3) {
    H$5(n3, l2);
  }) : l2.push(n2)), l2;
}
function L$3(n2, l2, u2, t2) {
  var i2, r2, o3 = n2.key, e2 = n2.type, f2 = l2[u2];
  if (null === f2 || f2 && o3 == f2.key && e2 === f2.type && 0 == (2 & f2.__u)) return u2;
  if (t2 > (null != f2 && 0 == (2 & f2.__u) ? 1 : 0)) for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) {
    if (i2 >= 0) {
      if ((f2 = l2[i2]) && 0 == (2 & f2.__u) && o3 == f2.key && e2 === f2.type) return i2;
      i2--;
    }
    if (r2 < l2.length) {
      if ((f2 = l2[r2]) && 0 == (2 & f2.__u) && o3 == f2.key && e2 === f2.type) return r2;
      r2++;
    }
  }
  return -1;
}
function T$6(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y$6.test(l2) ? u2 : u2 + "px";
}
function F$5(n2, l2, u2, t2, i2) {
  var r2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T$6(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T$6(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$e, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$7, n2.addEventListener(l2, r2 ? a$c : s$7, r2)) : n2.removeEventListener(l2, r2 ? a$c : s$7, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function O$5(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = c$7++;
      else if (u2.t < t2.u) return;
      return t2(l$7.event ? l$7.event(u2) : u2);
    }
  };
}
function j$5(n2, u2, t2, i2, r2, o3, e2, f2, c2, s2) {
  var a3, h2, p2, v2, y2, g2, m2, b2, C2, S2, M2, P2, I2, A2, H2, L2, T2, F2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o3 = [f2 = u2.__e = t2.__e]), (a3 = l$7.__b) && a3(u2);
  n: if ("function" == typeof F2) try {
    if (b2 = u2.props, C2 = "prototype" in F2 && F2.prototype.render, S2 = (a3 = F2.contextType) && i2[a3.__c], M2 = a3 ? S2 ? S2.props.value : a3.__ : i2, t2.__c ? m2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (C2 ? u2.__c = h2 = new F2(b2, M2) : (u2.__c = h2 = new x$5(b2, M2), h2.constructor = F2, h2.render = B$2), S2 && S2.sub(h2), h2.props = b2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), C2 && null == h2.__s && (h2.__s = h2.state), C2 && null != F2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w$7({}, h2.__s)), w$7(h2.__s, F2.getDerivedStateFromProps(b2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u2, p2) C2 && null == F2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), C2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (C2 && null == F2.getDerivedStateFromProps && b2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b2, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b2, h2.__s, M2) || u2.__v == t2.__v)) {
        for (u2.__v != t2.__v && (h2.props = b2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
        h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(b2, h2.__s, M2), C2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, y2, g2);
      });
    }
    if (h2.context = M2, h2.props = b2, h2.__P = n2, h2.__e = false, I2 = l$7.__r, A2 = 0, C2) {
      for (h2.state = h2.__s, h2.__d = false, I2 && I2(u2), a3 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
      h2._sb = [];
    } else do {
      h2.__d = false, I2 && I2(u2), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = w$7(w$7({}, i2), h2.getChildContext())), C2 && !p2 && null != h2.getSnapshotBeforeUpdate && (g2 = h2.getSnapshotBeforeUpdate(v2, y2)), f2 = $$3(n2, d$5(L2 = null != a3 && a3.type === k$3 && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u2, t2, i2, r2, o3, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o3) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o3[o3.indexOf(f2)] = null, u2.__e = f2;
    } else for (T2 = o3.length; T2--; ) _$4(o3[T2]);
    else u2.__e = t2.__e, u2.__k = t2.__k;
    l$7.__e(n3, u2, t2);
  }
  else null == o3 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = N$3(t2.__e, u2, t2, i2, r2, o3, e2, c2, s2);
  return (a3 = l$7.diffed) && a3(u2), 128 & u2.__u ? void 0 : f2;
}
function z$2(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) V$3(t2[i2], t2[++i2], t2[++i2]);
  l$7.__c && l$7.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$7.__e(n3, u3.__v);
    }
  });
}
function N$3(u2, t2, i2, r2, o3, e2, f2, c2, s2) {
  var a3, h2, v2, y2, w2, g2, m2, b2 = i2.props, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a3 = 0; a3 < e2.length; a3++) if ((w2 = e2[a3]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
      u2 = w2, e2[a3] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o3, x2, k2.is && k2), c2 && (l$7.__m && l$7.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null === x2) b2 === k2 || c2 && u2.data === k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n$4.call(u2.childNodes), b2 = i2.props || p$4, !c2 && null != e2) for (b2 = {}, a3 = 0; a3 < u2.attributes.length; a3++) b2[(w2 = u2.attributes[a3]).name] = w2.value;
    for (a3 in b2) if (w2 = b2[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v2 = w2;
    else if (!(a3 in k2)) {
      if ("value" == a3 && "defaultValue" in k2 || "checked" == a3 && "defaultChecked" in k2) continue;
      F$5(u2, a3, null, w2, o3);
    }
    for (a3 in k2) w2 = k2[a3], "children" == a3 ? y2 = w2 : "dangerouslySetInnerHTML" == a3 ? h2 = w2 : "value" == a3 ? g2 = w2 : "checked" == a3 ? m2 = w2 : c2 && "function" != typeof w2 || b2[a3] === w2 || F$5(u2, a3, w2, b2[a3], o3);
    if (h2) c2 || v2 && (h2.__html === v2.__html || h2.__html === u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), $$3(u2, d$5(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e2, f2, e2 ? e2[0] : i2.__k && C$7(i2, 0), c2, s2), null != e2) for (a3 = e2.length; a3--; ) _$4(e2[a3]);
    c2 || (a3 = "value", "progress" == x2 && null == g2 ? u2.removeAttribute("value") : void 0 !== g2 && (g2 !== u2[a3] || "progress" == x2 && !g2 || "option" == x2 && g2 !== b2[a3]) && F$5(u2, a3, g2, b2[a3], o3), a3 = "checked", void 0 !== m2 && m2 !== u2[a3] && F$5(u2, a3, m2, b2[a3], o3));
  }
  return u2;
}
function V$3(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$7.__e(n3, t2);
  }
}
function q$3(n2, u2, t2) {
  var i2, r2;
  if (l$7.unmount && l$7.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || V$3(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$7.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && q$3(i2[r2], u2, t2 || "function" != typeof n2.type);
  t2 || _$4(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function B$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function D$4(u2, t2, i2) {
  var r2, o3, e2, f2;
  t2 == document && (t2 = document.documentElement), l$7.__ && l$7.__(u2, t2), o3 = (r2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, e2 = [], f2 = [], j$5(t2, u2 = (!r2 && i2 || t2).__k = g$3(k$3, null, [u2]), o3 || p$4, p$4, t2.namespaceURI, !r2 && i2 ? [i2] : o3 ? null : t2.firstChild ? n$4.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o3 ? o3.__e : t2.firstChild, r2, f2), z$2(e2, u2, f2);
}
function E$4(n2, l2) {
  D$4(n2, l2, E$4);
}
function G$2(l2, u2, t2) {
  var i2, r2, o3, e2, f2 = w$7({}, l2.props);
  for (o3 in l2.type && l2.type.defaultProps && (e2 = l2.type.defaultProps), u2) "key" == o3 ? i2 = u2[o3] : "ref" == o3 ? r2 = u2[o3] : f2[o3] = void 0 === u2[o3] && void 0 !== e2 ? e2[o3] : u2[o3];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$4.call(arguments, 2) : t2), m$6(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
}
function J$3(n2, l2) {
  var u2 = { __c: l2 = "__cC" + h$4++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, t2;
    return this.getChildContext || (u3 = /* @__PURE__ */ new Set(), (t2 = {})[l2] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u3 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.forEach(function(n5) {
        n5.__e = true, M$4(n5);
      });
    }, this.sub = function(n4) {
      u3.add(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3 && u3.delete(n4), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$4 = v$2.slice, l$7 = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o3; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o3 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o3 = i2.__d), o3) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$c = 0, x$5.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w$7({}, this.state), "function" == typeof n2 && (n2 = n2(w$7({}, u2), this.props)), n2 && w$7(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M$4(this));
}, x$5.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M$4(this));
}, x$5.prototype.render = k$3, i$7 = [], o$7 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$7 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, P$6.__r = 0, f$e = /(PointerCapture)$|Capture$/i, c$7 = 0, s$7 = O$5(false), a$c = O$5(true), h$4 = 0;
var f$d = 0;
function u$b(e2, t2, n2, o3, i2, u2) {
  t2 || (t2 = {});
  var a3, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a3 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$d, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a3 = e2.defaultProps)) for (c2 in a3) void 0 === p2[c2] && (p2[c2] = a3[c2]);
  return l$7.vnode && l$7.vnode(l2), l2;
}
var t$6, r$5, u$a, i$6, o$6 = 0, f$c = [], c$6 = l$7, e$6 = c$6.__b, a$b = c$6.__r, v$1 = c$6.diffed, l$6 = c$6.__c, m$5 = c$6.unmount, s$6 = c$6.__;
function d$4(n2, t2) {
  c$6.__h && c$6.__h(r$5, n2, o$6 || t2), o$6 = 0;
  var u2 = r$5.__H || (r$5.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function h$3(n2) {
  return o$6 = 1, p$3(D$3, n2);
}
function p$3(n2, u2, i2) {
  var o3 = d$4(t$6++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i2 ? i2(u2) : D$3(void 0, u2), function(n3) {
    var t2 = o3.__N ? o3.__N[0] : o3.__[0], r2 = o3.t(t2, n3);
    t2 !== r2 && (o3.__N = [r2, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r$5, !r$5.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o3.__c.__H) return true;
      var u3 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = o3.__c.props !== n3;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n3, t2, r2) || i3;
    };
    r$5.u = true;
    var c2 = r$5.shouldComponentUpdate, e2 = r$5.componentWillUpdate;
    r$5.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r$5.shouldComponentUpdate = f2;
  }
  return o3.__N || o3.__;
}
function y$5(n2, u2) {
  var i2 = d$4(t$6++, 3);
  !c$6.__s && C$6(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r$5.__H.__h.push(i2));
}
function _$3(n2, u2) {
  var i2 = d$4(t$6++, 4);
  !c$6.__s && C$6(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r$5.__h.push(i2));
}
function A$3(n2) {
  return o$6 = 5, T$5(function() {
    return { current: n2 };
  }, []);
}
function F$4(n2, t2, r2) {
  o$6 = 6, _$3(function() {
    return "function" == typeof n2 ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r2 ? r2 : r2.concat(n2));
}
function T$5(n2, r2) {
  var u2 = d$4(t$6++, 7);
  return C$6(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q$2(n2, t2) {
  return o$6 = 8, T$5(function() {
    return n2;
  }, t2);
}
function x$4(n2) {
  var u2 = r$5.context[n2.__c], i2 = d$4(t$6++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r$5)), u2.props.value) : n2.__;
}
function P$5(n2, t2) {
  c$6.useDebugValue && c$6.useDebugValue(t2 ? t2(n2) : n2);
}
function b$3(n2) {
  var u2 = d$4(t$6++, 10), i2 = h$3();
  return u2.__ = n2, r$5.componentDidCatch || (r$5.componentDidCatch = function(n3, t2) {
    u2.__ && u2.__(n3, t2), i2[1](n3);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function g$2() {
  var n2 = d$4(t$6++, 11);
  if (!n2.__) {
    for (var u2 = r$5.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function j$4() {
  for (var n2; n2 = f$c.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z$1), n2.__H.__h.forEach(B$1), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c$6.__e(t2, n2.__v);
  }
}
c$6.__b = function(n2) {
  r$5 = null, e$6 && e$6(n2);
}, c$6.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s$6 && s$6(n2, t2);
}, c$6.__r = function(n2) {
  a$b && a$b(n2), t$6 = 0;
  var i2 = (r$5 = n2.__c).__H;
  i2 && (u$a === r$5 ? (i2.__h = [], r$5.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i2.__h.forEach(z$1), i2.__h.forEach(B$1), i2.__h = [], t$6 = 0)), u$a = r$5;
}, c$6.diffed = function(n2) {
  v$1 && v$1(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f$c.push(t2) && i$6 === c$6.requestAnimationFrame || ((i$6 = c$6.requestAnimationFrame) || w$6)(j$4)), t2.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u$a = r$5 = null;
}, c$6.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z$1), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B$1(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c$6.__e(r2, n3.__v);
    }
  }), l$6 && l$6(n2, t2);
}, c$6.unmount = function(n2) {
  m$5 && m$5(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z$1(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c$6.__e(t2, r2.__v));
};
var k$2 = "function" == typeof requestAnimationFrame;
function w$6(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k$2 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k$2 && (t2 = requestAnimationFrame(r2));
}
function z$1(n2) {
  var t2 = r$5, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r$5 = t2;
}
function B$1(n2) {
  var t2 = r$5;
  n2.__c = n2.__(), r$5 = t2;
}
function C$6(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D$3(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
function g$1(n2, t2) {
  for (var e2 in t2) n2[e2] = t2[e2];
  return n2;
}
function E$3(n2, t2) {
  for (var e2 in n2) if ("__source" !== e2 && !(e2 in t2)) return true;
  for (var r2 in t2) if ("__source" !== r2 && n2[r2] !== t2[r2]) return true;
  return false;
}
function C$5(n2, t2) {
  var e2 = t2(), r2 = h$3({ t: { __: e2, u: t2 } }), u2 = r2[0].t, o3 = r2[1];
  return _$3(function() {
    u2.__ = e2, u2.u = t2, x$3(u2) && o3({ t: u2 });
  }, [n2, e2, t2]), y$5(function() {
    return x$3(u2) && o3({ t: u2 }), n2(function() {
      x$3(u2) && o3({ t: u2 });
    });
  }, [n2]), e2;
}
function x$3(n2) {
  var t2, e2, r2 = n2.u, u2 = n2.__;
  try {
    var o3 = r2();
    return !((t2 = u2) === (e2 = o3) && (0 !== t2 || 1 / t2 == 1 / e2) || t2 != t2 && e2 != e2);
  } catch (n3) {
    return true;
  }
}
function R$3(n2) {
  n2();
}
function w$5(n2) {
  return n2;
}
function k$1() {
  return [false, R$3];
}
var I$4 = _$3;
function N$2(n2, t2) {
  this.props = n2, this.context = t2;
}
function M$3(n2, e2) {
  function r2(n3) {
    var t2 = this.props.ref, r3 = t2 == n3.ref;
    return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : E$3(this.props, n3);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, g$3(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
}
(N$2.prototype = new x$5()).isPureReactComponent = true, N$2.prototype.shouldComponentUpdate = function(n2, t2) {
  return E$3(this.props, n2) || E$3(this.state, t2);
};
var T$4 = l$7.__b;
l$7.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T$4 && T$4(n2);
};
var A$2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D$2(n2) {
  function t2(t3) {
    var e2 = g$1({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = A$2, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var L$2 = function(n2, t2) {
  return null == n2 ? null : H$5(H$5(n2).map(t2));
}, O$4 = { map: L$2, forEach: L$2, count: function(n2) {
  return n2 ? H$5(n2).length : 0;
}, only: function(n2) {
  var t2 = H$5(n2);
  if (1 !== t2.length) throw "Children.only";
  return t2[0];
}, toArray: H$5 }, F$3 = l$7.__e;
l$7.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o3 = t2; o3 = o3.__; ) if ((u2 = o3.__c) && u2.__c) return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  F$3(n2, t2, e2, r2);
};
var U$5 = l$7.unmount;
function V$2(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g$1({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return V$2(n3, t2, e2);
  })), n2;
}
function W$1(n2, t2, e2) {
  return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return W$1(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function P$4() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j$3(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function z(n2) {
  var e2, r2, u2;
  function o3(o4) {
    if (e2 || (e2 = n2()).then(function(n3) {
      r2 = n3.default || n3;
    }, function(n3) {
      u2 = n3;
    }), u2) throw u2;
    if (!r2) throw e2;
    return g$3(r2, o4);
  }
  return o3.displayName = "Lazy", o3.__f = true, o3;
}
function B() {
  this.i = null, this.l = null;
}
l$7.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & n2.__u && (n2.type = null), U$5 && U$5(n2);
}, (P$4.prototype = new x$5()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.o && (r2.o = []), r2.o.push(e2);
  var u2 = j$3(r2.__v), o3 = false, i2 = function() {
    o3 || (o3 = true, e2.__R = null, u2 ? u2(c2) : c2());
  };
  e2.__R = i2;
  var c2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = W$1(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, P$4.prototype.componentWillUnmount = function() {
  this.o = [];
}, P$4.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o3 = this.__v.__k[0].__c;
      this.__v.__k[0] = V$2(this.__b, r2, o3.__O = o3.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && g$3(k$3, null, n2.fallback);
  return i2 && (i2.__u &= -33), [g$3(k$3, null, e2.__a ? null : n2.children), i2];
};
var H$4 = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.l.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e2 = n2.i; e2; ) {
    for (; e2.length > 3; ) e2.pop()();
    if (e2[1] < e2[0]) break;
    n2.i = e2 = e2[2];
  }
};
function Z$1(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function Y(n2) {
  var e2 = this, r2 = n2.h;
  e2.componentWillUnmount = function() {
    D$4(null, e2.v), e2.v = null, e2.h = null;
  }, e2.h && e2.h !== r2 && e2.componentWillUnmount(), e2.v || (e2.h = r2, e2.v = { nodeType: 1, parentNode: r2, childNodes: [], contains: function() {
    return true;
  }, appendChild: function(n3) {
    this.childNodes.push(n3), e2.h.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e2.h.insertBefore(n3, t2);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.h.removeChild(n3);
  } }), D$4(g$3(Z$1, { context: e2.context }, n2.__v), e2.v);
}
function $$2(n2, e2) {
  var r2 = g$3(Y, { __v: n2, h: e2 });
  return r2.containerInfo = e2, r2;
}
(B.prototype = new x$5()).__a = function(n2) {
  var t2 = this, e2 = j$3(t2.__v), r2 = t2.l.get(n2);
  return r2[0]++, function(u2) {
    var o3 = function() {
      t2.props.revealOrder ? (r2.push(u2), H$4(t2, n2, r2)) : u2();
    };
    e2 ? e2(o3) : o3();
  };
}, B.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t2 = H$5(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; ) this.l.set(t2[e2], this.i = [1, 0, this.i]);
  return n2.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
  var n2 = this;
  this.l.forEach(function(t2, e2) {
    H$4(n2, e2, t2);
  });
};
var q$1 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G$1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J$2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K$2 = /[A-Z0-9]/g, Q$1 = "undefined" != typeof document, X$2 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function nn(n2, t2, e2) {
  return null == t2.__k && (t2.textContent = ""), D$4(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
function tn(n2, t2, e2) {
  return E$4(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
x$5.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(x$5.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var en = l$7.event;
function rn() {
}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
l$7.event = function(n2) {
  return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
};
var cn, ln = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, fn = l$7.vnode;
l$7.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {}, o3 = -1 === e2.indexOf("-");
    for (var i2 in t2) {
      var c2 = t2[i2];
      if (!("value" === i2 && "defaultValue" in t2 && null == c2 || Q$1 && "children" === i2 && "noscript" === e2 || "class" === i2 || "className" === i2)) {
        var l2 = i2.toLowerCase();
        "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === c2 ? c2 = "" : "translate" === l2 && "no" === c2 ? c2 = false : "o" === l2[0] && "n" === l2[1] ? "ondoubleclick" === l2 ? i2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || X$2(t2.type) ? "onfocus" === l2 ? i2 = "onfocusin" : "onblur" === l2 ? i2 = "onfocusout" : J$2.test(i2) && (i2 = l2) : l2 = i2 = "oninput" : o3 && G$1.test(i2) ? i2 = i2.replace(K$2, "-$&").toLowerCase() : null === c2 && (c2 = void 0), "oninput" === l2 && u2[i2 = l2] && (i2 = "oninputCapture"), u2[i2] = c2;
      }
    }
    "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = H$5(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), "select" == e2 && null != u2.defaultValue && (u2.value = H$5(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", ln)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
  }(n2), n2.$$typeof = q$1, fn && fn(n2);
};
var an = l$7.__r;
l$7.__r = function(n2) {
  an && an(n2), cn = n2.__c;
};
var sn = l$7.diffed;
l$7.diffed = function(n2) {
  sn && sn(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), cn = null;
};
var hn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return cn.__n[n2.__c].props.value;
}, useCallback: q$2, useContext: x$4, useDebugValue: P$5, useDeferredValue: w$5, useEffect: y$5, useId: g$2, useImperativeHandle: F$4, useInsertionEffect: I$4, useLayoutEffect: _$3, useMemo: T$5, useReducer: p$3, useRef: A$3, useState: h$3, useSyncExternalStore: C$5, useTransition: k$1 } } }, vn = "18.3.1";
function dn(n2) {
  return g$3.bind(null, n2);
}
function pn(n2) {
  return !!n2 && n2.$$typeof === q$1;
}
function mn(n2) {
  return pn(n2) && n2.type === k$3;
}
function yn(n2) {
  return !!n2 && !!n2.displayName && ("string" == typeof n2.displayName || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
}
function _n(n2) {
  return pn(n2) ? G$2.apply(null, arguments) : n2;
}
function bn(n2) {
  return !!n2.__k && (D$4(null, n2), true);
}
function Sn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var gn = function(n2, t2) {
  return n2(t2);
}, En = function(n2, t2) {
  return n2(t2);
}, Cn = k$3, xn = pn, Rn = { useState: h$3, useId: g$2, useReducer: p$3, useEffect: y$5, useLayoutEffect: _$3, useInsertionEffect: I$4, useTransition: k$1, useDeferredValue: w$5, useSyncExternalStore: C$5, startTransition: R$3, useRef: A$3, useImperativeHandle: F$4, useMemo: T$5, useCallback: q$2, useContext: x$4, useDebugValue: P$5, version: "18.3.1", Children: O$4, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $$2, createElement: g$3, createContext: J$3, createFactory: dn, cloneElement: _n, createRef: b$4, Fragment: k$3, isValidElement: pn, isElement: xn, isFragment: mn, isMemo: yn, findDOMNode: Sn, Component: x$5, PureComponent: N$2, memo: M$3, forwardRef: D$2, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P$4, SuspenseList: B, lazy: z, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
const t$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: O$4,
  Component: x$5,
  Fragment: k$3,
  PureComponent: N$2,
  StrictMode: Cn,
  Suspense: P$4,
  SuspenseList: B,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn,
  cloneElement: _n,
  createContext: J$3,
  createElement: g$3,
  createFactory: dn,
  createPortal: $$2,
  createRef: b$4,
  default: Rn,
  findDOMNode: Sn,
  flushSync: En,
  forwardRef: D$2,
  hydrate: tn,
  isElement: xn,
  isFragment: mn,
  isMemo: yn,
  isValidElement: pn,
  lazy: z,
  memo: M$3,
  render: nn,
  startTransition: R$3,
  unmountComponentAtNode: bn,
  unstable_batchedUpdates: gn,
  useCallback: q$2,
  useContext: x$4,
  useDebugValue: P$5,
  useDeferredValue: w$5,
  useEffect: y$5,
  useErrorBoundary: b$3,
  useId: g$2,
  useImperativeHandle: F$4,
  useInsertionEffect: I$4,
  useLayoutEffect: _$3,
  useMemo: T$5,
  useReducer: p$3,
  useRef: A$3,
  useState: h$3,
  useSyncExternalStore: C$5,
  useTransition: k$1,
  version: vn
}, Symbol.toStringTag, { value: "Module" }));
function r$4(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o3 = e2.length;
    for (t2 = 0; t2 < o3; t2++) e2[t2] && (f2 = r$4(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o3 = arguments.length; f2 < o3; f2++) (e2 = arguments[f2]) && (t2 = r$4(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const baseClasses$2 = cva("text-center inline-block font-semibold", {
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
      disabled: false,
      className: "hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    },
    {
      variant: "secondary",
      disabled: false,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    },
    {
      variant: "tertiary",
      disabled: false,
      className: "hover:bg-tertiary-light"
    },
    {
      variant: "success",
      disabled: false,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
    },
    {
      variant: "danger",
      disabled: false,
      className: "hover:bg-danger-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
    },
    {
      variant: "warning",
      disabled: false,
      className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:opacity-80"
    }
  ],
  defaultVariants: {
    size: "lg",
    variant: "primary",
    disabled: false
  }
});
function Button({
  children,
  variant,
  disabled,
  onClick,
  size: size2
}) {
  const componentClassName = baseClasses$2({ variant, disabled, size: size2 });
  return /* @__PURE__ */ u$b("div", { className: componentClassName, onClick, children });
}
const Card = D$2(
  ({ children, ...props }, ref) => {
    const componentStyle = {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      padding: "10px",
      borderRadius: "5px",
      cursor: props.onClick ? "pointer" : "default"
    };
    return /* @__PURE__ */ u$b("div", { ref, style: componentStyle, ...props, children });
  }
);
function Checkbox({ id, checked, setChecked, label }) {
  return /* @__PURE__ */ u$b("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ u$b("div", { className: "flex h-6 shrink-0 items-center", children: /* @__PURE__ */ u$b("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ u$b(
        "input",
        {
          checked,
          onChange: (e2) => setChecked(e2.target.checked),
          id,
          type: "checkbox",
          className: "checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline-primary col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ u$b(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",
          children: [
            /* @__PURE__ */ u$b(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ u$b(
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
    label && /* @__PURE__ */ u$b("div", { className: "text-sm/6", children: /* @__PURE__ */ u$b("label", { htmlFor: id, className: "font-medium text-gray-900", children: label }) })
  ] });
}
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? Rn.useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn2) {
  const ref = A$3(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    ref.current = fn2;
  }, [
    fn2
  ]);
  return q$2((...args) => {
    const f2 = ref.current;
    return f2 === null || f2 === void 0 ? void 0 : f2(...args);
  }, []);
}
const $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $c87311424ea30a05$var$testUserAgent(re2) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re2.test(brand.brand))) || re2.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re2) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re2.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn2) {
  let res = null;
  return () => {
    if (res == null) res = fn2();
    return res;
  };
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ($c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
class $8a9cb279dc87e130$export$905e7fc544a71f36 {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = A$3({
    isFocused: false,
    observer: null
  });
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e2) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e2);
  });
  return q$2((e2) => {
    if (e2.target instanceof HTMLButtonElement || e2.target instanceof HTMLInputElement || e2.target instanceof HTMLTextAreaElement || e2.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e2.target;
      let onBlurHandler = (e3) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e3));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = q$2((e2) => {
    if (e2.target === e2.currentTarget) {
      if (onBlurProp) onBlurProp(e2);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  const onFocus = q$2((e2) => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target);
    if (e2.target === e2.currentTarget && ownerDocument.activeElement === e2.target) {
      if (onFocusProp) onFocusProp(e2);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e2);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e2);
}
function $507fabe10e71c6fb$var$isValidKey(e2) {
  return !(e2.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e2) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e2)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e2);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e2) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e2.type === "mousedown" || e2.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e2);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e2) {
  if ($6a7db85432448f7f$export$60278871457622de(e2)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e2) {
  if (e2.target === window || e2.target === document) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e2);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
const $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
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
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e2 === null || e2 === void 0 ? void 0 : e2.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e2 === null || e2 === void 0 ? void 0 : (_e_target = e2.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e2 === null || e2 === void 0 ? void 0 : e2.target) instanceof IHTMLTextAreaElement || (e2 === null || e2 === void 0 ? void 0 : e2.target) instanceof IHTMLElement && (e2 === null || e2 === void 0 ? void 0 : e2.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn2, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  y$5(() => {
    let handler = (modality, e2) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e2)) return;
      fn2($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = A$3({
    isFocusWithin: false
  });
  let onBlur = q$2((e2) => {
    if (state.current.isFocusWithin && !e2.currentTarget.contains(e2.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin) onBlurWithin(e2);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus = q$2((e2) => {
    if (!state.current.isFocusWithin && document.activeElement === e2.target) {
      if (onFocusWithin) onFocusWithin(e2);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e2);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled) return {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e2) {
  if (e2.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") return;
  if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = h$3(false);
  let state = A$3({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  y$5($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = T$5(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered) return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e2) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse") return;
        triggerHoverStart(e2, e2.pointerType);
      };
      hoverProps2.onPointerLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target)) triggerHoverEnd2(e2, e2.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e2) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e2, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target)) triggerHoverEnd2(e2, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state
  ]);
  y$5(() => {
    if (isDisabled) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = A$3({
    isFocused: false,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  });
  let [isFocused, setFocused] = h$3(false);
  let [isFocusVisibleState, setFocusVisible] = h$3(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = q$2(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = q$2((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
var i$5 = Object.defineProperty;
var d$3 = (t2, e2, n2) => e2 in t2 ? i$5(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
var r$3 = (t2, e2, n2) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$5 = class o {
  constructor() {
    r$3(this, "current", this.detect());
    r$3(this, "handoffState", "pending");
    r$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
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
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
let s$5 = new o$5();
function u$9(r2) {
  return s$5.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$4() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a3) {
    return e2.addEventListener(t2, s2, a3), r2.add(() => e2.removeEventListener(t2, s2, a3));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$4(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, s2) {
    let a3 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a3 });
    });
  }, group(e2) {
    let t2 = o$4();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.includes(e2) || n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0) for (let s2 of n2.splice(t2, 1)) s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0)) e2();
  } };
  return r2;
}
function p$2() {
  let [e2] = h$3(o$4);
  return y$5(() => () => e2.dispose(), [e2]), e2;
}
let n$3 = (e2, t2) => {
  s$5.isServer ? y$5(e2, t2) : _$3(e2, t2);
};
function s$4(e2) {
  let r2 = A$3(e2);
  return n$3(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let o$3 = function(t2) {
  let e2 = s$4(t2);
  return Rn.useCallback((...r2) => e2.current(...r2), [e2]);
};
function E$2(e2) {
  let t2 = e2.width / 2, n2 = e2.height / 2;
  return { top: e2.clientY - n2, right: e2.clientX + t2, bottom: e2.clientY + n2, left: e2.clientX - t2 };
}
function P$3(e2, t2) {
  return !(!e2 || !t2 || e2.right < t2.left || e2.left > t2.right || e2.bottom < t2.top || e2.top > t2.bottom);
}
function w$4({ disabled: e2 = false } = {}) {
  let t2 = A$3(null), [n2, l2] = h$3(false), r2 = p$2(), o3 = o$3(() => {
    t2.current = null, l2(false), r2.dispose();
  }), f2 = o$3((s2) => {
    if (r2.dispose(), t2.current === null) {
      t2.current = s2.currentTarget, l2(true);
      {
        let i2 = u$9(s2.currentTarget);
        r2.addEventListener(i2, "pointerup", o3, false), r2.addEventListener(i2, "pointermove", (c2) => {
          if (t2.current) {
            let p2 = E$2(c2);
            l2(P$3(p2, t2.current.getBoundingClientRect()));
          }
        }, false), r2.addEventListener(i2, "pointercancel", o3, false);
      }
    }
  });
  return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o3, onClick: o3 } };
}
let e$5 = J$3(void 0);
function a$a() {
  return x$4(e$5);
}
function t$3(...r2) {
  return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}
function u$8(r2, n2, ...a3) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a3) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$8), t2;
}
var O$3 = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(O$3 || {}), A$1 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(A$1 || {});
function L$1() {
  let n2 = U$4();
  return q$2((r2) => C$4({ mergeRefs: n2, ...r2 }), [n2]);
}
function C$4({ ourProps: n2, theirProps: r2, slot: e2, defaultTag: a3, features: s2, visible: t2 = true, name: l2, mergeRefs: i2 }) {
  i2 = i2 != null ? i2 : $$1;
  let o3 = P$2(r2, n2);
  if (t2) return F$2(o3, e2, a3, l2, i2);
  let y2 = s2 != null ? s2 : 0;
  if (y2 & 2) {
    let { static: f2 = false, ...u2 } = o3;
    if (f2) return F$2(u2, e2, a3, l2, i2);
  }
  if (y2 & 1) {
    let { unmount: f2 = true, ...u2 } = o3;
    return u$8(f2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F$2({ ...u2, hidden: true, style: { display: "none" } }, e2, a3, l2, i2);
    } });
  }
  return F$2(o3, e2, a3, l2, i2);
}
function F$2(n2, r2 = {}, e2, a3, s2) {
  let { as: t2 = e2, children: l2, refName: i2 = "ref", ...o3 } = h$2(n2, ["unmount", "static"]), y2 = n2.ref !== void 0 ? { [i2]: n2.ref } : {}, f2 = typeof l2 == "function" ? l2(r2) : l2;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(r2)), o3["aria-labelledby"] && o3["aria-labelledby"] === o3.id && (o3["aria-labelledby"] = void 0);
  let u2 = {};
  if (r2) {
    let d2 = false, p2 = [];
    for (let [c2, T2] of Object.entries(r2)) typeof T2 == "boolean" && (d2 = true), T2 === true && p2.push(c2.replace(/([A-Z])/g, (g2) => `-${g2.toLowerCase()}`));
    if (d2) {
      u2["data-headlessui-state"] = p2.join(" ");
      for (let c2 of p2) u2[`data-${c2}`] = "";
    }
  }
  if (t2 === k$3 && (Object.keys(m$4(o3)).length > 0 || Object.keys(m$4(u2)).length > 0)) if (!pn(f2) || Array.isArray(f2) && f2.length > 1) {
    if (Object.keys(m$4(o3)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m$4(o3)).concat(Object.keys(m$4(u2))).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
  } else {
    let d2 = f2.props, p2 = d2 == null ? void 0 : d2.className, c2 = typeof p2 == "function" ? (...R2) => t$3(p2(...R2), o3.className) : t$3(p2, o3.className), T2 = c2 ? { className: c2 } : {}, g2 = P$2(f2.props, m$4(h$2(o3, ["ref"])));
    for (let R2 in u2) R2 in g2 && delete u2[R2];
    return _n(f2, Object.assign({}, g2, u2, y2, { ref: s2(H$3(f2), y2.ref) }, T2));
  }
  return g$3(t2, Object.assign({}, h$2(o3, ["ref"]), t2 !== k$3 && y2, t2 !== k$3 && u2), f2);
}
function U$4() {
  let n2 = A$3([]), r2 = q$2((e2) => {
    for (let a3 of n2.current) a3 != null && (typeof a3 == "function" ? a3(e2) : a3.current = e2);
  }, []);
  return (...e2) => {
    if (!e2.every((a3) => a3 == null)) return n2.current = e2, r2;
  };
}
function $$1(...n2) {
  return n2.every((r2) => r2 == null) ? void 0 : (r2) => {
    for (let e2 of n2) e2 != null && (typeof e2 == "function" ? e2(r2) : e2.current = r2);
  };
}
function P$2(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  if (r2.disabled || r2["aria-disabled"]) for (let s2 in e2) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s2) && (e2[s2] = [(t2) => {
    var l2;
    return (l2 = t2 == null ? void 0 : t2.preventDefault) == null ? void 0 : l2.call(t2);
  }]);
  for (let s2 in e2) Object.assign(r2, { [s2](t2, ...l2) {
    let i2 = e2[s2];
    for (let o3 of i2) {
      if ((t2 instanceof Event || (t2 == null ? void 0 : t2.nativeEvent) instanceof Event) && t2.defaultPrevented) return;
      o3(t2, ...l2);
    }
  } });
  return r2;
}
function _$2(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  for (let s2 in e2) Object.assign(r2, { [s2](...t2) {
    let l2 = e2[s2];
    for (let i2 of l2) i2 == null || i2(...t2);
  } });
  return r2;
}
function K$1(n2) {
  var r2;
  return Object.assign(D$2(n2), { displayName: (r2 = n2.displayName) != null ? r2 : n2.name });
}
function m$4(n2) {
  let r2 = Object.assign({}, n2);
  for (let e2 in r2) r2[e2] === void 0 && delete r2[e2];
  return r2;
}
function h$2(n2, r2 = []) {
  let e2 = Object.assign({}, n2);
  for (let a3 of r2) a3 in e2 && delete e2[a3];
  return e2;
}
function H$3(n2) {
  return Rn.version.split(".")[0] >= "19" ? n2.props.ref : n2.ref;
}
function T$3(l2, r2, c2) {
  let [i2, s2] = h$3(c2), e2 = l2 !== void 0, t2 = A$3(e2), u2 = A$3(false), d2 = A$3(false);
  return e2 && !t2.current && !u2.current ? (u2.current = true, t2.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t2.current && !d2.current && (d2.current = true, t2.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l2 : i2, o$3((n2) => (e2 || s2(n2), r2 == null ? void 0 : r2(n2)))];
}
function l$5(e2) {
  let [t2] = h$3(e2);
  return t2;
}
function e$4(i2 = {}, s2 = null, t2 = []) {
  for (let [r2, n2] of Object.entries(i2)) o$2(t2, f$b(s2, r2), n2);
  return t2;
}
function f$b(i2, s2) {
  return i2 ? i2 + "[" + s2 + "]" : s2;
}
function o$2(i2, s2, t2) {
  if (Array.isArray(t2)) for (let [r2, n2] of t2.entries()) o$2(i2, f$b(s2, r2.toString()), n2);
  else t2 instanceof Date ? i2.push([s2, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s2, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s2, t2]) : typeof t2 == "number" ? i2.push([s2, `${t2}`]) : t2 == null ? i2.push([s2, ""]) : e$4(t2, s2, i2);
}
let a$9 = "span";
var s$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$3 || {});
function l$4(t2, r2) {
  var n2;
  let { features: d2 = 1, ...e2 } = t2, o3 = { ref: r2, "aria-hidden": (d2 & 2) === 2 ? true : (n2 = e2["aria-hidden"]) != null ? n2 : void 0, hidden: (d2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d2 & 4) === 4 && (d2 & 2) !== 2 && { display: "none" } } };
  return L$1()({ ourProps: o3, theirProps: e2, slot: {}, defaultTag: a$9, name: "Hidden" });
}
let f$a = K$1(l$4);
let f$9 = J$3(null);
function c$5({ children: t2 }) {
  let e2 = x$4(f$9);
  if (!e2) return Rn.createElement(Rn.Fragment, null, t2);
  let { target: r2 } = e2;
  return r2 ? $$2(Rn.createElement(Rn.Fragment, null, t2), r2) : null;
}
function j$2({ data: t2, form: e2, disabled: r2, onReset: n2, overrides: F2 }) {
  let [i2, a3] = h$3(null), p2 = p$2();
  return y$5(() => {
    if (n2 && i2) return p2.addEventListener(i2, "reset", n2);
  }, [i2, e2, n2]), Rn.createElement(c$5, null, Rn.createElement(C$3, { setForm: a3, formId: e2 }), e$4(t2).map(([s2, v2]) => Rn.createElement(f$a, { features: s$3.Hidden, ...m$4({ key: s2, as: "input", type: "hidden", hidden: true, readOnly: true, form: e2, disabled: r2, name: s2, value: v2, ...F2 }) })));
}
function C$3({ setForm: t2, formId: e2 }) {
  return y$5(() => {
    if (e2) {
      let r2 = document.getElementById(e2);
      r2 && t2(r2);
    }
  }, [t2, e2]), e2 ? null : Rn.createElement(f$a, { features: s$3.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r2) => {
    if (!r2) return;
    let n2 = r2.closest("form");
    n2 && t2(n2);
  } });
}
let e$3 = J$3(void 0);
function u$7() {
  return x$4(e$3);
}
function r$2(n2) {
  let e2 = n2.parentElement, l2 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); ) e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
  let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t2 && i$4(l2) ? false : t2;
}
function i$4(n2) {
  if (!n2) return false;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement) return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}
let u$6 = Symbol();
function T$2(t2, n2 = true) {
  return Object.assign(t2, { [u$6]: n2 });
}
function y$4(...t2) {
  let n2 = A$3(t2);
  y$5(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o$3((e2) => {
    for (let o3 of n2.current) o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$6])) ? void 0 : c2;
}
let a$8 = J$3(null);
a$8.displayName = "DescriptionContext";
function f$8() {
  let r2 = x$4(a$8);
  if (r2 === null) {
    let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e2, f$8), e2;
  }
  return r2;
}
function U$3() {
  var r2, e2;
  return (e2 = (r2 = x$4(a$8)) == null ? void 0 : r2.value) != null ? e2 : void 0;
}
function w$3() {
  let [r2, e2] = h$3([]);
  return [r2.length > 0 ? r2.join(" ") : void 0, T$5(() => function(t2) {
    let i2 = o$3((n2) => (e2((s2) => [...s2, n2]), () => e2((s2) => {
      let o3 = s2.slice(), p2 = o3.indexOf(n2);
      return p2 !== -1 && o3.splice(p2, 1), o3;
    }))), l2 = T$5(() => ({ register: i2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [i2, t2.slot, t2.name, t2.props, t2.value]);
    return Rn.createElement(a$8.Provider, { value: l2 }, t2.children);
  }, [e2])];
}
let S$2 = "p";
function C$2(r2, e2) {
  let d2 = g$2(), t2 = a$a(), { id: i2 = `headlessui-description-${d2}`, ...l2 } = r2, n2 = f$8(), s2 = y$4(e2);
  n$3(() => n2.register(i2), [i2, n2.register]);
  let o3 = t2 || false, p2 = T$5(() => ({ ...n2.slot, disabled: o3 }), [n2.slot, o3]), D2 = { ref: s2, ...n2.props, id: i2 };
  return L$1()({ ourProps: D2, theirProps: l2, slot: p2, defaultTag: S$2, name: n2.name || "Description" });
}
let _$1 = K$1(C$2), H$2 = Object.assign(_$1, {});
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
let c$4 = J$3(null);
c$4.displayName = "LabelContext";
function P$1() {
  let r2 = x$4(c$4);
  if (r2 === null) {
    let l2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l2, P$1), l2;
  }
  return r2;
}
function I$3(r2) {
  var a3, e2, o3;
  let l2 = (e2 = (a3 = x$4(c$4)) == null ? void 0 : a3.value) != null ? e2 : void 0;
  return ((o3 = r2 == null ? void 0 : r2.length) != null ? o3 : 0) > 0 ? [l2, ...r2].filter(Boolean).join(" ") : l2;
}
function K({ inherit: r2 = false } = {}) {
  let l2 = I$3(), [a3, e2] = h$3([]), o3 = r2 ? [l2, ...a3].filter(Boolean) : a3;
  return [o3.length > 0 ? o3.join(" ") : void 0, T$5(() => function(t2) {
    let s2 = o$3((i2) => (e2((p2) => [...p2, i2]), () => e2((p2) => {
      let u2 = p2.slice(), d2 = u2.indexOf(i2);
      return d2 !== -1 && u2.splice(d2, 1), u2;
    }))), m2 = T$5(() => ({ register: s2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [s2, t2.slot, t2.name, t2.props, t2.value]);
    return Rn.createElement(c$4.Provider, { value: m2 }, t2.children);
  }, [e2])];
}
let N$1 = "label";
function G(r2, l2) {
  var y2;
  let a3 = g$2(), e2 = P$1(), o3 = u$7(), g2 = a$a(), { id: t2 = `headlessui-label-${a3}`, htmlFor: s2 = o3 != null ? o3 : (y2 = e2.props) == null ? void 0 : y2.htmlFor, passive: m2 = false, ...i2 } = r2, p2 = y$4(l2);
  n$3(() => e2.register(t2), [t2, e2.register]);
  let u2 = o$3((L2) => {
    let b2 = L2.currentTarget;
    if (b2 instanceof HTMLLabelElement && L2.preventDefault(), e2.props && "onClick" in e2.props && typeof e2.props.onClick == "function" && e2.props.onClick(L2), b2 instanceof HTMLLabelElement) {
      let n2 = document.getElementById(b2.htmlFor);
      if (n2) {
        let E2 = n2.getAttribute("disabled");
        if (E2 === "true" || E2 === "") return;
        let x2 = n2.getAttribute("aria-disabled");
        if (x2 === "true" || x2 === "") return;
        (n2 instanceof HTMLInputElement && (n2.type === "radio" || n2.type === "checkbox") || n2.role === "radio" || n2.role === "checkbox" || n2.role === "switch") && n2.click(), n2.focus({ preventScroll: true });
      }
    }
  }), d2 = g2 || false, C2 = T$5(() => ({ ...e2.slot, disabled: d2 }), [e2.slot, d2]), f2 = { ref: p2, ...e2.props, id: t2, htmlFor: s2, onClick: u2 };
  return m2 && ("onClick" in f2 && (delete f2.htmlFor, delete f2.onClick), "onClick" in i2 && delete i2.onClick), L$1()({ ourProps: f2, theirProps: i2, slot: C2, defaultTag: s2 ? N$1 : "div", name: e2.name || "Label" });
}
let U$2 = K$1(G), Q = Object.assign(U$2, {});
let e$2 = J$3(() => {
});
function C$1({ value: t2, children: o3 }) {
  return Rn.createElement(e$2.Provider, { value: t2 }, o3);
}
function memo$1(getDeps, fn2, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index2) => deps[index2] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn2(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${""}`);
  } else {
    return value;
  }
}
const approxEqual = (a3, b2) => Math.abs(a3 - b2) < 1;
const debounce = (targetWindow, fn2, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn2.apply(this, args), ms);
  };
};
const defaultKeyExtractor = (index2) => index2;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i2 = start; i2 <= end; i2++) {
    arr.push(i2);
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(element.getBoundingClientRect());
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const addEventListenerOptions = {
  passive: true
};
const supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
const observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset2 = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset2, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset2 = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset2, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
};
const measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size2 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size2;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
const elementScroll = (offset2, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset2 + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              this._measureElement(entry.target, entry);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: true,
        useAnimationFrameWithResizeObserver: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo$1(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d2) => d2());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset2, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset2 ? "forward" : "backward" : null;
            this.scrollOffset = offset2;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index2) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m2 = index2 - 1; m2 >= 0; m2--) {
        const measurement = measurements[m2];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a3, b2) => {
        if (a3.end === b2.end) {
          return a3.index - b2.index;
        }
        return a3.end - b2.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo$1(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count2, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo$1(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i2 = min2; i2 < count2; i2++) {
          const key = getItemKey(i2);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i2 - 1] : this.getFurthestMeasurement(measurements, i2);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size2 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i2);
          const end = start + size2;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i2 % this.options.lanes;
          measurements[i2] = {
            index: i2,
            start,
            size: size2,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo$1(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo$1(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count2, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index2 = this.indexFromElement(node);
      const item = this.measurementsCache[index2];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index2, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index2, size2) => {
      const item = this.measurementsCache[index2];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size2 - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size2));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo$1(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k2 = 0, len = indexes.length; k2 < len; k2++) {
          const i2 = indexes[k2];
          const measurement = measurements[i2];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset2) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index2) => notUndefined(measurements[index2]).start,
          offset2
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset >= scrollOffset + size2) {
          align = "end";
        }
      }
      if (align === "end") {
        toOffset -= size2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size2;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index2, align = "auto") => {
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      const item = this.measurementsCache[index2];
      if (!item) {
        return void 0;
      }
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size2 - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const centerOffset = item.start - this.options.scrollPaddingStart + (item.size - size2) / 2;
      switch (align) {
        case "center":
          return [this.getOffsetForAlignment(centerOffset, align), align];
        case "end":
          return [
            this.getOffsetForAlignment(
              item.end + this.options.scrollPaddingEnd,
              align
            ),
            align
          ];
        default:
          return [
            this.getOffsetForAlignment(
              item.start - this.options.scrollPaddingStart,
              align
            ),
            align
          ];
      }
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index2, { align: initialAlign = "auto", behavior } = {}) => {
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index2, initialAlign);
      if (!offsetAndAlign) return;
      const [offset2, align] = offsetAndAlign;
      this._scrollToOffset(offset2, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index2)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index2, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index2, { align, behavior });
            }
          } else {
            this.scrollToIndex(index2, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m2) => m2.end)
        );
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset2, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset2, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count2 = measurements.length - 1;
  const getOffset = (index2) => measurements[index2].start;
  const startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? _$3 : y$5;
function useVirtualizerBase(options) {
  const rerender = p$3(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        En(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = h$3(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}
function l$3(e2, r2) {
  return e2 !== null && r2 !== null && typeof e2 == "object" && typeof r2 == "object" && "id" in e2 && "id" in r2 ? e2.id === r2.id : e2 === r2;
}
function u$5(e2 = l$3) {
  return q$2((r2, t2) => {
    if (typeof e2 == "string") {
      let o3 = e2;
      return (r2 == null ? void 0 : r2[o3]) === (t2 == null ? void 0 : t2[o3]);
    }
    return e2(r2, t2);
  }, [e2]);
}
function f$7(e2) {
  if (e2 === null) return { width: 0, height: 0 };
  let { width: t2, height: r2 } = e2.getBoundingClientRect();
  return { width: t2, height: r2 };
}
function d$2(e2, t2 = false) {
  let [r2, u2] = p$3(() => ({}), {}), i2 = T$5(() => f$7(e2), [e2, r2]);
  return n$3(() => {
    if (!e2) return;
    let n2 = new ResizeObserver(u2);
    return n2.observe(e2), () => {
      n2.disconnect();
    };
  }, [e2]), t2 ? { width: `${i2.width}px`, height: `${i2.height}px` } : i2;
}
let a$7 = class a extends Map {
  constructor(t2) {
    super();
    this.factory = t2;
  }
  get(t2) {
    let e2 = super.get(t2);
    return e2 === void 0 && (e2 = this.factory(t2), this.set(t2, e2)), e2;
  }
};
function a$6(o3, r2) {
  let t2 = o3(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r2[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function o2(t2) {
  return C$5(t2.subscribe, t2.getSnapshot, t2.getSnapshot);
}
let p$1 = new a$7(() => a$6(() => [], { ADD(r2) {
  return this.includes(r2) ? this : [...this, r2];
}, REMOVE(r2) {
  let e2 = this.indexOf(r2);
  if (e2 === -1) return this;
  let t2 = this.slice();
  return t2.splice(e2, 1), t2;
} }));
function x$2(r2, e2) {
  let t2 = p$1.get(e2), i2 = g$2(), h2 = o2(t2);
  if (n$3(() => {
    if (r2) return t2.dispatch("ADD", i2), () => t2.dispatch("REMOVE", i2);
  }, [t2, r2]), !r2) return false;
  let s2 = h2.indexOf(i2), o$12 = h2.length;
  return s2 === -1 && (s2 = o$12, o$12 += 1), s2 === o$12 - 1;
}
let f$6 = /* @__PURE__ */ new Map(), u$4 = /* @__PURE__ */ new Map();
function h$1(t2) {
  var e2;
  let r2 = (e2 = u$4.get(t2)) != null ? e2 : 0;
  return u$4.set(t2, r2 + 1), r2 !== 0 ? () => m$3(t2) : (f$6.set(t2, { "aria-hidden": t2.getAttribute("aria-hidden"), inert: t2.inert }), t2.setAttribute("aria-hidden", "true"), t2.inert = true, () => m$3(t2));
}
function m$3(t2) {
  var i2;
  let r2 = (i2 = u$4.get(t2)) != null ? i2 : 1;
  if (r2 === 1 ? u$4.delete(t2) : u$4.set(t2, r2 - 1), r2 !== 1) return;
  let e2 = f$6.get(t2);
  e2 && (e2["aria-hidden"] === null ? t2.removeAttribute("aria-hidden") : t2.setAttribute("aria-hidden", e2["aria-hidden"]), t2.inert = e2.inert, f$6.delete(t2));
}
function y$3(t2, { allowed: r2, disallowed: e2 } = {}) {
  let i2 = x$2(t2, "inert-others");
  n$3(() => {
    var d2, c2;
    if (!i2) return;
    let a3 = o$4();
    for (let n2 of (d2 = e2 == null ? void 0 : e2()) != null ? d2 : []) n2 && a3.add(h$1(n2));
    let s2 = (c2 = r2 == null ? void 0 : r2()) != null ? c2 : [];
    for (let n2 of s2) {
      if (!n2) continue;
      let l2 = u$9(n2);
      if (!l2) continue;
      let o3 = n2.parentElement;
      for (; o3 && o3 !== l2.body; ) {
        for (let p2 of o3.children) s2.some((E2) => p2.contains(E2)) || a3.add(h$1(p2));
        o3 = o3.parentElement;
      }
    }
    return a3.dispose;
  }, [i2, r2, e2]);
}
function m$2(s2, n2, l2) {
  let i2 = s$4((t2) => {
    let e2 = t2.getBoundingClientRect();
    e2.x === 0 && e2.y === 0 && e2.width === 0 && e2.height === 0 && l2();
  });
  y$5(() => {
    if (!s2) return;
    let t2 = n2 === null ? null : n2 instanceof HTMLElement ? n2 : n2.current;
    if (!t2) return;
    let e2 = o$4();
    if (typeof ResizeObserver != "undefined") {
      let r2 = new ResizeObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r2 = new IntersectionObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    return () => e2.dispose();
  }, [n2, i2, s2]);
}
let f$5 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(","), p = ["[data-autofocus]"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var F$1 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2[n2.AutoFocus = 64] = "AutoFocus", n2))(F$1 || {}), T$1 = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(T$1 || {}), y$2 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(y$2 || {});
function b$2(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(f$5)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S$1(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(p)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function A(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = u$9(e2)) == null ? void 0 : t2.body) ? false : u$8(r2, { [0]() {
    return e2.matches(f$5);
  }, [1]() {
    let u2 = e2;
    for (; u2 !== null; ) {
      if (u2.matches(f$5)) return true;
      u2 = u2.parentElement;
    }
    return false;
  } });
}
var H$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(H$1 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I$2(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let w$2 = ["textarea", "input"].join(",");
function O$2(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, w$2)) != null ? t2 : false;
}
function _(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, u2) => {
    let o3 = r2(t2), c2 = r2(u2);
    if (o3 === null || c2 === null) return 0;
    let l2 = o3.compareDocumentPosition(c2);
    return l2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: u2 = null, skipElements: o3 = [] } = {}) {
  let c2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, l2 = Array.isArray(e2) ? t2 ? _(e2) : e2 : r2 & 64 ? S$1(e2) : b$2(e2);
  o3.length > 0 && l2.length > 1 && (l2 = l2.filter((s2) => !o3.some((a3) => a3 != null && "current" in a3 ? (a3 == null ? void 0 : a3.current) === s2 : a3 === s2))), u2 = u2 != null ? u2 : c2.activeElement;
  let n2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, l2.indexOf(u2)) - 1;
    if (r2 & 4) return Math.max(0, l2.indexOf(u2)) + 1;
    if (r2 & 8) return l2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M2 = r2 & 32 ? { preventScroll: true } : {}, m2 = 0, d2 = l2.length, i2;
  do {
    if (m2 >= d2 || m2 + d2 <= 0) return 0;
    let s2 = x2 + m2;
    if (r2 & 16) s2 = (s2 + d2) % d2;
    else {
      if (s2 < 0) return 3;
      if (s2 >= d2) return 1;
    }
    i2 = l2[s2], i2 == null || i2.focus(M2), m2 += n2;
  } while (i2 !== c2.activeElement);
  return r2 & 6 && O$2(i2) && i2.select(), 2;
}
function t$2() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i$3() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n$2() {
  return t$2() || i$3();
}
function i$2(t2, e2, o3, n2) {
  let u2 = s$4(o3);
  y$5(() => {
    if (!t2) return;
    function r2(m2) {
      u2.current(m2);
    }
    return document.addEventListener(e2, r2, n2), () => document.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
function s$2(t2, e2, o3, n2) {
  let i2 = s$4(o3);
  y$5(() => {
    if (!t2) return;
    function r2(d2) {
      i2.current(d2);
    }
    return window.addEventListener(e2, r2, n2), () => window.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
const E$1 = 30;
function R$2(p2, f2, C2) {
  let u2 = x$2(p2, "outside-click"), m2 = s$4(C2), s2 = q$2(function(e2, n2) {
    if (e2.defaultPrevented) return;
    let r2 = n2(e2);
    if (r2 === null || !r2.getRootNode().contains(r2) || !r2.isConnected) return;
    let h$12 = function l2(o3) {
      return typeof o3 == "function" ? l2(o3()) : Array.isArray(o3) || o3 instanceof Set ? o3 : [o3];
    }(f2);
    for (let l2 of h$12) if (l2 !== null && (l2.contains(r2) || e2.composed && e2.composedPath().includes(l2))) return;
    return !A(r2, h.Loose) && r2.tabIndex !== -1 && e2.preventDefault(), m2.current(e2, r2);
  }, [m2, f2]), i2 = A$3(null);
  i$2(u2, "pointerdown", (t2) => {
    var e2, n2;
    i2.current = ((n2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : n2[0]) || t2.target;
  }, true), i$2(u2, "mousedown", (t2) => {
    var e2, n2;
    i2.current = ((n2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : n2[0]) || t2.target;
  }, true), i$2(u2, "click", (t2) => {
    n$2() || i2.current && (s2(t2, () => i2.current), i2.current = null);
  }, true);
  let a3 = A$3({ x: 0, y: 0 });
  i$2(u2, "touchstart", (t2) => {
    a3.current.x = t2.touches[0].clientX, a3.current.y = t2.touches[0].clientY;
  }, true), i$2(u2, "touchend", (t2) => {
    let e2 = { x: t2.changedTouches[0].clientX, y: t2.changedTouches[0].clientY };
    if (!(Math.abs(e2.x - a3.current.x) >= E$1 || Math.abs(e2.y - a3.current.y) >= E$1)) return s2(t2, () => t2.target instanceof HTMLElement ? t2.target : null);
  }, true), s$2(u2, "blur", (t2) => s2(t2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
function n$1(...e2) {
  return T$5(() => u$9(...e2), [...e2]);
}
function E(n2, e2, a3, t2) {
  let i2 = s$4(a3);
  y$5(() => {
    n2 = n2 != null ? n2 : window;
    function r2(o3) {
      i2.current(o3);
    }
    return n2.addEventListener(e2, r2, t2), () => n2.removeEventListener(e2, r2, t2);
  }, [n2, e2, t2]);
}
function i$1(e2) {
  let n2 = A$3({ value: "", selectionStart: null, selectionEnd: null });
  return E(e2, "blur", (l2) => {
    let t2 = l2.target;
    t2 instanceof HTMLInputElement && (n2.current = { value: t2.value, selectionStart: t2.selectionStart, selectionEnd: t2.selectionEnd });
  }), o$3(() => {
    if (document.activeElement !== e2 && e2 instanceof HTMLInputElement && e2.isConnected) {
      if (e2.focus({ preventScroll: true }), e2.value !== n2.current.value) e2.setSelectionRange(e2.value.length, e2.value.length);
      else {
        let { selectionStart: l2, selectionEnd: t2 } = n2.current;
        l2 !== null && t2 !== null && e2.setSelectionRange(l2, t2);
      }
      n2.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function e$1(t2, u2) {
  return T$5(() => {
    var n2;
    if (t2.type) return t2.type;
    let r2 = (n2 = t2.as) != null ? n2 : "button";
    if (typeof r2 == "string" && r2.toLowerCase() === "button" || (u2 == null ? void 0 : u2.tagName) === "BUTTON" && !u2.hasAttribute("type")) return "button";
  }, [t2.type, t2.as, u2]);
}
function d$1() {
  let r2;
  return { before({ doc: e2 }) {
    var l2;
    let o3 = e2.documentElement, t2 = (l2 = e2.defaultView) != null ? l2 : window;
    r2 = Math.max(0, t2.innerWidth - o3.clientWidth);
  }, after({ doc: e2, d: o3 }) {
    let t2 = e2.documentElement, l2 = Math.max(0, t2.clientWidth - t2.offsetWidth), n2 = Math.max(0, r2 - l2);
    o3.style(t2, "paddingRight", `${n2}px`);
  } };
}
function d() {
  return t$2() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function o3(a3) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a3));
    }
    n2.microTask(() => {
      var s2;
      if (window.getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$4();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let a3 = (s2 = window.scrollY) != null ? s2 : window.pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !o3(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (o3(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && o3(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (o3(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
        a3 !== t2 && window.scrollTo(0, a3), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function r$1() {
  return { before({ doc: e2, d: o3 }) {
    o3.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a$5 = a$6(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o3;
  let t2 = (o3 = this.get(e2)) != null ? o3 : { doc: e2, count: 0, d: o$4(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o3 = { doc: e2, d: n2, meta: m$1(t2) }, c2 = [d(), d$1(), r$1()];
  c2.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o3)), c2.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o3));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a$5.subscribe(() => {
  let e2 = a$5.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o3 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o3 || !c2 && o3) && a$5.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$5.dispatch("TEARDOWN", t2);
  }
});
function a$4(r2, e2, n2 = () => ({ containers: [] })) {
  let f2 = o2(a$5), o$12 = e2 ? f2.get(e2) : void 0, i2 = o$12 ? o$12.count > 0 : false;
  return n$3(() => {
    if (!(!e2 || !r2)) return a$5.dispatch("PUSH", e2, n2), () => a$5.dispatch("POP", e2, n2);
  }, [r2, e2]), i2;
}
function f$4(e2, c2, n2 = () => [document.body]) {
  let r2 = x$2(e2, "scroll-lock");
  a$4(r2, c2, (t2) => {
    var o3;
    return { containers: [...(o3 = t2.containers) != null ? o3 : [], n2] };
  });
}
function t$1(e2) {
  return [e2.screenX, e2.screenY];
}
function u$3() {
  let e2 = A$3([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t$1(r2);
    return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
  }, update(r2) {
    e2.current = t$1(r2);
  } };
}
function c$3(u2 = 0) {
  let [t2, l2] = h$3(u2), g2 = q$2((e2) => l2(e2), [t2]), s2 = q$2((e2) => l2((a3) => a3 | e2), [t2]), m2 = q$2((e2) => (t2 & e2) === e2, [t2]), n2 = q$2((e2) => l2((a3) => a3 & ~e2), [l2]), F2 = q$2((e2) => l2((a3) => a3 ^ e2), [l2]);
  return { flags: t2, setFlag: g2, addFlag: s2, hasFlag: m2, removeFlag: n2, toggleFlag: F2 };
}
var define_process_env_default = {};
var T, b$1;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T = process == null ? void 0 : define_process_env_default) == null ? void 0 : T["NODE_ENV"]) === "test" && typeof ((b$1 = Element == null ? void 0 : Element.prototype) == null ? void 0 : b$1.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var L = ((r2) => (r2[r2.None = 0] = "None", r2[r2.Closed = 1] = "Closed", r2[r2.Enter = 2] = "Enter", r2[r2.Leave = 4] = "Leave", r2))(L || {});
function R$1(t2) {
  let n2 = {};
  for (let e2 in t2) t2[e2] === true && (n2[`data-${e2}`] = "");
  return n2;
}
function x$1(t2, n2, e2, i2) {
  let [r2, o3] = h$3(e2), { hasFlag: s2, addFlag: a3, removeFlag: l2 } = c$3(t2 && r2 ? 3 : 0), u2 = A$3(false), f2 = A$3(false), E2 = p$2();
  return n$3(() => {
    var d2;
    if (t2) {
      if (e2 && o3(true), !n2) {
        e2 && a3(3);
        return;
      }
      return (d2 = i2 == null ? void 0 : i2.start) == null || d2.call(i2, e2), C(n2, { inFlight: u2, prepare() {
        f2.current ? f2.current = false : f2.current = u2.current, u2.current = true, !f2.current && (e2 ? (a3(3), l2(4)) : (a3(4), l2(2)));
      }, run() {
        f2.current ? e2 ? (l2(3), a3(4)) : (l2(4), a3(3)) : e2 ? l2(1) : a3(1);
      }, done() {
        var p2;
        f2.current && typeof n2.getAnimations == "function" && n2.getAnimations().length > 0 || (u2.current = false, l2(7), e2 || o3(false), (p2 = i2 == null ? void 0 : i2.end) == null || p2.call(i2, e2));
      } });
    }
  }, [t2, e2, n2, E2]), t2 ? [r2, { closed: s2(1), enter: s2(2), leave: s2(4), transition: s2(2) || s2(4) }] : [e2, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C(t2, { prepare: n2, run: e2, done: i2, inFlight: r2 }) {
  let o3 = o$4();
  return j$1(t2, { prepare: n2, inFlight: r2 }), o3.nextFrame(() => {
    e2(), o3.requestAnimationFrame(() => {
      o3.add(M$2(t2, i2));
    });
  }), o3.dispose;
}
function M$2(t2, n2) {
  var o3, s2;
  let e2 = o$4();
  if (!t2) return e2.dispose;
  let i2 = false;
  e2.add(() => {
    i2 = true;
  });
  let r2 = (s2 = (o3 = t2.getAnimations) == null ? void 0 : o3.call(t2).filter((a3) => a3 instanceof CSSTransition)) != null ? s2 : [];
  return r2.length === 0 ? (n2(), e2.dispose) : (Promise.allSettled(r2.map((a3) => a3.finished)).then(() => {
    i2 || n2();
  }), e2.dispose);
}
function j$1(t2, { inFlight: n2, prepare: e2 }) {
  if (n2 != null && n2.current) {
    e2();
    return;
  }
  let i2 = t2.style.transition;
  t2.style.transition = "none", e2(), t2.offsetHeight, t2.style.transition = i2;
}
function F(c2, { container: e2, accept: t2, walk: r2 }) {
  let o3 = A$3(t2), l2 = A$3(r2);
  y$5(() => {
    o3.current = t2, l2.current = r2;
  }, [t2, r2]), n$3(() => {
    if (!e2 || !c2) return;
    let n2 = u$9(e2);
    if (!n2) return;
    let f2 = o3.current, p2 = l2.current, i2 = Object.assign((m2) => f2(m2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, i2, false);
    for (; u2.nextNode(); ) p2(u2.currentNode);
  }, [e2, c2, o3, l2]);
}
function m(u2, t2) {
  let e2 = A$3([]), r2 = o$3(u2);
  y$5(() => {
    let o3 = [...e2.current];
    for (let [a3, l2] of t2.entries()) if (e2.current[a3] !== l2) {
      let n2 = r2(t2, o3);
      return e2.current = t2, n2;
    }
  }, [r2, ...t2]);
}
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e2) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
const min$1 = Math.min;
const max$1 = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max$1(start, min$1(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x2,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x2,
    right: x2 + width,
    bottom: y2 + height,
    x: x2,
    y: y2
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow$1(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x2,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const flip$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a3, b2) => a3.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d2.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a3, b2) => a3[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$2 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x2,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const size$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min$1(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min$1(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max$1(overflow.left, 0);
        const xMax = max$1(overflow.right, 0);
        const yMin = max$1(overflow.top, 0);
        const yMax = max$1(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x2 = ($2 ? round(rect.width) : rect.width) / width;
  let y2 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x2 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y2 = htmlRect.top + scroll.scrollTop;
  return {
    x: x2,
    y: y2
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max$1(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max$1(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x2 += max$1(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max$1(rect.top, accRect.top);
    accRect.right = min$1(rect.right, accRect.right);
    accRect.bottom = min$1(rect.bottom, accRect.bottom);
    accRect.left = max$1(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x2,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a3, b2) {
  return a3.x === b2.x && a3.y === b2.y && a3.width === b2.width && a3.height === b2.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max$1(0, min$1(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e2) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const detectOverflow = detectOverflow$1;
const offset$1 = offset$2;
const shift$1 = shift$2;
const flip$1 = flip$2;
const size$1 = size$2;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
var index$1 = typeof document !== "undefined" ? _$3 : y$5;
function deepEqual(a3, b2) {
  if (a3 === b2) {
    return true;
  }
  if (typeof a3 !== typeof b2) {
    return false;
  }
  if (typeof a3 === "function" && a3.toString() === b2.toString()) {
    return true;
  }
  let length;
  let i2;
  let keys;
  if (a3 && b2 && typeof a3 === "object") {
    if (Array.isArray(a3)) {
      length = a3.length;
      if (length !== b2.length) return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a3[i2], b2[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a3);
    length = keys.length;
    if (length !== Object.keys(b2).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b2, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a3.$$typeof) {
        continue;
      }
      if (!deepEqual(a3[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a3 !== a3 && b2 !== b2;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = A$3(value);
  index$1(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating$1(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = h$3({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = h$3(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = h$3(null);
  const [_floating, _setFloating] = h$3(null);
  const setReference = q$2((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = q$2((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = A$3(null);
  const floatingRef = A$3(null);
  const dataRef = A$3(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = q$2(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        En(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index$1(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = A$3(false);
  index$1(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index$1(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = T$5(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = T$5(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = T$5(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x2 = roundByDPR(elements.floating, data.x);
    const y2 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x2 + "px, " + y2 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x2,
      top: y2
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return T$5(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
});
const shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
});
const flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
});
const size = (options, deps) => ({
  ...size$1(options),
  options: [options, deps]
});
const SafeReact = {
  ...t$5
};
const useInsertionEffect = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = useInsertionEffect || ((fn2) => fn2());
function useEffectEvent(callback) {
  const ref = A$3(() => {
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return q$2(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var index = typeof document !== "undefined" ? _$3 : y$5;
let serverHandoffComplete = false;
let count$1 = 0;
const genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count$1++
);
function useFloatingId() {
  const [id, setId] = h$3(() => serverHandoffComplete ? genId() : void 0);
  index(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  y$5(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
const useReactId = SafeReact.useId;
const useId = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l2) => l2 !== listener)) || []);
    }
  };
}
const FloatingNodeContext = /* @__PURE__ */ J$3(null);
const FloatingTreeContext = /* @__PURE__ */ J$3(null);
const useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = x$4(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
const useFloatingTree = () => x$4(FloatingTreeContext);
const FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = A$3({});
  const [events] = h$3(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  const [positionReference, setPositionReference] = h$3(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = T$5(() => ({
    setPositionReference
  }), []);
  const elements = T$5(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return T$5(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = h$3(null);
  const [positionReference, _setPositionReference] = h$3(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = A$3(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating$1({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = q$2((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = q$2((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = T$5(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = T$5(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = T$5(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return T$5(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
const ACTIVE_KEY = "active";
const SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _2,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn2) => fn2(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = q$2(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = q$2(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = q$2(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return T$5(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
const inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index2 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index2];
    const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const clientTop = floating.clientTop || scrollEl.clientTop;
    const floatingIsBordered = floating.clientTop !== 0;
    const scrollElIsBordered = scrollEl.clientTop !== 0;
    const floatingIsScrollEl = floating === scrollEl;
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = max$1(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
    const rounder = isScrollable ? (v2) => v2 : round;
    const maxHeight = rounder(max$1(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max$1(0, overflow.bottom)));
    scrollEl.style.maxHeight = maxHeight + "px";
    scrollEl.scrollTop = diffY;
    if (onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min$1(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      En(() => onFallbackChange(shouldFallback));
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = A$3(false);
  const prevScrollTopRef = A$3(null);
  const initialOverflowRef = A$3(null);
  y$5(() => {
    if (!enabled) return;
    function onWheel(e2) {
      if (e2.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e2.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e2.preventDefault();
        En(() => {
          onChange((d2) => d2 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = T$5(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          En(() => onChange((d2) => d2 + scrollDiff));
        }
      }
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return T$5(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}
let y$1 = J$3({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y$1.displayName = "FloatingContext";
let H = J$3(null);
H.displayName = "PlacementContext";
function xe(e2) {
  return T$5(() => e2 ? typeof e2 == "string" ? { to: e2 } : e2 : null, [e2]);
}
function ye$2() {
  return x$4(y$1).setReference;
}
function be() {
  let { getFloatingProps: e2, slot: t2 } = x$4(y$1);
  return q$2((...n2) => Object.assign({}, e2(...n2), { "data-anchor": t2.anchor }), [e2, t2]);
}
function Re(e2 = null) {
  e2 === false && (e2 = null), typeof e2 == "string" && (e2 = { to: e2 });
  let t2 = x$4(H), n2 = T$5(() => e2, [JSON.stringify(e2, (r2, o3) => {
    var u2;
    return (u2 = o3 == null ? void 0 : o3.outerHTML) != null ? u2 : o3;
  })]);
  n$3(() => {
    t2 == null || t2(n2 != null ? n2 : null);
  }, [t2, n2]);
  let l2 = x$4(y$1);
  return T$5(() => [l2.setFloating, e2 ? l2.styles : {}], [l2.setFloating, e2, l2.styles]);
}
let q = 4;
function Me$1({ children: e2, enabled: t2 = true }) {
  let [n2, l2] = h$3(null), [r2, o3] = h$3(0), u2 = A$3(null), [f2, s2] = h$3(null);
  pe(f2);
  let i2 = t2 && n2 !== null && f2 !== null, { to: F2 = "bottom", gap: E2 = 0, offset: v2 = 0, padding: c2 = 0, inner: P2 } = ce(n2, f2), [a3, p2 = "center"] = F2.split(" ");
  n$3(() => {
    i2 && o3(0);
  }, [i2]);
  let { refs: b2, floatingStyles: w2, context: g2 } = useFloating({ open: i2, placement: a3 === "selection" ? p2 === "center" ? "bottom" : `bottom-${p2}` : p2 === "center" ? `${a3}` : `${a3}-${p2}`, strategy: "absolute", transform: false, middleware: [offset({ mainAxis: a3 === "selection" ? 0 : E2, crossAxis: v2 }), shift({ padding: c2 }), a3 !== "selection" && flip({ padding: c2 }), a3 === "selection" && P2 ? inner({ ...P2, padding: c2, overflowRef: u2, offset: r2, minItemsVisible: q, referenceOverflowThreshold: c2, onFallbackChange(h2) {
    var O2, W2;
    if (!h2) return;
    let d2 = g2.elements.floating;
    if (!d2) return;
    let T2 = parseFloat(getComputedStyle(d2).scrollPaddingBottom) || 0, $2 = Math.min(q, d2.childElementCount), L2 = 0, N2 = 0;
    for (let m2 of (W2 = (O2 = g2.elements.floating) == null ? void 0 : O2.childNodes) != null ? W2 : []) if (m2 instanceof HTMLElement) {
      let x2 = m2.offsetTop, k2 = x2 + m2.clientHeight + T2, S2 = d2.scrollTop, U2 = S2 + d2.clientHeight;
      if (x2 >= S2 && k2 <= U2) $2--;
      else {
        N2 = Math.max(0, Math.min(k2, U2) - Math.max(x2, S2)), L2 = m2.clientHeight;
        break;
      }
    }
    $2 >= 1 && o3((m2) => {
      let x2 = L2 * $2 - N2 + T2;
      return m2 >= x2 ? m2 : x2;
    });
  } }) : null, size({ padding: c2, apply({ availableWidth: h2, availableHeight: d2, elements: T2 }) {
    Object.assign(T2.floating.style, { overflow: "auto", maxWidth: `${h2}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d2}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I2 = a3, B2 = p2] = g2.placement.split("-");
  a3 === "selection" && (I2 = "selection");
  let G2 = T$5(() => ({ anchor: [I2, B2].filter(Boolean).join(" ") }), [I2, B2]), K2 = useInnerOffset(g2, { overflowRef: u2, onChange: o3 }), { getReferenceProps: Q2, getFloatingProps: X2 } = useInteractions([K2]), Y2 = o$3((h2) => {
    s2(h2), b2.setFloating(h2);
  });
  return g$3(H.Provider, { value: l2 }, g$3(y$1.Provider, { value: { setFloating: Y2, setReference: b2.setReference, styles: w2, getReferenceProps: Q2, getFloatingProps: X2, slot: G2 } }, e2));
}
function pe(e2) {
  n$3(() => {
    if (!e2) return;
    let t2 = new MutationObserver(() => {
      let n2 = window.getComputedStyle(e2).maxHeight, l2 = parseFloat(n2);
      if (isNaN(l2)) return;
      let r2 = parseInt(n2);
      isNaN(r2) || l2 !== r2 && (e2.style.maxHeight = `${Math.ceil(l2)}px`);
    });
    return t2.observe(e2, { attributes: true, attributeFilter: ["style"] }), () => {
      t2.disconnect();
    };
  }, [e2]);
}
function ce(e2, t2) {
  var o3, u2, f2;
  let n2 = V$1((o3 = e2 == null ? void 0 : e2.gap) != null ? o3 : "var(--anchor-gap, 0)", t2), l2 = V$1((u2 = e2 == null ? void 0 : e2.offset) != null ? u2 : "var(--anchor-offset, 0)", t2), r2 = V$1((f2 = e2 == null ? void 0 : e2.padding) != null ? f2 : "var(--anchor-padding, 0)", t2);
  return { ...e2, gap: n2, offset: l2, padding: r2 };
}
function V$1(e2, t2, n2 = void 0) {
  let l2 = p$2(), r2 = o$3((s2, i2) => {
    if (s2 == null) return [n2, null];
    if (typeof s2 == "number") return [s2, null];
    if (typeof s2 == "string") {
      if (!i2) return [n2, null];
      let F2 = J$1(s2, i2);
      return [F2, (E2) => {
        let v2 = D$1(s2);
        {
          let c2 = v2.map((P2) => window.getComputedStyle(i2).getPropertyValue(P2));
          l2.requestAnimationFrame(function P2() {
            l2.nextFrame(P2);
            let a3 = false;
            for (let [b2, w2] of v2.entries()) {
              let g2 = window.getComputedStyle(i2).getPropertyValue(w2);
              if (c2[b2] !== g2) {
                c2[b2] = g2, a3 = true;
                break;
              }
            }
            if (!a3) return;
            let p2 = J$1(s2, i2);
            F2 !== p2 && (E2(p2), F2 = p2);
          });
        }
        return l2.dispose;
      }];
    }
    return [n2, null];
  }), o3 = T$5(() => r2(e2, t2)[0], [e2, t2]), [u2 = o3, f2] = h$3();
  return n$3(() => {
    let [s2, i2] = r2(e2, t2);
    if (f2(s2), !!i2) return i2(f2);
  }, [e2, t2]), u2;
}
function D$1(e2) {
  let t2 = /var\((.*)\)/.exec(e2);
  if (t2) {
    let n2 = t2[1].indexOf(",");
    if (n2 === -1) return [t2[1]];
    let l2 = t2[1].slice(0, n2).trim(), r2 = t2[1].slice(n2 + 1).trim();
    return r2 ? [l2, ...D$1(r2)] : [l2];
  }
  return [];
}
function J$1(e2, t2) {
  let n2 = document.createElement("div");
  t2.appendChild(n2), n2.style.setProperty("margin-top", "0px", "important"), n2.style.setProperty("margin-top", e2, "important");
  let l2 = parseFloat(window.getComputedStyle(n2).marginTop) || 0;
  return t2.removeChild(n2), l2;
}
function f$3({ children: o3, freeze: e2 }) {
  let n2 = l$2(e2, o3);
  return Rn.createElement(Rn.Fragment, null, n2);
}
function l$2(o3, e2) {
  let [n2, t2] = h$3(e2);
  return !o3 && n2 !== e2 && t2(e2), o3 ? n2 : e2;
}
let n = J$3(null);
n.displayName = "OpenClosedContext";
var i = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i || {});
function u$2() {
  return x$4(n);
}
function c$2({ value: o3, children: t2 }) {
  return Rn.createElement(n.Provider, { value: o3 }, t2);
}
function s$1({ children: o3 }) {
  return Rn.createElement(n.Provider, { value: null }, o3);
}
function t(n2) {
  function e2() {
    document.readyState !== "loading" && (n2(), document.removeEventListener("DOMContentLoaded", e2));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e2), e2());
}
let r = [];
t(() => {
  function e2(t2) {
    if (!(t2.target instanceof HTMLElement) || t2.target === document.body || r[0] === t2.target) return;
    let n2 = t2.target;
    n2 = n2.closest(f$5), r.unshift(n2 != null ? n2 : t2.target), r = r.filter((o3) => o3 != null && o3.isConnected), r.splice(10);
  }
  window.addEventListener("click", e2, { capture: true }), window.addEventListener("mousedown", e2, { capture: true }), window.addEventListener("focus", e2, { capture: true }), document.body.addEventListener("click", e2, { capture: true }), document.body.addEventListener("mousedown", e2, { capture: true }), document.body.addEventListener("focus", e2, { capture: true });
});
function u$1(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f$2(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0) return null;
  let r2 = n2.resolveActiveIndex(), s2 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 1: {
      s2 === -1 && (s2 = t2.length);
      for (let e2 = s2 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s2 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u$1(l2);
  }
}
var g = ((f2) => (f2[f2.Left = 0] = "Left", f2[f2.Right = 2] = "Right", f2))(g || {});
function c(t2) {
  let r2 = o$3(t2), e2 = A$3(false);
  y$5(() => (e2.current = false, () => {
    e2.current = true, t$4(() => {
      e2.current && r2();
    });
  }), [r2]);
}
function s() {
  let r2 = typeof document == "undefined";
  return "useSyncExternalStore" in t$5 ? ((o3) => o3.useSyncExternalStore)(t$5)(() => () => {
  }, () => false, () => !r2) : false;
}
function l$1() {
  let r2 = s(), [e2, n2] = h$3(s$5.isHandoffComplete);
  return e2 && s$5.isHandoffComplete === false && n2(false), y$5(() => {
    e2 !== true && n2(true);
  }, [e2]), y$5(() => s$5.handoff(), []), r2 ? false : e2;
}
let e = J$3(false);
function a$3() {
  return x$4(e);
}
function l(o3) {
  return Rn.createElement(e.Provider, { value: o3.force }, o3.children);
}
function N(u2) {
  let r2 = a$3(), n2 = x$4(v), e2 = n$1(u2), [o3, l2] = h$3(() => {
    var t2;
    if (!r2 && n2 !== null) return (t2 = n2.current) != null ? t2 : null;
    if (s$5.isServer) return null;
    let p2 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
    if (p2) return p2;
    if (e2 === null) return null;
    let a3 = e2.createElement("div");
    return a3.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(a3);
  });
  return y$5(() => {
    o3 !== null && (e2 != null && e2.body.contains(o3) || e2 == null || e2.body.appendChild(o3));
  }, [o3, e2]), y$5(() => {
    r2 || n2 !== null && l2(n2.current);
  }, [n2, l2, r2]), o3;
}
let M$1 = k$3, S = K$1(function(r2, n2) {
  let e2 = r2, o3 = A$3(null), l2 = y$4(T$2((i2) => {
    o3.current = i2;
  }), n2), p2 = n$1(o3), a3 = N(o3), [t2] = h$3(() => {
    var i2;
    return s$5.isServer ? null : (i2 = p2 == null ? void 0 : p2.createElement("div")) != null ? i2 : null;
  }), s2 = x$4(y), b2 = l$1();
  n$3(() => {
    !a3 || !t2 || a3.contains(t2) || (t2.setAttribute("data-headlessui-portal", ""), a3.appendChild(t2));
  }, [a3, t2]), n$3(() => {
    if (t2 && s2) return s2.register(t2);
  }, [s2, t2]), c(() => {
    var i2;
    !a3 || !t2 || (t2 instanceof Node && a3.contains(t2) && a3.removeChild(t2), a3.childNodes.length <= 0 && ((i2 = a3.parentElement) == null || i2.removeChild(a3)));
  });
  let H2 = L$1();
  return b2 ? !a3 || !t2 ? null : $$2(H2({ ourProps: { ref: l2 }, theirProps: e2, slot: {}, defaultTag: M$1, name: "Portal" }), t2) : null;
});
function j(u2, r2) {
  let n2 = y$4(r2), { enabled: e2 = true, ...o3 } = u2, l2 = L$1();
  return e2 ? Rn.createElement(S, { ...o3, ref: n2 }) : l2({ ourProps: { ref: n2 }, theirProps: o3, slot: {}, defaultTag: M$1, name: "Portal" });
}
let W = k$3, v = J$3(null);
function I$1(u2, r2) {
  let { target: n2, ...e2 } = u2, l2 = { ref: y$4(r2) }, p2 = L$1();
  return Rn.createElement(v.Provider, { value: n2 }, p2({ ourProps: l2, theirProps: e2, defaultTag: W, name: "Popover.Group" }));
}
let y = J$3(null);
function te$1() {
  let u2 = x$4(y), r2 = A$3([]), n2 = o$3((l2) => (r2.current.push(l2), u2 && u2.register(l2), () => e2(l2))), e2 = o$3((l2) => {
    let p2 = r2.current.indexOf(l2);
    p2 !== -1 && r2.current.splice(p2, 1), u2 && u2.unregister(l2);
  }), o3 = T$5(() => ({ register: n2, unregister: e2, portals: r2 }), [n2, e2, r2]);
  return [r2, T$5(() => function({ children: p2 }) {
    return Rn.createElement(y.Provider, { value: o3 }, p2);
  }, [o3])];
}
let J = K$1(j), X$1 = K$1(I$1), re$1 = Object.assign(J, { Group: X$1 });
var Ct = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(Ct || {}), Et = ((e2) => (e2[e2.Single = 0] = "Single", e2[e2.Multi = 1] = "Multi", e2))(Et || {}), St = ((o3) => (o3[o3.Pointer = 0] = "Pointer", o3[o3.Focus = 1] = "Focus", o3[o3.Other = 2] = "Other", o3))(St || {}), It = ((l2) => (l2[l2.OpenCombobox = 0] = "OpenCombobox", l2[l2.CloseCombobox = 1] = "CloseCombobox", l2[l2.GoToOption = 2] = "GoToOption", l2[l2.SetTyping = 3] = "SetTyping", l2[l2.RegisterOption = 4] = "RegisterOption", l2[l2.UnregisterOption = 5] = "UnregisterOption", l2[l2.SetActivationTrigger = 6] = "SetActivationTrigger", l2[l2.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", l2[l2.SetInputElement = 8] = "SetInputElement", l2[l2.SetButtonElement = 9] = "SetButtonElement", l2[l2.SetOptionsElement = 10] = "SetOptionsElement", l2))(It || {});
function ve(t2, n2 = (e2) => e2) {
  let e2 = t2.activeOptionIndex !== null ? t2.options[t2.activeOptionIndex] : null, o3 = n2(t2.options.slice()), f2 = o3.length > 0 && o3[0].dataRef.current.order !== null ? o3.sort((m2, d2) => m2.dataRef.current.order - d2.dataRef.current.order) : _(o3, (m2) => m2.dataRef.current.domRef.current), b2 = e2 ? f2.indexOf(e2) : null;
  return b2 === -1 && (b2 = null), { options: f2, activeOptionIndex: b2 };
}
let Pt = { [1](t2) {
  var n2;
  return (n2 = t2.dataRef.current) != null && n2.disabled || t2.comboboxState === 1 ? t2 : { ...t2, activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, __demoMode: false };
}, [0](t2) {
  var n2, e2;
  if ((n2 = t2.dataRef.current) != null && n2.disabled || t2.comboboxState === 0) return t2;
  if ((e2 = t2.dataRef.current) != null && e2.value) {
    let o3 = t2.dataRef.current.calculateIndex(t2.dataRef.current.value);
    if (o3 !== -1) return { ...t2, activeOptionIndex: o3, comboboxState: 0, __demoMode: false };
  }
  return { ...t2, comboboxState: 0, __demoMode: false };
}, [3](t2, n2) {
  return t2.isTyping === n2.isTyping ? t2 : { ...t2, isTyping: n2.isTyping };
}, [2](t2, n2) {
  var b2, m2, d2, x2;
  if ((b2 = t2.dataRef.current) != null && b2.disabled || t2.optionsElement && !((m2 = t2.dataRef.current) != null && m2.optionsPropsRef.current.static) && t2.comboboxState === 1) return t2;
  if (t2.virtual) {
    let { options: i2, disabled: r2 } = t2.virtual, l2 = n2.focus === c$1.Specific ? n2.idx : f$2(n2, { resolveItems: () => i2, resolveActiveIndex: () => {
      var R2, s2;
      return (s2 = (R2 = t2.activeOptionIndex) != null ? R2 : i2.findIndex((D2) => !r2(D2))) != null ? s2 : null;
    }, resolveDisabled: r2, resolveId() {
      throw new Error("Function not implemented.");
    } }), S2 = (d2 = n2.trigger) != null ? d2 : 2;
    return t2.activeOptionIndex === l2 && t2.activationTrigger === S2 ? t2 : { ...t2, activeOptionIndex: l2, activationTrigger: S2, isTyping: false, __demoMode: false };
  }
  let e2 = ve(t2);
  if (e2.activeOptionIndex === null) {
    let i2 = e2.options.findIndex((r2) => !r2.dataRef.current.disabled);
    i2 !== -1 && (e2.activeOptionIndex = i2);
  }
  let o3 = n2.focus === c$1.Specific ? n2.idx : f$2(n2, { resolveItems: () => e2.options, resolveActiveIndex: () => e2.activeOptionIndex, resolveId: (i2) => i2.id, resolveDisabled: (i2) => i2.dataRef.current.disabled }), f2 = (x2 = n2.trigger) != null ? x2 : 2;
  return t2.activeOptionIndex === o3 && t2.activationTrigger === f2 ? t2 : { ...t2, ...e2, isTyping: false, activeOptionIndex: o3, activationTrigger: f2, __demoMode: false };
}, [4]: (t2, n2) => {
  var b2, m2, d2;
  if ((b2 = t2.dataRef.current) != null && b2.virtual) return { ...t2, options: [...t2.options, n2.payload] };
  let e2 = n2.payload, o3 = ve(t2, (x2) => (x2.push(e2), x2));
  t2.activeOptionIndex === null && (m2 = t2.dataRef.current) != null && m2.isSelected(n2.payload.dataRef.current.value) && (o3.activeOptionIndex = o3.options.indexOf(e2));
  let f2 = { ...t2, ...o3, activationTrigger: 2 };
  return (d2 = t2.dataRef.current) != null && d2.__demoMode && t2.dataRef.current.value === void 0 && (f2.activeOptionIndex = 0), f2;
}, [5]: (t2, n2) => {
  var o3;
  if ((o3 = t2.dataRef.current) != null && o3.virtual) return { ...t2, options: t2.options.filter((f2) => f2.id !== n2.id) };
  let e2 = ve(t2, (f2) => {
    let b2 = f2.findIndex((m2) => m2.id === n2.id);
    return b2 !== -1 && f2.splice(b2, 1), f2;
  });
  return { ...t2, ...e2, activationTrigger: 2 };
}, [6]: (t2, n2) => t2.activationTrigger === n2.trigger ? t2 : { ...t2, activationTrigger: n2.trigger }, [7]: (t2, n2) => {
  var o3, f2;
  if (t2.virtual === null) return { ...t2, virtual: { options: n2.options, disabled: (o3 = n2.disabled) != null ? o3 : () => false } };
  if (t2.virtual.options === n2.options && t2.virtual.disabled === n2.disabled) return t2;
  let e2 = t2.activeOptionIndex;
  if (t2.activeOptionIndex !== null) {
    let b2 = n2.options.indexOf(t2.virtual.options[t2.activeOptionIndex]);
    b2 !== -1 ? e2 = b2 : e2 = null;
  }
  return { ...t2, activeOptionIndex: e2, virtual: { options: n2.options, disabled: (f2 = n2.disabled) != null ? f2 : () => false } };
}, [8]: (t2, n2) => t2.inputElement === n2.element ? t2 : { ...t2, inputElement: n2.element }, [9]: (t2, n2) => t2.buttonElement === n2.element ? t2 : { ...t2, buttonElement: n2.element }, [10]: (t2, n2) => t2.optionsElement === n2.element ? t2 : { ...t2, optionsElement: n2.element } }, ye$1 = J$3(null);
ye$1.displayName = "ComboboxActionsContext";
function le(t2) {
  let n2 = x$4(ye$1);
  if (n2 === null) {
    let e2 = new Error(`<${t2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e2, le), e2;
  }
  return n2;
}
let Ne$1 = J$3(null);
function At(t2) {
  let n2 = ne("VirtualProvider"), { options: e2 } = n2.virtual, [o3, f2] = T$5(() => {
    let i2 = n2.optionsElement;
    if (!i2) return [0, 0];
    let r2 = window.getComputedStyle(i2);
    return [parseFloat(r2.paddingBlockStart || r2.paddingTop), parseFloat(r2.paddingBlockEnd || r2.paddingBottom)];
  }, [n2.optionsElement]), b2 = useVirtualizer({ enabled: e2.length !== 0, scrollPaddingStart: o3, scrollPaddingEnd: f2, count: e2.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return n2.optionsElement;
  }, overscan: 12 }), [m2, d2] = h$3(0);
  n$3(() => {
    d2((i2) => i2 + 1);
  }, [e2]);
  let x2 = b2.getVirtualItems();
  return x2.length === 0 ? null : Rn.createElement(Ne$1.Provider, { value: b2 }, Rn.createElement("div", { style: { position: "relative", width: "100%", height: `${b2.getTotalSize()}px` }, ref: (i2) => {
    i2 && n2.activationTrigger !== 0 && n2.activeOptionIndex !== null && e2.length > n2.activeOptionIndex && b2.scrollToIndex(n2.activeOptionIndex);
  } }, x2.map((i2) => {
    var r2;
    return Rn.createElement(k$3, { key: i2.key }, Rn.cloneElement((r2 = t2.children) == null ? void 0 : r2.call(t2, { ...t2.slot, option: e2[i2.index] }), { key: `${m2}-${i2.key}`, "data-index": i2.index, "aria-setsize": e2.length, "aria-posinset": i2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${i2.start}px)`, overflowAnchor: "none" } }));
  })));
}
let ae = J$3(null);
ae.displayName = "ComboboxDataContext";
function ne(t2) {
  let n2 = x$4(ae);
  if (n2 === null) {
    let e2 = new Error(`<${t2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e2, ne), e2;
  }
  return n2;
}
function Rt(t2, n2) {
  return u$8(n2.type, Pt, t2, n2);
}
let _t = k$3;
function ht(t2, n2) {
  var Oe2, Ce;
  let e2 = a$a(), { value: o3, defaultValue: f2, onChange: b2, form: m2, name: d2, by: x2, disabled: i$12 = e2 || false, onClose: r2, __demoMode: l2 = false, multiple: S2 = false, immediate: R2 = false, virtual: s2 = null, nullable: D2, ...B2 } = t2, _2 = l$5(f2), [I2 = S2 ? [] : void 0, O2] = T$3(o3, b2, _2), [P2, g2] = p$3(Rt, { dataRef: b$4(), comboboxState: l2 ? 0 : 1, isTyping: false, options: [], virtual: s2 ? { options: s2.options, disabled: (Oe2 = s2.disabled) != null ? Oe2 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: l2 }), V2 = A$3(false), w2 = A$3({ static: false, hold: false }), T2 = u$5(x2), $2 = o$3((p2) => s2 ? x2 === null ? s2.options.indexOf(p2) : s2.options.findIndex((v2) => T2(v2, p2)) : P2.options.findIndex((v2) => T2(v2.dataRef.current.value, p2))), K$12 = q$2((p2) => u$8(u2.mode, { [1]: () => I2.some((v2) => T2(v2, p2)), [0]: () => T2(I2, p2) }), [I2]), Z2 = o$3((p2) => P2.activeOptionIndex === $2(p2)), u2 = T$5(() => ({ ...P2, immediate: R2, optionsPropsRef: w2, value: I2, defaultValue: _2, disabled: i$12, mode: S2 ? 1 : 0, virtual: s2 ? P2.virtual : null, get activeOptionIndex() {
    if (V2.current && P2.activeOptionIndex === null && (s2 ? s2.options.length > 0 : P2.options.length > 0)) {
      if (s2) {
        let v2 = s2.options.findIndex((z2) => {
          var se, Ee;
          return !((Ee = (se = s2.disabled) == null ? void 0 : se.call(s2, z2)) != null && Ee);
        });
        if (v2 !== -1) return v2;
      }
      let p2 = P2.options.findIndex((v2) => !v2.dataRef.current.disabled);
      if (p2 !== -1) return p2;
    }
    return P2.activeOptionIndex;
  }, calculateIndex: $2, compare: T2, isSelected: K$12, isActive: Z2 }), [I2, _2, i$12, S2, l2, P2, s2]);
  n$3(() => {
    var p2;
    s2 && g2({ type: 7, options: s2.options, disabled: (p2 = s2.disabled) != null ? p2 : null });
  }, [s2, s2 == null ? void 0 : s2.options, s2 == null ? void 0 : s2.disabled]), n$3(() => {
    P2.dataRef.current = u2;
  }, [u2]);
  let X2 = u2.comboboxState === 0;
  R$2(X2, [u2.buttonElement, u2.inputElement, u2.optionsElement], () => C2.closeCombobox());
  let N2 = T$5(() => {
    var p2, v2, z2;
    return { open: u2.comboboxState === 0, disabled: i$12, activeIndex: u2.activeOptionIndex, activeOption: u2.activeOptionIndex === null ? null : u2.virtual ? u2.virtual.options[(p2 = u2.activeOptionIndex) != null ? p2 : 0] : (z2 = (v2 = u2.options[u2.activeOptionIndex]) == null ? void 0 : v2.dataRef.current.value) != null ? z2 : null, value: I2 };
  }, [u2, i$12, I2]), U2 = o$3(() => {
    if (u2.activeOptionIndex !== null) {
      if (C2.setIsTyping(false), u2.virtual) j2(u2.virtual.options[u2.activeOptionIndex]);
      else {
        let { dataRef: p2 } = u2.options[u2.activeOptionIndex];
        j2(p2.current.value);
      }
      C2.goToOption(c$1.Specific, u2.activeOptionIndex);
    }
  }), y2 = o$3(() => {
    g2({ type: 0 }), V2.current = true;
  }), G2 = o$3(() => {
    g2({ type: 1 }), V2.current = false, r2 == null || r2();
  }), ue2 = o$3((p2) => {
    g2({ type: 3, isTyping: p2 });
  }), Y2 = o$3((p2, v2, z2) => (V2.current = false, p2 === c$1.Specific ? g2({ type: 2, focus: c$1.Specific, idx: v2, trigger: z2 }) : g2({ type: 2, focus: p2, trigger: z2 }))), Q2 = o$3((p2, v2) => (g2({ type: 4, payload: { id: p2, dataRef: v2 } }), () => {
    u2.isActive(v2.current.value) && (V2.current = true), g2({ type: 5, id: p2 });
  })), j2 = o$3((p2) => u$8(u2.mode, { [0]() {
    return O2 == null ? void 0 : O2(p2);
  }, [1]() {
    let v2 = u2.value.slice(), z2 = v2.findIndex((se) => T2(se, p2));
    return z2 === -1 ? v2.push(p2) : v2.splice(z2, 1), O2 == null ? void 0 : O2(v2);
  } })), h2 = o$3((p2) => {
    g2({ type: 6, trigger: p2 });
  }), pe2 = o$3((p2) => {
    g2({ type: 8, element: p2 });
  }), a3 = o$3((p2) => {
    g2({ type: 9, element: p2 });
  }), k2 = o$3((p2) => {
    g2({ type: 10, element: p2 });
  }), C2 = T$5(() => ({ onChange: j2, registerOption: Q2, goToOption: Y2, setIsTyping: ue2, closeCombobox: G2, openCombobox: y2, setActivationTrigger: h2, selectActiveOption: U2, setInputElement: pe2, setButtonElement: a3, setOptionsElement: k2 }), []), [H2, E2] = K(), L2 = n2 === null ? {} : { ref: n2 }, J2 = q$2(() => {
    if (_2 !== void 0) return O2 == null ? void 0 : O2(_2);
  }, [O2, _2]), ke2 = L$1();
  return Rn.createElement(E2, { value: H2, props: { htmlFor: (Ce = u2.inputElement) == null ? void 0 : Ce.id }, slot: { open: u2.comboboxState === 0, disabled: i$12 } }, Rn.createElement(Me$1, null, Rn.createElement(ye$1.Provider, { value: C2 }, Rn.createElement(ae.Provider, { value: u2 }, Rn.createElement(c$2, { value: u$8(u2.comboboxState, { [0]: i.Open, [1]: i.Closed }) }, d2 != null && Rn.createElement(j$2, { disabled: i$12, data: I2 != null ? { [d2]: I2 } : {}, form: m2, onReset: J2 }), ke2({ ourProps: L2, theirProps: B2, slot: N2, defaultTag: _t, name: "Combobox" }))))));
}
let Mt = "input";
function Dt$1(t2, n2) {
  var Y2, Q2, j2, h2, pe2;
  let e2 = ne("Combobox.Input"), o3 = le("Combobox.Input"), f2 = g$2(), b2 = u$7(), { id: m$12 = b2 || `headlessui-combobox-input-${f2}`, onChange: d2, displayValue: x2, disabled: i2 = e2.disabled || false, autoFocus: r$12 = false, type: l2 = "text", ...S2 } = t2, R2 = A$3(null), s2 = y$4(R2, n2, ye$2(), o3.setInputElement), D2 = n$1(e2.inputElement), B2 = p$2(), _2 = o$3(() => {
    o3.onChange(null), e2.optionsElement && (e2.optionsElement.scrollTop = 0), o3.goToOption(c$1.Nothing);
  }), I2 = T$5(() => {
    var a3;
    return typeof x2 == "function" && e2.value !== void 0 ? (a3 = x2(e2.value)) != null ? a3 : "" : typeof e2.value == "string" ? e2.value : "";
  }, [e2.value, x2]);
  m(([a3, k2], [C2, H2]) => {
    if (e2.isTyping) return;
    let E2 = R2.current;
    E2 && ((H2 === 0 && k2 === 1 || a3 !== C2) && (E2.value = a3), requestAnimationFrame(() => {
      if (e2.isTyping || !E2 || (D2 == null ? void 0 : D2.activeElement) !== E2) return;
      let { selectionStart: L2, selectionEnd: J2 } = E2;
      Math.abs((J2 != null ? J2 : 0) - (L2 != null ? L2 : 0)) === 0 && L2 === 0 && E2.setSelectionRange(E2.value.length, E2.value.length);
    }));
  }, [I2, e2.comboboxState, D2, e2.isTyping]), m(([a3], [k2]) => {
    if (a3 === 0 && k2 === 1) {
      if (e2.isTyping) return;
      let C2 = R2.current;
      if (!C2) return;
      let H2 = C2.value, { selectionStart: E2, selectionEnd: L2, selectionDirection: J2 } = C2;
      C2.value = "", C2.value = H2, J2 !== null ? C2.setSelectionRange(E2, L2, J2) : C2.setSelectionRange(E2, L2);
    }
  }, [e2.comboboxState]);
  let O2 = A$3(false), P2 = o$3(() => {
    O2.current = true;
  }), g2 = o$3(() => {
    B2.nextFrame(() => {
      O2.current = false;
    });
  }), V2 = o$3((a3) => {
    switch (o3.setIsTyping(true), a3.key) {
      case o$1.Enter:
        if (e2.comboboxState !== 0 || O2.current) return;
        if (a3.preventDefault(), a3.stopPropagation(), e2.activeOptionIndex === null) {
          o3.closeCombobox();
          return;
        }
        o3.selectActiveOption(), e2.mode === 0 && o3.closeCombobox();
        break;
      case o$1.ArrowDown:
        return a3.preventDefault(), a3.stopPropagation(), u$8(e2.comboboxState, { [0]: () => o3.goToOption(c$1.Next), [1]: () => o3.openCombobox() });
      case o$1.ArrowUp:
        return a3.preventDefault(), a3.stopPropagation(), u$8(e2.comboboxState, { [0]: () => o3.goToOption(c$1.Previous), [1]: () => {
          En(() => o3.openCombobox()), e2.value || o3.goToOption(c$1.Last);
        } });
      case o$1.Home:
        if (a3.shiftKey) break;
        return a3.preventDefault(), a3.stopPropagation(), o3.goToOption(c$1.First);
      case o$1.PageUp:
        return a3.preventDefault(), a3.stopPropagation(), o3.goToOption(c$1.First);
      case o$1.End:
        if (a3.shiftKey) break;
        return a3.preventDefault(), a3.stopPropagation(), o3.goToOption(c$1.Last);
      case o$1.PageDown:
        return a3.preventDefault(), a3.stopPropagation(), o3.goToOption(c$1.Last);
      case o$1.Escape:
        return e2.comboboxState !== 0 ? void 0 : (a3.preventDefault(), e2.optionsElement && !e2.optionsPropsRef.current.static && a3.stopPropagation(), e2.mode === 0 && e2.value === null && _2(), o3.closeCombobox());
      case o$1.Tab:
        if (e2.comboboxState !== 0) return;
        e2.mode === 0 && e2.activationTrigger !== 1 && o3.selectActiveOption(), o3.closeCombobox();
        break;
    }
  }), w2 = o$3((a3) => {
    d2 == null || d2(a3), e2.mode === 0 && a3.target.value === "" && _2(), o3.openCombobox();
  }), T2 = o$3((a3) => {
    var C2, H2, E2;
    let k2 = (C2 = a3.relatedTarget) != null ? C2 : r.find((L2) => L2 !== a3.currentTarget);
    if (!((H2 = e2.optionsElement) != null && H2.contains(k2)) && !((E2 = e2.buttonElement) != null && E2.contains(k2)) && e2.comboboxState === 0) return a3.preventDefault(), e2.mode === 0 && e2.value === null && _2(), o3.closeCombobox();
  }), $2 = o$3((a3) => {
    var C2, H2, E2;
    let k2 = (C2 = a3.relatedTarget) != null ? C2 : r.find((L2) => L2 !== a3.currentTarget);
    (H2 = e2.buttonElement) != null && H2.contains(k2) || (E2 = e2.optionsElement) != null && E2.contains(k2) || e2.disabled || e2.immediate && e2.comboboxState !== 0 && B2.microTask(() => {
      En(() => o3.openCombobox()), o3.setActivationTrigger(1);
    });
  }), K2 = I$3(), Z2 = U$3(), { isFocused: u2, focusProps: X2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r$12 }), { isHovered: N2, hoverProps: U2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i2 }), y2 = T$5(() => ({ open: e2.comboboxState === 0, disabled: i2, hover: N2, focus: u2, autofocus: r$12 }), [e2, N2, u2, r$12, i2]), G2 = _$2({ ref: s2, id: m$12, role: "combobox", type: l2, "aria-controls": (Y2 = e2.optionsElement) == null ? void 0 : Y2.id, "aria-expanded": e2.comboboxState === 0, "aria-activedescendant": e2.activeOptionIndex === null ? void 0 : e2.virtual ? (Q2 = e2.options.find((a3) => !a3.dataRef.current.disabled && e2.compare(a3.dataRef.current.value, e2.virtual.options[e2.activeOptionIndex]))) == null ? void 0 : Q2.id : (j2 = e2.options[e2.activeOptionIndex]) == null ? void 0 : j2.id, "aria-labelledby": K2, "aria-describedby": Z2, "aria-autocomplete": "list", defaultValue: (pe2 = (h2 = t2.defaultValue) != null ? h2 : e2.defaultValue !== void 0 ? x2 == null ? void 0 : x2(e2.defaultValue) : null) != null ? pe2 : e2.defaultValue, disabled: i2 || void 0, autoFocus: r$12, onCompositionStart: P2, onCompositionEnd: g2, onKeyDown: V2, onChange: w2, onFocus: $2, onBlur: T2 }, X2, U2);
  return L$1()({ ourProps: G2, theirProps: S2, slot: y2, defaultTag: Mt, name: "Combobox.Input" });
}
let Ft = "button";
function Vt(t2, n2) {
  var w2;
  let e2 = ne("Combobox.Button"), o3 = le("Combobox.Button"), f2 = y$4(n2, o3.setButtonElement), b2 = g$2(), { id: m2 = `headlessui-combobox-button-${b2}`, disabled: d2 = e2.disabled || false, autoFocus: x2 = false, ...i2 } = t2, r2 = i$1(e2.inputElement), l2 = o$3((T2) => {
    switch (T2.key) {
      case o$1.Space:
      case o$1.Enter:
        T2.preventDefault(), T2.stopPropagation(), e2.comboboxState === 1 && En(() => o3.openCombobox()), r2();
        return;
      case o$1.ArrowDown:
        T2.preventDefault(), T2.stopPropagation(), e2.comboboxState === 1 && (En(() => o3.openCombobox()), e2.value || o3.goToOption(c$1.First)), r2();
        return;
      case o$1.ArrowUp:
        T2.preventDefault(), T2.stopPropagation(), e2.comboboxState === 1 && (En(() => o3.openCombobox()), e2.value || o3.goToOption(c$1.Last)), r2();
        return;
      case o$1.Escape:
        if (e2.comboboxState !== 0) return;
        T2.preventDefault(), e2.optionsElement && !e2.optionsPropsRef.current.static && T2.stopPropagation(), En(() => o3.closeCombobox()), r2();
        return;
      default:
        return;
    }
  }), S2 = o$3((T2) => {
    T2.preventDefault(), !r$2(T2.currentTarget) && (T2.button === g.Left && (e2.comboboxState === 0 ? o3.closeCombobox() : o3.openCombobox()), r2());
  }), R2 = I$3([m2]), { isFocusVisible: s2, focusProps: D2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: x2 }), { isHovered: B2, hoverProps: _2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: d2 }), { pressed: I2, pressProps: O2 } = w$4({ disabled: d2 }), P2 = T$5(() => ({ open: e2.comboboxState === 0, active: I2 || e2.comboboxState === 0, disabled: d2, value: e2.value, hover: B2, focus: s2 }), [e2, B2, s2, I2, d2]), g$12 = _$2({ ref: f2, id: m2, type: e$1(t2, e2.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (w2 = e2.optionsElement) == null ? void 0 : w2.id, "aria-expanded": e2.comboboxState === 0, "aria-labelledby": R2, disabled: d2 || void 0, autoFocus: x2, onMouseDown: S2, onKeyDown: l2 }, D2, _2, O2);
  return L$1()({ ourProps: g$12, theirProps: i2, slot: P2, defaultTag: Ft, name: "Combobox.Button" });
}
let Lt = "div", Bt = O$3.RenderStrategy | O$3.Static;
function wt(t2, n2) {
  var Y2, Q2, j2;
  let e2 = g$2(), { id: o3 = `headlessui-combobox-options-${e2}`, hold: f2 = false, anchor: b2, portal: m2 = false, modal: d2 = true, transition: x2 = false, ...i$12 } = t2, r2 = ne("Combobox.Options"), l2 = le("Combobox.Options"), S2 = xe(b2);
  S2 && (m2 = true);
  let [R2, s2] = Re(S2), [D2, B2] = h$3(null), _2 = be(), I2 = y$4(n2, S2 ? R2 : null, l2.setOptionsElement, B2), O2 = n$1(r2.optionsElement), P2 = u$2(), [g2, V2] = x$1(x2, D2, P2 !== null ? (P2 & i.Open) === i.Open : r2.comboboxState === 0);
  m$2(g2, r2.inputElement, l2.closeCombobox);
  let w2 = r2.__demoMode ? false : d2 && r2.comboboxState === 0;
  f$4(w2, O2);
  let T2 = r2.__demoMode ? false : d2 && r2.comboboxState === 0;
  y$3(T2, { allowed: q$2(() => [r2.inputElement, r2.buttonElement, r2.optionsElement], [r2.inputElement, r2.buttonElement, r2.optionsElement]) }), n$3(() => {
    var h2;
    r2.optionsPropsRef.current.static = (h2 = t2.static) != null ? h2 : false;
  }, [r2.optionsPropsRef, t2.static]), n$3(() => {
    r2.optionsPropsRef.current.hold = f2;
  }, [r2.optionsPropsRef, f2]), F(r2.comboboxState === 0, { container: r2.optionsElement, accept(h2) {
    return h2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : h2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(h2) {
    h2.setAttribute("role", "none");
  } });
  let $2 = I$3([(Y2 = r2.buttonElement) == null ? void 0 : Y2.id]), K2 = T$5(() => ({ open: r2.comboboxState === 0, option: void 0 }), [r2.comboboxState]), Z2 = o$3(() => {
    l2.setActivationTrigger(0);
  }), u2 = o$3((h2) => {
    h2.preventDefault(), l2.setActivationTrigger(0);
  }), X2 = _$2(S2 ? _2() : {}, { "aria-labelledby": $2, role: "listbox", "aria-multiselectable": r2.mode === 1 ? true : void 0, id: o3, ref: I2, style: { ...i$12.style, ...s2, "--input-width": d$2(r2.inputElement, true).width, "--button-width": d$2(r2.buttonElement, true).width }, onWheel: r2.activationTrigger === 0 ? void 0 : Z2, onMouseDown: u2, ...R$1(V2) }), N2 = g2 && r2.comboboxState === 1, U2 = l$2(N2, (Q2 = r2.virtual) == null ? void 0 : Q2.options), y2 = l$2(N2, r2.value), G2 = o$3((h2) => r2.compare(y2, h2));
  if (r2.virtual) {
    if (U2 === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(i$12, { children: Rn.createElement(ae.Provider, { value: U2 !== r2.virtual.options ? { ...r2, virtual: { ...r2.virtual, options: U2 } } : r2 }, Rn.createElement(At, { slot: K2 }, i$12.children)) });
  }
  let ue2 = L$1();
  return Rn.createElement(re$1, { enabled: m2 ? t2.static || g2 : false }, Rn.createElement(ae.Provider, { value: r2.mode === 1 ? r2 : { ...r2, isSelected: G2 } }, ue2({ ourProps: X2, theirProps: { ...i$12, children: Rn.createElement(f$3, { freeze: N2 }, typeof i$12.children == "function" ? (j2 = i$12.children) == null ? void 0 : j2.call(i$12, K2) : i$12.children) }, slot: K2, defaultTag: Lt, features: Bt, visible: g2, name: "Combobox.Options" })));
}
let Nt = "div";
function kt(t2, n2) {
  var u2, X2, N2, U2;
  let e2 = ne("Combobox.Option"), o3 = le("Combobox.Option"), f2 = g$2(), { id: b2 = `headlessui-combobox-option-${f2}`, value: m2, disabled: d2 = (N2 = (X2 = (u2 = e2.virtual) == null ? void 0 : u2.disabled) == null ? void 0 : X2.call(u2, m2)) != null ? N2 : false, order: x2 = null, ...i2 } = t2, r2 = i$1(e2.inputElement), l2 = e2.virtual ? e2.activeOptionIndex === e2.calculateIndex(m2) : e2.activeOptionIndex === null ? false : ((U2 = e2.options[e2.activeOptionIndex]) == null ? void 0 : U2.id) === b2, S2 = e2.isSelected(m2), R2 = A$3(null), s2 = s$4({ disabled: d2, value: m2, domRef: R2, order: x2 }), D2 = x$4(Ne$1), B2 = y$4(n2, R2, D2 ? D2.measureElement : null), _2 = o$3(() => {
    o3.setIsTyping(false), o3.onChange(m2);
  });
  n$3(() => o3.registerOption(b2, s2), [s2, b2]);
  let I2 = A$3(!(e2.virtual || e2.__demoMode));
  n$3(() => {
    if (!e2.virtual && !e2.__demoMode) return o$4().requestAnimationFrame(() => {
      I2.current = true;
    });
  }, [e2.virtual, e2.__demoMode]), n$3(() => {
    if (I2.current && e2.comboboxState === 0 && l2 && e2.activationTrigger !== 0) return o$4().requestAnimationFrame(() => {
      var y2, G2;
      (G2 = (y2 = R2.current) == null ? void 0 : y2.scrollIntoView) == null || G2.call(y2, { block: "nearest" });
    });
  }, [R2, l2, e2.comboboxState, e2.activationTrigger, e2.activeOptionIndex]);
  let O2 = o$3((y2) => {
    y2.preventDefault(), y2.button === g.Left && (d2 || (_2(), n$2() || requestAnimationFrame(() => r2()), e2.mode === 0 && o3.closeCombobox()));
  }), P2 = o$3(() => {
    if (d2) return o3.goToOption(c$1.Nothing);
    let y2 = e2.calculateIndex(m2);
    o3.goToOption(c$1.Specific, y2);
  }), g$12 = u$3(), V2 = o$3((y2) => g$12.update(y2)), w2 = o$3((y2) => {
    if (!g$12.wasMoved(y2) || d2 || l2) return;
    let G2 = e2.calculateIndex(m2);
    o3.goToOption(c$1.Specific, G2, 0);
  }), T2 = o$3((y2) => {
    g$12.wasMoved(y2) && (d2 || l2 && (e2.optionsPropsRef.current.hold || o3.goToOption(c$1.Nothing)));
  }), $2 = T$5(() => ({ active: l2, focus: l2, selected: S2, disabled: d2 }), [l2, S2, d2]), K2 = { id: b2, ref: B2, role: "option", tabIndex: d2 === true ? void 0 : -1, "aria-disabled": d2 === true ? true : void 0, "aria-selected": S2, disabled: void 0, onMouseDown: O2, onFocus: P2, onPointerEnter: V2, onMouseEnter: V2, onPointerMove: w2, onMouseMove: w2, onPointerLeave: T2, onMouseLeave: T2 };
  return L$1()({ ourProps: K2, theirProps: i2, slot: $2, defaultTag: Nt, name: "Combobox.Option" });
}
let Ht = K$1(ht), Ut = K$1(Vt), Gt = K$1(Dt$1), zt = Q, Kt = K$1(wt), jt = K$1(kt), Ho = Object.assign(Ht, { Input: Gt, Button: Ut, Label: zt, Options: Kt, Option: jt });
function a$2(o3, r2 = typeof document != "undefined" ? document.defaultView : null, t2) {
  let n2 = x$2(o3, "escape");
  E(r2, "keydown", (e2) => {
    n2 && (e2.defaultPrevented || e2.key === o$1.Escape && t2(e2));
  });
}
function f$1() {
  var t2;
  let [e2] = h$3(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o3, c2] = h$3((t2 = e2 == null ? void 0 : e2.matches) != null ? t2 : false);
  return n$3(() => {
    if (!e2) return;
    function n2(r2) {
      c2(r2.matches);
    }
    return e2.addEventListener("change", n2), () => e2.removeEventListener("change", n2);
  }, [e2]), o3;
}
function R({ defaultContainers: l2 = [], portals: n2, mainTreeNode: o3 } = {}) {
  let r2 = n$1(o3), u2 = o$3(() => {
    var i2, c2;
    let t2 = [];
    for (let e2 of l2) e2 !== null && (e2 instanceof HTMLElement ? t2.push(e2) : "current" in e2 && e2.current instanceof HTMLElement && t2.push(e2.current));
    if (n2 != null && n2.current) for (let e2 of n2.current) t2.push(e2);
    for (let e2 of (i2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? i2 : []) e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (o3 && (e2.contains(o3) || e2.contains((c2 = o3 == null ? void 0 : o3.getRootNode()) == null ? void 0 : c2.host)) || t2.some((m2) => e2.contains(m2)) || t2.push(e2));
    return t2;
  });
  return { resolveContainers: u2, contains: o$3((t2) => u2().some((i2) => i2.contains(t2))) };
}
let a$1 = J$3(null);
function O$1({ children: l2, node: n2 }) {
  let [o3, r2] = h$3(null), u2 = b(n2 != null ? n2 : o3);
  return Rn.createElement(a$1.Provider, { value: u2 }, l2, u2 === null && Rn.createElement(f$a, { features: s$3.Hidden, ref: (t2) => {
    var i2, c2;
    if (t2) {
      for (let e2 of (c2 = (i2 = u$9(t2)) == null ? void 0 : i2.querySelectorAll("html > *, body > *")) != null ? c2 : []) if (e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2 != null && e2.contains(t2)) {
        r2(e2);
        break;
      }
    }
  } }));
}
function b(l2 = null) {
  var n2;
  return (n2 = x$4(a$1)) != null ? n2 : l2;
}
function f() {
  let e2 = A$3(false);
  return n$3(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
var a2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(a2 || {});
function u() {
  let e2 = A$3(0);
  return s$2(true, "keydown", (r2) => {
    r2.key === "Tab" && (e2.current = r2.shiftKey ? 1 : 0);
  }, true), e2;
}
function U$1(o3) {
  if (!o3) return /* @__PURE__ */ new Set();
  if (typeof o3 == "function") return new Set(o3());
  let e2 = /* @__PURE__ */ new Set();
  for (let t2 of o3.current) t2.current instanceof HTMLElement && e2.add(t2.current);
  return e2;
}
let Z = "div";
var x = ((n2) => (n2[n2.None = 0] = "None", n2[n2.InitialFocus = 1] = "InitialFocus", n2[n2.TabLock = 2] = "TabLock", n2[n2.FocusLock = 4] = "FocusLock", n2[n2.RestoreFocus = 8] = "RestoreFocus", n2[n2.AutoFocus = 16] = "AutoFocus", n2))(x || {});
function $(o3, e2) {
  let t2 = A$3(null), r2 = y$4(t2, e2), { initialFocus: s2, initialFocusFallback: a$12, containers: n2, features: u$12 = 15, ...f2 } = o3;
  l$1() || (u$12 = 0);
  let l2 = n$1(t2);
  ee(u$12, { ownerDocument: l2 });
  let i2 = te(u$12, { ownerDocument: l2, container: t2, initialFocus: s2, initialFocusFallback: a$12 });
  re(u$12, { ownerDocument: l2, container: t2, containers: n2, previousActiveElement: i2 });
  let R2 = u(), g2 = o$3((c2) => {
    let m2 = t2.current;
    if (!m2) return;
    ((G2) => G2())(() => {
      u$8(R2.current, { [a2.Forwards]: () => {
        P(m2, F$1.First, { skipElements: [c2.relatedTarget, a$12] });
      }, [a2.Backwards]: () => {
        P(m2, F$1.Last, { skipElements: [c2.relatedTarget, a$12] });
      } });
    });
  }), v2 = x$2(!!(u$12 & 2), "focus-trap#tab-lock"), N2 = p$2(), F2 = A$3(false), k2 = { ref: r2, onKeyDown(c2) {
    c2.key == "Tab" && (F2.current = true, N2.requestAnimationFrame(() => {
      F2.current = false;
    }));
  }, onBlur(c2) {
    if (!(u$12 & 4)) return;
    let m2 = U$1(n2);
    t2.current instanceof HTMLElement && m2.add(t2.current);
    let d2 = c2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (I(m2, d2) || (F2.current ? P(t2.current, u$8(R2.current, { [a2.Forwards]: () => F$1.Next, [a2.Backwards]: () => F$1.Previous }) | F$1.WrapAround, { relativeTo: c2.target }) : c2.target instanceof HTMLElement && I$2(c2.target)));
  } }, B2 = L$1();
  return Rn.createElement(Rn.Fragment, null, v2 && Rn.createElement(f$a, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g2, features: s$3.Focusable }), B2({ ourProps: k2, theirProps: f2, defaultTag: Z, name: "FocusTrap" }), v2 && Rn.createElement(f$a, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g2, features: s$3.Focusable }));
}
let D = K$1($), ye = Object.assign(D, { features: x });
function w$1(o3 = true) {
  let e2 = A$3(r.slice());
  return m(([t2], [r$12]) => {
    r$12 === true && t2 === false && t$4(() => {
      e2.current.splice(0);
    }), r$12 === false && t2 === true && (e2.current = r.slice());
  }, [o3, r, e2]), o$3(() => {
    var t2;
    return (t2 = e2.current.find((r2) => r2 != null && r2.isConnected)) != null ? t2 : null;
  });
}
function ee(o3, { ownerDocument: e2 }) {
  let t2 = !!(o3 & 8), r2 = w$1(t2);
  m(() => {
    t2 || (e2 == null ? void 0 : e2.activeElement) === (e2 == null ? void 0 : e2.body) && I$2(r2());
  }, [t2]), c(() => {
    t2 && I$2(r2());
  });
}
function te(o3, { ownerDocument: e2, container: t2, initialFocus: r2, initialFocusFallback: s2 }) {
  let a3 = A$3(null), n2 = x$2(!!(o3 & 1), "focus-trap#initial-focus"), u2 = f();
  return m(() => {
    if (o3 === 0) return;
    if (!n2) {
      s2 != null && s2.current && I$2(s2.current);
      return;
    }
    let f2 = t2.current;
    f2 && t$4(() => {
      if (!u2.current) return;
      let l2 = e2 == null ? void 0 : e2.activeElement;
      if (r2 != null && r2.current) {
        if ((r2 == null ? void 0 : r2.current) === l2) {
          a3.current = l2;
          return;
        }
      } else if (f2.contains(l2)) {
        a3.current = l2;
        return;
      }
      if (r2 != null && r2.current) I$2(r2.current);
      else {
        if (o3 & 16) {
          if (P(f2, F$1.First | F$1.AutoFocus) !== T$1.Error) return;
        } else if (P(f2, F$1.First) !== T$1.Error) return;
        if (s2 != null && s2.current && (I$2(s2.current), (e2 == null ? void 0 : e2.activeElement) === s2.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a3.current = e2 == null ? void 0 : e2.activeElement;
    });
  }, [s2, n2, o3]), a3;
}
function re(o3, { ownerDocument: e2, container: t2, containers: r2, previousActiveElement: s2 }) {
  let a3 = f(), n2 = !!(o3 & 4);
  E(e2 == null ? void 0 : e2.defaultView, "focus", (u2) => {
    if (!n2 || !a3.current) return;
    let f2 = U$1(r2);
    t2.current instanceof HTMLElement && f2.add(t2.current);
    let l2 = s2.current;
    if (!l2) return;
    let i2 = u2.target;
    i2 && i2 instanceof HTMLElement ? I(f2, i2) ? (s2.current = i2, I$2(i2)) : (u2.preventDefault(), u2.stopPropagation(), I$2(l2)) : I$2(s2.current);
  }, true);
}
function I(o3, e2) {
  for (let t2 of o3) if (t2.contains(e2)) return true;
  return false;
}
function ue(e2) {
  var t2;
  return !!(e2.enter || e2.enterFrom || e2.enterTo || e2.leave || e2.leaveFrom || e2.leaveTo) || ((t2 = e2.as) != null ? t2 : de) !== k$3 || Rn.Children.count(e2.children) === 1;
}
let w = J$3(null);
w.displayName = "TransitionContext";
var _e = ((n2) => (n2.Visible = "visible", n2.Hidden = "hidden", n2))(_e || {});
function De() {
  let e2 = x$4(w);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
function He$1() {
  let e2 = x$4(M);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
let M = J$3(null);
M.displayName = "NestingContext";
function U(e2) {
  return "children" in e2 ? U(e2.children) : e2.current.filter(({ el: t2 }) => t2.current !== null).filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Te(e2, t2) {
  let n2 = s$4(e2), l2 = A$3([]), S2 = f(), R2 = p$2(), d2 = o$3((o3, i2 = A$1.Hidden) => {
    let a3 = l2.current.findIndex(({ el: s2 }) => s2 === o3);
    a3 !== -1 && (u$8(i2, { [A$1.Unmount]() {
      l2.current.splice(a3, 1);
    }, [A$1.Hidden]() {
      l2.current[a3].state = "hidden";
    } }), R2.microTask(() => {
      var s2;
      !U(l2) && S2.current && ((s2 = n2.current) == null || s2.call(n2));
    }));
  }), y2 = o$3((o3) => {
    let i2 = l2.current.find(({ el: a3 }) => a3 === o3);
    return i2 ? i2.state !== "visible" && (i2.state = "visible") : l2.current.push({ el: o3, state: "visible" }), () => d2(o3, A$1.Unmount);
  }), p2 = A$3([]), c2 = A$3(Promise.resolve()), C2 = A$3({ enter: [], leave: [] }), h2 = o$3((o3, i2, a3) => {
    p2.current.splice(0), t2 && (t2.chains.current[i2] = t2.chains.current[i2].filter(([s2]) => s2 !== o3)), t2 == null || t2.chains.current[i2].push([o3, new Promise((s2) => {
      p2.current.push(s2);
    })]), t2 == null || t2.chains.current[i2].push([o3, new Promise((s2) => {
      Promise.all(C2.current[i2].map(([r2, f2]) => f2)).then(() => s2());
    })]), i2 === "enter" ? c2.current = c2.current.then(() => t2 == null ? void 0 : t2.wait.current).then(() => a3(i2)) : a3(i2);
  }), g2 = o$3((o3, i2, a3) => {
    Promise.all(C2.current[i2].splice(0).map(([s2, r2]) => r2)).then(() => {
      var s2;
      (s2 = p2.current.shift()) == null || s2();
    }).then(() => a3(i2));
  });
  return T$5(() => ({ children: l2, register: y2, unregister: d2, onStart: h2, onStop: g2, wait: c2, chains: C2 }), [y2, d2, l2, h2, g2, C2, c2]);
}
let de = k$3, fe = O$3.RenderStrategy;
function Ae(e2, t2) {
  var ee2, te2;
  let { transition: n2 = true, beforeEnter: l2, afterEnter: S2, beforeLeave: R2, afterLeave: d2, enter: y2, enterFrom: p2, enterTo: c2, entered: C2, leave: h2, leaveFrom: g2, leaveTo: o3, ...i$12 } = e2, [a3, s2] = h$3(null), r2 = A$3(null), f2 = ue(e2), j2 = y$4(...f2 ? [r2, t2, s2] : t2 === null ? [] : [t2]), H2 = (ee2 = i$12.unmount) == null || ee2 ? A$1.Unmount : A$1.Hidden, { show: u2, appear: z2, initial: K2 } = De(), [v2, G2] = h$3(u2 ? "visible" : "hidden"), Q2 = He$1(), { register: A2, unregister: I2 } = Q2;
  n$3(() => A2(r2), [A2, r2]), n$3(() => {
    if (H2 === A$1.Hidden && r2.current) {
      if (u2 && v2 !== "visible") {
        G2("visible");
        return;
      }
      return u$8(v2, { ["hidden"]: () => I2(r2), ["visible"]: () => A2(r2) });
    }
  }, [v2, r2, A2, I2, u2, H2]);
  let B2 = l$1();
  n$3(() => {
    if (f2 && B2 && v2 === "visible" && r2.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r2, v2, B2, f2]);
  let ce2 = K2 && !z2, Y2 = z2 && u2 && K2, W2 = A$3(false), L2 = Te(() => {
    W2.current || (G2("hidden"), I2(r2));
  }, Q2), Z2 = o$3((k2) => {
    W2.current = true;
    let F2 = k2 ? "enter" : "leave";
    L2.onStart(r2, F2, (_2) => {
      _2 === "enter" ? l2 == null || l2() : _2 === "leave" && (R2 == null || R2());
    });
  }), $2 = o$3((k2) => {
    let F2 = k2 ? "enter" : "leave";
    W2.current = false, L2.onStop(r2, F2, (_2) => {
      _2 === "enter" ? S2 == null || S2() : _2 === "leave" && (d2 == null || d2());
    }), F2 === "leave" && !U(L2) && (G2("hidden"), I2(r2));
  });
  y$5(() => {
    f2 && n2 || (Z2(u2), $2(u2));
  }, [u2, f2, n2]);
  let pe2 = /* @__PURE__ */ (() => !(!n2 || !f2 || !B2 || ce2))(), [, T2] = x$1(pe2, a3, u2, { start: Z2, end: $2 }), Ce = m$4({ ref: j2, className: ((te2 = t$3(i$12.className, Y2 && y2, Y2 && p2, T2.enter && y2, T2.enter && T2.closed && p2, T2.enter && !T2.closed && c2, T2.leave && h2, T2.leave && !T2.closed && g2, T2.leave && T2.closed && o3, !T2.transition && u2 && C2)) == null ? void 0 : te2.trim()) || void 0, ...R$1(T2) }), N2 = 0;
  v2 === "visible" && (N2 |= i.Open), v2 === "hidden" && (N2 |= i.Closed), T2.enter && (N2 |= i.Opening), T2.leave && (N2 |= i.Closing);
  let he2 = L$1();
  return Rn.createElement(M.Provider, { value: L2 }, Rn.createElement(c$2, { value: N2 }, he2({ ourProps: Ce, theirProps: i$12, defaultTag: de, features: fe, visible: v2 === "visible", name: "Transition.Child" })));
}
function Ie$1(e2, t2) {
  let { show: n2, appear: l2 = false, unmount: S2 = true, ...R2 } = e2, d2 = A$3(null), y2 = ue(e2), p2 = y$4(...y2 ? [d2, t2] : t2 === null ? [] : [t2]);
  l$1();
  let c2 = u$2();
  if (n2 === void 0 && c2 !== null && (n2 = (c2 & i.Open) === i.Open), n2 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [C2, h2] = h$3(n2 ? "visible" : "hidden"), g2 = Te(() => {
    n2 || h2("hidden");
  }), [o3, i$12] = h$3(true), a3 = A$3([n2]);
  n$3(() => {
    o3 !== false && a3.current[a3.current.length - 1] !== n2 && (a3.current.push(n2), i$12(false));
  }, [a3, n2]);
  let s2 = T$5(() => ({ show: n2, appear: l2, initial: o3 }), [n2, l2, o3]);
  n$3(() => {
    n2 ? h2("visible") : !U(g2) && d2.current !== null && h2("hidden");
  }, [n2, g2]);
  let r2 = { unmount: S2 }, f2 = o$3(() => {
    var u2;
    o3 && i$12(false), (u2 = e2.beforeEnter) == null || u2.call(e2);
  }), j2 = o$3(() => {
    var u2;
    o3 && i$12(false), (u2 = e2.beforeLeave) == null || u2.call(e2);
  }), H2 = L$1();
  return Rn.createElement(M.Provider, { value: g2 }, Rn.createElement(w.Provider, { value: s2 }, H2({ ourProps: { ...r2, as: k$3, children: Rn.createElement(me, { ref: p2, ...r2, ...R2, beforeEnter: f2, beforeLeave: j2 }) }, theirProps: {}, defaultTag: k$3, features: fe, visible: C2 === "visible", name: "Transition" })));
}
function Le(e2, t2) {
  let n2 = x$4(w) !== null, l2 = u$2() !== null;
  return Rn.createElement(Rn.Fragment, null, !n2 && l2 ? Rn.createElement(X, { ref: t2, ...e2 }) : Rn.createElement(me, { ref: t2, ...e2 }));
}
let X = K$1(Ie$1), me = K$1(Ae), Fe = K$1(Le), ze = Object.assign(X, { Child: Fe, Root: X });
var Oe = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(Oe || {}), he = ((t2) => (t2[t2.SetTitleId = 0] = "SetTitleId", t2))(he || {});
let Se = { [0](e2, t2) {
  return e2.titleId === t2.id ? e2 : { ...e2, titleId: t2.id };
} }, k = J$3(null);
k.displayName = "DialogContext";
function O(e2) {
  let t2 = x$4(k);
  if (t2 === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, O), o3;
  }
  return t2;
}
function Ie(e2, t2) {
  return u$8(t2.type, Se, e2, t2);
}
let V = K$1(function(t2, o3) {
  let a3 = g$2(), { id: l$22 = `headlessui-dialog-${a3}`, open: i$12, onClose: p2, initialFocus: d2, role: s2 = "dialog", autoFocus: f2 = true, __demoMode: u2 = false, unmount: P2 = false, ...h2 } = t2, R$12 = A$3(false);
  s2 = function() {
    return s2 === "dialog" || s2 === "alertdialog" ? s2 : (R$12.current || (R$12.current = true, console.warn(`Invalid role [${s2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let c2 = u$2();
  i$12 === void 0 && c2 !== null && (i$12 = (c2 & i.Open) === i.Open);
  let T2 = A$3(null), S2 = y$4(T2, o3), F2 = n$1(T2), g2 = i$12 ? 0 : 1, [b$12, q2] = p$3(Ie, { titleId: null, descriptionId: null, panelRef: b$4() }), m2 = o$3(() => p2(false)), w2 = o$3((r2) => q2({ type: 0, id: r2 })), D2 = l$1() ? g2 === 0 : false, [z2, Q2] = te$1(), Z2 = { get current() {
    var r2;
    return (r2 = b$12.panelRef.current) != null ? r2 : T2.current;
  } }, v2 = b(), { resolveContainers: I2 } = R({ mainTreeNode: v2, portals: z2, defaultContainers: [Z2] }), B2 = c2 !== null ? (c2 & i.Closing) === i.Closing : false;
  y$3(u2 || B2 ? false : D2, { allowed: o$3(() => {
    var r2, H2;
    return [(H2 = (r2 = T2.current) == null ? void 0 : r2.closest("[data-headlessui-portal]")) != null ? H2 : null];
  }), disallowed: o$3(() => {
    var r2;
    return [(r2 = v2 == null ? void 0 : v2.closest("body > *:not(#headlessui-portal-root)")) != null ? r2 : null];
  }) }), R$2(D2, I2, (r2) => {
    r2.preventDefault(), m2();
  }), a$2(D2, F2 == null ? void 0 : F2.defaultView, (r2) => {
    r2.preventDefault(), r2.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m2();
  }), f$4(u2 || B2 ? false : D2, F2, I2), m$2(D2, T2, m2);
  let [ee2, te2] = w$3(), oe = T$5(() => [{ dialogState: g2, close: m2, setTitleId: w2, unmount: P2 }, b$12], [g2, b$12, m2, w2, P2]), U2 = T$5(() => ({ open: g2 === 0 }), [g2]), ne2 = { ref: S2, id: l$22, role: s2, tabIndex: -1, "aria-modal": u2 ? void 0 : g2 === 0 ? true : void 0, "aria-labelledby": b$12.titleId, "aria-describedby": ee2, unmount: P2 }, re2 = !f$1(), y2 = x.None;
  D2 && !u2 && (y2 |= x.RestoreFocus, y2 |= x.TabLock, f2 && (y2 |= x.AutoFocus), re2 && (y2 |= x.InitialFocus));
  let le2 = L$1();
  return Rn.createElement(s$1, null, Rn.createElement(l, { force: true }, Rn.createElement(re$1, null, Rn.createElement(k.Provider, { value: oe }, Rn.createElement(X$1, { target: T2 }, Rn.createElement(l, { force: false }, Rn.createElement(te2, { slot: U2 }, Rn.createElement(Q2, null, Rn.createElement(ye, { initialFocus: d2, initialFocusFallback: T2, containers: I2, features: y2 }, Rn.createElement(C$1, { value: m2 }, le2({ ourProps: ne2, theirProps: h2, slot: U2, defaultTag: Me, features: Ge, visible: g2 === 0, name: "Dialog" })))))))))));
}), Me = "div", Ge = O$3.RenderStrategy | O$3.Static;
function ke(e2, t2) {
  let { transition: o3 = false, open: a3, ...l2 } = e2, i2 = u$2(), p2 = e2.hasOwnProperty("open") || i2 !== null, d2 = e2.hasOwnProperty("onClose");
  if (!p2 && !d2) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p2) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d2) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i2 && typeof e2.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e2.open}`);
  if (typeof e2.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e2.onClose}`);
  return (a3 !== void 0 || o3) && !l2.static ? Rn.createElement(O$1, null, Rn.createElement(ze, { show: a3, transition: o3, unmount: l2.unmount }, Rn.createElement(V, { ref: t2, ...l2 }))) : Rn.createElement(O$1, null, Rn.createElement(V, { ref: t2, open: a3, ...l2 }));
}
let we = "div";
function Be(e2, t2) {
  let o3 = g$2(), { id: a3 = `headlessui-dialog-panel-${o3}`, transition: l2 = false, ...i2 } = e2, [{ dialogState: p2, unmount: d2 }, s2] = O("Dialog.Panel"), f2 = y$4(t2, s2.panelRef), u2 = T$5(() => ({ open: p2 === 0 }), [p2]), P2 = o$3((S2) => {
    S2.stopPropagation();
  }), h2 = { ref: f2, id: a3, onClick: P2 }, R2 = l2 ? Fe : k$3, c2 = l2 ? { unmount: d2 } : {}, T2 = L$1();
  return Rn.createElement(R2, { ...c2 }, T2({ ourProps: h2, theirProps: i2, slot: u2, defaultTag: we, name: "Dialog.Panel" }));
}
let Ue = "div";
function He(e2, t2) {
  let { transition: o3 = false, ...a3 } = e2, [{ dialogState: l2, unmount: i2 }] = O("Dialog.Backdrop"), p2 = T$5(() => ({ open: l2 === 0 }), [l2]), d2 = { ref: t2, "aria-hidden": true }, s2 = o3 ? Fe : k$3, f2 = o3 ? { unmount: i2 } : {}, u2 = L$1();
  return Rn.createElement(s2, { ...f2 }, u2({ ourProps: d2, theirProps: a3, slot: p2, defaultTag: Ue, name: "Dialog.Backdrop" }));
}
let Ne = "h2";
function We(e2, t2) {
  let o3 = g$2(), { id: a3 = `headlessui-dialog-title-${o3}`, ...l2 } = e2, [{ dialogState: i2, setTitleId: p2 }] = O("Dialog.Title"), d2 = y$4(t2);
  y$5(() => (p2(a3), () => p2(null)), [a3, p2]);
  let s2 = T$5(() => ({ open: i2 === 0 }), [i2]), f2 = { ref: d2, id: a3 };
  return L$1()({ ourProps: f2, theirProps: l2, slot: s2, defaultTag: Ne, name: "Dialog.Title" });
}
let $e = K$1(ke), je = K$1(Be), Dt = K$1(He), Ye = K$1(We), yt = Object.assign($e, { Panel: je, Title: Ye, Description: H$2 });
function ArrowDownTrayIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const ForwardRef$h = /* @__PURE__ */ D$2(ArrowDownTrayIcon);
function ArrowRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const ForwardRef$g = /* @__PURE__ */ D$2(ArrowRightIcon);
function ArrowUturnRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
  }));
}
const ForwardRef$f = /* @__PURE__ */ D$2(ArrowUturnRightIcon);
function CheckIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const ForwardRef$e = /* @__PURE__ */ D$2(CheckIcon$1);
function CloudArrowUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const ForwardRef$d = /* @__PURE__ */ D$2(CloudArrowUpIcon);
function ExclamationCircleIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  }));
}
const ForwardRef$c = /* @__PURE__ */ D$2(ExclamationCircleIcon$1);
function ExclamationTriangleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const ForwardRef$b = /* @__PURE__ */ D$2(ExclamationTriangleIcon);
function MagnifyingGlassIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef$a = /* @__PURE__ */ D$2(MagnifyingGlassIcon);
function PencilIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const ForwardRef$9 = /* @__PURE__ */ D$2(PencilIcon);
function PlusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const ForwardRef$8 = /* @__PURE__ */ D$2(PlusIcon);
function TrashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const ForwardRef$7 = /* @__PURE__ */ D$2(TrashIcon);
function XMarkIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const ForwardRef$6 = /* @__PURE__ */ D$2(XMarkIcon$1);
const components$1 = { "confirmationModal": { "defaultConfirm": "Confirm", "cancel": "Cancel" }, "select": { "optionPlaceholder": "Select an option", "noOptions": "No options" } };
const importer$1 = { "upload": "Upload", "uploadBlocked": "Your data has validation errors. Fix them before uploading.", "back": "Back", "loader": { "failed": "Something went wrong", "uploading": "Uploading", "success": "Success", "retry": "Try again", "backToPreview": "Back to edit" }, "uploader": { "dragAndDrop": "Drag and drop your file here", "fileSizeLimit": "Limit {{limit}}", "browseFiles": "Browse Files", "enterManually": "Or just manually enter your data" }, "backToMappingConfirmation": { "title": "Are you sure?", "subTitle": "This will discard all changes made after the data was mapped", "confirmationText": "Yes, go back", "cancelText": "No, stay here" } };
const mapper$1 = { "numberRowsImported": "{{count}} Rows Imported", "back": "Back", "confirm": "Confirm", "noData": "No preview data", "used": "Used", "unused": "Unused", "mappingsNotValidTooltip": "Please set all required mappings", "incomingColumn": "Incoming column", "destinationColumn": "Destination column", "dataPreview": "Data preview for {{csvHeader}}" };
const sheet$1 = { "validationPassed": "All rows pass validation!", "removeConfirmationModalTitle": "Remove rows", "removeConfirmationModalConfirmationText": "Remove", "removeConfirmationModalSubTitle": "Are you sure you want to remove {{rowsCount}} rows?", "readOnly": "Read Only", "editTooltip": "Double click to edit", "all": "All", "valid": "Valid", "invalid": "Invalid", "filterByError": "Filter by error", "search": "Search", "removeRowsTooltip": "Remove rows", "removeRowsTooltipNoRowsSelected": "Please select at least one record in order to delete it", "addRowsTooltip": "Add a new row", "downloadSheetTooltip": "Download this sheet", "reset": "Start over", "resetTooltip": "Start over", "resetConfirmationModalTitle": "Start over", "resetConfirmationModalConfirmationText": "Start over", "resetConfirmationModalSubTitle": "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." };
const validators$1 = { "includes": "Value is not in the list of allowed values", "integer": "This is not a valid number", "multiIncludes": "This value is not valid", "regex": "This value is invalid", "required": "This value is required", "unique": "This value is not unique" };
const enTranslation = {
  components: components$1,
  importer: importer$1,
  mapper: mapper$1,
  sheet: sheet$1,
  validators: validators$1
};
const components = { "confirmationModal": { "defaultConfirm": "Confirmer", "cancel": "Annuler" }, "select": { "optionPlaceholder": "Sélectionnez une option", "noOptions": "Pas d'options" } };
const importer = { "upload": "Télécharger", "uploadBlocked": "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", "back": "Retour", "loader": { "failed": "Quelque chose a mal tourné", "uploading": "Téléchargement en cours", "success": "Succès", "retry": "Réessayer", "backToPreview": "Retour à modifier" }, "uploader": { "dragAndDrop": "Glissez et déposez votre fichier ici", "fileSizeLimit": "Limite {{limit}}", "browseFiles": "Parcourir les fichiers", "enterManually": "Ou saisissez vos données manuellement" }, "backToMappingConfirmation": { "title": "Êtes-vous sûr ?", "subTitle": "Cela annulera toutes les modifications effectuées après le mappage des données", "confirmationText": "Oui, revenir en arrière", "cancelText": "Non, rester ici" } };
const mapper = { "numberRowsImported": "{{count}} lignes importées", "back": "Retour", "confirm": "Confirmer", "noData": "Aucune donnée prévue", "unused": "Non utilisées", "used": "Utilisées", "mappingsNotValidTooltip": "Veuillez définir toutes les mappings requis", "incomingColumn": "Colonne entrante", "destinationColumn": "Colonne de destination", "dataPreview": "Aperçu des données pour {{csvHeader}}" };
const sheet = { "validationPassed": "Toutes les lignes passent la validation !", "removeConfirmationModalTitle": "Supprimer les lignes", "removeConfirmationModalConfirmationText": "Supprimer", "removeConfirmationModalSubTitle": "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", "readOnly": "Lecture seule", "editTooltip": "Double-cliquez pour modifier", "all": "Toutes", "valid": "Valides", "invalid": "Invalides", "filterByError": "Filtrer par erreur", "search": "Recherche", "removeRowsTooltip": "Supprimer les lignes", "removeRowsTooltipNoRowsSelected": "Veuillez sélectionner au moins un enregistrement avant de le supprimer", "addRowsTooltip": "Ajouter une nouvelle ligne", "downloadSheetTooltip": "Télécharger cette feuille", "reset": "Recommencer", "resetTooltip": "Recommencer", "resetConfirmationModalTitle": "Recommencer", "resetConfirmationModalConfirmationText": "Recommencer", "resetConfirmationModalSubTitle": "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." };
const validators = { "includes": "La valeur n'est pas dans la liste des valeurs autorisées", "integer": "Ce n'est pas un nombre valide", "multiIncludes": "Cette valeur n'est pas valide", "regex": "Cette valeur est invalide", "required": "Cette valeur est obligatoire", "unique": "Cette valeur n'est pas unique" };
const frTranslation = {
  components,
  importer,
  mapper,
  sheet,
  validators
};
const resources = {
  en: enTranslation,
  fr: frTranslation
};
const defaultLocale = "en";
function extractTranslation(currentLocale, key) {
  const keyParts = key.split(".");
  let result = resources[currentLocale];
  for (const k2 of keyParts) {
    if (result && typeof result === "object") {
      result = result[k2];
    } else {
      return key;
    }
  }
  return typeof result === "string" ? result : key;
}
function replaceArguments(translation, argumentValues) {
  return translation.replace(/{{([^}]+)}}/g, (_2, match) => {
    const value = argumentValues[match] ?? `{${match}}`;
    return `${value}`;
  });
}
function replaceArgumentsHtml(translation, argumentValues) {
  const argumentMatches = translation.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ u$b("span", { children: argumentMatches.map((argument) => {
    const argumentMatch = argument.match(/{{([^}]+)}}/);
    if (argumentMatch) {
      const key = argumentMatch[1];
      const argumentValue = argumentValues[key];
      return argumentValue ?? `{${key}}`;
    }
    return argument;
  }) });
}
const TranslationContext = J$3(
  {}
);
function TranslationProvider({
  children,
  selectedLocale
}) {
  const locale = selectedLocale ?? defaultLocale;
  function t2(key, argumentValues = {}) {
    const translation = extractTranslation(locale, key);
    return replaceArguments(translation, argumentValues);
  }
  function tHtml(key, argumentValues = {}) {
    const translation = extractTranslation(locale, key);
    return replaceArgumentsHtml(translation, argumentValues);
  }
  return /* @__PURE__ */ u$b(TranslationContext.Provider, { value: { t: t2, tHtml }, children });
}
function useTranslations() {
  return x$4(TranslationContext);
}
function ConfirmationModal({
  open,
  setOpen,
  title,
  subTitle,
  confirmationText,
  cancelText,
  onConfirm,
  variant = "default"
}) {
  const { t: t2 } = useTranslations();
  const baseClasses2 = {
    danger: {
      icon: /* @__PURE__ */ u$b(
        ForwardRef$b,
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
  };
  const { icon, btnVariant, bgColor } = baseClasses2[variant];
  return /* @__PURE__ */ u$b(yt, { open, onClose: setOpen, className: "relative z-10", children: [
    /* @__PURE__ */ u$b(
      Dt,
      {
        transition: true,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ u$b("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ u$b("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ u$b(
      je,
      {
        transition: true,
        className: "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ u$b("div", { className: "sm:flex sm:items-start", children: [
            icon && /* @__PURE__ */ u$b(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${bgColor} sm:mx-0 sm:size-10`,
                children: icon
              }
            ),
            /* @__PURE__ */ u$b("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ u$b(
                Ye,
                {
                  as: "h3",
                  className: "text-base font-semibold text-gray-900",
                  children: title
                }
              ),
              subTitle && /* @__PURE__ */ u$b("div", { className: "mt-2", children: /* @__PURE__ */ u$b("p", { className: "text-sm text-gray-500", children: subTitle }) })
            ] })
          ] }),
          /* @__PURE__ */ u$b("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ u$b("div", { className: "sm:ml-3 sm:w-auto", children: /* @__PURE__ */ u$b(
              Button,
              {
                variant: btnVariant,
                onClick: () => {
                  onConfirm();
                  setOpen(false);
                },
                children: confirmationText ?? t2("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ u$b("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ u$b(
              Button,
              {
                variant: "tertiary",
                "data-autofocus": true,
                onClick: () => setOpen(false),
                children: cancelText ?? t2("components.confirmationModal.cancel")
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
const Root = D$2(function Root2({ children }, ref) {
  return /* @__PURE__ */ u$b(
    "div",
    {
      ref,
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
      children
    }
  );
});
function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$5 = /* @__PURE__ */ D$2(CheckIcon);
function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$4 = /* @__PURE__ */ D$2(ChevronDownIcon);
function ChevronUpDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$3 = /* @__PURE__ */ D$2(ChevronUpDownIcon);
function ChevronUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ D$2(ChevronUpIcon);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ D$2(XMarkIcon);
const Input = D$2(
  ({
    value,
    onBlur,
    onChange,
    placeholder,
    iconBuilder,
    classes,
    clearable,
    type = "text"
  }, ref) => {
    const displayClearIcon = clearable && value != null && value !== "";
    function getParsedValue(e2) {
      const target = e2.target;
      const value2 = type === "number" ? target == null ? void 0 : target.valueAsNumber : target == null ? void 0 : target.value;
      const parsedValue = typeof value2 === "number" && isNaN(value2) ? "" : value2;
      return parsedValue ?? "";
    }
    return /* @__PURE__ */ u$b("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ u$b(
        "input",
        {
          ref,
          type,
          inputMode: type === "number" ? "numeric" : "text",
          placeholder,
          value,
          onChange: (e2) => onChange == null ? void 0 : onChange(getParsedValue(e2)),
          className: `${classes} ${iconBuilder != null ? "pl-10" : ""} ${clearable ? "pr-10" : ""} focus:outline-primary col-start-1 row-start-1 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`,
          onBlur: (e2) => onBlur == null ? void 0 : onBlur(getParsedValue(e2))
        }
      ),
      iconBuilder == null ? void 0 : iconBuilder({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
      }),
      displayClearIcon && /* @__PURE__ */ u$b(
        "span",
        {
          onClick: (e2) => {
            e2.stopPropagation();
            onChange == null ? void 0 : onChange("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ u$b(
            ForwardRef$1,
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
function Select({
  value,
  options,
  onChange,
  multiple = false,
  compareFunction = (a3, b2) => a3 === b2,
  clearable = false,
  searchable = false,
  placeholder,
  classes,
  displayPlaceholderWhenSelected = false
}) {
  const { t: t2 } = useTranslations();
  const [query, setQuery] = h$3("");
  const isSelected = (valueToCheck) => {
    if (multiple && Array.isArray(value)) {
      return value.some((selected) => compareFunction(selected, valueToCheck));
    }
    return compareFunction(value, valueToCheck);
  };
  const handleChange = (selected) => {
    setQuery("");
    if (multiple) {
      const selectedArray = Array.isArray(selected) ? selected : [selected];
      onChange(selectedArray);
    } else {
      onChange(selected);
    }
  };
  const clear = () => {
    setQuery("");
    if (multiple) {
      onChange([]);
    } else {
      onChange(null);
    }
  };
  const selectedOptions = options.filter((option) => isSelected(option.value));
  const baseDisplayValue = selectedOptions.map((o3) => o3.label).join(", ");
  const filteredOptions = query && searchable ? options.filter(
    (option) => String(option.label).toLowerCase().includes(query.toLowerCase())
  ) : options;
  const placeholderValue = placeholder ?? t2("components.select.optionPlaceholder");
  const getDisplayValue = () => {
    if (searchable) {
      return baseDisplayValue;
    }
    if (selectedOptions.length > 0) {
      return displayPlaceholderWhenSelected ? `${placeholderValue}: ${baseDisplayValue}` : baseDisplayValue;
    }
    return "";
  };
  const hasGroupProperty = filteredOptions.some((option) => option.group);
  const groupedOptions = hasGroupProperty ? Object.entries(
    filteredOptions.reduce(
      (acc, option) => {
        const groupKey = option.group || "ungrouped";
        acc[groupKey] = acc[groupKey] || [];
        acc[groupKey].push(option);
        return acc;
      },
      {}
    )
  ).map(([group, items]) => ({
    label: group,
    items
  })) : [{ label: null, items: filteredOptions }];
  const hasNoOptions = groupedOptions.every(({ items }) => items.length === 0);
  const clearButtonDisplayed = clearable && selectedOptions.length > 0;
  return /* @__PURE__ */ u$b(Ho, { value, onChange: handleChange, multiple, children: /* @__PURE__ */ u$b("div", { className: "relative", children: [
    /* @__PURE__ */ u$b(Ut, { className: "w-full", children: /* @__PURE__ */ u$b(
      Gt,
      {
        className: `${classes} focus:outline-primary block w-full cursor-pointer truncate rounded-md bg-white py-1.5 focus:cursor-text ${clearButtonDisplayed ? "pr-12" : "pr-2"} pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm`,
        displayValue: getDisplayValue,
        onChange: (event) => searchable && setQuery(event.target.value),
        placeholder: placeholderValue,
        readOnly: !searchable
      }
    ) }),
    clearButtonDisplayed && /* @__PURE__ */ u$b(
      "span",
      {
        onClick: (e2) => {
          e2.stopPropagation();
          clear();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ u$b(
          ForwardRef$1,
          {
            className: "h-5 w-5 text-gray-500 hover:text-gray-700",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ u$b(Ut, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ u$b(
      ForwardRef$3,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      }
    ) }),
    /* @__PURE__ */ u$b(
      Kt,
      {
        anchor: "bottom",
        transition: true,
        className: "absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm",
        children: [
          hasNoOptions && /* @__PURE__ */ u$b(
            jt,
            {
              disabled: true,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-2 pr-9 pl-3 text-gray-400 select-none",
              children: /* @__PURE__ */ u$b("span", { className: "block truncate font-normal", children: t2("components.select.noOptions") })
            },
            "no-options"
          ),
          groupedOptions.map(({ label, items }) => /* @__PURE__ */ u$b("div", { children: [
            label && /* @__PURE__ */ u$b("div", { className: "py-2 pr-9 pl-3 text-gray-400 uppercase", children: label }),
            items.map((option) => /* @__PURE__ */ u$b(
              jt,
              {
                value: option.value,
                className: "group data-focus:bg-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden",
                children: [
                  option.icon,
                  /* @__PURE__ */ u$b("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: option.label }),
                  isSelected(option.value) && /* @__PURE__ */ u$b("span", { className: "text-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white", children: /* @__PURE__ */ u$b(ForwardRef$5, { "aria-hidden": "true", className: "h-5 w-5" }) })
                ]
              },
              option.value
            ))
          ] }, label || "all"))
        ]
      }
    )
  ] }) });
}
function Tabs({ tabs, activeTab, onTabChange }) {
  return /* @__PURE__ */ u$b("div", { children: [
    /* @__PURE__ */ u$b("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ u$b(
      Select,
      {
        options: tabs,
        value: activeTab,
        onChange: (tab) => onTabChange(tab)
      }
    ) }),
    /* @__PURE__ */ u$b("div", { className: "hidden sm:block", children: /* @__PURE__ */ u$b("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ u$b("nav", { "aria-label": "Tabs", className: "-mb-px flex space-x-8", children: tabs.map((tab) => /* @__PURE__ */ u$b(
      "button",
      {
        "aria-current": tab.value === activeTab ? "page" : void 0,
        onClick: () => onTabChange(tab.value),
        className: ` ${tab.value === activeTab ? "border-primary text-primary" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} flex cursor-pointer items-center border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`,
        children: [
          tab.icon,
          tab.label
        ]
      },
      tab.label
    )) }) }) })
  ] });
}
const tooltipBaseClasses = cva(
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
);
const tooltipWrapperBaseClasses = cva("group relative h-full w-full", {
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
    withOutline: false
  }
});
function SheetTooltip({
  variant,
  children,
  tooltipText
}) {
  const tooltipClassName = tooltipBaseClasses({ variant });
  const tooltipWrapperClassName = tooltipWrapperBaseClasses({
    variant,
    withOutline: !!tooltipText
  });
  return /* @__PURE__ */ u$b("div", { className: tooltipWrapperClassName, tabIndex: 0, children: [
    children,
    tooltipText && /* @__PURE__ */ u$b("span", { className: tooltipClassName, children: tooltipText })
  ] });
}
const buttonStyles = cva(
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
        active: true,
        variant: "default",
        className: "bg-gray-900 text-white"
      },
      {
        active: true,
        variant: "danger",
        className: "bg-danger text-white"
      },
      {
        active: false,
        variant: "default",
        className: "text-gray-900"
      },
      {
        active: false,
        variant: "danger",
        className: "text-danger"
      }
    ]
  }
);
function ButtonGroup({ activeButton, buttons }) {
  return /* @__PURE__ */ u$b("span", { className: "isolate inline-flex rounded-md shadow-xs", children: buttons.map((button, index2) => /* @__PURE__ */ u$b(
    "button",
    {
      type: "button",
      onClick: button.onClick,
      className: buttonStyles({
        active: button.value === activeButton,
        variant: button.variant,
        location: index2 === 0 ? "left" : index2 === buttons.length - 1 ? "right" : "center"
      }),
      children: button.label
    },
    button.value
  )) });
}
const baseClasses$1 = cva(
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
function Tooltip({
  tooltipText,
  children,
  className,
  hidden = false
}) {
  const componentClassName = baseClasses$1({ hidden });
  return /* @__PURE__ */ u$b("div", { className: `${className} group relative`, children: [
    children,
    /* @__PURE__ */ u$b("div", { className: componentClassName, children: [
      tooltipText,
      /* @__PURE__ */ u$b("div", { className: "absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900" })
    ] })
  ] });
}
const baseClasses = cva("inline-flex items-center rounded-md px-1.5 py-0.5", {
  variants: {
    variant: {
      primary: "bg-primary-extra-light text-xs font-medium"
    },
    defaultVariants: {
      variant: "primary"
    }
  }
});
function Badge({ children, variant }) {
  const componentClassName = baseClasses({ variant });
  return /* @__PURE__ */ u$b("div", { className: componentClassName, children });
}
const NUMBER_OF_EMPTY_ROWS_FOR_MANUAL_DATA_INPUT = 100;
const NUMBER_OF_EXAMPLES_IN_MAPPING = 5;
const SUPPORTED_FILE_MIME_TYPES = ["text/csv"];
const DOWNLOADED_CSV_SEPARATOR = ",";
const MAX_CHARACTERS_IN_MAPPING_EXAMPLES = 500;
function FileUploader({ setFile }) {
  const { t: t2, tHtml } = useTranslations();
  const fileInputRef = A$3(null);
  const handleFileSelect = (event) => {
    var _a;
    const input = event.target;
    if ((_a = input.files) == null ? void 0 : _a.length) {
      const file = input.files[0];
      if (SUPPORTED_FILE_MIME_TYPES.includes(file.type)) {
        setFile(file);
      }
    }
  };
  const handleDrop = (event) => {
    var _a;
    event.preventDefault();
    if ((_a = event.dataTransfer) == null ? void 0 : _a.files.length) {
      const file = event.dataTransfer.files[0];
      if (SUPPORTED_FILE_MIME_TYPES.includes(file.type)) {
        setFile(file);
      }
    }
  };
  return /* @__PURE__ */ u$b(
    Card,
    {
      onClick: () => {
        var _a;
        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
      },
      onDragOver: (e2) => e2.preventDefault(),
      onDrop: handleDrop,
      children: [
        /* @__PURE__ */ u$b("div", { className: "p-7.5", children: /* @__PURE__ */ u$b("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ u$b(ForwardRef$d, { className: "text-primary mb-3 h-12 w-12" }),
          /* @__PURE__ */ u$b("p", { className: "mb-3", children: t2("importer.uploader.dragAndDrop") }),
          /* @__PURE__ */ u$b("div", { className: "text-sm text-gray-500", children: [
            tHtml("importer.uploader.fileSizeLimit", {
              limit: /* @__PURE__ */ u$b("b", { children: "20MB" })
            }),
            " ",
            "• CSV"
          ] }),
          /* @__PURE__ */ u$b("div", { className: "mt-3", children: /* @__PURE__ */ u$b(Button, { children: t2("importer.uploader.browseFiles") }) })
        ] }) }),
        /* @__PURE__ */ u$b(
          "input",
          {
            ref: fileInputRef,
            type: "file",
            accept: SUPPORTED_FILE_MIME_TYPES.join(","),
            style: { display: "none" },
            onChange: handleFileSelect
          }
        )
      ]
    }
  );
}
function has(collection, value) {
  return collection.indexOf(value) !== -1;
}
function eachWithObject(collection, callback) {
  const obj = {};
  collection.forEach((item) => {
    callback(item, obj);
  });
  return obj;
}
function hasData(row) {
  const data = { ...row };
  delete data.rowIndex;
  const values = Object.values(data);
  return values.length > 0;
}
class Validator {
  constructor(definition) {
    __publicField(this, "definition");
    this.definition = definition;
  }
  isValid(_fieldValue, _row) {
    throw new Error("Not Implemented");
  }
}
class CustomValidator extends Validator {
  constructor(definition) {
    super(definition);
    __publicField(this, "key");
    __publicField(this, "validateFn");
    this.key = definition.key;
    this.validateFn = definition.validateFn;
  }
  isValid(fieldValue, row) {
    return this.validateFn(fieldValue, row);
  }
}
function escapeStringRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class RegexValidator extends Validator {
  constructor(definition) {
    super(definition);
    __publicField(this, "regexp");
    if (typeof definition.regex === "object") {
      this.regexp = definition.regex;
    } else {
      this.regexp = new RegExp(escapeStringRegExp(definition.regex));
    }
  }
  isValid(fieldValue) {
    const matches = this.regexp.test(fieldValue == null ? void 0 : fieldValue.toString());
    if (!matches) {
      return this.definition.error || "validators.regex";
    }
  }
}
class EmailValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "email"
    });
  }
}
class IncludesValidator extends Validator {
  constructor(definition) {
    super(definition);
    __publicField(this, "values");
    this.values = definition.values;
    if (!this.values) {
      throw new Error("Missing `values` for `includes` validator");
    }
  }
  isValid(fieldValue) {
    if (!this.values.includes(fieldValue)) {
      return this.definition.error || "validators.includes";
    }
  }
}
class IntegerValidator extends Validator {
  isValid(fieldValue) {
    const valid = !isNaN(fieldValue) && fieldValue !== null && fieldValue !== void 0;
    if (!valid) {
      return this.definition.error || "validators.integer";
    }
  }
}
class MultiIncludesValidator extends Validator {
  constructor(definition) {
    super(definition);
    __publicField(this, "delimiter");
    __publicField(this, "values");
    this.delimiter = definition.delimiter || /[,|]/;
    this.values = definition.values;
    if (!this.values) {
      throw new Error("Missing values for `multi_includes` validator");
    }
  }
  isValid(fieldValue) {
    const values = fieldValue == null ? void 0 : fieldValue.toString().split(this.delimiter);
    if (values.some((value) => !this.values.includes(value.trim()))) {
      return this.definition.error || "validators.multiIncludes";
    }
  }
}
class PhoneNumberValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: "phone_number"
    });
  }
}
class PostalCodeValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      validate: "postal_code"
    });
  }
}
class RequiredValidator extends Validator {
  isValid(fieldValue) {
    if (!fieldValue) {
      return this.definition.error || "validators.required";
    }
  }
}
class UniqueValidator extends Validator {
  constructor(definition) {
    super(definition);
    __publicField(this, "seen");
    this.seen = {};
  }
  isValid(fieldValue) {
    if (fieldValue in this.seen) {
      return this.definition.error || "validators.unique";
    }
    this.seen[fieldValue] = true;
  }
}
function buildValidatorFromDefinition(definition) {
  const mapping = {
    regex_matches: RegexValidator,
    required: RequiredValidator,
    unique: UniqueValidator,
    includes: IncludesValidator,
    multi_includes: MultiIncludesValidator,
    is_integer: IntegerValidator,
    postal_code: PostalCodeValidator,
    phone_number: PhoneNumberValidator,
    email: EmailValidator,
    custom: CustomValidator
  };
  if (!(definition.validate in mapping)) {
    throw new Error(
      `Missing validator for ${definition.validate}. Valid validator options are ${Object.keys(mapping).join(", ")}`
    );
  }
  const FoundValidator = mapping[definition.validate];
  return new FoundValidator(definition);
}
const isUndefinedOrNull = (a3) => {
  return a3 === null || a3 === void 0;
};
const filterEmptyRows = (state) => {
  return state.rows.filter((d2) => Object.keys(d2).length > 0);
};
const isEmptyCell = (value) => {
  return isUndefinedOrNull(value) || value === "";
};
const removeDuplicates = (array) => {
  return [...new Set(array)];
};
function normalizeValue(value) {
  if (value == null) {
    return null;
  }
  return value.toString().toLowerCase().replace("_", "").replace(" ", "");
}
function extractReferenceColumnPossibleValues(columnDefinition, allData) {
  var _a, _b, _c;
  const referenceArguments = columnDefinition.typeArguments;
  const referenceSheetData = allData.find(
    (data) => data.sheetId === referenceArguments.sheetId
  );
  return ((_c = (_b = (_a = referenceSheetData == null ? void 0 : referenceSheetData.rows) == null ? void 0 : _a.map((row) => row[referenceArguments.sheetColumnId])) == null ? void 0 : _b.filter((c2) => !isEmptyCell(c2))) == null ? void 0 : _c.filter((c2, index2, allData2) => allData2.indexOf(c2) === index2)) ?? [];
}
function downloadSheetAsCsv(sheetDefinition, data) {
  const headers = sheetDefinition.columns.map((column) => column.id).join(DOWNLOADED_CSV_SEPARATOR);
  const rows = data.map(
    (row) => sheetDefinition.columns.map((column) => row[column.id]).join(DOWNLOADED_CSV_SEPARATOR)
  );
  const csv = [headers, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a3 = document.createElement("a");
  a3.href = url;
  a3.download = `${sheetDefinition.label}.csv`;
  a3.click();
  URL.revokeObjectURL(url);
}
function findRowIndex(allData, sheetId, row) {
  return allData.find((d2) => d2.sheetId === sheetId).rows.indexOf(row);
}
function useFilteredRowData(data, allData, viewMode, sheetValidationErrors, errorColumnFilter, sheetDefinition, searchPhrase) {
  const rowData = T$5(() => {
    let rows = data.rows;
    switch (viewMode) {
      case "errors":
        rows = data.rows.filter(
          (_2, index2) => sheetValidationErrors.some((error) => error.rowIndex === index2)
        );
        break;
      case "valid":
        rows = data.rows.filter(
          (_2, index2) => !sheetValidationErrors.some((error) => error.rowIndex === index2)
        );
        break;
      case "all":
      default:
        rows = data.rows;
    }
    if (errorColumnFilter != null) {
      rows = rows.filter((row) => {
        const rowIndex = findRowIndex(allData, sheetDefinition.id, row);
        const error = sheetValidationErrors.find(
          (error2) => error2.rowIndex === rowIndex && error2.columnId === errorColumnFilter
        );
        return error != null;
      });
    }
    if (searchPhrase.trim() !== "") {
      rows = rows.filter(
        (row) => Object.values(row).some(
          (cellValue) => {
            var _a;
            return (_a = normalizeValue(cellValue)) == null ? void 0 : _a.includes(normalizeValue(searchPhrase));
          }
        )
      );
    }
    return rows;
  }, [
    data,
    viewMode,
    sheetValidationErrors,
    errorColumnFilter,
    sheetDefinition.id,
    allData,
    searchPhrase
  ]);
  return rowData;
}
function fieldIsRequired(columnDefinition) {
  if (columnDefinition.validators && columnDefinition.validators.length > 0) {
    const isRequired = columnDefinition.validators.find(
      (v2) => v2.validate === "required"
    );
    return !!isRequired;
  }
  return false;
}
function automaticFieldValidators(columnDefinition, allData) {
  const result = [];
  if (columnDefinition.type === "enum") {
    result.push({
      values: columnDefinition.typeArguments.values.map((v2) => v2.value),
      validate: "includes"
    });
  }
  if (columnDefinition.type === "reference") {
    const referenceData = extractReferenceColumnPossibleValues(
      columnDefinition,
      allData
    );
    result.push({
      values: referenceData,
      validate: "includes"
    });
  }
  return result;
}
function validateSheet(sheetDefinition, sheetData, allData) {
  const validationErrors = [];
  const validatorsByColumnId = eachWithObject(sheetDefinition.columns, (columnDefinition, obj) => {
    obj[columnDefinition.id] = [];
    const validatorDefinitions = [
      ...columnDefinition.validators ?? [],
      ...automaticFieldValidators(columnDefinition, allData)
    ];
    validatorDefinitions.forEach((validatorDefinition) => {
      obj[columnDefinition.id].push(
        buildValidatorFromDefinition(validatorDefinition)
      );
    });
  });
  sheetDefinition.columns.forEach((columnDefinition) => {
    sheetData.rows.forEach((row, rowIndex) => {
      if (!hasData(row)) {
        return;
      }
      if (!(columnDefinition.id in row) && !fieldIsRequired(columnDefinition)) {
        return;
      }
      const value = row[columnDefinition.id];
      const validators2 = validatorsByColumnId[columnDefinition.id];
      validators2.forEach((v2) => {
        const result = v2.isValid(value, row);
        if (result != null) {
          validationErrors.push({
            sheetId: sheetDefinition.id,
            columnId: columnDefinition.id,
            rowIndex,
            message: result
          });
        }
      });
    });
  });
  return validationErrors;
}
function applyValidations(sheetDefinitions, sheetStates) {
  const validationErrors = [];
  sheetDefinitions.forEach((sheetDefinition) => {
    const sheetData = sheetStates.find(
      (state) => state.sheetId === sheetDefinition.id
    );
    if (sheetData) {
      const errors = validateSheet(sheetDefinition, sheetData, sheetStates);
      validationErrors.push(...errors);
    }
  });
  return validationErrors;
}
function removeMappingDuplicates(mappings) {
  const uniqueMap = /* @__PURE__ */ new Map();
  mappings.forEach((entry) => {
    if (!uniqueMap.has(entry.csvColumnName)) {
      uniqueMap.set(entry.csvColumnName, entry);
    }
  });
  return Array.from(uniqueMap.values());
}
function buildSheetSuggestedHeaderMappings(sheet2, csvHeaders) {
  const mappings = [];
  csvHeaders.forEach((header) => {
    const foundField = sheet2.columns.find((column) => {
      if (column.type === "reference") {
        return false;
      }
      const keywords = [
        column.id,
        ...column.suggestedMappingKeywords || []
      ].map((k2) => normalizeValue(k2));
      const normalizedHeader = normalizeValue(header);
      return keywords.includes(normalizedHeader);
    });
    if (!foundField) {
      return;
    }
    mappings.push({
      csvColumnName: header,
      sheetId: sheet2.id,
      sheetColumnId: foundField.id
    });
  });
  return mappings;
}
const buildSuggestedHeaderMappings = (sheetDefinitions, csvHeaders) => {
  const headerMappings = [];
  sheetDefinitions.forEach((sheet2) => {
    const mappings = buildSheetSuggestedHeaderMappings(sheet2, csvHeaders);
    headerMappings.push(...mappings);
  });
  return removeMappingDuplicates(headerMappings);
};
function calculateNewMappingsForCsvColumnMapingChanged(currentMapping, csvColumnName, newCsvColumnMaping) {
  if (newCsvColumnMaping == null) {
    return currentMapping.filter((m2) => m2.csvColumnName !== csvColumnName);
  }
  const mappingsForOtherSheets = currentMapping.filter(
    (m2) => (m2.sheetId !== newCsvColumnMaping.sheetId || m2.sheetColumnId !== newCsvColumnMaping.sheetColumnId) && m2.csvColumnName !== csvColumnName
  );
  return [...mappingsForOtherSheets, { ...newCsvColumnMaping, csvColumnName }];
}
function calculateMappingExamples(data, csvColumnName) {
  const examples = getFilteredExamples(data, csvColumnName);
  const paddedExamples = padExamples(examples);
  return trimExamplesByCharacterLimit(paddedExamples);
}
function getFilteredExamples(data, csvColumnName) {
  return data.map((d2) => d2[csvColumnName]).filter((v2) => v2 != null && v2.trim() !== "").slice(0, NUMBER_OF_EXAMPLES_IN_MAPPING);
}
function padExamples(examples) {
  const paddedExamples = [
    ...examples,
    ...Array(NUMBER_OF_EXAMPLES_IN_MAPPING - examples.length).fill("")
  ];
  return paddedExamples;
}
function trimExamplesByCharacterLimit(examples) {
  const trimmedExamples = [...examples];
  let totalCharacters = trimmedExamples.reduce(
    (acc, curr) => acc + curr.length,
    0
  );
  while (totalCharacters > MAX_CHARACTERS_IN_MAPPING_EXAMPLES && trimmedExamples.length > 1) {
    trimmedExamples.pop();
    totalCharacters = trimmedExamples.reduce(
      (acc, curr) => acc + curr.length,
      0
    );
  }
  return trimmedExamples;
}
function useMappingAvailableSelectOptions(sheetDefinitions, currentMapping) {
  const { t: t2 } = useTranslations();
  const options = sheetDefinitions.flatMap(
    (sheetDefinition) => sheetDefinition.columns.filter((column) => column.type !== "reference").map((column) => ({
      label: `${column.label}${fieldIsRequired(column) ? " *" : ""}`,
      value: {
        sheetId: sheetDefinition.id,
        sheetColumnId: column.id
      },
      group: currentMapping.some(
        (mapping) => mapping.sheetId === sheetDefinition.id && mapping.sheetColumnId === column.id
      ) ? t2("mapper.used") : t2("mapper.unused")
    }))
  );
  return options.sort((a3, b2) => sortByGroupAndLabel(a3, b2, t2("mapper.unused")));
}
function sortByGroupAndLabel(a3, b2, unused) {
  if (a3.group === unused && b2.group !== unused) {
    return -1;
  }
  if (a3.group !== unused && b2.group === unused) {
    return 1;
  }
  return a3.label.localeCompare(b2.label);
}
function areAllRequiredMappingsSet(sheetDefinitions, mappings) {
  for (const sheet2 of sheetDefinitions) {
    for (const column of sheet2.columns) {
      if (fieldIsRequired(column) && column.type !== "reference") {
        const mapping = mappings.find(
          (m2) => m2.sheetId === sheet2.id && m2.sheetColumnId === column.id
        );
        if (mapping == null) {
          return false;
        }
      }
    }
  }
  return true;
}
function HeaderMapperDataPreview({
  examples,
  csvHeader
}) {
  const { t: t2, tHtml } = useTranslations();
  return csvHeader && /* @__PURE__ */ u$b("div", { className: "m-4 rounded-sm border border-gray-300 bg-white px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u$b("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ u$b("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ u$b("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ u$b("table", { className: "min-w-full divide-y divide-gray-300", children: [
    /* @__PURE__ */ u$b("thead", { children: /* @__PURE__ */ u$b("tr", { children: /* @__PURE__ */ u$b(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8",
        children: tHtml("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ u$b(Badge, { variant: "primary", children: csvHeader })
        })
      }
    ) }) }),
    /* @__PURE__ */ u$b("tbody", { className: "divide-y divide-gray-300", children: examples == null ? void 0 : examples.map((example, idx) => /* @__PURE__ */ u$b("tr", { children: /* @__PURE__ */ u$b("td", { className: "h-12 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: example || idx === 0 && /* @__PURE__ */ u$b("span", { className: "text-gray-500 italic", children: t2("mapper.noData") }) }) }, idx)) })
  ] }) }) }) }) });
}
function HeaderMapperSelection({
  csvHeader,
  setMapping,
  currentMapping,
  mappingSelectionOptions,
  onMouseEnter
}) {
  var _a;
  const currentHeaderOption = currentMapping == null ? null : ((_a = mappingSelectionOptions.find(
    (option) => option.value.sheetId === currentMapping.sheetId && option.value.sheetColumnId === currentMapping.sheetColumnId
  )) == null ? void 0 : _a.value) ?? null;
  return /* @__PURE__ */ u$b(
    "div",
    {
      className: "hover:bg-tertiary-light rounded-sm",
      onMouseEnter,
      children: /* @__PURE__ */ u$b("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ u$b("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ u$b("div", { children: /* @__PURE__ */ u$b(Badge, { variant: "primary", children: csvHeader.slice(0, 30) }) }),
          /* @__PURE__ */ u$b("div", { className: "mx-5", children: /* @__PURE__ */ u$b(ForwardRef$g, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ u$b("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ u$b(
          Select,
          {
            searchable: true,
            clearable: true,
            compareFunction: (a3, b2) => {
              if (a3 == null || b2 == null) {
                return false;
              }
              return a3.sheetColumnId === b2.sheetColumnId && a3.sheetId === b2.sheetId;
            },
            value: currentHeaderOption,
            options: mappingSelectionOptions,
            onChange: (mapping) => setMapping(mapping)
          }
        ) })
      ] })
    }
  );
}
function HeaderMapper({
  parsed,
  sheetDefinitions,
  currentMapping,
  onMappingsChanged,
  onMappingsSet,
  onBack
}) {
  const { t: t2 } = useTranslations();
  const [hoveredCsvHeader, setHoveredCsvHeader] = h$3(null);
  const data = parsed.data;
  const csvHeaders = parsed.meta.fields;
  const mappingSelectOptions = useMappingAvailableSelectOptions(
    sheetDefinitions,
    currentMapping
  );
  const mapingsValid = areAllRequiredMappingsSet(
    sheetDefinitions,
    currentMapping
  );
  const hoveredExamples = T$5(() => {
    if (!hoveredCsvHeader) return [];
    return calculateMappingExamples(data, hoveredCsvHeader);
  }, [hoveredCsvHeader, data]);
  return /* @__PURE__ */ u$b("div", { children: [
    /* @__PURE__ */ u$b("div", { className: "text-2xl", children: "Review and confirm each mapping" }),
    /* @__PURE__ */ u$b("div", { className: "flex justify-between space-x-5", children: [
      /* @__PURE__ */ u$b("div", { className: "flex-2", children: [
        /* @__PURE__ */ u$b("div", { className: "text-sm my-5 flex font-light uppercase", children: [
          /* @__PURE__ */ u$b("div", { className: "flex-1", children: t2("mapper.incomingColumn") }),
          /* @__PURE__ */ u$b("div", { className: "flex-1", children: t2("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ u$b("div", { className: "max-h-[70vh] overflow-y-auto", children: csvHeaders.map((header, columnIndex) => {
          const headerMapping = currentMapping.find(
            (mapping) => mapping.csvColumnName === header
          ) ?? null;
          return /* @__PURE__ */ u$b(
            HeaderMapperSelection,
            {
              csvHeader: header,
              currentMapping: headerMapping,
              setMapping: (headerMapping2) => {
                const newMappings = calculateNewMappingsForCsvColumnMapingChanged(
                  currentMapping,
                  header,
                  headerMapping2
                );
                onMappingsChanged(newMappings);
              },
              mappingSelectionOptions: mappingSelectOptions,
              onMouseEnter: () => {
                setHoveredCsvHeader(header);
              }
            },
            columnIndex
          );
        }) })
      ] }),
      /* @__PURE__ */ u$b("div", { className: "flex-1 bg-gray-50", children: /* @__PURE__ */ u$b(
        HeaderMapperDataPreview,
        {
          examples: hoveredExamples,
          csvHeader: hoveredCsvHeader ?? ""
        }
      ) })
    ] }),
    /* @__PURE__ */ u$b("div", { className: "my-5 flex justify-between", children: [
      /* @__PURE__ */ u$b(Button, { variant: "secondary", outline: true, onClick: onBack, children: t2("mapper.back") }),
      /* @__PURE__ */ u$b(
        Tooltip,
        {
          tooltipText: t2("mapper.mappingsNotValidTooltip"),
          hidden: mapingsValid,
          children: /* @__PURE__ */ u$b(Button, { onClick: onMappingsSet, disabled: !mapingsValid, children: t2("mapper.confirm") })
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
function createColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === "function" ? {
        ...column,
        accessorFn: accessor
      } : {
        ...column,
        accessorKey: accessor
      };
    },
    display: (column) => column,
    group: (column) => column
  };
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function makeStateUpdater(key, instance) {
  return (updater) => {
    instance.setState((old) => {
      return {
        ...old,
        [key]: functionalUpdate(updater, old[key])
      };
    });
  };
}
function isFunction(d2) {
  return d2 instanceof Function;
}
function isNumberArray(d2) {
  return Array.isArray(d2) && d2.every((val) => typeof val === "number");
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = (subArr) => {
    subArr.forEach((item) => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn2, opts) {
  let deps = [];
  let result;
  return (depArgs) => {
    let depTime;
    if (opts.key && opts.debug) depTime = Date.now();
    const newDeps = getDeps(depArgs);
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index2) => deps[index2] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug) resultTime = Date.now();
    result = fn2(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function getMemoOptions(tableOptions, debugLevel, key, onChange) {
  return {
    debug: () => {
      var _tableOptions$debugAl;
      return (_tableOptions$debugAl = tableOptions == null ? void 0 : tableOptions.debugAll) != null ? _tableOptions$debugAl : tableOptions[debugLevel];
    },
    key: false,
    onChange
  };
}
function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table2, column2, row2, cell2) => ({
      table: table2,
      column: column2,
      row: row2,
      cell: cell2,
      getValue: cell2.getValue,
      renderValue: cell2.renderValue
    }), getMemoOptions(table.options, "debugCells"))
  };
  table._features.forEach((feature) => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}
function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = {
    ...defaultColumn,
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? typeof String.prototype.replaceAll === "function" ? accessorKey.replaceAll(".", "_") : accessorKey.replace(/\./g, "_") : void 0) != null ? _ref : typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    if (accessorKey.includes(".")) {
      accessorFn = (originalRow) => {
        let result = originalRow;
        for (const key of accessorKey.split(".")) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
        }
        return result;
      };
    } else {
      accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d2) => d2.getFlatColumns())];
    }, getMemoOptions(table.options, "debugColumns")),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], (orderColumns2) => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap((column2) => column2.getLeafColumns());
        return orderColumns2(leafColumns);
      }
      return [column];
    }, getMemoOptions(table.options, "debugColumns"))
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }
  return column;
}
const debug = "debugHeaders";
function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = (h2) => {
        if (h2.subHeaders && h2.subHeaders.length) {
          h2.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h2);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header,
      column
    })
  };
  table._features.forEach((feature) => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
const Headers = {
  createTable: (table) => {
    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId) => leafColumns.find((d2) => d2.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId) => leafColumns.find((d2) => d2.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, getMemoOptions(table.options, debug));
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, "center");
    }, getMemoOptions(table.options, debug));
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId) => leafColumns.find((d2) => d2.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "left");
    }, getMemoOptions(table.options, debug));
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId) => leafColumns.find((d2) => d2.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "right");
    }, getMemoOptions(table.options, debug));
    table.getFooterGroups = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return headerGroups.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [], ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [], ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []].map((header) => {
        return header.getLeafHeaders();
      }).flat();
    }, getMemoOptions(table.options, debug));
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  let maxDepth = 0;
  const findMaxDepth = function(columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter((column) => column.getIsVisible()).forEach((column) => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join("_"),
      headers: []
    };
    const pendingParentHeaders = [];
    headersToGroup.forEach((headerToGroup) => {
      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        column = headerToGroup.column.parent;
      } else {
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join("_"),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d2) => d2.column === column).length}` : void 0,
          depth,
          index: pendingParentHeaders.length
        });
        header.subHeaders.push(headerToGroup);
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index2) => createHeader(table, column, {
    depth: maxDepth,
    index: index2
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();
  const recurseHeadersForSpans = (headers) => {
    const filteredHeaders = headers.filter((header) => header.column.getIsVisible());
    return filteredHeaders.map((header) => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach((_ref) => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}
const createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (columnId) => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: (columnId) => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: (columnId) => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => flattenBy(row.subRows, (d2) => d2.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : void 0,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow) break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], (leafColumns) => {
      return leafColumns.map((column) => {
        return createCell(table, row, column, column.id);
      });
    }, getMemoOptions(table.options, "debugRows")),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], (allCells) => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, getMemoOptions(table.options, "debugRows"))
  };
  for (let i2 = 0; i2 < table._features.length; i2++) {
    const feature = table._features[i2];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};
const ColumnFaceting = {
  createColumn: (column, table) => {
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return void 0;
      }
      return column._getFacetedMinMaxValues();
    };
  }
};
const includesString = (row, columnId, filterValue) => {
  var _filterValue$toString, _row$getValue;
  const search = filterValue == null || (_filterValue$toString = filterValue.toString()) == null ? void 0 : _filterValue$toString.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = (val) => testFalsey(val);
const includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = (val) => testFalsey(val);
const equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = (val) => testFalsey(val);
const arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = (val) => testFalsey(val);
const arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some((val) => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
const arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some((val) => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
const equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = (val) => testFalsey(val);
const weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = (val) => testFalsey(val);
const inNumberRange = (row, columnId, filterValue) => {
  let [min2, max2] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min2 && rowValue <= max2;
};
inNumberRange.resolveFilterValue = (val) => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
  let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min2 > max2) {
    const temp = min2;
    min2 = max2;
    max2 = temp;
  }
  return [min2, max2];
};
inNumberRange.autoRemove = (val) => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
const filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
function testFalsey(val) {
  return val === void 0 || val === null || val === "";
}
const ColumnFiltering = {
  getDefaultColumnDef: () => {
    return {
      filterFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      columnFilters: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnFiltersChange: makeStateUpdater("columnFilters", table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return filterFns.includesString;
      }
      if (typeof value === "number") {
        return filterFns.inNumberRange;
      }
      if (typeof value === "boolean") {
        return filterFns.equals;
      }
      if (value !== null && typeof value === "object") {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column.getAutoFilterFn() : (
        // @ts-ignore
        (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn]
      );
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find((d2) => d2.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex((d2) => d2.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = (value) => {
      table.setColumnFilters((old) => {
        const filterFn = column.getFilterFn();
        const previousFilter = old == null ? void 0 : old.find((d2) => d2.id === column.id);
        const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : void 0);
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter((d2) => d2.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousFilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map((d2) => {
            if (d2.id === column.id) {
              return newFilterObj;
            }
            return d2;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
  },
  createRow: (row, _table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: (table) => {
    table.setColumnFilters = (updater) => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = (old) => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter) => {
          const column = leafColumns.find((d2) => d2.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.resetColumnFilters = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === "undefined" || typeof value === "string" && !value;
}
const sum = (columnId, _leafRows, childRows) => {
  return childRows.reduce((sum2, next) => {
    const nextValue = next.getValue(columnId);
    return sum2 + (typeof nextValue === "number" ? nextValue : 0);
  }, 0);
};
const min = (columnId, _leafRows, childRows) => {
  let min2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
      min2 = value;
    }
  });
  return min2;
};
const max = (columnId, _leafRows, childRows) => {
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
      max2 = value;
    }
  });
  return max2;
};
const extent = (columnId, _leafRows, childRows) => {
  let min2;
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min2 === void 0) {
        if (value >= value) min2 = max2 = value;
      } else {
        if (min2 > value) min2 = value;
        if (max2 < value) max2 = value;
      }
    }
  });
  return [min2, max2];
};
const mean = (columnId, leafRows) => {
  let count2 = 0;
  let sum2 = 0;
  leafRows.forEach((row) => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count2, sum2 += value;
    }
  });
  if (count2) return sum2 / count2;
  return;
};
const median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map((row) => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a3, b2) => a3 - b2);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
const unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map((d2) => d2.getValue(columnId))).values());
};
const uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map((d2) => d2.getValue(columnId))).size;
};
const count = (_columnId, leafRows) => {
  return leafRows.length;
};
const aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};
const ColumnGrouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: (props) => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      grouping: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onGroupingChange: makeStateUpdater("grouping", table),
      groupedColumnMode: "reorder"
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping((old) => {
        if (old != null && old.includes(column.id)) {
          return old.filter((d2) => d2 !== column.id);
        }
        return [...old != null ? old : [], column.id];
      });
    };
    column.getCanGroup = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGrouping) != null ? _table$options$enable : true) && (!!column.accessorFn || !!column.columnDef.getGroupingValue);
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup) return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "number") {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === "[object Date]") {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === "auto" ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: (table) => {
    table.setGrouping = (updater) => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = (defaultState) => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = (columnId) => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
  if (groupedColumnMode === "remove") {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map((g2) => leafColumns.find((col) => col.id === g2)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}
const ColumnOrdering = {
  getInitialState: (state) => {
    return {
      columnOrder: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnOrderChange: makeStateUpdater("columnOrder", table)
    };
  },
  createColumn: (column, table) => {
    column.getIndex = memo((position) => [_getVisibleLeafColumns(table, position)], (columns) => columns.findIndex((d2) => d2.id === column.id), getMemoOptions(table.options, "debugColumns"));
    column.getIsFirstColumn = (position) => {
      var _columns$;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns$ = columns[0]) == null ? void 0 : _columns$.id) === column.id;
    };
    column.getIsLastColumn = (position) => {
      var _columns;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns = columns[columns.length - 1]) == null ? void 0 : _columns.id) === column.id;
    };
  },
  createTable: (table) => {
    table.setColumnOrder = (updater) => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = (defaultState) => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => (columns) => {
      let orderedColumns = [];
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns;
      } else {
        const columnOrderCopy = [...columnOrder];
        const columnsCopy = [...columns];
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex((d2) => d2.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, getMemoOptions(table.options, "debugTable"));
  }
};
const getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
const ColumnPinning = {
  getInitialState: (state) => {
    return {
      columnPinning: getDefaultColumnPinningState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnPinningChange: makeStateUpdater("columnPinning", table)
    };
  },
  createColumn: (column, table) => {
    column.pin = (position) => {
      const columnIds = column.getLeafColumns().map((d2) => d2.id).filter(Boolean);
      table.setColumnPinning((old) => {
        var _old$left3, _old$right3;
        if (position === "right") {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d2) => !(columnIds != null && columnIds.includes(d2))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d2) => !(columnIds != null && columnIds.includes(d2))), ...columnIds]
          };
        }
        if (position === "left") {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d2) => !(columnIds != null && columnIds.includes(d2))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d2) => !(columnIds != null && columnIds.includes(d2)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d2) => !(columnIds != null && columnIds.includes(d2))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d2) => !(columnIds != null && columnIds.includes(d2)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some((d2) => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d2.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map((d2) => d2.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some((d2) => left == null ? void 0 : left.includes(d2));
      const isRight = leafColumnIds.some((d2) => right == null ? void 0 : right.includes(d2));
      return isLeft ? "left" : isRight ? "right" : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allCells.filter((d2) => !leftAndRight.includes(d2.column.id));
    }, getMemoOptions(table.options, "debugRows"));
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left], (allCells, left) => {
      const cells = (left != null ? left : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d2) => ({
        ...d2,
        position: "left"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows"));
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d2) => ({
        ...d2,
        position: "right"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows"));
  },
  createTable: (table) => {
    table.setColumnPinning = (updater) => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns"));
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns"));
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allColumns.filter((d2) => !leftAndRight.includes(d2.id));
    }, getMemoOptions(table.options, "debugColumns"));
  }
};
const defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
const getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
const ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: (state) => {
    return {
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: makeStateUpdater("columnSizing", table),
      onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(0, column.getIndex(position)).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns"));
    column.getAfter = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(column.getIndex(position) + 1).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns"));
    column.resetSize = () => {
      table.setColumnSizing((_ref2) => {
        let {
          [column.id]: _2,
          ...rest
        } = _ref2;
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum2 = 0;
      const recurse = (header2) => {
        if (header2.subHeaders.length) {
          header2.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum2 += (_header$column$getSiz = header2.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum2;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = (_contextDocument) => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return (e2) => {
        if (!column || !canResize) {
          return;
        }
        e2.persist == null || e2.persist();
        if (isTouchStartEvent(e2)) {
          if (e2.touches && e2.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map((d2) => [d2.column.id, d2.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e2) ? Math.round(e2.touches[0].clientX) : e2.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== "number") {
            return;
          }
          table.setColumnSizingInfo((old) => {
            var _old$startOffset, _old$startSize;
            const deltaDirection = table.options.columnResizeDirection === "rtl" ? -1 : 1;
            const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach((_ref3) => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return {
              ...old,
              deltaOffset,
              deltaPercentage
            };
          });
          if (table.options.columnResizeMode === "onChange" || eventType === "end") {
            table.setColumnSizing((old) => ({
              ...old,
              ...newColumnSizing
            }));
          }
        };
        const onMove = (clientXPos) => updateOffset("move", clientXPos);
        const onEnd = (clientXPos) => {
          updateOffset("end", clientXPos);
          table.setColumnSizingInfo((old) => ({
            ...old,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const contextDocument = _contextDocument || typeof document !== "undefined" ? document : null;
        const mouseEvents = {
          moveHandler: (e22) => onMove(e22.clientX),
          upHandler: (e22) => {
            contextDocument == null || contextDocument.removeEventListener("mousemove", mouseEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("mouseup", mouseEvents.upHandler);
            onEnd(e22.clientX);
          }
        };
        const touchEvents = {
          moveHandler: (e22) => {
            if (e22.cancelable) {
              e22.preventDefault();
              e22.stopPropagation();
            }
            onMove(e22.touches[0].clientX);
            return false;
          },
          upHandler: (e22) => {
            var _e$touches$;
            contextDocument == null || contextDocument.removeEventListener("touchmove", touchEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("touchend", touchEvents.upHandler);
            if (e22.cancelable) {
              e22.preventDefault();
              e22.stopPropagation();
            }
            onEnd((_e$touches$ = e22.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e2)) {
          contextDocument == null || contextDocument.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
        } else {
          contextDocument == null || contextDocument.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo((old) => ({
          ...old,
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: (table) => {
    table.setColumnSizing = (updater) => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = (updater) => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = (defaultState) => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = (defaultState) => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
let passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === "boolean") return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop2 = () => {
    };
    window.addEventListener("test", noop2, options);
    window.removeEventListener("test", noop2);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e2) {
  return e2.type === "touchstart";
}
const ColumnVisibility = {
  getInitialState: (state) => {
    return {
      columnVisibility: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnVisibilityChange: makeStateUpdater("columnVisibility", table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = (value) => {
      if (column.getCanHide()) {
        table.setColumnVisibility((old) => ({
          ...old,
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _ref, _table$getState$colum;
      const childColumns = column.columns;
      return (_ref = childColumns.length ? childColumns.some((c2) => c2.getIsVisible()) : (_table$getState$colum = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum[column.id]) != null ? _ref : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return (e2) => {
        column.toggleVisibility == null || column.toggleVisibility(e2.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], (cells) => {
      return cells.filter((cell) => cell.column.getIsVisible());
    }, getMemoOptions(table.options, "debugRows"));
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], getMemoOptions(table.options, "debugRows"));
  },
  createTable: (table) => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter((d2) => d2.getIsVisible()).map((d2) => d2.id).join("_")], (columns) => {
        return columns.filter((d2) => d2.getIsVisible == null ? void 0 : d2.getIsVisible());
      }, getMemoOptions(table.options, "debugColumns"));
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod("getVisibleFlatColumns", () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod("getVisibleLeafColumns", () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod("getLeftVisibleLeafColumns", () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod("getRightVisibleLeafColumns", () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod("getCenterVisibleLeafColumns", () => table.getCenterLeafColumns());
    table.setColumnVisibility = (updater) => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = (defaultState) => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = (value) => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
        ...obj,
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some((column) => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some((column) => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return (e2) => {
        var _target;
        table.toggleAllColumnsVisible((_target = e2.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
function _getVisibleLeafColumns(table, position) {
  return !position ? table.getVisibleLeafColumns() : position === "center" ? table.getCenterVisibleLeafColumns() : position === "left" ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
}
const GlobalFaceting = {
  createTable: (table) => {
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, "__global__");
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, "__global__");
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, "__global__");
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};
const GlobalFiltering = {
  getInitialState: (state) => {
    return {
      globalFilter: void 0,
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onGlobalFilterChange: makeStateUpdater("globalFilter", table),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (column) => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === "string" || typeof value === "number";
      }
    };
  },
  createColumn: (column, table) => {
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2, _table$options$getCol;
      return ((_column$columnDef$ena = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGlobalFilter) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
  },
  createTable: (table) => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      const {
        globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table.getGlobalAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[globalFilterFn]) != null ? _table$options$filter : filterFns[globalFilterFn];
    };
    table.setGlobalFilter = (updater) => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = (defaultState) => {
      table.setGlobalFilter(defaultState ? void 0 : table.initialState.globalFilter);
    };
  }
};
const RowExpanding = {
  getInitialState: (state) => {
    return {
      expanded: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onExpandedChange: makeStateUpdater("expanded", table),
      paginateExpandedRows: true
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = (updater) => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = (expanded) => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = (defaultState) => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some((row) => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return (e2) => {
        e2.persist == null || e2.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;
      if (typeof expanded === "boolean") {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }
      if (table.getRowModel().flatRows.some((row) => !row.getIsExpanded())) {
        return false;
      }
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach((id) => {
        const splitId = id.split(".");
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = (expanded) => {
      table.setExpanded((old) => {
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach((rowId) => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return {
            ...oldExpanded,
            [row.id]: true
          };
        }
        if (exists && !expanded) {
          const {
            [row.id]: _2,
            ...rest
          } = oldExpanded;
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand) return;
        row.toggleExpanded();
      };
    };
  }
};
const defaultPageIndex = 0;
const defaultPageSize = 10;
const getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
const RowPagination = {
  getInitialState: (state) => {
    return {
      ...state,
      pagination: {
        ...getDefaultPaginationState(),
        ...state == null ? void 0 : state.pagination
      }
    };
  },
  getDefaultOptions: (table) => {
    return {
      onPaginationChange: makeStateUpdater("pagination", table)
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = (updater) => {
      const safeUpdater = (old) => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = (defaultState) => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = (updater) => {
      table.setPagination((old) => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return {
          ...old,
          pageIndex
        };
      });
    };
    table.resetPageIndex = (defaultState) => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = (defaultState) => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = (updater) => {
      table.setPagination((old) => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return {
          ...old,
          pageIndex,
          pageSize
        };
      });
    };
    table.setPageCount = (updater) => table.setPagination((old) => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === "number") {
        newPageCount = Math.max(-1, newPageCount);
      }
      return {
        ...old,
        pageCount: newPageCount
      };
    });
    table.getPageOptions = memo(() => [table.getPageCount()], (pageCount) => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_2, i2) => i2);
      }
      return pageOptions;
    }, getMemoOptions(table.options, "debugTable"));
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex((old) => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex((old) => {
        return old + 1;
      });
    };
    table.firstPage = () => {
      return table.setPageIndex(0);
    };
    table.lastPage = () => {
      return table.setPageIndex(table.getPageCount() - 1);
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getRowCount() / table.getState().pagination.pageSize);
    };
    table.getRowCount = () => {
      var _table$options$rowCou;
      return (_table$options$rowCou = table.options.rowCount) != null ? _table$options$rowCou : table.getPrePaginationRowModel().rows.length;
    };
  }
};
const getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
const RowPinning = {
  getInitialState: (state) => {
    return {
      rowPinning: getDefaultRowPinningState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onRowPinningChange: makeStateUpdater("rowPinning", table)
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map((_ref) => {
        let {
          id
        } = _ref;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map((_ref2) => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const rowIds = /* @__PURE__ */ new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning((old) => {
        var _old$top3, _old$bottom3;
        if (position === "bottom") {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter((d2) => !(rowIds != null && rowIds.has(d2))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter((d2) => !(rowIds != null && rowIds.has(d2))), ...Array.from(rowIds)]
          };
        }
        if (position === "top") {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter((d2) => !(rowIds != null && rowIds.has(d2))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter((d2) => !(rowIds != null && rowIds.has(d2)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter((d2) => !(rowIds != null && rowIds.has(d2))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter((d2) => !(rowIds != null && rowIds.has(d2)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref3;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === "function") {
        return enableRowPinning(row);
      }
      return (_ref3 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref3 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some((d2) => top == null ? void 0 : top.includes(d2));
      const isBottom = rowIds.some((d2) => bottom == null ? void 0 : bottom.includes(d2));
      return isTop ? "top" : isBottom ? "bottom" : false;
    };
    row.getPinnedIndex = () => {
      var _ref4, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position) return -1;
      const visiblePinnedRowIds = (_ref4 = position === "top" ? table.getTopRows() : table.getBottomRows()) == null ? void 0 : _ref4.map((_ref5) => {
        let {
          id
        } = _ref5;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
  },
  createTable: (table) => {
    table.setRowPinning = (updater) => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = (defaultState) => {
      var _table$initialState$r, _table$initialState;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table._getPinnedRows = (visibleRows, pinnedRowIds, position) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => {
          const row = table.getRow(rowId, true);
          return row.getIsAllParentsExpanded() ? row : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => visibleRows.find((row) => row.id === rowId))
      );
      return rows.filter(Boolean).map((d2) => ({
        ...d2,
        position
      }));
    };
    table.getTopRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top], (allRows, topPinnedRowIds) => table._getPinnedRows(allRows, topPinnedRowIds, "top"), getMemoOptions(table.options, "debugRows"));
    table.getBottomRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.bottom], (allRows, bottomPinnedRowIds) => table._getPinnedRows(allRows, bottomPinnedRowIds, "bottom"), getMemoOptions(table.options, "debugRows"));
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = /* @__PURE__ */ new Set([...top != null ? top : [], ...bottom != null ? bottom : []]);
      return allRows.filter((d2) => !topAndBottom.has(d2.id));
    }, getMemoOptions(table.options, "debugRows"));
  }
};
const RowSelection = {
  getInitialState: (state) => {
    return {
      rowSelection: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onRowSelectionChange: makeStateUpdater("rowSelection", table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },
  createTable: (table) => {
    table.setRowSelection = (updater) => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = (defaultState) => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = (value) => {
      table.setRowSelection((old) => {
        value = typeof value !== "undefined" ? value : !table.getIsAllRowsSelected();
        const rowSelection = {
          ...old
        };
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
        if (value) {
          preGroupedFlatRows.forEach((row) => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach((row) => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = (value) => table.setRowSelection((old) => {
      const resolvedValue = typeof value !== "undefined" ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = {
        ...old
      };
      table.getRowModel().rows.forEach((row) => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable"));
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable"));
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable"));
    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some((row) => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row) => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some((row) => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row) => row.getCanSelect()).some((d2) => d2.getIsSelected() || d2.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return (e2) => {
        table.toggleAllRowsSelected(e2.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return (e2) => {
        table.toggleAllPageRowsSelected(e2.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection((old) => {
        var _opts$selectChildren;
        value = typeof value !== "undefined" ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = {
          ...old
        };
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "some";
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "all";
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === "function") {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === "function") {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === "function") {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return (e2) => {
        var _target;
        if (!canSelect) return;
        row.toggleSelected((_target = e2.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
const mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id, true);
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach((row2) => mutateRowIsSelected(selectedRowIds, row2.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};
  const recurseRows = function(rows, depth) {
    return rows.map((row) => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = {
          ...row,
          subRows: recurseRows(row.subRows)
        };
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length)) return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach((subRow) => {
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === "all") {
        someSelected = true;
      } else if (subRowChildrenSelected === "some") {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? "all" : someSelected ? "some" : false;
}
const reSplitAlphaNumeric = /([0-9]+)/gm;
const alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const datetime = (rowA, rowB, columnId) => {
  const a3 = rowA.getValue(columnId);
  const b2 = rowB.getValue(columnId);
  return a3 > b2 ? 1 : a3 < b2 ? -1 : 0;
};
const basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};
function compareBasic(a3, b2) {
  return a3 === b2 ? 0 : a3 > b2 ? 1 : -1;
}
function toString(a3) {
  if (typeof a3 === "number") {
    if (isNaN(a3) || a3 === Infinity || a3 === -Infinity) {
      return "";
    }
    return String(a3);
  }
  if (typeof a3 === "string") {
    return a3;
  }
  return "";
}
function compareAlphanumeric(aStr, bStr) {
  const a3 = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b2 = bStr.split(reSplitAlphaNumeric).filter(Boolean);
  while (a3.length && b2.length) {
    const aa = a3.shift();
    const bb = b2.shift();
    const an2 = parseInt(aa, 10);
    const bn2 = parseInt(bb, 10);
    const combo = [an2, bn2].sort();
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }
    if (isNaN(combo[1])) {
      return isNaN(an2) ? -1 : 1;
    }
    if (an2 > bn2) {
      return 1;
    }
    if (bn2 > an2) {
      return -1;
    }
  }
  return a3.length - b2.length;
}
const sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};
const RowSorting = {
  getInitialState: (state) => {
    return {
      sorting: [],
      ...state
    };
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: "auto",
      sortUndefined: 1
    };
  },
  getDefaultOptions: (table) => {
    return {
      onSortingChange: makeStateUpdater("sorting", table),
      isMultiSortEvent: (e2) => {
        return e2.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === "[object Date]") {
          return sortingFns.datetime;
        }
        if (typeof value === "string") {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return "asc";
      }
      return "desc";
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === "auto" ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== "undefined" && desc !== null;
      table.setSorting((old) => {
        const existingSorting = old == null ? void 0 : old.find((d2) => d2.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex((d2) => d2.id === column.id);
        let newSorting = [];
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "add";
          }
        } else {
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = "replace";
          } else if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "replace";
          }
        }
        if (sortAction === "toggle") {
          if (!hasManualValue) {
            if (!nextSortingOrder) {
              sortAction = "remove";
            }
          }
        }
        if (sortAction === "add") {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === "toggle") {
          newSorting = old.map((d2) => {
            if (d2.id === column.id) {
              return {
                ...d2,
                desc: nextDesc
              };
            }
            return d2;
          });
        } else if (sortAction === "remove") {
          newSorting = old.filter((d2) => d2.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === "desc";
      return sortDescFirst ? "desc" : "asc";
    };
    column.getNextSortingOrder = (multi) => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && // If enableSortRemove, enable in general
      (multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true)) {
        return false;
      }
      return isSorted === "desc" ? "asc" : "desc";
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d2) => d2.id === column.id);
      return !columnSort ? false : columnSort.desc ? "desc" : "asc";
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d2) => d2.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      table.setSorting((old) => old != null && old.length ? old.filter((d2) => d2.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return (e2) => {
        if (!canSort) return;
        e2.persist == null || e2.persist();
        column.toggleSorting == null || column.toggleSorting(void 0, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e2) : false);
      };
    };
  },
  createTable: (table) => {
    table.setSorting = (updater) => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = (defaultState) => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};
const builtInFeatures = [
  Headers,
  ColumnVisibility,
  ColumnOrdering,
  ColumnPinning,
  ColumnFaceting,
  ColumnFiltering,
  GlobalFaceting,
  //depends on ColumnFaceting
  GlobalFiltering,
  //depends on ColumnFiltering
  RowSorting,
  ColumnGrouping,
  //depends on RowSorting
  RowExpanding,
  RowPagination,
  RowPinning,
  RowSelection,
  ColumnSizing
];
function createTable(options) {
  var _options$_features, _options$initialState;
  const _features = [...builtInFeatures, ...(_options$_features = options._features) != null ? _options$_features : []];
  let table = {
    _features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = (options2) => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options2);
    }
    return {
      ...defaultOptions,
      ...options2
    };
  };
  const coreInitialState = {};
  let initialState = {
    ...coreInitialState,
    ...(_options$initialState = options.initialState) != null ? _options$initialState : {}
  };
  table._features.forEach((feature) => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features,
    options: {
      ...defaultOptions,
      ...options
    },
    initialState,
    _queue: (cb) => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch((error) => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: (updater) => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: (updater) => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index2, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index2, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index2].join(".") : index2}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (id, searchAll) => {
      let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          throw new Error();
        }
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], (defaultColumn) => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return {
        header: (props) => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: (props) => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        },
        ...table._features.reduce((obj, feature) => {
          return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
        }, {}),
        ...defaultColumn
      };
    }, getMemoOptions(options, "debugColumns")),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], (columnDefs) => {
      const recurseColumns = function(columnDefs2, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs2.map((columnDef) => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, getMemoOptions(options, "debugColumns")),
    getAllFlatColumns: memo(() => [table.getAllColumns()], (allColumns) => {
      return allColumns.flatMap((column) => {
        return column.getFlatColumns();
      });
    }, getMemoOptions(options, "debugColumns")),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], (flatColumns) => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, getMemoOptions(options, "debugColumns")),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns2) => {
      let leafColumns = allColumns.flatMap((column) => column.getLeafColumns());
      return orderColumns2(leafColumns);
    }, getMemoOptions(options, "debugColumns")),
    getColumn: (columnId) => {
      const column = table._getAllFlatColumnsById()[columnId];
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index2 = 0; index2 < table._features.length; index2++) {
    const feature = table._features[index2];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}
function getCoreRowModel() {
  return (table) => memo(() => [table.options.data], (data) => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function(originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i2 = 0; i2 < originalRows.length; i2++) {
        const row = createRow(table, table._getRowId(originalRows[i2], i2, parentRow), originalRows[i2], i2, depth, void 0, parentRow == null ? void 0 : parentRow.id);
        rowModel.flatRows.push(row);
        rowModel.rowsById[row.id] = row;
        rows.push(row);
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i2], i2);
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, getMemoOptions(table.options, "debugTable", "getRowModel", () => table._autoResetPageIndex()));
}
function getSortedRowModel() {
  return (table) => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
    if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
      return rowModel;
    }
    const sortingState = table.getState().sorting;
    const sortedFlatRows = [];
    const availableSorting = sortingState.filter((sort) => {
      var _table$getColumn;
      return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
    });
    const columnInfoById = {};
    availableSorting.forEach((sortEntry) => {
      const column = table.getColumn(sortEntry.id);
      if (!column) return;
      columnInfoById[sortEntry.id] = {
        sortUndefined: column.columnDef.sortUndefined,
        invertSorting: column.columnDef.invertSorting,
        sortingFn: column.getSortingFn()
      };
    });
    const sortData = (rows) => {
      const sortedData = rows.map((row) => ({
        ...row
      }));
      sortedData.sort((rowA, rowB) => {
        for (let i2 = 0; i2 < availableSorting.length; i2 += 1) {
          var _sortEntry$desc;
          const sortEntry = availableSorting[i2];
          const columnInfo = columnInfoById[sortEntry.id];
          const sortUndefined = columnInfo.sortUndefined;
          const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
          let sortInt = 0;
          if (sortUndefined) {
            const aValue = rowA.getValue(sortEntry.id);
            const bValue = rowB.getValue(sortEntry.id);
            const aUndefined = aValue === void 0;
            const bUndefined = bValue === void 0;
            if (aUndefined || bUndefined) {
              if (sortUndefined === "first") return aUndefined ? -1 : 1;
              if (sortUndefined === "last") return aUndefined ? 1 : -1;
              sortInt = aUndefined && bUndefined ? 0 : aUndefined ? sortUndefined : -sortUndefined;
            }
          }
          if (sortInt === 0) {
            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
          }
          if (sortInt !== 0) {
            if (isDesc) {
              sortInt *= -1;
            }
            if (columnInfo.invertSorting) {
              sortInt *= -1;
            }
            return sortInt;
          }
        }
        return rowA.index - rowB.index;
      });
      sortedData.forEach((row) => {
        var _row$subRows;
        sortedFlatRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
          row.subRows = sortData(row.subRows);
        }
      });
      return sortedData;
    };
    return {
      rows: sortData(rowModel.rows),
      flatRows: sortedFlatRows,
      rowsById: rowModel.rowsById
    };
  }, getMemoOptions(table.options, "debugTable", "getSortedRowModel", () => table._autoResetPageIndex()));
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
function flexRender(Comp, props) {
  return !Comp ? null : isReactComponent(Comp) ? /* @__PURE__ */ g$3(Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === "function" && (() => {
    const proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  })();
}
function isExoticComponent(component) {
  return typeof component === "object" && typeof component.$$typeof === "symbol" && ["react.memo", "react.forward_ref"].includes(component.$$typeof.description);
}
function useReactTable(options) {
  const resolvedOptions = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...options
  };
  const [tableRef] = h$3(() => ({
    current: createTable(resolvedOptions)
  }));
  const [state, setState] = h$3(() => tableRef.current.initialState);
  tableRef.current.setOptions((prev) => ({
    ...prev,
    ...options,
    state: {
      ...state,
      ...options.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (updater) => {
      setState(updater);
      options.onStateChange == null || options.onStateChange(updater);
    }
  }));
  return tableRef.current;
}
function SheetDataEditorCell({
  columnDefinition,
  value,
  onUpdated,
  allData,
  clearRowsSelection,
  errorsText
}) {
  var _a;
  const { t: t2 } = useTranslations();
  const [editMode, setEditMode] = h$3(false);
  const inputRef = A$3(null);
  y$5(() => {
    if (editMode) {
      clearRowsSelection();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [editMode]);
  const extractedValue = columnDefinition.type === "enum" ? ((_a = columnDefinition.typeArguments.values.find((e2) => e2.value === value)) == null ? void 0 : _a.label) ?? value : value;
  const valueEmpty = extractedValue == null || typeof extractedValue === "string" && extractedValue.trim() === "";
  const nonEmptyValue = valueEmpty ? " " : extractedValue;
  const readOnly = columnDefinition.isReadOnly;
  const cellBackgroundColor = errorsText ? "bg-danger-extra-light" : readOnly ? "bg-gray-100" : "";
  if (!editMode) {
    return /* @__PURE__ */ u$b(
      SheetTooltip,
      {
        variant: errorsText ? "error" : "info",
        tooltipText: errorsText ? errorsText : readOnly ? t2("sheet.readOnly") : "",
        children: /* @__PURE__ */ u$b(
          "div",
          {
            onClick: (e2) => !readOnly && e2.detail > 1 && setEditMode(true),
            className: `h-full w-full py-4 pr-3 pl-4 ${cellBackgroundColor}`,
            children: nonEmptyValue
          }
        )
      }
    );
  }
  function updateValue(value2) {
    setEditMode(false);
    if (columnDefinition.type === "number" && value2 !== "" && !isNaN(Number(value2))) {
      onUpdated(Number(value2));
    } else {
      onUpdated(value2 ?? "");
    }
  }
  if (columnDefinition.type === "reference") {
    const referenceData = extractReferenceColumnPossibleValues(
      columnDefinition,
      allData
    );
    const selectOptions = referenceData.map((value2) => ({
      label: value2,
      value: value2
    }));
    return /* @__PURE__ */ u$b(
      Select,
      {
        options: selectOptions,
        value,
        onChange: (value2) => updateValue(value2 ?? "")
      }
    );
  }
  if (columnDefinition.type === "enum") {
    const enumArguments = columnDefinition.typeArguments;
    const selectOptions = enumArguments.values;
    return /* @__PURE__ */ u$b(
      Select,
      {
        options: selectOptions,
        value,
        onChange: (value2) => updateValue(value2 ?? "")
      }
    );
  }
  return /* @__PURE__ */ u$b(
    Input,
    {
      type: columnDefinition.type === "number" ? "number" : "text",
      classes: "block w-full",
      value,
      onBlur: updateValue,
      ref: inputRef
    }
  );
}
function SheetDataEditorTable({
  table,
  sheetDefinition,
  visibleData,
  allData,
  sheetValidationErrors,
  onCellValueChanged,
  selectedRows,
  setSelectedRows
}) {
  const { t: t2 } = useTranslations();
  function cellErrors(columnId, rowIndex) {
    return sheetValidationErrors.filter(
      (validation) => validation.columnId === columnId && validation.rowIndex === rowIndex
    );
  }
  const selectAllChecked = selectedRows.length === visibleData.length && visibleData.length > 0;
  function toggleSelectAll() {
    if (selectAllChecked) {
      setSelectedRows([]);
    } else {
      setSelectedRows(visibleData);
    }
  }
  function toggleRowSelection(row) {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((r2) => r2 !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  }
  const headerClass = "bg-gray-100 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 whitespace-nowrap border-y border-gray-300";
  const cellClass = "text-sm font-medium whitespace-nowrap text-gray-900 border-b border-gray-300";
  return /* @__PURE__ */ u$b("div", { className: "max-h-[80vh] overflow-auto", children: /* @__PURE__ */ u$b("table", { className: "min-w-full border-separate border-spacing-0", children: [
    /* @__PURE__ */ u$b("thead", { className: "sticky top-0 z-10 bg-gray-100", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ u$b("tr", { children: [
      /* @__PURE__ */ u$b("th", { className: `${headerClass} sticky left-0 z-20`, children: /* @__PURE__ */ u$b(
        Checkbox,
        {
          id: `Select all checkbox for ${sheetDefinition.id}`,
          checked: selectAllChecked,
          setChecked: toggleSelectAll
        }
      ) }),
      headerGroup.headers.map((header) => /* @__PURE__ */ u$b("th", { className: `z-10 min-w-48 ${headerClass}`, children: /* @__PURE__ */ u$b(
        "div",
        {
          className: `flex ${header.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
          onClick: header.column.getToggleSortingHandler(),
          children: [
            header.isPlaceholder ? null : flexRender(
              header.column.columnDef.header,
              header.getContext()
            ),
            /* @__PURE__ */ u$b("span", { className: "ml-2 flex-none rounded-sm bg-gray-500 text-gray-200", children: {
              asc: /* @__PURE__ */ u$b(
                ForwardRef$2,
                {
                  "aria-hidden": "true",
                  className: "size-5"
                }
              ),
              desc: /* @__PURE__ */ u$b(
                ForwardRef$4,
                {
                  "aria-hidden": "true",
                  className: "size-5"
                }
              )
            }[header.column.getIsSorted()] ?? null })
          ]
        }
      ) }, header.id))
    ] }, headerGroup.id)) }),
    /* @__PURE__ */ u$b("tbody", { className: "divide-y divide-gray-200", children: table.getRowModel().rows.map((row) => /* @__PURE__ */ u$b("tr", { children: [
      /* @__PURE__ */ u$b(
        "td",
        {
          className: `bg-gray-100 ${cellClass} sticky left-0 z-5 py-3.5 pr-3 pl-4`,
          children: /* @__PURE__ */ u$b(
            Checkbox,
            {
              id: `Selection checkbox for ${sheetDefinition.id} ${row.id}`,
              checked: selectedRows.includes(row.original),
              setChecked: () => toggleRowSelection(row.original),
              label: `${Number(row.id) + 1}`
            }
          )
        }
      ),
      row.getVisibleCells().map((cell, cellIndex) => {
        const columnId = sheetDefinition.columns[cellIndex].id;
        const rowIndex = findRowIndex(
          allData,
          sheetDefinition.id,
          row.original
        );
        const cellErrorsText = cellErrors(columnId, rowIndex).map((e2) => t2(e2.message)).join(", ");
        return /* @__PURE__ */ u$b("td", { className: cellClass, children: /* @__PURE__ */ u$b(
          SheetDataEditorCell,
          {
            columnDefinition: sheetDefinition.columns.find((c2) => c2.id === columnId),
            allData,
            value: cell.getValue(),
            onUpdated: (value) => onCellValueChanged(rowIndex, columnId, value),
            clearRowsSelection: () => setSelectedRows([]),
            errorsText: cellErrorsText
          }
        ) }, cell.id);
      })
    ] }, row.id)) })
  ] }) });
}
function SheetDataEditorHeader({ column }) {
  const { t: t2 } = useTranslations();
  return /* @__PURE__ */ u$b(
    "div",
    {
      className: "flex items-center",
      title: column.isReadOnly ? t2("sheet.readOnly") : void 0,
      children: [
        column.isReadOnly && /* @__PURE__ */ u$b("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ u$b(ForwardRef$6, { className: "absolute top-0 left-0 h-5 w-5 text-gray-400" }),
          /* @__PURE__ */ u$b(ForwardRef$9, { className: "absolute top-0 left-0 h-5 w-5 text-gray-500" })
        ] }),
        column.label,
        " ",
        fieldIsRequired(column) && "*"
      ]
    }
  );
}
function SheetDataEditorActions({
  sheetDefinition,
  rowData,
  selectedRows,
  setSelectedRows,
  viewMode,
  setViewMode,
  searchPhrase,
  setSearchPhrase,
  errorColumnFilter,
  setErrorColumnFilter,
  removeRows,
  addEmptyRow,
  sheetValidationErrors,
  rowValidationSummary,
  resetState
}) {
  const { t: t2 } = useTranslations();
  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] = h$3(false);
  const [resetConfirmationModalOpen, setResetConfirmationModalOpen] = h$3(false);
  const disabledButtonClasses = "pointer-events-none cursor-not-allowed opacity-50";
  function errorFilterOption(columnId) {
    const columnDefinition = sheetDefinition.columns.find(
      (c2) => c2.id === columnId
    );
    const count2 = removeDuplicates(
      sheetValidationErrors.filter((error) => error.columnId === columnId).map((row) => row.rowIndex)
    ).length;
    return {
      label: `${(columnDefinition == null ? void 0 : columnDefinition.label) || columnId} (${count2})`,
      value: columnId
    };
  }
  const filterByErrorOptions = removeDuplicates(
    sheetValidationErrors.map((error) => error.columnId)
  ).map((columnId) => errorFilterOption(columnId));
  if (errorColumnFilter != null && filterByErrorOptions.find((option) => option.value === errorColumnFilter) == null) {
    filterByErrorOptions.push(errorFilterOption(errorColumnFilter));
  }
  const viewModeButtons = [
    {
      value: "all",
      label: t2("sheet.all") + ` (${rowValidationSummary.all})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: t2("sheet.valid") + ` (${rowValidationSummary.valid})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: t2("sheet.invalid") + ` (${rowValidationSummary.errors})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode("errors");
      },
      variant: "danger"
    }
  ];
  function onRemoveRows() {
    removeRows({ rows: selectedRows, sheetId: sheetDefinition.id });
    setSelectedRows([]);
  }
  return /* @__PURE__ */ u$b("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ u$b("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ u$b("div", { children: /* @__PURE__ */ u$b(ButtonGroup, { activeButton: viewMode, buttons: viewModeButtons }) }),
      /* @__PURE__ */ u$b(
        Input,
        {
          clearable: true,
          value: searchPhrase,
          onChange: (v2) => setSearchPhrase(v2),
          placeholder: t2("sheet.search"),
          iconBuilder: (props) => /* @__PURE__ */ u$b(ForwardRef$a, { ...props })
        }
      ),
      /* @__PURE__ */ u$b(
        Tooltip,
        {
          tooltipText: t2(
            selectedRows.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ u$b(
            ForwardRef$7,
            {
              className: `h-6 w-6 ${selectedRows.length > 0 ? "cursor-pointer" : disabledButtonClasses}`,
              onClick: () => setRemoveConfirmationModalOpen(true)
            }
          )
        }
      ),
      /* @__PURE__ */ u$b(Tooltip, { tooltipText: t2("sheet.addRowsTooltip"), children: /* @__PURE__ */ u$b(ForwardRef$8, { className: "h-6 w-6 cursor-pointer", onClick: addEmptyRow }) }),
      /* @__PURE__ */ u$b(Tooltip, { tooltipText: t2("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ u$b(
        ForwardRef$h,
        {
          className: `h-6 w-6 ${rowData.length > 0 ? "cursor-pointer" : disabledButtonClasses}`,
          onClick: () => downloadSheetAsCsv(sheetDefinition, rowData)
        }
      ) }),
      /* @__PURE__ */ u$b(
        Select,
        {
          clearable: true,
          displayPlaceholderWhenSelected: true,
          placeholder: t2("sheet.filterByError"),
          classes: "min-w-48",
          options: filterByErrorOptions,
          value: errorColumnFilter,
          onChange: (value) => setErrorColumnFilter(value)
        }
      ),
      /* @__PURE__ */ u$b(
        ConfirmationModal,
        {
          open: removeConfirmationModalOpen,
          setOpen: setRemoveConfirmationModalOpen,
          onConfirm: onRemoveRows,
          title: t2("sheet.removeConfirmationModalTitle"),
          confirmationText: t2("sheet.removeConfirmationModalConfirmationText"),
          subTitle: t2("sheet.removeConfirmationModalSubTitle", {
            rowsCount: selectedRows.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ u$b(Tooltip, { className: "ml-5", tooltipText: t2("sheet.resetTooltip"), children: /* @__PURE__ */ u$b(
      ForwardRef$6,
      {
        className: "h-6 w-6 cursor-pointer",
        onClick: () => setResetConfirmationModalOpen(true)
      }
    ) }),
    /* @__PURE__ */ u$b(
      ConfirmationModal,
      {
        open: resetConfirmationModalOpen,
        setOpen: setResetConfirmationModalOpen,
        onConfirm: resetState,
        title: t2("sheet.resetConfirmationModalTitle"),
        confirmationText: t2("sheet.resetConfirmationModalConfirmationText"),
        subTitle: t2("sheet.resetConfirmationModalSubTitle"),
        variant: "danger"
      }
    )
  ] });
}
const columnHelper = createColumnHelper();
function SheetDataEditor({
  sheetDefinition,
  data,
  allData,
  sheetValidationErrors,
  setRowData,
  removeRows,
  addEmptyRow,
  resetState
}) {
  const [selectedRows, setSelectedRows] = h$3([]);
  const [viewMode, setViewMode] = h$3("all");
  const [searchPhrase, setSearchPhrase] = h$3("");
  const [errorColumnFilter, setErrorColumnFilter] = h$3(
    null
  );
  y$5(() => {
    setSelectedRows([]);
    setViewMode("all");
  }, [sheetDefinition]);
  const rowData = useFilteredRowData(
    data,
    allData,
    viewMode,
    sheetValidationErrors,
    errorColumnFilter,
    sheetDefinition,
    searchPhrase
  );
  const rowValidationSummary = T$5(() => {
    const allRows = data.rows;
    const validRows = allRows.filter(
      (_2, index2) => !sheetValidationErrors.some((error) => error.rowIndex === index2)
    );
    const invalidRows = allRows.filter(
      (_2, index2) => sheetValidationErrors.some((error) => error.rowIndex === index2)
    );
    return {
      all: allRows.length,
      valid: validRows.length,
      errors: invalidRows.length
    };
  }, [data, sheetValidationErrors]);
  const columns = T$5(
    () => sheetDefinition.columns.map(
      (column) => columnHelper.accessor(column.id, {
        header: () => /* @__PURE__ */ u$b(SheetDataEditorHeader, { column }),
        sortUndefined: "last",
        sortingFn: "auto"
      })
    ),
    [sheetDefinition]
  );
  const table = useReactTable({
    data: rowData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });
  function onCellValueChanged(rowIndex, columnId, value) {
    const rowValue = { ...data.rows[rowIndex] };
    rowValue[columnId] = value;
    setRowData({
      sheetId: sheetDefinition.id,
      value: rowValue,
      rowIndex
    });
  }
  return /* @__PURE__ */ u$b("div", { children: [
    /* @__PURE__ */ u$b(
      SheetDataEditorActions,
      {
        sheetDefinition,
        rowData,
        selectedRows,
        setSelectedRows,
        viewMode,
        setViewMode,
        searchPhrase,
        setSearchPhrase,
        errorColumnFilter,
        setErrorColumnFilter,
        removeRows,
        addEmptyRow,
        sheetValidationErrors,
        rowValidationSummary,
        resetState
      }
    ),
    /* @__PURE__ */ u$b(
      SheetDataEditorTable,
      {
        table,
        sheetDefinition,
        visibleData: rowData,
        allData,
        sheetValidationErrors,
        onCellValueChanged,
        selectedRows,
        setSelectedRows
      }
    )
  ] });
}
function CircularProgress({
  progress,
  pending
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset2 = circumference - progress / 100 * circumference;
  const [progressUnavailable, setProgressUnavailable] = h$3(false);
  y$5(() => {
    if (progress === 0) {
      const timeout = setTimeout(() => {
        setProgressUnavailable(true);
      }, 3e3);
      return () => clearTimeout(timeout);
    }
  }, [progress]);
  if (progressUnavailable) {
    return /* @__PURE__ */ u$b("div", { className: "flex justify-center", children: /* @__PURE__ */ u$b(
      "div",
      {
        className: `border-success h-22 w-22 rounded-full border-10 ${pending && `animate-spin border-t-transparent`}`
      }
    ) });
  }
  return /* @__PURE__ */ u$b("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ u$b(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: radius,
        fill: "transparent",
        className: "text-gray-200",
        strokeWidth: "10",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ u$b(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: radius,
        fill: "transparent",
        strokeWidth: "10",
        strokeDasharray: circumference,
        strokeDashoffset: offset2,
        className: "stroke-success transition-[stroke-dashoffset] duration-500"
      }
    )
  ] });
}
function SuccessIcon() {
  return /* @__PURE__ */ u$b(ForwardRef$e, { className: "text-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Uploading({ progress, pending, resetState }) {
  const { t: t2 } = useTranslations();
  return /* @__PURE__ */ u$b("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ u$b("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ u$b(CircularProgress, { progress, pending }),
      pending && /* @__PURE__ */ u$b("div", { children: [
        /* @__PURE__ */ u$b("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ u$b("b", { className: "text-lg", children: [
          progress,
          "%"
        ] }) }),
        /* @__PURE__ */ u$b("h2", { className: "text-2xl", children: t2("importer.loader.uploading") })
      ] }),
      !pending && /* @__PURE__ */ u$b(SuccessIcon, {})
    ] }),
    !pending && /* @__PURE__ */ u$b("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ u$b("h2", { className: "text-2xl", children: t2("importer.loader.success") }),
      /* @__PURE__ */ u$b("div", { className: "h-5" }),
      /* @__PURE__ */ u$b(Button, { variant: "secondary", onClick: resetState, children: t2("sheet.reset") })
    ] })
  ] });
}
function Failed({ onRetry, onBackToPreview }) {
  const { t: t2 } = useTranslations();
  return /* @__PURE__ */ u$b("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ u$b("div", { className: "relative mx-auto h-24 w-24", children: /* @__PURE__ */ u$b(ForwardRef$c, { className: "text-danger" }) }),
    /* @__PURE__ */ u$b("p", { className: "mb-8 text-2xl", children: t2("importer.loader.failed") }),
    /* @__PURE__ */ u$b(Button, { onClick: onRetry, variant: "primary", children: /* @__PURE__ */ u$b("div", { className: "flex items-center", children: [
      /* @__PURE__ */ u$b(ForwardRef$f, { className: "mr-3 h-4 w-4" }),
      t2("importer.loader.retry")
    ] }) }),
    /* @__PURE__ */ u$b("div", { className: "mt-3" }),
    /* @__PURE__ */ u$b(Button, { onClick: onBackToPreview, variant: "tertiary", children: /* @__PURE__ */ u$b("div", { className: "flex items-center", children: [
      /* @__PURE__ */ u$b(ForwardRef$9, { className: "mr-3 h-4 w-4" }),
      t2("importer.loader.backToPreview")
    ] }) })
  ] });
}
function Completed({
  progress,
  mode,
  onRetry,
  onBackToPreview,
  resetState
}) {
  const failed = mode === "failed";
  const pending = mode === "submit";
  if (failed) {
    return /* @__PURE__ */ u$b(Failed, { onRetry, onBackToPreview });
  }
  return /* @__PURE__ */ u$b(Uploading, { progress, pending, resetState });
}
async function delay(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
class Transformer {
  constructor(definition) {
    __publicField(this, "definition");
    this.definition = definition;
  }
  transform(value) {
    const newValue = this.parse(value);
    if (newValue) return newValue;
    return value;
  }
  parse(_value) {
    throw new Error("Not Implemented");
  }
}
class CustomTransformer extends Transformer {
  constructor(definition) {
    super(definition);
    __publicField(this, "key");
    __publicField(this, "parse");
    const { key, transformFn } = definition;
    this.key = key;
    this.parse = transformFn;
  }
}
class PhoneNumberTransformer extends Transformer {
  parse(value) {
    if (typeof value === "string") {
      return value.replace(/[^0-9]/g, "");
    }
  }
}
class PostalCodeTransformer extends Transformer {
  parse(value) {
    if (typeof value === "string" && has(value, "-")) {
      return value.split("-")[0];
    }
  }
}
const STATE_TO_CODES = [
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
class StateCodeTransformer extends Transformer {
  parse(value) {
    const states = STATE_TO_CODES.map((s2c) => s2c[0].toLowerCase());
    if (typeof value === "string" && has(states, value.toLowerCase())) {
      const index2 = states.indexOf(value.toLowerCase());
      return STATE_TO_CODES[index2][1];
    }
  }
}
class StripTransformer extends Transformer {
  parse(value) {
    if (typeof value === "string") {
      return value.trim();
    }
  }
}
function buildTransformerFromDefinition(definition) {
  const mapping = {
    phone_number: PhoneNumberTransformer,
    postal_code: PostalCodeTransformer,
    state_code: StateCodeTransformer,
    strip: StripTransformer,
    custom: CustomTransformer
  };
  if (!(definition.transformer in mapping)) {
    throw new Error(
      `Missing transformer for ${definition.transformer}. Valid transformer options are ${Object.keys(mapping).join(", ")}`
    );
  }
  const FoundValidator = mapping[definition.transformer];
  return new FoundValidator(definition);
}
function transformSheet(sheetDefinition, sheetData) {
  const pipelineByColumnId = eachWithObject(
    sheetDefinition.columns,
    (columnDefinition, obj) => {
      obj[columnDefinition.id] = new Pipeline();
      if (!columnDefinition.transformers) return;
      columnDefinition.transformers.forEach((transformerDefinition) => {
        obj[columnDefinition.id].push(
          buildTransformerFromDefinition(transformerDefinition)
        );
      });
    }
  );
  sheetDefinition.columns.forEach((columnDefinition) => {
    const columnId = columnDefinition.id;
    const pipeline = pipelineByColumnId[columnId];
    sheetData.rows.forEach((row) => {
      if (!hasData(row)) {
        return;
      }
      if (!(columnId in row)) {
        return;
      }
      row[columnId] = pipeline.transform(row[columnId]);
    });
  });
  return sheetData.rows;
}
function applyTransformations(sheetDefinitions, sheetStates) {
  const newSheetStates = [];
  sheetDefinitions.forEach((sheetDefinition) => {
    const sheetData = sheetStates.find(
      (state) => state.sheetId === sheetDefinition.id
    );
    if (sheetData) {
      const newRows = transformSheet(sheetDefinition, sheetData);
      newSheetStates.push({ sheetId: sheetDefinition.id, rows: newRows });
    }
  });
  return newSheetStates;
}
class Pipeline {
  // Series of transformations
  constructor(steps = []) {
    __publicField(this, "steps");
    this.steps = steps;
  }
  push(step) {
    this.steps.push(step);
  }
  transform(value) {
    let current = value;
    this.steps.forEach((step) => {
      current = step.transform(current);
    });
    return current;
  }
}
function buildInitialState(sheetDefinitions) {
  return {
    sheetDefinitions,
    currentSheetId: sheetDefinitions[0].id,
    mode: "upload",
    validationErrors: [],
    sheetData: sheetDefinitions.map((sheet2) => ({
      sheetId: sheet2.id,
      rows: []
    })),
    importProgress: 0
  };
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ENTER_DATA_MANUALLY": {
      const emptyData = state.sheetDefinitions.map((sheet2) => ({
        sheetId: sheet2.id,
        rows: Array.from(
          { length: action.payload.amountOfEmptyRowsToAdd },
          () => ({})
        )
      }));
      return { ...state, mode: "preview", sheetData: emptyData };
    }
    case "FILE_PARSED":
      return { ...state, parsedFile: action.payload.parsed, mode: "mapping" };
    case "UPLOAD":
      return { ...state, mode: "upload" };
    case "COLUMN_MAPPING_CHANGED": {
      return {
        ...state,
        columnMappings: action.payload.mappings
      };
    }
    case "DATA_MAPPED": {
      return {
        ...state,
        sheetData: applyTransformations(
          state.sheetDefinitions,
          action.payload.mappedData
        ),
        mode: "preview",
        validationErrors: applyValidations(
          state.sheetDefinitions,
          action.payload.mappedData
        )
      };
    }
    case "CELL_CHANGED": {
      const currentData = state.sheetData;
      const newData = currentData.map((sheet2) => {
        if (sheet2.sheetId === action.payload.sheetId) {
          const newRows = [...sheet2.rows];
          newRows[action.payload.rowIndex] = action.payload.value;
          return { ...sheet2, rows: newRows };
        } else {
          return sheet2;
        }
      });
      return {
        ...state,
        sheetData: applyTransformations(state.sheetDefinitions, newData),
        validationErrors: applyValidations(state.sheetDefinitions, newData)
      };
    }
    case "REMOVE_ROWS": {
      const newData = state.sheetData.map((sheet2) => {
        if (sheet2.sheetId === action.payload.sheetId) {
          return {
            ...sheet2,
            rows: sheet2.rows.filter(
              (row) => !action.payload.rows.includes(row)
            )
          };
        }
        return sheet2;
      });
      return {
        ...state,
        sheetData: newData,
        validationErrors: applyValidations(state.sheetDefinitions, newData)
      };
    }
    case "ADD_EMPTY_ROW": {
      const newData = state.sheetData.map((data) => {
        if (data.sheetId !== state.currentSheetId) {
          return data;
        }
        return {
          ...data,
          rows: [...data.rows, {}]
        };
      });
      return { ...state, sheetData: newData };
    }
    case "SHEET_CHANGED":
      return { ...state, currentSheetId: action.payload.sheetId };
    case "SUBMIT":
      return { ...state, mode: "submit" };
    case "PROGRESS":
      return { ...state, importProgress: action.payload.progress };
    case "COMPLETED":
      return { ...state, mode: "completed" };
    case "FAILED":
      return { ...state, mode: "failed" };
    case "PREVIEW":
      return { ...state, mode: "preview" };
    case "MAPPING":
      return { ...state, mode: "mapping" };
    case "RESET":
      return buildInitialState(state.sheetDefinitions);
    default:
      return state;
  }
};
const ThemeSetter = ({
  theme,
  children
}) => {
  y$5(() => {
    if (theme) {
      document.documentElement.setAttribute("csv-importer-data-theme", theme);
    }
  }, [theme]);
  return /* @__PURE__ */ u$b(k$3, { children });
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var papaparse_min$1 = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var papaparse_min = papaparse_min$1.exports;
var hasRequiredPapaparse_min;
function requirePapaparse_min() {
  if (hasRequiredPapaparse_min) return papaparse_min$1.exports;
  hasRequiredPapaparse_min = 1;
  (function(module, exports) {
    ((e2, t2) => {
      module.exports = t2();
    })(papaparse_min, function r2() {
      var n2 = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n2 ? n2 : {};
      var d2, s2 = !n2.document && !!n2.postMessage, a3 = n2.IS_PAPA_WORKER || false, o3 = {}, h2 = 0, v2 = {};
      function u2(e2) {
        this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, (function(e3) {
          var t2 = w2(e3);
          t2.chunkSize = parseInt(t2.chunkSize), e3.step || e3.chunk || (t2.chunkSize = null);
          this._handle = new i2(t2), (this._handle.streamer = this)._config = t2;
        }).call(this, e2), this.parseChunk = function(t2, e3) {
          var i3 = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < i3) {
            let e4 = this._config.newline;
            e4 || (r3 = this._config.quoteChar || '"', e4 = this._handle.guessLineEndings(t2, r3)), t2 = [...t2.split(e4).slice(i3)].join(e4);
          }
          this.isFirstChunk && U2(this._config.beforeFirstChunk) && void 0 !== (r3 = this._config.beforeFirstChunk(t2)) && (t2 = r3), this.isFirstChunk = false, this._halted = false;
          var i3 = this._partialLine + t2, r3 = (this._partialLine = "", this._handle.parse(i3, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            t2 = r3.meta.cursor, i3 = (this._finished || (this._partialLine = i3.substring(t2 - this._baseIndex), this._baseIndex = t2), r3 && r3.data && (this._rowCount += r3.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview);
            if (a3) n2.postMessage({ results: r3, workerId: v2.WORKER_ID, finished: i3 });
            else if (U2(this._config.chunk) && !e3) {
              if (this._config.chunk(r3, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = true);
              this._completeResults = r3 = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r3.data), this._completeResults.errors = this._completeResults.errors.concat(r3.errors), this._completeResults.meta = r3.meta), this._completed || !i3 || !U2(this._config.complete) || r3 && r3.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), i3 || r3 && r3.meta.paused || this._nextChunk(), r3;
          }
          this._halted = true;
        }, this._sendError = function(e3) {
          U2(this._config.error) ? this._config.error(e3) : a3 && this._config.error && n2.postMessage({ workerId: v2.WORKER_ID, error: e3, finished: false });
        };
      }
      function f2(e2) {
        var r3;
        (e2 = e2 || {}).chunkSize || (e2.chunkSize = v2.RemoteChunkSize), u2.call(this, e2), this._nextChunk = s2 ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(e3) {
          this._input = e3, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (r3 = new XMLHttpRequest(), this._config.withCredentials && (r3.withCredentials = this._config.withCredentials), s2 || (r3.onload = y2(this._chunkLoaded, this), r3.onerror = y2(this._chunkError, this)), r3.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s2), this._config.downloadRequestHeaders) {
              var e3, t2 = this._config.downloadRequestHeaders;
              for (e3 in t2) r3.setRequestHeader(e3, t2[e3]);
            }
            var i3;
            this._config.chunkSize && (i3 = this._start + this._config.chunkSize - 1, r3.setRequestHeader("Range", "bytes=" + this._start + "-" + i3));
            try {
              r3.send(this._config.downloadRequestBody);
            } catch (e4) {
              this._chunkError(e4.message);
            }
            s2 && 0 === r3.status && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          4 === r3.readyState && (r3.status < 200 || 400 <= r3.status ? this._chunkError() : (this._start += this._config.chunkSize || r3.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((e3) => null !== (e3 = e3.getResponseHeader("Content-Range")) ? parseInt(e3.substring(e3.lastIndexOf("/") + 1)) : -1)(r3), this.parseChunk(r3.responseText)));
        }, this._chunkError = function(e3) {
          e3 = r3.statusText || e3;
          this._sendError(new Error(e3));
        };
      }
      function l2(e2) {
        (e2 = e2 || {}).chunkSize || (e2.chunkSize = v2.LocalChunkSize), u2.call(this, e2);
        var i3, r3, n3 = "undefined" != typeof FileReader;
        this.stream = function(e3) {
          this._input = e3, r3 = e3.slice || e3.webkitSlice || e3.mozSlice, n3 ? ((i3 = new FileReader()).onload = y2(this._chunkLoaded, this), i3.onerror = y2(this._chunkError, this)) : i3 = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var e3 = this._input, t2 = (this._config.chunkSize && (t2 = Math.min(this._start + this._config.chunkSize, this._input.size), e3 = r3.call(e3, this._start, t2)), i3.readAsText(e3, this._config.encoding));
          n3 || this._chunkLoaded({ target: { result: t2 } });
        }, this._chunkLoaded = function(e3) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e3.target.result);
        }, this._chunkError = function() {
          this._sendError(i3.error);
        };
      }
      function c2(e2) {
        var i3;
        u2.call(this, e2 = e2 || {}), this.stream = function(e3) {
          return i3 = e3, this._nextChunk();
        }, this._nextChunk = function() {
          var e3, t2;
          if (!this._finished) return e3 = this._config.chunkSize, i3 = e3 ? (t2 = i3.substring(0, e3), i3.substring(e3)) : (t2 = i3, ""), this._finished = !i3, this.parseChunk(t2);
        };
      }
      function p2(e2) {
        u2.call(this, e2 = e2 || {});
        var t2 = [], i3 = true, r3 = false;
        this.pause = function() {
          u2.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u2.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e3) {
          this._input = e3, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          r3 && 1 === t2.length && (this._finished = true);
        }, this._nextChunk = function() {
          this._checkIsFinished(), t2.length ? this.parseChunk(t2.shift()) : i3 = true;
        }, this._streamData = y2(function(e3) {
          try {
            t2.push("string" == typeof e3 ? e3 : e3.toString(this._config.encoding)), i3 && (i3 = false, this._checkIsFinished(), this.parseChunk(t2.shift()));
          } catch (e4) {
            this._streamError(e4);
          }
        }, this), this._streamError = y2(function(e3) {
          this._streamCleanUp(), this._sendError(e3);
        }, this), this._streamEnd = y2(function() {
          this._streamCleanUp(), r3 = true, this._streamData("");
        }, this), this._streamCleanUp = y2(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function i2(m3) {
        var n3, s3, a4, t2, o4 = Math.pow(2, 53), h3 = -o4, u3 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, d3 = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, i3 = this, r3 = 0, f3 = 0, l3 = false, e2 = false, c3 = [], p3 = { data: [], errors: [], meta: {} };
        function y3(e3) {
          return "greedy" === m3.skipEmptyLines ? "" === e3.join("").trim() : 1 === e3.length && 0 === e3[0].length;
        }
        function g3() {
          if (p3 && a4 && (k2("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + v2.DefaultDelimiter + "'"), a4 = false), m3.skipEmptyLines && (p3.data = p3.data.filter(function(e4) {
            return !y3(e4);
          })), _3()) {
            let t3 = function(e4, t4) {
              U2(m3.transformHeader) && (e4 = m3.transformHeader(e4, t4)), c3.push(e4);
            };
            if (p3) if (Array.isArray(p3.data[0])) {
              for (var e3 = 0; _3() && e3 < p3.data.length; e3++) p3.data[e3].forEach(t3);
              p3.data.splice(0, 1);
            } else p3.data.forEach(t3);
          }
          function i4(e4, t3) {
            for (var i5 = m3.header ? {} : [], r5 = 0; r5 < e4.length; r5++) {
              var n4 = r5, s4 = e4[r5], s4 = ((e5, t4) => ((e6) => (m3.dynamicTypingFunction && void 0 === m3.dynamicTyping[e6] && (m3.dynamicTyping[e6] = m3.dynamicTypingFunction(e6)), true === (m3.dynamicTyping[e6] || m3.dynamicTyping)))(e5) ? "true" === t4 || "TRUE" === t4 || "false" !== t4 && "FALSE" !== t4 && (((e6) => {
                if (u3.test(e6)) {
                  e6 = parseFloat(e6);
                  if (h3 < e6 && e6 < o4) return 1;
                }
              })(t4) ? parseFloat(t4) : d3.test(t4) ? new Date(t4) : "" === t4 ? null : t4) : t4)(n4 = m3.header ? r5 >= c3.length ? "__parsed_extra" : c3[r5] : n4, s4 = m3.transform ? m3.transform(s4, n4) : s4);
              "__parsed_extra" === n4 ? (i5[n4] = i5[n4] || [], i5[n4].push(s4)) : i5[n4] = s4;
            }
            return m3.header && (r5 > c3.length ? k2("FieldMismatch", "TooManyFields", "Too many fields: expected " + c3.length + " fields but parsed " + r5, f3 + t3) : r5 < c3.length && k2("FieldMismatch", "TooFewFields", "Too few fields: expected " + c3.length + " fields but parsed " + r5, f3 + t3)), i5;
          }
          var r4;
          p3 && (m3.header || m3.dynamicTyping || m3.transform) && (r4 = 1, !p3.data.length || Array.isArray(p3.data[0]) ? (p3.data = p3.data.map(i4), r4 = p3.data.length) : p3.data = i4(p3.data, 0), m3.header && p3.meta && (p3.meta.fields = c3), f3 += r4);
        }
        function _3() {
          return m3.header && 0 === c3.length;
        }
        function k2(e3, t3, i4, r4) {
          e3 = { type: e3, code: t3, message: i4 };
          void 0 !== r4 && (e3.row = r4), p3.errors.push(e3);
        }
        U2(m3.step) && (t2 = m3.step, m3.step = function(e3) {
          p3 = e3, _3() ? g3() : (g3(), 0 !== p3.data.length && (r3 += e3.data.length, m3.preview && r3 > m3.preview ? s3.abort() : (p3.data = p3.data[0], t2(p3, i3))));
        }), this.parse = function(e3, t3, i4) {
          var r4 = m3.quoteChar || '"', r4 = (m3.newline || (m3.newline = this.guessLineEndings(e3, r4)), a4 = false, m3.delimiter ? U2(m3.delimiter) && (m3.delimiter = m3.delimiter(e3), p3.meta.delimiter = m3.delimiter) : ((r4 = ((e4, t4, i5, r5, n4) => {
            var s4, a5, o5, h4;
            n4 = n4 || [",", "	", "|", ";", v2.RECORD_SEP, v2.UNIT_SEP];
            for (var u4 = 0; u4 < n4.length; u4++) {
              for (var d4, f4 = n4[u4], l4 = 0, c4 = 0, p4 = 0, g4 = (o5 = void 0, new E2({ comments: r5, delimiter: f4, newline: t4, preview: 10 }).parse(e4)), _4 = 0; _4 < g4.data.length; _4++) i5 && y3(g4.data[_4]) ? p4++ : (d4 = g4.data[_4].length, c4 += d4, void 0 === o5 ? o5 = d4 : 0 < d4 && (l4 += Math.abs(d4 - o5), o5 = d4));
              0 < g4.data.length && (c4 /= g4.data.length - p4), (void 0 === a5 || l4 <= a5) && (void 0 === h4 || h4 < c4) && 1.99 < c4 && (a5 = l4, s4 = f4, h4 = c4);
            }
            return { successful: !!(m3.delimiter = s4), bestDelimiter: s4 };
          })(e3, m3.newline, m3.skipEmptyLines, m3.comments, m3.delimitersToGuess)).successful ? m3.delimiter = r4.bestDelimiter : (a4 = true, m3.delimiter = v2.DefaultDelimiter), p3.meta.delimiter = m3.delimiter), w2(m3));
          return m3.preview && m3.header && r4.preview++, n3 = e3, s3 = new E2(r4), p3 = s3.parse(n3, t3, i4), g3(), l3 ? { meta: { paused: true } } : p3 || { meta: { paused: false } };
        }, this.paused = function() {
          return l3;
        }, this.pause = function() {
          l3 = true, s3.abort(), n3 = U2(m3.chunk) ? "" : n3.substring(s3.getCharIndex());
        }, this.resume = function() {
          i3.streamer._halted ? (l3 = false, i3.streamer.parseChunk(n3, true)) : setTimeout(i3.resume, 3);
        }, this.aborted = function() {
          return e2;
        }, this.abort = function() {
          e2 = true, s3.abort(), p3.meta.aborted = true, U2(m3.complete) && m3.complete(p3), n3 = "";
        }, this.guessLineEndings = function(e3, t3) {
          e3 = e3.substring(0, 1048576);
          var t3 = new RegExp(P2(t3) + "([^]*?)" + P2(t3), "gm"), i4 = (e3 = e3.replace(t3, "")).split("\r"), t3 = e3.split("\n"), e3 = 1 < t3.length && t3[0].length < i4[0].length;
          if (1 === i4.length || e3) return "\n";
          for (var r4 = 0, n4 = 0; n4 < i4.length; n4++) "\n" === i4[n4][0] && r4++;
          return r4 >= i4.length / 2 ? "\r\n" : "\r";
        };
      }
      function P2(e2) {
        return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function E2(C2) {
        var S2 = (C2 = C2 || {}).delimiter, O2 = C2.newline, x2 = C2.comments, I2 = C2.step, A2 = C2.preview, T2 = C2.fastMode, D2 = null, L2 = false, F2 = null == C2.quoteChar ? '"' : C2.quoteChar, j2 = F2;
        if (void 0 !== C2.escapeChar && (j2 = C2.escapeChar), ("string" != typeof S2 || -1 < v2.BAD_DELIMITERS.indexOf(S2)) && (S2 = ","), x2 === S2) throw new Error("Comment character same as delimiter");
        true === x2 ? x2 = "#" : ("string" != typeof x2 || -1 < v2.BAD_DELIMITERS.indexOf(x2)) && (x2 = false), "\n" !== O2 && "\r" !== O2 && "\r\n" !== O2 && (O2 = "\n");
        var z2 = 0, M2 = false;
        this.parse = function(i3, t2, r3) {
          if ("string" != typeof i3) throw new Error("Input must be a string");
          var n3 = i3.length, e2 = S2.length, s3 = O2.length, a4 = x2.length, o4 = U2(I2), h3 = [], u3 = [], d3 = [], f3 = z2 = 0;
          if (!i3) return b2();
          if (T2 || false !== T2 && -1 === i3.indexOf(F2)) {
            for (var l3 = i3.split(O2), c3 = 0; c3 < l3.length; c3++) {
              if (d3 = l3[c3], z2 += d3.length, c3 !== l3.length - 1) z2 += O2.length;
              else if (r3) return b2();
              if (!x2 || d3.substring(0, a4) !== x2) {
                if (o4) {
                  if (h3 = [], k2(d3.split(S2)), R2(), M2) return b2();
                } else k2(d3.split(S2));
                if (A2 && A2 <= c3) return h3 = h3.slice(0, A2), b2(true);
              }
            }
            return b2();
          }
          for (var p3 = i3.indexOf(S2, z2), g3 = i3.indexOf(O2, z2), _3 = new RegExp(P2(j2) + P2(F2), "g"), m3 = i3.indexOf(F2, z2); ; ) if (i3[z2] === F2) for (m3 = z2, z2++; ; ) {
            if (-1 === (m3 = i3.indexOf(F2, m3 + 1))) return r3 || u3.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: h3.length, index: z2 }), E3();
            if (m3 === n3 - 1) return E3(i3.substring(z2, m3).replace(_3, F2));
            if (F2 === j2 && i3[m3 + 1] === j2) m3++;
            else if (F2 === j2 || 0 === m3 || i3[m3 - 1] !== j2) {
              -1 !== p3 && p3 < m3 + 1 && (p3 = i3.indexOf(S2, m3 + 1));
              var y3 = v3(-1 === (g3 = -1 !== g3 && g3 < m3 + 1 ? i3.indexOf(O2, m3 + 1) : g3) ? p3 : Math.min(p3, g3));
              if (i3.substr(m3 + 1 + y3, e2) === S2) {
                d3.push(i3.substring(z2, m3).replace(_3, F2)), i3[z2 = m3 + 1 + y3 + e2] !== F2 && (m3 = i3.indexOf(F2, z2)), p3 = i3.indexOf(S2, z2), g3 = i3.indexOf(O2, z2);
                break;
              }
              y3 = v3(g3);
              if (i3.substring(m3 + 1 + y3, m3 + 1 + y3 + s3) === O2) {
                if (d3.push(i3.substring(z2, m3).replace(_3, F2)), w3(m3 + 1 + y3 + s3), p3 = i3.indexOf(S2, z2), m3 = i3.indexOf(F2, z2), o4 && (R2(), M2)) return b2();
                if (A2 && h3.length >= A2) return b2(true);
                break;
              }
              u3.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: h3.length, index: z2 }), m3++;
            }
          }
          else if (x2 && 0 === d3.length && i3.substring(z2, z2 + a4) === x2) {
            if (-1 === g3) return b2();
            z2 = g3 + s3, g3 = i3.indexOf(O2, z2), p3 = i3.indexOf(S2, z2);
          } else if (-1 !== p3 && (p3 < g3 || -1 === g3)) d3.push(i3.substring(z2, p3)), z2 = p3 + e2, p3 = i3.indexOf(S2, z2);
          else {
            if (-1 === g3) break;
            if (d3.push(i3.substring(z2, g3)), w3(g3 + s3), o4 && (R2(), M2)) return b2();
            if (A2 && h3.length >= A2) return b2(true);
          }
          return E3();
          function k2(e3) {
            h3.push(e3), f3 = z2;
          }
          function v3(e3) {
            var t3 = 0;
            return t3 = -1 !== e3 && (e3 = i3.substring(m3 + 1, e3)) && "" === e3.trim() ? e3.length : t3;
          }
          function E3(e3) {
            return r3 || (void 0 === e3 && (e3 = i3.substring(z2)), d3.push(e3), z2 = n3, k2(d3), o4 && R2()), b2();
          }
          function w3(e3) {
            z2 = e3, k2(d3), d3 = [], g3 = i3.indexOf(O2, z2);
          }
          function b2(e3) {
            if (C2.header && !t2 && h3.length && !L2) {
              var s4 = h3[0], a5 = {}, o5 = new Set(s4);
              let n4 = false;
              for (let r4 = 0; r4 < s4.length; r4++) {
                let i4 = s4[r4];
                if (a5[i4 = U2(C2.transformHeader) ? C2.transformHeader(i4, r4) : i4]) {
                  let e4, t3 = a5[i4];
                  for (; e4 = i4 + "_" + t3, t3++, o5.has(e4); ) ;
                  o5.add(e4), s4[r4] = e4, a5[i4]++, n4 = true, (D2 = null === D2 ? {} : D2)[e4] = i4;
                } else a5[i4] = 1, s4[r4] = i4;
                o5.add(i4);
              }
              n4 && console.warn("Duplicate headers found and renamed."), L2 = true;
            }
            return { data: h3, errors: u3, meta: { delimiter: S2, linebreak: O2, aborted: M2, truncated: !!e3, cursor: f3 + (t2 || 0), renamedHeaders: D2 } };
          }
          function R2() {
            I2(b2()), h3 = [], u3 = [];
          }
        }, this.abort = function() {
          M2 = true;
        }, this.getCharIndex = function() {
          return z2;
        };
      }
      function g2(e2) {
        var t2 = e2.data, i3 = o3[t2.workerId], r3 = false;
        if (t2.error) i3.userError(t2.error, t2.file);
        else if (t2.results && t2.results.data) {
          var n3 = { abort: function() {
            r3 = true, _2(t2.workerId, { data: [], errors: [], meta: { aborted: true } });
          }, pause: m2, resume: m2 };
          if (U2(i3.userStep)) {
            for (var s3 = 0; s3 < t2.results.data.length && (i3.userStep({ data: t2.results.data[s3], errors: t2.results.errors, meta: t2.results.meta }, n3), !r3); s3++) ;
            delete t2.results;
          } else U2(i3.userChunk) && (i3.userChunk(t2.results, n3, t2.file), delete t2.results);
        }
        t2.finished && !r3 && _2(t2.workerId, t2.results);
      }
      function _2(e2, t2) {
        var i3 = o3[e2];
        U2(i3.userComplete) && i3.userComplete(t2), i3.terminate(), delete o3[e2];
      }
      function m2() {
        throw new Error("Not implemented.");
      }
      function w2(e2) {
        if ("object" != typeof e2 || null === e2) return e2;
        var t2, i3 = Array.isArray(e2) ? [] : {};
        for (t2 in e2) i3[t2] = w2(e2[t2]);
        return i3;
      }
      function y2(e2, t2) {
        return function() {
          e2.apply(t2, arguments);
        };
      }
      function U2(e2) {
        return "function" == typeof e2;
      }
      return v2.parse = function(e2, t2) {
        var i3 = (t2 = t2 || {}).dynamicTyping || false;
        U2(i3) && (t2.dynamicTypingFunction = i3, i3 = {});
        if (t2.dynamicTyping = i3, t2.transform = !!U2(t2.transform) && t2.transform, !t2.worker || !v2.WORKERS_SUPPORTED) return i3 = null, v2.NODE_STREAM_INPUT, "string" == typeof e2 ? (e2 = ((e3) => 65279 !== e3.charCodeAt(0) ? e3 : e3.slice(1))(e2), i3 = new (t2.download ? f2 : c2)(t2)) : true === e2.readable && U2(e2.read) && U2(e2.on) ? i3 = new p2(t2) : (n2.File && e2 instanceof File || e2 instanceof Object) && (i3 = new l2(t2)), i3.stream(e2);
        (i3 = (() => {
          var e3;
          return !!v2.WORKERS_SUPPORTED && (e3 = (() => {
            var e4 = n2.URL || n2.webkitURL || null, t3 = r2.toString();
            return v2.BLOB_URL || (v2.BLOB_URL = e4.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", t3, ")();"], { type: "text/javascript" })));
          })(), (e3 = new n2.Worker(e3)).onmessage = g2, e3.id = h2++, o3[e3.id] = e3);
        })()).userStep = t2.step, i3.userChunk = t2.chunk, i3.userComplete = t2.complete, i3.userError = t2.error, t2.step = U2(t2.step), t2.chunk = U2(t2.chunk), t2.complete = U2(t2.complete), t2.error = U2(t2.error), delete t2.worker, i3.postMessage({ input: e2, config: t2, workerId: i3.id });
      }, v2.unparse = function(e2, t2) {
        var n3 = false, _3 = true, m3 = ",", y3 = "\r\n", s3 = '"', a4 = s3 + s3, i3 = false, r3 = null, o4 = false, h3 = ((() => {
          if ("object" == typeof t2) {
            if ("string" != typeof t2.delimiter || v2.BAD_DELIMITERS.filter(function(e3) {
              return -1 !== t2.delimiter.indexOf(e3);
            }).length || (m3 = t2.delimiter), "boolean" != typeof t2.quotes && "function" != typeof t2.quotes && !Array.isArray(t2.quotes) || (n3 = t2.quotes), "boolean" != typeof t2.skipEmptyLines && "string" != typeof t2.skipEmptyLines || (i3 = t2.skipEmptyLines), "string" == typeof t2.newline && (y3 = t2.newline), "string" == typeof t2.quoteChar && (s3 = t2.quoteChar), "boolean" == typeof t2.header && (_3 = t2.header), Array.isArray(t2.columns)) {
              if (0 === t2.columns.length) throw new Error("Option columns is empty");
              r3 = t2.columns;
            }
            void 0 !== t2.escapeChar && (a4 = t2.escapeChar + s3), t2.escapeFormulae instanceof RegExp ? o4 = t2.escapeFormulae : "boolean" == typeof t2.escapeFormulae && t2.escapeFormulae && (o4 = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(P2(s3), "g"));
        "string" == typeof e2 && (e2 = JSON.parse(e2));
        if (Array.isArray(e2)) {
          if (!e2.length || Array.isArray(e2[0])) return u3(null, e2, i3);
          if ("object" == typeof e2[0]) return u3(r3 || Object.keys(e2[0]), e2, i3);
        } else if ("object" == typeof e2) return "string" == typeof e2.data && (e2.data = JSON.parse(e2.data)), Array.isArray(e2.data) && (e2.fields || (e2.fields = e2.meta && e2.meta.fields || r3), e2.fields || (e2.fields = Array.isArray(e2.data[0]) ? e2.fields : "object" == typeof e2.data[0] ? Object.keys(e2.data[0]) : []), Array.isArray(e2.data[0]) || "object" == typeof e2.data[0] || (e2.data = [e2.data])), u3(e2.fields || [], e2.data || [], i3);
        throw new Error("Unable to serialize unrecognized input");
        function u3(e3, t3, i4) {
          var r4 = "", n4 = ("string" == typeof e3 && (e3 = JSON.parse(e3)), "string" == typeof t3 && (t3 = JSON.parse(t3)), Array.isArray(e3) && 0 < e3.length), s4 = !Array.isArray(t3[0]);
          if (n4 && _3) {
            for (var a5 = 0; a5 < e3.length; a5++) 0 < a5 && (r4 += m3), r4 += k2(e3[a5], a5);
            0 < t3.length && (r4 += y3);
          }
          for (var o5 = 0; o5 < t3.length; o5++) {
            var h4 = (n4 ? e3 : t3[o5]).length, u4 = false, d3 = n4 ? 0 === Object.keys(t3[o5]).length : 0 === t3[o5].length;
            if (i4 && !n4 && (u4 = "greedy" === i4 ? "" === t3[o5].join("").trim() : 1 === t3[o5].length && 0 === t3[o5][0].length), "greedy" === i4 && n4) {
              for (var f3 = [], l3 = 0; l3 < h4; l3++) {
                var c3 = s4 ? e3[l3] : l3;
                f3.push(t3[o5][c3]);
              }
              u4 = "" === f3.join("").trim();
            }
            if (!u4) {
              for (var p3 = 0; p3 < h4; p3++) {
                0 < p3 && !d3 && (r4 += m3);
                var g3 = n4 && s4 ? e3[p3] : p3;
                r4 += k2(t3[o5][g3], p3);
              }
              o5 < t3.length - 1 && (!i4 || 0 < h4 && !d3) && (r4 += y3);
            }
          }
          return r4;
        }
        function k2(e3, t3) {
          var i4, r4;
          return null == e3 ? "" : e3.constructor === Date ? JSON.stringify(e3).slice(1, 25) : (r4 = false, o4 && "string" == typeof e3 && o4.test(e3) && (e3 = "'" + e3, r4 = true), i4 = e3.toString().replace(h3, a4), (r4 = r4 || true === n3 || "function" == typeof n3 && n3(e3, t3) || Array.isArray(n3) && n3[t3] || ((e4, t4) => {
            for (var i5 = 0; i5 < t4.length; i5++) if (-1 < e4.indexOf(t4[i5])) return true;
            return false;
          })(i4, v2.BAD_DELIMITERS) || -1 < i4.indexOf(m3) || " " === i4.charAt(0) || " " === i4.charAt(i4.length - 1)) ? s3 + i4 + s3 : i4);
        }
      }, v2.RECORD_SEP = String.fromCharCode(30), v2.UNIT_SEP = String.fromCharCode(31), v2.BYTE_ORDER_MARK = "\uFEFF", v2.BAD_DELIMITERS = ["\r", "\n", '"', v2.BYTE_ORDER_MARK], v2.WORKERS_SUPPORTED = !s2 && !!n2.Worker, v2.NODE_STREAM_INPUT = 1, v2.LocalChunkSize = 10485760, v2.RemoteChunkSize = 5242880, v2.DefaultDelimiter = ",", v2.Parser = E2, v2.ParserHandle = i2, v2.NetworkStreamer = f2, v2.FileStreamer = l2, v2.StringStreamer = c2, v2.ReadableStreamStreamer = p2, n2.jQuery && ((d2 = n2.jQuery).fn.parse = function(o4) {
        var i3 = o4.config || {}, h3 = [];
        return this.each(function(e3) {
          if (!("INPUT" === d2(this).prop("tagName").toUpperCase() && "file" === d2(this).attr("type").toLowerCase() && n2.FileReader) || !this.files || 0 === this.files.length) return true;
          for (var t2 = 0; t2 < this.files.length; t2++) h3.push({ file: this.files[t2], inputElem: this, instanceConfig: d2.extend({}, i3) });
        }), e2(), this;
        function e2() {
          if (0 === h3.length) U2(o4.complete) && o4.complete();
          else {
            var e3, t2, i4, r3, n3 = h3[0];
            if (U2(o4.before)) {
              var s3 = o4.before(n3.file, n3.inputElem);
              if ("object" == typeof s3) {
                if ("abort" === s3.action) return e3 = "AbortError", t2 = n3.file, i4 = n3.inputElem, r3 = s3.reason, void (U2(o4.error) && o4.error({ name: e3 }, t2, i4, r3));
                if ("skip" === s3.action) return void u3();
                "object" == typeof s3.config && (n3.instanceConfig = d2.extend(n3.instanceConfig, s3.config));
              } else if ("skip" === s3) return void u3();
            }
            var a4 = n3.instanceConfig.complete;
            n3.instanceConfig.complete = function(e4) {
              U2(a4) && a4(e4, n3.file, n3.inputElem), u3();
            }, v2.parse(n3.file, n3.instanceConfig);
          }
        }
        function u3() {
          h3.splice(0, 1), e2();
        }
      }), a3 && (n2.onmessage = function(e2) {
        e2 = e2.data;
        void 0 === v2.WORKER_ID && e2 && (v2.WORKER_ID = e2.workerId);
        "string" == typeof e2.input ? n2.postMessage({ workerId: v2.WORKER_ID, results: v2.parse(e2.input, e2.config), finished: true }) : (n2.File && e2.input instanceof File || e2.input instanceof Object) && (e2 = v2.parse(e2.input, e2.config)) && n2.postMessage({ workerId: v2.WORKER_ID, results: e2, finished: true });
      }), (f2.prototype = Object.create(u2.prototype)).constructor = f2, (l2.prototype = Object.create(u2.prototype)).constructor = l2, (c2.prototype = Object.create(c2.prototype)).constructor = c2, (p2.prototype = Object.create(u2.prototype)).constructor = p2, v2;
    });
  })(papaparse_min$1);
  return papaparse_min$1.exports;
}
var papaparse_minExports = requirePapaparse_min();
const Papa = /* @__PURE__ */ getDefaultExportFromCjs(papaparse_minExports);
function parseCsv({
  file,
  onCompleted
}) {
  Papa.parse(file, {
    skipEmptyLines: true,
    header: true,
    complete: onCompleted
  });
}
function mapReferenceColumns(sheetDefinitions, mappedData) {
  return mappedData.map((sheetData) => {
    const sheetDefinition = sheetDefinitions.find(
      (definition) => definition.id === sheetData.sheetId
    );
    if (sheetDefinition == null) {
      return sheetData;
    }
    const rows = sheetData.rows.map((row, rowIndex) => {
      const newRow = { ...row };
      sheetDefinition.columns.filter((column) => column.type === "reference").forEach((column) => {
        const referenceSheetData = mappedData.find(
          (data) => data.sheetId === column.typeArguments.sheetId
        );
        if (referenceSheetData != null) {
          const referenceColumn = referenceSheetData.rows.map(
            (r2) => r2[column.typeArguments.sheetColumnId]
          );
          const referenceValue = referenceColumn[rowIndex];
          newRow[column.id] = referenceValue;
        }
      });
      return newRow;
    });
    return {
      ...sheetData,
      rows
    };
  });
}
function getMappedData(sheetDefinitions, mappings, parsedFile) {
  const data = parsedFile.data;
  const mappedData = sheetDefinitions.map((sheetDefinition) => {
    const rows = [];
    const sheetMappings = mappings.filter(
      (mapping) => mapping.sheetId === sheetDefinition.id
    );
    data.map((row) => {
      const newRow = {};
      sheetDefinition.columns.forEach((column) => {
        const mapping = sheetMappings.find(
          (mapping2) => mapping2.sheetColumnId === column.id
        );
        if (mapping != null) {
          newRow[mapping.sheetColumnId] = row[mapping.csvColumnName];
        }
      });
      rows.push(newRow);
    });
    return {
      sheetId: sheetDefinition.id,
      rows
    };
  });
  return mapReferenceColumns(sheetDefinitions, mappedData);
}
function ExclamationCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ g$3("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ g$3("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ g$3("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ D$2(ExclamationCircleIcon);
function SheetsSwitcher({
  sheetDefinitions,
  activeSheetId,
  onSheetChange,
  validationErrors
}) {
  return /* @__PURE__ */ u$b(
    Tabs,
    {
      tabs: sheetDefinitions.map((sheet2) => ({
        label: sheet2.label,
        value: sheet2.id,
        icon: validationErrors.some((error) => error.sheetId === sheet2.id) ? /* @__PURE__ */ u$b(ForwardRef, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: activeSheetId,
      onTabChange: onSheetChange
    }
  );
}
function BackToMappingButton({ onBackToMapping }) {
  const { t: t2 } = useTranslations();
  const [confirmationModalOpen, setConfirmationModalOpen] = h$3(false);
  return /* @__PURE__ */ u$b(k$3, { children: [
    /* @__PURE__ */ u$b(
      Button,
      {
        onClick: () => setConfirmationModalOpen(true),
        variant: "secondary",
        children: t2("importer.back")
      }
    ),
    /* @__PURE__ */ u$b(
      ConfirmationModal,
      {
        variant: "danger",
        onConfirm: onBackToMapping,
        open: confirmationModalOpen,
        setOpen: setConfirmationModalOpen,
        title: t2("importer.backToMappingConfirmation.title"),
        subTitle: t2("importer.backToMappingConfirmation.subTitle"),
        confirmationText: t2(
          "importer.backToMappingConfirmation.confirmationText"
        ),
        cancelText: t2("importer.backToMappingConfirmation.cancelText")
      }
    )
  ] });
}
function ImporterBody({
  theme,
  onComplete,
  allowManualDataEntry,
  sheets,
  onDataColumnsMapped,
  preventUploadOnValidationErrors
}) {
  const { t: t2 } = useTranslations();
  const isInitialRender = A$3(true);
  const targetRef = A$3(null);
  const [
    {
      mode,
      currentSheetId,
      sheetData,
      columnMappings,
      parsedFile,
      validationErrors,
      importProgress
    },
    dispatch
  ] = p$3(reducer, buildInitialState(sheets));
  y$5(() => {
    var _a;
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    (_a = targetRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [mode]);
  const currentSheetData = sheetData.find(
    (sheet2) => sheet2.sheetId === currentSheetId
  );
  const currentSheetDefinition = sheets.find(
    (sheet2) => sheet2.id === currentSheetId
  );
  const preventUploadOnErrors = typeof preventUploadOnValidationErrors === "function" ? (preventUploadOnValidationErrors == null ? void 0 : preventUploadOnValidationErrors(validationErrors)) ?? false : preventUploadOnValidationErrors ?? false;
  const preventUpload = preventUploadOnErrors && validationErrors.length > 0;
  function onFileUploaded(file) {
    parseCsv({
      file,
      onCompleted: (newParsed) => {
        dispatch({ type: "FILE_PARSED", payload: { parsed: newParsed } });
        dispatch({
          type: "COLUMN_MAPPING_CHANGED",
          payload: {
            mappings: buildSuggestedHeaderMappings(
              sheets,
              newParsed.meta.fields
              // TODO THIS BRANCH: Check why it can be undefined
            )
          }
        });
      }
    });
  }
  function onEnterDataManually() {
    dispatch({
      type: "ENTER_DATA_MANUALLY",
      payload: {
        amountOfEmptyRowsToAdd: NUMBER_OF_EMPTY_ROWS_FOR_MANUAL_DATA_INPUT
      }
    });
  }
  function onMappingsChanged(mappings) {
    dispatch({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings }
    });
  }
  async function onMappingsSet() {
    const mappedData = getMappedData(sheets, columnMappings ?? [], parsedFile);
    const newMappedData = onDataColumnsMapped != null ? await onDataColumnsMapped(mappedData) : mappedData;
    dispatch({ type: "DATA_MAPPED", payload: { mappedData: newMappedData } });
  }
  function onCellChanged(payload) {
    dispatch({ type: "CELL_CHANGED", payload });
  }
  function onRemoveRows(payload) {
    dispatch({ type: "REMOVE_ROWS", payload });
  }
  function addEmptyRow() {
    dispatch({ type: "ADD_EMPTY_ROW" });
  }
  function resetState() {
    dispatch({ type: "RESET" });
  }
  async function onSubmit() {
    dispatch({ type: "PROGRESS", payload: { progress: 0 } });
    dispatch({ type: "SUBMIT" });
    try {
      const data = applyTransformations(
        sheets,
        sheetData.map((d2) => ({ ...d2, rows: filterEmptyRows(d2) }))
      );
      await onComplete(data, (progress) => {
        dispatch({ type: "PROGRESS", payload: { progress } });
      });
    } catch (e2) {
      dispatch({ type: "FAILED" });
      return;
    }
    await delay(400);
    dispatch({ type: "PROGRESS", payload: { progress: 100 } });
    await delay(200);
    dispatch({ type: "COMPLETED" });
  }
  function onBackToPreview() {
    dispatch({ type: "PREVIEW" });
  }
  function onBackToUpload() {
    dispatch({ type: "UPLOAD" });
  }
  function onBackToMapping() {
    dispatch({ type: "MAPPING" });
  }
  return /* @__PURE__ */ u$b(ThemeSetter, { theme, children: /* @__PURE__ */ u$b(Root, { ref: targetRef, children: [
    mode === "upload" && /* @__PURE__ */ u$b("div", { className: "mt-5", children: [
      /* @__PURE__ */ u$b(FileUploader, { setFile: onFileUploaded }),
      allowManualDataEntry && /* @__PURE__ */ u$b("div", { className: "mt-10 mb-2.5", children: /* @__PURE__ */ u$b(
        "p",
        {
          onClick: onEnterDataManually,
          className: "text-primary hover:text-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none",
          children: t2("importer.uploader.enterManually")
        }
      ) })
    ] }),
    mode === "mapping" && /* @__PURE__ */ u$b(
      HeaderMapper,
      {
        parsed: parsedFile,
        sheetDefinitions: sheets,
        currentMapping: columnMappings ?? [],
        onMappingsChanged,
        onMappingsSet,
        onBack: onBackToUpload
      }
    ),
    mode === "preview" && /* @__PURE__ */ u$b(k$3, { children: [
      /* @__PURE__ */ u$b(
        SheetsSwitcher,
        {
          activeSheetId: currentSheetId,
          sheetDefinitions: sheets,
          onSheetChange: (sheetId) => dispatch({ type: "SHEET_CHANGED", payload: { sheetId } }),
          validationErrors
        }
      ),
      /* @__PURE__ */ u$b(
        SheetDataEditor,
        {
          data: currentSheetData,
          allData: sheetData,
          sheetDefinition: currentSheetDefinition,
          sheetValidationErrors: validationErrors.filter(
            (error) => error.sheetId === (currentSheetDefinition == null ? void 0 : currentSheetDefinition.id)
          ),
          setRowData: onCellChanged,
          removeRows: onRemoveRows,
          addEmptyRow,
          resetState
        }
      ),
      currentSheetData.rows.length > 0 && /* @__PURE__ */ u$b("div", { className: "my-5 flex justify-between", children: [
        /* @__PURE__ */ u$b("div", { children: columnMappings != null && /* @__PURE__ */ u$b(BackToMappingButton, { onBackToMapping }) }),
        /* @__PURE__ */ u$b(
          Tooltip,
          {
            tooltipText: t2("importer.uploadBlocked"),
            hidden: !preventUpload,
            children: /* @__PURE__ */ u$b(Button, { onClick: onSubmit, disabled: preventUpload, children: t2("importer.upload") })
          }
        )
      ] })
    ] }),
    (mode === "submit" || mode === "failed" || mode === "completed") && /* @__PURE__ */ u$b(
      Completed,
      {
        mode,
        progress: importProgress,
        onRetry: onSubmit,
        onBackToPreview,
        resetState
      }
    )
  ] }) });
}
function Importer(props) {
  return /* @__PURE__ */ u$b(TranslationProvider, { selectedLocale: props.locale, children: /* @__PURE__ */ u$b(ImporterBody, { ...props }) });
}
export {
  Importer as default
};
//# sourceMappingURL=index.es.js.map
