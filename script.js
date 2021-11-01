document.body.innerHTML = `
<div class="shadow">
  <input class="field" id="question" type="text" placeholder="ENTER YOUR QUSETION">
  <div class = "circle" onclick="RandAnswer();"><img class = "circleImg" src="img/rabbit.gif"></div>
  <div class="ans" id="predict"></div>
</div>
`
const answers = [
"Так", "Звісно", "Безумовно", "Чому ні?", "Мабуть так", "Ймовірно", "Варто спробувати",
"Спробуй", "Сумнівно", "Не знаю", "Можливо", "Не треба", "Навіщо?", "Можливо... Але ні",
"Ні", "Звісно ні", "Не думаю, що це гарна ідея", "Не варто",

];

function RandAnswer(){
    if (document.getElementById("question").value == ""){
        alert ( "Please fill in the field with a question to the magic ball" );
        document.getElementById("question").style.background = "#ed37379e";
        }
        else{
        document.getElementById("question").style.background = "#3d49828d";
        document.getElementById("predict").style.animation = "text 5s ease";
        let random = Math.floor(Math.random() * answers.length);
        document.getElementById("predict").innerHTML = answers[random];
}
}
