import{j as x,s as o,r as y,a as v,R as b,b as C}from"./vendor.982a0195.js";const W=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}};W();const t=x.exports.jsx,c=x.exports.jsxs,I=o.img`
width: 100px;
height: 100px;
margin-top: 30px;
text-align: center;
align-items: center;
justify-content: center;
display: flex;
`,j=o.div`
color: black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
margin-top: 30px;
text-align: center;
`,L=o.form`
display: flex;
flex-direction: row;
border: 0px;
color: black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;

& input {
    // put css styles here -> another way to style children components using styled components.
}
`,$=({updateCity:n,fetchWeather:s})=>c("div",{children:[t(I,{src:h["04d"]}),t(j,{children:"Enter city name"}),c(L,{onSubmit:s,children:[t("input",{type:"text",name:"",id:"",placeholder:"city",onChange:r=>n(r.target.value),style:{marginRight:10+"px",border:0+"px",fontFamily:"Courier",padding:6+"px"}}),t("button",{type:"submit",style:{border:0+"px",fontFamily:"Courier",color:"white",background:"black"},children:"Search"})]})]}),M={Sunset:"icons/temp.svg",Sunrise:"icons/temp.svg",Humidity:"icons/humidity.svg",Wind:"icons/wind.svg",Pressure:"icons/pressure.svg"},S=o.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-between;
margin-top: 15px;
`,z=o.div`
display: flex;
flex-direction: row;
margin: 30px;
margin-right: 80px;
font-size: 25px;
font-family: Montserrat;
`,R=o.img`
width: 100px;
height: 100px;
text-align: center;
align-items: center;
justify-content: center;
display: flex;
`,k=o.div`
font-size: 22px;
font-weight: bold;
text-align: center;
font-family: Montserrat;
`,A=o.div`
font-size: 14px;
font-weight: bold;
text-align: start;
width: 90%;
font-family: Montserrat;
margin: 20px;
`,D=o.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;

`,O=o.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`,P=o.img`
  width: 36px;
  height: 36px;
`,E=o.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`,p=n=>{const{name:s,value:r}=n;return c(O,{children:[t(P,{src:M[s]}),c(E,{children:[r,t("span",{children:s})]})]})},F=({weather:n})=>{var e,i,d,a,f,g,u;const s=(e=n==null?void 0:n.weather[0].icon)==null?void 0:e.includes("d"),r=m=>`${new Date(m*1e3).getHours()} : ${new Date(m*1e3).getMinutes()}`,l=(i=n==null?void 0:n.weather[0])==null?void 0:i.icon;return c("div",{children:[c(S,{children:[c(z,{children:[t("span",{children:`${Math.floor(((d=n==null?void 0:n.main)==null?void 0:d.temp)-273)}\xB0C`}),`  |  ${n==null?void 0:n.weather[0].description}`]}),t(R,{src:h[`${l}`]})]}),t(k,{children:`${n==null?void 0:n.name}, ${(a=n==null?void 0:n.sys)==null?void 0:a.country}`}),t(A,{children:"Weather info"}),c(D,{children:[t(p,{name:s?"Sunset":"Sunrise",value:`${r(n==null?void 0:n.sys[s?"sunrise":"sunset"])}`}),t(p,{name:"Humidity",value:(f=n==null?void 0:n.main)==null?void 0:f.humidity}),t(p,{name:"Wind",value:(g=n==null?void 0:n.wind)==null?void 0:g.speed}),t(p,{name:"Pressure",value:(u=n==null?void 0:n.main)==null?void 0:u.pressure})]})]})},h={"01d":"icons/sunny.svg","01n":"icons/night.svg","02d":"icons/day.svg","02n":"icons/cloudy-night.svg","03d":"icons/cloudy.svg","03n":"icons/cloudy.svg","04d":"icons/perfect-day.svg","04n":"icons/cloudy-night.svg","09d":"icons/rain.svg","09n":"icons/rain-night.svg","10d":"icons/rain.svg","10n":"icons/rain-night.svg","11d":"icons/storm.svg","11n":"icons/storm.svg","13d":"icons/snow.png","13n":"icons/snow.png","50d":"icons/mist.png","50n":"icons/mist.png"},B=o.div`
display: flex;
flex-direction: column;
margin: auto;
margin-top: 20px;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px; 
border-radius: 4px;
width: 380px;
background: white;
font-family: Montserrat;
`,H=o.span`
color: black;
font-size: 18px;
font-weight: bold;
font-family: Montserrat;
`,K=()=>{const[n,s]=y.exports.useState(),[r,l]=y.exports.useState(),e="5dd34e236d943aff592360fadd721fc1";return c(B,{children:[t(H,{children:"RapidWeather - React Weather App by Anagh Kanungo"}),r?t(F,{weather:r,children:"Weather Component"}):t($,{updateCity:s,fetchWeather:async d=>{d.preventDefault(),console.log("Fetch weather is run!!");const a=await v.get(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${e}`);console.log(a),l(a.data)},children:"City Component"})]})};b.render(t(C.StrictMode,{children:t(K,{})}),document.getElementById("root"));
