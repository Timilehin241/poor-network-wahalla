function isPowerOfTwo(number){
for( let count =0; count<=number; count++){
let power = 2**count;
if (power===number){
return true;
}
else{
return false;
}
}
}
console.log(isPowerOfTwo(16));
