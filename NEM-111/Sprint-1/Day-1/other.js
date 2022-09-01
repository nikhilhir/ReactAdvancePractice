

//const num= 123

//const sum = (a,b)=>a+b

const sum=(a,b)=> console.log(a+b)
const mult=(a,b)=>console.log(a*b)
const sub =(a,b)=>console.log(a-b)

// ***********************************
// ****************************//IF==0***//then TRUE****//or false
const checkEven = (num)=> num%2===0?console.log(true) : console.log(false)

//export default num


//module.exports = num

module.exports = {sum,mult,sub,checkEven}



// *****************************