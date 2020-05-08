function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end - 1);
  r.push(end - 1);
  return r;
}

console.log(`${range(3, 10)}`);


function sumRec(arr) {
  if (arr.length === 0) {            // base case
    return 0;
  }
  
  let lastNum = (arr[arr.length - 1]);
  return sumRec(arr.slice(0, arr.length - 1)) + lastNum;
};

console.log(sumRec([1,2,3,4,5,6]));

// version1
function exponenet(base, exp) {
  return exp === 0 ? 1 : (base * exponenet(base, exp - 1));
}



// v 2 
function exponenet(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exponenet(base, (exp / 2)) ** ( 2);
  } else {
    return base * (exponenet(base, (exp - 1) / 2 ) ** 2);
  };

}
console.log(exponenet(50, 5));
console.log(exponenet(2, 0));
console.log(exponenet(81, 1));



function fib(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }
  let fibs = fib(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

console.log(`${fib(12)}`);

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }
  return arr.map((el) => {
    return deepDup(el);
  });
}

function bsearch(numbers, target) {
  if (numbers.length === 0) {
    return -1
  }

  const probeIdx = Math.floor(numbers.length / 2);
  const probe = numbers[probeIdx];

  if (target === probe) {
    return probeIdx
  } else if (target < probe) {
    const left = numbers.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    const right = numbers.slice(probeIdx + 1);
    const subProblem = bsearch(right, target);

    return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
  } 
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}