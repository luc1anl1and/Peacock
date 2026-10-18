// Reading excerpt from index.js, starting at line 51865.
// Shares bundle scope; use the complete bundle for execution.
I(WA, { ChallengeRegistry: () => lg, ChallengeService: () => dg });
var XA = {};
I(XA, { parseContextListeners: () => uf });
var zA = ["__proto__", "constructor", "prototype"];
function JA(e) {
  for (; e.includes("(") || e.includes(")");)
    e = e.replace("(", "").replace(")", "");
  return e;
}
function ZA(e) {
  return e.startsWith("$.")
    ? e.substring(2)
    : e.startsWith("$")
      ? e.substring(1)
      : e;
}
function ef(e, t, a) {
  "string" == typeof t && (t = (t = ZA((t = JA(t)))).split("."));
  let i,
    r,
    s = 0,
    o = t.length,
    n = e;
  for (; s < o && ((r = t[s++]), !zA.includes(r));)
    n = n[r] =
      s !== o
        ? typeof (i = n[r]) == typeof t
          ? i
          : 0 * t[s] != 0 || ~("" + t[s]).indexOf(".")
            ? {}
            : []
        : a;
}
function tf(e, t, a = !1) {
  if ("string" != typeof e) return e;
  for (const t of zA) if (e.includes(t)) return e;
  if (e.includes("#")) return e;
  if (((e = JA(e)), !a && !e.startsWith("$"))) return e;
  e = ZA(e);
  let i = t;
  if (Object.prototype.hasOwnProperty.call(i, e)) return i[e];
  if (e.includes(".")) {
    const t = e.split(".");
    for (let e of t) i = "Count" === e && Array.isArray(i) ? i.length : i?.[e];
    return i;
  }
  return e;
}
function af(e) {
  return JSON.parse(JSON.stringify(e));
}
function rf(e, t, a, i) {
  const r = i.logger || (() => {}),
    { eventName: s, currentState: o = "Start" } = i;
  let n = e.States?.[o];
  if (!n || (!n?.[s] && !n?.$timer))
    return (
      r("disregard-event", `SM in state ${o} disregarding ${s}`),
      { context: t, state: o }
    );
  const c = !!n.$timer;
  let l = af(t);
  const d = (t) => {
      const s = !!t.Condition,
        n = Object.keys(t).filter((e) => e.includes("$")),
        c = n.length > 0,
        d = !!t.Actions || c,
        u = !!t.Transition,
        p = Object.keys(e.Constants || {});
      let $ = !0;
      if (
        (s &&
          ($ = nf(
            t.Condition,
            {
              ...(l || {}),
              ...(i.contractId && { ContractId: i.contractId }),
              ...(e.Constants || {}),
              Value: a,
            },
            {
              pushUniqueAction(e, t) {
                const a = tf(e, l, !0);
                return (
                  (t = tf(t, l, !1)),
                  r("action", `Running pushUniqueAction on ${e} with ${t}`),
                  !!Array.isArray(a) &&
                    !a.includes(t) &&
                    (a.push(t), ef(l, e, a), !0)
                );
              },
              logger: r,
              timers: i.timers,
              eventTimestamp: i.timestamp,
            },
          )),
        $ && d)
      ) {
        let r = t.Actions || [];
        (Array.isArray(r) || (r = [r]),
          c && r.push(...n.map((e) => ({ [e]: t[e] }))));
        for (const t of r)
          for (const r of Object.keys(t))
            l = df(
              { [r]: t[r] },
              {
                ...l,
                ...(e.Constants || {}),
                ...(i.contractId && { ContractId: i.contractId }),
                Value: a,
              },
              { originalContext: e.Context ?? {} },
            );
        (l.hasOwnProperty("Value") && delete l.Value,
          l.hasOwnProperty("ContractId") && delete l.ContractId);
        for (const e of p) delete l[e];
      }
      let _ = o;
      if ($ && u) {
        if (
          ((_ = t.Transition),
          r(
            "transition",
            `${o} is performing a transition to ${_} - running its "-" event`,
          ),
          i.timers)
        )
          for (; i.timers.length > 0;) i.timers.pop();
        return rf(
          e,
          l,
          {},
          {
            eventName: "-",
            currentState: _,
            logger: r,
            timers: i.timers,
            timestamp: i.timestamp,
            contractId: i.contractId,
          },
        );
      }
      return { context: l, state: _ };
    },
    u = (e) => {
      for (const t of e) {
        const e = d(t);
        if (((l = e.context), e.state !== o))
          return { context: l, state: e.state };
      }
    };
  let p = n[s];
  if ((Array.isArray(p) || (p = [p].filter(Boolean)), c)) {
    const t = n.$timer,
      s = [];
    Array.isArray(t) ? s.unshift(...t) : s.unshift(t);
    const o = u(s);
    if (o)
      return (
        r(
          "timer",
          "Timer caused a state transition, replaying current event with new state.",
        ),
        (i.currentState = o.state),
        rf(e, o.context, a, i)
      );
  }
  const $ = u(p);
  return $ || { state: o, context: l };
}
var sf = (e) => "#".repeat(e);
function of(e, t, a, i, r) {
  const s = t[i].in,
    o = (r._currentLoopDepth || 0) + 1;
  if (s.includes("#"))
    throw new TypeError(
      "Nested array nodes cannot use current iteration (`$.#`) as an `in` value",
      { cause: r._path },
    );
  const n = e(s, a, {
      ...r,
      _currentLoopDepth: o,
      _path: `${r._path}.${i}.in`,
    }),
    c = t[i]["?"];
  for (const t of n) {
    const s = e(c, a, {
      ...r,
      _currentLoopDepth: o,
      _path: `${r._path}.${i}.?`,
      findNamedChild(e, a) {
        const i = sf(o);
        if (e === `$.${i}` || e === `.${i}`) return t;
        if ("object" == typeof t) {
          const a = `$${e.substring(e.indexOf("#.") + 1)}`,
            i = r.findNamedChild(a, t);
          if (i !== a) return i;
        }
        return r.findNamedChild(e, a);
      },
    });
    if (s && ("$inarray" === i || "$any" === i)) return !0;
    if (!s && "$all" === i) return !1;
  }
  return "$all" === i;
}
function nf(e, t, a) {
  if (!e) throw new Error("State machine is falsy!");
  if (!t) throw new Error("Context is falsy!");
  const i = a || {};
  return lf(e, t, {
    findNamedChild: i.findNamedChild || tf,
    ...i,
    _path: i._path || "ROOTOBJ",
    _currentLoopDepth: 0,
    logger: i.logger || (() => {}),
  });
}
function cf(e, t, a, i) {
  return lf(e, t, { ...a, _path: `${a._path}.${i}` });
}
function lf(e, t, a) {
  const i = a.logger;
  if (
    (i("visit", `Visiting ${a._path}`),
    "number" == typeof e || "boolean" == typeof e || null == e)
  )
    return e;
  if ("string" == typeof e) return a.findNamedChild(e, t);
  if (Array.isArray(e)) return e.map((e, i) => cf(e, t, a, `[${i}]`));
  if ("object" == typeof e) {
    if (e.$eq) {
      if (e.$eq.some((e) => Array.isArray(e)))
        return (i("validation", "attempted to compare arrays (can't!)"), !1);
      const r = cf(e.$eq[0], t, a, "$eq[0]");
      return (
        null != r &&
        e.$eq.every((e, i) => 0 === i || cf(e, t, a, `$eq[${i}]`) === r)
      );
    }
    if (e.$not) return !cf(e.$not, t, a, "$not");
    if (e.$and) return e.$and.every((e, i) => cf(e, t, a, `$and[${i}]`));
    if (e.$or) return e.$or.some((e, i) => cf(e, t, a, `$or[${i}]`));
    if (e.$gt)
      return cf(e.$gt[0], t, a, "$gt[0]") > cf(e.$gt[1], t, a, "$gt[1]");
    if (e.$ge)
      return cf(e.$ge[0], t, a, "$ge[0]") >= cf(e.$ge[1], t, a, "$ge[1]");
    if (e.$lt)
      return cf(e.$lt[0], t, a, "$lt[0]") < cf(e.$lt[1], t, a, "$lt[1]");
    if (e.$le)
      return cf(e.$le[0], t, a, "$le[0]") <= cf(e.$le[1], t, a, "$le[1]");
    if (e.$inarray) return of(lf, e, t, "$inarray", a);
    if (e.$any) return of(lf, e, t, "$any", a);
    if (e.$all) return of(lf, e, t, "$all", a);
    if (e.$after) {
      const r = `${a._path}.$after`;
      if (!a.timers) return !1;
      let s = a.timers.find((e) => e.path === r);
      if (!s) {
        const o = cf(e.$after, t, a, "$after");
        if (!a.eventTimestamp && 0 !== a.eventTimestamp)
          return (
            i(
              "validation",
              "No event timestamp found when timer is supposed to be active",
            ),
            !1
          );
        ((s = {
          startTime: a.eventTimestamp,
          endTime: a.eventTimestamp + o,
          path: r,
        }),
          a.timers.push(s));
      }
      if (
        (i("eventStamp", String(a.eventTimestamp)),
        i("endTime", String(s.endTime)),
        a.eventTimestamp >= s.endTime)
      ) {
        const e = a.timers.findIndex((e) => e.path === r);
        return (-1 !== e && a.timers.splice(e, 1), !0);
      }
      return !1;
    }
    if (e.$pushunique)
      return a.pushUniqueAction?.(
        e.$pushunique[0],
        cf(e.$pushunique[1], t, a, "$pushunique[1]"),
      );
    if (e.$contains) {
      const i = cf(e.$contains[0], t, a, "$contains[0]"),
        r = cf(e.$contains[1], t, a, "$contains[1]");
      return "string" == typeof i && i.includes(r);
    }
  }
  return (i("unhandled", `Unhandled test: '${e}'`), !1);
}
function df(e, t, a) {
  if (!e || "object" != typeof e) return t;
  const i = (a) => {
      if ("string" == typeof e[a]) {
        let i = e[a];
        const r = tf(e[a], t, !0);
        if ("number" != typeof r) return;
        ef(t, i, "$inc" === a ? r + 1 : r - 1);
      } else {
        let i = e[a][0];
        const r = tf(i, t, !0),
          s = tf(e[a][1], t, !1);
        if ("number" != typeof r) return;
        ef(t, i, "$inc" === a ? r + s : r - s);
      }
    },
    r = (a) => {
      const i = a ? "$pushunique" : "$push";
      let r = e[i][0];
      r.startsWith("$") && (r = r.substring(1));
      const s = tf(e[i][1], t, !1),
        o = af(tf(r, t, !0));
      if (Array.isArray(o)) {
        if (a) {
          if (-1 !== o.indexOf(s)) return;
          o.push(s);
        } else o.push(s);
        ef(t, r, o);
      }
    };
  for (const s of Object.keys(e))
    switch (s) {
      case "$inc":
        i("$inc");
        break;
      case "$dec":
        i("$dec");
        break;
      case "$mul": {
        let a = e.$mul[3 === e.$mul.length ? 2 : 0];
        const i = tf(e.$mul[0], t, !0),
          r = tf(e.$mul[1], t, !1);
        if ("number" != typeof i || "number" != typeof r) break;
        ef(t, a, i * r);
        break;
      }
      case "$set": {
        let a = e.$set[0];
        const i = tf(e.$set[1], t, !1);
        ef(t, a, i);
        break;
      }
      case "$push":
        r(!1);
        break;
      case "$pushunique":
        r(!0);
        break;
      case "$remove": {
        let a = e.$remove[0];
        a.startsWith("$") && (a = a.substring(1));
        const i = tf(e.$remove[1], t, !1);
        let r = af(tf(a, t, !0));
        if (!Array.isArray(r)) break;
        ((r = r.filter((e) => e !== i)), ef(t, a, r));
        break;
      }
      case "$reset": {
        let i = e.$reset;
        const r = tf(i, a.originalContext, !0);
        ef(t, i, r);
        break;
      }
    }
  return t;
}
function uf(e, t) {
  const a = Object.keys(e || {}),
    i = { challengeTreeIds: [], challengeCountData: { count: 0, total: 0 } };
  for (const r of a) {
    if ("challengetree" === e[r].type) {
      const a = nf(e[r].comparand, t);
      i.challengeTreeIds.push(...a);
    }
    if ("challengecounter" === e[r].type) {
      const a = e[r],
        { total: s, count: o } = a;
      ((i.challengeCountData.count = nf(o, t)),
        (i.challengeCountData.total = nf(s, t)),
        o.includes("CompletedChallenges") &&
          i.challengeTreeIds.push(...nf("$.RequiredChallenges", t)));
    }
  }
  return i;
}
var pf = {};
I(pf, {
  ChallengeFilterType: () => Af,
  Pro1FilterType: () => ff,
  compileRuntimeChallenge: () => If,
  compileRuntimeChallengeOnly: () => _f,
  filterChallenge: () => bf,
  inclusionDataCheck: () => mf,
  isChallengeForDifficulty: () => gf,
  mergeSavedChallengeGroups: () => Ef,
});
var $f = f(require("assert"));
function _f(e) {
  return {
    Id: e.Id,
    GroupId: e.inGroup,
    Name: e.Name,
    Type: e.RuntimeType || "contract",
    Description: e.Description,
    ImageName: e.ImageName,
    InclusionData: e.InclusionData || void 0,
    Definition: e.Definition,
    Tags: e.Tags,
    Drops: e.Drops,
    LastModified: "2021-01-06T23:00:32.0117635",
    PlayableSince: null,
    PlayableUntil: null,
    Xp: e.Rewards.MasteryXP || 0,
    XpModifier: e.XpModifier || {},
  };
}
function If(e, t) {
  return { Challenge: _f(e), Progression: t };
}
var Af = ((e) => (
    (e.None = "None"),
    (e.Contract = "Contract"),
    (e.Contracts = "Contracts"),
    (e.ParentLocation = "ParentLocation"),
    (e.ContractType = "ContractType"),
    e
  ))(Af || {}),
  ff = ((e) => (
    (e.Only = "Only"),
    (e.Ignore = "Ignore"),
    (e.Exclude = "Exclude"),
    e
  ))(ff || {});
function mf(e, t) {
  if (!e) return !0;
  if (!t) return !1;
  const a = [];
  return (
    e.ContractIds && a.push(e.ContractIds?.includes(t.Metadata.Id)),
    e.ContractTypes && a.push(e.ContractTypes?.includes(t.Metadata.Type)),
    e.Locations && a.push(e.Locations?.includes(t.Metadata.Location)),
    e.GameModes &&
      a.push(
        t.Metadata?.Gamemodes?.some((t) => e.GameModes?.includes(t)) ?? !1,
      ),
    0 !== a.length && a.every(Boolean)
  );
}
function gf(e, t) {
  return (
    !t.DifficultyLevels ||
    0 === t.DifficultyLevels.length ||
    kE[t.DifficultyLevels[0]] <= e
  );
}
function Cf(e, t, a, i, r, s, o = !1) {
  if (!e || !t) return !1;
  if (!r) return !1;
  if (!gf(a, r)) return !1;
  const n = jb.resolveContract(e, i, !0),
    c = jb.resolveContract(e, i);
  if (
    ($f.default.ok(
      c,
      `Can't find contract ${e} for ${i}, but need to check if challenge ${r.Id} belongs to it`,
    ),
    "global" === r.Type)
  )
    return (
      r.Tags.some((e) => /-pack$/.test(e)) ||
      mf(
        o
          ? r.InclusionData
          : {
              ...r.InclusionData,
              ContractTypes:
                r.InclusionData?.ContractTypes?.filter(
                  (e) => "tutorial" !== e,
                ) || void 0,
            },
        n,
      )
    );
  if (r.Tags.includes("elusive") && "elusive" !== n?.Metadata.Type) return !1;
  const l = (r.InclusionData?.ContractIds || []).includes(n?.Metadata.Id || ""),
    d = (r.InclusionData?.ContractTypes || []).includes(c.Metadata.Type),
    u = "location" === r.Type || "parentlocation" === r.Type,
    p = r.LocationId === t || r.LocationId === r.ParentLocationId,
    $ = r.Tags.includes("pro1");
  return (
    (!$ || "Exclude" !== s) && !(!$ && "Only" === s) && (l || d || (u && p))
  );
}
function bf(e, t) {
  switch (e.type) {
    case "None":
      return !0;
    case "Contract":
      return Cf(
        e.contractId,
        e.locationId,
        e.difficulty,
        e.gameVersion,
        t,
        e.pro1Filter,
      );
    case "Contracts":
      return (
        !!e.contractIds.some((a) =>
          Cf(a, e.locationId, kE.master, e.gameVersion, t, e.pro1Filter, !0),
        ) ||
        !(
          !jb.locationsWithETA.has(e.locationId) ||
          !t.Tags.includes("arcade") ||
          "global" !== t.Type
        )
      );
    case "ContractType":
      return t.InclusionData?.ContractTypes?.includes(e.contractType) ?? !1;
    case "ParentLocation": {
      if (t.Tags.includes("elusive")) return !1;
      if (t.Tags.includes("arcade"))
        return (
          t.ParentLocationId === e.parent ||
          ("" === t.ParentLocationId && jb.parentsWithETA.has(e.parent))
        );
      if (t.Tags.includes("escalation"))
        return (
          "Only" !== e.pro1Filter &&
          !NE(e.parent) &&
          "LOCATION_PARENT_SNUG" !== e.parent
        );
      const a = t.Tags.includes("pro1");
      return (
        (!a || "Exclude" !== e.pro1Filter) && !(!a && "Only" === e.pro1Filter)
      );
    }
  }
}
function Ef(e, t) {
  return {
    ...e,
    Challenges: [...(e?.Challenges ?? []), ...(t?.Challenges ?? [])],
  };
}
var Tf = f(require("assert")),
  hf = {};
I(hf, {
  EDeathContext: () => Wm,
  contractSessions: () => Xm,
  enqueueEvent: () => qm,
  enqueuePushMessage: () => Ym,
  eventRouter: () => Km,
  getActiveSessionIdForUser: () => tg,
  getCurrentState: () => Jm,
  getSession: () => ag,
  newSession: () => Zm,
  registerObjectiveListener: () => jm,
  saveAndSyncEvents: () => eg,
  setupScoring: () => Vm,
});
var Of = f(Ys()),
  yf = f(Jr()),
  Sf = {};
I(Sf, {
  initRp: () => Yf,
  scenePathToRpAsset: () => Wf,
  swapToBrowsingMenusStatus: () => jf,
  swapToIdle: () => Vf,
  swapToLocationStatus: () => qf,
});
var Lf = {};
I(Lf, { RPCClient: () => Ff });
var Nf = f(require("events")),
  Rf = require("timers"),
  Df = {};
I(Df, { IPCTransport: () => Hf });
var Pf = f(require("net")),
  Mf = f(require("events")),
  Uf = require("crypto");
function wf(e = 0) {
  return new Promise((t) => {
    const a = (function (e) {
        if ("win32" === process.platform)
          return `\\\\?\\pipe\\discord-ipc-${e}`;
        const {
          env: { XDG_RUNTIME_DIR: t, TMPDIR: a, TMP: i, TEMP: r },
        } = process;
        return `${(t || a || i || r || "/tmp").replace(/\/$/, "")}/discord-ipc-${e}`;
      })(e),
      i = (a) => {
        e < 10
          ? t(wf(e + 1))
          : (Ad(
              "warn",
              "Failed to connect to Discord for rich presence. Discord may not be running.",
            ),
            a.stack ? Ad("debug", a.stack) : Ad("debug", a.message),
            t(void 0));
      },
      r = Pf.default.createConnection(a, () => {
        (r.removeListener("error", i), t(r));
      });
    r.once("error", i);
  });
}
async function Gf(e = 0) {
  if (e > 30) throw new Error("Could not find endpoint");
  const t = "http://127.0.0.1:" + (6463 + (e % 10));
  try {
    return 404 === (await O_(t)).status ? t : Gf(e + 1);
  } catch {
    return Gf(e + 1);
  }
}
function vf(e, t) {
  t = JSON.stringify(t);
  const a = Buffer.byteLength(t),
    i = Buffer.alloc(8 + a);
  return (i.writeInt32LE(e, 0), i.writeInt32LE(a, 4), i.write(t, 8, a), i);
}
var Bf = { full: "", op: void 0 };
function kf(e, t) {
  const a = e.read();
  if (!a) return;
  let i,
    { op: r } = Bf;
  if ("" === Bf.full) {
    r = Bf.op = a.readInt32LE(0);
    const e = a.readInt32LE(4);
    i = a.slice(8, e + 8);
  } else i = a.toString();
  try {
    (t({ op: r, data: JSON.parse(Bf.full + i) }),
      (Bf.full = ""),
      (Bf.op = void 0));
  } catch {
    Bf.full += i;
  }
  kf(e, t);
}
var Hf = class extends Mf.default {
    constructor(e) {
      (super(),
        (this.client = e),
        (this.unavailable = !1),
        (this.socket = void 0));
    }
    async connect() {
      const e = (this.socket = await wf());
      this.socket
        ? (e.on("close", this.onClose.bind(this)),
          e.on("error", this.onClose.bind(this)),
          this.emit("open"),
          e.write(vf(0, { v: 1, client_id: this.client.clientId })),
          e.pause(),
          e.on("readable", () => {
            kf(e, ({ op: e, data: t }) => {
              switch (e) {
                case 3:
                  this.send(t, 4);
                  break;
                case 1:
                  if (!t) return;
                  ("AUTHORIZE" === t.cmd &&
                    "ERROR" !== t.evt &&
                    Gf()
                      .then((e) => {
                        this.client.request.endpoint = e;
                      })
                      .catch((e) => {
                        this.client.emit("error", e);
                      }),
                    this.emit("message", t));
                  break;
                case 2:
                  this.emit("close", t);
              }
            });
          }))
        : (this.unavailable = !0);
    }
    onClose(e) {
      this.emit("close", e);
    }
    send(e, t = 1) {
      this.unavailable
        ? Ad("debug", "Skipping RPC data send: transport unavailable.")
        : this.socket?.write(vf(t, e));
    }
    async close() {
      return new Promise((e) => {
        (this.once("close", e), this.send({}, 2), this.socket?.end());
      });
    }
    ping() {
      this.send((0, Uf.randomUUID)(), 3);
    }
  },
  Qf = require("crypto");
