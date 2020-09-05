window = {
    "parseInt": parseInt,
};

function encode(e) {
    var i = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";

    function SwsR(e) {
      var t = "";
      var r = e["length"] / 6;

      for (var n = 0; n < r; n = n + 1) {
        t += i["charAt"](window["parseInt"](e["slice"](n * 6, (n + 1) * 6), 2));
      }

      return t;
    }

    function t(e) {
      var t = [];
      var r = [];
      var n = [];
      var i = [];

      for (var o = 0, a = e["length"]; o < a; o = o + 1) {
        var s = e[o];
        var _ = s["length"];
        t["push"](s[0]);
        r["push"](_ === 2 ? s[1] : s[2]);

        if (_ === 3) {
          n["push"](s[1][0]);
          i["push"](s[1][1]);
        }
      }

      var c = g(t);
      var l = YlIj(r, false);
      var u = YlIj(n, true);
      var f = YlIj(i, true);
      var p = c + l + u + f;
      var d = p["length"];

      if (d % 6 != 0) {
        p += Tr_F(0, 6 - d % 6);
      }

      return SwsR(p);
    }

    var p = {
        "move": 0,
        "down": 1,
        "up": 2,
        "scroll": 3,
        "focus": 4,
        "blur": 5,
        "unload": 6,
        "unknown": 7
      };
      var d = 8;

      function Tr_F(e, t) {
        var r = e["toString"](2);
        var n = r["length"];
        var i = "";

        for (var o = n + 1; o <= t; o = o + 1) {
          i += "0";
        }

        r = i + r;
        return r;
      }

      function g(e) {
        var t = [];
        var r = e["length"];
        var n = 0;

        while (n < r) {
          var i = e[n];
          var o = 0;

          while (true) {
            if (o >= 1 << 4) {
              break;
            }

            var a = n + o + 1;

            if (a >= r) {
              break;
            }

            var s = e[a];

            if (s !== i) {
              break;
            }

            o += 1;
          }

          n = n + 1 + o;
          var _ = p[i];

          if (o != 0) {
            t["push"](_ | d);
            t["push"](o - 1);
          } else {
            t["push"](_);
          }
        }

        var c = Tr_F(r | 32768, 16);
        var l = "";

        for (var u = 0, f = t["length"]; u < f; u = u + 1) {
          l += Tr_F(t[u], 4);
        }

        return c + l;
      }

      function UyHc(e, t) {
        var r = [];

        for (var n = 0, i = e["length"]; n < i; n = n + 1) {
          r["push"](t(e[n]));
        }

        return r;
      }

      function VySC(e, t) {
        var r = [];
        UyHc(e, function (e) {
          if (t(e)) {
            r["push"](e);
          }
        });
        return r;
      }

      function WaSD(e) {
        var t = (1 << 15) - 1;
        e = UyHc(e, function (e) {
          if (e > t) {
            return t;
          } else if (e < -t) {
            return -t;
          }

          return e;
        });
        var r = e["length"];
        var n = 0;
        var i = [];

        while (n < r) {
          var o = 1;
          var a = e[n];
          var s = Math["abs"](a);

          while (true) {
            if (n + o >= r) {
              break;
            }

            if (e[n + o] !== a) {
              break;
            }

            if (s >= 127 || o >= 127) {
              break;
            }

            o += 1;
          }

          if (o > 1) {
            i["push"]((a < 0 ? 49152 : 32768) | o << 7 | s);
          } else {
            i["push"](a);
          }

          n += o;
        }

        return i;
      }

      function XyMI(e, t) {
        if (e === 0) {
          return 0;
        }

        return Math["log"](e) / Math["log"](t);
      }

      function YlIj(e, t) {
        e = WaSD(e);
        var r = [],
            n = [],
            i;
        UyHc(e, function (e) {
          var t = Math["ceil"](XyMI(Math["abs"](e) + 1, 16));

          if (t === 0) {
            t = 1;
          }

          r["push"](Tr_F(t - 1, 2));
          n["push"](Tr_F(Math["abs"](e), t * 4));
        });
        var o = r["join"]("");
        var a = n["join"]("");

        if (!t) {
          i = "";
        } else {
          i = UyHc(VySC(e, function (e) {
            return e != 0 && e >> 15 != 1;
          }), function (e) {
            return e < 0 ? "1" : "0";
          })["join"]("");
        }

        var s = Tr_F(e["length"] | 32768, 16);
        return s + o + a + i;
      }

      return t(e);
}

