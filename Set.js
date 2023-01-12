let theCurrentSet=[];
let i=0;
let setFounds = []
let j=0;
var win = document.getElementById("win");
var p8 = document.getElementById("im8");
var p9 = document.getElementById("im9");
var p10 = document.getElementById("im10");
var p12 = document.getElementById("im12");
var p22 = document.getElementById("im22");
var p34 = document.getElementById("im34");
var p40 = document.getElementById("im40");
var p46 = document.getElementById("im46");
var p48 = document.getElementById("im48");
var p69 = document.getElementById("im69");
var p71 = document.getElementById("im71");
var p75 = document.getElementById("im75");
var cards=[p8,p9,p10,p12,p22,p34,p40,p46,p48,p69,p71,p75]//12 cards

//findSets:
/*var set1=document.getElementById("frame1");*/
var set2=document.getElementById("frame2");
var set3=document.getElementById("frame3");
var set4=document.getElementById("frame4");
var set5=document.getElementById("frame5");
var set6=document.getElementById("frame6");
p8.onclick = changeFrameColor;
p9.onclick = changeFrameColor;
p10.onclick = changeFrameColor;
p12.onclick = changeFrameColor;
p22.onclick = changeFrameColor;
p34.onclick = changeFrameColor;
p40.onclick = changeFrameColor;
p46.onclick = changeFrameColor;
p48.onclick = changeFrameColor;
p69.onclick = changeFrameColor;
p71.onclick = changeFrameColor;
p75.onclick = changeFrameColor;

function changeFrameColor()
{
    if (localStorage.getItem('userNow') === null) {
        alert("עליך לחזור לעמוד הראשי ולהירשם כמשתמש כדי לשחק");
    }
    else{
        if(this.style.background==="purple"){
            this.style.background="white";
            theCurrentSet[i]=NaN;
            i--;}
        else
        {
            this.style.background="purple";
            theCurrentSet[i]=this.id;
            i++;
            if (i===3)
            {
                i=0;
                
                if (searchCard("im34")){//set1
                    if(searchCard("im40"))
                    {
                        if(searchCard("im46"))
                        {
                            var set1 = document.getElementById("frame1");
                            if(searchSet("frame1")===false){
                                setFounds[j]=set1.id;
                                j++;
                                set1.className="show";
                                var pos = 0;
                                var id = setInterval(frame, 10);
                                function frame(){
                                    if(pos===330){
                                    clearInterval(id);}
                                    else{            
                                        pos++;
                                        set1.style.top = (pos-10) +'px';
                                        set1.style.left=( pos-50) +'px';
                                        set1.style.bottom = 30 +'px';}}}
                            
                        }
                    }
                }
                if (searchCard("im40")){//set2
                    if(searchCard("im75"))
                    {
                        if(searchCard("im8"))
                        {
                            if(searchSet("frame2")===false)
                            {
                                var set2 = document.getElementById("frame2");
                                setFounds[j]=set2.id;
                                j++;
                                set2.className="show";
                                var pos = 0;
                                var id = setInterval(frame, 10);
                                function frame(){
                                if(pos===270){
                                    clearInterval(id);}
                                else{            
                                    pos++;
                                    set2.style.top = (pos-10) +'px';
                                    set2.style.left=( pos-50) +'px';}}}
                            
                        }
                    }
                }
                if (searchCard("im71")){//set3
                    if(searchCard("im40"))
                    {
                        if(searchCard("im12"))
                        {
                            if(searchSet("frame3")===false)
                            {
                                var set3 = document.getElementById("frame3");
                                setFounds[j]=set3.id;
                                j++;
                                set3.className="show";
                                var pos = 0;
                                var id = setInterval(frame, 10);
                                function frame(){
                                if(pos===210){
                                    clearInterval(id);}
                                else{            
                                    pos++;
                                    set3.style.top = (pos-10) +'px';
                                    set3.style.left=( pos-50) +'px';}}}
                        }
                    }
                }
                if (searchCard("im22")){//set4
                    if(searchCard("im8"))
                    {
                        if(searchCard("im12"))
                        {
                            if(searchSet("frame4")===false)
                            {
                                var set4 = document.getElementById("frame4");
                                setFounds[j]=set4.id;
                                j++
                                set4.className="show";
                                var pos = 0;
                                var id = setInterval(frame, 10);
                                function frame(){
                                if(pos===150){
                                    clearInterval(id);}
                                else{            
                                    pos++;
                                    set4.style.top = (pos-10) +'px';
                                    set4.style.left=( pos-50) +'px';}}}
                        }
                    }
                }
                if (searchCard("im69")){//set5
                    if(searchCard("im48"))
                    {
                        if(searchCard("im9"))
                        {
                            if(searchSet("frame5")===false)
                            {
                                var set5 = document.getElementById("frame5");
                                set5.className="show";
                                setFounds[j]=set5.id;
                                j++;
                                var pos = 0;
                                var id = setInterval(frame, 10);
                                function frame(){
                                if(pos===90){
                                    clearInterval(id);}
                                else{            
                                    pos++;
                                    set5.style.top = (pos-10) +'px';
                                    set5.style.left=( pos-50) +'px';}}}
                        }
                    }
                }
                if (searchCard("im69")){//set6
                    if(searchCard("im46"))
                    {
                        if(searchCard("im8"))
                        {
                            if(searchSet("frame6")===false)
                            {
                                var set6 = document.getElementById("frame6");
                                setFounds[j]=set6.id; j++;
                                set6.className="show";
                                var pos = 0;
                                var id = setInterval(frame, 10);
                                function frame(){
                                if(pos===30){
                                    clearInterval(id);}
                                else{            
                                    pos++;
                                    set6.style.top = (pos-10) +'px';
                                    set6.style.left=( pos-50) +'px';}}}
                        }
                    }
                }
                
                
                theCurrentSet=[];
                for(let i =0; i<12; i++)
                {
                    cards[i].style.background="white";
                }
                if(j===6){
                    win.innerHTML=" כל הכבוד מצאת את כולם!";
            
                }
                
            }
        }
        

    }
}    



function searchCard(obg){
    for(let k=0; k<3; k++){
        if(theCurrentSet[k]===obg)
        return true;
    }
    
}
function searchSet(obg){
    for(let k=0; k<12; k++){
        if(setFounds[k]===obg)
        return true;
    }
    return false;
    
}



/* Animation 
function myMove(){
    var set1 = document.getElementById("frame1");
    set1.className="show";
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame(){
        if(pos===280){
            clearInterval(id);
        }
        else{            
            pos++;
            set1.style.top = (pos-10) +'px';
            set1.style.left=( pos-50) +'px';
        }
    }
}*/