var Kf,
  Ff = class extends Nf.default {
    constructor() {
      (super(),
        (this.clientId = void 0),
        (this.user = void 0),
        (this._expecting = new Map()),
        (this._subscriptions = new Map()),
        (this._connectPromise = void 0),
        (this.transport = new Hf(this)),
        this.transport.on("message", this._onRpcMessage.bind(this)));
    }
    connect(e) {
      return (
        this._connectPromise ||
          (this._connectPromise = new Promise((t, a) => {
            this.clientId = e;
            const i = (0, Rf.setTimeout)(() => {
              this.transport.unavailable ||
                a(new Error("RPC_CONNECTION_TIMEOUT"));
            }, 1e4);
            (i.unref(),
              this.once("connected", () => {
                ((0, Rf.clearTimeout)(i), t(this));
              }),
              this.transport.once("close", () => {
                (this._expecting.forEach((e) => {
                  e.reject(new Error("connection closed"));
                }),
                  this.emit("disconnected"),
                  a(new Error("connection closed")));
              }),
              this.transport.connect().catch(a));
          })),
        this._connectPromise
      );
    }
    async login(e) {
      const { clientId: t } = e;
      return (await this.connect(t), this.emit("ready"), this);
    }
    request(e, t, a) {
      return new Promise((i, r) => {
        const s = (0, Qf.randomUUID)();
        (this.transport.send({ cmd: e, args: t, evt: a, nonce: s }),
          this._expecting.set(s, { resolve: i, reject: r }));
      });
    }
    _onRpcMessage(e) {
      if ("DISPATCH" === e.cmd && "READY" === e.evt)
        return (
          e.data.user && (this.user = e.data.user),
          void this.emit("connected")
        );
      if (!this._expecting.has(e.nonce)) {
        const t = (function (e, t) {
          return `${e}${JSON.stringify(t)}`;
        })(e.evt, e.args);
        if (!this._subscriptions.has(t)) return;
        return void this._subscriptions.get(t)(e.data);
      }
      const { resolve: t, reject: a } = this._expecting.get(e.nonce);
      if ("ERROR" === e.evt) {
        const t = new Error(e.data.message);
        ((t.data = e.data), a(t));
      } else t(e.data);
      this._expecting.delete(e.nonce);
    }
    async setActivity(e = {}, t = process.pid) {
      let a, i;
      return (
        (e.startTimestamp || e.endTimestamp) &&
          ((a = { start: e.startTimestamp, end: e.endTimestamp }),
          a.start instanceof Date && (a.start = Math.round(a.start.getTime())),
          a.end instanceof Date && (a.end = Math.round(a.end.getTime()))),
        (e.largeImageKey ||
          e.largeImageText ||
          e.smallImageKey ||
          e.smallImageText) &&
          (i = {
            large_image: e.largeImageKey,
            large_text: e.largeImageText,
            small_image: e.smallImageKey,
            small_text: e.smallImageText,
          }),
        await this.request("SET_ACTIVITY", {
          pid: t,
          activity: {
            state: e.state,
            details: e.details,
            timestamps: a,
            assets: i,
            buttons: e.buttons,
            instance: !!e.instance,
          },
        })
      );
    }
    async clearActivity(e = process.pid) {
      return await this.request("SET_ACTIVITY", { pid: e });
    }
    async destroy() {
      await this.transport.close();
    }
  },
  xf = Math.round(Date.now() / 1e3);
function Yf() {
  for (const e of Object.keys(Qd("Entrances", !1))) (Wf(e, []), 0);
  ((Kf = new Ff()).login({ clientId: "846361353027584013" }),
    Kf.on("ready", () => {
      Vf();
    }));
}
function jf(e) {
  !0 === Rd("discordRp") &&
    Kf?.setActivity({
      details: `Playing HITMAN™ ${e.substring(1).replace("1", "(2016)").replace("3", "WoA")}`,
      largeImageKey: e,
      largeImageText: "Browsing Menus",
      smallImageKey: "peacock",
      smallImageText: "Using Peacock",
      startTimestamp:
        !0 === Rd("discordRpAppTime") ? xf : Math.round(Date.now() / 1e3),
    });
}
function Vf() {
  !0 === Rd("discordRp") &&
    Kf?.setActivity({
      details: "Idle",
      largeImageKey: "peacock",
      largeImageText: "Idling",
      startTimestamp:
        !0 === Rd("discordRpAppTime") ? xf : Math.round(Date.now() / 1e3),
    });
}
function qf(e, t, a) {
  if (!0 !== Rd("discordRp")) return;
  const i = Wf(e, a);
  if (!Array.isArray(i)) return;
  const r =
    "orbis" === t
      ? "Sarajevo Six"
      : `${t.substring(0, 1).toUpperCase()}${t.substring(1)}`;
  Kf?.setActivity({
    state: `${r} in ${i[2]}`,
    details: i[1],
    largeImageKey: i[0],
    largeImageText: i[1],
    smallImageKey: "peacock",
    smallImageText: "Using Peacock",
    startTimestamp:
      !0 === Rd("discordRpAppTime") ? xf : Math.round(Date.now() / 1e3),
  });
}
function Wf(e, t) {
  const a = Qd("DiscordRichAssetsForBricks", !1);
  for (const e of t) if (a[e.toLowerCase()]) return a[e.toLowerCase()];
  switch (e.toLowerCase()) {
    case "assembly:/_pro/scenes/missions/paris/_scene_paris.entity":
    case "assembly:/_pro/scenes/missions/paris/_scene_paris_torenia.entity":
    case "assembly:/_pro/scenes/missions/paris/_scene_fashionshowhit_01.entity":
    case "assembly:/_pro/scenes/missions/paris/_scene_tutorial_contractcreationparis.entity":
    case "assembly:/_pro/scenes/missions/paris/_scene_fashionshowhit_amd.entity":
      return ["parisshowstopper", "The Showstopper", "Paris"];
    case "assembly:/_pro/scenes/missions/paris/_scene_tequilasunrise_01.entity":
      return ["elusivetequilasunrise", "The Forger", "Paris"];
    case "assembly:/_pro/scenes/missions/paris/_scene_whiterussian_01.entity":
      return ["elusivewhiterussian", "The Identity Thief", "Paris"];
    case "assembly:/_pro/scenes/missions/paris/_scene_frenchmartini.entity":
      return ["elusivefrenchmartini", "The Banker", "Paris"];
    case "assembly:/_pro/scenes/missions/coastaltown/_scene_copperhead.entity":
    case "assembly:/_pro/scenes/missions/coastaltown/_scene_mission_copperhead.entity":
      return ["sapienzaicon", "The Icon", "Sapienza"];
    case "assembly:/_pro/scenes/missions/coastaltown/_scene_mamba.entity":
    case "assembly:/_pro/scenes/missions/coastaltown/_scene_mission_mamba.entity":
      return ["sapienzalandslide", "Landslide", "Sapienza"];
    case "assembly:/_pro/scenes/missions/coastaltown/mission01.entity":
    case "assembly:/_pro/scenes/missions/coastaltown/_scene_octopus.entity":
      return ["sapienzaworldoftomorrow", "World of Tomorrow", "Sapienza"];
    case "assembly:/_pro/scenes/missions/coastaltown/scene_ebola.entity":
      return ["sapienzapzauthor", "The Author", "Sapienza"];
    case "assembly:/_pro/scenes/missions/marrakesh/_scene_mission_spider.entity":
    case "assembly:/_pro/scenes/missions/marrakesh/_scene_spider.entity":
      return ["marrakeshguildedcage", "A Gilded Cage", "Marrakesh"];
    case "assembly:/_pro/scenes/missions/marrakesh/_scene_mission_python.entity":
    case "assembly:/_pro/scenes/missions/marrakesh/_scene_python_hellebore.entity":
    case "assembly:/_pro/scenes/missions/marrakesh/_scene_python.entity":
      return ["marrakeshahbos", "A House Built On Sand", "Marrakesh"];
    case "assembly:/_pro/scenes/missions/bangkok/_scene_mission_tiger.entity":
    case "assembly:/_pro/scenes/missions/bangkok/_scene_tiger.entity":
      return ["bangkokclub27", "Club 27", "Bangkok"];
    case "assembly:/_pro/scenes/missions/bangkok/scene_zika.entity":
      return ["bangkokpzsource", "The Source", "Bangkok"];
    case "assembly:/_pro/scenes/missions/bangkok/scene_baiju.entity":
      return ["elusivebaiju", "The Infiltrator", "Bangkok"];
    case "assembly:/_pro/scenes/missions/colorado_2/_scene_bull.entity":
    case "assembly:/_pro/scenes/missions/colorado_2/_scene_mission_bull.entity":
      return ["coloradofreedomfighters", "Freedom Fighters", "Colorado"];
    case "assembly:/_pro/scenes/missions/colorado_2/scene_rabies.entity":
      return ["coloradopzvector", "The Vector", "Colorado"];
    case "assembly:/_pro/scenes/missions/hokkaido/_scene_mission_snowcrane.entity":
    case "assembly:/_pro/scenes/missions/hokkaido/_scene_snowcrane_tumbleweed.entity":
    case "assembly:/_pro/scenes/missions/hokkaido/_scene_snowcrane.entity":
      return ["hokkaidositusinvertus", "Situs Invertus", "Hokkaido"];
    case "assembly:/_pro/scenes/missions/hokkaido/scene_mamushi.entity":
      return ["hokkaidosnowfestival", "Hokkaido Snow Festival", "Hokkaido"];
    case "assembly:/_pro/scenes/missions/hokkaido/_scene_flu.entity":
      return ["hokkaidopz", "Patient Zero", "Hokkaido"];
    case "assembly:/_pro/scenes/missions/hokkaido/scene_bellini.entity":
      return ["elusivebellini", "The Reflection", "Hokkaido"];
    case "assembly:/_pro/scenes/missions/ancestral/scene_bulldog.entity":
    case "assembly:/_pro/scenes/missions/ancestral/scene_bulldog_fern.entity":
      return ["dartmoordeathoffamily", "Death in the Family", "Dartmoor"];
    case "assembly:/_pro/scenes/missions/ancestral/scene_smoothsnake.entity":
      return ["dartmoorgardenshow", "Dartmoor Garden Show", "Dartmoor"];
    case "assembly:/_pro/scenes/missions/ancestral/scene_ancestral_vesper.entity":
      return ["elusivevesper", "The Procurers", "Dartmoor"];
    case "assembly:/_pro/scenes/missions/ancestral/scene_ancestral_harebell.entity":
      return ["harebell", "The Sloth Depletion", "Dartmoor"];
    case "assembly:/_pro/scenes/missions/ancestral/scene_hollyhock.entity":
      return ["hollyhock", "The Wrath Termination", "Dartmoor"];
    case "assembly:/_pro/scenes/missions/ancestral/scene_filur.entity":
      return ["elusivefilur", "The Harbinger", "Dartmoor"];
    case "assembly:/_pro/scenes/missions/colombia/mission_millipede/scene_millipede.entity":
    case "assembly:/_pro/scenes/missions/colombia/scene_anaconda.entity":
      return [
        "santafortunaembraceserpent",
        "Embrace of the Serpent",
        "Santa Fortuna",
      ];
    case "assembly:/_pro/scenes/missions/colombia/scene_hippo.entity":
    case "assembly:/_pro/scenes/missions/colombia/scene_hippo_calluna.entity":
    case "assembly:/_pro/scenes/missions/colombia/scene_hippo_rafflesia.entity":
      return [
        "santafortunathreeheadedserpent",
        "Three-Headed Serpent",
        "Santa Fortuna",
      ];
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_radler.entity":
      return ["elusiveradler", "The Liability", "Berlin"];
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_basic.entity":
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_contractcreation.entity":
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_cornflower.entity":
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_nightphlox.entity":
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_smilax.entity":
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_smilax_level2.entity":
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_smilax_level3.entity":
      return ["berlinapexpredator", "Apex Predator", "Berlin"];
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_grasssnake.entity":
      return ["berlinegghunt", "Berlin Egg Hunt", "Berlin"];
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_fox_tomorrowland.entity":
      return ["elusivetomorrowland", "The Drop", "Berlin"];
    case "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_ambrosia.entity":
      return ["ambrosia", "The Lust Assignation", "Berlin"];
    case "assembly:/_pro/scenes/missions/elegant/scene_llama_elusive_clerico.entity":
      return ["elusiveclerico", "The Heartbreaker", "Mendoza"];
    case "assembly:/_pro/scenes/missions/elegant/scene_llama_elusive_jockeyclub.entity":
      return ["elusivejockeyclub", "The Iconoclast", "Mendoza"];
    case "assembly:/_pro/scenes/missions/elegant/scene_llama.entity":
    case "assembly:/_pro/scenes/missions/elegant/scene_llama_jacaranda.entity":
    case "assembly:/_pro/scenes/missions/elegant/scene_whitedryas.entity":
    case "assembly:/_pro/scenes/missions/elegant/scene_whitedryas_level2.entity":
    case "assembly:/_pro/scenes/missions/elegant/scene_whitedryas_level3.entity":
      return ["mendozafarewell", "The Farewell", "Mendoza"];
    case "assembly:/_pro/scenes/missions/elegant/scene_frangipani.entity":
      return ["frangipani", "The Envy Contention", "Mendoza"];
    case "assembly:/_pro/scenes/missions/golden/mission_gecko/scene_gecko_angelica.entity":
    case "assembly:/_pro/scenes/missions/golden/mission_gecko/scene_gecko_basic.entity":
    case "assembly:/_pro/scenes/missions/golden/mission_gecko/scene_gecko_desertrose.entity":
    case "assembly:/_pro/scenes/missions/golden/mission_gecko/scene_gecko_lunaria.entity":
    case "assembly:/_pro/scenes/missions/golden/mission_gecko/scene_gecko_sinstest.entity":
    case "assembly:/_pro/scenes/missions/golden/mission_gecko/scene_gecko_sheepsorrel.entity":
      return ["dubaiontopoftheworld", "On Top Of The World", "Dubai"];
    case "assembly:/_pro/scenes/missions/golden/mission_gecko/scene_gibson.entity":
      return ["elusivegibson", "The Ascensionist", "Dubai"];
    case "assembly:/_pro/scenes/missions/wet/scene_wet_makoyana.entity":
    case "assembly:/_pro/scenes/missions/wet/scene_rat_ginseng.entity":
    case "assembly:/_pro/scenes/missions/wet/scene_rat_basic.entity":
    case "assembly:/_pro/scenes/missions/wet/scene_magnolia.entity":
      return ["chongqingendofanera", "End Of An Era", "Chongqing"];
    case "assembly:/_pro/scenes/missions/wet/scene_rat_elusive_redsnapper.entity":
      return ["elusiveredsnapper", "The Rage", "Chongqing"];
    case "assembly:/_pro/scenes/missions/wet/scene_wet_azalea.entity":
      return ["azalea", "The Gluttony Gobble", "Chongqing"];
    case "assembly:/_pro/scenes/missions/wet/scene_wet_lambic.entity":
      return ["elusivelambic", "The Splitter", "Chongqing"];
    case "assembly:/_pro/scenes/missions/thefacility/_scene_polarbear_005.entity":
    case "assembly:/_pro/scenes/missions/thefacility/_scene_mission_polarbear_002_for_escalation_.entity":
    case "assembly:/_pro/scenes/missions/thefacility/_scene_mission_polarbear_002_contracts_creation_tutorial.entity":
    case "assembly:/_pro/scenes/missions/thefacility/_scene_mission_polarbear_intro_firsttime.entity":
    case "assembly:/_pro/scenes/missions/thefacility/_scene_mission_polarbear_module_002.entity":
    case "assembly:/_pro/scenes/missions/thefacility/_scene_mission_polarbear_module_002_b.entity":
    case "assembly:/_pro/scenes/missions/thefacility/_scene_mission_polarbear_module_005.entity":
    case "assembly:/_pro/scenes/missions/thefacility/_scene_mission_polarbear_module_005_vr_tutorial.entity":
      return ["icafacilityfinaltest", "ICA Facility", "Greenland"];
    case "assembly:/_pro/scenes/missions/greedy/mission_raccoon/scene_raccoon_basic.entity":
    case "assembly:/_pro/scenes/missions/greedy/mission_raccoon/scene_raccoon_basic_dandelion.entity":
      return ["newyorkgoldenhandshake", "Golden Handshake", "New York"];
    case "assembly:/_pro/scenes/missions/opulent/mission_stingray/scene_stingray_basic.entity":
    case "assembly:/_pro/scenes/missions/opulent/mission_stingray/scene_stingray_arcticthyme.entity":
      return ["havenlastresort", "The Last Resort", "Haven"];
    case "assembly:/_pro/scenes/missions/miami/scene_et_sambuca.entity":
      return ["elusivesambuca", "The Undying", "Miami"];
    case "assembly:/_pro/scenes/missions/miami/scene_flamingo.entity":
      return ["miamifinishline", "The Finish Line", "Miami"];
    case "assembly:/_pro/scenes/missions/miami/scene_cottonmouth.entity":
      return ["miamisilvertounge", "A Silver Tongue", "Miami"];
    case "assembly:/_pro/scenes/missions/sheep/scene_adonis.entity":
      return ["elusiveadonis", "The Politician", "Hawke's Bay"];
    case "assembly:/_pro/scenes/missions/sheep/scene_sheep.entity":
      return ["hawkenightcall", "Nightcall", "Hawke's Bay"];
    case "assembly:/_pro/scenes/missions/sheep/scene_opuntia.entity":
      return ["opuntia", "Opuntia", "Hawke's Bay"];
    case "assembly:/_pro/scenes/missions/theark/scene_magpie.entity":
    case "assembly:/_pro/scenes/missions/theark/_scene_magpie_pansy.entity":
    case "assembly:/_pro/scenes/missions/theark/_scene_magpie_lotus.entity":
      return ["sgailarksociety", "The Ark Society", "Isle of Sgáil"];
    case "assembly:/_pro/scenes/missions/theark/scene_penicillin.entity":
      return ["elusivepenicillin", "The Disruptor", "Isle of Sgáil"];
    case "assembly:/_pro/scenes/missions/skunk/scene_skunk.entity":
    case "assembly:/_pro/scenes/missions/skunk/mission_grasshopper/scene_grasshopper.entity":
      return ["whittletonanotherlife", "Another Life", "Whittleton Creek"];
    case "assembly:/_pro/scenes/missions/skunk/scene_gartersnake.entity":
      return ["whittletonbitterpill", "A Bitter Pill", "Whittleton Creek"];
    case "assembly:/_pro/scenes/missions/mumbai/scene_mongoose.entity":
      return ["mumbaichasingghost", "Chasing A Ghost", "Mumbai"];
    case "assembly:/_pro/scenes/missions/mumbai/scene_kingcobra.entity":
      return ["mumbaikingcobra", "Illusions of Grandeur", "Mumbai"];
    case "assembly:/_pro/scenes/missions/trapped/scene_bellflower.entity":
    case "assembly:/_pro/scenes/missions/trapped/scene_wolverine.entity":
      return ["romaniatile", "Untouchable", "Romania"];
    case "assembly:/_pro/scenes/missions/rocky/scene_dugong.entity":
      return ["shadowsinthewater", "Shadows in the Water", "Ambrose Island"];
    case "assembly:/_pro/scenes/missions/caged/mission_falcon/scene_falcon_sniper.entity":
      return ["sniper_siberia", "Crime and Punishment", "Siberia"];
    case "assembly:/_pro/scenes/missions/hawk/scene_hawk.entity":
      return ["austria", "The Last Yardbird", "Austria"];
    case "assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull.entity":
      return ["hantuport", "The Pen and the Sword", "Hantu Port"];
    case "assembly:/_pro/scenes/missions/snug/scene_vanilla.entity":
      return ["snug", "Safehouse", "Safehouse"];
  }
}
var Xf = require("crypto"),
  zf = {};
I(zf, { LiveSplitManager: () => lm, liveSplitManager: () => um });
var Jf = {};
I(Jf, { LiveSplitClient: () => tm });
var Zf = require("net"),
  em = require("events"),
  tm = class e extends em.EventEmitter {
    constructor(e) {
      super();
      const t = e.split(":");
      if (2 !== t.length)
        throw new Error(
          "Failed to parse connection details! IP:PORT expected.",
        );
      ((this._connectionDetails = { ip: t[0], port: parseInt(t[1]) }),
        (this._connected = !1),
        (this.timeout = 100),
        (this._initGameTimeOnce = !1));
    }
    static _checkDisallowedSymbols(e) {
      if (-1 !== e.indexOf("\r\n"))
        throw new Error("No newline symbols allowed!");
    }
    connect() {
      return (
        (this._socket = new Zf.Socket()),
        new Promise((e, t) => {
          (this._socket.connect(
            this._connectionDetails.port,
            this._connectionDetails.ip,
            () => {
              ((this._connected = !0),
                this.emit("connected"),
                e(this._connected));
            },
          ),
            this._socket.on("data", (e) => {
              this.emit("data", e.toString("utf-8").replace("\r\n", ""));
            }),
            this._socket.on("error", (e) => {
              t(e);
            }),
            this._socket.on("close", () => {
              ((this._connected = !1), this.emit("disconnected"));
            }));
        })
      );
    }
    disconnect() {
      return (
        !!this._connected &&
        (this._socket?.destroy(), (this._connected = !1), !0)
      );
    }
    async send(t, a = !0) {
      if (!this._connected)
        throw new Error("Client must be connected to the server!");
      return (
        e._checkDisallowedSymbols(t),
        this._socket?.write(`${t}\r\n`),
        !a || (await this._waitForResponse())
      );
    }
    async startTimer() {
      return await this.send("starttimer", !1);
    }
    async startOrSplit() {
      return await this.send("startorsplit", !1);
    }
    async split() {
      return await this.send("split", !1);
    }
    async unsplit() {
      return await this.send("unsplit", !1);
    }
    async skipSplit() {
      return await this.send("skipsplit", !1);
    }
    async pause() {
      return await this.send("pause", !1);
    }
    async resume() {
      return await this.send("resume", !1);
    }
    async reset() {
      return await this.send("reset", !1);
    }
    async initGameTime() {
      return (
        !this._initGameTimeOnce &&
        ((this._initGameTimeOnce = !0), await this.send("initgametime", !1))
      );
    }
    async setGameTime(e) {
      return await this.send(`setgametime ${e}`, !1);
    }
    async setLoadingTimes(e) {
      return await this.send(`setloadingtimes ${e}`, !1);
    }
    async pauseGameTime() {
      return await this.send("pausegametime", !1);
    }
    async unpauseGameTime() {
      return await this.send("unpausegametime", !1);
    }
    async setComparison(e) {
      return await this.send(`setcomparison ${e}`, !1);
    }
    async getDelta(e = "") {
      return (
        e.length > 0 && (e = ` ${e}`),
        await this.send(`getdelta${e}`, !0)
      );
    }
    async getLastSplitTime() {
      return await this.send("getlastsplittime", !0);
    }
    async getComparisonSplitTime() {
      return await this.send("getcomparisonsplittime", !0);
    }
    async getCurrentTime() {
      return await this.send("getcurrenttime", !0);
    }
    async getFinalTime(e = "") {
      return (
        e.length > 0 && (e = ` ${e}`),
        await this.send(`getfinaltime${e}`, !0)
      );
    }
    async getPredictedTime(e) {
      return await this.send(`getpredictedtime ${e}`, !0);
    }
    async getBestPossibleTime() {
      return await this.send("getbestpossibletime", !0);
    }
    async getSplitIndex() {
      return await this.send("getsplitindex", !0);
    }
    async getCurrentSplitName() {
      return await this.send("getcurrentsplitname", !0);
    }
    async getPreviousSplitName() {
      return await this.send("getprevioussplitname", !0);
    }
    async getCurrentTimerPhase() {
      return await this.send("getcurrenttimerphase", !0);
    }
    async _waitForResponse() {
      let e = () => {};
      const t = new Promise((t) => {
          ((e = (e) => {
            t(e);
          }),
            this.once("data", e));
        }),
        a = new Promise((t) => {
          setTimeout(() => {
            (this.removeListener("data", e), t(void 0));
          }, this.timeout);
        });
      return await Promise.race([t, a]);
    }
  },
  am = {};
