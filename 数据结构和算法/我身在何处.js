function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    for(let i=0;i<arr.length;i++){
      for(let j = 0;j<arr.length-i-1;j++){
          if(arr[j]>arr[j+1]){
              let number;
              number = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = number;
          }
      }
    }
    console.log(arr);
    let index = 0;
    for(let i=0;i<arr.length;i++){
      if(num>arr[i]){
        index++;
      }else{
        return index;
      }
    }
    return index;
  }
  
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));