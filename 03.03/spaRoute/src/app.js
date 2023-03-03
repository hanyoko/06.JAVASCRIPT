import Router from "./router.js";
import { navigate } from "./utils/navigate.js";

export default function App({target}){
    this.$container = target;
    const init = () => {
        document.querySelector(".navbar").addEventListener("click", (e)=>{
            //이벤트 제거
            e.preventDefault();
            // const target = e.target;
            // console.log(target.href);
            const targetURL = e.target.href.replace("http://127.0.0.1:5500","")
            console.log(targetURL)
            navigate(targetURL)
        })
        new Router(this.$container);
    }
    init();
}