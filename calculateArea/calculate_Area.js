// Declare two variables named length and width
let length;
let width;

// Create a function named calculateArea
function calculateArea(){

    // fetch value form user as input with document.getElementById
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    // Calculate the area
    let area = length * width;
    
    // Display the result toe the user interface
    document.getElementById('result').innerText = `The area of the rectangle is : ${area}`;
}

