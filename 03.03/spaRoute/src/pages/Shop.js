export default function Shop($container){
    this.$container = $container;
    this.setState = () => {
        this.render();
    }
    this.render = () => {
        this.$container.innerHTML = `
        <main class="shopPage">
            Shop페이지입니다.
        </main>
        `
    }
    this.render();
}