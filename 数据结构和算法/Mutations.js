function mutation(arr) {
    let arrHash = {}
    for(let i=0;i<=25;i++){
        let ch = String.fromCharCode(65+i);
        arrHash[ch] = 0;
    }
    for(let i=0;i<arr[0].length;i++){
        let ch = arr[0].charAt(i).toUpperCase();
        arrHash[ch]++;
    }
    for(let i=0;i<arr[1].length;i++){
        let ch = arr[1].charAt(i).toUpperCase();
        if(arrHash[ch]<=0) return false;
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));