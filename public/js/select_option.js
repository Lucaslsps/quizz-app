// Função para definir a cord do card de acordo com sua posição
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

// Função necessária para que o javascript não rode antes da página ser renderizada
$(document).ready(function(){
    // Nome dos cards
    var nome1_value = document.getElementById("nome1").innerText;
    var nome2_value = document.getElementById("nome2").innerText;
    var nome3_value = document.getElementById("nome3").innerText;

    // Valores dos cards
    var img1_value = 0;
    var img2_value = 0;
    var img3_value = 0;
    
    // A cada clique, define o novo valor do card 1 e muda sua cor
    $( "#img1" ).click(function() {
        if(img1_value <=2){
            img1_value += 1;
        }else{
            img1_value = 1;
        }
        define_color("sel1", img1_value);
    });

    // A cada clique, define o novo valor do card 2 e muda sua cor
    $( "#img2" ).click(function() {
        if(img2_value <=2){
            img2_value += 1;
        }else{
            img2_value = 1;
        }
        define_color("sel2", img2_value);
    });
    
    // A cada clique, define o novo valor do card 3 e muda sua cor
    $( "#img3" ).click(function() {
        if(img3_value <=2){
            img3_value += 1;
        }else{
            img3_value = 1;
        }
        define_color("sel3", img3_value);
    });

    // Envia as informações através de POST para o server.js
    $("#enviar").click(function(){
        nome = document.getElementById("Nome").value;
        if(nome == ""){
            alert("Insira seu nome");
            return;
        }
        if(img1_value == 0 || img2_value == 0 || img3_value == 0){
            alert("Selecione uma cor para todos os personagens");
            return;
        }
        if(img1_value == img2_value || img1_value == img3_value || img2_value == img3_value){
            alert("Selecione somente uma cor para cada personagem");
            return;
        }
        
        $.ajax({
            type:'POST',
            url:'/',
            dataType:"Json",
            data: {
                nome: nome, 
                voto1:{card:nome1_value, valor: img1_value},
                voto2:{card:nome2_value, valor: img2_value},
                voto3:{card:nome3_value, valor: img3_value},
            },
            success:function(reponse){console.log("foi")}
        });
        document.getElementById("Nome").value = "";
        alert("Obrigado pelo voto :)");
    });
});

