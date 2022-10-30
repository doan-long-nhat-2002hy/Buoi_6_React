// function deQuy(a){
//     if(a<=0){
//         console.log("Tong", b);
//         return;
//     }
//     var b = deQuy(a) + deQuy(a-1);
// }

// const a = 3;
// deQuy(a);


// function sayHello(count) {
//     for (let i = 0; i < count; i++) {
//       console.log("Hello world!");
//     }
//   }
  
//   sayHello(5);
var b=0;
function find_sum(n){
    b += n;
    if(n <= 0){
    console.log(b);
    return;
}

    find_sum(n-1);
  }
  
  find_sum(3);