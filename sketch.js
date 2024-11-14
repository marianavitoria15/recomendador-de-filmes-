// idades: 18 anos, 14 anos, livre 
//Generos: terror, acão, ficcão e romance

// idade 18 anos:
// terror - o farol
// acao - la casa de papel
// ficcao - centopeia humanas 
// romance - 50 tons de cinzas 

// idade 14 anos 
// terror - invocacao do mal 
// acao - velozoz e furiosos 10
// ficcao - monfall - ameaca lunar 
// romance - fabricante de lagrimas 

// idade livre:
// terror - a casa monstro 
// acao - hot wheels
// ficcao - megamente 
// romance - a bela e a fera 

let campoIdade;
let campoTerror;
let campoAcao;
let campoFiccao;
let campoRomance

function setup() {
  createCanvas(600, 400);
  createElement('h1' , 'recomendador de filmes e series');
  createSpan('idade')
  campoIdade=createInput()
  campoTerror = createInput ();
  campoAcao = createCheckbox('Acao');
  campoFiccao = createCheckbox('Ficcao');
  campoRomance = createCheckbox('Romance');
  
  
function draw() {
  background('darkblue');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('white')

  let idade = campoIdade.value();
  let terror = campoTerror.checked();
  let acao = campoAcao.checked();
  let ficcao = campoFiccao.checked();
  let romance = campoRomance.checked();

  let filme = geraRecomendacao(idade, terror, acao,ficcao, romance);
  
  text(filme, width/2, height/2);

}
  
function geraRecomendacao(idade, terror, acao, ficcao, romance){
  if(idade >= 18){
   if(terror){
    return 'O Farol'
  }else if(acao){
    return 'La Casa de Papel'
  }else if(ficcao){
   return 'Centopeia Humana'
  }else if(romance){
     return '50 tons de Cinza'
  }else{
    return 'La Casa de Papel'
  }
 }else if(idade >=14){
  if(terror){
    return 'Invocação do mal'
   }else if(acao){
    return'Viffelozes e Furiosos 10'
  }else if(ficcao){
  return'Moonfall - Ameaça Lunar'
  }else 
    return 'Fabricante de Lagrimas'
 }else{
   return'Velozes e Furiosos 10'
   }
   }else{
    if(terror){
    return'A Casa Mostro'
      }else if(acao){
   return'Hot Wheels'
   }else if(ficcao){
    return 'Megamente'
   }else if(romance){
    return'A Bela e a Fera'
   }else{
    return 'Hot Wheels'
   }
 }
}

