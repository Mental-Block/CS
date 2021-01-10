(() => {
   
const createData = (num) => {
    let array = [];

    for (let index = 0; index < num; index++) {
        array[index] = Math.floor(Math.random() * 1000);     
    }

    return array
}

const divideArrays = (array, middle, tempArray, tempArrayTwo) => {
    for (let i = 0; i < array.length; i++) {
        if(i < middle){ tempArray[i] = array[i];}
        if(i >= middle) tempArrayTwo[i - middle] = array[i]
    } 
    return {
        arrayOne: tempArray, 
        arrayTwo : tempArrayTwo
    }
} 

const middle = (arrayLength) => {
    let middle = Math.round(arrayLength / 2)
    if(middle % 2 !== 0) middle + 1

    return middle
}

const DATASTUCTURES = (() => {

    return {}
})

const ALGORITMS = (() => {

    const bubblesort = (array) => {
    /* o(n)2 very slow*/
    let n = array.length 

    for (let y = 0; y < n; y++){ // iterate loop 1 for y index
        for (let x = 0; x < n; x++) { // iterate loop 2 for x index 
            if(array[x] > array[x + 1]) { // num > num2  
              [array[x], array[x + 1]] = [array[x+1], array[x]] // swap
             }
        }    
    }
    return array
    }

    const mergesort = (array) => {
        let mid = middle(array.length);

        const {arrayOne, arrayTwo} = divideArrays(array, mid, [], [])

        if(array.length <= 1){
           return array;
        } else {
           return merge(mergesort(arrayOne), mergesort(arrayTwo))
        }

        function merge(arrayOne, arrayTwo){
            let sorted = []

            while(arrayOne.length > 0 && arrayTwo.length > 0){
              if(arrayOne[0] < arrayTwo[0]){
                sorted.push(arrayOne.shift());
              } else{
                sorted.push(arrayTwo.shift());
              }
            }
            return sorted.concat(arrayOne).concat(arrayTwo);
          }
    }

    const quicksort = (array) => {

    }

    const binarySearch = (array, lookup) => {
        /* O(log n) much faster than o(n)*/
        let index = array.length / 2;

        for (let i = 0; i < array.length; i++) {
            
            const element = array[i];
            
        }
        
    }

  return {
    binarySearch, 
    bubblesort,
    mergesort,
  }
})()

let result = ALGORITMS.mergesort(createData(11));

console.log(result);
})()
