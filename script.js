document.body.innerHTML = `
<div class="shadow">
  <input class="field" id="question" type="text" placeholder="задати питання">
  <div class="circle" id="crcl"><img class = "circleImg" src="img/rabbit.gif"></div>
  <div class="answer" id="predict"></div>
</div>
`
const answers = [
"Так", "Звісно", "Безумовно", "Чому ні?", "Мабуть так", "Ймовірно", "Варто спробувати",
"Спробуй", "Сумнівно", "Не знаю", "Можливо", "Не треба", "Навіщо?", "Можливо... Але ні",
"Ні", "Звісно ні", "Не думаю, що це гарна ідея", "Не варто",

];

document.getElementById('crcl').onclick = function (){
    let field = document.getElementById("question").value;
    if (field == ""){
        alert ( "Заповніть, будь-ласка, вище зазначене поле" );
        document.getElementById("question").style.background = "#ed37379e";
        }
    else if (field.indexOf("?") == -1){
        alert("Ви ввели не запитання))");
      }
    else{
        document.getElementById("question").style.background = "#3d49828d";
        document.getElementById("predict").style.animation = "text 5s ease";
        let random = Math.floor(Math.random() * answers.length);
        document.getElementById("predict").innerHTML = answers[random];
        let anim = document.getElementById('crcl');
        anim.classList.add('shakeAnim');
        setTimeout(function(){anim.classList.remove('shakeAnim');}, 1000);
      }
}
