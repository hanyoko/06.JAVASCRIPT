import Input from "./Input.js";
import Lists from "./Lists.js";
//생성자 함수
export default function App({target}){
    //상태값
    this.state = {
        students : ["stu1", "stu2", "stu3"]
    }
    //상태값 변경하기
    this.setState = (newState) => {
        this.state = {
            ...this.state,
            ...newState
        }
    }
    this.render = () => {
        target.innerHTML = `
        <h1>안녕하세요</h1>
        `
    }
    this.render();
    const input = new Input({target});
    const lists = new Lists({ target: target, initialState: this.state.students});
}