I(am, { getAllCampaigns: () => nm, makeCampaigns: () => om });
var im = f(require("assert")),
  rm = (e) =>
    function (t, a) {
      (im.default.ok(t, "Plugin tried to generate mission with no contract ID"),
        im.default.ok(
          a,
          "Plugin tried to generate mission with no game version",
        ));
      return (
        jb.resolveContract(t, a, !0) ||
          (Ad("error", `Failed to resolve contract ${t}!`),
          im.default.fail(`Failed to resolve contract ${t}! (campaign)`)),
        { Type: "Mission", Data: xb(t, a, e) }
      );
    };
function sm(e, t) {
  const a = Qd("Videos", !0)[e];
  switch (t) {
    case "h1":
      a.Entitlements = [];
      break;
    case "h2":
      ("GAME_STORE_METADATA_GAME_TITLE" === a.Data.DlcName &&
        ((a.Data.DlcName = "GAME_STORE_METADATA_S2_GAME_TITLE"),
        (a.Data.DlcImage = "images/livetile/dlc/wide_logo_hitman2.png")),
        a.Data.DlcName.includes("METADATA_DLC") &&
          (a.Data.DlcName.replace("METADATA_DLC", "METADATA_LEGACY_DLC"),
          a.Data.DlcImage.replace("wide_logo", "wide_logo_legacy")),
        a.Entitlements.includes("LOCATION_NEWZEALAND") ||
          (a.Entitlements = []));
      break;
    case "h3":
      a.Data = {
        DlcName: "GAME_STORE_METADATA_S3_GAME_TITLE",
        DlcImage: "images/livetile/dlc/tile_hitman3.jpg",
      };
  }
  return { Type: "Video", Data: a };
}
function om(e, t) {
  const a = rm(t);
  let i = [];
  const r = [
      a("1436cbe4-164b-450f-ad2c-77dec88f53dd", e),
      sm("prologue_intermission1", e),
      a("1d241b00-f585-4e3d-bc61-3095af1b96e2", e),
      sm("prologue_intermission2", e),
      a("b573932d-7a34-44f1-bcf4-ea8f79f75710", e),
      sm("prologue_intermission3", e),
      a("ada5f2b1-8529-48bb-a596-717f75f5eacb", e),
      sm("prologue_intermission4", e),
    ],
    s = [
      a("00000000-0000-0000-0000-000000000200", e),
      sm("debriefing_peacock", e),
      a("00000000-0000-0000-0000-000000000600", e),
      sm("debriefing_octopus", e),
      a("00000000-0000-0000-0000-000000000400", e),
      sm("debriefing_spider", e),
      a("db341d9f-58a4-411d-be57-0bc4ed85646b", e),
      sm("debriefing_tiger", e),
      a("42bac555-bbb9-429d-a8ce-f1ffdf94211c", e),
      sm("bull_secret_room", e),
      sm("debriefing_bull", e),
      a("0e81a82e-b409-41e9-9e3b-5f82e57f7a12", e),
      sm("debriefing_snowcrane", e),
    ];
  let o, n, c, l, d;
  if ("h1" !== e) {
    const t = [
        a("c65019e5-43a8-4a33-8a2a-84c750a5eeb3", e),
        sm("debriefing_sheep", e),
        a("c1d015b4-be08-4e44-808e-ada0f387656f", e),
        sm("debriefing_flamingo", e),
        a("422519be-ed2e-44df-9dac-18f739d44fd9", e),
        sm("debriefing_hippo", e),
        a("0fad48d7-3d0f-4c66-8605-6cbe9c3a46d7", e),
        sm("debriefing_mongoose", e),
        sm("intro_skunk", e),
        a("82f55837-e26c-41bf-bc6e-fa97b7981fbc", e),
        sm("debriefing_skunk", e),
        ...("h3" === e ? [a("b2aac100-dfc7-4f85-b9cd-528114436f6c", e)] : []),
        sm("intro_magpie", e),
        a("0d225edf-40cd-4f20-a30f-b62a373801d3", e),
        sm("debriefing_magpie", e),
        a("7a03a97d-238c-48bd-bda0-e5f279569cce", e),
        sm("debriefing_raccoon", e),
        a("095261b5-e15b-4ca1-9bb7-001fb85c5aaa", e),
        sm("debriefing_stingray", e),
      ],
      i =
        "h3" === e
          ? [
              sm("intro_gecko", e),
              a("7d85f2b0-80ca-49be-a2b7-d56f67faf252", e),
              sm("debriefing_gecko", e),
              a("755984a8-fb0b-4673-8637-95cfe7d34e0f", e),
              sm("debriefing_bulldog", e),
              a("ebcd14b2-0786-4ceb-a2a4-e771f60d0125", e),
              sm("debriefing_fox", e),
              a("3d0cbb8c-2a80-442a-896b-fea00e98768c", e),
              sm("debriefing_rat", e),
              a("d42f850f-ca55-4fc9-9766-8c6a2b5c3129", e),
              sm("debriefing_llama", e),
              a("a3e19d55-64a6-4282-bb3c-d18c3f3e6e29", e),
              sm("debriefing_wolverine", e),
            ]
          : void 0,
      u =
        "h3" === e
          ? [
              a("ae04c7a0-4028-4524-b27f-6a62f020fdca", e),
              a("494d97a6-9e31-45e0-9dae-f3793c731336", e),
              a("a838c4b0-7db5-4ac7-8d52-e8c5b82aa376", e),
              a("e3b65e65-636b-4dfd-bb42-65a18c5dce4a", e),
              a("5121acde-313d-4517-ae70-6a54ca5d775a", e),
              a("8c8ed496-948f-4672-879b-4d9575406577", e),
              a("8e95dcd0-704f-4121-8be6-088a3812f838", e),
            ]
          : void 0;
    ((o = {
      BackgroundImage: "images/story/background_training.jpg",
      Image: "",
      Name: "UI_CAMPAIGN_ICA_FACILITY_TITLE",
      Properties: { BackgroundImage: "images/story/background_training.jpg" },
      StoryData: r,
      Type: "training",
    }),
      (n = {
        BackgroundImage: "images/story/background_season1.jpg",
        Image: "",
        Name: "UI_SEASON_1",
        Properties: { BackgroundImage: "images/story/background_season1.jpg" },
        StoryData: s,
        Type: "mission",
      }),
      (c = {
        BackgroundImage: "images/story/background_season2.jpg",
        Image: "",
        Name: "UI_SEASON_2",
        Properties: { BackgroundImage: "images/story/background_season2.jpg" },
        StoryData: t,
        Type: "mission",
      }),
      (l =
        "h3" === e
          ? {
              BackgroundImage: null,
              Image: "",
              Name: "UI_SEASON_3",
              Properties: {
                BackgroundImage: "images/story/background_season3.jpg",
              },
              StoryData: i,
              Type: "mission",
            }
          : void 0),
      (d =
        "h3" === e
          ? {
              Name: "UI_MENU_PAGE_HUB_SEVEN_DEADLY_SINS",
              Image: "",
              Type: "campaign",
              BackgroundImage: "images/story/background_deadlysins.jpg",
              StoryData: u,
            }
          : void 0));
  }
  const u = {
    Name: "UI_CONTRACT_CAMPAIGN_WHITE_SPIDER_TITLE",
    Image: "images/story/tile_whitespider.jpg",
    Type: "campaign",
    BackgroundImage:
      "h1" === e ? null : "images/story/background_whitespider.jpg",
    StoryData: [
      a("024b6964-a3bb-4457-b085-08f9a7dc7fb7", e),
      a("7e3f758a-2435-42de-93bd-d8f0b72c63a4", e),
      a("ada6205e-6ee8-4189-9cdb-4947cccd84f4", e),
      a("a2befcec-7799-4987-9215-6a152cb6a320", e),
    ],
  };
  switch (e) {
    case "h1":
      i.push(
        {
          Name: "UI_SEASON_1",
          Image: "images/story/tile_season1.jpg",
          Type: "mission",
          BackgroundImage: null,
          StoryData: r.concat(s),
        },
        u,
      );
      break;
    case "h2":
      i.push(o, n, c, u);
      break;
    case "h3":
      i.push(o, n, c, l, {
        Name: "UI_MENU_PAGE_SIDE_MISSIONS_TITLE",
        Image: "",
        Type: "mission",
        BackgroundImage: null,
        Subgroups: [
          d,
          {
            Name: "UI_MENU_PAGE_SPECIAL_ASSIGNMENTS_TITLE",
            Image: "",
            Type: "campaign",
            BackgroundImage: "images/story/background_special_assignments.jpg",
            StoryData: [
              a("179563a4-727a-4072-b354-c9fff4e8bff0", e),
              a("a8036782-de0a-4353-b522-0ab7a384bade", e),
              a("f1ba328f-e3dd-4ef8-bb26-0363499fdd95", e),
              a("0b616e62-af0c-495b-82e3-b778e82b5912", e),
            ],
          },
          u,
          {
            Name: "UI_MENU_PAGE_BONUS_MISSIONS_TITLE",
            Image: "",
            Type: "campaign",
            BackgroundImage: "images/story/background_bonus_missions.jpg",
            StoryData: [
              a("00000000-0000-0000-0001-000000000006", e),
              a("00000000-0000-0000-0001-000000000005", e),
              a("ced93d8f-9535-425a-beb9-ef219e781e81", e),
              a("c414a084-a7b9-43ce-b6ca-590620acd87e", e),
              a("4e45e91a-94ca-4d89-89fc-1b250e608e73", e),
            ],
          },
          {
            Name: "UI_MENU_PAGE_HITS_ELEMENT_CATEGORY_SARAJEVOSIX",
            Image: "",
            Type: "campaign",
            BackgroundImage: "images/story/background_sarajevosix.jpg",
            StoryData: [
              a("dd906289-7c32-427f-b689-98ae645b407f", e),
              a("350ceea9-cfa9-4639-a66b-0d4de586eeee", e),
              a("59966a7f-3348-48da-a56c-4447aa548c85", e),
              a("30c3546d-9881-45fa-8c7a-8b2c76b03e59", e),
              a("1c82c1e3-fe61-4001-a173-81fa11023460", e),
              a("781c68ca-9318-40bf-9cc1-232007be02bf", e),
            ],
          },
        ].filter(Boolean),
        StoryData: [],
        Properties: {
          BackgroundImage: "images/story/background_side_missions.jpg",
        },
      });
  }
  return (jb.hooks.contributeCampaigns.call(i, a, sm, e), i.filter(Boolean));
}
function nm(e, t) {
  const a = YE(om(e, t)),
    i = (e) => {
      for (const t of e)
        t.Subgroups && (a.push(...t.Subgroups), i(t.Subgroups));
    };
  return (i(a), a);
}
var cm = f(require("assert")),
  lm = class e {
    constructor() {
      ((this._currentCampaign = []),
        (this._initialized = !1),
        (this._initializationAttempted = !1),
        (this._resetMinimum = 1),
        (this._currentMission = void 0),
        (this._inValidCampaignRun = !1),
        (this._completedMissions = []),
        (this._timeCalcEntries = []),
        (this._currentMissionTotalTime = 0),
        (this._campaignTotalTime = 0),
        (this._raceMode = void 0),
        (this._currentMissionGameVersion = "h3"),
        (this._liveSplitClient = new tm("127.0.0.1:16834")));
    }
    missionIntentResolved(t, a) {
      e._isClub27(t) && e._isBangkokDefaultStartLocation(a)
        ? (this._resetMinimum = 10)
        : (this._resetMinimum = 0);
    }
    async startMission(e, t, a) {
      if (!this._checkInit()) return;
      this._currentMissionGameVersion = t;
      const i = (function (e, t, a) {
        const i = nm(t, a),
          r = (e) => i.find((t) => t.Name === e),
          s = (e) =>
            e.filter((e) => "Mission" === e.Type).map((e) => e.Data.Id),
          o = s([
            ...(r("UI_SEASON_1")?.StoryData ?? []),
            ...(r("UI_SEASON_2")?.StoryData ?? []),
            ...(r("UI_SEASON_3")?.StoryData ?? []),
          ]);
        if (-1 === o.indexOf(e))
          return i.map((e) => s(e.StoryData ?? [])).find((t) => t.includes(e));
        switch (Rd("autoSplitterCampaign")) {
          case 1:
            return o.slice(0, 6);
          case 2:
            return o.slice(6, 15);
          case 3:
            return o.slice(15, o.length);
          default:
            return o;
        }
      })(e, t, a);
      if (void 0 === i) return void this._invalidateRun(e);
      this._currentCampaign = i;
      if (0 === this._currentCampaign.indexOf(e))
        return (
          (this._currentMission = e),
          await this._resetCampaign(),
          void (await this._pushGameTime())
        );
      if (this._inValidCampaignRun) {
        const t = this._completedMissions.length;
        if (e === this._currentMission) {
          return (
            e === this._completedMissions[t - 1] &&
              (this._completedMissions.pop(),
              this._unsplitLastTimeCalcEntry(),
              this._isRaceMode ||
                (dm(await this._liveSplitClient.unsplit(), "unsplit"),
                dm(await this._liveSplitClient.startTimer(), "startTimer"),
                dm(
                  await this._liveSplitClient.pauseGameTime(),
                  "pauseGameTime",
                ))),
            void (await this._pushGameTime())
          );
        }
        e === this._currentCampaign[t]
          ? ((this._currentMission = e),
            (this._currentMissionTotalTime = 0),
            await this._pushGameTime(),
            this._isRaceMode ||
              (dm(await this._liveSplitClient.startTimer(), "startTimer"),
              dm(await this._liveSplitClient.pauseGameTime(), "pauseGameTime")))
          : this._invalidateRun(e);
      }
    }
    async failMission(t) {
      if (this._checkInit() && this._inValidCampaignRun) {
        cm.default.ok(
          void 0 !== this._currentMission,
          "current mission undefined while in campaign run",
        );
        const a = this._addMissionTime(t);
        (this._addTimeCalcEntry(
          this._currentMission,
          this._currentMissionGameVersion,
          a,
          !1,
        ),
          e._logAttempt(a),
          await this._pushGameTime());
      }
    }
    async completeMission(t) {
      if ((e._logAttempt(t), this._checkInit() && this._inValidCampaignRun)) {
        cm.default.ok(
          void 0 !== this._currentMission,
          "current mission undefined while in campaign run",
        );
        const e = this._addMissionTime(t);
        if (
          (this._addTimeCalcEntry(
            this._currentMission,
            this._currentMissionGameVersion,
            e,
            !0,
          ),
          Ad(
            "info",
            `Total mission time with resets: ${this._currentMissionTotalTime}`,
          ),
          this._completedMissions.push(this._currentMission),
          await this._pushGameTime(),
          this._isRaceMode)
        ) {
          if (this._completedMissions.length === this._currentCampaign.length) {
            (dm(await this._liveSplitClient.split(), "split"),
              dm(await this._liveSplitClient.pause(), "pause"));
            const e = Math.floor(this._campaignTotalTime);
            Ad(
              "info",
              `Total campaign in-game time with resets: ${Math.floor(e / 60)}:${Math.floor(e % 60)}`,
            );
          }
        } else
          (dm(await this._liveSplitClient.split(), "split"),
            this._completedMissions.length === this._currentCampaign.length &&
              (dm(await this._liveSplitClient.pause(), "pause"),
              Ad(
                "info",
                `TimeCalc link(s):\n${this._generateTimeCalcLinks()}`,
              )));
      }
    }
    async init() {
      if (Rd("liveSplit"))
        try {
          (dm(await this._liveSplitClient.connect(), "connect"),
            dm(await this._liveSplitClient.initGameTime(), "initGameTime"),
            dm(await this._liveSplitClient.pauseGameTime(), "pauseGameTime"),
            Ad("debug", "LiveSplit initialized"),
            (this._initialized = !0),
            (this._initializationAttempted = !0));
        } catch (e) {
          (Ad("debug", "Failed to initialize LiveSplit: "), Ad("debug", e));
        }
      else this._initializationAttempted = !0;
    }
    _checkInit() {
      return (
        this._initializationAttempted ||
          Ad(
            "error",
            "Tried to perform LiveSplit action before LiveSplit initialization finished.",
          ),
        this._initialized
      );
    }
    static _logAttempt(e) {
      Ad("info", `Time (with milliseconds): ${Math.floor(e)} (${e})`);
    }
    get _isRaceMode() {
      return (
        void 0 === this._raceMode &&
          (this._raceMode = !0 === Rd("autoSplitterRacetimegg")),
        this._raceMode
      );
    }
    async _invalidateRun(e) {
      Ad(
        "info",
        "Entered invalid mission for current campaign state, invalidating autosplitter run. Start first mission of a campaign to reset and start a new run.",
      );
      const t = this._currentCampaign[this._completedMissions.length];
      (Ad("info", "Detected campaign missions: " + this._currentCampaign),
        Ad("info", "Completed missions: " + this._completedMissions),
        Ad("info", "Next campaign mission detected: " + t),
        Ad("info", "Attempted to start mission: " + e),
        (this._inValidCampaignRun = !1),
        this._isRaceMode || dm(await this._liveSplitClient.pause(), "pause"));
    }
    async _resetCampaign() {
      (Ad("info", "Starting new autosplitter campaign."),
        Ad("info", `Detected campaign missions: ${this._currentCampaign}`),
        (this._completedMissions = []),
        (this._timeCalcEntries = []),
        (this._inValidCampaignRun = !0),
        (this._currentMissionTotalTime = 0),
        (this._campaignTotalTime = 0),
        this._isRaceMode ||
          (dm(await this._liveSplitClient.reset(), "reset"),
          dm(await this._liveSplitClient.startTimer(), "startTimer"),
          dm(await this._liveSplitClient.pauseGameTime(), "pauseGameTime")));
    }
    static _isClub27(e) {
      return [
        "db341d9f-58a4-411d-be57-0bc4ed85646b",
        "ad5f9051-045d-4b8e-8a4d-d84429f467f8",
      ].includes(e);
    }
    static _isBangkokDefaultStartLocation(e) {
      return ["9ddbd515-2519-4c16-98aa-0f87af5d8ef5"].includes(e);
    }
    async _setGameTime(e) {
      const t = Math.floor(e),
        a = Math.floor(t / 60),
        i = Math.floor(t % 60);
      (dm(await this._liveSplitClient.pauseGameTime(), "pauseGameTime"),
        dm(
          await this._liveSplitClient.setGameTime(`${a}:${i}.00`),
          "setGameTime",
        ));
    }
    _addMissionTime(e) {
      let t = Math.floor(e);
      return (
        e <= this._resetMinimum
          ? (t = this._resetMinimum)
          : e > 0 && e <= 1 && (t = 1),
        (this._currentMissionTotalTime += t),
        (this._campaignTotalTime += t),
        t
      );
    }
    async _pushGameTime() {
      this._initialized && (await this._setGameTime(this._campaignTotalTime));
    }
    _getMissionLocationName(e, t) {
      const a = jb.resolveContract(e, t);
      if (!a) return;
      const [, , i] = Wf(a.Metadata.ScenePath, a.Data.Bricks) || [
        void 0,
        void 0,
        void 0,
      ];
      return i;
    }
    _addTimeCalcEntry(e, t, a, i) {
      const r = this._getMissionLocationName(e, t);
      if (!r) return;
      const s = { contractId: e, location: r, time: a, isCompleted: i };
      this._timeCalcEntries.push(s);
    }
    _unsplitLastTimeCalcEntry() {
      const e = this._timeCalcEntries.pop();
      e && ((e.isCompleted = !1), this._timeCalcEntries.push(e));
    }
    _generateTimeCalcLinks() {
      const e =
          "https://solderq35.github.io/fg-time-calc/?mode=0&fs3=1&ft2=1&f3t1=1&f4t0=1&d=:&o1=1&fps=",
        t = [],
        a = new URLSearchParams(),
        i = this._timeCalcEntries.filter((e) => e.isCompleted),
        r = this._timeCalcEntries.filter((e) => !e.isCompleted);
      let s = 0;
      i.forEach((e) => {
        ((s += 1),
          a.set(`t${s}`, `${this._formatSecondsToTime(e.time)}`),
          a.set(`c${s}`, e.location));
      });
      if (i.length + r.length + 1 > 40) {
        const i = new URL(e);
        ((s += 2),
          a.set(
            `t${s}`,
            `${this._formatSecondsToTime(r.reduce((e, t) => e + Math.floor(t.time), 0))}`,
          ),
          a.set(`c${s}`, "Combined reset time"),
          (i.search +=
            "&" + a.toString().replaceAll("+", "%20").replaceAll("%3A", ":")),
          t.push(i.toString()),
          (s = 0),
          r.length);
      } else s += 1;
      let o = "",
        n = 0;
      r.forEach((e) => {
        ((s += 1),
          o === e.location ? (n += 1) : ((o = e.location), (n = 1)),
          a.set(`t${s}`, `${this._formatSecondsToTime(e.time)}`),
          a.set(`c${s}`, `${e.location} reset ${n}`));
      });
      const c = new URL(e);
      return (
        (c.search +=
          "&" + a.toString().replaceAll("+", "%20").replaceAll("%3A", ":")),
        t.push(c.toString()),
        t.join("\n")
      );
    }
    _formatSecondsToTime(e) {
      const t = Math.floor(e);
      if (t < 60) return t;
      return `${Math.floor(t / 60)}:${Math.floor(t % 60)}`;
    }
  };
function dm(e, t) {
  e || Ad("error", "LiveSplit Server internal error on: " + t);
}
var um = new lm(),
  pm = {};
