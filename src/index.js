module.exports = function reverse (n) {
    let p = Math.abs(n);
    let result = 0;
    while(p) {
        result = result * 10 + p % 10;
        p = Math.floor(p / 10);
    }
    return result;
};
