!
    function () {
        function t(t) {
            for (var e = t[0] ? t : [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i].split("="),
                    r = decodeURIComponent(o[0] || "").trim(),
                    s = decodeURIComponent(o[1] || "").trim();
                r && (n[r] = decodeURIComponent(s))
            }
            return n
        }
        function e() {
            var e = window.location.search.substring(1);
            return t(e.split("&"))
        }
        function n() {
            var e = document.cookie;
            return t(e.split(";"))
        }
        function i() {
            var e = window.location.hash.substring(1);
            return t(e.split("&"))
        }
        function o(t) {
            return "object" == typeof t
        }
        var r = {};
        window.utils = r; s
        var s = /micromessenger/,
            c = /ishareapp/,
            a = /qq/,
            u = /(android|iphone|symbianos|windows phone|ipad|ipod)/,
            h = "" + encodeURIComponent(location.href),
            l = "" + encodeURIComponent(location.href),
            f = navigator.userAgent.toLowerCase(),
            p = s.test(f),
            v = c.test(f),
            d = u.test(f),
            g = a.test(f);
        (r.updateParams = function () {
            r.params = e()
        })(), (r.updateCookies = function () {
            r.cookies = n()
        })(), (r.updateHashs = function () {
            r.hashs = i()
        })(), r.getUniqueCookie = function (t, e) {
            var n = r.cookies[t + r.cookies[e]];
            return n
        }, r.checkUser = function (t) {
            return t = t || r.getUniqueCookie("uv", "appid"), !(!t && (location.href = l))
        }, r.checkOauth = function (t) {
            return t = t || r.getUniqueCookie("openid", "appid"), !(!t && (location.href = h))
        }, r.inherits = function (t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }, r.each = function (t, e) {
            if ("object" != typeof t) throw new Error("function `each` only work on an object");
            var n = Array.isArray(t);
            if (n) t.forEach(e);
            else {
                var i = Object.keys(t);
                i.forEach(function (n) {
                    e(t[n], n, t)
                })
            }
        }, r.extend = function (t, e) {
            if (!e || !o(e)) return t;
            for (var n = Object.keys(e), i = n.length; i--;) t[n[i]] = e[n[i]];
            return t
        }, r.isEmpty = function (t) {
            return null == t ? !0 : t.hasOwnProperty("length") ? 0 === t.length : 0 === Object.keys(t).length
        };
        var b = 0;
        r.uniqueId = function (t) {
            var e = ++b + "";
            return t ? t + e : e
        }, r.isWechat = p, r.isApp = v, r.isMoblie = d, r.isQQ = g, r.isDebugMode = "debug" in r.hashs, v && (r.appVersion = (f.match(/ishareapp:(\S+)/) || [])[1]),
            r.preventPc = function () {
                var t = r.isWechat,
                    e = r.isApp,
                    n = r.isMoblie;
                r.isDebugMode || n || e || t || (window.location.href = "/newmodule/view/h5/pc.html#title=" + document.title + "&url=" + encodeURIComponent(location.href))
            }
    }(), function (t) {
    var e = {
            on: function (t, e, n) {
                if (!i(this, "on", t, [e, n]) || !e) return this;
                this._events || (this._events = {});
                var o = this._events[t] || (this._events[t] = []);
                return o.push({
                    callback: e,
                    context: n,
                    ctx: n || this
                }), this
            },
            once: function (t, e, n) {
                function o() {
                    r.off(t, o), e.apply(this, arguments)
                }
                if (!i(this, "once", t, [e, n]) || !e) return this;
                var r = this;
                return o._callback = e, this.on(t, o, n)
            },
            off: function (t, e, n) {
                var o, r, s, c, a, u, h, l;
                if (!this._events || !i(this, "off", t, [e, n])) return this;
                if (!t && !e && !n) return this._events = void 0, this;
                for (c = t ? [t] : Object.keys(this._events), a = 0, u = c.length; u > a; a++) if (t = c[a], s = this._events[t]) {
                    if (this._events[t] = o = [], e || n) for (h = 0, l = s.length; l > h; h++) r = s[h], (e && e !== r.callback && e !== r.callback._callback || n && n !== r.context) && o.push(r);
                    o.length || delete this._events[t]
                }
                return this
            },
            trigger: function (t) {
                if (!this._events) return this;
                var e = Array.prototype.slice.call(arguments, 1);
                if (!i(this, "trigger", t, e)) return this;
                var n = this._events[t],
                    r = this._events.all;
                return n && o(n, e), r && o(r, arguments), this
            },
            stopListening: function (t, e, n) {
                var i = this._listeningTo;
                if (!i) return this;
                var o = !e && !n;
                n || "object" != typeof e || (n = this), t && ((i = {})[t._listenId] = t);
                for (var r in i) t = i[r], t.off(e, n, this), (o || utils.isEmpty(t._events)) && delete this._listeningTo[r];
                return this
            }
        },
        n = /\s+/,
        i = function (t, e, i, o) {
            if (!i) return !0;
            if ("object" == typeof i) {
                for (var r in i) t[e].apply(t, [r, i[r]].concat(o));
                return !1
            }
            if (n.test(i)) {
                for (var s = i.split(n), c = 0, a = s.length; a > c; c++) t[e].apply(t, [s[c]].concat(o));
                return !1
            }
            return !0
        },
        o = function (t, e) {
            var n, i = -1,
                o = t.length,
                r = e[0],
                s = e[1],
                c = e[2];
            switch (e.length) {
                case 0:
                    for (; ++i < o;) (n = t[i]).callback.call(n.ctx);
                    return;
                case 1:
                    for (; ++i < o;) (n = t[i]).callback.call(n.ctx, r);
                    return;
                case 2:
                    for (; ++i < o;) (n = t[i]).callback.call(n.ctx, r, s);
                    return;
                case 3:
                    for (; ++i < o;) (n = t[i]).callback.call(n.ctx, r, s, c);
                    return;
                default:
                    for (; ++i < o;) (n = t[i]).callback.apply(n.ctx, e);
                    return
            }
        },
        r = {
            listenTo: "on",
            listenToOnce: "once"
        };
    utils.each(r, function (t, n) {
        e[n] = function (e, n, i) {
            var o = this._listeningTo || (this._listeningTo = {}),
                r = e._listenId || (e._listenId = utils.uniqueId("l"));
            return o[r] = e, i || "object" != typeof n || (i = this), e[t](n, i, this), this
        }
    }), t.Events = e
}(utils);
function com_timeout(t) {
    return t && setTimeout(t, 1e3 / 60)
}
function fillUserData(t) {
    window.userdata = t
}
function random(t, e) {
    e || (e = t, t = 0);
    var i = e - t;
    return t + Math.floor(Math.random() * (i + 1))
}
function myAlert(t) {
    myAlert.$tip.html(t).addClass("show"), myAlert.timer && clearTimeout(myAlert.timer), myAlert.timer = setTimeout(function () {
        myAlert.$tip.removeClass("show"), clearTimeout(myAlert.timer)
    }, 1500)
}
function getEnterid() {
    return enterid;
}
function textFilter(t) {
    return t.replace(/<[^>]+>/g, "")
}
function formatTime(t) {
    var e = t.split(/\s+/),
        i = e[0].split("-"),
        o = e[1].split(":"),
        a = new Date("20" + i[0], i[1] - 1, i[2], o[0], o[1], o[2]),
        n = new Date - a,
        s = Math.floor(n / 6e4),
        c = Math.floor(s / 60),
        r = Math.floor(c / 24);
    if (0 >= s) return "刚刚";
    if (0 >= c) return s + "分钟前";
    if (0 >= r) return c + "小时前";
    if (3 >= r) return r + "天前";
    var l = t.split(/\s+/);
    return l = l[0].split("-"), l[1] = +l[1], l[2] = +l[2], l[1] + "月" + l[2] + "日"
}
function liteScroll(t) {
    function e(t) {
        g = !1;
        var e = $(t.currentTarget),
            i = e.data("liteScroll");
        f = !0, window.scrollFlag = !0, m = liteScroll.instance[i], h = x ? t.targetTouches[0].clientX : t.clientX, d = x ? t.targetTouches[0].clientY : t.clientY, p = (new Date).getTime(), w = 0, s(e[0])
    }
    function i(t) {
        window.scrollFlag && (window.scrolling = !0);
        var e = $(t.currentTarget);
        moveY = x ? t.touches[0].clientY : t.clientY, u = moveY - d, d = x ? t.touches[0].clientY : t.clientY, m.translate += u, w += u, c(e[0])
    }
    function o(t) {
        if (!g) {
            g = !0, window.scrolling = !1;
            var e = $(t.currentTarget),
                i = w / ((new Date).getTime() - p);
            f = !1, v = i > 0, Math.abs(i) > .35 ? (k = !1, n(e[0], i)) : a(e[0]), m.translate >= 0 && Math.abs(i) > .35 ? b && b(m.translate) : Math.abs(m.translate) >= _ && y && y()
        }
    }
    function a(t) {
        m.translate > 0 ? r(t, "up", .08) : Math.abs(m.translate) > _ && r(t, "down", .08), window.scrollFlag = !1
    }
    function n(t, e) {
        requestAnimationFrame(function () {
            var i = v ? .02 : -.02,
                o = e - i;
            !f && !k && v == o > 0 && Math.abs(o) >= .01 && Math.abs(o) != 1 / 0 && (m.translate += 30 * o, c(t), a(t), n(t, o))
        })
    }
    function s(t) {
        var e = t.parentNode.offsetHeight;
        _ = t.offsetHeight - e, 0 > _ && (_ = 0)
    }
    function c(t, e) {
        e && s(t), m.translate >= 100 ? m.translate = 100 : Math.abs(m.translate) >= _ + 100 && (m.translate = -(_ + 100)), t.style.webkitTransform = "translateY(" + m.translate + "px) translateZ(0)"
    }
    function r(t, e, i) {
        k = !0, "up" === e ? requestAnimationFrame(function () {
            if (!f) {
                var e = i + .05;
                return m.translate -= 10 * e, m.translate < 0 ? (m.translate = 0, c(t), void (k = !1)) : void (0 !== m.translate && (c(t), r(t, "up", e)))
            }
        }) : "down" === e && requestAnimationFrame(function () {
            if (!f) {
                var e = i + .05;
                return m.translate += 10 * e, m.translate > -_ ? (m.translate = -_, c(t), void (k = !1)) : void (m.translate !== -_ && (c(t), r(t, "down", e)))
            }
        })
    }
    liteScroll.goTo = function (t, e) {
        var i = t,
            o = liteScroll.instance[i];
        if (o) {
            var a = $(l).filter('[data-lite-scroll="' + t + '"]')[0];
            a && (f = !0, o.translate = e, m = o, requestAnimationFrame(function () {
                c(a, !0)
            }))
        }
    };
    var l = ".scrollable_betal";
    if (!liteScroll.instance) {
        liteScroll.instance = [], liteScroll._id = -1, $(l).each(function (t, e) {
            $(e).data("lite-scroll", ++liteScroll._id), liteScroll.instance[liteScroll._id] = {
                translate: 0
            }
        }), $(".scrollbar").scroll(function () {
            var t = $(".scrollbar").scrollTop(),
                e = $(".scrollbar")[0].scrollHeight;
            t > e - 550 && y && y()
        });
        var m, h = 0,
            d = 0,
            u = 0,
            p = 0,
            f = !0,
            _ = 0,
            g = !1,
            w = 0,
            v = !0,
            k = !0,
            b = t.topCallback,
            y = t.endCallback,
            x = ($("body"), "ontouchstart" in window ? !0 : !1);
        $(l).on("touchstart", e), $(l).on("touchmove", i), $(l).on("touchend", o)
    }
}
function approximate(t) {
    if (t = parseInt(t), isNaN(parseInt(t))) return 0;
    var e;
    return e = t >= 1e4 ? parseInt(t / 1e4) + "w" : t
}
$.ajaxSettings.cache = !1, $.ajaxSettings.xhrFields = {
    withCredentials: !0
}, $.ajaxSettings.crossDomain = !0, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || com_timeout, utils.isApp && (callAppHandler(APPHANDLER.GETUSERDATA, fillUserData), registerAppHandler(APPHANDLER.SETUSERDATA, fillUserData));
var ilike = initIlike,
    isilike = isilike || window.isilike || !1,
    id_value = id_value || window.id_value;
