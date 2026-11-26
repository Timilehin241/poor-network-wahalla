function climbStairs(totalSteps) {
let first = 1;
let second  = 2;
let answer;

if (totalSteps === 1) {
return 1;
}

if (totalSteps === 2) {
return 2;
}

for (let count = 3; count <= totalSteps; count++) {

answer = first + second;
first  = second ;

second  = answer;
}

return answer;
}

const x = climbStairs(5);

console.log(x);
