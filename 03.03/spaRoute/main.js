//초기 html 문서를 완전히 불러오고 분석했을 때 발생
//html문서가 다 준비되면 실행해 !!!
import App from "./src/app.js";

window.addEventListener("DOMContentLoaded", ()=>{
 new App({ target: document.querySelector("#app") })
})