function fatorial(n){
   var fat = 1
  for(let c=n; c>1;c--){
    fat*=c
  }
  return fat
  }

  console.log(fatorial(5))


//5*4*3*2*1