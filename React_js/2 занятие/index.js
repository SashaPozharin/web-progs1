let numbers =[3, 212, 34324, 8984, 13, 222, 8987, 923487, 8]
let turnumbers= []
numbers=numbers.filter((item,i)=>{
    return item%2!=0;
})
truenumbers = numbers.map((item, i)=>{
    a=item*10;
    return a
})
console.log(truenumbers)