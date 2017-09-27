/*
    Array = [3, 5, 10, 20, 12, 2, 1]

                3
        5               10
    20      12      2       1

*/

function heapSort(array) {
    let arrayLength = array.length;

    for (let i = Math.floor(arrayLength/2) - 1; i >= 0; i--) {
        heapify(array, i, arrayLength);
    }

    for (let i = array.length - 1; i >= 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        heapify(array, 0, i);
    }

    return array;
}

function heapify(array, index, arrayLength) {
    let largest = index;
    let left = (2*index)+1;
    let right = (2*index)+2;

    if (left < arrayLength && array[left] > array[largest]) {
        largest = left;
    }

    if (right < arrayLength && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== index) {
        let holder = array[index];
        array[index] = array[largest];
        array[largest] = holder;

        heapify(array, largest, arrayLength)
    }
}

function heapSortTest() {
    let array = [3, 5, 10, 20, 12, 2, 1];
    let solutionArray = [1, 2, 3, 5, 10, 12, 20];
    let passed = true;

    let sortedArray = heapSort(array);

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] != solutionArray[i]) {
            passed = false;
        }        
    }
    if (passed) {
        console.log('Passed', sortedArray);
    } else {
        console.log('Failed', sortedArray);
    }
}

heapSortTest();
