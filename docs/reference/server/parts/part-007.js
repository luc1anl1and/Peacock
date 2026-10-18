// Reading excerpt from index.js, starting at line 61771.
// Shares bundle scope; use the complete bundle for execution.
I(dh, {
  createMainOpportunityTile: () => Ah,
  createMenuPageTile: () => fh,
  createPlayNextMission: () => Ih,
  getGamePlayNextData: () => mh,
  orderedMainCampaignMissions: () => ph,
  orderedPZMissions: () => $h,
  sniperMissionIds: () => _h,
});
var uh = f(require("assert")),
  ph = [
    "00000000-0000-0000-0000-000000000200",
    "00000000-0000-0000-0000-000000000600",
    "00000000-0000-0000-0000-000000000400",
    "db341d9f-58a4-411d-be57-0bc4ed85646b",
    "42bac555-bbb9-429d-a8ce-f1ffdf94211c",
    "0e81a82e-b409-41e9-9e3b-5f82e57f7a12",
    "c65019e5-43a8-4a33-8a2a-84c750a5eeb3",
    "c1d015b4-be08-4e44-808e-ada0f387656f",
    "422519be-ed2e-44df-9dac-18f739d44fd9",
    "0fad48d7-3d0f-4c66-8605-6cbe9c3a46d7",
    "82f55837-e26c-41bf-bc6e-fa97b7981fbc",
    "b2aac100-dfc7-4f85-b9cd-528114436f6c",
    "0d225edf-40cd-4f20-a30f-b62a373801d3",
    "7a03a97d-238c-48bd-bda0-e5f279569cce",
    "095261b5-e15b-4ca1-9bb7-001fb85c5aaa",
    "7d85f2b0-80ca-49be-a2b7-d56f67faf252",
    "755984a8-fb0b-4673-8637-95cfe7d34e0f",
    "ebcd14b2-0786-4ceb-a2a4-e771f60d0125",
    "3d0cbb8c-2a80-442a-896b-fea00e98768c",
    "d42f850f-ca55-4fc9-9766-8c6a2b5c3129",
    "a3e19d55-64a6-4282-bb3c-d18c3f3e6e29",
  ],
  $h = [
    "024b6964-a3bb-4457-b085-08f9a7dc7fb7",
    "7e3f758a-2435-42de-93bd-d8f0b72c63a4",
    "ada6205e-6ee8-4189-9cdb-4947cccd84f4",
    "a2befcec-7799-4987-9215-6a152cb6a320",
  ],
  _h = [
    "ff9f46cf-00bd-4c12-b887-eac491c3a96d",
    "00e57709-e049-44c9-a2c3-7655e19884fb",
    "25b20d86-bb5a-4ebd-b6bb-81ed2779c180",
  ];
function Ih(e, t, a, i) {
  return {
    CategoryType: "NextMission",
    CategoryName: "UI_PLAYNEXT_CONTINUE_STORY_TITLE",
    Items: [
      {
        ItemType: null,
        ContentType: "Contract",
        Content: {
          ContractId: t,
          UserCentricContract: SA(jb.resolveContract(t, a), e, a),
          CampaignInfo: i,
        },
        CategoryType: "NextMission",
      },
    ],
  };
}
function Ah(e, t) {
  const a = jb.resolveContract(e, t),
    i = Qd("MissionStories", !1);
  return (
    uh.default.ok(a),
    {
      CategoryType: "MainOpportunity",
      CategoryName: "UI_PLAYNEXT_MAINOPPORTUNITY_CATEGORY_NAME",
      Items: (a.Metadata.Opportunities || [])
        .filter((e) => i[e].IsMainOpportunity)
        .map((t) => ({
          ItemType: null,
          ContentType: "Opportunity",
          Content: { RepositoryId: t, ContractId: e },
          CategoryType: "MainOpportunity",
        })),
    }
  );
}
function fh(...e) {
  return {
    CategoryType: "MenuPage",
    CategoryName: "UI_MENU_PAGE_DEBRIEFING_MAIN_MENU",
    Items: e.map((e) => ({
      ItemType: null,
      ContentType: "MenuPage",
      CategoryType: "MenuPage",
      Content: { Name: e },
    })),
  };
}
function mh(e, t, a) {
  const i = [],
    r = ph.indexOf(e);
  if (-1 !== r && r !== ph.length - 1) {
    const s = ph[r + 1],
      o = (function (e) {
        return e <= 5 ? "1" : e <= 14 ? "2" : "3";
      })(r + 1);
    let n = !0;
    (parseInt(o) > parseInt(a[1]) && (n = !1),
      n && i.push(Ih(t, s, a, { CampaignName: `UI_SEASON_${o}` })),
      i.push(Ah(e, a)));
  }
  const s = $h.indexOf(e);
  if (-1 !== s && s !== $h.length - 1) {
    const e = $h[s + 1];
    i.push(
      Ih(t, e, a, {
        CampaignName: "UI_CONTRACT_CAMPAIGN_WHITE_SPIDER_TITLE",
        ParentCampaignName: "UI_MENU_PAGE_SIDE_MISSIONS_TITLE",
      }),
    );
  }
  if ("f1ba328f-e3dd-4ef8-bb26-0363499fdd95" === e) {
    const e = "0b616e62-af0c-495b-82e3-b778e82b5912";
    i.push(
      Ih(t, e, a, {
        CampaignName: "UI_MENU_PAGE_SPECIAL_ASSIGNMENTS_TITLE",
        ParentCampaignName: "UI_MENU_PAGE_SIDE_MISSIONS_TITLE",
      }),
    );
  }
  _h.includes(e) && i.push(fh("sniper"));
  const o = jb.hooks.getNextCampaignMission.call(e, a);
  return (
    o &&
      (void 0 !== o.overrideIndex
        ? (i[o.overrideIndex] = Ih(t, o.nextContractId, a, o.campaignDetails))
        : i.push(Ih(t, o.nextContractId, a, o.campaignDetails))),
    { Categories: i, ProfileId: t }
  );
}
var gh = require("crypto"),
  Ch = {};
I(Ch, { getPlanningData: () => vh });
var bh = {};
I(bh, { createSniperLoadouts: () => Th });
var Eh = f(require("assert"));
function Th(e, t, a, i = !1) {
  const r = [],
    s = hA(a.Metadata.Location, t)?.Properties.ParentLocation;
  Eh.default.ok(s, "Parent location not found");
  const o = new Map(
    jb.masteryService
      .getMasteryDataForDestination(s, t, e)
      .map((e) => [e.CompletionData.Id, e]),
  );
  if ("sniper" !== a.Metadata.Type) return r;
  Eh.default.ok(
    a.Metadata.CharacterSetup,
    "Contract missing sniper character setup",
  );
  for (const t of a.Metadata.CharacterSetup)
    for (const s of t.Characters) {
      const t = o.get(s.MandatoryLoadout?.[0] || "");
      Eh.default.ok(t, `Mastery data not found for ${a.Metadata.Id}`);
      const n =
        1 === t.CompletionData.Level
          ? t.Unlockable
          : t.Drops[
              (Rd("enableMasteryProgression") ? t.CompletionData.Level : 20) - 2
            ].Unlockable;
      (Eh.default.ok(n, "Unlockable not found"),
        Eh.default.ok(
          n.Properties.Gameplay,
          "Unlockable has no gameplay data",
        ));
      const c = {
        Id: s.Id,
        Loadout: {
          LoadoutData: [
            {
              SlotId: "0",
              SlotName: "carriedweapon",
              Items: [],
              Page: 0,
              Recommended: {
                item: {
                  InstanceId: s.Id,
                  ProfileId: e,
                  Unlockable: n,
                  Properties: {},
                },
                type: "carriedweapon",
                owned: !0,
              },
              HasMore: !1,
              HasMoreLeft: !1,
              HasMoreRight: !1,
              OptionalData: {},
            },
          ],
          LimitedLoadoutUnlockLevel: 0,
        },
        CompletionData: t.CompletionData,
      };
      (c.Loadout.LoadoutData[0].Items.push({
        Item: { InstanceId: s.Id, ProfileId: e, Unlockable: n, Properties: {} },
        ItemDetails: {
          Capabilities: [],
          StatList: Object.keys(n.Properties.Gameplay).map((e) => ({
            Name: e,
            Ratio: n.Properties.Gameplay[e],
          })),
          PropertyTexts: [],
        },
      }),
        i
          ? (delete c.Loadout.LimitedLoadoutUnlockLevel, r.push(c.Loadout))
          : r.push(c));
    }
  return r;
}
var hh = {};
I(hh, {
  fakePlayerRegistry: () => Dh,
  getErrorMessage: () => Mh,
  loadSession: () => wh,
  profileRouter: () => Rh,
  resolveProfiles: () => Ph,
  saveSession: () => Uh,
});
var Oh = f(Ys()),
  yh = f(require("path")),
  Sh = f(Jr()),
  Lh = require("crypto"),
  Nh = f(require("assert")),
  Rh = (0, Oh.Router)(),
  Dh = {
    players: [],
    getFromId(e) {
      return this.players.find((t) => t.id === e);
    },
    index(e, t, a, i) {
      return (
        this.players.find((t) => t.name === e) ||
          this.players.push({
            name: e,
            id: i || (0, Lh.randomUUID)(),
            platformId: a,
            platform: t,
          }),
        this.players.find((t) => t.name === e)?.id || UE
      );
    },
  };
async function Ph(e, t) {
  return (
    await Promise.allSettled(
      e.map((e) => {
        if (!cE.test(e))
          return Promise.reject("Tried to resolve malformed profile id");
        if ("fadb923c-e6bb-4283-a537-eb4d1150262e" === e)
          return Promise.resolve({
            Id: "fadb923c-e6bb-4283-a537-eb4d1150262e",
            LinkedAccounts: { dev: "IOI" },
            Extensions: {},
            ETag: null,
            Gamertag: null,
            DevId: "IOI",
            SteamId: null,
            EpicId: null,
            NintendoId: null,
            XboxLiveId: null,
            PSNAccountId: null,
            PSNOnlineId: null,
            Version: pE,
          });
        const a = Dh.getFromId(e);
        if (a)
          return Promise.resolve({
            Id: e,
            LinkedAccounts:
              "epic" === a.platform
                ? { epic: a.platformId }
                : { steam: a.platformId },
            Extensions: {},
            ETag: null,
            Gamertag: a.name,
            DevId: null,
            SteamId: "steam" === a.platform ? a.platformId : null,
            EpicId: "epic" === a.platform ? a.platformId : null,
            NintendoId: null,
            XboxLiveId: null,
            PSNAccountId: null,
            PSNOnlineId: null,
            Version: pE,
          });
        try {
          const a = kI(e, t);
          return a ? Promise.resolve(a) : Promise.reject("No value");
        } catch (e) {
          return Promise.reject(e);
        }
      }),
    )
  )
    .map((e) => {
      if ("fulfilled" !== e.status)
        return void (
          "ENOENT" === e.reason.code &&
          Ad(
            "error",
            `No such profile ${yh.default.basename(e.reason.path, ".json")}`,
          )
        );
      const a = [
        "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "a38faeaa-5b5b-4d7e-af90-329e98a26652",
        ...Dh.players.map((e) => e.id),
      ];
      let i = e.value;
      return (
        a.includes(e?.value?.Id) || (i = RE(e.value, t)),
        (i.Extensions = {}),
        i
      );
    })
    .filter(Boolean);
}
function Mh(e) {
  return e instanceof Error ? e.message : String(e);
}
async function Uh(e, t) {
  const a = e.ContractSessionId,
    i = e.Value.LastEventToken,
    r = e.Value.Name;
  if (!Xm.has(a))
    throw new Error("the session does not exist in the server's memory", {
      cause: "non-existent",
    });
  if (
    (t.Extensions.Saves || (t.Extensions.Saves = {}), r in t.Extensions.Saves)
  ) {
    const a = e.TimeStamp - t.Extensions.Saves[r].Timestamp;
    if (0 === a)
      throw new Error(
        "the client is accessing /ProfileService/UpdateUserSaveFileTable with nothing updated.",
        { cause: "cause uninvestigated" },
      );
    if (a < 0)
      throw new Error(`there is a newer save in slot ${r}`, {
        cause: "outdated",
      });
    try {
      await qI(
        r +
          "_" +
          t.Extensions.Saves[r].Token +
          "_" +
          t.Extensions.Saves[r].ContractSessionId,
      );
    } catch (e) {
      Ad("debug", `Failed to delete old ${r} save. ${Mh(e)}.`);
    }
  }
  (await VI(r + "_" + i + "_" + a, Xm.get(a)),
    Ad(
      "debug",
      `Saved contract to slot ${r} with token = ${i}, session id = ${a}, start time = ${Xm.get(a).timerStart}.`,
    ));
}
async function wh(e, t, a, i) {
  if (!i)
    try {
      i = await jI(t + "_" + e);
    } catch (t) {
      if (!Xm.has(e)) throw t;
      i = Xm.get(e);
    }
  Nh.default.ok(i, "should have session data");
  for (const e in i.challengeContexts) {
    const t = jb.challengeService.getChallengeById(e, i.gameVersion);
    (Nh.default.ok(t, `session has context for unregistered challenge ${e}`),
      jb.challengeService.needSaveProgression(t) &&
        ((a.Extensions.ChallengeProgression[e] ??= {
          CurrentState: "Start",
          State: YE(t.Definition?.Context || {}),
          Completed: !1,
          Ticked: !1,
        }),
        (i.challengeContexts[e].context =
          a.Extensions.ChallengeProgression[e].State),
        (i.challengeContexts[e].state =
          a.Extensions.ChallengeProgression[e].CurrentState)));
  }
  (Xm.set(e, i),
    Ad(
      "debug",
      `Loaded contract with token = ${t}, session id = ${e}, start time = ${Xm.get(e).timerStart}.`,
    ));
}
(Rh.post("/AuthenticationService/GetBlobOfflineCacheDatabaseDiff", (e, t) => {
  const a = [];
  (Pb.hooks.getDatabaseDiff.call(a, e.gameVersion), t.json(a));
}),
  Rh.post("/ProfileService/SetClientEntitlements", (e, t) => {
    t.json("null");
  }),
  Rh.post("/ProfileService/GetPlatformEntitlements", (0, Sh.json)(), lA),
  Rh.post("/ProfileService/UpdateProfileStats", (0, Sh.json)(), (e, t) => {
    if (e.jwt.unique_name !== e.body.id) return t.status(403).end();
    const a = kI(e.jwt.unique_name, e.gameVersion);
    ((a.Gamertag = e.body.gamerTag),
      (a.Extensions.achievements = e.body.achievements),
      KI(e.jwt.unique_name, e.gameVersion),
      t.status(204).end());
  }),
  Rh.post("/ProfileService/SynchronizeOfflineUnlockables", (e, t) => {
    t.status(204).end();
  }),
  Rh.post("/ProfileService/GetUserConfig", (e, t) => {
    t.json({});
  }),
  Rh.post("/ProfileService/GetProfile", (0, Sh.json)(), (e, t) => {
    if (e.body.id !== e.jwt.unique_name)
      return (
        t.status(403).end(),
        void Ad(
          "warn",
          `Profile request mismatch (malicious?) - issuer: ${e.jwt.unique_name} victim: ${e.body.id}`,
        )
      );
    const a = kI(e.jwt.unique_name, e.gameVersion),
      i = e.body.extensions.reduce(
        (e, t) => (a.Extensions[t] && (e[t] = a.Extensions[t]), e),
        {},
      );
    (t.setHeader("Content-Type", "application/json"),
      t.json({ ...a, Extensions: i }));
  }),
  Rh.post("/UnlockableService/GetInventory", (e, t) => {
    t.json(iE(e.jwt.unique_name, e.gameVersion));
  }),
  Rh.post("/ProfileService/UpdateExtensions", (0, Sh.json)(), (e, t) => {
    if (e.body.id !== e.jwt.unique_name) return void t.status(403).end();
    const a = kI(e.jwt.unique_name, e.gameVersion);
    for (const t in e.body.extensionsData)
      Object.hasOwn(e.body.extensionsData, t) &&
        (a.Extensions[t] = e.body.extensionsData[t]);
    (KI(e.jwt.unique_name, e.gameVersion), t.json(e.body.extensionsData));
  }),
  Rh.post("/ProfileService/SynchroniseGameStats", (0, Sh.json)(), (e, t) => {
    if (e.body.profileId !== e.jwt.unique_name) return void t.status(403).end();
    ((kI(
      e.jwt.unique_name,
      e.gameVersion,
    ).Extensions.gamepersistentdata.__stats = e.body.localStats),
      KI(e.jwt.unique_name, e.gameVersion),
      t.json({
        Inventory: iE(e.jwt.unique_name, e.gameVersion),
        Stats: e.body.localStats,
      }));
  }),
  Rh.post("/ProfileService/ResolveProfiles", (0, Sh.json)(), async (e, t) => {
    t.json(await Ph(e.body.profileIDs, e.gameVersion));
  }),
  Rh.post("/ProfileService/ResolveGamerTags", (0, Sh.json)(), async (e, t) => {
    if (!Array.isArray(e.body.profileIds))
      return void t.status(400).send("bad body");
    const a = await Ph(e.body.profileIds, e.gameVersion),
      i = { steam: {}, epic: {}, dev: {} };
    for (const e of a)
      if (e.LinkedAccounts.dev) i.dev[e.Id] = "";
      else if (e.Gamertag) {
        if (e.EpicId) {
          i.epic[e.Id] = e.Gamertag;
          continue;
        }
        i.steam[e.Id] = e.Gamertag;
      }
    t.json(i);
  }),
  Rh.post("/ProfileService/GetFriendsCount", (e, t) => {
    t.send("0");
  }),
  Rh.post("/GamePersistentDataService/GetData", (0, Sh.json)(), (e, t) => {
    if (e.jwt.unique_name !== e.body.userId) return t.status(403).end();
    const a = kI(e.body.userId, e.gameVersion);
    t.json(a.Extensions.gamepersistentdata[e.body.key]);
  }),
  Rh.post("/GamePersistentDataService/SaveData", (0, Sh.json)(), (e, t) => {
    if (e.jwt.unique_name !== e.body.userId) return t.status(403).end();
    ((kI(e.body.userId, e.gameVersion).Extensions.gamepersistentdata[
      e.body.key
    ] = e.body.data),
      KI(e.body.userId, e.gameVersion),
      t.json(null));
  }),
  Rh.post(
    "/ChallengesService/GetActiveChallengesAndProgression",
    (0, Sh.json)(),
    (e, t) => {
      if (!cE.test(e.body.contractId))
        return t.status(404).send("invalid contract");
      const a = jb.resolveContract(e.body.contractId, e.gameVersion, !0);
      if (!a)
        return (
          Ad("error", `Unknown contract in GACP: ${e.body.contractId}`),
          t.status(404).send("contract not found")
        );
      if ("creation" === a.Metadata.Type) return t.json([]);
      let i = Kd("GlobalChallenges", e.gameVersion, !0)
        .filter((e) => mf(e.InclusionData, a))
        .map((e) => ({ Challenge: e, Progression: void 0 }));
      (i.push(
        ...Object.values(
          jb.challengeService.getChallengesForContract(
            a.Metadata.Id,
            e.gameVersion,
            e.jwt.unique_name,
            e.body.difficultyLevel,
          ),
        )
          .flat()
          .map((t) =>
            If(
              t,
              jb.challengeService.getPersistentChallengeProgression(
                e.jwt.unique_name,
                t.Id,
                e.gameVersion,
              ),
            ),
          ),
      ),
        a.Metadata.NonTargetKillsAllowed &&
          (i = i.filter(
            (e) => "f929efad-5d5e-4fcb-9c4e-6eb61a01412c" !== e.Challenge.Id,
          )));
      const r = Rd("gameplayUnlockAllShortcuts");
      for (const t of i)
        r && t.Challenge.Tags?.includes("shortcut")
          ? (t.Progression = {
              ChallengeId: t.Challenge.Id,
              ProfileId: e.jwt.unique_name,
              Completed: !0,
              Ticked: !0,
              State: { CurrentState: "Success" },
              CompletedAt: new Date(new Date() - 10).toISOString(),
              MustBeSaved: !1,
            })
          : (t.Progression = Object.assign(
              {
                ChallengeId: t.Challenge.Id,
                ProfileId: e.jwt.unique_name,
                Completed: !1,
                State: {},
                ETag: `W/"datetime'${encodeURIComponent(new Date().toISOString())}'"`,
                CompletedAt: null,
                MustBeSaved: !1,
              },
              t.Progression,
            ));
      t.json(i);
    },
  ),
  Rh.post("/ChallengesService/GetProgression", (0, Sh.json)(), (e, t) => {
    if (!Array.isArray(e.body.challengeids))
      return void t.status(400).send("invalid body");
    if (e.jwt.unique_name !== e.body.profileid)
      return void t.status(403).send("unauthorised");
    const a = [];
    for (const t of e.body.challengeids) {
      if (!jb.challengeService.getChallengeById(t, e.gameVersion)) {
        Ad("error", `Unknown challenge in CSGP: ${t}`);
        continue;
      }
      const i = jb.challengeService.getPersistentChallengeProgression(
        e.jwt.unique_name,
        t,
        e.gameVersion,
      );
      a.push({
        ChallengeId: t,
        ProfileId: e.jwt.unique_name,
        State: i.State,
        CompletedAt: i.CompletedAt,
        Completed: i.Completed,
      });
    }
    t.json(a);
  }),
  Rh.post("/HubPagesService/GetChallengeTreeFor", (0, Sh.json)(), (e, t) => {
    t.json({
      Data: {
        Children: jb.challengeService.getChallengeTreeForContract(
          e.body.contractId,
          e.gameVersion,
          e.jwt.unique_name,
          e.body.difficultyLevel,
        ),
      },
      LevelsDefinition: {
        Location: [0],
        PlayerProfile: {
          Version: 1,
          XpPerLevel: fE,
          MaxLevel: mE(e.gameVersion),
        },
      },
    });
  }),
  Rh.post(
    "/HubPagesService/GetMasteryCompletionDataForLocation",
    (0, Sh.json)(),
    (e, t) => {
      t.json({
        CompletionData: yA(
          e.body.locationId,
          e.jwt.unique_name,
          e.gameVersion,
          void 0,
          e.body.difficulty,
        ),
      });
    },
  ),
  Rh.post("/DefaultLoadoutService/Set", (0, Sh.json)(), async (e, t) => {
    if ("PROFILES" === Rd("loadoutSaving")) {
      let t = yT.getLoadoutFor(e.gameVersion);
      (t || (t = yT.createDefault(e.gameVersion)),
        (t.data[e.body.location] = e.body.loadout),
        await yT.save());
    } else {
      const t = kI(e.jwt.unique_name, e.gameVersion);
      (void 0 === t.Extensions.defaultloadout &&
        (t.Extensions.defaultloadout = {}),
        (t.Extensions.defaultloadout[e.body.location] = e.body.loadout),
        KI(e.jwt.unique_name, e.gameVersion));
    }
    t.status(204).end();
  }),
  Rh.post(
    "/ProfileService/UpdateUserSaveFileTable",
    (0, Sh.json)(),
    async (e, t) => {
      if (e.body.clientSaveFileList.length > 0) {
        const t = e.body.clientSaveFileList.reduce((e, t) =>
            e.TimeStamp > t.TimeStamp ? e : t,
          ),
          a = kI(e.jwt.unique_name, e.gameVersion);
        try {
          (await Uh(t, a),
            a.Extensions.Saves || (a.Extensions.Saves = {}),
            (a.Extensions.Saves[t.Value.Name] = {
              Timestamp: t.TimeStamp,
              ContractSessionId: t.ContractSessionId,
              Token: t.Value.LastEventToken,
            }),
            KI(e.jwt.unique_name, e.gameVersion));
        } catch (e) {
          "cause uninvestigated" ===
          (function (e) {
            return e instanceof Error ? e.cause : String(e);
          })(e)
            ? Ad("debug", `${Mh(e)}`)
            : Ad(
                "debug",
                `Unable to save session ${t?.ContractSessionId} because ${Mh(e)}.`,
                "updateSaves",
              );
        }
      }
      t.status(204).end();
    },
  ),
  Rh.post("/ContractSessionsService/Load", (0, Sh.json)(), async (e, t) => {
    const a = kI(e.jwt.unique_name, e.gameVersion);
    if (e.body.contractSessionId && e.body.saveToken && e.body.contractId) {
      try {
        await wh(e.body.contractSessionId, e.body.saveToken, a);
      } catch (t) {
        (Ad(
          "debug",
          `Failed to load contract with token = ${e.body.saveToken}, session id = ${e.body.contractSessionId} because ${t?.message}`,
        ),
          Ad(
            "warn",
            "No such save detected! Might be an official servers save.",
          ),
          Ad(
            "warn",
            "Creating a fake session to avoid problems... scoring will not work!",
          ),
          Zm(
            e.body.contractSessionId,
            e.body.contractId,
            e.jwt.unique_name,
            e.body.difficultyLevel,
            e.gameVersion,
            !1,
          ));
      }
      t.send(`"${e.body.contractSessionId}"`);
    } else t.status(400).send("bad body");
  }),
  Rh.post("/ProfileService/GetSemLinkStatus", (0, Sh.json)(), (e, t) => {
    t.json({
      IsConfirmed: !0,
      LinkedEmail: "mail@example.com",
      IOIAccountId: UE,
      IOIAccountBaseUrl: "https://account.ioi.dk",
    });
  }),
  Rh.post("/ProfileService/GetSemLinkStatus", (0, Sh.json)(), (e, t) => {
    t.json(tT.getCommandStatus());
  }),
  Rh.post("/ProfileService/SubmitSemEmail", (0, Sh.json)(), (e, t) => {
    t.json(tT.submitCommands(e.body.email));
  }));
