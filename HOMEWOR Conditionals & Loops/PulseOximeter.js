
function oxygenChecker(oxygen){
    if(oxygen >= 96){
        return ("Normal reading");
    } 
    else if(oxygen == 95){
        return ("Acceptable to continue home monitoring");
    }
    else if(oxygen >=93 && oxygen <=94){
        return ("Seek advice from health professionals");
    }
    else if(oxygen <= 92){
        return ("Seek urgent medical advice.");
    }
}
console.log(oxygenChecker(96));

function pulseChecker(pulse){
    if(pulse >= 40 && pulse <= 100){
        return ("Normal reading");
    } 
    else if(pulse >= 101 && pulse <= 109){
        return ("Acceptable to continue home monitoring");
    }
    else if(pulse >=110 && pulse <=130){
        return ("Seek advice from health professionals");
    }
    else if(pulse >= 131){
        return ("Seek urgent medical advice.");
    }
}
console.log(pulseChecker(112))
