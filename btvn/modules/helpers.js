//bai5
export function calculateAverage(array) {
    const sum = array.reduce((acc, item) => acc + item, 0);
    return sum / array.length;
  }
  
  export function sortDescending(array) {
    return array.sort((a, b) => b - a);
  }
  
  export function sumPositiveNumbers(array) {
    return array.reduce((sum, item) => {
      if (item > 0) {
        return sum + item;
      }
      return sum;
    }, 0);
  }
  
  export function sumOddNumbers(array) {
    return array.reduce((sum, item) => {
      if (item % 2 !== 0) {
        return sum + item;
      }
      return sum;
    }, 0);
  }
  
  export function findSecondLargest(array) {
    const sortedArray = array.sort((a, b) => b - a);
    return sortedArray[1];
  }
  
  export function countPerfectSquares(array) {
    function isPerfectSquare(number) {
      return Math.sqrt(number) % 1 === 0;
    }
  
    const perfectSquares = array.filter(item => isPerfectSquare(item));
    return perfectSquares.length;
  }
  