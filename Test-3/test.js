
// 1. Palindrome or not

let checkPalindrome=(string)=> {

    let len = string.length;

      for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          
       return 'Its not a palindrome';
    }
  }
       return 'Its a palindrome';
 }
  console.log(checkPalindrome('madam')); 


//    2.find the closest number 

let closestNumber=(n, m)=>{

 
    let q = parseInt(n / m);
  
    let n1 = m * q;
   
    let n2 = (n * m) > 0 ?
        (m * (q + 1)) : (m * (q - 1));
     
  
    if (Math.abs(n - n1) < Math.abs(n - n2))
        return n1;
    return n2;
}
 
let n = 13;
let m = 4;
console.log(closestNumber(n, m));


//    3.find min and max elements in an array

let A = [ 3,2,1,56,10000,167 ];
        
console.log("Min:", Math.min.apply(null, A));
console.log("Max:", Math.max.apply(null, A)); 
         
        

  
