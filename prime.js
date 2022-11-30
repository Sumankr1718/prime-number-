function identifyPrime(num) {
  let bag=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            bag+i
        }
    }if(bag==1){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
