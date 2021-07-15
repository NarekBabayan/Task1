const myFoo = () => {

    let quantity = 0;
    for (let num = 1000; num <= 9999; num++) {
 
        let copyNum = num;
        let arr=[],i=0;
        while(copyNum!=0) {
          let a = copyNum%10;
          copyNum = copyNum-a;
          copyNum = copyNum/10;
          arr[i] = a;
          i++;
        }

        let [a,b,c,d] = arr;
        let ab = a+""+b;
        let dc = d+""+c;

        if(ab===dc){
            quantity++;
        }

    }

    console.log(quantity);
}

myFoo();