// using iteration method

function fibs(num = 0) {
    if (num <= 0) return 0;
    if (num === 1) return [0]
    let arr = [0, 1];

    for (let index = 2; index < num; index++) {
        arr[index] = arr[index - 1] + arr[index - 2];
    }
    return arr;
}

// console.log(fibs())

// using recursion method

// function fibsrec(num, first = 0, second = 1, arr = [0, 1]) {
//     if (num === 0) return;


//     if (num > 0)
//         arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];


//      [first, second].concat(fibsrec(num - 1, arr.length - 2, arr.length - 1, arr))
// }

// console.log(fibsrec(8))


function fibsrec(num = 1) {
    console.log("This was printed recursively");

    if (num <= 0) return 0;
    if (num === 1) return [0];
    if (num === 2) return [0, 1]
    const prev = fibsrec(num - 1);

    const current = prev[prev.length - 1] + prev[prev.length - 2];


    return prev.concat([current]);
}


// fibsrec(4);
// console.log(fibsrec(8))

