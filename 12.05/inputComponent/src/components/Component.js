//모듈 내보내기
export default class Component {
    target;
    props;
    state;
    constructor(target, props){
        this.target = target;
        this.props = props;
        //메소드 호출
        this.setup();
        this.render();
        this.setEvent();
        console.log(this);
    }
    template() { return "" }
    render(){
        this.target.innerHTML = this.template();
        this.mounted();
    }
    setState(newState){
        this.state = { ...this.state, ...newState };
        this.render();
    }
    setup(){};
    mounted(){};
    setEvent(){};
}