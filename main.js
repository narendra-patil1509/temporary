let previousNum = 0;
let sum = 0;
let currentNum = 0;
let temp;
let v;
let loop = 0;
let currLeft = sessionStorage.getItem("currentLeftPos");
let currTop = sessionStorage.getItem("currentToptPos");

let pn = parseInt(sessionStorage.getItem("Previous-Number"));
let cn = parseInt(sessionStorage.getItem("Current-Number")) ;
let gn = parseInt(sessionStorage.getItem("Generated-Number")) ;
let sm = parseInt(sessionStorage.getItem("Sum-Number")) ;

let player = document.getElementById("circle");
function generateNumber() {
  let generatedNumber = Math.floor(Math.random() * 6 + 1);

  // sum = sum + generatedNumber;
  // currentNum = sum;
  // previousNum = currentNum - generatedNumber;
  if(loop > 0){
    if(loop == 1){
      sm = sm + generatedNumber;
      cn = sm;
      pn = cn-generatedNumber;

      sum = sm;
      currentNum = cn;
      previousNum = pn;
      loop++;
    }
    else{
      sum = sum + generatedNumber;
      currentNum = sum;
      previousNum = currentNum - generatedNumber;
    }
    sessionStorage.setItem("Sum-Number",sum);
    sessionStorage.setItem("Previous-Number",previousNum);
    sessionStorage.setItem("Current-Number",currentNum);
    sessionStorage.setItem("Generated-Number",generatedNumber);
  }
  else{
    sum = sum + generatedNumber;
    currentNum = sum;
    previousNum = currentNum - generatedNumber;
    sessionStorage.setItem("Sum-Number",sum);
    sessionStorage.setItem("Previous-Number",previousNum);
    sessionStorage.setItem("Current-Number",currentNum);
    sessionStorage.setItem("Generated-Number",generatedNumber);
  }

  // console.log("Previous Number = " + previousNum);
  // console.log("Current Number = " + currentNum);
  // console.log("Generated Number = " + generatedNumber);

  // sessionStorage.setItem("Previous-Number",previousNum);
  // sessionStorage.setItem("Current-Number",currentNum);
  // sessionStorage.setItem("Generated-Number",generatedNumber);

  console.log("----------------------------");
  let showNum = document.getElementById("Show-Number");
  let show = document.getElementById("Show-Sum");
  // showSum.style.display = "block";
  showNum.innerHTML = `Generated Number = `+ generatedNumber;
  show.innerHTML = `Current Number = ` + currentNum;
  
  if (previousNum == 0) {
    previousNum = currentNum;
  }

  for (let i = previousNum; i <= currentNum; i++) {
    // console.log("I = " + i);
    let boxValue = document.getElementById("box" + i);
    const rect = boxValue.getBoundingClientRect();
    const position = {
      left: rect.left,
      top: rect.top,
    };
    sessionStorage.setItem("currentLeftPos",position.left);
    sessionStorage.setItem("currentToptPos",position.top);
    currLeft = sessionStorage.getItem("currentLeftPos");
    currTop = sessionStorage.getItem("currentToptPos");

    temp = i;
    v = document.cookie = `narendra=${temp}`;

    setTimeout(()=>{
      player.style.transform = `translateY(${position.top - 727}px) translateX(${position.left - 20}px)`;
      console.log("Box ",i+" Top = ",position.top+" Left = ",position.left);
    },);

    // gotimove();
    // async function gotimove() {
    //   let k = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       player.style.transform = `translateY(${position.top - 727}px) translateX(${position.left - 20}px)`;
    //       console.log("Box ",i+" Top = ",position.top+" Left = ",position.left);
    //     },i*2000);
    //   });
    //   console.log("Await ",await k);
    //   return [k];
    // }

    // player.style.transform = `translateY(${position.top - 727}px) translateX(${position.left - 20}px)`;

    async function moveBy() {
      let mb = new Promise((resolve, reject) => {
        setTimeout(() => {
          player.style.transform = `translateY(-277px) translateX(816px)`;
          sum = 32;
        }, 500);
      });
      console.log(await mb);
      return [mb];
    }
    function getMove(e) {
      let b = moveBy(e);
      b.then((value) => {
        console.log("SA = " + value);
      });
    }
    if (sum == 5) {
      getMove(sum);
    }
  }
}
window.onload = ()=>{
  if(currLeft!=null){
    player.style.transform = `translateY(${currTop-727}px) translateX(${currLeft-20}px)`;
    // player.style.left = currLeft - 20+'px';
    // player.style.top = currTop +'px';
    loop++;
  }
}