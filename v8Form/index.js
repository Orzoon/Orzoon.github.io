/* ---------TASKS TO DO *----------*/
// Chnage EandGas divToggle on changing energyType
// add button for submission
// get all data from from and combine them all in an object
// validate
// Use DatePickerLibrary 

/* ------------------ */

/*  DOM ELEMENTS   */
const formElement = document.getElementById('comparison_form');
const additionalForm = document.querySelector('.additionalForm');
const movingYesNoRadio = document.comparison_form.moving;
const homeBusinessRadio = document.comparison_form.property_type;
// elements to show upon selecting yes
const moving_yes = document.getElementsByClassName('moving_yes');
const home = document.querySelectorAll('.home')
const business = document.querySelectorAll('.business')

// first_Question_energy_type
const energyCategoryElement = document.comparison_form.energy_category;

// additional EandGasDetails
const subEnergyDetails = document.querySelector(".subEnergyDetails");
const eandGasDetails = document.querySelector(".EandGasDetails");

// no details buttons ---> if no details
const noDetailsLink = document.querySelectorAll(".noDetails");

// billInfo elements
const billInfoForm = document.querySelectorAll(".billInfoForm");
const inputBillInfoBtn = document.querySelectorAll(".detailsButton");

// radio Button Eelectricity types
const radioElectricityCharged = document.getElementById('billInfoForm1').elecCharged;
const eelecChargedInputsDiv = document.querySelectorAll(".elecChargedInputsDiv");
eelecChargedInputsDiv.forEach(element => {
    element.style.display = "none"
});

const BIFElectricityDIV = document.querySelector(".elecChargedQues");
const BIFGasDIV = document.querySelector(".gasChargedQues");
BIFElectricityDIV.style.display = 'none';
BIFGasDIV.style.display = "none";



// variables to check values
let energyCategoryValue = null;
let movingYesNoAnswer= "";
let yesnoSet = null;
let homeBusinessValue = null;
let noDetailsFirstClicked = null;

// styles
let orangeColor = "rgb(247, 111, 38)";

// energyDetailsContainer
const energyDetailsContainer = document.querySelector('.energyDetails');
// hiding initially
energyDetailsContainer.style.display = "none";
additionalForm.style.display = "none";
// for dynamic heading
const energyDetailsHeading = document.getElementsByClassName('energyDetailsHeading')[0];

// hiding additional form
//additionalForm.style.display = "none";
// hiding moving conditional quesitons initially
for(let i = 0; i < moving_yes.length; i++){
    moving_yes[i].style.display = "none";
}
for (let i = 0; i < billInfoForm.length; i++){
    billInfoForm[i].display = "none";
}
// setting-adding eventListener to energyCategoryElement first___one // energyCategoryValue
for(let i = 0; i < energyCategoryElement.length; i++){
    energyCategoryElement[i].addEventListener('click', (e) => {
        energyCategoryValue = e.target.value;
        if(movingYesNoAnswer === "no"){
            showEnergyDetails(energyCategoryValue);
        }
    });
}

//adding event listenr to all the propertyTypeRadio
for(let i = 0; i < movingYesNoRadio.length; i++){
    movingYesNoRadio[i].addEventListener('click',movingYesNoFunc, false);
    //adding event listenr to all the propertyTypeRadio homeBusinessRadio
    homeBusinessRadio[i].addEventListener('click', (e) => {
        homeBusinessValue = e.target.value;
        movingHomeBusinesSection();
    }, false)
}

// event listeners to noDetails link
for(let i = 0; i < noDetailsLink.length; i++){
    noDetailsLink[i].addEventListener('click', (e) => {
        inputBillInfoBtn[i].style.color = "#138FD6";
        billInfoForm[i].style.display = "none";
        movingHomeBusinesSection();

        e.preventDefault();
        noDetailsLink[i].style.color = orangeColor;
        
        /*--------
            // 0 AND 1
        --------*/
        
        if(i === 0 && energyCategoryValue !== "Electricity & Gas" ){
            additionalForm.style.display = "block";
            noDetailsFirstClicked = false;
        }
        else if( i === 0 && energyCategoryValue === "Electricity & Gas"){
            additionalForm.style.display = "none";
            noDetailsFirstClicked = true;
            
        }
        else if(i === 1 && energyCategoryValue === "Electricity & Gas"){
            // check wether noDetails button is selected or not
            if(noDetailsFirstClicked){
                additionalForm.style.display = "block";
            }
        }
        
    }, false)
}