I(pm, { handleMultiplayerEvent: () => mm, multiplayerRouter: () => Am });
var $m = f(Ys()),
  _m = f(Jr()),
  Im = require("crypto"),
  Am = (0, $m.Router)(),
  fm = new Map();
function mm(e, t) {
  const a = t.ghost || {};
  switch (e.Name) {
    case "Ghost_PlayerDied":
      return ((a.deaths += 1), !0);
    case "Ghost_TargetUnnoticed":
      return ((a.unnoticedKills += 1), !0);
    case "Opponents": {
      const t = e.Value;
      return ((a.Opponents = t.ConnectedSessions), !0);
    }
    case "MatchOver": {
      const t = e.Value;
      return (
        (a.Score = t.MyScore),
        (a.OpponentScore = t.OpponentScore),
        (a.IsWinner = t.IsWinner),
        (a.IsDraw = t.IsDraw),
        (a.timerEnd = e.Timestamp),
        !0
      );
    }
    default:
      return !1;
  }
}
(Am.post("/GetRequiredResourcesForPreset", (0, _m.json)(), (e, t) => {
  const a = Qd("MultiplayerPresets", !1).find((t) => t.Id === e.body.id);
  if (!a)
    return (
      t.status(404).end(),
      void Ad("warn", "unknown multiplayer preset id requested")
    );
  const i = a.Data.Contracts.map((t) =>
    SA(jb.resolveContract(t, e.gameVersion), e.jwt.unique_name, e.gameVersion),
  ).filter(Boolean);
  t.json(
    i.map((e) => ({
      Id: e.Contract.Metadata.Id,
      DlcId: e.Data.DlcName,
      Resources: [
        e.Contract.Metadata.ScenePath,
        ...(e.Contract.Data.Bricks ?? []),
      ],
    })),
  );
}),
  Am.post("/RegisterToMatch", (0, _m.json)(), (e, t) => {
    const a = Qd("MultiplayerPresets", !1);
    e.body.presetId ||
      (e.body.presetId = "d72d7cc9-ee26-4c7d-857a-75abdc9ccb61");
    const i = a.find((t) => t.Id === e.body.presetId);
    if (!i)
      return (
        t.status(404).end(),
        void Ad("warn", `Unknown preset id requested (${e.body.presetId})`)
      );
    const r =
      i.Data.Contracts[Math.trunc(Math.random() * i.Data.Contracts.length)];
    if (e.body.matchId === UE)
      ((e.body.matchId = (0, Im.randomUUID)()),
        fm.set(e.body.matchId, {
          MatchData: { contractId: r },
          Players: [e.jwt.unique_name],
        }));
    else {
      if (!fm.has(e.body.matchId)) return void t.status(404).end();
      {
        const t = fm.get(e.body.matchId);
        for (const a of t.Players)
          Ym(a, {
            MatchId: e.body.matchId,
            Type: 1,
            PlayerId: e.jwt.unique_name,
            MatchData: null,
          });
        t.Players.push(e.jwt.unique_name);
      }
    }
    (Ym(e.jwt.unique_name, {
      MatchId: e.body.matchId,
      Type: 3,
      PlayerId: UE,
      MatchData: fm.get(e.body.matchId).MatchData,
    }),
      t.json({
        MatchId: e.body.matchId,
        PreferedHostIndex: 0,
        Tickets: [],
        MatchMode: null,
        MatchData: null,
        MatchStats: {},
        MatchType: 0,
      }));
  }),
  Am.post("/SetMatchData", (0, _m.json)(), (e, t) => {
    const a = fm.get(e.body.matchId);
    a?.Players.includes(e.jwt.unique_name)
      ? ((a.MatchData[e.body.key] = e.body.value),
        t.json({
          MatchId: e.body.matchId,
          PreferedHostIndex: 0,
          Tickets: [],
          MatchMode: null,
          MatchData: a.MatchData,
          MatchStats: {},
          MatchType: 0,
        }))
      : t.status(404).end();
  }),
  Am.post("/RegisterToPreset", (0, _m.json)(), (e, t) => {
    t.status(501).end();
  }));
var gm = {};
I(gm, {
  calculateMpScore: () => Em,
  encodePushMessage: () => hm,
  getMultiplayerLoadoutData: () => Tm,
});
var Cm = require("crypto"),
  bm = f(require("assert"));
function Em(e) {
  if (!e.ghost) throw new Error("no mp details on mp session");
  return {
    Header: { GameMode: "Ghost", Result: e.ghost.IsWinner ? "Win" : "Loss" },
    Metadata: {},
    Data: {
      Score: e.ghost.Score,
      OpponentScore: e.ghost.OpponentScore,
      PacifiedNpcs: [...e.pacifications].filter(
        (t) => !e.npcKills.has(t) && !e.targetKills.has(t),
      ).length,
      DisguisesUsed: e.disguisesUsed.size,
      DisguisesRuined: e.disguisesRuined.size,
      BodiesHidden: e.bodiesHidden.size,
      UnnoticedKills: e.ghost.unnoticedKills,
      KilledNpcs: e.npcKills.size + e.crowdNpcKills,
      Deaths: e.ghost.deaths,
      Duration: e.duration,
    },
  };
}
function Tm(e, t, a) {
  let i = eE(t, a);
  return (
    (i && "disguise" === i.Type) ||
      ((i = eE("TOKEN_OUTFIT_HITMANSUIT", a)), bm.default.ok(i)),
    (i.GameAsset = null),
    (i.DisplayNameLocKey = `UI_${i.Id}_NAME`),
    [
      {
        SlotName: "disguise",
        SlotId: "3",
        Recommended: {
          item: {
            InstanceId: (0, Cm.randomUUID)(),
            ProfileId: UE,
            Unlockable: i,
            Properties: {},
          },
          type: "disguise",
          owned: !0,
        },
      },
    ]
  );
}
function hm(e, t) {
  const a = JSON.stringify(t),
    i = Buffer.byteLength(a, "utf8");
  let r = i + 8 + 80;
  r += 4 - (r % 4);
  const s = Buffer.alloc(r);
  let o = 0;
  return (
    (o = s.writeUInt32LE(r, o)),
    (o = s.writeUInt32LE(12, o)),
    (o = s.writeUInt16LE(8, o)),
    (o = s.writeUInt16LE(14, o)),
    (o = s.writeUInt16LE(7, o)),
    (o = s.writeUInt16LE(8, o)),
    (o = s.writeUInt32LE(8, o)),
    (o = s.writeUInt32BE(2, o)),
    (o = s.writeUInt32LE(20, o)),
    (o = s.writeUInt16LE(0, o)),
    (o = s.writeUInt16LE(14, o)),
    (o = s.writeUInt16LE(20, o)),
    (o = s.writeUInt16LE(6, o)),
    (o = s.writeUInt16LE(0, o)),
    (o = s.writeUInt16LE(5, o)),
    (o = s.writeUInt16LE(8, o)),
    (o = s.writeUInt16LE(12, o)),
    (o = s.writeUInt32LE(14, o)),
    (o = s.writeUInt32BE(66304, o)),
    (o = s.writeUInt32LE(20, o)),
    (o = s.writeBigUInt64LE(e, o)),
    (o = s.writeUInt16LE(8, o)),
    (o = s.writeUInt16LE(12, o)),
    (o = s.writeUInt16LE(6, o)),
    (o = s.writeUInt16LE(8, o)),
    (o = s.writeUInt32LE(8, o)),
    (o = s.writeUInt32BE(33536, o)),
    (o = s.writeUInt32LE(4, o)),
    (o = s.writeUInt32LE(i, o)),
    (o = s.write(a, o, "utf8")),
    s.toString("base64")
  );
}
var Om = f(b()),
  ym = {};
function Sm(e, t, a) {
  const i = kI(t, "h3");
  ((i.Extensions.CPD[a] = { ...i.Extensions.CPD[a], ...e }), KI(t, "h3"));
}
function Lm(e, t) {
  const a = kI(e, "h3");
  if (!Object.keys(a.Extensions.CPD).includes(t)) {
    const a = Qd("DefaultCpdConfigs", !1);
    Sm(Object.keys(a).includes(t) ? a[t] : {}, e, t);
  }
  return (
    Rd("gameplayUnlockAllFreelancerMasteries") &&
      "f8ec92c2-4fa2-471e-ae08-545480c746ee" === t &&
      (a.Extensions.CPD[t].EvergreenLevel = bE.length),
    a.Extensions.CPD[t]
  );
}
I(ym, { getCpd: () => Lm, setCpd: () => Sm });
var Nm,
  Rm = {
    defaultMerge: Symbol("deepmerge-ts: default merge"),
    skip: Symbol("deepmerge-ts: skip"),
  };
Rm.defaultMerge;
function Dm(e, t) {
  return t;
}
function Pm(e, t) {
  return e.filter((e) => void 0 !== e);
}
function Mm(e) {
  return "object" != typeof e || null === e
    ? 0
    : Array.isArray(e)
      ? 2
      : (function (e) {
            if (!Gm.includes(Object.prototype.toString.call(e))) return !1;
            const { constructor: t } = e;
            if (void 0 === t) return !0;
            const a = t.prototype;
            if (
              null === a ||
              "object" != typeof a ||
              !Gm.includes(Object.prototype.toString.call(a))
            )
              return !1;
            if (!a.hasOwnProperty("isPrototypeOf")) return !1;
            return !0;
          })(e)
        ? 1
        : e instanceof Set
          ? 3
          : e instanceof Map
            ? 4
            : 5;
}
function Um(e, t) {
  return (
    "object" == typeof e && Object.prototype.propertyIsEnumerable.call(e, t)
  );
}
function wm(e) {
  let t = 0,
    a = e[0]?.[Symbol.iterator]();
  return {
    [Symbol.iterator]: () => ({
      next() {
        for (;;) {
          if (void 0 === a) return { done: !0, value: void 0 };
          const i = a.next();
          if (!0 !== i.done) return { done: !1, value: i.value };
          ((t += 1), (a = e[t]?.[Symbol.iterator]()));
        }
      },
    }),
  };
}
!(function (e) {
  ((e[(e.NOT = 0)] = "NOT"),
    (e[(e.RECORD = 1)] = "RECORD"),
    (e[(e.ARRAY = 2)] = "ARRAY"),
    (e[(e.SET = 3)] = "SET"),
    (e[(e.MAP = 4)] = "MAP"),
    (e[(e.OTHER = 5)] = "OTHER"));
})(Nm || (Nm = {}));
var Gm = ["[object Object]", "[object Module]"];
var vm = {
  mergeRecords: function (e, t, a) {
    const i = {};
    for (const r of (function (e) {
      const t = new Set();
      for (const a of e)
        for (const e of [...Object.keys(a), ...Object.getOwnPropertySymbols(a)])
          t.add(e);
      return t;
    })(e)) {
      const s = [];
      for (const t of e) Um(t, r) && s.push(t[r]);
      if (0 === s.length) continue;
      const o = t.metaDataUpdater(a, { key: r, parents: e }),
        n = km(s, t, o);
      n !== Rm.skip &&
        ("__proto__" === r
          ? Object.defineProperty(i, r, {
              value: n,
              configurable: !0,
              enumerable: !0,
              writable: !0,
            })
          : (i[r] = n));
    }
    return i;
  },
  mergeArrays: function (e) {
    return e.flat();
  },
  mergeSets: function (e) {
    return new Set(wm(e));
  },
  mergeMaps: function (e) {
    return new Map(wm(e));
  },
  mergeOthers: function (e) {
    return e.at(-1);
  },
};
function Bm(...e) {
  return (function (e, t) {
    const a = (function (e, t) {
      return {
        defaultMergeFunctions: vm,
        mergeFunctions: {
          ...vm,
          ...Object.fromEntries(
            Object.entries(e)
              .filter(([e, t]) => Object.hasOwn(vm, e))
              .map(([e, t]) => (!1 === t ? [e, vm.mergeOthers] : [e, t])),
          ),
        },
        metaDataUpdater: e.metaDataUpdater ?? Dm,
        deepmerge: t,
        useImplicitDefaultMerging: e.enableImplicitDefaultMerging ?? !1,
        filterValues: !1 === e.filterValues ? void 0 : (e.filterValues ?? Pm),
        actions: Rm,
      };
    })(e, i);
    function i(...e) {
      return km(e, a, t);
    }
    return i;
  })({})(...e);
}
function km(e, t, a) {
  const i = t.filterValues?.(e, a) ?? e;
  if (0 === i.length) return;
  if (1 === i.length) return Hm(i, t, a);
  const r = Mm(i[0]);
  if (0 !== r && 5 !== r)
    for (let e = 1; e < i.length; e++) if (Mm(i[e]) !== r) return Hm(i, t, a);
  switch (r) {
    case 1:
      return (function (e, t, a) {
        const i = t.mergeFunctions.mergeRecords(e, t, a);
        if (
          i === Rm.defaultMerge ||
          (t.useImplicitDefaultMerging &&
            void 0 === i &&
            t.mergeFunctions.mergeRecords !==
              t.defaultMergeFunctions.mergeRecords)
        )
          return t.defaultMergeFunctions.mergeRecords(e, t, a);
        return i;
      })(i, t, a);
    case 2:
      return (function (e, t, a) {
        const i = t.mergeFunctions.mergeArrays(e, t, a);
        if (
          i === Rm.defaultMerge ||
          (t.useImplicitDefaultMerging &&
            void 0 === i &&
            t.mergeFunctions.mergeArrays !==
              t.defaultMergeFunctions.mergeArrays)
        )
          return t.defaultMergeFunctions.mergeArrays(e);
        return i;
      })(i, t, a);
    case 3:
      return (function (e, t, a) {
        const i = t.mergeFunctions.mergeSets(e, t, a);
        if (
          i === Rm.defaultMerge ||
          (t.useImplicitDefaultMerging &&
            void 0 === i &&
            t.mergeFunctions.mergeSets !== t.defaultMergeFunctions.mergeSets)
        )
          return t.defaultMergeFunctions.mergeSets(e);
        return i;
      })(i, t, a);
    case 4:
      return (function (e, t, a) {
        const i = t.mergeFunctions.mergeMaps(e, t, a);
        if (
          i === Rm.defaultMerge ||
          (t.useImplicitDefaultMerging &&
            void 0 === i &&
            t.mergeFunctions.mergeMaps !== t.defaultMergeFunctions.mergeMaps)
        )
          return t.defaultMergeFunctions.mergeMaps(e);
        return i;
      })(i, t, a);
    default:
      return Hm(i, t, a);
  }
}
function Hm(e, t, a) {
  const i = t.mergeFunctions.mergeOthers(e, t, a);
  return i === Rm.defaultMerge ||
    (t.useImplicitDefaultMerging &&
      void 0 === i &&
      t.mergeFunctions.mergeOthers !== t.defaultMergeFunctions.mergeOthers)
    ? t.defaultMergeFunctions.mergeOthers(e)
    : i;
}
var Qm = f(require("assert")),
  Km = (0, Of.Router)(),
  Fm = new Map(),
  xm = new Map();
function Ym(e, t) {
  let a;
  const i = process.hrtime.bigint();
  (a = xm.get(e))
    ? a.push({ time: i, message: hm(i, t) })
    : ((a = [{ time: i, message: hm(i, t) }]), xm.set(e, a));
}
function jm(e, t) {
  if (!t.Definition) return;
  let a = t.Definition.Context || {},
    i = "Start";
  e.objectives.set(t.Id, t);
  const r = rf(t.Definition, a, {}, { eventName: "-", currentState: i });
  (r.state && (i = r.state),
    r.context && (a = r.context),
    e.objectiveContexts.set(t.Id, a),
    e.objectiveStates.set(t.Id, i));
}
function Vm(e, t) {
  const a = {
    Settings: {},
    Context: void 0,
    Definition: void 0,
    State: void 0,
    Timers: [],
  };
  for (const e of t) {
    const t = e.Type.split(".").at(-1);
    if ("scoring" === t) {
      const t = Bm(...(e.ScoringDefinitions || []));
      let i = "Start",
        r = t.Context;
      const s = rf(
        t,
        r,
        {},
        { eventName: "-", currentState: i, timers: a.Timers },
      );
      (s.state && (i = s.state),
        s.context && (r = s.context),
        (a.Definition = t),
        (a.Context = r),
        (a.State = i));
    } else ((a.Settings[t] = e), delete a.Settings[t].Type);
  }
  e.scoring = a;
}
function qm(e, t) {
  let a;
  const i = process.hrtime.bigint().toString();
  ((t.CreatedAt = new Date().toISOString().slice(0, -1)),
    (t.Token = i.toString()),
    (a = Fm.get(e))
      ? a.push({ time: i, event: t })
      : ((a = [{ time: i, event: t }]), Fm.set(e, a)));
}
var Wm = ((e) => (
    (e[(e.eDC_UNDEFINED = 0)] = "eDC_UNDEFINED"),
    (e[(e.eDC_NOT_HERO = 1)] = "eDC_NOT_HERO"),
    (e[(e.eDC_HIDDEN = 2)] = "eDC_HIDDEN"),
    (e[(e.eDC_ACCIDENT = 3)] = "eDC_ACCIDENT"),
    (e[(e.eDC_MURDER = 4)] = "eDC_MURDER"),
    e
  ))(Wm || {}),
  Xm = new Map(),
  zm = new Map();