uxLQ = function (e) {
    var t = 0,
        r = 0,
        n = 0,
        i = 0;
    var o = [];
    // var a = this;
    // var s = a["lastTime"];
    var s = 0;
    if (e["length"] <= 0) {
      return [];
    }

    var _ = null;
    var c = null;
    var l = voNa(e);
    var u = l["length"];
    var f = u < 300 ? 0 : u - 300;

    for (; f < u; f = f + 1) {
      var p = l[f];
      var d = p[0];

      if (feDy(d, 2) > -1) {
        if (!_) {
          _ = p;
        }

        c = p;
        o["push"]([d, [p[1] - t, p[2] - r], tfSc(s ? p[3] - s : s)]);
        t = p[1];
        r = p[2];
        s = p[3];
      } else if (feDy(d, 3) > -1) {
        o["push"]([d, tfSc(s ? p[1] - s : s)]);
        s = p[1];
      }
    }

    a = {};
    a["ksti"] = _;
    a["luPc"] = c;
    return o;
}

tfSc = function (e) {
    var t = (1 << 15) - 1;

    if (typeof e !== "number") {
      return e;
    } else if (e > t) {
      e = t;
    } else if (e < -t) {
      e = -t;
    }

    return Math["round"](e);
  }

voNa = function (e) {
    var t = "",
        r = 0;
    var n = (e || [])["length"];

    while (!t && e[r]) {
      t = e[r] && e[r][4];
      r++;
    }

    if (!t) {
      return e;
    }

    var i = "";
    var o = ["mouse", "touch", "pointer", "MSPointer"];

    for (var a = 0, s = o["length"]; a < s; a++) {
      if (t["indexOf"](o[a]) === 0) {
        i = o[a];
      }
    }

    var _ = e["slice"]();

    for (var c = _["length"] - 1; c >= 0; c--) {
      var l = _[c];
      var u = l[0];

      if (feDy(u, 1) > -1) {
        var f = l[4] || "";

        if (f["indexOf"](i) !== 0) {
          _["splice"](c, 1);
        }
      }
    }

    return _;
  }

feDy = function (e, index) {

    var r;
    switch(index) {
        case 1:
            r = ["move", "down", "up"];
            break
        case 2:
            r = ["down", "move", "up", "scroll"];
            break
        case 3:
            r = ["blur", "focus", "unload"];
            break

    }
    // var t = this;
    // var r = ["move", "down", "up"];

    if (!r["indexOf"]) {
      for (var n = 0, i = r["length"]; n < i; n = n + 1) {
        if (r[n] === e) {
          return n;
        }
      }

      return -1;
    }

    return r["indexOf"](e);
}

// console.log(feDy('up'));

// t = [["move", 143, 379, 1598003210923, "pointermove"], ["move", 165, 373, 1598003210928, "pointermove"]]


// console.log(voNa(t));
// console.log(uxLQ(t));

// console.log(encode(uxLQ(t)));


