 const a =[0,1,3];
 const b = 1;
 const x = 1;
 const result = [];
 for(let i = 0; i < a.length; i++){
    if(a[i] === 0){
        result.push(b);
    }
    else{
        result.push(a[i]*x+b);
    }
 }

console.log("ket qua", result);