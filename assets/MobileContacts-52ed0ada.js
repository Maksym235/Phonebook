import{n,N as s,b as a,r as i,g as r,j as t,O as c}from"./index-3288e12c.js";const d=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,l=n.nav`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #1b1b1b;
  margin-bottom: 20px;
`,o=n(s)`
  color: #a6a6a6;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  display: inline-flex;
  padding: 7px 28px;
  justify-content: center;
  align-items: center;
  border: none;

  &.active {
    color: #000;
    border-radius: 10px;
    background: #adafdd;
  }
`,x=()=>{const e=a();return i.useEffect(()=>{e(r())},[e]),t.jsxs(d,{children:[t.jsxs(l,{children:[t.jsx(o,{to:"myContacts",children:"Contacts"}),t.jsx(o,{to:"addContact",children:"add contact"})]}),t.jsx(c,{})]})};export{x as default};
