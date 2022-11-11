
// Formula tip = TB * .10 --> 10%

function computeTip(totalBill){
    let tip = totalBill * .10;
    return ("Your tip will be: " + tip);
}
console.log(computeTip(400));