var navigator = {}
navigator["appName"] = "Netscape";
originalTime = (new Date()).getTime();
aesKey = '4f132ae5ee801789';

var GMAs = function () {
    function HOjo() {
        this["i"] = 0;
        this["j"] = 0;
        this["S"] = [];
    }

    function IyCh(e) {
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

    function JVrv() {
        var e;
        this["i"] = this["i"] + 1 & 255;
        this["j"] = this["j"] + this["S"][this["i"]] & 255;
        e = this["S"][this["i"]];
        this["S"][this["i"]] = this["S"][this["j"]];
        this["S"][this["j"]] = e;
        return this["S"][e + this["S"][this["i"]] & 255];
    }

    HOjo["prototype"]["init"] = IyCh;
    HOjo["prototype"]["next"] = JVrv;

    function Kbq_() {
        return new HOjo();
    }

    var n = 256;
    var t;
    var i;
    var o;

    if (i == null) {
        i = [];
        o = 0;
        var e;

        if (true) {
            // var r = [3591547614, 3028658294, 1787584789, 3089948306, 4277389380, 4221677045, 1974652986, 1808987487, 2537405291, 4086825882, 2441713584, 4187607199, 640242727, 2936828668, 4176717455, 3503396694, 3820587203, 681749489, 2447878200, 1573951802, 3651669405, 376362409, 910158691, 370259293, 1135009247, 4189709721, 1071938870, 75421350, 352735949, 1627061650, 93710743, 4107135713, 421190563, 3881466552, 1683199296, 1736505302, 3828053637, 2843525074, 387950274, 2707621996, 1734250477, 2508477412, 3358742172, 37907544, 861898796, 2199642402, 3963895656, 2595719632, 2611074304, 1905932338, 3815963302, 2825533630, 1827357072, 3439342228, 1313434274, 3477065870, 2551313476, 4182267305, 2486992646, 557369421, 1629586809, 2631528163, 780118958, 3230688665, 464981720, 466868921, 3225061235, 3867178370, 1189646516, 3653581568, 4259384302, 3877206596, 2749930768, 1295065201, 3110455787, 3604160069, 947493239, 1951230448, 2366780383, 2720909186, 1626448891, 1567644749, 4095219607, 2255250185, 3890728242, 3677851786, 1512777483, 3302153646, 3639795465, 3570409012, 3560552623, 2701751395, 659091402, 253026723, 770041293, 932999605, 929294330, 2255244582, 491571242, 2318165131, 646150179, 2457973245, 3404442048, 1811046796, 2114786926, 2250601205, 2957536800, 2057307496, 1615601724, 1446701033, 3196923933, 2506561149, 621608946, 2588475186, 1294426766, 111485804, 3127098517, 3413953863, 159757917, 1007583914, 1919522238, 1533492422, 518896112, 2250217660, 1632161012, 3016992499, 2882099569, 849656592, 222537542, 3509403233, 161606913, 1605248382, 3352692358, 3411074150, 2427706895, 1168269987, 2127772244, 4067089096, 2583219658, 2307412109, 3116468008, 298181444, 707968649, 513058140, 1305255401, 2862849724, 4103161448, 4154777369, 623029873, 1499098522, 58428925, 479229281, 3574764821, 221462610, 209606840, 3199377518, 1955205562, 914493041, 1382070084, 227405446, 2403691142, 3138148953, 872011160, 3876141278, 2937056085, 364743097, 4284929342, 2801740954, 3201600347, 1337506301, 4182626582, 1255808217, 1178113041, 2738358520, 2212922814, 2053909832, 2814177911, 4188860607, 1618355692, 758439383, 62533341, 3812062841, 4006865376, 2366600103, 3538581347, 2245161664, 301750553, 443974236, 437209240, 3754025588, 3605272264, 4158952326, 411164180, 2380853027, 2753717381, 398728858, 1533186933, 2327411614, 2476627447, 3041683652, 3951040712, 3342966119, 1868092269, 229355121, 3535171118, 4253656842, 3492587997, 3930466446, 3358098503, 2693380499, 2531287955, 26988200, 1090924888, 287600564, 3957220340, 2795017573, 1086378781, 2018341576, 1785097044, 2626146391, 4112239199, 2344861265, 903236383, 3498483384, 2516976275, 702059362, 1401011331, 3694525200, 330851791, 487675803, 3681025289, 2365474488, 461552440, 332929264, 1151451520, 1372162033, 3170837932, 2302404975, 2800691123, 949140323, 3645223688, 909370279, 1632224182, 3784864428, 4004620246, 1411005433, 4016772498, 621052273, 3080511368, 1325678924, 651166397, 1207354522, 1490808125, 3346173279, 2230596518, 588704981];
            var r = [3591547614, 3028658294, 1787584789, 3089948306, 4277389380, 4221677045, 1974652986, 1808987487, 2537405291, 4086825882, 2441713584, 4187607199, 640242727, 2936828668, 4176717455, 3503396694, 3820587203, 681749489, 2447878200, 1573951802, 3651669405, 376362409, 910158691, 370259293, 1135009247, 4189709721, 1071938870, 75421350, 352735949, 1627061650, 93710743, 4107135713, 421190563, 3881466552, 1683199296, 1736505302, 3828053637, 2843525074, 387950274, 2707621996, 1734250477, 2508477412, 3358742172, 37907544, 861898796, 2199642402, 3963895656, 2595719632, 2611074304, 1905932338, 3815963302, 2825533630, 1827357072, 3439342228, 1313434274, 3477065870, 2551313476, 4182267305, 2486992646, 557369421, 1629586809, 2631528163, 780118958, 3230688665, 464981720, 466868921, 3225061235, 3867178370, 1189646516, 3653581568, 4259384302, 3877206596, 2749930768, 1295065201, 3110455787, 3604160069, 947493239, 1951230448, 2366780383, 2720909186, 1626448891, 1567644749, 4095219607, 2255250185, 3890728242, 3677851786, 1512777483, 3302153646, 3639795465, 3570409012, 3560552623, 2701751395, 659091402, 253026723, 770041293, 932999605, 929294330, 2255244582, 491571242, 2318165131, 646150179, 2457973245, 3404442048, 1811046796, 2114786926, 2250601205, 2957536800, 2057307496, 1615601724, 1446701033, 3196923933, 2506561149, 621608946, 2588475186, 1294426766, 111485804, 3127098517, 3413953863, 159757917, 1007583914, 1919522238, 1533492422, 518896112, 2250217660, 1632161012, 3016992499, 2882099569, 849656592, 222537542, 3509403233, 161606913, 1605248382, 3352692358, 3411074150, 2427706895, 1168269987, 2127772244, 4067089096, 2583219658, 2307412109, 3116468008, 298181444, 707968649, 513058140, 1305255401, 2862849724, 4103161448, 4154777369, 623029873, 1499098522, 58428925, 479229281, 3574764821, 221462610, 209606840, 3199377518, 1955205562, 914493041, 1382070084, 227405446, 2403691142, 3138148953, 872011160, 3876141278, 2937056085, 364743097, 4284929342, 2801740954, 3201600347, 1337506301, 4182626582, 1255808217, 1178113041, 2738358520, 2212922814, 2053909832, 2814177911, 4188860607, 1618355692, 758439383, 62533341, 3812062841, 4006865376, 2366600103, 3538581347, 2245161664, 301750553, 443974236, 437209240, 3754025588, 3605272264, 4158952326, 411164180, 2380853027, 2753717381, 398728858, 1533186933, 2327411614, 2476627447, 3041683652, 3951040712, 3342966119, 1868092269, 229355121, 3535171118, 4253656842, 3492587997, 3930466446, 3358098503, 2693380499, 2531287955, 26988200, 1090924888, 287600564, 3957220340, 2795017573, 1086378781, 2018341576, 1785097044, 2626146391, 4112239199, 2344861265, 903236383, 3498483384, 2516976275, 702059362, 1401011331, 3694525200, 330851791, 487675803, 3681025289, 2365474488, 461552440, 332929264, 1151451520, 1372162033, 3170837932, 2302404975, 2800691123, 949140323, 3645223688, 909370279, 1632224182, 3784864428, 4004620246, 1411005433, 4016772498, 621052273, 3080511368, 1325678924, 651166397, 1207354522, 1490808125, 3346173279, 2230596518, 588704981]

            for (e = 0; e < r["length"]; ++e) i[o++] = r[e] & 255;
        }

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
    }

    function LVyG() {
        if (t == null) {
            t = Kbq_();

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

    function MEks(e) {
        var t;
        for (t = 0; t < e["length"]; ++t) e[t] = LVyG();
    }

    function NikX() {
    }

    NikX["prototype"]["nextBytes"] = MEks;

    var _;

    var c = 0xdeadbeefcafe;
    var l = (c & 16777215) == 15715070;

    function OyKy(e, t, r) {
        if (e != null) if ("number" == typeof e) this["fromNumber"](e, t, r);else if (t == null && "string" != typeof e) this["fromString"](e, 256);else this["fromString"](e, t);
    }

    function PmLW() {
        return new OyKy(null);
    }

    function QNwJ(e, t, r, n, i, o) {
        while (--o >= 0) {
            var a = t * this[e++] + r[n] + i;
            i = Math["floor"](a / 67108864);
            r[n++] = a & 67108863;
        }
        return i;
    }

    function RVWD(e, t, r, n, i, o) {
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

    function SOLg(e, t, r, n, i, o) {
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

    if (l && "Netscape" == "Microsoft Internet Explorer") {
        OyKy["prototype"]["am"] = RVWD;
        _ = 30;
    } else if (l && "Netscape" != "Netscape") {
        OyKy["prototype"]["am"] = QNwJ;
        _ = 26;
    } else {
        OyKy["prototype"]["am"] = SOLg;
        _ = 28;
    }

    OyKy["prototype"]["DB"] = _;
    OyKy["prototype"]["DM"] = (1 << _) - 1;
    OyKy["prototype"]["DV"] = 1 << _;
    var u = 52;
    OyKy["prototype"]["FV"] = Math["pow"](2, u);
    OyKy["prototype"]["F1"] = u - _;
    OyKy["prototype"]["F2"] = 2 * _ - u;
    var f = "0123456789abcdefghijklmnopqrstuvwxyz";
    var p = [];
    var d, g;
    d = "0"["charCodeAt"](0);

    for (g = 0; g <= 9; ++g) p[d++] = g;

    d = "a"["charCodeAt"](0);

    for (g = 10; g < 36; ++g) p[d++] = g;

    d = "A"["charCodeAt"](0);

    for (g = 10; g < 36; ++g) p[d++] = g;

    function Tdeh(e) {
        return f["charAt"](e);
    }

    function UCzE(e, t) {
        var r = p[e["charCodeAt"](t)];
        return r == null ? -1 : r;
    }

    function VpeW(e) {
        for (var t = this["t"] - 1; t >= 0; --t) e[t] = this[t];
        e["t"] = this["t"];
        e["s"] = this["s"];
    }

    function WSQC(e) {
        this["t"] = 1;
        this["s"] = e < 0 ? -1 : 0;
        if (e > 0) this[0] = e;else if (e < -1) this[0] = e + this["DV"];else this["t"] = 0;
    }

    function XTlo(e) {
        var t = PmLW();
        t["fromInt"](e);
        return t;
    }

    function YnEY(e, t) {
        var r;
        if (t == 16) r = 4;else if (t == 8) r = 3;else if (t == 256) r = 8;else if (t == 2) r = 1;else if (t == 32) r = 5;else if (t == 4) r = 2;else {
            // this["fromRadix"](e, t);
            return;
        }
        this["t"] = 0;
        this["s"] = 0;
        var n = e["length"],
            i = false,
            o = 0;

        while (--n >= 0) {
            var a = r == 8 ? e[n] & 255 : UCzE(e, n);

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
        if (i) OyKy["ZERO"]["subTo"](this, this);
    }

    function ZqvG() {
        var e = this["s"] & this["DM"];

        while (this["t"] > 0 && this[this["t"] - 1] == e) --this["t"];
    }

    function aaCp(e) {
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
                o = Tdeh(n);
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
                if (i) o += Tdeh(n);
            }
        }

        return i ? o : "0";
    }

    function bksk() {
        var e = PmLW();
        OyKy["ZERO"]["subTo"](this, e);
        return e;
    }

    function cWqJ() {
        return this["s"] < 0 ? this["negate"]() : this;
    }

    function dnsD(e) {
        var t = this["s"] - e["s"];
        if (t != 0) return t;
        var r = this["t"];
        t = r - e["t"];
        if (t != 0) return this["s"] < 0 ? -t : t;

        while (--r >= 0) if ((t = this[r] - e[r]) != 0) return t;

        return 0;
    }

    function eujq(e) {
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

    function fYHx() {
        if (this["t"] <= 0) return 0;
        return this["DB"] * (this["t"] - 1) + eujq(this[this["t"] - 1] ^ this["s"] & this["DM"]);
    }

    function gfMS(e, t) {
        var r;

        for (r = this["t"] - 1; r >= 0; --r) t[r + e] = this[r];

        for (r = e - 1; r >= 0; --r) t[r] = 0;

        t["t"] = this["t"] + e;
        t["s"] = this["s"];
    }

    function hsVL(e, t) {
        for (var r = e; r < this["t"]; ++r) t[r - e] = this[r];

        t["t"] = Math["max"](this["t"] - e, 0);
        t["s"] = this["s"];
    }

    function iiJa(e, t) {
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

    function jPgV(e, t) {
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

    function kRGn(e, t) {
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

    function lOBp(e, t) {
        var r = this["abs"](),
            n = e["abs"]();
        var i = r["t"];
        t["t"] = i + n["t"];
        while (--i >= 0) t[i] = 0;

        for (i = 0; i < n["t"]; ++i) t[i + r["t"]] = r["am"](0, n[i], t, i, 0, r["t"]);

        t["s"] = 0;
        t["clamp"]();
        if (this["s"] != e["s"]) OyKy["ZERO"]["subTo"](t, t);
    }

    function mpJQ(e) {
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

    function nUtf(e, t, r) {
        var n = e["abs"]();
        if (n["t"] <= 0) return;
        var i = this["abs"]();

        if (i["t"] < n["t"]) {
            if (t != null) t["fromInt"](0);
            if (r != null) this["copyTo"](r);
            return;
        }

        if (r == null) r = PmLW();
        var o = PmLW(),
            a = this["s"],
            s = e["s"];

        var _ = this["DB"] - eujq(n[n["t"] - 1]);

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
            v = t == null ? PmLW() : t;
        o["dlShiftTo"](h, v);

        if (r["compareTo"](v) >= 0) {
            r[r["t"]++] = 1;
            r["subTo"](v, r);
        }

        OyKy["ONE"]["dlShiftTo"](c, v);

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
            if (a != s) OyKy["ZERO"]["subTo"](t, t);
        }

        r["t"] = c;
        r["clamp"]();
        if (_ > 0) r["rShiftTo"](_, r);
        if (a < 0) OyKy["ZERO"]["subTo"](r, r);
    }

    function otYe(e) {
        var t = PmLW();
        this["abs"]()["divRemTo"](e, null, t);
        if (this["s"] < 0 && t["compareTo"](OyKy["ZERO"]) > 0) e["subTo"](t, t);
        return t;
    }

    function pKN_(e) {
        this["m"] = e;
    }

    function qlKQ(e) {
        if (e["s"] < 0 || e["compareTo"](this["m"]) >= 0) return e["mod"](this["m"]);else return e;
    }

    function rlNi(e) {
        return e;
    }

    function sdKI(e) {
        e["divRemTo"](this["m"], null, e);
    }

    function tRwk(e, t, r) {
        e["multiplyTo"](t, r);
        EOi = AJgjJ.EMf()[0][17];
        this["reduce"](r);
    }

    function uuHI(e, t) {
        e["squareTo"](t);
        Fnb = AJgjJ.EMf()[4][17];
        this["reduce"](t);
        Fnb = AJgjJ.EMf()[0][16];
    }

    pKN_["prototype"]["convert"] = qlKQ;
    pKN_["prototype"]["revert"] = rlNi;
    pKN_["prototype"]["reduce"] = sdKI;
    pKN_["prototype"]["mulTo"] = tRwk;
    pKN_["prototype"]["sqrTo"] = uuHI;

    function vvCa() {
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

    function wBwQ(e) {
        this["m"] = e;
        this["mp"] = e["invDigit"]();
        this["mpl"] = this["mp"] & 32767;
        this["mph"] = this["mp"] >> 15;
        this["um"] = (1 << e["DB"] - 15) - 1;
        this["mt2"] = 2 * e["t"];
    }

    function xxDc(e) {
        var t = PmLW();
        e["abs"]()["dlShiftTo"](this["m"]["t"], t);
        t["divRemTo"](this["m"], null, t);
        if (e["s"] < 0 && t["compareTo"](OyKy["ZERO"]) > 0) this["m"]["subTo"](t, t);
        return t;
    }

    function yVlr(e) {
        var t = PmLW();
        e["copyTo"](t);
        this["reduce"](t);
        return t;
    }

    function AoNX(e) {
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

    function BQKK(e, t) {
        e["squareTo"](t);
        this["reduce"](t);
    }

    function CUlA(e, t, r) {
        e["multiplyTo"](t, r);
        this["reduce"](r);
    }

    wBwQ["prototype"]["convert"] = xxDc;
    wBwQ["prototype"]["revert"] = yVlr;
    wBwQ["prototype"]["reduce"] = AoNX;
    wBwQ["prototype"]["mulTo"] = CUlA;
    wBwQ["prototype"]["sqrTo"] = BQKK;

    function DulL() {
        return (this["t"] > 0 ? this[0] & 1 : this["s"]) == 0;
    }

    function ELWW(e, t) {
        if (e > 4294967295 || e < 1) return OyKy["ONE"];
        var r = PmLW(),
            n = PmLW(),
            i = t["convert"](this),
            o = eujq(e) - 1;
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

    function FIAn(e, t) {
        var r;
        if (e < 256 || t["isEven"]()) r = new pKN_(t);else r = new wBwQ(t);
        return this["exp"](e, r);
    }

    OyKy["prototype"]["copyTo"] = VpeW;
    OyKy["prototype"]["fromInt"] = WSQC;
    OyKy["prototype"]["fromString"] = YnEY;
    OyKy["prototype"]["clamp"] = ZqvG;
    OyKy["prototype"]["dlShiftTo"] = gfMS;
    OyKy["prototype"]["drShiftTo"] = hsVL;
    OyKy["prototype"]["lShiftTo"] = iiJa;
    OyKy["prototype"]["rShiftTo"] = jPgV;
    OyKy["prototype"]["subTo"] = kRGn;
    OyKy["prototype"]["multiplyTo"] = lOBp;
    OyKy["prototype"]["squareTo"] = mpJQ;
    OyKy["prototype"]["divRemTo"] = nUtf;
    OyKy["prototype"]["invDigit"] = vvCa;
    OyKy["prototype"]["isEven"] = DulL;
    OyKy["prototype"]["exp"] = ELWW;
    OyKy["prototype"]["toString"] = aaCp;
    OyKy["prototype"]["negate"] = bksk;
    OyKy["prototype"]["abs"] = cWqJ;
    OyKy["prototype"]["compareTo"] = dnsD;
    OyKy["prototype"]["bitLength"] = fYHx;
    OyKy["prototype"]["mod"] = otYe;
    OyKy["prototype"]["modPowInt"] = FIAn;
    OyKy["ZERO"] = XTlo(0);
    OyKy["ONE"] = XTlo(1);

    function GvsQ(e, t) {
        return new OyKy(e, t);
    }

    function HYaF(e, t) {
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
        var o = new NikX();
        var a = [];

        while (t > 2) {
            a[0] = 0;

            while (a[0] == 0) o["nextBytes"](a);

            r[--t] = a[0];
        }

        r[--t] = 2;
        r[--t] = 0;
        return new OyKy(r);
    }

    function GMAs() {
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

    function IaJW(e, t) {
        if (e != null && t != null && e["length"] > 0 && t["length"] > 0) {
            this["n"] = GvsQ(e, 16);
            this["e"] = parseInt(t, 16);
        } else console && console["error"] && console["error"]("Invalid RSA public key");
    }

    function JiOq(e) {
        return e["modPowInt"](this["e"], this["n"]);
    }

    function KIMY(e) {
        var t = HYaF(e, this["n"]["bitLength"]() + 7 >> 3);
        if (t == null) return null;
        var r = this["doPublic"](t);
        if (r == null) return null;
        var n = r["toString"](16);
        if ((n["length"] & 1) == 0) return n;else return "0" + n;
    }

    GMAs["prototype"]["doPublic"] = JiOq;
    GMAs["prototype"]["setPublic"] = IaJW;
    GMAs["prototype"]["encrypt"] = KIMY;
    return GMAs;
}();

var RSAKey = function () {
    function n() {
      this["i"] = 0, this["j"] = 0, this["S"] = [];
    }

    n["prototype"]["init"] = function S(t) {
      var e, n, r;

      for (e = 0; e < 256; ++e) this["S"][e] = e;

      for (e = n = 0; e < 256; ++e) n = n + this["S"][e] + t[e % t["length"]] & 255, r = this["S"][e], this["S"][e] = this["S"][n], this["S"][n] = r;

      this["i"] = 0, this["j"] = 0;
    }, n["prototype"]["next"] = function C() {
      var t;
      return this["i"] = this["i"] + 1 & 255, this["j"] = this["j"] + this["S"][this["i"]] & 255, t = this["S"][this["i"]], this["S"][this["i"]] = this["S"][this["j"]], this["S"][this["j"]] = t, this["S"][t + this["S"][this["i"]] & 255];
    };
    var r,
        o,
        i,
        t,
        s = 256;

    if (null == o) {
      var e;

    //   if (o = [], i = 0, window["crypto"] && window["crypto"]["getRandomValues"]) {
    //     var a = new Uint32Array(256);

    //     for (window["crypto"]["getRandomValues"](a), e = 0; e < a["length"]; ++e) o[i++] = 255 & a[e];
    //   }
    if (true) {
        var a = [3591547614, 3028658294, 1787584789, 3089948306, 4277389380, 4221677045, 1974652986, 1808987487, 2537405291, 4086825882, 2441713584, 4187607199, 640242727, 2936828668, 4176717455, 3503396694, 3820587203, 681749489, 2447878200, 1573951802, 3651669405, 376362409, 910158691, 370259293, 1135009247, 4189709721, 1071938870, 75421350, 352735949, 1627061650, 93710743, 4107135713, 421190563, 3881466552, 1683199296, 1736505302, 3828053637, 2843525074, 387950274, 2707621996, 1734250477, 2508477412, 3358742172, 37907544, 861898796, 2199642402, 3963895656, 2595719632, 2611074304, 1905932338, 3815963302, 2825533630, 1827357072, 3439342228, 1313434274, 3477065870, 2551313476, 4182267305, 2486992646, 557369421, 1629586809, 2631528163, 780118958, 3230688665, 464981720, 466868921, 3225061235, 3867178370, 1189646516, 3653581568, 4259384302, 3877206596, 2749930768, 1295065201, 3110455787, 3604160069, 947493239, 1951230448, 2366780383, 2720909186, 1626448891, 1567644749, 4095219607, 2255250185, 3890728242, 3677851786, 1512777483, 3302153646, 3639795465, 3570409012, 3560552623, 2701751395, 659091402, 253026723, 770041293, 932999605, 929294330, 2255244582, 491571242, 2318165131, 646150179, 2457973245, 3404442048, 1811046796, 2114786926, 2250601205, 2957536800, 2057307496, 1615601724, 1446701033, 3196923933, 2506561149, 621608946, 2588475186, 1294426766, 111485804, 3127098517, 3413953863, 159757917, 1007583914, 1919522238, 1533492422, 518896112, 2250217660, 1632161012, 3016992499, 2882099569, 849656592, 222537542, 3509403233, 161606913, 1605248382, 3352692358, 3411074150, 2427706895, 1168269987, 2127772244, 4067089096, 2583219658, 2307412109, 3116468008, 298181444, 707968649, 513058140, 1305255401, 2862849724, 4103161448, 4154777369, 623029873, 1499098522, 58428925, 479229281, 3574764821, 221462610, 209606840, 3199377518, 1955205562, 914493041, 1382070084, 227405446, 2403691142, 3138148953, 872011160, 3876141278, 2937056085, 364743097, 4284929342, 2801740954, 3201600347, 1337506301, 4182626582, 1255808217, 1178113041, 2738358520, 2212922814, 2053909832, 2814177911, 4188860607, 1618355692, 758439383, 62533341, 3812062841, 4006865376, 2366600103, 3538581347, 2245161664, 301750553, 443974236, 437209240, 3754025588, 3605272264, 4158952326, 411164180, 2380853027, 2753717381, 398728858, 1533186933, 2327411614, 2476627447, 3041683652, 3951040712, 3342966119, 1868092269, 229355121, 3535171118, 4253656842, 3492587997, 3930466446, 3358098503, 2693380499, 2531287955, 26988200, 1090924888, 287600564, 3957220340, 2795017573, 1086378781, 2018341576, 1785097044, 2626146391, 4112239199, 2344861265, 903236383, 3498483384, 2516976275, 702059362, 1401011331, 3694525200, 330851791, 487675803, 3681025289, 2365474488, 461552440, 332929264, 1151451520, 1372162033, 3170837932, 2302404975, 2800691123, 949140323, 3645223688, 909370279, 1632224182, 3784864428, 4004620246, 1411005433, 4016772498, 621052273, 3080511368, 1325678924, 651166397, 1207354522, 1490808125, 3346173279, 2230596518, 588704981];
        var o = [];
        for (e = 0; e < a["length"]; ++e) o[i++] = 255 & a[e];
    }

      var _ = 0,
          u = function (t) {
        if (256 <= (_ = _ || 0) || s <= i) window["removeEventListener"] ? (_ = 0, window["removeEventListener"]("mousemove", u, !1)) : window["detachEvent"] && (_ = 0, window["detachEvent"]("onmousemove", u));else try {
          var e = t["x"] + t["y"];
          o[i++] = 255 & e, _ += 1;
        } catch (n) {}
      };

    //   window["addEventListener"] ? window["addEventListener"]("mousemove", u, !1) : window["attachEvent"] && window["attachEvent"]("onmousemove", u);
    }

    function c() {
      if (null == r) {
        r = function e() {
          return new n();
        }();

        while (i < s) {
          var t = Math["floor"](65536 * Math["random"]());
          o[i++] = 255 & t;
        }

        for (r["init"](o), i = 0; i < o["length"]; ++i) o[i] = 0;

        i = 0;
      }

      return r["next"]();
    }

    function l() {}

    l["prototype"]["nextBytes"] = function T(t) {
      var e;

      for (e = 0; e < t["length"]; ++e) t[e] = c();
    };

    function w(t, e, n) {
      null != t && ("number" == typeof t ? this["fromNumber"](t, e, n) : null == e && "string" != typeof t ? this["fromString"](t, 256) : this["fromString"](t, e));
    }

    function y() {
      return new w(null);
    }

    t = "Microsoft Internet Explorer" == navigator["appName"] ? (w["prototype"]["am"] = function A(t, e, n, r, o, i) {
      var s = 32767 & e,
          a = e >> 15;

      while (0 <= --i) {
        var _ = 32767 & this[t],
            u = this[t++] >> 15,
            c = a * _ + u * s;

        o = ((_ = s * _ + ((32767 & c) << 15) + n[r] + (1073741823 & o)) >>> 30) + (c >>> 15) + a * u + (o >>> 30), n[r++] = 1073741823 & _;
      }

      return o;
    }, 30) : "Netscape" != navigator["appName"] ? (w["prototype"]["am"] = function R(t, e, n, r, o, i) {
      while (0 <= --i) {
        var s = e * this[t++] + n[r] + o;
        o = Math["floor"](s / 67108864), n[r++] = 67108863 & s;
      }

      return o;
    }, 26) : (w["prototype"]["am"] = function O(t, e, n, r, o, i) {
      var s = 16383 & e,
          a = e >> 14;

      while (0 <= --i) {
        var _ = 16383 & this[t],
            u = this[t++] >> 14,
            c = a * _ + u * s;

        o = ((_ = s * _ + ((16383 & c) << 14) + n[r] + o) >> 28) + (c >> 14) + a * u, n[r++] = 268435455 & _;
      }

      return o;
    }, 28), w["prototype"]["DB"] = t, w["prototype"]["DM"] = (1 << t) - 1, w["prototype"]["DV"] = 1 << t;
    w["prototype"]["FV"] = Math["pow"](2, 52), w["prototype"]["F1"] = 52 - t, w["prototype"]["F2"] = 2 * t - 52;
    var h,
        f,
        d = "0123456789abcdefghijklmnopqrstuvwxyz",
        p = [];

    for (h = "0"["charCodeAt"](0), f = 0; f <= 9; ++f) p[h++] = f;

    for (h = "a"["charCodeAt"](0), f = 10; f < 36; ++f) p[h++] = f;

    for (h = "A"["charCodeAt"](0), f = 10; f < 36; ++f) p[h++] = f;

    function g(t) {
      return d["charAt"](t);
    }

    function m(t) {
      var e = y();
      return e["fromInt"](t), e;
    }

    function E(t) {
      var e,
          n = 1;
      return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n;
    }

    function v(t) {
      this["m"] = t;
    }

    function b(t) {
      this["m"] = t, this["mp"] = t["invDigit"](), this["mpl"] = 32767 & this["mp"], this["mph"] = this["mp"] >> 15, this["um"] = (1 << t["DB"] - 15) - 1, this["moriginalTime"] = 2 * t["t"];
    }

    function x() {
      this["n"] = null, this["e"] = 0, this["d"] = null, this["p"] = null, this["q"] = null, this["dmp1"] = null, this["dmq1"] = null, this["coeff"] = null;
      this["setPublic"]("00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81", "10001");
    }

    return v["prototype"]["convert"] = function k(t) {
      return t["s"] < 0 || 0 <= t["compareTo"](this["m"]) ? t["mod"](this["m"]) : t;
    }, v["prototype"]["revert"] = function D(t) {
      return t;
    }, v["prototype"]["reduce"] = function I(t) {
      t["divRemTo"](this["m"], null, t);
    }, v["prototype"]["mulTo"] = function M(t, e, n) {
      t["multiplyTo"](e, n), this["reduce"](n);
    }, v["prototype"]["sqrTo"] = function j(t, e) {
      t["squareTo"](e), this["reduce"](e);
    }, b["prototype"]["convert"] = function P(t) {
      var e = y();
      return t["abs"]()["dlShiftTo"](this["m"]["t"], e), e["divRemTo"](this["m"], null, e), t["s"] < 0 && 0 < e["compareTo"](w["ZERO"]) && this["m"]["subTo"](e, e), e;
    }, b["prototype"]["revert"] = function N(t) {
      var e = y();
      return t["copyTo"](e), this["reduce"](e), e;
    }, b["prototype"]["reduce"] = function B(t) {
      while (t["t"] <= this["moriginalTime"]) t[t["t"]++] = 0;

      for (var e = 0; e < this["m"]["t"]; ++e) {
        var n = 32767 & t[e],
            r = n * this["mpl"] + ((n * this["mph"] + (t[e] >> 15) * this["mpl"] & this["um"]) << 15) & t["DM"];
        t[n = e + this["m"]["t"]] += this["m"]["am"](0, r, t, e, 0, this["m"]["t"]);

        while (t[n] >= t["DV"]) t[n] -= t["DV"], t[++n]++;
      }

      t["clamp"](), t["drShiftTo"](this["m"]["t"], t), 0 <= t["compareTo"](this["m"]) && t["subTo"](this["m"], t);
    }, b["prototype"]["mulTo"] = function L(t, e, n) {
      t["multiplyTo"](e, n), this["reduce"](n);
    }, b["prototype"]["sqrTo"] = function F(t, e) {
      t["squareTo"](e), this["reduce"](e);
    }, w["prototype"]["copyTo"] = function q(t) {
      for (var e = this["t"] - 1; 0 <= e; --e) t[e] = this[e];

      t["t"] = this["t"], t["s"] = this["s"];
    }, w["prototype"]["fromInt"] = function U(t) {
      this["t"] = 1, this["s"] = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this["DV"] : this["t"] = 0;
    }, w["prototype"]["fromString"] = function H(t, e) {
      var n;
      if (16 == e) n = 4;else if (8 == e) n = 3;else if (256 == e) n = 8;else if (2 == e) n = 1;else if (32 == e) n = 5;else {
        if (4 != e) return void this["fromRadix"](t, e);
        n = 2;
      }
      this["t"] = 0, this["s"] = 0;
      var r,
          o,
          i = t["length"],
          s = !1,
          a = 0;

      while (0 <= --i) {
        var _ = 8 == n ? 255 & t[i] : (r = i, void 0, null == (o = p[t["charCodeAt"](r)]) ? -1 : o);

        _ < 0 ? "-" == t["charAt"](i) && (s = !0) : (s = !1, 0 == a ? this[this["t"]++] = _ : a + n > this["DB"] ? (this[this["t"] - 1] |= (_ & (1 << this["DB"] - a) - 1) << a, this[this["t"]++] = _ >> this["DB"] - a) : this[this["t"] - 1] |= _ << a, (a += n) >= this["DB"] && (a -= this["DB"]));
      }

      8 == n && 0 != (128 & t[0]) && (this["s"] = -1, 0 < a && (this[this["t"] - 1] |= (1 << this["DB"] - a) - 1 << a)), this["clamp"](), s && w["ZERO"]["subTo"](this, this);
    }, w["prototype"]["clamp"] = function $() {
      var t = this["s"] & this["DM"];

      while (0 < this["t"] && this[this["t"] - 1] == t) --this["t"];
    }, w["prototype"]["dlShiftTo"] = function G(t, e) {
      var n;

      for (n = this["t"] - 1; 0 <= n; --n) e[n + t] = this[n];

      for (n = t - 1; 0 <= n; --n) e[n] = 0;

      e["t"] = this["t"] + t, e["s"] = this["s"];
    }, w["prototype"]["drShiftTo"] = function z(t, e) {
      for (var n = t; n < this["t"]; ++n) e[n - t] = this[n];

      e["t"] = Math["max"](this["t"] - t, 0), e["s"] = this["s"];
    }, w["prototype"]["lShiftTo"] = function X(t, e) {
      var n,
          r = t % this["DB"],
          o = this["DB"] - r,
          i = (1 << o) - 1,
          s = Math["floor"](t / this["DB"]),
          a = this["s"] << r & this["DM"];

      for (n = this["t"] - 1; 0 <= n; --n) e[n + s + 1] = this[n] >> o | a, a = (this[n] & i) << r;

      for (n = s - 1; 0 <= n; --n) e[n] = 0;

      e[s] = a, e["t"] = this["t"] + s + 1, e["s"] = this["s"], e["clamp"]();
    }, w["prototype"]["rShiftTo"] = function V(t, e) {
      e["s"] = this["s"];
      var n = Math["floor"](t / this["DB"]);
      if (n >= this["t"]) e["t"] = 0;else {
        var r = t % this["DB"],
            o = this["DB"] - r,
            i = (1 << r) - 1;
        e[0] = this[n] >> r;

        for (var s = n + 1; s < this["t"]; ++s) e[s - n - 1] |= (this[s] & i) << o, e[s - n] = this[s] >> r;

        0 < r && (e[this["t"] - n - 1] |= (this["s"] & i) << o), e["t"] = this["t"] - n, e["clamp"]();
      }
    }, w["prototype"]["subTo"] = function J(t, e) {
      var n = 0,
          r = 0,
          o = Math["min"](t["t"], this["t"]);

      while (n < o) r += this[n] - t[n], e[n++] = r & this["DM"], r >>= this["DB"];

      if (t["t"] < this["t"]) {
        r -= t["s"];

        while (n < this["t"]) r += this[n], e[n++] = r & this["DM"], r >>= this["DB"];

        r += this["s"];
      } else {
        r += this["s"];

        while (n < t["t"]) r -= t[n], e[n++] = r & this["DM"], r >>= this["DB"];

        r -= t["s"];
      }

      e["s"] = r < 0 ? -1 : 0, r < -1 ? e[n++] = this["DV"] + r : 0 < r && (e[n++] = r), e["t"] = n, e["clamp"]();
    }, w["prototype"]["multiplyTo"] = function W(t, e) {
      var n = this["abs"](),
          r = t["abs"](),
          o = n["t"];
      e["t"] = o + r["t"];

      while (0 <= --o) e[o] = 0;

      for (o = 0; o < r["t"]; ++o) e[o + n["t"]] = n["am"](0, r[o], e, o, 0, n["t"]);

      e["s"] = 0, e["clamp"](), this["s"] != t["s"] && w["ZERO"]["subTo"](e, e);
    }, w["prototype"]["squareTo"] = function Y(t) {
      var e = this["abs"](),
          n = t["t"] = 2 * e["t"];

      while (0 <= --n) t[n] = 0;

      for (n = 0; n < e["t"] - 1; ++n) {
        var r = e["am"](n, e[n], t, 2 * n, 0, 1);
        (t[n + e["t"]] += e["am"](n + 1, 2 * e[n], t, 2 * n + 1, r, e["t"] - n - 1)) >= e["DV"] && (t[n + e["t"]] -= e["DV"], t[n + e["t"] + 1] = 1);
      }

      0 < t["t"] && (t[t["t"] - 1] += e["am"](n, e[n], t, 2 * n, 0, 1)), t["s"] = 0, t["clamp"]();
    }, w["prototype"]["divRemTo"] = function K(t, e, n) {
      var r = t["abs"]();

      if (!(r["t"] <= 0)) {
        var o = this["abs"]();
        if (o["t"] < r["t"]) return null != e && e["fromInt"](0), void (null != n && this["copyTo"](n));
        null == n && (n = y());

        var i = y(),
            s = this["s"],
            a = t["s"],
            _ = this["DB"] - E(r[r["t"] - 1]);

        0 < _ ? (r["lShiftTo"](_, i), o["lShiftTo"](_, n)) : (r["copyTo"](i), o["copyTo"](n));
        var u = i["t"],
            c = i[u - 1];

        if (0 != c) {
          var l = c * (1 << this["F1"]) + (1 < u ? i[u - 2] >> this["F2"] : 0),
              h = this["FV"] / l,
              f = (1 << this["F1"]) / l,
              d = 1 << this["F2"],
              p = n["t"],
              g = p - u,
              m = null == e ? y() : e;
          i["dlShiftTo"](g, m), 0 <= n["compareTo"](m) && (n[n["t"]++] = 1, n["subTo"](m, n)), w["ONE"]["dlShiftTo"](u, m), m["subTo"](i, i);

          while (i["t"] < u) i[i["t"]++] = 0;

          while (0 <= --g) {
            var v = n[--p] == c ? this["DM"] : Math["floor"](n[p] * h + (n[p - 1] + d) * f);

            if ((n[p] += i["am"](0, v, n, g, 0, u)) < v) {
              i["dlShiftTo"](g, m), n["subTo"](m, n);

              while (n[p] < --v) n["subTo"](m, n);
            }
          }

          null != e && (n["drShiftTo"](u, e), s != a && w["ZERO"]["subTo"](e, e)), n["t"] = u, n["clamp"](), 0 < _ && n["rShiftTo"](_, n), s < 0 && w["ZERO"]["subTo"](n, n);
        }
      }
    }, w["prototype"]["invDigit"] = function Q() {
      if (this["t"] < 1) return 0;
      var t = this[0];
      if (0 == (1 & t)) return 0;
      var e = 3 & t;
      return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this["DV"]) % this["DV"]) ? this["DV"] - e : -e;
    }, w["prototype"]["isEven"] = function Z() {
      return 0 == (0 < this["t"] ? 1 & this[0] : this["s"]);
    }, w["prototype"]["exp"] = function tt(t, e) {
      if (4294967295 < t || t < 1) return w["ONE"];
      var n = y(),
          r = y(),
          o = e["convert"](this),
          i = E(t) - 1;
      o["copyTo"](n);

      while (0 <= --i) if (e["sqrTo"](n, r), 0 < (t & 1 << i)) e["mulTo"](r, o, n);else {
        var s = n;
        n = r, r = s;
      }

      return e["revert"](n);
    }, w["prototype"]["toString"] = function et(t) {
      if (this["s"] < 0) return "-" + this["negate"]()["toString"](t);
      var e;
      if (16 == t) e = 4;else if (8 == t) e = 3;else if (2 == t) e = 1;else if (32 == t) e = 5;else {
        if (4 != t) return this["toRadix"](t);
        e = 2;
      }
      var n,
          r = (1 << e) - 1,
          o = !1,
          i = "",
          s = this["t"],
          a = this["DB"] - s * this["DB"] % e;

      if (0 < s--) {
        a < this["DB"] && 0 < (n = this[s] >> a) && (o = !0, i = g(n));

        while (0 <= s) a < e ? (n = (this[s] & (1 << a) - 1) << e - a, n |= this[--s] >> (a += this["DB"] - e)) : (n = this[s] >> (a -= e) & r, a <= 0 && (a += this["DB"], --s)), 0 < n && (o = !0), o && (i += g(n));
      }

      return o ? i : "0";
    }, w["prototype"]["negate"] = function nt() {
      var t = y();
      return w["ZERO"]["subTo"](this, t), t;
    }, w["prototype"]["abs"] = function rt() {
      return this["s"] < 0 ? this["negate"]() : this;
    }, w["prototype"]["compareTo"] = function ot(t) {
      var e = this["s"] - t["s"];
      if (0 != e) return e;
      var n = this["t"];
      if (0 != (e = n - t["t"])) return this["s"] < 0 ? -e : e;

      while (0 <= --n) if (0 != (e = this[n] - t[n])) return e;

      return 0;
    }, w["prototype"]["bitLength"] = function it() {
      return this["t"] <= 0 ? 0 : this["DB"] * (this["t"] - 1) + E(this[this["t"] - 1] ^ this["s"] & this["DM"]);
    }, w["prototype"]["mod"] = function st(t) {
      var e = y();
      return this["abs"]()["divRemTo"](t, null, e), this["s"] < 0 && 0 < e["compareTo"](w["ZERO"]) && t["subTo"](e, e), e;
    }, w["prototype"]["modPowInt"] = function at(t, e) {
      var n;
      return n = t < 256 || e["isEven"]() ? new v(e) : new b(e), this["exp"](t, n);
    }, w["ZERO"] = m(0), w["ONE"] = m(1), x["prototype"]["doPublic"] = function $_BFC_(t) {
      return t["modPowInt"](this["e"], this["n"]);
    }, x["prototype"]["setPublic"] = function ut(t, e) {
      null != t && null != e && 0 < t["length"] && 0 < e["length"] ? (this["n"] = function n(t, e) {
        return new w(t, e);
      }(t, 16), this["e"] = parseInt(e, 16)) : console && console["error"] && console["error"]("Invalid RSA public key");
    }, x["prototype"]["encrypt"] = function ct(t) {
      var e = function a(t, e) {
        if (e < t["length"] + 11) return console && console["error"] && console["error"]("Message too long for RSA"), null;
        var n = [],
            r = t["length"] - 1;

        while (0 <= r && 0 < e) {
          var o = t["charCodeAt"](r--);
          o < 128 ? n[--e] = o : 127 < o && o < 2048 ? (n[--e] = 63 & o | 128, n[--e] = o >> 6 | 192) : (n[--e] = 63 & o | 128, n[--e] = o >> 6 & 63 | 128, n[--e] = o >> 12 | 224);
        }

        n[--e] = 0;
        var i = new l(),
            s = [];

        while (2 < e) {
          s[0] = 0;

          while (0 == s[0]) i["nextBytes"](s);

          n[--e] = s[0];
        }

        return n[--e] = 2, n[--e] = 0, new w(n);
      }(t, this["n"]["bitLength"]() + 7 >> 3);

      if (null == e) return null;
      var n = this["doPublic"](e);
      if (null == n) return null;
      var r = n["toString"](16);
      return 0 == (1 & r["length"]) ? r : "0" + r;
    }, x;
  }();


var AES = function () {
    var n = Object["create"] || function (t) {
      var e;
      return r["prototype"] = t, e = new r(), r["prototype"] = null, e;
    };

    function r() {}

    var t,
        e = {},
        o = e["lib"] = {},
        i = o["Base"] = {
      "$_EIK": function (t) {
        var e = n(this);
        return t && e["mixIn"](t), e["hasOwnProperty"]("init") && this["init"] !== e["init"] || (e["init"] = function () {
          e["$super"]["init"]["apply"](this, arguments);
        }), (e["init"]["prototype"] = e)["$super"] = this, e;
      },
      "create": function () {
        var t = this["$_EIK"]();
        return t["init"]["apply"](t, arguments), t;
      },
      "init": function () {},
      "mixIn": function (t) {
        for (var e in t) t["hasOwnProperty"](e) && (this[e] = t[e]);

        t["hasOwnProperty"]("toString") && (this["toString"] = t["toString"]);
      }
    },
        c = o["WordArray"] = i["$_EIK"]({
      "init": function (t, e) {
        t = this["words"] = t || [], e != undefined ? this["sigBytes"] = e : this["sigBytes"] = 4 * t["length"];
      },
      "concat": function (t) {
        var e = this["words"],
            n = t["words"],
            r = this["sigBytes"],
            o = t["sigBytes"];
        if (this["clamp"](), r % 4) for (var i = 0; i < o; i++) {
          var s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          e[r + i >>> 2] |= s << 24 - (r + i) % 4 * 8;
        } else for (i = 0; i < o; i += 4) e[r + i >>> 2] = n[i >>> 2];
        return this["sigBytes"] += o, this;
      },
      "clamp": function () {
        var t = this["words"],
            e = this["sigBytes"];
        t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t["length"] = Math["ceil"](e / 4);
      }
    }),
        s = e["enc"] = {},
        l = s["Latin1"] = {
      "parse": function (t) {
        for (var e = t["length"], n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t["charCodeAt"](r)) << 24 - r % 4 * 8;

        return new c["init"](n, e);
      }
    },
        a = s["Utf8"] = {
      "parse": function (t) {
        return l["parse"](unescape(encodeURIComponent(t)));
      }
    },
        _ = o["BufferedBlockAlgorithm"] = i["$_EIK"]({
      "reset": function () {
        this["$_BCJv"] = new c["init"](), this["$_BDAp"] = 0;
      },
      "$_BDBu": function (t) {
        "string" == typeof t && (t = a["parse"](t)), this["$_BCJv"]["concat"](t), this["$_BDAp"] += t["sigBytes"];
      },
      "$_BDCR": function (t) {
        var e = this["$_BCJv"],
            n = e["words"],
            r = e["sigBytes"],
            o = this["blockSize"],
            i = r / (4 * o),
            s = (i = t ? Math["ceil"](i) : Math["max"]((0 | i) - this["$_BDDH"], 0)) * o,
            a = Math["min"](4 * s, r);

        if (s) {
          for (var _ = 0; _ < s; _ += o) this["$_BDES"](n, _);

          var u = n["splice"](0, s);
          e["sigBytes"] -= a;
        }

        return new c["init"](u, a);
      },
      "$_BDDH": 0
    }),
        u = e["algo"] = {},
        h = o["Cipher"] = _["$_EIK"]({
      "cfg": i["$_EIK"](),
      "createEncryptor": function (t, e) {
        return this["create"](this["$_BDFL"], t, e);
      },
      "init": function (t, e, n) {
        this["cfg"] = this["cfg"]["$_EIK"](n), this["$_BDGa"] = t, this["$_BDHv"] = e, this["reset"]();
      },
      "reset": function () {
        _["reset"]["call"](this), this["$_BDIF"]();
      },
      "process": function (t) {
        return this["$_BDBu"](t), this["$_BDCR"]();
      },
      "finalize": function (t) {
        return t && this["$_BDBu"](t), this["$_BDJT"]();
      },
      "keySize": 4,
      "ivSize": 4,
      "$_BDFL": 1,
      "$_BEAV": 2,
      "$_BEBq": function (u) {
        return {
          "encrypt": function (t, e, n) {
            e = l["parse"](e), n && n["iv"] || ((n = n || {})["iv"] = l["parse"]("0000000000000000"));

            for (var r = w["encrypt"](u, t, e, n), o = r["ciphertext"]["words"], i = r["ciphertext"]["sigBytes"], s = [], a = 0; a < i; a++) {
              var _ = o[a >>> 2] >>> 24 - a % 4 * 8 & 255;

              s["push"](_);
            }

            return s;
          }
        };
      }
    }),
        f = e["mode"] = {},
        d = o["BlockCipherMode"] = i["$_EIK"]({
      "createEncryptor": function (t, e) {
        return this["Encryptor"]["create"](t, e);
      },
      "init": function (t, e) {
        this["$_BECE"] = t, this["$_BEDs"] = e;
      }
    }),
        p = f["CBC"] = ((t = d["$_EIK"]())["Encryptor"] = t["$_EIK"]({
      "processBlock": function (t, e) {
        var n = this["$_BECE"],
            r = n["blockSize"];
        (function s(t, e, n) {
          var r = this["$_BEDs"];

          if (r) {
            var o = r;
            this["$_BEDs"] = undefined;
          } else o = this["$_BEEK"];

          for (var i = 0; i < n; i++) t[e + i] ^= o[i];
        })["call"](this, t, e, r), n["encryptBlock"](t, e), this["$_BEEK"] = t["slice"](e, e + r);
      }
    }), t),
        g = (e["pad"] = {})["Pkcs7"] = {
      "pad": function (t, e) {
        for (var n = 4 * e, r = n - t["sigBytes"] % n, o = r << 24 | r << 16 | r << 8 | r, i = [], s = 0; s < r; s += 4) i["push"](o);

        var a = c["create"](i, r);
        t["concat"](a);
      }
    },
        m = o["BlockCipher"] = h["$_EIK"]({
      "cfg": h["cfg"]["$_EIK"]({
        "mode": p,
        "padding": g
      }),
      "reset": function () {
        h["reset"]["call"](this);
        var t = this["cfg"],
            e = t["iv"],
            n = t["mode"];
        if (this["$_BDGa"] == this["$_BDFL"]) var r = n["createEncryptor"];
        this["$_BEFx"] && this["$_BEFx"]["$_BEGU"] == r ? this["$_BEFx"]["init"](this, e && e["words"]) : (this["$_BEFx"] = r["call"](n, this, e && e["words"]), this["$_BEFx"]["$_BEGU"] = r);
      },
      "$_BDES": function (t, e) {
        this["$_BEFx"]["processBlock"](t, e);
      },
      "$_BDJT": function () {
        var t = this["cfg"]["padding"];

        if (this["$_BDGa"] == this["$_BDFL"]) {
          t["pad"](this["$_BCJv"], this["blockSize"]);
          var e = this["$_BDCR"](!0);
        }

        return e;
      },
      "blockSize": 4
    }),
        v = o["CipherParams"] = i["$_EIK"]({
      "init": function (t) {
        this["mixIn"](t);
      }
    }),
        w = o["SerializableCipher"] = i["$_EIK"]({
      "cfg": i["$_EIK"](),
      "encrypt": function (t, e, n, r) {
        r = this["cfg"]["$_EIK"](r);
        var o = t["createEncryptor"](n, r),
            i = o["finalize"](e),
            s = o["cfg"];
        return v["create"]({
          "ciphertext": i,
          "key": n,
          "iv": s["iv"],
          "algorithm": t,
          "mode": s["mode"],
          "padding": s["padding"],
          "blockSize": t["blockSize"],
          "formatter": r["format"]
        });
      }
    }),
        y = [],
        E = [],
        b = [],
        x = [],
        S = [],
        C = [],
        T = [],
        A = [],
        R = [],
        O = [];

    !function () {
      for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;

      var n = 0,
          r = 0;

      for (e = 0; e < 256; e++) {
        var o = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
        o = o >>> 8 ^ 255 & o ^ 99, y[n] = o;

        var i = t[E[o] = n],
            s = t[i],
            a = t[s],
            _ = 257 * t[o] ^ 16843008 * o;

        b[n] = _ << 24 | _ >>> 8, x[n] = _ << 16 | _ >>> 16, S[n] = _ << 8 | _ >>> 24, C[n] = _;
        _ = 16843009 * a ^ 65537 * s ^ 257 * i ^ 16843008 * n;
        T[o] = _ << 24 | _ >>> 8, A[o] = _ << 16 | _ >>> 16, R[o] = _ << 8 | _ >>> 24, O[o] = _, n ? (n = i ^ t[t[t[a ^ i]]], r ^= t[t[r]]) : n = r = 1;
      }
    }();
    var k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        D = u["AES"] = m["$_EIK"]({
      "$_BDIF": function () {
        if (!this["$_BEHo"] || this["$_BEIo"] !== this["$_BDHv"]) {
          for (var t = this["$_BEIo"] = this["$_BDHv"], e = t["words"], n = t["sigBytes"] / 4, r = 4 * (1 + (this["$_BEHo"] = 6 + n)), o = this["$_BEJx"] = [], i = 0; i < r; i++) if (i < n) o[i] = e[i];else {
            var s = o[i - 1];
            i % n ? 6 < n && i % n == 4 && (s = y[s >>> 24] << 24 | y[s >>> 16 & 255] << 16 | y[s >>> 8 & 255] << 8 | y[255 & s]) : (s = y[(s = s << 8 | s >>> 24) >>> 24] << 24 | y[s >>> 16 & 255] << 16 | y[s >>> 8 & 255] << 8 | y[255 & s], s ^= k[i / n | 0] << 24), o[i] = o[i - n] ^ s;
          }

          for (var a = this["$_BFAC"] = [], _ = 0; _ < r; _++) {
            i = r - _;
            if (_ % 4) s = o[i];else s = o[i - 4];
            a[_] = _ < 4 || i <= 4 ? s : T[y[s >>> 24]] ^ A[y[s >>> 16 & 255]] ^ R[y[s >>> 8 & 255]] ^ O[y[255 & s]];
          }
        }
      },
      "encryptBlock": function (t, e) {
        this["$_BFBH"](t, e, this["$_BEJx"], b, x, S, C, y);
      },
      "$_BFBH": function (t, e, n, r, o, i, s, a) {
        for (var _ = this["$_BEHo"], u = t[e] ^ n[0], c = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], f = 4, d = 1; d < _; d++) {
          var p = r[u >>> 24] ^ o[c >>> 16 & 255] ^ i[l >>> 8 & 255] ^ s[255 & h] ^ n[f++],
              g = r[c >>> 24] ^ o[l >>> 16 & 255] ^ i[h >>> 8 & 255] ^ s[255 & u] ^ n[f++],
              m = r[l >>> 24] ^ o[h >>> 16 & 255] ^ i[u >>> 8 & 255] ^ s[255 & c] ^ n[f++],
              v = r[h >>> 24] ^ o[u >>> 16 & 255] ^ i[c >>> 8 & 255] ^ s[255 & l] ^ n[f++];
          u = p, c = g, l = m, h = v;
        }

        p = (a[u >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & h]) ^ n[f++], g = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & u]) ^ n[f++], m = (a[l >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & c]) ^ n[f++], v = (a[h >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ n[f++];
        t[e] = p, t[e + 1] = g, t[e + 2] = m, t[e + 3] = v;
      },
      "keySize": 8
    });
    return e["AES"] = m["$_BEBq"](D), e["AES"];
  }();


gjson = function () {
    "use strict";

    var gjson = {},
        rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta,
        rep;

    function f(t) {
      return t < 10 ? "0" + t : t;
    }

    function this_value() {
      return this["valueOf"]();
    }

    function quote(t) {
      return rx_escapable["lastIndex"] = 0, rx_escapable["test"](t) ? "\"" + t["replace"](rx_escapable, function (t) {
        var e = meta[t];
        return "string" == typeof e ? e : "\\u" + ("0000" + t["charCodeAt"](0)["toString"](16))["slice"](-4);
      }) + "\"" : "\"" + t + "\"";
    }

    function str(t, e) {
      var n,
          r,
          o,
          i,
          s,
          a = gap,
          _ = e[t];

      switch (_ && "object" == typeof _ && "function" == typeof _["toJSON"] && (_ = _["toJSON"](t)), "function" == typeof rep && (_ = rep["call"](e, t, _)), typeof _) {
        case "string":
          return quote(_);

        case "number":
          return isFinite(_) ? String(_) : "null";

        case "boolean":
        case "null":
          return String(_);

        case "object":
          if (!_) return "null";

          if (gap += indent, s = [], "[object Array]" === Object["prototype"]["toString"]["apply"](_)) {
            for (i = _["length"], n = 0; n < i; n += 1) s[n] = str(n, _) || "null";

            return o = 0 === s["length"] ? "[]" : gap ? "[\n" + gap + s["join"](",\n" + gap) + "\n" + a + "]" : "[" + s["join"](",") + "]", gap = a, o;
          }

          if (rep && "object" == typeof rep) for (i = rep["length"], n = 0; n < i; n += 1) "string" == typeof rep[n] && (o = str(r = rep[n], _)) && s["push"](quote(r) + (gap ? ": " : ":") + o);else for (r in _) Object["prototype"]["hasOwnProperty"]["call"](_, r) && (o = str(r, _)) && s["push"](quote(r) + (gap ? ": " : ":") + o);
          return o = 0 === s["length"] ? "{}" : gap ? "{\n" + gap + s["join"](",\n" + gap) + "\n" + a + "}" : "{" + s["join"](",") + "}", gap = a, o;
      }
    }

    return "function" != typeof Date["prototype"]["toJSON"] && (Date["prototype"]["toJSON"] = function () {
      return isFinite(this["valueOf"]()) ? this["getUTCFullYear"]() + "-" + f(this["getUTCMonth"]() + 1) + "-" + f(this["getUTCDate"]()) + "T" + f(this["getUTCHours"]()) + ":" + f(this["getUTCMinutes"]()) + ":" + f(this["getUTCSeconds"]()) + "Z" : null;
    }, Boolean["prototype"]["toJSON"] = this_value, Number["prototype"]["toJSON"] = this_value, String["prototype"]["toJSON"] = this_value), meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "\"": "\\\"",
      "\\": "\\\\"
    }, gjson["stringify"] = function (t, e, n) {
      var r;
      if (indent = gap = "", "number" == typeof n) for (r = 0; r < n; r += 1) indent += " ";else "string" == typeof n && (indent = n);
      if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e["length"])) throw new Error("JSON.stringify");
      return str("", {
        "": t
      });
    }, gjson["parse"] = function (text, reviver) {
      var j;

      function walk(t, e) {
        var n,
            r,
            o = t[e];
        if (o && "object" == typeof o) for (n in o) Object["prototype"]["hasOwnProperty"]["call"](o, n) && ((r = walk(o, n)) !== undefined ? o[n] = r : delete o[n]);
        return reviver["call"](t, e, o);
      }

      if (text = String(text), rx_dangerous["lastIndex"] = 0, rx_dangerous["test"](text) && (text = text["replace"](rx_dangerous, function (t) {
        return "\\u" + ("0000" + t["charCodeAt"](0)["toString"](16))["slice"](-4);
      })), rx_one["test"](text["replace"](rx_two, "@")["replace"](rx_three, "]")["replace"](rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
        "": j
      }, "") : j;
      throw new SyntaxError("JSON.parse");
    }, gjson;
  }()


Base64 = {
    "$_JFk": {
      "$_JGU": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
      "$_JHv": ".",
      "$_JIZ": 7274496,
      "$_JJN": 9483264,
      "$_BAAz": 19220,
      "$_BABf": 235,
      "$_BACM": 24
    },
    "$_JGU": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
    "$_JHv": ".",
    "$_JIZ": 7274496,
    "$_JJN": 9483264,
    "$_BAAz": 19220,
    "$_BABf": 235,
    "$_BACM": 24,
    "$_BADE": function (t) {
      for (var e = [], n = 0, r = t["length"]; n < r; n += 1) e["push"](t["charCodeAt"](n));

      return e;
    },
    "$_BAEw": function (t) {
      for (var e = "", n = 0, r = t["length"]; n < r; n += 1) e += String["fromCharCode"](t[n]);

      return e;
    },
    "$_BAFX": function (t) {
      var e = this["$_JGU"];
      return t < 0 || t >= e["length"] ? "." : e["charAt"](t);
    },
    "$_BAGJ": function (t) {
      return this["$_JGU"]["indexOf"](t);
    },
    "$_BAHt": function (t, e) {
      return t >> e & 1;
    },
    "$_BAIr": function (t, o) {
      var i = this;
      o = o || i;

      function e(t, e) {
        for (var n = 0, r = o["$_BACM"] - 1; 0 <= r; r -= 1) 1 === i["$_BAHt"](e, r) && (n = (n << 1) + i["$_BAHt"](t, r));

        return n;
      }

      for (var n = "", r = "", s = t["length"], a = 0; a < s; a += 3) {
        var _;

        if (a + 2 < s) _ = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], n += i["$_BAFX"](e(_, o["$_JIZ"])) + i["$_BAFX"](e(_, o["$_JJN"])) + i["$_BAFX"](e(_, o["$_BAAz"])) + i["$_BAFX"](e(_, o["$_BABf"]));else {
          var u = s % 3;
          2 == u ? (_ = (t[a] << 16) + (t[a + 1] << 8), n += i["$_BAFX"](e(_, o["$_JIZ"])) + i["$_BAFX"](e(_, o["$_JJN"])) + i["$_BAFX"](e(_, o["$_BAAz"])), r = o["$_JHv"]) : 1 == u && (_ = t[a] << 16, n += i["$_BAFX"](e(_, o["$_JIZ"])) + i["$_BAFX"](e(_, o["$_JJN"])), r = o["$_JHv"] + o["$_JHv"]);
        }
      }

      return {
        "res": n,
        "end": r
      };
    },
    "$_BAJW": function (t) {
      var e = this["$_BAIr"](this["$_BADE"](t));
      return e["res"] + e["end"];
    },
    "$_BBAq": function (t) {
      var e = this["$_BAIr"](t);
      return e["res"] + e["end"];
    },
    "$_BBBJ": function (t, i) {
      var s = this;
      i = i || s;

      function e(t, e) {
        if (t < 0) return 0;

        for (var n = 5, r = 0, o = i["$_BACM"] - 1; 0 <= o; o -= 1) 1 === s["$_BAHt"](e, o) && (r += s["$_BAHt"](t, n) << o, n -= 1);

        return r;
      }

      for (var n = t["length"], r = "", o = 0; o < n; o += 4) {
        var a = e(s["$_BAGJ"](t["charAt"](o)), i["$_JIZ"]) + e(s["$_BAGJ"](t["charAt"](o + 1)), i["$_JJN"]) + e(s["$_BAGJ"](t["charAt"](o + 2)), i["$_BAAz"]) + e(s["$_BAGJ"](t["charAt"](o + 3)), i["$_BABf"]),
            _ = a >> 16 & 255;

        if (r += String["fromCharCode"](_), t["charAt"](o + 2) !== i["$_JHv"]) {
          var u = a >> 8 & 255;

          if (r += String["fromCharCode"](u), t["charAt"](o + 3) !== i["$_JHv"]) {
            var c = 255 & a;
            r += String["fromCharCode"](c);
          }
        }
      }

      return r;
    },
    "$_BBCy": function (t) {
      var e = 4 - t["length"] % 4;
      if (e < 4) for (var n = 0; n < e; n += 1) t += this["$_JHv"];
      return this["$_BBBJ"](t);
    },
    "$_BBDF": function (t) {
      return this["$_BBCy"](t);
    }
};
// console.log(new RSAKey()["encrypt"]("c1c21ab150c86b67"))

// console.log(gjson["stringify"]("111"));
// BHGL = function (t, e, n) {
//     if (!e || !n) return t;
//     var r,
//         o = 0,
//         i = t,
//         s = e[0],
//         a = e[2],
//         _ = e[4];

//     while (r = n["substr"](o, 2)) {
//       o += 2;
//       var u = parseInt(r, 16),
//           c = String["fromCharCode"](u),
//           l = (s * u * u + a * u + _) % t["length"];
//       i = i["substr"](0, l) + c + i["substr"](l);
//     }

//     return i;
// }
function $_FAj(t) {
    this["$_BHIg"] = t || [];
};
$_FAj["prototype"] = {
    "$_BCIY": function (t) {
        return this["$_BHIg"][t];
    },
    "$_BIAe": function () {
        return this["$_BHIg"]["length"];
    },
    "$_HEQ": function (t, e) {
        return new $_FAj($_DJP(e) ? this["$_BHIg"]["slice"](t, e) : this["$_BHIg"]["slice"](t));
    },
    "$_BIBQ": function (t) {
        return this["$_BHIg"]["push"](t), this;
    },
    "$_BICf": function (t, e) {
        return this["$_BHIg"]["splice"](t, e || 1);
    },
    "$_HGv": function (t) {
        return this["$_BHIg"]["join"](t);
    },
    "$_BIDT": function (t) {
        return new $_FAj(this["$_BHIg"]["concat"](t));
    },
    "$_HFx": function (t) {
        var e = this["$_BHIg"];
        if (e["map"]) return new $_FAj(e["map"](t));

        for (var n = [], r = 0, o = e["length"]; r < o; r += 1) n[r] = t(e[r], r, this);

        return new $_FAj(n);
    },
    "$_BIEe": function (t) {
        var e = this["$_BHIg"];
        if (e["filter"]) return new $_FAj(e["filter"](t));

        for (var n = [], r = 0, o = e["length"]; r < o; r += 1) t(e[r], r, this) && n["push"](e[r]);

        return new $_FAj(n);
    },
    "$_BIFt": function (t) {
        var e = this["$_BHIg"];
        if (e["indexOf"]) return e["indexOf"](t);

        for (var n = 0, r = e["length"]; n < r; n += 1) if (e[n] === t) return n;

        return -1;
    },
    "$_BIGa": function (t) {
        var e = this["$_BHIg"];
        if (!e["forEach"]) for (var n = arguments[1], r = 0; r < e["length"]; r++) r in e && t["call"](n, e[r], r, this);
        return e["forEach"](t);
    }
};


// BAJW = function () {


//     function n(t) {
//         var e = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr",
//             n = e["length"],
//             r = "",
//             o = Math["abs"](t),
//             i = parseInt(o / n);
//         n <= i && (i = n - 1), i && (r = e["charAt"](i));
//         var s = "";
//         return t < 0 && (s += "!"), r && (s += "$"), s + r + e["charAt"](o %= n);
//       }

//     var t = function (t) {
//     for (var e, n, r, o = [], i = 0, s = 0, a = t["length"] - 1; s < a; s++) e = Math["round"](t[s + 1][0] - t[s][0]), n = Math["round"](t[s + 1][1] - t[s][1]), r = Math["round"](t[s + 1][2] - t[s][2]), 0 == e && 0 == n && 0 == r || (0 == e && 0 == n ? i += r : (o["push"]([e, n, r + i]), i = 0));

//     return 0 !== i && o["push"]([e, n, i]), o;
//     }(this["$_BCJv"]),
//         r = [],
//         o = [],
//         i = [];

//     return new $_FAj(t)["$_HFx"](function (t) {
//     var e = function (t) {
//         for (var e = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]], n = 0, r = e["length"]; n < r; n++) if (t[0] == e[n][0] && t[1] == e[n][1]) return "stuvwxyz~"[n];

//         return 0;
//     }(t);

//     e ? o["push"](e) : (r["push"](n(t[0])), o["push"](n(t[1]))), i["push"](n(t[2]));
//     }), r["join"]("") + "!!" + o["join"]("") + "!!" + i["join"]("");
// }


// var tt = [[-39,-39,0],[0,0,0],[0,1,38],[2,2,45],[4,3,53],[6,4,62],[9,5,66],[11,6,76],[12,6,83],[15,6,93],[17,6,98],[20,6,109],[23,6,114],[29,6,125],[36,7,128],[44,7,136],[55,7,144],[65,7,152],[72,7,159],[84,7,167],[91,7,175],[95,6,183],[98,6,191],[101,6,197],[103,6,205],[105,6,212],[107,6,221],[109,6,228],[111,6,238],[112,6,260],[112,7,600],[114,8,607],[115,8,623],[116,9,635],[117,9,645],[117,9,1024]]
// console.log(BAJW(tt))

// t = BAJW(tt);
// e = 117;
// n = 1024;

// challenge = '111111';
function get_last_w(t, slide_trace, n, challenge, gt, c, s) {
    // t 缺口x 坐标
    // n 滑块滑动时间

    function $_DDJI() {
        this["$_BCJv"] = slide_trace || [];
    };
    $_DDJI["prototype"] = {
        "$_BHFa": function (t) {
            return this["$_BCJv"]["push"](t), this;
          },
        "$_BAJW": function () {
            function n(t) {
              var e = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr",
                  n = e["length"],
                  r = "",
                  o = Math["abs"](t),
                  i = parseInt(o / n);
              n <= i && (i = n - 1), i && (r = e["charAt"](i));
              var s = "";
              return t < 0 && (s += "!"), r && (s += "$"), s + r + e["charAt"](o %= n);
            }
    
            var t = function (t) {
              for (var e, n, r, o = [], i = 0, s = 0, a = t["length"] - 1; s < a; s++) e = Math["round"](t[s + 1][0] - t[s][0]), n = Math["round"](t[s + 1][1] - t[s][1]), r = Math["round"](t[s + 1][2] - t[s][2]), 0 == e && 0 == n && 0 == r || (0 == e && 0 == n ? i += r : (o["push"]([e, n, r + i]), i = 0));
    
              return 0 !== i && o["push"]([e, n, i]), o;
            }(this["$_BCJv"]),
                r = [],
                o = [],
                i = [];
    
            return new $_FAj(t)["$_HFx"](function (t) {
              var e = function (t) {
                for (var e = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]], n = 0, r = e["length"]; n < r; n++) if (t[0] == e[n][0] && t[1] == e[n][1]) return "stuvwxyz~"[n];
    
                return 0;
              }(t);
    
              e ? o["push"](e) : (r["push"](n(t[0])), o["push"](n(t[1]))), i["push"](n(t[2]));
            }), r["join"]("") + "!!" + o["join"]("") + "!!" + i["join"]("");
          },
        "$_BHGL": function (t, e, n) {
            if (!e || !n) return t;
            var r,
                o = 0,
                i = t,
                s = e[0],
                a = e[2],
                _ = e[4];
    
            while (r = n["substr"](o, 2)) {
              o += 2;
              var u = parseInt(r, 16),
                  c = String["fromCharCode"](u),
                  l = (s * u * u + a * u + _) % t["length"];
              i = i["substr"](0, l) + c + i["substr"](l);
            }
    
            return i;
          },
        "$_BHHV": function (t, e, n) {
            if (!e || !n || 0 === t) return t;
            return t + (e[1] * n * n + e[3] * n + e[5]) % 50;
        }
    };

    // $_DDJI = {
    //     $_BCJv: [[-39,-39,0],[0,0,0],[0,1,38],[2,2,45],[4,3,53],[6,4,62],[9,5,66],[11,6,76],[12,6,83],[15,6,93],[17,6,98],[20,6,109],[23,6,114],[29,6,125],[36,7,128],[44,7,136],[55,7,144],[65,7,152],[72,7,159],[84,7,167],[91,7,175],[95,6,183],[98,6,191],[101,6,197],[103,6,205],[105,6,212],[107,6,221],[109,6,228],[111,6,238],[112,6,260],[112,7,600],[114,8,607],[115,8,623],[116,9,635],[117,9,645],[117,9,1024]],
    // }
    DDJI = new $_DDJI();
    
    
    function CGf(t) {
        function _(t, e) {
          return t << e | t >>> 32 - e;
        }
  
        function u(t, e) {
          var n, r, o, i, s;
          return o = 2147483648 & t, i = 2147483648 & e, s = (1073741823 & t) + (1073741823 & e), (n = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ s ^ o ^ i : n | r ? 1073741824 & s ? 3221225472 ^ s ^ o ^ i : 1073741824 ^ s ^ o ^ i : s ^ o ^ i;
        }
  
        function e(t, e, n, r, o, i, s) {
          return u(_(t = u(t, u(u(function a(t, e, n) {
            return t & e | ~t & n;
          }(e, n, r), o), s)), i), e);
        }
  
        function n(t, e, n, r, o, i, s) {
          return u(_(t = u(t, u(u(function a(t, e, n) {
            return t & n | e & ~n;
          }(e, n, r), o), s)), i), e);
        }
  
        function r(t, e, n, r, o, i, s) {
          return u(_(t = u(t, u(u(function a(t, e, n) {
            return t ^ e ^ n;
          }(e, n, r), o), s)), i), e);
        }
  
        function o(t, e, n, r, o, i, s) {
          return u(_(t = u(t, u(u(function a(t, e, n) {
            return e ^ (t | ~n);
          }(e, n, r), o), s)), i), e);
        }
  
        function i(t) {
          var e,
              n = "",
              r = "";
  
          for (e = 0; e <= 3; e++) n += (r = "0" + (t >>> 8 * e & 255)["toString"](16))["substr"](r["length"] - 2, 2);
  
          return n;
        }
  
        var s, a, c, l, h, f, d, p, g, m;
  
        for (s = function v(t) {
          var e,
              n = t["length"],
              r = n + 8,
              o = 16 * (1 + (r - r % 64) / 64),
              i = Array(o - 1),
              s = 0,
              a = 0;
  
          while (a < n) s = a % 4 * 8, i[e = (a - a % 4) / 4] = i[e] | t["charCodeAt"](a) << s, a++;
  
          return s = a % 4 * 8, i[e = (a - a % 4) / 4] = i[e] | 128 << s, i[o - 2] = n << 3, i[o - 1] = n >>> 29, i;
        }(t = function w(t) {
          t = t["replace"](/\r\n/g, "\n");
  
          for (var e = "", n = 0; n < t["length"]; n++) {
            var r = t["charCodeAt"](n);
            r < 128 ? e += String["fromCharCode"](r) : (127 < r && r < 2048 ? e += String["fromCharCode"](r >> 6 | 192) : (e += String["fromCharCode"](r >> 12 | 224), e += String["fromCharCode"](r >> 6 & 63 | 128)), e += String["fromCharCode"](63 & r | 128));
          }
  
          return e;
        }(t)), d = 1732584193, p = 4023233417, g = 2562383102, m = 271733878, a = 0; a < s["length"]; a += 16) p = o(p = o(p = o(p = o(p = r(p = r(p = r(p = r(p = n(p = n(p = n(p = n(p = e(p = e(p = e(p = e(l = p, g = e(h = g, m = e(f = m, d = e(c = d, p, g, m, s[a + 0], 7, 3614090360), p, g, s[a + 1], 12, 3905402710), d, p, s[a + 2], 17, 606105819), m, d, s[a + 3], 22, 3250441966), g = e(g, m = e(m, d = e(d, p, g, m, s[a + 4], 7, 4118548399), p, g, s[a + 5], 12, 1200080426), d, p, s[a + 6], 17, 2821735955), m, d, s[a + 7], 22, 4249261313), g = e(g, m = e(m, d = e(d, p, g, m, s[a + 8], 7, 1770035416), p, g, s[a + 9], 12, 2336552879), d, p, s[a + 10], 17, 4294925233), m, d, s[a + 11], 22, 2304563134), g = e(g, m = e(m, d = e(d, p, g, m, s[a + 12], 7, 1804603682), p, g, s[a + 13], 12, 4254626195), d, p, s[a + 14], 17, 2792965006), m, d, s[a + 15], 22, 1236535329), g = n(g, m = n(m, d = n(d, p, g, m, s[a + 1], 5, 4129170786), p, g, s[a + 6], 9, 3225465664), d, p, s[a + 11], 14, 643717713), m, d, s[a + 0], 20, 3921069994), g = n(g, m = n(m, d = n(d, p, g, m, s[a + 5], 5, 3593408605), p, g, s[a + 10], 9, 38016083), d, p, s[a + 15], 14, 3634488961), m, d, s[a + 4], 20, 3889429448), g = n(g, m = n(m, d = n(d, p, g, m, s[a + 9], 5, 568446438), p, g, s[a + 14], 9, 3275163606), d, p, s[a + 3], 14, 4107603335), m, d, s[a + 8], 20, 1163531501), g = n(g, m = n(m, d = n(d, p, g, m, s[a + 13], 5, 2850285829), p, g, s[a + 2], 9, 4243563512), d, p, s[a + 7], 14, 1735328473), m, d, s[a + 12], 20, 2368359562), g = r(g, m = r(m, d = r(d, p, g, m, s[a + 5], 4, 4294588738), p, g, s[a + 8], 11, 2272392833), d, p, s[a + 11], 16, 1839030562), m, d, s[a + 14], 23, 4259657740), g = r(g, m = r(m, d = r(d, p, g, m, s[a + 1], 4, 2763975236), p, g, s[a + 4], 11, 1272893353), d, p, s[a + 7], 16, 4139469664), m, d, s[a + 10], 23, 3200236656), g = r(g, m = r(m, d = r(d, p, g, m, s[a + 13], 4, 681279174), p, g, s[a + 0], 11, 3936430074), d, p, s[a + 3], 16, 3572445317), m, d, s[a + 6], 23, 76029189), g = r(g, m = r(m, d = r(d, p, g, m, s[a + 9], 4, 3654602809), p, g, s[a + 12], 11, 3873151461), d, p, s[a + 15], 16, 530742520), m, d, s[a + 2], 23, 3299628645), g = o(g, m = o(m, d = o(d, p, g, m, s[a + 0], 6, 4096336452), p, g, s[a + 7], 10, 1126891415), d, p, s[a + 14], 15, 2878612391), m, d, s[a + 5], 21, 4237533241), g = o(g, m = o(m, d = o(d, p, g, m, s[a + 12], 6, 1700485571), p, g, s[a + 3], 10, 2399980690), d, p, s[a + 10], 15, 4293915773), m, d, s[a + 1], 21, 2240044497), g = o(g, m = o(m, d = o(d, p, g, m, s[a + 8], 6, 1873313359), p, g, s[a + 15], 10, 4264355552), d, p, s[a + 6], 15, 2734768916), m, d, s[a + 13], 21, 1309151649), g = o(g, m = o(m, d = o(d, p, g, m, s[a + 4], 6, 4149444226), p, g, s[a + 11], 10, 3174756917), d, p, s[a + 2], 15, 718787259), m, d, s[a + 9], 21, 3951481745), d = u(d, c), p = u(p, l), g = u(g, h), m = u(m, f);
  
        return (i(d) + i(p) + i(g) + i(m))["toLowerCase"]();
    }

    function $_CFm(t, e) {
        for (var n = e["slice"](-2), r = [], o = 0; o < n["length"]; o++) {
          var i = n["charCodeAt"](o);
          r[o] = 57 < i ? i - 87 : i - 48;
        }
  
        n = 36 * r[0] + r[1];
        var s,
            a = Math["round"](t) + n,
            _ = [[], [], [], [], []],
            u = {},
            c = 0;
        o = 0;
  
        for (var l = (e = e["slice"](0, 32))["length"]; o < l; o++) u[s = e["charAt"](o)] || (u[s] = 1, _[c]["push"](s), c = 5 == ++c ? 0 : c);
  
        var h,
            f = a,
            d = 4,
            p = "",
            g = [1, 2, 5, 10, 50];
  
        while (0 < f) 0 <= f - g[d] ? (h = parseInt(Math["random"]() * _[d]["length"], 10), p += _[d][h], f -= g[d]) : (_["splice"](d, 1), g["splice"](d, 1), d -= 1);
  
        return p;
    };

    e = DDJI["$_BHGL"](DDJI["$_BAJW"](), c, s);

    console.log(e);

    var ep = {
        me: true,
        te: false,
        td: -1,
        tm: {
            a: originalTime,
            b: originalTime + 144,
            c: originalTime + 144,
            d: 0,
            e: 0,
            f: originalTime + 2,
            g: originalTime + 11,
            h: originalTime + 35,
            i: originalTime + 35,
            j: originalTime + 67,
            k: 0,
            l: originalTime + 67,
            m: originalTime + 133,
            n: originalTime + 193,
            o: originalTime + 164,
            p: originalTime + 818,
            q: originalTime + 818,
            r: originalTime + 824,
            s: originalTime + 1776,
            t: originalTime + 1776,
            u: originalTime + 1778
        },
        v: "7.7.3"
    }
    var i ={
        "lang": "zh-cn",
        "userresponse": $_CFm(t, challenge),
        "passtime": n,
        "imgload": 168,
        "aa": e,
        "ep": ep,
    }

    i["x"] = t;
    i["rp"] = CGf(gt + challenge["slice"](0, 32) + i["passtime"]);


    s = new RSAKey()["encrypt"](aesKey);
    s1 = new GMAs()["encrypt"](aesKey)
    console.log("sss: ", s);
    console.log("ss1: ", s1);
    a = AES["encrypt"](gjson["stringify"](i), aesKey);
    _ = Base64["$_BBAq"](a)

    w = _ + s;
    console.log(w);

    return _ + s;

}

// module.exports = {
//     get_last_w,
// };
// slide_trace = [[-16,-23,0],[0,0,0],[1,0,46],[4,0,52],[8,0,67],[18,0,69],[28,0,80],[36,0,82],[48,0,91],[64,0,99],[80,0,107],[90,2,114],[104,2,123],[112,2,131],[115,2,138],[116,3,147],[116,4,379],[115,4,412],[114,4,418],[112,4,429],[110,4,434],[109,4,440],[108,4,448],[106,4,456],[105,3,464],[104,3,472],[103,2,480],[101,2,487],[99,1,495],[96,1,503],[94,0,511],[91,0,517],[86,0,528],[83,0,533],[80,0,544],[78,0,549],[77,1,557],[76,1,595],[76,1,619],[74,1,627],[71,2,635],[69,2,645],[68,2,652],[67,2,658],[66,2,744],[65,2,762],[64,2,784],[62,2,805],[59,3,813],[57,3,821],[56,3,829],[55,3,837],[54,3,1227],[53,3,1236],[52,3,1246],[51,3,1249],[50,3,1263],[49,3,1281],[48,3,1344],[48,3,2170]]

// t = 120;
// // [59,8,1422]
// n = 487;
// challenge = "f5386fc40fcae995d4c35449417741d1ky"
// gt = "16f36c654cdb27492b33509ad7706db5"
// c = [12, 58, 98, 36, 43, 95, 62, 15, 12]
// s = "45525f66"
// console.log(get_last_w(t, slide_trace, n, challenge, gt, c, s))
// console.log(get_last_w(t,e,n,challenge));


//9-331599371!)!)!*!*!)!)!*!)!)!)!*!*!,!*!,!.!,!,!*!)!)!*!,!*!)!)!)!)!)!*!,!*!)!)!)!)!)!)!)!)!)(!!Dsy(((((((*((yvw(((((((!)(!)(!)(!)(((_(()(()((((((()(((((((((((!!(_/8*4*21102102R$,RN/4./111110f111/4.4.1SM130/$E)B?CB1111$/(23,7?q$5_

//9-331599371!)!)!*!*!)!)!*!)!)!)!*!*!,!*!,!.!,!,!*!)!)!*!,!*!)!)!)!)!)!*!,!*!)!)!)!)!)!)!)!)!)(!!Dsy(((((((*((yvw(((((((!)(!)(!)(!)(((_(()(()((((((()(((((((((((!!(_/8*4*21102102R$,RN/4./111110f111/4.4.1SM130/$E)B?CB1111$/(23,7?q$5_
//4855be6bafeaf5faaa838fd3b94713b1544370a20c3f54ad0fbc5fc261a840030d02e03e915cd588e56be11c549442c10b3c351fc9a0909badc71bf89cbed8ada7a02ba90819b43d58e1dfd9f0472ac757a91d801181bae34298c5b599edc23d3f5a6bd1b0e4793b2025a8b727d312eddde0285dda683961571568c56a465e9d
// a,,./0-10422452-(!7!Vw))*,))(*t()(*((wy(tssvsv3svw(!!($)302.11121011/21111271/111$*rF
// a,,./0-10422452-(!7!Vw))*,))(*t()(*((wy(tssvsv3svw(!!($)302.11121011/21111271/111$*rF
// a,,./0-10422452-(!7!Vw))*,))(*t()(*((wy(tssvsv3svw(!!($)302.11121011/21111271/111$*rF
// a,,./0-10422452-(!7!Vw))*,))(*t()(*((wy(tssvsv3svw(!!($)302.11121011/21111271/111$*rF

//C(,(((!!:(tzzttts!)BststuysystsystsytFtytytttSssss((ysysssssssssstsssstststsstsssstsssssssss(!!(-$*20201111111111111111201111102_1111112***:201120209119190209:8290290292D2/202LNL$*8
//C,(!!:tzzttts!)Fststuysystsystsyttytytttssssysysssssss_ssstsssstststsstsssstsssssssss(!!($*6020111111111111111120111110211111S12/:201120209119190209:82B90290292D2/202LNL$*8