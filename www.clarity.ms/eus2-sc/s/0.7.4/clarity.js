/* clarity-js v0.7.4: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get queue() {
                return xa
            },
            get start() {
                return Oa
            },
            get stop() {
                return Ma
            },
            get track() {
                return ba
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get clone() {
                return Ua
            },
            get compute() {
                return Ba
            },
            get data() {
                return Ha
            },
            get keys() {
                return Ya
            },
            get reset() {
                return Va
            },
            get start() {
                return qa
            },
            get stop() {
                return Ja
            },
            get trigger() {
                return Pa
            },
            get update() {
                return Fa
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get check() {
                return tr
            },
            get compute() {
                return nr
            },
            get data() {
                return za
            },
            get start() {
                return $a
            },
            get stop() {
                return ar
            },
            get trigger() {
                return er
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get compute() {
                return sr
            },
            get data() {
                return rr
            },
            get log() {
                return cr
            },
            get reset() {
                return lr
            },
            get start() {
                return or
            },
            get stop() {
                return ur
            },
            get updates() {
                return ir
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get callbacks() {
                return fr
            },
            get clear() {
                return yr
            },
            get consent() {
                return br
            },
            get data() {
                return dr
            },
            get id() {
                return mr
            },
            get metadata() {
                return gr
            },
            get save() {
                return wr
            },
            get start() {
                return pr
            },
            get stop() {
                return vr
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return _r
            },
            get envelope() {
                return Cr
            },
            get start() {
                return Ir
            },
            get stop() {
                return Dr
            }
        }),
        o = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null
        };

    function u(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now();
        return Math.max(Math.round(e - c), 0)
    }
    var l = "0.7.4";

    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi,
        h = !0,
        p = null,
        v = null,
        g = null;

    function m(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                a = !1,
                                r = !1,
                                i = !1,
                                o = null;
                            if (h && null === p) try {
                                p = new RegExp("\\p{N}", "gu"), v = new RegExp("\\p{L}", "gu"), g = new RegExp("\\p{Sc}", "gu")
                            } catch (t) {
                                h = !1
                            }
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = h && null !== g ? s.match(g) ? s : s.replace(v, "▪").replace(p, "▫") : w(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t);
                    case "input":
                    case "change":
                        return k(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                        return a ? y(t) : w(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                    case "change":
                        return k(t);
                    case "placeholder":
                        return w(t)
                }
                break;
            case 4:
                switch (e) {
                    case "*T":
                        return a ? y(t) : w(t);
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                        return ""
                }
        }
        return t
    }

    function b(t) {
        var e = o.drop;
        if (e && e.length > 0 && t && t.indexOf("?") > 0) {
            var n = t.split("?"),
                a = n[0],
                r = n[1];
            return a + "?" + r.split("&").map((function(t) {
                return e.some((function(e) {
                    return 0 === t.indexOf("".concat(e, "="))
                })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
            })).join("&")
        }
        return t
    }

    function y(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function w(t) {
        return t.replace(f, "•")
    }

    function k(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }
    var E = null,
        O = null,
        x = !1;

    function M() {
        x && (E = {
            time: s(),
            event: 4,
            data: {
                visible: O.visible,
                docWidth: O.docWidth,
                docHeight: O.docHeight,
                screenWidth: O.screenWidth,
                screenHeight: O.screenHeight,
                scrollX: O.scrollX,
                scrollY: O.scrollY,
                pointerX: O.pointerX,
                pointerY: O.pointerY,
                activityTime: O.activityTime
            }
        }), O = O || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function S(t, e, n) {
        switch (t) {
            case 8:
                O.docWidth = e, O.docHeight = n;
                break;
            case 11:
                O.screenWidth = e, O.screenHeight = n;
                break;
            case 10:
                O.scrollX = e, O.scrollY = n;
                break;
            default:
                O.pointerX = e, O.pointerY = n
        }
        x = !0
    }

    function N(t) {
        O.activityTime = t
    }

    function T(t, e) {
        O.visible = "visible" === e ? 1 : 0, O.visible || N(t), x = !0
    }

    function _() {
        x && Qa(4)
    }
    var I = Object.freeze({
            __proto__: null,
            activity: N,
            compute: _,
            reset: M,
            start: function() {
                x = !1, M()
            },
            get state() {
                return E
            },
            stop: function() {
                M()
            },
            track: S,
            visibility: T
        }),
        D = null;

    function C(t, e) {
        Gr() && t && e && "string" == typeof t && "string" == typeof e && t.length < 255 && e.length < 255 && (D = {
            key: t,
            value: e
        }, Qa(24))
    }
    var j, A = null,
        L = null;

    function R(t) {
        t in A || (A[t] = 0), t in L || (L[t] = 0), A[t]++, L[t]++
    }

    function z(t, e) {
        null !== e && (t in A || (A[t] = 0), t in L || (L[t] = 0), A[t] += e, L[t] += e)
    }

    function H(t, e) {
        null !== e && !1 === isNaN(e) && (t in A || (A[t] = 0), (e > A[t] || 0 === A[t]) && (L[t] = e, A[t] = e))
    }

    function Y(t, e, n) {
        return window.setTimeout(Ar(t), e, n)
    }

    function W(t) {
        return window.clearTimeout(t)
    }
    var X = 0,
        q = 0,
        P = null;

    function U() {
        P && W(P), P = Y(B, q), X = s()
    }

    function B() {
        var t = s();
        j = {
            gap: t - X
        }, Qa(25), j.gap < 3e5 ? P = Y(B, q) : Vr && (C("clarity", "suspend"), di(), ["mousemove", "touchstart"].forEach((function(t) {
            return Rr(document, t, Kr)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Rr(window, t, Kr)
        })))
    }
    var V = Object.freeze({
            __proto__: null,
            get data() {
                return j
            },
            reset: U,
            start: function() {
                q = 6e4, X = 0
            },
            stop: function() {
                W(P), X = 0, q = 0
            }
        }),
        F = null;

    function J(t, e) {
        if (t in F) {
            var n = F[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? F[t].push([e, 0]) : a[1] = e - a[0]
        } else F[t] = [
            [e, 0]
        ]
    }

    function G() {
        Qa(36)
    }

    function Z() {
        F = {}
    }
    var K = Object.freeze({
            __proto__: null,
            compute: G,
            get data() {
                return F
            },
            reset: Z,
            start: function() {
                F = {}
            },
            stop: function() {
                F = {}
            },
            track: J
        }),
        Q = null;

    function $(t) {
        Gr() && o.lean && (o.lean = !1, Q = {
            key: t
        }, wr(), o.upgrade && o.upgrade(t), Qa(3))
    }
    var tt = Object.freeze({
            __proto__: null,
            get data() {
                return Q
            },
            start: function() {
                !o.lean && o.upgrade && o.upgrade("Config"), Q = null
            },
            stop: function() {
                Q = null
            },
            upgrade: $
        }),
        et = null;

    function nt(t, e) {
        rt(t, "string" == typeof e ? [e] : e)
    }

    function at(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = null), rt("userId", [t]), rt("sessionId", [e]), rt("pageId", [n])
    }

    function rt(t, e) {
        if (Gr() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in et ? et[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            et[t] = n
        }
    }

    function it() {
        Qa(34)
    }

    function ot() {
        et = {}
    }

    function ut(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function ct(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var st = "CompressionStream" in window;

    function lt(t) {
        return ut(this, void 0, void 0, (function() {
            var e, n;
            return ct(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), st ? (e = new ReadableStream({
                            start: function(e) {
                                return ut(this, void 0, void 0, (function() {
                                    return ct(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, dt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function dt(t) {
        return ut(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return ct(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var ft = [I, a, Object.freeze({
        __proto__: null,
        compute: it,
        get data() {
            return et
        },
        identify: at,
        reset: ot,
        set: nt,
        start: function() {
            ot()
        },
        stop: function() {
            ot()
        }
    }), n, K, r, i, t, V, tt, e];

    function ht() {
        A = {}, L = {}, R(5), ft.forEach((function(t) {
            return Ar(t.start)()
        }))
    }

    function pt() {
        ft.slice().reverse().forEach((function(t) {
            return Ar(t.stop)()
        })), A = {}, L = {}
    }

    function vt() {
        it(), _(), sr(), Qa(0), G(), nr(), Ba()
    }
    var gt, mt = [];

    function bt(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (gt = {
            id: t,
            target: e,
            checksum: d(n, 24)
        }, mt.indexOf(gt.checksum) < 0 && (mt.push(gt.checksum), ja(41)))
    }
    var yt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        wt = {};

    function kt(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return Et(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in wt || (wt[c] = []), wt[c].indexOf(t.id) < 0 && wt[c].push(t.id), i = "".concat(c).concat("~").concat(wt[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && Et(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function Et(t) {
        if (!t) return !1;
        if (yt.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var Ot = 1,
        xt = [],
        Mt = [],
        St = [],
        Nt = {},
        Tt = [],
        _t = [],
        It = [],
        Dt = [],
        Ct = [],
        jt = [],
        At = null,
        Lt = null,
        Rt = null,
        zt = null;

    function Ht() {
        Wt(), Xt(document, !0)
    }

    function Yt() {
        Wt()
    }

    function Wt() {
        Ot = 1, xt = [], Mt = [], St = [], Nt = {}, Tt = [], _t = [], It = "address,password,contact".split(","), Dt = "password,secret,pass,social,ssn,code,hidden".split(","), Ct = "radio,checkbox,range,button,reset,submit".split(","), jt = "INPUT,SELECT,TEXTAREA".split(","), At = new WeakMap, Lt = new WeakMap, Rt = new WeakMap, zt = new WeakMap, wt = {}
    }

    function Xt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? _t.push(t) : Tt.push(t.substr(1))
            })), "querySelectorAll" in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return De(t, "".concat(e[0]))
                }))
            })), o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Rt.set(t, 3)
                }))
            })), o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return zt.set(t, e[0])
                }))
            })), _t.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Rt.set(t, 0)
                }))
            })))
        } catch (t) {
            Ra(5, 1, t ? t.name : null)
        }
    }

    function qt(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = At.get(t);
        return !n && e && (n = Ot++, At.set(t, n)), n || null
    }

    function Pt(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Lt.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Ut(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Lt.has(e) ? Lt.get(e) : null
    }

    function Bt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Vt(t) {
        var e = t.parent && t.parent in Mt ? Mt[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = Mt[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [kt(i, 0), kt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return Nt[e] = t.id
        }))
    }

    function Ft(t) {
        var e = Jt(Zt(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function Jt(t) {
        return t in xt ? xt[t] : null
    }

    function Gt(t) {
        var e = qt(t);
        return e in Mt ? Mt[e] : null
    }

    function Zt(t) {
        return t in Nt ? Nt[t] : null
    }

    function Kt(t) {
        return qt(t) in xt
    }

    function Qt() {
        for (var t = [], e = 0, n = St; e < n.length; e++) {
            var a = n[e];
            a in Mt && t.push(Mt[a])
        }
        return St = [], t
    }

    function $t(t) {
        for (var e = null; null === e && t.previousSibling;) e = qt(t.previousSibling), t = t.previousSibling;
        return e
    }

    function te(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = St.indexOf(t);
        r >= 0 && 1 === e && a ? (St.splice(r, 1), St.push(t)) : -1 === r && n && St.push(t)
    }
    var ee = Object.freeze({
            __proto__: null,
            add: function(t, e, n, a) {
                var r, i = qt(t, !0),
                    u = e ? qt(e) : null,
                    c = $t(t),
                    s = null,
                    l = Ce(t) ? i : null,
                    d = zt.has(t) ? zt.get(t) : null,
                    f = o.content ? 1 : 3;
                u >= 0 && Mt[u] && ((s = Mt[u]).children.push(i), l = null === l ? s.region : l, d = null === d ? s.metadata.fraud : d, f = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (De(t, n.attributes["data-clarity-region"]), l = i), xt[i] = t, Mt[i] = {
                        id: i,
                        parent: u,
                        previous: c,
                        children: [],
                        data: n,
                        selector: null,
                        hash: null,
                        region: l,
                        metadata: {
                            active: !0,
                            suspend: !1,
                            privacy: f,
                            position: null,
                            fraud: d,
                            size: null
                        }
                    },
                    function(t, e, n) {
                        var a = e.data,
                            r = e.metadata,
                            i = r.privacy,
                            o = a.attributes || {},
                            u = a.tag.toUpperCase();
                        switch (!0) {
                            case jt.indexOf(u) >= 0:
                                var c = o.type,
                                    s = "";
                                Object.keys(o).forEach((function(t) {
                                    return s += o[t].toLowerCase()
                                }));
                                var l = Dt.some((function(t) {
                                    return s.indexOf(t) >= 0
                                }));
                                r.privacy = "INPUT" === u && Ct.indexOf(c) >= 0 ? i : l ? 4 : 2;
                                break;
                            case "data-clarity-mask" in o:
                                r.privacy = 3;
                                break;
                            case "data-clarity-unmask" in o:
                                r.privacy = 0;
                                break;
                            case Rt.has(t):
                                r.privacy = Rt.get(t);
                                break;
                            case zt.has(t):
                                r.privacy = 2;
                                break;
                            case "*T" === u:
                                var d = n && n.data ? n.data.tag : "",
                                    f = n && n.selector ? n.selector[1] : "",
                                    h = ["STYLE", "TITLE", "svg:style"];
                                r.privacy = h.includes(d) || Tt.some((function(t) {
                                    return f.indexOf(t) >= 0
                                })) ? 0 : i;
                                break;
                            case 1 === i:
                                r.privacy = function(t, e, n) {
                                    if (t && e.some((function(e) {
                                            return t.indexOf(e) >= 0
                                        }))) return 2;
                                    return n.privacy
                                }(o.class, It, r)
                        }
                    }(t, Mt[i], s), Vt(Mt[i]), "IMG" === (r = Mt[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), te(i, a)
            },
            get: Gt,
            getId: qt,
            getNode: Jt,
            getValue: function(t) {
                return t in Mt ? Mt[t] : null
            },
            has: Kt,
            hashText: Ft,
            iframe: Ut,
            lookup: Zt,
            parse: Xt,
            sameorigin: Pt,
            start: Ht,
            stop: Yt,
            update: function(t, e, n, a) {
                var r = qt(t),
                    i = e ? qt(e) : null,
                    o = $t(t),
                    u = !1,
                    c = !1;
                if (r in Mt) {
                    var s = Mt[r];
                    if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                        u = !0;
                        var l = s.parent;
                        if (s.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : Mt[i].children.indexOf(o) + 1;
                            Mt[i].children.splice(d, 0, r), s.region = Ce(t) ? r : Mt[i].region
                        } else ! function(t, e) {
                            if (t in Mt) {
                                var n = Mt[t];
                                n.metadata.active = !1, n.parent = null, te(t, e)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = Mt[l].children.indexOf(r);
                            f >= 0 && Mt[l].children.splice(f, 1)
                        }
                        c = !0
                    }
                    for (var h in n) Bt(s.data, n, h) && (u = !0, s.data[h] = n[h]);
                    Vt(s), te(r, a, u, c)
                }
            },
            updates: Qt
        }),
        ne = 5e3,
        ae = {},
        re = [],
        ie = null,
        oe = null,
        ue = null;

    function ce() {
        ae = {}, re = [], ie = null, oe = null
    }

    function se(t, e) {
        return void 0 === e && (e = 0), ut(this, void 0, void 0, (function() {
            var n, a, r;
            return ct(this, (function(i) {
                for (n = 0, a = re; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    re[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: mr()
                    })
                })), null === ie && null === oe && le(), [2, r]
            }))
        }))
    }

    function le() {
        var t = re.shift();
        t && (ie = t, t.task().then((function() {
            t.id === mr() && (t.resolve(), ie = null, le())
        })).catch((function(e) {
            t.id === mr() && (e && Ra(0, 1, e.name, e.message, e.stack), ie = null, le())
        })))
    }

    function de(t) {
        var e = ve(t);
        return e in ae ? performance.now() - ae[e].start > ae[e].yield ? 0 : 1 : 2
    }

    function fe(t) {
        ae[ve(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function he(t) {
        var e = performance.now(),
            n = ve(t),
            a = e - ae[n].start;
        z(t.cost, a), R(5), ae[n].calls > 0 && z(4, a)
    }

    function pe(t) {
        return ut(this, void 0, void 0, (function() {
            var e, n;
            return ct(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = ve(t)) in ae ? (he(t), n = ae[e], [4, ge()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = ve(t);
                                if (ae && ae[e]) {
                                    var n = ae[e].calls,
                                        a = ae[e].yield;
                                    fe(t), ae[e].calls = n + 1, ae[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in ae ? 1 : 2]
                }
            }))
        }))
    }

    function ve(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function ge() {
        return ut(this, void 0, void 0, (function() {
            return ct(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return oe ? [4, oe] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            be(t, {
                                timeout: ne
                            })
                        }))]
                }
            }))
        }))
    }
    var me, be = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function ye() {
        me = null
    }

    function we() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, h, p);
        null !== me && c === me.width && v === me.height || null === c || null === v || (me = {
            width: c,
            height: v
        }, ke(8))
    }

    function ke(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), ut(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, h, p, v, g, b, y, w, k, E, O, x, M, T, _;
            return ct(this, (function(I) {
                switch (I.label) {
                    case 0:
                        switch (a = n || s(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 5:
                            case 6:
                                return [3, 3]
                        }
                        return [3, 10];
                    case 1:
                        return i = me, r.push(i.width), r.push(i.height), S(t, i.width, i.height), xa(r), [3, 10];
                    case 2:
                        for (u = 0, c = Me; u < c.length; u++) l = c[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), xa(r);
                        return ze(), [3, 10];
                    case 3:
                        if (2 === de(e)) return [3, 10];
                        if (!((d = Qt()).length > 0)) return [3, 9];
                        f = 0, h = d, I.label = 4;
                    case 4:
                        return f < h.length ? (p = h[f], 0 !== (v = de(e)) ? [3, 6] : [4, pe(e)]) : [3, 8];
                    case 5:
                        v = I.sent(), I.label = 6;
                    case 6:
                        if (2 === v) return [3, 8];
                        for (g = p.data, b = p.metadata.active, y = p.metadata.suspend, w = p.metadata.privacy, k = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(p), E = 0, O = b ? ["tag", "attributes", "value"] : ["tag"]; E < O.length; E++)
                            if (g[x = O[E]]) switch (x) {
                                case "tag":
                                    M = Ee(p), T = k ? -1 : 1, r.push(p.id * T), p.parent && b && r.push(p.parent), p.previous && b && r.push(p.previous), r.push(y ? "*M" : g[x]), M && 2 === M.length && r.push("".concat("#").concat(Oe(M[0]), ".").concat(Oe(M[1])));
                                    break;
                                case "attributes":
                                    for (_ in g[x]) void 0 !== g[x][_] && r.push(xe(_, g[x][_], w));
                                    break;
                                case "value":
                                    bt(p.metadata.fraud, p.id, g[x]), r.push(m(g[x], g.tag, w, k))
                            }
                        I.label = 7;
                    case 7:
                        return f++, [3, 4];
                    case 8:
                        6 === t && N(a), xa(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !o.lean), I.label = 9;
                    case 9:
                        return [3, 10];
                    case 10:
                        return [2]
                }
            }))
        }))
    }

    function Ee(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = Jt(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Oe(t) {
        return t.toString(36)
    }

    function xe(t, e, n) {
        return "".concat(t, "=").concat(m(e, t, n))
    }
    var Me = [],
        Se = null,
        Ne = {},
        Te = [],
        _e = !1,
        Ie = null;

    function De(t, e) {
        !1 === Se.has(t) && (Se.set(t, e), (Ie = null === Ie && _e ? new IntersectionObserver(Ae, {
            threshold: [0, .2, .4, .6, .8, 1]
        }) : Ie) && t && t.nodeType === Node.ELEMENT_NODE && Ie.observe(t))
    }

    function Ce(t) {
        return Se && Se.has(t)
    }

    function je() {
        for (var t = [], e = 0, n = Te; e < n.length; e++) {
            var a = n[e],
                r = qt(a.node);
            r in Ne || (r ? (a.data.id = r, Ne[r] = a.data, Me.push(Re(a.data))) : t.push(a))
        }
        Te = t, Me.length > 0 && ke(7)
    }

    function Ae(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Se.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? qt(r) : null,
                    s = c in Ne ? Ne[c] : {
                        id: c,
                        name: Se.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                Le(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Ie && Ie.unobserve(r)
            }
        }
        Me.length > 0 && ke(7)
    }

    function Le(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Ne && r || !(e.id in Ne)) && (Ne[e.id] = e, Me.push(Re(e))) : Te.push({
            node: t,
            data: e
        })
    }

    function Re(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function ze() {
        Me = []
    }
    var He = [];

    function Ye(t) {
        var e = ua(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && o.fraud ? d(n, 24) : "";
            He.push({
                time: s(t),
                event: 42,
                data: {
                    target: ua(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), se(sa.bind(this, 42))
        }
    }

    function We() {
        He = []
    }

    function Xe(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Ut(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var qe = ["input", "textarea", "radio", "button", "canvas"],
        Pe = [];

    function Ue(t) {
        Rr(t, "click", Be.bind(this, 9, t), !0)
    }

    function Be(t, e, n) {
        var a = Ut(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Xe(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = ua(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (Pe.push({
            time: s(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: Fe(c),
                context: Je(l),
                text: Ve(c),
                link: l ? l.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), se(sa.bind(this, t)))
    }

    function Ve(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25))
        }
        return e
    }

    function Fe(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (qe.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function Je(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function Ge() {
        Pe = []
    }
    var Ze = [];

    function Ke(t, e) {
        Ze.push({
            time: s(e),
            event: 38,
            data: {
                target: ua(e),
                action: t
            }
        }), se(sa.bind(this, 38))
    }

    function Qe() {
        Ze = []
    }
    var $e = null,
        tn = [];

    function en(t) {
        var e = ua(t),
            n = Gt(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {
                target: e,
                value: a
            };
            tn.length > 0 && tn[tn.length - 1].data.target === r.target && tn.pop(), tn.push({
                time: s(t),
                event: 27,
                data: r
            }), W($e), $e = Y(nn, 1e3, 27)
        }
    }

    function nn(t) {
        se(sa.bind(this, t))
    }

    function an() {
        tn = []
    }
    var rn, on = [],
        un = null;

    function cn(t, e, n) {
        var a = Ut(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Xe(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && ln({
            time: s(n),
            event: t,
            data: {
                target: ua(n),
                x: i,
                y: o
            }
        })
    }

    function sn(t, e, n) {
        var a = Ut(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d, null !== l && null !== d && ln({
                    time: o,
                    event: t,
                    data: {
                        target: ua(n),
                        x: l,
                        y: d
                    }
                })
            }
    }

    function ln(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = on.length,
                    n = e > 1 ? on[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && on.pop(), on.push(t), W(un), un = Y(dn, 500, t.event);
                break;
            default:
                on.push(t), dn(t.event)
        }
    }

    function dn(t) {
        se(sa.bind(this, t))
    }

    function fn() {
        on = []
    }

    function hn() {
        var t = document.documentElement;
        rn = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, sa(11)
    }

    function pn() {
        rn = null
    }
    var vn = [],
        gn = null;

    function mn(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            a = t ? ua(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Ut(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = {
                time: s(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o
                }
            };
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var c = vn.length,
                l = c > 1 ? vn[c - 2] : null;
            l && function(t, e) {
                var n = t.data.x - e.data.x,
                    a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(l, u) && vn.pop(), vn.push(u), W(gn), gn = Y(bn, 500, 10)
        }
    }

    function bn(t) {
        se(sa.bind(this, t))
    }
    var yn = null,
        wn = null,
        kn = null;

    function En(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = yn.start ? yn.start : null;
            null !== wn && null !== yn.start && n !== e.anchorNode && (W(kn), On(21)), yn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, wn = e, W(kn), kn = Y(On, 500, 21)
        }
    }

    function On(t) {
        se(sa.bind(this, t))
    }

    function xn() {
        wn = null, yn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var Mn, Sn, Nn = [];

    function Tn(t) {
        Nn.push({
            time: s(t),
            event: 39,
            data: {
                target: ua(t)
            }
        }), se(sa.bind(this, 39))
    }

    function _n() {
        Nn = []
    }

    function In(t) {
        Mn = {
            name: t.type
        }, sa(26, s(t)), di()
    }

    function Dn() {
        Mn = null
    }

    function Cn(t) {
        void 0 === t && (t = null), Sn = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, sa(28, s(t))
    }

    function jn() {
        Sn = null
    }

    function An(t) {
        ! function(t) {
            var e = Ut(t);
            Rr(e ? e.contentWindow : t === document ? window : t, "scroll", mn, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Ue(t), function(t) {
            Rr(t, "cut", Ke.bind(this, 0), !0), Rr(t, "copy", Ke.bind(this, 1), !0), Rr(t, "paste", Ke.bind(this, 2), !0)
        }(t), function(t) {
            Rr(t, "mousedown", cn.bind(this, 13, t), !0), Rr(t, "mouseup", cn.bind(this, 14, t), !0), Rr(t, "mousemove", cn.bind(this, 12, t), !0), Rr(t, "wheel", cn.bind(this, 15, t), !0), Rr(t, "dblclick", cn.bind(this, 16, t), !0), Rr(t, "touchstart", sn.bind(this, 17, t), !0), Rr(t, "touchend", sn.bind(this, 18, t), !0), Rr(t, "touchmove", sn.bind(this, 19, t), !0), Rr(t, "touchcancel", sn.bind(this, 20, t), !0)
        }(t), function(t) {
            Rr(t, "input", en, !0)
        }(t), function(t) {
            Rr(t, "selectstart", En.bind(this, t), !0), Rr(t, "selectionchange", En.bind(this, t), !0)
        }(t), function(t) {
            Rr(t, "change", Ye, !0)
        }(t), function(t) {
            Rr(t, "submit", Tn, !0)
        }(t))
    }
    var Ln = Object.freeze({
            __proto__: null,
            observe: An,
            start: function() {
                la = [], fa(), Ge(), Qe(), fn(), an(), Rr(window, "resize", hn), hn(), Rr(document, "visibilitychange", Cn), Cn(), vn = [], mn(), xn(), We(), _n(), Rr(window, "pagehide", In)
            },
            stop: function() {
                la = [], fa(), Ge(), Qe(), W(un), on.length > 0 && dn(on[on.length - 1].event), W($e), an(), pn(), jn(), W(gn), vn = [], xn(), W(kn), We(), _n(), Dn()
            }
        }),
        Rn = /[^0-9\.]/g;

    function zn(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    cr(5, t[a]), cr(8, t.creator), cr(18, t.headline);
                    break;
                case "product":
                    cr(5, t[a]), cr(10, t.name), cr(12, t.sku), t.brand && cr(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (H(11, Hn(t.ratingValue, 100)), H(18, Hn(t.bestRating)), H(19, Hn(t.worstRating))), H(12, Hn(t.ratingCount)), H(17, Hn(t.reviewCount));
                    break;
                case "person":
                    cr(8, t.name);
                    break;
                case "offer":
                    cr(7, t.availability), cr(14, t.itemCondition), cr(13, t.priceCurrency), cr(12, t.sku), H(13, Hn(t.price));
                    break;
                case "brand":
                    cr(6, t.name)
            }
            null !== r && "object" == typeof r && zn(r)
        }
    }

    function Hn(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(Rn, "")) * e)
        }
        return null
    }
    var Yn = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last"],
        Wn = /[\r\n]+/g;

    function Xn(t, e) {
        var n, a = null;
        if (2 === e && !1 === Kt(t)) return a;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var r = !1 === Kt(t) ? "add" : "update",
            i = t.parentElement ? t.parentElement : null,
            o = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                i = o && t.parentNode ? Ut(t.parentNode) : i;
                var u = t,
                    c = {
                        tag: (o ? "iframe:" : "") + "*D",
                        attributes: {
                            name: u.name,
                            publicId: u.publicId,
                            systemId: u.systemId
                        }
                    };
                ee[r](t, i, c, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Xt(document), qn(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var s = t;
                if (s.host)
                    if (Xt(s), "function" === typeof s.constructor && s.constructor.toString().indexOf("[native code]") >= 0) {
                        qn(s);
                        for (var l = "", d = 0, f = ("adoptedStyleSheets" in s ? s.adoptedStyleSheets : []); d < f.length; d++) {
                            l += Un(f[d])
                        }
                        var h = {
                            tag: "*S",
                            attributes: {
                                style: l
                            }
                        };
                        ee[r](t, s.host, h, e)
                    } else ee[r](t, s.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                break;
            case Node.TEXT_NODE:
                if (i = i || t.parentNode, "update" === r || i && Kt(i) && "STYLE" !== i.tagName) {
                    var p = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    ee[r](t, i, p, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var v = t,
                    g = v.tagName,
                    m = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                Yn.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(v);
                switch (i = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === v.namespaceURI && (g = "svg:" + g), g) {
                    case "HTML":
                        i = o && i ? Ut(i) : null;
                        var b = {
                            tag: (o ? "iframe:" : "") + g,
                            attributes: m
                        };
                        ee[r](t, i, b, e);
                        break;
                    case "SCRIPT":
                        if ("type" in m && "application/ld+json" === m.type) try {
                            zn(JSON.parse(v.text.replace(Wn, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        break;
                    case "META":
                        var y = "property" in m ? "property" : "name" in m ? "name" : null;
                        if (y && "content" in m) {
                            var w = m.content;
                            switch (m[y]) {
                                case "og:title":
                                    cr(20, w);
                                    break;
                                case "og:type":
                                    cr(19, w);
                                    break;
                                case "generator":
                                    cr(21, w)
                            }
                        }
                        break;
                    case "HEAD":
                        var k = {
                                tag: g,
                                attributes: m
                            },
                            E = o && (null === (n = t.ownerDocument) || void 0 === n ? void 0 : n.location) ? t.ownerDocument.location : location;
                        k.attributes["*B"] = E.protocol + "//" + E.hostname + E.pathname, ee[r](t, i, k, e);
                        break;
                    case "BASE":
                        var O = Gt(t.parentElement);
                        if (O) {
                            var x = document.createElement("a");
                            x.href = m.href, O.data.attributes["*B"] = x.protocol + "//" + x.hostname + x.pathname
                        }
                        break;
                    case "STYLE":
                        var M = {
                            tag: g,
                            attributes: m,
                            value: Pn(v)
                        };
                        ee[r](t, i, M, e);
                        break;
                    case "IFRAME":
                        var S = t,
                            N = {
                                tag: g,
                                attributes: m
                            };
                        Pt(S) && (! function(t) {
                            !1 === Kt(t) && Rr(t, "load", oa.bind(this, t, "childList"), !0)
                        }(S), N.attributes["*O"] = "true", S.contentDocument && S.contentWindow && "loading" !== S.contentDocument.readyState && (a = S.contentDocument)), ee[r](t, i, N, e);
                        break;
                    default:
                        var T = {
                            tag: g,
                            attributes: m
                        };
                        v.shadowRoot && (a = v.shadowRoot), ee[r](t, i, T, e)
                }
        }
        return a
    }

    function qn(t) {
        Kt(t) || (! function(t) {
            try {
                var e = u("MutationObserver"),
                    n = e in window ? new window[e](Ar(ea)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), Vn.push(n))
            } catch (t) {
                Ra(2, 0, t ? t.name : null)
            }
        }(t), An(t))
    }

    function Pn(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = Un(t.sheet)), e
    }

    function Un(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Ra(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function Bn(t, e, n) {
        return ut(this, void 0, void 0, (function() {
            var a, r, i, o, u;
            return ct(this, (function(c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = de(e)) ? [3, 3] : [4, pe(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = Xn(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var Vn = [],
        Fn = [],
        Jn = null,
        Gn = null,
        Zn = null,
        Kn = [],
        Qn = null,
        $n = null,
        ta = {};

    function ea(t) {
        var e = s();
        J(6, e), Fn.push({
            time: e,
            mutations: t
        }), se(na, 1).then((function() {
            Y(we), Ar(je)()
        }))
    }

    function na() {
        return ut(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c, l;
            return ct(this, (function(d) {
                switch (d.label) {
                    case 0:
                        fe(t = {
                            id: mr(),
                            cost: 3
                        }), d.label = 1;
                    case 1:
                        if (!(Fn.length > 0)) return [3, 8];
                        e = Fn.shift(), n = s(), a = 0, r = e.mutations, d.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], 0 !== (o = de(t)) ? [3, 4] : [4, pe(t)]) : [3, 6];
                    case 3:
                        o = d.sent(), d.label = 4;
                    case 4:
                        if (2 === o) return [3, 6];
                        switch (u = i.target, c = function(t, e, n) {
                            var a = t.target ? Gt(t.target.parentNode) : null;
                            if (a && "HTML" !== a.data.tag) {
                                var r = s() > $n,
                                    i = Gt(t.target),
                                    o = i && i.selector ? i.selector.join() : t.target.nodeName,
                                    u = [a.selector ? a.selector.join() : "", o, t.attributeName, aa(t.addedNodes), aa(t.removedNodes)].join();
                                ta[u] = u in ta ? ta[u] : [0, n];
                                var c = ta[u];
                                if (!1 === r && c[0] >= 10 && ra(c[2], 2, e), c[0] = r ? c[1] === n ? c[0] : c[0] + 1 : 1, c[1] = n, 10 === c[0]) return c[2] = t.removedNodes, "suspend";
                                if (c[0] > 10) return ""
                            }
                            return t.type
                        }(i, t, n), c && u && u.ownerDocument && Xt(u.ownerDocument), c && u && u.nodeType == Node.DOCUMENT_FRAGMENT_NODE && u.host && Xt(u), c) {
                            case "attributes":
                                Xn(u, 3);
                                break;
                            case "characterData":
                                Xn(u, 4);
                                break;
                            case "childList":
                                ra(i.addedNodes, 1, t), ra(i.removedNodes, 2, t);
                                break;
                            case "suspend":
                                (l = Gt(u)) && (l.metadata.suspend = !0)
                        }
                        d.label = 5;
                    case 5:
                        return a++, [3, 2];
                    case 6:
                        return [4, ke(6, t, e.time)];
                    case 7:
                        return d.sent(), [3, 1];
                    case 8:
                        return he(t), [2]
                }
            }))
        }))
    }

    function aa(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function ra(t, e, n) {
        return ut(this, void 0, void 0, (function() {
            var a, r, i;
            return ct(this, (function(o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (Bn(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = de(n)) ? [3, 4] : [4, pe(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        Xn(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function ia(t) {
        return Kn.indexOf(t) < 0 && Kn.push(t), Qn && W(Qn), Qn = Y((function() {
            ! function() {
                for (var t = 0, e = Kn; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && Kt(n)) continue;
                        oa(n, a ? "childList" : "characterData")
                    }
                }
                Kn = []
            }()
        }), 33), t
    }

    function oa(t, e) {
        Ar(ea)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    function ua(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return $n = s() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function ca(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = Gt(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = Jt(t),
                        a = t in Ne ? Ne[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Se.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    Le(n, a, r, a.visibility)
                }(r.region, e), i.fraud && bt(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function sa(t, e) {
        return void 0 === e && (e = null), ut(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, h, p, v, g, y, w, k, E, O, x, M, N, _, I, D, C, j, A, L, R, z;
            return ct(this, (function(H) {
                switch (n = e || s(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = on; r < i.length; r++) R = i[r], (o = ca(R.data.target, R.event)).id > 0 && ((a = [R.time, R.event]).push(o.id), a.push(R.data.x), a.push(R.data.y), xa(a), S(R.event, R.data.x, R.data.y));
                        fn();
                        break;
                    case 9:
                        for (u = 0, c = Pe; u < c.length; u++) R = c[u], l = ca(R.data.target, R.event, R.data.text), a = [R.time, R.event], d = l.hash.join("."), a.push(l.id), a.push(R.data.x), a.push(R.data.y), a.push(R.data.eX), a.push(R.data.eY), a.push(R.data.button), a.push(R.data.reaction), a.push(R.data.context), a.push(m(R.data.text, "click", l.privacy)), a.push(b(R.data.link)), a.push(d), a.push(R.data.trust), xa(a), ha(R.time, R.event, d, R.data.x, R.data.y, R.data.reaction, R.data.context);
                        Ge();
                        break;
                    case 38:
                        for (f = 0, h = Ze; f < h.length; f++) R = h[f], a = [R.time, R.event], (j = ca(R.data.target, R.event)).id > 0 && (a.push(j.id), a.push(R.data.action), xa(a));
                        Qe();
                        break;
                    case 11:
                        p = rn, a.push(p.width), a.push(p.height), S(t, p.width, p.height), pn(), xa(a);
                        break;
                    case 26:
                        v = Mn, a.push(v.name), Dn(), xa(a);
                        break;
                    case 27:
                        for (g = 0, y = tn; g < y.length; g++) R = y[g], w = ca(R.data.target, R.event, R.data.value), (a = [R.time, R.event]).push(w.id), a.push(m(R.data.value, "input", w.privacy)), xa(a);
                        an();
                        break;
                    case 21:
                        (k = yn) && (E = ca(k.start, t), O = ca(k.end, t), a.push(E.id), a.push(k.startOffset), a.push(O.id), a.push(k.endOffset), xn(), xa(a));
                        break;
                    case 10:
                        for (x = 0, M = vn; x < M.length; x++) R = M[x], (N = ca(R.data.target, R.event)).id > 0 && ((a = [R.time, R.event]).push(N.id), a.push(R.data.x), a.push(R.data.y), xa(a), S(R.event, R.data.x, R.data.y));
                        vn = [];
                        break;
                    case 42:
                        for (_ = 0, I = He; _ < I.length; _++) R = I[_], a = [R.time, R.event], (j = ca(R.data.target, R.event)).id > 0 && ((a = [R.time, R.event]).push(j.id), a.push(R.data.type), a.push(m(R.data.value, "change", j.privacy)), a.push(m(R.data.checksum, "checksum", j.privacy)), xa(a));
                        We();
                        break;
                    case 39:
                        for (D = 0, C = Nn; D < C.length; D++) R = C[D], a = [R.time, R.event], (j = ca(R.data.target, R.event)).id > 0 && (a.push(j.id), xa(a));
                        _n();
                        break;
                    case 22:
                        for (A = 0, L = da; A < L.length; A++) R = L[A], (a = [R.time, R.event]).push(R.data.type), a.push(R.data.hash), a.push(R.data.x), a.push(R.data.y), a.push(R.data.reaction), a.push(R.data.context), xa(a, !1);
                        fa();
                        break;
                    case 28:
                        z = Sn, a.push(z.visible), xa(a), T(n, z.visible), jn()
                }
                return [2]
            }))
        }))
    }
    var la = [],
        da = [];

    function fa() {
        da = []
    }

    function ha(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), la.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), S(e, a, r)
    }
    var pa, va, ga, ma, ba, ya = 0,
        wa = 0,
        ka = null,
        Ea = 0;

    function Oa() {
        ma = !0, ya = 0, wa = 0, Ea = 0, pa = [], va = [], ga = {}, ba = null
    }

    function xa(t, e) {
        if (void 0 === e && (e = !0), ma) {
            var n = s(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    ya += r.length;
                case 37:
                case 6:
                    wa += r.length, pa.push(r);
                    break;
                default:
                    va.push(r)
            }
            R(25);
            var i = function() {
                var t = !1 === o.lean && ya > 0 ? 100 : _r.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - Ea > 2 * i && (W(ka), ka = null), e && null === ka && (25 !== a && U(), ka = Y(Sa, i), Ea = n, tr(wa))
        }
    }

    function Ma() {
        W(ka), Sa(!0), ya = 0, wa = 0, Ea = 0, pa = [], va = [], ga = {}, ba = null, ma = !1
    }

    function Sa(t) {
        return void 0 === t && (t = !1), ut(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return ct(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return ka = null, (e = !1 === o.lean && wa > 0 && (wa < 1048576 || _r.sequence > 0)) && H(1, 1), je(),
                            function() {
                                var t = [];
                                da = [];
                                for (var e = _r.start + _r.duration, n = Math.max(e - 2e3, 0), a = 0, r = la; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && da.push(i), t.push(i))
                                }
                                la = t, sa(22)
                            }(), vt(), n = !0 === t, a = JSON.stringify(Cr(n)), r = "[".concat(va.join(), "]"), i = e ? "[".concat(pa.join(), "]") : "", u = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, lt(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return z(2, (c = s) ? c.length : u.length), Na(u, c, _r.sequence, n), va = [], e && (pa = [], wa = 0, ya = 0), [2]
                }
            }))
        }))
    }

    function Na(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof o.upload) {
            var r = o.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && _a(n)
            } catch (t) {}
            if (!1 === i) {
                n in ga ? ga[n].attempts++ : ga[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r), null !== n && (u.onreadystatechange = function() {
                    Ar(Ta)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0, o.upload)(t), _a(n)
        }
    }

    function Ta(t, e) {
        var n = ga[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? er(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload), Na(n.data, null, e)) : (ba = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && Qa(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        er(6);
                        break;
                    case "UPGRADE":
                        $("Auto");
                        break;
                    case "ACTION":
                        o.action && i.length > 1 && o.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && Pa(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (Na(n.data, null, e, !0), er(3)), t.status >= 200 && t.status <= 208 && _a(e), delete ga[e]))
    }

    function _a(t) {
        1 === t && wr()
    }
    var Ia, Da = {};

    function Ca(t) {
        var e = t.error || t;
        return e.message in Da || (Da[e.message] = 0), Da[e.message]++ >= 5 || e && e.message && (Ia = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, ja(31)), !0
    }

    function ja(t) {
        return ut(this, void 0, void 0, (function() {
            var e;
            return ct(this, (function(n) {
                switch (e = [s(), t], t) {
                    case 31:
                        e.push(Ia.message), e.push(Ia.line), e.push(Ia.column), e.push(Ia.stack), e.push(b(Ia.source)), xa(e);
                        break;
                    case 33:
                        Aa && (e.push(Aa.code), e.push(Aa.name), e.push(Aa.message), e.push(Aa.stack), e.push(Aa.severity), xa(e, !1));
                        break;
                    case 41:
                        gt && (e.push(gt.id), e.push(gt.target), e.push(gt.checksum), xa(e, !1))
                }
                return [2]
            }))
        }))
    }
    var Aa, La = {};

    function Ra(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in La && La[t].indexOf(i) >= 0 || (Aa = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in La ? La[t].push(i) : La[t] = [i], ja(33))
    }
    var za, Ha = {},
        Ya = [],
        Wa = {},
        Xa = {};

    function qa() {
        Va()
    }

    function Pa(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = parseInt(e[0]),
                a = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var r in Wa[n] = {}, Xa[n] = {}, a) {
                var i = parseInt(r),
                    o = a[r];
                switch (o.startsWith("~") ? 0 : 2) {
                    case 0:
                        var u = o.substring(1, o.length);
                        Wa[n][i] = Ga(u);
                        break;
                    case 2:
                        Xa[n][i] = o
                }
            }
        } catch (t) {
            Ra(8, 1, t ? t.name : null)
        }
    }

    function Ua(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Ba() {
        try {
            for (var t in Wa) {
                var e = parseInt(t);
                if (!(e in Ya)) {
                    var n = Wa[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (l = Za(Ua(n[r]))) ? JSON.stringify(l).substring(0, 1e4) : l;
                        i && Fa(e, r, i)
                    }
                    var o = Xa[e];
                    for (var u in o) {
                        var c = parseInt(u),
                            s = document.querySelectorAll(o[c]);
                        if (s) Fa(e, c, Array.from(s).map((function(t) {
                            return t.innerText
                        })).join("<SEP>").substring(0, 1e4))
                    }
                }
            }
        } catch (t) {
            Ra(5, 1, t ? t.name : null)
        }
        var l;
        Qa(40)
    }

    function Va() {
        Ha = {}, Ya = [], Wa = {}, Xa = {}
    }

    function Fa(t, e, n) {
        t in Ha || (Ha[t] = [], Ya.push(t)), Ha[t].push([e, n])
    }

    function Ja() {
        Va()
    }

    function Ga(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function Za(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && Ka(r, a.condition)) n = Za(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (Ka(c, a.condition)) {
                        var s = Za(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function Ka(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function Qa(t) {
        var e = [s(), t];
        switch (t) {
            case 4:
                var n = E;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), xa(e, !1)), M();
                break;
            case 25:
                e.push(j.gap), xa(e);
                break;
            case 35:
                e.push(za.check), xa(e, !1);
                break;
            case 3:
                e.push(Q.key), xa(e);
                break;
            case 2:
                e.push(ba.sequence), e.push(ba.attempts), e.push(ba.status), xa(e, !1);
                break;
            case 24:
                e.push(D.key), e.push(D.value), xa(e);
                break;
            case 34:
                var a = Object.keys(et);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(et[o])
                    }
                    ot(), xa(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(L);
                if (u.length > 0) {
                    for (var c = 0, l = u; c < l.length; c++) {
                        var d = l[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(L[d]))
                    }
                    L = {}, xa(e, !1)
                }
                break;
            case 1:
                var h = Object.keys(ir);
                if (h.length > 0) {
                    for (var p = 0, v = h; p < v.length; p++) {
                        var g = v[p];
                        f = parseInt(g, 10);
                        e.push(f), e.push(ir[g])
                    }
                    lr(), xa(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(F);
                if (m.length > 0) {
                    for (var b = 0, y = m; b < y.length; b++) {
                        var w = y[b];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], F[w]))
                    }
                    Z(), xa(e, !1)
                }
                break;
            case 40:
                for (var k = 0, O = Ya; k < O.length; k++) {
                    w = O[k];
                    e.push(w), e.push([].concat.apply([], Ha[w]))
                }
                Va(), xa(e, !1)
        }
    }

    function $a() {
        za = {
            check: 0
        }
    }

    function tr(t) {
        if (0 === za.check) {
            var e = za.check;
            e = _r.sequence >= 128 ? 1 : e, e = s() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== za.check && er(e)
        }
    }

    function er(t) {
        za.check = t, yr(), di()
    }

    function nr() {
        0 !== za.check && Qa(35)
    }

    function ar() {
        za = null
    }
    var rr = null,
        ir = null;

    function or() {
        rr = {}, ir = {}
    }

    function ur() {
        rr = {}, ir = {}
    }

    function cr(t, e) {
        e && (e = "".concat(e), t in rr || (rr[t] = []), rr[t].indexOf(e) < 0 && (rr[t].push(e), t in ir || (ir[t] = []), ir[t].push(e), rr[t].length > 128 && er(5)))
    }

    function sr() {
        Qa(1)
    }

    function lr() {
        ir = {}
    }
    var dr = null,
        fr = [],
        hr = null;

    function pr() {
        hr = null;
        var t, e = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            n = document && document.title ? document.title : "",
            a = function() {
                var t = {
                        session: Or(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = Sr("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - xr(n[1]) < 18e5 && (t.session = n[0], t.count = xr(n[2]) + 1, t.upgrade = xr(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            r = Mr(),
            i = o.projectId || d(location.host);
        dr = {
            projectId: i,
            userId: r.id,
            sessionId: a.session,
            pageNum: a.count
        }, o.lean = o.track && null !== a.upgrade ? 0 === a.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && a.upload && a.upload.length > "https://".length ? a.upload : o.upload, cr(0, e), cr(3, n), cr(1, b(location.href)), cr(2, document.referrer), cr(15, function() {
            var t = Or();
            if (o.track && kr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), cr(16, document.documentElement.lang), cr(17, document.dir), cr(26, "".concat(window.devicePixelRatio)), H(0, a.ts), H(1, 0), navigator && (cr(9, navigator.language), H(33, navigator.hardwareConcurrency), H(32, navigator.maxTouchPoints), H(34, Math.round(navigator.deviceMemory)), (t = navigator.userAgentData) && t.getHighEntropyValues ? t.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            cr(22, t.platform), cr(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                cr(24, t.name + "~" + t.version)
            })), cr(25, t.model), H(27, t.mobile ? 1 : 0)
        })) : cr(22, navigator.platform)), screen && (H(14, Math.round(screen.width)), H(15, Math.round(screen.height)), H(16, Math.round(screen.colorDepth)));
        for (var u = 0, c = o.cookies; u < c.length; u++) {
            var s = c[u],
                l = Sr(s);
            l && nt(s, l)
        }
        Er(r)
    }

    function vr() {
        hr = null, dr = null
    }

    function gr(t, e) {
        void 0 === e && (e = !0), dr && !1 === e && t(dr, !o.lean), fr.push({
            callback: t,
            wait: e
        })
    }

    function mr() {
        return dr ? [dr.userId, dr.sessionId, dr.pageNum].join(".") : ""
    }

    function br() {
        Gr() && (o.track = !0, Er(Mr(), 1))
    }

    function yr() {
        Nr("_clsk", "", 0)
    }

    function wr() {
        var t = Math.round(Date.now()),
            e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : "",
            n = o.lean ? 0 : 1;
        ! function(t) {
            fr.length > 0 && fr.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(dr, !o.lean)
            }))
        }(n), Nr("_clsk", [dr.sessionId, t, dr.pageNum, n, e].join("|"), 1)
    }

    function kr(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function Er(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5);
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) && Nr("_clck", [dr.userId, 1, n.toString(36), e].join("|"), 365)
    }

    function Or() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function xr(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function Mr() {
        var t = {
                id: Or(),
                expiry: null,
                consent: 0
            },
            e = Sr("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 2 && (t.expiry = xr(n[2], 36)), n.length > 3 && 1 === xr(n[3]) && (t.consent = 1), o.track = o.track || 1 === t.consent, t.id = o.track ? n[0] : t.id
        }
        return t
    }

    function Sr(t) {
        if (kr(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n].split("=");
                    if (a.length > 1 && a[0] && a[0].trim() === t) return a[1]
                }
        }
        return null
    }

    function Nr(t, e, n) {
        if (o.track && (navigator && navigator.cookieEnabled || kr(document, "cookie"))) {
            var a = new Date;
            a.setDate(a.getDate() + n);
            var r = a ? "expires=" + a.toUTCString() : "",
                i = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
            try {
                if (null === hr) {
                    for (var u = location.hostname ? location.hostname.split(".") : [], c = u.length - 1; c >= 0; c--)
                        if (hr = ".".concat(u[c]).concat(hr || ""), c < u.length - 1 && (document.cookie = "".concat(i).concat(";").concat("domain=").concat(hr), Sr(t) === e)) return;
                    hr = ""
                }
            } catch (t) {
                hr = ""
            }
            document.cookie = hr ? "".concat(i).concat(";").concat("domain=").concat(hr) : i
        }
    }
    var Tr, _r = null;

    function Ir() {
        var t = dr;
        _r = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function Dr() {
        _r = null
    }

    function Cr(t) {
        return _r.start = _r.start + _r.duration, _r.duration = s() - _r.start, _r.sequence++, _r.upload = t && "sendBeacon" in navigator ? 1 : 0, _r.end = t ? 1 : 0, [_r.version, _r.sequence, _r.start, _r.duration, _r.projectId, _r.userId, _r.sessionId, _r.pageNum, _r.upload, _r.end]
    }

    function jr() {
        Tr = []
    }

    function Ar(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw function(t) {
                    if (Tr && -1 === Tr.indexOf(t.message)) {
                        var e = o.report;
                        if (e && e.length > 0) {
                            var n = {
                                v: _r.version,
                                p: _r.projectId,
                                u: _r.userId,
                                s: _r.sessionId,
                                n: _r.pageNum
                            };
                            t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                            var a = new XMLHttpRequest;
                            a.open("POST", e), a.send(JSON.stringify(n)), Tr.push(t.message)
                        }
                    }
                    return t
                }(t)
            }
            var n = performance.now() - e;
            z(4, n), n > 30 && (R(7), H(6, n))
        }
    }
    var Lr = [];

    function Rr(t, e, n, a) {
        void 0 === a && (a = !1), n = Ar(n);
        try {
            t[u("addEventListener")](e, n, a), Lr.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function zr() {
        for (var t = 0, e = Lr; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        Lr = []
    }
    var Hr = null,
        Yr = null,
        Wr = null,
        Xr = 0;

    function qr() {
        return !(Xr++ > 20) || (Ra(4, 0), !1)
    }

    function Pr() {
        Xr = 0, Wr !== Br() && (di(), window.setTimeout(Ur, 250))
    }

    function Ur() {
        li(), H(29, 1)
    }

    function Br() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var Vr = !1;

    function Fr() {
        Vr = !0, c = performance.now(), ce(), zr(), jr(), Wr = Br(), Xr = 0, Rr(window, "popstate", Pr), null === Hr && (Hr = history.pushState, history.pushState = function() {
            Hr.apply(this, arguments), Gr() && qr() && Pr()
        }), null === Yr && (Yr = history.replaceState, history.replaceState = function() {
            Yr.apply(this, arguments), Gr() && qr() && Pr()
        })
    }

    function Jr() {
        Wr = null, Xr = 0, jr(), zr(), ce(), c = 0, Vr = !1
    }

    function Gr() {
        return Vr
    }

    function Zr(t) {
        if (null === t || Vr) return !1;
        for (var e in t) e in o && (o[e] = t[e]);
        return !0
    }

    function Kr() {
        li(), C("clarity", "restart")
    }
    var Qr = Object.freeze({
        __proto__: null,
        start: function() {
            ! function() {
                mt = [], H(26, navigator.webdriver ? 1 : 0);
                try {
                    H(31, window.top == window.self ? 1 : 2)
                } catch (t) {
                    H(31, 0)
                }
            }(), Rr(window, "error", Ca), Da = {}, La = {}
        },
        stop: function() {
            La = {}
        }
    });

    function $r() {
        return ut(this, void 0, void 0, (function() {
            var t, e;
            return ct(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = s(), fe(e = {
                            id: mr(),
                            cost: 3
                        }), [4, Bn(document, e, 0)];
                    case 1:
                        return n.sent(), [4, ke(5, e, t)];
                    case 2:
                        return n.sent(), he(e), [2]
                }
            }))
        }))
    }
    var ti = Object.freeze({
        __proto__: null,
        hashText: Ft,
        start: function() {
            ye(), we(), ze(), Ie = null, Se = new WeakMap, Ne = {}, Te = [], _e = !!window.IntersectionObserver, Ht(),
                function() {
                    if (Vn = [], Kn = [], Qn = null, $n = 0, ta = {}, null === Jn && (Jn = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                            return Gr() && ia(this.ownerNode), Jn.apply(this, arguments)
                        }), null === Gn && (Gn = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                            return Gr() && ia(this.ownerNode), Gn.apply(this, arguments)
                        }), null === Zn) {
                        Zn = Element.prototype.attachShadow;
                        try {
                            Element.prototype.attachShadow = function() {
                                return Gr() ? ia(Zn.apply(this, arguments)) : Zn.apply(this, arguments)
                            }
                        } catch (t) {
                            Zn = null
                        }
                    }
                }(), se($r, 1).then((function() {
                    Ar(we)(), Ar(je)()
                }))
        },
        stop: function() {
            ze(), Se = null, Ne = {}, Te = [], Ie && (Ie.disconnect(), Ie = null), _e = !1, Yt(),
                function() {
                    for (var t = 0, e = Vn; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    Vn = [], ta = {}, Fn = [], Kn = [], $n = 0, Qn = null
                }(), ye()
        }
    });
    var ei, ni = null;

    function ai() {
        ni = null
    }

    function ri(t) {
        ni = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                ut(this, void 0, void 0, (function() {
                    var e, n;
                    return ct(this, (function(a) {
                        return e = s(), n = [e, t], 29 === t && (n.push(ni.fetchStart), n.push(ni.connectStart), n.push(ni.connectEnd), n.push(ni.requestStart), n.push(ni.responseStart), n.push(ni.responseEnd), n.push(ni.domInteractive), n.push(ni.domComplete), n.push(ni.loadEventStart), n.push(ni.loadEventEnd), n.push(ni.redirectCount), n.push(ni.size), n.push(ni.type), n.push(ni.protocol), n.push(ni.encodedSize), n.push(ni.decodedSize), ai(), xa(n, !1)), [2]
                    }))
                }))
            }(29)
    }
    var ii = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function oi() {
        try {
            ei && ei.disconnect(), ei = new PerformanceObserver(Ar(ui));
            for (var t = 0, e = ii; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && z(9, 0), ei.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Ra(3, 1)
        }
    }

    function ui(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        ri(a);
                        break;
                    case "resource":
                        var r = a.name;
                        cr(4, ci(r)), r !== o.upload && r !== o.fallback || H(28, a.duration);
                        break;
                    case "longtask":
                        R(7);
                        break;
                    case "first-input":
                        e && H(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && z(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && H(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function ci(t) {
        var e = document.createElement("a");
        return e.href = t, e.hostname
    }
    var si = [Qr, ti, Ln, Object.freeze({
        __proto__: null,
        start: function() {
            ai(),
                function() {
                    navigator && "connection" in navigator && cr(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Rr(window, "load", Y.bind(this, oi, 0)) : oi() : Ra(3, 0)
                }()
        },
        stop: function() {
            ei && ei.disconnect(), ei = null, ai()
        }
    })];

    function li(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    return !1 === Vr && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
                } catch (t) {
                    return !1
                }
            }() && (Zr(t), Fr(), ht(), si.forEach((function(t) {
                return Ar(t.start)()
            })), null === t && vi())
    }

    function di() {
        Gr() && (si.slice().reverse().forEach((function(t) {
            return Ar(t.stop)()
        })), pt(), Jr(), void 0 !== hi && (hi[pi] = function() {
            (hi[pi].q = hi[pi].q || []).push(arguments)
        }))
    }
    var fi = Object.freeze({
            __proto__: null,
            consent: br,
            event: C,
            hashText: Ft,
            identify: at,
            metadata: gr,
            pause: function() {
                Gr() && (C("clarity", "pause"), null === oe && (oe = new Promise((function(t) {
                    ue = t
                }))))
            },
            resume: function() {
                Gr() && (oe && (ue(), oe = null, null === ie && le()), C("clarity", "resume"))
            },
            set: nt,
            start: li,
            stop: di,
            upgrade: $,
            version: l
        }),
        hi = window,
        pi = "clarity";

    function vi() {
        if (void 0 !== hi) {
            if (hi[pi] && hi[pi].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = hi[pi] && hi[pi].q || [];
            for (hi[pi] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return fi[t].apply(fi, e)
                }, hi[pi].v = l; t.length > 0;) hi[pi].apply(hi, t.shift())
        }
    }
    vi()
}();