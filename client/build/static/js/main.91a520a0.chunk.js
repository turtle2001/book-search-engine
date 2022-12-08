/*! For license information please see main.91a520a0.chunk.js.LICENSE.txt */
(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    56: function (t, e, r) {
      t.exports = r(74);
    },
    62: function (t, e, r) {},
    74: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r(0),
        o = r.n(n),
        a = r(18),
        i = r.n(a),
        c = (r(61), r(62), r(31)),
        u = r(7),
        l = r(55),
        s = r(16),
        h = r(10),
        f = r(76),
        p = r(77),
        d = r(82),
        v = r(52),
        m = r(78),
        y = r(79),
        g = r(86),
        w = r(50),
        b = r(51),
        E = r(46),
        x = r.n(E),
        k = new ((function () {
          function t() {
            Object(w.a)(this, t);
          }
          return (
            Object(b.a)(t, [
              {
                key: 'getProfile',
                value: function () {
                  return x()(this.getToken());
                },
              },
              {
                key: 'loggedIn',
                value: function () {
                  var t = this.getToken();
                  return !!t && !this.isTokenExpired(t);
                },
              },
              {
                key: 'isTokenExpired',
                value: function (t) {
                  try {
                    return x()(t).exp < Date.now() / 1e3;
                  } catch (e) {
                    return !1;
                  }
                },
              },
              {
                key: 'getToken',
                value: function () {
                  return localStorage.getItem('id_token');
                },
              },
              {
                key: 'login',
                value: function (t) {
                  localStorage.setItem('id_token', t),
                    window.location.assign('/');
                },
              },
              {
                key: 'logout',
                value: function () {
                  localStorage.removeItem('id_token'),
                    window.location.assign('/');
                },
              },
            ]),
            t
          );
        })())(),
        L = function (t) {
          return fetch('/api/users/me', {
            headers: {
              'Content-Type': 'application/json',
              authorization: 'Bearer '.concat(t),
            },
          });
        },
        O = function (t, e) {
          return fetch('/api/users', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              authorization: 'Bearer '.concat(e),
            },
            body: JSON.stringify(t),
          });
        },
        j = function (t, e) {
          return fetch('/api/users/books/'.concat(t), {
            method: 'DELETE',
            headers: { authorization: 'Bearer '.concat(e) },
          });
        },
        S = function (t) {
          var e = localStorage.getItem('saved_books')
            ? JSON.parse(localStorage.getItem('saved_books'))
            : null;
          if (!e) return !1;
          var r =
            null === e || void 0 === e
              ? void 0
              : e.filter(function (e) {
                  return e !== t;
                });
          return localStorage.setItem('saved_books', JSON.stringify(r)), !0;
        };
      function _() {
        _ = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          i = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, o) {
          var a = e && e.prototype instanceof f ? e : f,
            i = Object.create(a.prototype),
            c = new O(o || []);
          return n(i, '_invoke', { value: E(t, r, c) }), i;
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (N) {
            return { type: 'throw', arg: N };
          }
        }
        t.wrap = l;
        var h = {};
        function f() {}
        function p() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          y = m && m(m(j([])));
        y && y !== e && r.call(y, a) && (v = y);
        var g = (d.prototype = f.prototype = Object.create(v));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var o;
          n(this, '_invoke', {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = s(t[o], t, a);
                    if ('throw' !== u.type) {
                      var l = u.arg,
                        h = l.value;
                      return h && 'object' == typeof h && r.call(h, '__await')
                        ? e.resolve(h.__await).then(
                            function (t) {
                              n('next', t, i, c);
                            },
                            function (t) {
                              n('throw', t, i, c);
                            }
                          )
                        : e.resolve(h).then(
                            function (t) {
                              (l.value = t), i(l);
                            },
                            function (t) {
                              return n('throw', t, i, c);
                            }
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function E(t, e, r) {
          var n = 'suspendedStart';
          return function (o, a) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === o) throw a;
              return S();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var u = s(t, e, r);
              if ('normal' === u.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), u.arg === h)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function x(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ('throw' === r &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                x(t, e),
                'throw' === e.method)) ||
                ('return' !== r &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              h
            );
          var o = s(n, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), h
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              h);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = u(d, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          u(b.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          u(g, c, 'Generator'),
          u(g, a, function () {
            return this;
          }),
          u(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = 'next'), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return n('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      var N = function () {
        var t = Object(n.useState)([]),
          e = Object(h.a)(t, 2),
          r = e[0],
          a = e[1],
          i = Object(n.useState)(''),
          c = Object(h.a)(i, 2),
          u = c[0],
          w = c[1],
          b = Object(n.useState)(
            localStorage.getItem('saved_books')
              ? JSON.parse(localStorage.getItem('saved_books'))
              : []
          ),
          E = Object(h.a)(b, 2),
          x = E[0],
          L = E[1];
        Object(n.useEffect)(function () {
          return function () {
            var t;
            (t = x).length
              ? localStorage.setItem('saved_books', JSON.stringify(t))
              : localStorage.removeItem('saved_books');
          };
        });
        var j = (function () {
            var t = Object(s.a)(
              _().mark(function t(e) {
                var r, n, o, i;
                return _().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((e.preventDefault(), u)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt('return', !1);
                        case 3:
                          return (
                            (t.prev = 3),
                            (t.next = 6),
                            fetch(
                              'https://www.googleapis.com/books/v1/volumes?q='.concat(
                                u
                              )
                            )
                          );
                        case 6:
                          if ((r = t.sent).ok) {
                            t.next = 9;
                            break;
                          }
                          throw new Error('something went wrong!');
                        case 9:
                          return (t.next = 11), r.json();
                        case 11:
                          (n = t.sent),
                            (o = n.items),
                            (i = o.map(function (t) {
                              var e;
                              return {
                                bookId: t.id,
                                authors: t.volumeInfo.authors || [
                                  'No author to display',
                                ],
                                title: t.volumeInfo.title,
                                description: t.volumeInfo.description,
                                image:
                                  (null === (e = t.volumeInfo.imageLinks) ||
                                  void 0 === e
                                    ? void 0
                                    : e.thumbnail) || '',
                              };
                            })),
                            a(i),
                            w(''),
                            (t.next = 21);
                          break;
                        case 18:
                          (t.prev = 18),
                            (t.t0 = t.catch(3)),
                            console.error(t.t0);
                        case 21:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 18]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          S = (function () {
            var t = Object(s.a)(
              _().mark(function t(e) {
                var n, o;
                return _().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = r.find(function (t) {
                              return t.bookId === e;
                            })),
                            (o = k.loggedIn() ? k.getToken() : null))
                          ) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt('return', !1);
                        case 4:
                          return (t.prev = 4), (t.next = 7), O(n, o);
                        case 7:
                          if (t.sent.ok) {
                            t.next = 10;
                            break;
                          }
                          throw new Error('something went wrong!');
                        case 10:
                          L([].concat(Object(l.a)(x), [n.bookId])),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(4)),
                            console.error(t.t0);
                        case 16:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 13]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            f.a,
            { fluid: !0, className: 'text-light bg-dark' },
            o.a.createElement(
              p.a,
              null,
              o.a.createElement('h1', null, 'Search for Books!'),
              o.a.createElement(
                d.a,
                { onSubmit: j },
                o.a.createElement(
                  d.a.Row,
                  null,
                  o.a.createElement(
                    v.a,
                    { xs: 12, md: 8 },
                    o.a.createElement(d.a.Control, {
                      name: 'searchInput',
                      value: u,
                      onChange: function (t) {
                        return w(t.target.value);
                      },
                      type: 'text',
                      size: 'lg',
                      placeholder: 'Search for a book',
                    })
                  ),
                  o.a.createElement(
                    v.a,
                    { xs: 12, md: 4 },
                    o.a.createElement(
                      m.a,
                      { type: 'submit', variant: 'success', size: 'lg' },
                      'Submit Search'
                    )
                  )
                )
              )
            )
          ),
          o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              'h2',
              null,
              r.length
                ? 'Viewing '.concat(r.length, ' results:')
                : 'Search for a book to begin'
            ),
            o.a.createElement(
              y.a,
              null,
              r.map(function (t) {
                return o.a.createElement(
                  g.a,
                  { key: t.bookId, border: 'dark' },
                  t.image
                    ? o.a.createElement(g.a.Img, {
                        src: t.image,
                        alt: 'The cover for '.concat(t.title),
                        variant: 'top',
                      })
                    : null,
                  o.a.createElement(
                    g.a.Body,
                    null,
                    o.a.createElement(g.a.Title, null, t.title),
                    o.a.createElement(
                      'p',
                      { className: 'small' },
                      'Authors: ',
                      t.authors
                    ),
                    o.a.createElement(g.a.Text, null, t.description),
                    k.loggedIn() &&
                      o.a.createElement(
                        m.a,
                        {
                          disabled:
                            null === x || void 0 === x
                              ? void 0
                              : x.some(function (e) {
                                  return e === t.bookId;
                                }),
                          className: 'btn-block btn-info',
                          onClick: function () {
                            return S(t.bookId);
                          },
                        },
                        (
                          null === x || void 0 === x
                            ? void 0
                            : x.some(function (e) {
                                return e === t.bookId;
                              })
                        )
                          ? 'This book has already been saved!'
                          : 'Save this Book!'
                      )
                  )
                );
              })
            )
          )
        );
      };
      function I() {
        I = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          i = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (_) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, o) {
          var a = e && e.prototype instanceof f ? e : f,
            i = Object.create(a.prototype),
            c = new O(o || []);
          return n(i, '_invoke', { value: E(t, r, c) }), i;
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (_) {
            return { type: 'throw', arg: _ };
          }
        }
        t.wrap = l;
        var h = {};
        function f() {}
        function p() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          y = m && m(m(j([])));
        y && y !== e && r.call(y, a) && (v = y);
        var g = (d.prototype = f.prototype = Object.create(v));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var o;
          n(this, '_invoke', {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = s(t[o], t, a);
                    if ('throw' !== u.type) {
                      var l = u.arg,
                        h = l.value;
                      return h && 'object' == typeof h && r.call(h, '__await')
                        ? e.resolve(h.__await).then(
                            function (t) {
                              n('next', t, i, c);
                            },
                            function (t) {
                              n('throw', t, i, c);
                            }
                          )
                        : e.resolve(h).then(
                            function (t) {
                              (l.value = t), i(l);
                            },
                            function (t) {
                              return n('throw', t, i, c);
                            }
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function E(t, e, r) {
          var n = 'suspendedStart';
          return function (o, a) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === o) throw a;
              return S();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var u = s(t, e, r);
              if ('normal' === u.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), u.arg === h)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function x(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ('throw' === r &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                x(t, e),
                'throw' === e.method)) ||
                ('return' !== r &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              h
            );
          var o = s(n, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), h
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              h);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = u(d, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          u(b.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          u(g, c, 'Generator'),
          u(g, a, function () {
            return this;
          }),
          u(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = 'next'), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return n('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      var T = function () {
          var t = Object(n.useState)({}),
            e = Object(h.a)(t, 2),
            r = e[0],
            a = e[1],
            i = Object.keys(r).length;
          Object(n.useEffect)(
            function () {
              (function () {
                var t = Object(s.a)(
                  I().mark(function t() {
                    var e, r, n;
                    return I().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((t.prev = 0),
                                (e = k.loggedIn() ? k.getToken() : null))
                              ) {
                                t.next = 4;
                                break;
                              }
                              return t.abrupt('return', !1);
                            case 4:
                              return (t.next = 6), L(e);
                            case 6:
                              if ((r = t.sent).ok) {
                                t.next = 9;
                                break;
                              }
                              throw new Error('something went wrong!');
                            case 9:
                              return (t.next = 11), r.json();
                            case 11:
                              (n = t.sent), a(n), (t.next = 18);
                              break;
                            case 15:
                              (t.prev = 15),
                                (t.t0 = t.catch(0)),
                                console.error(t.t0);
                            case 18:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 15]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            },
            [i]
          );
          var c = (function () {
            var t = Object(s.a)(
              I().mark(function t(e) {
                var r, n, o;
                return I().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((r = k.loggedIn() ? k.getToken() : null)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt('return', !1);
                        case 3:
                          return (t.prev = 3), (t.next = 6), j(e, r);
                        case 6:
                          if ((n = t.sent).ok) {
                            t.next = 9;
                            break;
                          }
                          throw new Error('something went wrong!');
                        case 9:
                          return (t.next = 11), n.json();
                        case 11:
                          (o = t.sent), a(o), S(e), (t.next = 19);
                          break;
                        case 16:
                          (t.prev = 16),
                            (t.t0 = t.catch(3)),
                            console.error(t.t0);
                        case 19:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 16]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
          return i
            ? o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  f.a,
                  { fluid: !0, className: 'text-light bg-dark' },
                  o.a.createElement(
                    p.a,
                    null,
                    o.a.createElement('h1', null, 'Viewing saved books!')
                  )
                ),
                o.a.createElement(
                  p.a,
                  null,
                  o.a.createElement(
                    'h2',
                    null,
                    r.savedBooks.length
                      ? 'Viewing '
                          .concat(r.savedBooks.length, ' saved ')
                          .concat(
                            1 === r.savedBooks.length ? 'book' : 'books',
                            ':'
                          )
                      : 'You have no saved books!'
                  ),
                  o.a.createElement(
                    y.a,
                    null,
                    r.savedBooks.map(function (t) {
                      return o.a.createElement(
                        g.a,
                        { key: t.bookId, border: 'dark' },
                        t.image
                          ? o.a.createElement(g.a.Img, {
                              src: t.image,
                              alt: 'The cover for '.concat(t.title),
                              variant: 'top',
                            })
                          : null,
                        o.a.createElement(
                          g.a.Body,
                          null,
                          o.a.createElement(g.a.Title, null, t.title),
                          o.a.createElement(
                            'p',
                            { className: 'small' },
                            'Authors: ',
                            t.authors
                          ),
                          o.a.createElement(g.a.Text, null, t.description),
                          o.a.createElement(
                            m.a,
                            {
                              className: 'btn-block btn-danger',
                              onClick: function () {
                                return c(t.bookId);
                              },
                            },
                            'Delete this Book!'
                          )
                        )
                      );
                    })
                  )
                )
              )
            : o.a.createElement('h2', null, 'LOADING...');
        },
        P = r(84),
        G = r(83),
        F = r(81),
        C = r(85),
        B = r(28),
        Y = r(29),
        A = r(80);
      function q() {
        q = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          i = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (_) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, o) {
          var a = e && e.prototype instanceof f ? e : f,
            i = Object.create(a.prototype),
            c = new O(o || []);
          return n(i, '_invoke', { value: E(t, r, c) }), i;
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (_) {
            return { type: 'throw', arg: _ };
          }
        }
        t.wrap = l;
        var h = {};
        function f() {}
        function p() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          y = m && m(m(j([])));
        y && y !== e && r.call(y, a) && (v = y);
        var g = (d.prototype = f.prototype = Object.create(v));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var o;
          n(this, '_invoke', {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = s(t[o], t, a);
                    if ('throw' !== u.type) {
                      var l = u.arg,
                        h = l.value;
                      return h && 'object' == typeof h && r.call(h, '__await')
                        ? e.resolve(h.__await).then(
                            function (t) {
                              n('next', t, i, c);
                            },
                            function (t) {
                              n('throw', t, i, c);
                            }
                          )
                        : e.resolve(h).then(
                            function (t) {
                              (l.value = t), i(l);
                            },
                            function (t) {
                              return n('throw', t, i, c);
                            }
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function E(t, e, r) {
          var n = 'suspendedStart';
          return function (o, a) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === o) throw a;
              return S();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var u = s(t, e, r);
              if ('normal' === u.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), u.arg === h)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function x(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ('throw' === r &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                x(t, e),
                'throw' === e.method)) ||
                ('return' !== r &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              h
            );
          var o = s(n, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), h
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              h);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = u(d, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          u(b.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          u(g, c, 'Generator'),
          u(g, a, function () {
            return this;
          }),
          u(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = 'next'), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return n('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      var D = function () {
        var t = Object(n.useState)({ username: '', email: '', password: '' }),
          e = Object(h.a)(t, 2),
          r = e[0],
          a = e[1],
          i = Object(n.useState)(!1),
          c = Object(h.a)(i, 1)[0],
          u = Object(n.useState)(!1),
          l = Object(h.a)(u, 2),
          f = l[0],
          p = l[1],
          v = function (t) {
            var e = t.target,
              n = e.name,
              o = e.value;
            a(Object(Y.a)(Object(Y.a)({}, r), {}, Object(B.a)({}, n, o)));
          },
          y = (function () {
            var t = Object(s.a)(
              q().mark(function t(e) {
                var n, o, i, c;
                return q().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.preventDefault(),
                            !1 === e.currentTarget.checkValidity() &&
                              (e.preventDefault(), e.stopPropagation()),
                            (t.prev = 3),
                            (t.next = 6),
                            (u = r),
                            fetch('/api/users', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify(u),
                            })
                          );
                        case 6:
                          if ((n = t.sent).ok) {
                            t.next = 9;
                            break;
                          }
                          throw new Error('something went wrong!');
                        case 9:
                          return (t.next = 11), n.json();
                        case 11:
                          (o = t.sent),
                            (i = o.token),
                            (c = o.user),
                            console.log(c),
                            k.login(i),
                            (t.next = 22);
                          break;
                        case 18:
                          (t.prev = 18),
                            (t.t0 = t.catch(3)),
                            console.error(t.t0),
                            p(!0);
                        case 22:
                          a({ username: '', email: '', password: '' });
                        case 23:
                        case 'end':
                          return t.stop();
                      }
                    var u;
                  },
                  t,
                  null,
                  [[3, 18]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            d.a,
            { noValidate: !0, validated: c, onSubmit: y },
            o.a.createElement(
              A.a,
              {
                dismissible: !0,
                onClose: function () {
                  return p(!1);
                },
                show: f,
                variant: 'danger',
              },
              'Something went wrong with your signup!'
            ),
            o.a.createElement(
              d.a.Group,
              null,
              o.a.createElement(d.a.Label, { htmlFor: 'username' }, 'Username'),
              o.a.createElement(d.a.Control, {
                type: 'text',
                placeholder: 'Your username',
                name: 'username',
                onChange: v,
                value: r.username,
                required: !0,
              }),
              o.a.createElement(
                d.a.Control.Feedback,
                { type: 'invalid' },
                'Username is required!'
              )
            ),
            o.a.createElement(
              d.a.Group,
              null,
              o.a.createElement(d.a.Label, { htmlFor: 'email' }, 'Email'),
              o.a.createElement(d.a.Control, {
                type: 'email',
                placeholder: 'Your email address',
                name: 'email',
                onChange: v,
                value: r.email,
                required: !0,
              }),
              o.a.createElement(
                d.a.Control.Feedback,
                { type: 'invalid' },
                'Email is required!'
              )
            ),
            o.a.createElement(
              d.a.Group,
              null,
              o.a.createElement(d.a.Label, { htmlFor: 'password' }, 'Password'),
              o.a.createElement(d.a.Control, {
                type: 'password',
                placeholder: 'Your password',
                name: 'password',
                onChange: v,
                value: r.password,
                required: !0,
              }),
              o.a.createElement(
                d.a.Control.Feedback,
                { type: 'invalid' },
                'Password is required!'
              )
            ),
            o.a.createElement(
              m.a,
              {
                disabled: !(r.username && r.email && r.password),
                type: 'submit',
                variant: 'success',
              },
              'Submit'
            )
          )
        );
      };
      function J() {
        J = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          i = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (_) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, o) {
          var a = e && e.prototype instanceof f ? e : f,
            i = Object.create(a.prototype),
            c = new O(o || []);
          return n(i, '_invoke', { value: E(t, r, c) }), i;
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (_) {
            return { type: 'throw', arg: _ };
          }
        }
        t.wrap = l;
        var h = {};
        function f() {}
        function p() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          y = m && m(m(j([])));
        y && y !== e && r.call(y, a) && (v = y);
        var g = (d.prototype = f.prototype = Object.create(v));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var o;
          n(this, '_invoke', {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = s(t[o], t, a);
                    if ('throw' !== u.type) {
                      var l = u.arg,
                        h = l.value;
                      return h && 'object' == typeof h && r.call(h, '__await')
                        ? e.resolve(h.__await).then(
                            function (t) {
                              n('next', t, i, c);
                            },
                            function (t) {
                              n('throw', t, i, c);
                            }
                          )
                        : e.resolve(h).then(
                            function (t) {
                              (l.value = t), i(l);
                            },
                            function (t) {
                              return n('throw', t, i, c);
                            }
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function E(t, e, r) {
          var n = 'suspendedStart';
          return function (o, a) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === o) throw a;
              return S();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = 'executing';
              var u = s(t, e, r);
              if ('normal' === u.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), u.arg === h)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function x(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ('throw' === r &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                x(t, e),
                'throw' === e.method)) ||
                ('return' !== r &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              h
            );
          var o = s(n, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), h
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              h);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, 'constructor', { value: d, configurable: !0 }),
          n(d, 'constructor', { value: p, configurable: !0 }),
          (p.displayName = u(d, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          u(b.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          u(g, c, 'Generator'),
          u(g, a, function () {
            return this;
          }),
          u(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = 'next'), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return n('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      var V = function () {
          var t = Object(n.useState)({ email: '', password: '' }),
            e = Object(h.a)(t, 2),
            r = e[0],
            a = e[1],
            i = Object(n.useState)(!1),
            c = Object(h.a)(i, 1)[0],
            u = Object(n.useState)(!1),
            l = Object(h.a)(u, 2),
            f = l[0],
            p = l[1],
            v = function (t) {
              var e = t.target,
                n = e.name,
                o = e.value;
              a(Object(Y.a)(Object(Y.a)({}, r), {}, Object(B.a)({}, n, o)));
            },
            y = (function () {
              var t = Object(s.a)(
                J().mark(function t(e) {
                  var n, o, i, c;
                  return J().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              e.preventDefault(),
                              !1 === e.currentTarget.checkValidity() &&
                                (e.preventDefault(), e.stopPropagation()),
                              (t.prev = 3),
                              (t.next = 6),
                              (u = r),
                              fetch('/api/users/login', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(u),
                              })
                            );
                          case 6:
                            if ((n = t.sent).ok) {
                              t.next = 9;
                              break;
                            }
                            throw new Error('something went wrong!');
                          case 9:
                            return (t.next = 11), n.json();
                          case 11:
                            (o = t.sent),
                              (i = o.token),
                              (c = o.user),
                              console.log(c),
                              k.login(i),
                              (t.next = 22);
                            break;
                          case 18:
                            (t.prev = 18),
                              (t.t0 = t.catch(3)),
                              console.error(t.t0),
                              p(!0);
                          case 22:
                            a({ username: '', email: '', password: '' });
                          case 23:
                          case 'end':
                            return t.stop();
                        }
                      var u;
                    },
                    t,
                    null,
                    [[3, 18]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              d.a,
              { noValidate: !0, validated: c, onSubmit: y },
              o.a.createElement(
                A.a,
                {
                  dismissible: !0,
                  onClose: function () {
                    return p(!1);
                  },
                  show: f,
                  variant: 'danger',
                },
                'Something went wrong with your login credentials!'
              ),
              o.a.createElement(
                d.a.Group,
                null,
                o.a.createElement(d.a.Label, { htmlFor: 'email' }, 'Email'),
                o.a.createElement(d.a.Control, {
                  type: 'text',
                  placeholder: 'Your email',
                  name: 'email',
                  onChange: v,
                  value: r.email,
                  required: !0,
                }),
                o.a.createElement(
                  d.a.Control.Feedback,
                  { type: 'invalid' },
                  'Email is required!'
                )
              ),
              o.a.createElement(
                d.a.Group,
                null,
                o.a.createElement(
                  d.a.Label,
                  { htmlFor: 'password' },
                  'Password'
                ),
                o.a.createElement(d.a.Control, {
                  type: 'password',
                  placeholder: 'Your password',
                  name: 'password',
                  onChange: v,
                  value: r.password,
                  required: !0,
                }),
                o.a.createElement(
                  d.a.Control.Feedback,
                  { type: 'invalid' },
                  'Password is required!'
                )
              ),
              o.a.createElement(
                m.a,
                {
                  disabled: !(r.email && r.password),
                  type: 'submit',
                  variant: 'success',
                },
                'Submit'
              )
            )
          );
        },
        z = function () {
          var t = Object(n.useState)(!1),
            e = Object(h.a)(t, 2),
            r = e[0],
            a = e[1];
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              P.a,
              { bg: 'dark', variant: 'dark', expand: 'lg' },
              o.a.createElement(
                p.a,
                { fluid: !0 },
                o.a.createElement(
                  P.a.Brand,
                  { as: c.b, to: '/' },
                  'Google Books Search'
                ),
                o.a.createElement(P.a.Toggle, { 'aria-controls': 'navbar' }),
                o.a.createElement(
                  P.a.Collapse,
                  { id: 'navbar' },
                  o.a.createElement(
                    G.a,
                    { className: 'ml-auto' },
                    o.a.createElement(
                      G.a.Link,
                      { as: c.b, to: '/' },
                      'Search For Books'
                    ),
                    k.loggedIn()
                      ? o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(
                            G.a.Link,
                            { as: c.b, to: '/saved' },
                            'See Your Books'
                          ),
                          o.a.createElement(
                            G.a.Link,
                            { onClick: k.logout },
                            'Logout'
                          )
                        )
                      : o.a.createElement(
                          G.a.Link,
                          {
                            onClick: function () {
                              return a(!0);
                            },
                          },
                          'Login/Sign Up'
                        )
                  )
                )
              )
            ),
            o.a.createElement(
              F.a,
              {
                size: 'lg',
                show: r,
                onHide: function () {
                  return a(!1);
                },
                'aria-labelledby': 'signup-modal',
              },
              o.a.createElement(
                C.a.Container,
                { defaultActiveKey: 'login' },
                o.a.createElement(
                  F.a.Header,
                  { closeButton: !0 },
                  o.a.createElement(
                    F.a.Title,
                    { id: 'signup-modal' },
                    o.a.createElement(
                      G.a,
                      { variant: 'pills' },
                      o.a.createElement(
                        G.a.Item,
                        null,
                        o.a.createElement(
                          G.a.Link,
                          { eventKey: 'login' },
                          'Login'
                        )
                      ),
                      o.a.createElement(
                        G.a.Item,
                        null,
                        o.a.createElement(
                          G.a.Link,
                          { eventKey: 'signup' },
                          'Sign Up'
                        )
                      )
                    )
                  )
                ),
                o.a.createElement(
                  F.a.Body,
                  null,
                  o.a.createElement(
                    C.a.Content,
                    null,
                    o.a.createElement(
                      C.a.Pane,
                      { eventKey: 'login' },
                      o.a.createElement(V, {
                        handleModalClose: function () {
                          return a(!1);
                        },
                      })
                    ),
                    o.a.createElement(
                      C.a.Pane,
                      { eventKey: 'signup' },
                      o.a.createElement(D, {
                        handleModalClose: function () {
                          return a(!1);
                        },
                      })
                    )
                  )
                )
              )
            )
          );
        };
      var K = function () {
        return o.a.createElement(
          c.a,
          null,
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(z, null),
            o.a.createElement(
              u.c,
              null,
              o.a.createElement(u.a, { exact: !0, path: '/', component: N }),
              o.a.createElement(u.a, {
                exact: !0,
                path: '/saved',
                component: T,
              }),
              o.a.createElement(u.a, {
                render: function () {
                  return o.a.createElement(
                    'h1',
                    { className: 'display-2' },
                    'Wrong page!'
                  );
                },
              })
            )
          )
        );
      };
      i.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(K, null)),
        document.getElementById('root')
      );
    },
  },
  [[56, 1, 2]],
]);
//# sourceMappingURL=main.91a520a0.chunk.js.map
