const button = document.getElementById("register");

function registered(){
    console.log("Account Registered")

}

button.addEventListener("click", function() {
    const fname = document.getElementById("fullname").value;
    if (fname.trim() === "") {
        alert("Full name must be filled");
        return;
    }

    if (fname.length < 5){
        alert('Fullname must be at least 5 characters');
        return;
    }

    var wordcount = fname.trim().split(" ");
    if (wordcount.length < 2){
        alert('Fullname must be at least 2 letters');
        return;
    }

    const email = document.getElementById("email").value;
    if(!email.endsWith("@gmail.com")){
        alert('Email address must end with @gmail.com');
        return;
    }

    const bod = document.getElementById("bod").value;
    if (bod.trim() === "") {
        alert("Birth date must be filled");
        return;
    }

    const male = document.getElementById("male");
    const female = document.getElementById("female");

    if (!male.checked && !female.checked) {
        alert("Gender must be filled");
        return;
    }

    const password = document.getElementById("pass").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    let letter = false, number = false, capital = false, numcapital = 0;
    for(let i=0; i<password.length; i++){
        if(password[i] >= 'a' && password[i] <= 'z' || password[i] >= 'A' && password[i] <= 'Z'){
            letter = true;
        }

        if(password[i] >= '0' && password[i] <= '9'){
            number = true;
        }

        // numcapital = 0;
        if(password[i] === password[i].toUpperCase()){
            numcapital++;
        }

        if(numcapital > 0){
            capital = true;
        }
        
        if(letter && number && capital) break;
    }

    if(!letter || !number || !capital){
        alert('Password must have at least 1 letter, number and 1 capital character');
        return;
    }

    const country = document.getElementById("country").value;
    if (country.trim() === "") {
        alert("Country must be filled");
        return;
    }

    alert("Account Registered!");
    button.reset()
});