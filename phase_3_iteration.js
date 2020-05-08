Array.prototype.bubbleSort = function (){
    //iterate through array check each ele and its next
    // for if b < a if so swap them and restart i++
    // if made a swap must do another i++
    //if no swap was made in prev i++ then return arr
    let sorted = false;
    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]]
                sorted = false;
            }
        }
    }
    return this;
};
console.log([5, 3, 4, 2, 1].bubbleSort());


String.prototype.subStrings = function () {
    const result = []
    
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1 ; j <= this.length; j++) {
            result.push(this.slice(i, j));
        }
    }
    return result;
};

console.log("prototype".subStrings());