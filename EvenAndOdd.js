function GetEvenNumber() {
    // logic
    for(let i=0; i < arr.length; i++){
        if(IsEven(arr[i])){
            console.log(arr[i]);
        }
    }
}

const IsEven = (number) => number % 2 !== 0;
GetEvenNumber();