import{n as t,N as d,b as l,j as e,l as x}from"./index-49f4a552.js";const c=t.form`
  padding: 143px 0px;
  margin: 0px auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    width: 430px;
  }
`,g=t.h1`
  margin: 0;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  letter-spacing: 0.01em;
  color: #1b1b1b;
`,o=t.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 280px;
  padding: 17px 0px 17px 30px;
  gap: 10px;
  background: #adafdd;
  border-radius: 20px;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    color: #eaeaea;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`,m=t.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 59px;
  gap: 10px;
  width: 310px;
  height: 49px;
  background: #1b1b1b;
  border-radius: 50px;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 430px;
  }
`,h=t.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1b1b1b;
  margin: 0;
`,u=t(d)`
  margin: 0;
  font-weight: 600;
  text-decoration: none;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;function f(){const r=l(),a=n=>{n.preventDefault();const i=n.currentTarget,s=i.elements.email.value,p=i.elements.password.value;r(x({email:s,password:p})),i.reset()};return e.jsxs(c,{onSubmit:a,children:[e.jsx(g,{children:"Log in"}),e.jsx(o,{label:"email",type:"email",name:"email",placeholder:"enter your email"}),e.jsx(o,{label:"password",type:"password",name:"password",placeholder:"enter your password"}),e.jsx(m,{type:"submit",children:"Log In"}),e.jsx(h,{children:"Don’t have an account?"}),e.jsx(u,{to:"/register",children:"Register"})]})}const w=t.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-image: url("FormBg.jpg");
  background-size: cover;
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
`;function j(){return e.jsx(w,{children:e.jsx(f,{})})}export{j as default};
