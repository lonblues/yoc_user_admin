(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-7d5d4d42'], { '053b': function (t, e, n) { var a = n('1e2c'); var r = n('d910').f; var i = Function.prototype; var o = i.toString; var c = /^\s*function ([^ (]*)/; var s = 'name'; a && !(s in i) && r(i, s, { configurable: !0, get: function () { try { return o.call(this).match(c)[1] } catch (t) { return '' } } }) }, '1ca1': function (t, e, n) { var a = n('a719'); var r = n('74e7'); var i = n('90fb'); var o = i('species'); t.exports = function (t, e) { var n; return r(t) && (n = t.constructor, typeof n !== 'function' || n !== Array && !r(n.prototype) ? a(n) && (n = n[o], n === null && (n = void 0)) : n = void 0), new (void 0 === n ? Array : n)(e === 0 ? 0 : e) } }, '1ea7': function (t, e, n) { var a = n('efe2'); var r = n('90fb'); var i = n('f594'); var o = r('species'); t.exports = function (t) { return i >= 51 || !a(function () { var e = []; var n = e.constructor = {}; return n[o] = function () { return { foo: 1 } }, e[t](Boolean).foo !== 1 }) } }, '2eeb': function (t, e, n) { 'use strict'; var a = n('1c8b'); var r = n('5dfd').map; var i = n('1ea7'); var o = n('ff9c'); var c = i('map'); var s = o('map'); a({ target: 'Array', proto: !0, forced: !c || !s }, { map: function (t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, '332d': function (t, e, n) { 'use strict'; n.r(e); var a = function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', [n('div', [n('el-button', { attrs: { type: 'primary' }, on: { click: t.toPDF } }, [t._v('导出PDF')])], 1), n('div', { staticStyle: { width: '1190.56px', overflow: 'hidden' }, attrs: { id: 'capture' } }, t._l(t.awardInfo, function (e, a) { return n('div', { key: a, staticStyle: { width: '100%', height: '1683.78px', overflow: 'hidden', position: 'relative' } }, [n('div', { staticStyle: { width: '100%', height: '100%', position: 'absolute', 'z-index': '-1' } }, [n('img', { staticStyle: { width: '100%', height: '100%' }, attrs: { src: t.url } })]), n('div', { staticClass: 'title' }, [t._v(' ' + t._s(e.projectName) + '喜报 ')]), n('div', { staticClass: 'advertising' }, [t._v(' Advertising ')]), n('div', { staticClass: 'testAward' }, [t._v(t._s(e.test_award))]), n('div', { staticClass: 'name', staticStyle: { 'margin-top': '80px' } }, [t._v(t._s(e.name))]), n('div', { staticClass: 'name', staticStyle: { 'margin-top': '40px' } }, [t._v(t._s(e.nameEN))]), n('div', { staticClass: 'school', staticStyle: { 'margin-top': '80px' } }, [t._v(t._s(e.account_name))]), n('div', { staticClass: 'school', staticStyle: { 'margin-top': '40px' } }, [t._v(t._s(e.account_nameEN))])]) }), 0)]) }; var r = []; var i = (n('2eeb'), n('053b'), n('072e')); var o = n.n(i); var c = n('4385'); var s = n.n(c); var u = { data: function () { return { awardInfo: [], capture: { backgroundImage: '', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }, url: '' } }, created: function () { var t = this.$store.state.awardInfo; this.url = ''.concat(t[0].project.project_award_background), console.log(t), t.map(function (t) { t.projectName = t.project.project_name, t.name = t.student_info.student_lastName + t.student_info.student_givenName, t.nameEN = t.student_info.student_givenName_pinyin + ' ' + t.student_info.student_lastName_pinyin, t.account_name = t.account.account_name, t.account_nameEN = t.account.account_nameEN }), console.log(t), this.awardInfo = t }, methods: { toPDF: function () { o()(document.querySelector('#capture'), { useCORS: !0 }).then(function (t) { t.width; var e = t.height; var n = 841.89; var a = e; var r = 0; var i = 595.28; var o = e / 2; var c = t.toDataURL('image/jpeg', 1); var u = new s.a('', 'pt', 'a4'); if (a < 2 * n)u.addImage(c, 'JPEG', 0, 0, i, o); else while (a > 0)u.addImage(c, 'JPEG', 0, r, i, o), a -= 2 * n, r -= 841.89, a > 0 && u.addPage(); u.save('content.pdf') }) } } }; var d = u; var f = (n('61c1'), n('9ca4')); var l = Object(f.a)(d, a, r, !1, null, null, null); e.default = l.exports }, '5dfd': function (t, e, n) { var a = n('e349'); var r = n('692f'); var i = n('3553'); var o = n('d88d'); var c = n('1ca1'); var s = [].push; var u = function (t) { var e = t == 1; var n = t == 2; var u = t == 3; var d = t == 4; var f = t == 6; var l = t == 5 || f; return function (p, v, m, h) { for (var _, g, y = i(p), w = r(y), b = a(v, m, 3), S = o(w.length), x = 0, C = h || c, E = e ? C(p, S) : n ? C(p, 0) : void 0; S > x; x++) if ((l || x in w) && (_ = w[x], g = b(_, x, y), t)) if (e)E[x] = g; else if (g) switch (t) { case 3:return !0; case 5:return _; case 6:return x; case 2:s.call(E, _) } else if (d) return !1; return f ? -1 : u || d ? d : E } }; t.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6) } }, '61c1': function (t, e, n) { 'use strict'; var a = n('b2cf'); var r = n.n(a); r.a }, '74e7': function (t, e, n) { var a = n('2118'); t.exports = Array.isArray || function (t) { return a(t) == 'Array' } }, b2cf: function (t, e, n) {}, ff9c: function (t, e, n) { var a = n('1e2c'); var r = n('efe2'); var i = n('faa8'); var o = Object.defineProperty; var c = {}; var s = function (t) { throw t }; t.exports = function (t, e) { if (i(c, t)) return c[t]; e || (e = {}); var n = [][t]; var u = !!i(e, 'ACCESSORS') && e.ACCESSORS; var d = i(e, 0) ? e[0] : s; var f = i(e, 1) ? e[1] : void 0; return c[t] = !!n && !r(function () { if (u && !a) return !0; var t = { length: -1 }; u ? o(t, 1, { enumerable: !0, get: s }) : t[1] = 1, n.call(t, d, f) }) } } }])
// # sourceMappingURL=chunk-7d5d4d42.80645b86.js.map