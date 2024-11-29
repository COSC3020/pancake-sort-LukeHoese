function flip(array, n) {
    let j = n - 1;
    for (let i = 0; i < j; i++) {
        [array[i], array[j]] = [array[j], array[i]];
        j--;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let length = array.length;

    for (let i = length; i > 1; i--) {
        let largestIndex = 0;
        for (let j = 1; j < i; j++) {
            if (array[j] > array[largestIndex]) {
                largestIndex = j;
            }
        }

        if (largestIndex != i - 1){
            if (largestIndex != 0) {
                flip(array, largestIndex + 1);
            }
            flip (array, i)
        }
    }
        
    return array;
}
