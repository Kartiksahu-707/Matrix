
function transposeMatrix() {
    let matrix = [];
    let result = [];

    // Get values from input fields and convert them to a matrix
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);

    // Populate the matrix from input fields
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = parseInt(document.getElementById('matrix_' + i + '_' + j).value);
        }
    }

    // Compute the transpose of the matrix
    for (let i = 0; i < cols; i++) {
        result[i] = [];
        for (let j = 0; j < rows; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    // Display the result in the HTML table
    let resultTable = document.getElementById('result');
    resultTable.innerHTML = '';
    for (let i = 0; i < cols; i++) {
        let row = resultTable.insertRow(i);
        for (let j = 0; j < rows; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = result[i][j];
        }
    }
}


// Function to create matrix input fields
function createMatrixInput(rows, cols) {
    let matrixTable = document.getElementById('matrix');
    matrixTable.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let row = matrixTable.insertRow(i);
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell(j);
            let input = document.createElement('input');
            input.type = 'number';
            input.id = 'matrix_' + i + '_' + j;
            cell.appendChild(input);
        }
    }
}

// Event listeners to dynamically create matrix input fields
document.getElementById('rows').addEventListener('input', function() {
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);
    createMatrixInput(rows, cols);
});

document.getElementById('cols').addEventListener('input', function() {
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);
    createMatrixInput(rows, cols);
});