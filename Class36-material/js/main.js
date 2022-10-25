// document.querySelector('#clickMe').addEventListener('click', coinFlip)

// function coinFlip(){
//   let face = ''
//   let randomNumber = Math.random() * 2;

//   if(randomNumber > 1){
//     face = "Heads"
//     document.querySelector('#coinImg').innerHTML = '<img id="" src="./img/heads.png" alt="">'
//   }else{
//     face = "Tails"
//     document.querySelector('#coinImg').innerHTML = '<img id="" src="./img/tails.png" alt="">'
//   }
//   document.querySelector("#coinFace").innerHTML = face
//   console.log(randomNumber);
// } 

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}