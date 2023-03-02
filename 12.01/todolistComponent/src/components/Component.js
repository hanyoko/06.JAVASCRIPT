export default class Component {
    target;
    props;
    state;
    constructor(target, props){
        this.target = target;
       ` this.props = props;`
        this.setup();
        this.render(); 
        this.setEvent();
    }
    setup(){}
    template(){
        return ""
    }
    mounted(){}
    setEvent(){}
    render(){
        this.target.innerHTML = this.template();
        this.mounted()  //랜더 후 마운트 호출
    }
    setState(newState){
        this.state = { ...this.state, ...newState };
        this.render();
        console.log(this.state);
    }
    setup(){}
    template(){return "";}
    mounted(){}
    setEvent(){}
}