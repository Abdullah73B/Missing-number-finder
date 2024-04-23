function findMissing() {
    const input = document.getElementById('inputNumbers').value;
    const series = input.split(',').map(num => parseInt(num.trim())).sort((a, b) => a - b);
    
    let missing = findMissingNumber(series);
    let missingElement = document.querySelector(".missing");
    
    missingElement.textContent = missing !== "No missing number found" ? `The missing number is: ${missing} 🎯` : "No missing number found 😔";
}

function findMissingNumber(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== 1) {
            return numbers[i] + 1;
        }
    }
    return "No missing number found";
}
