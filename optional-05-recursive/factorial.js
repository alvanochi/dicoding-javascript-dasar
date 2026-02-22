function factorial(n) {
    // Base case: faktorial dari 0 atau 1 adalah 1
    if (n <= 1) {
        return 1;
    }

    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
