function playsound(){
    //alert('U smell like dog poo seriously take a shower... Click ok to take a shower!');
    var pump=document.getElementById("pump") ;
    pump.play();
}
var loc="Updates";
var link;
var inter;
var href;
function animate(){
    clearTimeout(inter);
    window.location=href;
  
}
$(document).ready(function(){
    $(".Tabs a").click(function(event){
     href=this.href;
     event.preventDefault();
     if (!href.includes(".html#")){
        var name="unload";
        link=document.getElementsByClassName("CoverPictures")[0];
        link.id=name;
        inter=setTimeout(animate, 200);  
     }
    });
});

function updates() {
    loc = "Updates";   
}

function Weapons() {
    loc = "Weapons";   
}

function Items() {
    loc = "Items";
}

function Skins() {
    loc = "Skins";   
}
