webpackJsonp([70], {
    "0ljG": function (e, t) {
    }, CMvz: function (e, t) {
    }, EuEE: function (e, t, n) {
        "use strict";
        var a = n("//Fk"), i = n.n(a), o = n("mvHQ"), r = n.n(o), s = n("pFYg"), c = n.n(s), l = n("woOf"), u = n.n(l),
            p = "", d = window.location.pathname, f = d.indexOf("/addons/"), h = d.substring(0, f),
            m = window.location.protocol + "//" + window.location.host + h;
        p = m + "/app/wxapp.php", console.log(p), window.siteRoot = m;
        var g = n("fxnj"), v = n.n(g), y = n("Yn4R"), w = n("YaEn"), b = n("mtWM"), P = n.n(b), x = n("mw3O"),
            _ = n.n(x), S = n("Fd2+");
        n("IljC");
        var k = n("XbGN"), C = (n("xrTZ").Base64, {
            setWXTitle: function (e) {
                document.title = e;
                var t = navigator.userAgent.toLowerCase();
                if (/iphone|ipad|ipod/.test(t)) {
                    var n = document.createElement("iframe");
                    n.style.display = "none", n.setAttribute("src", "/favicon.ico");
                    n.addEventListener("load", function e() {
                        setTimeout(function () {
                            n.removeEventListener("load", e), document.body.removeChild(n)
                        }, 0)
                    }), document.body.appendChild(n)
                }
            }, isHasModule: function (e) {
                return k.a.isHasModule(e)
            }, icloudapi: function () {
                k.a.init()
            }, ilogin: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (C.isCloud()) if ("function" == typeof window.apiready) {
                    if (!C.getStorage("clerkInfo")) {
                        var t = api.getPrefs({sync: !0, key: "clerkInfo"});
                        t && C.setStorage("clerkInfo", t);
                        var n = api.getPrefs({sync: !0, key: "sid"});
                        n && C.setStorage("__sid", n)
                    }
                    var a = {hasFNScanner: C.isHasModule("FNScanner")};
                    "function" == typeof e.success && e.success(a)
                } else window.apiready = function () {
                    if (!C.getStorage("clerkInfo")) {
                        var t = api.getPrefs({sync: !0, key: "clerkInfo"});
                        t && C.setStorage("clerkInfo", t);
                        var n = api.getPrefs({sync: !0, key: "sid"});
                        n && C.setStorage("__sid", n)
                    }
                    var a = {hasFNScanner: C.isHasModule("FNScanner")};
                    "function" == typeof e.success && e.success(a)
                }; else "function" == typeof e.success && e.success()
            }, scanQRCode: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                k.a.scanQRCode(e)
            }, imap: function () {
                return !0
            }, imeiqia: function () {
                var e = document.createElement("script");
                e.type = "text/javascript", e.src = C.getFullUrl("system/common/js/meiqia"), document.head.appendChild(e)
            }, isMenuActive: function (e) {
                return !!e && -1 != window.location.href.indexOf(e)
            }, jsPreviewImage: function (e) {
                "string" == typeof e && (e = [e]), C.isWeixin() ? v.a.previewImage({
                    current: "",
                    urls: e
                }) : Object(S.b)(e, 1)
            }, jsLocation: function (e) {
                var t = parseFloat(e.lat), n = parseFloat(e.lng);
                if (!t || !n) return C.$toast("请先设置地址经纬度"), !1;
                var a = {latitude: t, longitude: n};
                if (e.scale && (a.scale = e.scale), e.name && (a.name = e.name), e.address && (a.address = e.address), C.isWeixin()) v.a.openLocation(a); else {
                    var i = {q: a.latitude + "," + a.longitude, name: a.name, address: a.address};
                    window.location.href = "http://m.amap.com/?" + C.toQueryString(i)
                }
            }, jsAlert: function (e) {
                var t = {};
                return "string" == typeof e ? t.message = e : (e.title && (t.title = e.title), e.message && (t.message = e.message)), S.a.alert(t).then(function () {
                }), !0
            }, jsTel: function (e) {
                window.location.href = "tel:" + e
            }, jsUrl: function (e) {
                if (e) if ("close" != e) if (0 != e.indexOf("https://") && 0 != e.indexOf("http://")) {
                    var t = e.split(":");
                    if (console.log(t), 1 == t.length) {
                        var n = C.getUrlParam(e, "i");
                        return -1 == e.indexOf("/pages") && (e = "/" + e), n || (e = C.getUrl({path: e})), void w.a.push(e)
                    }
                    "webview" == t[0] ? window.location.href = e.substring(8) : "tel" == t[0] ? window.location.href = e : "wx" == t[0] && "scanCode" == t[1] && v.a.scanQRCode()
                } else window.location.href = e; else C.isWeixin() && v.a.closeWindow()
            }, image: function (e) {
                var t = e.options, n = e.obj;
                if ("h5" == t.channel) {
                    var a = n.target;
                    if (a.files && a.files.length > 0) for (var i = C.getFullUrl("c=utility&a=file&do=upload&type=image&thumb=0"), o = 0; o < a.files.length; o++) {
                        var r = new FormData;
                        r.append("file", a.files[o]), P.a.post(i, r).then(function (t) {
                            var a = t.data;
                            a.errno ? a.message ? alert("上传文件失败, 具体原因:" + a.message) : alert("上传文件失败, 具体原因:" + a.error.message) : "function" == typeof e.success && e.success(n, a)
                        })
                    }
                }
            }, pay: function (e) {
                if (e.pay_type || (e.pay_type = "wechat"), !e.order_type) return !1;
                if (!e.order_id) return !1;
                if ("alipay" == e.pay_type && C.isWeixin()) return e.vue = "", void w.a.push(C.getUrl({
                    path: "/pages/public/aliPay",
                    query: e
                }));
                var t = {pay_type: e.pay_type, order_type: e.order_type, id: e.order_id};
                C.request({url: "manage/pay/pay", data: t, showLoading: !0}).then(function (t) {
                    t = t.data.message;
                    if (console.log(t), t.errno) return C.$toast(t.message), e.vue.submitDisabled = !1, !1;
                    t.pay_type && (e.pay_type = t.pay_type), t = t.message;
                    var n = {advertise: {url_detail: {path: "/pages/advertise/list"}}}[e.order_type];
                    if (n.url_detail = C.getUrl(n.url_detail), "wechat" == e.pay_type) return WeixinJSBridge.invoke("getBrandWCPayRequest", {
                        appId: t.appId,
                        timeStamp: t.timeStamp,
                        nonceStr: t.nonceStr,
                        package: t.package,
                        signType: t.signType,
                        paySign: t.paySign
                    }, function (t) {
                        return "get_brand_wcpay_request:ok" == t.err_msg ? "function" == typeof e.success ? (e.success(t), !1) : n ? (C.$toast("支付成功", n.url_detail, 3e3, "replace"), !1) : (C.$toast("支付成功"), !1) : (e.vue.submitDisabled = !1, "get_brand_wcpay_request:cancel" == t.err_msg ? (C.$toast("支付失败:您取消微信支付"), !1) : (C.$toast("支付失败:" + t.err_msg), !1))
                    }), !0;
                    if ("alipay" != e.pay_type) {
                        if ("credit" == e.pay_type) {
                            if ("function" == typeof e.success) return e.success(res), !1
                        } else if (("delivery" == e.pay_type || "finishMeal" == e.pay_type) && "function" == typeof e.success) return e.success(res), !1;
                        return n ? (C.$toast("支付成功", n.url_detail, 1500, "replace"), !0) : (C.$toast("支付成功"), !1)
                    }
                    C.isWeixin() || (window.location.href = t.url)
                })
            }, getLocation: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    successLocation: successLocation,
                    successAddress: successAddress,
                    fail: ""
                }, t = function (e) {
                    new i.a(function (e, t) {
                        window.initMap = function () {
                            e(AMap)
                        };
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.src = "//webapi.amap.com/maps?v=1.4.1&key=550a3bf0cb6d96c3b43d330fb7d86950&callback=initMap", n.onerror = t, document.head.appendChild(n)
                    }).then(function (t) {
                        var n, a = a;
                        a || (a = new t.Map("allmap")), a.plugin("AMap.Geolocation", function () {
                            (n = new t.Geolocation({
                                enableHighAccuracy: !0,
                                timeout: 1e4
                            })).getCurrentPosition(), t.event.addListener(n, "complete", function (n) {
                                var i = n.position, o = {lat: i.lat, lng: i.lng, location_x: i.lat, location_y: i.lng};
                                "function" == typeof e.successLocation && e.successLocation(o);
                                var r = [i.lng, i.lat];
                                a.plugin("AMap.Geocoder", function () {
                                    (new t.Geocoder).getAddress(r, function (t, n) {
                                        if ("complete" === t && "OK" === n.info) {
                                            var a = n.regeocode.addressComponent, o = n.regeocode.formattedAddress;
                                            o = (o = (o = o.replace(a.province, "")).replace(a.district, "")).replace(a.city, ""), "function" == typeof e.successAddress && e.successAddress({
                                                address: o,
                                                lat: i.lat,
                                                lng: i.lng,
                                                location_x: i.lat,
                                                location_y: i.lng
                                            })
                                        }
                                    })
                                })
                            }), t.event.addListener(n, "error", function (t) {
                                "function" == typeof e.fail && (console.log("使用高德地图获取定位失败"), console.log(t), e.fail(t))
                            })
                        })
                    })
                };
                C.isWeixin() && C.isMobile() ? (console.log("使用微信jsdk获取位置"), v.a.ready(function () {
                    v.a.getLocation({
                        type: "gcj02", success: function (t) {
                            console.log("使用微信jsdk获取位置成功"), console.log(t);
                            var n = {
                                lat: t.latitude,
                                lng: t.longitude,
                                location_x: t.latitude,
                                location_y: t.longitude
                            };
                            "function" == typeof e.successLocation && e.successLocation(n), "function" == typeof e.successAddress && C.request({
                                url: "system/common/map/regeo",
                                data: {latitude: t.latitude, longitude: t.longitude}
                            }).then(function (t) {
                                var n = t.data.message;
                                n.errno || e.successAddress(n.message)
                            })
                        }, fail: function (n) {
                            t(e)
                        }
                    })
                })) : t(e)
            }, $toast: function (e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "push", i = e;
                "string" == typeof i && (i = {message: e, url: t || "", duration: n || 1500}), i = u()({
                    type: "text",
                    message: "",
                    position: "middle",
                    duration: 1500
                }, i), Object(S.d)(i), setTimeout(function () {
                    if (i.url) {
                        if ("object" == c()(i.url)) return w.a[a](i.url), !1;
                        if ("refresh" == i.url) return window.location.reload(), !1;
                        if (-1 != i.url.indexOf("https://") || -1 != i.url.indexOf("http://")) return window.location.href = i.url, !1
                    }
                }, i.duration)
            }, jspost: function (e) {
                if (!e || !e.url) return !1;
                var t = function () {
                    "1" != window.submitting && (window.submitting = "1", S.d.loading({
                        message: "加载中",
                        forbidClick: !0
                    }), C.request({url: e.url || e.href, data: e.data || {}}).then(function (t) {
                        window.submitting = "0", S.d.clear();
                        var n = t.data.message;
                        return n.errno ? e.fail && "function" == typeof e.fail ? (e.fail(n), !1) : (Object(S.d)(n.message), !1) : e.success && "function" == typeof e.success ? (e.success(n.message), !1) : void C.$toast({
                            message: n.message || "操作成功",
                            url: e.successUrl || "refresh"
                        })
                    }))
                };
                e.confirm ? S.a.confirm({title: "温馨提示", message: e.confirm}).then(function () {
                    t()
                }) : t()
            }, ish5app: function () {
                return navigator.userAgent.indexOf("CK 2.0") > -1
            }, isWeixin: function () {
                return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
            }, isMobile: function () {
                return !!navigator.userAgent.toLowerCase().match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            }, isPlala: function () {
                return navigator.userAgent.indexOf("PLALAWAIMAI") > -1
            }, isQianfan: function () {
                return navigator.userAgent.indexOf("QianFan") > -1
            }, isMajia: function () {
                return navigator.userAgent.indexOf("MAGAPPX") > -1
            }, isCloud: function () {
                return navigator.userAgent.indexOf("APICloud") > -1
            }, isIos: function () {
                var e = navigator.userAgent;
                return !!(e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("Mac"))
            }, isValidMobile: function (e) {
                return !!/^[01][3456789][0-9]{9}$/.test(e)
            }, getUserAgent: function () {
                return C.isWeixin() ? "weixin" : C.ish5app() ? "h5app" : C.isQianfan() ? "qianfan" : C.isMajia() ? "majia" : C.isMajia() ? "majia" : "wap"
            }, setStorage: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (e) {
                    if ("string" != typeof t) {
                        if (n > 0) {
                            var a = new Date;
                            t.expire = parseInt(a.getTime() / 1e3) + n
                        }
                        t = r()(t)
                    }
                    window.localStorage.setItem(e, t)
                }
            }, getStorage: function (e) {
                if (e) {
                    var t = window.localStorage.getItem(e);
                    try {
                        t = JSON.parse(t)
                    } catch (e) {
                    }
                    if (t && t.expire) {
                        var n = new Date;
                        t.expire < n.getTime() / 1e3 && (t = {})
                    }
                    return t
                }
            }, removeStorage: function (e) {
                e && window.localStorage.removeItem(e)
            }, setCookie: function (e, t, n) {
                expires = new Date, expires.setTime(expires.getTime() + 1e3 * n), document.cookie = C.prefixCookie(e) + "=" + escape(t) + "; expires=" + expires.toGMTString() + "; path=/"
            }, getCookie: function (e) {
                for (var t = C.prefixCookie(e) + "=", n = document.cookie.length, a = 0; a < n;) {
                    var i = a + t.length;
                    if (document.cookie.substring(a, i) == t) {
                        var o = document.cookie.indexOf(";", i);
                        return -1 == o && (o = n), unescape(document.cookie.substring(i, o))
                    }
                    if (0 == (a = document.cookie.indexOf(" ", a) + 1)) break
                }
                return null
            }, delCookie: function (e) {
                new Date;
                document.cookie = C.prefixCookie(e) + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/"
            }, prefixCookie: function (e) {
                var t = C.getStorage("cookie_pre");
                return t ? t + e : e
            }, getStyle: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "int", a = void 0;
                return a = "scrollTop" === t ? e.scrollTop : e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null)[t], "float" == n ? parseFloat(a) : parseInt(a)
            }, toQueryPair: function (e, t) {
                return void 0 === t ? e : e + "=" + encodeURIComponent(null === t ? "" : String(t))
            }, toQueryString: function (e) {
                var t = [];
                for (var n in e) {
                    var a = e[n = encodeURIComponent(n)];
                    if (a && a.constructor == Array) {
                        for (var i, o = [], r = 0, s = a.length; r < s; r++) i = a[r], o.push(C.toQueryPair(n, i));
                        t = t.concat(o)
                    } else t.push(C.toQueryPair(n, a))
                }
                return t.join("&")
            }, getUrlParam: function (e, t) {
                return decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(e) || [, ""])[1].replace(/\+/g, "%20")) || null
            }, getSiteRoot: function () {
                var e = window.location.pathname, t = e.indexOf("/addons/"), n = e.substring(0, t);
                return document.location.protocol + "//" + window.location.host + n + "/"
            }, initBaseParams: function () {
                window.siteRoot = m, window.uniacid = C.getUrlParam(window.location.href, "i"), window.uniacid || (window.uniacid = 1)
            }, getSiteUrl: function (e, t, n) {
                var a = {ctrl: (e = e.split("/"))[0], ac: e[1], op: e[2]};
                e[3] && (a.ta = e[3]);
                var i = C.toQueryString(a);
                return t && ("object" == (void 0 === t ? "undefined" : c()(t)) ? i += "&" + C.toQueryString(t) : "string" == typeof t && (i += "&" + t)), i = "/app/wxapp.php?i=" + window.uniacid + "&c=entry&" + i + "&do=mobile&m=we7_wmall&from=vue&u=" + C.getUserAgent(), n ? m + i : i
            }, getUrl: function (e) {
                var t = e.path, n = e.query, a = void 0 === n ? {} : n;
                if (t) return -1 == t.indexOf("/pages/") && (t = "/" + t), {
                    path: t,
                    query: a = u()(a, {i: window.uniacid})
                }
            }, parseQuery: function (e) {
                var t = {num: 0, items: {}};
                if (e) for (var n in e) {
                    -1 == ["i"].indexOf(n) && (t.items[n] = e[n])
                }
                return t.items
            }, getFullUrl: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = p + "?i=" + window.uniacid;
                if (-1 == e.indexOf("/")) return n + "&" + e;
                n += "&m=we7_wmall&c=entry&do=mobile&";
                var a = e.split("?"), i = a[0].split("/");
                if (i[0] && (n += "ctrl=" + i[0] + "&"), i[1] && (n += "ac=" + i[1] + "&"), i[2] && (n += "op=" + i[2] + "&"), i[3] && (n += "ta=" + i[3] + "&"), a[1] && (n += a[1] + "&"), t && (t = "object" === (void 0 === t ? "undefined" : c()(t)) ? t : {}) && "object" === (void 0 === t ? "undefined" : c()(t))) for (var o in t) o && t.hasOwnProperty(o) && t[o] && (n += o + "=" + t[o] + "&");
                var r = C.getStorage("clerkInfo");
                return !C.getUrlParam(n, "token") && r && r.token && (n = n + "&token=" + r.token), n += "&from=vue&u=" + C.getUserAgent()
            }, checkToken: function (e) {
                C.request({url: "wmall/member/mine"}).then(function (t) {
                    var n = t.data.message;
                    n.errno ? "function" == typeof e.fail && e.fail(n) : "function" == typeof e.success && e.success(n)
                })
            }, request: function (e) {
                if (!C.isCloud() && 1 != C.getStorage("idevelopment")) {
                    for (var t = ["www.qitaiw.com", "www.xndewm.top"], n = !1, a = 0; a < t.length; a++) if (-1 != window.siteRoot.indexOf(t[a])) {
                        n = !0;
                        break
                    }
                    for (var o = ["pages/gohome/order/detail", "pages/auth/login", "pages/shop/select", "pages/order/detail"], r = 0; r < o.length; r++) if (-1 != window.location.href.indexOf(o[r])) {
                        n = !0;
                        break
                    }
                    if (!n) return void console.log("==================app=====================")
                }
                if (window.uniacid && window.siteRoot) {
                    e = u()({method: "get", data: {}, showLoading: !1}, e), e = C.getOtherParams(e);
                    var s = C.getFullUrl(e.url), c = {
                        headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"},
                        method: e.method,
                        url: s
                    };
                    if ("get" == e.method ? c.params = e.data : c.data = _.a.stringify(e.data), e.showLoading) var l = S.d.loading({
                        message: "加载中",
                        forbidClick: !0,
                        duration: 0
                    });
                    return new i.a(function (t, n) {
                        P()(c).then(function (a) {
                            e.showLoading && l && l.clear();
                            var i = "";
                            a.data && a.data.global && (i = a.data.global).cookie_pre && C.setStorage("cookie_pre", i.cookie_pre);
                            var o = a.data.message;
                            return "41100" == o.errno ? (window.location.href = o.message.url, void n()) : "41009" == o.errno ? (window.location.href && -1 == window.location.href.indexOf("pages/auth") && C.setStorage("forwardUrl", window.location.href), w.a.push(C.getUrl({path: "/pages/auth/login"})), void n(o)) : ("" != i && (i.system && (C.setStorage("system", i.system), window.system = i.system), i.menufooter && (C.setStorage("immenufooter", i.menufooter), window.immenufooter = i.menufooter), i.gconfig && (window.gconfig = i.gconfig), i.jpush_relation && (C.setStorage("jpush_relation", i.jpush_relation), window.jpush_relation = i.jpush_relation), i.share && i.share.autoinit && y.a.share(i.share), i.theme && (C.setStorage("theme", i.theme), window.theme = i.theme), i.account_perm && (C.setStorage("account_perm", i.account_perm), window.account_perm = i.account_perm)), void t(a))
                        }).catch(function (e) {
                            n(e)
                        })
                    })
                }
                C.$toast("公众号id参数错误", 0)
            }, jsSetValue: function (e) {
                var t = e.key || e.data.key, n = e.vue;
                return !(!t || !n) && (e.hasOwnProperty("value") || (e.value = e.data.value), 1 == (t = t.split(".")).length ? n[t[0]] = e.value : 2 == t.length ? n[t[0]][t[1]] = e.value : 3 == t.length ? n[t[0]][t[1]][t[2]] = e.value : 4 == t.length && (n[t[0]][t[1]][t[2]][t[3]] = e.value), !e.success || "function" != typeof e.success || (e.success(), !0))
            }, jsToggleSwitch: function (e) {
                var t = function () {
                    if (!e.url && !e.href) return C.jsSetValue(e), !0;
                    "1" != window.submitting && (window.submitting = "1", S.d.loading({
                        message: "加载中",
                        forbidClick: !0
                    }), C.request({url: e.url || e.href, data: e.data || {}}).then(function (t) {
                        window.submitting = "0", S.d.clear();
                        var n = t.data.message;
                        return n.errno ? (Object(S.d)(n.message), !1) : e.success && "function" == typeof e.success ? (e.success(n.message), !1) : (C.$toast({message: n.message || "操作成功"}), C.jsSetValue(e), !0)
                    }))
                };
                e.confirm ? S.a.confirm({title: "温馨提示", message: e.confirm}).then(function () {
                    t()
                }) : t()
            }, tomedia: function (e) {
                return "string" != typeof e ? "" : 0 == e.indexOf("http://") || 0 == e.indexOf("https://") ? e : 0 == e.indexOf("images/") || 0 == e.indexOf("/images/") ? window.system.attachurl + e : -1 != e.indexOf("addons/") ? window.system.attachurl + e.substring(e.indexOf("addons/")) : e
            }, formatDate: function (e, t) {
                (10 == e.length || e < 1e10) && (e *= 1e3);
                t && "datetime" != t ? "date" == t && (t = "yyyy-MM-dd") : t = "yyyy-MM-dd HH:mm", e = new Date(e);
                var n = t;
                return n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace(/yyyy|YYYY/, e.getFullYear())).replace(/yy|YY/, e.getYear() % 100 > 9 ? (e.getYear() % 100).toString() : "0" + e.getYear() % 100)).replace(/MM/, e.getMonth() + 1 > 9 ? e.getMonth() + 1 : "0" + (e.getMonth() + 1))).replace(/M/g, e.getMonth())).replace(/w|W/g, ["日", "一", "二", "三", "四", "五", "六"][e.getDay()])).replace(/dd|DD/, e.getDate() > 9 ? e.getDate().toString() : "0" + e.getDate())).replace(/d|D/g, e.getDate())).replace(/hh|HH/, e.getHours() > 9 ? e.getHours().toString() : "0" + e.getHours())).replace(/h|H/g, e.getHours())).replace(/mm/, e.getMinutes() > 9 ? e.getMinutes().toString() : "0" + e.getMinutes())).replace(/m/g, e.getMinutes())).replace(/ss|SS/, e.getSeconds() > 9 ? e.getSeconds().toString() : "0" + e.getSeconds())).replace(/s|S/g, e.getSeconds())
            }, getUser: function () {
                var e = C.getStorage("ipuser");
                return e || (e = {}), e
            }, checkperm: function (e) {
                if (!e) return !0;
                var t = C.getStorage("ipuser");
                if (!t) return !0;
                if ("founder" == t.role) return !0;
                if (!t.perms) return !1;
                if ("all" == t.perms) return !0;
                for (var n = e.split(","), a = !1, i = 0; i < n.length; i++) if (-1 != t.perms.indexOf(n[i])) {
                    a = !0;
                    break
                }
                return a
            }, checkplugin: function (e) {
                if (!e) return !0;
                var t = C.getStorage("account_perm").plugin;
                return !(!t || 0 == t.length) && -1 != t.indexOf(e)
            }, getOtherParams: function (e) {
                var t = 0;
                e && e.data && e.data.sid && (t = e.data.sid);
                var n = C.getStorage("__sid");
                return t && t != n && (C.setStorage("__sid", t), n = t), n || 1 == e.data.nosid ? e.url = e.url + "&sid=" + n : (C.removeStorage("__sid"), C.jsUrl("/pages/shop/select")), e
            }, extend: function (e, t) {
                var n;
                for (n in t) e[n] && "[object Object]" === e[n].toString() ? e[n] = C.extend(e[n], t[n]) : null != t[n] && "undefined" != t[n] && (e[n] = t[n]);
                return e
            }, length: function (e) {
                if (void 0 === e) return 0;
                var t = 0;
                for (var n in e) t++;
                return t
            }
        });
        t.a = C
    }, FXIY: function (e, t) {
    }, Hqqj: function (e, t) {
    }, IljC: function (e, t, n) {
        (function (t) {
            e.exports = function (e) {
                if ("undefined" == typeof window) return new t(e).toString("base64");
                if (void 0 !== window.btoa) return window.btoa(decodeURIComponent(encodeURIComponent(e)));
                var n, a, i, o, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = 0,
                    l = 0, u = "", p = [];
                if (!e) return e;
                e = decodeURIComponent(encodeURIComponent(e));
                do {
                    n = (r = e.charCodeAt(c++) << 16 | e.charCodeAt(c++) << 8 | e.charCodeAt(c++)) >> 18 & 63, a = r >> 12 & 63, i = r >> 6 & 63, o = 63 & r, p[l++] = s.charAt(n) + s.charAt(a) + s.charAt(i) + s.charAt(o)
                } while (c < e.length);
                u = p.join("");
                var d = e.length % 3;
                return (d ? u.slice(0, d - 3) : u) + "===".slice(d || 3)
            }
        }).call(t, n("EuP9").Buffer)
    }, MJyj: function (e, t) {
    }, NHnr: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("7+uW"), i = {
            render: function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("transition", {
                    attrs: {
                        name: "router-fade",
                        mode: "out-in"
                    }
                }, [t("keep-alive", [this.$route.meta.keepAlive ? t("router-view", {
                    directives: [{
                        name: "wechat-title",
                        rawName: "v-wechat-title",
                        value: this.$route.meta.title,
                        expression: "$route.meta.title"
                    }]
                }) : this._e()], 1)], 1), this._v(" "), t("transition", {
                    attrs: {
                        name: "router-fade",
                        mode: "out-in"
                    }
                }, [this.$route.meta.keepAlive ? this._e() : t("router-view", {
                    directives: [{
                        name: "wechat-title",
                        rawName: "v-wechat-title",
                        value: this.$route.meta.title,
                        expression: "$route.meta.title"
                    }]
                })], 1)], 1)
            }, staticRenderFns: []
        };
        var o = n("VU/8")({name: "App", components: {}}, i, !1, function (e) {
            n("vCYS")
        }, null, null).exports, r = n("v5o6"), s = n.n(r), c = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {attrs: {id: "loading"}}, [t("div", {staticClass: "circle-wrap"}, [t("img", {
                    attrs: {
                        src: "static/img/loading_circle.png",
                        alt: ""
                    }
                })]), this._v(" "), t("div", {staticClass: "logo-wrap"}, [t("img", {
                    attrs: {
                        src: "static/img/loading_logo.png",
                        alt: ""
                    }
                })])])
            }]
        };
        var l = n("VU/8")({
            data: function () {
                return {}
            }, mounted: function () {
            }
        }, c, !1, function (e) {
            n("xEpc")
        }, "data-v-19d9fcb8", null).exports, u = {
            props: {
                failedTips: {
                    type: Object, default: function () {
                        return {
                            type: "location",
                            tips: "获取定位失败!您可以选择手动搜索地址",
                            btnText: "手动搜索地址",
                            link: "/pages/home/location"
                        }
                    }
                }
            }, data: function () {
                return {}
            }
        }, p = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "failed-tips"}}, [n("div", {staticClass: "wrapper"}, [n("img", {
                    attrs: {
                        src: "static/img/tips/" + e.failedTips.type + ".png",
                        alt: ""
                    }
                }), e._v(" "), n("p", {staticClass: "tips"}, [e._v(e._s(e.failedTips.tips))]), e._v(" "), n("a", {
                    staticClass: "link",
                    on: {
                        click: function (t) {
                            e.util.jsUrl(e.failedTips.link)
                        }
                    }
                }, [e._v(e._s(e.failedTips.btnText))])])])
            }, staticRenderFns: []
        };
        var d = n("VU/8")(u, p, !1, function (e) {
            n("0ljG")
        }, null, null).exports, f = n("woOf"), h = n.n(f), m = a.a.extend(n("xZQk").default), g = function (e) {
            var t = new m({data: h()({}, e)});
            return t.vm = t.$mount(), t.vm.visible = !0, t.dom = t.vm.$el, document.body.appendChild(t.dom), t.vm
        }, v = {
            install: function (e) {
                e.prototype.$imessage = g
            }
        }, y = n("NYxO"), w = n("EuEE"), b = {
            setState: function (e, t) {
                var n = t.type, a = t.key, i = t.val;
                e[n] || (e[n] = {}), e[n][a] = i
            }, replaceState: function (e, t) {
                var n = t.key, a = t.val;
                e[n] = a
            }, setLocation: function (e, t) {
                e.locationInfo = t, w.a.setStorage("locationInfo", e.locationInfo, 900)
            }, getLocation: function (e) {
                if (!e.locationInfo.location_x) {
                    var t = w.a.getStorage("locationInfo");
                    t && t.location_x && (e.locationInfo = t)
                }
            }, setSearch: function (e, t) {
                e.isearch = t, w.a.setStorage("isearch", e.isearch)
            }, getSearch: function (e) {
                if (!e.isearch || !e.isearch.url) {
                    var t = w.a.getStorage("isearch");
                    e.isearch = t
                }
            }, setBargainGoods: function (e, t) {
                e.bargainGoods = t
            }, setBargainInfo: function (e, t) {
                e.bargainInfo = t
            }
        }, P = n("Hqqj"), x = n.n(P);
        a.a.use(y.a);
        var _ = new y.a.Store({
            state: {filter: {takeout: {}}, bargainGoods: {}, bargainInfo: {}},
            getters: {},
            actions: x.a,
            mutations: b
        }), S = n("YaEn"), k = n("Fd2+"), C = (n("CMvz"), n("MJyj"), n("Yn4R")), j = n("wvfG"), M = n.n(j);
        s.a.attach(document.body), a.a.use(n("YqKu")), a.a.use(k.e), a.a.use(v), a.a.use(k.c, {
            lazyComponent: !0,
            loading: ""
        }), a.a.use(M.a), a.a.component("iloading", l), a.a.component("failedTips", d), a.a.config.productionTip = !1, a.a.prototype.util = w.a, a.a.prototype.wx = C.a, a.a.prototype.isWeixin = w.a.isWeixin(), a.a.prototype.theme = w.a.getStorage("theme"), a.a.prototype.util.initBaseParams(), a.a.prototype.wx.init(), new a.a({
            el: "#app",
            router: S.a,
            store: _,
            components: {App: o},
            template: "<App/>"
        })
    }, XbGN: function (e, t, n) {
        "use strict";
        var a = n("mvHQ"), i = n.n(a), o = n("EuEE"), r = {
            init: function () {
                var e = o.a.getStorage("jpush_relation");
                e && o.a.isCloud() && setTimeout(function () {
                    r.relation = e, r.checkconnect(), r.initAjpush(), r.checkSmartUpdate()
                }, 1e3)
            }, checkSmartUpdate: function () {
                api.addEventListener({name: "smartupdatefinish"}, function (e, t) {
                    api.rebootApp()
                })
            }, checkconnect: function () {
                if (api.addEventListener({name: "offline"}, function (e, t) {
                    return api.openFrame({
                        name: "frm_connect",
                        url: "widget://html/connect.html",
                        bounces: !0,
                        rect: {x: 0, y: 0, w: "auto", h: "auto"}
                    }), !1
                }), "none" == api.connectType) return api.openFrame({
                    name: "frm_connect",
                    url: "widget://html/connect.html",
                    bounces: !0,
                    rect: {x: 0, y: 0, w: "auto", h: "auto"}
                }), !1;
                api.addEventListener({name: "online"}, function (e, t) {
                    api.closeFrame({name: "frm_connect"});
                    var n = r.igetPrefs("url_cn");
                    n && (window.location.href = n)
                })
            }, isHasModule: function (e) {
                var t = api.require(e);
                return !(!t || "undefined" == t)
            }, scanQRCode: function (e) {
                api.require("FNScanner").open({autorotation: !0}, function (t, n) {
                    t ? "success" == t.eventType && ("function" == typeof e.success ? e.success({content: t.content}) : -1 == t.content.indexOf("https://") && -1 == t.content.indexOf("http://") || (window.location.href = t.content)) : "function" == typeof e.fail ? e.fail({content: t.content}) : alert(i()(t))
                })
            }, netAudioPlay: function (e, t) {
                var n = api.require("netAudio");
                return t > 0 && n.play({path: e.resource}, function (n) {
                    n.complete && o.a.request({
                        url: "system/common/order/check",
                        data: {id: e.id, order_from: e.order_from}
                    }).then(function (n) {
                        n.data.message.errno || (t--, r.netAudioPlay(e, t))
                    })
                }), !0
            }, speechRecognizerRead: function (e, t) {
                var n = api.require("iflyRecognition");
                return n.createUtility({android_appid: "5bd167ea", ios_appid: "5bd17b48"}, function (e, t) {
                    e.status || api.alert({msg: "创建讯飞失败"})
                }), t > 0 && n.read({
                    readStr: e.voice_text,
                    speed: 60,
                    volume: 100,
                    voice: "xiaoyan",
                    rate: 16e3
                }, function (n, a) {
                    n.status && 100 == n.speakProgress && o.a.request({
                        url: "system/common/takeout/check",
                        data: {id: e.id || e.order_id}
                    }).then(function (n) {
                        n.data.message.errno || (t--, r.speechRecognizerRead(e, t))
                    })
                }), !0
            }, play: function (e) {
                var t = r.igetPrefs("phonic");
                t || (t = {
                    voice: 1,
                    vibrate: 1,
                    voice_type: 1,
                    new: {times: "loop"},
                    refund: {times: "loop"},
                    remind: {times: "loop"}
                }), t.vibrate && api.notification({vibrate: [3e3, 3e3]});
                var n = e.notify_type;
                if (t.voice) {
                    var a = t[n].times;
                    a = "loop" == a ? 100 : 3, 1 == t.voice_type ? r.speechRecognizerRead(e, a) : r.netAudioPlay(e, a)
                }
                return !0
            }, initAjpush: function () {
                var e = api.require("ajpush");
                e.setBadge({badge: 0}), e.init(function (e) {
                    e && e.status
                });
                var t = r.igetPrefs("push_code");
                if (r.relation && r.relation.code && (!t || t && t != r.relation.code)) {
                    var n = {};
                    r.relation.alias && (n.alias = r.relation.alias), r.relation.tags && (n.tags = r.relation.tags), e.bindAliasAndTags(n, function (e, t) {
                        var n = e.statusCode;
                        0 == n ? r.isetPrefs("push_code", r.relation.code) : alert("同步推送信息出错：" + n)
                    })
                }
                e.setListener(function (e) {
                    var t = e.extra;
                    try {
                        t = JSON.parse(e.extra)
                    } catch (e) {
                    }
                    "ios" == api.systemType && api.require("ajpush").setBadge({badge: 0});
                    r.play(t)
                }), api.addEventListener({name: "appintent"}, function (e, t) {
                    if (e && e.appParam.ajpush) {
                        var n = e.appParam.ajpush;
                        try {
                            var a = JSON.parse(n.extra)
                        } catch (e) {
                            a = n.extra
                        }
                        location.href = a.url
                    }
                }), api.addEventListener({name: "noticeclicked"}, function (e, t) {
                    if (e && e.value) {
                        api.require("ajpush").setBadge({badge: 0});
                        var n = e.value.extra;
                        location.href = n.url
                    }
                })
            }, igetPrefs: function (e) {
                var t = e.split("."), n = "";
                if (1 == t.length) {
                    n = api.getPrefs({sync: !0, key: e});
                    try {
                        n = JSON.parse(n)
                    } catch (e) {
                    }
                } else if (2 == t.length) {
                    (a = r.igetPrefs(t[0])) && a[t[1]] && (n = a[t[1]])
                } else if (3 == t.length) {
                    var a;
                    (a = r.igetPrefs(t[0])) && a[t[1]] && (n = a[t[1]][t[2]])
                }
                return n
            }, isetPrefs: function (e, t) {
                var n = e.split(".");
                if (1 == n.length) api.setPrefs({key: e, value: t}); else if (2 == n.length) {
                    (a = r.igetPrefs(n[0])) || (a = {}), a[n[1]] = t, api.setPrefs({key: n[0], value: a})
                } else if (3 == n.length) {
                    var a;
                    (a = r.igetPrefs(n[0])) || (a = {}), a[n[1]] || (a[n[1]] = {}), a[n[1]][n[2]] = t, api.setPrefs({
                        key: n[0],
                        value: a
                    })
                }
                return !0
            }
        };
        t.a = r
    }, YaEn: function (e, t, n) {
        "use strict";
        var a = n("7+uW"), i = n("/ocq");
        a.a.use(i.a), t.a = new i.a({
            scrollBehavior: function (e, t, n) {
                return n || (t.meta.keepAlive && (t.meta.savedPosition = document.body.scrollTop), {
                    x: 0,
                    y: e.meta.savedPosition || 0
                })
            },
            routes: [{path: "/", name: "index", redirect: "/pages/order/index"}, {
                path: "/pages/order/index",
                meta: {title: "订单列表"},
                component: function (e) {
                    return Promise.all([n.e(0), n.e(21)]).then(function () {
                        var t = [n("0wiy")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/detail", meta: {title: "订单详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(18)]).then(function () {
                        var t = [n("IeHp")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/op", meta: {title: "请选择"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(38)]).then(function () {
                        var t = [n("OB9n")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/tangshi/index", meta: {title: "店内订单"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(47)]).then(function () {
                        var t = [n("P3e+")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/table", meta: {title: "店内桌台"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(35)]).then(function () {
                        var t = [n("OEbG")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/assign", meta: {title: "排队"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(42)]).then(function () {
                        var t = [n("yx00")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/assignQueue", meta: {title: "添加队列"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(11)]).then(function () {
                        var t = [n("Szh7")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/assignRecord", meta: {title: "排队领取记录"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(59)]).then(function () {
                        var t = [n("QgUh")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/order/refund", meta: {title: "部分退款"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(43)]).then(function () {
                        var t = [n("0yFl")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/index", meta: {title: "基础设置"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(60)]).then(function () {
                        var t = [n("aiZS")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/home", meta: {title: "商户首页"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(64)]).then(function () {
                        var t = [n("ZE07")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/basic", meta: {title: "门店信息"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(17)]).then(function () {
                        var t = [n("GfYn")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/account", meta: {title: "账户设置"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(41)]).then(function () {
                        var t = [n("w3Pa")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/pill", meta: {title: "支付设置"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(50)]).then(function () {
                        var t = [n("MMmA")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/qualification", meta: {title: "营业资质"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(4)]).then(function () {
                        var t = [n("HZwF")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/update", meta: {title: "门店信息设置"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(49)]).then(function () {
                        var t = [n("yQu4")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/setting", meta: {title: "商家中心"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(32)]).then(function () {
                        var t = [n("pzx7")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/settingMore", meta: {title: "更多设置"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(61)]).then(function () {
                        var t = [n("UYPR")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/select", meta: {title: "选择店铺"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(3)]).then(function () {
                        var t = [n("wmR6")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/shop/phonic", meta: {title: "语音提醒"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(15)]).then(function () {
                        var t = [n("ps9T")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/more/password", meta: {title: "修改密码"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(63)]).then(function () {
                        var t = [n("Jpgc")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/service/comment", meta: {title: "用户评价"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(28)]).then(function () {
                        var t = [n("wbpO")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/index", meta: {title: "店铺活动"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(25)]).then(function () {
                        var t = [n("Ek/6")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/list", meta: {title: "店铺活动"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(19)]).then(function () {
                        var t = [n("Pvz1")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/deliveryFee", meta: {title: "店铺活动创建"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(23)]).then(function () {
                        var t = [n("TZBu")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/bargain", meta: {title: "活动详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(67)]).then(function () {
                        var t = [n("4hny")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/bargainGoods", meta: {title: "创建商品活动"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(7)]).then(function () {
                        var t = [n("CGRQ")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/bargainGoodsSearch", meta: {title: "创建商品活动"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(34)]).then(function () {
                        var t = [n("e2kp")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/bargainList", meta: {title: "天天特价活动列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(51)]).then(function () {
                        var t = [n("tnE6")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/finance/getcash", meta: {title: "余额提现"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(30)]).then(function () {
                        var t = [n("c/2g")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/finance/index", meta: {title: "财务管理"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(56)]).then(function () {
                        var t = [n("YoQz")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/finance/current", meta: {title: "账户明细"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(9)]).then(function () {
                        var t = [n("imhH")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/finance/currentDetail", meta: {title: "账户明细详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(39)]).then(function () {
                        var t = [n("m1Xp")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/finance/getcashRecord", meta: {title: "提现记录"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(54)]).then(function () {
                        var t = [n("362D")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/finance/getcashRecordDetail", meta: {title: "提现记录详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(22)]).then(function () {
                        var t = [n("31vp")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/news/notice", meta: {title: "公告列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(65)]).then(function () {
                        var t = [n("Rlb+")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/news/detail", meta: {title: "公告详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(12)]).then(function () {
                        var t = [n("MonK")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/paybill/index", meta: {title: "账单"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(33)]).then(function () {
                        var t = [n("1nSS")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/paybill/detail", meta: {title: "账单详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(44)]).then(function () {
                        var t = [n("R7qQ")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/paybill/detail1", meta: {title: "账单详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(24)]).then(function () {
                        var t = [n("szFU")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/goods/index", meta: {title: "商品列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(53)]).then(function () {
                        var t = [n("WcB/")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/goods/post", meta: {title: "商品编辑"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(13)]).then(function () {
                        var t = [n("icPS")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/category/index", meta: {title: "分类列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(8)]).then(function () {
                        var t = [n("AWzI")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/category/post", meta: {title: "分类编辑"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(27)]).then(function () {
                        var t = [n("45m7")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/statcenter/index", meta: {title: "商户统计"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(55)]).then(function () {
                        var t = [n("P53F")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/statcenter/order", meta: {title: "营业统计"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(26)]).then(function () {
                        var t = [n("ctmF")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/statcenter/detail", meta: {title: "营业统计详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(16)]).then(function () {
                        var t = [n("pXek")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/statcenter/goods", meta: {title: "热门商品"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(6)]).then(function () {
                        var t = [n("NcMu")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/couponCollect", meta: {title: "下单返券"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(20)]).then(function () {
                        var t = [n("VzVV")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/activity/svipRedpacket", meta: {title: "超级会员红包"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(66)]).then(function () {
                        var t = [n("0S5f")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/advertise/index", meta: {title: "店铺推广"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(45)]).then(function () {
                        var t = [n("Qfjh")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/advertise/stick", meta: {title: "商家列表置顶"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(48)]).then(function () {
                        var t = [n("87qr")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/advertise/recommend", meta: {title: "为您优选推广"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(52)]).then(function () {
                        var t = [n("oGr5")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/advertise/list", meta: {title: "店铺推广记录"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(58)]).then(function () {
                        var t = [n("8bWc")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/auth/login", meta: {title: "登录"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(5)]).then(function () {
                        var t = [n("Ls0E")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/auth/loginBak", meta: {title: "登录"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(46)]).then(function () {
                        var t = [n("C1J/")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/auth/forget", meta: {title: "忘记密码"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(37)]).then(function () {
                        var t = [n("bXtx")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/printer/post", meta: {title: "新建打印机"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(31)]).then(function () {
                        var t = [n("Gw1t")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/printer/list", meta: {title: "打印机列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(68)]).then(function () {
                        var t = [n("ObZR")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/index", meta: {title: "啦啦生活圈"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(14)]).then(function () {
                        var t = [n("OAua")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/kanjia/goods/post", meta: {title: "添加砍价商品"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(10)]).then(function () {
                        var t = [n("fQCU")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/kanjia/goods/list", meta: {title: "砍价列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(62)]).then(function () {
                        var t = [n("S7ZV")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/pintuan/goods/post", meta: {title: "添加拼团商品"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(40)]).then(function () {
                        var t = [n("Ajj2")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/pintuan/goods/list", meta: {title: "拼团列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(57)]).then(function () {
                        var t = [n("eZwh")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/seckill/goods/list", meta: {title: "抢购列表"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(36)]).then(function () {
                        var t = [n("+wo6")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/seckill/goods/post", meta: {title: "添加抢购商品"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(29)]).then(function () {
                        var t = [n("JydX")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/order/index", meta: {title: "核销订单"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(1)]).then(function () {
                        var t = [n("n9QR")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }, {
                path: "/pages/gohome/order/detail", meta: {title: "订单详情"}, component: function (e) {
                    return Promise.all([n.e(0), n.e(2)]).then(function () {
                        var t = [n("wIgR")];
                        e.apply(null, t)
                    }.bind(this)).catch(n.oe)
                }
            }]
        })
    }, Yn4R: function (e, t, n) {
        "use strict";
        var a = n("woOf"), i = n.n(a), o = n("mvHQ"), r = n.n(o), s = n("BO1k"), c = n.n(s), l = n("Zrlr"), u = n.n(l),
            p = n("wxAW"), d = n.n(p), f = n("EuEE"), h = n("fxnj"), m = n.n(h), g = [], v = !1, y = function () {
                function e() {
                    u()(this, e)
                }

                return d()(e, null, [{
                    key: "init", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t.apis || (t.apis = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"]);
                        var n = {};
                        location.hash ? n.url = location.href.slice(0, -location.hash.length) : n.url = location.href, f.a.request({
                            url: "system/common/jssdk",
                            data: n
                        }).then(function (n) {
                            var a = n.data.message;
                            if (a.errno) return console.log("配置错误, 初始化微信JS接口失败:"), void console.log(a.message);
                            m.a.ready(function () {
                                if (t.shareData && e.share(t.shareData), !0 === t.hideOption && m.a.hideOptionMenu(), v = !0, g.length > 0) {
                                    var n = !0, a = !1, i = void 0;
                                    try {
                                        for (var o, r = c()(g); !(n = (o = r.next()).done); n = !0) {
                                            (0, o.value)()
                                        }
                                    } catch (e) {
                                        a = !0, i = e
                                    } finally {
                                        try {
                                            !n && r.return && r.return()
                                        } finally {
                                            if (a) throw i
                                        }
                                    }
                                }
                            }), a = a.message.jssdkconfig, m.a.config({
                                debug: a.debug || !1,
                                appId: a.appId,
                                timestamp: parseInt(a.timestamp),
                                nonceStr: a.nonceStr,
                                signature: a.signature,
                                jsApiList: t.apis.slice(0)
                            }), m.a.error(function (e) {
                                a.debug && alert(r()(e)), console.log("微信JSSDK初始化失败"), console.log(e)
                            }), "function" == typeof callback && callback()
                        })
                    }
                }, {
                    key: "share", value: function (t) {
                        t || (t = window.shareData);
                        var n = function (e) {
                            var n = {
                                title: t.title, link: t.link, imgUrl: t.imgUrl, success: function () {
                                    "function" == typeof t.success && t.success()
                                }, cancel: function () {
                                    "function" == typeof t.cancel && t.cancel()
                                }
                            };
                            return i()(n, e)
                        };
                        e.ready(function () {
                            m.a.onMenuShareTimeline(n({})), m.a.onMenuShareAppMessage(n({
                                desc: t.desc,
                                type: "link",
                                dataUrl: ""
                            }))
                        })
                    }
                }, {
                    key: "ready", value: function (e) {
                        v ? m.a.ready(e) : g.push(e)
                    }
                }]), e
            }();
        t.a = y
    }, vCYS: function (e, t) {
    }, xEpc: function (e, t) {
    }, xZQk: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            data: function () {
                return {
                    type: "info",
                    message: "提示信息",
                    description: "描述信息",
                    redirect: "/pages/order/takeout",
                    btnText: "确定",
                    show: !0
                }
            }, methods: {
                onJsUrl: function (e) {
                    var t = this;
                    this.util.jsUrl(e), setTimeout(function () {
                        t.$destroy(!0), t.$el.parentNode.removeChild(t.$el)
                    }, 100)
                }
            }
        }, i = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "imessage"}}, [n("div", {
                    staticClass: "content",
                    class: e.type
                }, [e._m(0), e._v(" "), n("div", {staticClass: "text-area"}, [n("p", {staticClass: "msg-title"}, [e._v(e._s(e.message))]), e._v(" "), e.description ? n("p", {staticClass: "desc"}, [e._v(e._s(e.description))]) : e._e()]), e._v(" "), n("div", {staticClass: "btn-area"}, [n("div", {
                    staticClass: "button",
                    on: {
                        click: function (t) {
                            e.onJsUrl(e.redirect)
                        }
                    }
                }, [e._v(e._s(e.btnText))])]), e._v(" "), n("div", {staticClass: "extra-area"}, [n("div", {
                    on: {
                        click: function (t) {
                            e.onJsUrl("/pages/order/takeout")
                        }
                    }
                }, [e._v("返回首页")])])])])
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "icon-area"}, [t("i", {staticClass: "icon icon-icon"})])
            }]
        };
        var o = n("VU/8")(a, i, !1, function (e) {
            n("FXIY")
        }, "data-v-46eaa22e", null);
        t.default = o.exports
    }
}, ["NHnr"]);