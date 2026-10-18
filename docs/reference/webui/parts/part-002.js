// Reading excerpt from app.js, starting at line 9170.
// Shares bundle scope; use the complete bundle for execution.
var sp;
function gh() {
  if (sp) return fu.exports;
  sp = 1;
  function n() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return (n(), (fu.exports = by()), fu.exports);
}
var up;
function Fy() {
  if (up) return Qi;
  up = 1;
  var n = gh();
  return ((Qi.createRoot = n.createRoot), (Qi.hydrateRoot = n.hydrateRoot), Qi);
}
var My = Fy(),
  ma = gh();
const Eh = vh(ma),
  Iy = mh({ __proto__: null, default: Eh }, [ma]);
function Xe() {
  return (
    (Xe = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var i in l)
              Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
          }
          return n;
        }),
    Xe.apply(this, arguments)
  );
}
var ct;
(function (n) {
  ((n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE"));
})(ct || (ct = {}));
const cp = "popstate";
function zy(n) {
  n === void 0 && (n = {});
  function o(i, s) {
    let { pathname: f, search: d, hash: h } = i.location;
    return Tl(
      "",
      { pathname: f, search: d, hash: h },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function l(i, s) {
    return typeof s == "string" ? s : Kr(s);
  }
  return jy(o, l, null, n);
}
function xe(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
function Oo(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Uy() {
  return Math.random().toString(36).substr(2, 8);
}
function fp(n, o) {
  return { usr: n.state, key: n.key, idx: o };
}
function Tl(n, o, l, i) {
  return (
    l === void 0 && (l = null),
    Xe(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof o == "string" ? Er(o) : o,
      { state: l, key: (o && o.key) || i || Uy() },
    )
  );
}
function Kr(n) {
  let { pathname: o = "/", search: l = "", hash: i = "" } = n;
  return (
    l && l !== "?" && (o += l.charAt(0) === "?" ? l : "?" + l),
    i && i !== "#" && (o += i.charAt(0) === "#" ? i : "#" + i),
    o
  );
}
function Er(n) {
  let o = {};
  if (n) {
    let l = n.indexOf("#");
    l >= 0 && ((o.hash = n.substr(l)), (n = n.substr(0, l)));
    let i = n.indexOf("?");
    (i >= 0 && ((o.search = n.substr(i)), (n = n.substr(0, i))),
      n && (o.pathname = n));
  }
  return o;
}
function jy(n, o, l, i) {
  i === void 0 && (i = {});
  let { window: s = document.defaultView, v5Compat: f = !1 } = i,
    d = s.history,
    h = ct.Pop,
    v = null,
    g = y();
  g == null && ((g = 0), d.replaceState(Xe({}, d.state, { idx: g }), ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function E() {
    h = ct.Pop;
    let k = y(),
      L = k == null ? null : k - g;
    ((g = k), v && v({ action: h, location: S.location, delta: L }));
  }
  function _(k, L) {
    h = ct.Push;
    let B = Tl(S.location, k, L);
    g = y() + 1;
    let z = fp(B, g),
      W = S.createHref(B);
    try {
      d.pushState(z, "", W);
    } catch (Y) {
      if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y;
      s.location.assign(W);
    }
    f && v && v({ action: h, location: S.location, delta: 1 });
  }
  function $(k, L) {
    h = ct.Replace;
    let B = Tl(S.location, k, L);
    g = y();
    let z = fp(B, g),
      W = S.createHref(B);
    (d.replaceState(z, "", W),
      f && v && v({ action: h, location: S.location, delta: 0 }));
  }
  function N(k) {
    let L = s.location.origin !== "null" ? s.location.origin : s.location.href,
      B = typeof k == "string" ? k : Kr(k);
    return (
      (B = B.replace(/ $/, "%20")),
      xe(
        L,
        "No window.location.(origin|href) available to create URL for href: " +
          B,
      ),
      new URL(B, L)
    );
  }
  let S = {
    get action() {
      return h;
    },
    get location() {
      return n(s, d);
    },
    listen(k) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(cp, E),
        (v = k),
        () => {
          (s.removeEventListener(cp, E), (v = null));
        }
      );
    },
    createHref(k) {
      return o(s, k);
    },
    createURL: N,
    encodeLocation(k) {
      let L = N(k);
      return { pathname: L.pathname, search: L.search, hash: L.hash };
    },
    push: _,
    replace: $,
    go(k) {
      return d.go(k);
    },
  };
  return S;
}
var Qe;
(function (n) {
  ((n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error"));
})(Qe || (Qe = {}));
const By = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Vy(n) {
  return n.index === !0;
}
function zu(n, o, l, i) {
  return (
    l === void 0 && (l = []),
    i === void 0 && (i = {}),
    n.map((s, f) => {
      let d = [...l, f],
        h = typeof s.id == "string" ? s.id : d.join("-");
      if (
        (xe(
          s.index !== !0 || !s.children,
          "Cannot specify children on an index route",
        ),
        xe(
          !i[h],
          'Found a route id collision on id "' +
            h +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Vy(s))
      ) {
        let v = Xe({}, s, o(s), { id: h });
        return ((i[h] = v), v);
      } else {
        let v = Xe({}, s, o(s), { id: h, children: void 0 });
        return (
          (i[h] = v),
          s.children && (v.children = zu(s.children, o, d, i)),
          v
        );
      }
    })
  );
}
function To(n, o, l) {
  l === void 0 && (l = "/");
  let i = typeof o == "string" ? Er(o) : o,
    s = Fo(i.pathname || "/", l);
  if (s == null) return null;
  let f = wh(n);
  Wy(f);
  let d = null;
  for (let h = 0; d == null && h < f.length; ++h) {
    let v = rg(s);
    d = eg(f[h], v);
  }
  return d;
}
function Hy(n, o) {
  let { route: l, pathname: i, params: s } = n;
  return { id: l.id, pathname: i, params: s, data: o[l.id], handle: l.handle };
}
function wh(n, o, l, i) {
  (o === void 0 && (o = []),
    l === void 0 && (l = []),
    i === void 0 && (i = ""));
  let s = (f, d, h) => {
    let v = {
      relativePath: h === void 0 ? f.path || "" : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    v.relativePath.startsWith("/") &&
      (xe(
        v.relativePath.startsWith(i),
        'Absolute route path "' +
          v.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (v.relativePath = v.relativePath.slice(i.length)));
    let g = Vn([i, v.relativePath]),
      y = l.concat(v);
    (f.children &&
      f.children.length > 0 &&
      (xe(
        f.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + g + '".'),
      ),
      wh(f.children, o, y, g)),
      !(f.path == null && !f.index) &&
        o.push({ path: g, score: Xy(g, f.index), routesMeta: y }));
  };
  return (
    n.forEach((f, d) => {
      var h;
      if (f.path === "" || !((h = f.path) != null && h.includes("?"))) s(f, d);
      else for (let v of Sh(f.path)) s(f, d, v);
    }),
    o
  );
}
function Sh(n) {
  let o = n.split("/");
  if (o.length === 0) return [];
  let [l, ...i] = o,
    s = l.endsWith("?"),
    f = l.replace(/\?$/, "");
  if (i.length === 0) return s ? [f, ""] : [f];
  let d = Sh(i.join("/")),
    h = [];
  return (
    h.push(...d.map((v) => (v === "" ? f : [f, v].join("/")))),
    s && h.push(...d),
    h.map((v) => (n.startsWith("/") && v === "" ? "/" : v))
  );
}
function Wy(n) {
  n.sort((o, l) =>
    o.score !== l.score
      ? l.score - o.score
      : Zy(
          o.routesMeta.map((i) => i.childrenIndex),
          l.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
const Ky = /^:[\w-]+$/,
  Qy = 3,
  qy = 2,
  Yy = 1,
  Gy = 10,
  Jy = -2,
  dp = (n) => n === "*";
function Xy(n, o) {
  let l = n.split("/"),
    i = l.length;
  return (
    l.some(dp) && (i += Jy),
    o && (i += qy),
    l
      .filter((s) => !dp(s))
      .reduce((s, f) => s + (Ky.test(f) ? Qy : f === "" ? Yy : Gy), i)
  );
}
function Zy(n, o) {
  return n.length === o.length && n.slice(0, -1).every((i, s) => i === o[s])
    ? n[n.length - 1] - o[o.length - 1]
    : 0;
}
function eg(n, o) {
  let { routesMeta: l } = n,
    i = {},
    s = "/",
    f = [];
  for (let d = 0; d < l.length; ++d) {
    let h = l[d],
      v = d === l.length - 1,
      g = s === "/" ? o : o.slice(s.length) || "/",
      y = tg(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: v },
        g,
      );
    if (!y) return null;
    Object.assign(i, y.params);
    let E = h.route;
    (f.push({
      params: i,
      pathname: Vn([s, y.pathname]),
      pathnameBase: ig(Vn([s, y.pathnameBase])),
      route: E,
    }),
      y.pathnameBase !== "/" && (s = Vn([s, y.pathnameBase])));
  }
  return f;
}
function tg(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [l, i] = ng(n.path, n.caseSensitive, n.end),
    s = o.match(l);
  if (!s) return null;
  let f = s[0],
    d = f.replace(/(.)\/+$/, "$1"),
    h = s.slice(1);
  return {
    params: i.reduce((g, y, E) => {
      let { paramName: _, isOptional: $ } = y;
      if (_ === "*") {
        let S = h[E] || "";
        d = f.slice(0, f.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const N = h[E];
      return (
        $ && !N ? (g[_] = void 0) : (g[_] = (N || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function ng(n, o, l) {
  (o === void 0 && (o = !1),
    l === void 0 && (l = !0),
    Oo(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'),
    ));
  let i = [],
    s =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, v) => (
            i.push({ paramName: h, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    n.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (s += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
        ? (s += "\\/*$")
        : n !== "" && n !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, o ? void 0 : "i"), i]
  );
}
function rg(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      Oo(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + o + ")."),
      ),
      n
    );
  }
}
function Fo(n, o) {
  if (o === "/") return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null;
  let l = o.endsWith("/") ? o.length - 1 : o.length,
    i = n.charAt(l);
  return i && i !== "/" ? null : n.slice(l) || "/";
}
function og(n, o) {
  o === void 0 && (o = "/");
  let {
    pathname: l,
    search: i = "",
    hash: s = "",
  } = typeof n == "string" ? Er(n) : n;
  return {
    pathname: l ? (l.startsWith("/") ? l : lg(l, o)) : o,
    search: ag(i),
    hash: sg(s),
  };
}
function lg(n, o) {
  let l = o.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((s) => {
      s === ".." ? l.length > 1 && l.pop() : s !== "." && l.push(s);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function hu(n, o, l, i) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      o +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + l + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _h(n) {
  return n.filter(
    (o, l) => l === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function mc(n, o) {
  let l = _h(n);
  return o
    ? l.map((i, s) => (s === n.length - 1 ? i.pathname : i.pathnameBase))
    : l.map((i) => i.pathnameBase);
}
function vc(n, o, l, i) {
  i === void 0 && (i = !1);
  let s;
  typeof n == "string"
    ? (s = Er(n))
    : ((s = Xe({}, n)),
      xe(
        !s.pathname || !s.pathname.includes("?"),
        hu("?", "pathname", "search", s),
      ),
      xe(
        !s.pathname || !s.pathname.includes("#"),
        hu("#", "pathname", "hash", s),
      ),
      xe(!s.search || !s.search.includes("#"), hu("#", "search", "hash", s)));
  let f = n === "" || s.pathname === "",
    d = f ? "/" : s.pathname,
    h;
  if (d == null) h = l;
  else {
    let E = o.length - 1;
    if (!i && d.startsWith("..")) {
      let _ = d.split("/");
      for (; _[0] === "..";) (_.shift(), (E -= 1));
      s.pathname = _.join("/");
    }
    h = E >= 0 ? o[E] : "/";
  }
  let v = og(s, h),
    g = d && d !== "/" && d.endsWith("/"),
    y = (f || d === ".") && l.endsWith("/");
  return (!v.pathname.endsWith("/") && (g || y) && (v.pathname += "/"), v);
}
const Vn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  ig = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ag = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  sg = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
class yc {
  constructor(o, l, i, s) {
    (s === void 0 && (s = !1),
      (this.status = o),
      (this.statusText = l || ""),
      (this.internal = s),
      i instanceof Error
        ? ((this.data = i.toString()), (this.error = i))
        : (this.data = i));
  }
}
function gc(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const Ch = ["post", "put", "patch", "delete"],
  ug = new Set(Ch),
  cg = ["get", ...Ch],
  fg = new Set(cg),
  dg = new Set([301, 302, 303, 307, 308]),
  pg = new Set([307, 308]),
  mu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  hg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Cl = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Ec = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mg = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  Rh = "remix-router-transitions";
function vg(n) {
  const o = n.window ? n.window : typeof window < "u" ? window : void 0,
    l =
      typeof o < "u" &&
      typeof o.document < "u" &&
      typeof o.document.createElement < "u",
    i = !l;
  xe(
    n.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let s;
  if (n.mapRouteProperties) s = n.mapRouteProperties;
  else if (n.detectErrorBoundary) {
    let T = n.detectErrorBoundary;
    s = (A) => ({ hasErrorBoundary: T(A) });
  } else s = mg;
  let f = {},
    d = zu(n.routes, s, void 0, f),
    h,
    v = n.basename || "/",
    g = n.unstable_dataStrategy || wg,
    y = Xe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      n.future,
    ),
    E = null,
    _ = new Set(),
    $ = null,
    N = null,
    S = null,
    k = n.hydrationData != null,
    L = To(d, n.history.location, v),
    B = null;
  if (L == null) {
    let T = rn(404, { pathname: n.history.location.pathname }),
      { matches: A, route: M } = _p(d);
    ((L = A), (B = { [M.id]: T }));
  }
  let z,
    W = L.some((T) => T.route.lazy),
    Y = L.some((T) => T.route.loader);
  if (W) z = !1;
  else if (!Y) z = !0;
  else if (y.v7_partialHydration) {
    let T = n.hydrationData ? n.hydrationData.loaderData : null,
      A = n.hydrationData ? n.hydrationData.errors : null,
      M = (K) =>
        K.route.loader
          ? typeof K.route.loader == "function" && K.route.loader.hydrate === !0
            ? !1
            : (T && T[K.route.id] !== void 0) || (A && A[K.route.id] !== void 0)
          : !0;
    if (A) {
      let K = L.findIndex((Z) => A[Z.route.id] !== void 0);
      z = L.slice(0, K + 1).every(M);
    } else z = L.every(M);
  } else z = n.hydrationData != null;
  let oe,
    P = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: L,
      initialized: z,
      navigation: mu,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || B,
      fetchers: new Map(),
      blockers: new Map(),
    },
    Q = ct.Pop,
    le = !1,
    se,
    _e = !1,
    Ne = new Map(),
    ge = null,
    De = !1,
    Ve = !1,
    Ze = [],
    Me = [],
    V = new Map(),
    ie = 0,
    G = -1,
    x = new Map(),
    I = new Set(),
    fe = new Map(),
    me = new Map(),
    ve = new Set(),
    Ee = new Map(),
    Re = new Map(),
    Te = !1;
  function ze() {
    if (
      ((E = n.history.listen((T) => {
        let { action: A, location: M, delta: K } = T;
        if (Te) {
          Te = !1;
          return;
        }
        Oo(
          Re.size === 0 || K != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let Z = Zr({
          currentLocation: P.location,
          nextLocation: M,
          historyAction: A,
        });
        if (Z && K != null) {
          ((Te = !0),
            n.history.go(K * -1),
            Qn(Z, {
              state: "blocked",
              location: M,
              proceed() {
                (Qn(Z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  n.history.go(K));
              },
              reset() {
                let he = new Map(P.blockers);
                (he.set(Z, Cl), Et({ blockers: he }));
              },
            }));
          return;
        }
        return be(A, M);
      })),
      l)
    ) {
      Lg(o, Ne);
      let T = () => $g(o, Ne);
      (o.addEventListener("pagehide", T),
        (ge = () => o.removeEventListener("pagehide", T)));
    }
    return (
      P.initialized || be(ct.Pop, P.location, { initialHydration: !0 }),
      oe
    );
  }
  function ot() {
    (E && E(),
      ge && ge(),
      _.clear(),
      se && se.abort(),
      P.fetchers.forEach((T, A) => sn(A)),
      P.blockers.forEach((T, A) => Xr(A)));
  }
  function Tn(T) {
    return (_.add(T), () => _.delete(T));
  }
  function Et(T, A) {
    (A === void 0 && (A = {}), (P = Xe({}, P, T)));
    let M = [],
      K = [];
    (y.v7_fetcherPersist &&
      P.fetchers.forEach((Z, he) => {
        Z.state === "idle" && (ve.has(he) ? K.push(he) : M.push(he));
      }),
      [..._].forEach((Z) =>
        Z(P, {
          deletedFetchers: K,
          unstable_viewTransitionOpts: A.viewTransitionOpts,
          unstable_flushSync: A.flushSync === !0,
        }),
      ),
      y.v7_fetcherPersist &&
        (M.forEach((Z) => P.fetchers.delete(Z)), K.forEach((Z) => sn(Z))));
  }
  function ke(T, A, M) {
    var K, Z;
    let { flushSync: he } = M === void 0 ? {} : M,
      ae =
        P.actionData != null &&
        P.navigation.formMethod != null &&
        vn(P.navigation.formMethod) &&
        P.navigation.state === "loading" &&
        ((K = T.state) == null ? void 0 : K._isRedirect) !== !0,
      X;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? (X = A.actionData)
        : (X = null)
      : ae
        ? (X = P.actionData)
        : (X = null);
    let we = A.loaderData
        ? wp(P.loaderData, A.loaderData, A.matches || [], A.errors)
        : P.loaderData,
      de = P.blockers;
    de.size > 0 && ((de = new Map(de)), de.forEach((pe, je) => de.set(je, Cl)));
    let et =
      le === !0 ||
      (P.navigation.formMethod != null &&
        vn(P.navigation.formMethod) &&
        ((Z = T.state) == null ? void 0 : Z._isRedirect) !== !0);
    (h && ((d = h), (h = void 0)),
      De ||
        Q === ct.Pop ||
        (Q === ct.Push
          ? n.history.push(T, T.state)
          : Q === ct.Replace && n.history.replace(T, T.state)));
    let tt;
    if (Q === ct.Pop) {
      let pe = Ne.get(P.location.pathname);
      pe && pe.has(T.pathname)
        ? (tt = { currentLocation: P.location, nextLocation: T })
        : Ne.has(T.pathname) &&
          (tt = { currentLocation: T, nextLocation: P.location });
    } else if (_e) {
      let pe = Ne.get(P.location.pathname);
      (pe
        ? pe.add(T.pathname)
        : ((pe = new Set([T.pathname])), Ne.set(P.location.pathname, pe)),
        (tt = { currentLocation: P.location, nextLocation: T }));
    }
    (Et(
      Xe({}, A, {
        actionData: X,
        loaderData: we,
        historyAction: Q,
        location: T,
        initialized: !0,
        navigation: mu,
        revalidation: "idle",
        restoreScrollPosition: Bo(T, A.matches || P.matches),
        preventScrollReset: et,
        blockers: de,
      }),
      { viewTransitionOpts: tt, flushSync: he === !0 },
    ),
      (Q = ct.Pop),
      (le = !1),
      (_e = !1),
      (De = !1),
      (Ve = !1),
      (Ze = []),
      (Me = []));
  }
  async function Le(T, A) {
    if (typeof T == "number") {
      n.history.go(T);
      return;
    }
    let M = Uu(
        P.location,
        P.matches,
        v,
        y.v7_prependBasename,
        T,
        y.v7_relativeSplatPath,
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative,
      ),
      {
        path: K,
        submission: Z,
        error: he,
      } = pp(y.v7_normalizeFormMethod, !1, M, A),
      ae = P.location,
      X = Tl(P.location, K, A && A.state);
    X = Xe({}, X, n.history.encodeLocation(X));
    let we = A && A.replace != null ? A.replace : void 0,
      de = ct.Push;
    we === !0
      ? (de = ct.Replace)
      : we === !1 ||
        (Z != null &&
          vn(Z.formMethod) &&
          Z.formAction === P.location.pathname + P.location.search &&
          (de = ct.Replace));
    let et =
        A && "preventScrollReset" in A ? A.preventScrollReset === !0 : void 0,
      tt = (A && A.unstable_flushSync) === !0,
      pe = Zr({ currentLocation: ae, nextLocation: X, historyAction: de });
    if (pe) {
      Qn(pe, {
        state: "blocked",
        location: X,
        proceed() {
          (Qn(pe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: X,
          }),
            Le(T, A));
        },
        reset() {
          let je = new Map(P.blockers);
          (je.set(pe, Cl), Et({ blockers: je }));
        },
      });
      return;
    }
    return await be(de, X, {
      submission: Z,
      pendingError: he,
      preventScrollReset: et,
      replace: A && A.replace,
      enableViewTransition: A && A.unstable_viewTransition,
      flushSync: tt,
    });
  }
  function lt() {
    if (
      (ft(),
      Et({ revalidation: "loading" }),
      P.navigation.state !== "submitting")
    ) {
      if (P.navigation.state === "idle") {
        be(P.historyAction, P.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      be(Q || P.historyAction, P.navigation.location, {
        overrideNavigation: P.navigation,
      });
    }
  }
  async function be(T, A, M) {
    (se && se.abort(),
      (se = null),
      (Q = T),
      (De = (M && M.startUninterruptedRevalidation) === !0),
      qn(P.location, P.matches),
      (le = (M && M.preventScrollReset) === !0),
      (_e = (M && M.enableViewTransition) === !0));
    let K = h || d,
      Z = M && M.overrideNavigation,
      he = To(K, A, v),
      ae = (M && M.flushSync) === !0;
    if (!he) {
      let pe = rn(404, { pathname: A.pathname }),
        { matches: je, route: st } = _p(K);
      (Rr(),
        ke(
          A,
          { matches: je, loaderData: {}, errors: { [st.id]: pe } },
          { flushSync: ae },
        ));
      return;
    }
    if (
      P.initialized &&
      !Ve &&
      kg(P.location, A) &&
      !(M && M.submission && vn(M.submission.formMethod))
    ) {
      ke(A, { matches: he }, { flushSync: ae });
      return;
    }
    se = new AbortController();
    let X = Ro(n.history, A, se.signal, M && M.submission),
      we;
    if (M && M.pendingError)
      we = [Pl(he).route.id, { type: Qe.error, error: M.pendingError }];
    else if (M && M.submission && vn(M.submission.formMethod)) {
      let pe = await wt(X, A, M.submission, he, {
        replace: M.replace,
        flushSync: ae,
      });
      if (pe.shortCircuited) return;
      ((we = pe.pendingActionResult),
        (Z = vu(A, M.submission)),
        (ae = !1),
        (X = Ro(n.history, X.url, X.signal)));
    }
    let {
      shortCircuited: de,
      loaderData: et,
      errors: tt,
    } = await ln(
      X,
      A,
      he,
      Z,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      M && M.initialHydration === !0,
      ae,
      we,
    );
    de ||
      ((se = null),
      ke(A, Xe({ matches: he }, Sp(we), { loaderData: et, errors: tt })));
  }
  async function wt(T, A, M, K, Z) {
    (Z === void 0 && (Z = {}), ft());
    let he = Og(A, M);
    Et({ navigation: he }, { flushSync: Z.flushSync === !0 });
    let ae,
      X = Bu(K, A);
    if (!X.route.action && !X.route.lazy)
      ae = {
        type: Qe.error,
        error: rn(405, {
          method: T.method,
          pathname: A.pathname,
          routeId: X.route.id,
        }),
      };
    else if (((ae = (await an("action", T, [X], K))[0]), T.signal.aborted))
      return { shortCircuited: !0 };
    if (Vr(ae)) {
      let we;
      return (
        Z && Z.replace != null
          ? (we = Z.replace)
          : (we =
              yp(ae.response.headers.get("Location"), new URL(T.url), v) ===
              P.location.pathname + P.location.search),
        await Gt(T, ae, { submission: M, replace: we }),
        { shortCircuited: !0 }
      );
    }
    if (Br(ae)) throw rn(400, { type: "defer-action" });
    if (on(ae)) {
      let we = Pl(K, X.route.id);
      return (
        (Z && Z.replace) !== !0 && (Q = ct.Push),
        { pendingActionResult: [we.route.id, ae] }
      );
    }
    return { pendingActionResult: [X.route.id, ae] };
  }
  async function ln(T, A, M, K, Z, he, ae, X, we, de) {
    let et = K || vu(A, Z),
      tt = Z || he || xp(et),
      pe = h || d,
      [je, st] = hp(
        n.history,
        P,
        M,
        tt,
        A,
        y.v7_partialHydration && X === !0,
        y.unstable_skipActionErrorRevalidation,
        Ve,
        Ze,
        Me,
        ve,
        fe,
        I,
        pe,
        v,
        de,
      );
    if (
      (Rr(
        (Pe) =>
          !(M && M.some((St) => St.route.id === Pe)) ||
          (je && je.some((St) => St.route.id === Pe)),
      ),
      (G = ++ie),
      je.length === 0 && st.length === 0)
    ) {
      let Pe = zo();
      return (
        ke(
          A,
          Xe(
            {
              matches: M,
              loaderData: {},
              errors: de && on(de[1]) ? { [de[0]]: de[1].error } : null,
            },
            Sp(de),
            Pe ? { fetchers: new Map(P.fetchers) } : {},
          ),
          { flushSync: we },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!De && (!y.v7_partialHydration || !X)) {
      st.forEach((St) => {
        let Oe = P.fetchers.get(St.key),
          dt = Rl(void 0, Oe ? Oe.data : void 0);
        P.fetchers.set(St.key, dt);
      });
      let Pe;
      (de && !on(de[1])
        ? (Pe = { [de[0]]: de[1].data })
        : P.actionData &&
          (Object.keys(P.actionData).length === 0
            ? (Pe = null)
            : (Pe = P.actionData)),
        Et(
          Xe(
            { navigation: et },
            Pe !== void 0 ? { actionData: Pe } : {},
            st.length > 0 ? { fetchers: new Map(P.fetchers) } : {},
          ),
          { flushSync: we },
        ));
    }
    st.forEach((Pe) => {
      (V.has(Pe.key) && $t(Pe.key),
        Pe.controller && V.set(Pe.key, Pe.controller));
    });
    let xr = () => st.forEach((Pe) => $t(Pe.key));
    se && se.signal.addEventListener("abort", xr);
    let { loaderResults: Rt, fetcherResults: Dn } = await Kn(
      P.matches,
      M,
      je,
      st,
      T,
    );
    if (T.signal.aborted) return { shortCircuited: !0 };
    (se && se.signal.removeEventListener("abort", xr),
      st.forEach((Pe) => V.delete(Pe.key)));
    let Ln = Cp([...Rt, ...Dn]);
    if (Ln) {
      if (Ln.idx >= je.length) {
        let Pe = st[Ln.idx - je.length].key;
        I.add(Pe);
      }
      return (await Gt(T, Ln.result, { replace: ae }), { shortCircuited: !0 });
    }
    let { loaderData: Yn, errors: Bt } = Ep(P, M, je, Rt, de, st, Dn, Ee);
    (Ee.forEach((Pe, St) => {
      Pe.subscribe((Oe) => {
        (Oe || Pe.done) && Ee.delete(St);
      });
    }),
      y.v7_partialHydration &&
        X &&
        P.errors &&
        Object.entries(P.errors)
          .filter((Pe) => {
            let [St] = Pe;
            return !je.some((Oe) => Oe.route.id === St);
          })
          .forEach((Pe) => {
            let [St, Oe] = Pe;
            Bt = Object.assign(Bt || {}, { [St]: Oe });
          }));
    let kr = zo(),
      Pr = Uo(G),
      Tr = kr || Pr || st.length > 0;
    return Xe(
      { loaderData: Yn, errors: Bt },
      Tr ? { fetchers: new Map(P.fetchers) } : {},
    );
  }
  function qe(T, A, M, K) {
    if (i)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    V.has(T) && $t(T);
    let Z = (K && K.unstable_flushSync) === !0,
      he = h || d,
      ae = Uu(
        P.location,
        P.matches,
        v,
        y.v7_prependBasename,
        M,
        y.v7_relativeSplatPath,
        A,
        K == null ? void 0 : K.relative,
      ),
      X = To(he, ae, v);
    if (!X) {
      jt(T, A, rn(404, { pathname: ae }), { flushSync: Z });
      return;
    }
    let {
      path: we,
      submission: de,
      error: et,
    } = pp(y.v7_normalizeFormMethod, !0, ae, K);
    if (et) {
      jt(T, A, et, { flushSync: Z });
      return;
    }
    let tt = Bu(X, we);
    if (((le = (K && K.preventScrollReset) === !0), de && vn(de.formMethod))) {
      Ye(T, A, we, tt, X, Z, de);
      return;
    }
    (fe.set(T, { routeId: A, path: we }), mt(T, A, we, tt, X, Z, de));
  }
  async function Ye(T, A, M, K, Z, he, ae) {
    if ((ft(), fe.delete(T), !K.route.action && !K.route.lazy)) {
      let dt = rn(405, { method: ae.formMethod, pathname: M, routeId: A });
      jt(T, A, dt, { flushSync: he });
      return;
    }
    let X = P.fetchers.get(T);
    it(T, Dg(ae, X), { flushSync: he });
    let we = new AbortController(),
      de = Ro(n.history, M, we.signal, ae);
    V.set(T, we);
    let et = ie,
      pe = (await an("action", de, [K], Z))[0];
    if (de.signal.aborted) {
      V.get(T) === we && V.delete(T);
      return;
    }
    if (y.v7_fetcherPersist && ve.has(T)) {
      if (Vr(pe) || on(pe)) {
        it(T, mr(void 0));
        return;
      }
    } else {
      if (Vr(pe))
        if ((V.delete(T), G > et)) {
          it(T, mr(void 0));
          return;
        } else
          return (
            I.add(T),
            it(T, Rl(ae)),
            Gt(de, pe, { fetcherSubmission: ae })
          );
      if (on(pe)) {
        jt(T, A, pe.error);
        return;
      }
    }
    if (Br(pe)) throw rn(400, { type: "defer-action" });
    let je = P.navigation.location || P.location,
      st = Ro(n.history, je, we.signal),
      xr = h || d,
      Rt =
        P.navigation.state !== "idle"
          ? To(xr, P.navigation.location, v)
          : P.matches;
    xe(Rt, "Didn't find any matches after fetcher action");
    let Dn = ++ie;
    x.set(T, Dn);
    let Ln = Rl(ae, pe.data);
    P.fetchers.set(T, Ln);
    let [Yn, Bt] = hp(
      n.history,
      P,
      Rt,
      ae,
      je,
      !1,
      y.unstable_skipActionErrorRevalidation,
      Ve,
      Ze,
      Me,
      ve,
      fe,
      I,
      xr,
      v,
      [K.route.id, pe],
    );
    (Bt.filter((dt) => dt.key !== T).forEach((dt) => {
      let $n = dt.key,
        Vo = P.fetchers.get($n),
        eo = Rl(void 0, Vo ? Vo.data : void 0);
      (P.fetchers.set($n, eo),
        V.has($n) && $t($n),
        dt.controller && V.set($n, dt.controller));
    }),
      Et({ fetchers: new Map(P.fetchers) }));
    let kr = () => Bt.forEach((dt) => $t(dt.key));
    we.signal.addEventListener("abort", kr);
    let { loaderResults: Pr, fetcherResults: Tr } = await Kn(
      P.matches,
      Rt,
      Yn,
      Bt,
      st,
    );
    if (we.signal.aborted) return;
    (we.signal.removeEventListener("abort", kr),
      x.delete(T),
      V.delete(T),
      Bt.forEach((dt) => V.delete(dt.key)));
    let Pe = Cp([...Pr, ...Tr]);
    if (Pe) {
      if (Pe.idx >= Yn.length) {
        let dt = Bt[Pe.idx - Yn.length].key;
        I.add(dt);
      }
      return Gt(st, Pe.result);
    }
    let { loaderData: St, errors: Oe } = Ep(
      P,
      P.matches,
      Yn,
      Pr,
      void 0,
      Bt,
      Tr,
      Ee,
    );
    if (P.fetchers.has(T)) {
      let dt = mr(pe.data);
      P.fetchers.set(T, dt);
    }
    (Uo(Dn),
      P.navigation.state === "loading" && Dn > G
        ? (xe(Q, "Expected pending action"),
          se && se.abort(),
          ke(P.navigation.location, {
            matches: Rt,
            loaderData: St,
            errors: Oe,
            fetchers: new Map(P.fetchers),
          }))
        : (Et({
            errors: Oe,
            loaderData: wp(P.loaderData, St, Rt, Oe),
            fetchers: new Map(P.fetchers),
          }),
          (Ve = !1)));
  }
  async function mt(T, A, M, K, Z, he, ae) {
    let X = P.fetchers.get(T);
    it(T, Rl(ae, X ? X.data : void 0), { flushSync: he });
    let we = new AbortController(),
      de = Ro(n.history, M, we.signal);
    V.set(T, we);
    let et = ie,
      pe = (await an("loader", de, [K], Z))[0];
    if (
      (Br(pe) && (pe = (await Th(pe, de.signal, !0)) || pe),
      V.get(T) === we && V.delete(T),
      !de.signal.aborted)
    ) {
      if (ve.has(T)) {
        it(T, mr(void 0));
        return;
      }
      if (Vr(pe))
        if (G > et) {
          it(T, mr(void 0));
          return;
        } else {
          (I.add(T), await Gt(de, pe));
          return;
        }
      if (on(pe)) {
        jt(T, A, pe.error);
        return;
      }
      (xe(!Br(pe), "Unhandled fetcher deferred data"), it(T, mr(pe.data)));
    }
  }
  async function Gt(T, A, M) {
    let {
      submission: K,
      fetcherSubmission: Z,
      replace: he,
    } = M === void 0 ? {} : M;
    A.response.headers.has("X-Remix-Revalidate") && (Ve = !0);
    let ae = A.response.headers.get("Location");
    (xe(ae, "Expected a Location header on the redirect Response"),
      (ae = yp(ae, new URL(T.url), v)));
    let X = Tl(P.location, ae, { _isRedirect: !0 });
    if (l) {
      let je = !1;
      if (A.response.headers.has("X-Remix-Reload-Document")) je = !0;
      else if (Ec.test(ae)) {
        const st = n.history.createURL(ae);
        je = st.origin !== o.location.origin || Fo(st.pathname, v) == null;
      }
      if (je) {
        he ? o.location.replace(ae) : o.location.assign(ae);
        return;
      }
    }
    se = null;
    let we = he === !0 ? ct.Replace : ct.Push,
      { formMethod: de, formAction: et, formEncType: tt } = P.navigation;
    !K && !Z && de && et && tt && (K = xp(P.navigation));
    let pe = K || Z;
    if (pg.has(A.response.status) && pe && vn(pe.formMethod))
      await be(we, X, {
        submission: Xe({}, pe, { formAction: ae }),
        preventScrollReset: le,
      });
    else {
      let je = vu(X, K);
      await be(we, X, {
        overrideNavigation: je,
        fetcherSubmission: Z,
        preventScrollReset: le,
      });
    }
  }
  async function an(T, A, M, K) {
    try {
      let Z = await Sg(g, T, A, M, K, f, s);
      return await Promise.all(
        Z.map((he, ae) => {
          if (Pg(he)) {
            let X = he.result;
            return {
              type: Qe.redirect,
              response: Rg(X, A, M[ae].route.id, K, v, y.v7_relativeSplatPath),
            };
          }
          return Cg(he);
        }),
      );
    } catch (Z) {
      return M.map(() => ({ type: Qe.error, error: Z }));
    }
  }
  async function Kn(T, A, M, K, Z) {
    let [he, ...ae] = await Promise.all([
      M.length ? an("loader", Z, M, A) : [],
      ...K.map((X) => {
        if (X.matches && X.match && X.controller) {
          let we = Ro(n.history, X.path, X.controller.signal);
          return an("loader", we, [X.match], X.matches).then((de) => de[0]);
        } else
          return Promise.resolve({
            type: Qe.error,
            error: rn(404, { pathname: X.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Rp(
          T,
          M,
          he,
          he.map(() => Z.signal),
          !1,
          P.loaderData,
        ),
        Rp(
          T,
          K.map((X) => X.match),
          ae,
          K.map((X) => (X.controller ? X.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: he, fetcherResults: ae }
    );
  }
  function ft() {
    ((Ve = !0),
      Ze.push(...Rr()),
      fe.forEach((T, A) => {
        V.has(A) && (Me.push(A), $t(A));
      }));
  }
  function it(T, A, M) {
    (M === void 0 && (M = {}),
      P.fetchers.set(T, A),
      Et(
        { fetchers: new Map(P.fetchers) },
        { flushSync: (M && M.flushSync) === !0 },
      ));
  }
  function jt(T, A, M, K) {
    K === void 0 && (K = {});
    let Z = Pl(P.matches, A);
    (sn(T),
      Et(
        { errors: { [Z.route.id]: M }, fetchers: new Map(P.fetchers) },
        { flushSync: (K && K.flushSync) === !0 },
      ));
  }
  function Nn(T) {
    return (
      y.v7_fetcherPersist &&
        (me.set(T, (me.get(T) || 0) + 1), ve.has(T) && ve.delete(T)),
      P.fetchers.get(T) || hg
    );
  }
  function sn(T) {
    let A = P.fetchers.get(T);
    (V.has(T) && !(A && A.state === "loading" && x.has(T)) && $t(T),
      fe.delete(T),
      x.delete(T),
      I.delete(T),
      ve.delete(T),
      P.fetchers.delete(T));
  }
  function Cr(T) {
    if (y.v7_fetcherPersist) {
      let A = (me.get(T) || 0) - 1;
      A <= 0 ? (me.delete(T), ve.add(T)) : me.set(T, A);
    } else sn(T);
    Et({ fetchers: new Map(P.fetchers) });
  }
  function $t(T) {
    let A = V.get(T);
    (xe(A, "Expected fetch controller: " + T), A.abort(), V.delete(T));
  }
  function jl(T) {
    for (let A of T) {
      let M = Nn(A),
        K = mr(M.data);
      P.fetchers.set(A, K);
    }
  }
  function zo() {
    let T = [],
      A = !1;
    for (let M of I) {
      let K = P.fetchers.get(M);
      (xe(K, "Expected fetcher: " + M),
        K.state === "loading" && (I.delete(M), T.push(M), (A = !0)));
    }
    return (jl(T), A);
  }
  function Uo(T) {
    let A = [];
    for (let [M, K] of x)
      if (K < T) {
        let Z = P.fetchers.get(M);
        (xe(Z, "Expected fetcher: " + M),
          Z.state === "loading" && ($t(M), x.delete(M), A.push(M)));
      }
    return (jl(A), A.length > 0);
  }
  function Oa(T, A) {
    let M = P.blockers.get(T) || Cl;
    return (Re.get(T) !== A && Re.set(T, A), M);
  }
  function Xr(T) {
    (P.blockers.delete(T), Re.delete(T));
  }
  function Qn(T, A) {
    let M = P.blockers.get(T) || Cl;
    xe(
      (M.state === "unblocked" && A.state === "blocked") ||
        (M.state === "blocked" && A.state === "blocked") ||
        (M.state === "blocked" && A.state === "proceeding") ||
        (M.state === "blocked" && A.state === "unblocked") ||
        (M.state === "proceeding" && A.state === "unblocked"),
      "Invalid blocker state transition: " + M.state + " -> " + A.state,
    );
    let K = new Map(P.blockers);
    (K.set(T, A), Et({ blockers: K }));
  }
  function Zr(T) {
    let { currentLocation: A, nextLocation: M, historyAction: K } = T;
    if (Re.size === 0) return;
    Re.size > 1 && Oo(!1, "A router only supports one blocker at a time");
    let Z = Array.from(Re.entries()),
      [he, ae] = Z[Z.length - 1],
      X = P.blockers.get(he);
    if (
      !(X && X.state === "proceeding") &&
      ae({ currentLocation: A, nextLocation: M, historyAction: K })
    )
      return he;
  }
  function Rr(T) {
    let A = [];
    return (
      Ee.forEach((M, K) => {
        (!T || T(K)) && (M.cancel(), A.push(K), Ee.delete(K));
      }),
      A
    );
  }
  function jo(T, A, M) {
    if ((($ = T), (S = A), (N = M || null), !k && P.navigation === mu)) {
      k = !0;
      let K = Bo(P.location, P.matches);
      K != null && Et({ restoreScrollPosition: K });
    }
    return () => {
      (($ = null), (S = null), (N = null));
    };
  }
  function On(T, A) {
    return (
      (N &&
        N(
          T,
          A.map((K) => Hy(K, P.loaderData)),
        )) ||
      T.key
    );
  }
  function qn(T, A) {
    if ($ && S) {
      let M = On(T, A);
      $[M] = S();
    }
  }
  function Bo(T, A) {
    if ($) {
      let M = On(T, A),
        K = $[M];
      if (typeof K == "number") return K;
    }
    return null;
  }
  function Bl(T) {
    ((f = {}), (h = zu(T, s, void 0, f)));
  }
  return (
    (oe = {
      get basename() {
        return v;
      },
      get future() {
        return y;
      },
      get state() {
        return P;
      },
      get routes() {
        return d;
      },
      get window() {
        return o;
      },
      initialize: ze,
      subscribe: Tn,
      enableScrollRestoration: jo,
      navigate: Le,
      fetch: qe,
      revalidate: lt,
      createHref: (T) => n.history.createHref(T),
      encodeLocation: (T) => n.history.encodeLocation(T),
      getFetcher: Nn,
      deleteFetcher: Cr,
      dispose: ot,
      getBlocker: Oa,
      deleteBlocker: Xr,
      _internalFetchControllers: V,
      _internalActiveDeferreds: Ee,
      _internalSetRoutes: Bl,
    }),
    oe
  );
}
function yg(n) {
  return (
    n != null &&
    (("formData" in n && n.formData != null) ||
      ("body" in n && n.body !== void 0))
  );
}
function Uu(n, o, l, i, s, f, d, h) {
  let v, g;
  if (d) {
    v = [];
    for (let E of o)
      if ((v.push(E), E.route.id === d)) {
        g = E;
        break;
      }
  } else ((v = o), (g = o[o.length - 1]));
  let y = vc(s || ".", mc(v, f), Fo(n.pathname, l) || n.pathname, h === "path");
  return (
    s == null && ((y.search = n.search), (y.hash = n.hash)),
    (s == null || s === "" || s === ".") &&
      g &&
      g.route.index &&
      !wc(y.search) &&
      (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"),
    i &&
      l !== "/" &&
      (y.pathname = y.pathname === "/" ? l : Vn([l, y.pathname])),
    Kr(y)
  );
}
function pp(n, o, l, i) {
  if (!i || !yg(i)) return { path: l };
  if (i.formMethod && !Ng(i.formMethod))
    return { path: l, error: rn(405, { method: i.formMethod }) };
  let s = () => ({ path: l, error: rn(400, { type: "invalid-body" }) }),
    f = i.formMethod || "get",
    d = n ? f.toUpperCase() : f.toLowerCase(),
    h = kh(l);
  if (i.body !== void 0) {
    if (i.formEncType === "text/plain") {
      if (!vn(d)) return s();
      let _ =
        typeof i.body == "string"
          ? i.body
          : i.body instanceof FormData || i.body instanceof URLSearchParams
            ? Array.from(i.body.entries()).reduce(($, N) => {
                let [S, k] = N;
                return (
                  "" +
                  $ +
                  S +
                  "=" +
                  k +
                  `
`
                );
              }, "")
            : String(i.body);
      return {
        path: l,
        submission: {
          formMethod: d,
          formAction: h,
          formEncType: i.formEncType,
          formData: void 0,
          json: void 0,
          text: _,
        },
      };
    } else if (i.formEncType === "application/json") {
      if (!vn(d)) return s();
      try {
        let _ = typeof i.body == "string" ? JSON.parse(i.body) : i.body;
        return {
          path: l,
          submission: {
            formMethod: d,
            formAction: h,
            formEncType: i.formEncType,
            formData: void 0,
            json: _,
            text: void 0,
          },
        };
      } catch {
        return s();
      }
    }
  }
  xe(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let v, g;
  if (i.formData) ((v = ju(i.formData)), (g = i.formData));
  else if (i.body instanceof FormData) ((v = ju(i.body)), (g = i.body));
  else if (i.body instanceof URLSearchParams) ((v = i.body), (g = gp(v)));
  else if (i.body == null) ((v = new URLSearchParams()), (g = new FormData()));
  else
    try {
      ((v = new URLSearchParams(i.body)), (g = gp(v)));
    } catch {
      return s();
    }
  let y = {
    formMethod: d,
    formAction: h,
    formEncType: (i && i.formEncType) || "application/x-www-form-urlencoded",
    formData: g,
    json: void 0,
    text: void 0,
  };
  if (vn(y.formMethod)) return { path: l, submission: y };
  let E = Er(l);
  return (
    o && E.search && wc(E.search) && v.append("index", ""),
    (E.search = "?" + v),
    { path: Kr(E), submission: y }
  );
}
function gg(n, o) {
  let l = n;
  if (o) {
    let i = n.findIndex((s) => s.route.id === o);
    i >= 0 && (l = n.slice(0, i));
  }
  return l;
}
function hp(n, o, l, i, s, f, d, h, v, g, y, E, _, $, N, S) {
  let k = S ? (on(S[1]) ? S[1].error : S[1].data) : void 0,
    L = n.createURL(o.location),
    B = n.createURL(s),
    z = S && on(S[1]) ? S[0] : void 0,
    W = z ? gg(l, z) : l,
    Y = S ? S[1].statusCode : void 0,
    oe = d && Y && Y >= 400,
    P = W.filter((le, se) => {
      let { route: _e } = le;
      if (_e.lazy) return !0;
      if (_e.loader == null) return !1;
      if (f)
        return typeof _e.loader != "function" || _e.loader.hydrate
          ? !0
          : o.loaderData[_e.id] === void 0 &&
              (!o.errors || o.errors[_e.id] === void 0);
      if (
        Eg(o.loaderData, o.matches[se], le) ||
        v.some((De) => De === le.route.id)
      )
        return !0;
      let Ne = o.matches[se],
        ge = le;
      return mp(
        le,
        Xe(
          {
            currentUrl: L,
            currentParams: Ne.params,
            nextUrl: B,
            nextParams: ge.params,
          },
          i,
          {
            actionResult: k,
            unstable_actionStatus: Y,
            defaultShouldRevalidate: oe
              ? !1
              : h ||
                L.pathname + L.search === B.pathname + B.search ||
                L.search !== B.search ||
                xh(Ne, ge),
          },
        ),
      );
    }),
    Q = [];
  return (
    E.forEach((le, se) => {
      if (f || !l.some((Ve) => Ve.route.id === le.routeId) || y.has(se)) return;
      let _e = To($, le.path, N);
      if (!_e) {
        Q.push({
          key: se,
          routeId: le.routeId,
          path: le.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Ne = o.fetchers.get(se),
        ge = Bu(_e, le.path),
        De = !1;
      (_.has(se)
        ? (De = !1)
        : g.includes(se)
          ? (De = !0)
          : Ne && Ne.state !== "idle" && Ne.data === void 0
            ? (De = h)
            : (De = mp(
                ge,
                Xe(
                  {
                    currentUrl: L,
                    currentParams: o.matches[o.matches.length - 1].params,
                    nextUrl: B,
                    nextParams: l[l.length - 1].params,
                  },
                  i,
                  {
                    actionResult: k,
                    unstable_actionStatus: Y,
                    defaultShouldRevalidate: oe ? !1 : h,
                  },
                ),
              )),
        De &&
          Q.push({
            key: se,
            routeId: le.routeId,
            path: le.path,
            matches: _e,
            match: ge,
            controller: new AbortController(),
          }));
    }),
    [P, Q]
  );
}
function Eg(n, o, l) {
  let i = !o || l.route.id !== o.route.id,
    s = n[l.route.id] === void 0;
  return i || s;
}
function xh(n, o) {
  let l = n.route.path;
  return (
    n.pathname !== o.pathname ||
    (l != null && l.endsWith("*") && n.params["*"] !== o.params["*"])
  );
}
function mp(n, o) {
  if (n.route.shouldRevalidate) {
    let l = n.route.shouldRevalidate(o);
    if (typeof l == "boolean") return l;
  }
  return o.defaultShouldRevalidate;
}
async function vp(n, o, l) {
  if (!n.lazy) return;
  let i = await n.lazy();
  if (!n.lazy) return;
  let s = l[n.id];
  xe(s, "No route found in manifest");
  let f = {};
  for (let d in i) {
    let v = s[d] !== void 0 && d !== "hasErrorBoundary";
    (Oo(
      !v,
      'Route "' +
        s.id +
        '" has a static property "' +
        d +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + d + '" will be ignored.'),
    ),
      !v && !By.has(d) && (f[d] = i[d]));
  }
  (Object.assign(s, f), Object.assign(s, Xe({}, o(s), { lazy: void 0 })));
}
function wg(n) {
  return Promise.all(n.matches.map((o) => o.resolve()));
}
async function Sg(n, o, l, i, s, f, d, h) {
  let v = i.reduce((E, _) => E.add(_.route.id), new Set()),
    g = new Set(),
    y = await n({
      matches: s.map((E) => {
        let _ = v.has(E.route.id);
        return Xe({}, E, {
          shouldLoad: _,
          resolve: (N) => (
            g.add(E.route.id),
            _
              ? _g(o, l, E, f, d, N, h)
              : Promise.resolve({ type: Qe.data, result: void 0 })
          ),
        });
      }),
      request: l,
      params: s[0].params,
      context: h,
    });
  return (
    s.forEach((E) =>
      xe(
        g.has(E.route.id),
        '`match.resolve()` was not called for route id "' +
          E.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    y.filter((E, _) => v.has(s[_].route.id))
  );
}
async function _g(n, o, l, i, s, f, d) {
  let h,
    v,
    g = (y) => {
      let E,
        _ = new Promise((S, k) => (E = k));
      ((v = () => E()), o.signal.addEventListener("abort", v));
      let $ = (S) =>
          typeof y != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + n + '" [routeId: ' + l.route.id + "]"),
                ),
              )
            : y(
                { request: o, params: l.params, context: d },
                ...(S !== void 0 ? [S] : []),
              ),
        N;
      return (
        f
          ? (N = f((S) => $(S)))
          : (N = (async () => {
              try {
                return { type: "data", result: await $() };
              } catch (S) {
                return { type: "error", result: S };
              }
            })()),
        Promise.race([N, _])
      );
    };
  try {
    let y = l.route[n];
    if (l.route.lazy)
      if (y) {
        let E,
          [_] = await Promise.all([
            g(y).catch(($) => {
              E = $;
            }),
            vp(l.route, s, i),
          ]);
        if (E !== void 0) throw E;
        h = _;
      } else if ((await vp(l.route, s, i), (y = l.route[n]), y)) h = await g(y);
      else if (n === "action") {
        let E = new URL(o.url),
          _ = E.pathname + E.search;
        throw rn(405, { method: o.method, pathname: _, routeId: l.route.id });
      } else return { type: Qe.data, result: void 0 };
    else if (y) h = await g(y);
    else {
      let E = new URL(o.url),
        _ = E.pathname + E.search;
      throw rn(404, { pathname: _ });
    }
    xe(
      h.result !== void 0,
      "You defined " +
        (n === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          l.route.id +
          "\" but didn't return anything from your `" +
          n +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (y) {
    return { type: Qe.error, result: y };
  } finally {
    v && o.signal.removeEventListener("abort", v);
  }
  return h;
}
async function Cg(n) {
  let { result: o, type: l, status: i } = n;
  if (Ph(o)) {
    let d;
    try {
      let h = o.headers.get("Content-Type");
      h && /\bapplication\/json\b/.test(h)
        ? o.body == null
          ? (d = null)
          : (d = await o.json())
        : (d = await o.text());
    } catch (h) {
      return { type: Qe.error, error: h };
    }
    return l === Qe.error
      ? {
          type: Qe.error,
          error: new yc(o.status, o.statusText, d),
          statusCode: o.status,
          headers: o.headers,
        }
      : { type: Qe.data, data: d, statusCode: o.status, headers: o.headers };
  }
  if (l === Qe.error)
    return { type: Qe.error, error: o, statusCode: gc(o) ? o.status : i };
  if (Tg(o)) {
    var s, f;
    return {
      type: Qe.deferred,
      deferredData: o,
      statusCode: (s = o.init) == null ? void 0 : s.status,
      headers:
        ((f = o.init) == null ? void 0 : f.headers) &&
        new Headers(o.init.headers),
    };
  }
  return { type: Qe.data, data: o, statusCode: i };
}
function Rg(n, o, l, i, s, f) {
  let d = n.headers.get("Location");
  if (
    (xe(
      d,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Ec.test(d))
  ) {
    let h = i.slice(0, i.findIndex((v) => v.route.id === l) + 1);
    ((d = Uu(new URL(o.url), h, s, !0, d, f)), n.headers.set("Location", d));
  }
  return n;
}
function yp(n, o, l) {
  if (Ec.test(n)) {
    let i = n,
      s = i.startsWith("//") ? new URL(o.protocol + i) : new URL(i),
      f = Fo(s.pathname, l) != null;
    if (s.origin === o.origin && f) return s.pathname + s.search + s.hash;
  }
  return n;
}
function Ro(n, o, l, i) {
  let s = n.createURL(kh(o)).toString(),
    f = { signal: l };
  if (i && vn(i.formMethod)) {
    let { formMethod: d, formEncType: h } = i;
    ((f.method = d.toUpperCase()),
      h === "application/json"
        ? ((f.headers = new Headers({ "Content-Type": h })),
          (f.body = JSON.stringify(i.json)))
        : h === "text/plain"
          ? (f.body = i.text)
          : h === "application/x-www-form-urlencoded" && i.formData
            ? (f.body = ju(i.formData))
            : (f.body = i.formData));
  }
  return new Request(s, f);
}
function ju(n) {
  let o = new URLSearchParams();
  for (let [l, i] of n.entries())
    o.append(l, typeof i == "string" ? i : i.name);
  return o;
}
function gp(n) {
  let o = new FormData();
  for (let [l, i] of n.entries()) o.append(l, i);
  return o;
}
function xg(n, o, l, i, s, f) {
  let d = {},
    h = null,
    v,
    g = !1,
    y = {},
    E = i && on(i[1]) ? i[1].error : void 0;
  return (
    l.forEach((_, $) => {
      let N = o[$].route.id;
      if (
        (xe(!Vr(_), "Cannot handle redirect results in processLoaderData"),
        on(_))
      ) {
        let S = _.error;
        (E !== void 0 && ((S = E), (E = void 0)), (h = h || {}));
        {
          let k = Pl(n, N);
          h[k.route.id] == null && (h[k.route.id] = S);
        }
        ((d[N] = void 0),
          g || ((g = !0), (v = gc(_.error) ? _.error.status : 500)),
          _.headers && (y[N] = _.headers));
      } else
        Br(_)
          ? (s.set(N, _.deferredData),
            (d[N] = _.deferredData.data),
            _.statusCode != null &&
              _.statusCode !== 200 &&
              !g &&
              (v = _.statusCode),
            _.headers && (y[N] = _.headers))
          : ((d[N] = _.data),
            _.statusCode && _.statusCode !== 200 && !g && (v = _.statusCode),
            _.headers && (y[N] = _.headers));
    }),
    E !== void 0 && i && ((h = { [i[0]]: E }), (d[i[0]] = void 0)),
    { loaderData: d, errors: h, statusCode: v || 200, loaderHeaders: y }
  );
}
function Ep(n, o, l, i, s, f, d, h) {
  let { loaderData: v, errors: g } = xg(o, l, i, s, h);
  for (let y = 0; y < f.length; y++) {
    let { key: E, match: _, controller: $ } = f[y];
    xe(
      d !== void 0 && d[y] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let N = d[y];
    if (!($ && $.signal.aborted))
      if (on(N)) {
        let S = Pl(n.matches, _ == null ? void 0 : _.route.id);
        ((g && g[S.route.id]) || (g = Xe({}, g, { [S.route.id]: N.error })),
          n.fetchers.delete(E));
      } else if (Vr(N)) xe(!1, "Unhandled fetcher revalidation redirect");
      else if (Br(N)) xe(!1, "Unhandled fetcher deferred data");
      else {
        let S = mr(N.data);
        n.fetchers.set(E, S);
      }
  }
  return { loaderData: v, errors: g };
}
function wp(n, o, l, i) {
  let s = Xe({}, o);
  for (let f of l) {
    let d = f.route.id;
    if (
      (o.hasOwnProperty(d)
        ? o[d] !== void 0 && (s[d] = o[d])
        : n[d] !== void 0 && f.route.loader && (s[d] = n[d]),
      i && i.hasOwnProperty(d))
    )
      break;
  }
  return s;
}
function Sp(n) {
  return n
    ? on(n[1])
      ? { actionData: {} }
      : { actionData: { [n[0]]: n[1].data } }
    : {};
}
function Pl(n, o) {
  return (
    (o ? n.slice(0, n.findIndex((i) => i.route.id === o) + 1) : [...n])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || n[0]
  );
}
function _p(n) {
  let o =
    n.length === 1
      ? n[0]
      : n.find((l) => l.index || !l.path || l.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: o }],
    route: o,
  };
}
function rn(n, o) {
  let { pathname: l, routeId: i, method: s, type: f } = o === void 0 ? {} : o,
    d = "Unknown Server Error",
    h = "Unknown @remix-run/router error";
  return (
    n === 400
      ? ((d = "Bad Request"),
        s && l && i
          ? (h =
              "You made a " +
              s +
              ' request to "' +
              l +
              '" but ' +
              ('did not provide a `loader` for route "' + i + '", ') +
              "so there is no way to handle the request.")
          : f === "defer-action"
            ? (h = "defer() is not supported in actions")
            : f === "invalid-body" && (h = "Unable to encode submission body"))
      : n === 403
        ? ((d = "Forbidden"),
          (h = 'Route "' + i + '" does not match URL "' + l + '"'))
        : n === 404
          ? ((d = "Not Found"), (h = 'No route matches URL "' + l + '"'))
          : n === 405 &&
            ((d = "Method Not Allowed"),
            s && l && i
              ? (h =
                  "You made a " +
                  s.toUpperCase() +
                  ' request to "' +
                  l +
                  '" but ' +
                  ('did not provide an `action` for route "' + i + '", ') +
                  "so there is no way to handle the request.")
              : s && (h = 'Invalid request method "' + s.toUpperCase() + '"')),
    new yc(n || 500, d, new Error(h), !0)
  );
}
function Cp(n) {
  for (let o = n.length - 1; o >= 0; o--) {
    let l = n[o];
    if (Vr(l)) return { result: l, idx: o };
  }
}
function kh(n) {
  let o = typeof n == "string" ? Er(n) : n;
  return Kr(Xe({}, o, { hash: "" }));
}
function kg(n, o) {
  return n.pathname !== o.pathname || n.search !== o.search
    ? !1
    : n.hash === ""
      ? o.hash !== ""
      : n.hash === o.hash
        ? !0
        : o.hash !== "";
}
function Pg(n) {
  return Ph(n.result) && dg.has(n.result.status);
}
function Br(n) {
  return n.type === Qe.deferred;
}
function on(n) {
  return n.type === Qe.error;
}
function Vr(n) {
  return (n && n.type) === Qe.redirect;
}
function Tg(n) {
  let o = n;
  return (
    o &&
    typeof o == "object" &&
    typeof o.data == "object" &&
    typeof o.subscribe == "function" &&
    typeof o.cancel == "function" &&
    typeof o.resolveData == "function"
  );
}
function Ph(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.headers == "object" &&
    typeof n.body < "u"
  );
}
function Ng(n) {
  return fg.has(n.toLowerCase());
}
function vn(n) {
  return ug.has(n.toLowerCase());
}
async function Rp(n, o, l, i, s, f) {
  for (let d = 0; d < l.length; d++) {
    let h = l[d],
      v = o[d];
    if (!v) continue;
    let g = n.find((E) => E.route.id === v.route.id),
      y = g != null && !xh(g, v) && (f && f[v.route.id]) !== void 0;
    if (Br(h) && (s || y)) {
      let E = i[d];
      (xe(
        E,
        "Expected an AbortSignal for revalidating fetcher deferred result",
      ),
        await Th(h, E, s).then((_) => {
          _ && (l[d] = _ || l[d]);
        }));
    }
  }
}
async function Th(n, o, l) {
  if ((l === void 0 && (l = !1), !(await n.deferredData.resolveData(o)))) {
    if (l)
      try {
        return { type: Qe.data, data: n.deferredData.unwrappedData };
      } catch (s) {
        return { type: Qe.error, error: s };
      }
    return { type: Qe.data, data: n.deferredData.data };
  }
}
function wc(n) {
  return new URLSearchParams(n).getAll("index").some((o) => o === "");
}
function Bu(n, o) {
  let l = typeof o == "string" ? Er(o).search : o.search;
  if (n[n.length - 1].route.index && wc(l || "")) return n[n.length - 1];
  let i = _h(n);
  return i[i.length - 1];
}
function xp(n) {
  let {
    formMethod: o,
    formAction: l,
    formEncType: i,
    text: s,
    formData: f,
    json: d,
  } = n;
  if (!(!o || !l || !i)) {
    if (s != null)
      return {
        formMethod: o,
        formAction: l,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (f != null)
      return {
        formMethod: o,
        formAction: l,
        formEncType: i,
        formData: f,
        json: void 0,
        text: void 0,
      };
    if (d !== void 0)
      return {
        formMethod: o,
        formAction: l,
        formEncType: i,
        formData: void 0,
        json: d,
        text: void 0,
      };
  }
}
function vu(n, o) {
  return o
    ? {
        state: "loading",
        location: n,
        formMethod: o.formMethod,
        formAction: o.formAction,
        formEncType: o.formEncType,
        formData: o.formData,
        json: o.json,
        text: o.text,
      }
    : {
        state: "loading",
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Og(n, o) {
  return {
    state: "submitting",
    location: n,
    formMethod: o.formMethod,
    formAction: o.formAction,
    formEncType: o.formEncType,
    formData: o.formData,
    json: o.json,
    text: o.text,
  };
}
function Rl(n, o) {
  return n
    ? {
        state: "loading",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: o,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: o,
      };
}
function Dg(n, o) {
  return {
    state: "submitting",
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: o ? o.data : void 0,
  };
}
function mr(n) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function Lg(n, o) {
  try {
    let l = n.sessionStorage.getItem(Rh);
    if (l) {
      let i = JSON.parse(l);
      for (let [s, f] of Object.entries(i || {}))
        f && Array.isArray(f) && o.set(s, new Set(f || []));
    }
  } catch {}
}
function $g(n, o) {
  if (o.size > 0) {
    let l = {};
    for (let [i, s] of o) l[i] = [...s];
    try {
      n.sessionStorage.setItem(Rh, JSON.stringify(l));
    } catch (i) {
      Oo(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          i +
          ").",
      );
    }
  }
}
function sa() {
  return (
    (sa = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var i in l)
              Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
          }
          return n;
        }),
    sa.apply(this, arguments)
  );
}
const va = p.createContext(null),
  Nh = p.createContext(null),
  Jr = p.createContext(null),
  Sc = p.createContext(null),
  wr = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Oh = p.createContext(null);
function Ag(n, o) {
  let { relative: l } = o === void 0 ? {} : o;
  Ml() || xe(!1);
  let { basename: i, navigator: s } = p.useContext(Jr),
    { hash: f, pathname: d, search: h } = Lh(n, { relative: l }),
    v = d;
  return (
    i !== "/" && (v = d === "/" ? i : Vn([i, d])),
    s.createHref({ pathname: v, search: h, hash: f })
  );
}
function Ml() {
  return p.useContext(Sc) != null;
}
function ya() {
  return (Ml() || xe(!1), p.useContext(Sc).location);
}
function Dh(n) {
  p.useContext(Jr).static || p.useLayoutEffect(n);
}
function bg() {
  let { isDataRoute: n } = p.useContext(wr);
  return n ? Yg() : Fg();
}
function Fg() {
  Ml() || xe(!1);
  let n = p.useContext(va),
    { basename: o, future: l, navigator: i } = p.useContext(Jr),
    { matches: s } = p.useContext(wr),
    { pathname: f } = ya(),
    d = JSON.stringify(mc(s, l.v7_relativeSplatPath)),
    h = p.useRef(!1);
  return (
    Dh(() => {
      h.current = !0;
    }),
    p.useCallback(
      function (g, y) {
        if ((y === void 0 && (y = {}), !h.current)) return;
        if (typeof g == "number") {
          i.go(g);
          return;
        }
        let E = vc(g, JSON.parse(d), f, y.relative === "path");
        (n == null &&
          o !== "/" &&
          (E.pathname = E.pathname === "/" ? o : Vn([o, E.pathname])),
          (y.replace ? i.replace : i.push)(E, y.state, y));
      },
      [o, i, d, f, n],
    )
  );
}
const Mg = p.createContext(null);
function Ig(n) {
  let o = p.useContext(wr).outlet;
  return o && p.createElement(Mg.Provider, { value: n }, o);
}
function Lh(n, o) {
  let { relative: l } = o === void 0 ? {} : o,
    { future: i } = p.useContext(Jr),
    { matches: s } = p.useContext(wr),
    { pathname: f } = ya(),
    d = JSON.stringify(mc(s, i.v7_relativeSplatPath));
  return p.useMemo(() => vc(n, JSON.parse(d), f, l === "path"), [n, d, f, l]);
}
function zg(n, o, l, i) {
  Ml() || xe(!1);
  let { navigator: s } = p.useContext(Jr),
    { matches: f } = p.useContext(wr),
    d = f[f.length - 1],
    h = d ? d.params : {};
  d && d.pathname;
  let v = d ? d.pathnameBase : "/";
  d && d.route;
  let g = ya(),
    y;
  y = g;
  let E = y.pathname || "/",
    _ = E;
  if (v !== "/") {
    let S = v.replace(/^\//, "").split("/");
    _ = "/" + E.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let $ = To(n, { pathname: _ });
  return Hg(
    $ &&
      $.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, h, S.params),
          pathname: Vn([
            v,
            s.encodeLocation
              ? s.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? v
              : Vn([
                  v,
                  s.encodeLocation
                    ? s.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        }),
      ),
    f,
    l,
    i,
  );
}
function Ug() {
  let n = qg(),
    o = gc(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("h2", null, "Unexpected Application Error!"),
    p.createElement("h3", { style: { fontStyle: "italic" } }, o),
    l ? p.createElement("pre", { style: s }, l) : null,
    null,
  );
}
const jg = p.createElement(Ug, null);
class Bg extends p.Component {
  constructor(o) {
    (super(o),
      (this.state = {
        location: o.location,
        revalidation: o.revalidation,
        error: o.error,
      }));
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, l) {
    return l.location !== o.location ||
      (l.revalidation !== "idle" && o.revalidation === "idle")
      ? { error: o.error, location: o.location, revalidation: o.revalidation }
      : {
          error: o.error !== void 0 ? o.error : l.error,
          location: l.location,
          revalidation: o.revalidation || l.revalidation,
        };
  }
  componentDidCatch(o, l) {
    console.error(
      "React Router caught the following error during render",
      o,
      l,
    );
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          wr.Provider,
          { value: this.props.routeContext },
          p.createElement(Oh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Vg(n) {
  let { routeContext: o, match: l, children: i } = n,
    s = p.useContext(va);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = l.route.id),
    p.createElement(wr.Provider, { value: o }, i)
  );
}
function Hg(n, o, l, i) {
  var s;
  if (
    (o === void 0 && (o = []),
    l === void 0 && (l = null),
    i === void 0 && (i = null),
    n == null)
  ) {
    var f;
    if ((f = l) != null && f.errors) n = l.matches;
    else return null;
  }
  let d = n,
    h = (s = l) == null ? void 0 : s.errors;
  if (h != null) {
    let y = d.findIndex(
      (E) => E.route.id && (h == null ? void 0 : h[E.route.id]) !== void 0,
    );
    (y >= 0 || xe(!1), (d = d.slice(0, Math.min(d.length, y + 1))));
  }
  let v = !1,
    g = -1;
  if (l && i && i.v7_partialHydration)
    for (let y = 0; y < d.length; y++) {
      let E = d[y];
      if (
        ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (g = y),
        E.route.id)
      ) {
        let { loaderData: _, errors: $ } = l,
          N =
            E.route.loader &&
            _[E.route.id] === void 0 &&
            (!$ || $[E.route.id] === void 0);
        if (E.route.lazy || N) {
          ((v = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  return d.reduceRight((y, E, _) => {
    let $,
      N = !1,
      S = null,
      k = null;
    l &&
      (($ = h && E.route.id ? h[E.route.id] : void 0),
      (S = E.route.errorElement || jg),
      v &&
        (g < 0 && _ === 0
          ? (Gg("route-fallback"), (N = !0), (k = null))
          : g === _ &&
            ((N = !0), (k = E.route.hydrateFallbackElement || null))));
    let L = o.concat(d.slice(0, _ + 1)),
      B = () => {
        let z;
        return (
          $
            ? (z = S)
            : N
              ? (z = k)
              : E.route.Component
                ? (z = p.createElement(E.route.Component, null))
                : E.route.element
                  ? (z = E.route.element)
                  : (z = y),
          p.createElement(Vg, {
            match: E,
            routeContext: { outlet: y, matches: L, isDataRoute: l != null },
            children: z,
          })
        );
      };
    return l && (E.route.ErrorBoundary || E.route.errorElement || _ === 0)
      ? p.createElement(Bg, {
          location: l.location,
          revalidation: l.revalidation,
          component: S,
          error: $,
          children: B(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : B();
  }, null);
}
var $h = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })($h || {}),
  Ah = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(Ah || {});
function Wg(n) {
  let o = p.useContext(va);
  return (o || xe(!1), o);
}
function Kg(n) {
  let o = p.useContext(Nh);
  return (o || xe(!1), o);
}
function Qg(n) {
  let o = p.useContext(wr);
  return (o || xe(!1), o);
}
function bh(n) {
  let o = Qg(),
    l = o.matches[o.matches.length - 1];
  return (l.route.id || xe(!1), l.route.id);
}
function qg() {
  var n;
  let o = p.useContext(Oh),
    l = Kg(Ah.UseRouteError),
    i = bh();
  return o !== void 0 ? o : (n = l.errors) == null ? void 0 : n[i];
}
function Yg() {
  let { router: n } = Wg($h.UseNavigateStable),
    o = bh(),
    l = p.useRef(!1);
  return (
    Dh(() => {
      l.current = !0;
    }),
    p.useCallback(
      function (s, f) {
        (f === void 0 && (f = {}),
          l.current &&
            (typeof s == "number"
              ? n.navigate(s)
              : n.navigate(s, sa({ fromRouteId: o }, f))));
      },
      [n, o],
    )
  );
}
const kp = {};
function Gg(n, o, l) {
  kp[n] || (kp[n] = !0);
}
function Jg(n) {
  return Ig(n.context);
}
function Xg(n) {
  let {
    basename: o = "/",
    children: l = null,
    location: i,
    navigationType: s = ct.Pop,
    navigator: f,
    static: d = !1,
    future: h,
  } = n;
  Ml() && xe(!1);
  let v = o.replace(/^\/*/, "/"),
    g = p.useMemo(
      () => ({
        basename: v,
        navigator: f,
        static: d,
        future: sa({ v7_relativeSplatPath: !1 }, h),
      }),
      [v, h, f, d],
    );
  typeof i == "string" && (i = Er(i));
  let {
      pathname: y = "/",
      search: E = "",
      hash: _ = "",
      state: $ = null,
      key: N = "default",
    } = i,
    S = p.useMemo(() => {
      let k = Fo(y, v);
      return k == null
        ? null
        : {
            location: { pathname: k, search: E, hash: _, state: $, key: N },
            navigationType: s,
          };
    }, [v, y, E, _, $, N, s]);
  return S == null
    ? null
    : p.createElement(
        Jr.Provider,
        { value: g },
        p.createElement(Sc.Provider, { children: l, value: S }),
      );
}
new Promise(() => {});
function Zg(n) {
  let o = {
    hasErrorBoundary: n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      Object.assign(o, {
        element: p.createElement(n.Component),
        Component: void 0,
      }),
    n.HydrateFallback &&
      Object.assign(o, {
        hydrateFallbackElement: p.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      }),
    n.ErrorBoundary &&
      Object.assign(o, {
        errorElement: p.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    o
  );
}
function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var i in l)
              Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
          }
          return n;
        }),
    Nl.apply(this, arguments)
  );
}
function e0(n, o) {
  if (n == null) return {};
  var l = {},
    i = Object.keys(n),
    s,
    f;
  for (f = 0; f < i.length; f++)
    ((s = i[f]), !(o.indexOf(s) >= 0) && (l[s] = n[s]));
  return l;
}
function t0(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function n0(n, o) {
  return n.button === 0 && (!o || o === "_self") && !t0(n);
}
const r0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  o0 = "6";
try {
  window.__reactRouterVersion = o0;
} catch {}
function l0(n, o) {
  return vg({
    basename: void 0,
    future: Nl({}, void 0, { v7_prependBasename: !0 }),
    history: zy({ window: void 0 }),
    hydrationData: i0(),
    routes: n,
    mapRouteProperties: Zg,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function i0() {
  var n;
  let o = (n = window) == null ? void 0 : n.__staticRouterHydrationData;
  return (o && o.errors && (o = Nl({}, o, { errors: a0(o.errors) })), o);
}
function a0(n) {
  if (!n) return null;
  let o = Object.entries(n),
    l = {};
  for (let [i, s] of o)
    if (s && s.__type === "RouteErrorResponse")
      l[i] = new yc(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let f = window[s.__subType];
        if (typeof f == "function")
          try {
            let d = new f(s.message);
            ((d.stack = ""), (l[i] = d));
          } catch {}
      }
      if (l[i] == null) {
        let f = new Error(s.message);
        ((f.stack = ""), (l[i] = f));
      }
    } else l[i] = s;
  return l;
}
const s0 = p.createContext({ isTransitioning: !1 }),
  u0 = p.createContext(new Map()),
  c0 = "startTransition",
  Pp = yh[c0],
  f0 = "flushSync",
  Tp = Iy[f0];
function d0(n) {
  Pp ? Pp(n) : n();
}
function xl(n) {
  Tp ? Tp(n) : n();
}
class p0 {
  constructor() {
    ((this.status = "pending"),
      (this.promise = new Promise((o, l) => {
        ((this.resolve = (i) => {
          this.status === "pending" && ((this.status = "resolved"), o(i));
        }),
          (this.reject = (i) => {
            this.status === "pending" && ((this.status = "rejected"), l(i));
          }));
      })));
  }
}
function h0(n) {
  let { fallbackElement: o, router: l, future: i } = n,
    [s, f] = p.useState(l.state),
    [d, h] = p.useState(),
    [v, g] = p.useState({ isTransitioning: !1 }),
    [y, E] = p.useState(),
    [_, $] = p.useState(),
    [N, S] = p.useState(),
    k = p.useRef(new Map()),
    { v7_startTransition: L } = i || {},
    B = p.useCallback(
      (P) => {
        L ? d0(P) : P();
      },
      [L],
    ),
    z = p.useCallback(
      (P, Q) => {
        let {
          deletedFetchers: le,
          unstable_flushSync: se,
          unstable_viewTransitionOpts: _e,
        } = Q;
        (le.forEach((ge) => k.current.delete(ge)),
          P.fetchers.forEach((ge, De) => {
            ge.data !== void 0 && k.current.set(De, ge.data);
          }));
        let Ne =
          l.window == null ||
          l.window.document == null ||
          typeof l.window.document.startViewTransition != "function";
        if (!_e || Ne) {
          se ? xl(() => f(P)) : B(() => f(P));
          return;
        }
        if (se) {
          xl(() => {
            (_ && (y && y.resolve(), _.skipTransition()),
              g({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: _e.currentLocation,
                nextLocation: _e.nextLocation,
              }));
          });
          let ge = l.window.document.startViewTransition(() => {
            xl(() => f(P));
          });
          (ge.finished.finally(() => {
            xl(() => {
              (E(void 0), $(void 0), h(void 0), g({ isTransitioning: !1 }));
            });
          }),
            xl(() => $(ge)));
          return;
        }
        _
          ? (y && y.resolve(),
            _.skipTransition(),
            S({
              state: P,
              currentLocation: _e.currentLocation,
              nextLocation: _e.nextLocation,
            }))
          : (h(P),
            g({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: _e.currentLocation,
              nextLocation: _e.nextLocation,
            }));
      },
      [l.window, _, y, k, B],
    );
  (p.useLayoutEffect(() => l.subscribe(z), [l, z]),
    p.useEffect(() => {
      v.isTransitioning && !v.flushSync && E(new p0());
    }, [v]),
    p.useEffect(() => {
      if (y && d && l.window) {
        let P = d,
          Q = y.promise,
          le = l.window.document.startViewTransition(async () => {
            (B(() => f(P)), await Q);
          });
        (le.finished.finally(() => {
          (E(void 0), $(void 0), h(void 0), g({ isTransitioning: !1 }));
        }),
          $(le));
      }
    }, [B, d, y, l.window]),
    p.useEffect(() => {
      y && d && s.location.key === d.location.key && y.resolve();
    }, [y, _, s.location, d]),
    p.useEffect(() => {
      !v.isTransitioning &&
        N &&
        (h(N.state),
        g({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: N.currentLocation,
          nextLocation: N.nextLocation,
        }),
        S(void 0));
    }, [v.isTransitioning, N]),
    p.useEffect(() => {}, []));
  let W = p.useMemo(
      () => ({
        createHref: l.createHref,
        encodeLocation: l.encodeLocation,
        go: (P) => l.navigate(P),
        push: (P, Q, le) =>
          l.navigate(P, {
            state: Q,
            preventScrollReset: le == null ? void 0 : le.preventScrollReset,
          }),
        replace: (P, Q, le) =>
          l.navigate(P, {
            replace: !0,
            state: Q,
            preventScrollReset: le == null ? void 0 : le.preventScrollReset,
          }),
      }),
      [l],
    ),
    Y = l.basename || "/",
    oe = p.useMemo(
      () => ({ router: l, navigator: W, static: !1, basename: Y }),
      [l, W, Y],
    );
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(
      va.Provider,
      { value: oe },
      p.createElement(
        Nh.Provider,
        { value: s },
        p.createElement(
          u0.Provider,
          { value: k.current },
          p.createElement(
            s0.Provider,
            { value: v },
            p.createElement(
              Xg,
              {
                basename: Y,
                location: s.location,
                navigationType: s.historyAction,
                navigator: W,
                future: { v7_relativeSplatPath: l.future.v7_relativeSplatPath },
              },
              s.initialized || l.future.v7_partialHydration
                ? p.createElement(m0, {
                    routes: l.routes,
                    future: l.future,
                    state: s,
                  })
                : o,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function m0(n) {
  let { routes: o, future: l, state: i } = n;
  return zg(o, void 0, i, l);
}
const v0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  y0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qi = p.forwardRef(function (o, l) {
    let {
        onClick: i,
        relative: s,
        reloadDocument: f,
        replace: d,
        state: h,
        target: v,
        to: g,
        preventScrollReset: y,
        unstable_viewTransition: E,
      } = o,
      _ = e0(o, r0),
      { basename: $ } = p.useContext(Jr),
      N,
      S = !1;
    if (typeof g == "string" && y0.test(g) && ((N = g), v0))
      try {
        let z = new URL(window.location.href),
          W = g.startsWith("//") ? new URL(z.protocol + g) : new URL(g),
          Y = Fo(W.pathname, $);
        W.origin === z.origin && Y != null
          ? (g = Y + W.search + W.hash)
          : (S = !0);
      } catch {}
    let k = Ag(g, { relative: s }),
      L = g0(g, {
        replace: d,
        state: h,
        target: v,
        preventScrollReset: y,
        relative: s,
        unstable_viewTransition: E,
      });
    function B(z) {
      (i && i(z), z.defaultPrevented || L(z));
    }
    return p.createElement(
      "a",
      Nl({}, _, { href: N || k, onClick: S || f ? i : B, ref: l, target: v }),
    );
  });
var Np;
(function (n) {
  ((n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState"));
})(Np || (Np = {}));
var Op;
(function (n) {
  ((n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration"));
})(Op || (Op = {}));
function g0(n, o) {
  let {
      target: l,
      replace: i,
      state: s,
      preventScrollReset: f,
      relative: d,
      unstable_viewTransition: h,
    } = o === void 0 ? {} : o,
    v = bg(),
    g = ya(),
    y = Lh(n, { relative: d });
  return p.useCallback(
    (E) => {
      if (n0(E, l)) {
        E.preventDefault();
        let _ = i !== void 0 ? i : Kr(g) === Kr(y);
        v(n, {
          replace: _,
          state: s,
          preventScrollReset: f,
          relative: d,
          unstable_viewTransition: h,
        });
      }
    },
    [g, v, y, i, s, l, n, f, d, h],
  );
}
function Ol(n) {
  return p.createElement(
    "div",
    { className: "hero hero--primary shadow--lw" },
    p.createElement(
      "div",
      { className: "container" },
      p.createElement("h1", { className: "hero__title centered" }, n.title),
      n.subtext
        ? p.createElement(
            "p",
            { className: "hero__subtitle centered" },
            n.subtext,
          )
        : null,
    ),
  );
}
var Yi = {},
  Dp;
function E0() {
  if (Dp) return Yi;
  Dp = 1;
  const n = function (i) {
    const s = {}.constructor,
      f = [].constructor,
      d = "test".constructor;
    return i && i !== null && i.constructor === s
      ? "OBJECT"
      : i && i !== null && i.constructor === f
        ? "ARRAY"
        : i && i !== null && i.constructor === d
          ? "STRING"
          : "";
  };
  function o(i, s) {
    if (n(i) === "ARRAY") {
      let f = [];
      for (let d = 0; d < i.length; d++) {
        let h = i[d];
        n(h) === "OBJECT" || n(h) === "ARRAY" ? f.push(o(h, s)) : f.push(h);
      }
      return f;
    } else if (n(i) === "OBJECT") {
      let f = [],
        d,
        h = {};
      if ((s === void 0 && (s = !0), (d = Object.keys(i).sort()), !s)) {
        for (let v = d.length - 1; v >= 0; v--) f.push(d[v]);
        d = f;
      }
      for (let v = 0; v < d.length; v++) {
        let g = d[v];
        if (n(i[g]) === "OBJECT") h[g] = o(i[g], s);
        else if (n(i[g]) === "ARRAY") {
          h[g] = [];
          for (let y = 0; y < i[g].length; y++) {
            let E = i[g][y];
            n(E) === "OBJECT" || n(E) === "ARRAY"
              ? h[g].push(o(i[g][y], s))
              : h[g].push(i[g][y]);
          }
        } else h[g] = i[g];
      }
      return h;
    } else throw new Error("must be an object/array");
  }
  async function l(i, s) {
    return new Promise((f, d) => {
      try {
        const h = o(i, s);
        f(h);
      } catch (h) {
        d(h);
      }
    });
  }
  return ((Yi.sort = o), (Yi.sortAsync = l), Yi);
}
E0();
var yu = { exports: {} },
  gu = {};
var Lp;
function w0() {
  if (Lp) return gu;
  Lp = 1;
  var n = hc();
  function o(E, _) {
    return (E === _ && (E !== 0 || 1 / E === 1 / _)) || (E !== E && _ !== _);
  }
  var l = typeof Object.is == "function" ? Object.is : o,
    i = n.useState,
    s = n.useEffect,
    f = n.useLayoutEffect,
    d = n.useDebugValue;
  function h(E, _) {
    var $ = _(),
      N = i({ inst: { value: $, getSnapshot: _ } }),
      S = N[0].inst,
      k = N[1];
    return (
      f(
        function () {
          ((S.value = $), (S.getSnapshot = _), v(S) && k({ inst: S }));
        },
        [E, $, _],
      ),
      s(
        function () {
          return (
            v(S) && k({ inst: S }),
            E(function () {
              v(S) && k({ inst: S });
            })
          );
        },
        [E],
      ),
      d($),
      $
    );
  }
  function v(E) {
    var _ = E.getSnapshot;
    E = E.value;
    try {
      var $ = _();
      return !l(E, $);
    } catch {
      return !0;
    }
  }
  function g(E, _) {
    return _();
  }
  var y =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? g
      : h;
  return (
    (gu.useSyncExternalStore =
      n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : y),
    gu
  );
}
var $p;
function S0() {
  return ($p || (($p = 1), (yu.exports = w0())), yu.exports);
}
var _0 = S0();
const Fh = 0,
  Mh = 1,
  Ih = 2,
  Ap = 3;
var bp = Object.prototype.hasOwnProperty;
function Vu(n, o) {
  var l, i;
  if (n === o) return !0;
  if (n && o && (l = n.constructor) === o.constructor) {
    if (l === Date) return n.getTime() === o.getTime();
    if (l === RegExp) return n.toString() === o.toString();
    if (l === Array) {
      if ((i = n.length) === o.length) for (; i-- && Vu(n[i], o[i]););
      return i === -1;
    }
    if (!l || typeof n == "object") {
      i = 0;
      for (l in n)
        if (
          (bp.call(n, l) && ++i && !bp.call(o, l)) ||
          !(l in o) ||
          !Vu(n[l], o[l])
        )
          return !1;
      return Object.keys(o).length === i;
    }
  }
  return n !== n && o !== o;
}
const Bn = new WeakMap(),
  yr = () => {},
  Lt = yr(),
  Hu = Object,
  Ae = (n) => n === Lt,
  kn = (n) => typeof n == "function",
  gr = (n, o) => ({ ...n, ...o }),
  zh = (n) => kn(n.then),
  Eu = {},
  Gi = {},
  _c = "undefined",
  Il = typeof window != _c,
  Wu = typeof document != _c,
  C0 = Il && "Deno" in window,
  R0 = () => Il && typeof window.requestAnimationFrame != _c,
  Uh = (n, o) => {
    const l = Bn.get(n);
    return [
      () => (!Ae(o) && n.get(o)) || Eu,
      (i) => {
        if (!Ae(o)) {
          const s = n.get(o);
          (o in Gi || (Gi[o] = s), l[5](o, gr(s, i), s || Eu));
        }
      },
      l[6],
      () => (!Ae(o) && o in Gi ? Gi[o] : (!Ae(o) && n.get(o)) || Eu),
    ];
  };
let Ku = !0;
const x0 = () => Ku,
  [Qu, qu] =
    Il && window.addEventListener
      ? [
          window.addEventListener.bind(window),
          window.removeEventListener.bind(window),
        ]
      : [yr, yr],
  k0 = () => {
    const n = Wu && document.visibilityState;
    return Ae(n) || n !== "hidden";
  },
  P0 = (n) => (
    Wu && document.addEventListener("visibilitychange", n),
    Qu("focus", n),
    () => {
      (Wu && document.removeEventListener("visibilitychange", n),
        qu("focus", n));
    }
  ),
  T0 = (n) => {
    const o = () => {
        ((Ku = !0), n());
      },
      l = () => {
        Ku = !1;
      };
    return (
      Qu("online", o),
      Qu("offline", l),
      () => {
        (qu("online", o), qu("offline", l));
      }
    );
  },
  N0 = { isOnline: x0, isVisible: k0 },
  O0 = { initFocus: P0, initReconnect: T0 },
  Fp = !ha.useId,
  Dl = !Il || C0,
  D0 = (n) => (R0() ? window.requestAnimationFrame(n) : setTimeout(n, 1)),
  wu = Dl ? p.useEffect : p.useLayoutEffect,
  Su = typeof navigator < "u" && navigator.connection,
  Mp =
    !Dl && Su && (["slow-2g", "2g"].includes(Su.effectiveType) || Su.saveData),
  Ji = new WeakMap(),
  _u = (n, o) => Hu.prototype.toString.call(n) === `[object ${o}]`;
let L0 = 0;
const Yu = (n) => {
    const o = typeof n,
      l = _u(n, "Date"),
      i = _u(n, "RegExp"),
      s = _u(n, "Object");
    let f, d;
    if (Hu(n) === n && !l && !i) {
      if (((f = Ji.get(n)), f)) return f;
      if (((f = ++L0 + "~"), Ji.set(n, f), Array.isArray(n))) {
        for (f = "@", d = 0; d < n.length; d++) f += Yu(n[d]) + ",";
        Ji.set(n, f);
      }
      if (s) {
        f = "#";
        const h = Hu.keys(n).sort();
        for (; !Ae((d = h.pop()));) Ae(n[d]) || (f += d + ":" + Yu(n[d]) + ",");
        Ji.set(n, f);
      }
    } else
      f = l
        ? n.toJSON()
        : o == "symbol"
          ? n.toString()
          : o == "string"
            ? JSON.stringify(n)
            : "" + n;
    return f;
  },
  Cc = (n) => {
    if (kn(n))
      try {
        n = n();
      } catch {
        n = "";
      }
    const o = n;
    return (
      (n =
        typeof n == "string"
          ? n
          : (Array.isArray(n) ? n.length : n)
            ? Yu(n)
            : ""),
      [n, o]
    );
  };
let $0 = 0;
const Gu = () => ++$0;
async function jh(...n) {
  const [o, l, i, s] = n,
    f = gr(
      { populateCache: !0, throwOnError: !0 },
      typeof s == "boolean" ? { revalidate: s } : s || {},
    );
  let d = f.populateCache;
  const h = f.rollbackOnError;
  let v = f.optimisticData;
  const g = (_) => (typeof h == "function" ? h(_) : h !== !1),
    y = f.throwOnError;
  if (kn(l)) {
    const _ = l,
      $ = [],
      N = o.keys();
    for (const S of N) !/^\$(inf|sub)\$/.test(S) && _(o.get(S)._k) && $.push(S);
    return Promise.all($.map(E));
  }
  return E(l);
  async function E(_) {
    const [$] = Cc(_);
    if (!$) return;
    const [N, S] = Uh(o, $),
      [k, L, B, z] = Bn.get(o),
      W = () => {
        const ge = k[$];
        return (kn(f.revalidate)
          ? f.revalidate(N().data, _)
          : f.revalidate !== !1) && (delete B[$], delete z[$], ge && ge[0])
          ? ge[0](Ih).then(() => N().data)
          : N().data;
      };
    if (n.length < 3) return W();
    let Y = i,
      oe;
    const P = Gu();
    L[$] = [P, 0];
    const Q = !Ae(v),
      le = N(),
      se = le.data,
      _e = le._c,
      Ne = Ae(_e) ? se : _e;
    if ((Q && ((v = kn(v) ? v(Ne, se) : v), S({ data: v, _c: Ne })), kn(Y)))
      try {
        Y = Y(Ne);
      } catch (ge) {
        oe = ge;
      }
    if (Y && zh(Y))
      if (
        ((Y = await Y.catch((ge) => {
          oe = ge;
        })),
        P !== L[$][0])
      ) {
        if (oe) throw oe;
        return Y;
      } else oe && Q && g(oe) && ((d = !0), S({ data: Ne, _c: Lt }));
    if (d && !oe)
      if (kn(d)) {
        const ge = d(Y, Ne);
        S({ data: ge, error: Lt, _c: Lt });
      } else S({ data: Y, error: Lt, _c: Lt });
    if (
      ((L[$][1] = Gu()),
      Promise.resolve(W()).then(() => {
        S({ _c: Lt });
      }),
      oe)
    ) {
      if (y) throw oe;
      return;
    }
    return Y;
  }
}
const Ip = (n, o) => {
    for (const l in n) n[l][0] && n[l][0](o);
  },
  A0 = (n, o) => {
    if (!Bn.has(n)) {
      const l = gr(O0, o),
        i = Object.create(null),
        s = jh.bind(Lt, n);
      let f = yr;
      const d = Object.create(null),
        h = (y, E) => {
          const _ = d[y] || [];
          return ((d[y] = _), _.push(E), () => _.splice(_.indexOf(E), 1));
        },
        v = (y, E, _) => {
          n.set(y, E);
          const $ = d[y];
          if ($) for (const N of $) N(E, _);
        },
        g = () => {
          if (
            !Bn.has(n) &&
            (Bn.set(n, [
              i,
              Object.create(null),
              Object.create(null),
              Object.create(null),
              s,
              v,
              h,
            ]),
            !Dl)
          ) {
            const y = l.initFocus(setTimeout.bind(Lt, Ip.bind(Lt, i, Fh))),
              E = l.initReconnect(setTimeout.bind(Lt, Ip.bind(Lt, i, Mh)));
            f = () => {
              (y && y(), E && E(), Bn.delete(n));
            };
          }
        };
      return (g(), [n, s, g, f]);
    }
    return [n, Bn.get(n)[4]];
  },
  b0 = (n, o, l, i, s) => {
    const f = l.errorRetryCount,
      d = s.retryCount,
      h =
        ~~((Math.random() + 0.5) * (1 << (d < 8 ? d : 8))) *
        l.errorRetryInterval;
    (!Ae(f) && d > f) || setTimeout(i, h, s);
  },
  F0 = Vu,
  [Bh, M0] = A0(new Map()),
  I0 = gr(
    {
      onLoadingSlow: yr,
      onSuccess: yr,
      onError: yr,
      onErrorRetry: b0,
      onDiscarded: yr,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: Mp ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: Mp ? 5e3 : 3e3,
      compare: F0,
      isPaused: () => !1,
      cache: Bh,
      mutate: M0,
      fallback: {},
    },
    N0,
  ),
  z0 = (n, o) => {
    const l = gr(n, o);
    if (o) {
      const { use: i, fallback: s } = n,
        { use: f, fallback: d } = o;
      (i && f && (l.use = i.concat(f)), s && d && (l.fallback = gr(s, d)));
    }
    return l;
  },
  U0 = p.createContext({}),
  j0 = "$inf$",
  Vh = Il && window.__SWR_DEVTOOLS_USE__,
  B0 = Vh ? window.__SWR_DEVTOOLS_USE__ : [],
  V0 = () => {
    Vh && (window.__SWR_DEVTOOLS_REACT__ = ha);
  },
  H0 = (n) =>
    kn(n[1])
      ? [n[0], n[1], n[2] || {}]
      : [n[0], null, (n[1] === null ? n[2] : n[1]) || {}],
  W0 = () => gr(I0, p.useContext(U0)),
  K0 = (n) => (o, l, i) =>
    n(
      o,
      l &&
        ((...f) => {
          const [d] = Cc(o),
            [, , , h] = Bn.get(Bh);
          if (d.startsWith(j0)) return l(...f);
          const v = h[d];
          return Ae(v) ? l(...f) : (delete h[d], v);
        }),
      i,
    ),
  Q0 = B0.concat(K0),
  q0 = (n) =>
    function (...l) {
      const i = W0(),
        [s, f, d] = H0(l),
        h = z0(i, d);
      let v = n;
      const { use: g } = h,
        y = (g || []).concat(Q0);
      for (let E = y.length; E--;) v = y[E](v);
      return v(s, f || h.fetcher || null, h);
    },
  Y0 = (n, o, l) => {
    const i = o[n] || (o[n] = []);
    return (
      i.push(l),
      () => {
        const s = i.indexOf(l);
        s >= 0 && ((i[s] = i[i.length - 1]), i.pop());
      }
    );
  };
V0();
const Cu =
    ha.use ||
    ((n) => {
      switch (n.status) {
        case "pending":
          throw n;
        case "fulfilled":
          return n.value;
        case "rejected":
          throw n.reason;
        default:
          throw (
            (n.status = "pending"),
            n.then(
              (o) => {
                ((n.status = "fulfilled"), (n.value = o));
              },
              (o) => {
                ((n.status = "rejected"), (n.reason = o));
              },
            ),
            n
          );
      }
    }),
  Ru = { dedupe: !0 },
  G0 = (n, o, l) => {
    const {
        cache: i,
        compare: s,
        suspense: f,
        fallbackData: d,
        revalidateOnMount: h,
        revalidateIfStale: v,
        refreshInterval: g,
        refreshWhenHidden: y,
        refreshWhenOffline: E,
        keepPreviousData: _,
      } = l,
      [$, N, S, k] = Bn.get(i),
      [L, B] = Cc(n),
      z = p.useRef(!1),
      W = p.useRef(!1),
      Y = p.useRef(L),
      oe = p.useRef(o),
      P = p.useRef(l),
      Q = () => P.current,
      le = () => Q().isVisible() && Q().isOnline(),
      [se, _e, Ne, ge] = Uh(i, L),
      De = p.useRef({}).current,
      Ve = Ae(d) ? (Ae(l.fallback) ? Lt : l.fallback[L]) : d,
      Ze = (ke, Le) => {
        for (const lt in De) {
          const be = lt;
          if (be === "data") {
            if (!s(ke[be], Le[be]) && (!Ae(ke[be]) || !s(ve, Le[be])))
              return !1;
          } else if (Le[be] !== ke[be]) return !1;
        }
        return !0;
      },
      Me = p.useMemo(() => {
        const ke =
            !L || !o ? !1 : Ae(h) ? (Q().isPaused() || f ? !1 : v !== !1) : h,
          Le = (Ye) => {
            const mt = gr(Ye);
            return (
              delete mt._k,
              ke ? { isValidating: !0, isLoading: !0, ...mt } : mt
            );
          },
          lt = se(),
          be = ge(),
          wt = Le(lt),
          ln = lt === be ? wt : Le(be);
        let qe = wt;
        return [
          () => {
            const Ye = Le(se());
            return Ze(Ye, qe)
              ? ((qe.data = Ye.data),
                (qe.isLoading = Ye.isLoading),
                (qe.isValidating = Ye.isValidating),
                (qe.error = Ye.error),
                qe)
              : ((qe = Ye), Ye);
          },
          () => ln,
        ];
      }, [i, L]),
      V = _0.useSyncExternalStore(
        p.useCallback(
          (ke) =>
            Ne(L, (Le, lt) => {
              Ze(lt, Le) || ke();
            }),
          [i, L],
        ),
        Me[0],
        Me[1],
      ),
      ie = !z.current,
      G = $[L] && $[L].length > 0,
      x = V.data,
      I = Ae(x) ? (Ve && zh(Ve) ? Cu(Ve) : Ve) : x,
      fe = V.error,
      me = p.useRef(I),
      ve = _ ? (Ae(x) ? (Ae(me.current) ? I : me.current) : x) : I,
      Ee =
        G && !Ae(fe)
          ? !1
          : ie && !Ae(h)
            ? h
            : Q().isPaused()
              ? !1
              : f
                ? Ae(I)
                  ? !1
                  : v
                : Ae(I) || v,
      Re = !!(L && o && ie && Ee),
      Te = Ae(V.isValidating) ? Re : V.isValidating,
      ze = Ae(V.isLoading) ? Re : V.isLoading,
      ot = p.useCallback(
        async (ke) => {
          const Le = oe.current;
          if (!L || !Le || W.current || Q().isPaused()) return !1;
          let lt,
            be,
            wt = !0;
          const ln = ke || {},
            qe = !S[L] || !ln.dedupe,
            Ye = () =>
              Fp ? !W.current && L === Y.current && z.current : L === Y.current,
            mt = { isValidating: !1, isLoading: !1 },
            Gt = () => {
              _e(mt);
            },
            an = () => {
              const ft = S[L];
              ft && ft[1] === be && delete S[L];
            },
            Kn = { isValidating: !0 };
          Ae(se().data) && (Kn.isLoading = !0);
          try {
            if (
              (qe &&
                (_e(Kn),
                l.loadingTimeout &&
                  Ae(se().data) &&
                  setTimeout(() => {
                    wt && Ye() && Q().onLoadingSlow(L, l);
                  }, l.loadingTimeout),
                (S[L] = [Le(B), Gu()])),
              ([lt, be] = S[L]),
              (lt = await lt),
              qe && setTimeout(an, l.dedupingInterval),
              !S[L] || S[L][1] !== be)
            )
              return (qe && Ye() && Q().onDiscarded(L), !1);
            mt.error = Lt;
            const ft = N[L];
            if (!Ae(ft) && (be <= ft[0] || be <= ft[1] || ft[1] === 0))
              return (Gt(), qe && Ye() && Q().onDiscarded(L), !1);
            const it = se().data;
            ((mt.data = s(it, lt) ? it : lt),
              qe && Ye() && Q().onSuccess(lt, L, l));
          } catch (ft) {
            an();
            const it = Q(),
              { shouldRetryOnError: jt } = it;
            it.isPaused() ||
              ((mt.error = ft),
              qe &&
                Ye() &&
                (it.onError(ft, L, it),
                (jt === !0 || (kn(jt) && jt(ft))) &&
                  (!Q().revalidateOnFocus ||
                    !Q().revalidateOnReconnect ||
                    le()) &&
                  it.onErrorRetry(
                    ft,
                    L,
                    it,
                    (Nn) => {
                      const sn = $[L];
                      sn && sn[0] && sn[0](Ap, Nn);
                    },
                    { retryCount: (ln.retryCount || 0) + 1, dedupe: !0 },
                  )));
          }
          return ((wt = !1), Gt(), !0);
        },
        [L, i],
      ),
      Tn = p.useCallback((...ke) => jh(i, Y.current, ...ke), []);
    if (
      (wu(() => {
        ((oe.current = o), (P.current = l), Ae(x) || (me.current = x));
      }),
      wu(() => {
        if (!L) return;
        const ke = ot.bind(Lt, Ru);
        let Le = 0;
        Q().revalidateOnFocus && (Le = Date.now() + Q().focusThrottleInterval);
        const be = Y0(L, $, (wt, ln = {}) => {
          if (wt == Fh) {
            const qe = Date.now();
            Q().revalidateOnFocus &&
              qe > Le &&
              le() &&
              ((Le = qe + Q().focusThrottleInterval), ke());
          } else if (wt == Mh) Q().revalidateOnReconnect && le() && ke();
          else {
            if (wt == Ih) return ot();
            if (wt == Ap) return ot(ln);
          }
        });
        return (
          (W.current = !1),
          (Y.current = L),
          (z.current = !0),
          _e({ _k: B }),
          Ee && (Ae(I) || Dl ? ke() : D0(ke)),
          () => {
            ((W.current = !0), be());
          }
        );
      }, [L]),
      wu(() => {
        let ke;
        function Le() {
          const be = kn(g) ? g(se().data) : g;
          be && ke !== -1 && (ke = setTimeout(lt, be));
        }
        function lt() {
          !se().error && (y || Q().isVisible()) && (E || Q().isOnline())
            ? ot(Ru).then(Le)
            : Le();
        }
        return (
          Le(),
          () => {
            ke && (clearTimeout(ke), (ke = -1));
          }
        );
      }, [g, y, E, L]),
      p.useDebugValue(ve),
      f && Ae(I) && L)
    ) {
      if (!Fp && Dl)
        throw new Error(
          "Fallback data is required when using Suspense in SSR.",
        );
      ((oe.current = o), (P.current = l), (W.current = !1));
      const ke = k[L];
      if (!Ae(ke)) {
        const Le = Tn(ke);
        Cu(Le);
      }
      if (Ae(fe)) {
        const Le = ot(Ru);
        (Ae(ve) || ((Le.status = "fulfilled"), (Le.value = !0)), Cu(Le));
      } else throw fe;
    }
    return {
      mutate: Tn,
      get data() {
        return ((De.data = !0), ve);
      },
      get error() {
        return ((De.error = !0), fe);
      },
      get isValidating() {
        return ((De.isValidating = !0), Te);
      },
      get isLoading() {
        return ((De.isLoading = !0), ze);
      },
    };
  },
  Ll = q0(G0);
function Hh(n, o) {
  return function () {
    return n.apply(o, arguments);
  };
}
const { toString: J0 } = Object.prototype,
  { getPrototypeOf: Rc } = Object,
  ga = ((n) => (o) => {
    const l = J0.call(o);
    return n[l] || (n[l] = l.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  gn = (n) => ((n = n.toLowerCase()), (o) => ga(o) === n),
  Ea = (n) => (o) => typeof o === n,
  { isArray: Mo } = Array,
  $l = Ea("undefined");
function X0(n) {
  return (
    n !== null &&
    !$l(n) &&
    n.constructor !== null &&
    !$l(n.constructor) &&
    Qt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const Wh = gn("ArrayBuffer");
function Z0(n) {
  let o;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(n))
      : (o = n && n.buffer && Wh(n.buffer)),
    o
  );
}
const eE = Ea("string"),
  Qt = Ea("function"),
  Kh = Ea("number"),
  wa = (n) => n !== null && typeof n == "object",
  tE = (n) => n === !0 || n === !1,
  ra = (n) => {
    if (ga(n) !== "object") return !1;
    const o = Rc(n);
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in n) &&
      !(Symbol.iterator in n)
    );
  },
  nE = gn("Date"),
  rE = gn("File"),
  oE = gn("Blob"),
  lE = gn("FileList"),
  iE = (n) => wa(n) && Qt(n.pipe),
  aE = (n) => {
    let o;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (Qt(n.append) &&
          ((o = ga(n)) === "formdata" ||
            (o === "object" &&
              Qt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  sE = gn("URLSearchParams"),
  [uE, cE, fE, dE] = ["ReadableStream", "Request", "Response", "Headers"].map(
    gn,
  ),
  pE = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zl(n, o, { allOwnKeys: l = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let i, s;
  if ((typeof n != "object" && (n = [n]), Mo(n)))
    for (i = 0, s = n.length; i < s; i++) o.call(null, n[i], i, n);
  else {
    const f = l ? Object.getOwnPropertyNames(n) : Object.keys(n),
      d = f.length;
    let h;
    for (i = 0; i < d; i++) ((h = f[i]), o.call(null, n[h], h, n));
  }
}
function Qh(n, o) {
  o = o.toLowerCase();
  const l = Object.keys(n);
  let i = l.length,
    s;
  for (; i-- > 0;) if (((s = l[i]), o === s.toLowerCase())) return s;
  return null;
}
const Hr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  qh = (n) => !$l(n) && n !== Hr;
function Ju() {
  const { caseless: n } = (qh(this) && this) || {},
    o = {},
    l = (i, s) => {
      const f = (n && Qh(o, s)) || s;
      ra(o[f]) && ra(i)
        ? (o[f] = Ju(o[f], i))
        : ra(i)
          ? (o[f] = Ju({}, i))
          : Mo(i)
            ? (o[f] = i.slice())
            : (o[f] = i);
    };
  for (let i = 0, s = arguments.length; i < s; i++)
    arguments[i] && zl(arguments[i], l);
  return o;
}
const hE = (n, o, l, { allOwnKeys: i } = {}) => (
    zl(
      o,
      (s, f) => {
        l && Qt(s) ? (n[f] = Hh(s, l)) : (n[f] = s);
      },
      { allOwnKeys: i },
    ),
    n
  ),
  mE = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  vE = (n, o, l, i) => {
    ((n.prototype = Object.create(o.prototype, i)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: o.prototype }),
      l && Object.assign(n.prototype, l));
  },
  yE = (n, o, l, i) => {
    let s, f, d;
    const h = {};
    if (((o = o || {}), n == null)) return o;
    do {
      for (s = Object.getOwnPropertyNames(n), f = s.length; f-- > 0;)
        ((d = s[f]),
          (!i || i(d, n, o)) && !h[d] && ((o[d] = n[d]), (h[d] = !0)));
      n = l !== !1 && Rc(n);
    } while (n && (!l || l(n, o)) && n !== Object.prototype);
    return o;
  },
  gE = (n, o, l) => {
    ((n = String(n)),
      (l === void 0 || l > n.length) && (l = n.length),
      (l -= o.length));
    const i = n.indexOf(o, l);
    return i !== -1 && i === l;
  },
  EE = (n) => {
    if (!n) return null;
    if (Mo(n)) return n;
    let o = n.length;
    if (!Kh(o)) return null;
    const l = new Array(o);
    for (; o-- > 0;) l[o] = n[o];
    return l;
  },
  wE = (
    (n) => (o) =>
      n && o instanceof n
  )(typeof Uint8Array < "u" && Rc(Uint8Array)),
  SE = (n, o) => {
    const i = (n && n[Symbol.iterator]).call(n);
    let s;
    for (; (s = i.next()) && !s.done;) {
      const f = s.value;
      o.call(n, f[0], f[1]);
    }
  },
  _E = (n, o) => {
    let l;
    const i = [];
    for (; (l = n.exec(o)) !== null;) i.push(l);
    return i;
  },
  CE = gn("HTMLFormElement"),
  RE = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, i, s) {
      return i.toUpperCase() + s;
    }),
  zp = (
    ({ hasOwnProperty: n }) =>
    (o, l) =>
      n.call(o, l)
  )(Object.prototype),
  xE = gn("RegExp"),
  Yh = (n, o) => {
    const l = Object.getOwnPropertyDescriptors(n),
      i = {};
    (zl(l, (s, f) => {
      let d;
      (d = o(s, f, n)) !== !1 && (i[f] = d || s);
    }),
      Object.defineProperties(n, i));
  },
  kE = (n) => {
    Yh(n, (o, l) => {
      if (Qt(n) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
        return !1;
      const i = n[l];
      if (Qt(i)) {
        if (((o.enumerable = !1), "writable" in o)) {
          o.writable = !1;
          return;
        }
        o.set ||
          (o.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'");
          });
      }
    });
  },
  PE = (n, o) => {
    const l = {},
      i = (s) => {
        s.forEach((f) => {
          l[f] = !0;
        });
      };
    return (Mo(n) ? i(n) : i(String(n).split(o)), l);
  },
  TE = () => {},
  NE = (n, o) => (n != null && Number.isFinite((n = +n)) ? n : o);
function OE(n) {
  return !!(
    n &&
    Qt(n.append) &&
    n[Symbol.toStringTag] === "FormData" &&
    n[Symbol.iterator]
  );
}
const DE = (n) => {
    const o = new Array(10),
      l = (i, s) => {
        if (wa(i)) {
          if (o.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            o[s] = i;
            const f = Mo(i) ? [] : {};
            return (
              zl(i, (d, h) => {
                const v = l(d, s + 1);
                !$l(v) && (f[h] = v);
              }),
              (o[s] = void 0),
              f
            );
          }
        }
        return i;
      };
    return l(n, 0);
  },
  LE = gn("AsyncFunction"),
  $E = (n) => n && (wa(n) || Qt(n)) && Qt(n.then) && Qt(n.catch),
  Gh = ((n, o) =>
    n
      ? setImmediate
      : o
        ? ((l, i) => (
            Hr.addEventListener(
              "message",
              ({ source: s, data: f }) => {
                s === Hr && f === l && i.length && i.shift()();
              },
              !1,
            ),
            (s) => {
              (i.push(s), Hr.postMessage(l, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (l) => setTimeout(l))(
    typeof setImmediate == "function",
    Qt(Hr.postMessage),
  ),
  AE =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Hr)
      : (typeof process < "u" && process.nextTick) || Gh,
  F = {
    isArray: Mo,
    isArrayBuffer: Wh,
    isBuffer: X0,
    isFormData: aE,
    isArrayBufferView: Z0,
    isString: eE,
    isNumber: Kh,
    isBoolean: tE,
    isObject: wa,
    isPlainObject: ra,
    isReadableStream: uE,
    isRequest: cE,
    isResponse: fE,
    isHeaders: dE,
    isUndefined: $l,
    isDate: nE,
    isFile: rE,
    isBlob: oE,
    isRegExp: xE,
    isFunction: Qt,
    isStream: iE,
    isURLSearchParams: sE,
    isTypedArray: wE,
    isFileList: lE,
    forEach: zl,
    merge: Ju,
    extend: hE,
    trim: pE,
    stripBOM: mE,
    inherits: vE,
    toFlatObject: yE,
    kindOf: ga,
    kindOfTest: gn,
    endsWith: gE,
    toArray: EE,
    forEachEntry: SE,
    matchAll: _E,
    isHTMLForm: CE,
    hasOwnProperty: zp,
    hasOwnProp: zp,
    reduceDescriptors: Yh,
    freezeMethods: kE,
    toObjectSet: PE,
    toCamelCase: RE,
    noop: TE,
    toFiniteNumber: NE,
    findKey: Qh,
    global: Hr,
    isContextDefined: qh,
    isSpecCompliantForm: OE,
    toJSONObject: DE,
    isAsyncFn: LE,
    isThenable: $E,
    setImmediate: Gh,
    asap: AE,
  };
function Se(n, o, l, i, s) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    o && (this.code = o),
    l && (this.config = l),
    i && (this.request = i),
    s && ((this.response = s), (this.status = s.status ? s.status : null)));
}
F.inherits(Se, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Jh = Se.prototype,
  Xh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  Xh[n] = { value: n };
});
Object.defineProperties(Se, Xh);
Object.defineProperty(Jh, "isAxiosError", { value: !0 });
Se.from = (n, o, l, i, s, f) => {
  const d = Object.create(Jh);
  return (
    F.toFlatObject(
      n,
      d,
      function (v) {
        return v !== Error.prototype;
      },
      (h) => h !== "isAxiosError",
    ),
    Se.call(d, n.message, o, l, i, s),
    (d.cause = n),
    (d.name = n.name),
    f && Object.assign(d, f),
    d
  );
};
const bE = null;
function Xu(n) {
  return F.isPlainObject(n) || F.isArray(n);
}
function Zh(n) {
  return F.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Up(n, o, l) {
  return n
    ? n
        .concat(o)
        .map(function (s, f) {
          return ((s = Zh(s)), !l && f ? "[" + s + "]" : s);
        })
        .join(l ? "." : "")
    : o;
}
function FE(n) {
  return F.isArray(n) && !n.some(Xu);
}
const ME = F.toFlatObject(F, {}, null, function (o) {
  return /^is[A-Z]/.test(o);
});
function Sa(n, o, l) {
  if (!F.isObject(n)) throw new TypeError("target must be an object");
  ((o = o || new FormData()),
    (l = F.toFlatObject(
      l,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, k) {
        return !F.isUndefined(k[S]);
      },
    )));
  const i = l.metaTokens,
    s = l.visitor || y,
    f = l.dots,
    d = l.indexes,
    v = (l.Blob || (typeof Blob < "u" && Blob)) && F.isSpecCompliantForm(o);
  if (!F.isFunction(s)) throw new TypeError("visitor must be a function");
  function g(N) {
    if (N === null) return "";
    if (F.isDate(N)) return N.toISOString();
    if (!v && F.isBlob(N))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(N) || F.isTypedArray(N)
      ? v && typeof Blob == "function"
        ? new Blob([N])
        : Buffer.from(N)
      : N;
  }
  function y(N, S, k) {
    let L = N;
    if (N && !k && typeof N == "object") {
      if (F.endsWith(S, "{}"))
        ((S = i ? S : S.slice(0, -2)), (N = JSON.stringify(N)));
      else if (
        (F.isArray(N) && FE(N)) ||
        ((F.isFileList(N) || F.endsWith(S, "[]")) && (L = F.toArray(N)))
      )
        return (
          (S = Zh(S)),
          L.forEach(function (z, W) {
            !(F.isUndefined(z) || z === null) &&
              o.append(
                d === !0 ? Up([S], W, f) : d === null ? S : S + "[]",
                g(z),
              );
          }),
          !1
        );
    }
    return Xu(N) ? !0 : (o.append(Up(k, S, f), g(N)), !1);
  }
  const E = [],
    _ = Object.assign(ME, {
      defaultVisitor: y,
      convertValue: g,
      isVisitable: Xu,
    });
  function $(N, S) {
    if (!F.isUndefined(N)) {
      if (E.indexOf(N) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      (E.push(N),
        F.forEach(N, function (L, B) {
          (!(F.isUndefined(L) || L === null) &&
            s.call(o, L, F.isString(B) ? B.trim() : B, S, _)) === !0 &&
            $(L, S ? S.concat(B) : [B]);
        }),
        E.pop());
    }
  }
  if (!F.isObject(n)) throw new TypeError("data must be an object");
  return ($(n), o);
}
function jp(n) {
  const o = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (i) {
    return o[i];
  });
}
function xc(n, o) {
  ((this._pairs = []), n && Sa(n, this, o));
}
const em = xc.prototype;
em.append = function (o, l) {
  this._pairs.push([o, l]);
};
em.toString = function (o) {
  const l = o
    ? function (i) {
        return o.call(this, i, jp);
      }
    : jp;
  return this._pairs
    .map(function (s) {
      return l(s[0]) + "=" + l(s[1]);
    }, "")
    .join("&");
};
function IE(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function tm(n, o, l) {
  if (!o) return n;
  const i = (l && l.encode) || IE;
  F.isFunction(l) && (l = { serialize: l });
  const s = l && l.serialize;
  let f;
  if (
    (s
      ? (f = s(o, l))
      : (f = F.isURLSearchParams(o) ? o.toString() : new xc(o, l).toString(i)),
    f)
  ) {
    const d = n.indexOf("#");
    (d !== -1 && (n = n.slice(0, d)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + f));
  }
  return n;
}
class Bp {
  constructor() {
    this.handlers = [];
  }
  use(o, l, i) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: l,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(o) {
    this.handlers[o] && (this.handlers[o] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(o) {
    F.forEach(this.handlers, function (i) {
      i !== null && o(i);
    });
  }
}
const nm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  zE = typeof URLSearchParams < "u" ? URLSearchParams : xc,
  UE = typeof FormData < "u" ? FormData : null,
  jE = typeof Blob < "u" ? Blob : null,
  BE = {
    isBrowser: !0,
    classes: { URLSearchParams: zE, FormData: UE, Blob: jE },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  kc = typeof window < "u" && typeof document < "u",
  Zu = (typeof navigator == "object" && navigator) || void 0,
  VE =
    kc &&
    (!Zu || ["ReactNative", "NativeScript", "NS"].indexOf(Zu.product) < 0),
  HE =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  WE = (kc && window.location.href) || "http://localhost",
  KE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: kc,
        hasStandardBrowserEnv: VE,
        hasStandardBrowserWebWorkerEnv: HE,
        navigator: Zu,
        origin: WE,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Nt = { ...KE, ...BE };
function QE(n, o) {
  return Sa(
    n,
    new Nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (l, i, s, f) {
          return Nt.isNode && F.isBuffer(l)
            ? (this.append(i, l.toString("base64")), !1)
            : f.defaultVisitor.apply(this, arguments);
        },
      },
      o,
    ),
  );
}
function qE(n) {
  return F.matchAll(/\w+|\[(\w*)]/g, n).map((o) =>
    o[0] === "[]" ? "" : o[1] || o[0],
  );
}
function YE(n) {
  const o = {},
    l = Object.keys(n);
  let i;
  const s = l.length;
  let f;
  for (i = 0; i < s; i++) ((f = l[i]), (o[f] = n[f]));
  return o;
}
function rm(n) {
  function o(l, i, s, f) {
    let d = l[f++];
    if (d === "__proto__") return !0;
    const h = Number.isFinite(+d),
      v = f >= l.length;
    return (
      (d = !d && F.isArray(s) ? s.length : d),
      v
        ? (F.hasOwnProp(s, d) ? (s[d] = [s[d], i]) : (s[d] = i), !h)
        : ((!s[d] || !F.isObject(s[d])) && (s[d] = []),
          o(l, i, s[d], f) && F.isArray(s[d]) && (s[d] = YE(s[d])),
          !h)
    );
  }
  if (F.isFormData(n) && F.isFunction(n.entries)) {
    const l = {};
    return (
      F.forEachEntry(n, (i, s) => {
        o(qE(i), s, l, 0);
      }),
      l
    );
  }
  return null;
}
function GE(n, o, l) {
  if (F.isString(n))
    try {
      return ((o || JSON.parse)(n), F.trim(n));
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (l || JSON.stringify)(n);
}
const Ul = {
  transitional: nm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (o, l) {
      const i = l.getContentType() || "",
        s = i.indexOf("application/json") > -1,
        f = F.isObject(o);
      if ((f && F.isHTMLForm(o) && (o = new FormData(o)), F.isFormData(o)))
        return s ? JSON.stringify(rm(o)) : o;
      if (
        F.isArrayBuffer(o) ||
        F.isBuffer(o) ||
        F.isStream(o) ||
        F.isFile(o) ||
        F.isBlob(o) ||
        F.isReadableStream(o)
      )
        return o;
      if (F.isArrayBufferView(o)) return o.buffer;
      if (F.isURLSearchParams(o))
        return (
          l.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          o.toString()
        );
      let h;
      if (f) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return QE(o, this.formSerializer).toString();
        if ((h = F.isFileList(o)) || i.indexOf("multipart/form-data") > -1) {
          const v = this.env && this.env.FormData;
          return Sa(
            h ? { "files[]": o } : o,
            v && new v(),
            this.formSerializer,
          );
        }
      }
      return f || s ? (l.setContentType("application/json", !1), GE(o)) : o;
    },
  ],
  transformResponse: [
    function (o) {
      const l = this.transitional || Ul.transitional,
        i = l && l.forcedJSONParsing,
        s = this.responseType === "json";
      if (F.isResponse(o) || F.isReadableStream(o)) return o;
      if (o && F.isString(o) && ((i && !this.responseType) || s)) {
        const d = !(l && l.silentJSONParsing) && s;
        try {
          return JSON.parse(o);
        } catch (h) {
          if (d)
            throw h.name === "SyntaxError"
              ? Se.from(h, Se.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return o;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Nt.classes.FormData, Blob: Nt.classes.Blob },
  validateStatus: function (o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Ul.headers[n] = {};
});
const JE = F.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  XE = (n) => {
    const o = {};
    let l, i, s;
    return (
      n &&
        n
          .split(
            `
`,
          )
          .forEach(function (d) {
            ((s = d.indexOf(":")),
              (l = d.substring(0, s).trim().toLowerCase()),
              (i = d.substring(s + 1).trim()),
              !(!l || (o[l] && JE[l])) &&
                (l === "set-cookie"
                  ? o[l]
                    ? o[l].push(i)
                    : (o[l] = [i])
                  : (o[l] = o[l] ? o[l] + ", " + i : i)));
          }),
      o
    );
  },
  Vp = Symbol("internals");
function kl(n) {
  return n && String(n).trim().toLowerCase();
}
function oa(n) {
  return n === !1 || n == null ? n : F.isArray(n) ? n.map(oa) : String(n);
}
function ZE(n) {
  const o = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = l.exec(n));) o[i[1]] = i[2];
  return o;
}
const ew = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function xu(n, o, l, i, s) {
  if (F.isFunction(i)) return i.call(this, o, l);
  if ((s && (o = l), !!F.isString(o))) {
    if (F.isString(i)) return o.indexOf(i) !== -1;
    if (F.isRegExp(i)) return i.test(o);
  }
}
function tw(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, l, i) => l.toUpperCase() + i);
}
function nw(n, o) {
  const l = F.toCamelCase(" " + o);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(n, i + l, {
      value: function (s, f, d) {
        return this[i].call(this, o, s, f, d);
      },
      configurable: !0,
    });
  });
}
let Ut = class {
  constructor(o) {
    o && this.set(o);
  }
  set(o, l, i) {
    const s = this;
    function f(h, v, g) {
      const y = kl(v);
      if (!y) throw new Error("header name must be a non-empty string");
      const E = F.findKey(s, y);
      (!E || s[E] === void 0 || g === !0 || (g === void 0 && s[E] !== !1)) &&
        (s[E || v] = oa(h));
    }
    const d = (h, v) => F.forEach(h, (g, y) => f(g, y, v));
    if (F.isPlainObject(o) || o instanceof this.constructor) d(o, l);
    else if (F.isString(o) && (o = o.trim()) && !ew(o)) d(XE(o), l);
    else if (F.isHeaders(o)) for (const [h, v] of o.entries()) f(v, h, i);
    else o != null && f(l, o, i);
    return this;
  }
  get(o, l) {
    if (((o = kl(o)), o)) {
      const i = F.findKey(this, o);
      if (i) {
        const s = this[i];
        if (!l) return s;
        if (l === !0) return ZE(s);
        if (F.isFunction(l)) return l.call(this, s, i);
        if (F.isRegExp(l)) return l.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(o, l) {
    if (((o = kl(o)), o)) {
      const i = F.findKey(this, o);
      return !!(i && this[i] !== void 0 && (!l || xu(this, this[i], i, l)));
    }
    return !1;
  }
  delete(o, l) {
    const i = this;
    let s = !1;
    function f(d) {
      if (((d = kl(d)), d)) {
        const h = F.findKey(i, d);
        h && (!l || xu(i, i[h], h, l)) && (delete i[h], (s = !0));
      }
    }
    return (F.isArray(o) ? o.forEach(f) : f(o), s);
  }
  clear(o) {
    const l = Object.keys(this);
    let i = l.length,
      s = !1;
    for (; i--;) {
      const f = l[i];
      (!o || xu(this, this[f], f, o, !0)) && (delete this[f], (s = !0));
    }
    return s;
  }
  normalize(o) {
    const l = this,
      i = {};
    return (
      F.forEach(this, (s, f) => {
        const d = F.findKey(i, f);
        if (d) {
          ((l[d] = oa(s)), delete l[f]);
          return;
        }
        const h = o ? tw(f) : String(f).trim();
        (h !== f && delete l[f], (l[h] = oa(s)), (i[h] = !0));
      }),
      this
    );
  }
  concat(...o) {
    return this.constructor.concat(this, ...o);
  }
  toJSON(o) {
    const l = Object.create(null);
    return (
      F.forEach(this, (i, s) => {
        i != null && i !== !1 && (l[s] = o && F.isArray(i) ? i.join(", ") : i);
      }),
      l
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, l]) => o + ": " + l).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(o) {
    return o instanceof this ? o : new this(o);
  }
  static concat(o, ...l) {
    const i = new this(o);
    return (l.forEach((s) => i.set(s)), i);
  }
  static accessor(o) {
    const i = (this[Vp] = this[Vp] = { accessors: {} }).accessors,
      s = this.prototype;
    function f(d) {
      const h = kl(d);
      i[h] || (nw(s, d), (i[h] = !0));
    }
    return (F.isArray(o) ? o.forEach(f) : f(o), this);
  }
};
Ut.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
F.reduceDescriptors(Ut.prototype, ({ value: n }, o) => {
  let l = o[0].toUpperCase() + o.slice(1);
  return {
    get: () => n,
    set(i) {
      this[l] = i;
    },
  };
});
F.freezeMethods(Ut);
function ku(n, o) {
  const l = this || Ul,
    i = o || l,
    s = Ut.from(i.headers);
  let f = i.data;
  return (
    F.forEach(n, function (h) {
      f = h.call(l, f, s.normalize(), o ? o.status : void 0);
    }),
    s.normalize(),
    f
  );
}
function om(n) {
  return !!(n && n.__CANCEL__);
}
function Io(n, o, l) {
  (Se.call(this, n ?? "canceled", Se.ERR_CANCELED, o, l),
    (this.name = "CanceledError"));
}
F.inherits(Io, Se, { __CANCEL__: !0 });
function lm(n, o, l) {
  const i = l.config.validateStatus;
  !l.status || !i || i(l.status)
    ? n(l)
    : o(
        new Se(
          "Request failed with status code " + l.status,
          [Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][
            Math.floor(l.status / 100) - 4
          ],
          l.config,
          l.request,
          l,
        ),
      );
}
function rw(n) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (o && o[1]) || "";
}
function ow(n, o) {
  n = n || 10;
  const l = new Array(n),
    i = new Array(n);
  let s = 0,
    f = 0,
    d;
  return (
    (o = o !== void 0 ? o : 1e3),
    function (v) {
      const g = Date.now(),
        y = i[f];
      (d || (d = g), (l[s] = v), (i[s] = g));
      let E = f,
        _ = 0;
      for (; E !== s;) ((_ += l[E++]), (E = E % n));
      if (((s = (s + 1) % n), s === f && (f = (f + 1) % n), g - d < o)) return;
      const $ = y && g - y;
      return $ ? Math.round((_ * 1e3) / $) : void 0;
    }
  );
}
function lw(n, o) {
  let l = 0,
    i = 1e3 / o,
    s,
    f;
  const d = (g, y = Date.now()) => {
    ((l = y), (s = null), f && (clearTimeout(f), (f = null)), n.apply(null, g));
  };
  return [
    (...g) => {
      const y = Date.now(),
        E = y - l;
      E >= i
        ? d(g, y)
        : ((s = g),
          f ||
            (f = setTimeout(() => {
              ((f = null), d(s));
            }, i - E)));
    },
    () => s && d(s),
  ];
}
const ua = (n, o, l = 3) => {
    let i = 0;
    const s = ow(50, 250);
    return lw((f) => {
      const d = f.loaded,
        h = f.lengthComputable ? f.total : void 0,
        v = d - i,
        g = s(v),
        y = d <= h;
      i = d;
      const E = {
        loaded: d,
        total: h,
        progress: h ? d / h : void 0,
        bytes: v,
        rate: g || void 0,
        estimated: g && h && y ? (h - d) / g : void 0,
        event: f,
        lengthComputable: h != null,
        [o ? "download" : "upload"]: !0,
      };
      n(E);
    }, l);
  },
  Hp = (n, o) => {
    const l = n != null;
    return [(i) => o[0]({ lengthComputable: l, total: n, loaded: i }), o[1]];
  },
  Wp =
    (n) =>
    (...o) =>
      F.asap(() => n(...o)),
  iw = Nt.hasStandardBrowserEnv
    ? ((n, o) => (l) => (
        (l = new URL(l, Nt.origin)),
        n.protocol === l.protocol &&
          n.host === l.host &&
          (o || n.port === l.port)
      ))(
        new URL(Nt.origin),
        Nt.navigator && /(msie|trident)/i.test(Nt.navigator.userAgent),
      )
    : () => !0,
  aw = Nt.hasStandardBrowserEnv
    ? {
        write(n, o, l, i, s, f) {
          const d = [n + "=" + encodeURIComponent(o)];
          (F.isNumber(l) && d.push("expires=" + new Date(l).toGMTString()),
            F.isString(i) && d.push("path=" + i),
            F.isString(s) && d.push("domain=" + s),
            f === !0 && d.push("secure"),
            (document.cookie = d.join("; ")));
        },
        read(n) {
          const o = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"),
          );
          return o ? decodeURIComponent(o[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function sw(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function uw(n, o) {
  return o ? n.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : n;
}
function im(n, o, l) {
  let i = !sw(o);
  return (n && i) || l == !1 ? uw(n, o) : o;
}
const Kp = (n) => (n instanceof Ut ? { ...n } : n);
function Qr(n, o) {
  o = o || {};
  const l = {};
  function i(g, y, E, _) {
    return F.isPlainObject(g) && F.isPlainObject(y)
      ? F.merge.call({ caseless: _ }, g, y)
      : F.isPlainObject(y)
        ? F.merge({}, y)
        : F.isArray(y)
          ? y.slice()
          : y;
  }
  function s(g, y, E, _) {
    if (F.isUndefined(y)) {
      if (!F.isUndefined(g)) return i(void 0, g, E, _);
    } else return i(g, y, E, _);
  }
  function f(g, y) {
    if (!F.isUndefined(y)) return i(void 0, y);
  }
  function d(g, y) {
    if (F.isUndefined(y)) {
      if (!F.isUndefined(g)) return i(void 0, g);
    } else return i(void 0, y);
  }
  function h(g, y, E) {
    if (E in o) return i(g, y);
    if (E in n) return i(void 0, g);
  }
  const v = {
    url: f,
    method: f,
    data: f,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: h,
    headers: (g, y, E) => s(Kp(g), Kp(y), E, !0),
  };
  return (
    F.forEach(Object.keys(Object.assign({}, n, o)), function (y) {
      const E = v[y] || s,
        _ = E(n[y], o[y], y);
      (F.isUndefined(_) && E !== h) || (l[y] = _);
    }),
    l
  );
}
const am = (n) => {
    const o = Qr({}, n);
    let {
      data: l,
      withXSRFToken: i,
      xsrfHeaderName: s,
      xsrfCookieName: f,
      headers: d,
      auth: h,
    } = o;
    ((o.headers = d = Ut.from(d)),
      (o.url = tm(im(o.baseURL, o.url), n.params, n.paramsSerializer)),
      h &&
        d.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : ""),
            ),
        ));
    let v;
    if (F.isFormData(l)) {
      if (Nt.hasStandardBrowserEnv || Nt.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if ((v = d.getContentType()) !== !1) {
        const [g, ...y] = v
          ? v
              .split(";")
              .map((E) => E.trim())
              .filter(Boolean)
          : [];
        d.setContentType([g || "multipart/form-data", ...y].join("; "));
      }
    }
    if (
      Nt.hasStandardBrowserEnv &&
      (i && F.isFunction(i) && (i = i(o)), i || (i !== !1 && iw(o.url)))
    ) {
      const g = s && f && aw.read(f);
      g && d.set(s, g);
    }
    return o;
  },
  cw = typeof XMLHttpRequest < "u",
  fw =
    cw &&
    function (n) {
      return new Promise(function (l, i) {
        const s = am(n);
        let f = s.data;
        const d = Ut.from(s.headers).normalize();
        let { responseType: h, onUploadProgress: v, onDownloadProgress: g } = s,
          y,
          E,
          _,
          $,
          N;
        function S() {
          ($ && $(),
            N && N(),
            s.cancelToken && s.cancelToken.unsubscribe(y),
            s.signal && s.signal.removeEventListener("abort", y));
        }
        let k = new XMLHttpRequest();
        (k.open(s.method.toUpperCase(), s.url, !0), (k.timeout = s.timeout));
        function L() {
          if (!k) return;
          const z = Ut.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders(),
            ),
            Y = {
              data:
                !h || h === "text" || h === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: z,
              config: n,
              request: k,
            };
          (lm(
            function (P) {
              (l(P), S());
            },
            function (P) {
              (i(P), S());
            },
            Y,
          ),
            (k = null));
        }
        ("onloadend" in k
          ? (k.onloadend = L)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf("file:") === 0)) ||
                setTimeout(L);
            }),
          (k.onabort = function () {
            k &&
              (i(new Se("Request aborted", Se.ECONNABORTED, n, k)), (k = null));
          }),
          (k.onerror = function () {
            (i(new Se("Network Error", Se.ERR_NETWORK, n, k)), (k = null));
          }),
          (k.ontimeout = function () {
            let W = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const Y = s.transitional || nm;
            (s.timeoutErrorMessage && (W = s.timeoutErrorMessage),
              i(
                new Se(
                  W,
                  Y.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
                  n,
                  k,
                ),
              ),
              (k = null));
          }),
          f === void 0 && d.setContentType(null),
          "setRequestHeader" in k &&
            F.forEach(d.toJSON(), function (W, Y) {
              k.setRequestHeader(Y, W);
            }),
          F.isUndefined(s.withCredentials) ||
            (k.withCredentials = !!s.withCredentials),
          h && h !== "json" && (k.responseType = s.responseType),
          g && (([_, N] = ua(g, !0)), k.addEventListener("progress", _)),
          v &&
            k.upload &&
            (([E, $] = ua(v)),
            k.upload.addEventListener("progress", E),
            k.upload.addEventListener("loadend", $)),
          (s.cancelToken || s.signal) &&
            ((y = (z) => {
              k &&
                (i(!z || z.type ? new Io(null, n, k) : z),
                k.abort(),
                (k = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(y),
            s.signal &&
              (s.signal.aborted
                ? y()
                : s.signal.addEventListener("abort", y))));
        const B = rw(s.url);
        if (B && Nt.protocols.indexOf(B) === -1) {
          i(new Se("Unsupported protocol " + B + ":", Se.ERR_BAD_REQUEST, n));
          return;
        }
        k.send(f || null);
      });
    },
  dw = (n, o) => {
    const { length: l } = (n = n ? n.filter(Boolean) : []);
    if (o || l) {
      let i = new AbortController(),
        s;
      const f = function (g) {
        if (!s) {
          ((s = !0), h());
          const y = g instanceof Error ? g : this.reason;
          i.abort(
            y instanceof Se ? y : new Io(y instanceof Error ? y.message : y),
          );
        }
      };
      let d =
        o &&
        setTimeout(() => {
          ((d = null), f(new Se(`timeout ${o} of ms exceeded`, Se.ETIMEDOUT)));
        }, o);
      const h = () => {
        n &&
          (d && clearTimeout(d),
          (d = null),
          n.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(f)
              : g.removeEventListener("abort", f);
          }),
          (n = null));
      };
      n.forEach((g) => g.addEventListener("abort", f));
      const { signal: v } = i;
      return ((v.unsubscribe = () => F.asap(h)), v);
    }
  },
  pw = function* (n, o) {
    let l = n.byteLength;
    if (l < o) {
      yield n;
      return;
    }
    let i = 0,
      s;
    for (; i < l;) ((s = i + o), yield n.slice(i, s), (i = s));
  },
  hw = async function* (n, o) {
    for await (const l of mw(n)) yield* pw(l, o);
  },
  mw = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const o = n.getReader();
    try {
      for (;;) {
        const { done: l, value: i } = await o.read();
        if (l) break;
        yield i;
      }
    } finally {
      await o.cancel();
    }
  },
  Qp = (n, o, l, i) => {
    const s = hw(n, o);
    let f = 0,
      d,
      h = (v) => {
        d || ((d = !0), i && i(v));
      };
    return new ReadableStream(
      {
        async pull(v) {
          try {
            const { done: g, value: y } = await s.next();
            if (g) {
              (h(), v.close());
              return;
            }
            let E = y.byteLength;
            if (l) {
              let _ = (f += E);
              l(_);
            }
            v.enqueue(new Uint8Array(y));
          } catch (g) {
            throw (h(g), g);
          }
        },
        cancel(v) {
          return (h(v), s.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  _a =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  sm = _a && typeof ReadableStream == "function",
  vw =
    _a &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (o) =>
            n.encode(o)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  um = (n, ...o) => {
    try {
      return !!n(...o);
    } catch {
      return !1;
    }
  },
  yw =
    sm &&
    um(() => {
      let n = !1;
      const o = new Request(Nt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return ((n = !0), "half");
        },
      }).headers.has("Content-Type");
      return n && !o;
    }),
  qp = 64 * 1024,
  ec = sm && um(() => F.isReadableStream(new Response("").body)),
  ca = { stream: ec && ((n) => n.body) };
_a &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((o) => {
      !ca[o] &&
        (ca[o] = F.isFunction(n[o])
          ? (l) => l[o]()
          : (l, i) => {
              throw new Se(
                `Response type '${o}' is not supported`,
                Se.ERR_NOT_SUPPORT,
                i,
              );
            });
    });
  })(new Response());
const gw = async (n) => {
    if (n == null) return 0;
    if (F.isBlob(n)) return n.size;
    if (F.isSpecCompliantForm(n))
      return (
        await new Request(Nt.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (F.isArrayBufferView(n) || F.isArrayBuffer(n)) return n.byteLength;
    if ((F.isURLSearchParams(n) && (n = n + ""), F.isString(n)))
      return (await vw(n)).byteLength;
  },
  Ew = async (n, o) => {
    const l = F.toFiniteNumber(n.getContentLength());
    return l ?? gw(o);
  },
  ww =
    _a &&
    (async (n) => {
      let {
        url: o,
        method: l,
        data: i,
        signal: s,
        cancelToken: f,
        timeout: d,
        onDownloadProgress: h,
        onUploadProgress: v,
        responseType: g,
        headers: y,
        withCredentials: E = "same-origin",
        fetchOptions: _,
      } = am(n);
      g = g ? (g + "").toLowerCase() : "text";
      let $ = dw([s, f && f.toAbortSignal()], d),
        N;
      const S =
        $ &&
        $.unsubscribe &&
        (() => {
          $.unsubscribe();
        });
      let k;
      try {
        if (
          v &&
          yw &&
          l !== "get" &&
          l !== "head" &&
          (k = await Ew(y, i)) !== 0
        ) {
          let Y = new Request(o, { method: "POST", body: i, duplex: "half" }),
            oe;
          if (
            (F.isFormData(i) &&
              (oe = Y.headers.get("content-type")) &&
              y.setContentType(oe),
            Y.body)
          ) {
            const [P, Q] = Hp(k, ua(Wp(v)));
            i = Qp(Y.body, qp, P, Q);
          }
        }
        F.isString(E) || (E = E ? "include" : "omit");
        const L = "credentials" in Request.prototype;
        N = new Request(o, {
          ..._,
          signal: $,
          method: l.toUpperCase(),
          headers: y.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: L ? E : void 0,
        });
        let B = await fetch(N);
        const z = ec && (g === "stream" || g === "response");
        if (ec && (h || (z && S))) {
          const Y = {};
          ["status", "statusText", "headers"].forEach((le) => {
            Y[le] = B[le];
          });
          const oe = F.toFiniteNumber(B.headers.get("content-length")),
            [P, Q] = (h && Hp(oe, ua(Wp(h), !0))) || [];
          B = new Response(
            Qp(B.body, qp, P, () => {
              (Q && Q(), S && S());
            }),
            Y,
          );
        }
        g = g || "text";
        let W = await ca[F.findKey(ca, g) || "text"](B, n);
        return (
          !z && S && S(),
          await new Promise((Y, oe) => {
            lm(Y, oe, {
              data: W,
              headers: Ut.from(B.headers),
              status: B.status,
              statusText: B.statusText,
              config: n,
              request: N,
            });
          })
        );
      } catch (L) {
        throw (
          S && S(),
          L && L.name === "TypeError" && /fetch/i.test(L.message)
            ? Object.assign(new Se("Network Error", Se.ERR_NETWORK, n, N), {
                cause: L.cause || L,
              })
            : Se.from(L, L && L.code, n, N)
        );
      }
    }),
  tc = { http: bE, xhr: fw, fetch: ww };

