// Reading excerpt from index.js, starting at line 46584.
// Shares bundle scope; use the complete bundle for execution.
function Qd(e, t) {
  if (Hd.hasOwnProperty.call(Hd, e)) return t ? YE(Hd[e]) : Hd[e];
  throw new Error(`Tried to lookup config that does not exist: ${e}`);
}
function Kd(e, t, a) {
  let i = "";
  return (
    "scpc" === t && Object.hasOwn(Hd, `Scpc${e}`)
      ? (i = "Scpc")
      : ["scpc", "h1"].includes(t) && (i = "Legacy"),
    "h2" !== t || Hd[`H2${e}`]
      ? Qd(`${i}${"h2" === t ? "H2" : ""}${e}`, a)
      : Qd(e, a)
  );
}
Object.keys(Hd).forEach((e) => {
  Hd[e] = JSON.parse(Hd[e]);
});
var Fd = f(qa()),
  xd = f(require("assert")),
  Yd = {};
I(Yd, {
  ISOLATED_UNLOCKABLES_EXEMPT: () => qb,
  clearInventoryCache: () => Jb,
  clearInventoryFor: () => zb,
  createInventory: () => iE,
  getUnlockableById: () => eE,
  getUnlockablesById: () => tE,
  grantDrops: () => rE,
});
var jd = {};
I(jd, {
  BAIJU_UNLOCKABLES: () => Au,
  BELLINI_UNLOCKABLES: () => fu,
  CONCRETEART_UNLOCKABLES: () => du,
  DELUXE_UNLOCKABLES: () => eu,
  EXECUTIVE_UNLOCKABLES: () => Jd,
  FILUR_UNLOCKABLES: () => mu,
  FRENCHMARTINI_UNLOCKABLES: () => Iu,
  H1_GOTY_UNLOCKABLES: () => Vd,
  H1_REQUIEM_UNLOCKABLES: () => qd,
  H2_RACCOON_STINGRAY_UNLOCKABLES: () => Wd,
  LAMBIC_UNLOCKABLES: () => _u,
  LEGACY_UNLOCKABLES: () => Xd,
  MAKESHIFT_UNLOCKABLES: () => lu,
  PENICILLIN_UNLOCKABLES: () => pu,
  SAMBUCA_UNLOCKABLES: () => uu,
  SIN_ENVY_UNLOCKABLES: () => ou,
  SIN_GLUTTONY_UNLOCKABLES: () => su,
  SIN_GREED_UNLOCKABLES: () => tu,
  SIN_LUST_UNLOCKABLES: () => ru,
  SIN_PRIDE_UNLOCKABLES: () => au,
  SIN_SLOTH_UNLOCKABLES: () => iu,
  SIN_WRATH_UNLOCKABLES: () => nu,
  SMART_CASUAL_UNLOCKABLES: () => Zd,
  TOMORROWLAND_UNLOCKABLES: () => $u,
  TRINITY_UNLOCKABLES: () => cu,
  WINTERSPORTS_UNLOCKABLES: () => zd,
  brokenItems: () => gu,
  translateEntitlements: () => Cu,
});
var Vd = [
    "TOKEN_OUTFIT_PARIS_CLOWN",
    "TOKEN_OUTFIT_HOKKAIDO_COWBOY",
    "PROP_MELEE_A_NEW_BAT",
    "FIREARMS_SNIPER_SIEGER_300_GHOST",
    "FIREARMS_PISTOL_STRIKER",
    "TOKEN_OUTFIT_MARRAKESH_DARK_SNIPER",
  ],
  qd = [
    "TOKEN_OUTFIT_LEGACY_HERO_REQUIEMSUIT",
    "PROP_DEVICE_SONYPREORDER_WHITE_RUBBERDUCK_REMOTE_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_TACTICAL_015_SU_SKIN05",
  ],
  Wd = [
    "PROP_TOOL_GOLD_BAR_SMALL",
    "PROP_DEVICE_ICA_REMOTE_FLASH",
    "FIREARMS_HERO_SHOTGUN_BARTOLI_12G_SAWED_OFF",
    "TOKEN_OUTFIT_BANK_STARTING_SUIT_REWARD",
    "TOKEN_OUTFIT_GREEDY_HERO_GREEDYSUIT",
    "PROP_MELEE_PIRATE_SABRE",
    "PROP_DEVICE_ICA_REMOTE_GAS_EMETIC",
    "FIREARMS_PISTOL_DARTGUN_SICK",
    "PROP_MELEE_TREASURE_KNIFE",
    "TOKEN_OUTFIT_STINGRAY_MASTERY_REWARD_SUIT",
    "FIREARMS_SNIPER_JAEGER_7_TUATARA",
    "TOKEN_OUTFIT_OPULENT_HERO_OPULENTSUIT",
    "TOKEN_OUTFIT_HERO_PIRATE_SUIT",
  ],
  Xd = [
    "PROP_POISON_VIAL_SEDATIVE",
    "FIREARMS_HERO_SNIPER_JAEGER",
    "FIREARMS_HERO_PISTOL_HWK_21",
    "PROP_DEVICE_NAPOLEON_FIGURE_REMOTE_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_TACTICAL_SILVERBALLER",
    "FIREARMS_HERO_SMG_TAC_SMG",
    "PROP_POISON_VIAL_FAST",
    "PROP_MELEE_SYRINGE_SEDATIVE",
    "FIREARMS_HERO_PISTOL_LIGHT_HWK_21_COVERT",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_EXPLOSIVE",
    "PROP_MELEE_SYRINGE_LETHAL",
    "FIREARMS_HERO_RIFLE_FULLAUTO_TAC_4_AUTO",
    "PROP_MELEE_COMBAT_KNIFE",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_AUDIODISTRACTION",
    "PROP_DISTRACTION_FIRECRACKER",
    "FIREARMS_HERO_SHOTGUN_SEMIAUTO_ENRAM_HV",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_BREACHCHARGE",
    "FIREARMS_HERO_SNIPER_HEAVY_JAEAGER_LANCER",
    "PROP_MELEE_ANTIQUE_SYRINGE_EMETIC",
    "PROP_DEVICE_ICA_MODULAR_PROXIMITY_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19_FA",
    "PROP_POISON_VIAL_SICK",
    "PROP_DEVICE_ICA_RUBBERDUCK_REMOTE_EXPLOSIVE",
    "PROP_MELEE_CEREMONIAL_DAGGER",
    "FIREARMS_HERO_SHOTGUN_SEMIAUTO_ENRAM_HV_CM",
    "PROP_DEVICE_ICA_C4_PROXIMITY_EXPLOSIVE",
    "FIREARMS_HERO_RIFLE_FULLAUTO_TAC_4_AR_STEALTH",
    "PROP_MELEE_CRYSTALBALL",
    "PROP_MELEE_MACHETE_BLOODY",
    "FIREARMS_HERO_SHOTGUN_SEMIAUTO_ENRAM_HV_COVERT",
    "FIREARMS_HERO_SMG_TACTICAL_TAC_SMG_S",
    "PROP_MELEE_SYRINGE_EMETIC",
    "PROP_MELEE_ANTIQUE_SYRINGE_LETHAL",
    "FIREARMS_HERO_SNIPER_HEAVY_JAEGER_TIGER",
    "PROP_DEVICE_ICA_PHONE_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_KRUGERMEIER",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_MUSICDISTRACTION",
    "FIREARMS_HERO_RIFLE_FULLAUTO_RS_15",
    "FIREARMS_HERO_RIFLE_SEMIAUTO_TAC_4_SA_STEALTH",
    "PROP_MELEE_EXPANDABLE_BATON",
    "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19_FA_STEALTH",
    "PROP_TOOL_ELECTRICAL_KIT",
    "FIREARMS_HERO_SNIPER_MEDIUM_SIEGER_300",
    "PROP_DEVICE_ICA_C4_REMOTE_EXPLOSIVE",
    "PROP_MELEE_SHURIKEN",
    "FIREARMS_HERO_PISTOL_CUSTOM5MM",
    "PROP_MELEE_NINJATONFA",
    "PROP_MELEE_KATANA_ENGRAVED",
    "PROP_MELEE_HIDDEN_BLADE",
    "PROP_EXPLOSIVE_EXPLOSIVE_COMPOUND",
    "FIREARMS_HERO_SNIPER_MEDIUM_SIEGER_300_ADVANCED",
    "PROP_MELEE_JAPANESE_BASEBALLBAT",
    "TOKEN_OUTFIT_GREENLAND_HERO_TRAININGSUIT",
    "TOKEN_OUTFIT_PARIS_HERO_PARISSUIT",
    "TOKEN_OUTFIT_SAPIENZA_HERO_SAPIENZASUIT",
    "TOKEN_OUTFIT_SAPIENZA_HERO_SAPIENZASUIT_NOGLASSES",
    "TOKEN_OUTFIT_MARRAKESH_HERO_MARRAKESHSUIT",
    "TOKEN_OUTFIT_BANGKOK_HERO_BANGKOKSUIT",
    "TOKEN_OUTFIT_COLORADO_HERO_COLORADOSUIT",
    "TOKEN_OUTFIT_HOKKAIDO_HERO_HOKKAIDOSUIT",
    "TOKEN_OUTFIT_HOKKAIDO_HERO_NINJASUIT",
    "PROP_TOOL_LOCK_PICK",
    "PROP_DEVICE_EXPLOSIVE_PRESENT",
    "TOKEN_OUTFIT_HERO_SANTACLAUS_SUIT",
    "PROP_DEVICE_LIL_FLASHY_REMOTE_FLASH",
    "PROP_MELEE_A_NEW_BAT",
    "FIREARMS_SNIPER_SIEGER_300_GHOST",
    "TOKEN_OUTFIT_REWARD_HERO_FALCON_ICE_SUIT",
    "TOKEN_OUTFIT_REWARD_SNOWFESTIVAL_SUIT",
    "FIREARMS_HERO_PISTOL_ICEBALLER",
    "PROP_MELEE_ICE_PICK",
    "FIREARMS_PISTOL_STRIKER",
    "TOKEN_OUTFIT_HERO_PARISSUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_SAPIENZASUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_MARRAKESHSUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_BANGKOKSUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_COLORADOSUIT_ALTERNATIVE",
    "TOKEN_OUTFIT_HERO_HOKKAIDOSUIT_ET_ALTERNATIVE",
    "PROP_DEVICE_ACTIONFIGURE_PROXIMITY_EXPLOSIVE",
    "FIREARMS_HERO_RIFLE_FULLAUTO_016_SU_SKIN06",
    "PROP_DEVICE_ICA_RUBBERDUCK_PROXIMITY_EXPLOSIVE",
    "PROP_MELEE_PHONE_CORD",
    "FIREARMS_HERO_RIFLE_SEMIAUTO_011_SU_SKIN10",
    "TOKEN_OUTFIT_SNAKE_CHARMER_SUIT",
  ],
  zd = [
    "TOKEN_OUTFIT_ARCTICPACK_SUIT",
    "PROP_CONTAINER_SUITCASE_ARCTIC_TOOL_BOX",
    "PROP_MELEE_SNOWBALL",
    "PROP_MELEE_QUICKDRAW",
    "PROP_MELEE_PITON",
  ],
  Jd = [
    "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19_BLACK_LILLY",
    "TOKEN_OUTFIT_MIDNIGHT_BLACK_COLLECTORS",
    "PROP_CONTAINER_SUITCASE_ICA_DELUXE",
  ],
  Zd = [
    "TOKEN_OUTFIT_URBAN_CLASSIC",
    "PROP_DEVICE_ICA_REMOTE_FLASH_PHONE",
    "PROP_MELEE_BLACK_PHONE_CORD",
  ],
  eu = [
    "PROP_CONTAINER_SUITCASE_GOLDEN",
    "TOKEN_OUTFIT_HERO_GOLDEN_DEVIL_SUIT",
    "FIREARMS_SMG_TACTICAL_DAK_DTI_GOLD_COVERT",
    "HUNTING_SHOTGUN_REWARD_DELUXE",
    "TOKEN_OUTFIT_HERO_HUNTING_SUIT",
    "PROP_CONTAINER_SUITCASE_HUNTING",
    "FIREARMS_PISTOL_DARTGUN_SEDATIVE_ASYLUM",
    "PROP_MELEE_LEATHERBELT_ASYLUM",
    "TOKEN_OUTFIT_HERO_ASYLUM_SUIT",
    "TOKEN_OUTFIT_HERO_CHINESE_SUIT",
    "FIREARMS_SNIPER_CHINESE_DRAGON",
    "PROP_CONTAINER_SUITCASE_CHINESE",
    "TOKEN_OUTFIT_HERO_GURU_SUIT",
    "PROP_EMETIC_POISON_PEN_SYRINGE_GURU",
    "PROP_GAS_GRENADE_EMETIC_GURU",
    "FIREARMS_SNIPER_SIEGER_300_WHITE_NINJA",
    "PROP_MELEE_KATANA_WHITE_NINJA",
    "TOKEN_OUTFIT_HERO_WHITE_NINJA_SUIT",
  ],
  tu = [
    "PROP_MELEE_CANE_GREED",
    "PROP_TOOL_GREED_COIN",
    "TOKEN_OUTFIT_HERO_GREED_SUIT",
  ],
  au = [
    "PROP_MELEE_PRIDE_SABER",
    "FIREARMS_SNIPER_PRIDE",
    "TOKEN_OUTFIT_HERO_PRIDE_SUIT",
  ],
  iu = [
    "PROP_DEVICE_AUDIO_SEDATIVE_MINE_SLOTH",
    "FIREARMS_HERO_SMG_DAKX2_COVERT_SLOTH",
    "TOKEN_OUTFIT_HERO_SLOTH_SUIT",
  ],
  ru = [
    "TOKEN_OUTFIT_HERO_LUST_SUIT",
    "PROP_DEVICE_REMOTE_EXPLOSIVE_LUST",
    "FIREARMS_PISTOL_DARTGUN_BLINDING_LUST",
  ],
  su = [
    "TOKEN_OUTFIT_HERO_GLUTTONY_SUIT",
    "PROP_POISON_SEDATIVE_GUM_GLUTTONY",
    "FIREARMS_HERO_SHOTGUN_SAWED_OFF_GLUTTONY",
  ],
  ou = [
    "TOKEN_OUTFIT_HERO_ENVY_SUIT",
    "FIREARMS_SNIPER_JAEGER_7_TUATARA_ENVY",
    "PROP_MELEE_DAGGER_ENVY",
  ],
  nu = [
    "TOKEN_OUTFIT_HERO_WRATH_SUIT",
    "PROP_DEVICE_PROXIMITY_FLASH_WRATH",
    "FIREARMS_HERO_RIFLE_SHASKA_A33_WRATH",
  ],
  cu = [
    "TOKEN_OUTFIT_HERO_BIRTH_SUIT",
    "FIREARMS_PISTOL_BIRTH_BALLER",
    "PROP_CONTAINER_SUITCASE_BIRTH",
    "TOKEN_OUTFIT_HERO_LIFE_SUIT",
    "FIREARMS_PISTOL_LIFE_BALLER",
    "PROP_CONTAINER_SUITCASE_LIFE",
    "FIREARMS_PISTOL_DEATH_BALLER",
    "TOKEN_OUTFIT_HERO_DEATH_SUIT",
    "PROP_CONTAINER_SUITCASE_DEATH",
  ],
  lu = [
    "FIREARMS_HERO_PISTOL_MAKESHIFT",
    "FIREARMS_HERO_SHOTGUN_MAKESHIFT",
    "FIREARMS_HERO_RIFLE_MAKESHIFT",
    "FIREARMS_HERO_SMG_TAC_SMG_MAKESHIFT",
    "FIREARMS_HERO_SNIPER_MAKESHIFT",
    "PROP_MELEE_KATANA_MAKESHIFT",
    "TOKEN_OUTFIT_HERO_MAKESHIFT",
  ],
  du = [
    "FIREARMS_HERO_PISTOL_CONCRETEART",
    "FIREARMS_HERO_SHOTGUN_CONCRETEART",
    "FIREARMS_HERO_RIFLE_CONCRETEART",
    "FIREARMS_HERO_SMG_TAC_SMG_CONCRETEART",
    "FIREARMS_HERO_SNIPER_CONCRETEART",
    "PROP_MELEE_BASEBALLBAT_CONCRETEART",
    "TOKEN_OUTFIT_HERO_CONCRETEART",
  ],
  uu = [
    "TOKEN_OUTFIT_REWARD_HERO_SB_PATCH_SUIT",
    "PROP_EXPLOSIVE_PEN_SAMBUCA",
    "PROP_GADGET_ROBOT_FLASH_SAMBUCA",
    "PROP_MELEE_BLACK_PHONE_CORD_SAMBUCA",
  ],
  pu = [
    "TOKEN_OUTFIT_REWARD_HERO_PEN_COAT_SUIT",
    "PROP_MELEE_STRENGTHBAND_PENICILLIN",
    "PROP_MELEE_KETTLEBELL_PENICILLIN",
    "PROP_MELEE_CANE_PENICILLIN",
  ],
  $u = [
    "TOKEN_OUTFIT_TOMORROWLAND_DJSUIT_REWARD",
    "PROP_MELEE_SHURIKEN_LP_TOMORROWLAND",
    "PROP_EXPLOSIVE_GRENADE_FLASH_TOMORROWLAND",
    "PROP_CONTAINER_SUITCASE_DJ_BAG",
  ],
  _u = [
    "TOKEN_OUTFIT_LAMBIC_KICKBOXER_REWARD",
    "FIREARMS_HERO_SMG_HX_10_LAMBIC",
    "PROP_MELEE_KUKRI_KNIFE_LAMBIC",
    "PROP_MELEE_VHS_LAMBIC",
  ],
  Iu = [
    "TOKEN_OUTFIT_FRENCHMARTINI_POKER_REWARD",
    "TOKEN_PROP_MELEE_FIBERWIRE_ROPE",
    "TOKEN_PROP_TOOL_COIN_POKERCHIP_FRENCHMARTINI",
    "FIREARMS_HERO_PISTOL_HWK_99_FRENCHMARTINI",
  ],
  Au = [
    "TOKEN_OUTFIT_REWARD_HERO_YELLOW_TRACKSUIT",
    "TOKEN_PROP_MELEE_KALI_STICKS",
    "TOKEN_PROP_MELEE_JADE_DAGGER",
    "TOKEN_PROP_MELEE_SCISSORS_BAIJU",
  ],
  fu = [
    "TOKEN_OUTFIT_REWARD_HERO_BELLINI_EMINEM",
    "FIREARMS_HERO_PISTOL_BELLINI_A",
    "TOKEN_PROP_MELEE_JAR_BELLINI_A",
    "PROP_DEVICE_BELLINI_FIGURE_REMOTE_EXPLOSIVE",
  ],
  mu = [
    "TOKEN_OUTFIT_REWARD_HERO_FILUR_OUTBREAK",
    "FIREARMS_HERO_PISTOL_FILUR",
    "TOKEN_PROP_MELEE_SICKLE_FILUR",
    "TOKEN_PROP_TOOL_KEYCARD_HACKER_FILUR",
  ],
  gu = [
    "835ad050-6d19-4e94-80b1-f5cec9815ba3",
    "051825b9-44f2-4b3d-8ab1-8d4a07393c76",
    "a8a8f0da-a69b-428d-b8c1-faf8660ec318",
    "099afc37-609b-48c9-9278-d3389b45829b",
    "3a4bcbbf-d451-4853-8a85-649120e384df",
    "e3234256-c061-48e6-b543-008d990affa1",
    "86c32734-a879-41e6-bd4e-6af1a95f1127",
    "da4f6106-0585-4a69-815d-51336d581a9b",
  ];
