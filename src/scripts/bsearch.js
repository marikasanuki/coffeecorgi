binarySearch(sortedArray, target) { // if the array does not contain the target, then the function will return -1
        if (sortedArray.length === 0) {
            return -1;
        }

        const midIndex = Math.floor(sortedArray.length / 2);

        if (sortedArray[midIndex] === target) {
            return midIndex;

        } else if (sortedArray[midIndex] > target) { //then target is potentially in the left side of the array
            return this.binarySearch(sortedArray.slice(0, midIndex), target); 

        } else if (sortedArray[midIndex] < target) {
            const rightSide = this.binarySearch(sortedArray.slice(midIndex + 1), target); //then target is potentially in the left side of the array. adding +1 because the left half includes the midIndex element for JS slice
            if (rightSide === -1) {
                return -1;
            } else {
                const finalIdx = rightSide + midIndex + 1;
                return finalIdx;
            }
        }


    }