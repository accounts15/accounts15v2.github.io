let numEnglish = document.getElementById("num-grd-english");
let numMath = document.getElementById("num-grd-math");
let numDs = document.getElementById("num-grd-ds");
let numCp = document.getElementById("num-grd-cp");
let numWp = document.getElementById("num-grd-wp");

numEnglish.addEventListener('keyup', function() {

    let total = parseFloat(numEnglish.value) + 
                parseFloat(numMath.value) + 
                parseFloat(numDs.value) + 
                parseFloat(numCp.value) +
                parseFloat(numWp.value);

    let average = total / 5;

    document.getElementById("num-total-grades").value = total;
    document.getElementById("num-average").value = average;
});

numMath.addEventListener('keyup', function() {

    let total = parseFloat(numEnglish.value) + 
                parseFloat(numMath.value) + 
                parseFloat(numDs.value) + 
                parseFloat(numCp.value) +
                parseFloat(numWp.value);

    let average = total / 5;

    document.getElementById("num-total-grades").value = total;
    document.getElementById("num-average").value = average;
});


numCp.addEventListener('keyup', function() {

    let total = parseFloat(numEnglish.value) + 
                parseFloat(numMath.value) + 
                parseFloat(numDs.value) + 
                parseFloat(numCp.value) +
                parseFloat(numWp.value);

    let average = total / 5;

    document.getElementById("num-total-grades").value = total;
    document.getElementById("num-average").value = average;
});

numDs.addEventListener('keyup', function() {

    let total = parseFloat(numEnglish.value) + 
                parseFloat(numMath.value) + 
                parseFloat(numDs.value) + 
                parseFloat(numCp.value) +
                parseFloat(numWp.value);

    let average = total / 5;

    document.getElementById("num-total-grades").value = total;
    document.getElementById("num-average").value = average;
});

numWp.addEventListener('keyup', function() {

    let total = parseFloat(numEnglish.value) + 
                parseFloat(numMath.value) + 
                parseFloat(numDs.value) + 
                parseFloat(numCp.value) +
                parseFloat(numWp.value);

    let average = total / 5;

    document.getElementById("num-total-grades").value = total;
    document.getElementById("num-average").value = average;
});

// let arrGrades = document.querySelectorAll("[type=number]");
// let total = 0;
// let average = 0;
// for(var x = 0; x <= arrGrades.length; x++) {
//     var grdValue = arrGrades[x] != undefined ? arrGrades[x].value : 0;
//     if (grdValue)
//         total += parseFloat(grdValue);

//     average = total / 5;
    
// }
// console.log(total);
// console.log(average);