var Gh = f(require("assert"));
async function vh(e, t, a, i) {
  const r = Qd("Entrances", !1),
    s = Qd("MissionStories", !1),
    o = kI(a, i);
  for (const e in o.Extensions.opportunityprogression)
    Object.keys(s).includes(e) && (s[e].PreviouslyCompleted = !0);
  let n = jb.resolveContract(e, i);
  if (!n) return { error: !0 };
  if (t) {
    const t = n.Metadata.InGroup ?? n.Metadata.Id;
    (jb.hooks.onEscalationReset.call(t), gA(o, t), KI(a, i));
    const r = jb.escalationMappings.get(t);
    if (!r)
      return (Ad("error", `Unknown escalation group: ${t}`), { error: !0 });
    ((e = r[1]), (n = jb.resolveContract(e, i)));
  }
  if (!n)
    return (Ad("error", `Not found: ${e}, planning regular.`), { error: !0 });
  const c = {
      GroupId: void 0,
      GroupTitle: void 0,
      CompletedLevels: void 0,
      Completed: void 0,
      TotalLevels: void 0,
      BestScore: void 0,
      BestPlayer: void 0,
      BestLevel: void 0,
    },
    l = fA.includes(n.Metadata.Type),
    d = n.Metadata.InGroup ?? n.Metadata.Id;
  if (l) {
    const t = jb.resolveContract(d, i);
    if (!t)
      return (
        Ad("error", `Not found: ${e}, planning esc group`),
        { error: !0 }
      );
    const a = mA(o, d),
      r = o.Extensions.PeacockCompletedEscalations.includes(d);
    if (
      ((c.GroupId = d),
      (c.GroupTitle = t.Metadata.Title),
      (c.CompletedLevels = r ? a : a - 1),
      (c.Completed = r),
      (c.TotalLevels = CA(t)),
      (c.BestScore = 0),
      (c.BestPlayer = UE),
      (c.BestLevel = 0),
      !n.Metadata.InGroup)
    ) {
      const e = n.Metadata.GroupDefinition?.Order[a - 1];
      ((0, Gh.default)("string" == typeof e, "newLevelId is not a string"),
        (n = jb.resolveContract(e, i)));
    }
  }
  if (!n) return (Ad("error", `Unknown contract: ${e}`), { error: !0 });
  const u = (
      await Ph(
        [
          n.Metadata.CreatorUserId || "",
          "fadb923c-e6bb-4283-a537-eb4d1150262e",
        ],
        i,
      )
    )[0],
    p = n.Metadata.ScenePath.toLowerCase();
  Ad(
    "debug",
    `Looking up details for contract - Location:${n.Metadata.Location} (${p})`,
  );
  const $ = TA(n, i);
  if ((Gh.default.ok($, "contract sublocation is null"), !r[p]))
    return (
      Ad("error", `Could not find Entrance data for ${p} in planning`),
      { error: !0 }
    );
  const _ = r[p],
    I = iE(a, i, $, n.Metadata.LocationSuitOverride),
    A = I.filter((e) => "access" === e.Unlockable.Type)
      .map((e) => e.Unlockable)
      .filter((e) => e.Properties.RepositoryId);
  if (!A)
    return (
      Ad(
        "error",
        "No matching entrance data found in planning, this is a bug!",
      ),
      { error: !0 }
    );
  $.DisplayNameLocKey = `UI_${$.Id}_NAME`;
  const f = yT.getLocationLoadout(a, i, $, n.Metadata.LocationSuitOverride),
    m = I.find((e) => e.Unlockable.Id === f.briefcase?.unlockableId),
    g = SA(n, a, i),
    C = Th(a, i, n);
  if ("scpc" === i)
    for (const e of C) {
      ((e.LoadoutData = e.Loadout.LoadoutData), delete e.Loadout);
    }
  let b = [
    { SlotName: "carriedweapon", SlotId: "0", Recommended: null },
    { SlotName: "carrieditem", SlotId: "1", Recommended: null },
    {
      SlotName: "concealedweapon",
      SlotId: "2",
      Recommended: {
        item:
          !0 === n.Peacock?.noCarriedWeapon
            ? null
            : I.find((e) => e.Unlockable.Id === f.loadout[2]),
        type: "concealedweapon",
      },
    },
    {
      SlotName: "disguise",
      SlotId: "3",
      Recommended: {
        item: I.find((e) => e.Unlockable.Id === f.loadout[3]),
        type: "disguise",
      },
    },
    {
      SlotName: "gear",
      SlotId: "4",
      Recommended: {
        item:
          !0 === n.Peacock?.noGear
            ? null
            : I.find((e) => e.Unlockable.Id === f.loadout[4]),
        type: "gear",
      },
    },
    {
      SlotName: "gear",
      SlotId: "5",
      Recommended: {
        item:
          !0 === n.Peacock?.noGear
            ? null
            : I.find((e) => e.Unlockable.Id === f.loadout[5]),
        type: "gear",
      },
    },
    { SlotName: "stashpoint", SlotId: "6", Recommended: null },
    f.briefcase &&
      m && {
        SlotName: f.briefcase.unlockableId,
        SlotId: f.briefcase.id,
        Recommended: {
          item: { ...m, Properties: {} },
          type: m.Unlockable.Id,
          owned: !0,
        },
        IsContainer: !0,
      },
  ].filter(Boolean);
  if ($?.Properties?.LimitedLoadout && Rd("enableMasteryProgression")) {
    const e = eE(
      "h1" === i
        ? $?.Properties?.NormalLoadoutUnlock[n.Metadata.Difficulty ?? "normal"]
        : $?.Properties?.NormalLoadoutUnlock,
      i,
    );
    if (e) {
      const t = jb.masteryService.getMasteryForUnlockable(e, i);
      (t?.SubPackageId
        ? o.Extensions.progression.Locations[t.Location][t.SubPackageId]
        : o.Extensions.progression.Locations[t?.Location]
      ).Level < (t?.Level || 0) &&
        (b = b.filter((e) => !["2", "4", "5"].includes(e?.SlotId)));
    }
  }
  return {
    Contract: n,
    ElusiveContractState: "not_completed",
    UserCentric: g,
    IsFirstInGroup: !l || 0 === c.CompletedLevels,
    Creator: u,
    UserContract: "IOI" !== u.DevId,
    UnlockedEntrances:
      "sniper" === n.Metadata.Type
        ? null
        : I.filter((e) => "startinglocation" === e.Unlockable.Subtype)
            .filter(
              (e) =>
                e.Unlockable.Properties.Difficulty === n.Metadata.Difficulty,
            )
            .map((e) => e.Unlockable.Properties.RepositoryId)
            .filter(Boolean),
    UnlockedAgencyPickups:
      "sniper" === n.Metadata.Type
        ? null
        : I.filter((e) => "agencypickup" === e.Unlockable.Type)
            .filter(
              (e) =>
                e.Unlockable.Properties.Difficulty === n.Metadata.Difficulty,
            )
            .map((e) => e.Unlockable.Properties.RepositoryId)
            .filter(Boolean),
    Objectives: LA(
      n.Data.Objectives,
      n.Data.GameChangers || [],
      n.Metadata.GroupObjectiveDisplayOrder || [],
    ),
    GroupData: c,
    Entrances:
      "sniper" === n.Metadata.Type
        ? null
        : A.filter((e) => _.includes(e.Properties.RepositoryId || ""))
            .filter((e) => e.Properties.Difficulty === n.Metadata.Difficulty)
            .sort(KE),
    Location: $,
    LoadoutData: "sniper" === n.Metadata.Type ? null : b,
    LimitedLoadoutUnlockLevel:
      {
        LOCATION_MIAMI: 2,
        LOCATION_HOKKAIDO: 20,
        LOCATION_HOKKAIDO_MAMUSHI: 20,
      }[$.Id] ?? 0,
    CharacterLoadoutData: 0 !== C.length ? C : null,
    ChallengeData: {
      Children: jb.challengeService.getChallengeTreeForContract(e, i, a),
    },
    Currency: { Balance: 0 },
    PaymentDetails: {
      Currency: "Merces",
      Amount: 0,
      MaximumDeduction: 85,
      Bonuses: null,
      Expenses: null,
      Entrance: null,
      Pickup: null,
      SideMission: null,
    },
    OpportunityData: (n.Metadata.Opportunities || [])
      .map((e) => s[e])
      .filter(Boolean),
    PlayerProfileXpData: {
      XP: o.Extensions.progression.PlayerProfileXP.Total,
      Level: o.Extensions.progression.PlayerProfileXP.ProfileLevel,
      MaxLevel: mE(i),
    },
  };
}
var Bh = {};
function kh(e, t) {
  const a = Kd("LookupContractFavoriteTemplate", e.gameVersion, !1);
  if (!e.query.contractId) return void t.status(400).send("no contract id");
  const i = jb.resolveContract(e.query.contractId, e.gameVersion);
  if (!i) return void t.status(404).send("contract does not exist!");
  const r = eE(i.Metadata.Location, e.gameVersion),
    s = Hh(e.jwt.unique_name, e.query.contractId, e.gameVersion),
    o = {
      template: a,
      data: {
        Contract: i,
        Location: r,
        UserCentricContract: SA(i, e.jwt.unique_name, e.gameVersion),
      },
      ...(s && { AddedSuccessfully: !0 }),
    };
  t.json(o);
}
function Hh(e, t, a) {
  let i = !1;
  const r = kI(e, a);
  return (
    Array.isArray(r.Extensions.PeacockFavoriteContracts) ||
      (r.Extensions.PeacockFavoriteContracts = []),
    r.Extensions.PeacockFavoriteContracts.includes(t)
      ? (r.Extensions.PeacockFavoriteContracts =
          r.Extensions.PeacockFavoriteContracts.filter((e) => e !== t))
      : (r.Extensions.PeacockFavoriteContracts.push(t), (i = !0)),
    KI(e, a),
    i
  );
}
function Qh(e, t) {
  if (!e.params.contractId) return void t.status(400).send("no contract id");
  jb.resolveContract(e.params.contractId, e.gameVersion)
    ? t.json({
        template: null,
        data: {
          ContractId: e.params.contractId,
          IsInPlaylist: Hh(
            e.jwt.unique_name,
            e.params.contractId,
            e.gameVersion,
          ),
        },
      })
    : t.status(404).send("contract does not exist!");
}
function Kh(e, t) {
  const a = kI(e.jwt.unique_name, e.gameVersion),
    i = e.body?.every((e) => a.Extensions.PeacockFavoriteContracts.includes(e));
  (i && e.body?.forEach((t) => Hh(e.jwt.unique_name, t, e.gameVersion)),
    t.json({ template: null, data: { ContractIds: e.body, Success: i } }));
}
I(Bh, {
  deleteMultiple: () => Kh,
  directRoute: () => Qh,
  toggleFavorite: () => Hh,
  withLookupDialog: () => kh,
});
var Fh = f(Jr()),
  xh = {};
I(xh, { HitsCategoryService: () => qh, hitsCategoryService: () => Wh });
var Yh = {};
I(Yh, { orderedETs: () => jh });
var jh = [
    "8813e0a4-08ac-494f-a847-687a2da3582f",
    "ff188c8b-e1eb-4c59-af75-6b6fe3da5955",
    "0fd17346-bcb4-4bcc-acc3-5e1b6b184ef4",
    "13680605-83ed-4b8c-a44d-30cc5b4fb17a",
    "0d938ef9-05c7-4eb8-89cc-ae79b73c6992",
    "e87217e3-4809-4855-80d5-74bed66be58d",
    "8f13ea71-b207-4955-9eb8-ede757f3baa6",
    "158b600a-6448-45d3-907f-77351b9656ee",
    "2b928d67-c244-4601-bafb-7af664fb17bb",
    "a9d93d2a-c541-49ab-8ba1-9e345cf7e806",
    "ad549098-eb3d-4132-8ef8-fe77c6afbbaa",
    "16d78245-5392-413c-b3db-989d6685c32a",
    "b0bed170-8652-4188-8b9a-92caf9f97e5b",
    "92a87b10-a230-4986-bb35-06f16e84b11f",
    "c3c7126e-32cd-4502-b5ce-90b5ae436806",
    "0dc242ce-084e-4f6d-980f-e65885cd6955",
    "b0b8995c-7b3f-4fa6-91a2-be4bc8edc046",
    "550c4d75-ca87-4be7-a18e-caf30e6c8136",
    "5dc115d3-e5d4-4023-a11a-27c6f7194bea",
    "87f8293a-29cd-4cb1-ade7-dd6bb056d38e",
    "1c0377f3-6e32-4563-8baf-9677cdb3bb60",
    "655c5a57-69d1-48b6-a14b-2ae396c16174",
    "0fea5e55-9aec-41ef-9e5b-4e5e5f536f82",
    "b555d6a4-8b4d-4e1e-b6bd-ebd135ad1e01",
    "deace35f-ab6d-44c9-b1a6-98757e854f74",
    "2e2c3f33-92ad-412f-a351-b7267697ff70",
    "8462b2e5-4d34-4300-896f-fe1dc98fa877",
    "3716b654-a42c-45df-9db9-61795a6a3e46",
    "06a58b66-56f4-45c3-ba1b-d03998212289",
    "654685ab-d52d-49cb-815d-f98ee00454d3",
    "263eca3d-d25d-40ce-ba0a-48a221cd0b9e",
    "44fd7474-d7be-4d3d-b944-6c1cf6ca09d1",
    "ecf353e8-3dd8-4958-b255-f963926aea51",
    "9f5b8d74-1f70-49ea-94e2-21d2de3e5cf3",
    "cbc86bed-51ce-4699-89d4-0ded8f200cbc",
    "92951377-419d-4c31-aa21-2a3f03ef82d0",
    "d030216e-a8d6-4446-a1f6-2fc1a2461464",
    "3f0b8f19-d5d4-4611-ac8f-480f81c18f54",
    "9a36cc55-bfc4-4f8b-99d2-c65cf4de365d",
    "1fcaff1b-7fa3-4b9f-a586-9c7a1689b48d",
    "b2c0251e-1803-4e12-b860-b9fa6ce5c004",
    "6fad7901-279f-45df-ab8d-087a3cb06dcc",
    "1f0f3c70-b559-48ea-aca4-b64c8c762b69",
    "d4a5f21f-3e4d-4226-9769-0fbe2a5e8639",
    "699ec9a3-102e-499b-ad60-6a329cc2054c",
    "685c527d-2da2-49e7-9e9e-bf7f675ea779",
    "7a303745-5d33-4db8-814a-3de1dda00a59",
    "fdb75833-2588-453a-9178-b917b5de952c",
    "ae44d9d6-3795-47b5-ad74-250d8f9aec22",
  ],
  Vh = f(require("assert"));
