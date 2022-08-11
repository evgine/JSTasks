function fib(n) {
    if (typeof n === "number") {
        if (n < 0) {
            return n;
        }
        fib.cache = fib.cache ?? [];
        if (n < 2) {
            fib.cache[n] = n;
            return n;
        }
        if (!fib.cache[n]) {
            fib.cache[n] = fib(n - 1) + fib(n - 2);
        }
        return fib.cache[n];
    }
}
