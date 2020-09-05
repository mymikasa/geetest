const crypto = require('crypto');
const getRandomValues = require('./random.js');

var window = {};
window['crypto'] = {};
window['crypto']['getRandomValues'] = getRandomValues;

var GmEn = function () {
    function HscU() {
      this["i"] = 0;
      this["j"] = 0;
      this["S"] = [];
    }

    function IeWV(e) {
      var t, r, n;

      for (t = 0; t < 256; ++t) this["S"][t] = t;

      r = 0;

      for (t = 0; t < 256; ++t) {
        r = r + this["S"][t] + e[t % e["length"]] & 255;
        n = this["S"][t];
        this["S"][t] = this["S"][r];
        this["S"][r] = n;
      }

      this["i"] = 0;
      this["j"] = 0;
    }

    function Jrqw() {
      var e;
      this["i"] = this["i"] + 1 & 255;
      this["j"] = this["j"] + this["S"][this["i"]] & 255;
      e = this["S"][this["i"]];
      this["S"][this["i"]] = this["S"][this["j"]];
      this["S"][this["j"]] = e;
      return this["S"][e + this["S"][this["i"]] & 255];
    }

    HscU["prototype"]["init"] = IeWV;
    HscU["prototype"]["next"] = Jrqw;

    function KfcY() {
      return new HscU();
    }

    var n = 256;
    var t;
    var i;
    var o;

    if (i == null) {
      i = [];
      o = 0;
      var e;

    //   if (window["crypto"] && window["crypto"]["getRandomValues"]) {
    //     var r = new Uint32Array(256);
    //     window["crypto"]["getRandomValues"](r);

    //     for (e = 0; e < r["length"]; ++e) i[o++] = r[e] & 255;
    //   }

      var r = 

      var a = 0;

      function s(e) {
        a = a || 0;

        if (a >= 256 || o >= n) {
          if (window["removeEventListener"]) {
            a = 0;
            window["removeEventListener"]("mousemove", s, false);
          } else if (window["detachEvent"]) {
            a = 0;
            window["detachEvent"]("onmousemove", s);
          }

          return;
        }

        try {
          var t = e["x"] + e["y"];
          i[o++] = t & 255;
          a += 1;
        } catch (r) {}
      }

      if (window["addEventListener"]) window["addEventListener"]("mousemove", s, false);else if (window["attachEvent"]) window["attachEvent"]("onmousemove", s);
    }

    function Lat_() {
      if (t == null) {
        t = KfcY();

        while (o < n) {
          var e = Math["floor"](65536 * Math["random"]());
          i[o++] = e & 255;
        }

        t["init"](i);

        for (o = 0; o < i["length"]; ++o) i[o] = 0;

        o = 0;
      }

      return t["next"]();
    }

    function MxzU(e) {
      var t;

      for (t = 0; t < e["length"]; ++t) e[t] = Lat_();
    }

    function NDkP() {}

    NDkP["prototype"]["nextBytes"] = MxzU;

    var _;

    var c = 0xdeadbeefcafe;
    var l = (c & 16777215) == 15715070;

    function OdjZ(e, t, r) {
      if (e != null) if ("number" == typeof e) this["fromNumber"](e, t, r);else if (t == null && "string" != typeof e) this["fromString"](e, 256);else this["fromString"](e, t);
    }

    function PjGM() {
      return new OdjZ(null);
    }

    function QAAk(e, t, r, n, i, o) {
      while (--o >= 0) {
        var a = t * this[e++] + r[n] + i;
        i = Math["floor"](a / 67108864);
        r[n++] = a & 67108863;
      }

      return i;
    }

    function RZHO(e, t, r, n, i, o) {
      var a = t & 32767,
          s = t >> 15;

      while (--o >= 0) {
        var _ = this[e] & 32767;

        var c = this[e++] >> 15;
        var l = s * _ + c * a;
        _ = a * _ + ((l & 32767) << 15) + r[n] + (i & 1073741823);
        i = (_ >>> 30) + (l >>> 15) + s * c + (i >>> 30);
        r[n++] = _ & 1073741823;
      }

      return i;
    }

    function StpD(e, t, r, n, i, o) {
      var a = t & 16383,
          s = t >> 14;

      while (--o >= 0) {
        var _ = this[e] & 16383;

        var c = this[e++] >> 14;
        var l = s * _ + c * a;
        _ = a * _ + ((l & 16383) << 14) + r[n] + i;
        i = (_ >> 28) + (l >> 14) + s * c;
        r[n++] = _ & 268435455;
      }

      return i;
    }

    if (l && navigator["appName"] == "Microsoft Internet Explorer") {
      OdjZ["prototype"]["am"] = RZHO;
      _ = 30;
    } else if (l && navigator["appName"] != "Netscape") {
      OdjZ["prototype"]["am"] = QAAk;
      _ = 26;
    } else {
      OdjZ["prototype"]["am"] = StpD;
      _ = 28;
    }

    OdjZ["prototype"]["DB"] = _;
    OdjZ["prototype"]["DM"] = (1 << _) - 1;
    OdjZ["prototype"]["DV"] = 1 << _;
    var u = 52;
    OdjZ["prototype"]["FV"] = Math["pow"](2, u);
    OdjZ["prototype"]["F1"] = u - _;
    OdjZ["prototype"]["F2"] = 2 * _ - u;
    var f = "0123456789abcdefghijklmnopqrstuvwxyz";
    var p = [];
    var d, g;
    d = "0"["charCodeAt"](0);

    for (g = 0; g <= 9; ++g) p[d++] = g;

    d = "a"["charCodeAt"](0);

    for (g = 10; g < 36; ++g) p[d++] = g;

    d = "A"["charCodeAt"](0);

    for (g = 10; g < 36; ++g) p[d++] = g;

    function Tlul(e) {
      return f["charAt"](e);
    }

    function UUnh(e, t) {
      var r = p[e["charCodeAt"](t)];
      return r == null ? -1 : r;
    }

    function VsQG(e) {
      for (var t = this["t"] - 1; t >= 0; --t) e[t] = this[t];

      e["t"] = this["t"];
      e["s"] = this["s"];
    }

    function WAeG(e) {
      this["t"] = 1;
      this["s"] = e < 0 ? -1 : 0;
      if (e > 0) this[0] = e;else if (e < -1) this[0] = e + this["DV"];else this["t"] = 0;
    }

    function XZGc(e) {
      var t = PjGM();
      t["fromInt"](e);
      return t;
    }

    function Ytnn(e, t) {
      var r;
      if (t == 16) r = 4;else if (t == 8) r = 3;else if (t == 256) r = 8;else if (t == 2) r = 1;else if (t == 32) r = 5;else if (t == 4) r = 2;else {
        this["fromRadix"](e, t);
        return;
      }
      this["t"] = 0;
      this["s"] = 0;
      var n = e["length"],
          i = false,
          o = 0;

      while (--n >= 0) {
        var a = r == 8 ? e[n] & 255 : UUnh(e, n);

        if (a < 0) {
          if (e["charAt"](n) == "-") i = true;
          continue;
        }

        i = false;
        if (o == 0) this[this["t"]++] = a;else if (o + r > this["DB"]) {
          this[this["t"] - 1] |= (a & (1 << this["DB"] - o) - 1) << o;
          this[this["t"]++] = a >> this["DB"] - o;
        } else this[this["t"] - 1] |= a << o;
        o += r;
        if (o >= this["DB"]) o -= this["DB"];
      }

      if (r == 8 && (e[0] & 128) != 0) {
        this["s"] = -1;
        if (o > 0) this[this["t"] - 1] |= (1 << this["DB"] - o) - 1 << o;
      }

      this["clamp"]();
      if (i) OdjZ["ZERO"]["subTo"](this, this);
    }

    function Ziby() {
      var e = this["s"] & this["DM"];

      while (this["t"] > 0 && this[this["t"] - 1] == e) --this["t"];
    }

    function ayhm(e) {
      if (this["s"] < 0) return "-" + this["negate"]()["toString"](e);
      var t;
      if (e == 16) t = 4;else if (e == 8) t = 3;else if (e == 2) t = 1;else if (e == 32) t = 5;else if (e == 4) t = 2;else return this["toRadix"](e);
      var r = (1 << t) - 1,
          n,
          i = false,
          o = "",
          a = this["t"];
      var s = this["DB"] - a * this["DB"] % t;

      if (a-- > 0) {
        if (s < this["DB"] && (n = this[a] >> s) > 0) {
          i = true;
          o = Tlul(n);
        }

        while (a >= 0) {
          if (s < t) {
            n = (this[a] & (1 << s) - 1) << t - s;
            n |= this[--a] >> (s += this["DB"] - t);
          } else {
            n = this[a] >> (s -= t) & r;

            if (s <= 0) {
              s += this["DB"];
              --a;
            }
          }

          if (n > 0) i = true;
          if (i) o += Tlul(n);
        }
      }

      return i ? o : "0";
    }

    function bSCA() {
      var e = PjGM();
      OdjZ["ZERO"]["subTo"](this, e);
      return e;
    }

    function clmR() {
      return this["s"] < 0 ? this["negate"]() : this;
    }

    function dvsX(e) {
      var t = this["s"] - e["s"];
      if (t != 0) return t;
      var r = this["t"];
      t = r - e["t"];
      if (t != 0) return this["s"] < 0 ? -t : t;

      while (--r >= 0) if ((t = this[r] - e[r]) != 0) return t;

      return 0;
    }

    function ebxt(e) {
      var t = 1,
          r;

      if ((r = e >>> 16) != 0) {
        e = r;
        t += 16;
      }

      if ((r = e >> 8) != 0) {
        e = r;
        t += 8;
      }

      if ((r = e >> 4) != 0) {
        e = r;
        t += 4;
      }

      if ((r = e >> 2) != 0) {
        e = r;
        t += 2;
      }

      if ((r = e >> 1) != 0) {
        e = r;
        t += 1;
      }

      return t;
    }

    function fgrU() {
      if (this["t"] <= 0) return 0;
      return this["DB"] * (this["t"] - 1) + ebxt(this[this["t"] - 1] ^ this["s"] & this["DM"]);
    }

    function gBtD(e, t) {
      var r;

      for (r = this["t"] - 1; r >= 0; --r) t[r + e] = this[r];

      for (r = e - 1; r >= 0; --r) t[r] = 0;

      t["t"] = this["t"] + e;
      t["s"] = this["s"];
    }

    function heyg(e, t) {
      for (var r = e; r < this["t"]; ++r) t[r - e] = this[r];

      t["t"] = Math["max"](this["t"] - e, 0);
      t["s"] = this["s"];
    }

    function ipdC(e, t) {
      var r = e % this["DB"];
      var n = this["DB"] - r;
      var i = (1 << n) - 1;
      var o = Math["floor"](e / this["DB"]),
          a = this["s"] << r & this["DM"],
          s;

      for (s = this["t"] - 1; s >= 0; --s) {
        t[s + o + 1] = this[s] >> n | a;
        a = (this[s] & i) << r;
      }

      for (s = o - 1; s >= 0; --s) t[s] = 0;

      t[o] = a;
      t["t"] = this["t"] + o + 1;
      t["s"] = this["s"];
      t["clamp"]();
    }

    function jWSV(e, t) {
      t["s"] = this["s"];
      var r = Math["floor"](e / this["DB"]);

      if (r >= this["t"]) {
        t["t"] = 0;
        return;
      }

      var n = e % this["DB"];
      var i = this["DB"] - n;
      var o = (1 << n) - 1;
      t[0] = this[r] >> n;

      for (var a = r + 1; a < this["t"]; ++a) {
        t[a - r - 1] |= (this[a] & o) << i;
        t[a - r] = this[a] >> n;
      }

      if (n > 0) t[this["t"] - r - 1] |= (this["s"] & o) << i;
      t["t"] = this["t"] - r;
      t["clamp"]();
    }

    function kkZc(e, t) {
      var r = 0,
          n = 0,
          i = Math["min"](e["t"], this["t"]);

      while (r < i) {
        n += this[r] - e[r];
        t[r++] = n & this["DM"];
        n >>= this["DB"];
      }

      if (e["t"] < this["t"]) {
        n -= e["s"];

        while (r < this["t"]) {
          n += this[r];
          t[r++] = n & this["DM"];
          n >>= this["DB"];
        }

        n += this["s"];
      } else {
        n += this["s"];

        while (r < e["t"]) {
          n -= e[r];
          t[r++] = n & this["DM"];
          n >>= this["DB"];
        }

        n -= e["s"];
      }

      t["s"] = n < 0 ? -1 : 0;
      if (n < -1) t[r++] = this["DV"] + n;else if (n > 0) t[r++] = n;
      t["t"] = r;
      t["clamp"]();
    }

    function lJEH(e, t) {
      var r = this["abs"](),
          n = e["abs"]();
      var i = r["t"];
      t["t"] = i + n["t"];

      while (--i >= 0) t[i] = 0;

      for (i = 0; i < n["t"]; ++i) t[i + r["t"]] = r["am"](0, n[i], t, i, 0, r["t"]);

      t["s"] = 0;
      t["clamp"]();
      if (this["s"] != e["s"]) OdjZ["ZERO"]["subTo"](t, t);
    }

    function muqf(e) {
      var t = this["abs"]();
      var r = e["t"] = 2 * t["t"];

      while (--r >= 0) e[r] = 0;

      for (r = 0; r < t["t"] - 1; ++r) {
        var n = t["am"](r, t[r], e, 2 * r, 0, 1);

        if ((e[r + t["t"]] += t["am"](r + 1, 2 * t[r], e, 2 * r + 1, n, t["t"] - r - 1)) >= t["DV"]) {
          e[r + t["t"]] -= t["DV"];
          e[r + t["t"] + 1] = 1;
        }
      }

      if (e["t"] > 0) e[e["t"] - 1] += t["am"](r, t[r], e, 2 * r, 0, 1);
      e["s"] = 0;
      e["clamp"]();
    }

    function nFwg(e, t, r) {
      var n = e["abs"]();
      if (n["t"] <= 0) return;
      var i = this["abs"]();

      if (i["t"] < n["t"]) {
        if (t != null) t["fromInt"](0);
        if (r != null) this["copyTo"](r);
        return;
      }

      if (r == null) r = PjGM();
      var o = PjGM(),
          a = this["s"],
          s = e["s"];

      var _ = this["DB"] - ebxt(n[n["t"] - 1]);

      if (_ > 0) {
        n["lShiftTo"](_, o);
        i["lShiftTo"](_, r);
      } else {
        n["copyTo"](o);
        i["copyTo"](r);
      }

      var c = o["t"];
      var l = o[c - 1];
      if (l == 0) return;
      var u = l * (1 << this["F1"]) + (c > 1 ? o[c - 2] >> this["F2"] : 0);
      var f = this["FV"] / u,
          p = (1 << this["F1"]) / u,
          d = 1 << this["F2"];
      var g = r["t"],
          h = g - c,
          v = t == null ? PjGM() : t;
      o["dlShiftTo"](h, v);

      if (r["compareTo"](v) >= 0) {
        r[r["t"]++] = 1;
        r["subTo"](v, r);
      }

      OdjZ["ONE"]["dlShiftTo"](c, v);
      v["subTo"](o, o);

      while (o["t"] < c) o[o["t"]++] = 0;

      while (--h >= 0) {
        var m = r[--g] == l ? this["DM"] : Math["floor"](r[g] * f + (r[g - 1] + d) * p);

        if ((r[g] += o["am"](0, m, r, h, 0, c)) < m) {
          o["dlShiftTo"](h, v);
          r["subTo"](v, r);

          while (r[g] < --m) r["subTo"](v, r);
        }
      }

      if (t != null) {
        r["drShiftTo"](c, t);
        if (a != s) OdjZ["ZERO"]["subTo"](t, t);
      }

      r["t"] = c;
      r["clamp"]();
      if (_ > 0) r["rShiftTo"](_, r);
      if (a < 0) OdjZ["ZERO"]["subTo"](r, r);
    }

    function ourh(e) {
      var t = PjGM();
      this["abs"]()["divRemTo"](e, null, t);
      if (this["s"] < 0 && t["compareTo"](OdjZ["ZERO"]) > 0) e["subTo"](t, t);
      return t;
    }

    function pumf(e) {
      this["m"] = e;
    }

    function qKiX(e) {
      if (e["s"] < 0 || e["compareTo"](this["m"]) >= 0) return e["mod"](this["m"]);else return e;
    }

    function rnZv(e) {
      return e;
    }

    function saQt(e) {
      e["divRemTo"](this["m"], null, e);
    }

    function tHdA(e, t, r) {
      e["multiplyTo"](t, r);
      this["reduce"](r);
    }

    function unPJ(e, t) {
      e["squareTo"](t);
      this["reduce"](t);
    }

    pumf["prototype"]["convert"] = qKiX;
    pumf["prototype"]["revert"] = rnZv;
    pumf["prototype"]["reduce"] = saQt;
    pumf["prototype"]["mulTo"] = tHdA;
    pumf["prototype"]["sqrTo"] = unPJ;

    function vIhI() {
      if (this["t"] < 1) return 0;
      var e = this[0];
      if ((e & 1) == 0) return 0;
      var t = e & 3;
      t = t * (2 - (e & 15) * t) & 15;
      t = t * (2 - (e & 255) * t) & 255;
      t = t * (2 - ((e & 65535) * t & 65535)) & 65535;
      t = t * (2 - e * t % this["DV"]) % this["DV"];
      return t > 0 ? this["DV"] - t : -t;
    }

    function wc_P(e) {
      this["m"] = e;
      this["mp"] = e["invDigit"]();
      this["mpl"] = this["mp"] & 32767;
      this["mph"] = this["mp"] >> 15;
      this["um"] = (1 << e["DB"] - 15) - 1;
      this["mt2"] = 2 * e["t"];
    }

    function xHuL(e) {
      var t = PjGM();
      e["abs"]()["dlShiftTo"](this["m"]["t"], t);
      t["divRemTo"](this["m"], null, t);
      if (e["s"] < 0 && t["compareTo"](OdjZ["ZERO"]) > 0) this["m"]["subTo"](t, t);
      return t;
    }

    function yFyw(e) {
      var t = PjGM();
      e["copyTo"](t);
      this["reduce"](t);
      return t;
    }

    function ABHN(e) {
      while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;

      for (var t = 0; t < this["m"]["t"]; ++t) {
        var r = e[t] & 32767;
        var n = r * this["mpl"] + ((r * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
        r = t + this["m"]["t"];
        e[r] += this["m"]["am"](0, n, e, t, 0, this["m"]["t"]);

        while (e[r] >= e["DV"]) {
          e[r] -= e["DV"];
          e[++r]++;
        }
      }

      e["clamp"]();
      e["drShiftTo"](this["m"]["t"], e);
      if (e["compareTo"](this["m"]) >= 0) e["subTo"](this["m"], e);
    }

    function BdPW(e, t) {
      e["squareTo"](t);
      this["reduce"](t);
    }

    function CMWF(e, t, r) {
      e["multiplyTo"](t, r);
      this["reduce"](r);
    }

    wc_P["prototype"]["convert"] = xHuL;
    wc_P["prototype"]["revert"] = yFyw;
    wc_P["prototype"]["reduce"] = ABHN;
    wc_P["prototype"]["mulTo"] = CMWF;
    wc_P["prototype"]["sqrTo"] = BdPW;

    function DKUp() {
      return (this["t"] > 0 ? this[0] & 1 : this["s"]) == 0;
    }

    function EW_b(e, t) {
      if (e > 4294967295 || e < 1) return OdjZ["ONE"];
      var r = PjGM(),
          n = PjGM(),
          i = t["convert"](this),
          o = ebxt(e) - 1;
      i["copyTo"](r);

      while (--o >= 0) {
        t["sqrTo"](r, n);
        if ((e & 1 << o) > 0) t["mulTo"](n, i, r);else {
          var a = r;
          r = n;
          n = a;
        }
      }

      return t["revert"](r);
    }

    function Fmxw(e, t) {
      var r;
      if (e < 256 || t["isEven"]()) r = new pumf(t);else r = new wc_P(t);
      return this["exp"](e, r);
    }

    OdjZ["prototype"]["copyTo"] = VsQG;
    OdjZ["prototype"]["fromInt"] = WAeG;
    OdjZ["prototype"]["fromString"] = Ytnn;
    OdjZ["prototype"]["clamp"] = Ziby;
    OdjZ["prototype"]["dlShiftTo"] = gBtD;
    OdjZ["prototype"]["drShiftTo"] = heyg;
    OdjZ["prototype"]["lShiftTo"] = ipdC;
    OdjZ["prototype"]["rShiftTo"] = jWSV;
    OdjZ["prototype"]["subTo"] = kkZc;
    OdjZ["prototype"]["multiplyTo"] = lJEH;
    OdjZ["prototype"]["squareTo"] = muqf;
    OdjZ["prototype"]["divRemTo"] = nFwg;
    OdjZ["prototype"]["invDigit"] = vIhI;
    OdjZ["prototype"]["isEven"] = DKUp;
    OdjZ["prototype"]["exp"] = EW_b;
    OdjZ["prototype"]["toString"] = ayhm;
    OdjZ["prototype"]["negate"] = bSCA;
    OdjZ["prototype"]["abs"] = clmR;
    OdjZ["prototype"]["compareTo"] = dvsX;
    OdjZ["prototype"]["bitLength"] = fgrU;
    OdjZ["prototype"]["mod"] = ourh;
    OdjZ["prototype"]["modPowInt"] = Fmxw;
    OdjZ["ZERO"] = XZGc(0);
    OdjZ["ONE"] = XZGc(1);

    function GrLn(e, t) {
      return new OdjZ(e, t);
    }

    function HSDD(e, t) {
      if (t < e["length"] + 11) {
        console && console["error"] && console["error"]("Message too long for RSA");
        return null;
      }

      var r = [];
      var n = e["length"] - 1;

      while (n >= 0 && t > 0) {
        var i = e["charCodeAt"](n--);

        if (i < 128) {
          r[--t] = i;
        } else if (i > 127 && i < 2048) {
          r[--t] = i & 63 | 128;
          r[--t] = i >> 6 | 192;
        } else {
          r[--t] = i & 63 | 128;
          r[--t] = i >> 6 & 63 | 128;
          r[--t] = i >> 12 | 224;
        }
      }

      r[--t] = 0;
      var o = new NDkP();
      var a = [];

      while (t > 2) {
        a[0] = 0;

        while (a[0] == 0) o["nextBytes"](a);

        r[--t] = a[0];
      }

      r[--t] = 2;
      r[--t] = 0;
      return new OdjZ(r);
    }

    function GmEn() {
      this["n"] = null;
      this["e"] = 0;
      this["d"] = null;
      this["p"] = null;
      this["q"] = null;
      this["dmp1"] = null;
      this["dmq1"] = null;
      this["coeff"] = null;
      var e = "00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81";
      var t = "10001";
      this["setPublic"](e, t);
    }

    function ICze(e, t) {
      if (e != null && t != null && e["length"] > 0 && t["length"] > 0) {
        this["n"] = GrLn(e, 16);
        this["e"] = parseInt(t, 16);
      } else console && console["error"] && console["error"]("Invalid RSA public key");
    }

    function JYDV(e) {
      return e["modPowInt"](this["e"], this["n"]);
    }

    function KCBr(e) {
      var t = HSDD(e, this["n"]["bitLength"]() + 7 >> 3);
      if (t == null) return null;
      var r = this["doPublic"](t);
      if (r == null) return null;
      var n = r["toString"](16);
      if ((n["length"] & 1) == 0) return n;else return "0" + n;
    }

    GmEn["prototype"]["doPublic"] = JYDV;
    GmEn["prototype"]["setPublic"] = ICze;
    GmEn["prototype"]["encrypt"] = KCBr;
    return GmEn;
}();
