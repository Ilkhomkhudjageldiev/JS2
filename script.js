
var userAge = + prompt('Hurmatli foydalanuvchi yoshingizni kiriting')

if(1 <= userAge && userAge <=18 &&!isNaN(userAge)){
    alert('Siz hali yoshsiz. O\'qishingiz kerak')
}
else if(19 <= userAge && userAge <=50 &&!isNaN(userAge)){
    alert('Siz ishlashingiz kerak')
}
else if(51 <= userAge && userAge <=59 &&!isNaN(userAge)){
    alert('Siz yaqinda nafaqaga chiqasiz')
}
else if(60 <= userAge && userAge <=150 &&!isNaN(userAge)){
    alert('Siz nafaqaho\'rsiz')
}
else { if(isNaN(userAge)){
    alert('Siz son kiritmadingiz')
}
else{
    alert('Nimadur noto\'g\'ri ketti')
}
    
}

var userTime = + prompt('Hurmatli foydalanuvchi soatni 0 dan 24 gacha kiriting')

if( 1 <= userTime  && userTime <= 6 && !isNaN(userTime)){

    alert('Soat tungi ' + userTime)
}
else if(7 <= userTime && userTime <= 12 && !isNaN(userTime)){

    alert('Soat tongi ' + userTime)
}
else if(13 <= userTime && userTime <= 18 && !isNaN(userTime)){

    alert('Soat kunduzgi ' + (userTime-12))
}
else if(19 <= userTime && userTime <= 24 && !isNaN(userTime)){

    alert('Soat kechgi ' + (userTime-12))
}

else { if(isNaN(userTime)) {

    alert('Siz son kiritmadingiz')
}
else {

    alert('Nimadur noto\'g\'ri ketti')
}
    
}





var num1 = + prompt('Birinchi sonni kiriting: ')
var num2 = + prompt('Ikkinchi sonni kiriting: ')
var num3 = + prompt('Uchinchi sonni kiriting: ')

if((num1 > num2 && num2 > num3 &&!isNaN(num1) &&!isNaN(num2) &&!isNaN(num3)) || (num1 < num2 && num2 < num3 &&!isNaN(num1) &&!isNaN(num2) &&!isNaN(num3))) {
    alert(num2)
}
else if((num2 > num1 && num1 > num3 &&!isNaN(num1) &&!isNaN(num2) &&!isNaN(num3)) || (num2 < num1 && num1 < num3 &&!isNaN(num1) &&!isNaN(num2) &&!isNaN(num3))){
    alert(num1)
}
else if((num2 > num3 && num3> num1 &&!isNaN(num1) &&!isNaN(num2) &&!isNaN(num3)) || (num2 < num3 && num3 < num1 &&!isNaN(num1) &&!isNaN(num2) &&!isNaN(num3))){
    alert(num3)
}

else if(num1 === num2 && num2 === num3 && num1 === num3 && !isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
    alert('Hamma sonlar teng')
}


else{ if(isNaN(num1)) {
    alert('Birinchi son raqam emas')

} else if(isNaN(num2)){

    alert('Ikkinchi son raqam emas')
} else if(isNaN(num3)){

    alert('Uchinchi son raqam emas')

} else{
    alert('Nimadur noto\'g\'ri ketti')
}
}




