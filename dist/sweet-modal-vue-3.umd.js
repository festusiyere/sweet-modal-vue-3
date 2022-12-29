(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode("@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0px;top:35px}to{width:47px;right:8px;top:38px}}@keyframes rotatePlaceholder{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}.animateSuccessTip{animation:animateSuccessTip .75s}.animateSuccessLong{animation:animateSuccessLong .75s}.sweet-modal-icon.sweet-modal-success.animate:after{animation:rotatePlaceholder 4.25s ease-in}@keyframes animateErrorIcon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0);opacity:1}}.animateErrorIcon{animation:animateErrorIcon .5s}@keyframes animateXMark{0%{transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);margin-top:-6px}to{transform:scale(1);margin-top:0;opacity:1}}.animateXMark{animation:animateXMark .5s}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.pulseWarning{animation:pulseWarning .75s infinite alternate}@keyframes pulseWarningIns{0%{background-color:#f8d486}to{background-color:#f8bb86}}.pulseWarningIns{animation:pulseWarningIns .75s infinite alternate}@keyframes rotate-loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.sweet-modal-icon{position:relative;width:80px;height:80px;border:4px solid gray;border-radius:50%;margin:auto;padding:0;box-sizing:content-box}.sweet-modal-icon.sweet-modal-error{border-color:#f44336}.sweet-modal-icon.sweet-modal-error .sweet-modal-x-mark{position:relative;display:block}.sweet-modal-icon.sweet-modal-error .sweet-modal-line{display:block;position:absolute;top:37px;height:5px;width:47px;background-color:#f44336;border-radius:2px}.sweet-modal-icon.sweet-modal-error .sweet-modal-line.sweet-modal-left{transform:rotate(45deg);left:17px}.sweet-modal-icon.sweet-modal-error .sweet-modal-line.sweet-modal-right{transform:rotate(-45deg);right:16px}.sweet-modal-icon.sweet-modal-warning{border-color:#ff9800}.sweet-modal-icon.sweet-modal-warning .sweet-modal-body{position:absolute;width:5px;height:47px;left:50%;top:10px;margin-left:-2px;border-radius:2px;background-color:#ff9800}.sweet-modal-icon.sweet-modal-warning .sweet-modal-dot{position:absolute;left:50%;bottom:10px;width:7px;height:7px;margin-left:-3px;border-radius:50%;background-color:#ff9800}.sweet-modal-icon.sweet-modal-info{border-color:#039be5}.sweet-modal-icon.sweet-modal-info:before{content:\"\";position:absolute;width:5px;height:29px;left:50%;bottom:17px;margin-left:-2px;border-radius:2px;background-color:#039be5}.sweet-modal-icon.sweet-modal-info:after{content:\"\";position:absolute;width:7px;height:7px;top:19px;margin-left:-3px;border-radius:50%;background-color:#039be5}.sweet-modal-icon.sweet-modal-success{border-color:#4caf50}.sweet-modal-icon.sweet-modal-success:before,.sweet-modal-icon.sweet-modal-success:after{content:\"\";position:absolute;border-radius:40px;width:60px;height:120px;background:white;transform:rotate(45deg)}.sweet-modal-icon.sweet-modal-success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sweet-modal-icon.sweet-modal-success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;transform:rotate(-45deg);-webkit-transform-origin:0px 60px;transform-origin:0px 60px}.sweet-modal-icon.sweet-modal-success .sweet-modal-placeholder{box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2;width:80px;height:80px;border:4px solid rgba(76,175,80,.2);border-radius:50%}.sweet-modal-icon.sweet-modal-success .sweet-modal-fix{position:absolute;left:28px;top:8px;z-index:1;width:7px;height:90px;background-color:#fff;transform:rotate(-45deg)}.sweet-modal-icon.sweet-modal-success .sweet-modal-line{display:block;position:absolute;z-index:2;height:5px;background-color:#4caf50;border-radius:2px}.sweet-modal-icon.sweet-modal-success .sweet-modal-line.sweet-modal-tip{width:25px;left:14px;top:46px;transform:rotate(45deg)}.sweet-modal-icon.sweet-modal-success .sweet-modal-line.sweet-modal-long{width:47px;right:8px;top:38px;transform:rotate(-45deg)}.sweet-modal-icon.sweet-modal-custom{border-radius:0;border:none;background-size:contain;background-position:center center;background-repeat:no-repeat}.sweet-modal.theme-dark .sweet-modal-icon.sweet-modal-success:before,.sweet-modal.theme-dark .sweet-modal-icon.sweet-modal-success:after,.sweet-modal.theme-dark .sweet-modal-icon.sweet-modal-success .sweet-modal-fix{background-color:#182028}.sweet-modal-overlay{position:fixed;top:0;left:0;width:100vw;height:100%;z-index:9001;font-size:14px;-webkit-font-smoothing:antialiased;background:rgba(255,255,255,.9);opacity:0;transition:opacity .3s;transform:translate(0);-webkit-perspective:500px}.sweet-modal-overlay.theme-dark{background:rgba(24,32,40,.94)}.sweet-modal-overlay.is-visible{opacity:1}.sweet-modal{-moz-box-sizing:border-box;box-sizing:border-box;background:#fff;box-shadow:0 8px 46px #00000014,0 2px 6px #00000008;position:absolute;top:50%;left:50%;width:80%;max-width:640px;max-height:100vh;overflow-y:auto;border-radius:2px;transform:scale(.9) translate(calc(-50% - 32px),-50%);opacity:0;transition-property:transform,opacity;transition-duration:.3s;transition-delay:.05s;transition-timing-function:cubic-bezier(.52,.02,.19,1.02)}.sweet-modal .sweet-box-actions{position:absolute;top:12px;right:12px}.sweet-modal .sweet-box-actions .sweet-action-close{display:inline-block;cursor:pointer;color:#222c38;text-align:center;width:42px;height:42px;line-height:42px;border-radius:50%}.sweet-modal .sweet-box-actions .sweet-action-close svg{width:24px;height:24px;vertical-align:middle;margin-top:-2px}.sweet-modal .sweet-box-actions .sweet-action-close svg path,.sweet-modal .sweet-box-actions .sweet-action-close svg polygon,.sweet-modal .sweet-box-actions .sweet-action-close svg rect,.sweet-modal .sweet-box-actions .sweet-action-close svg circle{fill:currentColor}.sweet-modal .sweet-box-actions .sweet-action-close svg{fill:currentColor}.sweet-modal .sweet-box-actions .sweet-action-close:hover{background:#039BE5;color:#fff}.sweet-modal .sweet-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;height:64px;line-height:64px;border-bottom:1px solid #eaeaea;padding-left:32px;padding-right:64px}.sweet-modal .sweet-title>h2{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:0;padding:0;font-weight:500;font-size:22px}.sweet-modal ul.sweet-modal-tabs{padding:0;list-style-type:none;display:flex;align-items:center;width:calc(100% + 32px);height:100%;margin:0 0 0 -32px;overflow-x:auto}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab{display:block;height:100%}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:flex;align-items:center;padding-left:20px;padding-right:20px;color:#222c38;text-decoration:none;text-align:center;height:100%}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-title{display:block}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon{display:block;line-height:1}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img{width:16px;height:16px}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg path,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg polygon,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg rect,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg circle,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img path,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img polygon,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img rect,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img circle{fill:currentColor}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg,.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img{fill:currentColor}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon+span.sweet-modal-tab-title{line-height:1;margin-top:8px}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab:first-child a{padding-left:32px}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab.active a{font-weight:600;color:#039be5}.sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab.disabled a{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;pointer-events:none;color:#999}.sweet-modal.has-tabs:not(.has-title) .sweet-title{height:84px;line-height:84px}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs{width:100%;height:48px;margin:0;border-bottom:1px solid #eaeaea}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a{margin-top:-4px}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon{display:inline-block}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon svg,.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-icon img{vertical-align:middle;margin-top:-2px;margin-right:8px}.sweet-modal.has-tabs.has-title ul.sweet-modal-tabs li.sweet-modal-tab a span.sweet-modal-tab-title{display:inline-block}.sweet-modal .sweet-content{display:flex;align-items:center;padding:24px 32px;line-height:1.5}.sweet-modal .sweet-content .sweet-content-content{flex-grow:1}.sweet-modal .sweet-content .sweet-modal-tab:not(.active){display:none}.sweet-modal .sweet-content .sweet-modal-icon{margin-bottom:36px}.sweet-modal .sweet-buttons{text-align:right;padding:12px 20px}.sweet-modal .sweet-content+.sweet-buttons{border-top:1px solid #eaeaea}.sweet-modal.is-alert .sweet-content{display:block;text-align:center;font-size:16px;padding-top:64px;padding-bottom:64px}.sweet-modal.has-tabs.has-icon .sweet-content{padding-top:32px;padding-bottom:32px}.sweet-modal.has-tabs.has-icon .sweet-content .sweet-content-content{padding-left:32px}.sweet-modal.has-tabs.has-icon .sweet-content .sweet-modal-icon{margin-bottom:0}.sweet-modal:not(.has-content) .sweet-modal-icon{margin-bottom:0}.sweet-modal.theme-dark{background:#182028;color:#fff}.sweet-modal.theme-dark .sweet-box-actions .sweet-action-close{color:#fff}.sweet-modal.theme-dark .sweet-title{border-bottom-color:#090c0f;box-shadow:0 1px #273442}.sweet-modal.theme-dark ul.sweet-modal-tabs li a{color:#fff}.sweet-modal.theme-dark ul.sweet-modal-tabs li.active a{color:#039be5}.sweet-modal.theme-dark ul.sweet-modal-tabs li.disabled a{color:#3e5368}.sweet-modal.theme-dark.has-tabs.has-title ul.sweet-modal-tabs{border-bottom-color:#090c0f;box-shadow:0 1px #273442}.sweet-modal.theme-dark .sweet-content+.sweet-buttons{border-top-color:#273442;box-shadow:0 -1px #090c0f}.sweet-modal .sweet-buttons,.sweet-modal .sweet-content{opacity:0;transition-property:transform,opacity;transition-duration:.3s;transition-delay:.09s;transition-timing-function:cubic-bezier(.52,.02,.19,1.02)}.sweet-modal .sweet-content{transform:translateY(-8px)}.sweet-modal .sweet-buttons{transform:translateY(16px)}.sweet-modal.is-visible{transform:translate(-50%,-50%);opacity:1}.sweet-modal.is-visible .sweet-buttons,.sweet-modal.is-visible .sweet-content{transform:none;opacity:1}.sweet-modal.bounce{animation-name:bounce;animation-duration:.3s;animation-iteration-count:2;animation-direction:alternate}@media screen and (min-width: 601px){@keyframes bounce{0%{transform:scale(1) translate(-50%,-50%)}50%{transform:scale(1.02) translate(calc(-50% + 8px),-50%)}to{transform:scale(1) translate(-50%,-50%)}}}@media screen and (max-width: 600px){.sweet-modal.is-mobile-fullscreen{width:100%;height:100%;left:0;top:0;transform:scale(.9)}.sweet-modal.is-mobile-fullscreen.is-visible{transform:none}.sweet-modal.is-mobile-fullscreen .sweet-buttons{-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;left:0;width:100%}}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();(function(e,m){typeof exports=="object"&&typeof module!="undefined"?module.exports=m(require("vue")):typeof define=="function"&&define.amd?define(["vue"],m):(e=typeof globalThis!="undefined"?globalThis:e||self,e["sweet-modal-vue-3"]=m(e.Vue))})(this,function(e){"use strict";var m="";const M={class:"sweet-box-actions"},q=[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#292c34"})],-1)],$={key:0,class:"sweet-title"},x={key:0,class:"sweet-modal-tabs"},z=["onClick"],F={class:"sweet-modal-valign"},H=["innerHTML"],O={class:"sweet-modal-tab-title"},D=["innerHTML"],W={key:1,class:"sweet-modal-tabs"},j=["onClick"],I={class:"sweet-modal-valign"},K=["innerHTML"],U={class:"sweet-modal-tab-title"},X=[e.createElementVNode("span",{class:"sweet-modal-x-mark"},[e.createElementVNode("span",{class:"sweet-modal-line sweet-modal-left"}),e.createElementVNode("span",{class:"sweet-modal-line sweet-modal-right"})],-1)],A=[e.createElementVNode("span",{class:"sweet-modal-body"},null,-1),e.createElementVNode("span",{class:"sweet-modal-dot"},null,-1)],G=[e.createElementVNode("span",{class:"sweet-modal-line sweet-modal-tip"},null,-1),e.createElementVNode("span",{class:"sweet-modal-line sweet-modal-long"},null,-1),e.createElementVNode("div",{class:"sweet-modal-placeholder"},null,-1),e.createElementVNode("div",{class:"sweet-modal-fix"},null,-1)],J={key:4,class:"sweet-content-content"},P={key:2,class:"sweet-buttons"},Q=Object.assign({name:"SweetModal"},{props:{title:{type:String,required:!1,default:""},overlayTheme:{type:String,required:!1,default:"light"},modalTheme:{type:String,required:!1,default:"light"},blocking:{type:Boolean,required:!1,default:!1},pulseOnBlock:{type:Boolean,required:!1,default:!0},icon:{type:String,required:!1,default:""},hideCloseButton:{type:Boolean,required:!1,default:!1},enableMobileFullscreen:{type:Boolean,required:!1,default:!0},width:{type:[Number,String],required:!1,default:null}},emits:["open","close"],setup(n,{expose:y,emit:f}){const l=n,{slots:i}=e.useContext(),_=e.ref(!1),g=e.ref(!1),b=e.ref(!1),p=e.ref(null),a=e.ref([]),E=e.ref(null),N=e.ref(null),Z=e.ref(null),V=e.ref(null),v=e.ref(null),h=e.reactive({body:{height:null,overflow:null}}),r=e.computed(()=>l.title||i.title),c=e.computed(()=>a.value.length>0),ee=e.computed(()=>i.default);e.computed(()=>a.value.filter(t=>t.active===!0)[0]);const te=e.computed(()=>["sweet-modal-overlay","theme-"+l.overlayTheme,"sweet-modal-clickable",{"is-visible":_.value,blocking:l.blocking}]),oe=e.computed(()=>["sweet-modal","theme-"+l.modalTheme,{"has-title":r.value,"has-tabs":c.value,"has-content":ee.value,"has-icon":l.icon,"is-mobile-fullscreen":l.enableMobileFullscreen,"is-visible":_.value,"is-alert":l.icon&&!c.value||!l.icon&&!l.title&&!i.title,bounce:b.value}]),le=e.computed(()=>{let t=l.width,s=null;return t!==null&&(Number(t)==t&&(t=t+"px"),s="none"),{width:t,maxWidth:s}});e.onMounted(()=>{a.value=i.default().filter(t=>t.type.name&&t.type.name=="tab"),c.value&&(p.value=d(a.value[0])),document.addEventListener("keyup",T)}),e.onBeforeUnmount(()=>{S(),document.removeEventListener("keyup",T)});const ne=(t=null)=>{if(t&&c.value){let s=a.value.filter(o=>o.id===t);if(s.length>0)p.value=d(s[0]);else{let o=a[t];o&&(p.value=d(o))}}g.value=!0,se(),ce(),setTimeout(()=>_.value=!0,30),f("open")},u=()=>{_.value=!1,S(),setTimeout(()=>g.value=!1,300),f("close")},C=()=>{b.value=!0,setTimeout(()=>b.value=!1,330)},se=()=>{h.body.height=document.body.style.height,h.body.overflow=document.body.style.overflow,document.body.style.height="100%",document.body.style.overflow="hidden"},S=()=>{document.body.style.height=h.body.height,document.body.style.overflow=h.body.overflow},ae=t=>{(!t.target.classList||t.target.classList.contains("sweet-modal-clickable"))&&(l.blocking?l.pulseOnBlock&&C():u())},T=t=>{t.keyCode==27&&(l.blocking?l.pulseOnBlock&&C():u())},d=t=>{a.value.map(s=>s.active=s==t),p.value=t},L=t=>["sweet-modal-tab",{active:t.active,disabled:t.disabled}],ce=()=>{if(!!l.icon)switch(l.icon){case"success":setTimeout(()=>{B(E.value,{"":["animate"],".sweet-modal-tip":["animateSuccessTip"],".sweet-modal-long":["animateSuccessLong"]})},80);break;case"warning":B(N.value,{"":["pulseWarning"],".sweet-modal-body":["pulseWarningIns"],".sweet-modal-dot":["pulseWarningIns"]});break;case"error":setTimeout(()=>{B(V.value,{"":["animateErrorIcon"],".sweet-modal-x-mark":["animateXMark"]})},80);break}},B=(t,s)=>{for(let o in s){let k=s[o],w;o==""?w=t:w=t.querySelector(o),w.classList.remove(...k),w.classList.add(...k)}};return y({close:u,open:ne}),(t,s)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(te)),onClick:ae},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(oe)),style:e.normalizeStyle(e.unref(le))},[e.createElementVNode("div",M,[e.renderSlot(t.$slots,"box-action"),n.hideCloseButton?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:0,class:"sweet-action-close",onClick:u},q))]),e.unref(r)||e.unref(c)?(e.openBlock(),e.createElementBlock("div",$,[e.unref(c)&&!e.unref(r)?(e.openBlock(),e.createElementBlock("ul",x,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.value,o=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(L(o))},[e.createElementVNode("a",{href:"#",onClick:e.withModifiers(k=>d(o),["prevent"])},[e.createElementVNode("div",F,[o.props.icon?(e.openBlock(),e.createElementBlock("span",{key:0,innerHTML:o.props.icon,class:"sweet-modal-tab-icon"},null,8,H)):e.createCommentVNode("",!0),e.createElementVNode("span",O,e.toDisplayString(o.props.title),1)])],8,z)],2))),256))])):e.createCommentVNode("",!0),e.unref(r)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[n.title?(e.openBlock(),e.createElementBlock("h2",{key:0,innerHTML:n.title},null,8,D)):e.createCommentVNode("",!0),e.renderSlot(t.$slots,"title")],64)):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),e.unref(r)&&e.unref(c)?(e.openBlock(),e.createElementBlock("ul",W,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.value,o=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(L(o))},[e.createElementVNode("a",{href:"#",onClick:e.withModifiers(k=>d(o),["prevent"])},[e.createElementVNode("div",I,[o.props.icon?(e.openBlock(),e.createElementBlock("span",{key:0,innerHTML:o.props.icon,class:"sweet-modal-tab-icon"},null,8,K)):e.createCommentVNode("",!0),e.createElementVNode("span",U,e.toDisplayString(o.props.title),1)])],8,j)],2))),256))])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:"sweet-content",ref_key:"content",ref:v},[n.icon=="error"?(e.openBlock(),e.createElementBlock("div",{key:0,class:"sweet-modal-icon sweet-modal-error",ref_key:"icon_error",ref:V},X,512)):e.createCommentVNode("",!0),n.icon=="warning"?(e.openBlock(),e.createElementBlock("div",{key:1,class:"sweet-modal-icon sweet-modal-warning",ref_key:"icon_warning",ref:N},A,512)):e.createCommentVNode("",!0),n.icon=="info"?(e.openBlock(),e.createElementBlock("div",{key:2,class:"sweet-modal-icon sweet-modal-info",ref_key:"icon_info",ref:Z},null,512)):e.createCommentVNode("",!0),n.icon=="success"?(e.openBlock(),e.createElementBlock("div",{key:3,class:"sweet-modal-icon sweet-modal-success",ref_key:"icon_success",ref:E},G,512)):e.createCommentVNode("",!0),t.$slots.default?(e.openBlock(),e.createElementBlock("div",J,[e.renderSlot(t.$slots,"default")])):e.createCommentVNode("",!0)],512),t.$slots.button?(e.openBlock(),e.createElementBlock("div",P,[e.renderSlot(t.$slots,"button")])):e.createCommentVNode("",!0)],6)],2)),[[e.vShow,g.value]])}}),R=Object.assign({name:"tab"},{props:{title:{type:String,required:!0},id:{type:String,required:!0},icon:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},setup(n,{expose:y}){const f=e.ref(!1);return y(["active"]),(l,i)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["sweet-modal-tab",{active:f.value}])},[e.renderSlot(l.$slots,"default")],2))}});var Y={install(n){n.component("SweetModal",Q),n.component("SweetModalTab",R)}};return Y});