var qh = class {
    constructor() {
      ((this.paginationExempt = [
        "Elusive_Target_Hits",
        "Arcade",
        "Sniper",
        "ContractAttack",
      ]),
        (this.realtimeFetched = ["Trending", "MostPlayedLastWeek"]),
        (this.filterSupported = ["MyPlaylist", "MyHistory", "MyContracts"]),
        (this.hitsPerPage = 22),
        (this.hitsCategories = new Xl(() => new Jl())),
        this._useDefaultHitsCategories());
    }
    _useDefaultHitsCategories() {
      const e = "HitsCategoryServiceImpl";
      (this.hitsCategories.for("Sniper").tap(e, (e) => {
        (e.push("ff9f46cf-00bd-4c12-b887-eac491c3a96d"),
          e.push("00e57709-e049-44c9-a2c3-7655e19884fb"),
          e.push("25b20d86-bb5a-4ebd-b6bb-81ed2779c180"));
      }),
        this.hitsCategories.for("Elusive_Target_Hits").tap(e, (e, t) => {
          for (const a of jh) {
            const i = jb.resolveContract(a, t);
            switch (t) {
              case "h1":
                1 === i?.Metadata.Season && e.push(a);
                break;
              case "h2":
                (i?.Metadata.Season || 0) <= 2 && e.push(a);
                break;
              case "h3":
                if ("3716b654-a42c-45df-9db9-61795a6a3e46" === a) break;
                e.push(a);
            }
          }
        }),
        this.hitsCategories.for("MyContracts").tap(e, (e, t, a, i) => {
          this.writeMyContracts(t, e, a, i);
        }),
        this.hitsCategories.for("Featured").tap(e, (e, t) => {
          const a = "ee0411d6-b3e7-4320-b56b-25c45d8a9d61",
            i = YE(Gb);
          for (const r of i)
            ("h1" === t &&
              r.includes(a) &&
              r.splice(
                r.findIndex((e) => e === a),
                1,
              ),
              e.push(...r));
        }),
        this.hitsCategories.for("MyPlaylist").tap(e, (e, t, a, i) => {
          e.push(...this.getMyPlaylist(t, a, i));
        }),
        this.hitsCategories.for("MyHistory").tap(e, (e, t, a, i) => {
          e.push(...this.getMyHistory(t, a, i));
        }),
        this.hitsCategories.for("Arcade").tap(e, (e, t) => {
          "h3" === t && e.push(...pb);
        }),
        this.hitsCategories.for("ContractAttack").tap(e, (e, t) => {
          const a = [];
          for (const i of Object.values(jb.missionsInLocation[t].escalations))
            for (const r of i) {
              const i = jb.resolveContract(r, t);
              if (!i) continue;
              if (-1 === i.Metadata.Season) continue;
              const s = 0 === i.Metadata.Season,
                o = s ? i.Metadata.OriginalSeason : i.Metadata.Season;
              switch (t) {
                case "h1":
                  if (0 === i.Metadata.Season) break;
                  1 === o && e.push(r);
                  break;
                case "h2":
                  (o || 0) <= 2 && (s ? e : a).push(r);
                  break;
                default:
                  (s ? e : a).push(r);
              }
            }
          e.push(...a);
        }));
    }
    async fetchFromOfficial(e, t, a, i) {
      const r = _E(a),
        s = YA.get(i);
      if (!s) return void Ad("warn", `No authentication for user ${i}!`);
      const o = await s._useService(
          `https://${r}.hitman.io/profiles/page/HitsCategory?page=${t}&type=${e}&mode=dataonly`,
          !0,
        ),
        n = o.data.data.Data.Hits;
      Yb(
        n
          .map((e) => e.UserCentricContract.Contract.Metadata.PublicId)
          .filter(Boolean),
        a,
      );
      const c = kI(i, a),
        l = c?.Extensions.PeacockPlayedContracts,
        d = c?.Extensions.PeacockFavoriteContracts;
      for (const e of n)
        (Object.keys(l).includes(e.Id)
          ? ((e.UserCentricContract.Data.LastPlayedAt = new Date(
              l[e.Id].LastPlayedAt || 0,
            ).toISOString()),
            (e.UserCentricContract.Data.Completed = l[e.Id].Completed))
          : (delete e.UserCentricContract.Data.LastPlayedAt,
            (e.UserCentricContract.Data.Completed = !1)),
          e.UserCentricContract.Data.PlaylistData &&
            (e.UserCentricContract.Data.PlaylistData.IsAdded = d.includes(
              e.Id,
            )),
          jb.contracts.has(e.UserCentricContract.Contract.Metadata.Id) ||
            (await jb.commitNewContract(e.UserCentricContract.Contract)));
      return o.data.data;
    }
    writeMyContracts(e, t, a, i) {
      const r = kI(a, e),
        s = r?.Extensions.PeacockPlayedContracts;
      for (const e of jb.contracts.values())
        this.isContractOfType(s, i, e.Metadata.Id) && t.push(e.Metadata.Id);
    }
    getMyPlaylist(e, t, a) {
      const i = kI(t, e),
        r = i?.Extensions.PeacockPlayedContracts;
      return (i?.Extensions.PeacockFavoriteContracts ?? []).filter((e) =>
        this.isContractOfType(r, a, e),
      );
    }
    getOrSetDefaultFilter(e, t, a, i) {
      if (!this.filterSupported.includes(i)) return;
      const r = kI(t, e);
      return (
        "default" === a
          ? (a = r.Extensions.gamepersistentdata.HitsFilterType[i])
          : ((r.Extensions.gamepersistentdata.HitsFilterType[i] = a), KI(t, e)),
        a
      );
    }
    getMyHistory(e, t, a) {
      const i = kI(t, e),
        r = i?.Extensions.PeacockPlayedContracts;
      return Object.keys(r)
        .filter((e) => this.isContractOfType(r, a, e))
        .sort((e, t) => (r[t].LastPlayedAt || 0) - (r[e].LastPlayedAt || 0));
    }
    isContractOfType(e, t, a) {
      switch (t) {
        case "completed":
          return Boolean(e[a]?.Completed && !e[a]?.IsEscalation);
        case "failed":
          return (
            void 0 !== e[a] && void 0 === e[a].Completed && !e[a]?.IsEscalation
          );
        case "all":
          return !e[a]?.IsEscalation;
        default:
          Vh.default.fail("Invalid type passed to isContractOfType");
      }
    }
    async paginateHitsCategory(e, t, a, i) {
      if (this.realtimeFetched.includes(e))
        return await this.fetchFromOfficial(e, t, a, i);
      const r = e.split("_"),
        s = "Elusive_Target_Hits" === e ? e : r[0];
      let o = 2 === r.length ? r[1] : "default";
      o = this.getOrSetDefaultFilter(a, i, o, s);
      const n = {
          Category: s,
          Data: { Type: s, Hits: [], Page: t, HasMore: !1 },
          CurrentSubType: "",
        },
        c = [];
      this.hitsCategories.for(s).call(c, a, i, o);
      const l = c.map((e) => xb(e, a, i)).filter(Boolean);
      if (this.paginationExempt.includes(s))
        ((n.Data.Hits = l), (n.CurrentSubType = s));
      else {
        const a = (function (e, t) {
          const a = e.length,
            i = Math.ceil(a / t),
            r = [];
          let s = [],
            o = 0,
            n = 0,
            c = 0;
          for (let l = 0; l < i; l++) {
            0 === l && ((o = 0), (n = t));
            for (let t = o; t < n && e[t]; t++) s.push(e[t]);
            (r.push(s),
              0 === l ? (c = a - s.length) : (c -= s.length),
              c > 0 &&
                (c > t ? ((o += t), (n += t)) : ((o += s.length), (n += c))),
              (s = []));
          }
          return r;
        })(l, this.hitsPerPage);
        ((n.Data.Hits = a[t]),
          (n.Data.HasMore = a.length > t + 1),
          (n.CurrentSubType = o ? `${s}_${o}` : e));
      }
      return n;
    }
  },
  Wh = new qh(),
  Xh = f(require("assert")),
  zh = {};
async function Jh(e, t, a, i, r) {
  let s = "unset";
  const o = jb.resolveContract(e, a);
  if (!o) return;
  const n = parseInt(i || "0");
  (n === kE.casual && (s = "casual"),
    n === kE.normal && (s = "normal"),
    n === kE.master && (s = "master"));
  const c = {
      Entries: [],
      Contract: o,
      Page: r,
      HasMore: !1,
      LeaderboardType: "singleplayer",
    },
    l = Rd("leaderboardsHost"),
    d = (
      await O_.get(`${l}/leaderboards/contracts/${e}/${a}/${t}/${s}/entries`, {
        params: { page: r + 1 },
        headers: { "Peacock-Version": nE },
      })
    ).data;
  100 === d.length && (c.HasMore = !0);
  const u = d.map((e) =>
    Dh.index(e.LeaderboardData.Player.displayName, t, e.platformId),
  );
  return (
    d.forEach((e, t) => {
      e.LeaderboardData.Player = u[t];
    }),
    (c.Entries = d),
    c
  );
}
I(zh, { getLeaderboardEntries: () => Jh });
var Zh = {};
I(Zh, {
  getLegacyStashData: () => rO,
  getLegacyStashItems: () => iO,
  getModernStashData: () => aO,
  getModernStashItemsData: () => tO,
  getSafehouseCategory: () => sO,
});
var eO = f(require("assert"));
function tO(e, t, a, i) {
  let r;
  return (
    (r = cE.test(t.slotid) ? "container" : TT[t.slotid]),
    e
      .filter(
        (e) =>
          !(
            ("gear" === r && !0 === i?.Peacock?.noGear) ||
            ("concealedweapon" === r && !0 === i?.Peacock?.noCarriedWeapon)
          ) &&
          ("disguise" !== e.Unlockable.Subtype || "h3" !== a) &&
          e.Unlockable.Properties.LoadoutSlot &&
          ((("container" === r || "stashpoint" === r) &&
            "disguise" !== e.Unlockable.Properties.LoadoutSlot) ||
            e.Unlockable.Properties.LoadoutSlot === r) &&
          ("true" === t.allowcontainers ||
            !e.Unlockable.Properties.IsContainer) &&
          ("true" === t.allowlargeitems ||
            "ITEMSIZE_SMALL" === e.Unlockable.Properties.ItemSize ||
            (!e.Unlockable.Properties.ItemSize &&
              "carriedweapon" !== e.Unlockable.Properties.LoadoutSlot)) &&
          "challengemultiplier" !== e.Unlockable.Type &&
          !e.Unlockable.Properties.InclusionData,
      )
      .map((e) => ({
        Item: e,
        ItemDetails: {
          Capabilities: [],
          StatList: e.Unlockable.Properties.Gameplay
            ? Object.entries(e.Unlockable.Properties.Gameplay).map(
                ([e, t]) => ({ Name: e, Ratio: t }),
              )
            : [],
          PropertyTexts: [],
        },
        SlotId: t.slotid,
        SlotName: null,
      }))
  );
}
function aO(e, t, a) {
  let i;
  e.contractid && (i = jb.resolveContract(e.contractid, a));
  const r = iE(
      t,
      a,
      hA(i?.Metadata.Location || "", a),
      i?.Metadata.LocationSuitOverride,
    ),
    s = {
      SlotId: e.slotid,
      LoadoutItemsData: {
        SlotId: e.slotid,
        Items: tO(r, e, a, i),
        Page: 0,
        HasMore: !1,
        HasMoreLeft: !1,
        HasMoreRight: !1,
        OptionalData: {
          stashpoint: e.stashpoint || "",
          AllowLargeItems: e.allowlargeitems,
          AllowContainers: e.allowcontainers,
        },
      },
      ShowSlotName: e.slotname,
    };
  return (i && (s.UserCentric = SA(i, t, a)), s);
}
function iO(e, t, a, i) {
  return e
    .filter(
      (e) =>
        e.Unlockable.Properties.LoadoutSlot &&
        (e.Unlockable.Properties.LoadoutSlot === t ||
          ("stashpoint" === t &&
            "disguise" !== e.Unlockable.Properties.LoadoutSlot)) &&
        ("true" === a.allowlargeitems ||
          "ITEMSIZE_SMALL" === e.Unlockable.Properties.ItemSize ||
          (!e.Unlockable.Properties.ItemSize &&
            "carriedweapon" !== e.Unlockable.Properties.LoadoutSlot)) &&
        "challengemultipler" !== e.Unlockable.Type &&
        !e.Unlockable.Properties.InclusionData,
    )
    .map((e) => ({
      Item: e,
      ItemDetails: {
        Capabilities: [],
        StatList: e.Unlockable.Properties.Gameplay
          ? Object.entries(e.Unlockable.Properties.Gameplay).map(([e, t]) => ({
              Name: e,
              Ratio: t,
            }))
          : [],
        PropertyTexts: [],
      },
      SlotId: i.toString(),
      SlotName: t,
    }));
}
function rO(e, t, a) {
  if (!e.contractid || !e.slotname) return;
  const i = jb.resolveContract(e.contractid, a);
  if (!i) return;
  if (!TT.includes(e.slotname.slice(0, -1)))
    return void Ad(
      "error",
      `Unknown slotname in legacy stashpoint: ${e.slotname}`,
    );
  const r = hA(i.Metadata.Location, a);
  eO.default.ok(r, "Sublocation not found");
  const s = iE(t, a, r, i.Metadata.LocationSuitOverride),
    o = SA(i, t, a),
    n = yT.getLocationLoadout(t, a, r, i.Metadata.LocationSuitOverride);
  return {
    ContractId: e.contractid,
    LoadoutData: [...TT.entries()].map(([t, i]) => ({
      SlotName: i,
      SlotId: t.toString(),
      Items: iO(s, i, e, t),
      Page: 0,
      Recommended: n.loadout[t]
        ? { item: eE(n.loadout[t], a), type: i, owned: !0 }
        : null,
      HasMore: !1,
      HasMoreLeft: !1,
      HasMoreRight: !1,
      OptionalData:
        6 === t
          ? {
              stashpoint: e.stashpoint,
              AllowLargeItems: e.allowlargeitems || !e.stashpoint,
            }
          : {},
    })),
    Contract: o?.Contract,
    ShowSlotName: e.slotname,
    UserCentric: o,
  };
}
function sO(e, t, a) {
  const i = iE(a.unique_name, t);
  let r = { Category: "_root", SubCategories: [], IsLeaf: !1, Data: null };
  for (const a of i) {
    if (e.type) {
      if (a.Unlockable.Type !== e.type) continue;
      if (e.subtype && a.Unlockable.Subtype !== e.subtype) continue;
    } else {
      if (
        "access" === a.Unlockable.Type ||
        "location" === a.Unlockable.Type ||
        "package" === a.Unlockable.Type ||
        "loadoutunlock" === a.Unlockable.Type ||
        "difficultyunlock" === a.Unlockable.Type ||
        "agencypickup" === a.Unlockable.Type ||
        "challengemultiplier" === a.Unlockable.Type ||
        "emote" === a.Unlockable.Type
      )
        continue;
      if (a.Unlockable.Properties.InclusionData) continue;
    }
    if ("disguise" === a.Unlockable.Subtype && "h3" === t) continue;
    let i,
      s = r.SubCategories?.find((e) => e.Category === a.Unlockable.Type);
    (s ||
      ((s = {
        Category: a.Unlockable.Type,
        SubCategories: [],
        IsLeaf: !1,
        Data: null,
      }),
      r.SubCategories?.push(s)),
      (i = s.SubCategories?.find((e) => e.Category === a.Unlockable.Subtype)),
      i ||
        ((i = {
          Category: a.Unlockable.Subtype,
          SubCategories: null,
          IsLeaf: !0,
          Data: {
            Type: a.Unlockable.Type,
            SubType: a.Unlockable.Subtype,
            Items: [],
            Page: 0,
            HasMore: !1,
          },
        }),
        s.SubCategories?.push(i)),
      i.Data?.Items.push({
        Item: a,
        ItemDetails: {
          Capabilities: [],
          StatList: a.Unlockable.Properties.Gameplay
            ? Object.entries(a.Unlockable.Properties.Gameplay).map(
                ([e, t]) => ({ Name: e, Ratio: t }),
              )
            : [],
          PropertyTexts: [],
        },
        Type: a.Unlockable.Type,
        SubType: a.Unlockable.SubType,
      }));
  }
  for (const [e, t] of r.SubCategories?.entries() || [])
    1 === t.SubCategories?.length &&
      ((r.SubCategories[e] = t.SubCategories[0]),
      (r.SubCategories[e].Category = t.Category));
  return (1 === r.SubCategories?.length && (r = r.SubCategories[0]), r);
}
var oO = {};
function nO(e, t, a, i) {
  const r = jb.challengeService.challengePacks.get(a);
  return {
    IsLocked: Boolean(e.Properties.IsLocked),
    Name: r ? r.Name : e.DisplayNameLocKey,
    Image: r ? r.Image : e.Properties.Icon || "",
    Icon: r ? r.Icon : e.Type,
    CompletedChallengesCount: t.CompletedChallengesCount,
    ChallengesCount: t.ChallengesCount,
    CategoryId: a,
    Description: r ? r.Description : `UI_${a}_PRIMARY_DESC`,
    Location: e,
    ImageLocked: e.Properties.LockedIcon || "",
    RequiredResources: e.Properties.RequiredResources || [],
    IsPack: void 0 !== r,
    CompletionData: i || {},
  };
}
function cO(e, t) {
  jf(e);
  const a = kI(t, e),
    i = "scpc" !== e ? jb.resolveContract(uE, e) : void 0,
    r = Kd("LocationsData", e, !0),
    s = {};
  for (const [a, i] of jb.challengeService.challengePacks.entries())
    i.GameVersions.includes(e) &&
      (s[a] = {
        Children: [
          nO(
            r.parents.LOCATION_PARENT_ICA_FACILITY,
            jb.challengeService.countTotalNCompletedChallenges(
              jb.challengeService.getChallengesForGroup(a, e),
              t,
              e,
            ),
            a,
          ),
        ],
        Name: i.Name,
        Location: r.parents.LOCATION_PARENT_ICA_FACILITY,
      });
  const o = [];
  for (const a in r.parents)
    if (
      ((s[a] = {
        Children: [],
        Location: r.parents[a],
        Name: r.parents[a].DisplayNameLocKey,
      }),
      "LOCATION_PARENT_ICA_FACILITY" !== a &&
        jb.masteryService.getMasteryDataForDestination(a, e, t).length)
    ) {
      const i = jb.masteryService.getLocationCompletion(
        a,
        a,
        e,
        t,
        a.includes("SNUG") ? "evergreen" : "mission",
        "h1" === e ? "normal" : void 0,
      );
      o.push({
        CompletionData: i,
        ...("h1" === e
          ? {
              Data: {
                normal: { CompletionData: i },
                pro1: {
                  CompletionData: jb.masteryService.getLocationCompletion(
                    a,
                    a,
                    e,
                    t,
                    a.includes("SNUG") ? "evergreen" : "mission",
                    "pro1",
                  ),
                },
              },
            }
          : {}),
        Id: r.parents[a].Id,
        Image: r.parents[a].Properties.Icon,
        IsLocked: r.parents[a].Properties.IsLocked,
        Location: r.parents[a],
        RequiredResources: r.parents[a].Properties.RequiredResources,
      });
    }
  for (const a in r.children) {
    const i = r.children[a];
    if ("LOCATION_ICA_FACILITY_ARRIVAL" === a || i.Properties.IsHidden)
      continue;
    const o = r.children[a].Properties.ParentLocation,
      n = jb.challengeService.getChallengesForLocation(a, e),
      c = jb.challengeService.countTotalNCompletedChallenges(n, t, e);
    s[o]?.Children.push(nO(i, c, a, yA(a, t, e)));
  }
  return {
    ServerTile: {
      title: "The Peacock Project",
      image: "images/contracts/novikov_and_magolis/tile.jpg",
      icon: "story",
      url: "",
      select: {
        header: "Playing on a Peacock instance",
        title: "The Peacock Project",
        icon: "story",
      },
    },
    DashboardData: [],
    DestinationsData: UT(e, t),
    CreateContractTutorial: SA(i, t, e),
    LocationsData: wT(e, !0),
    ProfileData: {
      ChallengeData: { Children: Object.values(s) },
      MasteryData: o,
    },
    StoryData: om(e, t),
    FilterData: Kd("FilterData", e, !1),
    StoreData: Kd("StoreData", e, !1),
    IOIAccountStatus: {
      IsConfirmed: !0,
      LinkedEmail: "mail@example.com",
      IOIAccountId: "00000000-0000-0000-0000-000000000000",
      IOIAccountBaseUrl: "https://account.ioi.dk",
    },
    FinishedFinalTest: !0,
    Currency: { Balance: 0 },
    PlayerProfileXpData: {
      XP: a.Extensions.progression.PlayerProfileXP.Total,
      Level: a.Extensions.progression.PlayerProfileXP.ProfileLevel,
      MaxLevel: mE(e),
    },
  };
}
I(oO, { getHubData: () => cO });
var lO = {};
function dO(e, t) {
  const a = Qd("PlayerProfilePage", !0),
    i = Kd("LocationsData", e, !1);
  a.SubLocationData = [];
  const r = kI(t, e),
    s = r.Extensions.progression.PlayerProfileXP.Sublocations,
    o = {};
  for (const r in i.children) {
    const n = i.children[r],
      c = i.parents[n.Properties.ParentLocation || ""],
      l = s[r];
    if (
      ((o[c.Id] ??= { Xp: 0, ActionXp: 0 }),
      (o[c.Id].Xp += l?.Xp ?? 0),
      (o[c.Id].ActionXp += l?.ActionXp ?? 0),
      "LOCATION_ICA_FACILITY_ARRIVAL" === r || n.Properties.IsHidden)
    )
      continue;
    const d = yA(n.Id, t, e),
      u = jb.challengeService.getChallengesForLocation(n.Id, e),
      p = [];
    for (const a in u) {
      const i = jb.challengeService.countTotalNCompletedChallenges(
        { challengeGroup: u[a] },
        t,
        e,
      );
      p.push({ Name: u[a][0].CategoryName, ...i });
    }
    const $ = PT(c, n, e, t);
    a.SubLocationData.push({
      ParentLocation: c,
      Location: n,
      CompletionData: d,
      ChallengeCategoryCompletion: p,
      ChallengeCompletion: $.ChallengeCompletion,
      OpportunityStatistics: $.OpportunityStatistics,
      LocationCompletionPercent: $.LocationCompletionPercent,
    });
  }
  ((a.PlayerProfileXp.Total = r.Extensions.progression.PlayerProfileXP.Total),
    (a.PlayerProfileXp.Level =
      r.Extensions.progression.PlayerProfileXP.ProfileLevel),
    "h2" === e &&
      ((a.PlayerProfileXp.Seasons[1].Locations =
        a.PlayerProfileXp.Seasons[1].Locations.filter(
          (e) => "LOCATION_PARENT_ROCKY" !== e.LocationId,
        )),
      a.PlayerProfileXp.Seasons.pop()));
  for (const e of a.PlayerProfileXp.Seasons)
    for (const t of e.Locations) {
      const e = o[t.LocationId];
      ((t.Xp = e?.Xp || 0),
        (t.ActionXp = e?.ActionXp || 0),
        t.LocationProgression &&
          !NE(t.LocationId) &&
          (t.LocationProgression.Level =
            r.Extensions.progression.Locations[t.LocationId].Level || 1));
    }
  return (
    "h2" === e &&
      ((a.PlayerProfileXp.Sublocations = a.PlayerProfileXp.Seasons.reduce(
        (e, t) => e.concat(t.Locations),
        [],
      )),
      delete a.PlayerProfileXp.Seasons),
    a
  );
}
I(lO, { getPlayerProfileData: () => dO });
var uO = (0, xT.Router)(),
  pO = {
    FIREARMS_SC_HERO_SNIPER_HM: "LOCATION_PARENT_AUSTRIA",
    FIREARMS_SC_HERO_SNIPER_KNIGHT: "LOCATION_PARENT_AUSTRIA",
    FIREARMS_SC_HERO_SNIPER_STONE: "LOCATION_PARENT_AUSTRIA",
    FIREARMS_SC_SEAGULL_HM: "LOCATION_PARENT_SALTY",
    FIREARMS_SC_SEAGULL_KNIGHT: "LOCATION_PARENT_SALTY",
    FIREARMS_SC_SEAGULL_STONE: "LOCATION_PARENT_SALTY",
    FIREARMS_SC_FALCON_HM: "LOCATION_PARENT_CAGED",
    FIREARMS_SC_FALCON_KNIGHT: "LOCATION_PARENT_CAGED",
    FIREARMS_SC_FALCON_STONE: "LOCATION_PARENT_CAGED",
  };
