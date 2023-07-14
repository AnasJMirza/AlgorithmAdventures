"use strict";
// in binary search array must be sorted!
// this algo is for accending sorted array!
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        // if arr[mid] === target
        if (arr[mid] === target) {
            return mid;
        }
        // if arr[mid] > target
        if (arr[mid] > target) {
            end = mid - 1;
        }
        // if arr[mid] < target
        if (arr[mid] < target) {
            start = mid + 1;
        }
    }
    return -1;
};
console.log(binarySearch([23, 45, 67, 79, 90, 1767, 3454, 234434], 67));
