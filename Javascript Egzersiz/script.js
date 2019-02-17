<!--Javascript-->
console.log("Sayfa yüklendi");

/*var x = 5;
var y = 5;

console.log("++x = " + (++x));
console.log("y++ = " + (y++));*/

/*var dogumYili = prompt('Doğum yılını giriniz');

if((2019-Number(dogumYili))>=18){
    console.log("Ehliyet alabilirsiniz")
}
else{
    console.log("Ehliyet alamazsınız. " + (18 - (2019-Number(dogumYili))) + " yıl beklemeniz gerekir.")
}*/


/*var ay = prompt("ayı giriniz");

switch(ay){
    case "ocak", "aralık", "şubat":
        console.log("Kış mevsimi");
        break;
    case "mart", "nisan", "mayıs":
        console.log("İlkbahar mevsimi");
        break;
    case "haziran", "temmuz", "ağustos":
        console.log("Yaz mevsimi");
        break;    
    case "eylül", "ekim", "kasım":
        console.log("Sonbahar mevsimi");
        break;
    default:
        console.log("Hatalı değer");
}*/

/*var k_username = "guest";
var k_password = "12345"
var denemeHakki=0;

do{
    var user= prompt("Kullanıcı adı");
    var pass = prompt("Şifre");
    
    if(user==k_username && pass==k_password){
        alert("giriş başarılı");
    }
    else{
        if(denemeHakki==3){
            alert("Deneme hakkiniz kalmadı");
            break;
        }
        alert("tekrar deneyin. Kalan deneme hakkınız : " +(3-denemeHakki));
        denemeHakki++;
    }
    
    
    
}while(!(user==k_username && pass==k_password));

*/


//***********************************OBJECT ÖRNEĞİ*******************************
/*var Arabalar = [
    {
        marka:'Opel',
        model:'Corsa',
        yil:'2015',
        renk:'Gri'
    },
    {
        marka:'Renault',
        model:'Clio',
        yil:'2012',
        renk:'Mavi'
    }
];

for(var i = 0; i<Arabalar.length; i++){
    console.log(Arabalar[i].marka);
    
    Object.keys(Arabalar[i]).forEach(function(e){
        console.log(`key=${e} value=${Arabalar[i][e]}`)
    });
}*/

//***********************************OBJECT ÖRNEĞİ*******************************

//----------------------------------------------------------------------------------------------------------------------

//*******************************TEK ÇİFT****************************************
/*var sayi = prompt("Sayi giriniz : ");

function tekMi(sayi){
    if(sayi%2==0){
        console.log(sayi + ' sayısı çifttir');
    }
    else{
        console.log(sayi + ' sayısı tektir');
    }
}

tekMi(sayi);*/

//*******************************TEK ÇİFT****************************************

//----------------------------------------------------------------------------------------------------------------------

//*******************************FAKTORİYEL**************************************
/*var sayi = prompt('Sayi giriniz : ');

function faktoriyel(sayi){
    
    if(sayi==0){
        return 1;
    }
    
    return sayi*(faktoriyel(sayi-1));
}

console.log(faktoriyel(sayi));*/

//*******************************FAKTORİYEL**************************************

//----------------------------------------------------------------------------------------------------------------------

//*******************************DİZİ ELEMANI YAZDIRMA***************************

/*var modeller = ['opel', 'renault', 'fiat', 'bmw'];

function diziYazdir(dizi){
    dizi.forEach(function(item){
       console.log(item); 
    });
}

diziYazdir(modeller);*/

//*******************************DİZİ ELEMANI YAZDIRMA***************************

//----------------------------------------------------------------------------------------------------------------------

//*******************************TARİH YAZDIRMA**********************************
/*var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1; //+1
var date = d.getDate();
if (month < 10) {
    month = "0" + month;
}
if (date < 10) {
    date = "0" + date;
}
today = (date + '-' + month + '-' +  year);
console.log(today);*/
//*******************************TARİH YAZDIRMA**********************************
    
//----------------------------------------------------------------------------------------------------------------------
    
//*********************************
/*var today = new Date();
var day = today.getDay();
var daylist = ["Pazar", "Pazartesi", "Salı", "Çarşamba ", "Perşembe", "Cuma", "Cumartesi"];
console.log("Bugün günlerden : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
/*var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}*/
//console.log("Saat : " + hour + "." + minute /* + " . " + second*/);



//****************************************************************************

/*function nonUniqueElements(data) {
    var dizi = [];
    var sonDizi = new Array();
    var tekrar = 0;
    
    for(var i = 0; i<data.length; i++){
        for(var j = 0; j<data.length; j++){
            if(data[i]!=data[j]){
                tekrar++;
                if(tekrar>=2)
                    dizi.push(data[i]);
                
            }
        }
    }
    console.log(dizi);
    return dizi;
}

nonUniqueElements([1, 2, 3, 1, 3]);
*/

//****************************************************************************

//******************************KUYRUK FONKSİYONU*****************************
/*function nextInLine(arr, item) {
  // Your code here
  var cikan;
  arr.push(item);
  cikan = arr.shift();

  return cikan;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));*/
//******************************KUYRUK FONKSİYONU*****************************

//--------------------------------------------------------------------------------------------------------------

//******************************SPLIT FONKSİYONU******************************
/*var url	="http://85.111.95.17/026c631b38735d9a499b0fb96ab9b50e/87habythi15ng151.php";
var anahtar	=url.split("/");
//0 dan baslayan bir dizi
var bayrak	= anahtar["4"];
console.log(bayrak);*/
//******************************SPLIT FONKSİYONU******************************

//--------------------------------------------------------------------------------------------------------------

//******************************JSON İLE ÖRNEK********************************
// Setup
/*var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(1245, "album", "Riptide");

console.log(collection);*/
//******************************JSON İLE ÖRNEK********************************

//--------------------------------------------------------------------------------------------------------------

//******************************JSON İLE ÖRNEK 2******************************
//Setup
/*var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for(var i = 0; i<contacts.length; i++){
      if(contacts[i]["firstName"]==name){
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
      }
        
      
    }
    return "No such contact";
    
    
  }
// Only change code above this line


// Change these values to test your function
lookUpProfile("Akira", "likes");*/
//******************************JSON İLE ÖRNEK 2******************************

//--------------------------------------------------------------------------------------------------------------

//******************************RASTGELE SAYI*********************************
/*function randomRange(myMin, myMax) { //Herhangi bir aralıkta rastgele sayı üretmek için

  return Math.floor(Math.random()*(myMax-myMin+1))+myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
*/
//******************************RASTGELE SAYI*********************************

//--------------------------------------------------------------------------------------------------------------

//******************************SAYI TABANI***********************************
/*function convertToInteger(str) {
  return parseInt(str, 2);  //parseInt(string, radix); fonksiyonu ile taban dönüştürme de yapılabilir. str içindeki değerin
}                           //2 tabanında yazıldığını ifade eder.

convertToInteger("10011");*/
//******************************SAYI TABANI***********************************

//--------------------------------------------------------------------------------------------------------------

//******************************ARROW FUNCTION*********************************
//Verilen dizideki pozitif tam sayıların karesini bulan fonksiyon.
/*const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);*/
//******************************ARROW FUNCTION*********************************














































