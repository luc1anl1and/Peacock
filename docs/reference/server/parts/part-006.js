// Reading excerpt from index.js, starting at line 57087.
// Shares bundle scope; use the complete bundle for execution.
xC[16] = "date";
var YC,
  jC,
  VC = [!1, !0, !0, !1, !1, !0, !0, !1];
try {
  (new Function(""), (YC = !0));
} catch (Oo) {}
var qC,
  WC,
  XC = "undefined" != typeof Buffer;
try {
  qC = new TextEncoder();
} catch (Oo) {}
var zC = XC
  ? function (e, t, a) {
      return e.utf8Write(t, a, e.byteLength - a);
    }
  : !(!qC || !qC.encodeInto) &&
    function (e, t, a) {
      return qC.encodeInto(t, e.subarray(a)).written;
    };
(Symbol("type"), Symbol("parent"));
function JC(e, t, a, i) {
  let r;
  return (r = e.ascii8 || e.num8)
    ? (a.setInt8(t, i, !0), (jC = t + 1), r)
    : (r = e.string16 || e.object16)
      ? (a.setInt16(t, i, !0), (jC = t + 2), r)
      : (r = e.num32)
        ? (a.setUint32(t, 3758096640 + i, !0), (jC = t + 4), r)
        : (r = e.num64)
          ? (a.setFloat64(t, NaN, !0), a.setInt8(t, i), (jC = t + 8), r)
          : void (jC = t);
}
function ZC(e, t, a) {
  let i = xC[t] + (a << 3),
    r = e[i] || (e[i] = Object.create(null));
  return ((r.__type = t), (r.__size = a), (r.__parent = e), r);
}
!(function (e, t) {
  ((bC = e), (UC = t));
})(
  function e(t, a, i, r, s, o, n, c) {
    let l = c.typedStructs || (c.typedStructs = []),
      d = a.dataView,
      u = (l.lastStringStart || 100) + r,
      p = a.length - 10,
      $ = r;
    r > p &&
      ((d = (a = o(r)).dataView),
      (r -= i),
      ($ -= i),
      (u -= i),
      (i = 0),
      (p = a.length - 10));
    let _,
      I = u,
      A = l.transitions || (l.transitions = Object.create(null)),
      f = l.nextId || l.length,
      m = f < 15 ? 1 : f < 240 ? 2 : f < 61440 ? 3 : f < 15728640 ? 4 : 0;
    if (0 === m) return 0;
    r += m;
    let g,
      C = [],
      b = 0;
    for (let e in t) {
      let s = t[e],
        c = A[e];
      switch (
        (c ||
          (A[e] = c =
            {
              key: e,
              parent: A,
              enumerationOffset: 0,
              ascii0: null,
              ascii8: null,
              num8: null,
              string16: null,
              object16: null,
              num32: null,
              float64: null,
              date64: null,
            }),
        r > p &&
          ((d = (a = o(r)).dataView),
          (r -= i),
          ($ -= i),
          (u -= i),
          (I -= i),
          (i = 0),
          (p = a.length - 10)),
        typeof s)
      ) {
        case "number":
          let t = s;
          if (f < 200 || !c.num64) {
            if ((t | 0) === t && t < 536870912 && t > -520093696) {
              t < 246 &&
              t >= 0 &&
              ((c.num8 && !(f > 200 && c.num32)) || (t < 32 && !c.num32))
                ? ((A = c.num8 || ZC(c, 0, 1)), (a[r++] = t))
                : ((A = c.num32 || ZC(c, 0, 4)),
                  d.setUint32(r, t, !0),
                  (r += 4));
              break;
            }
            if (
              t < 4294967296 &&
              t >= -2147483648 &&
              (d.setFloat32(r, t, !0), VC[a[r + 3] >>> 5])
            ) {
              let e;
              if (
                ((e = t * dC[((127 & a[r + 3]) << 1) | (a[r + 2] >> 7)]) |
                  0) ===
                e
              ) {
                ((A = c.num32 || ZC(c, 0, 4)), (r += 4));
                break;
              }
            }
          }
          ((A = c.num64 || ZC(c, 0, 8)), d.setFloat64(r, t, !0), (r += 8));
          break;
        case "string":
          let m,
            E = s.length;
          if (
            ((_ = I - u),
            (E << 2) + I > p &&
              ((d = (a = o((E << 2) + I)).dataView),
              (r -= i),
              ($ -= i),
              (u -= i),
              (I -= i),
              (i = 0),
              (p = a.length - 10)),
            E > (65280 + _) >> 2)
          ) {
            C.push(e, s, r - $);
            break;
          }
          let T = I;
          if (E < 64) {
            let e, t, i;
            for (e = 0; e < E; e++)
              ((t = s.charCodeAt(e)),
                t < 128
                  ? (a[I++] = t)
                  : t < 2048
                    ? ((m = !0),
                      (a[I++] = (t >> 6) | 192),
                      (a[I++] = (63 & t) | 128))
                    : 55296 == (64512 & t) &&
                        56320 == (64512 & (i = s.charCodeAt(e + 1)))
                      ? ((m = !0),
                        (t = 65536 + ((1023 & t) << 10) + (1023 & i)),
                        e++,
                        (a[I++] = (t >> 18) | 240),
                        (a[I++] = ((t >> 12) & 63) | 128),
                        (a[I++] = ((t >> 6) & 63) | 128),
                        (a[I++] = (63 & t) | 128))
                      : ((m = !0),
                        (a[I++] = (t >> 12) | 224),
                        (a[I++] = ((t >> 6) & 63) | 128),
                        (a[I++] = (63 & t) | 128)));
          } else ((I += zC(a, s, I)), (m = I - T > E));
          if (_ < 160 || (_ < 246 && (c.ascii8 || c.string8))) {
            if (m)
              (A = c.string8) ||
                (l.length > 10 && (A = c.ascii8)
                  ? ((A.__type = 2),
                    (c.ascii8 = null),
                    (c.string8 = A),
                    n(null, 0, !0))
                  : (A = ZC(c, 2, 1)));
            else {
              if (0 === _ && !g) {
                ((g = !0), (A = c.ascii0 || ZC(c, 3, 0)));
                break;
              }
              (A = c.ascii8) ||
                (l.length > 10 && (A = c.string8)) ||
                (A = ZC(c, 3, 1));
            }
            a[r++] = _;
          } else
            ((A = c.string16 || ZC(c, 2, 2)), d.setUint16(r, _, !0), (r += 2));
          break;
        case "object":
          if (s) {
            s.constructor === Date
              ? ((A = c.date64 || ZC(c, 16, 8)),
                d.setFloat64(r, s.getTime(), !0),
                (r += 8))
              : C.push(e, s, b);
            break;
          }
          ((c = JC(c, r, d, -10)), c ? ((A = c), (r = jC)) : C.push(e, s, b));
          break;
        case "boolean":
          ((A = c.num8 || c.ascii8 || ZC(c, 0, 1)), (a[r++] = s ? 249 : 248));
          break;
        case "undefined":
          ((c = JC(c, r, d, -9)), c ? ((A = c), (r = jC)) : C.push(e, s, b));
          break;
        default:
          C.push(e, s, b);
      }
      b++;
    }
    for (let e = 0, t = C.length; e < t;) {
      let t,
        s = C[e++],
        o = C[e++],
        c = C[e++],
        l = A[s];
      if (
        (l ||
          (A[s] = l =
            {
              key: s,
              parent: A,
              enumerationOffset: c - b,
              ascii0: null,
              ascii8: null,
              num8: null,
              string16: null,
              object16: null,
              num32: null,
              float64: null,
            }),
        o)
      ) {
        let e;
        ((_ = I - u),
          _ < 65280
            ? ((A = l.object16),
              A
                ? (e = 2)
                : (A = l.object32)
                  ? (e = 4)
                  : ((A = ZC(l, 1, 2)), (e = 2)))
            : ((A = l.object32 || ZC(l, 1, 4)), (e = 4)),
          (t = n(o, I)),
          "object" == typeof t
            ? ((I = t.position),
              (d = t.targetView),
              (a = t.target),
              (u -= i),
              (r -= i),
              ($ -= i),
              (i = 0))
            : (I = t),
          2 === e
            ? (d.setUint16(r, _, !0), (r += 2))
            : (d.setUint32(r, _, !0), (r += 4)));
      } else
        ((A = l.object16 || ZC(l, 1, 2)),
          d.setInt16(r, null === o ? -10 : -9, !0),
          (r += 2));
      b++;
    }
    let E = A[NC];
    if (null == E) {
      E = c.typedStructs.length;
      let e,
        t,
        a = [],
        i = A;
      for (; void 0 !== (t = i.__type);) {
        let r = i.__size;
        ((i = i.__parent), (e = i.key));
        let s = [t, r, e];
        (i.enumerationOffset && s.push(i.enumerationOffset),
          a.push(s),
          (i = i.parent));
      }
      (a.reverse(), (A[NC] = E), (c.typedStructs[E] = a), n(null, 0, !0));
    }
    switch (m) {
      case 1:
        if (E >= 16) return 0;
        a[$] = E + 32;
        break;
      case 2:
        if (E >= 256) return 0;
        ((a[$] = 56), (a[$ + 1] = E));
        break;
      case 3:
        if (E >= 65536) return 0;
        ((a[$] = 57), d.setUint16($ + 1, E, !0));
        break;
      case 4:
        if (E >= 16777216) return 0;
        d.setUint32($, 58 + (E << 8), !0);
    }
    if (r < u) {
      if (u === I) return r;
      (a.copyWithin(r, u, I), (I += r - u), (l.lastStringStart = r - $));
    } else if (r > u)
      return u === I
        ? r
        : ((l.lastStringStart = r - $), e(t, a, i, $, s, o, n, c));
    return I;
  },
  function (e, t) {
    if (t.typedStructs) {
      let a = new Map();
      (a.set("named", e), a.set("typed", t.typedStructs), (e = a));
    }
    let a = t.lastTypedStructuresLength || 0;
    return (
      (e.isCompatible = (e) => {
        let i = !0;
        if (e instanceof Map) {
          ((e.get("named") || []).length !==
            (t.lastNamedStructuresLength || 0) && (i = !1),
            (e.get("typed") || []).length !== a && (i = !1));
        } else
          (e instanceof Array || Array.isArray(e)) &&
            e.length !== (t.lastNamedStructuresLength || 0) &&
            (i = !1);
        return (i || t._mergeStructures(e), i);
      }),
      (t.lastTypedStructuresLength = t.typedStructs && t.typedStructs.length),
      e
    );
  },
);
var eb = Symbol.for("source");
function tb(e) {
  switch (e) {
    case 246:
      return null;
    case 247:
      return;
    case 248:
      return !1;
    case 249:
      return !0;
  }
  throw new Error("Unknown constant");
}
function ab(e) {
  return function () {
    return e(this[eb]);
  };
}
!(function (e, t, a) {
  ((Sg = e), (Lg = t), (Ng = a));
})(
  function (e, t, a, i) {
    let r = e[t++] - 32;
    if (r >= 24)
      switch (r) {
        case 24:
          r = e[t++];
          break;
        case 25:
          r = e[t++] + (e[t++] << 8);
          break;
        case 26:
          r = e[t++] + (e[t++] << 8) + (e[t++] << 16);
          break;
        case 27:
          r = e[t++] + (e[t++] << 8) + (e[t++] << 16) + (e[t++] << 24);
      }
    let s = i.typedStructs && i.typedStructs[r];
    if (!s) {
      if (
        ((e = Uint8Array.prototype.slice.call(e, t, a)),
        (a -= t),
        (t = 0),
        !i.getStructures)
      )
        throw new Error(
          `Reference to shared structure ${r} without getStructures method`,
        );
      if ((i._mergeStructures(i.getStructures()), !i.typedStructs))
        throw new Error("Could not find any shared typed structures");
      if (
        ((i.lastTypedStructuresLength = i.typedStructs.length),
        (s = i.typedStructs[r]),
        !s)
      )
        throw new Error("Could not find typed structure " + r);
    }
    var o = s.construct;
    if (!o) {
      var n = (o = s.construct = function () {}).prototype;
      let e,
        t = [],
        a = 0;
      for (let r = 0, o = s.length; r < o; r++) {
        let o = s[r],
          [n, c, l, d] = o;
        "__proto__" === l && (l = "__proto_");
        let u,
          p,
          $ = { key: l, offset: a };
        switch ((d ? t.splice(r + d, 0, $) : t.push($), c)) {
          case 0:
            u = () => 0;
            break;
          case 1:
            u = (e, t) => {
              let a = e.bytes[t + $.offset];
              return a >= 246 ? tb(a) : a;
            };
            break;
          case 2:
            u = (e, t) => {
              let a = e.bytes,
                i = (
                  a.dataView ||
                  (a.dataView = new DataView(
                    a.buffer,
                    a.byteOffset,
                    a.byteLength,
                  ))
                ).getUint16(t + $.offset, !0);
              return i >= 65280 ? tb(255 & i) : i;
            };
            break;
          case 4:
            u = (e, t) => {
              let a = e.bytes,
                i = (
                  a.dataView ||
                  (a.dataView = new DataView(
                    a.buffer,
                    a.byteOffset,
                    a.byteLength,
                  ))
                ).getUint32(t + $.offset, !0);
              return i >= 4294967040 ? tb(255 & i) : i;
            };
        }
        switch ((($.getRef = u), (a += c), n)) {
          case 3:
            (e && !e.next && (e.next = $),
              (e = $),
              ($.multiGetCount = 0),
              (p = function (e) {
                let t = e.bytes,
                  i = e.position,
                  r = a + i,
                  s = u(e, i);
                if ("number" != typeof s) return s;
                let o,
                  n = $.next;
                for (; n && ((o = n.getRef(e, i)), "number" != typeof o);)
                  ((o = null), (n = n.next));
                return (
                  null == o && (o = e.bytesEnd - r),
                  e.srcString ? e.srcString.slice(s, o) : Yg(t, s + r, o - s)
                );
              }));
            break;
          case 2:
          case 1:
            (e && !e.next && (e.next = $),
              (e = $),
              (p = function (e) {
                let t = e.position,
                  r = a + t,
                  s = u(e, t);
                if ("number" != typeof s) return s;
                let o,
                  c = e.bytes,
                  l = $.next;
                for (; l && ((o = l.getRef(e, t)), "number" != typeof o);)
                  ((o = null), (l = l.next));
                if ((null == o && (o = e.bytesEnd - r), 2 === n))
                  return c.toString("utf8", s + r, o + r);
                WC = e;
                try {
                  return i.unpack(c, { start: s + r, end: o + r });
                } finally {
                  WC = null;
                }
              }));
            break;
          case 0:
            switch (c) {
              case 4:
                p = function (e) {
                  let t = e.bytes,
                    a =
                      t.dataView ||
                      (t.dataView = new DataView(
                        t.buffer,
                        t.byteOffset,
                        t.byteLength,
                      )),
                    i = e.position + $.offset,
                    r = a.getInt32(i, !0);
                  if (r < 536870912) {
                    if (r > -520093696) return r;
                    if (r > -536870912) return tb(255 & r);
                  }
                  let s = a.getFloat32(i, !0),
                    o = dC[((127 & t[i + 3]) << 1) | (t[i + 2] >> 7)];
                  return ((o * s + (s > 0 ? 0.5 : -0.5)) | 0) / o;
                };
                break;
              case 8:
                p = function (e) {
                  let t = e.bytes,
                    a = (
                      t.dataView ||
                      (t.dataView = new DataView(
                        t.buffer,
                        t.byteOffset,
                        t.byteLength,
                      ))
                    ).getFloat64(e.position + $.offset, !0);
                  if (isNaN(a)) {
                    let a = t[e.position + $.offset];
                    if (a >= 246) return tb(a);
                  }
                  return a;
                };
                break;
              case 1:
                p = function (e) {
                  let t = e.bytes[e.position + $.offset];
                  return t < 246 ? t : tb(t);
                };
            }
            break;
          case 16:
            p = function (e) {
              let t = e.bytes,
                a =
                  t.dataView ||
                  (t.dataView = new DataView(
                    t.buffer,
                    t.byteOffset,
                    t.byteLength,
                  ));
              return new Date(a.getFloat64(e.position + $.offset, !0));
            };
        }
        $.get = p;
      }
      if (YC) {
        let e,
          a = [],
          r = [],
          s = 0;
        for (let o of t) {
          if (i.alwaysLazyProperty && i.alwaysLazyProperty(o.key)) {
            e = !0;
            continue;
          }
          Object.defineProperty(n, o.key, { get: ab(o.get), enumerable: !0 });
          let t = "v" + s++;
          (r.push(t), a.push("[" + JSON.stringify(o.key) + "]:" + t + "(s)"));
        }
        e && a.push("__proto__:this");
        let o = new Function(
          ...r,
          "return function(s){return{" + a.join(",") + "}}",
        ).apply(
          null,
          t.map((e) => e.get),
        );
        Object.defineProperty(n, "toJSON", {
          value(e) {
            return o.call(this, this[eb]);
          },
        });
      } else
        Object.defineProperty(n, "toJSON", {
          value(e) {
            let a = {};
            for (let e = 0, i = t.length; e < i; e++) {
              let i = t[e].key;
              a[i] = this[i];
            }
            return a;
          },
        });
    }
    var c = new o();
    return ((c[eb] = { bytes: e, position: t, srcString: "", bytesEnd: a }), c);
  },
  function (e) {
    if (!(e instanceof Map)) return e;
    let t = e.get("typed") || [];
    Object.isFrozen(t) && (t = t.map((e) => e.slice(0)));
    let a = e.get("named"),
      i = Object.create(null);
    for (let e = 0, a = t.length; e < a; e++) {
      let a = t[e],
        r = i;
      for (let [e, t, i] of a) {
        let a = r[i];
        (a ||
          (r[i] = a =
            {
              key: i,
              parent: r,
              enumerationOffset: 0,
              ascii0: null,
              ascii8: null,
              num8: null,
              string16: null,
              object16: null,
              num32: null,
              float64: null,
              date64: null,
            }),
          (r = ZC(a, e, t)));
      }
      r[NC] = e;
    }
    return (
      (t.transitions = i),
      (this.typedStructs = t),
      (this.lastTypedStructuresLength = t.length),
      a
    );
  },
  function () {
    WC &&
      ((WC.bytes = Uint8Array.prototype.slice.call(
        WC.bytes,
        WC.position,
        WC.bytesEnd,
      )),
      (WC.position = 0),
      (WC.bytesEnd = WC.bytes.length));
  },
);
var ib = require("module");
if (!(
  void 0 !== process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED &&
  "true" === process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase()
)) {
  let e;
  try {
    ((e =
      "function" == typeof require
        ? require("msgpackr-extract")
        : (0, ib.createRequire)({}.url)("msgpackr-extract")),
      e &&
        (function (e) {
          function t(t) {
            return function (a) {
              let i = mg[gg++];
              if (null == i) {
                if ($g) return xg(a);
                let r = og.byteOffset,
                  s = e(Ag - t + r, ng + r, og.buffer);
                if ("string" == typeof s) ((i = s), (mg = fg));
                else if (((gg = 1), (Eg = 1), (i = (mg = s)[0]), void 0 === i))
                  throw new Error("Unexpected end of buffer");
              }
              let r = i.length;
              return r <= a
                ? ((Ag += a), i)
                : ((pg = i),
                  (bg = Ag),
                  (Eg = Ag + r),
                  (Ag += a),
                  i.slice(0, a));
            };
          }
          ((Hg = t(1)), (Qg = t(2)), (Kg = t(3)), (Fg = t(5)));
        })(e.extractStrings));
  } catch (yo) {}
}
var rb = f(require("assert")),
  sb = {};