function Cu(e, t) {
  const a = [];
  return Array.isArray(t)
    ? ("h1" === e &&
        t.includes("H1_LEGACY_EXPANSION") &&
        a.push("GOTY_PATIENT_ZERO"),
      a)
    : [];
}
var bu = {};
function Eu(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
I(bu, {
  ALL_EPIC_ENTITLEMENTS: () => nA,
  ALL_STEAM_ENTITLEMENTS: () => cA,
  EPIC_NAMESPACE_2016: () => aA,
  EPIC_NAMESPACE_2021: () => sA,
  H1_EPIC_ENTITLEMENTS: () => XI,
  H1_STEAM_ENTITLEMENTS: () => JI,
  H2_STEAM_ENTITLEMENTS: () => ZI,
  H3_EPIC_ENTITLEMENTS: () => zI,
  H3_STEAM_ENTITLEMENTS: () => eA,
  STEAM_NAMESPACE_2016: () => tA,
  STEAM_NAMESPACE_2018: () => rA,
  STEAM_NAMESPACE_2021: () => oA,
  STEAM_NAMESPACE_SCPC: () => iA,
  getEpicEntitlements: () => dA,
  getPlatformEntitlements: () => lA,
});
var { toString: Tu } = Object.prototype,
  { getPrototypeOf: hu } = Object,
  Ou = ((e) => (t) => {
    const a = Tu.call(t);
    return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  yu = (e) => ((e = e.toLowerCase()), (t) => Ou(t) === e),
  Su = (e) => (t) => typeof t === e,
  { isArray: Lu } = Array,
  Nu = Su("undefined");
var Ru = yu("ArrayBuffer");
var Du = Su("string"),
  Pu = Su("function"),
  Mu = Su("number"),
  Uu = (e) => null !== e && "object" == typeof e,
  wu = (e) => {
    if ("object" !== Ou(e)) return !1;
    const t = hu(e);
    return !(
      (null !== t &&
        t !== Object.prototype &&
        null !== Object.getPrototypeOf(t)) ||
      Symbol.toStringTag in e ||
      Symbol.iterator in e
    );
  },
  Gu = yu("Date"),
  vu = yu("File"),
  Bu = yu("Blob"),
  ku = yu("FileList"),
  Hu = yu("URLSearchParams"),
  [Qu, Ku, Fu, xu] = ["ReadableStream", "Request", "Response", "Headers"].map(
    yu,
  );
function Yu(e, t, { allOwnKeys: a = !1 } = {}) {
  if (null == e) return;
  let i, r;
  if (("object" != typeof e && (e = [e]), Lu(e)))
    for (i = 0, r = e.length; i < r; i++) t.call(null, e[i], i, e);
  else {
    const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = r.length;
    let o;
    for (i = 0; i < s; i++) ((o = r[i]), t.call(null, e[o], o, e));
  }
}
function ju(e, t) {
  t = t.toLowerCase();
  const a = Object.keys(e);
  let i,
    r = a.length;
  for (; r-- > 0;) if (((i = a[r]), t === i.toLowerCase())) return i;
  return null;
}
var Vu =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
          ? window
          : global,
  qu = (e) => !Nu(e) && e !== Vu;
var Wu = (
    (e) => (t) =>
      e && t instanceof e
  )("undefined" != typeof Uint8Array && hu(Uint8Array)),
  Xu = yu("HTMLFormElement"),
  zu = (
    ({ hasOwnProperty: e }) =>
    (t, a) =>
      e.call(t, a)
  )(Object.prototype),
  Ju = yu("RegExp"),
  Zu = (e, t) => {
    const a = Object.getOwnPropertyDescriptors(e),
      i = {};
    (Yu(a, (a, r) => {
      let s;
      !1 !== (s = t(a, r, e)) && (i[r] = s || a);
    }),
      Object.defineProperties(e, i));
  };
var ep = yu("AsyncFunction"),
  tp = ((e, t) => {
    return e
      ? setImmediate
      : t
        ? ((a = `axios@${Math.random()}`),
          (i = []),
          Vu.addEventListener(
            "message",
            ({ source: e, data: t }) => {
              e === Vu && t === a && i.length && i.shift()();
            },
            !1,
          ),
          (e) => {
            (i.push(e), Vu.postMessage(a, "*"));
          })
        : (e) => setTimeout(e);
    var a, i;
  })("function" == typeof setImmediate, Pu(Vu.postMessage)),
  ap =
    "undefined" != typeof queueMicrotask
      ? queueMicrotask.bind(Vu)
      : ("undefined" != typeof process && process.nextTick) || tp,
  ip = {
    isArray: Lu,
    isArrayBuffer: Ru,
    isBuffer: function (e) {
      return (
        null !== e &&
        !Nu(e) &&
        null !== e.constructor &&
        !Nu(e.constructor) &&
        Pu(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: (e) => {
      let t;
      return (
        e &&
        (("function" == typeof FormData && e instanceof FormData) ||
          (Pu(e.append) &&
            ("formdata" === (t = Ou(e)) ||
              ("object" === t &&
                Pu(e.toString) &&
                "[object FormData]" === e.toString()))))
      );
    },
    isArrayBufferView: function (e) {
      let t;
      return (
        (t =
          "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && Ru(e.buffer)),
        t
      );
    },
    isString: Du,
    isNumber: Mu,
    isBoolean: (e) => !0 === e || !1 === e,
    isObject: Uu,
    isPlainObject: wu,
    isReadableStream: Qu,
    isRequest: Ku,
    isResponse: Fu,
    isHeaders: xu,
    isUndefined: Nu,
    isDate: Gu,
    isFile: vu,
    isBlob: Bu,
    isRegExp: Ju,
    isFunction: Pu,
    isStream: (e) => Uu(e) && Pu(e.pipe),
    isURLSearchParams: Hu,
    isTypedArray: Wu,
    isFileList: ku,
    forEach: Yu,
    merge: function e() {
      const { caseless: t } = (qu(this) && this) || {},
        a = {},
        i = (i, r) => {
          const s = (t && ju(a, r)) || r;
          wu(a[s]) && wu(i)
            ? (a[s] = e(a[s], i))
            : wu(i)
              ? (a[s] = e({}, i))
              : Lu(i)
                ? (a[s] = i.slice())
                : (a[s] = i);
        };
      for (let e = 0, t = arguments.length; e < t; e++)
        arguments[e] && Yu(arguments[e], i);
      return a;
    },
    extend: (e, t, a, { allOwnKeys: i } = {}) => (
      Yu(
        t,
        (t, i) => {
          a && Pu(t) ? (e[i] = Eu(t, a)) : (e[i] = t);
        },
        { allOwnKeys: i },
      ),
      e
    ),
    trim: (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
    inherits: (e, t, a, i) => {
      ((e.prototype = Object.create(t.prototype, i)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        a && Object.assign(e.prototype, a));
    },
    toFlatObject: (e, t, a, i) => {
      let r, s, o;
      const n = {};
      if (((t = t || {}), null == e)) return t;
      do {
        for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0;)
          ((o = r[s]),
            (i && !i(o, e, t)) || n[o] || ((t[o] = e[o]), (n[o] = !0)));
        e = !1 !== a && hu(e);
      } while (e && (!a || a(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: Ou,
    kindOfTest: yu,
    endsWith: (e, t, a) => {
      ((e = String(e)),
        (void 0 === a || a > e.length) && (a = e.length),
        (a -= t.length));
      const i = e.indexOf(t, a);
      return -1 !== i && i === a;
    },
    toArray: (e) => {
      if (!e) return null;
      if (Lu(e)) return e;
      let t = e.length;
      if (!Mu(t)) return null;
      const a = new Array(t);
      for (; t-- > 0;) a[t] = e[t];
      return a;
    },
    forEachEntry: (e, t) => {
      const a = (e && e[Symbol.iterator]).call(e);
      let i;
      for (; (i = a.next()) && !i.done;) {
        const a = i.value;
        t.call(e, a[0], a[1]);
      }
    },
    matchAll: (e, t) => {
      let a;
      const i = [];
      for (; null !== (a = e.exec(t));) i.push(a);
      return i;
    },
    isHTMLForm: Xu,
    hasOwnProperty: zu,
    hasOwnProp: zu,
    reduceDescriptors: Zu,
    freezeMethods: (e) => {
      Zu(e, (t, a) => {
        if (Pu(e) && -1 !== ["arguments", "caller", "callee"].indexOf(a))
          return !1;
        const i = e[a];
        Pu(i) &&
          ((t.enumerable = !1),
          "writable" in t
            ? (t.writable = !1)
            : t.set ||
              (t.set = () => {
                throw Error("Can not rewrite read-only method '" + a + "'");
              }));
      });
    },
    toObjectSet: (e, t) => {
      const a = {},
        i = (e) => {
          e.forEach((e) => {
            a[e] = !0;
          });
        };
      return (Lu(e) ? i(e) : i(String(e).split(t)), a);
    },
    toCamelCase: (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, a) {
        return t.toUpperCase() + a;
      }),
    noop: () => {},
    toFiniteNumber: (e, t) => (null != e && Number.isFinite((e = +e)) ? e : t),
    findKey: ju,
    global: Vu,
    isContextDefined: qu,
    isSpecCompliantForm: function (e) {
      return !!(
        e &&
        Pu(e.append) &&
        "FormData" === e[Symbol.toStringTag] &&
        e[Symbol.iterator]
      );
    },
    toJSONObject: (e) => {
      const t = new Array(10),
        a = (e, i) => {
          if (Uu(e)) {
            if (t.indexOf(e) >= 0) return;
            if (!("toJSON" in e)) {
              t[i] = e;
              const r = Lu(e) ? [] : {};
              return (
                Yu(e, (e, t) => {
                  const s = a(e, i + 1);
                  !Nu(s) && (r[t] = s);
                }),
                (t[i] = void 0),
                r
              );
            }
          }
          return e;
        };
      return a(e, 0);
    },
    isAsyncFn: ep,
    isThenable: (e) => e && (Uu(e) || Pu(e)) && Pu(e.then) && Pu(e.catch),
    setImmediate: tp,
    asap: ap,
  };
function rp(e, t, a, i, r) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    a && (this.config = a),
    i && (this.request = i),
    r && ((this.response = r), (this.status = r.status ? r.status : null)));
}
ip.inherits(rp, Error, {
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
      config: ip.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
var sp = rp.prototype,
  op = {};
([
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
].forEach((e) => {
  op[e] = { value: e };
}),
  Object.defineProperties(rp, op),
  Object.defineProperty(sp, "isAxiosError", { value: !0 }),
  (rp.from = (e, t, a, i, r, s) => {
    const o = Object.create(sp);
    return (
      ip.toFlatObject(
        e,
        o,
        function (e) {
          return e !== Error.prototype;
        },
        (e) => "isAxiosError" !== e,
      ),
      rp.call(o, e.message, t, a, i, r),
      (o.cause = e),
      (o.name = e.name),
      s && Object.assign(o, s),
      o
    );
  }));
var np = rp,
  cp = f(ki(), 1).default;
function lp(e) {
  return ip.isPlainObject(e) || ip.isArray(e);
}
function dp(e) {
  return ip.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function up(e, t, a) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return ((e = dp(e)), !a && t ? "[" + e + "]" : e);
        })
        .join(a ? "." : "")
    : t;
}
var pp = ip.toFlatObject(ip, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
var $p = function (e, t, a) {
  if (!ip.isObject(e)) throw new TypeError("target must be an object");
  t = t || new (cp || FormData)();
  const i = (a = ip.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !ip.isUndefined(t[e]);
      },
    )).metaTokens,
    r = a.visitor || l,
    s = a.dots,
    o = a.indexes,
    n =
      (a.Blob || ("undefined" != typeof Blob && Blob)) &&
      ip.isSpecCompliantForm(t);
  if (!ip.isFunction(r)) throw new TypeError("visitor must be a function");
  function c(e) {
    if (null === e) return "";
    if (ip.isDate(e)) return e.toISOString();
    if (!n && ip.isBlob(e))
      throw new np("Blob is not supported. Use a Buffer instead.");
    return ip.isArrayBuffer(e) || ip.isTypedArray(e)
      ? n && "function" == typeof Blob
        ? new Blob([e])
        : Buffer.from(e)
      : e;
  }
  function l(e, a, r) {
    let n = e;
    if (e && !r && "object" == typeof e)
      if (ip.endsWith(a, "{}"))
        ((a = i ? a : a.slice(0, -2)), (e = JSON.stringify(e)));
      else if (
        (ip.isArray(e) &&
          (function (e) {
            return ip.isArray(e) && !e.some(lp);
          })(e)) ||
        ((ip.isFileList(e) || ip.endsWith(a, "[]")) && (n = ip.toArray(e)))
      )
        return (
          (a = dp(a)),
          n.forEach(function (e, i) {
            !ip.isUndefined(e) &&
              null !== e &&
              t.append(
                !0 === o ? up([a], i, s) : null === o ? a : a + "[]",
                c(e),
              );
          }),
          !1
        );
    return !!lp(e) || (t.append(up(r, a, s), c(e)), !1);
  }
  const d = [],
    u = Object.assign(pp, {
      defaultVisitor: l,
      convertValue: c,
      isVisitable: lp,
    });
  if (!ip.isObject(e)) throw new TypeError("data must be an object");
  return (
    (function e(a, i) {
      if (!ip.isUndefined(a)) {
        if (-1 !== d.indexOf(a))
          throw Error("Circular reference detected in " + i.join("."));
        (d.push(a),
          ip.forEach(a, function (a, s) {
            !0 ===
              (!(ip.isUndefined(a) || null === a) &&
                r.call(t, a, ip.isString(s) ? s.trim() : s, i, u)) &&
              e(a, i ? i.concat(s) : [s]);
          }),
          d.pop());
      }
    })(e),
    t
  );
};
function _p(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
    return t[e];
  });
}
function Ip(e, t) {
  ((this._pairs = []), e && $p(e, this, t));
}
var Ap = Ip.prototype;
((Ap.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (Ap.toString = function (e) {
    const t = e
      ? function (t) {
          return e.call(this, t, _p);
        }
      : _p;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + "=" + t(e[1]);
      }, "")
      .join("&");
  }));
var fp = Ip;
function mp(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function gp(e, t, a) {
  if (!t) return e;
  const i = (a && a.encode) || mp;
  ip.isFunction(a) && (a = { serialize: a });
  const r = a && a.serialize;
  let s;
  if (
    ((s = r
      ? r(t, a)
      : ip.isURLSearchParams(t)
        ? t.toString()
        : new fp(t, a).toString(i)),
    s)
  ) {
    const t = e.indexOf("#");
    (-1 !== t && (e = e.slice(0, t)),
      (e += (-1 === e.indexOf("?") ? "?" : "&") + s));
  }
  return e;
}
var Cp = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, a) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!a && a.synchronous,
          runWhen: a ? a.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(e) {
      ip.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }
  },
  bp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ep = f(require("crypto"), 1),
  Tp = f(require("url"), 1).default.URLSearchParams,
  hp = "abcdefghijklmnopqrstuvwxyz",
  Op = "0123456789",
  yp = { DIGIT: Op, ALPHA: hp, ALPHA_DIGIT: hp + hp.toUpperCase() + Op },
  Sp = {
    isNode: !0,
    classes: {
      URLSearchParams: Tp,
      FormData: cp,
      Blob: ("undefined" != typeof Blob && Blob) || null,
    },
    ALPHABET: yp,
    generateString: (e = 16, t = yp.ALPHA_DIGIT) => {
      let a = "";
      const { length: i } = t,
        r = new Uint32Array(e);
      Ep.default.randomFillSync(r);
      for (let s = 0; s < e; s++) a += t[r[s] % i];
      return a;
    },
    protocols: ["http", "https", "file", "data"],
  },
  Lp = {};
I(Lp, {
  hasBrowserEnv: () => Np,
  hasStandardBrowserEnv: () => Dp,
  hasStandardBrowserWebWorkerEnv: () => Pp,
  navigator: () => Rp,
  origin: () => Mp,
});
var Np = "undefined" != typeof window && "undefined" != typeof document,
  Rp = ("object" == typeof navigator && navigator) || void 0,
  Dp =
    Np &&
    (!Rp || ["ReactNative", "NativeScript", "NS"].indexOf(Rp.product) < 0),
  Pp =
    "undefined" != typeof WorkerGlobalScope &&
    self instanceof WorkerGlobalScope &&
    "function" == typeof self.importScripts,
  Mp = (Np && window.location.href) || "http://localhost",
  Up = { ...Lp, ...Sp };
var wp = function (e) {
  function t(e, a, i, r) {
    let s = e[r++];
    if ("__proto__" === s) return !0;
    const o = Number.isFinite(+s),
      n = r >= e.length;
    if (((s = !s && ip.isArray(i) ? i.length : s), n))
      return (ip.hasOwnProp(i, s) ? (i[s] = [i[s], a]) : (i[s] = a), !o);
    (i[s] && ip.isObject(i[s])) || (i[s] = []);
    return (
      t(e, a, i[s], r) &&
        ip.isArray(i[s]) &&
        (i[s] = (function (e) {
          const t = {},
            a = Object.keys(e);
          let i;
          const r = a.length;
          let s;
          for (i = 0; i < r; i++) ((s = a[i]), (t[s] = e[s]));
          return t;
        })(i[s])),
      !o
    );
  }
  if (ip.isFormData(e) && ip.isFunction(e.entries)) {
    const a = {};
    return (
      ip.forEachEntry(e, (e, i) => {
        t(
          (function (e) {
            return ip
              .matchAll(/\w+|\[(\w*)]/g, e)
              .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
          })(e),
          i,
          a,
          0,
        );
      }),
      a
    );
  }
  return null;
};
var Gp = {
  transitional: bp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (e, t) {
      const a = t.getContentType() || "",
        i = a.indexOf("application/json") > -1,
        r = ip.isObject(e);
      r && ip.isHTMLForm(e) && (e = new FormData(e));
      if (ip.isFormData(e)) return i ? JSON.stringify(wp(e)) : e;
      if (
        ip.isArrayBuffer(e) ||
        ip.isBuffer(e) ||
        ip.isStream(e) ||
        ip.isFile(e) ||
        ip.isBlob(e) ||
        ip.isReadableStream(e)
      )
        return e;
      if (ip.isArrayBufferView(e)) return e.buffer;
      if (ip.isURLSearchParams(e))
        return (
          t.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          e.toString()
        );
      let s;
      if (r) {
        if (a.indexOf("application/x-www-form-urlencoded") > -1)
          return (function (e, t) {
            return $p(
              e,
              new Up.classes.URLSearchParams(),
              Object.assign(
                {
                  visitor: function (e, t, a, i) {
                    return Up.isNode && ip.isBuffer(e)
                      ? (this.append(t, e.toString("base64")), !1)
                      : i.defaultVisitor.apply(this, arguments);
                  },
                },
                t,
              ),
            );
          })(e, this.formSerializer).toString();
        if ((s = ip.isFileList(e)) || a.indexOf("multipart/form-data") > -1) {
          const t = this.env && this.env.FormData;
          return $p(
            s ? { "files[]": e } : e,
            t && new t(),
            this.formSerializer,
          );
        }
      }
      return r || i
        ? (t.setContentType("application/json", !1),
          (function (e, t, a) {
            if (ip.isString(e))
              try {
                return ((t || JSON.parse)(e), ip.trim(e));
              } catch (e) {
                if ("SyntaxError" !== e.name) throw e;
              }
            return (a || JSON.stringify)(e);
          })(e))
        : e;
    },
  ],
  transformResponse: [
    function (e) {
      const t = this.transitional || Gp.transitional,
        a = t && t.forcedJSONParsing,
        i = "json" === this.responseType;
      if (ip.isResponse(e) || ip.isReadableStream(e)) return e;
      if (e && ip.isString(e) && ((a && !this.responseType) || i)) {
        const a = !(t && t.silentJSONParsing) && i;
        try {
          return JSON.parse(e);
        } catch (e) {
          if (a) {
            if ("SyntaxError" === e.name)
              throw np.from(e, np.ERR_BAD_RESPONSE, this, null, this.response);
            throw e;
          }
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Up.classes.FormData, Blob: Up.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
ip.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Gp.headers[e] = {};
});
var vp = Gp,
  Bp = ip.toObjectSet([
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
  kp = Symbol("internals");
function Hp(e) {
  return e && String(e).trim().toLowerCase();
}
function Qp(e) {
  return !1 === e || null == e ? e : ip.isArray(e) ? e.map(Qp) : String(e);
}
function Kp(e, t, a, i, r) {
  return ip.isFunction(i)
    ? i.call(this, t, a)
    : (r && (t = a),
      ip.isString(t)
        ? ip.isString(i)
          ? -1 !== t.indexOf(i)
          : ip.isRegExp(i)
            ? i.test(t)
            : void 0
        : void 0);
}
var Fp = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, a) {
    const i = this;
    function r(e, t, a) {
      const r = Hp(t);
      if (!r) throw new Error("header name must be a non-empty string");
      const s = ip.findKey(i, r);
      (!s || void 0 === i[s] || !0 === a || (void 0 === a && !1 !== i[s])) &&
        (i[s || t] = Qp(e));
    }
    const s = (e, t) => ip.forEach(e, (e, a) => r(e, a, t));
    if (ip.isPlainObject(e) || e instanceof this.constructor) s(e, t);
    else if (
      ip.isString(e) &&
      (e = e.trim()) &&
      !((e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))(e)
    )
      s(
        ((e) => {
          const t = {};
          let a, i, r;
          return (
            e &&
              e.split("\n").forEach(function (e) {
                ((r = e.indexOf(":")),
                  (a = e.substring(0, r).trim().toLowerCase()),
                  (i = e.substring(r + 1).trim()),
                  !a ||
                    (t[a] && Bp[a]) ||
                    ("set-cookie" === a
                      ? t[a]
                        ? t[a].push(i)
                        : (t[a] = [i])
                      : (t[a] = t[a] ? t[a] + ", " + i : i)));
              }),
            t
          );
        })(e),
        t,
      );
    else if (ip.isHeaders(e)) for (const [t, i] of e.entries()) r(i, t, a);
    else null != e && r(t, e, a);
    return this;
  }
  get(e, t) {
    if ((e = Hp(e))) {
      const a = ip.findKey(this, e);
      if (a) {
        const e = this[a];
        if (!t) return e;
        if (!0 === t)
          return (function (e) {
            const t = Object.create(null),
              a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let i;
            for (; (i = a.exec(e));) t[i[1]] = i[2];
            return t;
          })(e);
        if (ip.isFunction(t)) return t.call(this, e, a);
        if (ip.isRegExp(t)) return t.exec(e);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if ((e = Hp(e))) {
      const a = ip.findKey(this, e);
      return !(!a || void 0 === this[a] || (t && !Kp(0, this[a], a, t)));
    }
    return !1;
  }
  delete(e, t) {
    const a = this;
    let i = !1;
    function r(e) {
      if ((e = Hp(e))) {
        const r = ip.findKey(a, e);
        !r || (t && !Kp(0, a[r], r, t)) || (delete a[r], (i = !0));
      }
    }
    return (ip.isArray(e) ? e.forEach(r) : r(e), i);
  }
  clear(e) {
    const t = Object.keys(this);
    let a = t.length,
      i = !1;
    for (; a--;) {
      const r = t[a];
      (e && !Kp(0, this[r], r, e, !0)) || (delete this[r], (i = !0));
    }
    return i;
  }
  normalize(e) {
    const t = this,
      a = {};
    return (
      ip.forEach(this, (i, r) => {
        const s = ip.findKey(a, r);
        if (s) return ((t[s] = Qp(i)), void delete t[r]);
        const o = e
          ? (function (e) {
              return e
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (e, t, a) => t.toUpperCase() + a);
            })(r)
          : String(r).trim();
        (o !== r && delete t[r], (t[o] = Qp(i)), (a[o] = !0));
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = Object.create(null);
    return (
      ip.forEach(this, (a, i) => {
        null != a && !1 !== a && (t[i] = e && ip.isArray(a) ? a.join(", ") : a);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([e, t]) => e + ": " + t)
      .join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const a = new this(e);
    return (t.forEach((e) => a.set(e)), a);
  }
  static accessor(e) {
    const t = (this[kp] = this[kp] = { accessors: {} }).accessors,
      a = this.prototype;
    function i(e) {
      const i = Hp(e);
      t[i] ||
        (!(function (e, t) {
          const a = ip.toCamelCase(" " + t);
          ["get", "set", "has"].forEach((i) => {
            Object.defineProperty(e, i + a, {
              value: function (e, a, r) {
                return this[i].call(this, t, e, a, r);
              },
              configurable: !0,
            });
          });
        })(a, e),
        (t[i] = !0));
    }
    return (ip.isArray(e) ? e.forEach(i) : i(e), this);
  }
};
(Fp.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]),
  ip.reduceDescriptors(Fp.prototype, ({ value: e }, t) => {
    let a = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[a] = e;
      },
    };
  }),
  ip.freezeMethods(Fp));
var xp = Fp;
function Yp(e, t) {
  const a = this || vp,
    i = t || a,
    r = xp.from(i.headers);
  let s = i.data;
  return (
    ip.forEach(e, function (e) {
      s = e.call(a, s, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    s
  );
}
function jp(e) {
  return !(!e || !e.__CANCEL__);
}
function Vp(e, t, a) {
  (np.call(this, e ?? "canceled", np.ERR_CANCELED, t, a),
    (this.name = "CanceledError"));
}
ip.inherits(Vp, np, { __CANCEL__: !0 });
var qp = Vp;
function Wp(e, t, a) {
  const i = a.config.validateStatus;
  a.status && i && !i(a.status)
    ? t(
        new np(
          "Request failed with status code " + a.status,
          [np.ERR_BAD_REQUEST, np.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a,
        ),
      )
    : e(a);
}
function Xp(e, t, a) {
  let i = !(function (e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  })(t);
  return (e && i) || 0 == a
    ? (function (e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
      })(e, t)
    : t;
}
var zp = f(Hi(), 1),
  Jp = f(require("http"), 1),
  Zp = f(require("https"), 1),
  e$ = f(require("util"), 1),
  t$ = f(Wi(), 1),
  a$ = f(require("zlib"), 1),
  i$ = "1.8.2";
function r$(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
var s$ = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
var o$ = f(require("stream"), 1),
  n$ = f(require("stream"), 1),
  c$ = Symbol("internals"),
  l$ = class extends n$.default.Transform {
    constructor(e) {
      super({
        readableHighWaterMark: (e = ip.toFlatObject(
          e,
          {
            maxRate: 0,
            chunkSize: 65536,
            minChunkSize: 100,
            timeWindow: 500,
            ticksRate: 2,
            samplesCount: 15,
          },
          null,
          (e, t) => !ip.isUndefined(t[e]),
        )).chunkSize,
      });
      const t = (this[c$] = {
        timeWindow: e.timeWindow,
        chunkSize: e.chunkSize,
        maxRate: e.maxRate,
        minChunkSize: e.minChunkSize,
        bytesSeen: 0,
        isCaptured: !1,
        notifiedBytesLoaded: 0,
        ts: Date.now(),
        bytes: 0,
        onReadCallback: null,
      });
      this.on("newListener", (e) => {
        "progress" === e && (t.isCaptured || (t.isCaptured = !0));
      });
    }
    _read(e) {
      const t = this[c$];
      return (t.onReadCallback && t.onReadCallback(), super._read(e));
    }
    _transform(e, t, a) {
      const i = this[c$],
        r = i.maxRate,
        s = this.readableHighWaterMark,
        o = i.timeWindow,
        n = r / (1e3 / o),
        c = !1 !== i.minChunkSize ? Math.max(i.minChunkSize, 0.01 * n) : 0,
        l = (e, t) => {
          const a = Buffer.byteLength(e);
          ((i.bytesSeen += a),
            (i.bytes += a),
            i.isCaptured && this.emit("progress", i.bytesSeen),
            this.push(e)
              ? process.nextTick(t)
              : (i.onReadCallback = () => {
                  ((i.onReadCallback = null), process.nextTick(t));
                }));
        },
        d = (e, t) => {
          const a = Buffer.byteLength(e);
          let d,
            u = null,
            p = s,
            $ = 0;
          if (r) {
            const e = Date.now();
            ((!i.ts || ($ = e - i.ts) >= o) &&
              ((i.ts = e),
              (d = n - i.bytes),
              (i.bytes = d < 0 ? -d : 0),
              ($ = 0)),
              (d = n - i.bytes));
          }
          if (r) {
            if (d <= 0)
              return setTimeout(() => {
                t(null, e);
              }, o - $);
            d < p && (p = d);
          }
          (p &&
            a > p &&
            a - p > c &&
            ((u = e.subarray(p)), (e = e.subarray(0, p))),
            l(
              e,
              u
                ? () => {
                    process.nextTick(t, null, u);
                  }
                : t,
            ));
        };
      d(e, function e(t, i) {
        if (t) return a(t);
        i ? d(i, e) : a(null);
      });
    }
  },
  d$ = l$,
  u$ = require("events"),
  p$ = f(require("util"), 1),
  $$ = require("stream"),
  { asyncIterator: _$ } = Symbol,
  I$ = async function* (e) {
    e.stream
      ? yield* e.stream()
      : e.arrayBuffer
        ? yield await e.arrayBuffer()
        : e[_$]
          ? yield* e[_$]()
          : yield e;
  },
  A$ = Up.ALPHABET.ALPHA_DIGIT + "-_",
  f$ =
    "function" == typeof TextEncoder
      ? new TextEncoder()
      : new p$.default.TextEncoder(),
  m$ = "\r\n",
  g$ = f$.encode(m$),
  C$ = class {
    constructor(e, t) {
      const { escapeName: a } = this.constructor,
        i = ip.isString(t);
      let r = `Content-Disposition: form-data; name="${a(e)}"${!i && t.name ? `; filename="${a(t.name)}"` : ""}${m$}`;
      (i
        ? (t = f$.encode(String(t).replace(/\r?\n|\r\n?/g, m$)))
        : (r += `Content-Type: ${t.type || "application/octet-stream"}${m$}`),
        (this.headers = f$.encode(r + m$)),
        (this.contentLength = i ? t.byteLength : t.size),
        (this.size = this.headers.byteLength + this.contentLength + 2),
        (this.name = e),
        (this.value = t));
    }
    async *encode() {
      yield this.headers;
      const { value: e } = this;
      (ip.isTypedArray(e) ? yield e : yield* I$(e), yield g$);
    }
    static escapeName(e) {
      return String(e).replace(
        /[\r\n"]/g,
        (e) => ({ "\r": "%0D", "\n": "%0A", '"': "%22" })[e],
      );
    }
  },
  b$ = (e, t, a) => {
    const {
      tag: i = "form-data-boundary",
      size: r = 25,
      boundary: s = i + "-" + Up.generateString(r, A$),
    } = a || {};
    if (!ip.isFormData(e)) throw TypeError("FormData instance required");
    if (s.length < 1 || s.length > 70)
      throw Error("boundary must be 10-70 characters long");
    const o = f$.encode("--" + s + m$),
      n = f$.encode("--" + s + "--" + m$ + m$);
    let c = n.byteLength;
    const l = Array.from(e.entries()).map(([e, t]) => {
      const a = new C$(e, t);
      return ((c += a.size), a);
    });
    ((c += o.byteLength * l.length), (c = ip.toFiniteNumber(c)));
    const d = { "Content-Type": `multipart/form-data; boundary=${s}` };
    return (
      Number.isFinite(c) && (d["Content-Length"] = c),
      t && t(d),
      $$.Readable.from(
        (async function* () {
          for (const e of l) (yield o, yield* e.encode());
          yield n;
        })(),
      )
    );
  },
  E$ = f(require("stream"), 1),
  T$ = class extends E$.default.Transform {
    __transform(e, t, a) {
      (this.push(e), a());
    }
    _transform(e, t, a) {
      if (
        0 !== e.length &&
        ((this._transform = this.__transform), 120 !== e[0])
      ) {
        const e = Buffer.alloc(2);
        ((e[0] = 120), (e[1] = 156), this.push(e, t));
      }
      this.__transform(e, t, a);
    }
  },
  h$ = T$,
  O$ = (e, t) =>
    ip.isAsyncFn(e)
      ? function (...a) {
          const i = a.pop();
          e.apply(this, a).then((e) => {
            try {
              t ? i(null, ...t(e)) : i(null, e);
            } catch (e) {
              i(e);
            }
          }, i);
        }
      : e;
var y$ = function (e, t) {
  e = e || 10;
  const a = new Array(e),
    i = new Array(e);
  let r,
    s = 0,
    o = 0;
  return (
    (t = void 0 !== t ? t : 1e3),
    function (n) {
      const c = Date.now(),
        l = i[o];
      (r || (r = c), (a[s] = n), (i[s] = c));
      let d = o,
        u = 0;
      for (; d !== s;) ((u += a[d++]), (d %= e));
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), c - r < t)) return;
      const p = l && c - l;
      return p ? Math.round((1e3 * u) / p) : void 0;
    }
  );
};
var S$ = function (e, t) {
    let a,
      i,
      r = 0,
      s = 1e3 / t;
    const o = (t, s = Date.now()) => {
      ((r = s),
        (a = null),
        i && (clearTimeout(i), (i = null)),
        e.apply(null, t));
    };
    return [
      (...e) => {
        const t = Date.now(),
          n = t - r;
        n >= s
          ? o(e, t)
          : ((a = e),
            i ||
              (i = setTimeout(() => {
                ((i = null), o(a));
              }, s - n)));
      },
      () => a && o(a),
    ];
  },
  L$ = (e, t, a = 3) => {
    let i = 0;
    const r = y$(50, 250);
    return S$((a) => {
      const s = a.loaded,
        o = a.lengthComputable ? a.total : void 0,
        n = s - i,
        c = r(n);
      i = s;
      e({
        loaded: s,
        total: o,
        progress: o ? s / o : void 0,
        bytes: n,
        rate: c || void 0,
        estimated: c && o && s <= o ? (o - s) / c : void 0,
        event: a,
        lengthComputable: null != o,
        [t ? "download" : "upload"]: !0,
      });
    }, a);
  },
  N$ = (e, t) => {
    const a = null != e;
    return [(i) => t[0]({ lengthComputable: a, total: e, loaded: i }), t[1]];
  },
  R$ =
    (e) =>
    (...t) =>
      ip.asap(() => e(...t)),
  D$ = {
    flush: a$.default.constants.Z_SYNC_FLUSH,
    finishFlush: a$.default.constants.Z_SYNC_FLUSH,
  },
  P$ = {
    flush: a$.default.constants.BROTLI_OPERATION_FLUSH,
    finishFlush: a$.default.constants.BROTLI_OPERATION_FLUSH,
  },
  M$ = ip.isFunction(a$.default.createBrotliDecompress),
  { http: U$, https: w$ } = t$.default,
  G$ = /https:?/,
  v$ = Up.protocols.map((e) => e + ":"),
  B$ = (e, [t, a]) => (e.on("end", a).on("error", a), t);
function k$(e, t) {
  (e.beforeRedirects.proxy && e.beforeRedirects.proxy(e),
    e.beforeRedirects.config && e.beforeRedirects.config(e, t));
}
function H$(e, t, a) {
  let i = t;
  if (!i && !1 !== i) {
    const e = zp.default.getProxyForUrl(a);
    e && (i = new URL(e));
  }
  if (i) {
    if (
      (i.username && (i.auth = (i.username || "") + ":" + (i.password || "")),
      i.auth)
    ) {
      (i.auth.username || i.auth.password) &&
        (i.auth = (i.auth.username || "") + ":" + (i.auth.password || ""));
      const t = Buffer.from(i.auth, "utf8").toString("base64");
      e.headers["Proxy-Authorization"] = "Basic " + t;
    }
    e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
    const t = i.hostname || i.host;
    ((e.hostname = t),
      (e.host = t),
      (e.port = i.port),
      (e.path = a),
      i.protocol &&
        (e.protocol = i.protocol.includes(":")
          ? i.protocol
          : `${i.protocol}:`));
  }
  e.beforeRedirects.proxy = function (e) {
    H$(e, t, e.href);
  };
}
var Q$ = "undefined" != typeof process && "process" === ip.kindOf(process),
  K$ = (e, t) =>
    (({ address: e, family: t }) => {
      if (!ip.isString(e)) throw TypeError("address must be a string");
      return { address: e, family: t || (e.indexOf(".") < 0 ? 6 : 4) };
    })(ip.isObject(e) ? e : { address: e, family: t }),
  F$ =
    Q$ &&
    function (e) {
      return ((e) =>
        new Promise((t, a) => {
          let i, r;
          const s = (e, t) => {
              r || ((r = !0), i && i(e, t));
            },
            o = (e) => {
              (s(e, !0), a(e));
            };
          e(
            (e) => {
              (s(e), t(e));
            },
            o,
            (e) => (i = e),
          ).catch(o);
        }))(async function (t, a, i) {
        let { data: r, lookup: s, family: o } = e;
        const { responseType: n, responseEncoding: c } = e,
          l = e.method.toUpperCase();
        let d,
          u,
          p = !1;
        if (s) {
          const e = O$(s, (e) => (ip.isArray(e) ? e : [e]));
          s = (t, a, i) => {
            e(t, a, (e, t, r) => {
              if (e) return i(e);
              const s = ip.isArray(t) ? t.map((e) => K$(e)) : [K$(t, r)];
              a.all ? i(e, s) : i(e, s[0].address, s[0].family);
            });
          };
        }
        const $ = new u$.EventEmitter(),
          _ = () => {
            (e.cancelToken && e.cancelToken.unsubscribe(I),
              e.signal && e.signal.removeEventListener("abort", I),
              $.removeAllListeners());
          };
        function I(t) {
          $.emit("abort", !t || t.type ? new qp(null, e, u) : t);
        }
        (i((e, t) => {
          ((d = !0), t && ((p = !0), _()));
        }),
          $.once("abort", a),
          (e.cancelToken || e.signal) &&
            (e.cancelToken && e.cancelToken.subscribe(I),
            e.signal &&
              (e.signal.aborted
                ? I()
                : e.signal.addEventListener("abort", I))));
        const A = Xp(e.baseURL, e.url, e.allowAbsoluteUrls),
          f = new URL(A, Up.hasBrowserEnv ? Up.origin : void 0),
          m = f.protocol || v$[0];
        if ("data:" === m) {
          let i;
          if ("GET" !== l)
            return Wp(t, a, {
              status: 405,
              statusText: "method not allowed",
              headers: {},
              config: e,
            });
          try {
            i = (function (e, t, a) {
              const i = (a && a.Blob) || Up.classes.Blob,
                r = r$(e);
              if ((void 0 === t && i && (t = !0), "data" === r)) {
                e = r.length ? e.slice(r.length + 1) : e;
                const a = s$.exec(e);
                if (!a) throw new np("Invalid URL", np.ERR_INVALID_URL);
                const s = a[1],
                  o = a[2],
                  n = a[3],
                  c = Buffer.from(decodeURIComponent(n), o ? "base64" : "utf8");
                if (t) {
                  if (!i)
                    throw new np("Blob is not supported", np.ERR_NOT_SUPPORT);
                  return new i([c], { type: s });
                }
                return c;
              }
              throw new np("Unsupported protocol " + r, np.ERR_NOT_SUPPORT);
            })(e.url, "blob" === n, { Blob: e.env && e.env.Blob });
          } catch (t) {
            throw np.from(t, np.ERR_BAD_REQUEST, e);
          }
          return (
            "text" === n
              ? ((i = i.toString(c)),
                (c && "utf8" !== c) || (i = ip.stripBOM(i)))
              : "stream" === n && (i = o$.default.Readable.from(i)),
            Wp(t, a, {
              data: i,
              status: 200,
              statusText: "OK",
              headers: new xp(),
              config: e,
            })
          );
        }
        if (-1 === v$.indexOf(m))
          return a(new np("Unsupported protocol " + m, np.ERR_BAD_REQUEST, e));
        const g = xp.from(e.headers).normalize();
        g.set("User-Agent", "axios/" + i$, !1);
        const { onUploadProgress: C, onDownloadProgress: b } = e,
          E = e.maxRate;
        let T, h;
        if (ip.isSpecCompliantForm(r)) {
          const e = g.getContentType(/boundary=([-_\w\d]{10,70})/i);
          r = b$(
            r,
            (e) => {
              g.set(e);
            },
            { tag: `axios-${i$}-boundary`, boundary: (e && e[1]) || void 0 },
          );
        } else if (ip.isFormData(r) && ip.isFunction(r.getHeaders)) {
          if ((g.set(r.getHeaders()), !g.hasContentLength()))
            try {
              const e = await e$.default.promisify(r.getLength).call(r);
              Number.isFinite(e) && e >= 0 && g.setContentLength(e);
            } catch (e) {}
        } else if (ip.isBlob(r) || ip.isFile(r))
          (r.size && g.setContentType(r.type || "application/octet-stream"),
            g.setContentLength(r.size || 0),
            (r = o$.default.Readable.from(I$(r))));
        else if (r && !ip.isStream(r)) {
          if (Buffer.isBuffer(r));
          else if (ip.isArrayBuffer(r)) r = Buffer.from(new Uint8Array(r));
          else {
            if (!ip.isString(r))
              return a(
                new np(
                  "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
                  np.ERR_BAD_REQUEST,
                  e,
                ),
              );
            r = Buffer.from(r, "utf-8");
          }
          if (
            (g.setContentLength(r.length, !1),
            e.maxBodyLength > -1 && r.length > e.maxBodyLength)
          )
            return a(
              new np(
                "Request body larger than maxBodyLength limit",
                np.ERR_BAD_REQUEST,
                e,
              ),
            );
        }
        const O = ip.toFiniteNumber(g.getContentLength());
        let y, S;
        if (
          (ip.isArray(E) ? ((T = E[0]), (h = E[1])) : (T = h = E),
          r &&
            (C || T) &&
            (ip.isStream(r) ||
              (r = o$.default.Readable.from(r, { objectMode: !1 })),
            (r = o$.default.pipeline(
              [r, new d$({ maxRate: ip.toFiniteNumber(T) })],
              ip.noop,
            )),
            C && r.on("progress", B$(r, N$(O, L$(R$(C), !1, 3))))),
          e.auth)
        ) {
          y = (e.auth.username || "") + ":" + (e.auth.password || "");
        }
        if (!y && f.username) {
          y = f.username + ":" + f.password;
        }
        y && g.delete("authorization");
        try {
          S = gp(f.pathname + f.search, e.params, e.paramsSerializer).replace(
            /^\?/,
            "",
          );
        } catch (t) {
          const i = new Error(t.message);
          return ((i.config = e), (i.url = e.url), (i.exists = !0), a(i));
        }
        g.set(
          "Accept-Encoding",
          "gzip, compress, deflate" + (M$ ? ", br" : ""),
          !1,
        );
        const L = {
          path: S,
          method: l,
          headers: g.toJSON(),
          agents: { http: e.httpAgent, https: e.httpsAgent },
          auth: y,
          protocol: m,
          family: o,
          beforeRedirect: k$,
          beforeRedirects: {},
        };
        let N;
        (!ip.isUndefined(s) && (L.lookup = s),
          e.socketPath
            ? (L.socketPath = e.socketPath)
            : ((L.hostname = f.hostname.startsWith("[")
                ? f.hostname.slice(1, -1)
                : f.hostname),
              (L.port = f.port),
              H$(
                L,
                e.proxy,
                m + "//" + f.hostname + (f.port ? ":" + f.port : "") + L.path,
              )));
        const R = G$.test(L.protocol);
        if (
          ((L.agent = R ? e.httpsAgent : e.httpAgent),
          e.transport
            ? (N = e.transport)
            : 0 === e.maxRedirects
              ? (N = R ? Zp.default : Jp.default)
              : (e.maxRedirects && (L.maxRedirects = e.maxRedirects),
                e.beforeRedirect &&
                  (L.beforeRedirects.config = e.beforeRedirect),
                (N = R ? w$ : U$)),
          e.maxBodyLength > -1
            ? (L.maxBodyLength = e.maxBodyLength)
            : (L.maxBodyLength = 1 / 0),
          e.insecureHTTPParser && (L.insecureHTTPParser = e.insecureHTTPParser),
          (u = N.request(L, function (i) {
            if (u.destroyed) return;
            const r = [i],
              s = +i.headers["content-length"];
            if (b || h) {
              const e = new d$({ maxRate: ip.toFiniteNumber(h) });
              (b && e.on("progress", B$(e, N$(s, L$(R$(b), !0, 3)))),
                r.push(e));
            }
            let o = i;
            const d = i.req || u;
            if (!1 !== e.decompress && i.headers["content-encoding"])
              switch (
                (("HEAD" !== l && 204 !== i.statusCode) ||
                  delete i.headers["content-encoding"],
                (i.headers["content-encoding"] || "").toLowerCase())
              ) {
                case "gzip":
                case "x-gzip":
                case "compress":
                case "x-compress":
                  (r.push(a$.default.createUnzip(D$)),
                    delete i.headers["content-encoding"]);
                  break;
                case "deflate":
                  (r.push(new h$()),
                    r.push(a$.default.createUnzip(D$)),
                    delete i.headers["content-encoding"]);
                  break;
                case "br":
                  M$ &&
                    (r.push(a$.default.createBrotliDecompress(P$)),
                    delete i.headers["content-encoding"]);
              }
            o = r.length > 1 ? o$.default.pipeline(r, ip.noop) : r[0];
            const I = o$.default.finished(o, () => {
                (I(), _());
              }),
              A = {
                status: i.statusCode,
                statusText: i.statusMessage,
                headers: new xp(i.headers),
                config: e,
                request: d,
              };
            if ("stream" === n) ((A.data = o), Wp(t, a, A));
            else {
              const i = [];
              let r = 0;
              (o.on("data", function (t) {
                (i.push(t),
                  (r += t.length),
                  e.maxContentLength > -1 &&
                    r > e.maxContentLength &&
                    ((p = !0),
                    o.destroy(),
                    a(
                      new np(
                        "maxContentLength size of " +
                          e.maxContentLength +
                          " exceeded",
                        np.ERR_BAD_RESPONSE,
                        e,
                        d,
                      ),
                    )));
              }),
                o.on("aborted", function () {
                  if (p) return;
                  const t = new np(
                    "stream has been aborted",
                    np.ERR_BAD_RESPONSE,
                    e,
                    d,
                  );
                  (o.destroy(t), a(t));
                }),
                o.on("error", function (t) {
                  u.destroyed || a(np.from(t, null, e, d));
                }),
                o.on("end", function () {
                  try {
                    let e = 1 === i.length ? i[0] : Buffer.concat(i);
                    ("arraybuffer" !== n &&
                      ((e = e.toString(c)),
                      (c && "utf8" !== c) || (e = ip.stripBOM(e))),
                      (A.data = e));
                  } catch (t) {
                    return a(np.from(t, null, e, A.request, A));
                  }
                  Wp(t, a, A);
                }));
            }
            $.once("abort", (e) => {
              o.destroyed || (o.emit("error", e), o.destroy());
            });
          })),
          $.once("abort", (e) => {
            (a(e), u.destroy(e));
          }),
          u.on("error", function (t) {
            a(np.from(t, null, e, u));
          }),
          u.on("socket", function (e) {
            e.setKeepAlive(!0, 6e4);
          }),
          e.timeout)
        ) {
          const t = parseInt(e.timeout, 10);
          if (Number.isNaN(t))
            return void a(
              new np(
                "error trying to parse `config.timeout` to int",
                np.ERR_BAD_OPTION_VALUE,
                e,
                u,
              ),
            );
          u.setTimeout(t, function () {
            if (d) return;
            let t = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const i = e.transitional || bp;
            (e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              a(
                new np(
                  t,
                  i.clarifyTimeoutError ? np.ETIMEDOUT : np.ECONNABORTED,
                  e,
                  u,
                ),
              ),
              I());
          });
        }
        if (ip.isStream(r)) {
          let t = !1,
            a = !1;
          (r.on("end", () => {
            t = !0;
          }),
            r.once("error", (e) => {
              ((a = !0), u.destroy(e));
            }),
            r.on("close", () => {
              t || a || I(new qp("Request stream has been aborted", e, u));
            }),
            r.pipe(u));
        } else u.end(r);
      });
    },
  x$ = Up.hasStandardBrowserEnv
    ? ((e, t) => (a) => (
        (a = new URL(a, Up.origin)),
        e.protocol === a.protocol &&
          e.host === a.host &&
          (t || e.port === a.port)
      ))(
        new URL(Up.origin),
        Up.navigator && /(msie|trident)/i.test(Up.navigator.userAgent),
      )
    : () => !0,
  Y$ = Up.hasStandardBrowserEnv
    ? {
        write(e, t, a, i, r, s) {
          const o = [e + "=" + encodeURIComponent(t)];
          (ip.isNumber(a) && o.push("expires=" + new Date(a).toGMTString()),
            ip.isString(i) && o.push("path=" + i),
            ip.isString(r) && o.push("domain=" + r),
            !0 === s && o.push("secure"),
            (document.cookie = o.join("; ")));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : { write() {}, read: () => null, remove() {} },
  j$ = (e) => (e instanceof xp ? { ...e } : e);
function V$(e, t) {
  t = t || {};
  const a = {};
  function i(e, t, a, i) {
    return ip.isPlainObject(e) && ip.isPlainObject(t)
      ? ip.merge.call({ caseless: i }, e, t)
      : ip.isPlainObject(t)
        ? ip.merge({}, t)
        : ip.isArray(t)
          ? t.slice()
          : t;
  }
  function r(e, t, a, r) {
    return ip.isUndefined(t)
      ? ip.isUndefined(e)
        ? void 0
        : i(void 0, e, 0, r)
      : i(e, t, 0, r);
  }
  function s(e, t) {
    if (!ip.isUndefined(t)) return i(void 0, t);
  }
  function o(e, t) {
    return ip.isUndefined(t)
      ? ip.isUndefined(e)
        ? void 0
        : i(void 0, e)
      : i(void 0, t);
  }
  function n(a, r, s) {
    return s in t ? i(a, r) : s in e ? i(void 0, a) : void 0;
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: n,
    headers: (e, t, a) => r(j$(e), j$(t), 0, !0),
  };
  return (
    ip.forEach(Object.keys(Object.assign({}, e, t)), function (i) {
      const s = c[i] || r,
        o = s(e[i], t[i], i);
      (ip.isUndefined(o) && s !== n) || (a[i] = o);
    }),
    a
  );
}
var q$ = (e) => {
    const t = V$({}, e);
    let a,
      {
        data: i,
        withXSRFToken: r,
        xsrfHeaderName: s,
        xsrfCookieName: o,
        headers: n,
        auth: c,
      } = t;
    if (
      ((t.headers = n = xp.from(n)),
      (t.url = gp(Xp(t.baseURL, t.url), e.params, e.paramsSerializer)),
      c &&
        n.set(
          "Authorization",
          "Basic " +
            btoa(
              (c.username || "") +
                ":" +
                (c.password ? unescape(encodeURIComponent(c.password)) : ""),
            ),
        ),
      ip.isFormData(i))
    )
      if (Up.hasStandardBrowserEnv || Up.hasStandardBrowserWebWorkerEnv)
        n.setContentType(void 0);
      else if (!1 !== (a = n.getContentType())) {
        const [e, ...t] = a
          ? a
              .split(";")
              .map((e) => e.trim())
              .filter(Boolean)
          : [];
        n.setContentType([e || "multipart/form-data", ...t].join("; "));
      }
    if (
      Up.hasStandardBrowserEnv &&
      (r && ip.isFunction(r) && (r = r(t)), r || (!1 !== r && x$(t.url)))
    ) {
      const e = s && o && Y$.read(o);
      e && n.set(s, e);
    }
    return t;
  },
  W$ =
    "undefined" != typeof XMLHttpRequest &&
    function (e) {
      return new Promise(function (t, a) {
        const i = q$(e);
        let r = i.data;
        const s = xp.from(i.headers).normalize();
        let o,
          n,
          c,
          l,
          d,
          { responseType: u, onUploadProgress: p, onDownloadProgress: $ } = i;
        function _() {
          (l && l(),
            d && d(),
            i.cancelToken && i.cancelToken.unsubscribe(o),
            i.signal && i.signal.removeEventListener("abort", o));
        }
        let I = new XMLHttpRequest();
        function A() {
          if (!I) return;
          const i = xp.from(
            "getAllResponseHeaders" in I && I.getAllResponseHeaders(),
          );
          (Wp(
            function (e) {
              (t(e), _());
            },
            function (e) {
              (a(e), _());
            },
            {
              data:
                u && "text" !== u && "json" !== u ? I.response : I.responseText,
              status: I.status,
              statusText: I.statusText,
              headers: i,
              config: e,
              request: I,
            },
          ),
            (I = null));
        }
        (I.open(i.method.toUpperCase(), i.url, !0),
          (I.timeout = i.timeout),
          "onloadend" in I
            ? (I.onloadend = A)
            : (I.onreadystatechange = function () {
                I &&
                  4 === I.readyState &&
                  (0 !== I.status ||
                    (I.responseURL && 0 === I.responseURL.indexOf("file:"))) &&
                  setTimeout(A);
              }),
          (I.onabort = function () {
            I &&
              (a(new np("Request aborted", np.ECONNABORTED, e, I)), (I = null));
          }),
          (I.onerror = function () {
            (a(new np("Network Error", np.ERR_NETWORK, e, I)), (I = null));
          }),
          (I.ontimeout = function () {
            let t = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const r = i.transitional || bp;
            (i.timeoutErrorMessage && (t = i.timeoutErrorMessage),
              a(
                new np(
                  t,
                  r.clarifyTimeoutError ? np.ETIMEDOUT : np.ECONNABORTED,
                  e,
                  I,
                ),
              ),
              (I = null));
          }),
          void 0 === r && s.setContentType(null),
          "setRequestHeader" in I &&
            ip.forEach(s.toJSON(), function (e, t) {
              I.setRequestHeader(t, e);
            }),
          ip.isUndefined(i.withCredentials) ||
            (I.withCredentials = !!i.withCredentials),
          u && "json" !== u && (I.responseType = i.responseType),
          $ && (([c, d] = L$($, !0)), I.addEventListener("progress", c)),
          p &&
            I.upload &&
            (([n, l] = L$(p)),
            I.upload.addEventListener("progress", n),
            I.upload.addEventListener("loadend", l)),
          (i.cancelToken || i.signal) &&
            ((o = (t) => {
              I &&
                (a(!t || t.type ? new qp(null, e, I) : t),
                I.abort(),
                (I = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(o),
            i.signal &&
              (i.signal.aborted
                ? o()
                : i.signal.addEventListener("abort", o))));
        const f = r$(i.url);
        f && -1 === Up.protocols.indexOf(f)
          ? a(new np("Unsupported protocol " + f + ":", np.ERR_BAD_REQUEST, e))
          : I.send(r || null);
      });
    },
  X$ = (e, t) => {
    const { length: a } = (e = e ? e.filter(Boolean) : []);
    if (t || a) {
      let a,
        i = new AbortController();
      const r = function (e) {
        if (!a) {
          ((a = !0), o());
          const t = e instanceof Error ? e : this.reason;
          i.abort(
            t instanceof np ? t : new qp(t instanceof Error ? t.message : t),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          ((s = null), r(new np(`timeout ${t} of ms exceeded`, np.ETIMEDOUT)));
        }, t);
      const o = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((e) => {
            e.unsubscribe
              ? e.unsubscribe(r)
              : e.removeEventListener("abort", r);
          }),
          (e = null));
      };
      e.forEach((e) => e.addEventListener("abort", r));
      const { signal: n } = i;
      return ((n.unsubscribe = () => ip.asap(o)), n);
    }
  },
  z$ = function* (e, t) {
    let a = e.byteLength;
    if (!t || a < t) return void (yield e);
    let i,
      r = 0;
    for (; r < a;) ((i = r + t), yield e.slice(r, i), (r = i));
  },
  J$ = async function* (e) {
    if (e[Symbol.asyncIterator]) return void (yield* e);
    const t = e.getReader();
    try {
      for (;;) {
        const { done: e, value: a } = await t.read();
        if (e) break;
        yield a;
      }
    } finally {
      await t.cancel();
    }
  },
  Z$ = (e, t, a, i) => {
    const r = (async function* (e, t) {
      for await (const a of J$(e)) yield* z$(a, t);
    })(e, t);
    let s,
      o = 0,
      n = (e) => {
        s || ((s = !0), i && i(e));
      };
    return new ReadableStream(
      {
        async pull(e) {
          try {
            const { done: t, value: i } = await r.next();
            if (t) return (n(), void e.close());
            let s = i.byteLength;
            if (a) {
              let e = (o += s);
              a(e);
            }
            e.enqueue(new Uint8Array(i));
          } catch (e) {
            throw (n(e), e);
          }
        },
        cancel: (e) => (n(e), r.return()),
      },
      { highWaterMark: 2 },
    );
  },
  e_ =
    "function" == typeof fetch &&
    "function" == typeof Request &&
    "function" == typeof Response,
  t_ = e_ && "function" == typeof ReadableStream,
  a_ =
    e_ &&
    ("function" == typeof TextEncoder
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  i_ = (e, ...t) => {
    try {
      return !!e(...t);
    } catch (e) {
      return !1;
    }
  },
  r_ =
    t_ &&
    i_(() => {
      let e = !1;
      const t = new Request(Up.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return ((e = !0), "half");
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  s_ = t_ && i_(() => ip.isReadableStream(new Response("").body)),
  o_ = { stream: s_ && ((e) => e.body) };
e_ &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !o_[t] &&
        (o_[t] = ip.isFunction(e[t])
          ? (e) => e[t]()
          : (e, a) => {
              throw new np(
                `Response type '${t}' is not supported`,
                np.ERR_NOT_SUPPORT,
                a,
              );
            });
    });
  })(new Response());
var n_ = async (e, t) => {
    const a = ip.toFiniteNumber(e.getContentLength());
    return (
      a ??
      (async (e) => {
        if (null == e) return 0;
        if (ip.isBlob(e)) return e.size;
        if (ip.isSpecCompliantForm(e)) {
          const t = new Request(Up.origin, { method: "POST", body: e });
          return (await t.arrayBuffer()).byteLength;
        }
        return ip.isArrayBufferView(e) || ip.isArrayBuffer(e)
          ? e.byteLength
          : (ip.isURLSearchParams(e) && (e += ""),
            ip.isString(e) ? (await a_(e)).byteLength : void 0);
      })(t)
    );
  },
  c_ =
    e_ &&
    (async (e) => {
      let {
        url: t,
        method: a,
        data: i,
        signal: r,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: n,
        onUploadProgress: c,
        responseType: l,
        headers: d,
        withCredentials: u = "same-origin",
        fetchOptions: p,
      } = q$(e);
      l = l ? (l + "").toLowerCase() : "text";
      let $,
        _ = X$([r, s && s.toAbortSignal()], o);
      const I =
        _ &&
        _.unsubscribe &&
        (() => {
          _.unsubscribe();
        });
      let A;
      try {
        if (
          c &&
          r_ &&
          "get" !== a &&
          "head" !== a &&
          0 !== (A = await n_(d, i))
        ) {
          let e,
            a = new Request(t, { method: "POST", body: i, duplex: "half" });
          if (
            (ip.isFormData(i) &&
              (e = a.headers.get("content-type")) &&
              d.setContentType(e),
            a.body)
          ) {
            const [e, t] = N$(A, L$(R$(c)));
            i = Z$(a.body, 65536, e, t);
          }
        }
        ip.isString(u) || (u = u ? "include" : "omit");
        const r = "credentials" in Request.prototype;
        $ = new Request(t, {
          ...p,
          signal: _,
          method: a.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: r ? u : void 0,
        });
        let s = await fetch($);
        const o = s_ && ("stream" === l || "response" === l);
        if (s_ && (n || (o && I))) {
          const e = {};
          ["status", "statusText", "headers"].forEach((t) => {
            e[t] = s[t];
          });
          const t = ip.toFiniteNumber(s.headers.get("content-length")),
            [a, i] = (n && N$(t, L$(R$(n), !0))) || [];
          s = new Response(
            Z$(s.body, 65536, a, () => {
              (i && i(), I && I());
            }),
            e,
          );
        }
        l = l || "text";
        let f = await o_[ip.findKey(o_, l) || "text"](s, e);
        return (
          !o && I && I(),
          await new Promise((t, a) => {
            Wp(t, a, {
              data: f,
              headers: xp.from(s.headers),
              status: s.status,
              statusText: s.statusText,
              config: e,
              request: $,
            });
          })
        );
      } catch (t) {
        if ((I && I(), t && "TypeError" === t.name && /fetch/i.test(t.message)))
          throw Object.assign(new np("Network Error", np.ERR_NETWORK, e, $), {
            cause: t.cause || t,
          });
        throw np.from(t, t && t.code, e, $);
      }
    }),
  l_ = { http: F$, xhr: W$, fetch: c_ };
ip.forEach(l_, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (e) {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
var d_ = (e) => `- ${e}`,
  u_ = (e) => ip.isFunction(e) || null === e || !1 === e,
  p_ = (e) => {
    e = ip.isArray(e) ? e : [e];
    const { length: t } = e;
    let a, i;
    const r = {};
    for (let s = 0; s < t; s++) {
      let t;
      if (
        ((a = e[s]),
        (i = a),
        !u_(a) && ((i = l_[(t = String(a)).toLowerCase()]), void 0 === i))
      )
        throw new np(`Unknown adapter '${t}'`);
      if (i) break;
      r[t || "#" + s] = i;
    }
    if (!i) {
      const e = Object.entries(r).map(
        ([e, t]) =>
          `adapter ${e} ` +
          (!1 === t
            ? "is not supported by the environment"
            : "is not available in the build"),
      );
      let a = t
        ? e.length > 1
          ? "since :\n" + e.map(d_).join("\n")
          : " " + d_(e[0])
        : "as no adapter specified";
      throw new np(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT",
      );
    }
    return i;
  };
function $_(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new qp(null, e);
}
function __(e) {
  ($_(e),
    (e.headers = xp.from(e.headers)),
    (e.data = Yp.call(e, e.transformRequest)),
    -1 !== ["post", "put", "patch"].indexOf(e.method) &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1));
  return p_(e.adapter || vp.adapter)(e).then(
    function (t) {
      return (
        $_(e),
        (t.data = Yp.call(e, e.transformResponse, t)),
        (t.headers = xp.from(t.headers)),
        t
      );
    },
    function (t) {
      return (
        jp(t) ||
          ($_(e),
          t &&
            t.response &&
            ((t.response.data = Yp.call(e, e.transformResponse, t.response)),
            (t.response.headers = xp.from(t.response.headers)))),
        Promise.reject(t)
      );
    },
  );
}
var I_ = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    I_[e] = function (a) {
      return typeof a === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
var A_ = {};
((I_.transitional = function (e, t, a) {
  function i(e, t) {
    return (
      "[Axios v1.8.2] Transitional option '" + e + "'" + t + (a ? ". " + a : "")
    );
  }
  return (a, r, s) => {
    if (!1 === e)
      throw new np(
        i(r, " has been removed" + (t ? " in " + t : "")),
        np.ERR_DEPRECATED,
      );
    return (
      t &&
        !A_[r] &&
        ((A_[r] = !0),
        console.warn(
          i(
            r,
            " has been deprecated since v" +
              t +
              " and will be removed in the near future",
          ),
        )),
      !e || e(a, r, s)
    );
  };
}),
  (I_.spelling = function (e) {
    return (t, a) => (console.warn(`${a} is likely a misspelling of ${e}`), !0);
  }));
var f_ = {
    assertOptions: function (e, t, a) {
      if ("object" != typeof e)
        throw new np("options must be an object", np.ERR_BAD_OPTION_VALUE);
      const i = Object.keys(e);
      let r = i.length;
      for (; r-- > 0;) {
        const s = i[r],
          o = t[s];
        if (o) {
          const t = e[s],
            a = void 0 === t || o(t, s, e);
          if (!0 !== a)
            throw new np(
              "option " + s + " must be " + a,
              np.ERR_BAD_OPTION_VALUE,
            );
        } else if (!0 !== a)
          throw new np("Unknown option " + s, np.ERR_BAD_OPTION);
      }
    },
    validators: I_,
  },
  m_ = f_.validators,
  g_ = class {
    constructor(e) {
      ((this.defaults = e),
        (this.interceptors = { request: new Cp(), response: new Cp() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(t)
            : (t = new Error());
          const a = t.stack ? t.stack.replace(/^.+\n/, "") : "";
          try {
            e.stack
              ? a &&
                !String(e.stack).endsWith(a.replace(/^.+\n.+\n/, "")) &&
                (e.stack += "\n" + a)
              : (e.stack = a);
          } catch (e) {}
        }
        throw e;
      }
    }
    _request(e, t) {
      ("string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = V$(this.defaults, t)));
      const { transitional: a, paramsSerializer: i, headers: r } = t;
      (void 0 !== a &&
        f_.assertOptions(
          a,
          {
            silentJSONParsing: m_.transitional(m_.boolean),
            forcedJSONParsing: m_.transitional(m_.boolean),
            clarifyTimeoutError: m_.transitional(m_.boolean),
          },
          !1,
        ),
        null != i &&
          (ip.isFunction(i)
            ? (t.paramsSerializer = { serialize: i })
            : f_.assertOptions(
                i,
                { encode: m_.function, serialize: m_.function },
                !0,
              )),
        void 0 !== t.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls
            ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (t.allowAbsoluteUrls = !0)),
        f_.assertOptions(
          t,
          {
            baseUrl: m_.spelling("baseURL"),
            withXsrfToken: m_.spelling("withXSRFToken"),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase()));
      let s = r && ip.merge(r.common, r[t.method]);
      (r &&
        ip.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete r[e];
          },
        ),
        (t.headers = xp.concat(s, r)));
      const o = [];
      let n = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((n = n && e.synchronous), o.unshift(e.fulfilled, e.rejected));
      });
      const c = [];
      let l;
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected);
      });
      let d,
        u = 0;
      if (!n) {
        const e = [__.bind(this), void 0];
        for (
          e.unshift.apply(e, o),
            e.push.apply(e, c),
            d = e.length,
            l = Promise.resolve(t);
          u < d;
        )
          l = l.then(e[u++], e[u++]);
        return l;
      }
      d = o.length;
      let p = t;
      for (u = 0; u < d;) {
        const e = o[u++],
          t = o[u++];
        try {
          p = e(p);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        l = __.call(this, p);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
      return l;
    }
    getUri(e) {
      return gp(
        Xp((e = V$(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      );
    }
  };
(ip.forEach(["delete", "get", "head", "options"], function (e) {
  g_.prototype[e] = function (t, a) {
    return this.request(
      V$(a || {}, { method: e, url: t, data: (a || {}).data }),
    );
  };
}),
  ip.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (a, i, r) {
        return this.request(
          V$(r || {}, {
            method: e,
            headers: t ? { "Content-Type": "multipart/form-data" } : {},
            url: a,
            data: i,
          }),
        );
      };
    }
    ((g_.prototype[e] = t()), (g_.prototype[e + "Form"] = t(!0)));
  }));
var C_ = g_,
  b_ = class e {
    constructor(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const a = this;
      (this.promise.then((e) => {
        if (!a._listeners) return;
        let t = a._listeners.length;
        for (; t-- > 0;) a._listeners[t](e);
        a._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const i = new Promise((e) => {
            (a.subscribe(e), (t = e));
          }).then(e);
          return (
            (i.cancel = function () {
              a.unsubscribe(t);
            }),
            i
          );
        }),
        e(function (e, i, r) {
          a.reason || ((a.reason = new qp(e, i, r)), t(a.reason));
        }));
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let t;
      return {
        token: new e(function (e) {
          t = e;
        }),
        cancel: t,
      };
    }
  };
var E_ = {
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
Object.entries(E_).forEach(([e, t]) => {
  E_[t] = e;
});
var T_ = E_;
var h_ = (function e(t) {
  const a = new C_(t),
    i = Eu(C_.prototype.request, a);
  return (
    ip.extend(i, C_.prototype, a, { allOwnKeys: !0 }),
    ip.extend(i, a, null, { allOwnKeys: !0 }),
    (i.create = function (a) {
      return e(V$(t, a));
    }),
    i
  );
})(vp);
((h_.Axios = C_),
  (h_.CanceledError = qp),
  (h_.CancelToken = b_),
  (h_.isCancel = jp),
  (h_.VERSION = i$),
  (h_.toFormData = $p),
  (h_.AxiosError = np),
  (h_.Cancel = h_.CanceledError),
  (h_.all = function (e) {
    return Promise.all(e);
  }),
  (h_.spread = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  }),
  (h_.isAxiosError = function (e) {
    return ip.isObject(e) && !0 === e.isAxiosError;
  }),
  (h_.mergeConfig = V$),
  (h_.AxiosHeaders = xp),
  (h_.formToJSON = (e) => wp(ip.isHTMLForm(e) ? new FormData(e) : e)),
  (h_.getAdapter = p_),
  (h_.HttpStatusCode = T_),
  (h_.default = h_));
var O_ = h_,
  {
    Axios: y_,
    AxiosError: S_,
    CanceledError: L_,
    isCancel: N_,
    CancelToken: R_,
    VERSION: D_,
    all: P_,
    Cancel: M_,
    isAxiosError: U_,
    spread: w_,
    toFormData: G_,
    AxiosHeaders: v_,
    HttpStatusCode: B_,
    formToJSON: k_,
    getAdapter: H_,
    mergeConfig: Q_,
  } = O_,
  K_ = {};
I(K_, {
  asyncGuard: () => BI,
  cheapLoadUserData: () => HI,
  deleteContractSession: () => qI,
  getContractSession: () => jI,
  getExternalUserData: () => xI,
  getUserData: () => kI,
  loadUserData: () => QI,
  setupFileStructure: () => WI,
  writeContractSession: () => VI,
  writeExternalUserData: () => YI,
  writeNewUserData: () => FI,
  writeUserData: () => KI,
});
var F_ = require("path"),
  x_ = {};
I(x_, { deserializeSession: () => q_, serializeSession: () => V_ });
var Y_ = [
    "targetKills",
    "npcKills",
    "bodiesHidden",
    "pacifications",
    "disguisesUsed",
    "disguisesRuined",
    "spottedBy",
    "witnesses",
    "bodiesFoundBy",
    "killsNoticedBy",
    "completedObjectives",
    "kills",
    "markedTargets",
    "failedObjectives",
  ],
  j_ = ["objectiveStates", "objectiveContexts", "objectives"];
function V_(e) {
  const t = {};
  for (const a of Object.keys(e))
    e[a] instanceof Map
      ? (t[a] = Array.from(e[a].entries()))
      : e[a] instanceof Set
        ? (t[a] = Array.from(e[a]))
        : (t[a] = e[a]);
  return t;
}
function q_(e) {
  const t = {};
  for (const a of Object.keys(e)) t[a] = e[a];
  for (const e of Y_) t[e] = new Set(t[e]);
  for (const e of j_) t[e] && (t[e] = new Map(t[e]));
  return t;
}
var W_ = require("fs/promises"),
  X_ = f(require("node:path"), 1),
  z_ = f(require("node:fs"), 1),
  J_ = require("node:util"),
  Z_ = (e, t) =>
    function (...a) {
      return e.apply(void 0, a).catch(t);
    },
  eI = (e, t) =>
    function (...a) {
      try {
        return e.apply(void 0, a);
      } catch (e) {
        return t(e);
      }
    },
  tI = f(require("node:process"), 1),
  aI = !!tI.default.getuid && !tI.default.getuid(),
  iI = () => {},
  rI = {
    isChangeErrorOk: (e) => {
      if (!rI.isNodeError(e)) return !1;
      const { code: t } = e;
      return "ENOSYS" === t || !(aI || ("EINVAL" !== t && "EPERM" !== t));
    },
    isNodeError: (e) => e instanceof Error,
    isRetriableError: (e) => {
      if (!rI.isNodeError(e)) return !1;
      const { code: t } = e;
      return (
        "EMFILE" === t ||
        "ENFILE" === t ||
        "EAGAIN" === t ||
        "EBUSY" === t ||
        "EACCESS" === t ||
        "EACCES" === t ||
        "EACCS" === t ||
        "EPERM" === t
      );
    },
    onChangeError: (e) => {
      if (!rI.isNodeError(e)) throw e;
      if (!rI.isChangeErrorOk(e)) throw e;
    },
  },
  sI = rI,
  oI = new (class {
    constructor() {
      ((this.interval = 25),
        (this.intervalId = void 0),
        (this.limit = 1e4),
        (this.queueActive = new Set()),
        (this.queueWaiting = new Set()),
        (this.init = () => {
          this.intervalId ||
            (this.intervalId = setInterval(this.tick, this.interval));
        }),
        (this.reset = () => {
          this.intervalId &&
            (clearInterval(this.intervalId), delete this.intervalId);
        }),
        (this.add = (e) => {
          (this.queueWaiting.add(e),
            this.queueActive.size < this.limit / 2 ? this.tick() : this.init());
        }),
        (this.remove = (e) => {
          (this.queueWaiting.delete(e), this.queueActive.delete(e));
        }),
        (this.schedule = () =>
          new Promise((e) => {
            const t = () => this.remove(a),
              a = () => e(t);
            this.add(a);
          })),
        (this.tick = () => {
          if (!(this.queueActive.size >= this.limit)) {
            if (!this.queueWaiting.size) return this.reset();
            for (const e of this.queueWaiting) {
              if (this.queueActive.size >= this.limit) break;
              (this.queueWaiting.delete(e), this.queueActive.add(e), e());
            }
          }
        }));
    }
  })(),
  nI = (e, t) =>
    function (a) {
      return function i(...r) {
        return oI.schedule().then((s) =>
          e.apply(void 0, r).then(
            (e) => (s(), e),
            (e) => {
              if ((s(), Date.now() >= a)) throw e;
              if (t(e)) {
                const e = Math.round(100 * Math.random());
                return new Promise((t) => setTimeout(t, e)).then(() =>
                  i.apply(void 0, r),
                );
              }
              throw e;
            },
          ),
        );
      };
    },
  cI = (e, t) =>
    function (a) {
      return function i(...r) {
        try {
          return e.apply(void 0, r);
        } catch (e) {
          if (Date.now() > a) throw e;
          if (t(e)) return i.apply(void 0, r);
          throw e;
        }
      };
    },
  lI = {
    attempt: {
      chmod: Z_((0, J_.promisify)(z_.default.chmod), sI.onChangeError),
      chown: Z_((0, J_.promisify)(z_.default.chown), sI.onChangeError),
      close: Z_((0, J_.promisify)(z_.default.close), iI),
      fsync: Z_((0, J_.promisify)(z_.default.fsync), iI),
      mkdir: Z_((0, J_.promisify)(z_.default.mkdir), iI),
      realpath: Z_((0, J_.promisify)(z_.default.realpath), iI),
      stat: Z_((0, J_.promisify)(z_.default.stat), iI),
      unlink: Z_((0, J_.promisify)(z_.default.unlink), iI),
      chmodSync: eI(z_.default.chmodSync, sI.onChangeError),
      chownSync: eI(z_.default.chownSync, sI.onChangeError),
      closeSync: eI(z_.default.closeSync, iI),
      existsSync: eI(z_.default.existsSync, iI),
      fsyncSync: eI(z_.default.fsync, iI),
      mkdirSync: eI(z_.default.mkdirSync, iI),
      realpathSync: eI(z_.default.realpathSync, iI),
      statSync: eI(z_.default.statSync, iI),
      unlinkSync: eI(z_.default.unlinkSync, iI),
    },
    retry: {
      close: nI((0, J_.promisify)(z_.default.close), sI.isRetriableError),
      fsync: nI((0, J_.promisify)(z_.default.fsync), sI.isRetriableError),
      open: nI((0, J_.promisify)(z_.default.open), sI.isRetriableError),
      readFile: nI((0, J_.promisify)(z_.default.readFile), sI.isRetriableError),
      rename: nI((0, J_.promisify)(z_.default.rename), sI.isRetriableError),
      stat: nI((0, J_.promisify)(z_.default.stat), sI.isRetriableError),
      write: nI((0, J_.promisify)(z_.default.write), sI.isRetriableError),
      writeFile: nI(
        (0, J_.promisify)(z_.default.writeFile),
        sI.isRetriableError,
      ),
      closeSync: cI(z_.default.closeSync, sI.isRetriableError),
      fsyncSync: cI(z_.default.fsyncSync, sI.isRetriableError),
      openSync: cI(z_.default.openSync, sI.isRetriableError),
      readFileSync: cI(z_.default.readFileSync, sI.isRetriableError),
      renameSync: cI(z_.default.renameSync, sI.isRetriableError),
      statSync: cI(z_.default.statSync, sI.isRetriableError),
      writeSync: cI(z_.default.writeSync, sI.isRetriableError),
      writeFileSync: cI(z_.default.writeFileSync, sI.isRetriableError),
    },
  },
  dI = f(require("node:os"), 1),
  uI = f(require("node:process"), 1),
  pI = {},
  $I = {},
  _I = dI.default.userInfo().uid,
  II = dI.default.userInfo().gid,
  AI = !!uI.default.getuid,
  fI =
    (!!uI.default.getuid && uI.default.getuid(), (e) => "string" == typeof e),
  mI = (e) => void 0 === e,
  gI = {},
  CI = {
    next: (e) => {
      const t = gI[e];
      if (!t) return;
      t.shift();
      const a = t[0];
      a ? a(() => CI.next(e)) : delete gI[e];
    },
    schedule: (e) =>
      new Promise((t) => {
        let a = gI[e];
        (a || (a = gI[e] = []), a.push(t), a.length > 1 || t(() => CI.next(e)));
      }),
  },
  bI = CI,
  EI = f(require("node:path"), 1),
  TI = f(require("node:process"), 1),
  hI = f(require("node:process"), 1),
  OI = "linux" === hI.default.platform,
  yI = "win32" === hI.default.platform,
  SI = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
(yI ||
  SI.push(
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT",
  ),
  OI && SI.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED"));
var LI = SI,
  NI = new (class {
    constructor() {
      ((this.callbacks = new Set()),
        (this.exited = !1),
        (this.exit = (e) => {
          if (!this.exited) {
            this.exited = !0;
            for (const e of this.callbacks) e();
            e &&
              (yI && "SIGINT" !== e && "SIGTERM" !== e && "SIGKILL" !== e
                ? TI.default.kill(TI.default.pid, "SIGTERM")
                : TI.default.kill(TI.default.pid, e));
          }
        }),
        (this.hook = () => {
          TI.default.once("exit", () => this.exit());
          for (const e of LI)
            try {
              TI.default.once(e, () => this.exit(e));
            } catch {}
        }),
        (this.register = (e) => (
          this.callbacks.add(e),
          () => {
            this.callbacks.delete(e);
          }
        )),
        this.hook());
    }
  })(),
  RI = NI.register,
  DI = {
    store: {},
    create: (e) => {
      const t =
        `000000${Math.floor(16777215 * Math.random()).toString(16)}`.slice(-6);
      return `${e}${`.tmp-${Date.now().toString().slice(-10)}${t}`}`;
    },
    get: (e, t, a = !0) => {
      const i = DI.truncate(t(e));
      if (i in DI.store) return DI.get(e, t, a);
      DI.store[i] = a;
      return [i, () => delete DI.store[i]];
    },
    purge: (e) => {
      DI.store[e] && (delete DI.store[e], lI.attempt.unlink(e));
    },
    purgeSync: (e) => {
      DI.store[e] && (delete DI.store[e], lI.attempt.unlinkSync(e));
    },
    purgeSyncAll: () => {
      for (const e in DI.store) DI.purgeSync(e);
    },
    truncate: (e) => {
      const t = EI.default.basename(e);
      if (t.length <= 128) return e;
      const a = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(
        t,
      );
      if (!a) return e;
      const i = t.length - 128;
      return `${e.slice(0, -t.length)}${a[1]}${a[2].slice(0, -i)}${a[3]}`;
    },
  };
RI(DI.purgeSyncAll);
var PI = DI;
function MI(e, t = pI) {
  if (fI(t)) return MI(e, { encoding: t });
  const a = Date.now() + ((t.timeout ?? 7500) || -1);
  return lI.retry.readFile(a)(e, t);
}
function UI(e, t, a, i) {
  if (((e) => "function" == typeof e)(a)) return UI(e, t, $I, a);
  const r = wI(e, t, a);
  return (i && r.then(i, i), r);
}
async function wI(e, t, a = $I) {
  if (fI(a)) return wI(e, t, { encoding: a });
  const i = Date.now() + ((a.timeout ?? 7500) || -1);
  let r = null,
    s = null,
    o = null,
    n = null,
    c = null;
  try {
    (a.schedule && (r = await a.schedule(e)), (s = await bI.schedule(e)));
    const l = await lI.attempt.realpath(e),
      d = !!l;
    ((e = l || e),
      ([n, o] = PI.get(e, a.tmpCreate || PI.create, !(!1 === a.tmpPurge))));
    const u = AI && mI(a.chown),
      p = mI(a.mode);
    if (d && (u || p)) {
      const t = await lI.attempt.stat(e);
      t &&
        ((a = { ...a }),
        u && (a.chown = { uid: t.uid, gid: t.gid }),
        p && (a.mode = t.mode));
    }
    if (!d) {
      const t = X_.default.dirname(e);
      await lI.attempt.mkdir(t, { mode: 511, recursive: !0 });
    }
    ((c = await lI.retry.open(i)(n, "w", a.mode || 438)),
      a.tmpCreated && a.tmpCreated(n),
      fI(t)
        ? await lI.retry.write(i)(c, t, 0, a.encoding || "utf8")
        : mI(t) || (await lI.retry.write(i)(c, t, 0, t.length, 0)),
      !1 !== a.fsync &&
        (!1 !== a.fsyncWait ? await lI.retry.fsync(i)(c) : lI.attempt.fsync(c)),
      await lI.retry.close(i)(c),
      (c = null),
      !a.chown ||
        (a.chown.uid === _I && a.chown.gid === II) ||
        (await lI.attempt.chown(n, a.chown.uid, a.chown.gid)),
      a.mode && 438 !== a.mode && (await lI.attempt.chmod(n, a.mode)));
    try {
      await lI.retry.rename(i)(n, e);
    } catch (t) {
      if (!((e) => e instanceof Error && "code" in e)(t)) throw t;
      if ("ENAMETOOLONG" !== t.code) throw t;
      await lI.retry.rename(i)(n, PI.truncate(e));
    }
    (o(), (n = null));
  } finally {
    (c && (await lI.attempt.close(c)), n && PI.purge(n), r && r(), s && s());
  }
}
var GI,
  vI = require("fs");
GI = new WeakMap();
var BI = new (class {
  constructor() {
    ((this.userData = new Map()),
      (this.dirtyProfiles = new Set()),
      (this.tasks = new Map()),
      ((e, t, a) => {
        t.has(e)
          ? $("Cannot add the same private member more than once")
          : t instanceof WeakSet
            ? t.add(e)
            : t.set(e, a);
      })(this, GI, !1));
  }
  getFs() {
    return {
      writeFile: UI,
      readFile: MI,
      unlink: W_.unlink,
      mkdir: W_.mkdir,
      readdir: W_.readdir,
      exists: (e) => Promise.resolve((0, vI.existsSync)(e)),
    };
  }
  getProfile(e) {
    return this.userData.get(e);
  }
  addLoadedProfile(e, t) {
    if (!this.userData.has(e) && !this.tasks.has(e)) {
      const t = setInterval(() => {
        this.dirtyProfiles.has(e) &&
          !((e, t, a) => (
            g(e, t, "read from private field"),
            a ? a.call(e) : t.get(e)
          ))(this, GI) &&
          this.save(e);
      }, 3e3);
      this.tasks.set(e, t.unref());
    }
    (this.userData.set(e, t), this.dirtyProfiles.delete(e));
  }
  save(e) {
    (this.dirtyProfiles.delete(e),
      this.write(e)
        .then(() => {})
        .catch((t) => {
          Ad("error", `Failed to write user profile ${e}: ${t}`);
        }));
  }
  markDirty(e) {
    this.dirtyProfiles.add(e);
  }
  async write(e) {
    let t;
    const [a, i] = e.split(".");
    ((t = ["scpc", "h1", "h2"].includes(i)
      ? (0, F_.join)("userdata", i, "users", `${a}.json`)
      : (0, F_.join)("userdata", "users", `${a}.json`)),
      await this.getFs().writeFile(t, JSON.stringify(this.getProfile(e))));
  }
  async forceFlush() {
    const e = this.tasks.keys();
    C(this, GI, !0);
    for (const t of e) (this.dirtyProfiles.delete(t), await this.write(t));
    C(this, GI, !1);
  }
  unloadAll() {
    for (const e of this.tasks.keys())
      (clearInterval(this.tasks.get(e)),
        this.dirtyProfiles.delete(e),
        this.userData.delete(e));
  }
})();
function kI(e, t) {
  const a = BI.getProfile(`${e}.${t}`);
  return (
    0 === a?.Extensions?.progression?.PlayerProfileXP?.ProfileLevel &&
      (a.Extensions.progression.PlayerProfileXP.ProfileLevel = 1),
    a
  );
}
async function HI(e, t) {
  if (!e || !t) return;
  if (!BI.getProfile(`${e}.${t}`))
    try {
      await QI(e, t);
    } catch (e) {
      (Ad("debug", "Unable to load profile information."), Ad("debug", e));
    }
}
async function QI(e, t) {
  let a;
  a = ["scpc", "h1", "h2"].includes(t)
    ? (0, F_.join)("userdata", t, "users", `${e}.json`)
    : (0, F_.join)("userdata", "users", `${e}.json`);
  const i = RE(JSON.parse((await BI.getFs().readFile(a)).toString()), t, a);
  return (BI.addLoadedProfile(`${e}.${t}`, i), i);
}
function KI(e, t) {
  BI.markDirty(`${e}.${t}`);
}
function FI(e, t, a) {
  (BI.addLoadedProfile(`${e}.${a}`, t), BI.markDirty(`${e}.${a}`));
}
async function xI(e, t, a) {
  const i = BI.getFs();
  return ["scpc", "h1", "h2"].includes(a)
    ? (await i.readFile((0, F_.join)("userdata", a, t, `${e}.json`))).toString()
    : (await i.readFile((0, F_.join)("userdata", t, `${e}.json`))).toString();
}
async function YI(e, t, a, i) {
  const r = BI.getFs();
  return ["scpc", "h1", "h2"].includes(i)
    ? await r.writeFile((0, F_.join)("userdata", i, t, `${e}.json`), a)
    : await r.writeFile((0, F_.join)("userdata", t, `${e}.json`), a);
}
async function jI(e) {
  const t = BI.getFs(),
    a = (await t.readdir("contractSessions")).filter((t) =>
      t.endsWith(`_${e}.json`),
    );
  if (0 === a.length) throw new Error(`No session saved with identifier ${e}`);
  return q_(
    JSON.parse(
      (await t.readFile((0, F_.join)("contractSessions", a[0]))).toString(),
    ),
  );
}
async function VI(e, t) {
  const a = BI.getFs();
  return await a.writeFile(
    (0, F_.join)("contractSessions", `${e}.json`),
    JSON.stringify(V_(t)),
  );
}
async function qI(e) {
  const t = BI.getFs();
  return await t.unlink((0, F_.join)("contractSessions", `${e}.json`));
}
async function WI(e = F_.join) {
  const t = BI.getFs();
  for (const a of [
    "contractSessions",
    "plugins",
    "userdata",
    "contracts",
    e("userdata", "epicids"),
    e("userdata", "steamids"),
    e("userdata", "users"),
    e("userdata", "h1", "steamids"),
    e("userdata", "h1", "epicids"),
    e("userdata", "h1", "users"),
    e("userdata", "h2", "steamids"),
    e("userdata", "h2", "users"),
    e("userdata", "scpc", "users"),
    e("userdata", "scpc", "steamids"),
    e("images", "actors"),
    e("images", "contracts"),
    e("images", "contracts", "elusive"),
    e("images", "contracts", "escalation"),
    e("images", "contracts", "featured"),
    e("images", "unlockables_override"),
  ])
    (await t.exists(a)) ||
      (Ad("debug", `Creating missing directory ${a}`),
      await t.mkdir(a, { recursive: !0 }));
}
var XI = [
    "0a73eaedcac84bd28b567dbec764c5cb",
    "81aecb49a60b47478e61e1cbd68d63c5",
  ],
  zI = [
    "06d4d61bbb774ca99c1661bee04fbde0",
    "2e4ad3e9aa9b4dcfa709b3f3b44cbf94",
    "a9b1afdd05584441aeec75ba230b2e54",
    "66246e4364134f4689da72e9c6731687",
    "4216cdf59dbc4f19af227be076520202",
    "8a690003855745e884d5040c6bc9ede8",
    "bc610b36c75442299edcbe99f6f0fb60",
    "5d06a6c6af9b4875b3530d5328f61287",
    "0b59243cb8aa420691b66be1ecbe68c0",
    "894d1e6771044f48a8fdde934b8e443a",
    "e698e1a4b63947b0bc9349a5ae2dc015",
    "391d08a543dc43a083eb50246916a291",
    "afa4b921503f43339c360d4b53910791",
    "6408de14f7dc46b9a33adcf6cbc4d159",
    "b4e2e682cecd42b3a7017ee4838b4593",
    "1dea1e39a8044a69b4020845afb4bd97",
    "feeac4b521734f22ae99e8ac55a5f896",
    "0e8632b4cdfb415e94291d97d727b98d",
    "3f9adc216dde44dda5e829f11740a0a2",
    "aece009ff59441c0b526f8aa69e24cfb",
    "dfe5aeb89976450ba1e0e2c208b63d33",
    "30107bff80024d1ab291f9cd3bac9fac",
    "9e936ed2507a473db6f53ad24d2da587",
    "0403062df0d347619c8dcf043c65c02e",
    "a3509775467d4d6a8a7adffe518dc204",
    "84a1a6fda4fb48afbb78ee9b2addd475",
    "08d2bc4d20754191b6c488541d2b4fa1",
    "a1e9a63fa4f3425aa66b9b8fa3c9cc35",
    "28455871cd0d4ffab52f557cc012ea5e",
    "9220c020262f420da06eb46a4b1ce86f",
    "6cdf07da030d4f66acd50eaf3cd234c7",
    "f04198e0ffcf49079b5ec77bb6b66891",
    "70a9afcc8de84b6ab0f2b45b2018559b",
    "256eeeb3d8044aa1840e1606d268e0b2",
    "04cb1b3e5b424308be25236f6bc1b2fb",
    "0047ddcd5e6846e881f1037c1416e3d9",
    "b135c766d25948c39d7dd316dbc4db53",
  ],
  JI = [
    "439870",
    "439890",
    "440930",
    "440940",
    "440960",
    "440961",
    "440962",
    "440970",
    "440971",
    "440972",
    "505180",
    "505200",
    "505201",
    "588660",
    "588780",
    "664270",
    "725350",
    "725351",
    "725352",
    "725353",
    "737780",
  ],
  ZI = [
    "863550",
    "950540",
    "950550",
    "950551",
    "950552",
    "950553",
    "950554",
    "950555",
    "950556",
    "950557",
    "950558",
    "950559",
    "950560",
    "950561",
    "950562",
    "953090",
    "953091",
    "953092",
    "953093",
    "953094",
    "953095",
    "953096",
    "957690",
    "957691",
    "957692",
    "957693",
    "957694",
    "957695",
    "957696",
    "957697",
    "957698",
    "957730",
    "957731",
    "957733",
    "957735",
    "960831",
    "960832",
    "972340",
    "977941",
  ],
  eA = [
    "4328240",
    "4097630",
    "3957470",
    "3711140",
    "3254350",
    "3110360",
    "2973650",
    "2828470",
    "2475260",
    "2184791",
    "2184790",
    "1843460",
    "1829605",
    "1829604",
    "1829603",
    "1829602",
    "1829601",
    "1829600",
    "1829596",
    "1829595",
    "1829594",
    "1829593",
    "1829592",
    "1829591",
    "1829590",
    "1829587",
    "1829586",
    "1829585",
    "1829584",
    "1829583",
    "1829582",
    "1829581",
    "1829580",
  ],
  tA = "236870",
  aA = "3c06b15a8a2845c0b725d4f952fe00aa",
  iA = "783781",
  rA = "863550",
  sA = "ed55aa5edc5941de92fd7f64de415793",
  oA = "1659040",
  nA = [aA, sA].concat(XI).concat(zI),
  cA = [tA, iA, rA, oA].concat(JI).concat(ZI).concat(eA);
function lA(e, t) {
  Ad("debug", `Platform issuer: ${e.body.issuerId}`);
  const a = kI(e.jwt.unique_name, e.gameVersion).Extensions.entP;
  t.json(a);
}
async function dA(e, t, a) {
  const i = new Set(),
    r = await (async function (i) {
      const r = { headers: {} };
      r.headers.Authorization = `bearer ${a}`;
      const s = `https://api.epicgames.dev/epic/ecom/v1/platforms/EPIC/identities/${t}/ownership?nsCatalogItemId=${i.map((t) => `${e}:${t}`).join("&nsCatalogItemId=")}`;
      let o = [];
      try {
        o = (await O_(s, r)).data;
      } catch (e) {
        Ad(
          "error",
          e instanceof S_
            ? `Failed to get entitlements from Epic: got ${e.response?.status} ${e.response?.statusText}.`
            : `Failed to get entitlements from Epic: ${JSON.stringify(e)}.`,
        );
      }
      return o;
    })(zI);
  if (r) for (const e of r) e.owned && i.add(e.itemId);
  return Array.from(i);
}
var uA = {};
I(uA, {
  Controller: () => Kb,
  contractIdToHitObject: () => xb,
  controller: () => jb,
  featuredContractGroups: () => Gb,
  isPlugin: () => Fb,
  preserveContracts: () => Yb,
  validateMission: () => kb,
});
var pA = require("fs"),
  $A = require("fs/promises"),
  _A = require("path"),
  IA = {};
I(IA, {
  complications: () => BA,
  generateCompletionData: () => yA,
  generateUserCentric: () => SA,
  getParentLocationByName: () => OA,
  getSubLocationByName: () => hA,
  getSubLocationFromContract: () => TA,
  mapObjectives: () => LA,
});
var AA = {};
I(AA, {
  escalationTypes: () => fA,
  getLevelCount: () => CA,
  getPlayEscalationInfo: () => bA,
  getUserEscalationProgress: () => mA,
  resetUserEscalationProgress: () => gA,
});
var fA = ["escalation", "arcade"];
function mA(e, t) {
  return (
    (e.Extensions.PeacockEscalations ??= { [t]: 1 }),
    e.Extensions.PeacockEscalations[t]
      ? e.Extensions.PeacockEscalations[t]
      : ((e.Extensions.PeacockEscalations[t] = 1), 1)
  );
}
function gA(e, t) {
  ((e.Extensions.PeacockEscalations ??= {}),
    (e.Extensions.PeacockEscalations[t] = 1),
    e.Extensions.PeacockCompletedEscalations?.includes(t) &&
      (e.Extensions.PeacockCompletedEscalations =
        e.Extensions.PeacockCompletedEscalations.filter((e) => e !== t)));
}
function CA(e) {
  return e?.Metadata.GroupDefinition?.Order.length ?? 0;
}
function bA(e, t, a) {
  if (!t) return {};
  const i = kI(e, a),
    r = mA(i, t),
    s = jb.escalationMappings.get(t);
  if (!s) return {};
  const o = CA(jb.resolveContract(t, a));
  let n = "00000000-0000-0000-0000-000000000000";
  return (
    r < o && (n = s[r + 1]),
    Ad("debug", `Get Play-EscalationInfo - group: ${t} prog: ${r} next: ${n}`),
    {
      InGroup: t,
      NextContractId: n,
      GroupData: {
        Level: r,
        TotalLevels: o,
        Completed: i.Extensions.PeacockCompletedEscalations?.includes(t) || !1,
        FirstContractId: s[1],
      },
    }
  );
}
var EA = f(require("assert"));
function TA(e, t) {
  return (
    "h1" === t &&
      e.Metadata.Location.includes("LOCATION_ICA_FACILITY") &&
      (e.Metadata.Location = "LOCATION_ICA_FACILITY"),
    hA(e.Metadata.Location, t)
  );
}
function hA(e, t) {
  return YE(Kd("LocationsData", t, !1).children[e]);
}
function OA(e, t) {
  return YE(Kd("LocationsData", t, !1).parents[e]);
}
function yA(e, t, a, i = "mission", r) {
  const s = hA(e, a);
  let o;
  if ("h1" === a) {
    o = kI(t, a).Extensions.gamepersistentdata.menudata.difficulty.destinations[
      s ? s.Properties?.ParentLocation || "" : e
    ];
  }
  const n = s ? s.Properties?.ParentLocation : e;
  EA.default.ok(n, `Location ID is undefined for ${e} in ${a}!`);
  const c = jb.masteryService.getLocationCompletion(n, e, a, t, i, r || o);
  return (
    c || {
      Level: 1,
      MaxLevel: 1,
      XP: 0,
      PreviouslySeenXp: 0,
      Completion: 1,
      XpLeft: 0,
      Id: n,
      SubLocationId: e,
      HideProgression: !0,
      IsLocationProgression: !0,
      Name: null,
    }
  );
}
function SA(e, t, a) {
  if (!e) return;
  const i = kI(t, a),
    r = TA(e, a);
  if (!r)
    return void Ad("debug", `Missing ${e.Metadata.Location} in ${a} config!`);
  ((r.DisplayNameLocKey = `UI_${r.Id}_NAME`),
    ("h1" !== a && "h2" !== a) ||
      (e.Metadata.Entitlements = Cu(a, e.Metadata.Entitlements || [])));
  const s = i.Extensions?.PeacockPlayedContracts,
    o = e.Metadata.Id,
    n = yA(e.Metadata.Location, t, a);
  let c;
  s[o]?.LastPlayedAt && (c = new Date(s[o].LastPlayedAt).toISOString());
  const l = {
    Contract: e,
    Data: {
      IsLocked: r?.Properties?.IsLocked || !1,
      LockedReason: "",
      LocationLevel: n.Level,
      LocationMaxLevel: n.MaxLevel,
      LocationCompletion: n.Completion,
      LocationXpLeft: n.XpLeft,
      LocationHideProgression: n.HideProgression,
      ElusiveContractState: "",
      IsFeatured: !1,
      LastPlayedAt: c,
      PlaylistData: {
        IsAdded: i.Extensions?.PeacockFavoriteContracts?.includes(o),
        AddedTime: "0001-01-01T00:00:00Z",
      },
      Completed: void 0 !== s[o] && s[o]?.Completed,
      LocationId: r.Id,
      ParentLocationId: r.Properties.ParentLocation,
      CompletionData: n,
      DlcName: r.Properties.DlcName,
      DlcImage: r.Properties.DlcImage,
    },
  };
  if (fA.includes(e.Metadata.Type)) {
    const t = e.Metadata.InGroup ?? e.Metadata.Id,
      r = mA(i, t);
    (Ad("debug", `Get EscalationUCProps - group: ${t} prog: ${r}`),
      delete l.Data.Completed,
      (l.Data.EscalationCompletedLevels = r - 1),
      (l.Data.EscalationTotalLevels = CA(jb.resolveContract(t, a))),
      (l.Data.EscalationCompleted =
        i.Extensions.PeacockCompletedEscalations.includes(t)),
      e.Metadata.InGroup && (l.Data.InGroup = t));
  }
  return l;
}
function LA(e, t, a) {
  const i = new Map(),
    r = [];
  if (t && t.length > 0) {
    const e = {
      ...Qd("GameChangerProperties", !0),
      ...Qd("EvergreenGameChangerProperties", !0),
      ...Qd("PeacockGameChangerProperties", !0),
    };
    for (const a of t) {
      const t = e[a];
      if (t && !t.ShowBasedOnObjectives)
        if (t.IsHidden) {
          if (1 === t.Objectives?.length) {
            const e = t.Objectives[0];
            ((e.Id = a), r.push(e));
          }
        } else
          (t.ObjectivesCategory ||
            (t.ObjectivesCategory = (() => {
              let e;
              for (e of t.Objectives)
                if ("primary" === e.Category) return "primary";
              return "secondary";
            })()),
            i.set(a, {
              Type: "gamechanger",
              Properties: {
                Id: a,
                Name: t.Name,
                Description: t.Description,
                LongDescription:
                  void 0 === t.LongDescription
                    ? t.Description
                    : t.LongDescription,
                TileImage: t.TileImage,
                Icon: t.Icon || "",
                ObjectivesCategory: t.ObjectivesCategory,
              },
            }));
    }
  }
  for (const t of e.concat(r))
    if (!(
      t.Activation ||
      !1 === t.OnActive?.IfInProgress?.Visible ||
      (!1 === t.OnActive?.IfCompleted?.Visible &&
        "Success" === t.Definition?.States?.Start?.["-"]?.Transition)
    ))
      if (
        t.SuccessEvent &&
        "Kill" === t.SuccessEvent.EventName &&
        t.SuccessEvent.EventValues?.RepositoryId
      )
        i.set(t.Id, {
          Type: "kill",
          Properties: {
            Id: t.SuccessEvent.EventValues.RepositoryId,
            Conditions: [],
          },
        });
      else if (
        t.HUDTemplate &&
        ["custom", "customkill", "setpiece"].includes(t.ObjectiveType || "")
      ) {
        let e = null;
        t.Definition?.Context?.Targets &&
          1 === t.Definition.Context.Targets.length &&
          (e = t.Definition.Context.Targets[0]);
        let a = !0;
        ((t.Category && "primary" !== t.Category) || !1 === t.Primary) &&
          (a = !1);
        const r = {
          Id: e,
          BriefingText: t.BriefingText || "",
          LongBriefingText:
            void 0 === t.LongBriefingText
              ? t.BriefingText || ""
              : t.LongBriefingText,
          Image: t.Image || "",
          BriefingName: t.BriefingName || "",
          DisplayAsKill: t.DisplayAsKillObjective || !1,
          ObjectivesCategory: a ? "primary" : "secondary",
          ForceShowOnLoadingScreen: t.ForceShowOnLoadingScreen || !1,
        };
        switch (t.ObjectiveType) {
          case "customkill":
            ((r.Image = void 0),
              (r.ForceShowOnLoadingScreen = void 0),
              (r.BriefingName = void 0),
              (r.ObjectivesCategory = void 0));
            break;
          case "setpiece":
            r.ObjectivesCategory = void 0;
            break;
          default:
            r.Id = void 0;
        }
        i.set(t.Id, { Type: t.ObjectiveType, Properties: r });
      } else if (
        "statemachine" === t.Type &&
        1 === t.Definition?.Context?.Targets?.length &&
        t.HUDTemplate
      ) {
        const e = t.TargetConditions
          ? t.TargetConditions.map((e) => ({
              Type: e.Type,
              RepositoryId: e.RepositoryId || UE,
              HardCondition: e.HardCondition || !1,
              ObjectiveId: e.ObjectiveId || UE,
              KillMethod: e.KillMethod || "",
            }))
          : [];
        i.set(t.Id, {
          Type: "kill",
          Properties: { Id: t.Definition.Context.Targets[0], Conditions: e },
        });
      }
  const s = [],
    o = new Set();
  for (const { Id: e, IsNew: t } of a)
    if (!o.has(e)) {
      const a = i.get(e);
      a && (t && (a.Properties.IsNew = !0), s.push(a), o.add(e));
    }
  for (const a of e.map((e) => e.Id).concat(t))
    if (!o.has(a)) {
      const e = i.get(a);
      e && (s.push(e), o.add(a));
    }
  return s;
}
var NA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "63055f1a-bcd2-4e0f-8caf-b446f01d02f3",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_DISGUISE_CHANGES_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_DISGUISE_CHANGES_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_DISGUISE_CHANGES_PRIMARY_DESC",
          TileImage:
            "images/contractconditions/condition_contract_no_disguise_changes.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_DISGUISE_CHANGES_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_DISGUISE_CHANGES_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_DISGUISE_CHANGES_SECONDARY_DESC",
          TileImage:
            "images/contractconditions/condition_contract_no_disguise_changes.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  RA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "f41f18fe-0fe5-416a-a793-50727e594655",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_TARGETS_ONLY_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_TARGETS_ONLY_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_TARGETS_ONLY_PRIMARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_targets_only.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "8618ebaa-f42b-42ce-be20-00d2b0a04897",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_TARGETS_ONLY_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_TARGETS_ONLY_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_TARGETS_ONLY_SECONDARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_targets_only.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  DA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "1f1f3c9e-1490-4fcc-aee6-5fde7c6c48ca",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_RECORDINGS_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_RECORDINGS_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_RECORDINGS_PRIMARY_DESC",
          TileImage:
            "images/contracts/gamechangers/gamechanger_global_bigbrother.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_RECORDINGS_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_RECORDINGS_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_RECORDINGS_SECONDARY_DESC",
          TileImage:
            "images/contracts/gamechangers/gamechanger_global_bigbrother.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  PA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "fd37b209-4e11-461e-a11f-394c92fbbe80",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_BODIES_FOUND_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_BODIES_FOUND_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_BODIES_FOUND_PRIMARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_no_bodies_found.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_BODIES_FOUND_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_BODIES_FOUND_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_BODIES_FOUND_SECONDARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_no_bodies_found.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  MA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "3fea3aea-0233-46bb-8bc1-08757a2f6a74",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HEADSHOTS_ONLY_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HEADSHOTS_ONLY_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HEADSHOTS_ONLY_PRIMARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_headshots_only.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HEADSHOTS_ONLY_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HEADSHOTS_ONLY_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HEADSHOTS_ONLY_SECONDARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_headshots_only.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  UA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "25760ea6-958b-4aab-97d4-b539c5b025c8",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_MISSED_SHOTS_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_MISSED_SHOTS_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_MISSED_SHOTS_PRIMARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_no_missed_shots.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "f96e94b7-1c0e-49c9-9332-07346a955fd2",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_MISSED_SHOTS_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_MISSED_SHOTS_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_MISSED_SHOTS_SECONDARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_no_missed_shots.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  wA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "ce154566-a4ba-43c5-be4e-79240ce0f3f9",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_PACIFICATIONS_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_PACIFICATIONS_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_PACIFICATIONS_PRIMARY_DESC",
          TileImage:
            "images/contracts/gamechangers/Gamechanger_Global_NoPacifications.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "95690829-7da4-4225-a087-08918cccf120",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_PACIFICATIONS_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_PACIFICATIONS_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_NO_PACIFICATIONS_SECONDARY_DESC",
          TileImage:
            "images/contracts/gamechangers/Gamechanger_Global_NoPacifications.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  GA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "c2da52c5-ff3e-41cd-a175-4ed9267f6c95",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HIDE_ALL_BODIES_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HIDE_ALL_BODIES_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HIDE_ALL_BODIES_PRIMARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_hide_all_bodies.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HIDE_ALL_BODIES_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HIDE_ALL_BODIES_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_HIDE_ALL_BODIES_SECONDARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_hide_all_bodies.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  },
  vA = {
    IsCompleted: !0,
    ContractConditionType: "PrimarySecondary",
    Primary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "9f409781-0a06-4748-b08d-784e78c6d481",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_PRIMARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_PRIMARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_PRIMARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_do_not_be_spotted.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "primary",
        },
      },
    ],
    Secondary: [
      {
        Type: "gamechanger",
        Properties: {
          Id: "b48bb7f9-b630-48cb-a816-720ed7959319",
          Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_SECONDARY_NAME",
          Description:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_SECONDARY_DESC",
          LongDescription:
            "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_SECONDARY_DESC",
          TileImage:
            "images/contractconditions/condition_contrac_do_not_be_spotted.jpg",
          Icon: "images/challenges/default_challenge_icon.png",
          ObjectivesCategory: "secondary",
        },
      },
    ],
  };
function BA(e) {
  return [
    {
      IsCompleted: !0,
      ContractConditionType: "PrimarySecondary",
      Primary: [
        {
          Type: "custom",
          Properties: {
            Id: "3d6f9119-7ec8-496f-ab4c-ed9757d976a4",
            BriefingName: "$loc UI_CONTRACT_UGC_TIME_LIMIT_NAME",
            BriefingText: {
              $loc: {
                key: "UI_CONTRACT_UGC_TIME_LIMIT_PRIMARY_DESC",
                data: `$formatstring ${e}`,
              },
            },
            LongBriefingText: {
              $loc: {
                key: "UI_CONTRACT_UGC_TIME_LIMIT_PRIMARY_DESC",
                data: `$formatstring ${e}`,
              },
            },
            Image: "images/contractconditions/condition_contrac_time_limit.jpg",
            ObjectivesCategory: "primary",
          },
        },
      ],
      Secondary: [
        {
          Type: "custom",
          Properties: {
            Id: "1a596216-381e-4592-9798-26f156973942",
            BriefingName: "$loc UI_CONTRACT_UGC_TIME_LIMIT_NAME",
            BriefingText: {
              $loc: {
                key: "UI_CONTRACT_UGC_TIME_LIMIT_SECONDARY_DESC",
                data: `$formatstring ${e}`,
              },
            },
            LongBriefingText: {
              $loc: {
                key: "UI_CONTRACT_UGC_TIME_LIMIT_SECONDARY_DESC",
                data: `$formatstring ${e}`,
              },
            },
            Image: "images/contractconditions/condition_contrac_time_limit.jpg",
            ObjectivesCategory: "secondary",
          },
        },
      ],
    },
    {
      IsCompleted: !0,
      ContractConditionType: "Single",
      ObjectiveInfo: [
        {
          Type: "custom",
          Properties: {
            Id: "05080d1d-e3c4-4960-a087-661d141363eb",
            BriefingName: "$loc UI_CONTRACT_UGC_REQUIRED_EXIT_NAME",
            BriefingText: "$loc UI_CONTRACT_UGC_REQUIRED_EXIT_DESC",
            LongBriefingText: "$loc UI_CONTRACT_UGC_REQUIRED_EXIT_DESC",
            Image:
              "images/contractconditions/condition_contrac_required_exit.jpg",
            ObjectivesCategory: "primary",
          },
        },
      ],
    },
    NA,
    wA,
    DA,
    PA,
    UA,
    MA,
    RA,
    GA,
    vA,
  ];
}
var kA = f(er()),
  HA = {};
I(HA, { OfficialServerAuth: () => xA, userAuths: () => YA });
var QA = {
    "User-agent": "G2 Http/1.0 (Windows NT 10.0; DX12/1; d3d12/1)",
    Version: "8.23.0",
  },
  KA = {
    "User-agent": "G2 Http/1.0 (Windows NT 10.0; DX11/1; d3d11/1)",
    Version: "7.14.0",
  },
  FA = {
    "User-agent": "G2 Http/1.0 (Windows NT 10.0; DX11/1; d3d11/1)",
    Version: "6.74.0",
  },
  xA = class {
    constructor(e, t) {
      ((this._gameAuthToken = t),
        (this._headers = FA),
        "h2" === e ? (this._headers = KA) : "h3" === e && (this._headers = QA),
        (this.initialized = !1));
    }
    async _initiallyAuthenticate(e) {
      try {
        const t = await this._firstTimeObtainData(e);
        ((this._usableToken = t.access_token),
          (this._refreshToken = t.refresh_token),
          (this.initialized = !0));
      } catch (e) {
        QE(e);
      }
    }
    async _useService(e, t, a = {}, i = {}) {
      return t
        ? O_(e, {
            data: a,
            headers: {
              ...i,
              ...this._headers,
              Authorization: `bearer ${this._usableToken}`,
            },
          })
        : await O_.post(e, a, {
            headers: {
              ...i,
              ...this._headers,
              Authorization: `bearer ${this._usableToken}`,
            },
          });
    }
    async _doRefresh() {
      const e = `grant_type=refresh_token&refresh_token=${this._refreshToken}&authcode=${this._gameAuthToken}`,
        t = (
          await O_("https://auth.hitman.io/oauth/token", {
            headers: {
              ...this._headers,
              Authorization: `bearer ${this._usableToken}`,
            },
            data: e,
          })
        ).data;
      ((this._usableToken = t.access_token),
        (this._refreshToken = t.refresh_token),
        (this.initialized = !0));
    }
    async _firstTimeObtainData(e) {
      return (
        await O_.post(
          "https://auth.hitman.io/oauth/token",
          (function (e) {
            let t = "";
            return (
              Object.keys(e).forEach((a, i) => {
                (0 !== i && (t += "&"), (t += `${a}=${e[a]}`));
              }),
              t
            );
          })(e.body),
          { headers: this._headers },
        )
      ).data;
    }
  },
  YA = new Map(),
  jA = {};
I(jA, { missionsInLocation: () => VA });
var VA = {
    h1: {
      LOCATION_ICA_FACILITY: [
        "1436cbe4-164b-450f-ad2c-77dec88f53dd",
        "1d241b00-f585-4e3d-bc61-3095af1b96e2",
        "b573932d-7a34-44f1-bcf4-ea8f79f75710",
        "ada5f2b1-8529-48bb-a596-717f75f5eacb",
      ],
      LOCATION_PARIS: [
        "00000000-0000-0000-0000-000000000200",
        "4e45e91a-94ca-4d89-89fc-1b250e608e73",
      ],
      LOCATION_COASTALTOWN: ["00000000-0000-0000-0000-000000000600"],
      LOCATION_COASTALTOWN_NIGHT: ["00000000-0000-0000-0001-000000000005"],
      LOCATION_COASTALTOWN_EBOLA: ["7e3f758a-2435-42de-93bd-d8f0b72c63a4"],
      LOCATION_COASTALTOWN_MOVIESET: ["00000000-0000-0000-0001-000000000006"],
      LOCATION_MARRAKECH: ["00000000-0000-0000-0000-000000000400"],
      LOCATION_MARRAKECH_NIGHT: ["ced93d8f-9535-425a-beb9-ef219e781e81"],
      LOCATION_BANGKOK: ["db341d9f-58a4-411d-be57-0bc4ed85646b"],
      LOCATION_BANGKOK_ZIKA: ["024b6964-a3bb-4457-b085-08f9a7dc7fb7"],
      LOCATION_COLORADO: ["42bac555-bbb9-429d-a8ce-f1ffdf94211c"],
      LOCATION_COLORADO_RABIES: ["ada6205e-6ee8-4189-9cdb-4947cccd84f4"],
      LOCATION_HOKKAIDO: ["0e81a82e-b409-41e9-9e3b-5f82e57f7a12"],
      LOCATION_HOKKAIDO_FLU: ["a2befcec-7799-4987-9215-6a152cb6a320"],
      escalations: {
        LOCATION_ICA_FACILITY: [
          "aee6a16f-6525-4d63-a37f-225e293c6118",
          "c469d91d-01fc-4314-b22c-71cb804e92c0",
        ],
        LOCATION_PARIS: [
          "4f6ee6ec-b6d7-4958-9838-0352c10294a0",
          "e6be23e8-8602-42c8-a014-17ffbfa053f5",
          "e01113e6-f27d-4ea1-a8ba-93062335bbf5",
          "0e5c23b1-4678-458b-ad98-8b55c268e90a",
          "c1db299f-3037-4726-b9fc-5cd951c45812",
          "bfb0d544-b4c9-4533-bed4-4562a43a3f40",
          "51038604-c3f4-41e9-889b-25d9d5de93c6",
          "162e9039-cb05-418c-ba8f-792fc6cc5165",
          "e75663c8-afca-45a1-af18-25fe3e663848",
          "ebf8e5b5-3bf0-487e-8d1b-9473aee61291",
          "39f03892-a841-4775-91ac-f8c91b485505",
          "54e6c794-2855-4ecf-acc2-d7710d5d96d1",
          "a1e7fdb4-88a4-4dbd-9ef2-d9bd1762cec2",
          "2e365b7c-817d-4213-8fb1-496fa8067e7b",
          "edeca4db-7394-4e93-9b6d-00581f16d6c1",
          "5746f21e-efa1-4787-a9ca-99a5f233f507",
          "77c7b56f-2410-4919-a4bc-64435c6cff55",
          "d6961637-effe-4c39-b99a-f2df4402657d",
          "ced3ecb8-70ab-40b0-b033-6f6235c61900",
        ],
        LOCATION_COASTALTOWN: [
          "4b6739eb-bcdb-48ad-8c45-a829794175e1",
          "5a8bdb42-b11e-47d1-bc57-b4bf7efa9eda",
          "641656f8-ab16-49c5-a09b-952738154b64",
          "ee7e831b-f7ea-4803-8eba-80b42d020a7c",
          "95bb86f8-fbbf-4eb0-b2fa-bd379c0a4878",
          "0c4c6ce2-09d5-4fff-a946-099ced0558ea",
          "d43600cd-1128-4d59-bf87-075c73ae9776",
          "3d9dcf91-1708-4e22-88b3-41d184bcc8c3",
          "525bd318-04e6-4672-9d01-6bba74362fc5",
          "994540ee-3900-4a41-9544-17b2196a4b1a",
          "fab808f9-e88b-4775-aadb-a462c86bf2d9",
          "f08934c0-73f3-460c-a612-231035131c96",
        ],
        LOCATION_COASTALTOWN_MOVIESET: ["74739eda-6ed5-4318-a501-2fa0bd53ef5a"],
        LOCATION_COASTALTOWN_NIGHT: ["8dec1e62-bbf9-438c-8495-24559c884466"],
        LOCATION_COASTALTOWN_EBOLA: [],
        LOCATION_MARRAKECH: [
          "19660896-fc1f-49f9-b56b-2059137530e4",
          "11c93649-6b00-46ac-bf2d-a3599a6ab3a9",
          "ebf8ab97-6ff3-4063-9737-c6f237031de7",
          "c67a1ead-7489-4d88-bbd2-c68d735e5df0",
          "896233eb-e7c5-4915-bf2b-5867799d8bb4",
          "45e6d255-f8e4-4170-ad7e-3416ab8a881d",
          "c949817b-5212-42e8-9b06-9a2eb83de167",
          "e359075e-a510-4b7c-a461-477b789ca7e4",
        ],
        LOCATION_MARRAKECH_NIGHT: [
          "b49de2a1-fe8e-49c4-8331-17aaa9d65d32",
          "c2e16fb7-d49f-49ef-9d76-46b8b31b3389",
        ],
        LOCATION_BANGKOK: [
          "f425e64f-99df-4ebf-9f7d-909a65a26aef",
          "ccbde3e2-67e7-4534-95ec-e9bd7ef65273",
          "1f785def-03b7-4340-af7e-2f5831e77eb5",
          "45c831c4-b455-4d21-90f3-6f09b28ee01b",
        ],
        LOCATION_BANGKOK_ZIKA: [],
        LOCATION_COLORADO: [
          "e6f4d3a4-9a33-4bd9-b761-da297069cf8c",
          "c5d88e8c-437b-476b-afe2-d94aa4293502",
          "4186dd23-1cfc-4ba0-9863-9f19f7cba249",
        ],
        LOCATION_COLORADO_RABIES: [],
        LOCATION_HOKKAIDO: [
          "e96fb040-a13f-466c-9d96-c8f3b2b8a09a",
          "a1e5f4f4-ea9c-4a42-b826-50a212026d50",
          "85a2b618-2e3c-444f-931c-b89d566e45f7",
          "88451dd9-4b57-441e-9eab-e20b9879bafa",
        ],
        LOCATION_HOKKAIDO_FLU: [],
      },
      elusive: {},
      sarajevo: {},
      pro1: {
        LOCATION_PARENT_PARIS: "5ee4d771-6ab3-41fa-ab4f-04970d0ca327",
        LOCATION_PARENT_COASTALTOWN: "644d36bd-1f88-44f9-9fed-14a51e5e3f6b",
        LOCATION_PARENT_MARRAKECH: "7b2d5500-7853-4ad0-b68a-14be791cfba2",
        LOCATION_PARENT_BANGKOK: "ad5f9051-045d-4b8e-8a4d-d84429f467f8",
        LOCATION_PARENT_COLORADO: "69b58abc-6535-4092-9afe-c046b26303e6",
        LOCATION_PARENT_HOKKAIDO: "3d885714-fa9a-4438-9e0f-c58dbcaab8b8",
      },
    },
    h2: {
      LOCATION_ICA_FACILITY_ARRIVAL: ["1436cbe4-164b-450f-ad2c-77dec88f53dd"],
      LOCATION_ICA_FACILITY_SHIP: [
        "1d241b00-f585-4e3d-bc61-3095af1b96e2",
        "b573932d-7a34-44f1-bcf4-ea8f79f75710",
      ],
      LOCATION_ICA_FACILITY: ["ada5f2b1-8529-48bb-a596-717f75f5eacb"],
      LOCATION_PARIS: [
        "00000000-0000-0000-0000-000000000200",
        "4e45e91a-94ca-4d89-89fc-1b250e608e73",
      ],
      LOCATION_COASTALTOWN: ["00000000-0000-0000-0000-000000000600"],
      LOCATION_COASTALTOWN_NIGHT: ["00000000-0000-0000-0001-000000000005"],
      LOCATION_COASTALTOWN_EBOLA: ["7e3f758a-2435-42de-93bd-d8f0b72c63a4"],
      LOCATION_COASTALTOWN_MOVIESET: ["00000000-0000-0000-0001-000000000006"],
      LOCATION_MARRAKECH: ["00000000-0000-0000-0000-000000000400"],
      LOCATION_MARRAKECH_NIGHT: ["ced93d8f-9535-425a-beb9-ef219e781e81"],
      LOCATION_BANGKOK: ["db341d9f-58a4-411d-be57-0bc4ed85646b"],
      LOCATION_BANGKOK_ZIKA: ["024b6964-a3bb-4457-b085-08f9a7dc7fb7"],
      LOCATION_COLORADO: ["42bac555-bbb9-429d-a8ce-f1ffdf94211c"],
      LOCATION_COLORADO_RABIES: ["ada6205e-6ee8-4189-9cdb-4947cccd84f4"],
      LOCATION_HOKKAIDO: [
        "0e81a82e-b409-41e9-9e3b-5f82e57f7a12",
        "c414a084-a7b9-43ce-b6ca-590620acd87e",
      ],
      LOCATION_HOKKAIDO_FLU: ["a2befcec-7799-4987-9215-6a152cb6a320"],
      LOCATION_NEWZEALAND: ["c65019e5-43a8-4a33-8a2a-84c750a5eeb3"],
      LOCATION_MIAMI: ["c1d015b4-be08-4e44-808e-ada0f387656f"],
      LOCATION_MIAMI_COTTONMOUTH: ["f1ba328f-e3dd-4ef8-bb26-0363499fdd95"],
      LOCATION_COLOMBIA: ["422519be-ed2e-44df-9dac-18f739d44fd9"],
      LOCATION_COLOMBIA_ANACONDA: ["179563a4-727a-4072-b354-c9fff4e8bff0"],
      LOCATION_MUMBAI: ["0fad48d7-3d0f-4c66-8605-6cbe9c3a46d7"],
      LOCATION_MUMBAI_KINGCOBRA: ["a8036782-de0a-4353-b522-0ab7a384bade"],
      LOCATION_NORTHAMERICA: ["82f55837-e26c-41bf-bc6e-fa97b7981fbc"],
      LOCATION_NORTHAMERICA_GARTERSNAKE: [
        "0b616e62-af0c-495b-82e3-b778e82b5912",
      ],
      LOCATION_NORTHSEA: ["0d225edf-40cd-4f20-a30f-b62a373801d3"],
      LOCATION_GREEDY_RACCOON: ["7a03a97d-238c-48bd-bda0-e5f279569cce"],
      LOCATION_OPULENT_STINGRAY: ["095261b5-e15b-4ca1-9bb7-001fb85c5aaa"],
      escalations: {
        LOCATION_ICA_FACILITY_SHIP: ["aee6a16f-6525-4d63-a37f-225e293c6118"],
        LOCATION_ICA_FACILITY: ["c469d91d-01fc-4314-b22c-71cb804e92c0"],
        LOCATION_PARIS: [
          "07bbf22b-d6ae-4883-bec2-122eeeb7b665",
          "4f6ee6ec-b6d7-4958-9838-0352c10294a0",
          "e6be23e8-8602-42c8-a014-17ffbfa053f5",
          "e01113e6-f27d-4ea1-a8ba-93062335bbf5",
          "0e5c23b1-4678-458b-ad98-8b55c268e90a",
          "c1db299f-3037-4726-b9fc-5cd951c45812",
          "bfb0d544-b4c9-4533-bed4-4562a43a3f40",
          "51038604-c3f4-41e9-889b-25d9d5de93c6",
          "162e9039-cb05-418c-ba8f-792fc6cc5165",
          "e75663c8-afca-45a1-af18-25fe3e663848",
          "ebf8e5b5-3bf0-487e-8d1b-9473aee61291",
          "39f03892-a841-4775-91ac-f8c91b485505",
          "54e6c794-2855-4ecf-acc2-d7710d5d96d1",
          "a1e7fdb4-88a4-4dbd-9ef2-d9bd1762cec2",
          "2e365b7c-817d-4213-8fb1-496fa8067e7b",
          "edeca4db-7394-4e93-9b6d-00581f16d6c1",
          "5746f21e-efa1-4787-a9ca-99a5f233f507",
          "77c7b56f-2410-4919-a4bc-64435c6cff55",
          "d6961637-effe-4c39-b99a-f2df4402657d",
          "ced3ecb8-70ab-40b0-b033-6f6235c61900",
        ],
        LOCATION_COASTALTOWN: [
          "9e0188e8-bdad-476c-b4ce-2faa5d2be56c",
          "74415eca-d01e-4070-9bc9-5ef9b4e8f7d2",
          "4b6739eb-bcdb-48ad-8c45-a829794175e1",
          "5a8bdb42-b11e-47d1-bc57-b4bf7efa9eda",
          "641656f8-ab16-49c5-a09b-952738154b64",
          "ee7e831b-f7ea-4803-8eba-80b42d020a7c",
          "95bb86f8-fbbf-4eb0-b2fa-bd379c0a4878",
          "0c4c6ce2-09d5-4fff-a946-099ced0558ea",
          "d43600cd-1128-4d59-bf87-075c73ae9776",
          "3d9dcf91-1708-4e22-88b3-41d184bcc8c3",
          "525bd318-04e6-4672-9d01-6bba74362fc5",
          "994540ee-3900-4a41-9544-17b2196a4b1a",
          "fab808f9-e88b-4775-aadb-a462c86bf2d9",
          "f08934c0-73f3-460c-a612-231035131c96",
        ],
        LOCATION_COASTALTOWN_MOVIESET: ["74739eda-6ed5-4318-a501-2fa0bd53ef5a"],
        LOCATION_COASTALTOWN_NIGHT: ["8dec1e62-bbf9-438c-8495-24559c884466"],
        LOCATION_COASTALTOWN_EBOLA: ["0cceeecb-c8fe-42a4-aee4-d7b575f56a1b"],
        LOCATION_MARRAKECH: [
          "19660896-fc1f-49f9-b56b-2059137530e4",
          "11c93649-6b00-46ac-bf2d-a3599a6ab3a9",
          "ebf8ab97-6ff3-4063-9737-c6f237031de7",
          "c67a1ead-7489-4d88-bbd2-c68d735e5df0",
          "896233eb-e7c5-4915-bf2b-5867799d8bb4",
          "45e6d255-f8e4-4170-ad7e-3416ab8a881d",
          "c949817b-5212-42e8-9b06-9a2eb83de167",
          "e359075e-a510-4b7c-a461-477b789ca7e4",
        ],
        LOCATION_MARRAKECH_NIGHT: [
          "b49de2a1-fe8e-49c4-8331-17aaa9d65d32",
          "c2e16fb7-d49f-49ef-9d76-46b8b31b3389",
        ],
        LOCATION_BANGKOK: [
          "f425e64f-99df-4ebf-9f7d-909a65a26aef",
          "ccbde3e2-67e7-4534-95ec-e9bd7ef65273",
          "1f785def-03b7-4340-af7e-2f5831e77eb5",
          "45c831c4-b455-4d21-90f3-6f09b28ee01b",
        ],
        LOCATION_BANGKOK_ZIKA: [],
        LOCATION_COLORADO: [
          "e6f4d3a4-9a33-4bd9-b761-da297069cf8c",
          "c5d88e8c-437b-476b-afe2-d94aa4293502",
          "4186dd23-1cfc-4ba0-9863-9f19f7cba249",
        ],
        LOCATION_COLORADO_RABIES: [],
        LOCATION_HOKKAIDO: [
          "115425b1-e797-47bf-b517-410dc7507397",
          "e96fb040-a13f-466c-9d96-c8f3b2b8a09a",
          "a1e5f4f4-ea9c-4a42-b826-50a212026d50",
          "85a2b618-2e3c-444f-931c-b89d566e45f7",
          "88451dd9-4b57-441e-9eab-e20b9879bafa",
        ],
        LOCATION_HOKKAIDO_FLU: [],
        LOCATION_NEWZEALAND: [
          "e1e86206-d3f0-a819-e477-3d80e55e8a40",
          "3efc73f9-33f0-4af6-9508-7208e6851394",
        ],
        LOCATION_MIAMI: [
          "719ee044-4b05-4bd9-b2bb-75029f6d2a35",
          "5284cb9f-9bdd-4b00-99c3-0b5939b01818",
          "d0f44e71-6eab-4af4-9484-78d61dbe376a",
          "fca539ff-1b1a-4c04-93e0-03b9b902f86c",
          "782a2849-14a2-4cd4-99fc-ddacaeaba2dd",
          "be3ea01f-ec56-4fcb-95ec-164a1d9980f3",
          "066ce378-0418-452a-b02e-a5e4ee711096",
        ],
        LOCATION_COLOMBIA: [
          "390ba7b6-de27-464a-b8af-6d0ff54c2aec",
          "70150cd2-ef76-4ba8-80cc-b1e63871b030",
          "be567ad3-23f4-4d0b-9d2e-b261ea845ef0",
          "a5e81878-0eae-4bcf-af9b-9a7e7833f85d",
          "757fd132-0300-45ec-b5bd-bdd48c543b5c",
          "41ecf8ce-dfd4-4c08-8f44-52dedc3f089a",
          "d336d894-024a-4cd4-9867-dee7de70ee79",
        ],
        LOCATION_MUMBAI: [
          "667f48a3-7f6b-486e-8f6b-2f782a5c4857",
          "9badee3e-0014-46b1-9ef6-edf8858ba038",
          "b6a6330a-301a-4e8e-a26f-0f3e0ea809b5",
          "4a62b328-dfe7-4956-ac0f-a3a8990fce26",
          "a10472e4-0eb3-451d-814d-38837dd0f407",
          "ae0bd6cd-7062-4336-8cb0-5fafad3d0f4f",
          "b47f34cb-6537-421c-8fc8-720a4a118540",
        ],
        LOCATION_NORTHAMERICA: [
          "218302a3-f682-46f9-9ffd-bb3e82487b7c",
          "d1b9250b-33f6-4712-831b-f33fa11ee4d8",
          "1d5dcf3e-9682-4e32-ac11-ad6586daa456",
          "74e6b561-ff1a-4742-9a7b-890b7818c796",
          "15b7ad4e-565a-4fdb-b669-c9a68176e665",
          "fe088a10-5dbf-460f-bbe2-6b55e7a66253",
        ],
        LOCATION_NORTHSEA: [
          "e63eeb62-29ef-428d-b003-ea043b1f11f9",
          "b66f151d-47a7-4681-a403-c48a46916224",
          "dbb0e22d-084b-4b57-8616-42290982fd90",
          "4fbfae2e-a5e7-4b79-b008-94f6cbcb13cb",
          "3721e543-b5e6-4af8-a4fc-c92e9a4453bd",
          "8c6daf5e-5974-4438-af20-71ff570c7ff3",
        ],
        LOCATION_GREEDY_RACCOON: [
          "9a461f89-86c5-44e4-998e-f2f66b496aa7",
          "55063d85-e84a-4c76-8bf7-e70fe2cab651",
        ],
        LOCATION_OPULENT_STINGRAY: [
          "f19f7ac8-39ec-498b-aa23-44c8e75d8693",
          "35f1f534-ae2d-42be-8472-dd55e96625ea",
          "83d4e87e-2f47-4c81-b831-30bd13a29b05",
        ],
      },
      sniper: {
        LOCATION_AUSTRIA: ["ff9f46cf-00bd-4c12-b887-eac491c3a96d"],
        LOCATION_SALTY_SEAGULL: ["00e57709-e049-44c9-a2c3-7655e19884fb"],
        LOCATION_CAGED_FALCON: ["25b20d86-bb5a-4ebd-b6bb-81ed2779c180"],
      },
      elusive: {},
      sarajevo: {},
    },
    h3: {
      LOCATION_ICA_FACILITY_ARRIVAL: ["1436cbe4-164b-450f-ad2c-77dec88f53dd"],
      LOCATION_ICA_FACILITY_SHIP: [
        "1d241b00-f585-4e3d-bc61-3095af1b96e2",
        "b573932d-7a34-44f1-bcf4-ea8f79f75710",
      ],
      LOCATION_ICA_FACILITY: ["ada5f2b1-8529-48bb-a596-717f75f5eacb"],
      LOCATION_PARIS: ["00000000-0000-0000-0000-000000000200"],
      LOCATION_PARIS_NOEL: ["4e45e91a-94ca-4d89-89fc-1b250e608e73"],
      LOCATION_COASTALTOWN: ["00000000-0000-0000-0000-000000000600"],
      LOCATION_COASTALTOWN_NIGHT: ["00000000-0000-0000-0001-000000000005"],
      LOCATION_COASTALTOWN_EBOLA: ["7e3f758a-2435-42de-93bd-d8f0b72c63a4"],
      LOCATION_COASTALTOWN_MOVIESET: ["00000000-0000-0000-0001-000000000006"],
      LOCATION_MARRAKECH: ["00000000-0000-0000-0000-000000000400"],
      LOCATION_MARRAKECH_NIGHT: ["ced93d8f-9535-425a-beb9-ef219e781e81"],
      LOCATION_BANGKOK: ["db341d9f-58a4-411d-be57-0bc4ed85646b"],
      LOCATION_BANGKOK_ZIKA: ["024b6964-a3bb-4457-b085-08f9a7dc7fb7"],
      LOCATION_COLORADO: ["42bac555-bbb9-429d-a8ce-f1ffdf94211c"],
      LOCATION_COLORADO_RABIES: ["ada6205e-6ee8-4189-9cdb-4947cccd84f4"],
      LOCATION_HOKKAIDO: ["0e81a82e-b409-41e9-9e3b-5f82e57f7a12"],
      LOCATION_HOKKAIDO_MAMUSHI: ["c414a084-a7b9-43ce-b6ca-590620acd87e"],
      LOCATION_HOKKAIDO_FLU: ["a2befcec-7799-4987-9215-6a152cb6a320"],
      LOCATION_NEWZEALAND: ["c65019e5-43a8-4a33-8a2a-84c750a5eeb3"],
      LOCATION_MIAMI: ["c1d015b4-be08-4e44-808e-ada0f387656f"],
      LOCATION_MIAMI_COTTONMOUTH: ["f1ba328f-e3dd-4ef8-bb26-0363499fdd95"],
      LOCATION_COLOMBIA: ["422519be-ed2e-44df-9dac-18f739d44fd9"],
      LOCATION_COLOMBIA_ANACONDA: ["179563a4-727a-4072-b354-c9fff4e8bff0"],
      LOCATION_MUMBAI: ["0fad48d7-3d0f-4c66-8605-6cbe9c3a46d7"],
      LOCATION_MUMBAI_KINGCOBRA: ["a8036782-de0a-4353-b522-0ab7a384bade"],
      LOCATION_NORTHAMERICA: ["82f55837-e26c-41bf-bc6e-fa97b7981fbc"],
      LOCATION_NORTHAMERICA_GARTERSNAKE: [
        "0b616e62-af0c-495b-82e3-b778e82b5912",
      ],
      LOCATION_NORTHSEA: ["0d225edf-40cd-4f20-a30f-b62a373801d3"],
      LOCATION_GREEDY_RACCOON: ["7a03a97d-238c-48bd-bda0-e5f279569cce"],
      LOCATION_OPULENT_STINGRAY: ["095261b5-e15b-4ca1-9bb7-001fb85c5aaa"],
      LOCATION_GOLDEN_GECKO: ["7d85f2b0-80ca-49be-a2b7-d56f67faf252"],
      LOCATION_ANCESTRAL_BULLDOG: ["755984a8-fb0b-4673-8637-95cfe7d34e0f"],
      LOCATION_EDGY_FOX: ["ebcd14b2-0786-4ceb-a2a4-e771f60d0125"],
      LOCATION_WET_RAT: ["3d0cbb8c-2a80-442a-896b-fea00e98768c"],
      LOCATION_ELEGANT_LLAMA: ["d42f850f-ca55-4fc9-9766-8c6a2b5c3129"],
      LOCATION_TRAPPED_WOLVERINE: ["a3e19d55-64a6-4282-bb3c-d18c3f3e6e29"],
      LOCATION_ROCKY_DUGONG: ["b2aac100-dfc7-4f85-b9cd-528114436f6c"],
      LOCATION_SNUG: ["f8ec92c2-4fa2-471e-ae08-545480c746ee"],
      escalations: {
        LOCATION_ICA_FACILITY_SHIP: ["aee6a16f-6525-4d63-a37f-225e293c6118"],
        LOCATION_ICA_FACILITY: ["c469d91d-01fc-4314-b22c-71cb804e92c0"],
        LOCATION_PARIS: [
          "4f6ee6ec-b6d7-4958-9838-0352c10294a0",
          "e6be23e8-8602-42c8-a014-17ffbfa053f5",
          "e01113e6-f27d-4ea1-a8ba-93062335bbf5",
          "0e5c23b1-4678-458b-ad98-8b55c268e90a",
          "c1db299f-3037-4726-b9fc-5cd951c45812",
          "bfb0d544-b4c9-4533-bed4-4562a43a3f40",
          "51038604-c3f4-41e9-889b-25d9d5de93c6",
          "162e9039-cb05-418c-ba8f-792fc6cc5165",
          "e75663c8-afca-45a1-af18-25fe3e663848",
          "ebf8e5b5-3bf0-487e-8d1b-9473aee61291",
          "39f03892-a841-4775-91ac-f8c91b485505",
          "54e6c794-2855-4ecf-acc2-d7710d5d96d1",
          "a1e7fdb4-88a4-4dbd-9ef2-d9bd1762cec2",
          "2e365b7c-817d-4213-8fb1-496fa8067e7b",
          "edeca4db-7394-4e93-9b6d-00581f16d6c1",
          "5746f21e-efa1-4787-a9ca-99a5f233f507",
          "77c7b56f-2410-4919-a4bc-64435c6cff55",
          "d6961637-effe-4c39-b99a-f2df4402657d",
          "ced3ecb8-70ab-40b0-b033-6f6235c61900",
        ],
        LOCATION_PARIS_NOEL: ["07bbf22b-d6ae-4883-bec2-122eeeb7b665"],
        LOCATION_COASTALTOWN: [
          "9e0188e8-bdad-476c-b4ce-2faa5d2be56c",
          "74415eca-d01e-4070-9bc9-5ef9b4e8f7d2",
          "4b6739eb-bcdb-48ad-8c45-a829794175e1",
          "5a8bdb42-b11e-47d1-bc57-b4bf7efa9eda",
          "641656f8-ab16-49c5-a09b-952738154b64",
          "ee7e831b-f7ea-4803-8eba-80b42d020a7c",
          "95bb86f8-fbbf-4eb0-b2fa-bd379c0a4878",
          "0c4c6ce2-09d5-4fff-a946-099ced0558ea",
          "d43600cd-1128-4d59-bf87-075c73ae9776",
          "3d9dcf91-1708-4e22-88b3-41d184bcc8c3",
          "525bd318-04e6-4672-9d01-6bba74362fc5",
          "994540ee-3900-4a41-9544-17b2196a4b1a",
          "fab808f9-e88b-4775-aadb-a462c86bf2d9",
          "f08934c0-73f3-460c-a612-231035131c96",
        ],
        LOCATION_COASTALTOWN_MOVIESET: ["74739eda-6ed5-4318-a501-2fa0bd53ef5a"],
        LOCATION_COASTALTOWN_NIGHT: ["8dec1e62-bbf9-438c-8495-24559c884466"],
        LOCATION_COASTALTOWN_EBOLA: ["0cceeecb-c8fe-42a4-aee4-d7b575f56a1b"],
        LOCATION_MARRAKECH: [
          "19660896-fc1f-49f9-b56b-2059137530e4",
          "11c93649-6b00-46ac-bf2d-a3599a6ab3a9",
          "ebf8ab97-6ff3-4063-9737-c6f237031de7",
          "c67a1ead-7489-4d88-bbd2-c68d735e5df0",
          "896233eb-e7c5-4915-bf2b-5867799d8bb4",
          "45e6d255-f8e4-4170-ad7e-3416ab8a881d",
          "c949817b-5212-42e8-9b06-9a2eb83de167",
          "e359075e-a510-4b7c-a461-477b789ca7e4",
        ],
        LOCATION_MARRAKECH_NIGHT: [
          "b49de2a1-fe8e-49c4-8331-17aaa9d65d32",
          "c2e16fb7-d49f-49ef-9d76-46b8b31b3389",
        ],
        LOCATION_BANGKOK: [
          "f425e64f-99df-4ebf-9f7d-909a65a26aef",
          "ccbde3e2-67e7-4534-95ec-e9bd7ef65273",
          "1f785def-03b7-4340-af7e-2f5831e77eb5",
          "45c831c4-b455-4d21-90f3-6f09b28ee01b",
        ],
        LOCATION_BANGKOK_ZIKA: [],
        LOCATION_COLORADO: [
          "e6f4d3a4-9a33-4bd9-b761-da297069cf8c",
          "c5d88e8c-437b-476b-afe2-d94aa4293502",
          "4186dd23-1cfc-4ba0-9863-9f19f7cba249",
        ],
        LOCATION_COLORADO_RABIES: [],
        LOCATION_HOKKAIDO: [
          "115425b1-e797-47bf-b517-410dc7507397",
          "e96fb040-a13f-466c-9d96-c8f3b2b8a09a",
          "a1e5f4f4-ea9c-4a42-b826-50a212026d50",
          "85a2b618-2e3c-444f-931c-b89d566e45f7",
          "88451dd9-4b57-441e-9eab-e20b9879bafa",
        ],
        LOCATION_HOKKAIDO_MAMUSHI: [],
        LOCATION_HOKKAIDO_FLU: [],
        LOCATION_NEWZEALAND: [
          "e1e86206-d3f0-a819-e477-3d80e55e8a40",
          "3efc73f9-33f0-4af6-9508-7208e6851394",
        ],
        LOCATION_MIAMI: [
          "719ee044-4b05-4bd9-b2bb-75029f6d2a35",
          "5284cb9f-9bdd-4b00-99c3-0b5939b01818",
          "d0f44e71-6eab-4af4-9484-78d61dbe376a",
          "fca539ff-1b1a-4c04-93e0-03b9b902f86c",
          "782a2849-14a2-4cd4-99fc-ddacaeaba2dd",
          "be3ea01f-ec56-4fcb-95ec-164a1d9980f3",
          "066ce378-0418-452a-b02e-a5e4ee711096",
        ],
        LOCATION_COLOMBIA: [
          "390ba7b6-de27-464a-b8af-6d0ff54c2aec",
          "70150cd2-ef76-4ba8-80cc-b1e63871b030",
          "be567ad3-23f4-4d0b-9d2e-b261ea845ef0",
          "a5e81878-0eae-4bcf-af9b-9a7e7833f85d",
          "757fd132-0300-45ec-b5bd-bdd48c543b5c",
          "41ecf8ce-dfd4-4c08-8f44-52dedc3f089a",
          "d336d894-024a-4cd4-9867-dee7de70ee79",
        ],
        LOCATION_MUMBAI: [
          "667f48a3-7f6b-486e-8f6b-2f782a5c4857",
          "9badee3e-0014-46b1-9ef6-edf8858ba038",
          "b6a6330a-301a-4e8e-a26f-0f3e0ea809b5",
          "4a62b328-dfe7-4956-ac0f-a3a8990fce26",
          "a10472e4-0eb3-451d-814d-38837dd0f407",
          "ae0bd6cd-7062-4336-8cb0-5fafad3d0f4f",
          "b47f34cb-6537-421c-8fc8-720a4a118540",
        ],
        LOCATION_NORTHAMERICA: [
          "218302a3-f682-46f9-9ffd-bb3e82487b7c",
          "d1b9250b-33f6-4712-831b-f33fa11ee4d8",
          "1d5dcf3e-9682-4e32-ac11-ad6586daa456",
          "74e6b561-ff1a-4742-9a7b-890b7818c796",
          "15b7ad4e-565a-4fdb-b669-c9a68176e665",
          "fe088a10-5dbf-460f-bbe2-6b55e7a66253",
        ],
        LOCATION_NORTHSEA: [
          "e63eeb62-29ef-428d-b003-ea043b1f11f9",
          "b66f151d-47a7-4681-a403-c48a46916224",
          "dbb0e22d-084b-4b57-8616-42290982fd90",
          "4fbfae2e-a5e7-4b79-b008-94f6cbcb13cb",
          "3721e543-b5e6-4af8-a4fc-c92e9a4453bd",
          "8c6daf5e-5974-4438-af20-71ff570c7ff3",
        ],
        LOCATION_GREEDY_RACCOON: [
          "9a461f89-86c5-44e4-998e-f2f66b496aa7",
          "55063d85-e84a-4c76-8bf7-e70fe2cab651",
        ],
        LOCATION_OPULENT_STINGRAY: [
          "f19f7ac8-39ec-498b-aa23-44c8e75d8693",
          "35f1f534-ae2d-42be-8472-dd55e96625ea",
          "83d4e87e-2f47-4c81-b831-30bd13a29b05",
        ],
        LOCATION_GOLDEN_GECKO: [
          "8885eeda-ad64-44fa-a944-1438b36c670c",
          "ae04c7a0-4028-4524-b27f-6a62f020fdca",
          "9448d91d-f7df-4b5a-8ea3-91f1233f644a",
          "89305766-199e-43eb-9fcb-29e6f2b6e9ab",
          "a9dc4bf9-d277-4115-8dac-6c665cd68168",
        ],
        LOCATION_ANCESTRAL_BULLDOG: [
          "78628e05-93ce-4f87-8a17-b910d32df51f",
          "8e95dcd0-704f-4121-8be6-088a3812f838",
          "a838c4b0-7db5-4ac7-8d52-e8c5b82aa376",
          "b12d08ea-c842-498a-82ea-889653588592",
          "4689ef5e-0ddd-44b3-adca-aebf3293d9e1",
        ],
        LOCATION_ANCESTRAL_SMOOTHSNAKE: [
          "5680108a-19dc-4448-9344-3d0290217162",
        ],
        LOCATION_EDGY_FOX: [
          "5bc6a2a3-d80a-4cb3-9ebc-a93d9238950d",
          "ccdc7043-62af-44e8-a5fc-38b008c2044e",
          "9d88605f-6871-46a8-bd46-9804ea04fca9",
          "12d83cb0-a2d6-4c01-b9d8-675ac635ee61",
          "e3b65e65-636b-4dfd-bb42-65a18c5dce4a",
          "079876de-ddd7-47aa-8719-abe97d82fc12",
          "5bb29a6b-7384-4641-944c-3540fa5cd8aa",
        ],
        LOCATION_WET_RAT: [
          "5d0668b9-665f-48a7-a72c-6f5614b350a2",
          "07ffa72a-bbac-45ca-8c9f-b9c1b526153a",
          "5121acde-313d-4517-ae70-6a54ca5d775a",
          "494d97a6-9e31-45e0-9dae-f3793c731336",
          "542108f2-f82f-4a04-bfec-efa92785fec1",
          "84bf03cc-3055-4fd4-a691-d8b0ac61a51f",
        ],
        LOCATION_ELEGANT_LLAMA: [
          "1e4423b7-d4ff-448f-a8a8-4bb600cab7e3",
          "edbacf4b-e402-4548-b723-cd4351571537",
          "8c8ed496-948f-4672-879b-4d9575406577",
          "14a21819-f81f-453d-8734-a3aab528fa62",
          "72aaaa7b-4386-4ee7-9e9e-73fb8ff8e416",
        ],
        LOCATION_TRAPPED_WOLVERINE: ["078a50d1-6427-4fc3-9099-e46390e637a0"],
        LOCATION_ROCKY_DUGONG: ["50fa5e99-0b51-45d4-9062-cd46dd928461"],
      },
      arcade: {
        LOCATION_PARIS: [
          "7886bed7-3805-46c6-a792-4a0d55758934",
          "06f99231-9b1e-483f-8a72-f91efcc2fd2b",
          "6516174c-abe0-4cd7-acdb-7cda4c9b5016",
          "223aa1f3-64a1-43c0-b3c8-36aebd7998e4",
          "7569d5e4-5270-4b69-96c8-e47b99876390",
          "479ec396-b96f-4e01-94d9-aedaa0582ed9",
          "09ea9b32-dc85-4633-9f6a-c5c4bfded5ac",
          "80582fdb-c77e-4d6a-b33f-1f14f34b72c4",
        ],
        LOCATION_COASTALTOWN: [
          "8db8fa33-cb41-4a0d-a2de-e30d884afb95",
          "9e469023-e0c4-42bf-8527-f9fcaf624421",
        ],
        LOCATION_BANGKOK: ["3fa83d8d-eb75-4973-926a-6052ee5b2aa4"],
        LOCATION_COLORADO: [
          "ff5b4e53-49ea-4d85-b94e-d3c8b3fc7ab3",
          "b4d555eb-e2c9-40c2-b155-328a7019fd28",
        ],
        LOCATION_HOKKAIDO: ["6678cf8a-f614-4536-9584-e649351f40c2"],
        LOCATION_NEWZEALAND: ["39cc0603-4348-4dbf-9bd3-733cadf2913c"],
        LOCATION_MIAMI: ["de9788cc-b9c4-47fc-b5df-86451cd82c43"],
        LOCATION_COLOMBIA: ["90121ee0-0431-4a97-9bc8-8a7e2ca30d65"],
        LOCATION_NORTHAMERICA: [
          "5081776a-86b6-4935-a83e-631a65ba8ee8",
          "cab4293f-e359-419d-aa6f-83d91a158cf5",
        ],
        LOCATION_NORTHSEA: [
          "b9f55fc3-c53f-4661-a4b6-9956303422aa",
          "6de90688-ad4c-457e-ae25-c4bbc8f55196",
          "07bc9bbf-7cba-4cdf-92bb-3ab57f09b1cc",
          "09a40d33-4820-454b-89af-a10e0b8d3e08",
          "74278853-5990-4058-8972-1f10ad12b6d8",
          "b1fb40d7-c013-4c9f-bb8a-8782e980b11a",
        ],
        LOCATION_ANCESTRAL_BULLDOG: [
          "bfb56fe6-06db-440a-aafe-42eeeb223fa1",
          "80cf04de-8e0b-4f38-b094-600753e2ac24",
          "85a67f31-75ce-40f5-a281-7765791f58ca",
          "34c21c64-515a-4a43-9fd0-378211060122",
        ],
        LOCATION_EDGY_FOX: [
          "d21e2e91-602c-49d2-9d42-e8bcfb810e9a",
          "be787ec9-e7b9-4984-bb39-fda4c71705ec",
          "e4b29c19-13b4-471b-b188-cd9c0a788cd0",
          "797e204a-ef3d-463b-a386-57df0fe29b8f",
          "f1e3dcdc-2247-4da8-bf8e-856f5fd23888",
        ],
        LOCATION_WET_RAT: [
          "dd68d30f-3900-415f-bb17-84681a2cd4fc",
          "9cbdb972-95df-4e0a-be77-7937ec6f2fb0",
          "e9168f42-882e-4c7e-8353-33d2bd8bb864",
        ],
        LOCATION_ELEGANT_LLAMA: [
          "17027c6f-7010-43b8-bb42-1a6846fc0b7b",
          "a79640cb-331a-41af-abaf-58e629fe0a04",
          "2c2afdfe-d396-451a-a6a3-52aca4ea4f1f",
          "afb4ce18-bf9d-443d-85a8-207df9011792",
        ],
      },
      sniper: {
        LOCATION_AUSTRIA: ["ff9f46cf-00bd-4c12-b887-eac491c3a96d"],
        LOCATION_SALTY_SEAGULL: ["00e57709-e049-44c9-a2c3-7655e19884fb"],
        LOCATION_CAGED_FALCON: ["25b20d86-bb5a-4ebd-b6bb-81ed2779c180"],
      },
      elusive: {},
      sarajevo: {
        LOCATION_PARIS: ["dd906289-7c32-427f-b689-98ae645b407f"],
        LOCATION_COASTALTOWN: ["350ceea9-cfa9-4639-a66b-0d4de586eeee"],
        LOCATION_MARRAKECH: ["59966a7f-3348-48da-a56c-4447aa548c85"],
        LOCATION_BANGKOK: ["30c3546d-9881-45fa-8c7a-8b2c76b03e59"],
        LOCATION_COLORADO: ["1c82c1e3-fe61-4001-a173-81fa11023460"],
        LOCATION_HOKKAIDO: ["781c68ca-9318-40bf-9cc1-232007be02bf"],
      },
    },
    scpc: {
      escalations: {},
      sniper: { LOCATION_AUSTRIA: ["ff9f46cf-00bd-4c12-b887-eac491c3a96d"] },
    },
  },
  qA = require("vm"),
  WA = {};