function $O(e, t, a, i) {
  const r = Qd("Pickup" === e ? "AgencyPickups" : "Entrances", !1),
    s = iE(a, i),
    o = Kd("allunlockables", i, !1),
    n = jb.resolveContract(t, i);
  if (!n)
    return (Ad("warn", `Unknown contract on select page ${e}: ${t}`), 404);
  const c = n.Metadata.ScenePath.toLowerCase();
  if (
    (Ad("debug", `Looking up details for contract - Id: ${t} (${c})`),
    r[c] ||
      Ad(
        "error",
        `Could not find scene data for ${c} in select page ${e}! This may cause an unhandled promise rejection.`,
      ),
    !0 === n.Peacock?.noAgencyPickupsActive && "Pickup" === e)
  ) {
    const e = {
      Unlocked: [],
      Contract: n,
      OrderedUnlocks: [],
      UserCentric: SA(n, a, i),
    };
    return { template: Kd("SelectAgencyPickupTemplate", i, !1), data: e };
  }
  const l = r[c],
    d = {
      Unlocked: s
        .filter(
          (t) =>
            t.Unlockable["Pickup" === e ? "Type" : "Subtype"] ===
              ("Pickup" === e ? "agencypickup" : "startinglocation") &&
            t.Unlockable.Properties.Difficulty === n.Metadata.Difficulty &&
            t.Unlockable.Properties.RepositoryId,
        )
        .map((e) => e.Unlockable)
        .map((e) => e.Properties.RepositoryId),
      Contract: n,
      OrderedUnlocks: o
        .filter(
          (e) =>
            l.includes(e.Properties.RepositoryId || "") &&
            e.Properties.Difficulty === n.Metadata.Difficulty,
        )
        .map(
          (e) => (
            (e.Properties.UnlockLevel =
              jb.masteryService
                .getMasteryForUnlockable(e, i)
                ?.Level.toString() ?? "1"),
            e
          ),
        )
        .sort(FE)
        .sort(KE),
      UserCentric: SA(n, a, i),
    };
  return {
    template: Kd(
      "Pickup" === e ? "SelectAgencyPickupTemplate" : "SelectEntranceTemplate",
      i,
      !1,
    ),
    data: d,
  };
}
(uO.get("/ChallengeLocation", (e, t) => {
  const a = jb.challengeService.challengePacks.get(e.query.locationId),
    i = Kd("LocationsData", e.gameVersion, !0),
    r = i.children[e.query.locationId];
  if (!a && !r) return void t.status(400).send("Invalid locationId");
  let s;
  if ("h1" === e.gameVersion) {
    const t = a ? void 0 : i.parents[r.Properties.ParentLocation];
    if (t?.Properties.DifficultyUnlock?.pro1) {
      const a = iE(e.jwt.unique_name, e.gameVersion),
        i = jb.challengeService.getChallengeDataForDestination(
          t.Id,
          e.gameVersion,
          e.jwt.unique_name,
          !1,
        ),
        r = jb.challengeService.getChallengeDataForDestination(
          t.Id,
          e.gameVersion,
          e.jwt.unique_name,
          !0,
        );
      s = {
        DifficultyLevelData: [
          { Name: "normal", Available: !0, Data: { Children: i } },
          {
            Name: "pro1",
            Available: a.some(
              (e) => e.Unlockable.Id === t.Properties.DifficultyUnlock?.pro1,
            ),
            Data: { Children: r },
          },
        ],
      };
    } else
      s = {
        DifficultyLevelData: [
          {
            Name: "normal",
            Available: !0,
            Data: {
              Children: jb.challengeService.getChallengeDataForCategory(
                a ? e.query.locationId : null,
                a ? void 0 : r,
                e.gameVersion,
                e.jwt.unique_name,
              ),
            },
          },
        ],
      };
    s = { ...s, Name: a ? a.Name : r.DisplayNameLocKey, Location: r };
  } else
    s = {
      Name: a ? a.Name : r.DisplayNameLocKey,
      Location: r,
      Children: jb.challengeService.getChallengeDataForCategory(
        a ? e.query.locationId : null,
        a ? void 0 : r,
        e.gameVersion,
        e.jwt.unique_name,
      ),
    };
  t.json({
    template: Kd("ChallengeLocationTemplate", e.gameVersion, !1),
    data: s,
  });
}),
  uO.get("/ContractTypeChallenges", (e, t) => {
    e.query.contractType
      ? t.json({
          template: null,
          data: {
            ChallengeData: {
              Children: jb.challengeService.getFilteredChallengeTree(
                { type: "ContractType", contractType: e.query.contractType },
                e.jwt.unique_name,
                e.gameVersion,
              ),
            },
          },
        })
      : t.status(400).send("Invalid contractType");
  }),
  uO.get("/Hub", (e, t) => {
    const a = cO(e.gameVersion, e.jwt.unique_name);
    let i;
    ((i =
      "h3" === e.gameVersion || "h2" === e.gameVersion
        ? null
        : Kd("HubTemplate", e.gameVersion, !1)),
      t.json({ template: i, data: a }));
  }),
  uO.get("/SafehouseCategory", (e, t) => {
    t.json({
      template:
        "h1" === e.gameVersion ? Qd("LegacySafehouseTemplate", !1) : null,
      data: sO(e.query, e.gameVersion, e.jwt),
    });
  }),
  uO.get("/Safehouse", (e, t) => {
    const a = Qd("LegacySafehouseTemplate", !1),
      i = { type: e.query.type };
    t.json({
      template: a,
      data: { SafehouseData: sO(i, e.gameVersion, e.jwt) },
    });
  }),
  uO.get("/report", (e, t) => {
    t.json({
      template: Kd("ReportTemplate", e.gameVersion, !1),
      data: {
        Reasons: [
          { Id: 0, Title: "UI_MENU_REPORT_REASON_OFFENSIVE" },
          { Id: 1, Title: "UI_MENU_REPORT_REASON_BUGGY" },
        ],
      },
    });
  }),
  uO.get("/stashpoint", (e, t) => {
    if (["h1", "scpc"].includes(e.gameVersion)) {
      if (!cE.test(e.query.contractid))
        return void t.status(400).send("contract id was not a uuid");
      if ("string" != typeof e.query.slotname)
        return void t.status(400).send("invalid slot data");
      const a = rO(e.query, e.jwt.unique_name, e.gameVersion);
      if (!a) return void t.status(400).send("impossible to fulfill");
      t.json({ template: Qd("LegacyStashpointTemplate", !1), data: a });
    } else {
      if (((a = e.query), void 0 === a?.slotname || void 0 === a?.slotid))
        return void t.status(400).send("invalid query");
      t.json({
        template:
          "h3" === e.gameVersion
            ? null
            : Kd("StashpointTemplate", e.gameVersion, !1),
        data: aO(e.query, e.jwt.unique_name, e.gameVersion),
      });
    }
    var a;
  }),
  uO.get("/missionrewards", async (e, t) => {
    const a = Xm.get(e.query.contractSessionId);
    if (!a) return void t.status(400).send("no session");
    if (a.userId !== e.jwt.unique_name)
      return void t
        .status(403)
        .send("requested score for other user's session");
    const { contractId: i } = a,
      r = jb.resolveContract(i, e.gameVersion, !0),
      s = kI(e.jwt.unique_name, e.gameVersion);
    (Xh.default.ok(r, "contract not found"),
      Xh.default.ok(s, "user data not found"));
    const o = "pro1" === r.Metadata.Difficulty ? "pro1" : "normal";
    try {
      const a = await FT(e.query, e.jwt, e.gameVersion, !0);
      (a.MissionReward.Drops.length &&
        qm(e.jwt.unique_name, {
          Name: "UnlockableAddedToInventory",
          Value: {
            Items: a.MissionReward.Drops.map((e) => ({
              UnlockableId: e.Unlockable.Id,
            })),
          },
          Version: { _Build: 61, _Major: 6, _Minor: 74, _Revision: 0 },
        }),
        t.json({
          template: Qd("MissionRewardsTemplate", !1),
          data: {
            LevelInfo: a.MissionReward.LocationProgression.LevelInfo,
            XP: a.MissionReward.LocationProgression.XP,
            Level: a.MissionReward.LocationProgression.Level,
            Completion: a.MissionReward.LocationProgression.Completion,
            XPGain: a.MissionReward.LocationProgression.XPGain,
            Challenges: Object.values(
              jb.challengeService.getChallengesForContract(
                i,
                e.gameVersion,
                e.jwt.unique_name,
              ),
            )
              .flat()
              .filter((e) => jb.challengeService.fastGetIsUnticked(s, e.Id))
              .map((e) => ({
                ChallengeId: e.Id,
                ChallengeName: e.Name,
                ChallengeImageUrl: e.ImageName,
                ChallengeDescription: e.Description,
                XPGain: e.Rewards.MasteryXP,
              })),
            Drops: a.MissionReward.Drops.map((e) => ({
              Unlockable: e.Unlockable,
            })),
            ContractCompletionBonus: 0,
            GroupCompletionBonus: 0,
            LocationHideProgression: a.ScoreOverview.LocationHideProgression,
            Difficulty: o,
            CompletionData: yA(
              r?.Metadata.Location || "",
              e.jwt.unique_name,
              e.gameVersion,
            ),
          },
        }));
    } catch (e) {
      (Ad("error", e), Ad("error", e.stack), t.status(400).send("error"));
    }
  }),
  uO.get("/Planning", async (e, t) => {
    if (!e.query.contractid || !e.query.resetescalation)
      return void t.status(400).send("invalid query");
    const a = await vh(
      e.query.contractid,
      "true" === e.query.resetescalation,
      e.jwt.unique_name,
      e.gameVersion,
    );
    if (a.error) return void t.status(400).send("check console");
    let i = null;
    (("h1" !== e.gameVersion && "scpc" !== e.gameVersion) ||
      (i = Kd("PlanningTemplate", e.gameVersion, !1)),
      t.json({ template: i, data: a }));
  }),
  uO.get("/selectagencypickup", (e, t) => {
    const a = $O(
      "Pickup",
      e.query.contractId,
      e.jwt.unique_name,
      e.gameVersion,
    );
    if ("number" == typeof a) return t.status(a).end();
    t.json(a);
  }),
  uO.get("/selectentrance", (e, t) => {
    const a = $O(
      "Entrance",
      e.query.contractId,
      e.jwt.unique_name,
      e.gameVersion,
    );
    if ("number" == typeof a) return t.status(a).end();
    t.json(a);
  }),
  uO.get("/missionendready", async (e, t) => {
    const a = Xm.get(e.query.contractSessionId),
      i = 1 + Number(e.query.retryCount) || 0;
    a?.timerEnd
      ? t.json({
          template: Qd("MissionEndReadyTemplate", !1),
          data: {
            contractSessionId: e.query.contractSessionId,
            missionEndReady: !0,
            retryCount: i,
          },
        })
      : (await new Promise((e) => setTimeout(() => e(void 0), 100 * i)),
        t.json({
          template: Qd("MissionEndNotReadyTemplate", !1),
          data: {
            contractSessionId: e.query.contractSessionId,
            missionEndReady: !1,
            retryCount: i,
          },
        }));
  }));
var _O = async (e, t) => {
  if (e.query.contractSessionId)
    if (/(__proto__|prototype|constructor)/.test(e.query.contractSessionId))
      t.status(400).send("invalid session id");
    else
      try {
        const a = await FT(e.query, e.jwt, e.gameVersion, !1);
        if (e.path.endsWith("/scoreoverview"))
          return void t.json({
            template: Qd("ScoreOverviewTemplate", !1),
            data: a.ScoreOverview,
          });
        t.json({ template: null, data: a });
      } catch (e) {
        (Ad("error", e), Ad("error", e.stack));
      }
  else t.status(400).send("no session id");
};
async function IO(e, t, a) {
  for (; e.includes("-");) e = e.replace("-", "");
  if (!/\d{12}/.test(e)) return { PublicId: e, ErrorReason: "notfound" };
  const i = await jb.contractByPubId(e, t, a);
  if (!i) return { PublicId: e, ErrorReason: "notfound" };
  return {
    Contract: i,
    Location: eE(i.Metadata.Location, a),
    UserCentricContract: SA(i, t, a),
  };
}
(uO.get("/missionend", _O),
  uO.get("/scoreoverviewandunlocks", _O),
  uO.get("/scoreoverview", _O),
  uO.get("/Destination", (e, t) => {
    if (!e.query.locationId)
      return void t.status(400).send("Invalid locationId");
    const a = GT(e.query, e.gameVersion, e.jwt.unique_name);
    t.json({
      template:
        "h1" === e.gameVersion ? Qd("LegacyDestinationTemplate", !1) : null,
      data: a,
    });
  }),
  uO.get("/LookupContractPublicId", async (e, t) => {
    if ("string" != typeof e.query.publicid)
      return t.status(400).send("no/invalid public id specified!");
    t.json({
      template: Kd("LookupContractByIdTemplate", e.gameVersion, !1),
      data: await IO(e.query.publicid, e.jwt.unique_name, e.gameVersion),
    });
  }),
  uO.get("/HitsCategory", async (e, t) => {
    const a = e.query.type,
      i = {
        template:
          "h1" === e.gameVersion ? Qd("LegacyHitsCategoryTemplate", !1) : null,
        data: void 0,
      };
    ((i.data = await Wh.paginateHitsCategory(
      a,
      ZE(e.query.page),
      e.gameVersion,
      e.jwt.unique_name,
    )),
      t.json(i));
  }),
  uO.get("/PlayNext", (e, t) => {
    e.query.contractId
      ? t.json({
          template: Qd("PlayNextTemplate", !1),
          data: mh(e.query.contractId, e.jwt.unique_name, e.gameVersion),
        })
      : t.status(400).send("no contract id!");
  }),
  uO.get("/LeaderboardsView", (e, t) => {
    t.json({
      template: Qd("LeaderboardsViewTemplate", !1),
      data: {
        LeaderboardUrl: "leaderboardentries",
        LeaderboardType: "singleplayer",
      },
    });
  }),
  uO.get("/LeaderboardEntries", async (e, t) => {
    if (!e.query.contractid) return void t.status(400).send("no contract id!");
    const a = Qd("LeaderboardEntriesTemplate", !1),
      i = await Jh(
        e.query.contractid,
        e.jwt.platform,
        e.gameVersion,
        e.query.difficultyLevel,
        ZE(e.query.page),
      );
    t.json({ template: a, data: i });
  }),
  uO.get("/DebriefingLeaderboards", async (e, t) => {
    if (!e.query.contractid) return void t.status(400).send("no contract id!");
    const a = Qd("DebriefingLeaderboardsTemplate", !1),
      i = await Jh(
        e.query.contractid,
        e.jwt.platform,
        e.gameVersion,
        e.query.difficulty,
        ZE(e.query.page),
      );
    t.json({ template: a, data: i });
  }),
  uO.get("/Contracts", jT),
  uO.get("/contractcreation/planning", async (e, t) => {
    const a = Qd("CreateContractPlanningTemplate", !1);
    if (!e.query.contractCreationIdOverwrite)
      return void t.status(400).send("invalid query");
    const i = await vh(
      e.query.contractCreationIdOverwrite,
      !1,
      e.jwt.unique_name,
      e.gameVersion,
    );
    if (i.error) return void t.status(400).send("check console");
    const r = i;
    (delete r.ElusiveContractState,
      delete r.UserCentric,
      delete r.UserContract,
      delete r.UnlockedEntrances,
      delete r.UnlockedAgencyPickups,
      delete r.Objectives,
      delete r.CharacterLoadoutData,
      delete r.ChallengeData,
      delete r.Currency,
      delete r.PaymentDetails,
      delete r.OpportunityData,
      delete r.PlayerProfileXpData,
      t.json({ template: a, data: r }));
  }),
  uO.get("/contractsearchpage", (e, t) => {
    const a = jb.resolveContract(uE, e.gameVersion);
    t.json({
      template: Kd("ContractSearchPageTemplate", e.gameVersion, !1),
      data: {
        CreateContractTutorial: SA(a, e.jwt.unique_name, e.gameVersion),
        LocationsData: wT(e.gameVersion, !0),
        FilterData: Kd("FilterData", e.gameVersion, !1),
      },
    });
  }),
  uO.post("/ContractSearch", (0, Fh.json)(), async (e, t) => {
    const a = [];
    let i;
    if ((await jb.hooks.getSearchResults.callAsync(e.body, a), a.length > 0)) {
      const t = [];
      for (const i of a) {
        const a = SA(
          jb.resolveContract(i, e.gameVersion),
          e.jwt.unique_name,
          e.gameVersion,
        );
        a
          ? t.push({ UserCentricContract: a })
          : Ad("error", "UC is null! (contract not registered?)");
      }
      i = {
        Data: {
          Contracts: t,
          TotalCount: t.length,
          Page: 0,
          ErrorReason: "",
          HasPrevious: !1,
          HasMore: !1,
        },
      };
    } else
      i = (await VT(e.jwt.unique_name, e.gameVersion, e.body, 0)) || {
        Data: {
          Contracts: [],
          TotalCount: 0,
          Page: 0,
          ErrorReason: "",
          HasPrevious: !1,
          HasMore: !1,
        },
      };
    t.json({
      template: Kd("ContractSearchResponseTemplate", e.gameVersion, !1),
      data: i,
    });
  }),
  uO.post("/ContractSearchPaginate", (0, Fh.json)(), async (e, t) => {
    t.json({
      template: Qd("ContractSearchPaginateTemplate", !1),
      data: await VT(e.jwt.unique_name, e.gameVersion, e.body, e.query.page),
    });
  }),
  uO.get("/DebriefingChallenges", (e, t) => {
    "string" == typeof e.query.contractId
      ? t.json({
          template: Kd("DebriefingChallengesTemplate", e.gameVersion, !1),
          data: {
            ChallengeData: {
              Children: jb.challengeService.getChallengeTreeForContract(
                e.query.contractId,
                e.gameVersion,
                e.jwt.unique_name,
              ),
            },
          },
        })
      : t.status(400).send("invalid contractId");
  }),
  uO.get("/contractcreation/create", (e, t) => {
    let a = (0, gh.randomUUID)();
    const i = Qd("CreateContractReturnTemplate", !1);
    for (; jb.resolveContract(a, e.gameVersion);) a = (0, gh.randomUUID)();
    const r = ag(e.jwt.unique_name);
    if (!r) return void t.status(400).send("no session");
    const s = "1",
      o = `${lh.int(10, 99)}`,
      n = `${lh.int(1e6, 9999999)}`,
      c = `${lh.int(10, 99)}`,
      l = [s, o, n, c].join("-"),
      d = [s, o, n, c].join(""),
      u = Math.ceil(r.timerEnd - r.timerStart),
      p = u % 60,
      $ = Math.trunc(u / 60) % 60,
      _ = Math.trunc(u / 3600),
      I = `${_ ? `${_}:` : ""}${`0${$}`.slice(-2)}:${`0${p}`.slice(-2)}`;
    t.json({
      template: i,
      data: {
        Contract: {
          Title: { $loc: { key: "UI_CONTRACTS_UGC_TITLE", data: [l] } },
          Description: "UI_CONTRACTS_UGC_DESCRIPTION",
          Targets: Array.from(r.kills)
            .filter((e) => r.markedTargets.has(e._RepositoryId || ""))
            .map((e) => ({
              RepositoryId: e._RepositoryId,
              Selected: !0,
              Weapon: {
                RepositoryId: e.KillItemRepositoryId,
                KillMethodBroad: e.KillMethodBroad,
                KillMethodStrict: e.KillMethodStrict,
                RequiredKillMethodType: 3,
              },
              Outfit: {
                RepositoryId: e.OutfitRepoId,
                Required: !0,
                IsHitmanSuit: jE(e.OutfitRepoId),
              },
            })),
          ContractConditions: BA(I),
          PublishingDisabled: r.contractId === uE,
          Creator: e.jwt.unique_name,
          ContractId: a,
          ContractPublicId: d,
        },
      },
    });
  }));
