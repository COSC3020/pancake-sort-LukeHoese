function flip(array, n) {
    // initialize j to rightmost index
    let j = n - 1;
    // start i at leftmost index (0), move i right and j left by one each loop until they meet in the middle
    for (let i = 0; i < j; i++) {
        // swap current left and right element
        [array[i], array[j]] = [array[j], array[i]];
        // this is where j is moved left every loop
        j--;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let length = array.length;

    // sort using a loop that works from right to left
    for (let i = length; i > 1; i--) {
        // initialize a variable that will hold current largest unsorted element
        let largestIndex = 0;
        // loop over every unsorted element
        for (let j = 1; j < i; j++) {
            // if current value is larger than value stored at largestIndex, store current index in largestIndex
            if (array[j] > array[largestIndex]) {
                largestIndex = j;
            }
        }

        // if element stored at largestIndex is already in sorted spot, skip flips
        if (largestIndex != i - 1) {
            // if current largest element is not at 0 index, flip it there
            if (largestIndex != 0) {
                flip(array, largestIndex + 1);
            }
            // now flip largest element to its correct spot, the furthest right unsorted position
            flip (array, i)
        }
    }
        
    return array;
}
