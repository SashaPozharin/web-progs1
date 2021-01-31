let numbers = [240, 26, 420, 343, 997, 536, 268, 950, 457, 341, 912, 923, 883, 14, 253, 79, 264, 55, 510, 790, 330, 321, 764, 252, 30, 626, 983, 261, 617, 18]
let [o,e] = [numbers.filter((item, i)=>{return item % 2==0;}).map((item,i)=>{return item**3;}),numbers.filter((item, i)=>{return item % 2>0;}).map((item,i)=>{return ((i+1)**2);})];

//let [n]= [[].concat(o,e)]
let [...newNumbers] = [...o, ...e]
console.log(o,`\n`,e,`\n`,newNumbers)