var AO = (e) => (t, a) => {
  const i = [],
    r = {
      template: Kd(e, t.gameVersion, !1),
      data: { Contracts: [], PaymentEligiblity: {} },
    };
  for (const e of t.body)
    if (e && !i.includes(e)) {
      i.push(e);
      const a = jb.resolveContract(e, t.gameVersion);
      if (!a) {
        Ad("warn", `Unknown contract in L/S: ${e}`);
        continue;
      }
      r.data.Contracts.push(SA(a, t.jwt.unique_name, t.gameVersion));
    }
  if ("h1" === t.gameVersion)
    for (const e of t.body) e && (r.data.PaymentEligiblity[e] = !1);
  else
    for (const e of t.query.sessionIds?.split(",") || [])
      r.data.PaymentEligiblity[e] = !1;
  a.json(r);
};
(uO.post("/Load", (0, Fh.json)(), AO("LoadMenuTemplate")),
  uO.post("/Save", (0, Fh.json)(), AO("SaveMenuTemplate")),
  uO.get("/PlayerProfile", (e, t) => {
    t.json({ template: null, data: dO(e.gameVersion, e.jwt.unique_name) });
  }),
  uO.get("/LookupContractDialogAddOrDeleteFromPlaylist", kh),
  uO.get("/contractplaylist/addordelete/:contractId", Qh),
  uO.post("/contractplaylist/deletemultiple", (0, Fh.json)(), Kh),
  uO.get("/GetPlayerProfileXpData", (e, t) => {
    const a = kI(e.jwt.unique_name, e.gameVersion);
    t.json({
      template: null,
      data: {
        PlayerProfileXpData: {
          XP: a.Extensions.progression.PlayerProfileXP.Total,
          Level: a.Extensions.progression.PlayerProfileXP.ProfileLevel,
          MaxLevel: mE(e.gameVersion),
        },
      },
    });
  }),
  uO.get("/GetMasteryCompletionDataForLocation", (e, t) => {
    e.query.locationId
      ? t.json(yA(e.query.locationId, e.jwt.unique_name, e.gameVersion))
      : t.status(400).send("no location id");
  }),
  uO.get("/MasteryUnlockable", (e, t) => {
    let a = Qd("MasteryUnlockablesTemplate", !1);
    const i = (() => {
      switch (e.query.unlockableId?.split("_").slice(0, 3).join("_")) {
        case "FIREARMS_SC_HERO":
          return "LOCATION_PARENT_AUSTRIA";
        case "FIREARMS_SC_SEAGULL":
          return "LOCATION_PARENT_SALTY";
        case "FIREARMS_SC_FALCON":
          return "LOCATION_PARENT_CAGED";
        default:
          Xh.default.fail("fell through switch (bad query?)");
      }
    })();
    ("scpc" === e.gameVersion &&
      (a = JSON.parse(
        JSON.stringify(a).replace(
          /UI_MENU_PAGE_MASTERY_LEVEL_SHORT+/g,
          "UI_MENU_PAGE_MASTERY_LEVEL",
        ),
      )),
      t.json({
        template: a,
        data: jb.masteryService.getMasteryDataForSubPackage(
          i,
          e.query.unlockableId,
          e.gameVersion,
          e.jwt.unique_name,
        ),
      }));
  }),
  uO.get("/MasteryDataForLocation", (e, t) => {
    t.json({
      template: Qd("MasteryDataForLocationTemplate", !1),
      data: jb.masteryService.getMasteryDataForLocation(
        e.query.locationId,
        e.gameVersion,
        e.jwt.unique_name,
      ),
    });
  }),
  uO.get("/GetMasteryCompletionDataForUnlockable", (e, t) => {
    t.json({
      template: null,
      data: {
        CompletionData: jb.masteryService.getLocationCompletion(
          pO[e.query.unlockableId],
          pO[e.query.unlockableId],
          e.gameVersion,
          e.jwt.unique_name,
          "sniper",
          e.query.unlockableId,
        ),
      },
    });
  }));
var fO = {};
I(fO, {
  JWT_SECRET: () => CO,
  error400: () => bO,
  error406: () => EO,
  handleOAuthToken: () => TO,
});
var mO = f(ci()),
  gO = require("crypto"),
  CO = (0, gO.randomBytes)(32).toString("hex"),
  bO = Symbol("http400"),
  EO = Symbol("http406");
async function TO(e) {
  const t = "scpc-prod" === e.body.gs,
    a = {
      notBefore: -6e4,
      expiresIn: 6e3,
      issuer: "auth.hitman.io",
      audience: t ? "scpc-prod" : "pc_prod_8",
      noTimestamp: !0,
    };
  let i, r, s, o;
  if ("external_steam" === e.body.grant_type) {
    if (!/^\d{1,20}$/.test(e.body.steam_userid || "")) return bO;
    ((i = "steam"),
      (r = e.body.steam_userid || ""),
      (s = "steamids"),
      (o = e.body.steam_appid));
  } else {
    if ("external_epic" !== e.body.grant_type)
      return "refresh_token" === e.body.grant_type
        ? (IE(e),
          delete e.jwt.nbf,
          delete e.jwt.exp,
          delete e.jwt.iss,
          delete e.jwt.aud,
          {
            access_token: (0, mO.sign)(e.jwt, CO, a),
            token_type: "bearer",
            expires_in: 5e3,
            refresh_token: (0, gO.randomUUID)(),
          })
        : EO;
    if (!/^[\da-f]{32}$/.test(e.body.epic_userid || "")) return bO;
    ((o = "fghi4567xQOCheZIin0pazB47qGUvZw4"),
      (i = "epic"),
      (r = e.body.epic_userid || ""),
      (s = "epicids"));
  }
  if (e.body.pId && !cE.test(e.body.pId)) return EO;
  let n = "h1";
  if (
    (t
      ? (n = "scpc")
      : "fghi4567xQOCheZIin0pazB47qGUvZw4" === o || o === oA
        ? (n = "h3")
        : o === rA && (n = "h2"),
    e.body.pId)
  )
    xI(r, s, n)
      .then(() => null)
      .catch(async () => {
        await YI(r, s, e.body.pId, n);
      });
  else
    try {
      e.body.pId = (await xI(r, s, n)).toString();
    } catch {
      ((e.body.pId = (0, gO.randomUUID)()), await YI(r, s, e.body.pId, n));
    }
  try {
    await QI(e.body.pId, n);
  } catch (e) {
    (Ad("debug", "Unable to load profile information."), Ad("debug", e));
  }
  if (!t) {
    const t = new xA(n, e.body.access_token);
    (Ad("debug", `Setting up container with ID ${e.body.pId}.`),
      YA.set(e.body.pId, t));
  }
  let c = kI(e.body.pId, n);
  void 0 === c &&
    (Ad("debug", `Create new profile ${e.body.pId}`),
    (c = Kd("UserDefault", n, !0)),
    (c.Id = e.body.pId),
    (c.LinkedAccounts[i] = r),
    "steam" === i
      ? (c.SteamId = e.body.steam_userid)
      : "epic" === i && (c.EpicId = e.body.epic_userid),
    Object.hasOwn(c.Extensions, "inventory") && delete c.Extensions.inventory);
  const l = t
    ? new nT().get()
    : "h1" === n
      ? "steam" === i
        ? new cT().get()
        : "epic" === i
          ? new oT().get()
          : (Ad("error", "Unsupported platform."), [])
      : "h2" === n
        ? new lT().get()
        : "h3" === n
          ? "epic" === i
            ? new rT().get()
            : "steam" === i
              ? new sT().get()
              : (Ad("error", "Unsupported platform."), [])
          : (Ad("error", "Unsupported platform."), []);
  0 === l.length
    ? c.Extensions.entP
      ? Ad(
          "warn",
          `Error getting latest entitlement data for user ${e.body.pId}. Recently acquired DLCs might not be displayed!`,
        )
      : (Ad(
          "error",
          `Error getting entitlement data for new user ${e.body.pId}!`,
        ),
        (c.Extensions.entP = l),
        FI(e.body.pId, c, n))
    : ((c.Extensions.entP = l), FI(e.body.pId, c, n));
  const d = {
    "auth:method": e.body.grant_type,
    roles: "user",
    sub: e.body.pId,
    unique_name: e.body.pId,
    userid: r,
    platform: i,
    locale: e.body.locale,
    rgn: e.body.rgn,
    pis: o,
    cntry: e.body.locale,
  };
  return (
    zb(e.body.pId),
    {
      access_token: (0, mO.sign)(d, CO, a),
      token_type: "bearer",
      expires_in: 5e3,
      refresh_token: (0, gO.randomUUID)(),
    }
  );
}
var hO = {};
I(hO, { webFeaturesRouter: () => LO });
var OO = f(Ys()),
  yO = require("fs/promises"),
  SO = require("path"),
  LO = (0, OO.Router)();
function NO(e, t, a) {
  e.query.gv && dE.includes(e.query.gv ?? null)
    ? e.query.user && cE.test(e.query.user)
      ? a()
      : t.json({
          success: !1,
          error: "The request must contain the uuid of a user.",
        })
    : t.json({ success: !1, error: "invalid game version" });
}
function RO(e, t) {
  e.json({ success: !1, error: t });
}
async function DO(e, t, a, i) {
  const r = { PeacockEscalations: {}, PeacockCompletedEscalations: [] },
    s = await e._useService(
      `https://${t}.hitman.io/profiles/page/HitsCategory?page=${i}&type=${a}&mode=dataonly`,
      !0,
    );
  for (const e of s.data.data.Data.Hits)
    ((r.PeacockEscalations[e.Id] =
      e.UserCentricContract.Data.EscalationCompletedLevels + 1),
      e.UserCentricContract.Data.EscalationCompleted &&
        r.PeacockCompletedEscalations.push(e.Id));
  return [r, s.data.data.Data.HasMore];
}
async function PO(e, t, a) {
  const i = { PeacockEscalations: {}, PeacockCompletedEscalations: [] };
  let r = 0,
    s = !0;
  for (; s;) {
    const [o, n] = await DO(e, t, a, r);
    ((i.PeacockEscalations = {
      ...i.PeacockEscalations,
      ...o.PeacockEscalations,
    }),
      (i.PeacockCompletedEscalations = [
        ...i.PeacockCompletedEscalations,
        ...o.PeacockCompletedEscalations,
      ]),
      r++,
      (s = n));
  }
  return i;
}
(LO.get("/codenames", (e, t) => {
  t.json(Qd("EscalationCodenames", !1));
}),
  LO.get("/local-users", async (e, t) => {
    if (((a = e.query.gv), !dE.includes(a))) return void t.json([]);
    var a;
    let i;
    i =
      "h3" === e.query.gv
        ? (0, SO.join)("userdata", "users")
        : (0, SO.join)("userdata", e.query.gv, "users");
    const r = (await (0, yO.readdir)(i)).filter((e) => "lop.json" !== e),
      s = [];
    for (const e of r) {
      if ("lop.json" === e) continue;
      const t = JSON.parse(
        (await (0, yO.readFile)((0, SO.join)(i, e))).toString(),
      );
      s.push({
        id: t.Id,
        name: t.Gamertag,
        platform: t.EpicId ? "Epic" : "Steam",
        lastOfficialSync: t.Extensions.LastOfficialSync?.toString() || null,
      });
    }
    t.json(s);
  }),
  LO.get("/modify", NO, async (e, t) => {
    let a;
    try {
      a = JSON.parse(e.query.escalations);
    } catch {
      return void RO(t, "Invalid escalations JSON.");
    }
    for (const [e, i] of Object.entries(a)) {
      const a = parseInt(i, 10);
      if (!i || a <= 0)
        return void RO(t, "The level must be a positive integer.");
      const r = jb.escalationMappings.get(e);
      if (!r) return void RO(t, "Unknown escalation.");
      if (Object.keys(r).length < a)
        return void RO(
          t,
          "Cannot exceed the maximum level for edited escalation!",
        );
    }
    try {
      await QI(e.query.user, e.query.gv);
    } catch {
      return void RO(t, "Failed to load user data.");
    }
    const i = kI(e.query.user, e.query.gv);
    for (const [e, t] of Object.entries(a))
      (Ad("info", `Setting the level of escalation ${e} to ${t}`),
        (i.Extensions.PeacockEscalations[e] = parseInt(t)),
        i.Extensions.PeacockCompletedEscalations.includes(e) &&
          (i.Extensions.PeacockCompletedEscalations =
            i.Extensions.PeacockCompletedEscalations.filter((t) => t !== e)));
    (KI(e.query.user, e.query.gv), t.json({ success: !0 }));
  }),
  LO.get("/user-progress", NO, async (e, t) => {
    try {
      await QI(e.query.user, e.query.gv);
    } catch {
      return void RO(t, "Failed to load user data.");
    }
    const a = kI(e.query.user, e.query.gv);
    t.json(a.Extensions.PeacockEscalations);
  }),
  LO.post("/sync-progress", NO, async (e, t) => {
    const a = _E(e.query.gv),
      i = YA.get(e.query.user);
    if (!i)
      return void RO(
        t,
        "Failed to get official authentication data. Please connect to Peacock first.",
      );
    const r = kI(e.query.user, e.query.gv);
    try {
      Ad("debug", "Getting challenge progression...", "progressionTransfer");
      const t = await i._useService(
        `https://${a}.hitman.io/authentication/api/userchannel/ChallengesService/GetProgression`,
        !1,
        {
          profileid: e.query.user,
          challengeids: jb.challengeService
            .getChallengeIds(e.query.gv)
            .filter((e) => cE.test(e)),
        },
      );
      ((r.Extensions.ChallengeProgression = Object.fromEntries(
        t.data.map((t) => {
          const a = {
            Ticked: t.Completed,
            Completed: t.Completed,
            CurrentState: t.State.CurrentState ?? "Start",
            State: t.State,
          };
          if (Object.keys(t.State).length < 1) {
            const i = jb.challengeService.getChallengeById(
              t.ChallengeId,
              e.query.gv,
            );
            a.State = i?.Definition.Context || {};
          }
          return [t.ChallengeId, a];
        }),
      )),
        Ad("debug", "Getting profile progression...", "progressionTransfer"));
      const s = await i._useService(
        `https://${a}.hitman.io/authentication/api/userchannel/ProfileService/GetProfile`,
        !1,
        {
          id: e.query.user,
          extensions: [
            "achievements",
            "friends",
            "gameclient",
            "gamepersistentdata",
            "opportunityprogression",
            "progression",
            "defaultloadout",
          ],
        },
      );
      if ("h1" !== e.query.gv) {
        Ad("debug", "Processing PlayerProfileXP...", "progressionTransfer");
        const e = s.data.Extensions.progression.PlayerProfileXP.Sublocations;
        if (
          ((r.Extensions.progression.PlayerProfileXP = {
            ...r.Extensions.progression.PlayerProfileXP,
            Total: s.data.Extensions.progression.PlayerProfileXP.Total,
            ProfileLevel: gE(
              s.data.Extensions.progression.PlayerProfileXP.Total,
            ),
            Sublocations: Object.fromEntries(
              e.map((e) => [e.Location, { Xp: e.Xp, ActionXp: e.ActionXp }]),
            ),
          }),
          Ad(
            "debug",
            "Processing opportunity progression...",
            "progressionTransfer",
          ),
          (r.Extensions.opportunityprogression = Object.fromEntries(
            Object.keys(s.data.Extensions.opportunityprogression || {}).map(
              (e) => [e, !0],
            ),
          )),
          s.data.Extensions.progression.Unlockables)
        ) {
          Ad("debug", "Processing unlockables...", "progressionTransfer");
          for (const [e, t] of Object.entries(
            s.data.Extensions.progression.Unlockables,
          )) {
            const a = e.toUpperCase();
            a in pO &&
              (r.Extensions.progression.Locations[pO[a]][a] = {
                Xp: t.Xp,
                Level: t.Level,
                PreviouslySeenXp: t.PreviouslySeenXp,
              });
          }
        }
      }
      ((r.Extensions.gamepersistentdata =
        s.data.Extensions.gamepersistentdata || {}),
        (r.Extensions.gamepersistentdata.HitsFilterType ??= {}),
        (r.Extensions.gamepersistentdata.HitsFilterType.MyHistory ??= "all"),
        (r.Extensions.gamepersistentdata.HitsFilterType.MyContracts ??= "all"),
        (r.Extensions.gamepersistentdata.HitsFilterType.MyPlaylist ??= "all"));
      const o = VE(e.query.gv);
      if (
        ((r.Extensions.defaultloadout ??= {}), s.data.Extensions.defaultloadout)
      )
        for (const [e, t] of Object.entries(s.data.Extensions.defaultloadout))
          for (const a of o[e]) r.Extensions.defaultloadout[a] = t;
      r.Extensions.achievements = s.data.Extensions.achievements || [];
      for (const [t, a] of Object.entries(
        s.data.Extensions.progression.Locations,
      )) {
        const i = (
          t.startsWith("location_parent")
            ? t
            : t.replace("location_", "location_parent_")
        ).toUpperCase();
        if (!NE(i))
          if ("h1" === e.query.gv) {
            const e = i.endsWith("PRO1") ? i.substring(0, i.length - 5) : i,
              t = i.endsWith("PRO1") ? "pro1" : "normal";
            r.Extensions.progression.Locations[e][t] = {
              Xp: a.Xp,
              Level: a.Level,
              PreviouslySeenXp: a.Xp,
            };
          } else
            r.Extensions.progression.Locations[i] = {
              Xp: a.Xp,
              Level: a.Level,
              PreviouslySeenXp: a.PreviouslySeenXp,
            };
      }
      Ad(
        "debug",
        `Getting escalation${"h3" === e.query.gv ? " & arcade" : ""} progression...`,
        "progressionTransfer",
      );
      const n = await PO(i, a, "ContractAttack"),
        c =
          "h3" === e.query.gv
            ? await PO(i, a, "Arcade")
            : { PeacockEscalations: {}, PeacockCompletedEscalations: [] };
      ((r.Extensions.PeacockEscalations = {
        ...r.Extensions.PeacockEscalations,
        ...n.PeacockEscalations,
        ...c.PeacockEscalations,
      }),
        (r.Extensions.PeacockCompletedEscalations = [
          ...r.Extensions.PeacockCompletedEscalations,
          ...n.PeacockCompletedEscalations,
          ...c.PeacockCompletedEscalations,
        ]));
      for (const e of r.Extensions.PeacockCompletedEscalations)
        r.Extensions.PeacockPlayedContracts[e] = {
          LastPlayedAt: new Date().getTime(),
          Completed: !0,
          IsEscalation: !0,
        };
      if (
        "h3" === e.query.gv &&
        (r.Extensions.entP.includes("06d4d61bbb774ca99c1661bee04fbde0") ||
          r.Extensions.entP.includes("1829605"))
      ) {
        (Ad(
          "debug",
          "Getting freelancer progression...",
          "progressionTransfer",
        ),
          await i._useService(
            `https://${a}.hitman.io/authentication/api/configuration/Init?configName=pc-prod&lockedContentDisabled=false&isFreePrologueUser=false&isIntroPackUser=false&isFullExperienceUser=true`,
            !0,
          ));
        const e = await i._useService(
          `https://${a}.hitman.io/authentication/api/userchannel/ContractsService/GetForPlay2`,
          !1,
          {
            id: "f8ec92c2-4fa2-471e-ae08-545480c746ee",
            locationId: "",
            extraGameChangerIds: [],
            difficultyLevel: 0,
          },
        );
        r.Extensions.CPD["f8ec92c2-4fa2-471e-ae08-545480c746ee"] =
          e.data.ContractProgressionData;
      }
      {
        const e = {
          Ticked: !1,
          Completed: !1,
          CurrentState: "Start",
          State: { AreaIDs: [] },
        };
        for (const t of [
          "0a4513e4-338c-4328-ad72-82c1b5ff2a73",
          "705c3917-9f3d-4444-a268-41e74bc8e4ad",
          "7cfd6202-b3fb-4c9f-b3c2-c892b8031901",
          "ba0fe890-9feb-4991-82f8-5daf7aff3380",
          "fa7b2877-3159-454a-82d3-422a0dd7e5da",
        ])
          r.Extensions.gamepersistentdata?.PersistentBool?.[t] &&
            e.State.AreaIDs.push(t);
        (5 === e.State.AreaIDs.length &&
          ((e.Ticked = e.Completed = !0), (e.CurrentState = "Success")),
          (r.Extensions.ChallengeProgression[
            "2546d4f7-191c-4858-840f-321d31aed410"
          ] = e));
      }
      ((r.Extensions.LastOfficialSync = new Date().toISOString()),
        KI(e.query.user, e.query.gv));
    } catch (e) {
      if (e instanceof S_) {
        const a = e.request?._currentRequest ?? e.request,
          i = a && `${a.protocol}//${a.host}${a.path}`;
        return (
          Ad(
            "debug",
            `Failed to sync official data: got ${e.code}: ${e.response?.status} ${e.response?.statusText} for url ${i}`,
            "progressionTransfer",
          ),
          void RO(
            t,
            `Failed to sync official data: got ${e.response?.status} ${e.response?.statusText}.`,
          )
        );
      }
      return (
        Ad(
          "debug",
          `Failed to sync official data: ${JSON.stringify(e)}.`,
          "progressionTransfer",
        ),
        void RO(t, `Failed to sync official data: got ${JSON.stringify(e)}.`)
      );
    }
    t.json({ success: !0 });
  }));