function Jm(e, t) {
  const a = Xm.get(e);
  return a ? a.objectiveStates.get(t) : "Start";
}
function Zm(e, t, a, i, r, s = !0) {
  const o = new Date(),
    n = jb.resolveContract(t, r);
  (Qm.default.ok(n, `Failed to load ${t}`),
    0 === i &&
      lE.includes(n.Metadata.Type) &&
      (Ad(
        "debug",
        `Difficulty not set for user created contract ${t}, setting to 2`,
      ),
      (i = 2)),
    qf(n.Metadata.ScenePath, n.Metadata.Type, n.Data.Bricks || []),
    Xm.set(e, {
      Id: e,
      gameVersion: r,
      sessionStart: o,
      lastUpdate: o,
      contractId: t,
      userId: a,
      timerStart: 0,
      timerEnd: 0,
      duration: 0,
      crowdNpcKills: 0,
      targetKills: new Set(),
      npcKills: new Set(),
      bodiesHidden: new Set(),
      pacifications: new Set(),
      disguisesUsed: new Set(),
      disguisesRuined: new Set(),
      spottedBy: new Set(),
      witnesses: new Set(),
      bodiesFoundBy: new Set(),
      legacyHasBodyBeenFound: !1,
      killsNoticedBy: new Set(),
      completedObjectives: new Set(),
      failedObjectives: new Set(),
      recording: "NOT_SPOTTED",
      lastAccident: 0,
      lastKill: { legacyIsUnnoticed: !0 },
      kills: new Set(),
      compat: s,
      markedTargets: new Set(),
      currentDisguise: "4fc9396e-2619-4e66-a51e-2bd366230da7",
      difficulty: i,
      objectiveContexts: new Map(),
      objectiveStates: new Map(),
      objectives: new Map(),
      ghost: {
        deaths: 0,
        unnoticedKills: 0,
        Opponents: [],
        OpponentScore: 0,
        Score: 0,
        IsDraw: !1,
        IsWinner: !1,
        timerEnd: null,
      },
      silentAssassinLost: !1,
      challengeContexts: {},
    }),
    zm.set(a, e),
    jb.challengeService.startContract(Xm.get(e)));
}
function eg(e, t, a, i, r, s) {
  const o = r.length ? rg(t, r, a) : null;
  let n,
    c,
    l,
    d = null;
  ((n = Fm.get(t)) &&
    ((n = n.filter((e) => e.time > i)),
    Fm.set(t, n),
    (d = Array.from(n, (e) => e.event))),
    (c = xm.get(t)) &&
      ((c = c.filter((e) => e.time > s)),
      xm.set(t, c),
      (l = Array.from(c, (e) => e.message))));
  const u = { SavedTokens: o, NewEvents: d || null, NextPoll: 10 };
  return 3 === e ? u : { ...u, PushMessages: l || null };
}
function tg(e) {
  return zm.get(e);
}
function ag(e) {
  const t = tg(e);
  if (t) return Xm.get(t);
}
function ig(e, t) {
  t.markedTargets.clear();
  const a = jb.resolveContract(t.contractId, t.gameVersion),
    i = kI(t.userId, t.gameVersion);
  let r;
  if (
    ((r =
      "creation" === a.Metadata.Type &&
      "Contract ended manually: OnRestartLevel" === e.Value
        ? "GameRestart"
        : `ContractFailed:${e.Value}`),
    0 !== t.timerStart)
  ) {
    const e = t.timerEnd - t.timerStart;
    um.failMission(e);
  } else um.failMission(0);
  if (lE.includes(a.Metadata.Type)) {
    const e = t.contractId;
    (i.Extensions.PeacockPlayedContracts[e] ||
      (i.Extensions.PeacockPlayedContracts[e] = {}),
      (i.Extensions.PeacockPlayedContracts[e].LastPlayedAt =
        new Date().getTime()),
      KI(t.userId, t.gameVersion));
  }
  e: if ("arcade" === a.Metadata.Type) {
    t: if (
      "string" == typeof e.Value &&
      e.Value.startsWith("Contract ended manually")
    ) {
      if (0 === t.completedObjectives.size) break e;
      for (const e of a.Data.Objectives || [])
        if (t.completedObjectives.has(e.Id) && "primary" === e.Category)
          break t;
      break e;
    }
    (gA(i, a.Metadata.InGroup ?? a.Metadata.Id), KI(t.userId, t.gameVersion));
  }
  qm(t.userId, {
    CreatedAt: new Date().toISOString(),
    Token: process.hrtime.bigint().toString(),
    Id: (0, Xf.randomUUID)(),
    Name: "SegmentClosing",
    UserId: t.userId,
    ContractId: t.contractId,
    SessionId: null,
    ContractSessionId: e.ContractSessionId,
    Timestamp: 0,
    Value: {
      SegmentIndex: 0,
      LastEventName: "ContractFailed",
      LastEventTime: t.lastUpdate.toISOString(),
      CloseType: r,
    },
    Origin: "ContractSessionService",
    Version: oE,
    IsReplicated: !1,
  });
}
function rg(e, t, a) {
  const i = [],
    r = [],
    s = kI(e, a);
  for (const o of t) {
    let t = Xm.get(o.ContractSessionId);
    if (
      (t ||
        (Ad(
          "warn",
          "Creating a fake session to avoid problems... scoring will not work!",
        ),
        Zm(o.ContractSessionId, o.ContractId, e, kE.normal, a, !1),
        (t = Xm.get(o.ContractSessionId))),
      !t || t.contractId !== o.ContractId || t.userId !== e)
    ) {
      (Ad("debug", "No session or session user ID mismatch!"), Id(t), Id(o));
      continue;
    }
    ((t.duration = o.Timestamp), (t.lastUpdate = new Date()));
    const n = jb.resolveContract(t.contractId, a),
      c = n?.Metadata?.Type?.toLowerCase();
    jb.hooks.newEvent.call(o, { gameVersion: a, userId: e }, t);
    for (const [e, a] of t.objectives)
      try {
        const i = a.Definition;
        if (!i) continue;
        const r = t.objectiveStates.get(e),
          s = rf(i, t.objectiveContexts.get(e), o.Value, {
            eventName: o.Name,
            currentState: r,
            timestamp: o.Timestamp,
            contractId: o.ContractId,
          });
        ("Failure" === s.state &&
          ("evergreen" !== c && Ad("debug", `Objective failed: ${e}`),
          t.failedObjectives.add(e)),
          s.context &&
            (t.objectiveContexts.set(e, s.context),
            t.objectiveStates.set(e, s.state)));
      } catch (e) {
        (Ad(
          "error",
          "An error occurred while tracing C2S events, please report this!",
        ),
          Ad("error", e));
      }
    if (t.scoring) {
      const e = t.scoring.Context,
        a = t.scoring.State,
        i = rf(t.scoring.Definition, e, o.Value, {
          eventName: o.Name,
          timestamp: o.Timestamp,
          currentState: a,
          timers: t.scoring.Timers,
          contractId: o.ContractId,
        });
      i.context &&
        ((t.scoring.Context = i.context), (t.scoring.State = i.state));
    }
    if (
      (jb.challengeService.onContractEvent(o, t),
      o.Name.startsWith("ScoringScreenEndState_") && t.evergreen)
    ) {
      ((t.evergreen.scoringScreenEndState = o.Name),
        r.push(o.Name),
        i.push(process.hrtime.bigint().toString()));
      continue;
    }
    if (
      ![
        "ContractEnd",
        "ObjectiveCompleted",
        "CpdSet",
        "MissionFailed_Event",
      ].includes(o.Name) &&
      0 !== t.timerEnd &&
      o.Timestamp > t.timerEnd
    )
      i.push(process.hrtime.bigint().toString());
    else if (mm(o, t))
      (r.push(o.Name), i.push(process.hrtime.bigint().toString()));
    else {
      switch (o.Name) {
        case "HeroSpawn_Location":
          um.missionIntentResolved(o.ContractId, o.Value.RepositoryId);
          break;
        case "Kill": {
          let e = !0;
          const r = o.Value;
          if (
            (void 0 === t.firstKillTimestamp &&
              (t.firstKillTimestamp = o.Timestamp),
            t.lastKill.timestamp === o.Timestamp
              ? t.lastKill.repositoryIds?.push(r.RepositoryId)
              : ((t.lastKill = {
                  timestamp: o.Timestamp,
                  repositoryIds: [r.RepositoryId],
                }),
                "h1" === a &&
                  r.Accident &&
                  ((t.lastKill.legacyIsUnnoticed = !0), (e = !1))),
            1 === r.KillContext)
          ) {
            (Ad("debug", `${r.RepositoryId} eliminated, 47 not responsible`),
              i.push(process.hrtime.bigint().toString()),
              (t.lastKill.legacyIsUnnoticed = !0),
              (e = !1));
            continue;
          }
          if (
            (Ad("debug", `Actor ${r.RepositoryId} eliminated.`),
            e && (t.lastKill.legacyIsUnnoticed = !1),
            r.IsTarget || "creation" === c)
          ) {
            const e = {
              KillClass: r.KillClass,
              KillMethodBroad: r.KillMethodBroad,
              KillItemCategory: r.KillItemCategory,
              IsHeadshot: r.IsHeadshot,
              KillMethodStrict: r.KillMethodStrict,
              KillItemRepositoryId: r.KillItemRepositoryId,
              _RepositoryId: r.RepositoryId,
              OutfitRepoId: t.currentDisguise,
            };
            (t.kills.add(e), t.targetKills.add(r.RepositoryId));
          } else t.npcKills.add(r.RepositoryId);
          break;
        }
        case "Unnoticed_Kill":
          t.lastKill.legacyIsUnnoticed = !0;
          break;
        case "CrowdNPC_Died":
          t.crowdNpcKills += 1;
          break;
        case "Pacify":
          t.pacifications.add(o.Value.RepositoryId);
          break;
        case "BodyHidden":
          t.bodiesHidden.add(o.Value.RepositoryId);
          break;
        case "BodyFound":
          "h1" === a && (t.legacyHasBodyBeenFound = !0);
          break;
        case "Disguise":
          (Ad("debug", `Now disguised: ${o.Value}`),
            (t.currentDisguise = o.Value),
            t.disguisesUsed.add(o.Value));
          break;
        case "ContractStart": {
          const i = o.Value.Disguise;
          ((t.currentDisguise = i),
            t.disguisesUsed.add(i),
            um.startMission(t.contractId, a, e));
          break;
        }
        case "DisguiseBlown":
          t.disguisesRuined.add(o.Value);
          break;
        case "BrokenDisguiseCleared":
          t.disguisesRuined.delete(o.Value);
          break;
        case "Spotted":
          for (const e of o.Value) t.spottedBy.add(e);
          break;
        case "Witnesses":
          for (const e of o.Value)
            (t.witnesses.add(e), t.killsNoticedBy.add(e));
          break;
        case "SecuritySystemRecorder": {
          const e = o.Value;
          "spotted" === e.event && "ERASED" !== t.recording
            ? (t.recording = "SPOTTED")
            : ("destroyed" !== e.event && "erased" !== e.event) ||
              (t.recording = "ERASED");
          break;
        }
        case "IntroCutEnd":
          t.timerStart ||
            ((t.timerStart = o.Timestamp),
            Ad("debug", `Mission started at: ${t.timerStart}`));
          break;
        case "exit_gate":
          ((t.timerEnd = o.Timestamp),
            Ad("debug", `Mission ended at: ${t.timerEnd}`));
          break;
        case "ContractEnd":
          t.timerEnd ||
            ((t.timerEnd = o.Timestamp),
            Ad("debug", `Mission ended at: ${t.timerEnd}`));
          break;
        case "ObjectiveCompleted":
          t.completedObjectives.add(o.Value.Id);
          break;
        case "AccidentBodyFound":
          t.lastAccident = o.Timestamp;
          break;
        case "MurderedBodySeen":
          o.Timestamp !== t.lastAccident &&
            (t.bodiesFoundBy.add(o.Value.Witness),
            o.Value.IsWitnessTarget || (t.silentAssassinLost = !0));
          break;
        case "ActorTagged": {
          const e = o.Value;
          e.Tagged
            ? e.Tagged && t.markedTargets.add(e.RepositoryId)
            : t.markedTargets.delete(e.RepositoryId);
          break;
        }
        case "StartingSuit":
          t.currentDisguise = o.Value;
          break;
        case "ContractFailed":
          ((t.timerEnd = o.Timestamp), ig(o, t));
          break;
        case "OpportunityEvents": {
          const t = o.Value,
            i = s.Extensions.opportunityprogression;
          ("Completed" === t.Event && (i[t.RepositoryId] = !0), KI(e, a));
          break;
        }
        case "AreaDiscovered":
          if (t.evergreen) {
            const e = o.Value.RepositoryId,
              a = Qd("AreaMap", !1)[e],
              i = s.Extensions.ChallengeProgression;
            (Ad("debug", `Area discovered: ${e}`),
              (i[a] ??= {
                CurrentState: "Start",
                Ticked: !1,
                Completed: !1,
                State: { AreaIDs: [] },
              }),
              (i[a].State ??= { AreaIDs: [] }),
              (i[a].State.AreaIDs ??= []),
              jb.challengeService.challengeOnEvent(o, t, a, s, {
                context: i[a].State,
                state: "Start",
                timers: [],
                timesCompleted: 0,
              }));
          }
          break;
        case "CpdSet":
          n?.Metadata.CpdId && Sm(o.Value, e, n.Metadata.CpdId);
          break;
        case "Evergreen_Payout_Data":
          t.evergreen && (t.evergreen.payout = o.Value.Total_Payout);
          break;
        case "MissionFailed_Event":
          t.evergreen && (t.evergreen.failed = !0);
          break;
        case "ItemPickedUp":
          Ad(
            "info",
            `Picked up item with repository ID: ${o.Value.RepositoryId}`,
          );
          break;
        case "setpieces":
          Ad("debug", `Setpiece: ${o.Value.RepositoryId}`);
          break;
        case "ItemDropped":
          Ad("debug", `Item dropped: ${o.Value.RepositoryId}`);
          break;
        case "AmbientChanged":
          Ad("debug", `Ambient switched to ${o.Value.AmbientValue}`);
      }
      (r.push(o.Name), i.push(process.hrtime.bigint().toString()));
    }
  }
  return (
    r.length > 0 &&
      Ad("debug", `Event summary: ${Om.default.gray(r.join(", "))}`),
    i
  );
}
(Km.post(
  "/SaveAndSynchronizeEvents3",
  (0, yf.json)({ limit: "10Mb" }),
  (e, t) => {
    e.body.userId === e.jwt.unique_name
      ? Array.isArray(e.body.values)
        ? t.json(
            eg(
              3,
              e.jwt.unique_name,
              e.gameVersion,
              e.body.lastEventTicks,
              e.body.values,
            ),
          )
        : t.status(400).end()
      : t.status(403).send();
  },
),
  Km.post(
    "/SaveAndSynchronizeEvents4",
    (0, yf.json)({ limit: "10Mb" }),
    (e, t) => {
      e.body.userId === e.jwt.unique_name
        ? Array.isArray(e.body.values)
          ? t.json(
              eg(
                4,
                e.jwt.unique_name,
                e.gameVersion,
                e.body.lastEventTicks,
                e.body.values,
                e.body.lastPushDt,
              ),
            )
          : t.status(400).end()
        : t.status(403).send();
    },
  ),
  Km.post("/SaveEvents2", (0, yf.json)({ limit: "10Mb" }), (e, t) => {
    e.jwt.unique_name === e.body.userId
      ? t.json(rg(e.body.userId, e.body.values, e.gameVersion))
      : t.status(403).send();
  }));
