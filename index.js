function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array");
    }

    return numbers.reduce((total, num) => {
        if (typeof num !== "number") {
            throw new Error("All elements must be numbers");
        }
        return total + num;
    }, 0);
}

const myNumbers = [10, 20, 30, 40];
const total = sumArray(myNumbers);
console.log("Total:", total);
