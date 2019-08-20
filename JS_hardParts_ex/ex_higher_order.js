function forEach(list, func){
  for (i in list){
    func(list[i]);
  }
}
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);



// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
function reduce(list, func, init){
  let result = init;
  for(i in list){
    result = func(list[i], result);
  }
  return result;
}
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));



// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

function intersection(arrays) {
  function biIntr(a1, a2){
    intrA = (a1.length == 0)? a2: (a2.length == 0)? a1 : [];
    for (i in a1){
      if (a2.includes(a1[i])){
        intrA.push(a1[i])
      }
    }
    return intrA;
  }
  intrA  = [];
  for (arr_index in arguments){
    intrA = biIntr(intrA, arguments[arr_index])
  }
  return intrA;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

function intersection2(arrays) {
  function biIntr(a1, a2){
    intrA = (a1.length == 0)? a2: (a2.length == 0)? a1 : [];
    for (i in a1){
      if (a2.includes(a1[i])){
        intrA.push(a1[i])
      }
    }
    return intrA;
  }

  resultArr = []
  resultArr = reduce(arguments, biIntr, resultArr);

  return resultArr;

}

// console.log(intersection2([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20], [15, 23], []));

function intersection3 (arrays){
  function biIntr(a1, a2){
    intrA = [];
    if (a1.length == 0 || a2.length == 0){
      return [];
    }
    else{
      for (i in a1){
        if (a2.includes(a1[i])){
          intrA.push(a1[i])
        }
      }
      return intrA;
    }
  }

  let result = [];
  let first = true;
  for (let i=0; i< arguments.length -1 ; i++){
    if (first){
      result = biIntr(arguments[i], arguments[i + 1]);
      first = false;
    }
    else{
      result = biIntr(result, arguments[i + 1])
    }
  }
  return result;
}
// console.log(intersection3([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20],[5,23]));

// Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
function union(arrays){
  function biUnion(a1, a2){
    result = a2;
    for (i in a1){
      if (result.includes(a1[i])){ continue;}
      result.push(a1[i])
    }
    console.log(result)
    return result;
  }

  result = [];
  result = reduce(arguments, biUnion, result);
  return result;
}
// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));

// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
function objOfMatches(array1, array2, callback) {
  obj = {}
  for (let i = 0; i < array1.length; i++){
    if (callback(array1[i]) === array2[i]){
      obj[array1[i]] = array2[i]
    }
    else{
      // return false
    }  
  }
  return obj
}
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arrVals, arrCallbacks) {
  obj = {}
  for (ar_ind in arrVals){
    let arr = []
    for (callback_ind in arrCallbacks){
      arr.push(arrCallbacks[callback_ind](arrVals[ar_ind]))
    }
    obj[arrVals[ar_ind]] = arr
  }
  return obj
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));