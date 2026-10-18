// Reading excerpt from app.js, starting at line 14985.
// Shares bundle scope; use the complete bundle for execution.
F.forEach(tc, (n, o) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: o });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: o });
  }
});
const Yp = (n) => `- ${n}`,
  Sw = (n) => F.isFunction(n) || n === null || n === !1,
  cm = {
    getAdapter: (n) => {
      n = F.isArray(n) ? n : [n];
      const { length: o } = n;
      let l, i;
      const s = {};
      for (let f = 0; f < o; f++) {
        l = n[f];
        let d;
        if (
          ((i = l),
          !Sw(l) && ((i = tc[(d = String(l)).toLowerCase()]), i === void 0))
        )
          throw new Se(`Unknown adapter '${d}'`);
        if (i) break;
        s[d || "#" + f] = i;
      }
      if (!i) {
        const f = Object.entries(s).map(
          ([h, v]) =>
            `adapter ${h} ` +
            (v === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let d = o
          ? f.length > 1
            ? `since :
` +
              f.map(Yp).join(`
`)
            : " " + Yp(f[0])
          : "as no adapter specified";
        throw new Se(
          "There is no suitable adapter to dispatch the request " + d,
          "ERR_NOT_SUPPORT",
        );
      }
      return i;
    },
    adapters: tc,
  };
function Pu(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Io(null, n);
}
function Gp(n) {
  return (
    Pu(n),
    (n.headers = Ut.from(n.headers)),
    (n.data = ku.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    cm
      .getAdapter(n.adapter || Ul.adapter)(n)
      .then(
        function (i) {
          return (
            Pu(n),
            (i.data = ku.call(n, n.transformResponse, i)),
            (i.headers = Ut.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            om(i) ||
              (Pu(n),
              i &&
                i.response &&
                ((i.response.data = ku.call(
                  n,
                  n.transformResponse,
                  i.response,
                )),
                (i.response.headers = Ut.from(i.response.headers)))),
            Promise.reject(i)
          );
        },
      )
  );
}
const fm = "1.8.2",
  Ca = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, o) => {
    Ca[n] = function (i) {
      return typeof i === n || "a" + (o < 1 ? "n " : " ") + n;
    };
  },
);
const Jp = {};
Ca.transitional = function (o, l, i) {
  function s(f, d) {
    return (
      "[Axios v" +
      fm +
      "] Transitional option '" +
      f +
      "'" +
      d +
      (i ? ". " + i : "")
    );
  }
  return (f, d, h) => {
    if (o === !1)
      throw new Se(
        s(d, " has been removed" + (l ? " in " + l : "")),
        Se.ERR_DEPRECATED,
      );
    return (
      l &&
        !Jp[d] &&
        ((Jp[d] = !0),
        console.warn(
          s(
            d,
            " has been deprecated since v" +
              l +
              " and will be removed in the near future",
          ),
        )),
      o ? o(f, d, h) : !0
    );
  };
};
Ca.spelling = function (o) {
  return (l, i) => (console.warn(`${i} is likely a misspelling of ${o}`), !0);
};
function _w(n, o, l) {
  if (typeof n != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(n);
  let s = i.length;
  for (; s-- > 0;) {
    const f = i[s],
      d = o[f];
    if (d) {
      const h = n[f],
        v = h === void 0 || d(h, f, n);
      if (v !== !0)
        throw new Se("option " + f + " must be " + v, Se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0) throw new Se("Unknown option " + f, Se.ERR_BAD_OPTION);
  }
}
const la = { assertOptions: _w, validators: Ca },
  xn = la.validators;
let Wr = class {
  constructor(o) {
    ((this.defaults = o),
      (this.interceptors = { request: new Bp(), response: new Bp() }));
  }
  async request(o, l) {
    try {
      return await this._request(o, l);
    } catch (i) {
      if (i instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const f = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? f &&
              !String(i.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + f)
            : (i.stack = f);
        } catch {}
      }
      throw i;
    }
  }
  _request(o, l) {
    (typeof o == "string" ? ((l = l || {}), (l.url = o)) : (l = o || {}),
      (l = Qr(this.defaults, l)));
    const { transitional: i, paramsSerializer: s, headers: f } = l;
    (i !== void 0 &&
      la.assertOptions(
        i,
        {
          silentJSONParsing: xn.transitional(xn.boolean),
          forcedJSONParsing: xn.transitional(xn.boolean),
          clarifyTimeoutError: xn.transitional(xn.boolean),
        },
        !1,
      ),
      s != null &&
        (F.isFunction(s)
          ? (l.paramsSerializer = { serialize: s })
          : la.assertOptions(
              s,
              { encode: xn.function, serialize: xn.function },
              !0,
            )),
      l.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (l.allowAbsoluteUrls = !0)),
      la.assertOptions(
        l,
        {
          baseUrl: xn.spelling("baseURL"),
          withXsrfToken: xn.spelling("withXSRFToken"),
        },
        !0,
      ),
      (l.method = (l.method || this.defaults.method || "get").toLowerCase()));
    let d = f && F.merge(f.common, f[l.method]);
    (f &&
      F.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (N) => {
          delete f[N];
        },
      ),
      (l.headers = Ut.concat(d, f)));
    const h = [];
    let v = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(l) === !1) ||
        ((v = v && S.synchronous), h.unshift(S.fulfilled, S.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (S) {
      g.push(S.fulfilled, S.rejected);
    });
    let y,
      E = 0,
      _;
    if (!v) {
      const N = [Gp.bind(this), void 0];
      for (
        N.unshift.apply(N, h),
          N.push.apply(N, g),
          _ = N.length,
          y = Promise.resolve(l);
        E < _;
      )
        y = y.then(N[E++], N[E++]);
      return y;
    }
    _ = h.length;
    let $ = l;
    for (E = 0; E < _;) {
      const N = h[E++],
        S = h[E++];
      try {
        $ = N($);
      } catch (k) {
        S.call(this, k);
        break;
      }
    }
    try {
      y = Gp.call(this, $);
    } catch (N) {
      return Promise.reject(N);
    }
    for (E = 0, _ = g.length; E < _;) y = y.then(g[E++], g[E++]);
    return y;
  }
  getUri(o) {
    o = Qr(this.defaults, o);
    const l = im(o.baseURL, o.url, o.allowAbsoluteUrls);
    return tm(l, o.params, o.paramsSerializer);
  }
};
F.forEach(["delete", "get", "head", "options"], function (o) {
  Wr.prototype[o] = function (l, i) {
    return this.request(
      Qr(i || {}, { method: o, url: l, data: (i || {}).data }),
    );
  };
});
F.forEach(["post", "put", "patch"], function (o) {
  function l(i) {
    return function (f, d, h) {
      return this.request(
        Qr(h || {}, {
          method: o,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: d,
        }),
      );
    };
  }
  ((Wr.prototype[o] = l()), (Wr.prototype[o + "Form"] = l(!0)));
});
let Cw = class dm {
  constructor(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.");
    let l;
    this.promise = new Promise(function (f) {
      l = f;
    });
    const i = this;
    (this.promise.then((s) => {
      if (!i._listeners) return;
      let f = i._listeners.length;
      for (; f-- > 0;) i._listeners[f](s);
      i._listeners = null;
    }),
      (this.promise.then = (s) => {
        let f;
        const d = new Promise((h) => {
          (i.subscribe(h), (f = h));
        }).then(s);
        return (
          (d.cancel = function () {
            i.unsubscribe(f);
          }),
          d
        );
      }),
      o(function (f, d, h) {
        i.reason || ((i.reason = new Io(f, d, h)), l(i.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(o) {
    if (this.reason) {
      o(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(o) : (this._listeners = [o]);
  }
  unsubscribe(o) {
    if (!this._listeners) return;
    const l = this._listeners.indexOf(o);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const o = new AbortController(),
      l = (i) => {
        o.abort(i);
      };
    return (
      this.subscribe(l),
      (o.signal.unsubscribe = () => this.unsubscribe(l)),
      o.signal
    );
  }
  static source() {
    let o;
    return {
      token: new dm(function (s) {
        o = s;
      }),
      cancel: o,
    };
  }
};
function Rw(n) {
  return function (l) {
    return n.apply(null, l);
  };
}
function xw(n) {
  return F.isObject(n) && n.isAxiosError === !0;
}
const nc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(nc).forEach(([n, o]) => {
  nc[o] = n;
});
function pm(n) {
  const o = new Wr(n),
    l = Hh(Wr.prototype.request, o);
  return (
    F.extend(l, Wr.prototype, o, { allOwnKeys: !0 }),
    F.extend(l, o, null, { allOwnKeys: !0 }),
    (l.create = function (s) {
      return pm(Qr(n, s));
    }),
    l
  );
}
const rt = pm(Ul);
rt.Axios = Wr;
rt.CanceledError = Io;
rt.CancelToken = Cw;
rt.isCancel = om;
rt.VERSION = fm;
rt.toFormData = Sa;
rt.AxiosError = Se;
rt.Cancel = rt.CanceledError;
rt.all = function (o) {
  return Promise.all(o);
};
rt.spread = Rw;
rt.isAxiosError = xw;
rt.mergeConfig = Qr;
rt.AxiosHeaders = Ut;
rt.formToJSON = (n) => rm(F.isHTMLForm(n) ? new FormData(n) : n);
rt.getAdapter = cm.getAdapter;
rt.HttpStatusCode = nc;
rt.default = rt;
const {
    Axios: S_,
    AxiosError: __,
    CanceledError: C_,
    isCancel: R_,
    CancelToken: x_,
    VERSION: k_,
    all: P_,
    Cancel: T_,
    isAxiosError: N_,
    spread: O_,
    toFormData: D_,
    AxiosHeaders: L_,
    HttpStatusCode: $_,
    formToJSON: A_,
    getAdapter: b_,
    mergeConfig: F_,
  } = rt,
  kw = new URL(window.location.href),
  Do = `${kw.protocol}`,
  Lo = rt.create({ baseURL: Do }),
  Al = { fetcher: (n, o = "get") => rt[o](n).then((l) => l.data) },
  Pw = (n, o = 0) => {
    let l = null;
    return (...i) => {
      (l !== null && window.clearTimeout(l),
        (l = window.setTimeout(() => {
          (n(...i), (l = null));
        }, o)));
    };
  };
function hm(n) {
  var o,
    l,
    i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var s = n.length;
      for (o = 0; o < s; o++)
        n[o] && (l = hm(n[o])) && (i && (i += " "), (i += l));
    } else for (l in n) n[l] && (i && (i += " "), (i += l));
  return i;
}
function Tu() {
  for (var n, o, l = 0, i = "", s = arguments.length; l < s; l++)
    (n = arguments[l]) && (o = hm(n)) && (i && (i += " "), (i += o));
  return i;
}
function Pc(n) {
  const { gameVersion: o, setGameVersion: l } = n;
  return p.createElement(
    "ul",
    { className: "tabs body-centered" },
    p.createElement(
      "li",
      {
        className: Tu("tabs__item", o === 1 && "tabs__item--active"),
        onClick: () => l(1),
      },
      "HITMAN™",
    ),
    p.createElement(
      "li",
      {
        className: Tu("tabs__item", o === 2 && "tabs__item--active"),
        onClick: () => l(2),
      },
      "HITMAN™ 2",
    ),
    p.createElement(
      "li",
      {
        className: Tu("tabs__item", o === 3 && "tabs__item--active"),
        onClick: () => l(3),
      },
      "HITMAN™ 3",
    ),
  );
}
function mm({ users: n, setUser: o }) {
  return n.length === 0
    ? p.createElement(
        "section",
        { className: "margin-top" },
        p.createElement(
          "p",
          { className: "body-centered flex" },
          "No users detected on this game version!",
        ),
      )
    : p.createElement(
        "section",
        { className: "margin-top" },
        p.createElement(
          "nav",
          { className: "pagination-nav" },
          n.map((l) =>
            p.createElement(
              "div",
              { className: "pagination-nav__item", key: l.id },
              p.createElement(
                "button",
                { className: "pagination-nav__link", onClick: () => o(l.id) },
                p.createElement(
                  "div",
                  { className: "pagination-nav__sublabel centered" },
                  l.platform,
                ),
                p.createElement(
                  "div",
                  { className: "pagination-nav__label centered" },
                  l.name ?? "No Name Found",
                ),
              ),
            ),
          ),
        ),
      );
}
function Ue() {
  return (
    (Ue = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var i in l)
              Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
          }
          return n;
        }),
    Ue.apply(this, arguments)
  );
}
function Tw(n, o) {
  const l = p.createContext(o);
  function i(f) {
    const { children: d, ...h } = f,
      v = p.useMemo(() => h, Object.values(h));
    return p.createElement(l.Provider, { value: v }, d);
  }
  function s(f) {
    const d = p.useContext(l);
    if (d) return d;
    if (o !== void 0) return o;
    throw new Error(`\`${f}\` must be used within \`${n}\``);
  }
  return ((i.displayName = n + "Provider"), [i, s]);
}
function vm(n, o = []) {
  let l = [];
  function i(f, d) {
    const h = p.createContext(d),
      v = l.length;
    l = [...l, d];
    function g(E) {
      const { scope: _, children: $, ...N } = E,
        S = (_ == null ? void 0 : _[n][v]) || h,
        k = p.useMemo(() => N, Object.values(N));
      return p.createElement(S.Provider, { value: k }, $);
    }
    function y(E, _) {
      const $ = (_ == null ? void 0 : _[n][v]) || h,
        N = p.useContext($);
      if (N) return N;
      if (d !== void 0) return d;
      throw new Error(`\`${E}\` must be used within \`${f}\``);
    }
    return ((g.displayName = f + "Provider"), [g, y]);
  }
  const s = () => {
    const f = l.map((d) => p.createContext(d));
    return function (h) {
      const v = (h == null ? void 0 : h[n]) || f;
      return p.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: v } }), [h, v]);
    };
  };
  return ((s.scopeName = n), [i, Nw(s, ...o)]);
}
function Nw(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const l = () => {
    const i = n.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (f) {
      const d = i.reduce((h, { useScope: v, scopeName: g }) => {
        const E = v(f)[`__scope${g}`];
        return { ...h, ...E };
      }, {});
      return p.useMemo(() => ({ [`__scope${o.scopeName}`]: d }), [d]);
    };
  };
  return ((l.scopeName = o.scopeName), l);
}
function Ow(n, o) {
  typeof n == "function" ? n(o) : n != null && (n.current = o);
}
function ym(...n) {
  return (o) => n.forEach((l) => Ow(l, o));
}
function Sr(...n) {
  return p.useCallback(ym(...n), n);
}
function Hn(n, o, { checkForDefaultPrevented: l = !0 } = {}) {
  return function (s) {
    if ((n == null || n(s), l === !1 || !s.defaultPrevented))
      return o == null ? void 0 : o(s);
  };
}
const rc =
    globalThis != null && globalThis.document ? p.useLayoutEffect : () => {},
  Dw = yh.useId || (() => {});
let Lw = 0;
function Nu(n) {
  const [o, l] = p.useState(Dw());
  return (
    rc(() => {
      l((i) => i ?? String(Lw++));
    }, [n]),
    n || (o ? `radix-${o}` : "")
  );
}
function qr(n) {
  const o = p.useRef(n);
  return (
    p.useEffect(() => {
      o.current = n;
    }),
    p.useMemo(
      () =>
        (...l) => {
          var i;
          return (i = o.current) === null || i === void 0
            ? void 0
            : i.call(o, ...l);
        },
      [],
    )
  );
}
function $w({ prop: n, defaultProp: o, onChange: l = () => {} }) {
  const [i, s] = Aw({ defaultProp: o, onChange: l }),
    f = n !== void 0,
    d = f ? n : i,
    h = qr(l),
    v = p.useCallback(
      (g) => {
        if (f) {
          const E = typeof g == "function" ? g(n) : g;
          E !== n && h(E);
        } else s(g);
      },
      [f, n, s, h],
    );
  return [d, v];
}
function Aw({ defaultProp: n, onChange: o }) {
  const l = p.useState(n),
    [i] = l,
    s = p.useRef(i),
    f = qr(o);
  return (
    p.useEffect(() => {
      s.current !== i && (f(i), (s.current = i));
    }, [i, s, f]),
    l
  );
}
const Tc = p.forwardRef((n, o) => {
  const { children: l, ...i } = n,
    s = p.Children.toArray(l),
    f = s.find(bw);
  if (f) {
    const d = f.props.children,
      h = s.map((v) =>
        v === f
          ? p.Children.count(d) > 1
            ? p.Children.only(null)
            : p.isValidElement(d)
              ? d.props.children
              : null
          : v,
      );
    return p.createElement(
      oc,
      Ue({}, i, { ref: o }),
      p.isValidElement(d) ? p.cloneElement(d, void 0, h) : null,
    );
  }
  return p.createElement(oc, Ue({}, i, { ref: o }), l);
});
Tc.displayName = "Slot";
const oc = p.forwardRef((n, o) => {
  const { children: l, ...i } = n;
  return p.isValidElement(l)
    ? p.cloneElement(l, { ...Fw(i, l.props), ref: o ? ym(o, l.ref) : l.ref })
    : p.Children.count(l) > 1
      ? p.Children.only(null)
      : null;
});
oc.displayName = "SlotClone";
const gm = ({ children: n }) => p.createElement(p.Fragment, null, n);
function bw(n) {
  return p.isValidElement(n) && n.type === gm;
}
function Fw(n, o) {
  const l = { ...o };
  for (const i in o) {
    const s = n[i],
      f = o[i];
    /^on[A-Z]/.test(i)
      ? s && f
        ? (l[i] = (...h) => {
            (f(...h), s(...h));
          })
        : s && (l[i] = s)
      : i === "style"
        ? (l[i] = { ...s, ...f })
        : i === "className" && (l[i] = [s, f].filter(Boolean).join(" "));
  }
  return { ...n, ...l };
}
const Mw = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  _r = Mw.reduce((n, o) => {
    const l = p.forwardRef((i, s) => {
      const { asChild: f, ...d } = i,
        h = f ? Tc : o;
      return (
        p.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        p.createElement(h, Ue({}, d, { ref: s }))
      );
    });
    return ((l.displayName = `Primitive.${o}`), { ...n, [o]: l });
  }, {});
function Iw(n, o) {
  n && ma.flushSync(() => n.dispatchEvent(o));
}
function zw(n, o = globalThis == null ? void 0 : globalThis.document) {
  const l = qr(n);
  p.useEffect(() => {
    const i = (s) => {
      s.key === "Escape" && l(s);
    };
    return (
      o.addEventListener("keydown", i),
      () => o.removeEventListener("keydown", i)
    );
  }, [l, o]);
}
const lc = "dismissableLayer.update",
  Uw = "dismissableLayer.pointerDownOutside",
  jw = "dismissableLayer.focusOutside";
let Xp;
const Bw = p.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Vw = p.forwardRef((n, o) => {
    var l;
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: h,
        onDismiss: v,
        ...g
      } = n,
      y = p.useContext(Bw),
      [E, _] = p.useState(null),
      $ =
        (l = E == null ? void 0 : E.ownerDocument) !== null && l !== void 0
          ? l
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, N] = p.useState({}),
      S = Sr(o, (Q) => _(Q)),
      k = Array.from(y.layers),
      [L] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
      B = k.indexOf(L),
      z = E ? k.indexOf(E) : -1,
      W = y.layersWithOutsidePointerEventsDisabled.size > 0,
      Y = z >= B,
      oe = Hw((Q) => {
        const le = Q.target,
          se = [...y.branches].some((_e) => _e.contains(le));
        !Y ||
          se ||
          (f == null || f(Q),
          h == null || h(Q),
          Q.defaultPrevented || v == null || v());
      }, $),
      P = Ww((Q) => {
        const le = Q.target;
        [...y.branches].some((_e) => _e.contains(le)) ||
          (d == null || d(Q),
          h == null || h(Q),
          Q.defaultPrevented || v == null || v());
      }, $);
    return (
      zw((Q) => {
        z === y.layers.size - 1 &&
          (s == null || s(Q),
          !Q.defaultPrevented && v && (Q.preventDefault(), v()));
      }, $),
      p.useEffect(() => {
        if (E)
          return (
            i &&
              (y.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Xp = $.body.style.pointerEvents),
                ($.body.style.pointerEvents = "none")),
              y.layersWithOutsidePointerEventsDisabled.add(E)),
            y.layers.add(E),
            Zp(),
            () => {
              i &&
                y.layersWithOutsidePointerEventsDisabled.size === 1 &&
                ($.body.style.pointerEvents = Xp);
            }
          );
      }, [E, $, i, y]),
      p.useEffect(
        () => () => {
          E &&
            (y.layers.delete(E),
            y.layersWithOutsidePointerEventsDisabled.delete(E),
            Zp());
        },
        [E, y],
      ),
      p.useEffect(() => {
        const Q = () => N({});
        return (
          document.addEventListener(lc, Q),
          () => document.removeEventListener(lc, Q)
        );
      }, []),
      p.createElement(
        _r.div,
        Ue({}, g, {
          ref: S,
          style: {
            pointerEvents: W ? (Y ? "auto" : "none") : void 0,
            ...n.style,
          },
          onFocusCapture: Hn(n.onFocusCapture, P.onFocusCapture),
          onBlurCapture: Hn(n.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: Hn(
            n.onPointerDownCapture,
            oe.onPointerDownCapture,
          ),
        }),
      )
    );
  });
