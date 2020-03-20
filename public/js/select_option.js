//Send post
//$( "#yourFormId" ).submit();

var img1_value = 0;
var img2_value = 0;
var img3_value = 0;

function define_color(card, img_value){
    card_sel = document.getElementsByClassName(card);
    switch (img_value){
        case 1:
            card_sel[0].style.background = "#DAA520";
            break;
        case 2:
            card_sel[0].style.background = "#BCBDB3";
            break;
        case 3:
            card_sel[0].style.background = "#836953";        
            break;
    }
    
}

$(document).ready(function(){
    $( "#img1" ).click(function() {
        if(img1_value <=2){
            img1_value += 1;
        }else{
            img1_value = 1;
        }
        define_color("sel1", img1_value);
    });

    $( "#img2" ).click(function() {
        if(img2_value <=2){
            img2_value += 1;
        }else{
            img2_value = 1;
        }
        define_color("sel2", img2_value);
    });
    
    $( "#img3" ).click(function() {
        if(img3_value <=2){
            img3_value += 1;
        }else{
            img3_value = 1;
        }
        define_color("sel3", img3_value);
    });

    $("#enviar").click(function(){
        var img_values = [img1_value, img2_value, img3_value];
        $.ajax({
            type:'POST',
            url:'/',
            data: img_values,
            success:function(reponse){console.log("foi")}
        });
    });
});

