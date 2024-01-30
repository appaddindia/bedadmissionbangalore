(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return i(3921);
        },
      ]);
    },
    3921: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          default: function () {
            return _app;
          },
        });
      var o = i(5893),
        d = i(9008),
        r = i.n(d),
        s = i(7294);
      i(2261);
      var t = i(1887),
        layout_PreLoader = () =>
          (0, o.jsx)("div", {
            id: "loader-wrapper",
            children: (0, o.jsx)("div", {
              id: "loading",
              children: (0, o.jsx)("div", {
                id: "loading-center",
                children: (0, o.jsxs)("div", {
                  className: "cssload-loading",
                  children: [
                    (0, o.jsx)("i", {}),
                    (0, o.jsx)("i", {}),
                    (0, o.jsx)("i", {}),
                    (0, o.jsx)("i", {}),
                  ],
                }),
              }),
            }),
          });
      i(415);
      var _app = function (e) {
        let { Component: n, pageProps: i } = e,
          [d, c] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            setTimeout(() => {
              c(!1);
            }, 2e3);
          }, []),
          (0, o.jsxs)(t.Z, {
            children: [
              (0, o.jsxs)(r(), {
                children: [
                  (0, o.jsx)("title", {
                    children: "B.Ed Admission in Bangalore University",
                  }),
                  (0, o.jsx)("link", {
                    rel: "shortcut icon",
                    href: "images/logo.png",
                    type: "images/logo.png",
                  }),
                ],
              }),
              d && (0, o.jsx)(layout_PreLoader, {}),
              (0, o.jsx)("div", {
                className: "wsmenucontainer",
                children: (0, o.jsx)(n, { ...i }),
              }),
            ],
          })
        );
      };
    },
    1887: function (e, n, i) {
      "use strict";
      i.d(n, {
        l: function () {
          return s;
        },
      });
      var o = i(5893),
        d = i(7294);
      let r = { VIDEO: "VIDEO" },
        s = (0, d.createContext)(),
        videoReducer = (e, n) =>
          n.type === r.VIDEO ? { ...e, video: n.payload } : e;
      n.Z = (e) => {
        let [n, i] = (0, d.useReducer)(videoReducer, {
          video: { show: !1, videoId: null },
        });
        return (0, o.jsx)(s.Provider, {
          value: {
            showVideo: (e) => {
              i({ type: r.VIDEO, payload: { show: !0, id: e } });
            },
            hideVideo: () => {
              i({ type: r.VIDEO, payload: { show: !1, videoId: null } });
            },
            video: n.video,
          },
          children: e.children,
        });
      };
    },
    2261: function () {},
    415: function () {},
    9008: function (e, n, i) {
      e.exports = i(9201);
    },
  },
  function (e) {
    var __webpack_exec__ = function (n) {
      return e((e.s = n));
    };
    e.O(0, [774, 179], function () {
      return __webpack_exec__(1118), __webpack_exec__(9974);
    }),
      (_N_E = e.O());
  },
]);
