(exports.id = 3921),
  (exports.ids = [3921]),
  (exports.modules = {
    3921: (e, d, i) => {
      "use strict";
      i.r(d), i.d(d, { default: () => _app });
      var s = i(997),
        o = i(968),
        r = i.n(o),
        l = i(6689);
      i(8722);
      var t = i(1887);
      let layout_PreLoader = () =>
        s.jsx("div", {
          id: "loader-wrapper",
          children: s.jsx("div", {
            id: "loading",
            children: s.jsx("div", {
              id: "loading-center",
              children: (0, s.jsxs)("div", {
                className: "cssload-loading",
                children: [
                  s.jsx("i", {}),
                  s.jsx("i", {}),
                  s.jsx("i", {}),
                  s.jsx("i", {}),
                ],
              }),
            }),
          }),
        });
      i(6764);
      let _app = function ({ Component: e, pageProps: d }) {
        let [i, o] = (0, l.useState)(!0);
        return (
          (0, l.useEffect)(() => {
            setTimeout(() => {
              o(!1);
            }, 2e3);
          }, []),
          (0, s.jsxs)(t.Z, {
            children: [
              (0, s.jsxs)(r(), {
                children: [
                  s.jsx("title", { children: "B.Ed Admission in Bangalore" }),
                  s.jsx("link", {
                    rel: "shortcut icon",
                    href: "images/logo.png",
                    type: "images/logo.png",
                  }),
                ],
              }),
              i && s.jsx(layout_PreLoader, {}),
              s.jsx("div", {
                className: "wsmenucontainer",
                children: s.jsx(e, { ...d }),
              }),
            ],
          })
        );
      };
    },
    1887: (e, d, i) => {
      "use strict";
      i.d(d, { Z: () => __WEBPACK_DEFAULT_EXPORT__, l: () => l });
      var s = i(997),
        o = i(6689);
      let r = { VIDEO: "VIDEO" },
        l = (0, o.createContext)(),
        videoReducer = (e, d) =>
          d.type === r.VIDEO ? { ...e, video: d.payload } : e,
        __WEBPACK_DEFAULT_EXPORT__ = (e) => {
          let [d, i] = (0, o.useReducer)(videoReducer, {
            video: { show: !1, videoId: null },
          });
          return s.jsx(l.Provider, {
            value: {
              showVideo: (e) => {
                i({ type: r.VIDEO, payload: { show: !0, id: e } });
              },
              hideVideo: () => {
                i({ type: r.VIDEO, payload: { show: !1, videoId: null } });
              },
              video: d.video,
            },
            children: e.children,
          });
        };
    },
    6764: () => {},
  });