// event listener for inputbillInfo button
for(let i = 0; i < inputBillInfoBtn.length; i ++){
    // hiding billInfoFromInitially
    billInfoForm[i].style.display = "none";

    inputBillInfoBtn[i].addEventListener("click", showHideBillInfoForm.bind(null, i, "clicked"), false)
}

function showHideBillInfoForm(i, clicked) {
        // check for selection // Electricity / gas / e and Gas
        if(clicked === "clicked"){
            billInfoForm[i].style.display = "block";
            noDetailsLink[i].style.color = "#138FD6"
            inputBillInfoBtn[i].style.color = orangeColor;
            if(window.getComputedStyle(additionalForm).display === "block"){
                additionalForm.style.display = "none";
            }
        }
    
        // checking for E g and E and g
        if(energyCategoryValue && energyCategoryValue !== "Gas"){
            // showing energy bullets
            BIFElectricityDIV.style.display = "block";
            BIFGasDIV.style.display = "none";
        }
        else {
            BIFElectricityDIV.style.display = "none";
            BIFGasDIV.style.display = "block";
        }
}
// event litener for radio elecChargedRadio button
for(let i = 0; i < radioElectricityCharged.length; i ++){
    
    radioElectricityCharged[i].addEventListener('click', (e) => {
       for(let j = 0; j < radioElectricityCharged.length; j ++){
            if(i === j){
                eelecChargedInputsDiv[j].style.display = "block"
            }
            else {
                eelecChargedInputsDiv[j].style.display = "none"
            }
       }
    
    }, false)
  
}
/* MOVING YES NO */
function movingYesNoFunc(event){
    // if moving "Yes" and energyCategoryValue is set !empty
    if(event.target.value === 'yes' && energyCategoryValue != null){
        movingYesNoAnswer = "yes";
        addMovingQuestions();
        removeEnergyDetails();
    }
    else if(event.target.value === "no" && energyCategoryValue != null){
        movingYesNoAnswer = "no";
        // removing previously shown questions
        removeMovingQuestions();
        // showing details instead
        showEnergyDetails(energyCategoryValue)
    }
}

/* questions to be added upon yes */
function addMovingQuestions(){
    
    for(let i = 0; i < moving_yes.length; i++){
        moving_yes[i].style.display = "block";
    }
    movingHomeBusinesSection();
}

function movingHomeBusinesSection(){
    if(!homeBusinessValue || !movingYesNoAnswer) return;
    if(homeBusinessValue === "MyHome" && movingYesNoAnswer ==="yes"){
        home[0].style.display = "block";
        business[0].style.display = "none";
    }
    else if(homeBusinessValue !== "MyHome" && movingYesNoAnswer ==="yes"){
        business[0].style.display = "block";
        home[0].style.display = "none";
    }
    else if(homeBusinessValue === "MyHome" && movingYesNoAnswer !=="yes"){
        home[1].style.display = "block";
        business[1].style.display = "none";
    }
    else if(homeBusinessValue !== "MyHome" && movingYesNoAnswer !=="yes"){
        business[1].style.display = "block";
        home[1].style.display = "none";
    }
}

function removeMovingQuestions(){
    for(let i = 0; i < moving_yes.length; i++){
        moving_yes[i].style.display = "none";
    }
}

function showEnergyDetails(energyCategoryValue){

    energyDetailsContainer.style.display = "block";

    switch(energyCategoryValue){
        case "Electricity & Gas":
              energyDetailsHeading.innerText = `Your Electricity Details`;
              eandGasDetails.style.display = "block";
              break;
        default:
            energyDetailsHeading.innerText = `Your ${energyCategoryValue} Details`;
            eandGasDetails.style.display = "none";
            billInfoForm[1].style.display = "none";

            break;
    }
}

function removeEnergyDetails(energyCategoryValue){
    if(energyCategoryValue !== "Electricity & Gas" && movingYesNoAnswer == "no"){
        eandGasDetails.style.display = "none";
    }
    else{
        energyDetailsContainer.style.display = "none";
    }
}



