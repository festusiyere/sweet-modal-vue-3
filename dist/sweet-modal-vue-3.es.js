(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode("@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0px;top:35px}to{width:47px;right:8px;top:38px}}@keyframes rotatePlaceholder{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}.animateSuccessTip{animation:animateSuccessTip .75s}.animateSuccessLong{animation:animateSuccessLong .75s}.sweet-modal-icon.sweet-modal-success.animate:after{animation:rotatePlaceholder 4.25s ease-in}@keyframes animateErrorIcon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0);opacity:1}}.animateErrorIcon{animation:animateErrorIcon .5s}@keyframes animateXMark{0%{transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);margin-top:-6px}to{transform:scale(1);margin-top:0;opacity:1}}.animateXMark{animation:animateXMark .5s}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.pulseWarning{animation:pulseWarning .75s infinite alternate}@keyframes pulseWarningIns{0%{background-color:#f8d486}to{background-color:#f8bb86}}.pulseWarningIns{animation:pulseWarningIns .75s infinite alternate}@keyframes rotate-loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.sweet-modal-icon{position:relative;width:80px;height:80px;border:4px solid gray;border-radius:50%;margin:auto;padding:0;box-sizing:content-box}.sweet-modal-icon.sweet-modal-error{border-color:#f44336}.sweet-modal-icon.sweet-modal-error .sweet-modal-x-mark{position:relative;display:block}.sweet-modal-icon.sweet-modal-error .sweet-modal-line{display:block;position:absolute;top:37px;height:5px;width:47px;background-color:#f44336;border-radius:2px}.sweet-modal-icon.sweet-modal-error .sweet-modal-line.sweet-modal-left{transform:rotate(45deg);left:17px}.sweet-modal-icon.sweet-modal-error .sweet-modal-line.sweet-modal-right{transform:rotate(-45deg);right:16px}.sweet-modal-icon.sweet-modal-warning{border-color:#ff9800}.sweet-modal-icon.sweet-modal-warning .sweet-modal-body{position:absolute;width:5px;height:47px;left:50%;top:10px;margin-left:-2px;border-radius:2px;background-color:#ff9800}.sweet-modal-icon.sweet-modal-warning .sweet-modal-dot{position:absolute;left:50%;bottom:10px;width:7px;height:7px;margin-left:-3px;border-radius:50%;background-color:#ff9800}.sweet-modal-icon.sweet-modal-info{border-color:#039be5}.sweet-modal-icon.sweet-modal-info:before{content:\"\";position:absolute;width:5px;height:29px;left:50%;bottom:17px;margin-left:-2px;border-radius:2px;background-color:#039be5}.sweet-modal-icon.sweet-modal-info:after{content:\"\";position:absolute;width:7px;height:7px;top:19px;margin-left:-3px;border-radius:50%;background-color:#039be5}.sweet-modal-icon.sweet-modal-success{border-color:#4caf50}.sweet-modal-icon.sweet-modal-success:before,.sweet-modal-icon.sweet-modal-success:after{content:\"\";position:absolute;border-radius:40px;width:60px;height:120px;background:white;transform:rotate(45deg)}.sweet-modal-icon.sweet-modal-success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sweet-modal-icon.sweet-modal-success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;transform:rotate(-45deg);-webkit-transform-origin:0px 60px;transform-origin:0px 60px}.sweet-modal-icon.sweet-modal-success .sweet-modal-placeholder{box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2;width:80px;height:80px;border:4px solid rgba(76,175,80,.2);border-radius:50%}.sweet-modal-icon.sweet-modal-success .sweet-modal-fix{position:absolute;left:28px;top:8px;z-index:1;width:7px;height:90px;background-color:#fff;transform:rotate(-45deg)}.sweet-modal-icon.sweet-modal-success .sweet-modal-line{display:block;position:absolute;z-index:2;height:5px;background-color:#4caf50;border-radius:2px}.sweet-modal-icon.sweet-modal-success .sweet-modal-line.sweet-modal-tip{width:25px;left:14px;top:46px;transform:rotate(45deg)}.sweet-modal-icon.sweet-modal-success .sweet-modal-line.sweet-modal-long{width:47px;right:8px;top:38px;transform:rotate(-45deg)}.sweet-modal-icon.sweet-modal-custom{border-radius:0;border:none;background-size:contain;background-position:center center;background-repeat:no-repeat}.sweet-modal.theme-dark .sweet-modal-icon.sweet-modal-success:before,.sweet-modal.theme-dark .sweet-modal-icon.sweet-modal-success:after,.sweet-modal.theme-dark .sweet-modal-icon.sweet-modal-success .sweet-modal-fix{background-color:#182028}.sweet-modal-overlay{position:fixed;top:0;left:0;width:100vw;height:100%;z-index:9001;font-size:14px;-webkit-font-smoothing:antialiased;background:rgba(255,255,255,.9);opacity:0;transition:opacity .3s;transform:translate(0);-webkit-perspective:500px}.sweet-modal-overlay.theme-dark{background:rgba(24,32,40,.94)}.sweet-modal-overlay.is-visible{opacity:1}.sweet-modal{-moz-box-sizing:border-box;box-sizing:border-box;background:#fff;box-shadow:0 8px 46px #00000014,0 2px 6px #00000008;position:absolute;top:50%;left:50%;width:80%;max-width:640px;max-height:100vh;overflow-y:auto;border-radius:2px;transform:scale(.9) translate(calc(-50% - 32px),-50%);opacity:0;transition-property:transform,opacity;transition-duration:.3s;transition-delay:.05s;transition-timing-function:cubic-bezier(.52,.02,.19,1.02)}.sweet-modal .sweet-box-actions{position:absolute;top:12px;right:12px}.sweet-modal .sweet-box-actions .sweet-action-close{display:inline-block;cursor:pointer;color:#222c38;text-align:center;width:42px;height:42px;line-height:42px;border-radius:50%}.sweet-modal .sweet-box-actions .sweet-action-close svg{width:24px;height:24px;vertical-align:middle;margin-top:-2px}.sweet-modal .sweet-box-actions .sweet-action-close svg path,.sweet-modal .sweet-box-actions .sweet-action-close svg polygon,.sweet-modal .sweet-box-actions .sweet-action-close svg rect,.sweet-modal .sweet-box-actions .sweet-action-close svg circle{fill:currentColor}.sweet-modal .sweet-box-actions .sweet-action-close svg{fill:currentColor}.sweet-modal .sweet-box-actions .sweet-action-close:hover{background:#039BE5;color:#fff}.sweet-modal .sweet-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;height:64px;line-height:64px;border-bottom:1px solid #eaeaea;padding-left:32px;padding-right:64px}.sweet-modal .sweet-title>h2{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:0;padding:0;font-weight:500;font-size:22px}.sweet-modal ul.sweet-modal-tabs{padding:0;list-style-type:none;display:flex;align-items:center;width:calc(100% + 32px);height:100%;margin:0 0 0 -32px;overflow-x:auto}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab{display:block;height:100%}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:flex;align-items:center;padding-left:20px;padding-right:20px;color:#222c38;text-decoration:none;text-align:center;height:100%}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-title{display:block}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon{display:block;line-height:1}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img{width:16px;height:16px}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg path,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg polygon,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg rect,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg circle,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img path,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img polygon,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img rect,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img circle{fill:currentColor}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img{fill:currentColor}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon+span.sweet-modal-tab-title{line-height:1;margin-top:8px}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab:first-child a{padding-left:32px}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab.active a{font-weight:600;color:#039be5}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab.disabled a{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;pointer-events:none;color:#999}.sweet-modal.has-tabs:not(.has-title) .sweet-title{height:84px;line-height:84px}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs{width:100%;height:48px;margin:0;border-bottom:1px solid #eaeaea}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a{margin-top:-4px}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon{display:inline-block}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg,.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img{vertical-align:middle;margin-top:-2px;margin-right:8px}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-title{display:inline-block}.sweet-modal .sweet-content{display:flex;align-items:center;padding:24px 32px;line-height:1.5}.sweet-modal .sweet-content .sweet-content-content{flex-grow:1}.sweet-modal .sweet-content .sweet-modal-tab:not(.active){display:none}.sweet-modal .sweet-content .sweet-modal-icon{margin-bottom:36px}.sweet-modal .sweet-buttons{text-align:right;padding:12px 20px}.sweet-modal .sweet-content+.sweet-buttons{border-top:1px solid #eaeaea}.sweet-modal.is-alert .sweet-content{display:block;text-align:center;font-size:16px;padding-top:64px;padding-bottom:64px}.sweet-modal.has-tabs.has-icon .sweet-content{padding-top:32px;padding-bottom:32px}.sweet-modal.has-tabs.has-icon .sweet-content .sweet-content-content{padding-left:32px}.sweet-modal.has-tabs.has-icon .sweet-content .sweet-modal-icon{margin-bottom:0}.sweet-modal:not(.has-content) .sweet-modal-icon{margin-bottom:0}.sweet-modal.theme-dark{background:#182028;color:#fff}.sweet-modal.theme-dark .sweet-box-actions .sweet-action-close{color:#fff}.sweet-modal.theme-dark .sweet-title{border-bottom-color:#090c0f;box-shadow:0 1px #273442}.sweet-modal.theme-dark ul.sweet-modal-tabs li a{color:#fff}.sweet-modal.theme-dark ul.sweet-modal-tabs li.active a{color:#039be5}.sweet-modal.theme-dark ul.sweet-modal-tabs li.disabled a{color:#3e5368}.sweet-modal.theme-dark.has-tabs.has-title ul.sweet-modal-tabs{border-bottom-color:#090c0f;box-shadow:0 1px #273442}.sweet-modal.theme-dark .sweet-content+.sweet-buttons{border-top-color:#273442;box-shadow:0 -1px #090c0f}.sweet-modal .sweet-buttons,.sweet-modal .sweet-content{opacity:0;transition-property:transform,opacity;transition-duration:.3s;transition-delay:.09s;transition-timing-function:cubic-bezier(.52,.02,.19,1.02)}.sweet-modal .sweet-content{transform:translateY(-8px)}.sweet-modal .sweet-buttons{transform:translateY(16px)}.sweet-modal.is-visible{transform:translate(-50%,-50%);opacity:1}.sweet-modal.is-visible .sweet-buttons,.sweet-modal.is-visible .sweet-content{transform:none;opacity:1}.sweet-modal.bounce{animation-name:bounce;animation-duration:.3s;animation-iteration-count:2;animation-direction:alternate}@media screen and (min-width: 601px){@keyframes bounce{0%{transform:scale(1) translate(-50%,-50%)}50%{transform:scale(1.02) translate(calc(-50% + 8px),-50%)}to{transform:scale(1) translate(-50%,-50%)}}}@media screen and (max-width: 600px){.sweet-modal.is-mobile-fullscreen{width:100%;height:100%;left:0;top:0;transform:scale(.9)}.sweet-modal.is-mobile-fullscreen.is-visible{transform:none}.sweet-modal.is-mobile-fullscreen .sweet-buttons{-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;left:0;width:100%}}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { useContext, ref, reactive, computed, onMounted, onBeforeUnmount, withDirectives, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, createCommentVNode, Fragment, renderList, withModifiers, toDisplayString, vShow } from "vue";
var SweetModal_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "sweet-box-actions" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    fill: "#292c34"
  })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 0,
  class: "sweet-title"
};
const _hoisted_5 = {
  key: 0,
  class: "sweet-modal-tabs"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "sweet-modal-valign" };
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "sweet-modal-tab-title" };
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = {
  key: 1,
  class: "sweet-modal-tabs"
};
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "sweet-modal-valign" };
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = { class: "sweet-modal-tab-title" };
const _hoisted_16 = /* @__PURE__ */ createElementVNode("span", { class: "sweet-modal-x-mark" }, [
  /* @__PURE__ */ createElementVNode("span", { class: "sweet-modal-line sweet-modal-left" }),
  /* @__PURE__ */ createElementVNode("span", { class: "sweet-modal-line sweet-modal-right" })
], -1);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = /* @__PURE__ */ createElementVNode("span", { class: "sweet-modal-body" }, null, -1);
const _hoisted_19 = /* @__PURE__ */ createElementVNode("span", { class: "sweet-modal-dot" }, null, -1);
const _hoisted_20 = [
  _hoisted_18,
  _hoisted_19
];
const _hoisted_21 = /* @__PURE__ */ createElementVNode("span", { class: "sweet-modal-line sweet-modal-tip" }, null, -1);
const _hoisted_22 = /* @__PURE__ */ createElementVNode("span", { class: "sweet-modal-line sweet-modal-long" }, null, -1);
const _hoisted_23 = /* @__PURE__ */ createElementVNode("div", { class: "sweet-modal-placeholder" }, null, -1);
const _hoisted_24 = /* @__PURE__ */ createElementVNode("div", { class: "sweet-modal-fix" }, null, -1);
const _hoisted_25 = [
  _hoisted_21,
  _hoisted_22,
  _hoisted_23,
  _hoisted_24
];
const _hoisted_26 = {
  key: 4,
  class: "sweet-content-content"
};
const _hoisted_27 = {
  key: 2,
  class: "sweet-buttons"
};
const __default__$1 = {
  name: "SweetModal"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    overlayTheme: {
      type: String,
      required: false,
      default: "light"
    },
    modalTheme: {
      type: String,
      required: false,
      default: "light"
    },
    blocking: {
      type: Boolean,
      required: false,
      default: false
    },
    pulseOnBlock: {
      type: Boolean,
      required: false,
      default: true
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
    hideCloseButton: {
      type: Boolean,
      required: false,
      default: false
    },
    enableMobileFullscreen: {
      type: Boolean,
      required: false,
      default: true
    },
    width: {
      type: [Number, String],
      required: false,
      default: null
    }
  },
  emits: ["open", "close"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const { slots } = useContext();
    const visible = ref(false);
    const is_open = ref(false);
    const is_bouncing = ref(false);
    const currentTab = ref(null);
    const tabs = ref([]);
    const icon_success = ref(null);
    const icon_warning = ref(null);
    const icon_info = ref(null);
    const icon_error = ref(null);
    const content = ref(null);
    const backups = reactive({
      body: {
        height: null,
        overflow: null
      }
    });
    const has_title = computed(() => {
      return props.title || slots["title"];
    });
    const has_tabs = computed(() => {
      return tabs.value.length > 0;
    });
    const has_content = computed(() => {
      return slots["default"];
    });
    computed(() => {
      return tabs.value.filter((t) => t.active === true)[0];
    });
    const overlay_classes = computed(() => {
      return [
        "sweet-modal-overlay",
        "theme-" + props.overlayTheme,
        "sweet-modal-clickable",
        {
          "is-visible": visible.value,
          blocking: props.blocking
        }
      ];
    });
    const modal_classes = computed(() => {
      return [
        "sweet-modal",
        "theme-" + props.modalTheme,
        {
          "has-title": has_title.value,
          "has-tabs": has_tabs.value,
          "has-content": has_content.value,
          "has-icon": props.icon,
          "is-mobile-fullscreen": props.enableMobileFullscreen,
          "is-visible": visible.value,
          "is-alert": props.icon && !has_tabs.value || !props.icon && !props.title && !slots["title"],
          bounce: is_bouncing.value
        }
      ];
    });
    const modal_style = computed(() => {
      let width = props.width;
      let maxWidth = null;
      if (width !== null) {
        if (Number(width) == width) {
          width = width + "px";
        }
        maxWidth = "none";
      }
      return {
        width,
        maxWidth
      };
    });
    onMounted(() => {
      tabs.value = slots.default().filter((c) => c.type.name && c.type.name == "tab");
      if (has_tabs.value) {
        currentTab.value = _changeTab(tabs.value[0]);
      }
      document.addEventListener("keyup", _onDocumentKeyup);
    });
    onBeforeUnmount(() => {
      _unlockBody();
      document.removeEventListener("keyup", _onDocumentKeyup);
    });
    const open = (tabId = null) => {
      if (tabId && has_tabs.value) {
        let openingTabs = tabs.value.filter((tab) => {
          return tab.id === tabId;
        });
        if (openingTabs.length > 0) {
          currentTab.value = _changeTab(openingTabs[0]);
        } else {
          let openingTab = tabs[tabId];
          if (openingTab) {
            currentTab.value = _changeTab(openingTab);
          }
        }
      }
      is_open.value = true;
      _lockBody();
      _animateIcon();
      setTimeout(() => visible.value = true, 30);
      emit("open");
    };
    const close = () => {
      visible.value = false;
      _unlockBody();
      setTimeout(() => is_open.value = false, 300);
      emit("close");
    };
    const bounce = () => {
      is_bouncing.value = true;
      setTimeout(() => is_bouncing.value = false, 330);
    };
    const _lockBody = () => {
      backups.body.height = document.body.style.height;
      backups.body.overflow = document.body.style.overflow;
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    };
    const _unlockBody = () => {
      document.body.style.height = backups.body.height;
      document.body.style.overflow = backups.body.overflow;
    };
    const _onOverlayClick = (event) => {
      if (!event.target.classList || event.target.classList.contains("sweet-modal-clickable")) {
        if (props.blocking) {
          if (props.pulseOnBlock)
            bounce();
        } else {
          close();
        }
      }
    };
    const _onDocumentKeyup = (event) => {
      if (event.keyCode == 27) {
        if (props.blocking) {
          if (props.pulseOnBlock)
            bounce();
        } else {
          close();
        }
      }
    };
    const _changeTab = (tab) => {
      tabs.value.map((t) => t.active = t == tab);
      currentTab.value = tab;
    };
    const _getClassesForTab = (tab) => {
      return [
        "sweet-modal-tab",
        {
          active: tab.active,
          disabled: tab.disabled
        }
      ];
    };
    const _animateIcon = () => {
      if (!props.icon)
        return;
      switch (props.icon) {
        case "success":
          setTimeout(() => {
            _applyClasses(icon_success.value, {
              "": ["animate"],
              ".sweet-modal-tip": ["animateSuccessTip"],
              ".sweet-modal-long": ["animateSuccessLong"]
            });
          }, 80);
          break;
        case "warning":
          _applyClasses(icon_warning.value, {
            "": ["pulseWarning"],
            ".sweet-modal-body": ["pulseWarningIns"],
            ".sweet-modal-dot": ["pulseWarningIns"]
          });
          break;
        case "error":
          setTimeout(() => {
            _applyClasses(icon_error.value, {
              "": ["animateErrorIcon"],
              ".sweet-modal-x-mark": ["animateXMark"]
            });
          }, 80);
          break;
      }
    };
    const _applyClasses = ($ref, classMap) => {
      for (let cl in classMap) {
        let classes = classMap[cl];
        let $el;
        if (cl == "") {
          $el = $ref;
        } else {
          $el = $ref.querySelector(cl);
        }
        $el.classList.remove(...classes);
        $el.classList.add(...classes);
      }
    };
    expose({
      close,
      open
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(overlay_classes)),
        onClick: _onOverlayClick
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(modal_classes)),
          style: normalizeStyle(unref(modal_style))
        }, [
          createElementVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "box-action"),
            !__props.hideCloseButton ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "sweet-action-close",
              onClick: close
            }, _hoisted_3)) : createCommentVNode("", true)
          ]),
          unref(has_title) || unref(has_tabs) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            unref(has_tabs) && !unref(has_title) ? (openBlock(), createElementBlock("ul", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
                return openBlock(), createElementBlock("li", {
                  class: normalizeClass(_getClassesForTab(tab))
                }, [
                  createElementVNode("a", {
                    href: "#",
                    onClick: withModifiers(($event) => _changeTab(tab), ["prevent"])
                  }, [
                    createElementVNode("div", _hoisted_7, [
                      tab.props.icon ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        innerHTML: tab.props.icon,
                        class: "sweet-modal-tab-icon"
                      }, null, 8, _hoisted_8)) : createCommentVNode("", true),
                      createElementVNode("span", _hoisted_9, toDisplayString(tab.props.title), 1)
                    ])
                  ], 8, _hoisted_6)
                ], 2);
              }), 256))
            ])) : createCommentVNode("", true),
            unref(has_title) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              __props.title ? (openBlock(), createElementBlock("h2", {
                key: 0,
                innerHTML: __props.title
              }, null, 8, _hoisted_10)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "title")
            ], 64)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          unref(has_title) && unref(has_tabs) ? (openBlock(), createElementBlock("ul", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(_getClassesForTab(tab))
              }, [
                createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers(($event) => _changeTab(tab), ["prevent"])
                }, [
                  createElementVNode("div", _hoisted_13, [
                    tab.props.icon ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      innerHTML: tab.props.icon,
                      class: "sweet-modal-tab-icon"
                    }, null, 8, _hoisted_14)) : createCommentVNode("", true),
                    createElementVNode("span", _hoisted_15, toDisplayString(tab.props.title), 1)
                  ])
                ], 8, _hoisted_12)
              ], 2);
            }), 256))
          ])) : createCommentVNode("", true),
          createElementVNode("div", {
            class: "sweet-content",
            ref_key: "content",
            ref: content
          }, [
            __props.icon == "error" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "sweet-modal-icon sweet-modal-error",
              ref_key: "icon_error",
              ref: icon_error
            }, _hoisted_17, 512)) : createCommentVNode("", true),
            __props.icon == "warning" ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "sweet-modal-icon sweet-modal-warning",
              ref_key: "icon_warning",
              ref: icon_warning
            }, _hoisted_20, 512)) : createCommentVNode("", true),
            __props.icon == "info" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "sweet-modal-icon sweet-modal-info",
              ref_key: "icon_info",
              ref: icon_info
            }, null, 512)) : createCommentVNode("", true),
            __props.icon == "success" ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: "sweet-modal-icon sweet-modal-success",
              ref_key: "icon_success",
              ref: icon_success
            }, _hoisted_25, 512)) : createCommentVNode("", true),
            _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_26, [
              renderSlot(_ctx.$slots, "default")
            ])) : createCommentVNode("", true)
          ], 512),
          _ctx.$slots.button ? (openBlock(), createElementBlock("div", _hoisted_27, [
            renderSlot(_ctx.$slots, "button")
          ])) : createCommentVNode("", true)
        ], 6)
      ], 2)), [
        [vShow, is_open.value]
      ]);
    };
  }
});
const __default__ = {
  name: "tab"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props, { expose }) {
    const active = ref(false);
    expose(["active"]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["sweet-modal-tab", { active: active.value }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var index = {
  install(app) {
    app.component("SweetModal", _sfc_main$1);
    app.component("SweetModalTab", _sfc_main);
  }
};
export { index as default };
