(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7097)}])},7097:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return G}});var s=a(5893),t=a(7294),i=a(1942),r=a(6234),l=a(9801),c=a(5710),o=a(3913),d=a(465),_=a.n(d);let m=[{Icon:i.Z,alt:"ノート"},{Icon:r.Z,alt:"スライド"},{Icon:l.Z,alt:"通知"},{Icon:c.Z,alt:"共有"},null,{Icon:o.Z,alt:"設定"}],h=e=>{let{page:n,changePage:a}=e;return(0,s.jsx)("div",{className:_().container,children:m.map((e,t)=>null===e?(0,s.jsx)("div",{className:_().spacer},t):(0,s.jsxs)("div",{className:"".concat(_().icon," ").concat(n===t?_().active:""),onClick:()=>a(t),children:[(0,s.jsx)(e.Icon,{color:"#bbb",size:24}),(0,s.jsx)("p",{children:e.alt})]},t))})};var u=a(3764),x=a(653),f=a(6821),p=a.n(f);let j=()=>(0,s.jsxs)("div",{className:p().container,children:[(0,s.jsxs)("button",{className:p().button,children:[(0,s.jsx)(x.Z,{color:"#bbb",size:16}),(0,s.jsx)("span",{children:"共有"})]}),(0,s.jsx)("div",{className:p().spacer}),(0,s.jsx)("div",{className:p().info,children:"文字数: 1,234"}),(0,s.jsx)("div",{className:p().info,children:"単語数: 258"})]});var b=a(5405),N=a(643),v=a.n(N);let y=()=>(0,s.jsx)("div",{className:v().container,children:(0,s.jsxs)("div",{className:v().tab,children:[(0,s.jsx)(b.Z,{color:"#bbb",size:16}),(0,s.jsx)("p",{children:"1-1.py"}),(0,s.jsx)("button",{className:v().close})]})});var S=a(9506),g=a.n(S);let Z=e=>{let{code:n}=e;return(0,s.jsxs)("div",{className:g().container,children:[(0,s.jsx)(y,{}),(0,s.jsx)("div",{className:g().editor,children:(0,s.jsx)(u.ML,{theme:"vs-dark",language:"python",defaultValue:n})}),(0,s.jsx)(j,{})]})};var k=a(8547),B=a.n(k),O=a(434),I=a(8683),L=a(4283),w=a(9401),z=a.n(w);let E={backgroundColor:"#0f0f0f",fontSize:"12px"},T=e=>{let{author:n,isLiked:a,likes:t,text:i,sharedAt:r}=e;return(0,s.jsxs)("article",{className:z().container,children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("div",{className:z().avatar,children:(0,s.jsx)("img",{src:n.avatarUrl,alt:"".concat(n.name,"'s avatar")})}),(0,s.jsx)("p",{className:z().name,children:n.name})]}),(0,s.jsx)("main",{className:z().main,children:(0,s.jsx)(I.Z,{language:"python",style:L.YC,customStyle:E,children:i})}),(0,s.jsxs)("footer",{children:[(0,s.jsxs)("button",{className:z().likeButton,children:[(0,s.jsx)(O.Z,{color:a?"#f00":"#bbb",size:16}),(0,s.jsx)("p",{style:{color:a?"#f00":"#bbb"},children:t})]}),(0,s.jsx)("div",{className:z().sharedAt,children:(0,s.jsxs)("p",{children:[r.year,"/",r.month,"/",r.day," ",r.hour,":",r.minute]})})]})]})},U=[{author:{name:"\uD83E\uDDF6",avatarUrl:"https://github.com/mst-mkt.png"},isLiked:!1,likes:12,text:"class Student:\n    def __init__(self, student_id: int, family_name: str, first_name: str) -> None:\n        self.student_id = student_id\n        self.family_name = family_name\n        self.first_name = first_name\n\n    def __lt__(self, other: 'Student') -> bool:\n        return self.student_id < other.student_id",sharedAt:{year:2023,month:9,day:14,hour:19,minute:27}},{author:{name:"yossuli",avatarUrl:"https://github.com/yossuli.png"},isLiked:!0,likes:4,text:"def selection_sort(lst: list[int]) -> None:\n    length = len(lst)\n    for i in range(length):\n        min_index = i\n        for j in range(i + 1, length):\n            if lst[j] < lst[min_index]:\n                min_index = j\n        lst[i], lst[min_index] = lst[min_index], lst[i]",sharedAt:{year:2023,month:9,day:14,hour:21,minute:21}},{author:{name:"じゅん",avatarUrl:"https://github.com/jun-eg.png"},isLiked:!1,likes:2,text:"def fib1(n: int) -> int:\n    if n < 2:\n        return min([0, n])\n    return fib1(n - 2) + fib1(n - 1)",sharedAt:{year:2023,month:9,day:15,hour:1,minute:56}},{author:{name:"はるき",avatarUrl:"https://github.com/enbipaipu.png"},isLiked:!1,likes:8,text:"def fib2(n: int) -> int:\n    lst = [0] * (n + 1)\n    lst[1] = 1\n    for i in range(2, n + 1):\n        lst[i] = lst[i - 1] + lst[i - 2]\n    return lst[n]",sharedAt:{year:2023,month:9,day:15,hour:2,minute:3}}],A=()=>(0,s.jsxs)("div",{className:B().container,children:[(0,s.jsx)("h1",{children:"共有ノート"}),U.map((e,n)=>(0,t.createElement)(T,{...e,key:n}))]});var C=a(3221),D=a(8420),P=a(7664),W=a(2577),q=a(6372),R=a.n(q);let V=[{name:"2023年 春",isOpend:!1,files:[]},{name:"2023年 秋",isOpend:!0,files:[{name:"CS II",isOpend:!0,files:[{name:"1-1.py",icon:b.Z},{name:"1-2.py",icon:b.Z},{name:"2-1.py",icon:b.Z},{name:"2-2.py",icon:b.Z}]},{name:"RW II",isOpend:!1,files:[]},{name:"LS II",isOpend:!0,files:[{name:"Lesson 1",icon:C.Z},{name:"Lesson 2",icon:C.Z},{name:"Lesson 3",icon:C.Z},{name:"Lesson 4",icon:C.Z}]},{name:"情報連携学概論",isOpend:!1,files:[]},{name:"情報連携基礎実習",isOpend:!0,files:[{name:"第一回議事録.docs",icon:D.Z},{name:"第一回発表用資料.pptx",icon:r.Z}]},{name:"数学",isOpend:!1,files:[]},{name:"マクロ経済学",isOpend:!1,files:[]}]}],X=e=>{let{icon:n,name:a}=e;return(0,s.jsxs)("div",{className:R().file,children:[(0,s.jsx)(n,{color:"#bbb",size:16}),(0,s.jsx)("p",{children:a})]})},Y=e=>{let{name:n,files:a,isOpend:t}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:R().file,children:[t?(0,s.jsx)(P.Z,{color:"#bbb",size:16}):(0,s.jsx)(W.Z,{color:"#bbb",size:16}),(0,s.jsx)("p",{children:n})]}),(0,s.jsx)("div",{className:R().children,children:t&&a.map(e=>"files"in e?(0,s.jsx)(Y,{...e},e.name):(0,s.jsx)(X,{...e},e.name))})]})},M=()=>(0,s.jsx)("div",{className:R().container,children:V.map(e=>(0,s.jsx)(Y,{...e},e.name))});var Q=a(2729),F=a.n(Q),G=()=>{let[e,n]=(0,t.useState)(0),[a,i]=(0,t.useState)("");return(0,t.useEffect)(()=>{fetch("./example/example.py").then(e=>{e.text().then(e=>{i(e)})})},[]),(0,s.jsxs)("div",{className:F().container,children:[(0,s.jsx)(h,{page:e,changePage:n}),(0,s.jsx)(M,{}),0===e&&(0,s.jsx)(Z,{code:a}),3===e&&(0,s.jsx)(A,{})]})}},465:function(e){e.exports={container:"NavBar_container__VY0s_",icon:"NavBar_icon__aT31M",active:"NavBar_active__sS94T",spacer:"NavBar_spacer__8oSGD"}},9506:function(e){e.exports={container:"Note_container__UPDlx",editor:"Note_editor__zRSSX"}},8547:function(e){e.exports={container:"Share_container__w6Pvo"}},9401:function(e){e.exports={container:"SharedNote_container__dVqWU",avatar:"SharedNote_avatar__xqimw",name:"SharedNote_name__mNMvQ",main:"SharedNote_main__dDN0o",likeButton:"SharedNote_likeButton__4ipE_",sharedAt:"SharedNote_sharedAt__GZW4R"}},6372:function(e){e.exports={container:"SideBar_container__cLDOV",children:"SideBar_children__UpweC",file:"SideBar_file__d_QoP"}},6821:function(e){e.exports={container:"StatusBar_container__9FiaQ",info:"StatusBar_info__OmvYW",spacer:"StatusBar_spacer__jqWO8",button:"StatusBar_button__5N_lX"}},643:function(e){e.exports={container:"TabBar_container__Tb4O6",tab:"TabBar_tab__YaRo1",close:"TabBar_close__N9ale"}},2729:function(e){e.exports={container:"index_container___q52_"}}},function(e){e.O(0,[324,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);