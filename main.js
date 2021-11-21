window.onload = function(){
    var page = document.querySelectorAll(".details");
    var btn = document.querySelectorAll("button");
    var book = document.querySelector(".card");
    
    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener("click", function(){
            page[i].style.transform = "rotateY(-130deg)";
            page[i].style.transition ="5s cubic-bezier(.15,1.7,.84,.58)";
            page[i].style.backgroundColor = "rgba(55,55,55.9)";
            page[i].style.color = "#fff";
        });
    }
    
    book.addEventListener("mouseleave", function(){
        for(var i = 0; i < page.length; i++){
            page[i].style.transform = "";
            page[i].style.transition = "1s";
            page[i].style.backgroundColor = "#fff";
            page[i].style.color = "";
        }
    });
}