const NUMS = [1, 2, 3, 4, 5]

Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

NUMS.myEach((num) => {
    console.log(`David's time #${num}  using the above function `)
})

Array.prototype.myMap = function (func) {
    const mapped = []

    this.myEach(ele => mapped.push(func(ele)) );

    return mapped;
};

   console.log(NUMS.myMap(num => num * num));
 

Array.prototype.myReduce = function (callb, initialValue) {
    let arr = this;

    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue;

    arr.myEach(el => result = callb(result, el));

    return result;
};

console.log(NUMS.myReduce( (total, item) => total + item ));