window.totalComment = 0;
var firstCheckOauth = !1,
    CCanvas = function () {
        function t(t) {
            this._cview = t, this.$canvas = $("#comm_canvas"), this.running = !1, this.context = this.$canvas[0].getContext("2d"), this.height = this.$canvas[0].offsetParent.offsetHeight, this.width = this.$canvas[0].offsetParent.offsetWidth,
                this.img_src = "http://7vznnu.com2.z0.glb.qiniucdn.com/like_xin.png", this.img, this.img_loaded = !1, this.img_width = 30, this.img_height = 30, this.list = [], this.gradient_v = 2, this.gradient_h = .5, this.max_gradient_h = 10, this.gradient_scale = .05, this.gradient_opacity = .03, this.maxframes = 80, this.init()
        }
        return t.prototype.init = function () {
            var t = this;
            this.img = new Image, this.img.src = this.img_src, this.img.onload = function () {
                t.img_loaded = !0
            }, this.$canvas[0].setAttribute("height", this.height), this.$canvas[0].setAttribute("width", this.width)
        }, t.prototype.add = function (t, e) {
            var i = {
                x: t,
                y: e,
                direction: 1 == random(1) ? 1 : -1,
                sum: 0,
                opacity: 0,
                scale: 0,
                frames: 0
            };
            this.list.push(i), this.start()
        }, t.prototype.draw = function (t) {
            this.img_loaded && (this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = t.opacity, this.context.drawImage(this.img, t.x, t.y, this.img_width * t.scale, this.img_height * t.scale))
        }, t.prototype.start = function () {
            !this.running && this.run()
        }, t.prototype.run = function () {
            var t = this;
            this.running = !0, this.clear(), this.list = this.list.filter(function (e, i) {
                return e.scale += t.gradient_scale, e.scale > 1 && (e.scale = 1), e.opacity += t.gradient_opacity, e.opacity > 1 && (e.opacity = 1), e.y -= t.gradient_v, e.x += t.gradient_h * e.direction, e.sum += t.gradient_h * e.direction, t.draw(e), Math.abs(e.sum) >= t.max_gradient_h && (e.direction *= -1, e.sum = 0), e.frames++, e.frames >= t.maxframes ? !1 : !0
            }), requestAnimationFrame(function () {
                t.list.length > 0 ? t.run() : (t.running = !1, t.clear())
            })
        }, t.prototype.clear = function () {
            this.context.clearRect(0, 0, this.width, this.height)
        }, t
    }(),
    CWordEditor = function () {
        function t(t) {
            var e = this;
            this._cview = t, this.uid, this.name, this.id, this.$input = $(".comm_input"), this.$send = $(".js-send"), this.$send.on("click", function () {
                e.confirm.call(e)
            }), this.$input.on("focus", function () {
                //sessionStorage.removeItem("comment-checkOauth"), sessionStorage.removeItem("comment-checkOauth-uid"),
                //sessionStorage.removeItem("comment-checkOauth-name"),
                //sessionStorage.removeItem("comment-checkOauth-id"), !firstCheckOauth && utils.isWechat && (firstCheckOauth = !0, sessionStorage.setItem("comment-checkOauth", Date.now()), sessionStorage.setItem("comment-checkOauth-uid", e.uid), sessionStorage.setItem("comment-checkOauth-name", e.name), sessionStorage.setItem("comment-checkOauth-id", e.id), utils.checkOauth()), e._cview.focusInput()
            }), this.$input.on("blur", function () {
                e._cview.blurInput(), "" != e.$input.val() && (e.$send.removeClass("shine"), requestAnimationFrame(function () {
                    e.$send.addClass("shine")
                }))
            }), this.$input.on("input change", function () {
                "" != $(this).val() ? e.$send.addClass("cansend") : e.$send.removeClass("cansend")
            })
        }
        return t.prototype.aim = function (t, e, i) {
            e && "undefined" != e && this.$input.val("回复" + e + ":"), this.uid = t, this.name = e, this.id = i, this.$input.focus()
        }, t.prototype.confirm = function () {
            var t = textFilter(this.$input.val());
            "" == t && myAlert("评论不可以为空哦～"), this.$input.val().match("回复" + this.name + ":") || (this.uid = null), this.$input.val(""), this.$send.removeClass("cansend"), this._cview._cmodel.postComment(this.uid, t)
        }, t
    }(),
    CList = function () {
        function t(t) {
            var e = this;
            this._cview = t, this.data = [], this.$comm_box = $(".comm_box"), this.$scroll = $(".comm_scroll"), this.tmpl = $("#tmple-comment-scroll").html(), liteScroll({
                endCallback: function () {
                    var t = $(".comm_comment").last().data("id");
                    e.getNext(t)
                },
                topCallback: function () {
                    var t = $(".comm_comment").first().data("id");
                    e.getPrev(t)
                }
            }), this.$comm_box.on("touchstart mousedown", ".comm_expand_like", function (t) {
                t.preventDefault(), t.stopPropagation();
                var i = $(this).closest(".comm_comment").data("id");
                var o = $(this).closest(".comm_expand_like_box"),
                    a = o.find(".comm_expand_like_num"),
                    n = parseInt(a.html());
                o.hasClass("liked") || (o.addClass("liked"), isNaN(n) ? n = 1 : n++, a.html(n));
                var s = this.getBoundingClientRect(),
                    c = $(".comment_page")[0].getBoundingClientRect();
                e._cview._ccanvas.add(s.left + 20 - c.left, s.top + 10 - c.top), e._cview._cmodel.saveLike("comment", i)
            }), this.$comm_box.on("touchmove mousemove", ".comm_expand_like", function (t) {
                t.preventDefault(), t.stopPropagation()
            }), $(document).on("click", ".comm_comment", function (t) {
                if (0 == $(t.target).closest(".comm_expand_like").length) {
                    var i = $(this).data("uid"),
                        o = $(this).find(".comm_expand_name").html(),
                        a = $(this).data("id");
                    e._cview._cwordeditor.aim(i, o, a)
                }
            })
        }
        return t.prototype.getNext = function (t, e) {
            var i = this,
                o = {
                    clist: function (t) {
                        i.insertDom(t, !1), e && e()
                    }
                };
            this._cview._cmodel.register(o, t, 0)
        }, t.prototype.getPrev = function (t) {
            var e = this,
                i = {
                    clist: function (i) {
                        e.insertDom(i, !0), e.goTo(t)
                    }
                };
            this._cview._cmodel.register(i, t, 1)
        }, t.prototype.insertDom = function (t, e) {
            var i = this;
            this.data = this._cview._cmodel.data, "[object Array]" != Object.prototype.toString.call(t) && (t = [t]), e ? i.data = t.concat(i.data) : i.data = i.data.concat(t);
            var o = "";
            t.forEach(function (t) {
                o += i.tmpl.replace("{img}", "background-image:url(" + t.headimgurl + ");").replace("{name}", t.nickname).replace("{content}", t.content).replace("{id}", t.id).replace("{uid}", t.uid).replace("{time}", formatTime(t.cre_time.replace("T", " "))).replace("{deletable}", t.deletable ? "deletable" : "").replace("{liked}", t.isilike ? "liked" : "").replace("{likenum}", 0 == t.ilike ? t.isilike ? 1 : "" : t.ilike)
            }), e ? this.$scroll.prepend(o) : this.$scroll.append(o)
        }, t.prototype.goTo = function (t) {
            var e = $(".comm_comment").filter('[data-id="' + t + '"]');
            if (0 != e.length) {
                var i = e[0].offsetTop,
                    o = this.$scroll.data("lite-scroll");
                liteScroll.goTo(o, -i)
            }
        }, t
    }(),
    CFloat = function () {
        function t(t) {
            var e = this;
            this._cview = t, this.loop = !1, this.DATANUM = 20, this.FLOATNUM = 6, this.data = [], this.index = 0, this.step, this.SPEED = 5, this.distance = -1, this.sleepTime = 1e3, this.timer, this.first = !0, this.$float_box = $(".comm_float_box"), this.shownDoms = [], this.tmpl = $("#tmple-comment").html(), this.$float_box.on("click", function (t) {
                $(t.target).hasClass("comm_float_mask") || 0 != $(t.target).closest(".comm_float_wrapper").length || window.history.back()
            }), this.$float_box.on("touchstart mousedown", ".comm_float", function (t) {
                t.preventDefault(), t.stopPropagation(), $(this).addClass("clicked");
                for (var i = 0, o = e.data.length; o > i; i++) if (e.data[i].id == $(this).closest(".comm_float_wrapper").data("id")) {
                    e.data[i].temLiked = !0;
                    break
                }
                var a = this.getBoundingClientRect(),
                    n = $(".comment_page")[0].getBoundingClientRect();
                e._cview._ccanvas.add(a.right - 20 - n.left, a.top + 10 - n.top)
            })
        }
        function e(t, e, i) {
            "undefined" == typeof e && (sty = 0), "undefined" == typeof i && (i = 1), t.style.webkitTransform = "translateY(" + e + "px) translateZ(0) scale(" + i + ")"
        }
        return t.prototype.start = function () {
            var t = this;
            if (0 == this.data.length && !this.getData()) {
                var e = {
                    cfloat: function () {
                        t._cview.isShown && !t._cview.isShownList && t.start()
                    }
                };
                return void this._cview._cmodel.register(e, null, 0)
            }
            this.loop || (this.loop = !0, this.loopAnimation())
        }, t.prototype.stop = function () {
            this.loop = !1, clearTimeout(this.timer), this.timer = null
        }, t.prototype.getData = function () {
            return this.data = this._cview._cmodel.data.slice(0, this.DATANUM), this.data.reverse(), this.data.length
        }, t.prototype.makeDom = function (t) {
            var e = document.createElement("div"),
                i = this.tmpl.replace("{img}", "background-image:url(" + t.headimgurl + ");").replace("{comment}", t.content).replace("{id}", t.id);
            return e.innerHTML = i, e.children[0]
        }, t.prototype.loopAnimation = function () {
            var t = this;
            requestAnimationFrame(function () {
                if (t.loop) if (-1 == t.distance || t.distance >= t.step) t.pauseHandler();
                else {
                    t.distance += t.SPEED;
                    var i = t.SPEED;
                    t.distance > t.step && (i = t.step + t.SPEED - t.distance);
                    var o, a;
                    t.shownDoms.forEach(function (n, s) {
                        if (n) {
                            var c = $(n).data("step");
                            0 == c ? (o = t.animateIn(), e(n, 0, o)) : c == t.FLOATNUM - 1 ? (a = +$(n).data("ty") + i, $(n).data("ty", a), e(n, a, 1), n.style.opacity = 1 - t.calculate()) : (a = +$(n).data("ty") + i, $(n).data("ty", a), e(n, a, 1))
                        }
                    }), t.loopAnimation()
                }
            })
        }, t.prototype.pauseHandler = function () {
            var t = this;
            if (!this.timer) {
                this.shownDoms.forEach(function (e) {
                    var i = parseInt($(e).data("step"));
                    i == t.FLOATNUM - 1 ? (t.shownDoms.pop(), $(e).remove()) : $(e).data("step", i + 1)
                });
                var e = t.sleepTime;
                t.first && (t.first = !1, e = 500), this.timer = setTimeout(function () {
                    if (t.timer = null, $(".comm_float").removeClass("first"), t.index < t.data.length) {
                        var e = t.makeDom(t.data[t.index++]);
                        t.shownDoms.unshift(e), t.$float_box.prepend(e), t.step = e.offsetHeight, e.style.webkitTransform = " scale(0)", $(e).data("step", 0), t.data[t.index - 1].temLiked && $(e).find(".comm_float").addClass("clicked"), $(e).find(".comm_float").addClass("first")
                    } else 1 == t.shownDoms.length && $(t.shownDoms[0]).data("step") == t.FLOATNUM - 1 && (t.index = 0);
                    t.distance = 0, t.loop && t.loopAnimation()
                }, e)
            }
        }, t.prototype.calculate = function () {
            return this.distance / this.step
        }, t.prototype.animateIn = function () {
            var t = 1.1,
                e = .9,
                i = this.calculate();
            return e >= i ? i / e * t : t - (i - e) / (1 - e) * (t - 1)
        }, t
    }(),
    CModel = function () {
        function t(t) {
            this._cview = t, this.$comment_num = $(".comm_tab_commentnum"), this.$comm_open_cm_num = $(".comm_open_cm_num"), this.filterLastId, this.enterid = getEnterid(), this.gettingData = !1, this.data = [], this.callbacks = {}, this.hasup = 1, this.hasmore = 1, this.likeStore = {
                wedding: {
                    type: "wedding",
                    data: []
                },
                comment: {
                    type: "comment",
                    data: []
                }
            }, this.postLikeTimer = null
        }
        return t.prototype.getData = function (t, e) {
            var i = this;
            if ((!e || this.hasup) && (e || this.hasmore)) {
                var o = "mindex.ashx?action=getcomment",
                    a = {
                        enterid: this.enterid,
                        up: e
                    };
                t && (a.lastid = t), this.gettingData = !0, $.ajax({
                    type: "POST",
                    url: o,
                    dataType: "json",
                    timeout: 1500,
                    data: a,
                    success: function (o) {
                        if (1 == o.retmsg) {
                            window.totalComment = o.data.totalComment;
                            var a = approximate(window.totalComment);
                            i.$comment_num.html("评论·" + window.totalComment), i.$comm_open_cm_num.html(a), window.broadcastTotalComment && window.broadcastTotalComment(o.data.totalComment), e && (i.hasup = o.data.hasup), !e && (i.hasmore = o.data.hasmore), "[object Array]" != Object.prototype.toString.call(o.data.data) && (o.data.data = [o.data.data]), o.data.data = e ? o.data.data.reverse() : o.data.data, o.data.data = o.data.data.filter(function (o) {
                                return parseInt(o.id) != parseInt(t) || !e && t == i.filterLastId ? !0 : !1
                            }), i.saveData(o.data.data, e)
                        } else myAlert("获取评论出错了~");
                        i.gettingData = !1
                    },
                    error: function (t, e) {
                        myAlert("获取评论时服务器出错了~"), i.gettingData = !1
                    }
                })
            }
        }, t.prototype.saveData = function (t, e) {
            var i, o = this;
            "[object Array]" != Object.prototype.toString.call(t) && (t = [t]);
            for (var a = 0, n = t.length; n > a; a++) i = t[a], t[a] = {
                uid: i.uid,
                headimgurl: i.headimgurl,
                nickname: i.nickname,
                content: i.content,
                cre_time: i.cre_time,
                deletable: i.deletable,
                id: i.id,
                isilike: i.isilike,
                ilike: i.ilike
            };
            e ? o.data = t.concat(o.data) : o.data = o.data.concat(t), this.handleCallback(t, e)
        }, t.prototype.register = function (t, e, i) {
            for (var o in t) this.callbacks[o] || (i && this.hasup || !i && this.hasmore) && (this.callbacks[o] = t[o]);
            this.gettingData || this.getData(e, i)
        }, t.prototype.handleCallback = function (t, e) {
            for (var i in this.callbacks) this.callbacks[i](t, e);
            this.callbacks = {}
        }, t.prototype.postComment = function (t, e) {
            var i = this,
                o = {
                    enterid: this.enterid,
                    comment: e
                };
            if (window.userdata && window.userdata.token) o.token = window.userdata.token;
            else if (utils.isApp) return void callAppHandler(APPHANDLER.REGISTER);
            t && (o.replyuid = t), $.ajax({
                type: "POST",
                url: "mindex.ashx?action=comment",
                data: o,
                dataType: "json",
                success: function (t) {
                    if (1 === t.retmsg) {
                        i.saveData(t.data.data[0], 1), i._cview._clist.insertDom(t.data.data[0], 1), i._cview.showList(), i._cview._clist.goTo(t.data.data[0].id), myAlert("评论成功~");
                        var e = approximate(++window.totalComment);
                        i.$comment_num.html("评论·" + window.totalComment), i.$comm_open_cm_num.html(e)
                    } else myAlert("发表失败了~")
                },
                error: function () {
                    myAlert("服务器睡着了~")
                }
            })
        }, t.prototype.saveLike = function (t, e) {
            var i = this;
            if (e) {
                var o = !1;
                this.likeStore[t].data.forEach(function (i) {
                    i.id == e && ("wedding" == t && i.count++, o = !0)
                }), o || this.likeStore[t].data.push({
                    id: e,
                    count: $(".comm_open_like_num").html()
                }), this.postLikeTimer || (this.postLikeTimer = setTimeout(function () {
                    i.postLike(e), i.postLikeTimer = null
                }, 5e3))
            }
        }, t.prototype.postLike = function (e) {
            function t(t) {
                $.ajax({
                    type: "POST",
                    url: "mindex.ashx?action=ilike",
                    data: { data: JSON.stringify({ "type": "wedding", "data": [{ "id": e, "count": $(".comm_open_like_num").html() }] }) },//JSON.stringify(t) },
                    dataType: "json",
                    success: function () { },
                    error: function () { }
                })
            }
            this.likeStore.wedding.data.length > 0 && t(this.likeStore.wedding), this.likeStore.comment.data.length > 0 && t(this.likeStore.comment), this.likeStore.wedding.data = [], this.likeStore.comment.data = []
        }, t
    }(),
    CView = function () {
        function t() {
            this._cmodel = new CModel(this), this._cfloat = new CFloat(this), this._clist = new CList(this), this._cwordeditor = new CWordEditor(this), this._ccanvas = new CCanvas(this), this.isShown = !1, this.isShownList = !1, this.$comment_page = $(".comment_page "), this.$comm_box = $(".comm_box"),
                this.$comm_open_btn = $("#comm_open_btn"), this.$comm_open_box = $(".comm_open_box"), this.init()
        }
        return t.prototype.show = function () {
            var t = this;
            this.isShown = !0;
            var e = this.$comment_page[0].offsetWidth / this.$comm_open_box[0].offsetWidth + 2,
                i = this.$comment_page[0].offsetHeight / this.$comm_open_box[0].offsetHeight + 2;
            this.$comm_open_box.css("-webkit-transform", "scale(" + e + "," + i + ")"), this.$comm_open_btn.addClass("open"),
                setTimeout(function () {
                    t.$comment_page.addClass("show");
                    var e = "",
                        i = !1;
                    window.location.hash ? window.location.hash.match("[#&]comment") || (e = "&comment", i = !0) : (e = "#comment", i = !0), i && window.history.pushState({
                        title: "comment"
                    }, document.title, window.location.href + e), t.isShownList ? t.showList() : t.showFloat()
                }, 300)
        }, t.prototype.hide = function () {
            var t = this;
            setTimeout(function () {
                t.$comm_open_box.css("-webkit-transform", "scale(1,1)"), t.$comm_open_btn.removeClass("open")
            }, 300), this.isShown = !1, this.$comment_page.removeClass("show"), this._cfloat.stop()
        }, t.prototype.showFloat = function () {
            this.isShownList = !1, this.$comment_page.removeClass("show_list"), this._cfloat.start()
        }, t.prototype.showList = function () {
            this.isShownList = !0, this._cfloat.stop(), this.$comment_page.addClass("show_list")
        }, t.prototype.focusInput = function () {
            this.isShownList || this._cfloat.stop(), this.$comment_page.addClass("inputing")
        }, t.prototype.blurInput = function () {
            this.isShownList || this._cfloat.start(), this.$comment_page.removeClass("inputing")
        }, t.prototype.init = function () {
            var t = this;
            this.swipe();
            var e = this.$comm_box[0].offsetTop;
            this.$comm_box.css("height", this.$comm_box[0].offsetParent.clientHeight - e), $(".comment_page").on("touchmove", function (t) {
                t.preventDefault(), t.stopPropagation()
            }), $(".comm_tab_float").on("click", function () {
                t.isShownList && t.showFloat()
            }), $(".comm_tab_list").on("click", function () {
                t.isShownList || t.showList()
            }), $(".comm_close").on("click", function () {
                window.history.back()
            });
            var i = $(".comm_tab_likenum"),
                o = $(".comm_open_like_num"),
                a = approximate(ilike);
            i.html("赞·" + ilike), o.html(a), isilike && $(".comm_like").addClass("liked"), $(".comm_like,.like_btn").on("touchstart", function (e) {
                e.preventDefault(), e.stopPropagation(), t._cmodel.saveLike("wedding", enterid);
                var a = this.getBoundingClientRect(),
                    n = $(".comment_page")[0].getBoundingClientRect();
                t._ccanvas.add(a.left + 15 - n.left, a.top - 10 - n.top), $(this).addClass("liked");
                var s = approximate(++ilike);
                i.html("赞·" + ilike), o.html(s)
            }), $(".comm_share").on("click", function () {
                $(".comm_share_mask").addClass("show")
            }), $(".comm_share_mask").on("click", function () {
                $(this).removeClass("show")
            });
            var n = utils.hashs.id;
            if (sessionStorage.getItem("comment-checkOauth")) {
                var s = sessionStorage.getItem("comment-checkOauth-uid"),
                    c = sessionStorage.getItem("comment-checkOauth-name"),
                    r = sessionStorage.getItem("comment-checkOauth-id");
                this._cmodel.filterLastId = r, this._clist.getNext(r, function () {
                    t._clist.goTo(r), t.isShownList = !0, t.show(), t._cwordeditor.aim(s, c, r)
                })
            } else if (sessionStorage.getItem("comment-checkOauth-like")) {
                var r = sessionStorage.getItem("comment-checkOauth-id");
                sessionStorage.removeItem("comment-checkOauth-like"), sessionStorage.removeItem("comment-checkOauth-id"), this._cmodel.filterLastId = r, this._clist.getNext(r, function () {
                    t._clist.goTo(r), t.isShownList = !0, t.show()
                })
            } else n ? (this._cmodel.filterLastId = n, this._clist.getNext(n, function () {
                t._clist.goTo(n), t.isShownList = !0, t.show()
            })) : this._clist.getNext(null);
            window.addEventListener("popstate", function (e) {
                e.state || t.hide()
            })
        }, t.prototype.swipe = function () {
            var t = this,
                e = -1,
                i = -1;
            this.$comm_box.on("touchstart", function (t) {
                e = t.changedTouches[0].clientX, i = t.changedTouches[0].clientY
            }), this.$comm_box.on("touchend", function (o) {
                if (-1 != e && -1 != i) {
                    var a = Math.abs(o.changedTouches[0].clientX - e);
                    a > 100 && a > Math.abs(o.changedTouches[0].clientY - i) && (o.changedTouches[0].clientX - e > 0 ? t.showFloat() : t.showList()), e = -1, i = -1
                }
            })
        }, t
    }();
myAlert.timer = null, myAlert.$tip = $(".comm_tip");