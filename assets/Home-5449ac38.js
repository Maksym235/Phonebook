import{n as i,N as s,u as r,a as p,j as e,A as n}from"./index-16279125.js";const d=i.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`,x=i.div`
  width: 350px;
  height: 365px;
  top: 0;
  right: -20px;
  border-radius: 20px 0 0 20px;
  position: absolute;
  background-color: #bcbff2;
  background-image: url("assets/mainMobile.png");
  background-size: 289px 198px;
  background-repeat: no-repeat;
  background-position: right 40%;
  @media (min-width: 768px) {
    top: -100px;
    width: 450px;
    height: 465px;
    background-size: 380px 290px;
    background-position: right center;
  }
  @media (min-width: 1280px) {
    top: -122px;
    right: -80px;
    width: 700px;
    height: 929px;
    border-radius: 50px 0px 0px 50px;
    background-color: #bcbff2;
    background-image: url("assets/mainIimg.png");
    background-size: 674px 661px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,c=i.div`
  margin-top: 370px;
  margin-bottom: 20px;
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  @media (min-width: 768px) {
    margin: 0;
    width: 400px;
  }
  @media (min-width: 1280px) {
    margin: 0;
  }
`,l=i.p`
  font-weight: 600;
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
`,g=i.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin: 0;
`,h=i.p`
  font-weight: 400;
  margin: 0;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #a6a6a6;
`,o=i(s)`
  @media (max-width: 767px) {
    position: absolute;
    top: 275px;
    right: 0px;
    z-index: 999;
    border: 2px solid #1b1b1b;
    gap: 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 49px;
  margin-top: 20px;
  padding: 0;
  border: none;
  border-radius: 50px;
  background: #bcbff2;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #000000;
`;function f(){const{isMobile:t}=r(),{user:a}=p();return e.jsxs(c,{children:[e.jsx(l,{children:"All your contacts in one place"}),e.jsx(g,{children:"Call U - Keep all your contacts in a safe place and easily share them with your friends"}),e.jsx(h,{children:"A contact storage tool is a digital application designed to help users store, manage, and organize their contacts. With this tool, users can save their contacts' information, such as names, phone numbers, email addresses, and social media profiles, in a centralized location."}),a?e.jsxs(o,{to:"/contacts",children:["Get started ",t&&e.jsx(n,{size:24})]}):e.jsxs(o,{to:"/register",children:["Get started",t&&e.jsx(n,{size:24})]})]})}function u(){return e.jsxs(d,{children:[e.jsx(f,{}),e.jsx(x,{})]})}export{u as default};
