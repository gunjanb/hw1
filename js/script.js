var numbers = [];

function update() {

    document.getElementById("count").innerHTML = "Count:" + numbers.length;
    var tempSum = 0;

    for (var i = 0; i < numbers.length ; i++) {
        tempSum = tempSum + numbers[i];
    }
    document.getElementById("sum").innerHTML = "Sum:" + tempSum;

    var tempAverage = 0;
    var totalelements = numbers.length;
    tempAverage = (tempSum / totalelements);
    document.getElementById("average").innerHTML = "Average:" + tempAverage;
    event.preventDefault();

}

function resetDisplay() {
    console.log("in reset");
    document.getElementById("count").innerHTML = "Count:" + "0";
    document.getElementById("sum").innerHTML = "Sum:" + "0";
    document.getElementById("average").innerHTML = "Average:" + "0";
    document.numberform.quantity.value = "";
    numbers =[];
    event.preventDefault();
}

function onSubmit() {
    var newnum = Number(document.numberform.quantity.value);
    if (!isNaN(newnum)) {
        numbers.push(newnum);
        update();
        document.numberform.quantity.value = "";
    }
    else {
        alert("Number is not valid");
    }
    event.preventDefault();
}