var sg,
  og,
  ng,
  cg = require("crypto"),
  lg = class e {
    constructor(e) {
      ((this.controller = e),
        (this.challenges = {
          h1: new Map(),
          h2: new Map(),
          h3: new Map(),
          scpc: new Map(),
        }),
        (this.groups = {
          h1: new Map(),
          h2: new Map(),
          h3: new Map(),
          scpc: new Map(),
        }),
        (this.groupContents = {
          h1: new Map(),
          h2: new Map(),
          h3: new Map(),
          scpc: new Map(),
        }),
        (this._dependencyTree = {
          h1: new Map(),
          h2: new Map(),
          h3: new Map(),
          scpc: new Map(),
        }),
        (this.challengePacks = new Map([
          [
            "elusive",
            {
              Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ELUSIVE",
              Description: "",
              GameVersions: ["h1", "h2", "h3"],
              Image: "images/challenges/categories/elusive/tile.jpg",
              Icon: "elusive",
            },
          ],
          [
            "arcade",
            {
              Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ARCADE",
              Description: "",
              GameVersions: ["h3"],
              Image: "images/backgrounds/gamemode_arcade.jpg",
              Icon: "arcademode",
            },
          ],
          [
            "versus",
            {
              Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_VERSUS",
              Description: "",
              GameVersions: ["h2", "h3"],
              Image: "images/challenges/categories/versus/tile.jpg",
              Icon: "versus",
            },
          ],
          [
            "argentum-pack",
            {
              Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ARGENTUM",
              Description: "",
              GameVersions: ["h3"],
              Image: "images/challenges/categories/packargentum/tile.jpg",
              Icon: "challenge_category_feats",
            },
          ],
          [
            "argon-pack",
            {
              Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ARGON",
              Description: "",
              GameVersions: ["h3"],
              Image: "images/challenges/categories/packargon/tile.jpg",
              Icon: "challenge_category_feats",
            },
          ],
          [
            "cheesecake-pack",
            {
              Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_CHEESECAKE",
              Description: "",
              GameVersions: ["h3"],
              Image: "images/challenges/categories/packcheesecake/tile.jpg",
              Icon: "challenge_category_feats",
            },
          ],
        ])),
        (this.globalMergeGroups = new Map([
          [
            "classic",
            {
              gameVersions: ["h1", "h2", "h3", "scpc"],
              groupId: "classic",
              location: "GLOBAL_CLASSIC_CHALLENGES",
            },
          ],
          [
            "elusive",
            {
              gameVersions: ["h1", "h2", "h3", "scpc"],
              groupId: "elusive",
              location: "GLOBAL_ELUSIVES_CHALLENGES",
            },
          ],
          [
            "feats",
            {
              gameVersions: ["h1", "h2", "scpc"],
              groupId: "feats",
              location: "GLOBAL_ESCALATION_CHALLENGES",
            },
          ],
        ])));
    }
    registerChallenge(e, t, a, i) {
      this.registerChallengeList([e], t, a, i);
    }
    registerChallengeList(e, t, a, i) {
      const r = this.groupContents[i];
      r.has(a) || r.set(a, new Map());
      const s = r.get(a);
      s.has(t) || s.set(t, new Set());
      const o = s.get(t);
      for (const r of e)
        ((r.inGroup = t),
          (r.inLocation = a),
          (r.Type ??= "contract"),
          this.challenges[i].set(r.Id, r),
          o.add(r.Id),
          this.checkHeuristics(r, i));
    }
    registerGroup(e, t, a) {
      const i = this.groups[a];
      (i.has(t) || i.set(t, new Map()), i.get(t)?.set(e.CategoryId, e));
    }
    hasGroup(e, t, a) {
      return void 0 !== this.groups[a]?.get(t)?.get(e);
    }
    getChallengeById(e, t) {
      return this.challenges[t].get(e);
    }
    getChallengeIds(e) {
      return Array.from(this.challenges[e].keys());
    }
    removeChallenge(e, t) {
      const a = this.challenges[t].get(e);
      return (
        !!a &&
        this.challenges[t].delete(e) &&
        this.groupContents[t].get(a.inLocation).get(a.inGroup).delete(e)
      );
    }
    getChallengesUnlockables(e) {
      return [...this.challenges[e].values()].reduce(
        (e, t) => (
          t?.Drops?.length && t.Drops.forEach((a) => (e[a] = t.Id)),
          e
        ),
        {},
      );
    }
    getGroupByIdLoc(e, t, a) {
      const i = this.groups[a],
        r = i.get(t)?.get(e);
      if (e?.includes("featured"))
        return i.get("GLOBAL_FEATURED_CHALLENGES")?.get(e);
      if (e?.includes("arcade"))
        return i.get("GLOBAL_ARCADE_CHALLENGES")?.get(e);
      if (e?.includes("escalation"))
        return i.get("GLOBAL_ESCALATION_CHALLENGES")?.get(e);
      const s = this.globalMergeGroups.get(e);
      if (s && t !== s.location && s.gameVersions.includes(a)) {
        const e = i.get(s.location)?.get(s.groupId);
        return r ? Ef(r, e) : e;
      }
      return r;
    }
    getChallengesForGroup(e, t) {
      return {
        [e]: Array.from(this.challenges[t].values()).filter(
          (t) => t.inGroup === e,
        ),
      };
    }
    getGroupContentByIdLoc(e, t, a) {
      const i = this.groupContents[a];
      if (e?.includes("featured"))
        return i.get("GLOBAL_FEATURED_CHALLENGES")?.get(e);
      if (e?.includes("arcade"))
        return i.get("GLOBAL_ARCADE_CHALLENGES")?.get(e);
      if (e?.includes("escalation"))
        return i.get("GLOBAL_ESCALATION_CHALLENGES")?.get(e);
      const r = this.globalMergeGroups.get(e);
      return r && r.location !== t && r.gameVersions.includes(a)
        ? new Set([
            ...(i.get(t)?.get(e) ?? []),
            ...(i.get(r.location)?.get(r.groupId) ?? []),
          ])
        : i.get(t)?.get(e);
    }
    getDependenciesForChallenge(e, t) {
      return this._dependencyTree[t].get(e) || [];
    }
    checkHeuristics(t, a) {
      const i = e._parseContextListeners(t);
      i.challengeTreeIds.length > 0 &&
        this._dependencyTree[a].set(t.Id, i.challengeTreeIds);
    }
    static _parseContextListeners(e, t) {
      return uf(e.Definition?.ContextListeners || {}, {
        ...(t || e.Definition?.Context),
        ...e.Definition?.Constants,
      });
    }
  },
  dg = class e extends lg {
    constructor(e) {
      (super(e), (this.hooks = { onChallengeCompleted: new Jl() }));
    }
    needSaveProgression(e) {
      return "profile" === e.Definition.Scope || "hit" === e.Definition.Scope;
    }
    fastGetIsCompleted(e, t) {
      return e.Extensions.ChallengeProgression[t]?.Completed || !1;
    }
    fastGetIsUnticked(e, t) {
      const a = e.Extensions.ChallengeProgression[t];
      return (a?.Completed && !a.Ticked) || !1;
    }
    getPersistentChallengeProgression(e, t, a) {
      const i = kI(e, a),
        r = this.getChallengeById(t, a);
      i.Extensions.ChallengeProgression ??= {};
      const s = i.Extensions.ChallengeProgression;
      (s[t]?.Completed &&
        ((s[t].State = { CurrentState: "Success" }),
        (s[t].CurrentState = "Success")),
        (s[t] ??= {
          Ticked: !1,
          Completed: !1,
          CurrentState: "Start",
          State: r?.Definition?.Context || {},
        }),
        "Start" !== s[t].CurrentState &&
          (s[t].State.CurrentState = s[t].CurrentState));
      const o = this.getDependenciesForChallenge(t, a);
      return (
        o.length > 0 &&
          (s[t].State.CompletedChallenges = o.filter((e) =>
            this.fastGetIsCompleted(i, e),
          )),
        {
          Completed: s[t].Completed,
          Ticked: s[t].Ticked,
          State: s[t].State,
          ChallengeId: t,
          ProfileId: e,
          CompletedAt: null,
          MustBeSaved: !0,
        }
      );
    }
    getGroupedChallengesByLoc(e, t, a, i) {
      const r = this.groups[i].get(t)?.keys() ?? [];
      for (const s of r) {
        if ("global" === s) continue;
        const r = this.getGroupContentByIdLoc(s, t, i);
        if (r) {
          let t = [...r];
          ((t = t
            .map((t) => {
              const a = this.getChallengeById(t, i);
              if (!a) return a;
              return bf(e, a) ? a : void 0;
            })
            .filter(Boolean)),
            a.push([s, [...t]]));
        }
      }
    }
    getFilteredChallengeTree(e, t, a) {
      const i = {};
      for (const t of this.challenges[a].values())
        "global" !== t.inGroup &&
          bf(e, t) &&
          ((i[t.inGroup] ??= []), i[t.inGroup].push(t));
      return this.reBatchIntoSwitchedData(i, t, a, !0);
    }
    getGroupedChallengeLists(e, t, a) {
      let i = [];
      if (this.challengePacks.has(t))
        i.push([t, this.getChallengesForGroup(t, a)[t]]);
      else {
        (this.getGroupedChallengesByLoc(e, t, i, a),
          "Contract" === e.type &&
            e.isFeatured &&
            this.getGroupedChallengesByLoc(
              e,
              "GLOBAL_FEATURED_CHALLENGES",
              i,
              a,
            ),
          this.getGroupedChallengesByLoc(e, "GLOBAL_ARCADE_CHALLENGES", i, a),
          "h3" === a &&
            this.getGroupedChallengesByLoc(
              e,
              "GLOBAL_ESCALATION_CHALLENGES",
              i,
              a,
            ));
        for (const r of this.globalMergeGroups.values())
          r.allLocations &&
            r.gameVersions.includes(a) &&
            void 0 === this.groups[a].get(t)?.get(r.groupId) &&
            this.getGroupedChallengesByLoc(e, r.location, i, a);
      }
      return ((i = i.filter(([, e]) => e.length > 0)), Object.fromEntries(i));
    }
    getChallengesForContract(e, t, a, i = 4) {
      const r = kI(a, t),
        s = this.controller.resolveContract(e, t, !0);
      if (!s) return {};
      let o;
      if ("arcade" === s.Metadata.Type && s.Metadata.Id === e) {
        const a = s.Metadata.GroupDefinition?.Order[mA(r, e) - 1];
        (Tf.default.ok(a, "expected current level ID in escalation"),
          (o = this.controller.resolveContract(a, t, !1)));
      } else o = this.controller.resolveContract(e, t, !1);
      if (!o) return {};
      const n = TA(o, t)?.Properties.ParentLocation;
      return (
        Tf.default.ok(n),
        this.getGroupedChallengeLists(
          {
            type: "Contract",
            contractId: e,
            locationId:
              "aee6a16f-6525-4d63-a37f-225e293c6118" === s.Metadata.Id &&
              "h1" !== t
                ? "LOCATION_ICA_FACILITY_SHIP"
                : o.Metadata.Location,
            gameVersion: t,
            isFeatured: "featured" === s.Metadata.Type,
            pro1Filter: "pro1" === o.Metadata.Difficulty ? "Only" : "Exclude",
            difficulty: i,
          },
          n,
          t,
        )
      );
    }
    getChallengesForLocation(e, t) {
      const a = Kd("LocationsData", t, !0).children[e].Properties
        .ParentLocation;
      let i = NE(e)
        ? this.controller.missionsInLocation[t].sniper[e]
        : (this.controller.missionsInLocation[t][e] ?? [])
            .concat(this.controller.missionsInLocation[t].escalations[e] ?? [])
            .concat(
              "h3" === t ? this.controller.missionsInLocation[t].arcade[e] : [],
            );
      return (
        i || (i = []),
        Tf.default.ok(a, "expected parent location"),
        this.getGroupedChallengeLists(
          {
            type: "Contracts",
            contractIds: i,
            locationId: e,
            gameVersion: t,
            pro1Filter: "Exclude",
          },
          a,
          t,
        )
      );
    }
    startContract(e) {
      const { gameVersion: t, contractId: a, challengeContexts: i } = e,
        r = this.controller.resolveContract(a, t, !0),
        s = this.getChallengesForContract(a, t, e.userId, e.difficulty);
      ("evergreen" === r?.Metadata.Type &&
        (e.evergreen = { payout: 0, scoringScreenEndState: null, failed: !1 }),
        (s.global =
          this.getGroupByIdLoc(
            "global",
            "GLOBAL",
            e.gameVersion,
          )?.Challenges.filter((e) => mf(e.InclusionData, r)) || []));
      const o = kI(e.userId, e.gameVersion);
      for (const e of Object.keys(s)) {
        if (!i) break;
        for (const t of s[e])
          ((i[t.Id] = {
            context: void 0,
            state: this.fastGetIsCompleted(o, t.Id) ? "Success" : void 0,
            timers: [],
            timesCompleted: 0,
          }),
            this.needSaveProgression(t)
              ? ((o.Extensions.ChallengeProgression[t.Id] ??= {
                  Ticked: !1,
                  Completed: !1,
                  CurrentState: "Start",
                  State: YE(t.Definition?.Context || {}),
                }),
                (i[t.Id].context =
                  o.Extensions.ChallengeProgression[t.Id].State),
                (i[t.Id].state ??=
                  o.Extensions.ChallengeProgression[t.Id].CurrentState))
              : ((i[t.Id].context = YE(t.Definition?.Context || {}) || {}),
                (i[t.Id].state ??= "Start")));
      }
    }
    challengeOnEvent(e, t, a, i, r) {
      const s = this.getChallengeById(a, t.gameVersion);
      if (s) {
        if (!this.fastGetIsCompleted(i, a))
          try {
            const o = {
                eventName: e.Name,
                currentState: r.state,
                timers: r.timers,
                timestamp: e.Timestamp,
                contractId: t.contractId,
              },
              n = r.state,
              c = rf(s.Definition, YE(r.context), e.Value, o);
            (this.needSaveProgression(s) &&
              ("Failure" === c.state
                ? delete i.Extensions.ChallengeProgression[a]
                : ((i.Extensions.ChallengeProgression[a].State = c.context),
                  (i.Extensions.ChallengeProgression[a].CurrentState =
                    c.state)),
              KI(t.userId, t.gameVersion)),
              (r.state = c.state),
              (r.context = c.context || s.Definition?.Context || {}),
              "Success" !== n &&
                "Success" === c.state &&
                this.onChallengeCompleted(t, t.userId, t.gameVersion, s));
          } catch (e) {
            (Ad(
              "error",
              `Error while handling challenge ${a}:`,
              "ChallengeService",
            ),
              Ad("error", e.stack ?? e, "ChallengeService"));
          }
      } else Ad("warn", `Challenge ${a} not found`);
    }
    onContractEvent(e, t) {
      if (!t.challengeContexts)
        return (
          Ad("warn", "Session does not have challenge contexts."),
          void Ad("warn", "Challenges will be disabled!")
        );
      const a = kI(t.userId, t.gameVersion);
      for (const i of Object.keys(t.challengeContexts))
        this.challengeOnEvent(e, t, i, a, t.challengeContexts[i]);
    }
    getChallengeTreeForContract(e, t, a, i = kE.master) {
      const r = kI(a, t),
        s = this.controller.resolveContract(e, t, !0);
      if (!s) return [];
      let o;
      if ("arcade" === s.Metadata.Type && s.Metadata.Id === e) {
        const a = s.Metadata.GroupDefinition?.Order[mA(r, e) - 1];
        if (!a)
          return (
            Ad(
              "warn",
              `Failed to get escalation order in CTREE [${s.Metadata.GroupDefinition?.Order}]`,
            ),
            []
          );
        o = this.controller.resolveContract(a, t, !1);
      } else o = this.controller.resolveContract(e, t, !1);
      if (!o)
        return (Ad("warn", `Failed to get level data in CTREE [${e}]`), []);
      const n = TA(o, t);
      if (!n)
        return (
          Ad(
            "warn",
            `Failed to get location data in CTREE [${s.Metadata.Location}]`,
          ),
          []
        );
      const c = this.getChallengesForContract(o.Metadata.Id, t, a, i);
      return this.reBatchIntoSwitchedData(c, a, t, !1, n);
    }
    mapSwitchChallenges(e, t, a, i) {
      return e
        .map((e) =>
          i(e, this.getPersistentChallengeProgression(t, e.Id, a), a, t),
        )
        .sort((e, t) => e.OrderIndex - t.OrderIndex);
    }
    getChallengeDependencyData(t, a, i) {
      const r = kI(a, i);
      if (this.fastGetIsCompleted(r, t.Id)) return null;
      const s = this.getDependenciesForChallenge(t.Id, i),
        o = [],
        n = [];
      for (const e of s) this.fastGetIsCompleted(r, e) ? o.push(e) : n.push(e);
      const { challengeCountData: c } = e._parseContextListeners(
        t,
        r.Extensions.ChallengeProgression[t.Id].State,
      );
      return c.total > 0
        ? { count: c.count, total: c.total }
        : s.length > 0
          ? {
              count: o.length,
              completed: o,
              total: s.length,
              missing: n.length,
              all: s,
            }
          : null;
    }
    getChallengeDataForDestination(e, t, a, i) {
      const r = Kd("LocationsData", t, !1).parents[e];
      if (!r)
        return (Ad("warn", `Failed to get location data in CSERV [${e}]`), []);
      const s = this.getGroupedChallengeLists(
        {
          type: "ParentLocation",
          parent: e,
          gameVersion: t,
          pro1Filter: i ? "Only" : "Exclude",
        },
        e,
        t,
      );
      return this.reBatchIntoSwitchedData(s, a, t, !0, r);
    }
    getChallengeDataForCategory(e, t, a, i) {
      const r = t
        ? this.getChallengesForLocation(t.Id, a)
        : this.getChallengesForGroup(e, a);
      return this.reBatchIntoSwitchedData(r, i, a, !0, t);
    }
    reBatchIntoSwitchedData(e, t, a, i, r) {
      const s = Object.entries(e),
        o = i
          ? this.compileRegistryDestinationChallengeData.bind(this)
          : this.compileRegistryChallengeTreeData.bind(this),
        n = r ? yA(r?.Id, t, a) : {};
      return s
        .map(([i, s], c) => {
          if (0 === s.length) return;
          const l = this.getGroupByIdLoc(i, s[0].inLocation, a);
          if (!l) return;
          const d = s.map((e) =>
              this.getPersistentChallengeProgression(t, e.Id, a),
            ),
            u = r
              ? this.getGroupByIdLoc(
                  Object.keys(e)[c - 1],
                  r.Properties.ParentLocation ?? r.Id,
                  a,
                )
              : void 0,
            p = r
              ? this.getGroupByIdLoc(
                  Object.keys(e)[c + 1],
                  r.Properties.ParentLocation ?? r.Id,
                  a,
                )
              : void 0;
          return {
            Name: l.Name,
            Description: l.Description,
            Image: l.Image,
            CategoryId: l.CategoryId,
            Icon: l.Icon,
            ChallengesCount: s.length,
            CompletedChallengesCount: d.filter((e) => e.Completed).length,
            CompletionData: n,
            Location: r,
            IsLocked: r?.Properties.IsLocked || !1,
            ImageLocked: r?.Properties.LockedIcon || "",
            RequiredResources: r?.Properties.RequiredResources || [],
            OrderIndex: l.OrderIndex ?? 1e4,
            SwitchData: {
              Data: {
                Challenges: this.mapSwitchChallenges(s, t, a, o),
                HasPrevious: 0 !== c,
                HasNext: c !== Object.keys(e).length - 1,
                PreviousCategoryIcon: 0 !== c ? u?.Icon : "",
                NextCategoryIcon:
                  c !== Object.keys(e).length - 1 ? p?.Icon : "",
                CategoryData: {
                  Name: l.Name,
                  Image: l.Image,
                  Icon: l.Icon,
                  ChallengesCount: s.length,
                  CompletedChallengesCount: d.filter((e) => e.Completed).length,
                },
                CompletionData: n,
              },
              IsLeaf: !0,
            },
          };
        })
        .filter(Boolean)
        .sort((e, t) => e.OrderIndex - t.OrderIndex);
    }
    compileRegistryChallengeTreeData(e, t, a, i, r = !1) {
      const s = e.Drops.map((e) => eE(e, a)).filter(Boolean);
      return (
        s.length !== e.Drops.length &&
          Ad("debug", `Challenge ${e.Id} contains non-existing drops!`),
        {
          Id: e.Id,
          Name: e.Name,
          ImageName: e.ImageName,
          Description: e.Description,
          Rewards: { MasteryXP: e.Rewards.MasteryXP },
          Drops: s,
          Completed: t.Completed,
          IsPlayable: r,
          IsLocked: e.IsLocked || !1,
          HideProgression: !1,
          CategoryName: e.CategoryName ?? "NOTFOUND",
          Icon: e.Icon,
          LocationId: e.LocationId,
          ParentLocationId: e.ParentLocationId,
          Type: e.Type || "contract",
          ChallengeProgress: this.getChallengeDependencyData(e, i, a),
          OrderIndex: e.OrderIndex ?? 1e4,
          DifficultyLevels: e.DifficultyLevels ?? [],
          ...("" !== e.ParentLocationId && {
            CompletionData: yA(e.ParentLocationId, i, a),
          }),
          TypeHeader: e.TypeHeader,
          TypeIcon: e.TypeIcon,
          TypeTitle: e.TypeTitle,
        }
      );
    }
    compileRegistryDestinationChallengeData(e, t, a, i) {
      let r;
      if ("contract" === e.Type) {
        r = this.controller.resolveContract(
          e.InclusionData?.ContractIds?.[0] || "",
          a,
        );
        const t = r?.Metadata;
        r =
          r && t
            ? {
                Data: {
                  Bricks: r.Data.Bricks,
                  DevOnlyBricks: null,
                  GameChangerReferences: r.Data.GameChangerReferences || [],
                  GameChangers: r.Data.GameChangers || [],
                  GameDifficulties: r.Data.GameDifficulties || [],
                },
                Metadata: {
                  CreationTimestamp: null,
                  CreatorUserId: t.CreatorUserId,
                  DebriefingVideo: t.DebriefingVideo || "",
                  Description: t.Description,
                  Drops: t.Drops || null,
                  Entitlements: t.Entitlements || [],
                  GroupTitle: t.GroupTitle || "",
                  Id: t.Id,
                  IsPublished: t.IsPublished || !0,
                  LastUpdate: null,
                  Location: t.Location,
                  PublicId: t.PublicId || "",
                  ScenePath: t.ScenePath,
                  Subtype: t.Subtype || "",
                  TileImage: t.TileImage,
                  Title: t.Title,
                  Type: t.Type,
                },
              }
            : void 0;
      }
      if ("h1" === a)
        switch (e.Type) {
          case "contract":
            ((e.TypeHeader ??= `UI_MENU_PAGE_CHALLENGE_HEADER_${r?.Metadata.Type.toUpperCase()}`),
              (e.TypeIcon ??= r?.Metadata.Type),
              (e.TypeTitle ??= r?.Metadata.Title));
            break;
          case "location":
            ((e.TypeHeader ??= "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION"),
              (e.TypeIcon ??= "arrowright"),
              (e.TypeTitle ??= `UI_${e.ParentLocationId}_CITY`));
        }
      return {
        ...this.compileRegistryChallengeTreeData(e, t, a, i, !0),
        UserCentricContract: "contract" === e.Type ? SA(r, i, a) : null,
      };
    }
    countTotalNCompletedChallenges(e, t, a, i = 1) {
      const r = kI(t, a);
      r.Extensions.ChallengeProgression ??= {};
      let s = 0,
        o = 0;
      for (const t in e) {
        const a = e[t],
          i = a.map((e) => this.fastGetIsCompleted(r, e.Id));
        ((s += a.length), (o += i.filter((e) => e).length));
      }
      return {
        ChallengesCount: s,
        CompletedChallengesCount: o,
        CompletionPercent: (o / s) * i,
      };
    }
    tryToCompleteChallenge(t, a, i, r, s) {
      if (this.fastGetIsCompleted(i, a)) return;
      if (a === r) return;
      const o = this._dependencyTree[s].get(a);
      if ((Tf.default.ok(o, `No dep tree for ${a}`), !o.includes(r))) return;
      const n = this.getChallengeById(a, s);
      if (!n) return;
      const { challengeCountData: c } = e._parseContextListeners(n);
      if (!(
        (c.total > 0 && c.count >= c.total - 1) ||
        o.every((e) => this.fastGetIsCompleted(i, e))
      ))
        return;
      const l = this.getChallengeById(a, s);
      (Tf.default.ok(l, `No challenge for ${a}`),
        this.onChallengeCompleted(t, i.Id, s, l, r));
    }
    onChallengeCompleted(e, t, a, i, r) {
      Ad(
        "debug",
        r
          ? `Challenge ${i.Id} completed [via ${r}]`
          : `Challenge ${i.Id} completed`,
      );
      const s = {
        Value: { ChallengeId: i.Id, ChallengeTags: i.Tags },
        ContractSessionId: e.Id,
        ContractId: e.contractId,
        Name: "ChallengeCompleted",
        Timestamp: 0,
        Id: (0, cg.randomUUID)(),
        Version: oE,
      };
      (this.onContractEvent(s, e), qm(t, s));
      const o = kI(t, a);
      (i.Tags.includes("global") ||
        ((o.Extensions.ChallengeProgression ??= {}),
        (o.Extensions.ChallengeProgression[i.Id] ??= {
          CurrentState: "Start",
          State: {},
          Completed: !1,
          Ticked: !1,
        }),
        (o.Extensions.ChallengeProgression[i.Id].Completed = !0)),
        e.challengeContexts &&
          (e.challengeContexts[i.Id] &&
            e.challengeContexts[i.Id].timesCompleted++,
          i.Definition.Repeatable &&
            e.challengeContexts[i.Id] &&
            (e.challengeContexts[i.Id].state = "Start")),
        jb.progressionService.grantProfileProgression(
          i.Xp ?? 0,
          i.Rewards?.MasteryXP ?? 0,
          i?.Drops ?? [],
          e,
          o,
          i.LocationId,
        ),
        this.hooks.onChallengeCompleted.call(t, i, a));
      for (const t of this._dependencyTree[a].keys())
        this.tryToCompleteChallenge(e, t, o, i.Id, a);
    }
  };
try {
  sg = new TextDecoder();
} catch (Oo) {}
var ug,
  pg,
  $g,
  _g,
  Ig,
  Ag = 0,
  fg = [],
  mg = fg,
  gg = 0,
  Cg = {},
  bg = 0,
  Eg = 0,
  Tg = [],
  hg = { useRecords: !1, mapsAsObjects: !0 },
  Og = class {},
  yg = new Og();
yg.name = "MessagePack 0xC1";
var Sg,
  Lg,
  Ng,
  Rg = !1,
  Dg = 2;
try {
  new Function("");
} catch (Oo) {
  Dg = 1 / 0;
}
var Pg = class e {
  constructor(e) {
    (e &&
      (!1 === e.useRecords &&
        void 0 === e.mapsAsObjects &&
        (e.mapsAsObjects = !0),
      e.sequential &&
        !1 !== e.trusted &&
        ((e.trusted = !0),
        e.structures ||
          0 == e.useRecords ||
          ((e.structures = []),
          e.maxSharedStructures || (e.maxSharedStructures = 0))),
      e.structures
        ? (e.structures.sharedLength = e.structures.length)
        : e.getStructures &&
          (((e.structures = []).uninitialized = !0),
          (e.structures.sharedLength = 0)),
      e.int64AsNumber && (e.int64AsType = "number")),
      Object.assign(this, e));
  }
  unpack(t, a) {
    if (og)
      return cC(
        () => (
          lC(),
          this ? this.unpack(t, a) : e.prototype.unpack.call(hg, t, a)
        ),
      );
    (t.buffer ||
      t.constructor !== ArrayBuffer ||
      (t = "undefined" != typeof Buffer ? Buffer.from(t) : new Uint8Array(t)),
      "object" == typeof a
        ? ((ng = a.end || t.length), (Ag = a.start || 0))
        : ((Ag = 0), (ng = a > -1 ? a : t.length)),
      (gg = 0),
      (Eg = 0),
      (pg = null),
      (mg = fg),
      ($g = null),
      (og = t));
    try {
      Ig =
        t.dataView ||
        (t.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength));
    } catch (e) {
      if (((og = null), t instanceof Uint8Array)) throw e;
      throw new Error(
        "Source must be a Uint8Array or Buffer but was a " +
          (t && "object" == typeof t ? t.constructor.name : typeof t),
      );
    }
    if (this instanceof e) {
      if (((Cg = this), this.structures))
        return ((ug = this.structures), Mg(a));
      (!ug || ug.length > 0) && (ug = []);
    } else ((Cg = hg), (!ug || ug.length > 0) && (ug = []));
    return Mg(a);
  }
  unpackMultiple(e, t) {
    let a,
      i = 0;
    try {
      Rg = !0;
      let r = e.length,
        s = this ? this.unpack(e, r) : _C.unpack(e, r);
      if (!t) {
        for (a = [s]; Ag < r;) ((i = Ag), a.push(Mg()));
        return a;
      }
      if (!1 === t(s, i, Ag)) return;
      for (; Ag < r;) if (((i = Ag), !1 === t(Mg(), i, Ag))) return;
    } catch (e) {
      throw ((e.lastPosition = i), (e.values = a), e);
    } finally {
      ((Rg = !1), lC());
    }
  }
  _mergeStructures(e, t) {
    (Lg && (e = Lg.call(this, e)),
      (e = e || []),
      Object.isFrozen(e) && (e = e.map((e) => e.slice(0))));
    for (let t = 0, a = e.length; t < a; t++) {
      let a = e[t];
      a && ((a.isShared = !0), t >= 32 && (a.highByte = (t - 32) >> 5));
    }
    e.sharedLength = e.length;
    for (let a in t || [])
      if (a >= 0) {
        let i = e[a],
          r = t[a];
        r &&
          (i && ((e.restoreStructures || (e.restoreStructures = []))[a] = i),
          (e[a] = r));
      }
    return (this.structures = e);
  }
  decode(e, t) {
    return this.unpack(e, t);
  }
};
function Mg(e) {
  try {
    if (!Cg.trusted && !Rg) {
      let e = ug.sharedLength || 0;
      e < ug.length && (ug.length = e);
    }
    let t;
    if (
      (Cg.randomAccessStructure && og[Ag] < 64 && og[Ag] >= 32 && Sg
        ? ((t = Sg(og, Ag, ng, Cg)),
          (og = null),
          (e && e.lazy) || !t || (t = t.toJSON()),
          (Ag = ng))
        : (t = wg()),
      $g && ((Ag = $g.postBundlePosition), ($g = null)),
      Rg && (ug.restoreStructures = null),
      Ag == ng)
    )
      (ug && ug.restoreStructures && Ug(),
        (ug = null),
        (og = null),
        _g && (_g = null));
    else {
      if (Ag > ng) throw new Error("Unexpected end of MessagePack data");
      if (!Rg) {
        let e;
        try {
          e = JSON.stringify(t, (e, t) =>
            "bigint" == typeof t ? `${t}n` : t,
          ).slice(0, 100);
        } catch (t) {
          e = "(JSON view not available " + t + ")";
        }
        throw new Error("Data read, but end of buffer not reached " + e);
      }
    }
    return t;
  } catch (e) {
    throw (
      ug && ug.restoreStructures && Ug(),
      lC(),
      (e instanceof RangeError ||
        e.message.startsWith("Unexpected end of buffer") ||
        Ag > ng) &&
        (e.incomplete = !0),
      e
    );
  }
}
function Ug() {
  for (let e in ug.restoreStructures) ug[e] = ug.restoreStructures[e];
  ug.restoreStructures = null;
}
function wg() {
  let e = og[Ag++];
  if (e < 160) {
    if (e < 128) {
      if (e < 64) return e;
      {
        let t = ug[63 & e] || (Cg.getStructures && kg()[63 & e]);
        return t ? (t.read || (t.read = vg(t, 63 & e)), t.read()) : e;
      }
    }
    if (e < 144) {
      if (((e -= 128), Cg.mapsAsObjects)) {
        let t = {};
        for (let a = 0; a < e; a++) {
          let e = tC();
          ("__proto__" === e && (e = "__proto_"), (t[e] = wg()));
        }
        return t;
      }
      {
        let t = new Map();
        for (let a = 0; a < e; a++) t.set(wg(), wg());
        return t;
      }
    }
    {
      e -= 144;
      let t = new Array(e);
      for (let a = 0; a < e; a++) t[a] = wg();
      return Cg.freezeData ? Object.freeze(t) : t;
    }
  }
  if (e < 192) {
    let t = e - 160;
    if (Eg >= Ag) return pg.slice(Ag - bg, (Ag += t) - bg);
    if (0 == Eg && ng < 140) {
      let e = t < 16 ? Xg(t) : Wg(t);
      if (null != e) return e;
    }
    return Hg(t);
  }
  {
    let t;
    switch (e) {
      case 192:
        return null;
      case 193:
        return $g
          ? ((t = wg()),
            t > 0
              ? $g[1].slice($g.position1, ($g.position1 += t))
              : $g[0].slice($g.position0, ($g.position0 -= t)))
          : yg;
      case 194:
        return !1;
      case 195:
        return !0;
      case 196:
        if (((t = og[Ag++]), void 0 === t))
          throw new Error("Unexpected end of buffer");
        return Jg(t);
      case 197:
        return ((t = Ig.getUint16(Ag)), (Ag += 2), Jg(t));
      case 198:
        return ((t = Ig.getUint32(Ag)), (Ag += 4), Jg(t));
      case 199:
        return Zg(og[Ag++]);
      case 200:
        return ((t = Ig.getUint16(Ag)), (Ag += 2), Zg(t));
      case 201:
        return ((t = Ig.getUint32(Ag)), (Ag += 4), Zg(t));
      case 202:
        if (((t = Ig.getFloat32(Ag)), Cg.useFloat32 > 2)) {
          let e = dC[((127 & og[Ag]) << 1) | (og[Ag + 1] >> 7)];
          return ((Ag += 4), ((e * t + (t > 0 ? 0.5 : -0.5)) | 0) / e);
        }
        return ((Ag += 4), t);
      case 203:
        return ((t = Ig.getFloat64(Ag)), (Ag += 8), t);
      case 204:
        return og[Ag++];
      case 205:
        return ((t = Ig.getUint16(Ag)), (Ag += 2), t);
      case 206:
        return ((t = Ig.getUint32(Ag)), (Ag += 4), t);
      case 207:
        return (
          "number" === Cg.int64AsType
            ? ((t = 4294967296 * Ig.getUint32(Ag)), (t += Ig.getUint32(Ag + 4)))
            : "string" === Cg.int64AsType
              ? (t = Ig.getBigUint64(Ag).toString())
              : "auto" === Cg.int64AsType
                ? ((t = Ig.getBigUint64(Ag)),
                  t <= BigInt(2) << BigInt(52) && (t = Number(t)))
                : (t = Ig.getBigUint64(Ag)),
          (Ag += 8),
          t
        );
      case 208:
        return Ig.getInt8(Ag++);
      case 209:
        return ((t = Ig.getInt16(Ag)), (Ag += 2), t);
      case 210:
        return ((t = Ig.getInt32(Ag)), (Ag += 4), t);
      case 211:
        return (
          "number" === Cg.int64AsType
            ? ((t = 4294967296 * Ig.getInt32(Ag)), (t += Ig.getUint32(Ag + 4)))
            : "string" === Cg.int64AsType
              ? (t = Ig.getBigInt64(Ag).toString())
              : "auto" === Cg.int64AsType
                ? ((t = Ig.getBigInt64(Ag)),
                  t >= BigInt(-2) << BigInt(52) &&
                    t <= BigInt(2) << BigInt(52) &&
                    (t = Number(t)))
                : (t = Ig.getBigInt64(Ag)),
          (Ag += 8),
          t
        );
      case 212:
        if (((t = og[Ag++]), 114 == t)) return iC(63 & og[Ag++]);
        {
          let e = Tg[t];
          if (e)
            return e.read
              ? (Ag++, e.read(wg()))
              : e.noBuffer
                ? (Ag++, e())
                : e(og.subarray(Ag, ++Ag));
          throw new Error("Unknown extension " + t);
        }
      case 213:
        return (
          (t = og[Ag]),
          114 == t ? (Ag++, iC(63 & og[Ag++], og[Ag++])) : Zg(2)
        );
      case 214:
        return Zg(4);
      case 215:
        return Zg(8);
      case 216:
        return Zg(16);
      case 217:
        return (
          (t = og[Ag++]),
          Eg >= Ag ? pg.slice(Ag - bg, (Ag += t) - bg) : Qg(t)
        );
      case 218:
        return (
          (t = Ig.getUint16(Ag)),
          Eg >= (Ag += 2) ? pg.slice(Ag - bg, (Ag += t) - bg) : Kg(t)
        );
      case 219:
        return (
          (t = Ig.getUint32(Ag)),
          Eg >= (Ag += 4) ? pg.slice(Ag - bg, (Ag += t) - bg) : Fg(t)
        );
      case 220:
        return ((t = Ig.getUint16(Ag)), (Ag += 2), jg(t));
      case 221:
        return ((t = Ig.getUint32(Ag)), (Ag += 4), jg(t));
      case 222:
        return ((t = Ig.getUint16(Ag)), (Ag += 2), Vg(t));
      case 223:
        return ((t = Ig.getUint32(Ag)), (Ag += 4), Vg(t));
      default:
        if (e >= 224) return e - 256;
        if (void 0 === e) {
          let e = new Error("Unexpected end of MessagePack data");
          throw ((e.incomplete = !0), e);
        }
        throw new Error("Unknown MessagePack token " + e);
    }
  }
}
var Gg = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function vg(e, t) {
  function a() {
    if (a.count++ > Dg) {
      let a = (e.read = new Function(
        "r",
        "return function(){return " +
          (Cg.freezeData ? "Object.freeze" : "") +
          "({" +
          e
            .map((e) =>
              "__proto__" === e
                ? "__proto_:r()"
                : Gg.test(e)
                  ? e + ":r()"
                  : "[" + JSON.stringify(e) + "]:r()",
            )
            .join(",") +
          "})}",
      )(wg));
      return (0 === e.highByte && (e.read = Bg(t, e.read)), a());
    }
    let i = {};
    for (let t = 0, a = e.length; t < a; t++) {
      let a = e[t];
      ("__proto__" === a && (a = "__proto_"), (i[a] = wg()));
    }
    return Cg.freezeData ? Object.freeze(i) : i;
  }
  return ((a.count = 0), 0 === e.highByte ? Bg(t, a) : a);
}
var Bg = (e, t) =>
  function () {
    let a = og[Ag++];
    if (0 === a) return t();
    let i = e < 32 ? -(e + (a << 5)) : e + (a << 5),
      r = ug[i] || kg()[i];
    if (!r) throw new Error("Record id is not defined for " + i);
    return (r.read || (r.read = vg(r, e)), r.read());
  };
