
function addByX(num){
  return function (x){
    console.log(x+ num)
  }
}
var addByTwo = addByX(2);


function once(func){
  let flag = true;
  return function(x){
    if (flag){
      func(x)
      flag = false
    }
    else{
      console.log(x)
    }
  }
}
var onceFunc = once(addByTwo);
onceFunc(4)
onceFunc(10)
onceFunc(9001)



function after(count, func) {
  let myCount = 0;
  return function(x){
    myCount += 1;
    if (myCount >= count){
      func(x);
    }
    else{
      console.log('not yet')
    }
  }
}

var called = function() { console.log('hello') };
var tri_al = after(3, called);

tri_al();
tri_al();
tri_al();
tri_al();

var bi_al = after(2, called);
bi_al();
bi_al();
bi_al();
bi_al();


function delay(func, wait) {
  setTimeout(func, wait)
  
}
