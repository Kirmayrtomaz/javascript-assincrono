function pigIt(str){

  var string = str.split(" ");
   var stringFinal = "";
  for(let cont=0; cont < string.length;cont++){

      var teste = string[cont].split("");
      var backup = teste[0];
      var teste2 = teste.slice(1,100);

       teste2[teste2.length] = backup + 'ya';
       stringFinal += teste2.join("");

      if(cont +1 < string.length){
        stringFinal += " ";
      }
  }
  console.log(stringFinal.replace(",",""));

  return stringFinal;

}

pigIt("Pig latin is cool")
