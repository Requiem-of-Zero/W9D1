function sum() {
    let args = Array.from(arguments);
    let sum = 0;

    args.forEach(num => {
        sum += num;
    });

    return sum;
}

// const nums = [1,2,3,4]

// function spreadSum(...args) {
//     let sum = 0;
//     args.forEach(num => {
//         sum += num;
//     });
    
//     return sum;
// }

// Function.prototype.myBind = function() {
//     let bindArgs = Array.from(arguments).slice(1); //bind time
//     let context = arguments[0];
//     let targetFunc = this;
//     return function(){
//       let callArgs = Array.from(arguments) //call time
//       return targetFunc.apply(context, bindArgs.concat(callArgs));
//     };
// }

Function.prototype.myBind = function(...args) {
    let bindArgs = args.slice(1); //bind time
    let context = args[0];
    let targetFunc = this;
    return function(...cArgs){
      let callArgs = cArgs;  //call time
      return targetFunc.apply(context, bindArgs.concat(callArgs));
    };
}

function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, ele) => acc += ele);
    } else {
      return _curriedSum;
    }
  }
}

// const sum = curriedSum(4);

Function.prototype.curry = function(numArgs) {
  let args = [];
  let targetFunc = this;

  return function _curriedArg(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return targetFunc(...args)
      // return targetFunc.apply(null, args)
    } else {
      return _curriedArg;
    }
  }
}

const curried = sum.curry(4)