var MO = {};
I(MO, { legacyContractRouter: () => vO });
var UO = f(Ys()),
  wO = f(Jr()),
  GO = require("crypto"),
  vO = (0, UO.Router)(),
  BO = {
    Id: "b48bb7f9-b630-48cb-a816-720ed7959319",
    Name: "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_SECONDARY_NAME",
    Description:
      "UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_SECONDARY_DESC",
    Icon: "images/challenges/default_challenge_icon.png",
    IsHidden: null,
    TileImage:
      "images/contractconditions/condition_contrac_do_not_be_spotted.jpg",
    Resource: [],
    Objectives: [
      {
        Id: "19bb5722-6a50-4bac-a6b9-339aa035d95d",
        Category: "secondary",
        OnActive: {},
        BriefingText:
          "$loc UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_SECONDARY_OBJ",
        HUDTemplate: {
          display:
            "$loc UI_GAMECHANGERS_GLOBAL_CONTRACTCONDITION_DO_NOT_GET_SPOTTED_SECONDARY_OBJ",
        },
        Type: "statemachine",
        CombinedDisplayInHud: !0,
        Definition: {
          Scope: "session",
          States: {
            Start: { "-": { Transition: "Success" } },
            Success: {
              Spotted: { Transition: "Failure" },
              DisguiseBlown: { Transition: "Failure" },
            },
          },
        },
      },
    ],
  };
(vO.post("/GetForPlay", (0, wO.json)(), (e, t) => {
  if (!cE.test(e.body.id)) return void t.status(400).end();
  const a = jb.resolveContract(e.body.id, e.gameVersion);
  if (!a)
    return (
      Ad("error", `Requested unknown contract in LGFP: ${e.body.id}`),
      void t.status(400).send("no such contract")
    );
  ("elusive" === a.Metadata.Type &&
    Rd("legacyElusivesEnableSaving") &&
    (Ad("debug", "Changing elusive mission..."), (a.Metadata.Type = "mission")),
    a.Data.GameChangers || (a.Data.GameChangers = []));
  for (const t of e.body.extraGameChangerIds) a.Data.GameChangers.push(t);
  if (a.Data.GameChangers.length > 0) {
    const e = {
      ...Qd("GameChangerProperties", !0),
      ...Qd("PeacockGameChangerProperties", !0),
    };
    a.Data.GameChangerReferences = [];
    for (const i of a.Data.GameChangers) {
      let r = e[i];
      ("b48bb7f9-b630-48cb-a816-720ed7959319" === i && (r = BO),
        r
          ? ((r.Id = i),
            delete r.ObjectivesCategory,
            a.Data.GameChangerReferences.push(r),
            r.Resource && a.Data.Bricks.push(...r.Resource),
            r.Objectives && a.Data.Objectives?.push(...r.Objectives))
          : (Ad("error", `Encountered unknown GameChanger id: ${i}`),
            t.status(500)));
    }
  }
  ((a.Metadata = {
    ...a.Metadata,
    ...("escalation" === a.Metadata.Type
      ? bA(e.jwt.unique_name, a.Metadata.InGroup, e.gameVersion)
      : {}),
  }),
    t.json(a));
}),
  vO.post("/Start", (0, wO.json)(), (e, t) => {
    if (e.body.profileId !== e.jwt.unique_name) return void t.status(400).end();
    if (!cE.test(e.body.contractId)) return void t.status(400).end();
    if (!jb.resolveContract(e.body.contractId, e.gameVersion))
      return void t.status(404).end();
    const a = `${process.hrtime.bigint().toString()}-${(0, GO.randomUUID)()}`;
    (qm(e.jwt.unique_name, {
      Version: oE,
      IsReplicated: !1,
      CreatedContract: null,
      Id: (0, GO.randomUUID)(),
      Name: "ContractSessionMarker",
      UserId: UE,
      ContractId: UE,
      SessionId: null,
      ContractSessionId: a,
      Timestamp: 0,
      Value: {
        Currency: { ContractPaymentAllowed: !0, ContractPayment: null },
      },
      Origin: null,
    }),
      t.json(a),
      Zm(a, e.body.contractId, e.jwt.unique_name, kE.normal, e.gameVersion));
  }));
var kO = {};
I(kO, { legacyMenuDataRouter: () => HO });
var HO = (0, f(Ys()).Router)();
(HO.get("/MasteryLocation", (e, t) => {
  const a = OA(e.query.locationId, e.gameVersion);
  t.json({
    template: Qd("LegacyMasteryLocationTemplate", !1),
    data: {
      DifficultyLevelData: [
        {
          Name: "normal",
          Data: {
            LocationId: e.query.locationId,
            ...jb.masteryService.getMasteryDataForDestination(
              e.query.locationId,
              e.gameVersion,
              e.jwt.unique_name,
              "normal",
            )[0],
          },
          Available: !0,
        },
        {
          Name: "pro1",
          Data: {
            LocationId: e.query.locationId,
            ...jb.masteryService.getMasteryDataForDestination(
              e.query.locationId,
              e.gameVersion,
              e.jwt.unique_name,
              "pro1",
            )[0],
          },
          Available: !0,
        },
      ],
      LocationId: e.query.locationId,
      Location: a,
    },
  });
}),
  HO.get("/Statistics", (e, t) => {
    const a = {
        DifficultyLevelData: [
          { Name: "normal", SubLocationData: [] },
          { Name: "pro1", SubLocationData: [] },
        ],
      },
      i = Kd("LocationsData", e.gameVersion, !1),
      r = [];
    for (const t of Object.values(i.children)) {
      const s = i.parents[t.Properties.ParentLocation || ""],
        o = jb.challengeService.getGroupedChallengeLists(
          {
            type: "ParentLocation",
            parent: s.Id,
            gameVersion: e.gameVersion,
            pro1Filter: "Exclude",
          },
          s.Id,
          e.gameVersion,
        ),
        n = [];
      for (const t in o) {
        const a = jb.challengeService.countTotalNCompletedChallenges(
          { challengeGroup: o[t] },
          e.jwt.unique_name,
          e.gameVersion,
        );
        n.push({ Name: o[t][0].CategoryName, ...a });
      }
      if (
        (a.DifficultyLevelData[0].SubLocationData.push({
          ParentLocation: s,
          Location: t,
          ChallengeCategoryCompletion: n,
          CompletionData: {
            ...yA(t.Id, e.jwt.unique_name, e.gameVersion, "mission", "normal"),
            HideProgression:
              t.Properties.ProgressionKey !== t.Id ||
              "LOCATION_PARENT_ICA_FACILITY" === s.Id,
          },
          ChallengeCompletion:
            jb.challengeService.countTotalNCompletedChallenges(
              o,
              e.jwt.unique_name,
              e.gameVersion,
              100,
            ),
        }),
        "LOCATION_PARENT_ICA_FACILITY" === s.Id || r.includes(s.Id))
      )
        continue;
      r.push(s.Id);
      const c = jb.challengeService.getGroupedChallengeLists(
          {
            type: "ParentLocation",
            parent: s.Id,
            gameVersion: e.gameVersion,
            pro1Filter: "Only",
          },
          s.Id,
          e.gameVersion,
        ),
        l = [];
      for (const t in c) {
        const a = jb.challengeService.countTotalNCompletedChallenges(
          { challengeGroup: c[t] },
          e.jwt.unique_name,
          e.gameVersion,
        );
        l.push({ Name: c[t][0].CategoryName, ...a });
      }
      a.DifficultyLevelData[1].SubLocationData.push({
        ParentLocation: s,
        Location: t,
        ChallengeCategoryCompletion: l,
        CompletionData: yA(
          t.Id,
          e.jwt.unique_name,
          e.gameVersion,
          "mission",
          "pro1",
        ),
        ChallengeCompletion: jb.challengeService.countTotalNCompletedChallenges(
          c,
          e.jwt.unique_name,
          e.gameVersion,
          100,
        ),
      });
    }
    t.json({ template: Qd("LegacyStatisticsTemplate", !1), data: a });
  }));
var QO = {};
I(QO, { legacyProfileRouter: () => xO });
var KO = f(Ys()),
  FO = f(Jr()),
  xO = (0, KO.Router)();
(xO.post("/ChallengesService/GetActiveChallenges", (0, FO.json)(), (e, t) => {
  if (!cE.test(e.body.contractId))
    return t.status(404).send("invalid contract");
  const a = Qd("LegacyGlobalChallenges", !1),
    i = jb.resolveContract(e.body.contractId, e.gameVersion);
  if (!i)
    return (
      Ad("error", `Unknown contract in LGAC: ${e.body.contractId}`),
      t.status(404).send("contract not found")
    );
  if ("creation" === i.Metadata.Type) return t.json([]);
  const r = a;
  (r.push(
    ...Object.values(
      jb.challengeService.getChallengesForContract(
        i.Metadata.Id,
        e.gameVersion,
        e.jwt.unique_name,
      ),
    )
      .flat()
      .map((e) => _f(e)),
  ),
    t.json(r));
}),
  xO.post("/ChallengesService/GetProgression", (0, FO.json)(), (e, t) => {
    if (!Array.isArray(e.body.challengeids))
      return void t.status(400).send("invalid body");
    const a = Qd("LegacyGlobalChallenges", !1).map((t) => ({
      ChallengeId: t.Id,
      ProfileId: e.jwt.unique_name,
      Completed: !1,
      Ticked: !1,
      State: {},
      ETag: `W/"datetime'${encodeURIComponent(new Date().toISOString())}'"`,
      CompletedAt: null,
      MustBeSaved: !1,
    }));
    for (const t of e.body.challengeids) {
      if (!jb.challengeService.getChallengeById(t, "h1")) {
        Ad("error", `Unknown challenge in LCSGP: ${t}`);
        continue;
      }
      const i = jb.challengeService.getPersistentChallengeProgression(
        e.jwt.unique_name,
        t,
        e.gameVersion,
      );
      a.push({
        ChallengeId: t,
        ProfileId: e.jwt.unique_name,
        Completed: i.Completed,
        Ticked: i.Ticked,
        State: i.State,
        ETag: `W/"datetime'${encodeURIComponent(new Date().toISOString())}'"`,
        CompletedAt: i.CompletedAt,
        MustBeSaved: i.MustBeSaved,
      });
    }
    t.json(a);
  }));
var YO = {};
I(YO, {
  contractRoutingRouter: () => oy,
  getContractOpportunityData: () => ny,
});
var jO = f(Ys()),
  VO = f(Jr()),
  qO = require("crypto"),
  WO = {};
I(WO, {
  ContractKillMethod: () => ay,
  createObjectivesForTarget: () => ey,
  createRequiredOutfitObjective: () => ZO,
  createTargetKillObjective: () => JO,
  createTimeLimit: () => ty,
  genStateMachineKillSuccessCondition: () => iy,
  weaponToKillMethod: () => ry,
});
var XO = require("crypto"),
  zO = f(require("assert")),
  JO = (e) => ({
    Type: "statemachine",
    Id: (0, XO.randomUUID)(),
    BriefingText: {
      $loc: {
        key: "UI_CONTRACT_GENERAL_OBJ_KILL",
        data: `$($repository ${e.RepositoryId}).Name`,
      },
    },
    HUDTemplate: {
      display: {
        $loc: {
          key: "UI_CONTRACT_GENERAL_OBJ_KILL",
          data: `$($repository ${e.RepositoryId}).Name`,
        },
      },
    },
    Category: "primary",
    Definition: {
      Scope: "Hit",
      Context: { Targets: [e.RepositoryId] },
      States: {
        Start: {
          Kill: {
            Condition: { $eq: ["$Value.RepositoryId", e.RepositoryId] },
            Transition: "Success",
          },
        },
      },
    },
  }),
  ZO = (e) => ({
    Type: "statemachine",
    Id: (0, XO.randomUUID)(),
    Category: "secondary",
    Definition: {
      Scope: "Hit",
      Context: { Targets: [e.RepositoryId] },
      States: {
        Start: {
          Kill: [
            {
              Condition: {
                $and: [
                  { $eq: ["$Value.RepositoryId", e.RepositoryId] },
                  e.Outfit.IsHitmanSuit
                    ? { $eq: ["$Value.OutfitIsHitmanSuit", !0] }
                    : {
                        $eq: [
                          "$Value.OutfitRepositoryId",
                          e.Outfit.RepositoryId,
                        ],
                      },
                ],
              },
              Transition: "Success",
            },
            {
              Condition: { $eq: ["$Value.RepositoryId", e.RepositoryId] },
              Transition: "Failure",
            },
          ],
        },
      },
    },
    TargetConditions: [],
  });
function ey(e, t) {
  const a = JO(e);
  t?.base && (a.Id = t.base);
  const i = [a];
  if (e.Outfit.Required) {
    const r = ZO(e);
    (t?.outfit && (r.Id = t.outfit),
      (a.TargetConditions ??= []),
      a.TargetConditions.push({
        Type: e.Outfit.IsHitmanSuit ? "hitmansuit" : "disguise",
        RepositoryId: e.Outfit.RepositoryId,
        HardCondition: !1,
        ObjectiveId: r.Id,
        KillMethod: "",
      }),
      i.push(r));
  }
  if (0 !== e.Weapon.RequiredKillMethodType) {
    const r = (function (e, t) {
      return {
        Type: "statemachine",
        Id: (0, XO.randomUUID)(),
        Category: "secondary",
        Definition: {
          Scope: "Hit",
          Context: { Targets: [t] },
          States: {
            Start: {
              Kill: [
                {
                  Condition: {
                    $and: [{ $eq: ["$Value.RepositoryId", t] }, iy(e)],
                  },
                  Transition: "Success",
                },
                {
                  Condition: { $eq: ["$Value.RepositoryId", t] },
                  Transition: "Failure",
                },
              ],
            },
          },
        },
      };
    })(e.Weapon, e.RepositoryId);
    (t?.kill && (r.Id = t.kill),
      (a.TargetConditions ??= []),
      a.TargetConditions.push({
        Type: "killmethod",
        RepositoryId: e.Weapon.RepositoryId,
        HardCondition: !1,
        ObjectiveId: r.Id,
        KillMethod: e.Weapon.RequiredKillMethod,
      }),
      i.push(r));
  }
  return i;
}
function ty(e, t) {
  const a = t
      ? "UI_CONTRACT_UGC_TIME_LIMIT_SECONDARY_DESC"
      : "UI_CONTRACT_UGC_TIME_LIMIT_PRIMARY_DESC",
    i = Math.floor(e),
    r = i % 60,
    s = Math.trunc(i / 60) % 60,
    o = Math.trunc(i / 3600),
    n = `${o ? `${o}:` : ""}${`0${s}`.slice(-2)}:${`0${r}`.slice(-2)}`;
  return {
    Type: "statemachine",
    Id: "1a596216-381e-4592-9798-26f156973942",
    ObjectiveType: "custom",
    Category: t ? "secondary" : "primary",
    BriefingName: "$loc UI_CONTRACT_UGC_TIME_LIMIT_NAME",
    BriefingText: { $loc: { key: a, data: `$formatstring ${n}` } },
    LongBriefingText: { $loc: { key: a, data: `$formatstring ${n}` } },
    HUDTemplate: { display: { $loc: { key: a, data: `$formatstring ${n}` } } },
    Image: "images/contractconditions/condition_contrac_time_limit.jpg",
    OnActive: { IfInProgress: { State: "Completed" } },
    CombinedDisplayInHud: !0,
    Definition: {
      Scope: "session",
      States: {
        Start: { IntroCutEnd: { Transition: "TimerRunning" } },
        TimerRunning: {
          exit_gate: { Transition: "Success" },
          $timer: [{ Condition: { $after: i }, Transition: "Failure" }],
        },
      },
    },
  };
}
var ay = ((e) => (
  (e[(e.Any = 0)] = "Any"),
  (e[(e.AnyMelee = 1)] = "AnyMelee"),
  (e[(e.ObjectMelee = 2)] = "ObjectMelee"),
  (e[(e.AnyThrown = 3)] = "AnyThrown"),
  (e[(e.ObjectThrown = 4)] = "ObjectThrown"),
  (e[(e.Pistol = 5)] = "Pistol"),
  (e[(e.PistolElimination = 6)] = "PistolElimination"),
  (e[(e.Smg = 7)] = "Smg"),
  (e[(e.AssaultRifle = 8)] = "AssaultRifle"),
  (e[(e.Shotgun = 9)] = "Shotgun"),
  (e[(e.SniperRifle = 10)] = "SniperRifle"),
  (e[(e.AnyPoison = 11)] = "AnyPoison"),
  (e[(e.ConsumedPoison = 12)] = "ConsumedPoison"),
  (e[(e.InjectedPoison = 13)] = "InjectedPoison"),
  (e[(e.AnyAccident = 14)] = "AnyAccident"),
  (e[(e.ExplosiveDevice = 15)] = "ExplosiveDevice"),
  (e[(e.FiberWire = 16)] = "FiberWire"),
  (e[(e.UnarmedNeckSnap = 17)] = "UnarmedNeckSnap"),
  e
))(ay || {});
function iy(e) {
  const t = ry(e);
  return 6 === t || 5 === t
    ? {
        $any: {
          "?": {
            $or: [
              { $eq: ["$.#", "pistol"] },
              { $eq: ["$.#", "close_combat_pistol_elimination"] },
            ],
          },
          in: ["$Value.KillMethodBroad", "$Value.KillMethodStrict"],
        },
      }
    : {
        $any: {
          "?": { $eq: ["$.#", e.RequiredKillMethod] },
          in: ["$Value.KillMethodBroad", "$Value.KillMethodStrict"],
        },
      };
}
function ry(e) {
  const t = e.RequiredKillMethodType;
  if (0 === t) return 0;
  switch (e.KillMethodBroad) {
    case "pistol":
      return 5;
    case "smg":
      return 7;
    case "sniperrifle":
      return 10;
    case "assaultrifle":
      return 8;
    case "shotgun":
      return 9;
    case "close_combat_pistol_elimination":
      return 6;
    case "fiberwire":
      return 16;
    case "throw":
      return 1 === t ? 3 : 4;
    case "melee_lethal":
      return 1 === t ? 1 : 2;
    case "poison":
      return "consumed_poison" === e.KillMethodStrict && 2 === t
        ? 12
        : "injected_poison" === e.KillMethodStrict &&
            2 === e.RequiredKillMethodType
          ? 13
          : ((0, zO.default)(
              1 === t,
              `Unhandled poison: ${e.KillMethodStrict} ${t}`,
            ),
            11);
    case "unarmed":
      return 17;
    case "accident":
      return 14;
    case "explosive":
      return 15;
    default:
      zO.default.fail(`Unhandled condition: ${e.KillMethodBroad} ${t}`);
  }
}
var sy = f(require("assert")),
  oy = (0, jO.Router)();
