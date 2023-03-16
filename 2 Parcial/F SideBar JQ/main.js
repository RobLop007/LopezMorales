// window.onload = function(){

//     document.getElementById("btnAct").addEventListener("click",function(){
//         // console.log("click en boton")
        
//         document.getElementById("miMenu").classList.toggle("menuEscondido");
//         document.getElementById("miContenido").classList.toggle("contenidoEscondido");
//     });

// }

$(document).ready(function(){
    
    $("#btnAct").click(function(){
        console.log("Click en boton");
        
        $("#miMenu").toggleClass("menuEscondido");
        $("#miContenido").toggleClass("contenidoEscondido");
    });
});