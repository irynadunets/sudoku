module.exports = function solveSudoku(matrix) {
  for(let i=0; i<matrix.length; i=i+1){
    let missed = [];
    let real = [];    
    for(let j=1; j<10; j=j+1){ 
      let findCount = matrix[i].filter(x => x===j).length;       
      if(findCount<1) missed.push(j);
    }   
    for(let k=0; k<matrix.length; k=k+1){
      if(matrix[i][k]===0||real.filter(x => x===matrix[i][k]).length>0){
        matrix[i][k]=missed.shift();
      } else {
        real.push(matrix[i][k]);
      }      
    }      
  }
  return matrix;
}
