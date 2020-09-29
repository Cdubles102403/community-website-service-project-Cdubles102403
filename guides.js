$(document).ready(function(){
    
});

function toggle(clicked){
    clicked = '#'+clicked
    if($(clicked).css("background-color")=="red"){
        $(clicked).css("background-color","red")   
    }
   else{
    $(clicked).css("background-color","blue")
   }
   console.log($(clicked).css("background-color"))
}