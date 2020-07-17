
// coading for feet to mile conversion
function feetToMile(valueFeet) {

    let mile = valueFeet * 0.0001894;
    return mile;
}
let mile = feetToMile(5000);
if (mile < 0) {
    console.log("please give a correct value");
}
else {
    console.log(mile);
};

// woodCalculation
function woodCalculator(numChair, numTable, numBed) {
    let chairCft = numChair * 1;
    let tableCft = numTable * 3;
    let bedCft = numBed * 5;
    let totalCft = chairCft + tableCft + bedCft;
    return totalCft;
};

let resultCft = woodCalculator(3, 5, 5);
if (resultCft < 0) {
    console.log("The entered value is incorrect please give a correct value");
}
else {
    console.log(resultCft);
};
// BrickCalculator coading
function brickCalculator(number) {
    let brick = number;
if (brick <= 10) 
    let result1 = console.log(brick * 15000);

      else if(brick > 10 && brick <= 20)
        let result2 = console.log((brick - 10) * 12000);
     else if(brick > 20)
        let result3 = console.log((brick - 20) * 10000);
    

        else { "Please give a valid number" };
    
        total = result1 + result2 + result3;
    return total;
}


let result = brickCalculator(5);
console.log(result);


// function for finding smallest value in an array
function tinyFriend(arrFriends) {
    // let smallName = arrFriends[0].length;
    for (let i = 0; i < arrFriends.length; i++) {
        let smallName = arrFriends[0].length;
        if (smallName < arrFriends[i].length) {
            smallName = smallName;
        }
        else if (smallName > arrFriends[i].length) {
            smallName = arrFriends[i];
        }
        else if (smallName == arrFriends[i + 1]) {
            smallName = smallName;
        } return smallName;
    }

}
let result = tinyFriend(["reza", "amjad", "selim", "sahin", "mim", "sumona", "lat", "bolto", "sorif"]);
console.log(result);