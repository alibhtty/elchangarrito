! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    "use strict";

    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, e.allOff = e.removeAllListeners = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    "use strict";
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var r = i.toDashed(o),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                c = i.makeArray(a).concat(i.makeArray(l)),
                d = s + "-options",
                u = t.jQuery;
            c.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var l = new e(t, i);
                u && u.data(t, o, l)
            })
        })
    }, i
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < c; e++) {
            var i = l[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, u = 0; u < c; u++) {
                var h = l[u],
                    f = r[h],
                    p = parseFloat(f);
                a[h] = isNaN(p) ? 0 : p
            }
            var v = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                w = a.borderTopWidth + a.borderBottomWidth,
                x = d && s,
                S = t(r.width);
            S !== !1 && (a.width = S + (x ? 0 : v + b));
            var C = t(r.height);
            return C !== !1 && (a.height = C + (x ? 0 : m + w)), a.innerWidth = a.width - (v + b), a.innerHeight = a.height - (m + w), a.outerWidth = a.width + g, a.outerHeight = a.height + y, a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        c = l.length,
        d = !1;
    return r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
}(window, function(t, e) {
    "use strict";

    function i() {}

    function n() {}
    var o = n.prototype = Object.create(e.prototype);
    o.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }, o.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }, o._bindStartEvent = function(e, i) {
        i = void 0 === i || !!i;
        var n = i ? "addEventListener" : "removeEventListener";
        t.PointerEvent ? e[n]("pointerdown", this) : (e[n]("mousedown", this), e[n]("touchstart", this))
    }, o.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier) return i
        }
    }, o.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, o.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }, o.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }, o._pointerDown = function(t, e) {
        this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    }, o.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    };
    var r = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return o._bindPostStartEvents = function(e) {
        if (e) {
            var i = r[e.type];
            i.forEach(function(e) {
                t.addEventListener(e, this)
            }, this), this._boundPointerEvents = i
        }
    }, o._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this)
        }, this), delete this._boundPointerEvents)
    }, o.onmousemove = function(t) {
        this._pointerMove(t, t)
    }, o.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, o.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, o._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }, o.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }, o.onmouseup = function(t) {
        this._pointerUp(t, t)
    }, o.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, o.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, o._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e)
    }, o.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }, o._pointerDone = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
    }, o.pointerDone = i, o.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, o.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, o._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e)
    }, o.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }, n.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }, n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["unipointer/unipointer"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
}(window, function(t, e) {
    "use strict";

    function i() {}
    var n = i.prototype = Object.create(e.prototype);
    return n.bindHandles = function() {
        this._bindHandles(!0)
    }, n.unbindHandles = function() {
        this._bindHandles(!1)
    }, n._bindHandles = function(e) {
        e = void 0 === e || !!e;
        for (var i = e ? "addEventListener" : "removeEventListener", n = 0; n < this.handles.length; n++) {
            var o = this.handles[n];
            this._bindStartEvent(o, e), o[i]("click", this), t.PointerEvent && (o.style.touchAction = e ? "none" : "")
        }
    }, n.pointerDown = function(t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    }, n._dragPointerDown = function(t, i) {
        this.pointerDownPoint = e.getPointerPoint(i);
        var n = this.canPreventDefaultOnPointerDown(t, i);
        n && t.preventDefault()
    }, n.canPreventDefaultOnPointerDown = function(t) {
        return "SELECT" != t.target.nodeName
    }, n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
    }, n._dragPointerMove = function(t, i) {
        var n = e.getPointerPoint(i),
            o = {
                x: n.x - this.pointerDownPoint.x,
                y: n.y - this.pointerDownPoint.y
            };
        return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, i), o
    }, n.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
    }, n.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
    }, n._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, n._dragStart = function(t, i) {
        this.isDragging = !0, this.dragStartPoint = e.getPointerPoint(i), this.isPreventingClicks = !0, this.dragStart(t, i)
    }, n.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }, n._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }, n.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
    }, n._dragEnd = function(t, e) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks
        }.bind(this)), this.dragEnd(t, e)
    }, n.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }, n.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }, n._staticClick = function(t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = t.target.nodeName;
            "INPUT" != i && "TEXTAREA" != i || t.target.focus(), this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                delete this.isIgnoringMouseUp
            }.bind(this), 400))
        }
    }, n.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }, i.getPointerPoint = e.getPointerPoint, i
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(i) {
        return e(i, t, t.document, t.Math)
    }) : "object" == typeof exports && exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, function(t, e, i, n, o) {
    "use strict";
    var r = "fullpage-wrapper",
        s = "." + r,
        a = "fp-scrollable",
        l = "." + a,
        c = "fp-responsive",
        d = "fp-notransition",
        u = "fp-destroyed",
        h = "fp-enabled",
        f = "fp-viewing",
        p = "active",
        v = "." + p,
        m = "fp-completely",
        g = "." + m,
        y = ".section",
        b = "fp-section",
        w = "." + b,
        x = w + v,
        S = w + ":first",
        C = w + ":last",
        k = "fp-tableCell",
        T = "." + k,
        E = "fp-auto-height",
        _ = "fp-normal-scroll",
        A = "fp-nav",
        D = "#" + A,
        F = "fp-tooltip",
        $ = "." + F,
        P = "fp-show-active",
        I = ".slide",
        B = "fp-slide",
        O = "." + B,
        M = O + v,
        L = "fp-slides",
        z = "." + L,
        j = "fp-slidesContainer",
        N = "." + j,
        R = "fp-table",
        U = "fp-slidesNav",
        H = "." + U,
        q = H + " a",
        W = "fp-controlArrow",
        V = "." + W,
        X = "fp-prev",
        Y = "." + X,
        G = W + " " + X,
        Q = V + Y,
        K = "fp-next",
        J = "." + K,
        Z = W + " " + K,
        tt = V + J,
        et = t(e),
        it = t(i),
        nt = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    t.fn.fullpage = function(a) {
        function l(e, i) {
            ni("autoScrolling", e, i);
            var n = t(x);
            a.autoScrolling && !a.scrollBar ? (si.css({
                overflow: "hidden",
                height: "100%"
            }), W(Ai.recordHistory, "internal"), vi.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), n.length && Je(n.position().top)) : (si.css({
                overflow: "visible",
                height: "initial"
            }), W(!1, "internal"), vi.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), Je(0), n.length && si.scrollTop(n.position().top))
        }

        function W(t, e) {
            ni("recordHistory", t, e)
        }

        function Y(t, e) {
            ni("scrollingSpeed", t, e)
        }

        function K(t, e) {
            ni("fitToSection", t, e)
        }

        function J(t) {
            a.lockAnchors = t
        }

        function rt(t) {
            t ? (qe(), We()) : (He(), Ve())
        }

        function st(e, i) {
            "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
                ti(e, i, "m")
            })) : e ? (rt(!0), Xe()) : (rt(!1), Ye())
        }

        function at(e, i) {
            "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
                ti(e, i, "k")
            })) : a.keyboardScrolling = e
        }

        function lt() {
            var e = t(x).prev(w);
            e.length || !a.loopTop && !a.continuousVertical || (e = t(w).last()), e.length && Vt(e, null, !0)
        }

        function ct() {
            var e = t(x).next(w);
            e.length || !a.loopBottom && !a.continuousVertical || (e = t(w).first()), e.length && Vt(e, null, !1)
        }

        function dt(t, e) {
            Y(0, "internal"), ut(t, e), Y(Ai.scrollingSpeed, "internal")
        }

        function ut(t, e) {
            var i = Ie(t);
            "undefined" != typeof e ? Oe(t, e) : i.length > 0 && Vt(i)
        }

        function ht(t) {
            Ht("right", t)
        }

        function ft(t) {
            Ht("left", t)
        }

        function pt(e) {
            if (!vi.hasClass(u)) {
                gi = !0, mi = et.height(), t(w).each(function() {
                    var e = t(this).find(z),
                        i = t(this).find(O);
                    a.verticalCentered && t(this).find(T).css("height", $e(t(this)) + "px"), t(this).css("height", mi + "px"), a.scrollOverflow && (i.length ? i.each(function() {
                        De(t(this))
                    }) : De(t(this))), i.length > 1 && me(e, e.find(M))
                });
                var i = t(x),
                    n = i.index(w);
                n && dt(n + 1), gi = !1, t.isFunction(a.afterResize) && e && a.afterResize.call(vi), t.isFunction(a.afterReBuild) && !e && a.afterReBuild.call(vi)
            }
        }

        function vt(e) {
            var i = ai.hasClass(c);
            e ? i || (l(!1, "internal"), K(!1, "internal"), t(D).hide(), ai.addClass(c), t.isFunction(a.afterResponsive) && a.afterResponsive.call(vi, e)) : i && (l(Ai.autoScrolling, "internal"), K(Ai.autoScrolling, "internal"), t(D).show(), ai.removeClass(c), t.isFunction(a.afterResponsive) && a.afterResponsive.call(vi, e))
        }

        function mt() {
            return {
                options: a,
                internals: {
                    getXmovement: Ae,
                    removeAnimation: Ce,
                    getTransforms: Ze,
                    lazyLoad: Jt,
                    addAnimation: Se,
                    performHorizontalMove: ye,
                    silentLandscapeScroll: Ke,
                    keepSlidesPosition: qt,
                    silentScroll: Je,
                    styleSlides: xt
                }
            }
        }

        function gt() {
            a.css3 && (a.css3 = Ue()), a.scrollBar = a.scrollBar || a.hybrid, bt(), wt(), st(!0), l(a.autoScrolling, "internal");
            var e = t(x).find(M);
            e.length && (0 !== t(x).index(w) || 0 === t(x).index(w) && 0 !== e.index()) && Ke(e), xe(), Re(), "complete" === i.readyState && ne(), et.on("load", ne)
        }

        function yt() {
            et.on("scroll", Pt).on("hashchange", oe).blur(ue).resize(we), it.keydown(re).keyup(ae).on("click touchstart", D + " a", he).on("click touchstart", q, fe).on("click", $, se), t(w).on("click touchstart", V, de), a.normalScrollElements && (it.on("mouseenter", a.normalScrollElements, function() {
                rt(!1)
            }), it.on("mouseleave", a.normalScrollElements, function() {
                rt(!0)
            }))
        }

        function bt() {
            var e = vi.find(a.sectionSelector);
            a.anchors.length || (a.anchors = e.filter("[data-anchor]").map(function() {
                return t(this).data("anchor").toString()
            }).get()), a.navigationTooltips.length || (a.navigationTooltips = e.filter("[data-tooltip]").map(function() {
                return t(this).data("tooltip").toString()
            }).get())
        }

        function wt() {
            vi.css({
                height: "100%",
                position: "relative"
            }), vi.addClass(r), t("html").addClass(h), mi = et.height(), vi.removeClass(u), kt(), t(w).each(function(e) {
                var i = t(this),
                    n = i.find(O),
                    o = n.length;
                St(i, e), Ct(i, e), o > 0 ? xt(i, n, o) : a.verticalCentered && Fe(i)
            }), a.fixedElements && a.css3 && t(a.fixedElements).appendTo(ai), a.navigation && Et(), At(), a.scrollOverflow ? ("complete" === i.readyState && _t(), et.on("load", _t)) : $t()
        }

        function xt(e, i, n) {
            var o = 100 * n,
                r = 100 / n;
            i.wrapAll('<div class="' + j + '" />'), i.parent().wrap('<div class="' + L + '" />'), e.find(N).css("width", o + "%"), n > 1 && (a.controlArrows && Tt(e), a.slidesNavigation && Le(e, n)), i.each(function(e) {
                t(this).css("width", r + "%"), a.verticalCentered && Fe(t(this))
            });
            var s = e.find(M);
            s.length && (0 !== t(x).index(w) || 0 === t(x).index(w) && 0 !== s.index()) ? Ke(s) : i.eq(0).addClass(p)
        }

        function St(e, i) {
            i || 0 !== t(x).length || e.addClass(p), e.css("height", mi + "px"), a.paddingTop && e.css("padding-top", a.paddingTop), a.paddingBottom && e.css("padding-bottom", a.paddingBottom), "undefined" != typeof a.sectionsColor[i] && e.css("background-color", a.sectionsColor[i]), "undefined" != typeof a.anchors[i] && e.attr("data-anchor", a.anchors[i])
        }

        function Ct(e, i) {
            "undefined" != typeof a.anchors[i] && e.hasClass(p) && Ee(a.anchors[i], i), a.menu && a.css3 && t(a.menu).closest(s).length && t(a.menu).appendTo(ai)
        }

        function kt() {
            vi.find(a.sectionSelector).addClass(b), vi.find(a.slideSelector).addClass(B)
        }

        function Tt(t) {
            t.find(z).after('<div class="' + G + '"></div><div class="' + Z + '"></div>'), "#fff" != a.controlArrowColor && (t.find(tt).css("border-color", "transparent transparent transparent " + a.controlArrowColor), t.find(Q).css("border-color", "transparent " + a.controlArrowColor + " transparent transparent")), a.loopHorizontal || t.find(Q).hide()
        }

        function Et() {
            ai.append('<div id="' + A + '"><ul></ul></div>');
            var e = t(D);
            e.addClass(function() {
                return a.showActiveTooltip ? P + " " + a.navigationPosition : a.navigationPosition
            });
            for (var i = 0; i < t(w).length; i++) {
                var n = "";
                a.anchors.length && (n = a.anchors[i]);
                var o = '<li><a href="#' + n + '"><span></span></a>',
                    r = a.navigationTooltips[i];
                "undefined" != typeof r && "" !== r && (o += '<div class="' + F + " " + a.navigationPosition + '">' + r + "</div>"), o += "</li>", e.find("ul").append(o)
            }
            t(D).css("margin-top", "-" + t(D).height() / 2 + "px"), t(D).find("li").eq(t(x).index(w)).find("a").addClass(p)
        }

        function _t() {
            t(w).each(function() {
                var e = t(this).find(O);
                e.length ? e.each(function() {
                    De(t(this))
                }) : De(t(this))
            }), $t()
        }

        function At() {
            vi.find('iframe[src*="youtube.com/embed/"]').each(function() {
                Dt(t(this), "enablejsapi=1")
            })
        }

        function Dt(t, e) {
            var i = t.attr("src");
            t.attr("src", i + Ft(i) + e)
        }

        function Ft(t) {
            return /\?/.test(t) ? "&" : "?"
        }

        function $t() {
            var e = t(x);
            e.addClass(m), a.scrollOverflowHandler.afterRender && a.scrollOverflowHandler.afterRender(e), Jt(e), Zt(e), t.isFunction(a.afterLoad) && a.afterLoad.call(e, e.data("anchor"), e.index(w) + 1), t.isFunction(a.afterRender) && a.afterRender.call(vi)
        }

        function Pt() {
            var e;
            if (!a.autoScrolling || a.scrollBar) {
                var n = et.scrollTop(),
                    o = Bt(n),
                    r = 0,
                    s = n + et.height() / 2,
                    l = ai.height() - et.height() === n,
                    c = i.querySelectorAll(w);
                if (l) r = c.length - 1;
                else if (n)
                    for (var d = 0; d < c.length; ++d) {
                        var u = c[d];
                        u.offsetTop <= s && (r = d)
                    } else r = 0;
                if (It(o) && (t(x).hasClass(m) || t(x).addClass(m).siblings().removeClass(m)), e = t(c).eq(r), !e.hasClass(p)) {
                    Di = !0;
                    var h, f, v = t(x),
                        g = v.index(w) + 1,
                        y = _e(e),
                        b = e.data("anchor"),
                        S = e.index(w) + 1,
                        C = e.find(M);
                    C.length && (f = C.data("anchor"), h = C.index()), bi && (e.addClass(p).siblings().removeClass(p), t.isFunction(a.onLeave) && a.onLeave.call(v, g, S, y), t.isFunction(a.afterLoad) && a.afterLoad.call(e, b, S), ee(v), Jt(e), Zt(e), Ee(b, S - 1), a.anchors.length && (ci = b), ze(h, f, b, S)), clearTimeout(Ti), Ti = setTimeout(function() {
                        Di = !1
                    }, 100)
                }
                a.fitToSection && (clearTimeout(Ei), Ei = setTimeout(function() {
                    bi && a.fitToSection && (t(x).is(e) && (gi = !0), Vt(t(x)), gi = !1)
                }, a.fitToSectionDelay))
            }
        }

        function It(e) {
            var i = t(x).position().top,
                n = i + et.height();
            return "up" == e ? n >= et.scrollTop() + et.height() : i <= et.scrollTop()
        }

        function Bt(t) {
            var e = t > Fi ? "down" : "up";
            return Fi = t, Mi = t, e
        }

        function Ot(t, e) {
            if (xi.m[t]) {
                var i = "down" === t ? "bottom" : "top",
                    n = "down" === t ? ct : lt;
                if (e.length > 0) {
                    if (!a.scrollOverflowHandler.isScrolled(i, e)) return !0;
                    n()
                } else n()
            }
        }

        function Mt(t) {
            var e = t.originalEvent;
            a.autoScrolling && jt(e) && t.preventDefault()
        }

        function Lt(e) {
            var i = e.originalEvent,
                o = t(i.target).closest(w);
            if (!zt(e.target) && jt(i)) {
                a.autoScrolling && e.preventDefault();
                var r = a.scrollOverflowHandler.scrollable(o);
                if (bi && !hi) {
                    var s = Qe(i);
                    Ii = s.y, Bi = s.x, o.find(z).length && n.abs(Pi - Bi) > n.abs($i - Ii) ? n.abs(Pi - Bi) > et.outerWidth() / 100 * a.touchSensitivity && (Pi > Bi ? xi.m.right && ht(o) : xi.m.left && ft(o)) : a.autoScrolling && n.abs($i - Ii) > et.height() / 100 * a.touchSensitivity && ($i > Ii ? Ot("down", r) : Ii > $i && Ot("up", r))
                }
            }
        }

        function zt(e, i) {
            i = i || 0;
            var n = t(e).parent();
            return !!(i < a.normalScrollElementTouchThreshold && n.is(a.normalScrollElements)) || i != a.normalScrollElementTouchThreshold && zt(n, ++i)
        }

        function jt(t) {
            return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
        }

        function Nt(t) {
            var e = t.originalEvent;
            if (a.fitToSection && si.stop(), jt(e)) {
                var i = Qe(e);
                $i = i.y, Pi = i.x
            }
        }

        function Rt(t, e) {
            for (var i = 0, o = t.slice(n.max(t.length - e, 1)), r = 0; r < o.length; r++) i += o[r];
            return n.ceil(i / e)
        }

        function Ut(i) {
            var o = (new Date).getTime(),
                r = t(g).hasClass(_);
            if (a.autoScrolling && !ui && !r) {
                i = i || e.event;
                var s = i.wheelDelta || -i.deltaY || -i.detail,
                    l = n.max(-1, n.min(1, s)),
                    c = "undefined" != typeof i.wheelDeltaX || "undefined" != typeof i.deltaX,
                    d = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !c;
                wi.length > 149 && wi.shift(), wi.push(n.abs(s)), a.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
                var u = t(x),
                    h = a.scrollOverflowHandler.scrollable(u),
                    f = o - Oi;
                if (Oi = o, f > 200 && (wi = []), bi) {
                    var p = Rt(wi, 10),
                        v = Rt(wi, 70),
                        m = p >= v;
                    m && d && (l < 0 ? Ot("down", h) : Ot("up", h))
                }
                return !1
            }
            a.fitToSection && si.stop()
        }

        function Ht(e, i) {
            var n = "undefined" == typeof i ? t(x) : i,
                o = n.find(z),
                r = o.find(O).length;
            if (!(!o.length || hi || r < 2)) {
                var s = o.find(M),
                    l = null;
                if (l = "left" === e ? s.prev(O) : s.next(O), !l.length) {
                    if (!a.loopHorizontal) return;
                    l = "left" === e ? s.siblings(":last") : s.siblings(":first")
                }
                hi = !0, me(o, l, e)
            }
        }

        function qt() {
            t(M).each(function() {
                Ke(t(this), "internal")
            })
        }

        function Wt(t) {
            var e = t.position(),
                i = e.top,
                n = e.top > Mi,
                o = i - mi + t.outerHeight(),
                r = a.bigSectionsDestination;
            return t.outerHeight() > mi ? (n || r) && "bottom" !== r || (i = o) : (n || gi && t.is(":last-child")) && (i = o), Mi = i, i
        }

        function Vt(e, i, n) {
            if ("undefined" != typeof e) {
                var o, r, s = Wt(e),
                    l = {
                        element: e,
                        callback: i,
                        isMovementUp: n,
                        dtop: s,
                        yMovement: _e(e),
                        anchorLink: e.data("anchor"),
                        sectionIndex: e.index(w),
                        activeSlide: e.find(M),
                        activeSection: t(x),
                        leavingSection: t(x).index(w) + 1,
                        localIsResizing: gi
                    };
                l.activeSection.is(e) && !gi || a.scrollBar && et.scrollTop() === l.dtop && !e.hasClass(E) || (l.activeSlide.length && (o = l.activeSlide.data("anchor"), r = l.activeSlide.index()), a.autoScrolling && a.continuousVertical && "undefined" != typeof l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = Gt(l)), t.isFunction(a.onLeave) && !l.localIsResizing && a.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement) === !1 || (ee(l.activeSection), a.scrollOverflowHandler.beforeLeave(), e.addClass(p).siblings().removeClass(p), Jt(e), a.scrollOverflowHandler.onLeave(), bi = !1, ze(r, o, l.anchorLink, l.sectionIndex), Xt(l), ci = l.anchorLink, Ee(l.anchorLink, l.sectionIndex)))
            }
        }

        function Xt(e) {
            if (a.css3 && a.autoScrolling && !a.scrollBar) {
                var i = "translate3d(0px, -" + n.round(e.dtop) + "px, 0px)";
                Pe(i, !0), a.scrollingSpeed ? (clearTimeout(Ci), Ci = setTimeout(function() {
                    Kt(e)
                }, a.scrollingSpeed)) : Kt(e)
            } else {
                var o = Yt(e);
                t(o.element).animate(o.options, a.scrollingSpeed, a.easing).promise().done(function() {
                    a.scrollBar ? setTimeout(function() {
                        Kt(e)
                    }, 30) : Kt(e)
                })
            }
        }

        function Yt(t) {
            var e = {};
            return a.autoScrolling && !a.scrollBar ? (e.options = {
                top: -t.dtop
            }, e.element = s) : (e.options = {
                scrollTop: t.dtop
            }, e.element = "html, body"), e
        }

        function Gt(e) {
            return e.isMovementUp ? t(x).before(e.activeSection.nextAll(w)) : t(x).after(e.activeSection.prevAll(w).get().reverse()), Je(t(x).position().top), qt(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.position().top, e.yMovement = _e(e.element), e
        }

        function Qt(e) {
            e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(S).before(e.wrapAroundElements) : t(C).after(e.wrapAroundElements), Je(t(x).position().top), qt())
        }

        function Kt(e) {
            Qt(e), t.isFunction(a.afterLoad) && !e.localIsResizing && a.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), a.scrollOverflowHandler.afterLoad(), Zt(e.element), e.element.addClass(m).siblings().removeClass(m), bi = !0, t.isFunction(e.callback) && e.callback.call(this)
        }

        function Jt(e) {
            if (a.lazyLoading) {
                var i, n = ie(e);
                n.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    i = t(this), i.attr("src", i.data("src")), i.removeAttr("data-src"), i.is("source") && i.closest("video").get(0).load()
                })
            }
        }

        function Zt(e) {
            var i = ie(e);
            i.find("video, audio").each(function() {
                var e = t(this).get(0);
                e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
            }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var e = t(this).get(0);
                e.hasAttribute("data-autoplay") && te(e), e.onload = function() {
                    e.hasAttribute("data-autoplay") && te(e)
                }
            })
        }

        function te(t) {
            t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function ee(e) {
            var i = ie(e);
            i.find("video, audio").each(function() {
                var e = t(this).get(0);
                e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
            }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var e = t(this).get(0);
                /youtube\.com\/embed\//.test(t(this).attr("src")) && !e.hasAttribute("data-keepplaying") && t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function ie(e) {
            var i = e.find(M);
            return i.length && (e = t(i)), e
        }

        function ne() {
            var t = e.location.hash.replace("#", "").split("/"),
                i = decodeURIComponent(t[0]),
                n = decodeURIComponent(t[1]);
            i && (a.animateAnchor ? Oe(i, n) : dt(i, n))
        }

        function oe() {
            if (!Di && !a.lockAnchors) {
                var t = e.location.hash.replace("#", "").split("/"),
                    i = decodeURIComponent(t[0]),
                    n = decodeURIComponent(t[1]),
                    o = "undefined" == typeof ci,
                    r = "undefined" == typeof ci && "undefined" == typeof n && !hi;
                i.length && (i && i !== ci && !o || r || !hi && di != n) && Oe(i, n)
            }
        }

        function re(e) {
            clearTimeout(_i);
            var i = t(":focus");
            if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && a.keyboardScrolling && a.autoScrolling) {
                var n = e.which,
                    o = [40, 38, 32, 33, 34];
                t.inArray(n, o) > -1 && e.preventDefault(), ui = e.ctrlKey, _i = setTimeout(function() {
                    pe(e)
                }, 150)
            }
        }

        function se() {
            t(this).prev().trigger("click")
        }

        function ae(t) {
            yi && (ui = t.ctrlKey)
        }

        function le(t) {
            2 == t.which && (Li = t.pageY, vi.on("mousemove", ve))
        }

        function ce(t) {
            2 == t.which && vi.off("mousemove")
        }

        function de() {
            var e = t(this).closest(w);
            t(this).hasClass(X) ? xi.m.left && ft(e) : xi.m.right && ht(e)
        }

        function ue() {
            yi = !1, ui = !1
        }

        function he(e) {
            e.preventDefault();
            var i = t(this).parent().index();
            Vt(t(w).eq(i))
        }

        function fe(e) {
            e.preventDefault();
            var i = t(this).closest(w).find(z),
                n = i.find(O).eq(t(this).closest("li").index());
            me(i, n)
        }

        function pe(e) {
            var i = e.shiftKey;
            switch (e.which) {
                case 38:
                case 33:
                    xi.k.up && lt();
                    break;
                case 32:
                    if (i && xi.k.up) {
                        lt();
                        break
                    }
                    case 40:
                    case 34:
                        xi.k.down && ct();
                        break;
                    case 36:
                        xi.k.up && ut(1);
                        break;
                    case 35:
                        xi.k.down && ut(t(w).length);
                        break;
                    case 37:
                        xi.k.left && ft();
                        break;
                    case 39:
                        xi.k.right && ht();
                        break;
                    default:
                        return
            }
        }

        function ve(t) {
            bi && (t.pageY < Li && xi.m.up ? lt() : t.pageY > Li && xi.m.down && ct()), Li = t.pageY
        }

        function me(e, i, n) {
            var o = e.closest(w),
                r = {
                    slides: e,
                    destiny: i,
                    direction: n,
                    destinyPos: i.position(),
                    slideIndex: i.index(),
                    section: o,
                    sectionIndex: o.index(w),
                    anchorLink: o.data("anchor"),
                    slidesNav: o.find(H),
                    slideAnchor: Ne(i),
                    prevSlide: o.find(M),
                    prevSlideIndex: o.find(M).index(),
                    localIsResizing: gi
                };
            return r.xMovement = Ae(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (bi = !1), a.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && t.isFunction(a.onSlideLeave) && a.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex) === !1 ? void(hi = !1) : (i.addClass(p).siblings().removeClass(p), r.localIsResizing || (ee(r.prevSlide), Jt(i)), !a.loopHorizontal && a.controlArrows && (o.find(Q).toggle(0 !== r.slideIndex), o.find(tt).toggle(!i.is(":last-child"))), o.hasClass(p) && ze(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), void ye(e, r, !0))
        }

        function ge(e) {
            be(e.slidesNav, e.slideIndex), e.localIsResizing || (t.isFunction(a.afterSlideLoad) && a.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), bi = !0), Zt(e.destiny), hi = !1
        }

        function ye(t, e, i) {
            var o = e.destinyPos;
            if (a.css3) {
                var r = "translate3d(-" + n.round(o.left) + "px, 0px, 0px)";
                Se(t.find(N)).css(Ze(r)), ki = setTimeout(function() {
                    i && ge(e)
                }, a.scrollingSpeed, a.easing)
            } else t.animate({
                scrollLeft: n.round(o.left)
            }, a.scrollingSpeed, a.easing, function() {
                i && ge(e)
            })
        }

        function be(t, e) {
            t.find(v).removeClass(p), t.find("li").eq(e).find("a").addClass(p)
        }

        function we() {
            if (xe(), fi) {
                var e = t(i.activeElement);
                if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
                    var o = et.height();
                    n.abs(o - zi) > 20 * n.max(zi, o) / 100 && (pt(!0), zi = o)
                }
            } else clearTimeout(Si), Si = setTimeout(function() {
                pt(!0)
            }, 350)
        }

        function xe() {
            var t = a.responsive || a.responsiveWidth,
                e = a.responsiveHeight,
                i = t && et.outerWidth() < t,
                n = e && et.height() < e;
            t && e ? vt(i || n) : t ? vt(i) : e && vt(n)
        }

        function Se(t) {
            var e = "all " + a.scrollingSpeed + "ms " + a.easingcss3;
            return t.removeClass(d), t.css({
                "-webkit-transition": e,
                transition: e
            })
        }

        function Ce(t) {
            return t.addClass(d)
        }

        function ke(e, i) {
            a.navigation && (t(D).find(v).removeClass(p), e ? t(D).find('a[href="#' + e + '"]').addClass(p) : t(D).find("li").eq(i).find("a").addClass(p))
        }

        function Te(e) {
            a.menu && (t(a.menu).find(v).removeClass(p), t(a.menu).find('[data-menuanchor="' + e + '"]').addClass(p))
        }

        function Ee(t, e) {
            Te(t), ke(t, e)
        }

        function _e(e) {
            var i = t(x).index(w),
                n = e.index(w);
            return i == n ? "none" : i > n ? "up" : "down"
        }

        function Ae(t, e) {
            return t == e ? "none" : t > e ? "left" : "right"
        }

        function De(t) {
            if (!t.hasClass("fp-noscroll")) {
                t.css("overflow", "hidden");
                var e, i = a.scrollOverflowHandler,
                    n = i.wrapContent(),
                    o = t.closest(w),
                    r = i.scrollable(t);
                r.length ? e = i.scrollHeight(t) : (e = t.get(0).scrollHeight, a.verticalCentered && (e = t.find(T).get(0).scrollHeight));
                var s = mi - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
                e > s ? r.length ? i.update(t, s) : (a.verticalCentered ? t.find(T).wrapInner(n) : t.wrapInner(n), i.create(t, s)) : i.remove(t), t.css("overflow", "")
            }
        }

        function Fe(t) {
            t.hasClass(R) || t.addClass(R).wrapInner('<div class="' + k + '" style="height:' + $e(t) + 'px;" />')
        }

        function $e(t) {
            var e = mi;
            if (a.paddingTop || a.paddingBottom) {
                var i = t;
                i.hasClass(b) || (i = t.closest(w));
                var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                e = mi - n
            }
            return e
        }

        function Pe(t, e) {
            e ? Se(vi) : Ce(vi), vi.css(Ze(t)), setTimeout(function() {
                vi.removeClass(d)
            }, 10)
        }

        function Ie(e) {
            var i = vi.find(w + '[data-anchor="' + e + '"]');
            return i.length || (i = t(w).eq(e - 1)), i
        }

        function Be(t, e) {
            var i = e.find(z),
                n = i.find(O + '[data-anchor="' + t + '"]');
            return n.length || (n = i.find(O).eq(t)), n
        }

        function Oe(t, e) {
            var i = Ie(t);
            i.length && ("undefined" == typeof e && (e = 0), t === ci || i.hasClass(p) ? Me(i, e) : Vt(i, function() {
                Me(i, e)
            }))
        }

        function Me(t, e) {
            if ("undefined" != typeof e) {
                var i = t.find(z),
                    n = Be(e, t);
                n.length && me(i, n)
            }
        }

        function Le(t, e) {
            t.append('<div class="' + U + '"><ul></ul></div>');
            var i = t.find(H);
            i.addClass(a.slidesNavPosition);
            for (var n = 0; n < e; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
            i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(p)
        }

        function ze(t, e, i, n) {
            var o = "";
            a.anchors.length && !a.lockAnchors && (t ? ("undefined" != typeof i && (o = i), "undefined" == typeof e && (e = t), di = e, je(o + "/" + e)) : "undefined" != typeof t ? (di = e, je(i)) : je(i)), Re()
        }

        function je(t) {
            if (a.recordHistory) location.hash = t;
            else if (fi || pi) e.history.replaceState(o, o, "#" + t);
            else {
                var i = e.location.href.split("#")[0];
                e.location.replace(i + "#" + t)
            }
        }

        function Ne(t) {
            var e = t.data("anchor"),
                i = t.index();
            return "undefined" == typeof e && (e = i), e
        }

        function Re() {
            var e = t(x),
                i = e.find(M),
                n = Ne(e),
                o = Ne(i),
                r = String(n);
            i.length && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
            var s = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
            ai[0].className = ai[0].className.replace(s, ""), ai.addClass(f + "-" + r)
        }

        function Ue() {
            var t, n = i.createElement("p"),
                r = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            i.body.insertBefore(n, null);
            for (var s in r) n.style[s] !== o && (n.style[s] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(r[s]));
            return i.body.removeChild(n), t !== o && t.length > 0 && "none" !== t
        }

        function He() {
            i.addEventListener ? (i.removeEventListener("mousewheel", Ut, !1), i.removeEventListener("wheel", Ut, !1), i.removeEventListener("MozMousePixelScroll", Ut, !1)) : i.detachEvent("onmousewheel", Ut);
        }

        function qe() {
            var t, n = "";
            e.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
            var r = "onwheel" in i.createElement("div") ? "wheel" : i.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? i[t](n + "MozMousePixelScroll", Ut, !1) : i[t](n + r, Ut, !1)
        }

        function We() {
            vi.on("mousedown", le).on("mouseup", ce)
        }

        function Ve() {
            vi.off("mousedown", le).off("mouseup", ce)
        }

        function Xe() {
            if (a.autoScrolling && (fi || pi)) {
                var e = Ge();
                ai.off("touchmove " + e.move).on("touchmove " + e.move, Mt), t(s).off("touchstart " + e.down).on("touchstart " + e.down, Nt).off("touchmove " + e.move).on("touchmove " + e.move, Lt)
            }
        }

        function Ye() {
            if (fi || pi) {
                var e = Ge();
                t(s).off("touchstart " + e.down).off("touchmove " + e.move)
            }
        }

        function Ge() {
            var t;
            return t = e.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function Qe(t) {
            var e = [];
            return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, pi && jt(t) && a.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
        }

        function Ke(t, e) {
            Y(0, "internal"), "undefined" != typeof e && (gi = !0), me(t.closest(z), t), "undefined" != typeof e && (gi = !1), Y(Ai.scrollingSpeed, "internal")
        }

        function Je(t) {
            var e = n.round(t);
            if (a.scrollBar) vi.scrollTop(e);
            else if (a.css3) {
                var i = "translate3d(0px, -" + e + "px, 0px)";
                Pe(i, !1)
            } else vi.css("top", -e)
        }

        function Ze(t) {
            return {
                "-webkit-transform": t,
                "-moz-transform": t,
                "-ms-transform": t,
                transform: t
            }
        }

        function ti(t, e, i) {
            switch (e) {
                case "up":
                    xi[i].up = t;
                    break;
                case "down":
                    xi[i].down = t;
                    break;
                case "left":
                    xi[i].left = t;
                    break;
                case "right":
                    xi[i].right = t;
                    break;
                case "all":
                    "m" == i ? st(t) : at(t)
            }
        }

        function ei(e) {
            l(!1, "internal"), st(!1), at(!1), vi.addClass(u), clearTimeout(ki), clearTimeout(Ci), clearTimeout(Si), clearTimeout(Ti), clearTimeout(Ei), et.off("scroll", Pt).off("hashchange", oe).off("resize", we), it.off("click touchstart", D + " a").off("mouseenter", D + " li").off("mouseleave", D + " li").off("click touchstart", q).off("mouseover", a.normalScrollElements).off("mouseout", a.normalScrollElements), t(w).off("click touchstart", V), clearTimeout(ki), clearTimeout(Ci), e && ii()
        }

        function ii() {
            Je(0), vi.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src")
            }), t(D + ", " + H + ", " + V).remove(), t(w).css({
                height: "",
                "background-color": "",
                padding: ""
            }), t(O).css({
                width: ""
            }), vi.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), si.css({
                overflow: "",
                height: ""
            }), t("html").removeClass(h), ai.removeClass(c), t.each(ai.get(0).className.split(/\s+/), function(t, e) {
                0 === e.indexOf(f) && ai.removeClass(e)
            }), t(w + ", " + O).each(function() {
                a.scrollOverflowHandler.remove(t(this)), t(this).removeClass(R + " " + p)
            }), Ce(vi), vi.find(T + ", " + N + ", " + z).each(function() {
                t(this).replaceWith(this.childNodes)
            }), si.scrollTop(0);
            var e = [b, B, j];
            t.each(e, function(e, i) {
                t("." + i).removeClass(i)
            })
        }

        function ni(t, e, i) {
            a[t] = e, "internal" !== i && (Ai[t] = e)
        }

        function oi() {
            var e = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides"];
            return t("html").hasClass(h) ? void ri("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (a.continuousVertical && (a.loopTop || a.loopBottom) && (a.continuousVertical = !1, ri("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.scrollBar && a.scrollOverflow && ri("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), a.continuousVertical && a.scrollBar && (a.continuousVertical = !1, ri("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.forEach(function(t) {
                a[t] && ri("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
            }), void t.each(a.anchors, function(e, i) {
                var n = it.find("[name]").filter(function() {
                        return t(this).attr("name") && t(this).attr("name").toLowerCase() == i.toLowerCase()
                    }),
                    o = it.find("[id]").filter(function() {
                        return t(this).attr("id") && t(this).attr("id").toLowerCase() == i.toLowerCase()
                    });
                (o.length || n.length) && (ri("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && ri("error", '"' + i + '" is is being used by another element `id` property'), n.length && ri("error", '"' + i + '" is is being used by another element `name` property'))
            }))
        }

        function ri(t, e) {
            console && console[t] && console[t]("fullPage: " + e)
        }
        if (t("html").hasClass(h)) return void oi();
        var si = t("html, body"),
            ai = t("body"),
            li = t.fn.fullpage;
        a = t.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowHandler: ot,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            sectionSelector: y,
            slideSelector: I,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, a);
        var ci, di, ui, hi = !1,
            fi = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            pi = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            vi = t(this),
            mi = et.height(),
            gi = !1,
            yi = !0,
            bi = !0,
            wi = [],
            xi = {};
        xi.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, xi.k = t.extend(!0, {}, xi.m);
        var Si, Ci, ki, Ti, Ei, _i, Ai = t.extend(!0, {}, a);
        oi(), nt.click = pi, nt = t.extend(nt, a.scrollOverflowOptions), t.extend(t.easing, {
            easeInOutCubic: function(t, e, i, n, o) {
                return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
            }
        }), t(this).length && (li.setAutoScrolling = l, li.setRecordHistory = W, li.setScrollingSpeed = Y, li.setFitToSection = K, li.setLockAnchors = J, li.setMouseWheelScrolling = rt, li.setAllowScrolling = st, li.setKeyboardScrolling = at, li.moveSectionUp = lt, li.moveSectionDown = ct, li.silentMoveTo = dt, li.moveTo = ut, li.moveSlideRight = ht, li.moveSlideLeft = ft, li.reBuild = pt, li.setResponsive = vt, li.getFullpageData = mt, li.destroy = ei, gt(), yt());
        var Di = !1,
            Fi = 0,
            $i = 0,
            Pi = 0,
            Ii = 0,
            Bi = 0,
            Oi = (new Date).getTime(),
            Mi = 0,
            Li = 0,
            zi = mi
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var ot = {
        refreshId: null,
        iScrollInstances: [],
        onLeave: function() {
            var e = t(x).find(l).data("iscrollInstance");
            "undefined" != typeof e && e && e.wheelOff()
        },
        beforeLeave: function() {
            ot.onLeave()
        },
        afterLoad: function() {
            var e = t(x).find(l).data("iscrollInstance");
            "undefined" != typeof e && e && e.wheelOn()
        },
        create: function(e, i) {
            var n = e.find(l);
            n.height(i), n.each(function() {
                var e = jQuery(this),
                    i = e.data("iscrollInstance");
                i && t.each(ot.iScrollInstances, function() {
                    t(this).destroy()
                }), i = new IScroll(e.get(0), nt), ot.iScrollInstances.push(i), i.wheelOff(), e.data("iscrollInstance", i)
            })
        },
        isScrolled: function(t, e) {
            var i = e.data("iscrollInstance");
            return !i || ("top" === t ? i.y >= 0 && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)
        },
        scrollable: function(t) {
            return t.find(z).length ? t.find(M).find(l) : t.find(l)
        },
        scrollHeight: function(t) {
            return t.find(l).children().first().get(0).scrollHeight
        },
        remove: function(t) {
            var e = t.find(l);
            if (e.length) {
                var i = e.data("iscrollInstance");
                i.destroy(), e.data("iscrollInstance", null)
            }
            t.find(l).children().first().children().first().unwrap().unwrap()
        },
        update: function(e, i) {
            clearTimeout(ot.refreshId), ot.refreshId = setTimeout(function() {
                t.each(ot.iScrollInstances, function() {
                    t(this).get(0).refresh()
                })
            }, 150), e.find(l).css("height", i + "px").parent().css("height", i + "px")
        },
        wrapContent: function() {
            return '<div class="' + a + '"><div class="fp-scroller"></div></div>'
        }
    }
}), ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var i = 0;
        return e
    }(), e.prototype.activateADA = function() {
        var t = this;
        t.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (0 > i || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, i) {
        var n = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i
    }, e.prototype.asNavFor = function(e) {
        var i = this,
            n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; o > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * s + (e * a.options.slidesPerRow + i);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var n, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }, e.prototype.changeSlide = function(e, i) {
        var n, o, r, s = this,
            a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i, n = this;
        if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = i;
                    break
                }
                i = e[o]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function(t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            n = 0;
        if (t.options.infinite === !0)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0) n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function(t) {
        var e, i, n, o = this,
            r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this;
        return e.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            n = 0,
            o = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, i, n, o = this;
        return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, r) {
            return r.offsetLeft - n + t(r).outerWidth() / 2 > -1 * o.swipeLeft ? (i = r, !1) : void 0
        }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, i])
                    })
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                }, n.src = i
            })
        }
        var i, n, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), i = s.$slider.find(".slick-slide").slice(o, r), e(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), e(n))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, o, r = this,
            s = t("img[data-lazy]", r.$slider);
        s.length ? (i = s.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
        }, o.onerror = function() {
            3 > e ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
        }, o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }, e.prototype.refresh = function(e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, i, n, o = this,
            r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in r)
                if (n = o.breakpoints.length - 1, i = r[e].breakpoint, r.hasOwnProperty(e)) {
                    for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
                } o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function(t) {
        var e, i, n = this,
            o = {};
        n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, o) {
            e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, o, r, s = this,
            a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
        else if ("multiple" === r) t.each(n, function(t, e) {
            s.options[t] = e
        });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[i]];
                else {
                    for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                    s.options.responsive.push(o[i])
                } a && (s.unload(), s.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, n, o, r = this;
        i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, i, n, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t
    }, e.prototype.selectHandler = function(e) {
        var i = this,
            n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
    }, e.prototype.slideHandler = function(t, e, i) {
        var n, o, r, s, a, l = null,
            c = this;
        return e = e || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > n ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
            c.postSlide(o)
        })) : c.postSlide(o), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
            c.postSlide(o)
        }) : c.postSlide(o))))
    }, e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, n, o, r, s = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), i = s.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = e + n * o : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * o), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function() {
        var t, i, n = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = n.length;
        for (t = 0; s > t; t++)
            if ("object" == typeof o || "undefined" == typeof o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), "undefined" != typeof i) return i;
        return n
    }
}),
function() {
    var t, e, i, n, o, r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        s = [].indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var i, n;
            for (i in e) n = e[i], null == t[i] && (t[i] = n);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, i, n) {
            var o;
            return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, i) {
            return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
        }, t.prototype.removeEvent = function(t, e, i) {
            return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, i, n, o, r;
            for (r = this.keys, e = n = 0, o = r.length; n < o; e = ++n)
                if (i = r[e], i === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var i, n, o, r, s;
            for (s = this.keys, i = o = 0, r = s.length; o < r; i = ++o)
                if (n = s[i], n === t) return void(this.values[i] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), n = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var i;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, i, n, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, i, n, o;
                    for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; t < i; t++) e = n[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, i, n, o;
                    for (n = this.boxes, o = [], t = 0, i = n.length; t < i; t++) e = n[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, i = 0, n = o.length; i < n; i++) e = o[i], this.applyStyle(e, !0);
            if (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t(function(t) {
                return function(e) {
                    var i, n, o, r, s;
                    for (s = [], i = 0, n = e.length; i < n; i++) r = e[i], s.push(function() {
                        var t, e, i, n;
                        for (i = r.addedNodes || [], n = [], t = 0, e = i.length; t < e; t++) o = i[t], n.push(this.doSync(o));
                        return n
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }, o.prototype.stop = function() {
            if (this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
        }, o.prototype.sync = function(e) {
            if (t.notSupported) return this.doSync(this.element)
        }, o.prototype.doSync = function(t) {
            var e, i, n, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], i = 0, n = o.length; i < n; i++) e = o[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var i, n, o;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(t, e, n, i, o)
                }
            }(this))
        }, o.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }
        }(), o.prototype.resetStyle = function() {
            var t, e, i, n, o;
            for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) t = n[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            if (t.type.toLowerCase().indexOf("animationend") >= 0) return e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()
        }, o.prototype.customStyle = function(t, e, i, n, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                animationDuration: i
            }), n && this.vendorSet(t.style, {
                animationDelay: n
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var i, n, o, r;
            n = [];
            for (i in e) o = e[i], t["" + i] = o, n.push(function() {
                var e, n, s, a;
                for (s = this.vendors, a = [], e = 0, n = s.length; e < n; e++) r = s[e], a.push(t["" + r + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                return a
            }.call(this));
            return n
        }, o.prototype.vendorCSS = function(t, e) {
            var i, o, r, s, a, l;
            for (a = n(t), s = a.getPropertyCSSValue(e), r = this.vendors, i = 0, o = r.length; i < o; i++) l = r[i], s = s || a.getPropertyCSSValue("-" + l + "-" + e);
            return s
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (i) {
                e = n(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, i, n, o, r;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, n <= o && e >= r
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var s = e || window.event,
                a = l.call(arguments, 1),
                c = 0,
                u = 0,
                h = 0,
                f = 0,
                p = 0,
                v = 0;
            if (e = t.event.fix(s), e.type = "mousewheel", "detail" in s && (h = s.detail * -1), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (u = s.wheelDeltaX * -1), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (u = h * -1, h = 0), c = 0 === h ? u : h, "deltaY" in s && (h = s.deltaY * -1, c = h), "deltaX" in s && (u = s.deltaX, 0 === h && (c = u * -1)), 0 !== h || 0 !== u) {
                if (1 === s.deltaMode) {
                    var m = t.data(this, "mousewheel-line-height");
                    c *= m, h *= m, u *= m
                } else if (2 === s.deltaMode) {
                    var g = t.data(this, "mousewheel-page-height");
                    c *= g, h *= g, u *= g
                }
                if (f = Math.max(Math.abs(h), Math.abs(u)), (!r || f < r) && (r = f, n(s, f) && (r /= 40)), n(s, f) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), h = Math[h >= 1 ? "floor" : "ceil"](h / r), d.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    p = e.clientX - y.left, v = e.clientY - y.top
                }
                return e.deltaX = u, e.deltaY = h, e.deltaFactor = r, e.offsetX = p, e.offsetY = v, e.deltaMode = 0, a.unshift(e, c, u, h), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function i() {
            r = null
        }

        function n(t, e) {
            return d.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }
        var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
        var d = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = a.length; i;) this.addEventListener(a[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", d.getLineHeight(this)), t.data(this, "mousewheel-page-height", d.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        var e = !1;
        if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
            var i = window.Cookies,
                n = window.Cookies = t();
            n.noConflict = function() {
                return window.Cookies = i, n
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) e[n] = i[n]
            }
            return e
        }

        function e(i) {
            function n(e, o, r) {
                var s;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (r = t({
                                path: "/"
                            }, n.defaults, r), "number" == typeof r.expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires), r.expires = a
                        }
                        try {
                            s = JSON.stringify(o), /^[\{\[]/.test(s) && (o = s)
                        } catch (l) {}
                        return o = i.write ? i.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape), document.cookie = [e, "=", o, r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
                    }
                    e || (s = {});
                    for (var c = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < c.length; u++) {
                        var h = c[u].split("="),
                            f = h.slice(1).join("=");
                        '"' === f.charAt(0) && (f = f.slice(1, -1));
                        try {
                            var p = h[0].replace(d, decodeURIComponent);
                            if (f = i.read ? i.read(f, p) : i(f, p) || f.replace(d, decodeURIComponent), this.json) try {
                                f = JSON.parse(f)
                            } catch (l) {}
                            if (e === p) {
                                s = f;
                                break
                            }
                            e || (s[p] = f)
                        } catch (l) {}
                    }
                    return s
                }
            }
            return n.set = n, n.get = function(t) {
                return n.call(n, t)
            }, n.getJSON = function() {
                return n.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, n.defaults = {}, n.remove = function(e, i) {
                n(e, "", t(i, {
                    expires: -1
                }))
            }, n.withConverter = e, n
        }
        return e(function() {})
    }), + function(t) {
        "use strict";

        function e(e) {
            return e.is('[type="checkbox"]') ? e.prop("checked") : e.is('[type="radio"]') ? !!t('[name="' + e.attr("name") + '"]:checked').length : e.is("select[multiple]") ? +e.val() ? e.val() : null : e.val()
        }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                    r = i.data("bs.validator");
                (r || "destroy" != e) && (r || i.data("bs.validator", r = new n(this, o)), "string" == typeof e && r[e]())
            })
        }
        var n = function(i, o) {
            this.options = o, this.validators = t.extend({}, n.VALIDATORS, o.custom), this.$element = t(i), this.$btn = t('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", t.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", t.proxy(this.reset, this)), this.$element.find("[data-match]").each(function() {
                var i = t(this),
                    n = i.data("match");
                t(n).on("input.bs.validator", function(t) {
                    e(i) && i.trigger("input.bs.validator")
                })
            }), this.$inputs.filter(function() {
                return e(t(this)) && !t(this).closest(".has-error").length
            }).trigger("focusout"), this.$element.attr("novalidate", !0)
        };
        n.VERSION = "0.11.8", n.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', n.FOCUS_OFFSET = 20, n.DEFAULTS = {
            delay: 500,
            html: !1,
            disable: !0,
            focus: !0,
            custom: {},
            errors: {
                match: "Does not match",
                minlength: "Not long enough"
            },
            feedback: {
                success: "glyphicon-ok",
                error: "glyphicon-remove"
            }
        }, n.VALIDATORS = {
            "native": function(t) {
                var e = t[0];
                if (e.checkValidity) return !e.checkValidity() && !e.validity.valid && (e.validationMessage || "error!")
            },
            match: function(e) {
                var i = e.data("match");
                return e.val() !== t(i).val() && n.DEFAULTS.errors.match
            },
            minlength: function(t) {
                var e = t.data("minlength");
                return t.val().length < e && n.DEFAULTS.errors.minlength
            }
        }, n.prototype.update = function() {
            var e = this;
            return this.$inputs = this.$element.find(n.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function() {
                e.clearErrors(t(this))
            })), this.toggleSubmit(), this
        }, n.prototype.onInput = function(e) {
            var i = this,
                n = t(e.target),
                o = "focusout" !== e.type;
            this.$inputs.is(n) && this.validateInput(n, o).done(function() {
                i.toggleSubmit()
            })
        }, n.prototype.validateInput = function(i, n) {
            var o = (e(i), i.data("bs.validator.errors"));
            i.is('[type="radio"]') && (i = this.$element.find('input[name="' + i.attr("name") + '"]'));
            var r = t.Event("validate.bs.validator", {
                relatedTarget: i[0]
            });
            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                var s = this;
                return this.runValidators(i).done(function(e) {
                    i.data("bs.validator.errors", e), e.length ? n ? s.defer(i, s.showErrors) : s.showErrors(i) : s.clearErrors(i), o && e.toString() === o.toString() || (r = e.length ? t.Event("invalid.bs.validator", {
                        relatedTarget: i[0],
                        detail: e
                    }) : t.Event("valid.bs.validator", {
                        relatedTarget: i[0],
                        detail: o
                    }), s.$element.trigger(r)), s.toggleSubmit(), s.$element.trigger(t.Event("validated.bs.validator", {
                        relatedTarget: i[0]
                    }))
                })
            }
        }, n.prototype.runValidators = function(i) {
            function n(t) {
                return i.data(t + "-error")
            }

            function o() {
                var t = i[0].validity;
                return t.typeMismatch ? i.data("type-error") : t.patternMismatch ? i.data("pattern-error") : t.stepMismatch ? i.data("step-error") : t.rangeOverflow ? i.data("max-error") : t.rangeUnderflow ? i.data("min-error") : t.valueMissing ? i.data("required-error") : null
            }

            function r() {
                return i.data("error")
            }

            function s(t) {
                return n(t) || o() || r()
            }
            var a = [],
                l = t.Deferred();
            return i.data("bs.validator.deferred") && i.data("bs.validator.deferred").reject(), i.data("bs.validator.deferred", l), t.each(this.validators, t.proxy(function(t, n) {
                var o = null;
                (e(i) || i.attr("required")) && (i.data(t) || "native" == t) && (o = n.call(this, i)) && (o = s(t) || o, !~a.indexOf(o) && a.push(o))
            }, this)), !a.length && e(i) && i.data("remote") ? this.defer(i, function() {
                var n = {};
                n[i.attr("name")] = e(i), t.get(i.data("remote"), n).fail(function(t, e, i) {
                    a.push(s("remote") || i)
                }).always(function() {
                    l.resolve(a)
                })
            }) : l.resolve(a), l.promise()
        }, n.prototype.validate = function() {
            var e = this;
            return t.when(this.$inputs.map(function(i) {
                return e.validateInput(t(this), !1)
            })).then(function() {
                e.toggleSubmit(), e.focusError()
            }), this
        }, n.prototype.focusError = function() {
            if (this.options.focus) {
                var e = this.$element.find(".has-error:first :input");
                0 !== e.length && (t("html, body").animate({
                    scrollTop: e.offset().top - n.FOCUS_OFFSET
                }, 250), e.focus())
            }
        }, n.prototype.showErrors = function(e) {
            var i = this.options.html ? "html" : "text",
                n = e.data("bs.validator.errors"),
                o = e.closest(".form-group"),
                r = o.find(".help-block.with-errors"),
                s = o.find(".form-control-feedback");
            n.length && (n = t("<ul/>").addClass("list-unstyled").append(t.map(n, function(e) {
                return t("<li/>")[i](e)
            })), void 0 === r.data("bs.validator.originalContent") && r.data("bs.validator.originalContent", r.html()), r.empty().append(n), o.addClass("has-error has-danger"), o.hasClass("has-feedback") && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && o.removeClass("has-success"))
        }, n.prototype.clearErrors = function(t) {
            var i = t.closest(".form-group"),
                n = i.find(".help-block.with-errors"),
                o = i.find(".form-control-feedback");
            n.html(n.data("bs.validator.originalContent")), i.removeClass("has-error has-danger has-success"), i.hasClass("has-feedback") && o.removeClass(this.options.feedback.error) && o.removeClass(this.options.feedback.success) && e(t) && o.addClass(this.options.feedback.success) && i.addClass("has-success")
        }, n.prototype.hasErrors = function() {
            function e() {
                return !!(t(this).data("bs.validator.errors") || []).length
            }
            return !!this.$inputs.filter(e).length
        }, n.prototype.isIncomplete = function() {
            function i() {
                var i = e(t(this));
                return !("string" == typeof i ? t.trim(i) : i)
            }
            return !!this.$inputs.filter("[required]").filter(i).length
        }, n.prototype.onSubmit = function(t) {
            this.validate(), (this.isIncomplete() || this.hasErrors()) && t.preventDefault()
        }, n.prototype.toggleSubmit = function() {
            this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors())
        }, n.prototype.defer = function(e, i) {
            return i = t.proxy(i, this, e), this.options.delay ? (window.clearTimeout(e.data("bs.validator.timeout")), void e.data("bs.validator.timeout", window.setTimeout(i, this.options.delay))) : i()
        }, n.prototype.reset = function() {
            return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
                var e = t(this),
                    i = e.data("bs.validator.timeout");
                window.clearTimeout(i) && e.removeData("bs.validator.timeout")
            }), this.$element.find(".help-block.with-errors").each(function() {
                var e = t(this),
                    i = e.data("bs.validator.originalContent");
                e.removeData("bs.validator.originalContent").html(i)
            }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this
        }, n.prototype.destroy = function() {
            return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this
        };
        var o = t.fn.validator;
        t.fn.validator = i, t.fn.validator.Constructor = n, t.fn.validator.noConflict = function() {
            return t.fn.validator = o, this
        }, t(window).on("load", function() {
            t('form[data-toggle="validator"]').each(function() {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), ! function(t) {
        var e, i, n = "0.5.0",
            o = "hasOwnProperty",
            r = /[\.\/]/,
            s = /\s*,\s*/,
            a = "*",
            l = function(t, e) {
                return t - e
            },
            c = {
                n: {}
            },
            d = function() {
                for (var t = 0, e = this.length; e > t; t++)
                    if ("undefined" != typeof this[t]) return this[t]
            },
            u = function() {
                for (var t = this.length; --t;)
                    if ("undefined" != typeof this[t]) return this[t]
            },
            h = Object.prototype.toString,
            f = String,
            p = Array.isArray || function(t) {
                return t instanceof Array || "[object Array]" == h.call(t)
            };
        eve = function(t, n) {
            var o, r = i,
                s = Array.prototype.slice.call(arguments, 2),
                a = eve.listeners(t),
                c = 0,
                h = [],
                f = {},
                p = [],
                v = e;
            p.firstDefined = d, p.lastDefined = u, e = t, i = 0;
            for (var m = 0, g = a.length; g > m; m++) "zIndex" in a[m] && (h.push(a[m].zIndex), a[m].zIndex < 0 && (f[a[m].zIndex] = a[m]));
            for (h.sort(l); h[c] < 0;)
                if (o = f[h[c++]], p.push(o.apply(n, s)), i) return i = r, p;
            for (m = 0; g > m; m++)
                if (o = a[m], "zIndex" in o)
                    if (o.zIndex == h[c]) {
                        if (p.push(o.apply(n, s)), i) break;
                        do
                            if (c++, o = f[h[c]], o && p.push(o.apply(n, s)), i) break; while (o)
                    } else f[o.zIndex] = o;
            else if (p.push(o.apply(n, s)), i) break;
            return i = r, e = v, p
        }, eve._events = c, eve.listeners = function(t) {
            var e, i, n, o, s, l, d, u, h = p(t) ? t : t.split(r),
                f = c,
                v = [f],
                m = [];
            for (o = 0, s = h.length; s > o; o++) {
                for (u = [], l = 0, d = v.length; d > l; l++)
                    for (f = v[l].n, i = [f[h[o]], f[a]], n = 2; n--;) e = i[n], e && (u.push(e), m = m.concat(e.f || []));
                v = u
            }
            return m
        }, eve.separator = function(t) {
            t ? (t = f(t).replace(/(?=[\.\^\]\[\-])/g, "\\"), t = "[" + t + "]", r = new RegExp(t)) : r = /[\.\/]/
        }, eve.on = function(t, e) {
            if ("function" != typeof e) return function() {};
            for (var i = p(t) ? p(t[0]) ? t : [t] : f(t).split(s), n = 0, o = i.length; o > n; n++) ! function(t) {
                for (var i, n = p(t) ? t : f(t).split(r), o = c, s = 0, a = n.length; a > s; s++) o = o.n, o = o.hasOwnProperty(n[s]) && o[n[s]] || (o[n[s]] = {
                    n: {}
                });
                for (o.f = o.f || [], s = 0, a = o.f.length; a > s; s++)
                    if (o.f[s] == e) {
                        i = !0;
                        break
                    }! i && o.f.push(e)
            }(i[n]);
            return function(t) {
                +t == +t && (e.zIndex = +t)
            }
        }, eve.f = function(t) {
            var e = [].slice.call(arguments, 1);
            return function() {
                eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, eve.stop = function() {
            i = 1
        }, eve.nt = function(t) {
            var i = p(e) ? e.join(".") : e;
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(i) : i
        }, eve.nts = function() {
            return p(e) ? e : e.split(r)
        }, eve.off = eve.unbind = function(t, e) {
            if (!t) return void(eve._events = c = {
                n: {}
            });
            var i = p(t) ? p(t[0]) ? t : [t] : f(t).split(s);
            if (i.length > 1)
                for (var n = 0, l = i.length; l > n; n++) eve.off(i[n], e);
            else {
                i = p(t) ? t : f(t).split(r);
                var d, u, h, n, l, v, m, g = [c],
                    y = [];
                for (n = 0, l = i.length; l > n; n++)
                    for (v = 0; v < g.length; v += h.length - 2) {
                        if (h = [v, 1], d = g[v].n, i[n] != a) d[i[n]] && (h.push(d[i[n]]), y.unshift({
                            n: d,
                            name: i[n]
                        }));
                        else
                            for (u in d) d[o](u) && (h.push(d[u]), y.unshift({
                                n: d,
                                name: u
                            }));
                        g.splice.apply(g, h)
                    }
                for (n = 0, l = g.length; l > n; n++)
                    for (d = g[n]; d.n;) {
                        if (e) {
                            if (d.f) {
                                for (v = 0, m = d.f.length; m > v; v++)
                                    if (d.f[v] == e) {
                                        d.f.splice(v, 1);
                                        break
                                    }! d.f.length && delete d.f
                            }
                            for (u in d.n)
                                if (d.n[o](u) && d.n[u].f) {
                                    var b = d.n[u].f;
                                    for (v = 0, m = b.length; m > v; v++)
                                        if (b[v] == e) {
                                            b.splice(v, 1);
                                            break
                                        }! b.length && delete d.n[u].f
                                }
                        } else {
                            delete d.f;
                            for (u in d.n) d.n[o](u) && d.n[u].f && delete d.n[u].f
                        }
                        d = d.n
                    }
                t: for (n = 0, l = y.length; l > n; n++) {
                    d = y[n];
                    for (u in d.n[d.name].f) continue t;
                    for (u in d.n[d.name].n) continue t;
                    delete d.n[d.name]
                }
            }
        }, eve.once = function(t, e) {
            var i = function() {
                return eve.off(t, i), e.apply(this, arguments)
            };
            return eve.on(t, i)
        }, eve.version = n, eve.toString = function() {
            return "You are running Eve " + n
        }, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function() {
            return eve
        }) : t.eve = eve
    }(this),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["eve"], function(i) {
            return e(t, i)
        });
        else if ("undefined" != typeof exports) {
            var i = require("eve");
            module.exports = e(t, i)
        } else e(t, t.eve)
    }(window || this, function(t, e) {
        var i = function(e) {
                var i, n = {},
                    o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                        return setTimeout(t, 16, (new Date).getTime()), !0
                    },
                    r = Array.isArray || function(t) {
                        return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                    },
                    s = 0,
                    a = "M" + (+new Date).toString(36),
                    l = function() {
                        return a + (s++).toString(36)
                    },
                    c = Date.now || function() {
                        return +new Date
                    },
                    d = function(t) {
                        var e = this;
                        if (null == t) return e.s;
                        var i = e.s - t;
                        e.b += e.dur * i, e.B += e.dur * i, e.s = t
                    },
                    u = function(t) {
                        var e = this;
                        return null == t ? e.spd : void(e.spd = t)
                    },
                    h = function(t) {
                        var e = this;
                        return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
                    },
                    f = function() {
                        var t = this;
                        delete n[t.id], t.update(), e("mina.stop." + t.id, t)
                    },
                    p = function() {
                        var t = this;
                        t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
                    },
                    v = function() {
                        var t = this;
                        t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t, g())
                    },
                    m = function() {
                        var t, e = this;
                        if (r(e.start)) {
                            t = [];
                            for (var i = 0, n = e.start.length; n > i; i++) t[i] = +e.start[i] + (e.end[i] - e.start[i]) * e.easing(e.s)
                        } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                        e.set(t)
                    },
                    g = function(t) {
                        if (!t) return void(i || (i = o(g)));
                        var r = 0;
                        for (var s in n)
                            if (n.hasOwnProperty(s)) {
                                var a = n[s],
                                    l = a.get();
                                r++, a.s = (l - a.b) / (a.dur / a.spd), a.s >= 1 && (delete n[s], a.s = 1, r--, function(t) {
                                    setTimeout(function() {
                                        e("mina.finish." + t.id, t)
                                    })
                                }(a)), a.update()
                            } i = !!r && o(g)
                    },
                    y = function(t, e, i, o, r, s, a) {
                        var c = {
                            id: l(),
                            start: t,
                            end: e,
                            b: i,
                            s: 0,
                            dur: o - i,
                            spd: 1,
                            get: r,
                            set: s,
                            easing: a || y.linear,
                            status: d,
                            speed: u,
                            duration: h,
                            stop: f,
                            pause: p,
                            resume: v,
                            update: m
                        };
                        n[c.id] = c;
                        var b, w = 0;
                        for (b in n)
                            if (n.hasOwnProperty(b) && (w++, 2 == w)) break;
                        return 1 == w && g(), c
                    };
                return y.time = c, y.getById = function(t) {
                    return n[t] || null
                }, y.linear = function(t) {
                    return t
                }, y.easeout = function(t) {
                    return Math.pow(t, 1.7)
                }, y.easein = function(t) {
                    return Math.pow(t, .48)
                }, y.easeinout = function(t) {
                    if (1 == t) return 1;
                    if (0 == t) return 0;
                    var e = .48 - t / 1.04,
                        i = Math.sqrt(.1734 + e * e),
                        n = i - e,
                        o = Math.pow(Math.abs(n), 1 / 3) * (0 > n ? -1 : 1),
                        r = -i - e,
                        s = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
                        a = o + s + .5;
                    return 3 * (1 - a) * a * a + a * a * a
                }, y.backin = function(t) {
                    if (1 == t) return 1;
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }, y.backout = function(t) {
                    if (0 == t) return 0;
                    t -= 1;
                    var e = 1.70158;
                    return t * t * ((e + 1) * t + e) + 1
                }, y.elastic = function(t) {
                    return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                }, y.bounce = function(t) {
                    var e, i = 7.5625,
                        n = 2.75;
                    return 1 / n > t ? e = i * t * t : 2 / n > t ? (t -= 1.5 / n, e = i * t * t + .75) : 2.5 / n > t ? (t -= 2.25 / n, e = i * t * t + .9375) : (t -= 2.625 / n, e = i * t * t + .984375), e
                }, t.mina = y, y
            }("undefined" == typeof e ? function() {} : e),
            n = function(t) {
                function i(t, e) {
                    if (t) {
                        if (t.nodeType) return S(t);
                        if (o(t, "array") && i.set) return i.set.apply(i, t);
                        if (t instanceof y) return t;
                        if (null == e) try {
                            return t = k.doc.querySelector(String(t)), S(t)
                        } catch (n) {
                            return null
                        }
                    }
                    return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new x(t, e)
                }

                function n(t, e) {
                    if (e) {
                        if ("#text" == t && (t = k.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = k.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = n(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(W, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(V, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                        if (1 == t.nodeType) {
                            for (var i in e)
                                if (e[T](i)) {
                                    var o = E(e[i]);
                                    o ? "xlink:" == i.substring(0, 6) ? t.setAttributeNS(W, i.substring(6), o) : "xml:" == i.substring(0, 4) ? t.setAttributeNS(V, i.substring(4), o) : t.setAttribute(i, o) : t.removeAttribute(i)
                                }
                        } else "text" in e && (t.nodeValue = e.text)
                    } else t = k.doc.createElementNS(V, t);
                    return t
                }

                function o(t, e) {
                    return e = E.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || O.call(t).slice(8, -1).toLowerCase() == e)
                }

                function r(t) {
                    if ("function" == typeof t || Object(t) !== t) return t;
                    var e = new t.constructor;
                    for (var i in t) t[T](i) && (e[i] = r(t[i]));
                    return e
                }

                function s(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return t.push(t.splice(i, 1)[0])
                }

                function a(t, e, i) {
                    function n() {
                        var o = Array.prototype.slice.call(arguments, 0),
                            r = o.join("␀"),
                            a = n.cache = n.cache || {},
                            l = n.count = n.count || [];
                        return a[T](r) ? (s(l, r), i ? i(a[r]) : a[r]) : (l.length >= 1e3 && delete a[l.shift()], l.push(r), a[r] = t.apply(e, o), i ? i(a[r]) : a[r])
                    }
                    return n
                }

                function l(t, e, i, n, o, r) {
                    if (null == o) {
                        var s = t - i,
                            a = e - n;
                        return s || a ? (180 + 180 * D.atan2(-a, -s) / I + 360) % 360 : 0
                    }
                    return l(t, e, o, r) - l(i, n, o, r)
                }

                function c(t) {
                    return t % 360 * I / 180
                }

                function d(t) {
                    return 180 * t / I % 360
                }

                function u(t) {
                    var e = [];
                    return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, i, n) {
                        return n = n.split(/\s*,\s*|\s+/), "rotate" == i && 1 == n.length && n.push(0, 0), "scale" == i && (n.length > 2 ? n = n.slice(0, 2) : 2 == n.length && n.push(0, 0), 1 == n.length && n.push(n[0], 0, 0)), "skewX" == i ? e.push(["m", 1, 0, D.tan(c(n[0])), 1, 0, 0]) : "skewY" == i ? e.push(["m", 1, D.tan(c(n[0])), 0, 1, 0, 0]) : e.push([i.charAt(0)].concat(n)), t
                    }), e
                }

                function h(t, e) {
                    var n = tt(t),
                        o = new i.Matrix;
                    if (n)
                        for (var r = 0, s = n.length; s > r; r++) {
                            var a, l, c, d, u, h = n[r],
                                f = h.length,
                                p = E(h[0]).toLowerCase(),
                                v = h[0] != p,
                                m = v ? o.invert() : 0;
                            "t" == p && 2 == f ? o.translate(h[1], 0) : "t" == p && 3 == f ? v ? (a = m.x(0, 0), l = m.y(0, 0), c = m.x(h[1], h[2]), d = m.y(h[1], h[2]), o.translate(c - a, d - l)) : o.translate(h[1], h[2]) : "r" == p ? 2 == f ? (u = u || e, o.rotate(h[1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == f && (v ? (c = m.x(h[2], h[3]), d = m.y(h[2], h[3]), o.rotate(h[1], c, d)) : o.rotate(h[1], h[2], h[3])) : "s" == p ? 2 == f || 3 == f ? (u = u || e, o.scale(h[1], h[f - 1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == f ? v ? (c = m.x(h[2], h[3]), d = m.y(h[2], h[3]), o.scale(h[1], h[1], c, d)) : o.scale(h[1], h[1], h[2], h[3]) : 5 == f && (v ? (c = m.x(h[3], h[4]), d = m.y(h[3], h[4]), o.scale(h[1], h[2], c, d)) : o.scale(h[1], h[2], h[3], h[4])) : "m" == p && 7 == f && o.add(h[1], h[2], h[3], h[4], h[5], h[6])
                        }
                    return o
                }

                function f(t) {
                    var e = t.node.ownerSVGElement && S(t.node.ownerSVGElement) || t.node.parentNode && S(t.node.parentNode) || i.select("svg") || i(0, 0),
                        n = e.select("defs"),
                        o = null != n && n.node;
                    return o || (o = w("defs", e.node).node), o
                }

                function p(t) {
                    return t.node.ownerSVGElement && S(t.node.ownerSVGElement) || i.select("svg")
                }

                function v(t, e, i) {
                    function o(t) {
                        if (null == t) return B;
                        if (t == +t) return t;
                        n(c, {
                            width: t
                        });
                        try {
                            return c.getBBox().width
                        } catch (e) {
                            return 0
                        }
                    }

                    function r(t) {
                        if (null == t) return B;
                        if (t == +t) return t;
                        n(c, {
                            height: t
                        });
                        try {
                            return c.getBBox().height
                        } catch (e) {
                            return 0
                        }
                    }

                    function s(n, o) {
                        null == e ? l[n] = o(t.attr(n) || 0) : n == e && (l = o(null == i ? t.attr(n) || 0 : i))
                    }
                    var a = p(t).node,
                        l = {},
                        c = a.querySelector(".svg---mgr");
                    switch (c || (c = n("rect"), n(c, {
                        x: -9e9,
                        y: -9e9,
                        width: 10,
                        height: 10,
                        "class": "svg---mgr",
                        fill: "none"
                    }), a.appendChild(c)), t.type) {
                        case "rect":
                            s("rx", o), s("ry", r);
                        case "image":
                            s("width", o), s("height", r);
                        case "text":
                            s("x", o), s("y", r);
                            break;
                        case "circle":
                            s("cx", o), s("cy", r), s("r", o);
                            break;
                        case "ellipse":
                            s("cx", o), s("cy", r), s("rx", o), s("ry", r);
                            break;
                        case "line":
                            s("x1", o), s("x2", o), s("y1", r), s("y2", r);
                            break;
                        case "marker":
                            s("refX", o), s("markerWidth", o), s("refY", r), s("markerHeight", r);
                            break;
                        case "radialGradient":
                            s("fx", o), s("fy", r);
                            break;
                        case "tspan":
                            s("dx", o), s("dy", r);
                            break;
                        default:
                            s(e, o)
                    }
                    return a.removeChild(c), l
                }

                function m(t) {
                    o(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                    for (var e = 0, i = 0, n = this.node; this[e];) delete this[e++];
                    for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
                        n.appendChild(t.node)
                    }) : n.appendChild(t[e].node);
                    var r = n.childNodes;
                    for (e = 0; e < r.length; e++) this[i++] = S(r[e]);
                    return this
                }

                function y(t) {
                    if (t.snap in X) return X[t.snap];
                    var e;
                    try {
                        e = t.ownerSVGElement
                    } catch (i) {}
                    this.node = t, e && (this.paper = new x(e)), this.type = t.tagName || t.nodeName;
                    var n = this.id = q(this);
                    if (this.anims = {}, this._ = {
                            transform: []
                        }, t.snap = n, X[n] = this, "g" == this.type && (this.add = m), this.type in {
                            g: 1,
                            mask: 1,
                            pattern: 1,
                            symbol: 1
                        })
                        for (var o in x.prototype) x.prototype[T](o) && (this[o] = x.prototype[o])
                }

                function b(t) {
                    this.node = t
                }

                function w(t, e) {
                    var i = n(t);
                    e.appendChild(i);
                    var o = S(i);
                    return o
                }

                function x(t, e) {
                    var i, o, r, s = x.prototype;
                    if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
                        if (t.snap in X) return X[t.snap];
                        var a = t.ownerDocument;
                        i = new y(t), o = t.getElementsByTagName("desc")[0], r = t.getElementsByTagName("defs")[0], o || (o = n("desc"), o.appendChild(a.createTextNode("Created with Snap")), i.node.appendChild(o)), r || (r = n("defs"), i.node.appendChild(r)), i.defs = r;
                        for (var l in s) s[T](l) && (i[l] = s[l]);
                        i.paper = i.root = i
                    } else i = w("svg", k.doc.body), n(i.node, {
                        height: e,
                        version: 1.1,
                        width: t,
                        xmlns: V
                    });
                    return i
                }

                function S(t) {
                    return t ? t instanceof y || t instanceof b ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new x(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new x(t.contentDocument.getElementsByTagName("svg")[0]) : new y(t) : t
                }

                function C(t, e) {
                    for (var i = 0, n = t.length; n > i; i++) {
                        var o = {
                                type: t[i].type,
                                attr: t[i].attr()
                            },
                            r = t[i].children();
                        e.push(o), r.length && C(r, o.childNodes = [])
                    }
                }
                i.version = "0.5.1", i.toString = function() {
                    return "Snap v" + this.version
                }, i._ = {};
                var k = {
                    win: t.window,
                    doc: t.window.document
                };
                i._.glob = k;
                var T = "hasOwnProperty",
                    E = String,
                    _ = parseFloat,
                    A = parseInt,
                    D = Math,
                    F = D.max,
                    $ = D.min,
                    P = D.abs,
                    I = (D.pow, D.PI),
                    B = (D.round, ""),
                    O = Object.prototype.toString,
                    M = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    L = (i._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                    z = {
                        hs: 1,
                        rg: 1
                    },
                    j = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    N = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    R = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                    U = 0,
                    H = "S" + (+new Date).toString(36),
                    q = function(t) {
                        return (t && t.type ? t.type : B) + H + (U++).toString(36)
                    },
                    W = "http://www.w3.org/1999/xlink",
                    V = "http://www.w3.org/2000/svg",
                    X = {};
                i.url = function(t) {
                    return "url('#" + t + "')"
                }, i._.$ = n, i._.id = q, i.format = function() {
                    var t = /\{([^\}]+)\}/g,
                        e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        i = function(t, i, n) {
                            var o = n;
                            return i.replace(e, function(t, e, i, n, r) {
                                e = e || n, o && (e in o && (o = o[e]), "function" == typeof o && r && (o = o()))
                            }), o = (null == o || o == n ? t : o) + ""
                        };
                    return function(e, n) {
                        return E(e).replace(t, function(t, e) {
                            return i(t, e, n)
                        })
                    }
                }(), i._.clone = r, i._.cacher = a, i.rad = c, i.deg = d, i.sin = function(t) {
                    return D.sin(i.rad(t))
                }, i.tan = function(t) {
                    return D.tan(i.rad(t))
                }, i.cos = function(t) {
                    return D.cos(i.rad(t))
                }, i.asin = function(t) {
                    return i.deg(D.asin(t))
                }, i.acos = function(t) {
                    return i.deg(D.acos(t))
                }, i.atan = function(t) {
                    return i.deg(D.atan(t))
                }, i.atan2 = function(t) {
                    return i.deg(D.atan2(t))
                }, i.angle = l, i.len = function(t, e, n, o) {
                    return Math.sqrt(i.len2(t, e, n, o))
                }, i.len2 = function(t, e, i, n) {
                    return (t - i) * (t - i) + (e - n) * (e - n)
                }, i.closestPoint = function(t, e, i) {
                    function n(t) {
                        var n = t.x - e,
                            o = t.y - i;
                        return n * n + o * o
                    }
                    for (var o, r, s, a, l = t.node, c = l.getTotalLength(), d = c / l.pathSegList.numberOfItems * .125, u = 1 / 0, h = 0; c >= h; h += d)(a = n(s = l.getPointAtLength(h))) < u && (o = s, r = h, u = a);
                    for (d *= .5; d > .5;) {
                        var f, p, v, m, g, y;
                        (v = r - d) >= 0 && (g = n(f = l.getPointAtLength(v))) < u ? (o = f, r = v, u = g) : (m = r + d) <= c && (y = n(p = l.getPointAtLength(m))) < u ? (o = p, r = m, u = y) : d *= .5
                    }
                    return o = {
                        x: o.x,
                        y: o.y,
                        length: r,
                        distance: Math.sqrt(u)
                    }
                }, i.is = o, i.snapTo = function(t, e, i) {
                    if (i = o(i, "finite") ? i : 10, o(t, "array")) {
                        for (var n = t.length; n--;)
                            if (P(t[n] - e) <= i) return t[n]
                    } else {
                        t = +t;
                        var r = e % t;
                        if (i > r) return e - r;
                        if (r > t - i) return e - r + t
                    }
                    return e
                }, i.getRGB = a(function(t) {
                    if (!t || (t = E(t)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: K
                    };
                    if ("none" == t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: K
                    };
                    if (!(z[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = Y(t)), !t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: K
                    };
                    var e, n, r, s, a, l, c = t.match(M);
                    return c ? (c[2] && (r = A(c[2].substring(5), 16), n = A(c[2].substring(3, 5), 16), e = A(c[2].substring(1, 3), 16)), c[3] && (r = A((a = c[3].charAt(3)) + a, 16), n = A((a = c[3].charAt(2)) + a, 16), e = A((a = c[3].charAt(1)) + a, 16)), c[4] && (l = c[4].split(L), e = _(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = _(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), r = _(l[2]), "%" == l[2].slice(-1) && (r *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (s = _(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100)), c[5] ? (l = c[5].split(L), e = _(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = _(l[1]), "%" == l[1].slice(-1) && (n /= 100), r = _(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (s = _(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), i.hsb2rgb(e, n, r, s)) : c[6] ? (l = c[6].split(L), e = _(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = _(l[1]), "%" == l[1].slice(-1) && (n /= 100), r = _(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (s = _(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), i.hsl2rgb(e, n, r, s)) : (e = $(D.round(e), 255), n = $(D.round(n), 255), r = $(D.round(r), 255), s = $(F(s, 0), 1), c = {
                        r: e,
                        g: n,
                        b: r,
                        toString: K
                    }, c.hex = "#" + (16777216 | r | n << 8 | e << 16).toString(16).slice(1), c.opacity = o(s, "finite") ? s : 1, c)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: K
                    }
                }, i), i.hsb = a(function(t, e, n) {
                    return i.hsb2rgb(t, e, n).hex
                }), i.hsl = a(function(t, e, n) {
                    return i.hsl2rgb(t, e, n).hex
                }), i.rgb = a(function(t, e, i, n) {
                    if (o(n, "finite")) {
                        var r = D.round;
                        return "rgba(" + [r(t), r(e), r(i), +n.toFixed(2)] + ")"
                    }
                    return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
                });
                var Y = function(t) {
                        var e = k.doc.getElementsByTagName("head")[0] || k.doc.getElementsByTagName("svg")[0],
                            i = "rgb(255, 0, 0)";
                        return (Y = a(function(t) {
                            if ("red" == t.toLowerCase()) return i;
                            e.style.color = i, e.style.color = t;
                            var n = k.doc.defaultView.getComputedStyle(e, B).getPropertyValue("color");
                            return n == i ? null : n
                        }))(t)
                    },
                    G = function() {
                        return "hsb(" + [this.h, this.s, this.b] + ")"
                    },
                    Q = function() {
                        return "hsl(" + [this.h, this.s, this.l] + ")"
                    },
                    K = function() {
                        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                    },
                    J = function(t, e, n) {
                        if (null == e && o(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && o(t, string)) {
                            var r = i.getRGB(t);
                            t = r.r, e = r.g, n = r.b
                        }
                        return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
                    },
                    Z = function(t, e, n, r) {
                        t = D.round(255 * t), e = D.round(255 * e), n = D.round(255 * n);
                        var s = {
                            r: t,
                            g: e,
                            b: n,
                            opacity: o(r, "finite") ? r : 1,
                            hex: i.rgb(t, e, n),
                            toString: K
                        };
                        return o(r, "finite") && (s.opacity = r), s
                    };
                i.color = function(t) {
                    var e;
                    return o(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : o(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (o(t, "string") && (t = i.getRGB(t)), o(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : (t = {
                        hex: "none"
                    }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = K, t
                }, i.hsb2rgb = function(t, e, i, n) {
                    o(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, n = t.o, t = t.h), t *= 360;
                    var r, s, a, l, c;
                    return t = t % 360 / 60, c = i * e, l = c * (1 - P(t % 2 - 1)), r = s = a = i - c, t = ~~t, r += [c, l, 0, 0, l, c][t], s += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], Z(r, s, a, n)
                }, i.hsl2rgb = function(t, e, i, n) {
                    o(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), t *= 360;
                    var r, s, a, l, c;
                    return t = t % 360 / 60, c = 2 * e * (.5 > i ? i : 1 - i), l = c * (1 - P(t % 2 - 1)), r = s = a = i - c / 2, t = ~~t, r += [c, l, 0, 0, l, c][t], s += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], Z(r, s, a, n)
                }, i.rgb2hsb = function(t, e, i) {
                    i = J(t, e, i), t = i[0], e = i[1], i = i[2];
                    var n, o, r, s;
                    return r = F(t, e, i), s = r - $(t, e, i), n = 0 == s ? null : r == t ? (e - i) / s : r == e ? (i - t) / s + 2 : (t - e) / s + 4, n = (n + 360) % 6 * 60 / 360, o = 0 == s ? 0 : s / r, {
                        h: n,
                        s: o,
                        b: r,
                        toString: G
                    }
                }, i.rgb2hsl = function(t, e, i) {
                    i = J(t, e, i), t = i[0], e = i[1], i = i[2];
                    var n, o, r, s, a, l;
                    return s = F(t, e, i), a = $(t, e, i), l = s - a, n = 0 == l ? null : s == t ? (e - i) / l : s == e ? (i - t) / l + 2 : (t - e) / l + 4, n = (n + 360) % 6 * 60 / 360, r = (s + a) / 2, o = 0 == l ? 0 : .5 > r ? l / (2 * r) : l / (2 - 2 * r), {
                        h: n,
                        s: o,
                        l: r,
                        toString: Q
                    }
                }, i.parsePathString = function(t) {
                    if (!t) return null;
                    var e = i.path(t);
                    if (e.arr) return i.path.clone(e.arr);
                    var n = {
                            a: 7,
                            c: 6,
                            o: 2,
                            h: 1,
                            l: 2,
                            m: 2,
                            r: 4,
                            q: 4,
                            s: 4,
                            t: 2,
                            v: 1,
                            u: 3,
                            z: 0
                        },
                        r = [];
                    return o(t, "array") && o(t[0], "array") && (r = i.path.clone(t)), r.length || E(t).replace(j, function(t, e, i) {
                        var o = [],
                            s = e.toLowerCase();
                        if (i.replace(R, function(t, e) {
                                e && o.push(+e)
                            }), "m" == s && o.length > 2 && (r.push([e].concat(o.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "o" == s && 1 == o.length && r.push([e, o[0]]), "r" == s) r.push([e].concat(o));
                        else
                            for (; o.length >= n[s] && (r.push([e].concat(o.splice(0, n[s]))), n[s]););
                    }), r.toString = i.path.toString, e.arr = i.path.clone(r), r
                };
                var tt = i.parseTransformString = function(t) {
                    if (!t) return null;
                    var e = [];
                    return o(t, "array") && o(t[0], "array") && (e = i.path.clone(t)), e.length || E(t).replace(N, function(t, i, n) {
                        var o = [];
                        i.toLowerCase(), n.replace(R, function(t, e) {
                            e && o.push(+e)
                        }), e.push([i].concat(o))
                    }), e.toString = i.path.toString, e
                };
                i._.svgTransform2string = u, i._.rgTransform = /^[a-z][\s]*-?\.?\d/i, i._.transform2matrix = h, i._unit2px = v, k.doc.contains || k.doc.compareDocumentPosition ? function(t, e) {
                    var i = 9 == t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t == n || !(!n || 1 != n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e;)
                            if (e = e.parentNode, e == t) return !0;
                    return !1
                }, i._.getSomeDefs = f, i._.getSomeSVG = p, i.select = function(t) {
                    return t = E(t).replace(/([^\\]):/g, "$1\\:"), S(k.doc.querySelector(t))
                }, i.selectAll = function(t) {
                    for (var e = k.doc.querySelectorAll(t), n = (i.set || Array)(), o = 0; o < e.length; o++) n.push(S(e[o]));
                    return n
                }, setInterval(function() {
                    for (var t in X)
                        if (X[T](t)) {
                            var e = X[t],
                                i = e.node;
                            ("svg" != e.type && !i.ownerSVGElement || "svg" == e.type && (!i.parentNode || "ownerSVGElement" in i.parentNode && !i.ownerSVGElement)) && delete X[t]
                        }
                }, 1e4), y.prototype.attr = function(t, i) {
                    var n = this,
                        r = n.node;
                    if (!t) {
                        if (1 != r.nodeType) return {
                            text: r.nodeValue
                        };
                        for (var s = r.attributes, a = {}, l = 0, c = s.length; c > l; l++) a[s[l].nodeName] = s[l].nodeValue;
                        return a
                    }
                    if (o(t, "string")) {
                        if (!(arguments.length > 1)) return e("snap.util.getattr." + t, n).firstDefined();
                        var d = {};
                        d[t] = i, t = d
                    }
                    for (var u in t) t[T](u) && e("snap.util.attr." + u, n, t[u]);
                    return n
                }, i.parse = function(t) {
                    var e = k.doc.createDocumentFragment(),
                        i = !0,
                        n = k.doc.createElement("div");
                    if (t = E(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", i = !1), n.innerHTML = t, t = n.getElementsByTagName("svg")[0])
                        if (i) e = t;
                        else
                            for (; t.firstChild;) e.appendChild(t.firstChild);
                    return new b(e)
                }, i.fragment = function() {
                    for (var t = Array.prototype.slice.call(arguments, 0), e = k.doc.createDocumentFragment(), n = 0, o = t.length; o > n; n++) {
                        var r = t[n];
                        r.node && r.node.nodeType && e.appendChild(r.node), r.nodeType && e.appendChild(r), "string" == typeof r && e.appendChild(i.parse(r).node)
                    }
                    return new b(e)
                }, i._.make = w, i._.wrap = S, x.prototype.el = function(t, e) {
                    var i = w(t, this.node);
                    return e && i.attr(e), i
                }, y.prototype.children = function() {
                    for (var t = [], e = this.node.childNodes, n = 0, o = e.length; o > n; n++) t[n] = i(e[n]);
                    return t
                }, y.prototype.toJSON = function() {
                    var t = [];
                    return C([this], t), t[0]
                }, e.on("snap.util.getattr", function() {
                    var t = e.nt();
                    t = t.substring(t.lastIndexOf(".") + 1);
                    var i = t.replace(/[A-Z]/g, function(t) {
                        return "-" + t.toLowerCase()
                    });
                    return et[T](i) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(i) : n(this.node, t)
                });
                var et = {
                    "alignment-baseline": 0,
                    "baseline-shift": 0,
                    clip: 0,
                    "clip-path": 0,
                    "clip-rule": 0,
                    color: 0,
                    "color-interpolation": 0,
                    "color-interpolation-filters": 0,
                    "color-profile": 0,
                    "color-rendering": 0,
                    cursor: 0,
                    direction: 0,
                    display: 0,
                    "dominant-baseline": 0,
                    "enable-background": 0,
                    fill: 0,
                    "fill-opacity": 0,
                    "fill-rule": 0,
                    filter: 0,
                    "flood-color": 0,
                    "flood-opacity": 0,
                    font: 0,
                    "font-family": 0,
                    "font-size": 0,
                    "font-size-adjust": 0,
                    "font-stretch": 0,
                    "font-style": 0,
                    "font-variant": 0,
                    "font-weight": 0,
                    "glyph-orientation-horizontal": 0,
                    "glyph-orientation-vertical": 0,
                    "image-rendering": 0,
                    kerning: 0,
                    "letter-spacing": 0,
                    "lighting-color": 0,
                    marker: 0,
                    "marker-end": 0,
                    "marker-mid": 0,
                    "marker-start": 0,
                    mask: 0,
                    opacity: 0,
                    overflow: 0,
                    "pointer-events": 0,
                    "shape-rendering": 0,
                    "stop-color": 0,
                    "stop-opacity": 0,
                    stroke: 0,
                    "stroke-dasharray": 0,
                    "stroke-dashoffset": 0,
                    "stroke-linecap": 0,
                    "stroke-linejoin": 0,
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    "text-anchor": 0,
                    "text-decoration": 0,
                    "text-rendering": 0,
                    "unicode-bidi": 0,
                    visibility: 0,
                    "word-spacing": 0,
                    "writing-mode": 0
                };
                e.on("snap.util.attr", function(t) {
                        var i = e.nt(),
                            o = {};
                        i = i.substring(i.lastIndexOf(".") + 1), o[i] = t;
                        var r = i.replace(/-(\w)/gi, function(t, e) {
                                return e.toUpperCase()
                            }),
                            s = i.replace(/[A-Z]/g, function(t) {
                                return "-" + t.toLowerCase()
                            });
                        et[T](s) ? this.node.style[r] = null == t ? B : t : n(this.node, o)
                    }),
                    function(t) {}(x.prototype), i.ajax = function(t, i, n, r) {
                        var s = new XMLHttpRequest,
                            a = q();
                        if (s) {
                            if (o(i, "function")) r = n, n = i, i = null;
                            else if (o(i, "object")) {
                                var l = [];
                                for (var c in i) i.hasOwnProperty(c) && l.push(encodeURIComponent(c) + "=" + encodeURIComponent(i[c]));
                                i = l.join("&")
                            }
                            return s.open(i ? "POST" : "GET", t, !0), i && (s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (e.once("snap.ajax." + a + ".0", n), e.once("snap.ajax." + a + ".200", n), e.once("snap.ajax." + a + ".304", n)), s.onreadystatechange = function() {
                                4 == s.readyState && e("snap.ajax." + a + "." + s.status, r, s)
                            }, 4 == s.readyState ? s : (s.send(i), s)
                        }
                    }, i.load = function(t, e, n) {
                        i.ajax(t, function(t) {
                            var o = i.parse(t.responseText);
                            n ? e.call(n, o) : e(o)
                        })
                    };
                var it = function(t) {
                    var e = t.getBoundingClientRect(),
                        i = t.ownerDocument,
                        n = i.body,
                        o = i.documentElement,
                        r = o.clientTop || n.clientTop || 0,
                        s = o.clientLeft || n.clientLeft || 0,
                        a = e.top + (g.win.pageYOffset || o.scrollTop || n.scrollTop) - r,
                        l = e.left + (g.win.pageXOffset || o.scrollLeft || n.scrollLeft) - s;
                    return {
                        y: a,
                        x: l
                    }
                };
                return i.getElementByPoint = function(t, e) {
                    var i = this,
                        n = (i.canvas, k.doc.elementFromPoint(t, e));
                    if (k.win.opera && "svg" == n.tagName) {
                        var o = it(n),
                            r = n.createSVGRect();
                        r.x = t - o.x, r.y = e - o.y, r.width = r.height = 1;
                        var s = n.getIntersectionList(r, null);
                        s.length && (n = s[s.length - 1])
                    }
                    return n ? S(n) : null
                }, i.plugin = function(t) {
                    t(i, y, x, k, b)
                }, k.win.Snap = i, i
            }(t || this);
        return n.plugin(function(i, n, o, r, s) {
            function a(t, e) {
                if (null == e) {
                    var n = !0;
                    if (e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"), !e) return new i.Matrix;
                    e = i._.svgTransform2string(e)
                } else e = i._.rgTransform.test(e) ? h(e).replace(/\.{3}|\u2026/g, t._.transform || "") : i._.svgTransform2string(e), u(e, "array") && (e = i.path ? i.path.toString.call(e) : h(e)), t._.transform = e;
                var o = i._.transform2matrix(e, t.getBBox(1));
                return n ? o : void(t.matrix = o)
            }

            function l(t) {
                function e(t, e) {
                    var n = p(t.node, e);
                    n = n && n.match(s), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (l[n] = (l[n] || []).concat(function(n) {
                        var o = {};
                        o[e] = i.url(n), p(t.node, o)
                    })))
                }

                function n(t) {
                    var e = p(t.node, "xlink:href");
                    e && "#" == e.charAt() && (e = e.substring(1), e && (l[e] = (l[e] || []).concat(function(e) {
                        t.attr("xlink:href", "#" + e)
                    })))
                }
                for (var o, r = t.selectAll("*"), s = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], l = {}, c = 0, d = r.length; d > c; c++) {
                    o = r[c], e(o, "fill"), e(o, "stroke"), e(o, "filter"), e(o, "mask"), e(o, "clip-path"), n(o);
                    var u = p(o.node, "id");
                    u && (p(o.node, {
                        id: o.id
                    }), a.push({
                        old: u,
                        id: o.id
                    }))
                }
                for (c = 0, d = a.length; d > c; c++) {
                    var h = l[a[c].old];
                    if (h)
                        for (var f = 0, v = h.length; v > f; f++) h[f](a[c].id);
                }
            }

            function c(t) {
                return function() {
                    var e = t ? "<" + this.type : "",
                        i = this.node.attributes,
                        n = this.node.childNodes;
                    if (t)
                        for (var o = 0, r = i.length; r > o; o++) e += " " + i[o].name + '="' + i[o].value.replace(/"/g, '\\"') + '"';
                    if (n.length) {
                        for (t && (e += ">"), o = 0, r = n.length; r > o; o++) 3 == n[o].nodeType ? e += n[o].nodeValue : 1 == n[o].nodeType && (e += y(n[o]).toString());
                        t && (e += "</" + this.type + ">")
                    } else t && (e += "/>");
                    return e
                }
            }
            var d = n.prototype,
                u = i.is,
                h = String,
                f = i._unit2px,
                p = i._.$,
                v = i._.make,
                m = i._.getSomeDefs,
                g = "hasOwnProperty",
                y = i._.wrap;
            d.getBBox = function(t) {
                if ("tspan" == this.type) return i._.box(this.node.getClientRects().item(0));
                if (!i.Matrix || !i.path) return this.node.getBBox();
                var e = this,
                    n = new i.Matrix;
                if (e.removed) return i._.box();
                for (;
                    "use" == e.type;)
                    if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                    else {
                        var o = e.attr("xlink:href");
                        e = e.original = e.node.ownerDocument.getElementById(o.substring(o.indexOf("#") + 1))
                    } var r = e._,
                    s = i.path.get[e.type] || i.path.get.deflt;
                try {
                    return t ? (r.bboxwt = s ? i.path.getBBox(e.realPath = s(e)) : i._.box(e.node.getBBox()), i._.box(r.bboxwt)) : (e.realPath = s(e), e.matrix = e.transform().localMatrix, r.bbox = i.path.getBBox(i.path.map(e.realPath, n.add(e.matrix))), i._.box(r.bbox))
                } catch (a) {
                    return i._.box()
                }
            };
            var b = function() {
                return this.string
            };
            d.transform = function(t) {
                var e = this._;
                if (null == t) {
                    for (var n, o = this, r = new i.Matrix(this.node.getCTM()), s = a(this), l = [s], c = new i.Matrix, d = s.toTransformString(), u = h(s) == h(this.matrix) ? h(e.transform) : d;
                        "svg" != o.type && (o = o.parent());) l.push(a(o));
                    for (n = l.length; n--;) c.add(l[n]);
                    return {
                        string: u,
                        globalMatrix: r,
                        totalMatrix: c,
                        localMatrix: s,
                        diffMatrix: r.clone().add(s.invert()),
                        global: r.toTransformString(),
                        total: c.toTransformString(),
                        local: d,
                        toString: b
                    }
                }
                return t instanceof i.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : a(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? p(this.node, {
                    gradientTransform: this.matrix
                }) : "pattern" == this.type ? p(this.node, {
                    patternTransform: this.matrix
                }) : p(this.node, {
                    transform: this.matrix
                })), this
            }, d.parent = function() {
                return y(this.node.parentNode)
            }, d.append = d.add = function(t) {
                if (t) {
                    if ("set" == t.type) {
                        var e = this;
                        return t.forEach(function(t) {
                            e.add(t)
                        }), this
                    }
                    t = y(t), this.node.appendChild(t.node), t.paper = this.paper
                }
                return this
            }, d.appendTo = function(t) {
                return t && (t = y(t), t.append(this)), this
            }, d.prepend = function(t) {
                if (t) {
                    if ("set" == t.type) {
                        var e, i = this;
                        return t.forEach(function(t) {
                            e ? e.after(t) : i.prepend(t), e = t
                        }), this
                    }
                    t = y(t);
                    var n = t.parent();
                    this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), n && n.add()
                }
                return this
            }, d.prependTo = function(t) {
                return t = y(t), t.prepend(this), this
            }, d.before = function(t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function(t) {
                        var i = t.parent();
                        e.node.parentNode.insertBefore(t.node, e.node), i && i.add()
                    }), this.parent().add(), this
                }
                t = y(t);
                var i = t.parent();
                return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), i && i.add(), t.paper = this.paper, this
            }, d.after = function(t) {
                t = y(t);
                var e = t.parent();
                return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
            }, d.insertBefore = function(t) {
                t = y(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, d.insertAfter = function(t) {
                t = y(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, d.remove = function() {
                var t = this.parent();
                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
            }, d.select = function(t) {
                return y(this.node.querySelector(t))
            }, d.selectAll = function(t) {
                for (var e = this.node.querySelectorAll(t), n = (i.set || Array)(), o = 0; o < e.length; o++) n.push(y(e[o]));
                return n
            }, d.asPX = function(t, e) {
                return null == e && (e = this.attr(t)), +f(this, t, e)
            }, d.use = function() {
                var t, e = this.node.id;
                return e || (e = this.id, p(this.node, {
                    id: e
                })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? v(this.type, this.node.parentNode) : v("use", this.node.parentNode), p(t.node, {
                    "xlink:href": "#" + e
                }), t.original = this, t
            }, d.clone = function() {
                var t = y(this.node.cloneNode(!0));
                return p(t.node, "id") && p(t.node, {
                    id: t.id
                }), l(t), t.insertAfter(this), t
            }, d.toDefs = function() {
                var t = m(this);
                return t.appendChild(this.node), this
            }, d.pattern = d.toPattern = function(t, e, i, n) {
                var o = v("pattern", m(this));
                return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, t = t.x), p(o.node, {
                    x: t,
                    y: e,
                    width: i,
                    height: n,
                    patternUnits: "userSpaceOnUse",
                    id: o.id,
                    viewBox: [t, e, i, n].join(" ")
                }), o.node.appendChild(this.node), o
            }, d.marker = function(t, e, i, n, o, r) {
                var s = v("marker", m(this));
                return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, o = t.refX || t.cx, r = t.refY || t.cy, t = t.x), p(s.node, {
                    viewBox: [t, e, i, n].join(" "),
                    markerWidth: i,
                    markerHeight: n,
                    orient: "auto",
                    refX: o || 0,
                    refY: r || 0,
                    id: s.id
                }), s.node.appendChild(this.node), s
            };
            var w = {};
            d.data = function(t, n) {
                var o = w[this.id] = w[this.id] || {};
                if (0 == arguments.length) return e("snap.data.get." + this.id, this, o, null), o;
                if (1 == arguments.length) {
                    if (i.is(t, "object")) {
                        for (var r in t) t[g](r) && this.data(r, t[r]);
                        return this
                    }
                    return e("snap.data.get." + this.id, this, o[t], t), o[t]
                }
                return o[t] = n, e("snap.data.set." + this.id, this, n, t), this
            }, d.removeData = function(t) {
                return null == t ? w[this.id] = {} : w[this.id] && delete w[this.id][t], this
            }, d.outerSVG = d.toString = c(1), d.innerSVG = c(), d.toDataURL = function() {
                if (t && t.btoa) {
                    var e = this.getBBox(),
                        n = i.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                            x: +e.x.toFixed(3),
                            y: +e.y.toFixed(3),
                            width: +e.width.toFixed(3),
                            height: +e.height.toFixed(3),
                            contents: this.outerSVG()
                        });
                    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
                }
            }, s.prototype.select = d.select, s.prototype.selectAll = d.selectAll
        }), n.plugin(function(t, n, o, r, s) {
            function a(t, e, i) {
                return function(n) {
                    var o = n.slice(t, e);
                    return 1 == o.length && (o = o[0]), i ? i(o) : o
                }
            }
            var l = n.prototype,
                c = t.is,
                d = String,
                u = "hasOwnProperty",
                h = function(t, e, n, o) {
                    "function" != typeof n || n.length || (o = n, n = i.linear), this.attr = t, this.dur = e, n && (this.easing = n), o && (this.callback = o)
                };
            t._.Animation = h, t.animation = function(t, e, i, n) {
                return new h(t, e, i, n)
            }, l.inAnim = function() {
                var t = this,
                    e = [];
                for (var i in t.anims) t.anims[u](i) && ! function(t) {
                    e.push({
                        anim: new h(t._attrs, t.dur, t.easing, t._callback),
                        mina: t,
                        curStatus: t.status(),
                        status: function(e) {
                            return t.status(e)
                        },
                        stop: function() {
                            t.stop()
                        }
                    })
                }(t.anims[i]);
                return e
            }, t.animate = function(t, n, o, r, s, a) {
                "function" != typeof s || s.length || (a = s, s = i.linear);
                var l = i.time(),
                    c = i(t, n, l, l + r, i.time, o, s);
                return a && e.once("mina.finish." + c.id, a), c
            }, l.stop = function() {
                for (var t = this.inAnim(), e = 0, i = t.length; i > e; e++) t[e].stop();
                return this
            }, l.animate = function(t, n, o, r) {
                "function" != typeof o || o.length || (r = o, o = i.linear), t instanceof h && (r = t.callback, o = t.easing, n = t.dur, t = t.attr);
                var s, l, f, p, v = [],
                    m = [],
                    g = {},
                    y = this;
                for (var b in t)
                    if (t[u](b)) {
                        y.equal ? (p = y.equal(b, d(t[b])), s = p.from, l = p.to, f = p.f) : (s = +y.attr(b), l = +t[b]);
                        var w = c(s, "array") ? s.length : 1;
                        g[b] = a(v.length, v.length + w, f), v = v.concat(s), m = m.concat(l)
                    } var x = i.time(),
                    S = i(v, m, x, x + n, i.time, function(t) {
                        var e = {};
                        for (var i in g) g[u](i) && (e[i] = g[i](t));
                        y.attr(e)
                    }, o);
                return y.anims[S.id] = S, S._attrs = t, S._callback = r, e("snap.animcreated." + y.id, S), e.once("mina.finish." + S.id, function() {
                    e.off("mina.*." + S.id), delete y.anims[S.id], r && r.call(y)
                }), e.once("mina.stop." + S.id, function() {
                    e.off("mina.*." + S.id), delete y.anims[S.id]
                }), y
            }
        }), n.plugin(function(t, e, i, n, o) {
            function r(t, e, i, n, o, r) {
                return null == e && "[object SVGMatrix]" == s.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +o, this.f = +r) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
            }
            var s = Object.prototype.toString,
                a = String,
                l = Math,
                c = "";
            ! function(e) {
                function i(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }

                function n(t) {
                    var e = l.sqrt(i(t));
                    t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                }
                e.add = function(t, e, i, n, o, s) {
                    if (t && t instanceof r) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
                    var a = t * this.a + e * this.c,
                        l = t * this.b + e * this.d;
                    return this.e += o * this.a + s * this.c, this.f += o * this.b + s * this.d, this.c = i * this.a + n * this.c, this.d = i * this.b + n * this.d, this.a = a, this.b = l, this
                }, r.prototype.multLeft = function(t, e, i, n, o, s) {
                    if (t && t instanceof r) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
                    var a = t * this.a + i * this.b,
                        l = t * this.c + i * this.d,
                        c = t * this.e + i * this.f + o;
                    return this.b = e * this.a + n * this.b, this.d = e * this.c + n * this.d, this.f = e * this.e + n * this.f + s, this.a = a, this.c = l, this.e = c, this
                }, e.invert = function() {
                    var t = this,
                        e = t.a * t.d - t.b * t.c;
                    return new r(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                }, e.clone = function() {
                    return new r(this.a, this.b, this.c, this.d, this.e, this.f)
                }, e.translate = function(t, e) {
                    return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
                }, e.scale = function(t, e, i, n) {
                    return null == e && (e = t), (i || n) && this.translate(i, n), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (i || n) && this.translate(-i, -n), this
                }, e.rotate = function(e, i, n) {
                    e = t.rad(e), i = i || 0, n = n || 0;
                    var o = +l.cos(e).toFixed(9),
                        r = +l.sin(e).toFixed(9);
                    return this.add(o, r, -r, o, i, n), this.add(1, 0, 0, 1, -i, -n)
                }, e.skewX = function(t) {
                    return this.skew(t, 0)
                }, e.skewY = function(t) {
                    return this.skew(0, t)
                }, e.skew = function(e, i) {
                    e = e || 0, i = i || 0, e = t.rad(e), i = t.rad(i);
                    var n = l.tan(e).toFixed(9),
                        o = l.tan(i).toFixed(9);
                    return this.add(1, o, n, 1, 0, 0)
                }, e.x = function(t, e) {
                    return t * this.a + e * this.c + this.e
                }, e.y = function(t, e) {
                    return t * this.b + e * this.d + this.f
                }, e.get = function(t) {
                    return +this[a.fromCharCode(97 + t)].toFixed(4)
                }, e.toString = function() {
                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                }, e.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, e.determinant = function() {
                    return this.a * this.d - this.b * this.c
                }, e.split = function() {
                    var e = {};
                    e.dx = this.e, e.dy = this.f;
                    var o = [
                        [this.a, this.b],
                        [this.c, this.d]
                    ];
                    e.scalex = l.sqrt(i(o[0])), n(o[0]), e.shear = o[0][0] * o[1][0] + o[0][1] * o[1][1], o[1] = [o[1][0] - o[0][0] * e.shear, o[1][1] - o[0][1] * e.shear], e.scaley = l.sqrt(i(o[1])), n(o[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                    var r = o[0][1],
                        s = o[1][1];
                    return 0 > s ? (e.rotate = t.deg(l.acos(s)), 0 > r && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(l.asin(r)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
                }, e.toTransformString = function(t) {
                    var e = t || this.split();
                    return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : c) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : c) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : c))
                }
            }(r.prototype), t.Matrix = r, t.matrix = function(t, e, i, n, o, s) {
                return new r(t, e, i, n, o, s)
            }
        }), n.plugin(function(t, i, n, o, r) {
            function s(n) {
                return function(o) {
                    if (e.stop(), o instanceof r && 1 == o.node.childNodes.length && ("radialGradient" == o.node.firstChild.tagName || "linearGradient" == o.node.firstChild.tagName || "pattern" == o.node.firstChild.tagName) && (o = o.node.firstChild, f(this).appendChild(o), o = u(o)), o instanceof i)
                        if ("radialGradient" == o.type || "linearGradient" == o.type || "pattern" == o.type) {
                            o.node.id || v(o.node, {
                                id: o.id
                            });
                            var s = m(o.node.id)
                        } else s = o.attr(n);
                    else if (s = t.color(o), s.error) {
                        var a = t(f(this).ownerSVGElement).gradient(o);
                        a ? (a.node.id || v(a.node, {
                            id: a.id
                        }), s = m(a.node.id)) : s = o
                    } else s = g(s);
                    var l = {};
                    l[n] = s, v(this.node, l), this.node.style[n] = b
                }
            }

            function a(t) {
                e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
            }

            function l(t) {
                for (var e = [], i = t.childNodes, n = 0, o = i.length; o > n; n++) {
                    var r = i[n];
                    3 == r.nodeType && e.push(r.nodeValue), "tspan" == r.tagName && (1 == r.childNodes.length && 3 == r.firstChild.nodeType ? e.push(r.firstChild.nodeValue) : e.push(l(r)))
                }
                return e
            }

            function c() {
                return e.stop(), this.node.style.fontSize
            }
            var d = t._.make,
                u = t._.wrap,
                h = t.is,
                f = t._.getSomeDefs,
                p = /^url\((['"]?)([^)]+)\1\)$/,
                v = t._.$,
                m = t.url,
                g = String,
                y = t._.separator,
                b = "";
            t.deurl = function(t) {
                    var e = String(t).match(p);
                    return e ? e[2] : t
                }, e.on("snap.util.attr.mask", function(t) {
                    if (t instanceof i || t instanceof r) {
                        if (e.stop(), t instanceof r && 1 == t.node.childNodes.length && (t = t.node.firstChild, f(this).appendChild(t), t = u(t)), "mask" == t.type) var n = t;
                        else n = d("mask", f(this)), n.node.appendChild(t.node);
                        !n.node.id && v(n.node, {
                            id: n.id
                        }), v(this.node, {
                            mask: m(n.id)
                        })
                    }
                }),
                function(t) {
                    e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
                }(function(t) {
                    if (t instanceof i || t instanceof r) {
                        e.stop();
                        for (var n, o = t.node; o;) {
                            if ("clipPath" === o.nodeName) {
                                n = new i(o);
                                break
                            }
                            if ("svg" === o.nodeName) {
                                n = void 0;
                                break
                            }
                            o = o.parentNode
                        }
                        n || (n = d("clipPath", f(this)), n.node.appendChild(t.node), !n.node.id && v(n.node, {
                            id: n.id
                        })), v(this.node, {
                            "clip-path": m(n.node.id || n.id)
                        })
                    }
                }), e.on("snap.util.attr.fill", s("fill")), e.on("snap.util.attr.stroke", s("stroke"));
            var w = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            e.on("snap.util.grad.parse", function(t) {
                    function e(t, e) {
                        for (var i = (e - a) / (t - l), n = l; t > n; n++) r[n].offset = +(+a + i * (n - l)).toFixed(2);
                        l = t, a = e
                    }
                    t = g(t);
                    var i = t.match(w);
                    if (!i) return null;
                    var n = i[1],
                        o = i[2],
                        r = i[3];
                    o = o.split(/\s*,\s*/).map(function(t) {
                        return +t == t ? +t : t
                    }), 1 == o.length && 0 == o[0] && (o = []), r = r.split("-"), r = r.map(function(t) {
                        t = t.split(":");
                        var e = {
                            color: t[0]
                        };
                        return t[1] && (e.offset = parseFloat(t[1])), e
                    });
                    var s = r.length,
                        a = 0,
                        l = 0;
                    s--;
                    for (var c = 0; s > c; c++) "offset" in r[c] && e(c, r[c].offset);
                    return r[s].offset = r[s].offset || 100, e(s, r[s].offset), {
                        type: n,
                        params: o,
                        stops: r
                    }
                }), e.on("snap.util.attr.d", function(i) {
                    e.stop(), h(i, "array") && h(i[0], "array") && (i = t.path.toString.call(i)), i = g(i), i.match(/[ruo]/i) && (i = t.path.toAbsolute(i)), v(this.node, {
                        d: i
                    })
                })(-1), e.on("snap.util.attr.#text", function(t) {
                    e.stop(), t = g(t);
                    for (var i = o.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                    this.node.appendChild(i)
                })(-1), e.on("snap.util.attr.path", function(t) {
                    e.stop(), this.attr({
                        d: t
                    })
                })(-1), e.on("snap.util.attr.class", function(t) {
                    e.stop(), this.node.className.baseVal = t
                })(-1), e.on("snap.util.attr.viewBox", function(t) {
                    var i;
                    i = h(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : h(t, "array") ? t.join(" ") : t, v(this.node, {
                        viewBox: i
                    }), e.stop()
                })(-1), e.on("snap.util.attr.transform", function(t) {
                    this.transform(t), e.stop()
                })(-1), e.on("snap.util.attr.r", function(t) {
                    "rect" == this.type && (e.stop(), v(this.node, {
                        rx: t,
                        ry: t
                    }))
                })(-1), e.on("snap.util.attr.textpath", function(t) {
                    if (e.stop(), "text" == this.type) {
                        var n, o, r;
                        if (!t && this.textPath) {
                            for (o = this.textPath; o.node.firstChild;) this.node.appendChild(o.node.firstChild);
                            return o.remove(), void delete this.textPath
                        }
                        if (h(t, "string")) {
                            var s = f(this),
                                a = u(s.parentNode).path(t);
                            s.appendChild(a.node), n = a.id, a.attr({
                                id: n
                            })
                        } else t = u(t), t instanceof i && (n = t.attr("id"), n || (n = t.id, t.attr({
                            id: n
                        })));
                        if (n)
                            if (o = this.textPath, r = this.node, o) o.attr({
                                "xlink:href": "#" + n
                            });
                            else {
                                for (o = v("textPath", {
                                        "xlink:href": "#" + n
                                    }); r.firstChild;) o.appendChild(r.firstChild);
                                r.appendChild(o), this.textPath = u(o)
                            }
                    }
                })(-1), e.on("snap.util.attr.text", function(t) {
                    if ("text" == this.type) {
                        for (var i = this.node, n = function(t) {
                                var e = v("tspan");
                                if (h(t, "array"))
                                    for (var i = 0; i < t.length; i++) e.appendChild(n(t[i]));
                                else e.appendChild(o.doc.createTextNode(t));
                                return e.normalize && e.normalize(), e
                            }; i.firstChild;) i.removeChild(i.firstChild);
                        for (var r = n(t); r.firstChild;) i.appendChild(r.firstChild)
                    }
                    e.stop()
                })(-1), e.on("snap.util.attr.fontSize", a)(-1), e.on("snap.util.attr.font-size", a)(-1), e.on("snap.util.getattr.transform", function() {
                    return e.stop(), this.transform()
                })(-1), e.on("snap.util.getattr.textpath", function() {
                    return e.stop(), this.textPath
                })(-1),
                function() {
                    function i(i) {
                        return function() {
                            e.stop();
                            var n = o.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + i);
                            return "none" == n ? n : t(o.doc.getElementById(n.match(p)[1]))
                        }
                    }

                    function n(t) {
                        return function(i) {
                            e.stop();
                            var n = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                            if ("" == i || !i) return void(this.node.style[n] = "none");
                            if ("marker" == i.type) {
                                var o = i.node.id;
                                return o || v(i.node, {
                                    id: i.id
                                }), void(this.node.style[n] = m(o))
                            }
                        }
                    }
                    e.on("snap.util.getattr.marker-end", i("end"))(-1), e.on("snap.util.getattr.markerEnd", i("end"))(-1), e.on("snap.util.getattr.marker-start", i("start"))(-1), e.on("snap.util.getattr.markerStart", i("start"))(-1), e.on("snap.util.getattr.marker-mid", i("mid"))(-1), e.on("snap.util.getattr.markerMid", i("mid"))(-1), e.on("snap.util.attr.marker-end", n("end"))(-1), e.on("snap.util.attr.markerEnd", n("end"))(-1), e.on("snap.util.attr.marker-start", n("start"))(-1), e.on("snap.util.attr.markerStart", n("start"))(-1), e.on("snap.util.attr.marker-mid", n("mid"))(-1), e.on("snap.util.attr.markerMid", n("mid"))(-1)
                }(), e.on("snap.util.getattr.r", function() {
                    return "rect" == this.type && v(this.node, "rx") == v(this.node, "ry") ? (e.stop(), v(this.node, "rx")) : void 0
                })(-1), e.on("snap.util.getattr.text", function() {
                    if ("text" == this.type || "tspan" == this.type) {
                        e.stop();
                        var t = l(this.node);
                        return 1 == t.length ? t[0] : t
                    }
                })(-1), e.on("snap.util.getattr.#text", function() {
                    return this.node.textContent
                })(-1), e.on("snap.util.getattr.fill", function(i) {
                    if (!i) {
                        e.stop();
                        var n = e("snap.util.getattr.fill", this, !0).firstDefined();
                        return t(t.deurl(n)) || n
                    }
                })(-1), e.on("snap.util.getattr.stroke", function(i) {
                    if (!i) {
                        e.stop();
                        var n = e("snap.util.getattr.stroke", this, !0).firstDefined();
                        return t(t.deurl(n)) || n
                    }
                })(-1), e.on("snap.util.getattr.viewBox", function() {
                    e.stop();
                    var i = v(this.node, "viewBox");
                    return i ? (i = i.split(y), t._.box(+i[0], +i[1], +i[2], +i[3])) : void 0
                })(-1), e.on("snap.util.getattr.points", function() {
                    var t = v(this.node, "points");
                    return e.stop(), t ? t.split(y) : void 0
                })(-1), e.on("snap.util.getattr.path", function() {
                    var t = v(this.node, "d");
                    return e.stop(), t
                })(-1), e.on("snap.util.getattr.class", function() {
                    return this.node.className.baseVal
                })(-1), e.on("snap.util.getattr.fontSize", c)(-1), e.on("snap.util.getattr.font-size", c)(-1)
        }), n.plugin(function(t, e, i, n, o) {
            var r = /\S+/g,
                s = String,
                a = e.prototype;
            a.addClass = function(t) {
                var e, i, n, o, a = s(t || "").match(r) || [],
                    l = this.node,
                    c = l.className.baseVal,
                    d = c.match(r) || [];
                if (a.length) {
                    for (e = 0; n = a[e++];) i = d.indexOf(n), ~i || d.push(n);
                    o = d.join(" "), c != o && (l.className.baseVal = o)
                }
                return this
            }, a.removeClass = function(t) {
                var e, i, n, o, a = s(t || "").match(r) || [],
                    l = this.node,
                    c = l.className.baseVal,
                    d = c.match(r) || [];
                if (d.length) {
                    for (e = 0; n = a[e++];) i = d.indexOf(n), ~i && d.splice(i, 1);
                    o = d.join(" "), c != o && (l.className.baseVal = o)
                }
                return this
            }, a.hasClass = function(t) {
                var e = this.node,
                    i = e.className.baseVal,
                    n = i.match(r) || [];
                return !!~n.indexOf(t)
            }, a.toggleClass = function(t, e) {
                if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                var i, n, o, s, a = (t || "").match(r) || [],
                    l = this.node,
                    c = l.className.baseVal,
                    d = c.match(r) || [];
                for (i = 0; o = a[i++];) n = d.indexOf(o), ~n ? d.splice(n, 1) : d.push(o);
                return s = d.join(" "), c != s && (l.className.baseVal = s), this
            }
        }), n.plugin(function(t, i, n, o, r) {
            function s(t) {
                return t
            }

            function a(t) {
                return function(e) {
                    return +e.toFixed(3) + t
                }
            }
            var l = {
                    "+": function(t, e) {
                        return t + e
                    },
                    "-": function(t, e) {
                        return t - e
                    },
                    "/": function(t, e) {
                        return t / e
                    },
                    "*": function(t, e) {
                        return t * e
                    }
                },
                c = String,
                d = /[a-z]+$/i,
                u = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
            e.on("snap.util.attr", function(t) {
                var i = c(t).match(u);
                if (i) {
                    var n = e.nt(),
                        o = n.substring(n.lastIndexOf(".") + 1),
                        r = this.attr(o),
                        s = {};
                    e.stop();
                    var a = i[3] || "",
                        h = r.match(d),
                        f = l[i[1]];
                    if (h && h == a ? t = f(parseFloat(r), +i[2]) : (r = this.asPX(o), t = f(this.asPX(o), this.asPX(o, i[2] + a))), isNaN(r) || isNaN(t)) return;
                    s[o] = t, this.attr(s)
                }
            })(-10), e.on("snap.util.equal", function(t, i) {
                var n = c(this.attr(t) || ""),
                    o = c(i).match(u);
                if (o) {
                    e.stop();
                    var r = o[3] || "",
                        h = n.match(d),
                        f = l[o[1]];
                    return h && h == r ? {
                        from: parseFloat(n),
                        to: f(parseFloat(n), +o[2]),
                        f: a(h)
                    } : (n = this.asPX(t), {
                        from: n,
                        to: f(n, this.asPX(t, o[2] + r)),
                        f: s
                    })
                }
            })(-10)
        }), n.plugin(function(i, n, o, r, s) {
            var a = o.prototype,
                l = i.is;
            a.rect = function(t, e, i, n, o, r) {
                var s;
                return null == r && (r = o), l(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
                    x: t,
                    y: e,
                    width: i,
                    height: n
                }, null != o && (s.rx = o, s.ry = r)), this.el("rect", s)
            }, a.circle = function(t, e, i) {
                var n;
                return l(t, "object") && "[object Object]" == t ? n = t : null != t && (n = {
                    cx: t,
                    cy: e,
                    r: i
                }), this.el("circle", n)
            };
            var c = function() {
                function t() {
                    this.parentNode.removeChild(this)
                }
                return function(e, i) {
                    var n = r.doc.createElement("img"),
                        o = r.doc.body;
                    n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
                        i.call(n), n.onload = n.onerror = null, o.removeChild(n)
                    }, n.onerror = t, o.appendChild(n), n.src = e
                }
            }();
            a.image = function(t, e, n, o, r) {
                    var s = this.el("image");
                    if (l(t, "object") && "src" in t) s.attr(t);
                    else if (null != t) {
                        var a = {
                            "xlink:href": t,
                            preserveAspectRatio: "none"
                        };
                        null != e && null != n && (a.x = e, a.y = n), null != o && null != r ? (a.width = o, a.height = r) : c(t, function() {
                            i._.$(s.node, {
                                width: this.offsetWidth,
                                height: this.offsetHeight
                            })
                        }), i._.$(s.node, a)
                    }
                    return s
                }, a.ellipse = function(t, e, i, n) {
                    var o;
                    return l(t, "object") && "[object Object]" == t ? o = t : null != t && (o = {
                        cx: t,
                        cy: e,
                        rx: i,
                        ry: n
                    }), this.el("ellipse", o)
                }, a.path = function(t) {
                    var e;
                    return l(t, "object") && !l(t, "array") ? e = t : t && (e = {
                        d: t
                    }), this.el("path", e)
                }, a.group = a.g = function(t) {
                    var e = this.el("g");
                    return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                }, a.svg = function(t, e, i, n, o, r, s, a) {
                    var c = {};
                    return l(t, "object") && null == e ? c = t : (null != t && (c.x = t), null != e && (c.y = e), null != i && (c.width = i), null != n && (c.height = n), null != o && null != r && null != s && null != a && (c.viewBox = [o, r, s, a])), this.el("svg", c)
                }, a.mask = function(t) {
                    var e = this.el("mask");
                    return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                }, a.ptrn = function(t, e, i, n, o, r, s, a) {
                    if (l(t, "object")) var c = t;
                    else c = {
                        patternUnits: "userSpaceOnUse"
                    }, t && (c.x = t), e && (c.y = e), null != i && (c.width = i), null != n && (c.height = n), null != o && null != r && null != s && null != a ? c.viewBox = [o, r, s, a] : c.viewBox = [t || 0, e || 0, i || 0, n || 0];
                    return this.el("pattern", c)
                }, a.use = function(t) {
                    return null != t ? (t instanceof n && (t.attr("id") || t.attr({
                        id: i._.id(t)
                    }), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {
                        "xlink:href": "#" + t
                    })) : n.prototype.use.call(this)
                }, a.symbol = function(t, e, i, n) {
                    var o = {};
                    return null != t && null != e && null != i && null != n && (o.viewBox = [t, e, i, n]), this.el("symbol", o)
                }, a.text = function(t, e, i) {
                    var n = {};
                    return l(t, "object") ? n = t : null != t && (n = {
                        x: t,
                        y: e,
                        text: i || ""
                    }), this.el("text", n)
                }, a.line = function(t, e, i, n) {
                    var o = {};
                    return l(t, "object") ? o = t : null != t && (o = {
                        x1: t,
                        x2: i,
                        y1: e,
                        y2: n
                    }), this.el("line", o)
                }, a.polyline = function(t) {
                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                    var e = {};
                    return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {
                        points: t
                    }), this.el("polyline", e)
                }, a.polygon = function(t) {
                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                    var e = {};
                    return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {
                        points: t
                    }), this.el("polygon", e)
                },
                function() {
                    function n() {
                        return this.selectAll("stop")
                    }

                    function o(t, e) {
                        var n = u("stop"),
                            o = {
                                offset: +e + "%"
                            };
                        t = i.color(t), o["stop-color"] = t.hex, t.opacity < 1 && (o["stop-opacity"] = t.opacity), u(n, o);
                        for (var r, s = this.stops(), a = 0; a < s.length; a++) {
                            var l = parseFloat(s[a].attr("offset"));
                            if (l > e) {
                                this.node.insertBefore(n, s[a].node), r = !0;
                                break
                            }
                        }
                        return r || this.node.appendChild(n), this
                    }

                    function r() {
                        if ("linearGradient" == this.type) {
                            var t = u(this.node, "x1") || 0,
                                e = u(this.node, "x2") || 1,
                                n = u(this.node, "y1") || 0,
                                o = u(this.node, "y2") || 0;
                            return i._.box(t, n, math.abs(e - t), math.abs(o - n))
                        }
                        var r = this.node.cx || .5,
                            s = this.node.cy || .5,
                            a = this.node.r || 0;
                        return i._.box(r - a, s - a, 2 * a, 2 * a)
                    }

                    function s(t) {
                        var n = t,
                            o = this.stops();
                        if ("string" == typeof t && (n = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), i.is(n, "array")) {
                            for (var r = 0; r < o.length; r++)
                                if (n[r]) {
                                    var s = i.color(n[r].color),
                                        a = {
                                            offset: n[r].offset + "%"
                                        };
                                    a["stop-color"] = s.hex, s.opacity < 1 && (a["stop-opacity"] = s.opacity), o[r].attr(a)
                                } else o[r].remove();
                            for (r = o.length; r < n.length; r++) this.addStop(n[r].color, n[r].offset);
                            return this
                        }
                    }

                    function l(t, i) {
                        var n, o = e("snap.util.grad.parse", null, i).firstDefined();
                        if (!o) return null;
                        o.params.unshift(t), n = "l" == o.type.toLowerCase() ? c.apply(0, o.params) : d.apply(0, o.params), o.type != o.type.toLowerCase() && u(n.node, {
                            gradientUnits: "userSpaceOnUse"
                        });
                        for (var r = o.stops, s = r.length, a = 0; s > a; a++) {
                            var l = r[a];
                            n.addStop(l.color, l.offset)
                        }
                        return n
                    }

                    function c(t, e, a, l, c) {
                        var d = i._.make("linearGradient", t);
                        return d.stops = n, d.addStop = o, d.getBBox = r, d.setStops = s, null != e && u(d.node, {
                            x1: e,
                            y1: a,
                            x2: l,
                            y2: c
                        }), d
                    }

                    function d(t, e, s, a, l, c) {
                        var d = i._.make("radialGradient", t);
                        return d.stops = n, d.addStop = o, d.getBBox = r, null != e && u(d.node, {
                            cx: e,
                            cy: s,
                            r: a
                        }), null != l && null != c && u(d.node, {
                            fx: l,
                            fy: c
                        }), d
                    }
                    var u = i._.$;
                    a.gradient = function(t) {
                        return l(this.defs, t)
                    }, a.gradientLinear = function(t, e, i, n) {
                        return c(this.defs, t, e, i, n)
                    }, a.gradientRadial = function(t, e, i, n, o) {
                        return d(this.defs, t, e, i, n, o)
                    }, a.toString = function() {
                        var t, e = this.node.ownerDocument,
                            n = e.createDocumentFragment(),
                            o = e.createElement("div"),
                            r = this.node.cloneNode(!0);
                        return n.appendChild(o), o.appendChild(r), i._.$(r, {
                            xmlns: "http://www.w3.org/2000/svg"
                        }), t = o.innerHTML, n.removeChild(n.firstChild), t
                    }, a.toDataURL = function() {
                        return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
                    }, a.clear = function() {
                        for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({
                            node: e
                        }), e = t
                    }
                }()
        }), n.plugin(function(t, e, i, n) {
            function o(t) {
                var e = o.ps = o.ps || {};
                return e[t] ? e[t].sleep = 100 : e[t] = {
                    sleep: 100
                }, setTimeout(function() {
                    for (var i in e) e[z](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
                }), e[t]
            }

            function r(t, e, i, n) {
                return null == t && (t = e = i = n = 0), null == e && (e = t.y, i = t.width, n = t.height, t = t.x), {
                    x: t,
                    y: e,
                    width: i,
                    w: i,
                    height: n,
                    h: n,
                    x2: t + i,
                    y2: e + n,
                    cx: t + i / 2,
                    cy: e + n / 2,
                    r1: R.min(i, n) / 2,
                    r2: R.max(i, n) / 2,
                    r0: R.sqrt(i * i + n * n) / 2,
                    path: k(t, e, i, n),
                    vb: [t, e, i, n].join(" ")
                }
            }

            function s() {
                return this.join(",").replace(j, "$1")
            }

            function a(t) {
                var e = L(t);
                return e.toString = s, e
            }

            function l(t, e, i, n, o, r, s, a, l) {
                return null == l ? v(t, e, i, n, o, r, s, a) : d(t, e, i, n, o, r, s, a, m(t, e, i, n, o, r, s, a, l))
            }

            function c(i, n) {
                function o(t) {
                    return +(+t).toFixed(3)
                }
                return t._.cacher(function(t, r, s) {
                    t instanceof e && (t = t.attr("d")), t = P(t);
                    for (var a, c, u, h, f, p = "", v = {}, m = 0, g = 0, y = t.length; y > g; g++) {
                        if (u = t[g], "M" == u[0]) a = +u[1], c = +u[2];
                        else {
                            if (h = l(a, c, u[1], u[2], u[3], u[4], u[5], u[6]), m + h > r) {
                                if (n && !v.start) {
                                    if (f = l(a, c, u[1], u[2], u[3], u[4], u[5], u[6], r - m), p += ["C" + o(f.start.x), o(f.start.y), o(f.m.x), o(f.m.y), o(f.x), o(f.y)], s) return p;
                                    v.start = p, p = ["M" + o(f.x), o(f.y) + "C" + o(f.n.x), o(f.n.y), o(f.end.x), o(f.end.y), o(u[5]), o(u[6])].join(), m += h, a = +u[5], c = +u[6];
                                    continue
                                }
                                if (!i && !n) return f = l(a, c, u[1], u[2], u[3], u[4], u[5], u[6], r - m)
                            }
                            m += h, a = +u[5], c = +u[6]
                        }
                        p += u.shift() + u
                    }
                    return v.end = p, f = i ? m : n ? v : d(a, c, u[0], u[1], u[2], u[3], u[4], u[5], 1)
                }, null, t._.clone)
            }

            function d(t, e, i, n, o, r, s, a, l) {
                var c = 1 - l,
                    d = W(c, 3),
                    u = W(c, 2),
                    h = l * l,
                    f = h * l,
                    p = d * t + 3 * u * l * i + 3 * c * l * l * o + f * s,
                    v = d * e + 3 * u * l * n + 3 * c * l * l * r + f * a,
                    m = t + 2 * l * (i - t) + h * (o - 2 * i + t),
                    g = e + 2 * l * (n - e) + h * (r - 2 * n + e),
                    y = i + 2 * l * (o - i) + h * (s - 2 * o + i),
                    b = n + 2 * l * (r - n) + h * (a - 2 * r + n),
                    w = c * t + l * i,
                    x = c * e + l * n,
                    S = c * o + l * s,
                    C = c * r + l * a,
                    k = 90 - 180 * R.atan2(m - y, g - b) / U;
                return {
                    x: p,
                    y: v,
                    m: {
                        x: m,
                        y: g
                    },
                    n: {
                        x: y,
                        y: b
                    },
                    start: {
                        x: w,
                        y: x
                    },
                    end: {
                        x: S,
                        y: C
                    },
                    alpha: k
                }
            }

            function u(e, i, n, o, s, a, l, c) {
                t.is(e, "array") || (e = [e, i, n, o, s, a, l, c]);
                var d = $.apply(null, e);
                return r(d.min.x, d.min.y, d.max.x - d.min.x, d.max.y - d.min.y)
            }

            function h(t, e, i) {
                return e >= t.x && e <= t.x + t.width && i >= t.y && i <= t.y + t.height
            }

            function f(t, e) {
                return t = r(t), e = r(e), h(e, t.x, t.y) || h(e, t.x2, t.y) || h(e, t.x, t.y2) || h(e, t.x2, t.y2) || h(t, e.x, e.y) || h(t, e.x2, e.y) || h(t, e.x, e.y2) || h(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
            }

            function p(t, e, i, n, o) {
                var r = -3 * e + 9 * i - 9 * n + 3 * o,
                    s = t * r + 6 * e - 12 * i + 6 * n;
                return t * s - 3 * e + 3 * i
            }

            function v(t, e, i, n, o, r, s, a, l) {
                null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
                for (var c = l / 2, d = 12, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, v = 0; d > v; v++) {
                    var m = c * u[v] + c,
                        g = p(m, t, i, o, s),
                        y = p(m, e, n, r, a),
                        b = g * g + y * y;
                    f += h[v] * R.sqrt(b)
                }
                return c * f
            }

            function m(t, e, i, n, o, r, s, a, l) {
                if (!(0 > l || v(t, e, i, n, o, r, s, a) < l)) {
                    var c, d = 1,
                        u = d / 2,
                        h = d - u,
                        f = .01;
                    for (c = v(t, e, i, n, o, r, s, a, h); V(c - l) > f;) u /= 2, h += (l > c ? 1 : -1) * u, c = v(t, e, i, n, o, r, s, a, h);
                    return h
                }
            }

            function g(t, e, i, n, o, r, s, a) {
                if (!(q(t, i) < H(o, s) || H(t, i) > q(o, s) || q(e, n) < H(r, a) || H(e, n) > q(r, a))) {
                    var l = (t * n - e * i) * (o - s) - (t - i) * (o * a - r * s),
                        c = (t * n - e * i) * (r - a) - (e - n) * (o * a - r * s),
                        d = (t - i) * (r - a) - (e - n) * (o - s);
                    if (d) {
                        var u = l / d,
                            h = c / d,
                            f = +u.toFixed(2),
                            p = +h.toFixed(2);
                        if (!(f < +H(t, i).toFixed(2) || f > +q(t, i).toFixed(2) || f < +H(o, s).toFixed(2) || f > +q(o, s).toFixed(2) || p < +H(e, n).toFixed(2) || p > +q(e, n).toFixed(2) || p < +H(r, a).toFixed(2) || p > +q(r, a).toFixed(2))) return {
                            x: u,
                            y: h
                        }
                    }
                }
            }

            function y(t, e, i) {
                var n = u(t),
                    o = u(e);
                if (!f(n, o)) return i ? 0 : [];
                for (var r = v.apply(0, t), s = v.apply(0, e), a = ~~(r / 8), l = ~~(s / 8), c = [], h = [], p = {}, m = i ? 0 : [], y = 0; a + 1 > y; y++) {
                    var b = d.apply(0, t.concat(y / a));
                    c.push({
                        x: b.x,
                        y: b.y,
                        t: y / a
                    })
                }
                for (y = 0; l + 1 > y; y++) b = d.apply(0, e.concat(y / l)), h.push({
                    x: b.x,
                    y: b.y,
                    t: y / l
                });
                for (y = 0; a > y; y++)
                    for (var w = 0; l > w; w++) {
                        var x = c[y],
                            S = c[y + 1],
                            C = h[w],
                            k = h[w + 1],
                            T = V(S.x - x.x) < .001 ? "y" : "x",
                            E = V(k.x - C.x) < .001 ? "y" : "x",
                            _ = g(x.x, x.y, S.x, S.y, C.x, C.y, k.x, k.y);
                        if (_) {
                            if (p[_.x.toFixed(4)] == _.y.toFixed(4)) continue;
                            p[_.x.toFixed(4)] = _.y.toFixed(4);
                            var A = x.t + V((_[T] - x[T]) / (S[T] - x[T])) * (S.t - x.t),
                                D = C.t + V((_[E] - C[E]) / (k[E] - C[E])) * (k.t - C.t);
                            A >= 0 && 1 >= A && D >= 0 && 1 >= D && (i ? m++ : m.push({
                                x: _.x,
                                y: _.y,
                                t1: A,
                                t2: D
                            }))
                        }
                    }
                return m
            }

            function b(t, e) {
                return x(t, e)
            }

            function w(t, e) {
                return x(t, e, 1)
            }

            function x(t, e, i) {
                t = P(t), e = P(e);
                for (var n, o, r, s, a, l, c, d, u, h, f = i ? 0 : [], p = 0, v = t.length; v > p; p++) {
                    var m = t[p];
                    if ("M" == m[0]) n = a = m[1], o = l = m[2];
                    else {
                        "C" == m[0] ? (u = [n, o].concat(m.slice(1)), n = u[6], o = u[7]) : (u = [n, o, n, o, a, l, a, l], n = a, o = l);
                        for (var g = 0, b = e.length; b > g; g++) {
                            var w = e[g];
                            if ("M" == w[0]) r = c = w[1], s = d = w[2];
                            else {
                                "C" == w[0] ? (h = [r, s].concat(w.slice(1)), r = h[6], s = h[7]) : (h = [r, s, r, s, c, d, c, d], r = c, s = d);
                                var x = y(u, h, i);
                                if (i) f += x;
                                else {
                                    for (var S = 0, C = x.length; C > S; S++) x[S].segment1 = p, x[S].segment2 = g, x[S].bez1 = u, x[S].bez2 = h;
                                    f = f.concat(x)
                                }
                            }
                        }
                    }
                }
                return f
            }

            function S(t, e, i) {
                var n = C(t);
                return h(n, e, i) && x(t, [
                    ["M", e, i],
                    ["H", n.x2 + 10]
                ], 1) % 2 == 1
            }

            function C(t) {
                var e = o(t);
                if (e.bbox) return L(e.bbox);
                if (!t) return r();
                t = P(t);
                for (var i, n = 0, s = 0, a = [], l = [], c = 0, d = t.length; d > c; c++)
                    if (i = t[c], "M" == i[0]) n = i[1], s = i[2], a.push(n), l.push(s);
                    else {
                        var u = $(n, s, i[1], i[2], i[3], i[4], i[5], i[6]);
                        a = a.concat(u.min.x, u.max.x), l = l.concat(u.min.y, u.max.y), n = i[5], s = i[6]
                    } var h = H.apply(0, a),
                    f = H.apply(0, l),
                    p = q.apply(0, a),
                    v = q.apply(0, l),
                    m = r(h, f, p - h, v - f);
                return e.bbox = L(m), m
            }

            function k(t, e, i, n, o) {
                if (o) return [
                    ["M", +t + +o, e],
                    ["l", i - 2 * o, 0],
                    ["a", o, o, 0, 0, 1, o, o],
                    ["l", 0, n - 2 * o],
                    ["a", o, o, 0, 0, 1, -o, o],
                    ["l", 2 * o - i, 0],
                    ["a", o, o, 0, 0, 1, -o, -o],
                    ["l", 0, 2 * o - n],
                    ["a", o, o, 0, 0, 1, o, -o],
                    ["z"]
                ];
                var r = [
                    ["M", t, e],
                    ["l", i, 0],
                    ["l", 0, n],
                    ["l", -i, 0],
                    ["z"]
                ];
                return r.toString = s, r
            }

            function T(t, e, i, n, o) {
                if (null == o && null == n && (n = i), t = +t, e = +e, i = +i, n = +n, null != o) var r = Math.PI / 180,
                    a = t + i * Math.cos(-n * r),
                    l = t + i * Math.cos(-o * r),
                    c = e + i * Math.sin(-n * r),
                    d = e + i * Math.sin(-o * r),
                    u = [
                        ["M", a, c],
                        ["A", i, i, 0, +(o - n > 180), 0, l, d]
                    ];
                else u = [
                    ["M", t, e],
                    ["m", 0, -n],
                    ["a", i, n, 0, 1, 1, 0, 2 * n],
                    ["a", i, n, 0, 1, 1, 0, -2 * n],
                    ["z"]
                ];
                return u.toString = s, u
            }

            function E(e) {
                var i = o(e),
                    n = String.prototype.toLowerCase;
                if (i.rel) return a(i.rel);
                t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
                var r = [],
                    l = 0,
                    c = 0,
                    d = 0,
                    u = 0,
                    h = 0;
                "M" == e[0][0] && (l = e[0][1], c = e[0][2], d = l, u = c, h++, r.push(["M", l, c]));
                for (var f = h, p = e.length; p > f; f++) {
                    var v = r[f] = [],
                        m = e[f];
                    if (m[0] != n.call(m[0])) switch (v[0] = n.call(m[0]), v[0]) {
                        case "a":
                            v[1] = m[1], v[2] = m[2], v[3] = m[3], v[4] = m[4], v[5] = m[5], v[6] = +(m[6] - l).toFixed(3), v[7] = +(m[7] - c).toFixed(3);
                            break;
                        case "v":
                            v[1] = +(m[1] - c).toFixed(3);
                            break;
                        case "m":
                            d = m[1], u = m[2];
                        default:
                            for (var g = 1, y = m.length; y > g; g++) v[g] = +(m[g] - (g % 2 ? l : c)).toFixed(3)
                    } else {
                        v = r[f] = [], "m" == m[0] && (d = m[1] + l, u = m[2] + c);
                        for (var b = 0, w = m.length; w > b; b++) r[f][b] = m[b]
                    }
                    var x = r[f].length;
                    switch (r[f][0]) {
                        case "z":
                            l = d, c = u;
                            break;
                        case "h":
                            l += +r[f][x - 1];
                            break;
                        case "v":
                            c += +r[f][x - 1];
                            break;
                        default:
                            l += +r[f][x - 2], c += +r[f][x - 1]
                    }
                }
                return r.toString = s, i.rel = a(r), r
            }

            function _(e) {
                var i = o(e);
                if (i.abs) return a(i.abs);
                if (M(e, "array") && M(e && e[0], "array") || (e = t.parsePathString(e)),
                    !e || !e.length) return [
                    ["M", 0, 0]
                ];
                var n, r = [],
                    l = 0,
                    c = 0,
                    d = 0,
                    u = 0,
                    h = 0;
                "M" == e[0][0] && (l = +e[0][1], c = +e[0][2], d = l, u = c, h++, r[0] = ["M", l, c]);
                for (var f, p, v = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = h, g = e.length; g > m; m++) {
                    if (r.push(f = []), p = e[m], n = p[0], n != n.toUpperCase()) switch (f[0] = n.toUpperCase(), f[0]) {
                            case "A":
                                f[1] = p[1], f[2] = p[2], f[3] = p[3], f[4] = p[4], f[5] = p[5], f[6] = +p[6] + l, f[7] = +p[7] + c;
                                break;
                            case "V":
                                f[1] = +p[1] + c;
                                break;
                            case "H":
                                f[1] = +p[1] + l;
                                break;
                            case "R":
                                for (var y = [l, c].concat(p.slice(1)), b = 2, w = y.length; w > b; b++) y[b] = +y[b] + l, y[++b] = +y[b] + c;
                                r.pop(), r = r.concat(B(y, v));
                                break;
                            case "O":
                                r.pop(), y = T(l, c, p[1], p[2]), y.push(y[0]), r = r.concat(y);
                                break;
                            case "U":
                                r.pop(), r = r.concat(T(l, c, p[1], p[2], p[3])), f = ["U"].concat(r[r.length - 1].slice(-2));
                                break;
                            case "M":
                                d = +p[1] + l, u = +p[2] + c;
                            default:
                                for (b = 1, w = p.length; w > b; b++) f[b] = +p[b] + (b % 2 ? l : c)
                        } else if ("R" == n) y = [l, c].concat(p.slice(1)), r.pop(), r = r.concat(B(y, v)), f = ["R"].concat(p.slice(-2));
                        else if ("O" == n) r.pop(), y = T(l, c, p[1], p[2]), y.push(y[0]), r = r.concat(y);
                    else if ("U" == n) r.pop(), r = r.concat(T(l, c, p[1], p[2], p[3])), f = ["U"].concat(r[r.length - 1].slice(-2));
                    else
                        for (var x = 0, S = p.length; S > x; x++) f[x] = p[x];
                    if (n = n.toUpperCase(), "O" != n) switch (f[0]) {
                        case "Z":
                            l = +d, c = +u;
                            break;
                        case "H":
                            l = f[1];
                            break;
                        case "V":
                            c = f[1];
                            break;
                        case "M":
                            d = f[f.length - 2], u = f[f.length - 1];
                        default:
                            l = f[f.length - 2], c = f[f.length - 1]
                    }
                }
                return r.toString = s, i.abs = a(r), r
            }

            function A(t, e, i, n) {
                return [t, e, i, n, i, n]
            }

            function D(t, e, i, n, o, r) {
                var s = 1 / 3,
                    a = 2 / 3;
                return [s * t + a * i, s * e + a * n, s * o + a * i, s * r + a * n, o, r]
            }

            function F(e, i, n, o, r, s, a, l, c, d) {
                var u, h = 120 * U / 180,
                    f = U / 180 * (+r || 0),
                    p = [],
                    v = t._.cacher(function(t, e, i) {
                        var n = t * R.cos(i) - e * R.sin(i),
                            o = t * R.sin(i) + e * R.cos(i);
                        return {
                            x: n,
                            y: o
                        }
                    });
                if (!n || !o) return [e, i, l, c, l, c];
                if (d) k = d[0], T = d[1], S = d[2], C = d[3];
                else {
                    u = v(e, i, -f), e = u.x, i = u.y, u = v(l, c, -f), l = u.x, c = u.y;
                    var m = (R.cos(U / 180 * r), R.sin(U / 180 * r), (e - l) / 2),
                        g = (i - c) / 2,
                        y = m * m / (n * n) + g * g / (o * o);
                    y > 1 && (y = R.sqrt(y), n = y * n, o = y * o);
                    var b = n * n,
                        w = o * o,
                        x = (s == a ? -1 : 1) * R.sqrt(V((b * w - b * g * g - w * m * m) / (b * g * g + w * m * m))),
                        S = x * n * g / o + (e + l) / 2,
                        C = x * -o * m / n + (i + c) / 2,
                        k = R.asin(((i - C) / o).toFixed(9)),
                        T = R.asin(((c - C) / o).toFixed(9));
                    k = S > e ? U - k : k, T = S > l ? U - T : T, 0 > k && (k = 2 * U + k), 0 > T && (T = 2 * U + T), a && k > T && (k -= 2 * U), !a && T > k && (T -= 2 * U)
                }
                var E = T - k;
                if (V(E) > h) {
                    var _ = T,
                        A = l,
                        D = c;
                    T = k + h * (a && T > k ? 1 : -1), l = S + n * R.cos(T), c = C + o * R.sin(T), p = F(l, c, n, o, r, 0, a, A, D, [T, _, S, C])
                }
                E = T - k;
                var $ = R.cos(k),
                    P = R.sin(k),
                    I = R.cos(T),
                    B = R.sin(T),
                    O = R.tan(E / 4),
                    M = 4 / 3 * n * O,
                    L = 4 / 3 * o * O,
                    z = [e, i],
                    j = [e + M * P, i - L * $],
                    N = [l + M * B, c - L * I],
                    H = [l, c];
                if (j[0] = 2 * z[0] - j[0], j[1] = 2 * z[1] - j[1], d) return [j, N, H].concat(p);
                p = [j, N, H].concat(p).join().split(",");
                for (var q = [], W = 0, X = p.length; X > W; W++) q[W] = W % 2 ? v(p[W - 1], p[W], f).y : v(p[W], p[W + 1], f).x;
                return q
            }

            function $(t, e, i, n, o, r, s, a) {
                for (var l, c, d, u, h, f, p, v, m = [], g = [
                        [],
                        []
                    ], y = 0; 2 > y; ++y)
                    if (0 == y ? (c = 6 * t - 12 * i + 6 * o, l = -3 * t + 9 * i - 9 * o + 3 * s, d = 3 * i - 3 * t) : (c = 6 * e - 12 * n + 6 * r, l = -3 * e + 9 * n - 9 * r + 3 * a, d = 3 * n - 3 * e), V(l) < 1e-12) {
                        if (V(c) < 1e-12) continue;
                        u = -d / c, u > 0 && 1 > u && m.push(u)
                    } else p = c * c - 4 * d * l, v = R.sqrt(p), 0 > p || (h = (-c + v) / (2 * l), h > 0 && 1 > h && m.push(h), f = (-c - v) / (2 * l), f > 0 && 1 > f && m.push(f));
                for (var b, w = m.length, x = w; w--;) u = m[w], b = 1 - u, g[0][w] = b * b * b * t + 3 * b * b * u * i + 3 * b * u * u * o + u * u * u * s, g[1][w] = b * b * b * e + 3 * b * b * u * n + 3 * b * u * u * r + u * u * u * a;
                return g[0][x] = t, g[1][x] = e, g[0][x + 1] = s, g[1][x + 1] = a, g[0].length = g[1].length = x + 2, {
                    min: {
                        x: H.apply(0, g[0]),
                        y: H.apply(0, g[1])
                    },
                    max: {
                        x: q.apply(0, g[0]),
                        y: q.apply(0, g[1])
                    }
                }
            }

            function P(t, e) {
                var i = !e && o(t);
                if (!e && i.curve) return a(i.curve);
                for (var n = _(t), r = e && _(e), s = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, l = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, c = (function(t, e, i) {
                        var n, o;
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch (!(t[0] in {
                            T: 1,
                            Q: 1
                        }) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2];
                                break;
                            case "A":
                                t = ["C"].concat(F.apply(0, [e.x, e.y].concat(t.slice(1))));
                                break;
                            case "S":
                                "C" == i || "S" == i ? (n = 2 * e.x - e.bx, o = 2 * e.y - e.by) : (n = e.x, o = e.y), t = ["C", n, o].concat(t.slice(1));
                                break;
                            case "T":
                                "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(D(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"].concat(D(e.x, e.y, t[1], t[2], t[3], t[4]));
                                break;
                            case "L":
                                t = ["C"].concat(A(e.x, e.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"].concat(A(e.x, e.y, t[1], e.y));
                                break;
                            case "V":
                                t = ["C"].concat(A(e.x, e.y, e.x, t[1]));
                                break;
                            case "Z":
                                t = ["C"].concat(A(e.x, e.y, e.X, e.Y))
                        }
                        return t
                    }), d = function(t, e) {
                        if (t[e].length > 7) {
                            t[e].shift();
                            for (var i = t[e]; i.length;) h[e] = "A", r && (f[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                            t.splice(e, 1), g = q(n.length, r && r.length || 0)
                        }
                    }, u = function(t, e, i, o, s) {
                        t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", o.x, o.y]), i.bx = 0, i.by = 0, i.x = t[s][1], i.y = t[s][2], g = q(n.length, r && r.length || 0))
                    }, h = [], f = [], p = "", v = "", m = 0, g = q(n.length, r && r.length || 0); g > m; m++) {
                    n[m] && (p = n[m][0]), "C" != p && (h[m] = p, m && (v = h[m - 1])), n[m] = c(n[m], s, v), "A" != h[m] && "C" == p && (h[m] = "C"), d(n, m), r && (r[m] && (p = r[m][0]), "C" != p && (f[m] = p, m && (v = f[m - 1])), r[m] = c(r[m], l, v), "A" != f[m] && "C" == p && (f[m] = "C"), d(r, m)), u(n, r, s, l, m), u(r, n, l, s, m);
                    var y = n[m],
                        b = r && r[m],
                        w = y.length,
                        x = r && b.length;
                    s.x = y[w - 2], s.y = y[w - 1], s.bx = N(y[w - 4]) || s.x, s.by = N(y[w - 3]) || s.y, l.bx = r && (N(b[x - 4]) || l.x), l.by = r && (N(b[x - 3]) || l.y), l.x = r && b[x - 2], l.y = r && b[x - 1]
                }
                return r || (i.curve = a(n)), r ? [n, r] : n
            }

            function I(t, e) {
                if (!e) return t;
                var i, n, o, r, s, a, l;
                for (t = P(t), o = 0, s = t.length; s > o; o++)
                    for (l = t[o], r = 1, a = l.length; a > r; r += 2) i = e.x(l[r], l[r + 1]), n = e.y(l[r], l[r + 1]), l[r] = i, l[r + 1] = n;
                return t
            }

            function B(t, e) {
                for (var i = [], n = 0, o = t.length; o - 2 * !e > n; n += 2) {
                    var r = [{
                        x: +t[n - 2],
                        y: +t[n - 1]
                    }, {
                        x: +t[n],
                        y: +t[n + 1]
                    }, {
                        x: +t[n + 2],
                        y: +t[n + 3]
                    }, {
                        x: +t[n + 4],
                        y: +t[n + 5]
                    }];
                    e ? n ? o - 4 == n ? r[3] = {
                        x: +t[0],
                        y: +t[1]
                    } : o - 2 == n && (r[2] = {
                        x: +t[0],
                        y: +t[1]
                    }, r[3] = {
                        x: +t[2],
                        y: +t[3]
                    }) : r[0] = {
                        x: +t[o - 2],
                        y: +t[o - 1]
                    } : o - 4 == n ? r[3] = r[2] : n || (r[0] = {
                        x: +t[n],
                        y: +t[n + 1]
                    }), i.push(["C", (-r[0].x + 6 * r[1].x + r[2].x) / 6, (-r[0].y + 6 * r[1].y + r[2].y) / 6, (r[1].x + 6 * r[2].x - r[3].x) / 6, (r[1].y + 6 * r[2].y - r[3].y) / 6, r[2].x, r[2].y])
                }
                return i
            }
            var O = e.prototype,
                M = t.is,
                L = t._.clone,
                z = "hasOwnProperty",
                j = /,?([a-z]),?/gi,
                N = parseFloat,
                R = Math,
                U = R.PI,
                H = R.min,
                q = R.max,
                W = R.pow,
                V = R.abs,
                X = c(1),
                Y = c(),
                G = c(0, 1),
                Q = t._unit2px,
                K = {
                    path: function(t) {
                        return t.attr("path")
                    },
                    circle: function(t) {
                        var e = Q(t);
                        return T(e.cx, e.cy, e.r)
                    },
                    ellipse: function(t) {
                        var e = Q(t);
                        return T(e.cx || 0, e.cy || 0, e.rx, e.ry)
                    },
                    rect: function(t) {
                        var e = Q(t);
                        return k(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                    },
                    image: function(t) {
                        var e = Q(t);
                        return k(e.x || 0, e.y || 0, e.width, e.height)
                    },
                    line: function(t) {
                        return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                    },
                    polyline: function(t) {
                        return "M" + t.attr("points")
                    },
                    polygon: function(t) {
                        return "M" + t.attr("points") + "z"
                    },
                    deflt: function(t) {
                        var e = t.node.getBBox();
                        return k(e.x, e.y, e.width, e.height)
                    }
                };
            t.path = o, t.path.getTotalLength = X, t.path.getPointAtLength = Y, t.path.getSubpath = function(t, e, i) {
                if (this.getTotalLength(t) - i < 1e-6) return G(t, e).end;
                var n = G(t, i, 1);
                return e ? G(n, e).end : n
            }, O.getTotalLength = function() {
                return this.node.getTotalLength ? this.node.getTotalLength() : void 0
            }, O.getPointAtLength = function(t) {
                return Y(this.attr("d"), t)
            }, O.getSubpath = function(e, i) {
                return t.path.getSubpath(this.attr("d"), e, i)
            }, t._.box = r, t.path.findDotsAtSegment = d, t.path.bezierBBox = u, t.path.isPointInsideBBox = h, t.closest = function(e, i, n, o) {
                for (var s = 100, a = r(e - s / 2, i - s / 2, s, s), l = [], c = n[0].hasOwnProperty("x") ? function(t) {
                        return {
                            x: n[t].x,
                            y: n[t].y
                        }
                    } : function(t) {
                        return {
                            x: n[t],
                            y: o[t]
                        }
                    }, d = 0; 1e6 >= s && !d;) {
                    for (var u = 0, f = n.length; f > u; u++) {
                        var p = c(u);
                        if (h(a, p.x, p.y)) {
                            d++, l.push(p);
                            break
                        }
                    }
                    d || (s *= 2, a = r(e - s / 2, i - s / 2, s, s))
                }
                if (1e6 != s) {
                    var v, m = 1 / 0;
                    for (u = 0, f = l.length; f > u; u++) {
                        var g = t.len(e, i, l[u].x, l[u].y);
                        m > g && (m = g, l[u].len = g, v = l[u])
                    }
                    return v
                }
            }, t.path.isBBoxIntersect = f, t.path.intersection = b, t.path.intersectionNumber = w, t.path.isPointInside = S, t.path.getBBox = C, t.path.get = K, t.path.toRelative = E, t.path.toAbsolute = _, t.path.toCubic = P, t.path.map = I, t.path.toString = s, t.path.clone = a
        }), n.plugin(function(t, n, o, r) {
            var s = Math.max,
                a = Math.min,
                l = function(t) {
                    if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                        for (var e = 0, i = t.length; i > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                },
                c = l.prototype;
            c.push = function() {
                for (var t, e, i = 0, n = arguments.length; n > i; i++) t = arguments[i], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
                return this
            }, c.pop = function() {
                return this.length && delete this[this.length--], this.items.pop()
            }, c.forEach = function(t, e) {
                for (var i = 0, n = this.items.length; n > i; i++)
                    if (t.call(e, this.items[i], i) === !1) return this;
                return this
            }, c.animate = function(n, o, r, s) {
                "function" != typeof r || r.length || (s = r, r = i.linear), n instanceof t._.Animation && (s = n.callback, r = n.easing, o = r.dur, n = n.attr);
                var a = arguments;
                if (t.is(n, "array") && t.is(a[a.length - 1], "array")) var l = !0;
                var c, d = function() {
                        c ? this.b = c : c = this.b
                    },
                    u = 0,
                    h = this,
                    f = s && function() {
                        ++u == h.length && s.call(this)
                    };
                return this.forEach(function(t, i) {
                    e.once("snap.animcreated." + t.id, d), l ? a[i] && t.animate.apply(t, a[i]) : t.animate(n, o, r, f)
                })
            }, c.remove = function() {
                for (; this.length;) this.pop().remove();
                return this
            }, c.bind = function(t, e, i) {
                var n = {};
                if ("function" == typeof e) this.bindings[t] = e;
                else {
                    var o = i || t;
                    this.bindings[t] = function(t) {
                        n[o] = t, e.attr(n)
                    }
                }
                return this
            }, c.attr = function(t) {
                var e = {};
                for (var i in t) this.bindings[i] ? this.bindings[i](t[i]) : e[i] = t[i];
                for (var n = 0, o = this.items.length; o > n; n++) this.items[n].attr(e);
                return this
            }, c.clear = function() {
                for (; this.length;) this.pop()
            }, c.splice = function(t, e, i) {
                t = 0 > t ? s(this.length + t, 0) : t, e = s(0, a(this.length - t, e));
                var n, o = [],
                    r = [],
                    c = [];
                for (n = 2; n < arguments.length; n++) c.push(arguments[n]);
                for (n = 0; e > n; n++) r.push(this[t + n]);
                for (; n < this.length - t; n++) o.push(this[t + n]);
                var d = c.length;
                for (n = 0; n < d + o.length; n++) this.items[t + n] = this[t + n] = d > n ? c[n] : o[n - d];
                for (n = this.items.length = this.length -= e - d; this[n];) delete this[n++];
                return new l(r)
            }, c.exclude = function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (this[e] == t) return this.splice(e, 1), !0;
                return !1
            }, c.insertAfter = function(t) {
                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                return this
            }, c.getBBox = function() {
                for (var t = [], e = [], i = [], n = [], o = this.items.length; o--;)
                    if (!this.items[o].removed) {
                        var r = this.items[o].getBBox();
                        t.push(r.x), e.push(r.y), i.push(r.x + r.width), n.push(r.y + r.height)
                    } return t = a.apply(0, t), e = a.apply(0, e), i = s.apply(0, i), n = s.apply(0, n), {
                    x: t,
                    y: e,
                    x2: i,
                    y2: n,
                    width: i - t,
                    height: n - e,
                    cx: t + (i - t) / 2,
                    cy: e + (n - e) / 2
                }
            }, c.clone = function(t) {
                t = new l;
                for (var e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].clone());
                return t
            }, c.toString = function() {
                return "Snap‘s set"
            }, c.type = "set", t.Set = l, t.set = function() {
                var t = new l;
                return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
            }
        }), n.plugin(function(t, i, n, o) {
            function r(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                    case "t":
                        return [e, 0, 0];
                    case "m":
                        return [e, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                    case "s":
                        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                }
            }

            function s(e, i, n) {
                e = e || new t.Matrix, i = i || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], i = t.parseTransformString(i.toTransformString()) || [];
                for (var o, s, a, l, c = Math.max(e.length, i.length), d = [], f = [], p = 0; c > p; p++) {
                    if (a = e[p] || r(i[p]), l = i[p] || r(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4])) {
                        e = t._.transform2matrix(e, n()), i = t._.transform2matrix(i, n()), d = [
                            ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                        ], f = [
                            ["m", i.a, i.b, i.c, i.d, i.e, i.f]
                        ];
                        break
                    }
                    for (d[p] = [], f[p] = [], o = 0, s = Math.max(a.length, l.length); s > o; o++) o in a && (d[p][o] = a[o]), o in l && (f[p][o] = l[o])
                }
                return {
                    from: h(d),
                    to: h(f),
                    f: u(d)
                }
            }

            function a(t) {
                return t
            }

            function l(t) {
                return function(e) {
                    return +e.toFixed(3) + t
                }
            }

            function c(t) {
                return t.join(" ")
            }

            function d(e) {
                return t.rgb(e[0], e[1], e[2], e[3])
            }

            function u(t) {
                var e, i, n, o, r, s, a = 0,
                    l = [];
                for (e = 0, i = t.length; i > e; e++) {
                    for (r = "[", s = ['"' + t[e][0] + '"'], n = 1, o = t[e].length; o > n; n++) s[n] = "val[" + a++ + "]";
                    r += s + "]", l[e] = r
                }
                return Function("val", "return Snap.path.toString.call([" + l + "])")
            }

            function h(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++)
                    for (var o = 1, r = t[i].length; r > o; o++) e.push(t[i][o]);
                return e
            }

            function f(t) {
                return isFinite(t)
            }

            function p(e, i) {
                return !(!t.is(e, "array") || !t.is(i, "array")) && e.toString() == i.toString()
            }
            var v = {},
                m = /[%a-z]+$/i,
                g = String;
            v.stroke = v.fill = "colour", i.prototype.equal = function(t, i) {
                return e("snap.util.equal", this, t, i).firstDefined()
            }, e.on("snap.util.equal", function(e, i) {
                var n, o, r = g(this.attr(e) || ""),
                    y = this;
                if ("colour" == v[e]) return n = t.color(r), o = t.color(i), {
                    from: [n.r, n.g, n.b, n.opacity],
                    to: [o.r, o.g, o.b, o.opacity],
                    f: d
                };
                if ("viewBox" == e) return n = this.attr(e).vb.split(" ").map(Number), o = i.split(" ").map(Number), {
                    from: n,
                    to: o,
                    f: c
                };
                if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof i && (i = g(i).replace(/\.{3}|\u2026/g, r)), r = this.matrix, i = t._.rgTransform.test(i) ? t._.transform2matrix(i, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(i), this.getBBox()), s(r, i, function() {
                    return y.getBBox(1)
                });
                if ("d" == e || "path" == e) return n = t.path.toCubic(r, i), {
                    from: h(n[0]),
                    to: h(n[1]),
                    f: u(n[0])
                };
                if ("points" == e) return n = g(r).split(t._.separator), o = g(i).split(t._.separator), {
                    from: n,
                    to: o,
                    f: function(t) {
                        return t
                    }
                };
                if (f(r) && f(i)) return {
                    from: parseFloat(r),
                    to: parseFloat(i),
                    f: a
                };
                var b = r.match(m),
                    w = g(i).match(m);
                return b && p(b, w) ? {
                    from: parseFloat(r),
                    to: parseFloat(i),
                    f: l(b)
                } : {
                    from: this.asPX(e),
                    to: this.asPX(e, i),
                    f: a
                }
            })
        }), n.plugin(function(t, i, n, o) {
            for (var r = i.prototype, s = "hasOwnProperty", a = ("createTouch" in o.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], c = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                }, d = (function(t, e) {
                    var i = "y" == t ? "scrollTop" : "scrollLeft",
                        n = e && e.node ? e.node.ownerDocument : o.doc;
                    return n[i in n.documentElement ? "documentElement" : "body"][i]
                }), u = function() {
                    return this.originalEvent.preventDefault()
                }, h = function() {
                    return this.originalEvent.stopPropagation()
                }, f = function(t, e, i, n) {
                    var o = a && c[e] ? c[e] : e,
                        r = function(o) {
                            var r = d("y", n),
                                l = d("x", n);
                            if (a && c[s](e))
                                for (var f = 0, p = o.targetTouches && o.targetTouches.length; p > f; f++)
                                    if (o.targetTouches[f].target == t || t.contains(o.targetTouches[f].target)) {
                                        var v = o;
                                        o = o.targetTouches[f], o.originalEvent = v, o.preventDefault = u, o.stopPropagation = h;
                                        break
                                    } var m = o.clientX + l,
                                g = o.clientY + r;
                            return i.call(n, o, m, g)
                        };
                    return e !== o && t.addEventListener(e, r, !1), t.addEventListener(o, r, !1),
                        function() {
                            return e !== o && t.removeEventListener(e, r, !1), t.removeEventListener(o, r, !1), !0
                        }
                }, p = [], v = function(t) {
                    for (var i, n = t.clientX, o = t.clientY, r = d("y"), s = d("x"), l = p.length; l--;) {
                        if (i = p[l], a) {
                            for (var c, u = t.touches && t.touches.length; u--;)
                                if (c = t.touches[u], c.identifier == i.el._drag.id || i.el.node.contains(c.target)) {
                                    n = c.clientX, o = c.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                    break
                                }
                        } else t.preventDefault();
                        var h = i.el.node;
                        h.nextSibling, h.parentNode, h.style.display, n += s, o += r, e("snap.drag.move." + i.el.id, i.move_scope || i.el, n - i.el._drag.x, o - i.el._drag.y, n, o, t)
                    }
                }, m = function(i) {
                    t.unmousemove(v).unmouseup(m);
                    for (var n, o = p.length; o--;) n = p[o], n.el._drag = {}, e("snap.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, i), e.off("snap.drag.*." + n.el.id);
                    p = []
                }, g = l.length; g--;) ! function(e) {
                t[e] = r[e] = function(i, n) {
                    if (t.is(i, "function")) this.events = this.events || [], this.events.push({
                        name: e,
                        f: i,
                        unbind: f(this.node || document, e, i, n || this)
                    });
                    else
                        for (var o = 0, r = this.events.length; r > o; o++)
                            if (this.events[o].name == e) try {
                                this.events[o].f.call(this)
                            } catch (s) {}
                    return this
                }, t["un" + e] = r["un" + e] = function(t) {
                    for (var i = this.events || [], n = i.length; n--;)
                        if (i[n].name == e && (i[n].f == t || !t)) return i[n].unbind(), i.splice(n, 1), !i.length && delete this.events, this;
                    return this
                }
            }(l[g]);
            r.hover = function(t, e, i, n) {
                return this.mouseover(t, i).mouseout(e, n || i)
            }, r.unhover = function(t, e) {
                return this.unmouseover(t).unmouseout(e)
            };
            var y = [];
            r.drag = function(i, n, o, r, s, a) {
                function l(l, c, u) {
                    (l.originalEvent || l).preventDefault(), d._drag.x = c, d._drag.y = u, d._drag.id = l.identifier, !p.length && t.mousemove(v).mouseup(m), p.push({
                        el: d,
                        move_scope: r,
                        start_scope: s,
                        end_scope: a
                    }), n && e.on("snap.drag.start." + d.id, n), i && e.on("snap.drag.move." + d.id, i), o && e.on("snap.drag.end." + d.id, o), e("snap.drag.start." + d.id, s || r || d, c, u, l)
                }

                function c(t, i, n) {
                    e("snap.draginit." + d.id, d, t, i, n)
                }
                var d = this;
                if (!arguments.length) {
                    var u;
                    return d.drag(function(t, e) {
                        this.attr({
                            transform: u + (u ? "T" : "t") + [t, e]
                        })
                    }, function() {
                        u = this.transform().local
                    })
                }
                return e.on("snap.draginit." + d.id, l), d._drag = {}, y.push({
                    el: d,
                    start: l,
                    init: c
                }), d.mousedown(c), d
            }, r.undrag = function() {
                for (var i = y.length; i--;) y[i].el == this && (this.unmousedown(y[i].init), y.splice(i, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
                return !y.length && t.unmousemove(v).unmouseup(m), this
            }
        }), n.plugin(function(t, i, n, o) {
            var r = (i.prototype, n.prototype),
                s = /^\s*url\((.+)\)/,
                a = String,
                l = t._.$;
            t.filter = {}, r.filter = function(e) {
                var n = this;
                "svg" != n.type && (n = n.paper);
                var o = t.parse(a(e)),
                    r = t._.id(),
                    s = (n.node.offsetWidth, n.node.offsetHeight, l("filter"));
                return l(s, {
                    id: r,
                    filterUnits: "userSpaceOnUse"
                }), s.appendChild(o.node), n.defs.appendChild(s), new i(s)
            }, e.on("snap.util.getattr.filter", function() {
                e.stop();
                var i = l(this.node, "filter");
                if (i) {
                    var n = a(i).match(s);
                    return n && t.select(n[1])
                }
            }), e.on("snap.util.attr.filter", function(n) {
                if (n instanceof i && "filter" == n.type) {
                    e.stop();
                    var o = n.node.id;
                    o || (l(n.node, {
                        id: n.id
                    }), o = n.id), l(this.node, {
                        filter: t.url(o)
                    })
                }
                n && "none" != n || (e.stop(), this.node.removeAttribute("filter"))
            }), t.filter.blur = function(e, i) {
                null == e && (e = 2);
                var n = null == i ? e : [e, i];
                return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                    def: n
                })
            }, t.filter.blur.toString = function() {
                return this()
            }, t.filter.shadow = function(e, i, n, o, r) {
                return null == r && (null == o ? (r = n, n = 4, o = "#000") : (r = o, o = n, n = 4)), null == n && (n = 4), null == r && (r = 1), null == e && (e = 0, i = 2), null == i && (i = e), o = t.color(o), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                    color: o,
                    dx: e,
                    dy: i,
                    blur: n,
                    opacity: r
                })
            }, t.filter.shadow.toString = function() {
                return this()
            }, t.filter.grayscale = function(e) {
                return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                    a: .2126 + .7874 * (1 - e),
                    b: .7152 - .7152 * (1 - e),
                    c: .0722 - .0722 * (1 - e),
                    d: .2126 - .2126 * (1 - e),
                    e: .7152 + .2848 * (1 - e),
                    f: .0722 - .0722 * (1 - e),
                    g: .2126 - .2126 * (1 - e),
                    h: .0722 + .9278 * (1 - e)
                })
            }, t.filter.grayscale.toString = function() {
                return this()
            }, t.filter.sepia = function(e) {
                return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                    a: .393 + .607 * (1 - e),
                    b: .769 - .769 * (1 - e),
                    c: .189 - .189 * (1 - e),
                    d: .349 - .349 * (1 - e),
                    e: .686 + .314 * (1 - e),
                    f: .168 - .168 * (1 - e),
                    g: .272 - .272 * (1 - e),
                    h: .534 - .534 * (1 - e),
                    i: .131 + .869 * (1 - e)
                })
            }, t.filter.sepia.toString = function() {
                return this()
            }, t.filter.saturate = function(e) {
                return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                    amount: 1 - e
                })
            }, t.filter.saturate.toString = function() {
                return this()
            }, t.filter.hueRotate = function(e) {
                return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                    angle: e
                })
            }, t.filter.hueRotate.toString = function() {
                return this()
            }, t.filter.invert = function(e) {
                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                    amount: e,
                    amount2: 1 - e
                })
            }, t.filter.invert.toString = function() {
                return this()
            }, t.filter.brightness = function(e) {
                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                    amount: e
                })
            }, t.filter.brightness.toString = function() {
                return this()
            }, t.filter.contrast = function(e) {
                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                    amount: e,
                    amount2: .5 - e / 2
                })
            }, t.filter.contrast.toString = function() {
                return this()
            }
        }), n.plugin(function(t, e, i, n, o) {
            var r = t._.box,
                s = t.is,
                a = /^[^a-z]*([tbmlrc])/i,
                l = function() {
                    return "T" + this.dx + "," + this.dy
                };
            e.prototype.getAlign = function(t, e) {
                null == e && s(t, "string") && (e = t, t = null), t = t || this.paper;
                var i = t.getBBox ? t.getBBox() : r(t),
                    n = this.getBBox(),
                    o = {};
                switch (e = e && e.match(a), e = e ? e[1].toLowerCase() : "c") {
                    case "t":
                        o.dx = 0, o.dy = i.y - n.y;
                        break;
                    case "b":
                        o.dx = 0, o.dy = i.y2 - n.y2;
                        break;
                    case "m":
                        o.dx = 0, o.dy = i.cy - n.cy;
                        break;
                    case "l":
                        o.dx = i.x - n.x, o.dy = 0;
                        break;
                    case "r":
                        o.dx = i.x2 - n.x2, o.dy = 0;
                        break;
                    default:
                        o.dx = i.cx - n.cx, o.dy = 0
                }
                return o.toString = l, o
            }, e.prototype.align = function(t, e) {
                return this.transform("..." + this.getAlign(t, e))
            }
        }), n.plugin(function(e, i, n, o) {
            function r(t) {
                t = t.split(/(?=#)/);
                var e = new String(t[5]);
                return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
            }
            var s = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
                a = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
                l = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
                c = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
                d = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
                u = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
                h = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
                f = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
                p = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
                v = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
                m = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
                g = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
                y = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
                b = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
                w = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
                x = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
                S = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
                C = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
                k = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
            e.mui = {}, e.flat = {}, e.mui.red = r(s), e.mui.pink = r(a), e.mui.purple = r(l), e.mui.deeppurple = r(c), e.mui.indigo = r(d), e.mui.blue = r(u), e.mui.lightblue = r(h), e.mui.cyan = r(f), e.mui.teal = r(p), e.mui.green = r(v), e.mui.lightgreen = r(m), e.mui.lime = r(g), e.mui.yellow = r(y), e.mui.amber = r(b), e.mui.orange = r(w), e.mui.deeporange = r(x), e.mui.brown = r(S), e.mui.grey = r(C), e.mui.bluegrey = r(k), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function() {
                for (var i in e.mui) e.mui.hasOwnProperty(i) && (t[i] = e.mui[i])
            }
        }), n
    }), + function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            var o = function() {
                i || t(n).trigger(t.support.transition.end)
            };
            return setTimeout(o, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
            })
        }
        var i = '[data-dismiss="alert"]',
            n = function(e) {
                t(e).on("click", i, this.close)
            };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
            function i() {
                s.detach().trigger("closed.bs.alert").remove()
            }
            var o = t(this),
                r = o.attr("data-target");
            r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var s = t(r);
            e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        };
        var o = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
            return t.fn.alert = o, this
        }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.button"),
                    r = "object" == typeof e && e;
                o || n.data("bs.button", o = new i(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.3.6", i.DEFAULTS = {
            loadingText: "loading..."
        }, i.prototype.setState = function(e) {
            var i = "disabled",
                n = this.$element,
                o = n.is("input") ? "val" : "html",
                r = n.data();
            e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
                n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
            }, this), 0)
        }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var n = t(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.carousel"),
                    r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e : r.slide;
                o || n.data("bs.carousel", o = new i(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
            })
        }
        var i = function(e, i) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, i.prototype.getItemForDirection = function(t, e) {
            var i = this.getItemIndex(e),
                n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
            if (n && !this.options.wrap) return e;
            var o = "prev" == t ? -1 : 1,
                r = (i + o) % this.$items.length;
            return this.$items.eq(r)
        }, i.prototype.to = function(t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
        }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, i.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, i.prototype.slide = function(e, n) {
            var o = this.$element.find(".item.active"),
                r = n || this.getItemForDirection(e, o),
                s = this.interval,
                a = "next" == e ? "left" : "right",
                l = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var c = r[0],
                d = t.Event("slide.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
            if (this.$element.trigger(d), !d.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var u = t(this.$indicators.children()[this.getItemIndex(r)]);
                    u && u.addClass("active")
                }
                var h = t.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                    r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(h)
                    }, 0)
                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = n, this
        };
        var o = function(i) {
            var n, o = t(this),
                r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var s = t.extend({}, r.data(), o.data()),
                    a = o.attr("data-slide-to");
                a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), i.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(n)
        }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
            })
        }
        var n = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
            toggle: !0
        }, n.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, n.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                    var r = t.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        }, n.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
                }
            }
        }, n.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, n.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                var o = t(n);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
        }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var o = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = o, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var o = t(this);
            o.attr("data-target") || n.preventDefault();
            var r = e(o),
                s = r.data("bs.collapse"),
                a = s ? "toggle" : o.data();
            i.call(r, a)
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent()
        }

        function i(i) {
            i && 3 === i.which || (t(o).remove(), t(r).each(function() {
                var n = t(this),
                    o = e(n),
                    r = {
                        relatedTarget: this
                    };
                o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
            }))
        }

        function n(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
            })
        }
        var o = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            s = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        s.VERSION = "3.3.6", s.prototype.toggle = function(n) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var r = e(o),
                    s = r.hasClass("open");
                if (i(), !s) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                    var a = {
                        relatedTarget: this
                    };
                    if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                }
                return !1
            }
        }, s.prototype.keydown = function(i) {
            if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                var n = t(this);
                if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var o = e(n),
                        s = o.hasClass("open");
                    if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && o.find(r).trigger("focus"), n.trigger("click");
                    var a = " li:not(.disabled):visible a",
                        l = o.find(".dropdown-menu" + a);
                    if (l.length) {
                        var c = l.index(i.target);
                        38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
    }(jQuery), + function(t) {
        "use strict";

        function e(e, n) {
            return this.each(function() {
                var o = t(this),
                    r = o.data("bs.modal"),
                    s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
                r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
            })
        }
        var i = function(e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function(e) {
            var n = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var o = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                o ? n.$dialog.one("bsTransitionEnd", function() {
                    n.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
            }))
        }, i.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(e) {
            var n = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function() {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
            } else e && e()
        }, i.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = t(this),
                o = n.attr("href"),
                r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                s = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(o) && o
                }, r.data(), n.data());
            n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    n.is(":visible") && n.trigger("focus")
                })
            }), e.call(r, s, this)
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tooltip"),
                    r = "object" == typeof e && e;
                !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, r)), "string" == typeof e && o[e]())
            })
        }
        var i = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, i.prototype.init = function(e, i, n) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                var s = o[r];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var a = "hover" == s ? "mouseenter" : "focusin",
                        l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, i.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, n) {
                i[t] != n && (e[t] = n)
            }), e
        }, i.prototype.enter = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show())
        }, i.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, i.prototype.leave = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
        }, i.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !n) return;
                var o = this,
                    r = this.tip(),
                    s = this.getUID(this.type);
                this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(a);
                c && (a = a.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var d = this.getPosition(),
                    u = r[0].offsetWidth,
                    h = r[0].offsetHeight;
                if (c) {
                    var f = a,
                        p = this.getPosition(this.$viewport);
                    a = "bottom" == a && d.bottom + h > p.bottom ? "top" : "top" == a && d.top - h < p.top ? "bottom" : "right" == a && d.right + u > p.width ? "left" : "left" == a && d.left - u < p.left ? "right" : a, r.removeClass(f).addClass(a)
                }
                var v = this.getCalculatedOffset(a, d, u, h);
                this.applyPlacement(v, a);
                var m = function() {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
            }
        }, i.prototype.applyPlacement = function(e, i) {
            var n = this.tip(),
                o = n[0].offsetWidth,
                r = n[0].offsetHeight,
                s = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
                using: function(t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                c = n[0].offsetHeight;
            "top" == i && c != r && (e.top = e.top + r - c);
            var d = this.getViewportAdjustedDelta(i, e, l, c);
            d.left ? e.left += d.left : e.top += d.top;
            var u = /top|bottom/.test(i),
                h = u ? 2 * d.left - o + l : 2 * d.top - r + c,
                f = u ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(h, n[0][f], u)
        }, i.prototype.replaceArrow = function(t, e, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, i.prototype.hide = function(e) {
            function n() {
                "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
            }
            var o = this,
                r = t(this.$tip),
                s = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
        }, i.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, i.prototype.hasContent = function() {
            return this.getTitle()
        }, i.prototype.getPosition = function(e) {
            e = e || this.$element;
            var i = e[0],
                n = "BODY" == i.tagName,
                o = i.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var r = n ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                s = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                a = n ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, o, s, a, r)
        }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {
                top: e.top + e.height / 2 - n / 2,
                left: e.left + e.width
            }
        }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - r - s.scroll,
                    l = e.top + r - s.scroll + n;
                a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
            } else {
                var c = e.left - r,
                    d = e.left + r + i;
                c < s.left ? o.left = s.left - c : d > s.right && (o.left = s.left + s.width - d)
            }
            return o
        }, i.prototype.getTitle = function() {
            var t, e = this.$element,
                i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
        }, i.prototype.getUID = function(t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, i.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, i.prototype.enable = function() {
            this.enabled = !0
        }, i.prototype.disable = function() {
            this.enabled = !1
        }, i.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, i.prototype.toggle = function(e) {
            var i = this;
            e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, i.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
            })
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = n, this
        }
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.popover"),
                    r = "object" == typeof e && e;
                !o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, r)), "string" == typeof e && o[e]())
            })
        }
        var i = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, i.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, i.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var n = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
            return t.fn.popover = n, this
        }
    }(jQuery), + function(t) {
        "use strict";

        function e(i, n) {
            this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.scrollspy"),
                    r = "object" == typeof i && i;
                o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
            })
        }
        e.VERSION = "3.3.6", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = this,
                i = "offset",
                n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    r = /^#./.test(o) && t(o);
                return r && r.length && r.is(":visible") && [
                    [r[i]().top + n, o]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                o = this.offsets,
                r = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
            if (s && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = n, this
        }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tab");
                o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e) {
            this.element = t(e)
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = i.find(".active:last a"),
                    r = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    s = t.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var a = t(n);
                    this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    })
                }
            }
        }, i.prototype.activate = function(e, n, o) {
            function r() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }
            var s = n.find("> .active"),
                a = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
            s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), s.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
            return t.fn.tab = n, this
        };
        var o = function(i) {
            i.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.affix"),
                    r = "object" == typeof e && e;
                o || n.data("bs.affix", o = new i(this, r)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e, n) {
            this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function(t, e, i, n) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                s = this.$target.height();
            if (null != i && "top" == this.affixed) return o < i && "top";
            if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
            var a = null == this.affixed,
                l = a ? o : r.top,
                c = a ? s : e;
            return null != i && o <= i ? "top" : null != n && l + c >= t - n && "bottom"
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    n = this.options.offset,
                    o = n.top,
                    r = n.bottom,
                    s = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
                var a = this.getState(s, e, o, r);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""),
                        c = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({
                    top: s - e - r
                })
            }
        };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = n, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.bindTap(t)
        }
        var n = i.prototype = Object.create(e.prototype);
        return n.bindTap = function(t) {
            t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
        }, n.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        }, n.pointerUp = function(i, n) {
            if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
                var o = e.getPointerPoint(n),
                    r = this.tapElement.getBoundingClientRect(),
                    s = t.pageXOffset,
                    a = t.pageYOffset,
                    l = o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a;
                if (l && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
                    this.isIgnoringMouseUp = !0;
                    var c = this;
                    setTimeout(function() {
                        delete c.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, n.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, i
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
    }(function(t) {
        ! function(e) {
            var i = "function" == typeof define && define.amd,
                n = "undefined" != typeof module && module.exports,
                o = "https:" == document.location.protocol ? "https:" : "http:",
                r = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
            i || (n ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + o + "//" + r + "%3E%3C/script%3E"))), e()
        }(function() {
            var e, i = "mCustomScrollbar",
                n = "mCS",
                o = ".mCustomScrollbar",
                r = {
                    setTop: 0,
                    setLeft: 0,
                    axis: "y",
                    scrollbarPosition: "inside",
                    scrollInertia: 950,
                    autoDraggerLength: !0,
                    alwaysShowScrollbar: 0,
                    snapOffset: 0,
                    mouseWheel: {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        deltaFactor: "auto",
                        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                    },
                    scrollButtons: {
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    keyboard: {
                        enable: !0,
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    contentTouchScroll: 25,
                    documentTouchScroll: !0,
                    advanced: {
                        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                        updateOnContentResize: !0,
                        updateOnImageLoad: "auto",
                        autoUpdateTimeout: 60
                    },
                    theme: "light",
                    callbacks: {
                        onTotalScrollOffset: 0,
                        onTotalScrollBackOffset: 0,
                        alwaysTriggerOffsets: !0
                    }
                },
                s = 0,
                a = {},
                l = window.attachEvent && !window.addEventListener ? 1 : 0,
                c = !1,
                d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                u = {
                    init: function(e) {
                        var e = t.extend(!0, {}, r, e),
                            i = h.call(this);
                        if (e.live) {
                            var l = e.liveSelector || this.selector || o,
                                c = t(l);
                            if ("off" === e.live) return void p(l);
                            a[l] = setTimeout(function() {
                                c.mCustomScrollbar(e), "once" === e.live && c.length && p(l)
                            }, 500)
                        } else p(l);
                        return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : v(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = m(e.scrollButtons.scrollType), f(e), t(i).each(function() {
                            var i = t(this);
                            if (!i.data(n)) {
                                i.data(n, {
                                    idx: ++s,
                                    opt: e,
                                    scrollRatio: {
                                        y: null,
                                        x: null
                                    },
                                    overflowed: null,
                                    contentReset: {
                                        y: null,
                                        x: null
                                    },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: i.css("direction"),
                                    cbOffsets: null,
                                    trigger: null,
                                    poll: {
                                        size: {
                                            o: 0,
                                            n: 0
                                        },
                                        img: {
                                            o: 0,
                                            n: 0
                                        },
                                        change: {
                                            o: 0,
                                            n: 0
                                        }
                                    }
                                });
                                var o = i.data(n),
                                    r = o.opt,
                                    a = i.data("mcs-axis"),
                                    l = i.data("mcs-scrollbar-position"),
                                    c = i.data("mcs-theme");
                                a && (r.axis = a), l && (r.scrollbarPosition = l), c && (r.theme = c, f(r)), g.call(this), o && r.callbacks.onCreate && "function" == typeof r.callbacks.onCreate && r.callbacks.onCreate.call(this), t("#mCSB_" + o.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, i)
                            }
                        })
                    },
                    update: function(e, i) {
                        var o = e || h.call(this);
                        return t(o).each(function() {
                            var e = t(this);
                            if (e.data(n)) {
                                var o = e.data(n),
                                    r = o.opt,
                                    s = t("#mCSB_" + o.idx + "_container"),
                                    a = t("#mCSB_" + o.idx),
                                    l = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                                if (!s.length) return;
                                o.tweenRunning && Y(e), i && o && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), e.hasClass(d[3]) && e.removeClass(d[3]), e.hasClass(d[4]) && e.removeClass(d[4]), a.css("max-height", "none"), a.height() !== e.height() && a.css("max-height", e.height()), b.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || s.css("width", y(s)), o.overflowed = k.call(this), A.call(this), r.autoDraggerLength && x.call(this), S.call(this), E.call(this);
                                var c = [Math.abs(s[0].offsetTop), Math.abs(s[0].offsetLeft)];
                                "x" !== r.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (G(e, c[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }), o.contentReset.y = null) : (T.call(this), "y" === r.axis ? _.call(this) : "yx" === r.axis && o.overflowed[1] && G(e, c[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }))), "y" !== r.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (G(e, c[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), o.contentReset.x = null) : (T.call(this), "x" === r.axis ? _.call(this) : "yx" === r.axis && o.overflowed[0] && G(e, c[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }))), i && o && (2 === i && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === i && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), V.call(this)
                            }
                        })
                    },
                    scrollTo: function(e, i) {
                        if ("undefined" != typeof e && null != e) {
                            var o = h.call(this);
                            return t(o).each(function() {
                                var o = t(this);
                                if (o.data(n)) {
                                    var r = o.data(n),
                                        s = r.opt,
                                        a = {
                                            trigger: "external",
                                            scrollInertia: s.scrollInertia,
                                            scrollEasing: "mcsEaseInOut",
                                            moveDragger: !1,
                                            timeout: 60,
                                            callbacks: !0,
                                            onStart: !0,
                                            onUpdate: !0,
                                            onComplete: !0
                                        },
                                        l = t.extend(!0, {}, a, i),
                                        c = q.call(this, e),
                                        d = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                    c[0] = W.call(this, c[0], "y"), c[1] = W.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = ot() ? 0 : d, setTimeout(function() {
                                        null !== c[0] && "undefined" != typeof c[0] && "x" !== s.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", G(o, c[0].toString(), l)), null !== c[1] && "undefined" != typeof c[1] && "y" !== s.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", G(o, c[1].toString(), l))
                                    }, l.timeout)
                                }
                            })
                        }
                    },
                    stop: function() {
                        var e = h.call(this);
                        return t(e).each(function() {
                            var e = t(this);
                            e.data(n) && Y(e)
                        })
                    },
                    disable: function(e) {
                        var i = h.call(this);
                        return t(i).each(function() {
                            var i = t(this);
                            if (i.data(n)) {
                                i.data(n);
                                V.call(this, "remove"), _.call(this), e && T.call(this), A.call(this, !0), i.addClass(d[3])
                            }
                        })
                    },
                    destroy: function() {
                        var e = h.call(this);
                        return t(e).each(function() {
                            var o = t(this);
                            if (o.data(n)) {
                                var r = o.data(n),
                                    s = r.opt,
                                    a = t("#mCSB_" + r.idx),
                                    l = t("#mCSB_" + r.idx + "_container"),
                                    c = t(".mCSB_" + r.idx + "_scrollbar");
                                s.live && p(s.liveSelector || t(e).selector), V.call(this, "remove"), _.call(this), T.call(this), o.removeData(n), Z(this, "mcs"), c.remove(), l.find("img." + d[2]).removeClass(d[2]), a.replaceWith(l.contents()), o.removeClass(i + " _" + n + "_" + r.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                            }
                        })
                    }
                },
                h = function() {
                    return "object" != typeof t(this) || t(this).length < 1 ? o : this
                },
                f = function(e) {
                    var i = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        o = ["minimal", "minimal-dark"],
                        r = ["minimal", "minimal-dark"],
                        s = ["minimal", "minimal-dark"];
                    e.autoDraggerLength = !(t.inArray(e.theme, i) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, n) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, o) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, r) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, s) > -1 ? "outside" : e.scrollbarPosition
                },
                p = function(t) {
                    a[t] && (clearTimeout(a[t]), Z(a, t))
                },
                v = function(t) {
                    return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
                },
                m = function(t) {
                    return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
                },
                g = function() {
                    var e = t(this),
                        o = e.data(n),
                        r = o.opt,
                        s = r.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                        a = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + s + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + s + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        l = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        c = "yx" === r.axis ? a[0] + a[1] : "x" === r.axis ? a[1] : a[0],
                        u = "yx" === r.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        h = r.autoHideScrollbar ? " " + d[6] : "",
                        f = "x" !== r.axis && "rtl" === o.langDir ? " " + d[7] : "";
                    r.setWidth && e.css("width", r.setWidth), r.setHeight && e.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === o.langDir ? "989999px" : r.setLeft, e.addClass(i + " _" + n + "_" + o.idx + h + f).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + o.langDir + "' /></div>");
                    var p = t("#mCSB_" + o.idx),
                        v = t("#mCSB_" + o.idx + "_container");
                    "y" === r.axis || r.advanced.autoExpandHorizontalScroll || v.css("width", y(v)), "outside" === r.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), p.addClass("mCSB_outside").after(c)) : (p.addClass("mCSB_inside").append(c), v.wrap(u)), w.call(this);
                    var m = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                    m[0].css("min-height", m[0].height()), m[1].css("min-width", m[1].width())
                },
                y = function(e) {
                    var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                            return t(this).outerWidth(!0)
                        }).get())],
                        n = e.parent().width();
                    return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
                },
                b = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        r = t("#mCSB_" + i.idx + "_container");
                    if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
                        r.css({
                            width: "auto",
                            "min-width": 0,
                            "overflow-x": "scroll"
                        });
                        var s = Math.ceil(r[0].scrollWidth);
                        3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && s > r.parent().width() ? r.css({
                            width: s,
                            "min-width": "100%",
                            "overflow-x": "inherit"
                        }) : r.css({
                            "overflow-x": "inherit",
                            position: "absolute"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
                            "min-width": "100%",
                            position: "relative"
                        }).unwrap()
                    }
                },
                w = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        r = t(".mCSB_" + i.idx + "_scrollbar:first"),
                        s = it(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                        a = ["<a href='#' class='" + d[13] + "' " + s + " />", "<a href='#' class='" + d[14] + "' " + s + " />", "<a href='#' class='" + d[15] + "' " + s + " />", "<a href='#' class='" + d[16] + "' " + s + " />"],
                        l = ["x" === o.axis ? a[2] : a[0], "x" === o.axis ? a[3] : a[1], a[2], a[3]];
                    o.scrollButtons.enable && r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                },
                x = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = t("#mCSB_" + i.idx),
                        r = t("#mCSB_" + i.idx + "_container"),
                        s = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                        a = [o.height() / r.outerHeight(!1), o.width() / r.outerWidth(!1)],
                        c = [parseInt(s[0].css("min-height")), Math.round(a[0] * s[0].parent().height()), parseInt(s[1].css("min-width")), Math.round(a[1] * s[1].parent().width())],
                        d = l && c[1] < c[0] ? c[0] : c[1],
                        u = l && c[3] < c[2] ? c[2] : c[3];
                    s[0].css({
                        height: d,
                        "max-height": s[0].parent().height() - 10
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": c[0] + "px"
                    }), s[1].css({
                        width: u,
                        "max-width": s[1].parent().width() - 10
                    })
                },
                S = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = t("#mCSB_" + i.idx),
                        r = t("#mCSB_" + i.idx + "_container"),
                        s = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                        a = [r.outerHeight(!1) - o.height(), r.outerWidth(!1) - o.width()],
                        l = [a[0] / (s[0].parent().height() - s[0].height()), a[1] / (s[1].parent().width() - s[1].width())];
                    i.scrollRatio = {
                        y: l[0],
                        x: l[1]
                    }
                },
                C = function(t, e, i) {
                    var n = i ? d[0] + "_expanded" : "",
                        o = t.closest(".mCSB_scrollTools");
                    "active" === e ? (t.toggleClass(d[0] + " " + n), o.toggleClass(d[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(d[0]), o.removeClass(d[1])) : (t.addClass(d[0]), o.addClass(d[1])))
                },
                k = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = t("#mCSB_" + i.idx),
                        r = t("#mCSB_" + i.idx + "_container"),
                        s = null == i.overflowed ? r.height() : r.outerHeight(!1),
                        a = null == i.overflowed ? r.width() : r.outerWidth(!1),
                        l = r[0].scrollHeight,
                        c = r[0].scrollWidth;
                    return l > s && (s = l), c > a && (a = c), [s > o.height(), a > o.width()]
                },
                T = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        r = t("#mCSB_" + i.idx),
                        s = t("#mCSB_" + i.idx + "_container"),
                        a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                    if (Y(e), ("x" !== o.axis && !i.overflowed[0] || "y" === o.axis && i.overflowed[0]) && (a[0].add(s).css("top", 0), G(e, "_resetY")), "y" !== o.axis && !i.overflowed[1] || "x" === o.axis && i.overflowed[1]) {
                        var l = dx = 0;
                        "rtl" === i.langDir && (l = r.width() - s.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), s.css("left", l), a[1].css("left", dx), G(e, "_resetX")
                    }
                },
                E = function() {
                    function e() {
                        s = setTimeout(function() {
                            t.event.special.mousewheel ? (clearTimeout(s), I.call(i[0])) : e()
                        }, 100)
                    }
                    var i = t(this),
                        o = i.data(n),
                        r = o.opt;
                    if (!o.bindEvents) {
                        if (F.call(this), r.contentTouchScroll && $.call(this), P.call(this), r.mouseWheel.enable) {
                            var s;
                            e()
                        }
                        z.call(this), N.call(this), r.advanced.autoScrollOnFocus && j.call(this), r.scrollButtons.enable && R.call(this), r.keyboard.enable && U.call(this), o.bindEvents = !0
                    }
                },
                _ = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        r = n + "_" + i.idx,
                        s = ".mCSB_" + i.idx + "_scrollbar",
                        a = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + s + " ." + d[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + s + ">a"),
                        l = t("#mCSB_" + i.idx + "_container");
                    o.advanced.releaseDraggableSelectors && a.add(t(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && a.add(t(o.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(!O() || top.document)).unbind("." + r), a.each(function() {
                        t(this).unbind("." + r)
                    }), clearTimeout(e[0]._focusTimeout), Z(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), Z(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Z(l[0], "onCompleteTimeout"), i.bindEvents = !1)
                },
                A = function(e) {
                    var i = t(this),
                        o = i.data(n),
                        r = o.opt,
                        s = t("#mCSB_" + o.idx + "_container_wrapper"),
                        a = s.length ? s : t("#mCSB_" + o.idx + "_container"),
                        l = [t("#mCSB_" + o.idx + "_scrollbar_vertical"), t("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                        c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                    "x" !== r.axis && (o.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), a.removeClass(d[8] + " " + d[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), a.removeClass(d[10])) : (l[0].css("display", "none"), a.addClass(d[10])), a.addClass(d[8]))), "y" !== r.axis && (o.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), a.removeClass(d[9] + " " + d[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), a.removeClass(d[11])) : (l[1].css("display", "none"), a.addClass(d[11])), a.addClass(d[9]))), o.overflowed[0] || o.overflowed[1] ? i.removeClass(d[5]) : i.addClass(d[5])
                },
                D = function(e) {
                    var i = e.type,
                        n = e.target.ownerDocument !== document && null !== frameElement ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                        o = O() && e.target.ownerDocument !== top.document && null !== frameElement ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                    switch (i) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return n ? [e.originalEvent.pageY - n[0] + o[0], e.originalEvent.pageX - n[1] + o[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var r = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                s = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                            return e.target.ownerDocument !== document ? [r.screenY, r.screenX, s > 1] : [r.pageY, r.pageX, s > 1];
                        default:
                            return n ? [e.pageY - n[0] + o[0], e.pageX - n[1] + o[1], !1] : [e.pageY, e.pageX, !1]
                    }
                },
                F = function() {
                    function e(t, e, n, o) {
                        if (f[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, i.attr("id") === h[1]) var r = "x",
                            l = (i[0].offsetLeft - e + o) * a.scrollRatio.x;
                        else var r = "y",
                            l = (i[0].offsetTop - t + n) * a.scrollRatio.y;
                        G(s, l.toString(), {
                            dir: r,
                            drag: !0
                        })
                    }
                    var i, o, r, s = t(this),
                        a = s.data(n),
                        d = a.opt,
                        u = n + "_" + a.idx,
                        h = ["mCSB_" + a.idx + "_dragger_vertical", "mCSB_" + a.idx + "_dragger_horizontal"],
                        f = t("#mCSB_" + a.idx + "_container"),
                        p = t("#" + h[0] + ",#" + h[1]),
                        v = d.advanced.releaseDraggableSelectors ? p.add(t(d.advanced.releaseDraggableSelectors)) : p,
                        m = d.advanced.extraDraggableSelectors ? t(!O() || top.document).add(t(d.advanced.extraDraggableSelectors)) : t(!O() || top.document);
                    p.bind("contextmenu." + u, function(t) {
                        t.preventDefault()
                    }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(e) {
                        if (e.stopImmediatePropagation(), e.preventDefault(), tt(e)) {
                            c = !0, l && (document.onselectstart = function() {
                                return !1
                            }), M.call(f, !1), Y(s), i = t(this);
                            var n = i.offset(),
                                a = D(e)[0] - n.top,
                                u = D(e)[1] - n.left,
                                h = i.height() + n.top,
                                p = i.width() + n.left;
                            a < h && a > 0 && u < p && u > 0 && (o = a, r = u), C(i, "active", d.autoExpandScrollbar)
                        }
                    }).bind("touchmove." + u, function(t) {
                        t.stopImmediatePropagation(), t.preventDefault();
                        var n = i.offset(),
                            s = D(t)[0] - n.top,
                            a = D(t)[1] - n.left;
                        e(o, r, s, a)
                    }), t(document).add(m).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(t) {
                        if (i) {
                            var n = i.offset(),
                                s = D(t)[0] - n.top,
                                a = D(t)[1] - n.left;
                            if (o === s && r === a) return;
                            e(o, r, s, a)
                        }
                    }).add(v).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function(t) {
                        i && (C(i, "active", d.autoExpandScrollbar), i = null), c = !1, l && (document.onselectstart = null), M.call(f, !0)
                    })
                },
                $ = function() {
                    function i(t) {
                        if (!et(t) || c || D(t)[2]) return void(e = 0);
                        e = 1, S = 0, C = 0, d = 1, k.removeClass("mCS_touch_action");
                        var i = F.offset();
                        u = D(t)[0] - i.top, h = D(t)[1] - i.left, L = [D(t)[0], D(t)[1]]
                    }

                    function o(t) {
                        if (et(t) && !c && !D(t)[2] && (E.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!C || S) && d)) {
                            m = K();
                            var e = A.offset(),
                                i = D(t)[0] - e.top,
                                n = D(t)[1] - e.left,
                                o = "mcsLinearOut";
                            if (P.push(i), I.push(n), L[2] = Math.abs(D(t)[0] - L[0]), L[3] = Math.abs(D(t)[1] - L[1]), T.overflowed[0]) var r = $[0].parent().height() - $[0].height(),
                                s = u - i > 0 && i - u > -(r * T.scrollRatio.y) && (2 * L[3] < L[2] || "yx" === E.axis);
                            if (T.overflowed[1]) var a = $[1].parent().width() - $[1].width(),
                                f = h - n > 0 && n - h > -(a * T.scrollRatio.x) && (2 * L[2] < L[3] || "yx" === E.axis);
                            s || f ? (N || t.preventDefault(), S = 1) : (C = 1, k.addClass("mCS_touch_action")), N && t.preventDefault(), w = "yx" === E.axis ? [u - i, h - n] : "x" === E.axis ? [null, h - n] : [u - i, null], F[0].idleTimer = 250, T.overflowed[0] && l(w[0], B, o, "y", "all", !0), T.overflowed[1] && l(w[1], B, o, "x", M, !0)
                        }
                    }

                    function r(t) {
                        if (!et(t) || c || D(t)[2]) return void(e = 0);
                        e = 1, t.stopImmediatePropagation(), Y(k), v = K();
                        var i = A.offset();
                        f = D(t)[0] - i.top, p = D(t)[1] - i.left, P = [], I = []
                    }

                    function s(t) {
                        if (et(t) && !c && !D(t)[2]) {
                            d = 0, t.stopImmediatePropagation(), S = 0, C = 0, g = K();
                            var e = A.offset(),
                                i = D(t)[0] - e.top,
                                n = D(t)[1] - e.left;
                            if (!(g - m > 30)) {
                                b = 1e3 / (g - v);
                                var o = "mcsEaseOut",
                                    r = b < 2.5,
                                    s = r ? [P[P.length - 2], I[I.length - 2]] : [0, 0];
                                y = r ? [i - s[0], n - s[1]] : [i - f, n - p];
                                var u = [Math.abs(y[0]), Math.abs(y[1])];
                                b = r ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [b, b];
                                var h = [Math.abs(F[0].offsetTop) - y[0] * a(u[0] / b[0], b[0]), Math.abs(F[0].offsetLeft) - y[1] * a(u[1] / b[1], b[1])];
                                w = "yx" === E.axis ? [h[0], h[1]] : "x" === E.axis ? [null, h[1]] : [h[0], null], x = [4 * u[0] + E.scrollInertia, 4 * u[1] + E.scrollInertia];
                                var k = parseInt(E.contentTouchScroll) || 0;
                                w[0] = u[0] > k ? w[0] : 0, w[1] = u[1] > k ? w[1] : 0, T.overflowed[0] && l(w[0], x[0], o, "y", M, !1), T.overflowed[1] && l(w[1], x[1], o, "x", M, !1)
                            }
                        }
                    }

                    function a(t, e) {
                        var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                        return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                    }

                    function l(t, e, i, n, o, r) {
                        t && G(k, t.toString(), {
                            dur: e,
                            scrollEasing: i,
                            dir: n,
                            overwrite: o,
                            drag: r
                        })
                    }
                    var d, u, h, f, p, v, m, g, y, b, w, x, S, C, k = t(this),
                        T = k.data(n),
                        E = T.opt,
                        _ = n + "_" + T.idx,
                        A = t("#mCSB_" + T.idx),
                        F = t("#mCSB_" + T.idx + "_container"),
                        $ = [t("#mCSB_" + T.idx + "_dragger_vertical"), t("#mCSB_" + T.idx + "_dragger_horizontal")],
                        P = [],
                        I = [],
                        B = 0,
                        M = "yx" === E.axis ? "none" : "all",
                        L = [],
                        z = F.find("iframe"),
                        j = ["touchstart." + _ + " pointerdown." + _ + " MSPointerDown." + _, "touchmove." + _ + " pointermove." + _ + " MSPointerMove." + _, "touchend." + _ + " pointerup." + _ + " MSPointerUp." + _],
                        N = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                    F.bind(j[0], function(t) {
                        i(t)
                    }).bind(j[1], function(t) {
                        o(t)
                    }), A.bind(j[0], function(t) {
                        r(t)
                    }).bind(j[2], function(t) {
                        s(t)
                    }), z.length && z.each(function() {
                        t(this).bind("load", function() {
                            O(this) && t(this.contentDocument || this.contentWindow.document).bind(j[0], function(t) {
                                i(t), r(t)
                            }).bind(j[1], function(t) {
                                o(t)
                            }).bind(j[2], function(t) {
                                s(t)
                            })
                        })
                    })
                },
                P = function() {
                    function i() {
                        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                    }

                    function o(t, e, i) {
                        d.type = i && r ? "stepped" : "stepless", d.scrollAmount = 10, H(s, t, e, "mcsLinearOut", i ? 60 : null)
                    }
                    var r, s = t(this),
                        a = s.data(n),
                        l = a.opt,
                        d = a.sequential,
                        u = n + "_" + a.idx,
                        h = t("#mCSB_" + a.idx + "_container"),
                        f = h.parent();
                    h.bind("mousedown." + u, function(t) {
                        e || r || (r = 1, c = !0)
                    }).add(document).bind("mousemove." + u, function(t) {
                        if (!e && r && i()) {
                            var n = h.offset(),
                                s = D(t)[0] - n.top + h[0].offsetTop,
                                c = D(t)[1] - n.left + h[0].offsetLeft;
                            s > 0 && s < f.height() && c > 0 && c < f.width() ? d.step && o("off", null, "stepped") : ("x" !== l.axis && a.overflowed[0] && (s < 0 ? o("on", 38) : s > f.height() && o("on", 40)), "y" !== l.axis && a.overflowed[1] && (c < 0 ? o("on", 37) : c > f.width() && o("on", 39)))
                        }
                    }).bind("mouseup." + u + " dragend." + u, function(t) {
                        e || (r && (r = 0, o("off", null)), c = !1)
                    })
                },
                I = function() {
                    function e(e, n) {
                        if (Y(i), !L(i, e.target)) {
                            var s = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                                d = r.scrollInertia;
                            if ("x" === r.axis || "x" === r.mouseWheel.axis) var u = "x",
                                h = [Math.round(s * o.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
                                f = "auto" !== r.mouseWheel.scrollAmount ? h[1] : h[0] >= a.width() ? .9 * a.width() : h[0],
                                p = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetLeft),
                                v = c[1][0].offsetLeft,
                                m = c[1].parent().width() - c[1].width(),
                                g = "y" === r.mouseWheel.axis ? e.deltaY || n : e.deltaX;
                            else var u = "y",
                                h = [Math.round(s * o.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
                                f = "auto" !== r.mouseWheel.scrollAmount ? h[1] : h[0] >= a.height() ? .9 * a.height() : h[0],
                                p = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetTop),
                                v = c[0][0].offsetTop,
                                m = c[0].parent().height() - c[0].height(),
                                g = e.deltaY || n;
                            "y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((r.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (g = -g), r.mouseWheel.normalizeDelta && (g = g < 0 ? -1 : 1), (g > 0 && 0 !== v || g < 0 && v !== m || r.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !r.mouseWheel.normalizeDelta && (f = e.deltaFactor, d = 17), G(i, (p - g * f).toString(), {
                                dir: u,
                                dur: d
                            }))
                        }
                    }
                    if (t(this).data(n)) {
                        var i = t(this),
                            o = i.data(n),
                            r = o.opt,
                            s = n + "_" + o.idx,
                            a = t("#mCSB_" + o.idx),
                            c = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")],
                            d = t("#mCSB_" + o.idx + "_container").find("iframe");
                        d.length && d.each(function() {
                            t(this).bind("load", function() {
                                O(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + s, function(t, i) {
                                    e(t, i)
                                })
                            })
                        }), a.bind("mousewheel." + s, function(t, i) {
                            e(t, i)
                        })
                    }
                },
                B = new Object,
                O = function(e) {
                    var i = !1,
                        n = !1,
                        o = null;
                    if (void 0 === e ? n = "#empty" : void 0 !== t(e).attr("id") && (n = t(e).attr("id")), n !== !1 && void 0 !== B[n]) return B[n];
                    if (e) {
                        try {
                            var r = e.contentDocument || e.contentWindow.document;
                            o = r.body.innerHTML
                        } catch (s) {}
                        i = null !== o
                    } else {
                        try {
                            var r = top.document;
                            o = r.body.innerHTML
                        } catch (s) {}
                        i = null !== o
                    }
                    return n !== !1 && (B[n] = i), i
                },
                M = function(t) {
                    var e = this.find("iframe");
                    if (e.length) {
                        var i = t ? "auto" : "none";
                        e.css("pointer-events", i)
                    }
                },
                L = function(e, i) {
                    var o = i.nodeName.toLowerCase(),
                        r = e.data(n).opt.mouseWheel.disableOver,
                        s = ["select", "textarea"];
                    return t.inArray(o, r) > -1 && !(t.inArray(o, s) > -1 && !t(i).is(":focus"))
                },
                z = function() {
                    var e, i = t(this),
                        o = i.data(n),
                        r = n + "_" + o.idx,
                        s = t("#mCSB_" + o.idx + "_container"),
                        a = s.parent(),
                        l = t(".mCSB_" + o.idx + "_scrollbar ." + d[12]);
                    l.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function(i) {
                        c = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
                    }).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function(t) {
                        c = !1
                    }).bind("click." + r, function(n) {
                        if (e && (e = 0, t(n.target).hasClass(d[12]) || t(n.target).hasClass("mCSB_draggerRail"))) {
                            Y(i);
                            var r = t(this),
                                l = r.find(".mCSB_dragger");
                            if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!o.overflowed[1]) return;
                                var c = "x",
                                    u = n.pageX > l.offset().left ? -1 : 1,
                                    h = Math.abs(s[0].offsetLeft) - u * (.9 * a.width())
                            } else {
                                if (!o.overflowed[0]) return;
                                var c = "y",
                                    u = n.pageY > l.offset().top ? -1 : 1,
                                    h = Math.abs(s[0].offsetTop) - u * (.9 * a.height())
                            }
                            G(i, h.toString(), {
                                dir: c,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                j = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        r = n + "_" + i.idx,
                        s = t("#mCSB_" + i.idx + "_container"),
                        a = s.parent();
                    s.bind("focusin." + r, function(i) {
                        var n = t(document.activeElement),
                            r = s.find(".mCustomScrollBox").length,
                            l = 0;
                        n.is(o.advanced.autoScrollOnFocus) && (Y(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = r ? (l + 17) * r : 0, e[0]._focusTimeout = setTimeout(function() {
                            var t = [nt(n)[0], nt(n)[1]],
                                i = [s[0].offsetTop, s[0].offsetLeft],
                                r = [i[0] + t[0] >= 0 && i[0] + t[0] < a.height() - n.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < a.width() - n.outerWidth(!1)],
                                c = "yx" !== o.axis || r[0] || r[1] ? "all" : "none";
                            "x" === o.axis || r[0] || G(e, t[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: l
                            }), "y" === o.axis || r[1] || G(e, t[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: l
                            })
                        }, e[0]._focusTimer))
                    })
                },
                N = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = n + "_" + i.idx,
                        r = t("#mCSB_" + i.idx + "_container").parent();
                    r.bind("scroll." + o, function(e) {
                        0 === r.scrollTop() && 0 === r.scrollLeft() || t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                    })
                },
                R = function() {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        r = i.sequential,
                        s = n + "_" + i.idx,
                        a = ".mCSB_" + i.idx + "_scrollbar",
                        l = t(a + ">a");
                    l.bind("contextmenu." + s, function(t) {
                        t.preventDefault()
                    }).bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s + " mouseup." + s + " touchend." + s + " pointerup." + s + " MSPointerUp." + s + " mouseout." + s + " pointerout." + s + " MSPointerOut." + s + " click." + s, function(n) {
                        function s(t, i) {
                            r.scrollAmount = o.scrollButtons.scrollAmount, H(e, t, i)
                        }
                        if (n.preventDefault(), tt(n)) {
                            var a = t(this).attr("class");
                            switch (r.type = o.scrollButtons.scrollType, n.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === r.type) return;
                                    c = !0, i.tweenRunning = !1, s("on", a);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" === r.type) return;
                                    c = !1, r.dir && s("off", a);
                                    break;
                                case "click":
                                    if ("stepped" !== r.type || i.tweenRunning) return;
                                    s("on", a)
                            }
                        }
                    })
                },
                U = function() {
                    function e(e) {
                        function n(t, e) {
                            s.type = r.keyboard.scrollType, s.scrollAmount = r.keyboard.scrollAmount, "stepped" === s.type && o.tweenRunning || H(i, t, e)
                        }
                        switch (e.type) {
                            case "blur":
                                o.tweenRunning && s.dir && n("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var a = e.keyCode ? e.keyCode : e.which,
                                    l = "on";
                                if ("x" !== r.axis && (38 === a || 40 === a) || "y" !== r.axis && (37 === a || 39 === a)) {
                                    if ((38 === a || 40 === a) && !o.overflowed[0] || (37 === a || 39 === a) && !o.overflowed[1]) return;
                                    "keyup" === e.type && (l = "off"), t(document.activeElement).is(u) || (e.preventDefault(), e.stopImmediatePropagation(), n(l, a))
                                } else if (33 === a || 34 === a) {
                                    if ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                        Y(i);
                                        var h = 34 === a ? -1 : 1;
                                        if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
                                            p = Math.abs(c[0].offsetLeft) - h * (.9 * d.width());
                                        else var f = "y",
                                            p = Math.abs(c[0].offsetTop) - h * (.9 * d.height());
                                        G(i, p.toString(), {
                                            dir: f,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else if ((35 === a || 36 === a) && !t(document.activeElement).is(u) && ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                    if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
                                        p = 35 === a ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                    else var f = "y",
                                        p = 35 === a ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                    G(i, p.toString(), {
                                        dir: f,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                        }
                    }
                    var i = t(this),
                        o = i.data(n),
                        r = o.opt,
                        s = o.sequential,
                        a = n + "_" + o.idx,
                        l = t("#mCSB_" + o.idx),
                        c = t("#mCSB_" + o.idx + "_container"),
                        d = c.parent(),
                        u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                        h = c.find("iframe"),
                        f = ["blur." + a + " keydown." + a + " keyup." + a];
                    h.length && h.each(function() {
                        t(this).bind("load", function() {
                            O(this) && t(this.contentDocument || this.contentWindow.document).bind(f[0], function(t) {
                                e(t)
                            })
                        })
                    }), l.attr("tabindex", "0").bind(f[0], function(t) {
                        e(t)
                    })
                },
                H = function(e, i, o, r, s) {
                    function a(t) {
                        u.snapAmount && (h.scrollAmount = u.snapAmount instanceof Array ? "x" === h.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                        var i = "stepped" !== h.type,
                            n = s ? s : t ? i ? v / 1.5 : m : 1e3 / 60,
                            o = t ? i ? 7.5 : 40 : 2.5,
                            l = [Math.abs(f[0].offsetTop), Math.abs(f[0].offsetLeft)],
                            d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                            p = "x" === h.dir[0] ? l[1] + h.dir[1] * (d[1] * o) : l[0] + h.dir[1] * (d[0] * o),
                            g = "x" === h.dir[0] ? l[1] + h.dir[1] * parseInt(h.scrollAmount) : l[0] + h.dir[1] * parseInt(h.scrollAmount),
                            y = "auto" !== h.scrollAmount ? g : p,
                            b = r ? r : t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                            w = !!t;
                        return t && n < 17 && (y = "x" === h.dir[0] ? l[1] : l[0]), G(e, y.toString(), {
                            dir: h.dir[0],
                            scrollEasing: b,
                            dur: n,
                            onComplete: w
                        }), t ? void(h.dir = !1) : (clearTimeout(h.step), void(h.step = setTimeout(function() {
                            a()
                        }, n)))
                    }

                    function l() {
                        clearTimeout(h.step), Z(h, "step"), Y(e)
                    }
                    var c = e.data(n),
                        u = c.opt,
                        h = c.sequential,
                        f = t("#mCSB_" + c.idx + "_container"),
                        p = "stepped" === h.type,
                        v = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                        m = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                    switch (i) {
                        case "on":
                            if (h.dir = [o === d[16] || o === d[15] || 39 === o || 37 === o ? "x" : "y", o === d[13] || o === d[15] || 38 === o || 37 === o ? -1 : 1], Y(e), it(o) && "stepped" === h.type) return;
                            a(p);
                            break;
                        case "off":
                            l(), (p || c.tweenRunning && h.dir) && a(!0)
                    }
                },
                q = function(e) {
                    var i = t(this).data(n).opt,
                        o = [];
                    return "function" == typeof e && (e = e()), e instanceof Array ? o = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (o[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, o[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
                },
                W = function(e, i) {
                    if (null != e && "undefined" != typeof e) {
                        var o = t(this),
                            r = o.data(n),
                            s = r.opt,
                            a = t("#mCSB_" + r.idx + "_container"),
                            l = a.parent(),
                            c = typeof e;
                        i || (i = "x" === s.axis ? "x" : "y");
                        var d = "x" === i ? a.outerWidth(!1) - l.width() : a.outerHeight(!1) - l.height(),
                            h = "x" === i ? a[0].offsetLeft : a[0].offsetTop,
                            f = "x" === i ? "left" : "top";
                        switch (c) {
                            case "function":
                                return e();
                            case "object":
                                var p = e.jquery ? e : t(e);
                                if (!p.length) return;
                                return "x" === i ? nt(p)[1] : nt(p)[0];
                            case "string":
                            case "number":
                                if (it(e)) return Math.abs(e);
                                if (e.indexOf("%") !== -1) return Math.abs(d * parseInt(e) / 100);
                                if (e.indexOf("-=") !== -1) return Math.abs(h - parseInt(e.split("-=")[1]));
                                if (e.indexOf("+=") !== -1) {
                                    var v = h + parseInt(e.split("+=")[1]);
                                    return v >= 0 ? 0 : Math.abs(v)
                                }
                                if (e.indexOf("px") !== -1 && it(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                                if ("top" === e || "left" === e) return 0;
                                if ("bottom" === e) return Math.abs(l.height() - a.outerHeight(!1));
                                if ("right" === e) return Math.abs(l.width() - a.outerWidth(!1));
                                if ("first" === e || "last" === e) {
                                    var p = a.find(":" + e);
                                    return "x" === i ? nt(p)[1] : nt(p)[0]
                                }
                                return t(e).length ? "x" === i ? nt(t(e))[1] : nt(t(e))[0] : (a.css(f, e), void u.update.call(null, o[0]))
                        }
                    }
                },
                V = function(e) {
                    function i() {
                        return clearTimeout(h[0].autoUpdate), 0 === a.parents("html").length ? void(a = null) : void(h[0].autoUpdate = setTimeout(function() {
                            return c.advanced.updateOnSelectorChange && (l.poll.change.n = r(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void s(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = a[0].scrollHeight + a[0].scrollWidth + h[0].offsetHeight + a[0].offsetHeight + a[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void s(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = h.find("img").length, l.poll.img.n === l.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && i()) : (l.poll.img.o = l.poll.img.n, void h.find("img").each(function() {
                                o(this)
                            }))
                        }, c.advanced.autoUpdateTimeout))
                    }

                    function o(e) {
                        function i(t, e) {
                            return function() {
                                return e.apply(t, arguments)
                            }
                        }

                        function n() {
                            this.onload = null, t(e).addClass(d[2]), s(2)
                        }
                        if (t(e).hasClass(d[2])) return void s();
                        var o = new Image;
                        o.onload = i(o, n), o.src = e.src
                    }

                    function r() {
                        c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                        var t = 0,
                            e = h.find(c.advanced.updateOnSelectorChange);
                        return c.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                            t += this.offsetHeight + this.offsetWidth
                        }), t
                    }

                    function s(t) {
                        clearTimeout(h[0].autoUpdate), u.update.call(null, a[0], t)
                    }
                    var a = t(this),
                        l = a.data(n),
                        c = l.opt,
                        h = t("#mCSB_" + l.idx + "_container");
                    return e ? (clearTimeout(h[0].autoUpdate), void Z(h[0], "autoUpdate")) : void i()
                },
                X = function(t, e, i) {
                    return Math.round(t / e) * e - i
                },
                Y = function(e) {
                    var i = e.data(n),
                        o = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                    o.each(function() {
                        J.call(this)
                    })
                },
                G = function(e, i, o) {
                    function r(t) {
                        return l && c.callbacks[t] && "function" == typeof c.callbacks[t]
                    }

                    function s() {
                        return [c.callbacks.alwaysTriggerOffsets || w >= x[0] + k, c.callbacks.alwaysTriggerOffsets || w <= -T]
                    }

                    function a() {
                        var t = [f[0].offsetTop, f[0].offsetLeft],
                            i = [y[0].offsetTop, y[0].offsetLeft],
                            n = [f.outerHeight(!1), f.outerWidth(!1)],
                            r = [h.height(), h.width()];
                        e[0].mcs = {
                            content: f,
                            top: t[0],
                            left: t[1],
                            draggerTop: i[0],
                            draggerLeft: i[1],
                            topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - r[0])),
                            leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - r[1])),
                            direction: o.dir
                        }
                    }
                    var l = e.data(n),
                        c = l.opt,
                        d = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: !1,
                            dur: c.scrollInertia,
                            overwrite: "all",
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        },
                        o = t.extend(d, o),
                        u = [o.dur, o.drag ? 0 : o.dur],
                        h = t("#mCSB_" + l.idx),
                        f = t("#mCSB_" + l.idx + "_container"),
                        p = f.parent(),
                        v = c.callbacks.onTotalScrollOffset ? q.call(e, c.callbacks.onTotalScrollOffset) : [0, 0],
                        m = c.callbacks.onTotalScrollBackOffset ? q.call(e, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (l.trigger = o.trigger, 0 === p.scrollTop() && 0 === p.scrollLeft() || (t(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), p.scrollTop(0).scrollLeft(0)), "_resetY" !== i || l.contentReset.y || (r("onOverflowYNone") && c.callbacks.onOverflowYNone.call(e[0]), l.contentReset.y = 1), "_resetX" !== i || l.contentReset.x || (r("onOverflowXNone") && c.callbacks.onOverflowXNone.call(e[0]), l.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                        if (!l.contentReset.y && e[0].mcs || !l.overflowed[0] || (r("onOverflowY") && c.callbacks.onOverflowY.call(e[0]), l.contentReset.x = null), !l.contentReset.x && e[0].mcs || !l.overflowed[1] || (r("onOverflowX") && c.callbacks.onOverflowX.call(e[0]), l.contentReset.x = null), c.snapAmount) {
                            var g = c.snapAmount instanceof Array ? "x" === o.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                            i = X(i, g, c.snapOffset)
                        }
                        switch (o.dir) {
                            case "x":
                                var y = t("#mCSB_" + l.idx + "_dragger_horizontal"),
                                    b = "left",
                                    w = f[0].offsetLeft,
                                    x = [h.width() - f.outerWidth(!1), y.parent().width() - y.width()],
                                    S = [i, 0 === i ? 0 : i / l.scrollRatio.x],
                                    k = v[1],
                                    T = m[1],
                                    E = k > 0 ? k / l.scrollRatio.x : 0,
                                    _ = T > 0 ? T / l.scrollRatio.x : 0;
                                break;
                            case "y":
                                var y = t("#mCSB_" + l.idx + "_dragger_vertical"),
                                    b = "top",
                                    w = f[0].offsetTop,
                                    x = [h.height() - f.outerHeight(!1), y.parent().height() - y.height()],
                                    S = [i, 0 === i ? 0 : i / l.scrollRatio.y],
                                    k = v[0],
                                    T = m[0],
                                    E = k > 0 ? k / l.scrollRatio.y : 0,
                                    _ = T > 0 ? T / l.scrollRatio.y : 0;
                        }
                        S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= x[1] ? S = [x[0], x[1]] : S[0] = -S[0], e[0].mcs || (a(), r("onInit") && c.callbacks.onInit.call(e[0])), clearTimeout(f[0].onCompleteTimeout), Q(y[0], b, Math.round(S[1]), u[1], o.scrollEasing), !l.tweenRunning && (0 === w && S[0] >= 0 || w === x[0] && S[0] <= x[0]) || Q(f[0], b, Math.round(S[0]), u[0], o.scrollEasing, o.overwrite, {
                            onStart: function() {
                                o.callbacks && o.onStart && !l.tweenRunning && (r("onScrollStart") && (a(), c.callbacks.onScrollStart.call(e[0])), l.tweenRunning = !0, C(y), l.cbOffsets = s())
                            },
                            onUpdate: function() {
                                o.callbacks && o.onUpdate && r("whileScrolling") && (a(), c.callbacks.whileScrolling.call(e[0]))
                            },
                            onComplete: function() {
                                if (o.callbacks && o.onComplete) {
                                    "yx" === c.axis && clearTimeout(f[0].onCompleteTimeout);
                                    var t = f[0].idleTimer || 0;
                                    f[0].onCompleteTimeout = setTimeout(function() {
                                        r("onScroll") && (a(), c.callbacks.onScroll.call(e[0])), r("onTotalScroll") && S[1] >= x[1] - E && l.cbOffsets[0] && (a(), c.callbacks.onTotalScroll.call(e[0])), r("onTotalScrollBack") && S[1] <= _ && l.cbOffsets[1] && (a(), c.callbacks.onTotalScrollBack.call(e[0])), l.tweenRunning = !1, f[0].idleTimer = 0, C(y, "hide")
                                    }, t)
                                }
                            }
                        })
                    }
                },
                Q = function(t, e, i, n, o, r, s) {
                    function a() {
                        x.stop || (y || p.call(), y = K() - g, l(), y >= x.time && (x.time = y > x.time ? y + h - (y - x.time) : y + h - 1, x.time < y + 1 && (x.time = y + 1)), x.time < n ? x.id = f(a) : m.call())
                    }

                    function l() {
                        n > 0 ? (x.currVal = u(x.time, b, S, n, o), w[e] = Math.round(x.currVal) + "px") : w[e] = i + "px", v.call()
                    }

                    function c() {
                        h = 1e3 / 60, x.time = y + h, f = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                            return l(), setTimeout(t, .01)
                        }, x.id = f(a)
                    }

                    function d() {
                        null != x.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(x.id) : clearTimeout(x.id), x.id = null)
                    }

                    function u(t, e, i, n, o) {
                        switch (o) {
                            case "linear":
                            case "mcsLinear":
                                return i * t / n + e;
                            case "mcsLinearOut":
                                return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                            case "easeInOutSmooth":
                                return t /= n / 2, t < 1 ? i / 2 * t * t + e : (t--, -i / 2 * (t * (t - 2) - 1) + e);
                            case "easeInOutStrong":
                                return t /= n / 2, t < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (-Math.pow(2, -10 * t) + 2) + e);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return t /= n / 2, t < 1 ? i / 2 * t * t * t + e : (t -= 2, i / 2 * (t * t * t + 2) + e);
                            case "easeOutSmooth":
                                return t /= n, t--, -i * (t * t * t * t - 1) + e;
                            case "easeOutStrong":
                                return i * (-Math.pow(2, -10 * t / n) + 1) + e;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var r = (t /= n) * t,
                                    s = r * t;
                                return e + i * (.499999999999997 * s * r + -2.5 * r * r + 5.5 * s + -6.5 * r + 4 * t)
                        }
                    }
                    t._mTween || (t._mTween = {
                        top: {},
                        left: {}
                    });
                    var h, f, s = s || {},
                        p = s.onStart || function() {},
                        v = s.onUpdate || function() {},
                        m = s.onComplete || function() {},
                        g = K(),
                        y = 0,
                        b = t.offsetTop,
                        w = t.style,
                        x = t._mTween[e];
                    "left" === e && (b = t.offsetLeft);
                    var S = i - b;
                    x.stop = 0, "none" !== r && d(), c()
                },
                K = function() {
                    return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                },
                J = function() {
                    var t = this;
                    t._mTween || (t._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                        var n = e[i];
                        t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
                    }
                },
                Z = function(t, e) {
                    try {
                        delete t[e]
                    } catch (i) {
                        t[e] = null
                    }
                },
                tt = function(t) {
                    return !(t.which && 1 !== t.which)
                },
                et = function(t) {
                    var e = t.originalEvent.pointerType;
                    return !(e && "touch" !== e && 2 !== e)
                },
                it = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                nt = function(t) {
                    var e = t.parents(".mCSB_container");
                    return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
                },
                ot = function() {
                    function t() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                    var e = t();
                    return !!e && document[e]
                };
            t.fn[i] = function(e) {
                return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
            }, t[i] = function(e) {
                return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : u.init.apply(this, arguments)
            }, t[i].defaults = r, window[i] = !0, t(window).bind("load", function() {
                t(o)[i](), t.extend(t.expr[":"], {
                    mcsInView: t.expr[":"].mcsInView || function(e) {
                        var i, n, o = t(e),
                            r = o.parents(".mCSB_container");
                        if (r.length) return i = r.parent(), n = [r[0].offsetTop, r[0].offsetLeft], n[0] + nt(o)[0] >= 0 && n[0] + nt(o)[0] < i.height() - o.outerHeight(!1) && n[1] + nt(o)[1] >= 0 && n[1] + nt(o)[1] < i.width() - o.outerWidth(!1)
                    },
                    mcsInSight: t.expr[":"].mcsInSight || function(e, i, n) {
                        var o, r, s, a, l = t(e),
                            c = l.parents(".mCSB_container"),
                            d = "exact" === n[3] ? [
                                [1, 0],
                                [1, 0]
                            ] : [
                                [.9, .1],
                                [.6, .4]
                            ];
                        if (c.length) return o = [l.outerHeight(!1), l.outerWidth(!1)], s = [c[0].offsetTop + nt(l)[0], c[0].offsetLeft + nt(l)[1]], r = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], a = [o[0] < r[0] ? d[0] : d[1], o[1] < r[1] ? d[0] : d[1]], s[0] - r[0] * a[0][0] < 0 && s[0] + o[0] - r[0] * a[0][1] >= 0 && s[1] - r[1] * a[1][0] < 0 && s[1] + o[1] - r[1] * a[1][1] >= 0
                    },
                    mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
                        var i = t(e).data(n);
                        if (i) return i.overflowed[0] || i.overflowed[1]
                    }
                })
            })
        })
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(i, r, a) {
            function l(t, e, n) {
                var o, r = "$()." + i + '("' + e + '")';
                return t.each(function(t, l) {
                    var c = a.data(l, i);
                    if (!c) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                    var d = c[e];
                    if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                    var u = d.apply(c, n);
                    o = void 0 === o ? u : o
                }), void 0 !== o ? o : t
            }

            function c(t, e) {
                t.each(function(t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
                })
            }
            a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, n(a))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var o = Array.prototype.slice,
            r = t.console,
            s = "undefined" == typeof r ? function() {} : function(t) {
                r.error(t)
            };
        return n(e || t.jQuery), i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return n.indexOf(e) == -1 && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return n != -1 && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < c; e++) {
                var i = l[e];
                t[i] = 0
            }
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function o() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
            }
        }

        function r(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var r = n(e);
                if ("none" == r.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == r.boxSizing, u = 0; u < c; u++) {
                    var h = l[u],
                        f = r[h],
                        p = parseFloat(f);
                    a[h] = isNaN(p) ? 0 : p
                }
                var v = a.paddingLeft + a.paddingRight,
                    m = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    w = a.borderTopWidth + a.borderBottomWidth,
                    x = d && s,
                    S = t(r.width);
                S !== !1 && (a.width = S + (x ? 0 : v + b));
                var C = t(r.height);
                return C !== !1 && (a.height = C + (x ? 0 : m + w)), a.innerWidth = a.width - (v + b), a.innerHeight = a.height - (m + w), a.outerWidth = a.width + g, a.outerHeight = a.height + y, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            d = !1;
        return r
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "object" == typeof t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                }
            }), o
        }, i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, e), delete r[o]
                }, i || 100)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function(e, o) {
            i.docReady(function() {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + r),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    d = s + "-options",
                    u = t.jQuery;
                c.forEach(function(t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(d);
                    try {
                        i = r && JSON.parse(r)
                    } catch (a) {
                        return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                    }
                    var l = new e(t, i);
                    u && u.data(t, o, l)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
    }(window, function(t, e) {
        function i(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var n = i.prototype;
        return n.create = function() {
            this.element.style.position = "absolute", this.x = 0, this.shift = 0
        }, n.destroy = function() {
            this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = ""
        }, n.getSize = function() {
            this.size = e(this.element)
        }, n.setPosition = function(t) {
            this.x = t, this.updateTarget(), this.renderPosition(t)
        }, n.updateTarget = n.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, n.renderPosition = function(t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, n.wrapShift = function(t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, n.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
    }(window, function() {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                e = this.getLastCell(),
                i = e ? e.size[t] : 0,
                n = this.outerWidth - (this.firstMargin + i);
            this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }, e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, e.select = function() {
            this.changeSelectedClass("add")
        }, e.unselect = function() {
            this.changeSelectedClass("remove")
        }, e.changeSelectedClass = function(t) {
            this.cells.forEach(function(e) {
                e.element.classList[t]("is-selected")
            })
        }, e.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
    }(window, function(t, e) {
        var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
            n = 0;
        i || (i = function(t) {
            var e = (new Date).getTime(),
                i = Math.max(0, 16 - (e - n)),
                o = setTimeout(t, i);
            return n = e + i, o
        });
        var o = {};
        o.startAnimation = function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        }, o.animate = function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                i(function() {
                    e.animate()
                })
            }
        };
        var r = function() {
            var t = document.documentElement.style;
            return "string" == typeof t.transform ? "transform" : "WebkitTransform"
        }();
        return o.positionSlider = function() {
            var t = this.x;
            this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && r ? -t : t;
            var i = this.getPositionValue(t);
            this.slider.style[r] = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
            var n = this.slides[0];
            if (n) {
                var o = -this.x - n.target,
                    s = o / this.slidesWidth;
                this.dispatchEvent("scroll", null, [s, o])
            }
        }, o.positionSliderAtSelected = function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.positionSlider())
        }, o.getPositionValue = function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        }, o.settle = function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle"))
        }, o.shiftWrapCells = function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        }, o._shiftCells = function(t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n],
                    r = e > 0 ? i : 0;
                o.wrapShift(r), e -= o.size.outerWidth
            }
        }, o._unshiftCells = function(t) {
            if (t && t.length)
                for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
        }, o.integratePhysics = function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        }, o.applyForce = function(t) {
            this.velocity += t
        }, o.getFrictionFactor = function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, o.getRestingPosition = function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, o.applyDragForce = function() {
            if (this.isPointerDown) {
                var t = this.dragX - this.x,
                    e = t - this.velocity;
                this.applyForce(e)
            }
        }, o.applySelectedAttraction = function() {
            if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
                var t = this.selectedSlide.target * -1 - this.x,
                    e = t * this.options.selectedAttraction;
                this.applyForce(e)
            }
        }, o
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, o, r, s, a) {
            return e(t, i, n, o, r, s, a)
        });
        else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
        }
    }(window, function(t, e, i, n, o, r, s) {
        function a(t, e) {
            for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
        }

        function l(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(u && u.error("Bad element for Flickity: " + (i || t)));
            if (this.element = i, this.element.flickityGUID) {
                var o = f[this.element.flickityGUID];
                return o.option(e), o
            }
            c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
        }
        var c = t.jQuery,
            d = t.getComputedStyle,
            u = t.console,
            h = 0,
            f = {};
        l.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, l.createMethods = [];
        var p = l.prototype;
        n.extend(p, e.prototype), p._create = function() {
            var e = this.guid = ++h;
            this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), l.createMethods.forEach(function(t) {
                this[t]()
            }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
        }, p.option = function(t) {
            n.extend(this.options, t)
        }, p.activate = function() {
            if (!this.isActive) {
                this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
                var t = this._filterFindCellElements(this.element.children);
                a(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");
                var e, i = this.options.initialIndex;
                e = this.isInitActivated ? this.selectedIndex : void 0 !== i && this.cells[i] ? i : 0, this.select(e, !1, !0), this.isInitActivated = !0
            }
        }, p._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, p._filterFindCellElements = function(t) {
            return n.filterFindElements(t, this.options.cellSelector)
        }, p.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, p._makeCells = function(t) {
            var e = this._filterFindCellElements(t),
                i = e.map(function(t) {
                    return new o(t, this)
                }, this);
            return i
        }, p.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, p.getLastSlide = function() {
            return this.slides[this.slides.length - 1]
        }, p.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, p._positionCells = function(t) {
            t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
            var e = 0;
            if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
            }
            for (var n = this.cells.length, o = t; o < n; o++) {
                var r = this.cells[o];
                r.setPosition(e), e += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
        }, p._sizeCells = function(t) {
            t.forEach(function(t) {
                t.getSize()
            })
        }, p.updateSlides = function() {
            if (this.slides = [], this.cells.length) {
                var t = new r(this);
                this.slides.push(t);
                var e = "left" == this.originSide,
                    i = e ? "marginRight" : "marginLeft",
                    n = this._getCanCellFit();
                this.cells.forEach(function(e, o) {
                    if (!t.cells.length) return void t.addCell(e);
                    var s = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
                    n.call(this, o, s) ? t.addCell(e) : (t.updateTarget(), t = new r(this), this.slides.push(t), t.addCell(e))
                }, this), t.updateTarget(), this.updateSelectedSlide()
            }
        }, p._getCanCellFit = function() {
            var t = this.options.groupCells;
            if (!t) return function() {
                return !1
            };
            if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function(t) {
                    return t % e !== 0
                }
            }
            var i = "string" == typeof t && t.match(/^(\d+)%$/),
                n = i ? parseInt(i[1], 10) / 100 : 1;
            return function(t, e) {
                return e <= (this.size.innerWidth + 1) * n
            }
        }, p._init = p.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, p.getSize = function() {
            this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var v = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        return p.setCellAlign = function() {
            var t = v[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, p.setGallerySize = function() {
            if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
            }
        }, p._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, p._getGapCells = function(t, e, i) {
            for (var n = []; t > 0;) {
                var o = this.cells[e];
                if (!o) break;
                n.push(o), e += i, t -= o.size.outerWidth
            }
            return n
        }, p._containSlides = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft,
                    e = t ? "marginRight" : "marginLeft",
                    i = t ? "marginLeft" : "marginRight",
                    n = this.slideableWidth - this.getLastCell().size[i],
                    o = n < this.size.innerWidth,
                    r = this.cursorPosition + this.cells[0].size[e],
                    s = n - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach(function(t) {
                    o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, r), t.target = Math.min(t.target, s))
                }, this)
            }
        }, p.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c && this.$element) {
                t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                var o = t;
                if (e) {
                    var r = c.Event(e);
                    r.type = t, o = r
                }
                this.$element.trigger(o, i)
            }
        }, p.select = function(t, e, i) {
            this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t] && (this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select"), this.dispatchEvent("cellSelect")))
        }, p._wrapSelect = function(t) {
            var e = this.slides.length,
                i = this.options.wrapAround && e > 1;
            if (!i) return t;
            var o = n.modulo(t, e),
                r = Math.abs(o - this.selectedIndex),
                s = Math.abs(o + e - this.selectedIndex),
                a = Math.abs(o - e - this.selectedIndex);
            !this.isDragSelect && s < r ? t += e : !this.isDragSelect && a < r && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
        }, p.previous = function(t, e) {
            this.select(this.selectedIndex - 1, t, e)
        }, p.next = function(t, e) {
            this.select(this.selectedIndex + 1, t, e)
        }, p.updateSelectedSlide = function() {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
        }, p.unselectSelectedSlide = function() {
            this.selectedSlide && this.selectedSlide.unselect()
        }, p.selectCell = function(t, e, i) {
            var n;
            "number" == typeof t ? n = this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), n = this.getCell(t));
            for (var o = 0; n && o < this.slides.length; o++) {
                var r = this.slides[o],
                    s = r.cells.indexOf(n);
                if (s != -1) return void this.select(o, e, i)
            }
        }, p.getCell = function(t) {
            for (var e = 0; e < this.cells.length; e++) {
                var i = this.cells[e];
                if (i.element == t) return i
            }
        }, p.getCells = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getCell(t);
                i && e.push(i)
            }, this), e
        }, p.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, p.getParentCell = function(t) {
            var e = this.getCell(t);
            return e ? e : (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, p.getAdjacentCellElements = function(t, e) {
            if (!t) return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var i = this.slides.length;
            if (1 + 2 * t >= i) return this.getCellElements();
            for (var o = [], r = e - t; r <= e + t; r++) {
                var s = this.options.wrapAround ? n.modulo(r, i) : r,
                    a = this.slides[s];
                a && (o = o.concat(a.getCellElements()))
            }
            return o
        }, p.uiChange = function() {
            this.emitEvent("uiChange")
        }, p.childUIPointerDown = function(t) {
            this.emitEvent("childUIPointerDown", [t])
        }, p.onresize = function() {
            this.watchCSS(), this.resize()
        }, n.debounceMethod(l, "onresize", 150), p.resize = function() {
            if (this.isActive) {
                this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
            }
        }, p.watchCSS = function() {
            var t = this.options.watchCSS;
            if (t) {
                var e = d(this.element, ":after").content;
                e.indexOf("flickity") != -1 ? this.activate() : this.deactivate()
            }
        }, p.onkeydown = function(t) {
            if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
                if (37 == t.keyCode) {
                    var e = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[e]()
                } else if (39 == t.keyCode) {
                var i = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[i]()
            }
        }, p.deactivate = function() {
            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.cells.forEach(function(t) {
                t.destroy()
            }), this.unselectSelectedSlide(), this.element.removeChild(this.viewport), a(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
        }, p.destroy = function() {
            this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
        }, n.extend(p, s), l.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.flickityGUID;
            return e && f[e]
        }, n.htmlInit(l, "flickity"), c && c.bridget && c.bridget("flickity", l), l.setJQuery = function(t) {
            c = t
        }, l.Cell = o, l
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i() {}

        function n() {}
        var o = n.prototype = Object.create(e.prototype);
        o.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }, o.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }, o._bindStartEvent = function(e, i) {
            i = void 0 === i || !!i;
            var n = i ? "addEventListener" : "removeEventListener";
            t.PointerEvent ? e[n]("pointerdown", this) : (e[n]("mousedown", this), e[n]("touchstart", this))
        }, o.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.getTouch = function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (i.identifier == this.pointerIdentifier) return i
            }
        }, o.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, o.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }, o.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }, o._pointerDown = function(t, e) {
            this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, o.pointerDown = function(t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var r = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return o._bindPostStartEvents = function(e) {
            if (e) {
                var i = r[e.type];
                i.forEach(function(e) {
                    t.addEventListener(e, this)
                }, this), this._boundPointerEvents = i
            }
        }, o._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
                t.removeEventListener(e, this)
            }, this), delete this._boundPointerEvents)
        }, o.onmousemove = function(t) {
            this._pointerMove(t, t)
        }, o.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, o.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, o._pointerMove = function(t, e) {
            this.pointerMove(t, e)
        }, o.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, o.onmouseup = function(t) {
            this._pointerUp(t, t)
        }, o.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, o.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, o._pointerUp = function(t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, o.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, o._pointerDone = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, o.pointerDone = i, o.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, o.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, o._pointerCancel = function(t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, o.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, n.getPointerPoint = function(t) {
            return {
                x: t.pageX,
                y: t.pageY
            }
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
    }(window, function(t, e) {
        function i() {}
        var n = i.prototype = Object.create(e.prototype);
        return n.bindHandles = function() {
            this._bindHandles(!0)
        }, n.unbindHandles = function() {
            this._bindHandles(!1)
        }, n._bindHandles = function(e) {
            e = void 0 === e || !!e;
            for (var i = e ? "addEventListener" : "removeEventListener", n = 0; n < this.handles.length; n++) {
                var o = this.handles[n];
                this._bindStartEvent(o, e), o[i]("click", this), t.PointerEvent && (o.style.touchAction = e ? "none" : "")
            }
        }, n.pointerDown = function(t, e) {
            if ("INPUT" == t.target.nodeName && "range" == t.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(t, e);
            var i = document.activeElement;
            i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        }, n._dragPointerDown = function(t, i) {
            this.pointerDownPoint = e.getPointerPoint(i);
            var n = this.canPreventDefaultOnPointerDown(t, i);
            n && t.preventDefault()
        }, n.canPreventDefaultOnPointerDown = function(t) {
            return "SELECT" != t.target.nodeName
        }, n.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
        }, n._dragPointerMove = function(t, i) {
            var n = e.getPointerPoint(i),
                o = {
                    x: n.x - this.pointerDownPoint.x,
                    y: n.y - this.pointerDownPoint.y
                };
            return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, i), o
        }, n.hasDragStarted = function(t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, n.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, n._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, n._dragStart = function(t, i) {
            this.isDragging = !0, this.dragStartPoint = e.getPointerPoint(i), this.isPreventingClicks = !0, this.dragStart(t, i)
        }, n.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e]);
        }, n._dragMove = function(t, e, i) {
            this.isDragging && this.dragMove(t, e, i)
        }, n.dragMove = function(t, e, i) {
            t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
        }, n._dragEnd = function(t, e) {
            this.isDragging = !1, setTimeout(function() {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(t, e)
        }, n.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, n.onclick = function(t) {
            this.isPreventingClicks && t.preventDefault()
        }, n._staticClick = function(t, e) {
            if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
                var i = t.target.nodeName;
                "INPUT" != i && "TEXTAREA" != i || t.target.focus(), this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                    delete this.isIgnoringMouseUp
                }.bind(this), 400))
            }
        }, n.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }, i.getPointerPoint = e.getPointerPoint, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        function o(t) {
            var e = u[t.type],
                i = h[t.target.nodeName];
            return e || i
        }

        function r() {
            return {
                x: t.pageXOffset,
                y: t.pageYOffset
            }
        }
        n.extend(e.defaults, {
            draggable: !0,
            dragThreshold: 3
        }), e.createMethods.push("_createDrag");
        var s = e.prototype;
        n.extend(s, i.prototype);
        var a = "createTouch" in document,
            l = !1;
        s._createDrag = function() {
            this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag), a && !l && (t.addEventListener("touchmove", function() {}), l = !0)
        }, s.bindDrag = function() {
            this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
        }, s.unbindDrag = function() {
            this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), delete this.isDragBound)
        }, s._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, s._childUIPointerDownDrag = function(t) {
            t.preventDefault(), this.pointerDownFocus(t)
        };
        var c = {
                TEXTAREA: !0,
                INPUT: !0,
                OPTION: !0
            },
            d = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0
            };
        s.pointerDown = function(e, i) {
            var n = c[e.target.nodeName] && !d[e.target.type];
            if (n) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(e, i);
            var o = document.activeElement;
            o && o.blur && o != this.element && o != document.body && o.blur(), this.pointerDownFocus(e), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this._bindPostStartEvents(e), this.pointerDownScroll = r(), t.addEventListener("scroll", this), this.dispatchEvent("pointerDown", e, [i])
        }, s.pointerDownFocus = function(e) {
            var i = o(e);
            if (this.options.accessibility && !i) {
                var n = t.pageYOffset;
                this.element.focus(), t.pageYOffset != n && t.scrollTo(t.pageXOffset, n)
            }
        };
        var u = {
                touchstart: !0,
                pointerdown: !0
            },
            h = {
                INPUT: !0,
                SELECT: !0
            };
        return s.canPreventDefaultOnPointerDown = function(t) {
            var e = o(t);
            return !e
        }, s.hasDragStarted = function(t) {
            return Math.abs(t.x) > this.options.dragThreshold
        }, s.pointerUp = function(t, e) {
            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
        }, s.pointerDone = function() {
            t.removeEventListener("scroll", this), delete this.pointerDownScroll
        }, s.dragStart = function(e, i) {
            this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i])
        }, s.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
        }, s.dragMove = function(t, e, i) {
            t.preventDefault(), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1,
                o = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                o = o > r ? .5 * (o + r) : o;
                var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                o = o < s ? .5 * (o + s) : o
            }
            this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
        }, s.dragEnd = function(t, e) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
        }, s.dragEndRestingSelect = function() {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1),
                n = this._getClosestResting(t, e, -1),
                o = i.distance < n.distance ? i.index : n.index;
            return o
        }, s._getClosestResting = function(t, e, i) {
            for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(t, e) {
                    return t <= e
                } : function(t, e) {
                    return t < e
                }; r(e, o) && (n += i, o = e, e = this.getSlideDistance(-t, n), null !== e);) e = Math.abs(e);
            return {
                distance: o,
                index: n - i
            }
        }, s.getSlideDistance = function(t, e) {
            var i = this.slides.length,
                o = this.options.wrapAround && i > 1,
                r = o ? n.modulo(e, i) : e,
                s = this.slides[r];
            if (!s) return null;
            var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
            return t - (s.target + a)
        }, s.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
        }, s.staticClick = function(t, e) {
            var i = this.getParentCell(t.target),
                n = i && i.element,
                o = i && this.cells.indexOf(i);
            this.dispatchEvent("staticClick", t, [e, n, o])
        }, s.onscroll = function() {
            var t = r(),
                e = this.pointerDownScroll.x - t.x,
                i = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
    }(window, function(t, e) {
        function i(t) {
            this.bindTap(t)
        }
        var n = i.prototype = Object.create(e.prototype);
        return n.bindTap = function(t) {
            t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
        }, n.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        }, n.pointerUp = function(i, n) {
            if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
                var o = e.getPointerPoint(n),
                    r = this.tapElement.getBoundingClientRect(),
                    s = t.pageXOffset,
                    a = t.pageYOffset,
                    l = o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a;
                if (l && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
                    this.isIgnoringMouseUp = !0;
                    var c = this;
                    setTimeout(function() {
                        delete c.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, n.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        "use strict";

        function o(t, e) {
            this.direction = t, this.parent = e, this._create()
        }

        function r(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
        }
        var s = "http://www.w3.org/2000/svg";
        o.prototype = new i, o.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = this.direction == -1;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
            var i = this.createSVG();
            e.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, o.prototype.activate = function() {
            this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this)
        }, o.prototype.createSVG = function() {
            var t = document.createElementNS(s, "svg");
            t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(s, "path"),
                i = r(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, o.prototype.onTap = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
            var t = document.activeElement;
            t && t == this.element && this.onTap()
        }, o.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, o.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, o.prototype.update = function() {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
            var e = t.length ? t.length - 1 : 0,
                i = this.isPrevious ? 0 : e,
                n = this.parent.selectedIndex == i ? "disable" : "enable";
            this[n]()
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, n.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), e.createMethods.push("_createPrevNextButtons");
        var a = e.prototype;
        return a._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new o((-1), this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
        }, a.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, a.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, e.PrevNextButton = o, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        function o(t) {
            this.parent = t, this._create()
        }
        o.prototype = new i, o.prototype._create = function() {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, o.prototype.activate = function() {
            this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this)
        }, o.prototype.setDots = function() {
            var t = this.parent.slides.length - this.dots.length;
            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
        }, o.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), i = []; t;) {
                var n = document.createElement("li");
                n.className = "dot", e.appendChild(n), i.push(n), t--
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
        }, o.prototype.removeDots = function(t) {
            var e = this.dots.splice(this.dots.length - t, t);
            e.forEach(function(t) {
                this.holder.removeChild(t)
            }, this)
        }, o.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
        }, o.prototype.onTap = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var i = this.dots.indexOf(e);
                this.parent.select(i)
            }
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, e.PageDots = o, n.extend(e.defaults, {
            pageDots: !0
        }), e.createMethods.push("_createPageDots");
        var r = e.prototype;
        return r._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
        }, r.activatePageDots = function() {
            this.pageDots.activate()
        }, r.updateSelectedPageDots = function() {
            this.pageDots.updateSelected()
        }, r.updatePageDots = function() {
            this.pageDots.setDots()
        }, r.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, e.PageDots = o, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
    }(window, function(t, e, i) {
        function n(t) {
            this.parent = t, this.state = "stopped", r && (this.onVisibilityChange = function() {
                this.visibilityChange()
            }.bind(this), this.onVisibilityPlay = function() {
                this.visibilityPlay()
            }.bind(this))
        }
        var o, r;
        "hidden" in document ? (o = "hidden", r = "visibilitychange") : "webkitHidden" in document && (o = "webkitHidden", r = "webkitvisibilitychange"), n.prototype = Object.create(t.prototype), n.prototype.play = function() {
            if ("playing" != this.state) {
                var t = document[o];
                if (r && t) return void document.addEventListener(r, this.onVisibilityPlay);
                this.state = "playing", r && document.addEventListener(r, this.onVisibilityChange), this.tick()
            }
        }, n.prototype.tick = function() {
            if ("playing" == this.state) {
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.clear(), this.timeout = setTimeout(function() {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, n.prototype.stop = function() {
            this.state = "stopped", this.clear(), r && document.removeEventListener(r, this.onVisibilityChange)
        }, n.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function() {
            "playing" == this.state && (this.state = "paused", this.clear())
        }, n.prototype.unpause = function() {
            "paused" == this.state && this.play()
        }, n.prototype.visibilityChange = function() {
            var t = document[o];
            this[t ? "pause" : "unpause"]()
        }, n.prototype.visibilityPlay = function() {
            this.play(), document.removeEventListener(r, this.onVisibilityPlay)
        }, e.extend(i.defaults, {
            pauseAutoPlayOnHover: !0
        }), i.createMethods.push("_createPlayer");
        var s = i.prototype;
        return s._createPlayer = function() {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, s.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
        }, s.playPlayer = function() {
            this.player.play()
        }, s.stopPlayer = function() {
            this.player.stop()
        }, s.pausePlayer = function() {
            this.player.pause()
        }, s.unpausePlayer = function() {
            this.player.unpause()
        }, s.deactivatePlayer = function() {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
        }, s.onmouseenter = function() {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
        }, s.onmouseleave = function() {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
        }, i.Player = n, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        function n(t) {
            var e = document.createDocumentFragment();
            return t.forEach(function(t) {
                e.appendChild(t.element)
            }), e
        }
        var o = e.prototype;
        return o.insert = function(t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
                var o = this.cells.length;
                e = void 0 === e ? o : e;
                var r = n(i),
                    s = e == o;
                if (s) this.slider.appendChild(r);
                else {
                    var a = this.cells[e].element;
                    this.slider.insertBefore(r, a)
                }
                if (0 === e) this.cells = i.concat(this.cells);
                else if (s) this.cells = this.cells.concat(i);
                else {
                    var l = this.cells.splice(e, o - e);
                    this.cells = this.cells.concat(i).concat(l)
                }
                this._sizeCells(i);
                var c = e > this.selectedIndex ? 0 : i.length;
                this._cellAddedRemoved(e, c)
            }
        }, o.append = function(t) {
            this.insert(t, this.cells.length)
        }, o.prepend = function(t) {
            this.insert(t, 0)
        }, o.remove = function(t) {
            var e, n, o = this.getCells(t),
                r = 0,
                s = o.length;
            for (e = 0; e < s; e++) {
                n = o[e];
                var a = this.cells.indexOf(n) < this.selectedIndex;
                r -= a ? 1 : 0
            }
            for (e = 0; e < s; e++) n = o[e], n.remove(), i.removeFrom(this.cells, n);
            o.length && this._cellAddedRemoved(0, r)
        }, o._cellAddedRemoved = function(t, e) {
            e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex)), this.cellChange(t, !0), this.emitEvent("cellAddedRemoved", [t, e])
        }, o.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var i = this.cells.indexOf(e);
                this.cellChange(i)
            }
        }, o.cellChange = function(t, e) {
            var i = this.slideableWidth;
            if (this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [t]), this.options.freeScroll) {
                var n = i - this.slideableWidth;
                this.x += n * this.cellAlign, this.positionSlider()
            } else e && this.positionSliderAtSelected(), this.select(this.selectedIndex)
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        "use strict";

        function n(t) {
            if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t];
            var e = t.querySelectorAll("img[data-flickity-lazyload]");
            return i.makeArray(e)
        }

        function o(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        e.createMethods.push("_createLazyload");
        var r = e.prototype;
        return r._createLazyload = function() {
            this.on("select", this.lazyLoad)
        }, r.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                var e = "number" == typeof t ? t : 0,
                    i = this.getAdjacentCellElements(e),
                    r = [];
                i.forEach(function(t) {
                    var e = n(t);
                    r = r.concat(e)
                }), r.forEach(function(t) {
                    new o(t, this)
                }, this)
            }
        }, o.prototype.handleEvent = i.handleEvent, o.prototype.load = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
        }, o.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }, o.prototype.onerror = function(t) {
            this.complete(t, "flickity-lazyerror")
        }, o.prototype.complete = function(t, e) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var i = this.flickity.getParentCell(this.img),
                n = i && i.element;
            this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
        }, e.LazyLoader = o, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function(t) {
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e) {
        function i(t, e, i) {
            return (e - t) * i + t
        }
        t.createMethods.push("_createAsNavFor");
        var n = t.prototype;
        return n._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout(function() {
                    e.setNavCompanion(t)
                })
            }
        }, n.setNavCompanion = function(i) {
            i = e.getQueryElement(i);
            var n = t.data(i);
            if (n && n != this) {
                this.navCompanion = n;
                var o = this;
                this.onNavCompanionSelect = function() {
                    o.navCompanionSelect()
                }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
            }
        }, n.navCompanionSelect = function(t) {
            if (this.navCompanion) {
                var e = this.navCompanion.selectedCells[0],
                    n = this.navCompanion.cells.indexOf(e),
                    o = n + this.navCompanion.selectedCells.length - 1,
                    r = Math.floor(i(n, o, this.navCompanion.cellAlign));
                if (this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                    var s = this.cells.slice(n, o + 1);
                    this.navSelectedElements = s.map(function(t) {
                        return t.element
                    }), this.changeNavSelectedClass("add")
                }
            }
        }, n.changeNavSelectedClass = function(t) {
            this.navSelectedElements.forEach(function(e) {
                e.classList[t]("is-nav-selected")
            })
        }, n.activateAsNavFor = function() {
            this.navCompanionSelect(!0)
        }, n.removeNavSelectedElements = function() {
            this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
        }, n.onNavStaticClick = function(t, e, i, n) {
            "number" == typeof n && this.navCompanion.selectCell(n)
        }, n.deactivateAsNavFor = function() {
            this.removeNavSelectedElements()
        }, n.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, r) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(t, e, r)
        }

        function r(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var a = t.jQuery,
            l = t.console;
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function(t) {
            var e = new r(t);
            this.images.push(e)
        }, o.prototype.addBackground = function(t, e) {
            var i = new s(t, e);
            this.images.push(i)
        }, o.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function(e) {
            e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function(t, e) {
                var i = new o(this, t, e);
                return i.jqDeferred.promise(a(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
    }(window, function(t, e, i) {
        "use strict";
        e.createMethods.push("_createImagesLoaded");
        var n = e.prototype;
        return n._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, n.imagesLoaded = function() {
            function t(t, i) {
                var n = e.getParentCell(i.img);
                e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected()
            }
            if (this.options.imagesLoaded) {
                var e = this;
                i(this.slider).on("progress", t)
            }
        }, e
    }),
    function(t) {
        var e = {
                common: {
                    init: function() {
                        (new WOW).init(), t(".js-carousel-home").flickity({
                            cellAlign: "left",
                            wrapAround: !0,
                            dragThreshold: 10
                        }), t(".js-menu").click(function(e) {
                            e.preventDefault(), t("nav.main").toggleClass("opened")
                        });
                        var e = "max",
                            i = 0;
                        i = t(window).width(), t(window).resize(function() {
                            i = t(window).width()
                        }), t(window).scroll(function(n) {
                            var o, r = t(this).scrollTop();
                            if (r > 50 && "min" !== e && i > 770) {
                                o = document.getElementById("cabecera_min");
                                try {
                                    o.beginElement()
                                } catch (s) {
                                    t("header svg").hide(), t(".head-min-ie").show()
                                }
                                e = "min"
                            }
                            if (r <= 50 && "max" !== e && i > 770) {
                                o = document.getElementById("cabecera_max");
                                try {
                                    o.beginElement()
                                } catch (s) {
                                    t("header svg").show(), t(".head-min-ie").hide()
                                }
                                e = "max"
                            }
                            if (i <= 770 && "min" !== e) {
                                o = document.getElementById("cabecera_min");
                                try {
                                    o.beginElement()
                                } catch (s) {
                                    t("header svg").hide(), t(".head-min-ie").show()
                                }
                                e = "min"
                            }
                        }), t(window).scroll(), t(".js-aceptar-cookies").click(function(e) {
                            e.preventDefault(), Cookies.set("COOKIES_ACEPTADAS", "true", {
                                expires: 365
                            }), t("#cookies").slideUp()
                        }), t(".js-cerrar").click(function(e) {
                            e.preventDefault(), t(".modal-alert").fadeOut()
                        }), t("nav").mCustomScrollbar({
                            theme: "dark"
                        }), alerta = function(e, i) {
                            t(".modal-alert .titulo").html(e), t(".modal-alert .texto").html(i), t(".modal-alert").modal("show")
                        }
                    },
                    finalize: function() {}
                },
                home: {
                    init: function() {
                        t(window).resize(function() {
                            t("section.redes > a.item").css("height", t("section.redes > a.item").first().css("width"));
                            var e = t(window).height() - 50;
                            t(".js-carousel-home").css("height", e)
                        });
                        var e = t(window).height() - 50;
                        t(".js-carousel-home").css("height", e);
                        var i = window.location.hash;
                        t(".carousel").flickity("selectCell", i)
                    },
                    finalize: function() {}
                },
                qa: {
                    init: function() {
                        t(".size-xl > p").mCustomScrollbar({
                            theme: "dark"
                        })
                    },
                    finalize: function() {}
                },
                newsletter: {
                    init: function() {
                        t(".js-form-newsletter").validator().on("submit", function(e) {
                            if (e.isDefaultPrevented()) return alerta("¡EEEEPS!", "Te has dejado alún campo sin rellenar. ¿Le echas un ojo?"), !1;
                            if (t("#checkBases").is(":checked")) {
                                var i = t(this).serialize();
                                return i += "&action=guardarNewsletter", t.ajax({
                                    url: php_vars.ajax_url,
                                    type: "POST",
                                    dataType: "json",
                                    data: i
                                }).done(function(e) {
                                    switch (e.respuesta) {
                                        case "OK":
                                            alerta("RECIBIDO!", "CORTO Y CAMBIO.<br><br><br>"), t(".js-form-newsletter")[0].reset();
                                            break;
                                        case "KO":
                                            alerta("¡OUCH!", "No se ha podido enviar. Inténtalo otra vez... :(");
                                            break;
                                        case "REPETIDO":
                                            alerta("¡OUCH!", "Parece que ya estabas apuntado a nuestro newsletter... :-)");
                                            break;
                                        default:
                                            alerta("¡OUCH!", "No se ha podido enviar. Inténtalo otra vez... :(")
                                    }
                                }).fail(function() {
                                    alerta("¡OUCH!", "No se ha podido enviar. Inténtalo otra vez... :(")
                                }), !1
                            }
                            return alerta("MMM....", "NECEISTAMOS QUE ACEPTES LA POLÍTICA DE PRIVACIDAD. SOLO ES UN CLICK."), !1
                        })
                    },
                    finalize: function() {}
                },
                alergenos: {
                    init: function() {
                        jQuery(window).scroll(function(t) {
                            w = jQuery(window).width(), jQuery(this).scrollTop() > 370 ? (jQuery(".contenedor-cabecera-sticker").addClass("sticky"), jQuery(".js-cabecera-leyenda-sticker").html(jQuery(".js-cabecera-leyenda").html()), jQuery(".js-cabecera-alergenos-sticker").html(jQuery(".js-cabecera-alergenos").html()), jQuery(".js-vertodo-sticker").css("display", "block"), w < 992 && (jQuery(".contenedor-cabecera-sticker").removeClass("sticky"), jQuery(".js-vertodo-sticker").css("display", "none"))) : (jQuery(".contenedor-cabecera-sticker").removeClass("sticky"), jQuery(".js-vertodo-sticker").css("display", "none"))
                        })
                    },
                    finalize: function() {}
                },
                productos: {
                    init: function() {
                        t("a.siguiente").click(function(e) {
                            e.preventDefault();
                            var i = t(this).attr("href");
                            i = t(i), t("html,body").animate({
                                scrollTop: i.offset().top - 50
                            })
                        })
                    },
                    finalize: function() {}
                },
                novedades: {
                    init: function() {
                        t("a.siguiente").click(function(e) {
                            e.preventDefault();
                            var i = t(this).parent().next();
                            t("html,body").animate({
                                scrollTop: i.offset().top
                            })
                        })
                    },
                    finalize: function() {}
                },
                bubblegum: {
                    init: function() {
                        t("a.siguiente").click(function(e) {
                            e.preventDefault();
                            var i = t(this).parent().next();
                            t("html,body").animate({
                                scrollTop: i.offset().top
                            })
                        })
                    },
                    finalize: function() {}
                },
                single_novedad: {
                    init: function() {
                        t("a.siguiente").click(function(e) {
                            e.preventDefault();
                            var i = t(this).parent().next();
                            t("html,body").animate({
                                scrollTop: i.offset().top
                            })
                        })
                    },
                    finalize: function() {}
                },
                about_us: {
                    init: function() {}
                },
                historia: {
                    init: function() {
                        t(".js-moretext").click(function(e) {
                            e.preventDefault(), t(this).parent().parent().find(".mas_texto").slideToggle(), t(this).toggleClass("closed"), t(this).hasClass("closed") ? t(this).html('<i class="fa fa-angle-down" aria-hidden="true"></i> VER MÁS') : t(this).html('<i class="fa fa-angle-up" aria-hidden="true"></i> VER MENOS')
                        }), t(".intro a").click(function(e) {
                            e.preventDefault();
                            var i = t("section.historia");
                            t("html,body").animate({
                                scrollTop: i.offset().top
                            })
                        })
                    }
                },
                single_producto: {
                    init: function() {
                        function e() {
                            t(".formatos-big .slides").slick({
                                infinite: !0,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            })
                        }

                        function i() {
                            var e = t(".caramelo").attr("data-pasodestino");
                            e > 0 && (e > r && r++, e < r && r--, t(".caramelo").removeClass("paso1"), t(".caramelo").removeClass("paso2"), t(".caramelo").removeClass("paso3"), t(".caramelo").removeClass("paso4"), t(".caramelo").removeClass("paso5"), t(".caramelo").removeClass("paso6"), t(".caramelo").addClass("paso" + r))
                        }

                        function n() {
                            var e = t(".caramelo").attr("pasodestino-mbl");
                            if (e > 6) var e = 1;
                            t(".caramelo").removeClass("paso1"), t(".caramelo").removeClass("paso2"), t(".caramelo").removeClass("paso3"), t(".caramelo").removeClass("paso4"), t(".caramelo").removeClass("paso5"), t(".caramelo").removeClass("paso6"), t(".caramelo").addClass("paso" + e),
                                e++, t(".caramelo").attr("pasodestino-mbl", e), console.log("timer MBL" + e)
                        }
                        t(".sabores").slick({
                            infinite: !1,
                            slidesToShow: 6,
                            slidesToScroll: 6,
                            responsive: [{
                                breakpoint: 1240,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 5
                                }
                            }, {
                                breakpoint: 1050,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 5
                                }
                            }, {
                                breakpoint: 639,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: 400,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }]
                        }), t(".formatos").slick({
                            infinite: !1,
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            responsive: [{
                                breakpoint: 1240,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 5
                                }
                            }, {
                                breakpoint: 1050,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 6,
                                    slidesToScroll: 6
                                }
                            }, {
                                breakpoint: 639,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: 400,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }]
                        }), t(".modal-productos").click(function(e) {
                            e.preventDefault(), t(this).fadeOut()
                        }), t(".modal-productos .formatos-big").click(function(t) {
                            t.stopPropagation()
                        });
                        var o = !1;
                        t(".formatos a").click(function(i) {
                            i.preventDefault();
                            var n = t(this).attr("data-slide");
                            t(".modal-productos").fadeIn(function() {
                                setTimeout(function() {
                                    o || e(), t(".formatos-carousel .imagen").css("opacity", 1), t(".formatos-carousel .textos").css("opacity", 1), t(".formatos-big .slides").slick("slickGoTo", n), o = !0
                                }, 200), t(".js-modal-productos-cerrar").click(function(e) {
                                    t(".modal-productos").fadeOut(function() {})
                                })
                            })
                        });
                        var r = 0;
                        if (t(".js-detect-mouse").mousemove(function(e) {
                                var i = t(this).parent().offset(),
                                    n = Math.floor(t(".js-detect-mouse").width() / 6),
                                    o = e.pageX - i.left,
                                    r = Math.floor(o / n);
                                r > 6 && (r = 6), r < 1 && (r = 1), t(".caramelo").attr("data-pasodestino", r)
                            }), ancho = t(window).width(), ancho > 768) {
                            setInterval(i, 400)
                        } else {
                            var s = 1;
                            t(".caramelo").attr("pasodestino-mbl", s);
                            setInterval(n, 400)
                        }
                        t(".sabores a").click(function(e) {
                            e.preventDefault(), t(".sabores a").removeClass("active"), t(this).addClass("active"), t(".sabor-textos p").hide(), t("." + t(this).attr("id")).show(), t(".caramelo").css("background-image", "url(" + t(this).attr("data-sprite") + ")"), t(".caramelo").removeClass("paso1"), t(".caramelo").removeClass("paso2"), t(".caramelo").removeClass("paso3"), t(".caramelo").removeClass("paso4"), t(".caramelo").removeClass("paso5"), t(".caramelo").removeClass("paso6"), t(".caramelo").addClass("paso1"), r = 1, t(".ver-ingredientes").attr("href", "/alergenos/" + t(this).data("ingredientes"))
                        })
                    }
                },
                page_template_promo_gafas_parafina: {
                    init: function() {
                        t("a.siguiente").click(function(e) {
                            e.preventDefault();
                            var i = t(this).attr("href");
                            i = t(i), t("html,body").animate({
                                scrollTop: i.offset().top - 50
                            })
                        }), t(".js-validar").click(function(e) {
                            e.preventDefault();
                            var i = t("#inputCodigo1").val(),
                                n = t("#inputCodigo2").val();
                            "" != i && "" != n ? t.ajax({
                                url: php_vars.ajax_url,
                                type: "POST",
                                dataType: "json",
                                data: {
                                    action: "validarCodigosGafas",
                                    codigo1: i,
                                    codigo2: n
                                }
                            }).done(function(t) {
                                "OK" == t.resultado ? alerta("¡CORRECTO!", "Puedes usar los códigos que acabas de validar") : alerta("¡EEEEPS!", "Los códigos que indicas no son válidos")
                            }) : alerta("¡EEEEPS!", "Tienes que rellenar los campos de los dos códigos.")
                        }), validarForm = function() {
                            var e = ".js-form-promocion",
                                i = !1;
                            if (t(e).find(".has-error").removeClass("has-error"), t(e).find('input[type="text"],select').each(function(e, n) {
                                    "" === t(n).val() && (console.log(">>>" + t(n).attr("name")), t(n).is("input") ? t(n).parent().parent().addClass("has-error") : t(n).parent().parent().parent().addClass("has-error"), i = !0)
                                }), i) return alerta("¡EEEEPS!", "Te has dejado alún campo sin rellenar.<br>¿Le echas un ojo?"), !1;
                            var n = /^[9|6|7][0-9]{8}$/,
                                o = t('input[name="telefono"]').val();
                            if (!n.test(o)) return t('input[name="telefono"]').parent().parent().addClass("has-error"), alerta("¡EEEEPS!", "El teléfono no es válido.<br>¿Le echas un ojo?"), !1;
                            var n = /^[0-9]{5}$/,
                                r = t('input[name="cp"]').val();
                            return n.test(r) ? null != t('input[name="bases"]:checked').val() && null != t('input[name="privacidad"]:checked').val() || (alerta("MMM...", "Necesitamos que aceptes la política de privacidad y las bases legales. Solo es un click."), !1) : (t('input[name="cp"]').parent().parent().addClass("has-error"), alerta("¡EEEEPS!", "El código postal no es válido.<br>¿Le echas un ojo?"), !1)
                        }, t(".js-form-promocion").submit(function(e) {
                            if (e.preventDefault(), validarForm()) {
                                var i = t(this).serialize();
                                i += "&action=registrarUsuarioGafas", t.ajax({
                                    url: php_vars.ajax_url,
                                    type: "POST",
                                    dataType: "json",
                                    data: i
                                }).done(function(e) {
                                    console.log("success"), console.log(e), alerta(e.titulo, e.texto), "OK" == e.resultado && t(".js-form-promocion").find("input,select").val("")
                                }).fail(function() {
                                    alerta("¡OUCH!", "No se ha podido enviar. Inténtalo otra vez... :(")
                                })
                            }
                        })
                    },
                    finalize: function() {}
                },
                gafas_parafina_x_chupa_chups: {
                    init: function() {
                        t("a.siguiente").click(function(e) {
                            e.preventDefault();
                            var i = t(this).parent().next();
                            t("html,body").animate({
                                scrollTop: i.offset().top
                            })
                        })
                    }
                },
                page_template_promocion: {
                    init: function() {
                        t(".js-promo-init").click(function(e) {
                            e.preventDefault(), t(".paso0").fadeOut("slow", function() {
                                t(".paso1").fadeIn(), t(".contacto.oculto").slideDown("slow", function() {
                                    t(this).removeClass("oculto")
                                })
                            })
                        }), validarPromocion = function() {
                            var e = ".js-form-promocion",
                                i = !1;
                            return t(e).find("input,select").each(function(e, n) {
                                if ("" === t(n).val()) return console.log(">>>" + t(n).attr("name")), i = !0, !1
                            }), i ? (alerta("¡EEEEPS!", "Te has dejado alún campo sin rellenar. ¿Le echas un ojo?"), !1) : null != t('input[name="bases"]:checked').val() || (alerta("MMM...", "Necesitamos que aceptes la política de privacidad. solo es click."), !1)
                        }, t(".js-form-promocion").submit(function(e) {
                            if (e.preventDefault(), validarPromocion()) {
                                var i = t(this).serialize();
                                i += "&action=guardarPromocion", t.ajax({
                                    url: php_vars.ajax_url,
                                    type: "POST",
                                    dataType: "json",
                                    data: i
                                }).done(function(e) {
                                    console.log("success"), console.log(e), t(".paso0 h2").html(e.titulo), t(".paso0 p").html(e.texto), t(".contacto").slideUp("slow", function() {
                                        t(this).addClass("oculto"), t(".paso1").fadeOut("slow", function() {
                                            t(".paso0").fadeIn()
                                        })
                                    })
                                }).fail(function() {
                                    alerta("¡OUCH!", "No se ha podido enviar. Inténtalo otra vez... :(")
                                })
                            }
                        })
                    }
                },
                page_template_contacto: {
                    init: function() {
                        "" != mostrar_mensaje && alerta(titulo_mensaje, mostrar_mensaje), console.log("contacto init"), t(".js-form-contacto").validator(), t(".grupo-empresa").hide(), t(".grupo-reclamacion").hide(), t(".grupo-categoria").hide(), t("#inputTipo").change(function() {
                            var e = t(this).val();
                            "E" == e && (t(".grupo-empresa").show(), t(".grupo-particular").hide(), t("#inputEmpresa").attr("required", ""), t("#inputContacto").attr("required", ""), t("#inputTelefono").attr("required", ""), t("#inputNombre").removeAttr("required"), t("#inputApellidos").removeAttr("required"), t("#radiomujer").removeAttr("required"), t("#radiohombre").removeAttr("required"), t("#inputAnio").removeAttr("required"), t("#radioReclamacionN").removeAttr("required"), t("#radioReclamacionS").removeAttr("required"), t("#inputFConsumPref").removeAttr("required")), "P" == e && (t(".grupo-empresa").hide(), t(".grupo-particular").show(), t("#inputNombre").attr("required", ""), t("#inputApellidos").attr("required", ""), t("#radiomujer").attr("required", ""), t("#radiohombre").attr("required", ""), t("#inputAnio").attr("required", ""), t("#radioReclamacionN").attr("required", ""), t("#radioReclamacionS").attr("required", ""), t("#inputEmpresa").removeAttr("required"), t("#inputContacto").removeAttr("required"), t("#inputTelefono").removeAttr("required"))
                        }), t("#radioReclamacionS").change(function() {
                            t(this).is(":checked") && (t(".grupo-reclamacion").show(), t("#inputFConsumPref").attr("required", ""), t("#inputLote").attr("required", ""))
                        }), t("#radioReclamacionN").change(function() {
                            t(this).is(":checked") && (t(".grupo-reclamacion").hide(), t("#inputFConsumPref").removeAttr("required"), t("#inputLote").removeAttr("required"))
                        }), t("#inputCategoria").change(function() {
                            var e = t(this).val();
                            1 == e ? (t(".categoria-1").show(), t(".categoria-no1").hide()) : (t(".categoria-1").hide(), t(".categoria-no1").show())
                        }), t(".js-form-contacto").on("submit", function(e) {
                            return "E" == t("#inputTipo").val() && ("" == t("#inputEmpresa").val() || "" == t("#inputContacto").val() || "" == t("#inputTelefono").val()) || "P" == t("#inputTipo").val() && ("" == t("#inputNombre").val() || "" == t("#inputApellidos").val() || "" == t("#radiomujer").val() || "" == t("#radiohombre").val() || "" == t("#inputAnio").val() || "" == t("#radioReclamacionN").val() || "" == t("#radioReclamacionS").val()) || "" == t("input[name='Sexo']:checked").val() || "" == t("#inputAno").val() || "" == t("input[name='EsReclamacion']:checked").val() || "" == t("#inputCP").val() || "" == t("#inputCategoria").val() ? (alerta("¡EEEEPS!", "Te has dejado alún campo sin rellenar. ¿Le echas un ojo?"), !1) :  grecaptcha.getResponse().length==0 ? (alerta("¡EEEEPS!", "Te has dejado el captcha sin validar. ¿Le echas un ojo?"), !1) : t("#checkBases").is(":checked") ? void this.submit() : (alerta("MMM....", "NECESITAMOS QUE ACEPTES LA POLÍTICA DE PRIVACIDAD. SOLO ES UN CLICK."), !1)
                        })
                    }
                }
            },
            i = {
                fire: function(t, i, n) {
                    var o, r = e;
                    i = void 0 === i ? "init" : i, o = "" !== t, o = o && r[t], o = o && "function" == typeof r[t][i], o && r[t][i](n)
                },
                loadEvents: function() {
                    i.fire("common"), t.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(t, e) {
                        console.log("** " + e), i.fire(e), i.fire(e, "finalize")
                    }), i.fire("common", "finalize")
                }
            };
        t(document).ready(i.loadEvents), showModal = function(e) {
            var i = {
                titulo: "Título",
                mensaje: "Mensaje"
            };
            t.extend(i, e), t(".modal-title").html(i.titulo), t(".modal-body").html("<p>" + i.mensaje + "</p>"), t(".modal").modal("show")
        }
    }(jQuery),
    function(t) {
        function e() {
            var e = [];
            t(".filtro-ingrediente").each(function(i) {
                var n = t(this).data("ingrediente-id"),
                    o = t(this).data("filtro-valor");
                1 == o ? (e.push(n), t(".hing" + n).css({
                    color: "#fff200"
                })) : t(".hing" + n).css({
                    color: "#003970"
                })
            }), t(".row-producto").each(function(i) {
                var n = t(this).data("ingredientes") + "";
                n = n.split(",");
                for (var o = !1, r = 0; r < e.length; r++)
                    for (var s = 0; s < n.length; s++)
                        if (n[s] == e[r]) {
                            o = !0;
                            break
                        } o || 0 == e.length ? t(this).show() : t(this).hide()
            })
        }

        function i() {
            var e = t("#resultados"),
                i = null;
            html2canvas(e, {
                imageTimeout: 2e3,
                removeContainer: !0,
                onrendered: function(t) {
                    n(TEMPLATE_DIRECTORY + "/dist/images/alargenos/cabecera-pdf.jpg", function(e) {
                        i = new jsPDF({
                            unit: "px",
                            format: "a4",
                            orientation: "portrait"
                        }), i.addImage({
                            imageData: e,
                            x: 20,
                            y: 20,
                            w: 410,
                            h: 120
                        }), i.setDrawColor(0), i.setFillColor(83, 207, 230), i.rect(20, 130, 410, 480, "F");
                        var n = .34 * t.height,
                            o = 0,
                            r = t.toDataURL("image/jpg");
                        i.addImage(r, "JPEG", 20, 130, 410, n, "tabla"), o = Math.min(480, n);
                        var s = 1;
                        for (i.setFillColor(255, 255, 255), i.rect(0, 615, 450, 20, "F"); o < n;) {
                            i.addPage();
                            var a = s <= 1 ? 15 : 22;
                            i.addImage("tabla", "JPEG", 20, -1 * o + a, 410, n), i.setFillColor(255, 255, 255), i.rect(0, 0, 450, 20, "F"), i.setFillColor(255, 255, 255), i.rect(0, 615, 450, 20, "F"), o += 600, s++
                        }
                        i.save("chch-ingredientes.pdf")
                    })
                }
            })
        }

        function n(t, e) {
            var i = new Image;
            i.onError = function() {
                alert('Cannot load image: "' + t + '"')
            }, i.onload = function() {
                e(i)
            }, i.src = t
        }
        var o = {
                common: {
                    init: function() {},
                    finalize: function() {}
                },
                alergenos: {
                    init: function() {
                        t(".filtro-ingrediente").click(function() {
                            var i = t(this).data("ingrediente-id"),
                                n = t(this).data("filtro-valor");
                            0 == n && (t("#switch-ing" + i).attr("src", TEMPLATE_DIRECTORY + "/dist/images/informacion-nutricional/ingrediente-enabled.png"), t(this).data("filtro-valor", 1), e()), 1 == n && (t("#switch-ing" + i).attr("src", TEMPLATE_DIRECTORY + "/dist/images/informacion-nutricional/ingrediente-disabled.png"), t(this).data("filtro-valor", 0), e())
                        }), t("#descargar_pdf").on("click", function() {
                            t("body").scrollTop(0), i()
                        }), t(".js-vertodo").css("cursor", "pointer"), t(".js-vertodo").on("click", function() {
                            t(".filtro-ingrediente").each(function(e) {
                                var i = t(this).data("ingrediente-id");
                                t("#switch-ing" + i).attr("src", TEMPLATE_DIRECTORY + "/dist/images/informacion-nutricional/ingrediente-disabled.png"), t(this).data("filtro-valor", 0), ingredientes = []
                            }), e()
                        }), t(".boton-buscar").on("click", function() {
                            var i = !1,
                                n = t("#tfAyuda").val();
                            norm_term = s(n), t(".filtro-ingrediente").each(function(e) {
                                var n = t(this).data("ingrediente-id"),
                                    o = s(t(this).data("nombre"));
                                o.indexOf(norm_term) >= 0 ? (t("#switch-ing" + n).attr("src", TEMPLATE_DIRECTORY + "/dist/images/informacion-nutricional/ingrediente-enabled.png"), t(this).data("filtro-valor", 1), i = !0) : (t("#switch-ing" + n).attr("src", TEMPLATE_DIRECTORY + "/dist/images/informacion-nutricional/ingrediente-disabled.png"), t(this).data("filtro-valor", 0))
                            }), e(), t(".row-producto").each(function(e) {
                                var n = s(t(this).data("nombre"));
                                n.indexOf(norm_term) >= 0 ? t(this).show() : i || t(this).hide()
                            })
                        });
                        var n = self.location.href,
                            o = n.indexOf("#"),
                            r = o != -1 ? n.substring(o + 1) : "";
                        "" != r && (t("#tfAyuda").val(decodeURI(r)), t(".boton-buscar").click())
                    },
                    finalize: function() {}
                }
            },
            r = {
                fire: function(t, e, i) {
                    var n, r = o;
                    e = void 0 == e ? "init" : e, n = "" !== t, n = n && r[t], n = n && "function" == typeof r[t][e], n && r[t][e](i)
                },
                loadEvents: function() {
                    r.fire("common"), t.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(t, e) {
                        r.fire(e), r.fire(e, "finalize")
                    }), r.fire("common", "finalize")
                }
            };
        t(document).ready(r.loadEvents);
        var s = function() {
            for (var t = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", e = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc", i = {}, n = 0, o = t.length; n < o; n++) i[t.charAt(n)] = e.charAt(n);
            return function(t) {
                for (var e = [], n = 0, o = t.length; n < o; n++) {
                    var r = t.charAt(n);
                    i.hasOwnProperty(t.charAt(n)) ? e.push(i[r]) : e.push(r)
                }
                var s = "" + e.join("");
                return s.toLowerCase()
            }
        }()
    }(jQuery);
//# sourceMappingURL=main.js.map