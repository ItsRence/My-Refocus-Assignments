
function calculateBMI(weight, height){
    return (weight / height / height) * 10000;
    
}

function testCalculate(){
    const result = calculateBMI(16.9, 105.4);
    const expected = 15.212671345088195;

    console.assert(result === expected, "The result " + result + " does not match the expected value " + expected)
}


testCalculate()