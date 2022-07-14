"use strict";

//Phase One: Services
const WPConfig = 2;
const imageObtaining = 0.2;
const standardPage = 1;
const header = 1;
const footer = 1;
const landingPage = 4;
const blog = 3;
const eCommerce = 10;
const standardSection = 1;
const language = 0.2;
const languagesMenu = 3;
const meeting = 1;
const standardSEO = 4;
const deploy = 1;

//Phase Two: Multipliers
let hourPrice = 0;
const hourPriceLatam = 10;
const hourPriceEEUU = 20;
const margin = 0.1;
const urgency = 0.2;
let views = 0;

//Phase Three: Basic Costs
const hosting = 50;
const domain = 15;
const SSL = 15;


//Phase Four: Final Transformations

const paypal = 0.058;
const USD = 39.35;

const questions = [
"Have you already bought any domain for your site?", 
"Have you already contracted a hosting for your site?",
"Where is the majority of your target audience located?",
"Do you need this web to be created in a short time?",
"Do you already have the necessary images for the site?",
"What kind of website is it?",
"How many sections would the site have?.",
"A website can have multiple pages, how many would this one have?",
"How many languages would you want the website to have?",
"How many zoom meetings would you like to have with me during the development?"
];
let question = 1;

const answers = [
{
    "opt1" : "Yes",
    "opt2" : "No", 
    "opt3" : "I Don´t Know What That Means", 
    "opt4" : "", 
    "opt5" : "", 
    "opt6" : "",  
},
{
    "opt1" : "Yes",
    "opt2" : "No", 
    "opt3" : "I Don´t Know What That Means", 
    "opt4" : "", 
    "opt5" : "", 
    "opt6" : "",  
},
{
    "opt1" : "EEUU",
    "opt2" : "Europe", 
    "opt3" : "Latam", 
    "opt4" : "Around the world", 
    "opt5" : "Other", 
    "opt6" : "",  
},
{
    "opt1" : "Yes, it´s urgent",
    "opt2" : "No, but the faster the better", 
    "opt3" : "No, I have time in order to get a better result", 
    "opt4" : "", 
    "opt5" : "", 
    "opt6" : "",  
},
{
    "opt1" : "Yes",
    "opt2" : "No, but I´ll get them", 
    "opt3" : `No, I want you to get them (1-5 images)`, 
    "opt4" : "No, I want you to get them (6-10 images)", 
    "opt5" : "No, I want you to get them (+10 images)",
    "opt6" : "",   
},
{
    "opt1" : "Basic Page (just for having online presence)",
    "opt2" : "Landing Page", 
    "opt3" : "Blog", 
    "opt4" : "E-Commerce", 
    "opt5" : "Other",  
    "opt6" : "", 
},
{
    "opt1" : "4-6",
    "opt2" : "7-9", 
    "opt3" : "10-12", 
    "opt4" : "13-15", 
    "opt5" : "+15", 
    "opt6" : "",  
},
{
    "opt1" : "1",
    "opt2" : "2-3", 
    "opt3" : "4-5", 
    "opt4" : "6-8", 
    "opt5" : "+8",
    "opt6" : "",   
},
{
    "opt1" : "1",
    "opt2" : "2", 
    "opt3" : "3-4", 
    "opt4" : "5-7", 
    "opt5" : "8-10", 
    "opt6" : "+10",  
},
{
    "opt1" : "2 (At the beginning and at the end)",
    "opt2" : "3 (One more in the middle)", 
    "opt3" : "4-5 (Only big projects)", 
    "opt4" : "", 
    "opt5" : "",  
    "opt6" : "", 
},
]


//Conditioners
let needHosting = 0;
let needDomain = 0;
let needWPConfig = 0;
let imagesNeeded = 0;
let totalPages = 0;
let totalSections = 0;
let needLandingPage = 0;
let needBlog = 0;
let needECommerce = 0;
let extraLanguages = 0;
let needUrgency = 0;
let needDesign = 0;
let meetings = 0;
let nativeWeb = 1;
let needNative = 0;
let needManteinance = 0;
let impossible = 0;
let webPackage = 0; 

// Costs
let totalHours = 0;
let finalCostUSD = 0;
let finalCostUYU = 0;
let mantainanceCostUSD = 0;
let mantainanceCostUYU = 0;
let yearlyCostUSD = 0;
let yearlyCostUYU = 0;


//Next Button

