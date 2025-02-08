// To be implemented ... change color to red when negative, change back to black when positive 


// This code include the addition section for the calculation
function addition(){
    const input1 = Number(document.getElementById("first-number").value);
    const input2 = Number(document.getElementById("second-number").value);
    const output = document.getElementById("output");

    let errorhandle = "";
    if (isNaN(input1) || isNaN(input2)) {
        errorhandle = "Please enter a real numbers!!";
        output.innerHTML = errorhandle;
    }
    else{
        let result = input1 + input2;
        output.innerHTML = String(result);
        output.style.color = result < 0 ? "red" : "black";
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
    }
    
}

// this code include the subtraction section for the calculation
function subtraction(){
    const input1 = Number(document.getElementById("first-number").value);
    const input2 = Number(document.getElementById("second-number").value);
    const output = document.getElementById("output");

    let errorhandle = "";
    if (isNaN(input1) || isNaN(input2)) {
        errorhandle = "Please enter a real numbers!!";
        output.innerHTML = errorhandle;
    }
    else{
        let result = input1 - input2;
        output.innerHTML = String(result);
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
    }
}

// this code include the multiplication section for the calculation
function multiplication(){
    const input1 = Number(document.getElementById("first-number").value);
    const input2 = Number(document.getElementById("second-number").value);
    const output = document.getElementById("output");

    let errorhandle = "";
    if (isNaN(input1) || isNaN(input2)) {
        errorhandle = "Please enter a real numbers!!";
        output.innerHTML = errorhandle;
    }
    else{
        let result = input1 * input2;
        output.innerHTML = String(result);
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
    }
}

// this code include the division section for the calculation
function division(){
    const input1 = Number(document.getElementById("first-number").value);
    const input2 = Number(document.getElementById("second-number").value);
    const output = document.getElementById("output");

    let errorhandle = "";
    if (input2 === 0) {
        errorhandle = "Cannot divide by zero!";
        output.innerHTML = errorhandle;
    }
    else if (isNaN(input1) || isNaN(input2)) {
        errorhandle = "Please enter a real numbers!!";
        output.innerHTML = errorhandle;
    }
    else{
        let result = input1 / input2;
        output.innerHTML = String(result);
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
    }

}

// this code include the power section for the calculation
function power(){
    const input1 = Number(document.getElementById("first-number").value);
    const input2 = Number(document.getElementById("second-number").value);
    const output = document.getElementById("output");
    
    let errorhandle = "";
    if (isNaN(input1) || isNaN(input2)) {
        errorhandle = "Please enter a real numbers!!";
        output.innerHTML = errorhandle;
    }
    else{
        let result = 1;
        for (let i = 0; i < input2; i++) {
            result *= input1;
        }
        output.innerHTML = String(result);

        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
    }
}
// this code include the clear section 
function clearcalc(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}