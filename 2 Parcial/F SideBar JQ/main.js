// window.onload = function(){

//     document.getElementById("btnAct").addEventListener("click",function(){
//         // console.log("click en boton")
        
//         document.getElementById("miMenu").classList.toggle("menuEscondido");
//         document.getElementById("miContenido").classList.toggle("contenidoEscondido");
//     });

// }

// $(function(){
    
//     $("#btnAct").click(function(){
        
//         console.log("Click opc1");
//         $("#miMenu").toggleClass("menuEscondido");
//         $("#miContenido").toggleClass("contenidoEscondido");
//     });
// });


$(function(){
    $("#btnAct").on("click",function(){
        
        console.log("Click mas actualizado");
        $("#miMenu").toggleClass("menuEscondido");
        $("#miContenido").toggleClass("contenidoEscondido");        
    });
});