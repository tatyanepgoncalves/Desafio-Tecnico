function VeficarLetra(str) {
  let matches = str.match(/a/gi);

  if (matches) {
    let quant = matches.length;
    return `A letra 'A' aparece ${quant} vez(es) na string.`;
  } else {
    return `A letra 'a' não foi encontrada na string.`;
  }
}

const texto = "Amanhã começarei o estágio na Target.";
console.log(VeficarLetra(texto));