function multiplyMatrices(){
    let matrixA = [];
    let matrixB = [];
    let result = [];

    // To get values from input fields and convert them into matrices
    let rowA = parseInt(document.getElementById('rowA').value);
    let colA = parseInt(document.getElementById('colA').value);
    let rowB = parseInt(document.getElementById('rowB').value);
    let colB = parseInt(document.getElementById('colB').value);

    // Making matrixA from input fields input area
    for(let i=0; i<rowA; i++){
        matrixA[i] = [];
        for(let j=0; j<colA; j++){
            matrixA[i][j] = parseInt(document.getElementById('matrixA_' + i + '_'+j).value);
        }
    }
    //   Making matrixA from input fields input area 
    for(let i=0; i<rowB; i++){
        matrixB[i] = [];
        for(let j=0; j<colB; j++){
          matrixB[i][j]= parseInt(document.getElementById('matrixB_' + i +'_'+j).value);
        }
    }
    // Matrix Multiplication
    if(colA !== rowB){
        alert("Matrices cannot be multiplies..");
        return ;
    }
    else{
       for(let i=0; i<rowA; i++){
        result[i] = [];
        for(let j=0; j<colB; j++){
            let sum =0;
            for(let k=0; k<colA; k++){
                sum = sum + matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
       } 
       // Displaying the resultant matrix in the html table
       let resultTable = document.getElementById('result');
       resultTable.innerHTML = '';
       for(let i=0; i<result.lenght; i++){
        let row = resultTable.insertRow(i);
        for(let j=0; j<result[0].length; j++){
            let cell = row.insertCell(j);
            cell.innerHTML = result[i][j];
        }
       }
    }
}
//function to creat matrix input fields
function createMatrixInput(matrixId,rows,cols){
    let matrixTable = document.getElementById(matrixId);
    matrixTable.innerHTML = '';
    for(let i=0; i<rows; i++){
        let row = matrixTable.insertRow(i);
        for(let j=0; j<cols; j++){
            let cel = row.insertCell(j);
            let input = document.createElement('input');
            input.type = 'number';
            input.id = matrixId + '_' + i + '_' +j;
            cell.appendChild(input);
        }
    }
}
        // Event listeners to dynamically create matrix input fields
        document.getElementById('rowA').addEventListener('input', function() {
            let rowA = parseInt(document.getElementById('rowA').value);
            let colA = parseInt(document.getElementById('colA').value);
            createMatrixInput('matrixA', rowA, colA);
        });

        document.getElementById('colA').addEventListener('input', function() {
            let rowA = parseInt(document.getElementById('rowA').value);
            let colA = parseInt(document.getElementById('colA').value);
            createMatrixInput('matrixA', rowA, colA);
        });

        document.getElementById('rowB').addEventListener('input', function() {
            let rowB = parseInt(document.getElementById('rowB').value);
            let colB = parseInt(document.getElementById('colB').value);
            createMatrixInput('matrixB', rowB, colB);
        });

        document.getElementById('colB').addEventListener('input', function() {
            let rowB = parseInt(document.getElementById('rowB').value);
            let colB = parseInt(document.getElementById('colB').value);
            createMatrixInput('matrixB', rowB, colB);
        });