function initT() {
    // t = [["move",1227,382,1598164759052,"pointermove"],["move",1252,394,1598164759057,"pointermove"],["move",1265,398,1598164759074,"pointermove"],["move",1278,405,1598164759093,"pointermove"],["move",1280,407,1598164759107,"pointermove"],["move",1281,408,1598164759124,"pointermove"],["move",1281,409,1598164759140,"pointermove"],["move",1282,409,1598164759157,"pointermove"],["move",1282,410,1598164759174,"pointermove"],["move",1284,411,1598164759191,"pointermove"],["move",1300,413,1598164759234,"pointermove"],["move",1319,414,1598164759240,"pointermove"],["move",1330,416,1598164759257,"pointermove"],["move",1333,417,1598164759274,"pointermove"],["move",1336,419,1598164759290,"pointermove"],["move",1340,420,1598164759308,"pointermove"],["move",1343,420,1598164759325,"pointermove"],["move",1343,421,1598164759341,"pointermove"],["move",1344,421,1598164759358,"pointermove"],["down",1344,421,1598164759390,"pointerdown"],["focus",1598164759398],["up",1344,421,1598164759464,"pointerup"],["move",1344,422,1598164759730,"pointermove"],["move",1345,423,1598164762730,"pointermove"],["move",1351,432,1598164762735,"pointermove"],["move",1361,445,1598164762748,"pointermove"],["move",1379,456,1598164762765,"pointermove"],["move",1419,469,1598164762781,"pointermove"],["move",1445,478,1598164762798,"pointermove"],["move",1468,486,1598164762814,"pointermove"],["move",1482,491,1598164762831,"pointermove"],["move",1509,498,1598164762848,"pointermove"],["move",1551,508,1598164762865,"pointermove"],["move",1595,518,1598164762880,"pointermove"],["move",1615,522,1598164762896,"pointermove"],["move",1621,523,1598164762913,"pointermove"],["move",1621,521,1598164763080,"pointermove"],["move",1616,515,1598164763096,"pointermove"],["move",1603,504,1598164763113,"pointermove"],["move",1596,498,1598164763129,"pointermove"],["move",1593,494,1598164763146,"pointermove"],["move",1592,491,1598164763163,"pointermove"],["move",1591,488,1598164763180,"pointermove"],["move",1590,486,1598164763196,"pointermove"],["move",1589,486,1598164763213,"pointermove"],["move",1587,485,1598164763266,"pointermove"],["move",1585,484,1598164763281,"pointermove"],["move",1580,483,1598164763296,"pointermove"],["move",1579,483,1598164763313,"pointermove"],["move",1579,482,1598164763363,"pointermove"],["down",1579,482,1598164763387,"pointerdown"],["focus",1598164763391],["up",1579,482,1598164763498,"pointerup"]]
    t = [["blur",1598234493338],["move",220,436,1598234493849,"pointermove"],["move",235,430,1598234493856,"pointermove"],["move",251,425,1598234493864,"pointermove"],["move",265,419,1598234493872,"pointermove"],["move",275,418,1598234493880,"pointermove"],["move",283,415,1598234493889,"pointermove"],["move",290,414,1598234493896,"pointermove"],["move",297,412,1598234493903,"pointermove"],["move",302,411,1598234493911,"pointermove"],["move",305,410,1598234493919,"pointermove"],["move",309,409,1598234493927,"pointermove"],["move",314,408,1598234493935,"pointermove"],["move",320,408,1598234493942,"pointermove"],["move",323,408,1598234493951,"pointermove"],["move",326,408,1598234493959,"pointermove"],["move",330,408,1598234493967,"pointermove"],["move",332,408,1598234493975,"pointermove"],["move",335,408,1598234493981,"pointermove"],["move",336,409,1598234493989,"pointermove"],["move",338,409,1598234493997,"pointermove"],["move",340,410,1598234494005,"pointermove"],["move",342,412,1598234494012,"pointermove"],["move",344,413,1598234494021,"pointermove"],["move",345,414,1598234494037,"pointermove"],["move",346,414,1598234494045,"pointermove"],["move",347,414,1598234494075,"pointermove"],["move",348,414,1598234494099,"pointermove"],["move",349,412,1598234494107,"pointermove"],["move",350,412,1598234494114,"pointermove"],["move",352,411,1598234494123,"pointermove"],["move",352,410,1598234494128,"pointermove"],["move",353,409,1598234494136,"pointermove"],["move",354,408,1598234494145,"pointermove"],["move",355,408,1598234494153,"pointermove"],["move",355,407,1598234494161,"pointermove"],["move",356,407,1598234494168,"pointermove"],["move",357,406,1598234494341,"pointermove"],["move",358,405,1598234494348,"pointermove"],["move",359,404,1598234494355,"pointermove"],["move",360,403,1598234494363,"pointermove"],["move",361,402,1598234494371,"pointermove"],["move",361,401,1598234494387,"pointermove"],["move",362,400,1598234495088,"pointermove"],["move",363,400,1598234495102,"pointermove"],["move",364,399,1598234495111,"pointermove"],["move",364,398,1598234495119,"pointermove"],["move",365,398,1598234495127,"pointermove"],["move",367,396,1598234495151,"pointermove"],["move",370,395,1598234495158,"pointermove"],["move",371,394,1598234495166,"pointermove"],["move",374,393,1598234495174,"pointermove"],["move",376,390,1598234495179,"pointermove"],["move",378,390,1598234495187,"pointermove"],["move",381,388,1598234495196,"pointermove"],["move",386,387,1598234495204,"pointermove"],["move",390,385,1598234495212,"pointermove"],["move",406,380,1598234495220,"pointermove"],["move",418,375,1598234495228,"pointermove"],["move",441,367,1598234495236,"pointermove"],["move",461,361,1598234495244,"pointermove"],["move",474,358,1598234495253,"pointermove"],["move",495,352,1598234495259,"pointermove"],["move",515,346,1598234495267,"pointermove"],["move",527,342,1598234495275,"pointermove"],["move",537,338,1598234495283,"pointermove"],["move",547,333,1598234495291,"pointermove"],["move",559,328,1598234495299,"pointermove"],["move",566,325,1598234495307,"pointermove"],["move",574,321,1598234495314,"pointermove"],["move",582,315,1598234495322,"pointermove"],["move",587,313,1598234495329,"pointermove"],["move",591,310,1598234495337,"pointermove"],["move",593,309,1598234495345,"pointermove"],["move",593,308,1598234495353,"pointermove"],["move",594,308,1598234495361,"pointermove"],["scroll",594,310,1598234495457,null],["scroll",594,313,1598234495473,null],["scroll",594,319,1598234495490,null],["scroll",594,327,1598234495507,null],["scroll",594,335,1598234495524,null],["scroll",594,342,1598234495540,null],["scroll",594,353,1598234495556,null],["scroll",594,364,1598234495573,null],["scroll",594,374,1598234495589,null],["scroll",594,386,1598234495607,null],["move",595,308,1598234495611,"pointermove"],["scroll",595,328,1598234495624,null],["scroll",595,326,1598234495640,null],["scroll",595,331,1598234495657,null],["scroll",595,336,1598234495673,null],["scroll",595,338,1598234495690,null],["scroll",595,338,1598234495707,null],["scroll",595,338,1598234495723,null],["scroll",595,339,1598234495899,null],["scroll",595,342,1598234495906,null],["scroll",595,348,1598234495923,null],["scroll",595,356,1598234495940,null],["scroll",595,364,1598234495957,null],["scroll",595,377,1598234495973,null],["scroll",595,391,1598234495990,null],["scroll",595,409,1598234496007,null],["scroll",595,428,1598234496023,null],["scroll",595,449,1598234496040,null],["scroll",595,466,1598234496056,null],["scroll",595,480,1598234496073,null],["scroll",595,492,1598234496090,null],["scroll",595,496,1598234496106,null],["scroll",595,499,1598234496123,null],["move",596,307,1598234496133,"pointermove"],["scroll",596,313,1598234496140,null],["move",597,307,1598234496142,"pointermove"],["move",600,307,1598234496149,"pointermove"],["move",606,307,1598234496157,"pointermove"],["move",616,307,1598234496162,"pointermove"],["move",626,307,1598234496171,"pointermove"],["move",643,309,1598234496179,"pointermove"],["move",665,309,1598234496186,"pointermove"],["move",679,310,1598234496194,"pointermove"],["move",702,310,1598234496203,"pointermove"],["move",740,310,1598234496210,"pointermove"],["move",778,310,1598234496218,"pointermove"],["move",824,310,1598234496226,"pointermove"],["move",862,310,1598234496235,"pointermove"],["move",912,310,1598234496241,"pointermove"],["move",958,310,1598234496249,"pointermove"],["move",1010,310,1598234496257,"pointermove"],["move",1050,308,1598234496265,"pointermove"],["move",1086,308,1598234496273,"pointermove"],["move",1116,306,1598234496281,"pointermove"],["move",1142,304,1598234496289,"pointermove"],["move",1168,302,1598234496297,"pointermove"],["move",1181,302,1598234496305,"pointermove"],["move",1194,302,1598234496313,"pointermove"],["move",1206,302,1598234496318,"pointermove"],["move",1209,302,1598234496327,"pointermove"],["move",1211,302,1598234496335,"pointermove"],["scroll",1211,300,1598234496373,null],["scroll",1211,297,1598234496390,null],["scroll",1211,291,1598234496406,null],["scroll",1211,283,1598234496423,null],["scroll",1211,275,1598234496440,null],["move",1212,302,1598234496453,"pointermove"],["scroll",1212,288,1598234496456,null],["move",1213,302,1598234496461,"pointermove"],["move",1215,301,1598234496467,"pointermove"],["scroll",1215,283,1598234496473,null],["move",1217,300,1598234496476,"pointermove"],["move",1219,298,1598234496482,"pointermove"],["scroll",1219,280,1598234496490,null],["move",1223,296,1598234496492,"pointermove"],["move",1228,294,1598234496499,"pointermove"],["move",1238,290,1598234496507,"pointermove"],["scroll",1238,290,1598234496507,null],["move",1243,287,1598234496515,"pointermove"],["move",1261,279,1598234496523,"pointermove"],["scroll",1261,279,1598234496524,null],["move",1270,277,1598234496531,"pointermove"],["move",1288,270,1598234496537,"pointermove"],["scroll",1288,250,1598234496540,null],["move",1308,264,1598234496545,"pointermove"],["move",1323,256,1598234496553,"pointermove"],["scroll",1323,238,1598234496556,null],["move",1337,253,1598234496561,"pointermove"],["move",1345,250,1598234496569,"pointermove"],["scroll",1345,234,1598234496573,null],["move",1353,247,1598234496577,"pointermove"],["move",1362,243,1598234496585,"pointermove"],["scroll",1362,233,1598234496589,null],["move",1368,241,1598234496593,"pointermove"],["move",1372,240,1598234496601,"pointermove"],["scroll",1372,230,1598234496606,null],["move",1379,238,1598234496609,"pointermove"],["move",1386,236,1598234496617,"pointermove"],["move",1391,235,1598234496623,"pointermove"],["scroll",1391,235,1598234496624,null],["move",1396,235,1598234496630,"pointermove"],["move",1398,235,1598234496639,"pointermove"],["scroll",1398,233,1598234496640,null],["move",1399,235,1598234496648,"pointermove"],["move",1399,236,1598234496678,"pointermove"],["move",1399,237,1598234496686,"pointermove"],["move",1399,238,1598234496700,"pointermove"],["scroll",1399,240,1598234496739,null],["scroll",1399,243,1598234496756,null],["scroll",1399,249,1598234496773,null],["scroll",1399,257,1598234496789,null],["scroll",1399,267,1598234496806,null],["move",1400,238,1598234496811,"pointermove"],["scroll",1400,260,1598234496823,null],["scroll",1400,273,1598234496839,null],["scroll",1400,287,1598234496856,null],["move",1400,237,1598234496859,"pointermove"],["move",1403,235,1598234496865,"pointermove"],["move",1409,229,1598234496873,"pointermove"],["scroll",1409,229,1598234496874,null],["move",1418,225,1598234496881,"pointermove"],["move",1427,221,1598234496889,"pointermove"],["scroll",1427,245,1598234496889,null],["move",1436,214,1598234496896,"pointermove"],["move",1442,210,1598234496905,"pointermove"],["scroll",1442,230,1598234496906,null],["move",1444,209,1598234496913,"pointermove"],["move",1450,206,1598234496921,"pointermove"],["scroll",1450,220,1598234496923,null],["move",1451,205,1598234496927,"pointermove"],["move",1453,203,1598234496935,"pointermove"],["scroll",1453,213,1598234496939,null],["move",1455,201,1598234496943,"pointermove"],["move",1457,199,1598234496951,"pointermove"],["scroll",1457,203,1598234496956,null],["move",1458,198,1598234496959,"pointermove"],["move",1459,196,1598234496967,"pointermove"],["move",1460,195,1598234496974,"pointermove"],["move",1461,193,1598234496982,"pointermove"],["move",1462,192,1598234496989,"pointermove"],["move",1462,191,1598234496996,"pointermove"],["move",1463,190,1598234497005,"pointermove"],["move",1463,189,1598234497012,"pointermove"],["move",1463,188,1598234497036,"pointermove"],["move",1462,188,1598234497091,"pointermove"],["move",1460,187,1598234497099,"pointermove"],["move",1457,187,1598234497107,"pointermove"],["move",1453,186,1598234497115,"pointermove"],["move",1450,185,1598234497123,"pointermove"],["move",1444,184,1598234497131,"pointermove"],["move",1434,181,1598234497139,"pointermove"],["move",1427,178,1598234497144,"pointermove"],["move",1419,175,1598234497152,"pointermove"],["move",1413,172,1598234497161,"pointermove"],["move",1407,171,1598234497168,"pointermove"],["move",1402,167,1598234497177,"pointermove"],["move",1395,165,1598234497185,"pointermove"],["move",1393,164,1598234497193,"pointermove"],["move",1390,160,1598234497201,"pointermove"],["move",1384,158,1598234497210,"pointermove"],["move",1380,156,1598234497217,"pointermove"],["move",1378,155,1598234497223,"pointermove"],["move",1375,153,1598234497231,"pointermove"],["move",1373,153,1598234497239,"pointermove"],["move",1372,152,1598234497247,"pointermove"],["move",1371,151,1598234497255,"pointermove"],["move",1370,151,1598234497263,"pointermove"],["move",1369,151,1598234497287,"pointermove"],["focus",1598234497344],["down",1369,151,1598234497345,"pointerdown"],["focus",1598234497360],["up",1369,151,1598234497457,"pointerup"],["move",1370,151,1598234497683,"pointermove"],["move",1372,151,1598234497690,"pointermove"],["move",1374,153,1598234497698,"pointermove"],["move",1376,156,1598234497707,"pointermove"],["move",1378,160,1598234497715,"pointermove"],["move",1379,163,1598234497723,"pointermove"],["move",1380,167,1598234497731,"pointermove"],["move",1381,169,1598234497739,"pointermove"],["move",1382,172,1598234497745,"pointermove"],["move",1383,174,1598234497753,"pointermove"],["move",1374,197,1598234498130,"pointermove"],["move",1374,196,1598234498166,"pointermove"],["move",1372,194,1598234498189,"pointermove"],["move",1370,193,1598234498196,"pointermove"],["move",1364,191,1598234498204,"pointermove"],["move",1360,189,1598234498212,"pointermove"],["move",1356,187,1598234498221,"pointermove"],["move",1353,185,1598234498229,"pointermove"],["move",1350,184,1598234498237,"pointermove"],["move",1347,182,1598234498245,"pointermove"],["move",1345,180,1598234498254,"pointermove"],["move",1342,178,1598234498261,"pointermove"],["move",1341,177,1598234498267,"pointermove"],["move",1340,176,1598234498275,"pointermove"],["move",1339,175,1598234498283,"pointermove"],["move",1339,174,1598234498291,"pointermove"],["move",1339,173,1598234498331,"pointermove"],["move",1339,172,1598234498377,"pointermove"],["move",1340,171,1598234498409,"pointermove"],["move",1341,169,1598234498417,"pointermove"],["move",1342,169,1598234498423,"pointermove"],["move",1343,168,1598234498431,"pointermove"],["move",1345,166,1598234498439,"pointermove"],["move",1346,165,1598234498447,"pointermove"],["move",1347,164,1598234498455,"pointermove"],["move",1348,163,1598234498463,"pointermove"],["move",1349,162,1598234498471,"pointermove"],["move",1350,162,1598234498479,"pointermove"],["move",1351,162,1598234498509,"pointermove"],["move",1351,161,1598234498525,"pointermove"],["down",1351,161,1598234498528,"pointerdown"],["up",1351,161,1598234498602,"pointerup"],["move",1352,161,1598234498681,"pointermove"],["move",1354,159,1598234498689,"pointermove"],["move",1357,157,1598234498697,"pointermove"],["move",1361,155,1598234498705,"pointermove"],["move",1368,153,1598234498713,"pointermove"],["move",1373,148,1598234498719,"pointermove"],["move",1378,146,1598234498727,"pointermove"],["move",1383,143,1598234498735,"pointermove"],["move",1386,142,1598234498742,"pointermove"],["move",1389,140,1598234498751,"pointermove"],["move",1393,139,1598234498759,"pointermove"],["move",1396,138,1598234498767,"pointermove"],["move",1399,137,1598234498775,"pointermove"],["move",1401,136,1598234498783,"pointermove"],["move",1402,136,1598234498791,"pointermove"],["move",1402,135,1598234498797,"pointermove"],["move",1403,135,1598234498805,"pointermove"],["move",1402,136,1598234499063,"pointermove"],["move",1401,137,1598234499079,"pointermove"],["move",1400,138,1598234499087,"pointermove"],["move",1400,139,1598234499097,"pointermove"],["move",1399,139,1598234499101,"pointermove"],["move",1399,140,1598234499110,"pointermove"],["move",1398,141,1598234499117,"pointermove"],["move",1397,142,1598234499125,"pointermove"],["move",1396,143,1598234499141,"pointermove"],["move",1395,144,1598234499149,"pointermove"],["move",1395,145,1598234499157,"pointermove"],["move",1394,145,1598234499165,"pointermove"],["move",1394,146,1598234499171,"pointermove"],["move",1393,146,1598234499178,"pointermove"],["move",1393,147,1598234499187,"pointermove"],["move",1392,147,1598234499194,"pointermove"],["move",1392,148,1598234499203,"pointermove"],["move",1391,148,1598234499211,"pointermove"],["move",1391,149,1598234499219,"pointermove"],["move",1390,149,1598234499226,"pointermove"],["move",1390,150,1598234499241,"pointermove"],["move",1389,150,1598234499257,"pointermove"],["move",1389,151,1598234499524,"pointermove"],["move",1389,153,1598234499531,"pointermove"],["move",1389,155,1598234499539,"pointermove"],["move",1389,157,1598234499545,"pointermove"],["move",1389,160,1598234499554,"pointermove"],["move",1389,162,1598234499561,"pointermove"],["move",1390,164,1598234499569,"pointermove"],["move",1390,167,1598234499577,"pointermove"],["move",1391,169,1598234499585,"pointermove"],["move",1392,171,1598234499593,"pointermove"],["move",1392,172,1598234499601,"pointermove"],["move",1392,174,1598234499609,"pointermove"],["move",1392,175,1598234499624,"pointermove"],["move",1392,176,1598234499630,"pointermove"],["move",1393,177,1598234499639,"pointermove"],["move",1394,177,1598234500107,"pointermove"],["move",1397,178,1598234500115,"pointermove"],["move",1402,179,1598234500123,"pointermove"],["move",1410,183,1598234500131,"pointermove"],["move",1421,186,1598234500139,"pointermove"],["move",1429,189,1598234500145,"pointermove"],["move",1447,198,1598234500153,"pointermove"],["move",1455,202,1598234500161,"pointermove"],["move",1466,208,1598234500169,"pointermove"],["move",1477,213,1598234500176,"pointermove"],["move",1489,219,1598234500185,"pointermove"],["move",1500,224,1598234500193,"pointermove"],["move",1506,227,1598234500201,"pointermove"],["move",1517,231,1598234500209,"pointermove"],["move",1525,236,1598234500217,"pointermove"],["move",1530,237,1598234500223,"pointermove"],["move",1534,238,1598234500232,"pointermove"],["move",1536,240,1598234500239,"pointermove"],["move",1537,240,1598234500246,"pointermove"],["move",1537,241,1598234500254,"pointermove"],["move",1538,241,1598234500263,"pointermove"],["move",1539,241,1598234500293,"pointermove"],["move",1540,241,1598234500349,"pointermove"],["move",1541,241,1598234500357,"pointermove"],["move",1542,240,1598234500365,"pointermove"],["move",1543,240,1598234500370,"pointermove"],["move",1544,239,1598234500387,"pointermove"],["move",1545,239,1598234500403,"pointermove"],["move",1546,238,1598234500411,"pointermove"],["move",1547,237,1598234500419,"pointermove"],["move",1549,236,1598234500427,"pointermove"],["move",1551,235,1598234500435,"pointermove"],["move",1553,234,1598234500443,"pointermove"],["move",1554,233,1598234500448,"pointermove"],["move",1555,232,1598234500465,"pointermove"],["move",1556,232,1598234500473,"pointermove"],["move",1556,231,1598234500481,"pointermove"],["move",1557,230,1598234500505,"pointermove"],["move",1557,229,1598234500513,"pointermove"],["move",1558,228,1598234500519,"pointermove"],["move",1558,227,1598234500527,"pointermove"],["move",1559,226,1598234500535,"pointermove"],["move",1559,225,1598234500543,"pointermove"],["move",1559,224,1598234500551,"pointermove"],["move",1560,223,1598234500567,"pointermove"],["move",1560,222,1598234500591,"pointermove"],["down",1560,222,1598234500914,"pointerdown"],["focus",1598234500918],["up",1560,222,1598234500996,"pointerup"]]
    var originalTime = (new Date()).getTime();
    for (var i=0; i<t.length; i++) {
        var init = 1598164759052;
        if(i == 0 && t[i].length == 5)  {
            t[i][3] = originalTime;
        }
        else{
            if(t[i].length==5) {
                t[i][3] = originalTime + t[i][3]-init;
            }
            else{
                t[i][1] = originalTime + t[i][1]-init;
            }
        }
    }
    return t;
}
// var originalTime = (new Date()).getTime();

