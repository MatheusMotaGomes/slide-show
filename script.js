let voltar = document.getElementById('voltar');
let proximo = document.getElementById('proximo');
let imagens = document.getElementById('imagens');

let fila_de_imagens = ['./imagens/chrono.jpg', './imagens/inuyasha.jpg' , './imagens/ippo.png' , './imagens/tenchi.jpg' , './imagens/tenjhotenge.jpg' , './imagens/yuyuhakusho.jpg'];

let i = 0;

function proximo_fila(){
  if(i >= 5){
    i = 0;
    imagens.src = fila_de_imagens[i];
  }else{
    imagens.src = fila_de_imagens[i];
    i++ ;
    }
}

function voltar_fila(){
    if(i == 0){
      i = 5;
      imagens.src = fila_de_imagens[i];
    }else{
      imagens.src = fila_de_imagens[i];
      i--;
    }
    
}

proximo.addEventListener('click' , proximo_fila)
voltar.addEventListener('click' , voltar_fila)
