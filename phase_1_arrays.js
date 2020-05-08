Array.prototype.uniq = function() {
    let result = [];
    this.forEach(function (ele) {
        if (!result.includes(ele)) {
            result.push(ele);
        }
    });
    return result;
}

// Array.prototype.uniq = function() {
//     let result = [];

//     for (let i = 0; i < this.length; i++) {
//         if (result.indexOf(this[i]) === -1) {
//             result.push(this[i]);
//         }   
//     }

//     return result;
// };

Array.prototype.twoSum = function() {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
        
      } 
    }  
  }
  return result;  
};

//write the transpose method: hint 0- use Array.from
//   to create empty array to populate with new order

Array.prototype.transpose = function() {
  const column = Array.from(
    { length: this[0].length },
    () => Array.from( { length: this.length })
  );
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      column[i][j] = this[j][i];
    }
  }
  return column;
}