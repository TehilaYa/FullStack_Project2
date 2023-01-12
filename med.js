let medExercises = [['50', "5X10 = "], ['45',  "9X5 ="], ['20', "200/10 = "], ['5', "50/10 ="], ['9', "3X3 ="], ['26', "13 + 13 ="],['700', "70X10 = "],['45', "56-11 = "],['38', "45-7"],['99', " 9X11 = "]];
var yourPoints = 0;
var theQue;
var TRY;
var check;
var sum;
var gif;
var goodGrade;
var next;
var thisGame=document.getElementById("this-game");
var j=0;
var theGame = document.getElementById("medPart");
var start=document.getElementById("start");
start.addEventListener("click", play);
function play(){
  if (localStorage.getItem('userNow') === null) {
    alert("עליך לחזור לעמוד הראשי ולהירשם כמשתמש כדי לשחק");
    }
  else{
    start.className="hide";
    theGame.className="";
    theQue = document.getElementById("que");
    TRY=document.getElementById("test");
    check=document.getElementById("go");
    sum=document.getElementById("points");//<p>
    gif=document.getElementById("WellDone");
    goodGrade=document.getElementById("good");
    next=document.getElementById("next-game");
    
    theQue.innerHTML = medExercises[j][1];
    theGame.className="";
    TRY.addEventListener("input",something);
    TRY.addEventListener("keydown", function(e){
      if(e.code === "Enter"){
        trueORfalse();
      }
    });
    check.addEventListener("click", trueORfalse);
    

  }
   
}
function something(){
    console.log("what is your answer?")
  }
  function trueORfalse(){
    var ans = parseFloat(TRY.value);
    if(ans === parseFloat(medExercises[j][0])){
        yourPoints+=10;
        sum.innerHTML = "כל הכבוד! " + yourPoints + " נקודות:)";
        j++;
        if(j>=medExercises.length){
          endGame();}
        else{
          theQue.innerHTML = medExercises[j][1];
        }
    }
    else{
      alert("אולי פעם אחרת...");
      j++;
      if(j>=medExercises.length){
        endGame();
        }
      else{
        theQue.innerHTML = medExercises[j][1];
      }
      
    }
        
        
  }
  
  
  function endGame(){
    check.className="hide";
    sum.innerHTML = "סיימת את המשחק עם " + yourPoints + " נקודות."
            if(yourPoints>80){
                {
                    gif.className="Well-done";
                    goodGrade.innerHTML = "הציון שלך גבוה ואנחנו ממליצים לך לעלות שלב!"
                    next.className="next-game";
                    j=0;
                    yourPoints=0;
                }
            }
            else {
                goodGrade.innerHTML="אנו ממליצים לך לחזור לשחק שוב את השלב הזה"
                thisGame.className="next-game";
            }
            j=0;
  
        }
