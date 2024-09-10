function interruptores() {
  let lampadas = { 
    A: false, 
    B: false, 
    C: false 
  };

  
  console.log("Ligue o interruptor A por alguns minutos.");
  lampadas.A = true; 

 
  setTimeout(() => {
      console.log("Desligue o interruptor A e ligue o interruptor B.");
      lampadas.A = false; 
      lampadas.B = true; 

      setTimeout(() => {
          console.log("Verificando as lâmpadas...");

          if (lampadas.B) {
              console.log("A lâmpada B está acesa e corresponde ao Interruptor B.");
          }
          if (lampadas.A) {
              console.log("A lâmpada A está acesa e corresponde ao Interruptor A.");
          } else {
              console.log("A lâmpada A está apagada, mas quente, e corresponde ao Interruptor A.");
          }
          console.log("A lâmpada C está apagada e fria, corresponde ao Interruptor C.");
      }, 2000); 
  }, 5000);
}

interruptores();
