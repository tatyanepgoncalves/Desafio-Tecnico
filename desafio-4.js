function completaSequencia() {
  let a = [1, 3, 5, 7];
  let proxA = a[a.length - 1] + 2;
  console.log("a) Proximo número:", proxA);

  let b = [2, 4, 8, 16, 32, 64];
  let proxB = b[b.length - 1] * 2;
  console.log("b) Próximo número:", proxB);

  let c = [0, 1, 4, 9, 16, 25, 36];
  let n = c.length;
  let proxC = n*n;
  console.log("c) Próximo número:", proxC);

  let d = [4, 10, 36, 64];
  let proxD = Math.pow((d.length + 1) * 2, 2);
  console.log("d) Próximo número:", proxD);

  let e = [1, 1, 2, 3, 5, 8];
  let proxE = e[e.length - 1] + e[e.length - 2];
  console.log("e) Próximo número:", proxE);


  let f = [7, 10, 12, 16, 17, 18, 19];
  let proxF = f[f.length - 1] + 1;
  console.log("f) Próximo número:", proxF);
 }

 completaSequencia();