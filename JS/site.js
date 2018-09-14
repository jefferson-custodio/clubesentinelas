$(".fa").click(function(){
    $(".menu").toggleClass("menu-active");
    $(".fa-bars").toggleClass("fa-times-circle");
    $("body").toggleClass("body-overflow");
});
    
//scrollToTop + surgimento do botão de scroll

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }

    });
    $('.scroll').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
//fim de scrollToTop


////////////////////////// botão pg historia //////////////////////

$(".botao-fotos").click(function () {
    $(".div-ft-inblock").toggleClass("ativado");

    var botao = document.querySelector(".botao-fotos")

    if($('.div-ft-inblock').hasClass("ativado")){
        $('.div-ft-inblock').slideDown("slow");
        $(".botao-fotos").addClass("botao-ativado");
        
        botao.textContent = "Esconder Fotos"
    } else {
        $('.div-ft-inblock').slideUp("slow");
        $(".botao-fotos").removeClass("botao-ativado");
        
        botao.textContent = "Mostrar Fotos";
        return;
    }
})




var busca = document.querySelector(".busca");
    busca.addEventListener("input", function(){
        document.querySelector(".fa-search").classList.add("i-none");
        if(busca.value == 0){
            document.querySelector(".fa-search").classList.remove("i-none");
            return
    }
    });


    var busca = document.querySelector(".busca");
    
    busca.addEventListener("input", function(){
        var membros = document.querySelectorAll(".fig-membro");
    
        if(this.value.length > 0){
           
            var titleMen = document.querySelectorAll(".title-membros")
        for (var i = 0; i < titleMen.length; i++){
            titleMe = titleMen[i]
            titleMe.classList.add("remover-membro");

        }
          for (var i = 0; i < membros.length; i++){
            var membro = membros[i]; 
    
            var nome = membro.querySelector(".nome-membro");
            var nomeTd = nome.textContent;            

            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nomeTd)){
                membro.classList.add("remover-membro");
            } else {
                membro.classList.remove("remover-membro");
            }
        }  
        }else{
            var membros = document.querySelectorAll(".fig-membro")
            for (var i = 0; i < membros.length; i++){
                var membro = membros[i];
                membro.classList.remove("remover-membro");
            }
            var titleMen = document.querySelectorAll(".title-membros")
            for (var i = 0; i < titleMen.length; i++){
                titleMe = titleMen[i]
                titleMe.classList.remove("remover-membro");
    
            }
        }


    });


    





