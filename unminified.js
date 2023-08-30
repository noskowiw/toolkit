/*! For license information please see All.min.js.LICENSE.txt */
!(function () {
    var t,
        e,
        n,
        i,
        r = {
            7757: function (t, e, n) {
                t.exports = n(5666);
            },
            9741: function (t, e, n) {
                var i, r;
                !(function (o, a) {
                    "use strict";
                    void 0 === (r = "function" == typeof (i = a) ? i.call(e, n, e, t) : i) || (t.exports = r);
                })(window, function () {
                    "use strict";
                    var t = (function () {
                        var t = window.Element.prototype;
                        if (t.matches) return "matches";
                        if (t.matchesSelector) return "matchesSelector";
                        for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                            var i = e[n] + "MatchesSelector";
                            if (t[i]) return i;
                        }
                    })();
                    return function (e, n) {
                        return e[t](n);
                    };
                });
            },
            7158: function (t, e, n) {
                var i, r;
                "undefined" != typeof window && window,
                    void 0 ===
                        (r =
                            "function" ==
                            typeof (i = function () {
                                "use strict";
                                function t() {}
                                var e = t.prototype;
                                return (
                                    (e.on = function (t, e) {
                                        if (t && e) {
                                            var n = (this._events = this._events || {}),
                                                i = (n[t] = n[t] || []);
                                            return -1 == i.indexOf(e) && i.push(e), this;
                                        }
                                    }),
                                    (e.once = function (t, e) {
                                        if (t && e) {
                                            this.on(t, e);
                                            var n = (this._onceEvents = this._onceEvents || {});
                                            return ((n[t] = n[t] || {})[e] = !0), this;
                                        }
                                    }),
                                    (e.off = function (t, e) {
                                        var n = this._events && this._events[t];
                                        if (n && n.length) {
                                            var i = n.indexOf(e);
                                            return -1 != i && n.splice(i, 1), this;
                                        }
                                    }),
                                    (e.emitEvent = function (t, e) {
                                        var n = this._events && this._events[t];
                                        if (n && n.length) {
                                            (n = n.slice(0)), (e = e || []);
                                            for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                                                var o = n[r];
                                                i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e);
                                            }
                                            return this;
                                        }
                                    }),
                                    (e.allOff = function () {
                                        delete this._events, delete this._onceEvents;
                                    }),
                                    t
                                );
                            })
                                ? i.call(e, n, e, t)
                                : i) || (t.exports = r);
            },
            9047: function (t, e, n) {
                var i, r;
                !(function (o, a) {
                    (i = [n(9741)]),
                        void 0 ===
                            (r = function (t) {
                                return (function (t, e) {
                                    "use strict";
                                    var n = {
                                            extend: function (t, e) {
                                                for (var n in e) t[n] = e[n];
                                                return t;
                                            },
                                            modulo: function (t, e) {
                                                return ((t % e) + e) % e;
                                            },
                                        },
                                        i = Array.prototype.slice;
                                    (n.makeArray = function (t) {
                                        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? i.call(t) : [t];
                                    }),
                                        (n.removeFrom = function (t, e) {
                                            var n = t.indexOf(e);
                                            -1 != n && t.splice(n, 1);
                                        }),
                                        (n.getParent = function (t, n) {
                                            for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, n))) return t;
                                        }),
                                        (n.getQueryElement = function (t) {
                                            return "string" == typeof t ? document.querySelector(t) : t;
                                        }),
                                        (n.handleEvent = function (t) {
                                            var e = "on" + t.type;
                                            this[e] && this[e](t);
                                        }),
                                        (n.filterFindElements = function (t, i) {
                                            t = n.makeArray(t);
                                            var r = [];
                                            return (
                                                t.forEach(function (t) {
                                                    if (t instanceof HTMLElement)
                                                        if (i) {
                                                            e(t, i) && r.push(t);
                                                            for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o]);
                                                        } else r.push(t);
                                                }),
                                                r
                                            );
                                        }),
                                        (n.debounceMethod = function (t, e, n) {
                                            n = n || 100;
                                            var i = t.prototype[e],
                                                r = e + "Timeout";
                                            t.prototype[e] = function () {
                                                var t = this[r];
                                                clearTimeout(t);
                                                var e = arguments,
                                                    o = this;
                                                this[r] = setTimeout(function () {
                                                    i.apply(o, e), delete o[r];
                                                }, n);
                                            };
                                        }),
                                        (n.docReady = function (t) {
                                            var e = document.readyState;
                                            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
                                        }),
                                        (n.toDashed = function (t) {
                                            return t
                                                .replace(/(.)([A-Z])/g, function (t, e, n) {
                                                    return e + "-" + n;
                                                })
                                                .toLowerCase();
                                        });
                                    var r = t.console;
                                    return (
                                        (n.htmlInit = function (e, i) {
                                            n.docReady(function () {
                                                var o = n.toDashed(i),
                                                    a = "data-" + o,
                                                    s = document.querySelectorAll("[" + a + "]"),
                                                    l = document.querySelectorAll(".js-" + o),
                                                    c = n.makeArray(s).concat(n.makeArray(l)),
                                                    u = a + "-options",
                                                    h = t.jQuery;
                                                c.forEach(function (t) {
                                                    var n,
                                                        o = t.getAttribute(a) || t.getAttribute(u);
                                                    try {
                                                        n = o && JSON.parse(o);
                                                    } catch (e) {
                                                        return void (r && r.error("Error parsing " + a + " on " + t.className + ": " + e));
                                                    }
                                                    var s = new e(t, n);
                                                    h && h.data(t, i, s);
                                                });
                                            });
                                        }),
                                        n
                                    );
                                })(o, t);
                            }.apply(e, i)) || (t.exports = r);
                })(window);
            },
            6131: function (t, e, n) {
                var i, r;
                window,
                    void 0 ===
                        (r =
                            "function" ==
                            typeof (i = function () {
                                "use strict";
                                function t(t) {
                                    var e = parseFloat(t);
                                    return -1 == t.indexOf("%") && !isNaN(e) && e;
                                }
                                var e =
                                        "undefined" == typeof console
                                            ? function () {}
                                            : function (t) {
                                                  console.error(t);
                                              },
                                    n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                                    i = n.length;
                                function r(t) {
                                    var n = getComputedStyle(t);
                                    return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n;
                                }
                                var o,
                                    a = !1;
                                function s(e) {
                                    if (
                                        ((function () {
                                            if (!a) {
                                                a = !0;
                                                var e = document.createElement("div");
                                                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                                                var n = document.body || document.documentElement;
                                                n.appendChild(e);
                                                var i = r(e);
                                                (o = 200 == Math.round(t(i.width))), (s.isBoxSizeOuter = o), n.removeChild(e);
                                            }
                                        })(),
                                        "string" == typeof e && (e = document.querySelector(e)),
                                        e && "object" == typeof e && e.nodeType)
                                    ) {
                                        var l = r(e);
                                        if ("none" == l.display)
                                            return (function () {
                                                for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < i; e++) t[n[e]] = 0;
                                                return t;
                                            })();
                                        var c = {};
                                        (c.width = e.offsetWidth), (c.height = e.offsetHeight);
                                        for (var u = (c.isBorderBox = "border-box" == l.boxSizing), h = 0; h < i; h++) {
                                            var d = n[h],
                                                f = l[d],
                                                p = parseFloat(f);
                                            c[d] = isNaN(p) ? 0 : p;
                                        }
                                        var y = c.paddingLeft + c.paddingRight,
                                            v = c.paddingTop + c.paddingBottom,
                                            m = c.marginLeft + c.marginRight,
                                            g = c.marginTop + c.marginBottom,
                                            b = c.borderLeftWidth + c.borderRightWidth,
                                            w = c.borderTopWidth + c.borderBottomWidth,
                                            k = u && o,
                                            E = t(l.width);
                                        !1 !== E && (c.width = E + (k ? 0 : y + b));
                                        var S = t(l.height);
                                        return !1 !== S && (c.height = S + (k ? 0 : v + w)), (c.innerWidth = c.width - (y + b)), (c.innerHeight = c.height - (v + w)), (c.outerWidth = c.width + m), (c.outerHeight = c.height + g), c;
                                    }
                                }
                                return s;
                            })
                                ? i.call(e, n, e, t)
                                : i) || (t.exports = r);
            },
            3876: function (t, e, n) {
                !(function (e) {
                    "use strict";
                    var i = n(7529),
                        r = function (t, e, n) {
                            var r,
                                o,
                                a,
                                s,
                                l = {},
                                c = 0,
                                u = 0,
                                h = { sensitivity: 7, interval: 100, timeout: 0 };
                            function d(e, n, i) {
                                var l = function (t) {
                                    (r = t.clientX), (o = t.clientY);
                                };
                                return (
                                    u && (u = clearTimeout(u)),
                                    i
                                        ? ((a = e.clientX),
                                          (s = e.clientY),
                                          t.addEventListener("mousemove", l, !1),
                                          1 !== c &&
                                              (u = setTimeout(function () {
                                                  f(t, n, e);
                                              }, h.interval)))
                                        : (t.removeEventListener("mousemove", l, !1),
                                          1 === c &&
                                              (u = setTimeout(function () {
                                                  !(function (t, e, n) {
                                                      u && (u = clearTimeout(u)), (c = 0), e.call(t, n);
                                                  })(t, n, e);
                                              }, h.timeout))),
                                    this
                                );
                            }
                            function f(t, e, n) {
                                if ((u && (u = clearTimeout(u)), Math.abs(a - r) + Math.abs(s - o) < h.sensitivity)) return (c = 1), e.call(t, n);
                                (a = r),
                                    (s = o),
                                    (u = setTimeout(function () {
                                        f(t, e, n);
                                    }, h.interval));
                            }
                            function p(t) {
                                d(t, e, !0);
                            }
                            function y(t) {
                                d(t, n);
                            }
                            return (
                                (l.options = function (t) {
                                    h = i({}, h, t);
                                }),
                                (l.remove = function () {
                                    t && (t.removeEventListener("mouseover", p, !1), t.removeEventListener("mouseout", y, !1));
                                }),
                                t && (t.addEventListener("mouseover", p, !1), t.addEventListener("mouseout", y, !1)),
                                l
                            );
                        };
                    (e.hoverintent = r), t.exports && (t.exports = r);
                })(this);
            },
            7564: function (t, e, n) {
                !(function (e, i) {
                    t.exports ? (t.exports = i(e, n(7521))) : (e.imagesLoaded = i(e, e.EvEmitter));
                })("undefined" != typeof window ? window : this, function (t, e) {
                    let n = t.jQuery,
                        i = t.console;
                    function r(t, e, o) {
                        if (!(this instanceof r)) return new r(t, e, o);
                        let a = t;
                        var s;
                        "string" == typeof t && (a = document.querySelectorAll(t)),
                            a
                                ? ((this.elements = ((s = a), Array.isArray(s) ? s : "object" == typeof s && "number" == typeof s.length ? [...s] : [s])),
                                  (this.options = {}),
                                  "function" == typeof e ? (o = e) : Object.assign(this.options, e),
                                  o && this.on("always", o),
                                  this.getImages(),
                                  n && (this.jqDeferred = new n.Deferred()),
                                  setTimeout(this.check.bind(this)))
                                : i.error(`Bad element for imagesLoaded ${a || t}`);
                    }
                    (r.prototype = Object.create(e.prototype)),
                        (r.prototype.getImages = function () {
                            (this.images = []), this.elements.forEach(this.addElementImages, this);
                        });
                    const o = [1, 9, 11];
                    r.prototype.addElementImages = function (t) {
                        "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                        let { nodeType: e } = t;
                        if (!e || !o.includes(e)) return;
                        let n = t.querySelectorAll("img");
                        for (let t of n) this.addImage(t);
                        if ("string" == typeof this.options.background) {
                            let e = t.querySelectorAll(this.options.background);
                            for (let t of e) this.addElementBackgroundImages(t);
                        }
                    };
                    const a = /url\((['"])?(.*?)\1\)/gi;
                    function s(t) {
                        this.img = t;
                    }
                    function l(t, e) {
                        (this.url = t), (this.element = e), (this.img = new Image());
                    }
                    return (
                        (r.prototype.addElementBackgroundImages = function (t) {
                            let e = getComputedStyle(t);
                            if (!e) return;
                            let n = a.exec(e.backgroundImage);
                            for (; null !== n; ) {
                                let i = n && n[2];
                                i && this.addBackground(i, t), (n = a.exec(e.backgroundImage));
                            }
                        }),
                        (r.prototype.addImage = function (t) {
                            let e = new s(t);
                            this.images.push(e);
                        }),
                        (r.prototype.addBackground = function (t, e) {
                            let n = new l(t, e);
                            this.images.push(n);
                        }),
                        (r.prototype.check = function () {
                            if (((this.progressedCount = 0), (this.hasAnyBroken = !1), !this.images.length)) return void this.complete();
                            let t = (t, e, n) => {
                                setTimeout(() => {
                                    this.progress(t, e, n);
                                });
                            };
                            this.images.forEach(function (e) {
                                e.once("progress", t), e.check();
                            });
                        }),
                        (r.prototype.progress = function (t, e, n) {
                            this.progressedCount++,
                                (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                                this.emitEvent("progress", [this, t, e]),
                                this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                                this.progressedCount === this.images.length && this.complete(),
                                this.options.debug && i && i.log(`progress: ${n}`, t, e);
                        }),
                        (r.prototype.complete = function () {
                            let t = this.hasAnyBroken ? "fail" : "done";
                            if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                                let t = this.hasAnyBroken ? "reject" : "resolve";
                                this.jqDeferred[t](this);
                            }
                        }),
                        (s.prototype = Object.create(e.prototype)),
                        (s.prototype.check = function () {
                            this.getIsImageComplete()
                                ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                                : ((this.proxyImage = new Image()),
                                  this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin),
                                  this.proxyImage.addEventListener("load", this),
                                  this.proxyImage.addEventListener("error", this),
                                  this.img.addEventListener("load", this),
                                  this.img.addEventListener("error", this),
                                  (this.proxyImage.src = this.img.currentSrc || this.img.src));
                        }),
                        (s.prototype.getIsImageComplete = function () {
                            return this.img.complete && this.img.naturalWidth;
                        }),
                        (s.prototype.confirm = function (t, e) {
                            this.isLoaded = t;
                            let { parentNode: n } = this.img,
                                i = "PICTURE" === n.nodeName ? n : this.img;
                            this.emitEvent("progress", [this, i, e]);
                        }),
                        (s.prototype.handleEvent = function (t) {
                            let e = "on" + t.type;
                            this[e] && this[e](t);
                        }),
                        (s.prototype.onload = function () {
                            this.confirm(!0, "onload"), this.unbindEvents();
                        }),
                        (s.prototype.onerror = function () {
                            this.confirm(!1, "onerror"), this.unbindEvents();
                        }),
                        (s.prototype.unbindEvents = function () {
                            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                        }),
                        (l.prototype = Object.create(s.prototype)),
                        (l.prototype.check = function () {
                            this.img.addEventListener("load", this),
                                this.img.addEventListener("error", this),
                                (this.img.src = this.url),
                                this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
                        }),
                        (l.prototype.unbindEvents = function () {
                            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                        }),
                        (l.prototype.confirm = function (t, e) {
                            (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
                        }),
                        (r.makeJQueryPlugin = function (e) {
                            (e = e || t.jQuery) &&
                                ((n = e),
                                (n.fn.imagesLoaded = function (t, e) {
                                    return new r(this, t, e).jqDeferred.promise(n(this));
                                }));
                        }),
                        r.makeJQueryPlugin(),
                        r
                    );
                });
            },
            7521: function (t) {
                var e, n;
                (e = "undefined" != typeof window ? window : this),
                    (n = function () {
                        function t() {}
                        let e = t.prototype;
                        return (
                            (e.on = function (t, e) {
                                if (!t || !e) return this;
                                let n = (this._events = this._events || {}),
                                    i = (n[t] = n[t] || []);
                                return i.includes(e) || i.push(e), this;
                            }),
                            (e.once = function (t, e) {
                                if (!t || !e) return this;
                                this.on(t, e);
                                let n = (this._onceEvents = this._onceEvents || {});
                                return ((n[t] = n[t] || {})[e] = !0), this;
                            }),
                            (e.off = function (t, e) {
                                let n = this._events && this._events[t];
                                if (!n || !n.length) return this;
                                let i = n.indexOf(e);
                                return -1 != i && n.splice(i, 1), this;
                            }),
                            (e.emitEvent = function (t, e) {
                                let n = this._events && this._events[t];
                                if (!n || !n.length) return this;
                                (n = n.slice(0)), (e = e || []);
                                let i = this._onceEvents && this._onceEvents[t];
                                for (let r of n) i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
                                return this;
                            }),
                            (e.allOff = function () {
                                return delete this._events, delete this._onceEvents, this;
                            }),
                            t
                        );
                    }),
                    t.exports ? (t.exports = n()) : (e.EvEmitter = n());
            },
            8751: function (t, e, n) {
                var i, r, o;
                window,
                    (r = [n(1794), n(6131)]),
                    void 0 ===
                        (o =
                            "function" ==
                            typeof (i = function (t, e) {
                                "use strict";
                                var n = t.create("masonry");
                                n.compatOptions.fitWidth = "isFitWidth";
                                var i = n.prototype;
                                return (
                                    (i._resetLayout = function () {
                                        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                                        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                                        (this.maxY = 0), (this.horizontalColIndex = 0);
                                    }),
                                    (i.measureColumns = function () {
                                        if ((this.getContainerWidth(), !this.columnWidth)) {
                                            var t = this.items[0],
                                                n = t && t.element;
                                            this.columnWidth = (n && e(n).outerWidth) || this.containerWidth;
                                        }
                                        var i = (this.columnWidth += this.gutter),
                                            r = this.containerWidth + this.gutter,
                                            o = r / i,
                                            a = i - (r % i);
                                        (o = Math[a && a < 1 ? "round" : "floor"](o)), (this.cols = Math.max(o, 1));
                                    }),
                                    (i.getContainerWidth = function () {
                                        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                                            n = e(t);
                                        this.containerWidth = n && n.innerWidth;
                                    }),
                                    (i._getItemLayoutPosition = function (t) {
                                        t.getSize();
                                        var e = t.size.outerWidth % this.columnWidth,
                                            n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
                                        n = Math.min(n, this.cols);
                                        for (
                                            var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t),
                                                r = { x: this.columnWidth * i.col, y: i.y },
                                                o = i.y + t.size.outerHeight,
                                                a = n + i.col,
                                                s = i.col;
                                            s < a;
                                            s++
                                        )
                                            this.colYs[s] = o;
                                        return r;
                                    }),
                                    (i._getTopColPosition = function (t) {
                                        var e = this._getTopColGroup(t),
                                            n = Math.min.apply(Math, e);
                                        return { col: e.indexOf(n), y: n };
                                    }),
                                    (i._getTopColGroup = function (t) {
                                        if (t < 2) return this.colYs;
                                        for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t);
                                        return e;
                                    }),
                                    (i._getColGroupY = function (t, e) {
                                        if (e < 2) return this.colYs[t];
                                        var n = this.colYs.slice(t, t + e);
                                        return Math.max.apply(Math, n);
                                    }),
                                    (i._getHorizontalColPosition = function (t, e) {
                                        var n = this.horizontalColIndex % this.cols;
                                        n = t > 1 && n + t > this.cols ? 0 : n;
                                        var i = e.size.outerWidth && e.size.outerHeight;
                                        return (this.horizontalColIndex = i ? n + t : this.horizontalColIndex), { col: n, y: this._getColGroupY(n, t) };
                                    }),
                                    (i._manageStamp = function (t) {
                                        var n = e(t),
                                            i = this._getElementOffset(t),
                                            r = this._getOption("originLeft") ? i.left : i.right,
                                            o = r + n.outerWidth,
                                            a = Math.floor(r / this.columnWidth);
                                        a = Math.max(0, a);
                                        var s = Math.floor(o / this.columnWidth);
                                        (s -= o % this.columnWidth ? 0 : 1), (s = Math.min(this.cols - 1, s));
                                        for (var l = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, c = a; c <= s; c++) this.colYs[c] = Math.max(l, this.colYs[c]);
                                    }),
                                    (i._getContainerSize = function () {
                                        this.maxY = Math.max.apply(Math, this.colYs);
                                        var t = { height: this.maxY };
                                        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
                                    }),
                                    (i._getContainerFitWidth = function () {
                                        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                                        return (this.cols - t) * this.columnWidth - this.gutter;
                                    }),
                                    (i.needsResizeLayout = function () {
                                        var t = this.containerWidth;
                                        return this.getContainerWidth(), t != this.containerWidth;
                                    }),
                                    n
                                );
                            })
                                ? i.apply(e, r)
                                : i) || (t.exports = o);
            },
            652: function (t, e, n) {
                var i, r, o;
                window,
                    (r = [n(7158), n(6131)]),
                    void 0 ===
                        (o =
                            "function" ==
                            typeof (i = function (t, e) {
                                "use strict";
                                var n = document.documentElement.style,
                                    i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
                                    r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
                                    o = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[i],
                                    a = { transform: r, transition: i, transitionDuration: i + "Duration", transitionProperty: i + "Property", transitionDelay: i + "Delay" };
                                function s(t, e) {
                                    t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
                                }
                                var l = (s.prototype = Object.create(t.prototype));
                                (l.constructor = s),
                                    (l._create = function () {
                                        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
                                    }),
                                    (l.handleEvent = function (t) {
                                        var e = "on" + t.type;
                                        this[e] && this[e](t);
                                    }),
                                    (l.getSize = function () {
                                        this.size = e(this.element);
                                    }),
                                    (l.css = function (t) {
                                        var e = this.element.style;
                                        for (var n in t) e[a[n] || n] = t[n];
                                    }),
                                    (l.getPosition = function () {
                                        var t = getComputedStyle(this.element),
                                            e = this.layout._getOption("originLeft"),
                                            n = this.layout._getOption("originTop"),
                                            i = t[e ? "left" : "right"],
                                            r = t[n ? "top" : "bottom"],
                                            o = parseFloat(i),
                                            a = parseFloat(r),
                                            s = this.layout.size;
                                        -1 != i.indexOf("%") && (o = (o / 100) * s.width),
                                            -1 != r.indexOf("%") && (a = (a / 100) * s.height),
                                            (o = isNaN(o) ? 0 : o),
                                            (a = isNaN(a) ? 0 : a),
                                            (o -= e ? s.paddingLeft : s.paddingRight),
                                            (a -= n ? s.paddingTop : s.paddingBottom),
                                            (this.position.x = o),
                                            (this.position.y = a);
                                    }),
                                    (l.layoutPosition = function () {
                                        var t = this.layout.size,
                                            e = {},
                                            n = this.layout._getOption("originLeft"),
                                            i = this.layout._getOption("originTop"),
                                            r = n ? "paddingLeft" : "paddingRight",
                                            o = n ? "left" : "right",
                                            a = n ? "right" : "left",
                                            s = this.position.x + t[r];
                                        (e[o] = this.getXValue(s)), (e[a] = "");
                                        var l = i ? "paddingTop" : "paddingBottom",
                                            c = i ? "top" : "bottom",
                                            u = i ? "bottom" : "top",
                                            h = this.position.y + t[l];
                                        (e[c] = this.getYValue(h)), (e[u] = ""), this.css(e), this.emitEvent("layout", [this]);
                                    }),
                                    (l.getXValue = function (t) {
                                        var e = this.layout._getOption("horizontal");
                                        return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
                                    }),
                                    (l.getYValue = function (t) {
                                        var e = this.layout._getOption("horizontal");
                                        return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
                                    }),
                                    (l._transitionTo = function (t, e) {
                                        this.getPosition();
                                        var n = this.position.x,
                                            i = this.position.y,
                                            r = t == this.position.x && e == this.position.y;
                                        if ((this.setPosition(t, e), !r || this.isTransitioning)) {
                                            var o = t - n,
                                                a = e - i,
                                                s = {};
                                            (s.transform = this.getTranslate(o, a)), this.transition({ to: s, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
                                        } else this.layoutPosition();
                                    }),
                                    (l.getTranslate = function (t, e) {
                                        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
                                    }),
                                    (l.goTo = function (t, e) {
                                        this.setPosition(t, e), this.layoutPosition();
                                    }),
                                    (l.moveTo = l._transitionTo),
                                    (l.setPosition = function (t, e) {
                                        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
                                    }),
                                    (l._nonTransition = function (t) {
                                        for (var e in (this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)) t.onTransitionEnd[e].call(this);
                                    }),
                                    (l.transition = function (t) {
                                        if (parseFloat(this.layout.options.transitionDuration)) {
                                            var e = this._transn;
                                            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                                            for (n in t.to) (e.ingProperties[n] = !0), t.isCleaning && (e.clean[n] = !0);
                                            t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                                        } else this._nonTransition(t);
                                    });
                                var c =
                                    "opacity," +
                                    r.replace(/([A-Z])/g, function (t) {
                                        return "-" + t.toLowerCase();
                                    });
                                (l.enableTransition = function () {
                                    if (!this.isTransitioning) {
                                        var t = this.layout.options.transitionDuration;
                                        (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: c, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(o, this, !1);
                                    }
                                }),
                                    (l.onwebkitTransitionEnd = function (t) {
                                        this.ontransitionend(t);
                                    }),
                                    (l.onotransitionend = function (t) {
                                        this.ontransitionend(t);
                                    });
                                var u = { "-webkit-transform": "transform" };
                                (l.ontransitionend = function (t) {
                                    if (t.target === this.element) {
                                        var e = this._transn,
                                            n = u[t.propertyName] || t.propertyName;
                                        delete e.ingProperties[n],
                                            (function (t) {
                                                for (var e in t) return !1;
                                                return !0;
                                            })(e.ingProperties) && this.disableTransition(),
                                            n in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
                                            n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]),
                                            this.emitEvent("transitionEnd", [this]);
                                    }
                                }),
                                    (l.disableTransition = function () {
                                        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), (this.isTransitioning = !1);
                                    }),
                                    (l._removeStyles = function (t) {
                                        var e = {};
                                        for (var n in t) e[n] = "";
                                        this.css(e);
                                    });
                                var h = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
                                return (
                                    (l.removeTransitionStyles = function () {
                                        this.css(h);
                                    }),
                                    (l.stagger = function (t) {
                                        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
                                    }),
                                    (l.removeElem = function () {
                                        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
                                    }),
                                    (l.remove = function () {
                                        i && parseFloat(this.layout.options.transitionDuration)
                                            ? (this.once("transitionEnd", function () {
                                                  this.removeElem();
                                              }),
                                              this.hide())
                                            : this.removeElem();
                                    }),
                                    (l.reveal = function () {
                                        delete this.isHidden, this.css({ display: "" });
                                        var t = this.layout.options,
                                            e = {};
                                        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
                                    }),
                                    (l.onRevealTransitionEnd = function () {
                                        this.isHidden || this.emitEvent("reveal");
                                    }),
                                    (l.getHideRevealTransitionEndProperty = function (t) {
                                        var e = this.layout.options[t];
                                        if (e.opacity) return "opacity";
                                        for (var n in e) return n;
                                    }),
                                    (l.hide = function () {
                                        (this.isHidden = !0), this.css({ display: "" });
                                        var t = this.layout.options,
                                            e = {};
                                        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
                                    }),
                                    (l.onHideTransitionEnd = function () {
                                        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
                                    }),
                                    (l.destroy = function () {
                                        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
                                    }),
                                    s
                                );
                            })
                                ? i.apply(e, r)
                                : i) || (t.exports = o);
            },
            1794: function (t, e, n) {
                var i, r;
                !(function (o, a) {
                    "use strict";
                    (i = [n(7158), n(6131), n(9047), n(652)]),
                        void 0 ===
                            (r = function (t, e, n, i) {
                                return (function (t, e, n, i, r) {
                                    var o = t.console,
                                        a = t.jQuery,
                                        s = function () {},
                                        l = 0,
                                        c = {};
                                    function u(t, e) {
                                        var n = i.getQueryElement(t);
                                        if (n) {
                                            (this.element = n), a && (this.$element = a(this.element)), (this.options = i.extend({}, this.constructor.defaults)), this.option(e);
                                            var r = ++l;
                                            (this.element.outlayerGUID = r), (c[r] = this), this._create(), this._getOption("initLayout") && this.layout();
                                        } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (n || t));
                                    }
                                    (u.namespace = "outlayer"),
                                        (u.Item = r),
                                        (u.defaults = {
                                            containerStyle: { position: "relative" },
                                            initLayout: !0,
                                            originLeft: !0,
                                            originTop: !0,
                                            resize: !0,
                                            resizeContainer: !0,
                                            transitionDuration: "0.4s",
                                            hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                                            visibleStyle: { opacity: 1, transform: "scale(1)" },
                                        });
                                    var h = u.prototype;
                                    function d(t) {
                                        function e() {
                                            t.apply(this, arguments);
                                        }
                                        return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
                                    }
                                    i.extend(h, e.prototype),
                                        (h.option = function (t) {
                                            i.extend(this.options, t);
                                        }),
                                        (h._getOption = function (t) {
                                            var e = this.constructor.compatOptions[t];
                                            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
                                        }),
                                        (u.compatOptions = {
                                            initLayout: "isInitLayout",
                                            horizontal: "isHorizontal",
                                            layoutInstant: "isLayoutInstant",
                                            originLeft: "isOriginLeft",
                                            originTop: "isOriginTop",
                                            resize: "isResizeBound",
                                            resizeContainer: "isResizingContainer",
                                        }),
                                        (h._create = function () {
                                            this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
                                        }),
                                        (h.reloadItems = function () {
                                            this.items = this._itemize(this.element.children);
                                        }),
                                        (h._itemize = function (t) {
                                            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                                                var o = new n(e[r], this);
                                                i.push(o);
                                            }
                                            return i;
                                        }),
                                        (h._filterFindItemElements = function (t) {
                                            return i.filterFindElements(t, this.options.itemSelector);
                                        }),
                                        (h.getItemElements = function () {
                                            return this.items.map(function (t) {
                                                return t.element;
                                            });
                                        }),
                                        (h.layout = function () {
                                            this._resetLayout(), this._manageStamps();
                                            var t = this._getOption("layoutInstant"),
                                                e = void 0 !== t ? t : !this._isLayoutInited;
                                            this.layoutItems(this.items, e), (this._isLayoutInited = !0);
                                        }),
                                        (h._init = h.layout),
                                        (h._resetLayout = function () {
                                            this.getSize();
                                        }),
                                        (h.getSize = function () {
                                            this.size = n(this.element);
                                        }),
                                        (h._getMeasurement = function (t, e) {
                                            var i,
                                                r = this.options[t];
                                            r ? ("string" == typeof r ? (i = this.element.querySelector(r)) : r instanceof HTMLElement && (i = r), (this[t] = i ? n(i)[e] : r)) : (this[t] = 0);
                                        }),
                                        (h.layoutItems = function (t, e) {
                                            (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
                                        }),
                                        (h._getItemsForLayout = function (t) {
                                            return t.filter(function (t) {
                                                return !t.isIgnored;
                                            });
                                        }),
                                        (h._layoutItems = function (t, e) {
                                            if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                                                var n = [];
                                                t.forEach(function (t) {
                                                    var i = this._getItemLayoutPosition(t);
                                                    (i.item = t), (i.isInstant = e || t.isLayoutInstant), n.push(i);
                                                }, this),
                                                    this._processLayoutQueue(n);
                                            }
                                        }),
                                        (h._getItemLayoutPosition = function () {
                                            return { x: 0, y: 0 };
                                        }),
                                        (h._processLayoutQueue = function (t) {
                                            this.updateStagger(),
                                                t.forEach(function (t, e) {
                                                    this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                                                }, this);
                                        }),
                                        (h.updateStagger = function () {
                                            var t = this.options.stagger;
                                            if (null != t)
                                                return (
                                                    (this.stagger = (function (t) {
                                                        if ("number" == typeof t) return t;
                                                        var e = t.match(/(^\d*\.?\d*)(\w*)/),
                                                            n = e && e[1],
                                                            i = e && e[2];
                                                        return n.length ? (n = parseFloat(n)) * (f[i] || 1) : 0;
                                                    })(t)),
                                                    this.stagger
                                                );
                                            this.stagger = 0;
                                        }),
                                        (h._positionItem = function (t, e, n, i, r) {
                                            i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n));
                                        }),
                                        (h._postLayout = function () {
                                            this.resizeContainer();
                                        }),
                                        (h.resizeContainer = function () {
                                            if (this._getOption("resizeContainer")) {
                                                var t = this._getContainerSize();
                                                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                                            }
                                        }),
                                        (h._getContainerSize = s),
                                        (h._setContainerMeasure = function (t, e) {
                                            if (void 0 !== t) {
                                                var n = this.size;
                                                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth),
                                                    (t = Math.max(t, 0)),
                                                    (this.element.style[e ? "width" : "height"] = t + "px");
                                            }
                                        }),
                                        (h._emitCompleteOnItems = function (t, e) {
                                            var n = this;
                                            function i() {
                                                n.dispatchEvent(t + "Complete", null, [e]);
                                            }
                                            var r = e.length;
                                            if (e && r) {
                                                var o = 0;
                                                e.forEach(function (e) {
                                                    e.once(t, a);
                                                });
                                            } else i();
                                            function a() {
                                                ++o == r && i();
                                            }
                                        }),
                                        (h.dispatchEvent = function (t, e, n) {
                                            var i = e ? [e].concat(n) : n;
                                            if ((this.emitEvent(t, i), a))
                                                if (((this.$element = this.$element || a(this.element)), e)) {
                                                    var r = a.Event(e);
                                                    (r.type = t), this.$element.trigger(r, n);
                                                } else this.$element.trigger(t, n);
                                        }),
                                        (h.ignore = function (t) {
                                            var e = this.getItem(t);
                                            e && (e.isIgnored = !0);
                                        }),
                                        (h.unignore = function (t) {
                                            var e = this.getItem(t);
                                            e && delete e.isIgnored;
                                        }),
                                        (h.stamp = function (t) {
                                            (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
                                        }),
                                        (h.unstamp = function (t) {
                                            (t = this._find(t)) &&
                                                t.forEach(function (t) {
                                                    i.removeFrom(this.stamps, t), this.unignore(t);
                                                }, this);
                                        }),
                                        (h._find = function (t) {
                                            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), i.makeArray(t);
                                        }),
                                        (h._manageStamps = function () {
                                            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
                                        }),
                                        (h._getBoundingRect = function () {
                                            var t = this.element.getBoundingClientRect(),
                                                e = this.size;
                                            this._boundingRect = {
                                                left: t.left + e.paddingLeft + e.borderLeftWidth,
                                                top: t.top + e.paddingTop + e.borderTopWidth,
                                                right: t.right - (e.paddingRight + e.borderRightWidth),
                                                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                                            };
                                        }),
                                        (h._manageStamp = s),
                                        (h._getElementOffset = function (t) {
                                            var e = t.getBoundingClientRect(),
                                                i = this._boundingRect,
                                                r = n(t);
                                            return { left: e.left - i.left - r.marginLeft, top: e.top - i.top - r.marginTop, right: i.right - e.right - r.marginRight, bottom: i.bottom - e.bottom - r.marginBottom };
                                        }),
                                        (h.handleEvent = i.handleEvent),
                                        (h.bindResize = function () {
                                            t.addEventListener("resize", this), (this.isResizeBound = !0);
                                        }),
                                        (h.unbindResize = function () {
                                            t.removeEventListener("resize", this), (this.isResizeBound = !1);
                                        }),
                                        (h.onresize = function () {
                                            this.resize();
                                        }),
                                        i.debounceMethod(u, "onresize", 100),
                                        (h.resize = function () {
                                            this.isResizeBound && this.needsResizeLayout() && this.layout();
                                        }),
                                        (h.needsResizeLayout = function () {
                                            var t = n(this.element);
                                            return this.size && t && t.innerWidth !== this.size.innerWidth;
                                        }),
                                        (h.addItems = function (t) {
                                            var e = this._itemize(t);
                                            return e.length && (this.items = this.items.concat(e)), e;
                                        }),
                                        (h.appended = function (t) {
                                            var e = this.addItems(t);
                                            e.length && (this.layoutItems(e, !0), this.reveal(e));
                                        }),
                                        (h.prepended = function (t) {
                                            var e = this._itemize(t);
                                            if (e.length) {
                                                var n = this.items.slice(0);
                                                (this.items = e.concat(n)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n);
                                            }
                                        }),
                                        (h.reveal = function (t) {
                                            if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                                                var e = this.updateStagger();
                                                t.forEach(function (t, n) {
                                                    t.stagger(n * e), t.reveal();
                                                });
                                            }
                                        }),
                                        (h.hide = function (t) {
                                            if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                                                var e = this.updateStagger();
                                                t.forEach(function (t, n) {
                                                    t.stagger(n * e), t.hide();
                                                });
                                            }
                                        }),
                                        (h.revealItemElements = function (t) {
                                            var e = this.getItems(t);
                                            this.reveal(e);
                                        }),
                                        (h.hideItemElements = function (t) {
                                            var e = this.getItems(t);
                                            this.hide(e);
                                        }),
                                        (h.getItem = function (t) {
                                            for (var e = 0; e < this.items.length; e++) {
                                                var n = this.items[e];
                                                if (n.element == t) return n;
                                            }
                                        }),
                                        (h.getItems = function (t) {
                                            t = i.makeArray(t);
                                            var e = [];
                                            return (
                                                t.forEach(function (t) {
                                                    var n = this.getItem(t);
                                                    n && e.push(n);
                                                }, this),
                                                e
                                            );
                                        }),
                                        (h.remove = function (t) {
                                            var e = this.getItems(t);
                                            this._emitCompleteOnItems("remove", e),
                                                e &&
                                                    e.length &&
                                                    e.forEach(function (t) {
                                                        t.remove(), i.removeFrom(this.items, t);
                                                    }, this);
                                        }),
                                        (h.destroy = function () {
                                            var t = this.element.style;
                                            (t.height = ""),
                                                (t.position = ""),
                                                (t.width = ""),
                                                this.items.forEach(function (t) {
                                                    t.destroy();
                                                }),
                                                this.unbindResize();
                                            var e = this.element.outlayerGUID;
                                            delete c[e], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace);
                                        }),
                                        (u.data = function (t) {
                                            var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
                                            return e && c[e];
                                        }),
                                        (u.create = function (t, e) {
                                            var n = d(u);
                                            return (
                                                (n.defaults = i.extend({}, u.defaults)),
                                                i.extend(n.defaults, e),
                                                (n.compatOptions = i.extend({}, u.compatOptions)),
                                                (n.namespace = t),
                                                (n.data = u.data),
                                                (n.Item = d(r)),
                                                i.htmlInit(n, t),
                                                a && a.bridget && a.bridget(t, n),
                                                n
                                            );
                                        });
                                    var f = { ms: 1, s: 1e3 };
                                    return (u.Item = r), u;
                                })(o, t, e, n, i);
                            }.apply(e, i)) || (t.exports = r);
                })(window);
            },
            5666: function (t) {
                var e = (function (t) {
                    "use strict";
                    var e,
                        n = Object.prototype,
                        i = n.hasOwnProperty,
                        r = "function" == typeof Symbol ? Symbol : {},
                        o = r.iterator || "@@iterator",
                        a = r.asyncIterator || "@@asyncIterator",
                        s = r.toStringTag || "@@toStringTag";
                    function l(t, e, n) {
                        return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
                    }
                    try {
                        l({}, "");
                    } catch (t) {
                        l = function (t, e, n) {
                            return (t[e] = n);
                        };
                    }
                    function c(t, e, n, i) {
                        var r = e && e.prototype instanceof v ? e : v,
                            o = Object.create(r.prototype),
                            a = new x(i || []);
                        return (
                            (o._invoke = (function (t, e, n) {
                                var i = h;
                                return function (r, o) {
                                    if (i === f) throw new Error("Generator is already running");
                                    if (i === p) {
                                        if ("throw" === r) throw o;
                                        return C();
                                    }
                                    for (n.method = r, n.arg = o; ; ) {
                                        var a = n.delegate;
                                        if (a) {
                                            var s = A(a, n);
                                            if (s) {
                                                if (s === y) continue;
                                                return s;
                                            }
                                        }
                                        if ("next" === n.method) n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if (i === h) throw ((i = p), n.arg);
                                            n.dispatchException(n.arg);
                                        } else "return" === n.method && n.abrupt("return", n.arg);
                                        i = f;
                                        var l = u(t, e, n);
                                        if ("normal" === l.type) {
                                            if (((i = n.done ? p : d), l.arg === y)) continue;
                                            return { value: l.arg, done: n.done };
                                        }
                                        "throw" === l.type && ((i = p), (n.method = "throw"), (n.arg = l.arg));
                                    }
                                };
                            })(t, n, a)),
                            o
                        );
                    }
                    function u(t, e, n) {
                        try {
                            return { type: "normal", arg: t.call(e, n) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    t.wrap = c;
                    var h = "suspendedStart",
                        d = "suspendedYield",
                        f = "executing",
                        p = "completed",
                        y = {};
                    function v() {}
                    function m() {}
                    function g() {}
                    var b = {};
                    b[o] = function () {
                        return this;
                    };
                    var w = Object.getPrototypeOf,
                        k = w && w(w(T([])));
                    k && k !== n && i.call(k, o) && (b = k);
                    var E = (g.prototype = v.prototype = Object.create(b));
                    function S(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            l(t, e, function (t) {
                                return this._invoke(e, t);
                            });
                        });
                    }
                    function L(t, e) {
                        function n(r, o, a, s) {
                            var l = u(t[r], t, o);
                            if ("throw" !== l.type) {
                                var c = l.arg,
                                    h = c.value;
                                return h && "object" == typeof h && i.call(h, "__await")
                                    ? e.resolve(h.__await).then(
                                          function (t) {
                                              n("next", t, a, s);
                                          },
                                          function (t) {
                                              n("throw", t, a, s);
                                          }
                                      )
                                    : e.resolve(h).then(
                                          function (t) {
                                              (c.value = t), a(c);
                                          },
                                          function (t) {
                                              return n("throw", t, a, s);
                                          }
                                      );
                            }
                            s(l.arg);
                        }
                        var r;
                        this._invoke = function (t, i) {
                            function o() {
                                return new e(function (e, r) {
                                    n(t, i, e, r);
                                });
                            }
                            return (r = r ? r.then(o, o) : o());
                        };
                    }
                    function A(t, n) {
                        var i = t.iterator[n.method];
                        if (i === e) {
                            if (((n.delegate = null), "throw" === n.method)) {
                                if (t.iterator.return && ((n.method = "return"), (n.arg = e), A(t, n), "throw" === n.method)) return y;
                                (n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
                            }
                            return y;
                        }
                        var r = u(i, t.iterator, n.arg);
                        if ("throw" === r.type) return (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), y;
                        var o = r.arg;
                        return o
                            ? o.done
                                ? ((n[t.resultName] = o.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), y)
                                : o
                            : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), y);
                    }
                    function P(t) {
                        var e = { tryLoc: t[0] };
                        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                    }
                    function R(t) {
                        var e = t.completion || {};
                        (e.type = "normal"), delete e.arg, (t.completion = e);
                    }
                    function x(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(P, this), this.reset(!0);
                    }
                    function T(t) {
                        if (t) {
                            var n = t[o];
                            if (n) return n.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var r = -1,
                                    a = function n() {
                                        for (; ++r < t.length; ) if (i.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                                        return (n.value = e), (n.done = !0), n;
                                    };
                                return (a.next = a);
                            }
                        }
                        return { next: C };
                    }
                    function C() {
                        return { value: e, done: !0 };
                    }
                    return (
                        (m.prototype = E.constructor = g),
                        (g.constructor = m),
                        (m.displayName = l(g, s, "GeneratorFunction")),
                        (t.isGeneratorFunction = function (t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
                        }),
                        (t.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, s, "GeneratorFunction")), (t.prototype = Object.create(E)), t;
                        }),
                        (t.awrap = function (t) {
                            return { __await: t };
                        }),
                        S(L.prototype),
                        (L.prototype[a] = function () {
                            return this;
                        }),
                        (t.AsyncIterator = L),
                        (t.async = function (e, n, i, r, o) {
                            void 0 === o && (o = Promise);
                            var a = new L(c(e, n, i, r), o);
                            return t.isGeneratorFunction(n)
                                ? a
                                : a.next().then(function (t) {
                                      return t.done ? t.value : a.next();
                                  });
                        }),
                        S(E),
                        l(E, s, "Generator"),
                        (E[o] = function () {
                            return this;
                        }),
                        (E.toString = function () {
                            return "[object Generator]";
                        }),
                        (t.keys = function (t) {
                            var e = [];
                            for (var n in t) e.push(n);
                            return (
                                e.reverse(),
                                function n() {
                                    for (; e.length; ) {
                                        var i = e.pop();
                                        if (i in t) return (n.value = i), (n.done = !1), n;
                                    }
                                    return (n.done = !0), n;
                                }
                            );
                        }),
                        (t.values = T),
                        (x.prototype = {
                            constructor: x,
                            reset: function (t) {
                                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(R), !t))
                                    for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                            },
                            stop: function () {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function (t) {
                                if (this.done) throw t;
                                var n = this;
                                function r(i, r) {
                                    return (s.type = "throw"), (s.arg = t), (n.next = i), r && ((n.method = "next"), (n.arg = e)), !!r;
                                }
                                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                    var a = this.tryEntries[o],
                                        s = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var l = i.call(a, "catchLoc"),
                                            c = i.call(a, "finallyLoc");
                                        if (l && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                        } else if (l) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (t, e) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var r = this.tryEntries[n];
                                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                        var o = r;
                                        break;
                                    }
                                }
                                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                var a = o ? o.completion : {};
                                return (a.type = t), (a.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), y) : this.complete(a);
                            },
                            complete: function (t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return (
                                    "break" === t.type || "continue" === t.type
                                        ? (this.next = t.arg)
                                        : "return" === t.type
                                        ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                        : "normal" === t.type && e && (this.next = e),
                                    y
                                );
                            },
                            finish: function (t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), R(n), y;
                                }
                            },
                            catch: function (t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var i = n.completion;
                                        if ("throw" === i.type) {
                                            var r = i.arg;
                                            R(n);
                                        }
                                        return r;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function (t, n, i) {
                                return (this.delegate = { iterator: T(t), resultName: n, nextLoc: i }), "next" === this.method && (this.arg = e), y;
                            },
                        }),
                        t
                    );
                })(t.exports);
                try {
                    regeneratorRuntime = e;
                } catch (t) {
                    Function("r", "regeneratorRuntime = r")(e);
                }
            },
            7529: function (t) {
                t.exports = function () {
                    for (var t = {}, n = 0; n < arguments.length; n++) {
                        var i = arguments[n];
                        for (var r in i) e.call(i, r) && (t[r] = i[r]);
                    }
                    return t;
                };
                var e = Object.prototype.hasOwnProperty;
            },
        },
        o = {};
    function a(t) {
        var e = o[t];
        if (void 0 !== e) return e.exports;
        var n = (o[t] = { exports: {} });
        return r[t].call(n.exports, n, n.exports, a), n.exports;
    }
    (a.m = r),
        (a.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return a.d(e, { a: e }), e;
        }),
        (e = Object.getPrototypeOf
            ? function (t) {
                  return Object.getPrototypeOf(t);
              }
            : function (t) {
                  return t.__proto__;
              }),
        (a.t = function (n, i) {
            if ((1 & i && (n = this(n)), 8 & i)) return n;
            if ("object" == typeof n && n) {
                if (4 & i && n.__esModule) return n;
                if (16 & i && "function" == typeof n.then) return n;
            }
            var r = Object.create(null);
            a.r(r);
            var o = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var s = 2 & i && n; "object" == typeof s && !~t.indexOf(s); s = e(s))
                Object.getOwnPropertyNames(s).forEach(function (t) {
                    o[t] = function () {
                        return n[t];
                    };
                });
            return (
                (o.default = function () {
                    return n;
                }),
                a.d(r, o),
                r
            );
        }),
        (a.d = function (t, e) {
            for (var n in e) a.o(e, n) && !a.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (a.f = {}),
        (a.e = function (t) {
            return Promise.all(
                Object.keys(a.f).reduce(function (e, n) {
                    return a.f[n](t, e), e;
                }, [])
            );
        }),
        (a.u = function (t) {
            return t + "." + { 333: "84cc3a32dbe62ca55349", 442: "d5700feca3224fca0c6c", 541: "b86c260a1751a64a3a85" }[t] + ".js";
        }),
        (a.miniCssF = function (t) {}),
        (a.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (a.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n = {}),
        (i = "brightspot-theme-core:"),
        (a.l = function (t, e, r, o) {
            if (n[t]) n[t].push(e);
            else {
                var s, l;
                if (void 0 !== r)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var h = c[u];
                        if (h.getAttribute("src") == t || h.getAttribute("data-webpack") == i + r) {
                            s = h;
                            break;
                        }
                    }
                s || ((l = !0), ((s = document.createElement("script")).charset = "utf-8"), (s.timeout = 120), a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", i + r), (s.src = t)), (n[t] = [e]);
                var d = function (e, i) {
                        (s.onerror = s.onload = null), clearTimeout(f);
                        var r = n[t];
                        if (
                            (delete n[t],
                            s.parentNode && s.parentNode.removeChild(s),
                            r &&
                                r.forEach(function (t) {
                                    return t(i);
                                }),
                            e)
                        )
                            return e(i);
                    },
                    f = setTimeout(d.bind(null, void 0, { type: "timeout", target: s }), 12e4);
                (s.onerror = d.bind(null, s.onerror)), (s.onload = d.bind(null, s.onload)), l && document.head.appendChild(s);
            }
        }),
        (a.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (a.p = "/"),
        (function () {
            var t = { 330: 0 };
            a.f.j = function (e, n) {
                var i = a.o(t, e) ? t[e] : void 0;
                if (0 !== i)
                    if (i) n.push(i[2]);
                    else {
                        var r = new Promise(function (n, r) {
                            i = t[e] = [n, r];
                        });
                        n.push((i[2] = r));
                        var o = a.p + a.u(e),
                            s = new Error();
                        a.l(
                            o,
                            function (n) {
                                if (a.o(t, e) && (0 !== (i = t[e]) && (t[e] = void 0), i)) {
                                    var r = n && ("load" === n.type ? "missing" : n.type),
                                        o = n && n.target && n.target.src;
                                    (s.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"), (s.name = "ChunkLoadError"), (s.type = r), (s.request = o), i[1](s);
                                }
                            },
                            "chunk-" + e,
                            e
                        );
                    }
            };
            var e = function (e, n) {
                    var i,
                        r,
                        o = n[0],
                        s = n[1],
                        l = n[2],
                        c = 0;
                    for (i in s) a.o(s, i) && (a.m[i] = s[i]);
                    for (l && l(a), e && e(n); c < o.length; c++) (r = o[c]), a.o(t, r) && t[r] && t[r][0](), (t[o[c]] = 0);
                },
                n = (self.webpackChunkbrightspot_theme_core = self.webpackChunkbrightspot_theme_core || []);
            n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
        })(),
        (function () {
            "use strict";
            function t(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function e(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            function n(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
            }
            function i(t, e) {
                return (i =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && i(t, e);
            }
            function o(t) {
                return (o =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function s(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function l(t, e) {
                return !e || ("object" !== o(e) && "function" != typeof e) ? s(t) : e;
            }
            function c(t) {
                return (c = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                    return !1;
                }
            }
            function h(t, e, n) {
                return (h = u()
                    ? Reflect.construct
                    : function (t, e, n) {
                          var r = [null];
                          r.push.apply(r, e);
                          var o = new (Function.bind.apply(t, r))();
                          return n && i(o, n.prototype), o;
                      }).apply(null, arguments);
            }
            function d(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (d = function (t) {
                    if (null === t || ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r);
                    }
                    function r() {
                        return h(t, arguments, c(this).constructor);
                    }
                    return (r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), i(r, t);
                })(t);
            }
            var f = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(
                        s,
                        [
                            {
                                key: "headerElement",
                                get: function () {
                                    return this.querySelector("[data-accordion-header]");
                                },
                            },
                            {
                                key: "bodyElement",
                                get: function () {
                                    return this.querySelector("[data-accordion-body]");
                                },
                            },
                            {
                                key: "expanded",
                                get: function () {
                                    return this.hasAttribute("data-expanded");
                                },
                                set: function (t) {
                                    t ? this.setAttribute("data-expanded", "") : this.removeAttribute("data-expanded");
                                },
                            },
                            {
                                key: "attributeChangedCallback",
                                value: function (t) {
                                    "data-expanded" === t && this.toggle();
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this;
                                    this.headerElement.addEventListener("click", function (e) {
                                        e.preventDefault(), (t.expanded = !t.expanded);
                                    }),
                                        this.expanded && (this.bodyElement.style.height = "auto");
                                },
                            },
                            {
                                key: "transition",
                                value: function (t, e) {
                                    var n = this;
                                    (this.bodyElement.style.height = "".concat(t, "px")),
                                        window.requestAnimationFrame(function () {
                                            window.requestAnimationFrame(function () {
                                                (n.bodyElement.style.height = "".concat(e, "px")), (n.bodyElement.style.visibility = "visible");
                                            });
                                        });
                                },
                            },
                            {
                                key: "toggle",
                                value: function () {
                                    var t = this.bodyElement.scrollHeight;
                                    this.expanded ? this.transition(0, t) : this.transition(t, 0);
                                },
                            },
                        ],
                        [
                            {
                                key: "observedAttributes",
                                get: function () {
                                    return ["data-expanded"];
                                },
                            },
                        ]
                    ),
                    s
                );
            })(d(HTMLElement));
            var p = "AudioPlayer:play",
                y = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "playing",
                                get: function () {
                                    return this.getAttribute("playing");
                                },
                                set: function (t) {
                                    t ? this.setAttribute("playing", "") : this.removeAttribute("playing");
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    (this.audioElement = this.querySelector("audio")),
                                        (this.durationElement = this.querySelector("[data-duration]")),
                                        (this.minutesAbbreviation = this.getAttribute("data-minutes-abbreviation")),
                                        (this.hoursAbbreviation = this.getAttribute("data-hours-abbreviation")),
                                        this.addEventListener("click", this),
                                        this.audioElement.addEventListener("play", this),
                                        this.audioElement.addEventListener("pause", this),
                                        this.audioElement.addEventListener("loadedmetadata", this),
                                        document.addEventListener(p, this),
                                        this.render();
                                },
                            },
                            {
                                key: "emit",
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = new window.CustomEvent(t, { bubbles: !0, detail: e });
                                    this.dispatchEvent(n);
                                },
                            },
                            {
                                key: "handleClick",
                                value: function (t) {
                                    (t.target.matches('[data-click="playPause"]') || t.target.closest('[data-click="playPause"]')) && this.playPause();
                                },
                            },
                            {
                                key: "handleEvent",
                                value: function (t) {
                                    "click" !== t.type
                                        ? "loadedmetadata" !== t.type
                                            ? t.type !== p || t.target === this
                                                ? ["play", "pause"].includes(t.type) && (this.playing = !t.target.paused)
                                                : this.pause()
                                            : this.render()
                                        : this.handleClick(t);
                                },
                            },
                            {
                                key: "playPause",
                                value: function () {
                                    this.audioElement.paused ? this.play() : this.pause();
                                },
                            },
                            {
                                key: "play",
                                value: function () {
                                    this.emit(p), this.audioElement.play();
                                },
                            },
                            {
                                key: "pause",
                                value: function () {
                                    this.emit("AudioPlayer:pause"), this.audioElement.pause();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    this.durationElement && (this.durationElement.innerText = this.getFormatedDuration());
                                },
                            },
                            {
                                key: "getFormatedDuration",
                                value: function () {
                                    if (!(this.audioElement.readyState < 1)) {
                                        var t = [],
                                            e = Math.floor(this.audioElement.duration / 3600),
                                            n = Math.floor((this.audioElement.duration - 3600 * e) / 60);
                                        return e && t.push("".concat(e, " ").concat(this.hoursAbbreviation)), n && t.push("".concat(n, " ").concat(this.minutesAbbreviation)), t.join();
                                    }
                                },
                            },
                        ]),
                        s
                    );
                })();
            var v = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = document.querySelector(".Banner-close");
                                null == window.sessionStorage.getItem("banner") && this.init(), t.addEventListener("click", this.closeBanner, !1);
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                document.querySelector(".Banner").setAttribute("data-banner", "show");
                            },
                        },
                        {
                            key: "closeBanner",
                            value: function () {
                                var t = document.querySelector(".Banner");
                                t.removeAttribute("data-banner"), t.remove(), window.sessionStorage.setItem("banner", "hidden");
                            },
                        },
                    ]),
                    s
                );
            })();
            function m(t, e, n) {
                return (m =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var i = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); );
                                  return t;
                              })(t, e);
                              if (i) {
                                  var r = Object.getOwnPropertyDescriptor(i, e);
                                  return r.get ? r.get.call(n) : r.value;
                              }
                          })(t, e, n || t);
            }
            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function b(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return g(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (t) {
                            if ("string" == typeof t) return g(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(t, e) : void 0;
                        }
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function w(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function k(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e &&
                        (i = i.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? k(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : k(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            var S = "VideoPlayer:ready",
                L = "VideoPlayer:volumeChange",
                A = "VideoPlayer:ended",
                P = { playingInterval: 5, playbackPosition: 0, quartilePosition: -1 },
                R = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    this.intervals = E({}, P);
                                },
                            },
                            {
                                key: "videoId",
                                get: function () {
                                    return this.getAttribute("video-id");
                                },
                            },
                            {
                                key: "videoTitle",
                                get: function () {
                                    return this.getAttribute("video-title");
                                },
                            },
                            {
                                key: "playerId",
                                get: function () {
                                    return this.getAttribute("player-id");
                                },
                            },
                            {
                                key: "autoplay",
                                get: function () {
                                    return this.hasAttribute("autoplay");
                                },
                            },
                            {
                                key: "disableClickToPlay",
                                get: function () {
                                    return this.hasAttribute("disable-click-to-play");
                                },
                            },
                            {
                                key: "muted",
                                get: function () {
                                    return this.hasAttribute("muted");
                                },
                            },
                            {
                                key: "loop",
                                get: function () {
                                    return this.hasAttribute("loop");
                                },
                            },
                            {
                                key: "poster",
                                get: function () {
                                    return this.getAttribute("poster");
                                },
                            },
                            {
                                key: "video",
                                get: function () {
                                    return {
                                        id: this.videoId,
                                        videoPlatform: this.platform,
                                        seekSeconds: this.seekSeconds,
                                        title: this.videoTitle,
                                        inPlaylist: document.querySelector("ps-playlist"),
                                        playListTagsosition: b(document.querySelectorAll("ps-playlist-item")).findIndex(function (t) {
                                            return t.isCurrent;
                                        }),
                                        duration: this.duration,
                                        playerWidth: this.getPlayerWidth(),
                                        playerHeight: this.getPlayerHeight(),
                                        playerResolution: this.getPlayerResolution(),
                                        isAutoPlay: this.getIsAutoPlay(),
                                        startVolume: this.getStartVolume(),
                                        volume: this.getVolume(),
                                        isFullscreen: this.onVideoFullscreen(),
                                        videoUuid: this.getVideoUuid(),
                                        videoFileType: this.getVideoFileType(),
                                        videoInitiation: this.getAttribute("data-playback-started") || !1,
                                        credit: this.getCredit(),
                                        ownerSite: this.getOwnerSite(),
                                        videoClassification: this.getCategory(),
                                        source: this.getSource(),
                                        location: this.getDateline(),
                                        videoStatus: this.getVideoStatus(),
                                        quartile: this.getDisplayQuartile(this.intervals.quartilePosition),
                                    };
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    this.platform = this.getPlatformName();
                                },
                            },
                            {
                                key: "onReady",
                                value: function () {
                                    this.emit(S);
                                },
                            },
                            {
                                key: "onPlay",
                                value: function () {
                                    this.emit("VideoPlayer:playing");
                                },
                            },
                            {
                                key: "onTimeUpdate",
                                value: function () {
                                    this.sendVideoPlaybackIntervalEvents(), this.emit("VideoPlayer:timeUpdate");
                                },
                            },
                            {
                                key: "onMute",
                                value: function () {
                                    this.emit(L);
                                },
                            },
                            {
                                key: "onPause",
                                value: function () {
                                    this.emit("VideoPlayer:paused");
                                },
                            },
                            {
                                key: "onEnded",
                                value: function () {
                                    (this.intervals = E({}, P)), this.emit(A);
                                },
                            },
                            {
                                key: "onError",
                                value: function () {
                                    this.emit("VideoPlayer:error");
                                },
                            },
                            {
                                key: "onVolumneChange",
                                value: function () {
                                    this.emit(L);
                                },
                            },
                            { key: "play", value: function () {} },
                            { key: "pause", value: function () {} },
                            {
                                key: "playPause",
                                value: function () {
                                    this.getAttribute("data-playback-paused") ? this.play() : this.pause();
                                },
                            },
                            {
                                key: "sendVideoPlaybackIntervalEvents",
                                value: function () {
                                    if (this.duration && 0 !== this.duration) {
                                        for (var t = (this.currentTime / this.duration) * 100; this.currentTime > this.intervals.playbackPosition + 2 * this.intervals.playingInterval; )
                                            this.intervals.playbackPosition += this.intervals.playingInterval;
                                        if (this.currentTime >= this.intervals.playbackPosition + this.intervals.playingInterval) {
                                            this.intervals.playbackPosition += this.intervals.playingInterval;
                                            var e = new window.CustomEvent("Video:onVideoTimeIntervalUpdate", {
                                                bubbles: !0,
                                                detail: { playerId: this.playerId, videoPlatform: this.platform, video: this.video, secondsElapsed: this.currentTime },
                                            });
                                            this.dispatchEvent(e);
                                        }
                                        var n = null;
                                        if (t >= this.intervals.quartilePosition)
                                            if (-1 === this.intervals.quartilePosition) {
                                                if (t >= this.intervals.quartilePosition + 25) for (this.intervals.quartilePosition = 0; t >= this.intervals.quartilePosition; ) this.intervals.quartilePosition += 25;
                                            } else (n = this.intervals.quartilePosition), (this.intervals.quartilePosition += 25), 100 === this.intervals.quartilePosition && (this.intervals.quartilePosition = 95);
                                        null !== n && (95 === n && (n = 100), this.emit("VideoPlayer:quartileCompleted", { quartile: n }));
                                    }
                                },
                            },
                            {
                                key: "getDisplayQuartile",
                                value: function (t) {
                                    return -1 === t ? 0 : 50 === t ? 25 : 75 === t ? 50 : 95 === t ? 75 : 100;
                                },
                            },
                            { key: "getCategory", value: function () {} },
                            { key: "getCredit", value: function () {} },
                            { key: "getDateline", value: function () {} },
                            { key: "getIsAutoPlay", value: function () {} },
                            { key: "getOwnerSite", value: function () {} },
                            { key: "getPlatformName", value: function () {} },
                            { key: "getPlayerHeight", value: function () {} },
                            { key: "getPlayerWidth", value: function () {} },
                            {
                                key: "getPlayerResolution",
                                value: function () {
                                    return this.getPlayerWidth() + " x " + this.getPlayerHeight();
                                },
                            },
                            {
                                key: "getPlayListTagsosition",
                                value: function (t) {
                                    for (var e = document.querySelector("[data-playlist]"), n = e.querySelectorAll(".PlaylistItem"), i = e.querySelector("[data-video-id='".concat(t, "']")), r = 0; r < n.length; r++)
                                        if (i === n[r]) return r;
                                },
                            },
                            { key: "getSource", value: function () {} },
                            { key: "getVideoFileType", value: function () {} },
                            {
                                key: "getVideoStatus",
                                value: function () {
                                    return this.getAttribute("data-playback-playing") ? "Playing" : this.getAttribute("data-playback-paused") ? "Paused" : this.getAttribute("data-playback-ended") ? "Ended" : null;
                                },
                            },
                            { key: "getVideoUuid", value: function () {} },
                            { key: "getVolume", value: function () {} },
                            { key: "getStartVolume", value: function () {} },
                            { key: "onVideoFullscreen", value: function () {} },
                            {
                                key: "onEnterFullScreen",
                                value: function () {
                                    this.emit("VideoPlayer:enterFullscreen");
                                },
                            },
                            {
                                key: "onExitFullscreen",
                                value: function () {
                                    this.emit("VideoPlayer:exitFullscreen");
                                },
                            },
                            {
                                key: "emit",
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = new window.CustomEvent(t, { bubbles: !0, detail: e });
                                    this.dispatchEvent(n);
                                },
                            },
                        ]),
                        s
                    );
                })();
            var x = (function (e) {
                    r(s, e);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        var e;
                        return t(this, s), ((e = a.call(this)).playing = !1), (e.player = null), e;
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    if (
                                        (m(c(s.prototype), "init", this).call(this),
                                        (this.player = this),
                                        (this.accountVId = this.player.getAttribute("data-account") || !1),
                                        (this.playerVId = this.player.getAttribute("data-player") || !1),
                                        (this.videoVId = this.player.getAttribute("data-video-id") || !1),
                                        !(this.accountVId && this.playerVId && this.videoVId))
                                    )
                                        return console.info("Brightcove Video Player: Cannot play video, no account, player or video ID found"), !1;
                                    this.init();
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    window.videojs.getPlayers()["BrightcoveVideoPlayer-" + this.videoVId] && delete window.videojs.getPlayers()["BrightcoveVideoPlayer-" + this.videoVId];
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    this.loadBrightcoveApi(this.accountVId, this.playerVId);
                                },
                            },
                            {
                                key: "loadBrightcoveApi",
                                value: function (t, e) {
                                    var n = document.createElement("script");
                                    (n.src = "https://players.brightcove.net/" + t + "/" + e + "_default/index.min.js"), n.addEventListener("load", this.onBrightcoveAPIReady.bind(this));
                                    var i = document.getElementsByTagName("script")[0];
                                    i.parentNode.insertBefore(n, i);
                                },
                            },
                            {
                                key: "onBrightcoveAPIReady",
                                value: function () {
                                    (this.videoPlayer = this.querySelector("video")), (this.thePlayer = window.videojs(this.videoPlayer.id)), void 0 !== this.thePlayer && ((this.startVolume = this.thePlayer.volume()), this.playerEvents());
                                },
                            },
                            {
                                key: "playerEvents",
                                value: function () {
                                    var t = this;
                                    this.onReady(),
                                        this.thePlayer.on("playing", function (e) {
                                            (t.playing = !0), t.onPlay(e);
                                        }),
                                        this.thePlayer.on("pause", function (e) {
                                            t.onPause(e);
                                        }),
                                        this.thePlayer.on("timeUpdate", function (e) {
                                            (t.currentTime = t.thePlayer.currentTime()), (t.duration = t.thePlayer.duration()), t.onTimeUpdate(e);
                                        }),
                                        this.thePlayer.on("ended", function (e) {
                                            (t.playing = !1), t.onEnded(e);
                                        });
                                },
                            },
                            {
                                key: "play",
                                value: function () {
                                    this.thePlayer.play();
                                },
                            },
                            {
                                key: "pause",
                                value: function () {
                                    this.thePlayer.pause();
                                },
                            },
                        ]),
                        s
                    );
                })(R),
                T = a(7757),
                C = a.n(T);
            function M(t, e, n, i, r, o, a) {
                try {
                    var s = t[o](a),
                        l = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(l) : Promise.resolve(l).then(i, r);
            }
            function O(t) {
                return function () {
                    var e = this,
                        n = arguments;
                    return new Promise(function (i, r) {
                        var o = t.apply(e, n);
                        function a(t) {
                            M(o, i, r, a, s, "next", t);
                        }
                        function s(t) {
                            M(o, i, r, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function I(t, e) {
                if (t <= 0) return e;
                var n,
                    i,
                    r = 0;
                return function () {
                    if (((i = arguments), !n)) {
                        var o = this,
                            a = +Date.now(),
                            s = t - a + r;
                        s <= 0
                            ? ((r = a), e.apply(o, i))
                            : (n = setTimeout(function () {
                                  (r = a), (n = null), e.apply(o, i);
                              }, s));
                    }
                };
            }
            var B = (function (e) {
                r(h, window.HTMLElement);
                var i,
                    o,
                    s,
                    u =
                        ((o = h),
                        (s = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(o);
                            if (s) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function h() {
                    return t(this, h), u.apply(this, arguments);
                }
                return (
                    n(h, [
                        {
                            key: "connectedCallback",
                            value:
                                ((i = O(
                                    C().mark(function t() {
                                        var e,
                                            n,
                                            i = this;
                                        return C().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (t.next = 2), a.e(442).then(a.t.bind(a, 2442, 23));
                                                        case 2:
                                                            (e = t.sent),
                                                                (n = e.default),
                                                                (this.carouselSlides = this.querySelector('[class$="-slides"]') || this),
                                                                window.addEventListener("load", function () {
                                                                    (i.carouselOptions = {
                                                                        adaptiveHeight: !1,
                                                                        imagesLoaded: !0,
                                                                        pageDots: !1,
                                                                        lazyLoad: 2,
                                                                        on: {
                                                                            ready: function () {
                                                                                i.repositionArrows();
                                                                            },
                                                                        },
                                                                    }),
                                                                        (i.flickity = new n(i.carouselSlides, i.carouselOptions)),
                                                                        window.addEventListener(
                                                                            "resize",
                                                                            I(50, function () {
                                                                                i.repositionArrows();
                                                                            })
                                                                        );
                                                                });
                                                        case 6:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: "repositionArrows",
                            value: function () {
                                var t = (this.querySelector(".CarouselSlide-media") || this.querySelector(".GallerySlide-media")).offsetHeight;
                                this.querySelectorAll(".flickity-prev-next-button").forEach(function (e) {
                                    e.style.top = "".concat(t / 2, "px");
                                });
                            },
                        },
                        {
                            key: "disconnectedCallback",
                            value: function () {
                                this.flickity.destroy();
                            },
                        },
                    ]),
                    h
                );
            })();
            var q = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.addEvents();
                            },
                        },
                        {
                            key: "addEvents",
                            value: function () {
                                var t = this;
                                this.addEventListener("click", function (e) {
                                    t.copyLink();
                                });
                            },
                        },
                        {
                            key: "copyLink",
                            value: function () {
                                var t = this,
                                    e = this.getAttribute("data-link");
                                navigator.clipboard.writeText(e).then(
                                    function () {
                                        t.setAttribute("data-success", !0),
                                            setTimeout(function () {
                                                t.removeAttribute("data-success");
                                            }, 2e3);
                                    },
                                    function () {
                                        console.error("Unable to write to clipboard");
                                    }
                                );
                            },
                        },
                    ]),
                    s
                );
            })();
            var H = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(
                        s,
                        [
                            {
                                key: "headerEl",
                                get: function () {
                                    return this.querySelector(".FaqQuestion-header");
                                },
                            },
                            {
                                key: "answerEl",
                                get: function () {
                                    return this.querySelector(".FaqQuestion-answer");
                                },
                            },
                            {
                                key: "expanded",
                                get: function () {
                                    return this.hasAttribute("data-expanded");
                                },
                                set: function (t) {
                                    t ? this.setAttribute("data-expanded", "") : this.removeAttribute("data-expanded");
                                },
                            },
                            {
                                key: "attributeChangedCallback",
                                value: function (t) {
                                    "data-expanded" === t && this.toggle();
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this;
                                    this.headerEl.addEventListener("click", function (e) {
                                        e.preventDefault(), (t.expanded = !t.expanded);
                                    }),
                                        this.expanded && (this.answerEl.style.height = "auto"),
                                        this.setEvents();
                                },
                            },
                            {
                                key: "transition",
                                value: function (t, e) {
                                    var n = this;
                                    (this.answerEl.style.height = "".concat(t, "px")),
                                        window.requestAnimationFrame(function () {
                                            window.requestAnimationFrame(function () {
                                                n.answerEl.style.height = "".concat(e, "px");
                                            });
                                        });
                                },
                            },
                            {
                                key: "toggle",
                                value: function () {
                                    var t = this.answerEl.scrollHeight;
                                    this.expanded ? this.transition(0, t) : this.transition(t, 0);
                                },
                            },
                            {
                                key: "setEvents",
                                value: function () {
                                    var t,
                                        e = this;
                                    window.addEventListener("resize", function () {
                                        t && clearTimeout(t),
                                            e.answerEl.style.height &&
                                                (t = setTimeout(function () {
                                                    e.answerEl.style.height = null;
                                                }, 50));
                                    });
                                },
                            },
                        ],
                        [
                            {
                                key: "observedAttributes",
                                get: function () {
                                    return ["data-expanded"];
                                },
                            },
                        ]
                    ),
                    s
                );
            })(d(HTMLElement));
            var _ = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.cacheElements(), this.init();
                            },
                        },
                        {
                            key: "cacheElements",
                            value: function () {
                                (this.form = this.querySelector("form")), (this.formSubmit = this.querySelector("button[type=submit]")), (this.inputs = this.querySelector("form").elements);
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                var t = this,
                                    e = null;
                                this.form.addEventListener(
                                    "keyup",
                                    function (n) {
                                        clearTimeout(e),
                                            t.setAttribute("invalid-form", "false"),
                                            (e = setTimeout(function () {
                                                t.validateField(n.target);
                                            }, 1e3));
                                    },
                                    !0
                                ),
                                    this.formSubmit.addEventListener(
                                        "click",
                                        function (e) {
                                            e.preventDefault(),
                                                t.setAttribute("invalid-form", "false"),
                                                Array.from(t.querySelector("form").elements).forEach(function (e) {
                                                    t.validateField(e);
                                                }),
                                                "false" === t.getAttribute("invalid-form") && t.form.submit();
                                        },
                                        !0
                                    );
                            },
                        },
                        {
                            key: "validateField",
                            value: function (t) {
                                t.parentElement.parentElement.removeAttribute("data-invalid"),
                                    t.validity.valid || (t.reportValidity(), this.setAttribute("invalid-form", "true"), t.parentElement.parentElement.setAttribute("data-invalid", "true"));
                            },
                        },
                        {
                            key: "disconnectedCallback",
                            value: function () {
                                return !1;
                            },
                        },
                    ]),
                    s
                );
            })();
            var D = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                m(c(s.prototype), "connectedCallback", this).call(this),
                                    (this.playButton = this.querySelector(".HTML5VideoPlayer-playIcon")),
                                    (this.videoPlayer = this.querySelector(".HTML5VideoPlayer-video")),
                                    this.videoElement.addEventListener("play", function () {
                                        t.onPlay();
                                    }),
                                    this.videoElement.addEventListener("canplay", function () {
                                        t.onReady();
                                    }),
                                    this.videoElement.addEventListener("timeupdate", function () {
                                        t.onTimeUpdate();
                                    }),
                                    this.videoElement.addEventListener("volumechange", function () {
                                        t.onVolumneChange();
                                    }),
                                    this.videoElement.addEventListener("error", function () {
                                        t.onError();
                                    }),
                                    this.videoElement.addEventListener("ended", function () {
                                        t.onEnded();
                                    }),
                                    this.videoElement.addEventListener("pause", function () {
                                        t.onPause();
                                    }),
                                    this.handleClicks();
                            },
                        },
                        {
                            key: "videoElement",
                            get: function () {
                                return this.querySelector("video");
                            },
                        },
                        {
                            key: "ready",
                            get: function () {
                                return this.videoElement.readyState >= 2;
                            },
                        },
                        {
                            key: "handleClicks",
                            value: function () {
                                var t = this;
                                this.playButton &&
                                    this.playButton.addEventListener("click", function (e) {
                                        t.hidePlayButton(), t.videoPlayer.setAttribute("controls", ""), t.play();
                                    }),
                                    this.videoPlayer.addEventListener("click", function (e) {
                                        t.hidePlayButton(), t.videoPlayer.setAttribute("controls", ""), t.playPause();
                                    });
                            },
                        },
                        {
                            key: "hidePlayButton",
                            value: function () {
                                this.playButton && this.playButton.setAttribute("style", "display:none;");
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.videoElement.play();
                            },
                        },
                    ]),
                    s
                );
            })(R);
            var W = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    var e;
                    return t(this, s), ((e = a.call(this)).playing = !1), (e.player = null), e;
                }
                return (
                    n(s, [
                        {
                            key: "videoElement",
                            get: function () {
                                return this.querySelector("video");
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                if (
                                    (m(c(s.prototype), "init", this).call(this),
                                    (this.player = this),
                                    (this.playerVId = this.player.getAttribute("data-player") || !1),
                                    (this.videoVId = this.player.getAttribute("data-video-uuid") || !1),
                                    (this.mediaVId = this.player.getAttribute("data-media-id") || !1),
                                    !(this.playerVId && this.mediaVId && this.videoVId))
                                )
                                    return console.info("JW Video Player: Cannot play video, no media, player or video ID found"), !1;
                                this.init();
                            },
                        },
                        {
                            key: "disconnectedCallback",
                            value: function () {
                                window.jwplayer(this.videoElement) && window.jwplayer(this.videoElement).remove();
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                this.loadJwApi(this.playerVId);
                            },
                        },
                        {
                            key: "loadJwApi",
                            value: function (t) {
                                if (window.jwplayer) this.onJwApiReady();
                                else {
                                    var e = document.createElement("script");
                                    (e.src = "https://cdn.jwplayer.com/libraries/" + t + ".js"), e.addEventListener("load", this.onJwApiReady.bind(this));
                                    var n = document.getElementsByTagName("script")[0];
                                    n.parentNode.insertBefore(e, n);
                                }
                            },
                        },
                        {
                            key: "onJwApiReady",
                            value: function () {
                                (this.videoPlayer = this.player.querySelector("video")),
                                    (this.thePlayer = window.jwplayer(this.videoElement)),
                                    void 0 !== this.thePlayer &&
                                        (this.thePlayer.setup({ playlist: "https://cdn.jwplayer.com/v2/media/".concat(this.mediaVId), image: this.poster, width: "100%", responsive: "true", aspectratio: "16:9", title: this.videoTitle }),
                                        this.playerEvents());
                            },
                        },
                        {
                            key: "playerEvents",
                            value: function () {
                                var t = this;
                                this.thePlayer.on("ready", function (e) {
                                    t.onReady(e);
                                }),
                                    this.thePlayer.on("play", function (e) {
                                        (t.playing = !0), t.onPlay(e);
                                    }),
                                    this.thePlayer.on("pause", function (e) {
                                        t.onPause(e);
                                    }),
                                    this.thePlayer.on("mute", function (e) {
                                        t.onMute(e);
                                    }),
                                    this.thePlayer.on("time", function (e) {
                                        (t.currentTime = t.thePlayer.getPosition()), (t.duration = t.thePlayer.getDuration()), t.onTimeUpdate(e);
                                    }),
                                    this.thePlayer.on("complete", function (e) {
                                        (t.playing = !1), t.onEnded(e);
                                    });
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.thePlayer.play();
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.thePlayer.pause();
                            },
                        },
                    ]),
                    s
                );
            })(R);
            var F = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.navDropdown(), this.switchLanguage();
                            },
                        },
                        {
                            key: "navDropdown",
                            value: function () {
                                var t = this,
                                    e = this.querySelector(".LanguagesMenu-text"),
                                    n = this.querySelector(".LanguagesMenu");
                                e.addEventListener("click", function () {
                                    var e = t.querySelector(".icon");
                                    e.classList.contains("is-active") ? e.classList.remove("is-active") : e.classList.add("is-active");
                                }),
                                    n.addEventListener("click", function () {
                                        var e = t.querySelector(".LanguagesMenu-items");
                                        e.classList.contains("is-active") ? e.classList.remove("is-active") : e.classList.add("is-active");
                                    });
                            },
                        },
                        {
                            key: "switchLanguage",
                            value: function () {
                                var t = this.querySelector(".LanguagesMenu-text-link");
                                this.querySelectorAll(".LanguagesMenuItem-items-item-link").forEach(function (e) {
                                    e.addEventListener("click", function () {
                                        var n = e.getAttribute("language-code");
                                        t.innerHTML = n;
                                    });
                                });
                            },
                        },
                    ]),
                    s
                );
            })();
            var N = (function (e) {
                r(u, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = u),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function u(e, n, i) {
                    var r;
                    return (
                        t(this, u),
                        w(s((r = a.call(this, e, i))), "handleIntersect", function (t, e) {
                            t.forEach(function (t) {
                                t.isIntersecting && (e.unobserve(t.target), r.remove());
                            });
                        }),
                        (r.post = e),
                        (r.linkText = n),
                        (r.onDisconnectedCallback = i),
                        r
                    );
                }
                return (
                    n(u, [
                        {
                            key: "updatePost",
                            value: function (t) {
                                this.observer.unobserve(this.post), (this.post = t), this.observer.observe(this.post);
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                this.classList.add("LiveBlogNewPostLink"),
                                    (this.postLink = document.createElement("a")),
                                    this.postLink.insertAdjacentHTML("beforeend", '<svg class="icon-arrow-down"><use xlink:href="#icon-arrow-down"></use></svg>'),
                                    this.postLink.insertAdjacentText("beforeend", this.linkText),
                                    (this.postLink.href = "#".concat(this.post.id)),
                                    this.postLink.classList.add("LiveBlogNewPostLink-link"),
                                    this.appendChild(this.postLink),
                                    (this.dismissLink = document.createElement("a")),
                                    this.dismissLink.insertAdjacentHTML("beforeend", '<svg><use xlink:href="#close-x"></use></svg>'),
                                    (this.dismissLink.href = "#"),
                                    this.dismissLink.classList.add("LiveBlogNewPostLink-dismissLink"),
                                    this.appendChild(this.dismissLink),
                                    this.postLink.addEventListener("click", function (e) {
                                        e.preventDefault(), window.history.pushState(null, null, "#".concat(t.post.id)), t.post.scrollIntoView();
                                    }),
                                    this.dismissLink.addEventListener("click", function (e) {
                                        e.preventDefault(), t.remove();
                                    }),
                                    (this.observer = new window.IntersectionObserver(this.handleIntersect)),
                                    this.observer.observe(this.post);
                            },
                        },
                        {
                            key: "disconnectedCallback",
                            value: function () {
                                this.onDisconnectedCallback();
                            },
                        },
                    ]),
                    u
                );
            })();
            window.customElements.define("bsp-liveblog-new-post-link", N);
            var Y = "LiveBlog:newPosts",
                j = (function (e) {
                    r(u, window.HTMLElement);
                    var i,
                        o,
                        a,
                        s =
                            ((o = u),
                            (a = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(o);
                                if (a) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function u() {
                        return t(this, u), s.apply(this, arguments);
                    }
                    return (
                        n(u, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this;
                                    (this.postsEndpoint = this.getAttribute("data-posts-endpoint")),
                                        (this.live = this.hasAttribute("data-live-event")),
                                        (this.currentPostsEl = document.querySelector(".LiveBlogPage-currentPosts")),
                                        this.live &&
                                            setInterval(function () {
                                                t.getNewPosts();
                                            }, 15e3);
                                },
                            },
                            {
                                key: "getNewPosts",
                                value:
                                    ((i = O(
                                        C().mark(function t() {
                                            var e, n, i, r, o, a, s, l;
                                            return C().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = new window.URLSearchParams()),
                                                                    (i = b(document.querySelectorAll(".LiveBlogPost")).reduce(function (t, e) {
                                                                        var n = +e.getAttribute("data-posted-date-timestamp");
                                                                        return n > t ? n : t;
                                                                    }, null)) && n.append("since", i),
                                                                    n.append("_", (void 0, (c = new window.Date().getTime()) - (c % 15e3))),
                                                                    (r = "".concat(this.postsEndpoint, "?").concat(n)),
                                                                    (t.prev = 5),
                                                                    (t.next = 8),
                                                                    window.fetch(r).then(function (t) {
                                                                        return t.text();
                                                                    })
                                                                );
                                                            case 8:
                                                                (e = t.sent), (t.next = 14);
                                                                break;
                                                            case 11:
                                                                return (t.prev = 11), (t.t0 = t.catch(5)), t.abrupt("return", console.error("Error getting new posts", t.t0));
                                                            case 14:
                                                                (o = new window.DOMParser()),
                                                                    (a = o.parseFromString(e, "text/html")),
                                                                    (s = a.querySelector(".LiveBlogPage-currentPosts").innerHTML.trim()) &&
                                                                        (this.currentPostsEl.insertAdjacentHTML("afterbegin", s),
                                                                        this.emit(Y),
                                                                        this.emit("Ajax:Rendered"),
                                                                        (l = this.currentPostsEl.querySelector("bsp-liveblog-post")),
                                                                        this.createOrUpdateNewPostLink(l));
                                                            case 18:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                    var c;
                                                },
                                                t,
                                                this,
                                                [[5, 11]]
                                            );
                                        })
                                    )),
                                    function () {
                                        return i.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "emit",
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = new window.CustomEvent(t, { bubbles: !0, detail: e });
                                    this.dispatchEvent(n);
                                },
                            },
                            {
                                key: "createOrUpdateNewPostLink",
                                value: function (t) {
                                    var e = this;
                                    this.newPostLink
                                        ? this.newPostLink.updatePost(t)
                                        : ((this.newPostLink = new N(t, this.getAttribute("data-latest-update-text"), function () {
                                              e.newPostLink = null;
                                          })),
                                          document.body.appendChild(this.newPostLink));
                                },
                            },
                        ]),
                        u
                    );
                })();
            var z = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s(e) {
                    var n;
                    return t(this, s), ((n = a.call(this, e)).post = e), n;
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                this.classList.add("LiveBlogFeed-post"),
                                    (this.innerHTML = '\n        <div class="LiveBlogFeed-post-time">\n          '
                                        .concat(this.post.getdPostedTimeFormatted(), '\n        </div>\n        <a href="#')
                                        .concat(this.post.id, '" class="LiveBlogFeed-post-headline">\n          ')
                                        .concat(this.post.headline, "\n        </a>\n        ")
                                        .trim()),
                                    this.addEventListener("click", function (e) {
                                        e.preventDefault(), window.history.pushState(null, null, "#".concat(t.post.id)), t.post.scrollIntoView();
                                    });
                            },
                        },
                    ]),
                    s
                );
            })();
            window.customElements.define("bsp-liveblog-feed-post", z);
            var X = (function (e) {
                    r(u, window.HTMLElement);
                    var i,
                        o,
                        a,
                        s =
                            ((o = u),
                            (a = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(o);
                                if (a) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function u() {
                        return t(this, u), s.apply(this, arguments);
                    }
                    return (
                        n(u, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this;
                                    this.createOrUpdate(),
                                        document.addEventListener(Y, function () {
                                            return t.createOrUpdate();
                                        });
                                },
                            },
                            {
                                key: "createOrUpdate",
                                value:
                                    ((i = O(
                                        C().mark(function t() {
                                            return C().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (t.next = 2), window.customElements.whenDefined("bsp-liveblog-post");
                                                            case 2:
                                                                (this.posts = b(document.querySelectorAll("bsp-liveblog-post"))), this.render();
                                                            case 4:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return i.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this,
                                        e = this.posts.reduce(function (t, e) {
                                            return t[e.getdPostedDateFormatted()] || (t[e.getdPostedDateFormatted()] = []), t[e.getdPostedDateFormatted()].push(e), t;
                                        }, {}),
                                        n = Object.keys(e).map(function (t) {
                                            return { date: t, posts: e[t] };
                                        });
                                    (this.innerHTML = ""),
                                        n.forEach(function (e) {
                                            var n = document.createElement("div");
                                            n.classList.add("LiveBlogFeed-date"),
                                                (n.innerText = e.date),
                                                t.appendChild(n),
                                                e.posts.forEach(function (e) {
                                                    t.appendChild(new z(e));
                                                });
                                        });
                                },
                            },
                        ]),
                        u
                    );
                })(),
                V = window.navigator.language || window.navigator.userLanguage || "en-US";
            function U(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e &&
                        (i = i.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function G(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? U(Object(n), !0).forEach(function (e) {
                              w(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : U(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            var $ = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "postedDateTimestamp",
                            get: function () {
                                return +this.getAttribute("data-posted-date-timestamp");
                            },
                        },
                        {
                            key: "postedDate",
                            get: function () {
                                return new Date(this.postedDateTimestamp);
                            },
                        },
                        {
                            key: "isCurrentDay",
                            get: function () {
                                return this.getAttribute("data-is-current-day");
                            },
                            set: function (t) {
                                t ? this.setAttribute("data-is-current-day", "") : this.removeAttribute("data-is-current-day");
                            },
                        },
                        {
                            key: "headline",
                            get: function () {
                                return this.querySelector(".LiveBlogPost-headline").innerText;
                            },
                        },
                        {
                            key: "id",
                            get: function () {
                                return this.getAttribute("data-post-id");
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                (this.timeElement = this.querySelector(".LiveBlogPost-time")),
                                    (this.dateElement = this.querySelector(".LiveBlogPost-date")),
                                    this.render(),
                                    document.addEventListener("LiveBlog:fetched", function () {
                                        return t.render();
                                    });
                            },
                        },
                        {
                            key: "getdPostedTimeFormatted",
                            value: function () {
                                var t = new Date() - this.postedDate;
                                if (t < 6e4) {
                                    var e = (t / 1e3).toFixed(0),
                                        n = this.getAttribute("data-seconds-delta-text");
                                    return "".concat(e).concat(n);
                                }
                                if (t < 36e5) {
                                    var i = (t / 6e4).toFixed(0),
                                        r = this.getAttribute("data-minutes-delta-text");
                                    return "".concat(i).concat(r);
                                }
                                if (t < 108e5) {
                                    var o = (t / 36e5).toFixed(0),
                                        a = this.getAttribute("data-hours-delta-text");
                                    return "".concat(o).concat(a);
                                }
                                return this.postedDate.toLocaleString(V, { hour: "numeric", minute: "numeric", hour12: !0 });
                            },
                        },
                        {
                            key: "getdPostedDateFormatted",
                            value: function () {
                                return this.postedDate.toLocaleString(V, { year: "numeric", month: "long", day: "numeric" });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                (this.timeElement.innerText = this.getdPostedTimeFormatted()), (this.dateElement.innerText = this.getdPostedDateFormatted());
                                var t = new Date();
                                t.setHours(0, 0, 0), (this.isCurrentDay = this.postedDate > t);
                            },
                        },
                        {
                            key: "scrollIntoView",
                            value: function () {
                                var t = this.querySelector(".LiveBlogPost-anchor"),
                                    e = G({ behavior: "smooth" }, arguments);
                                t.scrollIntoView(e);
                            },
                        },
                    ]),
                    s
                );
            })();
            var Q = (function (e) {
                r(h, window.HTMLElement);
                var i,
                    o,
                    s,
                    u =
                        ((o = h),
                        (s = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(o);
                            if (s) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function h() {
                    return t(this, h), u.apply(this, arguments);
                }
                return (
                    n(h, [
                        {
                            key: "connectedCallback",
                            value:
                                ((i = O(
                                    C().mark(function t() {
                                        var e,
                                            n,
                                            i = this;
                                        return C().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (t.next = 2), a.e(442).then(a.t.bind(a, 2442, 23));
                                                        case 2:
                                                            (e = t.sent),
                                                                (n = e.default),
                                                                (this.carouselSlides = this.querySelector('[class$="-slides"]') || this),
                                                                (this.carouselSlide = this.querySelector('[class$="-slides"]') || this),
                                                                (this.closeButtonEl = this.querySelector('[class$="-closeButton"]') || this),
                                                                window.addEventListener("load", function () {
                                                                    i.carouselOptions = {
                                                                        adaptiveHeight: !1,
                                                                        wrapAround: !0,
                                                                        prevNextButtons: !0,
                                                                        pageDots: !1,
                                                                        draggable: !0,
                                                                        lazyLoad: 2,
                                                                        on: {
                                                                            change: function (t) {
                                                                                i.onSlideChange(t);
                                                                            },
                                                                            select: function (t) {
                                                                                i.onSlideChange(t);
                                                                            },
                                                                        },
                                                                    };
                                                                }),
                                                                this.closeButtonEl.addEventListener("click", function (t) {
                                                                    return i.onCloseCarousel(t);
                                                                }),
                                                                document.addEventListener("keydown", function (t) {
                                                                    "Escape" === t.key && i.onCloseCarousel(t);
                                                                }),
                                                                document.body.addEventListener("GalleryPageCarousel:Open", function (t) {
                                                                    return i.onOpenCarousel(t, n);
                                                                });
                                                        case 11:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: "onSlideChange",
                            value: function (t) {
                                this.querySelector('[class$="-slide"][active]') && this.querySelector('[class$="-slide"][active]').removeAttribute("active"),
                                    this.querySelector('[data-slide-id="slide-' + t + '"]').setAttribute("active", "");
                            },
                        },
                        {
                            key: "onCloseCarousel",
                            value: function (t) {
                                t.preventDefault(), this.removeAttribute("active"), this.flickity.destroy(), document.documentElement.style.removeProperty("overflow");
                            },
                        },
                        {
                            key: "onOpenCarousel",
                            value: function (t, e) {
                                this.setAttribute("active", ""),
                                    document.documentElement.style.setProperty("overflow", "hidden"),
                                    (this.flickity = new e(this.carouselSlides, this.carouselOptions)),
                                    this.flickity.resize(),
                                    this.flickity.select(t.detail.index, !0, !0);
                            },
                        },
                        {
                            key: "disconnectedCallback",
                            value: function () {
                                this.flickity.destroy();
                            },
                        },
                    ]),
                    h
                );
            })();
            var K = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "galleryStyle",
                                get: function () {
                                    return this.dataset.galleryStyle;
                                },
                            },
                            {
                                key: "headerHeight",
                                get: function () {
                                    return document.querySelector(".Page-header").offsetHeight;
                                },
                            },
                            {
                                key: "slides",
                                get: function () {
                                    return this.querySelectorAll(".GallerySlideWaterfall img");
                                },
                            },
                            {
                                key: "fullScreenButtons",
                                get: function () {
                                    return this.querySelectorAll('[class$="-fullScreenButton"]');
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    this.handleEventListeners();
                                },
                            },
                            {
                                key: "handleEventListeners",
                                value: function () {
                                    var t = this;
                                    window.addEventListener("load", function () {
                                        "waterfall" === t.galleryStyle && t.slideClickEvent();
                                    });
                                },
                            },
                            {
                                key: "slideClickEvent",
                                value: function () {
                                    this.slides.forEach(function (e) {
                                        e.addEventListener("click", function (n) {
                                            n.preventDefault(), t(e);
                                        }),
                                            e.addEventListener("keyup", function (n) {
                                                n.preventDefault(), "Enter" === n.key && (t(e), document.querySelector('[class$="-closeButton"]').focus());
                                            });
                                    }),
                                        this.fullScreenButtons.forEach(function (e) {
                                            e.addEventListener("click", function (n) {
                                                var i = e.nextElementSibling.querySelector(".GallerySlideWaterfall img");
                                                n.preventDefault(), t(i);
                                            });
                                        });
                                    var t = function (t) {
                                        var e = t.closest("[data-slide-index]").dataset.slideIndex;
                                        document.body.dispatchEvent(new window.CustomEvent("GalleryPageCarousel:Open", { detail: { index: e } }));
                                    };
                                },
                            },
                        ]),
                        s
                    );
                })(),
                J = { mobile: ["mq-xs", "mq-sm", "mq-md"], desktop: ["mq-lg", "mq-hk", "mq-xl"] };
            // function Z() {
            //     var t = window.getComputedStyle(document.querySelector("body"), "::before").getPropertyValue("content") || !1;
            //     return !!t && t.replace(/["']/g, "");
            // }
            var tt = (function () {
                function e() {
                    t(this, e), (this.selector = ".GoogleDfpAd"), this.init();
                }
                return (
                    n(e, [
                        {
                            key: "init",
                            value: function () {
                                if (((this.currentMediaQuery = Z()), (this.googleAds = document.querySelectorAll(this.selector)), this.googleAds.length)) {
                                    var t = [];
                                    this.googleAds.forEach(function (e) {
                                        t.push(e);
                                    }),
                                        t.length > 0 && ("IntersectionObserver" in window ? this.modernBrowsers(t) : this.oldskool(t));
                                }
                            },
                        },
                        {
                            key: "sendAdserverRequest",
                            value: function () {
                                var t = this;
                                window.googletag.cmd.push(function () {
                                    window.googletag.pubads().refresh(window.dfpAdSlots), t.createResizeListener();
                                });
                            },
                        },
                        {
                            key: "modernBrowsers",
                            value: function (t) {
                                var e = this,
                                    n = new window.IntersectionObserver(function (t) {
                                        return t.forEach(function (t) {
                                            t.isIntersecting && (n.unobserve(t.target), e.processAndRequest(t.target));
                                        });
                                    });
                                t.forEach(function (t) {
                                    return n.observe(t);
                                });
                            },
                        },
                        {
                            key: "oldskool",
                            value: function (t) {
                                var e = this,
                                    n = !1,
                                    i = function () {
                                        !1 === n &&
                                            ((n = !0),
                                            setTimeout(function () {
                                                t.forEach(function (t) {
                                                    t.getBoundingClientRect().top <= window.innerHeight && t.getBoundingClientRect().bottom >= 0 && "none" !== window.getComputedStyle(t).display && e.processAndRequest(t);
                                                }),
                                                    (n = !1);
                                            }, 200));
                                    };
                                document.addEventListener("scroll", i), window.addEventListener("resize", i), window.addEventListener("orientationchange", i), i();
                            },
                        },
                        {
                            key: "processAndRequest",
                            value: function (t) {
                                this.processAd(t);
                            },
                        },
                        {
                            key: "processAd",
                            value: function (t) {
                                var n = this;
                                if (!e.hasProcessedAd(t)) {
                                    var i = t.getAttribute("data-hide-on-mobile") || !1,
                                        r = t.getAttribute("data-hide-on-desktop") || !1,
                                        o = !0;
                                    if ((("mq-xs" !== Z() && "mq-xs" !== Z()) || (o = !1), (o && r) || (!o && i))) t.parentNode.removeChild(t);
                                    else {
                                        var a,
                                            s = t.id,
                                            l = t.getAttribute("data-slot-name") || "",
                                            c = t.getAttribute("data-slot-sizes") || "",
                                            u = t.getAttribute("data-slot-adSizeMap") || "";
                                        void 0 !== window.googletag &&
                                            null !== window.googletag &&
                                            window.googletag.cmd.push(function () {
                                                a = window.googletag.defineSlot(l, JSON.parse(c), s).addService(window.googletag.pubads());
                                                var e = -1,
                                                    i = -1,
                                                    r = window.innerWidth;
                                                if (null != u && u.length > 0) {
                                                    var o = window.googletag.sizeMapping();
                                                    JSON.parse(u).forEach(function (t) {
                                                        var n = t.slice(1),
                                                            a = t[0][0],
                                                            s = !0;
                                                        1 === n.length && 0 === n[0][0] && 0 === n[0][1] && ((n = []), (s = !1)), void 0 !== a && a <= r && (s && a > i ? (i = a) : !s && a > e && (e = a)), o.addSize(t[0], n);
                                                    }),
                                                        a.defineSizeMapping(o.build());
                                                }
                                                e >= 0 && e > i && t.setAttribute("data-ad-size-map-hidden", !0), window.googletag.display(s), window.dfpAdSlots.push(a), n.sendAdserverRequest([a]);
                                            });
                                    }
                                }
                            },
                        },
                        {
                            key: "createResizeListener",
                            value: function () {
                                var t = this;
                                window.addEventListener(
                                    "resize",
                                    I(250, function () {
                                        Z() !== t.currentMediaQuery && ((t.currentMediaQuery = Z()), window.googletag.pubads().refresh());
                                    })
                                );
                            },
                        },
                    ]),
                    e
                );
            })();
            w(tt, "processedAds", {}),
                w(tt, "hasProcessedAd", function (t) {
                    var e = t.id;
                    if (tt.processedAds) return !!tt.processedAds[e] || ((tt.processedAds[e] = t), !1);
                });
            var et = (function () {
                function e() {
                    t(this, e);
                }
                return (
                    n(e, null, [
                        {
                            key: "createCookie",
                            value: function (t, e, n, i) {
                                var r,
                                    o = "";
                                (r = "; expires=" + (n ? new Date(parseInt(n)) : new Date(19249236e5)).toUTCString()), i && (o = ";domain=".concat(i)), (document.cookie = t + "=" + e + r + o + "; path=/");
                            },
                        },
                        {
                            key: "hasCookie",
                            value: function (t) {
                                return null != this.getCookie(t);
                            },
                        },
                        {
                            key: "getCookie",
                            value: function (t) {
                                var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]+)"));
                                if (e) return e[2];
                            },
                        },
                        {
                            key: "eraseCookie",
                            value: function (t, e) {
                                this.createCookie(t, "", 3155508e5, e);
                            },
                        },
                        {
                            key: "daysInUTC",
                            value: function (t) {
                                var e = new Date();
                                return e.setDate(e.getDate() + parseInt(t));
                            },
                        },
                    ]),
                    e
                );
            })();
            var nt = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "cookieName",
                            get: function () {
                                return this.getAttribute("cookie-name");
                            },
                        },
                        {
                            key: "input",
                            get: function () {
                                return this.querySelector("input");
                            },
                        },
                        {
                            key: "updateValue",
                            value: function () {
                                this.input.value = et.getCookie(this.cookieName);
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.updateValue();
                            },
                        },
                    ]),
                    s
                );
            })(d(HTMLElement));
            var it = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "input",
                            get: function () {
                                return this.querySelector("input");
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.input.value = document.referrer;
                            },
                        },
                    ]),
                    s
                );
            })(d(HTMLElement));
            function rt(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function (t, e) {
                            if (t) {
                                if ("string" == typeof t) return ot(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ot(t, e) : void 0;
                            }
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var o,
                    a = !0,
                    s = !1;
                return {
                    s: function () {
                        n = n.call(t);
                    },
                    n: function () {
                        var t = n.next();
                        return (a = t.done), t;
                    },
                    e: function (t) {
                        (s = !0), (o = t);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (s) throw o;
                        }
                    },
                };
            }
            function ot(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            var at = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(
                        s,
                        [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    (this.mapEl = this.querySelector(".Mapbox-map")),
                                        (this.filterEl = this.querySelector(".Mapbox-filters")),
                                        (this.accessToken = this.mapEl.getAttribute("data-mb-access-token")),
                                        (this.userName = this.mapEl.getAttribute("data-mb-username")),
                                        (this.styleId = this.mapEl.getAttribute("data-mb-style-id")),
                                        (this.disableZoom = this.hasAttribute("data-disable-zoom")),
                                        (this.features = []),
                                        (this.markers = {}),
                                        (this.markersOnScreen = {}),
                                        (this.currentMarkers = []),
                                        this.updateMarkers.bind(this),
                                        (this.language = new MapboxLanguage()),
                                        (this.mapConfig = { container: this.mapEl.id, style: "mapbox://styles/".concat(this.userName, "/").concat(this.styleId), center: [-76, 25], maxZoom: 10, minZoom: 1.5, zoom: 1.5 }),
                                        window.innerWidth < 768 && (this.mapConfig.center = [-76, 25]),
                                        (this.nodeColors = { "On-site solar": "#A6825E", "On-site solar - Whole Foods Market": "#014F36", "Solar farm": "#F99D2A", "Wind farm": "#8c297d", default: "#2972CB" }),
                                        this.filterEl && this.initializeFilterIcons(),
                                        this.initializeDataSets(),
                                        this.initializeMap(),
                                        this.initializeDisclaimer();
                                },
                            },
                            {
                                key: "initializeFilterIcons",
                                value: function () {
                                    var t = function (t) {
                                            var e = document.createElement("span");
                                            return e.setAttribute("data-map-node-icon", ""), (e.style.backgroundColor = t), e;
                                        },
                                        e = this.filterEl.querySelector(".MapFilterGroup:nth-child(1) label"),
                                        n = this.filterEl.querySelector(".MapFilterGroup:nth-child(2) label"),
                                        i = this.filterEl.querySelector('label[for="MapFilter_energyType_0"]'),
                                        r = this.filterEl.querySelector('label[for="MapFilter_energyType_1"]'),
                                        o = this.filterEl.querySelector('label[for="MapFilter_energyType_2"]'),
                                        a = this.filterEl.querySelector('label[for="MapFilter_energyType_3"]');
                                    e &&
                                        (i && (e.insertBefore(t(this.nodeColors["Wind farm"]), e.lastChild), i.insertBefore(t(this.nodeColors["Wind farm"]), i.lastChild)),
                                        r && (e.insertBefore(t(this.nodeColors["Solar farm"]), e.lastChild), r.insertBefore(t(this.nodeColors["Solar farm"]), r.lastChild)),
                                        o && (e.insertBefore(t(this.nodeColors["On-site solar"]), e.lastChild), o.insertBefore(t(this.nodeColors["On-site solar"]), o.lastChild)),
                                        a && (e.insertBefore(t(this.nodeColors["On-site solar - Whole Foods Market"]), e.lastChild), a.insertBefore(t(this.nodeColors["On-site solar - Whole Foods Market"]), a.lastChild))),
                                        n && n.insertBefore(t(this.nodeColors.default), n.lastChild);
                                },
                            },
                            {
                                key: "initializeDataSets",
                                value: function () {
                                    var t = this;
                                    this.dataSets = {};
                                    var e = this.querySelectorAll(".MapboxDataSet");
                                    Array.from(e).forEach(function (e) {
                                        var n = e.getAttribute("data-mb-dataset-name"),
                                            i = e.getAttribute("data-mb-dataset-id"),
                                            r = e.getAttribute("data-mb-tileset-id"),
                                            o = { dataSetId: i, tileSetId: r };
                                        i && (o.apiUrl = "https://api.mapbox.com/datasets/v1/".concat(t.userName, "/").concat(i, "/features?access_token=").concat(t.accessToken)), (i || r) && (t.dataSets[n] = o);
                                    }),
                                        (this.mapEl.innerHTML = "");
                                },
                            },
                            {
                                key: "initializeMap",
                                value: function () {
                                    var t = this;
                                    Promise.all([this.loadMapbox(), this.fetchMapData("aws"), this.fetchMapData("renewable"), this.fetchMapData("supplier")]).then(function () {
                                        t.map.addControl(t.language);
                                        var e = window.location.hostname.split("."),
                                            n = t.language.supportedLanguages;
                                        n.includes("it") || n.push("it");
                                        var i = e.filter(function (t) {
                                            return n.includes(t);
                                        });
                                        0 !== i.length &&
                                            (t.map.setLayoutProperty("country-label", "text-field", ["get", "name_" + i]),
                                            t.map.setLayoutProperty("water-line-label", "text-field", ["get", "name_" + i]),
                                            t.map.setLayoutProperty("water-point-label", "text-field", ["get", "name_" + i])),
                                            t.initializeLayer(),
                                            t.filterEl && t.initializeFilters(),
                                            t.initializePopup(),
                                            setTimeout(function () {
                                                t.updateMarkers();
                                            }, 2e3);
                                    });
                                },
                            },
                            {
                                key: "loadMapbox",
                                value: function () {
                                    var t = this;
                                    return new Promise(function (e) {
                                        (mapboxgl.accessToken = t.accessToken), (t.map = new mapboxgl.Map(t.mapConfig)), t.map.addControl(new mapboxgl.NavigationControl()), t.disableZoom && t.map.scrollZoom.disable(), t.map.on("load", e);
                                    });
                                },
                            },
                            {
                                key: "fetchMapData",
                                value: function (t) {
                                    var e = this;
                                    if (this.dataSets[t + "Data"])
                                        return window
                                            .fetch(this.dataSets[t + "Data"].apiUrl)
                                            .then(function (e) {
                                                if (e.ok) return e.json();
                                                throw new Error("No response when requesting" + t + " data");
                                            })
                                            .then(function (n) {
                                                e.dataSets[t + "Data"].features = n.features;
                                            });
                                },
                            },
                            {
                                key: "initializeLayer",
                                value: function () {
                                    var t,
                                        e,
                                        n,
                                        i = this;
                                    this.dataSets.supplierData &&
                                        (this.dataSets.supplierData.features.forEach(function (t) {
                                            var e = "engagementProgram",
                                                n = "productCategory";
                                            t.properties[e] &&
                                                t.properties[e].split(", ").forEach(function (n) {
                                                    t.properties[e + "|" + n] = !0;
                                                }),
                                                t.properties[n] &&
                                                    t.properties[n].split(", ").forEach(function (e) {
                                                        t.properties[n + "|" + e] = !0;
                                                    }),
                                                (t.properties.type = "Suppliers");
                                        }),
                                        (t = this.features).push.apply(t, b(this.dataSets.supplierData.features))),
                                        this.dataSets.renewableData && (e = this.features).push.apply(e, b(this.dataSets.renewableData.features)),
                                        this.dataSets.awsData && (n = this.features).push.apply(n, b(this.dataSets.awsData.features)),
                                        this.map.addSource("facilities", {
                                            type: "geojson",
                                            data: { type: "FeatureCollection", features: this.features },
                                            cluster: !0,
                                            clusterProperties: {
                                                wind: ["+", ["case", ["==", ["get", "energyType"], "Wind farm"], 1, 0]],
                                                solar: ["+", ["case", ["==", ["get", "energyType"], "Solar farm"], 1, 0]],
                                                onSiteSolar: ["+", ["case", ["==", ["get", "energyType"], "On-site solar"], 1, 0]],
                                                onSiteSolarWholeFoodMarkets: ["+", ["case", ["==", ["get", "energyType"], "On-site solar - Whole Foods Market"], 1, 0]],
                                                suppliers: ["+", ["case", ["==", ["get", "type"], "Suppliers"], 1, 0]],
                                            },
                                            clusterMaxZoom: 8,
                                            clusterRadius: 60,
                                        }),
                                        this.map.addLayer({
                                            id: "Facilities",
                                            type: "circle",
                                            source: "facilities",
                                            filter: ["!=", "cluster", !0],
                                            paint: {
                                                "circle-stroke-color": "#ffffff",
                                                "circle-stroke-width": 2,
                                                "circle-color": [
                                                    "match",
                                                    ["get", "energyType"],
                                                    "On-site solar",
                                                    this.nodeColors["On-site solar"],
                                                    "On-site solar - Whole Foods Market",
                                                    this.nodeColors["On-site solar - Whole Foods Market"],
                                                    "Solar farm",
                                                    this.nodeColors["Solar farm"],
                                                    "Wind farm",
                                                    this.nodeColors["Wind farm"],
                                                    this.nodeColors.default,
                                                ],
                                                "circle-radius": ["interpolate", ["exponential", 1.7], ["zoom"], 7, 6, this.mapConfig.maxZoom, 200],
                                                "circle-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, this.mapConfig.maxZoom, 0.25],
                                                "circle-stroke-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, this.mapConfig.maxZoom, 0.75],
                                            },
                                        }),
                                        this.map.on("data", function (t) {
                                            "facilities" === t.sourceId && t.isSourceLoaded && i.updateMarkers("clean");
                                        }),
                                        this.map.scrollZoom.disable(),
                                        this.map.on("move", this.updateMarkers.bind(this)),
                                        this.map.on("moveend", this.updateMarkers.bind(this));
                                },
                            },
                            {
                                key: "updateMarkers",
                                value: function (t) {
                                    var e = {},
                                        n = this.map.querySourceFeatures("facilities");
                                    if (t) {
                                        if (null !== this.currentMarkers) for (var i = this.currentMarkers.length - 1; i >= 0; i--) this.currentMarkers[i].remove();
                                        (this.markersOnScreen = {}), (this.markers = {});
                                    }
                                    for (var r = 0; r < n.length; r++) {
                                        var o = n[r].geometry.coordinates,
                                            a = n[r].properties;
                                        if (a.cluster) {
                                            var s = a.cluster_id,
                                                l = this.markers[s],
                                                c = this.map;
                                            if (!l) {
                                                var u = this.createDonutChart(a, o, c);
                                                l = this.markers[s] = new mapboxgl.Marker({ element: u }).setLngLat(o);
                                            }
                                            (e[s] = l), this.currentMarkers.push(l), this.markersOnScreen[s] || l.addTo(this.map);
                                        }
                                    }
                                    for (var h in this.markersOnScreen) e[h] || this.markersOnScreen[h].remove();
                                    this.markersOnScreen = e;
                                },
                            },
                            {
                                key: "createDonutChart",
                                value: function (t, e, n) {
                                    for (var i = [], r = [t.onSiteSolar, t.onSiteSolarWholeFoodMarkets, t.solar, t.wind, t.suppliers], o = 0, a = 0; a < r.length; a++) i.push(o), (o += r[a]);
                                    var s = o >= 1e3 ? 22 : o >= 100 ? 20 : o >= 10 ? 18 : 16,
                                        l = o >= 1e3 ? 50 : o >= 100 ? 32 : o >= 10 ? 24 : 18,
                                        c = Math.round(0.6 * l),
                                        u = 2 * l,
                                        h = '<div><svg width="' + u + '" height="' + u + '" viewbox="0 0 ' + u + " " + u + '" text-anchor="middle" style="font: ' + s + 'px sans-serif; display: block">';
                                    if (o > 0) {
                                        for (var d = 0; d < r.length; d++) {
                                            var f = Object.values(this.nodeColors);
                                            h += this.donutSegment(i[d] / o, (i[d] + r[d]) / o, l, c, f[d]);
                                        }
                                        h += '<circle cx="' + l + '" cy="' + l + '" r="' + c + '" fill="white" /><text dominant-baseline="central" transform="translate(' + l + ", " + l + ')">' + o.toLocaleString() + "</text></svg></div>";
                                        var p = document.createElement("div"),
                                            y = t.cluster_id;
                                        return (
                                            (p.innerHTML = h),
                                            (p.firstChild.onclick = function () {
                                                n.getSource("facilities").getClusterExpansionZoom(y, function (t, i) {
                                                    t || n.easeTo({ center: e, zoom: i + 1.5 });
                                                });
                                            }),
                                            p.firstChild
                                        );
                                    }
                                },
                            },
                            {
                                key: "donutSegment",
                                value: function (t, e, n, i, r) {
                                    e - t == 1 && (e -= 1e-5);
                                    var o = 2 * Math.PI * (t - 0.25),
                                        a = 2 * Math.PI * (e - 0.25),
                                        s = Math.cos(o),
                                        l = Math.sin(o),
                                        c = Math.cos(a),
                                        u = Math.sin(a),
                                        h = e - t > 0.5 ? 1 : 0;
                                    return [
                                        '<path d="M',
                                        n + i * s,
                                        n + i * l,
                                        "L",
                                        n + n * s,
                                        n + n * l,
                                        "A",
                                        n,
                                        n,
                                        0,
                                        h,
                                        1,
                                        n + n * c,
                                        n + n * u,
                                        "L",
                                        n + i * c,
                                        n + i * u,
                                        "A",
                                        i,
                                        i,
                                        0,
                                        h,
                                        0,
                                        n + i * s,
                                        n + i * l,
                                        '" fill="' + r + '" />',
                                    ].join(" ");
                                },
                            },
                            {
                                key: "initializePopup",
                                value: function () {
                                    var t = this;
                                    this.popup = new mapboxgl.Popup({ closeOnClick: !1 });
                                    var e = this.querySelector(".Mapbox-popupTemplate"),
                                        n = {
                                            supplier: e.getAttribute("data-label-supplier"),
                                            worker: e.getAttribute("data-label-worker"),
                                            women: e.getAttribute("data-label-women"),
                                            product: e.getAttribute("data-label-product"),
                                            size: e.getAttribute("data-label-size"),
                                            inDevelopment: e.getAttribute("data-label-in-development"),
                                        },
                                        i = e.innerHTML;
                                    e.remove(),
                                        this.map.on("click", "Facilities", function (e) {
                                            !(function (e) {
                                                var r = e.properties,
                                                    o = document.createElement("div");
                                                o.innerHTML = i;
                                                var a = o.querySelector(".popup-title"),
                                                    s = o.querySelector(".popup-location"),
                                                    l = o.querySelector(".popup-attributes"),
                                                    c = o.querySelector(".popup-participant"),
                                                    u = o.querySelector(".popup-description");
                                                (a.innerHTML = r.name),
                                                    (s.innerHTML = r.city),
                                                    r.state && r.state !== r.country && (s.innerHTML += ", " + r.state),
                                                    (s.innerHTML += " &bull; " + r.country),
                                                    r.energyType
                                                        ? ((l.innerHTML += "<span>".concat(r.energyType, "</span>")),
                                                          (l.innerHTML += "<span>".concat(r.size, " ").concat(n.size, "</span>")),
                                                          "In development" === r.date ? (l.innerHTML += "<span>".concat(n.inDevelopment, "</span>")) : (l.innerHTML += "<span>".concat(r.date, "</span>")),
                                                          (l.querySelector("[data-map-node-icon]").style.backgroundColor = t.nodeColors[r.energyType]))
                                                        : ((l.innerHTML += "<span>".concat(n.supplier, "</span>")),
                                                          r.workerCount && (l.innerHTML += "<span>".concat(r.workerCount, " ").concat(n.worker, "</span>")),
                                                          r.womenPercentage && (l.innerHTML += "<span>".concat(r.womenPercentage, " ").concat(n.women, "</span>")),
                                                          r.productCategory && (l.innerHTML += "<span>".concat(r.productCategory, "</span>")),
                                                          (l.querySelector("[data-map-node-icon]").style.backgroundColor = t.nodeColors.default)),
                                                    r.engagementProgram ? (c.innerHTML += r.engagementProgram) : c.remove(),
                                                    r.description ? (u.innerHTML += r.description) : u.remove(),
                                                    t.popup.remove(),
                                                    t.popup.setLngLat(e.geometry.coordinates),
                                                    t.popup.setHTML(o.innerHTML).addTo(t.map);
                                            })(e.features[0]);
                                        });
                                },
                            },
                            {
                                key: "initializeFilters",
                                value: function () {
                                    var t = this;
                                    this.addEventListener("mapFilterChange", function (e) {
                                        t.onMapFilterChange();
                                    }),
                                        this.onMapFilterChange();
                                },
                            },
                            {
                                key: "getFilterState",
                                value: function () {
                                    var t = this.filterEl.querySelectorAll(".MapFilter-options input"),
                                        e = {};
                                    return (
                                        Array.from(t).forEach(function (t) {
                                            if (t.checked) {
                                                var n = t.closest(".MapFilter").querySelector("[data-all-or-none-checkbox]");
                                                n.checked && !n.indeterminate ? (e[t.name] = !0) : (e[t.name] || (e[t.name] = []), e[t.name].push(t.value));
                                            }
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: "onMapFilterChange",
                                value: function () {
                                    this.popup && this.popup.remove();
                                    var t = this.getFilterState(),
                                        e = Object.keys(t),
                                        n = this.features.filter(function (n) {
                                            var i,
                                                r = rt(e);
                                            try {
                                                for (r.s(); !(i = r.n()).done; ) {
                                                    var o = i.value;
                                                    if (!0 === t[o]) {
                                                        if (Object.prototype.hasOwnProperty.call(n.properties, o)) return !0;
                                                    } else if ("energyType" === o) {
                                                        var a,
                                                            s = rt(t[o]);
                                                        try {
                                                            for (s.s(); !(a = s.n()).done; ) {
                                                                var l = a.value;
                                                                if (n.properties.energyType === l) return !0;
                                                            }
                                                        } catch (t) {
                                                            s.e(t);
                                                        } finally {
                                                            s.f();
                                                        }
                                                    } else if ("engagementProgram" === o) {
                                                        var c,
                                                            u = rt(t[o]);
                                                        try {
                                                            for (u.s(); !(c = u.n()).done; ) {
                                                                var h = c.value;
                                                                if (Object.prototype.hasOwnProperty.call(n.properties, o + "|" + h)) return !0;
                                                            }
                                                        } catch (t) {
                                                            u.e(t);
                                                        } finally {
                                                            u.f();
                                                        }
                                                    } else if ("productCategory" === o) {
                                                        var d,
                                                            f = rt(t[o]);
                                                        try {
                                                            for (f.s(); !(d = f.n()).done; ) {
                                                                var p = d.value;
                                                                if (Object.prototype.hasOwnProperty.call(n.properties, o + "|" + p)) return !0;
                                                            }
                                                        } catch (t) {
                                                            f.e(t);
                                                        } finally {
                                                            f.f();
                                                        }
                                                    } else {
                                                        if (t[o].includes(n.properties[o])) return !0;
                                                        if (Object.prototype.hasOwnProperty.call(n.properties, "womenPercentage") && !0 === t.workerCount) return !0;
                                                    }
                                                }
                                            } catch (t) {
                                                r.e(t);
                                            } finally {
                                                r.f();
                                            }
                                            return !1;
                                        });
                                    this.updateMapData("facilities", n), this.updateUrlWithFilters(t);
                                },
                            },
                            {
                                key: "updateMapData",
                                value: function (t, e) {
                                    this.map.getSource(t).setData({ type: "FeatureCollection", features: e });
                                },
                            },
                            {
                                key: "updateUrlWithFilters",
                                value: function (t, e) {
                                    for (var n = new window.URLSearchParams(t).toString(), i = s.getParameterByName("token"), r = window.location.search.split(/&|"?"/), o = "", a = 0; a < r.length; a++) r[a].includes("token") && (o = r[a]);
                                    i && -1 !== window.location.href.indexOf("token") && (n = n + (n ? "&" : "?") + o), window.history.replaceState({}, document.title, "?" + n);
                                },
                            },
                            {
                                key: "initializeDisclaimer",
                                value: function () {
                                    var t = this.querySelector(".Mapbox-disclaimer");
                                    if (t) {
                                        var e = t.querySelector(".Mapbox-disclaimer-close-button"),
                                            n = "data-disclaimer-open";
                                        e.addEventListener("click", function (e) {
                                            t.hasAttribute(n) ? t.removeAttribute(n) : t.setAttribute(n, "");
                                        });
                                    }
                                },
                            },
                        ],
                        [
                            {
                                key: "getParameterByName",
                                value: function (t, e) {
                                    e || (e = window.location.href), (t = t.replace(/[[\]]/g, "\\$&"));
                                    var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                                    return n ? (n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "") : null;
                                },
                            },
                        ]
                    ),
                    s
                );
            })(d(HTMLElement));
            var st = (function (e) {
                    r(s, e);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this,
                                        e = "data-filters-open",
                                        n = this.querySelector(".Mapbox-filters-pane"),
                                        i = this.parentElement.offsetHeight,
                                        r = this.parentElement.querySelector(".Mapbox-disclaimer") ? this.parentElement.querySelector(".Mapbox-disclaimer").offsetHeight : 0;
                                    n && i && (n.style.maxHeight = i - 40 - r + "px");
                                    var o = !1;
                                    this.hasAttribute("data-promo-map") && (o = !0),
                                        this.isMobile || o || (document.querySelector(".Mapbox-filters").setAttribute(e, ""), document.querySelector(".Mapbox-filters-button").setAttribute(e, "")),
                                        (this.mapModule = this.closest(".Mapbox"));
                                    var a = this.querySelectorAll(".MapFilterGroup-title"),
                                        s = "data-filter-group-collapsed";
                                    Array.from(a).forEach(function (t) {
                                        var e = t.closest(".MapFilterGroup");
                                        t.addEventListener("click", function (t) {
                                            t.target.matches(".MapFilterGroup-title") && (e.hasAttribute(s) ? e.removeAttribute(s) : e.setAttribute(s, ""));
                                        });
                                    });
                                    var l = document.querySelector(".Mapbox-filters-button");
                                    l.addEventListener("click", function (n) {
                                        t.hasAttribute(e) ? t.removeAttribute(e) : t.setAttribute(e, ""), l.hasAttribute(e) ? l.removeAttribute(e) : l.setAttribute(e, "");
                                    }),
                                        this.initializeCheckboxStates(),
                                        this.addEventListener("change", this.onCheckboxChange, !1),
                                        this.triggerFilterChangeEvent();
                                },
                            },
                            {
                                key: "isMobile",
                                get: function () {
                                    return !!window.matchMedia("(max-width: 1024px)").matches;
                                },
                            },
                            {
                                key: "initializeCheckboxStates",
                                value: function () {
                                    var t = this,
                                        e = new window.URLSearchParams(window.location.search);
                                    if (Array.from(e).length) {
                                        var n = this.querySelectorAll('input[type="checkbox"]');
                                        Array.from(n).forEach(function (t) {
                                            t.checked = !1;
                                        });
                                        var i = e.getAll("filterBy");
                                        if (i.length) {
                                            var r = this.querySelectorAll(".MapFilterGroup-title [data-all-or-none-checkbox]");
                                            return void Array.from(r).forEach(function (e, n) {
                                                0 === n ? (e.checked = i.includes("renewable")) : 1 === n && (e.checked = i.includes("supply")), t.updateChildCheckboxes(e);
                                            });
                                        }
                                        e.forEach(function (e, n) {
                                            try {
                                                if ("true" === e) {
                                                    var i = document.getElementById("MapFilter_" + n);
                                                    (i.checked = !0), t.updateChildCheckboxes(i);
                                                } else
                                                    e.split(",").forEach(function (e) {
                                                        t.querySelector('input[type="checkbox"][name="' + n + '"][value="' + e + '"]').checked = !0;
                                                    });
                                            } catch (t) {}
                                        }),
                                            this.updateAllOrNoneCheckboxes();
                                    }
                                },
                            },
                            {
                                key: "onCheckboxChange",
                                value: function (t) {
                                    var e = t.target;
                                    e.matches("[data-all-or-none-checkbox]") && this.updateChildCheckboxes(e), this.updateAllOrNoneCheckboxes(), this.triggerFilterChangeEvent();
                                },
                            },
                            {
                                key: "updateChildCheckboxes",
                                value: function (t) {
                                    var e = t.closest(".MapFilter, .MapFilterGroup").querySelectorAll("input");
                                    Array.from(e).forEach(function (e) {
                                        e !== t && (e.checked = t.checked);
                                    });
                                },
                            },
                            {
                                key: "updateAllOrNoneCheckboxes",
                                value: function () {
                                    var t = this.querySelectorAll("[data-all-or-none-checkbox]");
                                    Array.from(t).forEach(function (t) {
                                        var e = t.closest(".MapFilter, .MapFilterGroup"),
                                            n = e.querySelectorAll("input:not([data-all-or-none-checkbox])"),
                                            i = e.querySelectorAll("input:not([data-all-or-none-checkbox]):checked");
                                        i.length ? (i.length < n.length ? ((t.checked = !0), (t.indeterminate = !0)) : ((t.checked = !0), (t.indeterminate = !1))) : ((t.checked = !1), (t.indeterminate = !1));
                                    });
                                },
                            },
                            {
                                key: "triggerFilterChangeEvent",
                                value: function () {
                                    var t = new CustomEvent("mapFilterChange");
                                    this.mapModule.dispatchEvent(t);
                                },
                            },
                        ]),
                        s
                    );
                })(d(HTMLElement)),
                lt = function e() {
                    t(this, e);
                    var n = document.querySelectorAll("[data-animate-on-scroll]"),
                        i = { threshold: 0.25 };
                    n.forEach(function (t) {
                        t.setAttribute("data-not-scrolled", !0);
                    }),
                        n.forEach(function (t) {
                            new window.IntersectionObserver(function (t) {
                                t.forEach(function (t) {
                                    var e = t.target;
                                    t.isIntersecting && (e.removeAttribute("data-not-scrolled"), e.setAttribute("data-scrolled", !0));
                                });
                            }, i).observe(t);
                        });
                };
            var ct = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    new window.IntersectionObserver(function (t) {
                                        t.forEach(function (t) {
                                            var e = t.target.querySelector("video");
                                            t.isIntersecting ? e.play() : e.pause();
                                        });
                                    }).observe(this);
                                },
                            },
                        ]),
                        s
                    );
                })(),
                ut = (function () {
                    function e(n, i) {
                        t(this, e), w(this, "timerId", void 0), w(this, "start", void 0), w(this, "remaining", void 0), (this.callback = n), (this.delay = i), (this.remaining = this.delay), (this.timerId = ""), this.resume();
                    }
                    return (
                        n(e, [
                            {
                                key: "pause",
                                value: function () {
                                    window.clearTimeout(this.timerId), (this.remaining -= Date.now() - this.start);
                                },
                            },
                            {
                                key: "resume",
                                value: function () {
                                    (this.start = Date.now()), window.clearTimeout(this.timerId), (this.timerId = window.setTimeout(this.callback, this.remaining));
                                },
                            },
                            {
                                key: "cancel",
                                value: function () {
                                    window.clearTimeout(this.timerId), (this.remaining = this.delay);
                                },
                            },
                        ]),
                        e
                    );
                })();
            var ht = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                (this.slidesContainer = this.querySelector("[data-slides]")),
                                    (this.slideItems = b(this.querySelectorAll("[data-slide]"))),
                                    (this.navigationItems = b(this.querySelectorAll("[data-navigation-item]"))),
                                    (this.carouselSpeed = 1e3 * +this.getAttribute("data-carousel-speed")),
                                    (this.autoPlay = this.hasAttribute("data-carousel-auto-play")),
                                    this.style.setProperty("--carouselSpeed", "".concat(this.carouselSpeed, "ms")),
                                    this.bindEvents(),
                                    this.selectSlide(0);
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                var t = this;
                                this.slidesContainer.addEventListener("mouseenter", function () {
                                    t.setAttribute("data-paused", ""), t.timer && t.timer.pause();
                                }),
                                    this.slidesContainer.addEventListener("mouseleave", function () {
                                        t.removeAttribute("data-paused"), t.timer && t.timer.resume();
                                    }),
                                    this.navigationItems.forEach(function (e, n) {
                                        e.addEventListener("click", function () {
                                            t.selectSlide(n);
                                        });
                                    });
                            },
                        },
                        {
                            key: "nextSlide",
                            value: function () {
                                var t = this.slideItems.findIndex(function (t) {
                                    return t.hasAttribute("data-active");
                                });
                                this.selectSlide((t + 1) % this.slideItems.length);
                            },
                        },
                        {
                            key: "selectSlide",
                            value: function (t) {
                                var e = this;
                                this.slideItems.forEach(function (e, n) {
                                    t === n ? e.setAttribute("data-active", "") : e.removeAttribute("data-active");
                                }),
                                    this.navigationItems.forEach(function (e, n) {
                                        t === n ? e.setAttribute("data-active", "") : e.removeAttribute("data-active");
                                    }),
                                    this.timer && this.timer.cancel(),
                                    this.autoPlay &&
                                        (this.timer = new ut(function () {
                                            e.nextSlide();
                                        }, this.carouselSpeed));
                            },
                        },
                    ]),
                    s
                );
            })();
            var dt = (function (e) {
                r(h, window.HTMLElement);
                var i,
                    o,
                    s,
                    u =
                        ((o = h),
                        (s = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(o);
                            if (s) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function h() {
                    return t(this, h), u.apply(this, arguments);
                }
                return (
                    n(h, [
                        {
                            key: "connectedCallback",
                            value:
                                ((i = O(
                                    C().mark(function t() {
                                        var e,
                                            n,
                                            i = this;
                                        return C().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (t.next = 2), a.e(442).then(a.t.bind(a, 2442, 23));
                                                        case 2:
                                                            (e = t.sent),
                                                                (n = e.default),
                                                                (this.carouselSlides = this.querySelector('[class$="-items"]') || this),
                                                                window.addEventListener("load", function () {
                                                                    (i.carouselOptions = { adaptiveHeight: !1, cellAlign: "left", imagesLoaded: !0, lazyLoad: 2, pageDots: !1, prevNextButtons: !1, watchCSS: !0 }),
                                                                        i.classList.contains("PageListCarouselA") &&
                                                                            (i.carouselOptions = { adaptiveHeight: !0, cellAlign: "left", groupCells: "100%", imagesLoaded: !0, lazyLoad: 2, pageDots: !1, watchCSS: !0 }),
                                                                        (i.classList.contains("PageListCarouselB") || i.classList.contains("PageListCarouselD")) &&
                                                                            (i.carouselOptions = { adaptiveHeight: !1, cellAlign: "left", groupCells: "100%", imagesLoaded: !0, lazyLoad: 2, pageDots: !1 }),
                                                                        i.classList.contains("AuthorListB") && (i.carouselOptions = { adaptiveHeight: !1, cellAlign: "left", groupCells: "100%", imagesLoaded: !0, lazyLoad: 2, pageDots: !1 }),
                                                                        i.classList.contains("PageListCarouselC") &&
                                                                            (i.carouselOptions = { adaptiveHeight: !0, cellAlign: "left", imagesLoaded: !0, lazyLoad: 2, prevNextButtons: !0, pageDots: !1 }),
                                                                        i.classList.contains("QuoteListA") && (i.carouselOptions = { adaptiveHeight: !1, cellAlign: "left", imagesLoaded: !0, lazyLoad: 2, prevNextButtons: !0, pageDots: !1 }),
                                                                        i.classList.contains("LogoListA") &&
                                                                            (i.carouselOptions = { adaptiveHeight: !0, cellAlign: "left", imagesLoaded: !0, lazyLoad: 2, prevNextButtons: !0, pageDots: !1, wrapAround: !0 }),
                                                                        (i.carouselOptions.on = {
                                                                            ready: function () {
                                                                                i.repositionArrows();
                                                                            },
                                                                        }),
                                                                        (i.flickity = new n(i.carouselSlides, i.carouselOptions)),
                                                                        window.addEventListener(
                                                                            "resize",
                                                                            I(50, function () {
                                                                                i.repositionArrows();
                                                                            })
                                                                        );
                                                                });
                                                        case 6:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: "disconnectedCallback",
                            value: function () {
                                this.flickity.destroy();
                            },
                        },
                        {
                            key: "repositionArrows",
                            value: function () {
                                var t = this.querySelector(".Promo-media");
                                if (t) {
                                    var e = t.offsetHeight;
                                    this.querySelectorAll(".flickity-prev-next-button").forEach(function (t) {
                                        t.style.top = "".concat(e / 2, "px");
                                    });
                                }
                            },
                        },
                    ]),
                    h
                );
            })();
            var ft = (function (e) {
                    r(h, window.HTMLElement);
                    var i,
                        o,
                        s,
                        u =
                            ((o = h),
                            (s = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(o);
                                if (s) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function h() {
                        return t(this, h), u.apply(this, arguments);
                    }
                    return (
                        n(h, [
                            {
                                key: "connectedCallback",
                                value:
                                    ((i = O(
                                        C().mark(function t() {
                                            var e,
                                                n,
                                                i = this;
                                            return C().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (t.next = 2), a.e(541).then(a.t.bind(a, 7541, 23));
                                                            case 2:
                                                                (e = t.sent),
                                                                    (n = e.default),
                                                                    (this.carouselSlides = this.querySelector(".PageList-items") || this),
                                                                    (this.carouselNav = this.querySelector(".PageList-timeline")),
                                                                    window.addEventListener("load", function () {
                                                                        (i.carouselOptions = { adaptiveHeight: !1, cellAlign: "left", imagesLoaded: !0, lazyLoad: 2, contain: !1, pageDots: !1, prevNextButtons: !0, watchCSS: !0 }),
                                                                            (i.carouselOptions.on = {
                                                                                ready: function () {
                                                                                    setTimeout(i.onResizeEvents.bind(i), 1), setTimeout(i.updateAccessibility.bind(i), 1);
                                                                                },
                                                                                scroll: I(100, function () {
                                                                                    i.updateAccessibility();
                                                                                }),
                                                                            }),
                                                                            (i.flickity = new n(i.carouselSlides, i.carouselOptions)),
                                                                            i.carouselNav &&
                                                                                (i.flickityNav = new n(i.carouselNav, {
                                                                                    asNavFor: i.carouselSlides,
                                                                                    contain: !0,
                                                                                    pageDots: !1,
                                                                                    cellAlign: "left",
                                                                                    prevNextButtons: !1,
                                                                                    on: {
                                                                                        ready: function () {
                                                                                            setTimeout(function () {
                                                                                                setTimeout(i.updateNavAccessibility.bind(i), 1);
                                                                                            }, 1);
                                                                                        },
                                                                                        scroll: I(100, function (t) {
                                                                                            i.updateNavAccessibility(), i.carouselNav.classList.toggle("fade-edge", t < 0.9);
                                                                                        }),
                                                                                    },
                                                                                })),
                                                                            window.addEventListener("resize", I(50, i.onResizeEvents.bind(i)));
                                                                    });
                                                            case 7:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return i.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "repositionArrows",
                                value: function () {
                                    var t = this.querySelector(".Promo-media");
                                    if (t) {
                                        var e = t.offsetHeight;
                                        this.querySelectorAll(".flickity-prev-next-button").forEach(function (t) {
                                            t.style.top = "".concat(e / 2, "px");
                                        });
                                    }
                                },
                            },
                            {
                                key: "setCellAlignment",
                                value: function () {
                                    var t = this.carouselSlides.clientWidth,
                                        e = this.carouselSlides.querySelector(".PageList-items-item").clientWidth;
                                    window.innerWidth >= 1440
                                        ? (this.flickity.options.cellAlign = this.carouselNav.getBoundingClientRect().left / (t - e))
                                        : window.innerWidth >= 1024
                                        ? (this.flickity.options.cellAlign = 162 / t)
                                        : (this.flickity.options.cellAlign = "center");
                                },
                            },
                            {
                                key: "updateAccessibility",
                                value: function (t) {
                                    var e = this;
                                    t || (t = this.carouselSlides),
                                        t.querySelectorAll(".flickity-slider > [class*=-item]").forEach(function (n) {
                                            e.isVisible(n, t) ? (n.removeAttribute("aria-hidden"), (n.style.visibility = "")) : (n.setAttribute("aria-hidden", "true"), (n.style.visibility = "hidden"));
                                        });
                                },
                            },
                            {
                                key: "updateNavAccessibility",
                                value: function () {
                                    this.updateAccessibility(this.carouselNav);
                                },
                            },
                            {
                                key: "isVisible",
                                value: function (t, e) {
                                    var n = e.getBoundingClientRect(),
                                        i = t.getBoundingClientRect().left + t.clientWidth;
                                    return i > n.left && i - t.clientWidth < e.clientWidth + n.left;
                                },
                            },
                            {
                                key: "onResizeEvents",
                                value: function () {
                                    this.setCellAlignment(), this.repositionArrows(), this.flickity.resize(), this.flickityNav.resize();
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    this.flickity.destroy(), this.flickityNav.destroy();
                                },
                            },
                        ]),
                        h
                    );
                })(),
                pt = a(8751),
                yt = a.n(pt),
                vt = a(7564),
                mt = a.n(vt);
            var gt = { selItems: "[data-list-loadmore-items]", selPagination: "[data-list-loadmore-pagination]", pageCacheRegex: /(page|p)=([0-9]*)$/ },
                bt = "data-list-loadmore",
                wt = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(
                            s,
                            [
                                {
                                    key: "connectedCallback",
                                    value: function (t) {
                                        (this.el = this), (this.settings = Object.assign({}, gt, t)), this.el.setAttribute(bt, ""), (this.pageHrefCache = [1]), (this.minMasonryWidth = 768), this.init();
                                    },
                                },
                                {
                                    key: "init",
                                    value: function () {
                                        (this.elItems = this.el.querySelector(this.settings.selItems)),
                                            this.setBinds(),
                                            this.getAttribute("data-use-masonry") && (this.initMasonry(), window.addEventListener("resize", this.refreshMasonry.bind(this)));
                                    },
                                },
                                {
                                    key: "initMasonry",
                                    value: function () {
                                        var t = this;
                                        !this.msnry &&
                                            this.isMasonryViewport() &&
                                            ((this.msnry = new (yt())(this.elItems, { itemSelector: "[class*=-items-item]", horizontalOrder: !0 })),
                                            mt()(this.elItems).on("progress", function () {
                                                t.msnry.layout();
                                            }));
                                    },
                                },
                                {
                                    key: "destroyMasonry",
                                    value: function () {
                                        this.msnry && (this.msnry.destroy(), (this.msnry = null));
                                    },
                                },
                                {
                                    key: "isMasonryViewport",
                                    value: function () {
                                        return (window.innerWidth || document.body.clientWidth) >= this.minMasonryWidth;
                                    },
                                },
                                {
                                    key: "refreshMasonry",
                                    value: function () {
                                        this.isMasonryViewport() ? this.initMasonry() : this.destroyMasonry();
                                    },
                                },
                                {
                                    key: "loadMore",
                                    value: function (t, e) {
                                        var n = this,
                                            i = this,
                                            r = this.el.className,
                                            o = s.findClassNameMatches(document, r),
                                            a = Array.from(o).indexOf(this.el);
                                        this.pageHrefCache.push(this.getPageNum(t)),
                                            this.el.setAttribute(bt, "loading"),
                                            window
                                                .fetch(t, { credentials: "include" })
                                                .then(function (t) {
                                                    return n.el.setAttribute(bt, ""), t.text();
                                                })
                                                .then(function (t) {
                                                    var o = document.createElement("div");
                                                    o.innerHTML = t;
                                                    var l = s.findClassNameMatches(o, r),
                                                        c = l[a].querySelector(i.settings.selItems),
                                                        u = l[a].querySelector(i.settings.selPagination);
                                                    "function" == typeof e ? e(c, u, l[a]) : n.render(c, u, i.elItems, i.elPagination);
                                                })
                                                .catch(function (t) {
                                                    console.log(t);
                                                });
                                    },
                                },
                                {
                                    key: "next",
                                    value: function (t) {
                                        if (this.elPagination) {
                                            var e = this.elPagination.querySelector("a");
                                            e && this.loadMore(e.href, t);
                                        }
                                    },
                                },
                                {
                                    key: "setBinds",
                                    value: function () {
                                        var t = this;
                                        this.elPagination &&
                                            this.elPagination.addEventListener("click", function (e) {
                                                var n = e.target;
                                                "A" === n.nodeName.toUpperCase() && (e.preventDefault(), t.loadMore(n.href));
                                            });
                                    },
                                },
                                {
                                    key: "getPageNum",
                                    value: function (t) {
                                        try {
                                            var e = this.settings.pageCacheRegex.exec(t);
                                            return parseInt(e[2]);
                                        } catch (e) {
                                            return console.info("ListLoadMore", "".concat(t, " not a new page number")), 0;
                                        }
                                    },
                                },
                                {
                                    key: "updatePaginationDOM",
                                    value: function (t) {
                                        var e = this;
                                        b(t.querySelectorAll(":scope > a")).forEach(function (t) {
                                            e.pageHrefCache.indexOf(e.getPageNum(t.href)) >= 0 && t.parentNode.removeChild(t);
                                        }),
                                            (this.elPagination.innerHTML = t.innerHTML);
                                    },
                                },
                                {
                                    key: "elPagination",
                                    get: function () {
                                        return this.el.querySelector(this.settings.selPagination);
                                    },
                                },
                                {
                                    key: "render",
                                    value: function (t, e) {
                                        t && this.elItems.insertAdjacentHTML("beforeend", t.innerHTML), e ? this.updatePaginationDOM(e) : this.elPagination.parentNode.removeChild(this.elPagination), this.dispatchRendered();
                                    },
                                },
                                {
                                    key: "dispatchRendered",
                                    value: function () {
                                        var t = new window.CustomEvent("Ajax:Rendered", { bubbles: !0 });
                                        document.body.dispatchEvent(t);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "findClassNameMatches",
                                    value: function (t, e) {
                                        return t.querySelectorAll("[class=".concat(e, "]"));
                                    },
                                },
                            ]
                        ),
                        s
                    );
                })(),
                kt = a(3876),
                Et = a.n(kt);
            var St = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    this.cacheElements(), this.handleEventListeners(), this.dealWithMenuHover();
                                },
                            },
                            {
                                key: "cacheElements",
                                value: function () {
                                    (this.menuButton = this.querySelector(".Page-header-menu-trigger")),
                                        (this.hamburgerMenu = this.querySelector(".Page-header-hamburger-menu")),
                                        (this.navigationItems = this.hamburgerMenu.querySelectorAll(".NavigationItem")),
                                        (this.navigationItemsItem = this.querySelectorAll('[class$="Navigation-items-item"]')),
                                        (this.headerBar = document.querySelector(".Page-header-bar")),
                                        (this.menuWrapper = this.querySelector(".Page-header-hamburger-menu-wrapper")),
                                        (this.searchOverlay = document.querySelector(".SearchOverlay")),
                                        (this.headerContainer = document.querySelector("#Page-header-container")),
                                        (this.headerTopBar = this.querySelector("#Page-header-row1")),
                                        (this.headerNav = this.querySelector("#Page-header-row2")),
                                        (this.lastScrollPos = 0),
                                        (this.scrollSensibility = 20),
                                        (this.hideTopBarPos = this.headerTopBar.clientHeight),
                                        (this.hideHeaderPos = 450),
                                        (this.pageLoaded = !1),
                                        this.setAttribute("data-header-state", "full");
                                },
                            },
                            {
                                key: "dealWithMenuHover",
                                value: function () {
                                    var t = this;
                                    this.navigationItemsItem.forEach(function (e) {
                                        e.querySelector(".NavigationItem-more") &&
                                            ((t.hoverListener = Et()(
                                                e,
                                                function () {
                                                    t.openNavItem(e, "hover");
                                                },
                                                function () {
                                                    t.closeNavItem(e, "hover");
                                                }
                                            ).options({ timeout: 400, interval: 150, handleFocus: !0 })),
                                            e.querySelector(".NavigationItem-more").addEventListener("keyup", function (n) {
                                                ("Enter" !== n.key && 32 !== n.keyCode) || (t.closeOpenNavItem(), t.openNavItem(e, "hover"), e.querySelector("a.NavigationLink").focus());
                                            }));
                                    });
                                },
                            },
                            {
                                key: "handleEventListeners",
                                value: function () {
                                    var t = this;
                                    window.addEventListener(
                                        "scroll",
                                        I(50, function (e) {
                                            var n = document.body.scrollTop || document.documentElement.scrollTop;
                                            n > 0 ? document.body.setAttribute("data-scrolling", !0) : document.body.removeAttribute("data-scrolling"),
                                                n > t.hideTopBarPos && t.isScrollingDown(n) ? (n > t.hideHeaderPos ? t.hideHeader() : t.hideHeaderTopBar()) : (t.showHeader(), t.showHeaderTopBar()),
                                                t.pageLoaded && (!n || Math.abs(n - t.lastScrollPos) > t.scrollSensibility) && (t.lastScrollPos = n);
                                        })
                                    ),
                                        window.addEventListener("load", function (e) {
                                            t.pageLoaded = !0;
                                        }),
                                        document.addEventListener("keydown", function (e) {
                                            e.target.closest('[class$="NavigationItem-items"]') || e.metaKey || e.ctrlKey || e.shiftKey || t.closeOpenNavItem();
                                        }),
                                        this.menuButton &&
                                            this.menuButton.addEventListener("click", function (e) {
                                                e.preventDefault(), t.isMenuOpen() ? t.closeMenu() : (t.closeSearch(), t.openMenu());
                                            }),
                                        this.navigationItems &&
                                            this.navigationItems.forEach(function (e) {
                                                e.querySelector(".NavigationItem-more") &&
                                                    e.querySelector(".NavigationItem-more").addEventListener("click", function (n) {
                                                        n.preventDefault(), t.openNavItem(e, "click");
                                                    });
                                            });
                                },
                            },
                            {
                                key: "openNavItem",
                                value: function (t, e) {
                                    if (t)
                                        if (t.getAttribute("data-item-" + e)) t.removeAttribute("data-item-" + e);
                                        else {
                                            this.navigationItems.forEach(function (t) {
                                                t.removeAttribute("data-item-" + e);
                                            }),
                                                t.setAttribute("data-item-" + e, !0);
                                            var n = t.querySelector(".NavigationItem-items");
                                            n && n.getBoundingClientRect().right > window.innerWidth - 20 && n.setAttribute("data-open-direction", "left");
                                        }
                                },
                            },
                            {
                                key: "closeNavItem",
                                value: function (t, e) {
                                    t.removeAttribute("data-item-" + e);
                                },
                            },
                            {
                                key: "closeOpenNavItem",
                                value: function () {
                                    this.querySelector("[data-item-hover]") && this.querySelector("[data-item-hover]").removeAttribute("data-item-hover");
                                },
                            },
                            {
                                key: "openMenu",
                                value: function () {
                                    document.body.setAttribute("data-toggle-header", "hamburger-menu"),
                                        this.setAttribute("data-toggle-header", "hamburger-menu"),
                                        this.menuButton.setAttribute("aria-expanded", "true"),
                                        this.hamburgerMenu.focus();
                                },
                            },
                            {
                                key: "closeMenu",
                                value: function () {
                                    this.isMenuOpen() && (document.body.removeAttribute("data-toggle-header"), this.removeAttribute("data-toggle-header"), this.menuButton.setAttribute("aria-expanded", "false"));
                                },
                            },
                            {
                                key: "closeSearch",
                                value: function () {
                                    document.body.removeAttribute("data-toggle-header"), this.searchOverlay && this.searchOverlay.removeAttribute("data-toggle-header");
                                },
                            },
                            {
                                key: "isMenuOpen",
                                value: function () {
                                    return "hamburger-menu" === document.body.getAttribute("data-toggle-header");
                                },
                            },
                            {
                                key: "hideHeaderTopBar",
                                value: function () {
                                    (this.headerTopBar.style.top = -this.headerTopBar.clientHeight + "px"),
                                        (this.headerNav.style.top = 0),
                                        (this.headerContainer.style.top = -this.headerTopBar.clientHeight + "px"),
                                        this.setAttribute("data-header-state", "compact"),
                                        this.dispatchEvent(new Event("stateChange"));
                                },
                            },
                            {
                                key: "showHeaderTopBar",
                                value: function () {
                                    (this.headerTopBar.style.top = ""), (this.headerNav.style.top = ""), (this.headerContainer.style.top = ""), this.setAttribute("data-header-state", "full"), this.dispatchEvent(new Event("stateChange"));
                                },
                            },
                            {
                                key: "hideHeader",
                                value: function () {
                                    (this.headerTopBar.style.top = -this.headerTopBar.clientHeight - this.headerNav.clientHeight + "px"),
                                        (this.headerNav.style.top = -this.headerNav.clientHeight + "px"),
                                        (this.headerContainer.style.top = -this.headerContainer.clientHeight + "px"),
                                        this.setAttribute("data-header-state", "hidden"),
                                        this.dispatchEvent(new Event("stateChange"));
                                },
                            },
                            {
                                key: "showHeader",
                                value: function () {
                                    (this.headerTopBar.style.top = ""), (this.headerNav.style.top = ""), (this.headerContainer.style.top = ""), this.setAttribute("data-header-state", "full"), this.dispatchEvent(new Event("stateChange"));
                                },
                            },
                            {
                                key: "isScrollingDown",
                                value: function (t) {
                                    return t > this.lastScrollPos;
                                },
                            },
                        ]),
                        s
                    );
                })(),
                Lt = "data-collapse-toggle",
                At = { collapsed: !0, selGroup: !1 },
                Pt = (function () {
                    function e(n, i) {
                        t(this, e), (this.settings = Object.assign({}, At, JSON.parse(n.getAttribute(Lt)), i)), (this.el = n), (this.el.collapseApi = this), (this.toggle = this.toggle.bind(this)), this.build();
                    }
                    return (
                        n(e, [
                            {
                                key: "resetSelectorSettings",
                                value: function () {
                                    this.selectorSettings = Object.assign({}, this.settings);
                                },
                            },
                            {
                                key: "toggle",
                                value: function () {
                                    this.collapsed = !this.collapsed;
                                },
                            },
                            {
                                key: "build",
                                value: function () {
                                    this.resetSelectorSettings(), (this.selectorSettings.active = !0), (this.collapsed = this.settings.collapsed), this.el.addEventListener("click", this.toggle);
                                },
                            },
                            {
                                key: "collapsed",
                                get: function () {
                                    return this._collapsed;
                                },
                                set: function (t) {
                                    t !== this._collapsed &&
                                        ((this._collapsed = t),
                                        (this.selectorSettings.state = t ? "collapsed" : "expanded"),
                                        this.el.setAttribute(Lt, JSON.stringify(this.selectorSettings)),
                                        this.elGroup && !t && this.elGroup.collapseAll(this.el));
                                },
                            },
                            {
                                key: "elGroup",
                                get: function () {
                                    var t = this;
                                    return (
                                        this.settings.selGroup &&
                                            (this._elGroup ||
                                                ((this._elGroup = b(document.querySelectorAll(this.settings.selGroup))),
                                                (this._elGroup.collapseAll = function (e) {
                                                    t._elGroup.forEach(function (t) {
                                                        t.getAttribute(Lt) && e !== t && (t.collapseApi.collapsed = !0);
                                                    });
                                                }))),
                                        this._elGroup
                                    );
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    this.build();
                                },
                            },
                        ]),
                        e
                    );
                })();
            var Rt = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this.querySelector(".SecondLevelNavigationItem-text");
                                t && (this.collapseObj = new Pt(t, { collapsed: !0 }));
                            },
                        },
                    ]),
                    s
                );
            })();
            var xt = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.cacheElements(), this.handleFiltersOverlay(), this.handleSortSelect(), this.handleFiltersApply(), this.handleFiltersSelect(), this.handleSelectedFiltersReset(), this.gatherSelectedFilters();
                            },
                        },
                        {
                            key: "cacheElements",
                            value: function () {
                                (this.searchResultsModule = document.querySelector(".SearchResultsModule")),
                                    (this.searchForm = document.querySelector(".SearchResultsModule-form")),
                                    (this.searchSort = this.querySelector(".SearchResultsModule-sorts select")),
                                    (this.filtersOpenButton = this.querySelectorAll(".SearchResultsModule-filters-open")),
                                    (this.filtersCloseButton = this.querySelector(".SearchResultsModule-filters-close")),
                                    (this.filtersOverlay = this.querySelector(".SearchResultsModule-filters-overlay")),
                                    (this.filtersApply = this.querySelector(".SearchResultsModule-filters-apply")),
                                    (this.filtersApplyButton = this.filtersApply.querySelector("button")),
                                    (this.filtersSeeAll = this.querySelectorAll(".SearchFilter-seeAll")),
                                    (this.filters = this.querySelectorAll(".SearchFilterInput input")),
                                    (this.selectedFiltersArray = []),
                                    (this.selectedFilters = this.querySelector(".SearchResultsModule-filters-selected")),
                                    (this.selectedFiltersReset = this.querySelector(".SearchResultsModule-filters-selected-reset")),
                                    (this.selectedFiltersContent = this.querySelector(".SearchResultsModule-filters-selected-content"));
                            },
                        },
                        {
                            key: "handleSortSelect",
                            value: function () {
                                var t = this;
                                this.searchSort &&
                                    this.searchSort.addEventListener("change", function (e) {
                                        t.gatherSelectedFilters(), t.searchResultsModule.submitSearch();
                                    });
                            },
                        },
                        {
                            key: "handleFiltersSelect",
                            value: function () {
                                var t = this;
                                this.filters.forEach(function (e) {
                                    e.addEventListener("click", function () {
                                        J.desktop.includes(Z()) && (t.gatherSelectedFilters(), t.searchResultsModule.submitSearch());
                                    });
                                });
                            },
                        },
                        {
                            key: "handleFiltersApply",
                            value: function () {
                                var t = this;
                                this.filtersApply.addEventListener("change", function (e) {
                                    e.preventDefault(), t.gatherSelectedFilters(), t.closeOverlay(), t.searchResultsModule.submitSearch();
                                }),
                                    this.filtersApplyButton.addEventListener("click", function (e) {
                                        e.preventDefault(), t.gatherSelectedFilters(), t.closeOverlay(), t.searchResultsModule.submitSearch();
                                    });
                            },
                        },
                        {
                            key: "handleFiltersOverlay",
                            value: function () {
                                var t = this;
                                this.filtersOpenButton.forEach(function (e) {
                                    e.addEventListener("click", function (e) {
                                        e.preventDefault(), t.openOverlay();
                                    });
                                }),
                                    this.filtersCloseButton.addEventListener("click", function (e) {
                                        e.preventDefault(), t.closeOverlay();
                                    });
                            },
                        },
                        {
                            key: "removeSelectedFilter",
                            value: function (t) {
                                var e = t.getAttribute("data-value");
                                this.querySelectorAll('[value="'.concat(e, '"]')).forEach(function (t) {
                                    t.checked && (t.checked = !1);
                                }),
                                    this.gatherSelectedFilters(),
                                    this.searchResultsModule.submitSearch();
                            },
                        },
                        {
                            key: "handleSelectedFiltersReset",
                            value: function () {
                                var t = this;
                                this.selectedFiltersReset &&
                                    this.selectedFiltersReset.addEventListener("click", function (e) {
                                        e.preventDefault(),
                                            t.filters.forEach(function (t) {
                                                t.checked = !1;
                                            }),
                                            t.gatherSelectedFilters(),
                                            t.searchResultsModule.submitSearch();
                                    });
                            },
                        },
                        {
                            key: "handleSelectedFiltersRemove",
                            value: function () {
                                var t = this;
                                this.querySelectorAll(".SearchResultsModule-filters-selected-filter").forEach(function (e) {
                                    e.querySelector("a").addEventListener("click", function (n) {
                                        n.preventDefault(), t.removeSelectedFilter(e);
                                    });
                                });
                            },
                        },
                        {
                            key: "renderSelectedFilters",
                            value: function () {
                                var t = this;
                                this.selectedFiltersArray.length > 0
                                    ? ((this.selectedFiltersContent.innerHTML = ""),
                                      this.selectedFiltersArray.forEach(function (e) {
                                          t.selectedFiltersContent.innerHTML += '<div class="SearchResultsModule-filters-selected-filter" data-value='
                                              .concat(e.value, "><span>")
                                              .concat(e.label, '</span><a href="#" title="X"><svg class="close-x"><use xlink:href="#close-x"/></svg></a></div>');
                                      }),
                                      this.handleSelectedFiltersRemove(),
                                      this.selectedFilters.setAttribute("data-showing", !0))
                                    : this.selectedFilters.removeAttribute("data-showing");
                            },
                        },
                        {
                            key: "gatherSelectedFilters",
                            value: function () {
                                var t = this;
                                (this.selectedFiltersArray = []),
                                    (this.filters = this.querySelectorAll(".SearchFilterInput input")),
                                    this.filters.forEach(function (e) {
                                        if (e.checked) {
                                            var n = e.parentElement.querySelector("span").innerHTML,
                                                i = e.getAttribute("value");
                                            t.selectedFiltersArray.push({ label: n, value: i });
                                        }
                                    }),
                                    this.selectedFiltersContent && this.renderSelectedFilters();
                            },
                        },
                        {
                            key: "openOverlay",
                            value: function () {
                                this.filtersOverlay.setAttribute("data-filters-open", !0), document.body.setAttribute("data-filters-open", !0);
                            },
                        },
                        {
                            key: "closeOverlay",
                            value: function () {
                                this.filtersOverlay.removeAttribute("data-filters-open"), document.body.removeAttribute("data-filters-open");
                            },
                        },
                    ]),
                    s
                );
            })();
            var Tt = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.cacheElements(), this.handleFormSubmit(), this.handleSearchInput(), this.checkInputValue();
                            },
                        },
                        {
                            key: "handleFormSubmit",
                            value: function () {
                                var t = this;
                                this.searchForm.addEventListener("submit", function (e) {
                                    e.preventDefault(), t.searchInput && t.searchInput.blur();
                                    var n = new URLSearchParams(new FormData(t.searchForm)).toString(),
                                        i = window.location.pathname + "?" + n;
                                    window.history.replaceState({}, document.title, i),
                                        (t.loadingTimeout = setTimeout(function () {
                                            t.clearSearchForm();
                                        }, 1e3)),
                                        t.getNewSearch(i).then(function (e) {
                                            clearTimeout(t.loadingTimeout), t.clearSearchForm(), t.renderSearchResults(e), document.body.dispatchEvent(new CustomEvent("Search:onSearchUpdate", { detail: { responseMarkup: e } }));
                                        });
                                });
                            },
                        },
                        {
                            key: "submitSearch",
                            value: function () {
                                var t;
                                "function" == typeof Event ? (t = new Event("submit", { cancelable: !0 })) : (t = document.createEvent("Event")).initEvent("submit", !0, !0), this.searchForm.dispatchEvent(t);
                            },
                        },
                        {
                            key: "getNewSearch",
                            value: function (t) {
                                return new Promise(function (e, n) {
                                    window
                                        .fetch(t, { credentials: "include" })
                                        .then(function (t) {
                                            e(t.text());
                                        })
                                        .catch(function () {
                                            n(new Error("error"));
                                        });
                                });
                            },
                        },
                        {
                            key: "clearSearchForm",
                            value: function () {
                                this.searchResults.innerHTML = "";
                            },
                        },
                        {
                            key: "checkInputValue",
                            value: function () {
                                this.searchInput && (0 === this.searchInput.value.length ? this.searchForm.setAttribute("data-has-value", !1) : this.searchForm.setAttribute("data-has-value", !0));
                            },
                        },
                        {
                            key: "handleSearchInput",
                            value: function () {
                                var t = this;
                                this.searchInput &&
                                    this.searchInput.addEventListener(
                                        "keyup",
                                        I(250, function () {
                                            t.checkInputValue();
                                        })
                                    ),
                                    this.clearButton &&
                                        this.clearButton.addEventListener("click", function () {
                                            (t.searchInput.value = ""), t.searchInput.focus(), t.checkInputValue();
                                        });
                            },
                        },
                        {
                            key: "renderSearchResults",
                            value: function (t) {
                                var e = document.createElement("div");
                                e.innerHTML = t;
                                var n = e.querySelector(".SearchResultsModule-ajax").innerHTML;
                                n && (this.searchResults.innerHTML = n), this.dispatchRendered();
                            },
                        },
                        {
                            key: "dispatchRendered",
                            value: function () {
                                var t = new CustomEvent("Ajax:Rendered", { bubbles: !0 });
                                document.body.dispatchEvent(t);
                            },
                        },
                        {
                            key: "cacheElements",
                            value: function () {
                                (this.searchForm = this.querySelector(".SearchResultsModule-form")),
                                    (this.searchInput = this.searchForm.querySelector(".SearchResultsModule-formInput")),
                                    (this.searchResults = this.querySelector(".SearchResultsModule-ajax")),
                                    (this.clearButton = this.searchForm.querySelector(".SearchResultsModule-clearInputButton"));
                            },
                        },
                    ]),
                    s
                );
            })();
            var Ct = /\$\{href\}/g,
                Mt = /\$\{pageNumber\}/g,
                Ot = /\$\{isActive\}/g,
                It = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(
                            s,
                            [
                                {
                                    key: "connectedCallback",
                                    value: function () {
                                        var t = parseInt(this.getAttribute("data-multipagination-totalpages")),
                                            e = parseInt(this.getAttribute("data-multipagination-pagenumber")),
                                            n = s.getPagination(e, t),
                                            i = this.makeHtml(n);
                                        this.innerHTML = i;
                                    },
                                },
                                {
                                    key: "makeHtml",
                                    value: function (t) {
                                        var e = this,
                                            n = new window.URL(window.location.href),
                                            i = n.searchParams,
                                            r = "";
                                        return (
                                            t.links.forEach(function (o, a) {
                                                "string" == typeof o ? (r += e.makeSpacer()) : (i.set("p", o), (r += e.makeLink(n.href, o, a === t.activeIndex)));
                                            }),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "makeLink",
                                    value: function (t, e, n) {
                                        var i = this.querySelector('[data-multipagination-tpl="link"]').content.firstElementChild.outerHTML;
                                        return (i = (i = i.replace(Ct, t)).replace(Mt, e.toLocaleString())).replace(Ot, n ? "is-active" : "");
                                    },
                                },
                                {
                                    key: "makeSpacer",
                                    value: function () {
                                        return this.querySelector('[data-multipagination-tpl="spacer"]').content.firstElementChild.outerHTML;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getPagination",
                                    value: function (t, e) {
                                        var n = t - 2,
                                            i = t + 2;
                                        i > e && ((n -= i - e), (i = e)), n <= 0 && ((i += -1 * (n - 1)), (n = 1)), (i = i > e ? e : i);
                                        var r = { showFirstPage: !1, links: [], showLastPage: !1 };
                                        return (
                                            1 !== n && (n++, (r.showFirstPage = !0)),
                                            i !== e && (i--, (r.showLastPage = !0)),
                                            (r.links = Array.from(Array(i + 1).keys()).slice(n)),
                                            r.showFirstPage && (r.links.unshift("..."), r.links.unshift(1)),
                                            r.showLastPage && (r.links.push("..."), r.links.push(e)),
                                            (r.activeIndex = r.links.indexOf(t)),
                                            r
                                        );
                                    },
                                },
                            ]
                        ),
                        s
                    );
                })();
            var Bt = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.cacheElements(), this.init();
                            },
                        },
                        {
                            key: "cacheElements",
                            value: function () {
                                (this.searchButton = this.querySelector('[class$="-search-button"]')),
                                    (this.searchInput = this.querySelector('[class$="-search-input"]')),
                                    (this.searchInputClear = this.querySelector('[class$="-search-form-clear"]')),
                                    (this.menuButton = document.querySelector(".Page-header-menu-trigger")),
                                    (this.pageHeader = document.querySelector(".Page-header"));
                            },
                        },
                        {
                            key: "init",
                            value: function () {
                                var t = this;
                                this.searchButton &&
                                    this.searchButton.addEventListener("click", function (e) {
                                        e.preventDefault(), t.isSearchOpen() ? t.closeSearch() : (t.closeMenu(), t.openSearch());
                                    }),
                                    this.searchInputClear &&
                                        this.searchInputClear.addEventListener("click", function (e) {
                                            e.preventDefault(), (t.searchInput.value = "");
                                        });
                            },
                        },
                        {
                            key: "openSearch",
                            value: function () {
                                document.body.setAttribute("data-toggle-header", "search-overlay"), this.setAttribute("data-toggle-header", "search-overlay"), this.searchInput.focus();
                            },
                        },
                        {
                            key: "closeSearch",
                            value: function () {
                                this.isSearchOpen() && (document.body.removeAttribute("data-toggle-header"), this.removeAttribute("data-toggle-header"));
                            },
                        },
                        {
                            key: "closeMenu",
                            value: function () {
                                document.body.removeAttribute("data-toggle-header"), this.pageHeader.removeAttribute("data-toggle-header"), this.menuButton.setAttribute("aria-expanded", "false");
                            },
                        },
                        {
                            key: "isSearchOpen",
                            value: function () {
                                return "search-overlay" === document.body.getAttribute("data-toggle-header");
                            },
                        },
                    ]),
                    s
                );
            })();
            var qt = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    this.navDropdown();
                                },
                            },
                            {
                                key: "navDropdown",
                                value: function () {
                                    this.querySelector('[class$="SectionNavigation-select"]').onchange = function () {
                                        window.location.replace(this.options[this.selectedIndex].value);
                                    };
                                },
                            },
                        ]),
                        s
                    );
                })(),
                Ht = function e() {
                    t(this, e);
                    var n = document.querySelector("html").getAttribute("lang"),
                        i = [].slice.call(document.querySelectorAll("ps-select-download"));
                    i.forEach(function (t) {
                        var e = t.querySelector('select[name="language"]');
                        if (e) {
                            var i = e.querySelectorAll("option"),
                                r = t.querySelectorAll("a[data-lang]");
                            t.querySelectorAll('a[data-lang="'.concat(n, '"]')).length > 0
                                ? i.forEach(function (e) {
                                      e.value === n && ((e.selected = "selected"), (t.querySelector('a[data-lang="'.concat(e.value, '"]')).style.display = "block"));
                                  })
                                : (t.querySelector("a[data-lang]:first-child").style.display = "block"),
                                i.length <= 1 && t.querySelector("[data-select-options]").classList.add("hide-select"),
                                e.addEventListener("change", function () {
                                    r.forEach(function (t) {
                                        t.style.display = "none";
                                    }),
                                        (t.querySelector('a[data-lang="'.concat(e.value, '"]')).style.display = "block");
                                });
                        }
                    });
                    var r = document.querySelectorAll("ps-select-download .hide-select");
                    i.length === r.length &&
                        i.forEach(function (t) {
                            t.querySelector("[data-select-options]").style.display = "none";
                        });
                };
            var _t = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this.querySelectorAll("[data-counter]"),
                                    e = new window.IntersectionObserver(function (t) {
                                        t.forEach(function (t) {
                                            if (t.isIntersecting) {
                                                var n = t.target;
                                                !(function t() {
                                                    var e = n.getAttribute("data-target"),
                                                        i = parseInt(n.innerText),
                                                        r = e / 100;
                                                    i < e ? ((n.innerText = Math.ceil(i + r)), setTimeout(t, 20)) : (n.innerText = e);
                                                })(),
                                                    e.unobserve(n);
                                            }
                                        });
                                    });
                                t.forEach(function (t) {
                                    e.observe(t);
                                });
                            },
                        },
                    ]),
                    s
                );
            })();
            var Dt = "data-active",
                Wt = "data-visible",
                Ft = (function (e) {
                    r(s, e);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    this.init(), this.setBinds();
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    (this.elTabs = b(this.querySelectorAll("[data-tab]"))),
                                        (this.elTabPanels = b(this.querySelectorAll("[data-tab-panel]"))),
                                        (this.ids = this.elTabPanels.map(function (t) {
                                            return t.id;
                                        }));
                                    var t = window.location.hash.substr(1),
                                        e = this.ids.some(function (e) {
                                            return t === e;
                                        }),
                                        n = this.querySelector('[href$="'.concat(t, '"]'));
                                    window.addEventListener("load", function () {
                                        n && n.parentNode.scrollIntoView({ block: "nearest" });
                                    }),
                                        (this.activePanel = window.location.hash.length && e ? window.location.hash.substr(1) : this.elTabPanels[0].id);
                                },
                            },
                            {
                                key: "setBinds",
                                value: function () {
                                    var t = this;
                                    window.addEventListener("hashchange", function () {
                                        var e = window.location.hash.substr(1);
                                        t.ids.some(function (t) {
                                            return e === t;
                                        }) && (t.activePanel = e);
                                    }),
                                        this.elTabs.forEach(function (e) {
                                            e.addEventListener("click", function (e) {
                                                var n = e.currentTarget.href.split("#").pop();
                                                if (n) {
                                                    history.pushState(null, null, e.currentTarget.href);
                                                    var i = t.ids.some(function (t) {
                                                        return n === t;
                                                    });
                                                    i && i && (e.preventDefault(), (t.activePanel = n));
                                                }
                                            });
                                        });
                                },
                            },
                            {
                                key: "activePanel",
                                get: function () {
                                    return this._activePanel;
                                },
                                set: function (t) {
                                    this._activePanel !== t &&
                                        ((this._activePanel = t),
                                        this.elTabs.forEach(function (e) {
                                            t === e.getAttribute("href").substr(1) ? e.setAttribute(Dt, "") : e.removeAttribute(Dt);
                                        }),
                                        this.transitionPanels(t)),
                                        window.dispatchEvent(new Event("resize"));
                                },
                            },
                            {
                                key: "transitionPanels",
                                value: function (t) {
                                    this.elTabPanels.forEach(function (e) {
                                        t === e.id ? e.setAttribute(Wt, "") : e.removeAttribute(Wt);
                                    });
                                },
                            },
                            {
                                key: "clearTransitionProperties",
                                value: function (t) {
                                    t.style.removeProperty("height"), t.style.removeProperty("opacity"), t.style.removeProperty("overflow"), t.style.removeProperty("display"), t.style.removeProperty("transition");
                                },
                            },
                        ]),
                        s
                    );
                })(d(HTMLElement));
            var Nt = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                (this.svgIcon = this.innerHTML), this.setCurrentColor();
                            },
                        },
                        {
                            key: "setCurrentColor",
                            value: function () {
                                this.svgIcon &&
                                    (this.innerHTML = this.svgIcon.replace(/fill="([^"]*?[^none"])"|fill='([^']*?[^none'])'/g, 'fill="currentColor"').replace(/stroke="([^"]*?[^none"])"|stroke='([^']*?[^none'])'/g, 'stroke="currentColor"'));
                            },
                        },
                    ]),
                    s
                );
            })(d(HTMLElement));
            var Yt = (function (e) {
                    r(s, window.HTMLElement);
                    var i,
                        o,
                        a =
                            ((i = s),
                            (o = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (o) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return l(this, t);
                            });
                    function s() {
                        return t(this, s), a.apply(this, arguments);
                    }
                    return (
                        n(s, [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this,
                                        e = this.getAttribute("data-toggle"),
                                        n = this.querySelectorAll('[data-toggle-trigger="' + e + '"]'),
                                        i = this;
                                    (this.handleToggle = function (t) {
                                        t.preventDefault();
                                        var e = this.getAttribute("data-toggle-trigger"),
                                            n = "data-toggle-in";
                                        e && (i.getAttribute(n) === e ? (document.body.removeAttribute(n), i.removeAttribute(n, e)) : (document.body.setAttribute(n, e), i.setAttribute(n, e)));
                                    }),
                                        n.forEach(function (e) {
                                            return e.addEventListener("click", t.handleToggle, !0);
                                        });
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    var t = this;
                                    this.querySelectorAll("[data-toggle-trigger]").forEach(function (e) {
                                        return e.removeEventListener("click", t.handleToggle, !0);
                                    });
                                },
                            },
                        ]),
                        s
                    );
                })(),
                jt = function e() {
                    t(this, e);
                    var n = "::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;",
                        i = document.createElement("STYLE");
                    (window.unfocus = function () {
                        document.getElementsByTagName("HEAD")[0].appendChild(i),
                            document.addEventListener("mousedown", function () {
                                i.innerHTML = n + "}";
                            }),
                            document.addEventListener("keydown", function () {
                                i.innerHTML = "";
                            });
                    }),
                        (window.unfocus.style = function (t) {
                            n += t;
                        }),
                        window.unfocus();
                };
            var zt = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "clipped",
                            get: function () {
                                return this.hasAttribute("data-clipped");
                            },
                            set: function (t) {
                                t ? this.setAttribute("data-clipped", "") : this.removeAttribute("data-clipped");
                            },
                        },
                        {
                            key: "overflowing",
                            get: function () {
                                return this.getAttribute("overflowing");
                            },
                            set: function (t) {
                                t ? this.setAttribute("overflowing", "") : this.removeAttribute("overflowing");
                            },
                        },
                        {
                            key: "playlistItemsContainer",
                            get: function () {
                                return this.querySelector("[data-playlist-items]");
                            },
                        },
                        {
                            key: "fragmentUri",
                            get: function () {
                                return this.getAttribute("fragment-uri");
                            },
                        },
                        {
                            key: "fragmentParams",
                            get: function () {
                                return this.getAttribute("fragment-params");
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                (this.playlistItems = b(this.querySelectorAll(".VideoPlaylistItem"))), this.addEventListener(A, this), this.bindClickEvents();
                            },
                        },
                        {
                            key: "handleEvent",
                            value: function (t) {
                                if ((t.type === S && t.target.play(), t.type === A)) {
                                    var e = this.playlistItems.findIndex(function (t) {
                                        return null !== t.getAttribute("is-current") && t;
                                    });
                                    e < this.playlistItems.length - 1 && this.loadPlaylistItem(this.playlistItems[e + 1]);
                                }
                            },
                        },
                        {
                            key: "bindClickEvents",
                            value: function () {
                                var t = this,
                                    e = this.querySelector('[data-click="toggleExpand"]');
                                e &&
                                    e.addEventListener("click", function () {
                                        t.clipped = !1;
                                    }),
                                    this.querySelectorAll(".VideoPlaylistItem").forEach(function (e) {
                                        e.addEventListener("click", function (n) {
                                            n.preventDefault(), null === e.getAttribute("is-current") && t.loadPlaylistItem(e);
                                        });
                                    });
                            },
                        },
                        {
                            key: "getVideoUri",
                            value: function (t) {
                                var e = new window.URLSearchParams(this.fragmentParams);
                                return e.append("_contentId", t), "".concat(this.fragmentUri, "?").concat(e);
                            },
                        },
                        {
                            key: "loadPlaylistItem",
                            value: function (t) {
                                this.addEventListener(S, this);
                                var e = t.querySelector("template").content.cloneNode(!0),
                                    n = this.querySelector("[data-video-player]");
                                n.parentElement.replaceChild(e, n), this.setState(this.playlistItems.indexOf(t));
                            },
                        },
                        {
                            key: "setState",
                            value: function (t) {
                                this.playlistItems.forEach(function (e, n) {
                                    e.removeAttribute("is-current"), t === n && e.setAttribute("is-current", "");
                                });
                            },
                        },
                    ]),
                    s
                );
            })();
            var Xt = (function (e) {
                r(h, e);
                var i,
                    o,
                    s,
                    u =
                        ((o = h),
                        (s = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(o);
                            if (s) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function h() {
                    return t(this, h), u.apply(this, arguments);
                }
                return (
                    n(h, [
                        {
                            key: "connectedCallback",
                            value:
                                ((i = O(
                                    C().mark(function t() {
                                        var e,
                                            n,
                                            i = this;
                                        return C().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return m(c(h.prototype), "connectedCallback", this).call(this), (t.next = 3), a.e(333).then(a.bind(a, 2343));
                                                        case 3:
                                                            (e = t.sent),
                                                                (n = e.default),
                                                                (this._player = new n(this.querySelector("iframe"))),
                                                                this._player.ready().then(function () {
                                                                    i.onReady();
                                                                }),
                                                                this._player.on("playing", function () {
                                                                    i.onPlay();
                                                                }),
                                                                this._player.on("ended", function () {
                                                                    i.onEnded();
                                                                }),
                                                                this._player.on("pause", function () {
                                                                    i.onPause();
                                                                });
                                                        case 10:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: "play",
                            value: function () {
                                try {
                                    this._player.play();
                                } catch (t) {
                                    console.log(t);
                                }
                            },
                        },
                    ]),
                    h
                );
            })(R);
            var Vt = (function (e) {
                r(u, e);
                var i,
                    o,
                    a,
                    s =
                        ((o = u),
                        (a = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(o);
                            if (a) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function u() {
                    return t(this, u), s.apply(this, arguments);
                }
                return (
                    n(u, [
                        {
                            key: "connectedCallback",
                            value:
                                ((i = O(
                                    C().mark(function t() {
                                        var e = this;
                                        return C().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return m(c(u.prototype), "connectedCallback", this).call(this), (t.next = 3), this.loadYouTubeVideoPlayerAPI();
                                                        case 3:
                                                            this._player = new window.YT.Player(this.querySelector("iframe"), {
                                                                events: {
                                                                    onReady: function () {
                                                                        return e.onReady();
                                                                    },
                                                                    onStateChange: function (t) {
                                                                        return e.onStateChange(t);
                                                                    },
                                                                },
                                                            });
                                                        case 4:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: "onReady",
                            value: function () {
                                m(c(u.prototype), "onReady", this).call(this), this.initPlayerOverlay();
                            },
                        },
                        {
                            key: "initPlayerOverlay",
                            value: function () {
                                var t = this;
                                if (((this.playOverlay = this.querySelector("[data-player-overlay]") || !1), this.playOverlay)) {
                                    var e = this;
                                    this.playOverlay.addEventListener("transitionend", function () {
                                        e.playOverlay.hasAttribute("data-hidden") && (e.playOverlay.style.display = "none");
                                    }),
                                        this.playOverlay.addEventListener("click", function () {
                                            t.playOverlay.setAttribute("data-hidden", !0), t.play();
                                        });
                                }
                            },
                        },
                        {
                            key: "loadYouTubeVideoPlayerAPI",
                            value: function () {
                                return new Promise(function (t) {
                                    if (window.YouTubeAPIReady) return t();
                                    var e = document.createElement("script"),
                                        n = document.getElementsByTagName("script")[0];
                                    (e.src = "https://www.youtube.com/iframe_api"),
                                        n.parentNode.insertBefore(e, n),
                                        (window.onYouTubeIframeAPIReady = function () {
                                            (window.YouTubeAPIReady = !0), window.dispatchEvent(new window.Event("YouTubeApiReady"));
                                        }),
                                        window.addEventListener("YouTubeApiReady", t);
                                });
                            },
                        },
                        {
                            key: "onStateChange",
                            value: function (t) {
                                var e = t.data;
                                e === window.YT.PlayerState.ENDED && this.onEnded(), e === window.YT.PlayerState.PLAYING && this.onPlay(), e === window.YT.PlayerState.PAUSED && this.onPause();
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                try {
                                    this._player.playVideo();
                                } catch (t) {
                                    console.log(t);
                                }
                            },
                        },
                    ]),
                    u
                );
            })(R);
            var Ut = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                this.querySelectorAll("[data-filter]").forEach(function (e) {
                                    e.addEventListener(
                                        "change",
                                        I(50, function (e) {
                                            t.querySelectorAll("[data-filter-tags]").forEach(function (t) {
                                                var n = t.getAttribute("data-filter-tags");
                                                "all" === e.target.value
                                                    ? t.setAttribute("data-display-item", "")
                                                    : null === n || -1 === JSON.parse(n).indexOf(e.target.value)
                                                    ? t.removeAttribute("data-display-item")
                                                    : t.setAttribute("data-display-item", "");
                                            });
                                        })
                                    );
                                });
                            },
                        },
                        { key: "disconnectedCallback", value: function () {} },
                    ]),
                    s
                );
            })();
            function Gt(t, e, n) {
                var i = t.target;
                (e = i.matches(e) ? i : i.closest(e)) && ((t.delegateTarget = e), n(t));
            }
            var $t = (function (e) {
                r(s, e);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.cacheElements(), this.addEventListener("click", this.handleEvent);
                            },
                        },
                        {
                            key: "cacheElements",
                            value: function () {
                                (this.elDialog = this.querySelector("dialog[data-bsp-dialogpopup-dialog]")),
                                    (this.elTriggers = this.querySelectorAll("[data-bsp-dialogpopup-trigger]")),
                                    (this.elPopupTemplates = b(this.querySelectorAll("[data-bsp-dialogpopup-template]")));
                            },
                        },
                        {
                            key: "handleEvent",
                            value: function (t) {
                                "click" === t.type && this.evClick(t);
                            },
                        },
                        {
                            key: "evClick",
                            value: function (t) {
                                var e = this;
                                Gt.call(this, t, "[data-bsp-dialogpopup-trigger]", this.callOpenPopup.bind(this)),
                                    Gt.call(this, t, "[data-bsp-dialogpopup-close], [data-bsp-dialogpopup-mask]", function () {
                                        e.open = !1;
                                    }),
                                    Gt.call(this, t, "[data-bsp-dialogpopup-prev]", this.callPrev.bind(this)),
                                    Gt.call(this, t, "[data-bsp-dialogpopup-next]", this.callNext.bind(this));
                            },
                        },
                        {
                            key: "callPrev",
                            value: function () {
                                var t = this.elPopupTemplates.indexOf(this.querySelector("[data-bsp-dialogpopup-template='".concat(this.currentId, "']"))),
                                    e = this.elPopupTemplates.length,
                                    n = t - 1;
                                0 === t && (n = e - 1), (this.currentId = n);
                            },
                        },
                        {
                            key: "callNext",
                            value: function () {
                                var t = this.elPopupTemplates.indexOf(this.querySelector("[data-bsp-dialogpopup-template='".concat(this.currentId, "']"))) + 1;
                                t >= this.elPopupTemplates.length && (t = 0), (this.currentId = t);
                            },
                        },
                        {
                            key: "callOpenPopup",
                            value: function (t) {
                                var e = t.delegateTarget.getAttribute("data-bsp-dialogpopup-trigger");
                                this.currentId = e;
                            },
                        },
                        {
                            key: "currentId",
                            get: function () {
                                return this._id;
                            },
                            set: function (t) {
                                var e = this.querySelector("[data-bsp-dialogpopup-template='".concat(t, "']")).innerHTML;
                                (this.elDialog.querySelector("[data-bsp-dialogpopup-dialog-contents]").innerHTML = e), (this._id = t), (this.open = !0);
                            },
                        },
                        {
                            key: "open",
                            get: function () {
                                return this.elDialog.open;
                            },
                            set: function (t) {
                                (this.elDialog.open = t), t ? (this.elDialog.setAttribute("open", !0), this.elDialog.classList.add("_open")) : (this.elDialog.removeAttribute("open"), this.elDialog.classList.remove("_open"));
                            },
                        },
                    ]),
                    s
                );
            })(d(HTMLElement));
            function Qt(t) {
                return getComputedStyle(t);
            }
            function Kt(t, e) {
                for (var n in e) {
                    var i = e[n];
                    "number" == typeof i && (i += "px"), (t.style[n] = i);
                }
                return t;
            }
            function Jt(t) {
                var e = document.createElement("div");
                return (e.className = t), e;
            }
            var Zt = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
            function te(t, e) {
                if (!Zt) throw new Error("No element matching method supported");
                return Zt.call(t, e);
            }
            function ee(t) {
                t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
            }
            function ne(t, e) {
                return Array.prototype.filter.call(t.children, function (t) {
                    return te(t, e);
                });
            }
            var ie = function (t) {
                    return "ps__thumb-" + t;
                },
                re = function (t) {
                    return "ps__rail-" + t;
                },
                oe = "ps__child--consume",
                ae = "ps--focus",
                se = "ps--clicking",
                le = function (t) {
                    return "ps--active-" + t;
                },
                ce = function (t) {
                    return "ps--scrolling-" + t;
                },
                ue = { x: null, y: null };
            function he(t, e) {
                var n = t.element.classList,
                    i = ce(e);
                n.contains(i) ? clearTimeout(ue[e]) : n.add(i);
            }
            function de(t, e) {
                ue[e] = setTimeout(function () {
                    return t.isAlive && t.element.classList.remove(ce(e));
                }, t.settings.scrollingThreshold);
            }
            var fe = function (t) {
                    (this.element = t), (this.handlers = {});
                },
                pe = { isEmpty: { configurable: !0 } };
            (fe.prototype.bind = function (t, e) {
                void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
            }),
                (fe.prototype.unbind = function (t, e) {
                    var n = this;
                    this.handlers[t] = this.handlers[t].filter(function (i) {
                        return !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1);
                    });
                }),
                (fe.prototype.unbindAll = function () {
                    for (var t in this.handlers) this.unbind(t);
                }),
                (pe.isEmpty.get = function () {
                    var t = this;
                    return Object.keys(this.handlers).every(function (e) {
                        return 0 === t.handlers[e].length;
                    });
                }),
                Object.defineProperties(fe.prototype, pe);
            var ye = function () {
                this.eventElements = [];
            };
            function ve(t) {
                if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
                var e = document.createEvent("CustomEvent");
                return e.initCustomEvent(t, !1, !1, void 0), e;
            }
            function me(t, e, n, i, r) {
                var o;
                if ((void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === e)) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== e) throw new Error("A proper axis should be provided");
                    o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
                }
                !(function (t, e, n, i, r) {
                    var o = n[0],
                        a = n[1],
                        s = n[2],
                        l = n[3],
                        c = n[4],
                        u = n[5];
                    void 0 === i && (i = !0), void 0 === r && (r = !1);
                    var h = t.element;
                    (t.reach[l] = null),
                        h[s] < 1 && (t.reach[l] = "start"),
                        h[s] > t[o] - t[a] - 1 && (t.reach[l] = "end"),
                        e &&
                            (h.dispatchEvent(ve("ps-scroll-" + l)),
                            e < 0 ? h.dispatchEvent(ve("ps-scroll-" + c)) : e > 0 && h.dispatchEvent(ve("ps-scroll-" + u)),
                            i &&
                                (function (t, e) {
                                    he(t, e), de(t, e);
                                })(t, l)),
                        t.reach[l] && (e || r) && h.dispatchEvent(ve("ps-" + l + "-reach-" + t.reach[l]));
                })(t, n, o, i, r);
            }
            function ge(t) {
                return parseInt(t, 10) || 0;
            }
            (ye.prototype.eventElement = function (t) {
                var e = this.eventElements.filter(function (e) {
                    return e.element === t;
                })[0];
                return e || ((e = new fe(t)), this.eventElements.push(e)), e;
            }),
                (ye.prototype.bind = function (t, e, n) {
                    this.eventElement(t).bind(e, n);
                }),
                (ye.prototype.unbind = function (t, e, n) {
                    var i = this.eventElement(t);
                    i.unbind(e, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1);
                }),
                (ye.prototype.unbindAll = function () {
                    this.eventElements.forEach(function (t) {
                        return t.unbindAll();
                    }),
                        (this.eventElements = []);
                }),
                (ye.prototype.once = function (t, e, n) {
                    var i = this.eventElement(t),
                        r = function (t) {
                            i.unbind(e, r), n(t);
                        };
                    i.bind(e, r);
                });
            var be = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch:
                    "undefined" != typeof window && ("ontouchstart" in window || ("maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0) || (window.DocumentTouch && document instanceof window.DocumentTouch)),
                supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
            };
            function we(t) {
                var e = t.element,
                    n = Math.floor(e.scrollTop),
                    i = e.getBoundingClientRect();
                (t.containerWidth = Math.round(i.width)),
                    (t.containerHeight = Math.round(i.height)),
                    (t.contentWidth = e.scrollWidth),
                    (t.contentHeight = e.scrollHeight),
                    e.contains(t.scrollbarXRail) ||
                        (ne(e, re("x")).forEach(function (t) {
                            return ee(t);
                        }),
                        e.appendChild(t.scrollbarXRail)),
                    e.contains(t.scrollbarYRail) ||
                        (ne(e, re("y")).forEach(function (t) {
                            return ee(t);
                        }),
                        e.appendChild(t.scrollbarYRail)),
                    !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
                        ? ((t.scrollbarXActive = !0),
                          (t.railXWidth = t.containerWidth - t.railXMarginWidth),
                          (t.railXRatio = t.containerWidth / t.railXWidth),
                          (t.scrollbarXWidth = ke(t, ge((t.railXWidth * t.containerWidth) / t.contentWidth))),
                          (t.scrollbarXLeft = ge(((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth)) / (t.contentWidth - t.containerWidth))))
                        : (t.scrollbarXActive = !1),
                    !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
                        ? ((t.scrollbarYActive = !0),
                          (t.railYHeight = t.containerHeight - t.railYMarginHeight),
                          (t.railYRatio = t.containerHeight / t.railYHeight),
                          (t.scrollbarYHeight = ke(t, ge((t.railYHeight * t.containerHeight) / t.contentHeight))),
                          (t.scrollbarYTop = ge((n * (t.railYHeight - t.scrollbarYHeight)) / (t.contentHeight - t.containerHeight))))
                        : (t.scrollbarYActive = !1),
                    t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
                    t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                    (function (t, e) {
                        var n = { width: e.railXWidth },
                            i = Math.floor(t.scrollTop);
                        e.isRtl ? (n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth) : (n.left = t.scrollLeft),
                            e.isScrollbarXUsingBottom ? (n.bottom = e.scrollbarXBottom - i) : (n.top = e.scrollbarXTop + i),
                            Kt(e.scrollbarXRail, n);
                        var r = { top: i, height: e.railYHeight };
                        e.isScrollbarYUsingRight
                            ? e.isRtl
                                ? (r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth - 9)
                                : (r.right = e.scrollbarYRight - t.scrollLeft)
                            : e.isRtl
                            ? (r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth)
                            : (r.left = e.scrollbarYLeft + t.scrollLeft),
                            Kt(e.scrollbarYRail, r),
                            Kt(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }),
                            Kt(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth });
                    })(e, t),
                    t.scrollbarXActive ? e.classList.add(le("x")) : (e.classList.remove(le("x")), (t.scrollbarXWidth = 0), (t.scrollbarXLeft = 0), (e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0)),
                    t.scrollbarYActive ? e.classList.add(le("y")) : (e.classList.remove(le("y")), (t.scrollbarYHeight = 0), (t.scrollbarYTop = 0), (e.scrollTop = 0));
            }
            function ke(t, e) {
                return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
            }
            function Ee(t, e) {
                var n = e[0],
                    i = e[1],
                    r = e[2],
                    o = e[3],
                    a = e[4],
                    s = e[5],
                    l = e[6],
                    c = e[7],
                    u = e[8],
                    h = t.element,
                    d = null,
                    f = null,
                    p = null;
                function y(e) {
                    e.touches && e.touches[0] && (e[r] = e.touches[0].pageY), (h[l] = d + p * (e[r] - f)), he(t, c), we(t), e.stopPropagation(), e.type.startsWith("touch") && e.changedTouches.length > 1 && e.preventDefault();
                }
                function v() {
                    de(t, c), t[u].classList.remove(se), t.event.unbind(t.ownerDocument, "mousemove", y);
                }
                function m(e, a) {
                    (d = h[l]),
                        a && e.touches && (e[r] = e.touches[0].pageY),
                        (f = e[r]),
                        (p = (t[i] - t[n]) / (t[o] - t[s])),
                        a ? t.event.bind(t.ownerDocument, "touchmove", y) : (t.event.bind(t.ownerDocument, "mousemove", y), t.event.once(t.ownerDocument, "mouseup", v), e.preventDefault()),
                        t[u].classList.add(se),
                        e.stopPropagation();
                }
                t.event.bind(t[a], "mousedown", function (t) {
                    m(t);
                }),
                    t.event.bind(t[a], "touchstart", function (t) {
                        m(t, !0);
                    });
            }
            var Se = {
                    "click-rail": function (t) {
                        t.element,
                            t.event.bind(t.scrollbarY, "mousedown", function (t) {
                                return t.stopPropagation();
                            }),
                            t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
                                var n = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                                (t.element.scrollTop += n * t.containerHeight), we(t), e.stopPropagation();
                            }),
                            t.event.bind(t.scrollbarX, "mousedown", function (t) {
                                return t.stopPropagation();
                            }),
                            t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
                                var n = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                                (t.element.scrollLeft += n * t.containerWidth), we(t), e.stopPropagation();
                            });
                    },
                    "drag-thumb": function (t) {
                        Ee(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
                            Ee(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
                    },
                    keyboard: function (t) {
                        var e = t.element;
                        t.event.bind(t.ownerDocument, "keydown", function (n) {
                            if (!((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) && (te(e, ":hover") || te(t.scrollbarX, ":focus") || te(t.scrollbarY, ":focus"))) {
                                var i,
                                    r = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                                if (r) {
                                    if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                                    else for (; r.shadowRoot; ) r = r.shadowRoot.activeElement;
                                    if (te((i = r), "input,[contenteditable]") || te(i, "select,[contenteditable]") || te(i, "textarea,[contenteditable]") || te(i, "button,[contenteditable]")) return;
                                }
                                var o = 0,
                                    a = 0;
                                switch (n.which) {
                                    case 37:
                                        o = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
                                        break;
                                    case 38:
                                        a = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
                                        break;
                                    case 39:
                                        o = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
                                        break;
                                    case 40:
                                        a = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
                                        break;
                                    case 32:
                                        a = n.shiftKey ? t.containerHeight : -t.containerHeight;
                                        break;
                                    case 33:
                                        a = t.containerHeight;
                                        break;
                                    case 34:
                                        a = -t.containerHeight;
                                        break;
                                    case 36:
                                        a = t.contentHeight;
                                        break;
                                    case 35:
                                        a = -t.contentHeight;
                                        break;
                                    default:
                                        return;
                                }
                                (t.settings.suppressScrollX && 0 !== o) ||
                                    (t.settings.suppressScrollY && 0 !== a) ||
                                    ((e.scrollTop -= a),
                                    (e.scrollLeft += o),
                                    we(t),
                                    (function (n, i) {
                                        var r = Math.floor(e.scrollTop);
                                        if (0 === n) {
                                            if (!t.scrollbarYActive) return !1;
                                            if ((0 === r && i > 0) || (r >= t.contentHeight - t.containerHeight && i < 0)) return !t.settings.wheelPropagation;
                                        }
                                        var o = e.scrollLeft;
                                        if (0 === i) {
                                            if (!t.scrollbarXActive) return !1;
                                            if ((0 === o && n < 0) || (o >= t.contentWidth - t.containerWidth && n > 0)) return !t.settings.wheelPropagation;
                                        }
                                        return !0;
                                    })(o, a) && n.preventDefault());
                            }
                        });
                    },
                    wheel: function (t) {
                        var e = t.element;
                        function n(n) {
                            var i = (function (t) {
                                    var e = t.deltaX,
                                        n = -1 * t.deltaY;
                                    return (
                                        (void 0 !== e && void 0 !== n) || ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
                                        t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
                                        e != e && n != n && ((e = 0), (n = t.wheelDelta)),
                                        t.shiftKey ? [-n, -e] : [e, n]
                                    );
                                })(n),
                                r = i[0],
                                o = i[1];
                            if (
                                !(function (t, n, i) {
                                    if (!be.isWebKit && e.querySelector("select:focus")) return !0;
                                    if (!e.contains(t)) return !1;
                                    for (var r = t; r && r !== e; ) {
                                        if (r.classList.contains(oe)) return !0;
                                        var o = Qt(r);
                                        if (i && o.overflowY.match(/(scroll|auto)/)) {
                                            var a = r.scrollHeight - r.clientHeight;
                                            if (a > 0 && ((r.scrollTop > 0 && i < 0) || (r.scrollTop < a && i > 0))) return !0;
                                        }
                                        if (n && o.overflowX.match(/(scroll|auto)/)) {
                                            var s = r.scrollWidth - r.clientWidth;
                                            if (s > 0 && ((r.scrollLeft > 0 && n < 0) || (r.scrollLeft < s && n > 0))) return !0;
                                        }
                                        r = r.parentNode;
                                    }
                                    return !1;
                                })(n.target, r, o)
                            ) {
                                var a = !1;
                                t.settings.useBothWheelAxes
                                    ? t.scrollbarYActive && !t.scrollbarXActive
                                        ? (o ? (e.scrollTop -= o * t.settings.wheelSpeed) : (e.scrollTop += r * t.settings.wheelSpeed), (a = !0))
                                        : t.scrollbarXActive && !t.scrollbarYActive && (r ? (e.scrollLeft += r * t.settings.wheelSpeed) : (e.scrollLeft -= o * t.settings.wheelSpeed), (a = !0))
                                    : ((e.scrollTop -= o * t.settings.wheelSpeed), (e.scrollLeft += r * t.settings.wheelSpeed)),
                                    we(t),
                                    (a =
                                        a ||
                                        (function (n, i) {
                                            var r = Math.floor(e.scrollTop),
                                                o = 0 === e.scrollTop,
                                                a = r + e.offsetHeight === e.scrollHeight,
                                                s = 0 === e.scrollLeft,
                                                l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                                            return !(Math.abs(i) > Math.abs(n) ? o || a : s || l) || !t.settings.wheelPropagation;
                                        })(r, o)) &&
                                        !n.ctrlKey &&
                                        (n.stopPropagation(), n.preventDefault());
                            }
                        }
                        void 0 !== window.onwheel ? t.event.bind(e, "wheel", n) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", n);
                    },
                    touch: function (t) {
                        if (be.supportsTouch || be.supportsIePointer) {
                            var e = t.element,
                                n = {},
                                i = 0,
                                r = {},
                                o = null;
                            be.supportsTouch
                                ? (t.event.bind(e, "touchstart", c), t.event.bind(e, "touchmove", u), t.event.bind(e, "touchend", h))
                                : be.supportsIePointer &&
                                  (window.PointerEvent
                                      ? (t.event.bind(e, "pointerdown", c), t.event.bind(e, "pointermove", u), t.event.bind(e, "pointerup", h))
                                      : window.MSPointerEvent && (t.event.bind(e, "MSPointerDown", c), t.event.bind(e, "MSPointerMove", u), t.event.bind(e, "MSPointerUp", h)));
                        }
                        function a(n, i) {
                            (e.scrollTop -= i), (e.scrollLeft -= n), we(t);
                        }
                        function s(t) {
                            return t.targetTouches ? t.targetTouches[0] : t;
                        }
                        function l(t) {
                            return !(
                                (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
                                ((!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                            );
                        }
                        function c(t) {
                            if (l(t)) {
                                var e = s(t);
                                (n.pageX = e.pageX), (n.pageY = e.pageY), (i = new Date().getTime()), null !== o && clearInterval(o);
                            }
                        }
                        function u(o) {
                            if (l(o)) {
                                var c = s(o),
                                    u = { pageX: c.pageX, pageY: c.pageY },
                                    h = u.pageX - n.pageX,
                                    d = u.pageY - n.pageY;
                                if (
                                    (function (t, n, i) {
                                        if (!e.contains(t)) return !1;
                                        for (var r = t; r && r !== e; ) {
                                            if (r.classList.contains(oe)) return !0;
                                            var o = Qt(r);
                                            if (i && o.overflowY.match(/(scroll|auto)/)) {
                                                var a = r.scrollHeight - r.clientHeight;
                                                if (a > 0 && ((r.scrollTop > 0 && i < 0) || (r.scrollTop < a && i > 0))) return !0;
                                            }
                                            if (n && o.overflowX.match(/(scroll|auto)/)) {
                                                var s = r.scrollWidth - r.clientWidth;
                                                if (s > 0 && ((r.scrollLeft > 0 && n < 0) || (r.scrollLeft < s && n > 0))) return !0;
                                            }
                                            r = r.parentNode;
                                        }
                                        return !1;
                                    })(o.target, h, d)
                                )
                                    return;
                                a(h, d), (n = u);
                                var f = new Date().getTime(),
                                    p = f - i;
                                p > 0 && ((r.x = h / p), (r.y = d / p), (i = f)),
                                    (function (n, i) {
                                        var r = Math.floor(e.scrollTop),
                                            o = e.scrollLeft,
                                            a = Math.abs(n),
                                            s = Math.abs(i);
                                        if (s > a) {
                                            if ((i < 0 && r === t.contentHeight - t.containerHeight) || (i > 0 && 0 === r)) return 0 === window.scrollY && i > 0 && be.isChrome;
                                        } else if (a > s && ((n < 0 && o === t.contentWidth - t.containerWidth) || (n > 0 && 0 === o))) return !0;
                                        return !0;
                                    })(h, d) && o.preventDefault();
                            }
                        }
                        function h() {
                            t.settings.swipeEasing &&
                                (clearInterval(o),
                                (o = setInterval(function () {
                                    t.isInitialized
                                        ? clearInterval(o)
                                        : r.x || r.y
                                        ? Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01
                                            ? clearInterval(o)
                                            : t.element
                                            ? (a(30 * r.x, 30 * r.y), (r.x *= 0.8), (r.y *= 0.8))
                                            : clearInterval(o)
                                        : clearInterval(o);
                                }, 10)));
                        }
                    },
                },
                Le = function (t, e) {
                    var n = this;
                    if ((void 0 === e && (e = {}), "string" == typeof t && (t = document.querySelector(t)), !t || !t.nodeName)) throw new Error("no element is specified to initialize PerfectScrollbar");
                    for (var i in ((this.element = t),
                    t.classList.add("ps"),
                    (this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1,
                    }),
                    e))
                        this.settings[i] = e[i];
                    (this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
                    var r,
                        o,
                        a = function () {
                            return t.classList.add(ae);
                        },
                        s = function () {
                            return t.classList.remove(ae);
                        };
                    (this.isRtl = "rtl" === Qt(t).direction),
                        !0 === this.isRtl && t.classList.add("ps__rtl"),
                        (this.isNegativeScroll = ((o = t.scrollLeft), (t.scrollLeft = -1), (r = t.scrollLeft < 0), (t.scrollLeft = o), r)),
                        (this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0),
                        (this.event = new ye()),
                        (this.ownerDocument = t.ownerDocument || document),
                        (this.scrollbarXRail = Jt(re("x"))),
                        t.appendChild(this.scrollbarXRail),
                        (this.scrollbarX = Jt(ie("x"))),
                        this.scrollbarXRail.appendChild(this.scrollbarX),
                        this.scrollbarX.setAttribute("tabindex", 0),
                        this.event.bind(this.scrollbarX, "focus", a),
                        this.event.bind(this.scrollbarX, "blur", s),
                        (this.scrollbarXActive = null),
                        (this.scrollbarXWidth = null),
                        (this.scrollbarXLeft = null);
                    var l = Qt(this.scrollbarXRail);
                    (this.scrollbarXBottom = parseInt(l.bottom, 10)),
                        isNaN(this.scrollbarXBottom) ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = ge(l.top))) : (this.isScrollbarXUsingBottom = !0),
                        (this.railBorderXWidth = ge(l.borderLeftWidth) + ge(l.borderRightWidth)),
                        Kt(this.scrollbarXRail, { display: "block" }),
                        (this.railXMarginWidth = ge(l.marginLeft) + ge(l.marginRight)),
                        Kt(this.scrollbarXRail, { display: "" }),
                        (this.railXWidth = null),
                        (this.railXRatio = null),
                        (this.scrollbarYRail = Jt(re("y"))),
                        t.appendChild(this.scrollbarYRail),
                        (this.scrollbarY = Jt(ie("y"))),
                        this.scrollbarYRail.appendChild(this.scrollbarY),
                        this.scrollbarY.setAttribute("tabindex", 0),
                        this.event.bind(this.scrollbarY, "focus", a),
                        this.event.bind(this.scrollbarY, "blur", s),
                        (this.scrollbarYActive = null),
                        (this.scrollbarYHeight = null),
                        (this.scrollbarYTop = null);
                    var c = Qt(this.scrollbarYRail);
                    (this.scrollbarYRight = parseInt(c.right, 10)),
                        isNaN(this.scrollbarYRight) ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = ge(c.left))) : (this.isScrollbarYUsingRight = !0),
                        (this.scrollbarYOuterWidth = this.isRtl
                            ? (function (t) {
                                  var e = Qt(t);
                                  return ge(e.width) + ge(e.paddingLeft) + ge(e.paddingRight) + ge(e.borderLeftWidth) + ge(e.borderRightWidth);
                              })(this.scrollbarY)
                            : null),
                        (this.railBorderYWidth = ge(c.borderTopWidth) + ge(c.borderBottomWidth)),
                        Kt(this.scrollbarYRail, { display: "block" }),
                        (this.railYMarginHeight = ge(c.marginTop) + ge(c.marginBottom)),
                        Kt(this.scrollbarYRail, { display: "" }),
                        (this.railYHeight = null),
                        (this.railYRatio = null),
                        (this.reach = {
                            x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                            y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null,
                        }),
                        (this.isAlive = !0),
                        this.settings.handlers.forEach(function (t) {
                            return Se[t](n);
                        }),
                        (this.lastScrollTop = Math.floor(t.scrollTop)),
                        (this.lastScrollLeft = t.scrollLeft),
                        this.event.bind(this.element, "scroll", function (t) {
                            return n.onScroll(t);
                        }),
                        we(this);
                };
            (Le.prototype.update = function () {
                this.isAlive &&
                    ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0),
                    Kt(this.scrollbarXRail, { display: "block" }),
                    Kt(this.scrollbarYRail, { display: "block" }),
                    (this.railXMarginWidth = ge(Qt(this.scrollbarXRail).marginLeft) + ge(Qt(this.scrollbarXRail).marginRight)),
                    (this.railYMarginHeight = ge(Qt(this.scrollbarYRail).marginTop) + ge(Qt(this.scrollbarYRail).marginBottom)),
                    Kt(this.scrollbarXRail, { display: "none" }),
                    Kt(this.scrollbarYRail, { display: "none" }),
                    we(this),
                    me(this, "top", 0, !1, !0),
                    me(this, "left", 0, !1, !0),
                    Kt(this.scrollbarXRail, { display: "" }),
                    Kt(this.scrollbarYRail, { display: "" }));
            }),
                (Le.prototype.onScroll = function (t) {
                    this.isAlive &&
                        (we(this),
                        me(this, "top", this.element.scrollTop - this.lastScrollTop),
                        me(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                        (this.lastScrollTop = Math.floor(this.element.scrollTop)),
                        (this.lastScrollLeft = this.element.scrollLeft));
                }),
                (Le.prototype.destroy = function () {
                    this.isAlive &&
                        (this.event.unbindAll(),
                        ee(this.scrollbarX),
                        ee(this.scrollbarY),
                        ee(this.scrollbarXRail),
                        ee(this.scrollbarYRail),
                        this.removePsClasses(),
                        (this.element = null),
                        (this.scrollbarX = null),
                        (this.scrollbarY = null),
                        (this.scrollbarXRail = null),
                        (this.scrollbarYRail = null),
                        (this.isAlive = !1));
                }),
                (Le.prototype.removePsClasses = function () {
                    this.element.className = this.element.className
                        .split(" ")
                        .filter(function (t) {
                            return !t.match(/^ps([-_].+|)$/);
                        })
                        .join(" ");
                });
            var Ae = Le;
            function Pe(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            var Re = (function (e) {
                r(s, window.HTMLElement);
                var i,
                    o,
                    a =
                        ((i = s),
                        (o = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(i);
                            if (o) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return l(this, t);
                        });
                function s() {
                    return t(this, s), a.apply(this, arguments);
                }
                return (
                    n(s, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                (this.sectionNavList = this.querySelector(".InPageNavigation-items")),
                                    (this.sectionNavLinks = this.sectionNavList.querySelectorAll("a")),
                                    (this.pageHeader = document.querySelector(".Page-header")),
                                    this.createNavLinkHighlighting(),
                                    this.createNavLinkScrolling(),
                                    this.checkForDeeplink(),
                                    this.setScrollBar(),
                                    this.setEvents();
                            },
                        },
                        {
                            key: "setScrollBar",
                            value: function () {
                                this.ps = new Ae(this.sectionNavList, { swipeEasing: !0 });
                            },
                        },
                        {
                            key: "createNavLinkHighlighting",
                            value: function () {
                                var t = this;
                                (this.marker = document.createElement("DIV")),
                                    this.marker.classList.add("marker"),
                                    this.sectionNavList.appendChild(this.marker),
                                    new MutationObserver(function (e, n) {
                                        var i,
                                            r,
                                            o = (function (t, e) {
                                                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                                if (!n) {
                                                    if (
                                                        Array.isArray(t) ||
                                                        (n = (function (t, e) {
                                                            if (t) {
                                                                if ("string" == typeof t) return Pe(t, e);
                                                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                                                return (
                                                                    "Object" === n && t.constructor && (n = t.constructor.name),
                                                                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(t, e) : void 0
                                                                );
                                                            }
                                                        })(t)) ||
                                                        (e && t && "number" == typeof t.length)
                                                    ) {
                                                        n && (t = n);
                                                        var i = 0,
                                                            r = function () {};
                                                        return {
                                                            s: r,
                                                            n: function () {
                                                                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                                                            },
                                                            e: function (t) {
                                                                throw t;
                                                            },
                                                            f: r,
                                                        };
                                                    }
                                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                }
                                                var o,
                                                    a = !0,
                                                    s = !1;
                                                return {
                                                    s: function () {
                                                        n = n.call(t);
                                                    },
                                                    n: function () {
                                                        var t = n.next();
                                                        return (a = t.done), t;
                                                    },
                                                    e: function (t) {
                                                        (s = !0), (o = t);
                                                    },
                                                    f: function () {
                                                        try {
                                                            a || null == n.return || n.return();
                                                        } finally {
                                                            if (s) throw o;
                                                        }
                                                    },
                                                };
                                            })(e);
                                        try {
                                            for (o.s(); !(i = o.n()).done; ) {
                                                var a = i.value;
                                                "attributes" === a.type &&
                                                    "data-current" === a.attributeName &&
                                                    (void 0,
                                                    (r = t.sectionNavList.querySelector("a[data-current]")) &&
                                                        ((t.marker.style.opacity = "1"),
                                                        (t.marker.style.left = "".concat(r.parentNode.offsetLeft, "px")),
                                                        (t.marker.style.width = "".concat(r.clientWidth - r.style.marginLeft - r.style.marginRight, "px"))));
                                            }
                                        } catch (t) {
                                            o.e(t);
                                        } finally {
                                            o.f();
                                        }
                                    }).observe(this.sectionNavList, { attributes: !0, childList: !0, subtree: !0 });
                                var e = document.querySelectorAll("[data-module]");
                                window.addEventListener(
                                    "scroll",
                                    I(50, function () {
                                        e.forEach(function (e) {
                                            if (e.getBoundingClientRect().top <= 250) {
                                                var n = e.querySelector(".AnchorLink");
                                                if (!n) return;
                                                var i = null;
                                                t.sectionNavLinks.forEach(function (t) {
                                                    t.href.split("#")[1] === n.id && (i = t);
                                                }),
                                                    i &&
                                                        (t.sectionNavLinks.forEach(function (t) {
                                                            t.removeAttribute("data-current");
                                                        }),
                                                        i.setAttribute("data-current", "true"));
                                            }
                                        });
                                    })
                                );
                            },
                        },
                        {
                            key: "createNavLinkScrolling",
                            value: function () {
                                var t = this;
                                this.sectionNavLinks.forEach(function (e) {
                                    e.addEventListener("click", function (n) {
                                        n.preventDefault();
                                        var i = e.getAttribute("href").split("#")[1] || !1;
                                        t.scrollToElement(i), window.history.replaceState("", window.document.title, "#" + i);
                                    });
                                });
                            },
                        },
                        {
                            key: "checkForDeeplink",
                            value: function () {
                                var t = this,
                                    e = window.location.hash.split("#")[1] || !1;
                                e &&
                                    window.setTimeout(function () {
                                        t.scrollToElement(e);
                                    }, 1e3);
                            },
                        },
                        {
                            key: "scrollToElement",
                            value: function (t) {
                                var e = document.getElementById(t),
                                    n = 0;
                                if (e && (e.classList.contains("AnchorLink") && (e = e.closest("[data-module]")), e)) {
                                    var i = parseFloat(window.getComputedStyle(e).marginTop);
                                    (n = e.offsetTop - this.sectionNavList.clientHeight - i), window.scroll({ top: n, left: 0, behavior: "smooth" });
                                }
                            },
                        },
                        {
                            key: "setEvents",
                            value: function () {
                                this.pageHeader && this.pageHeader.addEventListener("stateChange", this.setTopPosition.bind(this));
                            },
                        },
                        {
                            key: "setTopPosition",
                            value: function () {
                                var t = this.pageHeader.closest("#Page-header-container");
                                this.style.top = t.clientHeight + (parseInt(t.style.top, 10) || 0) + "px";
                            },
                        },
                    ]),
                    s
                );
            })();
            function xe() {
                window.customElements.define("bsp-accordion", f),
                    window.customElements.define("bsp-audio-player", y),
                    window.customElements.define("bsp-banner", v),
                    window.customElements.define("bsp-brightcove-player", x),
                    window.customElements.define("bsp-carousel", B),
                    window.customElements.define("bsp-copy-link", q),
                    window.customElements.define("bsp-dialogpopup", $t),
                    window.customElements.define("bsp-faq-question", H),
                    window.customElements.define("bsp-form", _),
                    window.customElements.define("bsp-gallery-page-carousel", Q),
                    window.customElements.define("bsp-gallery-page", K),
                    window.customElements.define("bsp-header", St),
                    window.customElements.define("bsp-secondlevelnavigation", Rt),
                    window.customElements.define("bsp-cookie-input", nt),
                    window.customElements.define("bsp-document-referrer-input", it),
                    window.customElements.define("bsp-html5player", D),
                    window.customElements.define("bsp-jw-player", W),
                    window.customElements.define("bsp-language", F),
                    window.customElements.define("bsp-list-auto-rotate", ht),
                    window.customElements.define("bsp-listcarousel", dt),
                    window.customElements.define("bsp-listcarousel-timeline", ft),
                    window.customElements.define("bsp-list-loadmore", wt),
                    window.customElements.define("bsp-liveblog", j),
                    window.customElements.define("bsp-liveblog-feed", X),
                    window.customElements.define("bsp-liveblog-post", $),
                    window.customElements.define("bsp-mapbox", at),
                    window.customElements.define("bsp-map-filters", st),
                    window.customElements.define("bsp-page-heading-video", ct),
                    window.customElements.define("bsp-section-nav", qt),
                    window.customElements.define("bsp-toggler", Yt),
                    window.customElements.define("bsp-search-filters", xt),
                    window.customElements.define("bsp-search-results-module", Tt),
                    window.customElements.define("bsp-search-results-multi-pagination", It),
                    window.customElements.define("bsp-search-overlay", Bt),
                    window.customElements.define("bsp-stat-list", _t),
                    window.customElements.define("bsp-tabs", Ft),
                    window.customElements.define("bsp-tab-icon", Nt),
                    window.customElements.define("bsp-video-playlist-module", zt),
                    window.customElements.define("bsp-vimeo-player", Xt),
                    window.customElements.define("bsp-youtube-player", Vt),
                    window.customElements.define("bsp-filter-tags", Ut),
                    window.customElements.define("bsp-in-page-navigation", Re),
                    new tt(),
                    new jt(),
                    new Ht(),
                    new lt();
            }
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", xe) : xe();
        })();
})();
