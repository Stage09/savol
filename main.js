// 1
// let promt = prompt("ixtiyoriy son kiriting");
// alert(promt.length);


// 2
// let promt = prompt("Ixtiyoriy son kiriting");
// if(promt % 2 == 0){
//     alert("Siz kiritgan son juft ekan")
// }else {
//     alert("Siz kiritgan son toq ekan")
// }




// 3
// let promt = prompt("ixtiyoriy son kiriting");
// let xonali = promt.length;
// if(promt % 2 == 0){
//     alert(`Siz kiritgan son juft ekan va bu son ${xonali} xonali`)
// }else {
//     alert(`Siz kiritgan son toq ekan va bu son ${xonali} xonali`)
// }




// 4
let a = prompt("1. Ixtiyoriy bir xonali son kiriting");
let b = prompt("2. Ixtiyoriy bir xonali son kiriting");
let c = prompt("3. Ixtiyoriy bir xonali son kiriting");

if (a >= b && a >= c) {
    if (b >= c) {
        alert("" + a + b + c);
    } else {
        alert("" + a + c + b);
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        alert("" + b + a + c);
    } else {
        alert("" + b + c + a);
    }
} else {
    if (a >= b) {
    alert("" + c + a + b);
} else {
    alert("" + c + b + a);
    }
}


// 5
// let promt = prompt("Uch xonali son kiriting");
// let a = Math.floor(promt / 100);
// let b = Math.floor((promt / 10) % 10);
// let c = promt % 10
// alert(Math.min(a, b, c));





// 6
// let promt = prompt("Uch xonali son kiriting");
// alert(Math.floor((promt / 10) + 10))



 
// 8
// let birthYear = prompt("Tug'ilgan yilingizni kiriting:");
// let age = 2025 - birthYear;
// alert("Sizning yoshingiz: " + age);




// 9
// let promt = prompt("Ixtiyoriy son kiriting");
// if(promt > 0 && promt % 2 == 0){
//     alert("Siz Juft , Musbat son kiritdinggiz")
// }else if(promt < 0 && promt % 2 == 0){
//     alert("Siz Juft , Manfiy son kiritdinggiz")
// }else if(promt < 0 && promt % 2 = 0){
//     alert("Siz Toq , Manfiy son kiritdinggiz")
// }else if(promt == 0){
//     alert("Siz 0 sonini kiritdinggiz")
// }else{
//     alert("Siz Toq , Musbat son kiritdinggiz")
// }