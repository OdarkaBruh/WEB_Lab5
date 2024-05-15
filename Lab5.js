var sizeOfArr;
var min = 0;
var max = 500;

var minIndex;
var maxIndex;

var answerIsTrue = "#adf09c";
var answerIsFalse = "#f09c9c";

function checkSize(a, max, min){
    if (a > max){
        return(max);
    }
    else if (a < min){
        return (min);
    }
    else {
        return(a);
    }
}

function getRndInteger() {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getSizeOfArray(){
    sizeOfArr = document.getElementById("arraySize").value;
    sizeOfArr = checkSize(sizeOfArr, 200, 1);
    document.getElementById("printSizeOfArr").innerHTML = sizeOfArr;
    return(sizeOfArr);
}

function fillArray(item){
    item = "B";
}

function findMin(array){
    let localMin = max;
    for (let i = 0; i < array.length; i+=2) {
        if (array[i] < localMin){
            minIndex = i;
            localMin = array[i]
        }
    }
    
    return(localMin);
}

function findMax(array){
    let localMax = min;
    for (let i = 1; i < array.length; i+=2) {
        if (array[i] > localMax){
            maxIndex = i;
            localMax = array[i]
        }
    }
    return(localMax);
}

function swapMinMax(array){
    let a;
    a = array[minIndex];
    array[minIndex] = array[maxIndex];
    array[maxIndex] = a;
}

function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = currentValue
    }
    return array;
  }

function createArray(){
    sizeOfArr = getSizeOfArray();
    let srcArr = [];
    srcArr.length = sizeOfArr;
    for (let i = 0; i < srcArr.length; i++) {
        srcArr[i] = getRndInteger();
    }
    let arrayDiv = document.getElementById("printArr");
    let swapArrayDiv = document.getElementById("swapArr");
    let sortArrayDiv = document.getElementById("sortArr");
    arrayDiv.innerHTML = "";
    swapArrayDiv.innerHTML = "";
    srcArr.forEach((element) => arrayDiv.innerHTML+=" "+element);
    var localMin = findMin(srcArr);
    document.getElementById("arrayMin").innerHTML = localMin;
    var localMax = findMax(srcArr);
    document.getElementById("arrayMax").innerHTML = localMax;

    let swappedArr = srcArr;
    swapMinMax(swappedArr);
    swappedArr.forEach((element) => swapArrayDiv.innerHTML+=" "+element);

    let sortArr = srcArr;
    sortArr = insertSort(sortArr);
    sortArr.forEach((element) => sortArrayDiv.innerHTML+=" "+element);
}

function checkIfInteger(){
    num = document.getElementById("checkInt").valueAsNumber;
    if (Number.isInteger(num)){
        document.getElementById("checkInt").style.backgroundColor = answerIsTrue;
    }
    else {
        document.getElementById("checkInt").style.backgroundColor = answerIsFalse;
    }
}

function checkIfNum(){
    num = document.getElementById("checkNum").value;
    if (!isNaN(num)){
        document.getElementById("checkNum").style.backgroundColor = answerIsTrue;
    }
    else {
        document.getElementById("checkNum").style.backgroundColor = answerIsFalse;
    }
}

function checkIfDate(){
    let dateObj = new Date(document.getElementById("checkDate").value);
    if (dateObj != "Invalid Date"){
        document.getElementById("checkDate").style.backgroundColor = answerIsTrue;
    }
    else {
        document.getElementById("checkDate").style.backgroundColor = answerIsFalse;
    }
}

function checkPasswords(){
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("passwordCheck").value;
    if (password1 ==  password2){
        document.getElementById("password").style.backgroundColor = answerIsTrue;
        document.getElementById("passwordCheck").style.backgroundColor = answerIsTrue;
    }
    else {
        document.getElementById("password").style.backgroundColor = answerIsFalse;
        document.getElementById("passwordCheck").style.backgroundColor = answerIsFalse;
    }
}

function submitPage(){
    
}