// ADD CODE HERE
function after(num, callback){
    let counter = 0;
    
    function inner(){
      if (counter < num){
        callback(string);
          counter ++;
        }else if(counter === num){
          callback(string);
        }
    }
    return inner;
  }
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  // UNCOMMENT THESE LINES TO TEST YOUR WORK
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed