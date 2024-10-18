// for Hindi
const langE1 = document.querySelector(".TheHindi");

const kriya = ["संस्कृत", "फिल्म निर्माण", "पुस्तकें", "प्रोग्रामिंग", "योग"];

let kriyaKhand = 0;
let akshar = 0;

const sabd1 = "पढ़";
const sabd2 = "सीख";
const sabd3 = "पुस्तकें";

updateSabd();


//function defination for Hindi Text
function updateSabd(){
    akshar++;
    langE1.innerHTML = `<h1>${kriya[kriyaKhand].slice(0, akshar)} ${kriya[kriyaKhand] === sabd3 ? sabd1 : sabd2} रहा हूँ</h1>`;

    if(akshar === kriya[kriyaKhand].length){
        kriyaKhand++;
        akshar = 0;
    }

    if(kriyaKhand === kriya.length)     kriyaKhand = 0;

    setTimeout(updateSabd, 500);
}




// for Angrezi
const langE2 = document.querySelector(".TheAngrezi");

const niche = ["Sanskrit", "Filmmaking", "Books", "Programming", "Yoga"];

let nicheIndex = 0;
let charIndex = 0;

const char1 = "Reading";
const char2 = "Practising";
const char3 = "Books";

updateText();


//function defination for Angrezi Text
function updateText(){
    charIndex++;
    langE2.innerHTML = `<h1>${niche[nicheIndex] === char3 ? char1 : char2} ${niche[nicheIndex].slice(0, charIndex)}</h1>`;

    if(charIndex === niche[nicheIndex].length){
        nicheIndex++;
        charIndex = 0;
    }

    if(nicheIndex === niche.length)     nicheIndex = 0;

    setTimeout(updateText, 500);
}



//Common function for updating text
// function updateSabd(letter, langE, interest, interestIndex){
//     letter++;
//     langE.innerHTML;
//     // = `<h1>${interest[interestIndex] === key3 ? key1 : key2} ${interest[interestIndex].slice(0, letter)}</h1>`;

//     if(letter === interest[interestIndex].length){
//         interestIndex++;
//         letter = 0;
//     }

//     if(interestIndex === interest.length)     interestIndex = 0;

//     setTimeout(updateSabd, 300);
// }