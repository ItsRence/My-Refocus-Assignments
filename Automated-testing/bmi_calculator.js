// FORMULA BMI: [Weight (kg) / height (cm) / height (cm)] x 10,000


let weight, height;


function calculateBMI(weight, height){
    totalBMI = (weight / height / height) * 10000;
    totalBMI = totalBMI.toFixed(1)
    console.log("Your Total Body Mass Index is: "+ totalBMI)
}

calculateBMI(16.9, 105.4)
const calculate_BMI = {
    totalBMI: function (weight, height) {
        return (weight / height / height) * 10000;
    }
}

module.exports = calculate_BMI;