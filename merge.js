

function mergeSort(array) {
    if (array.length <= 1) return array;


    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
}



function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {

            result.push(left[leftIndex])
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

let unSorted = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArray = mergeSort(unSorted);
console.log(unSorted, sortedArray)