const counter = document.querySelector(".counter");
const questionText = document.querySelector(".question");
const select = document.querySelector(".selection");
const options = [document.querySelector(".opt1"),
document.querySelector(".opt2"),
document.querySelector(".opt3"),
document.querySelector(".opt4"),
document.querySelector(".opt5"),
document.querySelector(".opt6")];
const down = document.querySelector(".main-down");
questionText.textContent = questions[question-1];

options[0].innerHTML = answers[question-1].opt1;
options[1].innerHTML = answers[question-1].opt2;
options[2].innerHTML = answers[question-1].opt3;
options[3].innerHTML = answers[question-1].opt4;
options[4].innerHTML = answers[question-1].opt5;
options[5].innerHTML = answers[question-1].opt6;
options.forEach(element => {
    if (element.textContent == ""){element.setAttribute("hidden", "");}
    else{element.removeAttribute("hidden");}
});

down.addEventListener("click", ()=>{
    question++;
    questionText.textContent = questions[question-1];
    counter.textContent = question + "/10";
    

    if(question>10){
        select.style.display = "none";
        down.style.display = "none"
        processAnswer();
        calculatePrice();
    }

    options[0].textContent = answers[question-1].opt1;
    options[1].textContent = answers[question-1].opt2;
    options[2].textContent = answers[question-1].opt3;
    options[3].textContent = answers[question-1].opt4;
    options[4].textContent = answers[question-1].opt5;
    options[5].textContent = answers[question-1].opt6;
   
    options.forEach(element => {
        if (element.textContent == ""){element.setAttribute("hidden", "");}
        else{element.removeAttribute("hidden");}
    });
    processAnswer();
    
})

//Not accepted answers

function blockAnswer(){
    question--;
    questionText.textContent = questions[question-1];
    counter.textContent = question + "/10";
    options[0].textContent = answers[question-1].opt1;
    options[1].textContent = answers[question-1].opt2;
    options[2].textContent = answers[question-1].opt3;
    options[3].textContent = answers[question-1].opt4;
    options[4].textContent = answers[question-1].opt5;
    options[5].textContent = answers[question-1].opt6;
    options.forEach(element => {
        if (element.textContent == ""){element.setAttribute("hidden", "");}
        else{element.removeAttribute("hidden");}
    });
}

//Test Answers Processing Machine 

