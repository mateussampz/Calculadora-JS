
const char = document.querySelectorAll(".items")
char.forEach(function(botao){
    botao.addEventListener('click', function(){
        const valor = botao.textContent;
        console.log(valor)
        
    });
});

