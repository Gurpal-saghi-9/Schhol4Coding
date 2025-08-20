// Write a function that takes a traffic light color and gives the correct instruction (e.g. "go" for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).

function trafficInstruction(color) {
    color = color.toLowerCase();  // normalize input
    if (color === "green") {
        return "Go";
    } else if (color === "red") {
        return "Stop";
    } else if (color === "yellow") {
        return "Caution";
    } else {
        return "Invalid color";
    }
}

// Example usage
console.log(trafficInstruction("Green"));   // Output: Go
console.log(trafficInstruction("red"));     // Output: Stop
console.log(trafficInstruction("YELLOW"));  // Output: Caution
console.log(trafficInstruction("blue"));    // Output: Invalid color
