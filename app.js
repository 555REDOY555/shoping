function allUpToDate(isUp) {
     let caseInput = document.getElementById("case-count");
     let caseNumber = caseInput.value;
     if (isUp == true) {
          caseNumber = parseInt(caseNumber) + 1;
     }
     else if (caseNumber > 0) {
          caseNumber = parseInt(caseNumber) - 1;
     }
     caseInput.value = caseNumber;

     // updating case total 
     const CaseTotal = document.getElementById('case-total');
     CaseTotal.innerText = caseNumber * 59;

}

document.getElementById("case").addEventListener('click', function () {
     allUpToDate(true)
})

// case minus 

document.getElementById("case-minus").addEventListener('click', function () {

     allUpToDate(false)
})


// phone number 
function allUpToDateALL(isUp) {
     let phoneInput = document.getElementById("phone-count");
     let phoneNumber = phoneInput.value;
     if (isUp == true) {
          phoneNumber = parseInt(phoneNumber) + 1;
     }
     else if (phoneNumber > 0) {
          phoneNumber = parseInt(phoneNumber) - 1;
     }
     phoneInput.value = phoneNumber;

     // updating phonetotal 
     const phoneTotal = document.getElementById('phone-total');
     phoneTotal.innerText = phoneNumber * 1219;

}

document.getElementById("phone").addEventListener('click', function () {
     allUpToDateALL(true)
})

//phone minus 

document.getElementById("phone-minus").addEventListener('click', function () {

     allUpToDateALL(false)
})