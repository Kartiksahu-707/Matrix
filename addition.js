
function addMatrices() {
    let matrixA = [];
    let matrixB = [];
    let result = [];

    // Get values from input fields and convert them to matrices
    let rowsA = parseInt(document.getElementById('rowsA').value);
    let colsA = parseInt(document.getElementById('colsA').value);
    let rowsB = parseInt(document.getElementById('rowsB').value);
    let colsB = parseInt(document.getElementById('colsB').value);

    // Populate matrixA from input fields
    for (let i = 0; i < rowsA; i++) {
        matrixA[i] = [];
        for (let j = 0; j < colsA; j++) {
            matrixA[i][j] = parseInt(document.getElementById('matrixA_' + i + '_' + j).value);
        }
    }

    // Populate matrixB from input fields
    for (let i = 0; i < rowsB; i++) {
        matrixB[i] = [];
        for (let j = 0; j < colsB; j++) {
            matrixB[i][j] = parseInt(document.getElementById('matrixB_' + i + '_' + j).value);
        }
    }

    // Matrix addition
    if (rowsA !== rowsB || colsA !== colsB) {
        alert("Matrices should have the same dimensions for addition.");
        return;
    }

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsA; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    // Display the result in the HTML table
    let resultTable = document.getElementById('result');
    resultTable.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
        let row = resultTable.insertRow(i);
        for (let j = 0; j < result[0].length; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = result[i][j];
        }
    }
}

// Function to create matrix input fields
function createMatrixInput(matrixId, rows, cols) {
    let matrixTable = document.getElementById(matrixId);
    matrixTable.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let row = matrixTable.insertRow(i);
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell(j);
            let input = document.createElement('input');
            input.type = 'number';
            input.id = matrixId + '_' + i + '_' + j;
            cell.appendChild(input);
        }
    }
}

// Event listeners to dynamically create matrix input fields
document.getElementById('rowsA').addEventListener('input', function() {
    let rowsA = parseInt(document.getElementById('rowsA').value);
    let colsA = parseInt(document.getElementById('colsA').value);
    createMatrixInput('matrixA', rowsA, colsA);
});

document.getElementById('colsA').addEventListener('input', function() {
    let rowsA = parseInt(document.getElementById('rowsA').value);
    let colsA = parseInt(document.getElementById('colsA').value);
    createMatrixInput('matrixA', rowsA, colsA);
});

document.getElementById('rowsB').addEventListener('input', function() {
    let rowsB = parseInt(document.getElementById('rowsB').value);
    let colsB = parseInt(document.getElementById('colsB').value);
    createMatrixInput('matrixB', rowsB, colsB);
});

document.getElementById('colsB').addEventListener('input', function() {
    let rowsB = parseInt(document.getElementById('rowsB').value);
    let colsB = parseInt(document.getElementById('colsB').value);
    createMatrixInput('matrixB', rowsB, colsB);
});
