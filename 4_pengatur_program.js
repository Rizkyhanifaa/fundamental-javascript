function categorizeNumber(input) {
    if (typeof input !== 'number') {
        throw new Error('Input harus berupa bilangan bulat');
    }

    if (input === 0) {
        return "Nol";
    }

    if (input < 0) {
        return "Negatif";
    }

    if (input % 2 === 0) {
        return "Genap";
    }

    let isPrime = true;
    if (input === 1) {
        isPrime = false; 
    } else {
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    return isPrime ? "Prima" : "Ganjil";
}

// Contoh pemanggilan fungsi
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber("abc");
} catch (error) {
    console.log(error.message); 
}
