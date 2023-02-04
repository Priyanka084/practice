function GetEvenNumber() {
    // logic
    for(let i=0; i < arr.length; i++){
        if(IsEven(arr[i])){
            console.log(arr[i]);
        }
    }
}
console.log("Hey there");
const IsEven = (number) => number % 2 !== 0;
GetEvenNumber();