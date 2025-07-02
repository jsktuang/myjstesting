
// Initialize count to 0
let count = 0;

// Create functins to increase count of followers
function increaseCount(){
    count++;        // Increment the count by 1
    displayCount();     // Display the count
    checkCountValue();      // Check count value and display message
}


// Create the checkCountValue() function to check the value of count and trigger alerts when specific follower milestones (10 or 20) are reached
function checkCountValue(){
    if(count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
        }else if(count === 20){
            alert("Your Instagram post gained 20 followers! Keep it up!");
        }
    }


// Display the count in the HTML
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; 

}