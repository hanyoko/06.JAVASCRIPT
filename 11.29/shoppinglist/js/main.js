fetch("data/data.json")
.then(response => response.json())
.then(data => {
    displayItems(data.items)
    setEventItems(data.items)
});

// function mapStudy(){
//     let students = [
//         {name: "green", score: 70},
//         {name: "blue", score: 80},
//         {name: "yellow", score: 90},
//     ]
//     students.map(stu=>{
//         return stu.score;
//     })
//     console.log(stu2);
// }

//이벤트 설정하기
function setEventItems(items){
    const btns = document.querySelector(".buttonDiv");
    btns.addEventListener("click",function(e){
        // {
        //     key: "type"
        //     value: "tshirt"  
        // }
        // dataset.value
        // const dataset = e.target.dataset;
        // const key = dataset.key;
        // const value = dataset.value;
        const { key, value } = e.target.dataset;
        //value: tshirt key: type
        let filterd = items.filter(item=> item[key] === value);
        console.log(filterd);
        displayItems(filterd);
    })
}
//화면 나타내기

function displayItems(items){
    const ul = document.querySelector(".items");
    let str = "";
    // {
    //     "type":"tshirt",
    //     "gender":"남성",
    //     "size":"large",
    //     "color":"pink",
    //     "image":"img/pink_t.png"
    // }
    str = items.map(item=>{
        return `<li class="item">
                    <img src="${item.image}">
                    <span>${item.gender}, ${item.size}</span>
                </li>`;
    }).join("")
    ul.innerHTML = str;

}