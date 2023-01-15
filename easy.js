let easyExercises = [['10', "= 5 + 5 " ], ['4', " = 9-5 "], ['6', "1 + 2 + 3"],['18', "10 + 8 ="],['40', "20+20="], ['10', "20-10="], ['14', "7 + 7 = "], ['6', "16-10="], ['43', "40 + 3"], ['90', "70 + 20"]];
var yourPoints = 0;
localStorage.setItem('PlayerPoints-easy', yourPoints);
var theQue;
var TRY;
var check;
var sum;
var gif;
var goodGrade;
var next;
var thisGame=document.getElementById("this-game");
var j=0;
var theGame = document.getElementById("easyPart");
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
    
    theQue.innerHTML = easyExercises[j][1];
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
    if(ans === parseFloat(easyExercises[j][0])){
        yourPoints+=10;
        localStorage.setItem('PlayerPoints-easy', yourPoints);
        sum.innerHTML = "כל הכבוד! " + yourPoints + " נקודות:)";
        j++;
        if(j>=easyExercises.length){
          endGame();}
        else{
          theQue.innerHTML = easyExercises[j][1];
        }
    }
    else{
      alert("אולי פעם אחרת...");
      j++;
      if(j>=easyExercises.length){
        endGame();
        }
      else{
        theQue.innerHTML = easyExercises[j][1];
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
