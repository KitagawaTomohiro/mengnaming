$(document).ready(function() {
    "use strict";
    var t = $(window),
    i = $("html"),
    n = $("html,body"),
    e = ($("#header"), $("#main")),
    o = $("body").attr("data-page"),
    a = {
        scrollT: 0,
        winW: 800,
        winH: t.height(),
        winRatio: 1.7801,
        slideImgW: 800
    },
    s = navigator.userAgent,
    r = !1; ( - 1 !== s.indexOf("iPhone") || -1 !== s.indexOf("iPod") || -1 !== s.indexOf("iPad") || -1 !== s.indexOf("Android")) && (r = !0, i.addClass("isSP"));
    var d = {
        canvas: document.getElementById("wave"),
        stage: "",
        renderer: "",
        width: "1600",
        height: "800",
        texture: "",
        particle: [],
        flg: !1
    }; !
    
   
   
    function() {
        function i() {
            d.stage = new PIXI.Container,
            d.renderer = new PIXI.autoDetectRenderer(d.width, d.height, {
                transparent: !0,
                antialias: !0
            }),
            d.canvas.appendChild(d.renderer.view),
            h.points.push(new PIXI.Point( - 10, 0));
            for (var t = 0; t < h.ropePoint + 2; t++) h.points.push(new PIXI.Point((t - 1) * h.ropeLength, 0));
            h.points.push(new PIXI.Point(h.ropePoint * h.ropeLength + 10, 400)),
            h.points.push(new PIXI.Point( - 10, 400)),
            h.g = new PIXI.Graphics,
            h.g.position.y = 500,
            d.stage.addChild(h.g),
            r(),
            n(),
            o()
        }
        function n() {
            "" !== h.tween && h.tween.stop(),
            h.tween = new TWEEN.Tween(h).to({
                strength: 9,
                delay: .15
            },
            1e3).easing(TWEEN.Easing.Quartic.Out).onComplete(function() {
                h.tween = new TWEEN.Tween(h).to({
                    strength: 1.3,
                    delay: 1
                },
                3e3).start()
            }).start()
        }
        function o() {
            h.count += .1;
            for (var t = 1,
            i = h.points.length - 2; i > t; t++) {
                var n = (h.points[t - 1].y - h.points[t].y) * h.spring;
                n += (h.points[t].y - h.points[1 * t].y) * h.spring,
                n *= h.friction,
                h.points[t].y += n,
                h.points[t].y += Math.sin(t * h.delay + h.count) * h.strength
            }
            s(),
            TWEEN.update(),
            d.renderer.render(d.stage),
            requestAnimationFrame(o)
        }
        function s() {
            h.g.clear(),
            h.g.beginFill(16777215),
            h.g.moveTo(h.points[0].x, h.points[0].y);
            for (var t = 1; t < h.points.length; t++) {
                var i = h.points[t - 1].x + (h.points[t - 1].x - h.points[t].x) / 2,
                n = h.points[t - 1].y + (h.points[t - 1].y - h.points[t].y) / 2;
                h.g.bezierCurveTo(i, n, i, n, h.points[t].x, h.points[t].y)
            }
            h.g.endFill()
        }
        function r() {
            /*a.winW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            a.winH = t.height(),
            f.height(a.winH);
            var i = .35 * f.find("canvas").height();
            f.find("canvas").css({
                bottom: -i
            }),
            e.css({
                marginTop: i / 2 + a.winH
            }),
            c.height(a.winH),
            a.winW / a.winH < a.winRatio ? (l.find("video,img").css({
                width: "",
                height: "100%"
            }), a.mainVisualW = l.find("video,img").width(), l.find("div").css({
                marginLeft: (a.winW - a.mainVisualW) / 2
            })) : (l.find("video,img").css({
                width: a.winW,
                height: "auto"
            }), l.find("div").css({
                marginLeft: ""
            }))*/
        }
        var c = $("#main_visual"),
        l = $("#main_visual_img"),
        f = $("#wave");
        if (0 === f.length) return ! 1;
        var h = {
            points: [],
            g: "",
            tween: "",
            count: 0,
            ropePoint: 20,
            friction: .9,
            spring: 1,
            delay: .1,
            strength: 20
        };
        h.ropeLength = d.width / h.ropePoint,
        t.load(function() {
            r(),
            setTimeout(r, 400),
            Modernizr.canvas && ("home" === $("body").attr("data-page") ? setTimeout(i, 800) : i())
        });
        var u = !1;
        t.scroll(function() {
            u !== !1 && clearTimeout(u),
            u = setTimeout(function() {
                n()
            },
            200)
        });
        var v = !1;
        t.resize("load",
        function() {
            v !== !1 && clearTimeout(v),
            v = setTimeout(function() {
                r()
            },
            20)
        })
    } ()
});