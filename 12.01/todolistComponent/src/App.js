import Component from "./components/Component.js";
import Todoheader from "./TodoHeader.js";
import TodoLists from "./components/TodoLists.js";

export default class App extends Component {
    setup(){
        console.log("setup");
        this.state = {
            inputText: "",
            todoLists : [
                {
                    no:1,
                    content: '할일1',
                    isDone: false
                },
                {
                    no:2,
                    content: '할일2',
                    isDone: false
                },
                {
                    no:3,
                    content: '할일3',
                    isDone: false
                }
            ]
        }
        console.log(this.state);
    }
    template(){
        return `
        <div id="insertTodo"></div>
        <div id="listTodos"></div>
        `;
    }
    mounted(){
        const { addTodoList } = this;
        const todoHeader = document.querySelector("#insertTodo");
        const todolist = document.querySelector("#listTodos");
        new Todoheader(todoHeader,{addTodoList: addTodoList.bind(this)});
        new TodoLists(todolist,{lists: this.state.todoLists});
    }
    addTodoList(content){
        const { todoLists } = this.state;
        this.setState({
            todoLists: [
                ...todoLists,
                {
                    no:4,
                    content: content,
                    isDone: false
                }
            ]
        })
    }
}
