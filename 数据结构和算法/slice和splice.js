function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let arr3 = [];
    for(let i=0;i<arr2.length;i++){
        arr3.push(arr2[i]);
    }
    arr3.splice(n,0,...arr1.slice(0,arr1.length));
    console.log(arr3)
    return arr3;

  }
  
  frankenSplice([1, 2], ["a", "b"], 1);