function ny(e, t) {
  const a = kI(e.jwt.unique_name, e.gameVersion),
    i = [],
    r = Qd("MissionStories", !1);
  if (t.Metadata.Opportunities)
    for (const e of t.Metadata.Opportunities) {
      if (!Object.keys(r).includes(e)) continue;
      r[e].PreviouslyCompleted = e in a.Extensions.opportunityprogression;
      const t = YE(r[e]);
      (delete t.Location, i.push(t));
    }
  return i;
}
(oy.post("/GetForPlay2", (0, VO.json)(), (e, t) => {
  if (!e.body.id || !cE.test(e.body.id)) return void t.status(400).end();
  const a = jb.resolveContract(e.body.id, e.gameVersion);
  if (!a)
    return (
      Ad("error", `Requested unknown contract in GetForPlay2: ${e.body.id}`),
      void t.status(404).end()
    );
  const i = Th(e.jwt.unique_name, e.gameVersion, a),
    r = { CharacterLoadoutData: 0 !== i.length ? i : null };
  (fA.includes(a.Metadata.Type) && (a.Data.EnableSaving = !1),
    (a.Metadata = {
      ...a.Metadata,
      ...(fA.includes(a.Metadata.Type)
        ? bA(e.jwt.unique_name, a.Metadata.InGroup, e.gameVersion)
        : {}),
      ...r,
      OpportunityData: ny(e, a),
    }),
    lE.includes(a.Metadata.Type) &&
      !Rd("enableContractsModeSaving") &&
      (a.Data.EnableSaving = !1));
  const s = {
    Contract: a,
    ContractSessionId: `${process.hrtime.bigint().toString()}-${(0, qO.randomUUID)()}`,
    ContractProgressionData: a.Metadata.UseContractProgressionData
      ? Lm(e.jwt.unique_name, a.Metadata.CpdId)
      : null,
  };
  if (a.Data.GameChangers && a.Data.GameChangers.length > 0) {
    const e = {
      ...Qd("GameChangerProperties", !0),
      ...Qd("PeacockGameChangerProperties", !0),
      ...Qd("EvergreenGameChangerProperties", !0),
    };
    a.Data.GameChangerReferences = a.Data.GameChangerReferences || [];
    for (const t of a.Data.GameChangers) {
      e[t] ||
        Ad(
          "error",
          `GetForPlay has detected a missing GameChanger: ${t}! This is a bug.`,
        );
      const i = e[t];
      ((i.Id = t),
        delete i.ObjectivesCategory,
        0 === a.Data.GameChangerReferences.filter((e) => e.Id === t).length &&
          (sy.default.ok(i.Objectives, "gc has no objectives"),
          a.Data.GameChangerReferences.push(i),
          (a.Data.Bricks = [...(a.Data.Bricks ?? []), ...(i.Resource ?? [])]),
          (a.Data.Objectives = [
            ...(a.Data.Objectives ?? []),
            ...(i.Objectives.map((e) =>
              "evergreen" !== a.Metadata.Type
                ? e
                : {
                    ...e,
                    GameChangerName: i.Name,
                    IsPrestigeObjective: i.IsPrestigeObjective ?? !1,
                  },
            ) ?? []),
          ])));
    }
  }
  (qm(e.jwt.unique_name, {
    Version: oE,
    IsReplicated: !1,
    CreatedContract: null,
    Id: (0, qO.randomUUID)(),
    Name: "ContractSessionMarker",
    UserId: UE,
    ContractId: UE,
    SessionId: null,
    ContractSessionId: s.ContractSessionId,
    Timestamp: 0,
    Value: { Currency: { ContractPaymentAllowed: !0, ContractPayment: null } },
    Origin: null,
  }),
    t.json(s),
    Zm(
      s.ContractSessionId,
      s.Contract.Metadata.Id,
      e.jwt.unique_name,
      e.body.difficultyLevel,
      e.gameVersion,
    ));
  const o = ag(e.jwt.unique_name);
  sy.default.ok(o, "Session should exist");
  for (const e of a.Data.Objectives || []) jm(o, e);
  a.Metadata.Modules && Vm(o, a.Metadata.Modules);
}),
  oy.post("/CreateFromParams", (0, VO.json)(), async (e, t) => {
    const a = Qd("GameChangerProperties", !0),
      i = [],
      r = [],
      s = ag(e.jwt.unique_name);
    if (!s)
      return (
        t.status(400).end(),
        void Ad("warn", "CreateFromParams called without a valid session")
      );
    const o = Math.ceil(s.timerEnd - s.timerStart),
      n = jb.resolveContract(s.contractId, s.gameVersion);
    if (!n)
      return (
        t.status(400).end(),
        void Ad("error", `No such contract creation contract: ${s.contractId}`)
      );
    for (const t of e.body.creationData.Targets) t.Selected && i.push(...ey(t));
    e.body.creationData.ContractConditionIds.forEach((e) => {
      a[e]
        ? r.push(e)
        : "1a596216-381e-4592-9798-26f156973942" === e
          ? i.push(ty(o, !0))
          : "3d6f9119-7ec8-496f-ab4c-ed9757d976a4" === e && i.push(ty(o, !1));
    });
    const c = `${oE._Major}.${oE._Minor}.${oE._Build}.${oE._Revision}`,
      l = {
        Data: { Objectives: i, GameChangers: r, Bricks: n.Data.Bricks },
        Metadata: {
          Title: e.body.creationData.Title,
          Description: e.body.creationData.Description,
          Entitlements: n.Metadata.Entitlements,
          ScenePath: n.Metadata.ScenePath,
          Location: n.Metadata.Location,
          IsPublished: !0,
          CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
          GameVersion: c,
          ServerVersion: c,
          Type: "usercreated",
          Id: e.body.creationData.ContractId,
          PublicId: e.body.creationData.ContractPublicId,
          TileImage: `$($repository ${e.body.creationData.Targets[0]?.RepositoryId}).Image`,
          GroupObjectiveDisplayOrder: e.body.creationData.Targets.map((e) => ({
            Id: e.RepositoryId,
          })),
          CreationTimestamp: new Date().toISOString(),
        },
        UserData: {},
      };
    (await jb.commitNewContract(l), t.json(l));
  }),
  oy.post("/GetContractOpportunities", (0, VO.json)(), (e, t) => {
    const a = jb.resolveContract(e.body.contractId, e.gameVersion);
    a ? t.json(ny(e, a)) : t.status(400).send("contract not found");
  }));
var cy = {};
I(cy, { initializePeacockMenu: () => fy });
var ly = new Map([
    [
      "getAllFlags",
      function () {
        const e = vd(),
          t = [];
        for (const a of Object.keys(e)) {
          const i = Ld[a];
          t.push({
            key: `${a}`,
            title: i.title,
            description: i.desc,
            valueType: "category",
            value: Ay(a, i, e[a]),
          });
        }
        return t;
      },
    ],
    [
      "setFlagBoolean",
      function (e, t) {
        const a = t.key.split("."),
          i = a[0],
          r = a[1];
        if (!Ld[i]?.flags[r]) return;
        (Dd(t.key, "true" === t.value), Md());
      },
    ],
    [
      "setFlagEnum",
      function (e, t) {
        const a = t.key.split("."),
          i = a[0],
          r = a[1];
        if (!Ld[i]?.flags[r]) return;
        (Dd(t.key, t.value), Md());
      },
    ],
  ]),
  dy = {
    "/pages/peacock-menu/index.json":
      '{"$datacontext":{"in":"$.","datavalues":{"@global.CacheBuster":"0"},"do":{"$include":{"$path":"$formatstring menusystem/pages/peacock-menu/options.json@{$.@global.CacheBuster}"}}}}',
    "/pages/peacock-menu/options.json":
      '{"id":"UI_MENU_PEACOCK_FLAGS","view":"menu3.basic.ListElementSmall","controller":"tabsitem","data":{"title":"$loc UI_PEACOCK_BRANDING_SHORT","icon":"fixed"},"actions":{"select":[{"ioiaccount":{"_comment":"Do not trigger an ioiaccount-event after another ioiaccount-event, it will cause the game to crash!","mode":"submit-email","email":"peacock:getAllFlags"}}]},"children":[{"controller":"list","row":1,"col":6.5,"nrows":4.1,"ncols":4,"children":[{"$include":{"$path":"menusystem/elements/settings/generic/optionsinfo_container.json"}}]},{"controller":"list","row":1,"col":6.5,"children":[{"$include":{"$path":"menusystem/elements/settings/generic/optionsgroupinfo_container.json"}}]},{"$include":{"$path":"$formatstring menusystem/pages/peacock-menu/flags/index.json@{$.@global.CacheBuster}"}}]}',
    "/pages/peacock-menu/flags/index.json":
      '{"$datacontext":{"in":"$.","datavalues":{"Flags":"{$ioiaccountstatus}.Commands.getAllFlags"},"do":{"view":"menu3.containers.ScrollingListContainer","controller":"context","direction":"vertical","data":{"direction":"vertical","overflowscrolling":"1.0"},"col":2.25,"nrows":3.75,"ncols":4,"children":{"$mergearrays":[{"$each $.Flags":{"$if $eq($.valueType,category)":{"$then":{"$include":{"$path":"$formatstring menusystem/pages/peacock-menu/flags/category.json@{$.@global.CacheBuster}"}},"$else":{"$include":{"$path":"$formatstring menusystem/pages/peacock-menu/flags/flag.json@{$.@global.CacheBuster}"}}}}},{"$if":{"$condition":{"$include":"menusystem/data/ispeacockdev.json"},"$then":[{"view":"menu3.basic.OptionsListElement","controller":"tabsitem","data":{"title":"Debug - Refresh UI"},"actions":{"accept":{"set-value":{"target":"$.@global.CacheBuster","value":"{$ioiaccountstatus}.CacheBuster"},"_ioiaccount":{"mode":"refresh"}}}},{"view":"menu3.TextboxElement","col":0,"data":{"size":24,"width":500,"text":"$formatstring CacheBuster Version\\n- Next:\\t{{$ioiaccountstatus}.CacheBuster}\\n- Active:\\t{$.@global.CacheBuster}","color":"ffffff"}}]}}]}}}}',
    "/pages/peacock-menu/flags/category.json":
      '{"$datacontext":{"in":"$.","datavalues":{"Title":"$.title","Description":"$.description","Flags":"$.value"},"do":{"view":"menu3.basic.OptionsListElement","controller":"contextitem","data":{"title":"$.Title"},"children":[{"view":"menu3.containers.ScrollingListContainer","controller":"context","direction":"vertical","data":{"direction":"vertical","overflowscrolling":"1.0"},"col":0,"nrows":3.75,"ncols":4,"children":{"$each $.Flags":{"$if $eq($.valueType,category)":{"$then":{"$include":{"$path":"$formatstring menusystem/pages/peacock-menu/flags/category.json@{$.@global.CacheBuster}"}},"$else":{"$include":{"$path":"$formatstring menusystem/pages/peacock-menu/flags/flag.json@{$.@global.CacheBuster}"}}}}}}],"actions":{"select":{"replace-children":{"target":"options_info_container","children":[{"view":"menu3.basic.OptionsInfo","data":{"title":"$.Title","paragraph":"$.Description"}}]}},"deselect":{"replace-children":{"target":"options_info_container","children":[]}}}}}}',
    "/pages/peacock-menu/flags/flag.json":
      '{"$datacontext":{"in":"$.","datavalues":{"Title":"$.title","Description":"$.description","PossibleValues":{"$arraysort":{"source":"$.possibleValues","property":""}}},"do":{"view":"menu3.basic.OptionsListElement","controller":{"$switch $.valueType":[{"case":"enum","return":"contextitem"},{"case":"boolean","return":"tabsitem"}]},"data":{"$mergeobjects":[{"title":"$.Title","value":"$.value"},{"$switch $.valueType":[{"case":"enum","return":{"displayValue":"$formatstring [{$.value}]"}},{"case":"boolean","return":{"toggle":true,"displayValue":{"$if $.value":{"$then":"$formatstring [{$loc UI_AID_VALUE_ON}]","$else":"$formatstring [{$loc UI_AID_VALUE_OFF}]"}}}}]}]},"children":{"$mergearrays":[{"$switch $.valueType":[{"case":"enum","return":{"controller":"tabs","view":"menu3.containers.ScrollingListContainer","data":{"overflowscrolling":"1.0"},"children":{"$each $.PossibleValues":{"view":"menu3.basic.OptionsListElement","controller":"tabsitem","data":{"title":"{$.}"},"actions":{"select":{"replace-children":{"target":"options_info_container","children":[{"view":"menu3.basic.OptionsInfo","data":{"title":"$.@parent.Title","paragraph":"$.@parent.Description"}}]}},"accept":[{"trigger-input":{"action":"cancel"}},{"ioiaccount":{"mode":"submit-email","email":"$formatstring peacock:setFlagEnum?key={$.@parent.key}&value={$.}|getAllFlags"}}]}}}}}]}]},"actions":{"accept":{"$switch $.valueType":[{"case":"boolean","return":{"ioiaccount":{"mode":"submit-email","email":"$formatstring peacock:setFlagBoolean?key={$.key}&value={$not $.value}|getAllFlags"}}}]},"select":{"replace-children":{"target":"options_info_container","children":[{"view":"menu3.basic.OptionsInfo","data":{"title":"$.Title","paragraph":"$.Description"}}]}},"deselect":{"replace-children":{"target":"options_info_container","children":[]}}}}}}',
  };
Object.keys(dy).forEach((e) => {
  dy[e] = JSON.parse(dy[e]);
});
var uy = "/pages/peacock-menu/",
  py = ".json";
function $y(e, t) {
  "h3" === t &&
    e.push("menusystem/elements/settings/ioiaccount/ioiaccount_maintab.json");
}
function _y(e, t) {
  if (
    (e.endsWith("ioiaccount/ioiaccount_maintab.json") &&
      (e = "/pages/peacock-menu/index.json"),
    !e.startsWith(uy))
  )
    return;
  const a = e.indexOf(py),
    i = a < 0 ? e : e.substring(0, a + py.length);
  return dy[i] ?? void 0;
}
function Iy(e, t) {
  if (e.possibleValues) return { valueType: "enum", value: t };
  switch (typeof e.default) {
    case "string":
      return { valueType: "string", value: t };
    case "number":
      return { valueType: "number", value: t };
    case "boolean":
      return { valueType: "boolean", value: t };
  }
}
function Ay(e, t, a) {
  const i = [],
    r = new Map();
  for (const s of Object.keys(t.flags)) {
    const o = t.flags[s];
    if (!1 === o.showIngame) continue;
    const n = Iy(o, a[s]);
    if (!n) continue;
    const c = [];
    (o.requiresGameRestart &&
      c.push("Game has to be restarted before changes take effect!"),
      o.requiresPeacockRestart &&
        c.push("Peacock has to be restarted before changes take effect!"));
    const l = {
      key: `${e}.${s}`,
      title: o.title,
      description: `${o.desc}\n\nDefault value: ${o.default}${c.length > 0 ? "\n\nNotes:\n- " + c.join("\n- ") : ""}`,
      possibleValues: o.possibleValues,
      ...n,
    };
    if (o.category) {
      let t = r.get(o.category);
      (t ||
        ((t = {
          key: `${e}.${o.category}`,
          title: o.category,
          description: "",
          valueType: "category",
          value: [],
        }),
        r.set(o.category, t)),
        t.value.push(l));
    } else i.push(l);
  }
  return [...[...r.values()], ...i];
}
function fy() {
  (Pb.hooks.getDatabaseDiff.tap("PeacockMenu", $y),
    Pb.hooks.getConfig.tap("PeacockMenu", _y),
    tT.handleCommandMap("PeacockMenu", ly));
}
var my = {};
I(my, { multiplayerMenuDataRouter: () => gy });
var gy = (0, f(Ys()).Router)();
(gy.post("/multiplayermatchstatsready", (e, t) => {
  t.json({
    template: null,
    data: {
      contractSessionId: e.query.contractSessionId,
      isReady: !0,
      retryCount: 1,
    },
  });
}),
  gy.post("/multiplayermatchstats", (e, t) => {
    const a = Xm.get(e.query.contractSessionId || "");
    if (!a) return void t.status(404).end();
    const i = [Em(a)];
    if (!a.ghost) throw new Error("no mp details on mp session");
    for (const e in a.ghost.Opponents) {
      const t = Xm.get(a.ghost.Opponents[e]);
      t ? i.push(Em(t)) : i.push({});
    }
    t.json({ template: null, data: { Players: i } });
  }),
  gy.get("/multiplayerpresets", (e, t) => {
    if ("versus" !== e.query.gamemode)
      return void t.status(400).send("unknown gamemode");
    e.query.disguiseUnlockableId ??= "TOKEN_OUTFIT_HITMANSUIT";
    const a = Qd("MultiplayerPresets", !1),
      i = (kI(e.jwt.unique_name, e.gameVersion), new Set());
    for (const e of a) for (const t of e.Data.Contracts) i.add(t);
    t.json({
      template: null,
      data: {
        Presets: a,
        UserCentricContracts: [...i].map((t) =>
          SA(
            jb.resolveContract(t, e.gameVersion),
            e.jwt.unique_name,
            e.gameVersion,
          ),
        ),
        LoadoutData: Tm(0, e.query.disguiseUnlockableId, e.gameVersion),
      },
    });
  }),
  gy.get("/multiplayer", (e, t) => {
    if ("versus" !== e.query.gamemode)
      return void t.status(400).send("unknown gamemode");
    e.query.disguiseUnlockableId ??= "TOKEN_OUTFIT_HITMANSUIT";
    kI(e.jwt.unique_name, e.gameVersion);
    t.json({
      template: null,
      data: { LoadoutData: Tm(0, e.query.disguiseUnlockableId, e.gameVersion) },
    });
  }));
