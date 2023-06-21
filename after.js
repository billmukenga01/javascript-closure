// ADD CODE HERE
function after(num, callback){

    //num = 3
    //callback = called

    let counter = 1;
    
    function inner(string){
        if (counter < num){
            counter ++;
        }else if(counter === num){
            return callback(string);
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