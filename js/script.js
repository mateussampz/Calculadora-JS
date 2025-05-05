
const char = document.querySelectorAll(".items")
const text = document.querySelector("#resultado")
let concat = ""
char.forEach(function(botao) {
    botao.addEventListener("click", function(event){
        const valor = event.target.textContent;
        
        if(valor === '='){
           text.textContent = eval(concat)
           concat = text.textContent

        }
        else if(concat.lastchild = '+' || concat.lastchild = '/' || concat.lastchild = '-' || concat.lastchild = '*' ){
            
        }
        else if(valor === 'C'){
            text.textContent = ""
            concat = ""
        }
        else{
            concat += valor
            text.textContent =  concat
            
        };
    });
});