function kg() {
  let e = cC(() => ((og = null), Cg.getStructures()));
  return (ug = Cg._mergeStructures(e, ug));
}
var Hg = xg,
  Qg = xg,
  Kg = xg,
  Fg = xg;
function xg(e) {
  let t;
  if (e < 16 && (t = Xg(e))) return t;
  if (e > 64 && sg) return sg.decode(og.subarray(Ag, (Ag += e)));
  const a = Ag + e,
    i = [];
  for (t = ""; Ag < a;) {
    const e = og[Ag++];
    if (128 & e)
      if (192 == (224 & e)) {
        const t = 63 & og[Ag++];
        i.push(((31 & e) << 6) | t);
      } else if (224 == (240 & e)) {
        const t = 63 & og[Ag++],
          a = 63 & og[Ag++];
        i.push(((31 & e) << 12) | (t << 6) | a);
      } else if (240 == (248 & e)) {
        let t =
          ((7 & e) << 18) |
          ((63 & og[Ag++]) << 12) |
          ((63 & og[Ag++]) << 6) |
          (63 & og[Ag++]);
        (t > 65535 &&
          ((t -= 65536),
          i.push(((t >>> 10) & 1023) | 55296),
          (t = 56320 | (1023 & t))),
          i.push(t));
      } else i.push(e);
    else i.push(e);
    i.length >= 4096 && ((t += qg.apply(String, i)), (i.length = 0));
  }
  return (i.length > 0 && (t += qg.apply(String, i)), t);
}
function Yg(e, t, a) {
  let i = og;
  ((og = e), (Ag = t));
  try {
    return xg(a);
  } finally {
    og = i;
  }
}
function jg(e) {
  let t = new Array(e);
  for (let a = 0; a < e; a++) t[a] = wg();
  return Cg.freezeData ? Object.freeze(t) : t;
}
function Vg(e) {
  if (Cg.mapsAsObjects) {
    let t = {};
    for (let a = 0; a < e; a++) {
      let e = tC();
      ("__proto__" === e && (e = "__proto_"), (t[e] = wg()));
    }
    return t;
  }
  {
    let t = new Map();
    for (let a = 0; a < e; a++) t.set(wg(), wg());
    return t;
  }
}
var qg = String.fromCharCode;
function Wg(e) {
  let t = Ag,
    a = new Array(e);
  for (let i = 0; i < e; i++) {
    const e = og[Ag++];
    if ((128 & e) > 0) return void (Ag = t);
    a[i] = e;
  }
  return qg.apply(String, a);
}
function Xg(e) {
  if (e < 4) {
    if (e < 2) {
      if (0 === e) return "";
      {
        let e = og[Ag++];
        return (128 & e) > 1 ? void (Ag -= 1) : qg(e);
      }
    }
    {
      let t = og[Ag++],
        a = og[Ag++];
      if ((128 & t) > 0 || (128 & a) > 0) return void (Ag -= 2);
      if (e < 3) return qg(t, a);
      let i = og[Ag++];
      return (128 & i) > 0 ? void (Ag -= 3) : qg(t, a, i);
    }
  }
  {
    let t = og[Ag++],
      a = og[Ag++],
      i = og[Ag++],
      r = og[Ag++];
    if ((128 & t) > 0 || (128 & a) > 0 || (128 & i) > 0 || (128 & r) > 0)
      return void (Ag -= 4);
    if (e < 6) {
      if (4 === e) return qg(t, a, i, r);
      {
        let e = og[Ag++];
        return (128 & e) > 0 ? void (Ag -= 5) : qg(t, a, i, r, e);
      }
    }
    if (e < 8) {
      let s = og[Ag++],
        o = og[Ag++];
      if ((128 & s) > 0 || (128 & o) > 0) return void (Ag -= 6);
      if (e < 7) return qg(t, a, i, r, s, o);
      let n = og[Ag++];
      return (128 & n) > 0 ? void (Ag -= 7) : qg(t, a, i, r, s, o, n);
    }
    {
      let s = og[Ag++],
        o = og[Ag++],
        n = og[Ag++],
        c = og[Ag++];
      if ((128 & s) > 0 || (128 & o) > 0 || (128 & n) > 0 || (128 & c) > 0)
        return void (Ag -= 8);
      if (e < 10) {
        if (8 === e) return qg(t, a, i, r, s, o, n, c);
        {
          let e = og[Ag++];
          return (128 & e) > 0 ? void (Ag -= 9) : qg(t, a, i, r, s, o, n, c, e);
        }
      }
      if (e < 12) {
        let l = og[Ag++],
          d = og[Ag++];
        if ((128 & l) > 0 || (128 & d) > 0) return void (Ag -= 10);
        if (e < 11) return qg(t, a, i, r, s, o, n, c, l, d);
        let u = og[Ag++];
        return (128 & u) > 0
          ? void (Ag -= 11)
          : qg(t, a, i, r, s, o, n, c, l, d, u);
      }
      {
        let l = og[Ag++],
          d = og[Ag++],
          u = og[Ag++],
          p = og[Ag++];
        if ((128 & l) > 0 || (128 & d) > 0 || (128 & u) > 0 || (128 & p) > 0)
          return void (Ag -= 12);
        if (e < 14) {
          if (12 === e) return qg(t, a, i, r, s, o, n, c, l, d, u, p);
          {
            let e = og[Ag++];
            return (128 & e) > 0
              ? void (Ag -= 13)
              : qg(t, a, i, r, s, o, n, c, l, d, u, p, e);
          }
        }
        {
          let $ = og[Ag++],
            _ = og[Ag++];
          if ((128 & $) > 0 || (128 & _) > 0) return void (Ag -= 14);
          if (e < 15) return qg(t, a, i, r, s, o, n, c, l, d, u, p, $, _);
          let I = og[Ag++];
          return (128 & I) > 0
            ? void (Ag -= 15)
            : qg(t, a, i, r, s, o, n, c, l, d, u, p, $, _, I);
        }
      }
    }
  }
}
function zg() {
  let e,
    t = og[Ag++];
  if (t < 192) e = t - 160;
  else
    switch (t) {
      case 217:
        e = og[Ag++];
        break;
      case 218:
        ((e = Ig.getUint16(Ag)), (Ag += 2));
        break;
      case 219:
        ((e = Ig.getUint32(Ag)), (Ag += 4));
        break;
      default:
        throw new Error("Expected string");
    }
  return xg(e);
}
function Jg(e) {
  return Cg.copyBuffers
    ? Uint8Array.prototype.slice.call(og, Ag, (Ag += e))
    : og.subarray(Ag, (Ag += e));
}
function Zg(e) {
  let t = og[Ag++];
  if (Tg[t]) {
    let a;
    return Tg[t](og.subarray(Ag, (a = Ag += e)), (e) => {
      Ag = e;
      try {
        return wg();
      } finally {
        Ag = a;
      }
    });
  }
  throw new Error("Unknown extension type " + t);
}
var eC = new Array(4096);
function tC() {
  let e = og[Ag++];
  if (!(e >= 160 && e < 192)) return (Ag--, aC(wg()));
  if (((e -= 160), Eg >= Ag)) return pg.slice(Ag - bg, (Ag += e) - bg);
  if (!(0 == Eg && ng < 180)) return Hg(e);
  let t,
    a = 4095 & ((e << 5) ^ (e > 1 ? Ig.getUint16(Ag) : e > 0 ? og[Ag] : 0)),
    i = eC[a],
    r = Ag,
    s = Ag + e - 3,
    o = 0;
  if (i && i.bytes == e) {
    for (; r < s;) {
      if (((t = Ig.getUint32(r)), t != i[o++])) {
        r = 1879048192;
        break;
      }
      r += 4;
    }
    for (s += 3; r < s;)
      if (((t = og[r++]), t != i[o++])) {
        r = 1879048192;
        break;
      }
    if (r === s) return ((Ag = r), i.string);
    ((s -= 3), (r = Ag));
  }
  for (i = [], eC[a] = i, i.bytes = e; r < s;)
    ((t = Ig.getUint32(r)), i.push(t), (r += 4));
  for (s += 3; r < s;) ((t = og[r++]), i.push(t));
  let n = e < 16 ? Xg(e) : Wg(e);
  return (i.string = null != n ? n : Hg(e));
}
function aC(e) {
  if ("string" == typeof e) return e;
  if ("number" == typeof e || "boolean" == typeof e || "bigint" == typeof e)
    return e.toString();
  if (null == e) return e + "";
  throw new Error("Invalid property type for record", typeof e);
}
var iC = (e, t) => {
  let a = wg().map(aC),
    i = e;
  void 0 !== t &&
    ((e = e < 32 ? -((t << 5) + e) : (t << 5) + e), (a.highByte = t));
  let r = ug[e];
  return (
    r &&
      (r.isShared || Rg) &&
      ((ug.restoreStructures || (ug.restoreStructures = []))[e] = r),
    (ug[e] = a),
    (a.read = vg(a, i)),
    a.read()
  );
};
((Tg[0] = () => {}),
  (Tg[0].noBuffer = !0),
  (Tg[66] = (e) => {
    let t = e.length,
      a = BigInt(128 & e[0] ? e[0] - 256 : e[0]);
    for (let i = 1; i < t; i++) ((a <<= BigInt(8)), (a += BigInt(e[i])));
    return a;
  }));
var rC = { Error, TypeError, ReferenceError };
((Tg[101] = () => {
  let e = wg();
  return (rC[e[0]] || Error)(e[1], { cause: e[2] });
}),
  (Tg[105] = (e) => {
    if (!1 === Cg.structuredClone)
      throw new Error("Structured clone extension is disabled");
    let t = Ig.getUint32(Ag - 4);
    _g || (_g = new Map());
    let a,
      i = og[Ag];
    a = (i >= 144 && i < 160) || 220 == i || 221 == i ? [] : {};
    let r = { target: a };
    _g.set(t, r);
    let s = wg();
    return r.used ? Object.assign(a, s) : ((r.target = s), s);
  }),
  (Tg[112] = (e) => {
    if (!1 === Cg.structuredClone)
      throw new Error("Structured clone extension is disabled");
    let t = Ig.getUint32(Ag - 4),
      a = _g.get(t);
    return ((a.used = !0), a.target);
  }),
  (Tg[115] = () => new Set(wg())));
var sC = [
    "Int8",
    "Uint8",
    "Uint8Clamped",
    "Int16",
    "Uint16",
    "Int32",
    "Uint32",
    "Float32",
    "Float64",
    "BigInt64",
    "BigUint64",
  ].map((e) => e + "Array"),
  oC = "object" == typeof globalThis ? globalThis : window;
((Tg[116] = (e) => {
  let t = e[0],
    a = sC[t];
  if (!a) {
    if (16 === t) {
      let t = new ArrayBuffer(e.length - 1);
      return (new Uint8Array(t).set(e.subarray(1)), t);
    }
    throw new Error("Could not find typed array for code " + t);
  }
  return new oC[a](Uint8Array.prototype.slice.call(e, 1).buffer);
}),
  (Tg[120] = () => {
    let e = wg();
    return new RegExp(e[0], e[1]);
  }));
var nC = [];
function cC(e) {
  Ng && Ng();
  let t = ng,
    a = Ag,
    i = gg,
    r = bg,
    s = Eg,
    o = pg,
    n = mg,
    c = _g,
    l = $g,
    d = new Uint8Array(og.slice(0, ng)),
    u = ug,
    p = ug.slice(0, ug.length),
    $ = Cg,
    _ = Rg,
    I = e();
  return (
    (ng = t),
    (Ag = a),
    (gg = i),
    (bg = r),
    (Eg = s),
    (pg = o),
    (mg = n),
    (_g = c),
    ($g = l),
    (og = d),
    (Rg = _),
    (ug = u).splice(0, ug.length, ...p),
    (Cg = $),
    (Ig = new DataView(og.buffer, og.byteOffset, og.byteLength)),
    I
  );
}
function lC() {
  ((og = null), (_g = null), (ug = null));
}
((Tg[98] = (e) => {
  let t = (e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3],
    a = Ag;
  return (
    (Ag += t - e.length),
    ($g = nC),
    (($g = [zg(), zg()]).position0 = 0),
    ($g.position1 = 0),
    ($g.postBundlePosition = Ag),
    (Ag = a),
    wg()
  );
}),
  (Tg[255] = (e) =>
    4 == e.length
      ? new Date(1e3 * (16777216 * e[0] + (e[1] << 16) + (e[2] << 8) + e[3]))
      : 8 == e.length
        ? new Date(
            ((e[0] << 22) + (e[1] << 14) + (e[2] << 6) + (e[3] >> 2)) / 1e6 +
              1e3 *
                (4294967296 * (3 & e[3]) +
                  16777216 * e[4] +
                  (e[5] << 16) +
                  (e[6] << 8) +
                  e[7]),
          )
        : 12 == e.length
          ? new Date(
              ((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) / 1e6 +
                1e3 *
                  ((128 & e[4] ? -281474976710656 : 0) +
                    1099511627776 * e[6] +
                    4294967296 * e[7] +
                    16777216 * e[8] +
                    (e[9] << 16) +
                    (e[10] << 8) +
                    e[11]),
            )
          : new Date("invalid")));
var dC = new Array(147);
for (let e = 0; e < 256; e++) dC[e] = +("1e" + Math.floor(45.15 - 0.30103 * e));
var uC,
  pC,
  $C,
  _C = new Pg({ useRecords: !1 }),
  IC = _C.unpack,
  AC = (_C.unpackMultiple, _C.unpack, new Float32Array(1));
new Uint8Array(AC.buffer, 0, 4);
try {
  uC = new TextEncoder();
} catch (Oo) {}
var fC,
  mC,
  gC,
  CC,
  bC,
  EC = "undefined" != typeof Buffer,
  TC = EC
    ? function (e) {
        return Buffer.allocUnsafeSlow(e);
      }
    : Uint8Array,
  hC = EC ? Buffer : Uint8Array,
  OC = EC ? 4294967296 : 2144337920,
  yC = 0,
  SC = null,
  LC = /[\u0080-\uFFFF]/,
  NC = Symbol("record-id");
function RC(e, t, a, i) {
  let r = e.byteLength;
  if (r + 1 < 256) {
    var { target: s, position: o } = a(4 + r);
    ((s[o++] = 199), (s[o++] = r + 1));
  } else if (r + 1 < 65536) {
    var { target: s, position: o } = a(5 + r);
    ((s[o++] = 200), (s[o++] = (r + 1) >> 8), (s[o++] = (r + 1) & 255));
  } else {
    var { target: s, position: o, targetView: n } = a(7 + r);
    ((s[o++] = 201), n.setUint32(o, r + 1), (o += 4));
  }
  ((s[o++] = 116),
    (s[o++] = t),
    e.buffer || (e = new Uint8Array(e)),
    s.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), o));
}
function DC(e, t) {
  let a = e.byteLength;
  var i, r;
  if (a < 256) {
    var { target: i, position: r } = t(a + 2);
    ((i[r++] = 196), (i[r++] = a));
  } else if (a < 65536) {
    var { target: i, position: r } = t(a + 3);
    ((i[r++] = 197), (i[r++] = a >> 8), (i[r++] = 255 & a));
  } else {
    var { target: i, position: r, targetView: s } = t(a + 5);
    ((i[r++] = 198), s.setUint32(r, a), (r += 4));
  }
  i.set(e, r);
}
function PC(e, t, a, i) {
  let r = e.length;
  switch (r) {
    case 1:
      t[a++] = 212;
      break;
    case 2:
      t[a++] = 213;
      break;
    case 4:
      t[a++] = 214;
      break;
    case 8:
      t[a++] = 215;
      break;
    case 16:
      t[a++] = 216;
      break;
    default:
      r < 256
        ? ((t[a++] = 199), (t[a++] = r))
        : r < 65536
          ? ((t[a++] = 200), (t[a++] = r >> 8), (t[a++] = 255 & r))
          : ((t[a++] = 201),
            (t[a++] = r >> 24),
            (t[a++] = (r >> 16) & 255),
            (t[a++] = (r >> 8) & 255),
            (t[a++] = 255 & r));
  }
  return ((t[a++] = i), t.set(e, a), (a += r));
}
function MC(e, t, a) {
  if (SC.length > 0) {
    (gC.setUint32(SC.position + e, yC + a - SC.position - e),
      (SC.stringsPosition = yC - e));
    let i = SC;
    ((SC = null), t(i[0]), t(i[1]));
  }
}
function UC(e, t) {
  return (
    (e.isCompatible = (e) => {
      let a = !e || (t.lastNamedStructuresLength || 0) === e.length;
      return (a || t._mergeStructures(e), a);
    }),
    e
  );
}
(($C = [
  Date,
  Set,
  Error,
  RegExp,
  ArrayBuffer,
  Object.getPrototypeOf(Uint8Array.prototype).constructor,
  Og,
]),
  (pC = [
    {
      pack(e, t, a) {
        let i = e.getTime() / 1e3;
        if (
          (this.useTimestamp32 || 0 === e.getMilliseconds()) &&
          i >= 0 &&
          i < 4294967296
        ) {
          let { target: e, targetView: a, position: r } = t(6);
          ((e[r++] = 214), (e[r++] = 255), a.setUint32(r, i));
        } else if (i > 0 && i < 4294967296) {
          let { target: a, targetView: r, position: s } = t(10);
          ((a[s++] = 215),
            (a[s++] = 255),
            r.setUint32(
              s,
              4e6 * e.getMilliseconds() + ((i / 1e3 / 4294967296) | 0),
            ),
            r.setUint32(s + 4, i));
        } else if (isNaN(i)) {
          if (this.onInvalidDate) return (t(0), a(this.onInvalidDate()));
          let { target: e, targetView: i, position: r } = t(3);
          ((e[r++] = 212), (e[r++] = 255), (e[r++] = 255));
        } else {
          let { target: a, targetView: r, position: s } = t(15);
          ((a[s++] = 199),
            (a[s++] = 12),
            (a[s++] = 255),
            r.setUint32(s, 1e6 * e.getMilliseconds()),
            r.setBigInt64(s + 4, BigInt(Math.floor(i))));
        }
      },
    },
    {
      pack(e, t, a) {
        if (this.setAsEmptyObject) return (t(0), a({}));
        let i = Array.from(e),
          { target: r, position: s } = t(this.moreTypes ? 3 : 0);
        (this.moreTypes && ((r[s++] = 212), (r[s++] = 115), (r[s++] = 0)),
          a(i));
      },
    },
    {
      pack(e, t, a) {
        let { target: i, position: r } = t(this.moreTypes ? 3 : 0);
        (this.moreTypes && ((i[r++] = 212), (i[r++] = 101), (i[r++] = 0)),
          a([e.name, e.message, e.cause]));
      },
    },
    {
      pack(e, t, a) {
        let { target: i, position: r } = t(this.moreTypes ? 3 : 0);
        (this.moreTypes && ((i[r++] = 212), (i[r++] = 120), (i[r++] = 0)),
          a([e.source, e.flags]));
      },
    },
    {
      pack(e, t) {
        this.moreTypes
          ? RC(e, 16, t)
          : DC(EC ? Buffer.from(e) : new Uint8Array(e), t);
      },
    },
    {
      pack(e, t) {
        let a = e.constructor;
        a !== hC && this.moreTypes ? RC(e, sC.indexOf(a.name), t) : DC(e, t);
      },
    },
    {
      pack(e, t) {
        let { target: a, position: i } = t(1);
        a[i] = 193;
      },
    },
  ]));
