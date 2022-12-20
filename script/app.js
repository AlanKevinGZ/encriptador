let encriptar = document.querySelector("#encriptar");
let palabrastxt = document.querySelector("#palabrastxt");
let resultado = document.querySelector(".resultado p");
let desencriptar = document.querySelector("#desencriptar");

let resPalabra = "";

encriptar.addEventListener("click", (e) => {
  e.preventDefault();
;
  let encriptacion = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  resPalabra = palabrastxt.value;
  resPalabra=resPalabra.toLowerCase();
  if (!resPalabra) {
    alert("Ingrese una palabra"); 
    return ;
  }

  const caracteresNoPermitidos = "@©°ñ«»—¿½®™§¶†‡±~µ÷·•Ø‰_:Ñ][¨*¡=)(/&%$#æ@ł€¶ŧ←↓→øþłĸłĸ̉ħŋħŋŋđđððßææ«»¢“”µ─·̣áéíóú";

  for (let palabra of resPalabra.split('')) {
      if (caracteresNoPermitidos.includes(palabra)) {
        alert('Caracter no validos')
          return ;
      }
  }

    for (let key in encriptacion) {
      resPalabra = resPalabra.replaceAll(key, encriptacion[key]);
    
    resultado.textContent = resPalabra;
  }
});

desencriptar.addEventListener("click", (e) => {
  e.preventDefault();

  let letras = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  resPalabra = palabrastxt.value;
  resPalabra=resPalabra.toLowerCase();

  if (!resPalabra) {
    alert("Ingrese una palabra a desncriptar");
    return;
  }

  const caracteresNoPermitidos = "@©°ñ«»—¿½®™§¶†‡±~µ÷·•Ø‰_:Ñ][¨*¡=)(/&%$#æ@ł€¶ŧ←↓→øþłĸłĸ̉ħŋħŋŋđđððßææ«»¢“”µ─·̣áéíóú";

  for (let palabra of resPalabra.split('')) {
      if (caracteresNoPermitidos.includes(palabra)) {
        alert('Caracter no validos')
          return ;
      }
  }
  
  for (let key in letras) {
    resPalabra = resPalabra.replaceAll(key, letras[key]);
  }

  resultado.textContent = resPalabra;
});