function main() {
    let t = initT();
    console.log(t);
    return encode(uxLQ(t))
}

tt = main();

console.log(main())

// M,C8M)9Up2.*M*fg.fgB:U.D.BJDB-0qq-:8N-9MF-XG)-:(?-:(:119N*X_.f:-)-9MF0c(:Vc(:-1/:-)-gM9n:5NN/_(3Fb(.5(b.AB9(8,@4/E-619-*-)7j-,9b/)M)GN1U/NLNYW4):MDD8*(I-*AE/(((((Lb)@(/E((K((/((EEEah1k91*-*(Q2*9M5,(91,7iYbXb1AMQgYS*)Q/,(M5*(((()q
// M,C8M)9Up2.*M*f..fgB:U.D.BJDB-.-:8N-9MF-XG)-:(?-:(:119N*X_.f:-)-9MF0c(:Vc(:-1/:-)-gM9n:5NN/_(3Fb(.5(b.AB9(8,@4/E-619-*-)7j-,9b/)M)GN1U/NLNYW4):MDD8*(I-*AE/(((((Lb)@(/E((K((/((EEEah1k91*-*(Q2*9M5,(91,7iYbXb1AMQgYS*)Q/,(M5*(((()q

// M,C8M)9Up2.*M*f..fgB:U.D.BJDB-.-:8N-9MF-XG)-:(?-:(:119N*X_.f:-)-9MF0c(:Vc(:-1/:-)-gM9n:5NN/_(3Fb(.5(b.AB9(8,@4/E-619-*-)7j-,9b/)M)GN1U/NLNYW4):MDD8*(I-*AE/(((((Lb)@(/E((K((/((EEEah1k91*-*(Q2*9M5,(91,7iYbXb1AMQgYS*)Q/,(M5*(((()q
// M,C8M)9Up2.*M*f..fgB:U.D.BJDB-.-:8N-9MF-XG)-:(?-:(:119N*X_.f:-)-9MF0c(:Vc(:-1/:-)-gM9n:5NN/_(3Fb(.5(b.AB9(8,@4/E-619-*-)7j-,9b/)M)GN1U/NLNYW4):MDD8*(I-*AE/(((((Lb)@(/E((K((/((EEEah1k91*-*(Q2*9M5,(91,7iYbXb1AMQgYS*)Q/,(M5*(((()q
