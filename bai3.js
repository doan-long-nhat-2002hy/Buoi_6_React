a = [1, 25, 7, -7, -3, 12, -22, 0];

for(let i=0; i<a.length-1; i++) {
    for(let j=i+1; j<a.length; j++) {
        if(Math.abs(a[i])> Math.abs(a[j])){
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

for(let i=0; i<a.length-1; i++) {
    for(let j=i+1; j<a.length; j++) {
        if(Math.abs(a[i]) == Math.abs(a[j])  && a[i]>a[j])
        {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

console.log("ket Qua");
for (let i=0; i<a.length; i++) {
    console.log(a[i]);
}
