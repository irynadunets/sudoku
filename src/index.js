module.exports = function solveSudoku(matrix) {
  if(Fill(matrix)) return matrix;
}

function Check(matrix, i, j, k) {
    for (let m = 0; m < matrix.length; m++) {        
        if (matrix[i][m] == k || matrix[m][j] == k )  return false;
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