function processAnswer(){
    switch(question){
        case 2:
            switch(select.selectedIndex){
                case 0: 
                    needDomain = 0;
                    break;
                
                case 1:
                    needDomain = 1;
                    break;

                case 2:
                    needDomain = 1;
                    break;

                case 3:
                    blockAnswer();
                    break;

                case 4:
                    blockAnswer();
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;

        case 3:
            switch(select.selectedIndex){
                case 0:
                    needHosting = 0;
                    break;
                
                case 1:
                    needHosting = 1;
                    break;

                case 2:
                    needHosting = 1;
                    break;

                case 3:
                    blockAnswer();
                    break;

                case 4:
                    blockAnswer();
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;
        
        case 4:
            switch(select.selectedIndex){
                case 0:
                    hourPrice = hourPriceEEUU;
                    break;
                
                case 1:
                    hourPrice = hourPriceEEUU;
                    break;

                case 2:
                    hourPrice = hourPriceLatam;
                    break;

                case 3:
                    hourPrice = hourPriceLatam;
                    break;

                case 4:
                    hourPrice = hourPriceLatam;
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;

        case 5:
            switch(select.selectedIndex){
                case 0:
                    needUrgency = 1;
                    break;
                
                case 1:
                    needUrgency = 0;
                    break;

                case 2:
                    needUrgency = 0;
                    break;

                case 3:
                    blockAnswer();
                    break;

                case 4:
                    blockAnswer();
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;
    
        case 6:
            switch(select.selectedIndex){
                case 0:
                    imagesNeeded = 0;
                    break;
                
                case 1:
                    imagesNeeded = 0;
                    break;

                case 2:
                    imagesNeeded = 3;
                    break;

                case 3:
                    imagesNeeded = 8;
                    break;

                case 4:
                    imagesNeeded = 15;
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;

        case 7:
            switch(select.selectedIndex){
                case 0:
                    break;
                
                case 1:
                    needLandingPage = 1;
                    break;

                case 2:
                    needBlog = 1; needWPConfig = 1; webPackage = 1
                    break;

                case 3:
                    needECommerce = 1; needWPConfig = 1; webPackage = 2;
                    break;

                case 4:
                    
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;

        case 8:
            switch(select.selectedIndex){
                case 0:
                    totalSections = 5 - (4*needLandingPage);
                    break; 
                
                case 1:
                    totalSections = 8 - (4*needLandingPage);
                    break;

                case 2:
                    totalSections = 11 - (4*needLandingPage);
                    break;

                case 3:
                    totalSections = 14 - (4*needLandingPage);
                    break;

                case 4:
                    totalSections = 20 - (4*needLandingPage);
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;

        case 9:
            switch(select.selectedIndex){
                case 0:
                    totalPages = 1;
                    break;
                
                case 1:
                    totalPages = 3;
                    break;

                case 2:
                    totalPages = 5;
                    break;

                case 3:
                    totalPages = 7;
                    break;

                case 4:
                    totalPages = 10;
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;

        case 10:
            switch(select.selectedIndex){
                case 0:
                    extraLanguages = 0;
                    break;
                
                case 1:
                    extraLanguages = 1;
                    break;

                case 2:
                    extraLanguages = 3;
                    break;

                case 3:
                    extraLanguages = 5;
                    break;

                case 4:
                    extraLanguages = 8;
                    break;

                case 5:
                    extraLanguages = 12;
                    break;

                default:
                    blockAnswer();
                    break;
                }
            break;

        case 11:
            switch(select.selectedIndex){
                case 0:
                    meetings = 2;
                    break;
                
                case 1:
                    meetings = 3;
                    break;

                case 2:
                    meetings = 5;
                    break;

                case 3:
                    blockAnswer();
                    break;

                case 4:
                    blockAnswer();
                    break;

                case 5:
                    blockAnswer();
                    break;

                default:
                    blockAnswer();
                    break;
                }       
            break;

        default:
            blockAnswer();
            break;
    }
}


//Calculating value

function calculatePrice(){

    //Select Package

    if(needECommerce){
        webPackage = 2;
    }
    else if(needBlog){
        webPackage = 1;
    }
    else if(totalPages > 5){
        webPackage = 4;
    }
    else{
        webPackage = 3;
    }

    //Setting Base Price

    let price = 0;
    if(webPackage == 1){
         price = 10*hourPrice;
         if(extraLanguages != 0){
            price += languagesMenu*hourPrice + (extraLanguages*2*hourPrice);
         }
    }
    else if(webPackage == 2){
        price = 20*hourPrice;
        if(extraLanguages != 0){
            price += languagesMenu*hourPrice + (extraLanguages*5*hourPrice);
         }
    }
    else{
        totalHours = (imageObtaining * imagesNeeded) + 
    (standardPage * totalPages) + header + 
    footer + (standardSection * totalSections) + 
    (landingPage * needLandingPage) + (blog * needBlog) + 
    (language * extraLanguages * totalSections) + 
    (language * extraLanguages * blog * needBlog) +
    (language * extraLanguages * eCommerce * needECommerce) + 
    (meeting * meetings) + (eCommerce * needECommerce) + 
    (WPConfig * needWPConfig) + standardSEO + deploy;
    price = totalHours * hourPrice;
    if(extraLanguages != 0){
        price += languagesMenu*hourPrice;
     }
    }

    //Multipliers

    price += price * margin; 
    price += price * urgency * needUrgency;
    price += price * paypal;
    yearlyCostUSD = (hosting * needHosting) + (domain * needDomain) + SSL;
    price += yearlyCostUSD;
    finalCostUSD = Math.round(price);
    finalCostUYU = Math.round(finalCostUSD * USD);
    yearlyCostUSD = Math.round(yearlyCostUSD);
    yearlyCostUYU = Math.round(yearlyCostUSD * USD);

    //Show Final Price

    counter.style.fontSize = "150%";
    counter.style.marginTop = "3vw";
    counter.innerHTML = `The estimated price of your website is: </br>
    ${finalCostUSD} USD (${finalCostUYU} UYU). </br> </br> 
    For keeping the site online, the cost per year is: </br> ${yearlyCostUSD} USD 
    (${yearlyCostUYU} UYU).`;
        
    
} 

/*This price is estimated and does not take into consideration 
more complex functionalities such as a searching bar or a quiz, 
those could increase the real price. This also dosen´t include
any strong update or change that could be needed after the release.
Lastly, have in mind that for big projects such as marketplaces or
web applications, this estimation could also be wrong.*/
