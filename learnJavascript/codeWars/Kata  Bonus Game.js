// For cards=[1,2,5], the output should be 50.

// All possible orders are:
// 1->2->5   bonus:1x2+2*4+5*8=50
// 1->5->2   bonus:1x2+5*4+2*8=38
// 5->1->2   bonus:5*2+1*4+2*8=30
// 5->2->1   bonus:5*2+2*4+1*8=26
// The maximum amount of bonus is 50.


function calc(cards){
    let result = 0;
    let count = 2;
    let a = 0;
        while(a < cards.length){
            console.log(result += cards[a] * count)
            count = count + count
            a++
        }
    return result
  }

//   console.log(calc([1,2,5])) // 50
  console.log(calc([4, 10, 2, 3, 1, 3, 1, 6, 9])) // 6722