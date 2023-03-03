export default function Main($container){
    this.$container = $container;
    this.setState = () => {
        this.render();
    }
    this.render = () => {
        this.$container.innerHTML = `
        <main class="mainPage">
            메인페이지입니다.
        </main>
        `
    }
    this.render();
}