let hardExercises = [['130', "40 + 90 = "], ['6', "12 : 72 = "],['121',"88 + 33 ="],["275"," 5X55 = "],['6'," 33-27= "],['163',"86 + 77"],['42'," 60-18= "],['64'," 16X4 = "],['2',"60 : 120 = "],['2', " 21-19= "]];
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
var theGame = document.getElementById("hardPart");
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
    sum=document.getElementById("points");
    gif=document.getElementById("WellDone");
    goodGrade=document.getElementById("good");
    next=document.getElementById("next-game");
    
    theQue.innerHTML = hardExercises[j][1];
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
    if(ans === parseFloat(hardExercises[j][0])){
        yourPoints+=10;
        sum.innerHTML = "כל הכבוד! " + yourPoints + " נקודות:)";
        j++;
        if(j>=hardExercises.length){
          endGame();}
        else{
          theQue.innerHTML = hardExercises[j][1];
        }
    }
    else{
      alert("אולי פעם אחרת...");
      j++;
      if(j>=hardExercises.length){
        endGame();
        }
      else{
        theQue.innerHTML = hardExercises[j][1];
      }
      
    }
        
        
  }
  
  
  function endGame(){
    check.className="hide";
    sum.innerHTML = "סיימת את המשחק עם " + yourPoints + " נקודות."
            if(yourPoints>80){
                {
                    gif.className="Well-done";
 
                    goodGrade.innerHTML = "אלופים! סיימתם את כל השלבים בהצלחה!!!"
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
