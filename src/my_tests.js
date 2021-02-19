
// You should implement your task here.

function towelSort(matrix) {

    let array = []
    if (!Array.isArray(matrix) || matrix.length == 0) {
        return []
    }


    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                array.push(matrix[i][j])
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                array.push(matrix[i][j])
            }
        }
    }
    return array;
}

// let matrix = [       test passed
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
//    ]

// let matrix = [       test passed
//    [1, 2],
//    [3, 4],
//    ]

// let matrix = [       test passed
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]

// let matrix = [       test passed
//     [1, 2, 4],
//     [5, 6, 7, 8],
//     [9, 12],
// ]


console.log('result = ' + towelSort(matrix))
console.log('matrix = ' + matrix)