function Hw(n, o = globalThis == null ? void 0 : globalThis.document) {
  const l = qr(n),
    i = p.useRef(!1),
    s = p.useRef(() => {});
  return (
    p.useEffect(() => {
      const f = (h) => {
          if (h.target && !i.current) {
            let y = function () {
              Em(Uw, l, g, { discrete: !0 });
            };
            var v = y;
            const g = { originalEvent: h };
            h.pointerType === "touch"
              ? (o.removeEventListener("click", s.current),
                (s.current = y),
                o.addEventListener("click", s.current, { once: !0 }))
              : y();
          } else o.removeEventListener("click", s.current);
          i.current = !1;
        },
        d = window.setTimeout(() => {
          o.addEventListener("pointerdown", f);
        }, 0);
      return () => {
        (window.clearTimeout(d),
          o.removeEventListener("pointerdown", f),
          o.removeEventListener("click", s.current));
      };
    }, [o, l]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function Ww(n, o = globalThis == null ? void 0 : globalThis.document) {
  const l = qr(n),
    i = p.useRef(!1);
  return (
    p.useEffect(() => {
      const s = (f) => {
        f.target &&
          !i.current &&
          Em(jw, l, { originalEvent: f }, { discrete: !1 });
      };
      return (
        o.addEventListener("focusin", s),
        () => o.removeEventListener("focusin", s)
      );
    }, [o, l]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function Zp() {
  const n = new CustomEvent(lc);
  document.dispatchEvent(n);
}
function Em(n, o, l, { discrete: i }) {
  const s = l.originalEvent.target,
    f = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l });
  (o && s.addEventListener(n, o, { once: !0 }),
    i ? Iw(s, f) : s.dispatchEvent(f));
}
const Ou = "focusScope.autoFocusOnMount",
  Du = "focusScope.autoFocusOnUnmount",
  eh = { bubbles: !1, cancelable: !0 },
  Kw = p.forwardRef((n, o) => {
    const {
        loop: l = !1,
        trapped: i = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: f,
        ...d
      } = n,
      [h, v] = p.useState(null),
      g = qr(s),
      y = qr(f),
      E = p.useRef(null),
      _ = Sr(o, (S) => v(S)),
      $ = p.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (p.useEffect(() => {
      if (i) {
        let B = function (oe) {
            if ($.paused || !h) return;
            const P = oe.target;
            h.contains(P) ? (E.current = P) : vr(E.current, { select: !0 });
          },
          z = function (oe) {
            if ($.paused || !h) return;
            const P = oe.relatedTarget;
            P !== null && (h.contains(P) || vr(E.current, { select: !0 }));
          },
          W = function (oe) {
            if (document.activeElement === document.body)
              for (const Q of oe) Q.removedNodes.length > 0 && vr(h);
          };
        var S = B,
          k = z,
          L = W;
        (document.addEventListener("focusin", B),
          document.addEventListener("focusout", z));
        const Y = new MutationObserver(W);
        return (
          h && Y.observe(h, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", B),
              document.removeEventListener("focusout", z),
              Y.disconnect());
          }
        );
      }
    }, [i, h, $.paused]),
      p.useEffect(() => {
        if (h) {
          nh.add($);
          const S = document.activeElement;
          if (!h.contains(S)) {
            const L = new CustomEvent(Ou, eh);
            (h.addEventListener(Ou, g),
              h.dispatchEvent(L),
              L.defaultPrevented ||
                (Qw(Xw(wm(h)), { select: !0 }),
                document.activeElement === S && vr(h)));
          }
          return () => {
            (h.removeEventListener(Ou, g),
              setTimeout(() => {
                const L = new CustomEvent(Du, eh);
                (h.addEventListener(Du, y),
                  h.dispatchEvent(L),
                  L.defaultPrevented || vr(S ?? document.body, { select: !0 }),
                  h.removeEventListener(Du, y),
                  nh.remove($));
              }, 0));
          };
        }
      }, [h, g, y, $]));
    const N = p.useCallback(
      (S) => {
        if ((!l && !i) || $.paused) return;
        const k = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey,
          L = document.activeElement;
        if (k && L) {
          const B = S.currentTarget,
            [z, W] = qw(B);
          z && W
            ? !S.shiftKey && L === W
              ? (S.preventDefault(), l && vr(z, { select: !0 }))
              : S.shiftKey &&
                L === z &&
                (S.preventDefault(), l && vr(W, { select: !0 }))
            : L === B && S.preventDefault();
        }
      },
      [l, i, $.paused],
    );
    return p.createElement(
      _r.div,
      Ue({ tabIndex: -1 }, d, { ref: _, onKeyDown: N }),
    );
  });
function Qw(n, { select: o = !1 } = {}) {
  const l = document.activeElement;
  for (const i of n)
    if ((vr(i, { select: o }), document.activeElement !== l)) return;
}
function qw(n) {
  const o = wm(n),
    l = th(o, n),
    i = th(o.reverse(), n);
  return [l, i];
}
function wm(n) {
  const o = [],
    l = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const s = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || s
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; l.nextNode();) o.push(l.currentNode);
  return o;
}
function th(n, o) {
  for (const l of n) if (!Yw(l, { upTo: o })) return l;
}
function Yw(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n;) {
    if (o !== void 0 && n === o) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function Gw(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function vr(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const l = document.activeElement;
    (n.focus({ preventScroll: !0 }), n !== l && Gw(n) && o && n.select());
  }
}
const nh = Jw();
function Jw() {
  let n = [];
  return {
    add(o) {
      const l = n[0];
      (o !== l && (l == null || l.pause()), (n = rh(n, o)), n.unshift(o));
    },
    remove(o) {
      var l;
      ((n = rh(n, o)), (l = n[0]) === null || l === void 0 || l.resume());
    },
  };
}
function rh(n, o) {
  const l = [...n],
    i = l.indexOf(o);
  return (i !== -1 && l.splice(i, 1), l);
}
function Xw(n) {
  return n.filter((o) => o.tagName !== "A");
}
const Zw = p.forwardRef((n, o) => {
  var l;
  const {
    container: i = globalThis == null ||
    (l = globalThis.document) === null ||
    l === void 0
      ? void 0
      : l.body,
    ...s
  } = n;
  return i
    ? Eh.createPortal(p.createElement(_r.div, Ue({}, s, { ref: o })), i)
    : null;
});
function e1(n, o) {
  return p.useReducer((l, i) => {
    const s = o[l][i];
    return s ?? l;
  }, n);
}
const Ra = (n) => {
  const { present: o, children: l } = n,
    i = t1(o),
    s =
      typeof l == "function" ? l({ present: i.isPresent }) : p.Children.only(l),
    f = Sr(i.ref, s.ref);
  return typeof l == "function" || i.isPresent
    ? p.cloneElement(s, { ref: f })
    : null;
};
Ra.displayName = "Presence";
function t1(n) {
  const [o, l] = p.useState(),
    i = p.useRef({}),
    s = p.useRef(n),
    f = p.useRef("none"),
    d = n ? "mounted" : "unmounted",
    [h, v] = e1(d, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    p.useEffect(() => {
      const g = Xi(i.current);
      f.current = h === "mounted" ? g : "none";
    }, [h]),
    rc(() => {
      const g = i.current,
        y = s.current;
      if (y !== n) {
        const _ = f.current,
          $ = Xi(g);
        (n
          ? v("MOUNT")
          : $ === "none" || (g == null ? void 0 : g.display) === "none"
            ? v("UNMOUNT")
            : v(y && _ !== $ ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = n));
      }
    }, [n, v]),
    rc(() => {
      if (o) {
        const g = (E) => {
            const $ = Xi(i.current).includes(E.animationName);
            E.target === o && $ && ma.flushSync(() => v("ANIMATION_END"));
          },
          y = (E) => {
            E.target === o && (f.current = Xi(i.current));
          };
        return (
          o.addEventListener("animationstart", y),
          o.addEventListener("animationcancel", g),
          o.addEventListener("animationend", g),
          () => {
            (o.removeEventListener("animationstart", y),
              o.removeEventListener("animationcancel", g),
              o.removeEventListener("animationend", g));
          }
        );
      } else v("ANIMATION_END");
    }, [o, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: p.useCallback((g) => {
        (g && (i.current = getComputedStyle(g)), l(g));
      }, []),
    }
  );
}
function Xi(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
let Lu = 0;
function n1() {
  p.useEffect(() => {
    var n, o;
    const l = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (n = l[0]) !== null && n !== void 0 ? n : oh(),
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (o = l[1]) !== null && o !== void 0 ? o : oh(),
      ),
      Lu++,
      () => {
        (Lu === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((i) => i.remove()),
          Lu--);
      }
    );
  }, []);
}
function oh() {
  const n = document.createElement("span");
  return (
    n.setAttribute("data-radix-focus-guard", ""),
    (n.tabIndex = 0),
    (n.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    n
  );
}
var Pn = function () {
  return (
    (Pn =
      Object.assign ||
      function (o) {
        for (var l, i = 1, s = arguments.length; i < s; i++) {
          l = arguments[i];
          for (var f in l)
            Object.prototype.hasOwnProperty.call(l, f) && (o[f] = l[f]);
        }
        return o;
      }),
    Pn.apply(this, arguments)
  );
};
function Sm(n, o) {
  var l = {};
  for (var i in n)
    Object.prototype.hasOwnProperty.call(n, i) &&
      o.indexOf(i) < 0 &&
      (l[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
      o.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, i[s]) &&
        (l[i[s]] = n[i[s]]);
  return l;
}
function r1(n, o, l) {
  if (l || arguments.length === 2)
    for (var i = 0, s = o.length, f; i < s; i++)
      (f || !(i in o)) &&
        (f || (f = Array.prototype.slice.call(o, 0, i)), (f[i] = o[i]));
  return n.concat(f || Array.prototype.slice.call(o));
}
var ia = "right-scroll-bar-position",
  aa = "width-before-scroll-bar",
  o1 = "with-scroll-bars-hidden",
  l1 = "--removed-body-scroll-bar-size";
function $u(n, o) {
  return (typeof n == "function" ? n(o) : n && (n.current = o), n);
}
function i1(n, o) {
  var l = p.useState(function () {
    return {
      value: n,
      callback: o,
      facade: {
        get current() {
          return l.value;
        },
        set current(i) {
          var s = l.value;
          s !== i && ((l.value = i), l.callback(i, s));
        },
      },
    };
  })[0];
  return ((l.callback = o), l.facade);
}
var a1 = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
  lh = new WeakMap();
function s1(n, o) {
  var l = i1(null, function (i) {
    return n.forEach(function (s) {
      return $u(s, i);
    });
  });
  return (
    a1(
      function () {
        var i = lh.get(l);
        if (i) {
          var s = new Set(i),
            f = new Set(n),
            d = l.current;
          (s.forEach(function (h) {
            f.has(h) || $u(h, null);
          }),
            f.forEach(function (h) {
              s.has(h) || $u(h, d);
            }));
        }
        lh.set(l, n);
      },
      [n],
    ),
    l
  );
}
function u1(n) {
  return n;
}
function c1(n, o) {
  o === void 0 && (o = u1);
  var l = [],
    i = !1,
    s = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return l.length ? l[l.length - 1] : n;
      },
      useMedium: function (f) {
        var d = o(f, i);
        return (
          l.push(d),
          function () {
            l = l.filter(function (h) {
              return h !== d;
            });
          }
        );
      },
      assignSyncMedium: function (f) {
        for (i = !0; l.length;) {
          var d = l;
          ((l = []), d.forEach(f));
        }
        l = {
          push: function (h) {
            return f(h);
          },
          filter: function () {
            return l;
          },
        };
      },
      assignMedium: function (f) {
        i = !0;
        var d = [];
        if (l.length) {
          var h = l;
          ((l = []), h.forEach(f), (d = l));
        }
        var v = function () {
            var y = d;
            ((d = []), y.forEach(f));
          },
          g = function () {
            return Promise.resolve().then(v);
          };
        (g(),
          (l = {
            push: function (y) {
              (d.push(y), g());
            },
            filter: function (y) {
              return ((d = d.filter(y)), l);
            },
          }));
      },
    };
  return s;
}
function f1(n) {
  n === void 0 && (n = {});
  var o = c1(null);
  return ((o.options = Pn({ async: !0, ssr: !1 }, n)), o);
}
var _m = function (n) {
  var o = n.sideCar,
    l = Sm(n, ["sideCar"]);
  if (!o)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var i = o.read();
  if (!i) throw new Error("Sidecar medium not found");
  return p.createElement(i, Pn({}, l));
};
_m.isSideCarExport = !0;
function d1(n, o) {
  return (n.useMedium(o), _m);
}
var Cm = f1(),
  Au = function () {},
  xa = p.forwardRef(function (n, o) {
    var l = p.useRef(null),
      i = p.useState({
        onScrollCapture: Au,
        onWheelCapture: Au,
        onTouchMoveCapture: Au,
      }),
      s = i[0],
      f = i[1],
      d = n.forwardProps,
      h = n.children,
      v = n.className,
      g = n.removeScrollBar,
      y = n.enabled,
      E = n.shards,
      _ = n.sideCar,
      $ = n.noIsolation,
      N = n.inert,
      S = n.allowPinchZoom,
      k = n.as,
      L = k === void 0 ? "div" : k,
      B = Sm(n, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      z = _,
      W = s1([l, o]),
      Y = Pn(Pn({}, B), s);
    return p.createElement(
      p.Fragment,
      null,
      y &&
        p.createElement(z, {
          sideCar: Cm,
          removeScrollBar: g,
          shards: E,
          noIsolation: $,
          inert: N,
          setCallbacks: f,
          allowPinchZoom: !!S,
          lockRef: l,
        }),
      d
        ? p.cloneElement(p.Children.only(h), Pn(Pn({}, Y), { ref: W }))
        : p.createElement(L, Pn({}, Y, { className: v, ref: W }), h),
    );
  });
xa.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
xa.classNames = { fullWidth: aa, zeroRight: ia };
var p1 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function h1() {
  if (!document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var o = p1();
  return (o && n.setAttribute("nonce", o), n);
}
function m1(n, o) {
  n.styleSheet
    ? (n.styleSheet.cssText = o)
    : n.appendChild(document.createTextNode(o));
}
function v1(n) {
  var o = document.head || document.getElementsByTagName("head")[0];
  o.appendChild(n);
}
var y1 = function () {
    var n = 0,
      o = null;
    return {
      add: function (l) {
        (n == 0 && (o = h1()) && (m1(o, l), v1(o)), n++);
      },
      remove: function () {
        (n--,
          !n && o && (o.parentNode && o.parentNode.removeChild(o), (o = null)));
      },
    };
  },
  g1 = function () {
    var n = y1();
    return function (o, l) {
      p.useEffect(
        function () {
          return (
            n.add(o),
            function () {
              n.remove();
            }
          );
        },
        [o && l],
      );
    };
  },
  Rm = function () {
    var n = g1(),
      o = function (l) {
        var i = l.styles,
          s = l.dynamic;
        return (n(i, s), null);
      };
    return o;
  },
  E1 = { left: 0, top: 0, right: 0, gap: 0 },
  bu = function (n) {
    return parseInt(n || "", 10) || 0;
  },
  w1 = function (n) {
    var o = window.getComputedStyle(document.body),
      l = o[n === "padding" ? "paddingLeft" : "marginLeft"],
      i = o[n === "padding" ? "paddingTop" : "marginTop"],
      s = o[n === "padding" ? "paddingRight" : "marginRight"];
    return [bu(l), bu(i), bu(s)];
  },
  S1 = function (n) {
    if ((n === void 0 && (n = "margin"), typeof window > "u")) return E1;
    var o = w1(n),
      l = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: o[0],
      top: o[1],
      right: o[2],
      gap: Math.max(0, i - l + o[2] - o[0]),
    };
  },
  _1 = Rm(),
  No = "data-scroll-locked",
  C1 = function (n, o, l, i) {
    var s = n.left,
      f = n.top,
      d = n.right,
      h = n.gap;
    return (
      l === void 0 && (l = "margin"),
      `
  .`
        .concat(
          o1,
          ` {
   overflow: hidden `,
        )
        .concat(
          i,
          `;
   padding-right: `,
        )
        .concat(h, "px ")
        .concat(
          i,
          `;
  }
  body[`,
        )
        .concat(
          No,
          `] {
    overflow: hidden `,
        )
        .concat(
          i,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            o && "position: relative ".concat(i, ";"),
            l === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  f,
                  `px;
    padding-right: `,
                )
                .concat(
                  d,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(h, "px ")
                .concat(
                  i,
                  `;
    `,
                ),
            l === "padding" &&
              "padding-right: ".concat(h, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ia,
          ` {
    right: `,
        )
        .concat(h, "px ")
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(
          aa,
          ` {
    margin-right: `,
        )
        .concat(h, "px ")
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(ia, " .")
        .concat(
          ia,
          ` {
    right: 0 `,
        )
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(aa, " .")
        .concat(
          aa,
          ` {
    margin-right: 0 `,
        )
        .concat(
          i,
          `;
  }
  
  body[`,
        )
        .concat(
          No,
          `] {
    `,
        )
        .concat(l1, ": ")
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  ih = function () {
    var n = parseInt(document.body.getAttribute(No) || "0", 10);
    return isFinite(n) ? n : 0;
  },
  R1 = function () {
    p.useEffect(function () {
      return (
        document.body.setAttribute(No, (ih() + 1).toString()),
        function () {
          var n = ih() - 1;
          n <= 0
            ? document.body.removeAttribute(No)
            : document.body.setAttribute(No, n.toString());
        }
      );
    }, []);
  },
  x1 = function (n) {
    var o = n.noRelative,
      l = n.noImportant,
      i = n.gapMode,
      s = i === void 0 ? "margin" : i;
    R1();
    var f = p.useMemo(
      function () {
        return S1(s);
      },
      [s],
    );
    return p.createElement(_1, { styles: C1(f, !o, s, l ? "" : "!important") });
  },
  ic = !1;
if (typeof window < "u")
  try {
    var Zi = Object.defineProperty({}, "passive", {
      get: function () {
        return ((ic = !0), !0);
      },
    });
    (window.addEventListener("test", Zi, Zi),
      window.removeEventListener("test", Zi, Zi));
  } catch {
    ic = !1;
  }
var xo = ic ? { passive: !1 } : !1,
  k1 = function (n) {
    return n.tagName === "TEXTAREA";
  },
  xm = function (n, o) {
    var l = window.getComputedStyle(n);
    return (
      l[o] !== "hidden" &&
      !(l.overflowY === l.overflowX && !k1(n) && l[o] === "visible")
    );
  },
  P1 = function (n) {
    return xm(n, "overflowY");
  },
  T1 = function (n) {
    return xm(n, "overflowX");
  },
  ah = function (n, o) {
    var l = o;
    do {
      typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host);
      var i = km(n, l);
      if (i) {
        var s = Pm(n, l),
          f = s[1],
          d = s[2];
        if (f > d) return !0;
      }
      l = l.parentNode;
    } while (l && l !== document.body);
    return !1;
  },
  N1 = function (n) {
    var o = n.scrollTop,
      l = n.scrollHeight,
      i = n.clientHeight;
    return [o, l, i];
  },
  O1 = function (n) {
    var o = n.scrollLeft,
      l = n.scrollWidth,
      i = n.clientWidth;
    return [o, l, i];
  },
  km = function (n, o) {
    return n === "v" ? P1(o) : T1(o);
  },
  Pm = function (n, o) {
    return n === "v" ? N1(o) : O1(o);
  },
  D1 = function (n, o) {
    return n === "h" && o === "rtl" ? -1 : 1;
  },
  L1 = function (n, o, l, i, s) {
    var f = D1(n, window.getComputedStyle(o).direction),
      d = f * i,
      h = l.target,
      v = o.contains(h),
      g = !1,
      y = d > 0,
      E = 0,
      _ = 0;
    do {
      var $ = Pm(n, h),
        N = $[0],
        S = $[1],
        k = $[2],
        L = S - k - f * N;
      ((N || L) && km(n, h) && ((E += L), (_ += N)), (h = h.parentNode));
    } while ((!v && h !== document.body) || (v && (o.contains(h) || o === h)));
    return (((y && E === 0) || (!y && _ === 0)) && (g = !0), g);
  },
  ea = function (n) {
    return "changedTouches" in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  sh = function (n) {
    return [n.deltaX, n.deltaY];
  },
  uh = function (n) {
    return n && "current" in n ? n.current : n;
  },
  $1 = function (n, o) {
    return n[0] === o[0] && n[1] === o[1];
  },
  A1 = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        n,
        ` {pointer-events: all;}
`,
      );
  },
  b1 = 0,
  ko = [];
function F1(n) {
  var o = p.useRef([]),
    l = p.useRef([0, 0]),
    i = p.useRef(),
    s = p.useState(b1++)[0],
    f = p.useState(function () {
      return Rm();
    })[0],
    d = p.useRef(n);
  (p.useEffect(
    function () {
      d.current = n;
    },
    [n],
  ),
    p.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var S = r1([n.lockRef.current], (n.shards || []).map(uh), !0).filter(
            Boolean,
          );
          return (
            S.forEach(function (k) {
              return k.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(s)),
                S.forEach(function (k) {
                  return k.classList.remove("allow-interactivity-".concat(s));
                }));
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards],
    ));
  var h = p.useCallback(function (S, k) {
      if ("touches" in S && S.touches.length === 2)
        return !d.current.allowPinchZoom;
      var L = ea(S),
        B = l.current,
        z = "deltaX" in S ? S.deltaX : B[0] - L[0],
        W = "deltaY" in S ? S.deltaY : B[1] - L[1],
        Y,
        oe = S.target,
        P = Math.abs(z) > Math.abs(W) ? "h" : "v";
      if ("touches" in S && P === "h" && oe.type === "range") return !1;
      var Q = ah(P, oe);
      if (!Q) return !0;
      if ((Q ? (Y = P) : ((Y = P === "v" ? "h" : "v"), (Q = ah(P, oe))), !Q))
        return !1;
      if (
        (!i.current && "changedTouches" in S && (z || W) && (i.current = Y), !Y)
      )
        return !0;
      var le = i.current || Y;
      return L1(le, k, S, le === "h" ? z : W);
    }, []),
    v = p.useCallback(function (S) {
      var k = S;
      if (!(!ko.length || ko[ko.length - 1] !== f)) {
        var L = "deltaY" in k ? sh(k) : ea(k),
          B = o.current.filter(function (Y) {
            return Y.name === k.type && Y.target === k.target && $1(Y.delta, L);
          })[0];
        if (B && B.should) {
          k.cancelable && k.preventDefault();
          return;
        }
        if (!B) {
          var z = (d.current.shards || [])
              .map(uh)
              .filter(Boolean)
              .filter(function (Y) {
                return Y.contains(k.target);
              }),
            W = z.length > 0 ? h(k, z[0]) : !d.current.noIsolation;
          W && k.cancelable && k.preventDefault();
        }
      }
    }, []),
    g = p.useCallback(function (S, k, L, B) {
      var z = { name: S, delta: k, target: L, should: B };
      (o.current.push(z),
        setTimeout(function () {
          o.current = o.current.filter(function (W) {
            return W !== z;
          });
        }, 1));
    }, []),
    y = p.useCallback(function (S) {
      ((l.current = ea(S)), (i.current = void 0));
    }, []),
    E = p.useCallback(function (S) {
      g(S.type, sh(S), S.target, h(S, n.lockRef.current));
    }, []),
    _ = p.useCallback(function (S) {
      g(S.type, ea(S), S.target, h(S, n.lockRef.current));
    }, []);
  p.useEffect(function () {
    return (
      ko.push(f),
      n.setCallbacks({
        onScrollCapture: E,
        onWheelCapture: E,
        onTouchMoveCapture: _,
      }),
      document.addEventListener("wheel", v, xo),
      document.addEventListener("touchmove", v, xo),
      document.addEventListener("touchstart", y, xo),
      function () {
        ((ko = ko.filter(function (S) {
          return S !== f;
        })),
          document.removeEventListener("wheel", v, xo),
          document.removeEventListener("touchmove", v, xo),
          document.removeEventListener("touchstart", y, xo));
      }
    );
  }, []);
  var $ = n.removeScrollBar,
    N = n.inert;
  return p.createElement(
    p.Fragment,
    null,
    N ? p.createElement(f, { styles: A1(s) }) : null,
    $ ? p.createElement(x1, { gapMode: "margin" }) : null,
  );
}
const M1 = d1(Cm, F1);
var Tm = p.forwardRef(function (n, o) {
  return p.createElement(xa, Pn({}, n, { ref: o, sideCar: M1 }));
});
Tm.classNames = xa.classNames;
var I1 = function (n) {
    if (typeof document > "u") return null;
    var o = Array.isArray(n) ? n[0] : n;
    return o.ownerDocument.body;
  },
  Po = new WeakMap(),
  ta = new WeakMap(),
  na = {},
  Fu = 0,
  Nm = function (n) {
    return n && (n.host || Nm(n.parentNode));
  },
  z1 = function (n, o) {
    return o
      .map(function (l) {
        if (n.contains(l)) return l;
        var i = Nm(l);
        return i && n.contains(i)
          ? i
          : (console.error(
              "aria-hidden",
              l,
              "in not contained inside",
              n,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (l) {
        return !!l;
      });
  },
  U1 = function (n, o, l, i) {
    var s = z1(o, Array.isArray(n) ? n : [n]);
    na[l] || (na[l] = new WeakMap());
    var f = na[l],
      d = [],
      h = new Set(),
      v = new Set(s),
      g = function (E) {
        !E || h.has(E) || (h.add(E), g(E.parentNode));
      };
    s.forEach(g);
    var y = function (E) {
      !E ||
        v.has(E) ||
        Array.prototype.forEach.call(E.children, function (_) {
          if (h.has(_)) y(_);
          else
            try {
              var $ = _.getAttribute(i),
                N = $ !== null && $ !== "false",
                S = (Po.get(_) || 0) + 1,
                k = (f.get(_) || 0) + 1;
              (Po.set(_, S),
                f.set(_, k),
                d.push(_),
                S === 1 && N && ta.set(_, !0),
                k === 1 && _.setAttribute(l, "true"),
                N || _.setAttribute(i, "true"));
            } catch (L) {
              console.error("aria-hidden: cannot operate on ", _, L);
            }
        });
    };
    return (
      y(o),
      h.clear(),
      Fu++,
      function () {
        (d.forEach(function (E) {
          var _ = Po.get(E) - 1,
            $ = f.get(E) - 1;
          (Po.set(E, _),
            f.set(E, $),
            _ || (ta.has(E) || E.removeAttribute(i), ta.delete(E)),
            $ || E.removeAttribute(l));
        }),
          Fu--,
          Fu ||
            ((Po = new WeakMap()),
            (Po = new WeakMap()),
            (ta = new WeakMap()),
            (na = {})));
      }
    );
  },
  j1 = function (n, o, l) {
    l === void 0 && (l = "data-aria-hidden");
    var i = Array.from(Array.isArray(n) ? n : [n]),
      s = I1(n);
    return s
      ? (i.push.apply(i, Array.from(s.querySelectorAll("[aria-live]"))),
        U1(i, s, l, "aria-hidden"))
      : function () {
          return null;
        };
  };
const Om = "Dialog",
  [Dm, Lm] = vm(Om),
  [B1, En] = Dm(Om),
  V1 = (n) => {
    const {
        __scopeDialog: o,
        children: l,
        open: i,
        defaultOpen: s,
        onOpenChange: f,
        modal: d = !0,
      } = n,
      h = p.useRef(null),
      v = p.useRef(null),
      [g = !1, y] = $w({ prop: i, defaultProp: s, onChange: f });
    return p.createElement(
      B1,
      {
        scope: o,
        triggerRef: h,
        contentRef: v,
        contentId: Nu(),
        titleId: Nu(),
        descriptionId: Nu(),
        open: g,
        onOpenChange: y,
        onOpenToggle: p.useCallback(() => y((E) => !E), [y]),
        modal: d,
      },
      l,
    );
  },
  H1 = "DialogTrigger",
  W1 = p.forwardRef((n, o) => {
    const { __scopeDialog: l, ...i } = n,
      s = En(H1, l),
      f = Sr(o, s.triggerRef);
    return p.createElement(
      _r.button,
      Ue(
        {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": s.open,
          "aria-controls": s.contentId,
          "data-state": Nc(s.open),
        },
        i,
        { ref: f, onClick: Hn(n.onClick, s.onOpenToggle) },
      ),
    );
  }),
  $m = "DialogPortal",
  [K1, Am] = Dm($m, { forceMount: void 0 }),
  Q1 = (n) => {
    const { __scopeDialog: o, forceMount: l, children: i, container: s } = n,
      f = En($m, o);
    return p.createElement(
      K1,
      { scope: o, forceMount: l },
      p.Children.map(i, (d) =>
        p.createElement(
          Ra,
          { present: l || f.open },
          p.createElement(Zw, { asChild: !0, container: s }, d),
        ),
      ),
    );
  },
  ac = "DialogOverlay",
  q1 = p.forwardRef((n, o) => {
    const l = Am(ac, n.__scopeDialog),
      { forceMount: i = l.forceMount, ...s } = n,
      f = En(ac, n.__scopeDialog);
    return f.modal
      ? p.createElement(
          Ra,
          { present: i || f.open },
          p.createElement(Y1, Ue({}, s, { ref: o })),
        )
      : null;
  }),
  Y1 = p.forwardRef((n, o) => {
    const { __scopeDialog: l, ...i } = n,
      s = En(ac, l);
    return p.createElement(
      Tm,
      { as: Tc, allowPinchZoom: !0, shards: [s.contentRef] },
      p.createElement(
        _r.div,
        Ue({ "data-state": Nc(s.open) }, i, {
          ref: o,
          style: { pointerEvents: "auto", ...i.style },
        }),
      ),
    );
  }),
  $o = "DialogContent",
  G1 = p.forwardRef((n, o) => {
    const l = Am($o, n.__scopeDialog),
      { forceMount: i = l.forceMount, ...s } = n,
      f = En($o, n.__scopeDialog);
    return p.createElement(
      Ra,
      { present: i || f.open },
      f.modal
        ? p.createElement(J1, Ue({}, s, { ref: o }))
        : p.createElement(X1, Ue({}, s, { ref: o })),
    );
  }),
  J1 = p.forwardRef((n, o) => {
    const l = En($o, n.__scopeDialog),
      i = p.useRef(null),
      s = Sr(o, l.contentRef, i);
    return (
      p.useEffect(() => {
        const f = i.current;
        if (f) return j1(f);
      }, []),
      p.createElement(
        bm,
        Ue({}, n, {
          ref: s,
          trapFocus: l.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Hn(n.onCloseAutoFocus, (f) => {
            var d;
            (f.preventDefault(),
              (d = l.triggerRef.current) === null || d === void 0 || d.focus());
          }),
          onPointerDownOutside: Hn(n.onPointerDownOutside, (f) => {
            const d = f.detail.originalEvent,
              h = d.button === 0 && d.ctrlKey === !0;
            (d.button === 2 || h) && f.preventDefault();
          }),
          onFocusOutside: Hn(n.onFocusOutside, (f) => f.preventDefault()),
        }),
      )
    );
  }),
  X1 = p.forwardRef((n, o) => {
    const l = En($o, n.__scopeDialog),
      i = p.useRef(!1),
      s = p.useRef(!1);
    return p.createElement(
      bm,
      Ue({}, n, {
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (f) => {
          var d;
          if (
            ((d = n.onCloseAutoFocus) === null || d === void 0 || d.call(n, f),
            !f.defaultPrevented)
          ) {
            var h;
            (i.current ||
              (h = l.triggerRef.current) === null ||
              h === void 0 ||
              h.focus(),
              f.preventDefault());
          }
          ((i.current = !1), (s.current = !1));
        },
        onInteractOutside: (f) => {
          var d, h;
          ((d = n.onInteractOutside) === null || d === void 0 || d.call(n, f),
            f.defaultPrevented ||
              ((i.current = !0),
              f.detail.originalEvent.type === "pointerdown" &&
                (s.current = !0)));
          const v = f.target;
          (((h = l.triggerRef.current) === null || h === void 0
            ? void 0
            : h.contains(v)) && f.preventDefault(),
            f.detail.originalEvent.type === "focusin" &&
              s.current &&
              f.preventDefault());
        },
      }),
    );
  }),
  bm = p.forwardRef((n, o) => {
    const {
        __scopeDialog: l,
        trapFocus: i,
        onOpenAutoFocus: s,
        onCloseAutoFocus: f,
        ...d
      } = n,
      h = En($o, l),
      v = p.useRef(null),
      g = Sr(o, v);
    return (
      n1(),
      p.createElement(
        p.Fragment,
        null,
        p.createElement(
          Kw,
          {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: s,
            onUnmountAutoFocus: f,
          },
          p.createElement(
            Vw,
            Ue(
              {
                role: "dialog",
                id: h.contentId,
                "aria-describedby": h.descriptionId,
                "aria-labelledby": h.titleId,
                "data-state": Nc(h.open),
              },
              d,
              { ref: g, onDismiss: () => h.onOpenChange(!1) },
            ),
          ),
        ),
        !1,
      )
    );
  }),
  Fm = "DialogTitle",
  Z1 = p.forwardRef((n, o) => {
    const { __scopeDialog: l, ...i } = n,
      s = En(Fm, l);
    return p.createElement(_r.h2, Ue({ id: s.titleId }, i, { ref: o }));
  }),
  eS = "DialogDescription",
  tS = p.forwardRef((n, o) => {
    const { __scopeDialog: l, ...i } = n,
      s = En(eS, l);
    return p.createElement(_r.p, Ue({ id: s.descriptionId }, i, { ref: o }));
  }),
  nS = "DialogClose",
  rS = p.forwardRef((n, o) => {
    const { __scopeDialog: l, ...i } = n,
      s = En(nS, l);
    return p.createElement(
      _r.button,
      Ue({ type: "button" }, i, {
        ref: o,
        onClick: Hn(n.onClick, () => s.onOpenChange(!1)),
      }),
    );
  });
function Nc(n) {
  return n ? "open" : "closed";
}
const oS = "DialogTitleWarning",
  [lS, M_] = Tw(oS, { contentName: $o, titleName: Fm, docsSlug: "dialog" }),
  iS = V1,
  aS = W1,
  sS = Q1,
  uS = q1,
  cS = G1,
  fS = Z1,
  dS = tS,
  Mm = rS,
  pS = "AlertDialog",
  [hS, I_] = vm(pS, [Lm]),
  Wn = Lm(),
  mS = (n) => {
    const { __scopeAlertDialog: o, ...l } = n,
      i = Wn(o);
    return p.createElement(iS, Ue({}, i, l, { modal: !0 }));
  },
  vS = p.forwardRef((n, o) => {
    const { __scopeAlertDialog: l, ...i } = n,
      s = Wn(l);
    return p.createElement(aS, Ue({}, s, i, { ref: o }));
  }),
  yS = (n) => {
    const { __scopeAlertDialog: o, ...l } = n,
      i = Wn(o);
    return p.createElement(sS, Ue({}, i, l));
  },
  gS = p.forwardRef((n, o) => {
    const { __scopeAlertDialog: l, ...i } = n,
      s = Wn(l);
    return p.createElement(uS, Ue({}, s, i, { ref: o }));
  }),
  Im = "AlertDialogContent",
  [ES, wS] = hS(Im),
  SS = p.forwardRef((n, o) => {
    const { __scopeAlertDialog: l, children: i, ...s } = n,
      f = Wn(l),
      d = p.useRef(null),
      h = Sr(o, d),
      v = p.useRef(null);
    return p.createElement(
      lS,
      { contentName: Im, titleName: _S, docsSlug: "alert-dialog" },
      p.createElement(
        ES,
        { scope: l, cancelRef: v },
        p.createElement(
          cS,
          Ue({ role: "alertdialog" }, f, s, {
            ref: h,
            onOpenAutoFocus: Hn(s.onOpenAutoFocus, (g) => {
              var y;
              (g.preventDefault(),
                (y = v.current) === null ||
                  y === void 0 ||
                  y.focus({ preventScroll: !0 }));
            }),
            onPointerDownOutside: (g) => g.preventDefault(),
            onInteractOutside: (g) => g.preventDefault(),
          }),
          p.createElement(gm, null, i),
          !1,
        ),
      ),
    );
  }),
  _S = "AlertDialogTitle",
  CS = p.forwardRef((n, o) => {
    const { __scopeAlertDialog: l, ...i } = n,
      s = Wn(l);
    return p.createElement(fS, Ue({}, s, i, { ref: o }));
  }),
  RS = p.forwardRef((n, o) => {
    const { __scopeAlertDialog: l, ...i } = n,
      s = Wn(l);
    return p.createElement(dS, Ue({}, s, i, { ref: o }));
  }),
  xS = p.forwardRef((n, o) => {
    const { __scopeAlertDialog: l, ...i } = n,
      s = Wn(l);
    return p.createElement(Mm, Ue({}, s, i, { ref: o }));
  }),
  kS = "AlertDialogCancel",
  PS = p.forwardRef((n, o) => {
    const { __scopeAlertDialog: l, ...i } = n,
      { cancelRef: s } = wS(kS, l),
      f = Wn(l),
      d = Sr(o, s);
    return p.createElement(Mm, Ue({}, f, i, { ref: d }));
  }),
  TS = mS,
  NS = vS,
  OS = yS,
  DS = gS,
  LS = SS,
  $S = xS,
  AS = PS,
  bS = CS,
  FS = RS;
function MS() {
  return p.createElement(
    p.Fragment,
    null,
    "This will ",
    p.createElement(
      "b",
      null,
      "delete existing progress on this Peacock profile",
    ),
    ".",
    p.createElement("br", null),
    "Your progress will be replaced with whatever you have completed on the official servers.",
    p.createElement("br", null),
    p.createElement("br", null),
    p.createElement(
      "b",
      null,
      "THIS CANNOT BE UNDONE. Are you SURE you want to continue?",
    ),
    p.createElement("br", null),
    p.createElement("br", null),
    p.createElement(
      "b",
      null,
      "You may want to make a copy of your ",
      p.createElement("code", null, "userdata"),
      " folder first.",
    ),
  );
}
function IS(n) {
  return p.createElement(
    TS,
    null,
    p.createElement(NS, { asChild: !0 }, n.trigger),
    p.createElement(
      OS,
      null,
      p.createElement(DS, { className: "AlertDialogOverlay" }),
      p.createElement(
        LS,
        { className: "AlertDialogContent" },
        p.createElement(
          bS,
          { className: "AlertDialogTitle" },
          p.createElement("b", null, "Danger!"),
          " Are you sure you want to continue?",
        ),
        p.createElement(
          FS,
          { className: "AlertDialogDescription" },
          p.createElement(MS, null),
        ),
        p.createElement(
          "div",
          { style: { display: "flex", gap: 25, justifyContent: "flex-end" } },
          p.createElement(
            AS,
            { asChild: !0 },
            p.createElement(
              "button",
              { className: "button button--primary" },
              "Cancel",
            ),
          ),
          p.createElement(
            $S,
            { asChild: !0 },
            p.createElement(
              "button",
              { className: "button button--danger", onClick: n.doSync },
              "Yes, sync now",
            ),
          ),
        ),
      ),
    ),
  );
}
function zS() {
  return p.createElement(
    "div",
    { className: "alert alert--primary", role: "alert" },
    "Performing the transfer, this may take a bit...",
  );
}
function US() {
  return p.createElement(
    "div",
    { className: "alert alert--success", role: "alert" },
    "Transfer completed successfully!",
  );
}
function jS({ error: n }) {
  return p.createElement(
    "div",
    { className: "alert alert--danger", role: "alert" },
    "Failed to perform transfer. ",
    n,
  );
}
function BS({ user: n, gv: o }) {
  const [l, i] = p.useState(!1),
    [s, f] = p.useState(null),
    [d, h] = p.useState(null),
    v = p.useCallback(async () => {
      try {
        const g = await Lo.post(
          "/_wf/sync-progress",
          {},
          { params: { gv: o, user: n.id } },
        );
        g.data.success
          ? (i(!1), h(!0), f(null))
          : (i(!1), h(!1), f(g.data.error));
      } catch (g) {
        (console.error(g),
          i(!1),
          f("Failed to perform internal request to begin transfer."),
          h(!1));
      }
    }, [o, n.id]);
  return p.createElement(
    "div",
    { className: "margin-top" },
    p.createElement(
      "p",
      null,
      "Selected profile: ",
      n.name,
      " (",
      n.platform,
      ")",
    ),
    p.createElement(
      "p",
      null,
      "Last official server sync: ",
      n.lastOfficialSync || "never",
    ),
    l ? p.createElement(zS, null) : null,
    d === !0 ? p.createElement(US, null) : null,
    d === !1 && s ? p.createElement(jS, { error: s }) : null,
    p.createElement(IS, {
      trigger: p.createElement(
        "button",
        { className: "button button--success" },
        "Sync Now",
      ),
      doSync: v,
    }),
  );
}
function VS() {
  const [n, o] = p.useState(void 0),
    [l, i] = p.useState(0),
    { data: s, error: f } = Ll(`${Do}/_wf/local-users?gv=h${l}`, Al);
  f && console.error(f);
  const d = !!(
    l !== 0 &&
    n === void 0 &&
    s &&
    (s == null ? void 0 : s.error) !== "bad gv"
  );
  function h() {
    return l === 0
      ? "Select your game version."
      : d
        ? "Select target user profile."
        : "";
  }
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(
      "header",
      null,
      p.createElement(Ol, {
        title: "Official Server Transfer Tool",
        subtext: h(),
      }),
    ),
    p.createElement(
      "main",
      { className: "container" },
      l === 0 && p.createElement(Pc, { gameVersion: l, setGameVersion: i }),
      d && p.createElement(mm, { users: s, setUser: o }),
      l !== 0 &&
        !d &&
        n &&
        s &&
        p.createElement(BS, { gv: `h${l}`, user: s.find((v) => v.id === n) }),
    ),
  );
}
function zm(n) {
  return n
    .split(" ")
    .map((o) =>
      o ? `${o[0].toUpperCase()}${o.substring(1).toLowerCase()}` : "",
    )
    .join(" ");
}
function HS(n) {
  let o = n.replace("LOCATION_", "");
  if (o.includes("GOLDEN")) return "Dubai";
  if (o.includes("SMOOTHSNAKE")) return "Dartmoor Garden Show";
  if (o.includes("ANCESTRAL")) return "Dartmoor";
  if (o.includes("EDGY")) return "Berlin";
  if (o.includes("WET")) return "Chongqing";
  if (o.includes("ELEGANT")) return "Mendoza";
  if (o.includes("TRAPPED")) return "Carpathian Mountains";
  if (o.includes("ROCKY")) return "Ambrose Island";
  if (o.includes("GREEDY")) return "New York";
  if (o.includes("OPULENT")) return "Haven";
  if (o.includes("_")) {
    const l = o.split("_"),
      i = {
        MOVIESET: "The Icon",
        NIGHT: "Landslide",
        ZIKA: "The Source",
        EBOLA: "The Author",
        FLU: "Patient Zero",
      }[l[1]];
    o = `${zm(l[0])} (${i})`;
  }
  return o;
}
function WS(n) {
  switch (n) {
    case "2":
      return "Gun";
    case "3":
      return "Suit";
    case "4":
    case "5":
      return "Gear";
    default:
      return "Briefcase";
  }
}
function KS(n) {
  let o = n;
  do o = o.replace("_", " ");
  while (o.includes("_"));
  return o;
}
function QS({ loadout: n }) {
  const o = Object.keys(n);
  return o.length === 0
    ? p.createElement(
        "div",
        null,
        p.createElement("h4", null, "This profile has no default loadouts."),
      )
    : p.createElement(
        "div",
        null,
        o.map((l) => {
          const i = n[l];
          return p.createElement(
            "div",
            { key: l },
            p.createElement("h4", null, HS(l)),
            p.createElement(
              "ul",
              null,
              Object.keys(i).map((s) =>
                p.createElement(
                  "li",
                  { key: s },
                  WS(s),
                  " -",
                  " ",
                  zm(KS(i[s]))
                    .replace("Token ", "")
                    .replace("Prop ", "")
                    .replace("Firearms ", "")
                    .replace("Device ", "")
                    .replace("Outfit ", "")
                    .replace("Hero ", "")
                    .replace("Container ", ""),
                ),
              ),
            ),
          );
        }),
      );
}
function qS(n) {
  const { data: o, error: l } = Ll(`${Do}/loadouts/all-loadouts`, Al),
    [i, s] = p.useState(""),
    [f, d] = p.useState(!1),
    h = p.useMemo(() => {
      switch (n.gameVersion) {
        case 1:
          return "h1";
        case 2:
          return "h2";
        default:
          return "h3";
      }
    }, [n.gameVersion]);
  p.useEffect(() => {
    const S = o[`h${n.gameVersion}`].loadouts.find((k) => k.id === n.loadoutId);
    (s((S == null ? void 0 : S.name) ?? "unknown"),
      d(o[`h${n.gameVersion}`].selected === (S == null ? void 0 : S.id)));
  }, [o, n.gameVersion, n.loadoutName, n.loadoutId]);
  const v = n.loadoutId;
  if ((l && console.error(l), !o))
    return p.createElement("p", null, "Loading...");
  const g = o[`h${n.gameVersion}`].loadouts,
    y = g.find((N) => N.id === v);
  if (!y)
    return p.createElement(
      "p",
      null,
      "An error occurred. Please try again later.",
    );
  const E = g.indexOf(y);
  function _() {
    const N = { ...o };
    return (
      (N[h].loadouts[E].name = i),
      (N[h].selected = v),
      Lo.patch("/loadouts/update", N),
      !0
    );
  }
  async function $() {
    return (
      await Lo.patch("/loadouts/remove", { gameVersion: h, id: y.id }),
      n.backFunction(!0)
    );
  }
  return p.createElement(
    "div",
    null,
    p.createElement(
      "button",
      {
        className: "button button--secondary margin-top",
        onClick: () => n.backFunction(!1),
      },
      "« Back",
    ),
    p.createElement(
      "section",
      { className: "app-grid" },
      p.createElement(
        "button",
        {
          className: `button button--block button--success${f ? " disabled" : ""}`,
          onClick: () => {
            (d(!0), _());
          },
        },
        f ? "Already Equipped!" : "Equip Loadout Profile",
      ),
      p.createElement(
        "div",
        { className: "special-card margin-top" },
        p.createElement(
          "div",
          { className: "card" },
          p.createElement(
            "div",
            { className: "card__header" },
            p.createElement("h3", null, "Profile Name"),
          ),
          p.createElement(
            "div",
            { className: "card__body" },
            p.createElement("input", {
              style: { width: "100%" },
              className: "input",
              value: i,
              onChange: (N) => s(N.target.value),
              placeholder: i,
            }),
          ),
          p.createElement(
            "div",
            { className: "card__footer" },
            p.createElement(
              "button",
              {
                className: "button button--success button--block",
                onClick: () => _() && n.backFunction(),
              },
              "Rename",
            ),
          ),
        ),
      ),
      p.createElement(
        "div",
        { className: "special-card margin-top" },
        p.createElement(
          "div",
          { className: "card" },
          p.createElement(
            "div",
            { className: "card__header" },
            p.createElement("h3", null, "Delete Profile"),
          ),
          p.createElement(
            "div",
            { className: "card__body" },
            p.createElement("p", null, "Warning: this cannot be undone!"),
          ),
          p.createElement(
            "div",
            { className: "card__footer" },
            p.createElement(
              "button",
              { className: "button button--danger button--block", onClick: $ },
              "Delete",
            ),
          ),
        ),
      ),
      p.createElement(
        "div",
        { className: "special-card margin-top" },
        p.createElement(
          "div",
          { className: "card" },
          p.createElement(
            "div",
            { className: "card__header" },
            p.createElement("h3", null, "Preview"),
          ),
          p.createElement(
            "div",
            { className: "card__body" },
            p.createElement(QS, { loadout: y.data }),
          ),
        ),
      ),
    ),
  );
}
function YS({ gameVersion: n, setActiveEditing: o, setActiveEditingId: l }) {
  const [i, s] = p.useState(!1),
    { data: f, error: d, mutate: h } = Ll(`${Do}/loadouts/all-loadouts`, Al);
  if ((d && console.error(d), !f))
    return p.createElement("p", null, "Loading...");
  const g = f[`h${n}`].loadouts;
  return p.createElement(
    "section",
    { className: "margin-top" },
    p.createElement(
      "nav",
      { className: "pagination-nav" },
      g.map((y) => {
        const E = f[`h${n}`].selected === y.id;
        return p.createElement(
          "div",
          { className: "pagination-nav__item", key: y.id },
          p.createElement(
            "button",
            {
              className: "pagination-nav__link",
              onClick: () => {
                (o(y.name), l(y.id));
              },
            },
            p.createElement(
              "div",
              { className: "pagination-nav__sublabel centered" },
              "Click to view details and actions",
            ),
            p.createElement(
              "div",
              { className: "pagination-nav__label centered" },
              `${y.name} `,
              E &&
                p.createElement(
                  "span",
                  { className: "badge badge--success" },
                  "Selected!",
                ),
            ),
          ),
        );
      }),
      p.createElement(
        "div",
        { className: "pagination-nav__item", key: "__loadouts.CREATENEW" },
        p.createElement(
          "button",
          {
            className: "pagination-nav__link",
            disabled: i,
            onClick: async () => {
              (s(!0),
                await Lo.post("/loadouts/create", { gameVersion: `h${n}` }),
                await h(),
                s(!1));
            },
          },
          p.createElement(
            "div",
            { className: "pagination-nav__sublabel centered" },
            "Create new loadout profile",
          ),
          p.createElement(
            "div",
            { className: "pagination-nav__label centered" },
            i ? "Processing..." : "+",
          ),
        ),
      ),
    ),
  );
}
function GS() {
  const [n, o] = p.useState(0),
    [l, i] = p.useState(void 0),
    [s, f] = p.useState(void 0),
    [, d] = p.useState(0);
  return l !== void 0 && s !== void 0
    ? p.createElement(
        p.Fragment,
        null,
        p.createElement(
          "header",
          null,
          p.createElement(Ol, {
            title: `Editing ${l}`,
            subtext: "You may select the changes you would like to make below.",
          }),
        ),
        p.createElement(
          "main",
          { className: "container" },
          p.createElement(qS, {
            gameVersion: n,
            loadoutName: l,
            loadoutId: s,
            backFunction: (h = !1) => {
              (i(void 0), h && d(Math.random() * Math.random()));
            },
          }),
        ),
      )
    : p.createElement(
        p.Fragment,
        null,
        p.createElement(
          "header",
          null,
          p.createElement(Ol, { title: "Loadout Profiles" }),
        ),
        p.createElement(
          "main",
          { className: "container" },
          p.createElement(Pc, { gameVersion: n, setGameVersion: o }),
          n === 0
            ? p.createElement(
                "p",
                { className: "subTitle centered" },
                "Select a game version to get started!",
              )
            : p.createElement(YS, {
                gameVersion: n,
                setActiveEditing: i,
                setActiveEditingId: f,
              }),
        ),
      );
}
function JS() {
  return p.createElement(
    "nav",
    { className: "navbar" },
    p.createElement(
      "div",
      { className: "navbar__inner" },
      p.createElement(
        "div",
        { className: "navbar__items" },
        p.createElement(qi, { className: "navbar__brand", to: "/" }, "Peacock"),
        p.createElement(
          qi,
          { className: "navbar__item navbar__link", to: "/ui/loadouts" },
          "Loadout Profiles",
        ),
        p.createElement(
          qi,
          { className: "navbar__item navbar__link", to: "/ui/escalations" },
          "Escalation Level Picker",
        ),
        p.createElement(
          qi,
          { className: "navbar__item navbar__link", to: "/ui/transfer" },
          "Progress Transfer",
        ),
        null,
      ),
    ),
  );
}
function XS() {
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("header", null, p.createElement(JS, null)),
    p.createElement(Jg, null),
  );
}
function ZS() {
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(
      "header",
      null,
      p.createElement(Ol, { title: "Peacock", subtext: "Server running." }),
    ),
  );
}
var Um = Symbol.for("immer-nothing"),
  ch = Symbol.for("immer-draftable"),
  qt = Symbol.for("immer-state");
function yn(n, ...o) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Ao = Object.getPrototypeOf;
function bo(n) {
  return !!n && !!n[qt];
}
function Yr(n) {
  var o;
  return n
    ? jm(n) ||
        Array.isArray(n) ||
        !!n[ch] ||
        !!((o = n.constructor) != null && o[ch]) ||
        Pa(n) ||
        Ta(n)
    : !1;
}
var e_ = Object.prototype.constructor.toString();
function jm(n) {
  if (!n || typeof n != "object") return !1;
  const o = Ao(n);
  if (o === null) return !0;
  const l = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
  return l === Object
    ? !0
    : typeof l == "function" && Function.toString.call(l) === e_;
}
function fa(n, o) {
  ka(n) === 0
    ? Reflect.ownKeys(n).forEach((l) => {
        o(l, n[l], n);
      })
    : n.forEach((l, i) => o(i, l, n));
}
function ka(n) {
  const o = n[qt];
  return o ? o.type_ : Array.isArray(n) ? 1 : Pa(n) ? 2 : Ta(n) ? 3 : 0;
}
function sc(n, o) {
  return ka(n) === 2 ? n.has(o) : Object.prototype.hasOwnProperty.call(n, o);
}
function Bm(n, o, l) {
  const i = ka(n);
  i === 2 ? n.set(o, l) : i === 3 ? n.add(l) : (n[o] = l);
}
function t_(n, o) {
  return n === o ? n !== 0 || 1 / n === 1 / o : n !== n && o !== o;
}
function Pa(n) {
  return n instanceof Map;
}
function Ta(n) {
  return n instanceof Set;
}
function jr(n) {
  return n.copy_ || n.base_;
}
function uc(n, o) {
  if (Pa(n)) return new Map(n);
  if (Ta(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const l = jm(n);
  if (o === !0 || (o === "class_only" && !l)) {
    const i = Object.getOwnPropertyDescriptors(n);
    delete i[qt];
    let s = Reflect.ownKeys(i);
    for (let f = 0; f < s.length; f++) {
      const d = s[f],
        h = i[d];
      (h.writable === !1 && ((h.writable = !0), (h.configurable = !0)),
        (h.get || h.set) &&
          (i[d] = {
            configurable: !0,
            writable: !0,
            enumerable: h.enumerable,
            value: n[d],
          }));
    }
    return Object.create(Ao(n), i);
  } else {
    const i = Ao(n);
    if (i !== null && l) return { ...n };
    const s = Object.create(i);
    return Object.assign(s, n);
  }
}
function Oc(n, o = !1) {
  return (
    Na(n) ||
      bo(n) ||
      !Yr(n) ||
      (ka(n) > 1 && (n.set = n.add = n.clear = n.delete = n_),
      Object.freeze(n),
      o && Object.entries(n).forEach(([l, i]) => Oc(i, !0))),
    n
  );
}
function n_() {
  yn(2);
}
function Na(n) {
  return Object.isFrozen(n);
}
var r_ = {};
function Gr(n) {
  const o = r_[n];
  return (o || yn(0, n), o);
}
var bl;
function Vm() {
  return bl;
}
function o_(n, o) {
  return {
    drafts_: [],
    parent_: n,
    immer_: o,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function fh(n, o) {
  o &&
    (Gr("Patches"),
    (n.patches_ = []),
    (n.inversePatches_ = []),
    (n.patchListener_ = o));
}
function cc(n) {
  (fc(n), n.drafts_.forEach(l_), (n.drafts_ = null));
}
function fc(n) {
  n === bl && (bl = n.parent_);
}
function dh(n) {
  return (bl = o_(bl, n));
}
function l_(n) {
  const o = n[qt];
  o.type_ === 0 || o.type_ === 1 ? o.revoke_() : (o.revoked_ = !0);
}
function ph(n, o) {
  o.unfinalizedDrafts_ = o.drafts_.length;
  const l = o.drafts_[0];
  return (
    n !== void 0 && n !== l
      ? (l[qt].modified_ && (cc(o), yn(4)),
        Yr(n) && ((n = da(o, n)), o.parent_ || pa(o, n)),
        o.patches_ &&
          Gr("Patches").generateReplacementPatches_(
            l[qt].base_,
            n,
            o.patches_,
            o.inversePatches_,
          ))
      : (n = da(o, l, [])),
    cc(o),
    o.patches_ && o.patchListener_(o.patches_, o.inversePatches_),
    n !== Um ? n : void 0
  );
}
function da(n, o, l) {
  if (Na(o)) return o;
  const i = o[qt];
  if (!i) return (fa(o, (s, f) => hh(n, i, o, s, f, l)), o);
  if (i.scope_ !== n) return o;
  if (!i.modified_) return (pa(n, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    const s = i.copy_;
    let f = s,
      d = !1;
    (i.type_ === 3 && ((f = new Set(s)), s.clear(), (d = !0)),
      fa(f, (h, v) => hh(n, i, s, h, v, l, d)),
      pa(n, s, !1),
      l &&
        n.patches_ &&
        Gr("Patches").generatePatches_(i, l, n.patches_, n.inversePatches_));
  }
  return i.copy_;
}
function hh(n, o, l, i, s, f, d) {
  if (bo(s)) {
    const h =
        f && o && o.type_ !== 3 && !sc(o.assigned_, i) ? f.concat(i) : void 0,
      v = da(n, s, h);
    if ((Bm(l, i, v), bo(v))) n.canAutoFreeze_ = !1;
    else return;
  } else d && l.add(s);
  if (Yr(s) && !Na(s)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    (da(n, s),
      (!o || !o.scope_.parent_) &&
        typeof i != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(l, i) &&
        pa(n, s));
  }
}
function pa(n, o, l = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Oc(o, l);
}
function i_(n, o) {
  const l = Array.isArray(n),
    i = {
      type_: l ? 1 : 0,
      scope_: o ? o.scope_ : Vm(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: o,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let s = i,
    f = Dc;
  l && ((s = [i]), (f = Fl));
  const { revoke: d, proxy: h } = Proxy.revocable(s, f);
  return ((i.draft_ = h), (i.revoke_ = d), h);
}
var Dc = {
    get(n, o) {
      if (o === qt) return n;
      const l = jr(n);
      if (!sc(l, o)) return a_(n, l, o);
      const i = l[o];
      return n.finalized_ || !Yr(i)
        ? i
        : i === Mu(n.base_, o)
          ? (Iu(n), (n.copy_[o] = pc(i, n)))
          : i;
    },
    has(n, o) {
      return o in jr(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(jr(n));
    },
    set(n, o, l) {
      const i = Hm(jr(n), o);
      if (i != null && i.set) return (i.set.call(n.draft_, l), !0);
      if (!n.modified_) {
        const s = Mu(jr(n), o),
          f = s == null ? void 0 : s[qt];
        if (f && f.base_ === l)
          return ((n.copy_[o] = l), (n.assigned_[o] = !1), !0);
        if (t_(l, s) && (l !== void 0 || sc(n.base_, o))) return !0;
        (Iu(n), dc(n));
      }
      return (
        (n.copy_[o] === l && (l !== void 0 || o in n.copy_)) ||
          (Number.isNaN(l) && Number.isNaN(n.copy_[o])) ||
          ((n.copy_[o] = l), (n.assigned_[o] = !0)),
        !0
      );
    },
    deleteProperty(n, o) {
      return (
        Mu(n.base_, o) !== void 0 || o in n.base_
          ? ((n.assigned_[o] = !1), Iu(n), dc(n))
          : delete n.assigned_[o],
        n.copy_ && delete n.copy_[o],
        !0
      );
    },
    getOwnPropertyDescriptor(n, o) {
      const l = jr(n),
        i = Reflect.getOwnPropertyDescriptor(l, o);
      return (
        i && {
          writable: !0,
          configurable: n.type_ !== 1 || o !== "length",
          enumerable: i.enumerable,
          value: l[o],
        }
      );
    },
    defineProperty() {
      yn(11);
    },
    getPrototypeOf(n) {
      return Ao(n.base_);
    },
    setPrototypeOf() {
      yn(12);
    },
  },
  Fl = {};
fa(Dc, (n, o) => {
  Fl[n] = function () {
    return ((arguments[0] = arguments[0][0]), o.apply(this, arguments));
  };
});
Fl.deleteProperty = function (n, o) {
  return Fl.set.call(this, n, o, void 0);
};
Fl.set = function (n, o, l) {
  return Dc.set.call(this, n[0], o, l, n[0]);
};
function Mu(n, o) {
  const l = n[qt];
  return (l ? jr(l) : n)[o];
}
function a_(n, o, l) {
  var s;
  const i = Hm(o, l);
  return i
    ? "value" in i
      ? i.value
      : (s = i.get) == null
        ? void 0
        : s.call(n.draft_)
    : void 0;
}
function Hm(n, o) {
  if (!(o in n)) return;
  let l = Ao(n);
  for (; l;) {
    const i = Object.getOwnPropertyDescriptor(l, o);
    if (i) return i;
    l = Ao(l);
  }
}
function dc(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && dc(n.parent_));
}
function Iu(n) {
  n.copy_ || (n.copy_ = uc(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var s_ = class {
  constructor(n) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (o, l, i) => {
        if (typeof o == "function" && typeof l != "function") {
          const f = l;
          l = o;
          const d = this;
          return function (v = f, ...g) {
            return d.produce(v, (y) => l.call(this, y, ...g));
          };
        }
        (typeof l != "function" && yn(6),
          i !== void 0 && typeof i != "function" && yn(7));
        let s;
        if (Yr(o)) {
          const f = dh(this),
            d = pc(o, void 0);
          let h = !0;
          try {
            ((s = l(d)), (h = !1));
          } finally {
            h ? cc(f) : fc(f);
          }
          return (fh(f, i), ph(s, f));
        } else if (!o || typeof o != "object") {
          if (
            ((s = l(o)),
            s === void 0 && (s = o),
            s === Um && (s = void 0),
            this.autoFreeze_ && Oc(s, !0),
            i)
          ) {
            const f = [],
              d = [];
            (Gr("Patches").generateReplacementPatches_(o, s, f, d), i(f, d));
          }
          return s;
        } else yn(1, o);
      }),
      (this.produceWithPatches = (o, l) => {
        if (typeof o == "function")
          return (d, ...h) => this.produceWithPatches(d, (v) => o(v, ...h));
        let i, s;
        return [
          this.produce(o, l, (d, h) => {
            ((i = d), (s = h));
          }),
          i,
          s,
        ];
      }),
      typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
        this.setAutoFreeze(n.autoFreeze),
      typeof (n == null ? void 0 : n.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy));
  }
  createDraft(n) {
    (Yr(n) || yn(8), bo(n) && (n = u_(n)));
    const o = dh(this),
      l = pc(n, void 0);
    return ((l[qt].isManual_ = !0), fc(o), l);
  }
  finishDraft(n, o) {
    const l = n && n[qt];
    (!l || !l.isManual_) && yn(9);
    const { scope_: i } = l;
    return (fh(i, o), ph(void 0, i));
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, o) {
    let l;
    for (l = o.length - 1; l >= 0; l--) {
      const s = o[l];
      if (s.path.length === 0 && s.op === "replace") {
        n = s.value;
        break;
      }
    }
    l > -1 && (o = o.slice(l + 1));
    const i = Gr("Patches").applyPatches_;
    return bo(n) ? i(n, o) : this.produce(n, (s) => i(s, o));
  }
};
function pc(n, o) {
  const l = Pa(n)
    ? Gr("MapSet").proxyMap_(n, o)
    : Ta(n)
      ? Gr("MapSet").proxySet_(n, o)
      : i_(n, o);
  return ((o ? o.scope_ : Vm()).drafts_.push(l), l);
}
function u_(n) {
  return (bo(n) || yn(10, n), Wm(n));
}
function Wm(n) {
  if (!Yr(n) || Na(n)) return n;
  const o = n[qt];
  let l;
  if (o) {
    if (!o.modified_) return o.base_;
    ((o.finalized_ = !0), (l = uc(n, o.scope_.immer_.useStrictShallowCopy_)));
  } else l = uc(n, !0);
  return (
    fa(l, (i, s) => {
      Bm(l, i, Wm(s));
    }),
    o && (o.finalized_ = !1),
    l
  );
}
var Yt = new s_(),
  c_ = Yt.produce;
Yt.produceWithPatches.bind(Yt);
Yt.setAutoFreeze.bind(Yt);
Yt.setUseStrictShallowCopy.bind(Yt);
Yt.applyPatches.bind(Yt);
Yt.createDraft.bind(Yt);
Yt.finishDraft.bind(Yt);
const f_ = { __isEmpty: 1 },
  d_ = [
    [
      "ICA Facility",
      "Paris",
      "Sapienza",
      "Marrakesh",
      "Bangkok",
      "Colorado",
      "Hokkaido",
    ],
    [
      "Hawkes Bay",
      "Miami",
      "Santa Fortuna",
      "Mumbai",
      "Whittleton Creek",
      "Isle of Sgàil",
      "New York",
      "Haven Island",
    ],
    [
      "Dubai",
      "Dartmoor",
      "Berlin",
      "Chongqing",
      "Mendoza",
      "Carpathian Mountains",
      "Ambrose Island",
      "Elusive Target Arcade",
    ],
  ];
function p_({ codenames: n, user: o, gv: l }) {
  const [i, s] = p.useState(null),
    [f, d] = p.useState(f_),
    [h, v] = p.useState({}),
    g = p.useMemo(() => ({ ...f, ...h }), [h, f]);
  p.useEffect(() => {
    Lo.get("/_wf/user-progress", { params: { user: o, gv: `h${l}` } })
      .then((L) => d(L.data))
      .catch(console.error);
  }, [l, o]);
  const y = p.useRef(h);
  p.useEffect(() => {
    y.current = h;
  }, [h]);
  const E = p.useRef(o),
    _ = p.useRef(l);
  p.useEffect(() => {
    ((E.current = o), (_.current = l));
  }, [o, l]);
  const $ = p.useRef(() => {});
  if (
    (p.useEffect(() => {
      $.current = Pw(() => {
        Lo.get("/_wf/modify", {
          params: {
            user: E.current,
            gv: `h${_.current}`,
            escalations: JSON.stringify(y.current),
          },
        })
          .then((L) => {
            let B;
            return (
              L.data.success
                ? ((B = "Changes made."),
                  d((z) => ({ ...z, ...y.current })),
                  s("Changes saved!"))
                : ((B = "Error: " + L.data.error),
                  alert(B),
                  v({}),
                  s("Saving changes failed.")),
              console.debug(B)
            );
          })
          .catch(console.error);
      }, 3e3);
    }, []),
    f.__isEmpty === 1)
  )
    return p.createElement("p", null, "Loading user details...");
  function N(L, B) {
    s("Saving...");
    let z = h;
    ((z = c_(z, (W) => {
      (z[L] || (W[L] = 1), (W[L] = B));
    })),
      v(z),
      $.current());
  }
  const S = {},
    k = d_.slice(0, l).flat();
  for (const L in n) {
    if (!k.includes(L)) continue;
    const B = [[]];
    let z = 0;
    for (const W of n[L]) {
      if (!W.id || W.hidden || (l === 1 && W.isPeacock)) continue;
      const Y = p.createElement(
        "div",
        { className: "col col--4", key: W.codename },
        p.createElement(
          "div",
          { className: "card", style: { padding: "5px" } },
          p.createElement(
            "div",
            { className: "card__header centered" },
            p.createElement("h3", null, W.name),
          ),
          p.createElement(
            "div",
            { className: "card__body" },
            p.createElement(
              "ul",
              { className: "tabs" },
              p.createElement(
                "li",
                { className: "tabs__item elp-tab" },
                p.createElement(
                  "button",
                  {
                    className: "button button--sm button--danger",
                    disabled: !g[W.id] || g[W.id] === 1,
                    onClick: () => N(W.id, g[W.id] - 1),
                  },
                  "-",
                ),
              ),
              p.createElement(
                "li",
                { className: "tabs__item elp-tab" },
                p.createElement(
                  "p",
                  { className: "elp-tab" },
                  `Current level:  ${g[W.id] ?? 1}/${W.levels}`,
                ),
              ),
              p.createElement(
                "li",
                { className: "tabs__item elp-tab" },
                p.createElement(
                  "button",
                  {
                    className: "button button--sm button--success",
                    disabled: g[W.id] >= (W.levels ?? 5),
                    onClick: () => N(W.id, (g[W.id] ?? 1) + 1),
                  },
                  "+",
                ),
              ),
            ),
          ),
        ),
      );
      (B[z].length === 3 && ((z = z + 1), B.push([])), B[z].push(Y));
    }
    B[0].length && (S[L] = B);
  }
  return p.createElement(
    "section",
    { className: "app-grid" },
    i !== null &&
      p.createElement(
        "div",
        { className: "save-indicator alert alert--primary", role: "alert" },
        p.createElement(
          "button",
          {
            "aria-label": "Close",
            className: "clean-btn close",
            type: "button",
            onClick: () => s(null),
          },
          p.createElement("span", { "aria-hidden": "true" }, "×"),
        ),
        p.createElement("span", null, i),
      ),
    Object.keys(S).map((L) =>
      p.createElement(
        "div",
        { className: "container", style: { padding: "15px" }, key: L },
        p.createElement("h1", null, L),
        S[L].map((B, z) =>
          p.createElement("div", { className: "row", key: z }, B),
        ),
      ),
    ),
  );
}
function h_() {
  const [n, o] = p.useState(void 0),
    [l, i] = p.useState(0),
    { data: s, error: f } = Ll(`${Do}/_wf/codenames`, Al),
    { data: d, error: h } = Ll(`${Do}/_wf/local-users?gv=h${l}`, Al);
  (f && console.error(f), h && console.error(h));
  const v = !!(
    n === void 0 &&
    d &&
    (d == null ? void 0 : d.error) !== "bad gv"
  );
  function g() {
    return s
      ? s && l === 0
        ? "Select your game version."
        : v
          ? "Select the user to modify the progress for."
          : "Choose a level for each escalation."
      : "Loading escalation data...";
  }
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(
      "header",
      null,
      p.createElement(Ol, { title: "Escalation Level Picker", subtext: g() }),
    ),
    p.createElement(
      "main",
      { className: "container" },
      !!s &&
        l === 0 &&
        p.createElement(Pc, { gameVersion: l, setGameVersion: i }),
      v && p.createElement(mm, { users: d, setUser: o }),
      !!s &&
        l !== 0 &&
        !v &&
        n &&
        p.createElement(p_, { codenames: s, gv: l, user: n }),
    ),
  );
}
const m_ = l0([
  {
    path: "/",
    element: p.createElement(XS, null),
    children: [
      { path: "", element: p.createElement(ZS, null) },
      null,
      { path: "ui/transfer", element: p.createElement(VS, null) },
      { path: "ui/loadouts", element: p.createElement(GS, null) },
      { path: "ui/escalations", element: p.createElement(h_, null) },
      {
        path: "*",
        element: p.createElement(
          "h1",
          { style: { marginTop: "4rem", textAlign: "center" } },
          "Not Found",
        ),
      },
    ].filter(Boolean),
  },
]);
function v_() {
  return p.createElement(h0, { router: m_ });
}
const y_ = document.getElementById("root"),
  g_ = My.createRoot(y_);
g_.render(p.createElement(p.StrictMode, null, p.createElement(v_, null)));

