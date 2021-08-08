const os=require('os');

console.log('Espacio libre en la memoria:'+os.freemem());
const vec=[];
for(let i=0;i<1000000;i++) {
  vec.push(i);
}	
console.log('Memoria libre actual:'+os.freemem());