var overlay=document.querySelector(".popup-overlay")
var box=document.querySelector(".popup-box");

var addpopup=document.getElementById("add-popup")

 

 
addpopup.addEventListener('click', function() {
        overlay.style.display = 'block';
        box.style.display = 'block';
});

 var cancel=document.getElementById("cancel")

 function closePopup(){
    overlay.style.display = 'none';
    box.style.display = 'none';

 }

 var container=document.querySelector(".container")
 var title=document.getElementById("title")
 var author=document.getElementById("author")
 var description=document.getElementById("description")
var addbook=document.getElementById("addbook")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","container");
    div.innerHTML=`<h1> Book Name : ${title.value}</h1>
        <h1> Author Name:  ${author.value}</h1>
        <p> About : ${description.value}</p>
        <button onclick="del(event)" class="action-button">delete Me</button>
`
        container.append(div)

        overlay.style.display = 'none';
        box.style.display = 'none';


})

function del(event){
    event.target.parentElement.remove()
}