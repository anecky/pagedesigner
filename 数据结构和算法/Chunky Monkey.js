function chunkArrayInGroups(arr, size) {
    let arr2=[];
    let str = arr.join("");
    let length = arr.length;
    let j=0;
    for(let i=0;i<length/size;i++){
        arr2[j] = str.split("",size);
    }
    return arr2;
  }
  function chunkArrayInGroups2(arr,size){
      let length = arr.length/size
      let arr2 = new Array();
      for(let i=0;i<length;i++){
          arr2[i] = new Array();
      }
      let j = 0;
      for(let i=0,t=0;i<arr.length;i++){
          if( t > size-1) {
              t=0;
              j++;
          }
          arr2[j][t] = arr[i]; 
          t++;
      }
      return arr2;
  }
  chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 2);