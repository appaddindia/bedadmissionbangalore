(exports.id = 3921),
  (exports.ids = [3921]),
  (exports.modules = {
    3921: (e, i, d) => {
      "use strict";
      d.r(i), d.d(i, { default: () => _app });
      var s = d(997),
        o = d(968),
        r = d.n(o),
        l = d(6689);
      d(8722);
      var t = d(1887);
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
      d(6764);
      let _app = function ({ Component: e, pageProps: i }) {
        let [d, o] = (0, l.useState)(!0);
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
                  s.jsx("title", {
                    children: "B.Ed Admission in Bangalore University",
                  }),
                  s.jsx("link", {
                    rel: "shortcut icon",
                    href: "images/logo.png",
                    type: "images/logo.png",
                  }),
                ],
              }),
              d && s.jsx(layout_PreLoader, {}),
              s.jsx("div", {
                className: "wsmenucontainer",
                children: s.jsx(e, { ...i }),
              }),
            ],
          })
        );
      };
    },
    1887: (e, i, d) => {
      "use strict";
      d.d(i, { Z: () => __WEBPACK_DEFAULT_EXPORT__, l: () => l });
      var s = d(997),
        o = d(6689);
      let r = { VIDEO: "VIDEO" },
        l = (0, o.createContext)(),
        videoReducer = (e, i) =>
          i.type === r.VIDEO ? { ...e, video: i.payload } : e,
        __WEBPACK_DEFAULT_EXPORT__ = (e) => {
          let [i, d] = (0, o.useReducer)(videoReducer, {
            video: { show: !1, videoId: null },
          });
          return s.jsx(l.Provider, {
            value: {
              showVideo: (e) => {
                d({ type: r.VIDEO, payload: { show: !0, id: e } });
              },
              hideVideo: () => {
                d({ type: r.VIDEO, payload: { show: !1, videoId: null } });
              },
              video: i.video,
            },
            children: e.children,
          });
        };
    },
    6764: () => {},
  });
