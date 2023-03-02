import Component from "./components/Component.js";

export default class Todoheader extends Component {
    template(){
        return `
        <h1>TodoList</h1>
        <div>
            <input type="text" class="appender" />
            <button id="addBtn">+</button>    
        </div>
        `
    }
    setEvent(){
        const { addTodoList } = this.props;
        document.querySelector("#addBtn").addEventListener("click",() => {
            addTodoList(document.querySelector(".appender").value);
        })
    }
}