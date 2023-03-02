fetch("data/data.json")
.then(response => response.json())
.then(data => {
    displayItems(data.lists)
    setEventItems(data.lists)
});

//이벤트 설정하기
function setEventItems(lists){
    const btns = document.querySelector(".buttonDiv");
    btns.addEventListener("click",function(e){
        const { key, value } = e.target.dataset;

        let filterd = lists.filter(lists => lists[key] === value);
        console.log(filterd);
        displayItems(filterd);
    })
}

//화면 나타내기
function displayItems(lists){
    const tr = document.querySelector(".lists");
    let str = "";
    str = lists.map(list=>{
        return `<tr class="list">
                    <td>${list.name}</td>
                    <td>${list.title}</td>
                    <td>${list.year}</td>
                </tr>`;
    }).join("")
    tr.innerHTML = str;
}