I(sb, { MasteryService: () => nb });
var ob = f(require("assert")),
  nb = class {
    constructor() {
      ((this.masteryPackages = {
        h1: new Map(),
        h2: new Map(),
        h3: new Map(),
        scpc: new Map(),
      }),
        (this.unlockableMasteryData = {
          h1: new Map(),
          h2: new Map(),
          h3: new Map(),
          scpc: new Map(),
        }));
    }
    registerMasteryData(e) {
      for (const t of e.GameVersions)
        this.masteryPackages[t].set(e.LocationId, e);
    }
    rebuildDropIndexes(...e) {
      for (const t of e) {
        this.unlockableMasteryData[t] = new Map();
        for (const e of this.masteryPackages[t].values())
          if (e.SubPackages)
            for (const a of e.SubPackages)
              for (const i of a.Drops)
                this.unlockableMasteryData[t].set(i.Id, {
                  Location: e.LocationId,
                  SubPackageId: a.Id,
                  Level: i.Level,
                });
          else
            for (const a of e.Drops)
              this.unlockableMasteryData[t].set(a.Id, {
                Location: e.LocationId,
                Level: a.Level,
              });
      }
    }
    getMasteryForUnlockable(e, t) {
      return this.unlockableMasteryData[t].get(e.Id);
    }
    getMasteryDataForSubPackage(e, t, a, i) {
      return this.getMasteryDataForDestination(e, a, i, t)[0];
    }
    getMasteryDataForLocation(e, t, a) {
      const i = hA(e, t) ?? OA(e, t);
      ob.default.ok(i, "cannot get mastery data for unknown location");
      return {
        Location: i,
        MasteryData: this.getMasteryDataForDestination(
          i.Properties.ParentLocation ?? i.Id,
          t,
          a,
        ),
      };
    }
    getGenericCompletionData(e, t, a, i, r, s, o) {
      const n = kI(e, t);
      ob.default.ok(n, `user profile ${e} not found`);
      const c = n.Extensions.progression.Locations[a];
      ob.default.ok(c, `parent ${a} not found`);
      const l = s ? c[s] : c,
        d = r(SE(l.Level + 1, 1, i), o),
        u = r(l.Level, o);
      return {
        Level: l.Level,
        MaxLevel: i,
        XP: l.Xp,
        PreviouslySeenXp: l.PreviouslySeenXp,
        Completion: (l.Xp - u) / (d - u),
        XpLeft: d - l.Xp,
      };
    }
    getLocationCompletion(e, t, a, i, r = "mission", s) {
      const o = this.getMasteryPackage(e, a),
        n = NE(e);
      if (!o || (o.SubPackages && !s)) return;
      const c = o.SubPackages
        ? o.SubPackages.filter((e) => e.Id === s)[0]
        : void 0;
      if (!c && s) return;
      const l = n
        ? Qd("SniperUnlockables", !1).find((e) => e.Id === s)?.Properties.Name
        : null;
      return (
        n && ob.default.ok(l, `unlockable ${s} not found`),
        {
          ...this.getGenericCompletionData(
            i,
            a,
            e,
            (c ? c.MaxLevel : o.MaxLevel) || AE,
            "sniper" === r ? yE : "evergreen" === r ? TE : CE,
            s,
            o.XpPerLevel,
          ),
          Id: n ? s : o.LocationId,
          SubLocationId: n ? "" : t,
          HideProgression: o.HideProgression || !1,
          IsLocationProgression: !n,
          Name: l,
        }
      );
    }
    getMasteryPackage(e, t) {
      return this.masteryPackages[t].get(e);
    }
    processDrops(e, t, a) {
      return t
        .filter(
          (e) =>
            !!a.has(e.Id) ||
            (Ad("debug", `No unlockable found for ${e.Id}`), !1),
        )
        .map((t) => {
          const i = a.get(t.Id);
          return {
            IsLevelMarker: !1,
            Unlockable: i,
            Level: t.Level,
            IsLocked: t.Level > e,
            TypeLocaKey: `UI_MENU_PAGE_MASTERY_UNLOCKABLE_NAME_${i.Type}`,
          };
        });
    }
    getMasteryDataForDestination(e, t, a, i) {
      const r = this.getMasteryPackage(e, t);
      if (!r || (!r.Drops && !r.SubPackages)) return [];
      const s = NE(e);
      let o;
      if (r.SubPackages) {
        if (
          ((o = new Set(
            r.SubPackages.map((e) =>
              i && e.Id !== i ? [] : e.Drops.map((e) => e.Id),
            ).reduce((e, t) => e.concat(t)),
          )),
          s)
        )
          for (const e of r.SubPackages) o.add(e.Id);
        if (!o || 0 === o.size)
          return (
            Ad("error", "Unknown subPackageId specified for location"),
            []
          );
      } else o = new Set(r.Drops.map((e) => e.Id));
      const n = tE(Array.from(o), t).map((e) => [e?.Id, e]),
        c = new Map(n),
        l = [];
      if (r.SubPackages)
        for (const o of r.SubPackages) {
          if (i && o.Id !== i) continue;
          const r = this.getLocationCompletion(
            e,
            e,
            t,
            a,
            s ? "sniper" : e.includes("SNUG") ? "evergreen" : "mission",
            o.Id,
          );
          r &&
            l.push({
              CompletionData: r,
              Drops: this.processDrops(r.Level, o.Drops, c),
              Unlockable: s ? c.get(o.Id) : void 0,
            });
        }
      else {
        const i = this.getLocationCompletion(
          e,
          e,
          t,
          a,
          e.includes("SNUG") ? "evergreen" : "mission",
        );
        i &&
          l.push({
            CompletionData: i,
            Drops: this.processDrops(i.Level, r.Drops || [], c),
          });
      }
      return l;
    }
  },
  cb = {};
I(cb, { ProgressionService: () => db });
var lb = f(require("assert")),
  db = class {
    grantProfileProgression(e, t, a, i, r, s, o) {
      const n = e + t;
      (o || this.grantUserXp(n, i, r),
        this.grantLocationMasteryXpAndRewards(t, e, i, r, s, o),
        a.length > 0 && rE(r.Id, tE(a, i.gameVersion).filter(Boolean)),
        KI(r.Id, i.gameVersion));
    }
    getMasteryProgressionForLocation(e, t, a) {
      const i = e.Extensions.progression.Locations[t];
      return (
        lb.default.ok(i, `Location ${t} not found in user data`),
        a ? i[a] : i
      );
    }
    getLocationMasteryDrops(e, t, a, i, r) {
      const s = tE(
        a.filter((e) => e.Level > i && e.Level <= r).map((e) => e.Id),
        e,
      );
      if (t) {
        const t = s.reduce(
          (e, t) => (
            t?.Properties.Unlocks && e.push(...t.Properties.Unlocks),
            e
          ),
          [],
        );
        t.length && s.push(...tE(t, e));
      }
      return s.filter((e) => !!e);
    }
    grantLocationMasteryXpAndRewards(e, t, a, i, r, s) {
      const o = jb.resolveContract(a.contractId, a.gameVersion);
      if (!o) return;
      const n = hA(r ?? o.Metadata.Location, a.gameVersion),
        c = n ? n.Properties?.ParentLocation : (r ?? o.Metadata.Location);
      if (!c) return;
      if ("sniper" !== o.Metadata.Type || s) {
        const n = jb.masteryService.getMasteryPackage(c, a.gameVersion),
          l = this.getMasteryProgressionForLocation(
            i,
            c,
            "h1" === a.gameVersion
              ? (o.Metadata.Difficulty ?? "normal")
              : (s ?? void 0),
          ),
          d = n?.MaxLevel || AE,
          u = "evergreen" === o.Metadata.Type;
        if (n) {
          lb.default.ok(l, `location ${r} not found`);
          const o = l.Level;
          if (
            ((l.Xp = SE(
              l.Xp + e + t,
              0,
              u ? TE(d) : s ? yE(d) : CE(d, n.XpPerLevel),
            )),
            (l.Level = SE(
              u ? EE(l.Xp) : s ? OE(l.Xp) : gE(l.Xp, n.XpPerLevel),
              1,
              d,
            )),
            l.Level > o)
          ) {
            const e = this.getLocationMasteryDrops(
              a.gameVersion,
              u,
              s
                ? n.SubPackages?.find((e) => e.Id === s)?.Drops || []
                : n.Drops || [],
              o,
              l.Level,
            ).filter(Boolean);
            rE(i.Id, e);
          }
        }
        u &&
          (lb.default.ok(o.Metadata.CpdId, "evergreen contract has no CPD"),
          (i.Extensions.CPD[o.Metadata.CpdId].EvergreenLevel = l?.Level ?? 0));
      }
      const l = i.Extensions.progression.PlayerProfileXP;
      ((l.Sublocations[o.Metadata.Location] ??= { Xp: 0, ActionXp: 0 }),
        (l.Sublocations[o.Metadata.Location].Xp += e),
        (l.Sublocations[o.Metadata.Location].ActionXp += t));
    }
    grantUserXp(e, t, a) {
      const i = a.Extensions.progression.PlayerProfileXP;
      ((i.Total += e),
        (i.ProfileLevel = SE(gE(i.Total), 1, mE(t.gameVersion))));
    }
  },
  ub = {};
I(ub, { orderedETAs: () => pb });
var pb = [
    "797e204a-ef3d-463b-a386-57df0fe29b8f",
    "34c21c64-515a-4a43-9fd0-378211060122",
    "6678cf8a-f614-4536-9584-e649351f40c2",
    "3fa83d8d-eb75-4973-926a-6052ee5b2aa4",
    "80582fdb-c77e-4d6a-b33f-1f14f34b72c4",
    "e9168f42-882e-4c7e-8353-33d2bd8bb864",
    "f1e3dcdc-2247-4da8-bf8e-856f5fd23888",
    "b1fb40d7-c013-4c9f-bb8a-8782e980b11a",
    "de9788cc-b9c4-47fc-b5df-86451cd82c43",
    "ff5b4e53-49ea-4d85-b94e-d3c8b3fc7ab3",
    "80cf04de-8e0b-4f38-b094-600753e2ac24",
    "85a67f31-75ce-40f5-a281-7765791f58ca",
    "a79640cb-331a-41af-abaf-58e629fe0a04",
    "cab4293f-e359-419d-aa6f-83d91a158cf5",
    "dd68d30f-3900-415f-bb17-84681a2cd4fc",
    "07bc9bbf-7cba-4cdf-92bb-3ab57f09b1cc",
    "223aa1f3-64a1-43c0-b3c8-36aebd7998e4",
    "9cbdb972-95df-4e0a-be77-7937ec6f2fb0",
    "afb4ce18-bf9d-443d-85a8-207df9011792",
    "09ea9b32-dc85-4633-9f6a-c5c4bfded5ac",
    "479ec396-b96f-4e01-94d9-aedaa0582ed9",
    "5081776a-86b6-4935-a83e-631a65ba8ee8",
    "8db8fa33-cb41-4a0d-a2de-e30d884afb95",
    "be787ec9-e7b9-4984-bb39-fda4c71705ec",
    "74278853-5990-4058-8972-1f10ad12b6d8",
    "6516174c-abe0-4cd7-acdb-7cda4c9b5016",
    "d21e2e91-602c-49d2-9d42-e8bcfb810e9a",
    "6de90688-ad4c-457e-ae25-c4bbc8f55196",
    "06f99231-9b1e-483f-8a72-f91efcc2fd2b",
    "17027c6f-7010-43b8-bb42-1a6846fc0b7b",
    "09a40d33-4820-454b-89af-a10e0b8d3e08",
    "7886bed7-3805-46c6-a792-4a0d55758934",
    "2c2afdfe-d396-451a-a6a3-52aca4ea4f1f",
    "39cc0603-4348-4dbf-9bd3-733cadf2913c",
    "b4d555eb-e2c9-40c2-b155-328a7019fd28",
    "e4b29c19-13b4-471b-b188-cd9c0a788cd0",
    "90121ee0-0431-4a97-9bc8-8a7e2ca30d65",
    "7569d5e4-5270-4b69-96c8-e47b99876390",
    "bfb56fe6-06db-440a-aafe-42eeeb223fa1",
    "b9f55fc3-c53f-4661-a4b6-9956303422aa",
    "9e469023-e0c4-42bf-8527-f9fcaf624421",
  ],
  $b = {};
I($b, { SMFSupport: () => Ub });
var _b = require("fs"),
  Ib = f(require("path")),
  Ab = require("fs/promises"),
  fb = {};
I(fb, {
  MenuSystemDatabase: () => Db,
  menuSystemDatabase: () => Pb,
  menuSystemPreRouter: () => Nb,
  menuSystemRouter: () => Rb,
});
var mb = f(Ys()),
  gb = f(Fs()),
  Cb = require("path"),
  bb = f(js()),
  Eb = require("fs/promises"),
  Tb = {};
I(Tb, { imageFetchingMiddleware: () => Lb });
var hb = f(as()),
  Ob = f(zo()),
  yb = f(require("fs")),
  Sb = new Ob.JailFS(Ob.ppath.join(Ob.ppath.cwd(), "images"), {
    baseFs: new Ob.NodeFS(yb),
  });
