const reverseSeq = n => {
    let result = [];
    for(let i = n; i >= 1; i--){
        if(i !== 0){
            result.push(i)
        }
    }
    return result
  };

  console.log(reverseSeq(5)) //[5,4,3,2,1]