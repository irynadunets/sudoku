module.exports = function solveSudoku(matrix) {
  let Sudoku = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j <  matrix.length; j++) {
        if (matrix[i][j] === 0) {
          for (let k = 1; k <=  matrix.length; k++) {
            let check = true;
            for (let l = 0; l <  matrix.length; l++) {
              if (matrix[i][l] == k || matrix[l][j] == k || matrix[3 * Math.floor(i / 3) + Math.floor(l / 3)][3 * Math.floor(j / 3) + l % 3] == k) check = false;
              }
            if(check){
              matrix[i][j] = k;
            if (Sudoku(matrix)) {
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
 if(Sudoku(matrix)) return matrix;
  }
