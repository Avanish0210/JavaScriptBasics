let fullName = prompt("Enter your full name:");
let name = fullName.trim();
let username = "@"+name.toLowerCase().replaceAll(" ", "")+name.replaceAll(" ", "").length;
console.log(username);

function newFunction(i , j){

}

const arrowFunction = (i,j) => {

};

const multiplicationArrowFunction = (a,b) => {
    console.log(a*b);
};
//you can call arrow function like this
arrowFunction(5, 10);
multiplicationArrowFunction(5, 10); 

function vowels(str){
    let vowwelCount = 0;
    for(let i =0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            vowwelCount++;
        }
    }
    return vowwelCount;
}
console.log(vowels("aeiou"));

const vowelsArroeFunction = (str) => {
    let vowelCount = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(vowelsArroeFunction("aaaaaaaaaa"));


//for each loops is a method that is used to iterate over an array and perform a specific action for each element in the array. It takes a callback function as an argument, which is executed for each element in the array.

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});

//for each loop we pass function in arrow function from

arr.forEach((val) => {
    console.log(val);
});
//for each loop is called higher order function or  method in this we use diff function as param or return it so that we called it to higher order function

arr.forEach((val) => {
    console.log(val*val);
});

let marks = [1,2,3,4,5];