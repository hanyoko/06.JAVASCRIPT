//변수설정
//컴퓨터 점수, 사람 점수, 남은 슛 횟수
//html 변경되는 요소
let comScore = 0;
let userScore = 0;
let shortsLeft = 3;
//html 요소
let shortleftElem = document.querySelector("#short-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");

//컴퓨터 먼저 슛을 한다.
//2점슈인지 3점슛인지 랜덤으로 결정
//2점슛 50% 확률로 성공, 3점슛은 30% 확률로 성공
//컴퓨터가 슛을 할 때 동작하는 함수
shortleftElem.innerHTML = shortsLeft;
function onComputerShoot(){
    //2점인지 3점인지 랜덤지정
    let shootType = Math.random()>0.5 ? 2 : 3;
    //2점슛일때 실행
    if(shootType==2){
        //성공했을때
        if(Math.random()<0.5){
            //컴퓨터의 점수를 올린다.
            //글자를 변경 -> 컴퓨터가 2점슛을 성공시켰습니다.
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 2점슛을 성공시켰습니다.";
        }else {
            //실패했을때
            textElem.innerHTML = "실패했습니다."
        }
    }else {
        if(Math.random()<0.3){
            //컴퓨터의 점수를 올린다.
            //글자를 변경 -> 컴퓨터가 3점슛을 성공시켰습니다.
            comScore = comScore + 3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 3점슛을 성공시켰습니다.";
        }else {
            textElem.innerHTML = "실패했습니다."
        }
    }
    //버튼 비활성화 (true = 활성화 / false = 비활성화)
    isComputerTurn = false;
    userBtns.forEach(btn=>{
        btn.disabled = false;
    })
    comBtn.disabled = true;
}

//사용자가 2점슛을 클릭했을 때
function onUserShoot2(){
    if(Math.random()<0.5){
        //컴퓨터의 점수를 올린다.
        //글자를 변경 -> 컴퓨터가 2점슛을 성공시켰습니다.
        userScore = userScore + 2;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 2점슛을 성공시켰습니다.";
    }else {
        textElem.innerHTML = "실패했습니다."
    }
    userBtns.forEach(btn=>{
        btn.disabled = true;
    })
    comBtn.disabled = false;
    //남은 슛횟수를 1씩 빼기
    --shortsLeft;
    //슛횟수 화면 변경하기
    shortleftElem.innerHTML = shortsLeft;
    if(shortsLeft==0) {
        gameOver();
    }
}

//사용자가 3점슛을 클릭했을 때
function onUserShoot3(){
    if(Math.random()<0.3){
        //컴퓨터의 점수를 올린다.
        //글자를 변경 -> 컴퓨터가 2점슛을 성공시켰습니다.
        userScore = userScore + 3;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 3점슛을 성공시켰습니다.";
    }else {
        textElem.innerHTML = "실패했습니다."
    }
    userBtns.forEach(btn=>{
        btn.disabled = true;
    })
    comBtn.disabled = false;
    //남은 슛횟수를 1씩 빼기
    --shortsLeft;
    //슛횟수 화면 변경하기
    shortleftElem.innerHTML = shortsLeft;
    if(shortsLeft==0) {
        gameOver();
    }
}  
    
//슛 횟수가 0이 되면 승자를 결정하는 함수
function gameOver(){
    if(userScore>comScore){
        textElem.innerHTML = "당신이 승리했습니다.";
    }else if(userScore == comScore) {
        textElem.innerHTML = "비겼습니다..";
    }else {
        textElem.innerHTML = "컴퓨터가 승리했습니다.";
    }
    userBtns.forEach(btn=>{
        btn.disabled = true;
    })
    comBtn.disabled = true;
}