const fibonacci = function(idx) {
    if (idx < 0) return "OOPS";
    
    const arr = [1, 1];
    // subtract 1 because JS indexes start at 0
    for (let i = 0; i < Number(idx) - 1; i++) {
        const prev = arr[i];
        const curr = prev + arr[i+1]
        arr.push(curr);        
    }
    return arr[Number(idx) - 1];
};

// Do not edit below this line
module.exports = fibonacci;