async function Lb(e, t) {
  if ("OFFLINE" === Rd("imageLoading"))
    return void t.status(404).send("Image not offline, unable to provide.");
  const a = hb.default.original(e),
    i = (0, hb.default)(e)?.pathname;
  if (i)
    if ("/" !== i || "/" === a?.pathname?.slice(-1))
      try {
        const e = await O_(`https://img.rdil.rocks/images${i}`, {
          responseType: "stream",
        });
        if (
          (i.endsWith(".jpg")
            ? t.header("Content-Type", "image/jpg")
            : i.endsWith(".png") && t.header("Content-Type", "image/png"),
          e.data.pipe(t),
          "SAVEASREQUESTED" === Rd("imageLoading"))
        ) {
          Ad("debug", `Saving image ${i} to disk.`);
          const t = Ob.ppath.dirname(i);
          Sb.existsSync(t) ||
            (Ad("debug", `Creating missing directory ${t}`),
            Sb.mkdirSync(t, { recursive: !0 }));
          const a = Sb.createWriteStream(Ob.ppath.resolve(i));
          (a.on("finish", () => {
            (Ad("info", `Saved image ${i} to disk.`), a.close());
          }),
            a.on("error", (e) => {
              (Ad("error", `Failed to save image ${i} to disk: ${e}`),
                a.close());
            }),
            e.data.pipe(a));
        }
      } catch (e) {
        (Ad("debug", `[Image loading] Err ${e} ${e?.stack}`),
          t.status(500).send("Failed to get data"));
      }
    else t.status(404).send("Not found!");
}
var Nb = (0, mb.Router)(),
  Rb = (0, mb.Router)(),
  Db = class {
    constructor() {
      ((this.hooks = { getDatabaseDiff: new Jl(), getConfig: new Zl() }),
        this.hooks.getDatabaseDiff.tap("PeacockInternal", (e, t) => {
          (e.push("menusystem/data/ispeacock.json"),
            "h3" === t &&
              (e.push(
                "menusystem/elements/settings/data/isnonvroptionvisible.json",
              ),
              e.push("menusystem/pages/gamemodes/gamemodearcade_page.json"),
              e.push(
                "images/unlockables/outfit_ef223b60-b53a-4c7b-b914-13c3310fc61a_0.jpg",
              ),
              e.push(
                "menusystem/elements/challenges/challengelocationviewtile.json",
              )),
            ["h3", "h1"].includes(t) &&
              e.push("menusystem/pages/hub/hub_page.json"),
            e.push("menusystem/data/ishitman3available.json"),
            e.push("menusystem/pages/hub/modals/roadmap/modal.json"),
            e.push("menusystem/pages/hub/data/isfullmenuavailable.json"),
            ["h3", "h2"].includes(t) &&
              (e.push("menusystem/pages/hub/dashboard/dashboard.json"),
              e.push(
                "menusystem/pages/hub/dashboard/category_escalation/result.json",
              ),
              e.push("menusystem/elements/contract/hitscategory_elusive.json"),
              e.push(
                "menusystem/elements/contract/contractshitcategoryloading.json",
              ),
              e.push("menusystem/pages/pause/pausemenu/restart.json"),
              e.push("menusystem/pages/pause/pausemenu/replan.json"),
              e.push("menusystem/pages/pause/pausemenu/save.json"),
              e.push("menusystem/pages/pause/pausemenu/load.json"),
              e.push(
                "menusystem/pages/planning/actions/actions_contextbutton_play.json",
              )),
            "h2" === t &&
              (e.push("menusystem/data/ismultiplayeravailable.json"),
              e.push("menusystem/pages/multiplayer/content/lobbyslim.json"),
              e.push("menusystem/pages/hub/career.json"),
              e.push(
                "menusystem/pages/gamemodes/gamemodesniper_content.json",
              )));
        }),
        this.hooks.getConfig.tap("PeacockInternal", (e, t) => {
          switch (e) {
            case "/elements/settings/data/isnonvroptionvisible.json":
              return {
                $if: {
                  $condition: { $and: ["$isingame", "$not $isineditor"] },
                  $then: "$eq($vrmode,off)",
                  $else: !0,
                },
              };
            case "/pages/gamemodes/gamemodearcade_page.json":
              return Qd("ArcadePageTemplate", !1);
            case "/elements/challenges/challengelocationviewtile.json":
              return {
                "$if $.IsPack": {
                  $then: {
                    $include: {
                      $path:
                        "menusystem/elements/challenges/challengelocationview_challengepack.json",
                    },
                  },
                  $else: {
                    $datacontext: {
                      in: "$.",
                      datavalues: {
                        ParentLocationId: "$.@parent.Location.Id",
                        LocationId: "$.CategoryId",
                        PageLink: "challengelocation",
                        LinkArgs: {
                          url: "challengelocation",
                          locationId: "$.CategoryId",
                        },
                        ResourceAvailability: {
                          "$if $not $isnullorempty $.Location.Properties.Entitlements":
                            {
                              $then: {
                                $availabilityofresources: {
                                  resources: "$.RequiredResources",
                                  entitlements:
                                    "$.Location.Properties.Entitlements",
                                },
                              },
                              $else: {
                                $availabilityofresources: {
                                  resources: "$.RequiredResources",
                                },
                              },
                            },
                        },
                      },
                      do: {
                        id: "$formatstring challenge_location_{$.Name}",
                        view: "menu3.basic.CategoryTile",
                        nrows: 3,
                        ncols: 2,
                        data: {
                          $include: {
                            $path:
                              "menusystem/elements/challenges/data/challengelocation_data.json",
                          },
                        },
                        pressable: {
                          "$if $.IsLocked": { $then: !1, $else: !0 },
                        },
                        actions: {
                          $include: {
                            $path:
                              "menusystem/elements/challenges/actions/challengelocation_defaultactions.json",
                          },
                        },
                      },
                    },
                  },
                },
              };
            case "/pages/gamemodes/gamemodesniper_content.json":
              return Qd("H2SniperContentTemplate", !1);
            case "/elements/contract/hitscategory_elusive.json":
              return Qd("HitsCategoryElusiveTemplate", !1);
            case "/elements/contract/hitscategory_contractattack.json":
              return Qd("HitsCategoryContractAttackTemplate", !1);
            case "/elements/contract/contractshitcategoryloading.json":
              return {
                controller: "group",
                view: "menu3.containers.ScrollingListContainer",
                layoutchildren: !0,
                id: "hitscategory_container",
                nrows: 3,
                ncols: 10,
                pressable: !1,
                data: { direction: "horizontal" },
                actions: {
                  activated: {
                    "load-async": {
                      path: {
                        "$if $eq ($.Category,Elusive_Target_Hits)": {
                          $then:
                            "menusystem/elements/contract/hitscategory_elusive.json",
                          $else: {
                            "$if $eq ($.Category,ContractAttack)": {
                              $then:
                                "menusystem/elements/contract/hitscategory_contractattack.json",
                              $else:
                                "menusystem/elements/contract/hitscategory.json",
                            },
                          },
                        },
                      },
                      from: {
                        url: "hitscategory",
                        args: { page: 0, type: "$.Category", mode: "dataonly" },
                      },
                      target: "hitscategory_container",
                      showloadingindicator: !0,
                      blocksinput: !1,
                      "post-load-action": [
                        {
                          "set-selected": { target: "hitscategory_container" },
                        },
                      ],
                    },
                  },
                },
                children: [{ pressable: !1, selectable: !0 }],
              };
            case "/data/ishitman3available.json":
              return { "$if $eq (0,0)": { $then: "$isonline", $else: !1 } };
            case "/pages/hub/modals/roadmap/modal.json":
              return Qd("Roadmap", !1);
            case "/pages/hub/hub_page.json":
              return Qd("HubPageData", !1);
            case "/pages/hub/data/isfullmenuavailable.json":
              return {
                "$if $not $isuser freeprologue": {
                  $then: !0,
                  $else: { $and: ["$not $eq($platform,izumo)", "$isonline"] },
                },
              };
            case "/pages/hub/dashboard/dashboard.json":
              return "h3" === t
                ? Qd("EiderDashboard", !1)
                : "h2" === t
                  ? Qd("H2DashboardTemplate", !1)
                  : void 0;
            case "/pages/hub/dashboard/category_escalation/result.json":
              return Qd("DashboardCategoryEscalation", !1);
            case "/data/ismultiplayeravailable.json":
              return { "$if $eq ($platform,stadia)": { $then: !1, $else: !0 } };
            case "/data/ispeacock.json":
              return { "$if $eq (0,0)": { $then: !0, $else: !0 } };
            case "/data/ispeacockdev.json":
              return { "$if $eq (0,0)": { $then: !1, $else: !1 } };
            case "/pages/hub/modals/peacock/dynresmodal.json":
              return Qd("DynresModal", !1);
            case "/pages/hub/career.json":
              return Qd("H2CareerTemplate", !1);
            case "/pages/multiplayer/content/lobbyslim.json":
              return Qd("LobbySlimTemplate", !1);
            case "/pages/pause/pausemenu/restart.json":
              return {
                $if: {
                  $condition: {
                    $or: [
                      "$not $eq({$currentcontractcontext}.ContractType,evergreen)",
                      "$isallowedtorestart",
                    ],
                  },
                  $then: {
                    $include: {
                      $path:
                        "menusystem/pages/pause/pausemenu/restartnoconditions.json",
                    },
                  },
                },
              };
            case "/pages/pause/pausemenu/replan.json":
              return {
                $if: {
                  $condition: {
                    $and: [
                      "$not $eq({$currentcontractcontext}.ContractLocation,LOCATION_ICA_FACILITY)",
                      "$not $eq({$currentcontractcontext}.ContractType,tutorial)",
                      "$not $eq({$currentcontractcontext}.ContractType,vsrace)",
                      "$not $eq({$currentcontractcontext}.ContractType,evergreen)",
                    ],
                  },
                  $then: {
                    "$if $isallowedtorestart": {
                      $then: {
                        view: "menu3.basic.ListElementSmall",
                        pressable:
                          "$not $isnull {$currentcontractcontext}.Contract",
                        selectable:
                          "$not $isnull {$currentcontractcontext}.Contract",
                        data: {
                          showningame: "$isingame",
                          title: "$loc UI_MENU_PAGE_PAUSE_REPLAN",
                          icon: "planning",
                        },
                        actions: {
                          accept: {
                            "$if $eq ({$currentcontractcontext}.ContractType,placeholder)":
                              {
                                $then: {
                                  $datacontext: {
                                    in: "$.",
                                    datavalues: { AutoStart: !1 },
                                    do: {
                                      $include: {
                                        $path:
                                          "menusystem/pages/pause/pausemenu/replanplaceholder.json",
                                      },
                                    },
                                  },
                                },
                                $else: { "replan-level": {} },
                              },
                          },
                        },
                      },
                    },
                  },
                },
              };
            case "/pages/pause/pausemenu/save.json":
              return {
                $if: {
                  $condition: {
                    $and: [
                      "$not $eq({$currentcontractcontext}.ContractType,arcade)",
                      "$not $eq({$currentcontractcontext}.ContractType,evergreen)",
                      "$not $eq({$currentcontractcontext}.ContractType,sniper)",
                      "$not $eq({$currentcontractcontext}.ContractType,vsrace)",
                    ],
                  },
                  $then: {
                    $datacontext: {
                      in: "$.",
                      datavalues: { CanSave: "$cansave" },
                      do: {
                        view: "menu3.basic.ListElementSmall",
                        selectable: "$.CanSave",
                        pressable: "$.CanSave",
                        data: {
                          showningame: "$isingame",
                          title: "$loc UI_MENU_PAGE_PAUSE_SAVE",
                          icon: {
                            "$if $.CanSave": {
                              $then: "save",
                              $else: "savedisabled",
                            },
                          },
                          greyelement: "$not $.CanSave",
                        },
                        actions: {
                          "$if $.CanSave": {
                            $then: {
                              accept: {
                                link: {
                                  page: "savepage",
                                  args: {
                                    url: "save",
                                    args: { saveorload: "save" },
                                    saveorload: "save",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              };
            case "/pages/pause/pausemenu/load.json":
              return {
                $if: {
                  $condition: {
                    $and: [
                      "$not $eq({$currentcontractcontext}.ContractType,arcade)",
                      "$not $eq({$currentcontractcontext}.ContractType,evergreen)",
                      "$not $eq({$currentcontractcontext}.ContractType,sniper)",
                      "$not $eq({$currentcontractcontext}.ContractType,vsrace)",
                    ],
                  },
                  $then: {
                    view: "menu3.basic.ListElementSmall",
                    data: {
                      showningame: "$isingame",
                      title: "$loc UI_MENU_PAGE_PAUSE_LOAD_GAME",
                      icon: "load",
                    },
                    actions: {
                      accept: {
                        link: {
                          page: "loadpage",
                          args: {
                            url: "load",
                            args: { saveorload: "load" },
                            saveorload: "load",
                            mainmenu: !1,
                            reloadonchange: !0,
                          },
                        },
                      },
                    },
                  },
                },
              };
            case "/pages/pause/pausemenu/restartnoconditions.json":
              return {
                view: "menu3.basic.ListElementSmall",
                data: {
                  showningame: "$isingame",
                  title: {
                    "$if $eq ({$currentcontractcontext}.ContractType,vsrace)": {
                      $then: "$loc UI_MENU_LOBBY_REMATCH",
                      $else: "$loc UI_MENU_PAGE_PAUSE_RESTART",
                    },
                  },
                  icon: "replay",
                },
                actions: {
                  accept: {
                    "$if $eq ({$currentcontractcontext}.ContractType,placeholder)":
                      {
                        $then: {
                          $datacontext: {
                            in: "$.",
                            datavalues: { AutoStart: !0 },
                            do: {
                              $include: {
                                $path:
                                  "menusystem/pages/pause/pausemenu/replanplaceholder.json",
                              },
                            },
                          },
                        },
                        $else: { "restart-level": {} },
                      },
                  },
                },
              };
            case "/pages/planning/actions/actions_contextbutton_play.json":
              return {
                $mergeobjects: [
                  {
                    accept: {
                      "start-contract": {
                        contract: "$.Contract",
                        difficulty: "$.@parent.CurrentDifficulty",
                        objectives: "$.@parent.Objectives",
                      },
                    },
                  },
                  {
                    $include: {
                      $path:
                        "menusystem/pages/planning/actions/actions_contextbutton_common.json",
                    },
                  },
                ],
              };
            default:
              return;
          }
        }));
    }
    _getNamedConfig(e, t) {
      return this.hooks.getConfig.call(e, t);
    }
    static configMiddleware(e, t, a) {
      const i = Pb._getNamedConfig(e.path, e.gameVersion);
      i
        ? t.json(i)
        : (Ad("debug", `Unable to resolve config ${e.path}, skipping...`), a());
    }
  },
  Pb = new Db();
(Rb.get("/dynamic_resources_pc_release_rpkg", async (e, t) => {
  const a = `dynamic_resources_${"scpc" === e.gameVersion ? "h1" : e.gameVersion}.rpkg`,
    i = (0, Cb.join)(__dirname, "resources", a);
  Ad("debug", `Serving dynamic resources from file ${a}.`, "dynRes");
  const r = await (0, bb.default)(i);
  (t.set("Content-Type", "application/octet-stream"),
    t.set("Content-MD5", Buffer.from(r, "hex").toString("base64")),
    t.send(await (0, Eb.readFile)(i)));
}),
  Rb.use("/menusystem/", Db.configMiddleware),
  Nb.get("/images%5Cactors%5Celusive_goldendoublet_face.jpg", (e, t, a) => {
    ((e.url = "/images/actors/elusive_goldendoublet_face.jpg"), a("router"));
  }),
  Nb.get("/images%5Cactors%5Celusive_redsnapper_face.jpg", (e, t, a) => {
    ((e.url = "/images/actors/elusive_redsnapper_face.jpg"), a("router"));
  }),
  Rb.use("/images/", (0, gb.default)("images", { fallthrough: !0 }), Lb));
var Mb = f(er()),
  Ub = class e {
    constructor(t) {
      this.controller = t;
      const a = e.modFrameworkDataPaths;
      if (a)
        for (const e of a)
          if ((0, _b.existsSync)(e))
            return void (this.lastDeploy = (0, Mb.parse)(
              (0, _b.readFileSync)(e).toString(),
            ));
      this.lastDeploy = null;
    }
    static get modFrameworkDataPaths() {
      if ("AUTO" !== Rd("frameworkDeploySummaryPath"))
        return [Rd("frameworkDeploySummaryPath")];
      switch (process.platform) {
        case "win32":
          return (
            (process.env.LOCALAPPDATA && [
              (0, Ib.join)(
                process.env.LOCALAPPDATA,
                "Simple Mod Framework",
                "deploySummary.json",
              ),
              (0, Ib.join)(
                process.env.LOCALAPPDATA,
                "Simple Mod Framework",
                "lastDeploy.json",
              ),
            ]) ||
            !1
          );
        case "linux": {
          if (!process.env.HOME) return !1;
          const e =
            process.env.XDG_DATA_HOME ??
            (0, Ib.join)(process.env.HOME, ".local", "share");
          return [
            (0, Ib.join)(e, "app.simple-mod-framework", "deploySummary.json"),
            (0, Ib.join)(e, "app.simple-mod-framework", "lastDeploy.json"),
          ];
        }
        default:
          return !1;
      }
    }
    async executePlugin(e) {
      ("linux" === process.platform &&
        e.startsWith(`${process.env.WINE_DRIVE_PREFIX ?? "Z"}:\\`) &&
        (e = e.substring(2).replace(/\\/g, Ib.default.sep)),
        (0, _b.existsSync)(e) &&
          (await this.controller.executePlugin(
            (0, Ib.basename)(e),
            (await (0, Ab.readFile)(e)).toString(),
            e,
          )));
    }
    handleBlobs(e) {
      e?.blobs &&
        Pb.hooks.getConfig.tap("SMFBlobs", (t, a) => {
          if (
            "h3" === a &&
            (e.blobs?.[t] || e.blobs?.[t.slice(1)]) &&
            process.env.LOCALAPPDATA
          )
            return (0, Mb.parse)(
              (0, _b.readFileSync)(
                (0, Ib.join)(
                  process.env.LOCALAPPDATA,
                  "Simple Mod Framework",
                  "blobs",
                  e.blobs[t] || e.blobs[t.slice(1)],
                ),
              ).toString(),
            );
        });
    }
    handleContracts(e) {
      if (e?.contracts)
        for (const t of Object.values(e.contracts))
          !1 !== t.SMF?.destinations?.peacockIntegration &&
            (this.controller.addMission(t),
            t.SMF?.destinations?.addToDestinations &&
              this.handleDestination(t));
    }
    handleDestination(e) {
      const t = e.Metadata.Location,
        a = e.Metadata.Id,
        i = e.SMF?.destinations.placeBefore,
        r = e.SMF?.destinations.placeAfter,
        s =
          this.controller.missionsInLocation.h3[t] ??
          (this.controller.missionsInLocation.h3[t] = []);
      if (i) {
        const e = s.indexOf(i);
        s.splice(e, 0, a);
      } else if (r) {
        const e = s.indexOf(r) + 1;
        s.splice(e, 0, a);
      } else s.push(a);
    }
    handleUnlockables(e) {
      e?.unlockables &&
        (this.controller.configManager.configs.allunlockables =
          e.unlockables.slice(1));
    }
    async initSMFSupport() {
      if (!this.lastDeploy) return;
      Ad(
        "info",
        "Simple Mod Framework installed - using the data it outputs.",
        "boot",
      );
      const e = this.lastDeploy?.lastServerSideStates;
      if (
        (this.handleUnlockables(e),
        this.handleContracts(e),
        this.handleBlobs(e),
        e?.peacockPlugins)
      )
        for (const t of e.peacockPlugins) await this.executePlugin(t);
    }
    modIsInstalled(e) {
      return (
        this.lastDeploy?.loadOrder.includes(e) ||
        !0 === Rd("overrideFrameworkChecks")
      );
    }
  },
  wb = f(fc()),
  Gb = [
    [
      "6275f476-b90a-4f79-abf3-bf30af020ad8",
      "ee0411d6-b3e7-4320-b56b-25c45d8a9d61",
      "a03285bd-7342-4262-b118-df485b5e99a9",
      "35547610-b036-4025-84f8-18a5db125ea4",
      "2c9b146a-cad6-48e0-a0d2-55eb7e58dbf7",
      "2b61a384-b3f7-42cb-b850-4cac06e2eef1",
      "ecb3e3b9-af4e-40e5-b7d7-9da54715a959",
      "89936bfe-673c-4b35-9404-72d809620f43",
      "1447a96c-73bd-4811-9c2e-5588885e36d7",
    ],
    [
      "ae25aaf1-53c4-4d4d-80b9-609ea09aa8a9",
      "9272bab9-3322-45c3-bb56-695f9923e27e",
      "cdc9e2ac-ae52-4ad8-bc85-929c886e4965",
      "19b1daaf-a472-4cee-9670-304cd62a3307",
      "57c854f1-92c2-4429-90cb-ebc27cd0f912",
      "9582fda8-d4c3-4464-955a-497365740ec2",
    ],
    [
      "7e1e00a0-5e12-4115-bcdb-ddbff1eaa9d1",
      "6ccce0de-7143-4099-af97-cf9838073f6b",
      "0db2289d-9035-4c77-a618-d196c4ca4f5c",
      "7a03a97d-238c-48bd-bda0-e5f279569ccf",
      "e1795c6a-5728-4bc5-bd71-248bc0071b44",
      "608830ec-01f2-4606-a904-8acd95f7e112",
      "4d049c4d-581f-4080-a600-8f1b38937256",
      "2d26476a-aad3-4a75-b2cd-afaf037876b7",
      "3b15b095-c278-4633-bb60-9939ce995a2c",
      "cee4716f-62a5-4290-a5d3-cf7764bf7b4b",
      "1d33dad8-2d70-4cc6-a1d1-e56c6a9c548c",
      "1ffb2af4-97c0-446a-add9-2565a358d862",
      "de89370c-105a-46f7-862f-64c330f28ee9",
      "1564ba59-58a8-4d20-b73d-63aca3254fa2",
      "f9c0cc2c-d779-4641-a011-a39734349058",
    ],
    [
      "5e546c0a-a407-4a17-a226-6cc4674fe987",
      "9b4636e3-2a6f-4bce-80e1-e3a5f79972b3",
      "fd3d8751-6298-4a11-9b29-e1bc01c8e08c",
      "d963e11c-7f49-49c9-a011-8d5d22c0216d",
      "8484edb5-65a2-4c12-9966-16eee599ee63",
    ],
    [
      "400562ab-e093-4d42-adb1-3e6fd5dfe99c",
      "8eed22a6-5bce-4dae-b9ac-5b539acf302e",
      "5b88babb-d565-4bee-95ec-4d434d49333f",
      "411b6f6a-a0ac-4ac8-9f9a-dd2c4c273180",
      "f4a096de-8783-4d97-862e-9db4d032150d",
      "0b37ea64-f9aa-464f-8cfc-252b58b52e41",
      "a6d3dc63-9d95-4030-ae90-5f7efce19473",
      "13d41ab3-4774-4caa-87d1-8d6d31df0423",
      "fb5cd917-0b3a-464b-8489-8e1f4cc824f9",
      "4d3a51a8-9cc0-4081-a53e-d1d21c8dbbe8",
    ],
    [
      "c99273cd-7c1f-4a1c-9b07-e3ceef5ec4cc",
      "ffd1a594-a3ce-4ee2-95bc-a976c3ee8b46",
      "857152eb-29ab-419b-946e-f6124a96b34d",
      "ee0485a3-fead-4a03-8f6a-06d98da31809",
      "028756e3-f911-4e30-bcda-2e3fa12cd427",
      "418be72d-89b7-480f-a1ab-3efa88e51cec",
    ],
    [
      "72d51ef4-3cbd-48ce-9c5a-6502e3313be6",
      "0244490f-df02-4923-85cb-bafbac351842",
      "48404607-6f03-4942-9068-7fab4e164dfe",
      "abc4866f-0837-4708-9ac5-0f5a7a6ca0f6",
      "bdd6b3dc-f8ae-44cd-8c80-44e018362553",
      "15cbf4c7-64ab-4dcb-b00d-afab433fe658",
      "9256f129-4407-4859-8b4d-690026e12b9c",
      "ab65c0b5-c7da-47aa-82a1-5033126ec18c",
      "982e023a-5b97-49af-a2e0-91c640dd874b",
    ],
    [
      "46729d34-489e-4cb1-89f8-30bb1d0df9d1",
      "b475edbd-50ba-46e5-8c73-78a094129bb6",
      "1ead714f-9bce-4736-b9cc-3dd5ce75c491",
    ],
    [
      "f0c1c9e9-f9e1-445b-9611-61546d2aea69",
      "94836810-aa7b-4472-9ed4-73806c2f303d",
      "1b2b32ae-798e-4ccc-b353-c3d1c8475faa",
      "8ba7ffda-7e62-4341-bca3-65b16f2ee6af",
      "55eb16e8-91a2-48f4-a6f6-141229d220d2",
      "f8e2aa93-15ca-4a88-b5b7-02f9a712b057",
      "1878154a-8e23-4fce-908e-cfe26fb67a29",
      "717aed54-8685-4901-b7bf-118b9780fa36",
      "ecbd78f6-bc65-4f19-934f-f2bb5adced6d",
      "001b058d-dea6-42c7-86de-c625a6f87c75",
    ],
  ];
function vb(e) {
  const t = (t) => {
    if (Cy[t]) return Cy[t];
    try {
      return require(t);
    } catch (a) {
      throw (
        Ad("error", `PRMR: Unable to load ${t}.`),
        Ad(
          "error",
          `This is a problem with ${e} - please let the author know.`,
        ),
        a
      );
    }
  };
  return (
    (t.resolve = require.resolve),
    (t.cache = require.cache),
    (t.extensions = null),
    (t.main = null),
    t
  );
}
var Bb = JSON.parse(
    '{"Data":{"Objectives":[{"Id":"2937d553-7162-4a49-accd-52c2ac93ab2a","Type":"statemachine","Category":"condition","ExcludeFromScoring":true,"OnActive":{"IfInProgress":{"Visible":false}},"Definition":{"Scope":"session","Context":{},"States":{"Start":{"Close_To_FaceScanner_1":{"Transition":"Success"}}}}},{"Id":"2ffceeaf-9c3a-4aef-a897-857538538c7f","Category":"primary","SuccessEvent":{"EventName":"Kill","EventValues":{"RepositoryId":"5b54d9fb-fa85-4302-a8d5-c5c5e97344c4"}}},{"Id":"880e6299-195f-4fca-8a09-13257f5087a2","Category":"primary","SuccessEvent":{"EventName":"Kill","EventValues":{"RepositoryId":"963c2774-cb9a-4b0c-ab69-210b2405383b"}}},{"Id":"681c4058-7035-4a30-8b42-393600508361","Category":"primary","SuccessEvent":{"EventName":"Kill","EventValues":{"RepositoryId":"1a8a827f-932e-49c0-a1b3-e3201795ae19"}}},{"Id":"346d7dfc-1dcc-4c46-9746-1d925942be84","Type":"statemachine","Category":"condition","ExcludeFromScoring":true,"OnActive":{"IfInProgress":{"Visible":false}},"Activation":{"$eq":["$2ffceeaf-9c3a-4aef-a897-857538538c7f","$880e6299-195f-4fca-8a09-13257f5087a2","$681c4058-7035-4a30-8b42-393600508361","$1a7d60d3-3299-4917-b1e7-e9dd778e20ce","Completed"]},"ObjectiveType":"setpiece","Definition":{"Scope":"session","Context":{"Targets":["0116d627-6a70-4365-aa85-8ce506ff07a0"]},"States":{"Start":{"47_Has_Mask":{"Transition":"Success"}}}}},{"Id":"7d386f54-3059-4771-9fe4-2a6b51faa9eb","Category":"primary","OnInactive":{"IfCompleted":{"State":"Completed"}},"Activation":{"$eq":["$2ffceeaf-9c3a-4aef-a897-857538538c7f","$880e6299-195f-4fca-8a09-13257f5087a2","$681c4058-7035-4a30-8b42-393600508361","$1a7d60d3-3299-4917-b1e7-e9dd778e20ce","$2937d553-7162-4a49-accd-52c2ac93ab2a","Completed"]},"ObjectiveType":"custom","Image":"images/contracts/bull/Contract_Bull_GetSeanRosesFace_ObjectiveTile.jpg","BriefingName":"$loc UI_CONTRACT_BULL_GET_MASK_OBJECTIVE","BriefingText":"$loc UI_CONTRACT_BULL_GET_MASK_DESC","HUDTemplate":{"display":"$loc UI_CONTRACT_BULL_GET_MASK_OBJECTIVE"},"Type":"statemachine","Definition":{"Context":{},"Scope":"session","States":{"Start":{"47_Has_Mask":{"Transition":"Success"}}}}},{"Id":"1a7d60d3-3299-4917-b1e7-e9dd778e20ce","Category":"primary","SuccessEvent":{"EventName":"Kill","EventValues":{"RepositoryId":"d94f3e83-36e3-453c-8d4b-28c93229826a"}}},{"Id":"004847f4-0fd2-4b0f-a655-a33506b38482","Category":"primary","OnInactive":{"IfCompleted":{"State":"InProgress"}},"Activation":{"$eq":["$2ffceeaf-9c3a-4aef-a897-857538538c7f","$880e6299-195f-4fca-8a09-13257f5087a2","$681c4058-7035-4a30-8b42-393600508361","$1a7d60d3-3299-4917-b1e7-e9dd778e20ce","Completed"]},"ObjectiveType":"custom","Image":"images/contracts/bull/Contract_Bull_InfiltrateTornadoShelter_ObjectiveTile.jpg","BriefingName":"$loc UI_CONTRACT_BULL_INFILTRATE_SHELTER_TITLE","BriefingText":"$loc UI_CONTRACT_BULL_INFILTRATE_SHELTER_DESC","HUDTemplate":{"display":"$loc UI_CONTRACT_BULL_INFILTRATE_SHELTER_TITLE"},"Type":"statemachine","Definition":{"Context":{},"Scope":"session","States":{"Start":{"BunkerUnlocked":{"Transition":"Success"}}}}},{"Id":"6d530d1f-a16b-48e9-9553-4681c9eb01a3","Category":"primary","OnInactive":{"IfCompleted":{"State":"InProgress"}},"Activation":{"$eq":["$004847f4-0fd2-4b0f-a655-a33506b38482","Completed"]},"ObjectiveType":"custom","Image":"images/contracts/bull/Contract_Bull_Militia_ObjectiveTile.jpg","BriefingName":"$loc UI_CONTRACT_BULL_MILITIA_BRIEFING_NAME","LongBriefingText":"$loc UI_CONTRACT_BULL_MILITIA_OBJECTIVE","BriefingText":"$loc UI_CONTRACT_BULL_MILITIA_OBJECTIVE","HUDTemplate":{"display":"$loc UI_CONTRACT_BULL_MILITIA_BRIEFING_NAME"},"Type":"statemachine","Definition":{"Context":{},"Scope":"session","States":{"Start":{"MilitiaAgendaRevealed":{"Transition":"Success"}}}}}],"Bricks":[],"GameChangers":[]},"Metadata":{"Id":"42bac555-bbb9-429d-a8ce-f1ffdf94211c","Location":"LOCATION_COLORADO","IsPublished":true,"CreationTimestamp":"2015-06-24T10:22:57.02Z","CreatorUserId":"fadb923c-e6bb-4283-a537-eb4d1150262e","Title":"UI_CONTRACT_BULL_TITLE","Description":"UI_CONTRACT_BULL_DESC","BriefingVideo":"briefing_bull","DebriefingVideo":"debriefing_bull","TileImage":"images/contracts/Bull/Tile.jpg","CodeName_Hint":"Bull","ScenePath":"assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_mission_bull.entity","Type":"mission","Release":"1.5.x","RequiredUnlockable":"ACCESS_HIT_BULL","Drops":["ACCESS_HIT_SNOW_CRANE"],"LastUpdate":"2020-11-09T13:35:13.319949Z","PublicId":"009684938047"},"UserData":{}}',
  ),
  kb = (e) => {
    if (!e.Metadata || !e.Data) return !1;
    for (const t of ["Id", "Title", "Location", "ScenePath"])
      if (!e.Metadata[t])
        return (Ad("error", `Contract missing property Metadata.${t}!`), !1);
    for (const t of ["Objectives", "Bricks"]) {
      if (!Object.hasOwn(e.Data, t))
        return (Ad("error", `Contract missing property Data.${t}!`), !1);
      if (!Array.isArray(e.Data[t]))
        return (
          Ad(
            "error",
            `Contract property Data.${t} should be an array (found ${typeof t})`,
          ),
          !1
        );
    }
    return !0;
  },
  Hb = {};
function Qb(e) {
  !0 === Rd("elusivesAreShown") &&
    (e = e.map((e) => {
      const t = { ...e };
      switch (t.Metadata.Type) {
        case "arcade":
          if (t.Metadata.GroupDefinition) break;
        case "elusive":
          (rb.default.ok(t.Data.Objectives, "elusive/arcade has no objectives"),
            (t.Data.Objectives = t.Data.Objectives.map(
              (e) => (
                "statemachine" === e.Type && e.IsHidden && (e.IsHidden = !1),
                "Kill" === e.SuccessEvent?.EventName && (e.IsHidden = !1),
                e
              ),
            )));
      }
      return t;
    }));
  for (const t of e) Hb[t.Metadata.Id] = t;
}
var Kb = class e {
  constructor() {
    ((this.configManager = {
      getConfig: Qd,
      configs: Hd,
      getVersionedConfig: Kd,
    }),
      (this.missionsInLocation = VA),
      (this.missionsInLocations = new Proxy(VA, {
        get: (e, t) => (
          Ad(
            "warn",
            "controller.missionsInLocations is deprecated since v8, this plugin must be updated!",
            "plugins",
          ),
          e.h3[t]
        ),
      })),
      (this.contracts = new Map()),
      (this.fetchedContracts = new Map()),
      (this.escalationMappings = new Map()),
      (this._pubIdToContractId = new Map()),
      (this.locationsWithETA = new Set()),
      (this.parentsWithETA = new Set()),
      (this._resolveRoot = __dirname),
      (this.hooks = {
        serverStart: new Jl(),
        challengesLoaded: new Jl(),
        masteryDataLoaded: new Jl(),
        newEvent: new Jl(),
        newMetricsEvent: new Jl(),
        getContractManifest: new Zl(),
        fixContract: new Jl(),
        getContractIdsForGroupDiscovery: new Jl(),
        contributeCampaigns: new Jl(),
        getSearchResults: new ed(),
        getNextCampaignMission: new Zl(),
        onMissionEnd: new Jl(),
        onEscalationReset: new Jl(),
        onUserLogin: new Jl(),
      }));
  }
  addClientSideModDependency(e) {
    return (
      Ad(
        "warn",
        "controller.addClientSideModDependency is deprecated, use !controller.smf.modIsInstalled instead!",
        "plugins",
      ),
      !0 === Rd("overrideFrameworkChecks") || !this.smf.modIsInstalled(e)
    );
  }
  modIsInstalled(e) {
    return (
      Ad(
        "warn",
        "controller.modIsInstalled is deprecated, use controller.smf.modIsInstalled instead!",
        "plugins",
      ),
      this.smf.modIsInstalled(e)
    );
  }
  async boot(e) {
    if (!this.configManager) throw new Error("All hope is lost.");
    (Ad(
      "info",
      "Booting Peacock internal services - this may take a moment.",
      "boot",
    ),
      await this._loadInternalContracts(),
      this.hooks.getContractManifest.tap("PeacockH1Bull", (e, t) => {
        if ("h1" === t && "42bac555-bbb9-429d-a8ce-f1ffdf94211c" === e)
          return Bb;
      }),
      (this.challengeService = new dg(this)),
      (this.masteryService = new nb()),
      (this.progressionService = new db()),
      (this.smf = new Ub(this)),
      this._addElusiveTargets(),
      this._getETALocations(),
      Ad("info", "Loading user contracts...", "contracts"),
      this.index().then(() =>
        Ad("info", "Completed loading contracts.", "contracts"),
      ));
    try {
      (await this._loadResources(),
        this.hooks.challengesLoaded.call(),
        this.hooks.masteryDataLoaded.call());
    } catch (e) {
      (Ad("error", "Fatal error with challenge bootstrap", "boot"),
        Ad("error", e));
    }
    (this.smf.lastDeploy && (await this.smf.initSMFSupport()),
      await this._loadPlugins(),
      this.hooks.serverStart.call());
  }
  _getETALocations() {
    for (const e of pb) {
      const t = this.resolveContract(e, "h3", !0);
      if (t) {
        rb.default.ok(
          t.Metadata.GroupDefinition,
          "arcade contract has no group definition",
        );
        for (const e of t.Metadata.GroupDefinition.Order) {
          const t = this.resolveContract(e, "h3", !1);
          t && this.locationsWithETA.add(t.Metadata.Location);
        }
        this.locationsWithETA.add(t.Metadata.Location);
      }
    }
    const e = Kd("LocationsData", "h3", !1);
    for (const t of this.locationsWithETA) {
      const a = e.children[t].Properties.ParentLocation;
      (rb.default.ok(a, "no parent location"), this.parentsWithETA.add(a));
    }
  }
  async contractByPubId(e, t, a) {
    return this._pubIdToContractId.has(e)
      ? this.resolveContract(this._pubIdToContractId.get(e), a)
      : await this.downloadContract(t, e, a);
  }
  async commitNewContract(e) {
    const t = JSON.stringify(e, void 0, 4);
    Ad(
      "info",
      `Saving generated contract ${e.Metadata.Id} to contracts/${e.Metadata.PublicId}.json`,
      "contracts",
    );
    const a = `contracts/${e.Metadata.PublicId}.json`;
    return (
      await (0, $A.writeFile)(a, t),
      Ad("info", "Re-indexing...", "contracts"),
      this.index().then(() =>
        Ad("info", "Completed re-indexing.", "contracts"),
      ),
      e
    );
  }
  getGroupContract(e, t) {
    return fA.includes(e.Metadata.Type) && e.Metadata.InGroup
      ? (this.resolveContract(e.Metadata.InGroup, t) ?? e)
      : e;
  }
  fixContract(e, t) {
    switch (t) {
      case "h1":
        "LOCATION_PARIS_NOEL" === e.Metadata.Location &&
          (e.Metadata.Location = "LOCATION_PARIS");
        break;
      case "h2":
        ("LOCATION_PARIS_NOEL" === e.Metadata.Location &&
          (e.Metadata.Location = "LOCATION_PARIS"),
          "LOCATION_HOKKAIDO_MAMUSHI" === e.Metadata.Location &&
            (e.Metadata.Location = "LOCATION_HOKKAIDO"),
          e.Data.Bricks &&
            (e.Data.Bricks = e.Data.Bricks.filter(
              (e) => !e.includes("override_constantjeff.brick"),
            )));
        break;
      case "h3": {
        if (!e.Metadata.Entitlements) break;
        const t = this.configManager.getConfig("LocationsData", !1);
        e.Metadata.Entitlements = e.Metadata.Entitlements.map((a) => {
          const i = t.children[e.Metadata.Location]?.Properties.Entitlements;
          return a.endsWith("LEGACY_STANDARD") ? i?.[0] : a;
        }).filter((e) => void 0 !== e);
      }
    }
    return (this.hooks.fixContract.call(e, t), e);
  }
  resolveContract(e, t, a = !1) {
    if (!e) return;
    ("boolean" != typeof t && void 0 !== t) ||
      ((t = "h3"),
      Ad(
        "warn",
        "Game version not specified. This plugin needs to be updated! Assuming h3.",
        "Contracts",
      ),
      Ad("trace", "No game version.", "Contracts"));
    let i = this.hooks.getContractManifest.call(e, t, a);
    if (i)
      return (
        (i = i[1] ? i[0] : this.fixContract(i, t)),
        a && (i = this.getGroupContract(i, t)),
        YE(i)
      );
    const r = Hb[e];
    if (r) return this.fixContract(YE(a ? this.getGroupContract(r, t) : r), t);
    const s = this.contracts.has(e) ? this.contracts.get(e) : void 0;
    if (s) return this.fixContract(YE(a ? this.getGroupContract(s, t) : s), t);
    const o = this.fetchedContracts.has(e)
      ? this.fetchedContracts.get(e)
      : void 0;
    return o
      ? this.fixContract(YE(a ? this.getGroupContract(o, t) : o), t)
      : void 0;
  }
  addMission(e) {
    kb(e) &&
      this.hooks.getContractManifest.tap(e.Metadata.Id, (t) => {
        if (t === e.Metadata.Id) return e;
      });
  }
  addEscalation(e, t, a, ...i) {
    "string" != typeof a &&
      ((i = [a, ...i]),
      (a = "h3"),
      Ad(
        "warn",
        "Game version not specified. This plugin needs to be updated! Assuming h3.",
        "addEscalation",
      ),
      Ad("trace", "No game version.", "Contracts"));
    const r = [...i].filter(Boolean);
    (this.addMission(e),
      r.forEach((e) => this.addMission(e)),
      (this.missionsInLocation[a].escalations[t] ??= []));
    this.missionsInLocation[a].escalations[t].push(e.Metadata.Id);
    const s = {},
      o = e.Metadata.GroupDefinition?.Order;
    if (o) {
      for (let t = 0; t < o.length; t++) {
        const a = this.resolveContract(o[t], "h3");
        if (!a)
          return void Ad(
            "error",
            `Could not find next contract (${o[t]}) in group ${e.Metadata.Id}!`,
            "addEscalation",
          );
        s[t + 1] = a.Metadata.Id;
      }
      this.escalationMappings.set(e.Metadata.Id, s);
    } else
      Ad(
        "error",
        `A plugin tried to add an escalation (${e.Metadata.Id}) without a GroupDefinition`,
        "addEscalation",
      );
  }
  async downloadContract(t, a, i) {
    let r;
    if (
      (Ad("debug", `User ${t} is downloading contract ${a}...`),
      "h3" === i && !0 !== Rd("legacyContractDownloader"))
    ) {
      const t = await e._hitmapsFetchContract(a, i);
      t
        ? (r = t)
        : Ad(
            "warn",
            "Failed to download from HITMAPS servers. Trying official servers instead...",
            "contracts",
          );
    }
    if ((r || (r = await e._officialFetchContract(a, i, t)), r))
      return (
        (r = this.fixContract(r, i)),
        (r.Metadata.CreatorUserId = "fadb923c-e6bb-4283-a537-eb4d1150262e"),
        await (0, $A.writeFile)(
          `contracts/${a}.json`,
          JSON.stringify(r, void 0, 4),
        ),
        await this.commitNewContract(r),
        Ad("debug", `Saved contract to contracts/${a}.json`),
        r
      );
    Ad("error", `No contract data for ${a}.`);
  }
  async index() {
    (this.contracts.clear(), this._pubIdToContractId.clear());
    const e = BI.getFs(),
      t = await (0, wb.glob)("contracts/**/*.{json,ocre}");
    for (const a of t)
      try {
        const t = (0, kA.parse)((await e.readFile(a)).toString());
        if (!kb(t)) {
          Ad("error", `Contract ${a} failed validation!`, "contracts");
          continue;
        }
        (this.contracts.set(t.Metadata.Id, t),
          t.Metadata.PublicId &&
            this._pubIdToContractId.set(t.Metadata.PublicId, t.Metadata.Id));
      } catch (e) {
        (Ad("error", `Failed to load contract ${a}!`, "contracts"),
          Ad("debug", e, "contracts"));
      }
  }
  _addElusiveTargets() {
    (Qb(this._internalElusives), (this._internalElusives = void 0));
  }
  static async _hitmapsFetchContract(e, t) {
    const a = xE(e),
      i = (await O_.get(wE, { params: { publicId: a, gameVersion: t } })).data;
    if (!!i?.contract?.Contract) return i.contract.Contract;
  }
  registerGlobalChallenges(e) {
    const t = Kd("GlobalChallenges", e, !0).map((e) => {
      const t = e.Tags || [];
      return (
        t.push("global"),
        {
          Id: e.Id,
          Tags: t,
          Name: e.Name,
          ImageName: e.ImageName,
          Description: e.Description,
          Definition: e.Definition,
          Xp: e.Xp ?? 0,
          InclusionData: e.InclusionData,
        }
      );
    });
    this._handleChallengeResources({
      groups: [{ CategoryId: "global", Challenges: t }],
      meta: { Location: "GLOBAL", GameVersions: [e] },
    });
  }
  async _loadResources() {
    const e = (0, _A.join)(this._resolveRoot, "resources", "challenges");
    await this._handleResources(e, (e) => {
      this._handleChallengeResources(e);
    });
    for (const e of dE) this.registerGlobalChallenges(e);
    const t = (0, _A.join)(this._resolveRoot, "resources", "mastery");
    (await this._handleResources(t, (e) => {
      this._handleMasteryResources(e);
    }),
      this.masteryService.rebuildDropIndexes("h1", "scpc", "h2", "h3"));
  }
  async _handleResources(e, t) {
    const a = await (0, $A.readdir)(e);
    for (const i of a)
      try {
        const a = await (0, $A.readFile)((0, _A.join)(e, i)),
          r = IC(a);
        await t(r);
      } catch (e) {
        Ad("error", `Aborting resource parsing. ${e}`);
      }
  }
  _handleChallengeResources(e) {
    for (const t of e.meta.GameVersions)
      for (const a of e.groups)
        (this.challengeService.registerGroup(a, e.meta.Location, t),
          this.challengeService.registerChallengeList(
            a.Challenges,
            a.CategoryId,
            e.meta.Location,
            t,
          ));
  }
  _handleMasteryResources(e) {
    this.masteryService.registerMasteryData(e);
  }
  static async _officialFetchContract(e, t, a) {
    const i = _E(t),
      r = YA.get(a);
    if (!r) return void Ad("warn", `No authentication for user ${a}!`);
    const s = await r._useService(
        `https://${i}.hitman.io/profiles/page/LookupContractPublicId?publicid=${e}`,
        !0,
      ),
      o = s.data.data?.Contract;
    return o || void 0;
  }
  async _loadPlugins() {
    if ((0, pA.existsSync)("plugins")) {
      const e = (
        await (0, $A.readdir)((0, _A.join)(process.cwd(), "plugins"))
      ).filter((e) => Fb(e, "js") || Fb(e, "cjs"));
      for (const t of e) {
        const e = (0, _A.join)(process.cwd(), "plugins", t),
          a = (await (0, $A.readFile)(e)).toString();
        await this.executePlugin(t, a, e);
      }
    }
    const e = (await (0, $A.readdir)(process.cwd())).filter(
      (e) => Fb(e, "js") || Fb(e, "cjs"),
    );
    for (const t of e) {
      const e = (await (0, $A.readFile)(t)).toString();
      await this.executePlugin(t, e, (0, _A.join)(process.cwd(), t));
    }
  }
  async _loadWorkspacePlugins() {
    const e = (
        await (0, $A.readdir)((0, _A.join)(process.cwd(), "plugins"))
      ).filter((e) => Fb(e, "ts") || Fb(e, "cts")),
      t = await import("esbuild-wasm"),
      { transform: a } = t;
    for (const t of e) {
      const e = (0, _A.join)(process.cwd(), "plugins", t),
        i = (await (0, $A.readFile)(e)).toString(),
        r = await a(i, {
          loader: "ts",
          sourcemap: "inline",
          sourcefile: e,
          target: "node18",
          format: "cjs",
        });
      await this.executePlugin(t, r.code, e);
    }
  }
  async executePlugin(e, t, a) {
    const i = (0, qA.createContext)({
      module: { exports: {} },
      exports: {},
      process,
      fetch,
      require: vb(e),
      __filename: a,
    });
    let r;
    try {
      r = new qA.Script(t, { filename: a }).runInContext(i);
    } catch (t) {
      return (
        Ad("error", `Error while attempting to queue plugin ${e} for loading!`),
        void Ad("error", t)
      );
    }
    try {
      let e = r;
      (r.__esModule && (e = r.default ?? r), await e(this));
    } catch (t) {
      (Ad("error", `Error while evaluating plugin ${e}!`, "plugins"),
        Ad("error", t?.stack ?? t, "plugins"));
    }
  }
  async _loadInternalContracts() {
    const e = await (0, $A.readFile)(
        (0, _A.join)(this._resolveRoot, "resources", "contracts.prp"),
      ),
      t = IC(e);
    (Qb(t.b), (this._internalElusives = t.el), this.scanForGroups());
  }
  scanForGroups() {
    let e = 0;
    const t = [];
    this.hooks.getContractIdsForGroupDiscovery.call(t);
    e: for (const a of new Set([
      ...Object.keys(Hb),
      ...this.hooks.getContractManifest.allTapNames,
      ...t,
    ])) {
      const t = this.resolveContract(a, "h3");
      if (!t?.Metadata?.GroupDefinition) continue;
      const i = {};
      let r = 0;
      const s = t.Metadata.GroupDefinition.Order;
      for (; r + 1 <= s.length;) {
        const e = this.resolveContract(s[r], "h3");
        if (!e) {
          Ad("error", `Could not find next contract (${s[r]}) in group ${a}!`);
          continue e;
        }
        ((i[r + 1] = e.Metadata.Id), r++);
      }
      (this.escalationMappings.set(t.Metadata.Id, i), e++);
    }
    Ad("debug", `Discovered ${e} escalation groups.`, "scanGroups");
  }
};
function Fb(e, t) {
  return e.endsWith(`.plugin.${t}`) || e.endsWith(`Plugin.${t}`);
}
function xb(e, t, a) {
  const i = jb.resolveContract(e, t);
  if (!i) return;
  "h1" === t &&
    i.Metadata.Location.includes("LOCATION_ICA_FACILITY") &&
    (i.Metadata.Location = "LOCATION_ICA_FACILITY");
  const r = TA(i, t),
    s = Kd("LocationsData", t, !1).parents[r?.Properties?.ParentLocation || ""];
  if (!r && ["h1", "h2", "scpc"].includes(t))
    return void Ad(
      "debug",
      `${i.Metadata.Location} looks to be from a newer game, skipping (hitObj)!`,
    );
  const o = SA(i, a, t);
  if (!o) return void Ad("error", "No UC due to previous error?");
  const n = jb.challengeService.getGroupedChallengeLists(
      {
        type: "ParentLocation",
        parent: s?.Id,
        gameVersion: t,
        pro1Filter: "Ignore",
      },
      s?.Id,
      t,
    ),
    c = jb.challengeService.countTotalNCompletedChallenges(n, a, t);
  return {
    Id: i.Metadata.Id,
    UserCentricContract: o,
    Location: s,
    SubLocation: r,
    ChallengesCompleted: c.CompletedChallengesCount,
    ChallengesTotal: c.ChallengesCount,
    LocationLevel: o.Data.LocationLevel,
    LocationMaxLevel: o.Data.LocationMaxLevel,
    LocationCompletion: o.Data.LocationCompletion,
    LocationXPLeft: o.Data.LocationXpLeft,
    LocationHideProgression: o.Data.LocationHideProgression,
  };
}
async function Yb(e, t) {
  for (const a of e)
    await O_.get(wE, { params: { publicId: xE(a), gameVersion: t } });
}
var jb = new Kb(),
  Vb = f(require("assert")),
  qb = [
    "TOKEN_OUTFIT_HERO_BLACKSPECIAL_SUIT",
    "TOKEN_OUTFIT_HERO_MINININJA_SUIT",
    "TOKEN_OUTFIT_HERO_FREEDOMFIGHTERS_SUIT",
    "TOKEN_OUTFIT_HERO_LYNCH_SUIT",
  ],
  Wb = [
    ...du,
    ...eu,
    ...Jd,
    ...Vd,
    ...qd,
    ...Wd,
    ...lu,
    ...ou,
    ...su,
    ...tu,
    ...ru,
    ...au,
    ...iu,
    ...nu,
    ...cu,
    ...zd,
    ...uu,
    ...pu,
    ...$u,
    ..._u,
    ...Iu,
    ...Au,
    ...fu,
    ...mu,
  ],
  Xb = new Map();
function zb(e) {
  Xb.delete(e);
}
function Jb() {
  Xb.clear();
}
var Zb = { scpc: new Map(), h1: new Map(), h2: new Map(), h3: new Map() };
function eE(e, t) {
  if (0 === Zb[t].size) {
    let e = Kd("allunlockables", t, !1);
    ["h2", "h3"].includes(t) &&
      (e = [
        ...e,
        ...Qd("SniperUnlockables", !1),
        ...Qd("VersusUnlockables", !1),
      ]);
    for (const a of e) Zb[t].set(a.Id, a);
    Ad("debug", `Lazy-loaded ${e.length} unlockables for ${t}`);
  }
  return Zb[t].get(e);
}
function tE(e, t) {
  return e.map((e) => eE(e, t));
}
function aE(e, t, a, i, r) {
  if (!i) return a;
  const s = eE(ME(i, t, r), t);
  if (!s) return a;
  const o = [...a];
  return (
    o.every((e) => e.Unlockable.Id !== s.Id) &&
      o.push({
        InstanceId: s.Guid,
        ProfileId: e,
        Unlockable: s,
        Properties: {},
      }),
    o
  );
}
function iE(e, t, a = void 0, i) {
  if (Xb.has(e)) return aE(e, t, Xb.get(e), a, i);
  const r = kI(e, t),
    s = [
      ...Kd("allunlockables", t, !0),
      ...Qd("SniperUnlockables", !0),
      ...Qd("VersusUnlockables", !0),
    ].filter((e) => e.Properties && "location" !== e.Type);
  let o = s;
  if (Rd("enableMasteryProgression")) {
    const e = new Map(),
      a = jb.challengeService.getChallengesUnlockables(t),
      [i, n] = s
        .sort((e, t) =>
          "package" === t.Type ||
          ("evergreenmastery" === t.Type && t.Properties.Unlocks)
            ? 1
            : -1,
        )
        .reduce(
          (function (e, t, a, i) {
            return function (r, s) {
              let o, n;
              if (t.has(s.Id)) t.get(s.Id) && r[0].push(s);
              else if ("package" === s.Type) {
                for (const e of s.Properties.Unlocks || []) t.set(e, !0);
                r[0].push(s);
              } else if ((o = a[s.Id])) {
                const t = e.Extensions?.ChallengeProgression?.[o];
                t?.Completed && r[0].push(s);
              } else if (
                (n = jb.masteryService.getMasteryForUnlockable(s, i))
              ) {
                const a =
                  jb.progressionService.getMasteryProgressionForLocation(
                    e,
                    n.Location,
                    n.SubPackageId,
                  );
                Vb.default.ok(
                  a,
                  `location ${n.Location} (subPackageId: ${n.SubPackageId}) not found`,
                );
                const i = a.Level >= n.Level;
                if (
                  (i && "evergreenmastery" !== s.Type && r[0].push(s),
                  "evergreenmastery" === s.Type && s.Properties.Unlocks)
                )
                  for (const e of s.Properties.Unlocks) t.set(e, i);
              } else {
                const e =
                    "evergreenmastery" === s.Type || "evergreen" === s.Subtype,
                  t = Wb.includes(s.Id);
                e || t
                  ? r[0].push(s)
                  : (qb.includes(s.Id) || Rd("enableIsolatedUnlockables")) &&
                    r[1].push(s);
              }
              return r;
            };
          })(r, e, a, t),
          [[], []],
        );
    o = [...i, ...n];
  }
  const n = Object.values(DE);
  Rd("getDefaultSuits") ||
    (o = o.filter((e) => !n.includes(e.Id) || PE(t).includes(e.Id)));
  const c = o
    .map((t) => {
      if (!gu.includes(t.Guid))
        return (
          (t.GameAsset = null),
          (t.DisplayNameLocKey = `UI_${t.Id}_NAME`),
          { InstanceId: t.Guid, ProfileId: e, Unlockable: t, Properties: {} }
        );
    })
    .filter(
      (function (e, t) {
        return function (a) {
          if (!a) return !1;
          if (
            "disguise" === a.Unlockable.Type &&
            !a.Unlockable.Properties.OrderIndex
          )
            return !1;
          if ("h1" === e) return !0;
          const i = t,
            { Id: r } = a.Unlockable;
          if (!i) return !1;
          if ("evergreenmastery" === a.Unlockable.Type) return !1;
          if ("h3" === e) {
            if (zd.includes(r))
              return (
                i.includes("afa4b921503f43339c360d4b53910791") ||
                i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                i.includes("1829590")
              );
            if (Jd.includes(r))
              return (
                i.includes("6408de14f7dc46b9a33adcf6cbc4d159") ||
                i.includes("afa4b921503f43339c360d4b53910791") ||
                i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                i.includes("1829590")
              );
            if (Zd.includes(r))
              return (
                i.includes("6408de14f7dc46b9a33adcf6cbc4d159") ||
                i.includes("afa4b921503f43339c360d4b53910791") ||
                i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                i.includes("1829590")
              );
            if (qd.includes(r))
              return (
                i.includes("e698e1a4b63947b0bc9349a5ae2dc015") ||
                i.includes("a3509775467d4d6a8a7adffe518dc204") ||
                i.includes("1843460")
              );
            if (Vd.includes(r))
              return (
                i.includes("894d1e6771044f48a8fdde934b8e443a") ||
                i.includes("a3509775467d4d6a8a7adffe518dc204") ||
                i.includes("1843460") ||
                i.includes("1829595")
              );
            if (Wd.includes(r))
              return (
                i.includes("afa4b921503f43339c360d4b53910791") ||
                i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                i.includes("1829590")
              );
          } else if ("h2" === e) {
            if (zd.includes(r)) return i.includes("957693");
          } else if (
            "h1" === e &&
            (i.includes("0a73eaedcac84bd28b567dbec764c5cb") ||
              i.includes(aA)) &&
            (qd.includes(r) || Vd.includes(r))
          )
            return i.includes("81aecb49a60b47478e61e1cbd68d63c5");
          return eu.includes(r)
            ? i.includes("bc610b36c75442299edcbe99f6f0fb60") ||
                i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                i.includes("1829591")
            : tu.includes(r)
              ? i.includes("0e8632b4cdfb415e94291d97d727b98d") ||
                i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                i.includes("1829580")
              : au.includes(r)
                ? i.includes("3f9adc216dde44dda5e829f11740a0a2") ||
                  i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                  i.includes("1829581")
                : iu.includes(r)
                  ? i.includes("aece009ff59441c0b526f8aa69e24cfb") ||
                    i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                    i.includes("1829582")
                  : ru.includes(r)
                    ? i.includes("dfe5aeb89976450ba1e0e2c208b63d33") ||
                      i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                      i.includes("1829583")
                    : su.includes(r)
                      ? i.includes("30107bff80024d1ab291f9cd3bac9fac") ||
                        i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                        i.includes("1829584")
                      : ou.includes(r)
                        ? i.includes("0403062df0d347619c8dcf043c65c02e") ||
                          i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                          i.includes("1829585")
                        : nu.includes(r)
                          ? i.includes("9e936ed2507a473db6f53ad24d2da587") ||
                            i.includes("84a1a6fda4fb48afbb78ee9b2addd475") ||
                            i.includes("1829586")
                          : cu.includes(r)
                            ? i.includes("5d06a6c6af9b4875b3530d5328f61287") ||
                              i.includes("1829596")
                            : lu.includes(r)
                              ? i.includes(
                                  "08d2bc4d20754191b6c488541d2b4fa1",
                                ) || i.includes("2184791")
                              : du.includes(r)
                                ? i.includes(
                                    "a1e9a63fa4f3425aa66b9b8fa3c9cc35",
                                  ) || i.includes("2184790")
                                : uu.includes(r)
                                  ? i.includes(
                                      "9220c020262f420da06eb46a4b1ce86f",
                                    ) || i.includes("2828470")
                                  : pu.includes(r)
                                    ? i.includes(
                                        "6cdf07da030d4f66acd50eaf3cd234c7",
                                      ) || i.includes("2973650")
                                    : $u.includes(r)
                                      ? i.includes(
                                          "f04198e0ffcf49079b5ec77bb6b66891",
                                        ) || i.includes("3110360")
                                      : _u.includes(r)
                                        ? i.includes(
                                            "70a9afcc8de84b6ab0f2b45b2018559b",
                                          ) || i.includes("3254350")
                                        : Iu.includes(r)
                                          ? i.includes(
                                              "256eeeb3d8044aa1840e1606d268e0b2",
                                            ) || i.includes("3711140")
                                          : Au.includes(r)
                                            ? i.includes(
                                                "04cb1b3e5b424308be25236f6bc1b2fb",
                                              ) || i.includes("3957470")
                                            : fu.includes(r)
                                              ? i.includes(
                                                  "0047ddcd5e6846e881f1037c1416e3d9",
                                                ) || i.includes("4097630")
                                              : !mu.includes(r) ||
                                                i.includes(
                                                  "b135c766d25948c39d7dd316dbc4db53",
                                                ) ||
                                                i.includes("4328240");
        };
      })(t, r.Extensions.entP),
    );
  for (const t of c) t.ProfileId = e;
  return (Xb.set(e, c), aE(e, t, c, a));
}
function rE(e, t) {
  if (
    (Xb.has(e) || Vb.default.fail(`User ${e} does not have an inventory??!`),
    !Rd("enableMasteryProgression"))
  )
    return;
  const a = t.map((t) => ({
    InstanceId: t.Guid,
    ProfileId: e,
    Unlockable: t,
    Properties: {},
  }));
  Xb.set(e, [
    ...new Set([
      ...(Xb.get(e) || []),
      ...a.filter((e) => "evergreenmastery" !== e.Unlockable.Type),
    ]),
  ]);
}
((e, t, a) => {
  (A(e, t, "default"), a && A(a, t, "default"));
})(Cd, f(qa()));
var sE = "true" === process.env.IS_PEACOCK_LAUNCHER,
  oE = { _Major: 8, _Minor: 23, _Build: 0, _Revision: 0 },
  nE = "8.7.0",
  cE =
    /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/,
  lE = ["featured", "usercreated"],
  dE = ["h1", "h2", "h3"],
  uE = "d7e2607c-6916-48e2-9588-976c7d8998bb",
  pE = 2;
async function $E() {
  if (!1 !== Rd("updateChecking"))
    try {
      const e = await fetch(
          "https://backend.rdil.rocks/peacock/latest-version/data",
        ),
        t = await e.json(),
        a = (0, Fd.compare)(nE, t.id);
      1 === a
        ? Ad(
            "info",
            `You're ahead of the latest release! The latest version of Peacock (${t.id}) is older than this build.`,
            "updates",
          )
        : 0 === a
          ? Ad("debug", "Peacock is up to date.", "updates")
          : Ad(
              "warn",
              "Peacock is out-of-date! Check the Discord for the latest release.",
              "updates",
            );
    } catch {
      Ad("warn", "Failed to check for updates!", "updates");
    }
}
function _E(e) {
  switch (e) {
    case "h3":
      return "hm3-service";
    case "h2":
      return "pc2-service";
    default:
      return "pc-service";
  }
}
function IE(e, t, a) {
  const i = e.header("Authorization"),
    r = i ? i.split(" ") : [];
  if (2 === r.length && "bearer" === r[0].toLowerCase())
    return (
      (e.jwt = (0, bd.decode)(r[1])),
      cE.test(e.jwt.unique_name)
        ? void a?.()
        : void t?.status(424).send("profile appears to be corrupted")
    );
  ((e.shouldCease = !0), a?.("router"));
}
var AE = 20,
  fE = 6e3;
function mE(e) {
  return "h3" === e ? 12500 : 5e3;
}
function gE(e, t = fE) {
  return Math.max(1, Math.floor(e / t) + 1);
}
function CE(e, t = fE) {
  return Math.max(0, (e - 1) * t);
}
var bE = [
  0, 5e3, 1e4, 17e3, 24e3, 31e3, 38e3, 45e3, 52e3, 61e3, 7e4, 79e3, 88e3, 97e3,
  106e3, 115e3, 124e3, 133e3, 142e3, 154e3, 166e3, 178e3, 19e4, 202e3, 214e3,
  226e3, 238e3, 25e4, 262e3, 28e4, 298e3, 316e3, 334e3, 352e3, 37e4, 388e3,
  406e3, 424e3, 442e3, 468e3, 494e3, 52e4, 546e3, 572e3, 598e3, 624e3, 65e4,
  676e3, 702e3, 736e3, 77e4, 804e3, 838e3, 872e3, 906e3, 94e4, 974e3, 1008e3,
  1042e3, 1082e3, 1122e3, 1162e3, 1202e3, 1242e3, 1282e3, 1322e3, 1362e3,
  1402e3, 1442e3, 1492e3, 1542e3, 1592e3, 1642e3, 1692e3, 1742e3, 1792e3,
  1842e3, 1892e3, 1942e3, 2002e3, 2062e3, 2122e3, 2182e3, 2242e3, 2302e3,
  2362e3, 2422e3, 2482e3, 2542e3, 2692e3, 2842e3, 2992e3, 3142e3, 3292e3,
  3442e3, 3592e3, 3742e3, 3892e3, 4042e3, 4192e3,
];
function EE(e) {
  for (let t = 1; t < bE.length; t++) if (e < bE[t]) return t;
  return bE.length;
}
function TE(e) {
  return bE[e - 1];
}
var hE = [
  0, 5e4, 15e4, 5e5, 1e6, 17e5, 25e5, 35e5, 5e6, 7e6, 95e5, 125e5, 16e6, 2e7,
  25e6, 31e6, 38e6, 47e6, 58e6, 7e7,
];
function OE(e) {
  for (let t = 1; t < hE.length; t++) if (e < hE[t]) return t;
  return hE.length;
}
function yE(e) {
  return hE[e - 1];
}
function SE(e, t, a) {
  return Math.max(t, Math.min(e, a));
}
function LE(e, t) {
  switch (e.Version) {
    case pE:
      return;
    case 1: {
      const a = e.Extensions.progression.PlayerProfileXP.Sublocations;
      return (
        (e.Extensions.progression.PlayerProfileXP.Sublocations =
          Object.fromEntries(
            a.map((e) => [e.Location, { Xp: e.Xp, ActionXp: e.ActionXp }]),
          )),
        (e.Extensions.LastOfficialSync = null),
        (e.Version = 2),
        LE(e, t)
      );
    }
    default: {
      if (void 0 !== e.Version)
        return void Ad("error", `Unhandled profile version ${e.Version}`);
      const a = {
          LOCATION_PARENT_AUSTRIA: [
            "FIREARMS_SC_HERO_SNIPER_HM",
            "FIREARMS_SC_HERO_SNIPER_KNIGHT",
            "FIREARMS_SC_HERO_SNIPER_STONE",
          ],
          LOCATION_PARENT_SALTY: [
            "FIREARMS_SC_SEAGULL_HM",
            "FIREARMS_SC_SEAGULL_KNIGHT",
            "FIREARMS_SC_SEAGULL_STONE",
          ],
          LOCATION_PARENT_CAGED: [
            "FIREARMS_SC_FALCON_HM",
            "FIREARMS_SC_FALCON_KNIGHT",
            "FIREARMS_SC_FALCON_STONE",
          ],
        },
        i = Object.keys(Kd("LocationsData", t, !1).parents).map((e) =>
          e.toLocaleLowerCase(),
        );
      return (
        (e.Extensions.progression.Locations = i.reduce((i, r) => {
          const s = r.toLocaleUpperCase(),
            o = e.Extensions.progression.Locations[r];
          return (
            (i[s] =
              "h1" === t
                ? {
                    normal: {
                      Xp: o.Xp ?? 0,
                      Level: o.Level ?? 1,
                      PreviouslySeenXp: o.PreviouslySeenXp ?? 0,
                    },
                    pro1: { Xp: 0, Level: 1, PreviouslySeenXp: 0 },
                  }
                : a[s]
                  ? a[s].reduce(
                      (e, t) => (
                        (e[t] = { Xp: 0, Level: 1, PreviouslySeenXp: 0 }),
                        e
                      ),
                      {},
                    )
                  : {
                      Xp: o.Xp ?? 0,
                      Level: o.Level ?? 1,
                      PreviouslySeenXp: o.PreviouslySeenXp ?? 0,
                    }),
            i
          );
        }, {})),
        delete e.Extensions.progression.Unlockables,
        (e.Version = 1),
        LE(e, t)
      );
    }
  }
}
function NE(e) {
  return e.includes("AUSTRIA") || e.includes("SALTY") || e.includes("CAGED");
}
function RE(e, t, a) {
  const i = YE(e);
  if (!i.Extensions || 0 === Object.keys(i.Extensions).length)
    return (Ad("debug", "No extensions - skipping validation"), i);
  let r = !1;
  for (const e of [
    "PeacockEscalations",
    "PeacockFavoriteContracts",
    "PeacockPlayedContracts",
    "PeacockCompletedEscalations",
    "CPD",
  ])
    Object.hasOwn(i.Extensions, e) ||
      (Ad("debug", `Err missing property ${e}`),
      Ad("warn", "A requested user profile is missing some vital data."),
      Ad("warn", "Attempting to repair the profile automatically..."),
      "PeacockEscalations" === e && (i.Extensions.PeacockEscalations = {}),
      "PeacockCompletedEscalations" === e &&
        (i.Extensions.PeacockCompletedEscalations = []),
      "PeacockFavoriteContracts" === e &&
        (i.Extensions.PeacockFavoriteContracts = []),
      "CPD" === e && (i.Extensions.CPD = {}),
      "PeacockPlayedContracts" === e &&
        (i.Extensions.PeacockPlayedContracts = {}),
      (r = !0));
  if (
    (i.Extensions.gamepersistentdata.HitsFilterType.MyPlaylist &&
      (i.Extensions.gamepersistentdata.HitsFilterType = {
        MyHistory: "all",
        MyContracts: "all",
        MyPlaylist: "all",
      }),
    i.Extensions?.gamepersistentdata?.PersistentBool)
  )
    switch (Rd("mapDiscoveryState")) {
      case "REVEALED":
        {
          const e = Object.keys(Qd("AreaMap", !1));
          for (const t of e)
            i.Extensions.gamepersistentdata.PersistentBool[t] = !0;
        }
        break;
      case "CLOUDED":
        i.Extensions.gamepersistentdata.PersistentBool = {
          __Full: i.Extensions.gamepersistentdata.PersistentBool?.__Full ?? {},
        };
    }
  return (
    i.Version !== pE &&
      (Ad("debug", "Profile is outdated, updating..."), LE(i, t), (r = !0)),
    r &&
      ((0, Ed.writeFileSync)(
        a ?? `userdata/users/${i.Id}.json`,
        JSON.stringify(i),
      ),
      Ad("info", "Profile successfully repaired!")),
    i
  );
}
var DE = {
  LOCATION_PARENT_ICA_FACILITY: "TOKEN_OUTFIT_GREENLAND_HERO_TRAININGSUIT",
  LOCATION_PARENT_PARIS: "TOKEN_OUTFIT_PARIS_HERO_PARISSUIT",
  LOCATION_PARENT_COASTALTOWN: "TOKEN_OUTFIT_SAPIENZA_HERO_SAPIENZASUIT",
  LOCATION_COASTALTOWN_MOVIESET:
    "TOKEN_OUTFIT_SAPIENZA_HERO_SAPIENZASUIT_NOGLASSES",
  LOCATION_COASTALTOWN_EBOLA:
    "TOKEN_OUTFIT_SAPIENZA_HERO_SAPIENZASUIT_NOGLASSES",
  LOCATION_PARENT_MARRAKECH: "TOKEN_OUTFIT_MARRAKESH_HERO_MARRAKESHSUIT",
  LOCATION_PARENT_BANGKOK: "TOKEN_OUTFIT_BANGKOK_HERO_BANGKOKSUIT",
  LOCATION_PARENT_COLORADO: "TOKEN_OUTFIT_COLORADO_HERO_COLORADOSUIT",
  LOCATION_PARENT_HOKKAIDO: "TOKEN_OUTFIT_HOKKAIDO_HERO_HOKKAIDOSUIT",
  LOCATION_PARENT_NEWZEALAND: "TOKEN_OUTFIT_NEWZEALAND_HERO_NEWZEALANDSUIT",
  LOCATION_PARENT_MIAMI: "TOKEN_OUTFIT_MIAMI_HERO_MIAMISUIT",
  LOCATION_PARENT_COLOMBIA: "TOKEN_OUTFIT_COLOMBIA_HERO_COLOMBIASUIT",
  LOCATION_PARENT_MUMBAI: "TOKEN_OUTFIT_MUMBAI_HERO_MUMBAISUIT",
  LOCATION_PARENT_NORTHAMERICA:
    "TOKEN_OUTFIT_NORTHAMERICA_HERO_NORTHAMERICASUIT",
  LOCATION_PARENT_NORTHSEA: "TOKEN_OUTFIT_NORTHSEA_HERO_NORTHSEASUIT",
  LOCATION_PARENT_GREEDY: "TOKEN_OUTFIT_GREEDY_HERO_GREEDYSUIT",
  LOCATION_PARENT_OPULENT: "TOKEN_OUTFIT_OPULENT_HERO_OPULENTSUIT",
  LOCATION_PARENT_GOLDEN: "TOKEN_OUTFIT_HERO_GECKO_SUIT",
  LOCATION_PARENT_ANCESTRAL: "TOKEN_OUTFIT_ANCESTRAL_HERO_ANCESTRALSUIT",
  LOCATION_ANCESTRAL_SMOOTHSNAKE: "TOKEN_OUTFIT_ANCESTRAL_HERO_SMOOTHSNAKESUIT",
  LOCATION_PARENT_EDGY: "TOKEN_OUTFIT_EDGY_HERO_EDGYSUIT",
  LOCATION_PARENT_WET: "TOKEN_OUTFIT_WET_HERO_WETSUIT",
  LOCATION_PARENT_ELEGANT: "TOKEN_OUTFIT_ELEGANT_HERO_LLAMASUIT",
  LOCATION_PARENT_TRAPPED: "TOKEN_OUTFIT_TRAPPED_WOLVERINE_SUIT",
  LOCATION_PARENT_ROCKY: "TOKEN_OUTFIT_HERO_DUGONG_SUIT",
};
function PE(e) {
  return "h3" === e
    ? [
        "TOKEN_OUTFIT_GREENLAND_HERO_TRAININGSUIT",
        "TOKEN_OUTFIT_HOKKAIDO_HERO_HOKKAIDOSUIT",
        "TOKEN_OUTFIT_OPULENT_HERO_OPULENTSUIT",
        "TOKEN_OUTFIT_HERO_DUGONG_SUIT",
      ]
    : [];
}
function ME(e, t, a) {
  return a && eE(a, t)
    ? a
    : DE[e.Id] || DE[e.Properties.ParentLocation] || "TOKEN_OUTFIT_HITMANSUIT";
}
var UE = "00000000-0000-0000-0000-000000000000",
  wE = "https://backend.rdil.rocks/partners/hitmaps/contract",
  GE = "47fdffe9-c453-45ad-ad96-ac6f63494c40";
function vE(e, t) {
  return (
    !(void 0 === e.Activation || !Array.isArray(e.Activation.$eq)) &&
    "Completed" === e.Activation.$eq[1] &&
    t.has(e.Activation.$eq[0].substring(1))
  );
}
var BE = [
    "STILL... we are close now, 47.",
    "James Batty, the plaintiff, wants Janus to stop his annual landing of a helicopter, near the local creek.",
    "Searching for local masons in your area...",
    "I wonder what kind of curry currymaker makes",
    "Listening for uncommon guard voice lines...",
    "Mistah Jason Portman, please come to the hospital entrance. A doctor will escort you to your checkup. That was for: mistah Jason Portman.",
    "Nakamura-San, please come to the operating theatre. Stat.",
    "Ugh, my knee is so sore.",
    "Mister Prichard I presume? Hi, I'm Chen Ting. Pleasure to meet you.",
    "Find your inner... zen",
    "I love those little drones when they scoot around like that.",
    "Welcome, welcome! Hello! Good to see you. So lovely to see so many familiar faces here today.",
    "hi so i own hitman 1 and 2 i got hitman 1 and 2 on disc hitman 1 def edition and hitman 2 gold disc both on ps4 and when i got hitman 2 i downloaded the best legesy pack and all of my saves are on hitman 2 but i got rid of that game will i need both of them to get all the levels onto hitman 3 and im staying on ps4",
    "The weather is always nice in Paris.",
    "Have you seen a girl around? Short hair, with a bright green bag?",
    "The show is just about to start.",
    "Entering the Ether lab requires a uniform and a keycard... luckily, it seems both are within reach.",
    "Welcome to Bangkok, 47. The target has been in residence at the hotel for almost a month and security is tight, with several other high-profile guests also at the hotel. Good Hunting.",
  ],
  kE = { unset: 0, casual: 1, easy: 1, normal: 2, master: 4, hard: 4 };
function HE(e) {
  switch (e) {
    case 1:
      return "casual";
    case 2:
      return "normal";
    case 4:
      return "master";
    default:
      return "unset";
  }
}
function QE(e) {
  e.response
    ? Ad("debug", `Request error: code ${e.response.status}`)
    : e.request
      ? Ad("debug", "Request error: bad fetch")
      : Ad("debug", "Request error: something went wrong");
}
function KE(e, t) {
  return (
    (e?.Properties?.UnlockOrder ?? Number.POSITIVE_INFINITY) -
      (t?.Properties?.UnlockOrder ?? Number.POSITIVE_INFINITY) || 0
  );
}
function FE(e, t) {
  return (
    (e?.Properties?.UnlockLevel
      ? parseInt(e?.Properties?.UnlockLevel)
      : Number.POSITIVE_INFINITY) -
      (t?.Properties?.UnlockLevel
        ? parseInt(t?.Properties?.UnlockLevel)
        : Number.POSITIVE_INFINITY) || 0
  );
}
function xE(e) {
  if (e.includes("-")) return e;
  let t = e;
  return (
    (t = t.slice(0, 1) + "-" + t.slice(1)),
    (t = t.slice(0, 4) + "-" + t.slice(4)),
    (t = t.slice(0, 12) + "-" + t.slice(12)),
    t
  );
}
function YE(e) {
  return structuredClone(e);
}
function jE(e) {
  const t = {},
    a = Qd("allunlockables", !1).filter((e) => "disguise" === e.Type);
  for (const e of a)
    e.Subtype &&
      e.Properties.RepositoryId &&
      (t[e.Properties.RepositoryId] = e.Subtype);
  return !!t[e] && "disguise" !== t[e];
}
function VE(e) {
  const t = {},
    a = Kd("LocationsData", e, !1);
  for (const e of Object.values(a.children))
    e.Properties.ParentLocation &&
      ((t[e.Properties.ParentLocation] ??= []),
      t[e.Properties.ParentLocation].push(e.Id));
  return t;
}
function qE(e, t) {
  for (const a of e) if (!t(a)) return !1;
  return !0;
}
var WE = /^(?<major>\d+)_(?<minor>\d+)_(?<build>\d+)$/,
  XE = /^(?<major>\d+)_(?<minor>\d+)$/;
function zE(e) {
  if (!e) return;
  const t = WE.exec(e);
  return t?.groups
    ? {
        _Major: parseInt(t.groups.major, 10),
        _Minor: parseInt(t.groups.minor, 10),
        _Build: parseInt(t.groups.build, 10),
        _Revision: 0,
      }
    : void 0;
}
function JE(e) {
  if (!e) return;
  const t = XE.exec(e);
  return t?.groups
    ? {
        _Major: parseInt(t.groups.major, 10),
        _Minor: parseInt(t.groups.minor, 10),
        _Build: 0,
        _Revision: 0,
      }
    : void 0;
}
function ZE(e) {
  return (
    (e ||= 0),
    "string" == typeof e && (e = parseInt(e, 10)),
    xd.default.equal(typeof e, "number"),
    (e = Math.max(e, 0))
  );
}
var eT = "peacock:",
  tT = new (class {
    constructor() {
      ((this.handleCommand = new Zl()), (this.commandResponseCache = {}));
    }
    getCommandStatus() {
      return {
        CacheBuster: Date.now().toString(),
        Commands: this.commandResponseCache,
        IsConfirmed: !0,
        LinkedEmail: "mail@example.com",
        IOIAccountId: UE,
        IOIAccountBaseUrl: "https://account.ioi.dk",
      };
    }
    submitCommands(e) {
      if (!e.startsWith(eT)) return this.getCommandStatus();
      try {
        e.substring(8)
          .split("|")
          .forEach((e) => {
            const t = e.indexOf("?");
            let a, i;
            if (
              (t < 0
                ? ((a = e), (i = {}))
                : ((a = e.substring(0, t)),
                  (i = Object.fromEntries(
                    new URLSearchParams(e.substring(t + 1)),
                  ))),
              "clear" === a)
            ) {
              const e = i.commands?.split(",");
              for (const t of e) this.commandResponseCache[t] = void 0;
            } else
              this.commandResponseCache[a] = this.handleCommand.call(
                this.commandResponseCache[a],
                a,
                i,
              );
          });
      } catch (e) {
        Ad("error", `Failed to handle Peacock command: ${e}`);
      }
      return this.getCommandStatus();
    }
    handleCommandMap(e, t) {
      this.handleCommand.tap(e, (e, a, i) => {
        if (t.has(a)) return t.get(a)(e, i);
      });
    }
  })(),
  aT = {};
I(aT, {
  EpicH1Strategy: () => oT,
  EpicH3Strategy: () => rT,
  IOIStrategy: () => sT,
  SteamH1Strategy: () => cT,
  SteamH2Strategy: () => lT,
  SteamScpcStrategy: () => nT,
});
var iT = class {},
  rT = class extends iT {
    get() {
      return nA;
    }
  },
  sT = class extends iT {
    get() {
      return cA;
    }
  },
  oT = class extends iT {
    get() {
      return nA;
    }
  },
  nT = class extends iT {
    get() {
      return cA;
    }
  },
  cT = class extends iT {
    get() {
      return cA;
    }
  },
  lT = class extends iT {
    get() {
      return cA;
    }
  },
  dT = {};
I(dT, { setupHotListener: () => pT });
var uT = require("fs/promises");
async function pT(e, t) {
  try {
    const a = (0, uT.watch)(e, {});
    for await (const e of a) t(e);
  } catch (e) {
    if ("AbortError" === e.name) return;
    throw e;
  }
}
var $T = {};
I($T, {
  LOADOUT_SLOTS: () => TT,
  Loadouts: () => OT,
  REQUIRED_LOADOUT_SLOTS: () => bT,
  loadoutRouter: () => ST,
  loadouts: () => yT,
});
var _T,
  IT,
  AT = f(Ys()),
  fT = f(Jr()),
  mT = require("fs/promises"),
  gT = require("node:crypto");
function CT(e = 21) {
  !(function (e) {
    (!_T || _T.length < e
      ? ((_T = Buffer.allocUnsafe(128 * e)),
        gT.webcrypto.getRandomValues(_T),
        (IT = 0))
      : IT + e > _T.length && (gT.webcrypto.getRandomValues(_T), (IT = 0)),
      (IT += e));
  })((e |= 0));
  let t = "";
  for (let a = IT - e; a < IT; a++)
    t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
      63 & _T[a]
    ];
  return t;
}
var bT = [3],
  ET = "userdata/users/lop.json",
  TT = [
    "carriedweapon",
    "carrieditem",
    "concealedweapon",
    "disguise",
    "gear",
    "gear",
    "stashpoint",
  ],
  hT = {
    h1: { selected: null, loadouts: [] },
    h2: { selected: null, loadouts: [] },
    h3: { selected: null, loadouts: [] },
  },
  OT = class {
    async init() {
      const e = BI.getFs();
      if (!(await e.exists(ET)))
        return (
          (this.loadouts = hT),
          void (await e.writeFile(ET, JSON.stringify(hT)))
        );
      this.loadouts = JSON.parse((await e.readFile(ET)).toString());
      let t = !1;
      for (const e of dE) {
        for (const a of this.loadouts[e].loadouts)
          a.id || ((t = !0), (a.id = CT()));
        (this.loadouts[e].selected &&
          [0, 21].includes(this.loadouts[e].selected?.length || -1)) ||
          ((t = !0),
          (this.loadouts[e].selected =
            this.loadouts[e].loadouts.find(
              (t) => t.name === this.loadouts[e].selected,
            )?.id || ""));
      }
      t && (await (0, mT.writeFile)(ET, JSON.stringify(this.loadouts)));
    }
    createDefault(e, t = "Unnamed loadout set") {
      "scpc" === e && (e = "h1");
      const a = { name: t, id: CT(), data: {} };
      return (
        this.loadouts[e].loadouts.push(a),
        (this.loadouts[e].selected = a.id),
        a
      );
    }
    getLoadoutFor(e) {
      "scpc" === e && (e = "h1");
      const t = this.loadouts[e];
      return t.loadouts.find((e) => e.id === t.selected);
    }
    getLocationLoadout(e, t, a, i) {
      const r = {
          2:
            "h1" === t
              ? "FIREARMS_HERO_PISTOL_TACTICAL_001_SU_SKIN01"
              : "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19",
          3: ME(a, t, i),
          4: "TOKEN_FIBERWIRE",
          5: "PROP_TOOL_COIN",
        },
        s = { loadout: {} },
        o = kI(e, t);
      let n;
      if ("LEGACY" === Rd("loadoutSaving"))
        n = o.Extensions.defaultloadout?.[a?.Id] ?? r;
      else {
        let e = yT.getLoadoutFor(t);
        (e || (e = yT.createDefault(t)), (n = e.data[a?.Id] ?? r));
      }
      "LOCATION_NEWZEALAND" === a.Id &&
        "TOKEN_OUTFIT_WET_SUIT" === n[3] &&
        (n[3] = "TOKEN_OUTFIT_NEWZEALAND_HERO_NEWZEALANDSUIT");
      for (let e = 0; e < TT.length; e++) {
        const a = e,
          i = n[a] && eE(n[a], t) ? n[a] : bT.includes(e) ? r[e] : void 0;
        i && (s.loadout[a] = i);
      }
      if (["h2", "h3"].includes(t))
        for (const [e, t] of Object.entries(n))
          Number.isInteger(Number(e)) ||
            (s.briefcase = { id: e, unlockableId: t });
      return s;
    }
    async save() {
      await (0, mT.writeFile)(ET, JSON.stringify(this.loadouts));
    }
  },
  yT = new OT(),
  ST = (0, AT.Router)();
(ST.get("/all-loadouts", (e, t) => {
  t.json(yT.loadouts);
}),
  ST.patch("/update", (0, fT.json)(), async (e, t) => {
    ((yT.loadouts = e.body),
      await yT.save(),
      t.json({ message: "request completed" }));
  }),
  ST.patch("/remove", (0, fT.json)(), async (e, t) => {
    if (!e.body.gameVersion)
      return void t.status(400).json({ error: "missing gv" });
    if (!dE.includes(e.body.gameVersion))
      return void t.status(400).json({ error: "invalid gv" });
    if (!e.body.id) return void t.status(400).json({ error: "missing id" });
    const a = yT.loadouts,
      i = a[e.body.gameVersion].loadouts.filter(
        (t) => t.id !== a[e.body.gameVersion].selected,
      );
    (0 === i.length
      ? ((a[e.body.gameVersion].loadouts = []),
        yT.createDefault(e.body.gameVersion))
      : ((a[e.body.gameVersion].loadouts = i),
        (a[e.body.gameVersion].selected = i[0]?.id)),
      (yT.loadouts = a),
      await yT.save(),
      t.json({ message: "request completed" }));
  }),
  ST.post("/create", (0, fT.json)(), async (e, t) => {
    dE.includes(e.body.gameVersion)
      ? (yT.createDefault(e.body.gameVersion),
        await yT.save(),
        t.json({ message: "success" }))
      : t.status(400).json({ message: "invalid gv" });
  }));
var LT = {};
I(LT, { SNIPER_UNLOCK_TO_LOCATION: () => pO, menuDataRouter: () => uO });
var NT = {};
I(NT, {
  calculateGlobalXp: () => HT,
  calculateScore: () => QT,
  calculateSniperScore: () => KT,
  getMissionEndData: () => FT,
});
var RT = {};
I(RT, {
  createLocationsData: () => wT,
  getAllGameDestinations: () => UT,
  getCompletionPercent: () => MT,
  getDestination: () => GT,
  getDestinationCompletion: () => PT,
});
var DT = f(require("assert"));
function PT(e, t, a, i) {
  const r = Qd("MissionStories", !1),
    s = kI(i, a),
    o = jb.challengeService.getGroupedChallengeLists(
      {
        type: "ParentLocation",
        parent: e.Id,
        gameVersion: a,
        pro1Filter: "Exclude",
      },
      e.Id,
      a,
    ),
    n = Object.values(r)
      .filter((a) => (t ? a.SubLocation === t.Id : a.Location === e.Id))
      .map((e) => e.CommonRepositoryId);
  let c = 0;
  for (const e in s.Extensions.opportunityprogression) n.includes(e) && c++;
  const l = jb.challengeService.countTotalNCompletedChallenges(o, s.Id, a);
  return {
    ChallengeCompletion: l,
    OpportunityStatistics: { Count: n.length, Completed: c },
    LocationCompletionPercent: MT(
      l.CompletedChallengesCount,
      l.ChallengesCount,
      c,
      n.length,
    ),
    Location: e,
  };
}
function MT(e, t, a, i) {
  ((e ??= 0), (t ??= 0), (a ??= 0), (i ??= 0));
  const r = t + i;
  return 0 === r ? 0 : (100 * (e + a)) / r;
}
function UT(e, t) {
  const a = [],
    i = Kd("LocationsData", e, !0);
  for (const [r, s] of Object.entries(i.parents)) {
    ((s.GameAsset = null),
      (s.DisplayNameLocKey =
        "UI_LOCATION_PARENT_" + r.substring(16) + "_NAME"));
    const i = { ...PT(s, void 0, e, t), CompletionData: yA(r, t, e) };
    ("h1" === e &&
      (i.Data = {
        normal: {
          ChallengeCompletion: i.ChallengeCompletion,
          CompletionData: yA(r, t, e, "mission", "normal"),
        },
        pro1: {
          ChallengeCompletion: i.ChallengeCompletion,
          CompletionData: yA(r, t, e, "mission", "pro1"),
        },
      }),
      a.push(i));
  }
  return a;
}
function wT(e, t = !1) {
  const a = Kd("LocationsData", e, !1),
    i = Object.keys(a.children),
    r = { Data: { HasMore: !1, Page: 0, Locations: [] } };
  for (const s of i) {
    const i = a.children[s];
    if (!i.Properties.CreateContractId || i.Properties.IsHidden) continue;
    i.Properties.ParentLocation ||
      DT.default.fail("sublocation has no parent, that's illegal");
    const o = a.parents[i.Properties.ParentLocation],
      n = jb.resolveContract(i.Properties.CreateContractId, e);
    if (!n && t) continue;
    const c = {
      Location: o,
      SubLocation: i,
      Contract: { Metadata: {}, Data: {} },
    };
    (n &&
      ((n.Metadata.Entitlements = Cu(e, n.Metadata.Entitlements)),
      (c.Contract = n)),
      r.Data.Locations.push(c));
  }
  return r;
}
function GT(e, t, a) {
  const i = e.locationId,
    r = Kd("LocationsData", t, !1),
    s = r.parents[i],
    o = jb.masteryService.getMasteryDataForDestination(
      e.locationId,
      t,
      a,
      e.difficulty,
    );
  let n;
  n = "LOCATION_PARENT_ICA_FACILITY" !== i ? ("h1" === t ? o[0] : o) : {};
  const c = {
    Location: s,
    MissionData: { ...PT(s, void 0, t, a), SubLocationMissionsData: [] },
    ChallengeData: {
      Children: jb.challengeService.getChallengeDataForDestination(
        e.locationId,
        t,
        a,
        "pro1" === e.difficulty,
      ),
    },
    MasteryData: n,
  };
  if ("h1" === t && "LOCATION_PARENT_ICA_FACILITY" !== i) {
    const r = iE(a, t);
    c.DifficultyData = {
      AvailableDifficultyModes: [
        { Name: "normal", Available: !0 },
        {
          Name: "pro1",
          Available: r.some(
            (e) => e.Unlockable.Id === s.Properties.DifficultyUnlock?.pro1,
          ),
        },
      ],
      Difficulty: e.difficulty,
      LocationId: i,
    };
  }
  if ("h3" === t && "LOCATION_PARENT_ICA_FACILITY" === i) {
    const e = SA(jb.resolveContract(GE, "h3"), a, "h3");
    e && (c.VRTutorial = { UserCentricContract: e });
  }
  Ad("debug", `Looking up locations details for ${i}.`);
  const l = Object.values(r.children).filter(
    (e) => e.Properties.ParentLocation === i,
  );
  if ("pro1" === e.difficulty) {
    (0, DT.default)(
      "h1" === t,
      `${t} has requested a pro1 difficulty destination!`,
    );
    const e = {
      Location: s,
      SubLocation: s,
      Missions: [jb.missionsInLocation[t].pro1[i]]
        .map((e) => xb(e, t, a))
        .filter(Boolean),
      SarajevoSixMissions: [],
      ElusiveMissions: [],
      EscalationMissions: [],
      SniperMissions: [],
      PlaceholderMissions: [],
      CampaignMissions: [],
      CompletionData: yA(l[0].Id, a, t),
    };
    return (c.MissionData?.SubLocationMissionsData.push(e), c);
  }
  for (const e of l) {
    Ad("debug", `Looking up sublocation details for ${e.Id}`);
    const i = [],
      r = jb.missionsInLocation[t].escalations[e.Id] ?? [];
    for (const e of r) {
      const r = xb(e, t, a);
      r && i.push(r);
    }
    const o = [];
    if ("h1" !== t)
      for (const i of jb.missionsInLocation[t].sniper[e.Id] ?? []) {
        const e = xb(i, t, a);
        e && o.push(e);
      }
    const n = {
        Location: s,
        SubLocation: e,
        Missions: [],
        SarajevoSixMissions: [],
        ElusiveMissions: [],
        EscalationMissions: i,
        SniperMissions: o,
        PlaceholderMissions: [],
        CampaignMissions: [],
        CompletionData: yA(e.Id, a, t),
      },
      l = [
        [void 0, "Missions"],
        ["elusive", "ElusiveMissions"],
        ["sarajevo", "SarajevoSixMissions"],
      ];
    for (const i of l) {
      const r = i[0]
        ? jb.missionsInLocation[t][i[0]][e.Id]
        : jb.missionsInLocation[t][e.Id];
      if (r)
        for (const e of r) {
          const r = xb(e, t, a);
          n[i[1]].push(r);
        }
    }
    c.MissionData?.SubLocationMissionsData.push(n);
  }
  return c;
}
var vT = {};
function BT(e) {
  const t = Qd("Playstyles", !0);
  t.forEach((e) => {
    e.Score = 0;
  });
  const a = [],
    i = [],
    r = [];
  return (
    e.kills?.forEach((e) => {
      ("ballistic" === e.KillClass
        ? ("pistol" === e.KillItemCategory && (t[1].Score += 6e3),
          e.IsHeadshot ? (t[0].Score += 6e3) : (t[0].Score -= 2e3),
          a.includes(e.KillItemCategory)
            ? (t[2].Score -= 2e3)
            : ((t[2].Score += 6e3), a.push(e.KillItemCategory)),
          "shotgun" === e.KillItemCategory && (t[7].Score += 6e3),
          "assaultrifle" === e.KillItemCategory && (t[9].Score += 6e3),
          "sniperrifle" === e.KillItemCategory && (t[10].Score += 6e3),
          "smg" === e.KillItemCategory && (t[15].Score += 6e3))
        : "melee" === e.KillClass
          ? ("accident" === e.KillMethodBroad &&
              void 0 === e.KillItemCategory &&
              (t[4].Score += 6e3),
            "fiberwire" === e.KillMethodStrict && (t[13].Score += 6e3),
            "unarmed" === e.KillMethodBroad && (t[16].Score += 6e3),
            "accident_drown" === e.KillMethodStrict && (t[6].Score += 6e3),
            "accident" === e.KillMethodBroad &&
              (r.includes(e.KillMethodStrict)
                ? (t[8].Score -= 2e3)
                : ((t[8].Score += 6e3), r.push(e.KillMethodStrict))),
            (t[5].Score += 6e3))
          : "explosion" === e.KillClass
            ? ("explosive" === e.KillMethodBroad && (t[12].Score += 6e3),
              "accident" === e.KillMethodBroad && (t[19].Score += 6e3))
            : "unknown" === e.KillClass
              ? ("accident_electric" === e.KillMethodStrict &&
                  (t[11].Score += 6e3),
                "accident_suspended_object" === e.KillMethodStrict &&
                  (t[14].Score += 6e3),
                "accident_burn" === e.KillMethodStrict && (t[18].Score += 6e3),
                r.includes(e.KillMethodStrict)
                  ? (t[8].Score -= 2e3)
                  : ((t[8].Score += 6e3), r.push(e.KillMethodStrict)))
              : "poison" === e.KillClass && (t[17].Score += 6e3),
        i.includes(e.KillClass)
          ? (t[3].Score -= 2e3)
          : ((t[3].Score += 6e3), i.push(e.KillClass)));
    }),
    t.sort((e, t) => (e.Score > t.Score ? -1 : t.Score > e.Score ? 1 : 0)),
    t
  );
}
I(vT, { calculatePlaystyle: () => BT });
var kT = f(require("assert"));
function HT(e, t) {
  const a = [];
  let i = 0;
  for (const r of Object.keys(e.challengeContexts || {})) {
    const s = e.challengeContexts[r];
    if (s.timesCompleted <= 0) continue;
    const o = jb.challengeService.getChallengeById(r, t);
    if (!o?.Xp || !o.Tags.includes("global")) continue;
    const n = o.Xp * s.timesCompleted;
    i += n;
    const c = {
      ChallengeId: o.Id,
      ChallengeTags: o.Tags,
      ChallengeName: o.Name,
      ChallengeImageUrl: o.ImageName,
      ChallengeDescription: o.Description,
      XPGain: n,
      IsGlobal: !0,
      IsActionReward: o.Tags.includes("actionreward"),
      Drops: o.Drops,
    };
    a.push(c);
  }
  return { completedChallenges: a, xp: i };
}
function QT(e, t, a, i) {
  const r = "vanilla" === Rd("legacyNoticedKillScoring"),
    s = [
      {
        headline: "UI_SCORING_SUMMARY_OBJECTIVES",
        bonusId: "AllObjectivesCompletedBonus",
        condition:
          "h1" === e ||
          qE(
            t.objectives.values(),
            (e) =>
              e.ExcludeFromScoring ||
              t.completedObjectives.has(e.Id) ||
              (e.IgnoreIfInactive && !vE(e, t.completedObjectives)) ||
              "Success" === t.objectiveStates.get(e.Id),
          ),
        fractionNumerator: 2,
        fractionDenominator: 3,
      },
      {
        headline: "UI_SCORING_SUMMARY_NOT_SPOTTED",
        bonusId: "Unspotted",
        condition: [...t.witnesses, ...t.spottedBy].every(
          (a) => ("h1" !== e && t.targetKills.has(a)) || t.npcKills.has(a),
        ),
      },
      {
        headline: "UI_SCORING_SUMMARY_NO_NOTICED_KILLS",
        bonusId: "NoWitnessedKillsBonus",
        condition:
          "h1" === e && r
            ? t.lastKill.legacyIsUnnoticed
            : [...t.killsNoticedBy].every(
                (e) => t.targetKills.has(e) || t.npcKills.has(e),
              ),
      },
      {
        headline: "UI_SCORING_SUMMARY_NO_BODIES_FOUND",
        bonusId: "NoBodiesFound",
        condition:
          !t.legacyHasBodyBeenFound &&
          [...t.bodiesFoundBy].every(
            (a) => ("h1" !== e && t.targetKills.has(a)) || t.npcKills.has(a),
          ),
      },
      {
        headline: "UI_SCORING_SUMMARY_NO_RECORDINGS",
        bonusId: "SecurityErased",
        condition: "NOT_SPOTTED" === t.recording || "ERASED" === t.recording,
      },
    ],
    o = !0 === a?.Metadata.NonTargetKillsAllowed,
    n = t.npcKills.size + t.crowdNpcKills;
  let c = 0;
  const l = [],
    d = [],
    u = [],
    p = {
      type: "summary",
      count: "",
      scoreIsFloatingType: !1,
      fractionNumerator: 0,
      fractionDenominator: 0,
      scoreTotal: 2e4,
    };
  for (const e of s) {
    const t = {
        Score: 2e4,
        Id: e.bonusId,
        FractionNumerator: e.fractionNumerator || 0,
        FractionDenominator: e.fractionDenominator || 0,
      },
      a = Object.assign({}, p);
    ((a.headline = e.headline),
      (a.fractionNumerator = e.fractionNumerator || 0),
      (a.fractionDenominator = e.fractionDenominator || 0),
      e.condition
        ? ((c += 2e4), l.push(a), d.push(t))
        : ((t.Score = 0), (a.scoreTotal = 0), l.push(a), u.push(t)));
  }
  (0 === n || o
    ? l.push(
        Object.assign(Object.assign({}, p), {
          headline: "UI_SCORING_SUMMARY_KILL_PENALTY",
          count: "",
          scoreTotal: 0,
        }),
      )
    : (l.push(
        Object.assign(Object.assign({}, p), {
          headline: "UI_SCORING_SUMMARY_KILL_PENALTY",
          count: `${n}x-5000`,
          scoreTotal: -5e3 * n,
        }),
      ),
      (c += -5e3 * n)),
    (c = Math.max(0, c)));
  const $ = Math.floor(i / 3600),
    _ = Math.floor((i - 3600 * $) / 60),
    I = Math.floor(i - 3600 * $ - 60 * _);
  let A = 0;
  const f = [
    [0, 1.1],
    [300, 0.7],
    [900, 0.6],
    [17100, 0],
  ];
  let m, g;
  for (const [e, t] of f) {
    if (i > e) {
      ((m = e), (g = t));
      continue;
    }
    A = c * (g - ((g - t) * (i - m)) / (e - m));
    break;
  }
  A = Math.round(A);
  const C = c + A;
  (d.push({
    Score: A,
    Id: "SwiftExecution",
    FractionNumerator: 0,
    FractionDenominator: 0,
  }),
    l.push(
      Object.assign(Object.assign({}, p), {
        headline: "UI_SCORING_SUMMARY_TIME",
        count: `${`0${$}`.slice(-2)}:${`0${_}`.slice(-2)}:${`0${I}`.slice(-2)}`,
        scoreTotal: A,
      }),
    ));
  for (const e of ["total", "subtotal"])
    l.push(
      Object.assign(Object.assign({}, p), {
        type: e,
        headline: `UI_SCORING_SUMMARY_${e.toUpperCase()}`,
        scoreTotal: C,
      }),
    );
  let b =
    5 - [...s, { condition: 0 === n || o }].filter((e) => !e.condition).length;
  b = b < 0 ? 0 : b;
  return {
    stars: b,
    scoringHeadlines: l,
    achievedMasteries: [
      {
        score: -5e3 * n,
        RatioParts: n,
        RatioTotal: n,
        Id: "KillPenaltyMastery",
        BaseScore: -5e3,
      },
    ],
    awardedBonuses: d,
    failedBonuses: u,
    silentAssassin:
      [...s.slice(1), { condition: 0 === n }].every((e) => e.condition) &&
      !t.silentAssassinLost,
    score: c,
    scoreWithBonus: C,
  };
}
function KT(e, t, a) {
  const i = Math.floor(t / 60),
    r = Math.floor(t % 60),
    s = Math.floor(1e3 * ((t % 60) - r)),
    o = e.firstKillTimestamp ?? e.timerStart,
    n = e.timerEnd - o;
  let c = 0;
  const l = [
    [0, 5e4],
    [240, 4e4],
    [480, 35e3],
    [900, 0],
  ];
  let d = 0,
    u = 0;
  for (const [e, t] of l) {
    if (!(n > e)) {
      c = u - ((u - t) * (n - d)) / (e - d);
      break;
    }
    ((d = e), (u = t));
  }
  c = Math.floor(c);
  const p = {
      type: "summary",
      count: "",
      scoreIsFloatingType: !1,
      fractionNumerator: 0,
      fractionDenominator: 0,
      scoreTotal: 0,
    },
    $ = e.scoring?.Context?.TotalScore,
    _ = e.scoring?.Settings.challenges.Unlockables.reduce((e, t) => {
      const i = a.find((e) => e.Unlockable.Id === t);
      return i ? e + i.Unlockable.Properties.Multiplier : e;
    }, 1);
  (0, kT.default)("number" == typeof _, "challengeMultiplier is falsey/NaN");
  const I = 0 * (e.scoring?.Settings.bulletsused.penalty || 0),
    A =
      "Failure" !==
      e.challengeContexts?.["029c4971-0ddd-47ab-a568-17b007eec04e"].state,
    f = A ? e.scoring?.Settings.silentassassin.score : 0,
    m = A ? e.scoring?.Settings.silentassassin.multiplier : 1,
    g = $ + c + f - I,
    C = Math.round(g * _ * m),
    b = [
      { headline: "UI_SNIPERSCORING_SUMMARY_BASESCORE", scoreTotal: $ },
      {
        headline: "UI_SNIPERSCORING_SUMMARY_BULLETS_MISSED_PENALTY",
        scoreTotal: I,
      },
      {
        headline: "UI_SNIPERSCORING_SUMMARY_TIME_BONUS",
        count: `${String(i).padStart(2, "0")}:${String(r).padStart(2, "0")}.${String(s).padStart(3, "0")}`,
        scoreTotal: c,
      },
      {
        headline: "UI_SNIPERSCORING_SUMMARY_SILENT_ASSASIN_BONUS",
        scoreTotal: f,
      },
      { headline: "UI_SNIPERSCORING_SUMMARY_SUBTOTAL", scoreTotal: g },
      {
        headline: "UI_SNIPERSCORING_SUMMARY_CHALLENGE_MULTIPLIER",
        scoreIsFloatingType: !0,
        scoreTotal: _,
      },
      {
        headline: "UI_SNIPERSCORING_SUMMARY_SILENT_ASSASIN_MULTIPLIER",
        scoreIsFloatingType: !0,
        scoreTotal: m,
      },
      {
        type: "total",
        headline: "UI_SNIPERSCORING_SUMMARY_TOTAL",
        scoreTotal: C,
      },
    ].map((e) => Object.assign(Object.assign({}, p), e));
  return [
    {
      FinalScore: C,
      BaseScore: $,
      TotalChallengeMultiplier: _,
      BulletsMissed: 0,
      BulletsMissedPenalty: I,
      TimeTaken: t,
      TimeBonus: c,
      SilentAssassin: A,
      SilentAssassinBonus: f,
      SilentAssassinMultiplier: m,
    },
    b,
  ];
}
async function FT(e, t, a, i) {
  const r = Xm.get(e.contractSessionId || "");
  (kT.default.ok(r, "contract session not found"),
    (0, kT.default)(
      r.userId === t.unique_name,
      "requested score for other user's session",
    ),
    jb.hooks.onMissionEnd.call(r));
  const s = kI(t.unique_name, a),
    o = i ? structuredClone(s) : s,
    n = jb.resolveContract(r.contractId, a, !1);
  if ((kT.default.ok(n, "contract not found"), fA.includes(n.Metadata.Type))) {
    const e = n.Metadata.InGroup ?? n.Metadata.Id;
    (kT.default.ok(e, `Unregistered escalation group ${r.contractId}`),
      o.Extensions.PeacockEscalations[e] ||
        (o.Extensions.PeacockEscalations[e] = 1));
    const s = { LastPlayedAt: new Date().getTime(), IsEscalation: !0 },
      c = CA(jb.resolveContract(e, a));
    e: if (o.Extensions.PeacockEscalations[e] === c) {
      if (
        (o.Extensions.PeacockCompletedEscalations?.includes(e) ||
          o.Extensions.PeacockCompletedEscalations.push(e),
        (s.Completed = !0),
        ("h1" === a && 5 !== c) || i)
      )
        break e;
      qm(t.unique_name, {
        Name: "AchievementEscalated",
        Value: { Location: n.Metadata.Location },
        Version: oE,
      });
    } else o.Extensions.PeacockEscalations[e] += 1;
    (o.Extensions.PeacockPlayedContracts[e] ||
      (o.Extensions.PeacockPlayedContracts[e] = {}),
      (o.Extensions.PeacockPlayedContracts[e] = s),
      i || KI(t.unique_name, a));
  } else if (lE.includes(n.Metadata.Type)) {
    const e = n.Metadata.Id;
    (o.Extensions.PeacockPlayedContracts[e] ||
      (o.Extensions.PeacockPlayedContracts[e] = {}),
      (o.Extensions.PeacockPlayedContracts[e] = {
        LastPlayedAt: new Date().getTime(),
        Completed: !0,
      }),
      i || KI(t.unique_name, a));
  }
  const c = hA(n.Metadata.Location, a),
    l = c ? c.Properties?.ParentLocation : n.Metadata.Location;
  (kT.default.ok(
    l,
    `location ${c?.Properties?.ParentLocation || n.Metadata.Location} not found (trying to resolve parent)`,
  ),
    "h1" === a && (e.masteryUnlockableId = n.Metadata.Difficulty ?? "normal"));
  const d = n.Metadata.Opportunities,
    u = d?.length ?? 0,
    p = d?.filter((e) => e in o.Extensions.opportunityprogression).length ?? 0,
    $ = jb.challengeService.getGroupedChallengeLists(
      {
        type: "ParentLocation",
        parent: l,
        gameVersion: a,
        pro1Filter: "pro1" === n.Metadata.Difficulty ? "Only" : "Exclude",
      },
      l,
      a,
    ),
    _ = jb.challengeService.getChallengesForContract(
      r.contractId,
      a,
      t.unique_name,
      r.difficulty,
    ),
    I = jb.challengeService.countTotalNCompletedChallenges($, o.Id, a),
    A = jb.challengeService.countTotalNCompletedChallenges(_, o.Id, a),
    f = MT(I.CompletedChallengesCount, I.ChallengesCount, p, u),
    m = o.Extensions.progression.PlayerProfileXP,
    g = HT(r, a);
  let C = 0,
    b = g.xp;
  const E = Object.values({
    ...$,
    ..._,
    ...(Object.keys(_).includes("elusive") && { elusive: _.elusive }),
  })
    .flat()
    .filter(
      (e) =>
        !e.Tags.includes("global") &&
        jb.challengeService.fastGetIsUnticked(o, e.Id),
    );
  for (const e of E) {
    const r = t.unique_name;
    ((o.Extensions.ChallengeProgression[e.Id].Ticked = !0),
      i || KI(r, a),
      C++,
      (b += e.Rewards.MasteryXP),
      g.completedChallenges.push({
        ChallengeId: e.Id,
        ChallengeTags: e.Tags,
        ChallengeName: e.Name,
        ChallengeImageUrl: e.ImageName,
        ChallengeDescription: e.Description,
        XPGain: e.Rewards.MasteryXP,
        IsGlobal: !1,
        IsActionReward: e.Tags.includes("actionreward"),
        Drops: e.Drops,
      }));
  }
  let T = yA(
    n.Metadata.Location,
    t.unique_name,
    a,
    n.Metadata.Type,
    e.masteryUnlockableId,
  );
  const h = jb.masteryService.getMasteryPackage(l, a),
    O = T.PreviouslySeenXp ? T.PreviouslySeenXp : T.XP - b;
  let y = gE(O, h?.XpPerLevel);
  const S = T.XP;
  let L = gE(S, h?.XpPerLevel);
  const N = o.Extensions.progression.Locations;
  (e.masteryUnlockableId ||
    ((N[l] ??= { Xp: 0, Level: 1, PreviouslySeenXp: S }),
    (N[l].PreviouslySeenXp = S)),
    i || KI(t.unique_name, a));
  let R = 1,
    D = [0];
  h &&
    ((R =
      (e.masteryUnlockableId
        ? h.SubPackages?.find((t) => t.Id === e.masteryUnlockableId)?.MaxLevel
        : h.MaxLevel) || AE),
    (D = Array.from({ length: R }, (e, t) => CE(t + 1, h.XpPerLevel))));
  const P = gE(m.Total - b, h?.XpPerLevel),
    M = m.Total,
    U = gE(M, h?.XpPerLevel),
    w = [];
  for (let e = P; e <= U + 1; e++) w.push(CE(e, h?.XpPerLevel));
  const G = P - 1,
    v = r.timerEnd - r.timerStart,
    B = BT(r);
  let k = 0 !== B[0].Score ? B[0] : void 0;
  const H = QT(a, r, n, v),
    Q = { Payout: 0, PayoutsCompleted: [], PayoutsFailed: [] };
  if ("evergreen" === n.Metadata.Type) {
    const e = Qd("EvergreenGameChangerProperties", !0);
    let t = 0;
    (Object.keys(e).forEach((a) => {
      const i = e[a],
        s = i.Objectives?.find((e) => "condition" === e.Category),
        o = i.Objectives?.find(
          (e) => "secondary" === e.Category && e.Definition?.Context?.MyPayout,
        );
      if (s && o && "Success" === r.objectiveStates.get(s.Id)) {
        const e = r.objectiveContexts.get(o.Id),
          a = {
            Name: i.Name,
            Payout: parseInt(e?.MyPayout || "0"),
            IsPrestige: i.IsPrestigeObjective || !1,
          };
        r.evergreen?.failed || "Success" !== r.objectiveStates.get(o.Id)
          ? Q.PayoutsFailed.push(a)
          : ((t += a.Payout), Q.PayoutsCompleted.push(a));
      }
    }),
      (Q.Payout = t),
      (Q.EndStateEventName = r.evergreen?.scoringScreenEndState),
      (D = bE),
      (y = EE(O)),
      (L = T.Level),
      H.silentAssassin &&
        (k = {
          Id: "595f6ff1-85bf-4e4f-a9ee-76038a455648",
          Name: "UI_PLAYSTYLE_ICA_STEALTH_ASSASSIN",
          Type: "STEALTH_ASSASSIN",
          Score: 0,
        }),
      (H.silentAssassin = !1),
      (H.stars = 0));
  }
  let K,
    F,
    x = {
      Total: H.scoreWithBonus,
      AchievedMasteries: H.achievedMasteries,
      AwardedBonuses: H.awardedBonuses,
      TotalNoMultipliers: H.score,
      TimeUsedSecs: v,
      StarCount: H.stars,
      FailedBonuses: H.failedBonuses,
      SilentAssassin: H.silentAssassin,
    };
  if ("sniper" === n.Metadata.Type) {
    const s = iE(t.unique_name, a),
      [c, d] = KT(r, v, s);
    ((F = c),
      i ||
        jb.progressionService.grantProfileProgression(
          0,
          c.FinalScore,
          [],
          r,
          o,
          l,
          e.masteryUnlockableId,
        ),
      (D = hE),
      (y = OE(O)),
      (T = yA(
        n.Metadata.Location,
        t.unique_name,
        a,
        "sniper",
        e.masteryUnlockableId,
      )),
      (L = T.Level),
      (K = {
        Id: T.Id,
        Level: T.Level,
        LevelInfo: D,
        Name: T.Name,
        XP: T.XP,
        XPGain: T.Level === T.MaxLevel ? 0 : c.FinalScore,
      }),
      (o.Extensions.progression.Locations[l][
        e.masteryUnlockableId
      ].PreviouslySeenXp = T.XP),
      i || KI(t.unique_name, a),
      (T = yA(n.Metadata.Location, t.unique_name, a)),
      (x = void 0),
      (k = void 0),
      (H.stars = 0),
      (H.scoringHeadlines = d));
  }
  let Y = [];
  if (L - y > 0) {
    const r = jb.masteryService.getMasteryDataForSubPackage(
      l,
      e.masteryUnlockableId,
      a,
      t.unique_name,
    );
    (r &&
      (Y = r.Drops.filter((e) => e.Level > y && e.Level <= L).map((e) => ({
        Unlockable: e.Unlockable,
      }))),
      i ||
        qm(t.unique_name, {
          Name: "Progression_LevelGain",
          Value: { Location: n.Metadata.Location, NewLevel: L },
          Version: oE,
        }));
  }
  if (!i && Rd("enableMasteryProgression")) {
    const e = iE(t.unique_name, a),
      i = Y.filter(
        (t) => !e.some((e) => e.Unlockable.Id === t.Unlockable.Id),
      ).map((e) => e.Unlockable);
    rE(t.unique_name, i);
  }
  const j = g.completedChallenges.reduce((e, t) => {
      if (t?.Drops?.length) {
        const i = tE(t.Drops, a);
        delete t.Drops;
        for (const a of i) a && e.push({ Unlockable: a, SourceChallenge: t });
      }
      return e;
    }, []),
    V = {
      MissionReward: {
        LocationProgression: {
          LevelInfo: D,
          XP: T.XP,
          Level: T.Level,
          Completion: T.Completion,
          XPGain: T.Level === R ? 0 : b,
          HideProgression: h?.HideProgression || !1,
        },
        ProfileProgression: {
          LevelInfo: w,
          LevelInfoOffset: G,
          XP: M,
          Level: U,
          XPGain: b,
        },
        Challenges: g.completedChallenges,
        Drops: [...Y, ...j],
        OpportunityRewards: [],
        UnlockableProgression: K,
        CompletionData: T,
        ChallengeCompletion: I,
        ContractChallengeCompletion: A,
        OpportunityStatistics: { Count: u, Completed: p },
        LocationCompletionPercent: f,
      },
      ScoreOverview: {
        XP: T.XP,
        Level: T.Level,
        Completion: T.Completion,
        XPGain: 0,
        ChallengesCompleted: C,
        LocationHideProgression: h?.HideProgression || !1,
        ProdileId1: t.unique_name,
        stars: H.stars,
        ScoreDetails: { Headlines: H.scoringHeadlines },
        ContractScore: x,
        SniperChallengeScore: F,
        SilentAssassin: x?.SilentAssassin || F?.SilentAssassin || !1,
        NewRank: 1,
        RankCount: 1,
        Rank: 1,
        FriendsRankCount: 1,
        FriendsRank: 1,
        IsPartOfTopScores: !1,
        PlayStyle: k,
        IsNewBestScore: !1,
        IsNewBestTime: !1,
        IsNewBestStars: !1,
        Evergreen: Q,
      },
    };
  return (
    i ||
      (Rd("autoSplitterForceSilentAssassin")
        ? V.ScoreOverview.SilentAssassin
          ? await um.completeMission(v)
          : await um.failMission(v)
        : await um.completeMission(v),
      !0 === Rd("leaderboards") &&
        r.compat &&
        "vsrace" !== n.Metadata.Type &&
        "evergreen" !== n.Metadata.Type &&
        "sniper" !== n.Metadata.Type &&
        (await (async function (e, t, a, i, r, s) {
          try {
            const o = Rd("leaderboardsHost");
            await O_.post(
              `${o}/leaderboards/contracts/${e.contractId}/${e.gameVersion}/${t.platform}/${HE(e.difficulty)}`,
              {
                username: a.Gamertag,
                platformId: "epic" === t.platform ? a.EpicId : a.SteamId,
                score: i.scoreWithBonus,
                data: {
                  Score: {
                    AchievedMasteries:
                      r.ScoreOverview.ContractScore?.AchievedMasteries,
                    AwardedBonuses:
                      r.ScoreOverview.ContractScore?.AwardedBonuses,
                    TotalNoMultipliers:
                      r.ScoreOverview.ContractScore?.TotalNoMultipliers,
                    TimeUsedSecs: r.ScoreOverview.ContractScore?.TimeUsedSecs,
                    FailedBonuses: null,
                    IsVR: !1,
                    SilentAssassin: r.ScoreOverview.SilentAssassin,
                    StarCount: i.stars,
                  },
                  GroupIndex: 0,
                  SniperChallengeScore: s,
                  PlayStyle: r.ScoreOverview.PlayStyle?.Name,
                  Description: "UI_MENU_SCORE_CONTRACT_COMPLETED",
                  ContractSessionId: e.Id,
                  Headlines: r.ScoreOverview.ScoreDetails.Headlines,
                },
              },
              { headers: { "Peacock-Version": nE } },
            );
          } catch (e) {
            (QE(e),
              Ad(
                "warn",
                "Failed to commit leaderboards data! Either you or the server may be offline.",
              ));
          }
        })(r, t, o, H, V, F))),
    V
  );
}
var xT = f(Ys()),
  YT = {};
function jT(e, t) {
  const a = Qd("ContractsTemplate", !1),
    i = kI(e.jwt.unique_name, e.gameVersion),
    r = jb.resolveContract(uE, e.gameVersion);
  t.json({
    template: a,
    data: {
      CreateContractTutorial: SA(r, e.jwt.unique_name, e.gameVersion),
      LocationsData: wT(e.gameVersion, !0),
      FilterData: Kd("FilterData", e.gameVersion, !1),
      PlayerProfileXpData: {
        XP: i.Extensions.progression.PlayerProfileXP.Total,
        Level: i.Extensions.progression.PlayerProfileXP.ProfileLevel,
        MaxLevel: mE(e.gameVersion),
      },
    },
  });
}
async function VT(e, t, a, i) {
  const r = _E(t),
    s = YA.get(e);
  if (!s) return void Ad("warn", `No authentication for user ${e}!`);
  const o = await s._useService(
    0 === i
      ? `https://${r}.hitman.io/profiles/page/ContractSearch?sorting=`
      : `https://${r}.hitman.io/profiles/page/ContractSearchPaginate?page=${i}&sorting=`,
    !1,
    a,
  );
  for (const e of o.data.data.Data.Contracts) {
    const t = e.UserCentricContract.Contract;
    jb.fetchedContracts.set(t.Metadata.Id, t);
  }
  return (
    Yb(
      o.data.data.Data.Contracts.map(
        (e) => e.UserCentricContract.Contract.Metadata.PublicId,
      ).filter(Boolean),
      t,
    ),
    o.data.data
  );
}
I(YT, { contractsModeHome: () => jT, officialSearchContract: () => VT });
var qT = Object.defineProperty,
  WT = (e, t, a) =>
    ((e, t, a) =>
      t in e
        ? qT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
        : (e[t] = a))(e, "symbol" != typeof t ? t + "" : t, a),
  XT = class {},
  zT = class e extends XT {
    constructor(e) {
      var t;
      (super(),
        WT(this, "_name"),
        WT(this, "_rngFn"),
        (this._name = null != (t = e.name) ? t : "function"),
        (this._rngFn = e));
    }
    get name() {
      return this._name;
    }
    next() {
      return this._rngFn();
    }
    clone() {
      return new e(this._rngFn);
    }
  };
function JT(e) {
  switch (typeof e) {
    case "object":
      if (e instanceof XT) return e;
      break;
    case "function":
      return new zT(e);
    default:
      return new eh(e);
  }
  throw new Error(`invalid RNG seed or instance "${e}"`);
}
function ZT(e, t) {
  for (let a = t.length - 1; a > 0; a -= 1) {
    const i = Math.floor(e.next() * (a + 1)),
      r = t[a];
    ((t[a] = t[i]), (t[i] = r));
  }
}
var eh = class e extends XT {
    constructor(e = crypto.randomUUID()) {
      (super(),
        WT(this, "_seed"),
        WT(this, "i"),
        WT(this, "j"),
        WT(this, "S"),
        (this._seed = e));
      const t = (function (e, t) {
          var a;
          const i = `${e}`;
          let r = 0,
            s = 0;
          for (; s < i.length;)
            t[255 & s] =
              255 &
              ((r ^= 19 * (null != (a = t[255 & s]) ? a : 0)) +
                i.charCodeAt(s++));
          return t.length ? t : [0];
        })(e, []),
        a = [],
        i = t.length;
      ((this.i = 0), (this.j = 0), (this.S = a));
      let r = 0;
      for (; r <= 255;) a[r] = r++;
      for (let e = 0, r = 0; e <= 255; e++) {
        const s = a[e];
        ((r = 255 & (r + t[e % i] + s)), (a[e] = a[r]), (a[r] = s));
      }
      this.g(256);
    }
    get name() {
      return "arc4";
    }
    next() {
      let e = this.g(6),
        t = 281474976710656,
        a = 0;
      for (; e < 4503599627370496;)
        ((e = 256 * (e + a)), (t *= 256), (a = this.g(1)));
      for (; e >= 9007199254740992;) ((e /= 2), (t /= 2), (a >>>= 1));
      return (e + a) / t;
    }
    g(e) {
      const { S: t } = this;
      let { i: a, j: i } = this,
        r = 0;
      for (; e--;) {
        a = 255 & (a + 1);
        const e = t[a];
        ((t[i] = e),
          (i = 255 & (i + e)),
          (t[a] = t[i]),
          (r = 256 * r + t[255 & (t[a] + e)]));
      }
      return ((this.i = a), (this.j = i), r);
    }
    clone() {
      return new e(this._seed);
    }
  },
  th = class e extends XT {
    get name() {
      return "Math.random";
    }
    next() {
      return Math.random();
    }
    clone() {
      return new e();
    }
  };
function ah(e) {
  return new ih(e);
}
var ih = class {
  constructor(e) {
    (WT(this, "n"),
      WT(this, "isInt", () => {
        if (Number.isInteger(this.n)) return this;
        throw new Error(`Expected number to be an integer, got ${this.n}`);
      }),
      WT(this, "isPositive", () => {
        if (this.n > 0) return this;
        throw new Error(`Expected number to be positive, got ${this.n}`);
      }),
      WT(this, "lessThan", (e) => {
        if (this.n < e) return this;
        throw new Error(`Expected number to be less than ${e}, got ${this.n}`);
      }),
      WT(this, "greaterThanOrEqual", (e) => {
        if (this.n >= e) return this;
        throw new Error(
          `Expected number to be greater than or equal to ${e}, got ${this.n}`,
        );
      }),
      WT(this, "greaterThan", (e) => {
        if (this.n > e) return this;
        throw new Error(
          `Expected number to be greater than ${e}, got ${this.n}`,
        );
      }),
      (this.n = e));
  }
};
var rh = [
    0, 0, 0.6931471805599453, 1.791759469228055, 3.1780538303479458,
    4.787491742782046, 6.579251212010101, 8.525161361065415, 10.60460290274525,
    12.801827480081469,
  ],
  sh = (e) => rh[e];
function oh(e, t = 0, a = 1) {
  return () => e.next() * (a - t) + t;
}
function nh(e) {
  return () => e.next() >= 0.5;
}
function ch(e, t = 0, a = 1) {
  return (
    void 0 === a && ((a = void 0 === t ? 1 : t), (t = 0)),
    ah(t).isInt(),
    ah(a).isInt(),
    () => Math.floor(e.next() * (a - t + 1) + t)
  );
}
var lh = new (class e {
    constructor(e = new th()) {
      (WT(this, "_rng"), WT(this, "_cache", {}), (this._rng = JT(e)));
    }
    get rng() {
      return this._rng;
    }
    clone(t = this.rng.clone()) {
      return new e(t);
    }
    use(e) {
      ((this._rng = JT(e)), (this._cache = {}));
    }
    next() {
      return this._rng.next();
    }
    float(e, t) {
      return this.uniform(e, t)();
    }
    int(e, t) {
      return this.uniformInt(e, t)();
    }
    integer(e, t) {
      return this.uniformInt(e, t)();
    }
    bool() {
      return this.uniformBoolean()();
    }
    boolean() {
      return this.uniformBoolean()();
    }
    choice(e) {
      if (!Array.isArray(e))
        throw new TypeError(
          "Random.choice expected input to be an array, got " + typeof e,
        );
      const t = e.length;
      if (t > 0) {
        return e[this.uniformInt(0, t - 1)()];
      }
    }
    shuffle(e) {
      if (!Array.isArray(e))
        throw new TypeError(
          "Random.shuffle expected input to be an array, got " + typeof e,
        );
      const t = [...e];
      return (ZT(this.rng, t), t);
    }
    shuffler(e) {
      if (!Array.isArray(e))
        throw new TypeError(
          "Random.shuffler expected input to be an array, got " + typeof e,
        );
      const t = this.rng,
        a = [...e];
      return () => (ZT(t, a), [...a]);
    }
    uniform(e, t) {
      return this._memoize("uniform", oh, e, t);
    }
    uniformInt(e, t) {
      return this._memoize("uniformInt", ch, e, t);
    }
    uniformBoolean() {
      return this._memoize("uniformBoolean", nh);
    }
    normal(e, t) {
      return (function (e, t = 0, a = 1) {
        return () => {
          let i, r, s;
          do {
            ((i = 2 * e.next() - 1),
              (r = 2 * e.next() - 1),
              (s = i * i + r * r));
          } while (!s || s > 1);
          return t + a * r * Math.sqrt((-2 * Math.log(s)) / s);
        };
      })(this, e, t);
    }
    logNormal(e, t) {
      return (function (e, t = 0, a = 1) {
        const i = e.normal(t, a);
        return () => Math.exp(i());
      })(this, e, t);
    }
    bernoulli(e) {
      return (function (e, t = 0.5) {
        return (
          ah(t).greaterThanOrEqual(0).lessThan(1),
          () => Math.floor(e.next() + t)
        );
      })(this, e);
    }
    binomial(e, t) {
      return (function (e, t = 1, a = 0.5) {
        return (
          ah(t).isInt().isPositive(),
          ah(a).greaterThanOrEqual(0).lessThan(1),
          () => {
            let i = 0,
              r = 0;
            for (; i++ < t;) e.next() < a && r++;
            return r;
          }
        );
      })(this, e, t);
    }
    geometric(e) {
      return (function (e, t = 0.5) {
        ah(t).greaterThan(0).lessThan(1);
        const a = 1 / Math.log(1 - t);
        return () => Math.floor(1 + Math.log(e.next()) * a);
      })(this, e);
    }
    poisson(e) {
      return (function (e, t = 1) {
        if ((ah(t).isPositive(), t < 10)) {
          const a = Math.exp(-t);
          return () => {
            let i = a,
              r = 0,
              s = e.next();
            for (; s > i;) ((s -= i), (i = (t * i) / ++r));
            return r;
          };
        }
        {
          const a = Math.sqrt(t),
            i = 0.931 + 2.53 * a,
            r = 0.02483 * i - 0.059,
            s = 1.1239 + 1.1328 / (i - 3.4),
            o = 0.9277 - 3.6224 / (i - 2);
          return () => {
            for (var n; ;) {
              let c,
                l = e.next();
              if (l <= 0.86 * o)
                return (
                  (c = l / o - 0.43),
                  Math.floor(
                    ((2 * r) / (0.5 - Math.abs(c)) + i) * c + t + 0.445,
                  )
                );
              l >= o
                ? (c = e.next() - 0.5)
                : ((c = l / o - 0.93),
                  (c = (c < 0 ? -0.5 : 0.5) - c),
                  (l = e.next() * o));
              const d = 0.5 - Math.abs(c);
              if (d < 0.013 && l > d) continue;
              const u = Math.floor(((2 * r) / d + i) * c + t + 0.445);
              if (((l = (l * s) / (r / (d * d) + i)), u >= 10)) {
                const e =
                  (u + 0.5) * Math.log(t / u) -
                  t -
                  0.9189385332046727 +
                  u -
                  (1 / 12 - (1 / 360 - 1 / (1260 * u * u)) / (u * u)) / u;
                if (Math.log(l * a) <= e) return u;
              } else if (u >= 0) {
                const e = null != (n = sh(u)) ? n : 0;
                if (Math.log(l) <= u * Math.log(t) - t - e) return u;
              }
            }
          };
        }
      })(this, e);
    }
    exponential(e) {
      return (function (e, t = 1) {
        return (ah(t).isPositive(), () => -Math.log(1 - e.next()) / t);
      })(this, e);
    }
    irwinHall(e) {
      return (function (e, t = 1) {
        return (
          ah(t).isInt().greaterThanOrEqual(0),
          () => {
            let a = 0;
            for (let i = 0; i < t; ++i) a += e.next();
            return a;
          }
        );
      })(this, e);
    }
    bates(e) {
      return (function (e, t = 1) {
        ah(t).isInt().isPositive();
        const a = e.irwinHall(t);
        return () => a() / t;
      })(this, e);
    }
    pareto(e) {
      return (function (e, t = 1) {
        ah(t).greaterThanOrEqual(0);
        const a = 1 / t;
        return () => 1 / Math.pow(1 - e.next(), a);
      })(this, e);
    }
    weibull(e, t) {
      return (function (e, t, a) {
        return (
          ah(t).greaterThan(0),
          ah(a).greaterThan(0),
          () => {
            const i = 1 - e.next();
            return t * Math.pow(-Math.log(i), 1 / a);
          }
        );
      })(this, e, t);
    }
    _memoize(e, t, ...a) {
      const i = `${a.join(";")}`;
      let r = this._cache[e];
      return (
        (void 0 !== r && r.key === i) ||
          ((r = { key: i, distribution: t(this, ...a) }), (this._cache[e] = r)),
        r.distribution
      );
    }
  })(),
  dh = {};