var wC = new (class extends Pg {
    constructor(e) {
      let t, a, i, r;
      (super(e), (this.offset = 0));
      let s = hC.prototype.utf8Write
          ? function (e, t) {
              return fC.utf8Write(e, t, fC.byteLength - t);
            }
          : !(!uC || !uC.encodeInto) &&
            function (e, t) {
              return uC.encodeInto(e, fC.subarray(t)).written;
            },
        o = this;
      e || (e = {});
      let n = e && e.sequential,
        c = e.structures || e.saveStructures,
        l = e.maxSharedStructures;
      if ((null == l && (l = c ? 32 : 0), l > 8160))
        throw new Error("Maximum maxSharedStructure is 8160");
      e.structuredClone && null == e.moreTypes && (this.moreTypes = !0);
      let d = e.maxOwnStructures;
      (null == d && (d = c ? 32 : 64),
        this.structures || 0 == e.useRecords || (this.structures = []));
      let u = l > 32 || d + l > 64,
        p = l + 64,
        $ = l + d + 64;
      if ($ > 8256)
        throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
      let _ = [],
        I = 0,
        A = 0;
      this.pack = this.encode = function (e, s) {
        if (
          (fC ||
            ((fC = new TC(8192)),
            (gC =
              fC.dataView || (fC.dataView = new DataView(fC.buffer, 0, 8192))),
            (yC = 0)),
          (CC = fC.length - 10) - yC < 2048
            ? ((fC = new TC(fC.length)),
              (gC =
                fC.dataView ||
                (fC.dataView = new DataView(fC.buffer, 0, fC.length))),
              (CC = fC.length - 10),
              (yC = 0))
            : (yC = (yC + 7) & 2147483640),
          (t = yC),
          s & FC && (yC += 255 & s),
          (r = o.structuredClone ? new Map() : null),
          o.bundleStrings && "string" != typeof e
            ? ((SC = []).size = 1 / 0)
            : (SC = null),
          (i = o.structures),
          i)
        ) {
          i.uninitialized && (i = o._mergeStructures(o.getStructures()));
          let e = i.sharedLength || 0;
          if (e > l)
            throw new Error(
              "Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " +
                i.sharedLength,
            );
          if (!i.transitions) {
            i.transitions = Object.create(null);
            for (let t = 0; t < e; t++) {
              let e = i[t];
              if (!e) continue;
              let a,
                r = i.transitions;
              for (let t = 0, i = e.length; t < i; t++) {
                let i = e[t];
                ((a = r[i]), a || (a = r[i] = Object.create(null)), (r = a));
              }
              r[NC] = t + 64;
            }
            this.lastNamedStructuresLength = e;
          }
          n || (i.nextId = e + 64);
        }
        let c;
        a && (a = !1);
        try {
          o.randomAccessStructure &&
          e &&
          e.constructor &&
          e.constructor === Object
            ? S(e)
            : g(e);
          let a = SC;
          if ((SC && MC(t, g, 0), r && r.idsToInsert)) {
            let e = r.idsToInsert.sort((e, t) =>
                e.offset > t.offset ? 1 : -1,
              ),
              i = e.length,
              s = -1;
            for (; a && i > 0;) {
              let r = e[--i].offset + t;
              (r < a.stringsPosition + t && -1 === s && (s = 0),
                r > a.position + t
                  ? s >= 0 && (s += 6)
                  : (s >= 0 &&
                      (gC.setUint32(
                        a.position + t,
                        gC.getUint32(a.position + t) + s,
                      ),
                      (s = -1)),
                    (a = a.previous),
                    i++));
            }
            (s >= 0 &&
              a &&
              gC.setUint32(a.position + t, gC.getUint32(a.position + t) + s),
              (yC += 6 * e.length) > CC && h(yC),
              (o.offset = yC));
            let n = (function (e, t) {
              let a,
                i = 6 * t.length,
                r = e.length - i;
              for (; (a = t.pop());) {
                let t = a.offset,
                  s = a.id;
                (e.copyWithin(t + i, t, r), (i -= 6));
                let o = t + i;
                ((e[o++] = 214),
                  (e[o++] = 105),
                  (e[o++] = s >> 24),
                  (e[o++] = (s >> 16) & 255),
                  (e[o++] = (s >> 8) & 255),
                  (e[o++] = 255 & s),
                  (r = t));
              }
              return e;
            })(fC.subarray(t, yC), e);
            return ((r = null), n);
          }
          return (
            (o.offset = yC),
            s & QC ? ((fC.start = t), (fC.end = yC), fC) : fC.subarray(t, yC)
          );
        } catch (e) {
          throw ((c = e), e);
        } finally {
          if (i && (f(), a && o.saveStructures)) {
            let a = i.sharedLength || 0,
              r = fC.subarray(t, yC),
              n = UC(i, o);
            if (!c)
              return !1 === o.saveStructures(n, n.isCompatible)
                ? o.pack(e, s)
                : ((o.lastNamedStructuresLength = a),
                  fC.length > 1073741824 && (fC = null),
                  r);
          }
          (fC.length > 1073741824 && (fC = null), s & KC && (yC = t));
        }
      };
      const f = () => {
          A < 10 && A++;
          let e = i.sharedLength || 0;
          if ((i.length > e && !n && (i.length = e), I > 1e4))
            ((i.transitions = null),
              (A = 0),
              (I = 0),
              _.length > 0 && (_ = []));
          else if (_.length > 0 && !n) {
            for (let e = 0, t = _.length; e < t; e++) _[e][NC] = 0;
            _ = [];
          }
        },
        m = (e) => {
          var t = e.length;
          t < 16
            ? (fC[yC++] = 144 | t)
            : t < 65536
              ? ((fC[yC++] = 220), (fC[yC++] = t >> 8), (fC[yC++] = 255 & t))
              : ((fC[yC++] = 221), gC.setUint32(yC, t), (yC += 4));
          for (let a = 0; a < t; a++) g(e[a]);
        },
        g = (e) => {
          yC > CC && (fC = h(yC));
          var a,
            i = typeof e;
          if ("string" === i) {
            let i,
              r = e.length;
            if (SC && r >= 4 && r < 4096) {
              if ((SC.size += r) > 21760) {
                let e,
                  a,
                  i = (SC[0] ? 3 * SC[0].length + SC[1].length : 0) + 10;
                (yC + i > CC && (fC = h(yC + i)),
                  SC.position
                    ? ((a = SC),
                      (fC[yC] = 200),
                      (yC += 3),
                      (fC[yC++] = 98),
                      (e = yC - t),
                      (yC += 4),
                      MC(t, g, 0),
                      gC.setUint16(e + t - 3, yC - t - e))
                    : ((fC[yC++] = 214),
                      (fC[yC++] = 98),
                      (e = yC - t),
                      (yC += 4)),
                  ((SC = ["", ""]).previous = a),
                  (SC.size = 0),
                  (SC.position = e));
              }
              let a = LC.test(e);
              return (
                (SC[a ? 0 : 1] += e),
                (fC[yC++] = 193),
                void g(a ? -r : r)
              );
            }
            i = r < 32 ? 1 : r < 256 ? 2 : r < 65536 ? 3 : 5;
            let o = 3 * r;
            if ((yC + o > CC && (fC = h(yC + o)), r < 64 || !s)) {
              let t,
                s,
                o,
                n = yC + i;
              for (t = 0; t < r; t++)
                ((s = e.charCodeAt(t)),
                  s < 128
                    ? (fC[n++] = s)
                    : s < 2048
                      ? ((fC[n++] = (s >> 6) | 192), (fC[n++] = (63 & s) | 128))
                      : 55296 == (64512 & s) &&
                          56320 == (64512 & (o = e.charCodeAt(t + 1)))
                        ? ((s = 65536 + ((1023 & s) << 10) + (1023 & o)),
                          t++,
                          (fC[n++] = (s >> 18) | 240),
                          (fC[n++] = ((s >> 12) & 63) | 128),
                          (fC[n++] = ((s >> 6) & 63) | 128),
                          (fC[n++] = (63 & s) | 128))
                        : ((fC[n++] = (s >> 12) | 224),
                          (fC[n++] = ((s >> 6) & 63) | 128),
                          (fC[n++] = (63 & s) | 128)));
              a = n - yC - i;
            } else a = s(e, yC + i);
            (a < 32
              ? (fC[yC++] = 160 | a)
              : a < 256
                ? (i < 2 && fC.copyWithin(yC + 2, yC + 1, yC + 1 + a),
                  (fC[yC++] = 217),
                  (fC[yC++] = a))
                : a < 65536
                  ? (i < 3 && fC.copyWithin(yC + 3, yC + 2, yC + 2 + a),
                    (fC[yC++] = 218),
                    (fC[yC++] = a >> 8),
                    (fC[yC++] = 255 & a))
                  : (i < 5 && fC.copyWithin(yC + 5, yC + 3, yC + 3 + a),
                    (fC[yC++] = 219),
                    gC.setUint32(yC, a),
                    (yC += 4)),
              (yC += a));
          } else if ("number" === i)
            if (e >>> 0 === e)
              e < 32 ||
              (e < 128 && !1 === this.useRecords) ||
              (e < 64 && !this.randomAccessStructure)
                ? (fC[yC++] = e)
                : e < 256
                  ? ((fC[yC++] = 204), (fC[yC++] = e))
                  : e < 65536
                    ? ((fC[yC++] = 205),
                      (fC[yC++] = e >> 8),
                      (fC[yC++] = 255 & e))
                    : ((fC[yC++] = 206), gC.setUint32(yC, e), (yC += 4));
            else if ((e | 0) === e)
              e >= -32
                ? (fC[yC++] = 256 + e)
                : e >= -128
                  ? ((fC[yC++] = 208), (fC[yC++] = e + 256))
                  : e >= -32768
                    ? ((fC[yC++] = 209), gC.setInt16(yC, e), (yC += 2))
                    : ((fC[yC++] = 210), gC.setInt32(yC, e), (yC += 4));
            else {
              let t;
              if (
                (t = this.useFloat32) > 0 &&
                e < 4294967296 &&
                e >= -2147483648
              ) {
                let a;
                if (
                  ((fC[yC++] = 202),
                  gC.setFloat32(yC, e),
                  t < 4 ||
                    ((a = e * dC[((127 & fC[yC]) << 1) | (fC[yC + 1] >> 7)]) |
                      0) ===
                      a)
                )
                  return void (yC += 4);
                yC--;
              }
              ((fC[yC++] = 203), gC.setFloat64(yC, e), (yC += 8));
            }
          else if ("object" === i || "function" === i)
            if (e) {
              if (r) {
                let a = r.get(e);
                if (a) {
                  if (!a.id) {
                    let e = r.idsToInsert || (r.idsToInsert = []);
                    a.id = e.push(a);
                  }
                  return (
                    (fC[yC++] = 214),
                    (fC[yC++] = 112),
                    gC.setUint32(yC, a.id),
                    void (yC += 4)
                  );
                }
                r.set(e, { offset: yC - t });
              }
              let s = e.constructor;
              if (s === Object) T(e);
              else if (s === Array) m(e);
              else if (s === Map)
                if (this.mapAsEmptyObject) fC[yC++] = 128;
                else {
                  (a = e.size) < 16
                    ? (fC[yC++] = 128 | a)
                    : a < 65536
                      ? ((fC[yC++] = 222),
                        (fC[yC++] = a >> 8),
                        (fC[yC++] = 255 & a))
                      : ((fC[yC++] = 223), gC.setUint32(yC, a), (yC += 4));
                  for (let [t, a] of e) (g(t), g(a));
                }
              else {
                for (let t = 0, a = pC.length; t < a; t++) {
                  if (e instanceof $C[t]) {
                    let a = pC[t];
                    if (a.write) {
                      a.type &&
                        ((fC[yC++] = 212), (fC[yC++] = a.type), (fC[yC++] = 0));
                      let t = a.write.call(this, e);
                      return void (t === e
                        ? Array.isArray(e)
                          ? m(e)
                          : T(e)
                        : g(t));
                    }
                    let i,
                      r = fC,
                      s = gC,
                      o = yC;
                    fC = null;
                    try {
                      i = a.pack.call(
                        this,
                        e,
                        (e) => (
                          (fC = r),
                          (r = null),
                          (yC += e) > CC && h(yC),
                          { target: fC, targetView: gC, position: yC - e }
                        ),
                        g,
                      );
                    } finally {
                      r && ((gC = s), (yC = o), (CC = (fC = r).length - 10));
                    }
                    return void (
                      i &&
                      (i.length + yC > CC && h(i.length + yC),
                      (yC = PC(i, fC, yC, a.type)))
                    );
                  }
                }
                if (Array.isArray(e)) m(e);
                else {
                  if (e.toJSON) {
                    const t = e.toJSON();
                    if (t !== e) return g(t);
                  }
                  if ("function" === i)
                    return g(this.writeFunction && this.writeFunction(e));
                  T(e);
                }
              }
            } else fC[yC++] = 192;
          else if ("boolean" === i) fC[yC++] = e ? 195 : 194;
          else if ("bigint" === i) {
            if (e < BigInt(1) << BigInt(63) && e >= -(BigInt(1) << BigInt(63)))
              ((fC[yC++] = 211), gC.setBigInt64(yC, e));
            else if (e < BigInt(1) << BigInt(64) && e > 0)
              ((fC[yC++] = 207), gC.setBigUint64(yC, e));
            else {
              if (!this.largeBigIntToFloat) {
                if (this.largeBigIntToString) return g(e.toString());
                if (
                  this.useBigIntExtension &&
                  e < BigInt(2) ** BigInt(1023) &&
                  e > -(BigInt(2) ** BigInt(1023))
                ) {
                  ((fC[yC++] = 199), yC++, (fC[yC++] = 66));
                  let t,
                    a = [];
                  do {
                    let i = e & BigInt(255);
                    ((t =
                      (i & BigInt(128)) ===
                      (e < BigInt(0) ? BigInt(128) : BigInt(0))),
                      a.push(i),
                      (e >>= BigInt(8)));
                  } while ((e !== BigInt(0) && e !== BigInt(-1)) || !t);
                  fC[yC - 2] = a.length;
                  for (let e = a.length; e > 0;) fC[yC++] = Number(a[--e]);
                  return;
                }
                throw new RangeError(
                  e +
                    " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string",
                );
              }
              ((fC[yC++] = 203), gC.setFloat64(yC, Number(e)));
            }
            yC += 8;
          } else {
            if ("undefined" !== i) throw new Error("Unknown type: " + i);
            this.encodeUndefinedAsNil
              ? (fC[yC++] = 192)
              : ((fC[yC++] = 212), (fC[yC++] = 0), (fC[yC++] = 0));
          }
        },
        C =
          this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues
            ? (e) => {
                let t;
                if (this.skipValues) {
                  t = [];
                  for (let a in e)
                    ("function" == typeof e.hasOwnProperty &&
                      !e.hasOwnProperty(a)) ||
                      this.skipValues.includes(e[a]) ||
                      t.push(a);
                } else t = Object.keys(e);
                let a,
                  i = t.length;
                if (
                  (i < 16
                    ? (fC[yC++] = 128 | i)
                    : i < 65536
                      ? ((fC[yC++] = 222),
                        (fC[yC++] = i >> 8),
                        (fC[yC++] = 255 & i))
                      : ((fC[yC++] = 223), gC.setUint32(yC, i), (yC += 4)),
                  this.coercibleKeyAsNumber)
                )
                  for (let r = 0; r < i; r++) {
                    a = t[r];
                    let i = Number(a);
                    (g(isNaN(i) ? a : i), g(e[a]));
                  }
                else for (let r = 0; r < i; r++) (g((a = t[r])), g(e[a]));
              }
            : (e) => {
                fC[yC++] = 222;
                let a = yC - t;
                yC += 2;
                let i = 0;
                for (let t in e)
                  ("function" != typeof e.hasOwnProperty ||
                    e.hasOwnProperty(t)) &&
                    (g(t), g(e[t]), i++);
                if (i > 65535)
                  throw new Error(
                    'Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object',
                  );
                ((fC[a++ + t] = i >> 8), (fC[a + t] = 255 & i));
              },
        b =
          !1 === this.useRecords
            ? C
            : e.progressiveRecords && !u
              ? (e) => {
                  let a,
                    r,
                    s = i.transitions || (i.transitions = Object.create(null)),
                    o = yC++ - t;
                  for (let n in e)
                    if (
                      "function" != typeof e.hasOwnProperty ||
                      e.hasOwnProperty(n)
                    ) {
                      if (((a = s[n]), a)) s = a;
                      else {
                        let c = Object.keys(e),
                          l = s;
                        s = i.transitions;
                        let d = 0;
                        for (let e = 0, t = c.length; e < t; e++) {
                          let t = c[e];
                          ((a = s[t]),
                            a || ((a = s[t] = Object.create(null)), d++),
                            (s = a));
                        }
                        (o + t + 1 == yC ? (yC--, O(s, c, d)) : y(s, c, o, d),
                          (r = !0),
                          (s = l[n]));
                      }
                      g(e[n]);
                    }
                  if (!r) {
                    let a = s[NC];
                    a ? (fC[o + t] = a) : y(s, Object.keys(e), o, 0);
                  }
                }
              : (e) => {
                  let t,
                    a = i.transitions || (i.transitions = Object.create(null)),
                    r = 0;
                  for (let i in e)
                    ("function" != typeof e.hasOwnProperty ||
                      e.hasOwnProperty(i)) &&
                      ((t = a[i]),
                      t || ((t = a[i] = Object.create(null)), r++),
                      (a = t));
                  let s = a[NC];
                  s
                    ? s >= 96 && u
                      ? ((fC[yC++] = 96 + (31 & (s -= 96))),
                        (fC[yC++] = s >> 5))
                      : (fC[yC++] = s)
                    : O(a, a.__keys__ || Object.keys(e), r);
                  for (let t in e)
                    ("function" != typeof e.hasOwnProperty ||
                      e.hasOwnProperty(t)) &&
                      g(e[t]);
                },
        E = "function" == typeof this.useRecords && this.useRecords,
        T = E
          ? (e) => {
              E(e) ? b(e) : C(e);
            }
          : b,
        h = (e) => {
          let a;
          if (e > 16777216) {
            if (e - t > OC)
              throw new Error(
                "Packed buffer would be larger than maximum buffer size",
              );
            a = Math.min(
              OC,
              4096 *
                Math.round(
                  Math.max((e - t) * (e > 67108864 ? 1.25 : 2), 4194304) / 4096,
                ),
            );
          } else a = (1 + (Math.max((e - t) << 2, fC.length - 1) >> 12)) << 12;
          let i = new TC(a);
          return (
            (gC = i.dataView || (i.dataView = new DataView(i.buffer, 0, a))),
            (e = Math.min(e, fC.length)),
            fC.copy ? fC.copy(i, 0, t, e) : i.set(fC.slice(t, e)),
            (yC -= t),
            (t = 0),
            (CC = i.length - 10),
            (fC = i)
          );
        },
        O = (e, t, r) => {
          let s = i.nextId;
          (s || (s = 64),
            s < p && this.shouldShareStructure && !this.shouldShareStructure(t)
              ? ((s = i.nextOwnId), s < $ || (s = p), (i.nextOwnId = s + 1))
              : (s >= $ && (s = p), (i.nextId = s + 1)));
          let o = (t.highByte = s >= 96 && u ? (s - 96) >> 5 : -1);
          ((e[NC] = s),
            (e.__keys__ = t),
            (i[s - 64] = t),
            s < p
              ? ((t.isShared = !0),
                (i.sharedLength = s - 63),
                (a = !0),
                o >= 0
                  ? ((fC[yC++] = 96 + (31 & s)), (fC[yC++] = o))
                  : (fC[yC++] = s))
              : (o >= 0
                  ? ((fC[yC++] = 213),
                    (fC[yC++] = 114),
                    (fC[yC++] = 96 + (31 & s)),
                    (fC[yC++] = o))
                  : ((fC[yC++] = 212), (fC[yC++] = 114), (fC[yC++] = s)),
                r && (I += A * r),
                _.length >= d && (_.shift()[NC] = 0),
                _.push(e),
                g(t)));
        },
        y = (e, a, i, r) => {
          let s = fC,
            o = yC,
            n = CC,
            c = t;
          ((yC = 0),
            (t = 0),
            (fC = mC) || (mC = fC = new TC(8192)),
            (CC = fC.length - 10),
            O(e, a, r),
            (mC = fC));
          let l = yC;
          if (((fC = s), (yC = o), (CC = n), (t = c), l > 1)) {
            let e = yC + l - 1;
            e > CC && h(e);
            let a = i + t;
            (fC.copyWithin(a + l, a + 1, yC),
              fC.set(mC.slice(0, l), a),
              (yC = e));
          } else fC[i + t] = mC[0];
        },
        S = (e) => {
          let r = bC(
            e,
            fC,
            t,
            yC,
            i,
            h,
            (e, t, i) => {
              if (i) return (a = !0);
              yC = t;
              let r = fC;
              return (
                g(e),
                f(),
                r !== fC ? { position: yC, targetView: gC, target: fC } : yC
              );
            },
            this,
          );
          if (0 === r) return T(e);
          yC = r;
        };
    }
    useBuffer(e) {
      ((fC = e).dataView ||
        (fC.dataView = new DataView(fC.buffer, fC.byteOffset, fC.byteLength)),
        (yC = 0));
    }
    set position(e) {
      yC = e;
    }
    get position() {
      return yC;
    }
    clearSharedData() {
      (this.structures && (this.structures = []),
        this.typedStructs && (this.typedStructs = []));
    }
  })({ useRecords: !1 }),
  GC = wC.pack,
  {
    NEVER: vC,
    ALWAYS: BC,
    DECIMAL_ROUND: kC,
    DECIMAL_FIT: HC,
  } = (wC.pack, { NEVER: 0, ALWAYS: 1, DECIMAL_ROUND: 3, DECIMAL_FIT: 4 }),
  QC = 512,
  KC = 1024,
  FC = 2048,
  xC = ["num", "object", "string", "ascii"];

