import {formatCurrency} from "../javascript-amazon-project-main/scripts/utils/money.js";


//group of related tests = test suite
console.log('test suite : formatCurrency')
if(formatCurrency(2095)==='20.95'){
    console.log('converts cents into dollars : passed');
}else{
    console.log('converts cents into dollars : failed');
}

if(formatCurrency(0)==='0.00'){
    console.log('works with zero :passed');
}else{
    console.log('works with zero : failed');
}

if(formatCurrency(2000.5)==='20.01'){
    console.log('round up to the nearest cents : passed');
}else{
    console.log('round up to the nearest cents : failed');
}

if(formatCurrency(2000.4)==='20.00'){
    console.log('round up to the nearest cents : passed');
}else{
    console.log('round up to the nearest cents : failed');
}