// Linear search is an algorithm in which we loop over an array to find the target element
// time complexity = o(n)

// code

const linearSearch = (arr: number[], target: number): number => {
  for (const index in arr) {
    if (arr[index] === target) {
      return Number(index);
    }
  }
  return -1;
};

const arr: number[] = [23, 4, 64, 12, 57, 78, 1, 68];
const target = linearSearch(arr, 12);
console.log(target);
