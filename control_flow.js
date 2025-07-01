
// Use of if . . . else statements

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted!";

} else if (userRole === "manager") {
    accessLevel = "Limited access granted!"
} else {
    accessLevel = "No access granted!"
}
console.log("Access Level: ", accessLevel);

// Output: Full access granted


// Implement nested if ...else statements
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcom, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system."
}
console.log("User message:", userMessage);


//Switch statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Admisistrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;

    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category: ", userCategory);

// Ternary operator
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Note authenticated";

console.log("Authentication Status: ", authenticationStatus);