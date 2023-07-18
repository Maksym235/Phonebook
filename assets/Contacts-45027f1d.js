import{n as e,c as p,b as c,d as x,e as d,j as t,f,r as h,g,F as m,C as j}from"./index-83c4f422.js";const o=e.div``,i=e.h2`
  font-size: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0.4px;
  margin: 0;
  margin-bottom: 40px;
  color: #fff;
`,u=e.p`
  margin: 0;
  font-size: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #fff;
`,a=e.input`
  position: relative;
  display: flex;
  width: 400px;
  padding: 17px 0px 17px 30px;
  margin-bottom: 20px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #adafdd;
  border: none;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #eaeaea;

  &::placeholder {
    color: #eaeaea;
  }
`,r=e(p)`
  position: absolute;
  top: 15px;
  left: 5px;
`;function y(){const n=c(),s=l=>n(f(l.target.value));return x(d).length!==0?t.jsxs(o,{children:[t.jsx(i,{children:"Contacts"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(a,{style:{position:"relative"},type:"text",name:"find",onChange:s,placeholder:"Search contacts"}),t.jsx(r,{size:24,color:"#EAEAEA"})]})]}):t.jsxs(o,{children:[t.jsx(i,{children:"Contacts"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(a,{style:{position:"relative"},type:"text",name:"find",onChange:s,placeholder:"Search contacts"}),t.jsx(r,{size:24,color:"#EAEAEA"})]}),t.jsxs(u,{children:["Haven’t Contacts yet.",t.jsx("br",{}),"Add them right now!"]})]})}const C=e.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`,v=e.div``;function w(){const n=c();return h.useEffect(()=>{n(g())},[n]),t.jsxs(C,{children:[t.jsx(m,{}),t.jsxs(v,{children:[t.jsx(y,{}),t.jsx(j,{})]})]})}export{w as default};
