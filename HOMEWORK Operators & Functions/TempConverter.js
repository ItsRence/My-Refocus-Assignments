// Formula C to K = C + 273.15
// Formula F to K = (F - 32) * 5/9 + 273.15


function celConvertToKelvin(tempCelsius){
    let celToKelvin = tempCelsius + 273.15;
    return celToKelvin;

}
console.log(celConvertToKelvin(90));

function farConvertToKelvin(tempFarenheit){
    let farToKelvin = (tempFarenheit - 32) * 5/9 + 273.15;
    return farToKelvin;
}
console.log(farConvertToKelvin(90));