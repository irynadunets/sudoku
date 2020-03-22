module.exports = function solveSudoku(matrix) {
  if(Fill(matrix)===true) return matrix;
}

function Check(matrix, i, j, k) {
    for (let z = 0; z < matrix.length; z++) {
        let m = 3 * Math.floor(i / 3) + Math.floor(i / 3);
        let n = 3 * Math.floor(j / 3) + z % 3;
        if (matrix[i][z] == k || matrix[z][j] == k || matrix[m][n] == k)  return false;
      }
    return true;
  }

function Fill(matrix) {
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(matrix[i][j] === 0) {
        for (let k = 1; k <= matrix.length; k++) {
          if (Check(matrix, i, j, k)) {
            matrix[i][j] = k;
          if(Fill(matrix)) {
           return true;
          } else {
           matrix[i][j] = 0;
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

