let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let fullName = document.getElementById('full-name').value
    let gender = document.getElementById('gender').value
    let Hobbies1 = document.getElementById("swim").checked
    let Hobbies2 = document.getElementById("read").checked
    let Hobbies3 = document.getElementById("dance").checked
    let Hobbies4 = document.getElementById("sing").checked
    let error = false
    




    if (isSubmitted) { ``
        globalIsSubmitted = true
    }


    if ((fullName.length >= 5) && (fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))) {
        document.getElementById('full-name-valid').style.display = 'block'
        document.getElementById('full-name-invalid').style.display = 'none'

    }
    else {
        document.getElementById('full-name-invalid').style.display = 'block'
        document.getElementById('full-name-valid').style.display = 'none'
        error = true
    }

    if (gender != 'None') {
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }  
    if (Hobbies1 || Hobbies2 || Hobbies3 || Hobbies4 ) {
        document.getElementById("hobbies-invalid").style.display = 'none'
        document.getElementById("hobbies-valid").style.display = 'block'
    } else {
        document.getElementById("hobbies-invalid").style.display = 'block'
        document.getElementById("hobbies-valid").style.display = 'none'
        error = true
    }
    let alertMessage = `Hobbies of ${fullName}(${gender}) are `
    if(Hobbies1){
      alertMessage = alertMessage + 'Swimming ';
    }
    if(Hobbies2){
      alertMessage = alertMessage + 'Reading Novels ';
    }
    if(Hobbies3){
      alertMessage = alertMessage + 'Dancing ';
    }
    if(Hobbies4){
      alertMessage = alertMessage + 'Singing ';
    }
    if(!error && isSubmitted){
          alert(alertMessage)
          document.getElementById("registration-form").reset();
          let validFeedback = document.getElementsByClassName("valid-feedback");
    for (i = 0; i < validFeedback.length; i++) {
      validFeedback[i].style.display = "none";
    }
    let invalidFeedback = document.getElementsByClassName("invalid-feedback");
    for (i = 0; i < invalidFeedback.length; i++) {
      invalidFeedback[i].style.display = "none";
    }
    }
}