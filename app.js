


var ar = document.getElementById("AR");
var en = document.getElementById("EN");




var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2")
var title =document.getElementById("title");
var alert1 = document.getElementById("alert");

ar.onclick=()=>{
    set_language("arabic");
    localStorage.setItem("lang","arabic" );
}

en.onclick=()=>{
    set_language("english");
    localStorage.setItem("lang","english" );
}
onload = ()=>
{
    set_language(localStorage.getItem("lang"));
}
function set_language(get_language)
{
    if(get_language==="arabic")
    {
        title.innerHTML = "اهلا بك في موقعي لتعلم البرمجة ";
        title.style.fontFamily = "ui-sans-serif";
        text1.innerHTML = " هذا الموقع سوف يجعل منك محترفا في تطوير المواقع ";
        text1.style.fontFamily ="ui-sans-serif";
        text2.innerHTML = "فقط عليك مراجعة دروسنا ";
        text2.style.fontFamily ="ui-sans-serif";
        alert1.innerHTML ="شكرا لزيارتك موقعنا ";
        alert1.style.fontFamily ="ui-sans-serif";
    }else if(get_language ==="english"){
        title.innerHTML = "Welcome To My Web Site To Learn Programming";
        text1.innerHTML = "This site will make you a professional in web development ";
        text2.innerHTML = "You just have to follow our lessons";
        alert1.innerHTML = " Thank you for visiting our site";
    }


}