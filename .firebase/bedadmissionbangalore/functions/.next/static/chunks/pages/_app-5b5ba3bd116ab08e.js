(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, i, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(3921);
        },
      ]);
    },
    3921: function (e, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          default: function () {
            return _app;
          },
        });
      var o = n(5893),
        r = n(9008),
        d = n.n(r),
        t = n(7294);
      n(2261);
      var s = n(1887),
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
      n(415);
      var _app = function (e) {
        let { Component: i, pageProps: n } = e,
          [r, c] = (0, t.useState)(!0);
        return (
          (0, t.useEffect)(() => {
            setTimeout(() => {
              c(!1);
            }, 2e3);
          }, []),
          (0, o.jsxs)(s.Z, {
            children: [
              (0, o.jsxs)(d(), {
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
              r && (0, o.jsx)(layout_PreLoader, {}),
              (0, o.jsx)("div", {
                className: "wsmenucontainer",
                children: (0, o.jsx)(i, { ...n }),
              }),
            ],
          })
        );
      };
    },
    1887: function (e, i, n) {
      "use strict";
      n.d(i, {
        l: function () {
          return t;
        },
      });
      var o = n(5893),
        r = n(7294);
      let d = { VIDEO: "VIDEO" },
        t = (0, r.createContext)(),
        videoReducer = (e, i) =>
          i.type === d.VIDEO ? { ...e, video: i.payload } : e;
      i.Z = (e) => {
        let [i, n] = (0, r.useReducer)(videoReducer, {
          video: { show: !1, videoId: null },
        });
        return (0, o.jsx)(t.Provider, {
          value: {
            showVideo: (e) => {
              n({ type: d.VIDEO, payload: { show: !0, id: e } });
            },
            hideVideo: () => {
              n({ type: d.VIDEO, payload: { show: !1, videoId: null } });
            },
            video: i.video,
          },
          children: e.children,
        });
      };
    },
    2261: function () {},
    415: function () {},
    9008: function (e, i, n) {
      e.exports = n(9201);
    },
  },
  function (e) {
    var __webpack_exec__ = function (i) {
      return e((e.s = i));
    };
    e.O(0, [774, 179], function () {
      return __webpack_exec__(1118), __webpack_exec__(9974);
    }),
      (_N_E = e.O());
  },
]);