var Cy = {
    "@peacockproject/core/commandService": ql,
    "@peacockproject/core/configSwizzleManager": Bd,
    "@peacockproject/core/controller": uA,
    "@peacockproject/core/databaseHandler": K_,
    "@peacockproject/core/entitlementStrategies": aT,
    "@peacockproject/core/eventHandler": hf,
    "@peacockproject/core/evergreen": ym,
    "@peacockproject/core/flags": Td,
    "@peacockproject/core/hooksImpl": Wl,
    "@peacockproject/core/hotReloadService": dT,
    "@peacockproject/core/inventory": Yd,
    "@peacockproject/core/loadouts": $T,
    "@peacockproject/core/loggingInterop": td,
    "@peacockproject/core/menuData": LT,
    "@peacockproject/core/oauthToken": fO,
    "@peacockproject/core/officialServerAuth": HA,
    "@peacockproject/core/ownership": jd,
    "@peacockproject/core/platformEntitlements": bu,
    "@peacockproject/core/playStyles": vT,
    "@peacockproject/core/profileHandler": hh,
    "@peacockproject/core/scoreHandler": NT,
    "@peacockproject/core/smfSupport": $b,
    "@peacockproject/core/utils": Cd,
    "@peacockproject/core/webFeatures": hO,
    "@peacockproject/core/2016/legacyContractHandler": MO,
    "@peacockproject/core/2016/legacyMenuData": kO,
    "@peacockproject/core/2016/legacyProfileRouter": QO,
    "@peacockproject/core/candle/challengeHelpers": pf,
    "@peacockproject/core/candle/challengeService": WA,
    "@peacockproject/core/candle/masteryService": sb,
    "@peacockproject/core/candle/progressionService": cb,
    "@peacockproject/core/contracts/contractRouting": YO,
    "@peacockproject/core/contracts/contractsModeRouting": YT,
    "@peacockproject/core/contracts/dataGen": IA,
    "@peacockproject/core/contracts/elusiveTargetArcades": ub,
    "@peacockproject/core/contracts/elusiveTargets": Yh,
    "@peacockproject/core/contracts/hitsCategoryService": xh,
    "@peacockproject/core/contracts/leaderboards": zh,
    "@peacockproject/core/contracts/missionsInLocation": jA,
    "@peacockproject/core/contracts/sessions": x_,
    "@peacockproject/core/discord/client": Lf,
    "@peacockproject/core/discord/discordRp": Sf,
    "@peacockproject/core/discord/ipc": Df,
    "@peacockproject/core/livesplit/liveSplitClient": Jf,
    "@peacockproject/core/livesplit/liveSplitManager": zf,
    "@peacockproject/core/menus/campaigns": am,
    "@peacockproject/core/menus/destinations": RT,
    "@peacockproject/core/menus/favoriteContracts": Bh,
    "@peacockproject/core/menus/hub": oO,
    "@peacockproject/core/menus/imageHandler": Tb,
    "@peacockproject/core/menus/menuSystem": fb,
    "@peacockproject/core/menus/planning": Ch,
    "@peacockproject/core/menus/playerProfile": lO,
    "@peacockproject/core/menus/playnext": dh,
    "@peacockproject/core/menus/settings": cy,
    "@peacockproject/core/menus/sniper": bh,
    "@peacockproject/core/menus/stashpoints": Zh,
    "@peacockproject/core/multiplayer/multiplayerMenuData": my,
    "@peacockproject/core/multiplayer/multiplayerService": pm,
    "@peacockproject/core/multiplayer/multiplayerUtils": gm,
    "@peacockproject/core/statemachines/contextListeners": XA,
    "@peacockproject/core/statemachines/contractCreation": WO,
    "@peacockproject/core/contracts/escalations/escalationService": AA,
  },
  by = f(hc(), 1),
  {
    program: Ey,
    createCommand: Ty,
    createArgument: hy,
    createOption: Oy,
    CommanderError: yy,
    InvalidArgumentError: Sy,
    InvalidOptionArgumentError: Ly,
    Command: Ny,
    Argument: Ry,
    Option: Dy,
    Help: Py,
  } = by.default,
  My = f(vl()),
  Uy = require("fs/promises"),
  wy = require("fs"),
  Gy = f(kl()),
  vy = require("path"),
  By = f(b()),
  ky = f(zo()),
  Hy = f(Vl()),
  Qy = "thepeacockproject/ImagePack";
var Ky = require("fs"),
  Fy = f(Ys()),
  xy = f(require("http")),
  Yy = require("fs"),
  jy = f(Jr()),
  Vy = f(Fs()),
  qy = f(b()),
  Wy = process.env.HOST || "0.0.0.0",
  Xy = process.env.PORT || 80;
process.on("uncaughtException", function (e) {
  (((e.message || "").includes("EADDRINUSE") ||
    (e.message || "").includes("EACCES") ||
    (e.stack || "").includes("EADDRINUSE")) &&
    (Ad("error", `Failed to use the server on ${Wy}:${Xy}!`),
    Ad("error", "This is likely due to one of the following reasons:"),
    Ad("error", "  - Peacock is already running on this port"),
    Ad("error", "  - Another app is already using this port (like IIS server)"),
    Ad(
      "error",
      "  - Your user account doesn't have permission (firewall can block it)",
    ),
    Ad(
      "info",
      "Check this wiki page: https://thepeacockproject.org/wiki/troubleshooting/fix-port-in-use for steps on how to fix this!",
    ),
    process.exit(1)),
    e.isAxiosError && QE(e),
    Ad("error", e.message),
    e.stack && Ad("error", e.stack));
});
var zy = (0, Fy.default)(),
  Jy = __dirname;
function Zy(e) {
  return {
    bloburl: `${e.protocol}://${e.get("Host")}/resources-${e.serverVersion}/`,
    blobsig: `?sv=2018-03-28&ver=${e.gameVersion}`,
    blobsigduration: 72e5,
  };
}
(zy.use(function (e, t, a) {
  ((e.url = e.url.replaceAll("//", "/")), a());
}),
  zy.use(fd),
  Rd("developmentLogRequests") && zy.use(md),
  zy.use("/_wf", LO),
  zy.get("/", (e, t) => {
    const a = (0, Yy.readFileSync)(`${Jy}/webui/dist/index.html`).toString();
    (t.contentType("text/html"), t.send(a));
  }),
  zy.use(
    "/assets",
    (0, Vy.default)(`${Jy}/webui/dist/assets`, {
      setHeaders: (e, t) => {
        (t.includes(".js") && e.contentType("application/javascript"),
          t.includes(".css") && e.contentType("text/css"));
      },
    }),
  ),
  zy.use(function (e, t, a) {
    (t.contentType("text/plain"), a());
  }),
  "PROFILES" === Rd("loadoutSaving") && zy.use("/loadouts", ST),
  zy.get("/config/:audience/:serverVersion", (e, t) => {
    const a = zE(e.params.serverVersion);
    if (!a) return void t.status(400).send("Bad/no server version.");
    const i = e.protocol,
      r = Qd("ServerVersionConfig", !0),
      s = e.get("Host");
    ((r.Versions[0].GAME_VER = "6.74.0"),
      8 === a?._Major
        ? ((r.Versions[0].GAME_VER = `${oE._Major}.${oE._Minor}.${oE._Build}`),
          (r.Versions[0].SERVER_VER.GlobalAuthentication.RequestedAudience =
            "pc-prod_8"))
        : 7 === a?._Major &&
          ((r.Versions[0].GAME_VER = "7.17.0"),
          (r.Versions[0].SERVER_VER.GlobalAuthentication.RequestedAudience =
            "pc-prod_7")),
      6 === a?._Major &&
        (r.Versions[0].SERVER_VER.GlobalAuthentication.RequestedAudience =
          "pc-prod_6"),
      e.query.issuer === oA &&
        (r.Versions[0].SERVER_VER.GlobalAuthentication.RequestedAudience =
          "steam-prod_8"),
      "scpc-prod" === e.params.audience &&
        ((r.Versions[0].Name = "scpc-prod"),
        (r.Versions[0].GAME_VER = "7.3.0"),
        (r.Versions[0].SERVER_VER.GlobalAuthentication.RequestedAudience =
          "scpc-prod")),
      (r.Versions[0].ISSUER_ID = e.query.issuer || "*"),
      (r.Versions[0].SERVER_VER.Metrics.MetricsServerHost = `${i}://${s}`),
      (r.Versions[0].SERVER_VER.Authentication.AuthenticationHost = `${i}://${s}`),
      (r.Versions[0].SERVER_VER.Configuration.Url = `${i}://${s}/files/onlineconfig.json`),
      (r.Versions[0].SERVER_VER.Configuration.AgreementUrl = `${i}://${s}/files/privacypolicy/hm3/privacypolicy.json`),
      (r.Versions[0].SERVER_VER.Resources.ResourcesServicePath = `${i}://${s}/files`),
      (r.Versions[0].SERVER_VER.GlobalAuthentication.AuthenticationHost = `${i}://${s}`),
      t.json(r));
  }),
  zy.get("/files/privacypolicy/hm3/privacypolicy_:version.json", (e, t) => {
    (t.set("Content-Type", "application/octet-stream"),
      t.set("x-ms-meta-version", "20181001"),
      t.send(Qd("PrivacyPolicy", !1)));
  }),
  zy.post("/api/metrics/add", jy.default.json({ limit: "10Mb" }), (e, t) => {
    for (const t of e.body) jb.hooks.newMetricsEvent.call(t, e);
    t.send();
  }),
  zy.post(
    "/oauth/token",
    function (e, t, a) {
      ((e.headers["content-type"] = "application/x-www-form-urlencoded"), a());
    },
    Fy.default.urlencoded({ extended: !1 }),
    (e, t) => {
      TO(e)
        .then((e) =>
          e === bO
            ? t.status(400).send()
            : e === EO
              ? t.status(406).send()
              : t.json(e),
        )
        .catch((e) => {
          (Ad("error", e.message), t.status(500).send());
        });
    },
  ),
  zy.get("/files/onlineconfig.json", (e, t) => {
    (t.set("Content-Type", "application/octet-stream"),
      t.send(Qd("OnlineConfig", !1)));
  }),
  zy.use(
    (0, Fy.Router)()
      .use("/resources-:serverVersion/", (e, t, a) => {
        ((e.serverVersion = e.params.serverVersion),
          (e.gameVersion = "h1"),
          e.serverVersion.startsWith("8")
            ? (e.gameVersion = "h3")
            : e.serverVersion.startsWith("7") && (e.gameVersion = "h2"),
          "7.3.0" === e.serverVersion && (e.gameVersion = "scpc"),
          a("router"));
      })
      .use(IE, (e, t, a) => {
        switch (e.jwt?.pis) {
          case "egp_io_interactive_hitman_the_complete_first_season":
          case tA:
          case iA:
            e.serverVersion = "6-74";
            break;
          case rA:
            e.serverVersion = "7-17";
            break;
          case "fghi4567xQOCheZIin0pazB47qGUvZw4":
          case oA:
            e.serverVersion = "8-23";
            break;
          default:
            return void t.status(400).json({ message: "no game data" });
        }
        ((e.gameVersion = "h1"),
          e.serverVersion.startsWith("8")
            ? (e.gameVersion = "h3")
            : e.serverVersion.startsWith("7") && (e.gameVersion = "h2"),
          "scpc-prod" === e.jwt?.aud && (e.gameVersion = "scpc"),
          a());
      }),
  ),
  zy.get("/authentication/api/configuration/Init", IE, (e, t) => {
    (t.json({
      token: `${e.jwt.exp}-${e.jwt.nbf}-${e.jwt.platform}-${e.jwt.userid}`,
      blobconfig: Zy(e),
      profileid: e.jwt.unique_name,
      serverversion: `${oE._Major}.${oE._Minor}.${oE._Build}.${oE._Revision}`,
      servertimeutc: new Date().toISOString(),
      ias: 2,
    }),
      jb.hooks.onUserLogin.call(e.gameVersion, e.jwt.unique_name));
  }),
  zy.post(
    "/authentication/api/userchannel/AuthenticationService/RenewBlobSignature",
    (e, t) => {
      t.json(Zy(e));
    },
  ));
var eS = (0, Fy.Router)(),
  tS = (0, Fy.Router)();
(eS.use("/authentication/api/userchannel/", xO),
  eS.use("/profiles/page/", HO),
  eS.use("/authentication/api/userchannel/ContractsService/", vO),
  eS.use("/authentication/api/userchannel/ContractSessionsService/", vO),
  tS.use("/authentication/api/userchannel/MultiplayerService/", Am),
  tS.use("/authentication/api/userchannel/EventsService/", Km),
  tS.use("/authentication/api/userchannel/ContractsService/", oy),
  tS.get(
    "/authentication/api/userchannel/ReportingService/ReportContract",
    (e, t) => {
      t.json({});
    },
  ),
  tS.use("/authentication/api/userchannel/", Rh),
  tS.use("/profiles/page", gy),
  tS.use("/profiles/page/", uO),
  tS.use("/resources-:serverVersion/", Nb),
  tS.use("/resources-:serverVersion/", Rb),
  zy.use(
    (0, Fy.Router)()
      .use((e, t, a) =>
        e.shouldCease
          ? a("router")
          : "6-74" === e.serverVersion || "7-3" === e.serverVersion
            ? a()
            : void a("router"),
      )
      .use(eS),
    (0, Fy.Router)()
      .use((e, t, a) =>
        e.shouldCease
          ? a("router")
          : ["6-74", "7-3", "7-17", "8-23"].includes(e.serverVersion)
            ? a()
            : void a("router"),
      )
      .use(tS),
  ),
  zy.all("*splat", (e, t) => {
    (Ad("debug", `Unhandled URL: ${e.url}`), t.status(404).send("Not found!"));
  }),
  zy.use(gd));
var aS = Math.random();
var iS = f(require("node:process"));
(Ud(),
  Ey.description(
    "The Peacock Project is a HITMAN™ World of Assassination Trilogy server replacement.",
  ),
  Ey.option("-v, --version", "print the version number and exit"),
  Ey.option(
    "--hmr",
    "enable experimental hot reloading of contracts",
    Rd("experimentalHMR"),
  ),
  Ey.option(
    "--plugin-dev-host",
    "activate plugin development features - requires plugin dev workspace setup",
    Rd("developmentPluginDevHost"),
  ),
  Ey.action((e) =>
    e.version
      ? (console.log(`Peacock ${nE}`), iS.exit())
      : (async function (e) {
          (sE ||
            console.log(
              aS < 0.01
                ? qy.default.blue(
                    "\n ███████████  ██████████ ██████████   █████████     ███████      █████████  █████   ████\n░░███░░░░░███░░███░░░░░█░░███░░░░░█  ███░░░░░███  ███░░░░░███   ███░░░░░███░░███   ███░\n ░███    ░███ ░███  █ ░  ░███  █ ░  ███     ░░░  ███     ░░███ ███     ░░░  ░███  ███\n ░██████████  ░██████    ░██████   ░███         ░███      ░███░███          ░███████\n ░███░░░░░░   ░███░░█    ░███░░█   ░███         ░███      ░███░███          ░███░░███\n ░███         ░███ ░   █ ░███ ░   █░░███     ███░░███     ███ ░░███     ███ ░███ ░░███\n █████        ██████████ ██████████ ░░█████████  ░░░███████░   ░░█████████  █████ ░░████\n░░░░░        ░░░░░░░░░░ ░░░░░░░░░░   ░░░░░░░░░     ░░░░░░░      ░░░░░░░░░  ░░░░░   ░░░░\n",
                  )
                : qy.default.greenBright(
                    "\n ███████████  ██████████   █████████     █████████     ███████      █████████  █████   ████\n░░███░░░░░███░░███░░░░░█  ███░░░░░███   ███░░░░░███  ███░░░░░███   ███░░░░░███░░███   ███░\n ░███    ░███ ░███  █ ░  ░███    ░███  ███     ░░░  ███     ░░███ ███     ░░░  ░███  ███\n ░██████████  ░██████    ░███████████ ░███         ░███      ░███░███          ░███████\n ░███░░░░░░   ░███░░█    ░███░░░░░███ ░███         ░███      ░███░███          ░███░░███\n ░███         ░███ ░   █ ░███    ░███ ░░███     ███░░███     ███ ░░███     ███ ░███ ░░███\n █████        ██████████ █████   █████ ░░█████████  ░░░███████░   ░░█████████  █████ ░░████\n░░░░░        ░░░░░░░░░░ ░░░░░   ░░░░░   ░░░░░░░░░     ░░░░░░░      ░░░░░░░░░  ░░░░░   ░░░░\n",
                  ),
            ),
            Ad(
              "info",
              `This is Peacock v${nE}-${qy.default.green("crack")} with Node v${process.versions.node}.`,
            ),
            aS < 0.01 &&
              Ad(
                "info",
                `Much ${qy.default.redBright("<3")} to ${qy.default.underline("cs.rin.ru")} ~ Cy`,
              ),
            !0 === Rd("updateChecking") &&
              Ad(
                "info",
                qy.default.green(
                  "Get your updates from here: https://cs.rin.ru/forum/viewtopic.php?p=3002498#p3002498",
                ),
              ),
            !0 === Rd("jokes") &&
              Ad(
                "info",
                qy.default.yellowBright(`${BE[lh.int(0, BE.length - 1)]}`),
              ));
          try {
            (await WI(),
              e.hmr &&
                pT("contracts", () => {
                  (Ad("info", "Detected a change in contracts! Re-indexing..."),
                    jb
                      .index()
                      .then(() =>
                        Ad("info", "Completed re-indexing.", "contracts"),
                      ));
                }),
              await yT.init(),
              await jb.boot(e.pluginDevHost),
              Md());
            const t = xy.default.createServer(zy);
            return (
              Ad("info", `Listening on ${Wy}:${Xy}...`),
              t.listen(Xy, Wy),
              Ad("info", "Server started."),
              !0 === Rd("discordRp") && Yf(),
              await um.init(),
              void fy()
            );
          } catch (e) {
            (Ad("error", "Critical error during bootstrap!"),
              Ad("error", e?.stack ?? e));
          }
        })(e),
  ),
  Ey.command("noop")
    .description("generate file structure and exit")
    .action(() => iS.exit()),
  Ey.command("tools")
    .description("open the tools UI")
    .option("-s, --skip", "Skip encrypting the debug profile", !1)
    .action(async function () {
      switch (
        (
          await (0, My.default)({
            name: "actions",
            message: "Select actions:",
            type: "select",
            choices: [
              {
                title: "Export debug info",
                description:
                  "This option is disabled since the devs do not support piracy.",
                value: "debug",
              },
              {
                title: "Download contract from IOI servers",
                description: "Download a contract from IOI's servers.",
                value: "download-contract",
              },
              {
                title: "Download all assets for offline use",
                description:
                  "Downloads all the files you need to use Peacock fully offline.",
                value: "download-images",
              },
            ],
          })
        ).actions
      ) {
        case "debug":
          Ad(
            "warn",
            By.default.yellowBright(
              "You are a pirate, there is no need to export debug info, as you shouldn't be wasting peacock support's time with your issues!",
            ),
          );
          break;
        case "download-images":
          await (async function () {
            const e = (0, wy.createWriteStream)(
              (0, vy.resolve)(__dirname, "offlineassets.zip"),
            );
            let t, a;
            Ad("info", "Starting asset download...");
            try {
              const e = await O_.get(
                `https://api.github.com/repos/${Qy}/releases/latest`,
              );
              ((a = e.data.assets[0].size),
                (t = await O_.get(e.data.assets[0].browser_download_url, {
                  responseType: "stream",
                })));
            } catch (e) {
              throw (
                Ad("error", "Unable to complete download due to an error!"),
                e
              );
            }
            const i = new Gy.default(
              `${By.default.blue("--\x3e Downloading")} [:bar] ${By.default.magenta("(:percent)")}`,
              {
                width: 40,
                complete: "=",
                incomplete: " ",
                renderThrottle: 1,
                total: a,
              },
            );
            (t.data.on("data", (e) => {
              i.tick(e.length);
            }),
              t.data.pipe(e),
              await new Promise((t) => {
                e.on("finish", t);
              }),
              Ad("info", "Extracting files..."));
            const r = new Hy.ZipFS(ky.ppath.resolve("offlineassets.zip"), {
              readOnly: !0,
            });
            (await ky.xfs.copyPromise(ky.ppath.resolve("images"), "/images", {
              baseFs: r,
              overwrite: !0,
            }),
              Ad("info", "Done!"),
              await ky.xfs.unlinkPromise("offlineassets.zip"));
          })();
          break;
        case "download-contract":
          await (async function () {
            (Ad("info", "Contract downloading tool - powered by HITMAPS"),
              Ad(
                "info",
                "NOTE: This tool only works for HITMAN 3 contracts that are on Steam, Epic, or PlayStation.",
              ));
            const { contractId: e } = await (0, My.default)({
                type: "text",
                name: "contractId",
                message: "Enter the contract ID (with dashes)",
              }),
              t = await Kb._hitmapsFetchContract(e, "h3");
            if (!t)
              return void Ad(
                "error",
                `Unable to resolve ${e}. This may be because HITMAPS' bot is not authenticated, or the contract was not found.`,
              );
            ((t.Metadata.CreatorUserId =
              "fadb923c-e6bb-4283-a537-eb4d1150262e"),
              (0, wy.existsSync)("contracts") ||
                (0, wy.mkdirSync)("contracts"));
            (await (0, Uy.writeFile)(
              `contracts/${e}.json`,
              JSON.stringify(t, void 0, 4),
            ),
              Ad("info", "Successfully saved the contract!"));
          })();
          break;
        default:
          Ad("error", "Unknown action!");
      }
    }),
  Ey.command("pack")
    .argument("<input>", "input file to pack")
    .option("-o, --output <path>", "where to output the packed file to", "")
    .description("packs an input file into a Challenge Resource Package")
    .action((e, t) => {
      const a = t.output || e.replace(/\.[^/\\.]+$/, ".crp");
      ((0, Ky.writeFileSync)(
        a,
        GC(JSON.parse((0, Ky.readFileSync)(e).toString())),
      ),
        Ad("info", `Packed "${e}" to "${a}" successfully.`));
    }),
  Ey.command("unpack")
    .argument("<input>", "input file to unpack")
    .option("-o, --output <path>", "where to output the unpacked file to", "")
    .description("unpacks a Challenge Resource Package")
    .action((e, t) => {
      const a = t.output || e.replace(/\.[^/\\.]+$/, ".json");
      ((0, Ky.writeFileSync)(a, JSON.stringify(IC((0, Ky.readFileSync)(e)))),
        Ad("info", `Unpacked "${e}" to "${a}" successfully.`));
    }),
  Ey.parse(iS.argv));

