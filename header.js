/*  קובץ ג'אוה סקריפט המקושר לכל העמודים הראשיים*/

/* הפונקציה מופעלת בלחיצה על כפתור "התנתק" 
-מחליפה את הכפתורים המוצגים ומוחקת את השם משתמש מהזיכרון */
function logOut() {
    document.getElementById("logOut").className = "hide";
    document.getElementById("logIn1").className = "button_login";
    document.getElementById("logIn2").className = "button_login";
    localStorage.removeItem("userNow");

}

/* הפונקציה מופעלת בטעינת כל דף, ואם יש משתמש מחובר" 
-מחליפה את הכפתורים המוצגים ומציגה את שם המשתמש על המסך */
function logIn() {

    if (localStorage.getItem('userNow') != null) {
        document.getElementById("logOut").className = "button_logOut";
        document.getElementById("logIn1").className = "hide";
        document.getElementById("logIn2").className = "hide";
        document.getElementById("user").innerHTML = " שלום " + localStorage.getItem("userNow");
    }
    
}
