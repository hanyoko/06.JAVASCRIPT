

//스크롤 이벤트
document.addEventListener("scroll", function(){
    let sct = this.document.documentElement.scrollTop;
    console.log(sct);
    arts.forEach((ar,index)=>{
        let zoomNum = (index*-5000)+sct;
        console.log(zoomNum);
        ar.style.transform = `translateZ(${zoomNum}px)`;
        if(sct > 1000 + (4000*index)){
            ar.classList.add('on');
            arts.forEach((ar,index2)=>{
                if(index != index2){
                    ar.classList.remove('on');
                }
            })
        }
    })
    //0번째 아티클은 sct 값이 2000 보다 커지면 on 0
    //1번째 아티클은 sct 값이 6000 보다 커지면 on 1
    //2번째 아티클은 sct 값이 11000 보다 커지면 on 2
    //3번째 아티클은 sct 값이 16000 보다 커지면 on 3
    //4번째 아티클은 sct 값이 21000 보다 커지면 on 4
})
lis.forEach((li,index)=> {
    li.addEventListener("click",function(e){
        
    })
})